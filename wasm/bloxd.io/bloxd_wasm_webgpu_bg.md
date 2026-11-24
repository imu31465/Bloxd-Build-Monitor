# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `31kiid.1299b0d6` · analyzed 2026-11-24T12:43:08+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.9662a37bc28b9ffe36e3.wasm
> 5,121,311 bytes (4.9 MB) · sha256 `2066e38e37e17624…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,121,239 → 5,121,311 bytes (+72)
- defined functions 2,939 → 2,938
- code bytes 4,038,764 → 4,038,839
- name-section module id `2da0e43baa4a60f0.12255` → `d7baa99dc60ddd5c.12254`
- export identifiers rotated by the obfuscator: 1/159 names kept (identifier names are randomly assigned per build; compare signatures instead)

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
| name-section module id | `d7baa99dc60ddd5c.12254` |
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
| 0 | `a6sb.wVh4` | memory | `[128..14648]` |
| 0 | `a6sb.NlCK` | func | `(i32) -> (i32)` |
| 1 | `a6sb.wC6Q` | func | `(i32) -> (f64)` |
| 2 | `a6sb.WpAB` | func | `() -> (i32)` |
| 3 | `a6sb.ue27` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `a6sb.TNSv` | func | `(i32) -> ()` |
| 5 | `a6sb.A3QP` | func | `(i32 i32) -> (i32)` |
| 6 | `a6sb.K475` | func | `(i32) -> (i32)` |
| 7 | `a6sb.wOf8` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `a6sb.OnGS` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `a6sb.q2oV` | func | `(i32) -> (i32)` |
| 10 | `a6sb.lRs1` | func | `(i32 i32) -> ()` |
| 11 | `a6sb.h6b4` | func | `(i32 i32) -> ()` |
| 12 | `a6sb.i3g5` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `a6sb.fEfC` | func | `(i32 i32) -> (i32)` |
| 14 | `a6sb.t1VE` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `a6sb.qTI5` | func | `(i32) -> (i32)` |
| 16 | `a6sb.LgPu` | func | `(i32 i32) -> (i32)` |
| 17 | `a6sb.s9m4` | func | `(i32 i32) -> (i32)` |
| 18 | `a6sb.jRfl` | func | `(i32 i32) -> ()` |
| 19 | `a6sb.ht3u` | func | `(i32) -> (i32)` |
| 20 | `a6sb.ZfLU` | func | `(i32) -> (i32)` |
| 21 | `a6sb.TQTi` | func | `(i32 i32 i32) -> ()` |
| 22 | `a6sb.ds9I` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `a6sb.n700` | func | `(i32) -> (i32)` |
| 24 | `a6sb.XkFo` | func | `(i32) -> (i32)` |
| 25 | `a6sb.gpFn` | func | `(i32 i32) -> ()` |
| 26 | `a6sb.Kcbd` | func | `(i32 i32) -> (i32)` |
| 27 | `a6sb.glVN` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `a6sb.ReuP` | func | `(i32) -> (i32)` |
| 29 | `a6sb.qq5o` | func | `(i32) -> (i32)` |
| 30 | `a6sb.lNm8` | func | `(i32) -> (i32)` |
| 31 | `a6sb.vEzA` | func | `(i32) -> (i32)` |
| 32 | `a6sb.WMxg` | func | `(i32) -> (i32)` |
| 33 | `a6sb.hhfH` | func | `(i32 i32 i32) -> ()` |
| 34 | `a6sb.rmOE` | func | `(i32 i32) -> (i32)` |
| 35 | `a6sb.wHik` | func | `(i32) -> (i32)` |
| 36 | `a6sb.rLip` | func | `(i32) -> ()` |
| 37 | `a6sb.pHB5` | func | `(i32) -> (i32)` |
| 38 | `a6sb.vRGU` | func | `(i32) -> (i32)` |
| 39 | `a6sb.EdWQ` | func | `(i32) -> ()` |
| 40 | `a6sb.gJ7A` | func | `(i32 i32) -> (i32)` |
| 41 | `a6sb.vCdg` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `a6sb.qqcf` | func | `(i32) -> ()` |
| 43 | `a6sb.B4G2` | func | `(i32 i32) -> ()` |
| 44 | `a6sb.DqCx` | func | `() -> (i32)` |
| 45 | `a6sb.fnmb` | func | `(i32 i32) -> (i32)` |
| 46 | `a6sb.mdIq` | func | `(i32 i32) -> (i32)` |
| 47 | `a6sb.QgJC` | func | `(i32) -> (i32)` |
| 48 | `a6sb.Gd2P` | func | `(i32) -> (i32)` |
| 49 | `a6sb.TkWl` | func | `(i32) -> (i32)` |
| 50 | `a6sb.X2Rq` | func | `(i32 i32) -> ()` |
| 51 | `a6sb.sEXX` | func | `(i32) -> (i32)` |
| 52 | `a6sb.MMTr` | func | `(i32) -> ()` |
| 53 | `a6sb.lQqO` | func | `(i32 i32) -> (i32)` |
| 54 | `a6sb.ebl0` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `a6sb.sJx0` | func | `(i32) -> (i32)` |
| 56 | `a6sb.EKIj` | func | `(i32 i32 i32) -> ()` |
| 57 | `a6sb.Riyr` | func | `(i32 i32) -> ()` |
| 58 | `a6sb.ftqs` | func | `(i32) -> (i32)` |
| 59 | `a6sb.cxea` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `a6sb.rybP` | func | `(i32) -> ()` |
| 61 | `a6sb.KRU4` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `a6sb.jCXS` | func | `(i32) -> ()` |
| 63 | `a6sb.ErTW` | func | `(i32 i32 i32) -> ()` |
| 64 | `a6sb.JTax` | func | `(i32 i32) -> ()` |
| 65 | `a6sb.iTP4` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `a6sb.R8uU` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `a6sb.VNoF` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `a6sb.j84x` | func | `(i32 i32 f64) -> ()` |
| 69 | `a6sb.SVMZ` | func | `(i32) -> (i32)` |
| 70 | `a6sb.MObg` | func | `(i32 i32) -> ()` |
| 71 | `a6sb.to03` | func | `(i32 i32 i32) -> ()` |
| 72 | `a6sb.TEuE` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `a6sb.Y4FF` | func | `(i32 i32 i32) -> ()` |
| 74 | `a6sb.yBFb` | func | `(i32) -> ()` |
| 75 | `a6sb.Pglo` | func | `(i32 i32) -> ()` |
| 76 | `a6sb.RgEM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `a6sb.AqnQ` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `a6sb.tswH` | func | `(i32 i32 i32) -> ()` |
| 79 | `a6sb.grIJ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `a6sb.RiyU` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `a6sb.NjPW` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `a6sb.ICpk` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `a6sb.m0dR` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `a6sb.uMJi` | func | `(i32 i32 i32) -> ()` |
| 85 | `a6sb.ZHjV` | func | `(i32 i32) -> (i32)` |
| 86 | `a6sb.trew` | func | `(i32) -> (i32)` |
| 87 | `a6sb.t9Ym` | func | `(i32) -> (i32)` |
| 88 | `a6sb.B5JZ` | func | `(i32) -> (i32)` |
| 89 | `a6sb.HUcP` | func | `(i32 i32) -> (i32)` |
| 90 | `a6sb.z7qS` | func | `(i32) -> ()` |
| 91 | `a6sb.UfLE` | func | `(i32) -> (i32)` |
| 92 | `a6sb.Mxjx` | func | `(i32 i32) -> (i32)` |
| 93 | `a6sb.QMjv` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `a6sb.sDLA` | func | `(i32 i32 i32) -> ()` |
| 95 | `a6sb.m9bx` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `a6sb.bbDX` | func | `() -> (f64)` |
| 97 | `a6sb.EtPn` | func | `() -> (f64)` |
| 98 | `a6sb.vGTb` | func | `(i32 i32) -> ()` |
| 99 | `a6sb.u34W` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `a6sb.g5dn` | func | `(i32) -> (i32)` |
| 101 | `a6sb.iRlu` | func | `(i32) -> (i32)` |
| 102 | `a6sb.e9yJ` | func | `(i32) -> (i32)` |
| 103 | `a6sb.R6Cb` | func | `() -> (i32)` |
| 104 | `a6sb.kwYF` | func | `() -> (i32)` |
| 105 | `a6sb.BNmW` | func | `() -> (i32)` |
| 106 | `a6sb.cguF` | func | `() -> (i32)` |
| 107 | `a6sb.EYmH` | func | `(i32 i32) -> (i32)` |
| 108 | `a6sb.dhX4` | func | `(i32) -> ()` |
| 109 | `a6sb.y4CU` | func | `(i32 i32) -> (i32)` |
| 110 | `a6sb.RIGY` | func | `(i32) -> (i32)` |
| 111 | `a6sb.sLsW` | func | `() -> (f64)` |
| 112 | `a6sb.o7Gt` | func | `(i32) -> (i32)` |
| 113 | `a6sb.G69F` | func | `(i32 i32) -> ()` |
| 114 | `a6sb.w2sC` | func | `(i32 i32) -> ()` |
| 115 | `a6sb.Q692` | func | `(i32 i32) -> ()` |
| 116 | `a6sb.AZcr` | func | `(i32 f32) -> ()` |
| 117 | `a6sb.JEq1` | func | `(i32 f32) -> ()` |
| 118 | `a6sb.NIHi` | func | `(i32 i32) -> ()` |
| 119 | `a6sb.nZVA` | func | `(i32 i32) -> ()` |
| 120 | `a6sb.gJDy` | func | `(i32 i32) -> ()` |
| 121 | `a6sb.xQY0` | func | `(i32 i32) -> ()` |
| 122 | `a6sb.Ub7C` | func | `(i32 i32 i32) -> ()` |
| 123 | `a6sb.FtYH` | func | `(i32 i32) -> (i32)` |
| 124 | `a6sb.QpWa` | func | `(i32 i32) -> ()` |
| 125 | `a6sb.P5oK` | func | `(i32 i32) -> ()` |
| 126 | `a6sb.JMIr` | func | `(i32 i32) -> ()` |
| 127 | `a6sb.W4E8` | func | `(i32 i32) -> ()` |
| 128 | `a6sb.JT0g` | func | `(i32 f64) -> ()` |
| 129 | `a6sb.cOaQ` | func | `(i32 f64) -> ()` |
| 130 | `a6sb.q2xI` | func | `(i32 i32) -> ()` |
| 131 | `a6sb.UYXe` | func | `(i32 i32 i32) -> ()` |
| 132 | `a6sb.I1wc` | func | `(i32 i32) -> ()` |
| 133 | `a6sb.JJc7` | func | `(i32 i32) -> (i32)` |
| 134 | `a6sb.h8sv` | func | `(i32 i32 i32) -> ()` |
| 135 | `a6sb.uhsO` | func | `(i32 i32 i32) -> ()` |
| 136 | `a6sb.y0nW` | func | `(i32 i32) -> (i32)` |
| 137 | `a6sb.og0w` | func | `(i32 i32) -> (i32)` |
| 138 | `a6sb.cETj` | func | `(i32 i32 i32) -> ()` |
| 139 | `a6sb.ZkpA` | func | `(i32 i32 i32) -> ()` |
| 140 | `a6sb.Ltv5` | func | `(i32 i32) -> (i32)` |
| 141 | `a6sb.KzPW` | func | `(i32 i32) -> ()` |
| 142 | `a6sb.qFVg` | func | `(i32 i32) -> ()` |
| 143 | `a6sb.brUL` | func | `(i32 i32) -> ()` |
| 144 | `a6sb.JIrA` | func | `(i32 i32) -> ()` |
| 145 | `a6sb.gdyR` | func | `(i32 i32) -> ()` |
| 146 | `a6sb.Y6fk` | func | `(i32 i32) -> ()` |
| 147 | `a6sb.GBk5` | func | `(i32 i32) -> ()` |
| 148 | `a6sb.NZZ1` | func | `(i32 f64) -> ()` |
| 149 | `a6sb.HhgI` | func | `(i32 i32) -> ()` |
| 150 | `a6sb.dTUj` | func | `(i32 i32) -> ()` |
| 151 | `a6sb.DLVt` | func | `(i32 i32) -> ()` |
| 152 | `a6sb.ngoV` | func | `(i32 i32) -> ()` |
| 153 | `a6sb.uhSw` | func | `(i32 i32) -> ()` |
| 154 | `a6sb.gP4W` | func | `(i32 i32) -> ()` |
| 155 | `a6sb.QKqG` | func | `(i32 i32) -> ()` |
| 156 | `a6sb.gNR6` | func | `(i32 i32) -> ()` |
| 157 | `a6sb.Lrem` | func | `(i32 i32) -> ()` |
| 158 | `a6sb.Xycy` | func | `(i32 i32 i32) -> ()` |
| 159 | `a6sb.hA8H` | func | `(i32 i32 i32) -> ()` |
| 160 | `a6sb.xza4` | func | `(i32 i32) -> (i32)` |
| 161 | `a6sb.hk2B` | func | `(i32 i32) -> (i32)` |
| 162 | `a6sb.Cbq6` | func | `(i32 i32) -> ()` |
| 163 | `a6sb.gDq3` | func | `(i32 i32) -> ()` |
| 164 | `a6sb.tom7` | func | `(i32 f64) -> ()` |
| 165 | `a6sb.NTR4` | func | `(i32 i32) -> ()` |
| 166 | `a6sb.GYTn` | func | `(i32 i32) -> ()` |
| 167 | `a6sb.W4sU` | func | `(i32 i32) -> ()` |
| 168 | `a6sb.za34` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `a6sb.SywU` | func | `(i32 f64) -> ()` |
| 170 | `a6sb.E0VA` | func | `(i32 f64) -> ()` |
| 171 | `a6sb.iB8R` | func | `(i32 f64) -> ()` |
| 172 | `a6sb.M5gY` | func | `(i32 f64) -> ()` |
| 173 | `a6sb.ONzw` | func | `(i32 i32) -> ()` |
| 174 | `a6sb.Nvbe` | func | `(i32 i32) -> ()` |
| 175 | `a6sb.q1Uz` | func | `(i32 i32) -> ()` |
| 176 | `a6sb.IFr4` | func | `(i32 i32) -> ()` |
| 177 | `a6sb.ZKPL` | func | `(i32 i32) -> ()` |
| 178 | `a6sb.ZO7G` | func | `(i32 i32 i32) -> ()` |
| 179 | `a6sb.ZB70` | func | `(i32 i32) -> ()` |
| 180 | `a6sb.u7Eb` | func | `(i32 f32) -> ()` |
| 181 | `a6sb.plu6` | func | `(i32 i32) -> ()` |
| 182 | `a6sb.RNdL` | func | `(i32 i32) -> ()` |
| 183 | `a6sb.OcXE` | func | `(i32 i32) -> ()` |
| 184 | `a6sb.tqq5` | func | `(i32 i32) -> ()` |
| 185 | `a6sb.bLmG` | func | `(i32 i32) -> ()` |
| 186 | `a6sb.B94E` | func | `(i32 i32) -> ()` |
| 187 | `a6sb.Dn1B` | func | `(i32 i32) -> ()` |
| 188 | `a6sb.F8aD` | func | `(i32 i32) -> ()` |
| 189 | `a6sb.lapg` | func | `(i32 i32) -> ()` |
| 190 | `a6sb.xjep` | func | `(i32 i32) -> ()` |
| 191 | `a6sb.P2o8` | func | `(i32 i32) -> ()` |
| 192 | `a6sb.aVEc` | func | `(i32 i32) -> ()` |
| 193 | `a6sb.DGRV` | func | `(i32 i32) -> (i32)` |
| 194 | `a6sb.j0UU` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `a6sb.VyfP` | func | `(i32 i32) -> ()` |
| 196 | `a6sb.Tsm9` | func | `(i32 i32 i32) -> ()` |
| 197 | `a6sb.zflh` | func | `(i32 i32) -> (i32)` |
| 198 | `a6sb.R95s` | func | `(i32) -> (i32)` |
| 199 | `a6sb.wIpA` | func | `(i32 i32) -> ()` |
| 200 | `a6sb.jKNF` | func | `(i32 i32) -> ()` |
| 201 | `a6sb.SblS` | func | `(i32 i32) -> ()` |
| 202 | `a6sb.Iw8s` | func | `(i32 i32) -> ()` |
| 203 | `a6sb.Krr4` | func | `(i32 i32) -> ()` |
| 204 | `a6sb.oNzr` | func | `(i32 i32) -> ()` |
| 205 | `a6sb.eBjE` | func | `(i32 i32) -> ()` |
| 206 | `a6sb.bScK` | func | `(i32 i32) -> ()` |
| 207 | `a6sb.Bnxr` | func | `(i32) -> (i32)` |
| 208 | `a6sb.Ghp6` | func | `(i32 i32 i32) -> ()` |
| 209 | `a6sb.Vdn6` | func | `(i32 i32) -> ()` |
| 210 | `a6sb.unYg` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `a6sb.lCPT` | func | `(i32 i32) -> ()` |
| 212 | `a6sb.QKwq` | func | `(i32) -> ()` |
| 213 | `a6sb.jmJ6` | func | `(i32 i32) -> ()` |
| 214 | `a6sb.oUmw` | func | `(i32) -> (i32)` |
| 215 | `a6sb.mBtm` | func | `(i32 i32 i32) -> ()` |
| 216 | `a6sb.qC3B` | func | `(i32 i32) -> ()` |
| 217 | `a6sb.lDoC` | func | `(i32 i32) -> ()` |
| 218 | `a6sb.Vw3o` | func | `(i32 i32) -> ()` |
| 219 | `a6sb.zwN9` | func | `(i32 i32) -> ()` |
| 220 | `a6sb.Qd01` | func | `(i32 i32) -> (i32)` |
| 221 | `a6sb.S9QJ` | func | `(i32 i32) -> ()` |
| 222 | `a6sb.kqIj` | func | `(i32 i32) -> ()` |
| 223 | `a6sb.Lzzr` | func | `(i32 i32) -> ()` |
| 224 | `a6sb.KAdP` | func | `(i32 i32) -> ()` |
| 225 | `a6sb.u5TV` | func | `(i32 i32) -> ()` |
| 226 | `a6sb.zed6` | func | `(i32 i32) -> ()` |
| 227 | `a6sb.RTKV` | func | `(i32 i32) -> ()` |
| 228 | `a6sb.zoih` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `a6sb.FB4l` | func | `(i32) -> (i32)` |
| 230 | `a6sb.aUPJ` | func | `(i32) -> ()` |
| 231 | `a6sb.agtZ` | func | `(i32 f64) -> ()` |
| 232 | `a6sb.UNVL` | func | `(i32 i32) -> ()` |
| 233 | `a6sb.SH8j` | func | `(i32 i32) -> ()` |
| 234 | `a6sb.d7zS` | func | `(i32 i32 i32) -> ()` |
| 235 | `a6sb.xVYx` | func | `(i32 i32) -> (i32)` |
| 236 | `a6sb.jCkd` | func | `(i32 i32) -> ()` |
| 237 | `a6sb.JkPB` | func | `(i32 i32) -> ()` |
| 238 | `a6sb.WQje` | func | `(i32 i32) -> ()` |
| 239 | `a6sb.ngts` | func | `(i32 i32 i32) -> ()` |
| 240 | `a6sb.CfVC` | func | `(i32 i32) -> ()` |
| 241 | `a6sb.XdcP` | func | `(i32 i32) -> ()` |
| 242 | `a6sb.k7cf` | func | `(i32 i32) -> ()` |
| 243 | `a6sb.ZU2c` | func | `(i32 i32 i32) -> ()` |
| 244 | `a6sb.f57S` | func | `(i32 i32) -> ()` |
| 245 | `a6sb.jYD1` | func | `(i32 i32) -> ()` |
| 246 | `a6sb.UfWz` | func | `(i32 i32 i32) -> ()` |
| 247 | `a6sb.FsCg` | func | `(i32 i32) -> (i32)` |
| 248 | `a6sb.ZFVM` | func | `(i32 i32) -> ()` |
| 249 | `a6sb.Njae` | func | `(i32 i32 i32) -> ()` |
| 250 | `a6sb.D2Q6` | func | `(i32 i32) -> ()` |
| 251 | `a6sb.acZQ` | func | `(i32 f64) -> ()` |
| 252 | `a6sb.U3os` | func | `(i32 i32) -> ()` |
| 253 | `a6sb.DDjM` | func | `(i32 f64) -> ()` |
| 254 | `a6sb.ZGet` | func | `(i32 i32 i32) -> ()` |
| 255 | `a6sb.l3Ao` | func | `(i32 i32) -> ()` |
| 256 | `a6sb.ArnK` | func | `(i32 i32 i32) -> ()` |
| 257 | `a6sb.aTRl` | func | `(i32 i32) -> ()` |
| 258 | `a6sb.c6Yw` | func | `(i32 i32) -> ()` |
| 259 | `a6sb.A9WU` | func | `(i32 i32) -> ()` |
| 260 | `a6sb.M2YA` | func | `(i32 i32 i32) -> ()` |
| 261 | `a6sb.k9Wn` | func | `(i32 i32) -> ()` |
| 262 | `a6sb.Kid4` | func | `(i32 i32) -> ()` |
| 263 | `a6sb.j5NU` | func | `(i32 i32) -> ()` |
| 264 | `a6sb.uOVn` | func | `(i32 i32) -> ()` |
| 265 | `a6sb.QXwy` | func | `(i32 f32) -> ()` |
| 266 | `a6sb.nK0X` | func | `(i32 f32) -> ()` |
| 267 | `a6sb.BAmM` | func | `(i32 i32) -> ()` |
| 268 | `a6sb.wGlT` | func | `(i32 i32) -> ()` |
| 269 | `a6sb.jbc4` | func | `(i32 i32) -> ()` |
| 270 | `a6sb.oIzm` | func | `(i32 i32) -> ()` |
| 271 | `a6sb.CA8A` | func | `(i32 i32) -> ()` |
| 272 | `a6sb.QePN` | func | `(i32 i32) -> ()` |
| 273 | `a6sb.Lm2i` | func | `(i32 i32) -> ()` |
| 274 | `a6sb.hzMr` | func | `(i32 i32) -> ()` |
| 275 | `a6sb.hyLS` | func | `(i32 i32) -> ()` |
| 276 | `a6sb.HDDZ` | func | `(i32 i32) -> ()` |
| 277 | `a6sb.abdE` | func | `(i32 i32) -> ()` |
| 278 | `a6sb.pA1k` | func | `(i32 i32) -> ()` |
| 279 | `a6sb.MzIT` | func | `(i32 i32) -> ()` |
| 280 | `a6sb.PHg1` | func | `(i32 i32) -> ()` |
| 281 | `a6sb.dD9C` | func | `(i32 i32) -> ()` |
| 282 | `a6sb.SA3a` | func | `(i32 i32) -> ()` |
| 283 | `a6sb.PhUv` | func | `(i32 i32) -> ()` |
| 284 | `a6sb.o5HR` | func | `(i32 i32) -> ()` |
| 285 | `a6sb.RABs` | func | `(i32 i32 i32) -> ()` |
| 286 | `a6sb.CbmC` | func | `(i32 i32 i32) -> ()` |
| 287 | `a6sb.SJFB` | func | `(i32 i32) -> ()` |
| 288 | `a6sb.v9P5` | func | `(i32 i32) -> ()` |
| 289 | `a6sb.B9Mx` | func | `(i32 i32) -> ()` |
| 290 | `a6sb.ePes` | func | `(i32 i32) -> ()` |
| 291 | `a6sb.N1CO` | func | `(i32 i32) -> ()` |
| 292 | `a6sb.zHJU` | func | `(i32 i32) -> ()` |
| 293 | `a6sb.tHkI` | func | `(i32 i32) -> ()` |
| 294 | `a6sb.vWcK` | func | `(i32 i32) -> ()` |
| 295 | `a6sb.MBHY` | func | `(i32 i32) -> ()` |
| 296 | `a6sb.Xe3X` | func | `(i32 i32) -> ()` |
| 297 | `a6sb.faU0` | func | `(i32 i32) -> ()` |
| 298 | `a6sb.p8xs` | func | `(i32 i32) -> (i32)` |
| 299 | `a6sb.IGBk` | func | `(i32 i32) -> ()` |
| 300 | `a6sb.ywwN` | func | `(i32 i32 i32) -> ()` |
| 301 | `a6sb.uXMD` | func | `(i32 i32) -> ()` |
| 302 | `a6sb.FNmW` | func | `(i32 i32) -> ()` |
| 303 | `a6sb.KzAa` | func | `(i32 i32) -> ()` |
| 304 | `a6sb.deWm` | func | `(i32 i32 i32) -> ()` |
| 305 | `a6sb.bEUW` | func | `(i32 i32) -> (i32)` |
| 306 | `a6sb.MkQn` | func | `(i32 i32 i32) -> ()` |
| 307 | `a6sb.ZRUk` | func | `(i32 i32 i32) -> ()` |
| 308 | `a6sb.IAL3` | func | `(i32 i32) -> ()` |
| 309 | `a6sb.tWyV` | func | `(i32 i32) -> ()` |
| 310 | `a6sb.DZgB` | func | `(i32 i32) -> ()` |
| 311 | `a6sb.RCSK` | func | `(i32 i32) -> ()` |
| 312 | `a6sb.hRNo` | func | `(i32 i32) -> (i32)` |
| 313 | `a6sb.H6Ug` | func | `(i32) -> (i32)` |
| 314 | `a6sb.qOJ3` | func | `(i32) -> (i32)` |
| 315 | `a6sb.xvAJ` | func | `(i32) -> (i32)` |
| 316 | `a6sb.H7mG` | func | `(i32) -> (i32)` |
| 317 | `a6sb.VfXk` | func | `(i32) -> (i32)` |
| 318 | `a6sb.i2Ox` | func | `(i32) -> (i32)` |
| 319 | `a6sb.HQgK` | func | `(i32) -> (i32)` |
| 320 | `a6sb.AqSM` | func | `(i32) -> (i32)` |
| 321 | `a6sb.xsiQ` | func | `(i32) -> (i32)` |
| 322 | `a6sb.m22Q` | func | `(i32) -> (i32)` |
| 323 | `a6sb.pmty` | func | `(i32) -> (i32)` |
| 324 | `a6sb.jnwR` | func | `(i32) -> (i32)` |
| 325 | `a6sb.nby8` | func | `(i32) -> (i32)` |
| 326 | `a6sb.pNWj` | func | `(i32) -> (i32)` |
| 327 | `a6sb.x6nP` | func | `(i32) -> (f64)` |
| 328 | `a6sb.FFih` | func | `(i32) -> (f64)` |
| 329 | `a6sb.zQPX` | func | `(i32) -> (i32)` |
| 330 | `a6sb.BOCh` | func | `(i32) -> (f64)` |
| 331 | `a6sb.ZSbz` | func | `(i32) -> (i32)` |
| 332 | `a6sb.LevH` | func | `(i32) -> (i32)` |
| 333 | `a6sb.rNRh` | func | `(i32) -> (i32)` |
| 334 | `a6sb.y4Es` | func | `(i32) -> (i32)` |
| 335 | `a6sb.v7nY` | func | `(i32) -> (i32)` |
| 336 | `a6sb.mPYs` | func | `(i32) -> (i32)` |
| 337 | `a6sb.UwOC` | func | `(i32) -> (i32)` |
| 338 | `a6sb.Bqd6` | func | `(i32) -> (i32)` |
| 339 | `a6sb.Xeci` | func | `(i32) -> (i32)` |
| 340 | `a6sb.TObG` | func | `(i32) -> (i32)` |
| 341 | `a6sb.EKja` | func | `(i32) -> (i32)` |
| 342 | `a6sb.tDBi` | func | `(i32) -> (i32)` |
| 343 | `a6sb.AhpV` | func | `(i32) -> (i32)` |
| 344 | `a6sb.dKgu` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `a6sb.uwnm` | func | `() -> (i32)` |
| 346 | `a6sb.EhTj` | func | `(i32 i32) -> ()` |
| 347 | `a6sb.fxvW` | func | `(i32 i32 i32) -> ()` |
| 348 | `a6sb.CjIU` | func | `(i32 i32 i32) -> ()` |
| 349 | `a6sb.Cgu3` | func | `(i32 i32) -> (i32)` |
| 350 | `a6sb.Ug8Y` | func | `(i32) -> (i32)` |
| 351 | `a6sb.Yku4` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `a6sb.HMb6` | func | `(i32) -> ()` |
| 353 | `a6sb.fndN` | func | `(i32) -> (i32)` |
| 354 | `a6sb.nqEo` | func | `(i32 i32) -> ()` |
| 355 | `a6sb.X5oB` | func | `(i32) -> (i32)` |
| 356 | `a6sb.AK9W` | func | `(i32) -> (i32)` |
| 357 | `a6sb.XhAi` | func | `(i32) -> (i32)` |
| 358 | `a6sb.KLMi` | func | `(i32) -> (i32)` |
| 359 | `a6sb.d35c` | func | `(i32) -> (i32)` |
| 360 | `a6sb.ndjp` | func | `(i32 i32) -> ()` |
| 361 | `a6sb.vPB7` | func | `(i32 i32) -> ()` |
| 362 | `a6sb.VASq` | func | `(i32 i32) -> ()` |
| 363 | `a6sb.WIwR` | func | `(i32 i32) -> ()` |
| 364 | `a6sb.nIna` | func | `(i32 i32) -> ()` |
| 365 | `a6sb.bW9V` | func | `(i32 i32) -> ()` |
| 366 | `a6sb.gHtZ` | func | `(i32 i32) -> ()` |
| 367 | `a6sb.OvLk` | func | `(i32 i32 i32) -> ()` |
| 368 | `a6sb.AdVH` | func | `(i32 i32) -> ()` |
| 369 | `a6sb.tF82` | func | `(i32 i32) -> (i32)` |
| 370 | `a6sb.RKeS` | func | `(i32) -> (i32)` |
| 371 | `a6sb.ZBZR` | func | `(i32) -> (i32)` |
| 372 | `a6sb.UFFT` | func | `(i32 i32) -> ()` |
| 373 | `a6sb.ZwAJ` | func | `(i32) -> (i32)` |
| 374 | `a6sb.l215` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `a6sb.c5hw` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `a6sb.c7aB` | func | `(i32 i32) -> ()` |
| 377 | `a6sb.TKqn` | func | `(i32) -> (i32)` |
| 378 | `a6sb.FOxE` | func | `(i32) -> (i32)` |
| 379 | `a6sb.n3fr` | func | `(i32) -> (i32)` |
| 380 | `a6sb.WOuY` | func | `(i32) -> (i32)` |
| 381 | `a6sb.unoI` | func | `(i32) -> (i32)` |
| 382 | `a6sb.xvov` | func | `(i32) -> (i32)` |
| 383 | `a6sb.AZrW` | func | `(i32 i32) -> ()` |
| 384 | `a6sb.fo90` | func | `(i32 i32) -> (i32)` |
| 385 | `a6sb.ou7b` | func | `(i32 i32) -> (i32)` |
| 386 | `a6sb.msuK` | func | `(i32 i32) -> (i32)` |
| 387 | `a6sb.lXsE` | func | `(i32 i32) -> (i32)` |
| 388 | `a6sb.EKOe` | func | `(i32 i32) -> (i32)` |
| 389 | `a6sb.JEwy` | func | `(i32 i32) -> (i32)` |
| 390 | `a6sb.xquk` | func | `(f64) -> (i32)` |
| 391 | `a6sb.Cwki` | func | `(i32 i32) -> (i32)` |
| 392 | `a6sb.ELii` | func | `(i32 i32) -> (i32)` |

## Exports

159 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `CgUm` | func | 798 | `(i32 i32) -> (i32)` |
| `H6kM` | func | 1462 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `lgsS` | func | 1540 | `(i32 i32 i32 i32) -> ()` |
| `V83c` | func | 2413 | `(i32 i32) -> (i32)` |
| `UJKV` | func | 1673 | `(i32 i32) -> ()` |
| `ICoa` | func | 2641 | `() -> (i32)` |
| `hWRI` | func | 2582 | `(i32) -> (i32)` |
| `TVhe` | func | 1556 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Ztx1` | func | 896 | `(i32 i32) -> (i32)` |
| `RkoA` | func | 830 | `(i32) -> (i32)` |
| `wJgn` | func | 2674 | `() -> (i32)` |
| `l5jX` | func | 3165 | `(i32 i32 i32 i32) -> ()` |
| `ZYPW` | func | 2584 | `(i32 i32) -> (i32)` |
| `VzMx` | func | 2557 | `(i32) -> ()` |
| `LefZ` | func | 2535 | `(i32) -> (i32)` |
| `y7OX` | func | 3102 | `(i32 i32 i32) -> (i32 i32)` |
| `zXxC` | func | 3140 | `() -> (i32 i32)` |
| `I8oG` | func | 1518 | `() -> (i32)` |
| `zlHu` | func | 3115 | `(i32 i32) -> (i32 i32)` |
| `DSpe` | func | 2902 | `(i32) -> ()` |
| `xCIq` | func | 2575 | `(i32 i32) -> ()` |
| `E0MG` | func | 2591 | `(i32) -> (i32)` |
| `khsu` | func | 3079 | `(i32 i32 i32 i32) -> (i32)` |
| `QhpB` | func | 2461 | `(i32 i32 i32 i32) -> (i32)` |
| `olLu` | func | 2111 | `(i32 f64 f64 f64) -> (i32)` |
| `hm42` | func | 1293 | `(i32 i32 i32 i32) -> (i32)` |
| `TRlG` | func | 760 | `(i32 i32) -> (i32)` |
| `AhSs` | func | 2506 | `(i32) -> (i32)` |
| `r55s` | func | 3114 | `(i32 i32) -> (i32 i32)` |
| `mcPD` | func | 3072 | `(i32 i32) -> (i32)` |
| `K8hd` | func | 1949 | `(i32 i32) -> ()` |
| `tssR` | func | 1906 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `TObu` | func | 2263 | `(i32 i32) -> (i32)` |
| `lJ4t` | func | 3317 | `() -> (i32)` |
| `FuxK` | func | 2415 | `(i32 i32) -> (i32)` |
| `QjOq` | func | 2334 | `(i32 f64) -> (i32)` |
| `zUxe` | func | 1561 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WgGY` | func | 2878 | `(i32) -> (i32)` |
| `vi9N` | func | 3116 | `(i32 i32) -> (i32 i32)` |
| `aHJ8` | global | 2 | `` |
| `iArZ` | func | 2550 | `(i32) -> (f64)` |
| `Qx3h` | func | 2889 | `(i32) -> (i32)` |
| `dFwQ` | func | 1372 | `(i32 i32) -> (i32)` |
| `S6cz` | func | 2559 | `(i32) -> (i32)` |
| `ROxV` | func | 1899 | `() -> (i32)` |
| `drHY` | func | 1463 | `(i32 f64 f64) -> (i32)` |
| `RsZ8` | func | 3125 | `(i32) -> (i32 i32)` |
| `pLeQ` | func | 2853 | `(i32) -> (i32)` |
| `WuyM` | func | 1600 | `(i32 i32) -> (i32)` |
| `BvMb` | func | 3113 | `(i32 i32) -> (i32 i32)` |
| `xsMj` | func | 2038 | `(i32 i32 i32 i32) -> ()` |
| `xelV` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `zyBJ` | func | 3085 | `(i32 i32) -> ()` |
| `Sel9` | func | 1586 | `(i32 i32) -> (i32)` |
| `kO6c` | func | 2554 | `(i32) -> (i32)` |
| `ldi2` | func | 2560 | `(i32) -> (i32)` |
| `JTPz` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `zg3C` | func | 3103 | `(i32 i32 i32) -> (i32 i32)` |
| `NusS` | func | 3123 | `(i32) -> (i32 i32)` |
| `MxGl` | func | 2070 | `(i32 i32) -> ()` |
| `FxPa` | func | 3289 | `() -> (f64)` |
| `CLRa` | func | 3110 | `(i32 i32) -> (i32 i32)` |
| `JJLR` | func | 1646 | `(i32) -> (i32)` |
| `CHbg` | func | 1341 | `(i32 i32 i32) -> (i32)` |
| `AKjT` | func | 2534 | `(i32 i32) -> ()` |
| `vKSx` | func | 1572 | `(i32 i32) -> (i32)` |
| `sKkV` | func | 3234 | `(i32 i32 i32) -> ()` |
| `E0JE` | func | 1487 | `(i32 i32) -> (i32)` |
| `hQuT` | func | 1323 | `(i32 i32) -> (i32)` |
| `pFDS` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `GgL8` | func | 1345 | `(i32 i32 i32) -> ()` |
| `GI5R` | func | 3176 | `(i32 i32 i32) -> ()` |
| `pMD9` | func | 2592 | `(i32) -> (i32)` |
| `RW1U` | func | 2553 | `(i32) -> (i32)` |
| `NSy3` | func | 1602 | `(i32 f64) -> (f64)` |
| `ZXwV` | func | 2576 | `(i32) -> (i32)` |
| `CWEC` | func | 2489 | `(i32) -> (i32)` |
| `maBb` | func | 2019 | `(i32) -> (i32)` |
| `rtqB` | func | 2095 | `(i32 f64) -> (i32)` |
| `zkIw` | func | 3103 | `(i32 i32 i32) -> (i32 i32)` |
| `Gc8F` | func | 1803 | `(i32) -> (i32)` |
| `APxw` | func | 3174 | `(i32 i32 i32) -> (i32)` |
| `ckuG` | func | 2414 | `(i32 i32) -> (i32)` |
| `TEaj` | func | 1599 | `(i32 i32) -> (i32)` |
| `uvJc` | func | 1197 | `(i32 i32) -> ()` |
| `EueF` | func | 2149 | `(i32 i32) -> (i32)` |
| `j9NY` | func | 3293 | `(i32) -> (i32)` |
| `OCgC` | func | 1922 | `(i32 i32 i32 i32) -> (i32)` |
| `KcBu` | func | 1663 | `(i32 i32) -> (i32)` |
| `sF1x` | func | 1196 | `(i32 i32) -> (i32)` |
| `mTN0` | func | 2224 | `(i32 i32) -> (i32)` |
| `QqgZ` | func | 1967 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `oWgw` | func | 3111 | `(i32 i32) -> (i32 i32)` |
| `ayzf` | func | 1678 | `(i32 f64 f64 f64) -> (i32)` |
| `jekX` | func | 1398 | `(i32) -> ()` |
| `FfnR` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `o5d8` | func | 3127 | `(i32) -> (i32 i32)` |
| `ulwJ` | func | 1822 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `J0yf` | func | 3103 | `(i32 i32 i32) -> (i32 i32)` |
| `BtHf` | func | 2447 | `(i32 i32) -> (i32)` |
| `qw4d` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `L9Gk` | func | 3112 | `(i32 i32) -> (i32 i32)` |
| `nJiE` | func | 1674 | `(i32 i32) -> ()` |
| `Ck67` | func | 2574 | `(i32) -> (i32)` |
| `m2mW` | func | 3124 | `(i32) -> (i32 i32)` |
| `YneQ` | func | 2861 | `(i32) -> (i32)` |
| `x4sL` | func | 3245 | `() -> ()` |
| `D6dz` | func | 1253 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ivFm` | func | 2412 | `(i32 i32) -> (i32)` |
| `d62h` | func | 3318 | `() -> (i32)` |
| `oZ7z` | func | 3243 | `(i32) -> ()` |
| `zzxX` | func | 1960 | `(i32 i32) -> (i32)` |
| `Oyc2` | func | 1781 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `zCgZ` | func | 3126 | `(i32) -> (i32 i32)` |
| `XRU3` | func | 1300 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `FrVF` | func | 2283 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `iALl` | func | 2360 | `(i32 i32) -> ()` |
| `Ouki` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `ETux` | func | 3139 | `() -> (i32 i32)` |
| `ezhz` | func | 1565 | `(i32 i32 i32 i32) -> (i32)` |
| `NkFO` | func | 1974 | `(i32) -> ()` |
| `nMmY` | func | 2593 | `(i32) -> (i32)` |
| `sRyg` | func | 3052 | `() -> ()` |
| `saMd` | func | 2569 | `(i32 i32) -> ()` |
| `dMvn` | func | 1841 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `EjQI` | func | 2551 | `(i32) -> (i32)` |
| `dgTo` | func | 2552 | `(i32) -> (i32)` |
| `ddL2` | func | 2925 | `(i32) -> (i32)` |
| `j90H` | func | 2624 | `(i32 i32) -> ()` |
| `NvVg` | func | 1944 | `(i32 i32 f64 f64 f64) -> ()` |
| `XZaS` | func | 1292 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `p6cs` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `Vtda` | func | 2573 | `(i32) -> (i32)` |
| `R46H` | func | 1366 | `(i32) -> (i32)` |
| `LIbC` | func | 1975 | `(i32) -> ()` |
| `oo2R` | func | 2555 | `(i32) -> (i32)` |
| `WT3e` | func | 3294 | `(i32) -> ()` |
| `QVNu` | func | 1613 | `(i32 i32 i32) -> (i32)` |
| `ccd3` | func | 3204 | `() -> (i32)` |
| `oiz2` | func | 1828 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NU0H` | func | 2333 | `(i32 i32) -> ()` |
| `DL2y` | func | 771 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vxGq` | func | 1717 | `(i32 i32 i32 i32) -> (i32)` |
| `hhKO` | func | 2556 | `(i32) -> (i32)` |
| `RSXb` | func | 2673 | `(i32 i32) -> ()` |
| `rhXS` | func | 969 | `(i32 i32) -> (i32)` |
| `wbVy` | func | 2128 | `(i32 i32) -> ()` |
| `ZQYK` | func | 2558 | `(i32) -> (i32)` |
| `MoMf` | func | 1633 | `(i32 i32 i32 i32) -> (i32)` |
| `jGnI` | func | 3103 | `(i32 i32 i32) -> (i32 i32)` |
| `CGpX` | func | 659 | `(i32 i32 i32) -> (i32)` |
| `JDN7` | func | 1566 | `(i32) -> (i32)` |
| `oIdk` | func | 2468 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `dY9o` | func | 2583 | `(i32 i32) -> (i32)` |
| `XPre` | global | 1 | `` |
| `tAbE` | func | 2036 | `(i32) -> (i32)` |
| `uxBX` | func | 1412 | `(i32 i32 i32) -> (i32)` |
| `BJMH` | func | 1513 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |

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
