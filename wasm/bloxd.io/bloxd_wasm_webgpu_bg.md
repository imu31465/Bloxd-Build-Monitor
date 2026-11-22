# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `3lwmg.ecbaa066` · analyzed 2026-11-22T23:29:33+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.077944622bfe8497980b.wasm
> 5,070,732 bytes (4.8 MB) · sha256 `9867480be13b90b6…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,006,327 → 5,070,732 bytes (+64,405)
- defined functions 2,878 → 2,919
- imported functions 390 → 393
- code bytes 3,973,532 → 4,024,555
- data bytes 988,050 → 1,000,189
- name-section module id `c81ddc18fc64f5e6.12057` → `4d4575c6d652aac9.12194`
- export signatures: +1 × `(i32) -> (i32)`; +1 × `(i32) -> (i32 i32)`; +1 × `(i32 i32 i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)`; -1 × `(i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)`
- import signatures: +2 × `(i32 i32 i32) -> ()`; +1 × `() -> (f64)`
- export identifiers rotated by the obfuscator: 1/159 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `flag testalpha * baseColor.abaseColor.abloxdSpGlintTier(v.vE`; `fn vs_mesh_0044d0b0053_l1(@location(0) position: vec3f, @loc`; `fs_mesh_0040d000053_l7fs_mesh_0040d040073_l3fs_mesh_0040d040`
- removed embedded strings: `flag testalpha * baseColor.abaseColor.abloxdSpGlintTier(v.vE`; `fn vs_mesh_0044d090053_l1(@location(0) position: vec3f, @loc`; `fs_mesh_0040d000053_l7fs_mesh_0040d040073_l3fs_mesh_0040d040`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,919 / 393 |
| Exports / imports | 159 / 393 |
| Code bytes (function bodies) | 4,024,555 (3.8 MB) |
| Total local variables | 30,591 |
| Instructions (scanable bodies) | 1,883,354 |
| Data segments / bytes | 3,515 / 1,000,189 |
| Element segments / entries | 1 / 828 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `4d4575c6d652aac9.12194` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,497 | 175 |
| 2 | import | 4,718 | 393 |
| 3 | function | 2,968 | 2919 |
| 4 | table | 7 | 1 |
| 5 | memory | 5 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,273 | 159 |
| 9 | element | 1,663 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,029,880 | 2919 |
| 11 | data | 1,028,622 | 3515 |
| 0 | custom:name | 30 | — |

## Types

175 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

393 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Svr5.VitO` | func | `(i32) -> (i32)` |
| 1 | `Svr5.k23r` | func | `(i32) -> (f64)` |
| 2 | `Svr5.XAUt` | func | `() -> (i32)` |
| 3 | `Svr5.oSB8` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `Svr5.SABY` | func | `(i32) -> ()` |
| 5 | `Svr5.BYNc` | func | `(i32 i32) -> (i32)` |
| 6 | `Svr5.swKf` | func | `(i32) -> (i32)` |
| 7 | `Svr5.ePeW` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `Svr5.kxfG` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `Svr5.dHt2` | func | `(i32) -> (i32)` |
| 10 | `Svr5.T18e` | func | `(i32 i32) -> ()` |
| 11 | `Svr5.FfpU` | func | `(i32 i32) -> ()` |
| 12 | `Svr5.tP13` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `Svr5.Yhph` | func | `(i32 i32) -> (i32)` |
| 14 | `Svr5.JgGR` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `Svr5.Ug95` | func | `(i32) -> (i32)` |
| 16 | `Svr5.VBCj` | func | `(i32 i32) -> (i32)` |
| 17 | `Svr5.ipZY` | func | `(i32 i32) -> (i32)` |
| 18 | `Svr5.z7R2` | func | `(i32 i32) -> ()` |
| 19 | `Svr5.m6iQ` | func | `(i32) -> (i32)` |
| 20 | `Svr5.mm1z` | func | `(i32) -> (i32)` |
| 21 | `Svr5.sCfw` | func | `(i32 i32 i32) -> ()` |
| 22 | `Svr5.ojEJ` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `Svr5.VmUq` | func | `(i32) -> (i32)` |
| 24 | `Svr5.oAfX` | func | `(i32) -> (i32)` |
| 25 | `Svr5.IOlU` | func | `(i32 i32) -> ()` |
| 26 | `Svr5.lgWw` | func | `(i32 i32) -> (i32)` |
| 27 | `Svr5.qdsT` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `Svr5.jcLM` | func | `(i32) -> (i32)` |
| 29 | `Svr5.PSH5` | func | `(i32) -> (i32)` |
| 30 | `Svr5.JN5B` | func | `(i32) -> (i32)` |
| 31 | `Svr5.hNTF` | func | `(i32) -> (i32)` |
| 32 | `Svr5.SxbL` | func | `(i32) -> (i32)` |
| 33 | `Svr5.N3zk` | func | `(i32 i32 i32) -> ()` |
| 34 | `Svr5.o0pw` | func | `(i32 i32) -> (i32)` |
| 35 | `Svr5.diUc` | func | `(i32) -> (i32)` |
| 36 | `Svr5.DMtF` | func | `(i32) -> ()` |
| 37 | `Svr5.AnRG` | func | `(i32) -> (i32)` |
| 38 | `Svr5.dUwl` | func | `(i32) -> (i32)` |
| 39 | `Svr5.pgae` | func | `(i32) -> ()` |
| 40 | `Svr5.xlIg` | func | `(i32 i32) -> (i32)` |
| 41 | `Svr5.bQPM` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `Svr5.hrDP` | func | `(i32) -> ()` |
| 43 | `Svr5.wmD7` | func | `(i32 i32) -> ()` |
| 44 | `Svr5.SDfI` | func | `() -> (i32)` |
| 45 | `Svr5.cfUO` | func | `(i32 i32) -> (i32)` |
| 46 | `Svr5.V5Kg` | func | `(i32 i32) -> (i32)` |
| 47 | `Svr5.yowN` | func | `(i32) -> (i32)` |
| 48 | `Svr5.d1zW` | func | `(i32) -> (i32)` |
| 49 | `Svr5.cAja` | func | `(i32) -> (i32)` |
| 50 | `Svr5.HWoC` | func | `(i32 i32) -> ()` |
| 51 | `Svr5.v7cP` | func | `(i32) -> (i32)` |
| 52 | `Svr5.phhH` | func | `(i32) -> ()` |
| 53 | `Svr5.JEk3` | func | `(i32 i32) -> (i32)` |
| 54 | `Svr5.ckKt` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `Svr5.YS8e` | func | `(i32) -> (i32)` |
| 56 | `Svr5.H8pw` | func | `(i32 i32 i32) -> ()` |
| 57 | `Svr5.ZiSd` | func | `(i32 i32) -> ()` |
| 58 | `Svr5.zqQg` | func | `(i32) -> (i32)` |
| 59 | `Svr5.ZSvJ` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `Svr5.CgC9` | func | `(i32) -> ()` |
| 61 | `Svr5.KU81` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `Svr5.M1pg` | func | `(i32) -> ()` |
| 63 | `Svr5.uQyN` | func | `(i32 i32 i32) -> ()` |
| 64 | `Svr5.XMK3` | func | `(i32 i32) -> ()` |
| 65 | `Svr5.SNVn` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `Svr5.wFt2` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `Svr5.fYox` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `Svr5.Bf2A` | func | `(i32 i32 f64) -> ()` |
| 69 | `Svr5.Qlq4` | func | `(i32) -> (i32)` |
| 70 | `Svr5.Ke8C` | func | `(i32 i32) -> ()` |
| 71 | `Svr5.eEYG` | func | `(i32 i32 i32) -> ()` |
| 72 | `Svr5.fFlv` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `Svr5.an31` | func | `(i32 i32 i32) -> ()` |
| 74 | `Svr5.MseX` | func | `(i32) -> ()` |
| 75 | `Svr5.pGBg` | func | `(i32 i32) -> ()` |
| 76 | `Svr5.vBK5` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `Svr5.Mkj9` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `Svr5.DJKB` | func | `(i32 i32 i32) -> ()` |
| 79 | `Svr5.BwQl` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `Svr5.DcLn` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `Svr5.eGdi` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `Svr5.qjOc` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `Svr5.tfB3` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `Svr5.bCiA` | func | `(i32 i32 i32) -> ()` |
| 85 | `Svr5.DrZG` | func | `(i32 i32) -> (i32)` |
| 86 | `Svr5.VxjQ` | func | `(i32) -> (i32)` |
| 87 | `Svr5.FGAz` | func | `(i32) -> (i32)` |
| 88 | `Svr5.Uaa5` | func | `(i32) -> (i32)` |
| 89 | `Svr5.PZxW` | func | `(i32 i32) -> (i32)` |
| 90 | `Svr5.orVH` | func | `(i32) -> ()` |
| 91 | `Svr5.YWd3` | func | `(i32) -> (i32)` |
| 92 | `Svr5.e7gZ` | func | `(i32 i32) -> (i32)` |
| 93 | `Svr5.Eo71` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `Svr5.LjHn` | func | `(i32 i32 i32) -> ()` |
| 95 | `Svr5.kd5Y` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `Svr5.busI` | func | `() -> (f64)` |
| 97 | `Svr5.DAlq` | func | `() -> (f64)` |
| 98 | `Svr5.rnoH` | func | `(i32 i32) -> ()` |
| 99 | `Svr5.HAxl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `Svr5.Csan` | func | `(i32) -> (i32)` |
| 101 | `Svr5.aOnr` | func | `(i32) -> (i32)` |
| 102 | `Svr5.yII9` | func | `(i32) -> (i32)` |
| 103 | `Svr5.jN5B` | func | `() -> (i32)` |
| 104 | `Svr5.sJfP` | func | `() -> (i32)` |
| 105 | `Svr5.hWdC` | func | `() -> (i32)` |
| 106 | `Svr5.MKn6` | func | `() -> (i32)` |
| 107 | `Svr5.m0e1` | func | `(i32 i32) -> (i32)` |
| 108 | `Svr5.PHD7` | func | `(i32) -> ()` |
| 109 | `Svr5.GdWP` | func | `(i32 i32) -> (i32)` |
| 110 | `Svr5.OQGh` | func | `(i32) -> (i32)` |
| 111 | `Svr5.f8of` | func | `() -> (f64)` |
| 112 | `Svr5.Ps1C` | func | `(i32) -> (i32)` |
| 113 | `Svr5.t7zJ` | func | `(i32 i32) -> ()` |
| 114 | `Svr5.VTWt` | func | `(i32 i32) -> ()` |
| 115 | `Svr5.US6t` | func | `(i32 i32) -> ()` |
| 116 | `Svr5.TY9o` | func | `(i32 f32) -> ()` |
| 117 | `Svr5.TaGo` | func | `(i32 f32) -> ()` |
| 118 | `Svr5.MXyb` | func | `(i32 i32) -> ()` |
| 119 | `Svr5.qmQY` | func | `(i32 i32) -> ()` |
| 120 | `Svr5.xjG4` | func | `(i32 i32) -> ()` |
| 121 | `Svr5.Apdx` | func | `(i32 i32) -> ()` |
| 122 | `Svr5.ZmJm` | func | `(i32 i32 i32) -> ()` |
| 123 | `Svr5.cg10` | func | `(i32 i32) -> (i32)` |
| 124 | `Svr5.OUny` | func | `(i32 i32) -> ()` |
| 125 | `Svr5.fmjJ` | func | `(i32 i32) -> ()` |
| 126 | `Svr5.LkfU` | func | `(i32 i32) -> ()` |
| 127 | `Svr5.vsLD` | func | `(i32 i32) -> ()` |
| 128 | `Svr5.cBuO` | func | `(i32 f64) -> ()` |
| 129 | `Svr5.Jxyd` | func | `(i32 f64) -> ()` |
| 130 | `Svr5.BLrL` | func | `(i32 i32) -> ()` |
| 131 | `Svr5.iH8E` | func | `(i32 i32 i32) -> ()` |
| 132 | `Svr5.JxPz` | func | `(i32 i32) -> ()` |
| 133 | `Svr5.LHvW` | func | `(i32 i32) -> (i32)` |
| 134 | `Svr5.XuCX` | func | `(i32 i32 i32) -> ()` |
| 135 | `Svr5.J9X5` | func | `(i32 i32 i32) -> ()` |
| 136 | `Svr5.PUa6` | func | `(i32 i32) -> (i32)` |
| 137 | `Svr5.xNjW` | func | `(i32 i32) -> (i32)` |
| 138 | `Svr5.didr` | func | `(i32 i32 i32) -> ()` |
| 139 | `Svr5.H2kN` | func | `(i32 i32 i32) -> ()` |
| 140 | `Svr5.zToS` | func | `(i32 i32) -> (i32)` |
| 141 | `Svr5.Kc7C` | func | `(i32 i32) -> ()` |
| 142 | `Svr5.GtV2` | func | `(i32 i32) -> ()` |
| 143 | `Svr5.sW6n` | func | `(i32 i32) -> ()` |
| 144 | `Svr5.DTGV` | func | `(i32 i32) -> ()` |
| 145 | `Svr5.RSn5` | func | `(i32 i32) -> ()` |
| 146 | `Svr5.Qgje` | func | `(i32 i32) -> ()` |
| 147 | `Svr5.Faob` | func | `(i32 i32) -> ()` |
| 148 | `Svr5.vNKE` | func | `(i32 f64) -> ()` |
| 149 | `Svr5.JSyx` | func | `(i32 i32) -> ()` |
| 150 | `Svr5.NUCC` | func | `(i32 i32) -> ()` |
| 151 | `Svr5.ddYh` | func | `(i32 i32) -> ()` |
| 152 | `Svr5.nFHg` | func | `(i32 i32) -> ()` |
| 153 | `Svr5.iSHz` | func | `(i32 i32) -> ()` |
| 154 | `Svr5.ivLw` | func | `(i32 i32) -> ()` |
| 155 | `Svr5.m23U` | func | `(i32 i32) -> ()` |
| 156 | `Svr5.RLjA` | func | `(i32 i32) -> ()` |
| 157 | `Svr5.Hkwg` | func | `(i32 i32) -> ()` |
| 158 | `Svr5.adJu` | func | `(i32 i32 i32) -> ()` |
| 159 | `Svr5.GFcv` | func | `(i32 i32 i32) -> ()` |
| 160 | `Svr5.b6VK` | func | `(i32 i32) -> (i32)` |
| 161 | `Svr5.qwk6` | func | `(i32 i32) -> (i32)` |
| 162 | `Svr5.hb5u` | func | `(i32 i32) -> ()` |
| 163 | `Svr5.Bplg` | func | `(i32 i32) -> ()` |
| 164 | `Svr5.m6ta` | func | `(i32 f64) -> ()` |
| 165 | `Svr5.I1af` | func | `(i32 i32) -> ()` |
| 166 | `Svr5.eLAN` | func | `(i32 i32) -> ()` |
| 167 | `Svr5.V3JF` | func | `(i32 i32) -> ()` |
| 168 | `Svr5.KIzn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `Svr5.nop8` | func | `(i32 f64) -> ()` |
| 170 | `Svr5.BW6X` | func | `(i32 f64) -> ()` |
| 171 | `Svr5.K526` | func | `(i32 f64) -> ()` |
| 172 | `Svr5.Nq0p` | func | `(i32 f64) -> ()` |
| 173 | `Svr5.pt5B` | func | `(i32 i32) -> ()` |
| 174 | `Svr5.i6jt` | func | `(i32 i32) -> ()` |
| 175 | `Svr5.CgDJ` | func | `(i32 i32) -> ()` |
| 176 | `Svr5.QfWd` | func | `(i32 i32) -> ()` |
| 177 | `Svr5.cynb` | func | `(i32 i32) -> ()` |
| 178 | `Svr5.tNWB` | func | `(i32 i32 i32) -> ()` |
| 179 | `Svr5.If2L` | func | `(i32 i32) -> ()` |
| 180 | `Svr5.QbaN` | func | `(i32 f32) -> ()` |
| 181 | `Svr5.UzLm` | func | `(i32 i32) -> ()` |
| 182 | `Svr5.du2t` | func | `(i32 i32) -> ()` |
| 183 | `Svr5.XE2R` | func | `(i32 i32) -> ()` |
| 184 | `Svr5.SPx1` | func | `(i32 i32) -> ()` |
| 185 | `Svr5.CamE` | func | `(i32 i32) -> ()` |
| 186 | `Svr5.hzao` | func | `(i32 i32) -> ()` |
| 187 | `Svr5.n5dX` | func | `(i32 i32) -> ()` |
| 188 | `Svr5.eaLj` | func | `(i32 i32) -> ()` |
| 189 | `Svr5.ll9H` | func | `(i32 i32) -> ()` |
| 190 | `Svr5.G2PP` | func | `(i32 i32) -> ()` |
| 191 | `Svr5.SguP` | func | `(i32 i32) -> ()` |
| 192 | `Svr5.tUTr` | func | `(i32 i32) -> ()` |
| 193 | `Svr5.POy9` | func | `(i32 i32) -> (i32)` |
| 194 | `Svr5.Y5Ek` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `Svr5.fQUC` | func | `(i32 i32) -> ()` |
| 196 | `Svr5.AAsD` | func | `(i32 i32 i32) -> ()` |
| 197 | `Svr5.htq2` | func | `(i32 i32) -> (i32)` |
| 198 | `Svr5.tu7V` | func | `(i32) -> (i32)` |
| 199 | `Svr5.Cfvh` | func | `(i32 i32) -> ()` |
| 200 | `Svr5.s3s7` | func | `(i32 i32) -> ()` |
| 201 | `Svr5.A4dh` | func | `(i32 i32) -> ()` |
| 202 | `Svr5.QQkM` | func | `(i32 i32) -> ()` |
| 203 | `Svr5.VaCB` | func | `(i32 i32) -> ()` |
| 204 | `Svr5.CaSd` | func | `(i32 i32) -> ()` |
| 205 | `Svr5.Gckc` | func | `(i32 i32) -> ()` |
| 206 | `Svr5.tq1Q` | func | `(i32 i32) -> ()` |
| 207 | `Svr5.DsrO` | func | `(i32) -> (i32)` |
| 208 | `Svr5.jmFl` | func | `(i32 i32 i32) -> ()` |
| 209 | `Svr5.vcaE` | func | `(i32 i32) -> ()` |
| 210 | `Svr5.pLBV` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `Svr5.WFSD` | func | `(i32 i32) -> ()` |
| 212 | `Svr5.aDsJ` | func | `(i32) -> ()` |
| 213 | `Svr5.adnO` | func | `(i32 i32) -> ()` |
| 214 | `Svr5.rDT7` | func | `(i32) -> (i32)` |
| 215 | `Svr5.n20N` | func | `(i32 i32 i32) -> ()` |
| 216 | `Svr5.Weot` | func | `(i32 i32) -> ()` |
| 217 | `Svr5.dpcL` | func | `(i32 i32) -> ()` |
| 218 | `Svr5.nsE3` | func | `(i32 i32) -> ()` |
| 219 | `Svr5.wFNP` | func | `(i32 i32) -> ()` |
| 220 | `Svr5.awu0` | func | `(i32 i32) -> (i32)` |
| 221 | `Svr5.umAS` | func | `(i32 i32) -> ()` |
| 222 | `Svr5.FitB` | func | `(i32 i32) -> ()` |
| 223 | `Svr5.wFEl` | func | `(i32 i32) -> ()` |
| 224 | `Svr5.xbee` | func | `(i32 i32) -> ()` |
| 225 | `Svr5.lEaF` | func | `(i32 i32) -> ()` |
| 226 | `Svr5.gu9t` | func | `(i32 i32) -> ()` |
| 227 | `Svr5.AgJ4` | func | `(i32 i32) -> ()` |
| 228 | `Svr5.RKJ5` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `Svr5.PLUn` | func | `(i32) -> (i32)` |
| 230 | `Svr5.iN0H` | func | `(i32) -> ()` |
| 231 | `Svr5.W5FO` | func | `(i32 f64) -> ()` |
| 232 | `Svr5.A9ZZ` | func | `(i32 i32) -> ()` |
| 233 | `Svr5.JKA1` | func | `(i32 i32) -> ()` |
| 234 | `Svr5.hdd7` | func | `(i32 i32 i32) -> ()` |
| 235 | `Svr5.XwsZ` | func | `(i32 i32) -> (i32)` |
| 236 | `Svr5.hC9t` | func | `(i32 i32) -> ()` |
| 237 | `Svr5.gNxG` | func | `(i32 i32) -> ()` |
| 238 | `Svr5.q8KZ` | func | `(i32 i32) -> ()` |
| 239 | `Svr5.faOW` | func | `(i32 i32 i32) -> ()` |
| 240 | `Svr5.V1O4` | func | `(i32 i32) -> ()` |
| 241 | `Svr5.eTpQ` | func | `(i32 i32) -> ()` |
| 242 | `Svr5.tzmF` | func | `(i32 i32) -> ()` |
| 243 | `Svr5.LT2R` | func | `(i32 i32 i32) -> ()` |
| 244 | `Svr5.K6XI` | func | `(i32 i32) -> ()` |
| 245 | `Svr5.sA3d` | func | `(i32 i32) -> ()` |
| 246 | `Svr5.ckYJ` | func | `(i32 i32 i32) -> ()` |
| 247 | `Svr5.vMaW` | func | `(i32 i32) -> (i32)` |
| 248 | `Svr5.Bxl8` | func | `(i32 i32) -> ()` |
| 249 | `Svr5.XzvK` | func | `(i32 i32 i32) -> ()` |
| 250 | `Svr5.DB6y` | func | `(i32 i32) -> ()` |
| 251 | `Svr5.BZJ9` | func | `(i32 f64) -> ()` |
| 252 | `Svr5.vju1` | func | `(i32 i32) -> ()` |
| 253 | `Svr5.CouK` | func | `(i32 f64) -> ()` |
| 254 | `Svr5.jXrY` | func | `(i32 i32 i32) -> ()` |
| 255 | `Svr5.W8aN` | func | `(i32 i32) -> ()` |
| 256 | `Svr5.zcjr` | func | `(i32 i32 i32) -> ()` |
| 257 | `Svr5.qts6` | func | `(i32 i32) -> ()` |
| 258 | `Svr5.NAZX` | func | `(i32 i32) -> ()` |
| 259 | `Svr5.tvcz` | func | `(i32 i32) -> ()` |
| 260 | `Svr5.JUIV` | func | `(i32 i32 i32) -> ()` |
| 261 | `Svr5.Hk0R` | func | `(i32 i32) -> ()` |
| 262 | `Svr5.BKFA` | func | `(i32 i32) -> ()` |
| 263 | `Svr5.VMiS` | func | `(i32 i32) -> ()` |
| 264 | `Svr5.H2l0` | func | `(i32 i32) -> ()` |
| 265 | `Svr5.yz9w` | func | `(i32 f32) -> ()` |
| 266 | `Svr5.CUtA` | func | `(i32 f32) -> ()` |
| 267 | `Svr5.MfMp` | func | `(i32 i32) -> ()` |
| 268 | `Svr5.Hvt9` | func | `(i32 i32) -> ()` |
| 269 | `Svr5.AK5i` | func | `(i32 i32) -> ()` |
| 270 | `Svr5.AeYj` | func | `(i32 i32) -> ()` |
| 271 | `Svr5.sdR5` | func | `(i32 i32) -> ()` |
| 272 | `Svr5.As1b` | func | `(i32 i32) -> ()` |
| 273 | `Svr5.QcSn` | func | `(i32 i32) -> ()` |
| 274 | `Svr5.rtvd` | func | `(i32 i32) -> ()` |
| 275 | `Svr5.ejA7` | func | `(i32 i32) -> ()` |
| 276 | `Svr5.oigB` | func | `(i32 i32) -> ()` |
| 277 | `Svr5.d2eP` | func | `(i32 i32) -> ()` |
| 278 | `Svr5.Dzzs` | func | `(i32 i32) -> ()` |
| 279 | `Svr5.jnr0` | func | `(i32 i32) -> ()` |
| 280 | `Svr5.hL98` | func | `(i32 i32) -> ()` |
| 281 | `Svr5.Fzt9` | func | `(i32 i32) -> ()` |
| 282 | `Svr5.TjM8` | func | `(i32 i32) -> ()` |
| 283 | `Svr5.O18L` | func | `(i32 i32) -> ()` |
| 284 | `Svr5.Mgct` | func | `(i32 i32) -> ()` |
| 285 | `Svr5.kp1i` | func | `(i32 i32 i32) -> ()` |
| 286 | `Svr5.c55k` | func | `(i32 i32 i32) -> ()` |
| 287 | `Svr5.lMyP` | func | `(i32 i32) -> ()` |
| 288 | `Svr5.JwYU` | func | `(i32 i32) -> ()` |
| 289 | `Svr5.yvt2` | func | `(i32 i32) -> ()` |
| 290 | `Svr5.KPmN` | func | `(i32 i32) -> ()` |
| 291 | `Svr5.W0X1` | func | `(i32 i32) -> ()` |
| 292 | `Svr5.dKoE` | func | `(i32 i32) -> ()` |
| 293 | `Svr5.oQE6` | func | `(i32 i32) -> ()` |
| 294 | `Svr5.rl7i` | func | `(i32 i32) -> ()` |
| 295 | `Svr5.bELW` | func | `(i32 i32) -> ()` |
| 296 | `Svr5.mIMI` | func | `(i32 i32) -> ()` |
| 297 | `Svr5.nUsu` | func | `(i32 i32) -> ()` |
| 298 | `Svr5.wUNM` | func | `(i32 i32) -> (i32)` |
| 299 | `Svr5.bqER` | func | `(i32 i32) -> ()` |
| 300 | `Svr5.cmy4` | func | `(i32 i32 i32) -> ()` |
| 301 | `Svr5.lrHs` | func | `(i32 i32) -> ()` |
| 302 | `Svr5.zjbW` | func | `(i32 i32) -> ()` |
| 303 | `Svr5.nxXp` | func | `(i32 i32) -> ()` |
| 304 | `Svr5.rSJd` | func | `(i32 i32 i32) -> ()` |
| 305 | `Svr5.MCqK` | func | `(i32 i32) -> (i32)` |
| 306 | `Svr5.Za46` | func | `(i32 i32 i32) -> ()` |
| 307 | `Svr5.bKmk` | func | `(i32 i32 i32) -> ()` |
| 308 | `Svr5.ZGqa` | func | `(i32 i32) -> ()` |
| 309 | `Svr5.UDq1` | func | `(i32 i32) -> ()` |
| 310 | `Svr5.UTCc` | func | `(i32 i32) -> ()` |
| 311 | `Svr5.NJav` | func | `(i32 i32) -> ()` |
| 312 | `Svr5.peX3` | func | `(i32 i32) -> (i32)` |
| 313 | `Svr5.k3zE` | func | `(i32) -> (i32)` |
| 314 | `Svr5.I2Ks` | func | `(i32) -> (i32)` |
| 315 | `Svr5.LJTX` | func | `(i32) -> (i32)` |
| 316 | `Svr5.XAPP` | func | `(i32) -> (i32)` |
| 317 | `Svr5.xyT0` | func | `(i32) -> (i32)` |
| 318 | `Svr5.uUCj` | func | `(i32) -> (i32)` |
| 319 | `Svr5.iE9p` | func | `(i32) -> (i32)` |
| 320 | `Svr5.a3If` | func | `(i32) -> (i32)` |
| 321 | `Svr5.QNqB` | func | `(i32) -> (i32)` |
| 322 | `Svr5.kyh4` | func | `(i32) -> (i32)` |
| 323 | `Svr5.jOzd` | func | `(i32) -> (i32)` |
| 324 | `Svr5.q2qa` | func | `(i32) -> (i32)` |
| 325 | `Svr5.au7P` | func | `(i32) -> (i32)` |
| 326 | `Svr5.x2cm` | func | `(i32) -> (i32)` |
| 327 | `Svr5.AhkL` | func | `(i32) -> (f64)` |
| 328 | `Svr5.EP16` | func | `(i32) -> (f64)` |
| 329 | `Svr5.FPPW` | func | `(i32) -> (i32)` |
| 330 | `Svr5.Pyo0` | func | `(i32) -> (f64)` |
| 331 | `Svr5.CAna` | func | `(i32) -> (i32)` |
| 332 | `Svr5.PUf0` | func | `(i32) -> (i32)` |
| 333 | `Svr5.jZIu` | func | `(i32) -> (i32)` |
| 334 | `Svr5.Iiam` | func | `(i32) -> (i32)` |
| 335 | `Svr5.RX2k` | func | `(i32) -> (i32)` |
| 336 | `Svr5.YAHx` | func | `(i32) -> (i32)` |
| 337 | `Svr5.nvZM` | func | `(i32) -> (i32)` |
| 338 | `Svr5.UQrf` | func | `(i32) -> (i32)` |
| 339 | `Svr5.TcSL` | func | `(i32) -> (i32)` |
| 340 | `Svr5.pVEw` | func | `(i32) -> (i32)` |
| 341 | `Svr5.F8gD` | func | `(i32) -> (i32)` |
| 342 | `Svr5.s74S` | func | `(i32) -> (i32)` |
| 343 | `Svr5.Tm8Z` | func | `(i32) -> (i32)` |
| 344 | `Svr5.Y6nt` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `Svr5.hbxg` | func | `() -> (i32)` |
| 346 | `Svr5.pVoY` | func | `(i32 i32) -> ()` |
| 347 | `Svr5.nccl` | func | `(i32 i32 i32) -> ()` |
| 348 | `Svr5.wkIb` | func | `(i32 i32 i32) -> ()` |
| 349 | `Svr5.odkp` | func | `(i32 i32) -> (i32)` |
| 350 | `Svr5.AQ4G` | func | `(i32) -> (i32)` |
| 351 | `Svr5.o8Mf` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `Svr5.VJai` | func | `(i32) -> ()` |
| 353 | `Svr5.bsQ2` | func | `(i32) -> (i32)` |
| 354 | `Svr5.OtIK` | func | `(i32 i32) -> ()` |
| 355 | `Svr5.Yn1D` | func | `(i32) -> (i32)` |
| 356 | `Svr5.Z3Q3` | func | `(i32) -> (i32)` |
| 357 | `Svr5.UUf5` | func | `(i32) -> (i32)` |
| 358 | `Svr5.ZZXT` | func | `(i32) -> (i32)` |
| 359 | `Svr5.vwZw` | func | `(i32) -> (i32)` |
| 360 | `Svr5.Z03j` | func | `(i32 i32) -> ()` |
| 361 | `Svr5.lFDZ` | func | `(i32 i32) -> ()` |
| 362 | `Svr5.nq3P` | func | `(i32 i32) -> ()` |
| 363 | `Svr5.U3YY` | func | `(i32 i32) -> ()` |
| 364 | `Svr5.ktNY` | func | `(i32 i32) -> ()` |
| 365 | `Svr5.MFTV` | func | `(i32 i32) -> ()` |
| 366 | `Svr5.nIok` | func | `(i32 i32) -> ()` |
| 367 | `Svr5.FeCF` | func | `(i32 i32 i32) -> ()` |
| 368 | `Svr5.zZYj` | func | `(i32 i32) -> ()` |
| 369 | `Svr5.r6Rt` | func | `(i32 i32) -> (i32)` |
| 370 | `Svr5.lmY7` | func | `(i32) -> (i32)` |
| 371 | `Svr5.KaMA` | func | `(i32) -> (i32)` |
| 372 | `Svr5.gVg2` | func | `(i32 i32) -> ()` |
| 373 | `Svr5.Kvtg` | func | `(i32) -> (i32)` |
| 374 | `Svr5.t350` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `Svr5.ZpB5` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `Svr5.Byoz` | func | `(i32 i32) -> ()` |
| 377 | `Svr5.PmDm` | func | `(i32) -> (i32)` |
| 378 | `Svr5.MhXZ` | func | `(i32) -> (i32)` |
| 379 | `Svr5.Ibgr` | func | `(i32) -> (i32)` |
| 380 | `Svr5.aoIx` | func | `(i32) -> (i32)` |
| 381 | `Svr5.BIKL` | func | `(i32) -> (i32)` |
| 382 | `Svr5.XWxR` | func | `(i32) -> (i32)` |
| 383 | `Svr5.u0Tp` | func | `(i32 i32) -> ()` |
| 384 | `Svr5.eYto` | func | `(i32 i32) -> (i32)` |
| 385 | `Svr5.tfVI` | func | `(i32 i32) -> (i32)` |
| 386 | `Svr5.UgtG` | func | `(i32 i32) -> (i32)` |
| 387 | `Svr5.x17j` | func | `(i32 i32) -> (i32)` |
| 388 | `Svr5.QkKJ` | func | `(i32 i32) -> (i32)` |
| 389 | `Svr5.ppBJ` | func | `(i32 i32) -> (i32)` |
| 390 | `Svr5.cD4x` | func | `(f64) -> (i32)` |
| 391 | `Svr5.bjYX` | func | `(i32 i32) -> (i32)` |
| 392 | `Svr5.gsik` | func | `(i32 i32) -> (i32)` |

## Exports

159 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `Jlfu` | func | 2558 | `(i32 i32) -> ()` |
| `lSEa` | func | 758 | `(i32 i32) -> (i32)` |
| `OOX2` | func | 2322 | `(i32 i32) -> ()` |
| `UbBr` | func | 3275 | `(i32) -> (i32)` |
| `jcCU` | func | 1934 | `(i32 i32 f64 f64 f64) -> ()` |
| `aEf8` | func | 3057 | `(i32 i32) -> (i32)` |
| `Pbvv` | func | 2116 | `(i32 i32) -> ()` |
| `OtKs` | func | 1832 | `(i32 i32) -> (i32)` |
| `YQPX` | func | 2273 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `PxTd` | func | 1456 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `MRFO` | func | 2021 | `(i32) -> (i32)` |
| `pjjp` | func | 2572 | `(i32 i32) -> (i32)` |
| `m5jW` | func | 3087 | `(i32 i32 i32) -> (i32 i32)` |
| `A7i2` | func | 2662 | `() -> (i32)` |
| `gvtZ` | func | 3088 | `(i32 i32 i32) -> (i32 i32)` |
| `ES9h` | func | 1819 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ivwe` | func | 1315 | `(i32 i32) -> (i32)` |
| `BFbK` | func | 1912 | `(i32 i32 i32 i32) -> (i32)` |
| `J5JW` | func | 3299 | `() -> (i32)` |
| `aPHP` | func | 2005 | `(i32) -> (i32)` |
| `Vo1g` | func | 1794 | `(i32) -> (i32)` |
| `xt3A` | func | 3217 | `(i32 i32 i32) -> ()` |
| `obVU` | func | 1457 | `(i32 f64 f64) -> (i32)` |
| `t451` | func | 1939 | `(i32 i32) -> ()` |
| `klf2` | func | 2214 | `(i32 i32) -> (i32)` |
| `F8Pa` | func | 3113 | `(i32) -> (i32 i32)` |
| `PX3d` | func | 1605 | `(i32 i32 i32) -> (i32)` |
| `Du8z` | func | 2253 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `h9dX` | func | 1196 | `(i32 i32) -> ()` |
| `Hjhb` | func | 983 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `YKpT` | func | 2562 | `(i32) -> (i32)` |
| `wOgW` | func | 2097 | `(i32 f64 f64 f64) -> (i32)` |
| `osbg` | func | 2542 | `(i32) -> (i32)` |
| `wlMT` | func | 3151 | `(i32 i32 i32 i32) -> ()` |
| `yzvM` | func | 1392 | `(i32) -> ()` |
| `GVqP` | func | 1962 | `(i32) -> ()` |
| `fFXY` | func | 1286 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `vBwZ` | func | 1555 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `KGil` | func | 2661 | `(i32 i32) -> ()` |
| `O4Y9` | func | 3070 | `(i32 i32) -> ()` |
| `KzLI` | func | 2480 | `(i32 i32 i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)` |
| `c19S` | func | 2582 | `(i32) -> (i32)` |
| `uFmF` | func | 2573 | `(i32 i32) -> (i32)` |
| `JVf8` | func | 2545 | `(i32) -> (i32)` |
| `xj2b` | func | 3188 | `() -> (i32)` |
| `RtrP` | func | 2401 | `(i32 i32) -> (i32)` |
| `w2YR` | func | 2564 | `(i32 i32) -> ()` |
| `hXgY` | func | 2630 | `() -> (i32)` |
| `DmCo` | func | 3226 | `(i32) -> ()` |
| `vZvT` | func | 2477 | `(i32) -> (i32)` |
| `yjWU` | func | 1359 | `(i32) -> (i32)` |
| `kHdn` | func | 842 | `(i32 i32 i32) -> (i32)` |
| `vyn6` | func | 3276 | `(i32) -> ()` |
| `c547` | func | 826 | `(i32) -> (i32)` |
| `Ulq5` | func | 1076 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `qbb4` | func | 1670 | `(i32 f64 f64 f64) -> (i32)` |
| `cpbA` | func | 1405 | `(i32 i32 i32) -> (i32)` |
| `nZdq` | func | 2400 | `(i32 i32) -> (i32)` |
| `GOfH` | func | 1566 | `(i32 i32) -> (i32)` |
| `A8G2` | func | 1896 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `gE2Q` | func | 2563 | `(i32) -> (i32)` |
| `CIGr` | func | 2565 | `(i32) -> (i32)` |
| `Kz4t` | func | 3097 | `(i32 i32) -> (i32 i32)` |
| `HNO2` | func | 1479 | `(i32 i32) -> (i32)` |
| `xzo2` | func | 893 | `(i32 i32) -> (i32)` |
| `VMxC` | func | 2613 | `(i32 i32) -> ()` |
| `B8aK` | func | 2496 | `(i32) -> (i32)` |
| `AYvA` | func | 1559 | `(i32 i32 i32 i32) -> (i32)` |
| `dt45` | func | 3126 | `() -> (i32 i32)` |
| `OiJW` | func | 1287 | `(i32 i32 i32 i32) -> (i32)` |
| `oRq8` | func | 769 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `w3g0` | func | 3096 | `(i32 i32) -> (i32 i32)` |
| `mluZ` | func | 1666 | `(i32 i32) -> ()` |
| `KBZI` | func | 2402 | `(i32 i32) -> (i32)` |
| `Muc1` | func | 3100 | `(i32 i32) -> (i32 i32)` |
| `EnTp` | func | 2137 | `(i32 i32) -> (i32)` |
| `pOTI` | func | 2571 | `(i32) -> (i32)` |
| `VxS6` | func | 3160 | `(i32 i32 i32) -> ()` |
| `o1Z6` | func | 3112 | `(i32) -> (i32 i32)` |
| `ka3G` | func | 2080 | `(i32 f64) -> (i32)` |
| `NRRZ` | func | 2437 | `(i32 i32) -> (i32)` |
| `q43A` | func | 797 | `(i32 i32) -> (i32)` |
| `AEj6` | func | 1813 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `buBk` | func | 2541 | `(i32) -> (i32)` |
| `xDEa` | func | 967 | `(i32 i32) -> (i32)` |
| `KwZK` | func | 2323 | `(i32 f64) -> (i32)` |
| `uwAN` | func | 3099 | `(i32 i32) -> (i32 i32)` |
| `EH6C` | func | 1955 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `u0o1` | func | 1889 | `() -> (i32)` |
| `MwBn` | func | 3088 | `(i32 i32 i32) -> (i32 i32)` |
| `GnkL` | func | 3064 | `(i32 i32 i32 i32) -> (i32)` |
| `uL2o` | func | 2539 | `(i32) -> (f64)` |
| `eFak` | func | 2451 | `(i32 i32 i32 i32) -> (i32)` |
| `b1Ca` | func | 3158 | `(i32 i32 i32) -> (i32)` |
| `ixis` | func | 1338 | `(i32 i32 i32) -> ()` |
| `eFeN` | func | 2549 | `(i32) -> (i32)` |
| `C2Xy` | func | 2349 | `(i32 i32) -> ()` |
| `bDCM` | func | 3110 | `(i32) -> (i32 i32)` |
| `HAqT` | func | 2540 | `(i32) -> (i32)` |
| `f4vI` | func | 2848 | `(i32) -> (i32)` |
| `i6DX` | func | 1948 | `(i32 i32) -> (i32)` |
| `Y2Pg` | func | 1512 | `() -> (i32)` |
| `O97z` | func | 1655 | `(i32 i32) -> (i32)` |
| `BRME` | func | 2543 | `(i32) -> (i32)` |
| `C8iA` | func | 1550 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `xfXN` | func | 3088 | `(i32 i32 i32) -> (i32 i32)` |
| `dPwY` | func | 3098 | `(i32 i32) -> (i32 i32)` |
| `Py3t` | func | 1590 | `(i32 i32) -> (i32)` |
| `tW1S` | func | 2888 | `(i32) -> ()` |
| `qSjb` | func | 3271 | `() -> (f64)` |
| `Ki98` | func | 2546 | `(i32) -> ()` |
| `jGfX` | func | 3101 | `(i32 i32) -> (i32 i32)` |
| `fvid` | func | 2544 | `(i32) -> (i32)` |
| `sunE` | func | 3125 | `() -> (i32 i32)` |
| `vdfL` | func | 1591 | `(i32 i32) -> (i32)` |
| `tJGG` | func | 2548 | `(i32) -> (i32)` |
| `A1WE` | func | 2911 | `(i32) -> (i32)` |
| `SkPQ` | func | 2524 | `(i32) -> (i32)` |
| `Vs0s` | func | 2840 | `(i32) -> (i32)` |
| `wUuG` | func | 660 | `(i32 i32 i32) -> (i32)` |
| `HkcK` | func | 1638 | `(i32) -> (i32)` |
| `iV34` | func | 1195 | `(i32 i32) -> (i32)` |
| `ZbXf` | func | 2547 | `(i32) -> (i32)` |
| `s7Mj` | func | 3088 | `(i32 i32 i32) -> (i32 i32)` |
| `PKsx` | func | 1772 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `gLRY` | func | 1593 | `(i32 f64) -> (f64)` |
| `aNd9` | func | 1665 | `(i32 i32) -> ()` |
| `ZT0a` | func | 3298 | `() -> (i32)` |
| `YDC0` | global | 2 | `` |
| `iuAM` | func | 2875 | `(i32) -> (i32)` |
| `jouW` | func | 1708 | `(i32 i32 i32 i32) -> (i32)` |
| `ZjKK` | func | 2523 | `(i32 i32) -> ()` |
| `rOAU` | func | 1334 | `(i32 i32 i32) -> (i32)` |
| `hQu4` | func | 1293 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `tec9` | func | 3036 | `() -> ()` |
| `CcnU` | func | 3036 | `() -> ()` |
| `gfDv` | func | 823 | `(i32 i32 i32 i32) -> (i32)` |
| `UPHT` | func | 2581 | `(i32) -> (i32)` |
| `HT0w` | func | 3109 | `(i32) -> (i32 i32)` |
| `yVx9` | func | 1250 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `dhBI` | func | 2580 | `(i32) -> (i32)` |
| `usQv` | func | 3111 | `(i32) -> (i32 i32)` |
| `ohkB` | func | 2865 | `(i32) -> (i32)` |
| `cmXF` | func | 1507 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `gDc9` | func | 1366 | `(i32 i32) -> (i32)` |
| `kqJD` | func | 1961 | `(i32) -> ()` |
| `X96q` | func | 994 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Jy8J` | global | 1 | `` |
| `UlaE` | func | 2403 | `(i32 i32) -> (i32)` |
| `GngI` | func | 1579 | `(i32 i32) -> (i32)` |
| `LUMT` | func | 2057 | `(i32 i32) -> ()` |
| `Ck8z` | func | 830 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `QyvL` | func | 1560 | `(i32) -> (i32)` |
| `vA0w` | func | 1625 | `(i32 i32 i32 i32) -> (i32)` |
| `h2Ko` | func | 3095 | `(i32 i32) -> (i32 i32)` |
| `I3fa` | func | 1534 | `(i32 i32 i32 i32) -> ()` |
| `WV2h` | func | 966 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `LuUw` | func | 2023 | `(i32 i32 i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 34 pages · max 14,648 · shared=False
- table 0: funcref · min 829 · max 829
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2208272, `i32` = i32.const 2208812

## Functions

- 2,919 bodies · 4,024,555 code bytes · avg 1.3 KB
- instruction scan: 2,919 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 166 |
| <= 64 bytes | 116 |
| <= 128 bytes | 271 |
| <= 256 bytes | 383 |
| <= 512 bytes | 660 |
| <= 1024 bytes | 579 |
| <= 2048 bytes | 410 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 93 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 35 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 151 | 122,487 | 58,839 | local.get×16653, i32.const×7052, i32.add×3400, local.set×3378, i32.load×3113 |
| 1 | `(i32 i32 i32 i32) -> ()` | 213 | 194,847 | 88,426 | local.get×25920, i32.const×9915, i32.load×5634, local.set×4736, local.tee×4647 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 131 | 55,060 | 25,067 | local.get×7450, i32.const×3293, local.set×1374, i32.add×1263, i32.load×1141 |
| 3 | `(i32 i32) -> ()` | 123 | 48,820 | 22,511 | local.get×6329, i32.const×2250, local.set×1325, local.tee×1179, i32.load×1035 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,437 | 13,994 | local.get×4104, i32.const×1877, i32.load×884, i32.add×645, local.set×618 |
| 5 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 9 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 20,628 | 9,288 | local.get×2540, i32.const×1209, local.set×548, local.tee×388, end×388 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 88 | 20,692 | 7,910 | local.get×2965, i32.const×921, i64.store×824, i32.store×624, i64.const×500 |
| 21 | `(i32 i32) -> ()` | 82 | 29,009 | 13,035 | local.get×4617, i32.const×1454, i32.store×702, i32.add×688, local.tee×644 |
| 22 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,702 | 10,568 | local.get×3337, i32.const×1237, local.tee×729, i32.add×432, local.set×333 |
| 42 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,313 | 12,830 | local.get×3658, i32.const×1857, i32.add×763, local.set×691, end×574 |
| 60 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 193 | `(i32 i32) -> ()` | 10 | 26,445 | 12,733 | local.get×4479, i32.load×1203, i32.const×1018, end×792, i32.add×730 |
| 221 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 704 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 987 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1033 | `(i32 i32) -> (i32)` | 41 | 19,482 | 7,672 | local.get×2487, i32.const×814, i64.store×604, i32.load×380, local.set×343 |
| 1555 | `(i32 i32) -> (i32)` | 179 | 54,560 | 19,801 | local.get×6573, i32.const×2623, i64.store×1887, i64.const×1063, i64.load×1044 |
| 1948 | `(i32 i32) -> ()` | 110 | 38,696 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2581 | `(i32 i32) -> ()` | 397 | 142,143 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2868 | `(i32 i32 i32 i32) -> ()` | 137 | 30,503 | 13,917 | local.get×4170, i32.const×1461, local.tee×731, local.set×679, i32.load×613 |
| 2887 | `(i32 i32) -> ()` | 136 | 33,944 | 15,212 | local.get×4274, i32.const×2015, local.set×798, local.tee×744, i32.add×699 |

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
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
r8unormr8snormr8uintr8sintr16unormr16snormr16uintr16sintr16floatrg8unormrg8snormrg8uintrg8sintr32uintr32sintr32floatrg16unormrg16snormrg16uintrg16sintrg16floatrgba8unormrgba8unorm-srgbrgba8snormrgba8u
schema023canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshow
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
maxTextureDimension1DmaxTextureDimension2DmaxTextureDimension3DmaxTextureArrayLayersmaxBindGroupsmaxBindGroupsPlusVertexBuffersmaxBindingsPerBindGroupmaxDynamicUniformBuffersPerPipelineLayoutmaxDynami
R8UnormR8SnormR8UintR8SintR16UintR16SintR16UnormR16SnormR16FloatRg8UnormRg8SnormRg8UintRg8SintR32UintR32SintR32FloatRg16UintRg16SintRg16UnormRg16SnormRg16FloatRgba8UnormRgba8UnormSrgbRgba8SnormRgba8Ui
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
flag testalpha * baseColor.abaseColor.abloxdSpGlintTier(v.vEnchantHsvAndTick.xyz)enchantmentColour(v.vEnchantHsvAndTick, v.vEnchantLocalPos, baseColor.rgb)bloxdSpEnchantSpeedbloxdSpLocalvec4f(v.vOverl
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 538,223 |
| `i32.const` | 226,206 |
| `local.tee` | 99,058 |
| `local.set` | 94,067 |
| `i32.load` | 92,927 |
| `i32.add` | 86,659 |
| `end` | 78,894 |
| `br_if` | 63,379 |
| `i32.store` | 46,666 |
| `block` | 37,112 |
| `i64.store` | 32,623 |
| `i64.const` | 31,983 |
| `if` | 30,184 |
| `call` | 29,958 |
| `i64.load` | 24,275 |
| `i32.sub` | 23,984 |
| `br` | 23,128 |
| `i32.eqz` | 18,891 |
| `select` | 16,649 |
| `i32.shl` | 16,187 |
| `i32.and` | 16,161 |
| `i32.ne` | 15,577 |
| `i32.load8_u` | 15,011 |
| `i32.eq` | 13,635 |
| `i32.store8` | 13,151 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 2,919/2,919 (degraded: 0)
