# WASM module: `bloxd_wasm_webgl_bg`

> environment **bloxd.io** · build `dz8ef.98c5e741` · analyzed 2026-11-25T13:06:22+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl_bg.cc71e5339fa818f676f3.wasm
> 5,516,404 bytes (5.3 MB) · sha256 `38da11f9eab49b5d…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,516,365 → 5,516,404 bytes (+39)
- data bytes 1,424,648 → 1,424,687
- name-section module id `80c0b7b653b61d4f.10916` → `1fa12801a0f89d08.10916` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,915 / 299 |
| Exports / imports | 157 / 300 |
| Code bytes (function bodies) | 4,042,860 (3.9 MB) |
| Total local variables | 30,793 |
| Instructions (scanable bodies) | 1,896,294 |
| Data segments / bytes | 4,032 / 1,424,687 |
| Element segments / entries | 1 / 753 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `1fa12801a0f89d08.10916` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,506 | 177 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,966 | 2915 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,513 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,048,203 | 2915 |
| 11 | data | 1,457,249 | 4032 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `sQUg.jjOS` | memory | `[128..14648]` |
| 0 | `sQUg.NQvb` | func | `(i32) -> (f64)` |
| 1 | `sQUg.B1lt` | func | `() -> (i32)` |
| 2 | `sQUg.I5G4` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `sQUg.idVY` | func | `(i32) -> ()` |
| 4 | `sQUg.y2h6` | func | `(i32 i32) -> (i32)` |
| 5 | `sQUg.eUbv` | func | `(i32) -> (i32)` |
| 6 | `sQUg.o0V8` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `sQUg.O6T7` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `sQUg.WDk6` | func | `(i32) -> (i32)` |
| 9 | `sQUg.gnyd` | func | `(i32 i32) -> ()` |
| 10 | `sQUg.aiLQ` | func | `(i32 i32) -> ()` |
| 11 | `sQUg.nRnw` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `sQUg.vkmW` | func | `(i32 i32) -> (i32)` |
| 13 | `sQUg.st2J` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `sQUg.usQ2` | func | `(i32) -> (i32)` |
| 15 | `sQUg.cxAE` | func | `(i32 i32) -> (i32)` |
| 16 | `sQUg.JTjq` | func | `(i32 i32) -> (i32)` |
| 17 | `sQUg.moB0` | func | `(i32 i32) -> ()` |
| 18 | `sQUg.f1et` | func | `(i32) -> (i32)` |
| 19 | `sQUg.D74p` | func | `(i32) -> (i32)` |
| 20 | `sQUg.ls3C` | func | `(i32) -> (i32)` |
| 21 | `sQUg.W6d1` | func | `(i32) -> ()` |
| 22 | `sQUg.msFM` | func | `(i32 i32) -> ()` |
| 23 | `sQUg.SPY7` | func | `(i32 i32) -> ()` |
| 24 | `sQUg.gsKU` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `sQUg.DZPo` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `sQUg.YGpb` | func | `(i32) -> (i32)` |
| 27 | `sQUg.e1jj` | func | `(i32 i32) -> ()` |
| 28 | `sQUg.Sxb5` | func | `(i32 i32) -> (i32)` |
| 29 | `sQUg.sDqw` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `sQUg.dUvF` | func | `(i32 i32) -> (i32)` |
| 31 | `sQUg.FHRw` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `sQUg.AR0Q` | func | `(i32) -> (i32)` |
| 33 | `sQUg.EWwQ` | func | `(i32 i32) -> ()` |
| 34 | `sQUg.qeiV` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `sQUg.P1ru` | func | `(i32) -> (i32)` |
| 36 | `sQUg.HuRW` | func | `(i32) -> (i32)` |
| 37 | `sQUg.gxcR` | func | `(i32) -> (i32)` |
| 38 | `sQUg.Ts5D` | func | `(i32 i32) -> (i32)` |
| 39 | `sQUg.eKfC` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `sQUg.Hu8v` | func | `(i32) -> (i32)` |
| 41 | `sQUg.ASAd` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `sQUg.KtT3` | func | `() -> (f64)` |
| 43 | `sQUg.XYof` | func | `(i32) -> (i32)` |
| 44 | `sQUg.O7s4` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `sQUg.HKk6` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `sQUg.zxrg` | func | `(i32 i32 i32) -> ()` |
| 47 | `sQUg.xfo7` | func | `(i32 i32 i32) -> ()` |
| 48 | `sQUg.RSPl` | func | `(i32 i32 i32) -> ()` |
| 49 | `sQUg.pC5y` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `sQUg.Rgp0` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `sQUg.Fksp` | func | `(i32 i32) -> ()` |
| 52 | `sQUg.u8i3` | func | `(i32 i32) -> ()` |
| 53 | `sQUg.PHPk` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `sQUg.BPSk` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `sQUg.BITw` | func | `(i32 f32 f32) -> ()` |
| 56 | `sQUg.EGMZ` | func | `(i32 f32 f32) -> ()` |
| 57 | `sQUg.EddK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `sQUg.UHME` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `sQUg.janY` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `sQUg.zY3g` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `sQUg.isf5` | func | `(i32 i32 i32) -> ()` |
| 62 | `sQUg.J6VW` | func | `(i32 i32 i32) -> ()` |
| 63 | `sQUg.XYGD` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `sQUg.r7FS` | func | `(i32 i32 i32) -> ()` |
| 65 | `sQUg.tHZg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `sQUg.vg6J` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `sQUg.RVM2` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `sQUg.f6Oc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `sQUg.rxSS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `sQUg.jckl` | func | `(i32) -> (i32)` |
| 71 | `sQUg.ZTQk` | func | `(i32) -> ()` |
| 72 | `sQUg.Twqd` | func | `(i32) -> (i32)` |
| 73 | `sQUg.CKfN` | func | `(i32 i32) -> (i32)` |
| 74 | `sQUg.lVxp` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `sQUg.qJW7` | func | `(i32 i32 i32) -> ()` |
| 76 | `sQUg.urQv` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `sQUg.npkN` | func | `() -> (f64)` |
| 78 | `sQUg.rxOt` | func | `() -> (f64)` |
| 79 | `sQUg.An7m` | func | `(i32 i32) -> ()` |
| 80 | `sQUg.G8Qg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `sQUg.QbxO` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `sQUg.yusa` | func | `(i32 i32 i32) -> ()` |
| 83 | `sQUg.tScU` | func | `(i32 i32 i32) -> ()` |
| 84 | `sQUg.Ux0T` | func | `(i32 i32) -> ()` |
| 85 | `sQUg.Wxzv` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `sQUg.kwk5` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `sQUg.G6p3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `sQUg.GBp9` | func | `(i32 i32) -> ()` |
| 89 | `sQUg.bUDF` | func | `(i32 i32) -> ()` |
| 90 | `sQUg.nGZ4` | func | `(i32) -> (i32)` |
| 91 | `sQUg.FYB9` | func | `(i32 i32 i32) -> ()` |
| 92 | `sQUg.i1N2` | func | `(i32 i32 i32) -> ()` |
| 93 | `sQUg.gpzs` | func | `(i32) -> (i32)` |
| 94 | `sQUg.ujX6` | func | `(i32) -> (i32)` |
| 95 | `sQUg.HYgE` | func | `(i32 i32) -> ()` |
| 96 | `sQUg.nIAy` | func | `(i32 i32) -> ()` |
| 97 | `sQUg.VKUc` | func | `(i32 i32) -> ()` |
| 98 | `sQUg.wpWT` | func | `(i32 i32) -> ()` |
| 99 | `sQUg.r5Lz` | func | `(i32 i32 i32) -> ()` |
| 100 | `sQUg.dnbk` | func | `(i32 i32 i32) -> ()` |
| 101 | `sQUg.EoTq` | func | `(i32 i32 f32) -> ()` |
| 102 | `sQUg.ukCi` | func | `(i32 i32 f32) -> ()` |
| 103 | `sQUg.IQiB` | func | `(i32 i32 i32) -> ()` |
| 104 | `sQUg.KyDW` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `sQUg.TlQt` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `sQUg.OLkJ` | func | `(i32 i32) -> ()` |
| 107 | `sQUg.IlzK` | func | `(i32 i32) -> ()` |
| 108 | `sQUg.lwjO` | func | `(i32 i32) -> ()` |
| 109 | `sQUg.KGce` | func | `(i32 i32) -> ()` |
| 110 | `sQUg.tDrn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `sQUg.MR8s` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `sQUg.IJVC` | func | `(i32 i32 i32) -> ()` |
| 113 | `sQUg.skKX` | func | `(i32 i32 i32) -> ()` |
| 114 | `sQUg.Iz3i` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `sQUg.M79V` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `sQUg.bwvy` | func | `(i32 i32) -> ()` |
| 117 | `sQUg.J0Ly` | func | `(i32 i32) -> ()` |
| 118 | `sQUg.qxNy` | func | `(i32 i32) -> (i32)` |
| 119 | `sQUg.RXLK` | func | `(i32 i32) -> (i32)` |
| 120 | `sQUg.IC08` | func | `(i32 i32) -> ()` |
| 121 | `sQUg.S2S3` | func | `(i32 i32) -> ()` |
| 122 | `sQUg.Qod7` | func | `(i32) -> (i32)` |
| 123 | `sQUg.FrGQ` | func | `(i32 i32) -> ()` |
| 124 | `sQUg.jePm` | func | `(i32 i32) -> ()` |
| 125 | `sQUg.QJcj` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `sQUg.j7Fp` | func | `(i32 i32 i32) -> ()` |
| 127 | `sQUg.hrN2` | func | `(i32 i32 i32) -> ()` |
| 128 | `sQUg.ZY6q` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `sQUg.mpYp` | func | `(i32 i32) -> ()` |
| 130 | `sQUg.VIAW` | func | `(i32 i32 i32) -> ()` |
| 131 | `sQUg.XEWr` | func | `(i32 i32 i32) -> ()` |
| 132 | `sQUg.pRe8` | func | `(i32 i32 i32) -> ()` |
| 133 | `sQUg.x0Oj` | func | `(i32 i32 i32) -> ()` |
| 134 | `sQUg.OC3M` | func | `(i32) -> ()` |
| 135 | `sQUg.bvjT` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `sQUg.PG00` | func | `(i32 i32 i32) -> ()` |
| 137 | `sQUg.wWCF` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `sQUg.J6CX` | func | `(i32 i32) -> ()` |
| 139 | `sQUg.jA0i` | func | `(i32) -> (i32)` |
| 140 | `sQUg.QqoJ` | func | `(i32 i32) -> ()` |
| 141 | `sQUg.qK0D` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `sQUg.b4eW` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `sQUg.fPA1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `sQUg.vM0V` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `sQUg.L6B5` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `sQUg.cMlv` | func | `(i32 i32) -> ()` |
| 147 | `sQUg.de5A` | func | `(i32 i32) -> ()` |
| 148 | `sQUg.weXE` | func | `(i32 i32) -> ()` |
| 149 | `sQUg.V6S1` | func | `(i32 i32) -> ()` |
| 150 | `sQUg.vPGh` | func | `(i32) -> (i32)` |
| 151 | `sQUg.g8ug` | func | `(i32) -> (i32)` |
| 152 | `sQUg.pVX4` | func | `(i32) -> (i32)` |
| 153 | `sQUg.EjWx` | func | `(i32) -> (i32)` |
| 154 | `sQUg.CPOQ` | func | `(i32) -> (i32)` |
| 155 | `sQUg.mCWz` | func | `(i32) -> (i32)` |
| 156 | `sQUg.k5iV` | func | `() -> (i32)` |
| 157 | `sQUg.lsbw` | func | `() -> (i32)` |
| 158 | `sQUg.f3s7` | func | `() -> (i32)` |
| 159 | `sQUg.ZVme` | func | `() -> (i32)` |
| 160 | `sQUg.hOXm` | func | `(i32 i32) -> (i32)` |
| 161 | `sQUg.KCQo` | func | `(i32) -> ()` |
| 162 | `sQUg.LAeX` | func | `(i32 i32) -> (i32)` |
| 163 | `sQUg.iYfv` | func | `(i32) -> (i32)` |
| 164 | `sQUg.qk5f` | func | `(i32) -> (i32)` |
| 165 | `sQUg.Keu3` | func | `(i32) -> (i32)` |
| 166 | `sQUg.dVJ3` | func | `(i32) -> ()` |
| 167 | `sQUg.EFkR` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `sQUg.ZsBi` | func | `(i32) -> (i32)` |
| 169 | `sQUg.da7l` | func | `(i32) -> (i32)` |
| 170 | `sQUg.HJJy` | func | `(i32 i32) -> (i32)` |
| 171 | `sQUg.yXWQ` | func | `(i32) -> ()` |
| 172 | `sQUg.Opjk` | func | `() -> (i32)` |
| 173 | `sQUg.m6G6` | func | `(i32 i32) -> (i32)` |
| 174 | `sQUg.rUja` | func | `(i32 i32) -> ()` |
| 175 | `sQUg.jXow` | func | `(i32 i32) -> ()` |
| 176 | `sQUg.vgvV` | func | `(i32) -> (i32)` |
| 177 | `sQUg.PfXY` | func | `(i32 i32) -> (i32)` |
| 178 | `sQUg.syFV` | func | `(i32) -> ()` |
| 179 | `sQUg.FYSZ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `sQUg.xzHi` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `sQUg.Mqdh` | func | `(i32 i32) -> ()` |
| 182 | `sQUg.jb0p` | func | `(i32 i32) -> ()` |
| 183 | `sQUg.JvsZ` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `sQUg.wPVy` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `sQUg.LD8u` | func | `(i32 f32) -> ()` |
| 186 | `sQUg.E44q` | func | `(i32 f32) -> ()` |
| 187 | `sQUg.B2sJ` | func | `(i32 i32) -> ()` |
| 188 | `sQUg.HbQc` | func | `(i32 i32) -> ()` |
| 189 | `sQUg.A3G9` | func | `(i32) -> (i32)` |
| 190 | `sQUg.xqul` | func | `(i32) -> (i32)` |
| 191 | `sQUg.Ry3S` | func | `(i32) -> (i32)` |
| 192 | `sQUg.edSK` | func | `(i32) -> (i32)` |
| 193 | `sQUg.eJR5` | func | `(i32 i32 i32) -> ()` |
| 194 | `sQUg.Uxo5` | func | `(i32 i32 i32) -> ()` |
| 195 | `sQUg.vrJW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `sQUg.BBBI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `sQUg.NWbW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `sQUg.ndpj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `sQUg.IxsE` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `sQUg.FfpG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `sQUg.U9hD` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `sQUg.G6qs` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `sQUg.JZ9h` | func | `(i32) -> (i32)` |
| 204 | `sQUg.TGWp` | func | `(i32) -> (i32)` |
| 205 | `sQUg.D2gq` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `sQUg.i85e` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `sQUg.vSDI` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `sQUg.T6jK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `sQUg.sscg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `sQUg.Sl7e` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `sQUg.ORon` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `sQUg.zzt9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `sQUg.xZub` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `sQUg.erpi` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `sQUg.lxFL` | func | `(i32 i32 i32) -> ()` |
| 216 | `sQUg.QITk` | func | `(i32 i32 i32) -> ()` |
| 217 | `sQUg.UQX8` | func | `(i32 i32) -> ()` |
| 218 | `sQUg.yIl0` | func | `(i32 i32) -> ()` |
| 219 | `sQUg.s4Oq` | func | `(i32 i32) -> ()` |
| 220 | `sQUg.haqt` | func | `(i32 i32) -> ()` |
| 221 | `sQUg.Vu7B` | func | `(i32 i32) -> ()` |
| 222 | `sQUg.fFPT` | func | `(i32 i32) -> ()` |
| 223 | `sQUg.RhBL` | func | `(i32 f32 f32) -> ()` |
| 224 | `sQUg.NDOr` | func | `(i32 f32 f32) -> ()` |
| 225 | `sQUg.o4pn` | func | `(i32 i32) -> ()` |
| 226 | `sQUg.D83m` | func | `(i32 i32) -> ()` |
| 227 | `sQUg.l5Hk` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `sQUg.Qi23` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `sQUg.Wtsg` | func | `(i32 i32 i32) -> ()` |
| 230 | `sQUg.aRtc` | func | `(i32) -> (i32)` |
| 231 | `sQUg.QFo6` | func | `(i32) -> (i32)` |
| 232 | `sQUg.OexT` | func | `(i32 i32) -> ()` |
| 233 | `sQUg.nDYX` | func | `(i32 i32) -> ()` |
| 234 | `sQUg.onpr` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `sQUg.gPm0` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `sQUg.KVgg` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `sQUg.bPai` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `sQUg.caHB` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `sQUg.lIbe` | func | `(i32 i32 i32) -> ()` |
| 240 | `sQUg.WiC3` | func | `(i32 i32 i32) -> ()` |
| 241 | `sQUg.P6UE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `sQUg.jPQG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `sQUg.Fkyp` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `sQUg.V6Hq` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `sQUg.xrSD` | func | `(i32) -> (i32)` |
| 246 | `sQUg.i5PI` | func | `(i32) -> (i32)` |
| 247 | `sQUg.kfat` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `sQUg.gaWv` | func | `(i32 i32) -> ()` |
| 249 | `sQUg.EcsI` | func | `(i32 i32) -> ()` |
| 250 | `sQUg.Xlt4` | func | `(i32 i32) -> (i32)` |
| 251 | `sQUg.sslA` | func | `(i32 i32) -> (i32)` |
| 252 | `sQUg.ssiZ` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `sQUg.CHZC` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `sQUg.g8Ld` | func | `(i32 i32) -> ()` |
| 255 | `sQUg.La0v` | func | `(i32 i32) -> ()` |
| 256 | `sQUg.hZAr` | func | `(i32) -> (i32)` |
| 257 | `sQUg.GJry` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `sQUg.CRFj` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `sQUg.uyWz` | func | `(i32) -> ()` |
| 260 | `sQUg.Ge74` | func | `(i32 i32) -> ()` |
| 261 | `sQUg.syc5` | func | `(i32 i32) -> ()` |
| 262 | `sQUg.AjuF` | func | `(i32 i32) -> ()` |
| 263 | `sQUg.ZAnX` | func | `(i32 i32) -> ()` |
| 264 | `sQUg.Aame` | func | `(i32 i32) -> ()` |
| 265 | `sQUg.jUbZ` | func | `(i32 i32) -> ()` |
| 266 | `sQUg.iu3J` | func | `(i32 i32) -> ()` |
| 267 | `sQUg.mF0d` | func | `(i32 i32) -> ()` |
| 268 | `sQUg.PPfd` | func | `(i32) -> (i32)` |
| 269 | `sQUg.xkin` | func | `(i32) -> (i32)` |
| 270 | `sQUg.bQ4f` | func | `(i32) -> (i32)` |
| 271 | `sQUg.VtIb` | func | `(i32) -> (i32)` |
| 272 | `sQUg.yL78` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `sQUg.FuZx` | func | `(i32) -> ()` |
| 274 | `sQUg.Y6Nh` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `sQUg.G4SI` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `sQUg.cgvh` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `sQUg.Vdgh` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `sQUg.XzcC` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `sQUg.iM0x` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `sQUg.KhAE` | func | `(i32) -> (i32)` |
| 281 | `sQUg.ZuHM` | func | `(i32) -> (i32)` |
| 282 | `sQUg.fZvq` | func | `(i32) -> (i32)` |
| 283 | `sQUg.TtDO` | func | `(i32) -> (i32)` |
| 284 | `sQUg.QiDf` | func | `(i32 i32) -> ()` |
| 285 | `sQUg.tx1E` | func | `(i32) -> ()` |
| 286 | `sQUg.Co4V` | func | `(i32 i32) -> ()` |
| 287 | `sQUg.rDrr` | func | `(i32) -> (i32)` |
| 288 | `sQUg.G5nu` | func | `(i32 i32) -> (i32)` |
| 289 | `sQUg.hKfx` | func | `(i32 i32) -> (i32)` |
| 290 | `sQUg.cpGh` | func | `(i32 i32) -> (i32)` |
| 291 | `sQUg.JZBG` | func | `(f64) -> (i32)` |
| 292 | `sQUg.Mvhu` | func | `(i32 i32) -> (i32)` |
| 293 | `sQUg.P2Du` | func | `(i32 i32) -> (i32)` |
| 294 | `sQUg.ab2p` | func | `(i32 i32) -> (i32)` |
| 295 | `sQUg.xiIP` | func | `(i32 i32) -> (i32)` |
| 296 | `sQUg.UZTK` | func | `(i32 i32) -> (i32)` |
| 297 | `sQUg.PUif` | func | `(i32 i32) -> (i32)` |
| 298 | `sQUg.uUrd` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `kq9g` | func | 2508 | `(i32) -> (i32)` |
| `sFxm` | func | 3012 | `(i32 i32) -> (i32 i32)` |
| `Hzy9` | func | 2807 | `(i32) -> ()` |
| `oS4F` | func | 3177 | `(i32) -> (i32)` |
| `MeI0` | func | 737 | `(i32) -> (i32)` |
| `UiEM` | func | 1478 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jCuz` | func | 1513 | `(i32 i32) -> (i32)` |
| `n71w` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vAfU` | func | 3037 | `() -> (i32 i32)` |
| `iqEq` | func | 2500 | `(i32 i32) -> (i32)` |
| `SXNP` | func | 1934 | `(i32) -> (i32)` |
| `EZ7m` | func | 2256 | `(i32 f64) -> (i32)` |
| `G1rW` | func | 890 | `(i32 i32) -> (i32)` |
| `BXAq` | func | 1264 | `(i32 i32 i32) -> (i32)` |
| `TyXj` | func | 1215 | `(i32 i32 i32 i32) -> (i32)` |
| `qqlF` | func | 2771 | `(i32) -> (i32)` |
| `MYGf` | func | 1409 | `(i32 i32) -> (i32)` |
| `kaJG` | func | 3020 | `(i32) -> (i32 i32)` |
| `DpNu` | func | 1473 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `BcGj` | func | 2473 | `(i32) -> (i32)` |
| `merS` | func | 2975 | `(i32 i32 i32 i32) -> (i32)` |
| `gxae` | func | 1221 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `wIdz` | func | 1482 | `(i32 i32 i32 i32) -> (i32)` |
| `s45K` | func | 1837 | `(i32 i32 i32 i32) -> (i32)` |
| `I5HV` | func | 1578 | `(i32 i32) -> (i32)` |
| `tAP4` | func | 1822 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `cJ1M` | func | 3202 | `() -> (i32)` |
| `MFLD` | func | 2478 | `(i32) -> (i32)` |
| `kVeH` | func | 2472 | `(i32) -> (i32)` |
| `Sh6i` | func | 3001 | `(i32 i32 i32) -> (i32 i32)` |
| `qylK` | func | 1700 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `asYU` | func | 1214 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `gtb1` | func | 2286 | `(i32 i32) -> ()` |
| `nseB` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `qk8f` | func | 2468 | `(i32) -> (f64)` |
| `fbIb` | func | 1270 | `(i32 i32 i32) -> ()` |
| `VkHp` | func | 1745 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `huPv` | func | 3035 | `() -> (i32 i32)` |
| `RePP` | func | 2785 | `(i32) -> (i32)` |
| `bsx9` | func | 1438 | `() -> (i32)` |
| `marh` | func | 1550 | `(i32 i32 i32 i32) -> (i32)` |
| `xFiW` | func | 1243 | `(i32 i32) -> (i32)` |
| `XdC3` | func | 3071 | `(i32 i32) -> ()` |
| `nxJo` | func | 2474 | `(i32) -> (i32)` |
| `AOKJ` | func | 678 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `UGdE` | func | 1516 | `(i32 f64) -> (f64)` |
| `Li3E` | func | 1951 | `(i32) -> (i32)` |
| `eceh` | func | 3024 | `(i32) -> (i32 i32)` |
| `fOEO` | func | 2470 | `(i32) -> (i32)` |
| `ENKo` | func | 2335 | `(i32 i32) -> (i32)` |
| `yoUZ` | func | 1589 | `(i32 i32) -> ()` |
| `Ou3P` | func | 3099 | `() -> (i32)` |
| `gIhC` | func | 2426 | `(i32) -> (i32)` |
| `tTgE` | func | 1336 | `(i32 i32 i32) -> (i32)` |
| `fne0` | func | 1723 | `(i32) -> (i32)` |
| `yatv` | func | 2486 | `(i32 i32) -> ()` |
| `DgQg` | func | 1875 | `(i32 i32) -> (i32)` |
| `odtO` | func | 2829 | `(i32) -> (i32)` |
| `kl6p` | func | 1389 | `(i32 f64 f64) -> (i32)` |
| `tMNP` | func | 3011 | `(i32 i32) -> (i32 i32)` |
| `b0D5` | func | 3006 | `(i32 i32) -> (i32 i32)` |
| `LYQi` | func | 2498 | `(i32) -> (i32)` |
| `W9vc` | func | 2982 | `(i32 i32) -> ()` |
| `dF6R` | func | 2592 | `() -> (i32)` |
| `Ebe1` | func | 1388 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `oaoT` | func | 2409 | `(i32) -> (i32)` |
| `KGmn` | func | 2489 | `(i32) -> (i32)` |
| `iYpE` | func | 1593 | `(i32 f64 f64 f64) -> (i32)` |
| `u8dk` | func | 2337 | `(i32 i32) -> (i32)` |
| `hhXW` | func | 1588 | `(i32 i32) -> ()` |
| `ItIs` | func | 2181 | `(i32 i32) -> (i32)` |
| `JtKg` | func | 1441 | `(i32) -> (i32)` |
| `Pj3N` | func | 1514 | `(i32 i32) -> (i32)` |
| `UIXh` | func | 3036 | `() -> (i32 i32)` |
| `p8A3` | func | 3021 | `(i32) -> (i32 i32)` |
| `lIx7` | func | 810 | `(i32 i32) -> (i32)` |
| `Uk7A` | func | 2046 | `(i32 i32) -> ()` |
| `OoxT` | func | 3203 | `() -> (i32)` |
| `I0Hv` | func | 705 | `(i32 i32) -> (i32)` |
| `XPJy` | func | 2507 | `(i32) -> (i32)` |
| `yNFs` | func | 1953 | `(i32 i32 i32 i32) -> ()` |
| `GeFl` | func | 2149 | `(i32 i32) -> (i32)` |
| `VQv2` | func | 758 | `(i32 i32 i32) -> (i32)` |
| `IawZ` | func | 2471 | `(i32) -> (i32)` |
| `h3gu` | func | 1489 | `(i32 i32) -> (i32)` |
| `bd3I` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `BTUc` | func | 3023 | `(i32) -> (i32 i32)` |
| `eprK` | func | 1891 | `(i32) -> ()` |
| `u3kz` | func | 568 | `(i32 i32 i32) -> (i32)` |
| `mPzn` | func | 889 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `xTrq` | func | 1460 | `(i32 i32 i32 i32) -> ()` |
| `uSlo` | func | 2380 | `(i32 i32 i32 i32) -> (i32)` |
| `Y2bY` | func | 1483 | `(i32) -> (i32)` |
| `ZC83` | func | 2013 | `(i32 f64) -> (i32)` |
| `uigf` | func | 3070 | `(i32 i32 i32) -> ()` |
| `jlJu` | func | 2477 | `(i32) -> (i32)` |
| `gwz2` | func | 2336 | `(i32 i32) -> (i32)` |
| `Gco4` | func | 2425 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `sLOs` | func | 3022 | `(i32) -> (i32 i32)` |
| `Ggul` | func | 1631 | `(i32 i32 i32 i32) -> (i32)` |
| `WUNk` | func | 3126 | `(i32 i32 i32) -> ()` |
| `oPt2` | func | 1115 | `(i32 i32) -> ()` |
| `bpSr` | func | 1289 | `(i32) -> (i32)` |
| `e6Me` | func | 1882 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `cUv4` | func | 2454 | `(i32 i32) -> ()` |
| `d5nJ` | func | 1816 | `() -> (i32)` |
| `eAs7` | func | 668 | `(i32 i32) -> (i32)` |
| `UZXJ` | func | 3132 | `(i32) -> ()` |
| `vvYB` | func | 3000 | `(i32 i32 i32) -> (i32 i32)` |
| `uESi` | func | 1857 | `(i32 i32 f64 f64 f64) -> ()` |
| `j6LN` | func | 3007 | `(i32 i32) -> (i32 i32)` |
| `htqV` | func | 2455 | `(i32) -> (i32)` |
| `vhaW` | global | 2 | `` |
| `wqBf` | func | 2490 | `(i32 i32) -> ()` |
| `csb2` | func | 2499 | `(i32 i32) -> (i32)` |
| `iJx1` | func | 1987 | `(i32 i32) -> ()` |
| `R9va` | func | 3010 | `(i32 i32) -> (i32 i32)` |
| `jX8F` | func | 2476 | `(i32) -> (i32)` |
| `Z3Gg` | func | 1529 | `(i32 i32 i32) -> (i32)` |
| `SKSy` | func | 2558 | `() -> (i32)` |
| `gdOQ` | func | 911 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `SmP6` | func | 2069 | `(i32 i32) -> (i32)` |
| `tv2t` | func | 2764 | `(i32) -> (i32)` |
| `k2AP` | func | 2591 | `(i32 i32) -> ()` |
| `oq8s` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `hqDi` | func | 1296 | `(i32 i32) -> (i32)` |
| `RQ0q` | func | 2338 | `(i32 i32) -> (i32)` |
| `E8yd` | func | 3178 | `(i32) -> ()` |
| `Nqos` | func | 922 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `QDqt` | func | 2546 | `(i32 i32) -> ()` |
| `MCav` | func | 3173 | `() -> (f64)` |
| `e5hT` | func | 2970 | `(i32 i32) -> (i32)` |
| `wAbB` | func | 1865 | `(i32 i32) -> ()` |
| `zmiI` | func | 1892 | `(i32) -> ()` |
| `zCJw` | func | 2951 | `() -> ()` |
| `qhDh` | global | 1 | `` |
| `EfM1` | func | 1757 | `(i32 i32) -> (i32)` |
| `z1On` | func | 2491 | `(i32) -> (i32)` |
| `S4zy` | func | 3008 | `(i32 i32) -> (i32 i32)` |
| `dhfg` | func | 1114 | `(i32 i32) -> (i32)` |
| `VebO` | func | 1434 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `ez0b` | func | 2029 | `(i32 f64 f64 f64) -> (i32)` |
| `rdIN` | func | 1502 | `(i32 i32) -> (i32)` |
| `PavP` | func | 3133 | `() -> ()` |
| `ia28` | func | 2475 | `(i32) -> ()` |
| `KYXM` | func | 2509 | `(i32) -> (i32)` |
| `Yo6I` | func | 2255 | `(i32 i32) -> ()` |
| `nubY` | func | 3061 | `(i32 i32 i32 i32) -> ()` |
| `cHcm` | func | 1321 | `(i32) -> ()` |
| `oBJ1` | func | 2469 | `(i32) -> (i32)` |
| `nG9t` | func | 2201 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jMaY` | func | 2488 | `(i32) -> (i32)` |
| `SRjt` | func | 3009 | `(i32 i32) -> (i32 i32)` |
| `D2Vg` | func | 2368 | `(i32 i32) -> (i32)` |
| `VNkI` | func | 2796 | `(i32) -> (i32)` |
| `yt66` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 754 · max 754
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2639760, `i32` = i32.const 2640340

## Functions

- 2,915 bodies · 4,042,860 code bytes · avg 1.4 KB
- instruction scan: 2,915 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 114 |
| <= 128 bytes | 257 |
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
| 196 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 225 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 721 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 722 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1576 | `(i32 i32) -> (i32)` | 180 | 54,752 | 19,856 | local.get×6592, i32.const×2623, i64.store×1913, i64.const×1078, i64.load×1056 |
| 1976 | `(i32 i32) -> ()` | 110 | 40,258 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2587 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2865 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2883 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 540,412 |
| `i32.const` | 226,361 |
| `local.tee` | 100,491 |
| `i32.load` | 94,774 |
| `local.set` | 94,131 |
| `i32.add` | 87,372 |
| `end` | 79,405 |
| `br_if` | 64,502 |
| `i32.store` | 46,859 |
| `block` | 37,322 |
| `i64.const` | 32,726 |
| `i64.store` | 31,836 |
| `if` | 30,358 |
| `call` | 29,521 |
| `i32.sub` | 24,726 |
| `i64.load` | 23,705 |
| `br` | 23,172 |
| `i32.eqz` | 19,607 |
| `select` | 16,938 |
| `i32.shl` | 16,489 |
| `i32.and` | 16,371 |
| `i32.ne` | 15,888 |
| `i32.load8_u` | 15,024 |
| `i32.eq` | 13,904 |
| `i32.store8` | 12,645 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,915/2,915 (degraded: 0)
