# WASM module: `bloxd_wasm_webgl_bg`

> environment **staging.bloxd.io** · build `sn3sfj.2522680a` · analyzed 2026-11-25T01:10:44+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl_bg.5a7acf67a8d13ac5aed9.wasm
> 5,516,677 bytes (5.3 MB) · sha256 `9b5a782f90a35f11…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,503,528 → 5,516,677 bytes (+13,149)
- defined functions 2,905 → 2,914
- code bytes 4,031,927 → 4,043,172
- data bytes 1,422,824 → 1,424,644
- name-section module id `a1cc39032427b731.10887` → `e9038797635468d5.10913`
- export signatures: +1 × `() -> (i32 i32)`
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `    MeshIo_mesh_general_atlasn input_x = MeshIo_mesh_general`
- removed embedded strings: `; no KHR_parallel_shader_compile; slowest: , the surface has`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,914 / 299 |
| Exports / imports | 157 / 300 |
| Code bytes (function bodies) | 4,043,172 (3.9 MB) |
| Total local variables | 30,791 |
| Instructions (scanable bodies) | 1,895,853 |
| Data segments / bytes | 4,033 / 1,424,644 |
| Element segments / entries | 1 / 752 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `e9038797635468d5.10913` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,506 | 177 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,965 | 2914 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,511 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,048,514 | 2914 |
| 11 | data | 1,457,214 | 4033 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `z9Pc.B3OE` | memory | `[128..14648]` |
| 0 | `z9Pc.Z44b` | func | `(i32) -> (f64)` |
| 1 | `z9Pc.jW8R` | func | `() -> (i32)` |
| 2 | `z9Pc.wNKs` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `z9Pc.kZ3h` | func | `(i32) -> ()` |
| 4 | `z9Pc.uANy` | func | `(i32 i32) -> (i32)` |
| 5 | `z9Pc.u2ia` | func | `(i32) -> (i32)` |
| 6 | `z9Pc.z4JV` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `z9Pc.Sul3` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `z9Pc.R2Da` | func | `(i32) -> (i32)` |
| 9 | `z9Pc.DDUz` | func | `(i32 i32) -> ()` |
| 10 | `z9Pc.qJLB` | func | `(i32 i32) -> ()` |
| 11 | `z9Pc.kUPT` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `z9Pc.zedH` | func | `(i32 i32) -> (i32)` |
| 13 | `z9Pc.Y8uS` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `z9Pc.dyf7` | func | `(i32) -> (i32)` |
| 15 | `z9Pc.Yyyu` | func | `(i32 i32) -> (i32)` |
| 16 | `z9Pc.W7Pl` | func | `(i32 i32) -> (i32)` |
| 17 | `z9Pc.UnVy` | func | `(i32 i32) -> ()` |
| 18 | `z9Pc.AqLl` | func | `(i32) -> (i32)` |
| 19 | `z9Pc.vyE2` | func | `(i32) -> (i32)` |
| 20 | `z9Pc.Kvla` | func | `(i32) -> (i32)` |
| 21 | `z9Pc.V2uK` | func | `(i32) -> ()` |
| 22 | `z9Pc.bEnN` | func | `(i32 i32) -> ()` |
| 23 | `z9Pc.QrWF` | func | `(i32 i32) -> ()` |
| 24 | `z9Pc.dJoQ` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `z9Pc.XAK3` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `z9Pc.q2Vh` | func | `(i32) -> (i32)` |
| 27 | `z9Pc.DEop` | func | `(i32 i32) -> ()` |
| 28 | `z9Pc.wRDZ` | func | `(i32 i32) -> (i32)` |
| 29 | `z9Pc.PDwC` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `z9Pc.azkJ` | func | `(i32 i32) -> (i32)` |
| 31 | `z9Pc.tX60` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `z9Pc.OG9t` | func | `(i32) -> (i32)` |
| 33 | `z9Pc.L3GH` | func | `(i32 i32) -> ()` |
| 34 | `z9Pc.JeRg` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `z9Pc.pU2h` | func | `(i32) -> (i32)` |
| 36 | `z9Pc.rXEf` | func | `(i32) -> (i32)` |
| 37 | `z9Pc.tMFW` | func | `(i32) -> (i32)` |
| 38 | `z9Pc.vNxk` | func | `(i32 i32) -> (i32)` |
| 39 | `z9Pc.jIl0` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `z9Pc.raDR` | func | `(i32) -> (i32)` |
| 41 | `z9Pc.Q2b0` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `z9Pc.i2cJ` | func | `() -> (f64)` |
| 43 | `z9Pc.wMU5` | func | `(i32) -> (i32)` |
| 44 | `z9Pc.SMbE` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `z9Pc.ilCg` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `z9Pc.uW6i` | func | `(i32 i32 i32) -> ()` |
| 47 | `z9Pc.u1cX` | func | `(i32 i32 i32) -> ()` |
| 48 | `z9Pc.Yy92` | func | `(i32 i32 i32) -> ()` |
| 49 | `z9Pc.ytJm` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `z9Pc.yS0p` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `z9Pc.i5TA` | func | `(i32 i32) -> ()` |
| 52 | `z9Pc.DoQD` | func | `(i32 i32) -> ()` |
| 53 | `z9Pc.YvLg` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `z9Pc.dtOA` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `z9Pc.ygjg` | func | `(i32 f32 f32) -> ()` |
| 56 | `z9Pc.BC2F` | func | `(i32 f32 f32) -> ()` |
| 57 | `z9Pc.nnGP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `z9Pc.p7KQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `z9Pc.G916` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `z9Pc.se4i` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `z9Pc.Irrf` | func | `(i32 i32 i32) -> ()` |
| 62 | `z9Pc.OySX` | func | `(i32 i32 i32) -> ()` |
| 63 | `z9Pc.af9Z` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `z9Pc.hTZV` | func | `(i32 i32 i32) -> ()` |
| 65 | `z9Pc.xKMf` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `z9Pc.Shgj` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `z9Pc.SL8r` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `z9Pc.ncuN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `z9Pc.pdDi` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `z9Pc.ILUN` | func | `(i32) -> (i32)` |
| 71 | `z9Pc.SDZb` | func | `(i32) -> ()` |
| 72 | `z9Pc.U95J` | func | `(i32) -> (i32)` |
| 73 | `z9Pc.TPCS` | func | `(i32 i32) -> (i32)` |
| 74 | `z9Pc.xa12` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `z9Pc.J8IY` | func | `(i32 i32 i32) -> ()` |
| 76 | `z9Pc.QgET` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `z9Pc.M1oA` | func | `() -> (f64)` |
| 78 | `z9Pc.geUh` | func | `() -> (f64)` |
| 79 | `z9Pc.JGge` | func | `(i32 i32) -> ()` |
| 80 | `z9Pc.yS8U` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `z9Pc.lthN` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `z9Pc.zmXJ` | func | `(i32 i32 i32) -> ()` |
| 83 | `z9Pc.bJYp` | func | `(i32 i32 i32) -> ()` |
| 84 | `z9Pc.EjYi` | func | `(i32 i32) -> ()` |
| 85 | `z9Pc.rfqd` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `z9Pc.DP83` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `z9Pc.RuGy` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `z9Pc.mNfx` | func | `(i32 i32) -> ()` |
| 89 | `z9Pc.xUfS` | func | `(i32 i32) -> ()` |
| 90 | `z9Pc.LiPW` | func | `(i32) -> (i32)` |
| 91 | `z9Pc.dGpd` | func | `(i32 i32 i32) -> ()` |
| 92 | `z9Pc.Inu5` | func | `(i32 i32 i32) -> ()` |
| 93 | `z9Pc.MyJX` | func | `(i32) -> (i32)` |
| 94 | `z9Pc.Qdhv` | func | `(i32) -> (i32)` |
| 95 | `z9Pc.mSQw` | func | `(i32 i32) -> ()` |
| 96 | `z9Pc.piV5` | func | `(i32 i32) -> ()` |
| 97 | `z9Pc.x7IL` | func | `(i32 i32) -> ()` |
| 98 | `z9Pc.A6r3` | func | `(i32 i32) -> ()` |
| 99 | `z9Pc.e7tG` | func | `(i32 i32 i32) -> ()` |
| 100 | `z9Pc.TnYd` | func | `(i32 i32 i32) -> ()` |
| 101 | `z9Pc.baOT` | func | `(i32 i32 f32) -> ()` |
| 102 | `z9Pc.t3MJ` | func | `(i32 i32 f32) -> ()` |
| 103 | `z9Pc.veNF` | func | `(i32 i32 i32) -> ()` |
| 104 | `z9Pc.G5Bu` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `z9Pc.KCrR` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `z9Pc.DD5n` | func | `(i32 i32) -> ()` |
| 107 | `z9Pc.hxwc` | func | `(i32 i32) -> ()` |
| 108 | `z9Pc.Qc5q` | func | `(i32 i32) -> ()` |
| 109 | `z9Pc.Jx3Z` | func | `(i32 i32) -> ()` |
| 110 | `z9Pc.KvKB` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `z9Pc.LcEN` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `z9Pc.Oot5` | func | `(i32 i32 i32) -> ()` |
| 113 | `z9Pc.ddSP` | func | `(i32 i32 i32) -> ()` |
| 114 | `z9Pc.TShx` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `z9Pc.o6q1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `z9Pc.ej9i` | func | `(i32 i32) -> ()` |
| 117 | `z9Pc.C6RS` | func | `(i32 i32) -> ()` |
| 118 | `z9Pc.qYNS` | func | `(i32 i32) -> (i32)` |
| 119 | `z9Pc.n72A` | func | `(i32 i32) -> (i32)` |
| 120 | `z9Pc.qLGl` | func | `(i32 i32) -> ()` |
| 121 | `z9Pc.IkL2` | func | `(i32 i32) -> ()` |
| 122 | `z9Pc.dNSE` | func | `(i32) -> (i32)` |
| 123 | `z9Pc.YmYh` | func | `(i32 i32) -> ()` |
| 124 | `z9Pc.KHIO` | func | `(i32 i32) -> ()` |
| 125 | `z9Pc.tB6P` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `z9Pc.dSKu` | func | `(i32 i32 i32) -> ()` |
| 127 | `z9Pc.WFmu` | func | `(i32 i32 i32) -> ()` |
| 128 | `z9Pc.FiOr` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `z9Pc.SY8x` | func | `(i32 i32) -> ()` |
| 130 | `z9Pc.OZp1` | func | `(i32 i32 i32) -> ()` |
| 131 | `z9Pc.Tfn6` | func | `(i32 i32 i32) -> ()` |
| 132 | `z9Pc.pTFE` | func | `(i32 i32 i32) -> ()` |
| 133 | `z9Pc.NVwR` | func | `(i32 i32 i32) -> ()` |
| 134 | `z9Pc.qnnj` | func | `(i32) -> ()` |
| 135 | `z9Pc.WoXY` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `z9Pc.vtVi` | func | `(i32 i32 i32) -> ()` |
| 137 | `z9Pc.l8g8` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `z9Pc.Hb18` | func | `(i32 i32) -> ()` |
| 139 | `z9Pc.B1gY` | func | `(i32) -> (i32)` |
| 140 | `z9Pc.AmV4` | func | `(i32 i32) -> ()` |
| 141 | `z9Pc.QuST` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `z9Pc.bpJ3` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `z9Pc.hoM1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `z9Pc.aEMQ` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `z9Pc.p5er` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `z9Pc.IlaH` | func | `(i32 i32) -> ()` |
| 147 | `z9Pc.v74J` | func | `(i32 i32) -> ()` |
| 148 | `z9Pc.UWGW` | func | `(i32 i32) -> ()` |
| 149 | `z9Pc.sVyA` | func | `(i32 i32) -> ()` |
| 150 | `z9Pc.Hzh5` | func | `(i32) -> (i32)` |
| 151 | `z9Pc.EUhI` | func | `(i32) -> (i32)` |
| 152 | `z9Pc.guvB` | func | `(i32) -> (i32)` |
| 153 | `z9Pc.mxMn` | func | `(i32) -> (i32)` |
| 154 | `z9Pc.hpQl` | func | `(i32) -> (i32)` |
| 155 | `z9Pc.r46E` | func | `(i32) -> (i32)` |
| 156 | `z9Pc.oAIE` | func | `() -> (i32)` |
| 157 | `z9Pc.G7H1` | func | `() -> (i32)` |
| 158 | `z9Pc.tx0R` | func | `() -> (i32)` |
| 159 | `z9Pc.zWkv` | func | `() -> (i32)` |
| 160 | `z9Pc.M8QI` | func | `(i32 i32) -> (i32)` |
| 161 | `z9Pc.M28u` | func | `(i32) -> ()` |
| 162 | `z9Pc.ouyu` | func | `(i32 i32) -> (i32)` |
| 163 | `z9Pc.v3Xw` | func | `(i32) -> (i32)` |
| 164 | `z9Pc.Js3P` | func | `(i32) -> (i32)` |
| 165 | `z9Pc.CqMu` | func | `(i32) -> (i32)` |
| 166 | `z9Pc.AgrU` | func | `(i32) -> ()` |
| 167 | `z9Pc.qTZ2` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `z9Pc.LpbR` | func | `(i32) -> (i32)` |
| 169 | `z9Pc.vXE1` | func | `(i32) -> (i32)` |
| 170 | `z9Pc.ZzrR` | func | `(i32 i32) -> (i32)` |
| 171 | `z9Pc.piD9` | func | `(i32) -> ()` |
| 172 | `z9Pc.hfQt` | func | `() -> (i32)` |
| 173 | `z9Pc.kPFs` | func | `(i32 i32) -> (i32)` |
| 174 | `z9Pc.syK7` | func | `(i32 i32) -> ()` |
| 175 | `z9Pc.rr9W` | func | `(i32 i32) -> ()` |
| 176 | `z9Pc.LXSS` | func | `(i32) -> (i32)` |
| 177 | `z9Pc.DuAd` | func | `(i32 i32) -> (i32)` |
| 178 | `z9Pc.EWm9` | func | `(i32) -> ()` |
| 179 | `z9Pc.IOQf` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `z9Pc.h22K` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `z9Pc.cvM3` | func | `(i32 i32) -> ()` |
| 182 | `z9Pc.jQCX` | func | `(i32 i32) -> ()` |
| 183 | `z9Pc.SBvM` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `z9Pc.jcyS` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `z9Pc.HXu0` | func | `(i32 f32) -> ()` |
| 186 | `z9Pc.g4Za` | func | `(i32 f32) -> ()` |
| 187 | `z9Pc.AiMJ` | func | `(i32 i32) -> ()` |
| 188 | `z9Pc.FW3d` | func | `(i32 i32) -> ()` |
| 189 | `z9Pc.VPNT` | func | `(i32) -> (i32)` |
| 190 | `z9Pc.SzI7` | func | `(i32) -> (i32)` |
| 191 | `z9Pc.qDTe` | func | `(i32) -> (i32)` |
| 192 | `z9Pc.b4VQ` | func | `(i32) -> (i32)` |
| 193 | `z9Pc.pGNa` | func | `(i32 i32 i32) -> ()` |
| 194 | `z9Pc.xVrN` | func | `(i32 i32 i32) -> ()` |
| 195 | `z9Pc.EZ4O` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `z9Pc.aI3N` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `z9Pc.mYfs` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `z9Pc.PWrn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `z9Pc.XwwW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `z9Pc.gB0B` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `z9Pc.BMvE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `z9Pc.hwNe` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `z9Pc.PBbi` | func | `(i32) -> (i32)` |
| 204 | `z9Pc.wGne` | func | `(i32) -> (i32)` |
| 205 | `z9Pc.gvWM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `z9Pc.rTGz` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `z9Pc.gA2f` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `z9Pc.jycv` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `z9Pc.JFvZ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `z9Pc.OYeR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `z9Pc.WeLq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `z9Pc.u8d2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `z9Pc.FlSw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `z9Pc.v9xd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `z9Pc.iPJJ` | func | `(i32 i32 i32) -> ()` |
| 216 | `z9Pc.VZoH` | func | `(i32 i32 i32) -> ()` |
| 217 | `z9Pc.FtVe` | func | `(i32 i32) -> ()` |
| 218 | `z9Pc.EMDx` | func | `(i32 i32) -> ()` |
| 219 | `z9Pc.RpGW` | func | `(i32 i32) -> ()` |
| 220 | `z9Pc.e8LD` | func | `(i32 i32) -> ()` |
| 221 | `z9Pc.AuDQ` | func | `(i32 i32) -> ()` |
| 222 | `z9Pc.KVpr` | func | `(i32 i32) -> ()` |
| 223 | `z9Pc.GAHm` | func | `(i32 f32 f32) -> ()` |
| 224 | `z9Pc.YKZg` | func | `(i32 f32 f32) -> ()` |
| 225 | `z9Pc.KZmz` | func | `(i32 i32) -> ()` |
| 226 | `z9Pc.VYpy` | func | `(i32 i32) -> ()` |
| 227 | `z9Pc.lZir` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `z9Pc.Cqqn` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `z9Pc.mpQE` | func | `(i32 i32 i32) -> ()` |
| 230 | `z9Pc.pTsx` | func | `(i32) -> (i32)` |
| 231 | `z9Pc.X68H` | func | `(i32) -> (i32)` |
| 232 | `z9Pc.oZo2` | func | `(i32 i32) -> ()` |
| 233 | `z9Pc.eIRF` | func | `(i32 i32) -> ()` |
| 234 | `z9Pc.X7IQ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `z9Pc.FhpM` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `z9Pc.IFrJ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `z9Pc.EXsg` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `z9Pc.IMhi` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `z9Pc.bhHv` | func | `(i32 i32 i32) -> ()` |
| 240 | `z9Pc.KLcs` | func | `(i32 i32 i32) -> ()` |
| 241 | `z9Pc.tmFM` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `z9Pc.cB4K` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `z9Pc.ZfrI` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `z9Pc.X14s` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `z9Pc.me2M` | func | `(i32) -> (i32)` |
| 246 | `z9Pc.hB3r` | func | `(i32) -> (i32)` |
| 247 | `z9Pc.R1Sc` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `z9Pc.gDuv` | func | `(i32 i32) -> ()` |
| 249 | `z9Pc.lzco` | func | `(i32 i32) -> ()` |
| 250 | `z9Pc.kYlX` | func | `(i32 i32) -> (i32)` |
| 251 | `z9Pc.gFow` | func | `(i32 i32) -> (i32)` |
| 252 | `z9Pc.u0QM` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `z9Pc.IP9r` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `z9Pc.mGFN` | func | `(i32 i32) -> ()` |
| 255 | `z9Pc.CadV` | func | `(i32 i32) -> ()` |
| 256 | `z9Pc.OxYi` | func | `(i32) -> (i32)` |
| 257 | `z9Pc.rn6B` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `z9Pc.LU2w` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `z9Pc.fjDu` | func | `(i32) -> ()` |
| 260 | `z9Pc.IzRE` | func | `(i32 i32) -> ()` |
| 261 | `z9Pc.tHhP` | func | `(i32 i32) -> ()` |
| 262 | `z9Pc.bjry` | func | `(i32 i32) -> ()` |
| 263 | `z9Pc.iStx` | func | `(i32 i32) -> ()` |
| 264 | `z9Pc.LI6r` | func | `(i32 i32) -> ()` |
| 265 | `z9Pc.QKJM` | func | `(i32 i32) -> ()` |
| 266 | `z9Pc.OHHs` | func | `(i32 i32) -> ()` |
| 267 | `z9Pc.srXn` | func | `(i32 i32) -> ()` |
| 268 | `z9Pc.Dzdm` | func | `(i32) -> (i32)` |
| 269 | `z9Pc.PJjn` | func | `(i32) -> (i32)` |
| 270 | `z9Pc.H7Rj` | func | `(i32) -> (i32)` |
| 271 | `z9Pc.sXoP` | func | `(i32) -> (i32)` |
| 272 | `z9Pc.MIDS` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `z9Pc.NuXI` | func | `(i32) -> ()` |
| 274 | `z9Pc.COWp` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `z9Pc.nYNg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `z9Pc.bAjP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `z9Pc.vnx3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `z9Pc.m5CY` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `z9Pc.nYyu` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `z9Pc.ujsd` | func | `(i32) -> (i32)` |
| 281 | `z9Pc.sU9k` | func | `(i32) -> (i32)` |
| 282 | `z9Pc.gR33` | func | `(i32) -> (i32)` |
| 283 | `z9Pc.Ggqx` | func | `(i32) -> (i32)` |
| 284 | `z9Pc.YiDW` | func | `(i32 i32) -> ()` |
| 285 | `z9Pc.HzoU` | func | `(i32) -> ()` |
| 286 | `z9Pc.KhUq` | func | `(i32 i32) -> ()` |
| 287 | `z9Pc.ZJnO` | func | `(i32) -> (i32)` |
| 288 | `z9Pc.Bkxo` | func | `(i32 i32) -> (i32)` |
| 289 | `z9Pc.dckL` | func | `(i32 i32) -> (i32)` |
| 290 | `z9Pc.D08E` | func | `(i32 i32) -> (i32)` |
| 291 | `z9Pc.S9fC` | func | `(f64) -> (i32)` |
| 292 | `z9Pc.KOdx` | func | `(i32 i32) -> (i32)` |
| 293 | `z9Pc.c0VJ` | func | `(i32 i32) -> (i32)` |
| 294 | `z9Pc.MPZG` | func | `(i32 i32) -> (i32)` |
| 295 | `z9Pc.k9bv` | func | `(i32 i32) -> (i32)` |
| 296 | `z9Pc.f8Sq` | func | `(i32 i32) -> (i32)` |
| 297 | `z9Pc.dfBa` | func | `(i32 i32) -> (i32)` |
| 298 | `z9Pc.y4D2` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `jSKa` | func | 1530 | `(i32 i32 i32) -> (i32)` |
| `Lklm` | func | 2970 | `(i32 i32) -> (i32)` |
| `yPgj` | func | 3020 | `(i32) -> (i32 i32)` |
| `KMhs` | func | 3008 | `(i32 i32) -> (i32 i32)` |
| `SpRl` | func | 2335 | `(i32 i32) -> (i32)` |
| `T56Q` | func | 2380 | `(i32 i32 i32 i32) -> (i32)` |
| `Y73R` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Oqr1` | func | 3022 | `(i32) -> (i32 i32)` |
| `uCIp` | func | 1336 | `(i32 i32 i32) -> (i32)` |
| `kjiz` | func | 567 | `(i32 i32 i32) -> (i32)` |
| `S9re` | func | 1891 | `(i32) -> ()` |
| `jhWx` | func | 2286 | `(i32 i32) -> ()` |
| `ZWn1` | func | 1892 | `(i32) -> ()` |
| `eqSR` | func | 810 | `(i32 i32) -> (i32)` |
| `mB2K` | func | 2975 | `(i32 i32 i32 i32) -> (i32)` |
| `bTEM` | func | 3035 | `() -> (i32 i32)` |
| `EyE6` | func | 1479 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `qfOL` | func | 1296 | `(i32 i32) -> (i32)` |
| `BRIZ` | func | 2498 | `(i32) -> (i32)` |
| `kSQw` | func | 1757 | `(i32 i32) -> (i32)` |
| `ZSeI` | func | 2491 | `(i32) -> (i32)` |
| `Dxh1` | func | 1215 | `(i32 i32 i32 i32) -> (i32)` |
| `ZmT2` | func | 1857 | `(i32 i32 f64 f64 f64) -> ()` |
| `N5K4` | func | 2472 | `(i32) -> (i32)` |
| `Wvs4` | func | 2796 | `(i32) -> (i32)` |
| `IhCb` | func | 1632 | `(i32 i32 i32 i32) -> (i32)` |
| `beWZ` | func | 2478 | `(i32) -> (i32)` |
| `B9f6` | func | 1442 | `(i32) -> (i32)` |
| `EIzx` | func | 2471 | `(i32) -> (i32)` |
| `KRd0` | func | 1951 | `(i32) -> (i32)` |
| `VXC7` | func | 2509 | `(i32) -> (i32)` |
| `qSvO` | func | 2029 | `(i32 f64 f64 f64) -> (i32)` |
| `ENFq` | func | 2764 | `(i32) -> (i32)` |
| `cdjl` | func | 2490 | `(i32 i32) -> ()` |
| `ECyO` | func | 1490 | `(i32 i32) -> (i32)` |
| `A95N` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `AAQc` | func | 1389 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `kU6C` | func | 2951 | `() -> ()` |
| `F4HK` | func | 3070 | `(i32 i32 i32) -> ()` |
| `sCVT` | func | 3061 | `(i32 i32 i32 i32) -> ()` |
| `LZ21` | func | 758 | `(i32 i32 i32) -> (i32)` |
| `MW9V` | func | 1390 | `(i32 f64 f64) -> (i32)` |
| `NWpZ` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `lje7` | func | 3178 | `(i32) -> ()` |
| `HmDp` | func | 2013 | `(i32 f64) -> (i32)` |
| `uZKY` | func | 2255 | `(i32 i32) -> ()` |
| `uZ6r` | func | 3036 | `() -> (i32 i32)` |
| `Bifo` | func | 1594 | `(i32 f64 f64 f64) -> (i32)` |
| `HGeR` | func | 3202 | `() -> (i32)` |
| `Bi71` | func | 1875 | `(i32 i32) -> (i32)` |
| `cYLf` | func | 2425 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `lzFx` | func | 1579 | `(i32 i32) -> (i32)` |
| `bNjQ` | func | 1289 | `(i32) -> (i32)` |
| `WzeQ` | func | 1503 | `(i32 i32) -> (i32)` |
| `twmL` | func | 1700 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `DTvD` | func | 2476 | `(i32) -> (i32)` |
| `s2fB` | func | 2488 | `(i32) -> (i32)` |
| `pwkj` | func | 1590 | `(i32 i32) -> ()` |
| `eQsA` | func | 3173 | `() -> (f64)` |
| `v2Nl` | func | 889 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `rriA` | func | 1723 | `(i32) -> (i32)` |
| `RBsT` | func | 3010 | `(i32 i32) -> (i32 i32)` |
| `K4cH` | func | 1987 | `(i32 i32) -> ()` |
| `MVro` | func | 2477 | `(i32) -> (i32)` |
| `g9uw` | func | 1551 | `(i32 i32 i32 i32) -> (i32)` |
| `d7qt` | func | 1461 | `(i32 i32 i32 i32) -> ()` |
| `Zmoe` | func | 3001 | `(i32 i32 i32) -> (i32 i32)` |
| `gQsx` | func | 2591 | `(i32 i32) -> ()` |
| `PHxq` | func | 1514 | `(i32 i32) -> (i32)` |
| `Foy7` | func | 2507 | `(i32) -> (i32)` |
| `pvrn` | func | 1439 | `() -> (i32)` |
| `sbAI` | func | 1934 | `(i32) -> (i32)` |
| `GHs8` | func | 2470 | `(i32) -> (i32)` |
| `jZE6` | func | 2256 | `(i32 f64) -> (i32)` |
| `hMnr` | func | 2982 | `(i32 i32) -> ()` |
| `BSBR` | func | 1882 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `PTWM` | func | 1515 | `(i32 i32) -> (i32)` |
| `WD7j` | global | 1 | `` |
| `gVoj` | func | 2368 | `(i32 i32) -> (i32)` |
| `KYhh` | func | 2499 | `(i32 i32) -> (i32)` |
| `a26p` | func | 1410 | `(i32 i32) -> (i32)` |
| `hLW3` | func | 705 | `(i32 i32) -> (i32)` |
| `NMOs` | global | 2 | `` |
| `lJhG` | func | 2508 | `(i32) -> (i32)` |
| `aSmq` | func | 1484 | `(i32) -> (i32)` |
| `po8l` | func | 3024 | `(i32) -> (i32 i32)` |
| `wL8b` | func | 1589 | `(i32 i32) -> ()` |
| `csSz` | func | 1221 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `YjFk` | func | 2469 | `(i32) -> (i32)` |
| `qOU4` | func | 3132 | `(i32) -> ()` |
| `LD2N` | func | 2046 | `(i32 i32) -> ()` |
| `j8c1` | func | 3000 | `(i32 i32 i32) -> (i32 i32)` |
| `Pv4T` | func | 2337 | `(i32 i32) -> (i32)` |
| `mhsc` | func | 3133 | `() -> ()` |
| `A7Z5` | func | 2474 | `(i32) -> (i32)` |
| `To8d` | func | 737 | `(i32) -> (i32)` |
| `km9T` | func | 3126 | `(i32 i32 i32) -> ()` |
| `ovF6` | func | 2409 | `(i32) -> (i32)` |
| `T0jO` | func | 3023 | `(i32) -> (i32 i32)` |
| `vzXZ` | func | 2473 | `(i32) -> (i32)` |
| `qpMO` | func | 2468 | `(i32) -> (f64)` |
| `uwSe` | func | 668 | `(i32 i32) -> (i32)` |
| `nVgX` | func | 3099 | `() -> (i32)` |
| `u5Qy` | func | 1816 | `() -> (i32)` |
| `d9FI` | func | 1745 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `slJI` | func | 1837 | `(i32 i32 i32 i32) -> (i32)` |
| `HPM1` | func | 3177 | `(i32) -> (i32)` |
| `LVNf` | func | 2489 | `(i32) -> (i32)` |
| `fE0W` | func | 2486 | `(i32 i32) -> ()` |
| `pL2q` | func | 2149 | `(i32 i32) -> (i32)` |
| `MSEE` | func | 890 | `(i32 i32) -> (i32)` |
| `MJVw` | func | 3006 | `(i32 i32) -> (i32 i32)` |
| `hmkD` | func | 1114 | `(i32 i32) -> (i32)` |
| `c00O` | func | 2201 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `bxCT` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vY03` | func | 3011 | `(i32 i32) -> (i32 i32)` |
| `CxxE` | func | 2829 | `(i32) -> (i32)` |
| `OJgy` | func | 2500 | `(i32 i32) -> (i32)` |
| `spmq` | func | 2546 | `(i32 i32) -> ()` |
| `memory` | memory | 0 | `` |
| `IfWo` | func | 2338 | `(i32 i32) -> (i32)` |
| `lWPx` | func | 2426 | `(i32) -> (i32)` |
| `jZZQ` | func | 3021 | `(i32) -> (i32 i32)` |
| `a2dG` | func | 1214 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `IkNd` | func | 2181 | `(i32 i32) -> (i32)` |
| `uDmS` | func | 3201 | `() -> (i32)` |
| `aWfb` | func | 2455 | `(i32) -> (i32)` |
| `oils` | func | 1435 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `t773` | func | 2336 | `(i32 i32) -> (i32)` |
| `aPkK` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Y39M` | func | 678 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `qSBx` | func | 3037 | `() -> (i32 i32)` |
| `roqi` | func | 2771 | `(i32) -> (i32)` |
| `fY8s` | func | 2558 | `() -> (i32)` |
| `Q3Ya` | func | 2807 | `(i32) -> ()` |
| `eXco` | func | 1517 | `(i32 f64) -> (f64)` |
| `xNhs` | func | 2069 | `(i32 i32) -> (i32)` |
| `QxIP` | func | 3012 | `(i32 i32) -> (i32 i32)` |
| `s1Pg` | func | 1321 | `(i32) -> ()` |
| `xZIH` | func | 2475 | `(i32) -> ()` |
| `cFdt` | func | 1264 | `(i32 i32 i32) -> (i32)` |
| `ILcO` | func | 3071 | `(i32 i32) -> ()` |
| `ETfc` | func | 1270 | `(i32 i32 i32) -> ()` |
| `ioPZ` | func | 1865 | `(i32 i32) -> ()` |
| `YiX0` | func | 1474 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `hqNq` | func | 2592 | `() -> (i32)` |
| `e71C` | func | 1115 | `(i32 i32) -> ()` |
| `trM9` | func | 1243 | `(i32 i32) -> (i32)` |
| `u3Ci` | func | 1483 | `(i32 i32 i32 i32) -> (i32)` |
| `sI2t` | func | 1822 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `IIla` | func | 2785 | `(i32) -> (i32)` |
| `HV9N` | func | 911 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `tuWE` | func | 2454 | `(i32 i32) -> ()` |
| `v1tY` | func | 922 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HfUg` | func | 1953 | `(i32 i32 i32 i32) -> ()` |
| `Avxj` | func | 3007 | `(i32 i32) -> (i32 i32)` |
| `ne8q` | func | 3009 | `(i32 i32) -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 753 · max 753
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2639720, `i32` = i32.const 2640292

## Functions

- 2,914 bodies · 4,043,172 code bytes · avg 1.4 KB
- instruction scan: 2,914 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 113 |
| <= 128 bytes | 258 |
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
| 3 | `(i32 i32) -> ()` | 125 | 48,862 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 64 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 196 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 225 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 721 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 769 | `(i32 i32) -> ()` | 138 | 42,799 | 20,185 | local.get×5260, i32.const×2330, local.tee×1194, i32.add×1063, local.set×1003 |
| 1576 | `(i32 i32) -> (i32)` | 180 | 54,760 | 19,855 | local.get×6591, i32.const×2625, i64.store×1913, i64.const×1077, i64.load×1056 |
| 1976 | `(i32 i32) -> ()` | 110 | 40,261 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2587 | `(i32 i32) -> ()` | 397 | 142,149 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2865 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2883 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 540,299 |
| `i32.const` | 226,342 |
| `local.tee` | 100,473 |
| `i32.load` | 94,772 |
| `local.set` | 94,115 |
| `i32.add` | 87,371 |
| `end` | 79,376 |
| `br_if` | 64,480 |
| `i32.store` | 46,860 |
| `block` | 37,302 |
| `i64.const` | 32,705 |
| `i64.store` | 31,828 |
| `if` | 30,350 |
| `call` | 29,521 |
| `i32.sub` | 24,726 |
| `i64.load` | 23,695 |
| `br` | 23,159 |
| `i32.eqz` | 19,593 |
| `select` | 16,929 |
| `i32.shl` | 16,490 |
| `i32.and` | 16,366 |
| `i32.ne` | 15,888 |
| `i32.load8_u` | 15,017 |
| `i32.eq` | 13,904 |
| `i32.store8` | 12,635 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,914/2,914 (degraded: 0)
