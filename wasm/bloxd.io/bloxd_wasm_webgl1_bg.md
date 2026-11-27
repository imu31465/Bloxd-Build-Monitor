# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `u88b9b.1969c480` · analyzed 2026-11-27T18:53:23+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.345f0d2a64fb703a4364.wasm
> 4,879,367 bytes (4.7 MB) · sha256 `5541e97c52b53f4d…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `90a82f6c28d83e02.10684` → `721518df0ee096b2.10684` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,890 / 282 |
| Exports / imports | 160 / 283 |
| Code bytes (function bodies) | 4,026,528 (3.8 MB) |
| Total local variables | 30,898 |
| Instructions (scanable bodies) | 1,888,565 |
| Data segments / bytes | 3,773 / 806,316 |
| Element segments / entries | 1 / 734 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `721518df0ee096b2.10684` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,516 | 178 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,942 | 2890 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,475 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,031,836 | 2890 |
| 11 | data | 836,811 | 3773 |
| 0 | custom:name | 30 | — |

## Types

178 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `eWP7.Gog6` | memory | `[128..14648]` |
| 0 | `eWP7.GCM4` | func | `(i32) -> (f64)` |
| 1 | `eWP7.yqvi` | func | `() -> (i32)` |
| 2 | `eWP7.XlV6` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `eWP7.iWxC` | func | `(i32) -> ()` |
| 4 | `eWP7.OoCR` | func | `(i32 i32) -> (i32)` |
| 5 | `eWP7.I7OE` | func | `(i32) -> (i32)` |
| 6 | `eWP7.rQtK` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `eWP7.Wt66` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `eWP7.jtnJ` | func | `(i32) -> (i32)` |
| 9 | `eWP7.h0p8` | func | `(i32 i32) -> ()` |
| 10 | `eWP7.eXPp` | func | `(i32 i32) -> ()` |
| 11 | `eWP7.qjbY` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `eWP7.pCwb` | func | `(i32 i32) -> (i32)` |
| 13 | `eWP7.uK5o` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `eWP7.j1a1` | func | `(i32) -> (i32)` |
| 15 | `eWP7.VNlP` | func | `(i32 i32) -> (i32)` |
| 16 | `eWP7.uaWn` | func | `(i32 i32) -> (i32)` |
| 17 | `eWP7.CFtn` | func | `(i32 i32) -> ()` |
| 18 | `eWP7.TO1z` | func | `(i32) -> (i32)` |
| 19 | `eWP7.eKoB` | func | `(i32) -> (i32)` |
| 20 | `eWP7.GTal` | func | `(i32) -> (i32)` |
| 21 | `eWP7.O3ix` | func | `(i32) -> ()` |
| 22 | `eWP7.pQNx` | func | `(i32 i32) -> ()` |
| 23 | `eWP7.jnvf` | func | `(i32 i32) -> ()` |
| 24 | `eWP7.dHBr` | func | `(i32) -> (i32)` |
| 25 | `eWP7.w77J` | func | `(i32 i32) -> ()` |
| 26 | `eWP7.J9Ko` | func | `(i32 i32) -> (i32)` |
| 27 | `eWP7.Zhne` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `eWP7.gPuu` | func | `(i32 i32) -> (i32)` |
| 29 | `eWP7.xHlI` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `eWP7.J97V` | func | `(i32) -> (i32)` |
| 31 | `eWP7.gVll` | func | `() -> (f64)` |
| 32 | `eWP7.Z07J` | func | `(i32 i32) -> ()` |
| 33 | `eWP7.z7Qx` | func | `(i32) -> (i32)` |
| 34 | `eWP7.TKNE` | func | `(i32) -> (i32)` |
| 35 | `eWP7.elX8` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `eWP7.xnBO` | func | `(i32) -> (i32)` |
| 37 | `eWP7.uFgn` | func | `(i32) -> (i32)` |
| 38 | `eWP7.DvF3` | func | `(i32) -> (i32)` |
| 39 | `eWP7.sCnK` | func | `(i32 i32) -> (i32)` |
| 40 | `eWP7.IARX` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `eWP7.lA0n` | func | `(i32) -> (i32)` |
| 42 | `eWP7.FeTM` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `eWP7.MYpN` | func | `(i32) -> (i32)` |
| 44 | `eWP7.EcIp` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `eWP7.RCHY` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `eWP7.own5` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `eWP7.XVp9` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `eWP7.p6jW` | func | `(i32 i32 i32) -> ()` |
| 49 | `eWP7.muVH` | func | `(i32 i32 i32) -> ()` |
| 50 | `eWP7.V6Ug` | func | `(i32 i32 i32) -> ()` |
| 51 | `eWP7.tirF` | func | `(i32 i32) -> ()` |
| 52 | `eWP7.O86g` | func | `(i32 i32) -> ()` |
| 53 | `eWP7.W6Ho` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `eWP7.RSHv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `eWP7.avxd` | func | `(i32 f32 f32) -> ()` |
| 56 | `eWP7.CUPa` | func | `(i32 f32 f32) -> ()` |
| 57 | `eWP7.bbaa` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `eWP7.Ocov` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `eWP7.MB0I` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `eWP7.EaJ3` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `eWP7.WxCO` | func | `(i32 i32 i32) -> ()` |
| 62 | `eWP7.nLhW` | func | `(i32 i32 i32) -> ()` |
| 63 | `eWP7.NeUG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `eWP7.IkDu` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `eWP7.NUc0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `eWP7.VRH4` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `eWP7.IQDw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `eWP7.fTTT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `eWP7.TAdF` | func | `(i32) -> (i32)` |
| 70 | `eWP7.fira` | func | `(i32) -> ()` |
| 71 | `eWP7.dEiS` | func | `(i32) -> (i32)` |
| 72 | `eWP7.VRMZ` | func | `(i32 i32) -> (i32)` |
| 73 | `eWP7.I8QS` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `eWP7.I9kx` | func | `(i32 i32 i32) -> ()` |
| 75 | `eWP7.oeIz` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `eWP7.A2Vk` | func | `() -> (f64)` |
| 77 | `eWP7.L2iH` | func | `() -> (f64)` |
| 78 | `eWP7.gc7W` | func | `(i32 i32) -> ()` |
| 79 | `eWP7.LxRQ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `eWP7.cxd6` | func | `(i32 i32 i32) -> ()` |
| 81 | `eWP7.zZ3m` | func | `(i32 i32 i32) -> ()` |
| 82 | `eWP7.Ptxw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `eWP7.vyhx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `eWP7.jcEM` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `eWP7.juhG` | func | `(i32 i32) -> ()` |
| 86 | `eWP7.CWvn` | func | `(i32 i32) -> ()` |
| 87 | `eWP7.xZhz` | func | `(i32) -> (i32)` |
| 88 | `eWP7.xDnv` | func | `(i32 i32) -> ()` |
| 89 | `eWP7.DmrJ` | func | `(i32 i32) -> ()` |
| 90 | `eWP7.ext1` | func | `(i32 i32 i32) -> ()` |
| 91 | `eWP7.kTHb` | func | `(i32 i32 i32) -> ()` |
| 92 | `eWP7.Ewkg` | func | `(i32) -> (i32)` |
| 93 | `eWP7.KWtV` | func | `(i32) -> (i32)` |
| 94 | `eWP7.IlzK` | func | `(i32 i32) -> (i32)` |
| 95 | `eWP7.PwX7` | func | `(i32 i32) -> (i32)` |
| 96 | `eWP7.u8MD` | func | `(i32 i32) -> ()` |
| 97 | `eWP7.PGLD` | func | `(i32 i32) -> ()` |
| 98 | `eWP7.dR5E` | func | `(i32 i32 i32) -> ()` |
| 99 | `eWP7.h5FJ` | func | `(i32 i32 i32) -> ()` |
| 100 | `eWP7.tgqv` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `eWP7.YQb2` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `eWP7.DE2W` | func | `(i32 i32 f32) -> ()` |
| 103 | `eWP7.m66A` | func | `(i32 i32 f32) -> ()` |
| 104 | `eWP7.YgnG` | func | `(i32 i32 i32) -> ()` |
| 105 | `eWP7.IHlr` | func | `(i32 i32 i32) -> ()` |
| 106 | `eWP7.XCi7` | func | `(i32 i32 i32) -> ()` |
| 107 | `eWP7.vR57` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `eWP7.Mvvf` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `eWP7.LuEu` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `eWP7.Mlvl` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `eWP7.sUbe` | func | `(i32 i32) -> ()` |
| 112 | `eWP7.wlTG` | func | `(i32 i32) -> ()` |
| 113 | `eWP7.VQJj` | func | `(i32 i32) -> ()` |
| 114 | `eWP7.kCEX` | func | `(i32 i32) -> ()` |
| 115 | `eWP7.NSFw` | func | `(i32) -> (i32)` |
| 116 | `eWP7.NRTS` | func | `(i32) -> (i32)` |
| 117 | `eWP7.sHY2` | func | `(i32) -> (i32)` |
| 118 | `eWP7.eSR6` | func | `(i32) -> (i32)` |
| 119 | `eWP7.mWj3` | func | `(i32 i32) -> ()` |
| 120 | `eWP7.pooy` | func | `(i32 i32) -> ()` |
| 121 | `eWP7.eqDa` | func | `(i32 i32) -> ()` |
| 122 | `eWP7.wUlv` | func | `(i32 i32) -> ()` |
| 123 | `eWP7.FiVd` | func | `(i32 i32) -> ()` |
| 124 | `eWP7.tD0R` | func | `(i32 i32) -> ()` |
| 125 | `eWP7.y9Qy` | func | `(i32 i32) -> (i32)` |
| 126 | `eWP7.vWPu` | func | `(i32 i32) -> (i32)` |
| 127 | `eWP7.Cyhw` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `eWP7.pbwL` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `eWP7.Q0Vl` | func | `(i32 i32) -> ()` |
| 130 | `eWP7.T4vW` | func | `(i32 i32) -> ()` |
| 131 | `eWP7.gzps` | func | `(i32) -> (i32)` |
| 132 | `eWP7.cIqH` | func | `(i32 i32) -> ()` |
| 133 | `eWP7.AdZZ` | func | `(i32 i32) -> ()` |
| 134 | `eWP7.HBjt` | func | `(i32 i32 i32) -> ()` |
| 135 | `eWP7.PU8b` | func | `(i32 i32 i32) -> ()` |
| 136 | `eWP7.cmXU` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `eWP7.gTNZ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `eWP7.Eqdx` | func | `(i32 i32) -> ()` |
| 139 | `eWP7.OW7B` | func | `(i32 i32 i32) -> ()` |
| 140 | `eWP7.kTxa` | func | `(i32 i32 i32) -> ()` |
| 141 | `eWP7.cFDi` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `eWP7.A3DB` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `eWP7.Ga4F` | func | `(i32 i32 i32) -> ()` |
| 144 | `eWP7.RboS` | func | `(i32 i32 i32) -> ()` |
| 145 | `eWP7.RsBU` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `eWP7.jQz1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `eWP7.m7mH` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `eWP7.F6ot` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `eWP7.uN2c` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `eWP7.Xalb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `eWP7.xCEY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `eWP7.oywA` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `eWP7.MrnI` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `eWP7.KRht` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `eWP7.wfE2` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `eWP7.fvBb` | func | `(i32) -> (i32)` |
| 157 | `eWP7.hCRx` | func | `(i32) -> (i32)` |
| 158 | `eWP7.UXk8` | func | `(i32) -> (i32)` |
| 159 | `eWP7.UcV2` | func | `(i32) -> (i32)` |
| 160 | `eWP7.O76l` | func | `() -> (i32)` |
| 161 | `eWP7.DNnk` | func | `() -> (i32)` |
| 162 | `eWP7.SpPv` | func | `() -> (i32)` |
| 163 | `eWP7.Aa9u` | func | `() -> (i32)` |
| 164 | `eWP7.Utkp` | func | `(i32 i32) -> (i32)` |
| 165 | `eWP7.ZjSo` | func | `(i32) -> ()` |
| 166 | `eWP7.eHSm` | func | `(i32 i32) -> (i32)` |
| 167 | `eWP7.IcvI` | func | `(i32) -> (i32)` |
| 168 | `eWP7.oFTR` | func | `(i32) -> (i32)` |
| 169 | `eWP7.LxL8` | func | `(i32) -> (i32)` |
| 170 | `eWP7.ZwUw` | func | `(i32) -> ()` |
| 171 | `eWP7.DzUv` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `eWP7.ADrq` | func | `(i32) -> (i32)` |
| 173 | `eWP7.hGlA` | func | `(i32) -> (i32)` |
| 174 | `eWP7.gBwo` | func | `(i32 i32) -> (i32)` |
| 175 | `eWP7.ecG3` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `eWP7.yPam` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `eWP7.Wpl5` | func | `(i32) -> (i32)` |
| 178 | `eWP7.pmOX` | func | `(i32) -> (i32)` |
| 179 | `eWP7.TvnJ` | func | `(i32) -> (i32)` |
| 180 | `eWP7.c9UJ` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `eWP7.bZMl` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `eWP7.N2FH` | func | `(i32 i32) -> ()` |
| 183 | `eWP7.DmEq` | func | `(i32 i32 i32) -> ()` |
| 184 | `eWP7.kKPO` | func | `(i32 i32) -> ()` |
| 185 | `eWP7.nKXG` | func | `(i32 i32 i32) -> ()` |
| 186 | `eWP7.KgVr` | func | `(i32 i32) -> ()` |
| 187 | `eWP7.jK9I` | func | `(i32 i32) -> ()` |
| 188 | `eWP7.QJRO` | func | `(i32) -> (i32)` |
| 189 | `eWP7.IFqp` | func | `(i32 i32) -> (i32)` |
| 190 | `eWP7.UOru` | func | `(i32) -> ()` |
| 191 | `eWP7.HRpX` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `eWP7.liRA` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `eWP7.dEl5` | func | `(i32 i32) -> ()` |
| 194 | `eWP7.kqo1` | func | `(i32 i32) -> ()` |
| 195 | `eWP7.msgy` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `eWP7.eW6f` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `eWP7.pnPS` | func | `(i32 f32) -> ()` |
| 198 | `eWP7.PXdu` | func | `(i32 f32) -> ()` |
| 199 | `eWP7.syhD` | func | `(i32 i32) -> ()` |
| 200 | `eWP7.mf0c` | func | `(i32 i32) -> ()` |
| 201 | `eWP7.bwbC` | func | `(i32) -> (i32)` |
| 202 | `eWP7.mfzU` | func | `(i32) -> (i32)` |
| 203 | `eWP7.oOiZ` | func | `(i32) -> (i32)` |
| 204 | `eWP7.Or29` | func | `(i32) -> (i32)` |
| 205 | `eWP7.Uo7E` | func | `(i32 i32 i32) -> ()` |
| 206 | `eWP7.C1Cb` | func | `(i32 i32 i32) -> ()` |
| 207 | `eWP7.BbCH` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `eWP7.FsJE` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `eWP7.jABB` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `eWP7.eRwB` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `eWP7.bggl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `eWP7.GxV6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `eWP7.RcNA` | func | `(i32 i32) -> ()` |
| 214 | `eWP7.eG7V` | func | `(i32 i32) -> ()` |
| 215 | `eWP7.WrRs` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `eWP7.YYgW` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `eWP7.AsUb` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `eWP7.CY1P` | func | `(i32) -> (i32)` |
| 219 | `eWP7.RQDA` | func | `(i32) -> (i32)` |
| 220 | `eWP7.wfzE` | func | `(i32 i32) -> ()` |
| 221 | `eWP7.S5rY` | func | `(i32 i32) -> ()` |
| 222 | `eWP7.LdJy` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `eWP7.PBED` | func | `(i32) -> (i32)` |
| 224 | `eWP7.Sjtw` | func | `(i32) -> (i32)` |
| 225 | `eWP7.pacF` | func | `(i32 i32) -> ()` |
| 226 | `eWP7.nlWV` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `eWP7.SrQr` | func | `(i32 i32) -> ()` |
| 228 | `eWP7.kjXE` | func | `(i32 i32) -> ()` |
| 229 | `eWP7.VGit` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `eWP7.BTUu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `eWP7.gHIE` | func | `(i32 i32 i32) -> ()` |
| 232 | `eWP7.IyBU` | func | `(i32 i32 i32) -> ()` |
| 233 | `eWP7.yIJU` | func | `(i32 i32) -> ()` |
| 234 | `eWP7.zBqK` | func | `(i32 i32) -> ()` |
| 235 | `eWP7.ervf` | func | `(i32 i32) -> ()` |
| 236 | `eWP7.F742` | func | `(i32 i32) -> ()` |
| 237 | `eWP7.w02j` | func | `(i32 i32) -> ()` |
| 238 | `eWP7.TwsW` | func | `(i32 i32) -> ()` |
| 239 | `eWP7.bYrb` | func | `(i32 f32 f32) -> ()` |
| 240 | `eWP7.rl7H` | func | `(i32 f32 f32) -> ()` |
| 241 | `eWP7.vnz7` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `eWP7.A1lL` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `eWP7.vwRN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `eWP7.LKuh` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `eWP7.p6OE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `eWP7.yU9s` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `eWP7.w4ra` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `eWP7.LZIL` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `eWP7.GGDh` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `eWP7.Fcph` | func | `(i32) -> ()` |
| 251 | `eWP7.G9oc` | func | `(i32 i32) -> ()` |
| 252 | `eWP7.Zagu` | func | `(i32 i32) -> ()` |
| 253 | `eWP7.NJkp` | func | `(i32 i32) -> ()` |
| 254 | `eWP7.QcN3` | func | `(i32 i32) -> ()` |
| 255 | `eWP7.vbza` | func | `(i32 i32) -> ()` |
| 256 | `eWP7.pHwC` | func | `(i32 i32) -> ()` |
| 257 | `eWP7.mKgZ` | func | `(i32 i32) -> ()` |
| 258 | `eWP7.h0LI` | func | `(i32 i32) -> ()` |
| 259 | `eWP7.zIrb` | func | `(i32) -> (i32)` |
| 260 | `eWP7.e8lH` | func | `(i32) -> (i32)` |
| 261 | `eWP7.LCWv` | func | `(i32) -> (i32)` |
| 262 | `eWP7.VgBk` | func | `(i32) -> (i32)` |
| 263 | `eWP7.tBbP` | func | `(i32) -> ()` |
| 264 | `eWP7.TM7N` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `eWP7.udUJ` | func | `(i32) -> ()` |
| 266 | `eWP7.ecQU` | func | `(i32) -> (i32)` |
| 267 | `eWP7.uM6y` | func | `(i32) -> (i32)` |
| 268 | `eWP7.AhC6` | func | `(i32) -> (i32)` |
| 269 | `eWP7.R1Mq` | func | `(i32) -> (i32)` |
| 270 | `eWP7.MqXC` | func | `(i32 i32) -> ()` |
| 271 | `eWP7.cihu` | func | `(i32) -> ()` |
| 272 | `eWP7.lNJg` | func | `(i32 i32) -> ()` |
| 273 | `eWP7.vfyl` | func | `(i32) -> (i32)` |
| 274 | `eWP7.X6pQ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `eWP7.E2Ry` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `eWP7.ZHPJ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `eWP7.iQTA` | func | `(i32 i32) -> (i32)` |
| 278 | `eWP7.GKuq` | func | `(i32 i32) -> (i32)` |
| 279 | `eWP7.D0xS` | func | `(i32 i32) -> (i32)` |
| 280 | `eWP7.wc39` | func | `(i32 i32) -> (i32)` |
| 281 | `eWP7.qWti` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `QYAl` | func | 1577 | `(i32 i32) -> ()` |
| `uNfz` | func | 2462 | `(i32 i32) -> ()` |
| `D2TW` | func | 1198 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `u7VA` | func | 2986 | `(i32) -> (i32 i32)` |
| `fZwf` | func | 1854 | `(i32 i32) -> (i32)` |
| `qBIl` | func | 1423 | `() -> (i32)` |
| `SJHv` | func | 2561 | `(i32 i32) -> ()` |
| `gdMh` | func | 2996 | `() -> (i32 i32)` |
| `KFwY` | func | 1199 | `(i32 i32 i32 i32) -> (i32)` |
| `Gbii` | func | 1252 | `(i32 i32 i32) -> ()` |
| `Xd5r` | func | 1205 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `ulcX` | func | 1279 | `(i32 i32) -> (i32)` |
| `afty` | func | 1444 | `(i32 i32 i32 i32) -> ()` |
| `bMTd` | func | 1726 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `nAba` | func | 2449 | `(i32) -> (i32)` |
| `kWpr` | func | 1564 | `(i32 i32) -> (i32)` |
| `Ti0N` | func | 3162 | `() -> (i32)` |
| `utMg` | func | 651 | `(i32 i32) -> (i32)` |
| `Qedi` | func | 2009 | `(i32 f64 f64 f64) -> (i32)` |
| `C3fY` | func | 1534 | `(i32 i32 i32 i32) -> (i32)` |
| `FHHr` | func | 1869 | `(i32) -> ()` |
| `SFWv` | func | 2162 | `(i32 i32) -> (i32)` |
| `BEqz` | func | 750 | `(i32 i32 i32) -> (i32)` |
| `k9sm` | func | 1486 | `(i32 i32) -> (i32)` |
| `gRpe` | func | 2320 | `(i32 i32) -> (i32)` |
| `pjYf` | func | 1375 | `(i32 f64 f64) -> (i32)` |
| `PjTv` | func | 1426 | `(i32) -> (i32)` |
| `G70I` | func | 1396 | `(i32 i32) -> (i32)` |
| `g2FI` | func | 1497 | `(i32 i32) -> (i32)` |
| `OEfv` | func | 3133 | `() -> (f64)` |
| `OOUC` | func | 684 | `(f64) -> (f64)` |
| `bm4A` | func | 1989 | `(i32 f64) -> (i32)` |
| `aAhK` | func | 2050 | `(i32 i32) -> (i32)` |
| `TWyR` | func | 550 | `(i32 i32 i32) -> (i32)` |
| `Acj8` | func | 2984 | `(i32) -> (i32 i32)` |
| `XdfA` | func | 1501 | `(i32 f64) -> (f64)` |
| `O2xS` | func | 3161 | `() -> (i32)` |
| `okqe` | func | 1683 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `m0HJ` | func | 1308 | `(i32 i32) -> (i32)` |
| `d6t9` | func | 2184 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WaVF` | func | 906 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Jyfa` | func | 1801 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `oHfM` | func | 2467 | `(i32) -> (i32)` |
| `NSFo` | func | 1305 | `(i32) -> ()` |
| `BTA5` | func | 1870 | `(i32) -> ()` |
| `cdzU` | func | 2562 | `() -> (i32)` |
| `eg5G` | func | 2446 | `(i32) -> (i32)` |
| `gfGd` | func | 2466 | `(i32 i32) -> ()` |
| `F1cJ` | func | 877 | `(i32 i32) -> (i32)` |
| `HyBT` | func | 2317 | `(i32 i32) -> (i32)` |
| `Jh54` | func | 2745 | `(i32) -> (i32)` |
| `SHZc` | func | 2517 | `(i32 i32) -> ()` |
| `HqnU` | func | 3091 | `(i32) -> ()` |
| `J35I` | func | 1374 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `XfCl` | func | 2445 | `(i32) -> (f64)` |
| `xT3m` | func | 3092 | `() -> ()` |
| `wg9G` | func | 1270 | `(i32) -> (i32)` |
| `WF2L` | func | 2977 | `(i32 i32) -> (i32 i32)` |
| `VXJW` | func | 2998 | `() -> (i32 i32)` |
| `Nw7m` | func | 2454 | `(i32) -> (i32)` |
| `jkUF` | func | 3058 | `() -> (i32)` |
| `E4Gv` | func | 2432 | `(i32) -> (i32)` |
| `O94T` | func | 1324 | `(i32 i32 i32) -> (i32)` |
| `QSDL` | func | 2976 | `(i32 i32) -> (i32 i32)` |
| `n8dy` | func | 2973 | `(i32 i32) -> (i32 i32)` |
| `Kor8` | func | 2450 | `(i32) -> (i32)` |
| `ShV8` | func | 1465 | `(i32 i32 i32 i32) -> (i32)` |
| `cfxI` | func | 1927 | `(i32) -> (i32)` |
| `mc5H` | func | 841 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `XNqk` | func | 1576 | `(i32 i32) -> ()` |
| `z7d6` | func | 1456 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `yJVN` | func | 662 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `bghj` | func | 1861 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `yDLc` | func | 2131 | `(i32 i32) -> (i32)` |
| `zrRE` | func | 3029 | `(i32 i32 i32) -> ()` |
| `bksW` | func | 1704 | `(i32) -> (i32)` |
| `x9ud` | func | 1929 | `(i32 i32 i32 i32) -> ()` |
| `hMAs` | func | 2464 | `(i32) -> (i32)` |
| `q9AV` | func | 2455 | `(i32) -> (i32)` |
| `rVh1` | func | 723 | `(i32 i32 i32 i32) -> (i32)` |
| `cg6W` | func | 1962 | `(i32 i32) -> ()` |
| `WnGM` | func | 2448 | `(i32) -> (i32)` |
| `iT3u` | func | 1618 | `(i32 i32 i32 i32) -> (i32)` |
| `D4lg` | func | 2738 | `(i32) -> (i32)` |
| `qPmw` | func | 2975 | `(i32 i32) -> (i32 i32)` |
| `xeuU` | func | 2985 | `(i32) -> (i32 i32)` |
| `wOBk` | func | 2768 | `(i32) -> (i32)` |
| `Euy8` | func | 1096 | `(i32 i32) -> (i32)` |
| `Z1yn` | func | 599 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Y4Lo` | func | 2759 | `(i32) -> (i32)` |
| `osyp` | func | 1719 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `w3sg` | func | 1912 | `(i32) -> (i32)` |
| `QrR9` | func | 2978 | `(i32 i32) -> (i32 i32)` |
| `ph7L` | func | 2528 | `() -> (i32)` |
| `qcO3` | func | 2918 | `() -> ()` |
| `L1tS` | func | 2968 | `(i32 i32 i32) -> (i32 i32)` |
| `OUft` | func | 728 | `(i32) -> (i32)` |
| `Ufn0` | func | 1844 | `(i32 i32) -> ()` |
| `s9Sc` | func | 2361 | `(i32 i32 i32 i32) -> (i32)` |
| `KMai` | func | 2270 | `(i32 i32) -> ()` |
| `AF9Z` | func | 2967 | `(i32 i32 i32) -> (i32 i32)` |
| `OD71` | func | 2983 | `(i32) -> (i32 i32)` |
| `IOcY` | func | 2447 | `(i32) -> (i32)` |
| `fiVL` | func | 2982 | `(i32) -> (i32 i32)` |
| `oeXs` | func | 1737 | `(i32 i32) -> (i32)` |
| `rx9h` | func | 1836 | `(i32 i32 f64 f64 f64) -> ()` |
| `eVsr` | func | 3085 | `(i32 i32 i32) -> ()` |
| `tJ9w` | func | 2239 | `(i32 i32) -> ()` |
| `yvhs` | func | 2431 | `(i32 i32) -> ()` |
| `wraC` | func | 2484 | `(i32) -> (i32)` |
| `UIkW` | func | 1581 | `(i32 f64 f64 f64) -> (i32)` |
| `tdqx` | func | 3137 | `(i32) -> (i32)` |
| `zYUl` | func | 2483 | `(i32) -> (i32)` |
| `ugnJ` | func | 2348 | `(i32 i32) -> (i32)` |
| `NfZJ` | func | 2403 | `(i32) -> (i32)` |
| `u9rj` | func | 2974 | `(i32 i32) -> (i32 i32)` |
| `zlvX` | func | 2465 | `(i32) -> (i32)` |
| `t9Hv` | func | 731 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `xoht` | func | 2451 | `(i32) -> (i32)` |
| `MM7b` | func | 2402 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `UQSO` | func | 2937 | `(i32 i32) -> (i32)` |
| `yOiJ` | func | 1498 | `(i32 i32) -> (i32)` |
| `d9oI` | global | 1 | `` |
| `cP5Q` | func | 3030 | `(i32 i32) -> ()` |
| `Wz64` | func | 1461 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `grby` | func | 2943 | `(i32 i32 i32 i32) -> (i32)` |
| `AXZY` | func | 691 | `(i32 i32) -> (i32)` |
| `ZOOI` | func | 2025 | `(i32 i32) -> ()` |
| `ANei` | func | 2386 | `(i32) -> (i32)` |
| `jWkX` | func | 3138 | `(i32) -> ()` |
| `Uhvx` | func | 2949 | `(i32 i32) -> ()` |
| `nla1` | func | 2778 | `(i32) -> ()` |
| `z3UW` | func | 2453 | `(i32) -> (i32)` |
| `tBkn` | func | 2485 | `(i32) -> (i32)` |
| `oaJv` | func | 2318 | `(i32 i32) -> (i32)` |
| `lGRC` | func | 2800 | `(i32) -> (i32)` |
| `jfLy` | func | 2972 | `(i32 i32) -> (i32 i32)` |
| `GwEd` | func | 2476 | `(i32 i32) -> (i32)` |
| `juTd` | func | 666 | `(i32 i32) -> (i32)` |
| `l2fw` | global | 2 | `` |
| `c3VX` | func | 876 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `JuFZ` | func | 1473 | `(i32 i32) -> (i32)` |
| `Zj3T` | func | 1796 | `() -> (i32)` |
| `KBJy` | func | 1419 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `bpJG` | func | 2997 | `() -> (i32 i32)` |
| `Gdhc` | func | 3020 | `(i32 i32 i32 i32) -> ()` |
| `ZZU6` | func | 2474 | `(i32) -> (i32)` |
| `sXdo` | func | 2475 | `(i32 i32) -> (i32)` |
| `Kt8q` | func | 895 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `jkNg` | func | 1157 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ovDt` | func | 1513 | `(i32 i32 i32) -> (i32)` |
| `S4Aw` | func | 1097 | `(i32 i32) -> ()` |
| `SUcU` | func | 2452 | `(i32) -> ()` |
| `xe9T` | func | 2240 | `(i32 f64) -> (i32)` |
| `GxEc` | func | 2319 | `(i32 i32) -> (i32)` |
| `ZGgZ` | func | 1228 | `(i32 i32) -> (i32)` |
| `tPoR` | func | 1247 | `(i32 i32 i32) -> (i32)` |
| `J8SN` | func | 1466 | `(i32) -> (i32)` |
| `CG7p` | func | 1816 | `(i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 735 · max 735
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2019592, `i32` = i32.const 2020148

## Functions

- 2,890 bodies · 4,026,528 code bytes · avg 1.4 KB
- instruction scan: 2,890 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 105 |
| <= 128 bytes | 251 |
| <= 256 bytes | 368 |
| <= 512 bytes | 672 |
| <= 1024 bytes | 581 |
| <= 2048 bytes | 423 |
| <= 4096 bytes | 177 |
| <= 8192 bytes | 90 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,813 | 91,028 | local.get×26756, i32.const×10177, i32.load×5791, local.set×4887, local.tee×4767 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,624 | 54,591 | local.get×15198, i32.const×6563, i32.add×3205, local.set×3091, i32.load×2948 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 105 | 36,598 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,787 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,393 | 12,764 | local.get×3784, i32.const×1615, local.set×985, i32.add×682, i32.load×663 |
| 9 | `(i32 i32 i32) -> (i32)` | 74 | 22,549 | 10,769 | local.get×2881, i32.const×1289, i32.load×749, local.set×499, i32.add×477 |
| 10 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,312 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,817 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 34 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 70 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 193 | `(i32 i32) -> ()` | 10 | 27,551 | 13,273 | local.get×4670, i32.load×1257, i32.const×1060, end×827, i32.add×762 |
| 215 | `(i32) -> ()` | 19 | 23,258 | 10,909 | local.get×2733, i32.load×1495, i32.const×1187, local.tee×1011, end×855 |
| 722 | `(i32 i32) -> ()` | 139 | 42,973 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 723 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1572 | `(i32 i32) -> (i32)` | 182 | 54,919 | 19,834 | local.get×6599, i32.const×2595, i64.store×1935, i64.const×1087, i64.load×1068 |
| 1979 | `(i32 i32) -> ()` | 111 | 39,746 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2571 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2841 | `(i32 i32 i32 i32) -> ()` | 137 | 31,374 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2860 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                 skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13
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
| `local.get` | 538,697 |
| `i32.const` | 225,243 |
| `local.tee` | 100,033 |
| `i32.load` | 94,027 |
| `local.set` | 93,946 |
| `i32.add` | 86,859 |
| `end` | 78,955 |
| `br_if` | 64,379 |
| `i32.store` | 46,438 |
| `block` | 37,177 |
| `i64.const` | 32,473 |
| `i64.store` | 31,711 |
| `if` | 30,127 |
| `call` | 29,107 |
| `i32.sub` | 24,563 |
| `i64.load` | 23,462 |
| `br` | 23,148 |
| `i32.eqz` | 19,507 |
| `select` | 17,081 |
| `i32.shl` | 16,369 |
| `i32.and` | 16,357 |
| `i32.ne` | 15,841 |
| `i32.load8_u` | 14,923 |
| `i32.eq` | 13,953 |
| `i32.store8` | 12,623 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,890/2,890 (degraded: 0)
