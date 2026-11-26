# WASM module: `bloxd_wasm_webgpu_bg`

> environment **staging.bloxd.io** · build `cwj32u.ae3e40c2` · analyzed 2026-11-27T00:59:42+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgpu_bg.c48e77359a739c909198.wasm
> 5,163,087 bytes (4.9 MB) · sha256 `f7305e0c5434bf64…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,157,353 → 5,163,087 bytes (+5,734)
- defined functions 2,967 → 2,969
- code bytes 4,069,311 → 4,073,527
- data bytes 1,041,569 → 1,043,096
- name-section module id `21c849cb80485c89.12337` → `881bcbb741e8cb97.12347`
- export signatures: +1 × `(f64) -> (f64)`
- export identifiers rotated by the obfuscator: 1/163 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `                                                            `
- removed embedded strings: `                                                            `

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,969 / 393 |
| Exports / imports | 163 / 394 |
| Code bytes (function bodies) | 4,073,527 (3.9 MB) |
| Total local variables | 31,171 |
| Instructions (scanable bodies) | 1,905,103 |
| Data segments / bytes | 3,543 / 1,043,096 |
| Element segments / entries | 1 / 839 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `881bcbb741e8cb97.12347` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,533 | 179 |
| 2 | import | 4,734 | 394 |
| 3 | function | 3,022 | 2969 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,305 | 163 |
| 9 | element | 1,685 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,078,946 | 2969 |
| 11 | data | 1,071,758 | 3543 |
| 0 | custom:name | 30 | — |

## Types

179 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Edil.VE1P` | memory | `[128..14648]` |
| 0 | `Edil.qEdy` | func | `(i32) -> (i32)` |
| 1 | `Edil.qNkh` | func | `(i32) -> (f64)` |
| 2 | `Edil.Cs77` | func | `() -> (i32)` |
| 3 | `Edil.L0mT` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `Edil.OIra` | func | `(i32) -> ()` |
| 5 | `Edil.w0GA` | func | `(i32 i32) -> (i32)` |
| 6 | `Edil.Bbi8` | func | `(i32) -> (i32)` |
| 7 | `Edil.THER` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `Edil.vQYQ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `Edil.dgsR` | func | `(i32) -> (i32)` |
| 10 | `Edil.pb2P` | func | `(i32 i32) -> ()` |
| 11 | `Edil.m0Yk` | func | `(i32 i32) -> ()` |
| 12 | `Edil.Dxj5` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `Edil.N5RW` | func | `(i32 i32) -> (i32)` |
| 14 | `Edil.tXsn` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `Edil.XL1r` | func | `(i32) -> (i32)` |
| 16 | `Edil.EQa7` | func | `(i32 i32) -> (i32)` |
| 17 | `Edil.CxIu` | func | `(i32 i32) -> (i32)` |
| 18 | `Edil.q989` | func | `(i32 i32) -> ()` |
| 19 | `Edil.MUPq` | func | `(i32) -> (i32)` |
| 20 | `Edil.GiBr` | func | `(i32) -> (i32)` |
| 21 | `Edil.T9e6` | func | `(i32 i32 i32) -> ()` |
| 22 | `Edil.JK5q` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `Edil.AS1b` | func | `(i32) -> (i32)` |
| 24 | `Edil.qxoZ` | func | `(i32) -> (i32)` |
| 25 | `Edil.PuJA` | func | `(i32 i32) -> ()` |
| 26 | `Edil.oY1g` | func | `(i32 i32) -> (i32)` |
| 27 | `Edil.ZYOB` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `Edil.K7Sw` | func | `(i32) -> (i32)` |
| 29 | `Edil.mmpl` | func | `(i32) -> (i32)` |
| 30 | `Edil.z4IB` | func | `(i32) -> (i32)` |
| 31 | `Edil.FaYp` | func | `(i32) -> (i32)` |
| 32 | `Edil.dKUT` | func | `(i32) -> (i32)` |
| 33 | `Edil.B6X0` | func | `(i32 i32 i32) -> ()` |
| 34 | `Edil.TTxs` | func | `(i32 i32) -> (i32)` |
| 35 | `Edil.Zrdf` | func | `(i32) -> (i32)` |
| 36 | `Edil.KwjG` | func | `(i32) -> ()` |
| 37 | `Edil.tMVz` | func | `(i32) -> (i32)` |
| 38 | `Edil.EfUP` | func | `(i32) -> (i32)` |
| 39 | `Edil.bkCk` | func | `(i32) -> ()` |
| 40 | `Edil.ajJN` | func | `(i32 i32) -> (i32)` |
| 41 | `Edil.bCr6` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `Edil.UEQZ` | func | `(i32) -> ()` |
| 43 | `Edil.mvYB` | func | `(i32 i32) -> ()` |
| 44 | `Edil.xbCL` | func | `() -> (i32)` |
| 45 | `Edil.eLNh` | func | `(i32 i32) -> (i32)` |
| 46 | `Edil.JWv0` | func | `(i32 i32) -> (i32)` |
| 47 | `Edil.dB7C` | func | `(i32) -> (i32)` |
| 48 | `Edil.V9R8` | func | `(i32) -> (i32)` |
| 49 | `Edil.pGpN` | func | `(i32) -> (i32)` |
| 50 | `Edil.FGl5` | func | `(i32 i32) -> ()` |
| 51 | `Edil.WVhm` | func | `(i32) -> (i32)` |
| 52 | `Edil.TtrN` | func | `(i32) -> ()` |
| 53 | `Edil.uijP` | func | `(i32 i32) -> (i32)` |
| 54 | `Edil.HKBO` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `Edil.sfAj` | func | `(i32) -> (i32)` |
| 56 | `Edil.dSO0` | func | `(i32 i32 i32) -> ()` |
| 57 | `Edil.apVO` | func | `(i32 i32) -> ()` |
| 58 | `Edil.IoYR` | func | `(i32) -> (i32)` |
| 59 | `Edil.mHCe` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `Edil.mRMU` | func | `(i32) -> ()` |
| 61 | `Edil.L76w` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `Edil.R6TR` | func | `(i32) -> ()` |
| 63 | `Edil.ToiG` | func | `(i32 i32 i32) -> ()` |
| 64 | `Edil.QDVW` | func | `(i32 i32) -> ()` |
| 65 | `Edil.M0Kf` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `Edil.lNU0` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `Edil.tteN` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `Edil.GpE1` | func | `(i32 i32 f64) -> ()` |
| 69 | `Edil.hfHv` | func | `(i32) -> (i32)` |
| 70 | `Edil.RO6p` | func | `(i32 i32) -> ()` |
| 71 | `Edil.A5Ft` | func | `(i32 i32 i32) -> ()` |
| 72 | `Edil.Tozz` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `Edil.x8f1` | func | `(i32 i32 i32) -> ()` |
| 74 | `Edil.uJfe` | func | `(i32) -> ()` |
| 75 | `Edil.L4zJ` | func | `(i32 i32) -> ()` |
| 76 | `Edil.GGkG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `Edil.Chwv` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `Edil.Qbra` | func | `(i32 i32 i32) -> ()` |
| 79 | `Edil.ZjlM` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `Edil.PX0B` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `Edil.z1cH` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `Edil.ipo5` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `Edil.Dxwn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `Edil.V6AJ` | func | `(i32 i32 i32) -> ()` |
| 85 | `Edil.P3LV` | func | `(i32 i32) -> (i32)` |
| 86 | `Edil.tv7k` | func | `(i32) -> (i32)` |
| 87 | `Edil.fLAw` | func | `(i32) -> (i32)` |
| 88 | `Edil.bjLZ` | func | `(i32) -> (i32)` |
| 89 | `Edil.jXdy` | func | `(i32 i32) -> (i32)` |
| 90 | `Edil.JOej` | func | `(i32) -> ()` |
| 91 | `Edil.RZG2` | func | `(i32) -> (i32)` |
| 92 | `Edil.hAuj` | func | `(i32 i32) -> (i32)` |
| 93 | `Edil.ERJS` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `Edil.pmH7` | func | `(i32 i32 i32) -> ()` |
| 95 | `Edil.VC0L` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `Edil.GEZA` | func | `() -> (f64)` |
| 97 | `Edil.JmZK` | func | `() -> (f64)` |
| 98 | `Edil.P4Ii` | func | `(i32 i32) -> ()` |
| 99 | `Edil.f7KI` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `Edil.gnsb` | func | `(i32) -> (i32)` |
| 101 | `Edil.JLOT` | func | `(i32) -> (i32)` |
| 102 | `Edil.monT` | func | `(i32) -> (i32)` |
| 103 | `Edil.i8Sv` | func | `() -> (i32)` |
| 104 | `Edil.vN15` | func | `() -> (i32)` |
| 105 | `Edil.NEWn` | func | `() -> (i32)` |
| 106 | `Edil.ha5n` | func | `() -> (i32)` |
| 107 | `Edil.HTzA` | func | `(i32 i32) -> (i32)` |
| 108 | `Edil.kwm2` | func | `(i32) -> ()` |
| 109 | `Edil.xutB` | func | `(i32 i32) -> (i32)` |
| 110 | `Edil.R7mh` | func | `(i32) -> (i32)` |
| 111 | `Edil.Rx3C` | func | `() -> (f64)` |
| 112 | `Edil.cYrj` | func | `(i32) -> (i32)` |
| 113 | `Edil.RQVH` | func | `(i32 i32) -> ()` |
| 114 | `Edil.H4vk` | func | `(i32 i32) -> ()` |
| 115 | `Edil.OCBB` | func | `(i32 i32) -> ()` |
| 116 | `Edil.mHA6` | func | `(i32 f32) -> ()` |
| 117 | `Edil.ZaEM` | func | `(i32 f32) -> ()` |
| 118 | `Edil.yW5d` | func | `(i32 i32) -> ()` |
| 119 | `Edil.TRtZ` | func | `(i32 i32) -> ()` |
| 120 | `Edil.oh5w` | func | `(i32 i32) -> ()` |
| 121 | `Edil.Gare` | func | `(i32 i32) -> ()` |
| 122 | `Edil.Oerc` | func | `(i32 i32 i32) -> ()` |
| 123 | `Edil.MIu0` | func | `(i32 i32) -> (i32)` |
| 124 | `Edil.L1iF` | func | `(i32 i32) -> ()` |
| 125 | `Edil.uv5s` | func | `(i32 i32) -> ()` |
| 126 | `Edil.bOhm` | func | `(i32 i32) -> ()` |
| 127 | `Edil.kuRM` | func | `(i32 i32) -> ()` |
| 128 | `Edil.NZQK` | func | `(i32 f64) -> ()` |
| 129 | `Edil.TASG` | func | `(i32 f64) -> ()` |
| 130 | `Edil.h27V` | func | `(i32 i32) -> ()` |
| 131 | `Edil.C595` | func | `(i32 i32 i32) -> ()` |
| 132 | `Edil.kKcQ` | func | `(i32 i32) -> ()` |
| 133 | `Edil.HPAM` | func | `(i32 i32) -> (i32)` |
| 134 | `Edil.KTOI` | func | `(i32 i32 i32) -> ()` |
| 135 | `Edil.FQUT` | func | `(i32 i32 i32) -> ()` |
| 136 | `Edil.DUZ2` | func | `(i32 i32) -> (i32)` |
| 137 | `Edil.cU6b` | func | `(i32 i32) -> (i32)` |
| 138 | `Edil.btQ1` | func | `(i32 i32 i32) -> ()` |
| 139 | `Edil.xVi1` | func | `(i32 i32 i32) -> ()` |
| 140 | `Edil.Sqcy` | func | `(i32 i32) -> (i32)` |
| 141 | `Edil.boJ5` | func | `(i32 i32) -> ()` |
| 142 | `Edil.ms0Z` | func | `(i32 i32) -> ()` |
| 143 | `Edil.x8jt` | func | `(i32 i32) -> ()` |
| 144 | `Edil.WiAG` | func | `(i32 i32) -> ()` |
| 145 | `Edil.yj5L` | func | `(i32 i32) -> ()` |
| 146 | `Edil.uIpm` | func | `(i32 i32) -> ()` |
| 147 | `Edil.pjBM` | func | `(i32 i32) -> ()` |
| 148 | `Edil.qJnn` | func | `(i32 f64) -> ()` |
| 149 | `Edil.UJff` | func | `(i32 i32) -> ()` |
| 150 | `Edil.x2r2` | func | `(i32 i32) -> ()` |
| 151 | `Edil.VdzM` | func | `(i32 i32) -> ()` |
| 152 | `Edil.k3wV` | func | `(i32 i32) -> ()` |
| 153 | `Edil.bOVM` | func | `(i32 i32) -> ()` |
| 154 | `Edil.U3HY` | func | `(i32 i32) -> ()` |
| 155 | `Edil.dCUH` | func | `(i32 i32) -> ()` |
| 156 | `Edil.YpfX` | func | `(i32 i32) -> ()` |
| 157 | `Edil.NF9p` | func | `(i32 i32) -> ()` |
| 158 | `Edil.wFdG` | func | `(i32 i32 i32) -> ()` |
| 159 | `Edil.n9nN` | func | `(i32 i32 i32) -> ()` |
| 160 | `Edil.tFoM` | func | `(i32 i32) -> (i32)` |
| 161 | `Edil.JYzl` | func | `(i32 i32) -> (i32)` |
| 162 | `Edil.hIFq` | func | `(i32 i32) -> ()` |
| 163 | `Edil.cRGu` | func | `(i32 i32) -> ()` |
| 164 | `Edil.kAdJ` | func | `(i32 f64) -> ()` |
| 165 | `Edil.l5jq` | func | `(i32 i32) -> ()` |
| 166 | `Edil.to49` | func | `(i32 i32) -> ()` |
| 167 | `Edil.WSnK` | func | `(i32 i32) -> ()` |
| 168 | `Edil.D2FK` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `Edil.WHd5` | func | `(i32 f64) -> ()` |
| 170 | `Edil.q1n9` | func | `(i32 f64) -> ()` |
| 171 | `Edil.fCny` | func | `(i32 f64) -> ()` |
| 172 | `Edil.Q4WH` | func | `(i32 f64) -> ()` |
| 173 | `Edil.mYRe` | func | `(i32 i32) -> ()` |
| 174 | `Edil.etVy` | func | `(i32 i32) -> ()` |
| 175 | `Edil.cG8L` | func | `(i32 i32) -> ()` |
| 176 | `Edil.ctSj` | func | `(i32 i32) -> ()` |
| 177 | `Edil.yl5v` | func | `(i32 i32) -> ()` |
| 178 | `Edil.uDI6` | func | `(i32 i32 i32) -> ()` |
| 179 | `Edil.uGWV` | func | `(i32 i32) -> ()` |
| 180 | `Edil.Y5Ha` | func | `(i32 f32) -> ()` |
| 181 | `Edil.dlcy` | func | `(i32 i32) -> ()` |
| 182 | `Edil.J52D` | func | `(i32 i32) -> ()` |
| 183 | `Edil.Ta9H` | func | `(i32 i32) -> ()` |
| 184 | `Edil.rwmx` | func | `(i32 i32) -> ()` |
| 185 | `Edil.hAkS` | func | `(i32 i32) -> ()` |
| 186 | `Edil.jo8x` | func | `(i32 i32) -> ()` |
| 187 | `Edil.fDGw` | func | `(i32 i32) -> ()` |
| 188 | `Edil.TJgK` | func | `(i32 i32) -> ()` |
| 189 | `Edil.xfUV` | func | `(i32 i32) -> ()` |
| 190 | `Edil.cXbb` | func | `(i32 i32) -> ()` |
| 191 | `Edil.N2qd` | func | `(i32 i32) -> ()` |
| 192 | `Edil.ZNSF` | func | `(i32 i32) -> ()` |
| 193 | `Edil.a1YI` | func | `(i32 i32) -> (i32)` |
| 194 | `Edil.rkX4` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `Edil.lWId` | func | `(i32 i32) -> ()` |
| 196 | `Edil.kX1x` | func | `(i32 i32 i32) -> ()` |
| 197 | `Edil.XV8o` | func | `(i32 i32) -> (i32)` |
| 198 | `Edil.XdR2` | func | `(i32) -> (i32)` |
| 199 | `Edil.xqfW` | func | `(i32 i32) -> ()` |
| 200 | `Edil.LiJp` | func | `(i32 i32) -> ()` |
| 201 | `Edil.vDhP` | func | `(i32 i32) -> ()` |
| 202 | `Edil.EkH9` | func | `(i32 i32) -> ()` |
| 203 | `Edil.kh3G` | func | `(i32 i32) -> ()` |
| 204 | `Edil.McxB` | func | `(i32 i32) -> ()` |
| 205 | `Edil.gaRM` | func | `(i32 i32) -> ()` |
| 206 | `Edil.oBN1` | func | `(i32 i32) -> ()` |
| 207 | `Edil.jTBS` | func | `(i32) -> (i32)` |
| 208 | `Edil.Tg0s` | func | `(i32 i32 i32) -> ()` |
| 209 | `Edil.i4sB` | func | `(i32 i32) -> ()` |
| 210 | `Edil.VRt7` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `Edil.n1L1` | func | `(i32 i32) -> ()` |
| 212 | `Edil.AVzD` | func | `(i32) -> ()` |
| 213 | `Edil.bB3w` | func | `(i32 i32) -> ()` |
| 214 | `Edil.NvdH` | func | `(i32) -> (i32)` |
| 215 | `Edil.NibV` | func | `(i32 i32 i32) -> ()` |
| 216 | `Edil.VRWm` | func | `(i32 i32) -> ()` |
| 217 | `Edil.Vbwf` | func | `(i32 i32) -> ()` |
| 218 | `Edil.WD7n` | func | `(i32 i32) -> ()` |
| 219 | `Edil.Yvs7` | func | `(i32 i32) -> ()` |
| 220 | `Edil.lFU4` | func | `(i32 i32) -> (i32)` |
| 221 | `Edil.y3IA` | func | `(i32 i32) -> ()` |
| 222 | `Edil.Oz9s` | func | `(i32 i32) -> ()` |
| 223 | `Edil.VEay` | func | `(i32 i32) -> ()` |
| 224 | `Edil.RfaD` | func | `(i32 i32) -> ()` |
| 225 | `Edil.rCsM` | func | `(i32 i32) -> ()` |
| 226 | `Edil.wHfM` | func | `(i32 i32) -> ()` |
| 227 | `Edil.f2bh` | func | `(i32 i32) -> ()` |
| 228 | `Edil.TJA4` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `Edil.IfCY` | func | `(i32) -> (i32)` |
| 230 | `Edil.GWn9` | func | `(i32) -> ()` |
| 231 | `Edil.Wxw7` | func | `(i32 f64) -> ()` |
| 232 | `Edil.jYS7` | func | `(i32 i32) -> ()` |
| 233 | `Edil.tmy8` | func | `(i32 i32) -> ()` |
| 234 | `Edil.fbOo` | func | `(i32 i32 i32) -> ()` |
| 235 | `Edil.jzQm` | func | `(i32 i32) -> (i32)` |
| 236 | `Edil.zPVP` | func | `(i32 i32) -> ()` |
| 237 | `Edil.PWUZ` | func | `(i32 i32) -> ()` |
| 238 | `Edil.fzfE` | func | `(i32 i32) -> ()` |
| 239 | `Edil.ARtC` | func | `(i32 i32 i32) -> ()` |
| 240 | `Edil.vTMD` | func | `(i32 i32) -> ()` |
| 241 | `Edil.r5wS` | func | `(i32 i32) -> ()` |
| 242 | `Edil.STwm` | func | `(i32 i32) -> ()` |
| 243 | `Edil.N5oM` | func | `(i32 i32 i32) -> ()` |
| 244 | `Edil.Syhq` | func | `(i32 i32) -> ()` |
| 245 | `Edil.FsXn` | func | `(i32 i32) -> ()` |
| 246 | `Edil.NgtM` | func | `(i32 i32 i32) -> ()` |
| 247 | `Edil.Rtkc` | func | `(i32 i32) -> (i32)` |
| 248 | `Edil.o5CB` | func | `(i32 i32) -> ()` |
| 249 | `Edil.orx7` | func | `(i32 i32 i32) -> ()` |
| 250 | `Edil.NJCt` | func | `(i32 i32) -> ()` |
| 251 | `Edil.u27e` | func | `(i32 f64) -> ()` |
| 252 | `Edil.Pspx` | func | `(i32 i32) -> ()` |
| 253 | `Edil.w4lr` | func | `(i32 f64) -> ()` |
| 254 | `Edil.IL2m` | func | `(i32 i32 i32) -> ()` |
| 255 | `Edil.ihgy` | func | `(i32 i32) -> ()` |
| 256 | `Edil.LFAg` | func | `(i32 i32 i32) -> ()` |
| 257 | `Edil.t7es` | func | `(i32 i32) -> ()` |
| 258 | `Edil.d8lm` | func | `(i32 i32) -> ()` |
| 259 | `Edil.o3q2` | func | `(i32 i32) -> ()` |
| 260 | `Edil.Rymz` | func | `(i32 i32 i32) -> ()` |
| 261 | `Edil.Jvgr` | func | `(i32 i32) -> ()` |
| 262 | `Edil.MoB8` | func | `(i32 i32) -> ()` |
| 263 | `Edil.Ntn4` | func | `(i32 i32) -> ()` |
| 264 | `Edil.Meqg` | func | `(i32 i32) -> ()` |
| 265 | `Edil.Ic5L` | func | `(i32 f32) -> ()` |
| 266 | `Edil.EcHy` | func | `(i32 f32) -> ()` |
| 267 | `Edil.B3ch` | func | `(i32 i32) -> ()` |
| 268 | `Edil.P6Ok` | func | `(i32 i32) -> ()` |
| 269 | `Edil.TPpI` | func | `(i32 i32) -> ()` |
| 270 | `Edil.WABg` | func | `(i32 i32) -> ()` |
| 271 | `Edil.l3w6` | func | `(i32 i32) -> ()` |
| 272 | `Edil.a1s5` | func | `(i32 i32) -> ()` |
| 273 | `Edil.FwDv` | func | `(i32 i32) -> ()` |
| 274 | `Edil.mbcV` | func | `(i32 i32) -> ()` |
| 275 | `Edil.GQKs` | func | `(i32 i32) -> ()` |
| 276 | `Edil.tmyF` | func | `(i32 i32) -> ()` |
| 277 | `Edil.WJPQ` | func | `(i32 i32) -> ()` |
| 278 | `Edil.e0ht` | func | `(i32 i32) -> ()` |
| 279 | `Edil.sUTc` | func | `(i32 i32) -> ()` |
| 280 | `Edil.qZSg` | func | `(i32 i32) -> ()` |
| 281 | `Edil.TpaD` | func | `(i32 i32) -> ()` |
| 282 | `Edil.vS4v` | func | `(i32 i32) -> ()` |
| 283 | `Edil.R7Co` | func | `(i32 i32) -> ()` |
| 284 | `Edil.EEZH` | func | `(i32 i32) -> ()` |
| 285 | `Edil.vTHF` | func | `(i32 i32 i32) -> ()` |
| 286 | `Edil.XaxW` | func | `(i32 i32 i32) -> ()` |
| 287 | `Edil.sVvX` | func | `(i32 i32) -> ()` |
| 288 | `Edil.avv9` | func | `(i32 i32) -> ()` |
| 289 | `Edil.U1qp` | func | `(i32 i32) -> ()` |
| 290 | `Edil.vVpV` | func | `(i32 i32) -> ()` |
| 291 | `Edil.GkIX` | func | `(i32 i32) -> ()` |
| 292 | `Edil.aRu1` | func | `(i32 i32) -> ()` |
| 293 | `Edil.deV0` | func | `(i32 i32) -> ()` |
| 294 | `Edil.QZkW` | func | `(i32 i32) -> ()` |
| 295 | `Edil.Dmm1` | func | `(i32 i32) -> ()` |
| 296 | `Edil.U8BE` | func | `(i32 i32) -> ()` |
| 297 | `Edil.F8AQ` | func | `(i32 i32) -> ()` |
| 298 | `Edil.Q3kk` | func | `(i32 i32) -> (i32)` |
| 299 | `Edil.namI` | func | `(i32 i32) -> ()` |
| 300 | `Edil.GEJC` | func | `(i32 i32 i32) -> ()` |
| 301 | `Edil.XHyH` | func | `(i32 i32) -> ()` |
| 302 | `Edil.h9eE` | func | `(i32 i32) -> ()` |
| 303 | `Edil.KuaI` | func | `(i32 i32) -> ()` |
| 304 | `Edil.LRtA` | func | `(i32 i32 i32) -> ()` |
| 305 | `Edil.zzZg` | func | `(i32 i32) -> (i32)` |
| 306 | `Edil.c3zs` | func | `(i32 i32 i32) -> ()` |
| 307 | `Edil.xGV0` | func | `(i32 i32 i32) -> ()` |
| 308 | `Edil.kLxO` | func | `(i32 i32) -> ()` |
| 309 | `Edil.qL8G` | func | `(i32 i32) -> ()` |
| 310 | `Edil.scvu` | func | `(i32 i32) -> ()` |
| 311 | `Edil.QcKR` | func | `(i32 i32) -> ()` |
| 312 | `Edil.muz8` | func | `(i32 i32) -> (i32)` |
| 313 | `Edil.etUV` | func | `(i32) -> (i32)` |
| 314 | `Edil.DynV` | func | `(i32) -> (i32)` |
| 315 | `Edil.om6S` | func | `(i32) -> (i32)` |
| 316 | `Edil.qpZO` | func | `(i32) -> (i32)` |
| 317 | `Edil.OkCM` | func | `(i32) -> (i32)` |
| 318 | `Edil.sHrR` | func | `(i32) -> (i32)` |
| 319 | `Edil.YW6o` | func | `(i32) -> (i32)` |
| 320 | `Edil.mnOx` | func | `(i32) -> (i32)` |
| 321 | `Edil.jTkL` | func | `(i32) -> (i32)` |
| 322 | `Edil.fIWc` | func | `(i32) -> (i32)` |
| 323 | `Edil.NwhR` | func | `(i32) -> (i32)` |
| 324 | `Edil.PWvC` | func | `(i32) -> (i32)` |
| 325 | `Edil.nrvB` | func | `(i32) -> (i32)` |
| 326 | `Edil.Ob3y` | func | `(i32) -> (i32)` |
| 327 | `Edil.B8NM` | func | `(i32) -> (f64)` |
| 328 | `Edil.L0ue` | func | `(i32) -> (f64)` |
| 329 | `Edil.uZWn` | func | `(i32) -> (i32)` |
| 330 | `Edil.hSXE` | func | `(i32) -> (f64)` |
| 331 | `Edil.WUvl` | func | `(i32) -> (i32)` |
| 332 | `Edil.wJ1U` | func | `(i32) -> (i32)` |
| 333 | `Edil.V5E4` | func | `(i32) -> (i32)` |
| 334 | `Edil.moRN` | func | `(i32) -> (i32)` |
| 335 | `Edil.JbEB` | func | `(i32) -> (i32)` |
| 336 | `Edil.lfIj` | func | `(i32) -> (i32)` |
| 337 | `Edil.uuJJ` | func | `(i32) -> (i32)` |
| 338 | `Edil.bEko` | func | `(i32) -> (i32)` |
| 339 | `Edil.o1Qn` | func | `(i32) -> (i32)` |
| 340 | `Edil.HnkT` | func | `(i32) -> (i32)` |
| 341 | `Edil.mXwz` | func | `(i32) -> (i32)` |
| 342 | `Edil.wkeP` | func | `(i32) -> (i32)` |
| 343 | `Edil.n2rE` | func | `(i32) -> (i32)` |
| 344 | `Edil.ukb4` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `Edil.FDBA` | func | `() -> (i32)` |
| 346 | `Edil.mZDb` | func | `(i32 i32) -> ()` |
| 347 | `Edil.udPx` | func | `(i32 i32 i32) -> ()` |
| 348 | `Edil.cDwC` | func | `(i32 i32 i32) -> ()` |
| 349 | `Edil.VvTo` | func | `(i32 i32) -> (i32)` |
| 350 | `Edil.bp2U` | func | `(i32) -> (i32)` |
| 351 | `Edil.brjs` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `Edil.RgKT` | func | `(i32) -> ()` |
| 353 | `Edil.ken1` | func | `(i32) -> (i32)` |
| 354 | `Edil.uX5O` | func | `(i32 i32) -> ()` |
| 355 | `Edil.Ab8D` | func | `(i32) -> (i32)` |
| 356 | `Edil.ngYi` | func | `(i32) -> (i32)` |
| 357 | `Edil.HXfj` | func | `(i32) -> (i32)` |
| 358 | `Edil.MaeT` | func | `(i32) -> (i32)` |
| 359 | `Edil.BbsK` | func | `(i32) -> (i32)` |
| 360 | `Edil.A68L` | func | `(i32 i32) -> ()` |
| 361 | `Edil.yBai` | func | `(i32 i32) -> ()` |
| 362 | `Edil.po2t` | func | `(i32 i32) -> ()` |
| 363 | `Edil.f9LU` | func | `(i32 i32) -> ()` |
| 364 | `Edil.KJDD` | func | `(i32 i32) -> ()` |
| 365 | `Edil.P9Yz` | func | `(i32 i32) -> ()` |
| 366 | `Edil.p7yl` | func | `(i32 i32) -> ()` |
| 367 | `Edil.A4Jz` | func | `(i32 i32 i32) -> ()` |
| 368 | `Edil.rnjW` | func | `(i32 i32) -> ()` |
| 369 | `Edil.JuJn` | func | `(i32 i32) -> (i32)` |
| 370 | `Edil.mfEe` | func | `(i32) -> (i32)` |
| 371 | `Edil.A1f6` | func | `(i32) -> (i32)` |
| 372 | `Edil.RqHH` | func | `(i32 i32) -> ()` |
| 373 | `Edil.PMqE` | func | `(i32) -> (i32)` |
| 374 | `Edil.L8cB` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `Edil.gdVq` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `Edil.Is1O` | func | `(i32 i32) -> ()` |
| 377 | `Edil.qtsU` | func | `(i32) -> (i32)` |
| 378 | `Edil.A760` | func | `(i32) -> (i32)` |
| 379 | `Edil.sKXp` | func | `(i32) -> (i32)` |
| 380 | `Edil.zOii` | func | `(i32) -> (i32)` |
| 381 | `Edil.HuUJ` | func | `(i32) -> (i32)` |
| 382 | `Edil.WpGW` | func | `(i32) -> (i32)` |
| 383 | `Edil.X9LL` | func | `(i32 i32) -> ()` |
| 384 | `Edil.yf3V` | func | `(i32 i32) -> (i32)` |
| 385 | `Edil.nqYP` | func | `(i32 i32) -> (i32)` |
| 386 | `Edil.gEM6` | func | `(i32 i32) -> (i32)` |
| 387 | `Edil.ILua` | func | `(i32 i32) -> (i32)` |
| 388 | `Edil.UZwe` | func | `(i32 i32) -> (i32)` |
| 389 | `Edil.hh3H` | func | `(i32 i32) -> (i32)` |
| 390 | `Edil.avBe` | func | `(f64) -> (i32)` |
| 391 | `Edil.hvlq` | func | `(i32 i32) -> (i32)` |
| 392 | `Edil.dgCJ` | func | `(i32 i32) -> (i32)` |

## Exports

163 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `JXXB` | func | 1350 | `(i32 i32 i32) -> (i32)` |
| `cfb6` | func | 1650 | `(i32 i32 i32 i32) -> (i32)` |
| `stjz` | func | 2439 | `(i32 i32) -> (i32)` |
| `H4I8` | func | 1695 | `(i32 f64 f64 f64) -> (i32)` |
| `c0SQ` | func | 2056 | `(i32) -> (i32)` |
| `uDEb` | func | 3153 | `(i32) -> (i32 i32)` |
| `Bczi` | func | 1301 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `qV5t` | func | 2578 | `(i32) -> (f64)` |
| `uCPq` | func | 662 | `(i32 i32 i32) -> (i32)` |
| `CjzI` | func | 778 | `(i32 i32) -> (i32)` |
| `lvlV` | func | 3143 | `(i32 i32) -> (i32 i32)` |
| `qgvC` | func | 3142 | `(i32 i32) -> (i32 i32)` |
| `DI2m` | func | 974 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `YoDP` | func | 1797 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `xGg3` | func | 1679 | `(i32 i32) -> (i32)` |
| `HwPy` | func | 3081 | `() -> ()` |
| `LQbk` | func | 2611 | `(i32 i32) -> (i32)` |
| `VXo5` | func | 2058 | `(i32 i32 i32 i32) -> ()` |
| `KVA2` | func | 2437 | `(i32 i32) -> (i32)` |
| `t9SX` | func | 992 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `no7O` | func | 2579 | `(i32) -> (i32)` |
| `j3j2` | func | 1475 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `oXwi` | global | 2 | `` |
| `o5jV` | func | 705 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `MMjC` | func | 3169 | `() -> (i32 i32)` |
| `bEcZ` | func | 2602 | `(i32) -> (i32)` |
| `LGOB` | func | 3273 | `(i32) -> ()` |
| `ImAr` | func | 2306 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `i9IV` | func | 1375 | `(i32) -> (i32)` |
| `cVvG` | func | 2612 | `(i32 i32) -> (i32)` |
| `sU34` | func | 2583 | `(i32) -> (i32)` |
| `DxBC` | func | 2488 | `(i32 i32 i32 i32) -> (i32)` |
| `rgMV` | func | 2563 | `(i32 i32) -> ()` |
| `MPhq` | func | 1924 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `PKqP` | func | 2581 | `(i32) -> (i32)` |
| `eOFE` | func | 2621 | `(i32) -> (i32)` |
| `FFoe` | func | 1844 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `OzxA` | func | 3156 | `(i32) -> (i32 i32)` |
| `mOvU` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `bPyk` | func | 3195 | `(i32 i32 i32 i32) -> ()` |
| `vlU0` | func | 1262 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Bd1A` | func | 2930 | `(i32) -> ()` |
| `ueek` | func | 2039 | `(i32) -> (i32)` |
| `cpZW` | func | 2385 | `(i32 i32) -> ()` |
| `VOjn` | func | 1917 | `() -> (i32)` |
| `WS8s` | func | 2650 | `(i32 i32) -> ()` |
| `Z2Q9` | func | 2953 | `(i32) -> (i32)` |
| `Za4V` | func | 3206 | `(i32 i32 i32) -> ()` |
| `w9lk` | func | 1354 | `(i32 i32 i32) -> ()` |
| `BR6b` | func | 2359 | `(i32 f64) -> (i32)` |
| `fAfZ` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `boH5` | func | 2580 | `(i32) -> (i32)` |
| `WLnr` | func | 2117 | `(i32 f64) -> (i32)` |
| `GMOR` | func | 3204 | `(i32 i32 i32) -> (i32)` |
| `XiOH` | func | 2584 | `(i32) -> (i32)` |
| `Tf8Z` | func | 1978 | `(i32 i32) -> (i32)` |
| `y9Qw` | func | 1309 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `t7en` | func | 3139 | `(i32 i32) -> (i32 i32)` |
| `k1eS` | func | 3275 | `() -> ()` |
| `PiUH` | func | 762 | `(i32 i32) -> (i32)` |
| `he3k` | func | 2150 | `(i32 i32) -> ()` |
| `NTjm` | func | 3155 | `(i32) -> (i32 i32)` |
| `rxgw` | func | 1940 | `(i32 i32 i32 i32) -> (i32)` |
| `Ypsb` | func | 2601 | `(i32) -> (i32)` |
| `XCbE` | func | 2247 | `(i32 i32) -> (i32)` |
| `IX2d` | func | 2588 | `(i32) -> (i32)` |
| `YXZw` | func | 1302 | `(i32 i32 i32 i32) -> (i32)` |
| `FoPM` | func | 1962 | `(i32 i32 f64 f64 f64) -> ()` |
| `NTZk` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `lew0` | func | 1968 | `(i32 i32) -> ()` |
| `xOav` | func | 2884 | `(i32) -> (i32)` |
| `Zd9z` | func | 3170 | `() -> (i32 i32)` |
| `Uilj` | func | 2919 | `(i32) -> (i32)` |
| `LHaL` | func | 2668 | `() -> (i32)` |
| `ZGCo` | func | 1602 | `(i32 i32) -> (i32)` |
| `E9aR` | func | 1331 | `(i32 i32) -> (i32)` |
| `YocB` | func | 3101 | `(i32 i32) -> (i32)` |
| `d8vA` | func | 1588 | `(i32 i32) -> (i32)` |
| `LUSH` | func | 3140 | `(i32 i32) -> (i32 i32)` |
| `gzTc` | func | 3264 | `(i32 i32 i32) -> ()` |
| `jseH` | func | 3324 | `(i32) -> ()` |
| `w1Dz` | func | 975 | `(i32 i32) -> (i32)` |
| `ln0P` | func | 1555 | `(i32 i32 i32 i32) -> ()` |
| `UzEq` | func | 2597 | `(i32 i32) -> ()` |
| `ZUr7` | func | 1820 | `(i32) -> (i32)` |
| `TqeW` | func | 2702 | `() -> (i32)` |
| `yOII` | func | 2473 | `(i32 i32) -> (i32)` |
| `bmdS` | func | 2892 | `(i32) -> (i32)` |
| `uhKS` | func | 2438 | `(i32 i32) -> (i32)` |
| `EDBl` | func | 2585 | `(i32) -> ()` |
| `dHEA` | func | 2587 | `(i32) -> (i32)` |
| `FC1k` | global | 1 | `` |
| `oNM1` | func | 1205 | `(i32 i32) -> (i32)` |
| `k1Qn` | func | 3323 | `(i32) -> (i32)` |
| `fBB3` | func | 3154 | `(i32) -> (i32 i32)` |
| `bPDM` | func | 1476 | `(i32 f64 f64) -> (i32)` |
| `YZb1` | func | 3108 | `(i32 i32 i32 i32) -> (i32)` |
| `qVJU` | func | 3144 | `(i32 i32) -> (i32 i32)` |
| `D4IY` | func | 3349 | `() -> (i32)` |
| `upCD` | func | 1691 | `(i32 i32) -> ()` |
| `NrBn` | func | 772 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `wU6k` | func | 2701 | `(i32 i32) -> ()` |
| `sbDr` | func | 1615 | `(i32 i32) -> (i32)` |
| `DHHa` | func | 2532 | `(i32) -> (i32)` |
| `rOf7` | func | 1838 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `zjga` | func | 1985 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `K5Qf` | func | 3152 | `(i32) -> (i32 i32)` |
| `iHY7` | func | 3348 | `() -> (i32)` |
| `KSq6` | func | 2515 | `(i32) -> (i32)` |
| `Gro7` | func | 3168 | `() -> (i32 i32)` |
| `b3HC` | func | 1575 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Kizn` | func | 2586 | `(i32) -> (i32)` |
| `pxCk` | func | 2603 | `(i32 i32) -> ()` |
| `ckcv` | func | 1857 | `(i32 i32) -> (i32)` |
| `UyOq` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `y3T9` | func | 1580 | `(i32 i32 i32 i32) -> (i32)` |
| `ikLo` | func | 1206 | `(i32 i32) -> ()` |
| `eM8L` | func | 1382 | `(i32 i32) -> (i32)` |
| `BIb4` | func | 2091 | `(i32 i32) -> ()` |
| `qq2O` | func | 836 | `(i32) -> (i32)` |
| `mI5K` | func | 1994 | `(i32) -> ()` |
| `TaMT` | func | 3145 | `(i32 i32) -> (i32 i32)` |
| `kyST` | func | 802 | `(i32 i32) -> (i32)` |
| `BoM1` | func | 3114 | `(i32 i32) -> ()` |
| `hzsX` | func | 3141 | `(i32 i32) -> (i32 i32)` |
| `URz1` | func | 2285 | `(i32 i32) -> (i32)` |
| `M6IE` | func | 839 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `h0mJ` | func | 2620 | `(i32) -> (i32)` |
| `otrH` | func | 1616 | `(i32 i32) -> (i32)` |
| `s1jJ` | func | 1570 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `rTnY` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `VlYQ` | func | 2174 | `(i32 i32) -> (i32)` |
| `QPZb` | func | 2483 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `YUhb` | func | 3344 | `(f64) -> (f64)` |
| `tRjQ` | func | 1629 | `(i32 i32 i32) -> (i32)` |
| `BANM` | func | 1004 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `kLgZ` | func | 2610 | `(i32) -> (i32)` |
| `e6Vo` | func | 2908 | `(i32) -> (i32)` |
| `iEmA` | func | 1408 | `(i32) -> ()` |
| `CwUM` | func | 2564 | `(i32) -> (i32)` |
| `xhk6` | func | 1618 | `(i32 f64) -> (f64)` |
| `Qtau` | func | 1528 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `xOdr` | func | 2440 | `(i32 i32) -> (i32)` |
| `Bq1W` | func | 1993 | `(i32) -> ()` |
| `mXEf` | func | 3319 | `() -> (f64)` |
| `K8eV` | func | 2582 | `(i32) -> (i32)` |
| `h63U` | func | 1536 | `(i32) -> (i32)` |
| `GnLe` | func | 1533 | `() -> (i32)` |
| `w863` | func | 2358 | `(i32 i32) -> ()` |
| `XMaq` | func | 1733 | `(i32 i32 i32 i32) -> (i32)` |
| `PwjK` | func | 1501 | `(i32 i32) -> (i32)` |
| `Sfoh` | func | 1412 | `(i32 i32) -> (i32)` |
| `xTvn` | func | 853 | `(i32 i32 i32) -> (i32)` |
| `Y0ID` | func | 2619 | `(i32) -> (i32)` |
| `SlXI` | func | 940 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `y5DI` | func | 2134 | `(i32 f64 f64 f64) -> (i32)` |
| `t6zq` | func | 832 | `(i32 i32 i32 i32) -> (i32)` |
| `M8qJ` | func | 1690 | `(i32 i32) -> ()` |
| `k9TI` | func | 3234 | `() -> (i32)` |
| `gTbn` | func | 1581 | `(i32) -> (i32)` |
| `BnfM` | func | 2604 | `(i32) -> (i32)` |
| `UkLq` | func | 1425 | `(i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 840 · max 840
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2251632, `i32` = i32.const 2252196

## Functions

- 2,969 bodies · 4,073,527 code bytes · avg 1.3 KB
- instruction scan: 2,969 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 172 |
| <= 64 bytes | 114 |
| <= 128 bytes | 274 |
| <= 256 bytes | 390 |
| <= 512 bytes | 674 |
| <= 1024 bytes | 594 |
| <= 2048 bytes | 418 |
| <= 4096 bytes | 177 |
| <= 8192 bytes | 93 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 36 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,777 | 91,008 | local.get×26752, i32.const×10169, i32.load×5791, local.set×4887, local.tee×4766 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 150 | 122,738 | 58,940 | local.get×16686, i32.const×7065, i32.add×3411, local.set×3377, i32.load×3107 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,262 | 25,609 | local.get×7565, i32.const×3392, local.set×1402, i32.add×1294, i32.load×1168 |
| 3 | `(i32 i32) -> ()` | 105 | 36,607 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,462 | 14,007 | local.get×4107, i32.const×1883, i32.load×880, i32.add×647, local.set×620 |
| 5 | `(i32 i32) -> ()` | 58 | 29,792 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 6 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,393 | 12,764 | local.get×3784, i32.const×1615, local.set×985, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32 i32 i32) -> ()` | 177 | 20,026 | 9,398 | local.get×2934, i32.const×1038, local.set×621, i32.add×458, i32.load×421 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 17 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 105 | 20,468 | 7,839 | local.get×2940, i32.const×890, i64.store×834, i32.store×615, i64.const×478 |
| 21 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,318 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,818 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 44 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,436 | 12,890 | local.get×3670, i32.const×1868, i32.add×766, local.set×697, end×577 |
| 66 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 194 | `(i32 i32) -> ()` | 10 | 27,551 | 13,273 | local.get×4670, i32.load×1257, i32.const×1060, end×827, i32.add×762 |
| 214 | `(i32) -> ()` | 19 | 23,258 | 10,909 | local.get×2733, i32.load×1495, i32.const×1187, local.tee×1011, end×855 |
| 712 | `(i32 i32) -> ()` | 139 | 42,973 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 713 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1017 | `(i32 i32) -> (i32)` | 40 | 19,972 | 7,775 | local.get×2507, i32.const×849, i64.store×583, i32.load×394, local.set×357 |
| 1585 | `(i32 i32) -> (i32)` | 182 | 54,922 | 19,834 | local.get×6599, i32.const×2595, i64.store×1935, i64.const×1087, i64.load×1068 |
| 1984 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2625 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2916 | `(i32 i32 i32 i32) -> ()` | 137 | 31,379 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2935 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
| `local.get` | 544,694 |
| `i32.const` | 228,717 |
| `local.tee` | 100,005 |
| `local.set` | 94,967 |
| `i32.load` | 93,878 |
| `i32.add` | 87,539 |
| `end` | 79,689 |
| `br_if` | 64,245 |
| `i32.store` | 47,215 |
| `block` | 37,495 |
| `i64.store` | 33,162 |
| `i64.const` | 32,325 |
| `if` | 30,491 |
| `call` | 30,347 |
| `i64.load` | 24,595 |
| `i32.sub` | 24,247 |
| `br` | 23,328 |
| `i32.eqz` | 19,180 |
| `select` | 16,812 |
| `i32.and` | 16,371 |
| `i32.shl` | 16,237 |
| `i32.ne` | 15,738 |
| `i32.load8_u` | 15,333 |
| `i32.eq` | 13,843 |
| `i32.store8` | 13,487 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,969/2,969 (degraded: 0)
