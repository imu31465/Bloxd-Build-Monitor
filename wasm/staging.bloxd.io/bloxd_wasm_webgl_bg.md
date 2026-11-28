# WASM module: `bloxd_wasm_webgl_bg`

> environment **staging.bloxd.io** · build `yteou.5361c997` · analyzed 2026-11-28T13:51:33+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl_bg.533888eda614340e1205.wasm
> 5,663,636 bytes (5.4 MB) · sha256 `c6b230e8190fad49…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,662,882 → 5,663,636 bytes (+754)
- data bytes 1,490,580 → 1,491,342
- name-section module id `9d45e578d5c77f7c.11124` → `cab157dc3bdbf34a.11124` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/167 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,979 / 300 |
| Exports / imports | 167 / 301 |
| Code bytes (function bodies) | 4,121,034 (3.9 MB) |
| Total local variables | 31,782 |
| Instructions (scanable bodies) | 1,932,562 |
| Data segments / bytes | 4,289 / 1,491,342 |
| Element segments / entries | 1 / 758 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `cab157dc3bdbf34a.11124` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,543 | 182 |
| 2 | import | 3,618 | 301 |
| 3 | function | 3,035 | 2979 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,337 | 167 |
| 9 | element | 1,523 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,126,505 | 2979 |
| 11 | data | 1,525,971 | 4289 |
| 0 | custom:name | 30 | — |

## Types

182 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

301 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Yq7f.IaQ7` | memory | `[128..14648]` |
| 0 | `Yq7f.F0M9` | func | `(i32) -> (f64)` |
| 1 | `Yq7f.NDNT` | func | `() -> (i32)` |
| 2 | `Yq7f.Zgh0` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `Yq7f.Q8Uw` | func | `(i32) -> ()` |
| 4 | `Yq7f.Gqoa` | func | `(i32 i32) -> (i32)` |
| 5 | `Yq7f.Cj16` | func | `(i32) -> (i32)` |
| 6 | `Yq7f.zqnS` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `Yq7f.FZ0Y` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `Yq7f.s3XE` | func | `(i32) -> (i32)` |
| 9 | `Yq7f.dYUc` | func | `(i32 i32) -> ()` |
| 10 | `Yq7f.NP4S` | func | `(i32 i32) -> ()` |
| 11 | `Yq7f.TBPq` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `Yq7f.g3dC` | func | `(i32 i32) -> (i32)` |
| 13 | `Yq7f.N0Mj` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `Yq7f.rEiM` | func | `(i32) -> (i32)` |
| 15 | `Yq7f.gEfe` | func | `(i32 i32) -> (i32)` |
| 16 | `Yq7f.u77g` | func | `(i32 i32) -> (i32)` |
| 17 | `Yq7f.FrDj` | func | `(i32 i32) -> ()` |
| 18 | `Yq7f.RDkH` | func | `(i32) -> (i32)` |
| 19 | `Yq7f.mI7E` | func | `(i32) -> (i32)` |
| 20 | `Yq7f.LOza` | func | `(i32) -> (i32)` |
| 21 | `Yq7f.BMXA` | func | `(i32) -> ()` |
| 22 | `Yq7f.pEEx` | func | `(i32 i32) -> ()` |
| 23 | `Yq7f.wp6q` | func | `(i32 i32) -> ()` |
| 24 | `Yq7f.h6oT` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `Yq7f.p240` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `Yq7f.jHud` | func | `(i32) -> (i32)` |
| 27 | `Yq7f.kq2z` | func | `(i32 i32) -> ()` |
| 28 | `Yq7f.m6wD` | func | `(i32 i32) -> (i32)` |
| 29 | `Yq7f.Qcwo` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `Yq7f.C0Ov` | func | `(i32 i32) -> (i32)` |
| 31 | `Yq7f.pogn` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `Yq7f.YIAU` | func | `(i32) -> (i32)` |
| 33 | `Yq7f.lLqv` | func | `() -> (f64)` |
| 34 | `Yq7f.Ubx8` | func | `(i32 i32) -> ()` |
| 35 | `Yq7f.Tpl2` | func | `(i32) -> ()` |
| 36 | `Yq7f.fcD9` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `Yq7f.gpv4` | func | `(i32) -> (i32)` |
| 38 | `Yq7f.ZMBH` | func | `(i32) -> (i32)` |
| 39 | `Yq7f.u9BD` | func | `(i32) -> (i32)` |
| 40 | `Yq7f.x5BI` | func | `(i32 i32) -> (i32)` |
| 41 | `Yq7f.YqxG` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `Yq7f.wnTX` | func | `(i32) -> (i32)` |
| 43 | `Yq7f.Ibaz` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `Yq7f.pxgt` | func | `(i32) -> (i32)` |
| 45 | `Yq7f.mH4I` | func | `(i32 i32 i32 i32) -> ()` |
| 46 | `Yq7f.sUqt` | func | `(i32 i32 i32) -> (i32)` |
| 47 | `Yq7f.eff6` | func | `(i32 i32 i32) -> ()` |
| 48 | `Yq7f.vmsP` | func | `(i32 i32 i32) -> ()` |
| 49 | `Yq7f.Ept7` | func | `(i32 i32 i32) -> ()` |
| 50 | `Yq7f.NVqB` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `Yq7f.I39T` | func | `(i32 i32 i32 i32) -> ()` |
| 52 | `Yq7f.SEJD` | func | `(i32 i32) -> ()` |
| 53 | `Yq7f.zhNs` | func | `(i32 i32) -> ()` |
| 54 | `Yq7f.cge6` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `Yq7f.Cern` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `Yq7f.tjkv` | func | `(i32 f32 f32) -> ()` |
| 57 | `Yq7f.MGkB` | func | `(i32 f32 f32) -> ()` |
| 58 | `Yq7f.VCrX` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `Yq7f.hQwv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `Yq7f.Pr9Y` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `Yq7f.Qt5C` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `Yq7f.rzWX` | func | `(i32 i32 i32) -> ()` |
| 63 | `Yq7f.JHXw` | func | `(i32 i32 i32) -> ()` |
| 64 | `Yq7f.Hs8p` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `Yq7f.GVBr` | func | `(i32 i32 i32) -> ()` |
| 66 | `Yq7f.rnac` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `Yq7f.NFFb` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `Yq7f.tIxQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 69 | `Yq7f.LjR8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `Yq7f.Pgti` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 71 | `Yq7f.VbEk` | func | `(i32) -> (i32)` |
| 72 | `Yq7f.csTK` | func | `(i32) -> ()` |
| 73 | `Yq7f.fasQ` | func | `(i32) -> (i32)` |
| 74 | `Yq7f.baZ2` | func | `(i32 i32) -> (i32)` |
| 75 | `Yq7f.c41Z` | func | `(i32 i32 i32) -> (i32)` |
| 76 | `Yq7f.W6B6` | func | `(i32 i32 i32) -> ()` |
| 77 | `Yq7f.PmJV` | func | `(i32 i32 i32 i32) -> (i32)` |
| 78 | `Yq7f.Vxqx` | func | `() -> (f64)` |
| 79 | `Yq7f.xmHE` | func | `() -> (f64)` |
| 80 | `Yq7f.Bckn` | func | `(i32 i32) -> ()` |
| 81 | `Yq7f.HTQy` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 82 | `Yq7f.azjI` | func | `(i32 i32 i32) -> (i32)` |
| 83 | `Yq7f.CFgr` | func | `(i32 i32 i32) -> ()` |
| 84 | `Yq7f.N5gB` | func | `(i32 i32 i32) -> ()` |
| 85 | `Yq7f.bEJh` | func | `(i32 i32) -> ()` |
| 86 | `Yq7f.gd6Q` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `Yq7f.Rvd3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `Yq7f.dyuF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 89 | `Yq7f.JC2H` | func | `(i32 i32) -> ()` |
| 90 | `Yq7f.OiEG` | func | `(i32 i32) -> ()` |
| 91 | `Yq7f.GAJN` | func | `(i32) -> (i32)` |
| 92 | `Yq7f.nAO8` | func | `(i32 i32 i32) -> ()` |
| 93 | `Yq7f.tqNd` | func | `(i32 i32 i32) -> ()` |
| 94 | `Yq7f.faRa` | func | `(i32) -> (i32)` |
| 95 | `Yq7f.Elfn` | func | `(i32) -> (i32)` |
| 96 | `Yq7f.l04b` | func | `(i32 i32) -> ()` |
| 97 | `Yq7f.c6Jp` | func | `(i32 i32) -> ()` |
| 98 | `Yq7f.iDZ4` | func | `(i32 i32) -> ()` |
| 99 | `Yq7f.IAkZ` | func | `(i32 i32) -> ()` |
| 100 | `Yq7f.ao6x` | func | `(i32 i32 i32) -> ()` |
| 101 | `Yq7f.zDzA` | func | `(i32 i32 i32) -> ()` |
| 102 | `Yq7f.EunE` | func | `(i32 i32 f32) -> ()` |
| 103 | `Yq7f.mMz2` | func | `(i32 i32 f32) -> ()` |
| 104 | `Yq7f.xYBH` | func | `(i32 i32 i32) -> ()` |
| 105 | `Yq7f.YTrl` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `Yq7f.zdqE` | func | `(i32 i32 f32 f32) -> ()` |
| 107 | `Yq7f.TEim` | func | `(i32 i32) -> ()` |
| 108 | `Yq7f.lSBo` | func | `(i32 i32) -> ()` |
| 109 | `Yq7f.wyTQ` | func | `(i32 i32) -> ()` |
| 110 | `Yq7f.kA71` | func | `(i32 i32) -> ()` |
| 111 | `Yq7f.dyEc` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `Yq7f.hmmo` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 113 | `Yq7f.h1WR` | func | `(i32 i32 i32) -> ()` |
| 114 | `Yq7f.A4yX` | func | `(i32 i32 i32) -> ()` |
| 115 | `Yq7f.Lo04` | func | `(i32 i32 i32 i32) -> ()` |
| 116 | `Yq7f.jjuc` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 117 | `Yq7f.WEYz` | func | `(i32 i32) -> ()` |
| 118 | `Yq7f.roNS` | func | `(i32 i32) -> ()` |
| 119 | `Yq7f.LtiS` | func | `(i32 i32) -> (i32)` |
| 120 | `Yq7f.x0Dl` | func | `(i32 i32) -> (i32)` |
| 121 | `Yq7f.mz1k` | func | `(i32 i32) -> ()` |
| 122 | `Yq7f.prig` | func | `(i32 i32) -> ()` |
| 123 | `Yq7f.i4Mb` | func | `(i32) -> (i32)` |
| 124 | `Yq7f.QjOp` | func | `(i32 i32) -> ()` |
| 125 | `Yq7f.LmY2` | func | `(i32 i32) -> ()` |
| 126 | `Yq7f.hney` | func | `(i32 i32 i32 i32) -> ()` |
| 127 | `Yq7f.pynB` | func | `(i32 i32 i32) -> ()` |
| 128 | `Yq7f.k4CM` | func | `(i32 i32 i32) -> ()` |
| 129 | `Yq7f.FxVN` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 130 | `Yq7f.KoDR` | func | `(i32 i32) -> ()` |
| 131 | `Yq7f.b4LP` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `Yq7f.cGTC` | func | `(i32 i32 i32 i32) -> (i32)` |
| 133 | `Yq7f.jrvT` | func | `(i32 i32 i32) -> ()` |
| 134 | `Yq7f.GIXa` | func | `(i32 i32 i32) -> ()` |
| 135 | `Yq7f.VAGb` | func | `(i32) -> ()` |
| 136 | `Yq7f.dCQ9` | func | `(i32 i32 i32) -> (i32)` |
| 137 | `Yq7f.I7yR` | func | `(i32 i32 i32) -> ()` |
| 138 | `Yq7f.zeAh` | func | `(i32 i32 i32) -> (i32)` |
| 139 | `Yq7f.VSHd` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `Yq7f.SwF3` | func | `(i32 i32 i32) -> (i32)` |
| 141 | `Yq7f.Krbw` | func | `(i32 i32) -> ()` |
| 142 | `Yq7f.GzTV` | func | `(i32) -> (i32)` |
| 143 | `Yq7f.rFhS` | func | `(i32 i32) -> ()` |
| 144 | `Yq7f.M9Pi` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `Yq7f.StJy` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `Yq7f.mpbQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `Yq7f.DP0M` | func | `(i32 i32) -> ()` |
| 148 | `Yq7f.Uf10` | func | `(i32 i32) -> ()` |
| 149 | `Yq7f.fFWv` | func | `(i32 i32) -> ()` |
| 150 | `Yq7f.qWrO` | func | `(i32 i32) -> ()` |
| 151 | `Yq7f.svkI` | func | `(i32) -> (i32)` |
| 152 | `Yq7f.LPBm` | func | `(i32) -> (i32)` |
| 153 | `Yq7f.tSCc` | func | `(i32) -> (i32)` |
| 154 | `Yq7f.aZ7E` | func | `(i32) -> (i32)` |
| 155 | `Yq7f.oxDX` | func | `(i32) -> (i32)` |
| 156 | `Yq7f.Nug3` | func | `(i32) -> (i32)` |
| 157 | `Yq7f.lzwk` | func | `() -> (i32)` |
| 158 | `Yq7f.V67e` | func | `() -> (i32)` |
| 159 | `Yq7f.pHVz` | func | `() -> (i32)` |
| 160 | `Yq7f.P6eR` | func | `() -> (i32)` |
| 161 | `Yq7f.Cs1K` | func | `(i32 i32) -> (i32)` |
| 162 | `Yq7f.pTqo` | func | `(i32) -> ()` |
| 163 | `Yq7f.ksRw` | func | `(i32 i32) -> (i32)` |
| 164 | `Yq7f.XBkN` | func | `(i32) -> (i32)` |
| 165 | `Yq7f.jm3i` | func | `(i32) -> (i32)` |
| 166 | `Yq7f.ygdL` | func | `(i32) -> (i32)` |
| 167 | `Yq7f.hwoC` | func | `(i32) -> ()` |
| 168 | `Yq7f.pK7q` | func | `(i32 i32 i32) -> (i32)` |
| 169 | `Yq7f.mDI5` | func | `(i32) -> (i32)` |
| 170 | `Yq7f.dgCX` | func | `(i32) -> (i32)` |
| 171 | `Yq7f.kr5z` | func | `(i32 i32) -> (i32)` |
| 172 | `Yq7f.HK6p` | func | `(i32) -> ()` |
| 173 | `Yq7f.uHVa` | func | `() -> (i32)` |
| 174 | `Yq7f.ziHh` | func | `(i32 i32) -> (i32)` |
| 175 | `Yq7f.SU54` | func | `(i32 i32) -> ()` |
| 176 | `Yq7f.abmM` | func | `(i32 i32) -> ()` |
| 177 | `Yq7f.B4x8` | func | `(i32) -> (i32)` |
| 178 | `Yq7f.SNIq` | func | `(i32 i32) -> (i32)` |
| 179 | `Yq7f.OWjP` | func | `(i32) -> ()` |
| 180 | `Yq7f.hglP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `Yq7f.fXwW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 182 | `Yq7f.yKP0` | func | `(i32 i32) -> ()` |
| 183 | `Yq7f.SlOy` | func | `(i32 i32) -> ()` |
| 184 | `Yq7f.R47C` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `Yq7f.ikx1` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 186 | `Yq7f.vRbZ` | func | `(i32 f32) -> ()` |
| 187 | `Yq7f.mdop` | func | `(i32 f32) -> ()` |
| 188 | `Yq7f.sxsS` | func | `(i32 i32) -> ()` |
| 189 | `Yq7f.Oe9S` | func | `(i32 i32) -> ()` |
| 190 | `Yq7f.T0GU` | func | `(i32) -> (i32)` |
| 191 | `Yq7f.zeGl` | func | `(i32) -> (i32)` |
| 192 | `Yq7f.Wxau` | func | `(i32) -> (i32)` |
| 193 | `Yq7f.K9pO` | func | `(i32) -> (i32)` |
| 194 | `Yq7f.SlAL` | func | `(i32 i32 i32) -> ()` |
| 195 | `Yq7f.hP6f` | func | `(i32 i32 i32) -> ()` |
| 196 | `Yq7f.aUql` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `Yq7f.HVqS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 198 | `Yq7f.u8nl` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 199 | `Yq7f.bzd0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `Yq7f.qEiE` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 201 | `Yq7f.hc0v` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `Yq7f.eewn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `Yq7f.Nkzj` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 204 | `Yq7f.kS8D` | func | `(i32) -> (i32)` |
| 205 | `Yq7f.y9bO` | func | `(i32) -> (i32)` |
| 206 | `Yq7f.PIDx` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 207 | `Yq7f.EE9N` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `Yq7f.wOzM` | func | `(i32 i32 i32 i32) -> ()` |
| 209 | `Yq7f.rknX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `Yq7f.G1dW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `Yq7f.Bi6Q` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `Yq7f.uUfh` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `Yq7f.PZIV` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 214 | `Yq7f.j1E5` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `Yq7f.sryc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 216 | `Yq7f.HJlr` | func | `(i32 i32 i32) -> ()` |
| 217 | `Yq7f.gQoA` | func | `(i32 i32 i32) -> ()` |
| 218 | `Yq7f.uQZC` | func | `(i32 i32) -> ()` |
| 219 | `Yq7f.PJ4q` | func | `(i32 i32) -> ()` |
| 220 | `Yq7f.i98h` | func | `(i32 i32) -> ()` |
| 221 | `Yq7f.HDVB` | func | `(i32 i32) -> ()` |
| 222 | `Yq7f.DxcQ` | func | `(i32 i32) -> ()` |
| 223 | `Yq7f.RrCf` | func | `(i32 i32) -> ()` |
| 224 | `Yq7f.dvtR` | func | `(i32 f32 f32) -> ()` |
| 225 | `Yq7f.vPft` | func | `(i32 f32 f32) -> ()` |
| 226 | `Yq7f.bTK8` | func | `(i32 i32) -> ()` |
| 227 | `Yq7f.XGij` | func | `(i32 i32) -> ()` |
| 228 | `Yq7f.yEIn` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `Yq7f.SrMh` | func | `(i32 i32 i32 f32) -> ()` |
| 230 | `Yq7f.UxV4` | func | `(i32 i32 i32) -> ()` |
| 231 | `Yq7f.Lb6g` | func | `(i32) -> (i32)` |
| 232 | `Yq7f.ORdE` | func | `(i32) -> (i32)` |
| 233 | `Yq7f.XdtW` | func | `(i32 i32) -> ()` |
| 234 | `Yq7f.yqBq` | func | `(i32 i32) -> ()` |
| 235 | `Yq7f.zCw4` | func | `(i32 i32 i32 i32) -> (i32)` |
| 236 | `Yq7f.flCY` | func | `(i32 i32 i32 i32) -> ()` |
| 237 | `Yq7f.xKOW` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `Yq7f.TguU` | func | `(i32 i32 i32) -> ()` |
| 239 | `Yq7f.HITu` | func | `(i32 i32 i32) -> ()` |
| 240 | `Yq7f.lrim` | func | `(i32 i32 i32) -> ()` |
| 241 | `Yq7f.oufK` | func | `(i32 i32 i32) -> ()` |
| 242 | `Yq7f.jqQL` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `Yq7f.qyAV` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `Yq7f.OX91` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `Yq7f.Hzel` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 246 | `Yq7f.t161` | func | `(i32) -> (i32)` |
| 247 | `Yq7f.ISTi` | func | `(i32) -> (i32)` |
| 248 | `Yq7f.yE8G` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `Yq7f.rUbG` | func | `(i32 i32) -> ()` |
| 250 | `Yq7f.Yl5e` | func | `(i32 i32) -> ()` |
| 251 | `Yq7f.sTEi` | func | `(i32 i32) -> (i32)` |
| 252 | `Yq7f.moQ9` | func | `(i32 i32) -> (i32)` |
| 253 | `Yq7f.VWSH` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `Yq7f.QsVy` | func | `(i32 i32 i32 i32) -> ()` |
| 255 | `Yq7f.nRe2` | func | `(i32 i32) -> ()` |
| 256 | `Yq7f.y9iM` | func | `(i32 i32) -> ()` |
| 257 | `Yq7f.UUnF` | func | `(i32) -> (i32)` |
| 258 | `Yq7f.HpMW` | func | `(i32 i32 i32 i32) -> ()` |
| 259 | `Yq7f.XdjH` | func | `(i32 i32 i32 f32) -> ()` |
| 260 | `Yq7f.aEYb` | func | `(i32) -> ()` |
| 261 | `Yq7f.rTBy` | func | `(i32 i32) -> ()` |
| 262 | `Yq7f.jvWu` | func | `(i32 i32) -> ()` |
| 263 | `Yq7f.TYhy` | func | `(i32 i32) -> ()` |
| 264 | `Yq7f.y6Vv` | func | `(i32 i32) -> ()` |
| 265 | `Yq7f.Pokd` | func | `(i32 i32) -> ()` |
| 266 | `Yq7f.UGPj` | func | `(i32 i32) -> ()` |
| 267 | `Yq7f.L1GS` | func | `(i32 i32) -> ()` |
| 268 | `Yq7f.A7gT` | func | `(i32 i32) -> ()` |
| 269 | `Yq7f.a6q3` | func | `(i32) -> (i32)` |
| 270 | `Yq7f.oJ7s` | func | `(i32) -> (i32)` |
| 271 | `Yq7f.eLNB` | func | `(i32) -> (i32)` |
| 272 | `Yq7f.oR7I` | func | `(i32) -> (i32)` |
| 273 | `Yq7f.nbim` | func | `(i32 i32 i32 i32) -> ()` |
| 274 | `Yq7f.qOGt` | func | `(i32) -> ()` |
| 275 | `Yq7f.TQf3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `Yq7f.zd3Y` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `Yq7f.DeaG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `Yq7f.fSOo` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `Yq7f.h5FR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `Yq7f.QVss` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 281 | `Yq7f.spJx` | func | `(i32) -> (i32)` |
| 282 | `Yq7f.ntBH` | func | `(i32) -> (i32)` |
| 283 | `Yq7f.EBb4` | func | `(i32) -> (i32)` |
| 284 | `Yq7f.H4PQ` | func | `(i32) -> (i32)` |
| 285 | `Yq7f.L8K2` | func | `(i32 i32) -> ()` |
| 286 | `Yq7f.UXeC` | func | `(i32) -> ()` |
| 287 | `Yq7f.cHI6` | func | `(i32 i32) -> ()` |
| 288 | `Yq7f.uBSm` | func | `(i32) -> (i32)` |
| 289 | `Yq7f.Qu4F` | func | `(i32 i32) -> (i32)` |
| 290 | `Yq7f.XxJB` | func | `(i32 i32) -> (i32)` |
| 291 | `Yq7f.onFr` | func | `(i32 i32) -> (i32)` |
| 292 | `Yq7f.o05Q` | func | `(f64) -> (i32)` |
| 293 | `Yq7f.U7JM` | func | `(i32 i32) -> (i32)` |
| 294 | `Yq7f.kxqO` | func | `(i32 i32) -> (i32)` |
| 295 | `Yq7f.lX6m` | func | `(i32 i32) -> (i32)` |
| 296 | `Yq7f.yGO8` | func | `(i32 i32) -> (i32)` |
| 297 | `Yq7f.K7mJ` | func | `(i32 i32) -> (i32)` |
| 298 | `Yq7f.dbgl` | func | `(i32 i32) -> (i32)` |
| 299 | `Yq7f.qgZY` | func | `(i32 i32) -> (i32)` |

## Exports

167 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `lmyF` | func | 3076 | `(i32 i32) -> (i32 i32)` |
| `vrHr` | func | 1446 | `(i32 i32) -> (i32)` |
| `a8tQ` | func | 1138 | `(i32 i32) -> ()` |
| `ONku` | func | 3267 | `() -> (i32)` |
| `J1hf` | func | 2527 | `(i32) -> (i32)` |
| `ob5p` | func | 2391 | `(i32 i32) -> (i32)` |
| `rw99` | func | 1669 | `(i32 i32 i32 i32) -> (i32)` |
| `t6fU` | func | 1137 | `(i32 i32) -> (i32)` |
| `o9PM` | func | 1273 | `(i32 i32) -> (i32)` |
| `yamM` | func | 1426 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `vyMp` | func | 1242 | `(i32 i32 i32 i32) -> (i32)` |
| `RmsZ` | func | 1918 | `(i32 i32) -> (i32)` |
| `y2uY` | func | 2509 | `(i32) -> (i32)` |
| `k98N` | func | 3078 | `(i32 i32) -> (i32 i32)` |
| `Xzji` | func | 1241 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `xejP` | func | 2561 | `(i32) -> (i32)` |
| `rHQt` | func | 2552 | `(i32 i32) -> (i32)` |
| `rqho` | func | 2827 | `(i32) -> (i32)` |
| `Kofj` | func | 2560 | `(i32) -> (i32)` |
| `a2iY` | func | 1907 | `(i32 i32) -> ()` |
| `k6IT` | func | 2715 | `(i32 i32) -> ()` |
| `h8uh` | func | 1295 | `(i32 i32 i32) -> (i32)` |
| `YhcK` | func | 3164 | `() -> (i32)` |
| `x4xH` | func | 2075 | `(i32 f64 f64 f64) -> (i32)` |
| `dDZz` | func | 3103 | `() -> (i32 i32)` |
| `Sjiw` | func | 2530 | `(i32) -> (i32)` |
| `tq9e` | func | 1899 | `(i32 i32 f64 f64 f64) -> ()` |
| `GaDP` | func | 2197 | `(i32 i32) -> (i32)` |
| `ChKO` | func | 1330 | `(i32 i32) -> (i32)` |
| `CqQK` | func | 2307 | `(i32 f64) -> (i32)` |
| `lchG` | func | 3088 | `(i32) -> (i32 i32)` |
| `YgnU` | func | 2526 | `(i32) -> (i32)` |
| `Yh6e` | func | 1995 | `(i32) -> (i32)` |
| `w3Um` | func | 3067 | `(i32 i32 i32) -> (i32 i32)` |
| `l7si` | func | 1424 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `SZER` | func | 2892 | `(i32) -> (i32)` |
| `SpyX` | func | 3127 | `(i32 i32 i32 i32) -> ()` |
| `OHqb` | func | 1799 | `(i32 i32) -> (i32)` |
| `geuB` | func | 2462 | `(i32) -> (i32)` |
| `fhyP` | func | 1879 | `(i32 i32 i32 i32) -> (i32)` |
| `KbSb` | func | 2627 | `(i32) -> ()` |
| `BtD8` | func | 752 | `(i32 i32 i32 i32) -> (i32)` |
| `XIA6` | func | 3086 | `(i32) -> (i32 i32)` |
| `VaGW` | func | 1524 | `(i32) -> (i32)` |
| `uW7p` | func | 3077 | `(i32 i32) -> (i32 i32)` |
| `s0o2` | func | 2423 | `(i32 i32) -> (i32)` |
| `nvMj` | func | 628 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `dkwS` | func | 2727 | `(i32 i32) -> ()` |
| `U9U2` | func | 3091 | `(i32) -> (i32 i32)` |
| `GRi9` | func | 3072 | `(i32 i32) -> (i32 i32)` |
| `teRS` | func | 1302 | `(i32 i32 i32) -> ()` |
| `R4dq` | func | 3073 | `(i32 i32) -> (i32 i32)` |
| `Poo9` | func | 2478 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `TXiH` | func | 2251 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jYKF` | func | 1933 | `(i32) -> ()` |
| `UYJW` | func | 2389 | `(i32 i32) -> (i32)` |
| `DPr7` | func | 689 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `DC8Z` | func | 1554 | `(i32 i32) -> (i32)` |
| `IDbE` | func | 3016 | `() -> ()` |
| `XZI0` | func | 3104 | `() -> (i32 i32)` |
| `pwib` | func | 2522 | `(i32) -> (i32)` |
| `QO74` | func | 930 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `qdRB` | func | 1568 | `(i32 i32 i32) -> (i32)` |
| `SKjd` | func | 1701 | `(i32) -> ()` |
| `CD9U` | func | 3268 | `() -> (i32)` |
| `cdrj` | func | 1787 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Z3vZ` | func | 1617 | `(i32 i32) -> (i32)` |
| `mXVf` | func | 1500 | `(i32 i32 i32 i32) -> ()` |
| `CnK1` | func | 2529 | `(i32) -> (i32)` |
| `iUuH` | func | 2521 | `(i32) -> (f64)` |
| `IXmR` | func | 1542 | `(i32 i32) -> (i32)` |
| `Hu8F` | func | 2388 | `(i32 i32) -> (i32)` |
| `GZL3` | func | 3048 | `(i32 i32) -> ()` |
| `pr8D` | func | 2543 | `(i32 i32) -> ()` |
| `EOAM` | func | 3243 | `(i32) -> (i32)` |
| `SSTD` | func | 3136 | `(i32 i32) -> ()` |
| `XP17` | func | 3239 | `() -> (f64)` |
| `fVXw` | func | 3074 | `(i32 i32) -> (i32 i32)` |
| `dGD6` | func | 3204 | `(i32) -> ()` |
| `N4Av` | func | 2834 | `(i32) -> (i32)` |
| `IqJd` | func | 1354 | `(i32) -> ()` |
| `UAe4` | func | 2337 | `(i32 i32) -> ()` |
| `oGJf` | func | 2541 | `(i32) -> (i32)` |
| `XMue` | func | 1628 | `(i32 i32) -> ()` |
| `U73Y` | func | 2542 | `(i32) -> (i32)` |
| `ufIM` | global | 2 | `` |
| `XekK` | func | 1781 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `GE8j` | func | 1997 | `(i32 i32 i32 i32) -> ()` |
| `Qf9W` | func | 694 | `(i32 i32) -> (i32)` |
| `ohJb` | func | 2306 | `(i32 i32) -> ()` |
| `pqdb` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `ZAfl` | func | 1248 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `g7GC` | global | 1 | `` |
| `KOts` | func | 2646 | `(i32 i32) -> ()` |
| `niCe` | func | 2610 | `(i32) -> ()` |
| `m1HG` | func | 870 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `jS4F` | func | 1925 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `P09z` | func | 1632 | `(i32 f64 f64 f64) -> (i32)` |
| `ouq1` | func | 756 | `(i32) -> (i32)` |
| `Cmmc` | func | 1321 | `(i32) -> (i32)` |
| `dkKJ` | func | 1357 | `(i32 i32) -> (i32)` |
| `W2op` | func | 3035 | `(i32 i32) -> (i32)` |
| `AIqP` | func | 3090 | `(i32) -> (i32 i32)` |
| `puNx` | func | 2597 | `(i32 i32) -> ()` |
| `oVH7` | func | 2647 | `() -> (i32)` |
| `VO1k` | func | 1530 | `(i32 i32) -> (i32)` |
| `AfYn` | func | 2539 | `(i32 i32) -> ()` |
| `wncd` | func | 2562 | `(i32) -> (i32)` |
| `Cjvw` | func | 1764 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `IIqs` | func | 2057 | `(i32 f64) -> (i32)` |
| `RfzM` | func | 3041 | `(i32 i32 i32 i32) -> (i32)` |
| `Alk6` | func | 2434 | `(i32 i32 i32 i32) -> (i32)` |
| `fGu5` | func | 1371 | `(i32 i32 i32) -> (i32)` |
| `o0vo` | func | 2091 | `(i32 i32) -> ()` |
| `QH9u` | func | 2611 | `() -> (i32)` |
| `E0fZ` | func | 2528 | `(i32) -> ()` |
| `SiuC` | func | 1589 | `(i32 i32 i32 i32) -> (i32)` |
| `X1gU` | func | 942 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jCzY` | func | 1425 | `(i32 f64 f64) -> (i32)` |
| `bABP` | func | 2031 | `(i32 i32) -> ()` |
| `cPu4` | func | 909 | `(i32 i32) -> (i32)` |
| `Saiz` | func | 2553 | `(i32 i32) -> (i32)` |
| `NWmf` | func | 2390 | `(i32 i32) -> (i32)` |
| `ER2p` | func | 582 | `(i32 i32 i32) -> (i32)` |
| `QJtd` | func | 2523 | `(i32) -> (i32)` |
| `ef89` | func | 2544 | `(i32) -> (i32)` |
| `rVeC` | func | 1518 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `wIZO` | func | 3075 | `(i32 i32) -> (i32 i32)` |
| `Eioy` | func | 679 | `(i32 i32) -> (i32)` |
| `EUrn` | func | 1864 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `OU5w` | func | 2848 | `(i32) -> (i32)` |
| `mFmk` | func | 3197 | `(i32) -> ()` |
| `jcu5` | func | 2508 | `(i32 i32) -> ()` |
| `csaC` | func | 1553 | `(i32 i32) -> (i32)` |
| `KT49` | func | 1851 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `SveS` | func | 1197 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `SSde` | func | 908 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `HyBs` | func | 2479 | `(i32) -> (i32)` |
| `I3zQ` | func | 1859 | `() -> (i32)` |
| `lfZS` | func | 1556 | `(i32 f64) -> (f64)` |
| `UBkT` | func | 2229 | `(i32 i32) -> (i32)` |
| `LN08` | func | 1741 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `tNDO` | func | 3066 | `(i32 i32 i32) -> (i32 i32)` |
| `kTzK` | func | 3087 | `(i32) -> (i32 i32)` |
| `oFSQ` | func | 1477 | `() -> (i32)` |
| `kOlT` | func | 1472 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `yh24` | func | 760 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `mvVa` | func | 2364 | `(i32 i32 i32 i32) -> ()` |
| `PYws` | func | 3135 | `(i32 i32 i32) -> ()` |
| `TD64` | func | 3102 | `() -> (i32 i32)` |
| `xeTD` | func | 2116 | `(i32 i32) -> (i32)` |
| `RQvi` | func | 2551 | `(i32) -> (i32)` |
| `Wh8W` | func | 3089 | `(i32) -> (i32 i32)` |
| `D9br` | func | 777 | `(i32 i32 i32) -> (i32)` |
| `ELoR` | func | 3198 | `() -> ()` |
| `Nqwt` | func | 2524 | `(i32) -> (i32)` |
| `dc85` | func | 2531 | `(i32) -> (i32)` |
| `jpd2` | func | 720 | `(i32 i32) -> (i32)` |
| `x9kN` | func | 2870 | `(i32) -> ()` |
| `p4W8` | func | 712 | `(f64) -> (f64)` |
| `YFWb` | func | 2860 | `(i32) -> (i32)` |
| `OYtt` | func | 3244 | `(i32) -> ()` |
| `YIZY` | func | 1480 | `(i32) -> (i32)` |
| `iapC` | func | 1977 | `(i32) -> (i32)` |
| `GRPY` | func | 2525 | `(i32) -> (i32)` |
| `Sja2` | func | 3191 | `(i32 i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 759 · max 759
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2709384, `i32` = i32.const 2709980

## Functions

- 2,979 bodies · 4,121,034 code bytes · avg 1.4 KB
- instruction scan: 2,979 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 113 |
| <= 128 bytes | 261 |
| <= 256 bytes | 387 |
| <= 512 bytes | 686 |
| <= 1024 bytes | 597 |
| <= 2048 bytes | 434 |
| <= 4096 bytes | 184 |
| <= 8192 bytes | 94 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 35 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 195,091 | 88,356 | local.get×25977, i32.const×9822, i32.load×5552, local.set×4795, local.tee×4567 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 149 | 107,711 | 52,244 | local.get×14617, i32.const×6206, i32.add×3028, local.set×2958, i32.load×2876 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,466 | 21,356 | local.get×6228, i32.const×2821, local.set×1224, i32.add×1130, i32.load×1006 |
| 3 | `(i32 i32) -> ()` | 105 | 36,615 | 16,581 | local.get×4597, i32.const×1665, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,792 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,490 | 12,813 | local.get×3796, i32.const×1624, local.set×985, i32.add×684, i32.load×669 |
| 9 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 23,045 | 10,821 | local.get×2888, i32.const×1247, i32.load×812, local.set×501, end×465 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 18 | `(i32) -> ()` | 78 | 20,103 | 9,357 | local.get×2592, i32.const×1114, i32.add×570, local.tee×513, local.set×503 |
| 24 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 25 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,318 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 28 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,818 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 35 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 71 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 204 | `(i32 i32) -> ()` | 10 | 30,134 | 14,535 | local.get×5127, i32.load×1394, i32.const×1130, end×911, i32.add×829 |
| 223 | `(i32) -> ()` | 19 | 23,308 | 10,931 | local.get×2739, i32.load×1499, i32.const×1189, local.tee×1013, end×857 |
| 739 | `(i32 i32) -> ()` | 139 | 42,975 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 740 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1618 | `(i32 i32) -> (i32)` | 182 | 55,130 | 19,838 | local.get×6600, i32.const×2596, i64.store×1935, i64.const×1087, i64.load×1068 |
| 2027 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2651 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2930 | `(i32 i32 i32 i32) -> ()` | 137 | 31,379 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2948 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
atlasSamplerfs_atlas1CANVAS_ALPHA_ONELIGHTINGfs_atlas1_restfs_atlasnfs_atlasn_restfs_nonefs_none_restfs_singlefs_single_restvs_packedSINGLE_ANIMATEDSINGLE_TEXTUREvs_packed_animvs_unpackedvs_unpacked_l
                                                                                                 skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13
456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
ue:keydownkeyupmousedownmouseuptouchstarttouchendMouse1Mouse2Mouse3Alt+Left ClickF2F4F5F8F9Digit0Digit1Digit2Digit3Digit4Digit5Digit6Digit7Digit8Digit9KeyQKeyWKeyEKeyRKeyTKeyYKeyUKeyIKeyOKeyPKeyAKeySK
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
schema23canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshowP
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
terrain-atlasn-anim-lit-packed-texterrain-atlasn-anim-lit-packed-rest-instterrain-atlasn-anim-lit-packed-instterrain-atlasn-anim-lit-packed-cells-rest-texterrain-atlasn-anim-lit-packed-cells-texterrai
a draw with a base vertex: WebGL2 has none, so it is skippedan indexed draw without an index buffer is skippeda draw's pipeline has no GL program: it is skippeda draw's program failed to link: it is s
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
R8UnormR32FloatRgba8UnormBgra8UnormDepth24PlusDepth24PlusStencil8Rgba16UintRgba32UintRgba32FloatRg32FloatUV2VERTEXCOLORVERTEXALPHAOPACITYRGBEMISSIVELITE_REFLECTION_LUMINANCEREFLECTIONMAP_OPPOSITEZROUG
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123
called `Result::unwrap()` on an `Err` valueANGLE_instanced_arraysEXT_blend_minmaxEXT_color_buffer_floatEXT_color_buffer_half_floatEXT_float_blendEXT_frag_depthEXT_shader_texture_lodEXT_sRGBEXT_texture
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 551,420 |
| `i32.const` | 230,026 |
| `local.tee` | 102,511 |
| `i32.load` | 96,687 |
| `local.set` | 95,940 |
| `i32.add` | 88,975 |
| `end` | 80,930 |
| `br_if` | 65,770 |
| `i32.store` | 47,713 |
| `block` | 37,962 |
| `i64.const` | 33,323 |
| `i64.store` | 32,548 |
| `if` | 30,995 |
| `call` | 30,188 |
| `i32.sub` | 25,173 |
| `i64.load` | 24,235 |
| `br` | 23,555 |
| `i32.eqz` | 20,043 |
| `select` | 17,496 |
| `i32.shl` | 16,748 |
| `i32.and` | 16,570 |
| `i32.ne` | 16,182 |
| `i32.load8_u` | 15,293 |
| `i32.eq` | 14,142 |
| `i32.store8` | 12,809 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,979/2,979 (degraded: 0)
