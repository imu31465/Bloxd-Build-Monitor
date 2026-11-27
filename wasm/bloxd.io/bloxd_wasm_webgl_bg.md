# WASM module: `bloxd_wasm_webgl_bg`

> environment **bloxd.io** · build `4udp6d.2845de07` · analyzed 2026-11-28T07:18:28+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl_bg.f53bec050bd81e0f817c.wasm
> 5,662,882 bytes (5.4 MB) · sha256 `9fbafd6231ee5847…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `63f968e094f0c68e.11124` → `0af65e84df22c876.11124` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/167 names kept (identifier names are randomly assigned per build; compare signatures instead)

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
| name-section module id | `0af65e84df22c876.11124` |
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
| 0 | `zQmc.HdxR` | memory | `[128..14648]` |
| 0 | `zQmc.fQKf` | func | `(i32) -> (f64)` |
| 1 | `zQmc.E1L5` | func | `() -> (i32)` |
| 2 | `zQmc.Njp1` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `zQmc.erZv` | func | `(i32) -> ()` |
| 4 | `zQmc.VHXC` | func | `(i32 i32) -> (i32)` |
| 5 | `zQmc.egor` | func | `(i32) -> (i32)` |
| 6 | `zQmc.OneR` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `zQmc.tu9g` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `zQmc.NL1J` | func | `(i32) -> (i32)` |
| 9 | `zQmc.NFov` | func | `(i32 i32) -> ()` |
| 10 | `zQmc.s12K` | func | `(i32 i32) -> ()` |
| 11 | `zQmc.p1ve` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `zQmc.BwGU` | func | `(i32 i32) -> (i32)` |
| 13 | `zQmc.pez2` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `zQmc.PStY` | func | `(i32) -> (i32)` |
| 15 | `zQmc.qYJq` | func | `(i32 i32) -> (i32)` |
| 16 | `zQmc.oIKV` | func | `(i32 i32) -> (i32)` |
| 17 | `zQmc.bvcU` | func | `(i32 i32) -> ()` |
| 18 | `zQmc.VppF` | func | `(i32) -> (i32)` |
| 19 | `zQmc.jKSV` | func | `(i32) -> (i32)` |
| 20 | `zQmc.Up03` | func | `(i32) -> (i32)` |
| 21 | `zQmc.Q0Ig` | func | `(i32) -> ()` |
| 22 | `zQmc.hcOR` | func | `(i32 i32) -> ()` |
| 23 | `zQmc.wh8c` | func | `(i32 i32) -> ()` |
| 24 | `zQmc.LBCN` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `zQmc.ZTxo` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `zQmc.Nz2T` | func | `(i32) -> (i32)` |
| 27 | `zQmc.IxJ9` | func | `(i32 i32) -> ()` |
| 28 | `zQmc.D5la` | func | `(i32 i32) -> (i32)` |
| 29 | `zQmc.wn42` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `zQmc.QmSy` | func | `(i32 i32) -> (i32)` |
| 31 | `zQmc.djOq` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `zQmc.UolH` | func | `(i32) -> (i32)` |
| 33 | `zQmc.Gs9K` | func | `() -> (f64)` |
| 34 | `zQmc.TZ7I` | func | `(i32 i32) -> ()` |
| 35 | `zQmc.uYo6` | func | `(i32) -> ()` |
| 36 | `zQmc.AZ33` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `zQmc.JHK7` | func | `(i32) -> (i32)` |
| 38 | `zQmc.KkyW` | func | `(i32) -> (i32)` |
| 39 | `zQmc.dIM2` | func | `(i32) -> (i32)` |
| 40 | `zQmc.i7tV` | func | `(i32 i32) -> (i32)` |
| 41 | `zQmc.UYBA` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `zQmc.bilg` | func | `(i32) -> (i32)` |
| 43 | `zQmc.R8eV` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `zQmc.inyp` | func | `(i32) -> (i32)` |
| 45 | `zQmc.WBLy` | func | `(i32 i32 i32 i32) -> ()` |
| 46 | `zQmc.Vw9U` | func | `(i32 i32 i32) -> (i32)` |
| 47 | `zQmc.XezV` | func | `(i32 i32 i32) -> ()` |
| 48 | `zQmc.AD6C` | func | `(i32 i32 i32) -> ()` |
| 49 | `zQmc.YiPZ` | func | `(i32 i32 i32) -> ()` |
| 50 | `zQmc.SbRr` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `zQmc.j5UB` | func | `(i32 i32 i32 i32) -> ()` |
| 52 | `zQmc.lF0S` | func | `(i32 i32) -> ()` |
| 53 | `zQmc.JgK9` | func | `(i32 i32) -> ()` |
| 54 | `zQmc.m5Ye` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `zQmc.a76d` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `zQmc.kSUk` | func | `(i32 f32 f32) -> ()` |
| 57 | `zQmc.HGvz` | func | `(i32 f32 f32) -> ()` |
| 58 | `zQmc.cE6i` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `zQmc.weID` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `zQmc.Zulz` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `zQmc.bE44` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `zQmc.jQ81` | func | `(i32 i32 i32) -> ()` |
| 63 | `zQmc.pLxl` | func | `(i32 i32 i32) -> ()` |
| 64 | `zQmc.O4zX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `zQmc.Tc27` | func | `(i32 i32 i32) -> ()` |
| 66 | `zQmc.ulEb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `zQmc.beXP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `zQmc.rlr5` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 69 | `zQmc.undS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `zQmc.KX2H` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 71 | `zQmc.mL9k` | func | `(i32) -> (i32)` |
| 72 | `zQmc.mbBW` | func | `(i32) -> ()` |
| 73 | `zQmc.mVO0` | func | `(i32) -> (i32)` |
| 74 | `zQmc.r4Z4` | func | `(i32 i32) -> (i32)` |
| 75 | `zQmc.lsDx` | func | `(i32 i32 i32) -> (i32)` |
| 76 | `zQmc.kBHD` | func | `(i32 i32 i32) -> ()` |
| 77 | `zQmc.CIEq` | func | `(i32 i32 i32 i32) -> (i32)` |
| 78 | `zQmc.j4Im` | func | `() -> (f64)` |
| 79 | `zQmc.yFPz` | func | `() -> (f64)` |
| 80 | `zQmc.L3FD` | func | `(i32 i32) -> ()` |
| 81 | `zQmc.bTdZ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 82 | `zQmc.DiEG` | func | `(i32 i32 i32) -> (i32)` |
| 83 | `zQmc.nwzW` | func | `(i32 i32 i32) -> ()` |
| 84 | `zQmc.RLED` | func | `(i32 i32 i32) -> ()` |
| 85 | `zQmc.ZoaT` | func | `(i32 i32) -> ()` |
| 86 | `zQmc.OHEi` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `zQmc.AsO8` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `zQmc.UkXl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 89 | `zQmc.toR8` | func | `(i32 i32) -> ()` |
| 90 | `zQmc.q9Cf` | func | `(i32 i32) -> ()` |
| 91 | `zQmc.faKN` | func | `(i32) -> (i32)` |
| 92 | `zQmc.zOWb` | func | `(i32 i32 i32) -> ()` |
| 93 | `zQmc.GJHk` | func | `(i32 i32 i32) -> ()` |
| 94 | `zQmc.U9jg` | func | `(i32) -> (i32)` |
| 95 | `zQmc.PvAM` | func | `(i32) -> (i32)` |
| 96 | `zQmc.w3QZ` | func | `(i32 i32) -> ()` |
| 97 | `zQmc.wtkZ` | func | `(i32 i32) -> ()` |
| 98 | `zQmc.rqFv` | func | `(i32 i32) -> ()` |
| 99 | `zQmc.FhiV` | func | `(i32 i32) -> ()` |
| 100 | `zQmc.pql9` | func | `(i32 i32 i32) -> ()` |
| 101 | `zQmc.mHil` | func | `(i32 i32 i32) -> ()` |
| 102 | `zQmc.PVQ0` | func | `(i32 i32 f32) -> ()` |
| 103 | `zQmc.PXhn` | func | `(i32 i32 f32) -> ()` |
| 104 | `zQmc.MVCo` | func | `(i32 i32 i32) -> ()` |
| 105 | `zQmc.aKF4` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `zQmc.TxdW` | func | `(i32 i32 f32 f32) -> ()` |
| 107 | `zQmc.VnfM` | func | `(i32 i32) -> ()` |
| 108 | `zQmc.IU8B` | func | `(i32 i32) -> ()` |
| 109 | `zQmc.wfAd` | func | `(i32 i32) -> ()` |
| 110 | `zQmc.gTrD` | func | `(i32 i32) -> ()` |
| 111 | `zQmc.XtI9` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `zQmc.OWwu` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 113 | `zQmc.XL7U` | func | `(i32 i32 i32) -> ()` |
| 114 | `zQmc.XKED` | func | `(i32 i32 i32) -> ()` |
| 115 | `zQmc.B0H0` | func | `(i32 i32 i32 i32) -> ()` |
| 116 | `zQmc.K2IF` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 117 | `zQmc.aKJ0` | func | `(i32 i32) -> ()` |
| 118 | `zQmc.VkTC` | func | `(i32 i32) -> ()` |
| 119 | `zQmc.xmlX` | func | `(i32 i32) -> (i32)` |
| 120 | `zQmc.QT2t` | func | `(i32 i32) -> (i32)` |
| 121 | `zQmc.Rh4d` | func | `(i32 i32) -> ()` |
| 122 | `zQmc.EEJm` | func | `(i32 i32) -> ()` |
| 123 | `zQmc.Blnf` | func | `(i32) -> (i32)` |
| 124 | `zQmc.rFCU` | func | `(i32 i32) -> ()` |
| 125 | `zQmc.MzfB` | func | `(i32 i32) -> ()` |
| 126 | `zQmc.OUzK` | func | `(i32 i32 i32 i32) -> ()` |
| 127 | `zQmc.oG0r` | func | `(i32 i32 i32) -> ()` |
| 128 | `zQmc.fNXN` | func | `(i32 i32 i32) -> ()` |
| 129 | `zQmc.n6sf` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 130 | `zQmc.s5yz` | func | `(i32 i32) -> ()` |
| 131 | `zQmc.NWO8` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `zQmc.tFzF` | func | `(i32 i32 i32 i32) -> (i32)` |
| 133 | `zQmc.DuRW` | func | `(i32 i32 i32) -> ()` |
| 134 | `zQmc.MKPI` | func | `(i32 i32 i32) -> ()` |
| 135 | `zQmc.bdvL` | func | `(i32) -> ()` |
| 136 | `zQmc.kCJl` | func | `(i32 i32 i32) -> (i32)` |
| 137 | `zQmc.lqZa` | func | `(i32 i32 i32) -> ()` |
| 138 | `zQmc.pxcO` | func | `(i32 i32 i32) -> (i32)` |
| 139 | `zQmc.G9fZ` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `zQmc.R09o` | func | `(i32 i32 i32) -> (i32)` |
| 141 | `zQmc.FL9C` | func | `(i32 i32) -> ()` |
| 142 | `zQmc.pSTG` | func | `(i32) -> (i32)` |
| 143 | `zQmc.iT0b` | func | `(i32 i32) -> ()` |
| 144 | `zQmc.ChWZ` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `zQmc.oT1R` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `zQmc.oUfC` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `zQmc.nlss` | func | `(i32 i32) -> ()` |
| 148 | `zQmc.Hpi8` | func | `(i32 i32) -> ()` |
| 149 | `zQmc.gaot` | func | `(i32 i32) -> ()` |
| 150 | `zQmc.syHw` | func | `(i32 i32) -> ()` |
| 151 | `zQmc.Fu5Z` | func | `(i32) -> (i32)` |
| 152 | `zQmc.niFO` | func | `(i32) -> (i32)` |
| 153 | `zQmc.X8nA` | func | `(i32) -> (i32)` |
| 154 | `zQmc.SxOt` | func | `(i32) -> (i32)` |
| 155 | `zQmc.TOvT` | func | `(i32) -> (i32)` |
| 156 | `zQmc.kMKV` | func | `(i32) -> (i32)` |
| 157 | `zQmc.NrGB` | func | `() -> (i32)` |
| 158 | `zQmc.Bqt4` | func | `() -> (i32)` |
| 159 | `zQmc.lA15` | func | `() -> (i32)` |
| 160 | `zQmc.H6xG` | func | `() -> (i32)` |
| 161 | `zQmc.Opkh` | func | `(i32 i32) -> (i32)` |
| 162 | `zQmc.cK4j` | func | `(i32) -> ()` |
| 163 | `zQmc.nx0L` | func | `(i32 i32) -> (i32)` |
| 164 | `zQmc.IuO5` | func | `(i32) -> (i32)` |
| 165 | `zQmc.VQC2` | func | `(i32) -> (i32)` |
| 166 | `zQmc.WXFa` | func | `(i32) -> (i32)` |
| 167 | `zQmc.G6nl` | func | `(i32) -> ()` |
| 168 | `zQmc.yhQR` | func | `(i32 i32 i32) -> (i32)` |
| 169 | `zQmc.NrlL` | func | `(i32) -> (i32)` |
| 170 | `zQmc.wX0W` | func | `(i32) -> (i32)` |
| 171 | `zQmc.sAim` | func | `(i32 i32) -> (i32)` |
| 172 | `zQmc.JEJl` | func | `(i32) -> ()` |
| 173 | `zQmc.PSmI` | func | `() -> (i32)` |
| 174 | `zQmc.yE7v` | func | `(i32 i32) -> (i32)` |
| 175 | `zQmc.R3A4` | func | `(i32 i32) -> ()` |
| 176 | `zQmc.wChY` | func | `(i32 i32) -> ()` |
| 177 | `zQmc.LPBm` | func | `(i32) -> (i32)` |
| 178 | `zQmc.hUJ9` | func | `(i32 i32) -> (i32)` |
| 179 | `zQmc.fDYc` | func | `(i32) -> ()` |
| 180 | `zQmc.FPyL` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `zQmc.I4KW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 182 | `zQmc.M7qF` | func | `(i32 i32) -> ()` |
| 183 | `zQmc.in67` | func | `(i32 i32) -> ()` |
| 184 | `zQmc.qvIL` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `zQmc.xyyM` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 186 | `zQmc.iI8g` | func | `(i32 f32) -> ()` |
| 187 | `zQmc.Cof0` | func | `(i32 f32) -> ()` |
| 188 | `zQmc.iTfR` | func | `(i32 i32) -> ()` |
| 189 | `zQmc.Zj93` | func | `(i32 i32) -> ()` |
| 190 | `zQmc.nY4Y` | func | `(i32) -> (i32)` |
| 191 | `zQmc.rB9v` | func | `(i32) -> (i32)` |
| 192 | `zQmc.YWOr` | func | `(i32) -> (i32)` |
| 193 | `zQmc.GDX3` | func | `(i32) -> (i32)` |
| 194 | `zQmc.XW0A` | func | `(i32 i32 i32) -> ()` |
| 195 | `zQmc.lnZZ` | func | `(i32 i32 i32) -> ()` |
| 196 | `zQmc.QL7Y` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `zQmc.f48h` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 198 | `zQmc.ve51` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 199 | `zQmc.HEBU` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `zQmc.TMg8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 201 | `zQmc.GRDE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `zQmc.sxUb` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `zQmc.nMyk` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 204 | `zQmc.vlIi` | func | `(i32) -> (i32)` |
| 205 | `zQmc.MAzc` | func | `(i32) -> (i32)` |
| 206 | `zQmc.OcMM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 207 | `zQmc.NR7G` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `zQmc.IXW1` | func | `(i32 i32 i32 i32) -> ()` |
| 209 | `zQmc.p4hr` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `zQmc.uOhv` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `zQmc.Q5iQ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `zQmc.v13m` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `zQmc.SLQ8` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 214 | `zQmc.SSv0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `zQmc.Pvox` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 216 | `zQmc.TvNJ` | func | `(i32 i32 i32) -> ()` |
| 217 | `zQmc.tIkp` | func | `(i32 i32 i32) -> ()` |
| 218 | `zQmc.KgVy` | func | `(i32 i32) -> ()` |
| 219 | `zQmc.IqVm` | func | `(i32 i32) -> ()` |
| 220 | `zQmc.HC8u` | func | `(i32 i32) -> ()` |
| 221 | `zQmc.tbQL` | func | `(i32 i32) -> ()` |
| 222 | `zQmc.mV01` | func | `(i32 i32) -> ()` |
| 223 | `zQmc.Ryr3` | func | `(i32 i32) -> ()` |
| 224 | `zQmc.ODMq` | func | `(i32 f32 f32) -> ()` |
| 225 | `zQmc.fUOp` | func | `(i32 f32 f32) -> ()` |
| 226 | `zQmc.SCpp` | func | `(i32 i32) -> ()` |
| 227 | `zQmc.Kayh` | func | `(i32 i32) -> ()` |
| 228 | `zQmc.Wnjl` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `zQmc.t1BU` | func | `(i32 i32 i32 f32) -> ()` |
| 230 | `zQmc.GOEW` | func | `(i32 i32 i32) -> ()` |
| 231 | `zQmc.MOYM` | func | `(i32) -> (i32)` |
| 232 | `zQmc.gs9X` | func | `(i32) -> (i32)` |
| 233 | `zQmc.dClv` | func | `(i32 i32) -> ()` |
| 234 | `zQmc.dD78` | func | `(i32 i32) -> ()` |
| 235 | `zQmc.BA6I` | func | `(i32 i32 i32 i32) -> (i32)` |
| 236 | `zQmc.KwVR` | func | `(i32 i32 i32 i32) -> ()` |
| 237 | `zQmc.ksGr` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `zQmc.ARzP` | func | `(i32 i32 i32) -> ()` |
| 239 | `zQmc.ebcS` | func | `(i32 i32 i32) -> ()` |
| 240 | `zQmc.Oe4x` | func | `(i32 i32 i32) -> ()` |
| 241 | `zQmc.PMq1` | func | `(i32 i32 i32) -> ()` |
| 242 | `zQmc.I1kJ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `zQmc.Qc7r` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `zQmc.gQlz` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `zQmc.gmXl` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 246 | `zQmc.Gc8l` | func | `(i32) -> (i32)` |
| 247 | `zQmc.UTB9` | func | `(i32) -> (i32)` |
| 248 | `zQmc.txVu` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `zQmc.fMYL` | func | `(i32 i32) -> ()` |
| 250 | `zQmc.copi` | func | `(i32 i32) -> ()` |
| 251 | `zQmc.bBXs` | func | `(i32 i32) -> (i32)` |
| 252 | `zQmc.jonw` | func | `(i32 i32) -> (i32)` |
| 253 | `zQmc.OiPX` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `zQmc.TDHk` | func | `(i32 i32 i32 i32) -> ()` |
| 255 | `zQmc.KvJG` | func | `(i32 i32) -> ()` |
| 256 | `zQmc.Ba4J` | func | `(i32 i32) -> ()` |
| 257 | `zQmc.AmhB` | func | `(i32) -> (i32)` |
| 258 | `zQmc.wncP` | func | `(i32 i32 i32 i32) -> ()` |
| 259 | `zQmc.TcU9` | func | `(i32 i32 i32 f32) -> ()` |
| 260 | `zQmc.V9Yb` | func | `(i32) -> ()` |
| 261 | `zQmc.XQsP` | func | `(i32 i32) -> ()` |
| 262 | `zQmc.Bbxm` | func | `(i32 i32) -> ()` |
| 263 | `zQmc.kaA6` | func | `(i32 i32) -> ()` |
| 264 | `zQmc.WN8t` | func | `(i32 i32) -> ()` |
| 265 | `zQmc.z1Pa` | func | `(i32 i32) -> ()` |
| 266 | `zQmc.UKEP` | func | `(i32 i32) -> ()` |
| 267 | `zQmc.j35M` | func | `(i32 i32) -> ()` |
| 268 | `zQmc.ukyv` | func | `(i32 i32) -> ()` |
| 269 | `zQmc.Q1kP` | func | `(i32) -> (i32)` |
| 270 | `zQmc.TDT4` | func | `(i32) -> (i32)` |
| 271 | `zQmc.E4uJ` | func | `(i32) -> (i32)` |
| 272 | `zQmc.LfAB` | func | `(i32) -> (i32)` |
| 273 | `zQmc.umdj` | func | `(i32 i32 i32 i32) -> ()` |
| 274 | `zQmc.pUn6` | func | `(i32) -> ()` |
| 275 | `zQmc.BqAW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `zQmc.CoZC` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `zQmc.s0Am` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `zQmc.PrnX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `zQmc.uunz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `zQmc.unzK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 281 | `zQmc.Xuoh` | func | `(i32) -> (i32)` |
| 282 | `zQmc.hqcj` | func | `(i32) -> (i32)` |
| 283 | `zQmc.zg1p` | func | `(i32) -> (i32)` |
| 284 | `zQmc.CcEC` | func | `(i32) -> (i32)` |
| 285 | `zQmc.tLmu` | func | `(i32 i32) -> ()` |
| 286 | `zQmc.vpyy` | func | `(i32) -> ()` |
| 287 | `zQmc.e10D` | func | `(i32 i32) -> ()` |
| 288 | `zQmc.I6Cn` | func | `(i32) -> (i32)` |
| 289 | `zQmc.qT3l` | func | `(i32 i32) -> (i32)` |
| 290 | `zQmc.lNag` | func | `(i32 i32) -> (i32)` |
| 291 | `zQmc.pe2j` | func | `(i32 i32) -> (i32)` |
| 292 | `zQmc.onIt` | func | `(f64) -> (i32)` |
| 293 | `zQmc.UWDJ` | func | `(i32 i32) -> (i32)` |
| 294 | `zQmc.b0Af` | func | `(i32 i32) -> (i32)` |
| 295 | `zQmc.mp2r` | func | `(i32 i32) -> (i32)` |
| 296 | `zQmc.G7Pm` | func | `(i32 i32) -> (i32)` |
| 297 | `zQmc.Tyzj` | func | `(i32 i32) -> (i32)` |
| 298 | `zQmc.w4Zf` | func | `(i32 i32) -> (i32)` |
| 299 | `zQmc.Z40J` | func | `(i32 i32) -> (i32)` |

## Exports

167 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `c1H1` | func | 2543 | `(i32 i32) -> ()` |
| `VtNj` | func | 1530 | `(i32 i32) -> (i32)` |
| `Z0tA` | func | 1741 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `q1ve` | func | 2522 | `(i32) -> (i32)` |
| `q8Qp` | func | 1851 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `ayy3` | func | 3197 | `(i32) -> ()` |
| `IYuN` | func | 1242 | `(i32 i32 i32 i32) -> (i32)` |
| `KheI` | func | 2610 | `(i32) -> ()` |
| `PQ11` | func | 1295 | `(i32 i32 i32) -> (i32)` |
| `mYpU` | func | 2715 | `(i32 i32) -> ()` |
| `sKiG` | func | 3072 | `(i32 i32) -> (i32 i32)` |
| `jbe0` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `slD2` | func | 1879 | `(i32 i32 i32 i32) -> (i32)` |
| `qBoI` | func | 3244 | `(i32) -> ()` |
| `IIg5` | func | 1632 | `(i32 f64 f64 f64) -> (i32)` |
| `Llug` | func | 3066 | `(i32 i32 i32) -> (i32 i32)` |
| `BCt9` | func | 1799 | `(i32 i32) -> (i32)` |
| `Is3L` | func | 908 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `VYsj` | func | 2229 | `(i32 i32) -> (i32)` |
| `FXor` | func | 2337 | `(i32 i32) -> ()` |
| `PCyC` | func | 2434 | `(i32 i32 i32 i32) -> (i32)` |
| `owf2` | func | 1425 | `(i32 f64 f64) -> (i32)` |
| `y6FL` | func | 1859 | `() -> (i32)` |
| `XyPe` | func | 3048 | `(i32 i32) -> ()` |
| `YMNy` | func | 756 | `(i32) -> (i32)` |
| `EbmO` | func | 2364 | `(i32 i32 i32 i32) -> ()` |
| `LXc4` | func | 1568 | `(i32 i32 i32) -> (i32)` |
| `II4K` | func | 2391 | `(i32 i32) -> (i32)` |
| `Kc2Y` | func | 3102 | `() -> (i32 i32)` |
| `dSlH` | func | 1977 | `(i32) -> (i32)` |
| `IF46` | func | 3086 | `(i32) -> (i32 i32)` |
| `Cuyv` | func | 3135 | `(i32 i32 i32) -> ()` |
| `vJeJ` | func | 2611 | `() -> (i32)` |
| `aTy7` | func | 1480 | `(i32) -> (i32)` |
| `Ft1C` | func | 760 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `JYd3` | func | 2544 | `(i32) -> (i32)` |
| `qBJr` | func | 3198 | `() -> ()` |
| `HE2i` | func | 1542 | `(i32 i32) -> (i32)` |
| `Rhwi` | func | 1554 | `(i32 i32) -> (i32)` |
| `i10q` | func | 909 | `(i32 i32) -> (i32)` |
| `arTj` | func | 2551 | `(i32) -> (i32)` |
| `lO4s` | func | 2524 | `(i32) -> (i32)` |
| `prpy` | func | 870 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `kExp` | func | 1899 | `(i32 i32 f64 f64 f64) -> ()` |
| `usmO` | func | 2528 | `(i32) -> ()` |
| `DAig` | func | 3090 | `(i32) -> (i32 i32)` |
| `PAF1` | func | 2525 | `(i32) -> (i32)` |
| `SzqG` | func | 679 | `(i32 i32) -> (i32)` |
| `oflx` | func | 1446 | `(i32 i32) -> (i32)` |
| `zKdG` | func | 1781 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `V1Wm` | func | 2197 | `(i32 i32) -> (i32)` |
| `mOQX` | func | 942 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `uEdl` | func | 2529 | `(i32) -> (i32)` |
| `d527` | func | 2561 | `(i32) -> (i32)` |
| `naRx` | func | 582 | `(i32 i32 i32) -> (i32)` |
| `WsG9` | func | 2627 | `(i32) -> ()` |
| `jEb0` | func | 1248 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `QUI7` | func | 3091 | `(i32) -> (i32 i32)` |
| `Bq2u` | func | 1357 | `(i32 i32) -> (i32)` |
| `aiVo` | func | 689 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `KLhX` | func | 930 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `rSbx` | func | 2834 | `(i32) -> (i32)` |
| `G5T7` | func | 1628 | `(i32 i32) -> ()` |
| `fDtN` | func | 2727 | `(i32 i32) -> ()` |
| `xxJG` | func | 3127 | `(i32 i32 i32 i32) -> ()` |
| `mP9z` | func | 3041 | `(i32 i32 i32 i32) -> (i32)` |
| `exEa` | func | 1933 | `(i32) -> ()` |
| `y0BZ` | func | 3073 | `(i32 i32) -> (i32 i32)` |
| `JY9t` | func | 2646 | `(i32 i32) -> ()` |
| `P6T5` | func | 2479 | `(i32) -> (i32)` |
| `cMtL` | func | 3067 | `(i32 i32 i32) -> (i32 i32)` |
| `by26` | func | 1589 | `(i32 i32 i32 i32) -> (i32)` |
| `tdmY` | func | 2521 | `(i32) -> (f64)` |
| `h8Ic` | func | 3076 | `(i32 i32) -> (i32 i32)` |
| `cfuj` | func | 2478 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `jqYL` | func | 1995 | `(i32) -> (i32)` |
| `HTJn` | global | 1 | `` |
| `EALZ` | func | 777 | `(i32 i32 i32) -> (i32)` |
| `UufM` | func | 2552 | `(i32 i32) -> (i32)` |
| `zWRP` | func | 2531 | `(i32) -> (i32)` |
| `mSYx` | func | 3088 | `(i32) -> (i32 i32)` |
| `Gy0r` | func | 752 | `(i32 i32 i32 i32) -> (i32)` |
| `qd3L` | func | 2091 | `(i32 i32) -> ()` |
| `EBiD` | func | 2307 | `(i32 f64) -> (i32)` |
| `PtK1` | func | 2860 | `(i32) -> (i32)` |
| `ccyl` | func | 1553 | `(i32 i32) -> (i32)` |
| `WFMc` | func | 3164 | `() -> (i32)` |
| `zEtz` | func | 694 | `(i32 i32) -> (i32)` |
| `rERu` | func | 2509 | `(i32) -> (i32)` |
| `BRj4` | func | 1764 | `(i32) -> (i32)` |
| `ZQ1W` | func | 2553 | `(i32 i32) -> (i32)` |
| `Yhdj` | func | 712 | `(f64) -> (f64)` |
| `MEiE` | func | 2031 | `(i32 i32) -> ()` |
| `q8H7` | func | 1472 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `mp5V` | func | 1907 | `(i32 i32) -> ()` |
| `tLN2` | func | 1137 | `(i32 i32) -> (i32)` |
| `Pv9t` | func | 2539 | `(i32 i32) -> ()` |
| `ejQy` | func | 1138 | `(i32 i32) -> ()` |
| `li0m` | func | 2526 | `(i32) -> (i32)` |
| `OjEA` | func | 3103 | `() -> (i32 i32)` |
| `VV9B` | func | 1321 | `(i32) -> (i32)` |
| `w8Pm` | func | 3078 | `(i32 i32) -> (i32 i32)` |
| `FGTj` | func | 2390 | `(i32 i32) -> (i32)` |
| `ueaZ` | func | 3191 | `(i32 i32 i32) -> ()` |
| `CMCb` | func | 3267 | `() -> (i32)` |
| `Wh8K` | func | 1787 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `SGw8` | func | 1925 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `k9B8` | global | 2 | `` |
| `brNA` | func | 2251 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZeE2` | func | 3035 | `(i32 i32) -> (i32)` |
| `bUh1` | func | 2827 | `(i32) -> (i32)` |
| `IEgp` | func | 2527 | `(i32) -> (i32)` |
| `dpbd` | func | 2116 | `(i32 i32) -> (i32)` |
| `mmeg` | func | 2870 | `(i32) -> ()` |
| `IcTU` | func | 1617 | `(i32 i32) -> (i32)` |
| `oHBZ` | func | 1241 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `te7M` | func | 2848 | `(i32) -> (i32)` |
| `X1fk` | func | 2389 | `(i32 i32) -> (i32)` |
| `I5lh` | func | 3074 | `(i32 i32) -> (i32 i32)` |
| `RbMJ` | func | 3239 | `() -> (f64)` |
| `kTNs` | func | 3104 | `() -> (i32 i32)` |
| `j6JV` | func | 2508 | `(i32 i32) -> ()` |
| `PHqx` | func | 1701 | `(i32) -> ()` |
| `yCWt` | func | 1371 | `(i32 i32 i32) -> (i32)` |
| `LMZV` | func | 1997 | `(i32 i32 i32 i32) -> ()` |
| `SkFV` | func | 2530 | `(i32) -> (i32)` |
| `fgXn` | func | 1524 | `(i32) -> (i32)` |
| `HBSq` | func | 3204 | `(i32) -> ()` |
| `Lg4B` | func | 2388 | `(i32 i32) -> (i32)` |
| `Decb` | func | 3268 | `() -> (i32)` |
| `A3oC` | func | 2542 | `(i32) -> (i32)` |
| `lDw5` | func | 2523 | `(i32) -> (i32)` |
| `DBoO` | func | 2057 | `(i32 f64) -> (i32)` |
| `WfLy` | func | 2892 | `(i32) -> (i32)` |
| `eJtz` | func | 3136 | `(i32 i32) -> ()` |
| `VF3E` | func | 2597 | `(i32 i32) -> ()` |
| `bMkC` | func | 1197 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `RZxc` | func | 1918 | `(i32 i32) -> (i32)` |
| `BPgu` | func | 1556 | `(i32 f64) -> (f64)` |
| `Urkb` | func | 1864 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `JRtV` | func | 2462 | `(i32) -> (i32)` |
| `LBvd` | func | 1273 | `(i32 i32) -> (i32)` |
| `Q0FE` | func | 2647 | `() -> (i32)` |
| `eVpp` | func | 1424 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `A1xv` | func | 2075 | `(i32 f64 f64 f64) -> (i32)` |
| `HsDH` | func | 1669 | `(i32 i32 i32 i32) -> (i32)` |
| `gd9R` | func | 1518 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ufeB` | func | 3089 | `(i32) -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `Ev5b` | func | 2541 | `(i32) -> (i32)` |
| `DEjL` | func | 2560 | `(i32) -> (i32)` |
| `ziy8` | func | 3087 | `(i32) -> (i32 i32)` |
| `Ika0` | func | 3016 | `() -> ()` |
| `fzhs` | func | 3075 | `(i32 i32) -> (i32 i32)` |
| `coJH` | func | 720 | `(i32 i32) -> (i32)` |
| `ZwH9` | func | 1426 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `vWoS` | func | 1500 | `(i32 i32 i32 i32) -> ()` |
| `nXON` | func | 3077 | `(i32 i32) -> (i32 i32)` |
| `NL6V` | func | 1354 | `(i32) -> ()` |
| `z7rJ` | func | 1302 | `(i32 i32 i32) -> ()` |
| `CqQT` | func | 1330 | `(i32 i32) -> (i32)` |
| `JbO0` | func | 3243 | `(i32) -> (i32)` |
| `eEGC` | func | 2562 | `(i32) -> (i32)` |
| `AHPk` | func | 1477 | `() -> (i32)` |
| `Z7t1` | func | 2423 | `(i32 i32) -> (i32)` |
| `qENv` | func | 2306 | `(i32 i32) -> ()` |
| `bdMx` | func | 628 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |

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
