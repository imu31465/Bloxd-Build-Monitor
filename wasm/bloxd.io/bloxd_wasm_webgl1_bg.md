# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `dz8ef.98c5e741` · analyzed 2026-11-25T13:06:22+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.0ee142b9da2680cdccdf.wasm
> 4,851,467 bytes (4.6 MB) · sha256 `ab1532b525d3a218…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `62c522dd1ab271d1.10604` → `9a312b5744e5e9ae.10604` (numeric version suffix unchanged — same module version, re-randomized prefix)
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
| name-section module id | `9a312b5744e5e9ae.10604` |
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
| 0 | `cZkF.Gb6C` | memory | `[128..14648]` |
| 0 | `cZkF.gg5y` | func | `(i32) -> (f64)` |
| 1 | `cZkF.mSla` | func | `() -> (i32)` |
| 2 | `cZkF.eg9f` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `cZkF.bzMT` | func | `(i32) -> ()` |
| 4 | `cZkF.G5KT` | func | `(i32 i32) -> (i32)` |
| 5 | `cZkF.pVVN` | func | `(i32) -> (i32)` |
| 6 | `cZkF.aFPk` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `cZkF.Wxly` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `cZkF.BPgE` | func | `(i32) -> (i32)` |
| 9 | `cZkF.yimb` | func | `(i32 i32) -> ()` |
| 10 | `cZkF.JU4E` | func | `(i32 i32) -> ()` |
| 11 | `cZkF.gAbE` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `cZkF.SBpx` | func | `(i32 i32) -> (i32)` |
| 13 | `cZkF.kvOF` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `cZkF.yVpG` | func | `(i32) -> (i32)` |
| 15 | `cZkF.iYwk` | func | `(i32 i32) -> (i32)` |
| 16 | `cZkF.rDyg` | func | `(i32 i32) -> (i32)` |
| 17 | `cZkF.iih1` | func | `(i32 i32) -> ()` |
| 18 | `cZkF.i7WA` | func | `(i32) -> (i32)` |
| 19 | `cZkF.RgWC` | func | `(i32) -> (i32)` |
| 20 | `cZkF.bhBq` | func | `(i32) -> (i32)` |
| 21 | `cZkF.f8Ac` | func | `(i32) -> ()` |
| 22 | `cZkF.sNPP` | func | `(i32 i32) -> ()` |
| 23 | `cZkF.LlME` | func | `(i32 i32) -> ()` |
| 24 | `cZkF.Dzvo` | func | `(i32) -> (i32)` |
| 25 | `cZkF.UY2l` | func | `(i32 i32) -> ()` |
| 26 | `cZkF.izYz` | func | `(i32 i32) -> (i32)` |
| 27 | `cZkF.NePs` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `cZkF.NDT7` | func | `(i32 i32) -> (i32)` |
| 29 | `cZkF.c1rj` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `cZkF.BqCu` | func | `(i32) -> (i32)` |
| 31 | `cZkF.CPo5` | func | `(i32 i32) -> ()` |
| 32 | `cZkF.E2h7` | func | `(i32) -> (i32)` |
| 33 | `cZkF.SP8E` | func | `(i32) -> (i32)` |
| 34 | `cZkF.Vlii` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `cZkF.PFci` | func | `(i32) -> (i32)` |
| 36 | `cZkF.twdi` | func | `(i32) -> (i32)` |
| 37 | `cZkF.wMji` | func | `(i32) -> (i32)` |
| 38 | `cZkF.dkpN` | func | `(i32 i32) -> (i32)` |
| 39 | `cZkF.PBJt` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `cZkF.vJ2W` | func | `(i32) -> (i32)` |
| 41 | `cZkF.AbcM` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `cZkF.yCNy` | func | `() -> (f64)` |
| 43 | `cZkF.r5TF` | func | `(i32) -> (i32)` |
| 44 | `cZkF.wHdp` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `cZkF.argG` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `cZkF.RZUH` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `cZkF.gi1s` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `cZkF.kosV` | func | `(i32 i32 i32) -> ()` |
| 49 | `cZkF.rO8z` | func | `(i32 i32 i32) -> ()` |
| 50 | `cZkF.JCmI` | func | `(i32 i32 i32) -> ()` |
| 51 | `cZkF.WEyA` | func | `(i32 i32) -> ()` |
| 52 | `cZkF.YAuh` | func | `(i32 i32) -> ()` |
| 53 | `cZkF.vd0N` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `cZkF.SGKa` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `cZkF.UiTi` | func | `(i32 f32 f32) -> ()` |
| 56 | `cZkF.KC8c` | func | `(i32 f32 f32) -> ()` |
| 57 | `cZkF.KJXQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `cZkF.EvcC` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `cZkF.quVU` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `cZkF.NuHB` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `cZkF.eQcY` | func | `(i32 i32 i32) -> ()` |
| 62 | `cZkF.hVNJ` | func | `(i32 i32 i32) -> ()` |
| 63 | `cZkF.MpJ1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `cZkF.GSMm` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `cZkF.WXOe` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `cZkF.TO2X` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `cZkF.hB8E` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `cZkF.XE9Z` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `cZkF.pcpD` | func | `(i32) -> (i32)` |
| 70 | `cZkF.f9cd` | func | `(i32) -> ()` |
| 71 | `cZkF.fjeS` | func | `(i32) -> (i32)` |
| 72 | `cZkF.N3au` | func | `(i32 i32) -> (i32)` |
| 73 | `cZkF.aOpa` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `cZkF.ey9S` | func | `(i32 i32 i32) -> ()` |
| 75 | `cZkF.lr0i` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `cZkF.HwkD` | func | `() -> (f64)` |
| 77 | `cZkF.XVtz` | func | `() -> (f64)` |
| 78 | `cZkF.nFRj` | func | `(i32 i32) -> ()` |
| 79 | `cZkF.wBkv` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `cZkF.jlou` | func | `(i32 i32 i32) -> ()` |
| 81 | `cZkF.PvqE` | func | `(i32 i32 i32) -> ()` |
| 82 | `cZkF.dlmy` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `cZkF.dc31` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `cZkF.uocT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `cZkF.fvp7` | func | `(i32 i32) -> ()` |
| 86 | `cZkF.fdDM` | func | `(i32 i32) -> ()` |
| 87 | `cZkF.qyfT` | func | `(i32) -> (i32)` |
| 88 | `cZkF.QUyR` | func | `(i32 i32) -> ()` |
| 89 | `cZkF.f2K1` | func | `(i32 i32) -> ()` |
| 90 | `cZkF.EdXa` | func | `(i32 i32 i32) -> ()` |
| 91 | `cZkF.a5hB` | func | `(i32 i32 i32) -> ()` |
| 92 | `cZkF.Ikjm` | func | `(i32) -> (i32)` |
| 93 | `cZkF.cYyi` | func | `(i32) -> (i32)` |
| 94 | `cZkF.bxJ1` | func | `(i32 i32) -> (i32)` |
| 95 | `cZkF.UaV9` | func | `(i32 i32) -> (i32)` |
| 96 | `cZkF.n2D7` | func | `(i32 i32) -> ()` |
| 97 | `cZkF.rgJs` | func | `(i32 i32) -> ()` |
| 98 | `cZkF.IUXh` | func | `(i32 i32 i32) -> ()` |
| 99 | `cZkF.IYRx` | func | `(i32 i32 i32) -> ()` |
| 100 | `cZkF.I0LA` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `cZkF.SDx2` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `cZkF.tBon` | func | `(i32 i32 f32) -> ()` |
| 103 | `cZkF.JQx4` | func | `(i32 i32 f32) -> ()` |
| 104 | `cZkF.HtpC` | func | `(i32 i32 i32) -> ()` |
| 105 | `cZkF.XGm6` | func | `(i32 i32 i32) -> ()` |
| 106 | `cZkF.sedf` | func | `(i32 i32 i32) -> ()` |
| 107 | `cZkF.CiSs` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `cZkF.Jleq` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `cZkF.yq9v` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `cZkF.P1hA` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `cZkF.bTS2` | func | `(i32 i32) -> ()` |
| 112 | `cZkF.eABJ` | func | `(i32 i32) -> ()` |
| 113 | `cZkF.v2vT` | func | `(i32 i32) -> ()` |
| 114 | `cZkF.dbCh` | func | `(i32 i32) -> ()` |
| 115 | `cZkF.jNuN` | func | `(i32) -> (i32)` |
| 116 | `cZkF.uJUC` | func | `(i32) -> (i32)` |
| 117 | `cZkF.V7Kb` | func | `(i32) -> (i32)` |
| 118 | `cZkF.NDrX` | func | `(i32) -> (i32)` |
| 119 | `cZkF.Ya5b` | func | `(i32 i32) -> ()` |
| 120 | `cZkF.w2RA` | func | `(i32 i32) -> ()` |
| 121 | `cZkF.LVWA` | func | `(i32 i32) -> ()` |
| 122 | `cZkF.wgoP` | func | `(i32 i32) -> ()` |
| 123 | `cZkF.KecS` | func | `(i32 i32) -> ()` |
| 124 | `cZkF.AW3J` | func | `(i32 i32) -> ()` |
| 125 | `cZkF.LMp0` | func | `(i32 i32) -> (i32)` |
| 126 | `cZkF.WxgH` | func | `(i32 i32) -> (i32)` |
| 127 | `cZkF.hJ44` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `cZkF.rP3z` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `cZkF.M6Yg` | func | `(i32 i32) -> ()` |
| 130 | `cZkF.Rkll` | func | `(i32 i32) -> ()` |
| 131 | `cZkF.kPdq` | func | `(i32) -> (i32)` |
| 132 | `cZkF.s7ss` | func | `(i32 i32) -> ()` |
| 133 | `cZkF.BD9K` | func | `(i32 i32) -> ()` |
| 134 | `cZkF.iNV0` | func | `(i32 i32 i32) -> ()` |
| 135 | `cZkF.RgQv` | func | `(i32 i32 i32) -> ()` |
| 136 | `cZkF.VgLb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `cZkF.OqP0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `cZkF.oo6i` | func | `(i32 i32) -> ()` |
| 139 | `cZkF.BEPX` | func | `(i32 i32 i32) -> ()` |
| 140 | `cZkF.Iom2` | func | `(i32 i32 i32) -> ()` |
| 141 | `cZkF.KY9N` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `cZkF.Lnzz` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `cZkF.kvSu` | func | `(i32 i32 i32) -> ()` |
| 144 | `cZkF.kAY8` | func | `(i32 i32 i32) -> ()` |
| 145 | `cZkF.C1os` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `cZkF.TPEz` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `cZkF.u23C` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `cZkF.VfNy` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `cZkF.Komw` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `cZkF.Kzbw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `cZkF.LIDn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `cZkF.psmL` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `cZkF.DeTf` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `cZkF.bBOo` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `cZkF.MuS5` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `cZkF.bo6D` | func | `(i32) -> (i32)` |
| 157 | `cZkF.PK2S` | func | `(i32) -> (i32)` |
| 158 | `cZkF.fyGG` | func | `(i32) -> (i32)` |
| 159 | `cZkF.KVax` | func | `(i32) -> (i32)` |
| 160 | `cZkF.LgkR` | func | `() -> (i32)` |
| 161 | `cZkF.uxqi` | func | `() -> (i32)` |
| 162 | `cZkF.ihmc` | func | `() -> (i32)` |
| 163 | `cZkF.qdqp` | func | `() -> (i32)` |
| 164 | `cZkF.Gxji` | func | `(i32 i32) -> (i32)` |
| 165 | `cZkF.q6U7` | func | `(i32) -> ()` |
| 166 | `cZkF.kGML` | func | `(i32 i32) -> (i32)` |
| 167 | `cZkF.sEx5` | func | `(i32) -> (i32)` |
| 168 | `cZkF.mtgR` | func | `(i32) -> (i32)` |
| 169 | `cZkF.Id8a` | func | `(i32) -> (i32)` |
| 170 | `cZkF.BAws` | func | `(i32) -> ()` |
| 171 | `cZkF.mlsm` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `cZkF.dWiy` | func | `(i32) -> (i32)` |
| 173 | `cZkF.m6dd` | func | `(i32) -> (i32)` |
| 174 | `cZkF.Yz5u` | func | `(i32 i32) -> (i32)` |
| 175 | `cZkF.oGEK` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `cZkF.QcHW` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `cZkF.i0X7` | func | `(i32) -> (i32)` |
| 178 | `cZkF.oZG5` | func | `(i32) -> (i32)` |
| 179 | `cZkF.lbYU` | func | `(i32) -> (i32)` |
| 180 | `cZkF.rxwE` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `cZkF.tMJK` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `cZkF.E89c` | func | `(i32 i32) -> ()` |
| 183 | `cZkF.ajS2` | func | `(i32 i32 i32) -> ()` |
| 184 | `cZkF.DkLY` | func | `(i32 i32) -> ()` |
| 185 | `cZkF.M8VO` | func | `(i32 i32 i32) -> ()` |
| 186 | `cZkF.ru0t` | func | `(i32 i32) -> ()` |
| 187 | `cZkF.p5qj` | func | `(i32 i32) -> ()` |
| 188 | `cZkF.Vftc` | func | `(i32) -> (i32)` |
| 189 | `cZkF.OKqS` | func | `(i32 i32) -> (i32)` |
| 190 | `cZkF.UJyx` | func | `(i32) -> ()` |
| 191 | `cZkF.A1aO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `cZkF.hlsu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `cZkF.iX0z` | func | `(i32 i32) -> ()` |
| 194 | `cZkF.Nbx1` | func | `(i32 i32) -> ()` |
| 195 | `cZkF.un4Z` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `cZkF.RI9g` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `cZkF.k1xv` | func | `(i32 f32) -> ()` |
| 198 | `cZkF.abQm` | func | `(i32 f32) -> ()` |
| 199 | `cZkF.UIlZ` | func | `(i32 i32) -> ()` |
| 200 | `cZkF.tSwr` | func | `(i32 i32) -> ()` |
| 201 | `cZkF.iXIB` | func | `(i32) -> (i32)` |
| 202 | `cZkF.JPZZ` | func | `(i32) -> (i32)` |
| 203 | `cZkF.jneu` | func | `(i32) -> (i32)` |
| 204 | `cZkF.eKyO` | func | `(i32) -> (i32)` |
| 205 | `cZkF.SiEu` | func | `(i32 i32 i32) -> ()` |
| 206 | `cZkF.J65v` | func | `(i32 i32 i32) -> ()` |
| 207 | `cZkF.trNm` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `cZkF.J0EY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `cZkF.tTNj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `cZkF.OLjk` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `cZkF.h0Ar` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `cZkF.uVwQ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `cZkF.TDiK` | func | `(i32 i32) -> ()` |
| 214 | `cZkF.XMEd` | func | `(i32 i32) -> ()` |
| 215 | `cZkF.Z1Pf` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `cZkF.N7wP` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `cZkF.PmRv` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `cZkF.MNZg` | func | `(i32) -> (i32)` |
| 219 | `cZkF.bl1K` | func | `(i32) -> (i32)` |
| 220 | `cZkF.ugHp` | func | `(i32 i32) -> ()` |
| 221 | `cZkF.WLMv` | func | `(i32 i32) -> ()` |
| 222 | `cZkF.VL2F` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `cZkF.jFUZ` | func | `(i32) -> (i32)` |
| 224 | `cZkF.tLiA` | func | `(i32) -> (i32)` |
| 225 | `cZkF.Pv0V` | func | `(i32 i32) -> ()` |
| 226 | `cZkF.oR1a` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `cZkF.Yr3R` | func | `(i32 i32) -> ()` |
| 228 | `cZkF.xxLp` | func | `(i32 i32) -> ()` |
| 229 | `cZkF.CsV8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `cZkF.GeKu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `cZkF.OlBV` | func | `(i32 i32 i32) -> ()` |
| 232 | `cZkF.xc7M` | func | `(i32 i32 i32) -> ()` |
| 233 | `cZkF.YSPY` | func | `(i32 i32) -> ()` |
| 234 | `cZkF.Kc9d` | func | `(i32 i32) -> ()` |
| 235 | `cZkF.nkaQ` | func | `(i32 i32) -> ()` |
| 236 | `cZkF.gN6h` | func | `(i32 i32) -> ()` |
| 237 | `cZkF.gVak` | func | `(i32 i32) -> ()` |
| 238 | `cZkF.Y5dF` | func | `(i32 i32) -> ()` |
| 239 | `cZkF.OdSH` | func | `(i32 f32 f32) -> ()` |
| 240 | `cZkF.nMpw` | func | `(i32 f32 f32) -> ()` |
| 241 | `cZkF.Ep0b` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `cZkF.oHAu` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `cZkF.Miai` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `cZkF.bbYF` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `cZkF.Kvq7` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `cZkF.wbhl` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `cZkF.sqJ7` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `cZkF.JqMw` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `cZkF.RVry` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `cZkF.rHWA` | func | `(i32) -> ()` |
| 251 | `cZkF.CT93` | func | `(i32 i32) -> ()` |
| 252 | `cZkF.uMXp` | func | `(i32 i32) -> ()` |
| 253 | `cZkF.bWdd` | func | `(i32 i32) -> ()` |
| 254 | `cZkF.UTap` | func | `(i32 i32) -> ()` |
| 255 | `cZkF.dpxB` | func | `(i32 i32) -> ()` |
| 256 | `cZkF.eagn` | func | `(i32 i32) -> ()` |
| 257 | `cZkF.iynK` | func | `(i32 i32) -> ()` |
| 258 | `cZkF.YloD` | func | `(i32 i32) -> ()` |
| 259 | `cZkF.sla1` | func | `(i32) -> (i32)` |
| 260 | `cZkF.A1gM` | func | `(i32) -> (i32)` |
| 261 | `cZkF.t7Um` | func | `(i32) -> (i32)` |
| 262 | `cZkF.zM5z` | func | `(i32) -> (i32)` |
| 263 | `cZkF.oSj7` | func | `(i32) -> ()` |
| 264 | `cZkF.TyPy` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `cZkF.BrFX` | func | `(i32) -> ()` |
| 266 | `cZkF.EjYw` | func | `(i32) -> (i32)` |
| 267 | `cZkF.AoQq` | func | `(i32) -> (i32)` |
| 268 | `cZkF.RMeb` | func | `(i32) -> (i32)` |
| 269 | `cZkF.nUj3` | func | `(i32) -> (i32)` |
| 270 | `cZkF.QZAU` | func | `(i32 i32) -> ()` |
| 271 | `cZkF.zFg9` | func | `(i32) -> ()` |
| 272 | `cZkF.p9Sj` | func | `(i32 i32) -> ()` |
| 273 | `cZkF.FpVA` | func | `(i32) -> (i32)` |
| 274 | `cZkF.AcaD` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `cZkF.jhGN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `cZkF.J9X6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `cZkF.slRb` | func | `(i32 i32) -> (i32)` |
| 278 | `cZkF.Dgus` | func | `(i32 i32) -> (i32)` |
| 279 | `cZkF.EVKH` | func | `(i32 i32) -> (i32)` |
| 280 | `cZkF.mxXI` | func | `(i32 i32) -> (i32)` |
| 281 | `cZkF.gc7R` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `hU7z` | func | 1823 | `(i32 i32 f64 f64 f64) -> ()` |
| `maZN` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `yxOE` | func | 2429 | `(i32) -> (i32)` |
| `Z8yL` | func | 2009 | `(i32 i32) -> ()` |
| `E0ad` | func | 2918 | `(i32 i32) -> (i32)` |
| `OP0t` | func | 2445 | `(i32) -> (i32)` |
| `fRkM` | func | 2465 | `(i32) -> (i32)` |
| `NbF7` | func | 2724 | `(i32) -> (i32)` |
| `pP04` | func | 1455 | `(i32) -> (i32)` |
| `Rzs4` | func | 2299 | `(i32 i32) -> (i32)` |
| `OFXn` | func | 2947 | `(i32 i32 i32) -> (i32 i32)` |
| `g02s` | func | 1553 | `(i32 i32) -> (i32)` |
| `zaZa` | func | 1949 | `(i32 i32) -> ()` |
| `pZ1M` | func | 2413 | `(i32) -> (i32)` |
| `OjA4` | func | 869 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `ntbs` | func | 1486 | `(i32 i32) -> (i32)` |
| `cZP3` | func | 2115 | `(i32 i32) -> (i32)` |
| `xGvj` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `w8Q9` | func | 2428 | `(i32) -> (i32)` |
| `KsbM` | func | 2955 | `(i32 i32) -> (i32 i32)` |
| `Iujs` | func | 1445 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `fB86` | func | 2954 | `(i32 i32) -> (i32 i32)` |
| `lpm3` | func | 1199 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `pHGe` | func | 1565 | `(i32 i32) -> ()` |
| `memory` | memory | 0 | `` |
| `l835` | func | 870 | `(i32 i32) -> (i32)` |
| `V8pa` | func | 2446 | `(i32) -> (i32)` |
| `DCXP` | func | 2899 | `() -> ()` |
| `lmyk` | func | 2543 | `(i32 i32) -> ()` |
| `vrIQ` | func | 660 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `PbU9` | func | 2434 | `(i32) -> (i32)` |
| `kgZX` | func | 1264 | `(i32) -> (i32)` |
| `RG6B` | func | 1915 | `(i32 i32 i32 i32) -> ()` |
| `iSQ3` | func | 1272 | `(i32 i32) -> (i32)` |
| `OWaZ` | func | 1462 | `(i32 i32) -> (i32)` |
| `Z1Uk` | func | 2977 | `() -> (i32 i32)` |
| `HmQY` | func | 1707 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `bbhq` | func | 2956 | `(i32 i32) -> (i32 i32)` |
| `ldKV` | func | 1454 | `(i32 i32 i32 i32) -> (i32)` |
| `du3P` | func | 1091 | `(i32 i32) -> ()` |
| `ruNu` | func | 2966 | `(i32) -> (i32 i32)` |
| `ZuS0` | func | 3142 | `() -> (i32)` |
| `vaPF` | func | 2929 | `(i32 i32) -> ()` |
| `qFGR` | func | 2431 | `(i32) -> (i32)` |
| `iH0w` | func | 1490 | `(i32 f64) -> (f64)` |
| `v77V` | func | 2426 | `(i32) -> (f64)` |
| `vnPw` | func | 2436 | `(i32) -> (i32)` |
| `wAvc` | func | 3113 | `() -> (f64)` |
| `wgES` | func | 1783 | `() -> (i32)` |
| `ry6v` | func | 1725 | `(i32 i32) -> (i32)` |
| `TOoC` | func | 2511 | `() -> (i32)` |
| `pdfU` | func | 2962 | `(i32) -> (i32 i32)` |
| `qmuU` | func | 1714 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `TWyV` | func | 1408 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `qbyB` | func | 1831 | `(i32 i32) -> ()` |
| `jMuN` | func | 1857 | `(i32) -> ()` |
| `ppLv` | func | 2302 | `(i32 i32) -> (i32)` |
| `aFx6` | func | 1856 | `(i32) -> ()` |
| `lp2R` | func | 686 | `(i32 i32) -> (i32)` |
| `kL7y` | func | 1415 | `(i32) -> (i32)` |
| `fEqA` | func | 1692 | `(i32) -> (i32)` |
| `aPrw` | func | 2167 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `LYzd` | func | 2464 | `(i32) -> (i32)` |
| `xyI9` | func | 1975 | `(i32 f64) -> (i32)` |
| `Bceq` | func | 1245 | `(i32 i32 i32) -> ()` |
| `KbiV` | func | 1450 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `a11E` | func | 1298 | `(i32) -> ()` |
| `BJaB` | func | 793 | `(i32 i32) -> (i32)` |
| `Z10R` | func | 1151 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `wdKP` | func | 1848 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `yXhC` | func | 1564 | `(i32 i32) -> ()` |
| `cM8s` | func | 3065 | `(i32 i32 i32) -> ()` |
| `IfdP` | func | 2963 | `(i32) -> (i32 i32)` |
| `QSqm` | func | 3000 | `(i32 i32 i32 i32) -> ()` |
| `fLJT` | func | 1192 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `oy7g` | func | 2964 | `(i32) -> (i32 i32)` |
| `URyH` | func | 2781 | `(i32) -> (i32)` |
| `DavC` | func | 1803 | `(i32 i32 i32 i32) -> (i32)` |
| `OgEL` | func | 2330 | `(i32 i32) -> (i32)` |
| `C8Y2` | func | 2221 | `(i32 f64) -> (i32)` |
| `sTmr` | func | 2953 | `(i32 i32) -> (i32 i32)` |
| `AKXU` | func | 2301 | `(i32 i32) -> (i32)` |
| `liv3` | func | 1671 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `TLKe` | func | 2976 | `() -> (i32 i32)` |
| `ZNP5` | func | 1898 | `(i32) -> (i32)` |
| `MYcJ` | func | 1222 | `(i32 i32) -> (i32)` |
| `jjnf` | func | 2544 | `() -> (i32)` |
| `PBdD` | func | 2456 | `(i32 i32) -> (i32)` |
| `ZzJl` | func | 2435 | `(i32) -> (i32)` |
| `Erlu` | global | 2 | `` |
| `l6B3` | func | 2385 | `(i32) -> (i32)` |
| `fKhB` | func | 2952 | `(i32 i32) -> (i32 i32)` |
| `ZEZB` | func | 1606 | `(i32 i32 i32 i32) -> (i32)` |
| `a97K` | func | 1841 | `(i32 i32) -> (i32)` |
| `XPq7` | global | 1 | `` |
| `KT3p` | func | 2957 | `(i32 i32) -> (i32 i32)` |
| `oouH` | func | 598 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `wAcm` | func | 2384 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `T2R1` | func | 2455 | `(i32) -> (i32)` |
| `h7xp` | func | 2500 | `(i32 i32) -> ()` |
| `P6jz` | func | 2368 | `(i32) -> (i32)` |
| `pko0` | func | 2948 | `(i32 i32 i32) -> (i32 i32)` |
| `gNHr` | func | 1364 | `(i32 f64 f64) -> (i32)` |
| `cH5J` | func | 2412 | `(i32 i32) -> ()` |
| `KOLx` | func | 1412 | `() -> (i32)` |
| `TqM8` | func | 1569 | `(i32 f64 f64 f64) -> (i32)` |
| `IdWS` | func | 2923 | `(i32 i32 i32 i32) -> (i32)` |
| `hDhG` | func | 3009 | `(i32 i32 i32) -> ()` |
| `F3V6` | func | 3117 | `(i32) -> (i32)` |
| `Yk9E` | func | 2978 | `() -> (i32 i32)` |
| `QOc3` | func | 3038 | `() -> (i32)` |
| `W4bz` | func | 2433 | `(i32) -> ()` |
| `iiVN` | func | 2965 | `(i32) -> (i32 i32)` |
| `jkrW` | func | 648 | `(i32 i32) -> (i32)` |
| `zY6x` | func | 2958 | `(i32 i32) -> (i32 i32)` |
| `gs7P` | func | 1475 | `(i32 i32) -> (i32)` |
| `W1kT` | func | 2717 | `(i32) -> (i32)` |
| `GMGW` | func | 3141 | `() -> (i32)` |
| `cDvQ` | func | 1090 | `(i32 i32) -> (i32)` |
| `qfqt` | func | 2443 | `(i32 i32) -> ()` |
| `FWRK` | func | 1385 | `(i32 i32) -> (i32)` |
| `kXo7` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `hBqW` | func | 1487 | `(i32 i32) -> (i32)` |
| `J8Su` | func | 3071 | `(i32) -> ()` |
| `s3EK` | func | 719 | `(i32) -> (i32)` |
| `YDyU` | func | 2448 | `(i32) -> (i32)` |
| `UCBG` | func | 1363 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `W5Lb` | func | 2427 | `(i32) -> (i32)` |
| `wDWi` | func | 725 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `oLjz` | func | 1193 | `(i32 i32 i32 i32) -> (i32)` |
| `CLMz` | func | 2430 | `(i32) -> (i32)` |
| `bTac` | func | 2758 | `(i32) -> ()` |
| `SrFF` | func | 2747 | `(i32) -> (i32)` |
| `xofb` | func | 1240 | `(i32 i32 i32) -> (i32)` |
| `uiVu` | func | 889 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `Za0p` | func | 3072 | `() -> ()` |
| `GAFX` | func | 2300 | `(i32 i32) -> (i32)` |
| `qpb6` | func | 3118 | `(i32) -> ()` |
| `Ryy5` | func | 2447 | `(i32 i32) -> ()` |
| `G9Uf` | func | 2146 | `(i32 i32) -> (i32)` |
| `SL9y` | func | 2738 | `(i32) -> (i32)` |
| `iB1T` | func | 1502 | `(i32 i32 i32) -> (i32)` |
| `Buye` | func | 3010 | `(i32 i32) -> ()` |
| `AMag` | func | 1314 | `(i32 i32 i32) -> (i32)` |
| `OQrH` | func | 2457 | `(i32 i32) -> (i32)` |
| `iAa1` | func | 2432 | `(i32) -> (i32)` |
| `NeNc` | func | 1788 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `uceT` | func | 548 | `(i32 i32 i32) -> (i32)` |
| `GvF6` | func | 1913 | `(i32) -> (i32)` |
| `WVj8` | func | 2343 | `(i32 i32 i32 i32) -> (i32)` |
| `xW00` | func | 2251 | `(i32 i32) -> ()` |
| `ihd8` | func | 1433 | `(i32 i32 i32 i32) -> ()` |
| `qWHx` | func | 899 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HwGj` | func | 2466 | `(i32) -> (i32)` |
| `wNOL` | func | 2220 | `(i32 i32) -> ()` |
| `l9ps` | func | 1993 | `(i32 f64 f64 f64) -> (i32)` |
| `uPmy` | func | 2033 | `(i32 i32) -> (i32)` |

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
