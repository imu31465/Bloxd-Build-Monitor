# WASM module: `bloxd_wasm_webgl_bg`

> environment **staging.bloxd.io** · build `7zvlu.7df130a9` · analyzed 2026-11-25T05:21:40+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl_bg.3ada84f28cb67a6073b9.wasm
> 5,516,677 bytes (5.3 MB) · sha256 `312dff8c1bb47e85…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `99ade58b933f96cf.10913` → `aad941a8498ac5d1.10913` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,914 / 299 |
| Exports / imports | 157 / 300 |
| Code bytes (function bodies) | 4,043,172 (3.9 MB) |
| Total local variables | 30,791 |
| Instructions (scanable bodies) | 1,895,853 |
| Data segments / bytes | 4,033 / 1,424,644 |
| Element segments / entries | 1 / 752 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `aad941a8498ac5d1.10913` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,506 | 177 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,965 | 2914 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,511 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,048,514 | 2914 |
| 11 | data | 1,457,214 | 4033 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `ZTOt.gCeX` | memory | `[128..14648]` |
| 0 | `ZTOt.AgFy` | func | `(i32) -> (f64)` |
| 1 | `ZTOt.D1Jf` | func | `() -> (i32)` |
| 2 | `ZTOt.olzm` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `ZTOt.O6zT` | func | `(i32) -> ()` |
| 4 | `ZTOt.lKAL` | func | `(i32 i32) -> (i32)` |
| 5 | `ZTOt.eqAx` | func | `(i32) -> (i32)` |
| 6 | `ZTOt.PwZ7` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `ZTOt.JPxp` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `ZTOt.N7n3` | func | `(i32) -> (i32)` |
| 9 | `ZTOt.yBM0` | func | `(i32 i32) -> ()` |
| 10 | `ZTOt.YFSa` | func | `(i32 i32) -> ()` |
| 11 | `ZTOt.CI38` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `ZTOt.bhi9` | func | `(i32 i32) -> (i32)` |
| 13 | `ZTOt.WyKP` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `ZTOt.qkvJ` | func | `(i32) -> (i32)` |
| 15 | `ZTOt.WGxr` | func | `(i32 i32) -> (i32)` |
| 16 | `ZTOt.UmHR` | func | `(i32 i32) -> (i32)` |
| 17 | `ZTOt.ET0G` | func | `(i32 i32) -> ()` |
| 18 | `ZTOt.G4RP` | func | `(i32) -> (i32)` |
| 19 | `ZTOt.QtaM` | func | `(i32) -> (i32)` |
| 20 | `ZTOt.aYwn` | func | `(i32) -> (i32)` |
| 21 | `ZTOt.E7L4` | func | `(i32) -> ()` |
| 22 | `ZTOt.WZgA` | func | `(i32 i32) -> ()` |
| 23 | `ZTOt.FHtQ` | func | `(i32 i32) -> ()` |
| 24 | `ZTOt.rqT7` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `ZTOt.HfL8` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `ZTOt.nhfR` | func | `(i32) -> (i32)` |
| 27 | `ZTOt.Co7e` | func | `(i32 i32) -> ()` |
| 28 | `ZTOt.RijO` | func | `(i32 i32) -> (i32)` |
| 29 | `ZTOt.PReE` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `ZTOt.vgiX` | func | `(i32 i32) -> (i32)` |
| 31 | `ZTOt.SRtJ` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `ZTOt.zSKf` | func | `(i32) -> (i32)` |
| 33 | `ZTOt.vFBM` | func | `(i32 i32) -> ()` |
| 34 | `ZTOt.nsG0` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `ZTOt.p5YH` | func | `(i32) -> (i32)` |
| 36 | `ZTOt.s9It` | func | `(i32) -> (i32)` |
| 37 | `ZTOt.rVPS` | func | `(i32) -> (i32)` |
| 38 | `ZTOt.RZxm` | func | `(i32 i32) -> (i32)` |
| 39 | `ZTOt.y5Ww` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `ZTOt.RgRi` | func | `(i32) -> (i32)` |
| 41 | `ZTOt.ruZV` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `ZTOt.LL4N` | func | `() -> (f64)` |
| 43 | `ZTOt.cvjc` | func | `(i32) -> (i32)` |
| 44 | `ZTOt.tm1S` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `ZTOt.G04A` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `ZTOt.lU5t` | func | `(i32 i32 i32) -> ()` |
| 47 | `ZTOt.rLTL` | func | `(i32 i32 i32) -> ()` |
| 48 | `ZTOt.fsiW` | func | `(i32 i32 i32) -> ()` |
| 49 | `ZTOt.kg3Z` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `ZTOt.oroq` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `ZTOt.rjnM` | func | `(i32 i32) -> ()` |
| 52 | `ZTOt.FZRE` | func | `(i32 i32) -> ()` |
| 53 | `ZTOt.Dssg` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `ZTOt.yiDy` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `ZTOt.be3t` | func | `(i32 f32 f32) -> ()` |
| 56 | `ZTOt.utJI` | func | `(i32 f32 f32) -> ()` |
| 57 | `ZTOt.O14u` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `ZTOt.q1vb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `ZTOt.iALQ` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `ZTOt.uLRD` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `ZTOt.Ze4e` | func | `(i32 i32 i32) -> ()` |
| 62 | `ZTOt.CJi6` | func | `(i32 i32 i32) -> ()` |
| 63 | `ZTOt.mU59` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `ZTOt.wk9P` | func | `(i32 i32 i32) -> ()` |
| 65 | `ZTOt.m6LI` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `ZTOt.dApe` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `ZTOt.dDq0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `ZTOt.ssJT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `ZTOt.Vqir` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `ZTOt.Jktd` | func | `(i32) -> (i32)` |
| 71 | `ZTOt.Rkfd` | func | `(i32) -> ()` |
| 72 | `ZTOt.YuVV` | func | `(i32) -> (i32)` |
| 73 | `ZTOt.IYjv` | func | `(i32 i32) -> (i32)` |
| 74 | `ZTOt.Ylvz` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `ZTOt.kkSn` | func | `(i32 i32 i32) -> ()` |
| 76 | `ZTOt.qQV6` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `ZTOt.TJO1` | func | `() -> (f64)` |
| 78 | `ZTOt.VCJF` | func | `() -> (f64)` |
| 79 | `ZTOt.Fdfr` | func | `(i32 i32) -> ()` |
| 80 | `ZTOt.jq77` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `ZTOt.bEqT` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `ZTOt.d7OE` | func | `(i32 i32 i32) -> ()` |
| 83 | `ZTOt.f3iT` | func | `(i32 i32 i32) -> ()` |
| 84 | `ZTOt.LVxt` | func | `(i32 i32) -> ()` |
| 85 | `ZTOt.oKQj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `ZTOt.RPW3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `ZTOt.UyoP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `ZTOt.HhJn` | func | `(i32 i32) -> ()` |
| 89 | `ZTOt.wwF7` | func | `(i32 i32) -> ()` |
| 90 | `ZTOt.fM2l` | func | `(i32) -> (i32)` |
| 91 | `ZTOt.eOV3` | func | `(i32 i32 i32) -> ()` |
| 92 | `ZTOt.z6nG` | func | `(i32 i32 i32) -> ()` |
| 93 | `ZTOt.nFQ8` | func | `(i32) -> (i32)` |
| 94 | `ZTOt.FKpt` | func | `(i32) -> (i32)` |
| 95 | `ZTOt.MKia` | func | `(i32 i32) -> ()` |
| 96 | `ZTOt.E0lG` | func | `(i32 i32) -> ()` |
| 97 | `ZTOt.v3Ka` | func | `(i32 i32) -> ()` |
| 98 | `ZTOt.oz7E` | func | `(i32 i32) -> ()` |
| 99 | `ZTOt.FiXS` | func | `(i32 i32 i32) -> ()` |
| 100 | `ZTOt.KR0n` | func | `(i32 i32 i32) -> ()` |
| 101 | `ZTOt.uIIh` | func | `(i32 i32 f32) -> ()` |
| 102 | `ZTOt.jwhr` | func | `(i32 i32 f32) -> ()` |
| 103 | `ZTOt.MXHH` | func | `(i32 i32 i32) -> ()` |
| 104 | `ZTOt.s3JL` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `ZTOt.Vl6b` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `ZTOt.f8A6` | func | `(i32 i32) -> ()` |
| 107 | `ZTOt.SiJe` | func | `(i32 i32) -> ()` |
| 108 | `ZTOt.mt4n` | func | `(i32 i32) -> ()` |
| 109 | `ZTOt.utoo` | func | `(i32 i32) -> ()` |
| 110 | `ZTOt.hQjf` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `ZTOt.QK2v` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `ZTOt.rTmO` | func | `(i32 i32 i32) -> ()` |
| 113 | `ZTOt.zTky` | func | `(i32 i32 i32) -> ()` |
| 114 | `ZTOt.tnyd` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `ZTOt.BWuc` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `ZTOt.wzun` | func | `(i32 i32) -> ()` |
| 117 | `ZTOt.NsiP` | func | `(i32 i32) -> ()` |
| 118 | `ZTOt.JyXI` | func | `(i32 i32) -> (i32)` |
| 119 | `ZTOt.BNxc` | func | `(i32 i32) -> (i32)` |
| 120 | `ZTOt.XvJ5` | func | `(i32 i32) -> ()` |
| 121 | `ZTOt.ELIT` | func | `(i32 i32) -> ()` |
| 122 | `ZTOt.pVBo` | func | `(i32) -> (i32)` |
| 123 | `ZTOt.Lv0n` | func | `(i32 i32) -> ()` |
| 124 | `ZTOt.c2WX` | func | `(i32 i32) -> ()` |
| 125 | `ZTOt.uJSQ` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `ZTOt.qVgN` | func | `(i32 i32 i32) -> ()` |
| 127 | `ZTOt.dxJB` | func | `(i32 i32 i32) -> ()` |
| 128 | `ZTOt.ok43` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `ZTOt.tjms` | func | `(i32 i32) -> ()` |
| 130 | `ZTOt.RVK9` | func | `(i32 i32 i32) -> ()` |
| 131 | `ZTOt.TFXQ` | func | `(i32 i32 i32) -> ()` |
| 132 | `ZTOt.SrDh` | func | `(i32 i32 i32) -> ()` |
| 133 | `ZTOt.oUhC` | func | `(i32 i32 i32) -> ()` |
| 134 | `ZTOt.ploB` | func | `(i32) -> ()` |
| 135 | `ZTOt.sTBH` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `ZTOt.EV2u` | func | `(i32 i32 i32) -> ()` |
| 137 | `ZTOt.cyJ6` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `ZTOt.wV3Q` | func | `(i32 i32) -> ()` |
| 139 | `ZTOt.PKXx` | func | `(i32) -> (i32)` |
| 140 | `ZTOt.S1HV` | func | `(i32 i32) -> ()` |
| 141 | `ZTOt.pQaZ` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `ZTOt.mpfH` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `ZTOt.W4n1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `ZTOt.JwlF` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `ZTOt.ftML` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `ZTOt.VksI` | func | `(i32 i32) -> ()` |
| 147 | `ZTOt.l7Gt` | func | `(i32 i32) -> ()` |
| 148 | `ZTOt.ZY7I` | func | `(i32 i32) -> ()` |
| 149 | `ZTOt.HSk5` | func | `(i32 i32) -> ()` |
| 150 | `ZTOt.lJzl` | func | `(i32) -> (i32)` |
| 151 | `ZTOt.vfUR` | func | `(i32) -> (i32)` |
| 152 | `ZTOt.psBa` | func | `(i32) -> (i32)` |
| 153 | `ZTOt.vqT6` | func | `(i32) -> (i32)` |
| 154 | `ZTOt.JG7G` | func | `(i32) -> (i32)` |
| 155 | `ZTOt.FBc5` | func | `(i32) -> (i32)` |
| 156 | `ZTOt.u3pP` | func | `() -> (i32)` |
| 157 | `ZTOt.pv2h` | func | `() -> (i32)` |
| 158 | `ZTOt.Do4X` | func | `() -> (i32)` |
| 159 | `ZTOt.SmkF` | func | `() -> (i32)` |
| 160 | `ZTOt.Qsiz` | func | `(i32 i32) -> (i32)` |
| 161 | `ZTOt.YVCZ` | func | `(i32) -> ()` |
| 162 | `ZTOt.g21U` | func | `(i32 i32) -> (i32)` |
| 163 | `ZTOt.fOXM` | func | `(i32) -> (i32)` |
| 164 | `ZTOt.Os4F` | func | `(i32) -> (i32)` |
| 165 | `ZTOt.LUuJ` | func | `(i32) -> (i32)` |
| 166 | `ZTOt.Q99O` | func | `(i32) -> ()` |
| 167 | `ZTOt.HSyV` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `ZTOt.xlVx` | func | `(i32) -> (i32)` |
| 169 | `ZTOt.xeVg` | func | `(i32) -> (i32)` |
| 170 | `ZTOt.ADo6` | func | `(i32 i32) -> (i32)` |
| 171 | `ZTOt.cUoz` | func | `(i32) -> ()` |
| 172 | `ZTOt.Sz7M` | func | `() -> (i32)` |
| 173 | `ZTOt.rUIU` | func | `(i32 i32) -> (i32)` |
| 174 | `ZTOt.gNez` | func | `(i32 i32) -> ()` |
| 175 | `ZTOt.IORK` | func | `(i32 i32) -> ()` |
| 176 | `ZTOt.Dzrh` | func | `(i32) -> (i32)` |
| 177 | `ZTOt.LtHS` | func | `(i32 i32) -> (i32)` |
| 178 | `ZTOt.JuKq` | func | `(i32) -> ()` |
| 179 | `ZTOt.KAIl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `ZTOt.Nj3x` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `ZTOt.wfaK` | func | `(i32 i32) -> ()` |
| 182 | `ZTOt.jCI1` | func | `(i32 i32) -> ()` |
| 183 | `ZTOt.k765` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `ZTOt.IJrU` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `ZTOt.tHLs` | func | `(i32 f32) -> ()` |
| 186 | `ZTOt.yLnT` | func | `(i32 f32) -> ()` |
| 187 | `ZTOt.vFjc` | func | `(i32 i32) -> ()` |
| 188 | `ZTOt.Se3m` | func | `(i32 i32) -> ()` |
| 189 | `ZTOt.UrIU` | func | `(i32) -> (i32)` |
| 190 | `ZTOt.oq13` | func | `(i32) -> (i32)` |
| 191 | `ZTOt.xK8V` | func | `(i32) -> (i32)` |
| 192 | `ZTOt.cCis` | func | `(i32) -> (i32)` |
| 193 | `ZTOt.OKrz` | func | `(i32 i32 i32) -> ()` |
| 194 | `ZTOt.yrqq` | func | `(i32 i32 i32) -> ()` |
| 195 | `ZTOt.TQzh` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `ZTOt.QnzT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `ZTOt.mAQ2` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `ZTOt.VhML` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `ZTOt.ot6l` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `ZTOt.YShS` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `ZTOt.t2NN` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `ZTOt.u4X0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `ZTOt.rLbg` | func | `(i32) -> (i32)` |
| 204 | `ZTOt.l7YW` | func | `(i32) -> (i32)` |
| 205 | `ZTOt.yKdc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `ZTOt.Svsm` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `ZTOt.G7UL` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `ZTOt.L1es` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `ZTOt.Juoa` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `ZTOt.wSbu` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `ZTOt.XO9m` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `ZTOt.ea0o` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `ZTOt.LnHm` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `ZTOt.XTX4` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `ZTOt.pO96` | func | `(i32 i32 i32) -> ()` |
| 216 | `ZTOt.gTQk` | func | `(i32 i32 i32) -> ()` |
| 217 | `ZTOt.ON0N` | func | `(i32 i32) -> ()` |
| 218 | `ZTOt.hWDN` | func | `(i32 i32) -> ()` |
| 219 | `ZTOt.ojyT` | func | `(i32 i32) -> ()` |
| 220 | `ZTOt.hgZr` | func | `(i32 i32) -> ()` |
| 221 | `ZTOt.Syys` | func | `(i32 i32) -> ()` |
| 222 | `ZTOt.THKG` | func | `(i32 i32) -> ()` |
| 223 | `ZTOt.pKdq` | func | `(i32 f32 f32) -> ()` |
| 224 | `ZTOt.uf3Q` | func | `(i32 f32 f32) -> ()` |
| 225 | `ZTOt.u1I2` | func | `(i32 i32) -> ()` |
| 226 | `ZTOt.vfP0` | func | `(i32 i32) -> ()` |
| 227 | `ZTOt.Gtp2` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `ZTOt.vWPa` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `ZTOt.zLhu` | func | `(i32 i32 i32) -> ()` |
| 230 | `ZTOt.lcaV` | func | `(i32) -> (i32)` |
| 231 | `ZTOt.aFxq` | func | `(i32) -> (i32)` |
| 232 | `ZTOt.f34F` | func | `(i32 i32) -> ()` |
| 233 | `ZTOt.U2Nj` | func | `(i32 i32) -> ()` |
| 234 | `ZTOt.DxWM` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `ZTOt.p1NO` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `ZTOt.s8tN` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `ZTOt.M3xM` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `ZTOt.U7jj` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `ZTOt.DIof` | func | `(i32 i32 i32) -> ()` |
| 240 | `ZTOt.iayg` | func | `(i32 i32 i32) -> ()` |
| 241 | `ZTOt.oqx7` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `ZTOt.ZKNs` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `ZTOt.ZrbA` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `ZTOt.Oxjm` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `ZTOt.BWnh` | func | `(i32) -> (i32)` |
| 246 | `ZTOt.A5CI` | func | `(i32) -> (i32)` |
| 247 | `ZTOt.qUMF` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `ZTOt.GHcZ` | func | `(i32 i32) -> ()` |
| 249 | `ZTOt.kL7L` | func | `(i32 i32) -> ()` |
| 250 | `ZTOt.FjWV` | func | `(i32 i32) -> (i32)` |
| 251 | `ZTOt.rz76` | func | `(i32 i32) -> (i32)` |
| 252 | `ZTOt.n6s6` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `ZTOt.iTCn` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `ZTOt.Ldq8` | func | `(i32 i32) -> ()` |
| 255 | `ZTOt.r8vi` | func | `(i32 i32) -> ()` |
| 256 | `ZTOt.Dkso` | func | `(i32) -> (i32)` |
| 257 | `ZTOt.SsGJ` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `ZTOt.URfE` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `ZTOt.hrry` | func | `(i32) -> ()` |
| 260 | `ZTOt.TXEf` | func | `(i32 i32) -> ()` |
| 261 | `ZTOt.IOFn` | func | `(i32 i32) -> ()` |
| 262 | `ZTOt.oVUH` | func | `(i32 i32) -> ()` |
| 263 | `ZTOt.xLLd` | func | `(i32 i32) -> ()` |
| 264 | `ZTOt.MnaV` | func | `(i32 i32) -> ()` |
| 265 | `ZTOt.Z0Yi` | func | `(i32 i32) -> ()` |
| 266 | `ZTOt.UzyL` | func | `(i32 i32) -> ()` |
| 267 | `ZTOt.NTsy` | func | `(i32 i32) -> ()` |
| 268 | `ZTOt.RPOG` | func | `(i32) -> (i32)` |
| 269 | `ZTOt.emsM` | func | `(i32) -> (i32)` |
| 270 | `ZTOt.DJp9` | func | `(i32) -> (i32)` |
| 271 | `ZTOt.NWFw` | func | `(i32) -> (i32)` |
| 272 | `ZTOt.WQUu` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `ZTOt.n2Nn` | func | `(i32) -> ()` |
| 274 | `ZTOt.kzMD` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `ZTOt.f8gh` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `ZTOt.RWB9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `ZTOt.YOlC` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `ZTOt.Xwr0` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `ZTOt.js0D` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `ZTOt.UFvC` | func | `(i32) -> (i32)` |
| 281 | `ZTOt.nRxI` | func | `(i32) -> (i32)` |
| 282 | `ZTOt.KVEc` | func | `(i32) -> (i32)` |
| 283 | `ZTOt.RLsE` | func | `(i32) -> (i32)` |
| 284 | `ZTOt.Jjkg` | func | `(i32 i32) -> ()` |
| 285 | `ZTOt.jVdX` | func | `(i32) -> ()` |
| 286 | `ZTOt.cgyM` | func | `(i32 i32) -> ()` |
| 287 | `ZTOt.iwRx` | func | `(i32) -> (i32)` |
| 288 | `ZTOt.XgMo` | func | `(i32 i32) -> (i32)` |
| 289 | `ZTOt.qwwg` | func | `(i32 i32) -> (i32)` |
| 290 | `ZTOt.d6Qh` | func | `(i32 i32) -> (i32)` |
| 291 | `ZTOt.mmKn` | func | `(f64) -> (i32)` |
| 292 | `ZTOt.J4c1` | func | `(i32 i32) -> (i32)` |
| 293 | `ZTOt.B065` | func | `(i32 i32) -> (i32)` |
| 294 | `ZTOt.i5nU` | func | `(i32 i32) -> (i32)` |
| 295 | `ZTOt.uL9Q` | func | `(i32 i32) -> (i32)` |
| 296 | `ZTOt.zmuw` | func | `(i32 i32) -> (i32)` |
| 297 | `ZTOt.XhkM` | func | `(i32 i32) -> (i32)` |
| 298 | `ZTOt.cTEj` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `ZGad` | func | 3201 | `() -> (i32)` |
| `oCF8` | func | 2982 | `(i32 i32) -> ()` |
| `pRKW` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `XEtg` | func | 3022 | `(i32) -> (i32 i32)` |
| `WMSR` | func | 3000 | `(i32 i32 i32) -> (i32 i32)` |
| `MCNl` | global | 2 | `` |
| `Pc3d` | func | 2256 | `(i32 f64) -> (i32)` |
| `j7vu` | func | 3061 | `(i32 i32 i32 i32) -> ()` |
| `bs8w` | func | 1837 | `(i32 i32 i32 i32) -> (i32)` |
| `P2Tt` | func | 1891 | `(i32) -> ()` |
| `AdoM` | func | 889 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `HpTe` | func | 3173 | `() -> (f64)` |
| `m0ga` | func | 758 | `(i32 i32 i32) -> (i32)` |
| `Es69` | func | 1483 | `(i32 i32 i32 i32) -> (i32)` |
| `zHqd` | func | 2546 | `(i32 i32) -> ()` |
| `EmG0` | func | 567 | `(i32 i32 i32) -> (i32)` |
| `ATX7` | func | 2069 | `(i32 i32) -> (i32)` |
| `G6St` | func | 2469 | `(i32) -> (i32)` |
| `bmV1` | func | 3202 | `() -> (i32)` |
| `u0R7` | func | 1410 | `(i32 i32) -> (i32)` |
| `CVli` | func | 2975 | `(i32 i32 i32 i32) -> (i32)` |
| `sZv1` | func | 2478 | `(i32) -> (i32)` |
| `HVnF` | func | 3037 | `() -> (i32 i32)` |
| `dU7t` | func | 2807 | `(i32) -> ()` |
| `GR6J` | func | 2201 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `pE9z` | func | 2951 | `() -> ()` |
| `JkoD` | func | 3132 | `(i32) -> ()` |
| `Y1mQ` | func | 3178 | `(i32) -> ()` |
| `q0DI` | func | 2474 | `(i32) -> (i32)` |
| `tX3I` | func | 3071 | `(i32 i32) -> ()` |
| `UYtK` | func | 1745 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `TkWp` | func | 3012 | `(i32 i32) -> (i32 i32)` |
| `V8CJ` | func | 2380 | `(i32 i32 i32 i32) -> (i32)` |
| `ONe4` | func | 2507 | `(i32) -> (i32)` |
| `shxF` | func | 1264 | `(i32 i32 i32) -> (i32)` |
| `g2Mu` | func | 1296 | `(i32 i32) -> (i32)` |
| `Jde6` | func | 1221 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `AJVP` | func | 3023 | `(i32) -> (i32 i32)` |
| `qDn1` | func | 1953 | `(i32 i32 i32 i32) -> ()` |
| `lVDb` | func | 1589 | `(i32 i32) -> ()` |
| `ZXIj` | func | 2029 | `(i32 f64 f64 f64) -> (i32)` |
| `ECe3` | func | 2368 | `(i32 i32) -> (i32)` |
| `hdNu` | func | 2509 | `(i32) -> (i32)` |
| `NvvG` | func | 2336 | `(i32 i32) -> (i32)` |
| `flOH` | func | 1934 | `(i32) -> (i32)` |
| `biN4` | func | 3006 | `(i32 i32) -> (i32 i32)` |
| `mou8` | func | 3126 | `(i32 i32 i32) -> ()` |
| `pQFa` | func | 1551 | `(i32 i32 i32 i32) -> (i32)` |
| `CKti` | func | 1892 | `(i32) -> ()` |
| `ppAz` | func | 3007 | `(i32 i32) -> (i32 i32)` |
| `jVmu` | func | 890 | `(i32 i32) -> (i32)` |
| `J6p7` | func | 1632 | `(i32 i32 i32 i32) -> (i32)` |
| `U0dk` | func | 911 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `zvyw` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `SggN` | func | 1243 | `(i32 i32) -> (i32)` |
| `ZEYb` | func | 1515 | `(i32 i32) -> (i32)` |
| `wUxz` | func | 2591 | `(i32 i32) -> ()` |
| `Tdti` | func | 3021 | `(i32) -> (i32 i32)` |
| `Njn5` | func | 1474 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `dUBx` | func | 1214 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `PwgL` | func | 3024 | `(i32) -> (i32 i32)` |
| `d9qG` | func | 2425 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `HTxs` | func | 2764 | `(i32) -> (i32)` |
| `TO7h` | func | 2477 | `(i32) -> (i32)` |
| `Oaiv` | func | 2335 | `(i32 i32) -> (i32)` |
| `gAnb` | func | 2476 | `(i32) -> (i32)` |
| `eC5S` | func | 3035 | `() -> (i32 i32)` |
| `yA8t` | func | 1987 | `(i32 i32) -> ()` |
| `qgp4` | func | 1875 | `(i32 i32) -> (i32)` |
| `uYNi` | func | 1865 | `(i32 i32) -> ()` |
| `rpta` | func | 2592 | `() -> (i32)` |
| `ztlN` | func | 1951 | `(i32) -> (i32)` |
| `Yamu` | func | 1114 | `(i32 i32) -> (i32)` |
| `kFwf` | func | 678 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `xLDH` | func | 1270 | `(i32 i32 i32) -> ()` |
| `ku9b` | func | 2468 | `(i32) -> (f64)` |
| `ZsDA` | func | 1517 | `(i32 f64) -> (f64)` |
| `Ke6M` | func | 1816 | `() -> (i32)` |
| `SgSb` | func | 2046 | `(i32 i32) -> ()` |
| `wFuk` | func | 1215 | `(i32 i32 i32 i32) -> (i32)` |
| `Rrhu` | func | 2489 | `(i32) -> (i32)` |
| `a5UU` | func | 1757 | `(i32 i32) -> (i32)` |
| `pQTP` | func | 2149 | `(i32 i32) -> (i32)` |
| `ES9Q` | global | 1 | `` |
| `RDGs` | func | 2508 | `(i32) -> (i32)` |
| `ZXRA` | func | 2771 | `(i32) -> (i32)` |
| `YZjM` | func | 2426 | `(i32) -> (i32)` |
| `pWAd` | func | 2475 | `(i32) -> ()` |
| `ljrx` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `EC8Q` | func | 3070 | `(i32 i32 i32) -> ()` |
| `Tk64` | func | 810 | `(i32 i32) -> (i32)` |
| `ISKC` | func | 1461 | `(i32 i32 i32 i32) -> ()` |
| `ihC6` | func | 2471 | `(i32) -> (i32)` |
| `yvDd` | func | 1115 | `(i32 i32) -> ()` |
| `waT8` | func | 3011 | `(i32 i32) -> (i32 i32)` |
| `m16q` | func | 2338 | `(i32 i32) -> (i32)` |
| `fy4d` | func | 1594 | `(i32 f64 f64 f64) -> (i32)` |
| `P5nK` | func | 2286 | `(i32 i32) -> ()` |
| `SWM0` | func | 2486 | `(i32 i32) -> ()` |
| `Yeep` | func | 1514 | `(i32 i32) -> (i32)` |
| `KmUD` | func | 1822 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `HRta` | func | 1442 | `(i32) -> (i32)` |
| `FW1W` | func | 1390 | `(i32 f64 f64) -> (i32)` |
| `memory` | memory | 0 | `` |
| `SKR0` | func | 1503 | `(i32 i32) -> (i32)` |
| `AMsh` | func | 2499 | `(i32 i32) -> (i32)` |
| `orgw` | func | 3020 | `(i32) -> (i32 i32)` |
| `ZZ6D` | func | 2409 | `(i32) -> (i32)` |
| `Q6g4` | func | 1530 | `(i32 i32 i32) -> (i32)` |
| `Osun` | func | 2470 | `(i32) -> (i32)` |
| `Ibmj` | func | 1321 | `(i32) -> ()` |
| `CotA` | func | 2829 | `(i32) -> (i32)` |
| `aQvP` | func | 3009 | `(i32 i32) -> (i32 i32)` |
| `CFBf` | func | 2255 | `(i32 i32) -> ()` |
| `CkOL` | func | 3008 | `(i32 i32) -> (i32 i32)` |
| `Vkw9` | func | 1289 | `(i32) -> (i32)` |
| `Owrj` | func | 2473 | `(i32) -> (i32)` |
| `EUxQ` | func | 2181 | `(i32 i32) -> (i32)` |
| `lp6r` | func | 3133 | `() -> ()` |
| `wFRb` | func | 2558 | `() -> (i32)` |
| `aqdg` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `kYfV` | func | 1723 | `(i32) -> (i32)` |
| `asX8` | func | 2491 | `(i32) -> (i32)` |
| `yQ4n` | func | 2490 | `(i32 i32) -> ()` |
| `SFoL` | func | 3177 | `(i32) -> (i32)` |
| `wQmU` | func | 705 | `(i32 i32) -> (i32)` |
| `GROn` | func | 1857 | `(i32 i32 f64 f64 f64) -> ()` |
| `Fhm2` | func | 1579 | `(i32 i32) -> (i32)` |
| `CeXk` | func | 3099 | `() -> (i32)` |
| `cx5N` | func | 2796 | `(i32) -> (i32)` |
| `jvcT` | func | 2337 | `(i32 i32) -> (i32)` |
| `jgKc` | func | 1439 | `() -> (i32)` |
| `D5iI` | func | 1484 | `(i32) -> (i32)` |
| `DdOc` | func | 3001 | `(i32 i32 i32) -> (i32 i32)` |
| `q1aS` | func | 2785 | `(i32) -> (i32)` |
| `cZ6Z` | func | 2500 | `(i32 i32) -> (i32)` |
| `G8JP` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `Lox4` | func | 2498 | `(i32) -> (i32)` |
| `dD2S` | func | 2488 | `(i32) -> (i32)` |
| `LIOM` | func | 922 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `iVUq` | func | 1389 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Jkd4` | func | 737 | `(i32) -> (i32)` |
| `UIRD` | func | 1700 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `xpkU` | func | 2970 | `(i32 i32) -> (i32)` |
| `N60K` | func | 1490 | `(i32 i32) -> (i32)` |
| `Vr02` | func | 1479 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `tpBQ` | func | 2455 | `(i32) -> (i32)` |
| `jNem` | func | 1590 | `(i32 i32) -> ()` |
| `dQRj` | func | 1435 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `B5EH` | func | 2454 | `(i32 i32) -> ()` |
| `IWy7` | func | 1882 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `jAki` | func | 1336 | `(i32 i32 i32) -> (i32)` |
| `QTo2` | func | 2472 | `(i32) -> (i32)` |
| `vhOk` | func | 3010 | `(i32 i32) -> (i32 i32)` |
| `L7s3` | func | 668 | `(i32 i32) -> (i32)` |
| `sbJo` | func | 2013 | `(i32 f64) -> (i32)` |
| `gJXc` | func | 3036 | `() -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 753 · max 753
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2639720, `i32` = i32.const 2640292

## Functions

- 2,914 bodies · 4,043,172 code bytes · avg 1.4 KB
- instruction scan: 2,914 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 113 |
| <= 128 bytes | 258 |
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
| 3 | `(i32 i32) -> ()` | 125 | 48,862 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 64 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 196 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 225 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 721 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 769 | `(i32 i32) -> ()` | 138 | 42,799 | 20,185 | local.get×5260, i32.const×2330, local.tee×1194, i32.add×1063, local.set×1003 |
| 1576 | `(i32 i32) -> (i32)` | 180 | 54,760 | 19,855 | local.get×6591, i32.const×2625, i64.store×1913, i64.const×1077, i64.load×1056 |
| 1976 | `(i32 i32) -> ()` | 110 | 40,261 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2587 | `(i32 i32) -> ()` | 397 | 142,149 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2865 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2883 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 540,299 |
| `i32.const` | 226,342 |
| `local.tee` | 100,473 |
| `i32.load` | 94,772 |
| `local.set` | 94,115 |
| `i32.add` | 87,371 |
| `end` | 79,376 |
| `br_if` | 64,480 |
| `i32.store` | 46,860 |
| `block` | 37,302 |
| `i64.const` | 32,705 |
| `i64.store` | 31,828 |
| `if` | 30,350 |
| `call` | 29,521 |
| `i32.sub` | 24,726 |
| `i64.load` | 23,695 |
| `br` | 23,159 |
| `i32.eqz` | 19,593 |
| `select` | 16,929 |
| `i32.shl` | 16,490 |
| `i32.and` | 16,366 |
| `i32.ne` | 15,888 |
| `i32.load8_u` | 15,017 |
| `i32.eq` | 13,904 |
| `i32.store8` | 12,635 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,914/2,914 (degraded: 0)
