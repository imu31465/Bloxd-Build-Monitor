# WASM module: `bloxd_wasm_webgl_bg`

> environment **bloxd.io** · build `3lwmg.ecbaa066` · analyzed 2026-11-22T23:29:33+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl_bg.0c2f376ad27c53cc11a0.wasm
> 5,451,804 bytes (5.2 MB) · sha256 `9f4c0bbaef65b13d…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,369,983 → 5,451,804 bytes (+81,821)
- defined functions 2,860 → 2,891
- code bytes 3,974,644 → 4,017,934
- data bytes 1,348,638 → 1,385,894
- name-section module id `d5a3fa870604c824.10797` → `bfd5293c7bc58d67.10847`
- export signatures: +1 × `(i32) -> (i32)`; +1 × `(i32) -> (i32 i32)`; +1 × `(i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)`; -1 × `(i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)`
- import signatures: +1 × `(i32) -> ()`
- export identifiers rotated by the obfuscator: 1/156 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `R8UnormR32FloatRgba8UnormBgra8UnormDepth24PlusDepth24PlusSte`; `uvOffsetmore than 65536 terrain ids: the rest are not drawna`
- removed embedded strings: `UV2VERTEXCOLORVERTEXALPHAOPACITYRGBEMISSIVELITE_REFLECTION_L`; `uvOffsetmore than 65536 terrain ids: the rest are not drawna`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,891 / 299 |
| Exports / imports | 156 / 299 |
| Code bytes (function bodies) | 4,017,934 (3.8 MB) |
| Total local variables | 30,559 |
| Instructions (scanable bodies) | 1,884,501 |
| Data segments / bytes | 3,937 / 1,385,894 |
| Element segments / entries | 1 / 750 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `bfd5293c7bc58d67.10847` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,486 | 175 |
| 2 | import | 3,590 | 299 |
| 3 | function | 2,940 | 2891 |
| 4 | table | 7 | 1 |
| 5 | memory | 5 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,249 | 156 |
| 9 | element | 1,507 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,023,232 | 2891 |
| 11 | data | 1,417,689 | 3937 |
| 0 | custom:name | 30 | — |

## Types

175 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

299 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `gVKx.u3P8` | func | `(i32) -> (f64)` |
| 1 | `gVKx.OhCr` | func | `() -> (i32)` |
| 2 | `gVKx.inRF` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `gVKx.qmgt` | func | `(i32) -> ()` |
| 4 | `gVKx.Uu9t` | func | `(i32 i32) -> (i32)` |
| 5 | `gVKx.hpK1` | func | `(i32) -> (i32)` |
| 6 | `gVKx.Y6wI` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `gVKx.m1Ym` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `gVKx.XMab` | func | `(i32) -> (i32)` |
| 9 | `gVKx.b3XF` | func | `(i32 i32) -> ()` |
| 10 | `gVKx.Rgw6` | func | `(i32 i32) -> ()` |
| 11 | `gVKx.GUnx` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `gVKx.VH7u` | func | `(i32 i32) -> (i32)` |
| 13 | `gVKx.JJu6` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `gVKx.NYMQ` | func | `(i32) -> (i32)` |
| 15 | `gVKx.TmEe` | func | `(i32 i32) -> (i32)` |
| 16 | `gVKx.Nple` | func | `(i32 i32) -> (i32)` |
| 17 | `gVKx.hpMc` | func | `(i32 i32) -> ()` |
| 18 | `gVKx.MbOg` | func | `(i32) -> (i32)` |
| 19 | `gVKx.Nlsr` | func | `(i32) -> (i32)` |
| 20 | `gVKx.jJmR` | func | `(i32) -> (i32)` |
| 21 | `gVKx.L82b` | func | `(i32) -> ()` |
| 22 | `gVKx.L5Ae` | func | `(i32 i32) -> ()` |
| 23 | `gVKx.d9P7` | func | `(i32 i32) -> ()` |
| 24 | `gVKx.mHBN` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `gVKx.wpbj` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `gVKx.ZG1m` | func | `(i32) -> (i32)` |
| 27 | `gVKx.R0Dr` | func | `(i32 i32) -> ()` |
| 28 | `gVKx.dqMw` | func | `(i32 i32) -> (i32)` |
| 29 | `gVKx.b4g4` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `gVKx.MI8n` | func | `(i32 i32) -> (i32)` |
| 31 | `gVKx.acSs` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `gVKx.UlAI` | func | `(i32) -> (i32)` |
| 33 | `gVKx.hzGg` | func | `(i32 i32) -> ()` |
| 34 | `gVKx.hQuR` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `gVKx.Wsst` | func | `(i32) -> (i32)` |
| 36 | `gVKx.JUxy` | func | `(i32) -> (i32)` |
| 37 | `gVKx.X6g9` | func | `(i32) -> (i32)` |
| 38 | `gVKx.OFME` | func | `(i32 i32) -> (i32)` |
| 39 | `gVKx.cGPK` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `gVKx.U3uc` | func | `(i32) -> (i32)` |
| 41 | `gVKx.GvSx` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `gVKx.EavV` | func | `() -> (f64)` |
| 43 | `gVKx.flsa` | func | `(i32) -> (i32)` |
| 44 | `gVKx.YNlv` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `gVKx.b8T1` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `gVKx.y23A` | func | `(i32 i32 i32) -> ()` |
| 47 | `gVKx.To6K` | func | `(i32 i32 i32) -> ()` |
| 48 | `gVKx.V5bw` | func | `(i32 i32 i32) -> ()` |
| 49 | `gVKx.SDzt` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `gVKx.T9dd` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `gVKx.qc0n` | func | `(i32 i32) -> ()` |
| 52 | `gVKx.huS4` | func | `(i32 i32) -> ()` |
| 53 | `gVKx.WOBB` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `gVKx.G6lD` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `gVKx.RMrt` | func | `(i32 f32 f32) -> ()` |
| 56 | `gVKx.TkQt` | func | `(i32 f32 f32) -> ()` |
| 57 | `gVKx.LhVG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `gVKx.QJwD` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `gVKx.IUZ2` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `gVKx.Uk0z` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `gVKx.vAqg` | func | `(i32 i32 i32) -> ()` |
| 62 | `gVKx.uiHq` | func | `(i32 i32 i32) -> ()` |
| 63 | `gVKx.MQlT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `gVKx.EMnP` | func | `(i32 i32 i32) -> ()` |
| 65 | `gVKx.r2xK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `gVKx.kJib` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `gVKx.m75b` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `gVKx.AvPz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `gVKx.KRgY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `gVKx.wEnD` | func | `(i32) -> (i32)` |
| 71 | `gVKx.LQxs` | func | `(i32) -> ()` |
| 72 | `gVKx.mvQO` | func | `(i32) -> (i32)` |
| 73 | `gVKx.UeAg` | func | `(i32 i32) -> (i32)` |
| 74 | `gVKx.h8RY` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `gVKx.Xm9q` | func | `(i32 i32 i32) -> ()` |
| 76 | `gVKx.QISo` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `gVKx.fS7s` | func | `() -> (f64)` |
| 78 | `gVKx.r91S` | func | `() -> (f64)` |
| 79 | `gVKx.mxlj` | func | `(i32 i32) -> ()` |
| 80 | `gVKx.Q3C7` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `gVKx.JQ5P` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `gVKx.Hb28` | func | `(i32 i32 i32) -> ()` |
| 83 | `gVKx.YS9P` | func | `(i32 i32 i32) -> ()` |
| 84 | `gVKx.RK81` | func | `(i32 i32) -> ()` |
| 85 | `gVKx.O6M8` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `gVKx.le0g` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `gVKx.qMJb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `gVKx.aQ8V` | func | `(i32 i32) -> ()` |
| 89 | `gVKx.EsWi` | func | `(i32 i32) -> ()` |
| 90 | `gVKx.MIvQ` | func | `(i32) -> (i32)` |
| 91 | `gVKx.a9FD` | func | `(i32 i32 i32) -> ()` |
| 92 | `gVKx.gtoy` | func | `(i32 i32 i32) -> ()` |
| 93 | `gVKx.IMy9` | func | `(i32) -> (i32)` |
| 94 | `gVKx.oIi9` | func | `(i32) -> (i32)` |
| 95 | `gVKx.MgNP` | func | `(i32 i32) -> ()` |
| 96 | `gVKx.bV75` | func | `(i32 i32) -> ()` |
| 97 | `gVKx.dQ7y` | func | `(i32 i32) -> ()` |
| 98 | `gVKx.nov3` | func | `(i32 i32) -> ()` |
| 99 | `gVKx.ghf7` | func | `(i32 i32 i32) -> ()` |
| 100 | `gVKx.NqPf` | func | `(i32 i32 i32) -> ()` |
| 101 | `gVKx.yWxu` | func | `(i32 i32 f32) -> ()` |
| 102 | `gVKx.ECBd` | func | `(i32 i32 f32) -> ()` |
| 103 | `gVKx.Ybet` | func | `(i32 i32 i32) -> ()` |
| 104 | `gVKx.iKPz` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `gVKx.nUta` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `gVKx.g80L` | func | `(i32 i32) -> ()` |
| 107 | `gVKx.FEQ3` | func | `(i32 i32) -> ()` |
| 108 | `gVKx.T4az` | func | `(i32 i32) -> ()` |
| 109 | `gVKx.q2Lt` | func | `(i32 i32) -> ()` |
| 110 | `gVKx.sJzE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `gVKx.y2Rt` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `gVKx.k5fg` | func | `(i32 i32 i32) -> ()` |
| 113 | `gVKx.z6hH` | func | `(i32 i32 i32) -> ()` |
| 114 | `gVKx.WjIH` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `gVKx.A27Q` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `gVKx.g6Xh` | func | `(i32 i32) -> ()` |
| 117 | `gVKx.Ex83` | func | `(i32 i32) -> ()` |
| 118 | `gVKx.W4AB` | func | `(i32 i32) -> (i32)` |
| 119 | `gVKx.gHC7` | func | `(i32 i32) -> (i32)` |
| 120 | `gVKx.ehsn` | func | `(i32 i32) -> ()` |
| 121 | `gVKx.gtMp` | func | `(i32 i32) -> ()` |
| 122 | `gVKx.WUAo` | func | `(i32) -> (i32)` |
| 123 | `gVKx.J04t` | func | `(i32 i32) -> ()` |
| 124 | `gVKx.Z37v` | func | `(i32 i32) -> ()` |
| 125 | `gVKx.sxcA` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `gVKx.Ife2` | func | `(i32 i32 i32) -> ()` |
| 127 | `gVKx.Nqht` | func | `(i32 i32 i32) -> ()` |
| 128 | `gVKx.O0RA` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `gVKx.qYum` | func | `(i32 i32) -> ()` |
| 130 | `gVKx.tLNz` | func | `(i32 i32 i32) -> ()` |
| 131 | `gVKx.c1Z4` | func | `(i32 i32 i32) -> ()` |
| 132 | `gVKx.Kzwt` | func | `(i32 i32 i32) -> ()` |
| 133 | `gVKx.hpDD` | func | `(i32 i32 i32) -> ()` |
| 134 | `gVKx.WRnf` | func | `(i32) -> ()` |
| 135 | `gVKx.bfRR` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `gVKx.h3Yh` | func | `(i32 i32 i32) -> ()` |
| 137 | `gVKx.QAlM` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `gVKx.LtCS` | func | `(i32 i32) -> ()` |
| 139 | `gVKx.NMa7` | func | `(i32) -> (i32)` |
| 140 | `gVKx.dOob` | func | `(i32 i32) -> ()` |
| 141 | `gVKx.Tugi` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `gVKx.TUZ0` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `gVKx.mdLD` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `gVKx.REzR` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `gVKx.LjBh` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `gVKx.gFK2` | func | `(i32 i32) -> ()` |
| 147 | `gVKx.vXLC` | func | `(i32 i32) -> ()` |
| 148 | `gVKx.nywY` | func | `(i32 i32) -> ()` |
| 149 | `gVKx.qlQX` | func | `(i32 i32) -> ()` |
| 150 | `gVKx.T8j5` | func | `(i32) -> (i32)` |
| 151 | `gVKx.yMUq` | func | `(i32) -> (i32)` |
| 152 | `gVKx.z23t` | func | `(i32) -> (i32)` |
| 153 | `gVKx.YVJA` | func | `(i32) -> (i32)` |
| 154 | `gVKx.dD77` | func | `(i32) -> (i32)` |
| 155 | `gVKx.fzT6` | func | `(i32) -> (i32)` |
| 156 | `gVKx.vzZx` | func | `() -> (i32)` |
| 157 | `gVKx.QCHC` | func | `() -> (i32)` |
| 158 | `gVKx.rBa4` | func | `() -> (i32)` |
| 159 | `gVKx.gMVR` | func | `() -> (i32)` |
| 160 | `gVKx.fiKn` | func | `(i32 i32) -> (i32)` |
| 161 | `gVKx.g4Qs` | func | `(i32) -> ()` |
| 162 | `gVKx.AiSe` | func | `(i32 i32) -> (i32)` |
| 163 | `gVKx.ERSB` | func | `(i32) -> (i32)` |
| 164 | `gVKx.QVob` | func | `(i32) -> (i32)` |
| 165 | `gVKx.rcoJ` | func | `(i32) -> (i32)` |
| 166 | `gVKx.X2ct` | func | `(i32) -> ()` |
| 167 | `gVKx.DhMj` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `gVKx.gEHS` | func | `(i32) -> (i32)` |
| 169 | `gVKx.tK38` | func | `(i32) -> (i32)` |
| 170 | `gVKx.GVrJ` | func | `(i32 i32) -> (i32)` |
| 171 | `gVKx.O29R` | func | `(i32) -> ()` |
| 172 | `gVKx.wTty` | func | `() -> (i32)` |
| 173 | `gVKx.qBRt` | func | `(i32 i32) -> (i32)` |
| 174 | `gVKx.r6cW` | func | `(i32 i32) -> ()` |
| 175 | `gVKx.HnxW` | func | `(i32 i32) -> ()` |
| 176 | `gVKx.YDlj` | func | `(i32) -> (i32)` |
| 177 | `gVKx.kGLd` | func | `(i32 i32) -> (i32)` |
| 178 | `gVKx.K6vx` | func | `(i32) -> ()` |
| 179 | `gVKx.dSjb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `gVKx.U8zj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `gVKx.u1BV` | func | `(i32 i32) -> ()` |
| 182 | `gVKx.cfJl` | func | `(i32 i32) -> ()` |
| 183 | `gVKx.dUF4` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `gVKx.gryj` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `gVKx.yBLj` | func | `(i32 f32) -> ()` |
| 186 | `gVKx.QBmR` | func | `(i32 f32) -> ()` |
| 187 | `gVKx.aFv9` | func | `(i32 i32) -> ()` |
| 188 | `gVKx.YB1k` | func | `(i32 i32) -> ()` |
| 189 | `gVKx.hhZB` | func | `(i32) -> (i32)` |
| 190 | `gVKx.Nhmg` | func | `(i32) -> (i32)` |
| 191 | `gVKx.ml2R` | func | `(i32) -> (i32)` |
| 192 | `gVKx.X1uu` | func | `(i32) -> (i32)` |
| 193 | `gVKx.t54I` | func | `(i32 i32 i32) -> ()` |
| 194 | `gVKx.KnNH` | func | `(i32 i32 i32) -> ()` |
| 195 | `gVKx.IsvG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `gVKx.J4OI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `gVKx.WLtE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `gVKx.rMom` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `gVKx.cxDy` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `gVKx.FyP9` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `gVKx.zqme` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `gVKx.tuLy` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `gVKx.bkID` | func | `(i32) -> (i32)` |
| 204 | `gVKx.vo4C` | func | `(i32) -> (i32)` |
| 205 | `gVKx.mDbv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `gVKx.Z3PV` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `gVKx.wqpF` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `gVKx.tKml` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `gVKx.KyDn` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `gVKx.Dfdn` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `gVKx.ruaw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `gVKx.LrYG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `gVKx.z9rp` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `gVKx.G8np` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `gVKx.FK9F` | func | `(i32 i32 i32) -> ()` |
| 216 | `gVKx.K7lW` | func | `(i32 i32 i32) -> ()` |
| 217 | `gVKx.aV1c` | func | `(i32 i32) -> ()` |
| 218 | `gVKx.SSjp` | func | `(i32 i32) -> ()` |
| 219 | `gVKx.POkT` | func | `(i32 i32) -> ()` |
| 220 | `gVKx.iG8W` | func | `(i32 i32) -> ()` |
| 221 | `gVKx.bPvV` | func | `(i32 i32) -> ()` |
| 222 | `gVKx.yWbh` | func | `(i32 i32) -> ()` |
| 223 | `gVKx.MkAr` | func | `(i32 f32 f32) -> ()` |
| 224 | `gVKx.kEV9` | func | `(i32 f32 f32) -> ()` |
| 225 | `gVKx.bwIa` | func | `(i32 i32) -> ()` |
| 226 | `gVKx.H3lA` | func | `(i32 i32) -> ()` |
| 227 | `gVKx.chJS` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `gVKx.q7rs` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `gVKx.vL61` | func | `(i32 i32 i32) -> ()` |
| 230 | `gVKx.dEI3` | func | `(i32) -> (i32)` |
| 231 | `gVKx.Ytqh` | func | `(i32) -> (i32)` |
| 232 | `gVKx.XjVn` | func | `(i32 i32) -> ()` |
| 233 | `gVKx.LGPD` | func | `(i32 i32) -> ()` |
| 234 | `gVKx.KDAw` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `gVKx.T9q1` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `gVKx.MACI` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `gVKx.rir1` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `gVKx.rAFH` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `gVKx.ndKG` | func | `(i32 i32 i32) -> ()` |
| 240 | `gVKx.BkiL` | func | `(i32 i32 i32) -> ()` |
| 241 | `gVKx.llsf` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `gVKx.HWU0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `gVKx.tNPQ` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `gVKx.LSRo` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `gVKx.NjxY` | func | `(i32) -> (i32)` |
| 246 | `gVKx.JwZy` | func | `(i32) -> (i32)` |
| 247 | `gVKx.MKIh` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `gVKx.EqNr` | func | `(i32 i32) -> ()` |
| 249 | `gVKx.Cro1` | func | `(i32 i32) -> ()` |
| 250 | `gVKx.jD59` | func | `(i32 i32) -> (i32)` |
| 251 | `gVKx.EXW4` | func | `(i32 i32) -> (i32)` |
| 252 | `gVKx.zQhL` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `gVKx.WZ5O` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `gVKx.JjPv` | func | `(i32 i32) -> ()` |
| 255 | `gVKx.LqCB` | func | `(i32 i32) -> ()` |
| 256 | `gVKx.NBqr` | func | `(i32) -> (i32)` |
| 257 | `gVKx.GumC` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `gVKx.nyZm` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `gVKx.WpRo` | func | `(i32) -> ()` |
| 260 | `gVKx.Mkaj` | func | `(i32 i32) -> ()` |
| 261 | `gVKx.Aat3` | func | `(i32 i32) -> ()` |
| 262 | `gVKx.t0lO` | func | `(i32 i32) -> ()` |
| 263 | `gVKx.WSPJ` | func | `(i32 i32) -> ()` |
| 264 | `gVKx.Cp1p` | func | `(i32 i32) -> ()` |
| 265 | `gVKx.G19u` | func | `(i32 i32) -> ()` |
| 266 | `gVKx.f0zN` | func | `(i32 i32) -> ()` |
| 267 | `gVKx.xYkP` | func | `(i32 i32) -> ()` |
| 268 | `gVKx.aNxw` | func | `(i32) -> (i32)` |
| 269 | `gVKx.TpEC` | func | `(i32) -> (i32)` |
| 270 | `gVKx.LsBU` | func | `(i32) -> (i32)` |
| 271 | `gVKx.QI06` | func | `(i32) -> (i32)` |
| 272 | `gVKx.Ff4q` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `gVKx.UTvU` | func | `(i32) -> ()` |
| 274 | `gVKx.UwKZ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `gVKx.E4Cr` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `gVKx.aXru` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `gVKx.qZpf` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `gVKx.kXae` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `gVKx.a8fC` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `gVKx.eRSE` | func | `(i32) -> (i32)` |
| 281 | `gVKx.q4YL` | func | `(i32) -> (i32)` |
| 282 | `gVKx.WKRX` | func | `(i32) -> (i32)` |
| 283 | `gVKx.HASe` | func | `(i32) -> (i32)` |
| 284 | `gVKx.WyLH` | func | `(i32 i32) -> ()` |
| 285 | `gVKx.P3SL` | func | `(i32) -> ()` |
| 286 | `gVKx.diyM` | func | `(i32 i32) -> ()` |
| 287 | `gVKx.oTJq` | func | `(i32) -> (i32)` |
| 288 | `gVKx.IeYA` | func | `(i32 i32) -> (i32)` |
| 289 | `gVKx.VsPL` | func | `(i32 i32) -> (i32)` |
| 290 | `gVKx.JOGa` | func | `(i32 i32) -> (i32)` |
| 291 | `gVKx.Y0ZW` | func | `(f64) -> (i32)` |
| 292 | `gVKx.kK9w` | func | `(i32 i32) -> (i32)` |
| 293 | `gVKx.CJmK` | func | `(i32 i32) -> (i32)` |
| 294 | `gVKx.KXL2` | func | `(i32 i32) -> (i32)` |
| 295 | `gVKx.ogpV` | func | `(i32 i32) -> (i32)` |
| 296 | `gVKx.Gj03` | func | `(i32 i32) -> (i32)` |
| 297 | `gVKx.wWhl` | func | `(i32 i32) -> (i32)` |
| 298 | `gVKx.ylsS` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `IgSP` | func | 887 | `(i32 i32) -> (i32)` |
| `uPbP` | func | 2989 | `(i32 i32) -> (i32 i32)` |
| `Jx0F` | func | 2452 | `(i32) -> (i32)` |
| `ap5x` | func | 3151 | `() -> (f64)` |
| `CL03` | func | 1994 | `(i32 f64) -> (i32)` |
| `L9xH` | func | 2456 | `(i32) -> ()` |
| `aSHM` | func | 3016 | `() -> (i32 i32)` |
| `JbK0` | func | 1866 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `EZ7e` | global | 1 | `` |
| `Z0Vu` | func | 1428 | `() -> (i32)` |
| `izAj` | func | 1210 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `wFxq` | func | 1873 | `(i32) -> ()` |
| `HbER` | func | 2408 | `(i32) -> (i32)` |
| `sAOH` | func | 2458 | `(i32) -> (i32)` |
| `ba0H` | func | 2449 | `(i32) -> (f64)` |
| `jiTh` | func | 1844 | `(i32 i32 f64 f64 f64) -> ()` |
| `YtiN` | func | 2471 | `(i32 i32) -> ()` |
| `b0aW` | func | 2435 | `(i32 i32) -> ()` |
| `VXht` | func | 3178 | `() -> (i32)` |
| `dx0H` | func | 2010 | `(i32 f64 f64 f64) -> (i32)` |
| `JEdm` | func | 2472 | `(i32) -> (i32)` |
| `qw5a` | func | 1734 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WzxI` | func | 3040 | `(i32 i32 i32 i32) -> ()` |
| `qZig` | func | 2528 | `(i32 i32) -> ()` |
| `Q4g7` | func | 1259 | `(i32 i32 i32) -> ()` |
| `iAGf` | func | 3004 | `(i32) -> (i32 i32)` |
| `YuwO` | func | 2136 | `(i32 i32) -> (i32)` |
| `OwZQ` | func | 2480 | `(i32 i32) -> (i32)` |
| `C6YW` | func | 2455 | `(i32) -> (i32)` |
| `sPNB` | func | 1583 | `(i32 f64 f64 f64) -> (i32)` |
| `aU7B` | func | 3003 | `(i32) -> (i32 i32)` |
| `Cdd9` | func | 994 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `sOh6` | func | 3002 | `(i32) -> (i32 i32)` |
| `pJ5u` | func | 1568 | `(i32 i32) -> (i32)` |
| `ScHo` | func | 1230 | `(i32 i32) -> (i32)` |
| `ZTCu` | func | 679 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `MnQv` | func | 1479 | `(i32 i32) -> (i32)` |
| `e7OL` | func | 2540 | `() -> (i32)` |
| `Etpe` | func | 2573 | `() -> (i32)` |
| `dg9c` | func | 1728 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `C84Q` | func | 2481 | `(i32 i32) -> (i32)` |
| `Vaud` | func | 2392 | `(i32) -> (i32)` |
| `rJRn` | func | 2987 | `(i32 i32) -> (i32 i32)` |
| `fH0b` | func | 2928 | `() -> ()` |
| `Va2W` | func | 2457 | `(i32) -> (i32)` |
| `XieK` | func | 2572 | `(i32 i32) -> ()` |
| `yyMR` | func | 1934 | `(i32 i32 i32 i32) -> ()` |
| `YJI1` | func | 2321 | `(i32 i32) -> (i32)` |
| `Nndp` | func | 1377 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `rsxN` | func | 2990 | `(i32 i32) -> (i32 i32)` |
| `Sp0c` | func | 2954 | `(i32 i32 i32 i32) -> (i32)` |
| `l3DA` | func | 2985 | `(i32 i32) -> (i32 i32)` |
| `TJcZ` | func | 1689 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `tJpL` | func | 1397 | `(i32 i32) -> (i32)` |
| `PiZT` | func | 3156 | `(i32) -> ()` |
| `HCCm` | global | 2 | `` |
| `hip2` | func | 2986 | `(i32 i32) -> (i32 i32)` |
| `tHIg` | func | 668 | `(i32 i32) -> (i32)` |
| `k2Kn` | func | 741 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `fDIe` | func | 1746 | `(i32 i32) -> (i32)` |
| `b4vK` | func | 2459 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `FhXg` | func | 914 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `q0kz` | func | 2271 | `(i32 i32) -> ()` |
| `cx6y` | func | 567 | `(i32 i32 i32) -> (i32)` |
| `eCEo` | func | 735 | `(i32) -> (i32)` |
| `bc14` | func | 3001 | `(i32) -> (i32 i32)` |
| `ZQE0` | func | 3179 | `() -> (i32)` |
| `Rxxs` | func | 1252 | `(i32 i32 i32) -> (i32)` |
| `seOd` | func | 1378 | `(i32 f64 f64) -> (i32)` |
| `knad` | func | 1552 | `(i32) -> (i32)` |
| `YJm4` | func | 1473 | `(i32) -> (i32)` |
| `fjqV` | func | 2928 | `() -> ()` |
| `lKaW` | func | 756 | `(i32 i32 i32) -> (i32)` |
| `xPRq` | func | 1539 | `(i32 i32 i32 i32) -> (i32)` |
| `oefx` | func | 1204 | `(i32 i32 i32 i32) -> (i32)` |
| `sRUN` | func | 1108 | `(i32 i32) -> (i32)` |
| `Twtw` | func | 2436 | `(i32) -> (i32)` |
| `qhGD` | func | 2979 | `(i32 i32 i32) -> (i32 i32)` |
| `dXbo` | func | 3015 | `() -> (i32 i32)` |
| `Zv1G` | func | 2366 | `(i32 i32 i32 i32) -> (i32)` |
| `UVF4` | func | 1874 | `(i32) -> ()` |
| `rHw8` | func | 1312 | `(i32) -> ()` |
| `P5fU` | func | 1506 | `(i32 f64) -> (f64)` |
| `ctOy` | func | 1167 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `gMjH` | func | 2188 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jyVp` | func | 2808 | `(i32) -> (i32)` |
| `LwYi` | func | 886 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `yB9A` | func | 2489 | `(i32) -> (i32)` |
| `BAxV` | func | 1278 | `(i32) -> (i32)` |
| `JHOS` | func | 2488 | `(i32) -> (i32)` |
| `Pat8` | func | 2354 | `(i32 i32) -> (i32)` |
| `KUjP` | func | 2479 | `(i32) -> (i32)` |
| `pHYp` | func | 808 | `(i32 i32) -> (i32)` |
| `JrHK` | func | 733 | `(i32 i32 i32 i32) -> (i32)` |
| `WSwJ` | func | 3155 | `(i32) -> (i32)` |
| `zIIY` | func | 1203 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `GxRd` | func | 1932 | `(i32) -> (i32)` |
| `REbn` | func | 2168 | `(i32 i32) -> (i32)` |
| `lrW9` | func | 2948 | `(i32 i32) -> (i32)` |
| `nf2I` | func | 2786 | `(i32) -> ()` |
| `Fowp` | func | 1916 | `(i32) -> (i32)` |
| `NRuD` | func | 1579 | `(i32 i32) -> ()` |
| `dAsg` | func | 1804 | `() -> (i32)` |
| `tozB` | func | 1470 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `PzoB` | func | 1503 | `(i32 i32) -> (i32)` |
| `Zghs` | func | 1286 | `(i32 i32) -> (i32)` |
| `Zv58` | func | 1424 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `pBif` | func | 2031 | `(i32 i32) -> ()` |
| `SD9T` | func | 1491 | `(i32 i32) -> (i32)` |
| `iTxu` | func | 2750 | `(i32) -> (i32)` |
| `mGeg` | func | 3050 | `(i32 i32) -> ()` |
| `uC2H` | func | 1712 | `(i32) -> (i32)` |
| `v35Q` | func | 1326 | `(i32 i32 i32) -> (i32)` |
| `UhdQ` | func | 1519 | `(i32 i32 i32) -> (i32)` |
| `Wrhr` | func | 1850 | `(i32 i32) -> ()` |
| `jicZ` | func | 1969 | `(i32 i32) -> ()` |
| `x5FV` | func | 1504 | `(i32 i32) -> (i32)` |
| `LZnM` | func | 1465 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `iEcD` | func | 2451 | `(i32) -> (i32)` |
| `f4Iw` | func | 3105 | `(i32 i32 i32) -> ()` |
| `GIbB` | func | 3111 | `(i32) -> ()` |
| `t2KE` | func | 2426 | `(i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `DVg4` | func | 2241 | `(i32 f64) -> (i32)` |
| `yDNA` | func | 2450 | `(i32) -> (i32)` |
| `rVRq` | func | 2322 | `(i32 i32) -> (i32)` |
| `rwAz` | func | 3000 | `(i32) -> (i32 i32)` |
| `gQRV` | func | 2469 | `(i32) -> (i32)` |
| `DWRy` | func | 2454 | `(i32) -> (i32)` |
| `zMcu` | func | 1859 | `(i32 i32) -> (i32)` |
| `Gmom` | func | 2053 | `(i32 i32) -> (i32)` |
| `pxj7` | func | 2988 | `(i32 i32) -> (i32 i32)` |
| `mCve` | func | 1578 | `(i32 i32) -> ()` |
| `IpUq` | func | 2467 | `(i32 i32) -> ()` |
| `nZnZ` | func | 1109 | `(i32 i32) -> ()` |
| `ztG8` | func | 1824 | `(i32 i32 i32 i32) -> (i32)` |
| `CJKd` | func | 3049 | `(i32 i32 i32) -> ()` |
| `nJqm` | func | 3078 | `() -> (i32)` |
| `UVwY` | func | 1810 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `UkY0` | func | 1472 | `(i32 i32 i32 i32) -> (i32)` |
| `BK38` | func | 1622 | `(i32 i32 i32 i32) -> (i32)` |
| `e8Xi` | func | 2319 | `(i32 i32) -> (i32)` |
| `m5lc` | func | 904 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `ec4v` | func | 2470 | `(i32) -> (i32)` |
| `K03E` | func | 2764 | `(i32) -> (i32)` |
| `dfVA` | func | 2991 | `(i32 i32) -> (i32 i32)` |
| `GGbV` | func | 2240 | `(i32 i32) -> ()` |
| `Dele` | func | 1450 | `(i32 i32 i32 i32) -> ()` |
| `GJMr` | func | 2320 | `(i32 i32) -> (i32)` |
| `Tc7u` | func | 2490 | `(i32) -> (i32)` |
| `skBW` | func | 2980 | `(i32 i32 i32) -> (i32 i32)` |
| `VIEL` | func | 2453 | `(i32) -> (i32)` |
| `X9g9` | func | 2961 | `(i32 i32) -> ()` |
| `tA7q` | func | 2743 | `(i32) -> (i32)` |
| `heNm` | func | 2775 | `(i32) -> (i32)` |
| `ONad` | func | 706 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 40 pages · max 14,648 · shared=False
- table 0: funcref · min 751 · max 751
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2599664, `i32` = i32.const 2600244

## Functions

- 2,891 bodies · 4,017,934 code bytes · avg 1.4 KB
- instruction scan: 2,891 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 154 |
| <= 64 bytes | 115 |
| <= 128 bytes | 255 |
| <= 256 bytes | 373 |
| <= 512 bytes | 667 |
| <= 1024 bytes | 570 |
| <= 2048 bytes | 421 |
| <= 4096 bytes | 181 |
| <= 8192 bytes | 90 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 213 | 194,901 | 88,446 | local.get×25924, i32.const×9923, i32.load×5634, local.set×4736, local.tee×4648 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 112,331 | 54,455 | local.get×15163, i32.const×6535, i32.add×3191, local.set×3091, i32.load×2952 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 131 | 45,746 | 21,017 | local.get×6153, i32.const×2758, local.set×1199, i32.add×1097, i32.load×997 |
| 3 | `(i32 i32) -> ()` | 123 | 48,820 | 22,511 | local.get×6329, i32.const×2250, local.set×1325, local.tee×1179, i32.load×1035 |
| 4 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 20,628 | 9,288 | local.get×2540, i32.const×1209, local.set×548, local.tee×388, end×388 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 13 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,009 | 13,035 | local.get×4617, i32.const×1454, i32.store×702, i32.add×688, local.tee×644 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,702 | 10,568 | local.get×3337, i32.const×1237, local.tee×729, i32.add×432, local.set×333 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 63 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 194 | `(i32 i32) -> ()` | 10 | 26,445 | 12,733 | local.get×4479, i32.load×1203, i32.const×1018, end×792, i32.add×730 |
| 226 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 716 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1001 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1560 | `(i32 i32) -> (i32)` | 179 | 54,554 | 19,801 | local.get×6573, i32.const×2623, i64.store×1887, i64.const×1063, i64.load×1044 |
| 1961 | `(i32 i32) -> ()` | 110 | 38,696 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2565 | `(i32 i32) -> ()` | 397 | 142,143 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2843 | `(i32 i32 i32 i32) -> ()` | 137 | 30,503 | 13,917 | local.get×4170, i32.const×1461, local.tee×731, local.set×679, i32.load×613 |
| 2861 | `(i32 i32) -> ()` | 136 | 33,944 | 15,212 | local.get×4274, i32.const×2015, local.set×798, local.tee×744, i32.add×699 |

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
R8UnormR32FloatRgba8UnormBgra8UnormDepth24PlusDepth24PlusStencil8Rgba16UintRgba32UintRgba32FloatRg32FloatUV2VERTEXCOLORVERTEXALPHAOPACITYRGBEMISSIVELITE_REFLECTION_LUMINANCEREFLECTIONMAP_OPPOSITEZROUG
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123
called `Result::unwrap()` on an `Err` valueANGLE_instanced_arraysEXT_blend_minmaxEXT_color_buffer_floatEXT_color_buffer_half_floatEXT_float_blendEXT_frag_depthEXT_shader_texture_lodEXT_sRGBEXT_texture
Player_Atlasbee_set_3_attachable_bluebee_set_3_attachable_greenbee_set_3_attachable_redmedieval_set_1_attachable_bluemedieval_set_1_attachable_greenmedieval_set_1_attachable_purplemedieval_set_1_attac
staged overlay bytesmassfluidDragfluidDragHorizontalfluidDragVerticalgravityMultipliercanRunjumpMultiplierupwardImpulseOnUsecanAutoStepcanAutoStepByBlockriderOffseteffectstandingFrictionmaxPushDistanc
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 537,142 |
| `i32.const` | 224,873 |
| `local.tee` | 99,940 |
| `i32.load` | 94,269 |
| `local.set` | 93,628 |
| `i32.add` | 86,912 |
| `end` | 78,921 |
| `br_if` | 64,009 |
| `i32.store` | 46,658 |
| `block` | 37,102 |
| `i64.const` | 32,535 |
| `i64.store` | 31,563 |
| `if` | 30,174 |
| `call` | 29,307 |
| `i32.sub` | 24,581 |
| `i64.load` | 23,556 |
| `br` | 23,066 |
| `i32.eqz` | 19,429 |
| `select` | 16,828 |
| `i32.shl` | 16,436 |
| `i32.and` | 16,173 |
| `i32.ne` | 15,785 |
| `i32.load8_u` | 14,760 |
| `i32.eq` | 13,793 |
| `i32.store8` | 12,450 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 2,891/2,891 (degraded: 0)
