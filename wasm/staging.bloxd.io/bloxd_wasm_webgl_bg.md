# WASM module: `bloxd_wasm_webgl_bg`

> environment **staging.bloxd.io** · build `1yqdn.8419f1e1` · analyzed 2026-11-28T02:07:49+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl_bg.2b5612c650a296033400.wasm
> 5,662,882 bytes (5.4 MB) · sha256 `8157beb90345cb7d…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,545,853 → 5,662,882 bytes (+117,029)
- defined functions 2,937 → 2,979
- imported functions 299 → 300
- code bytes 4,069,193 → 4,121,034
- data bytes 1,427,659 → 1,490,580
- name-section module id `9ea359866192d24e.10998` → `63f968e094f0c68e.11124`
- export signatures: +1 × `(i32 i32) -> ()`; +3 × `(i32) -> ()`; +1 × `(i32 i32 i32 i32) -> ()`; +1 × `(i32) -> (i32 i32)`; +1 × `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()`
- import signatures: +1 × `(i32) -> ()`
- export identifiers rotated by the obfuscator: 1/167 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `    MeshIo_mesh_general_atlasg input_x = MeshIo_mesh_general`
- removed embedded strings: `DEEJJJJJJHHHHEEEEEEEEEEEEEEEEEEEEEJJJJJJDDDEEEEEDDDDDDDDEEEE`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,979 / 300 |
| Exports / imports | 167 / 301 |
| Code bytes (function bodies) | 4,121,034 (3.9 MB) |
| Total local variables | 31,782 |
| Instructions (scanable bodies) | 1,932,562 |
| Data segments / bytes | 4,290 / 1,490,580 |
| Element segments / entries | 1 / 758 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `63f968e094f0c68e.11124` |
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
| 11 | data | 1,525,217 | 4290 |
| 0 | custom:name | 30 | — |

## Types

182 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

301 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `eXFb.VpXS` | memory | `[128..14648]` |
| 0 | `eXFb.oAZq` | func | `(i32) -> (f64)` |
| 1 | `eXFb.D55s` | func | `() -> (i32)` |
| 2 | `eXFb.h6Ht` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `eXFb.inyf` | func | `(i32) -> ()` |
| 4 | `eXFb.XqD8` | func | `(i32 i32) -> (i32)` |
| 5 | `eXFb.Bn6B` | func | `(i32) -> (i32)` |
| 6 | `eXFb.yCdL` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `eXFb.yNs3` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `eXFb.ZJrR` | func | `(i32) -> (i32)` |
| 9 | `eXFb.Xgxo` | func | `(i32 i32) -> ()` |
| 10 | `eXFb.x0h1` | func | `(i32 i32) -> ()` |
| 11 | `eXFb.GVSj` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `eXFb.gOXC` | func | `(i32 i32) -> (i32)` |
| 13 | `eXFb.pxYV` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `eXFb.kGwb` | func | `(i32) -> (i32)` |
| 15 | `eXFb.TJiF` | func | `(i32 i32) -> (i32)` |
| 16 | `eXFb.jTPF` | func | `(i32 i32) -> (i32)` |
| 17 | `eXFb.RigN` | func | `(i32 i32) -> ()` |
| 18 | `eXFb.iSCF` | func | `(i32) -> (i32)` |
| 19 | `eXFb.Cwsk` | func | `(i32) -> (i32)` |
| 20 | `eXFb.bJFg` | func | `(i32) -> (i32)` |
| 21 | `eXFb.kjR8` | func | `(i32) -> ()` |
| 22 | `eXFb.kUNI` | func | `(i32 i32) -> ()` |
| 23 | `eXFb.RIMb` | func | `(i32 i32) -> ()` |
| 24 | `eXFb.Wbqm` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `eXFb.Q3ct` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `eXFb.xXWq` | func | `(i32) -> (i32)` |
| 27 | `eXFb.i0Ie` | func | `(i32 i32) -> ()` |
| 28 | `eXFb.UOg5` | func | `(i32 i32) -> (i32)` |
| 29 | `eXFb.Lk4T` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `eXFb.ufhy` | func | `(i32 i32) -> (i32)` |
| 31 | `eXFb.fu93` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `eXFb.aAhb` | func | `(i32) -> (i32)` |
| 33 | `eXFb.S9IZ` | func | `() -> (f64)` |
| 34 | `eXFb.M774` | func | `(i32 i32) -> ()` |
| 35 | `eXFb.DHjW` | func | `(i32) -> ()` |
| 36 | `eXFb.eJnX` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `eXFb.hYzU` | func | `(i32) -> (i32)` |
| 38 | `eXFb.ZlZ0` | func | `(i32) -> (i32)` |
| 39 | `eXFb.CT6l` | func | `(i32) -> (i32)` |
| 40 | `eXFb.HbIf` | func | `(i32 i32) -> (i32)` |
| 41 | `eXFb.xYkH` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `eXFb.HVpu` | func | `(i32) -> (i32)` |
| 43 | `eXFb.yQa2` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `eXFb.icsb` | func | `(i32) -> (i32)` |
| 45 | `eXFb.qhhe` | func | `(i32 i32 i32 i32) -> ()` |
| 46 | `eXFb.FdTL` | func | `(i32 i32 i32) -> (i32)` |
| 47 | `eXFb.jGXk` | func | `(i32 i32 i32) -> ()` |
| 48 | `eXFb.ghOC` | func | `(i32 i32 i32) -> ()` |
| 49 | `eXFb.lTwZ` | func | `(i32 i32 i32) -> ()` |
| 50 | `eXFb.NSez` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `eXFb.v1xt` | func | `(i32 i32 i32 i32) -> ()` |
| 52 | `eXFb.u5XY` | func | `(i32 i32) -> ()` |
| 53 | `eXFb.fbGR` | func | `(i32 i32) -> ()` |
| 54 | `eXFb.BteH` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `eXFb.Oo2n` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `eXFb.EDw8` | func | `(i32 f32 f32) -> ()` |
| 57 | `eXFb.bcLa` | func | `(i32 f32 f32) -> ()` |
| 58 | `eXFb.tJF4` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `eXFb.tavc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `eXFb.hoD3` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `eXFb.g0sT` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `eXFb.OIvu` | func | `(i32 i32 i32) -> ()` |
| 63 | `eXFb.zrPw` | func | `(i32 i32 i32) -> ()` |
| 64 | `eXFb.FHGY` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `eXFb.ESOq` | func | `(i32 i32 i32) -> ()` |
| 66 | `eXFb.iEBv` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `eXFb.K6fR` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `eXFb.u40q` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 69 | `eXFb.G4Cw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `eXFb.ndkn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 71 | `eXFb.ClvE` | func | `(i32) -> (i32)` |
| 72 | `eXFb.ubYF` | func | `(i32) -> ()` |
| 73 | `eXFb.wUmx` | func | `(i32) -> (i32)` |
| 74 | `eXFb.gEzY` | func | `(i32 i32) -> (i32)` |
| 75 | `eXFb.aG74` | func | `(i32 i32 i32) -> (i32)` |
| 76 | `eXFb.fPOS` | func | `(i32 i32 i32) -> ()` |
| 77 | `eXFb.GJRW` | func | `(i32 i32 i32 i32) -> (i32)` |
| 78 | `eXFb.JW3q` | func | `() -> (f64)` |
| 79 | `eXFb.S45L` | func | `() -> (f64)` |
| 80 | `eXFb.X4Xc` | func | `(i32 i32) -> ()` |
| 81 | `eXFb.RlQP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 82 | `eXFb.viQa` | func | `(i32 i32 i32) -> (i32)` |
| 83 | `eXFb.EKe6` | func | `(i32 i32 i32) -> ()` |
| 84 | `eXFb.beZO` | func | `(i32 i32 i32) -> ()` |
| 85 | `eXFb.RcH5` | func | `(i32 i32) -> ()` |
| 86 | `eXFb.ogeG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `eXFb.LAws` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `eXFb.G5fL` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 89 | `eXFb.HU2l` | func | `(i32 i32) -> ()` |
| 90 | `eXFb.WxHy` | func | `(i32 i32) -> ()` |
| 91 | `eXFb.QuWL` | func | `(i32) -> (i32)` |
| 92 | `eXFb.ksKL` | func | `(i32 i32 i32) -> ()` |
| 93 | `eXFb.B4BN` | func | `(i32 i32 i32) -> ()` |
| 94 | `eXFb.tS7S` | func | `(i32) -> (i32)` |
| 95 | `eXFb.jmRX` | func | `(i32) -> (i32)` |
| 96 | `eXFb.lHYC` | func | `(i32 i32) -> ()` |
| 97 | `eXFb.Xigu` | func | `(i32 i32) -> ()` |
| 98 | `eXFb.Vdhu` | func | `(i32 i32) -> ()` |
| 99 | `eXFb.z135` | func | `(i32 i32) -> ()` |
| 100 | `eXFb.HnmU` | func | `(i32 i32 i32) -> ()` |
| 101 | `eXFb.cyDK` | func | `(i32 i32 i32) -> ()` |
| 102 | `eXFb.NrjE` | func | `(i32 i32 f32) -> ()` |
| 103 | `eXFb.UNgo` | func | `(i32 i32 f32) -> ()` |
| 104 | `eXFb.bgY1` | func | `(i32 i32 i32) -> ()` |
| 105 | `eXFb.t1kR` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `eXFb.RxaF` | func | `(i32 i32 f32 f32) -> ()` |
| 107 | `eXFb.YNpA` | func | `(i32 i32) -> ()` |
| 108 | `eXFb.GU7W` | func | `(i32 i32) -> ()` |
| 109 | `eXFb.Ckt7` | func | `(i32 i32) -> ()` |
| 110 | `eXFb.Mc7z` | func | `(i32 i32) -> ()` |
| 111 | `eXFb.UHOT` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `eXFb.pJlH` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 113 | `eXFb.b8E7` | func | `(i32 i32 i32) -> ()` |
| 114 | `eXFb.rqJ2` | func | `(i32 i32 i32) -> ()` |
| 115 | `eXFb.IbjS` | func | `(i32 i32 i32 i32) -> ()` |
| 116 | `eXFb.NxJf` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 117 | `eXFb.tfiv` | func | `(i32 i32) -> ()` |
| 118 | `eXFb.s9cP` | func | `(i32 i32) -> ()` |
| 119 | `eXFb.nflu` | func | `(i32 i32) -> (i32)` |
| 120 | `eXFb.MyNn` | func | `(i32 i32) -> (i32)` |
| 121 | `eXFb.LWgc` | func | `(i32 i32) -> ()` |
| 122 | `eXFb.WcC1` | func | `(i32 i32) -> ()` |
| 123 | `eXFb.amsI` | func | `(i32) -> (i32)` |
| 124 | `eXFb.cDTP` | func | `(i32 i32) -> ()` |
| 125 | `eXFb.Nv01` | func | `(i32 i32) -> ()` |
| 126 | `eXFb.UIzr` | func | `(i32 i32 i32 i32) -> ()` |
| 127 | `eXFb.q09J` | func | `(i32 i32 i32) -> ()` |
| 128 | `eXFb.FB3L` | func | `(i32 i32 i32) -> ()` |
| 129 | `eXFb.JCaY` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 130 | `eXFb.icG7` | func | `(i32 i32) -> ()` |
| 131 | `eXFb.UltS` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `eXFb.lRcQ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 133 | `eXFb.AdjQ` | func | `(i32 i32 i32) -> ()` |
| 134 | `eXFb.gSpf` | func | `(i32 i32 i32) -> ()` |
| 135 | `eXFb.N1oN` | func | `(i32) -> ()` |
| 136 | `eXFb.JXrX` | func | `(i32 i32 i32) -> (i32)` |
| 137 | `eXFb.OrO0` | func | `(i32 i32 i32) -> ()` |
| 138 | `eXFb.HJpb` | func | `(i32 i32 i32) -> (i32)` |
| 139 | `eXFb.U3wr` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `eXFb.ueS5` | func | `(i32 i32 i32) -> (i32)` |
| 141 | `eXFb.Z0iX` | func | `(i32 i32) -> ()` |
| 142 | `eXFb.yLmb` | func | `(i32) -> (i32)` |
| 143 | `eXFb.NBDz` | func | `(i32 i32) -> ()` |
| 144 | `eXFb.cf5P` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `eXFb.gYxG` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `eXFb.Wg2Q` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `eXFb.CUFS` | func | `(i32 i32) -> ()` |
| 148 | `eXFb.BsPL` | func | `(i32 i32) -> ()` |
| 149 | `eXFb.jjfD` | func | `(i32 i32) -> ()` |
| 150 | `eXFb.czC2` | func | `(i32 i32) -> ()` |
| 151 | `eXFb.g75l` | func | `(i32) -> (i32)` |
| 152 | `eXFb.nOs6` | func | `(i32) -> (i32)` |
| 153 | `eXFb.OgZG` | func | `(i32) -> (i32)` |
| 154 | `eXFb.sJ3d` | func | `(i32) -> (i32)` |
| 155 | `eXFb.nTYQ` | func | `(i32) -> (i32)` |
| 156 | `eXFb.O2Y7` | func | `(i32) -> (i32)` |
| 157 | `eXFb.NBH4` | func | `() -> (i32)` |
| 158 | `eXFb.skdK` | func | `() -> (i32)` |
| 159 | `eXFb.dTJF` | func | `() -> (i32)` |
| 160 | `eXFb.BBkV` | func | `() -> (i32)` |
| 161 | `eXFb.ZjRe` | func | `(i32 i32) -> (i32)` |
| 162 | `eXFb.XLDX` | func | `(i32) -> ()` |
| 163 | `eXFb.dBKy` | func | `(i32 i32) -> (i32)` |
| 164 | `eXFb.GCMu` | func | `(i32) -> (i32)` |
| 165 | `eXFb.RAkq` | func | `(i32) -> (i32)` |
| 166 | `eXFb.jaoL` | func | `(i32) -> (i32)` |
| 167 | `eXFb.wT68` | func | `(i32) -> ()` |
| 168 | `eXFb.H7Qh` | func | `(i32 i32 i32) -> (i32)` |
| 169 | `eXFb.qJaE` | func | `(i32) -> (i32)` |
| 170 | `eXFb.lhz9` | func | `(i32) -> (i32)` |
| 171 | `eXFb.uAip` | func | `(i32 i32) -> (i32)` |
| 172 | `eXFb.Mevi` | func | `(i32) -> ()` |
| 173 | `eXFb.gYlx` | func | `() -> (i32)` |
| 174 | `eXFb.Lc8A` | func | `(i32 i32) -> (i32)` |
| 175 | `eXFb.f5Sv` | func | `(i32 i32) -> ()` |
| 176 | `eXFb.Xnxt` | func | `(i32 i32) -> ()` |
| 177 | `eXFb.IQxS` | func | `(i32) -> (i32)` |
| 178 | `eXFb.h3w7` | func | `(i32 i32) -> (i32)` |
| 179 | `eXFb.KQ7D` | func | `(i32) -> ()` |
| 180 | `eXFb.nTU9` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `eXFb.TM9F` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 182 | `eXFb.WzUQ` | func | `(i32 i32) -> ()` |
| 183 | `eXFb.uiBy` | func | `(i32 i32) -> ()` |
| 184 | `eXFb.FDeX` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `eXFb.NQt9` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 186 | `eXFb.e1N7` | func | `(i32 f32) -> ()` |
| 187 | `eXFb.oXa2` | func | `(i32 f32) -> ()` |
| 188 | `eXFb.jDjH` | func | `(i32 i32) -> ()` |
| 189 | `eXFb.D6EE` | func | `(i32 i32) -> ()` |
| 190 | `eXFb.hGey` | func | `(i32) -> (i32)` |
| 191 | `eXFb.ExzZ` | func | `(i32) -> (i32)` |
| 192 | `eXFb.AOCq` | func | `(i32) -> (i32)` |
| 193 | `eXFb.jARB` | func | `(i32) -> (i32)` |
| 194 | `eXFb.kyaG` | func | `(i32 i32 i32) -> ()` |
| 195 | `eXFb.KVy8` | func | `(i32 i32 i32) -> ()` |
| 196 | `eXFb.bVEK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `eXFb.v9eh` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 198 | `eXFb.yNkE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 199 | `eXFb.cGYC` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `eXFb.mJsd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 201 | `eXFb.CRZp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `eXFb.S0tg` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `eXFb.QJ1v` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 204 | `eXFb.eXMu` | func | `(i32) -> (i32)` |
| 205 | `eXFb.rzwK` | func | `(i32) -> (i32)` |
| 206 | `eXFb.X7l0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 207 | `eXFb.ePWS` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `eXFb.lfcK` | func | `(i32 i32 i32 i32) -> ()` |
| 209 | `eXFb.JNMv` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `eXFb.wK1k` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `eXFb.izFN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `eXFb.Xa97` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `eXFb.WWww` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 214 | `eXFb.H1pM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `eXFb.SEBH` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 216 | `eXFb.axR9` | func | `(i32 i32 i32) -> ()` |
| 217 | `eXFb.hm2K` | func | `(i32 i32 i32) -> ()` |
| 218 | `eXFb.sgO2` | func | `(i32 i32) -> ()` |
| 219 | `eXFb.UxgW` | func | `(i32 i32) -> ()` |
| 220 | `eXFb.Hd2N` | func | `(i32 i32) -> ()` |
| 221 | `eXFb.wYnt` | func | `(i32 i32) -> ()` |
| 222 | `eXFb.VHda` | func | `(i32 i32) -> ()` |
| 223 | `eXFb.fWqK` | func | `(i32 i32) -> ()` |
| 224 | `eXFb.rH2A` | func | `(i32 f32 f32) -> ()` |
| 225 | `eXFb.lS0g` | func | `(i32 f32 f32) -> ()` |
| 226 | `eXFb.e1az` | func | `(i32 i32) -> ()` |
| 227 | `eXFb.w3Oc` | func | `(i32 i32) -> ()` |
| 228 | `eXFb.van0` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `eXFb.bRFU` | func | `(i32 i32 i32 f32) -> ()` |
| 230 | `eXFb.XQNj` | func | `(i32 i32 i32) -> ()` |
| 231 | `eXFb.keoH` | func | `(i32) -> (i32)` |
| 232 | `eXFb.eu9E` | func | `(i32) -> (i32)` |
| 233 | `eXFb.xuUG` | func | `(i32 i32) -> ()` |
| 234 | `eXFb.Eijn` | func | `(i32 i32) -> ()` |
| 235 | `eXFb.EO4T` | func | `(i32 i32 i32 i32) -> (i32)` |
| 236 | `eXFb.NztK` | func | `(i32 i32 i32 i32) -> ()` |
| 237 | `eXFb.Shd5` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `eXFb.iuXx` | func | `(i32 i32 i32) -> ()` |
| 239 | `eXFb.UMED` | func | `(i32 i32 i32) -> ()` |
| 240 | `eXFb.xMIx` | func | `(i32 i32 i32) -> ()` |
| 241 | `eXFb.It76` | func | `(i32 i32 i32) -> ()` |
| 242 | `eXFb.JZcZ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `eXFb.Y0uO` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `eXFb.tZez` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `eXFb.bQlb` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 246 | `eXFb.nbXh` | func | `(i32) -> (i32)` |
| 247 | `eXFb.SXcy` | func | `(i32) -> (i32)` |
| 248 | `eXFb.ER5J` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `eXFb.DulI` | func | `(i32 i32) -> ()` |
| 250 | `eXFb.EOJ1` | func | `(i32 i32) -> ()` |
| 251 | `eXFb.KtfF` | func | `(i32 i32) -> (i32)` |
| 252 | `eXFb.Q6xg` | func | `(i32 i32) -> (i32)` |
| 253 | `eXFb.jvmg` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `eXFb.m1fT` | func | `(i32 i32 i32 i32) -> ()` |
| 255 | `eXFb.E2uN` | func | `(i32 i32) -> ()` |
| 256 | `eXFb.yVSn` | func | `(i32 i32) -> ()` |
| 257 | `eXFb.oG5M` | func | `(i32) -> (i32)` |
| 258 | `eXFb.HJgt` | func | `(i32 i32 i32 i32) -> ()` |
| 259 | `eXFb.Ax8c` | func | `(i32 i32 i32 f32) -> ()` |
| 260 | `eXFb.eMNH` | func | `(i32) -> ()` |
| 261 | `eXFb.FYgS` | func | `(i32 i32) -> ()` |
| 262 | `eXFb.S01j` | func | `(i32 i32) -> ()` |
| 263 | `eXFb.OYCq` | func | `(i32 i32) -> ()` |
| 264 | `eXFb.gJ82` | func | `(i32 i32) -> ()` |
| 265 | `eXFb.mCDh` | func | `(i32 i32) -> ()` |
| 266 | `eXFb.Dcr3` | func | `(i32 i32) -> ()` |
| 267 | `eXFb.TpqI` | func | `(i32 i32) -> ()` |
| 268 | `eXFb.fgE3` | func | `(i32 i32) -> ()` |
| 269 | `eXFb.V8ws` | func | `(i32) -> (i32)` |
| 270 | `eXFb.cTv3` | func | `(i32) -> (i32)` |
| 271 | `eXFb.jkYD` | func | `(i32) -> (i32)` |
| 272 | `eXFb.feJB` | func | `(i32) -> (i32)` |
| 273 | `eXFb.rz7F` | func | `(i32 i32 i32 i32) -> ()` |
| 274 | `eXFb.Q6Ba` | func | `(i32) -> ()` |
| 275 | `eXFb.UtFl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `eXFb.YuPH` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `eXFb.ZdOG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `eXFb.b56o` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `eXFb.hVn2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `eXFb.TMmB` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 281 | `eXFb.jYSP` | func | `(i32) -> (i32)` |
| 282 | `eXFb.MmoD` | func | `(i32) -> (i32)` |
| 283 | `eXFb.WYsB` | func | `(i32) -> (i32)` |
| 284 | `eXFb.j0ir` | func | `(i32) -> (i32)` |
| 285 | `eXFb.AU82` | func | `(i32 i32) -> ()` |
| 286 | `eXFb.OOYU` | func | `(i32) -> ()` |
| 287 | `eXFb.ybQM` | func | `(i32 i32) -> ()` |
| 288 | `eXFb.LjK3` | func | `(i32) -> (i32)` |
| 289 | `eXFb.LIjq` | func | `(i32 i32) -> (i32)` |
| 290 | `eXFb.eXCO` | func | `(i32 i32) -> (i32)` |
| 291 | `eXFb.YyTZ` | func | `(i32 i32) -> (i32)` |
| 292 | `eXFb.SIl4` | func | `(f64) -> (i32)` |
| 293 | `eXFb.u9LD` | func | `(i32 i32) -> (i32)` |
| 294 | `eXFb.pCDX` | func | `(i32 i32) -> (i32)` |
| 295 | `eXFb.pq31` | func | `(i32 i32) -> (i32)` |
| 296 | `eXFb.fXKd` | func | `(i32 i32) -> (i32)` |
| 297 | `eXFb.vKA2` | func | `(i32 i32) -> (i32)` |
| 298 | `eXFb.j2zB` | func | `(i32 i32) -> (i32)` |
| 299 | `eXFb.qxCV` | func | `(i32 i32) -> (i32)` |

## Exports

167 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `ld4g` | func | 942 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `sCaM` | func | 2251 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `r1D0` | func | 720 | `(i32 i32) -> (i32)` |
| `wPtz` | func | 2306 | `(i32 i32) -> ()` |
| `EagL` | func | 2057 | `(i32 f64) -> (i32)` |
| `Xk2c` | func | 694 | `(i32 i32) -> (i32)` |
| `HQIL` | func | 1480 | `(i32) -> (i32)` |
| `ZtRe` | func | 3075 | `(i32 i32) -> (i32 i32)` |
| `OaSg` | func | 930 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `xSQS` | func | 2715 | `(i32 i32) -> ()` |
| `MzK1` | func | 2561 | `(i32) -> (i32)` |
| `AYIh` | func | 2551 | `(i32) -> (i32)` |
| `rbMq` | func | 1864 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `Pnkb` | func | 1589 | `(i32 i32 i32 i32) -> (i32)` |
| `zmyv` | func | 2610 | `(i32) -> ()` |
| `OMov` | func | 2542 | `(i32) -> (i32)` |
| `u6UW` | func | 1669 | `(i32 i32 i32 i32) -> (i32)` |
| `mfSY` | func | 1542 | `(i32 i32) -> (i32)` |
| `FJZ4` | func | 2337 | `(i32 i32) -> ()` |
| `cBPY` | func | 1500 | `(i32 i32 i32 i32) -> ()` |
| `c354` | func | 2521 | `(i32) -> (f64)` |
| `UPT8` | func | 2364 | `(i32 i32 i32 i32) -> ()` |
| `gEAB` | func | 1248 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `lNfo` | func | 1330 | `(i32 i32) -> (i32)` |
| `ThEB` | func | 2075 | `(i32 f64 f64 f64) -> (i32)` |
| `iNEA` | func | 3089 | `(i32) -> (i32 i32)` |
| `LSHT` | func | 3104 | `() -> (i32 i32)` |
| `f766` | func | 1197 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Hezd` | func | 3135 | `(i32 i32 i32) -> ()` |
| `Lo4W` | func | 3102 | `() -> (i32 i32)` |
| `QvFG` | func | 1568 | `(i32 i32 i32) -> (i32)` |
| `TYgZ` | func | 2509 | `(i32) -> (i32)` |
| `L1ij` | func | 1518 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `CTBF` | func | 3073 | `(i32 i32) -> (i32 i32)` |
| `qx7u` | func | 1426 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `BVzw` | func | 2544 | `(i32) -> (i32)` |
| `Fxee` | func | 2478 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `KCGz` | func | 1617 | `(i32 i32) -> (i32)` |
| `CLIh` | func | 3074 | `(i32 i32) -> (i32 i32)` |
| `oxQf` | func | 756 | `(i32) -> (i32)` |
| `h0yk` | func | 1273 | `(i32 i32) -> (i32)` |
| `m2zc` | func | 2848 | `(i32) -> (i32)` |
| `KghN` | func | 1925 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `X0Z1` | func | 1241 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `rtEZ` | func | 1424 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `xmdi` | func | 1764 | `(i32) -> (i32)` |
| `C5GS` | func | 2543 | `(i32 i32) -> ()` |
| `bhGY` | func | 3086 | `(i32) -> (i32 i32)` |
| `ZoKn` | func | 908 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `bG1c` | func | 628 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jI2e` | func | 2031 | `(i32 i32) -> ()` |
| `I2bb` | func | 1554 | `(i32 i32) -> (i32)` |
| `stnL` | func | 870 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `hrYU` | func | 3268 | `() -> (i32)` |
| `lZ6V` | func | 3048 | `(i32 i32) -> ()` |
| `nYF0` | func | 760 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `mxVj` | func | 3243 | `(i32) -> (i32)` |
| `hrqg` | func | 2860 | `(i32) -> (i32)` |
| `FTJd` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `X3M8` | func | 3239 | `() -> (f64)` |
| `Vfaw` | func | 1242 | `(i32 i32 i32 i32) -> (i32)` |
| `tRQC` | func | 2827 | `(i32) -> (i32)` |
| `RNrN` | func | 2423 | `(i32 i32) -> (i32)` |
| `SQ4y` | func | 3067 | `(i32 i32 i32) -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `rVar` | func | 1781 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `XXcO` | func | 752 | `(i32 i32 i32 i32) -> (i32)` |
| `yW90` | func | 2611 | `() -> (i32)` |
| `keWe` | func | 2647 | `() -> (i32)` |
| `Yzv4` | func | 2526 | `(i32) -> (i32)` |
| `aB8y` | func | 1632 | `(i32 f64 f64 f64) -> (i32)` |
| `cuZ8` | func | 2892 | `(i32) -> (i32)` |
| `gjhr` | global | 1 | `` |
| `qQML` | func | 2522 | `(i32) -> (i32)` |
| `TjZM` | func | 2870 | `(i32) -> ()` |
| `e1t2` | func | 3041 | `(i32 i32 i32 i32) -> (i32)` |
| `CmWT` | func | 2479 | `(i32) -> (i32)` |
| `fgGB` | func | 2462 | `(i32) -> (i32)` |
| `SIT7` | func | 3244 | `(i32) -> ()` |
| `T8qh` | func | 1425 | `(i32 f64 f64) -> (i32)` |
| `OXJq` | func | 1446 | `(i32 i32) -> (i32)` |
| `cuJP` | func | 1977 | `(i32) -> (i32)` |
| `iEG4` | func | 3016 | `() -> ()` |
| `bzBm` | func | 2541 | `(i32) -> (i32)` |
| `c3AU` | func | 3267 | `() -> (i32)` |
| `NijC` | func | 1472 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `fIln` | func | 2562 | `(i32) -> (i32)` |
| `xfBH` | func | 1859 | `() -> (i32)` |
| `HIVS` | func | 1628 | `(i32 i32) -> ()` |
| `tey6` | func | 2531 | `(i32) -> (i32)` |
| `CUoP` | func | 2539 | `(i32 i32) -> ()` |
| `r2PJ` | func | 1302 | `(i32 i32 i32) -> ()` |
| `tL6K` | func | 3066 | `(i32 i32 i32) -> (i32 i32)` |
| `rhjw` | func | 3077 | `(i32 i32) -> (i32 i32)` |
| `OAtz` | func | 777 | `(i32 i32 i32) -> (i32)` |
| `Q67K` | func | 1553 | `(i32 i32) -> (i32)` |
| `vFDM` | func | 2552 | `(i32 i32) -> (i32)` |
| `YMXc` | func | 2527 | `(i32) -> (i32)` |
| `gzeo` | func | 1477 | `() -> (i32)` |
| `EcgB` | func | 3197 | `(i32) -> ()` |
| `hYug` | func | 1357 | `(i32 i32) -> (i32)` |
| `hrNW` | func | 2391 | `(i32 i32) -> (i32)` |
| `YYo5` | func | 2116 | `(i32 i32) -> (i32)` |
| `q89W` | global | 2 | `` |
| `DtEx` | func | 1137 | `(i32 i32) -> (i32)` |
| `fuyY` | func | 3191 | `(i32 i32 i32) -> ()` |
| `KZ9t` | func | 1524 | `(i32) -> (i32)` |
| `Dw1v` | func | 2627 | `(i32) -> ()` |
| `PnoV` | func | 3127 | `(i32 i32 i32 i32) -> ()` |
| `oUoo` | func | 3198 | `() -> ()` |
| `D8ms` | func | 2307 | `(i32 f64) -> (i32)` |
| `N1vn` | func | 3072 | `(i32 i32) -> (i32 i32)` |
| `xJHL` | func | 2390 | `(i32 i32) -> (i32)` |
| `YDkm` | func | 1899 | `(i32 i32 f64 f64 f64) -> ()` |
| `ijgS` | func | 2646 | `(i32 i32) -> ()` |
| `V9tm` | func | 2597 | `(i32 i32) -> ()` |
| `x0bA` | func | 2727 | `(i32 i32) -> ()` |
| `O0Hw` | func | 1918 | `(i32 i32) -> (i32)` |
| `n02j` | func | 2834 | `(i32) -> (i32)` |
| `sJqO` | func | 1879 | `(i32 i32 i32 i32) -> (i32)` |
| `IE1t` | func | 2091 | `(i32 i32) -> ()` |
| `vW59` | func | 679 | `(i32 i32) -> (i32)` |
| `KXeS` | func | 3204 | `(i32) -> ()` |
| `ZO9V` | func | 2528 | `(i32) -> ()` |
| `CzeU` | func | 2197 | `(i32 i32) -> (i32)` |
| `L3wt` | func | 1354 | `(i32) -> ()` |
| `jnUo` | func | 3087 | `(i32) -> (i32 i32)` |
| `mjJ7` | func | 1138 | `(i32 i32) -> ()` |
| `mOL5` | func | 712 | `(f64) -> (f64)` |
| `CAQS` | func | 1933 | `(i32) -> ()` |
| `fUrF` | func | 2388 | `(i32 i32) -> (i32)` |
| `ivDn` | func | 3103 | `() -> (i32 i32)` |
| `thPt` | func | 3078 | `(i32 i32) -> (i32 i32)` |
| `T4Ah` | func | 1530 | `(i32 i32) -> (i32)` |
| `K7jP` | func | 2560 | `(i32) -> (i32)` |
| `Fgqz` | func | 1556 | `(i32 f64) -> (f64)` |
| `xJ2Q` | func | 1701 | `(i32) -> ()` |
| `NBBh` | func | 3164 | `() -> (i32)` |
| `r5Dg` | func | 1997 | `(i32 i32 i32 i32) -> ()` |
| `yWWA` | func | 1851 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `cTET` | func | 1787 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `rpT4` | func | 3076 | `(i32 i32) -> (i32 i32)` |
| `Cn8i` | func | 1995 | `(i32) -> (i32)` |
| `qPdx` | func | 3091 | `(i32) -> (i32 i32)` |
| `qEWD` | func | 3090 | `(i32) -> (i32 i32)` |
| `IyzK` | func | 2229 | `(i32 i32) -> (i32)` |
| `tYES` | func | 1907 | `(i32 i32) -> ()` |
| `unRD` | func | 689 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jMMJ` | func | 2525 | `(i32) -> (i32)` |
| `hFfz` | func | 1371 | `(i32 i32 i32) -> (i32)` |
| `jS83` | func | 2523 | `(i32) -> (i32)` |
| `YdAu` | func | 2530 | `(i32) -> (i32)` |
| `OLp4` | func | 3035 | `(i32 i32) -> (i32)` |
| `sjNI` | func | 1321 | `(i32) -> (i32)` |
| `PkP3` | func | 1295 | `(i32 i32 i32) -> (i32)` |
| `gwnU` | func | 3088 | `(i32) -> (i32 i32)` |
| `WRX8` | func | 2389 | `(i32 i32) -> (i32)` |
| `aZJe` | func | 2553 | `(i32 i32) -> (i32)` |
| `PUpo` | func | 2524 | `(i32) -> (i32)` |
| `Jbke` | func | 582 | `(i32 i32 i32) -> (i32)` |
| `lKx5` | func | 2508 | `(i32 i32) -> ()` |
| `wraj` | func | 2529 | `(i32) -> (i32)` |
| `iUb7` | func | 1741 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `UZ1F` | func | 909 | `(i32 i32) -> (i32)` |
| `W0E8` | func | 3136 | `(i32 i32) -> ()` |
| `cQYU` | func | 1799 | `(i32 i32) -> (i32)` |
| `VJCo` | func | 2434 | `(i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 759 · max 759
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2708632, `i32` = i32.const 2709228

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
