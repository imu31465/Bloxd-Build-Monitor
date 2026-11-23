# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `w4ddu.56408518` · analyzed 2026-11-24T00:51:36+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.a87ef93322ba15fa4f98.wasm
> 4,836,347 bytes (4.6 MB) · sha256 `fa07e900fdcc5ea5…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,821,797 → 4,836,347 bytes (+14,550)
- defined functions 2,847 → 2,859
- imported functions 281 → 282
- code bytes 3,977,139 → 3,987,961
- data bytes 798,641 → 802,052
- name-section module id `63b13e03810bc945.10524` → `344dde80afe35fb2.10574`
- export signatures: +1 × `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)`; -1 × `(i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)`
- import signatures: +1 × `(i32) -> ()`
- export identifiers rotated by the obfuscator: 1/156 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `WebGL1 writes no array texture: grids are 2DtexSubImage thre`; `fs_atlasn_cells_restterrain-atlasn-packed-cellsfs_atlasn_cel`; `nor has a new canvasa new canvas has oneObjecttoStringconstr`; `terrain-atlasn-anim-packed-cellsterrain-atlasn-anim-lit-pack`; `ue:keydownkeyupmousedownmouseuptouchstarttouchendMouse1Mouse`; `vs_packed_anim_cellsterrain-atlas1-anim-packed-cellsterrain-`
- removed embedded strings: `------//////111111333333555555777777999999;;;;;;======??????`; `WebGL1 writes no array texture: grids are 2DtexSubImage thre`; `flip-cropOPACITY_RGBREFLECTION_OPPOSITE_ZROUGHNESSREFLECTION`; `vec4 lightLevels = vec4(mod(packedLevels, 16.0) / 15.0, mod(`; `vertex_storagestorage_buffersindirectindirect_first_instance`; `vs_packed_animterrain-atlas1-anim-packedterrain-atlas1-anim-`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,859 / 282 |
| Exports / imports | 156 / 283 |
| Code bytes (function bodies) | 3,987,961 (3.8 MB) |
| Total local variables | 30,405 |
| Instructions (scanable bodies) | 1,871,333 |
| Data segments / bytes | 3,771 / 802,052 |
| Element segments / entries | 1 / 732 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `344dde80afe35fb2.10574` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,478 | 173 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,906 | 2859 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,249 | 156 |
| 9 | element | 1,471 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 3,993,208 | 2859 |
| 11 | data | 832,529 | 3771 |
| 0 | custom:name | 30 | — |

## Types

173 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `IEcd.V5Je` | memory | `[128..14648]` |
| 0 | `IEcd.kDHv` | func | `(i32) -> (f64)` |
| 1 | `IEcd.KeWf` | func | `() -> (i32)` |
| 2 | `IEcd.hG6r` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `IEcd.rLAE` | func | `(i32) -> ()` |
| 4 | `IEcd.Tlvi` | func | `(i32 i32) -> (i32)` |
| 5 | `IEcd.mIU3` | func | `(i32) -> (i32)` |
| 6 | `IEcd.JQnA` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `IEcd.b3rj` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `IEcd.noA7` | func | `(i32) -> (i32)` |
| 9 | `IEcd.o0FA` | func | `(i32 i32) -> ()` |
| 10 | `IEcd.YhCP` | func | `(i32 i32) -> ()` |
| 11 | `IEcd.WbcN` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `IEcd.JPhz` | func | `(i32 i32) -> (i32)` |
| 13 | `IEcd.frI7` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `IEcd.VAeU` | func | `(i32) -> (i32)` |
| 15 | `IEcd.PTuC` | func | `(i32 i32) -> (i32)` |
| 16 | `IEcd.o8D5` | func | `(i32 i32) -> (i32)` |
| 17 | `IEcd.akgp` | func | `(i32 i32) -> ()` |
| 18 | `IEcd.CehS` | func | `(i32) -> (i32)` |
| 19 | `IEcd.MZnt` | func | `(i32) -> (i32)` |
| 20 | `IEcd.g26G` | func | `(i32) -> (i32)` |
| 21 | `IEcd.Wn5x` | func | `(i32) -> ()` |
| 22 | `IEcd.Gri1` | func | `(i32 i32) -> ()` |
| 23 | `IEcd.Fv6W` | func | `(i32 i32) -> ()` |
| 24 | `IEcd.l1Iv` | func | `(i32) -> (i32)` |
| 25 | `IEcd.dysD` | func | `(i32 i32) -> ()` |
| 26 | `IEcd.pBcp` | func | `(i32 i32) -> (i32)` |
| 27 | `IEcd.PT9U` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `IEcd.lqcM` | func | `(i32 i32) -> (i32)` |
| 29 | `IEcd.FBn9` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `IEcd.aObS` | func | `(i32) -> (i32)` |
| 31 | `IEcd.o7La` | func | `(i32 i32) -> ()` |
| 32 | `IEcd.u3sH` | func | `(i32) -> (i32)` |
| 33 | `IEcd.VfYL` | func | `(i32) -> (i32)` |
| 34 | `IEcd.ulgh` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `IEcd.JtBZ` | func | `(i32) -> (i32)` |
| 36 | `IEcd.HP4x` | func | `(i32) -> (i32)` |
| 37 | `IEcd.sgrY` | func | `(i32) -> (i32)` |
| 38 | `IEcd.hbf5` | func | `(i32 i32) -> (i32)` |
| 39 | `IEcd.HN9i` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `IEcd.xs5R` | func | `(i32) -> (i32)` |
| 41 | `IEcd.ffx9` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `IEcd.jbRk` | func | `() -> (f64)` |
| 43 | `IEcd.PkC5` | func | `(i32) -> (i32)` |
| 44 | `IEcd.GoBK` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `IEcd.GrFe` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `IEcd.gwwA` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `IEcd.UgqO` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `IEcd.lnlS` | func | `(i32 i32 i32) -> ()` |
| 49 | `IEcd.b9LL` | func | `(i32 i32 i32) -> ()` |
| 50 | `IEcd.lAUt` | func | `(i32 i32 i32) -> ()` |
| 51 | `IEcd.NV9h` | func | `(i32 i32) -> ()` |
| 52 | `IEcd.EBdC` | func | `(i32 i32) -> ()` |
| 53 | `IEcd.ApKr` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `IEcd.AoVs` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `IEcd.ZvRw` | func | `(i32 f32 f32) -> ()` |
| 56 | `IEcd.P7rE` | func | `(i32 f32 f32) -> ()` |
| 57 | `IEcd.ahEi` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `IEcd.Ny7w` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `IEcd.KYLq` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `IEcd.ov72` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `IEcd.V2I1` | func | `(i32 i32 i32) -> ()` |
| 62 | `IEcd.SBsp` | func | `(i32 i32 i32) -> ()` |
| 63 | `IEcd.Vcv2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `IEcd.JO38` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `IEcd.zMY5` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `IEcd.KuSE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `IEcd.cLQW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `IEcd.cO5s` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `IEcd.IzE8` | func | `(i32) -> (i32)` |
| 70 | `IEcd.FuUB` | func | `(i32) -> ()` |
| 71 | `IEcd.roNC` | func | `(i32) -> (i32)` |
| 72 | `IEcd.fIJ2` | func | `(i32 i32) -> (i32)` |
| 73 | `IEcd.i6gk` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `IEcd.Sp2e` | func | `(i32 i32 i32) -> ()` |
| 75 | `IEcd.AVla` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `IEcd.ExgI` | func | `() -> (f64)` |
| 77 | `IEcd.Llt0` | func | `() -> (f64)` |
| 78 | `IEcd.jV3L` | func | `(i32 i32) -> ()` |
| 79 | `IEcd.JI6h` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `IEcd.hX4U` | func | `(i32 i32 i32) -> ()` |
| 81 | `IEcd.tZw4` | func | `(i32 i32 i32) -> ()` |
| 82 | `IEcd.f4XV` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `IEcd.NWl2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `IEcd.Aoi9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `IEcd.tBnN` | func | `(i32 i32) -> ()` |
| 86 | `IEcd.Ih0g` | func | `(i32 i32) -> ()` |
| 87 | `IEcd.hnME` | func | `(i32) -> (i32)` |
| 88 | `IEcd.TvT6` | func | `(i32 i32) -> ()` |
| 89 | `IEcd.Z0CV` | func | `(i32 i32) -> ()` |
| 90 | `IEcd.JjxB` | func | `(i32 i32 i32) -> ()` |
| 91 | `IEcd.vl2c` | func | `(i32 i32 i32) -> ()` |
| 92 | `IEcd.Ld7z` | func | `(i32) -> (i32)` |
| 93 | `IEcd.RI8D` | func | `(i32) -> (i32)` |
| 94 | `IEcd.SREq` | func | `(i32 i32) -> (i32)` |
| 95 | `IEcd.ifbC` | func | `(i32 i32) -> (i32)` |
| 96 | `IEcd.NyKq` | func | `(i32 i32) -> ()` |
| 97 | `IEcd.inYc` | func | `(i32 i32) -> ()` |
| 98 | `IEcd.Jjpp` | func | `(i32 i32 i32) -> ()` |
| 99 | `IEcd.l8S9` | func | `(i32 i32 i32) -> ()` |
| 100 | `IEcd.qpUx` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `IEcd.IsVT` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `IEcd.BXeE` | func | `(i32 i32 f32) -> ()` |
| 103 | `IEcd.TEAp` | func | `(i32 i32 f32) -> ()` |
| 104 | `IEcd.KRyg` | func | `(i32 i32 i32) -> ()` |
| 105 | `IEcd.VUv3` | func | `(i32 i32 i32) -> ()` |
| 106 | `IEcd.eGjJ` | func | `(i32 i32 i32) -> ()` |
| 107 | `IEcd.n1EM` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `IEcd.khGq` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `IEcd.HczK` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `IEcd.IIvJ` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `IEcd.KkCL` | func | `(i32 i32) -> ()` |
| 112 | `IEcd.ekuJ` | func | `(i32 i32) -> ()` |
| 113 | `IEcd.kYdU` | func | `(i32 i32) -> ()` |
| 114 | `IEcd.muVc` | func | `(i32 i32) -> ()` |
| 115 | `IEcd.rZGS` | func | `(i32) -> (i32)` |
| 116 | `IEcd.ID2k` | func | `(i32) -> (i32)` |
| 117 | `IEcd.jT3N` | func | `(i32) -> (i32)` |
| 118 | `IEcd.RF2c` | func | `(i32) -> (i32)` |
| 119 | `IEcd.uHVZ` | func | `(i32 i32) -> ()` |
| 120 | `IEcd.VTF8` | func | `(i32 i32) -> ()` |
| 121 | `IEcd.NE8S` | func | `(i32 i32) -> ()` |
| 122 | `IEcd.wqzS` | func | `(i32 i32) -> ()` |
| 123 | `IEcd.rr8d` | func | `(i32 i32) -> ()` |
| 124 | `IEcd.HVfH` | func | `(i32 i32) -> ()` |
| 125 | `IEcd.LODg` | func | `(i32 i32) -> (i32)` |
| 126 | `IEcd.qRJv` | func | `(i32 i32) -> (i32)` |
| 127 | `IEcd.HP1i` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `IEcd.AVrR` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `IEcd.VUaR` | func | `(i32 i32) -> ()` |
| 130 | `IEcd.zpZp` | func | `(i32 i32) -> ()` |
| 131 | `IEcd.E6P9` | func | `(i32) -> (i32)` |
| 132 | `IEcd.DGdH` | func | `(i32 i32) -> ()` |
| 133 | `IEcd.ekdH` | func | `(i32 i32) -> ()` |
| 134 | `IEcd.DjAB` | func | `(i32 i32 i32) -> ()` |
| 135 | `IEcd.Kz2L` | func | `(i32 i32 i32) -> ()` |
| 136 | `IEcd.V5Ii` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `IEcd.ns8v` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `IEcd.wier` | func | `(i32 i32) -> ()` |
| 139 | `IEcd.d5go` | func | `(i32 i32 i32) -> ()` |
| 140 | `IEcd.T2ny` | func | `(i32 i32 i32) -> ()` |
| 141 | `IEcd.Hg1l` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `IEcd.TJ77` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `IEcd.UMaY` | func | `(i32 i32 i32) -> ()` |
| 144 | `IEcd.mutr` | func | `(i32 i32 i32) -> ()` |
| 145 | `IEcd.g2fc` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `IEcd.Dlc6` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `IEcd.ekSx` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `IEcd.Akgj` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `IEcd.IO9L` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `IEcd.fXEB` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `IEcd.decZ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `IEcd.KiRQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `IEcd.lABo` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `IEcd.i9Y2` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `IEcd.oHvA` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `IEcd.R7ai` | func | `(i32) -> (i32)` |
| 157 | `IEcd.ZJqS` | func | `(i32) -> (i32)` |
| 158 | `IEcd.lM6a` | func | `(i32) -> (i32)` |
| 159 | `IEcd.sWgy` | func | `(i32) -> (i32)` |
| 160 | `IEcd.DTn5` | func | `() -> (i32)` |
| 161 | `IEcd.xA3F` | func | `() -> (i32)` |
| 162 | `IEcd.bcaF` | func | `() -> (i32)` |
| 163 | `IEcd.c2O9` | func | `() -> (i32)` |
| 164 | `IEcd.fCeM` | func | `(i32 i32) -> (i32)` |
| 165 | `IEcd.Rt0R` | func | `(i32) -> ()` |
| 166 | `IEcd.yRlv` | func | `(i32 i32) -> (i32)` |
| 167 | `IEcd.VFaG` | func | `(i32) -> (i32)` |
| 168 | `IEcd.BWKz` | func | `(i32) -> (i32)` |
| 169 | `IEcd.W4x5` | func | `(i32) -> (i32)` |
| 170 | `IEcd.xTD8` | func | `(i32) -> ()` |
| 171 | `IEcd.TXJE` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `IEcd.quNq` | func | `(i32) -> (i32)` |
| 173 | `IEcd.LK6T` | func | `(i32) -> (i32)` |
| 174 | `IEcd.xMHS` | func | `(i32 i32) -> (i32)` |
| 175 | `IEcd.NN7i` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `IEcd.UjfD` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `IEcd.Iu1U` | func | `(i32) -> (i32)` |
| 178 | `IEcd.YBcq` | func | `(i32) -> (i32)` |
| 179 | `IEcd.BTMs` | func | `(i32) -> (i32)` |
| 180 | `IEcd.iYNJ` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `IEcd.PdM4` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `IEcd.DDcp` | func | `(i32 i32) -> ()` |
| 183 | `IEcd.OeiE` | func | `(i32 i32 i32) -> ()` |
| 184 | `IEcd.vCfW` | func | `(i32 i32) -> ()` |
| 185 | `IEcd.WzsG` | func | `(i32 i32 i32) -> ()` |
| 186 | `IEcd.vQ0e` | func | `(i32 i32) -> ()` |
| 187 | `IEcd.pImy` | func | `(i32 i32) -> ()` |
| 188 | `IEcd.L9WK` | func | `(i32) -> (i32)` |
| 189 | `IEcd.baHS` | func | `(i32 i32) -> (i32)` |
| 190 | `IEcd.tv7R` | func | `(i32) -> ()` |
| 191 | `IEcd.QX2p` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `IEcd.GYxO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `IEcd.IgY4` | func | `(i32 i32) -> ()` |
| 194 | `IEcd.KIoq` | func | `(i32 i32) -> ()` |
| 195 | `IEcd.Jrbo` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `IEcd.ZvyG` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `IEcd.FTIq` | func | `(i32 f32) -> ()` |
| 198 | `IEcd.juMd` | func | `(i32 f32) -> ()` |
| 199 | `IEcd.TcLA` | func | `(i32 i32) -> ()` |
| 200 | `IEcd.vSSV` | func | `(i32 i32) -> ()` |
| 201 | `IEcd.aWYi` | func | `(i32) -> (i32)` |
| 202 | `IEcd.ZlPW` | func | `(i32) -> (i32)` |
| 203 | `IEcd.ymCE` | func | `(i32) -> (i32)` |
| 204 | `IEcd.Ewt1` | func | `(i32) -> (i32)` |
| 205 | `IEcd.Bl5O` | func | `(i32 i32 i32) -> ()` |
| 206 | `IEcd.GMsb` | func | `(i32 i32 i32) -> ()` |
| 207 | `IEcd.QqSl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `IEcd.zd6g` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `IEcd.RjFj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `IEcd.wFhW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `IEcd.TwW1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `IEcd.Po9N` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `IEcd.kg64` | func | `(i32 i32) -> ()` |
| 214 | `IEcd.z2Eh` | func | `(i32 i32) -> ()` |
| 215 | `IEcd.MNBS` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `IEcd.fOE5` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `IEcd.Vjfa` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `IEcd.rfWO` | func | `(i32) -> (i32)` |
| 219 | `IEcd.r0Eu` | func | `(i32) -> (i32)` |
| 220 | `IEcd.Pq9d` | func | `(i32 i32) -> ()` |
| 221 | `IEcd.qALp` | func | `(i32 i32) -> ()` |
| 222 | `IEcd.h9m3` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `IEcd.ZzVO` | func | `(i32) -> (i32)` |
| 224 | `IEcd.quVx` | func | `(i32) -> (i32)` |
| 225 | `IEcd.eGev` | func | `(i32 i32) -> ()` |
| 226 | `IEcd.Lo3e` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `IEcd.Xn9D` | func | `(i32 i32) -> ()` |
| 228 | `IEcd.X7QN` | func | `(i32 i32) -> ()` |
| 229 | `IEcd.y3F0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `IEcd.Fgou` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `IEcd.sEtC` | func | `(i32 i32 i32) -> ()` |
| 232 | `IEcd.sIge` | func | `(i32 i32 i32) -> ()` |
| 233 | `IEcd.nJwz` | func | `(i32 i32) -> ()` |
| 234 | `IEcd.Nclh` | func | `(i32 i32) -> ()` |
| 235 | `IEcd.EHJt` | func | `(i32 i32) -> ()` |
| 236 | `IEcd.zlY1` | func | `(i32 i32) -> ()` |
| 237 | `IEcd.nqXN` | func | `(i32 i32) -> ()` |
| 238 | `IEcd.MBvT` | func | `(i32 i32) -> ()` |
| 239 | `IEcd.mDZO` | func | `(i32 f32 f32) -> ()` |
| 240 | `IEcd.hiim` | func | `(i32 f32 f32) -> ()` |
| 241 | `IEcd.O6E5` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `IEcd.roFO` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `IEcd.MrC7` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `IEcd.JayE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `IEcd.epEF` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `IEcd.n2f5` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `IEcd.Rdqo` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `IEcd.enKe` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `IEcd.yftr` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `IEcd.CjAp` | func | `(i32) -> ()` |
| 251 | `IEcd.i5kY` | func | `(i32 i32) -> ()` |
| 252 | `IEcd.Hf6z` | func | `(i32 i32) -> ()` |
| 253 | `IEcd.dNRy` | func | `(i32 i32) -> ()` |
| 254 | `IEcd.Fcal` | func | `(i32 i32) -> ()` |
| 255 | `IEcd.PQGB` | func | `(i32 i32) -> ()` |
| 256 | `IEcd.MC8I` | func | `(i32 i32) -> ()` |
| 257 | `IEcd.iWiC` | func | `(i32 i32) -> ()` |
| 258 | `IEcd.JZOa` | func | `(i32 i32) -> ()` |
| 259 | `IEcd.KVjk` | func | `(i32) -> (i32)` |
| 260 | `IEcd.ffD5` | func | `(i32) -> (i32)` |
| 261 | `IEcd.QcU9` | func | `(i32) -> (i32)` |
| 262 | `IEcd.HETB` | func | `(i32) -> (i32)` |
| 263 | `IEcd.rztf` | func | `(i32) -> ()` |
| 264 | `IEcd.W1kM` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `IEcd.Zm73` | func | `(i32) -> ()` |
| 266 | `IEcd.NygD` | func | `(i32) -> (i32)` |
| 267 | `IEcd.hDd2` | func | `(i32) -> (i32)` |
| 268 | `IEcd.qoeG` | func | `(i32) -> (i32)` |
| 269 | `IEcd.dqdK` | func | `(i32) -> (i32)` |
| 270 | `IEcd.tH7N` | func | `(i32 i32) -> ()` |
| 271 | `IEcd.GqYk` | func | `(i32) -> ()` |
| 272 | `IEcd.TBHN` | func | `(i32 i32) -> ()` |
| 273 | `IEcd.cthw` | func | `(i32) -> (i32)` |
| 274 | `IEcd.cGWx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `IEcd.Hlf3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `IEcd.qlnW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `IEcd.v0wV` | func | `(i32 i32) -> (i32)` |
| 278 | `IEcd.q1Wp` | func | `(i32 i32) -> (i32)` |
| 279 | `IEcd.GeIw` | func | `(i32 i32) -> (i32)` |
| 280 | `IEcd.psTR` | func | `(i32 i32) -> (i32)` |
| 281 | `IEcd.gVBz` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `GFuw` | func | 1485 | `(i32 f64) -> (f64)` |
| `fsje` | func | 2889 | `() -> ()` |
| `l5JL` | func | 3028 | `() -> (i32)` |
| `ETEr` | func | 1450 | `(i32) -> (i32)` |
| `Kj9x` | func | 1481 | `(i32 i32) -> (i32)` |
| `miKH` | func | 1406 | `() -> (i32)` |
| `We8U` | func | 897 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `dlo1` | func | 548 | `(i32 i32 i32) -> (i32)` |
| `WwBF` | func | 597 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `j4XV` | func | 2438 | `(i32) -> (i32)` |
| `uMF0` | func | 1909 | `(i32 i32 i32 i32) -> ()` |
| `Ef8H` | func | 869 | `(i32 i32) -> (i32)` |
| `yNOW` | func | 2212 | `(i32 i32) -> ()` |
| `O0Yu` | func | 1517 | `(i32 i32 i32 i32) -> (i32)` |
| `EJCN` | func | 1402 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `gFJb` | func | 1267 | `(i32 i32) -> (i32)` |
| `PTEE` | func | 2108 | `(i32 i32) -> (i32)` |
| `ZJWH` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `cig4` | func | 1294 | `(i32) -> ()` |
| `MfRi` | func | 3061 | `(i32) -> ()` |
| `Y7kt` | func | 1186 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `vPT9` | func | 2943 | `(i32 i32) -> (i32 i32)` |
| `YZPP` | func | 2418 | `(i32) -> (i32)` |
| `llXf` | func | 1531 | `(i32) -> (i32)` |
| `t8pt` | func | 2359 | `(i32) -> (i32)` |
| `diuP` | func | 2919 | `(i32 i32) -> ()` |
| `ei3X` | func | 2435 | `(i32) -> (i32)` |
| `c8Ow` | func | 1701 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `lyYv` | func | 1818 | `(i32 i32 f64 f64 f64) -> ()` |
| `mQf1` | func | 1798 | `(i32 i32 i32 i32) -> (i32)` |
| `eBFO` | global | 2 | `` |
| `BpZH` | func | 1601 | `(i32 i32 i32 i32) -> (i32)` |
| `uVqv` | func | 2503 | `() -> (i32)` |
| `agAT` | func | 2947 | `(i32 i32) -> (i32 i32)` |
| `IOQR` | func | 2026 | `(i32 i32) -> (i32)` |
| `U66v` | func | 2446 | `(i32 i32) -> (i32)` |
| `iz3l` | func | 3108 | `(i32) -> ()` |
| `sSPH` | func | 2436 | `(i32) -> (i32)` |
| `CHam` | func | 3130 | `() -> (i32)` |
| `gWNs` | func | 1193 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `SQRM` | func | 2456 | `(i32) -> (i32)` |
| `yOAU` | func | 2421 | `(i32) -> (i32)` |
| `JtVw` | func | 1842 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `kZxr` | func | 1456 | `(i32 i32) -> (i32)` |
| `fyPL` | func | 3103 | `() -> (f64)` |
| `sRRG` | func | 3062 | `() -> ()` |
| `ARc6` | func | 2956 | `(i32) -> (i32 i32)` |
| `i7Nf` | func | 2535 | `(i32 i32) -> ()` |
| `XlPr` | func | 724 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `o5N2` | func | 2948 | `(i32 i32) -> (i32 i32)` |
| `LlQU` | func | 2938 | `(i32 i32 i32) -> (i32 i32)` |
| `tp9X` | func | 2003 | `(i32 i32) -> ()` |
| `jZAz` | func | 2335 | `(i32 i32 i32 i32) -> (i32)` |
| `M5vo` | func | 2944 | `(i32 i32) -> (i32 i32)` |
| `mnRw` | func | 2425 | `(i32) -> (i32)` |
| `ng3C` | func | 687 | `(i32 i32) -> (i32)` |
| `btOl` | func | 868 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `hAzz` | func | 2213 | `(i32 f64) -> (i32)` |
| `c7TE` | func | 1686 | `(i32) -> (i32)` |
| `notA` | func | 2536 | `() -> (i32)` |
| `ebNb` | func | 1719 | `(i32 i32) -> (i32)` |
| `yT3g` | func | 2403 | `(i32) -> (i32)` |
| `Ulrg` | func | 2946 | `(i32 i32) -> (i32 i32)` |
| `oGv7` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `Vjtu` | func | 1446 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vHUL` | func | 1942 | `(i32 i32) -> ()` |
| `qBe9` | func | 1558 | `(i32 i32) -> ()` |
| `KJOe` | func | 2423 | `(i32) -> ()` |
| `JGfy` | func | 3107 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `kea8` | func | 2433 | `(i32 i32) -> ()` |
| `qJJd` | func | 2420 | `(i32) -> (i32)` |
| `vMsw` | func | 2362 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `UHbD` | func | 2445 | `(i32) -> (i32)` |
| `Mi4K` | func | 1360 | `(i32 f64 f64) -> (i32)` |
| `OOJt` | func | 2322 | `(i32 i32) -> (i32)` |
| `BMPq` | func | 2424 | `(i32) -> (i32)` |
| `NXF5` | func | 2290 | `(i32 i32) -> (i32)` |
| `oJxQ` | func | 1708 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `urcD` | func | 1559 | `(i32 i32) -> ()` |
| `feHT` | func | 2292 | `(i32 i32) -> (i32)` |
| `UAJG` | func | 2455 | `(i32) -> (i32)` |
| `Dwev` | func | 2749 | `(i32) -> ()` |
| `hoZU` | func | 1449 | `(i32 i32 i32 i32) -> (i32)` |
| `C9XU` | func | 2968 | `() -> (i32 i32)` |
| `OOH5` | func | 2990 | `(i32 i32 i32 i32) -> ()` |
| `O0RN` | func | 661 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NLij` | func | 3000 | `(i32 i32) -> ()` |
| `oyMa` | func | 3055 | `(i32 i32 i32) -> ()` |
| `jFqh` | func | 1497 | `(i32 i32 i32) -> (i32)` |
| `qkHn` | func | 2999 | `(i32 i32 i32) -> ()` |
| `eWkZ` | func | 1187 | `(i32 i32 i32 i32) -> (i32)` |
| `aTeO` | func | 2738 | `(i32) -> (i32)` |
| `Q8MA` | func | 2426 | `(i32) -> (i32)` |
| `RVoL` | func | 2422 | `(i32) -> (i32)` |
| `fiZq` | func | 1470 | `(i32 i32) -> (i32)` |
| `JKHu` | func | 1310 | `(i32 i32 i32) -> (i32)` |
| `fdwq` | func | 1783 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `GITp` | global | 1 | `` |
| `zeRU` | func | 3131 | `() -> (i32)` |
| `l56F` | func | 1835 | `(i32 i32) -> (i32)` |
| `qjev` | func | 1986 | `(i32 f64 f64 f64) -> (i32)` |
| `dPeM` | func | 1547 | `(i32 i32) -> (i32)` |
| `oVtO` | func | 2913 | `(i32 i32 i32 i32) -> (i32)` |
| `ltuw` | func | 2953 | `(i32) -> (i32 i32)` |
| `tdHS` | func | 2729 | `(i32) -> (i32)` |
| `phCr` | func | 2716 | `(i32) -> (i32)` |
| `CGZI` | func | 1259 | `(i32) -> (i32)` |
| `Ltkq` | func | 1850 | `(i32) -> ()` |
| `IXnV` | func | 2416 | `(i32) -> (f64)` |
| `BE6D` | func | 2771 | `(i32) -> (i32)` |
| `zsSP` | func | 1380 | `(i32 i32) -> (i32)` |
| `Sh61` | func | 2945 | `(i32 i32) -> (i32 i32)` |
| `GDFs` | func | 1482 | `(i32 i32) -> (i32)` |
| `c51V` | func | 1441 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `tlqF` | func | 2967 | `() -> (i32 i32)` |
| `yzpn` | func | 1240 | `(i32 i32 i32) -> ()` |
| `Fn1V` | func | 649 | `(i32 i32) -> (i32)` |
| `FMv0` | func | 1216 | `(i32 i32) -> (i32)` |
| `Y3RQ` | func | 2954 | `(i32) -> (i32 i32)` |
| `yC9e` | func | 1359 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `zXyr` | func | 792 | `(i32 i32) -> (i32)` |
| `LFTi` | func | 1851 | `(i32) -> ()` |
| `AytW` | func | 2419 | `(i32) -> (i32)` |
| `IGUh` | func | 2437 | `(i32 i32) -> ()` |
| `Gz2H` | func | 2955 | `(i32) -> (i32 i32)` |
| `CZmT` | func | 1825 | `(i32 i32) -> ()` |
| `czR8` | func | 2908 | `(i32 i32) -> (i32)` |
| `jOJT` | func | 2139 | `(i32 i32) -> (i32)` |
| `Dy4w` | func | 2417 | `(i32) -> (i32)` |
| `OoEz` | func | 1146 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vwpV` | func | 2402 | `(i32 i32) -> ()` |
| `PWs6` | func | 2447 | `(i32 i32) -> (i32)` |
| `ijkL` | func | 2491 | `(i32 i32) -> ()` |
| `xOwE` | func | 719 | `(i32) -> (i32)` |
| `GPbJ` | func | 1892 | `(i32) -> (i32)` |
| `sDww` | func | 1778 | `() -> (i32)` |
| `PrxY` | func | 887 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `j32D` | func | 1086 | `(i32 i32) -> ()` |
| `bVAj` | func | 2942 | `(i32 i32) -> (i32 i32)` |
| `YMFE` | func | 2293 | `(i32 i32) -> (i32)` |
| `MRoQ` | func | 2243 | `(i32 i32) -> ()` |
| `NK09` | func | 1968 | `(i32 f64) -> (i32)` |
| `z8J7` | func | 1907 | `(i32) -> (i32)` |
| `rfGp` | func | 2376 | `(i32) -> (i32)` |
| `Pdzz` | func | 2937 | `(i32 i32 i32) -> (i32 i32)` |
| `cCcW` | func | 1563 | `(i32 f64 f64 f64) -> (i32)` |
| `DL4H` | func | 1427 | `(i32 i32 i32 i32) -> ()` |
| `YRB8` | func | 1085 | `(i32 i32) -> (i32)` |
| `vhog` | func | 2709 | `(i32) -> (i32)` |
| `Fy0c` | func | 2454 | `(i32) -> (i32)` |
| `n9VH` | func | 1665 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `huZR` | func | 2160 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `U9iT` | func | 1234 | `(i32 i32 i32) -> (i32)` |
| `NNWm` | func | 2952 | `(i32) -> (i32 i32)` |
| `lIpR` | func | 2291 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 733 · max 733
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2015248, `i32` = i32.const 2015812

## Functions

- 2,859 bodies · 3,987,961 code bytes · avg 1.4 KB
- instruction scan: 2,859 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 104 |
| <= 128 bytes | 251 |
| <= 256 bytes | 365 |
| <= 512 bytes | 663 |
| <= 1024 bytes | 571 |
| <= 2048 bytes | 414 |
| <= 4096 bytes | 182 |
| <= 8192 bytes | 88 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 213 | 194,883 | 88,446 | local.get×25924, i32.const×9923, i32.load×5634, local.set×4736, local.tee×4648 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,484 | 54,537 | local.get×15175, i32.const×6560, i32.add×3203, local.set×3090, i32.load×2945 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 125 | 48,853 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,650 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,545 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 126 | 19,829 | 8,878 | local.get×2493, i32.const×1113, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,713 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 61 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 191 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 222 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 713 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 998 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1553 | `(i32 i32) -> (i32)` | 180 | 54,455 | 19,757 | local.get×6549, i32.const×2619, i64.store×1893, i64.const×1069, i64.load×1044 |
| 1952 | `(i32 i32) -> ()` | 110 | 38,693 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2542 | `(i32 i32) -> ()` | 397 | 142,149 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2811 | `(i32 i32 i32 i32) -> ()` | 137 | 30,438 | 13,878 | local.get×4157, i32.const×1460, local.tee×728, local.set×674, i32.load×609 |
| 2830 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 533,425 |
| `i32.const` | 223,596 |
| `local.tee` | 99,195 |
| `local.set` | 93,243 |
| `i32.load` | 93,207 |
| `i32.add` | 86,342 |
| `end` | 78,345 |
| `br_if` | 63,691 |
| `i32.store` | 46,089 |
| `block` | 36,897 |
| `i64.const` | 32,177 |
| `i64.store` | 31,285 |
| `if` | 29,859 |
| `call` | 28,802 |
| `i32.sub` | 24,376 |
| `i64.load` | 23,192 |
| `br` | 22,986 |
| `i32.eqz` | 19,297 |
| `select` | 16,818 |
| `i32.shl` | 16,316 |
| `i32.and` | 16,220 |
| `i32.ne` | 15,726 |
| `i32.load8_u` | 14,746 |
| `i32.eq` | 13,782 |
| `i32.store8` | 12,527 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,859/2,859 (degraded: 0)
