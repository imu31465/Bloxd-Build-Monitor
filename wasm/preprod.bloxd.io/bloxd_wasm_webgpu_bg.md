# WASM module: `bloxd_wasm_webgpu_bg`

> environment **preprod.bloxd.io** · build `8104he.3820eae0` · analyzed 2026-11-25T18:33:17+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgpu_bg.0599bc4aba7f0bc869c6.wasm
> 5,139,786 bytes (4.9 MB) · sha256 `3c90d3c6f2962d9b…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,136,608 → 5,139,786 bytes (+3,178)
- defined functions 2,949 → 2,952
- code bytes 4,050,219 → 4,053,210
- data bytes 1,040,009 → 1,040,182
- name-section module id `2453a38173cd558c.12282` → `e2ab7c4ef64b2316.12298`
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,952 / 393 |
| Exports / imports | 160 / 394 |
| Code bytes (function bodies) | 4,053,210 (3.9 MB) |
| Total local variables | 30,871 |
| Instructions (scanable bodies) | 1,896,846 |
| Data segments / bytes | 3,545 / 1,040,182 |
| Element segments / entries | 1 / 839 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `e2ab7c4ef64b2316.12298` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,526 | 178 |
| 2 | import | 4,734 | 394 |
| 3 | function | 3,004 | 2952 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,685 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,058,593 | 2952 |
| 11 | data | 1,068,859 | 3545 |
| 0 | custom:name | 30 | — |

## Types

178 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Ktap.fYbi` | memory | `[128..14648]` |
| 0 | `Ktap.C3AI` | func | `(i32) -> (i32)` |
| 1 | `Ktap.d0fi` | func | `(i32) -> (f64)` |
| 2 | `Ktap.E0Oz` | func | `() -> (i32)` |
| 3 | `Ktap.UR4K` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `Ktap.zpsS` | func | `(i32) -> ()` |
| 5 | `Ktap.dGS2` | func | `(i32 i32) -> (i32)` |
| 6 | `Ktap.QkpO` | func | `(i32) -> (i32)` |
| 7 | `Ktap.FKjy` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `Ktap.PuAo` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `Ktap.PuCS` | func | `(i32) -> (i32)` |
| 10 | `Ktap.W458` | func | `(i32 i32) -> ()` |
| 11 | `Ktap.oVTb` | func | `(i32 i32) -> ()` |
| 12 | `Ktap.jqDp` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `Ktap.Xmim` | func | `(i32 i32) -> (i32)` |
| 14 | `Ktap.IVI0` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `Ktap.Be2w` | func | `(i32) -> (i32)` |
| 16 | `Ktap.BFBh` | func | `(i32 i32) -> (i32)` |
| 17 | `Ktap.geaK` | func | `(i32 i32) -> (i32)` |
| 18 | `Ktap.kQ4K` | func | `(i32 i32) -> ()` |
| 19 | `Ktap.uwTA` | func | `(i32) -> (i32)` |
| 20 | `Ktap.xrlV` | func | `(i32) -> (i32)` |
| 21 | `Ktap.iswS` | func | `(i32 i32 i32) -> ()` |
| 22 | `Ktap.OzNl` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `Ktap.DGW9` | func | `(i32) -> (i32)` |
| 24 | `Ktap.SoEc` | func | `(i32) -> (i32)` |
| 25 | `Ktap.w8hE` | func | `(i32 i32) -> ()` |
| 26 | `Ktap.g5IA` | func | `(i32 i32) -> (i32)` |
| 27 | `Ktap.fXgn` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `Ktap.ZPQz` | func | `(i32) -> (i32)` |
| 29 | `Ktap.v4jZ` | func | `(i32) -> (i32)` |
| 30 | `Ktap.IR4J` | func | `(i32) -> (i32)` |
| 31 | `Ktap.M8UY` | func | `(i32) -> (i32)` |
| 32 | `Ktap.zDfB` | func | `(i32) -> (i32)` |
| 33 | `Ktap.oQQT` | func | `(i32 i32 i32) -> ()` |
| 34 | `Ktap.uzyZ` | func | `(i32 i32) -> (i32)` |
| 35 | `Ktap.Ti3m` | func | `(i32) -> (i32)` |
| 36 | `Ktap.JNZe` | func | `(i32) -> ()` |
| 37 | `Ktap.QovU` | func | `(i32) -> (i32)` |
| 38 | `Ktap.pVnd` | func | `(i32) -> (i32)` |
| 39 | `Ktap.hqfg` | func | `(i32) -> ()` |
| 40 | `Ktap.FdvX` | func | `(i32 i32) -> (i32)` |
| 41 | `Ktap.Vebc` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `Ktap.BmJm` | func | `(i32) -> ()` |
| 43 | `Ktap.WIef` | func | `(i32 i32) -> ()` |
| 44 | `Ktap.VIeS` | func | `() -> (i32)` |
| 45 | `Ktap.xomy` | func | `(i32 i32) -> (i32)` |
| 46 | `Ktap.XFWl` | func | `(i32 i32) -> (i32)` |
| 47 | `Ktap.oQIt` | func | `(i32) -> (i32)` |
| 48 | `Ktap.m3m5` | func | `(i32) -> (i32)` |
| 49 | `Ktap.CJpF` | func | `(i32) -> (i32)` |
| 50 | `Ktap.CWYM` | func | `(i32 i32) -> ()` |
| 51 | `Ktap.vIza` | func | `(i32) -> (i32)` |
| 52 | `Ktap.NJwW` | func | `(i32) -> ()` |
| 53 | `Ktap.hwnM` | func | `(i32 i32) -> (i32)` |
| 54 | `Ktap.t5Qo` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `Ktap.HqNO` | func | `(i32) -> (i32)` |
| 56 | `Ktap.elu2` | func | `(i32 i32 i32) -> ()` |
| 57 | `Ktap.RyhI` | func | `(i32 i32) -> ()` |
| 58 | `Ktap.UVOx` | func | `(i32) -> (i32)` |
| 59 | `Ktap.Dakg` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `Ktap.wg9Q` | func | `(i32) -> ()` |
| 61 | `Ktap.zUmB` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `Ktap.rUiL` | func | `(i32) -> ()` |
| 63 | `Ktap.QblG` | func | `(i32 i32 i32) -> ()` |
| 64 | `Ktap.SzKT` | func | `(i32 i32) -> ()` |
| 65 | `Ktap.PtZD` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `Ktap.eebJ` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `Ktap.gIRy` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `Ktap.Xrae` | func | `(i32 i32 f64) -> ()` |
| 69 | `Ktap.ukm3` | func | `(i32) -> (i32)` |
| 70 | `Ktap.iHkR` | func | `(i32 i32) -> ()` |
| 71 | `Ktap.Qq27` | func | `(i32 i32 i32) -> ()` |
| 72 | `Ktap.KoBB` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `Ktap.pCj8` | func | `(i32 i32 i32) -> ()` |
| 74 | `Ktap.ZGrN` | func | `(i32) -> ()` |
| 75 | `Ktap.uh2p` | func | `(i32 i32) -> ()` |
| 76 | `Ktap.FUL0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `Ktap.Ilra` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `Ktap.yoOr` | func | `(i32 i32 i32) -> ()` |
| 79 | `Ktap.kbsX` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `Ktap.p26C` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `Ktap.mc9x` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `Ktap.WlSQ` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `Ktap.WwPT` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `Ktap.hrzv` | func | `(i32 i32 i32) -> ()` |
| 85 | `Ktap.gUNG` | func | `(i32 i32) -> (i32)` |
| 86 | `Ktap.CEV1` | func | `(i32) -> (i32)` |
| 87 | `Ktap.AxeY` | func | `(i32) -> (i32)` |
| 88 | `Ktap.WMxr` | func | `(i32) -> (i32)` |
| 89 | `Ktap.OVQe` | func | `(i32 i32) -> (i32)` |
| 90 | `Ktap.ISLx` | func | `(i32) -> ()` |
| 91 | `Ktap.A6o6` | func | `(i32) -> (i32)` |
| 92 | `Ktap.LXDY` | func | `(i32 i32) -> (i32)` |
| 93 | `Ktap.ggCP` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `Ktap.s2i3` | func | `(i32 i32 i32) -> ()` |
| 95 | `Ktap.Negq` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `Ktap.CWE3` | func | `() -> (f64)` |
| 97 | `Ktap.kwD7` | func | `() -> (f64)` |
| 98 | `Ktap.GFa5` | func | `(i32 i32) -> ()` |
| 99 | `Ktap.MSUb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `Ktap.q4uT` | func | `(i32) -> (i32)` |
| 101 | `Ktap.yo7y` | func | `(i32) -> (i32)` |
| 102 | `Ktap.qo5w` | func | `(i32) -> (i32)` |
| 103 | `Ktap.vZB8` | func | `() -> (i32)` |
| 104 | `Ktap.hy9P` | func | `() -> (i32)` |
| 105 | `Ktap.MuNK` | func | `() -> (i32)` |
| 106 | `Ktap.dOoK` | func | `() -> (i32)` |
| 107 | `Ktap.gdiV` | func | `(i32 i32) -> (i32)` |
| 108 | `Ktap.rUsF` | func | `(i32) -> ()` |
| 109 | `Ktap.BPSt` | func | `(i32 i32) -> (i32)` |
| 110 | `Ktap.RIPU` | func | `(i32) -> (i32)` |
| 111 | `Ktap.DZ5e` | func | `() -> (f64)` |
| 112 | `Ktap.DlpY` | func | `(i32) -> (i32)` |
| 113 | `Ktap.Sg22` | func | `(i32 i32) -> ()` |
| 114 | `Ktap.C1Bp` | func | `(i32 i32) -> ()` |
| 115 | `Ktap.UQjk` | func | `(i32 i32) -> ()` |
| 116 | `Ktap.Noz7` | func | `(i32 f32) -> ()` |
| 117 | `Ktap.GB1q` | func | `(i32 f32) -> ()` |
| 118 | `Ktap.rB0A` | func | `(i32 i32) -> ()` |
| 119 | `Ktap.lhWI` | func | `(i32 i32) -> ()` |
| 120 | `Ktap.h2CC` | func | `(i32 i32) -> ()` |
| 121 | `Ktap.K6NJ` | func | `(i32 i32) -> ()` |
| 122 | `Ktap.KyFF` | func | `(i32 i32 i32) -> ()` |
| 123 | `Ktap.OoUj` | func | `(i32 i32) -> (i32)` |
| 124 | `Ktap.jPcj` | func | `(i32 i32) -> ()` |
| 125 | `Ktap.l3fD` | func | `(i32 i32) -> ()` |
| 126 | `Ktap.R0ze` | func | `(i32 i32) -> ()` |
| 127 | `Ktap.I0cA` | func | `(i32 i32) -> ()` |
| 128 | `Ktap.JpzO` | func | `(i32 f64) -> ()` |
| 129 | `Ktap.oApP` | func | `(i32 f64) -> ()` |
| 130 | `Ktap.bDFn` | func | `(i32 i32) -> ()` |
| 131 | `Ktap.sZpv` | func | `(i32 i32 i32) -> ()` |
| 132 | `Ktap.uV5V` | func | `(i32 i32) -> ()` |
| 133 | `Ktap.mlFW` | func | `(i32 i32) -> (i32)` |
| 134 | `Ktap.RByo` | func | `(i32 i32 i32) -> ()` |
| 135 | `Ktap.rvdf` | func | `(i32 i32 i32) -> ()` |
| 136 | `Ktap.FyGL` | func | `(i32 i32) -> (i32)` |
| 137 | `Ktap.o54Z` | func | `(i32 i32) -> (i32)` |
| 138 | `Ktap.xGSK` | func | `(i32 i32 i32) -> ()` |
| 139 | `Ktap.ba5J` | func | `(i32 i32 i32) -> ()` |
| 140 | `Ktap.jFZ4` | func | `(i32 i32) -> (i32)` |
| 141 | `Ktap.ZSQl` | func | `(i32 i32) -> ()` |
| 142 | `Ktap.dEK3` | func | `(i32 i32) -> ()` |
| 143 | `Ktap.qGdG` | func | `(i32 i32) -> ()` |
| 144 | `Ktap.uguS` | func | `(i32 i32) -> ()` |
| 145 | `Ktap.J7AK` | func | `(i32 i32) -> ()` |
| 146 | `Ktap.EYRX` | func | `(i32 i32) -> ()` |
| 147 | `Ktap.Rg3U` | func | `(i32 i32) -> ()` |
| 148 | `Ktap.NGyY` | func | `(i32 f64) -> ()` |
| 149 | `Ktap.UBWG` | func | `(i32 i32) -> ()` |
| 150 | `Ktap.IsHc` | func | `(i32 i32) -> ()` |
| 151 | `Ktap.pcL6` | func | `(i32 i32) -> ()` |
| 152 | `Ktap.U8Zg` | func | `(i32 i32) -> ()` |
| 153 | `Ktap.SGaM` | func | `(i32 i32) -> ()` |
| 154 | `Ktap.t5WI` | func | `(i32 i32) -> ()` |
| 155 | `Ktap.rgXX` | func | `(i32 i32) -> ()` |
| 156 | `Ktap.C1EB` | func | `(i32 i32) -> ()` |
| 157 | `Ktap.QY2h` | func | `(i32 i32) -> ()` |
| 158 | `Ktap.eQIk` | func | `(i32 i32 i32) -> ()` |
| 159 | `Ktap.xeZi` | func | `(i32 i32 i32) -> ()` |
| 160 | `Ktap.LnLL` | func | `(i32 i32) -> (i32)` |
| 161 | `Ktap.ib8o` | func | `(i32 i32) -> (i32)` |
| 162 | `Ktap.Y0Dc` | func | `(i32 i32) -> ()` |
| 163 | `Ktap.jCtP` | func | `(i32 i32) -> ()` |
| 164 | `Ktap.ABrO` | func | `(i32 f64) -> ()` |
| 165 | `Ktap.pFv1` | func | `(i32 i32) -> ()` |
| 166 | `Ktap.PVQz` | func | `(i32 i32) -> ()` |
| 167 | `Ktap.OHDf` | func | `(i32 i32) -> ()` |
| 168 | `Ktap.IPGZ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `Ktap.N0z7` | func | `(i32 f64) -> ()` |
| 170 | `Ktap.Tak5` | func | `(i32 f64) -> ()` |
| 171 | `Ktap.WDSl` | func | `(i32 f64) -> ()` |
| 172 | `Ktap.lxnz` | func | `(i32 f64) -> ()` |
| 173 | `Ktap.kQ3v` | func | `(i32 i32) -> ()` |
| 174 | `Ktap.K5YL` | func | `(i32 i32) -> ()` |
| 175 | `Ktap.FMDO` | func | `(i32 i32) -> ()` |
| 176 | `Ktap.w11a` | func | `(i32 i32) -> ()` |
| 177 | `Ktap.GDYB` | func | `(i32 i32) -> ()` |
| 178 | `Ktap.m7pE` | func | `(i32 i32 i32) -> ()` |
| 179 | `Ktap.L48L` | func | `(i32 i32) -> ()` |
| 180 | `Ktap.JoZ7` | func | `(i32 f32) -> ()` |
| 181 | `Ktap.rFZb` | func | `(i32 i32) -> ()` |
| 182 | `Ktap.twmN` | func | `(i32 i32) -> ()` |
| 183 | `Ktap.UYZI` | func | `(i32 i32) -> ()` |
| 184 | `Ktap.J0Tq` | func | `(i32 i32) -> ()` |
| 185 | `Ktap.nb6Y` | func | `(i32 i32) -> ()` |
| 186 | `Ktap.FIBu` | func | `(i32 i32) -> ()` |
| 187 | `Ktap.mEre` | func | `(i32 i32) -> ()` |
| 188 | `Ktap.G2Xf` | func | `(i32 i32) -> ()` |
| 189 | `Ktap.KB0u` | func | `(i32 i32) -> ()` |
| 190 | `Ktap.Gkxw` | func | `(i32 i32) -> ()` |
| 191 | `Ktap.zY1c` | func | `(i32 i32) -> ()` |
| 192 | `Ktap.GhL0` | func | `(i32 i32) -> ()` |
| 193 | `Ktap.j25P` | func | `(i32 i32) -> (i32)` |
| 194 | `Ktap.lbyS` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `Ktap.SC35` | func | `(i32 i32) -> ()` |
| 196 | `Ktap.qpy7` | func | `(i32 i32 i32) -> ()` |
| 197 | `Ktap.DlW1` | func | `(i32 i32) -> (i32)` |
| 198 | `Ktap.bPUX` | func | `(i32) -> (i32)` |
| 199 | `Ktap.kUgh` | func | `(i32 i32) -> ()` |
| 200 | `Ktap.YoOI` | func | `(i32 i32) -> ()` |
| 201 | `Ktap.NlYB` | func | `(i32 i32) -> ()` |
| 202 | `Ktap.pbNc` | func | `(i32 i32) -> ()` |
| 203 | `Ktap.mn9C` | func | `(i32 i32) -> ()` |
| 204 | `Ktap.Ucbs` | func | `(i32 i32) -> ()` |
| 205 | `Ktap.VvCB` | func | `(i32 i32) -> ()` |
| 206 | `Ktap.NDFM` | func | `(i32 i32) -> ()` |
| 207 | `Ktap.NFbm` | func | `(i32) -> (i32)` |
| 208 | `Ktap.ixRE` | func | `(i32 i32 i32) -> ()` |
| 209 | `Ktap.qmCX` | func | `(i32 i32) -> ()` |
| 210 | `Ktap.I2jc` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `Ktap.e7U8` | func | `(i32 i32) -> ()` |
| 212 | `Ktap.bQER` | func | `(i32) -> ()` |
| 213 | `Ktap.luGE` | func | `(i32 i32) -> ()` |
| 214 | `Ktap.Vl00` | func | `(i32) -> (i32)` |
| 215 | `Ktap.q1WZ` | func | `(i32 i32 i32) -> ()` |
| 216 | `Ktap.z69m` | func | `(i32 i32) -> ()` |
| 217 | `Ktap.xp42` | func | `(i32 i32) -> ()` |
| 218 | `Ktap.AQ62` | func | `(i32 i32) -> ()` |
| 219 | `Ktap.Ch7q` | func | `(i32 i32) -> ()` |
| 220 | `Ktap.jm9c` | func | `(i32 i32) -> (i32)` |
| 221 | `Ktap.Q66h` | func | `(i32 i32) -> ()` |
| 222 | `Ktap.ONpw` | func | `(i32 i32) -> ()` |
| 223 | `Ktap.awU6` | func | `(i32 i32) -> ()` |
| 224 | `Ktap.jgZG` | func | `(i32 i32) -> ()` |
| 225 | `Ktap.elxe` | func | `(i32 i32) -> ()` |
| 226 | `Ktap.rd66` | func | `(i32 i32) -> ()` |
| 227 | `Ktap.VhKW` | func | `(i32 i32) -> ()` |
| 228 | `Ktap.Wy6P` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `Ktap.ymUf` | func | `(i32) -> (i32)` |
| 230 | `Ktap.NaEv` | func | `(i32) -> ()` |
| 231 | `Ktap.wlx4` | func | `(i32 f64) -> ()` |
| 232 | `Ktap.fEqz` | func | `(i32 i32) -> ()` |
| 233 | `Ktap.S0hp` | func | `(i32 i32) -> ()` |
| 234 | `Ktap.Cgrs` | func | `(i32 i32 i32) -> ()` |
| 235 | `Ktap.glEO` | func | `(i32 i32) -> (i32)` |
| 236 | `Ktap.OAuU` | func | `(i32 i32) -> ()` |
| 237 | `Ktap.UE3j` | func | `(i32 i32) -> ()` |
| 238 | `Ktap.Hecg` | func | `(i32 i32) -> ()` |
| 239 | `Ktap.Lzmp` | func | `(i32 i32 i32) -> ()` |
| 240 | `Ktap.cHc6` | func | `(i32 i32) -> ()` |
| 241 | `Ktap.Gn8N` | func | `(i32 i32) -> ()` |
| 242 | `Ktap.QCoK` | func | `(i32 i32) -> ()` |
| 243 | `Ktap.ldBW` | func | `(i32 i32 i32) -> ()` |
| 244 | `Ktap.mxES` | func | `(i32 i32) -> ()` |
| 245 | `Ktap.nN5e` | func | `(i32 i32) -> ()` |
| 246 | `Ktap.tpix` | func | `(i32 i32 i32) -> ()` |
| 247 | `Ktap.ckNE` | func | `(i32 i32) -> (i32)` |
| 248 | `Ktap.FpxY` | func | `(i32 i32) -> ()` |
| 249 | `Ktap.obEJ` | func | `(i32 i32 i32) -> ()` |
| 250 | `Ktap.weMF` | func | `(i32 i32) -> ()` |
| 251 | `Ktap.mFiv` | func | `(i32 f64) -> ()` |
| 252 | `Ktap.nAaV` | func | `(i32 i32) -> ()` |
| 253 | `Ktap.FmIH` | func | `(i32 f64) -> ()` |
| 254 | `Ktap.gppV` | func | `(i32 i32 i32) -> ()` |
| 255 | `Ktap.hVkW` | func | `(i32 i32) -> ()` |
| 256 | `Ktap.vimD` | func | `(i32 i32 i32) -> ()` |
| 257 | `Ktap.iw8a` | func | `(i32 i32) -> ()` |
| 258 | `Ktap.Imrr` | func | `(i32 i32) -> ()` |
| 259 | `Ktap.xbZl` | func | `(i32 i32) -> ()` |
| 260 | `Ktap.PSp8` | func | `(i32 i32 i32) -> ()` |
| 261 | `Ktap.Fttu` | func | `(i32 i32) -> ()` |
| 262 | `Ktap.UWLi` | func | `(i32 i32) -> ()` |
| 263 | `Ktap.Vtyh` | func | `(i32 i32) -> ()` |
| 264 | `Ktap.Ainx` | func | `(i32 i32) -> ()` |
| 265 | `Ktap.x2Lt` | func | `(i32 f32) -> ()` |
| 266 | `Ktap.Dd7q` | func | `(i32 f32) -> ()` |
| 267 | `Ktap.cTD6` | func | `(i32 i32) -> ()` |
| 268 | `Ktap.xogl` | func | `(i32 i32) -> ()` |
| 269 | `Ktap.sbUa` | func | `(i32 i32) -> ()` |
| 270 | `Ktap.L3WF` | func | `(i32 i32) -> ()` |
| 271 | `Ktap.C7gP` | func | `(i32 i32) -> ()` |
| 272 | `Ktap.Egq7` | func | `(i32 i32) -> ()` |
| 273 | `Ktap.Zya1` | func | `(i32 i32) -> ()` |
| 274 | `Ktap.ZUMT` | func | `(i32 i32) -> ()` |
| 275 | `Ktap.go3R` | func | `(i32 i32) -> ()` |
| 276 | `Ktap.xD9i` | func | `(i32 i32) -> ()` |
| 277 | `Ktap.wQp4` | func | `(i32 i32) -> ()` |
| 278 | `Ktap.tCZV` | func | `(i32 i32) -> ()` |
| 279 | `Ktap.N6Y9` | func | `(i32 i32) -> ()` |
| 280 | `Ktap.sIMP` | func | `(i32 i32) -> ()` |
| 281 | `Ktap.M1rQ` | func | `(i32 i32) -> ()` |
| 282 | `Ktap.IcBy` | func | `(i32 i32) -> ()` |
| 283 | `Ktap.U2qK` | func | `(i32 i32) -> ()` |
| 284 | `Ktap.KhTi` | func | `(i32 i32) -> ()` |
| 285 | `Ktap.fBdJ` | func | `(i32 i32 i32) -> ()` |
| 286 | `Ktap.fqia` | func | `(i32 i32 i32) -> ()` |
| 287 | `Ktap.MuoC` | func | `(i32 i32) -> ()` |
| 288 | `Ktap.bM2h` | func | `(i32 i32) -> ()` |
| 289 | `Ktap.iqwY` | func | `(i32 i32) -> ()` |
| 290 | `Ktap.OcEI` | func | `(i32 i32) -> ()` |
| 291 | `Ktap.nyim` | func | `(i32 i32) -> ()` |
| 292 | `Ktap.Fw5S` | func | `(i32 i32) -> ()` |
| 293 | `Ktap.VQB5` | func | `(i32 i32) -> ()` |
| 294 | `Ktap.HOmY` | func | `(i32 i32) -> ()` |
| 295 | `Ktap.DVw5` | func | `(i32 i32) -> ()` |
| 296 | `Ktap.XTr8` | func | `(i32 i32) -> ()` |
| 297 | `Ktap.vU8c` | func | `(i32 i32) -> ()` |
| 298 | `Ktap.jge2` | func | `(i32 i32) -> (i32)` |
| 299 | `Ktap.tErJ` | func | `(i32 i32) -> ()` |
| 300 | `Ktap.QYR1` | func | `(i32 i32 i32) -> ()` |
| 301 | `Ktap.uul6` | func | `(i32 i32) -> ()` |
| 302 | `Ktap.v17G` | func | `(i32 i32) -> ()` |
| 303 | `Ktap.peqd` | func | `(i32 i32) -> ()` |
| 304 | `Ktap.IWI3` | func | `(i32 i32 i32) -> ()` |
| 305 | `Ktap.ncsN` | func | `(i32 i32) -> (i32)` |
| 306 | `Ktap.NuYJ` | func | `(i32 i32 i32) -> ()` |
| 307 | `Ktap.OEDp` | func | `(i32 i32 i32) -> ()` |
| 308 | `Ktap.ey6G` | func | `(i32 i32) -> ()` |
| 309 | `Ktap.RWQJ` | func | `(i32 i32) -> ()` |
| 310 | `Ktap.GosP` | func | `(i32 i32) -> ()` |
| 311 | `Ktap.RFUR` | func | `(i32 i32) -> ()` |
| 312 | `Ktap.O65h` | func | `(i32 i32) -> (i32)` |
| 313 | `Ktap.CyOl` | func | `(i32) -> (i32)` |
| 314 | `Ktap.bjYB` | func | `(i32) -> (i32)` |
| 315 | `Ktap.ZV9m` | func | `(i32) -> (i32)` |
| 316 | `Ktap.XX3J` | func | `(i32) -> (i32)` |
| 317 | `Ktap.rDNx` | func | `(i32) -> (i32)` |
| 318 | `Ktap.loCT` | func | `(i32) -> (i32)` |
| 319 | `Ktap.ausS` | func | `(i32) -> (i32)` |
| 320 | `Ktap.F3bM` | func | `(i32) -> (i32)` |
| 321 | `Ktap.kAdU` | func | `(i32) -> (i32)` |
| 322 | `Ktap.GSzC` | func | `(i32) -> (i32)` |
| 323 | `Ktap.brrf` | func | `(i32) -> (i32)` |
| 324 | `Ktap.KNdZ` | func | `(i32) -> (i32)` |
| 325 | `Ktap.RQjV` | func | `(i32) -> (i32)` |
| 326 | `Ktap.ThSq` | func | `(i32) -> (i32)` |
| 327 | `Ktap.auLQ` | func | `(i32) -> (f64)` |
| 328 | `Ktap.aJpM` | func | `(i32) -> (f64)` |
| 329 | `Ktap.rgmh` | func | `(i32) -> (i32)` |
| 330 | `Ktap.ZWN8` | func | `(i32) -> (f64)` |
| 331 | `Ktap.bm1p` | func | `(i32) -> (i32)` |
| 332 | `Ktap.xhqE` | func | `(i32) -> (i32)` |
| 333 | `Ktap.ZnHM` | func | `(i32) -> (i32)` |
| 334 | `Ktap.AfYn` | func | `(i32) -> (i32)` |
| 335 | `Ktap.Glzj` | func | `(i32) -> (i32)` |
| 336 | `Ktap.VNaO` | func | `(i32) -> (i32)` |
| 337 | `Ktap.PuMa` | func | `(i32) -> (i32)` |
| 338 | `Ktap.stpC` | func | `(i32) -> (i32)` |
| 339 | `Ktap.UNoE` | func | `(i32) -> (i32)` |
| 340 | `Ktap.e5Rk` | func | `(i32) -> (i32)` |
| 341 | `Ktap.Z6pu` | func | `(i32) -> (i32)` |
| 342 | `Ktap.M3Yo` | func | `(i32) -> (i32)` |
| 343 | `Ktap.wpi9` | func | `(i32) -> (i32)` |
| 344 | `Ktap.xACa` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `Ktap.aNmc` | func | `() -> (i32)` |
| 346 | `Ktap.jr3H` | func | `(i32 i32) -> ()` |
| 347 | `Ktap.tlQI` | func | `(i32 i32 i32) -> ()` |
| 348 | `Ktap.BKnl` | func | `(i32 i32 i32) -> ()` |
| 349 | `Ktap.MAbM` | func | `(i32 i32) -> (i32)` |
| 350 | `Ktap.J8Zh` | func | `(i32) -> (i32)` |
| 351 | `Ktap.DERS` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `Ktap.q0XO` | func | `(i32) -> ()` |
| 353 | `Ktap.mP58` | func | `(i32) -> (i32)` |
| 354 | `Ktap.cNHg` | func | `(i32 i32) -> ()` |
| 355 | `Ktap.bdKt` | func | `(i32) -> (i32)` |
| 356 | `Ktap.s929` | func | `(i32) -> (i32)` |
| 357 | `Ktap.XD57` | func | `(i32) -> (i32)` |
| 358 | `Ktap.Bd9x` | func | `(i32) -> (i32)` |
| 359 | `Ktap.Pdok` | func | `(i32) -> (i32)` |
| 360 | `Ktap.V0dc` | func | `(i32 i32) -> ()` |
| 361 | `Ktap.JJf1` | func | `(i32 i32) -> ()` |
| 362 | `Ktap.VQ9a` | func | `(i32 i32) -> ()` |
| 363 | `Ktap.yL8f` | func | `(i32 i32) -> ()` |
| 364 | `Ktap.XDGF` | func | `(i32 i32) -> ()` |
| 365 | `Ktap.gTRH` | func | `(i32 i32) -> ()` |
| 366 | `Ktap.MjjF` | func | `(i32 i32) -> ()` |
| 367 | `Ktap.wnLK` | func | `(i32 i32 i32) -> ()` |
| 368 | `Ktap.e1fC` | func | `(i32 i32) -> ()` |
| 369 | `Ktap.iJKD` | func | `(i32 i32) -> (i32)` |
| 370 | `Ktap.xbYv` | func | `(i32) -> (i32)` |
| 371 | `Ktap.jv9t` | func | `(i32) -> (i32)` |
| 372 | `Ktap.Dl06` | func | `(i32 i32) -> ()` |
| 373 | `Ktap.BVXz` | func | `(i32) -> (i32)` |
| 374 | `Ktap.CzWz` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `Ktap.euai` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `Ktap.cJrq` | func | `(i32 i32) -> ()` |
| 377 | `Ktap.jfcC` | func | `(i32) -> (i32)` |
| 378 | `Ktap.Th6L` | func | `(i32) -> (i32)` |
| 379 | `Ktap.i4Rs` | func | `(i32) -> (i32)` |
| 380 | `Ktap.MoJw` | func | `(i32) -> (i32)` |
| 381 | `Ktap.TiSo` | func | `(i32) -> (i32)` |
| 382 | `Ktap.eezy` | func | `(i32) -> (i32)` |
| 383 | `Ktap.Rz8L` | func | `(i32 i32) -> ()` |
| 384 | `Ktap.LjDo` | func | `(i32 i32) -> (i32)` |
| 385 | `Ktap.UQTB` | func | `(i32 i32) -> (i32)` |
| 386 | `Ktap.tvzD` | func | `(i32 i32) -> (i32)` |
| 387 | `Ktap.ijCf` | func | `(i32 i32) -> (i32)` |
| 388 | `Ktap.WF4L` | func | `(i32 i32) -> (i32)` |
| 389 | `Ktap.acPX` | func | `(i32 i32) -> (i32)` |
| 390 | `Ktap.T3zt` | func | `(f64) -> (i32)` |
| 391 | `Ktap.vOhG` | func | `(i32 i32) -> (i32)` |
| 392 | `Ktap.CLE6` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `eqCF` | func | 1404 | `(i32) -> ()` |
| `QaK5` | func | 1346 | `(i32 i32 i32) -> (i32)` |
| `oqT0` | func | 3098 | `(i32 i32) -> ()` |
| `xhEp` | func | 2903 | `(i32) -> (i32)` |
| `kCt5` | func | 1959 | `(i32 i32) -> ()` |
| `PIOZ` | global | 2 | `` |
| `lAb5` | func | 2605 | `(i32) -> (i32)` |
| `OW4J` | func | 2547 | `(i32) -> (i32)` |
| `ETqm` | func | 2500 | `(i32) -> (i32)` |
| `GyRd` | func | 2567 | `(i32) -> (i32)` |
| `XdOX` | func | 1199 | `(i32 i32) -> (i32)` |
| `MpoY` | func | 1469 | `(i32 f64 f64) -> (i32)` |
| `fmix` | func | 2915 | `(i32) -> ()` |
| `ACHZ` | func | 1468 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `b8L6` | func | 1548 | `(i32 i32 i32 i32) -> ()` |
| `KFTP` | func | 2585 | `(i32) -> (i32)` |
| `s7cf` | func | 1977 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `Q1Pb` | func | 1725 | `(i32 i32 i32 i32) -> (i32)` |
| `WQiO` | func | 2568 | `(i32) -> (i32)` |
| `Uf2k` | func | 1419 | `(i32 i32 i32) -> (i32)` |
| `rvIp` | func | 1299 | `(i32 i32 i32 i32) -> (i32)` |
| `RcSV` | func | 1350 | `(i32 i32 i32) -> ()` |
| `qdFE` | func | 3179 | `(i32 i32 i32 i32) -> ()` |
| `sqnp` | func | 3136 | `(i32) -> (i32 i32)` |
| `OfIC` | func | 3129 | `(i32 i32) -> (i32 i32)` |
| `rw3K` | func | 3116 | `(i32 i32 i32) -> (i32 i32)` |
| `rN7S` | func | 2566 | `(i32) -> (i32)` |
| `eV2Q` | func | 3307 | `(i32) -> (i32)` |
| `b7xE` | func | 1306 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Euxv` | func | 1985 | `(i32) -> ()` |
| `U3AE` | func | 1298 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `mrsi` | func | 771 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `wBcy` | func | 1953 | `(i32 i32 f64 f64 f64) -> ()` |
| `Eqk9` | func | 3154 | `() -> (i32 i32)` |
| `DUA5` | func | 3152 | `() -> (i32 i32)` |
| `gxrs` | func | 3331 | `() -> (i32)` |
| `knEp` | func | 3332 | `() -> (i32)` |
| `UtMP` | func | 1683 | `(i32 i32) -> ()` |
| `bbw2` | func | 1915 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `YDrx` | func | 2892 | `(i32) -> (i32)` |
| `a2Sw` | func | 1328 | `(i32 i32) -> (i32)` |
| `KmwC` | func | 2596 | `(i32 i32) -> (i32)` |
| `Ug3R` | func | 3138 | `(i32) -> (i32 i32)` |
| `Rwl6` | func | 1494 | `(i32 i32) -> (i32)` |
| `s7CD` | func | 3218 | `() -> (i32)` |
| `Ecro` | func | 1642 | `(i32 i32 i32 i32) -> (i32)` |
| `hUGL` | func | 2603 | `(i32) -> (i32)` |
| `f9GO` | func | 2029 | `(i32) -> (i32)` |
| `oUmB` | func | 2423 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `isul` | func | 1682 | `(i32 i32) -> ()` |
| `fJCf` | func | 3137 | `(i32) -> (i32 i32)` |
| `X6Qp` | func | 1258 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Gg8K` | func | 837 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `lZKS` | func | 3139 | `(i32) -> (i32 i32)` |
| `WkXH` | func | 2422 | `(i32 i32) -> (i32)` |
| `GXr2` | func | 2468 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `teuo` | func | 2081 | `(i32 i32) -> ()` |
| `pRko` | func | 1610 | `(i32 f64) -> (f64)` |
| `SYsM` | func | 3259 | `() -> ()` |
| `YGLa` | func | 2370 | `(i32 i32) -> ()` |
| `Vd2o` | func | 2563 | `(i32) -> (i32)` |
| `fr7Z` | func | 970 | `(i32 i32) -> (i32)` |
| `uCmr` | func | 760 | `(i32 i32) -> (i32)` |
| `tvpt` | func | 2517 | `(i32) -> (i32)` |
| `P0jh` | func | 1526 | `() -> (i32)` |
| `FYij` | func | 3124 | `(i32 i32) -> (i32 i32)` |
| `Hh7U` | func | 3303 | `() -> (f64)` |
| `unlx` | func | 1572 | `(i32 i32 i32 i32) -> (i32)` |
| `Qujh` | func | 2586 | `(i32) -> (i32)` |
| `xgIJ` | func | 2572 | `(i32) -> (i32)` |
| `X3Uk` | func | 3248 | `(i32 i32 i32) -> ()` |
| `I2iv` | func | 3066 | `() -> ()` |
| `iJBn` | func | 2546 | `(i32 i32) -> ()` |
| `KZ18` | func | 2121 | `(i32 f64 f64 f64) -> (i32)` |
| `nVfj` | func | 2425 | `(i32 i32) -> (i32)` |
| `PS5M` | func | 3116 | `(i32 i32 i32) -> (i32 i32)` |
| `UGMm` | func | 1931 | `(i32 i32 i32 i32) -> (i32)` |
| `cbbW` | func | 2594 | `(i32) -> (i32)` |
| `iddP` | func | 2458 | `(i32 i32) -> (i32)` |
| `aiBZ` | global | 1 | `` |
| `hmbe` | func | 1580 | `(i32 i32) -> (i32)` |
| `VSAk` | func | 3257 | `(i32) -> ()` |
| `MBwF` | func | 1200 | `(i32 i32) -> ()` |
| `b9mo` | func | 2159 | `(i32 i32) -> (i32)` |
| `X8lt` | func | 1687 | `(i32 f64 f64 f64) -> (i32)` |
| `pbfu` | func | 3115 | `(i32 i32 i32) -> (i32 i32)` |
| `kBJp` | func | 2046 | `(i32) -> (i32)` |
| `EOYZ` | func | 2686 | `(i32 i32) -> ()` |
| `e7pd` | func | 1908 | `() -> (i32)` |
| `nLrY` | func | 3128 | `(i32 i32) -> (i32 i32)` |
| `G3ZE` | func | 3188 | `(i32 i32 i32) -> (i32)` |
| `dPYQ` | func | 2581 | `(i32 i32) -> ()` |
| `wEDr` | func | 2048 | `(i32 i32 i32 i32) -> ()` |
| `u62n` | func | 2687 | `() -> (i32)` |
| `iaf5` | func | 660 | `(i32 i32 i32) -> (i32)` |
| `Emaw` | func | 2875 | `(i32) -> (i32)` |
| `S0vl` | func | 3127 | `(i32 i32) -> (i32 i32)` |
| `UuXt` | func | 2344 | `(i32 f64) -> (i32)` |
| `xxKY` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `FvMv` | func | 1521 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `HQDh` | func | 3126 | `(i32 i32) -> (i32 i32)` |
| `OfNX` | func | 1984 | `(i32) -> ()` |
| `bDry` | func | 2570 | `(i32) -> (i32)` |
| `lHig` | func | 2562 | `(i32) -> (f64)` |
| `Z1ee` | func | 1849 | `(i32 i32) -> (i32)` |
| `ZkBc` | func | 2604 | `(i32) -> (i32)` |
| `ugoi` | func | 2595 | `(i32 i32) -> (i32)` |
| `Tof5` | func | 2106 | `(i32 f64) -> (i32)` |
| `six4` | func | 3116 | `(i32 i32 i32) -> (i32 i32)` |
| `w3rc` | func | 1378 | `(i32 i32) -> (i32)` |
| `Pdl4` | func | 1567 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `aSDT` | func | 2137 | `(i32 i32) -> ()` |
| `aZSD` | func | 1672 | `(i32 i32) -> (i32)` |
| `uKcl` | func | 2588 | `(i32) -> (i32)` |
| `Q3co` | func | 2587 | `(i32 i32) -> ()` |
| `Czmh` | func | 830 | `(i32 i32 i32 i32) -> (i32)` |
| `UhPq` | func | 3140 | `(i32) -> (i32 i32)` |
| `JU5A` | func | 1812 | `(i32) -> (i32)` |
| `uWHw` | func | 2938 | `(i32) -> (i32)` |
| `tTjS` | func | 2867 | `(i32) -> (i32)` |
| `Iif3` | func | 1529 | `(i32) -> (i32)` |
| `nPVE` | func | 2571 | `(i32) -> (i32)` |
| `U7Dg` | func | 1836 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `htfV` | func | 1372 | `(i32) -> (i32)` |
| `zymG` | func | 1608 | `(i32 i32) -> (i32)` |
| `V3vV` | func | 834 | `(i32) -> (i32)` |
| `tVcY` | func | 3125 | `(i32 i32) -> (i32 i32)` |
| `YQgu` | func | 1562 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `pqLW` | func | 2343 | `(i32 i32) -> ()` |
| `tsH7` | func | 2653 | `() -> (i32)` |
| `fNHc` | func | 1830 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `GZ5p` | func | 1621 | `(i32 i32 i32) -> (i32)` |
| `xpaa` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `z1Ua` | func | 2272 | `(i32 i32) -> (i32)` |
| `R2Uh` | func | 800 | `(i32 i32) -> (i32)` |
| `Ncz6` | func | 2424 | `(i32 i32) -> (i32)` |
| `myNi` | func | 705 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `O8mw` | func | 2565 | `(i32) -> (i32)` |
| `Gjns` | func | 3092 | `(i32 i32 i32 i32) -> (i32)` |
| `s6ph` | func | 1607 | `(i32 i32) -> (i32)` |
| `zbfQ` | func | 2292 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `htnK` | func | 3153 | `() -> (i32 i32)` |
| `IOHo` | func | 1573 | `(i32) -> (i32)` |
| `oflo` | func | 1970 | `(i32 i32) -> (i32)` |
| `RmEN` | func | 1790 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `APQy` | func | 969 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `o9HL` | func | 3086 | `(i32 i32) -> (i32)` |
| `U98t` | func | 3190 | `(i32 i32 i32) -> ()` |
| `J6kT` | func | 2233 | `(i32 i32) -> (i32)` |
| `w7U1` | func | 2564 | `(i32) -> (i32)` |
| `SgGV` | func | 1594 | `(i32 i32) -> (i32)` |
| `ZqcF` | func | 2636 | `(i32 i32) -> ()` |
| `HeNH` | func | 777 | `(i32 i32) -> (i32)` |
| `l9WJ` | func | 2473 | `(i32 i32 i32 i32) -> (i32)` |
| `LY2G` | func | 3116 | `(i32 i32 i32) -> (i32 i32)` |
| `CCN9` | func | 3123 | `(i32 i32) -> (i32 i32)` |
| `jZ0b` | func | 849 | `(i32 i32 i32) -> (i32)` |
| `pToL` | func | 2569 | `(i32) -> ()` |
| `ooRA` | func | 3308 | `(i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 840 · max 840
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2248680, `i32` = i32.const 2249252

## Functions

- 2,952 bodies · 4,053,210 code bytes · avg 1.3 KB
- instruction scan: 2,952 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 114 |
| <= 128 bytes | 276 |
| <= 256 bytes | 387 |
| <= 512 bytes | 667 |
| <= 1024 bytes | 589 |
| <= 2048 bytes | 414 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 93 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 35 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 149 | 122,454 | 58,848 | local.get×16652, i32.const×7053, i32.add×3403, local.set×3378, i32.load×3112 |
| 1 | `(i32 i32 i32 i32) -> ()` | 217 | 194,676 | 88,355 | local.get×25898, i32.const×9909, i32.load×5640, local.set×4735, local.tee×4638 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,181 | 25,576 | local.get×7556, i32.const×3392, local.set×1404, i32.add×1302, i32.load×1164 |
| 3 | `(i32 i32) -> ()` | 125 | 48,670 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,468 | 14,007 | local.get×4107, i32.const×1881, i32.load×884, i32.add×645, local.set×620 |
| 5 | `(i32 i32) -> ()` | 59 | 29,627 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 177 | 20,026 | 9,398 | local.get×2934, i32.const×1038, local.set×621, i32.add×458, i32.load×421 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 17 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 94 | 21,138 | 8,084 | local.get×3019, i32.const×947, i64.store×844, i32.store×655, i64.const×513 |
| 21 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 43 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,436 | 12,890 | local.get×3670, i32.const×1868, i32.add×766, local.set×697, end×577 |
| 61 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 192 | `(i32 i32) -> ()` | 10 | 26,749 | 12,881 | local.get×4533, i32.load×1219, i32.const×1026, end×802, i32.add×738 |
| 220 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 706 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 707 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1013 | `(i32 i32) -> (i32)` | 40 | 19,895 | 7,747 | local.get×2497, i32.const×848, i64.store×583, i32.load×391, local.set×357 |
| 1577 | `(i32 i32) -> (i32)` | 180 | 54,772 | 19,852 | local.get×6590, i32.const×2618, i64.store×1917, i64.const×1082, i64.load×1056 |
| 1969 | `(i32 i32) -> ()` | 111 | 39,589 | 17,528 | local.get×5140, i32.const×1646, local.set×891, local.tee×743, end×677 |
| 2610 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2900 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2919 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 542,013 |
| `i32.const` | 227,925 |
| `local.tee` | 99,688 |
| `local.set` | 94,606 |
| `i32.load` | 93,515 |
| `i32.add` | 87,199 |
| `end` | 79,433 |
| `br_if` | 63,928 |
| `i32.store` | 47,007 |
| `block` | 37,375 |
| `i64.store` | 32,837 |
| `i64.const` | 32,199 |
| `if` | 30,382 |
| `call` | 30,190 |
| `i64.load` | 24,378 |
| `i32.sub` | 24,167 |
| `br` | 23,271 |
| `i32.eqz` | 19,094 |
| `select` | 16,769 |
| `i32.and` | 16,350 |
| `i32.shl` | 16,244 |
| `i32.ne` | 15,692 |
| `i32.load8_u` | 15,282 |
| `i32.eq` | 13,754 |
| `i32.store8` | 13,442 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,952/2,952 (degraded: 0)
