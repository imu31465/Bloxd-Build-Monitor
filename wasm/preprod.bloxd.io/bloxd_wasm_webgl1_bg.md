# WASM module: `bloxd_wasm_webgl1_bg`

> environment **preprod.bloxd.io** · build `sn3sfj.2522680a` · analyzed 2026-11-25T01:02:22+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgl1_bg.284874ef1a749092d797.wasm
> 4,851,495 bytes (4.6 MB) · sha256 `53c64fa3997d454e…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,836,347 → 4,851,495 bytes (+15,148)
- defined functions 2,859 → 2,869
- code bytes 3,987,961 → 4,001,682
- data bytes 802,052 → 803,426
- name-section module id `344dde80afe35fb2.10574` → `e432d9585609a142.10601`
- export signatures: +1 × `() -> (i32 i32)`
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `flip-cropOPACITY_RGBREFLECTION_OPPOSITE_ZROUGHNESSREFLECTION`; `vs_mesh_general_lifeform_foldfs_mesh_general_lifeform_foldme`
- removed embedded strings: `6789:;6789:;6789:;6789:;6789:;6789:;6789:;6789:;6789:;6789:;`; `float mix2 = addLine(localPos / GOLDEN_RATIO, enchantPhase(t`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,869 / 282 |
| Exports / imports | 157 / 283 |
| Code bytes (function bodies) | 4,001,682 (3.8 MB) |
| Total local variables | 30,513 |
| Instructions (scanable bodies) | 1,877,604 |
| Data segments / bytes | 3,772 / 803,426 |
| Element segments / entries | 1 / 732 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `e432d9585609a142.10601` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,486 | 174 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,917 | 2869 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,471 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,006,947 | 2869 |
| 11 | data | 833,911 | 3772 |
| 0 | custom:name | 30 | — |

## Types

174 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `KVje.IwME` | memory | `[128..14648]` |
| 0 | `KVje.NmzQ` | func | `(i32) -> (f64)` |
| 1 | `KVje.R5fE` | func | `() -> (i32)` |
| 2 | `KVje.lTRR` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `KVje.bI6p` | func | `(i32) -> ()` |
| 4 | `KVje.JYVh` | func | `(i32 i32) -> (i32)` |
| 5 | `KVje.GKQa` | func | `(i32) -> (i32)` |
| 6 | `KVje.XAj1` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `KVje.auuY` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `KVje.WRJo` | func | `(i32) -> (i32)` |
| 9 | `KVje.flqM` | func | `(i32 i32) -> ()` |
| 10 | `KVje.AzVR` | func | `(i32 i32) -> ()` |
| 11 | `KVje.MJ57` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `KVje.qb1D` | func | `(i32 i32) -> (i32)` |
| 13 | `KVje.lEtG` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `KVje.VkwX` | func | `(i32) -> (i32)` |
| 15 | `KVje.BKZ6` | func | `(i32 i32) -> (i32)` |
| 16 | `KVje.llTo` | func | `(i32 i32) -> (i32)` |
| 17 | `KVje.hE2m` | func | `(i32 i32) -> ()` |
| 18 | `KVje.ut9Q` | func | `(i32) -> (i32)` |
| 19 | `KVje.NU1B` | func | `(i32) -> (i32)` |
| 20 | `KVje.XElS` | func | `(i32) -> (i32)` |
| 21 | `KVje.wjsB` | func | `(i32) -> ()` |
| 22 | `KVje.pXzs` | func | `(i32 i32) -> ()` |
| 23 | `KVje.jqOu` | func | `(i32 i32) -> ()` |
| 24 | `KVje.LEAF` | func | `(i32) -> (i32)` |
| 25 | `KVje.iNCj` | func | `(i32 i32) -> ()` |
| 26 | `KVje.W44O` | func | `(i32 i32) -> (i32)` |
| 27 | `KVje.wyR6` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `KVje.K6m9` | func | `(i32 i32) -> (i32)` |
| 29 | `KVje.grZp` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `KVje.cjpL` | func | `(i32) -> (i32)` |
| 31 | `KVje.qmDq` | func | `(i32 i32) -> ()` |
| 32 | `KVje.w44X` | func | `(i32) -> (i32)` |
| 33 | `KVje.afm2` | func | `(i32) -> (i32)` |
| 34 | `KVje.GD6I` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `KVje.l2gA` | func | `(i32) -> (i32)` |
| 36 | `KVje.VFGx` | func | `(i32) -> (i32)` |
| 37 | `KVje.w38w` | func | `(i32) -> (i32)` |
| 38 | `KVje.EDCh` | func | `(i32 i32) -> (i32)` |
| 39 | `KVje.ubwu` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `KVje.IWQu` | func | `(i32) -> (i32)` |
| 41 | `KVje.DuzJ` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `KVje.H7kw` | func | `() -> (f64)` |
| 43 | `KVje.CfpC` | func | `(i32) -> (i32)` |
| 44 | `KVje.b3Km` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `KVje.A0Du` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `KVje.xXqO` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `KVje.aEnb` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `KVje.HegJ` | func | `(i32 i32 i32) -> ()` |
| 49 | `KVje.dVpn` | func | `(i32 i32 i32) -> ()` |
| 50 | `KVje.rRYY` | func | `(i32 i32 i32) -> ()` |
| 51 | `KVje.E7dk` | func | `(i32 i32) -> ()` |
| 52 | `KVje.LKnp` | func | `(i32 i32) -> ()` |
| 53 | `KVje.rTAQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `KVje.sGPr` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `KVje.YunZ` | func | `(i32 f32 f32) -> ()` |
| 56 | `KVje.E2bD` | func | `(i32 f32 f32) -> ()` |
| 57 | `KVje.hm9s` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `KVje.VNQm` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `KVje.TO6F` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `KVje.yhAf` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `KVje.bwcG` | func | `(i32 i32 i32) -> ()` |
| 62 | `KVje.qERk` | func | `(i32 i32 i32) -> ()` |
| 63 | `KVje.mUEG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `KVje.szx7` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `KVje.ExDv` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `KVje.TCoO` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `KVje.ou5F` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `KVje.g1Yw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `KVje.CLfK` | func | `(i32) -> (i32)` |
| 70 | `KVje.aE48` | func | `(i32) -> ()` |
| 71 | `KVje.aV8W` | func | `(i32) -> (i32)` |
| 72 | `KVje.z1yZ` | func | `(i32 i32) -> (i32)` |
| 73 | `KVje.mH2e` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `KVje.lJce` | func | `(i32 i32 i32) -> ()` |
| 75 | `KVje.WLdo` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `KVje.Lw30` | func | `() -> (f64)` |
| 77 | `KVje.woKF` | func | `() -> (f64)` |
| 78 | `KVje.sLLN` | func | `(i32 i32) -> ()` |
| 79 | `KVje.NAnM` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `KVje.hMJn` | func | `(i32 i32 i32) -> ()` |
| 81 | `KVje.PWr5` | func | `(i32 i32 i32) -> ()` |
| 82 | `KVje.OJFE` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `KVje.FZrX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `KVje.yK1I` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `KVje.xclo` | func | `(i32 i32) -> ()` |
| 86 | `KVje.Szrh` | func | `(i32 i32) -> ()` |
| 87 | `KVje.e1hB` | func | `(i32) -> (i32)` |
| 88 | `KVje.xpOZ` | func | `(i32 i32) -> ()` |
| 89 | `KVje.tfft` | func | `(i32 i32) -> ()` |
| 90 | `KVje.hOpu` | func | `(i32 i32 i32) -> ()` |
| 91 | `KVje.vCLB` | func | `(i32 i32 i32) -> ()` |
| 92 | `KVje.VtiM` | func | `(i32) -> (i32)` |
| 93 | `KVje.Fx4A` | func | `(i32) -> (i32)` |
| 94 | `KVje.CRgW` | func | `(i32 i32) -> (i32)` |
| 95 | `KVje.DHeW` | func | `(i32 i32) -> (i32)` |
| 96 | `KVje.s1eb` | func | `(i32 i32) -> ()` |
| 97 | `KVje.Lh5w` | func | `(i32 i32) -> ()` |
| 98 | `KVje.fEGk` | func | `(i32 i32 i32) -> ()` |
| 99 | `KVje.tb42` | func | `(i32 i32 i32) -> ()` |
| 100 | `KVje.SjWG` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `KVje.w1Os` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `KVje.lWY1` | func | `(i32 i32 f32) -> ()` |
| 103 | `KVje.C4tH` | func | `(i32 i32 f32) -> ()` |
| 104 | `KVje.ZkCq` | func | `(i32 i32 i32) -> ()` |
| 105 | `KVje.e7hO` | func | `(i32 i32 i32) -> ()` |
| 106 | `KVje.UGqT` | func | `(i32 i32 i32) -> ()` |
| 107 | `KVje.vMai` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `KVje.eLeO` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `KVje.ar7M` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `KVje.pV34` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `KVje.GjNF` | func | `(i32 i32) -> ()` |
| 112 | `KVje.MwPj` | func | `(i32 i32) -> ()` |
| 113 | `KVje.RBzM` | func | `(i32 i32) -> ()` |
| 114 | `KVje.r8Xh` | func | `(i32 i32) -> ()` |
| 115 | `KVje.HP6N` | func | `(i32) -> (i32)` |
| 116 | `KVje.jXuZ` | func | `(i32) -> (i32)` |
| 117 | `KVje.EGup` | func | `(i32) -> (i32)` |
| 118 | `KVje.ys73` | func | `(i32) -> (i32)` |
| 119 | `KVje.CGnb` | func | `(i32 i32) -> ()` |
| 120 | `KVje.vA0z` | func | `(i32 i32) -> ()` |
| 121 | `KVje.GelF` | func | `(i32 i32) -> ()` |
| 122 | `KVje.b9d1` | func | `(i32 i32) -> ()` |
| 123 | `KVje.umGj` | func | `(i32 i32) -> ()` |
| 124 | `KVje.QeEG` | func | `(i32 i32) -> ()` |
| 125 | `KVje.xi4i` | func | `(i32 i32) -> (i32)` |
| 126 | `KVje.UrR3` | func | `(i32 i32) -> (i32)` |
| 127 | `KVje.eTwN` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `KVje.ISyI` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `KVje.E2v6` | func | `(i32 i32) -> ()` |
| 130 | `KVje.XkD2` | func | `(i32 i32) -> ()` |
| 131 | `KVje.RoqN` | func | `(i32) -> (i32)` |
| 132 | `KVje.fq8o` | func | `(i32 i32) -> ()` |
| 133 | `KVje.BVFM` | func | `(i32 i32) -> ()` |
| 134 | `KVje.HYqm` | func | `(i32 i32 i32) -> ()` |
| 135 | `KVje.tKgj` | func | `(i32 i32 i32) -> ()` |
| 136 | `KVje.w5eW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `KVje.C79p` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `KVje.c3E4` | func | `(i32 i32) -> ()` |
| 139 | `KVje.gWxZ` | func | `(i32 i32 i32) -> ()` |
| 140 | `KVje.eQJ4` | func | `(i32 i32 i32) -> ()` |
| 141 | `KVje.aZ5A` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `KVje.H7cP` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `KVje.iKSd` | func | `(i32 i32 i32) -> ()` |
| 144 | `KVje.iQvm` | func | `(i32 i32 i32) -> ()` |
| 145 | `KVje.Z7rW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `KVje.UyiW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `KVje.PszC` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `KVje.zeVq` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `KVje.eGHO` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `KVje.WCvG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `KVje.K70S` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `KVje.WpLV` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `KVje.yMkD` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `KVje.Vu6C` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `KVje.gnG1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `KVje.qvp6` | func | `(i32) -> (i32)` |
| 157 | `KVje.zEr9` | func | `(i32) -> (i32)` |
| 158 | `KVje.LEtO` | func | `(i32) -> (i32)` |
| 159 | `KVje.n8GA` | func | `(i32) -> (i32)` |
| 160 | `KVje.hkLS` | func | `() -> (i32)` |
| 161 | `KVje.KAAO` | func | `() -> (i32)` |
| 162 | `KVje.MTBU` | func | `() -> (i32)` |
| 163 | `KVje.QuA7` | func | `() -> (i32)` |
| 164 | `KVje.CAzh` | func | `(i32 i32) -> (i32)` |
| 165 | `KVje.zKUY` | func | `(i32) -> ()` |
| 166 | `KVje.W8WR` | func | `(i32 i32) -> (i32)` |
| 167 | `KVje.iH6o` | func | `(i32) -> (i32)` |
| 168 | `KVje.hBb0` | func | `(i32) -> (i32)` |
| 169 | `KVje.hPpl` | func | `(i32) -> (i32)` |
| 170 | `KVje.kHzH` | func | `(i32) -> ()` |
| 171 | `KVje.fIbg` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `KVje.MtAc` | func | `(i32) -> (i32)` |
| 173 | `KVje.OBh4` | func | `(i32) -> (i32)` |
| 174 | `KVje.KEKx` | func | `(i32 i32) -> (i32)` |
| 175 | `KVje.hI7s` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `KVje.ZsFx` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `KVje.hW6B` | func | `(i32) -> (i32)` |
| 178 | `KVje.PF6w` | func | `(i32) -> (i32)` |
| 179 | `KVje.kTqt` | func | `(i32) -> (i32)` |
| 180 | `KVje.jUAK` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `KVje.l1iM` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `KVje.XrIi` | func | `(i32 i32) -> ()` |
| 183 | `KVje.kCWJ` | func | `(i32 i32 i32) -> ()` |
| 184 | `KVje.bzVX` | func | `(i32 i32) -> ()` |
| 185 | `KVje.gts8` | func | `(i32 i32 i32) -> ()` |
| 186 | `KVje.un3M` | func | `(i32 i32) -> ()` |
| 187 | `KVje.czDM` | func | `(i32 i32) -> ()` |
| 188 | `KVje.D1uc` | func | `(i32) -> (i32)` |
| 189 | `KVje.mAno` | func | `(i32 i32) -> (i32)` |
| 190 | `KVje.akKz` | func | `(i32) -> ()` |
| 191 | `KVje.mlYy` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `KVje.PiFJ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `KVje.Qr17` | func | `(i32 i32) -> ()` |
| 194 | `KVje.bDOX` | func | `(i32 i32) -> ()` |
| 195 | `KVje.OQAp` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `KVje.aajU` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `KVje.uFvX` | func | `(i32 f32) -> ()` |
| 198 | `KVje.m61e` | func | `(i32 f32) -> ()` |
| 199 | `KVje.hMye` | func | `(i32 i32) -> ()` |
| 200 | `KVje.P51K` | func | `(i32 i32) -> ()` |
| 201 | `KVje.MC7F` | func | `(i32) -> (i32)` |
| 202 | `KVje.xgaE` | func | `(i32) -> (i32)` |
| 203 | `KVje.KU2g` | func | `(i32) -> (i32)` |
| 204 | `KVje.sUYv` | func | `(i32) -> (i32)` |
| 205 | `KVje.zsis` | func | `(i32 i32 i32) -> ()` |
| 206 | `KVje.JqBP` | func | `(i32 i32 i32) -> ()` |
| 207 | `KVje.Lkyq` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `KVje.bzmq` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `KVje.gyUt` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `KVje.DxZd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `KVje.DIai` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `KVje.iXAT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `KVje.NYnR` | func | `(i32 i32) -> ()` |
| 214 | `KVje.ZpkC` | func | `(i32 i32) -> ()` |
| 215 | `KVje.dVcZ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `KVje.bZ60` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `KVje.ZR69` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `KVje.OT5S` | func | `(i32) -> (i32)` |
| 219 | `KVje.JvPj` | func | `(i32) -> (i32)` |
| 220 | `KVje.m00e` | func | `(i32 i32) -> ()` |
| 221 | `KVje.mMRw` | func | `(i32 i32) -> ()` |
| 222 | `KVje.ZHw9` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `KVje.iwNk` | func | `(i32) -> (i32)` |
| 224 | `KVje.k4FO` | func | `(i32) -> (i32)` |
| 225 | `KVje.R7ao` | func | `(i32 i32) -> ()` |
| 226 | `KVje.MGvC` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `KVje.x6uI` | func | `(i32 i32) -> ()` |
| 228 | `KVje.ym0l` | func | `(i32 i32) -> ()` |
| 229 | `KVje.fDtO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `KVje.NEHE` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `KVje.kSvt` | func | `(i32 i32 i32) -> ()` |
| 232 | `KVje.uJjO` | func | `(i32 i32 i32) -> ()` |
| 233 | `KVje.mzi3` | func | `(i32 i32) -> ()` |
| 234 | `KVje.VVXW` | func | `(i32 i32) -> ()` |
| 235 | `KVje.iCye` | func | `(i32 i32) -> ()` |
| 236 | `KVje.TYaW` | func | `(i32 i32) -> ()` |
| 237 | `KVje.gPz5` | func | `(i32 i32) -> ()` |
| 238 | `KVje.j9L6` | func | `(i32 i32) -> ()` |
| 239 | `KVje.o2tI` | func | `(i32 f32 f32) -> ()` |
| 240 | `KVje.xoQP` | func | `(i32 f32 f32) -> ()` |
| 241 | `KVje.IXad` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `KVje.Pij8` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `KVje.MiCa` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `KVje.TL5f` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `KVje.p2m6` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `KVje.RToA` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `KVje.FDye` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `KVje.CNMx` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `KVje.i6r4` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `KVje.Pw2K` | func | `(i32) -> ()` |
| 251 | `KVje.nmqe` | func | `(i32 i32) -> ()` |
| 252 | `KVje.Zz6M` | func | `(i32 i32) -> ()` |
| 253 | `KVje.XBVX` | func | `(i32 i32) -> ()` |
| 254 | `KVje.sRZb` | func | `(i32 i32) -> ()` |
| 255 | `KVje.wNpF` | func | `(i32 i32) -> ()` |
| 256 | `KVje.BXjy` | func | `(i32 i32) -> ()` |
| 257 | `KVje.nQSE` | func | `(i32 i32) -> ()` |
| 258 | `KVje.gdXl` | func | `(i32 i32) -> ()` |
| 259 | `KVje.dHGB` | func | `(i32) -> (i32)` |
| 260 | `KVje.chGd` | func | `(i32) -> (i32)` |
| 261 | `KVje.I9L0` | func | `(i32) -> (i32)` |
| 262 | `KVje.zSfw` | func | `(i32) -> (i32)` |
| 263 | `KVje.oCx9` | func | `(i32) -> ()` |
| 264 | `KVje.KDu7` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `KVje.tuJ4` | func | `(i32) -> ()` |
| 266 | `KVje.PktU` | func | `(i32) -> (i32)` |
| 267 | `KVje.xc1f` | func | `(i32) -> (i32)` |
| 268 | `KVje.cwig` | func | `(i32) -> (i32)` |
| 269 | `KVje.UzPm` | func | `(i32) -> (i32)` |
| 270 | `KVje.LdNx` | func | `(i32 i32) -> ()` |
| 271 | `KVje.Yl73` | func | `(i32) -> ()` |
| 272 | `KVje.xnUJ` | func | `(i32 i32) -> ()` |
| 273 | `KVje.meiV` | func | `(i32) -> (i32)` |
| 274 | `KVje.XBdw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `KVje.wbOp` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `KVje.jrdi` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `KVje.Z3JK` | func | `(i32 i32) -> (i32)` |
| 278 | `KVje.eVuF` | func | `(i32 i32) -> (i32)` |
| 279 | `KVje.OyjO` | func | `(i32 i32) -> (i32)` |
| 280 | `KVje.dAmE` | func | `(i32 i32) -> (i32)` |
| 281 | `KVje.UNqR` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `cG4E` | func | 1714 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `UmCR` | func | 2758 | `(i32) -> ()` |
| `Z26h` | func | 2978 | `() -> (i32 i32)` |
| `cRz6` | func | 2918 | `(i32 i32) -> (i32)` |
| `iBYt` | func | 2929 | `(i32 i32) -> ()` |
| `idGz` | func | 2899 | `() -> ()` |
| `xF2q` | func | 2436 | `(i32) -> (i32)` |
| `uXkj` | func | 3140 | `() -> (i32)` |
| `meMj` | func | 2724 | `(i32) -> (i32)` |
| `zwOp` | func | 3038 | `() -> (i32)` |
| `q7No` | func | 2009 | `(i32 i32) -> ()` |
| `Abz8` | func | 2457 | `(i32 i32) -> (i32)` |
| `yH3d` | func | 2947 | `(i32 i32 i32) -> (i32 i32)` |
| `AW3t` | func | 3117 | `(i32) -> (i32)` |
| `Nhms` | func | 869 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `qHXU` | func | 1192 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `HxPq` | func | 1707 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `b7ZS` | func | 2781 | `(i32) -> (i32)` |
| `dups` | func | 2544 | `() -> (i32)` |
| `a5aZ` | func | 1848 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `RkmX` | func | 3118 | `(i32) -> ()` |
| `ppeK` | func | 3071 | `(i32) -> ()` |
| `KEBk` | func | 1486 | `(i32 i32) -> (i32)` |
| `smDp` | func | 1671 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `Gg8b` | func | 1565 | `(i32 i32) -> ()` |
| `PzoQ` | func | 2747 | `(i32) -> (i32)` |
| `m5az` | func | 1490 | `(i32 f64) -> (f64)` |
| `KRU3` | func | 2251 | `(i32 i32) -> ()` |
| `hy1s` | func | 793 | `(i32 i32) -> (i32)` |
| `YPIn` | func | 2166 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `dyzg` | func | 2427 | `(i32) -> (i32)` |
| `lC1i` | func | 2456 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `D01C` | func | 3010 | `(i32 i32) -> ()` |
| `lnqe` | func | 1091 | `(i32 i32) -> ()` |
| `xHND` | func | 1475 | `(i32 i32) -> (i32)` |
| `f2Hm` | func | 2958 | `(i32 i32) -> (i32 i32)` |
| `jckh` | func | 686 | `(i32 i32) -> (i32)` |
| `VLV1` | func | 2962 | `(i32) -> (i32 i32)` |
| `cOhc` | func | 2964 | `(i32) -> (i32 i32)` |
| `G90G` | func | 2368 | `(i32) -> (i32)` |
| `gW5n` | func | 1385 | `(i32 i32) -> (i32)` |
| `DeXN` | func | 1245 | `(i32 i32 i32) -> ()` |
| `l18I` | func | 2953 | `(i32 i32) -> (i32 i32)` |
| `S4If` | func | 2434 | `(i32) -> (i32)` |
| `MPtk` | func | 889 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `wJDz` | func | 1856 | `(i32) -> ()` |
| `o67F` | func | 2033 | `(i32 i32) -> (i32)` |
| `VvUT` | func | 1193 | `(i32 i32 i32 i32) -> (i32)` |
| `umQW` | func | 2385 | `(i32) -> (i32)` |
| `PAZc` | func | 2464 | `(i32) -> (i32)` |
| `v8Zv` | func | 1272 | `(i32 i32) -> (i32)` |
| `RcG6` | func | 2343 | `(i32 i32 i32 i32) -> (i32)` |
| `HUcd` | func | 1803 | `(i32 i32 i32 i32) -> (i32)` |
| `WwGu` | func | 660 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Z0bs` | func | 1455 | `(i32) -> (i32)` |
| `As8C` | func | 2977 | `() -> (i32 i32)` |
| `hKgb` | func | 1264 | `(i32) -> (i32)` |
| `nTE9` | func | 1364 | `(i32 f64 f64) -> (i32)` |
| `KPSr` | func | 1831 | `(i32 i32) -> ()` |
| `KOPH` | func | 1993 | `(i32 f64 f64 f64) -> (i32)` |
| `sMeU` | func | 648 | `(i32 i32) -> (i32)` |
| `oOwe` | func | 1445 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `xMDv` | func | 2445 | `(i32) -> (i32)` |
| `AUzN` | func | 1606 | `(i32 i32 i32 i32) -> (i32)` |
| `LwOL` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `vodc` | func | 1222 | `(i32 i32) -> (i32)` |
| `MiDG` | func | 2431 | `(i32) -> (i32)` |
| `Ur6M` | func | 2443 | `(i32 i32) -> ()` |
| `lCj6` | func | 2465 | `(i32) -> (i32)` |
| `b6t2` | func | 2426 | `(i32) -> (f64)` |
| `y67m` | func | 2957 | `(i32 i32) -> (i32 i32)` |
| `tuEJ` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `mYqI` | func | 547 | `(i32 i32 i32) -> (i32)` |
| `wRcR` | func | 2976 | `() -> (i32 i32)` |
| `zDzc` | func | 1857 | `(i32) -> ()` |
| `C1T1` | func | 1913 | `(i32) -> (i32)` |
| `J4oi` | func | 1502 | `(i32 i32 i32) -> (i32)` |
| `mu0G` | func | 1915 | `(i32 i32 i32 i32) -> ()` |
| `bIZE` | func | 2543 | `(i32 i32) -> ()` |
| `dGFx` | func | 1298 | `(i32) -> ()` |
| `zFe6` | func | 2221 | `(i32 f64) -> (i32)` |
| `siwg` | func | 1412 | `() -> (i32)` |
| `Mf0c` | func | 1151 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `h8TA` | func | 3141 | `() -> (i32)` |
| `x0PV` | func | 2384 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `snRv` | func | 2220 | `(i32 i32) -> ()` |
| `CZ1H` | func | 2511 | `() -> (i32)` |
| `dLC5` | func | 1788 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `ziCd` | func | 2446 | `(i32) -> (i32)` |
| `dJqm` | func | 2429 | `(i32) -> (i32)` |
| `aREi` | func | 1433 | `(i32 i32 i32 i32) -> ()` |
| `OFSA` | func | 2330 | `(i32 i32) -> (i32)` |
| `Lj2d` | func | 2301 | `(i32 i32) -> (i32)` |
| `V9Cn` | func | 2466 | `(i32) -> (i32)` |
| `rDvf` | func | 1823 | `(i32 i32 f64 f64 f64) -> ()` |
| `k7a4` | func | 2965 | `(i32) -> (i32 i32)` |
| `VbNW` | func | 2412 | `(i32 i32) -> ()` |
| `GZ9j` | func | 2954 | `(i32 i32) -> (i32 i32)` |
| `HS4b` | func | 2963 | `(i32) -> (i32 i32)` |
| `OqxT` | func | 3072 | `() -> ()` |
| `AiM3` | func | 2923 | `(i32 i32 i32 i32) -> (i32)` |
| `edNS` | func | 2428 | `(i32) -> (i32)` |
| `fvV0` | global | 1 | `` |
| `BX96` | func | 1454 | `(i32 i32 i32 i32) -> (i32)` |
| `Dre3` | func | 1462 | `(i32 i32) -> (i32)` |
| `I8t2` | func | 2435 | `(i32) -> (i32)` |
| `GUM0` | func | 2299 | `(i32 i32) -> (i32)` |
| `Vj8s` | func | 1949 | `(i32 i32) -> ()` |
| `Lnmi` | func | 2302 | `(i32 i32) -> (i32)` |
| `TZpZ` | func | 2430 | `(i32) -> (i32)` |
| `GoNc` | func | 1725 | `(i32 i32) -> (i32)` |
| `T8Nx` | func | 2956 | `(i32 i32) -> (i32 i32)` |
| `pYVa` | func | 1692 | `(i32) -> (i32)` |
| `MGJB` | func | 1363 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `PqtY` | func | 1898 | `(i32) -> (i32)` |
| `neQT` | func | 1450 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `sdYR` | func | 2952 | `(i32 i32) -> (i32 i32)` |
| `DmrR` | func | 1408 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `J3Ge` | func | 1564 | `(i32 i32) -> ()` |
| `kH3c` | func | 725 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `pWg1` | func | 2500 | `(i32 i32) -> ()` |
| `qypN` | func | 2300 | `(i32 i32) -> (i32)` |
| `k5fe` | func | 1314 | `(i32 i32 i32) -> (i32)` |
| `qOZz` | func | 870 | `(i32 i32) -> (i32)` |
| `T627` | func | 2455 | `(i32) -> (i32)` |
| `AW7O` | func | 2413 | `(i32) -> (i32)` |
| `OLEM` | func | 1783 | `() -> (i32)` |
| `CRqI` | func | 1487 | `(i32 i32) -> (i32)` |
| `gamD` | global | 2 | `` |
| `mNgm` | func | 1415 | `(i32) -> (i32)` |
| `p5MV` | func | 719 | `(i32) -> (i32)` |
| `y0bM` | func | 1975 | `(i32 f64) -> (i32)` |
| `plNb` | func | 1090 | `(i32 i32) -> (i32)` |
| `oN77` | func | 2966 | `(i32) -> (i32 i32)` |
| `zDLd` | func | 2948 | `(i32 i32 i32) -> (i32 i32)` |
| `Ukce` | func | 2432 | `(i32) -> (i32)` |
| `HYtj` | func | 2955 | `(i32 i32) -> (i32 i32)` |
| `WuvQ` | func | 1553 | `(i32 i32) -> (i32)` |
| `LoSC` | func | 2738 | `(i32) -> (i32)` |
| `BIXd` | func | 598 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `cB5u` | func | 2717 | `(i32) -> (i32)` |
| `TTuO` | func | 1569 | `(i32 f64 f64 f64) -> (i32)` |
| `LW6D` | func | 1199 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `OvGo` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `Cm8L` | func | 3009 | `(i32 i32 i32) -> ()` |
| `RI0W` | func | 3000 | `(i32 i32 i32 i32) -> ()` |
| `ACmL` | func | 2145 | `(i32 i32) -> (i32)` |
| `uQcA` | func | 2433 | `(i32) -> ()` |
| `hU2y` | func | 3113 | `() -> (f64)` |
| `n7IG` | func | 899 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `gTw6` | func | 2448 | `(i32) -> (i32)` |
| `ZW5P` | func | 1240 | `(i32 i32 i32) -> (i32)` |
| `YY2B` | func | 2447 | `(i32 i32) -> ()` |
| `SgZd` | func | 2114 | `(i32 i32) -> (i32)` |
| `DHte` | func | 3065 | `(i32 i32 i32) -> ()` |
| `Rn2d` | func | 1841 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 733 · max 733
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2016656, `i32` = i32.const 2017220

## Functions

- 2,869 bodies · 4,001,682 code bytes · avg 1.4 KB
- instruction scan: 2,869 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 104 |
| <= 128 bytes | 253 |
| <= 256 bytes | 365 |
| <= 512 bytes | 666 |
| <= 1024 bytes | 572 |
| <= 2048 bytes | 420 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 89 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 217 | 194,712 | 88,375 | local.get×25902, i32.const×9917, i32.load×5640, local.set×4735, local.tee×4639 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,484 | 54,537 | local.get×15175, i32.const×6560, i32.add×3203, local.set×3090, i32.load×2945 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 125 | 48,853 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,650 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,547 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,727 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 62 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 191 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 221 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 716 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 761 | `(i32 i32) -> ()` | 138 | 42,799 | 20,185 | local.get×5260, i32.const×2330, local.tee×1194, i32.add×1063, local.set×1003 |
| 1559 | `(i32 i32) -> (i32)` | 180 | 54,760 | 19,855 | local.get×6591, i32.const×2625, i64.store×1913, i64.const×1077, i64.load×1056 |
| 1960 | `(i32 i32) -> ()` | 110 | 40,258 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2552 | `(i32 i32) -> ()` | 397 | 142,149 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2821 | `(i32 i32 i32 i32) -> ()` | 137 | 31,353 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2840 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 535,195 |
| `i32.const` | 224,262 |
| `local.tee` | 99,499 |
| `i32.load` | 93,526 |
| `local.set` | 93,510 |
| `i32.add` | 86,525 |
| `end` | 78,593 |
| `br_if` | 63,980 |
| `i32.store` | 46,206 |
| `block` | 37,004 |
| `i64.const` | 32,278 |
| `i64.store` | 31,395 |
| `if` | 29,971 |
| `call` | 28,910 |
| `i32.sub` | 24,477 |
| `i64.load` | 23,280 |
| `br` | 23,056 |
| `i32.eqz` | 19,395 |
| `select` | 16,874 |
| `i32.shl` | 16,361 |
| `i32.and` | 16,321 |
| `i32.ne` | 15,778 |
| `i32.load8_u` | 14,835 |
| `i32.eq` | 13,841 |
| `i32.store8` | 12,548 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,869/2,869 (degraded: 0)
