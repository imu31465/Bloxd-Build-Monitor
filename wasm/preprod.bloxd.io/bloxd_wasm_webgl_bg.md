# WASM module: `bloxd_wasm_webgl_bg`

> environment **preprod.bloxd.io** · build `8104he.3820eae0` · analyzed 2026-11-25T18:33:17+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgl_bg.a6d58e38f1b2db96d86b.wasm
> 5,519,906 bytes (5.3 MB) · sha256 `86975f768364e7fd…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,516,677 → 5,519,906 bytes (+3,229)
- defined functions 2,914 → 2,917
- code bytes 4,043,172 → 4,046,226
- data bytes 1,424,644 → 1,424,807
- name-section module id `e9038797635468d5.10913` → `b4f42611d0fff04e.10929`
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,917 / 299 |
| Exports / imports | 157 / 300 |
| Code bytes (function bodies) | 4,046,226 (3.9 MB) |
| Total local variables | 30,859 |
| Instructions (scanable bodies) | 1,897,772 |
| Data segments / bytes | 4,032 / 1,424,807 |
| Element segments / entries | 1 / 754 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `b4f42611d0fff04e.10929` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,514 | 178 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,969 | 2917 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,515 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,051,572 | 2917 |
| 11 | data | 1,457,369 | 4032 |
| 0 | custom:name | 30 | — |

## Types

178 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `ZK4Y.aOG1` | memory | `[128..14648]` |
| 0 | `ZK4Y.OpFq` | func | `(i32) -> (f64)` |
| 1 | `ZK4Y.OlS7` | func | `() -> (i32)` |
| 2 | `ZK4Y.mXQ2` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `ZK4Y.ketQ` | func | `(i32) -> ()` |
| 4 | `ZK4Y.Boh5` | func | `(i32 i32) -> (i32)` |
| 5 | `ZK4Y.jEHv` | func | `(i32) -> (i32)` |
| 6 | `ZK4Y.dq8F` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `ZK4Y.il67` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `ZK4Y.MO0y` | func | `(i32) -> (i32)` |
| 9 | `ZK4Y.Mnup` | func | `(i32 i32) -> ()` |
| 10 | `ZK4Y.aCsW` | func | `(i32 i32) -> ()` |
| 11 | `ZK4Y.z9Ak` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `ZK4Y.brrI` | func | `(i32 i32) -> (i32)` |
| 13 | `ZK4Y.tetb` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `ZK4Y.pCSy` | func | `(i32) -> (i32)` |
| 15 | `ZK4Y.L731` | func | `(i32 i32) -> (i32)` |
| 16 | `ZK4Y.cbkY` | func | `(i32 i32) -> (i32)` |
| 17 | `ZK4Y.Pae0` | func | `(i32 i32) -> ()` |
| 18 | `ZK4Y.OFWY` | func | `(i32) -> (i32)` |
| 19 | `ZK4Y.MY77` | func | `(i32) -> (i32)` |
| 20 | `ZK4Y.LSJ3` | func | `(i32) -> (i32)` |
| 21 | `ZK4Y.VcuV` | func | `(i32) -> ()` |
| 22 | `ZK4Y.IjiS` | func | `(i32 i32) -> ()` |
| 23 | `ZK4Y.TT5j` | func | `(i32 i32) -> ()` |
| 24 | `ZK4Y.gZnK` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `ZK4Y.jxeq` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `ZK4Y.XQAa` | func | `(i32) -> (i32)` |
| 27 | `ZK4Y.GuKp` | func | `(i32 i32) -> ()` |
| 28 | `ZK4Y.hUbo` | func | `(i32 i32) -> (i32)` |
| 29 | `ZK4Y.hUqu` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `ZK4Y.frs3` | func | `(i32 i32) -> (i32)` |
| 31 | `ZK4Y.GA5E` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `ZK4Y.kyhI` | func | `(i32) -> (i32)` |
| 33 | `ZK4Y.zOn5` | func | `() -> (f64)` |
| 34 | `ZK4Y.rLwu` | func | `(i32 i32) -> ()` |
| 35 | `ZK4Y.gRPJ` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `ZK4Y.KMxk` | func | `(i32) -> (i32)` |
| 37 | `ZK4Y.KoMK` | func | `(i32) -> (i32)` |
| 38 | `ZK4Y.eW2Q` | func | `(i32) -> (i32)` |
| 39 | `ZK4Y.CSjF` | func | `(i32 i32) -> (i32)` |
| 40 | `ZK4Y.Oziy` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `ZK4Y.uFlo` | func | `(i32) -> (i32)` |
| 42 | `ZK4Y.udVz` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `ZK4Y.biKU` | func | `(i32) -> (i32)` |
| 44 | `ZK4Y.Qktl` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `ZK4Y.D7bd` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `ZK4Y.aDGD` | func | `(i32 i32 i32) -> ()` |
| 47 | `ZK4Y.m3qD` | func | `(i32 i32 i32) -> ()` |
| 48 | `ZK4Y.MeQ5` | func | `(i32 i32 i32) -> ()` |
| 49 | `ZK4Y.KOEv` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `ZK4Y.NL6a` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `ZK4Y.Pv3b` | func | `(i32 i32) -> ()` |
| 52 | `ZK4Y.VmnI` | func | `(i32 i32) -> ()` |
| 53 | `ZK4Y.Pqjx` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `ZK4Y.P5XT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `ZK4Y.HwTo` | func | `(i32 f32 f32) -> ()` |
| 56 | `ZK4Y.Wacr` | func | `(i32 f32 f32) -> ()` |
| 57 | `ZK4Y.Rjfm` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `ZK4Y.lZJq` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `ZK4Y.Tc62` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `ZK4Y.SJsp` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `ZK4Y.YT0W` | func | `(i32 i32 i32) -> ()` |
| 62 | `ZK4Y.M0RD` | func | `(i32 i32 i32) -> ()` |
| 63 | `ZK4Y.dAbt` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `ZK4Y.KYZD` | func | `(i32 i32 i32) -> ()` |
| 65 | `ZK4Y.JMj2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `ZK4Y.nJ2P` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `ZK4Y.Rxvh` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `ZK4Y.c5Go` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `ZK4Y.jiM2` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `ZK4Y.XAfr` | func | `(i32) -> (i32)` |
| 71 | `ZK4Y.aUM1` | func | `(i32) -> ()` |
| 72 | `ZK4Y.NGxU` | func | `(i32) -> (i32)` |
| 73 | `ZK4Y.C3yD` | func | `(i32 i32) -> (i32)` |
| 74 | `ZK4Y.g5yC` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `ZK4Y.OHqr` | func | `(i32 i32 i32) -> ()` |
| 76 | `ZK4Y.zrY9` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `ZK4Y.wq5E` | func | `() -> (f64)` |
| 78 | `ZK4Y.Zzcn` | func | `() -> (f64)` |
| 79 | `ZK4Y.UKFY` | func | `(i32 i32) -> ()` |
| 80 | `ZK4Y.MYZm` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `ZK4Y.sYqc` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `ZK4Y.oIQS` | func | `(i32 i32 i32) -> ()` |
| 83 | `ZK4Y.GF4T` | func | `(i32 i32 i32) -> ()` |
| 84 | `ZK4Y.MiD4` | func | `(i32 i32) -> ()` |
| 85 | `ZK4Y.vMzC` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `ZK4Y.NMdo` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `ZK4Y.riPP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `ZK4Y.tAEe` | func | `(i32 i32) -> ()` |
| 89 | `ZK4Y.JbIp` | func | `(i32 i32) -> ()` |
| 90 | `ZK4Y.et1q` | func | `(i32) -> (i32)` |
| 91 | `ZK4Y.sJed` | func | `(i32 i32 i32) -> ()` |
| 92 | `ZK4Y.Otmg` | func | `(i32 i32 i32) -> ()` |
| 93 | `ZK4Y.mpTS` | func | `(i32) -> (i32)` |
| 94 | `ZK4Y.tdnT` | func | `(i32) -> (i32)` |
| 95 | `ZK4Y.NY2S` | func | `(i32 i32) -> ()` |
| 96 | `ZK4Y.mOv1` | func | `(i32 i32) -> ()` |
| 97 | `ZK4Y.F9Px` | func | `(i32 i32) -> ()` |
| 98 | `ZK4Y.i1Iw` | func | `(i32 i32) -> ()` |
| 99 | `ZK4Y.lUE3` | func | `(i32 i32 i32) -> ()` |
| 100 | `ZK4Y.KeNR` | func | `(i32 i32 i32) -> ()` |
| 101 | `ZK4Y.sSwI` | func | `(i32 i32 f32) -> ()` |
| 102 | `ZK4Y.eUED` | func | `(i32 i32 f32) -> ()` |
| 103 | `ZK4Y.fNT6` | func | `(i32 i32 i32) -> ()` |
| 104 | `ZK4Y.fJOx` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `ZK4Y.mD6x` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `ZK4Y.sXrT` | func | `(i32 i32) -> ()` |
| 107 | `ZK4Y.rbTf` | func | `(i32 i32) -> ()` |
| 108 | `ZK4Y.rC05` | func | `(i32 i32) -> ()` |
| 109 | `ZK4Y.nPAq` | func | `(i32 i32) -> ()` |
| 110 | `ZK4Y.BkND` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `ZK4Y.rOGN` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `ZK4Y.N4fA` | func | `(i32 i32 i32) -> ()` |
| 113 | `ZK4Y.u8Ul` | func | `(i32 i32 i32) -> ()` |
| 114 | `ZK4Y.sOLd` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `ZK4Y.DGsf` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `ZK4Y.SSIi` | func | `(i32 i32) -> ()` |
| 117 | `ZK4Y.kZmY` | func | `(i32 i32) -> ()` |
| 118 | `ZK4Y.upi5` | func | `(i32 i32) -> (i32)` |
| 119 | `ZK4Y.aAPR` | func | `(i32 i32) -> (i32)` |
| 120 | `ZK4Y.mzH9` | func | `(i32 i32) -> ()` |
| 121 | `ZK4Y.DvDh` | func | `(i32 i32) -> ()` |
| 122 | `ZK4Y.TRxJ` | func | `(i32) -> (i32)` |
| 123 | `ZK4Y.ahnt` | func | `(i32 i32) -> ()` |
| 124 | `ZK4Y.r1Rp` | func | `(i32 i32) -> ()` |
| 125 | `ZK4Y.Gq3H` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `ZK4Y.st85` | func | `(i32 i32 i32) -> ()` |
| 127 | `ZK4Y.UvfM` | func | `(i32 i32 i32) -> ()` |
| 128 | `ZK4Y.iGXX` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `ZK4Y.XSWA` | func | `(i32 i32) -> ()` |
| 130 | `ZK4Y.iwcS` | func | `(i32 i32 i32 i32) -> (i32)` |
| 131 | `ZK4Y.RNZo` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `ZK4Y.qAg8` | func | `(i32 i32 i32) -> ()` |
| 133 | `ZK4Y.kvVx` | func | `(i32 i32 i32) -> ()` |
| 134 | `ZK4Y.PyjK` | func | `(i32) -> ()` |
| 135 | `ZK4Y.R75o` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `ZK4Y.aL9n` | func | `(i32 i32 i32) -> ()` |
| 137 | `ZK4Y.AfrT` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `ZK4Y.BXQN` | func | `(i32 i32) -> ()` |
| 139 | `ZK4Y.G1C4` | func | `(i32) -> (i32)` |
| 140 | `ZK4Y.scQm` | func | `(i32 i32) -> ()` |
| 141 | `ZK4Y.UUbI` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `ZK4Y.IJGt` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `ZK4Y.tDma` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `ZK4Y.JusP` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `ZK4Y.DuH3` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `ZK4Y.ZHve` | func | `(i32 i32) -> ()` |
| 147 | `ZK4Y.fdjU` | func | `(i32 i32) -> ()` |
| 148 | `ZK4Y.abqj` | func | `(i32 i32) -> ()` |
| 149 | `ZK4Y.z69V` | func | `(i32 i32) -> ()` |
| 150 | `ZK4Y.hE3b` | func | `(i32) -> (i32)` |
| 151 | `ZK4Y.skvm` | func | `(i32) -> (i32)` |
| 152 | `ZK4Y.QjmI` | func | `(i32) -> (i32)` |
| 153 | `ZK4Y.qj5R` | func | `(i32) -> (i32)` |
| 154 | `ZK4Y.dNlp` | func | `(i32) -> (i32)` |
| 155 | `ZK4Y.Yy9X` | func | `(i32) -> (i32)` |
| 156 | `ZK4Y.OL41` | func | `() -> (i32)` |
| 157 | `ZK4Y.OGIQ` | func | `() -> (i32)` |
| 158 | `ZK4Y.Dgzz` | func | `() -> (i32)` |
| 159 | `ZK4Y.PALR` | func | `() -> (i32)` |
| 160 | `ZK4Y.hg3Y` | func | `(i32 i32) -> (i32)` |
| 161 | `ZK4Y.o7Xp` | func | `(i32) -> ()` |
| 162 | `ZK4Y.Frp9` | func | `(i32 i32) -> (i32)` |
| 163 | `ZK4Y.bizx` | func | `(i32) -> (i32)` |
| 164 | `ZK4Y.wmSd` | func | `(i32) -> (i32)` |
| 165 | `ZK4Y.HwQv` | func | `(i32) -> (i32)` |
| 166 | `ZK4Y.Mj1p` | func | `(i32) -> ()` |
| 167 | `ZK4Y.yZzB` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `ZK4Y.eJ3K` | func | `(i32) -> (i32)` |
| 169 | `ZK4Y.bbmU` | func | `(i32) -> (i32)` |
| 170 | `ZK4Y.ac08` | func | `(i32 i32) -> (i32)` |
| 171 | `ZK4Y.B0iP` | func | `(i32) -> ()` |
| 172 | `ZK4Y.u1yR` | func | `() -> (i32)` |
| 173 | `ZK4Y.NtV3` | func | `(i32 i32) -> (i32)` |
| 174 | `ZK4Y.FkHD` | func | `(i32 i32) -> ()` |
| 175 | `ZK4Y.LPxo` | func | `(i32 i32) -> ()` |
| 176 | `ZK4Y.GWBp` | func | `(i32) -> (i32)` |
| 177 | `ZK4Y.sTr5` | func | `(i32 i32) -> (i32)` |
| 178 | `ZK4Y.bXRU` | func | `(i32) -> ()` |
| 179 | `ZK4Y.Jgvj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `ZK4Y.SWZe` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `ZK4Y.OBMy` | func | `(i32 i32) -> ()` |
| 182 | `ZK4Y.e5RJ` | func | `(i32 i32) -> ()` |
| 183 | `ZK4Y.veOe` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `ZK4Y.sNzX` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `ZK4Y.soiF` | func | `(i32 f32) -> ()` |
| 186 | `ZK4Y.b7YC` | func | `(i32 f32) -> ()` |
| 187 | `ZK4Y.nTFh` | func | `(i32 i32) -> ()` |
| 188 | `ZK4Y.Ahws` | func | `(i32 i32) -> ()` |
| 189 | `ZK4Y.iv9D` | func | `(i32) -> (i32)` |
| 190 | `ZK4Y.l3Mu` | func | `(i32) -> (i32)` |
| 191 | `ZK4Y.mtlx` | func | `(i32) -> (i32)` |
| 192 | `ZK4Y.AKtN` | func | `(i32) -> (i32)` |
| 193 | `ZK4Y.ebEe` | func | `(i32 i32 i32) -> ()` |
| 194 | `ZK4Y.KIOB` | func | `(i32 i32 i32) -> ()` |
| 195 | `ZK4Y.Fg9d` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `ZK4Y.U0wb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `ZK4Y.NjYH` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `ZK4Y.likK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `ZK4Y.Uxv3` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `ZK4Y.LVnd` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `ZK4Y.mco7` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `ZK4Y.OKYK` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `ZK4Y.qpwJ` | func | `(i32) -> (i32)` |
| 204 | `ZK4Y.gmmz` | func | `(i32) -> (i32)` |
| 205 | `ZK4Y.vF1G` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `ZK4Y.YBWx` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `ZK4Y.JLD5` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `ZK4Y.fWm6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `ZK4Y.Vvoj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `ZK4Y.fh9y` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `ZK4Y.RJfF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `ZK4Y.FoFl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `ZK4Y.pW86` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `ZK4Y.D292` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `ZK4Y.WvAs` | func | `(i32 i32 i32) -> ()` |
| 216 | `ZK4Y.z4wp` | func | `(i32 i32 i32) -> ()` |
| 217 | `ZK4Y.KfNQ` | func | `(i32 i32) -> ()` |
| 218 | `ZK4Y.Kaoc` | func | `(i32 i32) -> ()` |
| 219 | `ZK4Y.u9bu` | func | `(i32 i32) -> ()` |
| 220 | `ZK4Y.EVFI` | func | `(i32 i32) -> ()` |
| 221 | `ZK4Y.KRze` | func | `(i32 i32) -> ()` |
| 222 | `ZK4Y.SQwx` | func | `(i32 i32) -> ()` |
| 223 | `ZK4Y.i3Iw` | func | `(i32 f32 f32) -> ()` |
| 224 | `ZK4Y.vLvZ` | func | `(i32 f32 f32) -> ()` |
| 225 | `ZK4Y.aonA` | func | `(i32 i32) -> ()` |
| 226 | `ZK4Y.YsEs` | func | `(i32 i32) -> ()` |
| 227 | `ZK4Y.dsVw` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `ZK4Y.ecQb` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `ZK4Y.vvwH` | func | `(i32 i32 i32) -> ()` |
| 230 | `ZK4Y.F3i2` | func | `(i32) -> (i32)` |
| 231 | `ZK4Y.Qsg3` | func | `(i32) -> (i32)` |
| 232 | `ZK4Y.gJUH` | func | `(i32 i32) -> ()` |
| 233 | `ZK4Y.Axhp` | func | `(i32 i32) -> ()` |
| 234 | `ZK4Y.lOcJ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `ZK4Y.FDXO` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `ZK4Y.wqIk` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `ZK4Y.Yp9i` | func | `(i32 i32 i32) -> ()` |
| 238 | `ZK4Y.sbjn` | func | `(i32 i32 i32) -> ()` |
| 239 | `ZK4Y.BugV` | func | `(i32 i32 i32) -> ()` |
| 240 | `ZK4Y.odLQ` | func | `(i32 i32 i32) -> ()` |
| 241 | `ZK4Y.V0k3` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `ZK4Y.LEpG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `ZK4Y.KH9r` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `ZK4Y.OoZN` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `ZK4Y.sncI` | func | `(i32) -> (i32)` |
| 246 | `ZK4Y.NQRa` | func | `(i32) -> (i32)` |
| 247 | `ZK4Y.aeQn` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `ZK4Y.GqvC` | func | `(i32 i32) -> ()` |
| 249 | `ZK4Y.gwt9` | func | `(i32 i32) -> ()` |
| 250 | `ZK4Y.JWZ5` | func | `(i32 i32) -> (i32)` |
| 251 | `ZK4Y.za7p` | func | `(i32 i32) -> (i32)` |
| 252 | `ZK4Y.tmcz` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `ZK4Y.Z8rj` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `ZK4Y.KpF8` | func | `(i32 i32) -> ()` |
| 255 | `ZK4Y.BRhr` | func | `(i32 i32) -> ()` |
| 256 | `ZK4Y.AOtm` | func | `(i32) -> (i32)` |
| 257 | `ZK4Y.xwIx` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `ZK4Y.pXjq` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `ZK4Y.Kgsb` | func | `(i32) -> ()` |
| 260 | `ZK4Y.OuXK` | func | `(i32 i32) -> ()` |
| 261 | `ZK4Y.JOPU` | func | `(i32 i32) -> ()` |
| 262 | `ZK4Y.tSIe` | func | `(i32 i32) -> ()` |
| 263 | `ZK4Y.NTIJ` | func | `(i32 i32) -> ()` |
| 264 | `ZK4Y.I2N8` | func | `(i32 i32) -> ()` |
| 265 | `ZK4Y.tYhV` | func | `(i32 i32) -> ()` |
| 266 | `ZK4Y.FJTV` | func | `(i32 i32) -> ()` |
| 267 | `ZK4Y.bpBC` | func | `(i32 i32) -> ()` |
| 268 | `ZK4Y.OVZi` | func | `(i32) -> (i32)` |
| 269 | `ZK4Y.ukVc` | func | `(i32) -> (i32)` |
| 270 | `ZK4Y.cNt9` | func | `(i32) -> (i32)` |
| 271 | `ZK4Y.Pbvh` | func | `(i32) -> (i32)` |
| 272 | `ZK4Y.wNZm` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `ZK4Y.IvGm` | func | `(i32) -> ()` |
| 274 | `ZK4Y.amPq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `ZK4Y.AARg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `ZK4Y.ei0o` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `ZK4Y.Ws6s` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `ZK4Y.Oiv8` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `ZK4Y.uuzD` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `ZK4Y.wU8A` | func | `(i32) -> (i32)` |
| 281 | `ZK4Y.BGHc` | func | `(i32) -> (i32)` |
| 282 | `ZK4Y.LwH5` | func | `(i32) -> (i32)` |
| 283 | `ZK4Y.cUIt` | func | `(i32) -> (i32)` |
| 284 | `ZK4Y.pIw3` | func | `(i32 i32) -> ()` |
| 285 | `ZK4Y.CB6t` | func | `(i32) -> ()` |
| 286 | `ZK4Y.HBpw` | func | `(i32 i32) -> ()` |
| 287 | `ZK4Y.p1Ya` | func | `(i32) -> (i32)` |
| 288 | `ZK4Y.ZXkC` | func | `(i32 i32) -> (i32)` |
| 289 | `ZK4Y.uYfF` | func | `(i32 i32) -> (i32)` |
| 290 | `ZK4Y.PTnA` | func | `(i32 i32) -> (i32)` |
| 291 | `ZK4Y.sfmh` | func | `(f64) -> (i32)` |
| 292 | `ZK4Y.hTiM` | func | `(i32 i32) -> (i32)` |
| 293 | `ZK4Y.J1MV` | func | `(i32 i32) -> (i32)` |
| 294 | `ZK4Y.RT8u` | func | `(i32 i32) -> (i32)` |
| 295 | `ZK4Y.tx1T` | func | `(i32 i32) -> (i32)` |
| 296 | `ZK4Y.LOXh` | func | `(i32 i32) -> (i32)` |
| 297 | `ZK4Y.DWfa` | func | `(i32 i32) -> (i32)` |
| 298 | `ZK4Y.fG3i` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `veuh` | func | 2476 | `(i32) -> ()` |
| `XhqV` | func | 3014 | `(i32 i32) -> (i32 i32)` |
| `eMJP` | func | 2470 | `(i32) -> (i32)` |
| `gZ8C` | func | 3003 | `(i32 i32 i32) -> (i32 i32)` |
| `p17x` | func | 2479 | `(i32) -> (i32)` |
| `H8lu` | func | 762 | `(i32 i32 i32) -> (i32)` |
| `kxuJ` | func | 2773 | `(i32) -> (i32)` |
| `ivcm` | func | 1270 | `(i32 i32 i32) -> ()` |
| `P1wY` | func | 3101 | `() -> (i32)` |
| `GPek` | func | 3039 | `() -> (i32 i32)` |
| `fUqw` | func | 3010 | `(i32 i32) -> (i32 i32)` |
| `KFsn` | func | 3205 | `() -> (i32)` |
| `Qq9M` | func | 2477 | `(i32) -> (i32)` |
| `Szog` | func | 1632 | `(i32 i32 i32 i32) -> (i32)` |
| `Mu54` | func | 1221 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `TNDY` | func | 2489 | `(i32) -> (i32)` |
| `GL1C` | func | 1289 | `(i32) -> (i32)` |
| `w1X3` | func | 1442 | `(i32) -> (i32)` |
| `Yqjp` | func | 1490 | `(i32 i32) -> (i32)` |
| `whhj` | func | 1859 | `(i32 i32 f64 f64 f64) -> ()` |
| `GUcK` | func | 1503 | `(i32 i32) -> (i32)` |
| `UaYZ` | func | 2426 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `eYg7` | func | 3009 | `(i32 i32) -> (i32 i32)` |
| `B3Ou` | func | 3073 | `(i32 i32) -> ()` |
| `IPE7` | func | 2492 | `(i32) -> (i32)` |
| `dL0b` | func | 2427 | `(i32) -> (i32)` |
| `PNON` | func | 2559 | `() -> (i32)` |
| `wtTa` | func | 2474 | `(i32) -> (i32)` |
| `nyum` | func | 2592 | `(i32 i32) -> ()` |
| `zfkQ` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `MfK6` | func | 2471 | `(i32) -> (i32)` |
| `ZTJe` | func | 1243 | `(i32 i32) -> (i32)` |
| `Im3V` | func | 2255 | `(i32 i32) -> ()` |
| `Ps71` | func | 2410 | `(i32) -> (i32)` |
| `TLUK` | func | 2068 | `(i32 i32) -> (i32)` |
| `E43w` | func | 1594 | `(i32 f64 f64 f64) -> (i32)` |
| `hhxU` | func | 1758 | `(i32 i32) -> (i32)` |
| `zP1G` | global | 2 | `` |
| `fXep` | func | 2499 | `(i32) -> (i32)` |
| `FWKs` | func | 2013 | `(i32 f64) -> (i32)` |
| `hY8i` | func | 3135 | `() -> ()` |
| `cCnv` | func | 2029 | `(i32 f64 f64 f64) -> (i32)` |
| `M2id` | func | 911 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `hOFx` | func | 2798 | `(i32) -> (i32)` |
| `A4Od` | func | 2510 | `(i32) -> (i32)` |
| `odYD` | func | 1517 | `(i32 f64) -> (f64)` |
| `ctXO` | func | 568 | `(i32 i32 i32) -> (i32)` |
| `IHT3` | func | 1113 | `(i32 i32) -> (i32)` |
| `lgo7` | func | 1893 | `(i32) -> ()` |
| `EUy1` | func | 2382 | `(i32 i32 i32 i32) -> (i32)` |
| `XSrT` | func | 1724 | `(i32) -> (i32)` |
| `N5GX` | func | 2977 | `(i32 i32 i32 i32) -> (i32)` |
| `UX01` | func | 1484 | `(i32) -> (i32)` |
| `pmSp` | func | 3175 | `() -> (f64)` |
| `G6wJ` | func | 1530 | `(i32 i32 i32) -> (i32)` |
| `ZNHT` | func | 2972 | `(i32 i32) -> (i32)` |
| `iKSS` | func | 2469 | `(i32) -> (f64)` |
| `Q1Yb` | func | 747 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `eCGT` | func | 1514 | `(i32 i32) -> (i32)` |
| `c9bu` | func | 2472 | `(i32) -> (i32)` |
| `JPXt` | func | 2335 | `(i32 i32) -> (i32)` |
| `mSMA` | func | 1746 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Tvj7` | func | 2593 | `() -> (i32)` |
| `RkHJ` | func | 1461 | `(i32 i32 i32 i32) -> ()` |
| `Sanb` | func | 1296 | `(i32 i32) -> (i32)` |
| `txoJ` | func | 892 | `(i32 i32) -> (i32)` |
| `rs3z` | func | 2181 | `(i32 i32) -> (i32)` |
| `b9xt` | func | 2831 | `(i32) -> (i32)` |
| `KQd8` | func | 2500 | `(i32 i32) -> (i32)` |
| `JSFp` | func | 2456 | `(i32) -> (i32)` |
| `Ey7u` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `IWOj` | func | 2547 | `(i32 i32) -> ()` |
| `GM03` | func | 1701 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `r3hI` | func | 1884 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `Gx7H` | func | 2508 | `(i32) -> (i32)` |
| `qVo8` | func | 1389 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `j1Wp` | func | 1579 | `(i32 i32) -> (i32)` |
| `syRE` | func | 2338 | `(i32 i32) -> (i32)` |
| `pflo` | func | 1515 | `(i32 i32) -> (i32)` |
| `TiMC` | func | 3022 | `(i32) -> (i32 i32)` |
| `C20y` | func | 1877 | `(i32 i32) -> (i32)` |
| `BM7F` | func | 3026 | `(i32) -> (i32 i32)` |
| `L4tq` | func | 2491 | `(i32 i32) -> ()` |
| `fXAH` | func | 3011 | `(i32 i32) -> (i32 i32)` |
| `gCYK` | func | 2045 | `(i32 i32) -> ()` |
| `chkN` | func | 1479 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NeHQ` | func | 3013 | `(i32 i32) -> (i32 i32)` |
| `FUI5` | func | 1934 | `(i32) -> (i32)` |
| `mg9e` | func | 1215 | `(i32 i32 i32 i32) -> (i32)` |
| `bBiU` | func | 1953 | `(i32 i32 i32 i32) -> ()` |
| `JEcv` | func | 3025 | `(i32) -> (i32 i32)` |
| `vNQd` | func | 2201 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `qS53` | func | 3128 | `(i32 i32 i32) -> ()` |
| `AXlm` | func | 1589 | `(i32 i32) -> ()` |
| `yEMh` | global | 1 | `` |
| `TQBi` | func | 2473 | `(i32) -> (i32)` |
| `wU6W` | func | 1114 | `(i32 i32) -> ()` |
| `hxC6` | func | 1439 | `() -> (i32)` |
| `nut3` | func | 1951 | `(i32) -> (i32)` |
| `dt1M` | func | 708 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `bMs1` | func | 2501 | `(i32 i32) -> (i32)` |
| `MirD` | func | 891 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `adcy` | func | 2766 | `(i32) -> (i32)` |
| `v2vv` | func | 3002 | `(i32 i32 i32) -> (i32 i32)` |
| `h6yF` | func | 1483 | `(i32 i32 i32 i32) -> (i32)` |
| `XipG` | func | 669 | `(i32 i32) -> (i32)` |
| `ctLX` | func | 3072 | `(i32 i32 i32) -> ()` |
| `U4vd` | func | 1264 | `(i32 i32 i32) -> (i32)` |
| `Q7is` | func | 744 | `(i32) -> (i32)` |
| `c3IC` | func | 679 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HfRg` | func | 1838 | `(i32 i32 i32 i32) -> (i32)` |
| `zBx7` | func | 3012 | `(i32 i32) -> (i32 i32)` |
| `DHnx` | func | 2478 | `(i32) -> (i32)` |
| `tGwe` | func | 3023 | `(i32) -> (i32 i32)` |
| `mRJ6` | func | 2148 | `(i32 i32) -> (i32)` |
| `JEm4` | func | 3179 | `(i32) -> (i32)` |
| `t1VH` | func | 2953 | `() -> ()` |
| `CqEY` | func | 2984 | `(i32 i32) -> ()` |
| `snkC` | func | 3024 | `(i32) -> (i32 i32)` |
| `LB8V` | func | 1337 | `(i32 i32 i32) -> (i32)` |
| `KQYj` | func | 2509 | `(i32) -> (i32)` |
| `CsgJ` | func | 1867 | `(i32 i32) -> ()` |
| `sqze` | func | 1321 | `(i32) -> ()` |
| `pt87` | func | 3063 | `(i32 i32 i32 i32) -> ()` |
| `JKTD` | func | 1474 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `quvu` | func | 2256 | `(i32 f64) -> (i32)` |
| `MRxb` | func | 1390 | `(i32 f64 f64) -> (i32)` |
| `KNIw` | func | 1740 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `atB2` | func | 2370 | `(i32 i32) -> (i32)` |
| `B8MI` | func | 2455 | `(i32 i32) -> ()` |
| `Enct` | func | 2337 | `(i32 i32) -> (i32)` |
| `yPbQ` | func | 2475 | `(i32) -> (i32)` |
| `s6iJ` | func | 1410 | `(i32 i32) -> (i32)` |
| `wNLW` | func | 1892 | `(i32) -> ()` |
| `WWMV` | func | 1817 | `() -> (i32)` |
| `Rue5` | func | 1987 | `(i32 i32) -> ()` |
| `G198` | func | 1435 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `CnPV` | func | 2490 | `(i32) -> (i32)` |
| `BegR` | func | 2787 | `(i32) -> (i32)` |
| `m0iW` | func | 3037 | `() -> (i32 i32)` |
| `ccne` | func | 2336 | `(i32 i32) -> (i32)` |
| `oHsW` | func | 2286 | `(i32 i32) -> ()` |
| `jxJ2` | func | 2487 | `(i32 i32) -> ()` |
| `C2i6` | func | 3038 | `() -> (i32 i32)` |
| `x5ch` | func | 1214 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `PLHJ` | func | 3008 | `(i32 i32) -> (i32 i32)` |
| `Qvdc` | func | 1551 | `(i32 i32 i32 i32) -> (i32)` |
| `Qe3r` | func | 1590 | `(i32 i32) -> ()` |
| `I7tK` | func | 684 | `(i32 i32) -> (i32)` |
| `CNc5` | func | 3204 | `() -> (i32)` |
| `gXHJ` | func | 3180 | `(i32) -> ()` |
| `tVRe` | func | 1823 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `ZZVK` | func | 922 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `DyFk` | func | 2809 | `(i32) -> ()` |
| `B7NT` | func | 3134 | `(i32) -> ()` |
| `GXoU` | func | 739 | `(i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 755 · max 755
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2639864, `i32` = i32.const 2640436

## Functions

- 2,917 bodies · 4,046,226 code bytes · avg 1.4 KB
- instruction scan: 2,917 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 115 |
| <= 128 bytes | 257 |
| <= 256 bytes | 378 |
| <= 512 bytes | 672 |
| <= 1024 bytes | 575 |
| <= 2048 bytes | 427 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 92 |
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
| 196 | `(i32 i32) -> ()` | 10 | 26,749 | 12,881 | local.get×4533, i32.load×1219, i32.const×1026, end×802, i32.add×738 |
| 225 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 720 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 721 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1578 | `(i32 i32) -> (i32)` | 180 | 54,766 | 19,852 | local.get×6590, i32.const×2618, i64.store×1917, i64.const×1082, i64.load×1056 |
| 1976 | `(i32 i32) -> ()` | 111 | 39,589 | 17,528 | local.get×5140, i32.const×1646, local.set×891, local.tee×743, end×677 |
| 2589 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2867 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2885 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 540,863 |
| `i32.const` | 226,447 |
| `local.tee` | 100,577 |
| `i32.load` | 94,853 |
| `local.set` | 94,207 |
| `i32.add` | 87,420 |
| `end` | 79,467 |
| `br_if` | 64,567 |
| `i32.store` | 46,894 |
| `block` | 37,358 |
| `i64.const` | 32,759 |
| `i64.store` | 31,853 |
| `if` | 30,379 |
| `call` | 29,542 |
| `i32.sub` | 24,731 |
| `i64.load` | 23,720 |
| `br` | 23,205 |
| `i32.eqz` | 19,624 |
| `select` | 16,970 |
| `i32.shl` | 16,497 |
| `i32.and` | 16,368 |
| `i32.ne` | 15,908 |
| `i32.load8_u` | 15,026 |
| `i32.eq` | 13,917 |
| `i32.store8` | 12,654 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,917/2,917 (degraded: 0)
