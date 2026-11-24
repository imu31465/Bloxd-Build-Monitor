# WASM module: `bloxd_wasm_webgpu_bg`

> environment **preprod.bloxd.io** · build `sn3sfj.2522680a` · analyzed 2026-11-25T01:02:22+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgpu_bg.ca8fd1c6aeacd69ea761.wasm
> 5,136,608 bytes (4.9 MB) · sha256 `bb0d39b71cbd6256…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,121,311 → 5,136,608 bytes (+15,297)
- defined functions 2,938 → 2,949
- code bytes 4,038,839 → 4,050,219
- data bytes 1,036,149 → 1,040,009
- name-section module id `e5ffc3c7db3885ff.12254` → `2453a38173cd558c.12282`
- export signatures: +1 × `() -> (i32 i32)`
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `fn vs_mesh_general_atlasn(@location(0) position: vec3f, @loc`
- removed embedded strings: `fn vs_mesh_0044d000053_l3(@location(0) position: vec3f, @loc`

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
| name-section module id | `2453a38173cd558c.12282` |
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
| 0 | `zBof.Qpp3` | memory | `[128..14648]` |
| 0 | `zBof.iC5R` | func | `(i32) -> (i32)` |
| 1 | `zBof.dOxS` | func | `(i32) -> (f64)` |
| 2 | `zBof.MmSW` | func | `() -> (i32)` |
| 3 | `zBof.Xkur` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `zBof.YXVc` | func | `(i32) -> ()` |
| 5 | `zBof.syxk` | func | `(i32 i32) -> (i32)` |
| 6 | `zBof.dL85` | func | `(i32) -> (i32)` |
| 7 | `zBof.libh` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `zBof.o7y2` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `zBof.P4cJ` | func | `(i32) -> (i32)` |
| 10 | `zBof.zJrd` | func | `(i32 i32) -> ()` |
| 11 | `zBof.U8by` | func | `(i32 i32) -> ()` |
| 12 | `zBof.jy3u` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `zBof.fsgU` | func | `(i32 i32) -> (i32)` |
| 14 | `zBof.V4Ji` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `zBof.F7NF` | func | `(i32) -> (i32)` |
| 16 | `zBof.bvWP` | func | `(i32 i32) -> (i32)` |
| 17 | `zBof.t25d` | func | `(i32 i32) -> (i32)` |
| 18 | `zBof.q7xf` | func | `(i32 i32) -> ()` |
| 19 | `zBof.aIvJ` | func | `(i32) -> (i32)` |
| 20 | `zBof.c8RV` | func | `(i32) -> (i32)` |
| 21 | `zBof.x2a1` | func | `(i32 i32 i32) -> ()` |
| 22 | `zBof.u4X6` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `zBof.EX7M` | func | `(i32) -> (i32)` |
| 24 | `zBof.jVrA` | func | `(i32) -> (i32)` |
| 25 | `zBof.Re3v` | func | `(i32 i32) -> ()` |
| 26 | `zBof.KywL` | func | `(i32 i32) -> (i32)` |
| 27 | `zBof.TtXt` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `zBof.Eybm` | func | `(i32) -> (i32)` |
| 29 | `zBof.e5Yj` | func | `(i32) -> (i32)` |
| 30 | `zBof.mjJ4` | func | `(i32) -> (i32)` |
| 31 | `zBof.BS84` | func | `(i32) -> (i32)` |
| 32 | `zBof.QMae` | func | `(i32) -> (i32)` |
| 33 | `zBof.erPv` | func | `(i32 i32 i32) -> ()` |
| 34 | `zBof.JpW7` | func | `(i32 i32) -> (i32)` |
| 35 | `zBof.q8Ze` | func | `(i32) -> (i32)` |
| 36 | `zBof.i4ia` | func | `(i32) -> ()` |
| 37 | `zBof.FM1w` | func | `(i32) -> (i32)` |
| 38 | `zBof.aInj` | func | `(i32) -> (i32)` |
| 39 | `zBof.kvm0` | func | `(i32) -> ()` |
| 40 | `zBof.pjxH` | func | `(i32 i32) -> (i32)` |
| 41 | `zBof.Sb9B` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `zBof.SBPN` | func | `(i32) -> ()` |
| 43 | `zBof.HxFa` | func | `(i32 i32) -> ()` |
| 44 | `zBof.gF6C` | func | `() -> (i32)` |
| 45 | `zBof.i613` | func | `(i32 i32) -> (i32)` |
| 46 | `zBof.yXVG` | func | `(i32 i32) -> (i32)` |
| 47 | `zBof.nrAT` | func | `(i32) -> (i32)` |
| 48 | `zBof.I3az` | func | `(i32) -> (i32)` |
| 49 | `zBof.YPvG` | func | `(i32) -> (i32)` |
| 50 | `zBof.zs6k` | func | `(i32 i32) -> ()` |
| 51 | `zBof.KnFj` | func | `(i32) -> (i32)` |
| 52 | `zBof.eQnH` | func | `(i32) -> ()` |
| 53 | `zBof.hJMi` | func | `(i32 i32) -> (i32)` |
| 54 | `zBof.TeEv` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `zBof.LOOU` | func | `(i32) -> (i32)` |
| 56 | `zBof.VBk2` | func | `(i32 i32 i32) -> ()` |
| 57 | `zBof.rhMR` | func | `(i32 i32) -> ()` |
| 58 | `zBof.tCQa` | func | `(i32) -> (i32)` |
| 59 | `zBof.j1Lx` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `zBof.w6pN` | func | `(i32) -> ()` |
| 61 | `zBof.T6lB` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `zBof.qyzy` | func | `(i32) -> ()` |
| 63 | `zBof.hBTc` | func | `(i32 i32 i32) -> ()` |
| 64 | `zBof.FaCW` | func | `(i32 i32) -> ()` |
| 65 | `zBof.LZXk` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `zBof.FcyT` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `zBof.M4Re` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `zBof.uVuX` | func | `(i32 i32 f64) -> ()` |
| 69 | `zBof.Gig0` | func | `(i32) -> (i32)` |
| 70 | `zBof.xiyo` | func | `(i32 i32) -> ()` |
| 71 | `zBof.tY48` | func | `(i32 i32 i32) -> ()` |
| 72 | `zBof.zkiQ` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `zBof.JiGr` | func | `(i32 i32 i32) -> ()` |
| 74 | `zBof.y9CG` | func | `(i32) -> ()` |
| 75 | `zBof.tp1a` | func | `(i32 i32) -> ()` |
| 76 | `zBof.Nq7p` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `zBof.wiO4` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `zBof.r6xP` | func | `(i32 i32 i32) -> ()` |
| 79 | `zBof.Maba` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `zBof.yxj0` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `zBof.u1s9` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `zBof.iT5P` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `zBof.qNrW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `zBof.X71s` | func | `(i32 i32 i32) -> ()` |
| 85 | `zBof.bpXm` | func | `(i32 i32) -> (i32)` |
| 86 | `zBof.bT3g` | func | `(i32) -> (i32)` |
| 87 | `zBof.B5Ly` | func | `(i32) -> (i32)` |
| 88 | `zBof.ULG4` | func | `(i32) -> (i32)` |
| 89 | `zBof.sMq3` | func | `(i32 i32) -> (i32)` |
| 90 | `zBof.ropi` | func | `(i32) -> ()` |
| 91 | `zBof.hm9T` | func | `(i32) -> (i32)` |
| 92 | `zBof.foDu` | func | `(i32 i32) -> (i32)` |
| 93 | `zBof.NjTW` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `zBof.MdWh` | func | `(i32 i32 i32) -> ()` |
| 95 | `zBof.di31` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `zBof.yNb4` | func | `() -> (f64)` |
| 97 | `zBof.oyQS` | func | `() -> (f64)` |
| 98 | `zBof.KHSv` | func | `(i32 i32) -> ()` |
| 99 | `zBof.R4VR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `zBof.UQpv` | func | `(i32) -> (i32)` |
| 101 | `zBof.z1qm` | func | `(i32) -> (i32)` |
| 102 | `zBof.D49c` | func | `(i32) -> (i32)` |
| 103 | `zBof.ks13` | func | `() -> (i32)` |
| 104 | `zBof.FNDj` | func | `() -> (i32)` |
| 105 | `zBof.gCX9` | func | `() -> (i32)` |
| 106 | `zBof.HBhI` | func | `() -> (i32)` |
| 107 | `zBof.mJ5U` | func | `(i32 i32) -> (i32)` |
| 108 | `zBof.f4EI` | func | `(i32) -> ()` |
| 109 | `zBof.DTHw` | func | `(i32 i32) -> (i32)` |
| 110 | `zBof.Bqy7` | func | `(i32) -> (i32)` |
| 111 | `zBof.ZPCI` | func | `() -> (f64)` |
| 112 | `zBof.At31` | func | `(i32) -> (i32)` |
| 113 | `zBof.dyji` | func | `(i32 i32) -> ()` |
| 114 | `zBof.r27w` | func | `(i32 i32) -> ()` |
| 115 | `zBof.nIZZ` | func | `(i32 i32) -> ()` |
| 116 | `zBof.syZ0` | func | `(i32 f32) -> ()` |
| 117 | `zBof.x77w` | func | `(i32 f32) -> ()` |
| 118 | `zBof.SGlf` | func | `(i32 i32) -> ()` |
| 119 | `zBof.j5B1` | func | `(i32 i32) -> ()` |
| 120 | `zBof.LBIq` | func | `(i32 i32) -> ()` |
| 121 | `zBof.MPU8` | func | `(i32 i32) -> ()` |
| 122 | `zBof.dexK` | func | `(i32 i32 i32) -> ()` |
| 123 | `zBof.VrHC` | func | `(i32 i32) -> (i32)` |
| 124 | `zBof.VvbM` | func | `(i32 i32) -> ()` |
| 125 | `zBof.VXg7` | func | `(i32 i32) -> ()` |
| 126 | `zBof.dFQe` | func | `(i32 i32) -> ()` |
| 127 | `zBof.i5Bl` | func | `(i32 i32) -> ()` |
| 128 | `zBof.ICdY` | func | `(i32 f64) -> ()` |
| 129 | `zBof.NtEl` | func | `(i32 f64) -> ()` |
| 130 | `zBof.euIs` | func | `(i32 i32) -> ()` |
| 131 | `zBof.BEW2` | func | `(i32 i32 i32) -> ()` |
| 132 | `zBof.jxJX` | func | `(i32 i32) -> ()` |
| 133 | `zBof.PkbH` | func | `(i32 i32) -> (i32)` |
| 134 | `zBof.Fktj` | func | `(i32 i32 i32) -> ()` |
| 135 | `zBof.Pk1H` | func | `(i32 i32 i32) -> ()` |
| 136 | `zBof.GXbo` | func | `(i32 i32) -> (i32)` |
| 137 | `zBof.PBxL` | func | `(i32 i32) -> (i32)` |
| 138 | `zBof.O0jY` | func | `(i32 i32 i32) -> ()` |
| 139 | `zBof.UsVF` | func | `(i32 i32 i32) -> ()` |
| 140 | `zBof.ML6J` | func | `(i32 i32) -> (i32)` |
| 141 | `zBof.M0jI` | func | `(i32 i32) -> ()` |
| 142 | `zBof.sEBV` | func | `(i32 i32) -> ()` |
| 143 | `zBof.ivdg` | func | `(i32 i32) -> ()` |
| 144 | `zBof.rgK7` | func | `(i32 i32) -> ()` |
| 145 | `zBof.D5H3` | func | `(i32 i32) -> ()` |
| 146 | `zBof.rpc8` | func | `(i32 i32) -> ()` |
| 147 | `zBof.xL4t` | func | `(i32 i32) -> ()` |
| 148 | `zBof.JyA3` | func | `(i32 f64) -> ()` |
| 149 | `zBof.FH0T` | func | `(i32 i32) -> ()` |
| 150 | `zBof.nhC3` | func | `(i32 i32) -> ()` |
| 151 | `zBof.yRnS` | func | `(i32 i32) -> ()` |
| 152 | `zBof.mZJw` | func | `(i32 i32) -> ()` |
| 153 | `zBof.Z4vH` | func | `(i32 i32) -> ()` |
| 154 | `zBof.QZr7` | func | `(i32 i32) -> ()` |
| 155 | `zBof.XAEv` | func | `(i32 i32) -> ()` |
| 156 | `zBof.Mtpq` | func | `(i32 i32) -> ()` |
| 157 | `zBof.U3zc` | func | `(i32 i32) -> ()` |
| 158 | `zBof.ISl9` | func | `(i32 i32 i32) -> ()` |
| 159 | `zBof.doxA` | func | `(i32 i32 i32) -> ()` |
| 160 | `zBof.qgPd` | func | `(i32 i32) -> (i32)` |
| 161 | `zBof.GsqV` | func | `(i32 i32) -> (i32)` |
| 162 | `zBof.KPAz` | func | `(i32 i32) -> ()` |
| 163 | `zBof.ZQdW` | func | `(i32 i32) -> ()` |
| 164 | `zBof.IbJa` | func | `(i32 f64) -> ()` |
| 165 | `zBof.VTKx` | func | `(i32 i32) -> ()` |
| 166 | `zBof.qmfn` | func | `(i32 i32) -> ()` |
| 167 | `zBof.XEhE` | func | `(i32 i32) -> ()` |
| 168 | `zBof.mP77` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `zBof.goI0` | func | `(i32 f64) -> ()` |
| 170 | `zBof.L5EO` | func | `(i32 f64) -> ()` |
| 171 | `zBof.ltu3` | func | `(i32 f64) -> ()` |
| 172 | `zBof.pOFA` | func | `(i32 f64) -> ()` |
| 173 | `zBof.hgLO` | func | `(i32 i32) -> ()` |
| 174 | `zBof.IT9f` | func | `(i32 i32) -> ()` |
| 175 | `zBof.kTsD` | func | `(i32 i32) -> ()` |
| 176 | `zBof.n6k5` | func | `(i32 i32) -> ()` |
| 177 | `zBof.Jy8i` | func | `(i32 i32) -> ()` |
| 178 | `zBof.mQHF` | func | `(i32 i32 i32) -> ()` |
| 179 | `zBof.vreS` | func | `(i32 i32) -> ()` |
| 180 | `zBof.dE5V` | func | `(i32 f32) -> ()` |
| 181 | `zBof.QVip` | func | `(i32 i32) -> ()` |
| 182 | `zBof.zH7q` | func | `(i32 i32) -> ()` |
| 183 | `zBof.v6Er` | func | `(i32 i32) -> ()` |
| 184 | `zBof.EpbL` | func | `(i32 i32) -> ()` |
| 185 | `zBof.LCx8` | func | `(i32 i32) -> ()` |
| 186 | `zBof.mRMV` | func | `(i32 i32) -> ()` |
| 187 | `zBof.UiJb` | func | `(i32 i32) -> ()` |
| 188 | `zBof.oJob` | func | `(i32 i32) -> ()` |
| 189 | `zBof.Fihe` | func | `(i32 i32) -> ()` |
| 190 | `zBof.OkIr` | func | `(i32 i32) -> ()` |
| 191 | `zBof.pOEw` | func | `(i32 i32) -> ()` |
| 192 | `zBof.uLAC` | func | `(i32 i32) -> ()` |
| 193 | `zBof.NPM5` | func | `(i32 i32) -> (i32)` |
| 194 | `zBof.vYw2` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `zBof.y1TZ` | func | `(i32 i32) -> ()` |
| 196 | `zBof.aNAt` | func | `(i32 i32 i32) -> ()` |
| 197 | `zBof.AFov` | func | `(i32 i32) -> (i32)` |
| 198 | `zBof.tZbn` | func | `(i32) -> (i32)` |
| 199 | `zBof.Owrn` | func | `(i32 i32) -> ()` |
| 200 | `zBof.CvgO` | func | `(i32 i32) -> ()` |
| 201 | `zBof.a4eD` | func | `(i32 i32) -> ()` |
| 202 | `zBof.tNu1` | func | `(i32 i32) -> ()` |
| 203 | `zBof.ZFGz` | func | `(i32 i32) -> ()` |
| 204 | `zBof.INNw` | func | `(i32 i32) -> ()` |
| 205 | `zBof.VRvT` | func | `(i32 i32) -> ()` |
| 206 | `zBof.rmBy` | func | `(i32 i32) -> ()` |
| 207 | `zBof.Ddec` | func | `(i32) -> (i32)` |
| 208 | `zBof.edoG` | func | `(i32 i32 i32) -> ()` |
| 209 | `zBof.JPqO` | func | `(i32 i32) -> ()` |
| 210 | `zBof.Kxxz` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `zBof.D13t` | func | `(i32 i32) -> ()` |
| 212 | `zBof.SCkg` | func | `(i32) -> ()` |
| 213 | `zBof.hLUl` | func | `(i32 i32) -> ()` |
| 214 | `zBof.tGgd` | func | `(i32) -> (i32)` |
| 215 | `zBof.X13b` | func | `(i32 i32 i32) -> ()` |
| 216 | `zBof.TswC` | func | `(i32 i32) -> ()` |
| 217 | `zBof.B4hg` | func | `(i32 i32) -> ()` |
| 218 | `zBof.E5SD` | func | `(i32 i32) -> ()` |
| 219 | `zBof.J8sC` | func | `(i32 i32) -> ()` |
| 220 | `zBof.N7o2` | func | `(i32 i32) -> (i32)` |
| 221 | `zBof.eLit` | func | `(i32 i32) -> ()` |
| 222 | `zBof.PIQ2` | func | `(i32 i32) -> ()` |
| 223 | `zBof.MsYl` | func | `(i32 i32) -> ()` |
| 224 | `zBof.WIwk` | func | `(i32 i32) -> ()` |
| 225 | `zBof.SiEp` | func | `(i32 i32) -> ()` |
| 226 | `zBof.rnav` | func | `(i32 i32) -> ()` |
| 227 | `zBof.h8AH` | func | `(i32 i32) -> ()` |
| 228 | `zBof.kV3V` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `zBof.Du2O` | func | `(i32) -> (i32)` |
| 230 | `zBof.RsCb` | func | `(i32) -> ()` |
| 231 | `zBof.yIyA` | func | `(i32 f64) -> ()` |
| 232 | `zBof.imCG` | func | `(i32 i32) -> ()` |
| 233 | `zBof.rkwM` | func | `(i32 i32) -> ()` |
| 234 | `zBof.Uq9n` | func | `(i32 i32 i32) -> ()` |
| 235 | `zBof.ayUT` | func | `(i32 i32) -> (i32)` |
| 236 | `zBof.rgqC` | func | `(i32 i32) -> ()` |
| 237 | `zBof.YlJM` | func | `(i32 i32) -> ()` |
| 238 | `zBof.iQuk` | func | `(i32 i32) -> ()` |
| 239 | `zBof.Mzeg` | func | `(i32 i32 i32) -> ()` |
| 240 | `zBof.ocgv` | func | `(i32 i32) -> ()` |
| 241 | `zBof.VWwW` | func | `(i32 i32) -> ()` |
| 242 | `zBof.BZoh` | func | `(i32 i32) -> ()` |
| 243 | `zBof.jhaG` | func | `(i32 i32 i32) -> ()` |
| 244 | `zBof.fekp` | func | `(i32 i32) -> ()` |
| 245 | `zBof.Dd8m` | func | `(i32 i32) -> ()` |
| 246 | `zBof.gnI7` | func | `(i32 i32 i32) -> ()` |
| 247 | `zBof.D9A1` | func | `(i32 i32) -> (i32)` |
| 248 | `zBof.nLXC` | func | `(i32 i32) -> ()` |
| 249 | `zBof.clR1` | func | `(i32 i32 i32) -> ()` |
| 250 | `zBof.edQl` | func | `(i32 i32) -> ()` |
| 251 | `zBof.lwmr` | func | `(i32 f64) -> ()` |
| 252 | `zBof.J0rx` | func | `(i32 i32) -> ()` |
| 253 | `zBof.JIcS` | func | `(i32 f64) -> ()` |
| 254 | `zBof.bhlD` | func | `(i32 i32 i32) -> ()` |
| 255 | `zBof.xQY0` | func | `(i32 i32) -> ()` |
| 256 | `zBof.WB59` | func | `(i32 i32 i32) -> ()` |
| 257 | `zBof.k891` | func | `(i32 i32) -> ()` |
| 258 | `zBof.Q9Ii` | func | `(i32 i32) -> ()` |
| 259 | `zBof.FIHS` | func | `(i32 i32) -> ()` |
| 260 | `zBof.BXGX` | func | `(i32 i32 i32) -> ()` |
| 261 | `zBof.t9Ff` | func | `(i32 i32) -> ()` |
| 262 | `zBof.nGwD` | func | `(i32 i32) -> ()` |
| 263 | `zBof.vJUO` | func | `(i32 i32) -> ()` |
| 264 | `zBof.PscA` | func | `(i32 i32) -> ()` |
| 265 | `zBof.pkXC` | func | `(i32 f32) -> ()` |
| 266 | `zBof.YWu7` | func | `(i32 f32) -> ()` |
| 267 | `zBof.Igf0` | func | `(i32 i32) -> ()` |
| 268 | `zBof.haM6` | func | `(i32 i32) -> ()` |
| 269 | `zBof.wz3K` | func | `(i32 i32) -> ()` |
| 270 | `zBof.LkZZ` | func | `(i32 i32) -> ()` |
| 271 | `zBof.w6su` | func | `(i32 i32) -> ()` |
| 272 | `zBof.V3EM` | func | `(i32 i32) -> ()` |
| 273 | `zBof.djzL` | func | `(i32 i32) -> ()` |
| 274 | `zBof.PXx3` | func | `(i32 i32) -> ()` |
| 275 | `zBof.ldRd` | func | `(i32 i32) -> ()` |
| 276 | `zBof.JONs` | func | `(i32 i32) -> ()` |
| 277 | `zBof.NINP` | func | `(i32 i32) -> ()` |
| 278 | `zBof.N3yc` | func | `(i32 i32) -> ()` |
| 279 | `zBof.MVHd` | func | `(i32 i32) -> ()` |
| 280 | `zBof.Z7XC` | func | `(i32 i32) -> ()` |
| 281 | `zBof.fJET` | func | `(i32 i32) -> ()` |
| 282 | `zBof.rF1P` | func | `(i32 i32) -> ()` |
| 283 | `zBof.Hnsh` | func | `(i32 i32) -> ()` |
| 284 | `zBof.S07e` | func | `(i32 i32) -> ()` |
| 285 | `zBof.rS6B` | func | `(i32 i32 i32) -> ()` |
| 286 | `zBof.HnRB` | func | `(i32 i32 i32) -> ()` |
| 287 | `zBof.AMAR` | func | `(i32 i32) -> ()` |
| 288 | `zBof.FVL7` | func | `(i32 i32) -> ()` |
| 289 | `zBof.LkWN` | func | `(i32 i32) -> ()` |
| 290 | `zBof.chn3` | func | `(i32 i32) -> ()` |
| 291 | `zBof.tpLH` | func | `(i32 i32) -> ()` |
| 292 | `zBof.xboQ` | func | `(i32 i32) -> ()` |
| 293 | `zBof.glGQ` | func | `(i32 i32) -> ()` |
| 294 | `zBof.Zzrc` | func | `(i32 i32) -> ()` |
| 295 | `zBof.emoL` | func | `(i32 i32) -> ()` |
| 296 | `zBof.vOjU` | func | `(i32 i32) -> ()` |
| 297 | `zBof.CkTS` | func | `(i32 i32) -> ()` |
| 298 | `zBof.GaMt` | func | `(i32 i32) -> (i32)` |
| 299 | `zBof.S2lh` | func | `(i32 i32) -> ()` |
| 300 | `zBof.FJkW` | func | `(i32 i32 i32) -> ()` |
| 301 | `zBof.Kwg1` | func | `(i32 i32) -> ()` |
| 302 | `zBof.EW00` | func | `(i32 i32) -> ()` |
| 303 | `zBof.Qbcb` | func | `(i32 i32) -> ()` |
| 304 | `zBof.GICI` | func | `(i32 i32 i32) -> ()` |
| 305 | `zBof.v1p9` | func | `(i32 i32) -> (i32)` |
| 306 | `zBof.Bqyx` | func | `(i32 i32 i32) -> ()` |
| 307 | `zBof.yKk9` | func | `(i32 i32 i32) -> ()` |
| 308 | `zBof.yk7R` | func | `(i32 i32) -> ()` |
| 309 | `zBof.zyAj` | func | `(i32 i32) -> ()` |
| 310 | `zBof.f2lX` | func | `(i32 i32) -> ()` |
| 311 | `zBof.JF8W` | func | `(i32 i32) -> ()` |
| 312 | `zBof.RnEi` | func | `(i32 i32) -> (i32)` |
| 313 | `zBof.dB0J` | func | `(i32) -> (i32)` |
| 314 | `zBof.x8dE` | func | `(i32) -> (i32)` |
| 315 | `zBof.aO4D` | func | `(i32) -> (i32)` |
| 316 | `zBof.RXHl` | func | `(i32) -> (i32)` |
| 317 | `zBof.RFMB` | func | `(i32) -> (i32)` |
| 318 | `zBof.dpFP` | func | `(i32) -> (i32)` |
| 319 | `zBof.gYd8` | func | `(i32) -> (i32)` |
| 320 | `zBof.AI1H` | func | `(i32) -> (i32)` |
| 321 | `zBof.US4W` | func | `(i32) -> (i32)` |
| 322 | `zBof.MJtg` | func | `(i32) -> (i32)` |
| 323 | `zBof.OsU1` | func | `(i32) -> (i32)` |
| 324 | `zBof.VFFb` | func | `(i32) -> (i32)` |
| 325 | `zBof.ijnH` | func | `(i32) -> (i32)` |
| 326 | `zBof.agQ3` | func | `(i32) -> (i32)` |
| 327 | `zBof.iHe4` | func | `(i32) -> (f64)` |
| 328 | `zBof.seQj` | func | `(i32) -> (f64)` |
| 329 | `zBof.aqOM` | func | `(i32) -> (i32)` |
| 330 | `zBof.VBYT` | func | `(i32) -> (f64)` |
| 331 | `zBof.zzdo` | func | `(i32) -> (i32)` |
| 332 | `zBof.fHJO` | func | `(i32) -> (i32)` |
| 333 | `zBof.b3jQ` | func | `(i32) -> (i32)` |
| 334 | `zBof.ZiMO` | func | `(i32) -> (i32)` |
| 335 | `zBof.joKY` | func | `(i32) -> (i32)` |
| 336 | `zBof.oRSW` | func | `(i32) -> (i32)` |
| 337 | `zBof.C8Uf` | func | `(i32) -> (i32)` |
| 338 | `zBof.Wp32` | func | `(i32) -> (i32)` |
| 339 | `zBof.mOJN` | func | `(i32) -> (i32)` |
| 340 | `zBof.OeJd` | func | `(i32) -> (i32)` |
| 341 | `zBof.vHid` | func | `(i32) -> (i32)` |
| 342 | `zBof.TNav` | func | `(i32) -> (i32)` |
| 343 | `zBof.u685` | func | `(i32) -> (i32)` |
| 344 | `zBof.Ffia` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `zBof.ozxu` | func | `() -> (i32)` |
| 346 | `zBof.Tyto` | func | `(i32 i32) -> ()` |
| 347 | `zBof.Oboe` | func | `(i32 i32 i32) -> ()` |
| 348 | `zBof.BLmt` | func | `(i32 i32 i32) -> ()` |
| 349 | `zBof.e0rF` | func | `(i32 i32) -> (i32)` |
| 350 | `zBof.WFXf` | func | `(i32) -> (i32)` |
| 351 | `zBof.uhbk` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `zBof.sp0F` | func | `(i32) -> ()` |
| 353 | `zBof.b8Av` | func | `(i32) -> (i32)` |
| 354 | `zBof.xrwQ` | func | `(i32 i32) -> ()` |
| 355 | `zBof.l6dc` | func | `(i32) -> (i32)` |
| 356 | `zBof.eeC6` | func | `(i32) -> (i32)` |
| 357 | `zBof.zkrP` | func | `(i32) -> (i32)` |
| 358 | `zBof.lbJj` | func | `(i32) -> (i32)` |
| 359 | `zBof.CVTu` | func | `(i32) -> (i32)` |
| 360 | `zBof.pWUc` | func | `(i32 i32) -> ()` |
| 361 | `zBof.znaw` | func | `(i32 i32) -> ()` |
| 362 | `zBof.WIQo` | func | `(i32 i32) -> ()` |
| 363 | `zBof.Z65z` | func | `(i32 i32) -> ()` |
| 364 | `zBof.L4UZ` | func | `(i32 i32) -> ()` |
| 365 | `zBof.yRgZ` | func | `(i32 i32) -> ()` |
| 366 | `zBof.bAgL` | func | `(i32 i32) -> ()` |
| 367 | `zBof.UdEm` | func | `(i32 i32 i32) -> ()` |
| 368 | `zBof.BpA1` | func | `(i32 i32) -> ()` |
| 369 | `zBof.Au2A` | func | `(i32 i32) -> (i32)` |
| 370 | `zBof.sAJL` | func | `(i32) -> (i32)` |
| 371 | `zBof.vkC2` | func | `(i32) -> (i32)` |
| 372 | `zBof.hHFL` | func | `(i32 i32) -> ()` |
| 373 | `zBof.KhOP` | func | `(i32) -> (i32)` |
| 374 | `zBof.ChZl` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `zBof.k2Zz` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `zBof.kNyK` | func | `(i32 i32) -> ()` |
| 377 | `zBof.NVjj` | func | `(i32) -> (i32)` |
| 378 | `zBof.M4nW` | func | `(i32) -> (i32)` |
| 379 | `zBof.ZHeq` | func | `(i32) -> (i32)` |
| 380 | `zBof.Cztk` | func | `(i32) -> (i32)` |
| 381 | `zBof.Nl0Y` | func | `(i32) -> (i32)` |
| 382 | `zBof.vNaB` | func | `(i32) -> (i32)` |
| 383 | `zBof.OVF8` | func | `(i32 i32) -> ()` |
| 384 | `zBof.qo22` | func | `(i32 i32) -> (i32)` |
| 385 | `zBof.GaBj` | func | `(i32 i32) -> (i32)` |
| 386 | `zBof.GS8o` | func | `(i32 i32) -> (i32)` |
| 387 | `zBof.VG6m` | func | `(i32 i32) -> (i32)` |
| 388 | `zBof.JiOQ` | func | `(i32 i32) -> (i32)` |
| 389 | `zBof.uzMm` | func | `(i32 i32) -> (i32)` |
| 390 | `zBof.FBLs` | func | `(f64) -> (i32)` |
| 391 | `zBof.ifA8` | func | `(i32 i32) -> (i32)` |
| 392 | `zBof.g5Q8` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `pewD` | func | 2594 | `(i32 i32) -> (i32)` |
| `OoIs` | func | 830 | `(i32) -> (i32)` |
| `MVgK` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Jhqx` | func | 2544 | `(i32 i32) -> ()` |
| `V8Xx` | func | 1547 | `(i32 i32 i32 i32) -> ()` |
| `UTE9` | func | 1835 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `zUyX` | func | 1620 | `(i32 i32 i32) -> (i32)` |
| `PkAv` | func | 3089 | `(i32 i32 i32 i32) -> (i32)` |
| `zIej` | func | 1724 | `(i32 i32 i32 i32) -> (i32)` |
| `QmGl` | func | 1983 | `(i32) -> ()` |
| `oo2H` | global | 1 | `` |
| `cS3p` | func | 1906 | `() -> (i32)` |
| `KbMi` | func | 2424 | `(i32 i32) -> (i32)` |
| `IEf5` | func | 3134 | `(i32) -> (i32 i32)` |
| `pJkg` | func | 1257 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `pzp3` | func | 2369 | `(i32 i32) -> ()` |
| `sF2g` | func | 3149 | `() -> (i32 i32)` |
| `BvMy` | func | 1593 | `(i32 i32) -> (i32)` |
| `vCIv` | func | 1520 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `DUPP` | func | 2912 | `(i32) -> ()` |
| `pc7X` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `LCrA` | func | 2290 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `xiPR` | func | 2650 | `() -> (i32)` |
| `ecRu` | func | 3123 | `(i32 i32) -> (i32 i32)` |
| `l6KC` | func | 1371 | `(i32) -> (i32)` |
| `BvA2` | func | 2563 | `(i32) -> (i32)` |
| `Gyft` | func | 2566 | `(i32) -> (i32)` |
| `O0Oy` | func | 1305 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Y1sf` | func | 3304 | `(i32) -> (i32)` |
| `JHmZ` | func | 1681 | `(i32 i32) -> ()` |
| `nVfm` | func | 1829 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Jaws` | func | 2456 | `(i32 i32) -> (i32)` |
| `CN30` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `ZBJ3` | func | 2900 | `(i32) -> (i32)` |
| `LDYQ` | func | 2562 | `(i32) -> (i32)` |
| `OMky` | func | 1349 | `(i32 i32 i32) -> ()` |
| `nIO7` | func | 3256 | `() -> ()` |
| `h5HN` | func | 2421 | `(i32 i32) -> (i32)` |
| `BCzi` | func | 2046 | `(i32 i32 i32 i32) -> ()` |
| `Yof6` | func | 1201 | `(i32 i32) -> ()` |
| `jx2n` | func | 3185 | `(i32 i32 i32) -> (i32)` |
| `ipDd` | func | 1492 | `(i32 i32) -> (i32)` |
| `iD0e` | func | 2027 | `(i32) -> (i32)` |
| `DP2s` | func | 2231 | `(i32 i32) -> (i32)` |
| `Lu0v` | func | 1682 | `(i32 i32) -> ()` |
| `tHGo` | func | 3136 | `(i32) -> (i32 i32)` |
| `WiEq` | func | 1528 | `(i32) -> (i32)` |
| `Ijyd` | func | 2270 | `(i32 i32) -> (i32)` |
| `oGkq` | func | 2603 | `(i32) -> (i32)` |
| `RfHX` | func | 1403 | `(i32) -> ()` |
| `Y2F3` | func | 1929 | `(i32 i32 i32 i32) -> (i32)` |
| `M2TY` | func | 1579 | `(i32 i32) -> (i32)` |
| `AJSU` | func | 2515 | `(i32) -> (i32)` |
| `U5BL` | func | 1607 | `(i32 i32) -> (i32)` |
| `KASa` | func | 3176 | `(i32 i32 i32 i32) -> ()` |
| `ThxO` | func | 3125 | `(i32 i32) -> (i32 i32)` |
| `RKF0` | func | 2135 | `(i32 i32) -> ()` |
| `O0fn` | func | 3215 | `() -> (i32)` |
| `T6z2` | func | 2579 | `(i32 i32) -> ()` |
| `lxbD` | func | 2044 | `(i32) -> (i32)` |
| `J0I5` | func | 3112 | `(i32 i32 i32) -> (i32 i32)` |
| `DqF2` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `HstA` | func | 3329 | `() -> (i32)` |
| `oG84` | func | 2567 | `(i32) -> ()` |
| `bdVn` | func | 2471 | `(i32 i32 i32 i32) -> (i32)` |
| `F0oM` | func | 1975 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `wxRP` | func | 2422 | `(i32 i32) -> (i32)` |
| `Lux9` | func | 3083 | `(i32 i32) -> (i32)` |
| `pwoG` | func | 1525 | `() -> (i32)` |
| `ljem` | func | 1686 | `(i32 f64 f64 f64) -> (i32)` |
| `fhZt` | func | 2342 | `(i32 i32) -> ()` |
| `lMlO` | func | 3124 | `(i32 i32) -> (i32 i32)` |
| `R1mP` | func | 3120 | `(i32 i32) -> (i32 i32)` |
| `eVOX` | func | 2564 | `(i32) -> (i32)` |
| `o3yQ` | func | 798 | `(i32 i32) -> (i32)` |
| `yhf6` | func | 2602 | `(i32) -> (i32)` |
| `Q5EF` | func | 2498 | `(i32) -> (i32)` |
| `vkdO` | func | 3095 | `(i32 i32) -> ()` |
| `xHsV` | func | 1968 | `(i32 i32) -> (i32)` |
| `wxTN` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `l6Tm` | func | 1297 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `ZyyN` | func | 1982 | `(i32) -> ()` |
| `Eqv6` | func | 1298 | `(i32 i32 i32 i32) -> (i32)` |
| `lGow` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `or2d` | func | 2583 | `(i32) -> (i32)` |
| `Tf3F` | func | 1609 | `(i32 f64) -> (f64)` |
| `RJxf` | func | 2119 | `(i32 f64 f64 f64) -> (i32)` |
| `Lbcx` | func | 2570 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `b7uo` | func | 2568 | `(i32) -> (i32)` |
| `hIID` | func | 2466 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `GMgj` | func | 2157 | `(i32 i32) -> (i32)` |
| `m94I` | func | 2633 | `(i32 i32) -> ()` |
| `JMsU` | func | 1561 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `mYBV` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `UPyF` | func | 2561 | `(i32) -> (i32)` |
| `PtTA` | func | 2584 | `(i32) -> (i32)` |
| `BxvM` | func | 2565 | `(i32) -> (i32)` |
| `pj04` | func | 2864 | `(i32) -> (i32)` |
| `bjAX` | func | 1466 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `OVi9` | func | 2569 | `(i32) -> (i32)` |
| `xbfj` | func | 1606 | `(i32 i32) -> (i32)` |
| `AmYV` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `aNuw` | func | 1951 | `(i32 i32 f64 f64 f64) -> ()` |
| `x6MY` | func | 1789 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `XO3a` | func | 3137 | `(i32) -> (i32 i32)` |
| `zMpF` | func | 1345 | `(i32 i32 i32) -> (i32)` |
| `fFe3` | func | 2684 | `() -> (i32)` |
| `ZyDA` | func | 2889 | `(i32) -> (i32)` |
| `h5ta` | func | 659 | `(i32 i32 i32) -> (i32)` |
| `cLKy` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `iqSH` | func | 1417 | `(i32 i32 i32) -> (i32)` |
| `vakJ` | func | 3133 | `(i32) -> (i32 i32)` |
| `qUIb` | func | 3254 | `(i32) -> ()` |
| `g5U7` | func | 1848 | `(i32 i32) -> (i32)` |
| `ponT` | func | 1641 | `(i32 i32 i32 i32) -> (i32)` |
| `HBVk` | func | 1327 | `(i32 i32) -> (i32)` |
| `SyB4` | func | 2079 | `(i32 i32) -> ()` |
| `rz90` | func | 1571 | `(i32 i32 i32 i32) -> (i32)` |
| `ewww` | func | 2683 | `(i32 i32) -> ()` |
| `k052` | func | 3121 | `(i32 i32) -> (i32 i32)` |
| `BRJW` | func | 1566 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ovsc` | func | 2593 | `(i32 i32) -> (i32)` |
| `EF2v` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `NBLR` | func | 2586 | `(i32) -> (i32)` |
| `zauB` | func | 3151 | `() -> (i32 i32)` |
| `TpnC` | func | 3305 | `(i32) -> ()` |
| `hkpQ` | func | 1957 | `(i32 i32) -> ()` |
| `Stk5` | func | 770 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NskC` | func | 2872 | `(i32) -> (i32)` |
| `qVBK` | func | 3245 | `(i32 i32 i32) -> ()` |
| `AT4C` | func | 2935 | `(i32) -> (i32)` |
| `YnmE` | func | 759 | `(i32 i32) -> (i32)` |
| `Ebxa` | func | 3135 | `(i32) -> (i32 i32)` |
| `eDxo` | func | 3122 | `(i32 i32) -> (i32 i32)` |
| `sNh4` | func | 897 | `(i32 i32) -> (i32)` |
| `ECzw` | func | 3187 | `(i32 i32 i32) -> ()` |
| `ZBNT` | func | 3328 | `() -> (i32)` |
| `pj2z` | func | 3300 | `() -> (f64)` |
| `S13w` | func | 3126 | `(i32 i32) -> (i32 i32)` |
| `p7p0` | func | 3063 | `() -> ()` |
| `kMTX` | func | 969 | `(i32 i32) -> (i32)` |
| `M1dH` | func | 2545 | `(i32) -> (i32)` |
| `ZzT2` | func | 1913 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `kQf7` | func | 1671 | `(i32 i32) -> (i32)` |
| `FdmB` | func | 2423 | `(i32 i32) -> (i32)` |
| `QCiq` | func | 1200 | `(i32 i32) -> (i32)` |
| `MAWC` | func | 2560 | `(i32) -> (f64)` |
| `DSuJ` | func | 2601 | `(i32) -> (i32)` |
| `FTjn` | func | 2585 | `(i32 i32) -> ()` |
| `NctP` | func | 1467 | `(i32 f64 f64) -> (i32)` |
| `ebLk` | func | 1572 | `(i32) -> (i32)` |
| `p76t` | func | 1377 | `(i32 i32) -> (i32)` |
| `CpdB` | func | 2592 | `(i32) -> (i32)` |
| `fHc0` | func | 2104 | `(i32 f64) -> (i32)` |
| `B063` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `qcO7` | func | 2343 | `(i32 f64) -> (i32)` |
| `amPJ` | global | 2 | `` |
| `f6hD` | func | 1811 | `(i32) -> (i32)` |
| `l2w9` | func | 3150 | `() -> (i32 i32)` |

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
