# WASM module: `bloxd_wasm_webgl_bg`

> environment **staging.bloxd.io** · build `fo1voe.f743fbcf` · analyzed 2026-11-26T01:33:49+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl_bg.4b56d71eb7cfe1a27c17.wasm
> 5,537,354 bytes (5.3 MB) · sha256 `c7e113e0705d9817…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,516,433 → 5,537,354 bytes (+20,921)
- defined functions 2,915 → 2,934
- code bytes 4,042,889 → 4,062,185
- data bytes 1,424,687 → 1,426,189
- name-section module id `dbabd7e7025258c7.10916` → `eb1ac7ff50f61929.10978`
- export signatures: +1 × `(i32 i32) -> (i32)`; +1 × `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()`
- export identifiers rotated by the obfuscator: 1/159 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,934 / 299 |
| Exports / imports | 159 / 300 |
| Code bytes (function bodies) | 4,062,185 (3.9 MB) |
| Total local variables | 31,150 |
| Instructions (scanable bodies) | 1,904,772 |
| Data segments / bytes | 4,035 / 1,426,189 |
| Element segments / entries | 1 / 754 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `eb1ac7ff50f61929.10978` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,528 | 180 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,988 | 2934 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,273 | 159 |
| 9 | element | 1,515 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,067,563 | 2934 |
| 11 | data | 1,458,777 | 4035 |
| 0 | custom:name | 30 | — |

## Types

180 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Mpmg.Ku9K` | memory | `[128..14648]` |
| 0 | `Mpmg.lfKE` | func | `(i32) -> (f64)` |
| 1 | `Mpmg.fcbt` | func | `() -> (i32)` |
| 2 | `Mpmg.VHad` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `Mpmg.ZJgx` | func | `(i32) -> ()` |
| 4 | `Mpmg.rvU7` | func | `(i32 i32) -> (i32)` |
| 5 | `Mpmg.qabc` | func | `(i32) -> (i32)` |
| 6 | `Mpmg.HIg6` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `Mpmg.MevV` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `Mpmg.Pay1` | func | `(i32) -> (i32)` |
| 9 | `Mpmg.V68O` | func | `(i32 i32) -> ()` |
| 10 | `Mpmg.zYCK` | func | `(i32 i32) -> ()` |
| 11 | `Mpmg.jWu2` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `Mpmg.WVuj` | func | `(i32 i32) -> (i32)` |
| 13 | `Mpmg.yt6l` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `Mpmg.IMeH` | func | `(i32) -> (i32)` |
| 15 | `Mpmg.acMS` | func | `(i32 i32) -> (i32)` |
| 16 | `Mpmg.ESeg` | func | `(i32 i32) -> (i32)` |
| 17 | `Mpmg.yEgR` | func | `(i32 i32) -> ()` |
| 18 | `Mpmg.L7NW` | func | `(i32) -> (i32)` |
| 19 | `Mpmg.BGXc` | func | `(i32) -> (i32)` |
| 20 | `Mpmg.SAqm` | func | `(i32) -> (i32)` |
| 21 | `Mpmg.noZ6` | func | `(i32) -> ()` |
| 22 | `Mpmg.mThr` | func | `(i32 i32) -> ()` |
| 23 | `Mpmg.thwD` | func | `(i32 i32) -> ()` |
| 24 | `Mpmg.a7kJ` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `Mpmg.hToE` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `Mpmg.qLFp` | func | `(i32) -> (i32)` |
| 27 | `Mpmg.zVC9` | func | `(i32 i32) -> ()` |
| 28 | `Mpmg.i3Si` | func | `(i32 i32) -> (i32)` |
| 29 | `Mpmg.tTvT` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `Mpmg.sYPJ` | func | `(i32 i32) -> (i32)` |
| 31 | `Mpmg.jqIh` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `Mpmg.EnKd` | func | `(i32) -> (i32)` |
| 33 | `Mpmg.Lqvt` | func | `() -> (f64)` |
| 34 | `Mpmg.yo8I` | func | `(i32 i32) -> ()` |
| 35 | `Mpmg.iztD` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `Mpmg.RnG0` | func | `(i32) -> (i32)` |
| 37 | `Mpmg.ARFX` | func | `(i32) -> (i32)` |
| 38 | `Mpmg.becW` | func | `(i32) -> (i32)` |
| 39 | `Mpmg.fNdg` | func | `(i32 i32) -> (i32)` |
| 40 | `Mpmg.WkV1` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `Mpmg.RyTL` | func | `(i32) -> (i32)` |
| 42 | `Mpmg.lxTa` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `Mpmg.FPPJ` | func | `(i32) -> (i32)` |
| 44 | `Mpmg.R1tn` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `Mpmg.V6RT` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `Mpmg.SCqD` | func | `(i32 i32 i32) -> ()` |
| 47 | `Mpmg.TJkU` | func | `(i32 i32 i32) -> ()` |
| 48 | `Mpmg.rzdU` | func | `(i32 i32 i32) -> ()` |
| 49 | `Mpmg.mdUQ` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `Mpmg.CIDY` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `Mpmg.LeFq` | func | `(i32 i32) -> ()` |
| 52 | `Mpmg.SW84` | func | `(i32 i32) -> ()` |
| 53 | `Mpmg.t6Tq` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `Mpmg.dqry` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `Mpmg.Nlak` | func | `(i32 f32 f32) -> ()` |
| 56 | `Mpmg.HV5C` | func | `(i32 f32 f32) -> ()` |
| 57 | `Mpmg.DLP0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `Mpmg.gcAd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `Mpmg.gPXV` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `Mpmg.rOMM` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `Mpmg.FoGF` | func | `(i32 i32 i32) -> ()` |
| 62 | `Mpmg.w0TK` | func | `(i32 i32 i32) -> ()` |
| 63 | `Mpmg.SEH6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `Mpmg.C1af` | func | `(i32 i32 i32) -> ()` |
| 65 | `Mpmg.ckrO` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `Mpmg.ebMr` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `Mpmg.pAhm` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `Mpmg.qPqO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `Mpmg.TMm9` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `Mpmg.Cn5e` | func | `(i32) -> (i32)` |
| 71 | `Mpmg.fiu1` | func | `(i32) -> ()` |
| 72 | `Mpmg.IXrm` | func | `(i32) -> (i32)` |
| 73 | `Mpmg.y7TL` | func | `(i32 i32) -> (i32)` |
| 74 | `Mpmg.h2DM` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `Mpmg.rhvQ` | func | `(i32 i32 i32) -> ()` |
| 76 | `Mpmg.iuSF` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `Mpmg.S52o` | func | `() -> (f64)` |
| 78 | `Mpmg.EoJO` | func | `() -> (f64)` |
| 79 | `Mpmg.gqAW` | func | `(i32 i32) -> ()` |
| 80 | `Mpmg.r4Gt` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `Mpmg.zCDA` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `Mpmg.DScd` | func | `(i32 i32 i32) -> ()` |
| 83 | `Mpmg.Ymkq` | func | `(i32 i32 i32) -> ()` |
| 84 | `Mpmg.DxGG` | func | `(i32 i32) -> ()` |
| 85 | `Mpmg.NSjS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `Mpmg.gGdt` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `Mpmg.CF0p` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `Mpmg.TH2k` | func | `(i32 i32) -> ()` |
| 89 | `Mpmg.TvY2` | func | `(i32 i32) -> ()` |
| 90 | `Mpmg.dpPS` | func | `(i32) -> (i32)` |
| 91 | `Mpmg.OOVH` | func | `(i32 i32 i32) -> ()` |
| 92 | `Mpmg.mMMi` | func | `(i32 i32 i32) -> ()` |
| 93 | `Mpmg.QzZs` | func | `(i32) -> (i32)` |
| 94 | `Mpmg.yf0J` | func | `(i32) -> (i32)` |
| 95 | `Mpmg.u7Wo` | func | `(i32 i32) -> ()` |
| 96 | `Mpmg.A6sL` | func | `(i32 i32) -> ()` |
| 97 | `Mpmg.KxEu` | func | `(i32 i32) -> ()` |
| 98 | `Mpmg.j1gt` | func | `(i32 i32) -> ()` |
| 99 | `Mpmg.pk3q` | func | `(i32 i32 i32) -> ()` |
| 100 | `Mpmg.uphN` | func | `(i32 i32 i32) -> ()` |
| 101 | `Mpmg.C0UT` | func | `(i32 i32 f32) -> ()` |
| 102 | `Mpmg.nseT` | func | `(i32 i32 f32) -> ()` |
| 103 | `Mpmg.b20D` | func | `(i32 i32 i32) -> ()` |
| 104 | `Mpmg.dFTM` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `Mpmg.E3Ad` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `Mpmg.y9Zq` | func | `(i32 i32) -> ()` |
| 107 | `Mpmg.pdRD` | func | `(i32 i32) -> ()` |
| 108 | `Mpmg.QIHg` | func | `(i32 i32) -> ()` |
| 109 | `Mpmg.pn3c` | func | `(i32 i32) -> ()` |
| 110 | `Mpmg.sQ1h` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `Mpmg.hF1p` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `Mpmg.Ntwj` | func | `(i32 i32 i32) -> ()` |
| 113 | `Mpmg.v416` | func | `(i32 i32 i32) -> ()` |
| 114 | `Mpmg.YaRy` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `Mpmg.oeWh` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `Mpmg.djMN` | func | `(i32 i32) -> ()` |
| 117 | `Mpmg.R6Ou` | func | `(i32 i32) -> ()` |
| 118 | `Mpmg.jZhU` | func | `(i32 i32) -> (i32)` |
| 119 | `Mpmg.Uj40` | func | `(i32 i32) -> (i32)` |
| 120 | `Mpmg.ONdE` | func | `(i32 i32) -> ()` |
| 121 | `Mpmg.rP8c` | func | `(i32 i32) -> ()` |
| 122 | `Mpmg.xVSP` | func | `(i32) -> (i32)` |
| 123 | `Mpmg.k5F2` | func | `(i32 i32) -> ()` |
| 124 | `Mpmg.i4iQ` | func | `(i32 i32) -> ()` |
| 125 | `Mpmg.woso` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `Mpmg.ijGH` | func | `(i32 i32 i32) -> ()` |
| 127 | `Mpmg.hGKP` | func | `(i32 i32 i32) -> ()` |
| 128 | `Mpmg.yIjh` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `Mpmg.W0zE` | func | `(i32 i32) -> ()` |
| 130 | `Mpmg.L0sN` | func | `(i32 i32 i32 i32) -> (i32)` |
| 131 | `Mpmg.xoG9` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `Mpmg.CGUJ` | func | `(i32 i32 i32) -> ()` |
| 133 | `Mpmg.F75q` | func | `(i32 i32 i32) -> ()` |
| 134 | `Mpmg.MwJa` | func | `(i32) -> ()` |
| 135 | `Mpmg.Tx7j` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `Mpmg.to8X` | func | `(i32 i32 i32) -> ()` |
| 137 | `Mpmg.mCcf` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `Mpmg.rgEu` | func | `(i32 i32 i32) -> (i32)` |
| 139 | `Mpmg.ESAE` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `Mpmg.WvHt` | func | `(i32 i32) -> ()` |
| 141 | `Mpmg.lV42` | func | `(i32) -> (i32)` |
| 142 | `Mpmg.Yl4U` | func | `(i32 i32) -> ()` |
| 143 | `Mpmg.HkBs` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `Mpmg.Buo9` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `Mpmg.Dqnv` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `Mpmg.NZGW` | func | `(i32 i32) -> ()` |
| 147 | `Mpmg.N7gl` | func | `(i32 i32) -> ()` |
| 148 | `Mpmg.ONJR` | func | `(i32 i32) -> ()` |
| 149 | `Mpmg.E8TR` | func | `(i32 i32) -> ()` |
| 150 | `Mpmg.XJiM` | func | `(i32) -> (i32)` |
| 151 | `Mpmg.qTsV` | func | `(i32) -> (i32)` |
| 152 | `Mpmg.Logt` | func | `(i32) -> (i32)` |
| 153 | `Mpmg.Oe0s` | func | `(i32) -> (i32)` |
| 154 | `Mpmg.a4Ef` | func | `(i32) -> (i32)` |
| 155 | `Mpmg.GYB8` | func | `(i32) -> (i32)` |
| 156 | `Mpmg.Qy0C` | func | `() -> (i32)` |
| 157 | `Mpmg.LfYG` | func | `() -> (i32)` |
| 158 | `Mpmg.zMRI` | func | `() -> (i32)` |
| 159 | `Mpmg.uqRC` | func | `() -> (i32)` |
| 160 | `Mpmg.QY9j` | func | `(i32 i32) -> (i32)` |
| 161 | `Mpmg.IntP` | func | `(i32) -> ()` |
| 162 | `Mpmg.g1UW` | func | `(i32 i32) -> (i32)` |
| 163 | `Mpmg.ExUm` | func | `(i32) -> (i32)` |
| 164 | `Mpmg.Fwa6` | func | `(i32) -> (i32)` |
| 165 | `Mpmg.viSE` | func | `(i32) -> (i32)` |
| 166 | `Mpmg.JIRn` | func | `(i32) -> ()` |
| 167 | `Mpmg.unPE` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `Mpmg.pZsU` | func | `(i32) -> (i32)` |
| 169 | `Mpmg.dOSl` | func | `(i32) -> (i32)` |
| 170 | `Mpmg.uJGJ` | func | `(i32 i32) -> (i32)` |
| 171 | `Mpmg.lEkt` | func | `(i32) -> ()` |
| 172 | `Mpmg.TzuO` | func | `() -> (i32)` |
| 173 | `Mpmg.vziO` | func | `(i32 i32) -> (i32)` |
| 174 | `Mpmg.xNBL` | func | `(i32 i32) -> ()` |
| 175 | `Mpmg.HWmu` | func | `(i32 i32) -> ()` |
| 176 | `Mpmg.bvlY` | func | `(i32) -> (i32)` |
| 177 | `Mpmg.hzyp` | func | `(i32 i32) -> (i32)` |
| 178 | `Mpmg.F68u` | func | `(i32) -> ()` |
| 179 | `Mpmg.MjE0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `Mpmg.p5mR` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `Mpmg.TDcb` | func | `(i32 i32) -> ()` |
| 182 | `Mpmg.o5uK` | func | `(i32 i32) -> ()` |
| 183 | `Mpmg.jCQ2` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `Mpmg.sFoG` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `Mpmg.QM73` | func | `(i32 f32) -> ()` |
| 186 | `Mpmg.n3nr` | func | `(i32 f32) -> ()` |
| 187 | `Mpmg.u4Dg` | func | `(i32 i32) -> ()` |
| 188 | `Mpmg.jQcE` | func | `(i32 i32) -> ()` |
| 189 | `Mpmg.NbP2` | func | `(i32) -> (i32)` |
| 190 | `Mpmg.eUc7` | func | `(i32) -> (i32)` |
| 191 | `Mpmg.zuar` | func | `(i32) -> (i32)` |
| 192 | `Mpmg.REqo` | func | `(i32) -> (i32)` |
| 193 | `Mpmg.HH7A` | func | `(i32 i32 i32) -> ()` |
| 194 | `Mpmg.b6TB` | func | `(i32 i32 i32) -> ()` |
| 195 | `Mpmg.Ez4j` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `Mpmg.khmB` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `Mpmg.XqrV` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `Mpmg.dPUi` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `Mpmg.xY9t` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `Mpmg.L8DV` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `Mpmg.TXVk` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `Mpmg.p9Ty` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `Mpmg.ThCL` | func | `(i32) -> (i32)` |
| 204 | `Mpmg.Jf2x` | func | `(i32) -> (i32)` |
| 205 | `Mpmg.xWFv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `Mpmg.aJwE` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `Mpmg.pnKL` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `Mpmg.a3UL` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `Mpmg.zyNz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `Mpmg.UVCH` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `Mpmg.Odt6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `Mpmg.mwni` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `Mpmg.cR2z` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `Mpmg.kWE9` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `Mpmg.LnNM` | func | `(i32 i32 i32) -> ()` |
| 216 | `Mpmg.XB9P` | func | `(i32 i32 i32) -> ()` |
| 217 | `Mpmg.s4Ja` | func | `(i32 i32) -> ()` |
| 218 | `Mpmg.Tqd1` | func | `(i32 i32) -> ()` |
| 219 | `Mpmg.PMCH` | func | `(i32 i32) -> ()` |
| 220 | `Mpmg.GkDW` | func | `(i32 i32) -> ()` |
| 221 | `Mpmg.c4XQ` | func | `(i32 i32) -> ()` |
| 222 | `Mpmg.fGhS` | func | `(i32 i32) -> ()` |
| 223 | `Mpmg.bkEn` | func | `(i32 f32 f32) -> ()` |
| 224 | `Mpmg.PARB` | func | `(i32 f32 f32) -> ()` |
| 225 | `Mpmg.kW0M` | func | `(i32 i32) -> ()` |
| 226 | `Mpmg.ymuc` | func | `(i32 i32) -> ()` |
| 227 | `Mpmg.MIN9` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `Mpmg.yGBi` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `Mpmg.NyJT` | func | `(i32 i32 i32) -> ()` |
| 230 | `Mpmg.zSqS` | func | `(i32) -> (i32)` |
| 231 | `Mpmg.MR2U` | func | `(i32) -> (i32)` |
| 232 | `Mpmg.IEsW` | func | `(i32 i32) -> ()` |
| 233 | `Mpmg.Ultt` | func | `(i32 i32) -> ()` |
| 234 | `Mpmg.noN6` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `Mpmg.T7zc` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `Mpmg.PTbC` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `Mpmg.GMxG` | func | `(i32 i32 i32) -> ()` |
| 238 | `Mpmg.S9vT` | func | `(i32 i32 i32) -> ()` |
| 239 | `Mpmg.Toih` | func | `(i32 i32 i32) -> ()` |
| 240 | `Mpmg.BmH7` | func | `(i32 i32 i32) -> ()` |
| 241 | `Mpmg.jjnd` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `Mpmg.sOf5` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `Mpmg.Pcmr` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `Mpmg.t0Vl` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `Mpmg.j3Bq` | func | `(i32) -> (i32)` |
| 246 | `Mpmg.LLuY` | func | `(i32) -> (i32)` |
| 247 | `Mpmg.Xjda` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `Mpmg.APfn` | func | `(i32 i32) -> ()` |
| 249 | `Mpmg.p103` | func | `(i32 i32) -> ()` |
| 250 | `Mpmg.yTav` | func | `(i32 i32) -> (i32)` |
| 251 | `Mpmg.Xtrc` | func | `(i32 i32) -> (i32)` |
| 252 | `Mpmg.VdGJ` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `Mpmg.LWzZ` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `Mpmg.aqfp` | func | `(i32 i32) -> ()` |
| 255 | `Mpmg.ny5P` | func | `(i32 i32) -> ()` |
| 256 | `Mpmg.S2WO` | func | `(i32) -> (i32)` |
| 257 | `Mpmg.RXwI` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `Mpmg.kmcW` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `Mpmg.xKiD` | func | `(i32) -> ()` |
| 260 | `Mpmg.IXXS` | func | `(i32 i32) -> ()` |
| 261 | `Mpmg.bGye` | func | `(i32 i32) -> ()` |
| 262 | `Mpmg.dvU9` | func | `(i32 i32) -> ()` |
| 263 | `Mpmg.U1Pd` | func | `(i32 i32) -> ()` |
| 264 | `Mpmg.rh74` | func | `(i32 i32) -> ()` |
| 265 | `Mpmg.LMYx` | func | `(i32 i32) -> ()` |
| 266 | `Mpmg.DCs9` | func | `(i32 i32) -> ()` |
| 267 | `Mpmg.J7bJ` | func | `(i32 i32) -> ()` |
| 268 | `Mpmg.jktV` | func | `(i32) -> (i32)` |
| 269 | `Mpmg.SPlD` | func | `(i32) -> (i32)` |
| 270 | `Mpmg.ZDl2` | func | `(i32) -> (i32)` |
| 271 | `Mpmg.NzSa` | func | `(i32) -> (i32)` |
| 272 | `Mpmg.OuZI` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `Mpmg.rkbF` | func | `(i32) -> ()` |
| 274 | `Mpmg.tc8A` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `Mpmg.XySZ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `Mpmg.m1Ll` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `Mpmg.Z62b` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `Mpmg.t4ay` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `Mpmg.GB7v` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `Mpmg.fWsH` | func | `(i32) -> (i32)` |
| 281 | `Mpmg.rQ99` | func | `(i32) -> (i32)` |
| 282 | `Mpmg.dFsY` | func | `(i32) -> (i32)` |
| 283 | `Mpmg.p5Qo` | func | `(i32) -> (i32)` |
| 284 | `Mpmg.Ysn5` | func | `(i32 i32) -> ()` |
| 285 | `Mpmg.BrSH` | func | `(i32) -> ()` |
| 286 | `Mpmg.cGDF` | func | `(i32 i32) -> ()` |
| 287 | `Mpmg.TG8I` | func | `(i32) -> (i32)` |
| 288 | `Mpmg.EjU1` | func | `(i32 i32) -> (i32)` |
| 289 | `Mpmg.gVe8` | func | `(i32 i32) -> (i32)` |
| 290 | `Mpmg.Dao7` | func | `(i32 i32) -> (i32)` |
| 291 | `Mpmg.yDQ7` | func | `(f64) -> (i32)` |
| 292 | `Mpmg.YqNx` | func | `(i32 i32) -> (i32)` |
| 293 | `Mpmg.ut4W` | func | `(i32 i32) -> (i32)` |
| 294 | `Mpmg.PHdy` | func | `(i32 i32) -> (i32)` |
| 295 | `Mpmg.V1Sl` | func | `(i32 i32) -> (i32)` |
| 296 | `Mpmg.fSKi` | func | `(i32 i32) -> (i32)` |
| 297 | `Mpmg.KffC` | func | `(i32 i32) -> (i32)` |
| 298 | `Mpmg.foYB` | func | `(i32 i32) -> (i32)` |

## Exports

159 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `vHJb` | func | 3025 | `(i32 i32) -> (i32 i32)` |
| `hMID` | func | 2022 | `(i32 f64) -> (i32)` |
| `OCOm` | func | 2485 | `(i32) -> (i32)` |
| `IpnH` | func | 1445 | `() -> (i32)` |
| `DHqT` | func | 1846 | `(i32 i32 i32 i32) -> (i32)` |
| `UPR1` | func | 1831 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `qmBf` | func | 1943 | `(i32) -> (i32)` |
| `mhtf` | func | 895 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `fvPW` | func | 2512 | `(i32) -> (i32)` |
| `mSCc` | func | 3028 | `(i32 i32) -> (i32 i32)` |
| `REyG` | func | 1597 | `(i32 i32) -> ()` |
| `Vv5l` | func | 686 | `(i32 i32) -> (i32)` |
| `oVrB` | func | 1395 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `I2JQ` | func | 1496 | `(i32 i32) -> (i32)` |
| `oLK8` | func | 2482 | `(i32) -> (f64)` |
| `vLCc` | func | 741 | `(i32 i32 i32 i32) -> (i32)` |
| `zd85` | func | 1962 | `(i32 i32 i32 i32) -> ()` |
| `tLuh` | global | 2 | `` |
| `vNhO` | func | 2395 | `(i32 i32 i32 i32) -> (i32)` |
| `QosX` | func | 1224 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `jRVT` | func | 3080 | `(i32 i32 i32 i32) -> ()` |
| `mCus` | func | 1267 | `(i32 i32 i32) -> (i32)` |
| `M7HJ` | func | 1900 | `(i32) -> ()` |
| `htk5` | func | 2491 | `(i32) -> (i32)` |
| `hDwf` | func | 1557 | `(i32 i32 i32 i32) -> (i32)` |
| `XLdY` | func | 1416 | `(i32 i32) -> (i32)` |
| `rER9` | func | 1273 | `(i32 i32 i32) -> ()` |
| `memory` | memory | 0 | `` |
| `V8ql` | func | 2440 | `(i32) -> (i32)` |
| `XPIq` | func | 1118 | `(i32 i32) -> ()` |
| `L3rP` | func | 2505 | `(i32) -> (i32)` |
| `OWsb` | func | 2268 | `(i32 i32) -> ()` |
| `MAPF` | func | 571 | `(i32 i32 i32) -> (i32)` |
| `ls6g` | func | 3221 | `() -> (i32)` |
| `QEt1` | func | 2383 | `(i32 i32) -> (i32)` |
| `Lqz5` | func | 2969 | `() -> ()` |
| `J5b5` | func | 2513 | `(i32 i32) -> (i32)` |
| `axBK` | func | 1866 | `(i32 i32 f64 f64 f64) -> ()` |
| `PJ3y` | func | 1523 | `(i32 f64) -> (f64)` |
| `zzwR` | func | 1520 | `(i32 i32) -> (i32)` |
| `mclv` | func | 2814 | `(i32) -> (i32)` |
| `uBBu` | func | 3196 | `(i32) -> (i32)` |
| `NOUX` | func | 3055 | `() -> (i32 i32)` |
| `g2s0` | func | 672 | `(i32 i32) -> (i32)` |
| `wxLD` | func | 1825 | `() -> (i32)` |
| `Q2tG` | func | 926 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `rqJs` | func | 1960 | `(i32) -> (i32)` |
| `mzei` | func | 749 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `lY47` | func | 1217 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `xZTv` | func | 1747 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `eKmd` | func | 2483 | `(i32) -> (i32)` |
| `reB8` | func | 2847 | `(i32) -> (i32)` |
| `ifKX` | func | 3222 | `() -> (i32)` |
| `Iktu` | func | 1246 | `(i32 i32) -> (i32)` |
| `GzAe` | func | 3029 | `(i32 i32) -> (i32 i32)` |
| `zjmI` | func | 1884 | `(i32 i32) -> (i32)` |
| `kXhF` | func | 1521 | `(i32 i32) -> (i32)` |
| `Hrut` | func | 2488 | `(i32) -> (i32)` |
| `xXaG` | func | 1396 | `(i32 f64 f64) -> (i32)` |
| `eIoR` | func | 3031 | `(i32 i32) -> (i32 i32)` |
| `iPth` | func | 1467 | `(i32 i32 i32 i32) -> ()` |
| `nmkX` | func | 3041 | `(i32) -> (i32 i32)` |
| `bdDk` | func | 3020 | `(i32 i32 i32) -> (i32 i32)` |
| `Bo87` | func | 1585 | `(i32 i32) -> (i32)` |
| `G72u` | func | 3090 | `(i32 i32) -> ()` |
| `MSxk` | func | 2487 | `(i32) -> (i32)` |
| `Xaha` | func | 1490 | `(i32) -> (i32)` |
| `tk3V` | func | 3039 | `(i32) -> (i32 i32)` |
| `zFSO` | func | 3054 | `() -> (i32 i32)` |
| `nrLC` | func | 2514 | `(i32 i32) -> (i32)` |
| `YRVQ` | func | 3152 | `() -> ()` |
| `Ewgz` | func | 2504 | `(i32 i32) -> ()` |
| `utv4` | func | 3001 | `(i32 i32) -> ()` |
| `ncbW` | func | 1708 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `qedy` | func | 3089 | `(i32 i32 i32) -> ()` |
| `gNUI` | func | 2803 | `(i32) -> (i32)` |
| `CoLd` | func | 3118 | `() -> (i32)` |
| `dE6f` | func | 746 | `(i32) -> (i32)` |
| `LVWj` | func | 1117 | `(i32 i32) -> (i32)` |
| `A5sb` | func | 1899 | `(i32) -> ()` |
| `hF5P` | func | 2486 | `(i32) -> (i32)` |
| `lCSe` | func | 2490 | `(i32) -> (i32)` |
| `pWFP` | func | 1299 | `(i32 i32) -> (i32)` |
| `fbUN` | func | 1731 | `(i32) -> (i32)` |
| `JFuV` | func | 1537 | `(i32 i32 i32) -> (i32)` |
| `TQ9h` | func | 3019 | `(i32 i32 i32) -> (i32 i32)` |
| `Vy4D` | func | 2352 | `(i32 i32) -> (i32)` |
| `UHgd` | func | 2056 | `(i32 i32) -> ()` |
| `LAf2` | func | 2350 | `(i32 i32) -> (i32)` |
| `oyMU` | func | 3026 | `(i32 i32) -> (i32 i32)` |
| `RkPm` | func | 1480 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `iX0g` | func | 3030 | `(i32 i32) -> (i32 i32)` |
| `joCm` | func | 2192 | `(i32 i32) -> (i32)` |
| `I13e` | func | 2522 | `(i32) -> (i32)` |
| `EuHE` | func | 2484 | `(i32) -> (i32)` |
| `WOxV` | func | 1324 | `(i32) -> ()` |
| `IJur` | func | 710 | `(i32 i32) -> (i32)` |
| `Tdus` | func | 896 | `(i32 i32) -> (i32)` |
| `hvL8` | func | 1342 | `(i32 i32 i32) -> (i32)` |
| `N69m` | func | 1765 | `(i32 i32) -> (i32)` |
| `LK9u` | func | 2492 | `(i32) -> (i32)` |
| `qDKL` | func | 2502 | `(i32) -> (i32)` |
| `ej6G` | func | 1874 | `(i32 i32) -> ()` |
| `CbJ6` | func | 3145 | `(i32 i32 i32) -> ()` |
| `KrPS` | func | 2572 | `() -> (i32)` |
| `t6Ja` | func | 2782 | `(i32) -> (i32)` |
| `LIjc` | func | 2423 | `(i32) -> (i32)` |
| `zyDy` | func | 2988 | `(i32 i32) -> (i32)` |
| `onOF` | func | 3151 | `(i32) -> ()` |
| `IewK` | func | 1178 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `rjEZ` | func | 2605 | `(i32 i32) -> ()` |
| `sgKx` | func | 1509 | `(i32 i32) -> (i32)` |
| `EWuJ` | func | 2080 | `(i32 i32) -> (i32)` |
| `v5Ib` | func | 3042 | `(i32) -> (i32 i32)` |
| `cNi1` | func | 2349 | `(i32 i32) -> (i32)` |
| `KJpc` | func | 3043 | `(i32) -> (i32 i32)` |
| `u7tL` | func | 2560 | `(i32 i32) -> ()` |
| `YGW7` | func | 764 | `(i32 i32 i32) -> (i32)` |
| `qumj` | global | 1 | `` |
| `ttRA` | func | 1601 | `(i32 f64 f64 f64) -> (i32)` |
| `mVGS` | func | 1489 | `(i32 i32 i32 i32) -> (i32)` |
| `LRoC` | func | 2523 | `(i32) -> (i32)` |
| `wfRR` | func | 3040 | `(i32) -> (i32 i32)` |
| `NPZV` | func | 2299 | `(i32 i32) -> ()` |
| `p39B` | func | 1485 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vIx6` | func | 2469 | `(i32) -> (i32)` |
| `igwC` | func | 1218 | `(i32 i32 i32 i32) -> (i32)` |
| `CcQf` | func | 2825 | `(i32) -> ()` |
| `sRPV` | func | 1753 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `UWiT` | func | 2040 | `(i32 f64 f64 f64) -> (i32)` |
| `pdRH` | func | 2521 | `(i32) -> (i32)` |
| `BrAi` | func | 1327 | `(i32 i32) -> (i32)` |
| `mJ8H` | func | 1639 | `(i32 i32 i32 i32) -> (i32)` |
| `DrY1` | func | 3027 | `(i32 i32) -> (i32 i32)` |
| `Jhph` | func | 1441 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `xGo4` | func | 2994 | `(i32 i32 i32 i32) -> (i32)` |
| `mOYg` | func | 621 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jFwW` | func | 3056 | `() -> (i32 i32)` |
| `ytmD` | func | 2351 | `(i32 i32) -> (i32)` |
| `nIZw` | func | 2789 | `(i32) -> (i32)` |
| `W2kl` | func | 1891 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `Q304` | func | 2606 | `() -> (i32)` |
| `bMGZ` | func | 2213 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WMT2` | func | 1596 | `(i32 i32) -> ()` |
| `SLEf` | func | 2503 | `(i32) -> (i32)` |
| `Mb3R` | func | 2159 | `(i32 i32) -> (i32)` |
| `nvFy` | func | 1448 | `(i32) -> (i32)` |
| `nc2U` | func | 1292 | `(i32) -> (i32)` |
| `hVvw` | func | 2489 | `(i32) -> ()` |
| `JIum` | func | 914 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `t3w4` | func | 2439 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `bEl3` | func | 2468 | `(i32 i32) -> ()` |
| `puvP` | func | 2269 | `(i32 f64) -> (i32)` |
| `e3z4` | func | 1995 | `(i32 i32) -> ()` |
| `j9jx` | func | 681 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `v7Db` | func | 858 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `N0od` | func | 3192 | `() -> (f64)` |
| `iTCU` | func | 3197 | `(i32) -> ()` |
| `b79b` | func | 2500 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 755 · max 755
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2641352, `i32` = i32.const 2641924

## Functions

- 2,934 bodies · 4,062,185 code bytes · avg 1.4 KB
- instruction scan: 2,934 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 116 |
| <= 128 bytes | 258 |
| <= 256 bytes | 380 |
| <= 512 bytes | 679 |
| <= 1024 bytes | 578 |
| <= 2048 bytes | 426 |
| <= 4096 bytes | 182 |
| <= 8192 bytes | 92 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,831 | 91,028 | local.get×26756, i32.const×10177, i32.load×5791, local.set×4887, local.tee×4767 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 148 | 112,505 | 54,503 | local.get×15178, i32.const×6537, i32.add×3196, local.set×3087, i32.load×2954 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,544 | 21,400 | local.get×6231, i32.const×2827, local.set×1224, i32.add×1128, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 105 | 36,397 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 59 | 29,628 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 25 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 35 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 70 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 198 | `(i32 i32) -> ()` | 10 | 27,205 | 13,103 | local.get×4614, i32.load×1243, i32.const×1038, end×817, i32.add×750 |
| 220 | `(i32) -> ()` | 19 | 23,276 | 10,918 | local.get×2734, i32.load×1496, i32.const×1188, local.tee×1012, end×856 |
| 725 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 726 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1585 | `(i32 i32) -> (i32)` | 180 | 54,757 | 19,852 | local.get×6590, i32.const×2618, i64.store×1917, i64.const×1082, i64.load×1056 |
| 1989 | `(i32 i32) -> ()` | 111 | 39,589 | 17,528 | local.get×5140, i32.const×1646, local.set×891, local.tee×743, end×677 |
| 2605 | `(i32 i32) -> ()` | 398 | 142,401 | 64,327 | local.get×18492, i32.const×8026, local.set×3850, i32.load×3179, end×2818 |
| 2884 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2902 | `(i32 i32) -> ()` | 143 | 33,655 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
| `local.get` | 543,030 |
| `i32.const` | 227,067 |
| `local.tee` | 100,874 |
| `i32.load` | 95,214 |
| `local.set` | 94,564 |
| `i32.add` | 87,677 |
| `end` | 79,713 |
| `br_if` | 64,845 |
| `i32.store` | 47,004 |
| `block` | 37,469 |
| `i64.const` | 32,855 |
| `i64.store` | 32,019 |
| `if` | 30,481 |
| `call` | 29,686 |
| `i32.sub` | 24,819 |
| `i64.load` | 23,853 |
| `br` | 23,254 |
| `i32.eqz` | 19,715 |
| `select` | 16,994 |
| `i32.shl` | 16,495 |
| `i32.and` | 16,393 |
| `i32.ne` | 15,962 |
| `i32.load8_u` | 15,101 |
| `i32.eq` | 13,989 |
| `i32.store8` | 12,697 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,934/2,934 (degraded: 0)
