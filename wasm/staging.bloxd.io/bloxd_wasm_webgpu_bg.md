# WASM module: `bloxd_wasm_webgpu_bg`

> environment **staging.bloxd.io** · build `1yqdn.8419f1e1` · analyzed 2026-11-28T02:07:49+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgpu_bg.6553b0be0a0f65d95e34.wasm
> 5,238,928 bytes (5.0 MB) · sha256 `603e3bc645f5c3d0…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,162,719 → 5,238,928 bytes (+76,209)
- defined functions 2,969 → 3,025
- imported functions 393 → 394
- code bytes 4,073,529 → 4,142,840
- data bytes 1,042,710 → 1,049,293
- name-section module id `7b7013ff454843c8.12347` → `6491d4607a069046.12491`
- export signatures: +1 × `(i32) -> (i32 i32)`; +3 × `(i32) -> ()`; +1 × `(i32 i32) -> ()`; +1 × `(i32 i32 i32 i32) -> ()`; +1 × `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()`
- import signatures: +1 × `(i32) -> ()`
- export identifiers rotated by the obfuscator: 1/170 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `flag testalpha * baseColor.abaseColor.adiffuseBase.remissive`; `packLightLevels.rgb, packLightLevels.w, frame.uAmbientLightC`; `ue:keydownkeyupmousedownmouseuptouchstarttouchendMouse1Mouse`
- removed embedded strings: `flag testalpha * baseColor.abaseColor.abloxdSpGlintTier(v.vE`; `fn vs_mesh_0040d040073_l7(@location(0) position: vec3f, @loc`; `ue:keydownkeyupmousedownmouseuptouchstarttouchendotherMouse1`

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
| name-section module id | `6491d4607a069046.12491` |
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
| 0 | `HiKq.CgFp` | memory | `[128..14648]` |
| 0 | `HiKq.cxlK` | func | `(i32) -> (i32)` |
| 1 | `HiKq.KIsm` | func | `(i32) -> (f64)` |
| 2 | `HiKq.pmkX` | func | `() -> (i32)` |
| 3 | `HiKq.svPh` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `HiKq.tjjW` | func | `(i32) -> ()` |
| 5 | `HiKq.tud6` | func | `(i32 i32) -> (i32)` |
| 6 | `HiKq.YnXJ` | func | `(i32) -> (i32)` |
| 7 | `HiKq.EErt` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `HiKq.rflp` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `HiKq.xFqh` | func | `(i32) -> (i32)` |
| 10 | `HiKq.zE6w` | func | `(i32 i32) -> ()` |
| 11 | `HiKq.W9cE` | func | `(i32 i32) -> ()` |
| 12 | `HiKq.P0oz` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `HiKq.G6Fi` | func | `(i32 i32) -> (i32)` |
| 14 | `HiKq.L8RH` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `HiKq.Y0Y4` | func | `(i32) -> (i32)` |
| 16 | `HiKq.udfz` | func | `(i32 i32) -> (i32)` |
| 17 | `HiKq.opTM` | func | `(i32 i32) -> (i32)` |
| 18 | `HiKq.QTZd` | func | `(i32 i32) -> ()` |
| 19 | `HiKq.OQdO` | func | `(i32) -> (i32)` |
| 20 | `HiKq.iurG` | func | `(i32) -> (i32)` |
| 21 | `HiKq.R5gk` | func | `(i32 i32 i32) -> ()` |
| 22 | `HiKq.Nxat` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `HiKq.PoTo` | func | `(i32) -> (i32)` |
| 24 | `HiKq.jsbN` | func | `(i32) -> (i32)` |
| 25 | `HiKq.xs7I` | func | `(i32 i32) -> ()` |
| 26 | `HiKq.Bmiy` | func | `(i32 i32) -> (i32)` |
| 27 | `HiKq.Cz2y` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `HiKq.iPfp` | func | `(i32) -> (i32)` |
| 29 | `HiKq.pOWc` | func | `(i32) -> (i32)` |
| 30 | `HiKq.PtsM` | func | `(i32) -> (i32)` |
| 31 | `HiKq.xsFl` | func | `(i32) -> (i32)` |
| 32 | `HiKq.AIGN` | func | `(i32) -> (i32)` |
| 33 | `HiKq.LMvt` | func | `(i32 i32 i32) -> ()` |
| 34 | `HiKq.K1vM` | func | `(i32 i32) -> (i32)` |
| 35 | `HiKq.egRe` | func | `(i32) -> (i32)` |
| 36 | `HiKq.pCAo` | func | `(i32) -> ()` |
| 37 | `HiKq.qCTH` | func | `(i32) -> (i32)` |
| 38 | `HiKq.b5sR` | func | `(i32) -> (i32)` |
| 39 | `HiKq.DXq5` | func | `(i32) -> ()` |
| 40 | `HiKq.GV9t` | func | `(i32 i32) -> (i32)` |
| 41 | `HiKq.TnQx` | func | `(i32) -> ()` |
| 42 | `HiKq.Cnua` | func | `(i32 i32) -> ()` |
| 43 | `HiKq.QVKz` | func | `(i32 i32 i32) -> (i32)` |
| 44 | `HiKq.rrKB` | func | `(i32) -> ()` |
| 45 | `HiKq.EMyl` | func | `(i32) -> ()` |
| 46 | `HiKq.qYfi` | func | `() -> (i32)` |
| 47 | `HiKq.Qo0s` | func | `(i32 i32) -> (i32)` |
| 48 | `HiKq.DDHO` | func | `(i32 i32) -> (i32)` |
| 49 | `HiKq.PulT` | func | `(i32) -> (i32)` |
| 50 | `HiKq.LqPD` | func | `(i32) -> (i32)` |
| 51 | `HiKq.sm7M` | func | `(i32) -> (i32)` |
| 52 | `HiKq.h1xP` | func | `(i32 i32) -> ()` |
| 53 | `HiKq.P7gX` | func | `(i32) -> (i32)` |
| 54 | `HiKq.Eby3` | func | `(i32) -> ()` |
| 55 | `HiKq.OD1A` | func | `(i32 i32) -> (i32)` |
| 56 | `HiKq.CfHd` | func | `(i32 i32 i32) -> (i32)` |
| 57 | `HiKq.Jk6s` | func | `(i32) -> (i32)` |
| 58 | `HiKq.kChA` | func | `(i32 i32 i32) -> ()` |
| 59 | `HiKq.RnhJ` | func | `(i32 i32) -> ()` |
| 60 | `HiKq.rqcp` | func | `(i32) -> (i32)` |
| 61 | `HiKq.Rz58` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 62 | `HiKq.jAPZ` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 63 | `HiKq.guYa` | func | `(i32) -> ()` |
| 64 | `HiKq.nOik` | func | `(i32 i32 i32) -> ()` |
| 65 | `HiKq.RY0I` | func | `(i32 i32) -> ()` |
| 66 | `HiKq.HwVo` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 67 | `HiKq.MKeI` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `HiKq.a4Tj` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 69 | `HiKq.iQpB` | func | `(i32 i32 f64) -> ()` |
| 70 | `HiKq.Um5r` | func | `(i32) -> (i32)` |
| 71 | `HiKq.sljt` | func | `(i32 i32) -> ()` |
| 72 | `HiKq.vm5n` | func | `(i32 i32 i32) -> ()` |
| 73 | `HiKq.NERk` | func | `(i32 i32 i32 i32) -> ()` |
| 74 | `HiKq.IfUY` | func | `(i32) -> ()` |
| 75 | `HiKq.vC6b` | func | `(i32 i32 i32) -> ()` |
| 76 | `HiKq.fsgN` | func | `(i32 i32) -> ()` |
| 77 | `HiKq.bYNi` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 78 | `HiKq.MIri` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 79 | `HiKq.XRQB` | func | `(i32 i32 i32) -> ()` |
| 80 | `HiKq.k5in` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 81 | `HiKq.IDbl` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 82 | `HiKq.uffT` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 83 | `HiKq.g60w` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 84 | `HiKq.g45P` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `HiKq.QUfN` | func | `(i32 i32 i32) -> ()` |
| 86 | `HiKq.wt5Q` | func | `(i32 i32) -> (i32)` |
| 87 | `HiKq.olH3` | func | `(i32) -> (i32)` |
| 88 | `HiKq.TaNb` | func | `(i32) -> (i32)` |
| 89 | `HiKq.iO31` | func | `(i32) -> (i32)` |
| 90 | `HiKq.oeXX` | func | `(i32 i32) -> (i32)` |
| 91 | `HiKq.C1w6` | func | `(i32) -> ()` |
| 92 | `HiKq.UGyK` | func | `(i32) -> (i32)` |
| 93 | `HiKq.GJ0A` | func | `(i32 i32) -> (i32)` |
| 94 | `HiKq.OF7L` | func | `(i32 i32 i32) -> (i32)` |
| 95 | `HiKq.jhx0` | func | `(i32 i32 i32) -> ()` |
| 96 | `HiKq.iQgq` | func | `(i32 i32 i32 i32) -> (i32)` |
| 97 | `HiKq.oVU0` | func | `() -> (f64)` |
| 98 | `HiKq.YvAB` | func | `() -> (f64)` |
| 99 | `HiKq.fijM` | func | `(i32 i32) -> ()` |
| 100 | `HiKq.NV1F` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 101 | `HiKq.DY2s` | func | `(i32) -> (i32)` |
| 102 | `HiKq.j98N` | func | `(i32) -> (i32)` |
| 103 | `HiKq.zgA0` | func | `(i32) -> (i32)` |
| 104 | `HiKq.UmTm` | func | `() -> (i32)` |
| 105 | `HiKq.f72x` | func | `() -> (i32)` |
| 106 | `HiKq.RHEV` | func | `() -> (i32)` |
| 107 | `HiKq.ooxB` | func | `() -> (i32)` |
| 108 | `HiKq.QyRn` | func | `(i32 i32) -> (i32)` |
| 109 | `HiKq.XVPT` | func | `(i32) -> ()` |
| 110 | `HiKq.Vgq5` | func | `(i32 i32) -> (i32)` |
| 111 | `HiKq.Cj3Z` | func | `(i32) -> (i32)` |
| 112 | `HiKq.TVf3` | func | `() -> (f64)` |
| 113 | `HiKq.ZQHJ` | func | `(i32) -> (i32)` |
| 114 | `HiKq.KC3Q` | func | `(i32 i32) -> ()` |
| 115 | `HiKq.hXwN` | func | `(i32 i32) -> ()` |
| 116 | `HiKq.Wlii` | func | `(i32 i32) -> ()` |
| 117 | `HiKq.tRg9` | func | `(i32 f32) -> ()` |
| 118 | `HiKq.NBYg` | func | `(i32 f32) -> ()` |
| 119 | `HiKq.moDO` | func | `(i32 i32) -> ()` |
| 120 | `HiKq.n7Wi` | func | `(i32 i32) -> ()` |
| 121 | `HiKq.KHFc` | func | `(i32 i32) -> ()` |
| 122 | `HiKq.FjzY` | func | `(i32 i32) -> ()` |
| 123 | `HiKq.NNWn` | func | `(i32 i32 i32) -> ()` |
| 124 | `HiKq.OJ6J` | func | `(i32 i32) -> (i32)` |
| 125 | `HiKq.DgNY` | func | `(i32 i32) -> ()` |
| 126 | `HiKq.KOe8` | func | `(i32 i32) -> ()` |
| 127 | `HiKq.D7M6` | func | `(i32 i32) -> ()` |
| 128 | `HiKq.q7Bl` | func | `(i32 i32) -> ()` |
| 129 | `HiKq.LLMd` | func | `(i32 f64) -> ()` |
| 130 | `HiKq.aFor` | func | `(i32 f64) -> ()` |
| 131 | `HiKq.TdW2` | func | `(i32 i32) -> ()` |
| 132 | `HiKq.oe9d` | func | `(i32 i32 i32) -> ()` |
| 133 | `HiKq.lNP3` | func | `(i32 i32) -> ()` |
| 134 | `HiKq.HTbu` | func | `(i32 i32) -> (i32)` |
| 135 | `HiKq.z3AQ` | func | `(i32 i32 i32) -> ()` |
| 136 | `HiKq.lU0u` | func | `(i32 i32 i32) -> ()` |
| 137 | `HiKq.JcAf` | func | `(i32 i32) -> (i32)` |
| 138 | `HiKq.RFAr` | func | `(i32 i32) -> (i32)` |
| 139 | `HiKq.AK8P` | func | `(i32 i32 i32) -> ()` |
| 140 | `HiKq.Noub` | func | `(i32 i32 i32) -> ()` |
| 141 | `HiKq.QTIY` | func | `(i32 i32) -> (i32)` |
| 142 | `HiKq.Tc17` | func | `(i32 i32) -> ()` |
| 143 | `HiKq.vFuP` | func | `(i32 i32) -> ()` |
| 144 | `HiKq.Ml1Y` | func | `(i32 i32) -> ()` |
| 145 | `HiKq.lzDv` | func | `(i32 i32) -> ()` |
| 146 | `HiKq.WoRP` | func | `(i32 i32) -> ()` |
| 147 | `HiKq.c74F` | func | `(i32 i32) -> ()` |
| 148 | `HiKq.ro0v` | func | `(i32 i32) -> ()` |
| 149 | `HiKq.D9si` | func | `(i32 f64) -> ()` |
| 150 | `HiKq.OGjx` | func | `(i32 i32) -> ()` |
| 151 | `HiKq.VLcN` | func | `(i32 i32) -> ()` |
| 152 | `HiKq.O95H` | func | `(i32 i32) -> ()` |
| 153 | `HiKq.VAOV` | func | `(i32 i32) -> ()` |
| 154 | `HiKq.WjcS` | func | `(i32 i32) -> ()` |
| 155 | `HiKq.GEoh` | func | `(i32 i32) -> ()` |
| 156 | `HiKq.ldnW` | func | `(i32 i32) -> ()` |
| 157 | `HiKq.ukb1` | func | `(i32 i32) -> ()` |
| 158 | `HiKq.YBNz` | func | `(i32 i32) -> ()` |
| 159 | `HiKq.Kmlz` | func | `(i32 i32 i32) -> ()` |
| 160 | `HiKq.Y3sW` | func | `(i32 i32 i32) -> ()` |
| 161 | `HiKq.F3oT` | func | `(i32 i32) -> (i32)` |
| 162 | `HiKq.qiOS` | func | `(i32 i32) -> (i32)` |
| 163 | `HiKq.GavA` | func | `(i32 i32) -> ()` |
| 164 | `HiKq.bbjr` | func | `(i32 i32) -> ()` |
| 165 | `HiKq.anhP` | func | `(i32 f64) -> ()` |
| 166 | `HiKq.ph1O` | func | `(i32 i32) -> ()` |
| 167 | `HiKq.AnCZ` | func | `(i32 i32) -> ()` |
| 168 | `HiKq.epUO` | func | `(i32 i32) -> ()` |
| 169 | `HiKq.as4X` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 170 | `HiKq.GhBi` | func | `(i32 f64) -> ()` |
| 171 | `HiKq.fku8` | func | `(i32 f64) -> ()` |
| 172 | `HiKq.vOsh` | func | `(i32 f64) -> ()` |
| 173 | `HiKq.jZT4` | func | `(i32 f64) -> ()` |
| 174 | `HiKq.YBwW` | func | `(i32 i32) -> ()` |
| 175 | `HiKq.bnBV` | func | `(i32 i32) -> ()` |
| 176 | `HiKq.J7EJ` | func | `(i32 i32) -> ()` |
| 177 | `HiKq.TFO4` | func | `(i32 i32) -> ()` |
| 178 | `HiKq.ZYc9` | func | `(i32 i32) -> ()` |
| 179 | `HiKq.ysKN` | func | `(i32 i32 i32) -> ()` |
| 180 | `HiKq.F1z2` | func | `(i32 i32) -> ()` |
| 181 | `HiKq.ytSZ` | func | `(i32 f32) -> ()` |
| 182 | `HiKq.FjTt` | func | `(i32 i32) -> ()` |
| 183 | `HiKq.Xwjl` | func | `(i32 i32) -> ()` |
| 184 | `HiKq.lffL` | func | `(i32 i32) -> ()` |
| 185 | `HiKq.YpKh` | func | `(i32 i32) -> ()` |
| 186 | `HiKq.y4Dt` | func | `(i32 i32) -> ()` |
| 187 | `HiKq.EEGo` | func | `(i32 i32) -> ()` |
| 188 | `HiKq.Nrct` | func | `(i32 i32) -> ()` |
| 189 | `HiKq.NTKr` | func | `(i32 i32) -> ()` |
| 190 | `HiKq.Pzga` | func | `(i32 i32) -> ()` |
| 191 | `HiKq.ITWZ` | func | `(i32 i32) -> ()` |
| 192 | `HiKq.v59t` | func | `(i32 i32) -> ()` |
| 193 | `HiKq.i1Qt` | func | `(i32 i32) -> ()` |
| 194 | `HiKq.PKIL` | func | `(i32 i32) -> (i32)` |
| 195 | `HiKq.z51u` | func | `(i32 i32 i32 i32) -> ()` |
| 196 | `HiKq.I97j` | func | `(i32 i32) -> ()` |
| 197 | `HiKq.qvZX` | func | `(i32 i32 i32) -> ()` |
| 198 | `HiKq.vR8I` | func | `(i32 i32) -> (i32)` |
| 199 | `HiKq.kF8g` | func | `(i32) -> (i32)` |
| 200 | `HiKq.z0WM` | func | `(i32 i32) -> ()` |
| 201 | `HiKq.tIlU` | func | `(i32 i32) -> ()` |
| 202 | `HiKq.OSvW` | func | `(i32 i32) -> ()` |
| 203 | `HiKq.iV1F` | func | `(i32 i32) -> ()` |
| 204 | `HiKq.Q9GZ` | func | `(i32 i32) -> ()` |
| 205 | `HiKq.oTMa` | func | `(i32 i32) -> ()` |
| 206 | `HiKq.q9iR` | func | `(i32 i32) -> ()` |
| 207 | `HiKq.sNhq` | func | `(i32 i32) -> ()` |
| 208 | `HiKq.Kwmo` | func | `(i32) -> (i32)` |
| 209 | `HiKq.IM42` | func | `(i32 i32 i32) -> ()` |
| 210 | `HiKq.xnxH` | func | `(i32 i32) -> ()` |
| 211 | `HiKq.CQN6` | func | `(i32 i32 i32 i32) -> ()` |
| 212 | `HiKq.OiUZ` | func | `(i32 i32) -> ()` |
| 213 | `HiKq.J08x` | func | `(i32) -> ()` |
| 214 | `HiKq.DefD` | func | `(i32 i32) -> ()` |
| 215 | `HiKq.Zs2r` | func | `(i32) -> (i32)` |
| 216 | `HiKq.X5c2` | func | `(i32 i32 i32) -> ()` |
| 217 | `HiKq.ELfv` | func | `(i32 i32) -> ()` |
| 218 | `HiKq.DNrV` | func | `(i32 i32) -> ()` |
| 219 | `HiKq.aW85` | func | `(i32 i32) -> ()` |
| 220 | `HiKq.aggb` | func | `(i32 i32) -> ()` |
| 221 | `HiKq.pjnU` | func | `(i32 i32) -> (i32)` |
| 222 | `HiKq.o8ha` | func | `(i32 i32) -> ()` |
| 223 | `HiKq.sj8j` | func | `(i32 i32) -> ()` |
| 224 | `HiKq.lyTb` | func | `(i32 i32) -> ()` |
| 225 | `HiKq.goId` | func | `(i32 i32) -> ()` |
| 226 | `HiKq.JOsU` | func | `(i32 i32) -> ()` |
| 227 | `HiKq.bbA9` | func | `(i32 i32) -> ()` |
| 228 | `HiKq.a4NB` | func | `(i32 i32) -> ()` |
| 229 | `HiKq.HNP0` | func | `(i32 i32 f64 f64) -> (i32)` |
| 230 | `HiKq.w8GI` | func | `(i32) -> (i32)` |
| 231 | `HiKq.x5e8` | func | `(i32) -> ()` |
| 232 | `HiKq.NzIA` | func | `(i32 f64) -> ()` |
| 233 | `HiKq.fvyb` | func | `(i32 i32) -> ()` |
| 234 | `HiKq.tE1W` | func | `(i32 i32) -> ()` |
| 235 | `HiKq.sqBK` | func | `(i32 i32 i32) -> ()` |
| 236 | `HiKq.SQDm` | func | `(i32 i32) -> (i32)` |
| 237 | `HiKq.emRb` | func | `(i32 i32) -> ()` |
| 238 | `HiKq.T2JV` | func | `(i32 i32) -> ()` |
| 239 | `HiKq.MXgE` | func | `(i32 i32) -> ()` |
| 240 | `HiKq.FOjN` | func | `(i32 i32 i32) -> ()` |
| 241 | `HiKq.tCh4` | func | `(i32 i32) -> ()` |
| 242 | `HiKq.O5ko` | func | `(i32 i32) -> ()` |
| 243 | `HiKq.pYih` | func | `(i32 i32) -> ()` |
| 244 | `HiKq.jbGO` | func | `(i32 i32 i32) -> ()` |
| 245 | `HiKq.ollo` | func | `(i32 i32) -> ()` |
| 246 | `HiKq.FMf4` | func | `(i32 i32) -> ()` |
| 247 | `HiKq.w5qZ` | func | `(i32 i32 i32) -> ()` |
| 248 | `HiKq.EXHY` | func | `(i32 i32) -> (i32)` |
| 249 | `HiKq.VUt9` | func | `(i32 i32) -> ()` |
| 250 | `HiKq.mu57` | func | `(i32 i32 i32) -> ()` |
| 251 | `HiKq.KOdv` | func | `(i32 i32) -> ()` |
| 252 | `HiKq.l4HS` | func | `(i32 f64) -> ()` |
| 253 | `HiKq.sqUh` | func | `(i32 i32) -> ()` |
| 254 | `HiKq.yrgu` | func | `(i32 f64) -> ()` |
| 255 | `HiKq.gwP7` | func | `(i32 i32 i32) -> ()` |
| 256 | `HiKq.cS9i` | func | `(i32 i32) -> ()` |
| 257 | `HiKq.bq75` | func | `(i32 i32 i32) -> ()` |
| 258 | `HiKq.hoLG` | func | `(i32 i32) -> ()` |
| 259 | `HiKq.JMko` | func | `(i32 i32) -> ()` |
| 260 | `HiKq.gqyh` | func | `(i32 i32) -> ()` |
| 261 | `HiKq.mLEK` | func | `(i32 i32 i32) -> ()` |
| 262 | `HiKq.cr8F` | func | `(i32 i32) -> ()` |
| 263 | `HiKq.SoG0` | func | `(i32 i32) -> ()` |
| 264 | `HiKq.Szq4` | func | `(i32 i32) -> ()` |
| 265 | `HiKq.stKF` | func | `(i32 i32) -> ()` |
| 266 | `HiKq.oYKJ` | func | `(i32 f32) -> ()` |
| 267 | `HiKq.b2AZ` | func | `(i32 f32) -> ()` |
| 268 | `HiKq.Csct` | func | `(i32 i32) -> ()` |
| 269 | `HiKq.nCqd` | func | `(i32 i32) -> ()` |
| 270 | `HiKq.iYE9` | func | `(i32 i32) -> ()` |
| 271 | `HiKq.tBb7` | func | `(i32 i32) -> ()` |
| 272 | `HiKq.gwtH` | func | `(i32 i32) -> ()` |
| 273 | `HiKq.DfOt` | func | `(i32 i32) -> ()` |
| 274 | `HiKq.Bxcg` | func | `(i32 i32) -> ()` |
| 275 | `HiKq.bCft` | func | `(i32 i32) -> ()` |
| 276 | `HiKq.gjcP` | func | `(i32 i32) -> ()` |
| 277 | `HiKq.sBWt` | func | `(i32 i32) -> ()` |
| 278 | `HiKq.FGgh` | func | `(i32 i32) -> ()` |
| 279 | `HiKq.G01p` | func | `(i32 i32) -> ()` |
| 280 | `HiKq.Baui` | func | `(i32 i32) -> ()` |
| 281 | `HiKq.TaHb` | func | `(i32 i32) -> ()` |
| 282 | `HiKq.jqBc` | func | `(i32 i32) -> ()` |
| 283 | `HiKq.Gcr1` | func | `(i32 i32) -> ()` |
| 284 | `HiKq.vZBy` | func | `(i32 i32) -> ()` |
| 285 | `HiKq.VW7T` | func | `(i32 i32) -> ()` |
| 286 | `HiKq.qbhO` | func | `(i32 i32 i32) -> ()` |
| 287 | `HiKq.Z49H` | func | `(i32 i32 i32) -> ()` |
| 288 | `HiKq.jJJ0` | func | `(i32 i32) -> ()` |
| 289 | `HiKq.qLOQ` | func | `(i32 i32) -> ()` |
| 290 | `HiKq.rTwo` | func | `(i32 i32) -> ()` |
| 291 | `HiKq.VDEm` | func | `(i32 i32) -> ()` |
| 292 | `HiKq.M9dJ` | func | `(i32 i32) -> ()` |
| 293 | `HiKq.RGx8` | func | `(i32 i32) -> ()` |
| 294 | `HiKq.rwkI` | func | `(i32 i32) -> ()` |
| 295 | `HiKq.knFB` | func | `(i32 i32) -> ()` |
| 296 | `HiKq.gjSJ` | func | `(i32 i32) -> ()` |
| 297 | `HiKq.xadg` | func | `(i32 i32) -> ()` |
| 298 | `HiKq.ABi7` | func | `(i32 i32) -> ()` |
| 299 | `HiKq.YIs1` | func | `(i32 i32) -> (i32)` |
| 300 | `HiKq.EP9H` | func | `(i32 i32) -> ()` |
| 301 | `HiKq.BStU` | func | `(i32 i32 i32) -> ()` |
| 302 | `HiKq.eras` | func | `(i32 i32) -> ()` |
| 303 | `HiKq.iNAp` | func | `(i32 i32) -> ()` |
| 304 | `HiKq.AhhT` | func | `(i32 i32) -> ()` |
| 305 | `HiKq.Zh4p` | func | `(i32 i32 i32) -> ()` |
| 306 | `HiKq.KDBh` | func | `(i32 i32) -> (i32)` |
| 307 | `HiKq.SLL3` | func | `(i32 i32 i32) -> ()` |
| 308 | `HiKq.ck9i` | func | `(i32 i32 i32) -> ()` |
| 309 | `HiKq.CKOk` | func | `(i32 i32) -> ()` |
| 310 | `HiKq.ydSJ` | func | `(i32 i32) -> ()` |
| 311 | `HiKq.udU3` | func | `(i32 i32) -> ()` |
| 312 | `HiKq.VrhO` | func | `(i32 i32) -> ()` |
| 313 | `HiKq.Qot3` | func | `(i32 i32) -> (i32)` |
| 314 | `HiKq.j7eA` | func | `(i32) -> (i32)` |
| 315 | `HiKq.zLJk` | func | `(i32) -> (i32)` |
| 316 | `HiKq.eSLe` | func | `(i32) -> (i32)` |
| 317 | `HiKq.hEbe` | func | `(i32) -> (i32)` |
| 318 | `HiKq.TSzE` | func | `(i32) -> (i32)` |
| 319 | `HiKq.wZLw` | func | `(i32) -> (i32)` |
| 320 | `HiKq.N7Z3` | func | `(i32) -> (i32)` |
| 321 | `HiKq.SpyY` | func | `(i32) -> (i32)` |
| 322 | `HiKq.yGI9` | func | `(i32) -> (i32)` |
| 323 | `HiKq.DcRm` | func | `(i32) -> (i32)` |
| 324 | `HiKq.v36m` | func | `(i32) -> (i32)` |
| 325 | `HiKq.JzJz` | func | `(i32) -> (i32)` |
| 326 | `HiKq.CDBP` | func | `(i32) -> (i32)` |
| 327 | `HiKq.OFfk` | func | `(i32) -> (i32)` |
| 328 | `HiKq.XHcf` | func | `(i32) -> (f64)` |
| 329 | `HiKq.frPW` | func | `(i32) -> (f64)` |
| 330 | `HiKq.qDdJ` | func | `(i32) -> (i32)` |
| 331 | `HiKq.zB9Z` | func | `(i32) -> (f64)` |
| 332 | `HiKq.IYoz` | func | `(i32) -> (i32)` |
| 333 | `HiKq.TNZ0` | func | `(i32) -> (i32)` |
| 334 | `HiKq.dFfs` | func | `(i32) -> (i32)` |
| 335 | `HiKq.UTPu` | func | `(i32) -> (i32)` |
| 336 | `HiKq.XaGr` | func | `(i32) -> (i32)` |
| 337 | `HiKq.fW06` | func | `(i32) -> (i32)` |
| 338 | `HiKq.nJyT` | func | `(i32) -> (i32)` |
| 339 | `HiKq.Xs46` | func | `(i32) -> (i32)` |
| 340 | `HiKq.GHCw` | func | `(i32) -> (i32)` |
| 341 | `HiKq.mWA3` | func | `(i32) -> (i32)` |
| 342 | `HiKq.PUHH` | func | `(i32) -> (i32)` |
| 343 | `HiKq.cx55` | func | `(i32) -> (i32)` |
| 344 | `HiKq.RzEj` | func | `(i32) -> (i32)` |
| 345 | `HiKq.dFJ5` | func | `(i32 i32 i32) -> (i32)` |
| 346 | `HiKq.CZIa` | func | `() -> (i32)` |
| 347 | `HiKq.lChC` | func | `(i32 i32) -> ()` |
| 348 | `HiKq.GMcD` | func | `(i32 i32 i32) -> ()` |
| 349 | `HiKq.p94L` | func | `(i32 i32 i32) -> ()` |
| 350 | `HiKq.RIso` | func | `(i32 i32) -> (i32)` |
| 351 | `HiKq.QENf` | func | `(i32) -> (i32)` |
| 352 | `HiKq.piEo` | func | `(i32 i32 i32) -> (i32)` |
| 353 | `HiKq.igkM` | func | `(i32) -> ()` |
| 354 | `HiKq.SxO2` | func | `(i32) -> (i32)` |
| 355 | `HiKq.NqO4` | func | `(i32 i32) -> ()` |
| 356 | `HiKq.W6fa` | func | `(i32) -> (i32)` |
| 357 | `HiKq.gsyQ` | func | `(i32) -> (i32)` |
| 358 | `HiKq.SD6b` | func | `(i32) -> (i32)` |
| 359 | `HiKq.wfNs` | func | `(i32) -> (i32)` |
| 360 | `HiKq.hiBW` | func | `(i32) -> (i32)` |
| 361 | `HiKq.g3AJ` | func | `(i32 i32) -> ()` |
| 362 | `HiKq.c9vE` | func | `(i32 i32) -> ()` |
| 363 | `HiKq.ZZdN` | func | `(i32 i32) -> ()` |
| 364 | `HiKq.MOTt` | func | `(i32 i32) -> ()` |
| 365 | `HiKq.V8bQ` | func | `(i32 i32) -> ()` |
| 366 | `HiKq.mN5U` | func | `(i32 i32) -> ()` |
| 367 | `HiKq.S3yG` | func | `(i32 i32) -> ()` |
| 368 | `HiKq.hCBh` | func | `(i32 i32 i32) -> ()` |
| 369 | `HiKq.luVu` | func | `(i32 i32) -> ()` |
| 370 | `HiKq.OBxe` | func | `(i32 i32) -> (i32)` |
| 371 | `HiKq.KKvl` | func | `(i32) -> (i32)` |
| 372 | `HiKq.DxYg` | func | `(i32) -> (i32)` |
| 373 | `HiKq.j215` | func | `(i32 i32) -> ()` |
| 374 | `HiKq.GgSi` | func | `(i32) -> (i32)` |
| 375 | `HiKq.R5KF` | func | `(i32 f64 f64) -> (i32)` |
| 376 | `HiKq.OuWB` | func | `(i32 i32 i32) -> (i32)` |
| 377 | `HiKq.TUFX` | func | `(i32 i32) -> ()` |
| 378 | `HiKq.Fpor` | func | `(i32) -> (i32)` |
| 379 | `HiKq.VUfb` | func | `(i32) -> (i32)` |
| 380 | `HiKq.vXYc` | func | `(i32) -> (i32)` |
| 381 | `HiKq.vqWz` | func | `(i32) -> (i32)` |
| 382 | `HiKq.rPyh` | func | `(i32) -> (i32)` |
| 383 | `HiKq.qPSp` | func | `(i32) -> (i32)` |
| 384 | `HiKq.CEsn` | func | `(i32 i32) -> ()` |
| 385 | `HiKq.Damx` | func | `(i32 i32) -> (i32)` |
| 386 | `HiKq.NLRC` | func | `(i32 i32) -> (i32)` |
| 387 | `HiKq.Two1` | func | `(i32 i32) -> (i32)` |
| 388 | `HiKq.lUcr` | func | `(i32 i32) -> (i32)` |
| 389 | `HiKq.JLmF` | func | `(i32 i32) -> (i32)` |
| 390 | `HiKq.YaYA` | func | `(i32 i32) -> (i32)` |
| 391 | `HiKq.wIRA` | func | `(f64) -> (i32)` |
| 392 | `HiKq.s1gH` | func | `(i32 i32) -> (i32)` |
| 393 | `HiKq.EfB5` | func | `(i32 i32) -> (i32)` |

## Exports

170 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `l0Cl` | func | 2001 | `(i32 i32 f64 f64 f64) -> ()` |
| `igrR` | func | 2637 | `(i32) -> (i32)` |
| `dYlb` | func | 2652 | `(i32) -> (i32)` |
| `QYO5` | func | 2660 | `(i32) -> (i32)` |
| `Tjzv` | func | 2669 | `(i32) -> (i32)` |
| `wVtc` | func | 3199 | `(i32 i32) -> (i32 i32)` |
| `VeTf` | func | 671 | `(i32 i32 i32) -> (i32)` |
| `LOgy` | func | 2079 | `(i32) -> (i32)` |
| `PXWp` | func | 3212 | `(i32) -> (i32 i32)` |
| `Xnx6` | func | 862 | `(i32 i32 i32) -> (i32)` |
| `UBpt` | func | 1716 | `(i32 i32) -> (i32)` |
| `iw9s` | func | 3167 | `(i32 i32 i32 i32) -> (i32)` |
| `h2FG` | func | 2177 | `(i32 f64 f64 f64) -> (i32)` |
| `OLvd` | func | 2735 | `(i32) -> ()` |
| `x163` | func | 3292 | `() -> (i32)` |
| `x9KZ` | func | 2404 | `(i32 i32) -> ()` |
| `JXUC` | func | 1438 | `(i32) -> ()` |
| `WCtE` | func | 779 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Px3N` | func | 2432 | `(i32 i32) -> ()` |
| `VBqK` | func | 2662 | `(i32 i32) -> (i32)` |
| `kDrb` | func | 951 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `LuZ8` | func | 1022 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Jm7X` | func | 3140 | `() -> ()` |
| `Hvkb` | func | 1731 | `(i32 f64 f64 f64) -> (i32)` |
| `zXcF` | func | 2565 | `(i32) -> (i32)` |
| `APAX` | func | 2633 | `(i32) -> (i32)` |
| `eyDL` | func | 3406 | `() -> (i32)` |
| `IQd8` | func | 3401 | `(f64) -> (f64)` |
| `no6m` | func | 2538 | `(i32 i32 i32 i32) -> (i32)` |
| `spkx` | func | 1455 | `(i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `uZqD` | func | 3229 | `() -> (i32 i32)` |
| `L4nr` | func | 2097 | `(i32) -> (i32)` |
| `Jcjt` | func | 768 | `(i32 i32) -> (i32)` |
| `vCuJ` | func | 988 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `IbvQ` | func | 1288 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `oNOd` | func | 1532 | `(i32 i32) -> (i32)` |
| `vmKM` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `nf9B` | func | 989 | `(i32 i32) -> (i32)` |
| `IgNn` | func | 2160 | `(i32 f64) -> (i32)` |
| `qqhO` | func | 3228 | `() -> (i32 i32)` |
| `vyV8` | func | 2638 | `(i32) -> (i32)` |
| `Bg4M` | func | 1413 | `(i32 i32) -> (i32)` |
| `kLPB` | func | 2942 | `(i32) -> (i32)` |
| `aD6a` | func | 3405 | `() -> (i32)` |
| `RQNp` | func | 1566 | `() -> (i32)` |
| `BmP6` | func | 1330 | `(i32 i32 i32 i32) -> (i32)` |
| `efWp` | func | 2488 | `(i32 i32) -> (i32)` |
| `rkLS` | func | 2670 | `(i32) -> (i32)` |
| `YU0w` | func | 2331 | `(i32 i32) -> (i32)` |
| `dOjI` | func | 3201 | `(i32 i32) -> (i32 i32)` |
| `glzO` | func | 1962 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `Cd4U` | func | 1379 | `(i32 i32 i32) -> (i32)` |
| `TOnP` | func | 1230 | `(i32 i32) -> ()` |
| `g3zi` | func | 3322 | `(i32 i32 i32) -> ()` |
| `foVb` | func | 2653 | `(i32 i32) -> ()` |
| `LtIT` | func | 2630 | `(i32) -> (i32)` |
| `hf02` | func | 2465 | `(i32 i32 i32 i32) -> ()` |
| `EcTX` | func | 3333 | `() -> ()` |
| `zYCP` | func | 2822 | `(i32 i32) -> ()` |
| `v0Xo` | func | 2671 | `(i32) -> (i32)` |
| `BnHj` | func | 1360 | `(i32 i32) -> (i32)` |
| `fNt6` | func | 3265 | `(i32 i32 i32) -> ()` |
| `D6BG` | func | 2647 | `(i32 i32) -> ()` |
| `dQJP` | func | 1655 | `(i32 f64) -> (f64)` |
| `BAXv` | func | 1833 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `zNn0` | func | 3202 | `(i32 i32) -> (i32 i32)` |
| `EqdF` | func | 1653 | `(i32 i32) -> (i32)` |
| `w3qI` | func | 2628 | `(i32) -> (f64)` |
| `hFdD` | func | 2654 | `(i32) -> (i32)` |
| `fFCJ` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `jXZg` | func | 1405 | `(i32) -> (i32)` |
| `Ch9Q` | func | 1623 | `(i32 i32) -> (i32)` |
| `lbRe` | func | 1507 | `(i32 f64 f64) -> (i32)` |
| `ntJ1` | func | 845 | `(i32) -> (i32)` |
| `FVHw` | func | 1508 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `dAzb` | func | 2133 | `(i32 i32) -> ()` |
| `yLxa` | func | 3204 | `(i32 i32) -> (i32 i32)` |
| `nNt3` | func | 1329 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `buxP` | func | 2719 | `(i32) -> ()` |
| `MM4C` | func | 1652 | `(i32 i32) -> (i32)` |
| `wozO` | func | 3190 | `(i32 i32 i32) -> (i32 i32)` |
| `SenL` | func | 2487 | `(i32 i32) -> (i32)` |
| `CQz6` | func | 2194 | `(i32 i32) -> ()` |
| `JLp0` | func | 2720 | `() -> (i32)` |
| `kxqo` | func | 809 | `(i32 i32) -> (i32)` |
| `pP0G` | func | 3377 | `() -> (f64)` |
| `IrLr` | global | 1 | `` |
| `rq5W` | func | 2634 | `(i32) -> (i32)` |
| `tN8x` | func | 1229 | `(i32 i32) -> (i32)` |
| `nLaS` | func | 1685 | `(i32 i32 i32 i32) -> (i32)` |
| `bZpr` | func | 1665 | `(i32 i32 i32) -> (i32)` |
| `PuOF` | func | 3382 | `(i32) -> ()` |
| `YXTd` | func | 2636 | `(i32) -> (i32)` |
| `tIrE` | func | 2977 | `(i32) -> (i32)` |
| `Kbja` | func | 2353 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `mMAa` | func | 1795 | `(i32) -> ()` |
| `qDUI` | func | 2218 | `(i32 i32) -> (i32)` |
| `wqDR` | func | 1442 | `(i32 i32) -> (i32)` |
| `nday` | func | 1856 | `(i32) -> (i32)` |
| `lIyu` | func | 3381 | `(i32) -> (i32)` |
| `opIm` | func | 1569 | `(i32) -> (i32)` |
| `wccA` | func | 2966 | `(i32) -> (i32)` |
| `ePvq` | func | 2700 | `(i32 i32) -> ()` |
| `QPE1` | func | 713 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `AJZZ` | func | 1506 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `RD3i` | func | 785 | `(i32 i32) -> (i32)` |
| `uMox` | func | 2292 | `(i32 i32) -> (i32)` |
| `WH4F` | func | 3263 | `(i32 i32 i32) -> (i32)` |
| `mjC4` | func | 3416 | `(i32) -> ()` |
| `giiJ` | func | 1955 | `() -> (i32)` |
| `NBbf` | func | 1614 | `(i32 i32 i32 i32) -> (i32)` |
| `Rac7` | func | 3230 | `() -> (i32 i32)` |
| `sVdW` | func | 1559 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `W39N` | func | 1608 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NMPK` | func | 1893 | `(i32 i32) -> (i32)` |
| `Uwi3` | func | 1589 | `(i32 i32 i32 i32) -> ()` |
| `l7JT` | func | 3160 | `(i32 i32) -> (i32)` |
| `fQtv` | func | 2629 | `(i32) -> (i32)` |
| `qGgP` | func | 2661 | `(i32 i32) -> (i32)` |
| `HjKK` | func | 3215 | `(i32) -> (i32 i32)` |
| `sfF8` | func | 3213 | `(i32) -> (i32 i32)` |
| `U04s` | func | 2025 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `Ld8P` | func | 1978 | `(i32 i32 i32 i32) -> (i32)` |
| `IwzV` | func | 1636 | `(i32 i32) -> (i32)` |
| `o3S5` | func | 1769 | `(i32 i32 i32 i32) -> (i32)` |
| `mzal` | global | 2 | `` |
| `kUS0` | func | 2405 | `(i32 f64) -> (i32)` |
| `ObTW` | func | 3012 | `(i32) -> (i32)` |
| `aoMl` | func | 2635 | `(i32) -> ()` |
| `iylu` | func | 2651 | `(i32) -> (i32)` |
| `GNhO` | func | 2754 | `(i32 i32) -> ()` |
| `V1Hq` | func | 3203 | `(i32 i32) -> (i32 i32)` |
| `d0aH` | func | 1615 | `(i32) -> (i32)` |
| `f77p` | func | 3331 | `(i32) -> ()` |
| `otT4` | func | 1880 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vAPV` | func | 1874 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `yZ5t` | func | 2033 | `(i32) -> ()` |
| `lpmN` | func | 3198 | `(i32 i32) -> (i32 i32)` |
| `qAwu` | func | 842 | `(i32 i32 i32 i32) -> (i32)` |
| `HaO6` | func | 2486 | `(i32 i32) -> (i32)` |
| `czqQ` | func | 2632 | `(i32) -> (i32)` |
| `iWSC` | func | 2018 | `(i32 i32) -> (i32)` |
| `uEEn` | func | 848 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `JE30` | func | 3200 | `(i32 i32) -> (i32 i32)` |
| `b5aX` | func | 2836 | `(i32 i32) -> ()` |
| `Yf6b` | func | 1945 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `KfKZ` | func | 1336 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `mzXr` | func | 1010 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `HK5m` | func | 3214 | `(i32) -> (i32 i32)` |
| `LfP6` | func | 3173 | `(i32 i32) -> ()` |
| `HCT4` | func | 2522 | `(i32 i32) -> (i32)` |
| `gQtp` | func | 2755 | `() -> (i32)` |
| `vrsV` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `Fio4` | func | 3211 | `(i32) -> (i32 i32)` |
| `r5SV` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `u4Id` | func | 2583 | `(i32) -> (i32)` |
| `GJyE` | func | 2950 | `(i32) -> (i32)` |
| `Kz21` | func | 3216 | `(i32) -> (i32 i32)` |
| `MjPK` | func | 2007 | `(i32 i32) -> ()` |
| `o6CL` | func | 2988 | `(i32) -> ()` |
| `jBYK` | func | 2533 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `BDtc` | func | 2615 | `(i32) -> (i32)` |
| `zfHw` | func | 2485 | `(i32 i32) -> (i32)` |
| `ihfN` | func | 1727 | `(i32 i32) -> ()` |
| `tbiH` | func | 2631 | `(i32) -> (i32)` |
| `XtuC` | func | 3254 | `(i32 i32 i32 i32) -> ()` |
| `bVqC` | func | 2614 | `(i32 i32) -> ()` |
| `Kvos` | func | 2099 | `(i32 i32 i32 i32) -> ()` |
| `ZJrb` | func | 1384 | `(i32 i32 i32) -> ()` |

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
