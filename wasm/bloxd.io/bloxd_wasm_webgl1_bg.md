# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `wp3j0a.a13381cf` · analyzed 2026-11-25T16:44:13+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.a635d60fdfaf64e789a2.wasm
> 4,851,485 bytes (4.6 MB) · sha256 `e8028f55daf732b5…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,851,467 → 4,851,485 bytes (+18)
- code bytes 4,001,633 → 4,001,651
- name-section module id `9a312b5744e5e9ae.10604` → `0f0e707bf3f4f48f.10604` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,870 / 282 |
| Exports / imports | 157 / 283 |
| Code bytes (function bodies) | 4,001,651 (3.8 MB) |
| Total local variables | 30,518 |
| Instructions (scanable bodies) | 1,878,163 |
| Data segments / bytes | 3,772 / 803,443 |
| Element segments / entries | 1 / 733 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `0f0e707bf3f4f48f.10604` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,486 | 174 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,918 | 2870 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,473 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,006,917 | 2870 |
| 11 | data | 833,928 | 3772 |
| 0 | custom:name | 30 | — |

## Types

174 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `UYch.I3xn` | memory | `[128..14648]` |
| 0 | `UYch.Hj1g` | func | `(i32) -> (f64)` |
| 1 | `UYch.gSU7` | func | `() -> (i32)` |
| 2 | `UYch.IN1U` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `UYch.IdCI` | func | `(i32) -> ()` |
| 4 | `UYch.KQj2` | func | `(i32 i32) -> (i32)` |
| 5 | `UYch.GZip` | func | `(i32) -> (i32)` |
| 6 | `UYch.D8oF` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `UYch.qH75` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `UYch.pqSD` | func | `(i32) -> (i32)` |
| 9 | `UYch.Njs2` | func | `(i32 i32) -> ()` |
| 10 | `UYch.AG8Y` | func | `(i32 i32) -> ()` |
| 11 | `UYch.FlIV` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `UYch.WNeH` | func | `(i32 i32) -> (i32)` |
| 13 | `UYch.kmil` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `UYch.hYeP` | func | `(i32) -> (i32)` |
| 15 | `UYch.RdHf` | func | `(i32 i32) -> (i32)` |
| 16 | `UYch.hloh` | func | `(i32 i32) -> (i32)` |
| 17 | `UYch.Q4ov` | func | `(i32 i32) -> ()` |
| 18 | `UYch.Ee9i` | func | `(i32) -> (i32)` |
| 19 | `UYch.xEMM` | func | `(i32) -> (i32)` |
| 20 | `UYch.J9rI` | func | `(i32) -> (i32)` |
| 21 | `UYch.v21x` | func | `(i32) -> ()` |
| 22 | `UYch.Fq5m` | func | `(i32 i32) -> ()` |
| 23 | `UYch.tZAk` | func | `(i32 i32) -> ()` |
| 24 | `UYch.DAZv` | func | `(i32) -> (i32)` |
| 25 | `UYch.fqqi` | func | `(i32 i32) -> ()` |
| 26 | `UYch.MtbI` | func | `(i32 i32) -> (i32)` |
| 27 | `UYch.b7BP` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `UYch.G7h0` | func | `(i32 i32) -> (i32)` |
| 29 | `UYch.oK31` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `UYch.WQyz` | func | `(i32) -> (i32)` |
| 31 | `UYch.kOvX` | func | `(i32 i32) -> ()` |
| 32 | `UYch.aphJ` | func | `(i32) -> (i32)` |
| 33 | `UYch.LoBy` | func | `(i32) -> (i32)` |
| 34 | `UYch.o3XR` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `UYch.GE14` | func | `(i32) -> (i32)` |
| 36 | `UYch.qLeC` | func | `(i32) -> (i32)` |
| 37 | `UYch.XNEU` | func | `(i32) -> (i32)` |
| 38 | `UYch.Kw55` | func | `(i32 i32) -> (i32)` |
| 39 | `UYch.yPGg` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `UYch.H1Kv` | func | `(i32) -> (i32)` |
| 41 | `UYch.VFRq` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `UYch.utKo` | func | `() -> (f64)` |
| 43 | `UYch.S4BF` | func | `(i32) -> (i32)` |
| 44 | `UYch.znnC` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `UYch.Labu` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `UYch.Y2a5` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `UYch.PhbH` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `UYch.Un7q` | func | `(i32 i32 i32) -> ()` |
| 49 | `UYch.fDTY` | func | `(i32 i32 i32) -> ()` |
| 50 | `UYch.BAMm` | func | `(i32 i32 i32) -> ()` |
| 51 | `UYch.UVY2` | func | `(i32 i32) -> ()` |
| 52 | `UYch.otSP` | func | `(i32 i32) -> ()` |
| 53 | `UYch.O9gj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `UYch.bxgv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `UYch.HHDn` | func | `(i32 f32 f32) -> ()` |
| 56 | `UYch.ZctK` | func | `(i32 f32 f32) -> ()` |
| 57 | `UYch.CUo4` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `UYch.n3Hw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `UYch.pxve` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `UYch.dzpq` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `UYch.KK9d` | func | `(i32 i32 i32) -> ()` |
| 62 | `UYch.uko6` | func | `(i32 i32 i32) -> ()` |
| 63 | `UYch.BUwF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `UYch.ClmR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `UYch.FWtW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `UYch.uO8J` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `UYch.TpVJ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `UYch.d1BM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `UYch.rFyG` | func | `(i32) -> (i32)` |
| 70 | `UYch.WCsI` | func | `(i32) -> ()` |
| 71 | `UYch.YWzi` | func | `(i32) -> (i32)` |
| 72 | `UYch.COUy` | func | `(i32 i32) -> (i32)` |
| 73 | `UYch.IjnP` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `UYch.vdXx` | func | `(i32 i32 i32) -> ()` |
| 75 | `UYch.z3M2` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `UYch.lFQ1` | func | `() -> (f64)` |
| 77 | `UYch.ENoH` | func | `() -> (f64)` |
| 78 | `UYch.dV2l` | func | `(i32 i32) -> ()` |
| 79 | `UYch.MJ6L` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `UYch.nIrB` | func | `(i32 i32 i32) -> ()` |
| 81 | `UYch.cyjY` | func | `(i32 i32 i32) -> ()` |
| 82 | `UYch.w8MG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `UYch.engF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `UYch.pefy` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `UYch.XI1B` | func | `(i32 i32) -> ()` |
| 86 | `UYch.n4RM` | func | `(i32 i32) -> ()` |
| 87 | `UYch.dTxp` | func | `(i32) -> (i32)` |
| 88 | `UYch.g7gs` | func | `(i32 i32) -> ()` |
| 89 | `UYch.L1z3` | func | `(i32 i32) -> ()` |
| 90 | `UYch.gWCz` | func | `(i32 i32 i32) -> ()` |
| 91 | `UYch.usYX` | func | `(i32 i32 i32) -> ()` |
| 92 | `UYch.HCaD` | func | `(i32) -> (i32)` |
| 93 | `UYch.Ljrv` | func | `(i32) -> (i32)` |
| 94 | `UYch.GR05` | func | `(i32 i32) -> (i32)` |
| 95 | `UYch.gPqI` | func | `(i32 i32) -> (i32)` |
| 96 | `UYch.svKm` | func | `(i32 i32) -> ()` |
| 97 | `UYch.y9hC` | func | `(i32 i32) -> ()` |
| 98 | `UYch.z3wV` | func | `(i32 i32 i32) -> ()` |
| 99 | `UYch.YKpU` | func | `(i32 i32 i32) -> ()` |
| 100 | `UYch.xrp6` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `UYch.ijgp` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `UYch.KPrl` | func | `(i32 i32 f32) -> ()` |
| 103 | `UYch.xQNg` | func | `(i32 i32 f32) -> ()` |
| 104 | `UYch.iUSL` | func | `(i32 i32 i32) -> ()` |
| 105 | `UYch.pPzL` | func | `(i32 i32 i32) -> ()` |
| 106 | `UYch.DNAi` | func | `(i32 i32 i32) -> ()` |
| 107 | `UYch.tnAe` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `UYch.n23b` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `UYch.yYZg` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `UYch.NtBt` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `UYch.x78V` | func | `(i32 i32) -> ()` |
| 112 | `UYch.KJha` | func | `(i32 i32) -> ()` |
| 113 | `UYch.sfAU` | func | `(i32 i32) -> ()` |
| 114 | `UYch.yLok` | func | `(i32 i32) -> ()` |
| 115 | `UYch.QivX` | func | `(i32) -> (i32)` |
| 116 | `UYch.CHeL` | func | `(i32) -> (i32)` |
| 117 | `UYch.qlry` | func | `(i32) -> (i32)` |
| 118 | `UYch.KI5Z` | func | `(i32) -> (i32)` |
| 119 | `UYch.qZUO` | func | `(i32 i32) -> ()` |
| 120 | `UYch.duj9` | func | `(i32 i32) -> ()` |
| 121 | `UYch.src9` | func | `(i32 i32) -> ()` |
| 122 | `UYch.cZBF` | func | `(i32 i32) -> ()` |
| 123 | `UYch.cD7l` | func | `(i32 i32) -> ()` |
| 124 | `UYch.Thhe` | func | `(i32 i32) -> ()` |
| 125 | `UYch.JESp` | func | `(i32 i32) -> (i32)` |
| 126 | `UYch.q6K8` | func | `(i32 i32) -> (i32)` |
| 127 | `UYch.Gva5` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `UYch.fohH` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `UYch.coGz` | func | `(i32 i32) -> ()` |
| 130 | `UYch.KLHO` | func | `(i32 i32) -> ()` |
| 131 | `UYch.IoKf` | func | `(i32) -> (i32)` |
| 132 | `UYch.nLDa` | func | `(i32 i32) -> ()` |
| 133 | `UYch.G8k9` | func | `(i32 i32) -> ()` |
| 134 | `UYch.TKEZ` | func | `(i32 i32 i32) -> ()` |
| 135 | `UYch.qNGb` | func | `(i32 i32 i32) -> ()` |
| 136 | `UYch.yBFs` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `UYch.Erkh` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `UYch.uxC3` | func | `(i32 i32) -> ()` |
| 139 | `UYch.N4qC` | func | `(i32 i32 i32) -> ()` |
| 140 | `UYch.Zc4s` | func | `(i32 i32 i32) -> ()` |
| 141 | `UYch.sKE7` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `UYch.LnkL` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `UYch.aFrc` | func | `(i32 i32 i32) -> ()` |
| 144 | `UYch.jjo6` | func | `(i32 i32 i32) -> ()` |
| 145 | `UYch.O1s3` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `UYch.DV1w` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `UYch.EHVu` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `UYch.r67Y` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `UYch.rDoL` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `UYch.HrjA` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `UYch.EyTq` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `UYch.Q6tH` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `UYch.O34C` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `UYch.iBSB` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `UYch.t3j0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `UYch.p9Kc` | func | `(i32) -> (i32)` |
| 157 | `UYch.IPIH` | func | `(i32) -> (i32)` |
| 158 | `UYch.Epq8` | func | `(i32) -> (i32)` |
| 159 | `UYch.x2AY` | func | `(i32) -> (i32)` |
| 160 | `UYch.aHEO` | func | `() -> (i32)` |
| 161 | `UYch.ABeN` | func | `() -> (i32)` |
| 162 | `UYch.WJfe` | func | `() -> (i32)` |
| 163 | `UYch.rJCw` | func | `() -> (i32)` |
| 164 | `UYch.eO16` | func | `(i32 i32) -> (i32)` |
| 165 | `UYch.OdEq` | func | `(i32) -> ()` |
| 166 | `UYch.VNKy` | func | `(i32 i32) -> (i32)` |
| 167 | `UYch.Avk8` | func | `(i32) -> (i32)` |
| 168 | `UYch.IQSe` | func | `(i32) -> (i32)` |
| 169 | `UYch.phrH` | func | `(i32) -> (i32)` |
| 170 | `UYch.Mij7` | func | `(i32) -> ()` |
| 171 | `UYch.wPks` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `UYch.HagH` | func | `(i32) -> (i32)` |
| 173 | `UYch.xAVe` | func | `(i32) -> (i32)` |
| 174 | `UYch.zhai` | func | `(i32 i32) -> (i32)` |
| 175 | `UYch.ECmB` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `UYch.cyXa` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `UYch.LAoH` | func | `(i32) -> (i32)` |
| 178 | `UYch.U3tn` | func | `(i32) -> (i32)` |
| 179 | `UYch.uMyh` | func | `(i32) -> (i32)` |
| 180 | `UYch.gS9d` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `UYch.vTg4` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `UYch.Ynrm` | func | `(i32 i32) -> ()` |
| 183 | `UYch.grt9` | func | `(i32 i32 i32) -> ()` |
| 184 | `UYch.vHcw` | func | `(i32 i32) -> ()` |
| 185 | `UYch.ZW4c` | func | `(i32 i32 i32) -> ()` |
| 186 | `UYch.qTq0` | func | `(i32 i32) -> ()` |
| 187 | `UYch.Aeu8` | func | `(i32 i32) -> ()` |
| 188 | `UYch.udoy` | func | `(i32) -> (i32)` |
| 189 | `UYch.lRGl` | func | `(i32 i32) -> (i32)` |
| 190 | `UYch.fOWt` | func | `(i32) -> ()` |
| 191 | `UYch.cJdK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `UYch.af47` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `UYch.T476` | func | `(i32 i32) -> ()` |
| 194 | `UYch.Wdkp` | func | `(i32 i32) -> ()` |
| 195 | `UYch.H9Bn` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `UYch.ckyK` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `UYch.BDPE` | func | `(i32 f32) -> ()` |
| 198 | `UYch.qkU6` | func | `(i32 f32) -> ()` |
| 199 | `UYch.kxS0` | func | `(i32 i32) -> ()` |
| 200 | `UYch.ybFO` | func | `(i32 i32) -> ()` |
| 201 | `UYch.vk2m` | func | `(i32) -> (i32)` |
| 202 | `UYch.Arnw` | func | `(i32) -> (i32)` |
| 203 | `UYch.cA9N` | func | `(i32) -> (i32)` |
| 204 | `UYch.aqvV` | func | `(i32) -> (i32)` |
| 205 | `UYch.t77t` | func | `(i32 i32 i32) -> ()` |
| 206 | `UYch.iy1a` | func | `(i32 i32 i32) -> ()` |
| 207 | `UYch.gQlG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `UYch.uW8h` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `UYch.Qo3d` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `UYch.r8O9` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `UYch.o7LQ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `UYch.yMcP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `UYch.ni1u` | func | `(i32 i32) -> ()` |
| 214 | `UYch.fnox` | func | `(i32 i32) -> ()` |
| 215 | `UYch.ujdk` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `UYch.NhzF` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `UYch.vTnT` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `UYch.TnKo` | func | `(i32) -> (i32)` |
| 219 | `UYch.Jepi` | func | `(i32) -> (i32)` |
| 220 | `UYch.xwGE` | func | `(i32 i32) -> ()` |
| 221 | `UYch.rR5c` | func | `(i32 i32) -> ()` |
| 222 | `UYch.e8zA` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `UYch.d9QW` | func | `(i32) -> (i32)` |
| 224 | `UYch.YCi5` | func | `(i32) -> (i32)` |
| 225 | `UYch.p0Nf` | func | `(i32 i32) -> ()` |
| 226 | `UYch.OPPq` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `UYch.nKba` | func | `(i32 i32) -> ()` |
| 228 | `UYch.kyck` | func | `(i32 i32) -> ()` |
| 229 | `UYch.RrAQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `UYch.yOGA` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `UYch.Qa3E` | func | `(i32 i32 i32) -> ()` |
| 232 | `UYch.xz4s` | func | `(i32 i32 i32) -> ()` |
| 233 | `UYch.v9mW` | func | `(i32 i32) -> ()` |
| 234 | `UYch.ZqEZ` | func | `(i32 i32) -> ()` |
| 235 | `UYch.CcqW` | func | `(i32 i32) -> ()` |
| 236 | `UYch.cHsL` | func | `(i32 i32) -> ()` |
| 237 | `UYch.aNLI` | func | `(i32 i32) -> ()` |
| 238 | `UYch.QBC0` | func | `(i32 i32) -> ()` |
| 239 | `UYch.NW4l` | func | `(i32 f32 f32) -> ()` |
| 240 | `UYch.h5u0` | func | `(i32 f32 f32) -> ()` |
| 241 | `UYch.F6eJ` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `UYch.msOn` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `UYch.Ww0D` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `UYch.g1rt` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `UYch.fmiu` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `UYch.KPPi` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `UYch.OMQW` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `UYch.JBf6` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `UYch.vlNz` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `UYch.EEhX` | func | `(i32) -> ()` |
| 251 | `UYch.DLIP` | func | `(i32 i32) -> ()` |
| 252 | `UYch.Z08L` | func | `(i32 i32) -> ()` |
| 253 | `UYch.RtQT` | func | `(i32 i32) -> ()` |
| 254 | `UYch.slCh` | func | `(i32 i32) -> ()` |
| 255 | `UYch.rcon` | func | `(i32 i32) -> ()` |
| 256 | `UYch.hOi8` | func | `(i32 i32) -> ()` |
| 257 | `UYch.MsqK` | func | `(i32 i32) -> ()` |
| 258 | `UYch.lqG5` | func | `(i32 i32) -> ()` |
| 259 | `UYch.IrIu` | func | `(i32) -> (i32)` |
| 260 | `UYch.I5nn` | func | `(i32) -> (i32)` |
| 261 | `UYch.urAv` | func | `(i32) -> (i32)` |
| 262 | `UYch.LESM` | func | `(i32) -> (i32)` |
| 263 | `UYch.bJHT` | func | `(i32) -> ()` |
| 264 | `UYch.SiiR` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `UYch.XoaJ` | func | `(i32) -> ()` |
| 266 | `UYch.uyms` | func | `(i32) -> (i32)` |
| 267 | `UYch.V4al` | func | `(i32) -> (i32)` |
| 268 | `UYch.hlkK` | func | `(i32) -> (i32)` |
| 269 | `UYch.DkUG` | func | `(i32) -> (i32)` |
| 270 | `UYch.mdGL` | func | `(i32 i32) -> ()` |
| 271 | `UYch.m8A0` | func | `(i32) -> ()` |
| 272 | `UYch.NQa0` | func | `(i32 i32) -> ()` |
| 273 | `UYch.mSNE` | func | `(i32) -> (i32)` |
| 274 | `UYch.JjIM` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `UYch.NtbP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `UYch.PiCm` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `UYch.qK0O` | func | `(i32 i32) -> (i32)` |
| 278 | `UYch.HgTW` | func | `(i32 i32) -> (i32)` |
| 279 | `UYch.EiNR` | func | `(i32 i32) -> (i32)` |
| 280 | `UYch.J7fh` | func | `(i32 i32) -> (i32)` |
| 281 | `UYch.mhv1` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `csYF` | func | 1264 | `(i32) -> (i32)` |
| `VT0T` | func | 3142 | `() -> (i32)` |
| `RAEy` | func | 1091 | `(i32 i32) -> ()` |
| `VHLr` | func | 2952 | `(i32 i32) -> (i32 i32)` |
| `lQBi` | func | 1949 | `(i32 i32) -> ()` |
| `x6sU` | func | 1993 | `(i32 f64 f64 f64) -> (i32)` |
| `dIcO` | func | 2302 | `(i32 i32) -> (i32)` |
| `TFb1` | func | 1445 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `ycMj` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `MM5g` | func | 793 | `(i32 i32) -> (i32)` |
| `FSXz` | func | 1671 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `iSeu` | func | 2430 | `(i32) -> (i32)` |
| `CSOh` | func | 2977 | `() -> (i32 i32)` |
| `vn0I` | func | 3009 | `(i32 i32 i32) -> ()` |
| `Y0he` | func | 1606 | `(i32 i32 i32 i32) -> (i32)` |
| `vSMB` | func | 1857 | `(i32) -> ()` |
| `xm9Q` | func | 2009 | `(i32 i32) -> ()` |
| `VlYM` | func | 2115 | `(i32 i32) -> (i32)` |
| `yebp` | func | 2725 | `(i32) -> (i32)` |
| `TC2a` | func | 2447 | `(i32 i32) -> ()` |
| `AObf` | func | 1475 | `(i32 i32) -> (i32)` |
| `X94S` | func | 3065 | `(i32 i32 i32) -> ()` |
| `dZjj` | func | 1192 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `VmNK` | func | 2976 | `() -> (i32 i32)` |
| `ZJmu` | func | 648 | `(i32 i32) -> (i32)` |
| `DddM` | func | 1975 | `(i32 f64) -> (i32)` |
| `iEHQ` | func | 869 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `hpp6` | func | 2457 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `V96z` | func | 2435 | `(i32) -> (i32)` |
| `hZhm` | func | 1502 | `(i32 i32 i32) -> (i32)` |
| `Rr3U` | func | 1725 | `(i32 i32) -> (i32)` |
| `bkG1` | func | 1569 | `(i32 f64 f64 f64) -> (i32)` |
| `pwK7` | func | 1692 | `(i32) -> (i32)` |
| `h7nm` | func | 2500 | `(i32 i32) -> ()` |
| `ttXs` | func | 2251 | `(i32 i32) -> ()` |
| `FJK0` | func | 1490 | `(i32 f64) -> (f64)` |
| `Yab5` | func | 2456 | `(i32 i32) -> (i32)` |
| `HGk1` | func | 1433 | `(i32 i32 i32 i32) -> ()` |
| `SffQ` | func | 2427 | `(i32) -> (i32)` |
| `lKTD` | func | 1412 | `() -> (i32)` |
| `kOK0` | func | 2446 | `(i32) -> (i32)` |
| `OrlJ` | func | 3000 | `(i32 i32 i32 i32) -> ()` |
| `Hg33` | func | 660 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `lpUV` | func | 548 | `(i32 i32 i32) -> (i32)` |
| `jRpF` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `qRzR` | func | 2544 | `() -> (i32)` |
| `Z8rl` | func | 1245 | `(i32 i32 i32) -> ()` |
| `luCe` | func | 2955 | `(i32 i32) -> (i32 i32)` |
| `WVPO` | func | 1199 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `yBVW` | func | 3117 | `(i32) -> (i32)` |
| `WVc3` | func | 2958 | `(i32 i32) -> (i32 i32)` |
| `YPad` | func | 1487 | `(i32 i32) -> (i32)` |
| `X4oS` | func | 2511 | `() -> (i32)` |
| `qWb7` | func | 2330 | `(i32 i32) -> (i32)` |
| `UypK` | func | 1454 | `(i32 i32 i32 i32) -> (i32)` |
| `DAaM` | func | 1314 | `(i32 i32 i32) -> (i32)` |
| `IQ9j` | func | 2464 | `(i32) -> (i32)` |
| `d9K1` | func | 3010 | `(i32 i32) -> ()` |
| `maMC` | func | 2465 | `(i32) -> (i32)` |
| `sD0Z` | func | 2146 | `(i32 i32) -> (i32)` |
| `gNud` | func | 1363 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `wtB6` | func | 686 | `(i32 i32) -> (i32)` |
| `sif8` | func | 2717 | `(i32) -> (i32)` |
| `MQto` | global | 2 | `` |
| `GHsj` | func | 2948 | `(i32 i32 i32) -> (i32 i32)` |
| `OtOu` | func | 1455 | `(i32) -> (i32)` |
| `rDke` | func | 3141 | `() -> (i32)` |
| `hrvy` | func | 899 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `YMTf` | func | 1090 | `(i32 i32) -> (i32)` |
| `xlJI` | func | 1462 | `(i32 i32) -> (i32)` |
| `oyFE` | func | 2748 | `(i32) -> (i32)` |
| `A6YB` | func | 2431 | `(i32) -> (i32)` |
| `Cpbd` | func | 2966 | `(i32) -> (i32 i32)` |
| `bMn5` | func | 2899 | `() -> ()` |
| `Wgnp` | func | 1222 | `(i32 i32) -> (i32)` |
| `vSsS` | func | 3118 | `(i32) -> ()` |
| `hwUM` | func | 2301 | `(i32 i32) -> (i32)` |
| `YYt1` | func | 2299 | `(i32 i32) -> (i32)` |
| `I1Xz` | func | 2384 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `okOL` | func | 2385 | `(i32) -> (i32)` |
| `Sz6R` | func | 719 | `(i32) -> (i32)` |
| `Lxjq` | func | 2436 | `(i32) -> (i32)` |
| `K8pf` | func | 1856 | `(i32) -> ()` |
| `AXJ3` | func | 2429 | `(i32) -> (i32)` |
| `OkKP` | func | 2739 | `(i32) -> (i32)` |
| `lOgX` | func | 2964 | `(i32) -> (i32 i32)` |
| `k6OO` | func | 2033 | `(i32 i32) -> (i32)` |
| `s7TM` | func | 1272 | `(i32 i32) -> (i32)` |
| `GaMU` | func | 2434 | `(i32) -> (i32)` |
| `sCT9` | func | 1823 | `(i32 i32 f64 f64 f64) -> ()` |
| `sGfU` | func | 2918 | `(i32 i32) -> (i32)` |
| `oUFU` | func | 1564 | `(i32 i32) -> ()` |
| `NKs7` | func | 1714 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `zp2c` | func | 1898 | `(i32) -> (i32)` |
| `XBtP` | func | 2445 | `(i32) -> (i32)` |
| `uH5M` | func | 2343 | `(i32 i32 i32 i32) -> (i32)` |
| `UQvb` | func | 1783 | `() -> (i32)` |
| `mlLW` | func | 1364 | `(i32 f64 f64) -> (i32)` |
| `WEj0` | func | 2759 | `(i32) -> ()` |
| `LjeB` | func | 2221 | `(i32 f64) -> (i32)` |
| `BjYV` | func | 2466 | `(i32) -> (i32)` |
| `r5z4` | func | 2433 | `(i32) -> ()` |
| `Klte` | func | 1415 | `(i32) -> (i32)` |
| `k56O` | func | 1913 | `(i32) -> (i32)` |
| `I49E` | func | 2413 | `(i32) -> (i32)` |
| `Esgo` | func | 1565 | `(i32 i32) -> ()` |
| `sdOr` | func | 1553 | `(i32 i32) -> (i32)` |
| `YI80` | func | 3038 | `() -> (i32)` |
| `QWLt` | func | 2957 | `(i32 i32) -> (i32 i32)` |
| `rihf` | func | 1788 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `GEeW` | func | 2929 | `(i32 i32) -> ()` |
| `sUWt` | func | 1831 | `(i32 i32) -> ()` |
| `qu5a` | func | 2300 | `(i32 i32) -> (i32)` |
| `I3Qq` | func | 2448 | `(i32) -> (i32)` |
| `w12R` | func | 2426 | `(i32) -> (f64)` |
| `hmRi` | func | 725 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `kKY8` | func | 2368 | `(i32) -> (i32)` |
| `nWc0` | func | 1707 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `lYBX` | func | 3071 | `(i32) -> ()` |
| `fHVD` | func | 2956 | `(i32 i32) -> (i32 i32)` |
| `N8K4` | func | 2978 | `() -> (i32 i32)` |
| `aVqC` | func | 870 | `(i32 i32) -> (i32)` |
| `WaEf` | func | 2428 | `(i32) -> (i32)` |
| `Nloi` | func | 2954 | `(i32 i32) -> (i32 i32)` |
| `jAAi` | func | 2781 | `(i32) -> (i32)` |
| `sow5` | func | 2963 | `(i32) -> (i32 i32)` |
| `vz4i` | func | 1240 | `(i32 i32 i32) -> (i32)` |
| `ef8g` | func | 598 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `GjsV` | func | 1848 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `ONSt` | func | 1385 | `(i32 i32) -> (i32)` |
| `RIal` | func | 2543 | `(i32 i32) -> ()` |
| `pV6w` | func | 1408 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `AGGv` | func | 2167 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `xwpa` | func | 2443 | `(i32 i32) -> ()` |
| `FNCK` | func | 1193 | `(i32 i32 i32 i32) -> (i32)` |
| `BvZc` | func | 2923 | `(i32 i32 i32 i32) -> (i32)` |
| `ijNm` | func | 3072 | `() -> ()` |
| `J5Ab` | func | 2947 | `(i32 i32 i32) -> (i32 i32)` |
| `Np8M` | func | 3113 | `() -> (f64)` |
| `xdsc` | func | 2412 | `(i32 i32) -> ()` |
| `Hy4m` | func | 1486 | `(i32 i32) -> (i32)` |
| `wuuj` | func | 1298 | `(i32) -> ()` |
| `ncSm` | func | 1841 | `(i32 i32) -> (i32)` |
| `c8pR` | func | 1803 | `(i32 i32 i32 i32) -> (i32)` |
| `OXsL` | func | 889 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `diqq` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `ygMw` | func | 2953 | `(i32 i32) -> (i32 i32)` |
| `SkJ6` | func | 2962 | `(i32) -> (i32 i32)` |
| `VStc` | func | 2965 | `(i32) -> (i32 i32)` |
| `fv7r` | func | 2455 | `(i32) -> (i32)` |
| `rk8g` | global | 1 | `` |
| `Aowv` | func | 2220 | `(i32 i32) -> ()` |
| `muBy` | func | 2432 | `(i32) -> (i32)` |
| `c6sR` | func | 1450 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `dH1D` | func | 1915 | `(i32 i32 i32 i32) -> ()` |
| `LuNd` | func | 1151 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 734 · max 734
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2016672, `i32` = i32.const 2017236

## Functions

- 2,870 bodies · 4,001,651 code bytes · avg 1.4 KB
- instruction scan: 2,870 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 105 |
| <= 128 bytes | 252 |
| <= 256 bytes | 365 |
| <= 512 bytes | 666 |
| <= 1024 bytes | 572 |
| <= 2048 bytes | 420 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 89 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 217 | 194,712 | 88,375 | local.get×25902, i32.const×9917, i32.load×5640, local.set×4735, local.tee×4639 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,484 | 54,537 | local.get×15175, i32.const×6560, i32.add×3203, local.set×3090, i32.load×2945 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 125 | 48,661 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,622 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,547 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,727 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 62 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 191 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 221 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 716 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 717 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1559 | `(i32 i32) -> (i32)` | 180 | 54,752 | 19,856 | local.get×6592, i32.const×2623, i64.store×1913, i64.const×1078, i64.load×1056 |
| 1960 | `(i32 i32) -> ()` | 110 | 40,255 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2552 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2821 | `(i32 i32 i32 i32) -> ()` | 137 | 31,353 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2840 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 535,348 |
| `i32.const` | 224,290 |
| `local.tee` | 99,525 |
| `i32.load` | 93,534 |
| `local.set` | 93,531 |
| `i32.add` | 86,525 |
| `end` | 78,625 |
| `br_if` | 64,004 |
| `i32.store` | 46,212 |
| `block` | 37,026 |
| `i64.const` | 32,310 |
| `i64.store` | 31,416 |
| `if` | 29,980 |
| `call` | 28,913 |
| `i32.sub` | 24,478 |
| `i64.load` | 23,295 |
| `br` | 23,069 |
| `i32.eqz` | 19,407 |
| `select` | 16,883 |
| `i32.shl` | 16,361 |
| `i32.and` | 16,328 |
| `i32.ne` | 15,778 |
| `i32.load8_u` | 14,842 |
| `i32.eq` | 13,840 |
| `i32.store8` | 12,559 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,870/2,870 (degraded: 0)
