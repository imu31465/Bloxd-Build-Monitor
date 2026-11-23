# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `w4ddu.56408518` · analyzed 2026-11-24T00:51:36+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.4b51f76e5a40305531d5.wasm
> 5,121,311 bytes (4.9 MB) · sha256 `0c329bbf92b5e8dc…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,070,732 → 5,121,311 bytes (+50,579)
- defined functions 2,919 → 2,938
- code bytes 4,024,555 → 4,038,839
- data bytes 1,000,189 → 1,036,149
- name-section module id `4d4575c6d652aac9.12194` → `e5ffc3c7db3885ff.12254`
- export signatures: +1 × `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)`; -1 × `(i32 i32 i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)`
- export identifiers rotated by the obfuscator: 1/159 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `terrain-atlas1-anim-packed-cellsterrain-atlas1-anim-lit-pack`; `ue:keydownkeyupmousedownmouseuptouchstarttouchendotherMouse1`
- removed embedded strings: `fn vs_mesh_0044d040073_l3(@location(0) position: vec3f, @loc`; `fn vs_mesh_0044d0b0053_l1(@location(0) position: vec3f, @loc`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,938 / 393 |
| Exports / imports | 159 / 394 |
| Code bytes (function bodies) | 4,038,839 (3.9 MB) |
| Total local variables | 30,712 |
| Instructions (scanable bodies) | 1,889,777 |
| Data segments / bytes | 3,545 / 1,036,149 |
| Element segments / entries | 1 / 837 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `e5ffc3c7db3885ff.12254` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,510 | 176 |
| 2 | import | 4,734 | 394 |
| 3 | function | 2,988 | 2938 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,273 | 159 |
| 9 | element | 1,681 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,044,195 | 2938 |
| 11 | data | 1,064,826 | 3545 |
| 0 | custom:name | 30 | — |

## Types

176 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `aeVX.QAWd` | memory | `[128..14648]` |
| 0 | `aeVX.m7Yk` | func | `(i32) -> (i32)` |
| 1 | `aeVX.mO0R` | func | `(i32) -> (f64)` |
| 2 | `aeVX.kpoD` | func | `() -> (i32)` |
| 3 | `aeVX.CFhF` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `aeVX.nK5j` | func | `(i32) -> ()` |
| 5 | `aeVX.oufY` | func | `(i32 i32) -> (i32)` |
| 6 | `aeVX.YwLj` | func | `(i32) -> (i32)` |
| 7 | `aeVX.UtSB` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `aeVX.AY6b` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `aeVX.um0M` | func | `(i32) -> (i32)` |
| 10 | `aeVX.Qo3v` | func | `(i32 i32) -> ()` |
| 11 | `aeVX.ojWf` | func | `(i32 i32) -> ()` |
| 12 | `aeVX.G5b9` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `aeVX.Z0ra` | func | `(i32 i32) -> (i32)` |
| 14 | `aeVX.Tg6S` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `aeVX.j8OG` | func | `(i32) -> (i32)` |
| 16 | `aeVX.PQrc` | func | `(i32 i32) -> (i32)` |
| 17 | `aeVX.lhqA` | func | `(i32 i32) -> (i32)` |
| 18 | `aeVX.LgYW` | func | `(i32 i32) -> ()` |
| 19 | `aeVX.WN2c` | func | `(i32) -> (i32)` |
| 20 | `aeVX.KJxh` | func | `(i32) -> (i32)` |
| 21 | `aeVX.NRSk` | func | `(i32 i32 i32) -> ()` |
| 22 | `aeVX.teJF` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `aeVX.ZGy6` | func | `(i32) -> (i32)` |
| 24 | `aeVX.mGun` | func | `(i32) -> (i32)` |
| 25 | `aeVX.b2WN` | func | `(i32 i32) -> ()` |
| 26 | `aeVX.sl7P` | func | `(i32 i32) -> (i32)` |
| 27 | `aeVX.hA2g` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `aeVX.n6HE` | func | `(i32) -> (i32)` |
| 29 | `aeVX.wuVT` | func | `(i32) -> (i32)` |
| 30 | `aeVX.NpwT` | func | `(i32) -> (i32)` |
| 31 | `aeVX.AcYt` | func | `(i32) -> (i32)` |
| 32 | `aeVX.U3pH` | func | `(i32) -> (i32)` |
| 33 | `aeVX.DD29` | func | `(i32 i32 i32) -> ()` |
| 34 | `aeVX.IqN2` | func | `(i32 i32) -> (i32)` |
| 35 | `aeVX.vaJB` | func | `(i32) -> (i32)` |
| 36 | `aeVX.Mpjn` | func | `(i32) -> ()` |
| 37 | `aeVX.Xp1X` | func | `(i32) -> (i32)` |
| 38 | `aeVX.QIpx` | func | `(i32) -> (i32)` |
| 39 | `aeVX.xNs3` | func | `(i32) -> ()` |
| 40 | `aeVX.pmrn` | func | `(i32 i32) -> (i32)` |
| 41 | `aeVX.uWct` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `aeVX.IGrP` | func | `(i32) -> ()` |
| 43 | `aeVX.NgA5` | func | `(i32 i32) -> ()` |
| 44 | `aeVX.Keak` | func | `() -> (i32)` |
| 45 | `aeVX.hHmD` | func | `(i32 i32) -> (i32)` |
| 46 | `aeVX.IEwo` | func | `(i32 i32) -> (i32)` |
| 47 | `aeVX.EAML` | func | `(i32) -> (i32)` |
| 48 | `aeVX.vGGS` | func | `(i32) -> (i32)` |
| 49 | `aeVX.VLfJ` | func | `(i32) -> (i32)` |
| 50 | `aeVX.ZAIl` | func | `(i32 i32) -> ()` |
| 51 | `aeVX.Sm1Y` | func | `(i32) -> (i32)` |
| 52 | `aeVX.uEvL` | func | `(i32) -> ()` |
| 53 | `aeVX.j0FF` | func | `(i32 i32) -> (i32)` |
| 54 | `aeVX.v6ho` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `aeVX.s1eB` | func | `(i32) -> (i32)` |
| 56 | `aeVX.lhM1` | func | `(i32 i32 i32) -> ()` |
| 57 | `aeVX.fmlE` | func | `(i32 i32) -> ()` |
| 58 | `aeVX.bQq9` | func | `(i32) -> (i32)` |
| 59 | `aeVX.U2xO` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `aeVX.q0iC` | func | `(i32) -> ()` |
| 61 | `aeVX.s5LT` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `aeVX.jfRH` | func | `(i32) -> ()` |
| 63 | `aeVX.hDJf` | func | `(i32 i32 i32) -> ()` |
| 64 | `aeVX.DFIM` | func | `(i32 i32) -> ()` |
| 65 | `aeVX.UFIp` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `aeVX.ofM8` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `aeVX.ALet` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `aeVX.tCF2` | func | `(i32 i32 f64) -> ()` |
| 69 | `aeVX.qczt` | func | `(i32) -> (i32)` |
| 70 | `aeVX.W38Y` | func | `(i32 i32) -> ()` |
| 71 | `aeVX.YIDt` | func | `(i32 i32 i32) -> ()` |
| 72 | `aeVX.I14d` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `aeVX.qPWG` | func | `(i32 i32 i32) -> ()` |
| 74 | `aeVX.LTxy` | func | `(i32) -> ()` |
| 75 | `aeVX.VVeg` | func | `(i32 i32) -> ()` |
| 76 | `aeVX.pnAw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `aeVX.cf79` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `aeVX.rChZ` | func | `(i32 i32 i32) -> ()` |
| 79 | `aeVX.Dwfh` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `aeVX.tIv4` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `aeVX.NE0z` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `aeVX.yGrv` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `aeVX.dsio` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `aeVX.lGUw` | func | `(i32 i32 i32) -> ()` |
| 85 | `aeVX.VU8Z` | func | `(i32 i32) -> (i32)` |
| 86 | `aeVX.Nn09` | func | `(i32) -> (i32)` |
| 87 | `aeVX.XInf` | func | `(i32) -> (i32)` |
| 88 | `aeVX.bXAS` | func | `(i32) -> (i32)` |
| 89 | `aeVX.aZow` | func | `(i32 i32) -> (i32)` |
| 90 | `aeVX.yEFo` | func | `(i32) -> ()` |
| 91 | `aeVX.c4my` | func | `(i32) -> (i32)` |
| 92 | `aeVX.lsXQ` | func | `(i32 i32) -> (i32)` |
| 93 | `aeVX.OicK` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `aeVX.XG2Q` | func | `(i32 i32 i32) -> ()` |
| 95 | `aeVX.ZlKi` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `aeVX.tOil` | func | `() -> (f64)` |
| 97 | `aeVX.lBQB` | func | `() -> (f64)` |
| 98 | `aeVX.HRpK` | func | `(i32 i32) -> ()` |
| 99 | `aeVX.Vspn` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `aeVX.LVU3` | func | `(i32) -> (i32)` |
| 101 | `aeVX.AGeJ` | func | `(i32) -> (i32)` |
| 102 | `aeVX.OPGZ` | func | `(i32) -> (i32)` |
| 103 | `aeVX.KDYi` | func | `() -> (i32)` |
| 104 | `aeVX.NIg1` | func | `() -> (i32)` |
| 105 | `aeVX.Z70h` | func | `() -> (i32)` |
| 106 | `aeVX.yVCK` | func | `() -> (i32)` |
| 107 | `aeVX.VPte` | func | `(i32 i32) -> (i32)` |
| 108 | `aeVX.cTI9` | func | `(i32) -> ()` |
| 109 | `aeVX.lJ9G` | func | `(i32 i32) -> (i32)` |
| 110 | `aeVX.WFPz` | func | `(i32) -> (i32)` |
| 111 | `aeVX.Hovj` | func | `() -> (f64)` |
| 112 | `aeVX.Q1sr` | func | `(i32) -> (i32)` |
| 113 | `aeVX.a5pV` | func | `(i32 i32) -> ()` |
| 114 | `aeVX.GfIp` | func | `(i32 i32) -> ()` |
| 115 | `aeVX.IOSF` | func | `(i32 i32) -> ()` |
| 116 | `aeVX.Fbk7` | func | `(i32 f32) -> ()` |
| 117 | `aeVX.Xflq` | func | `(i32 f32) -> ()` |
| 118 | `aeVX.H14B` | func | `(i32 i32) -> ()` |
| 119 | `aeVX.LNqj` | func | `(i32 i32) -> ()` |
| 120 | `aeVX.RWNL` | func | `(i32 i32) -> ()` |
| 121 | `aeVX.cst9` | func | `(i32 i32) -> ()` |
| 122 | `aeVX.wP5B` | func | `(i32 i32 i32) -> ()` |
| 123 | `aeVX.O8Eu` | func | `(i32 i32) -> (i32)` |
| 124 | `aeVX.UmyF` | func | `(i32 i32) -> ()` |
| 125 | `aeVX.xnkH` | func | `(i32 i32) -> ()` |
| 126 | `aeVX.ZdBR` | func | `(i32 i32) -> ()` |
| 127 | `aeVX.om45` | func | `(i32 i32) -> ()` |
| 128 | `aeVX.wc8R` | func | `(i32 f64) -> ()` |
| 129 | `aeVX.zSC0` | func | `(i32 f64) -> ()` |
| 130 | `aeVX.tV9X` | func | `(i32 i32) -> ()` |
| 131 | `aeVX.DLTF` | func | `(i32 i32 i32) -> ()` |
| 132 | `aeVX.XJTt` | func | `(i32 i32) -> ()` |
| 133 | `aeVX.bcYD` | func | `(i32 i32) -> (i32)` |
| 134 | `aeVX.tKMu` | func | `(i32 i32 i32) -> ()` |
| 135 | `aeVX.KBxJ` | func | `(i32 i32 i32) -> ()` |
| 136 | `aeVX.VPkV` | func | `(i32 i32) -> (i32)` |
| 137 | `aeVX.mRQL` | func | `(i32 i32) -> (i32)` |
| 138 | `aeVX.cxaW` | func | `(i32 i32 i32) -> ()` |
| 139 | `aeVX.stkL` | func | `(i32 i32 i32) -> ()` |
| 140 | `aeVX.XT04` | func | `(i32 i32) -> (i32)` |
| 141 | `aeVX.tEny` | func | `(i32 i32) -> ()` |
| 142 | `aeVX.kDbV` | func | `(i32 i32) -> ()` |
| 143 | `aeVX.NmRi` | func | `(i32 i32) -> ()` |
| 144 | `aeVX.sOzF` | func | `(i32 i32) -> ()` |
| 145 | `aeVX.pHoe` | func | `(i32 i32) -> ()` |
| 146 | `aeVX.LCIa` | func | `(i32 i32) -> ()` |
| 147 | `aeVX.mYod` | func | `(i32 i32) -> ()` |
| 148 | `aeVX.GblI` | func | `(i32 f64) -> ()` |
| 149 | `aeVX.SPIB` | func | `(i32 i32) -> ()` |
| 150 | `aeVX.UU0U` | func | `(i32 i32) -> ()` |
| 151 | `aeVX.Sphc` | func | `(i32 i32) -> ()` |
| 152 | `aeVX.nE9E` | func | `(i32 i32) -> ()` |
| 153 | `aeVX.zgXU` | func | `(i32 i32) -> ()` |
| 154 | `aeVX.CQPB` | func | `(i32 i32) -> ()` |
| 155 | `aeVX.gAgM` | func | `(i32 i32) -> ()` |
| 156 | `aeVX.c1vn` | func | `(i32 i32) -> ()` |
| 157 | `aeVX.tXDK` | func | `(i32 i32) -> ()` |
| 158 | `aeVX.WtJv` | func | `(i32 i32 i32) -> ()` |
| 159 | `aeVX.AwBO` | func | `(i32 i32 i32) -> ()` |
| 160 | `aeVX.msXk` | func | `(i32 i32) -> (i32)` |
| 161 | `aeVX.ZCVW` | func | `(i32 i32) -> (i32)` |
| 162 | `aeVX.Vptw` | func | `(i32 i32) -> ()` |
| 163 | `aeVX.ybc0` | func | `(i32 i32) -> ()` |
| 164 | `aeVX.wBXN` | func | `(i32 f64) -> ()` |
| 165 | `aeVX.Y9gP` | func | `(i32 i32) -> ()` |
| 166 | `aeVX.vTs1` | func | `(i32 i32) -> ()` |
| 167 | `aeVX.JKDc` | func | `(i32 i32) -> ()` |
| 168 | `aeVX.KVGc` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `aeVX.fXD3` | func | `(i32 f64) -> ()` |
| 170 | `aeVX.t6Wu` | func | `(i32 f64) -> ()` |
| 171 | `aeVX.x7UU` | func | `(i32 f64) -> ()` |
| 172 | `aeVX.VDs6` | func | `(i32 f64) -> ()` |
| 173 | `aeVX.vvBR` | func | `(i32 i32) -> ()` |
| 174 | `aeVX.Cp0S` | func | `(i32 i32) -> ()` |
| 175 | `aeVX.wj7d` | func | `(i32 i32) -> ()` |
| 176 | `aeVX.j5YX` | func | `(i32 i32) -> ()` |
| 177 | `aeVX.hNA2` | func | `(i32 i32) -> ()` |
| 178 | `aeVX.UQi1` | func | `(i32 i32 i32) -> ()` |
| 179 | `aeVX.EBcN` | func | `(i32 i32) -> ()` |
| 180 | `aeVX.oNXL` | func | `(i32 f32) -> ()` |
| 181 | `aeVX.pxVD` | func | `(i32 i32) -> ()` |
| 182 | `aeVX.lUmX` | func | `(i32 i32) -> ()` |
| 183 | `aeVX.egoA` | func | `(i32 i32) -> ()` |
| 184 | `aeVX.X0QV` | func | `(i32 i32) -> ()` |
| 185 | `aeVX.vtDe` | func | `(i32 i32) -> ()` |
| 186 | `aeVX.C1CH` | func | `(i32 i32) -> ()` |
| 187 | `aeVX.PBZH` | func | `(i32 i32) -> ()` |
| 188 | `aeVX.n0Fz` | func | `(i32 i32) -> ()` |
| 189 | `aeVX.nTn0` | func | `(i32 i32) -> ()` |
| 190 | `aeVX.W8V8` | func | `(i32 i32) -> ()` |
| 191 | `aeVX.DIk4` | func | `(i32 i32) -> ()` |
| 192 | `aeVX.NsRm` | func | `(i32 i32) -> ()` |
| 193 | `aeVX.X7GM` | func | `(i32 i32) -> (i32)` |
| 194 | `aeVX.YL3W` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `aeVX.u0Cx` | func | `(i32 i32) -> ()` |
| 196 | `aeVX.nxQz` | func | `(i32 i32 i32) -> ()` |
| 197 | `aeVX.HZgB` | func | `(i32 i32) -> (i32)` |
| 198 | `aeVX.a4MF` | func | `(i32) -> (i32)` |
| 199 | `aeVX.iXZ1` | func | `(i32 i32) -> ()` |
| 200 | `aeVX.M1f9` | func | `(i32 i32) -> ()` |
| 201 | `aeVX.HDmi` | func | `(i32 i32) -> ()` |
| 202 | `aeVX.l1lf` | func | `(i32 i32) -> ()` |
| 203 | `aeVX.S4bT` | func | `(i32 i32) -> ()` |
| 204 | `aeVX.QtVk` | func | `(i32 i32) -> ()` |
| 205 | `aeVX.SE1U` | func | `(i32 i32) -> ()` |
| 206 | `aeVX.O69D` | func | `(i32 i32) -> ()` |
| 207 | `aeVX.yazi` | func | `(i32) -> (i32)` |
| 208 | `aeVX.s6sU` | func | `(i32 i32 i32) -> ()` |
| 209 | `aeVX.fwmU` | func | `(i32 i32) -> ()` |
| 210 | `aeVX.aqAL` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `aeVX.UwRU` | func | `(i32 i32) -> ()` |
| 212 | `aeVX.qpD3` | func | `(i32) -> ()` |
| 213 | `aeVX.yGmo` | func | `(i32 i32) -> ()` |
| 214 | `aeVX.X134` | func | `(i32) -> (i32)` |
| 215 | `aeVX.GEYZ` | func | `(i32 i32 i32) -> ()` |
| 216 | `aeVX.zK4o` | func | `(i32 i32) -> ()` |
| 217 | `aeVX.LcDG` | func | `(i32 i32) -> ()` |
| 218 | `aeVX.BJF9` | func | `(i32 i32) -> ()` |
| 219 | `aeVX.kXVn` | func | `(i32 i32) -> ()` |
| 220 | `aeVX.ek1o` | func | `(i32 i32) -> (i32)` |
| 221 | `aeVX.jnBk` | func | `(i32 i32) -> ()` |
| 222 | `aeVX.maUe` | func | `(i32 i32) -> ()` |
| 223 | `aeVX.eAGC` | func | `(i32 i32) -> ()` |
| 224 | `aeVX.ldVx` | func | `(i32 i32) -> ()` |
| 225 | `aeVX.fdUs` | func | `(i32 i32) -> ()` |
| 226 | `aeVX.TBkp` | func | `(i32 i32) -> ()` |
| 227 | `aeVX.f4iC` | func | `(i32 i32) -> ()` |
| 228 | `aeVX.ZsgG` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `aeVX.hLqh` | func | `(i32) -> (i32)` |
| 230 | `aeVX.Tdaz` | func | `(i32) -> ()` |
| 231 | `aeVX.XnZU` | func | `(i32 f64) -> ()` |
| 232 | `aeVX.g7ag` | func | `(i32 i32) -> ()` |
| 233 | `aeVX.UHNR` | func | `(i32 i32) -> ()` |
| 234 | `aeVX.jCBc` | func | `(i32 i32 i32) -> ()` |
| 235 | `aeVX.vEii` | func | `(i32 i32) -> (i32)` |
| 236 | `aeVX.YmRE` | func | `(i32 i32) -> ()` |
| 237 | `aeVX.RQW1` | func | `(i32 i32) -> ()` |
| 238 | `aeVX.dkSN` | func | `(i32 i32) -> ()` |
| 239 | `aeVX.hP2f` | func | `(i32 i32 i32) -> ()` |
| 240 | `aeVX.OMcD` | func | `(i32 i32) -> ()` |
| 241 | `aeVX.bxYS` | func | `(i32 i32) -> ()` |
| 242 | `aeVX.xuCG` | func | `(i32 i32) -> ()` |
| 243 | `aeVX.KbRO` | func | `(i32 i32 i32) -> ()` |
| 244 | `aeVX.aqcn` | func | `(i32 i32) -> ()` |
| 245 | `aeVX.xN5x` | func | `(i32 i32) -> ()` |
| 246 | `aeVX.HUXC` | func | `(i32 i32 i32) -> ()` |
| 247 | `aeVX.B0vw` | func | `(i32 i32) -> (i32)` |
| 248 | `aeVX.vzfn` | func | `(i32 i32) -> ()` |
| 249 | `aeVX.Bsnz` | func | `(i32 i32 i32) -> ()` |
| 250 | `aeVX.eLed` | func | `(i32 i32) -> ()` |
| 251 | `aeVX.NnOJ` | func | `(i32 f64) -> ()` |
| 252 | `aeVX.TWSW` | func | `(i32 i32) -> ()` |
| 253 | `aeVX.Fmck` | func | `(i32 f64) -> ()` |
| 254 | `aeVX.VotA` | func | `(i32 i32 i32) -> ()` |
| 255 | `aeVX.TlY1` | func | `(i32 i32) -> ()` |
| 256 | `aeVX.ULFv` | func | `(i32 i32 i32) -> ()` |
| 257 | `aeVX.aqhA` | func | `(i32 i32) -> ()` |
| 258 | `aeVX.UxrR` | func | `(i32 i32) -> ()` |
| 259 | `aeVX.nTxq` | func | `(i32 i32) -> ()` |
| 260 | `aeVX.tJpW` | func | `(i32 i32 i32) -> ()` |
| 261 | `aeVX.hNWJ` | func | `(i32 i32) -> ()` |
| 262 | `aeVX.D1JU` | func | `(i32 i32) -> ()` |
| 263 | `aeVX.XLmd` | func | `(i32 i32) -> ()` |
| 264 | `aeVX.m46V` | func | `(i32 i32) -> ()` |
| 265 | `aeVX.V4H6` | func | `(i32 f32) -> ()` |
| 266 | `aeVX.OdK2` | func | `(i32 f32) -> ()` |
| 267 | `aeVX.xEXM` | func | `(i32 i32) -> ()` |
| 268 | `aeVX.D0Z4` | func | `(i32 i32) -> ()` |
| 269 | `aeVX.JzVD` | func | `(i32 i32) -> ()` |
| 270 | `aeVX.oy3w` | func | `(i32 i32) -> ()` |
| 271 | `aeVX.UAoI` | func | `(i32 i32) -> ()` |
| 272 | `aeVX.Y05c` | func | `(i32 i32) -> ()` |
| 273 | `aeVX.VMYE` | func | `(i32 i32) -> ()` |
| 274 | `aeVX.LM0U` | func | `(i32 i32) -> ()` |
| 275 | `aeVX.sl2U` | func | `(i32 i32) -> ()` |
| 276 | `aeVX.xWLo` | func | `(i32 i32) -> ()` |
| 277 | `aeVX.A17o` | func | `(i32 i32) -> ()` |
| 278 | `aeVX.tTLn` | func | `(i32 i32) -> ()` |
| 279 | `aeVX.YXeO` | func | `(i32 i32) -> ()` |
| 280 | `aeVX.umEk` | func | `(i32 i32) -> ()` |
| 281 | `aeVX.klym` | func | `(i32 i32) -> ()` |
| 282 | `aeVX.rJoe` | func | `(i32 i32) -> ()` |
| 283 | `aeVX.dfNw` | func | `(i32 i32) -> ()` |
| 284 | `aeVX.TUu5` | func | `(i32 i32) -> ()` |
| 285 | `aeVX.MMSZ` | func | `(i32 i32 i32) -> ()` |
| 286 | `aeVX.R3wK` | func | `(i32 i32 i32) -> ()` |
| 287 | `aeVX.s2di` | func | `(i32 i32) -> ()` |
| 288 | `aeVX.ehaa` | func | `(i32 i32) -> ()` |
| 289 | `aeVX.ViwY` | func | `(i32 i32) -> ()` |
| 290 | `aeVX.JsWK` | func | `(i32 i32) -> ()` |
| 291 | `aeVX.JYX2` | func | `(i32 i32) -> ()` |
| 292 | `aeVX.NvE7` | func | `(i32 i32) -> ()` |
| 293 | `aeVX.olLo` | func | `(i32 i32) -> ()` |
| 294 | `aeVX.FXph` | func | `(i32 i32) -> ()` |
| 295 | `aeVX.yoyT` | func | `(i32 i32) -> ()` |
| 296 | `aeVX.mvxq` | func | `(i32 i32) -> ()` |
| 297 | `aeVX.NbG1` | func | `(i32 i32) -> ()` |
| 298 | `aeVX.ltc6` | func | `(i32 i32) -> (i32)` |
| 299 | `aeVX.mxNU` | func | `(i32 i32) -> ()` |
| 300 | `aeVX.ZHF9` | func | `(i32 i32 i32) -> ()` |
| 301 | `aeVX.M66F` | func | `(i32 i32) -> ()` |
| 302 | `aeVX.Ty4O` | func | `(i32 i32) -> ()` |
| 303 | `aeVX.GHoq` | func | `(i32 i32) -> ()` |
| 304 | `aeVX.R2jO` | func | `(i32 i32 i32) -> ()` |
| 305 | `aeVX.HLEE` | func | `(i32 i32) -> (i32)` |
| 306 | `aeVX.sj5R` | func | `(i32 i32 i32) -> ()` |
| 307 | `aeVX.viS7` | func | `(i32 i32 i32) -> ()` |
| 308 | `aeVX.BHwa` | func | `(i32 i32) -> ()` |
| 309 | `aeVX.M57b` | func | `(i32 i32) -> ()` |
| 310 | `aeVX.j7DH` | func | `(i32 i32) -> ()` |
| 311 | `aeVX.PniN` | func | `(i32 i32) -> ()` |
| 312 | `aeVX.wlby` | func | `(i32 i32) -> (i32)` |
| 313 | `aeVX.vGeu` | func | `(i32) -> (i32)` |
| 314 | `aeVX.pABl` | func | `(i32) -> (i32)` |
| 315 | `aeVX.LvDt` | func | `(i32) -> (i32)` |
| 316 | `aeVX.DUdc` | func | `(i32) -> (i32)` |
| 317 | `aeVX.FKYn` | func | `(i32) -> (i32)` |
| 318 | `aeVX.s6vl` | func | `(i32) -> (i32)` |
| 319 | `aeVX.Tjlu` | func | `(i32) -> (i32)` |
| 320 | `aeVX.mucL` | func | `(i32) -> (i32)` |
| 321 | `aeVX.UPEj` | func | `(i32) -> (i32)` |
| 322 | `aeVX.JVbq` | func | `(i32) -> (i32)` |
| 323 | `aeVX.Y3z5` | func | `(i32) -> (i32)` |
| 324 | `aeVX.Bj7M` | func | `(i32) -> (i32)` |
| 325 | `aeVX.hG1y` | func | `(i32) -> (i32)` |
| 326 | `aeVX.pR7h` | func | `(i32) -> (i32)` |
| 327 | `aeVX.DYS9` | func | `(i32) -> (f64)` |
| 328 | `aeVX.A7AY` | func | `(i32) -> (f64)` |
| 329 | `aeVX.v4LO` | func | `(i32) -> (i32)` |
| 330 | `aeVX.NcCp` | func | `(i32) -> (f64)` |
| 331 | `aeVX.gTob` | func | `(i32) -> (i32)` |
| 332 | `aeVX.yevG` | func | `(i32) -> (i32)` |
| 333 | `aeVX.Mbtj` | func | `(i32) -> (i32)` |
| 334 | `aeVX.L9gW` | func | `(i32) -> (i32)` |
| 335 | `aeVX.wxIu` | func | `(i32) -> (i32)` |
| 336 | `aeVX.V0Ah` | func | `(i32) -> (i32)` |
| 337 | `aeVX.Cg0h` | func | `(i32) -> (i32)` |
| 338 | `aeVX.V5qx` | func | `(i32) -> (i32)` |
| 339 | `aeVX.bfh6` | func | `(i32) -> (i32)` |
| 340 | `aeVX.uVA5` | func | `(i32) -> (i32)` |
| 341 | `aeVX.RVY0` | func | `(i32) -> (i32)` |
| 342 | `aeVX.MGpA` | func | `(i32) -> (i32)` |
| 343 | `aeVX.D4OY` | func | `(i32) -> (i32)` |
| 344 | `aeVX.mXVR` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `aeVX.jk2i` | func | `() -> (i32)` |
| 346 | `aeVX.YNGs` | func | `(i32 i32) -> ()` |
| 347 | `aeVX.F4DP` | func | `(i32 i32 i32) -> ()` |
| 348 | `aeVX.Lu3A` | func | `(i32 i32 i32) -> ()` |
| 349 | `aeVX.HLLj` | func | `(i32 i32) -> (i32)` |
| 350 | `aeVX.ljHQ` | func | `(i32) -> (i32)` |
| 351 | `aeVX.zPOv` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `aeVX.C02E` | func | `(i32) -> ()` |
| 353 | `aeVX.nHyv` | func | `(i32) -> (i32)` |
| 354 | `aeVX.Fvx5` | func | `(i32 i32) -> ()` |
| 355 | `aeVX.RQhB` | func | `(i32) -> (i32)` |
| 356 | `aeVX.All0` | func | `(i32) -> (i32)` |
| 357 | `aeVX.kiT1` | func | `(i32) -> (i32)` |
| 358 | `aeVX.nviU` | func | `(i32) -> (i32)` |
| 359 | `aeVX.XCvB` | func | `(i32) -> (i32)` |
| 360 | `aeVX.t0cD` | func | `(i32 i32) -> ()` |
| 361 | `aeVX.DiBs` | func | `(i32 i32) -> ()` |
| 362 | `aeVX.wsb0` | func | `(i32 i32) -> ()` |
| 363 | `aeVX.yMSv` | func | `(i32 i32) -> ()` |
| 364 | `aeVX.q0Rm` | func | `(i32 i32) -> ()` |
| 365 | `aeVX.MO14` | func | `(i32 i32) -> ()` |
| 366 | `aeVX.ATVX` | func | `(i32 i32) -> ()` |
| 367 | `aeVX.K62P` | func | `(i32 i32 i32) -> ()` |
| 368 | `aeVX.qVkO` | func | `(i32 i32) -> ()` |
| 369 | `aeVX.m0Q2` | func | `(i32 i32) -> (i32)` |
| 370 | `aeVX.Zsuk` | func | `(i32) -> (i32)` |
| 371 | `aeVX.WVSV` | func | `(i32) -> (i32)` |
| 372 | `aeVX.xyeo` | func | `(i32 i32) -> ()` |
| 373 | `aeVX.X0ES` | func | `(i32) -> (i32)` |
| 374 | `aeVX.OoK9` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `aeVX.U4x8` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `aeVX.DBHV` | func | `(i32 i32) -> ()` |
| 377 | `aeVX.hv06` | func | `(i32) -> (i32)` |
| 378 | `aeVX.Lkrf` | func | `(i32) -> (i32)` |
| 379 | `aeVX.fAQ3` | func | `(i32) -> (i32)` |
| 380 | `aeVX.MkME` | func | `(i32) -> (i32)` |
| 381 | `aeVX.zvkr` | func | `(i32) -> (i32)` |
| 382 | `aeVX.PFfY` | func | `(i32) -> (i32)` |
| 383 | `aeVX.JHlW` | func | `(i32 i32) -> ()` |
| 384 | `aeVX.zyqV` | func | `(i32 i32) -> (i32)` |
| 385 | `aeVX.SaEX` | func | `(i32 i32) -> (i32)` |
| 386 | `aeVX.K94w` | func | `(i32 i32) -> (i32)` |
| 387 | `aeVX.aTi3` | func | `(i32 i32) -> (i32)` |
| 388 | `aeVX.pBO0` | func | `(i32 i32) -> (i32)` |
| 389 | `aeVX.CAEf` | func | `(i32 i32) -> (i32)` |
| 390 | `aeVX.WJxP` | func | `(f64) -> (i32)` |
| 391 | `aeVX.tDeB` | func | `(i32 i32) -> (i32)` |
| 392 | `aeVX.uPKl` | func | `(i32 i32) -> (i32)` |

## Exports

159 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `XTK2` | global | 2 | `` |
| `pu9D` | func | 3127 | `(i32) -> (i32 i32)` |
| `fhMx` | func | 1487 | `(i32 i32) -> (i32)` |
| `S3RB` | func | 1412 | `(i32 i32 i32) -> (i32)` |
| `xLD6` | func | 1565 | `(i32 i32 i32 i32) -> (i32)` |
| `gN3B` | func | 3204 | `() -> (i32)` |
| `ZnBc` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `zlSR` | func | 1196 | `(i32 i32) -> (i32)` |
| `WhgJ` | func | 2447 | `(i32 i32) -> (i32)` |
| `Muj3` | func | 1572 | `(i32 i32) -> (i32)` |
| `Ul04` | func | 1556 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `vDIV` | func | 2902 | `(i32) -> ()` |
| `h7CT` | func | 1841 | `(i32 i32) -> (i32)` |
| `S2n9` | global | 1 | `` |
| `pTtn` | func | 3103 | `(i32 i32 i32) -> (i32 i32)` |
| `JL7T` | func | 2584 | `(i32 i32) -> (i32)` |
| `HSos` | func | 2534 | `(i32 i32) -> ()` |
| `uXZI` | func | 3113 | `(i32 i32) -> (i32 i32)` |
| `v2mT` | func | 1944 | `(i32 i32 f64 f64 f64) -> ()` |
| `JLY1` | func | 2674 | `() -> (i32)` |
| `OWrK` | func | 2575 | `(i32 i32) -> ()` |
| `NOM8` | func | 2551 | `(i32) -> (i32)` |
| `APJ3` | func | 2878 | `(i32) -> (i32)` |
| `qxfI` | func | 896 | `(i32 i32) -> (i32)` |
| `lrUw` | func | 969 | `(i32 i32) -> (i32)` |
| `LQpj` | func | 3245 | `() -> ()` |
| `NE6t` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `L9bG` | func | 1949 | `(i32 i32) -> ()` |
| `GLTe` | func | 3234 | `(i32 i32 i32) -> ()` |
| `AR9t` | func | 1540 | `(i32 i32 i32 i32) -> ()` |
| `lgwX` | func | 3139 | `() -> (i32 i32)` |
| `rocv` | func | 1463 | `(i32 f64 f64) -> (i32)` |
| `N0Lr` | func | 3318 | `() -> (i32)` |
| `wjca` | func | 2468 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `SMZs` | func | 2333 | `(i32 i32) -> ()` |
| `Yr8t` | func | 1293 | `(i32 i32 i32 i32) -> (i32)` |
| `aOoZ` | func | 2624 | `(i32 i32) -> ()` |
| `fb2q` | func | 1566 | `(i32) -> (i32)` |
| `EqSO` | func | 659 | `(i32 i32 i32) -> (i32)` |
| `Eotu` | func | 2673 | `(i32 i32) -> ()` |
| `SAqD` | func | 3116 | `(i32 i32) -> (i32 i32)` |
| `lDnB` | func | 2412 | `(i32 i32) -> (i32)` |
| `fZ4T` | func | 3174 | `(i32 i32 i32) -> (i32)` |
| `SgEQ` | func | 2861 | `(i32) -> (i32)` |
| `oYCH` | func | 1462 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `YLIb` | func | 1975 | `(i32) -> ()` |
| `yzf7` | func | 3140 | `() -> (i32 i32)` |
| `Nht0` | func | 3103 | `(i32 i32 i32) -> (i32 i32)` |
| `mZfJ` | func | 2569 | `(i32 i32) -> ()` |
| `gg1A` | func | 3124 | `(i32) -> (i32 i32)` |
| `m2wo` | func | 3115 | `(i32 i32) -> (i32 i32)` |
| `s1Ds` | func | 2360 | `(i32 i32) -> ()` |
| `A5Ny` | func | 3243 | `(i32) -> ()` |
| `PE07` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `e758` | func | 760 | `(i32 i32) -> (i32)` |
| `toAG` | func | 3123 | `(i32) -> (i32 i32)` |
| `kkYz` | func | 3102 | `(i32 i32 i32) -> (i32 i32)` |
| `L2Fw` | func | 1292 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `memory` | memory | 0 | `` |
| `FmH5` | func | 2556 | `(i32) -> (i32)` |
| `hrUU` | func | 1899 | `() -> (i32)` |
| `NP2V` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `fjMV` | func | 1967 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `CY4r` | func | 2149 | `(i32 i32) -> (i32)` |
| `wfzH` | func | 3289 | `() -> (f64)` |
| `FSJh` | func | 2592 | `(i32) -> (i32)` |
| `BRDr` | func | 1646 | `(i32) -> (i32)` |
| `oQfp` | func | 2535 | `(i32) -> (i32)` |
| `Qehk` | func | 2550 | `(i32) -> (f64)` |
| `gz1J` | func | 1197 | `(i32 i32) -> ()` |
| `dYfC` | func | 1586 | `(i32 i32) -> (i32)` |
| `qrsV` | func | 1803 | `(i32) -> (i32)` |
| `JQV4` | func | 1613 | `(i32 i32 i32) -> (i32)` |
| `qy0T` | func | 2414 | `(i32 i32) -> (i32)` |
| `bJj5` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `LdF9` | func | 1561 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `OQ3y` | func | 2889 | `(i32) -> (i32)` |
| `Hj0W` | func | 1345 | `(i32 i32 i32) -> ()` |
| `OJp6` | func | 3176 | `(i32 i32 i32) -> ()` |
| `qm2X` | func | 1341 | `(i32 i32 i32) -> (i32)` |
| `AF9c` | func | 2583 | `(i32 i32) -> (i32)` |
| `Odr8` | func | 798 | `(i32 i32) -> (i32)` |
| `W8MP` | func | 2461 | `(i32 i32 i32 i32) -> (i32)` |
| `PbfX` | func | 3294 | `(i32) -> ()` |
| `MQ45` | func | 2560 | `(i32) -> (i32)` |
| `HS1U` | func | 3103 | `(i32 i32 i32) -> (i32 i32)` |
| `C5Pa` | func | 2263 | `(i32 i32) -> (i32)` |
| `ahBh` | func | 2593 | `(i32) -> (i32)` |
| `QrtU` | func | 1678 | `(i32 f64 f64 f64) -> (i32)` |
| `ttTA` | func | 2506 | `(i32) -> (i32)` |
| `E66V` | func | 1822 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `AZvo` | func | 771 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `scJF` | func | 2576 | `(i32) -> (i32)` |
| `XdqQ` | func | 2558 | `(i32) -> (i32)` |
| `WmZt` | func | 1663 | `(i32 i32) -> (i32)` |
| `Ifh4` | func | 3114 | `(i32 i32) -> (i32 i32)` |
| `IeMA` | func | 3111 | `(i32 i32) -> (i32 i32)` |
| `uHUh` | func | 3052 | `() -> ()` |
| `gVEf` | func | 3079 | `(i32 i32 i32 i32) -> (i32)` |
| `ogJW` | func | 1518 | `() -> (i32)` |
| `WxW2` | func | 2853 | `(i32) -> (i32)` |
| `tqJe` | func | 2128 | `(i32 i32) -> ()` |
| `XHzE` | func | 2641 | `() -> (i32)` |
| `BwBV` | func | 3165 | `(i32 i32 i32 i32) -> ()` |
| `bTGh` | func | 2554 | `(i32) -> (i32)` |
| `G1tK` | func | 1781 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `JkBm` | func | 1513 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `joIJ` | func | 2038 | `(i32 i32 i32 i32) -> ()` |
| `Hi5g` | func | 2573 | `(i32) -> (i32)` |
| `D8a3` | func | 1922 | `(i32 i32 i32 i32) -> (i32)` |
| `Xp94` | func | 3072 | `(i32 i32) -> (i32)` |
| `tLgt` | func | 1372 | `(i32 i32) -> (i32)` |
| `mKqR` | func | 1633 | `(i32 i32 i32 i32) -> (i32)` |
| `lhco` | func | 1674 | `(i32 i32) -> ()` |
| `O7mI` | func | 2095 | `(i32 f64) -> (i32)` |
| `sDRo` | func | 2036 | `(i32) -> (i32)` |
| `Ny86` | func | 3103 | `(i32 i32 i32) -> (i32 i32)` |
| `ZZeh` | func | 2559 | `(i32) -> (i32)` |
| `tJVx` | func | 2334 | `(i32 f64) -> (i32)` |
| `sPUu` | func | 2070 | `(i32 i32) -> ()` |
| `CR5y` | func | 3110 | `(i32 i32) -> (i32 i32)` |
| `Mpfw` | func | 1602 | `(i32 f64) -> (f64)` |
| `DNIj` | func | 1673 | `(i32 i32) -> ()` |
| `Yaeh` | func | 1398 | `(i32) -> ()` |
| `TueA` | func | 2489 | `(i32) -> (i32)` |
| `fIdk` | func | 2224 | `(i32 i32) -> (i32)` |
| `DeWu` | func | 2415 | `(i32 i32) -> (i32)` |
| `nm0N` | func | 2553 | `(i32) -> (i32)` |
| `n6an` | func | 2591 | `(i32) -> (i32)` |
| `ncwm` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `o60m` | func | 1366 | `(i32) -> (i32)` |
| `jIsq` | func | 2019 | `(i32) -> (i32)` |
| `FI9G` | func | 3125 | `(i32) -> (i32 i32)` |
| `MxI7` | func | 2574 | `(i32) -> (i32)` |
| `M6CQ` | func | 1960 | `(i32 i32) -> (i32)` |
| `ev2A` | func | 2552 | `(i32) -> (i32)` |
| `Uf4V` | func | 1906 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `ubnf` | func | 2925 | `(i32) -> (i32)` |
| `rfZc` | func | 3293 | `(i32) -> (i32)` |
| `GOKy` | func | 1300 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `jaHJ` | func | 3317 | `() -> (i32)` |
| `Vv0I` | func | 1599 | `(i32 i32) -> (i32)` |
| `Z7sc` | func | 1717 | `(i32 i32 i32 i32) -> (i32)` |
| `mwWF` | func | 2111 | `(i32 f64 f64 f64) -> (i32)` |
| `sQhS` | func | 3112 | `(i32 i32) -> (i32 i32)` |
| `FFAX` | func | 2557 | `(i32) -> ()` |
| `Gx7g` | func | 3126 | `(i32) -> (i32 i32)` |
| `G8op` | func | 3085 | `(i32 i32) -> ()` |
| `LeI1` | func | 1974 | `(i32) -> ()` |
| `Jg5w` | func | 2555 | `(i32) -> (i32)` |
| `S2ht` | func | 2413 | `(i32 i32) -> (i32)` |
| `Shzl` | func | 2582 | `(i32) -> (i32)` |
| `JDaD` | func | 1253 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `h2sJ` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Bk69` | func | 1600 | `(i32 i32) -> (i32)` |
| `gnYo` | func | 1323 | `(i32 i32) -> (i32)` |
| `ugeZ` | func | 830 | `(i32) -> (i32)` |
| `dbk7` | func | 2283 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `L7iU` | func | 1828 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 838 · max 838
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2244632, `i32` = i32.const 2245196

## Functions

- 2,938 bodies · 4,038,839 code bytes · avg 1.3 KB
- instruction scan: 2,938 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 114 |
| <= 128 bytes | 275 |
| <= 256 bytes | 384 |
| <= 512 bytes | 665 |
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
| 1 | `(i32 i32 i32 i32) -> ()` | 213 | 194,847 | 88,426 | local.get×25920, i32.const×9915, i32.load×5634, local.set×4736, local.tee×4647 |
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
| 705 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 993 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1007 | `(i32 i32) -> (i32)` | 41 | 19,765 | 7,699 | local.get×2488, i32.const×836, i64.store×586, i32.load×386, local.set×356 |
| 1567 | `(i32 i32) -> (i32)` | 180 | 54,461 | 19,757 | local.get×6549, i32.const×2619, i64.store×1893, i64.const×1069, i64.load×1044 |
| 1959 | `(i32 i32) -> ()` | 110 | 38,696 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2596 | `(i32 i32) -> ()` | 397 | 142,149 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2886 | `(i32 i32 i32 i32) -> ()` | 137 | 30,443 | 13,878 | local.get×4157, i32.const×1460, local.tee×728, local.set×674, i32.load×609 |
| 2905 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 540,015 |
| `i32.const` | 227,248 |
| `local.tee` | 99,342 |
| `local.set` | 94,278 |
| `i32.load` | 93,193 |
| `i32.add` | 87,010 |
| `end` | 79,143 |
| `br_if` | 63,616 |
| `i32.store` | 46,880 |
| `block` | 37,231 |
| `i64.store` | 32,718 |
| `i64.const` | 32,047 |
| `if` | 30,273 |
| `call` | 30,099 |
| `i64.load` | 24,280 |
| `i32.sub` | 24,055 |
| `br` | 23,173 |
| `i32.eqz` | 18,985 |
| `select` | 16,692 |
| `i32.and` | 16,266 |
| `i32.shl` | 16,191 |
| `i32.ne` | 15,646 |
| `i32.load8_u` | 15,190 |
| `i32.eq` | 13,701 |
| `i32.store8` | 13,396 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,938/2,938 (degraded: 0)
