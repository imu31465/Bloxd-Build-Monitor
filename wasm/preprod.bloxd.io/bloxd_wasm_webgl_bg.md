# WASM module: `bloxd_wasm_webgl_bg`

> environment **preprod.bloxd.io** · build `cwj32u.ae3e40c2` · analyzed 2026-11-27T00:54:30+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgl_bg.3f881deb74af2c5ae84f.wasm
> 5,546,226 bytes (5.3 MB) · sha256 `ee0b380f26fef185…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,545,132 → 5,546,226 bytes (+1,094)
- defined functions 2,936 → 2,937
- code bytes 4,067,931 → 4,069,190
- data bytes 1,428,220 → 1,428,051
- name-section module id `3d1919825e617fdb.10988` → `41bdb492a06f21f6.10998`
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,937 / 299 |
| Exports / imports | 160 / 300 |
| Code bytes (function bodies) | 4,069,190 (3.9 MB) |
| Total local variables | 31,211 |
| Instructions (scanable bodies) | 1,907,277 |
| Data segments / bytes | 4,032 / 1,428,051 |
| Element segments / entries | 1 / 754 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `41bdb492a06f21f6.10998` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,536 | 181 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,992 | 2937 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,515 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,074,576 | 2937 |
| 11 | data | 1,460,616 | 4032 |
| 0 | custom:name | 30 | — |

## Types

181 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `TP7V.ysNA` | memory | `[128..14648]` |
| 0 | `TP7V.osV0` | func | `(i32) -> (f64)` |
| 1 | `TP7V.FgrU` | func | `() -> (i32)` |
| 2 | `TP7V.RWF4` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `TP7V.KGtS` | func | `(i32) -> ()` |
| 4 | `TP7V.GEvv` | func | `(i32 i32) -> (i32)` |
| 5 | `TP7V.WbeX` | func | `(i32) -> (i32)` |
| 6 | `TP7V.VthI` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `TP7V.ZYAW` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `TP7V.PDwC` | func | `(i32) -> (i32)` |
| 9 | `TP7V.u1g5` | func | `(i32 i32) -> ()` |
| 10 | `TP7V.wNC4` | func | `(i32 i32) -> ()` |
| 11 | `TP7V.tvVI` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `TP7V.MYXi` | func | `(i32 i32) -> (i32)` |
| 13 | `TP7V.rSHm` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `TP7V.h4Mc` | func | `(i32) -> (i32)` |
| 15 | `TP7V.EqKd` | func | `(i32 i32) -> (i32)` |
| 16 | `TP7V.XGpV` | func | `(i32 i32) -> (i32)` |
| 17 | `TP7V.xVDX` | func | `(i32 i32) -> ()` |
| 18 | `TP7V.ChTd` | func | `(i32) -> (i32)` |
| 19 | `TP7V.nyh2` | func | `(i32) -> (i32)` |
| 20 | `TP7V.eRiY` | func | `(i32) -> (i32)` |
| 21 | `TP7V.cdcW` | func | `(i32) -> ()` |
| 22 | `TP7V.RfE4` | func | `(i32 i32) -> ()` |
| 23 | `TP7V.zmKo` | func | `(i32 i32) -> ()` |
| 24 | `TP7V.PUWV` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `TP7V.lCyn` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `TP7V.iAoT` | func | `(i32) -> (i32)` |
| 27 | `TP7V.suv5` | func | `(i32 i32) -> ()` |
| 28 | `TP7V.D9tl` | func | `(i32 i32) -> (i32)` |
| 29 | `TP7V.k8if` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `TP7V.z2Wv` | func | `(i32 i32) -> (i32)` |
| 31 | `TP7V.sjdQ` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `TP7V.txdU` | func | `(i32) -> (i32)` |
| 33 | `TP7V.sYYA` | func | `() -> (f64)` |
| 34 | `TP7V.zxvp` | func | `(i32 i32) -> ()` |
| 35 | `TP7V.dR2J` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `TP7V.E0cV` | func | `(i32) -> (i32)` |
| 37 | `TP7V.pStN` | func | `(i32) -> (i32)` |
| 38 | `TP7V.oddh` | func | `(i32) -> (i32)` |
| 39 | `TP7V.aFLK` | func | `(i32 i32) -> (i32)` |
| 40 | `TP7V.vH2G` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `TP7V.nNbX` | func | `(i32) -> (i32)` |
| 42 | `TP7V.bAHa` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `TP7V.lUcR` | func | `(i32) -> (i32)` |
| 44 | `TP7V.A75I` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `TP7V.C9ab` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `TP7V.zYgX` | func | `(i32 i32 i32) -> ()` |
| 47 | `TP7V.wSFA` | func | `(i32 i32 i32) -> ()` |
| 48 | `TP7V.oqCd` | func | `(i32 i32 i32) -> ()` |
| 49 | `TP7V.Zppd` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `TP7V.ZUvA` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `TP7V.y0iQ` | func | `(i32 i32) -> ()` |
| 52 | `TP7V.An4l` | func | `(i32 i32) -> ()` |
| 53 | `TP7V.Mp9H` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `TP7V.P171` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `TP7V.yg6Q` | func | `(i32 f32 f32) -> ()` |
| 56 | `TP7V.jtZJ` | func | `(i32 f32 f32) -> ()` |
| 57 | `TP7V.o42c` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `TP7V.UUHv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `TP7V.EJmf` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `TP7V.Bx9t` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `TP7V.XHwE` | func | `(i32 i32 i32) -> ()` |
| 62 | `TP7V.Nd6y` | func | `(i32 i32 i32) -> ()` |
| 63 | `TP7V.N7zn` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `TP7V.CS3z` | func | `(i32 i32 i32) -> ()` |
| 65 | `TP7V.xrBe` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `TP7V.Liky` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `TP7V.x7KP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `TP7V.rurW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `TP7V.VW2k` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `TP7V.LmB0` | func | `(i32) -> (i32)` |
| 71 | `TP7V.AAdm` | func | `(i32) -> ()` |
| 72 | `TP7V.SKwi` | func | `(i32) -> (i32)` |
| 73 | `TP7V.yo6G` | func | `(i32 i32) -> (i32)` |
| 74 | `TP7V.jmxj` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `TP7V.Bstd` | func | `(i32 i32 i32) -> ()` |
| 76 | `TP7V.LBfN` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `TP7V.Mf7a` | func | `() -> (f64)` |
| 78 | `TP7V.Tfwv` | func | `() -> (f64)` |
| 79 | `TP7V.iWqD` | func | `(i32 i32) -> ()` |
| 80 | `TP7V.vbBn` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `TP7V.m3TG` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `TP7V.yzkO` | func | `(i32 i32 i32) -> ()` |
| 83 | `TP7V.WFKY` | func | `(i32 i32 i32) -> ()` |
| 84 | `TP7V.VOwH` | func | `(i32 i32) -> ()` |
| 85 | `TP7V.UP3c` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `TP7V.IDUj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `TP7V.kK9d` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `TP7V.ZQsG` | func | `(i32 i32) -> ()` |
| 89 | `TP7V.VAv8` | func | `(i32 i32) -> ()` |
| 90 | `TP7V.u8pm` | func | `(i32) -> (i32)` |
| 91 | `TP7V.jWZr` | func | `(i32 i32 i32) -> ()` |
| 92 | `TP7V.RoLG` | func | `(i32 i32 i32) -> ()` |
| 93 | `TP7V.z5gi` | func | `(i32) -> (i32)` |
| 94 | `TP7V.CmTB` | func | `(i32) -> (i32)` |
| 95 | `TP7V.gEaX` | func | `(i32 i32) -> ()` |
| 96 | `TP7V.euUH` | func | `(i32 i32) -> ()` |
| 97 | `TP7V.cm25` | func | `(i32 i32) -> ()` |
| 98 | `TP7V.HUyA` | func | `(i32 i32) -> ()` |
| 99 | `TP7V.DT9k` | func | `(i32 i32 i32) -> ()` |
| 100 | `TP7V.n6ay` | func | `(i32 i32 i32) -> ()` |
| 101 | `TP7V.L0Wh` | func | `(i32 i32 f32) -> ()` |
| 102 | `TP7V.sAbk` | func | `(i32 i32 f32) -> ()` |
| 103 | `TP7V.B7MY` | func | `(i32 i32 i32) -> ()` |
| 104 | `TP7V.ylc4` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `TP7V.Q6j0` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `TP7V.S2Pt` | func | `(i32 i32) -> ()` |
| 107 | `TP7V.Mbzt` | func | `(i32 i32) -> ()` |
| 108 | `TP7V.FUJ6` | func | `(i32 i32) -> ()` |
| 109 | `TP7V.QkmQ` | func | `(i32 i32) -> ()` |
| 110 | `TP7V.HUoq` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `TP7V.uJkp` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `TP7V.UEdt` | func | `(i32 i32 i32) -> ()` |
| 113 | `TP7V.WYqb` | func | `(i32 i32 i32) -> ()` |
| 114 | `TP7V.Q64X` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `TP7V.aedq` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `TP7V.exlL` | func | `(i32 i32) -> ()` |
| 117 | `TP7V.RAbb` | func | `(i32 i32) -> ()` |
| 118 | `TP7V.r0Dv` | func | `(i32 i32) -> (i32)` |
| 119 | `TP7V.w1aL` | func | `(i32 i32) -> (i32)` |
| 120 | `TP7V.j5Kj` | func | `(i32 i32) -> ()` |
| 121 | `TP7V.RnbA` | func | `(i32 i32) -> ()` |
| 122 | `TP7V.GMxm` | func | `(i32) -> (i32)` |
| 123 | `TP7V.v3A3` | func | `(i32 i32) -> ()` |
| 124 | `TP7V.E9XO` | func | `(i32 i32) -> ()` |
| 125 | `TP7V.MBHN` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `TP7V.vFxD` | func | `(i32 i32 i32) -> ()` |
| 127 | `TP7V.wQUF` | func | `(i32 i32 i32) -> ()` |
| 128 | `TP7V.TBgF` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `TP7V.csx6` | func | `(i32 i32) -> ()` |
| 130 | `TP7V.UXEf` | func | `(i32 i32 i32 i32) -> (i32)` |
| 131 | `TP7V.BrDr` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `TP7V.tpKP` | func | `(i32 i32 i32) -> ()` |
| 133 | `TP7V.Xbwv` | func | `(i32 i32 i32) -> ()` |
| 134 | `TP7V.hNwK` | func | `(i32) -> ()` |
| 135 | `TP7V.k3xq` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `TP7V.WnP2` | func | `(i32 i32 i32) -> ()` |
| 137 | `TP7V.pLeO` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `TP7V.ChBV` | func | `(i32 i32 i32) -> (i32)` |
| 139 | `TP7V.Fhu0` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `TP7V.XsPA` | func | `(i32 i32) -> ()` |
| 141 | `TP7V.VYLg` | func | `(i32) -> (i32)` |
| 142 | `TP7V.Sb7z` | func | `(i32 i32) -> ()` |
| 143 | `TP7V.v26W` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `TP7V.Ym7j` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `TP7V.h14w` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `TP7V.VgJf` | func | `(i32 i32) -> ()` |
| 147 | `TP7V.quyx` | func | `(i32 i32) -> ()` |
| 148 | `TP7V.sfcE` | func | `(i32 i32) -> ()` |
| 149 | `TP7V.FYNM` | func | `(i32 i32) -> ()` |
| 150 | `TP7V.poyK` | func | `(i32) -> (i32)` |
| 151 | `TP7V.hm8C` | func | `(i32) -> (i32)` |
| 152 | `TP7V.AYSX` | func | `(i32) -> (i32)` |
| 153 | `TP7V.Go75` | func | `(i32) -> (i32)` |
| 154 | `TP7V.xnUT` | func | `(i32) -> (i32)` |
| 155 | `TP7V.Fht0` | func | `(i32) -> (i32)` |
| 156 | `TP7V.rHT0` | func | `() -> (i32)` |
| 157 | `TP7V.jj28` | func | `() -> (i32)` |
| 158 | `TP7V.UID9` | func | `() -> (i32)` |
| 159 | `TP7V.LWs1` | func | `() -> (i32)` |
| 160 | `TP7V.H0sX` | func | `(i32 i32) -> (i32)` |
| 161 | `TP7V.gtWv` | func | `(i32) -> ()` |
| 162 | `TP7V.hAOc` | func | `(i32 i32) -> (i32)` |
| 163 | `TP7V.APfj` | func | `(i32) -> (i32)` |
| 164 | `TP7V.RwTX` | func | `(i32) -> (i32)` |
| 165 | `TP7V.C8Qo` | func | `(i32) -> (i32)` |
| 166 | `TP7V.LoTM` | func | `(i32) -> ()` |
| 167 | `TP7V.uW3T` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `TP7V.LkBs` | func | `(i32) -> (i32)` |
| 169 | `TP7V.RQok` | func | `(i32) -> (i32)` |
| 170 | `TP7V.TEYU` | func | `(i32 i32) -> (i32)` |
| 171 | `TP7V.m7jm` | func | `(i32) -> ()` |
| 172 | `TP7V.brru` | func | `() -> (i32)` |
| 173 | `TP7V.QJYk` | func | `(i32 i32) -> (i32)` |
| 174 | `TP7V.dQqy` | func | `(i32 i32) -> ()` |
| 175 | `TP7V.wv7Z` | func | `(i32 i32) -> ()` |
| 176 | `TP7V.cawj` | func | `(i32) -> (i32)` |
| 177 | `TP7V.nitA` | func | `(i32 i32) -> (i32)` |
| 178 | `TP7V.ntEV` | func | `(i32) -> ()` |
| 179 | `TP7V.QhzB` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `TP7V.Dqps` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `TP7V.hoCX` | func | `(i32 i32) -> ()` |
| 182 | `TP7V.opZk` | func | `(i32 i32) -> ()` |
| 183 | `TP7V.Tblp` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `TP7V.nNJU` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `TP7V.zwpc` | func | `(i32 f32) -> ()` |
| 186 | `TP7V.PQTI` | func | `(i32 f32) -> ()` |
| 187 | `TP7V.DJ0f` | func | `(i32 i32) -> ()` |
| 188 | `TP7V.CqIL` | func | `(i32 i32) -> ()` |
| 189 | `TP7V.PqfZ` | func | `(i32) -> (i32)` |
| 190 | `TP7V.jO1k` | func | `(i32) -> (i32)` |
| 191 | `TP7V.AhbZ` | func | `(i32) -> (i32)` |
| 192 | `TP7V.prh7` | func | `(i32) -> (i32)` |
| 193 | `TP7V.VJPf` | func | `(i32 i32 i32) -> ()` |
| 194 | `TP7V.jbpK` | func | `(i32 i32 i32) -> ()` |
| 195 | `TP7V.rBGL` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `TP7V.bOWU` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `TP7V.KViL` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `TP7V.S2yv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `TP7V.MFuu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `TP7V.yZcJ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `TP7V.jkGY` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `TP7V.jnP6` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `TP7V.PShM` | func | `(i32) -> (i32)` |
| 204 | `TP7V.yFSE` | func | `(i32) -> (i32)` |
| 205 | `TP7V.iW1o` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `TP7V.ivIY` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `TP7V.nNNl` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `TP7V.rrfT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `TP7V.gZ7m` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `TP7V.jKvR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `TP7V.HQUA` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `TP7V.vzcE` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `TP7V.z2D1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `TP7V.vtYh` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `TP7V.Hlqr` | func | `(i32 i32 i32) -> ()` |
| 216 | `TP7V.ejFQ` | func | `(i32 i32 i32) -> ()` |
| 217 | `TP7V.Wv3Z` | func | `(i32 i32) -> ()` |
| 218 | `TP7V.uHdQ` | func | `(i32 i32) -> ()` |
| 219 | `TP7V.YadE` | func | `(i32 i32) -> ()` |
| 220 | `TP7V.H0OO` | func | `(i32 i32) -> ()` |
| 221 | `TP7V.J8Ax` | func | `(i32 i32) -> ()` |
| 222 | `TP7V.ZwoX` | func | `(i32 i32) -> ()` |
| 223 | `TP7V.fAYo` | func | `(i32 f32 f32) -> ()` |
| 224 | `TP7V.NxeP` | func | `(i32 f32 f32) -> ()` |
| 225 | `TP7V.VGwD` | func | `(i32 i32) -> ()` |
| 226 | `TP7V.l9mo` | func | `(i32 i32) -> ()` |
| 227 | `TP7V.f0eH` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `TP7V.PjhR` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `TP7V.vbO6` | func | `(i32 i32 i32) -> ()` |
| 230 | `TP7V.mili` | func | `(i32) -> (i32)` |
| 231 | `TP7V.S9OX` | func | `(i32) -> (i32)` |
| 232 | `TP7V.qqBH` | func | `(i32 i32) -> ()` |
| 233 | `TP7V.ffsb` | func | `(i32 i32) -> ()` |
| 234 | `TP7V.NdMo` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `TP7V.HC1E` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `TP7V.Gzog` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `TP7V.oSNU` | func | `(i32 i32 i32) -> ()` |
| 238 | `TP7V.ZYCe` | func | `(i32 i32 i32) -> ()` |
| 239 | `TP7V.bbsr` | func | `(i32 i32 i32) -> ()` |
| 240 | `TP7V.Gx8o` | func | `(i32 i32 i32) -> ()` |
| 241 | `TP7V.mTW9` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `TP7V.nQv5` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `TP7V.QGUB` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `TP7V.jsMs` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `TP7V.TxVR` | func | `(i32) -> (i32)` |
| 246 | `TP7V.md6v` | func | `(i32) -> (i32)` |
| 247 | `TP7V.ZEFP` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `TP7V.gaCR` | func | `(i32 i32) -> ()` |
| 249 | `TP7V.QYJ0` | func | `(i32 i32) -> ()` |
| 250 | `TP7V.deOw` | func | `(i32 i32) -> (i32)` |
| 251 | `TP7V.SBeN` | func | `(i32 i32) -> (i32)` |
| 252 | `TP7V.NR8e` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `TP7V.KpQx` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `TP7V.lgU9` | func | `(i32 i32) -> ()` |
| 255 | `TP7V.FPa7` | func | `(i32 i32) -> ()` |
| 256 | `TP7V.YQB3` | func | `(i32) -> (i32)` |
| 257 | `TP7V.OptB` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `TP7V.N68b` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `TP7V.pFOt` | func | `(i32) -> ()` |
| 260 | `TP7V.w65v` | func | `(i32 i32) -> ()` |
| 261 | `TP7V.te7I` | func | `(i32 i32) -> ()` |
| 262 | `TP7V.k1T2` | func | `(i32 i32) -> ()` |
| 263 | `TP7V.H42l` | func | `(i32 i32) -> ()` |
| 264 | `TP7V.tKgK` | func | `(i32 i32) -> ()` |
| 265 | `TP7V.tIYz` | func | `(i32 i32) -> ()` |
| 266 | `TP7V.A60S` | func | `(i32 i32) -> ()` |
| 267 | `TP7V.w5BB` | func | `(i32 i32) -> ()` |
| 268 | `TP7V.M5DO` | func | `(i32) -> (i32)` |
| 269 | `TP7V.b02F` | func | `(i32) -> (i32)` |
| 270 | `TP7V.FYUS` | func | `(i32) -> (i32)` |
| 271 | `TP7V.ZsNO` | func | `(i32) -> (i32)` |
| 272 | `TP7V.wXcY` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `TP7V.Ib13` | func | `(i32) -> ()` |
| 274 | `TP7V.YyxH` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `TP7V.HQpL` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `TP7V.s8C8` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `TP7V.NfrC` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `TP7V.HBbG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `TP7V.QEhn` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `TP7V.Asud` | func | `(i32) -> (i32)` |
| 281 | `TP7V.zGSR` | func | `(i32) -> (i32)` |
| 282 | `TP7V.eQUC` | func | `(i32) -> (i32)` |
| 283 | `TP7V.bah6` | func | `(i32) -> (i32)` |
| 284 | `TP7V.F9NJ` | func | `(i32 i32) -> ()` |
| 285 | `TP7V.hTzY` | func | `(i32) -> ()` |
| 286 | `TP7V.J8ku` | func | `(i32 i32) -> ()` |
| 287 | `TP7V.i8Re` | func | `(i32) -> (i32)` |
| 288 | `TP7V.ybOd` | func | `(i32 i32) -> (i32)` |
| 289 | `TP7V.cayC` | func | `(i32 i32) -> (i32)` |
| 290 | `TP7V.qX3c` | func | `(i32 i32) -> (i32)` |
| 291 | `TP7V.ZPHy` | func | `(f64) -> (i32)` |
| 292 | `TP7V.ynVq` | func | `(i32 i32) -> (i32)` |
| 293 | `TP7V.QlXn` | func | `(i32 i32) -> (i32)` |
| 294 | `TP7V.hfeR` | func | `(i32 i32) -> (i32)` |
| 295 | `TP7V.FFrR` | func | `(i32 i32) -> (i32)` |
| 296 | `TP7V.YTqc` | func | `(i32 i32) -> (i32)` |
| 297 | `TP7V.qEYR` | func | `(i32 i32) -> (i32)` |
| 298 | `TP7V.Tnj4` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `pjhp` | func | 2991 | `(i32 i32) -> (i32)` |
| `KM12` | func | 2355 | `(i32 i32) -> (i32)` |
| `RnVu` | func | 1277 | `(i32 i32 i32) -> ()` |
| `xffB` | func | 1121 | `(i32 i32) -> ()` |
| `nGvl` | func | 1966 | `(i32 i32 i32 i32) -> ()` |
| `vtPj` | func | 2493 | `(i32) -> (i32)` |
| `aYqc` | func | 1525 | `(i32 i32) -> (i32)` |
| `fXGV` | func | 2399 | `(i32 i32 i32 i32) -> (i32)` |
| `KfU6` | func | 1871 | `(i32 i32 f64 f64 f64) -> ()` |
| `rqQD` | func | 3083 | `(i32 i32 i32 i32) -> ()` |
| `cuUv` | func | 2575 | `() -> (i32)` |
| `eQSj` | func | 1600 | `(i32 i32) -> ()` |
| `iwge` | func | 2850 | `(i32) -> (i32)` |
| `dDkZ` | func | 1271 | `(i32 i32 i32) -> (i32)` |
| `VAEb` | func | 1889 | `(i32 i32) -> (i32)` |
| `k3wJ` | func | 1494 | `(i32 i32 i32 i32) -> (i32)` |
| `XX9g` | func | 767 | `(i32 i32 i32) -> (i32)` |
| `PbMW` | func | 1227 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `b4LY` | func | 1643 | `(i32 i32 i32 i32) -> (i32)` |
| `DBiG` | func | 2527 | `(i32) -> (i32)` |
| `Uein` | func | 1303 | `(i32 i32) -> (i32)` |
| `muaX` | func | 2496 | `(i32) -> (i32)` |
| `Pdgw` | func | 1528 | `(i32 f64) -> (f64)` |
| `BF3w` | func | 1757 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `sXQQ` | func | 2491 | `(i32) -> (i32)` |
| `heZD` | func | 1964 | `(i32) -> (i32)` |
| `pYOP` | func | 3004 | `(i32 i32) -> ()` |
| `TQ31` | func | 2507 | `(i32) -> (i32)` |
| `AjU5` | func | 2427 | `(i32) -> (i32)` |
| `CyXA` | func | 3154 | `(i32) -> ()` |
| `HZzl` | func | 671 | `(i32 i32) -> (i32)` |
| `wOch` | func | 3044 | `(i32) -> (i32 i32)` |
| `i4Ob` | func | 1249 | `(i32 i32) -> (i32)` |
| `N8hW` | func | 3200 | `(i32) -> ()` |
| `p1cA` | func | 3059 | `() -> (i32 i32)` |
| `oJ05` | func | 898 | `(i32 i32) -> (i32)` |
| `VnGt` | func | 2489 | `(i32) -> (i32)` |
| `mjmh` | func | 2474 | `(i32) -> (i32)` |
| `HOzg` | func | 3199 | `(i32) -> (i32)` |
| `wY0p` | func | 1562 | `(i32 i32 i32 i32) -> (i32)` |
| `EavG` | func | 1220 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `PW7Y` | func | 1999 | `(i32 i32) -> ()` |
| `niYX` | func | 2786 | `(i32) -> (i32)` |
| `OAzo` | func | 897 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `UHIe` | func | 2218 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `xuWt` | func | 2526 | `(i32) -> (i32)` |
| `KAoT` | func | 1328 | `(i32) -> ()` |
| `PHvk` | func | 2164 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `xApW` | func | 2473 | `(i32 i32) -> ()` |
| `AYdy` | func | 1605 | `(i32 f64 f64 f64) -> (i32)` |
| `pGkF` | func | 2443 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `CMTw` | func | 2828 | `(i32) -> ()` |
| `CSeL` | func | 2518 | `(i32 i32) -> (i32)` |
| `GuHG` | func | 2354 | `(i32 i32) -> (i32)` |
| `q5kR` | func | 1514 | `(i32 i32) -> (i32)` |
| `iJ6n` | func | 1601 | `(i32 i32) -> ()` |
| `LqKR` | func | 3030 | `(i32 i32) -> (i32 i32)` |
| `qyQV` | func | 1420 | `(i32 i32) -> (i32)` |
| `ev7P` | func | 3045 | `(i32) -> (i32 i32)` |
| `YauN` | func | 2356 | `(i32 i32) -> (i32)` |
| `SUpA` | func | 2563 | `(i32 i32) -> ()` |
| `qwJG` | func | 2509 | `(i32 i32) -> ()` |
| `k7mi` | func | 1904 | `(i32) -> ()` |
| `Zy3v` | func | 1831 | `() -> (i32)` |
| `YbUk` | func | 930 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `kgTy` | func | 685 | `(i32 i32) -> (i32)` |
| `jKh9` | func | 1485 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `BGGh` | func | 1501 | `(i32 i32) -> (i32)` |
| `AXzn` | func | 2026 | `(i32 f64) -> (i32)` |
| `stfh` | func | 747 | `(i32) -> (i32)` |
| `pgXb` | func | 1751 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Cpqr` | func | 1331 | `(i32 i32) -> (i32)` |
| `KlV6` | func | 3034 | `(i32 i32) -> (i32 i32)` |
| `KEpv` | func | 3043 | `(i32) -> (i32 i32)` |
| `fhQq` | func | 3033 | `(i32 i32) -> (i32 i32)` |
| `FQwU` | func | 1120 | `(i32 i32) -> (i32)` |
| `V1c1` | func | 1221 | `(i32 i32 i32 i32) -> (i32)` |
| `EwfO` | func | 2492 | `(i32) -> (i32)` |
| `WrlI` | func | 1399 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Wi57` | func | 2273 | `(i32 f64) -> (i32)` |
| `fC1t` | func | 1346 | `(i32 i32 i32) -> (i32)` |
| `pKnv` | func | 1879 | `(i32 i32) -> ()` |
| `fkXe` | func | 3023 | `(i32 i32 i32) -> (i32 i32)` |
| `LlZN` | func | 1836 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `JDyv` | func | 1526 | `(i32 i32) -> (i32)` |
| `UNzp` | func | 2444 | `(i32) -> (i32)` |
| `YW5x` | func | 3155 | `() -> ()` |
| `YYFa` | func | 3042 | `(i32) -> (i32 i32)` |
| `WhkZ` | func | 1769 | `(i32 i32) -> (i32)` |
| `B1RX` | func | 1712 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `P0mG` | func | 3029 | `(i32 i32) -> (i32 i32)` |
| `xsPE` | func | 2505 | `(i32 i32) -> ()` |
| `OMLA` | func | 1490 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `d38m` | func | 3224 | `() -> (i32)` |
| `Khte` | func | 2818 | `(i32) -> (i32)` |
| `YKVr` | func | 3092 | `(i32 i32 i32) -> ()` |
| `OEsA` | func | 3046 | `(i32) -> (i32 i32)` |
| `JuDN` | func | 1472 | `(i32 i32 i32 i32) -> ()` |
| `tq4y` | func | 750 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Tg0M` | func | 2497 | `(i32) -> (i32)` |
| `WZZG` | func | 1495 | `(i32) -> (i32)` |
| `KHPv` | global | 2 | `` |
| `dYws` | func | 3058 | `() -> (i32 i32)` |
| `Wi3I` | func | 917 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `QLQa` | func | 570 | `(i32 i32 i32) -> (i32)` |
| `CsgM` | func | 2084 | `(i32 i32) -> (i32)` |
| `oAqz` | func | 2387 | `(i32 i32) -> (i32)` |
| `lQH3` | global | 1 | `` |
| `Xq1P` | func | 680 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `i96J` | func | 3148 | `(i32 i32 i32) -> ()` |
| `HLuj` | func | 2488 | `(i32) -> (i32)` |
| `oAo7` | func | 3225 | `() -> (i32)` |
| `MJAC` | func | 2528 | `(i32) -> (i32)` |
| `yFzf` | func | 1180 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `fljH` | func | 3032 | `(i32 i32) -> (i32 i32)` |
| `muCC` | func | 1295 | `(i32) -> (i32)` |
| `roEB` | func | 2510 | `(i32) -> (i32)` |
| `ONp2` | func | 3028 | `(i32 i32) -> (i32 i32)` |
| `FFgl` | func | 703 | `(f64) -> (f64)` |
| `ZFnm` | func | 2487 | `(i32) -> (f64)` |
| `lV9c` | func | 2610 | `() -> (i32)` |
| `BDC7` | func | 2303 | `(i32 i32) -> ()` |
| `YoCp` | func | 860 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Y6KG` | func | 2508 | `(i32) -> (i32)` |
| `ouBg` | func | 2972 | `() -> ()` |
| `E7dv` | func | 2495 | `(i32) -> (i32)` |
| `ZPUW` | func | 2353 | `(i32 i32) -> (i32)` |
| `Kayn` | func | 1851 | `(i32 i32 i32 i32) -> (i32)` |
| `zHDh` | func | 3121 | `() -> (i32)` |
| `ecap` | func | 2196 | `(i32 i32) -> (i32)` |
| `PfM2` | func | 1541 | `(i32 i32 i32) -> (i32)` |
| `GM0B` | func | 1589 | `(i32 i32) -> (i32)` |
| `Dpg6` | func | 2519 | `(i32 i32) -> (i32)` |
| `qCDh` | func | 1947 | `(i32) -> (i32)` |
| `uWS3` | func | 3022 | `(i32 i32 i32) -> (i32 i32)` |
| `dQcG` | func | 3057 | `() -> (i32 i32)` |
| `de0R` | func | 2609 | `(i32 i32) -> ()` |
| `Fhw8` | func | 2997 | `(i32 i32 i32 i32) -> (i32)` |
| `wU7p` | func | 2494 | `(i32) -> ()` |
| `nMIc` | func | 1905 | `(i32) -> ()` |
| `AdCH` | func | 2272 | `(i32 i32) -> ()` |
| `reh5` | func | 3195 | `() -> (f64)` |
| `A1A9` | func | 2490 | `(i32) -> (i32)` |
| `bAfX` | func | 1400 | `(i32 f64 f64) -> (i32)` |
| `fcNx` | func | 1896 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `zorY` | func | 1735 | `(i32) -> (i32)` |
| `uBkq` | func | 3093 | `(i32 i32) -> ()` |
| `uwRT` | func | 1445 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `R6LZ` | func | 2044 | `(i32 f64 f64 f64) -> (i32)` |
| `mXob` | func | 2517 | `(i32) -> (i32)` |
| `VQfK` | func | 2807 | `(i32) -> (i32)` |
| `cSIa` | func | 3031 | `(i32 i32) -> (i32 i32)` |
| `pUXA` | func | 619 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NfOi` | func | 1449 | `() -> (i32)` |
| `zrAV` | func | 2793 | `(i32) -> (i32)` |
| `hotb` | func | 2060 | `(i32 i32) -> ()` |
| `BnPa` | func | 1452 | `(i32) -> (i32)` |
| `jUkb` | func | 742 | `(i32 i32 i32 i32) -> (i32)` |
| `EM67` | func | 711 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 755 · max 755
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2643200, `i32` = i32.const 2643788

## Functions

- 2,937 bodies · 4,069,190 code bytes · avg 1.4 KB
- instruction scan: 2,937 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 115 |
| <= 128 bytes | 257 |
| <= 256 bytes | 381 |
| <= 512 bytes | 678 |
| <= 1024 bytes | 582 |
| <= 2048 bytes | 431 |
| <= 4096 bytes | 178 |
| <= 8192 bytes | 92 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,831 | 91,028 | local.get×26756, i32.const×10177, i32.load×5791, local.set×4887, local.tee×4767 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 148 | 112,505 | 54,503 | local.get×15178, i32.const×6537, i32.add×3196, local.set×3087, i32.load×2954 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,544 | 21,400 | local.get×6231, i32.const×2827, local.set×1224, i32.add×1128, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 105 | 36,607 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,792 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,393 | 12,764 | local.get×3784, i32.const×1615, local.set×985, i32.add×682, i32.load×663 |
| 9 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,945 | 10,771 | local.get×2875, i32.const×1238, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 25 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,318 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,818 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 35 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 70 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 198 | `(i32 i32) -> ()` | 10 | 27,551 | 13,273 | local.get×4670, i32.load×1257, i32.const×1060, end×827, i32.add×762 |
| 220 | `(i32) -> ()` | 19 | 23,258 | 10,909 | local.get×2733, i32.load×1495, i32.const×1187, local.tee×1011, end×855 |
| 728 | `(i32 i32) -> ()` | 139 | 42,973 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 729 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1590 | `(i32 i32) -> (i32)` | 182 | 54,916 | 19,834 | local.get×6599, i32.const×2595, i64.store×1935, i64.const×1087, i64.load×1068 |
| 1993 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2608 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2887 | `(i32 i32 i32 i32) -> ()` | 137 | 31,379 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2905 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
| `local.get` | 543,941 |
| `i32.const` | 227,329 |
| `local.tee` | 101,029 |
| `i32.load` | 95,278 |
| `local.set` | 94,586 |
| `i32.add` | 87,699 |
| `end` | 79,766 |
| `br_if` | 64,920 |
| `i32.store` | 47,092 |
| `block` | 37,506 |
| `i64.const` | 32,891 |
| `i64.store` | 32,151 |
| `if` | 30,501 |
| `call` | 29,717 |
| `i32.sub` | 24,822 |
| `i64.load` | 23,905 |
| `br` | 23,267 |
| `i32.eqz` | 19,725 |
| `select` | 17,155 |
| `i32.shl` | 16,495 |
| `i32.and` | 16,417 |
| `i32.ne` | 15,961 |
| `i32.load8_u` | 15,109 |
| `i32.eq` | 14,012 |
| `i32.store8` | 12,704 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,937/2,937 (degraded: 0)
