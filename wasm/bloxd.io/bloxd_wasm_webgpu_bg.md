# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `pxmq3aq.c63b303d` · analyzed 2026-11-26T17:59:12+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.76197d66b66abaf4d13e.wasm
> 5,157,353 bytes (4.9 MB) · sha256 `521647906e693662…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `7a32ea29144a3534.12337` → `21c849cb80485c89.12337` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/162 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,967 / 393 |
| Exports / imports | 162 / 394 |
| Code bytes (function bodies) | 4,069,311 (3.9 MB) |
| Total local variables | 31,152 |
| Instructions (scanable bodies) | 1,903,974 |
| Data segments / bytes | 3,546 / 1,041,569 |
| Element segments / entries | 1 / 839 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `21c849cb80485c89.12337` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,533 | 179 |
| 2 | import | 4,734 | 394 |
| 3 | function | 3,020 | 2967 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,297 | 162 |
| 9 | element | 1,685 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,074,725 | 2967 |
| 11 | data | 1,070,255 | 3546 |
| 0 | custom:name | 30 | — |

## Types

179 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Etih.IZFt` | memory | `[128..14648]` |
| 0 | `Etih.H0Tr` | func | `(i32) -> (i32)` |
| 1 | `Etih.Kh29` | func | `(i32) -> (f64)` |
| 2 | `Etih.kEPy` | func | `() -> (i32)` |
| 3 | `Etih.Z60f` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `Etih.xazI` | func | `(i32) -> ()` |
| 5 | `Etih.ePb3` | func | `(i32 i32) -> (i32)` |
| 6 | `Etih.aNcn` | func | `(i32) -> (i32)` |
| 7 | `Etih.UkAO` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `Etih.F297` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `Etih.Y5jX` | func | `(i32) -> (i32)` |
| 10 | `Etih.JLKN` | func | `(i32 i32) -> ()` |
| 11 | `Etih.qV8L` | func | `(i32 i32) -> ()` |
| 12 | `Etih.gFby` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `Etih.a7b0` | func | `(i32 i32) -> (i32)` |
| 14 | `Etih.lGID` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `Etih.EQpM` | func | `(i32) -> (i32)` |
| 16 | `Etih.jfWA` | func | `(i32 i32) -> (i32)` |
| 17 | `Etih.IC4F` | func | `(i32 i32) -> (i32)` |
| 18 | `Etih.xwXM` | func | `(i32 i32) -> ()` |
| 19 | `Etih.FgAm` | func | `(i32) -> (i32)` |
| 20 | `Etih.F7T3` | func | `(i32) -> (i32)` |
| 21 | `Etih.fjOL` | func | `(i32 i32 i32) -> ()` |
| 22 | `Etih.WZBs` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `Etih.FTVq` | func | `(i32) -> (i32)` |
| 24 | `Etih.hRhE` | func | `(i32) -> (i32)` |
| 25 | `Etih.Xlo5` | func | `(i32 i32) -> ()` |
| 26 | `Etih.ET3B` | func | `(i32 i32) -> (i32)` |
| 27 | `Etih.Rzip` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `Etih.Sy06` | func | `(i32) -> (i32)` |
| 29 | `Etih.EdUm` | func | `(i32) -> (i32)` |
| 30 | `Etih.Ekb0` | func | `(i32) -> (i32)` |
| 31 | `Etih.Wz0v` | func | `(i32) -> (i32)` |
| 32 | `Etih.kL58` | func | `(i32) -> (i32)` |
| 33 | `Etih.OaIr` | func | `(i32 i32 i32) -> ()` |
| 34 | `Etih.S3Jo` | func | `(i32 i32) -> (i32)` |
| 35 | `Etih.xXJl` | func | `(i32) -> (i32)` |
| 36 | `Etih.WMub` | func | `(i32) -> ()` |
| 37 | `Etih.TBHn` | func | `(i32) -> (i32)` |
| 38 | `Etih.shWW` | func | `(i32) -> (i32)` |
| 39 | `Etih.Rg9N` | func | `(i32) -> ()` |
| 40 | `Etih.VWUK` | func | `(i32 i32) -> (i32)` |
| 41 | `Etih.i51i` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `Etih.nzWR` | func | `(i32) -> ()` |
| 43 | `Etih.ifb5` | func | `(i32 i32) -> ()` |
| 44 | `Etih.G2ql` | func | `() -> (i32)` |
| 45 | `Etih.p78v` | func | `(i32 i32) -> (i32)` |
| 46 | `Etih.xoky` | func | `(i32 i32) -> (i32)` |
| 47 | `Etih.VntC` | func | `(i32) -> (i32)` |
| 48 | `Etih.mRx7` | func | `(i32) -> (i32)` |
| 49 | `Etih.uoyU` | func | `(i32) -> (i32)` |
| 50 | `Etih.fQE0` | func | `(i32 i32) -> ()` |
| 51 | `Etih.IvhK` | func | `(i32) -> (i32)` |
| 52 | `Etih.bSbf` | func | `(i32) -> ()` |
| 53 | `Etih.DLle` | func | `(i32 i32) -> (i32)` |
| 54 | `Etih.pPu5` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `Etih.kdqO` | func | `(i32) -> (i32)` |
| 56 | `Etih.SG7T` | func | `(i32 i32 i32) -> ()` |
| 57 | `Etih.Hkwr` | func | `(i32 i32) -> ()` |
| 58 | `Etih.ssut` | func | `(i32) -> (i32)` |
| 59 | `Etih.Fj6L` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `Etih.Ouwm` | func | `(i32) -> ()` |
| 61 | `Etih.yhVp` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `Etih.Chb8` | func | `(i32) -> ()` |
| 63 | `Etih.xAg3` | func | `(i32 i32 i32) -> ()` |
| 64 | `Etih.U4Ca` | func | `(i32 i32) -> ()` |
| 65 | `Etih.oh1W` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `Etih.aFNF` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `Etih.VeAO` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `Etih.Csfk` | func | `(i32 i32 f64) -> ()` |
| 69 | `Etih.sRhm` | func | `(i32) -> (i32)` |
| 70 | `Etih.HWm8` | func | `(i32 i32) -> ()` |
| 71 | `Etih.S7f5` | func | `(i32 i32 i32) -> ()` |
| 72 | `Etih.br7h` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `Etih.zYfR` | func | `(i32 i32 i32) -> ()` |
| 74 | `Etih.EL8m` | func | `(i32) -> ()` |
| 75 | `Etih.zzwT` | func | `(i32 i32) -> ()` |
| 76 | `Etih.IBwp` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `Etih.yYa7` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `Etih.H1C6` | func | `(i32 i32 i32) -> ()` |
| 79 | `Etih.TK88` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `Etih.zsUO` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `Etih.JWGg` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `Etih.Rr5R` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `Etih.uHry` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `Etih.ZrqX` | func | `(i32 i32 i32) -> ()` |
| 85 | `Etih.Ysj0` | func | `(i32 i32) -> (i32)` |
| 86 | `Etih.bpt0` | func | `(i32) -> (i32)` |
| 87 | `Etih.UdcE` | func | `(i32) -> (i32)` |
| 88 | `Etih.IPxE` | func | `(i32) -> (i32)` |
| 89 | `Etih.iZgn` | func | `(i32 i32) -> (i32)` |
| 90 | `Etih.Wo9C` | func | `(i32) -> ()` |
| 91 | `Etih.sxmB` | func | `(i32) -> (i32)` |
| 92 | `Etih.bQMC` | func | `(i32 i32) -> (i32)` |
| 93 | `Etih.PrsO` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `Etih.hzDa` | func | `(i32 i32 i32) -> ()` |
| 95 | `Etih.WbLl` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `Etih.NHym` | func | `() -> (f64)` |
| 97 | `Etih.qf1t` | func | `() -> (f64)` |
| 98 | `Etih.rEWz` | func | `(i32 i32) -> ()` |
| 99 | `Etih.IE1O` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `Etih.iwHs` | func | `(i32) -> (i32)` |
| 101 | `Etih.Fa1X` | func | `(i32) -> (i32)` |
| 102 | `Etih.oIuK` | func | `(i32) -> (i32)` |
| 103 | `Etih.FQ7D` | func | `() -> (i32)` |
| 104 | `Etih.NNHF` | func | `() -> (i32)` |
| 105 | `Etih.HQDP` | func | `() -> (i32)` |
| 106 | `Etih.LrpY` | func | `() -> (i32)` |
| 107 | `Etih.X8AF` | func | `(i32 i32) -> (i32)` |
| 108 | `Etih.OfKk` | func | `(i32) -> ()` |
| 109 | `Etih.BoXW` | func | `(i32 i32) -> (i32)` |
| 110 | `Etih.d8FK` | func | `(i32) -> (i32)` |
| 111 | `Etih.k3EB` | func | `() -> (f64)` |
| 112 | `Etih.roLX` | func | `(i32) -> (i32)` |
| 113 | `Etih.R4AV` | func | `(i32 i32) -> ()` |
| 114 | `Etih.j2Vt` | func | `(i32 i32) -> ()` |
| 115 | `Etih.zxph` | func | `(i32 i32) -> ()` |
| 116 | `Etih.LyFL` | func | `(i32 f32) -> ()` |
| 117 | `Etih.Fq1H` | func | `(i32 f32) -> ()` |
| 118 | `Etih.HTq7` | func | `(i32 i32) -> ()` |
| 119 | `Etih.ESAH` | func | `(i32 i32) -> ()` |
| 120 | `Etih.IJHT` | func | `(i32 i32) -> ()` |
| 121 | `Etih.lePY` | func | `(i32 i32) -> ()` |
| 122 | `Etih.pEiZ` | func | `(i32 i32 i32) -> ()` |
| 123 | `Etih.fdxt` | func | `(i32 i32) -> (i32)` |
| 124 | `Etih.TxEC` | func | `(i32 i32) -> ()` |
| 125 | `Etih.Cudx` | func | `(i32 i32) -> ()` |
| 126 | `Etih.W4tn` | func | `(i32 i32) -> ()` |
| 127 | `Etih.apHZ` | func | `(i32 i32) -> ()` |
| 128 | `Etih.Oh1a` | func | `(i32 f64) -> ()` |
| 129 | `Etih.cFX5` | func | `(i32 f64) -> ()` |
| 130 | `Etih.n7Fy` | func | `(i32 i32) -> ()` |
| 131 | `Etih.J6Qe` | func | `(i32 i32 i32) -> ()` |
| 132 | `Etih.VAZI` | func | `(i32 i32) -> ()` |
| 133 | `Etih.GmAt` | func | `(i32 i32) -> (i32)` |
| 134 | `Etih.Qswt` | func | `(i32 i32 i32) -> ()` |
| 135 | `Etih.XsGy` | func | `(i32 i32 i32) -> ()` |
| 136 | `Etih.vm3j` | func | `(i32 i32) -> (i32)` |
| 137 | `Etih.ebUa` | func | `(i32 i32) -> (i32)` |
| 138 | `Etih.zIXr` | func | `(i32 i32 i32) -> ()` |
| 139 | `Etih.tPgc` | func | `(i32 i32 i32) -> ()` |
| 140 | `Etih.Llw2` | func | `(i32 i32) -> (i32)` |
| 141 | `Etih.fNXN` | func | `(i32 i32) -> ()` |
| 142 | `Etih.XI1M` | func | `(i32 i32) -> ()` |
| 143 | `Etih.apCD` | func | `(i32 i32) -> ()` |
| 144 | `Etih.B7Fu` | func | `(i32 i32) -> ()` |
| 145 | `Etih.w0lY` | func | `(i32 i32) -> ()` |
| 146 | `Etih.FOm4` | func | `(i32 i32) -> ()` |
| 147 | `Etih.p2Ee` | func | `(i32 i32) -> ()` |
| 148 | `Etih.A2F2` | func | `(i32 f64) -> ()` |
| 149 | `Etih.yUoq` | func | `(i32 i32) -> ()` |
| 150 | `Etih.RIZH` | func | `(i32 i32) -> ()` |
| 151 | `Etih.Hk8P` | func | `(i32 i32) -> ()` |
| 152 | `Etih.TQsB` | func | `(i32 i32) -> ()` |
| 153 | `Etih.oiET` | func | `(i32 i32) -> ()` |
| 154 | `Etih.PV63` | func | `(i32 i32) -> ()` |
| 155 | `Etih.G8an` | func | `(i32 i32) -> ()` |
| 156 | `Etih.tpCN` | func | `(i32 i32) -> ()` |
| 157 | `Etih.k6t0` | func | `(i32 i32) -> ()` |
| 158 | `Etih.d7Mj` | func | `(i32 i32 i32) -> ()` |
| 159 | `Etih.toIC` | func | `(i32 i32 i32) -> ()` |
| 160 | `Etih.afNW` | func | `(i32 i32) -> (i32)` |
| 161 | `Etih.g8gu` | func | `(i32 i32) -> (i32)` |
| 162 | `Etih.fU28` | func | `(i32 i32) -> ()` |
| 163 | `Etih.zBBD` | func | `(i32 i32) -> ()` |
| 164 | `Etih.VE5M` | func | `(i32 f64) -> ()` |
| 165 | `Etih.ynJc` | func | `(i32 i32) -> ()` |
| 166 | `Etih.t45X` | func | `(i32 i32) -> ()` |
| 167 | `Etih.yhKl` | func | `(i32 i32) -> ()` |
| 168 | `Etih.lwO1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `Etih.pKqD` | func | `(i32 f64) -> ()` |
| 170 | `Etih.nQL4` | func | `(i32 f64) -> ()` |
| 171 | `Etih.I0yx` | func | `(i32 f64) -> ()` |
| 172 | `Etih.xW1V` | func | `(i32 f64) -> ()` |
| 173 | `Etih.FeLH` | func | `(i32 i32) -> ()` |
| 174 | `Etih.GmUz` | func | `(i32 i32) -> ()` |
| 175 | `Etih.EZbT` | func | `(i32 i32) -> ()` |
| 176 | `Etih.oPhY` | func | `(i32 i32) -> ()` |
| 177 | `Etih.ARtd` | func | `(i32 i32) -> ()` |
| 178 | `Etih.Heub` | func | `(i32 i32 i32) -> ()` |
| 179 | `Etih.hUlf` | func | `(i32 i32) -> ()` |
| 180 | `Etih.CoDB` | func | `(i32 f32) -> ()` |
| 181 | `Etih.MaxQ` | func | `(i32 i32) -> ()` |
| 182 | `Etih.Cuyc` | func | `(i32 i32) -> ()` |
| 183 | `Etih.DYhN` | func | `(i32 i32) -> ()` |
| 184 | `Etih.no2L` | func | `(i32 i32) -> ()` |
| 185 | `Etih.LBpK` | func | `(i32 i32) -> ()` |
| 186 | `Etih.kbkT` | func | `(i32 i32) -> ()` |
| 187 | `Etih.MPCO` | func | `(i32 i32) -> ()` |
| 188 | `Etih.B3wU` | func | `(i32 i32) -> ()` |
| 189 | `Etih.EoDg` | func | `(i32 i32) -> ()` |
| 190 | `Etih.JXSu` | func | `(i32 i32) -> ()` |
| 191 | `Etih.QazT` | func | `(i32 i32) -> ()` |
| 192 | `Etih.RgYD` | func | `(i32 i32) -> ()` |
| 193 | `Etih.C2m8` | func | `(i32 i32) -> (i32)` |
| 194 | `Etih.D5Gl` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `Etih.c33s` | func | `(i32 i32) -> ()` |
| 196 | `Etih.FNfB` | func | `(i32 i32 i32) -> ()` |
| 197 | `Etih.WLh2` | func | `(i32 i32) -> (i32)` |
| 198 | `Etih.kTi2` | func | `(i32) -> (i32)` |
| 199 | `Etih.qczI` | func | `(i32 i32) -> ()` |
| 200 | `Etih.GABy` | func | `(i32 i32) -> ()` |
| 201 | `Etih.gcCX` | func | `(i32 i32) -> ()` |
| 202 | `Etih.u8cj` | func | `(i32 i32) -> ()` |
| 203 | `Etih.VGt4` | func | `(i32 i32) -> ()` |
| 204 | `Etih.utYF` | func | `(i32 i32) -> ()` |
| 205 | `Etih.seV5` | func | `(i32 i32) -> ()` |
| 206 | `Etih.qqVP` | func | `(i32 i32) -> ()` |
| 207 | `Etih.n5Fj` | func | `(i32) -> (i32)` |
| 208 | `Etih.FVax` | func | `(i32 i32 i32) -> ()` |
| 209 | `Etih.dEZS` | func | `(i32 i32) -> ()` |
| 210 | `Etih.cwGc` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `Etih.AGUK` | func | `(i32 i32) -> ()` |
| 212 | `Etih.RG5o` | func | `(i32) -> ()` |
| 213 | `Etih.lqzr` | func | `(i32 i32) -> ()` |
| 214 | `Etih.Y8RA` | func | `(i32) -> (i32)` |
| 215 | `Etih.puB0` | func | `(i32 i32 i32) -> ()` |
| 216 | `Etih.OB3g` | func | `(i32 i32) -> ()` |
| 217 | `Etih.AzEV` | func | `(i32 i32) -> ()` |
| 218 | `Etih.C3Wh` | func | `(i32 i32) -> ()` |
| 219 | `Etih.SKAF` | func | `(i32 i32) -> ()` |
| 220 | `Etih.Ia0J` | func | `(i32 i32) -> (i32)` |
| 221 | `Etih.F7J7` | func | `(i32 i32) -> ()` |
| 222 | `Etih.erkD` | func | `(i32 i32) -> ()` |
| 223 | `Etih.XSYo` | func | `(i32 i32) -> ()` |
| 224 | `Etih.iwOU` | func | `(i32 i32) -> ()` |
| 225 | `Etih.N5Sk` | func | `(i32 i32) -> ()` |
| 226 | `Etih.PhOS` | func | `(i32 i32) -> ()` |
| 227 | `Etih.QenA` | func | `(i32 i32) -> ()` |
| 228 | `Etih.FgSL` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `Etih.il6z` | func | `(i32) -> (i32)` |
| 230 | `Etih.Btcu` | func | `(i32) -> ()` |
| 231 | `Etih.GFe0` | func | `(i32 f64) -> ()` |
| 232 | `Etih.pm9J` | func | `(i32 i32) -> ()` |
| 233 | `Etih.Arsu` | func | `(i32 i32) -> ()` |
| 234 | `Etih.Dbi7` | func | `(i32 i32 i32) -> ()` |
| 235 | `Etih.vSVU` | func | `(i32 i32) -> (i32)` |
| 236 | `Etih.H1kJ` | func | `(i32 i32) -> ()` |
| 237 | `Etih.YiQL` | func | `(i32 i32) -> ()` |
| 238 | `Etih.isOM` | func | `(i32 i32) -> ()` |
| 239 | `Etih.cGAu` | func | `(i32 i32 i32) -> ()` |
| 240 | `Etih.jwC5` | func | `(i32 i32) -> ()` |
| 241 | `Etih.ATuK` | func | `(i32 i32) -> ()` |
| 242 | `Etih.jQx0` | func | `(i32 i32) -> ()` |
| 243 | `Etih.ztpL` | func | `(i32 i32 i32) -> ()` |
| 244 | `Etih.a6tR` | func | `(i32 i32) -> ()` |
| 245 | `Etih.GFgI` | func | `(i32 i32) -> ()` |
| 246 | `Etih.D1ML` | func | `(i32 i32 i32) -> ()` |
| 247 | `Etih.OECo` | func | `(i32 i32) -> (i32)` |
| 248 | `Etih.WUUn` | func | `(i32 i32) -> ()` |
| 249 | `Etih.GNzz` | func | `(i32 i32 i32) -> ()` |
| 250 | `Etih.M7Xn` | func | `(i32 i32) -> ()` |
| 251 | `Etih.y1mt` | func | `(i32 f64) -> ()` |
| 252 | `Etih.EgTM` | func | `(i32 i32) -> ()` |
| 253 | `Etih.byDA` | func | `(i32 f64) -> ()` |
| 254 | `Etih.FwLC` | func | `(i32 i32 i32) -> ()` |
| 255 | `Etih.oNfK` | func | `(i32 i32) -> ()` |
| 256 | `Etih.vuFc` | func | `(i32 i32 i32) -> ()` |
| 257 | `Etih.DtVj` | func | `(i32 i32) -> ()` |
| 258 | `Etih.VZHA` | func | `(i32 i32) -> ()` |
| 259 | `Etih.EAgy` | func | `(i32 i32) -> ()` |
| 260 | `Etih.mUZA` | func | `(i32 i32 i32) -> ()` |
| 261 | `Etih.J5yi` | func | `(i32 i32) -> ()` |
| 262 | `Etih.kQPP` | func | `(i32 i32) -> ()` |
| 263 | `Etih.aKx8` | func | `(i32 i32) -> ()` |
| 264 | `Etih.zg4i` | func | `(i32 i32) -> ()` |
| 265 | `Etih.Qp2u` | func | `(i32 f32) -> ()` |
| 266 | `Etih.rbGT` | func | `(i32 f32) -> ()` |
| 267 | `Etih.irFN` | func | `(i32 i32) -> ()` |
| 268 | `Etih.VaaA` | func | `(i32 i32) -> ()` |
| 269 | `Etih.Qnv6` | func | `(i32 i32) -> ()` |
| 270 | `Etih.mQKe` | func | `(i32 i32) -> ()` |
| 271 | `Etih.cRiZ` | func | `(i32 i32) -> ()` |
| 272 | `Etih.rpR6` | func | `(i32 i32) -> ()` |
| 273 | `Etih.E7dQ` | func | `(i32 i32) -> ()` |
| 274 | `Etih.sZop` | func | `(i32 i32) -> ()` |
| 275 | `Etih.Gpno` | func | `(i32 i32) -> ()` |
| 276 | `Etih.W07y` | func | `(i32 i32) -> ()` |
| 277 | `Etih.XP4o` | func | `(i32 i32) -> ()` |
| 278 | `Etih.dlZe` | func | `(i32 i32) -> ()` |
| 279 | `Etih.YCAl` | func | `(i32 i32) -> ()` |
| 280 | `Etih.bwut` | func | `(i32 i32) -> ()` |
| 281 | `Etih.khaO` | func | `(i32 i32) -> ()` |
| 282 | `Etih.lxza` | func | `(i32 i32) -> ()` |
| 283 | `Etih.vKd4` | func | `(i32 i32) -> ()` |
| 284 | `Etih.oO0P` | func | `(i32 i32) -> ()` |
| 285 | `Etih.yzyK` | func | `(i32 i32 i32) -> ()` |
| 286 | `Etih.wbuk` | func | `(i32 i32 i32) -> ()` |
| 287 | `Etih.TPmL` | func | `(i32 i32) -> ()` |
| 288 | `Etih.NX5G` | func | `(i32 i32) -> ()` |
| 289 | `Etih.mNXL` | func | `(i32 i32) -> ()` |
| 290 | `Etih.JELk` | func | `(i32 i32) -> ()` |
| 291 | `Etih.SRut` | func | `(i32 i32) -> ()` |
| 292 | `Etih.NAvc` | func | `(i32 i32) -> ()` |
| 293 | `Etih.GDAp` | func | `(i32 i32) -> ()` |
| 294 | `Etih.D568` | func | `(i32 i32) -> ()` |
| 295 | `Etih.ewvi` | func | `(i32 i32) -> ()` |
| 296 | `Etih.BHTw` | func | `(i32 i32) -> ()` |
| 297 | `Etih.j2Hu` | func | `(i32 i32) -> ()` |
| 298 | `Etih.esUR` | func | `(i32 i32) -> (i32)` |
| 299 | `Etih.iwor` | func | `(i32 i32) -> ()` |
| 300 | `Etih.Qw6P` | func | `(i32 i32 i32) -> ()` |
| 301 | `Etih.LJg1` | func | `(i32 i32) -> ()` |
| 302 | `Etih.gZNW` | func | `(i32 i32) -> ()` |
| 303 | `Etih.QawR` | func | `(i32 i32) -> ()` |
| 304 | `Etih.NNiE` | func | `(i32 i32 i32) -> ()` |
| 305 | `Etih.w3qX` | func | `(i32 i32) -> (i32)` |
| 306 | `Etih.iPXz` | func | `(i32 i32 i32) -> ()` |
| 307 | `Etih.y7Pv` | func | `(i32 i32 i32) -> ()` |
| 308 | `Etih.LMdc` | func | `(i32 i32) -> ()` |
| 309 | `Etih.bnjD` | func | `(i32 i32) -> ()` |
| 310 | `Etih.xao7` | func | `(i32 i32) -> ()` |
| 311 | `Etih.uD8B` | func | `(i32 i32) -> ()` |
| 312 | `Etih.uvIN` | func | `(i32 i32) -> (i32)` |
| 313 | `Etih.gkag` | func | `(i32) -> (i32)` |
| 314 | `Etih.SO4v` | func | `(i32) -> (i32)` |
| 315 | `Etih.dHfF` | func | `(i32) -> (i32)` |
| 316 | `Etih.tOaZ` | func | `(i32) -> (i32)` |
| 317 | `Etih.Yriy` | func | `(i32) -> (i32)` |
| 318 | `Etih.FrEW` | func | `(i32) -> (i32)` |
| 319 | `Etih.bU0n` | func | `(i32) -> (i32)` |
| 320 | `Etih.L5m6` | func | `(i32) -> (i32)` |
| 321 | `Etih.NODJ` | func | `(i32) -> (i32)` |
| 322 | `Etih.fAVb` | func | `(i32) -> (i32)` |
| 323 | `Etih.ilqh` | func | `(i32) -> (i32)` |
| 324 | `Etih.gjqo` | func | `(i32) -> (i32)` |
| 325 | `Etih.rJvb` | func | `(i32) -> (i32)` |
| 326 | `Etih.G3lK` | func | `(i32) -> (i32)` |
| 327 | `Etih.PawR` | func | `(i32) -> (f64)` |
| 328 | `Etih.YELw` | func | `(i32) -> (f64)` |
| 329 | `Etih.n7QU` | func | `(i32) -> (i32)` |
| 330 | `Etih.bpQf` | func | `(i32) -> (f64)` |
| 331 | `Etih.nI16` | func | `(i32) -> (i32)` |
| 332 | `Etih.pmu1` | func | `(i32) -> (i32)` |
| 333 | `Etih.f2AC` | func | `(i32) -> (i32)` |
| 334 | `Etih.rarE` | func | `(i32) -> (i32)` |
| 335 | `Etih.x5CE` | func | `(i32) -> (i32)` |
| 336 | `Etih.N8px` | func | `(i32) -> (i32)` |
| 337 | `Etih.wINT` | func | `(i32) -> (i32)` |
| 338 | `Etih.LY1W` | func | `(i32) -> (i32)` |
| 339 | `Etih.ktIx` | func | `(i32) -> (i32)` |
| 340 | `Etih.xgBx` | func | `(i32) -> (i32)` |
| 341 | `Etih.Ydxh` | func | `(i32) -> (i32)` |
| 342 | `Etih.bzWi` | func | `(i32) -> (i32)` |
| 343 | `Etih.qcnj` | func | `(i32) -> (i32)` |
| 344 | `Etih.gvkN` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `Etih.QQWM` | func | `() -> (i32)` |
| 346 | `Etih.aVl9` | func | `(i32 i32) -> ()` |
| 347 | `Etih.eHHC` | func | `(i32 i32 i32) -> ()` |
| 348 | `Etih.z8nq` | func | `(i32 i32 i32) -> ()` |
| 349 | `Etih.Un6M` | func | `(i32 i32) -> (i32)` |
| 350 | `Etih.YuoV` | func | `(i32) -> (i32)` |
| 351 | `Etih.xNh9` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `Etih.eCC4` | func | `(i32) -> ()` |
| 353 | `Etih.vHVC` | func | `(i32) -> (i32)` |
| 354 | `Etih.FkoQ` | func | `(i32 i32) -> ()` |
| 355 | `Etih.SWXf` | func | `(i32) -> (i32)` |
| 356 | `Etih.pRT6` | func | `(i32) -> (i32)` |
| 357 | `Etih.pXk0` | func | `(i32) -> (i32)` |
| 358 | `Etih.IV8B` | func | `(i32) -> (i32)` |
| 359 | `Etih.r9J9` | func | `(i32) -> (i32)` |
| 360 | `Etih.RhHw` | func | `(i32 i32) -> ()` |
| 361 | `Etih.ERW1` | func | `(i32 i32) -> ()` |
| 362 | `Etih.KgnF` | func | `(i32 i32) -> ()` |
| 363 | `Etih.Tsak` | func | `(i32 i32) -> ()` |
| 364 | `Etih.MZDO` | func | `(i32 i32) -> ()` |
| 365 | `Etih.YzA0` | func | `(i32 i32) -> ()` |
| 366 | `Etih.DvGa` | func | `(i32 i32) -> ()` |
| 367 | `Etih.Msgu` | func | `(i32 i32 i32) -> ()` |
| 368 | `Etih.UmlD` | func | `(i32 i32) -> ()` |
| 369 | `Etih.IBdi` | func | `(i32 i32) -> (i32)` |
| 370 | `Etih.bXR4` | func | `(i32) -> (i32)` |
| 371 | `Etih.YbnE` | func | `(i32) -> (i32)` |
| 372 | `Etih.L3bX` | func | `(i32 i32) -> ()` |
| 373 | `Etih.b5WA` | func | `(i32) -> (i32)` |
| 374 | `Etih.yPPT` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `Etih.F5Dr` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `Etih.qyLP` | func | `(i32 i32) -> ()` |
| 377 | `Etih.Krgo` | func | `(i32) -> (i32)` |
| 378 | `Etih.AJFJ` | func | `(i32) -> (i32)` |
| 379 | `Etih.HCDQ` | func | `(i32) -> (i32)` |
| 380 | `Etih.J2GB` | func | `(i32) -> (i32)` |
| 381 | `Etih.ZASL` | func | `(i32) -> (i32)` |
| 382 | `Etih.WCfh` | func | `(i32) -> (i32)` |
| 383 | `Etih.k3nq` | func | `(i32 i32) -> ()` |
| 384 | `Etih.aBmz` | func | `(i32 i32) -> (i32)` |
| 385 | `Etih.Lojx` | func | `(i32 i32) -> (i32)` |
| 386 | `Etih.hblu` | func | `(i32 i32) -> (i32)` |
| 387 | `Etih.e1wV` | func | `(i32 i32) -> (i32)` |
| 388 | `Etih.uHtx` | func | `(i32 i32) -> (i32)` |
| 389 | `Etih.ebkf` | func | `(i32 i32) -> (i32)` |
| 390 | `Etih.HTTn` | func | `(f64) -> (i32)` |
| 391 | `Etih.o7o2` | func | `(i32 i32) -> (i32)` |
| 392 | `Etih.WfRn` | func | `(i32 i32) -> (i32)` |

## Exports

162 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `y2QZ` | func | 2609 | `(i32 i32) -> (i32)` |
| `s0aF` | func | 836 | `(i32) -> (i32)` |
| `Iowj` | func | 2585 | `(i32) -> (i32)` |
| `ZvXm` | func | 2438 | `(i32 i32) -> (i32)` |
| `ci8f` | func | 3318 | `() -> (f64)` |
| `a8IK` | func | 3154 | `(i32) -> (i32 i32)` |
| `en5O` | func | 2579 | `(i32) -> (i32)` |
| `tUPj` | func | 3140 | `(i32 i32) -> (i32 i32)` |
| `SpHv` | func | 2437 | `(i32 i32) -> (i32)` |
| `FaXr` | func | 2037 | `(i32) -> (i32)` |
| `Orci` | func | 1423 | `(i32 i32 i32) -> (i32)` |
| `ZusB` | func | 2561 | `(i32) -> (i32)` |
| `lDcX` | func | 3167 | `() -> (i32 i32)` |
| `xahg` | func | 2172 | `(i32 i32) -> (i32)` |
| `cjOc` | func | 2132 | `(i32 f64 f64 f64) -> (i32)` |
| `s1k3` | global | 2 | `` |
| `HJZb` | func | 3203 | `(i32 i32 i32) -> (i32)` |
| `UmRT` | func | 3323 | `(i32) -> ()` |
| `k2Se` | func | 3194 | `(i32 i32 i32 i32) -> ()` |
| `f6Hi` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `jmDb` | func | 1410 | `(i32 i32) -> (i32)` |
| `HEtM` | func | 2530 | `(i32) -> (i32)` |
| `nLpf` | func | 3151 | `(i32) -> (i32 i32)` |
| `Gwuy` | func | 3130 | `(i32 i32 i32) -> (i32 i32)` |
| `fccz` | func | 3347 | `() -> (i32)` |
| `l2Rj` | func | 3346 | `() -> (i32)` |
| `AF5W` | func | 1499 | `(i32 i32) -> (i32)` |
| `woi1` | func | 1474 | `(i32 f64 f64) -> (i32)` |
| `hufZ` | func | 2115 | `(i32 f64) -> (i32)` |
| `GzKV` | func | 1991 | `(i32) -> ()` |
| `VODV` | func | 1938 | `(i32 i32 i32 i32) -> (i32)` |
| `gtSU` | func | 2600 | `(i32 i32) -> ()` |
| `fKPe` | func | 3142 | `(i32 i32) -> (i32 i32)` |
| `rEcR` | func | 974 | `(i32 i32) -> (i32)` |
| `CnDR` | func | 2607 | `(i32) -> (i32)` |
| `rglk` | func | 1573 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `EwOM` | func | 2581 | `(i32) -> (i32)` |
| `iXHY` | func | 3155 | `(i32) -> (i32 i32)` |
| `H8BA` | func | 3168 | `() -> (i32 i32)` |
| `cfEn` | func | 2056 | `(i32 i32 i32 i32) -> ()` |
| `EXgN` | func | 1579 | `(i32) -> (i32)` |
| `wUgY` | func | 1922 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `xYsx` | func | 1628 | `(i32 i32 i32) -> (i32)` |
| `GFJA` | func | 3233 | `() -> (i32)` |
| `MtEo` | func | 2917 | `(i32) -> (i32)` |
| `XrFh` | func | 1732 | `(i32 i32 i32 i32) -> (i32)` |
| `I5LY` | func | 3152 | `(i32) -> (i32 i32)` |
| `aP7y` | func | 2952 | `(i32) -> (i32)` |
| `I2nd` | func | 2577 | `(i32) -> (i32)` |
| `JcOd` | func | 2618 | `(i32) -> (i32)` |
| `RdCR` | func | 1648 | `(i32 i32 i32 i32) -> (i32)` |
| `bZd8` | func | 2054 | `(i32) -> (i32)` |
| `GipH` | func | 2357 | `(i32 f64) -> (i32)` |
| `TI2Z` | func | 2513 | `(i32) -> (i32)` |
| `UUFE` | func | 3107 | `(i32 i32 i32 i32) -> (i32)` |
| `APYw` | func | 1300 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `pPVt` | func | 1348 | `(i32 i32 i32) -> (i32)` |
| `A01v` | func | 1473 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `JjiS` | func | 2699 | `(i32 i32) -> ()` |
| `iAC8` | func | 3113 | `(i32 i32) -> ()` |
| `YDqG` | func | 1261 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jhse` | func | 773 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `W4U0` | func | 1600 | `(i32 i32) -> (i32)` |
| `mRNH` | func | 851 | `(i32 i32 i32) -> (i32)` |
| `G2RW` | func | 1308 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `bttB` | func | 1553 | `(i32 i32 i32 i32) -> ()` |
| `vqug` | func | 1694 | `(i32 f64 f64 f64) -> (i32)` |
| `UHUB` | func | 1586 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `wCla` | func | 2598 | `(i32) -> (i32)` |
| `NJwD` | func | 3153 | `(i32) -> (i32 i32)` |
| `ArR4` | func | 707 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `p9jL` | func | 2575 | `(i32) -> (f64)` |
| `bKpk` | func | 1526 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `mjqE` | func | 1856 | `(i32 i32) -> (i32)` |
| `DylI` | func | 1678 | `(i32 i32) -> (i32)` |
| `gJaV` | func | 1960 | `(i32 i32 f64 f64 f64) -> ()` |
| `RZPw` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `KbHU` | func | 1837 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jUfV` | func | 990 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `XNbc` | func | 3141 | `(i32 i32) -> (i32 i32)` |
| `fvZ4` | func | 3205 | `(i32 i32 i32) -> ()` |
| `J7nh` | func | 2906 | `(i32) -> (i32)` |
| `mmZv` | global | 1 | `` |
| `DFue` | func | 2436 | `(i32 i32) -> (i32)` |
| `KbIQ` | func | 1690 | `(i32 i32) -> ()` |
| `ROjA` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `yq9t` | func | 2304 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `K39h` | func | 3263 | `(i32 i32 i32) -> ()` |
| `VDo3` | func | 2584 | `(i32) -> (i32)` |
| `F9MW` | func | 2608 | `(i32 i32) -> (i32)` |
| `MpL3` | func | 2882 | `(i32) -> (i32)` |
| `qJFg` | func | 2594 | `(i32 i32) -> ()` |
| `ZT7r` | func | 1301 | `(i32 i32 i32 i32) -> (i32)` |
| `csGp` | func | 1796 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `HX2H` | func | 3138 | `(i32 i32) -> (i32 i32)` |
| `tEWe` | func | 1915 | `() -> (i32)` |
| `BHNs` | func | 2601 | `(i32) -> (i32)` |
| `Yswn` | func | 1406 | `(i32) -> ()` |
| `HnhC` | func | 1374 | `(i32) -> (i32)` |
| `q5a6` | func | 2929 | `(i32) -> ()` |
| `Erqa` | func | 2089 | `(i32 i32) -> ()` |
| `d0RD` | func | 663 | `(i32 i32 i32) -> (i32)` |
| `p5Fr` | func | 2383 | `(i32 i32) -> ()` |
| `Efup` | func | 2599 | `(i32) -> (i32)` |
| `p9pu` | func | 1689 | `(i32 i32) -> ()` |
| `Mol6` | func | 3080 | `() -> ()` |
| `Gckn` | func | 1380 | `(i32 i32) -> (i32)` |
| `Vgm0` | func | 802 | `(i32 i32) -> (i32)` |
| `WSGR` | func | 2576 | `(i32) -> (i32)` |
| `Nhrm` | func | 2582 | `(i32) -> ()` |
| `UMoc` | func | 3272 | `(i32) -> ()` |
| `tNKA` | func | 1578 | `(i32 i32 i32 i32) -> (i32)` |
| `MRWU` | func | 1001 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `GPp5` | func | 1531 | `() -> (i32)` |
| `D6vF` | func | 3143 | `(i32 i32) -> (i32 i32)` |
| `vc9O` | func | 2616 | `(i32) -> (i32)` |
| `yjVZ` | func | 2471 | `(i32 i32) -> (i32)` |
| `TFwt` | func | 1614 | `(i32 i32) -> (i32)` |
| `qzUw` | func | 2580 | `(i32) -> (i32)` |
| `PoJD` | func | 2486 | `(i32 i32 i32 i32) -> (i32)` |
| `ZDP4` | func | 779 | `(i32 i32) -> (i32)` |
| `XUHQ` | func | 2890 | `(i32) -> (i32)` |
| `m12K` | func | 3169 | `() -> (i32 i32)` |
| `FqLW` | func | 3144 | `(i32 i32) -> (i32 i32)` |
| `MOyY` | func | 2356 | `(i32 i32) -> ()` |
| `srnq` | func | 1983 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `zMKx` | func | 1976 | `(i32 i32) -> (i32)` |
| `naU3` | func | 3322 | `(i32) -> (i32)` |
| `ason` | func | 2245 | `(i32 i32) -> (i32)` |
| `lRLW` | func | 2283 | `(i32 i32) -> (i32)` |
| `S6TU` | func | 3139 | `(i32 i32) -> (i32 i32)` |
| `Ur4e` | func | 1568 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `AdeZ` | func | 2148 | `(i32 i32) -> ()` |
| `VPLt` | func | 1204 | `(i32 i32) -> ()` |
| `nJBm` | func | 2578 | `(i32) -> (i32)` |
| `zK8Q` | func | 832 | `(i32 i32 i32 i32) -> (i32)` |
| `cthv` | func | 2435 | `(i32 i32) -> (i32)` |
| `eh8T` | func | 973 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `D8DM` | func | 3274 | `() -> ()` |
| `LC9o` | func | 2560 | `(i32 i32) -> ()` |
| `CySk` | func | 1203 | `(i32 i32) -> (i32)` |
| `TGfe` | func | 763 | `(i32 i32) -> (i32)` |
| `i3Sc` | func | 2481 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `g9ei` | func | 1613 | `(i32 i32) -> (i32)` |
| `dGV8` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `a1aE` | func | 939 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `JuNi` | func | 1992 | `(i32) -> ()` |
| `Ww8x` | func | 2617 | `(i32) -> (i32)` |
| `BFVu` | func | 1534 | `(i32) -> (i32)` |
| `iWIB` | func | 1819 | `(i32) -> (i32)` |
| `fR7k` | func | 1330 | `(i32 i32) -> (i32)` |
| `svgi` | func | 2700 | `() -> (i32)` |
| `stAl` | func | 2649 | `(i32 i32) -> ()` |
| `WzOH` | func | 1616 | `(i32 f64) -> (f64)` |
| `ogCw` | func | 2667 | `() -> (i32)` |
| `Ywix` | func | 1843 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `pF5z` | func | 2583 | `(i32) -> (i32)` |
| `z5f7` | func | 3100 | `(i32 i32) -> (i32)` |
| `uxf6` | func | 1352 | `(i32 i32 i32) -> ()` |
| `hbSw` | func | 839 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `vIOg` | func | 1966 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 840 · max 840
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2250104, `i32` = i32.const 2250676

## Functions

- 2,967 bodies · 4,069,311 code bytes · avg 1.3 KB
- instruction scan: 2,967 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 115 |
| <= 128 bytes | 275 |
| <= 256 bytes | 389 |
| <= 512 bytes | 674 |
| <= 1024 bytes | 592 |
| <= 2048 bytes | 414 |
| <= 4096 bytes | 181 |
| <= 8192 bytes | 93 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 36 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,777 | 91,008 | local.get×26752, i32.const×10169, i32.load×5791, local.set×4887, local.tee×4766 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 150 | 122,738 | 58,940 | local.get×16686, i32.const×7065, i32.add×3411, local.set×3377, i32.load×3107 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,262 | 25,609 | local.get×7565, i32.const×3392, local.set×1402, i32.add×1294, i32.load×1168 |
| 3 | `(i32 i32) -> ()` | 105 | 36,397 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,462 | 14,007 | local.get×4107, i32.const×1883, i32.load×880, i32.add×647, local.set×620 |
| 5 | `(i32 i32) -> ()` | 59 | 29,628 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 177 | 20,026 | 9,398 | local.get×2934, i32.const×1038, local.set×621, i32.add×458, i32.load×421 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 17 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 105 | 20,468 | 7,839 | local.get×2940, i32.const×890, i64.store×834, i32.store×615, i64.const×478 |
| 21 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 44 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,436 | 12,890 | local.get×3670, i32.const×1868, i32.add×766, local.set×697, end×577 |
| 66 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 194 | `(i32 i32) -> ()` | 10 | 27,205 | 13,103 | local.get×4614, i32.load×1243, i32.const×1038, end×817, i32.add×750 |
| 214 | `(i32) -> ()` | 19 | 23,276 | 10,918 | local.get×2734, i32.load×1496, i32.const×1188, local.tee×1012, end×856 |
| 710 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 711 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1015 | `(i32 i32) -> (i32)` | 40 | 19,972 | 7,775 | local.get×2507, i32.const×849, i64.store×583, i32.load×394, local.set×357 |
| 1583 | `(i32 i32) -> (i32)` | 180 | 54,763 | 19,852 | local.get×6590, i32.const×2618, i64.store×1917, i64.const×1082, i64.load×1056 |
| 1982 | `(i32 i32) -> ()` | 111 | 39,589 | 17,528 | local.get×5140, i32.const×1646, local.set×891, local.tee×743, end×677 |
| 2624 | `(i32 i32) -> ()` | 398 | 142,401 | 64,327 | local.get×18492, i32.const×8026, local.set×3850, i32.load×3179, end×2818 |
| 2915 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2934 | `(i32 i32) -> ()` | 143 | 33,655 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
| `local.get` | 544,257 |
| `i32.const` | 228,612 |
| `local.tee` | 99,995 |
| `local.set` | 94,957 |
| `i32.load` | 93,832 |
| `i32.add` | 87,533 |
| `end` | 79,664 |
| `br_if` | 64,194 |
| `i32.store` | 47,139 |
| `block` | 37,474 |
| `i64.store` | 33,042 |
| `i64.const` | 32,296 |
| `if` | 30,482 |
| `call` | 30,335 |
| `i64.load` | 24,551 |
| `i32.sub` | 24,249 |
| `br` | 23,320 |
| `i32.eqz` | 19,178 |
| `select` | 16,787 |
| `i32.and` | 16,363 |
| `i32.shl` | 16,240 |
| `i32.ne` | 15,740 |
| `i32.load8_u` | 15,342 |
| `i32.eq` | 13,824 |
| `i32.store8` | 13,488 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,967/2,967 (degraded: 0)
