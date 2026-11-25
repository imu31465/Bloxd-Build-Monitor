# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `igzsf.a0b73a5f` · analyzed 2026-11-25T09:40:18+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.d6d4625d28ea5af7f7fe.wasm
> 4,851,467 bytes (4.6 MB) · sha256 `67ad9c6dce37796a…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `2b7ac69b3b622df6.10604` → `62c522dd1ab271d1.10604` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,870 / 282 |
| Exports / imports | 157 / 283 |
| Code bytes (function bodies) | 4,001,633 (3.8 MB) |
| Total local variables | 30,516 |
| Instructions (scanable bodies) | 1,878,151 |
| Data segments / bytes | 3,772 / 803,443 |
| Element segments / entries | 1 / 733 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `62c522dd1ab271d1.10604` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,486 | 174 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,918 | 2870 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,473 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,006,899 | 2870 |
| 11 | data | 833,928 | 3772 |
| 0 | custom:name | 30 | — |

## Types

174 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `WhpM.wYyp` | memory | `[128..14648]` |
| 0 | `WhpM.qHgd` | func | `(i32) -> (f64)` |
| 1 | `WhpM.y0Vb` | func | `() -> (i32)` |
| 2 | `WhpM.qAmW` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `WhpM.iF9X` | func | `(i32) -> ()` |
| 4 | `WhpM.eoOF` | func | `(i32 i32) -> (i32)` |
| 5 | `WhpM.OCEm` | func | `(i32) -> (i32)` |
| 6 | `WhpM.MCgw` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `WhpM.NKYT` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `WhpM.PmLJ` | func | `(i32) -> (i32)` |
| 9 | `WhpM.MSqf` | func | `(i32 i32) -> ()` |
| 10 | `WhpM.ODRT` | func | `(i32 i32) -> ()` |
| 11 | `WhpM.owm6` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `WhpM.ul6Q` | func | `(i32 i32) -> (i32)` |
| 13 | `WhpM.nPmp` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `WhpM.Sxfj` | func | `(i32) -> (i32)` |
| 15 | `WhpM.Rwzw` | func | `(i32 i32) -> (i32)` |
| 16 | `WhpM.LwZ8` | func | `(i32 i32) -> (i32)` |
| 17 | `WhpM.iGXr` | func | `(i32 i32) -> ()` |
| 18 | `WhpM.XIge` | func | `(i32) -> (i32)` |
| 19 | `WhpM.rWOg` | func | `(i32) -> (i32)` |
| 20 | `WhpM.Kwp5` | func | `(i32) -> (i32)` |
| 21 | `WhpM.xx5Y` | func | `(i32) -> ()` |
| 22 | `WhpM.oxS2` | func | `(i32 i32) -> ()` |
| 23 | `WhpM.nwwH` | func | `(i32 i32) -> ()` |
| 24 | `WhpM.lOwX` | func | `(i32) -> (i32)` |
| 25 | `WhpM.Nm2T` | func | `(i32 i32) -> ()` |
| 26 | `WhpM.D1gH` | func | `(i32 i32) -> (i32)` |
| 27 | `WhpM.V1Df` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `WhpM.niiq` | func | `(i32 i32) -> (i32)` |
| 29 | `WhpM.skT2` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `WhpM.YK36` | func | `(i32) -> (i32)` |
| 31 | `WhpM.CCYI` | func | `(i32 i32) -> ()` |
| 32 | `WhpM.XHfw` | func | `(i32) -> (i32)` |
| 33 | `WhpM.PpEz` | func | `(i32) -> (i32)` |
| 34 | `WhpM.FWtE` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `WhpM.aI7l` | func | `(i32) -> (i32)` |
| 36 | `WhpM.eENz` | func | `(i32) -> (i32)` |
| 37 | `WhpM.hXr3` | func | `(i32) -> (i32)` |
| 38 | `WhpM.J5Yl` | func | `(i32 i32) -> (i32)` |
| 39 | `WhpM.LhCO` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `WhpM.xlxE` | func | `(i32) -> (i32)` |
| 41 | `WhpM.iEjQ` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `WhpM.KzRg` | func | `() -> (f64)` |
| 43 | `WhpM.kz2s` | func | `(i32) -> (i32)` |
| 44 | `WhpM.Nnx7` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `WhpM.utVD` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `WhpM.TsAv` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `WhpM.OWgi` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `WhpM.VLcg` | func | `(i32 i32 i32) -> ()` |
| 49 | `WhpM.ugkw` | func | `(i32 i32 i32) -> ()` |
| 50 | `WhpM.nVv7` | func | `(i32 i32 i32) -> ()` |
| 51 | `WhpM.OnSU` | func | `(i32 i32) -> ()` |
| 52 | `WhpM.GRvq` | func | `(i32 i32) -> ()` |
| 53 | `WhpM.z2Bv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `WhpM.TIGQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `WhpM.qsBQ` | func | `(i32 f32 f32) -> ()` |
| 56 | `WhpM.GJt4` | func | `(i32 f32 f32) -> ()` |
| 57 | `WhpM.Zmgf` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `WhpM.kUeE` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `WhpM.kGsr` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `WhpM.XLvu` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `WhpM.btoW` | func | `(i32 i32 i32) -> ()` |
| 62 | `WhpM.obY3` | func | `(i32 i32 i32) -> ()` |
| 63 | `WhpM.oMN0` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `WhpM.Ds6Y` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `WhpM.t2GS` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `WhpM.pJ7o` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `WhpM.Zn7t` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `WhpM.ZLNq` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `WhpM.BtdI` | func | `(i32) -> (i32)` |
| 70 | `WhpM.L482` | func | `(i32) -> ()` |
| 71 | `WhpM.MCSr` | func | `(i32) -> (i32)` |
| 72 | `WhpM.KGMJ` | func | `(i32 i32) -> (i32)` |
| 73 | `WhpM.U5sx` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `WhpM.Cj5F` | func | `(i32 i32 i32) -> ()` |
| 75 | `WhpM.usnv` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `WhpM.CztV` | func | `() -> (f64)` |
| 77 | `WhpM.awAg` | func | `() -> (f64)` |
| 78 | `WhpM.wzsK` | func | `(i32 i32) -> ()` |
| 79 | `WhpM.k3yT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `WhpM.Qobr` | func | `(i32 i32 i32) -> ()` |
| 81 | `WhpM.Jimq` | func | `(i32 i32 i32) -> ()` |
| 82 | `WhpM.gYn1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `WhpM.E2od` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `WhpM.HYE3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `WhpM.Tg6X` | func | `(i32 i32) -> ()` |
| 86 | `WhpM.TylR` | func | `(i32 i32) -> ()` |
| 87 | `WhpM.h9PJ` | func | `(i32) -> (i32)` |
| 88 | `WhpM.Qe3l` | func | `(i32 i32) -> ()` |
| 89 | `WhpM.VA9w` | func | `(i32 i32) -> ()` |
| 90 | `WhpM.pb9N` | func | `(i32 i32 i32) -> ()` |
| 91 | `WhpM.yNtu` | func | `(i32 i32 i32) -> ()` |
| 92 | `WhpM.LUm0` | func | `(i32) -> (i32)` |
| 93 | `WhpM.KJAW` | func | `(i32) -> (i32)` |
| 94 | `WhpM.dtYp` | func | `(i32 i32) -> (i32)` |
| 95 | `WhpM.vDc8` | func | `(i32 i32) -> (i32)` |
| 96 | `WhpM.VIMp` | func | `(i32 i32) -> ()` |
| 97 | `WhpM.NSLN` | func | `(i32 i32) -> ()` |
| 98 | `WhpM.mP5G` | func | `(i32 i32 i32) -> ()` |
| 99 | `WhpM.zLRQ` | func | `(i32 i32 i32) -> ()` |
| 100 | `WhpM.zMuT` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `WhpM.uOzm` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `WhpM.F4iE` | func | `(i32 i32 f32) -> ()` |
| 103 | `WhpM.MRxk` | func | `(i32 i32 f32) -> ()` |
| 104 | `WhpM.DTZD` | func | `(i32 i32 i32) -> ()` |
| 105 | `WhpM.mj7i` | func | `(i32 i32 i32) -> ()` |
| 106 | `WhpM.Mxdj` | func | `(i32 i32 i32) -> ()` |
| 107 | `WhpM.dcyT` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `WhpM.X3r4` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `WhpM.dJNw` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `WhpM.Bd8i` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `WhpM.EiS5` | func | `(i32 i32) -> ()` |
| 112 | `WhpM.Qylh` | func | `(i32 i32) -> ()` |
| 113 | `WhpM.gmEz` | func | `(i32 i32) -> ()` |
| 114 | `WhpM.NkLo` | func | `(i32 i32) -> ()` |
| 115 | `WhpM.nSee` | func | `(i32) -> (i32)` |
| 116 | `WhpM.HXCh` | func | `(i32) -> (i32)` |
| 117 | `WhpM.iMfX` | func | `(i32) -> (i32)` |
| 118 | `WhpM.hEp0` | func | `(i32) -> (i32)` |
| 119 | `WhpM.pEP8` | func | `(i32 i32) -> ()` |
| 120 | `WhpM.e0Q9` | func | `(i32 i32) -> ()` |
| 121 | `WhpM.Kqle` | func | `(i32 i32) -> ()` |
| 122 | `WhpM.aw8U` | func | `(i32 i32) -> ()` |
| 123 | `WhpM.AGri` | func | `(i32 i32) -> ()` |
| 124 | `WhpM.Y6rP` | func | `(i32 i32) -> ()` |
| 125 | `WhpM.jnaj` | func | `(i32 i32) -> (i32)` |
| 126 | `WhpM.dkIc` | func | `(i32 i32) -> (i32)` |
| 127 | `WhpM.Ow0E` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `WhpM.eIwE` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `WhpM.UlIB` | func | `(i32 i32) -> ()` |
| 130 | `WhpM.ANQH` | func | `(i32 i32) -> ()` |
| 131 | `WhpM.d4u7` | func | `(i32) -> (i32)` |
| 132 | `WhpM.a9ZJ` | func | `(i32 i32) -> ()` |
| 133 | `WhpM.hwDU` | func | `(i32 i32) -> ()` |
| 134 | `WhpM.Rgiv` | func | `(i32 i32 i32) -> ()` |
| 135 | `WhpM.f94p` | func | `(i32 i32 i32) -> ()` |
| 136 | `WhpM.ER29` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `WhpM.TWDr` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `WhpM.PiIz` | func | `(i32 i32) -> ()` |
| 139 | `WhpM.RcOI` | func | `(i32 i32 i32) -> ()` |
| 140 | `WhpM.vEYR` | func | `(i32 i32 i32) -> ()` |
| 141 | `WhpM.cayG` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `WhpM.Hyi9` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `WhpM.y7YZ` | func | `(i32 i32 i32) -> ()` |
| 144 | `WhpM.lM06` | func | `(i32 i32 i32) -> ()` |
| 145 | `WhpM.n46d` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `WhpM.WQ3W` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `WhpM.Rmur` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `WhpM.yscy` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `WhpM.enGe` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `WhpM.TA11` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `WhpM.lFUW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `WhpM.u6jQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `WhpM.DyKy` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `WhpM.owRi` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `WhpM.m9KP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `WhpM.cUEZ` | func | `(i32) -> (i32)` |
| 157 | `WhpM.gAQA` | func | `(i32) -> (i32)` |
| 158 | `WhpM.Cxrj` | func | `(i32) -> (i32)` |
| 159 | `WhpM.XMep` | func | `(i32) -> (i32)` |
| 160 | `WhpM.kvXv` | func | `() -> (i32)` |
| 161 | `WhpM.rlH2` | func | `() -> (i32)` |
| 162 | `WhpM.NyhU` | func | `() -> (i32)` |
| 163 | `WhpM.wdSC` | func | `() -> (i32)` |
| 164 | `WhpM.BD9p` | func | `(i32 i32) -> (i32)` |
| 165 | `WhpM.NZx0` | func | `(i32) -> ()` |
| 166 | `WhpM.T3ip` | func | `(i32 i32) -> (i32)` |
| 167 | `WhpM.kyKr` | func | `(i32) -> (i32)` |
| 168 | `WhpM.KDfK` | func | `(i32) -> (i32)` |
| 169 | `WhpM.KCuB` | func | `(i32) -> (i32)` |
| 170 | `WhpM.r3p9` | func | `(i32) -> ()` |
| 171 | `WhpM.cxH5` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `WhpM.K12O` | func | `(i32) -> (i32)` |
| 173 | `WhpM.DfJj` | func | `(i32) -> (i32)` |
| 174 | `WhpM.aeKX` | func | `(i32 i32) -> (i32)` |
| 175 | `WhpM.R5Yk` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `WhpM.fusr` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `WhpM.vLS5` | func | `(i32) -> (i32)` |
| 178 | `WhpM.T8Sh` | func | `(i32) -> (i32)` |
| 179 | `WhpM.Kml2` | func | `(i32) -> (i32)` |
| 180 | `WhpM.HdAY` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `WhpM.DCh8` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `WhpM.CLgw` | func | `(i32 i32) -> ()` |
| 183 | `WhpM.N7rd` | func | `(i32 i32 i32) -> ()` |
| 184 | `WhpM.WdnX` | func | `(i32 i32) -> ()` |
| 185 | `WhpM.QNx8` | func | `(i32 i32 i32) -> ()` |
| 186 | `WhpM.ZIK0` | func | `(i32 i32) -> ()` |
| 187 | `WhpM.aJea` | func | `(i32 i32) -> ()` |
| 188 | `WhpM.IVYa` | func | `(i32) -> (i32)` |
| 189 | `WhpM.bkpt` | func | `(i32 i32) -> (i32)` |
| 190 | `WhpM.SGAV` | func | `(i32) -> ()` |
| 191 | `WhpM.pKiM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `WhpM.Eyja` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `WhpM.zUww` | func | `(i32 i32) -> ()` |
| 194 | `WhpM.TFoH` | func | `(i32 i32) -> ()` |
| 195 | `WhpM.Z1BT` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `WhpM.eEBe` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `WhpM.wG2n` | func | `(i32 f32) -> ()` |
| 198 | `WhpM.dj4p` | func | `(i32 f32) -> ()` |
| 199 | `WhpM.PfZF` | func | `(i32 i32) -> ()` |
| 200 | `WhpM.b4fe` | func | `(i32 i32) -> ()` |
| 201 | `WhpM.yI57` | func | `(i32) -> (i32)` |
| 202 | `WhpM.kDdF` | func | `(i32) -> (i32)` |
| 203 | `WhpM.AR0k` | func | `(i32) -> (i32)` |
| 204 | `WhpM.vgD2` | func | `(i32) -> (i32)` |
| 205 | `WhpM.ChWd` | func | `(i32 i32 i32) -> ()` |
| 206 | `WhpM.Nmqf` | func | `(i32 i32 i32) -> ()` |
| 207 | `WhpM.siLF` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `WhpM.mNBe` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `WhpM.dOgs` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `WhpM.SuZ3` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `WhpM.WAfu` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `WhpM.Edlk` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `WhpM.BiCp` | func | `(i32 i32) -> ()` |
| 214 | `WhpM.ZLFK` | func | `(i32 i32) -> ()` |
| 215 | `WhpM.vfVj` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `WhpM.rtbY` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `WhpM.kacG` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `WhpM.U7Or` | func | `(i32) -> (i32)` |
| 219 | `WhpM.T9kQ` | func | `(i32) -> (i32)` |
| 220 | `WhpM.yEsR` | func | `(i32 i32) -> ()` |
| 221 | `WhpM.aDsh` | func | `(i32 i32) -> ()` |
| 222 | `WhpM.K7Xn` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `WhpM.C3gC` | func | `(i32) -> (i32)` |
| 224 | `WhpM.oVBM` | func | `(i32) -> (i32)` |
| 225 | `WhpM.Uj5g` | func | `(i32 i32) -> ()` |
| 226 | `WhpM.waNL` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `WhpM.bRvJ` | func | `(i32 i32) -> ()` |
| 228 | `WhpM.uRiJ` | func | `(i32 i32) -> ()` |
| 229 | `WhpM.zIuq` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `WhpM.NtlH` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `WhpM.NSZP` | func | `(i32 i32 i32) -> ()` |
| 232 | `WhpM.g65w` | func | `(i32 i32 i32) -> ()` |
| 233 | `WhpM.I5hU` | func | `(i32 i32) -> ()` |
| 234 | `WhpM.GSfG` | func | `(i32 i32) -> ()` |
| 235 | `WhpM.G10V` | func | `(i32 i32) -> ()` |
| 236 | `WhpM.AZO5` | func | `(i32 i32) -> ()` |
| 237 | `WhpM.Iaro` | func | `(i32 i32) -> ()` |
| 238 | `WhpM.FYE8` | func | `(i32 i32) -> ()` |
| 239 | `WhpM.JOAa` | func | `(i32 f32 f32) -> ()` |
| 240 | `WhpM.iNH0` | func | `(i32 f32 f32) -> ()` |
| 241 | `WhpM.ZsZy` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `WhpM.WGu4` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `WhpM.Giic` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `WhpM.gucT` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `WhpM.mn62` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `WhpM.fLs4` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `WhpM.mDab` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `WhpM.SpnP` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `WhpM.IRA7` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `WhpM.J6qQ` | func | `(i32) -> ()` |
| 251 | `WhpM.ElbX` | func | `(i32 i32) -> ()` |
| 252 | `WhpM.A245` | func | `(i32 i32) -> ()` |
| 253 | `WhpM.Rdz5` | func | `(i32 i32) -> ()` |
| 254 | `WhpM.WgGb` | func | `(i32 i32) -> ()` |
| 255 | `WhpM.ElbK` | func | `(i32 i32) -> ()` |
| 256 | `WhpM.aZcP` | func | `(i32 i32) -> ()` |
| 257 | `WhpM.ja53` | func | `(i32 i32) -> ()` |
| 258 | `WhpM.FlLA` | func | `(i32 i32) -> ()` |
| 259 | `WhpM.zu9a` | func | `(i32) -> (i32)` |
| 260 | `WhpM.toNd` | func | `(i32) -> (i32)` |
| 261 | `WhpM.xwsr` | func | `(i32) -> (i32)` |
| 262 | `WhpM.dkO4` | func | `(i32) -> (i32)` |
| 263 | `WhpM.htUP` | func | `(i32) -> ()` |
| 264 | `WhpM.sV8L` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `WhpM.AewC` | func | `(i32) -> ()` |
| 266 | `WhpM.KnNS` | func | `(i32) -> (i32)` |
| 267 | `WhpM.tA9P` | func | `(i32) -> (i32)` |
| 268 | `WhpM.rxUw` | func | `(i32) -> (i32)` |
| 269 | `WhpM.MIfW` | func | `(i32) -> (i32)` |
| 270 | `WhpM.Ku5M` | func | `(i32 i32) -> ()` |
| 271 | `WhpM.AZv1` | func | `(i32) -> ()` |
| 272 | `WhpM.As9N` | func | `(i32 i32) -> ()` |
| 273 | `WhpM.YZg9` | func | `(i32) -> (i32)` |
| 274 | `WhpM.nxu1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `WhpM.NJTL` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `WhpM.INML` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `WhpM.lmD5` | func | `(i32 i32) -> (i32)` |
| 278 | `WhpM.AVRB` | func | `(i32 i32) -> (i32)` |
| 279 | `WhpM.tXRa` | func | `(i32 i32) -> (i32)` |
| 280 | `WhpM.a9sy` | func | `(i32 i32) -> (i32)` |
| 281 | `WhpM.ymO3` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `UwwY` | func | 2962 | `(i32) -> (i32 i32)` |
| `Uofy` | func | 2929 | `(i32 i32) -> ()` |
| `Zwna` | func | 2413 | `(i32) -> (i32)` |
| `qdJy` | func | 2443 | `(i32 i32) -> ()` |
| `x3oI` | func | 2435 | `(i32) -> (i32)` |
| `Jgxv` | func | 2511 | `() -> (i32)` |
| `JvC9` | func | 1993 | `(i32 f64 f64 f64) -> (i32)` |
| `g1ph` | func | 1856 | `(i32) -> ()` |
| `F7Rl` | func | 2302 | `(i32 i32) -> (i32)` |
| `OYoz` | func | 1692 | `(i32) -> (i32)` |
| `YhH9` | func | 3117 | `(i32) -> (i32)` |
| `A6Qm` | func | 1151 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `EFS6` | func | 3000 | `(i32 i32 i32 i32) -> ()` |
| `tinO` | func | 2947 | `(i32 i32 i32) -> (i32 i32)` |
| `vpMX` | func | 1385 | `(i32 i32) -> (i32)` |
| `NDTS` | func | 686 | `(i32 i32) -> (i32)` |
| `UizX` | func | 1462 | `(i32 i32) -> (i32)` |
| `gRht` | func | 1408 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `sJ4Z` | func | 2456 | `(i32 i32) -> (i32)` |
| `MyrD` | func | 2033 | `(i32 i32) -> (i32)` |
| `dFam` | func | 3038 | `() -> (i32)` |
| `OEqw` | func | 870 | `(i32 i32) -> (i32)` |
| `vNR5` | func | 1240 | `(i32 i32 i32) -> (i32)` |
| `qghw` | func | 2466 | `(i32) -> (i32)` |
| `CcT2` | func | 1199 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Yav9` | func | 1455 | `(i32) -> (i32)` |
| `YY7U` | func | 2455 | `(i32) -> (i32)` |
| `lf8F` | func | 1445 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `z8is` | func | 2948 | `(i32 i32 i32) -> (i32 i32)` |
| `BKON` | func | 1671 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `N9VB` | func | 1898 | `(i32) -> (i32)` |
| `ypss` | func | 2330 | `(i32 i32) -> (i32)` |
| `Af06` | func | 1091 | `(i32 i32) -> ()` |
| `YgGp` | func | 2977 | `() -> (i32 i32)` |
| `JUHP` | func | 719 | `(i32) -> (i32)` |
| `eGbT` | func | 869 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `u7bG` | func | 2464 | `(i32) -> (i32)` |
| `W52n` | func | 2965 | `(i32) -> (i32 i32)` |
| `J70q` | func | 1915 | `(i32 i32 i32 i32) -> ()` |
| `SuCv` | func | 648 | `(i32 i32) -> (i32)` |
| `Ziux` | func | 2976 | `() -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `BGKb` | func | 1783 | `() -> (i32)` |
| `xZhA` | func | 3010 | `(i32 i32) -> ()` |
| `St50` | func | 2978 | `() -> (i32 i32)` |
| `gS4X` | func | 2500 | `(i32 i32) -> ()` |
| `Soc0` | func | 2964 | `(i32) -> (i32 i32)` |
| `kJlu` | func | 1913 | `(i32) -> (i32)` |
| `hCJT` | func | 3072 | `() -> ()` |
| `L3fa` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `HSnb` | func | 2115 | `(i32 i32) -> (i32)` |
| `hrGs` | func | 1490 | `(i32 f64) -> (f64)` |
| `AyNX` | func | 3142 | `() -> (i32)` |
| `mjZ9` | func | 2385 | `(i32) -> (i32)` |
| `L56c` | func | 2448 | `(i32) -> (i32)` |
| `rxuI` | global | 1 | `` |
| `xxL4` | func | 3065 | `(i32 i32 i32) -> ()` |
| `PV5J` | func | 2457 | `(i32 i32) -> (i32)` |
| `AW2V` | func | 2433 | `(i32) -> ()` |
| `MUMp` | func | 2544 | `() -> (i32)` |
| `wpoC` | func | 1502 | `(i32 i32 i32) -> (i32)` |
| `qAxf` | func | 2447 | `(i32 i32) -> ()` |
| `VBWy` | func | 2436 | `(i32) -> (i32)` |
| `RRXC` | func | 2781 | `(i32) -> (i32)` |
| `kV2q` | func | 1090 | `(i32 i32) -> (i32)` |
| `iZh7` | func | 1487 | `(i32 i32) -> (i32)` |
| `XjyN` | func | 2738 | `(i32) -> (i32)` |
| `s3Jp` | func | 1565 | `(i32 i32) -> ()` |
| `XIpp` | func | 1823 | `(i32 i32 f64 f64 f64) -> ()` |
| `KxYz` | func | 660 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `osaS` | func | 2445 | `(i32) -> (i32)` |
| `UvE5` | global | 2 | `` |
| `Moor` | func | 2146 | `(i32 i32) -> (i32)` |
| `WuTn` | func | 2009 | `(i32 i32) -> ()` |
| `I8vM` | func | 2957 | `(i32 i32) -> (i32 i32)` |
| `kjZd` | func | 2954 | `(i32 i32) -> (i32 i32)` |
| `mYgZ` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `YZcA` | func | 1272 | `(i32 i32) -> (i32)` |
| `N4qM` | func | 793 | `(i32 i32) -> (i32)` |
| `eR0z` | func | 2430 | `(i32) -> (i32)` |
| `SCp6` | func | 1415 | `(i32) -> (i32)` |
| `mv7x` | func | 1412 | `() -> (i32)` |
| `iXV6` | func | 2956 | `(i32 i32) -> (i32 i32)` |
| `DES2` | func | 1606 | `(i32 i32 i32 i32) -> (i32)` |
| `ywvq` | func | 1298 | `(i32) -> ()` |
| `FWcW` | func | 2432 | `(i32) -> (i32)` |
| `UNkW` | func | 2384 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `yAcW` | func | 1245 | `(i32 i32 i32) -> ()` |
| `BlhB` | func | 2918 | `(i32 i32) -> (i32)` |
| `Jr1o` | func | 1949 | `(i32 i32) -> ()` |
| `z3vr` | func | 2758 | `(i32) -> ()` |
| `AKsL` | func | 2899 | `() -> ()` |
| `ILlF` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `RJ60` | func | 2343 | `(i32 i32 i32 i32) -> (i32)` |
| `vJYq` | func | 1975 | `(i32 f64) -> (i32)` |
| `oyIV` | func | 2958 | `(i32 i32) -> (i32 i32)` |
| `zGun` | func | 2221 | `(i32 f64) -> (i32)` |
| `MUzs` | func | 3071 | `(i32) -> ()` |
| `lyZj` | func | 2923 | `(i32 i32 i32 i32) -> (i32)` |
| `ehEN` | func | 1475 | `(i32 i32) -> (i32)` |
| `X7X8` | func | 1707 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `efhh` | func | 2952 | `(i32 i32) -> (i32 i32)` |
| `Ee4u` | func | 2429 | `(i32) -> (i32)` |
| `ZC1H` | func | 2299 | `(i32 i32) -> (i32)` |
| `rtJN` | func | 1564 | `(i32 i32) -> ()` |
| `nyU2` | func | 3141 | `() -> (i32)` |
| `GG2w` | func | 3009 | `(i32 i32 i32) -> ()` |
| `rXNl` | func | 2427 | `(i32) -> (i32)` |
| `GmsD` | func | 3118 | `(i32) -> ()` |
| `Kgql` | func | 2446 | `(i32) -> (i32)` |
| `WEGw` | func | 1364 | `(i32 f64 f64) -> (i32)` |
| `AGzM` | func | 548 | `(i32 i32 i32) -> (i32)` |
| `UpNw` | func | 1848 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `SP8v` | func | 1714 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ddxn` | func | 1450 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `kHYR` | func | 1433 | `(i32 i32 i32 i32) -> ()` |
| `qkKu` | func | 1192 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `QD3I` | func | 2963 | `(i32) -> (i32 i32)` |
| `yqce` | func | 2747 | `(i32) -> (i32)` |
| `VO3i` | func | 1222 | `(i32 i32) -> (i32)` |
| `Njt8` | func | 1788 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `Yfkx` | func | 725 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `hGsp` | func | 2953 | `(i32 i32) -> (i32 i32)` |
| `taR2` | func | 2543 | `(i32 i32) -> ()` |
| `bKQN` | func | 1569 | `(i32 f64 f64 f64) -> (i32)` |
| `WfYM` | func | 1553 | `(i32 i32) -> (i32)` |
| `ydXZ` | func | 899 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Xsq1` | func | 2717 | `(i32) -> (i32)` |
| `PRuC` | func | 1857 | `(i32) -> ()` |
| `wzhL` | func | 1363 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `GXFa` | func | 2368 | `(i32) -> (i32)` |
| `iCJj` | func | 2301 | `(i32 i32) -> (i32)` |
| `tT3V` | func | 3113 | `() -> (f64)` |
| `ekG7` | func | 2412 | `(i32 i32) -> ()` |
| `qwZq` | func | 2966 | `(i32) -> (i32 i32)` |
| `jlxq` | func | 2434 | `(i32) -> (i32)` |
| `JkoZ` | func | 598 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `uzA7` | func | 2724 | `(i32) -> (i32)` |
| `EK7N` | func | 1841 | `(i32 i32) -> (i32)` |
| `mnLq` | func | 1725 | `(i32 i32) -> (i32)` |
| `qGUk` | func | 2426 | `(i32) -> (f64)` |
| `JbKe` | func | 1803 | `(i32 i32 i32 i32) -> (i32)` |
| `Ku5O` | func | 2465 | `(i32) -> (i32)` |
| `VyIC` | func | 889 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `DATp` | func | 2251 | `(i32 i32) -> ()` |
| `Nowa` | func | 1193 | `(i32 i32 i32 i32) -> (i32)` |
| `clZD` | func | 1454 | `(i32 i32 i32 i32) -> (i32)` |
| `jXAa` | func | 2167 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `k9gj` | func | 2428 | `(i32) -> (i32)` |
| `B1lL` | func | 2955 | `(i32 i32) -> (i32 i32)` |
| `ue1H` | func | 1264 | `(i32) -> (i32)` |
| `HmS2` | func | 1831 | `(i32 i32) -> ()` |
| `ZnxV` | func | 2431 | `(i32) -> (i32)` |
| `fHkX` | func | 1486 | `(i32 i32) -> (i32)` |
| `mVqE` | func | 2300 | `(i32 i32) -> (i32)` |
| `E2PZ` | func | 2220 | `(i32 i32) -> ()` |
| `YCxL` | func | 1314 | `(i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 734 · max 734
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2016672, `i32` = i32.const 2017236

## Functions

- 2,870 bodies · 4,001,633 code bytes · avg 1.4 KB
- instruction scan: 2,870 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 105 |
| <= 128 bytes | 252 |
| <= 256 bytes | 365 |
| <= 512 bytes | 666 |
| <= 1024 bytes | 572 |
| <= 2048 bytes | 420 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 89 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 217 | 194,712 | 88,375 | local.get×25902, i32.const×9917, i32.load×5640, local.set×4735, local.tee×4639 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,484 | 54,537 | local.get×15175, i32.const×6560, i32.add×3203, local.set×3090, i32.load×2945 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 125 | 48,661 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,622 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,547 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,727 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 62 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 191 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 221 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 716 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 717 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1559 | `(i32 i32) -> (i32)` | 180 | 54,752 | 19,856 | local.get×6592, i32.const×2623, i64.store×1913, i64.const×1078, i64.load×1056 |
| 1960 | `(i32 i32) -> ()` | 110 | 40,255 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2552 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2821 | `(i32 i32 i32 i32) -> ()` | 137 | 31,353 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2840 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13_
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
| `local.get` | 535,343 |
| `i32.const` | 224,289 |
| `local.tee` | 99,522 |
| `i32.load` | 93,534 |
| `local.set` | 93,531 |
| `i32.add` | 86,525 |
| `end` | 78,627 |
| `br_if` | 64,003 |
| `i32.store` | 46,212 |
| `block` | 37,026 |
| `i64.const` | 32,308 |
| `i64.store` | 31,416 |
| `if` | 29,982 |
| `call` | 28,913 |
| `i32.sub` | 24,478 |
| `i64.load` | 23,293 |
| `br` | 23,069 |
| `i32.eqz` | 19,409 |
| `select` | 16,880 |
| `i32.shl` | 16,361 |
| `i32.and` | 16,325 |
| `i32.ne` | 15,778 |
| `i32.load8_u` | 14,842 |
| `i32.eq` | 13,841 |
| `i32.store8` | 12,560 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,870/2,870 (degraded: 0)
