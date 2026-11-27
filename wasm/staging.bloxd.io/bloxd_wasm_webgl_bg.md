# WASM module: `bloxd_wasm_webgl_bg`

> environment **staging.bloxd.io** · build `fl4vv.bd3c59ce` · analyzed 2026-11-28T08:15:48+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl_bg.df031066815d46dec15a.wasm
> 5,662,882 bytes (5.4 MB) · sha256 `e3e0bf0da073da5c…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `0af65e84df22c876.11124` → `9d45e578d5c77f7c.11124` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/167 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,979 / 300 |
| Exports / imports | 167 / 301 |
| Code bytes (function bodies) | 4,121,034 (3.9 MB) |
| Total local variables | 31,782 |
| Instructions (scanable bodies) | 1,932,562 |
| Data segments / bytes | 4,290 / 1,490,580 |
| Element segments / entries | 1 / 758 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `9d45e578d5c77f7c.11124` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,543 | 182 |
| 2 | import | 3,618 | 301 |
| 3 | function | 3,035 | 2979 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,337 | 167 |
| 9 | element | 1,523 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,126,505 | 2979 |
| 11 | data | 1,525,217 | 4290 |
| 0 | custom:name | 30 | — |

## Types

182 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

301 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `zlgg.of99` | memory | `[128..14648]` |
| 0 | `zlgg.NZMG` | func | `(i32) -> (f64)` |
| 1 | `zlgg.SuuY` | func | `() -> (i32)` |
| 2 | `zlgg.zVFY` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `zlgg.TVqN` | func | `(i32) -> ()` |
| 4 | `zlgg.sGY5` | func | `(i32 i32) -> (i32)` |
| 5 | `zlgg.MMkR` | func | `(i32) -> (i32)` |
| 6 | `zlgg.TzaP` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `zlgg.uDlm` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `zlgg.izEg` | func | `(i32) -> (i32)` |
| 9 | `zlgg.sa4N` | func | `(i32 i32) -> ()` |
| 10 | `zlgg.Tvgt` | func | `(i32 i32) -> ()` |
| 11 | `zlgg.EKPy` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `zlgg.Pi0G` | func | `(i32 i32) -> (i32)` |
| 13 | `zlgg.I4nc` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `zlgg.jO1K` | func | `(i32) -> (i32)` |
| 15 | `zlgg.fPeX` | func | `(i32 i32) -> (i32)` |
| 16 | `zlgg.IsJR` | func | `(i32 i32) -> (i32)` |
| 17 | `zlgg.mnyr` | func | `(i32 i32) -> ()` |
| 18 | `zlgg.AV9d` | func | `(i32) -> (i32)` |
| 19 | `zlgg.Tqlh` | func | `(i32) -> (i32)` |
| 20 | `zlgg.GFDu` | func | `(i32) -> (i32)` |
| 21 | `zlgg.eeDp` | func | `(i32) -> ()` |
| 22 | `zlgg.y5wD` | func | `(i32 i32) -> ()` |
| 23 | `zlgg.djyt` | func | `(i32 i32) -> ()` |
| 24 | `zlgg.OvmM` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `zlgg.qBT2` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `zlgg.ca89` | func | `(i32) -> (i32)` |
| 27 | `zlgg.FkbD` | func | `(i32 i32) -> ()` |
| 28 | `zlgg.IBri` | func | `(i32 i32) -> (i32)` |
| 29 | `zlgg.ZDnq` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `zlgg.qdc4` | func | `(i32 i32) -> (i32)` |
| 31 | `zlgg.jAYf` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `zlgg.MWWt` | func | `(i32) -> (i32)` |
| 33 | `zlgg.wFSq` | func | `() -> (f64)` |
| 34 | `zlgg.qawY` | func | `(i32 i32) -> ()` |
| 35 | `zlgg.Fn0v` | func | `(i32) -> ()` |
| 36 | `zlgg.Ka1V` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `zlgg.N80i` | func | `(i32) -> (i32)` |
| 38 | `zlgg.t6p5` | func | `(i32) -> (i32)` |
| 39 | `zlgg.qSn7` | func | `(i32) -> (i32)` |
| 40 | `zlgg.ANbK` | func | `(i32 i32) -> (i32)` |
| 41 | `zlgg.XLE2` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `zlgg.uXfK` | func | `(i32) -> (i32)` |
| 43 | `zlgg.pImF` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `zlgg.gDZ1` | func | `(i32) -> (i32)` |
| 45 | `zlgg.exb6` | func | `(i32 i32 i32 i32) -> ()` |
| 46 | `zlgg.wTh2` | func | `(i32 i32 i32) -> (i32)` |
| 47 | `zlgg.lw4n` | func | `(i32 i32 i32) -> ()` |
| 48 | `zlgg.o3ET` | func | `(i32 i32 i32) -> ()` |
| 49 | `zlgg.tnKm` | func | `(i32 i32 i32) -> ()` |
| 50 | `zlgg.fLvE` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `zlgg.vso7` | func | `(i32 i32 i32 i32) -> ()` |
| 52 | `zlgg.uqCl` | func | `(i32 i32) -> ()` |
| 53 | `zlgg.kCcc` | func | `(i32 i32) -> ()` |
| 54 | `zlgg.QWct` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `zlgg.LwUs` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `zlgg.jlS0` | func | `(i32 f32 f32) -> ()` |
| 57 | `zlgg.ULg1` | func | `(i32 f32 f32) -> ()` |
| 58 | `zlgg.micE` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `zlgg.dGiT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `zlgg.WRoy` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `zlgg.K3fg` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `zlgg.AXwX` | func | `(i32 i32 i32) -> ()` |
| 63 | `zlgg.kX3q` | func | `(i32 i32 i32) -> ()` |
| 64 | `zlgg.YvvY` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `zlgg.tVuS` | func | `(i32 i32 i32) -> ()` |
| 66 | `zlgg.QmUY` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `zlgg.GxhQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `zlgg.KTLn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 69 | `zlgg.F6MC` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `zlgg.N29n` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 71 | `zlgg.UxBB` | func | `(i32) -> (i32)` |
| 72 | `zlgg.cqW1` | func | `(i32) -> ()` |
| 73 | `zlgg.g12D` | func | `(i32) -> (i32)` |
| 74 | `zlgg.mfrQ` | func | `(i32 i32) -> (i32)` |
| 75 | `zlgg.QEMJ` | func | `(i32 i32 i32) -> (i32)` |
| 76 | `zlgg.Wfl7` | func | `(i32 i32 i32) -> ()` |
| 77 | `zlgg.ewBU` | func | `(i32 i32 i32 i32) -> (i32)` |
| 78 | `zlgg.IijD` | func | `() -> (f64)` |
| 79 | `zlgg.of6X` | func | `() -> (f64)` |
| 80 | `zlgg.Qsl0` | func | `(i32 i32) -> ()` |
| 81 | `zlgg.Y19a` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 82 | `zlgg.AFxH` | func | `(i32 i32 i32) -> (i32)` |
| 83 | `zlgg.FSxo` | func | `(i32 i32 i32) -> ()` |
| 84 | `zlgg.NIhM` | func | `(i32 i32 i32) -> ()` |
| 85 | `zlgg.J6CY` | func | `(i32 i32) -> ()` |
| 86 | `zlgg.tzrP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `zlgg.YZKo` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `zlgg.ksE0` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 89 | `zlgg.Jj0l` | func | `(i32 i32) -> ()` |
| 90 | `zlgg.NnFp` | func | `(i32 i32) -> ()` |
| 91 | `zlgg.V8u2` | func | `(i32) -> (i32)` |
| 92 | `zlgg.ZSxi` | func | `(i32 i32 i32) -> ()` |
| 93 | `zlgg.WtAR` | func | `(i32 i32 i32) -> ()` |
| 94 | `zlgg.udZX` | func | `(i32) -> (i32)` |
| 95 | `zlgg.PKTb` | func | `(i32) -> (i32)` |
| 96 | `zlgg.JNOU` | func | `(i32 i32) -> ()` |
| 97 | `zlgg.JXZb` | func | `(i32 i32) -> ()` |
| 98 | `zlgg.NIfu` | func | `(i32 i32) -> ()` |
| 99 | `zlgg.oTW9` | func | `(i32 i32) -> ()` |
| 100 | `zlgg.yPoj` | func | `(i32 i32 i32) -> ()` |
| 101 | `zlgg.PRTQ` | func | `(i32 i32 i32) -> ()` |
| 102 | `zlgg.yAoz` | func | `(i32 i32 f32) -> ()` |
| 103 | `zlgg.wZE1` | func | `(i32 i32 f32) -> ()` |
| 104 | `zlgg.FLZs` | func | `(i32 i32 i32) -> ()` |
| 105 | `zlgg.A92m` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `zlgg.boss` | func | `(i32 i32 f32 f32) -> ()` |
| 107 | `zlgg.JZrl` | func | `(i32 i32) -> ()` |
| 108 | `zlgg.k3n6` | func | `(i32 i32) -> ()` |
| 109 | `zlgg.NGV8` | func | `(i32 i32) -> ()` |
| 110 | `zlgg.dr5u` | func | `(i32 i32) -> ()` |
| 111 | `zlgg.R5gX` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `zlgg.pefY` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 113 | `zlgg.gtWc` | func | `(i32 i32 i32) -> ()` |
| 114 | `zlgg.JdMJ` | func | `(i32 i32 i32) -> ()` |
| 115 | `zlgg.zAaH` | func | `(i32 i32 i32 i32) -> ()` |
| 116 | `zlgg.hQgP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 117 | `zlgg.mUFW` | func | `(i32 i32) -> ()` |
| 118 | `zlgg.ZDKs` | func | `(i32 i32) -> ()` |
| 119 | `zlgg.gZvb` | func | `(i32 i32) -> (i32)` |
| 120 | `zlgg.FgCI` | func | `(i32 i32) -> (i32)` |
| 121 | `zlgg.Hefg` | func | `(i32 i32) -> ()` |
| 122 | `zlgg.hzkH` | func | `(i32 i32) -> ()` |
| 123 | `zlgg.EtGE` | func | `(i32) -> (i32)` |
| 124 | `zlgg.APiw` | func | `(i32 i32) -> ()` |
| 125 | `zlgg.eKoK` | func | `(i32 i32) -> ()` |
| 126 | `zlgg.RZqM` | func | `(i32 i32 i32 i32) -> ()` |
| 127 | `zlgg.UUs4` | func | `(i32 i32 i32) -> ()` |
| 128 | `zlgg.nWDq` | func | `(i32 i32 i32) -> ()` |
| 129 | `zlgg.H2qZ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 130 | `zlgg.m9ab` | func | `(i32 i32) -> ()` |
| 131 | `zlgg.xVyS` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `zlgg.XP8B` | func | `(i32 i32 i32 i32) -> (i32)` |
| 133 | `zlgg.i7Fw` | func | `(i32 i32 i32) -> ()` |
| 134 | `zlgg.sqVj` | func | `(i32 i32 i32) -> ()` |
| 135 | `zlgg.r3qr` | func | `(i32) -> ()` |
| 136 | `zlgg.Qw8T` | func | `(i32 i32 i32) -> (i32)` |
| 137 | `zlgg.Lqji` | func | `(i32 i32 i32) -> ()` |
| 138 | `zlgg.xwww` | func | `(i32 i32 i32) -> (i32)` |
| 139 | `zlgg.qX3j` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `zlgg.o3Mm` | func | `(i32 i32 i32) -> (i32)` |
| 141 | `zlgg.wopW` | func | `(i32 i32) -> ()` |
| 142 | `zlgg.ETH9` | func | `(i32) -> (i32)` |
| 143 | `zlgg.Zbe9` | func | `(i32 i32) -> ()` |
| 144 | `zlgg.thUl` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `zlgg.I9E6` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `zlgg.Eh5g` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `zlgg.vjR9` | func | `(i32 i32) -> ()` |
| 148 | `zlgg.klNI` | func | `(i32 i32) -> ()` |
| 149 | `zlgg.YgLZ` | func | `(i32 i32) -> ()` |
| 150 | `zlgg.TcY4` | func | `(i32 i32) -> ()` |
| 151 | `zlgg.l31U` | func | `(i32) -> (i32)` |
| 152 | `zlgg.Q69j` | func | `(i32) -> (i32)` |
| 153 | `zlgg.HbaA` | func | `(i32) -> (i32)` |
| 154 | `zlgg.WxZP` | func | `(i32) -> (i32)` |
| 155 | `zlgg.hVnf` | func | `(i32) -> (i32)` |
| 156 | `zlgg.ejmZ` | func | `(i32) -> (i32)` |
| 157 | `zlgg.iK9J` | func | `() -> (i32)` |
| 158 | `zlgg.Ujmf` | func | `() -> (i32)` |
| 159 | `zlgg.Yvw8` | func | `() -> (i32)` |
| 160 | `zlgg.CvkK` | func | `() -> (i32)` |
| 161 | `zlgg.CEBL` | func | `(i32 i32) -> (i32)` |
| 162 | `zlgg.ho8m` | func | `(i32) -> ()` |
| 163 | `zlgg.KyNi` | func | `(i32 i32) -> (i32)` |
| 164 | `zlgg.KVgJ` | func | `(i32) -> (i32)` |
| 165 | `zlgg.qzaY` | func | `(i32) -> (i32)` |
| 166 | `zlgg.h5WC` | func | `(i32) -> (i32)` |
| 167 | `zlgg.aufh` | func | `(i32) -> ()` |
| 168 | `zlgg.VjYB` | func | `(i32 i32 i32) -> (i32)` |
| 169 | `zlgg.wKv4` | func | `(i32) -> (i32)` |
| 170 | `zlgg.Wi9Q` | func | `(i32) -> (i32)` |
| 171 | `zlgg.A9K2` | func | `(i32 i32) -> (i32)` |
| 172 | `zlgg.l4sG` | func | `(i32) -> ()` |
| 173 | `zlgg.M0Av` | func | `() -> (i32)` |
| 174 | `zlgg.KR5B` | func | `(i32 i32) -> (i32)` |
| 175 | `zlgg.L2rd` | func | `(i32 i32) -> ()` |
| 176 | `zlgg.dZqx` | func | `(i32 i32) -> ()` |
| 177 | `zlgg.Tk7Y` | func | `(i32) -> (i32)` |
| 178 | `zlgg.fkSd` | func | `(i32 i32) -> (i32)` |
| 179 | `zlgg.cxVE` | func | `(i32) -> ()` |
| 180 | `zlgg.FPtV` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `zlgg.eQWw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 182 | `zlgg.MYXQ` | func | `(i32 i32) -> ()` |
| 183 | `zlgg.DFWT` | func | `(i32 i32) -> ()` |
| 184 | `zlgg.ZjVz` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `zlgg.BIEf` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 186 | `zlgg.vOKz` | func | `(i32 f32) -> ()` |
| 187 | `zlgg.B4hF` | func | `(i32 f32) -> ()` |
| 188 | `zlgg.v1jY` | func | `(i32 i32) -> ()` |
| 189 | `zlgg.Hj8R` | func | `(i32 i32) -> ()` |
| 190 | `zlgg.RseJ` | func | `(i32) -> (i32)` |
| 191 | `zlgg.PWB5` | func | `(i32) -> (i32)` |
| 192 | `zlgg.vvsy` | func | `(i32) -> (i32)` |
| 193 | `zlgg.rrit` | func | `(i32) -> (i32)` |
| 194 | `zlgg.Ef7b` | func | `(i32 i32 i32) -> ()` |
| 195 | `zlgg.llHZ` | func | `(i32 i32 i32) -> ()` |
| 196 | `zlgg.G3O4` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `zlgg.FRmg` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 198 | `zlgg.IR4m` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 199 | `zlgg.jLlw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `zlgg.SdLT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 201 | `zlgg.gMtL` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `zlgg.ztO2` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `zlgg.XB1D` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 204 | `zlgg.crg4` | func | `(i32) -> (i32)` |
| 205 | `zlgg.f5mh` | func | `(i32) -> (i32)` |
| 206 | `zlgg.jhL0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 207 | `zlgg.zCyM` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `zlgg.VC1T` | func | `(i32 i32 i32 i32) -> ()` |
| 209 | `zlgg.h2Xb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `zlgg.bEQ2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `zlgg.NYyK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `zlgg.O3qh` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `zlgg.U2de` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 214 | `zlgg.O1Ep` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `zlgg.xJzt` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 216 | `zlgg.R9B2` | func | `(i32 i32 i32) -> ()` |
| 217 | `zlgg.yOYQ` | func | `(i32 i32 i32) -> ()` |
| 218 | `zlgg.Athd` | func | `(i32 i32) -> ()` |
| 219 | `zlgg.m8Mw` | func | `(i32 i32) -> ()` |
| 220 | `zlgg.xEGq` | func | `(i32 i32) -> ()` |
| 221 | `zlgg.tKNS` | func | `(i32 i32) -> ()` |
| 222 | `zlgg.lwBj` | func | `(i32 i32) -> ()` |
| 223 | `zlgg.oawP` | func | `(i32 i32) -> ()` |
| 224 | `zlgg.lCli` | func | `(i32 f32 f32) -> ()` |
| 225 | `zlgg.lhVn` | func | `(i32 f32 f32) -> ()` |
| 226 | `zlgg.NOOk` | func | `(i32 i32) -> ()` |
| 227 | `zlgg.QKEU` | func | `(i32 i32) -> ()` |
| 228 | `zlgg.iNIc` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `zlgg.HLdI` | func | `(i32 i32 i32 f32) -> ()` |
| 230 | `zlgg.r4ya` | func | `(i32 i32 i32) -> ()` |
| 231 | `zlgg.EoFa` | func | `(i32) -> (i32)` |
| 232 | `zlgg.pKRt` | func | `(i32) -> (i32)` |
| 233 | `zlgg.wKlQ` | func | `(i32 i32) -> ()` |
| 234 | `zlgg.Yiq4` | func | `(i32 i32) -> ()` |
| 235 | `zlgg.mr2E` | func | `(i32 i32 i32 i32) -> (i32)` |
| 236 | `zlgg.jymQ` | func | `(i32 i32 i32 i32) -> ()` |
| 237 | `zlgg.EITh` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `zlgg.CoG0` | func | `(i32 i32 i32) -> ()` |
| 239 | `zlgg.IW70` | func | `(i32 i32 i32) -> ()` |
| 240 | `zlgg.FaKy` | func | `(i32 i32 i32) -> ()` |
| 241 | `zlgg.VFTD` | func | `(i32 i32 i32) -> ()` |
| 242 | `zlgg.pNFn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `zlgg.oYz5` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `zlgg.csiH` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `zlgg.uAbb` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 246 | `zlgg.aHdZ` | func | `(i32) -> (i32)` |
| 247 | `zlgg.r0cz` | func | `(i32) -> (i32)` |
| 248 | `zlgg.SgsU` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `zlgg.hN5y` | func | `(i32 i32) -> ()` |
| 250 | `zlgg.tCaS` | func | `(i32 i32) -> ()` |
| 251 | `zlgg.yncx` | func | `(i32 i32) -> (i32)` |
| 252 | `zlgg.yEoP` | func | `(i32 i32) -> (i32)` |
| 253 | `zlgg.vOog` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `zlgg.Kev4` | func | `(i32 i32 i32 i32) -> ()` |
| 255 | `zlgg.zM4e` | func | `(i32 i32) -> ()` |
| 256 | `zlgg.OdRg` | func | `(i32 i32) -> ()` |
| 257 | `zlgg.fsdM` | func | `(i32) -> (i32)` |
| 258 | `zlgg.IS3M` | func | `(i32 i32 i32 i32) -> ()` |
| 259 | `zlgg.syDe` | func | `(i32 i32 i32 f32) -> ()` |
| 260 | `zlgg.XHco` | func | `(i32) -> ()` |
| 261 | `zlgg.cRgi` | func | `(i32 i32) -> ()` |
| 262 | `zlgg.mjju` | func | `(i32 i32) -> ()` |
| 263 | `zlgg.y9Vc` | func | `(i32 i32) -> ()` |
| 264 | `zlgg.xuvB` | func | `(i32 i32) -> ()` |
| 265 | `zlgg.HX7A` | func | `(i32 i32) -> ()` |
| 266 | `zlgg.b0LM` | func | `(i32 i32) -> ()` |
| 267 | `zlgg.omGa` | func | `(i32 i32) -> ()` |
| 268 | `zlgg.gtfK` | func | `(i32 i32) -> ()` |
| 269 | `zlgg.ioF1` | func | `(i32) -> (i32)` |
| 270 | `zlgg.kCQF` | func | `(i32) -> (i32)` |
| 271 | `zlgg.nRXm` | func | `(i32) -> (i32)` |
| 272 | `zlgg.nOJN` | func | `(i32) -> (i32)` |
| 273 | `zlgg.p0iu` | func | `(i32 i32 i32 i32) -> ()` |
| 274 | `zlgg.zUpI` | func | `(i32) -> ()` |
| 275 | `zlgg.Zqy9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `zlgg.JKdg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `zlgg.bo11` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `zlgg.pXvS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `zlgg.RdiW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `zlgg.n4md` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 281 | `zlgg.qR6y` | func | `(i32) -> (i32)` |
| 282 | `zlgg.gZQZ` | func | `(i32) -> (i32)` |
| 283 | `zlgg.yv17` | func | `(i32) -> (i32)` |
| 284 | `zlgg.absO` | func | `(i32) -> (i32)` |
| 285 | `zlgg.H6fH` | func | `(i32 i32) -> ()` |
| 286 | `zlgg.bvWV` | func | `(i32) -> ()` |
| 287 | `zlgg.KWkY` | func | `(i32 i32) -> ()` |
| 288 | `zlgg.dv89` | func | `(i32) -> (i32)` |
| 289 | `zlgg.T1Wr` | func | `(i32 i32) -> (i32)` |
| 290 | `zlgg.h43J` | func | `(i32 i32) -> (i32)` |
| 291 | `zlgg.fnQP` | func | `(i32 i32) -> (i32)` |
| 292 | `zlgg.NQQ9` | func | `(f64) -> (i32)` |
| 293 | `zlgg.bAZ6` | func | `(i32 i32) -> (i32)` |
| 294 | `zlgg.seyU` | func | `(i32 i32) -> (i32)` |
| 295 | `zlgg.vKx1` | func | `(i32 i32) -> (i32)` |
| 296 | `zlgg.wO8j` | func | `(i32 i32) -> (i32)` |
| 297 | `zlgg.Qi9U` | func | `(i32 i32) -> (i32)` |
| 298 | `zlgg.azjx` | func | `(i32 i32) -> (i32)` |
| 299 | `zlgg.Qjf2` | func | `(i32 i32) -> (i32)` |

## Exports

167 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `h9ho` | func | 1354 | `(i32) -> ()` |
| `qwa3` | func | 1568 | `(i32 i32 i32) -> (i32)` |
| `xwdc` | func | 3041 | `(i32 i32 i32 i32) -> (i32)` |
| `SHVi` | func | 2521 | `(i32) -> (f64)` |
| `io0e` | func | 2827 | `(i32) -> (i32)` |
| `P0dA` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `N9zx` | func | 3035 | `(i32 i32) -> (i32)` |
| `RvDB` | func | 1764 | `(i32) -> (i32)` |
| `NmKw` | func | 2526 | `(i32) -> (i32)` |
| `pHdz` | func | 2870 | `(i32) -> ()` |
| `MjoA` | func | 3239 | `() -> (f64)` |
| `aJya` | func | 3244 | `(i32) -> ()` |
| `DA0c` | func | 3073 | `(i32 i32) -> (i32 i32)` |
| `RuLf` | func | 1371 | `(i32 i32 i32) -> (i32)` |
| `bHin` | func | 2611 | `() -> (i32)` |
| `zpEn` | func | 1864 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `PiE4` | func | 2337 | `(i32 i32) -> ()` |
| `e54q` | func | 2525 | `(i32) -> (i32)` |
| `TtZG` | func | 2057 | `(i32 f64) -> (i32)` |
| `VHR4` | func | 2560 | `(i32) -> (i32)` |
| `f4qN` | func | 679 | `(i32 i32) -> (i32)` |
| `vHMg` | func | 1524 | `(i32) -> (i32)` |
| `w91Z` | func | 1556 | `(i32 f64) -> (f64)` |
| `B4OP` | func | 760 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `euFk` | func | 1907 | `(i32 i32) -> ()` |
| `ZCrY` | func | 752 | `(i32 i32 i32 i32) -> (i32)` |
| `ayGK` | func | 2229 | `(i32 i32) -> (i32)` |
| `JRa5` | func | 2727 | `(i32 i32) -> ()` |
| `LWv7` | func | 2543 | `(i32 i32) -> ()` |
| `H85e` | func | 2523 | `(i32) -> (i32)` |
| `Hqdt` | func | 2031 | `(i32 i32) -> ()` |
| `QaLW` | func | 2627 | `(i32) -> ()` |
| `jF7W` | func | 3204 | `(i32) -> ()` |
| `m4uA` | func | 1628 | `(i32 i32) -> ()` |
| `ukVS` | func | 2528 | `(i32) -> ()` |
| `HQKI` | func | 1425 | `(i32 f64 f64) -> (i32)` |
| `rmZC` | func | 3164 | `() -> (i32)` |
| `PnqH` | func | 3136 | `(i32 i32) -> ()` |
| `HjyA` | global | 2 | `` |
| `LtDY` | func | 2561 | `(i32) -> (i32)` |
| `Sdfl` | func | 1554 | `(i32 i32) -> (i32)` |
| `ZQOr` | func | 908 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `p85x` | func | 2551 | `(i32) -> (i32)` |
| `SfoI` | func | 1530 | `(i32 i32) -> (i32)` |
| `XOA6` | func | 2307 | `(i32 f64) -> (i32)` |
| `Uo6f` | func | 2834 | `(i32) -> (i32)` |
| `ey1N` | func | 2075 | `(i32 f64 f64 f64) -> (i32)` |
| `ikIf` | func | 3102 | `() -> (i32 i32)` |
| `rhVj` | func | 1632 | `(i32 f64 f64 f64) -> (i32)` |
| `BSt9` | func | 1241 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `qPOx` | func | 2542 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `FXHk` | func | 3078 | `(i32 i32) -> (i32 i32)` |
| `Tg1L` | func | 712 | `(f64) -> (f64)` |
| `UXY5` | func | 2597 | `(i32 i32) -> ()` |
| `Ilwq` | func | 1977 | `(i32) -> (i32)` |
| `DCKa` | func | 1330 | `(i32 i32) -> (i32)` |
| `KABl` | func | 2388 | `(i32 i32) -> (i32)` |
| `bwOu` | func | 1741 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `xkAo` | func | 720 | `(i32 i32) -> (i32)` |
| `tRyC` | func | 2892 | `(i32) -> (i32)` |
| `dHZv` | func | 3103 | `() -> (i32 i32)` |
| `oJDS` | func | 2391 | `(i32 i32) -> (i32)` |
| `VFvH` | func | 3268 | `() -> (i32)` |
| `sHaE` | func | 1302 | `(i32 i32 i32) -> ()` |
| `E0MP` | func | 2646 | `(i32 i32) -> ()` |
| `KKKw` | func | 2610 | `(i32) -> ()` |
| `a04M` | func | 2527 | `(i32) -> (i32)` |
| `znq4` | func | 3048 | `(i32 i32) -> ()` |
| `PMF1` | func | 3074 | `(i32 i32) -> (i32 i32)` |
| `UA0M` | func | 2539 | `(i32 i32) -> ()` |
| `rNZ8` | func | 2562 | `(i32) -> (i32)` |
| `E8ED` | func | 1799 | `(i32 i32) -> (i32)` |
| `I0mj` | func | 2508 | `(i32 i32) -> ()` |
| `Ve0y` | func | 1542 | `(i32 i32) -> (i32)` |
| `s8BE` | func | 2524 | `(i32) -> (i32)` |
| `yXHW` | func | 909 | `(i32 i32) -> (i32)` |
| `jBiy` | func | 2544 | `(i32) -> (i32)` |
| `aY1F` | func | 1617 | `(i32 i32) -> (i32)` |
| `Owwn` | func | 1357 | `(i32 i32) -> (i32)` |
| `i7EF` | func | 1925 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `EYsp` | func | 2647 | `() -> (i32)` |
| `qvWM` | func | 1518 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `FG8J` | func | 1787 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `R6fs` | func | 1500 | `(i32 i32 i32 i32) -> ()` |
| `IMSp` | func | 930 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `SOf2` | func | 1669 | `(i32 i32 i32 i32) -> (i32)` |
| `nRO1` | func | 3067 | `(i32 i32 i32) -> (i32 i32)` |
| `JVLv` | func | 2306 | `(i32 i32) -> ()` |
| `xNdI` | func | 1426 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `HGAS` | func | 3127 | `(i32 i32 i32 i32) -> ()` |
| `Vyiv` | func | 1879 | `(i32 i32 i32 i32) -> (i32)` |
| `equz` | func | 2522 | `(i32) -> (i32)` |
| `DwoJ` | func | 2541 | `(i32) -> (i32)` |
| `vbiA` | func | 694 | `(i32 i32) -> (i32)` |
| `LxLG` | func | 1851 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `rJqP` | func | 1933 | `(i32) -> ()` |
| `CE0E` | func | 3089 | `(i32) -> (i32 i32)` |
| `zTYP` | func | 1589 | `(i32 i32 i32 i32) -> (i32)` |
| `ge07` | func | 2860 | `(i32) -> (i32)` |
| `bFbT` | func | 628 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `IlDj` | func | 2529 | `(i32) -> (i32)` |
| `jN8m` | func | 3075 | `(i32 i32) -> (i32 i32)` |
| `eXrS` | func | 1197 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `YiYf` | func | 3077 | `(i32 i32) -> (i32 i32)` |
| `Mduj` | func | 2116 | `(i32 i32) -> (i32)` |
| `OFlT` | func | 3086 | `(i32) -> (i32 i32)` |
| `epmL` | func | 3198 | `() -> ()` |
| `A0Kz` | func | 3072 | `(i32 i32) -> (i32 i32)` |
| `q06l` | func | 3016 | `() -> ()` |
| `FPIe` | func | 1918 | `(i32 i32) -> (i32)` |
| `fGJA` | func | 2530 | `(i32) -> (i32)` |
| `SeJR` | func | 1138 | `(i32 i32) -> ()` |
| `NiHf` | func | 756 | `(i32) -> (i32)` |
| `VRix` | func | 2462 | `(i32) -> (i32)` |
| `t6Tq` | func | 1446 | `(i32 i32) -> (i32)` |
| `hyEn` | func | 2364 | `(i32 i32 i32 i32) -> ()` |
| `radx` | func | 942 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `c6zv` | func | 870 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `jyzZ` | func | 3091 | `(i32) -> (i32 i32)` |
| `AdX2` | func | 1321 | `(i32) -> (i32)` |
| `XktX` | func | 1553 | `(i32 i32) -> (i32)` |
| `eV73` | func | 1248 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `b9T1` | func | 3090 | `(i32) -> (i32 i32)` |
| `xnsd` | func | 1137 | `(i32 i32) -> (i32)` |
| `Hv5F` | func | 3135 | `(i32 i32 i32) -> ()` |
| `J5lM` | func | 2478 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `lGz7` | func | 1899 | `(i32 i32 f64 f64 f64) -> ()` |
| `A5mn` | func | 3066 | `(i32 i32 i32) -> (i32 i32)` |
| `aawc` | func | 1295 | `(i32 i32 i32) -> (i32)` |
| `M82c` | func | 1701 | `(i32) -> ()` |
| `cONI` | func | 1472 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `YpG6` | func | 3243 | `(i32) -> (i32)` |
| `qm9p` | func | 1480 | `(i32) -> (i32)` |
| `cUy7` | func | 777 | `(i32 i32 i32) -> (i32)` |
| `wnap` | func | 2390 | `(i32 i32) -> (i32)` |
| `zG1r` | func | 3191 | `(i32 i32 i32) -> ()` |
| `AIzh` | func | 2715 | `(i32 i32) -> ()` |
| `NvPW` | func | 2434 | `(i32 i32 i32 i32) -> (i32)` |
| `cyWq` | func | 2091 | `(i32 i32) -> ()` |
| `R9UO` | func | 2552 | `(i32 i32) -> (i32)` |
| `iJxd` | func | 2389 | `(i32 i32) -> (i32)` |
| `lztF` | func | 1242 | `(i32 i32 i32 i32) -> (i32)` |
| `WCM0` | func | 3104 | `() -> (i32 i32)` |
| `t10Y` | func | 2197 | `(i32 i32) -> (i32)` |
| `UvBq` | global | 1 | `` |
| `A5F4` | func | 3267 | `() -> (i32)` |
| `E7qd` | func | 582 | `(i32 i32 i32) -> (i32)` |
| `xnMK` | func | 1995 | `(i32) -> (i32)` |
| `gy6Q` | func | 1273 | `(i32 i32) -> (i32)` |
| `gJ1M` | func | 2509 | `(i32) -> (i32)` |
| `yXu2` | func | 1859 | `() -> (i32)` |
| `oDCA` | func | 2251 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `cwzW` | func | 1477 | `() -> (i32)` |
| `ZM45` | func | 3076 | `(i32 i32) -> (i32 i32)` |
| `SGZW` | func | 2531 | `(i32) -> (i32)` |
| `Jdrc` | func | 2479 | `(i32) -> (i32)` |
| `JliI` | func | 2553 | `(i32 i32) -> (i32)` |
| `J82j` | func | 689 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `uxB1` | func | 3087 | `(i32) -> (i32 i32)` |
| `ktRf` | func | 1997 | `(i32 i32 i32 i32) -> ()` |
| `ksql` | func | 2423 | `(i32 i32) -> (i32)` |
| `Pz0p` | func | 3197 | `(i32) -> ()` |
| `wXk2` | func | 2848 | `(i32) -> (i32)` |
| `CmgX` | func | 3088 | `(i32) -> (i32 i32)` |
| `fXl0` | func | 1424 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `GzJV` | func | 1781 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 759 · max 759
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2708632, `i32` = i32.const 2709228

## Functions

- 2,979 bodies · 4,121,034 code bytes · avg 1.4 KB
- instruction scan: 2,979 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 113 |
| <= 128 bytes | 261 |
| <= 256 bytes | 387 |
| <= 512 bytes | 686 |
| <= 1024 bytes | 597 |
| <= 2048 bytes | 434 |
| <= 4096 bytes | 184 |
| <= 8192 bytes | 94 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 35 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 195,091 | 88,356 | local.get×25977, i32.const×9822, i32.load×5552, local.set×4795, local.tee×4567 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 149 | 107,711 | 52,244 | local.get×14617, i32.const×6206, i32.add×3028, local.set×2958, i32.load×2876 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,466 | 21,356 | local.get×6228, i32.const×2821, local.set×1224, i32.add×1130, i32.load×1006 |
| 3 | `(i32 i32) -> ()` | 105 | 36,615 | 16,581 | local.get×4597, i32.const×1665, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,792 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,490 | 12,813 | local.get×3796, i32.const×1624, local.set×985, i32.add×684, i32.load×669 |
| 9 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 23,045 | 10,821 | local.get×2888, i32.const×1247, i32.load×812, local.set×501, end×465 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 18 | `(i32) -> ()` | 78 | 20,103 | 9,357 | local.get×2592, i32.const×1114, i32.add×570, local.tee×513, local.set×503 |
| 24 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 25 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,318 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 28 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,818 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 35 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 71 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 204 | `(i32 i32) -> ()` | 10 | 30,134 | 14,535 | local.get×5127, i32.load×1394, i32.const×1130, end×911, i32.add×829 |
| 223 | `(i32) -> ()` | 19 | 23,308 | 10,931 | local.get×2739, i32.load×1499, i32.const×1189, local.tee×1013, end×857 |
| 739 | `(i32 i32) -> ()` | 139 | 42,975 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 740 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1618 | `(i32 i32) -> (i32)` | 182 | 55,130 | 19,838 | local.get×6600, i32.const×2596, i64.store×1935, i64.const×1087, i64.load×1068 |
| 2027 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2651 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2930 | `(i32 i32 i32 i32) -> ()` | 137 | 31,379 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2948 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
atlasSamplerfs_atlas1CANVAS_ALPHA_ONELIGHTINGfs_atlas1_restfs_atlasnfs_atlasn_restfs_nonefs_none_restfs_singlefs_single_restvs_packedSINGLE_ANIMATEDSINGLE_TEXTUREvs_packed_animvs_unpackedvs_unpacked_l
                                                                                                 skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13
456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
ue:keydownkeyupmousedownmouseuptouchstarttouchendMouse1Mouse2Mouse3Alt+Left ClickF2F4F5F8F9Digit0Digit1Digit2Digit3Digit4Digit5Digit6Digit7Digit8Digit9KeyQKeyWKeyEKeyRKeyTKeyYKeyUKeyIKeyOKeyPKeyAKeySK
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
schema23canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshowP
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
terrain-atlasn-anim-lit-packed-texterrain-atlasn-anim-lit-packed-rest-instterrain-atlasn-anim-lit-packed-instterrain-atlasn-anim-lit-packed-cells-rest-texterrain-atlasn-anim-lit-packed-cells-texterrai
a draw with a base vertex: WebGL2 has none, so it is skippedan indexed draw without an index buffer is skippeda draw's pipeline has no GL program: it is skippeda draw's program failed to link: it is s
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
R8UnormR32FloatRgba8UnormBgra8UnormDepth24PlusDepth24PlusStencil8Rgba16UintRgba32UintRgba32FloatRg32FloatUV2VERTEXCOLORVERTEXALPHAOPACITYRGBEMISSIVELITE_REFLECTION_LUMINANCEREFLECTIONMAP_OPPOSITEZROUG
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123
called `Result::unwrap()` on an `Err` valueANGLE_instanced_arraysEXT_blend_minmaxEXT_color_buffer_floatEXT_color_buffer_half_floatEXT_float_blendEXT_frag_depthEXT_shader_texture_lodEXT_sRGBEXT_texture
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 551,420 |
| `i32.const` | 230,026 |
| `local.tee` | 102,511 |
| `i32.load` | 96,687 |
| `local.set` | 95,940 |
| `i32.add` | 88,975 |
| `end` | 80,930 |
| `br_if` | 65,770 |
| `i32.store` | 47,713 |
| `block` | 37,962 |
| `i64.const` | 33,323 |
| `i64.store` | 32,548 |
| `if` | 30,995 |
| `call` | 30,188 |
| `i32.sub` | 25,173 |
| `i64.load` | 24,235 |
| `br` | 23,555 |
| `i32.eqz` | 20,043 |
| `select` | 17,496 |
| `i32.shl` | 16,748 |
| `i32.and` | 16,570 |
| `i32.ne` | 16,182 |
| `i32.load8_u` | 15,293 |
| `i32.eq` | 14,142 |
| `i32.store8` | 12,809 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,979/2,979 (degraded: 0)
