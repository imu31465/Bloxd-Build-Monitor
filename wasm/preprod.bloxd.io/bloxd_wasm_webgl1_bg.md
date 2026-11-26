# WASM module: `bloxd_wasm_webgl1_bg`

> environment **preprod.bloxd.io** · build `fecih8.fbb4bdb3` · analyzed 2026-11-26T22:08:29+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgl1_bg.35274a003fd25f814541.wasm
> 4,878,547 bytes (4.7 MB) · sha256 `955dabc5322d1e47…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,870,652 → 4,878,547 bytes (+7,895)
- defined functions 2,886 → 2,888
- code bytes 4,019,323 → 4,025,168
- data bytes 804,846 → 806,887
- name-section module id `7bbb6341ccd7a760.10663` → `daa8b99dd38cdc5b.10673`
- export signatures: +1 × `(f64) -> (f64)`
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `                                                            `
- removed embedded strings: `                                                            `

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,888 / 282 |
| Exports / imports | 160 / 283 |
| Code bytes (function bodies) | 4,025,168 (3.8 MB) |
| Total local variables | 30,889 |
| Instructions (scanable bodies) | 1,887,917 |
| Data segments / bytes | 3,771 / 806,887 |
| Element segments / entries | 1 / 734 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `daa8b99dd38cdc5b.10673` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,508 | 177 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,939 | 2888 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,475 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,030,472 | 2888 |
| 11 | data | 837,366 | 3771 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `E5Fs.z5HY` | memory | `[128..14648]` |
| 0 | `E5Fs.TKX6` | func | `(i32) -> (f64)` |
| 1 | `E5Fs.cqrh` | func | `() -> (i32)` |
| 2 | `E5Fs.eh7W` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `E5Fs.sTT4` | func | `(i32) -> ()` |
| 4 | `E5Fs.bj26` | func | `(i32 i32) -> (i32)` |
| 5 | `E5Fs.lv20` | func | `(i32) -> (i32)` |
| 6 | `E5Fs.gXIh` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `E5Fs.cChr` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `E5Fs.ru51` | func | `(i32) -> (i32)` |
| 9 | `E5Fs.Qq8x` | func | `(i32 i32) -> ()` |
| 10 | `E5Fs.JoEb` | func | `(i32 i32) -> ()` |
| 11 | `E5Fs.z2qH` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `E5Fs.YLke` | func | `(i32 i32) -> (i32)` |
| 13 | `E5Fs.dpYY` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `E5Fs.bypg` | func | `(i32) -> (i32)` |
| 15 | `E5Fs.Ec6Q` | func | `(i32 i32) -> (i32)` |
| 16 | `E5Fs.NQJn` | func | `(i32 i32) -> (i32)` |
| 17 | `E5Fs.c4ij` | func | `(i32 i32) -> ()` |
| 18 | `E5Fs.caMr` | func | `(i32) -> (i32)` |
| 19 | `E5Fs.T4Ju` | func | `(i32) -> (i32)` |
| 20 | `E5Fs.cNyh` | func | `(i32) -> (i32)` |
| 21 | `E5Fs.F5QS` | func | `(i32) -> ()` |
| 22 | `E5Fs.p2xt` | func | `(i32 i32) -> ()` |
| 23 | `E5Fs.WNuB` | func | `(i32 i32) -> ()` |
| 24 | `E5Fs.X85D` | func | `(i32) -> (i32)` |
| 25 | `E5Fs.nT3t` | func | `(i32 i32) -> ()` |
| 26 | `E5Fs.QFlf` | func | `(i32 i32) -> (i32)` |
| 27 | `E5Fs.J9Ze` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `E5Fs.VjUZ` | func | `(i32 i32) -> (i32)` |
| 29 | `E5Fs.Y7oy` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `E5Fs.A9hb` | func | `(i32) -> (i32)` |
| 31 | `E5Fs.ZxC2` | func | `() -> (f64)` |
| 32 | `E5Fs.RgyZ` | func | `(i32 i32) -> ()` |
| 33 | `E5Fs.WSXw` | func | `(i32) -> (i32)` |
| 34 | `E5Fs.dJWe` | func | `(i32) -> (i32)` |
| 35 | `E5Fs.h6Qp` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `E5Fs.eZfr` | func | `(i32) -> (i32)` |
| 37 | `E5Fs.FYdI` | func | `(i32) -> (i32)` |
| 38 | `E5Fs.Rphd` | func | `(i32) -> (i32)` |
| 39 | `E5Fs.SlYu` | func | `(i32 i32) -> (i32)` |
| 40 | `E5Fs.cEqr` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `E5Fs.qr76` | func | `(i32) -> (i32)` |
| 42 | `E5Fs.neEN` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `E5Fs.nIVr` | func | `(i32) -> (i32)` |
| 44 | `E5Fs.S2oV` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `E5Fs.Ns4u` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `E5Fs.TOYI` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `E5Fs.U16V` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `E5Fs.fII9` | func | `(i32 i32 i32) -> ()` |
| 49 | `E5Fs.WWnw` | func | `(i32 i32 i32) -> ()` |
| 50 | `E5Fs.wTj3` | func | `(i32 i32 i32) -> ()` |
| 51 | `E5Fs.ix67` | func | `(i32 i32) -> ()` |
| 52 | `E5Fs.h6WR` | func | `(i32 i32) -> ()` |
| 53 | `E5Fs.emDa` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `E5Fs.NM34` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `E5Fs.Yzzf` | func | `(i32 f32 f32) -> ()` |
| 56 | `E5Fs.KQlV` | func | `(i32 f32 f32) -> ()` |
| 57 | `E5Fs.Mz7S` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `E5Fs.ddB5` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `E5Fs.kHtg` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `E5Fs.vKAa` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `E5Fs.l99p` | func | `(i32 i32 i32) -> ()` |
| 62 | `E5Fs.U2U1` | func | `(i32 i32 i32) -> ()` |
| 63 | `E5Fs.Ngmv` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `E5Fs.FwJr` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `E5Fs.sVEk` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `E5Fs.UDr4` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `E5Fs.C2sA` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `E5Fs.c417` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `E5Fs.O9sf` | func | `(i32) -> (i32)` |
| 70 | `E5Fs.NkNp` | func | `(i32) -> ()` |
| 71 | `E5Fs.Sptn` | func | `(i32) -> (i32)` |
| 72 | `E5Fs.gsF6` | func | `(i32 i32) -> (i32)` |
| 73 | `E5Fs.gG9y` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `E5Fs.RMjd` | func | `(i32 i32 i32) -> ()` |
| 75 | `E5Fs.QF0R` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `E5Fs.P1kE` | func | `() -> (f64)` |
| 77 | `E5Fs.zBNM` | func | `() -> (f64)` |
| 78 | `E5Fs.eXSp` | func | `(i32 i32) -> ()` |
| 79 | `E5Fs.wOZQ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `E5Fs.KZnD` | func | `(i32 i32 i32) -> ()` |
| 81 | `E5Fs.XKc4` | func | `(i32 i32 i32) -> ()` |
| 82 | `E5Fs.JCy3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `E5Fs.GAkE` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `E5Fs.UlMZ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `E5Fs.tpQd` | func | `(i32 i32) -> ()` |
| 86 | `E5Fs.wDJS` | func | `(i32 i32) -> ()` |
| 87 | `E5Fs.X0au` | func | `(i32) -> (i32)` |
| 88 | `E5Fs.eZJ5` | func | `(i32 i32) -> ()` |
| 89 | `E5Fs.vOC3` | func | `(i32 i32) -> ()` |
| 90 | `E5Fs.bLB5` | func | `(i32 i32 i32) -> ()` |
| 91 | `E5Fs.xwu2` | func | `(i32 i32 i32) -> ()` |
| 92 | `E5Fs.Dx0g` | func | `(i32) -> (i32)` |
| 93 | `E5Fs.N6p9` | func | `(i32) -> (i32)` |
| 94 | `E5Fs.WgBR` | func | `(i32 i32) -> (i32)` |
| 95 | `E5Fs.Qn1Z` | func | `(i32 i32) -> (i32)` |
| 96 | `E5Fs.QNZl` | func | `(i32 i32) -> ()` |
| 97 | `E5Fs.l0ZX` | func | `(i32 i32) -> ()` |
| 98 | `E5Fs.NPtt` | func | `(i32 i32 i32) -> ()` |
| 99 | `E5Fs.c7KY` | func | `(i32 i32 i32) -> ()` |
| 100 | `E5Fs.Ahtn` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `E5Fs.Z8Ru` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `E5Fs.XNT6` | func | `(i32 i32 f32) -> ()` |
| 103 | `E5Fs.WA4F` | func | `(i32 i32 f32) -> ()` |
| 104 | `E5Fs.HSLV` | func | `(i32 i32 i32) -> ()` |
| 105 | `E5Fs.O3Wy` | func | `(i32 i32 i32) -> ()` |
| 106 | `E5Fs.y6Ke` | func | `(i32 i32 i32) -> ()` |
| 107 | `E5Fs.XEqh` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `E5Fs.pOuJ` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `E5Fs.clWE` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `E5Fs.hwWh` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `E5Fs.it0q` | func | `(i32 i32) -> ()` |
| 112 | `E5Fs.mQ2H` | func | `(i32 i32) -> ()` |
| 113 | `E5Fs.HIaV` | func | `(i32 i32) -> ()` |
| 114 | `E5Fs.Tm0c` | func | `(i32 i32) -> ()` |
| 115 | `E5Fs.bdKa` | func | `(i32) -> (i32)` |
| 116 | `E5Fs.RG9C` | func | `(i32) -> (i32)` |
| 117 | `E5Fs.GXTX` | func | `(i32) -> (i32)` |
| 118 | `E5Fs.vE4d` | func | `(i32) -> (i32)` |
| 119 | `E5Fs.J0Ny` | func | `(i32 i32) -> ()` |
| 120 | `E5Fs.vkrq` | func | `(i32 i32) -> ()` |
| 121 | `E5Fs.Mjvj` | func | `(i32 i32) -> ()` |
| 122 | `E5Fs.bmcB` | func | `(i32 i32) -> ()` |
| 123 | `E5Fs.XxVq` | func | `(i32 i32) -> ()` |
| 124 | `E5Fs.O07b` | func | `(i32 i32) -> ()` |
| 125 | `E5Fs.Xcs5` | func | `(i32 i32) -> (i32)` |
| 126 | `E5Fs.hAPH` | func | `(i32 i32) -> (i32)` |
| 127 | `E5Fs.rFRz` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `E5Fs.YnRD` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `E5Fs.xqwR` | func | `(i32 i32) -> ()` |
| 130 | `E5Fs.p3as` | func | `(i32 i32) -> ()` |
| 131 | `E5Fs.SWCa` | func | `(i32) -> (i32)` |
| 132 | `E5Fs.BUJR` | func | `(i32 i32) -> ()` |
| 133 | `E5Fs.QIO8` | func | `(i32 i32) -> ()` |
| 134 | `E5Fs.QqYK` | func | `(i32 i32 i32) -> ()` |
| 135 | `E5Fs.heFo` | func | `(i32 i32 i32) -> ()` |
| 136 | `E5Fs.v2EY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `E5Fs.mLJd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `E5Fs.rUdQ` | func | `(i32 i32) -> ()` |
| 139 | `E5Fs.dWm9` | func | `(i32 i32 i32) -> ()` |
| 140 | `E5Fs.FMkL` | func | `(i32 i32 i32) -> ()` |
| 141 | `E5Fs.qUkf` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `E5Fs.bzRY` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `E5Fs.XkBQ` | func | `(i32 i32 i32) -> ()` |
| 144 | `E5Fs.OjVH` | func | `(i32 i32 i32) -> ()` |
| 145 | `E5Fs.YqMJ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `E5Fs.kwa8` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `E5Fs.J4yA` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `E5Fs.G1TG` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `E5Fs.mFfA` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `E5Fs.FGa7` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `E5Fs.ZrEA` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `E5Fs.r7lH` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `E5Fs.YSck` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `E5Fs.hEFb` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `E5Fs.VFhj` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `E5Fs.MFKz` | func | `(i32) -> (i32)` |
| 157 | `E5Fs.alzO` | func | `(i32) -> (i32)` |
| 158 | `E5Fs.KG4K` | func | `(i32) -> (i32)` |
| 159 | `E5Fs.Pty0` | func | `(i32) -> (i32)` |
| 160 | `E5Fs.GSGW` | func | `() -> (i32)` |
| 161 | `E5Fs.Egyl` | func | `() -> (i32)` |
| 162 | `E5Fs.UQZL` | func | `() -> (i32)` |
| 163 | `E5Fs.pUbe` | func | `() -> (i32)` |
| 164 | `E5Fs.VRhd` | func | `(i32 i32) -> (i32)` |
| 165 | `E5Fs.u9dU` | func | `(i32) -> ()` |
| 166 | `E5Fs.IWg4` | func | `(i32 i32) -> (i32)` |
| 167 | `E5Fs.TvTZ` | func | `(i32) -> (i32)` |
| 168 | `E5Fs.za3H` | func | `(i32) -> (i32)` |
| 169 | `E5Fs.dxoW` | func | `(i32) -> (i32)` |
| 170 | `E5Fs.FH1o` | func | `(i32) -> ()` |
| 171 | `E5Fs.Sm94` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `E5Fs.XV0T` | func | `(i32) -> (i32)` |
| 173 | `E5Fs.OQVw` | func | `(i32) -> (i32)` |
| 174 | `E5Fs.EU40` | func | `(i32 i32) -> (i32)` |
| 175 | `E5Fs.kGwO` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `E5Fs.xVlb` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `E5Fs.XpHo` | func | `(i32) -> (i32)` |
| 178 | `E5Fs.Teyz` | func | `(i32) -> (i32)` |
| 179 | `E5Fs.tbAa` | func | `(i32) -> (i32)` |
| 180 | `E5Fs.mtve` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `E5Fs.Zbij` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `E5Fs.YkXK` | func | `(i32 i32) -> ()` |
| 183 | `E5Fs.Igeo` | func | `(i32 i32 i32) -> ()` |
| 184 | `E5Fs.ANZe` | func | `(i32 i32) -> ()` |
| 185 | `E5Fs.envi` | func | `(i32 i32 i32) -> ()` |
| 186 | `E5Fs.RvaP` | func | `(i32 i32) -> ()` |
| 187 | `E5Fs.ZLQO` | func | `(i32 i32) -> ()` |
| 188 | `E5Fs.opWU` | func | `(i32) -> (i32)` |
| 189 | `E5Fs.dNNG` | func | `(i32 i32) -> (i32)` |
| 190 | `E5Fs.ijSZ` | func | `(i32) -> ()` |
| 191 | `E5Fs.IZRg` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `E5Fs.kG54` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `E5Fs.AjXP` | func | `(i32 i32) -> ()` |
| 194 | `E5Fs.ivPo` | func | `(i32 i32) -> ()` |
| 195 | `E5Fs.Gx9G` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `E5Fs.S56T` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `E5Fs.d8pG` | func | `(i32 f32) -> ()` |
| 198 | `E5Fs.vjSa` | func | `(i32 f32) -> ()` |
| 199 | `E5Fs.uOXB` | func | `(i32 i32) -> ()` |
| 200 | `E5Fs.LzaH` | func | `(i32 i32) -> ()` |
| 201 | `E5Fs.xfhR` | func | `(i32) -> (i32)` |
| 202 | `E5Fs.ugx7` | func | `(i32) -> (i32)` |
| 203 | `E5Fs.Ubm2` | func | `(i32) -> (i32)` |
| 204 | `E5Fs.JAiu` | func | `(i32) -> (i32)` |
| 205 | `E5Fs.ofu9` | func | `(i32 i32 i32) -> ()` |
| 206 | `E5Fs.jTJc` | func | `(i32 i32 i32) -> ()` |
| 207 | `E5Fs.Gtxp` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `E5Fs.TTw8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `E5Fs.Y1JP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `E5Fs.W30P` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `E5Fs.Nw9M` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `E5Fs.WiQm` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `E5Fs.gY69` | func | `(i32 i32) -> ()` |
| 214 | `E5Fs.xGlU` | func | `(i32 i32) -> ()` |
| 215 | `E5Fs.dzdW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `E5Fs.pPC7` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `E5Fs.IAJs` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `E5Fs.lwHf` | func | `(i32) -> (i32)` |
| 219 | `E5Fs.psq2` | func | `(i32) -> (i32)` |
| 220 | `E5Fs.NIx7` | func | `(i32 i32) -> ()` |
| 221 | `E5Fs.hdko` | func | `(i32 i32) -> ()` |
| 222 | `E5Fs.LTar` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `E5Fs.Aq1L` | func | `(i32) -> (i32)` |
| 224 | `E5Fs.yj9J` | func | `(i32) -> (i32)` |
| 225 | `E5Fs.Jw2d` | func | `(i32 i32) -> ()` |
| 226 | `E5Fs.fwDt` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `E5Fs.WmNd` | func | `(i32 i32) -> ()` |
| 228 | `E5Fs.UgqI` | func | `(i32 i32) -> ()` |
| 229 | `E5Fs.v7fC` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `E5Fs.w9Ik` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `E5Fs.elqE` | func | `(i32 i32 i32) -> ()` |
| 232 | `E5Fs.BrUo` | func | `(i32 i32 i32) -> ()` |
| 233 | `E5Fs.dSPC` | func | `(i32 i32) -> ()` |
| 234 | `E5Fs.V8ny` | func | `(i32 i32) -> ()` |
| 235 | `E5Fs.kt52` | func | `(i32 i32) -> ()` |
| 236 | `E5Fs.f5Yc` | func | `(i32 i32) -> ()` |
| 237 | `E5Fs.SOM7` | func | `(i32 i32) -> ()` |
| 238 | `E5Fs.dKRR` | func | `(i32 i32) -> ()` |
| 239 | `E5Fs.nfKr` | func | `(i32 f32 f32) -> ()` |
| 240 | `E5Fs.wspH` | func | `(i32 f32 f32) -> ()` |
| 241 | `E5Fs.VCRN` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `E5Fs.Bxrw` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `E5Fs.Ochx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `E5Fs.oEtW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `E5Fs.AK72` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `E5Fs.tFOX` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `E5Fs.EOK0` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `E5Fs.XtSY` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `E5Fs.c9DL` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `E5Fs.MAcD` | func | `(i32) -> ()` |
| 251 | `E5Fs.lYqj` | func | `(i32 i32) -> ()` |
| 252 | `E5Fs.K2PD` | func | `(i32 i32) -> ()` |
| 253 | `E5Fs.AXYO` | func | `(i32 i32) -> ()` |
| 254 | `E5Fs.Bclj` | func | `(i32 i32) -> ()` |
| 255 | `E5Fs.GM7x` | func | `(i32 i32) -> ()` |
| 256 | `E5Fs.sbw8` | func | `(i32 i32) -> ()` |
| 257 | `E5Fs.VWIa` | func | `(i32 i32) -> ()` |
| 258 | `E5Fs.MclT` | func | `(i32 i32) -> ()` |
| 259 | `E5Fs.DTsU` | func | `(i32) -> (i32)` |
| 260 | `E5Fs.UF51` | func | `(i32) -> (i32)` |
| 261 | `E5Fs.zi2h` | func | `(i32) -> (i32)` |
| 262 | `E5Fs.NArM` | func | `(i32) -> (i32)` |
| 263 | `E5Fs.d5sM` | func | `(i32) -> ()` |
| 264 | `E5Fs.uA6K` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `E5Fs.hG3v` | func | `(i32) -> ()` |
| 266 | `E5Fs.xBdP` | func | `(i32) -> (i32)` |
| 267 | `E5Fs.vPBo` | func | `(i32) -> (i32)` |
| 268 | `E5Fs.LLZx` | func | `(i32) -> (i32)` |
| 269 | `E5Fs.bGKU` | func | `(i32) -> (i32)` |
| 270 | `E5Fs.nmgd` | func | `(i32 i32) -> ()` |
| 271 | `E5Fs.OONv` | func | `(i32) -> ()` |
| 272 | `E5Fs.oSdi` | func | `(i32 i32) -> ()` |
| 273 | `E5Fs.JIXW` | func | `(i32) -> (i32)` |
| 274 | `E5Fs.FRWw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `E5Fs.ZYfe` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `E5Fs.tKpe` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `E5Fs.PPU5` | func | `(i32 i32) -> (i32)` |
| 278 | `E5Fs.DPBX` | func | `(i32 i32) -> (i32)` |
| 279 | `E5Fs.lPx7` | func | `(i32 i32) -> (i32)` |
| 280 | `E5Fs.NL29` | func | `(i32 i32) -> (i32)` |
| 281 | `E5Fs.z6Fy` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `dkkS` | func | 1497 | `(i32 i32) -> (i32)` |
| `NbBd` | func | 1418 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `pQST` | func | 3090 | `() -> ()` |
| `TRqN` | func | 876 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `QGxZ` | func | 3135 | `(i32) -> (i32)` |
| `YBi3` | func | 1814 | `(i32 i32 i32 i32) -> (i32)` |
| `Wa50` | func | 1925 | `(i32) -> (i32)` |
| `Kg10` | func | 1512 | `(i32 i32 i32) -> (i32)` |
| `iMad` | func | 2560 | `() -> (i32)` |
| `GA7A` | func | 723 | `(i32 i32 i32 i32) -> (i32)` |
| `VCqJ` | func | 1097 | `(i32 i32) -> ()` |
| `Nid4` | func | 3131 | `() -> (f64)` |
| `q2jy` | func | 1702 | `(i32) -> (i32)` |
| `LUUp` | func | 3018 | `(i32 i32 i32 i32) -> ()` |
| `YDyB` | func | 2776 | `(i32) -> ()` |
| `k4Ss` | func | 2996 | `() -> (i32 i32)` |
| `tSkn` | func | 2916 | `() -> ()` |
| `kKpi` | func | 1464 | `(i32 i32 i32 i32) -> (i32)` |
| `DYhc` | func | 2048 | `(i32 i32) -> (i32)` |
| `zgbF` | func | 1910 | `(i32) -> (i32)` |
| `oCvJ` | func | 2766 | `(i32) -> (i32)` |
| `XYVS` | func | 1834 | `(i32 i32 f64 f64 f64) -> ()` |
| `Szq2` | func | 2268 | `(i32 i32) -> ()` |
| `xbgP` | func | 2447 | `(i32) -> (i32)` |
| `G9If` | func | 1842 | `(i32 i32) -> ()` |
| `gRtG` | func | 2473 | `(i32 i32) -> (i32)` |
| `xJOa` | func | 3136 | `(i32) -> ()` |
| `lqFL` | func | 1443 | `(i32 i32 i32 i32) -> ()` |
| `d1MW` | func | 2994 | `() -> (i32 i32)` |
| `gwRZ` | func | 2462 | `(i32) -> (i32)` |
| `cv7b` | func | 684 | `(f64) -> (f64)` |
| `WW8H` | func | 2384 | `(i32) -> (i32)` |
| `moJi` | func | 877 | `(i32 i32) -> (i32)` |
| `nVaR` | func | 2452 | `(i32) -> (i32)` |
| `tt1J` | func | 1799 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `xcym` | func | 2757 | `(i32) -> (i32)` |
| `Krxi` | func | 1867 | `(i32) -> ()` |
| `aekB` | func | 895 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `l0wK` | func | 2238 | `(i32 f64) -> (i32)` |
| `VCK2` | func | 2007 | `(i32 f64 f64 f64) -> (i32)` |
| `HTaO` | func | 691 | `(i32 i32) -> (i32)` |
| `fzuo` | func | 2995 | `() -> (i32 i32)` |
| `EuYS` | func | 2984 | `(i32) -> (i32 i32)` |
| `A9Tb` | func | 2482 | `(i32) -> (i32)` |
| `XgrG` | func | 2444 | `(i32) -> (i32)` |
| `mGRa` | func | 3159 | `() -> (i32)` |
| `P0OE` | func | 2430 | `(i32) -> (i32)` |
| `iykX` | func | 2448 | `(i32) -> (i32)` |
| `E4ZS` | func | 3056 | `() -> (i32)` |
| `dhxI` | func | 2976 | `(i32 i32) -> (i32 i32)` |
| `axKM` | func | 1717 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `U461` | func | 2463 | `(i32) -> (i32)` |
| `fARm` | func | 1227 | `(i32 i32) -> (i32)` |
| `KZVu` | func | 2445 | `(i32) -> (i32)` |
| `XQsn` | func | 1960 | `(i32 i32) -> ()` |
| `qFAk` | func | 2972 | `(i32 i32) -> (i32 i32)` |
| `cj4g` | func | 1868 | `(i32) -> ()` |
| `Un9J` | func | 2981 | `(i32) -> (i32 i32)` |
| `BwVD` | func | 2973 | `(i32 i32) -> (i32 i32)` |
| `c3bp` | func | 2129 | `(i32 i32) -> (i32)` |
| `klex` | func | 662 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `P1ul` | func | 2318 | `(i32 i32) -> (i32)` |
| `t1a7` | func | 1794 | `() -> (i32)` |
| `d0bh` | func | 1485 | `(i32 i32) -> (i32)` |
| `UaWy` | func | 1987 | `(i32 f64) -> (i32)` |
| `RlDi` | func | 2460 | `(i32 i32) -> ()` |
| `fxOy` | func | 2515 | `(i32 i32) -> ()` |
| `DCKv` | func | 1562 | `(i32 i32) -> (i32)` |
| `PEcm` | func | 1681 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `eAKs` | func | 1735 | `(i32 i32) -> (i32)` |
| `gfjO` | func | 1096 | `(i32 i32) -> (i32)` |
| `RV6j` | func | 1198 | `(i32 i32 i32 i32) -> (i32)` |
| `NCMZ` | func | 1500 | `(i32 f64) -> (f64)` |
| `We36` | func | 2965 | `(i32 i32 i32) -> (i32 i32)` |
| `G9XK` | func | 2559 | `(i32 i32) -> ()` |
| `N7Jj` | func | 2315 | `(i32 i32) -> (i32)` |
| `bi1N` | func | 2983 | `(i32) -> (i32 i32)` |
| `ae6O` | func | 3027 | `(i32 i32 i32) -> ()` |
| `c48e` | func | 2023 | `(i32 i32) -> ()` |
| `h7dm` | func | 2465 | `(i32) -> (i32)` |
| `q4zS` | func | 1859 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `VmPN` | func | 550 | `(i32 i32 i32) -> (i32)` |
| `u4Ik` | func | 2464 | `(i32 i32) -> ()` |
| `kNHM` | func | 2970 | `(i32 i32) -> (i32 i32)` |
| `Vowr` | func | 2526 | `() -> (i32)` |
| `oFlO` | func | 3160 | `() -> (i32)` |
| `k55Q` | func | 1724 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `MNDo` | func | 2401 | `(i32) -> (i32)` |
| `O1zF` | func | 2450 | `(i32) -> ()` |
| `D3ii` | func | 2446 | `(i32) -> (i32)` |
| `Dy0L` | func | 1323 | `(i32 i32 i32) -> (i32)` |
| `m2Du` | func | 750 | `(i32 i32 i32) -> (i32)` |
| `wCnl` | func | 2429 | `(i32 i32) -> ()` |
| `Nsmq` | func | 1246 | `(i32 i32 i32) -> (i32)` |
| `VJPA` | func | 3028 | `(i32 i32) -> ()` |
| `fyNs` | func | 1496 | `(i32 i32) -> (i32)` |
| `mpiD` | func | 2472 | `(i32) -> (i32)` |
| `bxey` | func | 1373 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `QN1r` | func | 1269 | `(i32) -> (i32)` |
| `adeV` | func | 2160 | `(i32 i32) -> (i32)` |
| `QXsf` | func | 841 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `eEd3` | func | 2982 | `(i32) -> (i32 i32)` |
| `KmHn` | func | 1575 | `(i32 i32) -> ()` |
| `xGM3` | func | 2182 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `JKlE` | func | 2317 | `(i32 i32) -> (i32)` |
| `eUGT` | func | 2449 | `(i32) -> (i32)` |
| `XNaP` | func | 2451 | `(i32) -> (i32)` |
| `p3E7` | global | 1 | `` |
| `XwsL` | func | 906 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `XVbx` | func | 1460 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `iNUt` | func | 1157 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `c3hO` | func | 1374 | `(i32 f64 f64) -> (i32)` |
| `Gz2L` | global | 2 | `` |
| `zZ6N` | func | 2443 | `(i32) -> (f64)` |
| `CKXL` | func | 1927 | `(i32 i32 i32 i32) -> ()` |
| `M0BK` | func | 3089 | `(i32) -> ()` |
| `MPnf` | func | 3083 | `(i32 i32 i32) -> ()` |
| `pclT` | func | 2481 | `(i32) -> (i32)` |
| `yoGo` | func | 651 | `(i32 i32) -> (i32)` |
| `m8td` | func | 1472 | `(i32 i32) -> (i32)` |
| `ZdWq` | func | 2453 | `(i32) -> (i32)` |
| `AtJg` | func | 1304 | `(i32) -> ()` |
| `aaNu` | func | 2474 | `(i32 i32) -> (i32)` |
| `FPBy` | func | 666 | `(i32 i32) -> (i32)` |
| `VpyQ` | func | 2400 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Osf5` | func | 1197 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `Jpi4` | func | 2935 | `(i32 i32) -> (i32)` |
| `PzO9` | func | 2346 | `(i32 i32) -> (i32)` |
| `Mlxj` | func | 1465 | `(i32) -> (i32)` |
| `RJs9` | func | 1533 | `(i32 i32 i32 i32) -> (i32)` |
| `Z3fu` | func | 2743 | `(i32) -> (i32)` |
| `L8qc` | func | 599 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `slnI` | func | 2971 | `(i32 i32) -> (i32 i32)` |
| `ycNr` | func | 2359 | `(i32 i32 i32 i32) -> (i32)` |
| `nAaF` | func | 1251 | `(i32 i32 i32) -> ()` |
| `vE8H` | func | 1425 | `(i32) -> (i32)` |
| `xK4l` | func | 727 | `(i32) -> (i32)` |
| `lMl2` | func | 1574 | `(i32 i32) -> ()` |
| `h1PG` | func | 1616 | `(i32 i32 i32 i32) -> (i32)` |
| `Xx4X` | func | 2974 | `(i32 i32) -> (i32 i32)` |
| `FvbG` | func | 731 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `ygAj` | func | 2941 | `(i32 i32 i32 i32) -> (i32)` |
| `F88s` | func | 2966 | `(i32 i32 i32) -> (i32 i32)` |
| `LGmq` | func | 2947 | `(i32 i32) -> ()` |
| `pbUf` | func | 2316 | `(i32 i32) -> (i32)` |
| `IONb` | func | 1204 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `oBBw` | func | 1278 | `(i32 i32) -> (i32)` |
| `ImtB` | func | 2975 | `(i32 i32) -> (i32 i32)` |
| `rhXo` | func | 1455 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `FpSA` | func | 1579 | `(i32 f64 f64 f64) -> (i32)` |
| `nq19` | func | 1307 | `(i32 i32) -> (i32)` |
| `sfkf` | func | 1395 | `(i32 i32) -> (i32)` |
| `D9Hv` | func | 1422 | `() -> (i32)` |
| `jGK8` | func | 1852 | `(i32 i32) -> (i32)` |
| `iXo6` | func | 2798 | `(i32) -> (i32)` |
| `l9De` | func | 2980 | `(i32) -> (i32 i32)` |
| `KvLK` | func | 2483 | `(i32) -> (i32)` |
| `ckcg` | func | 2736 | `(i32) -> (i32)` |
| `paDJ` | func | 2237 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 735 · max 735
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2020136, `i32` = i32.const 2020692

## Functions

- 2,888 bodies · 4,025,168 code bytes · avg 1.4 KB
- instruction scan: 2,888 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 105 |
| <= 128 bytes | 251 |
| <= 256 bytes | 368 |
| <= 512 bytes | 672 |
| <= 1024 bytes | 579 |
| <= 2048 bytes | 423 |
| <= 4096 bytes | 177 |
| <= 8192 bytes | 90 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,813 | 91,028 | local.get×26756, i32.const×10177, i32.load×5791, local.set×4887, local.tee×4767 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,624 | 54,591 | local.get×15198, i32.const×6563, i32.add×3205, local.set×3091, i32.load×2948 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 105 | 36,598 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,787 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,392 | 12,764 | local.get×3784, i32.const×1615, local.set×985, i32.add×682, i32.load×663 |
| 9 | `(i32 i32 i32) -> (i32)` | 74 | 22,549 | 10,769 | local.get×2881, i32.const×1289, i32.load×749, local.set×499, i32.add×477 |
| 10 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,312 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,817 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 34 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 70 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 193 | `(i32 i32) -> ()` | 10 | 26,901 | 12,955 | local.get×4560, i32.load×1227, i32.const×1030, end×807, i32.add×742 |
| 215 | `(i32) -> ()` | 19 | 23,258 | 10,909 | local.get×2733, i32.load×1495, i32.const×1187, local.tee×1011, end×855 |
| 722 | `(i32 i32) -> ()` | 139 | 42,973 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 723 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1570 | `(i32 i32) -> (i32)` | 182 | 55,022 | 19,876 | local.get×6611, i32.const×2601, i64.store×1935, i64.const×1087, i64.load×1068 |
| 1977 | `(i32 i32) -> ()` | 111 | 39,746 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2569 | `(i32 i32) -> ()` | 398 | 142,175 | 64,156 | local.get×18412, i32.const×8003, local.set×3828, i32.load×3150, end×2805 |
| 2839 | `(i32 i32 i32 i32) -> ()` | 137 | 31,374 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2858 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                 skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13
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
| `local.get` | 538,496 |
| `i32.const` | 225,156 |
| `local.tee` | 100,004 |
| `i32.load` | 93,979 |
| `local.set` | 93,934 |
| `i32.add` | 86,826 |
| `end` | 78,924 |
| `br_if` | 64,376 |
| `i32.store` | 46,412 |
| `block` | 37,171 |
| `i64.const` | 32,470 |
| `i64.store` | 31,701 |
| `if` | 30,106 |
| `call` | 29,082 |
| `i32.sub` | 24,552 |
| `i64.load` | 23,453 |
| `br` | 23,148 |
| `i32.eqz` | 19,499 |
| `select` | 17,075 |
| `i32.shl` | 16,367 |
| `i32.and` | 16,356 |
| `i32.ne` | 15,842 |
| `i32.load8_u` | 14,916 |
| `i32.eq` | 13,942 |
| `i32.store8` | 12,611 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,888/2,888 (degraded: 0)
