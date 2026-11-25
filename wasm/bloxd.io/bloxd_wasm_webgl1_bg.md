# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `c6gaap.4d6587ec` · analyzed 2026-11-25T09:11:16+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.2b4b18dd5ccafb0a60d9.wasm
> 4,851,467 bytes (4.6 MB) · sha256 `729c4755d993e2a2…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `62c522dd1ab271d1.10604` → `2b7ac69b3b622df6.10604` (numeric version suffix unchanged — same module version, re-randomized prefix)
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
| name-section module id | `2b7ac69b3b622df6.10604` |
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
| 0 | `nO01.fHYI` | memory | `[128..14648]` |
| 0 | `nO01.MOEr` | func | `(i32) -> (f64)` |
| 1 | `nO01.lnVe` | func | `() -> (i32)` |
| 2 | `nO01.ufuD` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `nO01.BSwC` | func | `(i32) -> ()` |
| 4 | `nO01.yLM9` | func | `(i32 i32) -> (i32)` |
| 5 | `nO01.Yib1` | func | `(i32) -> (i32)` |
| 6 | `nO01.mF1p` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `nO01.aDz5` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `nO01.NMCn` | func | `(i32) -> (i32)` |
| 9 | `nO01.bfNZ` | func | `(i32 i32) -> ()` |
| 10 | `nO01.CN3S` | func | `(i32 i32) -> ()` |
| 11 | `nO01.xBc8` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `nO01.KQHj` | func | `(i32 i32) -> (i32)` |
| 13 | `nO01.kYhN` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `nO01.b7RI` | func | `(i32) -> (i32)` |
| 15 | `nO01.LjQ2` | func | `(i32 i32) -> (i32)` |
| 16 | `nO01.EjSi` | func | `(i32 i32) -> (i32)` |
| 17 | `nO01.lcl6` | func | `(i32 i32) -> ()` |
| 18 | `nO01.zEsb` | func | `(i32) -> (i32)` |
| 19 | `nO01.Sdf9` | func | `(i32) -> (i32)` |
| 20 | `nO01.cRag` | func | `(i32) -> (i32)` |
| 21 | `nO01.hkkD` | func | `(i32) -> ()` |
| 22 | `nO01.VXj9` | func | `(i32 i32) -> ()` |
| 23 | `nO01.CJ3s` | func | `(i32 i32) -> ()` |
| 24 | `nO01.dGDt` | func | `(i32) -> (i32)` |
| 25 | `nO01.PNuL` | func | `(i32 i32) -> ()` |
| 26 | `nO01.yf5v` | func | `(i32 i32) -> (i32)` |
| 27 | `nO01.G5j1` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `nO01.W2g7` | func | `(i32 i32) -> (i32)` |
| 29 | `nO01.sJP8` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `nO01.A6t4` | func | `(i32) -> (i32)` |
| 31 | `nO01.C3Ec` | func | `(i32 i32) -> ()` |
| 32 | `nO01.aqlG` | func | `(i32) -> (i32)` |
| 33 | `nO01.MIf4` | func | `(i32) -> (i32)` |
| 34 | `nO01.J2dq` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `nO01.fXil` | func | `(i32) -> (i32)` |
| 36 | `nO01.rNjJ` | func | `(i32) -> (i32)` |
| 37 | `nO01.w0Ba` | func | `(i32) -> (i32)` |
| 38 | `nO01.Fy0b` | func | `(i32 i32) -> (i32)` |
| 39 | `nO01.WzzM` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `nO01.w86s` | func | `(i32) -> (i32)` |
| 41 | `nO01.iQCt` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `nO01.D0Ok` | func | `() -> (f64)` |
| 43 | `nO01.nQKn` | func | `(i32) -> (i32)` |
| 44 | `nO01.oZBc` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `nO01.ou5w` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `nO01.iccm` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `nO01.BeYK` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `nO01.HdMl` | func | `(i32 i32 i32) -> ()` |
| 49 | `nO01.OmqE` | func | `(i32 i32 i32) -> ()` |
| 50 | `nO01.lPqY` | func | `(i32 i32 i32) -> ()` |
| 51 | `nO01.ezxO` | func | `(i32 i32) -> ()` |
| 52 | `nO01.CAE1` | func | `(i32 i32) -> ()` |
| 53 | `nO01.EErd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `nO01.bJak` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `nO01.avqG` | func | `(i32 f32 f32) -> ()` |
| 56 | `nO01.k87o` | func | `(i32 f32 f32) -> ()` |
| 57 | `nO01.j0Fc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `nO01.OMIn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `nO01.BdEy` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `nO01.ga4a` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `nO01.HVYb` | func | `(i32 i32 i32) -> ()` |
| 62 | `nO01.x589` | func | `(i32 i32 i32) -> ()` |
| 63 | `nO01.HqQW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `nO01.QOlF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `nO01.omGy` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `nO01.Iwv3` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `nO01.l3DB` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `nO01.Wmje` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `nO01.RMdT` | func | `(i32) -> (i32)` |
| 70 | `nO01.IgIR` | func | `(i32) -> ()` |
| 71 | `nO01.SP0o` | func | `(i32) -> (i32)` |
| 72 | `nO01.p5Od` | func | `(i32 i32) -> (i32)` |
| 73 | `nO01.ku6s` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `nO01.QGdC` | func | `(i32 i32 i32) -> ()` |
| 75 | `nO01.GChn` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `nO01.XqsX` | func | `() -> (f64)` |
| 77 | `nO01.AnQp` | func | `() -> (f64)` |
| 78 | `nO01.nbrw` | func | `(i32 i32) -> ()` |
| 79 | `nO01.wQQD` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `nO01.huZq` | func | `(i32 i32 i32) -> ()` |
| 81 | `nO01.pgxm` | func | `(i32 i32 i32) -> ()` |
| 82 | `nO01.LWOI` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `nO01.TYqt` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `nO01.RZy6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `nO01.CHHM` | func | `(i32 i32) -> ()` |
| 86 | `nO01.Odq2` | func | `(i32 i32) -> ()` |
| 87 | `nO01.fuvl` | func | `(i32) -> (i32)` |
| 88 | `nO01.P2HQ` | func | `(i32 i32) -> ()` |
| 89 | `nO01.LnGh` | func | `(i32 i32) -> ()` |
| 90 | `nO01.uk9r` | func | `(i32 i32 i32) -> ()` |
| 91 | `nO01.mPxf` | func | `(i32 i32 i32) -> ()` |
| 92 | `nO01.p1DU` | func | `(i32) -> (i32)` |
| 93 | `nO01.iiad` | func | `(i32) -> (i32)` |
| 94 | `nO01.lFhq` | func | `(i32 i32) -> (i32)` |
| 95 | `nO01.LRFn` | func | `(i32 i32) -> (i32)` |
| 96 | `nO01.nguH` | func | `(i32 i32) -> ()` |
| 97 | `nO01.IkwN` | func | `(i32 i32) -> ()` |
| 98 | `nO01.QwS4` | func | `(i32 i32 i32) -> ()` |
| 99 | `nO01.J6zN` | func | `(i32 i32 i32) -> ()` |
| 100 | `nO01.dKTH` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `nO01.Soue` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `nO01.NzcH` | func | `(i32 i32 f32) -> ()` |
| 103 | `nO01.Sk4a` | func | `(i32 i32 f32) -> ()` |
| 104 | `nO01.CvvU` | func | `(i32 i32 i32) -> ()` |
| 105 | `nO01.SyKR` | func | `(i32 i32 i32) -> ()` |
| 106 | `nO01.KacU` | func | `(i32 i32 i32) -> ()` |
| 107 | `nO01.oHil` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `nO01.GwUa` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `nO01.bMCx` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `nO01.OnCo` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `nO01.tQRT` | func | `(i32 i32) -> ()` |
| 112 | `nO01.DmBb` | func | `(i32 i32) -> ()` |
| 113 | `nO01.TFpU` | func | `(i32 i32) -> ()` |
| 114 | `nO01.sYHQ` | func | `(i32 i32) -> ()` |
| 115 | `nO01.ROoX` | func | `(i32) -> (i32)` |
| 116 | `nO01.sK9o` | func | `(i32) -> (i32)` |
| 117 | `nO01.MErK` | func | `(i32) -> (i32)` |
| 118 | `nO01.s1yR` | func | `(i32) -> (i32)` |
| 119 | `nO01.I8Rn` | func | `(i32 i32) -> ()` |
| 120 | `nO01.Cnrk` | func | `(i32 i32) -> ()` |
| 121 | `nO01.Nkpx` | func | `(i32 i32) -> ()` |
| 122 | `nO01.cKYA` | func | `(i32 i32) -> ()` |
| 123 | `nO01.N5hk` | func | `(i32 i32) -> ()` |
| 124 | `nO01.ESSW` | func | `(i32 i32) -> ()` |
| 125 | `nO01.xSFq` | func | `(i32 i32) -> (i32)` |
| 126 | `nO01.cfGv` | func | `(i32 i32) -> (i32)` |
| 127 | `nO01.C8zr` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `nO01.iBDL` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `nO01.GB2H` | func | `(i32 i32) -> ()` |
| 130 | `nO01.wttX` | func | `(i32 i32) -> ()` |
| 131 | `nO01.dRiU` | func | `(i32) -> (i32)` |
| 132 | `nO01.Fm93` | func | `(i32 i32) -> ()` |
| 133 | `nO01.bdqw` | func | `(i32 i32) -> ()` |
| 134 | `nO01.wVKN` | func | `(i32 i32 i32) -> ()` |
| 135 | `nO01.XWhP` | func | `(i32 i32 i32) -> ()` |
| 136 | `nO01.hNeH` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `nO01.lMPv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `nO01.ynlp` | func | `(i32 i32) -> ()` |
| 139 | `nO01.wCUZ` | func | `(i32 i32 i32) -> ()` |
| 140 | `nO01.pcBT` | func | `(i32 i32 i32) -> ()` |
| 141 | `nO01.LqKq` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `nO01.UWHd` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `nO01.UMlX` | func | `(i32 i32 i32) -> ()` |
| 144 | `nO01.tSnK` | func | `(i32 i32 i32) -> ()` |
| 145 | `nO01.y2Jm` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `nO01.PLMe` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `nO01.QzRM` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `nO01.CbU8` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `nO01.awbI` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `nO01.mt8V` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `nO01.Aorc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `nO01.hm9X` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `nO01.XWlP` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `nO01.G1JJ` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `nO01.GHuN` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `nO01.dgC8` | func | `(i32) -> (i32)` |
| 157 | `nO01.ulGT` | func | `(i32) -> (i32)` |
| 158 | `nO01.QcJv` | func | `(i32) -> (i32)` |
| 159 | `nO01.hXFP` | func | `(i32) -> (i32)` |
| 160 | `nO01.jHhI` | func | `() -> (i32)` |
| 161 | `nO01.tl5T` | func | `() -> (i32)` |
| 162 | `nO01.qOyT` | func | `() -> (i32)` |
| 163 | `nO01.NQ8p` | func | `() -> (i32)` |
| 164 | `nO01.GpZZ` | func | `(i32 i32) -> (i32)` |
| 165 | `nO01.TMIk` | func | `(i32) -> ()` |
| 166 | `nO01.bbmY` | func | `(i32 i32) -> (i32)` |
| 167 | `nO01.sTBx` | func | `(i32) -> (i32)` |
| 168 | `nO01.FrAG` | func | `(i32) -> (i32)` |
| 169 | `nO01.uwSp` | func | `(i32) -> (i32)` |
| 170 | `nO01.RpeI` | func | `(i32) -> ()` |
| 171 | `nO01.oygF` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `nO01.yUoa` | func | `(i32) -> (i32)` |
| 173 | `nO01.BENi` | func | `(i32) -> (i32)` |
| 174 | `nO01.DAQM` | func | `(i32 i32) -> (i32)` |
| 175 | `nO01.Fix2` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `nO01.mL9O` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `nO01.vYhp` | func | `(i32) -> (i32)` |
| 178 | `nO01.o4TU` | func | `(i32) -> (i32)` |
| 179 | `nO01.olfe` | func | `(i32) -> (i32)` |
| 180 | `nO01.BmSV` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `nO01.tBsM` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `nO01.BMjW` | func | `(i32 i32) -> ()` |
| 183 | `nO01.iThB` | func | `(i32 i32 i32) -> ()` |
| 184 | `nO01.cJov` | func | `(i32 i32) -> ()` |
| 185 | `nO01.c82t` | func | `(i32 i32 i32) -> ()` |
| 186 | `nO01.jtRH` | func | `(i32 i32) -> ()` |
| 187 | `nO01.z3Qw` | func | `(i32 i32) -> ()` |
| 188 | `nO01.jzZF` | func | `(i32) -> (i32)` |
| 189 | `nO01.kR9e` | func | `(i32 i32) -> (i32)` |
| 190 | `nO01.l22y` | func | `(i32) -> ()` |
| 191 | `nO01.nAsz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `nO01.nYcD` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `nO01.pBYM` | func | `(i32 i32) -> ()` |
| 194 | `nO01.dakz` | func | `(i32 i32) -> ()` |
| 195 | `nO01.Aj0c` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `nO01.lRkW` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `nO01.w5sy` | func | `(i32 f32) -> ()` |
| 198 | `nO01.z45R` | func | `(i32 f32) -> ()` |
| 199 | `nO01.xAl5` | func | `(i32 i32) -> ()` |
| 200 | `nO01.Ru1Q` | func | `(i32 i32) -> ()` |
| 201 | `nO01.EtSY` | func | `(i32) -> (i32)` |
| 202 | `nO01.WvS9` | func | `(i32) -> (i32)` |
| 203 | `nO01.MTR0` | func | `(i32) -> (i32)` |
| 204 | `nO01.l0pu` | func | `(i32) -> (i32)` |
| 205 | `nO01.jnzv` | func | `(i32 i32 i32) -> ()` |
| 206 | `nO01.JJjn` | func | `(i32 i32 i32) -> ()` |
| 207 | `nO01.TksA` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `nO01.P04a` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `nO01.ZuGr` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `nO01.WlR0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `nO01.OzwK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `nO01.HwoX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `nO01.EWUH` | func | `(i32 i32) -> ()` |
| 214 | `nO01.KTS0` | func | `(i32 i32) -> ()` |
| 215 | `nO01.iQIf` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `nO01.Ercd` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `nO01.RVgA` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `nO01.OHQ2` | func | `(i32) -> (i32)` |
| 219 | `nO01.kypO` | func | `(i32) -> (i32)` |
| 220 | `nO01.pCPy` | func | `(i32 i32) -> ()` |
| 221 | `nO01.L0r8` | func | `(i32 i32) -> ()` |
| 222 | `nO01.bF7k` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `nO01.cIir` | func | `(i32) -> (i32)` |
| 224 | `nO01.yT6Q` | func | `(i32) -> (i32)` |
| 225 | `nO01.sC65` | func | `(i32 i32) -> ()` |
| 226 | `nO01.pE30` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `nO01.iyTx` | func | `(i32 i32) -> ()` |
| 228 | `nO01.XzQ2` | func | `(i32 i32) -> ()` |
| 229 | `nO01.T77D` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `nO01.S8A1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `nO01.wgWj` | func | `(i32 i32 i32) -> ()` |
| 232 | `nO01.GBiJ` | func | `(i32 i32 i32) -> ()` |
| 233 | `nO01.Thkn` | func | `(i32 i32) -> ()` |
| 234 | `nO01.rI7y` | func | `(i32 i32) -> ()` |
| 235 | `nO01.zi6G` | func | `(i32 i32) -> ()` |
| 236 | `nO01.CmM1` | func | `(i32 i32) -> ()` |
| 237 | `nO01.Vz7F` | func | `(i32 i32) -> ()` |
| 238 | `nO01.nbBm` | func | `(i32 i32) -> ()` |
| 239 | `nO01.ApIh` | func | `(i32 f32 f32) -> ()` |
| 240 | `nO01.fC1a` | func | `(i32 f32 f32) -> ()` |
| 241 | `nO01.AQRR` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `nO01.x9Rc` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `nO01.zWuM` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `nO01.ItPX` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `nO01.IH9V` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `nO01.ANg0` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `nO01.XqTf` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `nO01.y1il` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `nO01.JT0M` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `nO01.HVRT` | func | `(i32) -> ()` |
| 251 | `nO01.ZlFp` | func | `(i32 i32) -> ()` |
| 252 | `nO01.SXDJ` | func | `(i32 i32) -> ()` |
| 253 | `nO01.uZTC` | func | `(i32 i32) -> ()` |
| 254 | `nO01.aX43` | func | `(i32 i32) -> ()` |
| 255 | `nO01.oz7k` | func | `(i32 i32) -> ()` |
| 256 | `nO01.aoBi` | func | `(i32 i32) -> ()` |
| 257 | `nO01.V3UB` | func | `(i32 i32) -> ()` |
| 258 | `nO01.W3NW` | func | `(i32 i32) -> ()` |
| 259 | `nO01.HMkb` | func | `(i32) -> (i32)` |
| 260 | `nO01.h2xa` | func | `(i32) -> (i32)` |
| 261 | `nO01.wpYk` | func | `(i32) -> (i32)` |
| 262 | `nO01.DDwS` | func | `(i32) -> (i32)` |
| 263 | `nO01.lKIH` | func | `(i32) -> ()` |
| 264 | `nO01.bsen` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `nO01.BJF4` | func | `(i32) -> ()` |
| 266 | `nO01.p6Dn` | func | `(i32) -> (i32)` |
| 267 | `nO01.Lc2G` | func | `(i32) -> (i32)` |
| 268 | `nO01.ZiyM` | func | `(i32) -> (i32)` |
| 269 | `nO01.aMYZ` | func | `(i32) -> (i32)` |
| 270 | `nO01.BhUu` | func | `(i32 i32) -> ()` |
| 271 | `nO01.raOl` | func | `(i32) -> ()` |
| 272 | `nO01.DHqH` | func | `(i32 i32) -> ()` |
| 273 | `nO01.pkuG` | func | `(i32) -> (i32)` |
| 274 | `nO01.aLA3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `nO01.RCMs` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `nO01.fa9F` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `nO01.AmET` | func | `(i32 i32) -> (i32)` |
| 278 | `nO01.q4zX` | func | `(i32 i32) -> (i32)` |
| 279 | `nO01.PTaK` | func | `(i32 i32) -> (i32)` |
| 280 | `nO01.fzc0` | func | `(i32 i32) -> (i32)` |
| 281 | `nO01.oWjb` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `eyt9` | func | 2500 | `(i32 i32) -> ()` |
| `gneX` | func | 1450 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `eagD` | func | 1783 | `() -> (i32)` |
| `IDIS` | func | 1487 | `(i32 i32) -> (i32)` |
| `ntWP` | func | 2446 | `(i32) -> (i32)` |
| `DAtN` | func | 2443 | `(i32 i32) -> ()` |
| `YFTL` | func | 2957 | `(i32 i32) -> (i32 i32)` |
| `nPeY` | func | 2433 | `(i32) -> ()` |
| `dLwm` | func | 2758 | `(i32) -> ()` |
| `IBxT` | func | 1245 | `(i32 i32 i32) -> ()` |
| `puwV` | func | 686 | `(i32 i32) -> (i32)` |
| `HXL8` | func | 2448 | `(i32) -> (i32)` |
| `YLnt` | func | 1606 | `(i32 i32 i32 i32) -> (i32)` |
| `NVPM` | func | 2963 | `(i32) -> (i32 i32)` |
| `u1l8` | func | 1949 | `(i32 i32) -> ()` |
| `VNmU` | func | 2434 | `(i32) -> (i32)` |
| `CpYC` | global | 1 | `` |
| `rund` | func | 3113 | `() -> (f64)` |
| `VuZF` | func | 1091 | `(i32 i32) -> ()` |
| `Klch` | func | 2427 | `(i32) -> (i32)` |
| `GR54` | func | 1462 | `(i32 i32) -> (i32)` |
| `jU20` | func | 1412 | `() -> (i32)` |
| `izq1` | func | 725 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `n0wA` | func | 793 | `(i32 i32) -> (i32)` |
| `ow9x` | func | 2544 | `() -> (i32)` |
| `nny6` | func | 1714 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `V59R` | func | 2918 | `(i32 i32) -> (i32)` |
| `Cuqg` | func | 3071 | `(i32) -> ()` |
| `j2ab` | func | 1823 | `(i32 i32 f64 f64 f64) -> ()` |
| `fVZR` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `svjK` | func | 2747 | `(i32) -> (i32)` |
| `xheL` | func | 1264 | `(i32) -> (i32)` |
| `QiS3` | func | 2220 | `(i32 i32) -> ()` |
| `cTzw` | func | 1272 | `(i32 i32) -> (i32)` |
| `oEw9` | func | 1193 | `(i32 i32 i32 i32) -> (i32)` |
| `hNVu` | func | 2432 | `(i32) -> (i32)` |
| `atIy` | func | 1490 | `(i32 f64) -> (f64)` |
| `IT95` | func | 1090 | `(i32 i32) -> (i32)` |
| `p7R8` | func | 1486 | `(i32 i32) -> (i32)` |
| `lrSH` | func | 2445 | `(i32) -> (i32)` |
| `rIr3` | func | 3117 | `(i32) -> (i32)` |
| `J5R0` | func | 3065 | `(i32 i32 i32) -> ()` |
| `k1WB` | func | 2428 | `(i32) -> (i32)` |
| `eKhk` | func | 2413 | `(i32) -> (i32)` |
| `RLyc` | func | 1222 | `(i32 i32) -> (i32)` |
| `VBeg` | func | 2299 | `(i32 i32) -> (i32)` |
| `TmV1` | func | 1993 | `(i32 f64 f64 f64) -> (i32)` |
| `EGmh` | func | 1363 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `LSKN` | func | 2455 | `(i32) -> (i32)` |
| `NVfs` | func | 660 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `hPFz` | func | 1788 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `Gh6F` | func | 1915 | `(i32 i32 i32 i32) -> ()` |
| `X6Cz` | func | 2430 | `(i32) -> (i32)` |
| `u1dS` | func | 2965 | `(i32) -> (i32 i32)` |
| `F0Fu` | func | 1898 | `(i32) -> (i32)` |
| `XaHp` | func | 2426 | `(i32) -> (f64)` |
| `izI3` | func | 1192 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `prVq` | func | 2429 | `(i32) -> (i32)` |
| `Ckvm` | func | 1856 | `(i32) -> ()` |
| `Y08r` | func | 598 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `N5fV` | func | 2009 | `(i32 i32) -> ()` |
| `SHKZ` | func | 1564 | `(i32 i32) -> ()` |
| `TLRy` | func | 2412 | `(i32 i32) -> ()` |
| `F47l` | func | 2435 | `(i32) -> (i32)` |
| `gmj1` | func | 2343 | `(i32 i32 i32 i32) -> (i32)` |
| `TpMP` | func | 3118 | `(i32) -> ()` |
| `OL0e` | func | 2466 | `(i32) -> (i32)` |
| `YXvF` | func | 2301 | `(i32 i32) -> (i32)` |
| `vpNH` | func | 3009 | `(i32 i32 i32) -> ()` |
| `xoU7` | func | 2457 | `(i32 i32) -> (i32)` |
| `SHJ0` | func | 2947 | `(i32 i32 i32) -> (i32 i32)` |
| `gAEf` | func | 2465 | `(i32) -> (i32)` |
| `HXcb` | func | 1707 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `aKbV` | func | 3141 | `() -> (i32)` |
| `z3f3` | func | 2447 | `(i32 i32) -> ()` |
| `O60m` | func | 2115 | `(i32 i32) -> (i32)` |
| `F2Jv` | func | 3142 | `() -> (i32)` |
| `uDUg` | func | 1725 | `(i32 i32) -> (i32)` |
| `FCAn` | func | 1857 | `(i32) -> ()` |
| `zHP9` | func | 2543 | `(i32 i32) -> ()` |
| `memory` | memory | 0 | `` |
| `fUjO` | func | 2300 | `(i32 i32) -> (i32)` |
| `SXZc` | func | 2952 | `(i32 i32) -> (i32 i32)` |
| `ST2m` | func | 2033 | `(i32 i32) -> (i32)` |
| `aeWo` | func | 3038 | `() -> (i32)` |
| `NF0V` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `XB2e` | func | 1408 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `aex6` | func | 1240 | `(i32 i32 i32) -> (i32)` |
| `CnWc` | func | 2368 | `(i32) -> (i32)` |
| `p9aX` | func | 3000 | `(i32 i32 i32 i32) -> ()` |
| `iN6N` | func | 2464 | `(i32) -> (i32)` |
| `Zh6n` | func | 2251 | `(i32 i32) -> ()` |
| `mrtj` | func | 2956 | `(i32 i32) -> (i32 i32)` |
| `EPiu` | func | 2929 | `(i32 i32) -> ()` |
| `MLwg` | func | 1455 | `(i32) -> (i32)` |
| `uuD0` | func | 2948 | `(i32 i32 i32) -> (i32 i32)` |
| `kQBY` | func | 1445 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Zr2o` | func | 1848 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `u943` | func | 2964 | `(i32) -> (i32 i32)` |
| `wz4d` | func | 2978 | `() -> (i32 i32)` |
| `PnXA` | func | 1415 | `(i32) -> (i32)` |
| `kZQE` | func | 2976 | `() -> (i32 i32)` |
| `YmJZ` | func | 1569 | `(i32 f64 f64 f64) -> (i32)` |
| `Sil6` | func | 1314 | `(i32 i32 i32) -> (i32)` |
| `h3wR` | func | 2717 | `(i32) -> (i32)` |
| `BFub` | func | 2923 | `(i32 i32 i32 i32) -> (i32)` |
| `WMHU` | func | 1975 | `(i32 f64) -> (i32)` |
| `LGmw` | func | 2221 | `(i32 f64) -> (i32)` |
| `iMvs` | func | 1151 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `USbm` | func | 2385 | `(i32) -> (i32)` |
| `Ecfd` | func | 1671 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `KoCc` | func | 2302 | `(i32 i32) -> (i32)` |
| `bXHC` | func | 719 | `(i32) -> (i32)` |
| `aZbl` | global | 2 | `` |
| `NU72` | func | 2781 | `(i32) -> (i32)` |
| `peTz` | func | 1364 | `(i32 f64 f64) -> (i32)` |
| `h2kl` | func | 2958 | `(i32 i32) -> (i32 i32)` |
| `H92b` | func | 3072 | `() -> ()` |
| `T8Tc` | func | 2436 | `(i32) -> (i32)` |
| `CCFQ` | func | 1454 | `(i32 i32 i32 i32) -> (i32)` |
| `t8FU` | func | 2511 | `() -> (i32)` |
| `ZBAT` | func | 889 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `OkjG` | func | 1553 | `(i32 i32) -> (i32)` |
| `Nd3h` | func | 1385 | `(i32 i32) -> (i32)` |
| `GER2` | func | 1831 | `(i32 i32) -> ()` |
| `P0Pm` | func | 1433 | `(i32 i32 i32 i32) -> ()` |
| `iqLG` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `BvWf` | func | 2738 | `(i32) -> (i32)` |
| `ijy7` | func | 1692 | `(i32) -> (i32)` |
| `MXJM` | func | 2431 | `(i32) -> (i32)` |
| `KmGI` | func | 2899 | `() -> ()` |
| `tX3V` | func | 3010 | `(i32 i32) -> ()` |
| `KNK6` | func | 648 | `(i32 i32) -> (i32)` |
| `K9Um` | func | 2962 | `(i32) -> (i32 i32)` |
| `X32m` | func | 2330 | `(i32 i32) -> (i32)` |
| `gt5T` | func | 1913 | `(i32) -> (i32)` |
| `Tadv` | func | 1502 | `(i32 i32 i32) -> (i32)` |
| `OxWS` | func | 2456 | `(i32 i32) -> (i32)` |
| `i7ND` | func | 2953 | `(i32 i32) -> (i32 i32)` |
| `aVz6` | func | 2955 | `(i32 i32) -> (i32 i32)` |
| `RgGe` | func | 870 | `(i32 i32) -> (i32)` |
| `Mdkd` | func | 1298 | `(i32) -> ()` |
| `rpMZ` | func | 1475 | `(i32 i32) -> (i32)` |
| `z7Uw` | func | 899 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `JFHe` | func | 2167 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `qbaG` | func | 869 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `VM0J` | func | 1841 | `(i32 i32) -> (i32)` |
| `vpvS` | func | 1803 | `(i32 i32 i32 i32) -> (i32)` |
| `GnHZ` | func | 2724 | `(i32) -> (i32)` |
| `L5vd` | func | 548 | `(i32 i32 i32) -> (i32)` |
| `WH08` | func | 2146 | `(i32 i32) -> (i32)` |
| `pR85` | func | 1565 | `(i32 i32) -> ()` |
| `xmIs` | func | 2954 | `(i32 i32) -> (i32 i32)` |
| `YQu5` | func | 1199 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Lots` | func | 2977 | `() -> (i32 i32)` |
| `PO4G` | func | 2966 | `(i32) -> (i32 i32)` |
| `ExlL` | func | 2384 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |

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
