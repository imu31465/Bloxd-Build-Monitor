# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `fqwnlq.985c8f39` · analyzed 2026-11-24T11:40:10+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.891cfb9513f3a942c2f7.wasm
> 4,836,275 bytes (4.6 MB) · sha256 `e1bef365f7d6b4c1…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,836,347 → 4,836,275 bytes (-72)
- defined functions 2,859 → 2,860
- code bytes 3,987,961 → 3,987,886
- name-section module id `fdc04fd07aac45e9.10574` → `49954d06210badee.10575`
- export identifiers rotated by the obfuscator: 1/156 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,860 / 282 |
| Exports / imports | 156 / 283 |
| Code bytes (function bodies) | 3,987,886 (3.8 MB) |
| Total local variables | 30,409 |
| Instructions (scanable bodies) | 1,871,317 |
| Data segments / bytes | 3,771 / 802,052 |
| Element segments / entries | 1 / 732 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `49954d06210badee.10575` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,478 | 173 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,907 | 2860 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,249 | 156 |
| 9 | element | 1,471 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 3,993,135 | 2860 |
| 11 | data | 832,529 | 3771 |
| 0 | custom:name | 30 | — |

## Types

173 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `o8gK.YaYB` | memory | `[128..14648]` |
| 0 | `o8gK.I6ES` | func | `(i32) -> (f64)` |
| 1 | `o8gK.BVTo` | func | `() -> (i32)` |
| 2 | `o8gK.qp9E` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `o8gK.FhAr` | func | `(i32) -> ()` |
| 4 | `o8gK.X3A5` | func | `(i32 i32) -> (i32)` |
| 5 | `o8gK.v392` | func | `(i32) -> (i32)` |
| 6 | `o8gK.A9mg` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `o8gK.bVWg` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `o8gK.vzBX` | func | `(i32) -> (i32)` |
| 9 | `o8gK.RhEe` | func | `(i32 i32) -> ()` |
| 10 | `o8gK.qIOT` | func | `(i32 i32) -> ()` |
| 11 | `o8gK.iuXb` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `o8gK.puDe` | func | `(i32 i32) -> (i32)` |
| 13 | `o8gK.MDgB` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `o8gK.l5u2` | func | `(i32) -> (i32)` |
| 15 | `o8gK.KOjM` | func | `(i32 i32) -> (i32)` |
| 16 | `o8gK.FbkV` | func | `(i32 i32) -> (i32)` |
| 17 | `o8gK.s4tX` | func | `(i32 i32) -> ()` |
| 18 | `o8gK.dKse` | func | `(i32) -> (i32)` |
| 19 | `o8gK.KBsy` | func | `(i32) -> (i32)` |
| 20 | `o8gK.JfCO` | func | `(i32) -> (i32)` |
| 21 | `o8gK.yRLp` | func | `(i32) -> ()` |
| 22 | `o8gK.vksh` | func | `(i32 i32) -> ()` |
| 23 | `o8gK.NsCP` | func | `(i32 i32) -> ()` |
| 24 | `o8gK.oBfR` | func | `(i32) -> (i32)` |
| 25 | `o8gK.QLm8` | func | `(i32 i32) -> ()` |
| 26 | `o8gK.LivZ` | func | `(i32 i32) -> (i32)` |
| 27 | `o8gK.jpcy` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `o8gK.Kcsw` | func | `(i32 i32) -> (i32)` |
| 29 | `o8gK.wCbU` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `o8gK.VaF5` | func | `(i32) -> (i32)` |
| 31 | `o8gK.esuC` | func | `(i32 i32) -> ()` |
| 32 | `o8gK.jSkx` | func | `(i32) -> (i32)` |
| 33 | `o8gK.z7Wh` | func | `(i32) -> (i32)` |
| 34 | `o8gK.iIOV` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `o8gK.aKxs` | func | `(i32) -> (i32)` |
| 36 | `o8gK.jqEB` | func | `(i32) -> (i32)` |
| 37 | `o8gK.JPMc` | func | `(i32) -> (i32)` |
| 38 | `o8gK.k055` | func | `(i32 i32) -> (i32)` |
| 39 | `o8gK.bE2n` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `o8gK.Svr9` | func | `(i32) -> (i32)` |
| 41 | `o8gK.EzCY` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `o8gK.DCy4` | func | `() -> (f64)` |
| 43 | `o8gK.rxJl` | func | `(i32) -> (i32)` |
| 44 | `o8gK.e3JF` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `o8gK.cA9k` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `o8gK.uUWJ` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `o8gK.rB29` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `o8gK.EjJq` | func | `(i32 i32 i32) -> ()` |
| 49 | `o8gK.sSon` | func | `(i32 i32 i32) -> ()` |
| 50 | `o8gK.zw9s` | func | `(i32 i32 i32) -> ()` |
| 51 | `o8gK.lWVm` | func | `(i32 i32) -> ()` |
| 52 | `o8gK.k0P4` | func | `(i32 i32) -> ()` |
| 53 | `o8gK.lDto` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `o8gK.Jtnm` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `o8gK.G4XT` | func | `(i32 f32 f32) -> ()` |
| 56 | `o8gK.SyDk` | func | `(i32 f32 f32) -> ()` |
| 57 | `o8gK.b1MM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `o8gK.nwD8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `o8gK.wTKa` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `o8gK.PGIZ` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `o8gK.XmVL` | func | `(i32 i32 i32) -> ()` |
| 62 | `o8gK.M2Xa` | func | `(i32 i32 i32) -> ()` |
| 63 | `o8gK.wdMW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `o8gK.EANc` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `o8gK.IfCG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `o8gK.lzfy` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `o8gK.EQYp` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `o8gK.t6Fo` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `o8gK.PTAt` | func | `(i32) -> (i32)` |
| 70 | `o8gK.l98f` | func | `(i32) -> ()` |
| 71 | `o8gK.Fc3O` | func | `(i32) -> (i32)` |
| 72 | `o8gK.JxuG` | func | `(i32 i32) -> (i32)` |
| 73 | `o8gK.dR8N` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `o8gK.bvjf` | func | `(i32 i32 i32) -> ()` |
| 75 | `o8gK.MzbO` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `o8gK.S2Nt` | func | `() -> (f64)` |
| 77 | `o8gK.lUF1` | func | `() -> (f64)` |
| 78 | `o8gK.oZo8` | func | `(i32 i32) -> ()` |
| 79 | `o8gK.XPWP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `o8gK.k5iX` | func | `(i32 i32 i32) -> ()` |
| 81 | `o8gK.JVx5` | func | `(i32 i32 i32) -> ()` |
| 82 | `o8gK.or8x` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `o8gK.CcK3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `o8gK.p13B` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `o8gK.XqKQ` | func | `(i32 i32) -> ()` |
| 86 | `o8gK.Pdhc` | func | `(i32 i32) -> ()` |
| 87 | `o8gK.Opw1` | func | `(i32) -> (i32)` |
| 88 | `o8gK.Ftjx` | func | `(i32 i32) -> ()` |
| 89 | `o8gK.C7pJ` | func | `(i32 i32) -> ()` |
| 90 | `o8gK.BLWA` | func | `(i32 i32 i32) -> ()` |
| 91 | `o8gK.B0Tn` | func | `(i32 i32 i32) -> ()` |
| 92 | `o8gK.ESvu` | func | `(i32) -> (i32)` |
| 93 | `o8gK.OG5D` | func | `(i32) -> (i32)` |
| 94 | `o8gK.gRbv` | func | `(i32 i32) -> (i32)` |
| 95 | `o8gK.uFQ2` | func | `(i32 i32) -> (i32)` |
| 96 | `o8gK.QG9D` | func | `(i32 i32) -> ()` |
| 97 | `o8gK.Ze8F` | func | `(i32 i32) -> ()` |
| 98 | `o8gK.EOWK` | func | `(i32 i32 i32) -> ()` |
| 99 | `o8gK.t8pp` | func | `(i32 i32 i32) -> ()` |
| 100 | `o8gK.JMXp` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `o8gK.kwcI` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `o8gK.g5ow` | func | `(i32 i32 f32) -> ()` |
| 103 | `o8gK.axlb` | func | `(i32 i32 f32) -> ()` |
| 104 | `o8gK.R70V` | func | `(i32 i32 i32) -> ()` |
| 105 | `o8gK.QAit` | func | `(i32 i32 i32) -> ()` |
| 106 | `o8gK.X6Gm` | func | `(i32 i32 i32) -> ()` |
| 107 | `o8gK.Ror9` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `o8gK.xJnB` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `o8gK.tGBp` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `o8gK.wiDh` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `o8gK.NbVm` | func | `(i32 i32) -> ()` |
| 112 | `o8gK.uFi4` | func | `(i32 i32) -> ()` |
| 113 | `o8gK.iZnW` | func | `(i32 i32) -> ()` |
| 114 | `o8gK.fRn6` | func | `(i32 i32) -> ()` |
| 115 | `o8gK.lJJt` | func | `(i32) -> (i32)` |
| 116 | `o8gK.yecG` | func | `(i32) -> (i32)` |
| 117 | `o8gK.BUSG` | func | `(i32) -> (i32)` |
| 118 | `o8gK.tG1c` | func | `(i32) -> (i32)` |
| 119 | `o8gK.OpEx` | func | `(i32 i32) -> ()` |
| 120 | `o8gK.Sql4` | func | `(i32 i32) -> ()` |
| 121 | `o8gK.XyIT` | func | `(i32 i32) -> ()` |
| 122 | `o8gK.f8pJ` | func | `(i32 i32) -> ()` |
| 123 | `o8gK.mcrI` | func | `(i32 i32) -> ()` |
| 124 | `o8gK.xeTp` | func | `(i32 i32) -> ()` |
| 125 | `o8gK.ddTl` | func | `(i32 i32) -> (i32)` |
| 126 | `o8gK.WACo` | func | `(i32 i32) -> (i32)` |
| 127 | `o8gK.OVEs` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `o8gK.Tvqm` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `o8gK.wuwJ` | func | `(i32 i32) -> ()` |
| 130 | `o8gK.pGa6` | func | `(i32 i32) -> ()` |
| 131 | `o8gK.p842` | func | `(i32) -> (i32)` |
| 132 | `o8gK.n9Wd` | func | `(i32 i32) -> ()` |
| 133 | `o8gK.LGCu` | func | `(i32 i32) -> ()` |
| 134 | `o8gK.qgB0` | func | `(i32 i32 i32) -> ()` |
| 135 | `o8gK.Zep9` | func | `(i32 i32 i32) -> ()` |
| 136 | `o8gK.c4SK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `o8gK.nowF` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `o8gK.fIoP` | func | `(i32 i32) -> ()` |
| 139 | `o8gK.hF8r` | func | `(i32 i32 i32) -> ()` |
| 140 | `o8gK.fBLN` | func | `(i32 i32 i32) -> ()` |
| 141 | `o8gK.j9JC` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `o8gK.RO6N` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `o8gK.puQq` | func | `(i32 i32 i32) -> ()` |
| 144 | `o8gK.a2rm` | func | `(i32 i32 i32) -> ()` |
| 145 | `o8gK.dq9P` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `o8gK.vBFn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `o8gK.H4kd` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `o8gK.eeaA` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `o8gK.p3sn` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `o8gK.Ryiw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `o8gK.ElbE` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `o8gK.sckm` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `o8gK.mRTq` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `o8gK.pQPx` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `o8gK.vKlw` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `o8gK.vZqB` | func | `(i32) -> (i32)` |
| 157 | `o8gK.JlG5` | func | `(i32) -> (i32)` |
| 158 | `o8gK.BXou` | func | `(i32) -> (i32)` |
| 159 | `o8gK.ips7` | func | `(i32) -> (i32)` |
| 160 | `o8gK.TeI1` | func | `() -> (i32)` |
| 161 | `o8gK.USUb` | func | `() -> (i32)` |
| 162 | `o8gK.BwOR` | func | `() -> (i32)` |
| 163 | `o8gK.hRKM` | func | `() -> (i32)` |
| 164 | `o8gK.MayI` | func | `(i32 i32) -> (i32)` |
| 165 | `o8gK.qnHt` | func | `(i32) -> ()` |
| 166 | `o8gK.mn48` | func | `(i32 i32) -> (i32)` |
| 167 | `o8gK.NLlr` | func | `(i32) -> (i32)` |
| 168 | `o8gK.GVUq` | func | `(i32) -> (i32)` |
| 169 | `o8gK.k1Yp` | func | `(i32) -> (i32)` |
| 170 | `o8gK.T7XG` | func | `(i32) -> ()` |
| 171 | `o8gK.ad6E` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `o8gK.qF4G` | func | `(i32) -> (i32)` |
| 173 | `o8gK.vD0a` | func | `(i32) -> (i32)` |
| 174 | `o8gK.wGHe` | func | `(i32 i32) -> (i32)` |
| 175 | `o8gK.yYk5` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `o8gK.sutL` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `o8gK.mO3Z` | func | `(i32) -> (i32)` |
| 178 | `o8gK.fLmd` | func | `(i32) -> (i32)` |
| 179 | `o8gK.NWSl` | func | `(i32) -> (i32)` |
| 180 | `o8gK.uMBk` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `o8gK.uOJM` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `o8gK.D6lk` | func | `(i32 i32) -> ()` |
| 183 | `o8gK.BMEn` | func | `(i32 i32 i32) -> ()` |
| 184 | `o8gK.zGkU` | func | `(i32 i32) -> ()` |
| 185 | `o8gK.vmV0` | func | `(i32 i32 i32) -> ()` |
| 186 | `o8gK.DTwo` | func | `(i32 i32) -> ()` |
| 187 | `o8gK.xMvL` | func | `(i32 i32) -> ()` |
| 188 | `o8gK.RcYg` | func | `(i32) -> (i32)` |
| 189 | `o8gK.Z5y0` | func | `(i32 i32) -> (i32)` |
| 190 | `o8gK.rCrf` | func | `(i32) -> ()` |
| 191 | `o8gK.Ubst` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `o8gK.DpCb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `o8gK.taVW` | func | `(i32 i32) -> ()` |
| 194 | `o8gK.imlM` | func | `(i32 i32) -> ()` |
| 195 | `o8gK.U9Sx` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `o8gK.NYdm` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `o8gK.YKtu` | func | `(i32 f32) -> ()` |
| 198 | `o8gK.RAuk` | func | `(i32 f32) -> ()` |
| 199 | `o8gK.HbW1` | func | `(i32 i32) -> ()` |
| 200 | `o8gK.zSTv` | func | `(i32 i32) -> ()` |
| 201 | `o8gK.kqhy` | func | `(i32) -> (i32)` |
| 202 | `o8gK.W88y` | func | `(i32) -> (i32)` |
| 203 | `o8gK.qkrr` | func | `(i32) -> (i32)` |
| 204 | `o8gK.h34v` | func | `(i32) -> (i32)` |
| 205 | `o8gK.ZaYZ` | func | `(i32 i32 i32) -> ()` |
| 206 | `o8gK.ZYVQ` | func | `(i32 i32 i32) -> ()` |
| 207 | `o8gK.PuWU` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `o8gK.v587` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `o8gK.ou7X` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `o8gK.qtn8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `o8gK.DdJO` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `o8gK.o6BV` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `o8gK.KWKY` | func | `(i32 i32) -> ()` |
| 214 | `o8gK.Ezbo` | func | `(i32 i32) -> ()` |
| 215 | `o8gK.dJ9o` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `o8gK.mBYE` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `o8gK.HSEJ` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `o8gK.m22c` | func | `(i32) -> (i32)` |
| 219 | `o8gK.EOQ4` | func | `(i32) -> (i32)` |
| 220 | `o8gK.uqxL` | func | `(i32 i32) -> ()` |
| 221 | `o8gK.bbW3` | func | `(i32 i32) -> ()` |
| 222 | `o8gK.ywuV` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `o8gK.MeO9` | func | `(i32) -> (i32)` |
| 224 | `o8gK.P9s2` | func | `(i32) -> (i32)` |
| 225 | `o8gK.ZEse` | func | `(i32 i32) -> ()` |
| 226 | `o8gK.sBKg` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `o8gK.Vq2Y` | func | `(i32 i32) -> ()` |
| 228 | `o8gK.ZVP5` | func | `(i32 i32) -> ()` |
| 229 | `o8gK.sao3` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `o8gK.v6Tm` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `o8gK.TIJG` | func | `(i32 i32 i32) -> ()` |
| 232 | `o8gK.uWbo` | func | `(i32 i32 i32) -> ()` |
| 233 | `o8gK.vpvl` | func | `(i32 i32) -> ()` |
| 234 | `o8gK.hn3C` | func | `(i32 i32) -> ()` |
| 235 | `o8gK.FKVF` | func | `(i32 i32) -> ()` |
| 236 | `o8gK.Hc0Z` | func | `(i32 i32) -> ()` |
| 237 | `o8gK.FSbt` | func | `(i32 i32) -> ()` |
| 238 | `o8gK.wVIG` | func | `(i32 i32) -> ()` |
| 239 | `o8gK.WrsS` | func | `(i32 f32 f32) -> ()` |
| 240 | `o8gK.DgSC` | func | `(i32 f32 f32) -> ()` |
| 241 | `o8gK.jV7J` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `o8gK.uHQN` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `o8gK.cWY7` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `o8gK.f94R` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `o8gK.x2eb` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `o8gK.iMlK` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `o8gK.sOsW` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `o8gK.lQeZ` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `o8gK.KqiM` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `o8gK.j8iG` | func | `(i32) -> ()` |
| 251 | `o8gK.ycIe` | func | `(i32 i32) -> ()` |
| 252 | `o8gK.UupL` | func | `(i32 i32) -> ()` |
| 253 | `o8gK.Pe3G` | func | `(i32 i32) -> ()` |
| 254 | `o8gK.sTQv` | func | `(i32 i32) -> ()` |
| 255 | `o8gK.yYc6` | func | `(i32 i32) -> ()` |
| 256 | `o8gK.KlbM` | func | `(i32 i32) -> ()` |
| 257 | `o8gK.HQcj` | func | `(i32 i32) -> ()` |
| 258 | `o8gK.LIOP` | func | `(i32 i32) -> ()` |
| 259 | `o8gK.lPl1` | func | `(i32) -> (i32)` |
| 260 | `o8gK.dqMV` | func | `(i32) -> (i32)` |
| 261 | `o8gK.oxwc` | func | `(i32) -> (i32)` |
| 262 | `o8gK.njCJ` | func | `(i32) -> (i32)` |
| 263 | `o8gK.z9CS` | func | `(i32) -> ()` |
| 264 | `o8gK.nUsw` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `o8gK.KZbo` | func | `(i32) -> ()` |
| 266 | `o8gK.iOvI` | func | `(i32) -> (i32)` |
| 267 | `o8gK.Kye8` | func | `(i32) -> (i32)` |
| 268 | `o8gK.G20D` | func | `(i32) -> (i32)` |
| 269 | `o8gK.tRbc` | func | `(i32) -> (i32)` |
| 270 | `o8gK.NK1V` | func | `(i32 i32) -> ()` |
| 271 | `o8gK.h3yC` | func | `(i32) -> ()` |
| 272 | `o8gK.WLRQ` | func | `(i32 i32) -> ()` |
| 273 | `o8gK.IBBi` | func | `(i32) -> (i32)` |
| 274 | `o8gK.oSiJ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `o8gK.Dn68` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `o8gK.vDRc` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `o8gK.zKV4` | func | `(i32 i32) -> (i32)` |
| 278 | `o8gK.Qa9u` | func | `(i32 i32) -> (i32)` |
| 279 | `o8gK.rNkd` | func | `(i32 i32) -> (i32)` |
| 280 | `o8gK.cvcR` | func | `(i32 i32) -> (i32)` |
| 281 | `o8gK.SsmH` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `ZfHE` | func | 649 | `(i32 i32) -> (i32)` |
| `tZQq` | func | 3108 | `(i32) -> (i32)` |
| `rBjS` | func | 3131 | `() -> (i32)` |
| `glUJ` | func | 2938 | `(i32 i32 i32) -> (i32 i32)` |
| `ERZj` | func | 2710 | `(i32) -> (i32)` |
| `k7sz` | func | 897 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `dVi2` | func | 1456 | `(i32 i32) -> (i32)` |
| `r7RO` | func | 2739 | `(i32) -> (i32)` |
| `wX4C` | func | 719 | `(i32) -> (i32)` |
| `HRgt` | func | 2425 | `(i32) -> (i32)` |
| `NfLA` | func | 2360 | `(i32) -> (i32)` |
| `wZrg` | func | 2455 | `(i32) -> (i32)` |
| `aHTZ` | func | 2377 | `(i32) -> (i32)` |
| `gBdh` | func | 2160 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `wNJv` | func | 2291 | `(i32 i32) -> (i32)` |
| `YTaG` | func | 1665 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `K3Hd` | func | 1485 | `(i32 f64) -> (f64)` |
| `Mvke` | func | 2139 | `(i32 i32) -> (i32)` |
| `SgxZ` | func | 3001 | `(i32 i32) -> ()` |
| `gVmw` | func | 1441 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `TAGy` | func | 1446 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `SApD` | func | 2293 | `(i32 i32) -> (i32)` |
| `ediR` | func | 2439 | `(i32) -> (i32)` |
| `jpV3` | func | 2437 | `(i32) -> (i32)` |
| `Oq5g` | func | 2914 | `(i32 i32 i32 i32) -> (i32)` |
| `Xzsi` | func | 1851 | `(i32) -> ()` |
| `lPg2` | func | 2446 | `(i32) -> (i32)` |
| `pL3F` | func | 1086 | `(i32 i32) -> ()` |
| `UI7D` | func | 2457 | `(i32) -> (i32)` |
| `Fxm3` | func | 1380 | `(i32 i32) -> (i32)` |
| `S9Kn` | func | 1186 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `fgoZ` | func | 2422 | `(i32) -> (i32)` |
| `WOA6` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `O8h3` | func | 3109 | `(i32) -> ()` |
| `n6oF` | func | 2949 | `(i32 i32) -> (i32 i32)` |
| `XdJW` | func | 2214 | `(i32 f64) -> (i32)` |
| `ebyL` | func | 2403 | `(i32 i32) -> ()` |
| `byI9` | func | 1240 | `(i32 i32 i32) -> ()` |
| `wpHt` | func | 1482 | `(i32 i32) -> (i32)` |
| `d6HC` | func | 2717 | `(i32) -> (i32)` |
| `lwec` | func | 1449 | `(i32 i32 i32 i32) -> (i32)` |
| `Cd1K` | func | 1783 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `RT4T` | func | 2920 | `(i32 i32) -> ()` |
| `jiU5` | func | 1193 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `ksft` | func | 3056 | `(i32 i32 i32) -> ()` |
| `ubtB` | func | 3062 | `(i32) -> ()` |
| `XeNi` | func | 724 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `lT9B` | func | 2944 | `(i32 i32) -> (i32 i32)` |
| `dYz4` | func | 1559 | `(i32 i32) -> ()` |
| `LjXT` | func | 1310 | `(i32 i32 i32) -> (i32)` |
| `jFCD` | func | 2213 | `(i32 i32) -> ()` |
| `UDso` | func | 2957 | `(i32) -> (i32 i32)` |
| `wih7` | func | 2420 | `(i32) -> (i32)` |
| `qIIU` | func | 1481 | `(i32 i32) -> (i32)` |
| `GiDN` | func | 2750 | `(i32) -> ()` |
| `RE9r` | func | 2417 | `(i32) -> (f64)` |
| `O66A` | func | 1701 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `xg09` | global | 1 | `` |
| `HvTl` | func | 1850 | `(i32) -> ()` |
| `HlKf` | func | 1907 | `(i32) -> (i32)` |
| `ROdi` | func | 2939 | `(i32 i32 i32) -> (i32 i32)` |
| `aklT` | func | 2292 | `(i32 i32) -> (i32)` |
| `ucbX` | func | 1406 | `() -> (i32)` |
| `Nfvd` | func | 1234 | `(i32 i32 i32) -> (i32)` |
| `Ndv8` | func | 2336 | `(i32 i32 i32 i32) -> (i32)` |
| `uezs` | func | 2953 | `(i32) -> (i32 i32)` |
| `huqi` | func | 2438 | `(i32 i32) -> ()` |
| `tIem` | func | 2426 | `(i32) -> (i32)` |
| `tn6h` | func | 1986 | `(i32 f64 f64 f64) -> (i32)` |
| `Hcag` | func | 2948 | `(i32 i32) -> (i32 i32)` |
| `bRrW` | func | 1216 | `(i32 i32) -> (i32)` |
| `YV6d` | func | 2427 | `(i32) -> (i32)` |
| `YKfn` | func | 2956 | `(i32) -> (i32 i32)` |
| `cEw2` | func | 1601 | `(i32 i32 i32 i32) -> (i32)` |
| `skfO` | func | 687 | `(i32 i32) -> (i32)` |
| `bKOt` | func | 2955 | `(i32) -> (i32 i32)` |
| `T4Ex` | func | 1187 | `(i32 i32 i32 i32) -> (i32)` |
| `JmZg` | func | 869 | `(i32 i32) -> (i32)` |
| `hgeD` | func | 2991 | `(i32 i32 i32 i32) -> ()` |
| `vERf` | func | 1778 | `() -> (i32)` |
| `jfVI` | func | 2448 | `(i32 i32) -> (i32)` |
| `YSWF` | func | 1708 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `dMEM` | func | 2244 | `(i32 i32) -> ()` |
| `IDCQ` | func | 1427 | `(i32 i32 i32 i32) -> ()` |
| `E4jF` | func | 1359 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `AqYA` | func | 868 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `uEHK` | func | 1818 | `(i32 i32 f64 f64 f64) -> ()` |
| `nUPQ` | func | 1146 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `fKB2` | func | 1450 | `(i32) -> (i32)` |
| `IYMf` | func | 2504 | `() -> (i32)` |
| `qC7j` | func | 2447 | `(i32 i32) -> (i32)` |
| `Ukxx` | global | 2 | `` |
| `E2SS` | func | 2730 | `(i32) -> (i32)` |
| `I5ZT` | func | 3000 | `(i32 i32 i32) -> ()` |
| `B88q` | func | 2363 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `rutH` | func | 2418 | `(i32) -> (i32)` |
| `MGKA` | func | 1563 | `(i32 f64 f64 f64) -> (i32)` |
| `Im4V` | func | 597 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Ld5U` | func | 1267 | `(i32 i32) -> (i32)` |
| `Fwsh` | func | 2026 | `(i32 i32) -> (i32)` |
| `XA88` | func | 1825 | `(i32 i32) -> ()` |
| `NKnH` | func | 2423 | `(i32) -> (i32)` |
| `lCsP` | func | 2436 | `(i32) -> (i32)` |
| `hJYG` | func | 1294 | `(i32) -> ()` |
| `fwJ4` | func | 2772 | `(i32) -> (i32)` |
| `PF9R` | func | 2537 | `() -> (i32)` |
| `qeMn` | func | 1259 | `(i32) -> (i32)` |
| `WRvj` | func | 3132 | `() -> (i32)` |
| `f6Tn` | func | 2969 | `() -> (i32 i32)` |
| `LdGD` | func | 2954 | `(i32) -> (i32 i32)` |
| `WB6m` | func | 1531 | `(i32) -> (i32)` |
| `zH7e` | func | 887 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `BhTD` | func | 3029 | `() -> (i32)` |
| `cYq4` | func | 792 | `(i32 i32) -> (i32)` |
| `IVR7` | func | 2946 | `(i32 i32) -> (i32 i32)` |
| `qTdu` | func | 1686 | `(i32) -> (i32)` |
| `b7Zy` | func | 2947 | `(i32 i32) -> (i32 i32)` |
| `Uuwn` | func | 1497 | `(i32 i32 i32) -> (i32)` |
| `ryxl` | func | 3063 | `() -> ()` |
| `Yphx` | func | 548 | `(i32 i32 i32) -> (i32)` |
| `VJ6i` | func | 2968 | `() -> (i32 i32)` |
| `rqS3` | func | 1968 | `(i32 f64) -> (i32)` |
| `JZ3S` | func | 2421 | `(i32) -> (i32)` |
| `x0Nz` | func | 1470 | `(i32 i32) -> (i32)` |
| `GiSV` | func | 1835 | `(i32 i32) -> (i32)` |
| `iMmn` | func | 1085 | `(i32 i32) -> (i32)` |
| `B7Ew` | func | 2419 | `(i32) -> (i32)` |
| `SQfT` | func | 2404 | `(i32) -> (i32)` |
| `ja4A` | func | 1360 | `(i32 f64 f64) -> (i32)` |
| `CjbC` | func | 1547 | `(i32 i32) -> (i32)` |
| `DbKZ` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `p7m6` | func | 2294 | `(i32 i32) -> (i32)` |
| `kuHH` | func | 2456 | `(i32) -> (i32)` |
| `fhia` | func | 2536 | `(i32 i32) -> ()` |
| `EPbu` | func | 1798 | `(i32 i32 i32 i32) -> (i32)` |
| `OiyF` | func | 2943 | `(i32 i32) -> (i32 i32)` |
| `TdoQ` | func | 2323 | `(i32 i32) -> (i32)` |
| `uU9h` | func | 1842 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `bSkP` | func | 1517 | `(i32 i32 i32 i32) -> (i32)` |
| `R63h` | func | 2434 | `(i32 i32) -> ()` |
| `a3OX` | func | 2424 | `(i32) -> ()` |
| `j8Yb` | func | 2945 | `(i32 i32) -> (i32 i32)` |
| `frmS` | func | 3104 | `() -> (f64)` |
| `mxt5` | func | 2003 | `(i32 i32) -> ()` |
| `jHvS` | func | 1942 | `(i32 i32) -> ()` |
| `FeLl` | func | 1719 | `(i32 i32) -> (i32)` |
| `HZ2k` | func | 661 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `QCER` | func | 1909 | `(i32 i32 i32 i32) -> ()` |
| `azT7` | func | 2108 | `(i32 i32) -> (i32)` |
| `BHLC` | func | 1558 | `(i32 i32) -> ()` |
| `ZhsD` | func | 1402 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `TsZz` | func | 2909 | `(i32 i32) -> (i32)` |
| `xRmD` | func | 2890 | `() -> ()` |
| `LVat` | func | 1892 | `(i32) -> (i32)` |
| `blbQ` | func | 2492 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 733 · max 733
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2015248, `i32` = i32.const 2015812

## Functions

- 2,860 bodies · 3,987,886 code bytes · avg 1.4 KB
- instruction scan: 2,860 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 104 |
| <= 128 bytes | 251 |
| <= 256 bytes | 365 |
| <= 512 bytes | 664 |
| <= 1024 bytes | 571 |
| <= 2048 bytes | 414 |
| <= 4096 bytes | 182 |
| <= 8192 bytes | 88 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 213 | 194,475 | 88,290 | local.get×25879, i32.const×9902, i32.load×5634, local.set×4730, local.tee×4634 |
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
| 1953 | `(i32 i32) -> ()` | 110 | 38,693 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2543 | `(i32 i32) -> ()` | 397 | 142,149 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2812 | `(i32 i32 i32 i32) -> ()` | 137 | 30,438 | 13,878 | local.get×4157, i32.const×1460, local.tee×728, local.set×674, i32.load×609 |
| 2831 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 533,422 |
| `i32.const` | 223,594 |
| `local.tee` | 99,189 |
| `local.set` | 93,238 |
| `i32.load` | 93,207 |
| `i32.add` | 86,337 |
| `end` | 78,346 |
| `br_if` | 63,688 |
| `i32.store` | 46,089 |
| `block` | 36,898 |
| `i64.const` | 32,177 |
| `i64.store` | 31,285 |
| `if` | 29,858 |
| `call` | 28,802 |
| `i32.sub` | 24,377 |
| `i64.load` | 23,192 |
| `br` | 22,986 |
| `i32.eqz` | 19,297 |
| `select` | 16,817 |
| `i32.shl` | 16,316 |
| `i32.and` | 16,227 |
| `i32.ne` | 15,725 |
| `i32.load8_u` | 14,749 |
| `i32.eq` | 13,783 |
| `i32.store8` | 12,526 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,860/2,860 (degraded: 0)
