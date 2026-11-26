# WASM module: `bloxd_wasm_webgpu_bg`

> environment **preprod.bloxd.io** · build `fecih8.fbb4bdb3` · analyzed 2026-11-26T22:08:29+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgpu_bg.482e5347e53126bf888b.wasm
> 5,162,616 bytes (4.9 MB) · sha256 `45fb92410826d455…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,157,353 → 5,162,616 bytes (+5,263)
- defined functions 2,967 → 2,969
- code bytes 4,069,311 → 4,072,812
- data bytes 1,041,569 → 1,043,340
- name-section module id `7a32ea29144a3534.12337` → `6eee5e70b407bf72.12347`
- export signatures: +1 × `(f64) -> (f64)`
- export identifiers rotated by the obfuscator: 1/163 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `                                                            `
- removed embedded strings: `                                                            `

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,969 / 393 |
| Exports / imports | 163 / 394 |
| Code bytes (function bodies) | 4,072,812 (3.9 MB) |
| Total local variables | 31,171 |
| Instructions (scanable bodies) | 1,904,740 |
| Data segments / bytes | 3,543 / 1,043,340 |
| Element segments / entries | 1 / 839 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `6eee5e70b407bf72.12347` |
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
| 10 | code | 4,078,231 | 2969 |
| 11 | data | 1,072,002 | 3543 |
| 0 | custom:name | 30 | — |

## Types

179 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `RTrC.hITR` | memory | `[128..14648]` |
| 0 | `RTrC.FTc2` | func | `(i32) -> (i32)` |
| 1 | `RTrC.g35D` | func | `(i32) -> (f64)` |
| 2 | `RTrC.Xdj2` | func | `() -> (i32)` |
| 3 | `RTrC.YNOd` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `RTrC.s0OM` | func | `(i32) -> ()` |
| 5 | `RTrC.nwUh` | func | `(i32 i32) -> (i32)` |
| 6 | `RTrC.XU7h` | func | `(i32) -> (i32)` |
| 7 | `RTrC.uxSn` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `RTrC.WT2W` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `RTrC.WRiO` | func | `(i32) -> (i32)` |
| 10 | `RTrC.pxAB` | func | `(i32 i32) -> ()` |
| 11 | `RTrC.OkhJ` | func | `(i32 i32) -> ()` |
| 12 | `RTrC.kGes` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `RTrC.YJrE` | func | `(i32 i32) -> (i32)` |
| 14 | `RTrC.KtLU` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `RTrC.OKd5` | func | `(i32) -> (i32)` |
| 16 | `RTrC.amtF` | func | `(i32 i32) -> (i32)` |
| 17 | `RTrC.EQ04` | func | `(i32 i32) -> (i32)` |
| 18 | `RTrC.fVCm` | func | `(i32 i32) -> ()` |
| 19 | `RTrC.B1rZ` | func | `(i32) -> (i32)` |
| 20 | `RTrC.DZX0` | func | `(i32) -> (i32)` |
| 21 | `RTrC.QFnD` | func | `(i32 i32 i32) -> ()` |
| 22 | `RTrC.vMgc` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `RTrC.Szze` | func | `(i32) -> (i32)` |
| 24 | `RTrC.wKew` | func | `(i32) -> (i32)` |
| 25 | `RTrC.Ark1` | func | `(i32 i32) -> ()` |
| 26 | `RTrC.scb0` | func | `(i32 i32) -> (i32)` |
| 27 | `RTrC.qLTS` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `RTrC.S7Dv` | func | `(i32) -> (i32)` |
| 29 | `RTrC.wTem` | func | `(i32) -> (i32)` |
| 30 | `RTrC.ywSU` | func | `(i32) -> (i32)` |
| 31 | `RTrC.P4H2` | func | `(i32) -> (i32)` |
| 32 | `RTrC.DFmL` | func | `(i32) -> (i32)` |
| 33 | `RTrC.p82b` | func | `(i32 i32 i32) -> ()` |
| 34 | `RTrC.lN2t` | func | `(i32 i32) -> (i32)` |
| 35 | `RTrC.ZD1M` | func | `(i32) -> (i32)` |
| 36 | `RTrC.F85D` | func | `(i32) -> ()` |
| 37 | `RTrC.wrf6` | func | `(i32) -> (i32)` |
| 38 | `RTrC.wWdV` | func | `(i32) -> (i32)` |
| 39 | `RTrC.tp6g` | func | `(i32) -> ()` |
| 40 | `RTrC.Oxte` | func | `(i32 i32) -> (i32)` |
| 41 | `RTrC.Czg9` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `RTrC.LVBX` | func | `(i32) -> ()` |
| 43 | `RTrC.IRhV` | func | `(i32 i32) -> ()` |
| 44 | `RTrC.VJDS` | func | `() -> (i32)` |
| 45 | `RTrC.SqNm` | func | `(i32 i32) -> (i32)` |
| 46 | `RTrC.U1QX` | func | `(i32 i32) -> (i32)` |
| 47 | `RTrC.WSuY` | func | `(i32) -> (i32)` |
| 48 | `RTrC.PbFJ` | func | `(i32) -> (i32)` |
| 49 | `RTrC.X2RY` | func | `(i32) -> (i32)` |
| 50 | `RTrC.MYdt` | func | `(i32 i32) -> ()` |
| 51 | `RTrC.EDAt` | func | `(i32) -> (i32)` |
| 52 | `RTrC.pdCX` | func | `(i32) -> ()` |
| 53 | `RTrC.N64y` | func | `(i32 i32) -> (i32)` |
| 54 | `RTrC.P1gA` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `RTrC.iMGH` | func | `(i32) -> (i32)` |
| 56 | `RTrC.JfcT` | func | `(i32 i32 i32) -> ()` |
| 57 | `RTrC.m0pB` | func | `(i32 i32) -> ()` |
| 58 | `RTrC.rPOz` | func | `(i32) -> (i32)` |
| 59 | `RTrC.R2v8` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `RTrC.bXsM` | func | `(i32) -> ()` |
| 61 | `RTrC.svOa` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `RTrC.CNsN` | func | `(i32) -> ()` |
| 63 | `RTrC.WrtP` | func | `(i32 i32 i32) -> ()` |
| 64 | `RTrC.w0bJ` | func | `(i32 i32) -> ()` |
| 65 | `RTrC.L7ez` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `RTrC.kCON` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `RTrC.iOgn` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `RTrC.hSSq` | func | `(i32 i32 f64) -> ()` |
| 69 | `RTrC.iShl` | func | `(i32) -> (i32)` |
| 70 | `RTrC.bAIq` | func | `(i32 i32) -> ()` |
| 71 | `RTrC.YaBs` | func | `(i32 i32 i32) -> ()` |
| 72 | `RTrC.CE4J` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `RTrC.sfVV` | func | `(i32 i32 i32) -> ()` |
| 74 | `RTrC.mGIO` | func | `(i32) -> ()` |
| 75 | `RTrC.HefM` | func | `(i32 i32) -> ()` |
| 76 | `RTrC.DUKJ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `RTrC.kkcv` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `RTrC.UXZv` | func | `(i32 i32 i32) -> ()` |
| 79 | `RTrC.rGNO` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `RTrC.Y69s` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `RTrC.o5bf` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `RTrC.hW0f` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `RTrC.rRaw` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `RTrC.G8kM` | func | `(i32 i32 i32) -> ()` |
| 85 | `RTrC.kHhO` | func | `(i32 i32) -> (i32)` |
| 86 | `RTrC.BvJZ` | func | `(i32) -> (i32)` |
| 87 | `RTrC.lIPg` | func | `(i32) -> (i32)` |
| 88 | `RTrC.Plnp` | func | `(i32) -> (i32)` |
| 89 | `RTrC.R8u5` | func | `(i32 i32) -> (i32)` |
| 90 | `RTrC.xZOE` | func | `(i32) -> ()` |
| 91 | `RTrC.Y5sw` | func | `(i32) -> (i32)` |
| 92 | `RTrC.YZ95` | func | `(i32 i32) -> (i32)` |
| 93 | `RTrC.m0bU` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `RTrC.b6pc` | func | `(i32 i32 i32) -> ()` |
| 95 | `RTrC.Lvb1` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `RTrC.ajoF` | func | `() -> (f64)` |
| 97 | `RTrC.GotN` | func | `() -> (f64)` |
| 98 | `RTrC.p2Nn` | func | `(i32 i32) -> ()` |
| 99 | `RTrC.Lt3R` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `RTrC.SHKU` | func | `(i32) -> (i32)` |
| 101 | `RTrC.Y1un` | func | `(i32) -> (i32)` |
| 102 | `RTrC.QM3f` | func | `(i32) -> (i32)` |
| 103 | `RTrC.eyIP` | func | `() -> (i32)` |
| 104 | `RTrC.RfuE` | func | `() -> (i32)` |
| 105 | `RTrC.KqtV` | func | `() -> (i32)` |
| 106 | `RTrC.uqVU` | func | `() -> (i32)` |
| 107 | `RTrC.UkVi` | func | `(i32 i32) -> (i32)` |
| 108 | `RTrC.EzwE` | func | `(i32) -> ()` |
| 109 | `RTrC.ir1y` | func | `(i32 i32) -> (i32)` |
| 110 | `RTrC.EBH7` | func | `(i32) -> (i32)` |
| 111 | `RTrC.n4Pe` | func | `() -> (f64)` |
| 112 | `RTrC.Beq0` | func | `(i32) -> (i32)` |
| 113 | `RTrC.vmbx` | func | `(i32 i32) -> ()` |
| 114 | `RTrC.A9ec` | func | `(i32 i32) -> ()` |
| 115 | `RTrC.XM9z` | func | `(i32 i32) -> ()` |
| 116 | `RTrC.SH0q` | func | `(i32 f32) -> ()` |
| 117 | `RTrC.lZPd` | func | `(i32 f32) -> ()` |
| 118 | `RTrC.chep` | func | `(i32 i32) -> ()` |
| 119 | `RTrC.s58w` | func | `(i32 i32) -> ()` |
| 120 | `RTrC.HVuk` | func | `(i32 i32) -> ()` |
| 121 | `RTrC.ZrBU` | func | `(i32 i32) -> ()` |
| 122 | `RTrC.aUFO` | func | `(i32 i32 i32) -> ()` |
| 123 | `RTrC.Uzwe` | func | `(i32 i32) -> (i32)` |
| 124 | `RTrC.Kthf` | func | `(i32 i32) -> ()` |
| 125 | `RTrC.tSOO` | func | `(i32 i32) -> ()` |
| 126 | `RTrC.varb` | func | `(i32 i32) -> ()` |
| 127 | `RTrC.MkhV` | func | `(i32 i32) -> ()` |
| 128 | `RTrC.TSUM` | func | `(i32 f64) -> ()` |
| 129 | `RTrC.yKUm` | func | `(i32 f64) -> ()` |
| 130 | `RTrC.egFi` | func | `(i32 i32) -> ()` |
| 131 | `RTrC.iQst` | func | `(i32 i32 i32) -> ()` |
| 132 | `RTrC.GWnL` | func | `(i32 i32) -> ()` |
| 133 | `RTrC.wIaE` | func | `(i32 i32) -> (i32)` |
| 134 | `RTrC.pLqP` | func | `(i32 i32 i32) -> ()` |
| 135 | `RTrC.XZpD` | func | `(i32 i32 i32) -> ()` |
| 136 | `RTrC.XbF7` | func | `(i32 i32) -> (i32)` |
| 137 | `RTrC.kAnH` | func | `(i32 i32) -> (i32)` |
| 138 | `RTrC.WduV` | func | `(i32 i32 i32) -> ()` |
| 139 | `RTrC.LW7l` | func | `(i32 i32 i32) -> ()` |
| 140 | `RTrC.VyI5` | func | `(i32 i32) -> (i32)` |
| 141 | `RTrC.VCRr` | func | `(i32 i32) -> ()` |
| 142 | `RTrC.OgTn` | func | `(i32 i32) -> ()` |
| 143 | `RTrC.snKm` | func | `(i32 i32) -> ()` |
| 144 | `RTrC.oIsw` | func | `(i32 i32) -> ()` |
| 145 | `RTrC.ZSbW` | func | `(i32 i32) -> ()` |
| 146 | `RTrC.SMqv` | func | `(i32 i32) -> ()` |
| 147 | `RTrC.RkIy` | func | `(i32 i32) -> ()` |
| 148 | `RTrC.qRGu` | func | `(i32 f64) -> ()` |
| 149 | `RTrC.gnx9` | func | `(i32 i32) -> ()` |
| 150 | `RTrC.oQ0B` | func | `(i32 i32) -> ()` |
| 151 | `RTrC.LZxU` | func | `(i32 i32) -> ()` |
| 152 | `RTrC.eMkX` | func | `(i32 i32) -> ()` |
| 153 | `RTrC.qoac` | func | `(i32 i32) -> ()` |
| 154 | `RTrC.rR6H` | func | `(i32 i32) -> ()` |
| 155 | `RTrC.JaGJ` | func | `(i32 i32) -> ()` |
| 156 | `RTrC.ufOi` | func | `(i32 i32) -> ()` |
| 157 | `RTrC.BBAN` | func | `(i32 i32) -> ()` |
| 158 | `RTrC.YsDd` | func | `(i32 i32 i32) -> ()` |
| 159 | `RTrC.nioH` | func | `(i32 i32 i32) -> ()` |
| 160 | `RTrC.tl4i` | func | `(i32 i32) -> (i32)` |
| 161 | `RTrC.CdBV` | func | `(i32 i32) -> (i32)` |
| 162 | `RTrC.K219` | func | `(i32 i32) -> ()` |
| 163 | `RTrC.XWOZ` | func | `(i32 i32) -> ()` |
| 164 | `RTrC.Pea6` | func | `(i32 f64) -> ()` |
| 165 | `RTrC.mJ7A` | func | `(i32 i32) -> ()` |
| 166 | `RTrC.YmZS` | func | `(i32 i32) -> ()` |
| 167 | `RTrC.gmoP` | func | `(i32 i32) -> ()` |
| 168 | `RTrC.xpOQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `RTrC.bXNG` | func | `(i32 f64) -> ()` |
| 170 | `RTrC.Pc0O` | func | `(i32 f64) -> ()` |
| 171 | `RTrC.Xbf9` | func | `(i32 f64) -> ()` |
| 172 | `RTrC.yQfz` | func | `(i32 f64) -> ()` |
| 173 | `RTrC.LzzK` | func | `(i32 i32) -> ()` |
| 174 | `RTrC.gnfC` | func | `(i32 i32) -> ()` |
| 175 | `RTrC.FJgP` | func | `(i32 i32) -> ()` |
| 176 | `RTrC.fzD9` | func | `(i32 i32) -> ()` |
| 177 | `RTrC.YJPg` | func | `(i32 i32) -> ()` |
| 178 | `RTrC.sz3h` | func | `(i32 i32 i32) -> ()` |
| 179 | `RTrC.KBPS` | func | `(i32 i32) -> ()` |
| 180 | `RTrC.jg7V` | func | `(i32 f32) -> ()` |
| 181 | `RTrC.q5tY` | func | `(i32 i32) -> ()` |
| 182 | `RTrC.LYlR` | func | `(i32 i32) -> ()` |
| 183 | `RTrC.pVf7` | func | `(i32 i32) -> ()` |
| 184 | `RTrC.PUxS` | func | `(i32 i32) -> ()` |
| 185 | `RTrC.U238` | func | `(i32 i32) -> ()` |
| 186 | `RTrC.Wnuk` | func | `(i32 i32) -> ()` |
| 187 | `RTrC.a82y` | func | `(i32 i32) -> ()` |
| 188 | `RTrC.iNSR` | func | `(i32 i32) -> ()` |
| 189 | `RTrC.Ukub` | func | `(i32 i32) -> ()` |
| 190 | `RTrC.cBiu` | func | `(i32 i32) -> ()` |
| 191 | `RTrC.b32N` | func | `(i32 i32) -> ()` |
| 192 | `RTrC.U2MK` | func | `(i32 i32) -> ()` |
| 193 | `RTrC.grIq` | func | `(i32 i32) -> (i32)` |
| 194 | `RTrC.XjWz` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `RTrC.vyB0` | func | `(i32 i32) -> ()` |
| 196 | `RTrC.VgT3` | func | `(i32 i32 i32) -> ()` |
| 197 | `RTrC.gaZJ` | func | `(i32 i32) -> (i32)` |
| 198 | `RTrC.B1rO` | func | `(i32) -> (i32)` |
| 199 | `RTrC.vicU` | func | `(i32 i32) -> ()` |
| 200 | `RTrC.NHSS` | func | `(i32 i32) -> ()` |
| 201 | `RTrC.g76q` | func | `(i32 i32) -> ()` |
| 202 | `RTrC.gO8K` | func | `(i32 i32) -> ()` |
| 203 | `RTrC.Or4f` | func | `(i32 i32) -> ()` |
| 204 | `RTrC.RytK` | func | `(i32 i32) -> ()` |
| 205 | `RTrC.lMaS` | func | `(i32 i32) -> ()` |
| 206 | `RTrC.bglj` | func | `(i32 i32) -> ()` |
| 207 | `RTrC.XDtb` | func | `(i32) -> (i32)` |
| 208 | `RTrC.WAh7` | func | `(i32 i32 i32) -> ()` |
| 209 | `RTrC.ZES6` | func | `(i32 i32) -> ()` |
| 210 | `RTrC.JcUH` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `RTrC.wxJP` | func | `(i32 i32) -> ()` |
| 212 | `RTrC.vWA7` | func | `(i32) -> ()` |
| 213 | `RTrC.HjcD` | func | `(i32 i32) -> ()` |
| 214 | `RTrC.cCvx` | func | `(i32) -> (i32)` |
| 215 | `RTrC.BTln` | func | `(i32 i32 i32) -> ()` |
| 216 | `RTrC.tuAa` | func | `(i32 i32) -> ()` |
| 217 | `RTrC.AKqi` | func | `(i32 i32) -> ()` |
| 218 | `RTrC.LYnG` | func | `(i32 i32) -> ()` |
| 219 | `RTrC.GPKR` | func | `(i32 i32) -> ()` |
| 220 | `RTrC.Kkhl` | func | `(i32 i32) -> (i32)` |
| 221 | `RTrC.j5FB` | func | `(i32 i32) -> ()` |
| 222 | `RTrC.e6Zg` | func | `(i32 i32) -> ()` |
| 223 | `RTrC.tCRX` | func | `(i32 i32) -> ()` |
| 224 | `RTrC.RfNO` | func | `(i32 i32) -> ()` |
| 225 | `RTrC.LDru` | func | `(i32 i32) -> ()` |
| 226 | `RTrC.GOGN` | func | `(i32 i32) -> ()` |
| 227 | `RTrC.uaTc` | func | `(i32 i32) -> ()` |
| 228 | `RTrC.BUNS` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `RTrC.Xeqv` | func | `(i32) -> (i32)` |
| 230 | `RTrC.hTYU` | func | `(i32) -> ()` |
| 231 | `RTrC.cZoM` | func | `(i32 f64) -> ()` |
| 232 | `RTrC.vmOI` | func | `(i32 i32) -> ()` |
| 233 | `RTrC.ikMq` | func | `(i32 i32) -> ()` |
| 234 | `RTrC.xKzB` | func | `(i32 i32 i32) -> ()` |
| 235 | `RTrC.qNrI` | func | `(i32 i32) -> (i32)` |
| 236 | `RTrC.i8Us` | func | `(i32 i32) -> ()` |
| 237 | `RTrC.ABde` | func | `(i32 i32) -> ()` |
| 238 | `RTrC.qu4l` | func | `(i32 i32) -> ()` |
| 239 | `RTrC.SxqC` | func | `(i32 i32 i32) -> ()` |
| 240 | `RTrC.UGN8` | func | `(i32 i32) -> ()` |
| 241 | `RTrC.hMWd` | func | `(i32 i32) -> ()` |
| 242 | `RTrC.Jf9b` | func | `(i32 i32) -> ()` |
| 243 | `RTrC.w50R` | func | `(i32 i32 i32) -> ()` |
| 244 | `RTrC.aJkN` | func | `(i32 i32) -> ()` |
| 245 | `RTrC.cYSj` | func | `(i32 i32) -> ()` |
| 246 | `RTrC.TprH` | func | `(i32 i32 i32) -> ()` |
| 247 | `RTrC.kEv9` | func | `(i32 i32) -> (i32)` |
| 248 | `RTrC.wrlm` | func | `(i32 i32) -> ()` |
| 249 | `RTrC.AuvV` | func | `(i32 i32 i32) -> ()` |
| 250 | `RTrC.JTUe` | func | `(i32 i32) -> ()` |
| 251 | `RTrC.DPoe` | func | `(i32 f64) -> ()` |
| 252 | `RTrC.KoM0` | func | `(i32 i32) -> ()` |
| 253 | `RTrC.C6J5` | func | `(i32 f64) -> ()` |
| 254 | `RTrC.SGvi` | func | `(i32 i32 i32) -> ()` |
| 255 | `RTrC.LIhj` | func | `(i32 i32) -> ()` |
| 256 | `RTrC.JkNW` | func | `(i32 i32 i32) -> ()` |
| 257 | `RTrC.LNK9` | func | `(i32 i32) -> ()` |
| 258 | `RTrC.dBtc` | func | `(i32 i32) -> ()` |
| 259 | `RTrC.UcYM` | func | `(i32 i32) -> ()` |
| 260 | `RTrC.dnPI` | func | `(i32 i32 i32) -> ()` |
| 261 | `RTrC.n7Xp` | func | `(i32 i32) -> ()` |
| 262 | `RTrC.akWM` | func | `(i32 i32) -> ()` |
| 263 | `RTrC.ZwhG` | func | `(i32 i32) -> ()` |
| 264 | `RTrC.MMQE` | func | `(i32 i32) -> ()` |
| 265 | `RTrC.UnId` | func | `(i32 f32) -> ()` |
| 266 | `RTrC.LTip` | func | `(i32 f32) -> ()` |
| 267 | `RTrC.kuXz` | func | `(i32 i32) -> ()` |
| 268 | `RTrC.ZSKr` | func | `(i32 i32) -> ()` |
| 269 | `RTrC.iM3G` | func | `(i32 i32) -> ()` |
| 270 | `RTrC.LN2G` | func | `(i32 i32) -> ()` |
| 271 | `RTrC.BfAN` | func | `(i32 i32) -> ()` |
| 272 | `RTrC.mTde` | func | `(i32 i32) -> ()` |
| 273 | `RTrC.CnWl` | func | `(i32 i32) -> ()` |
| 274 | `RTrC.bGkP` | func | `(i32 i32) -> ()` |
| 275 | `RTrC.mhwb` | func | `(i32 i32) -> ()` |
| 276 | `RTrC.Idsz` | func | `(i32 i32) -> ()` |
| 277 | `RTrC.mjac` | func | `(i32 i32) -> ()` |
| 278 | `RTrC.CBpU` | func | `(i32 i32) -> ()` |
| 279 | `RTrC.tWFV` | func | `(i32 i32) -> ()` |
| 280 | `RTrC.QoBp` | func | `(i32 i32) -> ()` |
| 281 | `RTrC.URFi` | func | `(i32 i32) -> ()` |
| 282 | `RTrC.kqvz` | func | `(i32 i32) -> ()` |
| 283 | `RTrC.RSDM` | func | `(i32 i32) -> ()` |
| 284 | `RTrC.XVR8` | func | `(i32 i32) -> ()` |
| 285 | `RTrC.oTzG` | func | `(i32 i32 i32) -> ()` |
| 286 | `RTrC.OyAV` | func | `(i32 i32 i32) -> ()` |
| 287 | `RTrC.Qsfe` | func | `(i32 i32) -> ()` |
| 288 | `RTrC.gBR4` | func | `(i32 i32) -> ()` |
| 289 | `RTrC.vSS8` | func | `(i32 i32) -> ()` |
| 290 | `RTrC.SqKn` | func | `(i32 i32) -> ()` |
| 291 | `RTrC.wZ9O` | func | `(i32 i32) -> ()` |
| 292 | `RTrC.s4EN` | func | `(i32 i32) -> ()` |
| 293 | `RTrC.Jrfp` | func | `(i32 i32) -> ()` |
| 294 | `RTrC.leyT` | func | `(i32 i32) -> ()` |
| 295 | `RTrC.LbtK` | func | `(i32 i32) -> ()` |
| 296 | `RTrC.Y3ls` | func | `(i32 i32) -> ()` |
| 297 | `RTrC.IIg7` | func | `(i32 i32) -> ()` |
| 298 | `RTrC.rtrf` | func | `(i32 i32) -> (i32)` |
| 299 | `RTrC.K3cb` | func | `(i32 i32) -> ()` |
| 300 | `RTrC.m9sJ` | func | `(i32 i32 i32) -> ()` |
| 301 | `RTrC.jUs7` | func | `(i32 i32) -> ()` |
| 302 | `RTrC.KZZq` | func | `(i32 i32) -> ()` |
| 303 | `RTrC.a8yi` | func | `(i32 i32) -> ()` |
| 304 | `RTrC.hpM1` | func | `(i32 i32 i32) -> ()` |
| 305 | `RTrC.rIlA` | func | `(i32 i32) -> (i32)` |
| 306 | `RTrC.ZZip` | func | `(i32 i32 i32) -> ()` |
| 307 | `RTrC.w1ED` | func | `(i32 i32 i32) -> ()` |
| 308 | `RTrC.gufB` | func | `(i32 i32) -> ()` |
| 309 | `RTrC.F0LO` | func | `(i32 i32) -> ()` |
| 310 | `RTrC.BJSV` | func | `(i32 i32) -> ()` |
| 311 | `RTrC.Az4q` | func | `(i32 i32) -> ()` |
| 312 | `RTrC.i6Ay` | func | `(i32 i32) -> (i32)` |
| 313 | `RTrC.uhu1` | func | `(i32) -> (i32)` |
| 314 | `RTrC.ynqe` | func | `(i32) -> (i32)` |
| 315 | `RTrC.VVro` | func | `(i32) -> (i32)` |
| 316 | `RTrC.fAXR` | func | `(i32) -> (i32)` |
| 317 | `RTrC.bXIw` | func | `(i32) -> (i32)` |
| 318 | `RTrC.n04Z` | func | `(i32) -> (i32)` |
| 319 | `RTrC.kt8n` | func | `(i32) -> (i32)` |
| 320 | `RTrC.thmj` | func | `(i32) -> (i32)` |
| 321 | `RTrC.O0A2` | func | `(i32) -> (i32)` |
| 322 | `RTrC.d34Z` | func | `(i32) -> (i32)` |
| 323 | `RTrC.KRaJ` | func | `(i32) -> (i32)` |
| 324 | `RTrC.AKyC` | func | `(i32) -> (i32)` |
| 325 | `RTrC.k9jM` | func | `(i32) -> (i32)` |
| 326 | `RTrC.pfS9` | func | `(i32) -> (i32)` |
| 327 | `RTrC.E3rC` | func | `(i32) -> (f64)` |
| 328 | `RTrC.O7iL` | func | `(i32) -> (f64)` |
| 329 | `RTrC.HSyy` | func | `(i32) -> (i32)` |
| 330 | `RTrC.AkOM` | func | `(i32) -> (f64)` |
| 331 | `RTrC.SJXv` | func | `(i32) -> (i32)` |
| 332 | `RTrC.OcS9` | func | `(i32) -> (i32)` |
| 333 | `RTrC.JxLg` | func | `(i32) -> (i32)` |
| 334 | `RTrC.XZL5` | func | `(i32) -> (i32)` |
| 335 | `RTrC.V3q5` | func | `(i32) -> (i32)` |
| 336 | `RTrC.rbDT` | func | `(i32) -> (i32)` |
| 337 | `RTrC.LRdp` | func | `(i32) -> (i32)` |
| 338 | `RTrC.Zr0Q` | func | `(i32) -> (i32)` |
| 339 | `RTrC.Cqmi` | func | `(i32) -> (i32)` |
| 340 | `RTrC.EnSp` | func | `(i32) -> (i32)` |
| 341 | `RTrC.UsZS` | func | `(i32) -> (i32)` |
| 342 | `RTrC.jdHb` | func | `(i32) -> (i32)` |
| 343 | `RTrC.CO8K` | func | `(i32) -> (i32)` |
| 344 | `RTrC.hH4J` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `RTrC.NsHC` | func | `() -> (i32)` |
| 346 | `RTrC.oavQ` | func | `(i32 i32) -> ()` |
| 347 | `RTrC.jBMl` | func | `(i32 i32 i32) -> ()` |
| 348 | `RTrC.l0v4` | func | `(i32 i32 i32) -> ()` |
| 349 | `RTrC.O6Nv` | func | `(i32 i32) -> (i32)` |
| 350 | `RTrC.CIHm` | func | `(i32) -> (i32)` |
| 351 | `RTrC.l92V` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `RTrC.cDn8` | func | `(i32) -> ()` |
| 353 | `RTrC.Hm3f` | func | `(i32) -> (i32)` |
| 354 | `RTrC.a81H` | func | `(i32 i32) -> ()` |
| 355 | `RTrC.yeOZ` | func | `(i32) -> (i32)` |
| 356 | `RTrC.LCU8` | func | `(i32) -> (i32)` |
| 357 | `RTrC.hDh6` | func | `(i32) -> (i32)` |
| 358 | `RTrC.Uzw4` | func | `(i32) -> (i32)` |
| 359 | `RTrC.pDXO` | func | `(i32) -> (i32)` |
| 360 | `RTrC.rqFA` | func | `(i32 i32) -> ()` |
| 361 | `RTrC.BL3Q` | func | `(i32 i32) -> ()` |
| 362 | `RTrC.WHeR` | func | `(i32 i32) -> ()` |
| 363 | `RTrC.sbeE` | func | `(i32 i32) -> ()` |
| 364 | `RTrC.ND2H` | func | `(i32 i32) -> ()` |
| 365 | `RTrC.oOhf` | func | `(i32 i32) -> ()` |
| 366 | `RTrC.XgFP` | func | `(i32 i32) -> ()` |
| 367 | `RTrC.oLHy` | func | `(i32 i32 i32) -> ()` |
| 368 | `RTrC.FnSs` | func | `(i32 i32) -> ()` |
| 369 | `RTrC.onaV` | func | `(i32 i32) -> (i32)` |
| 370 | `RTrC.huyN` | func | `(i32) -> (i32)` |
| 371 | `RTrC.VBCJ` | func | `(i32) -> (i32)` |
| 372 | `RTrC.Xc2O` | func | `(i32 i32) -> ()` |
| 373 | `RTrC.PwMZ` | func | `(i32) -> (i32)` |
| 374 | `RTrC.Zcvg` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `RTrC.e6on` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `RTrC.QzK3` | func | `(i32 i32) -> ()` |
| 377 | `RTrC.mii3` | func | `(i32) -> (i32)` |
| 378 | `RTrC.XKis` | func | `(i32) -> (i32)` |
| 379 | `RTrC.Yv8q` | func | `(i32) -> (i32)` |
| 380 | `RTrC.BpFi` | func | `(i32) -> (i32)` |
| 381 | `RTrC.afE2` | func | `(i32) -> (i32)` |
| 382 | `RTrC.Q1WL` | func | `(i32) -> (i32)` |
| 383 | `RTrC.WNq6` | func | `(i32 i32) -> ()` |
| 384 | `RTrC.kKrG` | func | `(i32 i32) -> (i32)` |
| 385 | `RTrC.KQSW` | func | `(i32 i32) -> (i32)` |
| 386 | `RTrC.Fdid` | func | `(i32 i32) -> (i32)` |
| 387 | `RTrC.MiWY` | func | `(i32 i32) -> (i32)` |
| 388 | `RTrC.Pnxo` | func | `(i32 i32) -> (i32)` |
| 389 | `RTrC.CDCH` | func | `(i32 i32) -> (i32)` |
| 390 | `RTrC.em4z` | func | `(f64) -> (i32)` |
| 391 | `RTrC.ju8b` | func | `(i32 i32) -> (i32)` |
| 392 | `RTrC.ONbF` | func | `(i32 i32) -> (i32)` |

## Exports

163 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `xBVa` | func | 1205 | `(i32 i32) -> (i32)` |
| `w2cH` | func | 2953 | `(i32) -> (i32)` |
| `nPpG` | func | 3154 | `(i32) -> (i32 i32)` |
| `X8sj` | func | 2603 | `(i32 i32) -> ()` |
| `uygH` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `cbl2` | func | 3348 | `() -> (i32)` |
| `Lokw` | func | 2532 | `(i32) -> (i32)` |
| `K4OC` | func | 2597 | `(i32 i32) -> ()` |
| `XGlL` | func | 2611 | `(i32 i32) -> (i32)` |
| `TkXR` | func | 3140 | `(i32 i32) -> (i32 i32)` |
| `SQQD` | func | 2438 | `(i32 i32) -> (i32)` |
| `ZOsk` | func | 1733 | `(i32 i32 i32 i32) -> (i32)` |
| `yCFK` | func | 1994 | `(i32) -> ()` |
| `wwo9` | func | 2056 | `(i32) -> (i32)` |
| `xBei` | func | 802 | `(i32 i32) -> (i32)` |
| `p7BN` | func | 1475 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `mlFj` | func | 1629 | `(i32 i32 i32) -> (i32)` |
| `ASAM` | func | 1412 | `(i32 i32) -> (i32)` |
| `ZHGG` | func | 2621 | `(i32) -> (i32)` |
| `mFa2` | func | 2580 | `(i32) -> (i32)` |
| `MoCW` | func | 662 | `(i32 i32 i32) -> (i32)` |
| `dkDH` | func | 2919 | `(i32) -> (i32)` |
| `FX53` | func | 1309 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `ExKY` | func | 975 | `(i32 i32) -> (i32)` |
| `kf6O` | func | 2563 | `(i32 i32) -> ()` |
| `EkU4` | func | 992 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `ZZOC` | func | 940 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `aOst` | func | 1618 | `(i32 f64) -> (f64)` |
| `WAwm` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `AhjI` | func | 2610 | `(i32) -> (i32)` |
| `Ny2G` | func | 3156 | `(i32) -> (i32 i32)` |
| `pIyk` | func | 3169 | `() -> (i32 i32)` |
| `JgcX` | func | 1691 | `(i32 i32) -> ()` |
| `zTWV` | func | 1408 | `(i32) -> ()` |
| `OqUS` | func | 1695 | `(i32 f64 f64 f64) -> (i32)` |
| `z3b6` | func | 3143 | `(i32 i32) -> (i32 i32)` |
| `NN9x` | global | 1 | `` |
| `DUgV` | func | 2604 | `(i32) -> (i32)` |
| `JyRc` | func | 2650 | `(i32 i32) -> ()` |
| `DkU3` | func | 1354 | `(i32 i32 i32) -> ()` |
| `DdT0` | func | 3170 | `() -> (i32 i32)` |
| `qRJf` | func | 1476 | `(i32 f64 f64) -> (i32)` |
| `N4G2` | func | 3101 | `(i32 i32) -> (i32)` |
| `NYNj` | func | 1978 | `(i32 i32) -> (i32)` |
| `oox9` | func | 1690 | `(i32 i32) -> ()` |
| `eJ3w` | func | 2578 | `(i32) -> (f64)` |
| `owCO` | func | 1570 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `bOBT` | func | 2892 | `(i32) -> (i32)` |
| `xTz8` | func | 2588 | `(i32) -> (i32)` |
| `ckkb` | func | 2117 | `(i32 f64) -> (i32)` |
| `mQ9G` | func | 2285 | `(i32 i32) -> (i32)` |
| `LO5V` | func | 2585 | `(i32) -> ()` |
| `lXYF` | func | 3273 | `(i32) -> ()` |
| `xTQY` | func | 2483 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `VjZe` | func | 2174 | `(i32 i32) -> (i32)` |
| `cwbW` | func | 3204 | `(i32 i32 i32) -> (i32)` |
| `M6EP` | func | 2247 | `(i32 i32) -> (i32)` |
| `L5iL` | func | 2584 | `(i32) -> (i32)` |
| `WlOD` | func | 1679 | `(i32 i32) -> (i32)` |
| `hIG8` | func | 1857 | `(i32 i32) -> (i32)` |
| `HUyD` | func | 1588 | `(i32 i32) -> (i32)` |
| `ht0C` | func | 705 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZxRR` | func | 3139 | `(i32 i32) -> (i32 i32)` |
| `ipIz` | func | 1917 | `() -> (i32)` |
| `KALb` | func | 1331 | `(i32 i32) -> (i32)` |
| `o6iz` | func | 2437 | `(i32 i32) -> (i32)` |
| `tWLE` | func | 3349 | `() -> (i32)` |
| `DW39` | func | 2702 | `() -> (i32)` |
| `BVhF` | func | 2515 | `(i32) -> (i32)` |
| `Axll` | func | 1616 | `(i32 i32) -> (i32)` |
| `PhdE` | func | 2582 | `(i32) -> (i32)` |
| `d0kF` | func | 3195 | `(i32 i32 i32 i32) -> ()` |
| `CI8N` | func | 1302 | `(i32 i32 i32 i32) -> (i32)` |
| `W3Xf` | func | 1820 | `(i32) -> (i32)` |
| `q6U6` | func | 1301 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `urly` | func | 1375 | `(i32) -> (i32)` |
| `zvmk` | func | 3141 | `(i32 i32) -> (i32 i32)` |
| `umPg` | func | 2306 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `l6dT` | func | 2039 | `(i32) -> (i32)` |
| `c9SB` | func | 2150 | `(i32 i32) -> ()` |
| `Gr2y` | func | 2587 | `(i32) -> (i32)` |
| `FbWA` | func | 3264 | `(i32 i32 i32) -> ()` |
| `SjLu` | func | 3323 | `(i32) -> (i32)` |
| `uwMX` | func | 2359 | `(i32 f64) -> (i32)` |
| `Vfxb` | func | 3155 | `(i32) -> (i32 i32)` |
| `JKo1` | func | 2612 | `(i32 i32) -> (i32)` |
| `iR0L` | func | 3081 | `() -> ()` |
| `gAOb` | func | 1501 | `(i32 i32) -> (i32)` |
| `pSqu` | func | 2930 | `(i32) -> ()` |
| `P0YE` | func | 1382 | `(i32 i32) -> (i32)` |
| `dXw6` | func | 839 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `yTSs` | func | 1575 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZTK5` | func | 832 | `(i32 i32 i32 i32) -> (i32)` |
| `KRtV` | func | 1555 | `(i32 i32 i32 i32) -> ()` |
| `FOMl` | func | 2583 | `(i32) -> (i32)` |
| `v7uO` | func | 2601 | `(i32) -> (i32)` |
| `gTvT` | func | 3319 | `() -> (f64)` |
| `VZUo` | func | 2701 | `(i32 i32) -> ()` |
| `xUN4` | func | 2579 | `(i32) -> (i32)` |
| `ivSe` | func | 778 | `(i32 i32) -> (i32)` |
| `kjL0` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `Peb3` | func | 836 | `(i32) -> (i32)` |
| `s6rs` | global | 2 | `` |
| `BxI3` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `Gd5s` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `VZRT` | func | 3152 | `(i32) -> (i32 i32)` |
| `Pgwo` | func | 1838 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `GDOC` | func | 1580 | `(i32 i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `eAdw` | func | 3145 | `(i32 i32) -> (i32 i32)` |
| `wMXP` | func | 2620 | `(i32) -> (i32)` |
| `bzFs` | func | 2586 | `(i32) -> (i32)` |
| `fbDJ` | func | 3114 | `(i32 i32) -> ()` |
| `j7fc` | func | 1581 | `(i32) -> (i32)` |
| `P5kp` | func | 1940 | `(i32 i32 i32 i32) -> (i32)` |
| `hYRP` | func | 2473 | `(i32 i32) -> (i32)` |
| `lzhW` | func | 3324 | `(i32) -> ()` |
| `khU8` | func | 1528 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `aGFx` | func | 3168 | `() -> (i32 i32)` |
| `vmpZ` | func | 3108 | `(i32 i32 i32 i32) -> (i32)` |
| `KWGo` | func | 3142 | `(i32 i32) -> (i32 i32)` |
| `WZCs` | func | 2488 | `(i32 i32 i32 i32) -> (i32)` |
| `ftRF` | func | 1993 | `(i32) -> ()` |
| `pHkB` | func | 1615 | `(i32 i32) -> (i32)` |
| `pENn` | func | 1924 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `bEdg` | func | 1425 | `(i32 i32 i32) -> (i32)` |
| `xpv6` | func | 1602 | `(i32 i32) -> (i32)` |
| `dBzt` | func | 1206 | `(i32 i32) -> ()` |
| `yHcV` | func | 1797 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `U6SB` | func | 1962 | `(i32 i32 f64 f64 f64) -> ()` |
| `yIA4` | func | 2134 | `(i32 f64 f64 f64) -> (i32)` |
| `Bs3P` | func | 2581 | `(i32) -> (i32)` |
| `B4He` | func | 2440 | `(i32 i32) -> (i32)` |
| `gQjk` | func | 1536 | `(i32) -> (i32)` |
| `bT8j` | func | 772 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `JMSa` | func | 1533 | `() -> (i32)` |
| `fKFT` | func | 3206 | `(i32 i32 i32) -> ()` |
| `oAZy` | func | 3275 | `() -> ()` |
| `bniL` | func | 2091 | `(i32 i32) -> ()` |
| `oYoN` | func | 3153 | `(i32) -> (i32 i32)` |
| `BJmO` | func | 2619 | `(i32) -> (i32)` |
| `Njhc` | func | 2439 | `(i32 i32) -> (i32)` |
| `xZGS` | func | 2602 | `(i32) -> (i32)` |
| `Q4qQ` | func | 2908 | `(i32) -> (i32)` |
| `ccSi` | func | 974 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `byWe` | func | 1262 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `qsVm` | func | 1985 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `TAba` | func | 2668 | `() -> (i32)` |
| `NX4d` | func | 2385 | `(i32 i32) -> ()` |
| `rH5h` | func | 1968 | `(i32 i32) -> ()` |
| `fhNp` | func | 1004 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `hQWc` | func | 2564 | `(i32) -> (i32)` |
| `Sy0x` | func | 3234 | `() -> (i32)` |
| `n4tx` | func | 3344 | `(f64) -> (f64)` |
| `DscD` | func | 2058 | `(i32 i32 i32 i32) -> ()` |
| `cawf` | func | 3144 | `(i32 i32) -> (i32 i32)` |
| `hacQ` | func | 1844 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `c7J7` | func | 2884 | `(i32) -> (i32)` |
| `TJFV` | func | 853 | `(i32 i32 i32) -> (i32)` |
| `vjXQ` | func | 2358 | `(i32 i32) -> ()` |
| `aeyE` | func | 1650 | `(i32 i32 i32 i32) -> (i32)` |
| `b1xX` | func | 762 | `(i32 i32) -> (i32)` |
| `Gb9I` | func | 1350 | `(i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 840 · max 840
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2251872, `i32` = i32.const 2252436

## Functions

- 2,969 bodies · 4,072,812 code bytes · avg 1.3 KB
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
| 194 | `(i32 i32) -> ()` | 10 | 26,901 | 12,955 | local.get×4560, i32.load×1227, i32.const×1030, end×807, i32.add×742 |
| 214 | `(i32) -> ()` | 19 | 23,258 | 10,909 | local.get×2733, i32.load×1495, i32.const×1187, local.tee×1011, end×855 |
| 712 | `(i32 i32) -> ()` | 139 | 42,973 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 713 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1017 | `(i32 i32) -> (i32)` | 40 | 19,972 | 7,775 | local.get×2507, i32.const×849, i64.store×583, i32.load×394, local.set×357 |
| 1585 | `(i32 i32) -> (i32)` | 182 | 55,028 | 19,876 | local.get×6611, i32.const×2601, i64.store×1935, i64.const×1087, i64.load×1068 |
| 1984 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2625 | `(i32 i32) -> ()` | 398 | 142,175 | 64,156 | local.get×18412, i32.const×8003, local.set×3828, i32.load×3150, end×2805 |
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
| `local.get` | 544,564 |
| `i32.const` | 228,686 |
| `local.tee` | 99,989 |
| `local.set` | 94,952 |
| `i32.load` | 93,844 |
| `i32.add` | 87,522 |
| `end` | 79,664 |
| `br_if` | 64,251 |
| `i32.store` | 47,205 |
| `block` | 37,490 |
| `i64.store` | 33,161 |
| `i64.const` | 32,326 |
| `if` | 30,471 |
| `call` | 30,332 |
| `i64.load` | 24,594 |
| `i32.sub` | 24,243 |
| `br` | 23,322 |
| `i32.eqz` | 19,178 |
| `select` | 16,804 |
| `i32.and` | 16,370 |
| `i32.shl` | 16,237 |
| `i32.ne` | 15,738 |
| `i32.load8_u` | 15,341 |
| `i32.eq` | 13,835 |
| `i32.store8` | 13,485 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,969/2,969 (degraded: 0)
