# WASM module: `bloxd_wasm_webgl_bg`

> environment **preprod.bloxd.io** · build `fecih8.fbb4bdb3` · analyzed 2026-11-26T22:08:29+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgl_bg.545d7af6223cb9249e2a.wasm
> 5,545,132 bytes (5.3 MB) · sha256 `b3808b20b91fd2d4…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,537,354 → 5,545,132 bytes (+7,778)
- defined functions 2,934 → 2,936
- code bytes 4,062,185 → 4,067,931
- data bytes 1,426,189 → 1,428,220
- name-section module id `eb1ac7ff50f61929.10978` → `3d1919825e617fdb.10988`
- export signatures: +1 × `(f64) -> (f64)`
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `                                                            `
- removed embedded strings: `                                                            `

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,936 / 299 |
| Exports / imports | 160 / 300 |
| Code bytes (function bodies) | 4,067,931 (3.9 MB) |
| Total local variables | 31,200 |
| Instructions (scanable bodies) | 1,906,658 |
| Data segments / bytes | 4,033 / 1,428,220 |
| Element segments / entries | 1 / 754 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `3d1919825e617fdb.10988` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,528 | 180 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,990 | 2936 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,515 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,073,315 | 2936 |
| 11 | data | 1,460,793 | 4033 |
| 0 | custom:name | 30 | — |

## Types

180 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `qU5U.SnmC` | memory | `[128..14648]` |
| 0 | `qU5U.fHXa` | func | `(i32) -> (f64)` |
| 1 | `qU5U.Qe2S` | func | `() -> (i32)` |
| 2 | `qU5U.tkyr` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `qU5U.EuNZ` | func | `(i32) -> ()` |
| 4 | `qU5U.JiJd` | func | `(i32 i32) -> (i32)` |
| 5 | `qU5U.isjc` | func | `(i32) -> (i32)` |
| 6 | `qU5U.rI22` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `qU5U.RmVP` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `qU5U.YIzC` | func | `(i32) -> (i32)` |
| 9 | `qU5U.wrrx` | func | `(i32 i32) -> ()` |
| 10 | `qU5U.Zvn9` | func | `(i32 i32) -> ()` |
| 11 | `qU5U.BrN2` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `qU5U.RSfA` | func | `(i32 i32) -> (i32)` |
| 13 | `qU5U.jJGT` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `qU5U.dwyn` | func | `(i32) -> (i32)` |
| 15 | `qU5U.riZu` | func | `(i32 i32) -> (i32)` |
| 16 | `qU5U.dN9U` | func | `(i32 i32) -> (i32)` |
| 17 | `qU5U.pnzm` | func | `(i32 i32) -> ()` |
| 18 | `qU5U.rcXh` | func | `(i32) -> (i32)` |
| 19 | `qU5U.VJXt` | func | `(i32) -> (i32)` |
| 20 | `qU5U.TbBe` | func | `(i32) -> (i32)` |
| 21 | `qU5U.vCZI` | func | `(i32) -> ()` |
| 22 | `qU5U.AqHy` | func | `(i32 i32) -> ()` |
| 23 | `qU5U.wFau` | func | `(i32 i32) -> ()` |
| 24 | `qU5U.J6o2` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `qU5U.gPfn` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `qU5U.UuoF` | func | `(i32) -> (i32)` |
| 27 | `qU5U.JewL` | func | `(i32 i32) -> ()` |
| 28 | `qU5U.NGmi` | func | `(i32 i32) -> (i32)` |
| 29 | `qU5U.GeL4` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `qU5U.ERLv` | func | `(i32 i32) -> (i32)` |
| 31 | `qU5U.LAEu` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `qU5U.pWOD` | func | `(i32) -> (i32)` |
| 33 | `qU5U.iKnE` | func | `() -> (f64)` |
| 34 | `qU5U.FAiB` | func | `(i32 i32) -> ()` |
| 35 | `qU5U.eKek` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `qU5U.Us9T` | func | `(i32) -> (i32)` |
| 37 | `qU5U.ovl4` | func | `(i32) -> (i32)` |
| 38 | `qU5U.se68` | func | `(i32) -> (i32)` |
| 39 | `qU5U.REqJ` | func | `(i32 i32) -> (i32)` |
| 40 | `qU5U.navn` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `qU5U.spc0` | func | `(i32) -> (i32)` |
| 42 | `qU5U.vpEo` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `qU5U.Z8fJ` | func | `(i32) -> (i32)` |
| 44 | `qU5U.joPf` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `qU5U.x1r1` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `qU5U.ICdg` | func | `(i32 i32 i32) -> ()` |
| 47 | `qU5U.HlOv` | func | `(i32 i32 i32) -> ()` |
| 48 | `qU5U.KjPu` | func | `(i32 i32 i32) -> ()` |
| 49 | `qU5U.DpFI` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `qU5U.hTUZ` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `qU5U.lfiw` | func | `(i32 i32) -> ()` |
| 52 | `qU5U.Ut1r` | func | `(i32 i32) -> ()` |
| 53 | `qU5U.aFWl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `qU5U.eL27` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `qU5U.C2b3` | func | `(i32 f32 f32) -> ()` |
| 56 | `qU5U.Bw8Y` | func | `(i32 f32 f32) -> ()` |
| 57 | `qU5U.YEhF` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `qU5U.kvmy` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `qU5U.G2Tf` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `qU5U.mzGn` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `qU5U.ElPw` | func | `(i32 i32 i32) -> ()` |
| 62 | `qU5U.O62t` | func | `(i32 i32 i32) -> ()` |
| 63 | `qU5U.EVcn` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `qU5U.u6Xg` | func | `(i32 i32 i32) -> ()` |
| 65 | `qU5U.hi3I` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `qU5U.VRFH` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `qU5U.rzw6` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `qU5U.DhdU` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `qU5U.Z51A` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `qU5U.PCNm` | func | `(i32) -> (i32)` |
| 71 | `qU5U.nMdv` | func | `(i32) -> ()` |
| 72 | `qU5U.U8wi` | func | `(i32) -> (i32)` |
| 73 | `qU5U.LiLZ` | func | `(i32 i32) -> (i32)` |
| 74 | `qU5U.Z2uv` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `qU5U.D6CL` | func | `(i32 i32 i32) -> ()` |
| 76 | `qU5U.x1BC` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `qU5U.EbfA` | func | `() -> (f64)` |
| 78 | `qU5U.xUcA` | func | `() -> (f64)` |
| 79 | `qU5U.v62a` | func | `(i32 i32) -> ()` |
| 80 | `qU5U.ey3b` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `qU5U.izha` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `qU5U.kBeW` | func | `(i32 i32 i32) -> ()` |
| 83 | `qU5U.tT98` | func | `(i32 i32 i32) -> ()` |
| 84 | `qU5U.nZBl` | func | `(i32 i32) -> ()` |
| 85 | `qU5U.xYLU` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `qU5U.XTE6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `qU5U.HtBP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `qU5U.IyjQ` | func | `(i32 i32) -> ()` |
| 89 | `qU5U.WFBS` | func | `(i32 i32) -> ()` |
| 90 | `qU5U.GHow` | func | `(i32) -> (i32)` |
| 91 | `qU5U.w0ow` | func | `(i32 i32 i32) -> ()` |
| 92 | `qU5U.zSEt` | func | `(i32 i32 i32) -> ()` |
| 93 | `qU5U.eooA` | func | `(i32) -> (i32)` |
| 94 | `qU5U.gYl4` | func | `(i32) -> (i32)` |
| 95 | `qU5U.ZoMY` | func | `(i32 i32) -> ()` |
| 96 | `qU5U.puv0` | func | `(i32 i32) -> ()` |
| 97 | `qU5U.UKIp` | func | `(i32 i32) -> ()` |
| 98 | `qU5U.imBI` | func | `(i32 i32) -> ()` |
| 99 | `qU5U.n22N` | func | `(i32 i32 i32) -> ()` |
| 100 | `qU5U.wxfj` | func | `(i32 i32 i32) -> ()` |
| 101 | `qU5U.ERD9` | func | `(i32 i32 f32) -> ()` |
| 102 | `qU5U.VptP` | func | `(i32 i32 f32) -> ()` |
| 103 | `qU5U.Krac` | func | `(i32 i32 i32) -> ()` |
| 104 | `qU5U.ErJQ` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `qU5U.Q8cK` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `qU5U.CBjY` | func | `(i32 i32) -> ()` |
| 107 | `qU5U.xDq0` | func | `(i32 i32) -> ()` |
| 108 | `qU5U.x4xl` | func | `(i32 i32) -> ()` |
| 109 | `qU5U.OvcE` | func | `(i32 i32) -> ()` |
| 110 | `qU5U.Fp2F` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `qU5U.UyKm` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `qU5U.Eoyr` | func | `(i32 i32 i32) -> ()` |
| 113 | `qU5U.rxja` | func | `(i32 i32 i32) -> ()` |
| 114 | `qU5U.xpa3` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `qU5U.FhFh` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `qU5U.Xc4p` | func | `(i32 i32) -> ()` |
| 117 | `qU5U.v5k9` | func | `(i32 i32) -> ()` |
| 118 | `qU5U.cfLW` | func | `(i32 i32) -> (i32)` |
| 119 | `qU5U.XyVV` | func | `(i32 i32) -> (i32)` |
| 120 | `qU5U.Gvb9` | func | `(i32 i32) -> ()` |
| 121 | `qU5U.XTPL` | func | `(i32 i32) -> ()` |
| 122 | `qU5U.DFc0` | func | `(i32) -> (i32)` |
| 123 | `qU5U.Kyoc` | func | `(i32 i32) -> ()` |
| 124 | `qU5U.hr1g` | func | `(i32 i32) -> ()` |
| 125 | `qU5U.R6ES` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `qU5U.Ni2F` | func | `(i32 i32 i32) -> ()` |
| 127 | `qU5U.k5ym` | func | `(i32 i32 i32) -> ()` |
| 128 | `qU5U.xYGQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `qU5U.iHdf` | func | `(i32 i32) -> ()` |
| 130 | `qU5U.vb4q` | func | `(i32 i32 i32 i32) -> (i32)` |
| 131 | `qU5U.Pteh` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `qU5U.JBvh` | func | `(i32 i32 i32) -> ()` |
| 133 | `qU5U.QGcq` | func | `(i32 i32 i32) -> ()` |
| 134 | `qU5U.SOXN` | func | `(i32) -> ()` |
| 135 | `qU5U.kRpM` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `qU5U.HP0B` | func | `(i32 i32 i32) -> ()` |
| 137 | `qU5U.gAoQ` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `qU5U.nQWr` | func | `(i32 i32 i32) -> (i32)` |
| 139 | `qU5U.IPbZ` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `qU5U.i8Vh` | func | `(i32 i32) -> ()` |
| 141 | `qU5U.lcvZ` | func | `(i32) -> (i32)` |
| 142 | `qU5U.m4ag` | func | `(i32 i32) -> ()` |
| 143 | `qU5U.DxZ1` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `qU5U.YQtR` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `qU5U.ApGL` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `qU5U.Yv3b` | func | `(i32 i32) -> ()` |
| 147 | `qU5U.mPX1` | func | `(i32 i32) -> ()` |
| 148 | `qU5U.Einh` | func | `(i32 i32) -> ()` |
| 149 | `qU5U.tyVv` | func | `(i32 i32) -> ()` |
| 150 | `qU5U.wMuz` | func | `(i32) -> (i32)` |
| 151 | `qU5U.hisU` | func | `(i32) -> (i32)` |
| 152 | `qU5U.J8Wv` | func | `(i32) -> (i32)` |
| 153 | `qU5U.mK8F` | func | `(i32) -> (i32)` |
| 154 | `qU5U.EDqb` | func | `(i32) -> (i32)` |
| 155 | `qU5U.Ozw9` | func | `(i32) -> (i32)` |
| 156 | `qU5U.UFkc` | func | `() -> (i32)` |
| 157 | `qU5U.N5Sy` | func | `() -> (i32)` |
| 158 | `qU5U.LchM` | func | `() -> (i32)` |
| 159 | `qU5U.L7LZ` | func | `() -> (i32)` |
| 160 | `qU5U.Wl8R` | func | `(i32 i32) -> (i32)` |
| 161 | `qU5U.fwzZ` | func | `(i32) -> ()` |
| 162 | `qU5U.pjzl` | func | `(i32 i32) -> (i32)` |
| 163 | `qU5U.WsP7` | func | `(i32) -> (i32)` |
| 164 | `qU5U.VvaW` | func | `(i32) -> (i32)` |
| 165 | `qU5U.XwJI` | func | `(i32) -> (i32)` |
| 166 | `qU5U.u3I9` | func | `(i32) -> ()` |
| 167 | `qU5U.e4DZ` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `qU5U.ds1I` | func | `(i32) -> (i32)` |
| 169 | `qU5U.xhco` | func | `(i32) -> (i32)` |
| 170 | `qU5U.T78d` | func | `(i32 i32) -> (i32)` |
| 171 | `qU5U.tLpD` | func | `(i32) -> ()` |
| 172 | `qU5U.BGbt` | func | `() -> (i32)` |
| 173 | `qU5U.YQDJ` | func | `(i32 i32) -> (i32)` |
| 174 | `qU5U.oN8J` | func | `(i32 i32) -> ()` |
| 175 | `qU5U.JSxV` | func | `(i32 i32) -> ()` |
| 176 | `qU5U.R5SI` | func | `(i32) -> (i32)` |
| 177 | `qU5U.FsTW` | func | `(i32 i32) -> (i32)` |
| 178 | `qU5U.Un7d` | func | `(i32) -> ()` |
| 179 | `qU5U.k3sW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `qU5U.CTgj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `qU5U.Eng1` | func | `(i32 i32) -> ()` |
| 182 | `qU5U.AimQ` | func | `(i32 i32) -> ()` |
| 183 | `qU5U.hs7Q` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `qU5U.dTPt` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `qU5U.kHHv` | func | `(i32 f32) -> ()` |
| 186 | `qU5U.CZ2S` | func | `(i32 f32) -> ()` |
| 187 | `qU5U.sv18` | func | `(i32 i32) -> ()` |
| 188 | `qU5U.ttvn` | func | `(i32 i32) -> ()` |
| 189 | `qU5U.Dayf` | func | `(i32) -> (i32)` |
| 190 | `qU5U.SlK9` | func | `(i32) -> (i32)` |
| 191 | `qU5U.DW3r` | func | `(i32) -> (i32)` |
| 192 | `qU5U.PyxI` | func | `(i32) -> (i32)` |
| 193 | `qU5U.dvek` | func | `(i32 i32 i32) -> ()` |
| 194 | `qU5U.kCGc` | func | `(i32 i32 i32) -> ()` |
| 195 | `qU5U.MhJh` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `qU5U.nvec` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `qU5U.nn5u` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `qU5U.ECbJ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `qU5U.hyX2` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `qU5U.LHoY` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `qU5U.sNCP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `qU5U.HrD0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `qU5U.bS6X` | func | `(i32) -> (i32)` |
| 204 | `qU5U.rtmN` | func | `(i32) -> (i32)` |
| 205 | `qU5U.GUkI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `qU5U.qEZ8` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `qU5U.UZfP` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `qU5U.tUA7` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `qU5U.rAHc` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `qU5U.f2nf` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `qU5U.ZiaF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `qU5U.MCRM` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `qU5U.WBw6` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `qU5U.IohS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `qU5U.z7Er` | func | `(i32 i32 i32) -> ()` |
| 216 | `qU5U.JxOM` | func | `(i32 i32 i32) -> ()` |
| 217 | `qU5U.pE1B` | func | `(i32 i32) -> ()` |
| 218 | `qU5U.vdS6` | func | `(i32 i32) -> ()` |
| 219 | `qU5U.Uv5f` | func | `(i32 i32) -> ()` |
| 220 | `qU5U.Xe2K` | func | `(i32 i32) -> ()` |
| 221 | `qU5U.VTzj` | func | `(i32 i32) -> ()` |
| 222 | `qU5U.t5Xp` | func | `(i32 i32) -> ()` |
| 223 | `qU5U.yWy3` | func | `(i32 f32 f32) -> ()` |
| 224 | `qU5U.UxnJ` | func | `(i32 f32 f32) -> ()` |
| 225 | `qU5U.RFkl` | func | `(i32 i32) -> ()` |
| 226 | `qU5U.EHgn` | func | `(i32 i32) -> ()` |
| 227 | `qU5U.qG5v` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `qU5U.qlcI` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `qU5U.doBc` | func | `(i32 i32 i32) -> ()` |
| 230 | `qU5U.Um98` | func | `(i32) -> (i32)` |
| 231 | `qU5U.Ey8k` | func | `(i32) -> (i32)` |
| 232 | `qU5U.yK34` | func | `(i32 i32) -> ()` |
| 233 | `qU5U.J72e` | func | `(i32 i32) -> ()` |
| 234 | `qU5U.KaTv` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `qU5U.sCvc` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `qU5U.CynQ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `qU5U.gmt9` | func | `(i32 i32 i32) -> ()` |
| 238 | `qU5U.mcT8` | func | `(i32 i32 i32) -> ()` |
| 239 | `qU5U.WvAL` | func | `(i32 i32 i32) -> ()` |
| 240 | `qU5U.tEPn` | func | `(i32 i32 i32) -> ()` |
| 241 | `qU5U.Kuyx` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `qU5U.mZkI` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `qU5U.sDZB` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `qU5U.NYes` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `qU5U.zFKM` | func | `(i32) -> (i32)` |
| 246 | `qU5U.XBJC` | func | `(i32) -> (i32)` |
| 247 | `qU5U.DS88` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `qU5U.sHx8` | func | `(i32 i32) -> ()` |
| 249 | `qU5U.uNdv` | func | `(i32 i32) -> ()` |
| 250 | `qU5U.Kiuw` | func | `(i32 i32) -> (i32)` |
| 251 | `qU5U.vkN4` | func | `(i32 i32) -> (i32)` |
| 252 | `qU5U.MSae` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `qU5U.hHyi` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `qU5U.T1Xs` | func | `(i32 i32) -> ()` |
| 255 | `qU5U.Cnek` | func | `(i32 i32) -> ()` |
| 256 | `qU5U.Mupe` | func | `(i32) -> (i32)` |
| 257 | `qU5U.JpBo` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `qU5U.Ihol` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `qU5U.x6CL` | func | `(i32) -> ()` |
| 260 | `qU5U.efNY` | func | `(i32 i32) -> ()` |
| 261 | `qU5U.DLUT` | func | `(i32 i32) -> ()` |
| 262 | `qU5U.Ra9x` | func | `(i32 i32) -> ()` |
| 263 | `qU5U.lAkc` | func | `(i32 i32) -> ()` |
| 264 | `qU5U.PPdp` | func | `(i32 i32) -> ()` |
| 265 | `qU5U.L8M3` | func | `(i32 i32) -> ()` |
| 266 | `qU5U.hHYt` | func | `(i32 i32) -> ()` |
| 267 | `qU5U.ME8F` | func | `(i32 i32) -> ()` |
| 268 | `qU5U.QDUC` | func | `(i32) -> (i32)` |
| 269 | `qU5U.haYk` | func | `(i32) -> (i32)` |
| 270 | `qU5U.SAs9` | func | `(i32) -> (i32)` |
| 271 | `qU5U.qRSg` | func | `(i32) -> (i32)` |
| 272 | `qU5U.fwnl` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `qU5U.t2cX` | func | `(i32) -> ()` |
| 274 | `qU5U.uki9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `qU5U.wQ1h` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `qU5U.YFFP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `qU5U.geWb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `qU5U.Lfub` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `qU5U.GE1z` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `qU5U.NmNZ` | func | `(i32) -> (i32)` |
| 281 | `qU5U.dHZ0` | func | `(i32) -> (i32)` |
| 282 | `qU5U.s110` | func | `(i32) -> (i32)` |
| 283 | `qU5U.TCu3` | func | `(i32) -> (i32)` |
| 284 | `qU5U.iRcB` | func | `(i32 i32) -> ()` |
| 285 | `qU5U.pEby` | func | `(i32) -> ()` |
| 286 | `qU5U.b28Q` | func | `(i32 i32) -> ()` |
| 287 | `qU5U.rWjR` | func | `(i32) -> (i32)` |
| 288 | `qU5U.SDaE` | func | `(i32 i32) -> (i32)` |
| 289 | `qU5U.N1Eu` | func | `(i32 i32) -> (i32)` |
| 290 | `qU5U.fc1o` | func | `(i32 i32) -> (i32)` |
| 291 | `qU5U.bs1N` | func | `(f64) -> (i32)` |
| 292 | `qU5U.dyc4` | func | `(i32 i32) -> (i32)` |
| 293 | `qU5U.GkxR` | func | `(i32 i32) -> (i32)` |
| 294 | `qU5U.ucDx` | func | `(i32 i32) -> (i32)` |
| 295 | `qU5U.ijTe` | func | `(i32 i32) -> (i32)` |
| 296 | `qU5U.n7A2` | func | `(i32 i32) -> (i32)` |
| 297 | `qU5U.f2QT` | func | `(i32 i32) -> (i32)` |
| 298 | `qU5U.jGQJ` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `XLRw` | func | 1220 | `(i32 i32 i32 i32) -> (i32)` |
| `Qo6d` | func | 2506 | `(i32) -> (i32)` |
| `ZWf3` | func | 2398 | `(i32 i32 i32 i32) -> (i32)` |
| `W1Uc` | func | 3082 | `(i32 i32 i32 i32) -> ()` |
| `OdwT` | func | 3194 | `() -> (f64)` |
| `OD3a` | func | 1470 | `(i32 i32 i32 i32) -> ()` |
| `qAjn` | func | 1493 | `(i32) -> (i32)` |
| `MxcZ` | func | 3199 | `(i32) -> ()` |
| `tChJ` | func | 1946 | `(i32) -> (i32)` |
| `VuR1` | func | 1488 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `FzwU` | func | 1276 | `(i32 i32 i32) -> ()` |
| `vDju` | func | 1598 | `(i32 i32) -> ()` |
| `mwjd` | func | 2516 | `(i32) -> (i32)` |
| `TI6q` | func | 742 | `(i32 i32 i32 i32) -> (i32)` |
| `Y4Bk` | func | 2504 | `(i32 i32) -> ()` |
| `AHnX` | func | 2489 | `(i32) -> (i32)` |
| `ph2n` | func | 1965 | `(i32 i32 i32 i32) -> ()` |
| `uk7X` | func | 2302 | `(i32 i32) -> ()` |
| `fPcv` | func | 1963 | `(i32) -> (i32)` |
| `VxYl` | func | 930 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `F2nX` | func | 2043 | `(i32 f64 f64 f64) -> (i32)` |
| `uA4c` | func | 1121 | `(i32 i32) -> ()` |
| `APN0` | func | 1887 | `(i32 i32) -> (i32)` |
| `N0i3` | func | 1399 | `(i32 f64 f64) -> (i32)` |
| `Cab1` | func | 3003 | `(i32 i32) -> ()` |
| `wdTY` | func | 2486 | `(i32) -> (f64)` |
| `FTXa` | func | 2354 | `(i32 i32) -> (i32)` |
| `lUqK` | func | 1710 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `osb4` | func | 747 | `(i32) -> (i32)` |
| `ehSb` | func | 1419 | `(i32 i32) -> (i32)` |
| `OaiT` | func | 2442 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `CxNb` | func | 2526 | `(i32) -> (i32)` |
| `O8VJ` | func | 3091 | `(i32 i32 i32) -> ()` |
| `lsyy` | func | 2525 | `(i32) -> (i32)` |
| `Lti0` | func | 1603 | `(i32 f64 f64 f64) -> (i32)` |
| `gEQV` | func | 2609 | `() -> (i32)` |
| `NRV6` | func | 2608 | `(i32 i32) -> ()` |
| `sSEF` | func | 3058 | `() -> (i32 i32)` |
| `A1ZP` | func | 3030 | `(i32 i32) -> (i32 i32)` |
| `dhqZ` | func | 703 | `(f64) -> (f64)` |
| `sWZZ` | func | 1834 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `nuPp` | func | 2272 | `(i32 f64) -> (i32)` |
| `oGN4` | func | 3147 | `(i32 i32 i32) -> ()` |
| `bdbE` | func | 2490 | `(i32) -> (i32)` |
| `xlf0` | func | 1345 | `(i32 i32 i32) -> (i32)` |
| `W0ky` | func | 1120 | `(i32 i32) -> (i32)` |
| `brCH` | func | 711 | `(i32 i32) -> (i32)` |
| `C4lQ` | func | 2562 | `(i32 i32) -> ()` |
| `jnbG` | func | 1523 | `(i32 i32) -> (i32)` |
| `qHGD` | func | 1512 | `(i32 i32) -> (i32)` |
| `EU4F` | func | 1641 | `(i32 i32 i32 i32) -> (i32)` |
| `fgju` | func | 2386 | `(i32 i32) -> (i32)` |
| `UHnA` | func | 3021 | `(i32 i32 i32) -> (i32 i32)` |
| `JFfh` | func | 1294 | `(i32) -> (i32)` |
| `NAEf` | func | 3042 | `(i32) -> (i32 i32)` |
| `L8ii` | func | 2487 | `(i32) -> (i32)` |
| `oXwb` | func | 3022 | `(i32 i32 i32) -> (i32 i32)` |
| `wSJ6` | func | 2517 | `(i32 i32) -> (i32)` |
| `CKfL` | func | 2491 | `(i32) -> (i32)` |
| `vGVU` | func | 2785 | `(i32) -> (i32)` |
| `ONrd` | func | 680 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `z2Or` | func | 1755 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `qiMC` | func | 3031 | `(i32 i32) -> (i32 i32)` |
| `k6QI` | func | 2473 | `(i32) -> (i32)` |
| `ZOzK` | func | 3154 | `() -> ()` |
| `rnpb` | func | 1492 | `(i32 i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `xvuw` | func | 1398 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `LxmC` | func | 1248 | `(i32 i32) -> (i32)` |
| `eO60` | func | 3028 | `(i32 i32) -> (i32 i32)` |
| `tPRL` | func | 1524 | `(i32 i32) -> (i32)` |
| `ewpI` | func | 2443 | `(i32) -> (i32)` |
| `eMJl` | func | 2990 | `(i32 i32) -> (i32)` |
| `Ls8k` | global | 1 | `` |
| `fmaw` | func | 1526 | `(i32 f64) -> (f64)` |
| `bnAZ` | func | 1903 | `(i32) -> ()` |
| `Fq34` | func | 2488 | `(i32) -> (i32)` |
| `kIeX` | func | 3056 | `() -> (i32 i32)` |
| `dp64` | func | 3043 | `(i32) -> (i32 i32)` |
| `hmsr` | func | 1499 | `(i32 i32) -> (i32)` |
| `lVTv` | func | 2509 | `(i32) -> (i32)` |
| `ZyLd` | func | 3033 | `(i32 i32) -> (i32 i32)` |
| `fXuv` | func | 2083 | `(i32 i32) -> (i32)` |
| `so5R` | func | 3032 | `(i32 i32) -> (i32 i32)` |
| `FTa4` | func | 2492 | `(i32) -> (i32)` |
| `SWtE` | func | 1451 | `(i32) -> (i32)` |
| `VEI2` | func | 2996 | `(i32 i32 i32 i32) -> (i32)` |
| `R2P0` | func | 570 | `(i32 i32 i32) -> (i32)` |
| `InrF` | func | 1869 | `(i32 i32 f64 f64 f64) -> ()` |
| `LQAU` | func | 619 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `lSU3` | func | 1483 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `cDh0` | func | 1902 | `(i32) -> ()` |
| `GiWm` | global | 2 | `` |
| `cjLd` | func | 1587 | `(i32 i32) -> (i32)` |
| `ghby` | func | 750 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `qQpk` | func | 2507 | `(i32) -> (i32)` |
| `QTqG` | func | 1219 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `JApt` | func | 2527 | `(i32) -> (i32)` |
| `cBhX` | func | 3153 | `(i32) -> ()` |
| `JFVh` | func | 2195 | `(i32 i32) -> (i32)` |
| `hW5o` | func | 2493 | `(i32) -> ()` |
| `Nco2` | func | 1849 | `(i32 i32 i32 i32) -> (i32)` |
| `UT2y` | func | 2574 | `() -> (i32)` |
| `Z9X5` | func | 2508 | `(i32 i32) -> ()` |
| `XJFI` | func | 1539 | `(i32 i32 i32) -> (i32)` |
| `Zbl0` | func | 2817 | `(i32) -> (i32)` |
| `VE1e` | func | 2971 | `() -> ()` |
| `N2uX` | func | 3092 | `(i32 i32) -> ()` |
| `iugA` | func | 1302 | `(i32 i32) -> (i32)` |
| `qiqP` | func | 1448 | `() -> (i32)` |
| `yxZZ` | func | 1877 | `(i32 i32) -> ()` |
| `JIWW` | func | 2494 | `(i32) -> (i32)` |
| `PRga` | func | 1226 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `W9sy` | func | 917 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `XglE` | func | 1749 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `YcWY` | func | 2849 | `(i32) -> (i32)` |
| `yoUl` | func | 2163 | `(i32 i32) -> (i32)` |
| `Ewk7` | func | 3223 | `() -> (i32)` |
| `VKeo` | func | 1560 | `(i32 i32 i32 i32) -> (i32)` |
| `NJpS` | func | 767 | `(i32 i32 i32) -> (i32)` |
| `eQxD` | func | 2827 | `(i32) -> ()` |
| `Vv4k` | func | 897 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `uNbd` | func | 2216 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HVZV` | func | 3029 | `(i32 i32) -> (i32 i32)` |
| `MVQj` | func | 1270 | `(i32 i32 i32) -> (i32)` |
| `NsQm` | func | 685 | `(i32 i32) -> (i32)` |
| `Vf1k` | func | 2352 | `(i32 i32) -> (i32)` |
| `OL21` | func | 2806 | `(i32) -> (i32)` |
| `REgZ` | func | 3044 | `(i32) -> (i32 i32)` |
| `ZHnv` | func | 671 | `(i32 i32) -> (i32)` |
| `nGIp` | func | 2059 | `(i32 i32) -> ()` |
| `zmCP` | func | 1894 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `jfN1` | func | 1767 | `(i32 i32) -> (i32)` |
| `znGm` | func | 2495 | `(i32) -> (i32)` |
| `R3Sg` | func | 2426 | `(i32) -> (i32)` |
| `XATZ` | func | 3041 | `(i32) -> (i32 i32)` |
| `lh3t` | func | 3045 | `(i32) -> (i32 i32)` |
| `tXTT` | func | 3120 | `() -> (i32)` |
| `QuPR` | func | 898 | `(i32 i32) -> (i32)` |
| `XOzZ` | func | 1733 | `(i32) -> (i32)` |
| `Uc46` | func | 1599 | `(i32 i32) -> ()` |
| `vAlg` | func | 1444 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `UtIr` | func | 2355 | `(i32 i32) -> (i32)` |
| `vOvy` | func | 1998 | `(i32 i32) -> ()` |
| `X6Mq` | func | 860 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Lukg` | func | 2353 | `(i32 i32) -> (i32)` |
| `kEsi` | func | 2496 | `(i32) -> (i32)` |
| `bCHJ` | func | 1180 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Purj` | func | 2472 | `(i32 i32) -> ()` |
| `glZn` | func | 3224 | `() -> (i32)` |
| `kTki` | func | 1828 | `() -> (i32)` |
| `JVZO` | func | 2518 | `(i32 i32) -> (i32)` |
| `YfhA` | func | 2271 | `(i32 i32) -> ()` |
| `kIVH` | func | 3027 | `(i32 i32) -> (i32 i32)` |
| `u63v` | func | 2025 | `(i32 f64) -> (i32)` |
| `GKTC` | func | 1327 | `(i32) -> ()` |
| `lQKg` | func | 3057 | `() -> (i32 i32)` |
| `PfQT` | func | 3198 | `(i32) -> (i32)` |
| `Z0Ib` | func | 2792 | `(i32) -> (i32)` |
| `ETiC` | func | 1330 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 755 · max 755
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2643384, `i32` = i32.const 2643964

## Functions

- 2,936 bodies · 4,067,931 code bytes · avg 1.4 KB
- instruction scan: 2,936 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 115 |
| <= 128 bytes | 257 |
| <= 256 bytes | 381 |
| <= 512 bytes | 679 |
| <= 1024 bytes | 580 |
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
| 198 | `(i32 i32) -> ()` | 10 | 26,901 | 12,955 | local.get×4560, i32.load×1227, i32.const×1030, end×807, i32.add×742 |
| 220 | `(i32) -> ()` | 19 | 23,258 | 10,909 | local.get×2733, i32.load×1495, i32.const×1187, local.tee×1011, end×855 |
| 728 | `(i32 i32) -> ()` | 139 | 42,973 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 729 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1588 | `(i32 i32) -> (i32)` | 182 | 55,022 | 19,876 | local.get×6611, i32.const×2601, i64.store×1935, i64.const×1087, i64.load×1068 |
| 1992 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2607 | `(i32 i32) -> ()` | 398 | 142,175 | 64,156 | local.get×18412, i32.const×8003, local.set×3828, i32.load×3150, end×2805 |
| 2886 | `(i32 i32 i32 i32) -> ()` | 137 | 31,379 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2904 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
| `local.get` | 543,747 |
| `i32.const` | 227,251 |
| `local.tee` | 101,002 |
| `i32.load` | 95,239 |
| `local.set` | 94,569 |
| `i32.add` | 87,679 |
| `end` | 79,728 |
| `br_if` | 64,919 |
| `i32.store` | 47,076 |
| `block` | 37,493 |
| `i64.const` | 32,888 |
| `i64.store` | 32,141 |
| `if` | 30,477 |
| `call` | 29,696 |
| `i32.sub` | 24,813 |
| `i64.load` | 23,896 |
| `br` | 23,259 |
| `i32.eqz` | 19,724 |
| `select` | 17,143 |
| `i32.shl` | 16,494 |
| `i32.and` | 16,406 |
| `i32.ne` | 15,961 |
| `i32.load8_u` | 15,110 |
| `i32.eq` | 14,002 |
| `i32.store8` | 12,695 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,936/2,936 (degraded: 0)
