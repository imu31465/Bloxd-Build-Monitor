# WASM module: `bloxd_wasm_webgl_bg`

> environment **preprod.bloxd.io** · build `w4ddu.56408518` · analyzed 2026-11-24T00:42:21+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgl_bg.e291fcd4e174899e0a2c.wasm
> 5,500,808 bytes (5.2 MB) · sha256 `1a61f36acda21763…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,368,803 → 5,500,808 bytes (+132,005)
- defined functions 2,859 → 2,904
- code bytes 3,973,490 → 4,029,569
- data bytes 1,348,615 → 1,422,466
- name-section module id `cdaf671bdfeeb0f5.10796` → `e06f5bd3c7670973.10886`
- export signatures: +1 × `(i32) -> (i32)`; +1 × `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)`; +1 × `(i32) -> (i32 i32)`; -1 × `(i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)`
- import signatures: +1 × `(i32) -> ()`
- export identifiers rotated by the obfuscator: 1/156 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `R8UnormR32FloatRgba8UnormBgra8UnormDepth24PlusDepth24PlusSte`; `terrain-atlas1-anim-lit-packed-texterrain-atlas1-anim-lit-pa`; `terrain-atlas1-anim-packed-cellsterrain-atlas1-anim-lit-pack`; `terrain-atlas1-lit-packed-texterrain-atlas1-lit-packed-rest-`; `terrain-atlasn-anim-lit-packed-texterrain-atlasn-anim-lit-pa`; `terrain-atlasn-anim-packed-cellsterrain-atlasn-anim-lit-pack`
- removed embedded strings: `    MeshIo_mesh_0040d000053_l7_x input_x = MeshIo_mesh_0040d`; `    MeshIo_mesh_400040d000053_l7_x input_x = MeshIo_mesh_400`; `    MeshIo_mesh_400044d000053_l3_x input_x = MeshIo_mesh_400`; ` !"#$%&'()*+,-./01234567in_sineout_sinein_out_sinein_quadout`; `UV2VERTEXCOLORVERTEXALPHAOPACITYRGBEMISSIVELITE_REFLECTION_L`; `surface depth slopesurface depthsurface cullsurface alphaatt`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,904 / 299 |
| Exports / imports | 156 / 300 |
| Code bytes (function bodies) | 4,029,569 (3.8 MB) |
| Total local variables | 30,681 |
| Instructions (scanable bodies) | 1,889,707 |
| Data segments / bytes | 4,028 / 1,422,466 |
| Element segments / entries | 1 / 752 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `e06f5bd3c7670973.10886` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,498 | 176 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,954 | 2904 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,249 | 156 |
| 9 | element | 1,511 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,034,891 | 2904 |
| 11 | data | 1,454,995 | 4028 |
| 0 | custom:name | 30 | — |

## Types

176 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `CVd0.XRuN` | memory | `[128..14648]` |
| 0 | `CVd0.SIlx` | func | `(i32) -> (f64)` |
| 1 | `CVd0.l8PV` | func | `() -> (i32)` |
| 2 | `CVd0.dAy1` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `CVd0.awLn` | func | `(i32) -> ()` |
| 4 | `CVd0.U7tC` | func | `(i32 i32) -> (i32)` |
| 5 | `CVd0.qzfg` | func | `(i32) -> (i32)` |
| 6 | `CVd0.pmu7` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `CVd0.kck4` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `CVd0.ERqg` | func | `(i32) -> (i32)` |
| 9 | `CVd0.pQUS` | func | `(i32 i32) -> ()` |
| 10 | `CVd0.M9mc` | func | `(i32 i32) -> ()` |
| 11 | `CVd0.e0Mo` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `CVd0.IoxT` | func | `(i32 i32) -> (i32)` |
| 13 | `CVd0.NMmu` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `CVd0.Jh2Z` | func | `(i32) -> (i32)` |
| 15 | `CVd0.zo8U` | func | `(i32 i32) -> (i32)` |
| 16 | `CVd0.ijky` | func | `(i32 i32) -> (i32)` |
| 17 | `CVd0.qFrR` | func | `(i32 i32) -> ()` |
| 18 | `CVd0.ghN1` | func | `(i32) -> (i32)` |
| 19 | `CVd0.GHmp` | func | `(i32) -> (i32)` |
| 20 | `CVd0.qEVs` | func | `(i32) -> (i32)` |
| 21 | `CVd0.W2ZQ` | func | `(i32) -> ()` |
| 22 | `CVd0.tjlk` | func | `(i32 i32) -> ()` |
| 23 | `CVd0.TH6m` | func | `(i32 i32) -> ()` |
| 24 | `CVd0.gAov` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `CVd0.iwxd` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `CVd0.h2yW` | func | `(i32) -> (i32)` |
| 27 | `CVd0.xLBJ` | func | `(i32 i32) -> ()` |
| 28 | `CVd0.tNMr` | func | `(i32 i32) -> (i32)` |
| 29 | `CVd0.cAEg` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `CVd0.gKgl` | func | `(i32 i32) -> (i32)` |
| 31 | `CVd0.Gwbn` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `CVd0.Mu10` | func | `(i32) -> (i32)` |
| 33 | `CVd0.mjdv` | func | `(i32 i32) -> ()` |
| 34 | `CVd0.T0wk` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `CVd0.jmy4` | func | `(i32) -> (i32)` |
| 36 | `CVd0.WanY` | func | `(i32) -> (i32)` |
| 37 | `CVd0.zhlZ` | func | `(i32) -> (i32)` |
| 38 | `CVd0.ci71` | func | `(i32 i32) -> (i32)` |
| 39 | `CVd0.lj6C` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `CVd0.UHNf` | func | `(i32) -> (i32)` |
| 41 | `CVd0.puE3` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `CVd0.d8tE` | func | `() -> (f64)` |
| 43 | `CVd0.JUK1` | func | `(i32) -> (i32)` |
| 44 | `CVd0.R8nC` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `CVd0.Rn9y` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `CVd0.xWCP` | func | `(i32 i32 i32) -> ()` |
| 47 | `CVd0.w6DJ` | func | `(i32 i32 i32) -> ()` |
| 48 | `CVd0.SsBO` | func | `(i32 i32 i32) -> ()` |
| 49 | `CVd0.F339` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `CVd0.A8ds` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `CVd0.fbKh` | func | `(i32 i32) -> ()` |
| 52 | `CVd0.H3Da` | func | `(i32 i32) -> ()` |
| 53 | `CVd0.VWAq` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `CVd0.ciMx` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `CVd0.quHj` | func | `(i32 f32 f32) -> ()` |
| 56 | `CVd0.lROu` | func | `(i32 f32 f32) -> ()` |
| 57 | `CVd0.xFTN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `CVd0.xLNb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `CVd0.zDAi` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `CVd0.FjsZ` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `CVd0.yqff` | func | `(i32 i32 i32) -> ()` |
| 62 | `CVd0.Q4Hu` | func | `(i32 i32 i32) -> ()` |
| 63 | `CVd0.ofze` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `CVd0.Cdc5` | func | `(i32 i32 i32) -> ()` |
| 65 | `CVd0.YwY3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `CVd0.dB67` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `CVd0.wXhK` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `CVd0.Mw6Q` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `CVd0.ut5C` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `CVd0.EmuY` | func | `(i32) -> (i32)` |
| 71 | `CVd0.WPrI` | func | `(i32) -> ()` |
| 72 | `CVd0.UxH0` | func | `(i32) -> (i32)` |
| 73 | `CVd0.fSX2` | func | `(i32 i32) -> (i32)` |
| 74 | `CVd0.cLAV` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `CVd0.SOA5` | func | `(i32 i32 i32) -> ()` |
| 76 | `CVd0.eYga` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `CVd0.L7Ri` | func | `() -> (f64)` |
| 78 | `CVd0.W3rJ` | func | `() -> (f64)` |
| 79 | `CVd0.jRre` | func | `(i32 i32) -> ()` |
| 80 | `CVd0.PudF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `CVd0.eWAj` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `CVd0.ndGH` | func | `(i32 i32 i32) -> ()` |
| 83 | `CVd0.kayz` | func | `(i32 i32 i32) -> ()` |
| 84 | `CVd0.sQZz` | func | `(i32 i32) -> ()` |
| 85 | `CVd0.vMxJ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `CVd0.h0cA` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `CVd0.Y33Q` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `CVd0.dU2o` | func | `(i32 i32) -> ()` |
| 89 | `CVd0.TvqK` | func | `(i32 i32) -> ()` |
| 90 | `CVd0.X7l5` | func | `(i32) -> (i32)` |
| 91 | `CVd0.P4DT` | func | `(i32 i32 i32) -> ()` |
| 92 | `CVd0.u2Gv` | func | `(i32 i32 i32) -> ()` |
| 93 | `CVd0.lhus` | func | `(i32) -> (i32)` |
| 94 | `CVd0.P5c3` | func | `(i32) -> (i32)` |
| 95 | `CVd0.g9KT` | func | `(i32 i32) -> ()` |
| 96 | `CVd0.EndF` | func | `(i32 i32) -> ()` |
| 97 | `CVd0.KtCn` | func | `(i32 i32) -> ()` |
| 98 | `CVd0.RXIZ` | func | `(i32 i32) -> ()` |
| 99 | `CVd0.V3uZ` | func | `(i32 i32 i32) -> ()` |
| 100 | `CVd0.fSwD` | func | `(i32 i32 i32) -> ()` |
| 101 | `CVd0.GnSH` | func | `(i32 i32 f32) -> ()` |
| 102 | `CVd0.nV9n` | func | `(i32 i32 f32) -> ()` |
| 103 | `CVd0.tA73` | func | `(i32 i32 i32) -> ()` |
| 104 | `CVd0.UVB1` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `CVd0.ESOO` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `CVd0.XgKj` | func | `(i32 i32) -> ()` |
| 107 | `CVd0.DRMj` | func | `(i32 i32) -> ()` |
| 108 | `CVd0.yjED` | func | `(i32 i32) -> ()` |
| 109 | `CVd0.u9uA` | func | `(i32 i32) -> ()` |
| 110 | `CVd0.I7pY` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `CVd0.cv8X` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `CVd0.nkXK` | func | `(i32 i32 i32) -> ()` |
| 113 | `CVd0.PCMw` | func | `(i32 i32 i32) -> ()` |
| 114 | `CVd0.nE5i` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `CVd0.qKWF` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `CVd0.vTfc` | func | `(i32 i32) -> ()` |
| 117 | `CVd0.OSv4` | func | `(i32 i32) -> ()` |
| 118 | `CVd0.WK2q` | func | `(i32 i32) -> (i32)` |
| 119 | `CVd0.FtDc` | func | `(i32 i32) -> (i32)` |
| 120 | `CVd0.ou6S` | func | `(i32 i32) -> ()` |
| 121 | `CVd0.qXFs` | func | `(i32 i32) -> ()` |
| 122 | `CVd0.XS7N` | func | `(i32) -> (i32)` |
| 123 | `CVd0.Xz22` | func | `(i32 i32) -> ()` |
| 124 | `CVd0.p73K` | func | `(i32 i32) -> ()` |
| 125 | `CVd0.xwgx` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `CVd0.lXcm` | func | `(i32 i32 i32) -> ()` |
| 127 | `CVd0.tBJ5` | func | `(i32 i32 i32) -> ()` |
| 128 | `CVd0.ULAj` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `CVd0.eRaY` | func | `(i32 i32) -> ()` |
| 130 | `CVd0.EG0q` | func | `(i32 i32 i32) -> ()` |
| 131 | `CVd0.an2d` | func | `(i32 i32 i32) -> ()` |
| 132 | `CVd0.WfGk` | func | `(i32 i32 i32) -> ()` |
| 133 | `CVd0.PDaB` | func | `(i32 i32 i32) -> ()` |
| 134 | `CVd0.uToK` | func | `(i32) -> ()` |
| 135 | `CVd0.KIKz` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `CVd0.qOvM` | func | `(i32 i32 i32) -> ()` |
| 137 | `CVd0.ThEq` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `CVd0.cDqf` | func | `(i32 i32) -> ()` |
| 139 | `CVd0.iAnw` | func | `(i32) -> (i32)` |
| 140 | `CVd0.ljyx` | func | `(i32 i32) -> ()` |
| 141 | `CVd0.aw1k` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `CVd0.VvCr` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `CVd0.SACB` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `CVd0.Dc6S` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `CVd0.U84G` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `CVd0.YUDv` | func | `(i32 i32) -> ()` |
| 147 | `CVd0.XWYS` | func | `(i32 i32) -> ()` |
| 148 | `CVd0.K17I` | func | `(i32 i32) -> ()` |
| 149 | `CVd0.GQ8R` | func | `(i32 i32) -> ()` |
| 150 | `CVd0.UKco` | func | `(i32) -> (i32)` |
| 151 | `CVd0.ABnF` | func | `(i32) -> (i32)` |
| 152 | `CVd0.WoyJ` | func | `(i32) -> (i32)` |
| 153 | `CVd0.e345` | func | `(i32) -> (i32)` |
| 154 | `CVd0.aAMh` | func | `(i32) -> (i32)` |
| 155 | `CVd0.fXyH` | func | `(i32) -> (i32)` |
| 156 | `CVd0.pl5Z` | func | `() -> (i32)` |
| 157 | `CVd0.v25E` | func | `() -> (i32)` |
| 158 | `CVd0.dLdD` | func | `() -> (i32)` |
| 159 | `CVd0.EPK7` | func | `() -> (i32)` |
| 160 | `CVd0.f2Ep` | func | `(i32 i32) -> (i32)` |
| 161 | `CVd0.K2AI` | func | `(i32) -> ()` |
| 162 | `CVd0.BwOu` | func | `(i32 i32) -> (i32)` |
| 163 | `CVd0.RXgO` | func | `(i32) -> (i32)` |
| 164 | `CVd0.ZBv2` | func | `(i32) -> (i32)` |
| 165 | `CVd0.eO2i` | func | `(i32) -> (i32)` |
| 166 | `CVd0.lGGm` | func | `(i32) -> ()` |
| 167 | `CVd0.V52N` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `CVd0.Gevi` | func | `(i32) -> (i32)` |
| 169 | `CVd0.F7qB` | func | `(i32) -> (i32)` |
| 170 | `CVd0.ftOH` | func | `(i32 i32) -> (i32)` |
| 171 | `CVd0.MAPI` | func | `(i32) -> ()` |
| 172 | `CVd0.pbcM` | func | `() -> (i32)` |
| 173 | `CVd0.Id6l` | func | `(i32 i32) -> (i32)` |
| 174 | `CVd0.N1Jo` | func | `(i32 i32) -> ()` |
| 175 | `CVd0.NMcD` | func | `(i32 i32) -> ()` |
| 176 | `CVd0.xqvN` | func | `(i32) -> (i32)` |
| 177 | `CVd0.lEVS` | func | `(i32 i32) -> (i32)` |
| 178 | `CVd0.WVzW` | func | `(i32) -> ()` |
| 179 | `CVd0.SFdG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `CVd0.Rk2D` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `CVd0.ZUqB` | func | `(i32 i32) -> ()` |
| 182 | `CVd0.OtwA` | func | `(i32 i32) -> ()` |
| 183 | `CVd0.cKzN` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `CVd0.PhFC` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `CVd0.YKic` | func | `(i32 f32) -> ()` |
| 186 | `CVd0.lVyU` | func | `(i32 f32) -> ()` |
| 187 | `CVd0.joCe` | func | `(i32 i32) -> ()` |
| 188 | `CVd0.uEle` | func | `(i32 i32) -> ()` |
| 189 | `CVd0.Mgoz` | func | `(i32) -> (i32)` |
| 190 | `CVd0.vlcP` | func | `(i32) -> (i32)` |
| 191 | `CVd0.my45` | func | `(i32) -> (i32)` |
| 192 | `CVd0.gnwq` | func | `(i32) -> (i32)` |
| 193 | `CVd0.lUnV` | func | `(i32 i32 i32) -> ()` |
| 194 | `CVd0.DTVR` | func | `(i32 i32 i32) -> ()` |
| 195 | `CVd0.LUAM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `CVd0.DbUS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `CVd0.xAJL` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `CVd0.YBOl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `CVd0.MbTz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `CVd0.s0M9` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `CVd0.PrrG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `CVd0.xDme` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `CVd0.vrYT` | func | `(i32) -> (i32)` |
| 204 | `CVd0.Bt8D` | func | `(i32) -> (i32)` |
| 205 | `CVd0.siZp` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `CVd0.UJbs` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `CVd0.PlQv` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `CVd0.cRTR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `CVd0.XSQI` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `CVd0.d0eW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `CVd0.rMA6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `CVd0.SP7Y` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `CVd0.EZwq` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `CVd0.H100` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `CVd0.Mb7W` | func | `(i32 i32 i32) -> ()` |
| 216 | `CVd0.qof8` | func | `(i32 i32 i32) -> ()` |
| 217 | `CVd0.xbjj` | func | `(i32 i32) -> ()` |
| 218 | `CVd0.Rw06` | func | `(i32 i32) -> ()` |
| 219 | `CVd0.e9Vf` | func | `(i32 i32) -> ()` |
| 220 | `CVd0.PM4D` | func | `(i32 i32) -> ()` |
| 221 | `CVd0.AlLt` | func | `(i32 i32) -> ()` |
| 222 | `CVd0.RPAe` | func | `(i32 i32) -> ()` |
| 223 | `CVd0.hRnc` | func | `(i32 f32 f32) -> ()` |
| 224 | `CVd0.FMOA` | func | `(i32 f32 f32) -> ()` |
| 225 | `CVd0.PXh4` | func | `(i32 i32) -> ()` |
| 226 | `CVd0.RFAX` | func | `(i32 i32) -> ()` |
| 227 | `CVd0.J18J` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `CVd0.p3aO` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `CVd0.BFdv` | func | `(i32 i32 i32) -> ()` |
| 230 | `CVd0.KT1d` | func | `(i32) -> (i32)` |
| 231 | `CVd0.JGaC` | func | `(i32) -> (i32)` |
| 232 | `CVd0.c8N2` | func | `(i32 i32) -> ()` |
| 233 | `CVd0.moC5` | func | `(i32 i32) -> ()` |
| 234 | `CVd0.BYxv` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `CVd0.q3xi` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `CVd0.whE7` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `CVd0.gCov` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `CVd0.YebO` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `CVd0.rYBP` | func | `(i32 i32 i32) -> ()` |
| 240 | `CVd0.EFME` | func | `(i32 i32 i32) -> ()` |
| 241 | `CVd0.Skac` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `CVd0.BHgi` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `CVd0.EkCr` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `CVd0.dwqP` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `CVd0.Z1Pz` | func | `(i32) -> (i32)` |
| 246 | `CVd0.WHar` | func | `(i32) -> (i32)` |
| 247 | `CVd0.yd0Y` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `CVd0.qU5M` | func | `(i32 i32) -> ()` |
| 249 | `CVd0.VcgV` | func | `(i32 i32) -> ()` |
| 250 | `CVd0.OEgZ` | func | `(i32 i32) -> (i32)` |
| 251 | `CVd0.saBg` | func | `(i32 i32) -> (i32)` |
| 252 | `CVd0.E8X2` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `CVd0.dMbV` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `CVd0.J7PK` | func | `(i32 i32) -> ()` |
| 255 | `CVd0.QF1t` | func | `(i32 i32) -> ()` |
| 256 | `CVd0.RpJa` | func | `(i32) -> (i32)` |
| 257 | `CVd0.iUdv` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `CVd0.Ntxq` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `CVd0.tGLA` | func | `(i32) -> ()` |
| 260 | `CVd0.oYXs` | func | `(i32 i32) -> ()` |
| 261 | `CVd0.f1ea` | func | `(i32 i32) -> ()` |
| 262 | `CVd0.WmY8` | func | `(i32 i32) -> ()` |
| 263 | `CVd0.arRT` | func | `(i32 i32) -> ()` |
| 264 | `CVd0.L64Z` | func | `(i32 i32) -> ()` |
| 265 | `CVd0.rLen` | func | `(i32 i32) -> ()` |
| 266 | `CVd0.ZyrT` | func | `(i32 i32) -> ()` |
| 267 | `CVd0.Wcdj` | func | `(i32 i32) -> ()` |
| 268 | `CVd0.TrUz` | func | `(i32) -> (i32)` |
| 269 | `CVd0.Yr0Q` | func | `(i32) -> (i32)` |
| 270 | `CVd0.Q2Uf` | func | `(i32) -> (i32)` |
| 271 | `CVd0.qse9` | func | `(i32) -> (i32)` |
| 272 | `CVd0.rXKH` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `CVd0.tvx5` | func | `(i32) -> ()` |
| 274 | `CVd0.aJJ1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `CVd0.OHml` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `CVd0.jPwR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `CVd0.y7p3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `CVd0.IEo2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `CVd0.aAI2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `CVd0.cmbO` | func | `(i32) -> (i32)` |
| 281 | `CVd0.srX0` | func | `(i32) -> (i32)` |
| 282 | `CVd0.rpog` | func | `(i32) -> (i32)` |
| 283 | `CVd0.dje8` | func | `(i32) -> (i32)` |
| 284 | `CVd0.yzA5` | func | `(i32 i32) -> ()` |
| 285 | `CVd0.PiIX` | func | `(i32) -> ()` |
| 286 | `CVd0.Hdnw` | func | `(i32 i32) -> ()` |
| 287 | `CVd0.JMXI` | func | `(i32) -> (i32)` |
| 288 | `CVd0.hehw` | func | `(i32 i32) -> (i32)` |
| 289 | `CVd0.vEyN` | func | `(i32 i32) -> (i32)` |
| 290 | `CVd0.kPwU` | func | `(i32 i32) -> (i32)` |
| 291 | `CVd0.k4Nw` | func | `(f64) -> (i32)` |
| 292 | `CVd0.hKMR` | func | `(i32 i32) -> (i32)` |
| 293 | `CVd0.fbzM` | func | `(i32 i32) -> (i32)` |
| 294 | `CVd0.Rj9s` | func | `(i32 i32) -> (i32)` |
| 295 | `CVd0.EInJ` | func | `(i32 i32) -> (i32)` |
| 296 | `CVd0.dJtS` | func | `(i32 i32) -> (i32)` |
| 297 | `CVd0.tzAD` | func | `(i32 i32) -> (i32)` |
| 298 | `CVd0.UsHW` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `cogd` | func | 888 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Swj3` | func | 3061 | `(i32 i32) -> ()` |
| `w7d5` | func | 2583 | `() -> (i32)` |
| `qStR` | func | 669 | `(i32 i32) -> (i32)` |
| `ZV7V` | func | 2279 | `(i32 i32) -> ()` |
| `k0ip` | func | 2039 | `(i32 i32) -> ()` |
| `CGc2` | func | 2966 | `(i32 i32 i32 i32) -> (i32)` |
| `S06t` | func | 2464 | `(i32) -> ()` |
| `qjZS` | func | 1816 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `PdXe` | func | 2548 | `() -> (i32)` |
| `JUba` | func | 2331 | `(i32 i32) -> (i32)` |
| `PzAB` | func | 2143 | `(i32 i32) -> (i32)` |
| `F3hG` | func | 918 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `yOTV` | func | 2475 | `(i32 i32) -> ()` |
| `dDXl` | func | 2461 | `(i32) -> (i32)` |
| `Z0lS` | func | 2416 | `(i32) -> (i32)` |
| `y9Lt` | func | 1508 | `(i32 i32) -> (i32)` |
| `vjYT` | func | 2775 | `(i32) -> (i32)` |
| `WIKx` | func | 3002 | `(i32 i32) -> (i32 i32)` |
| `bQUH` | func | 3027 | `() -> (i32 i32)` |
| `UNwM` | func | 1587 | `(i32 f64 f64 f64) -> (i32)` |
| `yxhJ` | func | 1484 | `(i32 i32) -> (i32)` |
| `fOwm` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `uwlj` | func | 2463 | `(i32) -> (i32)` |
| `HL35` | func | 1208 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `VTX3` | func | 2941 | `() -> ()` |
| `QT1C` | func | 2488 | `(i32 i32) -> (i32)` |
| `zIhf` | func | 2360 | `(i32 i32) -> (i32)` |
| `LStQ` | func | 1810 | `() -> (i32)` |
| `cgF1` | func | 3051 | `(i32 i32 i32 i32) -> ()` |
| `hDXG` | func | 1831 | `(i32 i32 i32 i32) -> (i32)` |
| `SobF` | func | 2487 | `(i32) -> (i32)` |
| `YgC0` | func | 1257 | `(i32 i32 i32) -> (i32)` |
| `ALRg` | func | 679 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `YVA9` | func | 568 | `(i32 i32 i32) -> (i32)` |
| `vh3c` | func | 1454 | `(i32 i32 i32 i32) -> ()` |
| `tqLX` | func | 1751 | `(i32 i32) -> (i32)` |
| `XnuK` | func | 2997 | `(i32 i32) -> (i32 i32)` |
| `Yoh3` | func | 706 | `(i32 i32) -> (i32)` |
| `x706` | func | 2466 | `(i32) -> (i32)` |
| `iuqC` | func | 3122 | `(i32) -> ()` |
| `HqY5` | func | 1875 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `SKzf` | func | 2457 | `(i32) -> (f64)` |
| `PCa8` | func | 1237 | `(i32 i32) -> (i32)` |
| `RXBR` | func | 2582 | `(i32 i32) -> ()` |
| `sPIf` | func | 2786 | `(i32) -> (i32)` |
| `xWhh` | func | 1572 | `(i32 i32) -> (i32)` |
| `J8cH` | func | 907 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `gtJa` | func | 3116 | `(i32 i32 i32) -> ()` |
| `aPBq` | func | 2496 | `(i32) -> (i32)` |
| `gCwX` | func | 2465 | `(i32) -> (i32)` |
| `lk2I` | func | 2536 | `(i32 i32) -> ()` |
| `zQYJ` | func | 3000 | `(i32 i32) -> (i32 i32)` |
| `W8oP` | func | 1883 | `(i32) -> ()` |
| `oQFW` | func | 2992 | `(i32 i32 i32) -> (i32 i32)` |
| `f5Fw` | func | 1110 | `(i32 i32) -> ()` |
| `gaOW` | func | 1627 | `(i32 i32 i32 i32) -> (i32)` |
| `d6li` | func | 1316 | `(i32) -> ()` |
| `ierW` | func | 3089 | `() -> (i32)` |
| `Rb5X` | func | 1477 | `(i32 i32 i32 i32) -> (i32)` |
| `Vy34` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `QpOn` | func | 2402 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `sfc8` | func | 2973 | `(i32 i32) -> ()` |
| `MQqw` | func | 2479 | `(i32 i32) -> ()` |
| `p0AR` | func | 1733 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Tq0t` | func | 3168 | `(i32) -> ()` |
| `vnXs` | func | 2328 | `(i32 i32) -> (i32)` |
| `gp56` | func | 3192 | `() -> (i32)` |
| `fkVs` | func | 1583 | `(i32 i32) -> ()` |
| `XhIm` | func | 3001 | `(i32 i32) -> (i32 i32)` |
| `SYiJ` | func | 1331 | `(i32 i32 i32) -> (i32)` |
| `YOgV` | func | 3003 | `(i32 i32) -> (i32 i32)` |
| `GgBV` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Qs34` | func | 1170 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `o52k` | func | 3013 | `(i32) -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `FwKj` | func | 1557 | `(i32) -> (i32)` |
| `ubmw` | func | 2497 | `(i32) -> (i32)` |
| `Usn8` | func | 1264 | `(i32 i32 i32) -> ()` |
| `tGua` | func | 2489 | `(i32 i32) -> (i32)` |
| `OWgh` | func | 1582 | `(i32 i32) -> ()` |
| `O7Rz` | func | 2991 | `(i32 i32 i32) -> (i32 i32)` |
| `xdXR` | func | 2330 | `(i32 i32) -> (i32)` |
| `jVOp` | global | 1 | `` |
| `WINh` | func | 1926 | `(i32) -> (i32)` |
| `fo0h` | func | 1524 | `(i32 i32 i32) -> (i32)` |
| `ZhrT` | func | 2372 | `(i32 i32 i32 i32) -> (i32)` |
| `dV0P` | func | 2004 | `(i32 f64) -> (i32)` |
| `qqqe` | func | 1509 | `(i32 i32) -> (i32)` |
| `YJGx` | func | 1943 | `(i32) -> (i32)` |
| `iZgb` | func | 3167 | `(i32) -> (i32)` |
| `nvrR` | func | 2443 | `(i32 i32) -> ()` |
| `T75X` | func | 1851 | `(i32 i32 f64 f64 f64) -> ()` |
| `wVxH` | func | 2960 | `(i32 i32) -> (i32)` |
| `xcwv` | func | 2175 | `(i32 i32) -> (i32)` |
| `yLf2` | func | 1109 | `(i32 i32) -> (i32)` |
| `aVVK` | func | 2477 | `(i32) -> (i32)` |
| `uYv7` | func | 2444 | `(i32) -> (i32)` |
| `haGz` | func | 1474 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `xlrd` | func | 2399 | `(i32) -> (i32)` |
| `KJ4u` | func | 1884 | `(i32) -> ()` |
| `lTwn` | func | 2480 | `(i32) -> (i32)` |
| `ASHt` | func | 2998 | `(i32 i32) -> (i32 i32)` |
| `qdty` | func | 3123 | `() -> ()` |
| `NrUT` | func | 3060 | `(i32 i32 i32) -> ()` |
| `Gg8J` | func | 759 | `(i32 i32 i32) -> (i32)` |
| `qO2u` | func | 1283 | `(i32) -> (i32)` |
| `XH1x` | func | 2329 | `(i32 i32) -> (i32)` |
| `CgaR` | func | 2761 | `(i32) -> (i32)` |
| `Bu5j` | func | 1858 | `(i32 i32) -> ()` |
| `JfHL` | func | 3026 | `() -> (i32 i32)` |
| `PFaT` | func | 737 | `(i32) -> (i32)` |
| `Orm8` | func | 2467 | `(i32) -> (i32)` |
| `ah2E` | func | 3163 | `() -> (f64)` |
| `iOLq` | func | 1868 | `(i32 i32) -> (i32)` |
| `GF43` | func | 2478 | `(i32) -> (i32)` |
| `kVUp` | func | 1385 | `(i32 f64 f64) -> (i32)` |
| `pZfV` | func | 2248 | `(i32 i32) -> ()` |
| `eHJg` | func | 2020 | `(i32 f64 f64 f64) -> (i32)` |
| `bND8` | func | 1215 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `TulB` | func | 3191 | `() -> (i32)` |
| `DMrg` | func | 1544 | `(i32 i32 i32 i32) -> (i32)` |
| `QRHW` | func | 2249 | `(i32 f64) -> (i32)` |
| `RUry` | func | 2195 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `V4gA` | func | 1978 | `(i32 i32) -> ()` |
| `exJy` | func | 1717 | `(i32) -> (i32)` |
| `LPKR` | func | 1945 | `(i32 i32 i32 i32) -> ()` |
| `jOHv` | func | 2498 | `(i32) -> (i32)` |
| `N1ps` | func | 2797 | `(i32) -> ()` |
| `L3SI` | func | 1694 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `L1F8` | func | 889 | `(i32 i32) -> (i32)` |
| `diB2` | func | 2460 | `(i32) -> (i32)` |
| `pdQg` | func | 1384 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `VNkr` | func | 3015 | `(i32) -> (i32 i32)` |
| `BN1U` | global | 2 | `` |
| `nK2P` | func | 2458 | `(i32) -> (i32)` |
| `l3yX` | func | 1404 | `(i32 i32) -> (i32)` |
| `dFzT` | func | 1290 | `(i32 i32) -> (i32)` |
| `WSHl` | func | 3011 | `(i32) -> (i32 i32)` |
| `iCB5` | func | 1432 | `() -> (i32)` |
| `AWnV` | func | 2754 | `(i32) -> (i32)` |
| `Oqwg` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `e7oS` | func | 3012 | `(i32) -> (i32 i32)` |
| `bn5t` | func | 1511 | `(i32 f64) -> (f64)` |
| `QRQg` | func | 2061 | `(i32 i32) -> (i32)` |
| `v5rQ` | func | 810 | `(i32 i32) -> (i32)` |
| `UBfy` | func | 1469 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `UdYo` | func | 1497 | `(i32 i32) -> (i32)` |
| `oXzw` | func | 1209 | `(i32 i32 i32 i32) -> (i32)` |
| `LU7h` | func | 2999 | `(i32 i32) -> (i32 i32)` |
| `kkjk` | func | 2819 | `(i32) -> (i32)` |
| `UVVd` | func | 1478 | `(i32) -> (i32)` |
| `saCr` | func | 2462 | `(i32) -> (i32)` |
| `VyJk` | func | 1428 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `pPrl` | func | 2459 | `(i32) -> (i32)` |
| `s76m` | func | 3014 | `(i32) -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 753 · max 753
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2637440, `i32` = i32.const 2638020

## Functions

- 2,904 bodies · 4,029,569 code bytes · avg 1.4 KB
- instruction scan: 2,904 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 113 |
| <= 128 bytes | 258 |
| <= 256 bytes | 375 |
| <= 512 bytes | 671 |
| <= 1024 bytes | 572 |
| <= 2048 bytes | 421 |
| <= 4096 bytes | 183 |
| <= 8192 bytes | 90 |
| <= 16384 bytes | 31 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 213 | 194,901 | 88,446 | local.get×25924, i32.const×9923, i32.load×5634, local.set×4736, local.tee×4648 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 112,325 | 54,451 | local.get×15156, i32.const×6534, i32.add×3194, local.set×3087, i32.load×2951 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,544 | 21,400 | local.get×6231, i32.const×2827, local.set×1224, i32.add×1128, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 125 | 48,862 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 126 | 19,829 | 8,878 | local.get×2493, i32.const×1113, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,714 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 63 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 195 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 226 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 717 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1005 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1569 | `(i32 i32) -> (i32)` | 180 | 54,455 | 19,757 | local.get×6549, i32.const×2619, i64.store×1893, i64.const×1069, i64.load×1044 |
| 1969 | `(i32 i32) -> ()` | 110 | 38,696 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2577 | `(i32 i32) -> ()` | 397 | 142,149 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2855 | `(i32 i32 i32 i32) -> ()` | 137 | 30,443 | 13,878 | local.get×4157, i32.const×1460, local.tee×728, local.set×674, i32.load×609 |
| 2873 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 538,563 |
| `i32.const` | 225,687 |
| `local.tee` | 100,185 |
| `i32.load` | 94,458 |
| `local.set` | 93,813 |
| `i32.add` | 87,191 |
| `end` | 79,124 |
| `br_if` | 64,227 |
| `i32.store` | 46,741 |
| `block` | 37,203 |
| `i64.const` | 32,597 |
| `i64.store` | 31,712 |
| `if` | 30,232 |
| `call` | 29,411 |
| `i32.sub` | 24,619 |
| `i64.load` | 23,609 |
| `br` | 23,098 |
| `i32.eqz` | 19,510 |
| `select` | 16,876 |
| `i32.shl` | 16,440 |
| `i32.and` | 16,283 |
| `i32.ne` | 15,842 |
| `i32.load8_u` | 14,938 |
| `i32.eq` | 13,845 |
| `i32.store8` | 12,612 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,904/2,904 (degraded: 0)
