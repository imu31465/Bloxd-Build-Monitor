# WASM module: `bloxd_wasm_webgl1_bg`

> environment **staging.bloxd.io** · build `welxxc.ffac0572` · analyzed 2026-11-28T21:24:47+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl1_bg.095aa9f5f5e974c0d16c.wasm
> 4,934,167 bytes (4.7 MB) · sha256 `d98f1a2e5f8bf52c…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,934,921 → 4,934,167 bytes (-754)
- data bytes 811,788 → 811,034
- name-section module id `cac18d66d963deee.10828` → `04df1d78befa8171.10828` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/167 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,930 / 284 |
| Exports / imports | 167 / 285 |
| Code bytes (function bodies) | 4,076,337 (3.9 MB) |
| Total local variables | 31,448 |
| Instructions (scanable bodies) | 1,912,836 |
| Data segments / bytes | 3,779 / 811,034 |
| Element segments / entries | 1 / 739 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `04df1d78befa8171.10828` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,528 | 180 |
| 2 | import | 3,426 | 285 |
| 3 | function | 2,984 | 2930 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,337 | 167 |
| 9 | element | 1,485 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,081,725 | 2930 |
| 11 | data | 841,578 | 3779 |
| 0 | custom:name | 30 | — |

## Types

180 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

285 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Sb0E.dA1T` | memory | `[128..14648]` |
| 0 | `Sb0E.jyPN` | func | `(i32) -> (f64)` |
| 1 | `Sb0E.HSOb` | func | `() -> (i32)` |
| 2 | `Sb0E.WVw0` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `Sb0E.y5K1` | func | `(i32) -> ()` |
| 4 | `Sb0E.tgBW` | func | `(i32 i32) -> (i32)` |
| 5 | `Sb0E.qubw` | func | `(i32) -> (i32)` |
| 6 | `Sb0E.SI25` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `Sb0E.YNmH` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `Sb0E.w22N` | func | `(i32) -> (i32)` |
| 9 | `Sb0E.bQy1` | func | `(i32 i32) -> ()` |
| 10 | `Sb0E.DJ1l` | func | `(i32 i32) -> ()` |
| 11 | `Sb0E.yNv1` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `Sb0E.u6wC` | func | `(i32 i32) -> (i32)` |
| 13 | `Sb0E.ef7K` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `Sb0E.fK52` | func | `(i32) -> (i32)` |
| 15 | `Sb0E.aPk5` | func | `(i32 i32) -> (i32)` |
| 16 | `Sb0E.kRYX` | func | `(i32 i32) -> (i32)` |
| 17 | `Sb0E.sKfm` | func | `(i32 i32) -> ()` |
| 18 | `Sb0E.X6xz` | func | `(i32) -> (i32)` |
| 19 | `Sb0E.KQgJ` | func | `(i32) -> (i32)` |
| 20 | `Sb0E.HrQ2` | func | `(i32) -> (i32)` |
| 21 | `Sb0E.fBGW` | func | `(i32) -> ()` |
| 22 | `Sb0E.dwEw` | func | `(i32 i32) -> ()` |
| 23 | `Sb0E.mQ70` | func | `(i32 i32) -> ()` |
| 24 | `Sb0E.aQuY` | func | `(i32) -> (i32)` |
| 25 | `Sb0E.fclg` | func | `(i32 i32) -> ()` |
| 26 | `Sb0E.fyBE` | func | `(i32 i32) -> (i32)` |
| 27 | `Sb0E.sD0h` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `Sb0E.ZalQ` | func | `(i32 i32) -> (i32)` |
| 29 | `Sb0E.Rgdo` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `Sb0E.Ipkq` | func | `(i32) -> (i32)` |
| 31 | `Sb0E.d9gc` | func | `() -> (f64)` |
| 32 | `Sb0E.dKpe` | func | `(i32 i32) -> ()` |
| 33 | `Sb0E.twYl` | func | `(i32) -> (i32)` |
| 34 | `Sb0E.vHEH` | func | `(i32) -> (i32)` |
| 35 | `Sb0E.GiUj` | func | `(i32) -> ()` |
| 36 | `Sb0E.yKaY` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `Sb0E.JxP6` | func | `(i32) -> (i32)` |
| 38 | `Sb0E.imfE` | func | `(i32) -> (i32)` |
| 39 | `Sb0E.UjN1` | func | `(i32) -> (i32)` |
| 40 | `Sb0E.CLRE` | func | `(i32 i32) -> (i32)` |
| 41 | `Sb0E.LazH` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `Sb0E.yvgh` | func | `(i32) -> (i32)` |
| 43 | `Sb0E.mS3K` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `Sb0E.N8WB` | func | `(i32) -> (i32)` |
| 45 | `Sb0E.a61W` | func | `(i32 i32 i32 i32) -> ()` |
| 46 | `Sb0E.qClV` | func | `(i32 i32 i32) -> (i32)` |
| 47 | `Sb0E.GMMQ` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 48 | `Sb0E.vDGz` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 49 | `Sb0E.JbhB` | func | `(i32 i32 i32) -> ()` |
| 50 | `Sb0E.pmK6` | func | `(i32 i32 i32) -> ()` |
| 51 | `Sb0E.uaEl` | func | `(i32 i32 i32) -> ()` |
| 52 | `Sb0E.b5km` | func | `(i32 i32) -> ()` |
| 53 | `Sb0E.tULM` | func | `(i32 i32) -> ()` |
| 54 | `Sb0E.bD2e` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `Sb0E.Fepc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `Sb0E.VDT8` | func | `(i32 f32 f32) -> ()` |
| 57 | `Sb0E.xvnv` | func | `(i32 f32 f32) -> ()` |
| 58 | `Sb0E.rThe` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `Sb0E.rwQl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `Sb0E.QjHZ` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `Sb0E.Y0LS` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `Sb0E.Styw` | func | `(i32 i32 i32) -> ()` |
| 63 | `Sb0E.utkE` | func | `(i32 i32 i32) -> ()` |
| 64 | `Sb0E.C6jM` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `Sb0E.SfNS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `Sb0E.woYh` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `Sb0E.Jiol` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `Sb0E.aPH5` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `Sb0E.BP0t` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `Sb0E.xXJu` | func | `(i32) -> (i32)` |
| 71 | `Sb0E.U1rs` | func | `(i32) -> ()` |
| 72 | `Sb0E.Zo1l` | func | `(i32) -> (i32)` |
| 73 | `Sb0E.Lsqd` | func | `(i32 i32) -> (i32)` |
| 74 | `Sb0E.Tj75` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `Sb0E.gzwb` | func | `(i32 i32 i32) -> ()` |
| 76 | `Sb0E.Ro0q` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `Sb0E.JthW` | func | `() -> (f64)` |
| 78 | `Sb0E.SZC9` | func | `() -> (f64)` |
| 79 | `Sb0E.YwKh` | func | `(i32 i32) -> ()` |
| 80 | `Sb0E.B97R` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `Sb0E.voo5` | func | `(i32 i32 i32) -> ()` |
| 82 | `Sb0E.TPWm` | func | `(i32 i32 i32) -> ()` |
| 83 | `Sb0E.vbIW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `Sb0E.rRRh` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `Sb0E.DvfK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `Sb0E.X02i` | func | `(i32 i32) -> ()` |
| 87 | `Sb0E.WXYG` | func | `(i32 i32) -> ()` |
| 88 | `Sb0E.np3C` | func | `(i32) -> (i32)` |
| 89 | `Sb0E.An1Y` | func | `(i32 i32) -> ()` |
| 90 | `Sb0E.WuMl` | func | `(i32 i32) -> ()` |
| 91 | `Sb0E.lMcS` | func | `(i32 i32 i32) -> ()` |
| 92 | `Sb0E.vx9z` | func | `(i32 i32 i32) -> ()` |
| 93 | `Sb0E.DgLp` | func | `(i32) -> (i32)` |
| 94 | `Sb0E.a9ie` | func | `(i32) -> (i32)` |
| 95 | `Sb0E.gygc` | func | `(i32 i32) -> (i32)` |
| 96 | `Sb0E.ZbVh` | func | `(i32 i32) -> (i32)` |
| 97 | `Sb0E.YcbT` | func | `(i32 i32) -> ()` |
| 98 | `Sb0E.fkIU` | func | `(i32 i32) -> ()` |
| 99 | `Sb0E.fO1n` | func | `(i32 i32 i32) -> ()` |
| 100 | `Sb0E.HZuJ` | func | `(i32 i32 i32) -> ()` |
| 101 | `Sb0E.vfOQ` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `Sb0E.gtmS` | func | `(i32 i32 i32 i32) -> ()` |
| 103 | `Sb0E.d7Pl` | func | `(i32 i32 f32) -> ()` |
| 104 | `Sb0E.nQwl` | func | `(i32 i32 f32) -> ()` |
| 105 | `Sb0E.AcT4` | func | `(i32 i32 i32) -> ()` |
| 106 | `Sb0E.Fsqr` | func | `(i32 i32 i32) -> ()` |
| 107 | `Sb0E.mwy0` | func | `(i32 i32 i32) -> ()` |
| 108 | `Sb0E.mlqg` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `Sb0E.tffk` | func | `(i32 i32 f32 f32) -> ()` |
| 110 | `Sb0E.cxT2` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `Sb0E.hABe` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 112 | `Sb0E.fN3f` | func | `(i32 i32) -> ()` |
| 113 | `Sb0E.D5Nk` | func | `(i32 i32) -> ()` |
| 114 | `Sb0E.lHGF` | func | `(i32 i32) -> ()` |
| 115 | `Sb0E.mWDT` | func | `(i32 i32) -> ()` |
| 116 | `Sb0E.hJjS` | func | `(i32) -> (i32)` |
| 117 | `Sb0E.fKye` | func | `(i32) -> (i32)` |
| 118 | `Sb0E.GVbp` | func | `(i32) -> (i32)` |
| 119 | `Sb0E.syKt` | func | `(i32) -> (i32)` |
| 120 | `Sb0E.g02g` | func | `(i32 i32) -> ()` |
| 121 | `Sb0E.PIER` | func | `(i32 i32) -> ()` |
| 122 | `Sb0E.qd13` | func | `(i32 i32) -> ()` |
| 123 | `Sb0E.lH1y` | func | `(i32 i32) -> ()` |
| 124 | `Sb0E.E180` | func | `(i32 i32) -> ()` |
| 125 | `Sb0E.OEgu` | func | `(i32 i32) -> ()` |
| 126 | `Sb0E.yXc9` | func | `(i32 i32) -> (i32)` |
| 127 | `Sb0E.EnPQ` | func | `(i32 i32) -> (i32)` |
| 128 | `Sb0E.hi07` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `Sb0E.y5FQ` | func | `(i32 i32 i32 i32) -> ()` |
| 130 | `Sb0E.uu5V` | func | `(i32 i32) -> ()` |
| 131 | `Sb0E.tES1` | func | `(i32 i32) -> ()` |
| 132 | `Sb0E.xhGb` | func | `(i32) -> (i32)` |
| 133 | `Sb0E.fBgN` | func | `(i32 i32) -> ()` |
| 134 | `Sb0E.Ks5g` | func | `(i32 i32) -> ()` |
| 135 | `Sb0E.BOhR` | func | `(i32 i32 i32) -> ()` |
| 136 | `Sb0E.kyOQ` | func | `(i32 i32 i32) -> ()` |
| 137 | `Sb0E.dQpO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `Sb0E.NJ2v` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 139 | `Sb0E.a8Ne` | func | `(i32 i32) -> ()` |
| 140 | `Sb0E.cELq` | func | `(i32 i32 i32) -> ()` |
| 141 | `Sb0E.xqMT` | func | `(i32 i32 i32) -> ()` |
| 142 | `Sb0E.xgCF` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `Sb0E.JZcr` | func | `(i32 i32 i32 i32) -> (i32)` |
| 144 | `Sb0E.eBio` | func | `(i32 i32 i32) -> ()` |
| 145 | `Sb0E.h7bC` | func | `(i32 i32 i32) -> ()` |
| 146 | `Sb0E.WrLU` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `Sb0E.Xyzb` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 148 | `Sb0E.UqC9` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `Sb0E.UOSL` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `Sb0E.YqOH` | func | `(i32 i32 i32) -> (i32)` |
| 151 | `Sb0E.Pzwk` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `Sb0E.KSDQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 153 | `Sb0E.vseW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `Sb0E.a1tY` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `Sb0E.soz3` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `Sb0E.GZNC` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 157 | `Sb0E.pMbk` | func | `(i32) -> (i32)` |
| 158 | `Sb0E.JHma` | func | `(i32) -> (i32)` |
| 159 | `Sb0E.IgpX` | func | `(i32) -> (i32)` |
| 160 | `Sb0E.QAmC` | func | `(i32) -> (i32)` |
| 161 | `Sb0E.Y0xl` | func | `() -> (i32)` |
| 162 | `Sb0E.byzw` | func | `() -> (i32)` |
| 163 | `Sb0E.ZrJf` | func | `() -> (i32)` |
| 164 | `Sb0E.stkc` | func | `() -> (i32)` |
| 165 | `Sb0E.voKq` | func | `(i32 i32) -> (i32)` |
| 166 | `Sb0E.wKbj` | func | `(i32) -> ()` |
| 167 | `Sb0E.CsRN` | func | `(i32 i32) -> (i32)` |
| 168 | `Sb0E.Yg4G` | func | `(i32) -> (i32)` |
| 169 | `Sb0E.NTg8` | func | `(i32) -> (i32)` |
| 170 | `Sb0E.CMlp` | func | `(i32) -> (i32)` |
| 171 | `Sb0E.VEA0` | func | `(i32) -> ()` |
| 172 | `Sb0E.wOhs` | func | `(i32 i32 i32) -> (i32)` |
| 173 | `Sb0E.nxAR` | func | `(i32) -> (i32)` |
| 174 | `Sb0E.Oo4B` | func | `(i32) -> (i32)` |
| 175 | `Sb0E.q1zH` | func | `(i32 i32) -> (i32)` |
| 176 | `Sb0E.qK0v` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `Sb0E.BXAO` | func | `(i32 i32 i32) -> (i32)` |
| 178 | `Sb0E.R9nD` | func | `(i32) -> (i32)` |
| 179 | `Sb0E.AYYI` | func | `(i32) -> (i32)` |
| 180 | `Sb0E.s7wT` | func | `(i32) -> (i32)` |
| 181 | `Sb0E.FX3N` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `Sb0E.l9SS` | func | `(i32 i32 i32 i32) -> ()` |
| 183 | `Sb0E.QtUR` | func | `(i32 i32) -> ()` |
| 184 | `Sb0E.wXZR` | func | `(i32 i32 i32) -> ()` |
| 185 | `Sb0E.TPsX` | func | `(i32 i32) -> ()` |
| 186 | `Sb0E.CGzG` | func | `(i32 i32 i32) -> ()` |
| 187 | `Sb0E.kayk` | func | `(i32 i32) -> ()` |
| 188 | `Sb0E.xEJ6` | func | `(i32 i32) -> ()` |
| 189 | `Sb0E.NlGt` | func | `(i32) -> (i32)` |
| 190 | `Sb0E.sx1L` | func | `(i32 i32) -> (i32)` |
| 191 | `Sb0E.NCpx` | func | `(i32) -> ()` |
| 192 | `Sb0E.pN6k` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `Sb0E.eZEk` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 194 | `Sb0E.T3vm` | func | `(i32 i32) -> ()` |
| 195 | `Sb0E.UeUZ` | func | `(i32 i32) -> ()` |
| 196 | `Sb0E.LMWB` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `Sb0E.YKSE` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 198 | `Sb0E.uueN` | func | `(i32 f32) -> ()` |
| 199 | `Sb0E.LTU3` | func | `(i32 f32) -> ()` |
| 200 | `Sb0E.BM25` | func | `(i32 i32) -> ()` |
| 201 | `Sb0E.ansP` | func | `(i32 i32) -> ()` |
| 202 | `Sb0E.jgtH` | func | `(i32) -> (i32)` |
| 203 | `Sb0E.I5cw` | func | `(i32) -> (i32)` |
| 204 | `Sb0E.ArOj` | func | `(i32) -> (i32)` |
| 205 | `Sb0E.Uoaj` | func | `(i32) -> (i32)` |
| 206 | `Sb0E.VstO` | func | `(i32 i32 i32) -> ()` |
| 207 | `Sb0E.uRHg` | func | `(i32 i32 i32) -> ()` |
| 208 | `Sb0E.yj0M` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `Sb0E.YhIx` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 210 | `Sb0E.xg4d` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `Sb0E.TSqj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 212 | `Sb0E.EQRq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `Sb0E.BsCJ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 214 | `Sb0E.dnxM` | func | `(i32 i32) -> ()` |
| 215 | `Sb0E.oJ2P` | func | `(i32 i32) -> ()` |
| 216 | `Sb0E.ZKyj` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 217 | `Sb0E.Xz8e` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `Sb0E.YCJi` | func | `(i32 i32 i32 f32) -> ()` |
| 219 | `Sb0E.zWev` | func | `(i32) -> (i32)` |
| 220 | `Sb0E.ziDk` | func | `(i32) -> (i32)` |
| 221 | `Sb0E.vIgD` | func | `(i32 i32) -> ()` |
| 222 | `Sb0E.XoLz` | func | `(i32 i32) -> ()` |
| 223 | `Sb0E.AfjU` | func | `(i32 i32 i32) -> (i32)` |
| 224 | `Sb0E.nhQU` | func | `(i32) -> (i32)` |
| 225 | `Sb0E.ZZDr` | func | `(i32) -> (i32)` |
| 226 | `Sb0E.hZzQ` | func | `(i32 i32) -> ()` |
| 227 | `Sb0E.Jrpq` | func | `(i32 i32 i32) -> (i32)` |
| 228 | `Sb0E.LfGq` | func | `(i32 i32) -> ()` |
| 229 | `Sb0E.pgD6` | func | `(i32 i32) -> ()` |
| 230 | `Sb0E.c693` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `Sb0E.x1Kl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 232 | `Sb0E.lZwG` | func | `(i32 i32 i32) -> ()` |
| 233 | `Sb0E.W2xc` | func | `(i32 i32 i32) -> ()` |
| 234 | `Sb0E.Rerz` | func | `(i32 i32) -> ()` |
| 235 | `Sb0E.CqVo` | func | `(i32 i32) -> ()` |
| 236 | `Sb0E.EEFU` | func | `(i32 i32) -> ()` |
| 237 | `Sb0E.CeDj` | func | `(i32 i32) -> ()` |
| 238 | `Sb0E.lKiG` | func | `(i32 i32) -> ()` |
| 239 | `Sb0E.IpWs` | func | `(i32 i32) -> ()` |
| 240 | `Sb0E.NHq7` | func | `(i32 f32 f32) -> ()` |
| 241 | `Sb0E.eA54` | func | `(i32 f32 f32) -> ()` |
| 242 | `Sb0E.lg96` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `Sb0E.jjYf` | func | `(i32 i32 i32 i32) -> ()` |
| 244 | `Sb0E.iPWx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `Sb0E.pAwQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `Sb0E.APrL` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 247 | `Sb0E.vG8V` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `Sb0E.pX64` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 249 | `Sb0E.yltx` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `Sb0E.ObAZ` | func | `(i32 i32 i32 i32) -> ()` |
| 251 | `Sb0E.g2Ns` | func | `(i32) -> ()` |
| 252 | `Sb0E.qvV4` | func | `(i32 i32) -> ()` |
| 253 | `Sb0E.Dfdj` | func | `(i32 i32) -> ()` |
| 254 | `Sb0E.iN37` | func | `(i32 i32) -> ()` |
| 255 | `Sb0E.CIsA` | func | `(i32 i32) -> ()` |
| 256 | `Sb0E.wJ8g` | func | `(i32 i32) -> ()` |
| 257 | `Sb0E.v5Ju` | func | `(i32 i32) -> ()` |
| 258 | `Sb0E.fHtI` | func | `(i32 i32) -> ()` |
| 259 | `Sb0E.DCx9` | func | `(i32 i32) -> ()` |
| 260 | `Sb0E.EWCE` | func | `(i32) -> (i32)` |
| 261 | `Sb0E.lBeB` | func | `(i32) -> (i32)` |
| 262 | `Sb0E.jbSH` | func | `(i32) -> (i32)` |
| 263 | `Sb0E.wRq1` | func | `(i32) -> (i32)` |
| 264 | `Sb0E.xj9l` | func | `(i32) -> ()` |
| 265 | `Sb0E.TQZe` | func | `(i32 i32 i32 i32) -> ()` |
| 266 | `Sb0E.rMoE` | func | `(i32) -> ()` |
| 267 | `Sb0E.ptMR` | func | `(i32) -> (i32)` |
| 268 | `Sb0E.kxs6` | func | `(i32) -> (i32)` |
| 269 | `Sb0E.ab1F` | func | `(i32) -> (i32)` |
| 270 | `Sb0E.hmuG` | func | `(i32) -> (i32)` |
| 271 | `Sb0E.kIT5` | func | `(i32 i32) -> ()` |
| 272 | `Sb0E.YhTf` | func | `(i32) -> ()` |
| 273 | `Sb0E.J5sq` | func | `(i32 i32) -> ()` |
| 274 | `Sb0E.d0hG` | func | `(i32) -> (i32)` |
| 275 | `Sb0E.SBkS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `Sb0E.q6Qs` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `Sb0E.ADaO` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `Sb0E.EUB6` | func | `(i32 i32) -> (i32)` |
| 279 | `Sb0E.V1eN` | func | `(i32 i32) -> (i32)` |
| 280 | `Sb0E.i8Ft` | func | `(i32 i32) -> (i32)` |
| 281 | `Sb0E.Bjgi` | func | `(f64) -> (i32)` |
| 282 | `Sb0E.EPn5` | func | `(i32 i32) -> (i32)` |
| 283 | `Sb0E.otql` | func | `(i32 i32) -> (i32)` |

## Exports

167 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `LZZW` | func | 2517 | `(i32) -> (i32)` |
| `TBRI` | func | 1448 | `() -> (i32)` |
| `XbR6` | global | 2 | `` |
| `gA0P` | func | 2465 | `(i32 i32) -> ()` |
| `Jbgz` | func | 2019 | `(i32 f64) -> (i32)` |
| `kWpJ` | func | 676 | `(i32 i32) -> (i32)` |
| `twvw` | func | 2436 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `bTqf` | func | 3018 | `(i32 i32) -> (i32 i32)` |
| `nEc8` | func | 1225 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `BZvF` | func | 1753 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jZk8` | func | 2272 | `(i32 i32) -> ()` |
| `FSgf` | func | 2495 | `(i32 i32) -> ()` |
| `jdae` | func | 1491 | `(i32 i32 i32 i32) -> (i32)` |
| `z0kY` | func | 2992 | `(i32 i32) -> ()` |
| `bByl` | func | 2217 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `zmzM` | func | 2799 | `(i32) -> (i32)` |
| `cPHO` | func | 1993 | `(i32 i32) -> ()` |
| `oS3O` | func | 2480 | `(i32) -> (i32)` |
| `Pqw1` | func | 1419 | `(i32 i32) -> (i32)` |
| `rJTu` | func | 1898 | `(i32) -> ()` |
| `xMLZ` | func | 1746 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `G3Yd` | func | 2498 | `(i32) -> (i32)` |
| `twTP` | func | 672 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZYeh` | func | 3020 | `(i32 i32) -> (i32 i32)` |
| `yDR7` | func | 2395 | `(i32 i32 i32 i32) -> (i32)` |
| `rlY1` | func | 2497 | `(i32) -> (i32)` |
| `edcX` | func | 757 | `(i32 i32 i32) -> (i32)` |
| `njXI` | func | 1709 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `ywxP` | func | 3011 | `(i32 i32 i32) -> (i32 i32)` |
| `P3YI` | func | 2562 | `(i32) -> ()` |
| `soiU` | func | 2162 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `rlGr` | func | 2598 | `() -> (i32)` |
| `eBUi` | func | 1730 | `(i32) -> (i32)` |
| `FjCb` | func | 2382 | `(i32 i32) -> (i32)` |
| `rcuu` | func | 2478 | `(i32) -> (f64)` |
| `NOxt` | func | 1269 | `(i32 i32 i32) -> (i32)` |
| `NNmr` | func | 3063 | `(i32 i32 i32 i32) -> ()` |
| `y8iA` | func | 2481 | `(i32) -> (i32)` |
| `xWOW` | func | 2486 | `(i32) -> (i32)` |
| `yyEz` | func | 2678 | `(i32 i32) -> ()` |
| `pKmL` | func | 1451 | `(i32) -> (i32)` |
| `xjKN` | func | 1303 | `(i32 i32) -> (i32)` |
| `ERYE` | func | 2039 | `(i32 f64 f64 f64) -> (i32)` |
| `t9q7` | func | 1558 | `(i32 i32 i32 i32) -> (i32)` |
| `Xl0v` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Ucq1` | func | 3140 | `(i32) -> ()` |
| `OpcV` | func | 2353 | `(i32 i32) -> (i32)` |
| `xMvB` | func | 1537 | `(i32 i32 i32) -> (i32)` |
| `dSwI` | func | 2330 | `(i32 i32 i32 i32) -> ()` |
| `CSdy` | func | 2785 | `(i32) -> (i32)` |
| `bPhy` | func | 1398 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `YHIQ` | func | 3026 | `(i32) -> (i32 i32)` |
| `actA` | func | 2484 | `(i32) -> (i32)` |
| `lV0v` | func | 1522 | `(i32 i32) -> (i32)` |
| `jzbB` | func | 2482 | `(i32) -> (i32)` |
| `XUYb` | func | 735 | `(i32) -> (i32)` |
| `JA39` | func | 2080 | `(i32 i32) -> (i32)` |
| `V4l1` | func | 2580 | `(i32) -> ()` |
| `t2sZ` | func | 661 | `(i32 i32) -> (i32)` |
| `SzIp` | func | 2563 | `() -> (i32)` |
| `t8tq` | func | 1331 | `(i32 i32) -> (i32)` |
| `I1VS` | func | 1764 | `(i32 i32) -> (i32)` |
| `mPH6` | func | 1957 | `(i32) -> (i32)` |
| `aviY` | func | 2485 | `(i32) -> ()` |
| `ffsj` | func | 1590 | `(i32 i32) -> (i32)` |
| `i14o` | func | 693 | `(f64) -> (f64)` |
| `iQW1` | func | 2437 | `(i32) -> (i32)` |
| `j1Lh` | func | 2550 | `(i32 i32) -> ()` |
| `ZruR` | func | 1605 | `(i32 f64 f64 f64) -> (i32)` |
| `GWFW` | func | 3204 | `() -> (i32)` |
| `Tcr2` | func | 3203 | `() -> (i32)` |
| `DhKP` | func | 3010 | `(i32 i32 i32) -> (i32 i32)` |
| `Bu1u` | func | 2518 | `(i32) -> (i32)` |
| `GWVQ` | func | 2420 | `(i32) -> (i32)` |
| `hmxe` | func | 2352 | `(i32 i32) -> (i32)` |
| `YlAr` | func | 1115 | `(i32 i32) -> (i32)` |
| `StqS` | func | 3016 | `(i32 i32) -> (i32 i32)` |
| `zgJJ` | func | 3071 | `(i32 i32 i32) -> ()` |
| `T5Ua` | func | 3133 | `(i32) -> ()` |
| `Qo5N` | func | 700 | `(i32 i32) -> (i32)` |
| `SknA` | func | 3100 | `() -> (i32)` |
| `xwPI` | func | 3127 | `(i32 i32 i32) -> ()` |
| `XGqt` | func | 1492 | `(i32) -> (i32)` |
| `t9hV` | func | 2487 | `(i32) -> (i32)` |
| `IPcS` | func | 3028 | `(i32) -> (i32 i32)` |
| `bdxp` | func | 2194 | `(i32 i32) -> (i32)` |
| `onUR` | func | 3041 | `() -> (i32 i32)` |
| `am6R` | func | 1843 | `(i32 i32 i32 i32) -> (i32)` |
| `F4ng` | func | 3029 | `(i32) -> (i32 i32)` |
| `pu3r` | func | 1672 | `(i32) -> ()` |
| `YnOR` | func | 1469 | `(i32 i32 i32 i32) -> ()` |
| `cjIL` | func | 3134 | `() -> ()` |
| `adHm` | func | 3030 | `(i32) -> (i32 i32)` |
| `jRcM` | func | 1864 | `(i32 i32 f64 f64 f64) -> ()` |
| `f2hl` | func | 2488 | `(i32) -> (i32)` |
| `EVba` | func | 2273 | `(i32 f64) -> (i32)` |
| `nmrK` | func | 1219 | `(i32 i32 i32 i32) -> (i32)` |
| `dy3q` | func | 2841 | `(i32) -> (i32)` |
| `da2x` | func | 610 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `oIec` | func | 2466 | `(i32) -> (i32)` |
| `lAih` | func | 2809 | `(i32) -> (i32)` |
| `Phuo` | func | 1828 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `yFfA` | func | 1959 | `(i32 i32 i32 i32) -> ()` |
| `USty` | func | 3176 | `() -> (f64)` |
| `A68t` | func | 3021 | `(i32 i32) -> (i32 i32)` |
| `u2Qt` | func | 2980 | `(i32 i32) -> (i32)` |
| `lJXR` | func | 3015 | `(i32 i32) -> (i32 i32)` |
| `eMwA` | func | 919 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `lybF` | func | 2509 | `(i32 i32) -> (i32)` |
| `lnyP` | func | 2597 | `(i32 i32) -> ()` |
| `WRhb` | func | 3180 | `(i32) -> (i32)` |
| `D8rl` | func | 1523 | `(i32 i32) -> (i32)` |
| `xIyU` | func | 3019 | `(i32 i32) -> (i32 i32)` |
| `glwR` | func | 2986 | `(i32 i32 i32 i32) -> (i32)` |
| `AYuh` | func | 1511 | `(i32 i32) -> (i32)` |
| `yWBT` | func | 2507 | `(i32) -> (i32)` |
| `KgHg` | func | 3042 | `() -> (i32 i32)` |
| `fUxF` | func | 3017 | `(i32 i32) -> (i32 i32)` |
| `bm2K` | func | 1486 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `COpc` | func | 1499 | `(i32 i32) -> (i32)` |
| `NQEC` | func | 1397 | `(i32 f64 f64) -> (i32)` |
| `eqgZ` | func | 886 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `kTqI` | func | 1328 | `(i32) -> ()` |
| `uqVd` | func | 1883 | `(i32 i32) -> (i32)` |
| `lqPF` | func | 850 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `aZVK` | func | 1396 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `wAuU` | func | 2483 | `(i32) -> (i32)` |
| `ZntT` | func | 2351 | `(i32 i32) -> (i32)` |
| `Q8K7` | func | 1642 | `(i32 i32 i32 i32) -> (i32)` |
| `fb2B` | func | 1274 | `(i32 i32 i32) -> ()` |
| `lrYP` | func | 1872 | `(i32 i32) -> ()` |
| `IPLl` | func | 2479 | `(i32) -> (i32)` |
| `UTKj` | func | 1116 | `(i32 i32) -> ()` |
| `zNKH` | func | 2508 | `(i32 i32) -> (i32)` |
| `V1Qt` | func | 732 | `(i32 i32 i32 i32) -> (i32)` |
| `ywMY` | func | 2499 | `(i32 i32) -> ()` |
| `Mwlx` | func | 1526 | `(i32 f64) -> (f64)` |
| `pRh7` | func | 2500 | `(i32) -> (i32)` |
| `SGED` | func | 1347 | `(i32 i32 i32) -> (i32)` |
| `ezv1` | func | 3025 | `(i32) -> (i32 i32)` |
| `yNNw` | func | 3040 | `() -> (i32 i32)` |
| `DIBT` | func | 3027 | `(i32) -> (i32 i32)` |
| `S5Ls` | func | 2516 | `(i32) -> (i32)` |
| `tvp0` | func | 1293 | `(i32) -> (i32)` |
| `UY5f` | func | 1890 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `ib3G` | func | 738 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `iaVk` | func | 1942 | `(i32) -> (i32)` |
| `gSGk` | global | 1 | `` |
| `eoQ3` | func | 2778 | `(i32) -> (i32)` |
| `HsiN` | func | 1443 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `qlp0` | func | 1218 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `k6WV` | func | 3181 | `(i32) -> ()` |
| `CeN2` | func | 1250 | `(i32 i32) -> (i32)` |
| `Wdqc` | func | 1601 | `(i32 i32) -> ()` |
| `Zw4K` | func | 1815 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Tqoi` | func | 2354 | `(i32 i32) -> (i32)` |
| `e7ry` | func | 2055 | `(i32 i32) -> ()` |
| `WztJ` | func | 887 | `(i32 i32) -> (i32)` |
| `hyJj` | func | 907 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `iBX4` | func | 3072 | `(i32 i32) -> ()` |
| `rMJo` | func | 1823 | `() -> (i32)` |
| `PqxB` | func | 561 | `(i32 i32 i32) -> (i32)` |
| `H0fP` | func | 2819 | `(i32) -> ()` |
| `Kn8e` | func | 2961 | `() -> ()` |
| `Tvkk` | func | 2665 | `(i32 i32) -> ()` |
| `uqKf` | func | 2303 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 740 · max 740
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2024384, `i32` = i32.const 2024964

## Functions

- 2,930 bodies · 4,076,337 code bytes · avg 1.4 KB
- instruction scan: 2,930 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 103 |
| <= 128 bytes | 255 |
| <= 256 bytes | 374 |
| <= 512 bytes | 683 |
| <= 1024 bytes | 590 |
| <= 2048 bytes | 426 |
| <= 4096 bytes | 184 |
| <= 8192 bytes | 93 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 195,073 | 88,356 | local.get×25977, i32.const×9822, i32.load×5552, local.set×4795, local.tee×4567 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 107,789 | 52,285 | local.get×14621, i32.const×6216, i32.add×3024, local.set×2957, i32.load×2872 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,699 | 21,474 | local.get×6240, i32.const×2842, local.set×1235, i32.add×1137, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 105 | 36,606 | 16,581 | local.get×4597, i32.const×1665, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,787 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,490 | 12,813 | local.get×3796, i32.const×1624, local.set×985, i32.add×684, i32.load×669 |
| 9 | `(i32 i32 i32) -> (i32)` | 74 | 22,653 | 10,819 | local.get×2894, i32.const×1298, i32.load×755, local.set×500, i32.add×479 |
| 10 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 18 | `(i32 i32 i32 i32 i32 i32) -> ()` | 153 | 17,217 | 8,058 | local.get×2506, i32.const×894, local.set×541, i32.load×399, i32.add×366 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,312 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 28 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,817 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 34 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 71 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 200 | `(i32 i32) -> ()` | 10 | 30,134 | 14,535 | local.get×5127, i32.load×1394, i32.const×1130, end×911, i32.add×829 |
| 220 | `(i32) -> ()` | 19 | 23,308 | 10,931 | local.get×2739, i32.load×1499, i32.const×1189, local.tee×1013, end×857 |
| 735 | `(i32 i32) -> ()` | 139 | 42,975 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 736 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1599 | `(i32 i32) -> (i32)` | 182 | 55,130 | 19,838 | local.get×6600, i32.const×2596, i64.store×1935, i64.const×1087, i64.load×1068 |
| 2010 | `(i32 i32) -> ()` | 111 | 39,746 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2612 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2882 | `(i32 i32 i32 i32) -> ()` | 137 | 31,374 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2901 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                 skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13
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
| `local.get` | 545,914 |
| `i32.const` | 227,790 |
| `local.tee` | 101,473 |
| `i32.load` | 95,347 |
| `local.set` | 95,239 |
| `i32.add` | 88,016 |
| `end` | 80,077 |
| `br_if` | 65,184 |
| `i32.store` | 47,003 |
| `block` | 37,619 |
| `i64.const` | 32,893 |
| `i64.store` | 32,114 |
| `if` | 30,606 |
| `call` | 29,554 |
| `i32.sub` | 24,904 |
| `i64.load` | 23,787 |
| `br` | 23,446 |
| `i32.eqz` | 19,773 |
| `select` | 17,421 |
| `i32.shl` | 16,613 |
| `i32.and` | 16,505 |
| `i32.ne` | 16,083 |
| `i32.load8_u` | 15,107 |
| `i32.eq` | 14,068 |
| `i32.store8` | 12,722 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,930/2,930 (degraded: 0)
