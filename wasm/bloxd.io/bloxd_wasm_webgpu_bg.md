# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `gw4e3a.937868ec` · analyzed 2026-11-27T02:11:39+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.b094ad5b4d802c8dcce0.wasm
> 5,162,719 bytes (4.9 MB) · sha256 `feb1e82520617426…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,163,087 → 5,162,719 bytes (-368)
- code bytes 4,073,527 → 4,073,529
- data bytes 1,043,096 → 1,042,710
- name-section module id `881bcbb741e8cb97.12347` → `1b7fd571c66fed14.12347` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/163 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,969 / 393 |
| Exports / imports | 163 / 394 |
| Code bytes (function bodies) | 4,073,529 (3.9 MB) |
| Total local variables | 31,171 |
| Instructions (scanable bodies) | 1,905,103 |
| Data segments / bytes | 3,545 / 1,042,710 |
| Element segments / entries | 1 / 839 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `1b7fd571c66fed14.12347` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,533 | 179 |
| 2 | import | 4,734 | 394 |
| 3 | function | 3,022 | 2969 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,305 | 163 |
| 9 | element | 1,685 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,078,948 | 2969 |
| 11 | data | 1,071,388 | 3545 |
| 0 | custom:name | 30 | — |

## Types

179 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `MeSD.PVry` | memory | `[128..14648]` |
| 0 | `MeSD.Q1CH` | func | `(i32) -> (i32)` |
| 1 | `MeSD.h1eB` | func | `(i32) -> (f64)` |
| 2 | `MeSD.mhcl` | func | `() -> (i32)` |
| 3 | `MeSD.hfDK` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `MeSD.r3K0` | func | `(i32) -> ()` |
| 5 | `MeSD.SSAR` | func | `(i32 i32) -> (i32)` |
| 6 | `MeSD.GGsJ` | func | `(i32) -> (i32)` |
| 7 | `MeSD.jkN4` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `MeSD.c1Gb` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `MeSD.qI3j` | func | `(i32) -> (i32)` |
| 10 | `MeSD.HgOj` | func | `(i32 i32) -> ()` |
| 11 | `MeSD.LsNa` | func | `(i32 i32) -> ()` |
| 12 | `MeSD.EUxe` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `MeSD.bQCw` | func | `(i32 i32) -> (i32)` |
| 14 | `MeSD.IfPw` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `MeSD.CnuK` | func | `(i32) -> (i32)` |
| 16 | `MeSD.SmIB` | func | `(i32 i32) -> (i32)` |
| 17 | `MeSD.WmGO` | func | `(i32 i32) -> (i32)` |
| 18 | `MeSD.mmp8` | func | `(i32 i32) -> ()` |
| 19 | `MeSD.EuG9` | func | `(i32) -> (i32)` |
| 20 | `MeSD.K2rf` | func | `(i32) -> (i32)` |
| 21 | `MeSD.q3Tc` | func | `(i32 i32 i32) -> ()` |
| 22 | `MeSD.aV5A` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `MeSD.Cril` | func | `(i32) -> (i32)` |
| 24 | `MeSD.l2oB` | func | `(i32) -> (i32)` |
| 25 | `MeSD.lSWy` | func | `(i32 i32) -> ()` |
| 26 | `MeSD.l04e` | func | `(i32 i32) -> (i32)` |
| 27 | `MeSD.A8xM` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `MeSD.dn1s` | func | `(i32) -> (i32)` |
| 29 | `MeSD.CeJw` | func | `(i32) -> (i32)` |
| 30 | `MeSD.PCRZ` | func | `(i32) -> (i32)` |
| 31 | `MeSD.jaD9` | func | `(i32) -> (i32)` |
| 32 | `MeSD.vYOE` | func | `(i32) -> (i32)` |
| 33 | `MeSD.qiog` | func | `(i32 i32 i32) -> ()` |
| 34 | `MeSD.b1Vg` | func | `(i32 i32) -> (i32)` |
| 35 | `MeSD.PzJM` | func | `(i32) -> (i32)` |
| 36 | `MeSD.MCZT` | func | `(i32) -> ()` |
| 37 | `MeSD.PXwV` | func | `(i32) -> (i32)` |
| 38 | `MeSD.WHSq` | func | `(i32) -> (i32)` |
| 39 | `MeSD.O6MH` | func | `(i32) -> ()` |
| 40 | `MeSD.X93x` | func | `(i32 i32) -> (i32)` |
| 41 | `MeSD.JGlr` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `MeSD.ANuA` | func | `(i32) -> ()` |
| 43 | `MeSD.Ci4D` | func | `(i32 i32) -> ()` |
| 44 | `MeSD.aapF` | func | `() -> (i32)` |
| 45 | `MeSD.M5BD` | func | `(i32 i32) -> (i32)` |
| 46 | `MeSD.ZGe8` | func | `(i32 i32) -> (i32)` |
| 47 | `MeSD.mKqK` | func | `(i32) -> (i32)` |
| 48 | `MeSD.NRP0` | func | `(i32) -> (i32)` |
| 49 | `MeSD.deUw` | func | `(i32) -> (i32)` |
| 50 | `MeSD.Z1Nv` | func | `(i32 i32) -> ()` |
| 51 | `MeSD.mmpD` | func | `(i32) -> (i32)` |
| 52 | `MeSD.QNWq` | func | `(i32) -> ()` |
| 53 | `MeSD.BC48` | func | `(i32 i32) -> (i32)` |
| 54 | `MeSD.FehG` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `MeSD.IWCS` | func | `(i32) -> (i32)` |
| 56 | `MeSD.dg8B` | func | `(i32 i32 i32) -> ()` |
| 57 | `MeSD.BYnW` | func | `(i32 i32) -> ()` |
| 58 | `MeSD.dlan` | func | `(i32) -> (i32)` |
| 59 | `MeSD.kYQZ` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `MeSD.gKCa` | func | `(i32) -> ()` |
| 61 | `MeSD.SyDu` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `MeSD.RfVR` | func | `(i32) -> ()` |
| 63 | `MeSD.tlsG` | func | `(i32 i32 i32) -> ()` |
| 64 | `MeSD.pfw7` | func | `(i32 i32) -> ()` |
| 65 | `MeSD.LvSQ` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `MeSD.AWbc` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `MeSD.upAb` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `MeSD.WcVg` | func | `(i32 i32 f64) -> ()` |
| 69 | `MeSD.AnFy` | func | `(i32) -> (i32)` |
| 70 | `MeSD.M8vr` | func | `(i32 i32) -> ()` |
| 71 | `MeSD.LuXT` | func | `(i32 i32 i32) -> ()` |
| 72 | `MeSD.SC7u` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `MeSD.m4Qp` | func | `(i32 i32 i32) -> ()` |
| 74 | `MeSD.e9bv` | func | `(i32) -> ()` |
| 75 | `MeSD.sC7L` | func | `(i32 i32) -> ()` |
| 76 | `MeSD.YK4t` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `MeSD.HsMP` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `MeSD.r6HQ` | func | `(i32 i32 i32) -> ()` |
| 79 | `MeSD.v3Yk` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `MeSD.MDMk` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `MeSD.rEPW` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `MeSD.euHT` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `MeSD.KjxV` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `MeSD.T8k6` | func | `(i32 i32 i32) -> ()` |
| 85 | `MeSD.RPZW` | func | `(i32 i32) -> (i32)` |
| 86 | `MeSD.vByV` | func | `(i32) -> (i32)` |
| 87 | `MeSD.uSWj` | func | `(i32) -> (i32)` |
| 88 | `MeSD.Mhzz` | func | `(i32) -> (i32)` |
| 89 | `MeSD.ZHxi` | func | `(i32 i32) -> (i32)` |
| 90 | `MeSD.el1a` | func | `(i32) -> ()` |
| 91 | `MeSD.ihoV` | func | `(i32) -> (i32)` |
| 92 | `MeSD.oe3n` | func | `(i32 i32) -> (i32)` |
| 93 | `MeSD.k1h6` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `MeSD.tE7P` | func | `(i32 i32 i32) -> ()` |
| 95 | `MeSD.hZay` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `MeSD.ZLc5` | func | `() -> (f64)` |
| 97 | `MeSD.WnaH` | func | `() -> (f64)` |
| 98 | `MeSD.en4Y` | func | `(i32 i32) -> ()` |
| 99 | `MeSD.oy0f` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `MeSD.HMdz` | func | `(i32) -> (i32)` |
| 101 | `MeSD.qchQ` | func | `(i32) -> (i32)` |
| 102 | `MeSD.TkWn` | func | `(i32) -> (i32)` |
| 103 | `MeSD.Ey4x` | func | `() -> (i32)` |
| 104 | `MeSD.uP9V` | func | `() -> (i32)` |
| 105 | `MeSD.n7YA` | func | `() -> (i32)` |
| 106 | `MeSD.AZ7K` | func | `() -> (i32)` |
| 107 | `MeSD.baSQ` | func | `(i32 i32) -> (i32)` |
| 108 | `MeSD.GAuM` | func | `(i32) -> ()` |
| 109 | `MeSD.AyEs` | func | `(i32 i32) -> (i32)` |
| 110 | `MeSD.osp8` | func | `(i32) -> (i32)` |
| 111 | `MeSD.hq7x` | func | `() -> (f64)` |
| 112 | `MeSD.CDts` | func | `(i32) -> (i32)` |
| 113 | `MeSD.Dmiv` | func | `(i32 i32) -> ()` |
| 114 | `MeSD.Q8iy` | func | `(i32 i32) -> ()` |
| 115 | `MeSD.iX1v` | func | `(i32 i32) -> ()` |
| 116 | `MeSD.V1MH` | func | `(i32 f32) -> ()` |
| 117 | `MeSD.xSVW` | func | `(i32 f32) -> ()` |
| 118 | `MeSD.YRvs` | func | `(i32 i32) -> ()` |
| 119 | `MeSD.wrMV` | func | `(i32 i32) -> ()` |
| 120 | `MeSD.QLJv` | func | `(i32 i32) -> ()` |
| 121 | `MeSD.uXl3` | func | `(i32 i32) -> ()` |
| 122 | `MeSD.wzrw` | func | `(i32 i32 i32) -> ()` |
| 123 | `MeSD.sS3E` | func | `(i32 i32) -> (i32)` |
| 124 | `MeSD.DjZl` | func | `(i32 i32) -> ()` |
| 125 | `MeSD.xUAM` | func | `(i32 i32) -> ()` |
| 126 | `MeSD.Xgyj` | func | `(i32 i32) -> ()` |
| 127 | `MeSD.GEqy` | func | `(i32 i32) -> ()` |
| 128 | `MeSD.RvwM` | func | `(i32 f64) -> ()` |
| 129 | `MeSD.Cn26` | func | `(i32 f64) -> ()` |
| 130 | `MeSD.yjwr` | func | `(i32 i32) -> ()` |
| 131 | `MeSD.vn2A` | func | `(i32 i32 i32) -> ()` |
| 132 | `MeSD.Rpg9` | func | `(i32 i32) -> ()` |
| 133 | `MeSD.MYbG` | func | `(i32 i32) -> (i32)` |
| 134 | `MeSD.U4VA` | func | `(i32 i32 i32) -> ()` |
| 135 | `MeSD.uguy` | func | `(i32 i32 i32) -> ()` |
| 136 | `MeSD.kt03` | func | `(i32 i32) -> (i32)` |
| 137 | `MeSD.oIBZ` | func | `(i32 i32) -> (i32)` |
| 138 | `MeSD.OQ1f` | func | `(i32 i32 i32) -> ()` |
| 139 | `MeSD.avz1` | func | `(i32 i32 i32) -> ()` |
| 140 | `MeSD.Sh9G` | func | `(i32 i32) -> (i32)` |
| 141 | `MeSD.hp1T` | func | `(i32 i32) -> ()` |
| 142 | `MeSD.iETC` | func | `(i32 i32) -> ()` |
| 143 | `MeSD.IgiP` | func | `(i32 i32) -> ()` |
| 144 | `MeSD.FvG9` | func | `(i32 i32) -> ()` |
| 145 | `MeSD.k0yL` | func | `(i32 i32) -> ()` |
| 146 | `MeSD.dMA4` | func | `(i32 i32) -> ()` |
| 147 | `MeSD.x1On` | func | `(i32 i32) -> ()` |
| 148 | `MeSD.xaro` | func | `(i32 f64) -> ()` |
| 149 | `MeSD.POPa` | func | `(i32 i32) -> ()` |
| 150 | `MeSD.zwL4` | func | `(i32 i32) -> ()` |
| 151 | `MeSD.U0fx` | func | `(i32 i32) -> ()` |
| 152 | `MeSD.Qr3O` | func | `(i32 i32) -> ()` |
| 153 | `MeSD.KOv1` | func | `(i32 i32) -> ()` |
| 154 | `MeSD.c1ct` | func | `(i32 i32) -> ()` |
| 155 | `MeSD.fcKC` | func | `(i32 i32) -> ()` |
| 156 | `MeSD.bzz4` | func | `(i32 i32) -> ()` |
| 157 | `MeSD.VJU0` | func | `(i32 i32) -> ()` |
| 158 | `MeSD.Iy3A` | func | `(i32 i32 i32) -> ()` |
| 159 | `MeSD.NYmf` | func | `(i32 i32 i32) -> ()` |
| 160 | `MeSD.UxZj` | func | `(i32 i32) -> (i32)` |
| 161 | `MeSD.oxsk` | func | `(i32 i32) -> (i32)` |
| 162 | `MeSD.Jn61` | func | `(i32 i32) -> ()` |
| 163 | `MeSD.p230` | func | `(i32 i32) -> ()` |
| 164 | `MeSD.Cb9Z` | func | `(i32 f64) -> ()` |
| 165 | `MeSD.pEF2` | func | `(i32 i32) -> ()` |
| 166 | `MeSD.h4vH` | func | `(i32 i32) -> ()` |
| 167 | `MeSD.txbQ` | func | `(i32 i32) -> ()` |
| 168 | `MeSD.oKwE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `MeSD.Zpe3` | func | `(i32 f64) -> ()` |
| 170 | `MeSD.P69z` | func | `(i32 f64) -> ()` |
| 171 | `MeSD.MVVg` | func | `(i32 f64) -> ()` |
| 172 | `MeSD.N8wI` | func | `(i32 f64) -> ()` |
| 173 | `MeSD.GK6d` | func | `(i32 i32) -> ()` |
| 174 | `MeSD.ks0j` | func | `(i32 i32) -> ()` |
| 175 | `MeSD.Kemr` | func | `(i32 i32) -> ()` |
| 176 | `MeSD.ZD4g` | func | `(i32 i32) -> ()` |
| 177 | `MeSD.a5is` | func | `(i32 i32) -> ()` |
| 178 | `MeSD.nezA` | func | `(i32 i32 i32) -> ()` |
| 179 | `MeSD.Kvaw` | func | `(i32 i32) -> ()` |
| 180 | `MeSD.M9MF` | func | `(i32 f32) -> ()` |
| 181 | `MeSD.FdJL` | func | `(i32 i32) -> ()` |
| 182 | `MeSD.AgAg` | func | `(i32 i32) -> ()` |
| 183 | `MeSD.jQRF` | func | `(i32 i32) -> ()` |
| 184 | `MeSD.HKOd` | func | `(i32 i32) -> ()` |
| 185 | `MeSD.Kxyb` | func | `(i32 i32) -> ()` |
| 186 | `MeSD.W0pj` | func | `(i32 i32) -> ()` |
| 187 | `MeSD.ADyO` | func | `(i32 i32) -> ()` |
| 188 | `MeSD.pLJ0` | func | `(i32 i32) -> ()` |
| 189 | `MeSD.K0P4` | func | `(i32 i32) -> ()` |
| 190 | `MeSD.DnPH` | func | `(i32 i32) -> ()` |
| 191 | `MeSD.ZI4T` | func | `(i32 i32) -> ()` |
| 192 | `MeSD.NJFk` | func | `(i32 i32) -> ()` |
| 193 | `MeSD.XyJJ` | func | `(i32 i32) -> (i32)` |
| 194 | `MeSD.dYOs` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `MeSD.G3oh` | func | `(i32 i32) -> ()` |
| 196 | `MeSD.m0vY` | func | `(i32 i32 i32) -> ()` |
| 197 | `MeSD.QJJ1` | func | `(i32 i32) -> (i32)` |
| 198 | `MeSD.eWF1` | func | `(i32) -> (i32)` |
| 199 | `MeSD.gIq5` | func | `(i32 i32) -> ()` |
| 200 | `MeSD.Thwm` | func | `(i32 i32) -> ()` |
| 201 | `MeSD.ONYX` | func | `(i32 i32) -> ()` |
| 202 | `MeSD.wlPF` | func | `(i32 i32) -> ()` |
| 203 | `MeSD.wiIY` | func | `(i32 i32) -> ()` |
| 204 | `MeSD.cxkR` | func | `(i32 i32) -> ()` |
| 205 | `MeSD.lZgS` | func | `(i32 i32) -> ()` |
| 206 | `MeSD.POZD` | func | `(i32 i32) -> ()` |
| 207 | `MeSD.wqNG` | func | `(i32) -> (i32)` |
| 208 | `MeSD.zr7c` | func | `(i32 i32 i32) -> ()` |
| 209 | `MeSD.pbGk` | func | `(i32 i32) -> ()` |
| 210 | `MeSD.w8oA` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `MeSD.ZboJ` | func | `(i32 i32) -> ()` |
| 212 | `MeSD.qoRu` | func | `(i32) -> ()` |
| 213 | `MeSD.Q2MJ` | func | `(i32 i32) -> ()` |
| 214 | `MeSD.iAy4` | func | `(i32) -> (i32)` |
| 215 | `MeSD.BRii` | func | `(i32 i32 i32) -> ()` |
| 216 | `MeSD.ij7T` | func | `(i32 i32) -> ()` |
| 217 | `MeSD.kLBf` | func | `(i32 i32) -> ()` |
| 218 | `MeSD.CrHo` | func | `(i32 i32) -> ()` |
| 219 | `MeSD.HaFF` | func | `(i32 i32) -> ()` |
| 220 | `MeSD.aCYN` | func | `(i32 i32) -> (i32)` |
| 221 | `MeSD.nxlw` | func | `(i32 i32) -> ()` |
| 222 | `MeSD.CSgd` | func | `(i32 i32) -> ()` |
| 223 | `MeSD.TK2l` | func | `(i32 i32) -> ()` |
| 224 | `MeSD.HBoO` | func | `(i32 i32) -> ()` |
| 225 | `MeSD.QZyT` | func | `(i32 i32) -> ()` |
| 226 | `MeSD.CS9U` | func | `(i32 i32) -> ()` |
| 227 | `MeSD.UAyZ` | func | `(i32 i32) -> ()` |
| 228 | `MeSD.h6i4` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `MeSD.dQog` | func | `(i32) -> (i32)` |
| 230 | `MeSD.wMB2` | func | `(i32) -> ()` |
| 231 | `MeSD.phS2` | func | `(i32 f64) -> ()` |
| 232 | `MeSD.AoPJ` | func | `(i32 i32) -> ()` |
| 233 | `MeSD.Sn9I` | func | `(i32 i32) -> ()` |
| 234 | `MeSD.Vnut` | func | `(i32 i32 i32) -> ()` |
| 235 | `MeSD.HIFJ` | func | `(i32 i32) -> (i32)` |
| 236 | `MeSD.MiWm` | func | `(i32 i32) -> ()` |
| 237 | `MeSD.KrrD` | func | `(i32 i32) -> ()` |
| 238 | `MeSD.Hfpo` | func | `(i32 i32) -> ()` |
| 239 | `MeSD.VgP9` | func | `(i32 i32 i32) -> ()` |
| 240 | `MeSD.jmOp` | func | `(i32 i32) -> ()` |
| 241 | `MeSD.MpwR` | func | `(i32 i32) -> ()` |
| 242 | `MeSD.JZsb` | func | `(i32 i32) -> ()` |
| 243 | `MeSD.H0Pb` | func | `(i32 i32 i32) -> ()` |
| 244 | `MeSD.LfnF` | func | `(i32 i32) -> ()` |
| 245 | `MeSD.pIoQ` | func | `(i32 i32) -> ()` |
| 246 | `MeSD.SONV` | func | `(i32 i32 i32) -> ()` |
| 247 | `MeSD.NBLQ` | func | `(i32 i32) -> (i32)` |
| 248 | `MeSD.l1r0` | func | `(i32 i32) -> ()` |
| 249 | `MeSD.OqwI` | func | `(i32 i32 i32) -> ()` |
| 250 | `MeSD.pYbt` | func | `(i32 i32) -> ()` |
| 251 | `MeSD.CpX9` | func | `(i32 f64) -> ()` |
| 252 | `MeSD.CuES` | func | `(i32 i32) -> ()` |
| 253 | `MeSD.qYVC` | func | `(i32 f64) -> ()` |
| 254 | `MeSD.j8Ic` | func | `(i32 i32 i32) -> ()` |
| 255 | `MeSD.SgfD` | func | `(i32 i32) -> ()` |
| 256 | `MeSD.O6TE` | func | `(i32 i32 i32) -> ()` |
| 257 | `MeSD.d41K` | func | `(i32 i32) -> ()` |
| 258 | `MeSD.C1LS` | func | `(i32 i32) -> ()` |
| 259 | `MeSD.DjA4` | func | `(i32 i32) -> ()` |
| 260 | `MeSD.NPNH` | func | `(i32 i32 i32) -> ()` |
| 261 | `MeSD.YWx5` | func | `(i32 i32) -> ()` |
| 262 | `MeSD.hRZx` | func | `(i32 i32) -> ()` |
| 263 | `MeSD.mEAH` | func | `(i32 i32) -> ()` |
| 264 | `MeSD.fJEZ` | func | `(i32 i32) -> ()` |
| 265 | `MeSD.tBe8` | func | `(i32 f32) -> ()` |
| 266 | `MeSD.VdJp` | func | `(i32 f32) -> ()` |
| 267 | `MeSD.Nxl1` | func | `(i32 i32) -> ()` |
| 268 | `MeSD.CT0G` | func | `(i32 i32) -> ()` |
| 269 | `MeSD.V7NK` | func | `(i32 i32) -> ()` |
| 270 | `MeSD.m44m` | func | `(i32 i32) -> ()` |
| 271 | `MeSD.BR0J` | func | `(i32 i32) -> ()` |
| 272 | `MeSD.nuf9` | func | `(i32 i32) -> ()` |
| 273 | `MeSD.Ij5X` | func | `(i32 i32) -> ()` |
| 274 | `MeSD.jgnJ` | func | `(i32 i32) -> ()` |
| 275 | `MeSD.XCJS` | func | `(i32 i32) -> ()` |
| 276 | `MeSD.E6Fx` | func | `(i32 i32) -> ()` |
| 277 | `MeSD.rQcR` | func | `(i32 i32) -> ()` |
| 278 | `MeSD.MaLC` | func | `(i32 i32) -> ()` |
| 279 | `MeSD.ynVs` | func | `(i32 i32) -> ()` |
| 280 | `MeSD.lWsG` | func | `(i32 i32) -> ()` |
| 281 | `MeSD.z8Kc` | func | `(i32 i32) -> ()` |
| 282 | `MeSD.e8KN` | func | `(i32 i32) -> ()` |
| 283 | `MeSD.QEI0` | func | `(i32 i32) -> ()` |
| 284 | `MeSD.V43i` | func | `(i32 i32) -> ()` |
| 285 | `MeSD.cilx` | func | `(i32 i32 i32) -> ()` |
| 286 | `MeSD.CV9u` | func | `(i32 i32 i32) -> ()` |
| 287 | `MeSD.E1tH` | func | `(i32 i32) -> ()` |
| 288 | `MeSD.lz80` | func | `(i32 i32) -> ()` |
| 289 | `MeSD.gs9B` | func | `(i32 i32) -> ()` |
| 290 | `MeSD.Qqcb` | func | `(i32 i32) -> ()` |
| 291 | `MeSD.AQwv` | func | `(i32 i32) -> ()` |
| 292 | `MeSD.Zhb1` | func | `(i32 i32) -> ()` |
| 293 | `MeSD.RURU` | func | `(i32 i32) -> ()` |
| 294 | `MeSD.QFfg` | func | `(i32 i32) -> ()` |
| 295 | `MeSD.pCkg` | func | `(i32 i32) -> ()` |
| 296 | `MeSD.Bsxx` | func | `(i32 i32) -> ()` |
| 297 | `MeSD.RKIs` | func | `(i32 i32) -> ()` |
| 298 | `MeSD.WKQj` | func | `(i32 i32) -> (i32)` |
| 299 | `MeSD.qqO5` | func | `(i32 i32) -> ()` |
| 300 | `MeSD.TiXG` | func | `(i32 i32 i32) -> ()` |
| 301 | `MeSD.DhUE` | func | `(i32 i32) -> ()` |
| 302 | `MeSD.iJK7` | func | `(i32 i32) -> ()` |
| 303 | `MeSD.eoFq` | func | `(i32 i32) -> ()` |
| 304 | `MeSD.tWGB` | func | `(i32 i32 i32) -> ()` |
| 305 | `MeSD.Z5iW` | func | `(i32 i32) -> (i32)` |
| 306 | `MeSD.agkZ` | func | `(i32 i32 i32) -> ()` |
| 307 | `MeSD.utul` | func | `(i32 i32 i32) -> ()` |
| 308 | `MeSD.ynHY` | func | `(i32 i32) -> ()` |
| 309 | `MeSD.mJkF` | func | `(i32 i32) -> ()` |
| 310 | `MeSD.MYvS` | func | `(i32 i32) -> ()` |
| 311 | `MeSD.rEwf` | func | `(i32 i32) -> ()` |
| 312 | `MeSD.VbOA` | func | `(i32 i32) -> (i32)` |
| 313 | `MeSD.cRWw` | func | `(i32) -> (i32)` |
| 314 | `MeSD.ZCUr` | func | `(i32) -> (i32)` |
| 315 | `MeSD.HVLd` | func | `(i32) -> (i32)` |
| 316 | `MeSD.YOhn` | func | `(i32) -> (i32)` |
| 317 | `MeSD.kL83` | func | `(i32) -> (i32)` |
| 318 | `MeSD.zQVh` | func | `(i32) -> (i32)` |
| 319 | `MeSD.TD8K` | func | `(i32) -> (i32)` |
| 320 | `MeSD.ogQp` | func | `(i32) -> (i32)` |
| 321 | `MeSD.QWGv` | func | `(i32) -> (i32)` |
| 322 | `MeSD.TSyN` | func | `(i32) -> (i32)` |
| 323 | `MeSD.OzQI` | func | `(i32) -> (i32)` |
| 324 | `MeSD.lNPs` | func | `(i32) -> (i32)` |
| 325 | `MeSD.zDTG` | func | `(i32) -> (i32)` |
| 326 | `MeSD.OZqo` | func | `(i32) -> (i32)` |
| 327 | `MeSD.hei4` | func | `(i32) -> (f64)` |
| 328 | `MeSD.r11D` | func | `(i32) -> (f64)` |
| 329 | `MeSD.TBMD` | func | `(i32) -> (i32)` |
| 330 | `MeSD.SdjK` | func | `(i32) -> (f64)` |
| 331 | `MeSD.M80w` | func | `(i32) -> (i32)` |
| 332 | `MeSD.WWuU` | func | `(i32) -> (i32)` |
| 333 | `MeSD.TssO` | func | `(i32) -> (i32)` |
| 334 | `MeSD.H2L5` | func | `(i32) -> (i32)` |
| 335 | `MeSD.B2An` | func | `(i32) -> (i32)` |
| 336 | `MeSD.WUI0` | func | `(i32) -> (i32)` |
| 337 | `MeSD.PUzz` | func | `(i32) -> (i32)` |
| 338 | `MeSD.dMbL` | func | `(i32) -> (i32)` |
| 339 | `MeSD.fOcv` | func | `(i32) -> (i32)` |
| 340 | `MeSD.qrU4` | func | `(i32) -> (i32)` |
| 341 | `MeSD.AJq4` | func | `(i32) -> (i32)` |
| 342 | `MeSD.TotJ` | func | `(i32) -> (i32)` |
| 343 | `MeSD.hIIR` | func | `(i32) -> (i32)` |
| 344 | `MeSD.t21M` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `MeSD.koEL` | func | `() -> (i32)` |
| 346 | `MeSD.BaeE` | func | `(i32 i32) -> ()` |
| 347 | `MeSD.TzWv` | func | `(i32 i32 i32) -> ()` |
| 348 | `MeSD.dqa6` | func | `(i32 i32 i32) -> ()` |
| 349 | `MeSD.bOsU` | func | `(i32 i32) -> (i32)` |
| 350 | `MeSD.rx0t` | func | `(i32) -> (i32)` |
| 351 | `MeSD.cdpo` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `MeSD.Shot` | func | `(i32) -> ()` |
| 353 | `MeSD.bBq7` | func | `(i32) -> (i32)` |
| 354 | `MeSD.Z7Kg` | func | `(i32 i32) -> ()` |
| 355 | `MeSD.IWNw` | func | `(i32) -> (i32)` |
| 356 | `MeSD.tUNG` | func | `(i32) -> (i32)` |
| 357 | `MeSD.q4Wj` | func | `(i32) -> (i32)` |
| 358 | `MeSD.KMVV` | func | `(i32) -> (i32)` |
| 359 | `MeSD.r6Zd` | func | `(i32) -> (i32)` |
| 360 | `MeSD.IZpd` | func | `(i32 i32) -> ()` |
| 361 | `MeSD.jF9v` | func | `(i32 i32) -> ()` |
| 362 | `MeSD.DqSG` | func | `(i32 i32) -> ()` |
| 363 | `MeSD.NsAB` | func | `(i32 i32) -> ()` |
| 364 | `MeSD.q0tg` | func | `(i32 i32) -> ()` |
| 365 | `MeSD.TRqP` | func | `(i32 i32) -> ()` |
| 366 | `MeSD.Gu2p` | func | `(i32 i32) -> ()` |
| 367 | `MeSD.hrlp` | func | `(i32 i32 i32) -> ()` |
| 368 | `MeSD.JxHL` | func | `(i32 i32) -> ()` |
| 369 | `MeSD.hpHG` | func | `(i32 i32) -> (i32)` |
| 370 | `MeSD.IWiV` | func | `(i32) -> (i32)` |
| 371 | `MeSD.BMNd` | func | `(i32) -> (i32)` |
| 372 | `MeSD.y9oz` | func | `(i32 i32) -> ()` |
| 373 | `MeSD.q4A2` | func | `(i32) -> (i32)` |
| 374 | `MeSD.QUKz` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `MeSD.ycS2` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `MeSD.cnu7` | func | `(i32 i32) -> ()` |
| 377 | `MeSD.vqKG` | func | `(i32) -> (i32)` |
| 378 | `MeSD.rYNr` | func | `(i32) -> (i32)` |
| 379 | `MeSD.KRk0` | func | `(i32) -> (i32)` |
| 380 | `MeSD.HSeG` | func | `(i32) -> (i32)` |
| 381 | `MeSD.VXL7` | func | `(i32) -> (i32)` |
| 382 | `MeSD.lWOf` | func | `(i32) -> (i32)` |
| 383 | `MeSD.VUtz` | func | `(i32 i32) -> ()` |
| 384 | `MeSD.AJL8` | func | `(i32 i32) -> (i32)` |
| 385 | `MeSD.w718` | func | `(i32 i32) -> (i32)` |
| 386 | `MeSD.nYKj` | func | `(i32 i32) -> (i32)` |
| 387 | `MeSD.Y2YH` | func | `(i32 i32) -> (i32)` |
| 388 | `MeSD.A2hn` | func | `(i32 i32) -> (i32)` |
| 389 | `MeSD.BfGC` | func | `(i32 i32) -> (i32)` |
| 390 | `MeSD.XwRd` | func | `(f64) -> (i32)` |
| 391 | `MeSD.Bbt3` | func | `(i32 i32) -> (i32)` |
| 392 | `MeSD.ZBVy` | func | `(i32 i32) -> (i32)` |

## Exports

163 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `qpDy` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `iXVG` | func | 3114 | `(i32 i32) -> ()` |
| `Lsej` | func | 2150 | `(i32 i32) -> ()` |
| `yWZx` | func | 2359 | `(i32 f64) -> (i32)` |
| `an3I` | func | 1350 | `(i32 i32 i32) -> (i32)` |
| `v9gU` | func | 802 | `(i32 i32) -> (i32)` |
| `sPIU` | func | 3081 | `() -> ()` |
| `Hqs6` | func | 3169 | `() -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `qgTT` | func | 1302 | `(i32 i32 i32 i32) -> (i32)` |
| `QxV7` | func | 1375 | `(i32) -> (i32)` |
| `DCIP` | func | 3234 | `() -> (i32)` |
| `NtC8` | func | 1733 | `(i32 i32 i32 i32) -> (i32)` |
| `gE2R` | func | 2247 | `(i32 i32) -> (i32)` |
| `pXWV` | func | 1555 | `(i32 i32 i32 i32) -> ()` |
| `hQKq` | func | 1205 | `(i32 i32) -> (i32)` |
| `iIAP` | func | 1575 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `V86r` | func | 3348 | `() -> (i32)` |
| `sg7h` | func | 1262 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `yuJE` | func | 975 | `(i32 i32) -> (i32)` |
| `TGEV` | func | 1602 | `(i32 i32) -> (i32)` |
| `dUHb` | func | 2892 | `(i32) -> (i32)` |
| `sVxV` | func | 1382 | `(i32 i32) -> (i32)` |
| `a0iv` | func | 2174 | `(i32 i32) -> (i32)` |
| `gbfM` | func | 3275 | `() -> ()` |
| `UvIH` | func | 853 | `(i32 i32 i32) -> (i32)` |
| `F8z2` | func | 3155 | `(i32) -> (i32 i32)` |
| `tLn6` | func | 2602 | `(i32) -> (i32)` |
| `f5fR` | func | 2611 | `(i32 i32) -> (i32)` |
| `G5Rl` | func | 1650 | `(i32 i32 i32 i32) -> (i32)` |
| `oTsN` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `tt9B` | func | 1354 | `(i32 i32 i32) -> ()` |
| `cMVI` | func | 1838 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NKEx` | func | 3144 | `(i32 i32) -> (i32 i32)` |
| `Unsl` | func | 3349 | `() -> (i32)` |
| `qi7L` | func | 2601 | `(i32) -> (i32)` |
| `UVLc` | func | 2091 | `(i32 i32) -> ()` |
| `uWPG` | func | 2582 | `(i32) -> (i32)` |
| `AORk` | func | 2285 | `(i32 i32) -> (i32)` |
| `pLdu` | func | 992 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `xdIz` | func | 2668 | `() -> (i32)` |
| `z5xu` | func | 2650 | `(i32 i32) -> ()` |
| `gPnA` | func | 3108 | `(i32 i32 i32 i32) -> (i32)` |
| `RI7r` | func | 832 | `(i32 i32 i32 i32) -> (i32)` |
| `paOc` | func | 1797 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `Y6wo` | func | 3154 | `(i32) -> (i32 i32)` |
| `nrdK` | func | 2385 | `(i32 i32) -> ()` |
| `HvRx` | func | 662 | `(i32 i32 i32) -> (i32)` |
| `OTKS` | func | 2056 | `(i32) -> (i32)` |
| `JkCN` | func | 762 | `(i32 i32) -> (i32)` |
| `Okms` | func | 1691 | `(i32 i32) -> ()` |
| `UWIK` | func | 778 | `(i32 i32) -> (i32)` |
| `nlfe` | func | 1844 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `yQTz` | func | 3195 | `(i32 i32 i32 i32) -> ()` |
| `qn0k` | func | 3206 | `(i32 i32 i32) -> ()` |
| `lwli` | func | 2584 | `(i32) -> (i32)` |
| `Rl4o` | func | 2588 | `(i32) -> (i32)` |
| `VMub` | func | 705 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Urho` | func | 2439 | `(i32 i32) -> (i32)` |
| `pFbj` | func | 2564 | `(i32) -> (i32)` |
| `sApG` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `xWQt` | func | 1962 | `(i32 i32 f64 f64 f64) -> ()` |
| `THVV` | func | 3170 | `() -> (i32 i32)` |
| `qCYw` | func | 2473 | `(i32 i32) -> (i32)` |
| `YGju` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `Y8if` | func | 1309 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `DYwj` | func | 2488 | `(i32 i32 i32 i32) -> (i32)` |
| `EM3c` | func | 1993 | `(i32) -> ()` |
| `Gxll` | global | 1 | `` |
| `Ojhd` | func | 2884 | `(i32) -> (i32)` |
| `XCYs` | func | 3344 | `(f64) -> (f64)` |
| `dCV4` | func | 2619 | `(i32) -> (i32)` |
| `DbGb` | func | 1924 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `s9EI` | func | 2953 | `(i32) -> (i32)` |
| `VoAs` | func | 1476 | `(i32 f64 f64) -> (i32)` |
| `wVJS` | func | 2585 | `(i32) -> ()` |
| `GfD8` | func | 2515 | `(i32) -> (i32)` |
| `LOrl` | func | 1528 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `ZHV0` | func | 3152 | `(i32) -> (i32 i32)` |
| `sKLE` | func | 3143 | `(i32 i32) -> (i32 i32)` |
| `fUdl` | func | 1857 | `(i32 i32) -> (i32)` |
| `sDCN` | func | 1690 | `(i32 i32) -> ()` |
| `LDYx` | func | 1408 | `(i32) -> ()` |
| `w6XP` | func | 2587 | `(i32) -> (i32)` |
| `w0jz` | func | 1004 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `rMu3` | func | 1533 | `() -> (i32)` |
| `RKbR` | func | 1618 | `(i32 f64) -> (f64)` |
| `Sdof` | func | 1580 | `(i32 i32 i32 i32) -> (i32)` |
| `f10K` | func | 1615 | `(i32 i32) -> (i32)` |
| `PtcQ` | func | 1616 | `(i32 i32) -> (i32)` |
| `HkSZ` | func | 2039 | `(i32) -> (i32)` |
| `be3G` | func | 2058 | `(i32 i32 i32 i32) -> ()` |
| `Yk7b` | func | 2597 | `(i32 i32) -> ()` |
| `HlcX` | global | 2 | `` |
| `BmrN` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `vcMB` | func | 3204 | `(i32 i32 i32) -> (i32)` |
| `wAxj` | func | 2358 | `(i32 i32) -> ()` |
| `sxpo` | func | 772 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `w9QQ` | func | 2919 | `(i32) -> (i32)` |
| `lqgk` | func | 3324 | `(i32) -> ()` |
| `MhGt` | func | 3153 | `(i32) -> (i32 i32)` |
| `b3kG` | func | 3140 | `(i32 i32) -> (i32 i32)` |
| `N2Au` | func | 2437 | `(i32 i32) -> (i32)` |
| `WtLR` | func | 2604 | `(i32) -> (i32)` |
| `c880` | func | 940 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Mfvq` | func | 2701 | `(i32 i32) -> ()` |
| `cU4A` | func | 2586 | `(i32) -> (i32)` |
| `Cpz0` | func | 3319 | `() -> (f64)` |
| `RTRo` | func | 3101 | `(i32 i32) -> (i32)` |
| `EBV1` | func | 3145 | `(i32 i32) -> (i32 i32)` |
| `k7vO` | func | 1206 | `(i32 i32) -> ()` |
| `sEYs` | func | 3141 | `(i32 i32) -> (i32 i32)` |
| `VYQi` | func | 2563 | `(i32 i32) -> ()` |
| `In5T` | func | 2580 | `(i32) -> (i32)` |
| `yG9E` | func | 2483 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `WLca` | func | 1331 | `(i32 i32) -> (i32)` |
| `MlgZ` | func | 2702 | `() -> (i32)` |
| `MSBs` | func | 1679 | `(i32 i32) -> (i32)` |
| `oiAP` | func | 3264 | `(i32 i32 i32) -> ()` |
| `MFXF` | func | 2581 | `(i32) -> (i32)` |
| `IY1q` | func | 2578 | `(i32) -> (f64)` |
| `Outm` | func | 3323 | `(i32) -> (i32)` |
| `ZWeQ` | func | 2579 | `(i32) -> (i32)` |
| `wHpz` | func | 1581 | `(i32) -> (i32)` |
| `UyvK` | func | 2610 | `(i32) -> (i32)` |
| `RfFH` | func | 1570 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `MnC4` | func | 836 | `(i32) -> (i32)` |
| `yngo` | func | 2134 | `(i32 f64 f64 f64) -> (i32)` |
| `oSMy` | func | 2612 | `(i32 i32) -> (i32)` |
| `CZNA` | func | 3142 | `(i32 i32) -> (i32 i32)` |
| `Ic2f` | func | 3168 | `() -> (i32 i32)` |
| `o4Js` | func | 1425 | `(i32 i32 i32) -> (i32)` |
| `Vg0i` | func | 2440 | `(i32 i32) -> (i32)` |
| `HThW` | func | 2603 | `(i32 i32) -> ()` |
| `o6C6` | func | 2532 | `(i32) -> (i32)` |
| `oTYo` | func | 1588 | `(i32 i32) -> (i32)` |
| `Myws` | func | 1917 | `() -> (i32)` |
| `LYPc` | func | 2620 | `(i32) -> (i32)` |
| `TspS` | func | 1301 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `BieO` | func | 2930 | `(i32) -> ()` |
| `LHzM` | func | 1412 | `(i32 i32) -> (i32)` |
| `id00` | func | 3156 | `(i32) -> (i32 i32)` |
| `VQ9P` | func | 1940 | `(i32 i32 i32 i32) -> (i32)` |
| `KpPT` | func | 2908 | `(i32) -> (i32)` |
| `YVVL` | func | 1695 | `(i32 f64 f64 f64) -> (i32)` |
| `HOOh` | func | 1968 | `(i32 i32) -> ()` |
| `m58p` | func | 2438 | `(i32 i32) -> (i32)` |
| `NzcP` | func | 839 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `ZQCB` | func | 1978 | `(i32 i32) -> (i32)` |
| `Tb1Q` | func | 2306 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `lAaS` | func | 1629 | `(i32 i32 i32) -> (i32)` |
| `eNcb` | func | 3273 | `(i32) -> ()` |
| `vFiA` | func | 974 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `gcHc` | func | 1475 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `wmSI` | func | 2621 | `(i32) -> (i32)` |
| `UPFf` | func | 3139 | `(i32 i32) -> (i32 i32)` |
| `numv` | func | 1994 | `(i32) -> ()` |
| `PoqW` | func | 2583 | `(i32) -> (i32)` |
| `fl9S` | func | 1536 | `(i32) -> (i32)` |
| `x21A` | func | 2117 | `(i32 f64) -> (i32)` |
| `cWrE` | func | 1985 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `O9zD` | func | 1501 | `(i32 i32) -> (i32)` |
| `xOHx` | func | 1820 | `(i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 840 · max 840
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2251264, `i32` = i32.const 2251828

## Functions

- 2,969 bodies · 4,073,529 code bytes · avg 1.3 KB
- instruction scan: 2,969 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 172 |
| <= 64 bytes | 114 |
| <= 128 bytes | 274 |
| <= 256 bytes | 390 |
| <= 512 bytes | 674 |
| <= 1024 bytes | 594 |
| <= 2048 bytes | 418 |
| <= 4096 bytes | 177 |
| <= 8192 bytes | 93 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 36 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,777 | 91,008 | local.get×26752, i32.const×10169, i32.load×5791, local.set×4887, local.tee×4766 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 150 | 122,738 | 58,940 | local.get×16686, i32.const×7065, i32.add×3411, local.set×3377, i32.load×3107 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,262 | 25,609 | local.get×7565, i32.const×3392, local.set×1402, i32.add×1294, i32.load×1168 |
| 3 | `(i32 i32) -> ()` | 105 | 36,607 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,462 | 14,007 | local.get×4107, i32.const×1883, i32.load×880, i32.add×647, local.set×620 |
| 5 | `(i32 i32) -> ()` | 58 | 29,792 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 6 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,392 | 12,764 | local.get×3784, i32.const×1615, local.set×985, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32 i32 i32) -> ()` | 177 | 20,026 | 9,398 | local.get×2934, i32.const×1038, local.set×621, i32.add×458, i32.load×421 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 17 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 105 | 20,468 | 7,839 | local.get×2940, i32.const×890, i64.store×834, i32.store×615, i64.const×478 |
| 21 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,318 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,818 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 44 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,436 | 12,890 | local.get×3670, i32.const×1868, i32.add×766, local.set×697, end×577 |
| 66 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 194 | `(i32 i32) -> ()` | 10 | 27,551 | 13,273 | local.get×4670, i32.load×1257, i32.const×1060, end×827, i32.add×762 |
| 214 | `(i32) -> ()` | 19 | 23,258 | 10,909 | local.get×2733, i32.load×1495, i32.const×1187, local.tee×1011, end×855 |
| 712 | `(i32 i32) -> ()` | 139 | 42,973 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 713 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1017 | `(i32 i32) -> (i32)` | 40 | 19,972 | 7,775 | local.get×2507, i32.const×849, i64.store×583, i32.load×394, local.set×357 |
| 1585 | `(i32 i32) -> (i32)` | 182 | 54,925 | 19,834 | local.get×6599, i32.const×2595, i64.store×1935, i64.const×1087, i64.load×1068 |
| 1984 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2625 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2916 | `(i32 i32 i32 i32) -> ()` | 137 | 31,379 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2935 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                 skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13
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
| `local.get` | 544,694 |
| `i32.const` | 228,717 |
| `local.tee` | 100,005 |
| `local.set` | 94,967 |
| `i32.load` | 93,878 |
| `i32.add` | 87,539 |
| `end` | 79,689 |
| `br_if` | 64,245 |
| `i32.store` | 47,215 |
| `block` | 37,495 |
| `i64.store` | 33,162 |
| `i64.const` | 32,325 |
| `if` | 30,491 |
| `call` | 30,347 |
| `i64.load` | 24,595 |
| `i32.sub` | 24,247 |
| `br` | 23,328 |
| `i32.eqz` | 19,180 |
| `select` | 16,812 |
| `i32.and` | 16,371 |
| `i32.shl` | 16,237 |
| `i32.ne` | 15,738 |
| `i32.load8_u` | 15,333 |
| `i32.eq` | 13,843 |
| `i32.store8` | 13,487 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,969/2,969 (degraded: 0)
