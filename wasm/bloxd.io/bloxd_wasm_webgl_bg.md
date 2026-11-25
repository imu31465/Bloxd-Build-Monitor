# WASM module: `bloxd_wasm_webgl_bg`

> environment **bloxd.io** · build `c6gaap.4d6587ec` · analyzed 2026-11-25T09:11:16+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl_bg.f51aefd0a8deaec55282.wasm
> 5,516,365 bytes (5.3 MB) · sha256 `cbc2e38eabd8d787…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `80c0b7b653b61d4f.10916` → `a0965882b48955f0.10916` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,915 / 299 |
| Exports / imports | 157 / 300 |
| Code bytes (function bodies) | 4,042,860 (3.9 MB) |
| Total local variables | 30,793 |
| Instructions (scanable bodies) | 1,896,294 |
| Data segments / bytes | 4,032 / 1,424,648 |
| Element segments / entries | 1 / 753 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `a0965882b48955f0.10916` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,506 | 177 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,966 | 2915 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,513 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,048,203 | 2915 |
| 11 | data | 1,457,210 | 4032 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `SS4p.xV3Y` | memory | `[128..14648]` |
| 0 | `SS4p.w5CP` | func | `(i32) -> (f64)` |
| 1 | `SS4p.Ecq1` | func | `() -> (i32)` |
| 2 | `SS4p.ufFX` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `SS4p.zndB` | func | `(i32) -> ()` |
| 4 | `SS4p.W14R` | func | `(i32 i32) -> (i32)` |
| 5 | `SS4p.F50W` | func | `(i32) -> (i32)` |
| 6 | `SS4p.Qauc` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `SS4p.OVtd` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `SS4p.nw74` | func | `(i32) -> (i32)` |
| 9 | `SS4p.Uf5u` | func | `(i32 i32) -> ()` |
| 10 | `SS4p.xMxV` | func | `(i32 i32) -> ()` |
| 11 | `SS4p.Tit9` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `SS4p.soTN` | func | `(i32 i32) -> (i32)` |
| 13 | `SS4p.VYvc` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `SS4p.KQz4` | func | `(i32) -> (i32)` |
| 15 | `SS4p.eMYT` | func | `(i32 i32) -> (i32)` |
| 16 | `SS4p.xWCX` | func | `(i32 i32) -> (i32)` |
| 17 | `SS4p.LDwS` | func | `(i32 i32) -> ()` |
| 18 | `SS4p.Uk3z` | func | `(i32) -> (i32)` |
| 19 | `SS4p.bJ3R` | func | `(i32) -> (i32)` |
| 20 | `SS4p.f9yV` | func | `(i32) -> (i32)` |
| 21 | `SS4p.AKj5` | func | `(i32) -> ()` |
| 22 | `SS4p.OLCE` | func | `(i32 i32) -> ()` |
| 23 | `SS4p.Lfuv` | func | `(i32 i32) -> ()` |
| 24 | `SS4p.BplG` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `SS4p.Eer1` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `SS4p.yGXG` | func | `(i32) -> (i32)` |
| 27 | `SS4p.CqPa` | func | `(i32 i32) -> ()` |
| 28 | `SS4p.fEay` | func | `(i32 i32) -> (i32)` |
| 29 | `SS4p.JRFB` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `SS4p.g2Jo` | func | `(i32 i32) -> (i32)` |
| 31 | `SS4p.VU5C` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `SS4p.czhx` | func | `(i32) -> (i32)` |
| 33 | `SS4p.jyYQ` | func | `(i32 i32) -> ()` |
| 34 | `SS4p.N9yx` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `SS4p.X4NI` | func | `(i32) -> (i32)` |
| 36 | `SS4p.vVBd` | func | `(i32) -> (i32)` |
| 37 | `SS4p.ZN43` | func | `(i32) -> (i32)` |
| 38 | `SS4p.rjNj` | func | `(i32 i32) -> (i32)` |
| 39 | `SS4p.HEV6` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `SS4p.P6Ir` | func | `(i32) -> (i32)` |
| 41 | `SS4p.HEC5` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `SS4p.eYGn` | func | `() -> (f64)` |
| 43 | `SS4p.XWh8` | func | `(i32) -> (i32)` |
| 44 | `SS4p.GCmG` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `SS4p.OnOj` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `SS4p.HkZa` | func | `(i32 i32 i32) -> ()` |
| 47 | `SS4p.onNz` | func | `(i32 i32 i32) -> ()` |
| 48 | `SS4p.cGoU` | func | `(i32 i32 i32) -> ()` |
| 49 | `SS4p.qFPj` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `SS4p.tEFR` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `SS4p.Xm8g` | func | `(i32 i32) -> ()` |
| 52 | `SS4p.zRIZ` | func | `(i32 i32) -> ()` |
| 53 | `SS4p.DxM9` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `SS4p.MB1W` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `SS4p.Pv15` | func | `(i32 f32 f32) -> ()` |
| 56 | `SS4p.D0cs` | func | `(i32 f32 f32) -> ()` |
| 57 | `SS4p.BSTo` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `SS4p.QDE4` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `SS4p.gMSW` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `SS4p.cS5s` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `SS4p.vCiL` | func | `(i32 i32 i32) -> ()` |
| 62 | `SS4p.Dfai` | func | `(i32 i32 i32) -> ()` |
| 63 | `SS4p.ZALw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `SS4p.bNkZ` | func | `(i32 i32 i32) -> ()` |
| 65 | `SS4p.ExxT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `SS4p.FHCR` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `SS4p.Sq4i` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `SS4p.QdZF` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `SS4p.u98z` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `SS4p.jHVS` | func | `(i32) -> (i32)` |
| 71 | `SS4p.yutR` | func | `(i32) -> ()` |
| 72 | `SS4p.Nge1` | func | `(i32) -> (i32)` |
| 73 | `SS4p.c6DJ` | func | `(i32 i32) -> (i32)` |
| 74 | `SS4p.NZfm` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `SS4p.q3eD` | func | `(i32 i32 i32) -> ()` |
| 76 | `SS4p.ZDto` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `SS4p.QFhh` | func | `() -> (f64)` |
| 78 | `SS4p.Sn2i` | func | `() -> (f64)` |
| 79 | `SS4p.dVtY` | func | `(i32 i32) -> ()` |
| 80 | `SS4p.YnY3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `SS4p.fB9C` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `SS4p.hP0m` | func | `(i32 i32 i32) -> ()` |
| 83 | `SS4p.cBo2` | func | `(i32 i32 i32) -> ()` |
| 84 | `SS4p.Fx7e` | func | `(i32 i32) -> ()` |
| 85 | `SS4p.j5cl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `SS4p.w1G7` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `SS4p.for5` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `SS4p.hX78` | func | `(i32 i32) -> ()` |
| 89 | `SS4p.qhkg` | func | `(i32 i32) -> ()` |
| 90 | `SS4p.OBFh` | func | `(i32) -> (i32)` |
| 91 | `SS4p.LMW0` | func | `(i32 i32 i32) -> ()` |
| 92 | `SS4p.bNmP` | func | `(i32 i32 i32) -> ()` |
| 93 | `SS4p.Oh1Z` | func | `(i32) -> (i32)` |
| 94 | `SS4p.G7X9` | func | `(i32) -> (i32)` |
| 95 | `SS4p.v1pR` | func | `(i32 i32) -> ()` |
| 96 | `SS4p.krEM` | func | `(i32 i32) -> ()` |
| 97 | `SS4p.XpjL` | func | `(i32 i32) -> ()` |
| 98 | `SS4p.T02U` | func | `(i32 i32) -> ()` |
| 99 | `SS4p.xisT` | func | `(i32 i32 i32) -> ()` |
| 100 | `SS4p.DQvJ` | func | `(i32 i32 i32) -> ()` |
| 101 | `SS4p.sZqK` | func | `(i32 i32 f32) -> ()` |
| 102 | `SS4p.NYPJ` | func | `(i32 i32 f32) -> ()` |
| 103 | `SS4p.eEl7` | func | `(i32 i32 i32) -> ()` |
| 104 | `SS4p.HwIY` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `SS4p.wdOd` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `SS4p.yPmX` | func | `(i32 i32) -> ()` |
| 107 | `SS4p.bcyH` | func | `(i32 i32) -> ()` |
| 108 | `SS4p.nM7p` | func | `(i32 i32) -> ()` |
| 109 | `SS4p.vUzK` | func | `(i32 i32) -> ()` |
| 110 | `SS4p.VlUy` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `SS4p.fn1F` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `SS4p.oBGL` | func | `(i32 i32 i32) -> ()` |
| 113 | `SS4p.UX5C` | func | `(i32 i32 i32) -> ()` |
| 114 | `SS4p.sUUu` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `SS4p.EwHe` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `SS4p.FOEd` | func | `(i32 i32) -> ()` |
| 117 | `SS4p.xHxE` | func | `(i32 i32) -> ()` |
| 118 | `SS4p.q13a` | func | `(i32 i32) -> (i32)` |
| 119 | `SS4p.CTsd` | func | `(i32 i32) -> (i32)` |
| 120 | `SS4p.WrrN` | func | `(i32 i32) -> ()` |
| 121 | `SS4p.gCtT` | func | `(i32 i32) -> ()` |
| 122 | `SS4p.aU2w` | func | `(i32) -> (i32)` |
| 123 | `SS4p.v7zD` | func | `(i32 i32) -> ()` |
| 124 | `SS4p.lJVP` | func | `(i32 i32) -> ()` |
| 125 | `SS4p.PeMZ` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `SS4p.SELZ` | func | `(i32 i32 i32) -> ()` |
| 127 | `SS4p.zX8f` | func | `(i32 i32 i32) -> ()` |
| 128 | `SS4p.Co1e` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `SS4p.LiPH` | func | `(i32 i32) -> ()` |
| 130 | `SS4p.OmDa` | func | `(i32 i32 i32) -> ()` |
| 131 | `SS4p.ITcy` | func | `(i32 i32 i32) -> ()` |
| 132 | `SS4p.t4hg` | func | `(i32 i32 i32) -> ()` |
| 133 | `SS4p.oE3z` | func | `(i32 i32 i32) -> ()` |
| 134 | `SS4p.TRP4` | func | `(i32) -> ()` |
| 135 | `SS4p.mT8o` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `SS4p.ndzn` | func | `(i32 i32 i32) -> ()` |
| 137 | `SS4p.XWEl` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `SS4p.HsSF` | func | `(i32 i32) -> ()` |
| 139 | `SS4p.Gifj` | func | `(i32) -> (i32)` |
| 140 | `SS4p.mQka` | func | `(i32 i32) -> ()` |
| 141 | `SS4p.Guxj` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `SS4p.hgCJ` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `SS4p.DIzP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `SS4p.Xemc` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `SS4p.AIT7` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `SS4p.KxUy` | func | `(i32 i32) -> ()` |
| 147 | `SS4p.FnHx` | func | `(i32 i32) -> ()` |
| 148 | `SS4p.oNAE` | func | `(i32 i32) -> ()` |
| 149 | `SS4p.Ki7b` | func | `(i32 i32) -> ()` |
| 150 | `SS4p.fq57` | func | `(i32) -> (i32)` |
| 151 | `SS4p.NLwl` | func | `(i32) -> (i32)` |
| 152 | `SS4p.wQ9a` | func | `(i32) -> (i32)` |
| 153 | `SS4p.Wlsp` | func | `(i32) -> (i32)` |
| 154 | `SS4p.RAAg` | func | `(i32) -> (i32)` |
| 155 | `SS4p.p4Tf` | func | `(i32) -> (i32)` |
| 156 | `SS4p.FnTt` | func | `() -> (i32)` |
| 157 | `SS4p.mSPe` | func | `() -> (i32)` |
| 158 | `SS4p.aWns` | func | `() -> (i32)` |
| 159 | `SS4p.ALjH` | func | `() -> (i32)` |
| 160 | `SS4p.skIx` | func | `(i32 i32) -> (i32)` |
| 161 | `SS4p.BwLg` | func | `(i32) -> ()` |
| 162 | `SS4p.IQbV` | func | `(i32 i32) -> (i32)` |
| 163 | `SS4p.L9fU` | func | `(i32) -> (i32)` |
| 164 | `SS4p.xDSs` | func | `(i32) -> (i32)` |
| 165 | `SS4p.I5wC` | func | `(i32) -> (i32)` |
| 166 | `SS4p.z8ab` | func | `(i32) -> ()` |
| 167 | `SS4p.wEiQ` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `SS4p.qlnb` | func | `(i32) -> (i32)` |
| 169 | `SS4p.pi4P` | func | `(i32) -> (i32)` |
| 170 | `SS4p.YUF8` | func | `(i32 i32) -> (i32)` |
| 171 | `SS4p.dOaC` | func | `(i32) -> ()` |
| 172 | `SS4p.xT6Q` | func | `() -> (i32)` |
| 173 | `SS4p.bruG` | func | `(i32 i32) -> (i32)` |
| 174 | `SS4p.mzmc` | func | `(i32 i32) -> ()` |
| 175 | `SS4p.If80` | func | `(i32 i32) -> ()` |
| 176 | `SS4p.naxx` | func | `(i32) -> (i32)` |
| 177 | `SS4p.dkhm` | func | `(i32 i32) -> (i32)` |
| 178 | `SS4p.Reji` | func | `(i32) -> ()` |
| 179 | `SS4p.D69t` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `SS4p.b2Ah` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `SS4p.hOGk` | func | `(i32 i32) -> ()` |
| 182 | `SS4p.rwAs` | func | `(i32 i32) -> ()` |
| 183 | `SS4p.v3zv` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `SS4p.Kihk` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `SS4p.lMCZ` | func | `(i32 f32) -> ()` |
| 186 | `SS4p.btcE` | func | `(i32 f32) -> ()` |
| 187 | `SS4p.w0g3` | func | `(i32 i32) -> ()` |
| 188 | `SS4p.KyYh` | func | `(i32 i32) -> ()` |
| 189 | `SS4p.Z2if` | func | `(i32) -> (i32)` |
| 190 | `SS4p.t6oI` | func | `(i32) -> (i32)` |
| 191 | `SS4p.mLXM` | func | `(i32) -> (i32)` |
| 192 | `SS4p.KIFP` | func | `(i32) -> (i32)` |
| 193 | `SS4p.lEKo` | func | `(i32 i32 i32) -> ()` |
| 194 | `SS4p.rPMT` | func | `(i32 i32 i32) -> ()` |
| 195 | `SS4p.l1U7` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `SS4p.zaEu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `SS4p.p0Qv` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `SS4p.fwgn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `SS4p.Lsv2` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `SS4p.RgEX` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `SS4p.ulhl` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `SS4p.hz8g` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `SS4p.xRGG` | func | `(i32) -> (i32)` |
| 204 | `SS4p.PA4O` | func | `(i32) -> (i32)` |
| 205 | `SS4p.ihQe` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `SS4p.zUsv` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `SS4p.GQcb` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `SS4p.J8im` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `SS4p.x17R` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `SS4p.SV74` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `SS4p.aS6j` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `SS4p.Qobb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `SS4p.fb8J` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `SS4p.py6f` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `SS4p.dFFa` | func | `(i32 i32 i32) -> ()` |
| 216 | `SS4p.I6mp` | func | `(i32 i32 i32) -> ()` |
| 217 | `SS4p.cmdd` | func | `(i32 i32) -> ()` |
| 218 | `SS4p.z6JY` | func | `(i32 i32) -> ()` |
| 219 | `SS4p.moVl` | func | `(i32 i32) -> ()` |
| 220 | `SS4p.B8CI` | func | `(i32 i32) -> ()` |
| 221 | `SS4p.f1es` | func | `(i32 i32) -> ()` |
| 222 | `SS4p.g1ID` | func | `(i32 i32) -> ()` |
| 223 | `SS4p.XaVb` | func | `(i32 f32 f32) -> ()` |
| 224 | `SS4p.atBr` | func | `(i32 f32 f32) -> ()` |
| 225 | `SS4p.Gcv2` | func | `(i32 i32) -> ()` |
| 226 | `SS4p.IcJu` | func | `(i32 i32) -> ()` |
| 227 | `SS4p.sibD` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `SS4p.FPwp` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `SS4p.eUhq` | func | `(i32 i32 i32) -> ()` |
| 230 | `SS4p.rTU4` | func | `(i32) -> (i32)` |
| 231 | `SS4p.x82l` | func | `(i32) -> (i32)` |
| 232 | `SS4p.xkIt` | func | `(i32 i32) -> ()` |
| 233 | `SS4p.yQUN` | func | `(i32 i32) -> ()` |
| 234 | `SS4p.EwIp` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `SS4p.SwAq` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `SS4p.bnBq` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `SS4p.SyZ3` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `SS4p.yFVK` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `SS4p.Dtxk` | func | `(i32 i32 i32) -> ()` |
| 240 | `SS4p.Ov4u` | func | `(i32 i32 i32) -> ()` |
| 241 | `SS4p.nYLS` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `SS4p.dY6b` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `SS4p.n8xR` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `SS4p.DtLE` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `SS4p.Alu7` | func | `(i32) -> (i32)` |
| 246 | `SS4p.S1yO` | func | `(i32) -> (i32)` |
| 247 | `SS4p.dQYY` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `SS4p.x7fh` | func | `(i32 i32) -> ()` |
| 249 | `SS4p.NqF8` | func | `(i32 i32) -> ()` |
| 250 | `SS4p.gzW8` | func | `(i32 i32) -> (i32)` |
| 251 | `SS4p.O8i8` | func | `(i32 i32) -> (i32)` |
| 252 | `SS4p.zBbU` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `SS4p.mnEc` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `SS4p.SPYJ` | func | `(i32 i32) -> ()` |
| 255 | `SS4p.l6Zz` | func | `(i32 i32) -> ()` |
| 256 | `SS4p.sCFc` | func | `(i32) -> (i32)` |
| 257 | `SS4p.WplV` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `SS4p.SVv1` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `SS4p.gyCI` | func | `(i32) -> ()` |
| 260 | `SS4p.Ej0y` | func | `(i32 i32) -> ()` |
| 261 | `SS4p.Ydkw` | func | `(i32 i32) -> ()` |
| 262 | `SS4p.lpXt` | func | `(i32 i32) -> ()` |
| 263 | `SS4p.IDT8` | func | `(i32 i32) -> ()` |
| 264 | `SS4p.rpwY` | func | `(i32 i32) -> ()` |
| 265 | `SS4p.gti7` | func | `(i32 i32) -> ()` |
| 266 | `SS4p.B140` | func | `(i32 i32) -> ()` |
| 267 | `SS4p.cRbq` | func | `(i32 i32) -> ()` |
| 268 | `SS4p.ufYO` | func | `(i32) -> (i32)` |
| 269 | `SS4p.IYUS` | func | `(i32) -> (i32)` |
| 270 | `SS4p.VyyC` | func | `(i32) -> (i32)` |
| 271 | `SS4p.cQoJ` | func | `(i32) -> (i32)` |
| 272 | `SS4p.bj34` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `SS4p.YOL4` | func | `(i32) -> ()` |
| 274 | `SS4p.jCZP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `SS4p.hpyd` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `SS4p.Yjob` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `SS4p.eIc9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `SS4p.VPML` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `SS4p.Fxn8` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `SS4p.Q4Om` | func | `(i32) -> (i32)` |
| 281 | `SS4p.aCOO` | func | `(i32) -> (i32)` |
| 282 | `SS4p.yWbB` | func | `(i32) -> (i32)` |
| 283 | `SS4p.L90k` | func | `(i32) -> (i32)` |
| 284 | `SS4p.c1KO` | func | `(i32 i32) -> ()` |
| 285 | `SS4p.DTkX` | func | `(i32) -> ()` |
| 286 | `SS4p.AA66` | func | `(i32 i32) -> ()` |
| 287 | `SS4p.Bnlm` | func | `(i32) -> (i32)` |
| 288 | `SS4p.Pd7H` | func | `(i32 i32) -> (i32)` |
| 289 | `SS4p.X7Ps` | func | `(i32 i32) -> (i32)` |
| 290 | `SS4p.MjIq` | func | `(i32 i32) -> (i32)` |
| 291 | `SS4p.mffb` | func | `(f64) -> (i32)` |
| 292 | `SS4p.EE9K` | func | `(i32 i32) -> (i32)` |
| 293 | `SS4p.BEwO` | func | `(i32 i32) -> (i32)` |
| 294 | `SS4p.T5bF` | func | `(i32 i32) -> (i32)` |
| 295 | `SS4p.vWBi` | func | `(i32 i32) -> (i32)` |
| 296 | `SS4p.p5gw` | func | `(i32 i32) -> (i32)` |
| 297 | `SS4p.Xsou` | func | `(i32 i32) -> (i32)` |
| 298 | `SS4p.WsDl` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `wZs9` | func | 1745 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vH4W` | func | 3133 | `() -> ()` |
| `ajlu` | func | 3021 | `(i32) -> (i32 i32)` |
| `o5fZ` | func | 1987 | `(i32 i32) -> ()` |
| `CWnJ` | func | 3008 | `(i32 i32) -> (i32 i32)` |
| `xXOh` | func | 1516 | `(i32 f64) -> (f64)` |
| `EHik` | func | 2149 | `(i32 i32) -> (i32)` |
| `anuq` | func | 1243 | `(i32 i32) -> (i32)` |
| `CKDQ` | func | 2471 | `(i32) -> (i32)` |
| `GeY7` | func | 2046 | `(i32 i32) -> ()` |
| `tkQH` | func | 2507 | `(i32) -> (i32)` |
| `atWy` | func | 1529 | `(i32 i32 i32) -> (i32)` |
| `XYzz` | func | 2338 | `(i32 i32) -> (i32)` |
| `Meow` | func | 2029 | `(i32 f64 f64 f64) -> (i32)` |
| `UvSn` | func | 1215 | `(i32 i32 i32 i32) -> (i32)` |
| `SmWq` | func | 2409 | `(i32) -> (i32)` |
| `jSUM` | func | 2970 | `(i32 i32) -> (i32)` |
| `oJWU` | func | 3022 | `(i32) -> (i32 i32)` |
| `XARy` | func | 3023 | `(i32) -> (i32 i32)` |
| `H8Zw` | func | 1438 | `() -> (i32)` |
| `Lrpa` | func | 1757 | `(i32 i32) -> (i32)` |
| `TIDP` | func | 1934 | `(i32) -> (i32)` |
| `bAtS` | func | 737 | `(i32) -> (i32)` |
| `YbFA` | func | 2477 | `(i32) -> (i32)` |
| `ArSm` | func | 2592 | `() -> (i32)` |
| `iSgw` | func | 889 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `NU8l` | func | 1221 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `SNOh` | func | 1482 | `(i32 i32 i32 i32) -> (i32)` |
| `Yi1G` | func | 3001 | `(i32 i32 i32) -> (i32 i32)` |
| `eco8` | func | 2558 | `() -> (i32)` |
| `UhPr` | func | 2500 | `(i32 i32) -> (i32)` |
| `xvjy` | func | 1388 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `LwyL` | func | 1953 | `(i32 i32 i32 i32) -> ()` |
| `x8Vy` | func | 2491 | `(i32) -> (i32)` |
| `uORK` | func | 1837 | `(i32 i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `USq9` | func | 1816 | `() -> (i32)` |
| `Q9oK` | func | 2478 | `(i32) -> (i32)` |
| `gmrM` | func | 1115 | `(i32 i32) -> ()` |
| `S6sT` | func | 1513 | `(i32 i32) -> (i32)` |
| `xhEq` | func | 2256 | `(i32 f64) -> (i32)` |
| `KOJj` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `TEZk` | func | 2475 | `(i32) -> ()` |
| `iDiD` | func | 1114 | `(i32 i32) -> (i32)` |
| `OByr` | func | 1473 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `LFLE` | func | 1578 | `(i32 i32) -> (i32)` |
| `qbq0` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `SIi1` | func | 1514 | `(i32 i32) -> (i32)` |
| `atpA` | func | 3007 | `(i32 i32) -> (i32 i32)` |
| `cfiF` | func | 2473 | `(i32) -> (i32)` |
| `nuHP` | func | 2286 | `(i32 i32) -> ()` |
| `KYd8` | func | 1489 | `(i32 i32) -> (i32)` |
| `ksgm` | func | 1264 | `(i32 i32 i32) -> (i32)` |
| `Ga7y` | func | 2982 | `(i32 i32) -> ()` |
| `dyWd` | func | 2337 | `(i32 i32) -> (i32)` |
| `jyvP` | global | 2 | `` |
| `ACID` | func | 1434 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `Yfc2` | func | 2796 | `(i32) -> (i32)` |
| `q3vA` | func | 3132 | `(i32) -> ()` |
| `IvFa` | func | 1502 | `(i32 i32) -> (i32)` |
| `U78g` | func | 2591 | `(i32 i32) -> ()` |
| `iTAH` | func | 1460 | `(i32 i32 i32 i32) -> ()` |
| `Gl6P` | func | 3035 | `() -> (i32 i32)` |
| `Yuyg` | func | 911 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `FLbf` | func | 3012 | `(i32 i32) -> (i32 i32)` |
| `T6nQ` | func | 1882 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `kAfy` | func | 3006 | `(i32 i32) -> (i32 i32)` |
| `y5Nt` | func | 1478 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `gFL8` | func | 2764 | `(i32) -> (i32)` |
| `jJ0D` | func | 1550 | `(i32 i32 i32 i32) -> (i32)` |
| `UwJj` | func | 890 | `(i32 i32) -> (i32)` |
| `pRKv` | func | 1214 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `V74M` | func | 2474 | `(i32) -> (i32)` |
| `elz8` | func | 2335 | `(i32 i32) -> (i32)` |
| `KJwv` | func | 1270 | `(i32 i32 i32) -> ()` |
| `yWWD` | func | 2785 | `(i32) -> (i32)` |
| `Ze38` | func | 3010 | `(i32 i32) -> (i32 i32)` |
| `YraX` | func | 3202 | `() -> (i32)` |
| `Cxb2` | func | 1409 | `(i32 i32) -> (i32)` |
| `Qwb2` | func | 2469 | `(i32) -> (i32)` |
| `DDen` | func | 3126 | `(i32 i32 i32) -> ()` |
| `bBf0` | func | 3070 | `(i32 i32 i32) -> ()` |
| `nnGl` | func | 3024 | `(i32) -> (i32 i32)` |
| `vqvH` | func | 1891 | `(i32) -> ()` |
| `k1rl` | func | 2489 | `(i32) -> (i32)` |
| `nOm8` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `tBzV` | func | 1296 | `(i32 i32) -> (i32)` |
| `cjQY` | func | 3011 | `(i32 i32) -> (i32 i32)` |
| `cfRn` | func | 3071 | `(i32 i32) -> ()` |
| `d2YD` | func | 1631 | `(i32 i32 i32 i32) -> (i32)` |
| `EjKR` | func | 1951 | `(i32) -> (i32)` |
| `Q3Bl` | func | 1336 | `(i32 i32 i32) -> (i32)` |
| `Uoea` | func | 1875 | `(i32 i32) -> (i32)` |
| `fC2X` | func | 3020 | `(i32) -> (i32 i32)` |
| `LnB8` | func | 2508 | `(i32) -> (i32)` |
| `crRw` | func | 1589 | `(i32 i32) -> ()` |
| `sFAU` | func | 2486 | `(i32 i32) -> ()` |
| `HJz1` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `CITI` | func | 1892 | `(i32) -> ()` |
| `Z2fD` | func | 2426 | `(i32) -> (i32)` |
| `wPb1` | func | 3036 | `() -> (i32 i32)` |
| `Ku0X` | func | 2255 | `(i32 i32) -> ()` |
| `iCTp` | func | 668 | `(i32 i32) -> (i32)` |
| `ijGB` | func | 2951 | `() -> ()` |
| `iCJK` | func | 2013 | `(i32 f64) -> (i32)` |
| `Ssls` | func | 1441 | `(i32) -> (i32)` |
| `jZx1` | func | 1857 | `(i32 i32 f64 f64 f64) -> ()` |
| `Rixa` | func | 1723 | `(i32) -> (i32)` |
| `zNll` | func | 2771 | `(i32) -> (i32)` |
| `PFEs` | func | 810 | `(i32 i32) -> (i32)` |
| `tgbU` | func | 3061 | `(i32 i32 i32 i32) -> ()` |
| `sUzm` | func | 2499 | `(i32 i32) -> (i32)` |
| `wBY8` | func | 678 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `hU5g` | func | 922 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jKc9` | func | 2829 | `(i32) -> (i32)` |
| `uNDb` | func | 2380 | `(i32 i32 i32 i32) -> (i32)` |
| `X2On` | func | 568 | `(i32 i32 i32) -> (i32)` |
| `cmfB` | func | 3009 | `(i32 i32) -> (i32 i32)` |
| `fasZ` | func | 3000 | `(i32 i32 i32) -> (i32 i32)` |
| `H4An` | func | 1865 | `(i32 i32) -> ()` |
| `boHR` | func | 3037 | `() -> (i32 i32)` |
| `kUJc` | func | 1483 | `(i32) -> (i32)` |
| `bOWW` | func | 1389 | `(i32 f64 f64) -> (i32)` |
| `Ue27` | func | 2975 | `(i32 i32 i32 i32) -> (i32)` |
| `lr3c` | func | 3173 | `() -> (f64)` |
| `JMg6` | func | 1321 | `(i32) -> ()` |
| `MBuA` | func | 2476 | `(i32) -> (i32)` |
| `ugOI` | func | 2181 | `(i32 i32) -> (i32)` |
| `lHvJ` | func | 2336 | `(i32 i32) -> (i32)` |
| `lV50` | func | 2201 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `myTx` | func | 2069 | `(i32 i32) -> (i32)` |
| `blzb` | func | 2498 | `(i32) -> (i32)` |
| `tyqY` | func | 2368 | `(i32 i32) -> (i32)` |
| `HXR7` | global | 1 | `` |
| `PODR` | func | 2454 | `(i32 i32) -> ()` |
| `b9sh` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ayda` | func | 1700 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `L7Ec` | func | 1289 | `(i32) -> (i32)` |
| `hN3n` | func | 3203 | `() -> (i32)` |
| `jaDk` | func | 1588 | `(i32 i32) -> ()` |
| `TyRE` | func | 1822 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `FyDD` | func | 758 | `(i32 i32 i32) -> (i32)` |
| `R1V6` | func | 3178 | `(i32) -> ()` |
| `UPmN` | func | 2488 | `(i32) -> (i32)` |
| `lwjh` | func | 2490 | `(i32 i32) -> ()` |
| `aTPi` | func | 1593 | `(i32 f64 f64 f64) -> (i32)` |
| `kZwG` | func | 2455 | `(i32) -> (i32)` |
| `edai` | func | 2807 | `(i32) -> ()` |
| `ykZY` | func | 2425 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `JUia` | func | 2472 | `(i32) -> (i32)` |
| `R5jw` | func | 705 | `(i32 i32) -> (i32)` |
| `HQMs` | func | 2509 | `(i32) -> (i32)` |
| `oIJ1` | func | 3177 | `(i32) -> (i32)` |
| `ORBH` | func | 2546 | `(i32 i32) -> ()` |
| `Er3m` | func | 3099 | `() -> (i32)` |
| `A7nJ` | func | 2470 | `(i32) -> (i32)` |
| `ZDHH` | func | 2468 | `(i32) -> (f64)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 754 · max 754
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2639720, `i32` = i32.const 2640292

## Functions

- 2,915 bodies · 4,042,860 code bytes · avg 1.4 KB
- instruction scan: 2,915 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 114 |
| <= 128 bytes | 257 |
| <= 256 bytes | 377 |
| <= 512 bytes | 673 |
| <= 1024 bytes | 573 |
| <= 2048 bytes | 428 |
| <= 4096 bytes | 180 |
| <= 8192 bytes | 91 |
| <= 16384 bytes | 31 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 217 | 194,730 | 88,375 | local.get×25902, i32.const×9917, i32.load×5640, local.set×4735, local.tee×4639 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 112,325 | 54,451 | local.get×15156, i32.const×6534, i32.add×3194, local.set×3087, i32.load×2951 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,544 | 21,400 | local.get×6231, i32.const×2827, local.set×1224, i32.add×1128, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 125 | 48,670 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,627 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 25 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 64 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 196 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 225 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 721 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 722 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1576 | `(i32 i32) -> (i32)` | 180 | 54,752 | 19,856 | local.get×6592, i32.const×2623, i64.store×1913, i64.const×1078, i64.load×1056 |
| 1976 | `(i32 i32) -> ()` | 110 | 40,258 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2587 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2865 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2883 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 540,412 |
| `i32.const` | 226,361 |
| `local.tee` | 100,491 |
| `i32.load` | 94,774 |
| `local.set` | 94,131 |
| `i32.add` | 87,372 |
| `end` | 79,405 |
| `br_if` | 64,502 |
| `i32.store` | 46,859 |
| `block` | 37,322 |
| `i64.const` | 32,726 |
| `i64.store` | 31,836 |
| `if` | 30,358 |
| `call` | 29,521 |
| `i32.sub` | 24,726 |
| `i64.load` | 23,705 |
| `br` | 23,172 |
| `i32.eqz` | 19,607 |
| `select` | 16,938 |
| `i32.shl` | 16,489 |
| `i32.and` | 16,371 |
| `i32.ne` | 15,888 |
| `i32.load8_u` | 15,024 |
| `i32.eq` | 13,904 |
| `i32.store8` | 12,645 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,915/2,915 (degraded: 0)
