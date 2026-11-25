# WASM module: `bloxd_wasm_webgl1_bg`

> environment **staging.bloxd.io** · build `fo1voe.f743fbcf` · analyzed 2026-11-26T01:33:49+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl1_bg.4361accd914b069ab64d.wasm
> 4,870,652 bytes (4.6 MB) · sha256 `153c631ef0614b65…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,851,485 → 4,870,652 bytes (+19,167)
- defined functions 2,870 → 2,886
- code bytes 4,001,651 → 4,019,323
- data bytes 803,443 → 804,846
- name-section module id `0f0e707bf3f4f48f.10604` → `7bbb6341ccd7a760.10663`
- export signatures: +1 × `(i32 i32) -> (i32)`; +1 × `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()`
- export identifiers rotated by the obfuscator: 1/159 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `HeadMesh_hairLegLeft|AttachableLegRight|AttachableArmLeft|At`
- removed embedded strings: `HeadMesh_hairLegLeft|AttachableLegRight|AttachableArmLeft|At`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,886 / 282 |
| Exports / imports | 159 / 283 |
| Code bytes (function bodies) | 4,019,323 (3.8 MB) |
| Total local variables | 30,837 |
| Instructions (scanable bodies) | 1,885,994 |
| Data segments / bytes | 3,772 / 804,846 |
| Element segments / entries | 1 / 734 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `7bbb6341ccd7a760.10663` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,508 | 177 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,937 | 2886 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,273 | 159 |
| 9 | element | 1,475 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,024,621 | 2886 |
| 11 | data | 835,332 | 3772 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Q9V2.hR7t` | memory | `[128..14648]` |
| 0 | `Q9V2.VA1c` | func | `(i32) -> (f64)` |
| 1 | `Q9V2.xk6j` | func | `() -> (i32)` |
| 2 | `Q9V2.occ1` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `Q9V2.kKto` | func | `(i32) -> ()` |
| 4 | `Q9V2.G96n` | func | `(i32 i32) -> (i32)` |
| 5 | `Q9V2.Qygb` | func | `(i32) -> (i32)` |
| 6 | `Q9V2.Tv5J` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `Q9V2.t4G9` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `Q9V2.AzrC` | func | `(i32) -> (i32)` |
| 9 | `Q9V2.iVcO` | func | `(i32 i32) -> ()` |
| 10 | `Q9V2.xPxT` | func | `(i32 i32) -> ()` |
| 11 | `Q9V2.W4oq` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `Q9V2.Tyc6` | func | `(i32 i32) -> (i32)` |
| 13 | `Q9V2.EXuI` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `Q9V2.mwUq` | func | `(i32) -> (i32)` |
| 15 | `Q9V2.Nv8z` | func | `(i32 i32) -> (i32)` |
| 16 | `Q9V2.sL2M` | func | `(i32 i32) -> (i32)` |
| 17 | `Q9V2.XktN` | func | `(i32 i32) -> ()` |
| 18 | `Q9V2.kybF` | func | `(i32) -> (i32)` |
| 19 | `Q9V2.d9DW` | func | `(i32) -> (i32)` |
| 20 | `Q9V2.ImoR` | func | `(i32) -> (i32)` |
| 21 | `Q9V2.QJNg` | func | `(i32) -> ()` |
| 22 | `Q9V2.jybv` | func | `(i32 i32) -> ()` |
| 23 | `Q9V2.eW79` | func | `(i32 i32) -> ()` |
| 24 | `Q9V2.PKhJ` | func | `(i32) -> (i32)` |
| 25 | `Q9V2.RN7K` | func | `(i32 i32) -> ()` |
| 26 | `Q9V2.bL7z` | func | `(i32 i32) -> (i32)` |
| 27 | `Q9V2.VIbp` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `Q9V2.Vz6L` | func | `(i32 i32) -> (i32)` |
| 29 | `Q9V2.eE7A` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `Q9V2.flSO` | func | `(i32) -> (i32)` |
| 31 | `Q9V2.hBQZ` | func | `() -> (f64)` |
| 32 | `Q9V2.Lx2R` | func | `(i32 i32) -> ()` |
| 33 | `Q9V2.keWQ` | func | `(i32) -> (i32)` |
| 34 | `Q9V2.tZ9R` | func | `(i32) -> (i32)` |
| 35 | `Q9V2.hSXn` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `Q9V2.qqpk` | func | `(i32) -> (i32)` |
| 37 | `Q9V2.Ks15` | func | `(i32) -> (i32)` |
| 38 | `Q9V2.gJE0` | func | `(i32) -> (i32)` |
| 39 | `Q9V2.Wb0p` | func | `(i32 i32) -> (i32)` |
| 40 | `Q9V2.fW6P` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `Q9V2.Mp8E` | func | `(i32) -> (i32)` |
| 42 | `Q9V2.QN0b` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `Q9V2.IxtX` | func | `(i32) -> (i32)` |
| 44 | `Q9V2.TOv9` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `Q9V2.DxrU` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `Q9V2.V7NX` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `Q9V2.p4bQ` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `Q9V2.yWvx` | func | `(i32 i32 i32) -> ()` |
| 49 | `Q9V2.e0Zz` | func | `(i32 i32 i32) -> ()` |
| 50 | `Q9V2.cIQz` | func | `(i32 i32 i32) -> ()` |
| 51 | `Q9V2.JaPh` | func | `(i32 i32) -> ()` |
| 52 | `Q9V2.MyHQ` | func | `(i32 i32) -> ()` |
| 53 | `Q9V2.Zooh` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `Q9V2.jqlO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `Q9V2.QqGn` | func | `(i32 f32 f32) -> ()` |
| 56 | `Q9V2.lKTo` | func | `(i32 f32 f32) -> ()` |
| 57 | `Q9V2.n3GM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `Q9V2.v5ze` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `Q9V2.l645` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `Q9V2.rt65` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `Q9V2.YY01` | func | `(i32 i32 i32) -> ()` |
| 62 | `Q9V2.sFxl` | func | `(i32 i32 i32) -> ()` |
| 63 | `Q9V2.TtMX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `Q9V2.wBtq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `Q9V2.tROb` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `Q9V2.Oq6i` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `Q9V2.WU7U` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `Q9V2.bv9V` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `Q9V2.V5di` | func | `(i32) -> (i32)` |
| 70 | `Q9V2.vOm5` | func | `(i32) -> ()` |
| 71 | `Q9V2.CiN2` | func | `(i32) -> (i32)` |
| 72 | `Q9V2.FwkM` | func | `(i32 i32) -> (i32)` |
| 73 | `Q9V2.jf9I` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `Q9V2.VIHk` | func | `(i32 i32 i32) -> ()` |
| 75 | `Q9V2.eXK2` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `Q9V2.YQ3E` | func | `() -> (f64)` |
| 77 | `Q9V2.lrFd` | func | `() -> (f64)` |
| 78 | `Q9V2.qiqf` | func | `(i32 i32) -> ()` |
| 79 | `Q9V2.dzRJ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `Q9V2.Zxlu` | func | `(i32 i32 i32) -> ()` |
| 81 | `Q9V2.pxIl` | func | `(i32 i32 i32) -> ()` |
| 82 | `Q9V2.G8sW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `Q9V2.d8u6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `Q9V2.Uyu8` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `Q9V2.PbVt` | func | `(i32 i32) -> ()` |
| 86 | `Q9V2.yJkG` | func | `(i32 i32) -> ()` |
| 87 | `Q9V2.zsCx` | func | `(i32) -> (i32)` |
| 88 | `Q9V2.PZQH` | func | `(i32 i32) -> ()` |
| 89 | `Q9V2.FFaP` | func | `(i32 i32) -> ()` |
| 90 | `Q9V2.K29o` | func | `(i32 i32 i32) -> ()` |
| 91 | `Q9V2.iARM` | func | `(i32 i32 i32) -> ()` |
| 92 | `Q9V2.fvar` | func | `(i32) -> (i32)` |
| 93 | `Q9V2.pb5K` | func | `(i32) -> (i32)` |
| 94 | `Q9V2.HfWO` | func | `(i32 i32) -> (i32)` |
| 95 | `Q9V2.gSjV` | func | `(i32 i32) -> (i32)` |
| 96 | `Q9V2.Hxrx` | func | `(i32 i32) -> ()` |
| 97 | `Q9V2.QGgP` | func | `(i32 i32) -> ()` |
| 98 | `Q9V2.f1Qe` | func | `(i32 i32 i32) -> ()` |
| 99 | `Q9V2.On4D` | func | `(i32 i32 i32) -> ()` |
| 100 | `Q9V2.qXw0` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `Q9V2.FUoq` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `Q9V2.DNY6` | func | `(i32 i32 f32) -> ()` |
| 103 | `Q9V2.JGOh` | func | `(i32 i32 f32) -> ()` |
| 104 | `Q9V2.oiQp` | func | `(i32 i32 i32) -> ()` |
| 105 | `Q9V2.gRmd` | func | `(i32 i32 i32) -> ()` |
| 106 | `Q9V2.tcIH` | func | `(i32 i32 i32) -> ()` |
| 107 | `Q9V2.lZJa` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `Q9V2.xFUV` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `Q9V2.GlwR` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `Q9V2.sdGT` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `Q9V2.G2EO` | func | `(i32 i32) -> ()` |
| 112 | `Q9V2.p8gk` | func | `(i32 i32) -> ()` |
| 113 | `Q9V2.nFcC` | func | `(i32 i32) -> ()` |
| 114 | `Q9V2.NiIj` | func | `(i32 i32) -> ()` |
| 115 | `Q9V2.pLmp` | func | `(i32) -> (i32)` |
| 116 | `Q9V2.SDnX` | func | `(i32) -> (i32)` |
| 117 | `Q9V2.DnXb` | func | `(i32) -> (i32)` |
| 118 | `Q9V2.WBN7` | func | `(i32) -> (i32)` |
| 119 | `Q9V2.VMS8` | func | `(i32 i32) -> ()` |
| 120 | `Q9V2.W8Va` | func | `(i32 i32) -> ()` |
| 121 | `Q9V2.THE3` | func | `(i32 i32) -> ()` |
| 122 | `Q9V2.Tqmf` | func | `(i32 i32) -> ()` |
| 123 | `Q9V2.dt9v` | func | `(i32 i32) -> ()` |
| 124 | `Q9V2.W62U` | func | `(i32 i32) -> ()` |
| 125 | `Q9V2.UNwg` | func | `(i32 i32) -> (i32)` |
| 126 | `Q9V2.PdI2` | func | `(i32 i32) -> (i32)` |
| 127 | `Q9V2.XCMW` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `Q9V2.Ra0l` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `Q9V2.bMi2` | func | `(i32 i32) -> ()` |
| 130 | `Q9V2.VOc4` | func | `(i32 i32) -> ()` |
| 131 | `Q9V2.vF0V` | func | `(i32) -> (i32)` |
| 132 | `Q9V2.eoUj` | func | `(i32 i32) -> ()` |
| 133 | `Q9V2.VK8l` | func | `(i32 i32) -> ()` |
| 134 | `Q9V2.C2kn` | func | `(i32 i32 i32) -> ()` |
| 135 | `Q9V2.OtT2` | func | `(i32 i32 i32) -> ()` |
| 136 | `Q9V2.R0T8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `Q9V2.W9To` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `Q9V2.J0B4` | func | `(i32 i32) -> ()` |
| 139 | `Q9V2.dkNu` | func | `(i32 i32 i32) -> ()` |
| 140 | `Q9V2.Wp6x` | func | `(i32 i32 i32) -> ()` |
| 141 | `Q9V2.Z1V4` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `Q9V2.Ynzg` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `Q9V2.BQ2Q` | func | `(i32 i32 i32) -> ()` |
| 144 | `Q9V2.VC8N` | func | `(i32 i32 i32) -> ()` |
| 145 | `Q9V2.DLPX` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `Q9V2.oIP1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `Q9V2.gKXu` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `Q9V2.cZfU` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `Q9V2.bYaN` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `Q9V2.qKtv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `Q9V2.Lsy4` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `Q9V2.rYmz` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `Q9V2.JeGG` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `Q9V2.mjFi` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `Q9V2.hYbf` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `Q9V2.DdGO` | func | `(i32) -> (i32)` |
| 157 | `Q9V2.xkIz` | func | `(i32) -> (i32)` |
| 158 | `Q9V2.usNP` | func | `(i32) -> (i32)` |
| 159 | `Q9V2.mpsV` | func | `(i32) -> (i32)` |
| 160 | `Q9V2.diAv` | func | `() -> (i32)` |
| 161 | `Q9V2.NtgP` | func | `() -> (i32)` |
| 162 | `Q9V2.G99i` | func | `() -> (i32)` |
| 163 | `Q9V2.v2Wv` | func | `() -> (i32)` |
| 164 | `Q9V2.Pytn` | func | `(i32 i32) -> (i32)` |
| 165 | `Q9V2.V3pC` | func | `(i32) -> ()` |
| 166 | `Q9V2.Jmqa` | func | `(i32 i32) -> (i32)` |
| 167 | `Q9V2.xREn` | func | `(i32) -> (i32)` |
| 168 | `Q9V2.iGof` | func | `(i32) -> (i32)` |
| 169 | `Q9V2.w1Yn` | func | `(i32) -> (i32)` |
| 170 | `Q9V2.kG3G` | func | `(i32) -> ()` |
| 171 | `Q9V2.CXvA` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `Q9V2.z1QA` | func | `(i32) -> (i32)` |
| 173 | `Q9V2.O9CW` | func | `(i32) -> (i32)` |
| 174 | `Q9V2.N1P7` | func | `(i32 i32) -> (i32)` |
| 175 | `Q9V2.RQUx` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `Q9V2.Jqwd` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `Q9V2.vIZs` | func | `(i32) -> (i32)` |
| 178 | `Q9V2.zzpz` | func | `(i32) -> (i32)` |
| 179 | `Q9V2.Rjra` | func | `(i32) -> (i32)` |
| 180 | `Q9V2.poze` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `Q9V2.KcQZ` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `Q9V2.i6cK` | func | `(i32 i32) -> ()` |
| 183 | `Q9V2.xYTG` | func | `(i32 i32 i32) -> ()` |
| 184 | `Q9V2.ZsqL` | func | `(i32 i32) -> ()` |
| 185 | `Q9V2.riVE` | func | `(i32 i32 i32) -> ()` |
| 186 | `Q9V2.n0cY` | func | `(i32 i32) -> ()` |
| 187 | `Q9V2.NLYJ` | func | `(i32 i32) -> ()` |
| 188 | `Q9V2.b6bI` | func | `(i32) -> (i32)` |
| 189 | `Q9V2.Tqi8` | func | `(i32 i32) -> (i32)` |
| 190 | `Q9V2.q2Mz` | func | `(i32) -> ()` |
| 191 | `Q9V2.BjQG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `Q9V2.zJPL` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `Q9V2.e8Hq` | func | `(i32 i32) -> ()` |
| 194 | `Q9V2.NQjQ` | func | `(i32 i32) -> ()` |
| 195 | `Q9V2.mPO8` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `Q9V2.DdY6` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `Q9V2.Eheb` | func | `(i32 f32) -> ()` |
| 198 | `Q9V2.NN7e` | func | `(i32 f32) -> ()` |
| 199 | `Q9V2.gO1D` | func | `(i32 i32) -> ()` |
| 200 | `Q9V2.JDao` | func | `(i32 i32) -> ()` |
| 201 | `Q9V2.AQH6` | func | `(i32) -> (i32)` |
| 202 | `Q9V2.vsQH` | func | `(i32) -> (i32)` |
| 203 | `Q9V2.k5tk` | func | `(i32) -> (i32)` |
| 204 | `Q9V2.FeC1` | func | `(i32) -> (i32)` |
| 205 | `Q9V2.I3Vx` | func | `(i32 i32 i32) -> ()` |
| 206 | `Q9V2.gebA` | func | `(i32 i32 i32) -> ()` |
| 207 | `Q9V2.DE7v` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `Q9V2.l9qV` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `Q9V2.wVjd` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `Q9V2.Px6y` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `Q9V2.HjO6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `Q9V2.mIPg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `Q9V2.NXkJ` | func | `(i32 i32) -> ()` |
| 214 | `Q9V2.Sw0K` | func | `(i32 i32) -> ()` |
| 215 | `Q9V2.wyxz` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `Q9V2.VjaE` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `Q9V2.Al4v` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `Q9V2.oUhL` | func | `(i32) -> (i32)` |
| 219 | `Q9V2.KKcI` | func | `(i32) -> (i32)` |
| 220 | `Q9V2.OoAm` | func | `(i32 i32) -> ()` |
| 221 | `Q9V2.KPcx` | func | `(i32 i32) -> ()` |
| 222 | `Q9V2.WfHZ` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `Q9V2.a0oY` | func | `(i32) -> (i32)` |
| 224 | `Q9V2.PKdZ` | func | `(i32) -> (i32)` |
| 225 | `Q9V2.FC1I` | func | `(i32 i32) -> ()` |
| 226 | `Q9V2.cGOW` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `Q9V2.vKMV` | func | `(i32 i32) -> ()` |
| 228 | `Q9V2.OrlM` | func | `(i32 i32) -> ()` |
| 229 | `Q9V2.Fhjn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `Q9V2.UVOT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `Q9V2.mSom` | func | `(i32 i32 i32) -> ()` |
| 232 | `Q9V2.VOQo` | func | `(i32 i32 i32) -> ()` |
| 233 | `Q9V2.ov82` | func | `(i32 i32) -> ()` |
| 234 | `Q9V2.ItVG` | func | `(i32 i32) -> ()` |
| 235 | `Q9V2.wBCH` | func | `(i32 i32) -> ()` |
| 236 | `Q9V2.I0XR` | func | `(i32 i32) -> ()` |
| 237 | `Q9V2.gmR9` | func | `(i32 i32) -> ()` |
| 238 | `Q9V2.YxO2` | func | `(i32 i32) -> ()` |
| 239 | `Q9V2.GUrJ` | func | `(i32 f32 f32) -> ()` |
| 240 | `Q9V2.pNmA` | func | `(i32 f32 f32) -> ()` |
| 241 | `Q9V2.gOKd` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `Q9V2.bd8J` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `Q9V2.Wnow` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `Q9V2.oyMp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `Q9V2.zI6Q` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `Q9V2.bzj1` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `Q9V2.sLCc` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `Q9V2.tElp` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `Q9V2.YBwK` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `Q9V2.NC19` | func | `(i32) -> ()` |
| 251 | `Q9V2.ODPS` | func | `(i32 i32) -> ()` |
| 252 | `Q9V2.s1y4` | func | `(i32 i32) -> ()` |
| 253 | `Q9V2.XyJt` | func | `(i32 i32) -> ()` |
| 254 | `Q9V2.uapX` | func | `(i32 i32) -> ()` |
| 255 | `Q9V2.YuJc` | func | `(i32 i32) -> ()` |
| 256 | `Q9V2.fmqC` | func | `(i32 i32) -> ()` |
| 257 | `Q9V2.wgjm` | func | `(i32 i32) -> ()` |
| 258 | `Q9V2.MPAF` | func | `(i32 i32) -> ()` |
| 259 | `Q9V2.wuiA` | func | `(i32) -> (i32)` |
| 260 | `Q9V2.dKDS` | func | `(i32) -> (i32)` |
| 261 | `Q9V2.BDfo` | func | `(i32) -> (i32)` |
| 262 | `Q9V2.DK4n` | func | `(i32) -> (i32)` |
| 263 | `Q9V2.hahJ` | func | `(i32) -> ()` |
| 264 | `Q9V2.WvxM` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `Q9V2.D75r` | func | `(i32) -> ()` |
| 266 | `Q9V2.gdBl` | func | `(i32) -> (i32)` |
| 267 | `Q9V2.x9aF` | func | `(i32) -> (i32)` |
| 268 | `Q9V2.ZLyC` | func | `(i32) -> (i32)` |
| 269 | `Q9V2.RI7X` | func | `(i32) -> (i32)` |
| 270 | `Q9V2.rSFj` | func | `(i32 i32) -> ()` |
| 271 | `Q9V2.haLI` | func | `(i32) -> ()` |
| 272 | `Q9V2.TFyX` | func | `(i32 i32) -> ()` |
| 273 | `Q9V2.y7nU` | func | `(i32) -> (i32)` |
| 274 | `Q9V2.iVL0` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `Q9V2.enj9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `Q9V2.cqxO` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `Q9V2.N4Uo` | func | `(i32 i32) -> (i32)` |
| 278 | `Q9V2.LmIs` | func | `(i32 i32) -> (i32)` |
| 279 | `Q9V2.i3Yp` | func | `(i32 i32) -> (i32)` |
| 280 | `Q9V2.NZt4` | func | `(i32 i32) -> (i32)` |
| 281 | `Q9V2.qXzx` | func | `(i32 i32) -> (i32)` |

## Exports

159 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `HSsf` | func | 2381 | `(i32) -> (i32)` |
| `vlTE` | func | 726 | `(i32) -> (i32)` |
| `Gx3Q` | func | 2315 | `(i32 i32) -> (i32)` |
| `TnDj` | func | 2470 | `(i32 i32) -> (i32)` |
| `yZbI` | func | 2445 | `(i32) -> (i32)` |
| `empq` | func | 1493 | `(i32 i32) -> (i32)` |
| `LYji` | func | 663 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jTYs` | func | 690 | `(i32 i32) -> (i32)` |
| `IbA6` | global | 2 | `` |
| `r1Op` | func | 2179 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `lgMl` | func | 2754 | `(i32) -> (i32)` |
| `SgrE` | func | 2004 | `(i32 f64 f64 f64) -> (i32)` |
| `cYlm` | func | 2970 | `(i32 i32) -> (i32 i32)` |
| `u6Xt` | func | 2993 | `() -> (i32 i32)` |
| `EXcK` | func | 2971 | `(i32 i32) -> (i32 i32)` |
| `M9N9` | func | 1722 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `mCkp` | func | 1572 | `(i32 i32) -> ()` |
| `wxKD` | func | 2740 | `(i32) -> (i32)` |
| `mYGO` | func | 2442 | `(i32) -> (i32)` |
| `RGiW` | func | 1984 | `(i32 f64) -> (i32)` |
| `L4eC` | func | 1560 | `(i32 i32) -> (i32)` |
| `kt7t` | func | 1573 | `(i32 i32) -> ()` |
| `tiWY` | func | 1849 | `(i32 i32) -> (i32)` |
| `Fwhr` | func | 2312 | `(i32 i32) -> (i32)` |
| `rkNx` | func | 3016 | `(i32 i32 i32 i32) -> ()` |
| `TvEW` | func | 1864 | `(i32) -> ()` |
| `DOXe` | func | 1195 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `wCDC` | func | 1469 | `(i32 i32) -> (i32)` |
| `NiJX` | func | 2964 | `(i32 i32 i32) -> (i32 i32)` |
| `qqxj` | func | 1924 | `(i32 i32 i32 i32) -> ()` |
| `s9g0` | func | 1494 | `(i32 i32) -> (i32)` |
| `InIC` | func | 1392 | `(i32 i32) -> (i32)` |
| `pVNq` | func | 2468 | `(i32) -> (i32)` |
| `No4h` | func | 2978 | `(i32) -> (i32 i32)` |
| `pO0F` | func | 2973 | `(i32 i32) -> (i32 i32)` |
| `LTUu` | func | 2974 | `(i32 i32) -> (i32 i32)` |
| `ieHs` | func | 2425 | `(i32 i32) -> ()` |
| `xxV1` | func | 1715 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `DjDx` | func | 1422 | `(i32) -> (i32)` |
| `qHqy` | func | 2945 | `(i32 i32) -> ()` |
| `iExb` | func | 1267 | `(i32) -> (i32)` |
| `kCYx` | func | 722 | `(i32 i32 i32 i32) -> (i32)` |
| `if1H` | func | 1482 | `(i32 i32) -> (i32)` |
| `AfjZ` | func | 2963 | `(i32 i32 i32) -> (i32 i32)` |
| `fwAD` | func | 1614 | `(i32 i32 i32 i32) -> (i32)` |
| `FwEW` | func | 3026 | `(i32 i32) -> ()` |
| `Vtzm` | func | 2356 | `(i32 i32 i32 i32) -> (i32)` |
| `wZCX` | func | 1733 | `(i32 i32) -> (i32)` |
| `ArHv` | func | 2448 | `(i32) -> (i32)` |
| `Y8RN` | func | 2461 | `(i32) -> (i32)` |
| `mYVD` | func | 2426 | `(i32) -> (i32)` |
| `y7xB` | func | 3054 | `() -> (i32)` |
| `awP1` | func | 1155 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `clLx` | func | 1370 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `d1Bm` | func | 3081 | `(i32 i32 i32) -> ()` |
| `lhHV` | func | 2979 | `(i32) -> (i32 i32)` |
| `Wyh0` | func | 2994 | `() -> (i32 i32)` |
| `GWpJ` | func | 1922 | `(i32) -> (i32)` |
| `r19Q` | func | 2439 | `(i32) -> (f64)` |
| `nWD5` | func | 2939 | `(i32 i32 i32 i32) -> (i32)` |
| `jXV3` | func | 2447 | `(i32) -> (i32)` |
| `Vn6O` | func | 3158 | `() -> (i32)` |
| `tJsg` | func | 1811 | `(i32 i32 i32 i32) -> (i32)` |
| `B2ml` | func | 747 | `(i32 i32 i32) -> (i32)` |
| `xZ73` | func | 1530 | `(i32 i32 i32 i32) -> (i32)` |
| `RhSa` | func | 1415 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `qxxX` | func | 1248 | `(i32 i32 i32) -> ()` |
| `jjAA` | func | 1796 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `UXkP` | func | 1225 | `(i32 i32) -> (i32)` |
| `zEuL` | func | 3087 | `(i32) -> ()` |
| `b8iN` | func | 1301 | `(i32) -> ()` |
| `aMvM` | func | 730 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `qPo4` | func | 2126 | `(i32 i32) -> (i32)` |
| `rS7p` | func | 1202 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `I2a5` | func | 1856 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `YbtN` | func | 1243 | `(i32 i32 i32) -> (i32)` |
| `jB4B` | func | 892 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `vW7m` | func | 2398 | `(i32) -> (i32)` |
| `WkfI` | func | 2460 | `(i32 i32) -> ()` |
| `ofmk` | func | 1700 | `(i32) -> (i32)` |
| `IhAH` | func | 2981 | `(i32) -> (i32 i32)` |
| `VoMy` | func | 2969 | `(i32 i32) -> (i32 i32)` |
| `Hofs` | func | 1577 | `(i32 f64 f64 f64) -> (i32)` |
| `JAR4` | func | 2313 | `(i32 i32) -> (i32)` |
| `yVJS` | func | 2458 | `(i32) -> (i32)` |
| `B6ai` | func | 3157 | `() -> (i32)` |
| `PXS1` | func | 1196 | `(i32 i32 i32 i32) -> (i32)` |
| `zqDm` | func | 2478 | `(i32) -> (i32)` |
| `GP32` | func | 2763 | `(i32) -> (i32)` |
| `vQ65` | func | 1419 | `() -> (i32)` |
| `gLDj` | func | 1440 | `(i32 i32 i32 i32) -> ()` |
| `Zg8c` | func | 1093 | `(i32 i32) -> (i32)` |
| `W7r6` | func | 1320 | `(i32 i32 i32) -> (i32)` |
| `SkD0` | func | 1791 | `() -> (i32)` |
| `L0mx` | func | 2446 | `(i32) -> ()` |
| `PW4R` | func | 2556 | `(i32 i32) -> ()` |
| `W2cO` | func | 1839 | `(i32 i32) -> ()` |
| `Bb6i` | func | 2045 | `(i32 i32) -> (i32)` |
| `XrhQ` | func | 1957 | `(i32 i32) -> ()` |
| `aYr1` | func | 3025 | `(i32 i32 i32) -> ()` |
| `hqML` | func | 875 | `(i32 i32) -> (i32)` |
| `uHMX` | func | 2557 | `() -> (i32)` |
| `pZWP` | func | 1679 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `V5HC` | func | 2441 | `(i32) -> (i32)` |
| `q2y8` | func | 2343 | `(i32 i32) -> (i32)` |
| `PunD` | func | 1452 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `HJoj` | func | 1462 | `(i32) -> (i32)` |
| `uOHo` | func | 2968 | `(i32 i32) -> (i32 i32)` |
| `vt83` | func | 874 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `cOjE` | func | 2513 | `(i32 i32) -> ()` |
| `G4Fg` | func | 3134 | `(i32) -> ()` |
| `DSrL` | func | 2440 | `(i32) -> (i32)` |
| `F5mD` | func | 1304 | `(i32 i32) -> (i32)` |
| `E1mD` | func | 2234 | `(i32 i32) -> ()` |
| `p3lh` | func | 601 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Bey4` | func | 2982 | `(i32) -> (i32 i32)` |
| `hpqa` | func | 1907 | `(i32) -> (i32)` |
| `U9zr` | func | 839 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `zT9b` | func | 667 | `(i32 i32) -> (i32)` |
| `pEXu` | func | 3129 | `() -> (f64)` |
| `JQWi` | func | 3088 | `() -> ()` |
| `i1hX` | func | 2524 | `() -> (i32)` |
| `CJvw` | func | 2992 | `() -> (i32 i32)` |
| `z344` | func | 1831 | `(i32 i32 f64 f64 f64) -> ()` |
| `PhRq` | func | 2469 | `(i32 i32) -> (i32)` |
| `Q6Tl` | func | 2459 | `(i32) -> (i32)` |
| `Zoda` | func | 2477 | `(i32) -> (i32)` |
| `WdyG` | func | 2774 | `(i32) -> ()` |
| `nJDH` | func | 2265 | `(i32 i32) -> ()` |
| `eCEK` | func | 2449 | `(i32) -> (i32)` |
| `MOJ8` | func | 3133 | `(i32) -> (i32)` |
| `NhKT` | func | 1371 | `(i32 f64 f64) -> (i32)` |
| `pVhW` | func | 2796 | `(i32) -> (i32)` |
| `Tcak` | func | 1865 | `(i32) -> ()` |
| `e7Zh` | func | 2914 | `() -> ()` |
| `mkXG` | func | 1275 | `(i32 i32) -> (i32)` |
| `vIgj` | func | 1461 | `(i32 i32 i32 i32) -> (i32)` |
| `WnKO` | func | 2443 | `(i32) -> (i32)` |
| `tfqq` | global | 1 | `` |
| `qppm` | func | 2020 | `(i32 i32) -> ()` |
| `c1MR` | func | 2933 | `(i32 i32) -> (i32)` |
| `CPuL` | func | 1094 | `(i32 i32) -> ()` |
| `IEh5` | func | 902 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ONBU` | func | 2479 | `(i32) -> (i32)` |
| `yJdI` | func | 551 | `(i32 i32 i32) -> (i32)` |
| `fSmN` | func | 1510 | `(i32 i32 i32) -> (i32)` |
| `Z3aW` | func | 2972 | `(i32 i32) -> (i32 i32)` |
| `EVlE` | func | 2456 | `(i32 i32) -> ()` |
| `aH4P` | func | 652 | `(i32 i32) -> (i32)` |
| `cXbK` | func | 1497 | `(i32 f64) -> (f64)` |
| `fvTX` | func | 2314 | `(i32 i32) -> (i32)` |
| `i2y4` | func | 2157 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `PsjV` | func | 2980 | `(i32) -> (i32 i32)` |
| `VA02` | func | 2235 | `(i32 f64) -> (i32)` |
| `zNZd` | func | 2397 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `osCd` | func | 2444 | `(i32) -> (i32)` |
| `f6JV` | func | 2733 | `(i32) -> (i32)` |
| `yCjF` | func | 1457 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 735 · max 735
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2018080, `i32` = i32.const 2018644

## Functions

- 2,886 bodies · 4,019,323 code bytes · avg 1.4 KB
- instruction scan: 2,886 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 106 |
| <= 128 bytes | 252 |
| <= 256 bytes | 367 |
| <= 512 bytes | 672 |
| <= 1024 bytes | 577 |
| <= 2048 bytes | 418 |
| <= 4096 bytes | 181 |
| <= 8192 bytes | 90 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,813 | 91,028 | local.get×26756, i32.const×10177, i32.load×5791, local.set×4887, local.tee×4767 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,624 | 54,591 | local.get×15198, i32.const×6563, i32.add×3205, local.set×3091, i32.load×2948 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 105 | 36,388 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 59 | 29,623 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,547 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,727 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 34 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 70 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 193 | `(i32 i32) -> ()` | 10 | 27,205 | 13,103 | local.get×4614, i32.load×1243, i32.const×1038, end×817, i32.add×750 |
| 215 | `(i32) -> ()` | 19 | 23,276 | 10,918 | local.get×2734, i32.load×1496, i32.const×1188, local.tee×1012, end×856 |
| 719 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 720 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1567 | `(i32 i32) -> (i32)` | 180 | 54,757 | 19,852 | local.get×6590, i32.const×2618, i64.store×1917, i64.const×1082, i64.load×1056 |
| 1974 | `(i32 i32) -> ()` | 111 | 39,586 | 17,528 | local.get×5140, i32.const×1646, local.set×891, local.tee×743, end×677 |
| 2567 | `(i32 i32) -> ()` | 398 | 142,401 | 64,327 | local.get×18492, i32.const×8026, local.set×3850, i32.load×3179, end×2818 |
| 2837 | `(i32 i32 i32 i32) -> ()` | 137 | 31,353 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2856 | `(i32 i32) -> ()` | 143 | 33,655 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
| `local.get` | 537,772 |
| `i32.const` | 224,960 |
| `local.tee` | 99,872 |
| `i32.load` | 93,953 |
| `local.set` | 93,926 |
| `i32.add` | 86,821 |
| `end` | 78,907 |
| `br_if` | 64,302 |
| `i32.store` | 46,339 |
| `block` | 37,147 |
| `i64.const` | 32,437 |
| `i64.store` | 31,579 |
| `if` | 30,108 |
| `call` | 29,070 |
| `i32.sub` | 24,558 |
| `i64.load` | 23,410 |
| `br` | 23,144 |
| `i32.eqz` | 19,492 |
| `select` | 16,925 |
| `i32.shl` | 16,367 |
| `i32.and` | 16,345 |
| `i32.ne` | 15,843 |
| `i32.load8_u` | 14,908 |
| `i32.eq` | 13,928 |
| `i32.store8` | 12,612 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,886/2,886 (degraded: 0)
