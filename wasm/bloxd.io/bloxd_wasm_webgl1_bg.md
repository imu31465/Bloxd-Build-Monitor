# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `3lwmg.ecbaa066` · analyzed 2026-11-22T23:29:33+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.d2d31a1a63a3fb785a99.wasm
> 4,821,797 bytes (4.6 MB) · sha256 `014507591fe08d6d…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,770,278 → 4,821,797 bytes (+51,519)
- defined functions 2,822 → 2,847
- code bytes 3,937,811 → 3,977,139
- data bytes 788,708 → 798,641
- name-section module id `c9aac24a9ae7bc4a.10478` → `63b13e03810bc945.10524`
- export signatures: +1 × `(i32) -> (i32)`; +1 × `(i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)`; +1 × `(i32) -> (i32 i32)`; -1 × `(i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)`
- export identifiers rotated by the obfuscator: 1/156 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `WebGL1 writes no array texture: grids are 2DtexSubImage thre`; `heldAtBackstopWindowsclosure invoked recursively or after be`; `uvOffsetmore than 65536 terrain ids: the rest are not drawna`; `vertex_storagestorage_buffersindirectindirect_first_instance`
- removed embedded strings: `five buffersvDiffuseColorvDiffuseInfosdiffuseMatrixalphaCutO`; `it has no textureits diffuse texture is not a 2D imageits al`; `uvOffsetmore than 65536 terrain ids: the rest are not drawna`; `vertex_storagestorage_buffersindirectindirect_first_instance`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,847 / 281 |
| Exports / imports | 156 / 281 |
| Code bytes (function bodies) | 3,977,139 (3.8 MB) |
| Total local variables | 30,298 |
| Instructions (scanable bodies) | 1,866,501 |
| Data segments / bytes | 3,741 / 798,641 |
| Element segments / entries | 1 / 730 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `63b13e03810bc945.10524` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,466 | 172 |
| 2 | import | 3,374 | 281 |
| 3 | function | 2,893 | 2847 |
| 4 | table | 7 | 1 |
| 5 | memory | 5 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,249 | 156 |
| 9 | element | 1,467 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 3,982,364 | 2847 |
| 11 | data | 828,873 | 3741 |
| 0 | custom:name | 30 | — |

## Types

172 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

281 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `ULHu.z2XU` | func | `(i32) -> (f64)` |
| 1 | `ULHu.vQpH` | func | `() -> (i32)` |
| 2 | `ULHu.dCTj` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `ULHu.HwKA` | func | `(i32) -> ()` |
| 4 | `ULHu.GvjR` | func | `(i32 i32) -> (i32)` |
| 5 | `ULHu.tEKl` | func | `(i32) -> (i32)` |
| 6 | `ULHu.ljUs` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `ULHu.glXH` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `ULHu.jRBe` | func | `(i32) -> (i32)` |
| 9 | `ULHu.XR57` | func | `(i32 i32) -> ()` |
| 10 | `ULHu.DcCR` | func | `(i32 i32) -> ()` |
| 11 | `ULHu.tA05` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `ULHu.b3IP` | func | `(i32 i32) -> (i32)` |
| 13 | `ULHu.SleH` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `ULHu.s81B` | func | `(i32) -> (i32)` |
| 15 | `ULHu.MAJK` | func | `(i32 i32) -> (i32)` |
| 16 | `ULHu.riuz` | func | `(i32 i32) -> (i32)` |
| 17 | `ULHu.sr96` | func | `(i32 i32) -> ()` |
| 18 | `ULHu.VI8I` | func | `(i32) -> (i32)` |
| 19 | `ULHu.sfEV` | func | `(i32) -> (i32)` |
| 20 | `ULHu.wEqy` | func | `(i32) -> (i32)` |
| 21 | `ULHu.StHy` | func | `(i32) -> ()` |
| 22 | `ULHu.Ns08` | func | `(i32 i32) -> ()` |
| 23 | `ULHu.YCxp` | func | `(i32 i32) -> ()` |
| 24 | `ULHu.TzWK` | func | `(i32) -> (i32)` |
| 25 | `ULHu.c42p` | func | `(i32 i32) -> ()` |
| 26 | `ULHu.cQAk` | func | `(i32 i32) -> (i32)` |
| 27 | `ULHu.Kqer` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `ULHu.RuJq` | func | `(i32 i32) -> (i32)` |
| 29 | `ULHu.eEgj` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `ULHu.iJGA` | func | `(i32) -> (i32)` |
| 31 | `ULHu.Yqno` | func | `(i32 i32) -> ()` |
| 32 | `ULHu.hTCw` | func | `(i32) -> (i32)` |
| 33 | `ULHu.Eszh` | func | `(i32) -> (i32)` |
| 34 | `ULHu.SykW` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `ULHu.hT7M` | func | `(i32) -> (i32)` |
| 36 | `ULHu.Hfpy` | func | `(i32) -> (i32)` |
| 37 | `ULHu.r4li` | func | `(i32) -> (i32)` |
| 38 | `ULHu.HPph` | func | `(i32 i32) -> (i32)` |
| 39 | `ULHu.mIBw` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `ULHu.S7M0` | func | `(i32) -> (i32)` |
| 41 | `ULHu.h2P9` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `ULHu.fw6e` | func | `() -> (f64)` |
| 43 | `ULHu.g4Kt` | func | `(i32) -> (i32)` |
| 44 | `ULHu.tZhK` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `ULHu.MIRr` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `ULHu.i1jT` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `ULHu.LA32` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `ULHu.peOU` | func | `(i32 i32 i32) -> ()` |
| 49 | `ULHu.blYs` | func | `(i32 i32 i32) -> ()` |
| 50 | `ULHu.DVZ9` | func | `(i32 i32 i32) -> ()` |
| 51 | `ULHu.O0IM` | func | `(i32 i32) -> ()` |
| 52 | `ULHu.Bsdk` | func | `(i32 i32) -> ()` |
| 53 | `ULHu.mXmP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `ULHu.R5cM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `ULHu.u4Dr` | func | `(i32 f32 f32) -> ()` |
| 56 | `ULHu.fOAO` | func | `(i32 f32 f32) -> ()` |
| 57 | `ULHu.Zyyc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `ULHu.jA4s` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `ULHu.fpnk` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `ULHu.UAWZ` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `ULHu.W9ud` | func | `(i32 i32 i32) -> ()` |
| 62 | `ULHu.gLVC` | func | `(i32 i32 i32) -> ()` |
| 63 | `ULHu.rmOQ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `ULHu.q867` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `ULHu.clwj` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `ULHu.TKmA` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `ULHu.HlTF` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `ULHu.k7fE` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `ULHu.TuCG` | func | `(i32) -> (i32)` |
| 70 | `ULHu.QfT6` | func | `(i32) -> ()` |
| 71 | `ULHu.USww` | func | `(i32) -> (i32)` |
| 72 | `ULHu.gTzm` | func | `(i32 i32) -> (i32)` |
| 73 | `ULHu.gm5K` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `ULHu.tCZr` | func | `(i32 i32 i32) -> ()` |
| 75 | `ULHu.L0sR` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `ULHu.GPh9` | func | `() -> (f64)` |
| 77 | `ULHu.ZvHw` | func | `() -> (f64)` |
| 78 | `ULHu.GKtT` | func | `(i32 i32) -> ()` |
| 79 | `ULHu.qRI3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `ULHu.Bidz` | func | `(i32 i32 i32) -> ()` |
| 81 | `ULHu.Mc7Q` | func | `(i32 i32 i32) -> ()` |
| 82 | `ULHu.bWPH` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `ULHu.s3Rn` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `ULHu.NYEj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `ULHu.TZud` | func | `(i32 i32) -> ()` |
| 86 | `ULHu.D7Fn` | func | `(i32 i32) -> ()` |
| 87 | `ULHu.kxID` | func | `(i32) -> (i32)` |
| 88 | `ULHu.sGU6` | func | `(i32 i32) -> ()` |
| 89 | `ULHu.eDLt` | func | `(i32 i32) -> ()` |
| 90 | `ULHu.hywR` | func | `(i32 i32 i32) -> ()` |
| 91 | `ULHu.YJGB` | func | `(i32 i32 i32) -> ()` |
| 92 | `ULHu.xbq3` | func | `(i32) -> (i32)` |
| 93 | `ULHu.rjoo` | func | `(i32) -> (i32)` |
| 94 | `ULHu.drCY` | func | `(i32 i32) -> (i32)` |
| 95 | `ULHu.nJy3` | func | `(i32 i32) -> (i32)` |
| 96 | `ULHu.EB5K` | func | `(i32 i32) -> ()` |
| 97 | `ULHu.D0EP` | func | `(i32 i32) -> ()` |
| 98 | `ULHu.X2aC` | func | `(i32 i32 i32) -> ()` |
| 99 | `ULHu.hbnR` | func | `(i32 i32 i32) -> ()` |
| 100 | `ULHu.rocr` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `ULHu.WdjM` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `ULHu.FNKV` | func | `(i32 i32 f32) -> ()` |
| 103 | `ULHu.W7Ch` | func | `(i32 i32 f32) -> ()` |
| 104 | `ULHu.HXfc` | func | `(i32 i32 i32) -> ()` |
| 105 | `ULHu.BKZX` | func | `(i32 i32 i32) -> ()` |
| 106 | `ULHu.RuD8` | func | `(i32 i32 i32) -> ()` |
| 107 | `ULHu.QJqO` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `ULHu.RiKw` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `ULHu.p48J` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `ULHu.DQn1` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `ULHu.qjoN` | func | `(i32 i32) -> ()` |
| 112 | `ULHu.IMTB` | func | `(i32 i32) -> ()` |
| 113 | `ULHu.azj6` | func | `(i32 i32) -> ()` |
| 114 | `ULHu.QKF3` | func | `(i32 i32) -> ()` |
| 115 | `ULHu.mrHF` | func | `(i32) -> (i32)` |
| 116 | `ULHu.yqL1` | func | `(i32) -> (i32)` |
| 117 | `ULHu.s2au` | func | `(i32) -> (i32)` |
| 118 | `ULHu.eSVP` | func | `(i32) -> (i32)` |
| 119 | `ULHu.mdHS` | func | `(i32 i32) -> ()` |
| 120 | `ULHu.DOa9` | func | `(i32 i32) -> ()` |
| 121 | `ULHu.ZvLs` | func | `(i32 i32) -> ()` |
| 122 | `ULHu.sACK` | func | `(i32 i32) -> ()` |
| 123 | `ULHu.csU3` | func | `(i32 i32) -> ()` |
| 124 | `ULHu.XqTZ` | func | `(i32 i32) -> ()` |
| 125 | `ULHu.Pz02` | func | `(i32 i32) -> (i32)` |
| 126 | `ULHu.NLAr` | func | `(i32 i32) -> (i32)` |
| 127 | `ULHu.eX3Y` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `ULHu.RXuO` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `ULHu.lpKU` | func | `(i32 i32) -> ()` |
| 130 | `ULHu.NDFR` | func | `(i32 i32) -> ()` |
| 131 | `ULHu.ISxt` | func | `(i32) -> (i32)` |
| 132 | `ULHu.ZL1E` | func | `(i32 i32) -> ()` |
| 133 | `ULHu.Ue3j` | func | `(i32 i32) -> ()` |
| 134 | `ULHu.gtSB` | func | `(i32 i32 i32) -> ()` |
| 135 | `ULHu.BGcO` | func | `(i32 i32 i32) -> ()` |
| 136 | `ULHu.tECg` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `ULHu.C4EO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `ULHu.mo5T` | func | `(i32 i32) -> ()` |
| 139 | `ULHu.wjG3` | func | `(i32 i32 i32) -> ()` |
| 140 | `ULHu.tcs0` | func | `(i32 i32 i32) -> ()` |
| 141 | `ULHu.mMnT` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `ULHu.gvoU` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `ULHu.Crho` | func | `(i32 i32 i32) -> ()` |
| 144 | `ULHu.MTWO` | func | `(i32 i32 i32) -> ()` |
| 145 | `ULHu.IMhG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `ULHu.RPAW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `ULHu.RQ7C` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `ULHu.htXh` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `ULHu.QJ1V` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `ULHu.KwIc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `ULHu.Q63U` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `ULHu.hxDq` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `ULHu.iyjg` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `ULHu.JpEC` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `ULHu.FALc` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `ULHu.FLYy` | func | `(i32) -> (i32)` |
| 157 | `ULHu.XYjR` | func | `(i32) -> (i32)` |
| 158 | `ULHu.ydh0` | func | `(i32) -> (i32)` |
| 159 | `ULHu.Rk88` | func | `(i32) -> (i32)` |
| 160 | `ULHu.OMap` | func | `() -> (i32)` |
| 161 | `ULHu.PJwr` | func | `() -> (i32)` |
| 162 | `ULHu.lq3J` | func | `() -> (i32)` |
| 163 | `ULHu.QUVn` | func | `() -> (i32)` |
| 164 | `ULHu.If4E` | func | `(i32 i32) -> (i32)` |
| 165 | `ULHu.QmIb` | func | `(i32) -> ()` |
| 166 | `ULHu.ONgh` | func | `(i32 i32) -> (i32)` |
| 167 | `ULHu.LcyV` | func | `(i32) -> (i32)` |
| 168 | `ULHu.W7Yx` | func | `(i32) -> (i32)` |
| 169 | `ULHu.C8vi` | func | `(i32) -> (i32)` |
| 170 | `ULHu.TxsB` | func | `(i32) -> ()` |
| 171 | `ULHu.Wwn0` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `ULHu.GpWT` | func | `(i32) -> (i32)` |
| 173 | `ULHu.Lin9` | func | `(i32) -> (i32)` |
| 174 | `ULHu.f3pR` | func | `(i32 i32) -> (i32)` |
| 175 | `ULHu.jxfn` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `ULHu.QSKm` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `ULHu.px98` | func | `(i32) -> (i32)` |
| 178 | `ULHu.Qsoy` | func | `(i32) -> (i32)` |
| 179 | `ULHu.b7pt` | func | `(i32) -> (i32)` |
| 180 | `ULHu.LJH7` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `ULHu.flzA` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `ULHu.LLKJ` | func | `(i32 i32) -> ()` |
| 183 | `ULHu.dDbB` | func | `(i32 i32 i32) -> ()` |
| 184 | `ULHu.AIQV` | func | `(i32 i32) -> ()` |
| 185 | `ULHu.VdnR` | func | `(i32 i32 i32) -> ()` |
| 186 | `ULHu.T50u` | func | `(i32 i32) -> ()` |
| 187 | `ULHu.ncQc` | func | `(i32 i32) -> ()` |
| 188 | `ULHu.fdGW` | func | `(i32) -> (i32)` |
| 189 | `ULHu.iN2X` | func | `(i32 i32) -> (i32)` |
| 190 | `ULHu.ANuE` | func | `(i32) -> ()` |
| 191 | `ULHu.lTxv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `ULHu.zLhW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `ULHu.twN1` | func | `(i32 i32) -> ()` |
| 194 | `ULHu.J1ES` | func | `(i32 i32) -> ()` |
| 195 | `ULHu.L9tB` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `ULHu.esDn` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `ULHu.xrOM` | func | `(i32 f32) -> ()` |
| 198 | `ULHu.gYaA` | func | `(i32 f32) -> ()` |
| 199 | `ULHu.dgzy` | func | `(i32 i32) -> ()` |
| 200 | `ULHu.AQ2l` | func | `(i32 i32) -> ()` |
| 201 | `ULHu.GPyb` | func | `(i32) -> (i32)` |
| 202 | `ULHu.tobt` | func | `(i32) -> (i32)` |
| 203 | `ULHu.UjYu` | func | `(i32) -> (i32)` |
| 204 | `ULHu.qOJv` | func | `(i32) -> (i32)` |
| 205 | `ULHu.JAji` | func | `(i32 i32 i32) -> ()` |
| 206 | `ULHu.Qn5l` | func | `(i32 i32 i32) -> ()` |
| 207 | `ULHu.F2JJ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `ULHu.ttlb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `ULHu.BE84` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `ULHu.Ku3y` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `ULHu.R2bK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `ULHu.RKRm` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `ULHu.e8WV` | func | `(i32 i32) -> ()` |
| 214 | `ULHu.L2Cp` | func | `(i32 i32) -> ()` |
| 215 | `ULHu.ZCaI` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `ULHu.ZlDB` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `ULHu.gnAr` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `ULHu.wXOc` | func | `(i32) -> (i32)` |
| 219 | `ULHu.F67A` | func | `(i32) -> (i32)` |
| 220 | `ULHu.CRsb` | func | `(i32 i32) -> ()` |
| 221 | `ULHu.BsFa` | func | `(i32 i32) -> ()` |
| 222 | `ULHu.tz54` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `ULHu.euEt` | func | `(i32) -> (i32)` |
| 224 | `ULHu.p6Q0` | func | `(i32) -> (i32)` |
| 225 | `ULHu.MPQC` | func | `(i32 i32) -> ()` |
| 226 | `ULHu.wjmL` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `ULHu.Eod8` | func | `(i32 i32) -> ()` |
| 228 | `ULHu.hGM3` | func | `(i32 i32) -> ()` |
| 229 | `ULHu.l0Fl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `ULHu.jksb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `ULHu.XOm9` | func | `(i32 i32 i32) -> ()` |
| 232 | `ULHu.iCTL` | func | `(i32 i32 i32) -> ()` |
| 233 | `ULHu.y8gL` | func | `(i32 i32) -> ()` |
| 234 | `ULHu.HaHT` | func | `(i32 i32) -> ()` |
| 235 | `ULHu.Ja00` | func | `(i32 i32) -> ()` |
| 236 | `ULHu.Rqnt` | func | `(i32 i32) -> ()` |
| 237 | `ULHu.OWRV` | func | `(i32 i32) -> ()` |
| 238 | `ULHu.qH24` | func | `(i32 i32) -> ()` |
| 239 | `ULHu.YODX` | func | `(i32 f32 f32) -> ()` |
| 240 | `ULHu.fxAs` | func | `(i32 f32 f32) -> ()` |
| 241 | `ULHu.Zt8x` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `ULHu.iJII` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `ULHu.xvMf` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `ULHu.QIgA` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `ULHu.OrwL` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `ULHu.ybMk` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `ULHu.Unl2` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `ULHu.RtaB` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `ULHu.Z7Es` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `ULHu.dfce` | func | `(i32) -> ()` |
| 251 | `ULHu.Cezl` | func | `(i32 i32) -> ()` |
| 252 | `ULHu.Rv1G` | func | `(i32 i32) -> ()` |
| 253 | `ULHu.PBF7` | func | `(i32 i32) -> ()` |
| 254 | `ULHu.DH9I` | func | `(i32 i32) -> ()` |
| 255 | `ULHu.flRx` | func | `(i32 i32) -> ()` |
| 256 | `ULHu.vn3Y` | func | `(i32 i32) -> ()` |
| 257 | `ULHu.vMXU` | func | `(i32 i32) -> ()` |
| 258 | `ULHu.H7Rq` | func | `(i32 i32) -> ()` |
| 259 | `ULHu.Frz3` | func | `(i32) -> (i32)` |
| 260 | `ULHu.vkfc` | func | `(i32) -> (i32)` |
| 261 | `ULHu.oPm7` | func | `(i32) -> (i32)` |
| 262 | `ULHu.AhS5` | func | `(i32) -> (i32)` |
| 263 | `ULHu.B9JR` | func | `(i32 i32 i32 i32) -> ()` |
| 264 | `ULHu.S5gN` | func | `(i32) -> ()` |
| 265 | `ULHu.kWdh` | func | `(i32) -> (i32)` |
| 266 | `ULHu.ps87` | func | `(i32) -> (i32)` |
| 267 | `ULHu.hLYI` | func | `(i32) -> (i32)` |
| 268 | `ULHu.TEe8` | func | `(i32) -> (i32)` |
| 269 | `ULHu.YSbn` | func | `(i32 i32) -> ()` |
| 270 | `ULHu.xv2U` | func | `(i32) -> ()` |
| 271 | `ULHu.TDaN` | func | `(i32 i32) -> ()` |
| 272 | `ULHu.bT3b` | func | `(i32) -> (i32)` |
| 273 | `ULHu.vl9j` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 274 | `ULHu.YUVN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `ULHu.IJ4b` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `ULHu.X1rO` | func | `(i32 i32) -> (i32)` |
| 277 | `ULHu.sk2Q` | func | `(i32 i32) -> (i32)` |
| 278 | `ULHu.XZUD` | func | `(i32 i32) -> (i32)` |
| 279 | `ULHu.VY54` | func | `(i32 i32) -> (i32)` |
| 280 | `ULHu.iWQ3` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `BBqE` | func | 1825 | `(i32 i32) -> (i32)` |
| `hkiT` | func | 3050 | `(i32) -> ()` |
| `VjD0` | func | 1679 | `(i32) -> (i32)` |
| `Xut1` | func | 2417 | `(i32) -> (i32)` |
| `jnzE` | func | 1373 | `(i32 i32) -> (i32)` |
| `rlWr` | func | 1443 | `(i32) -> (i32)` |
| `ONM7` | func | 546 | `(i32 i32 i32) -> (i32)` |
| `dCQg` | func | 2956 | `() -> (i32 i32)` |
| `Ne2E` | func | 883 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `xF9w` | func | 1932 | `(i32 i32) -> ()` |
| `aFXi` | func | 1352 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `takb` | func | 1881 | `(i32) -> (i32)` |
| `domr` | func | 1305 | `(i32 i32 i32) -> (i32)` |
| `iHad` | func | 2437 | `(i32) -> (i32)` |
| `xjGt` | func | 1897 | `(i32 i32 i32 i32) -> ()` |
| `gg08` | func | 2410 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `kYVp` | func | 1511 | `(i32 i32 i32 i32) -> (i32)` |
| `TajI` | func | 2131 | `(i32 i32) -> (i32)` |
| `gWDg` | func | 1228 | `(i32 i32 i32) -> (i32)` |
| `DJ8g` | func | 1701 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `J85V` | func | 1421 | `(i32 i32 i32 i32) -> ()` |
| `R0BR` | func | 2957 | `() -> (i32 i32)` |
| `GjDt` | func | 2876 | `() -> ()` |
| `VlRh` | func | 2427 | `(i32) -> (i32)` |
| `E46p` | func | 720 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `kPdX` | func | 1491 | `(i32 i32 i32) -> (i32)` |
| `QQrh` | func | 660 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WMpO` | func | 2936 | `(i32 i32) -> (i32 i32)` |
| `CsyH` | func | 2760 | `(i32) -> (i32)` |
| `aOoh` | func | 1353 | `(i32 f64 f64) -> (i32)` |
| `sMoJ` | func | 2017 | `(i32 i32) -> (i32)` |
| `PMYw` | func | 1180 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `cf1D` | func | 2152 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Ffjq` | func | 2395 | `(i32) -> (i32)` |
| `I2Tf` | func | 1840 | `(i32) -> ()` |
| `yJua` | func | 788 | `(i32 i32) -> (i32)` |
| `uB27` | func | 2926 | `(i32 i32 i32) -> (i32 i32)` |
| `sjf9` | func | 1435 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Hfrf` | func | 2204 | `(i32 f64) -> (i32)` |
| `p8zK` | func | 685 | `(i32 i32) -> (i32)` |
| `k93K` | func | 2385 | `(i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `jnzy` | func | 1839 | `(i32) -> ()` |
| `PS77` | func | 2283 | `(i32 i32) -> (i32)` |
| `x67u` | func | 2282 | `(i32 i32) -> (i32)` |
| `nM1S` | func | 1449 | `(i32 i32) -> (i32)` |
| `dM3y` | func | 2945 | `(i32) -> (i32 i32)` |
| `KMDx` | func | 1553 | `(i32 i32) -> ()` |
| `w6xm` | func | 1440 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `o7Pl` | func | 2448 | `(i32) -> (i32)` |
| `VyGm` | func | 1187 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `K60W` | func | 1084 | `(i32 i32) -> ()` |
| `WmTc` | func | 2705 | `(i32) -> (i32)` |
| `nFC9` | func | 1181 | `(i32 i32 i32 i32) -> (i32)` |
| `CpKJ` | func | 2989 | `(i32 i32) -> ()` |
| `Z8G3` | func | 2281 | `(i32 i32) -> (i32)` |
| `wgP7` | func | 2933 | `(i32 i32) -> (i32 i32)` |
| `wlZx` | func | 1770 | `() -> (i32)` |
| `AUhZ` | func | 1289 | `(i32) -> ()` |
| `wink` | func | 2935 | `(i32 i32) -> (i32 i32)` |
| `MxG7` | func | 1474 | `(i32 i32) -> (i32)` |
| `hK6a` | func | 3017 | `() -> (i32)` |
| `OgZf` | func | 2930 | `(i32 i32) -> (i32 i32)` |
| `ZV8M` | func | 1712 | `(i32 i32) -> (i32)` |
| `Xgty` | func | 1790 | `(i32 i32 i32 i32) -> (i32)` |
| `hqKL` | func | 3091 | `() -> (f64)` |
| `KsZY` | func | 2495 | `() -> (i32)` |
| `ZnQ4` | func | 865 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `OB4Q` | func | 1810 | `(i32 i32 f64 f64 f64) -> ()` |
| `Njlc` | func | 1994 | `(i32 i32) -> ()` |
| `U0OB` | func | 1142 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `MdVY` | func | 893 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `gZ1a` | func | 647 | `(i32 i32) -> (i32)` |
| `Xf0W` | func | 2416 | `(i32) -> (i32)` |
| `a75S` | func | 2414 | `(i32) -> (i32)` |
| `Ld3u` | func | 2896 | `(i32 i32) -> (i32)` |
| `SnsO` | func | 1957 | `(i32 f64) -> (i32)` |
| `ZXdD` | func | 2932 | `(i32 i32) -> (i32 i32)` |
| `mvuA` | func | 1594 | `(i32 i32 i32 i32) -> (i32)` |
| `vjKC` | global | 1 | `` |
| `UIuF` | func | 2931 | `(i32 i32) -> (i32 i32)` |
| `mo8m` | func | 2907 | `(i32 i32) -> ()` |
| `eSFY` | func | 1234 | `(i32 i32 i32) -> ()` |
| `RM9z` | func | 1400 | `() -> (i32)` |
| `cKXh` | func | 2408 | `(i32) -> (f64)` |
| `Oo1f` | func | 2394 | `(i32 i32) -> ()` |
| `TNtA` | func | 2411 | `(i32) -> (i32)` |
| `HIrk` | func | 2941 | `(i32) -> (i32 i32)` |
| `AVnA` | func | 2439 | `(i32 i32) -> (i32)` |
| `D8de` | func | 1208 | `(i32 i32) -> (i32)` |
| `kjnw` | func | 2352 | `(i32) -> (i32)` |
| `vjhg` | func | 2418 | `(i32) -> (i32)` |
| `nOAp` | func | 2203 | `(i32 i32) -> ()` |
| `CSTF` | func | 2901 | `(i32 i32 i32 i32) -> (i32)` |
| `pGXU` | func | 2727 | `(i32) -> (i32)` |
| `u2OW` | func | 713 | `(i32 i32 i32 i32) -> (i32)` |
| `Rotm` | func | 2934 | `(i32 i32) -> (i32 i32)` |
| `alfD` | func | 2718 | `(i32) -> (i32)` |
| `xLTK` | func | 2526 | `(i32 i32) -> ()` |
| `z7vT` | func | 2527 | `() -> (i32)` |
| `dEaL` | func | 3095 | `(i32) -> (i32)` |
| `N3DT` | func | 2368 | `(i32) -> (i32)` |
| `DjgU` | func | 1442 | `(i32 i32 i32 i32) -> (i32)` |
| `Pbck` | func | 1552 | `(i32 i32) -> ()` |
| `TdES` | func | 1083 | `(i32 i32) -> (i32)` |
| `HgDW` | func | 3096 | `(i32) -> ()` |
| `iZKh` | func | 2446 | `(i32) -> (i32)` |
| `umRg` | func | 1478 | `(i32 f64) -> (f64)` |
| `u2QC` | func | 1975 | `(i32 f64 f64 f64) -> (i32)` |
| `tBLO` | func | 1816 | `(i32 i32) -> ()` |
| `vGcN` | global | 2 | `` |
| `QaPu` | func | 1895 | `(i32) -> (i32)` |
| `tlvL` | func | 2425 | `(i32 i32) -> ()` |
| `dqtG` | func | 2413 | `(i32) -> (i32)` |
| `j3Ih` | func | 715 | `(i32) -> (i32)` |
| `qwM6` | func | 2483 | `(i32 i32) -> ()` |
| `nkgl` | func | 2942 | `(i32) -> (i32 i32)` |
| `Kcvd` | func | 1775 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `goLd` | func | 2428 | `(i32) -> (i32)` |
| `Zy7f` | func | 2447 | `(i32) -> (i32)` |
| `DJ2s` | func | 973 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `dMML` | func | 2328 | `(i32 i32 i32 i32) -> (i32)` |
| `NRIF` | func | 2944 | `(i32) -> (i32 i32)` |
| `gF7s` | func | 2315 | `(i32 i32) -> (i32)` |
| `PXVl` | func | 1658 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `IZts` | func | 2429 | `(i32 i32) -> ()` |
| `kQhh` | func | 2234 | `(i32 i32) -> ()` |
| `pVEe` | func | 2409 | `(i32) -> (i32)` |
| `pa8v` | func | 1694 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WYnB` | func | 2438 | `(i32 i32) -> (i32)` |
| `yFT0` | func | 1475 | `(i32 i32) -> (i32)` |
| `kJXY` | func | 2925 | `(i32 i32 i32) -> (i32 i32)` |
| `OZgf` | func | 2100 | `(i32 i32) -> (i32)` |
| `SNci` | func | 1263 | `(i32 i32) -> (i32)` |
| `X3Ba` | func | 866 | `(i32 i32) -> (i32)` |
| `wcMs` | func | 3118 | `() -> (i32)` |
| `KJgW` | func | 1254 | `(i32) -> (i32)` |
| `FiSA` | func | 735 | `(i32 i32 i32) -> (i32)` |
| `L8m1` | func | 2738 | `(i32) -> ()` |
| `HVHv` | func | 3044 | `(i32 i32 i32) -> ()` |
| `WRo8` | func | 2988 | `(i32 i32 i32) -> ()` |
| `cRBA` | func | 2430 | `(i32) -> (i32)` |
| `fPLp` | func | 1396 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `ktd8` | func | 1541 | `(i32 i32) -> (i32)` |
| `QgrH` | func | 3117 | `() -> (i32)` |
| `w5LG` | func | 2280 | `(i32 i32) -> (i32)` |
| `pdhx` | func | 2412 | `(i32) -> (i32)` |
| `lAel` | func | 2415 | `(i32) -> ()` |
| `pqIJ` | func | 1557 | `(i32 f64 f64 f64) -> (i32)` |
| `F773` | func | 2698 | `(i32) -> (i32)` |
| `Diyo` | func | 1525 | `(i32) -> (i32)` |
| `dHke` | func | 1832 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `RCkn` | func | 2876 | `() -> ()` |
| `FmOl` | func | 2979 | `(i32 i32 i32 i32) -> ()` |
| `yO8s` | func | 2943 | `(i32) -> (i32 i32)` |
| `fxSU` | func | 1462 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 31 pages · max 14,648 · shared=False
- table 0: funcref · min 731 · max 731
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2011456, `i32` = i32.const 2012020

## Functions

- 2,847 bodies · 3,977,139 code bytes · avg 1.4 KB
- instruction scan: 2,847 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 154 |
| <= 64 bytes | 106 |
| <= 128 bytes | 248 |
| <= 256 bytes | 364 |
| <= 512 bytes | 660 |
| <= 1024 bytes | 568 |
| <= 2048 bytes | 414 |
| <= 4096 bytes | 180 |
| <= 8192 bytes | 89 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 32 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 213 | 194,883 | 88,446 | local.get×25924, i32.const×9923, i32.load×5634, local.set×4736, local.tee×4648 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,475 | 54,534 | local.get×15173, i32.const×6561, i32.add×3203, local.set×3088, i32.load×2946 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 131 | 46,346 | 21,326 | local.get×6208, i32.const×2816, local.set×1236, i32.add×1130, i32.load×1016 |
| 3 | `(i32 i32) -> ()` | 123 | 48,811 | 22,511 | local.get×6329, i32.const×2250, local.set×1325, local.tee×1179, i32.load×1035 |
| 4 | `(i32 i32) -> ()` | 59 | 29,650 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,545 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 20,628 | 9,288 | local.get×2540, i32.const×1209, local.set×548, local.tee×388, end×388 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 13 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,009 | 13,035 | local.get×4617, i32.const×1454, i32.store×702, i32.add×688, local.tee×644 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,701 | 10,568 | local.get×3337, i32.const×1237, local.tee×729, i32.add×432, local.set×333 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 61 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 190 | `(i32 i32) -> ()` | 10 | 26,445 | 12,733 | local.get×4479, i32.load×1203, i32.const×1018, end×792, i32.add×730 |
| 222 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 711 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 995 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1544 | `(i32 i32) -> (i32)` | 179 | 54,554 | 19,801 | local.get×6573, i32.const×2623, i64.store×1887, i64.const×1063, i64.load×1044 |
| 1944 | `(i32 i32) -> ()` | 110 | 38,693 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2531 | `(i32 i32) -> ()` | 397 | 142,143 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2800 | `(i32 i32 i32 i32) -> ()` | 137 | 30,498 | 13,917 | local.get×4170, i32.const×1461, local.tee×731, local.set×679, i32.load×613 |
| 2819 | `(i32 i32) -> ()` | 136 | 33,944 | 15,212 | local.get×4274, i32.const×2015, local.set×798, local.tee×744, i32.add×699 |

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
terrain-atlas1-anim-packed-instvs_packed_anim_instterrain-atlas1-anim-lit-packed-instterrain-atlas1-anim-test-packed-instterrain-atlas1-anim-test-lit-packed-instfs_atlasnterrain-atlasn-packed-instterr
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 532,111 |
| `i32.const` | 222,794 |
| `local.tee` | 98,977 |
| `local.set` | 93,090 |
| `i32.load` | 93,034 |
| `i32.add` | 86,097 |
| `end` | 78,165 |
| `br_if` | 63,492 |
| `i32.store` | 45,967 |
| `block` | 36,802 |
| `i64.const` | 32,119 |
| `i64.store` | 31,152 |
| `if` | 29,806 |
| `call` | 28,689 |
| `i32.sub` | 24,339 |
| `i64.load` | 23,152 |
| `br` | 22,948 |
| `i32.eqz` | 19,224 |
| `select` | 16,778 |
| `i32.shl` | 16,320 |
| `i32.and` | 16,120 |
| `i32.ne` | 15,669 |
| `i32.load8_u` | 14,610 |
| `i32.eq` | 13,741 |
| `i32.store8` | 12,379 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 2,847/2,847 (degraded: 0)
