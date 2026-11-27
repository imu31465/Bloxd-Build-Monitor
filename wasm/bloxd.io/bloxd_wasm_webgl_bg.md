# WASM module: `bloxd_wasm_webgl_bg`

> environment **bloxd.io** · build `u88b9b.1969c480` · analyzed 2026-11-27T18:53:23+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl_bg.33eaf111a43ba6062fe4.wasm
> 5,545,853 bytes (5.3 MB) · sha256 `8ae617ef40b6df6e…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `6481e5400b592186.10998` → `9ea359866192d24e.10998` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,937 / 299 |
| Exports / imports | 160 / 300 |
| Code bytes (function bodies) | 4,069,193 (3.9 MB) |
| Total local variables | 31,211 |
| Instructions (scanable bodies) | 1,907,277 |
| Data segments / bytes | 4,034 / 1,427,659 |
| Element segments / entries | 1 / 754 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `9ea359866192d24e.10998` |
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
| 10 | code | 4,074,579 | 2937 |
| 11 | data | 1,460,240 | 4034 |
| 0 | custom:name | 30 | — |

## Types

181 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `y4zP.QNab` | memory | `[128..14648]` |
| 0 | `y4zP.IW9K` | func | `(i32) -> (f64)` |
| 1 | `y4zP.xl3Q` | func | `() -> (i32)` |
| 2 | `y4zP.H3Tu` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `y4zP.j2ck` | func | `(i32) -> ()` |
| 4 | `y4zP.rFMi` | func | `(i32 i32) -> (i32)` |
| 5 | `y4zP.pKQb` | func | `(i32) -> (i32)` |
| 6 | `y4zP.HPlR` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `y4zP.F6qK` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `y4zP.fYIw` | func | `(i32) -> (i32)` |
| 9 | `y4zP.nMin` | func | `(i32 i32) -> ()` |
| 10 | `y4zP.eBwv` | func | `(i32 i32) -> ()` |
| 11 | `y4zP.TZYg` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `y4zP.zfmk` | func | `(i32 i32) -> (i32)` |
| 13 | `y4zP.RLk1` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `y4zP.g60u` | func | `(i32) -> (i32)` |
| 15 | `y4zP.fmV3` | func | `(i32 i32) -> (i32)` |
| 16 | `y4zP.qM1i` | func | `(i32 i32) -> (i32)` |
| 17 | `y4zP.UHEY` | func | `(i32 i32) -> ()` |
| 18 | `y4zP.aYhC` | func | `(i32) -> (i32)` |
| 19 | `y4zP.lJXT` | func | `(i32) -> (i32)` |
| 20 | `y4zP.pQop` | func | `(i32) -> (i32)` |
| 21 | `y4zP.hIDc` | func | `(i32) -> ()` |
| 22 | `y4zP.ksDe` | func | `(i32 i32) -> ()` |
| 23 | `y4zP.vdiY` | func | `(i32 i32) -> ()` |
| 24 | `y4zP.NhkV` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `y4zP.MELq` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `y4zP.lG0E` | func | `(i32) -> (i32)` |
| 27 | `y4zP.LgTT` | func | `(i32 i32) -> ()` |
| 28 | `y4zP.oh7i` | func | `(i32 i32) -> (i32)` |
| 29 | `y4zP.hOXs` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `y4zP.KA60` | func | `(i32 i32) -> (i32)` |
| 31 | `y4zP.Thgb` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `y4zP.S3eX` | func | `(i32) -> (i32)` |
| 33 | `y4zP.UX42` | func | `() -> (f64)` |
| 34 | `y4zP.u3xb` | func | `(i32 i32) -> ()` |
| 35 | `y4zP.GAUo` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `y4zP.EdNP` | func | `(i32) -> (i32)` |
| 37 | `y4zP.IZts` | func | `(i32) -> (i32)` |
| 38 | `y4zP.xj0f` | func | `(i32) -> (i32)` |
| 39 | `y4zP.otFy` | func | `(i32 i32) -> (i32)` |
| 40 | `y4zP.SlH6` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `y4zP.scpl` | func | `(i32) -> (i32)` |
| 42 | `y4zP.I1j0` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `y4zP.qxFo` | func | `(i32) -> (i32)` |
| 44 | `y4zP.RZEg` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `y4zP.GDsI` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `y4zP.HJN2` | func | `(i32 i32 i32) -> ()` |
| 47 | `y4zP.c5ep` | func | `(i32 i32 i32) -> ()` |
| 48 | `y4zP.KPaO` | func | `(i32 i32 i32) -> ()` |
| 49 | `y4zP.RbCA` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `y4zP.DKdZ` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `y4zP.K0Xb` | func | `(i32 i32) -> ()` |
| 52 | `y4zP.rtiq` | func | `(i32 i32) -> ()` |
| 53 | `y4zP.WuRI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `y4zP.m6dc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `y4zP.m8qx` | func | `(i32 f32 f32) -> ()` |
| 56 | `y4zP.kOKn` | func | `(i32 f32 f32) -> ()` |
| 57 | `y4zP.WiZ2` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `y4zP.ahLS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `y4zP.C9gU` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `y4zP.ybjc` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `y4zP.nj6n` | func | `(i32 i32 i32) -> ()` |
| 62 | `y4zP.fpZP` | func | `(i32 i32 i32) -> ()` |
| 63 | `y4zP.Vng9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `y4zP.E702` | func | `(i32 i32 i32) -> ()` |
| 65 | `y4zP.sZtg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `y4zP.BYOP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `y4zP.cF4p` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `y4zP.pouB` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `y4zP.BSeH` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `y4zP.VS3Q` | func | `(i32) -> (i32)` |
| 71 | `y4zP.HpL0` | func | `(i32) -> ()` |
| 72 | `y4zP.GyFy` | func | `(i32) -> (i32)` |
| 73 | `y4zP.py4X` | func | `(i32 i32) -> (i32)` |
| 74 | `y4zP.uH6Z` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `y4zP.LwA2` | func | `(i32 i32 i32) -> ()` |
| 76 | `y4zP.GCkc` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `y4zP.tV3R` | func | `() -> (f64)` |
| 78 | `y4zP.xgAj` | func | `() -> (f64)` |
| 79 | `y4zP.FEGl` | func | `(i32 i32) -> ()` |
| 80 | `y4zP.jDFe` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `y4zP.KjwA` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `y4zP.OVcE` | func | `(i32 i32 i32) -> ()` |
| 83 | `y4zP.rRBy` | func | `(i32 i32 i32) -> ()` |
| 84 | `y4zP.iYtk` | func | `(i32 i32) -> ()` |
| 85 | `y4zP.lKKY` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `y4zP.QtYd` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `y4zP.ZSUl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `y4zP.Aa2n` | func | `(i32 i32) -> ()` |
| 89 | `y4zP.DxFK` | func | `(i32 i32) -> ()` |
| 90 | `y4zP.N4uB` | func | `(i32) -> (i32)` |
| 91 | `y4zP.i0Ls` | func | `(i32 i32 i32) -> ()` |
| 92 | `y4zP.ILB4` | func | `(i32 i32 i32) -> ()` |
| 93 | `y4zP.J8uc` | func | `(i32) -> (i32)` |
| 94 | `y4zP.J3Gv` | func | `(i32) -> (i32)` |
| 95 | `y4zP.q53T` | func | `(i32 i32) -> ()` |
| 96 | `y4zP.L0n5` | func | `(i32 i32) -> ()` |
| 97 | `y4zP.iEYc` | func | `(i32 i32) -> ()` |
| 98 | `y4zP.VNqR` | func | `(i32 i32) -> ()` |
| 99 | `y4zP.XaHJ` | func | `(i32 i32 i32) -> ()` |
| 100 | `y4zP.UxtI` | func | `(i32 i32 i32) -> ()` |
| 101 | `y4zP.cByI` | func | `(i32 i32 f32) -> ()` |
| 102 | `y4zP.d23J` | func | `(i32 i32 f32) -> ()` |
| 103 | `y4zP.pSIn` | func | `(i32 i32 i32) -> ()` |
| 104 | `y4zP.RzET` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `y4zP.gLYI` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `y4zP.WbQg` | func | `(i32 i32) -> ()` |
| 107 | `y4zP.e6rW` | func | `(i32 i32) -> ()` |
| 108 | `y4zP.OjH3` | func | `(i32 i32) -> ()` |
| 109 | `y4zP.GUKx` | func | `(i32 i32) -> ()` |
| 110 | `y4zP.XFyz` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `y4zP.gI8m` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `y4zP.Y6rK` | func | `(i32 i32 i32) -> ()` |
| 113 | `y4zP.D0tN` | func | `(i32 i32 i32) -> ()` |
| 114 | `y4zP.QEhu` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `y4zP.Vi08` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `y4zP.qDsM` | func | `(i32 i32) -> ()` |
| 117 | `y4zP.hbUw` | func | `(i32 i32) -> ()` |
| 118 | `y4zP.IqsX` | func | `(i32 i32) -> (i32)` |
| 119 | `y4zP.OocH` | func | `(i32 i32) -> (i32)` |
| 120 | `y4zP.fadb` | func | `(i32 i32) -> ()` |
| 121 | `y4zP.YMjK` | func | `(i32 i32) -> ()` |
| 122 | `y4zP.sBDe` | func | `(i32) -> (i32)` |
| 123 | `y4zP.gxw5` | func | `(i32 i32) -> ()` |
| 124 | `y4zP.bNrw` | func | `(i32 i32) -> ()` |
| 125 | `y4zP.Dayw` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `y4zP.osxY` | func | `(i32 i32 i32) -> ()` |
| 127 | `y4zP.iSFI` | func | `(i32 i32 i32) -> ()` |
| 128 | `y4zP.ypMm` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `y4zP.ZgIv` | func | `(i32 i32) -> ()` |
| 130 | `y4zP.smlL` | func | `(i32 i32 i32 i32) -> (i32)` |
| 131 | `y4zP.T7DR` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `y4zP.h6Bk` | func | `(i32 i32 i32) -> ()` |
| 133 | `y4zP.bmQQ` | func | `(i32 i32 i32) -> ()` |
| 134 | `y4zP.yBmY` | func | `(i32) -> ()` |
| 135 | `y4zP.IOs5` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `y4zP.tdHr` | func | `(i32 i32 i32) -> ()` |
| 137 | `y4zP.DrOc` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `y4zP.DcEr` | func | `(i32 i32 i32) -> (i32)` |
| 139 | `y4zP.Sscm` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `y4zP.Wou4` | func | `(i32 i32) -> ()` |
| 141 | `y4zP.aOZq` | func | `(i32) -> (i32)` |
| 142 | `y4zP.UNf8` | func | `(i32 i32) -> ()` |
| 143 | `y4zP.LjV6` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `y4zP.uqhu` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `y4zP.T0Eg` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `y4zP.kTIt` | func | `(i32 i32) -> ()` |
| 147 | `y4zP.Q9tM` | func | `(i32 i32) -> ()` |
| 148 | `y4zP.nvS3` | func | `(i32 i32) -> ()` |
| 149 | `y4zP.N3wA` | func | `(i32 i32) -> ()` |
| 150 | `y4zP.cqsV` | func | `(i32) -> (i32)` |
| 151 | `y4zP.Q0zb` | func | `(i32) -> (i32)` |
| 152 | `y4zP.cWbN` | func | `(i32) -> (i32)` |
| 153 | `y4zP.mXL1` | func | `(i32) -> (i32)` |
| 154 | `y4zP.RaaF` | func | `(i32) -> (i32)` |
| 155 | `y4zP.GrGa` | func | `(i32) -> (i32)` |
| 156 | `y4zP.GvCD` | func | `() -> (i32)` |
| 157 | `y4zP.TUlW` | func | `() -> (i32)` |
| 158 | `y4zP.mHBV` | func | `() -> (i32)` |
| 159 | `y4zP.UzQ0` | func | `() -> (i32)` |
| 160 | `y4zP.f0MC` | func | `(i32 i32) -> (i32)` |
| 161 | `y4zP.MIHg` | func | `(i32) -> ()` |
| 162 | `y4zP.IH0b` | func | `(i32 i32) -> (i32)` |
| 163 | `y4zP.rJJc` | func | `(i32) -> (i32)` |
| 164 | `y4zP.sKG0` | func | `(i32) -> (i32)` |
| 165 | `y4zP.rdp7` | func | `(i32) -> (i32)` |
| 166 | `y4zP.YwyF` | func | `(i32) -> ()` |
| 167 | `y4zP.AjYO` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `y4zP.FH47` | func | `(i32) -> (i32)` |
| 169 | `y4zP.Lcvr` | func | `(i32) -> (i32)` |
| 170 | `y4zP.i6hE` | func | `(i32 i32) -> (i32)` |
| 171 | `y4zP.UOzv` | func | `(i32) -> ()` |
| 172 | `y4zP.kUke` | func | `() -> (i32)` |
| 173 | `y4zP.pIUQ` | func | `(i32 i32) -> (i32)` |
| 174 | `y4zP.UnX7` | func | `(i32 i32) -> ()` |
| 175 | `y4zP.JriC` | func | `(i32 i32) -> ()` |
| 176 | `y4zP.kS4k` | func | `(i32) -> (i32)` |
| 177 | `y4zP.drIb` | func | `(i32 i32) -> (i32)` |
| 178 | `y4zP.xh5S` | func | `(i32) -> ()` |
| 179 | `y4zP.byLt` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `y4zP.dS3G` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `y4zP.vdAf` | func | `(i32 i32) -> ()` |
| 182 | `y4zP.pffQ` | func | `(i32 i32) -> ()` |
| 183 | `y4zP.B5Hk` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `y4zP.dYkh` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `y4zP.CCZW` | func | `(i32 f32) -> ()` |
| 186 | `y4zP.WHAG` | func | `(i32 f32) -> ()` |
| 187 | `y4zP.KsZx` | func | `(i32 i32) -> ()` |
| 188 | `y4zP.QWjs` | func | `(i32 i32) -> ()` |
| 189 | `y4zP.sCMi` | func | `(i32) -> (i32)` |
| 190 | `y4zP.a073` | func | `(i32) -> (i32)` |
| 191 | `y4zP.AOum` | func | `(i32) -> (i32)` |
| 192 | `y4zP.u8rN` | func | `(i32) -> (i32)` |
| 193 | `y4zP.eM1p` | func | `(i32 i32 i32) -> ()` |
| 194 | `y4zP.MvG1` | func | `(i32 i32 i32) -> ()` |
| 195 | `y4zP.lqdA` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `y4zP.cdGI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `y4zP.vAY0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `y4zP.klNX` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `y4zP.Hby8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `y4zP.rGDK` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `y4zP.i8zJ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `y4zP.gce4` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `y4zP.ZH20` | func | `(i32) -> (i32)` |
| 204 | `y4zP.X4lV` | func | `(i32) -> (i32)` |
| 205 | `y4zP.t4u8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `y4zP.Tgp0` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `y4zP.DcvX` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `y4zP.gag6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `y4zP.a3vG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `y4zP.hsDR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `y4zP.tFAq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `y4zP.LIff` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `y4zP.x7o7` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `y4zP.cTE1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `y4zP.grd6` | func | `(i32 i32 i32) -> ()` |
| 216 | `y4zP.TXhL` | func | `(i32 i32 i32) -> ()` |
| 217 | `y4zP.U9Rz` | func | `(i32 i32) -> ()` |
| 218 | `y4zP.GVgn` | func | `(i32 i32) -> ()` |
| 219 | `y4zP.yPFF` | func | `(i32 i32) -> ()` |
| 220 | `y4zP.WxDe` | func | `(i32 i32) -> ()` |
| 221 | `y4zP.UdPL` | func | `(i32 i32) -> ()` |
| 222 | `y4zP.nCIu` | func | `(i32 i32) -> ()` |
| 223 | `y4zP.wIjG` | func | `(i32 f32 f32) -> ()` |
| 224 | `y4zP.wcOr` | func | `(i32 f32 f32) -> ()` |
| 225 | `y4zP.uqNb` | func | `(i32 i32) -> ()` |
| 226 | `y4zP.VaqE` | func | `(i32 i32) -> ()` |
| 227 | `y4zP.aIud` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `y4zP.cnSj` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `y4zP.Nelj` | func | `(i32 i32 i32) -> ()` |
| 230 | `y4zP.Vw1w` | func | `(i32) -> (i32)` |
| 231 | `y4zP.fnoq` | func | `(i32) -> (i32)` |
| 232 | `y4zP.gbgW` | func | `(i32 i32) -> ()` |
| 233 | `y4zP.o5H5` | func | `(i32 i32) -> ()` |
| 234 | `y4zP.dNBn` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `y4zP.xvF5` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `y4zP.aK96` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `y4zP.lzvp` | func | `(i32 i32 i32) -> ()` |
| 238 | `y4zP.xCZW` | func | `(i32 i32 i32) -> ()` |
| 239 | `y4zP.DLNF` | func | `(i32 i32 i32) -> ()` |
| 240 | `y4zP.g6Cc` | func | `(i32 i32 i32) -> ()` |
| 241 | `y4zP.vWVx` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `y4zP.yuty` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `y4zP.E2Le` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `y4zP.QITo` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `y4zP.UIFw` | func | `(i32) -> (i32)` |
| 246 | `y4zP.DtwE` | func | `(i32) -> (i32)` |
| 247 | `y4zP.cPFA` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `y4zP.v2s7` | func | `(i32 i32) -> ()` |
| 249 | `y4zP.Qcp7` | func | `(i32 i32) -> ()` |
| 250 | `y4zP.o86f` | func | `(i32 i32) -> (i32)` |
| 251 | `y4zP.Nml8` | func | `(i32 i32) -> (i32)` |
| 252 | `y4zP.q3lC` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `y4zP.g4P8` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `y4zP.sGZK` | func | `(i32 i32) -> ()` |
| 255 | `y4zP.O3cr` | func | `(i32 i32) -> ()` |
| 256 | `y4zP.dpKw` | func | `(i32) -> (i32)` |
| 257 | `y4zP.XwbY` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `y4zP.WtWY` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `y4zP.GOpN` | func | `(i32) -> ()` |
| 260 | `y4zP.ReQs` | func | `(i32 i32) -> ()` |
| 261 | `y4zP.mP0a` | func | `(i32 i32) -> ()` |
| 262 | `y4zP.Whwa` | func | `(i32 i32) -> ()` |
| 263 | `y4zP.qnLt` | func | `(i32 i32) -> ()` |
| 264 | `y4zP.DK8C` | func | `(i32 i32) -> ()` |
| 265 | `y4zP.k0tg` | func | `(i32 i32) -> ()` |
| 266 | `y4zP.HobB` | func | `(i32 i32) -> ()` |
| 267 | `y4zP.wGY0` | func | `(i32 i32) -> ()` |
| 268 | `y4zP.WSZD` | func | `(i32) -> (i32)` |
| 269 | `y4zP.ZGK6` | func | `(i32) -> (i32)` |
| 270 | `y4zP.nwPa` | func | `(i32) -> (i32)` |
| 271 | `y4zP.W3N3` | func | `(i32) -> (i32)` |
| 272 | `y4zP.tdLh` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `y4zP.IfS4` | func | `(i32) -> ()` |
| 274 | `y4zP.HpCv` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `y4zP.ul3d` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `y4zP.Q1g9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `y4zP.u5tL` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `y4zP.SwQy` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `y4zP.ujB2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `y4zP.wZRC` | func | `(i32) -> (i32)` |
| 281 | `y4zP.kN8X` | func | `(i32) -> (i32)` |
| 282 | `y4zP.VyqS` | func | `(i32) -> (i32)` |
| 283 | `y4zP.hI5p` | func | `(i32) -> (i32)` |
| 284 | `y4zP.Krcj` | func | `(i32 i32) -> ()` |
| 285 | `y4zP.xkbU` | func | `(i32) -> ()` |
| 286 | `y4zP.NI4U` | func | `(i32 i32) -> ()` |
| 287 | `y4zP.n4Dn` | func | `(i32) -> (i32)` |
| 288 | `y4zP.AFXe` | func | `(i32 i32) -> (i32)` |
| 289 | `y4zP.HX3d` | func | `(i32 i32) -> (i32)` |
| 290 | `y4zP.aHIZ` | func | `(i32 i32) -> (i32)` |
| 291 | `y4zP.yaiC` | func | `(f64) -> (i32)` |
| 292 | `y4zP.jY8D` | func | `(i32 i32) -> (i32)` |
| 293 | `y4zP.NBl7` | func | `(i32 i32) -> (i32)` |
| 294 | `y4zP.wiLz` | func | `(i32 i32) -> (i32)` |
| 295 | `y4zP.H61R` | func | `(i32 i32) -> (i32)` |
| 296 | `y4zP.nCi3` | func | `(i32 i32) -> (i32)` |
| 297 | `y4zP.k4xj` | func | `(i32 i32) -> (i32)` |
| 298 | `y4zP.cSn7` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `x6Ad` | func | 1452 | `(i32) -> (i32)` |
| `gV6i` | func | 2494 | `(i32) -> ()` |
| `MhMR` | func | 2044 | `(i32 f64 f64 f64) -> (i32)` |
| `ywvU` | func | 1871 | `(i32 i32 f64 f64 f64) -> ()` |
| `Zfdz` | func | 2519 | `(i32 i32) -> (i32)` |
| `Ghqh` | func | 3031 | `(i32 i32) -> (i32 i32)` |
| `WsUi` | func | 860 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `TtiS` | func | 1501 | `(i32 i32) -> (i32)` |
| `CmmZ` | func | 1490 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jHse` | func | 1303 | `(i32 i32) -> (i32)` |
| `wzOh` | func | 2991 | `(i32 i32) -> (i32)` |
| `HBSH` | func | 3034 | `(i32 i32) -> (i32 i32)` |
| `iAp7` | func | 3224 | `() -> (i32)` |
| `vS26` | func | 2505 | `(i32 i32) -> ()` |
| `kkk9` | func | 2444 | `(i32) -> (i32)` |
| `Cmgd` | func | 917 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `YMwB` | func | 1525 | `(i32 i32) -> (i32)` |
| `ZaqB` | func | 747 | `(i32) -> (i32)` |
| `h6DG` | func | 1449 | `() -> (i32)` |
| `vXjN` | func | 1999 | `(i32 i32) -> ()` |
| `jBkJ` | func | 2303 | `(i32 i32) -> ()` |
| `Yope` | func | 2997 | `(i32 i32 i32 i32) -> (i32)` |
| `t3sE` | func | 1605 | `(i32 f64 f64 f64) -> (i32)` |
| `bKMM` | func | 1905 | `(i32) -> ()` |
| `V3Bk` | func | 2399 | `(i32 i32 i32 i32) -> (i32)` |
| `Xu5k` | func | 1180 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WEvE` | func | 1249 | `(i32 i32) -> (i32)` |
| `t0Ss` | func | 1495 | `(i32) -> (i32)` |
| `pO0E` | func | 2807 | `(i32) -> (i32)` |
| `l7Wu` | func | 1836 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `EPnR` | func | 2526 | `(i32) -> (i32)` |
| `nY8w` | func | 3023 | `(i32 i32 i32) -> (i32 i32)` |
| `snou` | func | 1331 | `(i32 i32) -> (i32)` |
| `cNXS` | func | 2026 | `(i32 f64) -> (i32)` |
| `BiOG` | func | 3058 | `() -> (i32 i32)` |
| `ybWT` | func | 1769 | `(i32 i32) -> (i32)` |
| `Fu7R` | func | 2793 | `(i32) -> (i32)` |
| `Ml8d` | func | 3093 | `(i32 i32) -> ()` |
| `hkHi` | func | 1220 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `NxRM` | func | 3044 | `(i32) -> (i32 i32)` |
| `kb65` | func | 570 | `(i32 i32 i32) -> (i32)` |
| `cGfO` | global | 1 | `` |
| `QBJo` | func | 1472 | `(i32 i32 i32 i32) -> ()` |
| `SHh3` | func | 3083 | `(i32 i32 i32 i32) -> ()` |
| `rVCJ` | func | 1485 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `DkUB` | func | 2355 | `(i32 i32) -> (i32)` |
| `Eb43` | func | 2060 | `(i32 i32) -> ()` |
| `AsXN` | func | 3154 | `(i32) -> ()` |
| `Id6g` | func | 1831 | `() -> (i32)` |
| `vYEH` | func | 2496 | `(i32) -> (i32)` |
| `zxGj` | func | 1121 | `(i32 i32) -> ()` |
| `m2XI` | func | 3057 | `() -> (i32 i32)` |
| `DXED` | func | 3200 | `(i32) -> ()` |
| `YVq7` | func | 3033 | `(i32 i32) -> (i32 i32)` |
| `Me1b` | func | 2818 | `(i32) -> (i32)` |
| `G1Or` | func | 1589 | `(i32 i32) -> (i32)` |
| `yF7t` | func | 2492 | `(i32) -> (i32)` |
| `MR6v` | func | 1751 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `UMzc` | func | 1896 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `o23s` | func | 2488 | `(i32) -> (i32)` |
| `dBzn` | func | 619 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `F8pU` | func | 2850 | `(i32) -> (i32)` |
| `vMjU` | func | 2272 | `(i32 i32) -> ()` |
| `bEzJ` | func | 3004 | `(i32 i32) -> ()` |
| `n5nN` | func | 1541 | `(i32 i32 i32) -> (i32)` |
| `THsN` | func | 2575 | `() -> (i32)` |
| `sRIG` | func | 1420 | `(i32 i32) -> (i32)` |
| `X1t0` | func | 3032 | `(i32 i32) -> (i32 i32)` |
| `wcdi` | func | 685 | `(i32 i32) -> (i32)` |
| `mCoD` | func | 2972 | `() -> ()` |
| `S8kG` | func | 2495 | `(i32) -> (i32)` |
| `nKlv` | func | 2353 | `(i32 i32) -> (i32)` |
| `n0kM` | func | 2528 | `(i32) -> (i32)` |
| `E1Gp` | func | 2218 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `um6G` | func | 2518 | `(i32 i32) -> (i32)` |
| `mPs2` | func | 1643 | `(i32 i32 i32 i32) -> (i32)` |
| `AIKo` | func | 1735 | `(i32) -> (i32)` |
| `hzwZ` | func | 1966 | `(i32 i32 i32 i32) -> ()` |
| `Udbv` | func | 2609 | `(i32 i32) -> ()` |
| `TBsy` | func | 1514 | `(i32 i32) -> (i32)` |
| `bhCf` | func | 2443 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Pq9A` | func | 3199 | `(i32) -> (i32)` |
| `Mr9e` | func | 1120 | `(i32 i32) -> (i32)` |
| `vJQ6` | func | 3225 | `() -> (i32)` |
| `MzKL` | func | 1346 | `(i32 i32 i32) -> (i32)` |
| `u2as` | func | 2610 | `() -> (i32)` |
| `T3ft` | func | 1562 | `(i32 i32 i32 i32) -> (i32)` |
| `z662` | func | 1851 | `(i32 i32 i32 i32) -> (i32)` |
| `RAbT` | func | 3043 | `(i32) -> (i32 i32)` |
| `J3GU` | func | 2563 | `(i32 i32) -> ()` |
| `TtzK` | func | 2527 | `(i32) -> (i32)` |
| `emWa` | func | 2473 | `(i32 i32) -> ()` |
| `xLyK` | func | 1295 | `(i32) -> (i32)` |
| `iXjQ` | func | 1526 | `(i32 i32) -> (i32)` |
| `sam8` | func | 1400 | `(i32 f64 f64) -> (i32)` |
| `AxWI` | func | 3092 | `(i32 i32 i32) -> ()` |
| `t0ZU` | func | 2354 | `(i32 i32) -> (i32)` |
| `WyKg` | func | 1601 | `(i32 i32) -> ()` |
| `ccmd` | func | 897 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `sjy3` | func | 1889 | `(i32 i32) -> (i32)` |
| `UsN7` | func | 1528 | `(i32 f64) -> (f64)` |
| `Z9oo` | func | 2509 | `(i32 i32) -> ()` |
| `eAbP` | func | 2474 | `(i32) -> (i32)` |
| `MILR` | func | 671 | `(i32 i32) -> (i32)` |
| `HbjG` | func | 3042 | `(i32) -> (i32 i32)` |
| `ccIs` | func | 1757 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `hdby` | func | 680 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `zEoI` | func | 1964 | `(i32) -> (i32)` |
| `Ttlq` | func | 2427 | `(i32) -> (i32)` |
| `e8ZC` | func | 1271 | `(i32 i32 i32) -> (i32)` |
| `yTs6` | func | 2490 | `(i32) -> (i32)` |
| `uJNC` | func | 1227 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `cNsz` | func | 711 | `(i32 i32) -> (i32)` |
| `DI9t` | func | 2356 | `(i32 i32) -> (i32)` |
| `v6E9` | func | 2084 | `(i32 i32) -> (i32)` |
| `hqVF` | func | 3121 | `() -> (i32)` |
| `e0TU` | func | 2487 | `(i32) -> (f64)` |
| `UkPv` | func | 2497 | `(i32) -> (i32)` |
| `wP05` | func | 3022 | `(i32 i32 i32) -> (i32 i32)` |
| `mgCs` | func | 3045 | `(i32) -> (i32 i32)` |
| `ACFy` | func | 2517 | `(i32) -> (i32)` |
| `BsdN` | func | 3030 | `(i32 i32) -> (i32 i32)` |
| `Bspj` | func | 2510 | `(i32) -> (i32)` |
| `LXWu` | func | 2196 | `(i32 i32) -> (i32)` |
| `WO35` | func | 1904 | `(i32) -> ()` |
| `YJL5` | func | 1445 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `R9vI` | func | 1712 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `cjAx` | func | 1328 | `(i32) -> ()` |
| `uwjs` | func | 1277 | `(i32 i32 i32) -> ()` |
| `RhxB` | func | 2507 | `(i32) -> (i32)` |
| `BSw8` | func | 3046 | `(i32) -> (i32 i32)` |
| `ixkz` | func | 3028 | `(i32 i32) -> (i32 i32)` |
| `N4j3` | func | 2491 | `(i32) -> (i32)` |
| `WmO1` | func | 1879 | `(i32 i32) -> ()` |
| `g6k2` | func | 3029 | `(i32 i32) -> (i32 i32)` |
| `OY5F` | func | 3155 | `() -> ()` |
| `UcqG` | func | 2508 | `(i32) -> (i32)` |
| `Z3hm` | func | 750 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `QW44` | func | 3148 | `(i32 i32 i32) -> ()` |
| `OW6c` | func | 2489 | `(i32) -> (i32)` |
| `uZkr` | func | 1947 | `(i32) -> (i32)` |
| `IeCA` | func | 2828 | `(i32) -> ()` |
| `bR6N` | func | 767 | `(i32 i32 i32) -> (i32)` |
| `hjwx` | func | 3059 | `() -> (i32 i32)` |
| `g5Ba` | func | 3195 | `() -> (f64)` |
| `EA2d` | func | 1221 | `(i32 i32 i32 i32) -> (i32)` |
| `NAp1` | func | 1494 | `(i32 i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `EbAX` | func | 898 | `(i32 i32) -> (i32)` |
| `kNoF` | func | 2164 | `(i32 i32) -> (i32)` |
| `qQ8i` | func | 930 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `axgH` | func | 742 | `(i32 i32 i32 i32) -> (i32)` |
| `nPgp` | func | 1600 | `(i32 i32) -> ()` |
| `jfOr` | func | 703 | `(f64) -> (f64)` |
| `cYPk` | func | 2273 | `(i32 f64) -> (i32)` |
| `Spn3` | func | 1399 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `tnZs` | global | 2 | `` |
| `wndh` | func | 2786 | `(i32) -> (i32)` |
| `uXJc` | func | 2493 | `(i32) -> (i32)` |
| `DSKP` | func | 2387 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 755 · max 755
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2642832, `i32` = i32.const 2643420

## Functions

- 2,937 bodies · 4,069,193 code bytes · avg 1.4 KB
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
| 1590 | `(i32 i32) -> (i32)` | 182 | 54,919 | 19,834 | local.get×6599, i32.const×2595, i64.store×1935, i64.const×1087, i64.load×1068 |
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
