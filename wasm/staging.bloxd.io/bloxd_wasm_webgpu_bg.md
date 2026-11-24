# WASM module: `bloxd_wasm_webgpu_bg`

> environment **staging.bloxd.io** · build `fqwnlq.985c8f39` · analyzed 2026-11-24T11:40:16+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgpu_bg.b330d4d2dfe4c67c33ea.wasm
> 5,121,239 bytes (4.9 MB) · sha256 `b036ba0a8b102369…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,121,311 → 5,121,239 bytes (-72)
- defined functions 2,938 → 2,939
- code bytes 4,038,839 → 4,038,764
- name-section module id `d7baa99dc60ddd5c.12254` → `2da0e43baa4a60f0.12255`
- export identifiers rotated by the obfuscator: 1/159 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,939 / 393 |
| Exports / imports | 159 / 394 |
| Code bytes (function bodies) | 4,038,764 (3.9 MB) |
| Total local variables | 30,716 |
| Instructions (scanable bodies) | 1,889,761 |
| Data segments / bytes | 3,545 / 1,036,149 |
| Element segments / entries | 1 / 837 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `2da0e43baa4a60f0.12255` |
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
| 10 | code | 4,044,122 | 2939 |
| 11 | data | 1,064,826 | 3545 |
| 0 | custom:name | 30 | — |

## Types

176 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `AmHA.JgJg` | memory | `[128..14648]` |
| 0 | `AmHA.nAbj` | func | `(i32) -> (i32)` |
| 1 | `AmHA.vfkn` | func | `(i32) -> (f64)` |
| 2 | `AmHA.v0bH` | func | `() -> (i32)` |
| 3 | `AmHA.L6AJ` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `AmHA.i0RZ` | func | `(i32) -> ()` |
| 5 | `AmHA.L95D` | func | `(i32 i32) -> (i32)` |
| 6 | `AmHA.GHwV` | func | `(i32) -> (i32)` |
| 7 | `AmHA.lONj` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `AmHA.NVPQ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `AmHA.yGXQ` | func | `(i32) -> (i32)` |
| 10 | `AmHA.mrZ0` | func | `(i32 i32) -> ()` |
| 11 | `AmHA.rqYL` | func | `(i32 i32) -> ()` |
| 12 | `AmHA.Wc6X` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `AmHA.alM7` | func | `(i32 i32) -> (i32)` |
| 14 | `AmHA.X9EL` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `AmHA.R7s8` | func | `(i32) -> (i32)` |
| 16 | `AmHA.s8yX` | func | `(i32 i32) -> (i32)` |
| 17 | `AmHA.ZEpy` | func | `(i32 i32) -> (i32)` |
| 18 | `AmHA.VWJm` | func | `(i32 i32) -> ()` |
| 19 | `AmHA.AmJa` | func | `(i32) -> (i32)` |
| 20 | `AmHA.dD4R` | func | `(i32) -> (i32)` |
| 21 | `AmHA.Q4WZ` | func | `(i32 i32 i32) -> ()` |
| 22 | `AmHA.qMKE` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `AmHA.jy2I` | func | `(i32) -> (i32)` |
| 24 | `AmHA.FCKs` | func | `(i32) -> (i32)` |
| 25 | `AmHA.cuIe` | func | `(i32 i32) -> ()` |
| 26 | `AmHA.QD8p` | func | `(i32 i32) -> (i32)` |
| 27 | `AmHA.UL2g` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `AmHA.rw78` | func | `(i32) -> (i32)` |
| 29 | `AmHA.EUrb` | func | `(i32) -> (i32)` |
| 30 | `AmHA.nugN` | func | `(i32) -> (i32)` |
| 31 | `AmHA.EVt1` | func | `(i32) -> (i32)` |
| 32 | `AmHA.OHUx` | func | `(i32) -> (i32)` |
| 33 | `AmHA.AMIR` | func | `(i32 i32 i32) -> ()` |
| 34 | `AmHA.elgy` | func | `(i32 i32) -> (i32)` |
| 35 | `AmHA.IYLj` | func | `(i32) -> (i32)` |
| 36 | `AmHA.VVnv` | func | `(i32) -> ()` |
| 37 | `AmHA.hDVX` | func | `(i32) -> (i32)` |
| 38 | `AmHA.LGPR` | func | `(i32) -> (i32)` |
| 39 | `AmHA.BAvD` | func | `(i32) -> ()` |
| 40 | `AmHA.xQCI` | func | `(i32 i32) -> (i32)` |
| 41 | `AmHA.bln6` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `AmHA.dnlb` | func | `(i32) -> ()` |
| 43 | `AmHA.lH0s` | func | `(i32 i32) -> ()` |
| 44 | `AmHA.cN1w` | func | `() -> (i32)` |
| 45 | `AmHA.uSoX` | func | `(i32 i32) -> (i32)` |
| 46 | `AmHA.ECkW` | func | `(i32 i32) -> (i32)` |
| 47 | `AmHA.Jw6Y` | func | `(i32) -> (i32)` |
| 48 | `AmHA.gzAC` | func | `(i32) -> (i32)` |
| 49 | `AmHA.C8H9` | func | `(i32) -> (i32)` |
| 50 | `AmHA.yQc4` | func | `(i32 i32) -> ()` |
| 51 | `AmHA.NyxW` | func | `(i32) -> (i32)` |
| 52 | `AmHA.sJdk` | func | `(i32) -> ()` |
| 53 | `AmHA.vLkP` | func | `(i32 i32) -> (i32)` |
| 54 | `AmHA.YQ7x` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `AmHA.sLhM` | func | `(i32) -> (i32)` |
| 56 | `AmHA.yA6K` | func | `(i32 i32 i32) -> ()` |
| 57 | `AmHA.t9Lm` | func | `(i32 i32) -> ()` |
| 58 | `AmHA.t6pO` | func | `(i32) -> (i32)` |
| 59 | `AmHA.W1c6` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `AmHA.MUrZ` | func | `(i32) -> ()` |
| 61 | `AmHA.Fhhq` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `AmHA.f5M8` | func | `(i32) -> ()` |
| 63 | `AmHA.I7z8` | func | `(i32 i32 i32) -> ()` |
| 64 | `AmHA.LVic` | func | `(i32 i32) -> ()` |
| 65 | `AmHA.DNT3` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `AmHA.lur4` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `AmHA.N1pH` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `AmHA.gUc4` | func | `(i32 i32 f64) -> ()` |
| 69 | `AmHA.xv1g` | func | `(i32) -> (i32)` |
| 70 | `AmHA.dI8t` | func | `(i32 i32) -> ()` |
| 71 | `AmHA.zT48` | func | `(i32 i32 i32) -> ()` |
| 72 | `AmHA.TZRL` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `AmHA.swM2` | func | `(i32 i32 i32) -> ()` |
| 74 | `AmHA.G7Q0` | func | `(i32) -> ()` |
| 75 | `AmHA.zS4R` | func | `(i32 i32) -> ()` |
| 76 | `AmHA.Gnif` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `AmHA.gnfy` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `AmHA.o3Qu` | func | `(i32 i32 i32) -> ()` |
| 79 | `AmHA.RtVW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `AmHA.rLLO` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `AmHA.QW1G` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `AmHA.xmx3` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `AmHA.gpxH` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `AmHA.j63w` | func | `(i32 i32 i32) -> ()` |
| 85 | `AmHA.I0iA` | func | `(i32 i32) -> (i32)` |
| 86 | `AmHA.KXCk` | func | `(i32) -> (i32)` |
| 87 | `AmHA.Yp80` | func | `(i32) -> (i32)` |
| 88 | `AmHA.UhnM` | func | `(i32) -> (i32)` |
| 89 | `AmHA.G3U7` | func | `(i32 i32) -> (i32)` |
| 90 | `AmHA.U8Op` | func | `(i32) -> ()` |
| 91 | `AmHA.WAOX` | func | `(i32) -> (i32)` |
| 92 | `AmHA.XQ5R` | func | `(i32 i32) -> (i32)` |
| 93 | `AmHA.h2Yh` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `AmHA.jsTU` | func | `(i32 i32 i32) -> ()` |
| 95 | `AmHA.iA67` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `AmHA.mrm4` | func | `() -> (f64)` |
| 97 | `AmHA.XKFp` | func | `() -> (f64)` |
| 98 | `AmHA.adl9` | func | `(i32 i32) -> ()` |
| 99 | `AmHA.kjQF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `AmHA.rj7K` | func | `(i32) -> (i32)` |
| 101 | `AmHA.kzxh` | func | `(i32) -> (i32)` |
| 102 | `AmHA.S4Qk` | func | `(i32) -> (i32)` |
| 103 | `AmHA.UPXy` | func | `() -> (i32)` |
| 104 | `AmHA.XHKV` | func | `() -> (i32)` |
| 105 | `AmHA.E7eq` | func | `() -> (i32)` |
| 106 | `AmHA.ubbH` | func | `() -> (i32)` |
| 107 | `AmHA.vDK4` | func | `(i32 i32) -> (i32)` |
| 108 | `AmHA.ux4Y` | func | `(i32) -> ()` |
| 109 | `AmHA.KUcf` | func | `(i32 i32) -> (i32)` |
| 110 | `AmHA.H4IH` | func | `(i32) -> (i32)` |
| 111 | `AmHA.cKu8` | func | `() -> (f64)` |
| 112 | `AmHA.OZKj` | func | `(i32) -> (i32)` |
| 113 | `AmHA.Xb2s` | func | `(i32 i32) -> ()` |
| 114 | `AmHA.a6Va` | func | `(i32 i32) -> ()` |
| 115 | `AmHA.I0br` | func | `(i32 i32) -> ()` |
| 116 | `AmHA.BNZN` | func | `(i32 f32) -> ()` |
| 117 | `AmHA.e94V` | func | `(i32 f32) -> ()` |
| 118 | `AmHA.DuwR` | func | `(i32 i32) -> ()` |
| 119 | `AmHA.BzFm` | func | `(i32 i32) -> ()` |
| 120 | `AmHA.hoaP` | func | `(i32 i32) -> ()` |
| 121 | `AmHA.xRkE` | func | `(i32 i32) -> ()` |
| 122 | `AmHA.VxuH` | func | `(i32 i32 i32) -> ()` |
| 123 | `AmHA.ZODW` | func | `(i32 i32) -> (i32)` |
| 124 | `AmHA.J7zJ` | func | `(i32 i32) -> ()` |
| 125 | `AmHA.H6oh` | func | `(i32 i32) -> ()` |
| 126 | `AmHA.ed3B` | func | `(i32 i32) -> ()` |
| 127 | `AmHA.EY0E` | func | `(i32 i32) -> ()` |
| 128 | `AmHA.qlGZ` | func | `(i32 f64) -> ()` |
| 129 | `AmHA.WGT9` | func | `(i32 f64) -> ()` |
| 130 | `AmHA.Ptl2` | func | `(i32 i32) -> ()` |
| 131 | `AmHA.b4op` | func | `(i32 i32 i32) -> ()` |
| 132 | `AmHA.iyr0` | func | `(i32 i32) -> ()` |
| 133 | `AmHA.hJun` | func | `(i32 i32) -> (i32)` |
| 134 | `AmHA.g3aT` | func | `(i32 i32 i32) -> ()` |
| 135 | `AmHA.qzFi` | func | `(i32 i32 i32) -> ()` |
| 136 | `AmHA.TSUZ` | func | `(i32 i32) -> (i32)` |
| 137 | `AmHA.DxiN` | func | `(i32 i32) -> (i32)` |
| 138 | `AmHA.nDSB` | func | `(i32 i32 i32) -> ()` |
| 139 | `AmHA.pOcA` | func | `(i32 i32 i32) -> ()` |
| 140 | `AmHA.hCDq` | func | `(i32 i32) -> (i32)` |
| 141 | `AmHA.BdK0` | func | `(i32 i32) -> ()` |
| 142 | `AmHA.VBpS` | func | `(i32 i32) -> ()` |
| 143 | `AmHA.uYnD` | func | `(i32 i32) -> ()` |
| 144 | `AmHA.iVWO` | func | `(i32 i32) -> ()` |
| 145 | `AmHA.FE4Z` | func | `(i32 i32) -> ()` |
| 146 | `AmHA.zEmU` | func | `(i32 i32) -> ()` |
| 147 | `AmHA.o1lQ` | func | `(i32 i32) -> ()` |
| 148 | `AmHA.XOQM` | func | `(i32 f64) -> ()` |
| 149 | `AmHA.aIFl` | func | `(i32 i32) -> ()` |
| 150 | `AmHA.wRGd` | func | `(i32 i32) -> ()` |
| 151 | `AmHA.DIcZ` | func | `(i32 i32) -> ()` |
| 152 | `AmHA.WFXH` | func | `(i32 i32) -> ()` |
| 153 | `AmHA.hfCV` | func | `(i32 i32) -> ()` |
| 154 | `AmHA.rOaf` | func | `(i32 i32) -> ()` |
| 155 | `AmHA.oVOM` | func | `(i32 i32) -> ()` |
| 156 | `AmHA.oLwo` | func | `(i32 i32) -> ()` |
| 157 | `AmHA.JIk0` | func | `(i32 i32) -> ()` |
| 158 | `AmHA.OBC6` | func | `(i32 i32 i32) -> ()` |
| 159 | `AmHA.mCML` | func | `(i32 i32 i32) -> ()` |
| 160 | `AmHA.DwpC` | func | `(i32 i32) -> (i32)` |
| 161 | `AmHA.qGqt` | func | `(i32 i32) -> (i32)` |
| 162 | `AmHA.BOMC` | func | `(i32 i32) -> ()` |
| 163 | `AmHA.qP8Y` | func | `(i32 i32) -> ()` |
| 164 | `AmHA.g9YY` | func | `(i32 f64) -> ()` |
| 165 | `AmHA.S3gY` | func | `(i32 i32) -> ()` |
| 166 | `AmHA.KKMq` | func | `(i32 i32) -> ()` |
| 167 | `AmHA.fQvr` | func | `(i32 i32) -> ()` |
| 168 | `AmHA.VbA6` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `AmHA.OZsb` | func | `(i32 f64) -> ()` |
| 170 | `AmHA.PHjE` | func | `(i32 f64) -> ()` |
| 171 | `AmHA.pH2k` | func | `(i32 f64) -> ()` |
| 172 | `AmHA.kHr6` | func | `(i32 f64) -> ()` |
| 173 | `AmHA.UYIP` | func | `(i32 i32) -> ()` |
| 174 | `AmHA.YbPR` | func | `(i32 i32) -> ()` |
| 175 | `AmHA.aka2` | func | `(i32 i32) -> ()` |
| 176 | `AmHA.A7rk` | func | `(i32 i32) -> ()` |
| 177 | `AmHA.OiKs` | func | `(i32 i32) -> ()` |
| 178 | `AmHA.oouu` | func | `(i32 i32 i32) -> ()` |
| 179 | `AmHA.g0nV` | func | `(i32 i32) -> ()` |
| 180 | `AmHA.Eyym` | func | `(i32 f32) -> ()` |
| 181 | `AmHA.EfjG` | func | `(i32 i32) -> ()` |
| 182 | `AmHA.Fi9s` | func | `(i32 i32) -> ()` |
| 183 | `AmHA.vodP` | func | `(i32 i32) -> ()` |
| 184 | `AmHA.s5ZP` | func | `(i32 i32) -> ()` |
| 185 | `AmHA.nB9t` | func | `(i32 i32) -> ()` |
| 186 | `AmHA.pHSd` | func | `(i32 i32) -> ()` |
| 187 | `AmHA.xUWC` | func | `(i32 i32) -> ()` |
| 188 | `AmHA.Fu97` | func | `(i32 i32) -> ()` |
| 189 | `AmHA.uP0H` | func | `(i32 i32) -> ()` |
| 190 | `AmHA.tugu` | func | `(i32 i32) -> ()` |
| 191 | `AmHA.CCrJ` | func | `(i32 i32) -> ()` |
| 192 | `AmHA.MwFk` | func | `(i32 i32) -> ()` |
| 193 | `AmHA.z3r7` | func | `(i32 i32) -> (i32)` |
| 194 | `AmHA.OrSJ` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `AmHA.sz0N` | func | `(i32 i32) -> ()` |
| 196 | `AmHA.Cr3f` | func | `(i32 i32 i32) -> ()` |
| 197 | `AmHA.STbu` | func | `(i32 i32) -> (i32)` |
| 198 | `AmHA.bbNz` | func | `(i32) -> (i32)` |
| 199 | `AmHA.cRH0` | func | `(i32 i32) -> ()` |
| 200 | `AmHA.uHKb` | func | `(i32 i32) -> ()` |
| 201 | `AmHA.mHY1` | func | `(i32 i32) -> ()` |
| 202 | `AmHA.nUMp` | func | `(i32 i32) -> ()` |
| 203 | `AmHA.Ib2z` | func | `(i32 i32) -> ()` |
| 204 | `AmHA.x0kz` | func | `(i32 i32) -> ()` |
| 205 | `AmHA.Zj22` | func | `(i32 i32) -> ()` |
| 206 | `AmHA.FPDi` | func | `(i32 i32) -> ()` |
| 207 | `AmHA.x1zE` | func | `(i32) -> (i32)` |
| 208 | `AmHA.qXDy` | func | `(i32 i32 i32) -> ()` |
| 209 | `AmHA.IXrU` | func | `(i32 i32) -> ()` |
| 210 | `AmHA.INlF` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `AmHA.Jb1t` | func | `(i32 i32) -> ()` |
| 212 | `AmHA.xHk1` | func | `(i32) -> ()` |
| 213 | `AmHA.y5kD` | func | `(i32 i32) -> ()` |
| 214 | `AmHA.qx4p` | func | `(i32) -> (i32)` |
| 215 | `AmHA.UZTx` | func | `(i32 i32 i32) -> ()` |
| 216 | `AmHA.w6CK` | func | `(i32 i32) -> ()` |
| 217 | `AmHA.z16A` | func | `(i32 i32) -> ()` |
| 218 | `AmHA.qKwY` | func | `(i32 i32) -> ()` |
| 219 | `AmHA.o8I2` | func | `(i32 i32) -> ()` |
| 220 | `AmHA.UhRR` | func | `(i32 i32) -> (i32)` |
| 221 | `AmHA.dG3y` | func | `(i32 i32) -> ()` |
| 222 | `AmHA.K5I4` | func | `(i32 i32) -> ()` |
| 223 | `AmHA.K8nE` | func | `(i32 i32) -> ()` |
| 224 | `AmHA.AYg9` | func | `(i32 i32) -> ()` |
| 225 | `AmHA.Sdog` | func | `(i32 i32) -> ()` |
| 226 | `AmHA.CbZ7` | func | `(i32 i32) -> ()` |
| 227 | `AmHA.crH1` | func | `(i32 i32) -> ()` |
| 228 | `AmHA.BC6I` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `AmHA.NHFp` | func | `(i32) -> (i32)` |
| 230 | `AmHA.It9m` | func | `(i32) -> ()` |
| 231 | `AmHA.Q99a` | func | `(i32 f64) -> ()` |
| 232 | `AmHA.ckbh` | func | `(i32 i32) -> ()` |
| 233 | `AmHA.Lyqz` | func | `(i32 i32) -> ()` |
| 234 | `AmHA.N3pf` | func | `(i32 i32 i32) -> ()` |
| 235 | `AmHA.vaDn` | func | `(i32 i32) -> (i32)` |
| 236 | `AmHA.U9aU` | func | `(i32 i32) -> ()` |
| 237 | `AmHA.rvDc` | func | `(i32 i32) -> ()` |
| 238 | `AmHA.fMR4` | func | `(i32 i32) -> ()` |
| 239 | `AmHA.Wnu4` | func | `(i32 i32 i32) -> ()` |
| 240 | `AmHA.OQyc` | func | `(i32 i32) -> ()` |
| 241 | `AmHA.Dlfi` | func | `(i32 i32) -> ()` |
| 242 | `AmHA.NyAT` | func | `(i32 i32) -> ()` |
| 243 | `AmHA.QBfr` | func | `(i32 i32 i32) -> ()` |
| 244 | `AmHA.mQFs` | func | `(i32 i32) -> ()` |
| 245 | `AmHA.GdIM` | func | `(i32 i32) -> ()` |
| 246 | `AmHA.oEdX` | func | `(i32 i32 i32) -> ()` |
| 247 | `AmHA.dXIg` | func | `(i32 i32) -> (i32)` |
| 248 | `AmHA.MT9x` | func | `(i32 i32) -> ()` |
| 249 | `AmHA.sZ6a` | func | `(i32 i32 i32) -> ()` |
| 250 | `AmHA.W5Sw` | func | `(i32 i32) -> ()` |
| 251 | `AmHA.O3Ak` | func | `(i32 f64) -> ()` |
| 252 | `AmHA.nkJB` | func | `(i32 i32) -> ()` |
| 253 | `AmHA.XIRu` | func | `(i32 f64) -> ()` |
| 254 | `AmHA.NstH` | func | `(i32 i32 i32) -> ()` |
| 255 | `AmHA.z8JE` | func | `(i32 i32) -> ()` |
| 256 | `AmHA.MI9Y` | func | `(i32 i32 i32) -> ()` |
| 257 | `AmHA.yECt` | func | `(i32 i32) -> ()` |
| 258 | `AmHA.dAdO` | func | `(i32 i32) -> ()` |
| 259 | `AmHA.BLBe` | func | `(i32 i32) -> ()` |
| 260 | `AmHA.XcKK` | func | `(i32 i32 i32) -> ()` |
| 261 | `AmHA.eB8O` | func | `(i32 i32) -> ()` |
| 262 | `AmHA.Je6C` | func | `(i32 i32) -> ()` |
| 263 | `AmHA.BJhX` | func | `(i32 i32) -> ()` |
| 264 | `AmHA.co36` | func | `(i32 i32) -> ()` |
| 265 | `AmHA.hXtH` | func | `(i32 f32) -> ()` |
| 266 | `AmHA.h3IV` | func | `(i32 f32) -> ()` |
| 267 | `AmHA.kb4y` | func | `(i32 i32) -> ()` |
| 268 | `AmHA.Mz4l` | func | `(i32 i32) -> ()` |
| 269 | `AmHA.Ntt3` | func | `(i32 i32) -> ()` |
| 270 | `AmHA.oF5u` | func | `(i32 i32) -> ()` |
| 271 | `AmHA.xRCT` | func | `(i32 i32) -> ()` |
| 272 | `AmHA.tXMb` | func | `(i32 i32) -> ()` |
| 273 | `AmHA.hPxF` | func | `(i32 i32) -> ()` |
| 274 | `AmHA.bxS1` | func | `(i32 i32) -> ()` |
| 275 | `AmHA.S2Wq` | func | `(i32 i32) -> ()` |
| 276 | `AmHA.g94h` | func | `(i32 i32) -> ()` |
| 277 | `AmHA.Y3Vr` | func | `(i32 i32) -> ()` |
| 278 | `AmHA.Wd5H` | func | `(i32 i32) -> ()` |
| 279 | `AmHA.zvvo` | func | `(i32 i32) -> ()` |
| 280 | `AmHA.QaOV` | func | `(i32 i32) -> ()` |
| 281 | `AmHA.xDwo` | func | `(i32 i32) -> ()` |
| 282 | `AmHA.HPNH` | func | `(i32 i32) -> ()` |
| 283 | `AmHA.kFPF` | func | `(i32 i32) -> ()` |
| 284 | `AmHA.LZGM` | func | `(i32 i32) -> ()` |
| 285 | `AmHA.konZ` | func | `(i32 i32 i32) -> ()` |
| 286 | `AmHA.AA8I` | func | `(i32 i32 i32) -> ()` |
| 287 | `AmHA.txHL` | func | `(i32 i32) -> ()` |
| 288 | `AmHA.C8Qz` | func | `(i32 i32) -> ()` |
| 289 | `AmHA.eLq0` | func | `(i32 i32) -> ()` |
| 290 | `AmHA.fxTE` | func | `(i32 i32) -> ()` |
| 291 | `AmHA.OKbj` | func | `(i32 i32) -> ()` |
| 292 | `AmHA.sv3j` | func | `(i32 i32) -> ()` |
| 293 | `AmHA.mOTv` | func | `(i32 i32) -> ()` |
| 294 | `AmHA.z7XO` | func | `(i32 i32) -> ()` |
| 295 | `AmHA.Aw30` | func | `(i32 i32) -> ()` |
| 296 | `AmHA.wx3i` | func | `(i32 i32) -> ()` |
| 297 | `AmHA.yPGO` | func | `(i32 i32) -> ()` |
| 298 | `AmHA.h4dU` | func | `(i32 i32) -> (i32)` |
| 299 | `AmHA.c4zC` | func | `(i32 i32) -> ()` |
| 300 | `AmHA.MNt8` | func | `(i32 i32 i32) -> ()` |
| 301 | `AmHA.arVv` | func | `(i32 i32) -> ()` |
| 302 | `AmHA.hMfq` | func | `(i32 i32) -> ()` |
| 303 | `AmHA.oIp1` | func | `(i32 i32) -> ()` |
| 304 | `AmHA.tNNw` | func | `(i32 i32 i32) -> ()` |
| 305 | `AmHA.SAIe` | func | `(i32 i32) -> (i32)` |
| 306 | `AmHA.tmZh` | func | `(i32 i32 i32) -> ()` |
| 307 | `AmHA.A6QY` | func | `(i32 i32 i32) -> ()` |
| 308 | `AmHA.AHJK` | func | `(i32 i32) -> ()` |
| 309 | `AmHA.H548` | func | `(i32 i32) -> ()` |
| 310 | `AmHA.AdFM` | func | `(i32 i32) -> ()` |
| 311 | `AmHA.oLN0` | func | `(i32 i32) -> ()` |
| 312 | `AmHA.Gykr` | func | `(i32 i32) -> (i32)` |
| 313 | `AmHA.FT8h` | func | `(i32) -> (i32)` |
| 314 | `AmHA.oJQI` | func | `(i32) -> (i32)` |
| 315 | `AmHA.xAhm` | func | `(i32) -> (i32)` |
| 316 | `AmHA.IqgB` | func | `(i32) -> (i32)` |
| 317 | `AmHA.LtqF` | func | `(i32) -> (i32)` |
| 318 | `AmHA.gqO4` | func | `(i32) -> (i32)` |
| 319 | `AmHA.eZcT` | func | `(i32) -> (i32)` |
| 320 | `AmHA.V9Og` | func | `(i32) -> (i32)` |
| 321 | `AmHA.pAj2` | func | `(i32) -> (i32)` |
| 322 | `AmHA.Iky9` | func | `(i32) -> (i32)` |
| 323 | `AmHA.mVm3` | func | `(i32) -> (i32)` |
| 324 | `AmHA.c8zb` | func | `(i32) -> (i32)` |
| 325 | `AmHA.aTfz` | func | `(i32) -> (i32)` |
| 326 | `AmHA.flUO` | func | `(i32) -> (i32)` |
| 327 | `AmHA.jCrn` | func | `(i32) -> (f64)` |
| 328 | `AmHA.fDMt` | func | `(i32) -> (f64)` |
| 329 | `AmHA.nLNW` | func | `(i32) -> (i32)` |
| 330 | `AmHA.iN2h` | func | `(i32) -> (f64)` |
| 331 | `AmHA.i88v` | func | `(i32) -> (i32)` |
| 332 | `AmHA.Bpxj` | func | `(i32) -> (i32)` |
| 333 | `AmHA.PkJo` | func | `(i32) -> (i32)` |
| 334 | `AmHA.LVr1` | func | `(i32) -> (i32)` |
| 335 | `AmHA.aOmE` | func | `(i32) -> (i32)` |
| 336 | `AmHA.Rg2w` | func | `(i32) -> (i32)` |
| 337 | `AmHA.ZOGZ` | func | `(i32) -> (i32)` |
| 338 | `AmHA.Ar9h` | func | `(i32) -> (i32)` |
| 339 | `AmHA.u1RT` | func | `(i32) -> (i32)` |
| 340 | `AmHA.oICR` | func | `(i32) -> (i32)` |
| 341 | `AmHA.syKD` | func | `(i32) -> (i32)` |
| 342 | `AmHA.W6Ab` | func | `(i32) -> (i32)` |
| 343 | `AmHA.IrMi` | func | `(i32) -> (i32)` |
| 344 | `AmHA.xHVQ` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `AmHA.DWRh` | func | `() -> (i32)` |
| 346 | `AmHA.XJUK` | func | `(i32 i32) -> ()` |
| 347 | `AmHA.BqMk` | func | `(i32 i32 i32) -> ()` |
| 348 | `AmHA.gEoB` | func | `(i32 i32 i32) -> ()` |
| 349 | `AmHA.WiKu` | func | `(i32 i32) -> (i32)` |
| 350 | `AmHA.Bswx` | func | `(i32) -> (i32)` |
| 351 | `AmHA.marJ` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `AmHA.SHlz` | func | `(i32) -> ()` |
| 353 | `AmHA.OoR4` | func | `(i32) -> (i32)` |
| 354 | `AmHA.gkY8` | func | `(i32 i32) -> ()` |
| 355 | `AmHA.GttZ` | func | `(i32) -> (i32)` |
| 356 | `AmHA.Z910` | func | `(i32) -> (i32)` |
| 357 | `AmHA.M16T` | func | `(i32) -> (i32)` |
| 358 | `AmHA.gK1T` | func | `(i32) -> (i32)` |
| 359 | `AmHA.ioNF` | func | `(i32) -> (i32)` |
| 360 | `AmHA.NbKT` | func | `(i32 i32) -> ()` |
| 361 | `AmHA.FHHs` | func | `(i32 i32) -> ()` |
| 362 | `AmHA.XKwU` | func | `(i32 i32) -> ()` |
| 363 | `AmHA.iJRe` | func | `(i32 i32) -> ()` |
| 364 | `AmHA.bkyG` | func | `(i32 i32) -> ()` |
| 365 | `AmHA.hEW2` | func | `(i32 i32) -> ()` |
| 366 | `AmHA.oTZ4` | func | `(i32 i32) -> ()` |
| 367 | `AmHA.gHnJ` | func | `(i32 i32 i32) -> ()` |
| 368 | `AmHA.ygVG` | func | `(i32 i32) -> ()` |
| 369 | `AmHA.tXXi` | func | `(i32 i32) -> (i32)` |
| 370 | `AmHA.kkKJ` | func | `(i32) -> (i32)` |
| 371 | `AmHA.SGsw` | func | `(i32) -> (i32)` |
| 372 | `AmHA.V9hx` | func | `(i32 i32) -> ()` |
| 373 | `AmHA.eb5M` | func | `(i32) -> (i32)` |
| 374 | `AmHA.A43o` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `AmHA.WGmC` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `AmHA.sg1K` | func | `(i32 i32) -> ()` |
| 377 | `AmHA.Zqup` | func | `(i32) -> (i32)` |
| 378 | `AmHA.JDcX` | func | `(i32) -> (i32)` |
| 379 | `AmHA.gSuH` | func | `(i32) -> (i32)` |
| 380 | `AmHA.DCil` | func | `(i32) -> (i32)` |
| 381 | `AmHA.Ayjk` | func | `(i32) -> (i32)` |
| 382 | `AmHA.T3zp` | func | `(i32) -> (i32)` |
| 383 | `AmHA.bTTW` | func | `(i32 i32) -> ()` |
| 384 | `AmHA.rgkT` | func | `(i32 i32) -> (i32)` |
| 385 | `AmHA.V5zw` | func | `(i32 i32) -> (i32)` |
| 386 | `AmHA.BppV` | func | `(i32 i32) -> (i32)` |
| 387 | `AmHA.MHXQ` | func | `(i32 i32) -> (i32)` |
| 388 | `AmHA.iIlB` | func | `(i32 i32) -> (i32)` |
| 389 | `AmHA.zPoM` | func | `(i32 i32) -> (i32)` |
| 390 | `AmHA.G5sb` | func | `(f64) -> (i32)` |
| 391 | `AmHA.zLtX` | func | `(i32 i32) -> (i32)` |
| 392 | `AmHA.AvfP` | func | `(i32 i32) -> (i32)` |

## Exports

159 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `PtHi` | func | 3080 | `(i32 i32 i32 i32) -> (i32)` |
| `eaO9` | func | 3141 | `() -> (i32 i32)` |
| `TIXE` | func | 1922 | `(i32 i32 i32 i32) -> (i32)` |
| `Uzzq` | func | 2560 | `(i32) -> (i32)` |
| `vYL4` | func | 2862 | `(i32) -> (i32)` |
| `GLwH` | func | 3116 | `(i32 i32) -> (i32 i32)` |
| `gMZY` | func | 2583 | `(i32) -> (i32)` |
| `NW04` | func | 1781 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `XLGs` | func | 2854 | `(i32) -> (i32)` |
| `nKmf` | func | 1398 | `(i32) -> ()` |
| `fuS3` | func | 3103 | `(i32 i32 i32) -> (i32 i32)` |
| `CS4v` | func | 2555 | `(i32) -> (i32)` |
| `focK` | func | 2584 | `(i32 i32) -> (i32)` |
| `tV3f` | func | 3177 | `(i32 i32 i32) -> ()` |
| `TC8F` | func | 3166 | `(i32 i32 i32 i32) -> ()` |
| `dpwx` | func | 659 | `(i32 i32 i32) -> (i32)` |
| `IbZg` | func | 3127 | `(i32) -> (i32 i32)` |
| `dSOK` | func | 2263 | `(i32 i32) -> (i32)` |
| `giCI` | func | 1899 | `() -> (i32)` |
| `WcpR` | func | 2448 | `(i32 i32) -> (i32)` |
| `TsgD` | global | 1 | `` |
| `Ar5T` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `LpmR` | func | 3175 | `(i32 i32 i32) -> (i32)` |
| `VuId` | func | 2335 | `(i32 f64) -> (i32)` |
| `fmEH` | func | 2594 | `(i32) -> (i32)` |
| `ZTyR` | func | 1841 | `(i32 i32) -> (i32)` |
| `pftb` | func | 2556 | `(i32) -> (i32)` |
| `roQz` | func | 1828 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `whhK` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `I0RT` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `G5vw` | func | 2585 | `(i32 i32) -> (i32)` |
| `uoom` | func | 760 | `(i32 i32) -> (i32)` |
| `zMsD` | func | 1678 | `(i32 f64 f64 f64) -> (i32)` |
| `aZQf` | func | 1566 | `(i32) -> (i32)` |
| `GLif` | func | 2490 | `(i32) -> (i32)` |
| `xfvT` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `l828` | func | 1572 | `(i32 i32) -> (i32)` |
| `uxoY` | func | 3117 | `(i32 i32) -> (i32 i32)` |
| `RTAl` | func | 2415 | `(i32 i32) -> (i32)` |
| `LfD8` | func | 2070 | `(i32 i32) -> ()` |
| `z2JM` | func | 2576 | `(i32 i32) -> ()` |
| `TISh` | func | 2570 | `(i32 i32) -> ()` |
| `V8VW` | func | 1518 | `() -> (i32)` |
| `WdVR` | func | 3205 | `() -> (i32)` |
| `memory` | memory | 0 | `` |
| `tiRN` | func | 1822 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `fIMH` | func | 2903 | `(i32) -> ()` |
| `uQ3h` | func | 2128 | `(i32 i32) -> ()` |
| `NKLe` | func | 1341 | `(i32 i32 i32) -> (i32)` |
| `bn5V` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `aW8a` | func | 2625 | `(i32 i32) -> ()` |
| `mHFe` | func | 1633 | `(i32 i32 i32 i32) -> (i32)` |
| `TOUx` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `c4ZP` | func | 2559 | `(i32) -> (i32)` |
| `Uxdb` | func | 2224 | `(i32 i32) -> (i32)` |
| `jeO1` | func | 2535 | `(i32 i32) -> ()` |
| `JHfM` | func | 3318 | `() -> (i32)` |
| `ReQ2` | func | 3112 | `(i32 i32) -> (i32 i32)` |
| `v25E` | func | 2283 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Z3Ew` | func | 1196 | `(i32 i32) -> (i32)` |
| `vx07` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `B3Be` | func | 3246 | `() -> ()` |
| `FsxN` | func | 1556 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `O0sh` | func | 3126 | `(i32) -> (i32 i32)` |
| `uDnd` | func | 3053 | `() -> ()` |
| `vbOh` | func | 1463 | `(i32 f64 f64) -> (i32)` |
| `bvOI` | func | 1513 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `kiKd` | func | 1412 | `(i32 i32 i32) -> (i32)` |
| `kqct` | func | 969 | `(i32 i32) -> (i32)` |
| `wUxe` | func | 1674 | `(i32 i32) -> ()` |
| `jLrR` | func | 2111 | `(i32 f64 f64 f64) -> (i32)` |
| `YO3a` | func | 3113 | `(i32 i32) -> (i32 i32)` |
| `oVIP` | func | 2462 | `(i32 i32 i32 i32) -> (i32)` |
| `NF3v` | func | 3125 | `(i32) -> (i32 i32)` |
| `MsjH` | func | 3295 | `(i32) -> ()` |
| `p4jv` | func | 2536 | `(i32) -> (i32)` |
| `yLoe` | func | 2334 | `(i32 i32) -> ()` |
| `Xo3H` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `NEGc` | func | 3124 | `(i32) -> (i32 i32)` |
| `C3s5` | func | 3244 | `(i32) -> ()` |
| `N2Ld` | func | 3140 | `() -> (i32 i32)` |
| `Vhxc` | func | 2507 | `(i32) -> (i32)` |
| `hpcZ` | func | 1323 | `(i32 i32) -> (i32)` |
| `kCky` | func | 1293 | `(i32 i32 i32 i32) -> (i32)` |
| `HGb5` | func | 1967 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `Gb6s` | func | 1949 | `(i32 i32) -> ()` |
| `w6c1` | func | 2551 | `(i32) -> (f64)` |
| `UObc` | func | 2038 | `(i32 i32 i32 i32) -> ()` |
| `YjKq` | func | 1292 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `Mbm4` | func | 2675 | `() -> (i32)` |
| `hGSY` | func | 3111 | `(i32 i32) -> (i32 i32)` |
| `PLRA` | func | 830 | `(i32) -> (i32)` |
| `iemN` | func | 1300 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `PCcn` | func | 1487 | `(i32 i32) -> (i32)` |
| `tInK` | func | 1599 | `(i32 i32) -> (i32)` |
| `lP3D` | func | 2553 | `(i32) -> (i32)` |
| `BW4I` | func | 2926 | `(i32) -> (i32)` |
| `zo8e` | func | 798 | `(i32 i32) -> (i32)` |
| `Y3vr` | func | 1663 | `(i32 i32) -> (i32)` |
| `ioNQ` | func | 1462 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `OgVM` | func | 3294 | `(i32) -> (i32)` |
| `oFXw` | func | 2361 | `(i32 i32) -> ()` |
| `LU14` | func | 1960 | `(i32 i32) -> (i32)` |
| `NpXP` | func | 1974 | `(i32) -> ()` |
| `UX3p` | global | 2 | `` |
| `rQz7` | func | 1366 | `(i32) -> (i32)` |
| `JtZU` | func | 1673 | `(i32 i32) -> ()` |
| `AivC` | func | 1565 | `(i32 i32 i32 i32) -> (i32)` |
| `QKIH` | func | 1975 | `(i32) -> ()` |
| `sHX4` | func | 1586 | `(i32 i32) -> (i32)` |
| `GC55` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `FMxL` | func | 3290 | `() -> (f64)` |
| `zcQb` | func | 2574 | `(i32) -> (i32)` |
| `nlyX` | func | 2036 | `(i32) -> (i32)` |
| `oSUH` | func | 1646 | `(i32) -> (i32)` |
| `tW2c` | func | 1602 | `(i32 f64) -> (f64)` |
| `jaCo` | func | 2019 | `(i32) -> (i32)` |
| `dTTM` | func | 2416 | `(i32 i32) -> (i32)` |
| `JijN` | func | 2674 | `(i32 i32) -> ()` |
| `qnYy` | func | 2575 | `(i32) -> (i32)` |
| `VBub` | func | 1613 | `(i32 i32 i32) -> (i32)` |
| `glMK` | func | 2413 | `(i32 i32) -> (i32)` |
| `bSoB` | func | 3128 | `(i32) -> (i32 i32)` |
| `JQpB` | func | 2469 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `FsGa` | func | 2561 | `(i32) -> (i32)` |
| `GMTd` | func | 3073 | `(i32 i32) -> (i32)` |
| `yoid` | func | 3319 | `() -> (i32)` |
| `LuRy` | func | 2592 | `(i32) -> (i32)` |
| `szr5` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `z5Lp` | func | 1600 | `(i32 i32) -> (i32)` |
| `XNiM` | func | 2558 | `(i32) -> ()` |
| `EdNP` | func | 896 | `(i32 i32) -> (i32)` |
| `GMUs` | func | 1372 | `(i32 i32) -> (i32)` |
| `BZKk` | func | 1540 | `(i32 i32 i32 i32) -> ()` |
| `z8hN` | func | 2879 | `(i32) -> (i32)` |
| `Rhra` | func | 2593 | `(i32) -> (i32)` |
| `rWxQ` | func | 2414 | `(i32 i32) -> (i32)` |
| `T7Tw` | func | 3114 | `(i32 i32) -> (i32 i32)` |
| `UhV5` | func | 3235 | `(i32 i32 i32) -> ()` |
| `jOu0` | func | 2149 | `(i32 i32) -> (i32)` |
| `jtZl` | func | 1944 | `(i32 i32 f64 f64 f64) -> ()` |
| `ecib` | func | 1345 | `(i32 i32 i32) -> ()` |
| `EMOm` | func | 1906 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `XXwq` | func | 2554 | `(i32) -> (i32)` |
| `UWZd` | func | 1717 | `(i32 i32 i32 i32) -> (i32)` |
| `b5DY` | func | 2552 | `(i32) -> (i32)` |
| `NJEX` | func | 3086 | `(i32 i32) -> ()` |
| `GKzX` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `ufUW` | func | 2642 | `() -> (i32)` |
| `r2X4` | func | 3115 | `(i32 i32) -> (i32 i32)` |
| `GPNE` | func | 2890 | `(i32) -> (i32)` |
| `sTCd` | func | 771 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `I31P` | func | 1197 | `(i32 i32) -> ()` |
| `ECrG` | func | 2557 | `(i32) -> (i32)` |
| `pgf7` | func | 2577 | `(i32) -> (i32)` |
| `P1kp` | func | 2095 | `(i32 f64) -> (i32)` |
| `e3k3` | func | 1253 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `XNwq` | func | 1803 | `(i32) -> (i32)` |
| `HKNP` | func | 1561 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 838 · max 838
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2244632, `i32` = i32.const 2245196

## Functions

- 2,939 bodies · 4,038,764 code bytes · avg 1.3 KB
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
| 705 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
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
| `local.get` | 540,012 |
| `i32.const` | 227,246 |
| `local.tee` | 99,336 |
| `local.set` | 94,273 |
| `i32.load` | 93,193 |
| `i32.add` | 87,005 |
| `end` | 79,144 |
| `br_if` | 63,613 |
| `i32.store` | 46,880 |
| `block` | 37,232 |
| `i64.store` | 32,718 |
| `i64.const` | 32,047 |
| `if` | 30,272 |
| `call` | 30,099 |
| `i64.load` | 24,280 |
| `i32.sub` | 24,056 |
| `br` | 23,173 |
| `i32.eqz` | 18,985 |
| `select` | 16,691 |
| `i32.and` | 16,273 |
| `i32.shl` | 16,191 |
| `i32.ne` | 15,645 |
| `i32.load8_u` | 15,193 |
| `i32.eq` | 13,702 |
| `i32.store8` | 13,395 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,939/2,939 (degraded: 0)
