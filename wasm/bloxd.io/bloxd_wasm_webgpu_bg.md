# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `yma3ej.f92ebd70` · analyzed 2026-11-25T04:31:11+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.16890cbea63ac1040fd9.wasm
> 5,136,608 bytes (4.9 MB) · sha256 `35eb5bbeecb540e7…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `2453a38173cd558c.12282` → `e0186f53df5959d3.12282` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,949 / 393 |
| Exports / imports | 160 / 394 |
| Code bytes (function bodies) | 4,050,219 (3.9 MB) |
| Total local variables | 30,809 |
| Instructions (scanable bodies) | 1,894,907 |
| Data segments / bytes | 3,546 / 1,040,009 |
| Element segments / entries | 1 / 837 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `e0186f53df5959d3.12282` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,518 | 177 |
| 2 | import | 4,734 | 394 |
| 3 | function | 3,000 | 2949 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,681 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,055,596 | 2949 |
| 11 | data | 1,068,694 | 3546 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `qpEv.tpwb` | memory | `[128..14648]` |
| 0 | `qpEv.RcxI` | func | `(i32) -> (i32)` |
| 1 | `qpEv.b9OY` | func | `(i32) -> (f64)` |
| 2 | `qpEv.oPbP` | func | `() -> (i32)` |
| 3 | `qpEv.iAmg` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `qpEv.mJex` | func | `(i32) -> ()` |
| 5 | `qpEv.KN2m` | func | `(i32 i32) -> (i32)` |
| 6 | `qpEv.JwfR` | func | `(i32) -> (i32)` |
| 7 | `qpEv.a5Qe` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `qpEv.IK1N` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `qpEv.KPmv` | func | `(i32) -> (i32)` |
| 10 | `qpEv.W57o` | func | `(i32 i32) -> ()` |
| 11 | `qpEv.UbK6` | func | `(i32 i32) -> ()` |
| 12 | `qpEv.EyR5` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `qpEv.WqZp` | func | `(i32 i32) -> (i32)` |
| 14 | `qpEv.WuLB` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `qpEv.Ilie` | func | `(i32) -> (i32)` |
| 16 | `qpEv.F7lS` | func | `(i32 i32) -> (i32)` |
| 17 | `qpEv.yZFf` | func | `(i32 i32) -> (i32)` |
| 18 | `qpEv.n0q2` | func | `(i32 i32) -> ()` |
| 19 | `qpEv.FPoK` | func | `(i32) -> (i32)` |
| 20 | `qpEv.GOcr` | func | `(i32) -> (i32)` |
| 21 | `qpEv.Yaw6` | func | `(i32 i32 i32) -> ()` |
| 22 | `qpEv.hwIS` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `qpEv.n4er` | func | `(i32) -> (i32)` |
| 24 | `qpEv.AoN0` | func | `(i32) -> (i32)` |
| 25 | `qpEv.wdKG` | func | `(i32 i32) -> ()` |
| 26 | `qpEv.oDb6` | func | `(i32 i32) -> (i32)` |
| 27 | `qpEv.FAqT` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `qpEv.RKWn` | func | `(i32) -> (i32)` |
| 29 | `qpEv.FAGr` | func | `(i32) -> (i32)` |
| 30 | `qpEv.AZ3G` | func | `(i32) -> (i32)` |
| 31 | `qpEv.cZBx` | func | `(i32) -> (i32)` |
| 32 | `qpEv.HIzo` | func | `(i32) -> (i32)` |
| 33 | `qpEv.x0js` | func | `(i32 i32 i32) -> ()` |
| 34 | `qpEv.bcYl` | func | `(i32 i32) -> (i32)` |
| 35 | `qpEv.FGot` | func | `(i32) -> (i32)` |
| 36 | `qpEv.MD7R` | func | `(i32) -> ()` |
| 37 | `qpEv.WkpG` | func | `(i32) -> (i32)` |
| 38 | `qpEv.vjkK` | func | `(i32) -> (i32)` |
| 39 | `qpEv.XCX6` | func | `(i32) -> ()` |
| 40 | `qpEv.uBRK` | func | `(i32 i32) -> (i32)` |
| 41 | `qpEv.XhUC` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `qpEv.i15H` | func | `(i32) -> ()` |
| 43 | `qpEv.Czg1` | func | `(i32 i32) -> ()` |
| 44 | `qpEv.eR6C` | func | `() -> (i32)` |
| 45 | `qpEv.Duop` | func | `(i32 i32) -> (i32)` |
| 46 | `qpEv.ikOb` | func | `(i32 i32) -> (i32)` |
| 47 | `qpEv.Zeyf` | func | `(i32) -> (i32)` |
| 48 | `qpEv.KiFz` | func | `(i32) -> (i32)` |
| 49 | `qpEv.DDtp` | func | `(i32) -> (i32)` |
| 50 | `qpEv.mc7C` | func | `(i32 i32) -> ()` |
| 51 | `qpEv.kxUO` | func | `(i32) -> (i32)` |
| 52 | `qpEv.t49V` | func | `(i32) -> ()` |
| 53 | `qpEv.JG3Q` | func | `(i32 i32) -> (i32)` |
| 54 | `qpEv.Trlo` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `qpEv.INLg` | func | `(i32) -> (i32)` |
| 56 | `qpEv.gd5D` | func | `(i32 i32 i32) -> ()` |
| 57 | `qpEv.StF6` | func | `(i32 i32) -> ()` |
| 58 | `qpEv.r1m5` | func | `(i32) -> (i32)` |
| 59 | `qpEv.zgVO` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `qpEv.wncn` | func | `(i32) -> ()` |
| 61 | `qpEv.z6j5` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `qpEv.CcBt` | func | `(i32) -> ()` |
| 63 | `qpEv.GoQQ` | func | `(i32 i32 i32) -> ()` |
| 64 | `qpEv.BWQP` | func | `(i32 i32) -> ()` |
| 65 | `qpEv.ir6r` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `qpEv.O7GM` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `qpEv.sdSO` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `qpEv.t44a` | func | `(i32 i32 f64) -> ()` |
| 69 | `qpEv.S5ub` | func | `(i32) -> (i32)` |
| 70 | `qpEv.LCE3` | func | `(i32 i32) -> ()` |
| 71 | `qpEv.tEIC` | func | `(i32 i32 i32) -> ()` |
| 72 | `qpEv.ygGx` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `qpEv.SI2b` | func | `(i32 i32 i32) -> ()` |
| 74 | `qpEv.Cnpo` | func | `(i32) -> ()` |
| 75 | `qpEv.rBwX` | func | `(i32 i32) -> ()` |
| 76 | `qpEv.UkjD` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `qpEv.gVsG` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `qpEv.sFdh` | func | `(i32 i32 i32) -> ()` |
| 79 | `qpEv.BoZs` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `qpEv.ix6u` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `qpEv.d9xr` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `qpEv.ZCkd` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `qpEv.HCP3` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `qpEv.RFyX` | func | `(i32 i32 i32) -> ()` |
| 85 | `qpEv.KyR9` | func | `(i32 i32) -> (i32)` |
| 86 | `qpEv.WGMu` | func | `(i32) -> (i32)` |
| 87 | `qpEv.scJB` | func | `(i32) -> (i32)` |
| 88 | `qpEv.gQMm` | func | `(i32) -> (i32)` |
| 89 | `qpEv.JcBJ` | func | `(i32 i32) -> (i32)` |
| 90 | `qpEv.Aird` | func | `(i32) -> ()` |
| 91 | `qpEv.geeW` | func | `(i32) -> (i32)` |
| 92 | `qpEv.EQaF` | func | `(i32 i32) -> (i32)` |
| 93 | `qpEv.WjOz` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `qpEv.WXoT` | func | `(i32 i32 i32) -> ()` |
| 95 | `qpEv.NsoQ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `qpEv.UXXn` | func | `() -> (f64)` |
| 97 | `qpEv.NBtW` | func | `() -> (f64)` |
| 98 | `qpEv.Sj37` | func | `(i32 i32) -> ()` |
| 99 | `qpEv.AjjY` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `qpEv.IdJx` | func | `(i32) -> (i32)` |
| 101 | `qpEv.v9Hk` | func | `(i32) -> (i32)` |
| 102 | `qpEv.VWHQ` | func | `(i32) -> (i32)` |
| 103 | `qpEv.w7w7` | func | `() -> (i32)` |
| 104 | `qpEv.gCRi` | func | `() -> (i32)` |
| 105 | `qpEv.jS7b` | func | `() -> (i32)` |
| 106 | `qpEv.uOaE` | func | `() -> (i32)` |
| 107 | `qpEv.OXyr` | func | `(i32 i32) -> (i32)` |
| 108 | `qpEv.urrk` | func | `(i32) -> ()` |
| 109 | `qpEv.nj6U` | func | `(i32 i32) -> (i32)` |
| 110 | `qpEv.ipFs` | func | `(i32) -> (i32)` |
| 111 | `qpEv.TmHI` | func | `() -> (f64)` |
| 112 | `qpEv.I1Lu` | func | `(i32) -> (i32)` |
| 113 | `qpEv.lRTg` | func | `(i32 i32) -> ()` |
| 114 | `qpEv.jSs1` | func | `(i32 i32) -> ()` |
| 115 | `qpEv.JwoL` | func | `(i32 i32) -> ()` |
| 116 | `qpEv.KTwY` | func | `(i32 f32) -> ()` |
| 117 | `qpEv.H77J` | func | `(i32 f32) -> ()` |
| 118 | `qpEv.H1hr` | func | `(i32 i32) -> ()` |
| 119 | `qpEv.Fh3Z` | func | `(i32 i32) -> ()` |
| 120 | `qpEv.bYUS` | func | `(i32 i32) -> ()` |
| 121 | `qpEv.ZqDN` | func | `(i32 i32) -> ()` |
| 122 | `qpEv.LAlA` | func | `(i32 i32 i32) -> ()` |
| 123 | `qpEv.Gk2w` | func | `(i32 i32) -> (i32)` |
| 124 | `qpEv.yhRO` | func | `(i32 i32) -> ()` |
| 125 | `qpEv.l3az` | func | `(i32 i32) -> ()` |
| 126 | `qpEv.q9UI` | func | `(i32 i32) -> ()` |
| 127 | `qpEv.QjUr` | func | `(i32 i32) -> ()` |
| 128 | `qpEv.MNdP` | func | `(i32 f64) -> ()` |
| 129 | `qpEv.hgRR` | func | `(i32 f64) -> ()` |
| 130 | `qpEv.QNYn` | func | `(i32 i32) -> ()` |
| 131 | `qpEv.bR06` | func | `(i32 i32 i32) -> ()` |
| 132 | `qpEv.CIIp` | func | `(i32 i32) -> ()` |
| 133 | `qpEv.GumY` | func | `(i32 i32) -> (i32)` |
| 134 | `qpEv.UxwA` | func | `(i32 i32 i32) -> ()` |
| 135 | `qpEv.Pfic` | func | `(i32 i32 i32) -> ()` |
| 136 | `qpEv.xxRy` | func | `(i32 i32) -> (i32)` |
| 137 | `qpEv.XHNM` | func | `(i32 i32) -> (i32)` |
| 138 | `qpEv.qJig` | func | `(i32 i32 i32) -> ()` |
| 139 | `qpEv.mXJz` | func | `(i32 i32 i32) -> ()` |
| 140 | `qpEv.bTsn` | func | `(i32 i32) -> (i32)` |
| 141 | `qpEv.i1Ia` | func | `(i32 i32) -> ()` |
| 142 | `qpEv.iI3y` | func | `(i32 i32) -> ()` |
| 143 | `qpEv.PXTH` | func | `(i32 i32) -> ()` |
| 144 | `qpEv.EqMZ` | func | `(i32 i32) -> ()` |
| 145 | `qpEv.hXR5` | func | `(i32 i32) -> ()` |
| 146 | `qpEv.uNRH` | func | `(i32 i32) -> ()` |
| 147 | `qpEv.PQAc` | func | `(i32 i32) -> ()` |
| 148 | `qpEv.DVc1` | func | `(i32 f64) -> ()` |
| 149 | `qpEv.QVrz` | func | `(i32 i32) -> ()` |
| 150 | `qpEv.Ialz` | func | `(i32 i32) -> ()` |
| 151 | `qpEv.olfo` | func | `(i32 i32) -> ()` |
| 152 | `qpEv.vHNA` | func | `(i32 i32) -> ()` |
| 153 | `qpEv.xdOc` | func | `(i32 i32) -> ()` |
| 154 | `qpEv.KS5m` | func | `(i32 i32) -> ()` |
| 155 | `qpEv.mdm7` | func | `(i32 i32) -> ()` |
| 156 | `qpEv.FYHL` | func | `(i32 i32) -> ()` |
| 157 | `qpEv.wMFP` | func | `(i32 i32) -> ()` |
| 158 | `qpEv.koxn` | func | `(i32 i32 i32) -> ()` |
| 159 | `qpEv.cXaL` | func | `(i32 i32 i32) -> ()` |
| 160 | `qpEv.FQQR` | func | `(i32 i32) -> (i32)` |
| 161 | `qpEv.ENoP` | func | `(i32 i32) -> (i32)` |
| 162 | `qpEv.E5KA` | func | `(i32 i32) -> ()` |
| 163 | `qpEv.Z5GB` | func | `(i32 i32) -> ()` |
| 164 | `qpEv.bzGG` | func | `(i32 f64) -> ()` |
| 165 | `qpEv.LEPm` | func | `(i32 i32) -> ()` |
| 166 | `qpEv.qx0t` | func | `(i32 i32) -> ()` |
| 167 | `qpEv.EtXC` | func | `(i32 i32) -> ()` |
| 168 | `qpEv.dWyG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `qpEv.mA3b` | func | `(i32 f64) -> ()` |
| 170 | `qpEv.trkb` | func | `(i32 f64) -> ()` |
| 171 | `qpEv.jlPQ` | func | `(i32 f64) -> ()` |
| 172 | `qpEv.IXnM` | func | `(i32 f64) -> ()` |
| 173 | `qpEv.OQkA` | func | `(i32 i32) -> ()` |
| 174 | `qpEv.Y9eh` | func | `(i32 i32) -> ()` |
| 175 | `qpEv.AsTp` | func | `(i32 i32) -> ()` |
| 176 | `qpEv.uMrM` | func | `(i32 i32) -> ()` |
| 177 | `qpEv.KLw2` | func | `(i32 i32) -> ()` |
| 178 | `qpEv.OHYP` | func | `(i32 i32 i32) -> ()` |
| 179 | `qpEv.CvfP` | func | `(i32 i32) -> ()` |
| 180 | `qpEv.eEI9` | func | `(i32 f32) -> ()` |
| 181 | `qpEv.cyjJ` | func | `(i32 i32) -> ()` |
| 182 | `qpEv.z01h` | func | `(i32 i32) -> ()` |
| 183 | `qpEv.Y6LZ` | func | `(i32 i32) -> ()` |
| 184 | `qpEv.WeNK` | func | `(i32 i32) -> ()` |
| 185 | `qpEv.MaIm` | func | `(i32 i32) -> ()` |
| 186 | `qpEv.pfGp` | func | `(i32 i32) -> ()` |
| 187 | `qpEv.Sw0T` | func | `(i32 i32) -> ()` |
| 188 | `qpEv.EPBT` | func | `(i32 i32) -> ()` |
| 189 | `qpEv.DEk0` | func | `(i32 i32) -> ()` |
| 190 | `qpEv.KcQG` | func | `(i32 i32) -> ()` |
| 191 | `qpEv.u6xw` | func | `(i32 i32) -> ()` |
| 192 | `qpEv.VcFo` | func | `(i32 i32) -> ()` |
| 193 | `qpEv.WlQX` | func | `(i32 i32) -> (i32)` |
| 194 | `qpEv.ZX4t` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `qpEv.DSdt` | func | `(i32 i32) -> ()` |
| 196 | `qpEv.RFcl` | func | `(i32 i32 i32) -> ()` |
| 197 | `qpEv.f84e` | func | `(i32 i32) -> (i32)` |
| 198 | `qpEv.IJJx` | func | `(i32) -> (i32)` |
| 199 | `qpEv.VMJF` | func | `(i32 i32) -> ()` |
| 200 | `qpEv.jyZf` | func | `(i32 i32) -> ()` |
| 201 | `qpEv.i1wA` | func | `(i32 i32) -> ()` |
| 202 | `qpEv.O7W0` | func | `(i32 i32) -> ()` |
| 203 | `qpEv.O7AX` | func | `(i32 i32) -> ()` |
| 204 | `qpEv.TIpf` | func | `(i32 i32) -> ()` |
| 205 | `qpEv.oAiq` | func | `(i32 i32) -> ()` |
| 206 | `qpEv.t2EQ` | func | `(i32 i32) -> ()` |
| 207 | `qpEv.hKAG` | func | `(i32) -> (i32)` |
| 208 | `qpEv.bgGq` | func | `(i32 i32 i32) -> ()` |
| 209 | `qpEv.kgqF` | func | `(i32 i32) -> ()` |
| 210 | `qpEv.gD3G` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `qpEv.Eh4E` | func | `(i32 i32) -> ()` |
| 212 | `qpEv.ubm9` | func | `(i32) -> ()` |
| 213 | `qpEv.TsbG` | func | `(i32 i32) -> ()` |
| 214 | `qpEv.ZTk2` | func | `(i32) -> (i32)` |
| 215 | `qpEv.wgDm` | func | `(i32 i32 i32) -> ()` |
| 216 | `qpEv.nmHa` | func | `(i32 i32) -> ()` |
| 217 | `qpEv.h1cK` | func | `(i32 i32) -> ()` |
| 218 | `qpEv.TRir` | func | `(i32 i32) -> ()` |
| 219 | `qpEv.K1hg` | func | `(i32 i32) -> ()` |
| 220 | `qpEv.gRn5` | func | `(i32 i32) -> (i32)` |
| 221 | `qpEv.FhLL` | func | `(i32 i32) -> ()` |
| 222 | `qpEv.on9k` | func | `(i32 i32) -> ()` |
| 223 | `qpEv.N5uV` | func | `(i32 i32) -> ()` |
| 224 | `qpEv.TFWh` | func | `(i32 i32) -> ()` |
| 225 | `qpEv.WG9c` | func | `(i32 i32) -> ()` |
| 226 | `qpEv.V9ZS` | func | `(i32 i32) -> ()` |
| 227 | `qpEv.zL0C` | func | `(i32 i32) -> ()` |
| 228 | `qpEv.kt7x` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `qpEv.BVJq` | func | `(i32) -> (i32)` |
| 230 | `qpEv.cP5P` | func | `(i32) -> ()` |
| 231 | `qpEv.Rp5R` | func | `(i32 f64) -> ()` |
| 232 | `qpEv.UJgv` | func | `(i32 i32) -> ()` |
| 233 | `qpEv.wjTa` | func | `(i32 i32) -> ()` |
| 234 | `qpEv.YuuS` | func | `(i32 i32 i32) -> ()` |
| 235 | `qpEv.JqZK` | func | `(i32 i32) -> (i32)` |
| 236 | `qpEv.TWdq` | func | `(i32 i32) -> ()` |
| 237 | `qpEv.c3JO` | func | `(i32 i32) -> ()` |
| 238 | `qpEv.G0i1` | func | `(i32 i32) -> ()` |
| 239 | `qpEv.lXcN` | func | `(i32 i32 i32) -> ()` |
| 240 | `qpEv.K2we` | func | `(i32 i32) -> ()` |
| 241 | `qpEv.z5Ui` | func | `(i32 i32) -> ()` |
| 242 | `qpEv.xh5i` | func | `(i32 i32) -> ()` |
| 243 | `qpEv.KvHO` | func | `(i32 i32 i32) -> ()` |
| 244 | `qpEv.Yor1` | func | `(i32 i32) -> ()` |
| 245 | `qpEv.o6OY` | func | `(i32 i32) -> ()` |
| 246 | `qpEv.LbkX` | func | `(i32 i32 i32) -> ()` |
| 247 | `qpEv.p9kB` | func | `(i32 i32) -> (i32)` |
| 248 | `qpEv.bycH` | func | `(i32 i32) -> ()` |
| 249 | `qpEv.zrte` | func | `(i32 i32 i32) -> ()` |
| 250 | `qpEv.LoYT` | func | `(i32 i32) -> ()` |
| 251 | `qpEv.wWTs` | func | `(i32 f64) -> ()` |
| 252 | `qpEv.pH3R` | func | `(i32 i32) -> ()` |
| 253 | `qpEv.PXiM` | func | `(i32 f64) -> ()` |
| 254 | `qpEv.SDtY` | func | `(i32 i32 i32) -> ()` |
| 255 | `qpEv.YEq8` | func | `(i32 i32) -> ()` |
| 256 | `qpEv.UuzE` | func | `(i32 i32 i32) -> ()` |
| 257 | `qpEv.Owot` | func | `(i32 i32) -> ()` |
| 258 | `qpEv.cD50` | func | `(i32 i32) -> ()` |
| 259 | `qpEv.Wik3` | func | `(i32 i32) -> ()` |
| 260 | `qpEv.HNQ7` | func | `(i32 i32 i32) -> ()` |
| 261 | `qpEv.EqeL` | func | `(i32 i32) -> ()` |
| 262 | `qpEv.CVLL` | func | `(i32 i32) -> ()` |
| 263 | `qpEv.DVBq` | func | `(i32 i32) -> ()` |
| 264 | `qpEv.qIDT` | func | `(i32 i32) -> ()` |
| 265 | `qpEv.gGi4` | func | `(i32 f32) -> ()` |
| 266 | `qpEv.tGyJ` | func | `(i32 f32) -> ()` |
| 267 | `qpEv.ofUl` | func | `(i32 i32) -> ()` |
| 268 | `qpEv.AeyA` | func | `(i32 i32) -> ()` |
| 269 | `qpEv.hWLk` | func | `(i32 i32) -> ()` |
| 270 | `qpEv.dZOZ` | func | `(i32 i32) -> ()` |
| 271 | `qpEv.Gphs` | func | `(i32 i32) -> ()` |
| 272 | `qpEv.mgkm` | func | `(i32 i32) -> ()` |
| 273 | `qpEv.DlFF` | func | `(i32 i32) -> ()` |
| 274 | `qpEv.GGOX` | func | `(i32 i32) -> ()` |
| 275 | `qpEv.XEls` | func | `(i32 i32) -> ()` |
| 276 | `qpEv.ZW4F` | func | `(i32 i32) -> ()` |
| 277 | `qpEv.lreK` | func | `(i32 i32) -> ()` |
| 278 | `qpEv.FRkV` | func | `(i32 i32) -> ()` |
| 279 | `qpEv.eJVy` | func | `(i32 i32) -> ()` |
| 280 | `qpEv.c9Fu` | func | `(i32 i32) -> ()` |
| 281 | `qpEv.JrPT` | func | `(i32 i32) -> ()` |
| 282 | `qpEv.lN1K` | func | `(i32 i32) -> ()` |
| 283 | `qpEv.EwoB` | func | `(i32 i32) -> ()` |
| 284 | `qpEv.gUFK` | func | `(i32 i32) -> ()` |
| 285 | `qpEv.Dvm3` | func | `(i32 i32 i32) -> ()` |
| 286 | `qpEv.BWuo` | func | `(i32 i32 i32) -> ()` |
| 287 | `qpEv.bVuM` | func | `(i32 i32) -> ()` |
| 288 | `qpEv.q7DG` | func | `(i32 i32) -> ()` |
| 289 | `qpEv.fHQm` | func | `(i32 i32) -> ()` |
| 290 | `qpEv.enA5` | func | `(i32 i32) -> ()` |
| 291 | `qpEv.uvrc` | func | `(i32 i32) -> ()` |
| 292 | `qpEv.qm8U` | func | `(i32 i32) -> ()` |
| 293 | `qpEv.rFd3` | func | `(i32 i32) -> ()` |
| 294 | `qpEv.kgNG` | func | `(i32 i32) -> ()` |
| 295 | `qpEv.KLBt` | func | `(i32 i32) -> ()` |
| 296 | `qpEv.sxg3` | func | `(i32 i32) -> ()` |
| 297 | `qpEv.taCq` | func | `(i32 i32) -> ()` |
| 298 | `qpEv.FoQE` | func | `(i32 i32) -> (i32)` |
| 299 | `qpEv.vSq6` | func | `(i32 i32) -> ()` |
| 300 | `qpEv.tczL` | func | `(i32 i32 i32) -> ()` |
| 301 | `qpEv.YF3f` | func | `(i32 i32) -> ()` |
| 302 | `qpEv.RLEE` | func | `(i32 i32) -> ()` |
| 303 | `qpEv.LoAR` | func | `(i32 i32) -> ()` |
| 304 | `qpEv.VmVg` | func | `(i32 i32 i32) -> ()` |
| 305 | `qpEv.os1w` | func | `(i32 i32) -> (i32)` |
| 306 | `qpEv.RWPk` | func | `(i32 i32 i32) -> ()` |
| 307 | `qpEv.IgOQ` | func | `(i32 i32 i32) -> ()` |
| 308 | `qpEv.lsLQ` | func | `(i32 i32) -> ()` |
| 309 | `qpEv.AfH9` | func | `(i32 i32) -> ()` |
| 310 | `qpEv.He6o` | func | `(i32 i32) -> ()` |
| 311 | `qpEv.uiei` | func | `(i32 i32) -> ()` |
| 312 | `qpEv.rzll` | func | `(i32 i32) -> (i32)` |
| 313 | `qpEv.VHo1` | func | `(i32) -> (i32)` |
| 314 | `qpEv.ARtB` | func | `(i32) -> (i32)` |
| 315 | `qpEv.XWER` | func | `(i32) -> (i32)` |
| 316 | `qpEv.ZQt2` | func | `(i32) -> (i32)` |
| 317 | `qpEv.OrS9` | func | `(i32) -> (i32)` |
| 318 | `qpEv.CftD` | func | `(i32) -> (i32)` |
| 319 | `qpEv.QiuK` | func | `(i32) -> (i32)` |
| 320 | `qpEv.p81W` | func | `(i32) -> (i32)` |
| 321 | `qpEv.CuOE` | func | `(i32) -> (i32)` |
| 322 | `qpEv.XGaY` | func | `(i32) -> (i32)` |
| 323 | `qpEv.ykch` | func | `(i32) -> (i32)` |
| 324 | `qpEv.TZO1` | func | `(i32) -> (i32)` |
| 325 | `qpEv.tIfv` | func | `(i32) -> (i32)` |
| 326 | `qpEv.kQfV` | func | `(i32) -> (i32)` |
| 327 | `qpEv.SJHx` | func | `(i32) -> (f64)` |
| 328 | `qpEv.rCSK` | func | `(i32) -> (f64)` |
| 329 | `qpEv.AQKK` | func | `(i32) -> (i32)` |
| 330 | `qpEv.Hbat` | func | `(i32) -> (f64)` |
| 331 | `qpEv.PF2J` | func | `(i32) -> (i32)` |
| 332 | `qpEv.DGWJ` | func | `(i32) -> (i32)` |
| 333 | `qpEv.GUJx` | func | `(i32) -> (i32)` |
| 334 | `qpEv.gBkL` | func | `(i32) -> (i32)` |
| 335 | `qpEv.iqjF` | func | `(i32) -> (i32)` |
| 336 | `qpEv.zMU5` | func | `(i32) -> (i32)` |
| 337 | `qpEv.vk06` | func | `(i32) -> (i32)` |
| 338 | `qpEv.aD98` | func | `(i32) -> (i32)` |
| 339 | `qpEv.Wqfp` | func | `(i32) -> (i32)` |
| 340 | `qpEv.LTKl` | func | `(i32) -> (i32)` |
| 341 | `qpEv.MLfE` | func | `(i32) -> (i32)` |
| 342 | `qpEv.tmDb` | func | `(i32) -> (i32)` |
| 343 | `qpEv.FBYJ` | func | `(i32) -> (i32)` |
| 344 | `qpEv.rLQj` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `qpEv.ZSGz` | func | `() -> (i32)` |
| 346 | `qpEv.mby6` | func | `(i32 i32) -> ()` |
| 347 | `qpEv.qeqq` | func | `(i32 i32 i32) -> ()` |
| 348 | `qpEv.v2o1` | func | `(i32 i32 i32) -> ()` |
| 349 | `qpEv.PtrK` | func | `(i32 i32) -> (i32)` |
| 350 | `qpEv.NHcz` | func | `(i32) -> (i32)` |
| 351 | `qpEv.Sy8m` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `qpEv.HudJ` | func | `(i32) -> ()` |
| 353 | `qpEv.Tye1` | func | `(i32) -> (i32)` |
| 354 | `qpEv.rXd2` | func | `(i32 i32) -> ()` |
| 355 | `qpEv.m9kL` | func | `(i32) -> (i32)` |
| 356 | `qpEv.TNkZ` | func | `(i32) -> (i32)` |
| 357 | `qpEv.twZr` | func | `(i32) -> (i32)` |
| 358 | `qpEv.nuuu` | func | `(i32) -> (i32)` |
| 359 | `qpEv.h4oN` | func | `(i32) -> (i32)` |
| 360 | `qpEv.eUyw` | func | `(i32 i32) -> ()` |
| 361 | `qpEv.LlfT` | func | `(i32 i32) -> ()` |
| 362 | `qpEv.DZpW` | func | `(i32 i32) -> ()` |
| 363 | `qpEv.Emnn` | func | `(i32 i32) -> ()` |
| 364 | `qpEv.x3Xf` | func | `(i32 i32) -> ()` |
| 365 | `qpEv.xVv2` | func | `(i32 i32) -> ()` |
| 366 | `qpEv.GCpP` | func | `(i32 i32) -> ()` |
| 367 | `qpEv.psmy` | func | `(i32 i32 i32) -> ()` |
| 368 | `qpEv.pwYM` | func | `(i32 i32) -> ()` |
| 369 | `qpEv.Db5p` | func | `(i32 i32) -> (i32)` |
| 370 | `qpEv.Ksxh` | func | `(i32) -> (i32)` |
| 371 | `qpEv.Ap5m` | func | `(i32) -> (i32)` |
| 372 | `qpEv.RKY1` | func | `(i32 i32) -> ()` |
| 373 | `qpEv.enQR` | func | `(i32) -> (i32)` |
| 374 | `qpEv.WbNP` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `qpEv.KitX` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `qpEv.aZfF` | func | `(i32 i32) -> ()` |
| 377 | `qpEv.eGUv` | func | `(i32) -> (i32)` |
| 378 | `qpEv.pER1` | func | `(i32) -> (i32)` |
| 379 | `qpEv.he7r` | func | `(i32) -> (i32)` |
| 380 | `qpEv.I9h2` | func | `(i32) -> (i32)` |
| 381 | `qpEv.f08S` | func | `(i32) -> (i32)` |
| 382 | `qpEv.wNtN` | func | `(i32) -> (i32)` |
| 383 | `qpEv.E5aP` | func | `(i32 i32) -> ()` |
| 384 | `qpEv.oMZa` | func | `(i32 i32) -> (i32)` |
| 385 | `qpEv.Zt9A` | func | `(i32 i32) -> (i32)` |
| 386 | `qpEv.sMHt` | func | `(i32 i32) -> (i32)` |
| 387 | `qpEv.xbmB` | func | `(i32 i32) -> (i32)` |
| 388 | `qpEv.ZL5D` | func | `(i32 i32) -> (i32)` |
| 389 | `qpEv.Cmm2` | func | `(i32 i32) -> (i32)` |
| 390 | `qpEv.Y1oi` | func | `(f64) -> (i32)` |
| 391 | `qpEv.ZF0A` | func | `(i32 i32) -> (i32)` |
| 392 | `qpEv.kN2D` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `TzC3` | func | 2290 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `d2Yp` | func | 1848 | `(i32 i32) -> (i32)` |
| `eVYb` | func | 2471 | `(i32 i32 i32 i32) -> (i32)` |
| `vE3q` | func | 2650 | `() -> (i32)` |
| `VIXp` | func | 2586 | `(i32) -> (i32)` |
| `woqg` | func | 3300 | `() -> (f64)` |
| `K1Tp` | func | 2560 | `(i32) -> (f64)` |
| `ku4S` | func | 1835 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `W6md` | func | 1724 | `(i32 i32 i32 i32) -> (i32)` |
| `g4c1` | func | 1520 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `SAb0` | func | 1528 | `(i32) -> (i32)` |
| `NWTO` | func | 2683 | `(i32 i32) -> ()` |
| `qilz` | func | 2135 | `(i32 i32) -> ()` |
| `i15y` | func | 3123 | `(i32 i32) -> (i32 i32)` |
| `KAoC` | func | 1525 | `() -> (i32)` |
| `B5AA` | func | 2568 | `(i32) -> (i32)` |
| `svB2` | func | 3256 | `() -> ()` |
| `ZLU7` | func | 3120 | `(i32 i32) -> (i32 i32)` |
| `d0el` | func | 1572 | `(i32) -> (i32)` |
| `yfwK` | func | 2583 | `(i32) -> (i32)` |
| `XEcj` | func | 2889 | `(i32) -> (i32)` |
| `iRTz` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `ym2D` | func | 3122 | `(i32 i32) -> (i32 i32)` |
| `ZOaF` | func | 1345 | `(i32 i32 i32) -> (i32)` |
| `JXVG` | func | 3126 | `(i32 i32) -> (i32 i32)` |
| `LWHy` | global | 2 | `` |
| `QCrW` | func | 2044 | `(i32) -> (i32)` |
| `XkcI` | func | 3176 | `(i32 i32 i32 i32) -> ()` |
| `rAnc` | func | 2566 | `(i32) -> (i32)` |
| `YxVX` | func | 2456 | `(i32 i32) -> (i32)` |
| `cF7m` | func | 2545 | `(i32) -> (i32)` |
| `WnyS` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `O2ce` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `n7Fd` | func | 2423 | `(i32 i32) -> (i32)` |
| `fm8Y` | func | 3328 | `() -> (i32)` |
| `DQRG` | func | 2872 | `(i32) -> (i32)` |
| `LFmP` | func | 3187 | `(i32 i32 i32) -> ()` |
| `GswV` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `P4gW` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `pdoG` | func | 2424 | `(i32 i32) -> (i32)` |
| `Cc3V` | func | 3185 | `(i32 i32 i32) -> (i32)` |
| `w1jS` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `SQj4` | func | 3215 | `() -> (i32)` |
| `dD4Q` | func | 2567 | `(i32) -> ()` |
| `SpEu` | func | 2594 | `(i32 i32) -> (i32)` |
| `XEv9` | func | 2369 | `(i32 i32) -> ()` |
| `CGzs` | func | 2342 | `(i32 i32) -> ()` |
| `vtLv` | func | 3125 | `(i32 i32) -> (i32 i32)` |
| `K8tj` | func | 3305 | `(i32) -> ()` |
| `amaq` | func | 2421 | `(i32 i32) -> (i32)` |
| `Mt2y` | func | 1829 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `elSe` | func | 3121 | `(i32 i32) -> (i32 i32)` |
| `kw12` | func | 1327 | `(i32 i32) -> (i32)` |
| `uzre` | func | 2601 | `(i32) -> (i32)` |
| `yOeh` | func | 1257 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `m30i` | func | 2912 | `(i32) -> ()` |
| `WrgH` | func | 1929 | `(i32 i32 i32 i32) -> (i32)` |
| `zVSI` | func | 3150 | `() -> (i32 i32)` |
| `DcRf` | func | 759 | `(i32 i32) -> (i32)` |
| `DWD8` | func | 2864 | `(i32) -> (i32)` |
| `e6yQ` | func | 3304 | `(i32) -> (i32)` |
| `Gsxf` | func | 1681 | `(i32 i32) -> ()` |
| `hl3k` | func | 1298 | `(i32 i32 i32 i32) -> (i32)` |
| `oIw8` | func | 2570 | `(i32) -> (i32)` |
| `zu4w` | func | 3135 | `(i32) -> (i32 i32)` |
| `u7WV` | func | 2231 | `(i32 i32) -> (i32)` |
| `Fvou` | func | 830 | `(i32) -> (i32)` |
| `cClm` | func | 1417 | `(i32 i32 i32) -> (i32)` |
| `suZy` | func | 1686 | `(i32 f64 f64 f64) -> (i32)` |
| `z9ZJ` | func | 1968 | `(i32 i32) -> (i32)` |
| `d7lL` | func | 2544 | `(i32 i32) -> ()` |
| `NRCk` | func | 2343 | `(i32 f64) -> (i32)` |
| `AjNy` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `SASF` | func | 1641 | `(i32 i32 i32 i32) -> (i32)` |
| `pL0e` | func | 3124 | `(i32 i32) -> (i32 i32)` |
| `juZo` | func | 2565 | `(i32) -> (i32)` |
| `EaLY` | func | 3137 | `(i32) -> (i32 i32)` |
| `uYMv` | func | 2684 | `() -> (i32)` |
| `jdwQ` | func | 1811 | `(i32) -> (i32)` |
| `DDYh` | func | 1789 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `FNjZ` | func | 1983 | `(i32) -> ()` |
| `ullO` | func | 2046 | `(i32 i32 i32 i32) -> ()` |
| `bcVU` | func | 2119 | `(i32 f64 f64 f64) -> (i32)` |
| `YxDM` | func | 1566 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ysmE` | func | 2562 | `(i32) -> (i32)` |
| `cK8I` | func | 1951 | `(i32 i32 f64 f64 f64) -> ()` |
| `tjw4` | func | 3133 | `(i32) -> (i32 i32)` |
| `hV4T` | func | 1349 | `(i32 i32 i32) -> ()` |
| `fREu` | func | 2564 | `(i32) -> (i32)` |
| `aXG7` | func | 897 | `(i32 i32) -> (i32)` |
| `onvK` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `ci4u` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `r2ie` | func | 1547 | `(i32 i32 i32 i32) -> ()` |
| `pfPF` | func | 2270 | `(i32 i32) -> (i32)` |
| `HjnU` | func | 1913 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `vPpC` | func | 1467 | `(i32 f64 f64) -> (i32)` |
| `FF49` | func | 1561 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `osd0` | func | 3254 | `(i32) -> ()` |
| `gbmd` | func | 2422 | `(i32 i32) -> (i32)` |
| `ttLk` | func | 2593 | `(i32 i32) -> (i32)` |
| `yAUk` | func | 3329 | `() -> (i32)` |
| `y1IZ` | func | 1200 | `(i32 i32) -> (i32)` |
| `Vdwd` | func | 1579 | `(i32 i32) -> (i32)` |
| `pXPc` | func | 3112 | `(i32 i32 i32) -> (i32 i32)` |
| `vdA8` | func | 1377 | `(i32 i32) -> (i32)` |
| `DlHw` | func | 3151 | `() -> (i32 i32)` |
| `fu0M` | func | 2579 | `(i32 i32) -> ()` |
| `LypI` | func | 2602 | `(i32) -> (i32)` |
| `rg9O` | func | 2592 | `(i32) -> (i32)` |
| `TEQO` | func | 969 | `(i32 i32) -> (i32)` |
| `jKEG` | func | 3083 | `(i32 i32) -> (i32)` |
| `Jf0S` | func | 3136 | `(i32) -> (i32 i32)` |
| `UhFK` | func | 1671 | `(i32 i32) -> (i32)` |
| `krZg` | func | 1620 | `(i32 i32 i32) -> (i32)` |
| `IYFe` | func | 2584 | `(i32) -> (i32)` |
| `XfhI` | func | 3245 | `(i32 i32 i32) -> ()` |
| `UXkn` | func | 2498 | `(i32) -> (i32)` |
| `D3tL` | func | 1297 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `Bc8h` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `ViK4` | func | 659 | `(i32 i32 i32) -> (i32)` |
| `f4I4` | func | 770 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `rgbW` | func | 2079 | `(i32 i32) -> ()` |
| `kHMz` | func | 1466 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `i6dD` | func | 3089 | `(i32 i32 i32 i32) -> (i32)` |
| `ZREB` | func | 2027 | `(i32) -> (i32)` |
| `FU1d` | func | 1606 | `(i32 i32) -> (i32)` |
| `MGzp` | func | 1682 | `(i32 i32) -> ()` |
| `BokM` | func | 2515 | `(i32) -> (i32)` |
| `BsBp` | func | 1593 | `(i32 i32) -> (i32)` |
| `gOYp` | func | 2900 | `(i32) -> (i32)` |
| `t7zk` | func | 3134 | `(i32) -> (i32 i32)` |
| `yRtF` | func | 2585 | `(i32 i32) -> ()` |
| `Aeuo` | func | 1607 | `(i32 i32) -> (i32)` |
| `Ax0D` | func | 3095 | `(i32 i32) -> ()` |
| `Kz5V` | func | 2935 | `(i32) -> (i32)` |
| `vaqb` | func | 2157 | `(i32 i32) -> (i32)` |
| `QLtg` | func | 2603 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `Tau7` | func | 1975 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `PhV5` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `yVVg` | func | 1571 | `(i32 i32 i32 i32) -> (i32)` |
| `oT3a` | func | 2466 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `yBR3` | func | 798 | `(i32 i32) -> (i32)` |
| `u84L` | func | 1957 | `(i32 i32) -> ()` |
| `f9fW` | func | 1609 | `(i32 f64) -> (f64)` |
| `bkw0` | func | 1371 | `(i32) -> (i32)` |
| `qLXj` | func | 2563 | `(i32) -> (i32)` |
| `vhWI` | func | 1201 | `(i32 i32) -> ()` |
| `JoJi` | func | 1305 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Rq99` | func | 3149 | `() -> (i32 i32)` |
| `DrtV` | func | 2561 | `(i32) -> (i32)` |
| `ZnWP` | global | 1 | `` |
| `lyne` | func | 1492 | `(i32 i32) -> (i32)` |
| `jPYR` | func | 3063 | `() -> ()` |
| `PbCF` | func | 2633 | `(i32 i32) -> ()` |
| `npF5` | func | 2104 | `(i32 f64) -> (i32)` |
| `lvI0` | func | 2569 | `(i32) -> (i32)` |
| `ZV7q` | func | 1906 | `() -> (i32)` |
| `cX0O` | func | 1982 | `(i32) -> ()` |
| `cQCk` | func | 1403 | `(i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 838 · max 838
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2248512, `i32` = i32.const 2249076

## Functions

- 2,949 bodies · 4,050,219 code bytes · avg 1.3 KB
- instruction scan: 2,949 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 113 |
| <= 128 bytes | 277 |
| <= 256 bytes | 385 |
| <= 512 bytes | 667 |
| <= 1024 bytes | 588 |
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
| 3 | `(i32 i32) -> ()` | 125 | 48,862 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,468 | 14,007 | local.get×4107, i32.const×1881, i32.load×884, i32.add×645, local.set×620 |
| 5 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 177 | 20,026 | 9,398 | local.get×2934, i32.const×1038, local.set×621, i32.add×458, i32.load×421 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 17 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 94 | 21,138 | 8,084 | local.get×3019, i32.const×947, i64.store×844, i32.store×655, i64.const×513 |
| 21 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 22 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 43 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,436 | 12,890 | local.get×3670, i32.const×1868, i32.add×766, local.set×697, end×577 |
| 61 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 192 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 220 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 706 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 753 | `(i32 i32) -> ()` | 138 | 42,799 | 20,185 | local.get×5260, i32.const×2330, local.tee×1194, i32.add×1063, local.set×1003 |
| 1012 | `(i32 i32) -> (i32)` | 40 | 19,870 | 7,741 | local.get×2495, i32.const×847, i64.store×582, i32.load×391, local.set×357 |
| 1575 | `(i32 i32) -> (i32)` | 180 | 54,766 | 19,855 | local.get×6591, i32.const×2625, i64.store×1913, i64.const×1077, i64.load×1056 |
| 1968 | `(i32 i32) -> ()` | 110 | 40,261 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2607 | `(i32 i32) -> ()` | 397 | 142,149 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2897 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2916 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 541,468 |
| `i32.const` | 227,780 |
| `local.tee` | 99,575 |
| `local.set` | 94,529 |
| `i32.load` | 93,426 |
| `i32.add` | 87,141 |
| `end` | 79,346 |
| `br_if` | 63,839 |
| `i32.store` | 46,968 |
| `block` | 37,322 |
| `i64.store` | 32,810 |
| `i64.const` | 32,148 |
| `if` | 30,354 |
| `call` | 30,169 |
| `i64.load` | 24,354 |
| `i32.sub` | 24,156 |
| `br` | 23,236 |
| `i32.eqz` | 19,058 |
| `select` | 16,741 |
| `i32.and` | 16,345 |
| `i32.shl` | 16,236 |
| `i32.ne` | 15,678 |
| `i32.load8_u` | 15,262 |
| `i32.eq` | 13,736 |
| `i32.store8` | 13,423 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,949/2,949 (degraded: 0)
