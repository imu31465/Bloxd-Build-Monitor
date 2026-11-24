# WASM module: `bloxd_wasm_webgpu_bg`

> environment **staging.bloxd.io** · build `c6gaap.4d6587ec` · analyzed 2026-11-25T07:51:20+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgpu_bg.caa95c79fbc444231200.wasm
> 5,136,471 bytes (4.9 MB) · sha256 `5526ae404536156a…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,136,608 → 5,136,471 bytes (-137)
- defined functions 2,949 → 2,950
- code bytes 4,050,219 → 4,050,074
- data bytes 1,040,009 → 1,040,012
- name-section module id `42a5b6e4963e54f8.12282` → `1147de1a5ce9d3b9.12285`
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,950 / 393 |
| Exports / imports | 160 / 394 |
| Code bytes (function bodies) | 4,050,074 (3.9 MB) |
| Total local variables | 30,817 |
| Instructions (scanable bodies) | 1,895,413 |
| Data segments / bytes | 3,546 / 1,040,012 |
| Element segments / entries | 1 / 838 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `1147de1a5ce9d3b9.12285` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,518 | 177 |
| 2 | import | 4,734 | 394 |
| 3 | function | 3,001 | 2950 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,683 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,055,453 | 2950 |
| 11 | data | 1,068,697 | 3546 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `eIbA.lUX9` | memory | `[128..14648]` |
| 0 | `eIbA.YZy9` | func | `(i32) -> (i32)` |
| 1 | `eIbA.uXlz` | func | `(i32) -> (f64)` |
| 2 | `eIbA.XfvV` | func | `() -> (i32)` |
| 3 | `eIbA.MCfx` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `eIbA.heNP` | func | `(i32) -> ()` |
| 5 | `eIbA.LBID` | func | `(i32 i32) -> (i32)` |
| 6 | `eIbA.gjHX` | func | `(i32) -> (i32)` |
| 7 | `eIbA.VZaa` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `eIbA.xER7` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `eIbA.GXrf` | func | `(i32) -> (i32)` |
| 10 | `eIbA.yeRM` | func | `(i32 i32) -> ()` |
| 11 | `eIbA.bETx` | func | `(i32 i32) -> ()` |
| 12 | `eIbA.GHCb` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `eIbA.k1VD` | func | `(i32 i32) -> (i32)` |
| 14 | `eIbA.czAj` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `eIbA.Utkp` | func | `(i32) -> (i32)` |
| 16 | `eIbA.u0Cx` | func | `(i32 i32) -> (i32)` |
| 17 | `eIbA.hZxD` | func | `(i32 i32) -> (i32)` |
| 18 | `eIbA.cHdN` | func | `(i32 i32) -> ()` |
| 19 | `eIbA.Kh24` | func | `(i32) -> (i32)` |
| 20 | `eIbA.lkTN` | func | `(i32) -> (i32)` |
| 21 | `eIbA.OVjA` | func | `(i32 i32 i32) -> ()` |
| 22 | `eIbA.qmwl` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `eIbA.jp1y` | func | `(i32) -> (i32)` |
| 24 | `eIbA.lJ4b` | func | `(i32) -> (i32)` |
| 25 | `eIbA.St6R` | func | `(i32 i32) -> ()` |
| 26 | `eIbA.O9tx` | func | `(i32 i32) -> (i32)` |
| 27 | `eIbA.MdW6` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `eIbA.EO7l` | func | `(i32) -> (i32)` |
| 29 | `eIbA.Y0Jv` | func | `(i32) -> (i32)` |
| 30 | `eIbA.w0XG` | func | `(i32) -> (i32)` |
| 31 | `eIbA.VtnM` | func | `(i32) -> (i32)` |
| 32 | `eIbA.DGdI` | func | `(i32) -> (i32)` |
| 33 | `eIbA.PjxG` | func | `(i32 i32 i32) -> ()` |
| 34 | `eIbA.tToi` | func | `(i32 i32) -> (i32)` |
| 35 | `eIbA.nX8E` | func | `(i32) -> (i32)` |
| 36 | `eIbA.hpiR` | func | `(i32) -> ()` |
| 37 | `eIbA.Mgcc` | func | `(i32) -> (i32)` |
| 38 | `eIbA.Exr3` | func | `(i32) -> (i32)` |
| 39 | `eIbA.hITS` | func | `(i32) -> ()` |
| 40 | `eIbA.svMu` | func | `(i32 i32) -> (i32)` |
| 41 | `eIbA.eCk9` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `eIbA.ffPs` | func | `(i32) -> ()` |
| 43 | `eIbA.eTMY` | func | `(i32 i32) -> ()` |
| 44 | `eIbA.TpM8` | func | `() -> (i32)` |
| 45 | `eIbA.GiAU` | func | `(i32 i32) -> (i32)` |
| 46 | `eIbA.e91o` | func | `(i32 i32) -> (i32)` |
| 47 | `eIbA.BrHA` | func | `(i32) -> (i32)` |
| 48 | `eIbA.gFfE` | func | `(i32) -> (i32)` |
| 49 | `eIbA.X6i7` | func | `(i32) -> (i32)` |
| 50 | `eIbA.VAHI` | func | `(i32 i32) -> ()` |
| 51 | `eIbA.rpOX` | func | `(i32) -> (i32)` |
| 52 | `eIbA.ILsv` | func | `(i32) -> ()` |
| 53 | `eIbA.FzRF` | func | `(i32 i32) -> (i32)` |
| 54 | `eIbA.wsWv` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `eIbA.d13i` | func | `(i32) -> (i32)` |
| 56 | `eIbA.EQsx` | func | `(i32 i32 i32) -> ()` |
| 57 | `eIbA.StPM` | func | `(i32 i32) -> ()` |
| 58 | `eIbA.OKuf` | func | `(i32) -> (i32)` |
| 59 | `eIbA.nuSu` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `eIbA.CHIW` | func | `(i32) -> ()` |
| 61 | `eIbA.EEsE` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `eIbA.WTKE` | func | `(i32) -> ()` |
| 63 | `eIbA.hB7d` | func | `(i32 i32 i32) -> ()` |
| 64 | `eIbA.Kj5a` | func | `(i32 i32) -> ()` |
| 65 | `eIbA.plFq` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `eIbA.ZOfr` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `eIbA.rkiS` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `eIbA.uiWQ` | func | `(i32 i32 f64) -> ()` |
| 69 | `eIbA.eBKA` | func | `(i32) -> (i32)` |
| 70 | `eIbA.b0vH` | func | `(i32 i32) -> ()` |
| 71 | `eIbA.viHu` | func | `(i32 i32 i32) -> ()` |
| 72 | `eIbA.R9nX` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `eIbA.DmL4` | func | `(i32 i32 i32) -> ()` |
| 74 | `eIbA.juxV` | func | `(i32) -> ()` |
| 75 | `eIbA.PmZL` | func | `(i32 i32) -> ()` |
| 76 | `eIbA.BTIK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `eIbA.sCW5` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `eIbA.YBP3` | func | `(i32 i32 i32) -> ()` |
| 79 | `eIbA.fuCS` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `eIbA.g0Hj` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `eIbA.P6gQ` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `eIbA.auFR` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `eIbA.KLcU` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `eIbA.up0o` | func | `(i32 i32 i32) -> ()` |
| 85 | `eIbA.qtw0` | func | `(i32 i32) -> (i32)` |
| 86 | `eIbA.jBeH` | func | `(i32) -> (i32)` |
| 87 | `eIbA.CqDa` | func | `(i32) -> (i32)` |
| 88 | `eIbA.X4ae` | func | `(i32) -> (i32)` |
| 89 | `eIbA.N5QT` | func | `(i32 i32) -> (i32)` |
| 90 | `eIbA.ZNH6` | func | `(i32) -> ()` |
| 91 | `eIbA.UzuX` | func | `(i32) -> (i32)` |
| 92 | `eIbA.C7vh` | func | `(i32 i32) -> (i32)` |
| 93 | `eIbA.FRuG` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `eIbA.Kjri` | func | `(i32 i32 i32) -> ()` |
| 95 | `eIbA.V2cJ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `eIbA.FexX` | func | `() -> (f64)` |
| 97 | `eIbA.Q4L1` | func | `() -> (f64)` |
| 98 | `eIbA.FFfi` | func | `(i32 i32) -> ()` |
| 99 | `eIbA.M3yP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `eIbA.QiRL` | func | `(i32) -> (i32)` |
| 101 | `eIbA.TkZl` | func | `(i32) -> (i32)` |
| 102 | `eIbA.A88v` | func | `(i32) -> (i32)` |
| 103 | `eIbA.SLK6` | func | `() -> (i32)` |
| 104 | `eIbA.Qr1o` | func | `() -> (i32)` |
| 105 | `eIbA.ZTJ8` | func | `() -> (i32)` |
| 106 | `eIbA.XMDv` | func | `() -> (i32)` |
| 107 | `eIbA.mGUT` | func | `(i32 i32) -> (i32)` |
| 108 | `eIbA.ZiWS` | func | `(i32) -> ()` |
| 109 | `eIbA.BzaD` | func | `(i32 i32) -> (i32)` |
| 110 | `eIbA.v27A` | func | `(i32) -> (i32)` |
| 111 | `eIbA.Wgn8` | func | `() -> (f64)` |
| 112 | `eIbA.hr9s` | func | `(i32) -> (i32)` |
| 113 | `eIbA.TGwB` | func | `(i32 i32) -> ()` |
| 114 | `eIbA.Tfxf` | func | `(i32 i32) -> ()` |
| 115 | `eIbA.moTh` | func | `(i32 i32) -> ()` |
| 116 | `eIbA.sTXL` | func | `(i32 f32) -> ()` |
| 117 | `eIbA.gjg1` | func | `(i32 f32) -> ()` |
| 118 | `eIbA.oKat` | func | `(i32 i32) -> ()` |
| 119 | `eIbA.rDvK` | func | `(i32 i32) -> ()` |
| 120 | `eIbA.au5b` | func | `(i32 i32) -> ()` |
| 121 | `eIbA.GLhq` | func | `(i32 i32) -> ()` |
| 122 | `eIbA.IJKM` | func | `(i32 i32 i32) -> ()` |
| 123 | `eIbA.Z4X8` | func | `(i32 i32) -> (i32)` |
| 124 | `eIbA.vCNm` | func | `(i32 i32) -> ()` |
| 125 | `eIbA.New0` | func | `(i32 i32) -> ()` |
| 126 | `eIbA.UmAS` | func | `(i32 i32) -> ()` |
| 127 | `eIbA.FHwP` | func | `(i32 i32) -> ()` |
| 128 | `eIbA.y9y9` | func | `(i32 f64) -> ()` |
| 129 | `eIbA.Rve0` | func | `(i32 f64) -> ()` |
| 130 | `eIbA.N2nv` | func | `(i32 i32) -> ()` |
| 131 | `eIbA.hWwO` | func | `(i32 i32 i32) -> ()` |
| 132 | `eIbA.hQXY` | func | `(i32 i32) -> ()` |
| 133 | `eIbA.V6Jc` | func | `(i32 i32) -> (i32)` |
| 134 | `eIbA.rOZH` | func | `(i32 i32 i32) -> ()` |
| 135 | `eIbA.fI2D` | func | `(i32 i32 i32) -> ()` |
| 136 | `eIbA.s8c8` | func | `(i32 i32) -> (i32)` |
| 137 | `eIbA.SvUC` | func | `(i32 i32) -> (i32)` |
| 138 | `eIbA.uU5V` | func | `(i32 i32 i32) -> ()` |
| 139 | `eIbA.aybM` | func | `(i32 i32 i32) -> ()` |
| 140 | `eIbA.FHZ1` | func | `(i32 i32) -> (i32)` |
| 141 | `eIbA.Cs8j` | func | `(i32 i32) -> ()` |
| 142 | `eIbA.KfC6` | func | `(i32 i32) -> ()` |
| 143 | `eIbA.ySrS` | func | `(i32 i32) -> ()` |
| 144 | `eIbA.ntjN` | func | `(i32 i32) -> ()` |
| 145 | `eIbA.eIpU` | func | `(i32 i32) -> ()` |
| 146 | `eIbA.vE5z` | func | `(i32 i32) -> ()` |
| 147 | `eIbA.HELU` | func | `(i32 i32) -> ()` |
| 148 | `eIbA.GAJ2` | func | `(i32 f64) -> ()` |
| 149 | `eIbA.SlJf` | func | `(i32 i32) -> ()` |
| 150 | `eIbA.SDkO` | func | `(i32 i32) -> ()` |
| 151 | `eIbA.AlsS` | func | `(i32 i32) -> ()` |
| 152 | `eIbA.ZiVB` | func | `(i32 i32) -> ()` |
| 153 | `eIbA.frIY` | func | `(i32 i32) -> ()` |
| 154 | `eIbA.HiZS` | func | `(i32 i32) -> ()` |
| 155 | `eIbA.eocO` | func | `(i32 i32) -> ()` |
| 156 | `eIbA.ASQX` | func | `(i32 i32) -> ()` |
| 157 | `eIbA.ZKyW` | func | `(i32 i32) -> ()` |
| 158 | `eIbA.xV8M` | func | `(i32 i32 i32) -> ()` |
| 159 | `eIbA.WhDH` | func | `(i32 i32 i32) -> ()` |
| 160 | `eIbA.wBZE` | func | `(i32 i32) -> (i32)` |
| 161 | `eIbA.CFpT` | func | `(i32 i32) -> (i32)` |
| 162 | `eIbA.geDJ` | func | `(i32 i32) -> ()` |
| 163 | `eIbA.AJSE` | func | `(i32 i32) -> ()` |
| 164 | `eIbA.BZMb` | func | `(i32 f64) -> ()` |
| 165 | `eIbA.ExPK` | func | `(i32 i32) -> ()` |
| 166 | `eIbA.zMoz` | func | `(i32 i32) -> ()` |
| 167 | `eIbA.dR9H` | func | `(i32 i32) -> ()` |
| 168 | `eIbA.DRSg` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `eIbA.kwqm` | func | `(i32 f64) -> ()` |
| 170 | `eIbA.nrPb` | func | `(i32 f64) -> ()` |
| 171 | `eIbA.Y9n9` | func | `(i32 f64) -> ()` |
| 172 | `eIbA.LGoJ` | func | `(i32 f64) -> ()` |
| 173 | `eIbA.Opd1` | func | `(i32 i32) -> ()` |
| 174 | `eIbA.Bcko` | func | `(i32 i32) -> ()` |
| 175 | `eIbA.wXTQ` | func | `(i32 i32) -> ()` |
| 176 | `eIbA.ljdD` | func | `(i32 i32) -> ()` |
| 177 | `eIbA.eXlq` | func | `(i32 i32) -> ()` |
| 178 | `eIbA.oseU` | func | `(i32 i32 i32) -> ()` |
| 179 | `eIbA.yaft` | func | `(i32 i32) -> ()` |
| 180 | `eIbA.qHxC` | func | `(i32 f32) -> ()` |
| 181 | `eIbA.TH0e` | func | `(i32 i32) -> ()` |
| 182 | `eIbA.UP3C` | func | `(i32 i32) -> ()` |
| 183 | `eIbA.Tix4` | func | `(i32 i32) -> ()` |
| 184 | `eIbA.dIQ3` | func | `(i32 i32) -> ()` |
| 185 | `eIbA.ycRY` | func | `(i32 i32) -> ()` |
| 186 | `eIbA.agfP` | func | `(i32 i32) -> ()` |
| 187 | `eIbA.lfNE` | func | `(i32 i32) -> ()` |
| 188 | `eIbA.xcU5` | func | `(i32 i32) -> ()` |
| 189 | `eIbA.kb2D` | func | `(i32 i32) -> ()` |
| 190 | `eIbA.gBVf` | func | `(i32 i32) -> ()` |
| 191 | `eIbA.TRtk` | func | `(i32 i32) -> ()` |
| 192 | `eIbA.Clrv` | func | `(i32 i32) -> ()` |
| 193 | `eIbA.IPpA` | func | `(i32 i32) -> (i32)` |
| 194 | `eIbA.T4u6` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `eIbA.P8tA` | func | `(i32 i32) -> ()` |
| 196 | `eIbA.Ak0L` | func | `(i32 i32 i32) -> ()` |
| 197 | `eIbA.MRyT` | func | `(i32 i32) -> (i32)` |
| 198 | `eIbA.YdCw` | func | `(i32) -> (i32)` |
| 199 | `eIbA.kHif` | func | `(i32 i32) -> ()` |
| 200 | `eIbA.kIrP` | func | `(i32 i32) -> ()` |
| 201 | `eIbA.L4Tt` | func | `(i32 i32) -> ()` |
| 202 | `eIbA.EfIn` | func | `(i32 i32) -> ()` |
| 203 | `eIbA.ATDM` | func | `(i32 i32) -> ()` |
| 204 | `eIbA.gQn6` | func | `(i32 i32) -> ()` |
| 205 | `eIbA.A6rz` | func | `(i32 i32) -> ()` |
| 206 | `eIbA.e9XU` | func | `(i32 i32) -> ()` |
| 207 | `eIbA.fjUv` | func | `(i32) -> (i32)` |
| 208 | `eIbA.qC5B` | func | `(i32 i32 i32) -> ()` |
| 209 | `eIbA.a3Bw` | func | `(i32 i32) -> ()` |
| 210 | `eIbA.J2kt` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `eIbA.l5E7` | func | `(i32 i32) -> ()` |
| 212 | `eIbA.CLa0` | func | `(i32) -> ()` |
| 213 | `eIbA.Mkf5` | func | `(i32 i32) -> ()` |
| 214 | `eIbA.nxhZ` | func | `(i32) -> (i32)` |
| 215 | `eIbA.wEr4` | func | `(i32 i32 i32) -> ()` |
| 216 | `eIbA.UYqX` | func | `(i32 i32) -> ()` |
| 217 | `eIbA.ZoIt` | func | `(i32 i32) -> ()` |
| 218 | `eIbA.IWpK` | func | `(i32 i32) -> ()` |
| 219 | `eIbA.qBzX` | func | `(i32 i32) -> ()` |
| 220 | `eIbA.mwtC` | func | `(i32 i32) -> (i32)` |
| 221 | `eIbA.eLhE` | func | `(i32 i32) -> ()` |
| 222 | `eIbA.QpRO` | func | `(i32 i32) -> ()` |
| 223 | `eIbA.W9Hd` | func | `(i32 i32) -> ()` |
| 224 | `eIbA.iyq7` | func | `(i32 i32) -> ()` |
| 225 | `eIbA.hnMJ` | func | `(i32 i32) -> ()` |
| 226 | `eIbA.U7mQ` | func | `(i32 i32) -> ()` |
| 227 | `eIbA.TBvt` | func | `(i32 i32) -> ()` |
| 228 | `eIbA.wgA1` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `eIbA.cP1a` | func | `(i32) -> (i32)` |
| 230 | `eIbA.FpnV` | func | `(i32) -> ()` |
| 231 | `eIbA.wpMC` | func | `(i32 f64) -> ()` |
| 232 | `eIbA.nCcT` | func | `(i32 i32) -> ()` |
| 233 | `eIbA.YxUF` | func | `(i32 i32) -> ()` |
| 234 | `eIbA.xL7l` | func | `(i32 i32 i32) -> ()` |
| 235 | `eIbA.avpI` | func | `(i32 i32) -> (i32)` |
| 236 | `eIbA.tpGu` | func | `(i32 i32) -> ()` |
| 237 | `eIbA.JDoT` | func | `(i32 i32) -> ()` |
| 238 | `eIbA.vrMA` | func | `(i32 i32) -> ()` |
| 239 | `eIbA.wzjY` | func | `(i32 i32 i32) -> ()` |
| 240 | `eIbA.oIVS` | func | `(i32 i32) -> ()` |
| 241 | `eIbA.x618` | func | `(i32 i32) -> ()` |
| 242 | `eIbA.QdkT` | func | `(i32 i32) -> ()` |
| 243 | `eIbA.BDmK` | func | `(i32 i32 i32) -> ()` |
| 244 | `eIbA.I5Ft` | func | `(i32 i32) -> ()` |
| 245 | `eIbA.VLH3` | func | `(i32 i32) -> ()` |
| 246 | `eIbA.xDE8` | func | `(i32 i32 i32) -> ()` |
| 247 | `eIbA.Qvvw` | func | `(i32 i32) -> (i32)` |
| 248 | `eIbA.o2t4` | func | `(i32 i32) -> ()` |
| 249 | `eIbA.k8mq` | func | `(i32 i32 i32) -> ()` |
| 250 | `eIbA.cpe9` | func | `(i32 i32) -> ()` |
| 251 | `eIbA.ClHJ` | func | `(i32 f64) -> ()` |
| 252 | `eIbA.ObLg` | func | `(i32 i32) -> ()` |
| 253 | `eIbA.ZJUq` | func | `(i32 f64) -> ()` |
| 254 | `eIbA.LmZ2` | func | `(i32 i32 i32) -> ()` |
| 255 | `eIbA.GyFO` | func | `(i32 i32) -> ()` |
| 256 | `eIbA.VmJ5` | func | `(i32 i32 i32) -> ()` |
| 257 | `eIbA.mchR` | func | `(i32 i32) -> ()` |
| 258 | `eIbA.YnnR` | func | `(i32 i32) -> ()` |
| 259 | `eIbA.VVVi` | func | `(i32 i32) -> ()` |
| 260 | `eIbA.lh6U` | func | `(i32 i32 i32) -> ()` |
| 261 | `eIbA.uvND` | func | `(i32 i32) -> ()` |
| 262 | `eIbA.KAuR` | func | `(i32 i32) -> ()` |
| 263 | `eIbA.AkYv` | func | `(i32 i32) -> ()` |
| 264 | `eIbA.d2Tl` | func | `(i32 i32) -> ()` |
| 265 | `eIbA.Ytsf` | func | `(i32 f32) -> ()` |
| 266 | `eIbA.zUlT` | func | `(i32 f32) -> ()` |
| 267 | `eIbA.X6fq` | func | `(i32 i32) -> ()` |
| 268 | `eIbA.COOf` | func | `(i32 i32) -> ()` |
| 269 | `eIbA.inB0` | func | `(i32 i32) -> ()` |
| 270 | `eIbA.b5ys` | func | `(i32 i32) -> ()` |
| 271 | `eIbA.gpgG` | func | `(i32 i32) -> ()` |
| 272 | `eIbA.TC3q` | func | `(i32 i32) -> ()` |
| 273 | `eIbA.QJfy` | func | `(i32 i32) -> ()` |
| 274 | `eIbA.Rwyw` | func | `(i32 i32) -> ()` |
| 275 | `eIbA.jamB` | func | `(i32 i32) -> ()` |
| 276 | `eIbA.eVfo` | func | `(i32 i32) -> ()` |
| 277 | `eIbA.ecoe` | func | `(i32 i32) -> ()` |
| 278 | `eIbA.KW4S` | func | `(i32 i32) -> ()` |
| 279 | `eIbA.yKC2` | func | `(i32 i32) -> ()` |
| 280 | `eIbA.ftGU` | func | `(i32 i32) -> ()` |
| 281 | `eIbA.G6HV` | func | `(i32 i32) -> ()` |
| 282 | `eIbA.mmYW` | func | `(i32 i32) -> ()` |
| 283 | `eIbA.PVi5` | func | `(i32 i32) -> ()` |
| 284 | `eIbA.k16T` | func | `(i32 i32) -> ()` |
| 285 | `eIbA.DdIa` | func | `(i32 i32 i32) -> ()` |
| 286 | `eIbA.IUm1` | func | `(i32 i32 i32) -> ()` |
| 287 | `eIbA.ysCP` | func | `(i32 i32) -> ()` |
| 288 | `eIbA.oOMj` | func | `(i32 i32) -> ()` |
| 289 | `eIbA.MMSE` | func | `(i32 i32) -> ()` |
| 290 | `eIbA.y7P9` | func | `(i32 i32) -> ()` |
| 291 | `eIbA.m7Qx` | func | `(i32 i32) -> ()` |
| 292 | `eIbA.cpu7` | func | `(i32 i32) -> ()` |
| 293 | `eIbA.oqrF` | func | `(i32 i32) -> ()` |
| 294 | `eIbA.Qihr` | func | `(i32 i32) -> ()` |
| 295 | `eIbA.lwzC` | func | `(i32 i32) -> ()` |
| 296 | `eIbA.oyfG` | func | `(i32 i32) -> ()` |
| 297 | `eIbA.EUOn` | func | `(i32 i32) -> ()` |
| 298 | `eIbA.TS51` | func | `(i32 i32) -> (i32)` |
| 299 | `eIbA.lOW0` | func | `(i32 i32) -> ()` |
| 300 | `eIbA.pBBf` | func | `(i32 i32 i32) -> ()` |
| 301 | `eIbA.WbSj` | func | `(i32 i32) -> ()` |
| 302 | `eIbA.i7nJ` | func | `(i32 i32) -> ()` |
| 303 | `eIbA.uaqw` | func | `(i32 i32) -> ()` |
| 304 | `eIbA.ph5g` | func | `(i32 i32 i32) -> ()` |
| 305 | `eIbA.nnPU` | func | `(i32 i32) -> (i32)` |
| 306 | `eIbA.pNYz` | func | `(i32 i32 i32) -> ()` |
| 307 | `eIbA.SG4U` | func | `(i32 i32 i32) -> ()` |
| 308 | `eIbA.EPNW` | func | `(i32 i32) -> ()` |
| 309 | `eIbA.W4l8` | func | `(i32 i32) -> ()` |
| 310 | `eIbA.OptS` | func | `(i32 i32) -> ()` |
| 311 | `eIbA.OmYr` | func | `(i32 i32) -> ()` |
| 312 | `eIbA.YSP6` | func | `(i32 i32) -> (i32)` |
| 313 | `eIbA.s7RT` | func | `(i32) -> (i32)` |
| 314 | `eIbA.LmW4` | func | `(i32) -> (i32)` |
| 315 | `eIbA.gpU7` | func | `(i32) -> (i32)` |
| 316 | `eIbA.i7hp` | func | `(i32) -> (i32)` |
| 317 | `eIbA.nQPQ` | func | `(i32) -> (i32)` |
| 318 | `eIbA.cf8D` | func | `(i32) -> (i32)` |
| 319 | `eIbA.nqOF` | func | `(i32) -> (i32)` |
| 320 | `eIbA.xdXc` | func | `(i32) -> (i32)` |
| 321 | `eIbA.JHO0` | func | `(i32) -> (i32)` |
| 322 | `eIbA.b0Sy` | func | `(i32) -> (i32)` |
| 323 | `eIbA.epE0` | func | `(i32) -> (i32)` |
| 324 | `eIbA.XIKN` | func | `(i32) -> (i32)` |
| 325 | `eIbA.V5rr` | func | `(i32) -> (i32)` |
| 326 | `eIbA.AFwE` | func | `(i32) -> (i32)` |
| 327 | `eIbA.q0LM` | func | `(i32) -> (f64)` |
| 328 | `eIbA.i53c` | func | `(i32) -> (f64)` |
| 329 | `eIbA.JjQ5` | func | `(i32) -> (i32)` |
| 330 | `eIbA.fUPx` | func | `(i32) -> (f64)` |
| 331 | `eIbA.Rz9g` | func | `(i32) -> (i32)` |
| 332 | `eIbA.lVA4` | func | `(i32) -> (i32)` |
| 333 | `eIbA.Ehm1` | func | `(i32) -> (i32)` |
| 334 | `eIbA.uVfm` | func | `(i32) -> (i32)` |
| 335 | `eIbA.pauj` | func | `(i32) -> (i32)` |
| 336 | `eIbA.UTgM` | func | `(i32) -> (i32)` |
| 337 | `eIbA.kk8h` | func | `(i32) -> (i32)` |
| 338 | `eIbA.kDQK` | func | `(i32) -> (i32)` |
| 339 | `eIbA.eY03` | func | `(i32) -> (i32)` |
| 340 | `eIbA.ASmg` | func | `(i32) -> (i32)` |
| 341 | `eIbA.iy7x` | func | `(i32) -> (i32)` |
| 342 | `eIbA.QEiy` | func | `(i32) -> (i32)` |
| 343 | `eIbA.mW6H` | func | `(i32) -> (i32)` |
| 344 | `eIbA.JZhi` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `eIbA.NqTp` | func | `() -> (i32)` |
| 346 | `eIbA.hbp2` | func | `(i32 i32) -> ()` |
| 347 | `eIbA.MeXX` | func | `(i32 i32 i32) -> ()` |
| 348 | `eIbA.Xmgf` | func | `(i32 i32 i32) -> ()` |
| 349 | `eIbA.eVO9` | func | `(i32 i32) -> (i32)` |
| 350 | `eIbA.UFUp` | func | `(i32) -> (i32)` |
| 351 | `eIbA.smo3` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `eIbA.AeFp` | func | `(i32) -> ()` |
| 353 | `eIbA.Yvse` | func | `(i32) -> (i32)` |
| 354 | `eIbA.zmS9` | func | `(i32 i32) -> ()` |
| 355 | `eIbA.TdI1` | func | `(i32) -> (i32)` |
| 356 | `eIbA.wcU7` | func | `(i32) -> (i32)` |
| 357 | `eIbA.HRr5` | func | `(i32) -> (i32)` |
| 358 | `eIbA.gSmM` | func | `(i32) -> (i32)` |
| 359 | `eIbA.zuZi` | func | `(i32) -> (i32)` |
| 360 | `eIbA.y2U8` | func | `(i32 i32) -> ()` |
| 361 | `eIbA.JBGT` | func | `(i32 i32) -> ()` |
| 362 | `eIbA.fCoE` | func | `(i32 i32) -> ()` |
| 363 | `eIbA.Kd7c` | func | `(i32 i32) -> ()` |
| 364 | `eIbA.ixSF` | func | `(i32 i32) -> ()` |
| 365 | `eIbA.z7uF` | func | `(i32 i32) -> ()` |
| 366 | `eIbA.ZDTy` | func | `(i32 i32) -> ()` |
| 367 | `eIbA.Xja1` | func | `(i32 i32 i32) -> ()` |
| 368 | `eIbA.MCqk` | func | `(i32 i32) -> ()` |
| 369 | `eIbA.g2RO` | func | `(i32 i32) -> (i32)` |
| 370 | `eIbA.ZvES` | func | `(i32) -> (i32)` |
| 371 | `eIbA.VBm1` | func | `(i32) -> (i32)` |
| 372 | `eIbA.OzKG` | func | `(i32 i32) -> ()` |
| 373 | `eIbA.crIO` | func | `(i32) -> (i32)` |
| 374 | `eIbA.As6z` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `eIbA.WSi5` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `eIbA.GWQ0` | func | `(i32 i32) -> ()` |
| 377 | `eIbA.EjXw` | func | `(i32) -> (i32)` |
| 378 | `eIbA.DNiI` | func | `(i32) -> (i32)` |
| 379 | `eIbA.ex3u` | func | `(i32) -> (i32)` |
| 380 | `eIbA.JDEM` | func | `(i32) -> (i32)` |
| 381 | `eIbA.lCCA` | func | `(i32) -> (i32)` |
| 382 | `eIbA.aL56` | func | `(i32) -> (i32)` |
| 383 | `eIbA.WbzW` | func | `(i32 i32) -> ()` |
| 384 | `eIbA.bi3d` | func | `(i32 i32) -> (i32)` |
| 385 | `eIbA.vAsB` | func | `(i32 i32) -> (i32)` |
| 386 | `eIbA.PHFh` | func | `(i32 i32) -> (i32)` |
| 387 | `eIbA.UcWP` | func | `(i32 i32) -> (i32)` |
| 388 | `eIbA.rlG3` | func | `(i32 i32) -> (i32)` |
| 389 | `eIbA.w69w` | func | `(i32 i32) -> (i32)` |
| 390 | `eIbA.XyFr` | func | `(f64) -> (i32)` |
| 391 | `eIbA.ssZT` | func | `(i32 i32) -> (i32)` |
| 392 | `eIbA.G852` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `smkU` | func | 1467 | `(i32 f64 f64) -> (i32)` |
| `jYhR` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `YesB` | func | 2290 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `R7OW` | func | 3123 | `(i32 i32) -> (i32 i32)` |
| `DJAX` | func | 2585 | `(i32 i32) -> ()` |
| `Reko` | func | 1788 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `q4CB` | func | 1834 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `xibU` | func | 3151 | `() -> (i32 i32)` |
| `eMas` | func | 1828 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `IcXp` | func | 798 | `(i32 i32) -> (i32)` |
| `nA1z` | func | 969 | `(i32 i32) -> (i32)` |
| `niQx` | func | 2890 | `(i32) -> (i32)` |
| `mJhm` | func | 1492 | `(i32 i32) -> (i32)` |
| `IySh` | func | 3124 | `(i32 i32) -> (i32 i32)` |
| `YoFh` | func | 897 | `(i32 i32) -> (i32)` |
| `PDi3` | func | 2422 | `(i32 i32) -> (i32)` |
| `KoPl` | func | 1298 | `(i32 i32 i32 i32) -> (i32)` |
| `xTbI` | func | 1527 | `(i32) -> (i32)` |
| `kxqp` | func | 3134 | `(i32) -> (i32 i32)` |
| `JQSQ` | func | 2231 | `(i32 i32) -> (i32)` |
| `EtZ9` | func | 2586 | `(i32) -> (i32)` |
| `t1nU` | func | 3246 | `(i32 i32 i32) -> ()` |
| `bk9Q` | func | 3330 | `() -> (i32)` |
| `wwLY` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `S4PS` | func | 1951 | `(i32 i32 f64 f64 f64) -> ()` |
| `ZDtz` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `nCqw` | func | 1608 | `(i32 f64) -> (f64)` |
| `W6GN` | func | 2567 | `(i32) -> ()` |
| `p2le` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `r3GE` | func | 1913 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `Kmc4` | func | 2456 | `(i32 i32) -> (i32)` |
| `nSxx` | func | 830 | `(i32) -> (i32)` |
| `nWwY` | func | 3216 | `() -> (i32)` |
| `oXJa` | func | 2119 | `(i32 f64 f64 f64) -> (i32)` |
| `P1qU` | func | 3329 | `() -> (i32)` |
| `czkc` | func | 3090 | `(i32 i32 i32 i32) -> (i32)` |
| `Q9Fh` | func | 2270 | `(i32 i32) -> (i32)` |
| `CCSI` | func | 1847 | `(i32 i32) -> (i32)` |
| `H1DO` | func | 3137 | `(i32) -> (i32 i32)` |
| `aZrR` | func | 3305 | `(i32) -> (i32)` |
| `dnxI` | func | 3135 | `(i32) -> (i32 i32)` |
| `k1pK` | func | 2079 | `(i32 i32) -> ()` |
| `m0Ny` | func | 1619 | `(i32 i32 i32) -> (i32)` |
| `dpK1` | func | 2343 | `(i32 f64) -> (i32)` |
| `XeJ1` | func | 2563 | `(i32) -> (i32)` |
| `ILsd` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `Ru7w` | func | 2342 | `(i32 i32) -> ()` |
| `KzhB` | func | 1670 | `(i32 i32) -> (i32)` |
| `EVLZ` | func | 2498 | `(i32) -> (i32)` |
| `FWTo` | func | 2044 | `(i32) -> (i32)` |
| `ZI8p` | func | 3138 | `(i32) -> (i32 i32)` |
| `SyXb` | func | 2565 | `(i32) -> (i32)` |
| `Jf3Q` | func | 1592 | `(i32 i32) -> (i32)` |
| `ZHIF` | func | 3125 | `(i32 i32) -> (i32 i32)` |
| `i5aj` | func | 2569 | `(i32) -> (i32)` |
| `QE6y` | func | 1968 | `(i32 i32) -> (i32)` |
| `J6H9` | func | 1466 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `ACFC` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `JVdI` | func | 1371 | `(i32) -> (i32)` |
| `bOPI` | func | 2568 | `(i32) -> (i32)` |
| `gPEB` | func | 1810 | `(i32) -> (i32)` |
| `O0SN` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `oJKW` | func | 3127 | `(i32 i32) -> (i32 i32)` |
| `P8GB` | func | 1349 | `(i32 i32 i32) -> ()` |
| `XtwP` | func | 3255 | `(i32) -> ()` |
| `l1OR` | func | 2545 | `(i32) -> (i32)` |
| `UQnS` | func | 2685 | `() -> (i32)` |
| `Wmnh` | func | 3096 | `(i32 i32) -> ()` |
| `lB6a` | func | 1640 | `(i32 i32 i32 i32) -> (i32)` |
| `qiEv` | func | 1578 | `(i32 i32) -> (i32)` |
| `WzST` | func | 2135 | `(i32 i32) -> ()` |
| `pSEx` | func | 759 | `(i32 i32) -> (i32)` |
| `lo6X` | func | 1685 | `(i32 f64 f64 f64) -> (i32)` |
| `i0A4` | func | 2046 | `(i32 i32 i32 i32) -> ()` |
| `tyih` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `AoZi` | func | 1200 | `(i32 i32) -> (i32)` |
| `WP1W` | func | 2157 | `(i32 i32) -> (i32)` |
| `dxfu` | func | 2564 | `(i32) -> (i32)` |
| `xqVP` | func | 3064 | `() -> ()` |
| `r2eG` | func | 2936 | `(i32) -> (i32)` |
| `mgIS` | func | 2561 | `(i32) -> (i32)` |
| `Fzmc` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `bESU` | func | 3150 | `() -> (i32 i32)` |
| `io44` | global | 1 | `` |
| `EzAR` | func | 1417 | `(i32 i32 i32) -> (i32)` |
| `KOYO` | func | 1297 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `vHeC` | func | 2601 | `(i32) -> (i32)` |
| `qpnu` | func | 3306 | `(i32) -> ()` |
| `YMIw` | func | 1906 | `() -> (i32)` |
| `eXdk` | func | 3152 | `() -> (i32 i32)` |
| `fyFE` | func | 2104 | `(i32 f64) -> (i32)` |
| `b8Xw` | func | 1957 | `(i32 i32) -> ()` |
| `bBYY` | func | 1606 | `(i32 i32) -> (i32)` |
| `wCyd` | func | 2602 | `(i32) -> (i32)` |
| `hcMJ` | func | 2594 | `(i32 i32) -> (i32)` |
| `ojfY` | func | 1723 | `(i32 i32 i32 i32) -> (i32)` |
| `kq8g` | func | 2369 | `(i32 i32) -> ()` |
| `Ev9r` | func | 2603 | `(i32) -> (i32)` |
| `QGJJ` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `nL16` | func | 1305 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `VXws` | func | 3257 | `() -> ()` |
| `IJ20` | func | 3136 | `(i32) -> (i32 i32)` |
| `DhMK` | func | 1327 | `(i32 i32) -> (i32)` |
| `cDYN` | global | 2 | `` |
| `VgRn` | func | 3121 | `(i32 i32) -> (i32 i32)` |
| `t2mZ` | func | 1929 | `(i32 i32 i32 i32) -> (i32)` |
| `dYtX` | func | 2593 | `(i32 i32) -> (i32)` |
| `jvwm` | func | 2684 | `(i32 i32) -> ()` |
| `qkjD` | func | 1571 | `(i32) -> (i32)` |
| `vaxr` | func | 1257 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `FH8O` | func | 2901 | `(i32) -> (i32)` |
| `knIv` | func | 3177 | `(i32 i32 i32 i32) -> ()` |
| `vADs` | func | 3126 | `(i32 i32) -> (i32 i32)` |
| `nAmF` | func | 2515 | `(i32) -> (i32)` |
| `nNfO` | func | 1546 | `(i32 i32 i32 i32) -> ()` |
| `dSii` | func | 1605 | `(i32 i32) -> (i32)` |
| `FW3O` | func | 2423 | `(i32 i32) -> (i32)` |
| `zLRQ` | func | 2471 | `(i32 i32 i32 i32) -> (i32)` |
| `Chmm` | func | 3084 | `(i32 i32) -> (i32)` |
| `J6un` | func | 1983 | `(i32) -> ()` |
| `Scym` | func | 2873 | `(i32) -> (i32)` |
| `UajH` | func | 3301 | `() -> (f64)` |
| `S4C5` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `CtmJ` | func | 2592 | `(i32) -> (i32)` |
| `Zxf8` | func | 1982 | `(i32) -> ()` |
| `HPVx` | func | 3188 | `(i32 i32 i32) -> ()` |
| `UXxg` | func | 770 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `KNSw` | func | 1519 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `CVNF` | func | 2584 | `(i32) -> (i32)` |
| `p8Tr` | func | 2560 | `(i32) -> (f64)` |
| `Gzdu` | func | 2651 | `() -> (i32)` |
| `d5c9` | func | 1975 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `Dgav` | func | 2634 | `(i32 i32) -> ()` |
| `Wrry` | func | 2865 | `(i32) -> (i32)` |
| `D6s3` | func | 660 | `(i32 i32 i32) -> (i32)` |
| `bpPw` | func | 1201 | `(i32 i32) -> ()` |
| `TmI3` | func | 2579 | `(i32 i32) -> ()` |
| `H0cZ` | func | 2466 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `I8cS` | func | 2424 | `(i32 i32) -> (i32)` |
| `hCaX` | func | 1560 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `qC1N` | func | 2570 | `(i32) -> (i32)` |
| `oPMv` | func | 2566 | `(i32) -> (i32)` |
| `N2Qz` | func | 2583 | `(i32) -> (i32)` |
| `tr9Q` | func | 3186 | `(i32 i32 i32) -> (i32)` |
| `CxLm` | func | 1570 | `(i32 i32 i32 i32) -> (i32)` |
| `LGNU` | func | 1680 | `(i32 i32) -> ()` |
| `rslr` | func | 1681 | `(i32 i32) -> ()` |
| `u0w3` | func | 1524 | `() -> (i32)` |
| `W4dm` | func | 2562 | `(i32) -> (i32)` |
| `wP0h` | func | 2027 | `(i32) -> (i32)` |
| `fNiM` | func | 2421 | `(i32 i32) -> (i32)` |
| `cQJ5` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `LPMa` | func | 1565 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `hL6Q` | func | 3122 | `(i32 i32) -> (i32 i32)` |
| `cJbW` | func | 1403 | `(i32) -> ()` |
| `M7Wu` | func | 2544 | `(i32 i32) -> ()` |
| `ujs8` | func | 2913 | `(i32) -> ()` |
| `kf7S` | func | 1345 | `(i32 i32 i32) -> (i32)` |
| `Xlo6` | func | 1377 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 839 · max 839
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2248528, `i32` = i32.const 2249092

## Functions

- 2,950 bodies · 4,050,074 code bytes · avg 1.3 KB
- instruction scan: 2,950 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 114 |
| <= 128 bytes | 276 |
| <= 256 bytes | 386 |
| <= 512 bytes | 668 |
| <= 1024 bytes | 587 |
| <= 2048 bytes | 415 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 92 |
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
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
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
| 192 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 220 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 706 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 707 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1012 | `(i32 i32) -> (i32)` | 40 | 19,898 | 7,747 | local.get×2497, i32.const×848, i64.store×583, i32.load×391, local.set×357 |
| 1575 | `(i32 i32) -> (i32)` | 180 | 54,758 | 19,856 | local.get×6592, i32.const×2623, i64.store×1913, i64.const×1078, i64.load×1056 |
| 1968 | `(i32 i32) -> ()` | 110 | 40,258 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2608 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2898 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2917 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 541,602 |
| `i32.const` | 227,806 |
| `local.tee` | 99,595 |
| `local.set` | 94,548 |
| `i32.load` | 93,431 |
| `i32.add` | 87,145 |
| `end` | 79,376 |
| `br_if` | 63,870 |
| `i32.store` | 46,969 |
| `block` | 37,345 |
| `i64.store` | 32,817 |
| `i64.const` | 32,166 |
| `if` | 30,360 |
| `call` | 30,170 |
| `i64.load` | 24,365 |
| `i32.sub` | 24,157 |
| `br` | 23,246 |
| `i32.eqz` | 19,072 |
| `select` | 16,747 |
| `i32.and` | 16,349 |
| `i32.shl` | 16,235 |
| `i32.ne` | 15,679 |
| `i32.load8_u` | 15,276 |
| `i32.eq` | 13,738 |
| `i32.store8` | 13,436 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,950/2,950 (degraded: 0)
