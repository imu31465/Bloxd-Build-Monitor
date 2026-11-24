# WASM module: `bloxd_wasm_webgpu_bg`

> environment **staging.bloxd.io** · build `tz47m9.2cb7e113` · analyzed 2026-11-24T17:23:02+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgpu_bg.89fa4089475d6fedc310.wasm
> 5,121,192 bytes (4.9 MB) · sha256 `aaf47b22bd97d7f9…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `129385525e514b2e.12255` → `7c602b0ff134680d.12255` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/159 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,939 / 393 |
| Exports / imports | 159 / 394 |
| Code bytes (function bodies) | 4,038,717 (3.9 MB) |
| Total local variables | 30,717 |
| Instructions (scanable bodies) | 1,889,737 |
| Data segments / bytes | 3,545 / 1,036,149 |
| Element segments / entries | 1 / 837 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `7c602b0ff134680d.12255` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,510 | 176 |
| 2 | import | 4,734 | 394 |
| 3 | function | 2,989 | 2939 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,273 | 159 |
| 9 | element | 1,681 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,044,075 | 2939 |
| 11 | data | 1,064,826 | 3545 |
| 0 | custom:name | 30 | — |

## Types

176 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `cBkH.ZvMU` | memory | `[128..14648]` |
| 0 | `cBkH.kziI` | func | `(i32) -> (i32)` |
| 1 | `cBkH.JTer` | func | `(i32) -> (f64)` |
| 2 | `cBkH.cdPe` | func | `() -> (i32)` |
| 3 | `cBkH.nall` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `cBkH.dqji` | func | `(i32) -> ()` |
| 5 | `cBkH.orSX` | func | `(i32 i32) -> (i32)` |
| 6 | `cBkH.A5VZ` | func | `(i32) -> (i32)` |
| 7 | `cBkH.oKEI` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `cBkH.zk9F` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `cBkH.Urc3` | func | `(i32) -> (i32)` |
| 10 | `cBkH.txFB` | func | `(i32 i32) -> ()` |
| 11 | `cBkH.HATr` | func | `(i32 i32) -> ()` |
| 12 | `cBkH.dX7l` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `cBkH.x1Rz` | func | `(i32 i32) -> (i32)` |
| 14 | `cBkH.CyVX` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `cBkH.Qovo` | func | `(i32) -> (i32)` |
| 16 | `cBkH.d632` | func | `(i32 i32) -> (i32)` |
| 17 | `cBkH.uH2I` | func | `(i32 i32) -> (i32)` |
| 18 | `cBkH.wzcu` | func | `(i32 i32) -> ()` |
| 19 | `cBkH.g1gc` | func | `(i32) -> (i32)` |
| 20 | `cBkH.HNNC` | func | `(i32) -> (i32)` |
| 21 | `cBkH.QTPf` | func | `(i32 i32 i32) -> ()` |
| 22 | `cBkH.l9nK` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `cBkH.vmUE` | func | `(i32) -> (i32)` |
| 24 | `cBkH.L6wN` | func | `(i32) -> (i32)` |
| 25 | `cBkH.x5Hk` | func | `(i32 i32) -> ()` |
| 26 | `cBkH.A3Kl` | func | `(i32 i32) -> (i32)` |
| 27 | `cBkH.XeNl` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `cBkH.mzZX` | func | `(i32) -> (i32)` |
| 29 | `cBkH.RXhD` | func | `(i32) -> (i32)` |
| 30 | `cBkH.InVr` | func | `(i32) -> (i32)` |
| 31 | `cBkH.SgFr` | func | `(i32) -> (i32)` |
| 32 | `cBkH.wXcL` | func | `(i32) -> (i32)` |
| 33 | `cBkH.IFWq` | func | `(i32 i32 i32) -> ()` |
| 34 | `cBkH.BZpj` | func | `(i32 i32) -> (i32)` |
| 35 | `cBkH.jyX7` | func | `(i32) -> (i32)` |
| 36 | `cBkH.GK2P` | func | `(i32) -> ()` |
| 37 | `cBkH.sSfC` | func | `(i32) -> (i32)` |
| 38 | `cBkH.soXg` | func | `(i32) -> (i32)` |
| 39 | `cBkH.QNsU` | func | `(i32) -> ()` |
| 40 | `cBkH.hwEH` | func | `(i32 i32) -> (i32)` |
| 41 | `cBkH.tG9V` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `cBkH.tuwJ` | func | `(i32) -> ()` |
| 43 | `cBkH.mqD6` | func | `(i32 i32) -> ()` |
| 44 | `cBkH.eltX` | func | `() -> (i32)` |
| 45 | `cBkH.TtmT` | func | `(i32 i32) -> (i32)` |
| 46 | `cBkH.LAjp` | func | `(i32 i32) -> (i32)` |
| 47 | `cBkH.cj5p` | func | `(i32) -> (i32)` |
| 48 | `cBkH.ETx3` | func | `(i32) -> (i32)` |
| 49 | `cBkH.dvbM` | func | `(i32) -> (i32)` |
| 50 | `cBkH.EGZb` | func | `(i32 i32) -> ()` |
| 51 | `cBkH.O1Ia` | func | `(i32) -> (i32)` |
| 52 | `cBkH.PB6I` | func | `(i32) -> ()` |
| 53 | `cBkH.ZqY8` | func | `(i32 i32) -> (i32)` |
| 54 | `cBkH.dH7A` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `cBkH.VS90` | func | `(i32) -> (i32)` |
| 56 | `cBkH.C8Rl` | func | `(i32 i32 i32) -> ()` |
| 57 | `cBkH.axtu` | func | `(i32 i32) -> ()` |
| 58 | `cBkH.exBh` | func | `(i32) -> (i32)` |
| 59 | `cBkH.QhmM` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `cBkH.Yw91` | func | `(i32) -> ()` |
| 61 | `cBkH.GuXT` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `cBkH.ArwC` | func | `(i32) -> ()` |
| 63 | `cBkH.roeb` | func | `(i32 i32 i32) -> ()` |
| 64 | `cBkH.fM9p` | func | `(i32 i32) -> ()` |
| 65 | `cBkH.p4mF` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `cBkH.n6Um` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `cBkH.HlE3` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `cBkH.f8pz` | func | `(i32 i32 f64) -> ()` |
| 69 | `cBkH.btEG` | func | `(i32) -> (i32)` |
| 70 | `cBkH.KX84` | func | `(i32 i32) -> ()` |
| 71 | `cBkH.XXsq` | func | `(i32 i32 i32) -> ()` |
| 72 | `cBkH.x7Na` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `cBkH.mwxS` | func | `(i32 i32 i32) -> ()` |
| 74 | `cBkH.bLoy` | func | `(i32) -> ()` |
| 75 | `cBkH.ofnx` | func | `(i32 i32) -> ()` |
| 76 | `cBkH.uae7` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `cBkH.cNdn` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `cBkH.qTdz` | func | `(i32 i32 i32) -> ()` |
| 79 | `cBkH.xmei` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `cBkH.INkD` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `cBkH.dkPI` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `cBkH.B5iq` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `cBkH.Mvvw` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `cBkH.frun` | func | `(i32 i32 i32) -> ()` |
| 85 | `cBkH.Z4l4` | func | `(i32 i32) -> (i32)` |
| 86 | `cBkH.UEoB` | func | `(i32) -> (i32)` |
| 87 | `cBkH.rd1W` | func | `(i32) -> (i32)` |
| 88 | `cBkH.BU1F` | func | `(i32) -> (i32)` |
| 89 | `cBkH.Pkeq` | func | `(i32 i32) -> (i32)` |
| 90 | `cBkH.jQU8` | func | `(i32) -> ()` |
| 91 | `cBkH.nbmI` | func | `(i32) -> (i32)` |
| 92 | `cBkH.CYcE` | func | `(i32 i32) -> (i32)` |
| 93 | `cBkH.Hx5s` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `cBkH.A0gf` | func | `(i32 i32 i32) -> ()` |
| 95 | `cBkH.Mypu` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `cBkH.R3Ir` | func | `() -> (f64)` |
| 97 | `cBkH.z7ca` | func | `() -> (f64)` |
| 98 | `cBkH.J4aP` | func | `(i32 i32) -> ()` |
| 99 | `cBkH.YgfS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `cBkH.wK2v` | func | `(i32) -> (i32)` |
| 101 | `cBkH.qE42` | func | `(i32) -> (i32)` |
| 102 | `cBkH.TNt7` | func | `(i32) -> (i32)` |
| 103 | `cBkH.BNkK` | func | `() -> (i32)` |
| 104 | `cBkH.p5Ye` | func | `() -> (i32)` |
| 105 | `cBkH.tAQU` | func | `() -> (i32)` |
| 106 | `cBkH.oht6` | func | `() -> (i32)` |
| 107 | `cBkH.iCBC` | func | `(i32 i32) -> (i32)` |
| 108 | `cBkH.XI34` | func | `(i32) -> ()` |
| 109 | `cBkH.gfkG` | func | `(i32 i32) -> (i32)` |
| 110 | `cBkH.VwZm` | func | `(i32) -> (i32)` |
| 111 | `cBkH.q7ze` | func | `() -> (f64)` |
| 112 | `cBkH.TRBH` | func | `(i32) -> (i32)` |
| 113 | `cBkH.FqgQ` | func | `(i32 i32) -> ()` |
| 114 | `cBkH.QAvR` | func | `(i32 i32) -> ()` |
| 115 | `cBkH.l8J3` | func | `(i32 i32) -> ()` |
| 116 | `cBkH.T4qk` | func | `(i32 f32) -> ()` |
| 117 | `cBkH.N1sv` | func | `(i32 f32) -> ()` |
| 118 | `cBkH.yTWo` | func | `(i32 i32) -> ()` |
| 119 | `cBkH.oxvn` | func | `(i32 i32) -> ()` |
| 120 | `cBkH.oRW1` | func | `(i32 i32) -> ()` |
| 121 | `cBkH.EX5f` | func | `(i32 i32) -> ()` |
| 122 | `cBkH.cs1v` | func | `(i32 i32 i32) -> ()` |
| 123 | `cBkH.czTC` | func | `(i32 i32) -> (i32)` |
| 124 | `cBkH.TuPr` | func | `(i32 i32) -> ()` |
| 125 | `cBkH.Ki4B` | func | `(i32 i32) -> ()` |
| 126 | `cBkH.QwMt` | func | `(i32 i32) -> ()` |
| 127 | `cBkH.HxLv` | func | `(i32 i32) -> ()` |
| 128 | `cBkH.U55h` | func | `(i32 f64) -> ()` |
| 129 | `cBkH.TxQA` | func | `(i32 f64) -> ()` |
| 130 | `cBkH.zZSg` | func | `(i32 i32) -> ()` |
| 131 | `cBkH.vwdZ` | func | `(i32 i32 i32) -> ()` |
| 132 | `cBkH.Gfch` | func | `(i32 i32) -> ()` |
| 133 | `cBkH.i0BF` | func | `(i32 i32) -> (i32)` |
| 134 | `cBkH.nRYU` | func | `(i32 i32 i32) -> ()` |
| 135 | `cBkH.ELzf` | func | `(i32 i32 i32) -> ()` |
| 136 | `cBkH.S7jw` | func | `(i32 i32) -> (i32)` |
| 137 | `cBkH.uagu` | func | `(i32 i32) -> (i32)` |
| 138 | `cBkH.DxMe` | func | `(i32 i32 i32) -> ()` |
| 139 | `cBkH.LpJ1` | func | `(i32 i32 i32) -> ()` |
| 140 | `cBkH.e2Vw` | func | `(i32 i32) -> (i32)` |
| 141 | `cBkH.HHsJ` | func | `(i32 i32) -> ()` |
| 142 | `cBkH.qFpF` | func | `(i32 i32) -> ()` |
| 143 | `cBkH.oAHL` | func | `(i32 i32) -> ()` |
| 144 | `cBkH.wdIF` | func | `(i32 i32) -> ()` |
| 145 | `cBkH.XNtT` | func | `(i32 i32) -> ()` |
| 146 | `cBkH.eWRm` | func | `(i32 i32) -> ()` |
| 147 | `cBkH.RlJO` | func | `(i32 i32) -> ()` |
| 148 | `cBkH.mIh6` | func | `(i32 f64) -> ()` |
| 149 | `cBkH.VMsZ` | func | `(i32 i32) -> ()` |
| 150 | `cBkH.EKS2` | func | `(i32 i32) -> ()` |
| 151 | `cBkH.dS6v` | func | `(i32 i32) -> ()` |
| 152 | `cBkH.woMV` | func | `(i32 i32) -> ()` |
| 153 | `cBkH.jdx7` | func | `(i32 i32) -> ()` |
| 154 | `cBkH.ZgHQ` | func | `(i32 i32) -> ()` |
| 155 | `cBkH.ip26` | func | `(i32 i32) -> ()` |
| 156 | `cBkH.kgIA` | func | `(i32 i32) -> ()` |
| 157 | `cBkH.nnog` | func | `(i32 i32) -> ()` |
| 158 | `cBkH.ZAvd` | func | `(i32 i32 i32) -> ()` |
| 159 | `cBkH.Pfcb` | func | `(i32 i32 i32) -> ()` |
| 160 | `cBkH.M0FM` | func | `(i32 i32) -> (i32)` |
| 161 | `cBkH.HQtv` | func | `(i32 i32) -> (i32)` |
| 162 | `cBkH.JLTp` | func | `(i32 i32) -> ()` |
| 163 | `cBkH.TbEs` | func | `(i32 i32) -> ()` |
| 164 | `cBkH.yOmQ` | func | `(i32 f64) -> ()` |
| 165 | `cBkH.W8e8` | func | `(i32 i32) -> ()` |
| 166 | `cBkH.p7Gc` | func | `(i32 i32) -> ()` |
| 167 | `cBkH.khO5` | func | `(i32 i32) -> ()` |
| 168 | `cBkH.bw3i` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `cBkH.wgVd` | func | `(i32 f64) -> ()` |
| 170 | `cBkH.p1Q5` | func | `(i32 f64) -> ()` |
| 171 | `cBkH.WMig` | func | `(i32 f64) -> ()` |
| 172 | `cBkH.WCXM` | func | `(i32 f64) -> ()` |
| 173 | `cBkH.lhdA` | func | `(i32 i32) -> ()` |
| 174 | `cBkH.lUg1` | func | `(i32 i32) -> ()` |
| 175 | `cBkH.YYJW` | func | `(i32 i32) -> ()` |
| 176 | `cBkH.Lcv0` | func | `(i32 i32) -> ()` |
| 177 | `cBkH.egxc` | func | `(i32 i32) -> ()` |
| 178 | `cBkH.LtwL` | func | `(i32 i32 i32) -> ()` |
| 179 | `cBkH.FB2w` | func | `(i32 i32) -> ()` |
| 180 | `cBkH.zrUb` | func | `(i32 f32) -> ()` |
| 181 | `cBkH.ZFWr` | func | `(i32 i32) -> ()` |
| 182 | `cBkH.TUHO` | func | `(i32 i32) -> ()` |
| 183 | `cBkH.Jew3` | func | `(i32 i32) -> ()` |
| 184 | `cBkH.HlgS` | func | `(i32 i32) -> ()` |
| 185 | `cBkH.UEtK` | func | `(i32 i32) -> ()` |
| 186 | `cBkH.q6jw` | func | `(i32 i32) -> ()` |
| 187 | `cBkH.hgVE` | func | `(i32 i32) -> ()` |
| 188 | `cBkH.QDnX` | func | `(i32 i32) -> ()` |
| 189 | `cBkH.vYN6` | func | `(i32 i32) -> ()` |
| 190 | `cBkH.HUfC` | func | `(i32 i32) -> ()` |
| 191 | `cBkH.R9l4` | func | `(i32 i32) -> ()` |
| 192 | `cBkH.MuhR` | func | `(i32 i32) -> ()` |
| 193 | `cBkH.ueqL` | func | `(i32 i32) -> (i32)` |
| 194 | `cBkH.vjXP` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `cBkH.IV2R` | func | `(i32 i32) -> ()` |
| 196 | `cBkH.I7ff` | func | `(i32 i32 i32) -> ()` |
| 197 | `cBkH.tZTM` | func | `(i32 i32) -> (i32)` |
| 198 | `cBkH.smRj` | func | `(i32) -> (i32)` |
| 199 | `cBkH.MXUF` | func | `(i32 i32) -> ()` |
| 200 | `cBkH.SjH5` | func | `(i32 i32) -> ()` |
| 201 | `cBkH.Dm7h` | func | `(i32 i32) -> ()` |
| 202 | `cBkH.kyVa` | func | `(i32 i32) -> ()` |
| 203 | `cBkH.J2uS` | func | `(i32 i32) -> ()` |
| 204 | `cBkH.bbaj` | func | `(i32 i32) -> ()` |
| 205 | `cBkH.vxm6` | func | `(i32 i32) -> ()` |
| 206 | `cBkH.u6dw` | func | `(i32 i32) -> ()` |
| 207 | `cBkH.iaCR` | func | `(i32) -> (i32)` |
| 208 | `cBkH.qXNP` | func | `(i32 i32 i32) -> ()` |
| 209 | `cBkH.zTKh` | func | `(i32 i32) -> ()` |
| 210 | `cBkH.Qali` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `cBkH.xDjE` | func | `(i32 i32) -> ()` |
| 212 | `cBkH.oxsF` | func | `(i32) -> ()` |
| 213 | `cBkH.QY5u` | func | `(i32 i32) -> ()` |
| 214 | `cBkH.eTuZ` | func | `(i32) -> (i32)` |
| 215 | `cBkH.FA65` | func | `(i32 i32 i32) -> ()` |
| 216 | `cBkH.tKbt` | func | `(i32 i32) -> ()` |
| 217 | `cBkH.C5xC` | func | `(i32 i32) -> ()` |
| 218 | `cBkH.jApG` | func | `(i32 i32) -> ()` |
| 219 | `cBkH.lEnD` | func | `(i32 i32) -> ()` |
| 220 | `cBkH.sDIY` | func | `(i32 i32) -> (i32)` |
| 221 | `cBkH.sYRE` | func | `(i32 i32) -> ()` |
| 222 | `cBkH.qQop` | func | `(i32 i32) -> ()` |
| 223 | `cBkH.A2T0` | func | `(i32 i32) -> ()` |
| 224 | `cBkH.rNsf` | func | `(i32 i32) -> ()` |
| 225 | `cBkH.ggPv` | func | `(i32 i32) -> ()` |
| 226 | `cBkH.u0j6` | func | `(i32 i32) -> ()` |
| 227 | `cBkH.dmi2` | func | `(i32 i32) -> ()` |
| 228 | `cBkH.CakG` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `cBkH.IoqT` | func | `(i32) -> (i32)` |
| 230 | `cBkH.QvNH` | func | `(i32) -> ()` |
| 231 | `cBkH.ASGN` | func | `(i32 f64) -> ()` |
| 232 | `cBkH.B3ID` | func | `(i32 i32) -> ()` |
| 233 | `cBkH.W7My` | func | `(i32 i32) -> ()` |
| 234 | `cBkH.orqI` | func | `(i32 i32 i32) -> ()` |
| 235 | `cBkH.Rj00` | func | `(i32 i32) -> (i32)` |
| 236 | `cBkH.lLXc` | func | `(i32 i32) -> ()` |
| 237 | `cBkH.CvI3` | func | `(i32 i32) -> ()` |
| 238 | `cBkH.e6ME` | func | `(i32 i32) -> ()` |
| 239 | `cBkH.M94f` | func | `(i32 i32 i32) -> ()` |
| 240 | `cBkH.aKgM` | func | `(i32 i32) -> ()` |
| 241 | `cBkH.arva` | func | `(i32 i32) -> ()` |
| 242 | `cBkH.kWQv` | func | `(i32 i32) -> ()` |
| 243 | `cBkH.XV4O` | func | `(i32 i32 i32) -> ()` |
| 244 | `cBkH.oZlR` | func | `(i32 i32) -> ()` |
| 245 | `cBkH.XoX6` | func | `(i32 i32) -> ()` |
| 246 | `cBkH.W8Qc` | func | `(i32 i32 i32) -> ()` |
| 247 | `cBkH.xaY2` | func | `(i32 i32) -> (i32)` |
| 248 | `cBkH.v933` | func | `(i32 i32) -> ()` |
| 249 | `cBkH.G7sB` | func | `(i32 i32 i32) -> ()` |
| 250 | `cBkH.iZ53` | func | `(i32 i32) -> ()` |
| 251 | `cBkH.vFmm` | func | `(i32 f64) -> ()` |
| 252 | `cBkH.Mz2v` | func | `(i32 i32) -> ()` |
| 253 | `cBkH.YbSV` | func | `(i32 f64) -> ()` |
| 254 | `cBkH.Ifw1` | func | `(i32 i32 i32) -> ()` |
| 255 | `cBkH.uNbM` | func | `(i32 i32) -> ()` |
| 256 | `cBkH.Hn1y` | func | `(i32 i32 i32) -> ()` |
| 257 | `cBkH.uudF` | func | `(i32 i32) -> ()` |
| 258 | `cBkH.wwjB` | func | `(i32 i32) -> ()` |
| 259 | `cBkH.gLMm` | func | `(i32 i32) -> ()` |
| 260 | `cBkH.IQBP` | func | `(i32 i32 i32) -> ()` |
| 261 | `cBkH.s4V1` | func | `(i32 i32) -> ()` |
| 262 | `cBkH.OVRp` | func | `(i32 i32) -> ()` |
| 263 | `cBkH.Wpsy` | func | `(i32 i32) -> ()` |
| 264 | `cBkH.qRdF` | func | `(i32 i32) -> ()` |
| 265 | `cBkH.pApW` | func | `(i32 f32) -> ()` |
| 266 | `cBkH.IsIb` | func | `(i32 f32) -> ()` |
| 267 | `cBkH.Fbvv` | func | `(i32 i32) -> ()` |
| 268 | `cBkH.adCS` | func | `(i32 i32) -> ()` |
| 269 | `cBkH.Nt40` | func | `(i32 i32) -> ()` |
| 270 | `cBkH.ZMQZ` | func | `(i32 i32) -> ()` |
| 271 | `cBkH.dbNl` | func | `(i32 i32) -> ()` |
| 272 | `cBkH.i0pe` | func | `(i32 i32) -> ()` |
| 273 | `cBkH.T4PS` | func | `(i32 i32) -> ()` |
| 274 | `cBkH.SjIq` | func | `(i32 i32) -> ()` |
| 275 | `cBkH.VcAJ` | func | `(i32 i32) -> ()` |
| 276 | `cBkH.FJFE` | func | `(i32 i32) -> ()` |
| 277 | `cBkH.myMG` | func | `(i32 i32) -> ()` |
| 278 | `cBkH.vq2G` | func | `(i32 i32) -> ()` |
| 279 | `cBkH.HHj2` | func | `(i32 i32) -> ()` |
| 280 | `cBkH.z2qe` | func | `(i32 i32) -> ()` |
| 281 | `cBkH.SIE2` | func | `(i32 i32) -> ()` |
| 282 | `cBkH.w4MN` | func | `(i32 i32) -> ()` |
| 283 | `cBkH.qcfO` | func | `(i32 i32) -> ()` |
| 284 | `cBkH.wOAl` | func | `(i32 i32) -> ()` |
| 285 | `cBkH.PJYB` | func | `(i32 i32 i32) -> ()` |
| 286 | `cBkH.WVs0` | func | `(i32 i32 i32) -> ()` |
| 287 | `cBkH.MAhe` | func | `(i32 i32) -> ()` |
| 288 | `cBkH.Plhk` | func | `(i32 i32) -> ()` |
| 289 | `cBkH.kSwN` | func | `(i32 i32) -> ()` |
| 290 | `cBkH.tD4L` | func | `(i32 i32) -> ()` |
| 291 | `cBkH.Dwn3` | func | `(i32 i32) -> ()` |
| 292 | `cBkH.DaSs` | func | `(i32 i32) -> ()` |
| 293 | `cBkH.RGRh` | func | `(i32 i32) -> ()` |
| 294 | `cBkH.jK8y` | func | `(i32 i32) -> ()` |
| 295 | `cBkH.n2CG` | func | `(i32 i32) -> ()` |
| 296 | `cBkH.EHJY` | func | `(i32 i32) -> ()` |
| 297 | `cBkH.KL6b` | func | `(i32 i32) -> ()` |
| 298 | `cBkH.KJrd` | func | `(i32 i32) -> (i32)` |
| 299 | `cBkH.f2vS` | func | `(i32 i32) -> ()` |
| 300 | `cBkH.iuuo` | func | `(i32 i32 i32) -> ()` |
| 301 | `cBkH.ckK7` | func | `(i32 i32) -> ()` |
| 302 | `cBkH.bBLK` | func | `(i32 i32) -> ()` |
| 303 | `cBkH.Z7nT` | func | `(i32 i32) -> ()` |
| 304 | `cBkH.snjQ` | func | `(i32 i32 i32) -> ()` |
| 305 | `cBkH.EOLn` | func | `(i32 i32) -> (i32)` |
| 306 | `cBkH.pqkw` | func | `(i32 i32 i32) -> ()` |
| 307 | `cBkH.AdjO` | func | `(i32 i32 i32) -> ()` |
| 308 | `cBkH.rN6l` | func | `(i32 i32) -> ()` |
| 309 | `cBkH.kMCq` | func | `(i32 i32) -> ()` |
| 310 | `cBkH.EUzi` | func | `(i32 i32) -> ()` |
| 311 | `cBkH.iG7F` | func | `(i32 i32) -> ()` |
| 312 | `cBkH.NKiQ` | func | `(i32 i32) -> (i32)` |
| 313 | `cBkH.NR7h` | func | `(i32) -> (i32)` |
| 314 | `cBkH.icJB` | func | `(i32) -> (i32)` |
| 315 | `cBkH.qOra` | func | `(i32) -> (i32)` |
| 316 | `cBkH.Idi6` | func | `(i32) -> (i32)` |
| 317 | `cBkH.yR0H` | func | `(i32) -> (i32)` |
| 318 | `cBkH.AgX9` | func | `(i32) -> (i32)` |
| 319 | `cBkH.Kzej` | func | `(i32) -> (i32)` |
| 320 | `cBkH.lLkC` | func | `(i32) -> (i32)` |
| 321 | `cBkH.KOpH` | func | `(i32) -> (i32)` |
| 322 | `cBkH.PHXH` | func | `(i32) -> (i32)` |
| 323 | `cBkH.T94C` | func | `(i32) -> (i32)` |
| 324 | `cBkH.IyLt` | func | `(i32) -> (i32)` |
| 325 | `cBkH.Rk7H` | func | `(i32) -> (i32)` |
| 326 | `cBkH.a7LV` | func | `(i32) -> (i32)` |
| 327 | `cBkH.mJv7` | func | `(i32) -> (f64)` |
| 328 | `cBkH.PMjF` | func | `(i32) -> (f64)` |
| 329 | `cBkH.BZY6` | func | `(i32) -> (i32)` |
| 330 | `cBkH.xj5n` | func | `(i32) -> (f64)` |
| 331 | `cBkH.hGtB` | func | `(i32) -> (i32)` |
| 332 | `cBkH.tfya` | func | `(i32) -> (i32)` |
| 333 | `cBkH.D3RB` | func | `(i32) -> (i32)` |
| 334 | `cBkH.qyCv` | func | `(i32) -> (i32)` |
| 335 | `cBkH.zlxl` | func | `(i32) -> (i32)` |
| 336 | `cBkH.f7NM` | func | `(i32) -> (i32)` |
| 337 | `cBkH.Tiom` | func | `(i32) -> (i32)` |
| 338 | `cBkH.b8Tn` | func | `(i32) -> (i32)` |
| 339 | `cBkH.eunp` | func | `(i32) -> (i32)` |
| 340 | `cBkH.doAe` | func | `(i32) -> (i32)` |
| 341 | `cBkH.HR0t` | func | `(i32) -> (i32)` |
| 342 | `cBkH.o69E` | func | `(i32) -> (i32)` |
| 343 | `cBkH.gOLW` | func | `(i32) -> (i32)` |
| 344 | `cBkH.AYUK` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `cBkH.KL8U` | func | `() -> (i32)` |
| 346 | `cBkH.VHNo` | func | `(i32 i32) -> ()` |
| 347 | `cBkH.m3Q0` | func | `(i32 i32 i32) -> ()` |
| 348 | `cBkH.Tn3y` | func | `(i32 i32 i32) -> ()` |
| 349 | `cBkH.afL5` | func | `(i32 i32) -> (i32)` |
| 350 | `cBkH.h39w` | func | `(i32) -> (i32)` |
| 351 | `cBkH.Xs5b` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `cBkH.kfzj` | func | `(i32) -> ()` |
| 353 | `cBkH.VrJA` | func | `(i32) -> (i32)` |
| 354 | `cBkH.uuMB` | func | `(i32 i32) -> ()` |
| 355 | `cBkH.K6tl` | func | `(i32) -> (i32)` |
| 356 | `cBkH.i3Zd` | func | `(i32) -> (i32)` |
| 357 | `cBkH.zym6` | func | `(i32) -> (i32)` |
| 358 | `cBkH.hHZC` | func | `(i32) -> (i32)` |
| 359 | `cBkH.soK9` | func | `(i32) -> (i32)` |
| 360 | `cBkH.GQGS` | func | `(i32 i32) -> ()` |
| 361 | `cBkH.mYx7` | func | `(i32 i32) -> ()` |
| 362 | `cBkH.uQqT` | func | `(i32 i32) -> ()` |
| 363 | `cBkH.zcgz` | func | `(i32 i32) -> ()` |
| 364 | `cBkH.ypno` | func | `(i32 i32) -> ()` |
| 365 | `cBkH.GVU5` | func | `(i32 i32) -> ()` |
| 366 | `cBkH.xwXl` | func | `(i32 i32) -> ()` |
| 367 | `cBkH.RRmf` | func | `(i32 i32 i32) -> ()` |
| 368 | `cBkH.yz5V` | func | `(i32 i32) -> ()` |
| 369 | `cBkH.kq3L` | func | `(i32 i32) -> (i32)` |
| 370 | `cBkH.Over` | func | `(i32) -> (i32)` |
| 371 | `cBkH.bUtk` | func | `(i32) -> (i32)` |
| 372 | `cBkH.e1RM` | func | `(i32 i32) -> ()` |
| 373 | `cBkH.elKR` | func | `(i32) -> (i32)` |
| 374 | `cBkH.m2G6` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `cBkH.pqAh` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `cBkH.LJlC` | func | `(i32 i32) -> ()` |
| 377 | `cBkH.eYiB` | func | `(i32) -> (i32)` |
| 378 | `cBkH.gOKm` | func | `(i32) -> (i32)` |
| 379 | `cBkH.BYdb` | func | `(i32) -> (i32)` |
| 380 | `cBkH.cTih` | func | `(i32) -> (i32)` |
| 381 | `cBkH.JqlV` | func | `(i32) -> (i32)` |
| 382 | `cBkH.TSry` | func | `(i32) -> (i32)` |
| 383 | `cBkH.OQeU` | func | `(i32 i32) -> ()` |
| 384 | `cBkH.CEhr` | func | `(i32 i32) -> (i32)` |
| 385 | `cBkH.TiOv` | func | `(i32 i32) -> (i32)` |
| 386 | `cBkH.KchL` | func | `(i32 i32) -> (i32)` |
| 387 | `cBkH.cpcO` | func | `(i32 i32) -> (i32)` |
| 388 | `cBkH.DWP4` | func | `(i32 i32) -> (i32)` |
| 389 | `cBkH.S8Oi` | func | `(i32 i32) -> (i32)` |
| 390 | `cBkH.tvJx` | func | `(f64) -> (i32)` |
| 391 | `cBkH.pX1U` | func | `(i32 i32) -> (i32)` |
| 392 | `cBkH.bFsp` | func | `(i32 i32) -> (i32)` |

## Exports

159 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `srwt` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vwa7` | func | 1600 | `(i32 i32) -> (i32)` |
| `wBC8` | func | 3113 | `(i32 i32) -> (i32 i32)` |
| `AihO` | func | 1974 | `(i32) -> ()` |
| `DuSC` | func | 2448 | `(i32 i32) -> (i32)` |
| `MdeG` | func | 1944 | `(i32 i32 f64 f64 f64) -> ()` |
| `LHlN` | func | 1602 | `(i32 f64) -> (f64)` |
| `Gik1` | func | 1463 | `(i32 f64 f64) -> (i32)` |
| `Lg0t` | func | 3116 | `(i32 i32) -> (i32 i32)` |
| `xKL2` | func | 1197 | `(i32 i32) -> ()` |
| `p3xa` | func | 1678 | `(i32 f64 f64 f64) -> (i32)` |
| `Q8PA` | func | 2557 | `(i32) -> (i32)` |
| `IB1a` | func | 798 | `(i32 i32) -> (i32)` |
| `cb3C` | func | 2128 | `(i32 i32) -> ()` |
| `NAzo` | func | 3246 | `() -> ()` |
| `GSR3` | func | 1372 | `(i32 i32) -> (i32)` |
| `bF0b` | func | 969 | `(i32 i32) -> (i32)` |
| `aqSE` | func | 2570 | `(i32 i32) -> ()` |
| `vun9` | func | 1906 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `lxcX` | func | 1803 | `(i32) -> (i32)` |
| `f2Yt` | func | 1540 | `(i32 i32 i32 i32) -> ()` |
| `qPqh` | func | 3073 | `(i32 i32) -> (i32)` |
| `RuHj` | func | 3319 | `() -> (i32)` |
| `EQOH` | func | 3290 | `() -> (f64)` |
| `GIov` | func | 2111 | `(i32 f64 f64 f64) -> (i32)` |
| `DifO` | func | 2577 | `(i32) -> (i32)` |
| `tO0w` | func | 3125 | `(i32) -> (i32 i32)` |
| `oF5m` | func | 2559 | `(i32) -> (i32)` |
| `s1M0` | func | 3112 | `(i32 i32) -> (i32 i32)` |
| `T6ad` | func | 2551 | `(i32) -> (f64)` |
| `s3SD` | func | 1960 | `(i32 i32) -> (i32)` |
| `JRg9` | func | 2674 | `(i32 i32) -> ()` |
| `ennL` | func | 2593 | `(i32) -> (i32)` |
| `zEzb` | func | 1561 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ENMw` | func | 896 | `(i32 i32) -> (i32)` |
| `z3PO` | func | 1196 | `(i32 i32) -> (i32)` |
| `u4XU` | func | 2642 | `() -> (i32)` |
| `nPX7` | func | 1674 | `(i32 i32) -> ()` |
| `cLVf` | func | 2576 | `(i32 i32) -> ()` |
| `evld` | func | 2414 | `(i32 i32) -> (i32)` |
| `tN9x` | func | 3111 | `(i32 i32) -> (i32 i32)` |
| `gTx9` | func | 2926 | `(i32) -> (i32)` |
| `MG1T` | func | 760 | `(i32 i32) -> (i32)` |
| `uOYc` | func | 2862 | `(i32) -> (i32)` |
| `nYt5` | func | 2469 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `bhZ4` | func | 2415 | `(i32 i32) -> (i32)` |
| `KekT` | func | 3235 | `(i32 i32 i32) -> ()` |
| `ZoaJ` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `bsZt` | func | 2625 | `(i32 i32) -> ()` |
| `taJc` | func | 2149 | `(i32 i32) -> (i32)` |
| `KBba` | func | 2507 | `(i32) -> (i32)` |
| `cBGm` | func | 2879 | `(i32) -> (i32)` |
| `Fxxc` | func | 3166 | `(i32 i32 i32 i32) -> ()` |
| `ExRP` | func | 1565 | `(i32 i32 i32 i32) -> (i32)` |
| `RI0Z` | func | 2263 | `(i32 i32) -> (i32)` |
| `IVsR` | func | 1293 | `(i32 i32 i32 i32) -> (i32)` |
| `uRYs` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `dWGk` | func | 2903 | `(i32) -> ()` |
| `IQS6` | func | 3103 | `(i32 i32 i32) -> (i32 i32)` |
| `popp` | func | 1828 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `DpCH` | func | 2560 | `(i32) -> (i32)` |
| `qFv2` | func | 1967 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `HtCe` | func | 1781 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `rtvh` | func | 1841 | `(i32 i32) -> (i32)` |
| `oP3t` | func | 659 | `(i32 i32 i32) -> (i32)` |
| `Vuv9` | func | 3318 | `() -> (i32)` |
| `K1FH` | func | 3086 | `(i32 i32) -> ()` |
| `K4Pp` | func | 3175 | `(i32 i32 i32) -> (i32)` |
| `hevN` | func | 2224 | `(i32 i32) -> (i32)` |
| `Alfz` | func | 2038 | `(i32 i32 i32 i32) -> ()` |
| `Q0ep` | func | 2575 | `(i32) -> (i32)` |
| `Mwed` | func | 3127 | `(i32) -> (i32 i32)` |
| `oW7y` | func | 2535 | `(i32 i32) -> ()` |
| `bo26` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `fcCe` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `px1a` | func | 3140 | `() -> (i32 i32)` |
| `I6dH` | func | 1572 | `(i32 i32) -> (i32)` |
| `NvH6` | func | 1323 | `(i32 i32) -> (i32)` |
| `ysln` | func | 830 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `np2P` | func | 2585 | `(i32 i32) -> (i32)` |
| `IgJa` | func | 1599 | `(i32 i32) -> (i32)` |
| `GYEf` | func | 2558 | `(i32) -> ()` |
| `t0Qd` | func | 2583 | `(i32) -> (i32)` |
| `JnXv` | func | 1566 | `(i32) -> (i32)` |
| `FMiz` | func | 3294 | `(i32) -> (i32)` |
| `Nkxn` | func | 1633 | `(i32 i32 i32 i32) -> (i32)` |
| `SFr9` | func | 1822 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `g1bf` | func | 3053 | `() -> ()` |
| `aFI2` | func | 2554 | `(i32) -> (i32)` |
| `u8MJ` | func | 2490 | `(i32) -> (i32)` |
| `jlrh` | func | 1922 | `(i32 i32 i32 i32) -> (i32)` |
| `f0nW` | func | 3244 | `(i32) -> ()` |
| `wMIX` | func | 2283 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Hcip` | func | 2594 | `(i32) -> (i32)` |
| `nAd1` | func | 2890 | `(i32) -> (i32)` |
| `BspB` | func | 1300 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `vO9G` | func | 771 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `AUxQ` | func | 2536 | `(i32) -> (i32)` |
| `Phg1` | func | 1663 | `(i32 i32) -> (i32)` |
| `ySpP` | func | 2561 | `(i32) -> (i32)` |
| `cemI` | func | 2413 | `(i32 i32) -> (i32)` |
| `PT9M` | func | 3141 | `() -> (i32 i32)` |
| `uKpX` | func | 2462 | `(i32 i32 i32 i32) -> (i32)` |
| `Dskr` | func | 2416 | `(i32 i32) -> (i32)` |
| `xyK8` | func | 1366 | `(i32) -> (i32)` |
| `sMZv` | func | 1949 | `(i32 i32) -> ()` |
| `SgFT` | func | 1253 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jGYg` | func | 3080 | `(i32 i32 i32 i32) -> (i32)` |
| `M8xB` | global | 1 | `` |
| `IYnI` | func | 3115 | `(i32 i32) -> (i32 i32)` |
| `BPX1` | func | 3177 | `(i32 i32 i32) -> ()` |
| `zxHx` | func | 1462 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `NQrg` | func | 2334 | `(i32 i32) -> ()` |
| `GdKv` | func | 2361 | `(i32 i32) -> ()` |
| `DF79` | func | 3128 | `(i32) -> (i32 i32)` |
| `fjQT` | func | 1513 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `IBZk` | func | 1398 | `(i32) -> ()` |
| `CCak` | func | 1412 | `(i32 i32 i32) -> (i32)` |
| `ggqq` | func | 1345 | `(i32 i32 i32) -> ()` |
| `RD01` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `IHnn` | func | 2555 | `(i32) -> (i32)` |
| `kkzs` | func | 1556 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `JbZU` | func | 2556 | `(i32) -> (i32)` |
| `qTjS` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `PtjZ` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `AGhl` | func | 3117 | `(i32 i32) -> (i32 i32)` |
| `BCTl` | func | 1673 | `(i32 i32) -> ()` |
| `w9cp` | func | 2095 | `(i32 f64) -> (i32)` |
| `Wa3x` | func | 3124 | `(i32) -> (i32 i32)` |
| `g8yx` | func | 2675 | `() -> (i32)` |
| `ZoVD` | func | 2584 | `(i32 i32) -> (i32)` |
| `HC6H` | func | 3126 | `(i32) -> (i32 i32)` |
| `NaI0` | func | 1518 | `() -> (i32)` |
| `bUDI` | func | 2036 | `(i32) -> (i32)` |
| `AZ1i` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `tUJR` | func | 3295 | `(i32) -> ()` |
| `qah2` | func | 2854 | `(i32) -> (i32)` |
| `Bk87` | func | 2574 | `(i32) -> (i32)` |
| `j0aa` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `xqG6` | func | 3114 | `(i32 i32) -> (i32 i32)` |
| `XFSv` | func | 1586 | `(i32 i32) -> (i32)` |
| `V68s` | func | 2592 | `(i32) -> (i32)` |
| `n8AH` | func | 2553 | `(i32) -> (i32)` |
| `PREg` | func | 2552 | `(i32) -> (i32)` |
| `QLY9` | func | 1646 | `(i32) -> (i32)` |
| `Fhtp` | func | 2019 | `(i32) -> (i32)` |
| `GBYA` | func | 1292 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `wZyO` | func | 1975 | `(i32) -> ()` |
| `rFwa` | func | 1717 | `(i32 i32 i32 i32) -> (i32)` |
| `HKVs` | func | 1341 | `(i32 i32 i32) -> (i32)` |
| `oUud` | global | 2 | `` |
| `hP7T` | func | 1613 | `(i32 i32 i32) -> (i32)` |
| `dzUS` | func | 2070 | `(i32 i32) -> ()` |
| `SjOp` | func | 2335 | `(i32 f64) -> (i32)` |
| `CECm` | func | 1487 | `(i32 i32) -> (i32)` |
| `Su4x` | func | 3205 | `() -> (i32)` |
| `PhTi` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `SThW` | func | 1899 | `() -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 838 · max 838
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2244632, `i32` = i32.const 2245196

## Functions

- 2,939 bodies · 4,038,717 code bytes · avg 1.3 KB
- instruction scan: 2,939 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 114 |
| <= 128 bytes | 275 |
| <= 256 bytes | 384 |
| <= 512 bytes | 666 |
| <= 1024 bytes | 583 |
| <= 2048 bytes | 411 |
| <= 4096 bytes | 181 |
| <= 8192 bytes | 92 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 35 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 149 | 122,454 | 58,848 | local.get×16652, i32.const×7053, i32.add×3403, local.set×3378, i32.load×3112 |
| 1 | `(i32 i32 i32 i32) -> ()` | 213 | 194,439 | 88,270 | local.get×25875, i32.const×9894, i32.load×5634, local.set×4730, local.tee×4633 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,181 | 25,576 | local.get×7556, i32.const×3392, local.set×1404, i32.add×1302, i32.load×1164 |
| 3 | `(i32 i32) -> ()` | 125 | 48,862 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,468 | 14,007 | local.get×4107, i32.const×1881, i32.load×884, i32.add×645, local.set×620 |
| 5 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 177 | 20,026 | 9,398 | local.get×2934, i32.const×1038, local.set×621, i32.add×458, i32.load×421 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 126 | 19,829 | 8,878 | local.get×2493, i32.const×1113, local.set×430, local.tee×385, i32.load×382 |
| 17 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 93 | 21,125 | 8,077 | local.get×3017, i32.const×946, i64.store×844, i32.store×655, i64.const×513 |
| 21 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 22 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,714 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 42 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,357 | 12,852 | local.get×3663, i32.const×1861, i32.add×764, local.set×695, end×575 |
| 60 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 192 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 220 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 704 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 993 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1007 | `(i32 i32) -> (i32)` | 41 | 19,765 | 7,699 | local.get×2488, i32.const×836, i64.store×586, i32.load×386, local.set×356 |
| 1567 | `(i32 i32) -> (i32)` | 180 | 54,461 | 19,757 | local.get×6549, i32.const×2619, i64.store×1893, i64.const×1069, i64.load×1044 |
| 1960 | `(i32 i32) -> ()` | 110 | 38,696 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2597 | `(i32 i32) -> ()` | 397 | 142,149 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2887 | `(i32 i32 i32 i32) -> ()` | 137 | 30,443 | 13,878 | local.get×4157, i32.const×1460, local.tee×728, local.set×674, i32.load×609 |
| 2906 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 540,006 |
| `i32.const` | 227,243 |
| `local.tee` | 99,336 |
| `local.set` | 94,270 |
| `i32.load` | 93,188 |
| `i32.add` | 87,005 |
| `end` | 79,143 |
| `br_if` | 63,611 |
| `i32.store` | 46,880 |
| `block` | 37,232 |
| `i64.store` | 32,718 |
| `i64.const` | 32,047 |
| `if` | 30,271 |
| `call` | 30,099 |
| `i64.load` | 24,280 |
| `i32.sub` | 24,056 |
| `br` | 23,173 |
| `i32.eqz` | 18,985 |
| `select` | 16,691 |
| `i32.and` | 16,273 |
| `i32.shl` | 16,191 |
| `i32.ne` | 15,646 |
| `i32.load8_u` | 15,193 |
| `i32.eq` | 13,699 |
| `i32.store8` | 13,395 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,939/2,939 (degraded: 0)
