# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `u88b9b.1969c480` · analyzed 2026-11-27T18:53:23+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.0d82d67487ecd11a9fde.wasm
> 5,162,719 bytes (4.9 MB) · sha256 `cf5aebafb7e29199…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `1b7fd571c66fed14.12347` → `7b7013ff454843c8.12347` (numeric version suffix unchanged — same module version, re-randomized prefix)
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
| name-section module id | `7b7013ff454843c8.12347` |
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
| 0 | `NRvf.Q57x` | memory | `[128..14648]` |
| 0 | `NRvf.tqGC` | func | `(i32) -> (i32)` |
| 1 | `NRvf.mdpr` | func | `(i32) -> (f64)` |
| 2 | `NRvf.D7Hc` | func | `() -> (i32)` |
| 3 | `NRvf.ZBT8` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `NRvf.yDyf` | func | `(i32) -> ()` |
| 5 | `NRvf.p2e9` | func | `(i32 i32) -> (i32)` |
| 6 | `NRvf.NQG8` | func | `(i32) -> (i32)` |
| 7 | `NRvf.geSE` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `NRvf.Ycs3` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `NRvf.GDoN` | func | `(i32) -> (i32)` |
| 10 | `NRvf.keqX` | func | `(i32 i32) -> ()` |
| 11 | `NRvf.Tmns` | func | `(i32 i32) -> ()` |
| 12 | `NRvf.hcuc` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `NRvf.eLG1` | func | `(i32 i32) -> (i32)` |
| 14 | `NRvf.viag` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `NRvf.tBHi` | func | `(i32) -> (i32)` |
| 16 | `NRvf.ru6g` | func | `(i32 i32) -> (i32)` |
| 17 | `NRvf.eFM7` | func | `(i32 i32) -> (i32)` |
| 18 | `NRvf.ZZKD` | func | `(i32 i32) -> ()` |
| 19 | `NRvf.t1ma` | func | `(i32) -> (i32)` |
| 20 | `NRvf.SjDu` | func | `(i32) -> (i32)` |
| 21 | `NRvf.exGk` | func | `(i32 i32 i32) -> ()` |
| 22 | `NRvf.nmsf` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `NRvf.JgHw` | func | `(i32) -> (i32)` |
| 24 | `NRvf.Dywk` | func | `(i32) -> (i32)` |
| 25 | `NRvf.DDai` | func | `(i32 i32) -> ()` |
| 26 | `NRvf.Ceob` | func | `(i32 i32) -> (i32)` |
| 27 | `NRvf.L0Mn` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `NRvf.vYR5` | func | `(i32) -> (i32)` |
| 29 | `NRvf.Wgu6` | func | `(i32) -> (i32)` |
| 30 | `NRvf.fKEK` | func | `(i32) -> (i32)` |
| 31 | `NRvf.is1h` | func | `(i32) -> (i32)` |
| 32 | `NRvf.O3C8` | func | `(i32) -> (i32)` |
| 33 | `NRvf.Ov9x` | func | `(i32 i32 i32) -> ()` |
| 34 | `NRvf.iAMj` | func | `(i32 i32) -> (i32)` |
| 35 | `NRvf.pCUx` | func | `(i32) -> (i32)` |
| 36 | `NRvf.ZGww` | func | `(i32) -> ()` |
| 37 | `NRvf.tGRf` | func | `(i32) -> (i32)` |
| 38 | `NRvf.cCeO` | func | `(i32) -> (i32)` |
| 39 | `NRvf.bjDn` | func | `(i32) -> ()` |
| 40 | `NRvf.nn7t` | func | `(i32 i32) -> (i32)` |
| 41 | `NRvf.JZxQ` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `NRvf.ZKBB` | func | `(i32) -> ()` |
| 43 | `NRvf.rNAL` | func | `(i32 i32) -> ()` |
| 44 | `NRvf.pDqz` | func | `() -> (i32)` |
| 45 | `NRvf.MFIU` | func | `(i32 i32) -> (i32)` |
| 46 | `NRvf.QCrj` | func | `(i32 i32) -> (i32)` |
| 47 | `NRvf.yJQw` | func | `(i32) -> (i32)` |
| 48 | `NRvf.IWZo` | func | `(i32) -> (i32)` |
| 49 | `NRvf.QrIl` | func | `(i32) -> (i32)` |
| 50 | `NRvf.Q28L` | func | `(i32 i32) -> ()` |
| 51 | `NRvf.oY8C` | func | `(i32) -> (i32)` |
| 52 | `NRvf.WNnU` | func | `(i32) -> ()` |
| 53 | `NRvf.aEu8` | func | `(i32 i32) -> (i32)` |
| 54 | `NRvf.Sp9y` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `NRvf.GmhT` | func | `(i32) -> (i32)` |
| 56 | `NRvf.CVe4` | func | `(i32 i32 i32) -> ()` |
| 57 | `NRvf.ycaW` | func | `(i32 i32) -> ()` |
| 58 | `NRvf.OJXP` | func | `(i32) -> (i32)` |
| 59 | `NRvf.oby4` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `NRvf.ukhx` | func | `(i32) -> ()` |
| 61 | `NRvf.BKXS` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `NRvf.LCxG` | func | `(i32) -> ()` |
| 63 | `NRvf.DzdP` | func | `(i32 i32 i32) -> ()` |
| 64 | `NRvf.G3lj` | func | `(i32 i32) -> ()` |
| 65 | `NRvf.eU6W` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `NRvf.OcN4` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `NRvf.UWCL` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `NRvf.ELdH` | func | `(i32 i32 f64) -> ()` |
| 69 | `NRvf.u647` | func | `(i32) -> (i32)` |
| 70 | `NRvf.b0OW` | func | `(i32 i32) -> ()` |
| 71 | `NRvf.KIaK` | func | `(i32 i32 i32) -> ()` |
| 72 | `NRvf.s4x0` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `NRvf.oYqt` | func | `(i32 i32 i32) -> ()` |
| 74 | `NRvf.NzrU` | func | `(i32) -> ()` |
| 75 | `NRvf.jBP4` | func | `(i32 i32) -> ()` |
| 76 | `NRvf.gCyw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `NRvf.y4bQ` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `NRvf.PUfa` | func | `(i32 i32 i32) -> ()` |
| 79 | `NRvf.ZY6A` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `NRvf.Ndwq` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `NRvf.MFVU` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `NRvf.aNKm` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `NRvf.Lz87` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `NRvf.ZXqG` | func | `(i32 i32 i32) -> ()` |
| 85 | `NRvf.OTsZ` | func | `(i32 i32) -> (i32)` |
| 86 | `NRvf.sYVm` | func | `(i32) -> (i32)` |
| 87 | `NRvf.KTZE` | func | `(i32) -> (i32)` |
| 88 | `NRvf.IoSG` | func | `(i32) -> (i32)` |
| 89 | `NRvf.F7h3` | func | `(i32 i32) -> (i32)` |
| 90 | `NRvf.eUcQ` | func | `(i32) -> ()` |
| 91 | `NRvf.XKGR` | func | `(i32) -> (i32)` |
| 92 | `NRvf.QZ8X` | func | `(i32 i32) -> (i32)` |
| 93 | `NRvf.Qtwt` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `NRvf.dfOc` | func | `(i32 i32 i32) -> ()` |
| 95 | `NRvf.Cx1C` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `NRvf.uIVm` | func | `() -> (f64)` |
| 97 | `NRvf.HKET` | func | `() -> (f64)` |
| 98 | `NRvf.IVRL` | func | `(i32 i32) -> ()` |
| 99 | `NRvf.ci5k` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `NRvf.lSPx` | func | `(i32) -> (i32)` |
| 101 | `NRvf.vkCW` | func | `(i32) -> (i32)` |
| 102 | `NRvf.ara9` | func | `(i32) -> (i32)` |
| 103 | `NRvf.pMSG` | func | `() -> (i32)` |
| 104 | `NRvf.faNs` | func | `() -> (i32)` |
| 105 | `NRvf.jf2z` | func | `() -> (i32)` |
| 106 | `NRvf.sUBz` | func | `() -> (i32)` |
| 107 | `NRvf.MT5h` | func | `(i32 i32) -> (i32)` |
| 108 | `NRvf.XBWH` | func | `(i32) -> ()` |
| 109 | `NRvf.FPwo` | func | `(i32 i32) -> (i32)` |
| 110 | `NRvf.lYTG` | func | `(i32) -> (i32)` |
| 111 | `NRvf.UEOz` | func | `() -> (f64)` |
| 112 | `NRvf.i5s1` | func | `(i32) -> (i32)` |
| 113 | `NRvf.UWOi` | func | `(i32 i32) -> ()` |
| 114 | `NRvf.zO0p` | func | `(i32 i32) -> ()` |
| 115 | `NRvf.VW0C` | func | `(i32 i32) -> ()` |
| 116 | `NRvf.uRKF` | func | `(i32 f32) -> ()` |
| 117 | `NRvf.iFez` | func | `(i32 f32) -> ()` |
| 118 | `NRvf.W7x4` | func | `(i32 i32) -> ()` |
| 119 | `NRvf.s1XC` | func | `(i32 i32) -> ()` |
| 120 | `NRvf.PTRj` | func | `(i32 i32) -> ()` |
| 121 | `NRvf.pVLj` | func | `(i32 i32) -> ()` |
| 122 | `NRvf.Xhjz` | func | `(i32 i32 i32) -> ()` |
| 123 | `NRvf.nPCN` | func | `(i32 i32) -> (i32)` |
| 124 | `NRvf.YcSY` | func | `(i32 i32) -> ()` |
| 125 | `NRvf.KhKh` | func | `(i32 i32) -> ()` |
| 126 | `NRvf.bE3U` | func | `(i32 i32) -> ()` |
| 127 | `NRvf.YOz1` | func | `(i32 i32) -> ()` |
| 128 | `NRvf.BnBC` | func | `(i32 f64) -> ()` |
| 129 | `NRvf.PX8w` | func | `(i32 f64) -> ()` |
| 130 | `NRvf.QkYk` | func | `(i32 i32) -> ()` |
| 131 | `NRvf.YlGl` | func | `(i32 i32 i32) -> ()` |
| 132 | `NRvf.llD9` | func | `(i32 i32) -> ()` |
| 133 | `NRvf.cr6v` | func | `(i32 i32) -> (i32)` |
| 134 | `NRvf.o77d` | func | `(i32 i32 i32) -> ()` |
| 135 | `NRvf.uLoC` | func | `(i32 i32 i32) -> ()` |
| 136 | `NRvf.NriQ` | func | `(i32 i32) -> (i32)` |
| 137 | `NRvf.W7U7` | func | `(i32 i32) -> (i32)` |
| 138 | `NRvf.ZO39` | func | `(i32 i32 i32) -> ()` |
| 139 | `NRvf.K7SO` | func | `(i32 i32 i32) -> ()` |
| 140 | `NRvf.cTZb` | func | `(i32 i32) -> (i32)` |
| 141 | `NRvf.l5r6` | func | `(i32 i32) -> ()` |
| 142 | `NRvf.jqVy` | func | `(i32 i32) -> ()` |
| 143 | `NRvf.gko6` | func | `(i32 i32) -> ()` |
| 144 | `NRvf.KbTJ` | func | `(i32 i32) -> ()` |
| 145 | `NRvf.MSax` | func | `(i32 i32) -> ()` |
| 146 | `NRvf.CAqC` | func | `(i32 i32) -> ()` |
| 147 | `NRvf.CCEl` | func | `(i32 i32) -> ()` |
| 148 | `NRvf.jDGe` | func | `(i32 f64) -> ()` |
| 149 | `NRvf.vuV6` | func | `(i32 i32) -> ()` |
| 150 | `NRvf.LGfN` | func | `(i32 i32) -> ()` |
| 151 | `NRvf.DVa7` | func | `(i32 i32) -> ()` |
| 152 | `NRvf.lQ9P` | func | `(i32 i32) -> ()` |
| 153 | `NRvf.i3hz` | func | `(i32 i32) -> ()` |
| 154 | `NRvf.D2GJ` | func | `(i32 i32) -> ()` |
| 155 | `NRvf.vMbU` | func | `(i32 i32) -> ()` |
| 156 | `NRvf.CJ96` | func | `(i32 i32) -> ()` |
| 157 | `NRvf.HqHA` | func | `(i32 i32) -> ()` |
| 158 | `NRvf.HF5A` | func | `(i32 i32 i32) -> ()` |
| 159 | `NRvf.V9DC` | func | `(i32 i32 i32) -> ()` |
| 160 | `NRvf.mq60` | func | `(i32 i32) -> (i32)` |
| 161 | `NRvf.LLOH` | func | `(i32 i32) -> (i32)` |
| 162 | `NRvf.sAvT` | func | `(i32 i32) -> ()` |
| 163 | `NRvf.Zy27` | func | `(i32 i32) -> ()` |
| 164 | `NRvf.Ua6x` | func | `(i32 f64) -> ()` |
| 165 | `NRvf.gHJY` | func | `(i32 i32) -> ()` |
| 166 | `NRvf.gNUL` | func | `(i32 i32) -> ()` |
| 167 | `NRvf.Tlg7` | func | `(i32 i32) -> ()` |
| 168 | `NRvf.JOOt` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `NRvf.Sd9I` | func | `(i32 f64) -> ()` |
| 170 | `NRvf.qhzp` | func | `(i32 f64) -> ()` |
| 171 | `NRvf.T6qT` | func | `(i32 f64) -> ()` |
| 172 | `NRvf.LiDx` | func | `(i32 f64) -> ()` |
| 173 | `NRvf.CSjG` | func | `(i32 i32) -> ()` |
| 174 | `NRvf.IrMl` | func | `(i32 i32) -> ()` |
| 175 | `NRvf.fIOo` | func | `(i32 i32) -> ()` |
| 176 | `NRvf.vo9Q` | func | `(i32 i32) -> ()` |
| 177 | `NRvf.jzOX` | func | `(i32 i32) -> ()` |
| 178 | `NRvf.EYRJ` | func | `(i32 i32 i32) -> ()` |
| 179 | `NRvf.WXjY` | func | `(i32 i32) -> ()` |
| 180 | `NRvf.j6Rb` | func | `(i32 f32) -> ()` |
| 181 | `NRvf.Y1On` | func | `(i32 i32) -> ()` |
| 182 | `NRvf.oj7S` | func | `(i32 i32) -> ()` |
| 183 | `NRvf.DPjl` | func | `(i32 i32) -> ()` |
| 184 | `NRvf.vVP8` | func | `(i32 i32) -> ()` |
| 185 | `NRvf.fFBd` | func | `(i32 i32) -> ()` |
| 186 | `NRvf.im2k` | func | `(i32 i32) -> ()` |
| 187 | `NRvf.MfGe` | func | `(i32 i32) -> ()` |
| 188 | `NRvf.jI8M` | func | `(i32 i32) -> ()` |
| 189 | `NRvf.Yr7V` | func | `(i32 i32) -> ()` |
| 190 | `NRvf.u1Fa` | func | `(i32 i32) -> ()` |
| 191 | `NRvf.oFJq` | func | `(i32 i32) -> ()` |
| 192 | `NRvf.CXMN` | func | `(i32 i32) -> ()` |
| 193 | `NRvf.bdM6` | func | `(i32 i32) -> (i32)` |
| 194 | `NRvf.Usra` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `NRvf.c0zl` | func | `(i32 i32) -> ()` |
| 196 | `NRvf.Qsu0` | func | `(i32 i32 i32) -> ()` |
| 197 | `NRvf.upQl` | func | `(i32 i32) -> (i32)` |
| 198 | `NRvf.QPTs` | func | `(i32) -> (i32)` |
| 199 | `NRvf.IR73` | func | `(i32 i32) -> ()` |
| 200 | `NRvf.IfQ3` | func | `(i32 i32) -> ()` |
| 201 | `NRvf.Ih5K` | func | `(i32 i32) -> ()` |
| 202 | `NRvf.Lit9` | func | `(i32 i32) -> ()` |
| 203 | `NRvf.rHYx` | func | `(i32 i32) -> ()` |
| 204 | `NRvf.fCWu` | func | `(i32 i32) -> ()` |
| 205 | `NRvf.y0OG` | func | `(i32 i32) -> ()` |
| 206 | `NRvf.NLNe` | func | `(i32 i32) -> ()` |
| 207 | `NRvf.NvY2` | func | `(i32) -> (i32)` |
| 208 | `NRvf.EYDK` | func | `(i32 i32 i32) -> ()` |
| 209 | `NRvf.W6NO` | func | `(i32 i32) -> ()` |
| 210 | `NRvf.U9oT` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `NRvf.VPn2` | func | `(i32 i32) -> ()` |
| 212 | `NRvf.oiEU` | func | `(i32) -> ()` |
| 213 | `NRvf.Rb5T` | func | `(i32 i32) -> ()` |
| 214 | `NRvf.HiL5` | func | `(i32) -> (i32)` |
| 215 | `NRvf.PSGQ` | func | `(i32 i32 i32) -> ()` |
| 216 | `NRvf.fkJL` | func | `(i32 i32) -> ()` |
| 217 | `NRvf.FZ3I` | func | `(i32 i32) -> ()` |
| 218 | `NRvf.OZ7v` | func | `(i32 i32) -> ()` |
| 219 | `NRvf.ZDNc` | func | `(i32 i32) -> ()` |
| 220 | `NRvf.di3e` | func | `(i32 i32) -> (i32)` |
| 221 | `NRvf.qO6l` | func | `(i32 i32) -> ()` |
| 222 | `NRvf.iFCN` | func | `(i32 i32) -> ()` |
| 223 | `NRvf.E818` | func | `(i32 i32) -> ()` |
| 224 | `NRvf.HdMg` | func | `(i32 i32) -> ()` |
| 225 | `NRvf.cdz8` | func | `(i32 i32) -> ()` |
| 226 | `NRvf.rNdh` | func | `(i32 i32) -> ()` |
| 227 | `NRvf.kYa9` | func | `(i32 i32) -> ()` |
| 228 | `NRvf.fJHT` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `NRvf.Icsh` | func | `(i32) -> (i32)` |
| 230 | `NRvf.RJAn` | func | `(i32) -> ()` |
| 231 | `NRvf.CdqL` | func | `(i32 f64) -> ()` |
| 232 | `NRvf.NIDb` | func | `(i32 i32) -> ()` |
| 233 | `NRvf.h2pV` | func | `(i32 i32) -> ()` |
| 234 | `NRvf.ZgPL` | func | `(i32 i32 i32) -> ()` |
| 235 | `NRvf.F7Ad` | func | `(i32 i32) -> (i32)` |
| 236 | `NRvf.Vr8r` | func | `(i32 i32) -> ()` |
| 237 | `NRvf.DOmJ` | func | `(i32 i32) -> ()` |
| 238 | `NRvf.Sbf4` | func | `(i32 i32) -> ()` |
| 239 | `NRvf.WU8Q` | func | `(i32 i32 i32) -> ()` |
| 240 | `NRvf.w6uW` | func | `(i32 i32) -> ()` |
| 241 | `NRvf.vxHy` | func | `(i32 i32) -> ()` |
| 242 | `NRvf.oxGY` | func | `(i32 i32) -> ()` |
| 243 | `NRvf.mIc4` | func | `(i32 i32 i32) -> ()` |
| 244 | `NRvf.MiBR` | func | `(i32 i32) -> ()` |
| 245 | `NRvf.cNBp` | func | `(i32 i32) -> ()` |
| 246 | `NRvf.FE0P` | func | `(i32 i32 i32) -> ()` |
| 247 | `NRvf.TO8c` | func | `(i32 i32) -> (i32)` |
| 248 | `NRvf.RKG3` | func | `(i32 i32) -> ()` |
| 249 | `NRvf.GV7r` | func | `(i32 i32 i32) -> ()` |
| 250 | `NRvf.BvcI` | func | `(i32 i32) -> ()` |
| 251 | `NRvf.hmDc` | func | `(i32 f64) -> ()` |
| 252 | `NRvf.fGUu` | func | `(i32 i32) -> ()` |
| 253 | `NRvf.M0SH` | func | `(i32 f64) -> ()` |
| 254 | `NRvf.RPBQ` | func | `(i32 i32 i32) -> ()` |
| 255 | `NRvf.u0kL` | func | `(i32 i32) -> ()` |
| 256 | `NRvf.EaLW` | func | `(i32 i32 i32) -> ()` |
| 257 | `NRvf.yjJe` | func | `(i32 i32) -> ()` |
| 258 | `NRvf.PbH0` | func | `(i32 i32) -> ()` |
| 259 | `NRvf.xOJ7` | func | `(i32 i32) -> ()` |
| 260 | `NRvf.j67r` | func | `(i32 i32 i32) -> ()` |
| 261 | `NRvf.vnTP` | func | `(i32 i32) -> ()` |
| 262 | `NRvf.pXKG` | func | `(i32 i32) -> ()` |
| 263 | `NRvf.Ewu2` | func | `(i32 i32) -> ()` |
| 264 | `NRvf.eYUB` | func | `(i32 i32) -> ()` |
| 265 | `NRvf.zVEq` | func | `(i32 f32) -> ()` |
| 266 | `NRvf.ajH7` | func | `(i32 f32) -> ()` |
| 267 | `NRvf.pi3o` | func | `(i32 i32) -> ()` |
| 268 | `NRvf.YP54` | func | `(i32 i32) -> ()` |
| 269 | `NRvf.ACnA` | func | `(i32 i32) -> ()` |
| 270 | `NRvf.YnUm` | func | `(i32 i32) -> ()` |
| 271 | `NRvf.iJ0c` | func | `(i32 i32) -> ()` |
| 272 | `NRvf.gW1L` | func | `(i32 i32) -> ()` |
| 273 | `NRvf.kzgZ` | func | `(i32 i32) -> ()` |
| 274 | `NRvf.tDJJ` | func | `(i32 i32) -> ()` |
| 275 | `NRvf.XNuc` | func | `(i32 i32) -> ()` |
| 276 | `NRvf.SRae` | func | `(i32 i32) -> ()` |
| 277 | `NRvf.HmYj` | func | `(i32 i32) -> ()` |
| 278 | `NRvf.qdsH` | func | `(i32 i32) -> ()` |
| 279 | `NRvf.do3d` | func | `(i32 i32) -> ()` |
| 280 | `NRvf.hOyH` | func | `(i32 i32) -> ()` |
| 281 | `NRvf.kOnt` | func | `(i32 i32) -> ()` |
| 282 | `NRvf.TBof` | func | `(i32 i32) -> ()` |
| 283 | `NRvf.BmQB` | func | `(i32 i32) -> ()` |
| 284 | `NRvf.Eb4Y` | func | `(i32 i32) -> ()` |
| 285 | `NRvf.FLky` | func | `(i32 i32 i32) -> ()` |
| 286 | `NRvf.M30a` | func | `(i32 i32 i32) -> ()` |
| 287 | `NRvf.nZe2` | func | `(i32 i32) -> ()` |
| 288 | `NRvf.agku` | func | `(i32 i32) -> ()` |
| 289 | `NRvf.XnSw` | func | `(i32 i32) -> ()` |
| 290 | `NRvf.aodc` | func | `(i32 i32) -> ()` |
| 291 | `NRvf.ZAmm` | func | `(i32 i32) -> ()` |
| 292 | `NRvf.sepx` | func | `(i32 i32) -> ()` |
| 293 | `NRvf.VlcU` | func | `(i32 i32) -> ()` |
| 294 | `NRvf.PHd3` | func | `(i32 i32) -> ()` |
| 295 | `NRvf.fRCM` | func | `(i32 i32) -> ()` |
| 296 | `NRvf.WURQ` | func | `(i32 i32) -> ()` |
| 297 | `NRvf.yeeB` | func | `(i32 i32) -> ()` |
| 298 | `NRvf.VNm3` | func | `(i32 i32) -> (i32)` |
| 299 | `NRvf.Bomh` | func | `(i32 i32) -> ()` |
| 300 | `NRvf.aoqR` | func | `(i32 i32 i32) -> ()` |
| 301 | `NRvf.iZXM` | func | `(i32 i32) -> ()` |
| 302 | `NRvf.YxMg` | func | `(i32 i32) -> ()` |
| 303 | `NRvf.BDxM` | func | `(i32 i32) -> ()` |
| 304 | `NRvf.i6m7` | func | `(i32 i32 i32) -> ()` |
| 305 | `NRvf.z0i6` | func | `(i32 i32) -> (i32)` |
| 306 | `NRvf.Vbsv` | func | `(i32 i32 i32) -> ()` |
| 307 | `NRvf.RsQY` | func | `(i32 i32 i32) -> ()` |
| 308 | `NRvf.GbPu` | func | `(i32 i32) -> ()` |
| 309 | `NRvf.m2d5` | func | `(i32 i32) -> ()` |
| 310 | `NRvf.hXmL` | func | `(i32 i32) -> ()` |
| 311 | `NRvf.mT6f` | func | `(i32 i32) -> ()` |
| 312 | `NRvf.waCm` | func | `(i32 i32) -> (i32)` |
| 313 | `NRvf.cozl` | func | `(i32) -> (i32)` |
| 314 | `NRvf.ncoG` | func | `(i32) -> (i32)` |
| 315 | `NRvf.qQRO` | func | `(i32) -> (i32)` |
| 316 | `NRvf.oiGC` | func | `(i32) -> (i32)` |
| 317 | `NRvf.AF0n` | func | `(i32) -> (i32)` |
| 318 | `NRvf.n3eO` | func | `(i32) -> (i32)` |
| 319 | `NRvf.cwaZ` | func | `(i32) -> (i32)` |
| 320 | `NRvf.RCtC` | func | `(i32) -> (i32)` |
| 321 | `NRvf.d7jE` | func | `(i32) -> (i32)` |
| 322 | `NRvf.c1Jw` | func | `(i32) -> (i32)` |
| 323 | `NRvf.P7hS` | func | `(i32) -> (i32)` |
| 324 | `NRvf.i8dV` | func | `(i32) -> (i32)` |
| 325 | `NRvf.enQG` | func | `(i32) -> (i32)` |
| 326 | `NRvf.Niug` | func | `(i32) -> (i32)` |
| 327 | `NRvf.fymE` | func | `(i32) -> (f64)` |
| 328 | `NRvf.y9g5` | func | `(i32) -> (f64)` |
| 329 | `NRvf.x4LV` | func | `(i32) -> (i32)` |
| 330 | `NRvf.Cl7h` | func | `(i32) -> (f64)` |
| 331 | `NRvf.ASGU` | func | `(i32) -> (i32)` |
| 332 | `NRvf.MO2B` | func | `(i32) -> (i32)` |
| 333 | `NRvf.LY5K` | func | `(i32) -> (i32)` |
| 334 | `NRvf.ExWT` | func | `(i32) -> (i32)` |
| 335 | `NRvf.JsCM` | func | `(i32) -> (i32)` |
| 336 | `NRvf.o1Ia` | func | `(i32) -> (i32)` |
| 337 | `NRvf.cFh2` | func | `(i32) -> (i32)` |
| 338 | `NRvf.gjaJ` | func | `(i32) -> (i32)` |
| 339 | `NRvf.nL2s` | func | `(i32) -> (i32)` |
| 340 | `NRvf.GEP6` | func | `(i32) -> (i32)` |
| 341 | `NRvf.x7qc` | func | `(i32) -> (i32)` |
| 342 | `NRvf.ikRS` | func | `(i32) -> (i32)` |
| 343 | `NRvf.HJaz` | func | `(i32) -> (i32)` |
| 344 | `NRvf.lZfS` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `NRvf.PFLS` | func | `() -> (i32)` |
| 346 | `NRvf.hYTH` | func | `(i32 i32) -> ()` |
| 347 | `NRvf.tqgW` | func | `(i32 i32 i32) -> ()` |
| 348 | `NRvf.AOPf` | func | `(i32 i32 i32) -> ()` |
| 349 | `NRvf.Gmtb` | func | `(i32 i32) -> (i32)` |
| 350 | `NRvf.ydjA` | func | `(i32) -> (i32)` |
| 351 | `NRvf.WKAj` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `NRvf.APxi` | func | `(i32) -> ()` |
| 353 | `NRvf.H0pV` | func | `(i32) -> (i32)` |
| 354 | `NRvf.WiFR` | func | `(i32 i32) -> ()` |
| 355 | `NRvf.u5xL` | func | `(i32) -> (i32)` |
| 356 | `NRvf.Wlld` | func | `(i32) -> (i32)` |
| 357 | `NRvf.lKnB` | func | `(i32) -> (i32)` |
| 358 | `NRvf.TYR3` | func | `(i32) -> (i32)` |
| 359 | `NRvf.ramC` | func | `(i32) -> (i32)` |
| 360 | `NRvf.FQzm` | func | `(i32 i32) -> ()` |
| 361 | `NRvf.TMmU` | func | `(i32 i32) -> ()` |
| 362 | `NRvf.U3Zc` | func | `(i32 i32) -> ()` |
| 363 | `NRvf.b8OL` | func | `(i32 i32) -> ()` |
| 364 | `NRvf.x0ZS` | func | `(i32 i32) -> ()` |
| 365 | `NRvf.Zmtw` | func | `(i32 i32) -> ()` |
| 366 | `NRvf.yuwM` | func | `(i32 i32) -> ()` |
| 367 | `NRvf.jdMo` | func | `(i32 i32 i32) -> ()` |
| 368 | `NRvf.tsDd` | func | `(i32 i32) -> ()` |
| 369 | `NRvf.rjo5` | func | `(i32 i32) -> (i32)` |
| 370 | `NRvf.nPQI` | func | `(i32) -> (i32)` |
| 371 | `NRvf.s756` | func | `(i32) -> (i32)` |
| 372 | `NRvf.NOF6` | func | `(i32 i32) -> ()` |
| 373 | `NRvf.gMeC` | func | `(i32) -> (i32)` |
| 374 | `NRvf.X42X` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `NRvf.FEtS` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `NRvf.Jznd` | func | `(i32 i32) -> ()` |
| 377 | `NRvf.l7Hq` | func | `(i32) -> (i32)` |
| 378 | `NRvf.rAJU` | func | `(i32) -> (i32)` |
| 379 | `NRvf.rQRO` | func | `(i32) -> (i32)` |
| 380 | `NRvf.TSBD` | func | `(i32) -> (i32)` |
| 381 | `NRvf.TmCk` | func | `(i32) -> (i32)` |
| 382 | `NRvf.wb21` | func | `(i32) -> (i32)` |
| 383 | `NRvf.RWwA` | func | `(i32 i32) -> ()` |
| 384 | `NRvf.xnRq` | func | `(i32 i32) -> (i32)` |
| 385 | `NRvf.h9RS` | func | `(i32 i32) -> (i32)` |
| 386 | `NRvf.RlP7` | func | `(i32 i32) -> (i32)` |
| 387 | `NRvf.z5jv` | func | `(i32 i32) -> (i32)` |
| 388 | `NRvf.cxKA` | func | `(i32 i32) -> (i32)` |
| 389 | `NRvf.qDE9` | func | `(i32 i32) -> (i32)` |
| 390 | `NRvf.PC4v` | func | `(f64) -> (i32)` |
| 391 | `NRvf.azmz` | func | `(i32 i32) -> (i32)` |
| 392 | `NRvf.OH1X` | func | `(i32 i32) -> (i32)` |

## Exports

163 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `gqMp` | func | 3154 | `(i32) -> (i32 i32)` |
| `WUjf` | func | 2701 | `(i32 i32) -> ()` |
| `vGVl` | func | 2587 | `(i32) -> (i32)` |
| `Zuxt` | func | 1917 | `() -> (i32)` |
| `c4GH` | func | 3139 | `(i32 i32) -> (i32 i32)` |
| `E2UV` | func | 3101 | `(i32 i32) -> (i32)` |
| `p20a` | func | 1968 | `(i32 i32) -> ()` |
| `NGqZ` | func | 3195 | `(i32 i32 i32 i32) -> ()` |
| `T5IF` | func | 1475 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `mhEa` | func | 1425 | `(i32 i32 i32) -> (i32)` |
| `SbIA` | func | 2564 | `(i32) -> (i32)` |
| `Cr6A` | func | 2650 | `(i32 i32) -> ()` |
| `gN1b` | func | 1533 | `() -> (i32)` |
| `Uj2H` | func | 1820 | `(i32) -> (i32)` |
| `dxzI` | func | 2884 | `(i32) -> (i32)` |
| `QNu0` | func | 3206 | `(i32 i32 i32) -> ()` |
| `f1AB` | func | 2585 | `(i32) -> ()` |
| `pahK` | func | 1536 | `(i32) -> (i32)` |
| `rZs5` | func | 3114 | `(i32 i32) -> ()` |
| `pZjT` | func | 772 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `MKdI` | func | 1501 | `(i32 i32) -> (i32)` |
| `MGqs` | func | 2621 | `(i32) -> (i32)` |
| `HAKt` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `tKde` | func | 2604 | `(i32) -> (i32)` |
| `Qurm` | func | 2583 | `(i32) -> (i32)` |
| `sl2d` | func | 1985 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `ci8Z` | func | 3348 | `() -> (i32)` |
| `HqYQ` | func | 3081 | `() -> ()` |
| `eJ1W` | func | 1962 | `(i32 i32 f64 f64 f64) -> ()` |
| `Dlvc` | func | 2597 | `(i32 i32) -> ()` |
| `HP7P` | func | 1679 | `(i32 i32) -> (i32)` |
| `WTsF` | func | 1940 | `(i32 i32 i32 i32) -> (i32)` |
| `ySwR` | func | 2058 | `(i32 i32 i32 i32) -> ()` |
| `EmCM` | func | 2056 | `(i32) -> (i32)` |
| `b1Kd` | func | 1588 | `(i32 i32) -> (i32)` |
| `Fr6l` | func | 2953 | `(i32) -> (i32)` |
| `qj50` | func | 1555 | `(i32 i32 i32 i32) -> ()` |
| `NyLI` | func | 1602 | `(i32 i32) -> (i32)` |
| `FH0F` | func | 1695 | `(i32 f64 f64 f64) -> (i32)` |
| `mboO` | func | 1924 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `L0mi` | func | 2610 | `(i32) -> (i32)` |
| `fewU` | func | 836 | `(i32) -> (i32)` |
| `A9QJ` | func | 705 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Y3JL` | func | 2440 | `(i32 i32) -> (i32)` |
| `Uwqc` | func | 2439 | `(i32 i32) -> (i32)` |
| `A1iv` | func | 3275 | `() -> ()` |
| `stzi` | func | 3319 | `() -> (f64)` |
| `qUSL` | func | 2134 | `(i32 f64 f64 f64) -> (i32)` |
| `opD2` | func | 2578 | `(i32) -> (f64)` |
| `zCtx` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `M52K` | func | 3141 | `(i32 i32) -> (i32 i32)` |
| `WLJi` | func | 1844 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `mqj7` | func | 1618 | `(i32 f64) -> (f64)` |
| `Clea` | func | 2586 | `(i32) -> (i32)` |
| `lASF` | func | 2358 | `(i32 i32) -> ()` |
| `HKtN` | func | 2285 | `(i32 i32) -> (i32)` |
| `hBgZ` | func | 1978 | `(i32 i32) -> (i32)` |
| `OvH4` | func | 1302 | `(i32 i32 i32 i32) -> (i32)` |
| `BBOG` | func | 2563 | `(i32 i32) -> ()` |
| `pgHx` | func | 1575 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `A49C` | func | 3156 | `(i32) -> (i32 i32)` |
| `Vhqr` | func | 2892 | `(i32) -> (i32)` |
| `LOo4` | func | 2919 | `(i32) -> (i32)` |
| `HQgR` | func | 3155 | `(i32) -> (i32 i32)` |
| `Jq9S` | func | 2581 | `(i32) -> (i32)` |
| `Xh98` | func | 3170 | `() -> (i32 i32)` |
| `FQa2` | func | 1838 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `xg4B` | func | 1309 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `EAFA` | func | 1691 | `(i32 i32) -> ()` |
| `tdbY` | func | 2359 | `(i32 f64) -> (i32)` |
| `q3CV` | func | 2930 | `(i32) -> ()` |
| `UXc9` | func | 2908 | `(i32) -> (i32)` |
| `qVmx` | func | 1301 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `MiCW` | func | 1994 | `(i32) -> ()` |
| `NuGd` | func | 2588 | `(i32) -> (i32)` |
| `hmIq` | func | 3323 | `(i32) -> (i32)` |
| `LJHE` | func | 3153 | `(i32) -> (i32 i32)` |
| `I1Jp` | func | 3168 | `() -> (i32 i32)` |
| `GGIL` | func | 1354 | `(i32 i32 i32) -> ()` |
| `tEZZ` | func | 839 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `iOYl` | func | 3142 | `(i32 i32) -> (i32 i32)` |
| `GnkG` | func | 2150 | `(i32 i32) -> ()` |
| `lzt7` | func | 1205 | `(i32 i32) -> (i32)` |
| `UbSX` | func | 762 | `(i32 i32) -> (i32)` |
| `aCcX` | func | 1476 | `(i32 f64 f64) -> (i32)` |
| `zmaE` | func | 1375 | `(i32) -> (i32)` |
| `hW1s` | func | 2532 | `(i32) -> (i32)` |
| `YCWc` | func | 1797 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `WAds` | func | 2306 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `o5Tv` | func | 3169 | `() -> (i32 i32)` |
| `JWrE` | func | 1993 | `(i32) -> ()` |
| `dE1G` | func | 2611 | `(i32 i32) -> (i32)` |
| `rKD9` | func | 1580 | `(i32 i32 i32 i32) -> (i32)` |
| `ziUJ` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `WAcx` | func | 1004 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ISPC` | func | 1382 | `(i32 i32) -> (i32)` |
| `Uqzh` | func | 1206 | `(i32 i32) -> ()` |
| `qm98` | func | 3108 | `(i32 i32 i32 i32) -> (i32)` |
| `y232` | func | 1262 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `EH2G` | func | 802 | `(i32 i32) -> (i32)` |
| `TW8e` | func | 1581 | `(i32) -> (i32)` |
| `r7bw` | func | 2579 | `(i32) -> (i32)` |
| `zkTE` | func | 2473 | `(i32 i32) -> (i32)` |
| `WzIB` | func | 2117 | `(i32 f64) -> (i32)` |
| `Sjjh` | func | 2584 | `(i32) -> (i32)` |
| `BVB5` | func | 1733 | `(i32 i32 i32 i32) -> (i32)` |
| `NYDv` | func | 2488 | `(i32 i32 i32 i32) -> (i32)` |
| `TSIK` | func | 3204 | `(i32 i32 i32) -> (i32)` |
| `Dbjc` | func | 2602 | `(i32) -> (i32)` |
| `XhnA` | func | 1629 | `(i32 i32 i32) -> (i32)` |
| `M8bh` | func | 940 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `zVoE` | func | 2603 | `(i32 i32) -> ()` |
| `AeZ4` | func | 1615 | `(i32 i32) -> (i32)` |
| `FzKb` | func | 3349 | `() -> (i32)` |
| `wdWx` | func | 832 | `(i32 i32 i32 i32) -> (i32)` |
| `Qzxg` | func | 1528 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `uxMv` | func | 2039 | `(i32) -> (i32)` |
| `Xg8P` | func | 2619 | `(i32) -> (i32)` |
| `BDIM` | func | 1412 | `(i32 i32) -> (i32)` |
| `qsgN` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `Fk7W` | func | 3144 | `(i32 i32) -> (i32 i32)` |
| `EKkN` | func | 1570 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `DKXn` | func | 2668 | `() -> (i32)` |
| `pNkd` | func | 2601 | `(i32) -> (i32)` |
| `msvN` | func | 1350 | `(i32 i32 i32) -> (i32)` |
| `P1wO` | func | 2247 | `(i32 i32) -> (i32)` |
| `goQf` | func | 1616 | `(i32 i32) -> (i32)` |
| `aDHk` | func | 2702 | `() -> (i32)` |
| `CBlH` | func | 1331 | `(i32 i32) -> (i32)` |
| `pMtK` | func | 2437 | `(i32 i32) -> (i32)` |
| `jZXR` | global | 2 | `` |
| `N8YZ` | func | 3264 | `(i32 i32 i32) -> ()` |
| `W2xW` | func | 2515 | `(i32) -> (i32)` |
| `EcI1` | func | 2620 | `(i32) -> (i32)` |
| `F95Z` | func | 3273 | `(i32) -> ()` |
| `BauU` | func | 3145 | `(i32 i32) -> (i32 i32)` |
| `hHN8` | func | 992 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `ySil` | func | 3324 | `(i32) -> ()` |
| `tiyi` | func | 3132 | `(i32 i32 i32) -> (i32 i32)` |
| `Jbez` | func | 3344 | `(f64) -> (f64)` |
| `Kx2y` | func | 1408 | `(i32) -> ()` |
| `LX6W` | func | 2174 | `(i32 i32) -> (i32)` |
| `wXps` | func | 2091 | `(i32 i32) -> ()` |
| `NYbs` | func | 975 | `(i32 i32) -> (i32)` |
| `lEtf` | func | 3140 | `(i32 i32) -> (i32 i32)` |
| `x60v` | func | 1690 | `(i32 i32) -> ()` |
| `hase` | func | 3234 | `() -> (i32)` |
| `FIIZ` | func | 3143 | `(i32 i32) -> (i32 i32)` |
| `t2KX` | func | 778 | `(i32 i32) -> (i32)` |
| `clWV` | func | 974 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `qTGe` | func | 2385 | `(i32 i32) -> ()` |
| `Yqjg` | func | 2438 | `(i32 i32) -> (i32)` |
| `XM5y` | func | 3152 | `(i32) -> (i32 i32)` |
| `GkAs` | func | 2582 | `(i32) -> (i32)` |
| `CfHL` | func | 2483 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `NEtZ` | func | 853 | `(i32 i32 i32) -> (i32)` |
| `pRoW` | func | 1857 | `(i32 i32) -> (i32)` |
| `c45j` | func | 2580 | `(i32) -> (i32)` |
| `sGDn` | func | 1650 | `(i32 i32 i32 i32) -> (i32)` |
| `ptlv` | global | 1 | `` |
| `kvkq` | func | 662 | `(i32 i32 i32) -> (i32)` |
| `hVa8` | func | 2612 | `(i32 i32) -> (i32)` |

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
