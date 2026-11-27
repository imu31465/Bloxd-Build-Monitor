# WASM module: `bloxd_wasm_webgl1_bg`

> environment **staging.bloxd.io** · build `4udp6d.2845de07` · analyzed 2026-11-28T07:18:32+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl1_bg.13588d85cc0adef8d7b9.wasm
> 4,934,167 bytes (4.7 MB) · sha256 `23c52ed9fe5a4512…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `505b0c86d9736415.10828` → `1462576c9f593b17.10828` (numeric version suffix unchanged — same module version, re-randomized prefix)
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
| name-section module id | `1462576c9f593b17.10828` |
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
| 0 | `ordH.Atki` | memory | `[128..14648]` |
| 0 | `ordH.VzJn` | func | `(i32) -> (f64)` |
| 1 | `ordH.lriz` | func | `() -> (i32)` |
| 2 | `ordH.mpMK` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `ordH.j6og` | func | `(i32) -> ()` |
| 4 | `ordH.nmxQ` | func | `(i32 i32) -> (i32)` |
| 5 | `ordH.B5Gj` | func | `(i32) -> (i32)` |
| 6 | `ordH.GcRJ` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `ordH.XOet` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `ordH.fF2n` | func | `(i32) -> (i32)` |
| 9 | `ordH.QmHQ` | func | `(i32 i32) -> ()` |
| 10 | `ordH.YRsG` | func | `(i32 i32) -> ()` |
| 11 | `ordH.ghZn` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `ordH.c2K8` | func | `(i32 i32) -> (i32)` |
| 13 | `ordH.MTp2` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `ordH.Bvko` | func | `(i32) -> (i32)` |
| 15 | `ordH.G9ry` | func | `(i32 i32) -> (i32)` |
| 16 | `ordH.MLEG` | func | `(i32 i32) -> (i32)` |
| 17 | `ordH.x5WZ` | func | `(i32 i32) -> ()` |
| 18 | `ordH.p99W` | func | `(i32) -> (i32)` |
| 19 | `ordH.FxAc` | func | `(i32) -> (i32)` |
| 20 | `ordH.bqe4` | func | `(i32) -> (i32)` |
| 21 | `ordH.Kuu1` | func | `(i32) -> ()` |
| 22 | `ordH.KOeU` | func | `(i32 i32) -> ()` |
| 23 | `ordH.ifBj` | func | `(i32 i32) -> ()` |
| 24 | `ordH.wTUw` | func | `(i32) -> (i32)` |
| 25 | `ordH.gWr9` | func | `(i32 i32) -> ()` |
| 26 | `ordH.gSP1` | func | `(i32 i32) -> (i32)` |
| 27 | `ordH.YQbW` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `ordH.dWwS` | func | `(i32 i32) -> (i32)` |
| 29 | `ordH.pa1Z` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `ordH.ZyZW` | func | `(i32) -> (i32)` |
| 31 | `ordH.Bdhz` | func | `() -> (f64)` |
| 32 | `ordH.H49y` | func | `(i32 i32) -> ()` |
| 33 | `ordH.aRFo` | func | `(i32) -> (i32)` |
| 34 | `ordH.E9Yb` | func | `(i32) -> (i32)` |
| 35 | `ordH.GR4D` | func | `(i32) -> ()` |
| 36 | `ordH.SxeT` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `ordH.a34V` | func | `(i32) -> (i32)` |
| 38 | `ordH.QEX9` | func | `(i32) -> (i32)` |
| 39 | `ordH.hW5m` | func | `(i32) -> (i32)` |
| 40 | `ordH.b3uO` | func | `(i32 i32) -> (i32)` |
| 41 | `ordH.xTbP` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `ordH.E3Jr` | func | `(i32) -> (i32)` |
| 43 | `ordH.MsWc` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `ordH.OoXx` | func | `(i32) -> (i32)` |
| 45 | `ordH.Z7Sw` | func | `(i32 i32 i32 i32) -> ()` |
| 46 | `ordH.kWpp` | func | `(i32 i32 i32) -> (i32)` |
| 47 | `ordH.ZFij` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 48 | `ordH.Z8Y9` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 49 | `ordH.L1Sp` | func | `(i32 i32 i32) -> ()` |
| 50 | `ordH.IUvr` | func | `(i32 i32 i32) -> ()` |
| 51 | `ordH.Pkoa` | func | `(i32 i32 i32) -> ()` |
| 52 | `ordH.PCD6` | func | `(i32 i32) -> ()` |
| 53 | `ordH.lCl9` | func | `(i32 i32) -> ()` |
| 54 | `ordH.xLlM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `ordH.JRQf` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `ordH.fFbg` | func | `(i32 f32 f32) -> ()` |
| 57 | `ordH.E1Gh` | func | `(i32 f32 f32) -> ()` |
| 58 | `ordH.Tmdx` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `ordH.p5jP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `ordH.ebQe` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `ordH.aHNV` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `ordH.Qozb` | func | `(i32 i32 i32) -> ()` |
| 63 | `ordH.d8Xq` | func | `(i32 i32 i32) -> ()` |
| 64 | `ordH.izDf` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `ordH.PVmt` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `ordH.mbGx` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `ordH.fIpV` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `ordH.Kjv9` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `ordH.DquZ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `ordH.AntT` | func | `(i32) -> (i32)` |
| 71 | `ordH.ypqC` | func | `(i32) -> ()` |
| 72 | `ordH.yZ8m` | func | `(i32) -> (i32)` |
| 73 | `ordH.iAwE` | func | `(i32 i32) -> (i32)` |
| 74 | `ordH.BYFd` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `ordH.HNPg` | func | `(i32 i32 i32) -> ()` |
| 76 | `ordH.m5RV` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `ordH.nUQ8` | func | `() -> (f64)` |
| 78 | `ordH.OZXH` | func | `() -> (f64)` |
| 79 | `ordH.lmmb` | func | `(i32 i32) -> ()` |
| 80 | `ordH.UxuI` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `ordH.bl9P` | func | `(i32 i32 i32) -> ()` |
| 82 | `ordH.YDtM` | func | `(i32 i32 i32) -> ()` |
| 83 | `ordH.fpzD` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `ordH.Oi3i` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `ordH.OGK5` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `ordH.OmKZ` | func | `(i32 i32) -> ()` |
| 87 | `ordH.cw2i` | func | `(i32 i32) -> ()` |
| 88 | `ordH.q11P` | func | `(i32) -> (i32)` |
| 89 | `ordH.hYsE` | func | `(i32 i32) -> ()` |
| 90 | `ordH.W7VW` | func | `(i32 i32) -> ()` |
| 91 | `ordH.jSzO` | func | `(i32 i32 i32) -> ()` |
| 92 | `ordH.U0d4` | func | `(i32 i32 i32) -> ()` |
| 93 | `ordH.En5r` | func | `(i32) -> (i32)` |
| 94 | `ordH.SB4c` | func | `(i32) -> (i32)` |
| 95 | `ordH.lThQ` | func | `(i32 i32) -> (i32)` |
| 96 | `ordH.mxEr` | func | `(i32 i32) -> (i32)` |
| 97 | `ordH.Ed5p` | func | `(i32 i32) -> ()` |
| 98 | `ordH.OwaL` | func | `(i32 i32) -> ()` |
| 99 | `ordH.fAUQ` | func | `(i32 i32 i32) -> ()` |
| 100 | `ordH.EjAf` | func | `(i32 i32 i32) -> ()` |
| 101 | `ordH.V5QA` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `ordH.NIoG` | func | `(i32 i32 i32 i32) -> ()` |
| 103 | `ordH.up1h` | func | `(i32 i32 f32) -> ()` |
| 104 | `ordH.zFHq` | func | `(i32 i32 f32) -> ()` |
| 105 | `ordH.tJdA` | func | `(i32 i32 i32) -> ()` |
| 106 | `ordH.x00y` | func | `(i32 i32 i32) -> ()` |
| 107 | `ordH.Qn61` | func | `(i32 i32 i32) -> ()` |
| 108 | `ordH.p1EW` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `ordH.snbT` | func | `(i32 i32 f32 f32) -> ()` |
| 110 | `ordH.aF56` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `ordH.q2DD` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 112 | `ordH.fl74` | func | `(i32 i32) -> ()` |
| 113 | `ordH.H95C` | func | `(i32 i32) -> ()` |
| 114 | `ordH.KZp0` | func | `(i32 i32) -> ()` |
| 115 | `ordH.x67t` | func | `(i32 i32) -> ()` |
| 116 | `ordH.g3nZ` | func | `(i32) -> (i32)` |
| 117 | `ordH.WfDT` | func | `(i32) -> (i32)` |
| 118 | `ordH.M85j` | func | `(i32) -> (i32)` |
| 119 | `ordH.xNlI` | func | `(i32) -> (i32)` |
| 120 | `ordH.mwgw` | func | `(i32 i32) -> ()` |
| 121 | `ordH.XezP` | func | `(i32 i32) -> ()` |
| 122 | `ordH.dSY2` | func | `(i32 i32) -> ()` |
| 123 | `ordH.idft` | func | `(i32 i32) -> ()` |
| 124 | `ordH.FR5x` | func | `(i32 i32) -> ()` |
| 125 | `ordH.NJmZ` | func | `(i32 i32) -> ()` |
| 126 | `ordH.KsHt` | func | `(i32 i32) -> (i32)` |
| 127 | `ordH.ajSV` | func | `(i32 i32) -> (i32)` |
| 128 | `ordH.m0HW` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `ordH.M9T5` | func | `(i32 i32 i32 i32) -> ()` |
| 130 | `ordH.thHN` | func | `(i32 i32) -> ()` |
| 131 | `ordH.vX8E` | func | `(i32 i32) -> ()` |
| 132 | `ordH.pp9B` | func | `(i32) -> (i32)` |
| 133 | `ordH.l3KJ` | func | `(i32 i32) -> ()` |
| 134 | `ordH.RQaB` | func | `(i32 i32) -> ()` |
| 135 | `ordH.uZSp` | func | `(i32 i32 i32) -> ()` |
| 136 | `ordH.dy4T` | func | `(i32 i32 i32) -> ()` |
| 137 | `ordH.Kiop` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `ordH.H1mW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 139 | `ordH.mUro` | func | `(i32 i32) -> ()` |
| 140 | `ordH.kh3F` | func | `(i32 i32 i32) -> ()` |
| 141 | `ordH.lcnP` | func | `(i32 i32 i32) -> ()` |
| 142 | `ordH.x2kO` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `ordH.pYcq` | func | `(i32 i32 i32 i32) -> (i32)` |
| 144 | `ordH.f44k` | func | `(i32 i32 i32) -> ()` |
| 145 | `ordH.GUtx` | func | `(i32 i32 i32) -> ()` |
| 146 | `ordH.mGaR` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `ordH.jqmt` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 148 | `ordH.aYNU` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `ordH.aRcg` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `ordH.IONK` | func | `(i32 i32 i32) -> (i32)` |
| 151 | `ordH.ZEMX` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `ordH.RUPz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 153 | `ordH.zkvg` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `ordH.eYdr` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `ordH.G4FP` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `ordH.ydcE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 157 | `ordH.opDK` | func | `(i32) -> (i32)` |
| 158 | `ordH.o01j` | func | `(i32) -> (i32)` |
| 159 | `ordH.f2Ff` | func | `(i32) -> (i32)` |
| 160 | `ordH.tNC8` | func | `(i32) -> (i32)` |
| 161 | `ordH.T1D1` | func | `() -> (i32)` |
| 162 | `ordH.XD0C` | func | `() -> (i32)` |
| 163 | `ordH.qdkh` | func | `() -> (i32)` |
| 164 | `ordH.a48o` | func | `() -> (i32)` |
| 165 | `ordH.l4Tj` | func | `(i32 i32) -> (i32)` |
| 166 | `ordH.Tcwm` | func | `(i32) -> ()` |
| 167 | `ordH.KOuj` | func | `(i32 i32) -> (i32)` |
| 168 | `ordH.QHkO` | func | `(i32) -> (i32)` |
| 169 | `ordH.bhSO` | func | `(i32) -> (i32)` |
| 170 | `ordH.XULh` | func | `(i32) -> (i32)` |
| 171 | `ordH.epUu` | func | `(i32) -> ()` |
| 172 | `ordH.MOmm` | func | `(i32 i32 i32) -> (i32)` |
| 173 | `ordH.a6dC` | func | `(i32) -> (i32)` |
| 174 | `ordH.df1D` | func | `(i32) -> (i32)` |
| 175 | `ordH.pHI9` | func | `(i32 i32) -> (i32)` |
| 176 | `ordH.DWWh` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `ordH.iOrE` | func | `(i32 i32 i32) -> (i32)` |
| 178 | `ordH.pcfs` | func | `(i32) -> (i32)` |
| 179 | `ordH.i0QR` | func | `(i32) -> (i32)` |
| 180 | `ordH.bT5O` | func | `(i32) -> (i32)` |
| 181 | `ordH.n4wi` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `ordH.OIDu` | func | `(i32 i32 i32 i32) -> ()` |
| 183 | `ordH.u8sw` | func | `(i32 i32) -> ()` |
| 184 | `ordH.waQT` | func | `(i32 i32 i32) -> ()` |
| 185 | `ordH.cJCs` | func | `(i32 i32) -> ()` |
| 186 | `ordH.jbVW` | func | `(i32 i32 i32) -> ()` |
| 187 | `ordH.ZzG0` | func | `(i32 i32) -> ()` |
| 188 | `ordH.JddU` | func | `(i32 i32) -> ()` |
| 189 | `ordH.icNp` | func | `(i32) -> (i32)` |
| 190 | `ordH.CY43` | func | `(i32 i32) -> (i32)` |
| 191 | `ordH.zl2g` | func | `(i32) -> ()` |
| 192 | `ordH.M3r9` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `ordH.tfE5` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 194 | `ordH.Gyxr` | func | `(i32 i32) -> ()` |
| 195 | `ordH.KRHS` | func | `(i32 i32) -> ()` |
| 196 | `ordH.vit6` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `ordH.Rcs8` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 198 | `ordH.tJEA` | func | `(i32 f32) -> ()` |
| 199 | `ordH.Z7zQ` | func | `(i32 f32) -> ()` |
| 200 | `ordH.pgPX` | func | `(i32 i32) -> ()` |
| 201 | `ordH.lW26` | func | `(i32 i32) -> ()` |
| 202 | `ordH.D8nN` | func | `(i32) -> (i32)` |
| 203 | `ordH.YV9c` | func | `(i32) -> (i32)` |
| 204 | `ordH.nHHu` | func | `(i32) -> (i32)` |
| 205 | `ordH.Ow08` | func | `(i32) -> (i32)` |
| 206 | `ordH.nMG7` | func | `(i32 i32 i32) -> ()` |
| 207 | `ordH.haJ9` | func | `(i32 i32 i32) -> ()` |
| 208 | `ordH.uwFk` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `ordH.U5Pf` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 210 | `ordH.oyEo` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `ordH.HA8s` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 212 | `ordH.vK8q` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `ordH.SqlO` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 214 | `ordH.rDk1` | func | `(i32 i32) -> ()` |
| 215 | `ordH.O0JU` | func | `(i32 i32) -> ()` |
| 216 | `ordH.S9NT` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 217 | `ordH.mJlo` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `ordH.YDBj` | func | `(i32 i32 i32 f32) -> ()` |
| 219 | `ordH.K3DO` | func | `(i32) -> (i32)` |
| 220 | `ordH.gCOZ` | func | `(i32) -> (i32)` |
| 221 | `ordH.EVx6` | func | `(i32 i32) -> ()` |
| 222 | `ordH.hVUR` | func | `(i32 i32) -> ()` |
| 223 | `ordH.tc4q` | func | `(i32 i32 i32) -> (i32)` |
| 224 | `ordH.TNL7` | func | `(i32) -> (i32)` |
| 225 | `ordH.LeRx` | func | `(i32) -> (i32)` |
| 226 | `ordH.nYAu` | func | `(i32 i32) -> ()` |
| 227 | `ordH.QhnL` | func | `(i32 i32 i32) -> (i32)` |
| 228 | `ordH.DTlS` | func | `(i32 i32) -> ()` |
| 229 | `ordH.ZYcH` | func | `(i32 i32) -> ()` |
| 230 | `ordH.HOri` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `ordH.cyh6` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 232 | `ordH.TiLO` | func | `(i32 i32 i32) -> ()` |
| 233 | `ordH.zAmF` | func | `(i32 i32 i32) -> ()` |
| 234 | `ordH.OA3g` | func | `(i32 i32) -> ()` |
| 235 | `ordH.Ummj` | func | `(i32 i32) -> ()` |
| 236 | `ordH.LQpK` | func | `(i32 i32) -> ()` |
| 237 | `ordH.bskV` | func | `(i32 i32) -> ()` |
| 238 | `ordH.rb8h` | func | `(i32 i32) -> ()` |
| 239 | `ordH.l3oz` | func | `(i32 i32) -> ()` |
| 240 | `ordH.ZjFu` | func | `(i32 f32 f32) -> ()` |
| 241 | `ordH.lKZM` | func | `(i32 f32 f32) -> ()` |
| 242 | `ordH.Fnpf` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `ordH.jlfz` | func | `(i32 i32 i32 i32) -> ()` |
| 244 | `ordH.t9eX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `ordH.rTJ0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `ordH.PLcR` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 247 | `ordH.w2Yg` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `ordH.ITNR` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 249 | `ordH.HEE7` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `ordH.bZCW` | func | `(i32 i32 i32 i32) -> ()` |
| 251 | `ordH.U1av` | func | `(i32) -> ()` |
| 252 | `ordH.wjoO` | func | `(i32 i32) -> ()` |
| 253 | `ordH.dXGa` | func | `(i32 i32) -> ()` |
| 254 | `ordH.Ww3s` | func | `(i32 i32) -> ()` |
| 255 | `ordH.FW84` | func | `(i32 i32) -> ()` |
| 256 | `ordH.WPMi` | func | `(i32 i32) -> ()` |
| 257 | `ordH.esnO` | func | `(i32 i32) -> ()` |
| 258 | `ordH.uXlI` | func | `(i32 i32) -> ()` |
| 259 | `ordH.Z9zM` | func | `(i32 i32) -> ()` |
| 260 | `ordH.knPf` | func | `(i32) -> (i32)` |
| 261 | `ordH.QJJj` | func | `(i32) -> (i32)` |
| 262 | `ordH.pqWo` | func | `(i32) -> (i32)` |
| 263 | `ordH.jmSv` | func | `(i32) -> (i32)` |
| 264 | `ordH.SsXs` | func | `(i32) -> ()` |
| 265 | `ordH.zLfp` | func | `(i32 i32 i32 i32) -> ()` |
| 266 | `ordH.IanF` | func | `(i32) -> ()` |
| 267 | `ordH.uwVW` | func | `(i32) -> (i32)` |
| 268 | `ordH.LMqk` | func | `(i32) -> (i32)` |
| 269 | `ordH.FOoF` | func | `(i32) -> (i32)` |
| 270 | `ordH.dSGT` | func | `(i32) -> (i32)` |
| 271 | `ordH.fmde` | func | `(i32 i32) -> ()` |
| 272 | `ordH.SrW2` | func | `(i32) -> ()` |
| 273 | `ordH.xtok` | func | `(i32 i32) -> ()` |
| 274 | `ordH.AqTf` | func | `(i32) -> (i32)` |
| 275 | `ordH.C7yw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `ordH.yr3x` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `ordH.FwpW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `ordH.jDSU` | func | `(i32 i32) -> (i32)` |
| 279 | `ordH.qWam` | func | `(i32 i32) -> (i32)` |
| 280 | `ordH.v75W` | func | `(i32 i32) -> (i32)` |
| 281 | `ordH.vquV` | func | `(f64) -> (i32)` |
| 282 | `ordH.ndrE` | func | `(i32 i32) -> (i32)` |
| 283 | `ordH.h9xg` | func | `(i32 i32) -> (i32)` |

## Exports

167 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `Bs1S` | func | 2488 | `(i32) -> (i32)` |
| `ye07` | func | 661 | `(i32 i32) -> (i32)` |
| `eLzu` | func | 610 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `JSMv` | func | 2478 | `(i32) -> (f64)` |
| `KkwN` | func | 3134 | `() -> ()` |
| `TaFo` | func | 1823 | `() -> (i32)` |
| `EX8u` | func | 2819 | `(i32) -> ()` |
| `Fhdo` | func | 1451 | `(i32) -> (i32)` |
| `aTly` | func | 2272 | `(i32 i32) -> ()` |
| `memory` | memory | 0 | `` |
| `VT6K` | func | 2479 | `(i32) -> (i32)` |
| `qu3t` | func | 1558 | `(i32 i32 i32 i32) -> (i32)` |
| `xyuT` | func | 1642 | `(i32 i32 i32 i32) -> (i32)` |
| `SSl1` | func | 1331 | `(i32 i32) -> (i32)` |
| `JGSo` | func | 1398 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Valc` | func | 1890 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `fcVl` | func | 1764 | `(i32 i32) -> (i32)` |
| `gAgj` | func | 672 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `k7Dn` | func | 1116 | `(i32 i32) -> ()` |
| `kQe7` | func | 1347 | `(i32 i32 i32) -> (i32)` |
| `iLrS` | func | 2019 | `(i32 f64) -> (i32)` |
| `DdyU` | func | 2563 | `() -> (i32)` |
| `kHSE` | func | 1293 | `(i32) -> (i32)` |
| `Ghmi` | func | 3042 | `() -> (i32 i32)` |
| `n4Ee` | func | 732 | `(i32 i32 i32 i32) -> (i32)` |
| `rfIX` | func | 2508 | `(i32 i32) -> (i32)` |
| `qeBW` | func | 1898 | `(i32) -> ()` |
| `u6Fg` | func | 2436 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `pKR3` | func | 2353 | `(i32 i32) -> (i32)` |
| `hqgR` | func | 1274 | `(i32 i32 i32) -> ()` |
| `aC8i` | func | 757 | `(i32 i32 i32) -> (i32)` |
| `L91u` | func | 2495 | `(i32 i32) -> ()` |
| `uOwE` | func | 2080 | `(i32 i32) -> (i32)` |
| `jtfC` | func | 3028 | `(i32) -> (i32 i32)` |
| `ONbF` | func | 1225 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `rxaL` | func | 3025 | `(i32) -> (i32 i32)` |
| `SQFF` | func | 1815 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `SwmB` | func | 2351 | `(i32 i32) -> (i32)` |
| `PKoo` | func | 3072 | `(i32 i32) -> ()` |
| `OWez` | func | 2437 | `(i32) -> (i32)` |
| `MoTp` | func | 1469 | `(i32 i32 i32 i32) -> ()` |
| `znmU` | func | 1526 | `(i32 f64) -> (f64)` |
| `h7EP` | func | 2483 | `(i32) -> (i32)` |
| `HAeB` | func | 2497 | `(i32) -> (i32)` |
| `OCX4` | func | 2841 | `(i32) -> (i32)` |
| `unc9` | func | 3063 | `(i32 i32 i32 i32) -> ()` |
| `Ftys` | func | 3100 | `() -> (i32)` |
| `tB7h` | func | 3016 | `(i32 i32) -> (i32 i32)` |
| `zQQg` | func | 1942 | `(i32) -> (i32)` |
| `bgKG` | func | 693 | `(f64) -> (f64)` |
| `CM55` | func | 2517 | `(i32) -> (i32)` |
| `kwY0` | func | 2303 | `(i32 i32) -> ()` |
| `Gg5E` | func | 1303 | `(i32 i32) -> (i32)` |
| `EZu0` | func | 3020 | `(i32 i32) -> (i32 i32)` |
| `aSaI` | func | 887 | `(i32 i32) -> (i32)` |
| `p9tr` | func | 907 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `lHfK` | func | 1864 | `(i32 i32 f64 f64 f64) -> ()` |
| `s30b` | func | 3181 | `(i32) -> ()` |
| `vXRe` | func | 1448 | `() -> (i32)` |
| `zNmz` | func | 2330 | `(i32 i32 i32 i32) -> ()` |
| `Q1Hn` | func | 1269 | `(i32 i32 i32) -> (i32)` |
| `d2iL` | func | 1753 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WCYV` | func | 2485 | `(i32) -> ()` |
| `Zm12` | func | 561 | `(i32 i32 i32) -> (i32)` |
| `mgJ3` | func | 2194 | `(i32 i32) -> (i32)` |
| `KVLl` | func | 2465 | `(i32 i32) -> ()` |
| `JhHu` | func | 2665 | `(i32 i32) -> ()` |
| `ulS0` | func | 1883 | `(i32 i32) -> (i32)` |
| `A69p` | func | 2039 | `(i32 f64 f64 f64) -> (i32)` |
| `u2bx` | func | 1397 | `(i32 f64 f64) -> (i32)` |
| `xmoS` | global | 2 | `` |
| `bQvL` | func | 1522 | `(i32 i32) -> (i32)` |
| `jEBD` | func | 2466 | `(i32) -> (i32)` |
| `KEfL` | func | 2809 | `(i32) -> (i32)` |
| `LjP5` | func | 1872 | `(i32 i32) -> ()` |
| `cXUc` | func | 1396 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `INiq` | func | 1491 | `(i32 i32 i32 i32) -> (i32)` |
| `gOD3` | func | 2487 | `(i32) -> (i32)` |
| `VNQv` | func | 2480 | `(i32) -> (i32)` |
| `HIgt` | func | 3040 | `() -> (i32 i32)` |
| `SYmn` | func | 2217 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `YkqB` | func | 3029 | `(i32) -> (i32 i32)` |
| `yLGn` | func | 3133 | `(i32) -> ()` |
| `KDnc` | func | 2273 | `(i32 f64) -> (i32)` |
| `IsLh` | func | 3021 | `(i32 i32) -> (i32 i32)` |
| `GwfF` | func | 3019 | `(i32 i32) -> (i32 i32)` |
| `ZnGf` | func | 1993 | `(i32 i32) -> ()` |
| `NPwD` | func | 3180 | `(i32) -> (i32)` |
| `mzle` | func | 1511 | `(i32 i32) -> (i32)` |
| `oFcC` | func | 850 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `bdYg` | func | 3010 | `(i32 i32 i32) -> (i32 i32)` |
| `gfaN` | func | 1709 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `rjh6` | func | 2420 | `(i32) -> (i32)` |
| `jR1C` | func | 2678 | `(i32 i32) -> ()` |
| `tcxc` | func | 2785 | `(i32) -> (i32)` |
| `bU3D` | func | 3140 | `(i32) -> ()` |
| `ZHHx` | func | 2354 | `(i32 i32) -> (i32)` |
| `RKcO` | func | 2482 | `(i32) -> (i32)` |
| `iwya` | func | 3041 | `() -> (i32 i32)` |
| `nvDD` | func | 2518 | `(i32) -> (i32)` |
| `YCfh` | func | 2162 | `(i32 i32) -> (i32)` |
| `V8yB` | func | 2507 | `(i32) -> (i32)` |
| `GPqH` | func | 2486 | `(i32) -> (i32)` |
| `DdfR` | func | 700 | `(i32 i32) -> (i32)` |
| `z9jE` | func | 1218 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `BmyE` | func | 2986 | `(i32 i32 i32 i32) -> (i32)` |
| `Ps7H` | func | 2484 | `(i32) -> (i32)` |
| `vknw` | func | 1250 | `(i32 i32) -> (i32)` |
| `RIxl` | func | 1601 | `(i32 i32) -> ()` |
| `boXU` | func | 3204 | `() -> (i32)` |
| `r4Z5` | func | 2597 | `(i32 i32) -> ()` |
| `XpZ1` | func | 3011 | `(i32 i32 i32) -> (i32 i32)` |
| `DfeS` | func | 3027 | `(i32) -> (i32 i32)` |
| `fFXF` | func | 919 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `yIjV` | func | 1590 | `(i32 i32) -> (i32)` |
| `vkUY` | func | 1499 | `(i32 i32) -> (i32)` |
| `yo4G` | func | 2516 | `(i32) -> (i32)` |
| `fJXf` | func | 2598 | `() -> (i32)` |
| `xVoI` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WwFV` | func | 2055 | `(i32 i32) -> ()` |
| `OYdr` | func | 2509 | `(i32 i32) -> (i32)` |
| `NMcN` | func | 3127 | `(i32 i32 i32) -> ()` |
| `spaG` | func | 2481 | `(i32) -> (i32)` |
| `jxzV` | func | 2500 | `(i32) -> (i32)` |
| `Hfpe` | func | 1443 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `XZsL` | func | 1492 | `(i32) -> (i32)` |
| `CZ1o` | func | 1523 | `(i32 i32) -> (i32)` |
| `cBLP` | func | 2562 | `(i32) -> ()` |
| `DtYx` | func | 1537 | `(i32 i32 i32) -> (i32)` |
| `vN5r` | func | 1672 | `(i32) -> ()` |
| `AQ6Y` | func | 1486 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Pz1I` | func | 886 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `bEol` | func | 1605 | `(i32 f64 f64 f64) -> (i32)` |
| `C0o5` | func | 1219 | `(i32 i32 i32 i32) -> (i32)` |
| `pJhb` | func | 2382 | `(i32 i32) -> (i32)` |
| `rrJj` | func | 3071 | `(i32 i32 i32) -> ()` |
| `Tw2B` | func | 1959 | `(i32 i32 i32 i32) -> ()` |
| `QKfu` | func | 2550 | `(i32 i32) -> ()` |
| `vk4x` | func | 3017 | `(i32 i32) -> (i32 i32)` |
| `da8R` | func | 3030 | `(i32) -> (i32 i32)` |
| `St8b` | func | 676 | `(i32 i32) -> (i32)` |
| `kUTN` | func | 2778 | `(i32) -> (i32)` |
| `IcVX` | func | 1419 | `(i32 i32) -> (i32)` |
| `Kl5G` | func | 3018 | `(i32 i32) -> (i32 i32)` |
| `JM7o` | func | 738 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `xeYQ` | func | 1828 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `xU5N` | func | 3015 | `(i32 i32) -> (i32 i32)` |
| `NddS` | func | 1957 | `(i32) -> (i32)` |
| `FqG3` | func | 1328 | `(i32) -> ()` |
| `b7C1` | func | 3176 | `() -> (f64)` |
| `SZJH` | func | 2961 | `() -> ()` |
| `gVxA` | func | 2799 | `(i32) -> (i32)` |
| `G9xr` | func | 2395 | `(i32 i32 i32 i32) -> (i32)` |
| `hWrE` | func | 1730 | `(i32) -> (i32)` |
| `hsBT` | func | 1843 | `(i32 i32 i32 i32) -> (i32)` |
| `YdBu` | func | 2499 | `(i32 i32) -> ()` |
| `MSy6` | func | 2352 | `(i32 i32) -> (i32)` |
| `R3Wt` | func | 1746 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `sTRs` | func | 1115 | `(i32 i32) -> (i32)` |
| `vhZ8` | func | 735 | `(i32) -> (i32)` |
| `auRU` | func | 3203 | `() -> (i32)` |
| `OOWp` | func | 2580 | `(i32) -> ()` |
| `gO38` | func | 2498 | `(i32) -> (i32)` |
| `qg5e` | func | 3026 | `(i32) -> (i32 i32)` |
| `eFvp` | func | 2992 | `(i32 i32) -> ()` |
| `RuJi` | global | 1 | `` |
| `JtqP` | func | 2980 | `(i32 i32) -> (i32)` |

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
