# WASM module: `bloxd_wasm_webgl_bg`

> environment **bloxd.io** · build `mpd96o.85ad4551` · analyzed 2026-11-24T14:21:10+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl_bg.c456123193a5c432c6a5.wasm
> 5,503,528 bytes (5.2 MB) · sha256 `7e9ad7e1a934a29d…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,500,808 → 5,503,528 bytes (+2,720)
- defined functions 2,904 → 2,905
- code bytes 4,029,569 → 4,031,927
- data bytes 1,422,466 → 1,422,824
- name-section module id `5acdf3c4f5b93980.10886` → `b7e4c507456c1db2.10887`
- export identifiers rotated by the obfuscator: 1/156 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,905 / 299 |
| Exports / imports | 156 / 300 |
| Code bytes (function bodies) | 4,031,927 (3.8 MB) |
| Total local variables | 30,698 |
| Instructions (scanable bodies) | 1,890,790 |
| Data segments / bytes | 4,028 / 1,422,824 |
| Element segments / entries | 1 / 752 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `b7e4c507456c1db2.10887` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,498 | 176 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,955 | 2905 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,249 | 156 |
| 9 | element | 1,511 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,037,252 | 2905 |
| 11 | data | 1,455,353 | 4028 |
| 0 | custom:name | 30 | — |

## Types

176 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `nP2Z.A1my` | memory | `[128..14648]` |
| 0 | `nP2Z.W0Lx` | func | `(i32) -> (f64)` |
| 1 | `nP2Z.xpzp` | func | `() -> (i32)` |
| 2 | `nP2Z.CYvY` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `nP2Z.Wb2B` | func | `(i32) -> ()` |
| 4 | `nP2Z.b6Db` | func | `(i32 i32) -> (i32)` |
| 5 | `nP2Z.gW8O` | func | `(i32) -> (i32)` |
| 6 | `nP2Z.aEOY` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `nP2Z.zQFr` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `nP2Z.oSA8` | func | `(i32) -> (i32)` |
| 9 | `nP2Z.u6Bi` | func | `(i32 i32) -> ()` |
| 10 | `nP2Z.KEnn` | func | `(i32 i32) -> ()` |
| 11 | `nP2Z.dP0U` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `nP2Z.kTF6` | func | `(i32 i32) -> (i32)` |
| 13 | `nP2Z.aX48` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `nP2Z.Nr7W` | func | `(i32) -> (i32)` |
| 15 | `nP2Z.Qrqu` | func | `(i32 i32) -> (i32)` |
| 16 | `nP2Z.jmZ0` | func | `(i32 i32) -> (i32)` |
| 17 | `nP2Z.Lk3m` | func | `(i32 i32) -> ()` |
| 18 | `nP2Z.BAqj` | func | `(i32) -> (i32)` |
| 19 | `nP2Z.qVGk` | func | `(i32) -> (i32)` |
| 20 | `nP2Z.Ycof` | func | `(i32) -> (i32)` |
| 21 | `nP2Z.vetw` | func | `(i32) -> ()` |
| 22 | `nP2Z.Eki2` | func | `(i32 i32) -> ()` |
| 23 | `nP2Z.hJib` | func | `(i32 i32) -> ()` |
| 24 | `nP2Z.hC4d` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `nP2Z.Ibf8` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `nP2Z.zRnA` | func | `(i32) -> (i32)` |
| 27 | `nP2Z.JOnD` | func | `(i32 i32) -> ()` |
| 28 | `nP2Z.EBBk` | func | `(i32 i32) -> (i32)` |
| 29 | `nP2Z.T4Mf` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `nP2Z.ZjH5` | func | `(i32 i32) -> (i32)` |
| 31 | `nP2Z.JfYd` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `nP2Z.WaO8` | func | `(i32) -> (i32)` |
| 33 | `nP2Z.UiCo` | func | `(i32 i32) -> ()` |
| 34 | `nP2Z.u9Ho` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `nP2Z.RsvG` | func | `(i32) -> (i32)` |
| 36 | `nP2Z.RBHb` | func | `(i32) -> (i32)` |
| 37 | `nP2Z.xEZT` | func | `(i32) -> (i32)` |
| 38 | `nP2Z.bmcU` | func | `(i32 i32) -> (i32)` |
| 39 | `nP2Z.QCjW` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `nP2Z.DBM2` | func | `(i32) -> (i32)` |
| 41 | `nP2Z.hxJT` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `nP2Z.xFLU` | func | `() -> (f64)` |
| 43 | `nP2Z.NxN3` | func | `(i32) -> (i32)` |
| 44 | `nP2Z.Nl8K` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `nP2Z.qoJp` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `nP2Z.l2Gg` | func | `(i32 i32 i32) -> ()` |
| 47 | `nP2Z.D3E0` | func | `(i32 i32 i32) -> ()` |
| 48 | `nP2Z.WvBu` | func | `(i32 i32 i32) -> ()` |
| 49 | `nP2Z.elQG` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `nP2Z.p4oZ` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `nP2Z.rZBD` | func | `(i32 i32) -> ()` |
| 52 | `nP2Z.qfl2` | func | `(i32 i32) -> ()` |
| 53 | `nP2Z.VRCK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `nP2Z.f81x` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `nP2Z.zbIV` | func | `(i32 f32 f32) -> ()` |
| 56 | `nP2Z.FrTr` | func | `(i32 f32 f32) -> ()` |
| 57 | `nP2Z.St8l` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `nP2Z.WG33` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `nP2Z.QP8t` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `nP2Z.GyiX` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `nP2Z.ncRH` | func | `(i32 i32 i32) -> ()` |
| 62 | `nP2Z.b9Px` | func | `(i32 i32 i32) -> ()` |
| 63 | `nP2Z.WvnB` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `nP2Z.g4p5` | func | `(i32 i32 i32) -> ()` |
| 65 | `nP2Z.aK0q` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `nP2Z.PMEH` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `nP2Z.sUhN` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `nP2Z.yWIy` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `nP2Z.JSiL` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `nP2Z.xQwI` | func | `(i32) -> (i32)` |
| 71 | `nP2Z.HoaE` | func | `(i32) -> ()` |
| 72 | `nP2Z.qyUV` | func | `(i32) -> (i32)` |
| 73 | `nP2Z.PpV8` | func | `(i32 i32) -> (i32)` |
| 74 | `nP2Z.gFHj` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `nP2Z.k2QR` | func | `(i32 i32 i32) -> ()` |
| 76 | `nP2Z.ebqP` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `nP2Z.c4lo` | func | `() -> (f64)` |
| 78 | `nP2Z.omTR` | func | `() -> (f64)` |
| 79 | `nP2Z.Ney9` | func | `(i32 i32) -> ()` |
| 80 | `nP2Z.BwwJ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `nP2Z.LNNx` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `nP2Z.zBez` | func | `(i32 i32 i32) -> ()` |
| 83 | `nP2Z.z58t` | func | `(i32 i32 i32) -> ()` |
| 84 | `nP2Z.O1cE` | func | `(i32 i32) -> ()` |
| 85 | `nP2Z.PPWS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `nP2Z.JrHs` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `nP2Z.iIYL` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `nP2Z.DhZN` | func | `(i32 i32) -> ()` |
| 89 | `nP2Z.AvLa` | func | `(i32 i32) -> ()` |
| 90 | `nP2Z.Mh1t` | func | `(i32) -> (i32)` |
| 91 | `nP2Z.fwCN` | func | `(i32 i32 i32) -> ()` |
| 92 | `nP2Z.mBpq` | func | `(i32 i32 i32) -> ()` |
| 93 | `nP2Z.a8Te` | func | `(i32) -> (i32)` |
| 94 | `nP2Z.jB1t` | func | `(i32) -> (i32)` |
| 95 | `nP2Z.iIlD` | func | `(i32 i32) -> ()` |
| 96 | `nP2Z.EV1j` | func | `(i32 i32) -> ()` |
| 97 | `nP2Z.ireU` | func | `(i32 i32) -> ()` |
| 98 | `nP2Z.rm7E` | func | `(i32 i32) -> ()` |
| 99 | `nP2Z.Syip` | func | `(i32 i32 i32) -> ()` |
| 100 | `nP2Z.d7yF` | func | `(i32 i32 i32) -> ()` |
| 101 | `nP2Z.XLSe` | func | `(i32 i32 f32) -> ()` |
| 102 | `nP2Z.gVlw` | func | `(i32 i32 f32) -> ()` |
| 103 | `nP2Z.IAA7` | func | `(i32 i32 i32) -> ()` |
| 104 | `nP2Z.IsOU` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `nP2Z.wZO6` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `nP2Z.NLZn` | func | `(i32 i32) -> ()` |
| 107 | `nP2Z.Epbo` | func | `(i32 i32) -> ()` |
| 108 | `nP2Z.Evba` | func | `(i32 i32) -> ()` |
| 109 | `nP2Z.Rc5V` | func | `(i32 i32) -> ()` |
| 110 | `nP2Z.tAGN` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `nP2Z.e4FN` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `nP2Z.pBZd` | func | `(i32 i32 i32) -> ()` |
| 113 | `nP2Z.PNRb` | func | `(i32 i32 i32) -> ()` |
| 114 | `nP2Z.C1dG` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `nP2Z.avXB` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `nP2Z.dXKy` | func | `(i32 i32) -> ()` |
| 117 | `nP2Z.Vhey` | func | `(i32 i32) -> ()` |
| 118 | `nP2Z.UZtw` | func | `(i32 i32) -> (i32)` |
| 119 | `nP2Z.wMwY` | func | `(i32 i32) -> (i32)` |
| 120 | `nP2Z.KW3o` | func | `(i32 i32) -> ()` |
| 121 | `nP2Z.PjRn` | func | `(i32 i32) -> ()` |
| 122 | `nP2Z.WXaB` | func | `(i32) -> (i32)` |
| 123 | `nP2Z.a6iw` | func | `(i32 i32) -> ()` |
| 124 | `nP2Z.pJWN` | func | `(i32 i32) -> ()` |
| 125 | `nP2Z.f9an` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `nP2Z.NEmS` | func | `(i32 i32 i32) -> ()` |
| 127 | `nP2Z.Pkqe` | func | `(i32 i32 i32) -> ()` |
| 128 | `nP2Z.keJt` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `nP2Z.I2tJ` | func | `(i32 i32) -> ()` |
| 130 | `nP2Z.FMhg` | func | `(i32 i32 i32) -> ()` |
| 131 | `nP2Z.b3lX` | func | `(i32 i32 i32) -> ()` |
| 132 | `nP2Z.DqeB` | func | `(i32 i32 i32) -> ()` |
| 133 | `nP2Z.FkMM` | func | `(i32 i32 i32) -> ()` |
| 134 | `nP2Z.Z2EM` | func | `(i32) -> ()` |
| 135 | `nP2Z.HP85` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `nP2Z.UQsJ` | func | `(i32 i32 i32) -> ()` |
| 137 | `nP2Z.YKQl` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `nP2Z.NhnY` | func | `(i32 i32) -> ()` |
| 139 | `nP2Z.tOcP` | func | `(i32) -> (i32)` |
| 140 | `nP2Z.GVh3` | func | `(i32 i32) -> ()` |
| 141 | `nP2Z.tv0C` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `nP2Z.skDT` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `nP2Z.yh6j` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `nP2Z.QPdU` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `nP2Z.yPuN` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `nP2Z.xIF5` | func | `(i32 i32) -> ()` |
| 147 | `nP2Z.gcdM` | func | `(i32 i32) -> ()` |
| 148 | `nP2Z.VIT2` | func | `(i32 i32) -> ()` |
| 149 | `nP2Z.MJQf` | func | `(i32 i32) -> ()` |
| 150 | `nP2Z.YIpv` | func | `(i32) -> (i32)` |
| 151 | `nP2Z.LGak` | func | `(i32) -> (i32)` |
| 152 | `nP2Z.U1KZ` | func | `(i32) -> (i32)` |
| 153 | `nP2Z.FOFa` | func | `(i32) -> (i32)` |
| 154 | `nP2Z.xBVK` | func | `(i32) -> (i32)` |
| 155 | `nP2Z.n0PB` | func | `(i32) -> (i32)` |
| 156 | `nP2Z.YfpP` | func | `() -> (i32)` |
| 157 | `nP2Z.shqc` | func | `() -> (i32)` |
| 158 | `nP2Z.RXjX` | func | `() -> (i32)` |
| 159 | `nP2Z.JDHD` | func | `() -> (i32)` |
| 160 | `nP2Z.jWCS` | func | `(i32 i32) -> (i32)` |
| 161 | `nP2Z.UMUF` | func | `(i32) -> ()` |
| 162 | `nP2Z.qUKG` | func | `(i32 i32) -> (i32)` |
| 163 | `nP2Z.ZzIe` | func | `(i32) -> (i32)` |
| 164 | `nP2Z.FeWD` | func | `(i32) -> (i32)` |
| 165 | `nP2Z.htmc` | func | `(i32) -> (i32)` |
| 166 | `nP2Z.vUaa` | func | `(i32) -> ()` |
| 167 | `nP2Z.loTQ` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `nP2Z.oPzX` | func | `(i32) -> (i32)` |
| 169 | `nP2Z.oICw` | func | `(i32) -> (i32)` |
| 170 | `nP2Z.QSCV` | func | `(i32 i32) -> (i32)` |
| 171 | `nP2Z.Pg5c` | func | `(i32) -> ()` |
| 172 | `nP2Z.sTSf` | func | `() -> (i32)` |
| 173 | `nP2Z.t0SL` | func | `(i32 i32) -> (i32)` |
| 174 | `nP2Z.wEhO` | func | `(i32 i32) -> ()` |
| 175 | `nP2Z.uJxo` | func | `(i32 i32) -> ()` |
| 176 | `nP2Z.UYp6` | func | `(i32) -> (i32)` |
| 177 | `nP2Z.XSQ0` | func | `(i32 i32) -> (i32)` |
| 178 | `nP2Z.iaZC` | func | `(i32) -> ()` |
| 179 | `nP2Z.EYsh` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `nP2Z.skyj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `nP2Z.q9gN` | func | `(i32 i32) -> ()` |
| 182 | `nP2Z.xFdd` | func | `(i32 i32) -> ()` |
| 183 | `nP2Z.WetB` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `nP2Z.XbHz` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `nP2Z.jJJY` | func | `(i32 f32) -> ()` |
| 186 | `nP2Z.YAhu` | func | `(i32 f32) -> ()` |
| 187 | `nP2Z.rJrX` | func | `(i32 i32) -> ()` |
| 188 | `nP2Z.Y3yJ` | func | `(i32 i32) -> ()` |
| 189 | `nP2Z.UCnu` | func | `(i32) -> (i32)` |
| 190 | `nP2Z.gWEe` | func | `(i32) -> (i32)` |
| 191 | `nP2Z.NjkQ` | func | `(i32) -> (i32)` |
| 192 | `nP2Z.SFuP` | func | `(i32) -> (i32)` |
| 193 | `nP2Z.xh5l` | func | `(i32 i32 i32) -> ()` |
| 194 | `nP2Z.Uqzy` | func | `(i32 i32 i32) -> ()` |
| 195 | `nP2Z.tF6m` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `nP2Z.pT2U` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `nP2Z.Ls4w` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `nP2Z.LMdb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `nP2Z.tgXT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `nP2Z.WI3f` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `nP2Z.rOx8` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `nP2Z.WdtY` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `nP2Z.sbm1` | func | `(i32) -> (i32)` |
| 204 | `nP2Z.f4Sw` | func | `(i32) -> (i32)` |
| 205 | `nP2Z.xZ9v` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `nP2Z.WE7y` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `nP2Z.qZcM` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `nP2Z.zeYY` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `nP2Z.YE97` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `nP2Z.DvvQ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `nP2Z.Qu7K` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `nP2Z.ADPN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `nP2Z.uaVo` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `nP2Z.Hggf` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `nP2Z.CcVQ` | func | `(i32 i32 i32) -> ()` |
| 216 | `nP2Z.rIpQ` | func | `(i32 i32 i32) -> ()` |
| 217 | `nP2Z.RZxb` | func | `(i32 i32) -> ()` |
| 218 | `nP2Z.Qzkd` | func | `(i32 i32) -> ()` |
| 219 | `nP2Z.I6Yf` | func | `(i32 i32) -> ()` |
| 220 | `nP2Z.ZNAr` | func | `(i32 i32) -> ()` |
| 221 | `nP2Z.tlbt` | func | `(i32 i32) -> ()` |
| 222 | `nP2Z.o4Vc` | func | `(i32 i32) -> ()` |
| 223 | `nP2Z.KWro` | func | `(i32 f32 f32) -> ()` |
| 224 | `nP2Z.PcPs` | func | `(i32 f32 f32) -> ()` |
| 225 | `nP2Z.Gez3` | func | `(i32 i32) -> ()` |
| 226 | `nP2Z.PZqE` | func | `(i32 i32) -> ()` |
| 227 | `nP2Z.QZIA` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `nP2Z.Xv9n` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `nP2Z.ui7h` | func | `(i32 i32 i32) -> ()` |
| 230 | `nP2Z.ccsP` | func | `(i32) -> (i32)` |
| 231 | `nP2Z.LlzS` | func | `(i32) -> (i32)` |
| 232 | `nP2Z.Q6Oa` | func | `(i32 i32) -> ()` |
| 233 | `nP2Z.cHuZ` | func | `(i32 i32) -> ()` |
| 234 | `nP2Z.VYDK` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `nP2Z.LaiH` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `nP2Z.Qye5` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `nP2Z.zPWI` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `nP2Z.dB5o` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `nP2Z.gbx1` | func | `(i32 i32 i32) -> ()` |
| 240 | `nP2Z.Njg8` | func | `(i32 i32 i32) -> ()` |
| 241 | `nP2Z.qqQe` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `nP2Z.AeF1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `nP2Z.f4Hr` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `nP2Z.M6w4` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `nP2Z.a7Dr` | func | `(i32) -> (i32)` |
| 246 | `nP2Z.yLaq` | func | `(i32) -> (i32)` |
| 247 | `nP2Z.Q8bp` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `nP2Z.ua2R` | func | `(i32 i32) -> ()` |
| 249 | `nP2Z.b6TE` | func | `(i32 i32) -> ()` |
| 250 | `nP2Z.MFlK` | func | `(i32 i32) -> (i32)` |
| 251 | `nP2Z.Wxmp` | func | `(i32 i32) -> (i32)` |
| 252 | `nP2Z.rjQp` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `nP2Z.Edad` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `nP2Z.mp3m` | func | `(i32 i32) -> ()` |
| 255 | `nP2Z.gGDB` | func | `(i32 i32) -> ()` |
| 256 | `nP2Z.YOqN` | func | `(i32) -> (i32)` |
| 257 | `nP2Z.kEC9` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `nP2Z.lLT9` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `nP2Z.fOZu` | func | `(i32) -> ()` |
| 260 | `nP2Z.UZik` | func | `(i32 i32) -> ()` |
| 261 | `nP2Z.qGRN` | func | `(i32 i32) -> ()` |
| 262 | `nP2Z.OIkC` | func | `(i32 i32) -> ()` |
| 263 | `nP2Z.BcjO` | func | `(i32 i32) -> ()` |
| 264 | `nP2Z.yHsT` | func | `(i32 i32) -> ()` |
| 265 | `nP2Z.FZKg` | func | `(i32 i32) -> ()` |
| 266 | `nP2Z.oIjm` | func | `(i32 i32) -> ()` |
| 267 | `nP2Z.Ns4G` | func | `(i32 i32) -> ()` |
| 268 | `nP2Z.dS5V` | func | `(i32) -> (i32)` |
| 269 | `nP2Z.ESoX` | func | `(i32) -> (i32)` |
| 270 | `nP2Z.kXX5` | func | `(i32) -> (i32)` |
| 271 | `nP2Z.NqEf` | func | `(i32) -> (i32)` |
| 272 | `nP2Z.m5Bk` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `nP2Z.hFUM` | func | `(i32) -> ()` |
| 274 | `nP2Z.ZFX1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `nP2Z.Unhf` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `nP2Z.J5ri` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `nP2Z.F20J` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `nP2Z.JcJ7` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `nP2Z.krXc` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `nP2Z.exwT` | func | `(i32) -> (i32)` |
| 281 | `nP2Z.T6o8` | func | `(i32) -> (i32)` |
| 282 | `nP2Z.R1C2` | func | `(i32) -> (i32)` |
| 283 | `nP2Z.dxnj` | func | `(i32) -> (i32)` |
| 284 | `nP2Z.Df7y` | func | `(i32 i32) -> ()` |
| 285 | `nP2Z.lFzd` | func | `(i32) -> ()` |
| 286 | `nP2Z.GwSH` | func | `(i32 i32) -> ()` |
| 287 | `nP2Z.CBG4` | func | `(i32) -> (i32)` |
| 288 | `nP2Z.UMRK` | func | `(i32 i32) -> (i32)` |
| 289 | `nP2Z.USJQ` | func | `(i32 i32) -> (i32)` |
| 290 | `nP2Z.iTXU` | func | `(i32 i32) -> (i32)` |
| 291 | `nP2Z.EmlV` | func | `(f64) -> (i32)` |
| 292 | `nP2Z.aTlI` | func | `(i32 i32) -> (i32)` |
| 293 | `nP2Z.UZpS` | func | `(i32 i32) -> (i32)` |
| 294 | `nP2Z.WvlU` | func | `(i32 i32) -> (i32)` |
| 295 | `nP2Z.Cqgf` | func | `(i32 i32) -> (i32)` |
| 296 | `nP2Z.VP1u` | func | `(i32 i32) -> (i32)` |
| 297 | `nP2Z.R0vX` | func | `(i32 i32) -> (i32)` |
| 298 | `nP2Z.vjAq` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `SrhL` | func | 907 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `Rzpa` | func | 2481 | `(i32) -> (i32)` |
| `IOLw` | func | 2460 | `(i32) -> (i32)` |
| `yEt3` | func | 1851 | `(i32 i32 f64 f64 f64) -> ()` |
| `kjlR` | func | 3013 | `(i32) -> (i32 i32)` |
| `vHEt` | func | 1858 | `(i32 i32) -> ()` |
| `k0A3` | func | 2458 | `(i32) -> (f64)` |
| `ShRv` | func | 3124 | `() -> ()` |
| `gXbC` | func | 2499 | `(i32) -> (i32)` |
| `MUzJ` | func | 2999 | `(i32 i32) -> (i32 i32)` |
| `MVT0` | func | 1208 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `q2x0` | func | 2549 | `() -> (i32)` |
| `niFW` | func | 2776 | `(i32) -> (i32)` |
| `Tqds` | func | 1583 | `(i32 i32) -> ()` |
| `bCV4` | func | 2175 | `(i32 i32) -> (i32)` |
| `elB8` | func | 2462 | `(i32) -> (i32)` |
| `mkgN` | func | 2478 | `(i32) -> (i32)` |
| `dqc2` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `N5wb` | func | 1283 | `(i32) -> (i32)` |
| `h0ZS` | func | 1810 | `() -> (i32)` |
| `lKtz` | func | 2974 | `(i32 i32) -> ()` |
| `yZKE` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `lCDW` | func | 2583 | `(i32 i32) -> ()` |
| `exS0` | func | 1469 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `tUKU` | func | 2463 | `(i32) -> (i32)` |
| `eL4f` | func | 3168 | `(i32) -> (i32)` |
| `dvgC` | func | 3000 | `(i32 i32) -> (i32 i32)` |
| `gthI` | func | 2998 | `(i32 i32) -> (i32 i32)` |
| `ygJK` | func | 2459 | `(i32) -> (i32)` |
| `xFLG` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `PvN3` | func | 1316 | `(i32) -> ()` |
| `B226` | func | 3001 | `(i32 i32) -> (i32 i32)` |
| `QORr` | func | 2497 | `(i32) -> (i32)` |
| `SnS2` | func | 3027 | `() -> (i32 i32)` |
| `vIn3` | func | 1385 | `(i32 f64 f64) -> (i32)` |
| `ruaL` | func | 1454 | `(i32 i32 i32 i32) -> ()` |
| `gw0g` | func | 3014 | `(i32) -> (i32 i32)` |
| `TOuy` | func | 3123 | `(i32) -> ()` |
| `RPfT` | func | 1432 | `() -> (i32)` |
| `EtaU` | func | 2479 | `(i32) -> (i32)` |
| `kYCZ` | func | 1572 | `(i32 i32) -> (i32)` |
| `fb7r` | func | 1544 | `(i32 i32 i32 i32) -> (i32)` |
| `eXpl` | func | 3090 | `() -> (i32)` |
| `SwmS` | func | 2488 | `(i32) -> (i32)` |
| `XyEA` | func | 2004 | `(i32 f64) -> (i32)` |
| `vvrE` | func | 1582 | `(i32 i32) -> ()` |
| `wmOt` | func | 3016 | `(i32) -> (i32 i32)` |
| `zV4X` | func | 3164 | `() -> (f64)` |
| `EStR` | func | 737 | `(i32) -> (i32)` |
| `rocb` | func | 2584 | `() -> (i32)` |
| `hLhI` | func | 2942 | `() -> ()` |
| `whuW` | func | 1733 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `N1vq` | func | 3117 | `(i32 i32 i32) -> ()` |
| `hc3v` | func | 3193 | `() -> (i32)` |
| `BKYj` | func | 2400 | `(i32) -> (i32)` |
| `BQ6Y` | func | 2061 | `(i32 i32) -> (i32)` |
| `LWNi` | func | 2489 | `(i32 i32) -> (i32)` |
| `xhcz` | func | 2787 | `(i32) -> (i32)` |
| `Xv4S` | func | 1384 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `XwAP` | func | 2993 | `(i32 i32 i32) -> (i32 i32)` |
| `wkrk` | func | 2250 | `(i32 f64) -> (i32)` |
| `LBi3` | func | 2498 | `(i32) -> (i32)` |
| `EEnK` | func | 1331 | `(i32 i32 i32) -> (i32)` |
| `JMDI` | func | 2195 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `l0bO` | func | 3052 | `(i32 i32 i32 i32) -> ()` |
| `pPf0` | func | 2466 | `(i32) -> (i32)` |
| `LTHa` | func | 2480 | `(i32 i32) -> ()` |
| `YyCr` | func | 1404 | `(i32 i32) -> (i32)` |
| `ITxP` | func | 2798 | `(i32) -> ()` |
| `GQS8` | func | 1257 | `(i32 i32 i32) -> (i32)` |
| `VV76` | func | 1943 | `(i32) -> (i32)` |
| `MVml` | func | 889 | `(i32 i32) -> (i32)` |
| `NAYM` | func | 1264 | `(i32 i32 i32) -> ()` |
| `Fkqu` | func | 3028 | `() -> (i32 i32)` |
| `cAaz` | func | 2992 | `(i32 i32 i32) -> (i32 i32)` |
| `y365` | func | 2330 | `(i32 i32) -> (i32)` |
| `CEuT` | func | 888 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `Gfqk` | func | 1484 | `(i32 i32) -> (i32)` |
| `mkOF` | func | 1831 | `(i32 i32 i32 i32) -> (i32)` |
| `pFD3` | func | 2967 | `(i32 i32 i32 i32) -> (i32)` |
| `tdlJ` | func | 2490 | `(i32 i32) -> (i32)` |
| `RIIZ` | func | 1627 | `(i32 i32 i32 i32) -> (i32)` |
| `Vxqv` | func | 1170 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `bfo2` | func | 2332 | `(i32 i32) -> (i32)` |
| `v4lj` | func | 1209 | `(i32 i32 i32 i32) -> (i32)` |
| `s04I` | func | 2961 | `(i32 i32) -> (i32)` |
| `EsiK` | func | 679 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Ou6V` | func | 2361 | `(i32 i32) -> (i32)` |
| `inRO` | global | 2 | `` |
| `UVBE` | func | 1694 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `g44Q` | func | 3004 | `(i32 i32) -> (i32 i32)` |
| `vrh0` | func | 1883 | `(i32) -> ()` |
| `yhiB` | func | 3015 | `(i32) -> (i32 i32)` |
| `y5nZ` | func | 2403 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `mhIA` | func | 2039 | `(i32 i32) -> ()` |
| `gGgT` | func | 3061 | `(i32 i32 i32) -> ()` |
| `Uxgf` | func | 2762 | `(i32) -> (i32)` |
| `Xs2X` | func | 568 | `(i32 i32 i32) -> (i32)` |
| `IiTR` | func | 1717 | `(i32) -> (i32)` |
| `sH5S` | func | 2467 | `(i32) -> (i32)` |
| `pKmq` | func | 2820 | `(i32) -> (i32)` |
| `X1PJ` | func | 1109 | `(i32 i32) -> (i32)` |
| `OGHY` | func | 1508 | `(i32 i32) -> (i32)` |
| `DlYe` | func | 3192 | `() -> (i32)` |
| `Oge9` | func | 2468 | `(i32) -> (i32)` |
| `hTlz` | func | 1290 | `(i32 i32) -> (i32)` |
| `OrfK` | func | 1816 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `AdzX` | func | 1875 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `gsyb` | func | 1511 | `(i32 f64) -> (f64)` |
| `CVd0` | func | 1978 | `(i32 i32) -> ()` |
| `rasg` | func | 918 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `pTN1` | global | 1 | `` |
| `TxCP` | func | 1477 | `(i32 i32 i32 i32) -> (i32)` |
| `eCP0` | func | 2537 | `(i32 i32) -> ()` |
| `HhEv` | func | 759 | `(i32 i32 i32) -> (i32)` |
| `yK1l` | func | 1497 | `(i32 i32) -> (i32)` |
| `Hyyl` | func | 1474 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ElhP` | func | 1110 | `(i32 i32) -> ()` |
| `EmnS` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `JX2E` | func | 1215 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `mTFC` | func | 1868 | `(i32 i32) -> (i32)` |
| `nBr8` | func | 1509 | `(i32 i32) -> (i32)` |
| `wp9A` | func | 3002 | `(i32 i32) -> (i32 i32)` |
| `V1YJ` | func | 2465 | `(i32) -> ()` |
| `MN0v` | func | 3062 | `(i32 i32) -> ()` |
| `iQWB` | func | 3003 | `(i32 i32) -> (i32 i32)` |
| `OY3O` | func | 1945 | `(i32 i32 i32 i32) -> ()` |
| `Lx7I` | func | 2249 | `(i32 i32) -> ()` |
| `T6TW` | func | 2444 | `(i32 i32) -> ()` |
| `lcEq` | func | 2445 | `(i32) -> (i32)` |
| `zuys` | func | 2143 | `(i32 i32) -> (i32)` |
| `xtRO` | func | 1524 | `(i32 i32 i32) -> (i32)` |
| `a6f8` | func | 1587 | `(i32 f64 f64 f64) -> (i32)` |
| `EkGG` | func | 706 | `(i32 i32) -> (i32)` |
| `IVkw` | func | 2373 | `(i32 i32 i32 i32) -> (i32)` |
| `B3Aj` | func | 669 | `(i32 i32) -> (i32)` |
| `p3Pt` | func | 2476 | `(i32 i32) -> ()` |
| `OZ0j` | func | 3169 | `(i32) -> ()` |
| `nmvT` | func | 2280 | `(i32 i32) -> ()` |
| `inCE` | func | 2329 | `(i32 i32) -> (i32)` |
| `wVy6` | func | 3012 | `(i32) -> (i32 i32)` |
| `OoYh` | func | 2464 | `(i32) -> (i32)` |
| `XtuI` | func | 2331 | `(i32 i32) -> (i32)` |
| `ywmX` | func | 1926 | `(i32) -> (i32)` |
| `yVGk` | func | 1557 | `(i32) -> (i32)` |
| `Y2fw` | func | 2755 | `(i32) -> (i32)` |
| `UKEz` | func | 1884 | `(i32) -> ()` |
| `f8lk` | func | 1428 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `oeSD` | func | 2417 | `(i32) -> (i32)` |
| `XKi3` | func | 1751 | `(i32 i32) -> (i32)` |
| `F1sF` | func | 810 | `(i32 i32) -> (i32)` |
| `dmPV` | func | 1478 | `(i32) -> (i32)` |
| `fMVp` | func | 2020 | `(i32 f64 f64 f64) -> (i32)` |
| `U6DR` | func | 1237 | `(i32 i32) -> (i32)` |
| `FpDX` | func | 2461 | `(i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 753 · max 753
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2637800, `i32` = i32.const 2638372

## Functions

- 2,905 bodies · 4,031,927 code bytes · avg 1.4 KB
- instruction scan: 2,905 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 113 |
| <= 128 bytes | 257 |
| <= 256 bytes | 376 |
| <= 512 bytes | 672 |
| <= 1024 bytes | 572 |
| <= 2048 bytes | 421 |
| <= 4096 bytes | 182 |
| <= 8192 bytes | 91 |
| <= 16384 bytes | 31 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 213 | 194,493 | 88,290 | local.get×25879, i32.const×9902, i32.load×5634, local.set×4730, local.tee×4634 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 112,325 | 54,451 | local.get×15156, i32.const×6534, i32.add×3194, local.set×3087, i32.load×2951 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,544 | 21,400 | local.get×6231, i32.const×2827, local.set×1224, i32.add×1128, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 125 | 48,862 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 126 | 19,829 | 8,878 | local.get×2493, i32.const×1113, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,714 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 63 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 196 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 226 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 716 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1005 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1569 | `(i32 i32) -> (i32)` | 180 | 54,455 | 19,757 | local.get×6549, i32.const×2619, i64.store×1893, i64.const×1069, i64.load×1044 |
| 1970 | `(i32 i32) -> ()` | 110 | 38,696 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2578 | `(i32 i32) -> ()` | 397 | 142,149 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2856 | `(i32 i32 i32 i32) -> ()` | 137 | 30,443 | 13,878 | local.get×4157, i32.const×1460, local.tee×728, local.set×674, i32.load×609 |
| 2874 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 538,852 |
| `i32.const` | 225,816 |
| `local.tee` | 100,234 |
| `i32.load` | 94,541 |
| `local.set` | 93,862 |
| `i32.add` | 87,237 |
| `end` | 79,183 |
| `br_if` | 64,265 |
| `i32.store` | 46,770 |
| `block` | 37,219 |
| `i64.const` | 32,611 |
| `i64.store` | 31,730 |
| `if` | 30,268 |
| `call` | 29,448 |
| `i32.sub` | 24,631 |
| `i64.load` | 23,613 |
| `br` | 23,108 |
| `i32.eqz` | 19,523 |
| `select` | 16,883 |
| `i32.shl` | 16,447 |
| `i32.and` | 16,295 |
| `i32.ne` | 15,857 |
| `i32.load8_u` | 14,951 |
| `i32.eq` | 13,866 |
| `i32.store8` | 12,612 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,905/2,905 (degraded: 0)
