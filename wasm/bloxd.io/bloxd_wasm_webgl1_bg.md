# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `pxmq3aq.c63b303d` · analyzed 2026-11-26T17:59:12+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.bfc8a0abe61d3e52b5be.wasm
> 4,870,652 bytes (4.6 MB) · sha256 `754597f08f30bb20…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `7bbb6341ccd7a760.10663` → `bda4a726abec654c.10663` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/159 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,886 / 282 |
| Exports / imports | 159 / 283 |
| Code bytes (function bodies) | 4,019,323 (3.8 MB) |
| Total local variables | 30,837 |
| Instructions (scanable bodies) | 1,885,994 |
| Data segments / bytes | 3,772 / 804,846 |
| Element segments / entries | 1 / 734 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `bda4a726abec654c.10663` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,508 | 177 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,937 | 2886 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,273 | 159 |
| 9 | element | 1,475 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,024,621 | 2886 |
| 11 | data | 835,332 | 3772 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `DeIa.jrd3` | memory | `[128..14648]` |
| 0 | `DeIa.RKuZ` | func | `(i32) -> (f64)` |
| 1 | `DeIa.hfxa` | func | `() -> (i32)` |
| 2 | `DeIa.sn7r` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `DeIa.y97W` | func | `(i32) -> ()` |
| 4 | `DeIa.QEth` | func | `(i32 i32) -> (i32)` |
| 5 | `DeIa.MF85` | func | `(i32) -> (i32)` |
| 6 | `DeIa.YArz` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `DeIa.O6x0` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `DeIa.xtzH` | func | `(i32) -> (i32)` |
| 9 | `DeIa.ht4u` | func | `(i32 i32) -> ()` |
| 10 | `DeIa.SfBb` | func | `(i32 i32) -> ()` |
| 11 | `DeIa.C0JX` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `DeIa.enEm` | func | `(i32 i32) -> (i32)` |
| 13 | `DeIa.hzgJ` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `DeIa.vBIH` | func | `(i32) -> (i32)` |
| 15 | `DeIa.NL74` | func | `(i32 i32) -> (i32)` |
| 16 | `DeIa.rfQk` | func | `(i32 i32) -> (i32)` |
| 17 | `DeIa.M9En` | func | `(i32 i32) -> ()` |
| 18 | `DeIa.MBZJ` | func | `(i32) -> (i32)` |
| 19 | `DeIa.fjRX` | func | `(i32) -> (i32)` |
| 20 | `DeIa.ULU0` | func | `(i32) -> (i32)` |
| 21 | `DeIa.YqWj` | func | `(i32) -> ()` |
| 22 | `DeIa.aT1z` | func | `(i32 i32) -> ()` |
| 23 | `DeIa.ssEu` | func | `(i32 i32) -> ()` |
| 24 | `DeIa.QbfL` | func | `(i32) -> (i32)` |
| 25 | `DeIa.yEzs` | func | `(i32 i32) -> ()` |
| 26 | `DeIa.dhNC` | func | `(i32 i32) -> (i32)` |
| 27 | `DeIa.bkUm` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `DeIa.ko9s` | func | `(i32 i32) -> (i32)` |
| 29 | `DeIa.eyw1` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `DeIa.GS8g` | func | `(i32) -> (i32)` |
| 31 | `DeIa.eTdA` | func | `() -> (f64)` |
| 32 | `DeIa.fwVd` | func | `(i32 i32) -> ()` |
| 33 | `DeIa.HxPc` | func | `(i32) -> (i32)` |
| 34 | `DeIa.H9VN` | func | `(i32) -> (i32)` |
| 35 | `DeIa.wcoy` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `DeIa.A2fM` | func | `(i32) -> (i32)` |
| 37 | `DeIa.sQtV` | func | `(i32) -> (i32)` |
| 38 | `DeIa.GWX0` | func | `(i32) -> (i32)` |
| 39 | `DeIa.dGLr` | func | `(i32 i32) -> (i32)` |
| 40 | `DeIa.VFC0` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `DeIa.tk6n` | func | `(i32) -> (i32)` |
| 42 | `DeIa.TH9Y` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `DeIa.WAuk` | func | `(i32) -> (i32)` |
| 44 | `DeIa.RRza` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `DeIa.Evif` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `DeIa.WIh8` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `DeIa.G6Hf` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `DeIa.UJS1` | func | `(i32 i32 i32) -> ()` |
| 49 | `DeIa.Bjxa` | func | `(i32 i32 i32) -> ()` |
| 50 | `DeIa.g7ym` | func | `(i32 i32 i32) -> ()` |
| 51 | `DeIa.cFr6` | func | `(i32 i32) -> ()` |
| 52 | `DeIa.w1sB` | func | `(i32 i32) -> ()` |
| 53 | `DeIa.qudk` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `DeIa.pD5K` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `DeIa.zF2o` | func | `(i32 f32 f32) -> ()` |
| 56 | `DeIa.GOnr` | func | `(i32 f32 f32) -> ()` |
| 57 | `DeIa.ENw9` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `DeIa.PDZV` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `DeIa.b1uB` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `DeIa.Giuo` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `DeIa.vpOf` | func | `(i32 i32 i32) -> ()` |
| 62 | `DeIa.G0oS` | func | `(i32 i32 i32) -> ()` |
| 63 | `DeIa.NUu8` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `DeIa.U0HC` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `DeIa.kuIJ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `DeIa.oR8A` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `DeIa.qRDh` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `DeIa.rc7k` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `DeIa.Ibu1` | func | `(i32) -> (i32)` |
| 70 | `DeIa.xUuA` | func | `(i32) -> ()` |
| 71 | `DeIa.g9PJ` | func | `(i32) -> (i32)` |
| 72 | `DeIa.WfJN` | func | `(i32 i32) -> (i32)` |
| 73 | `DeIa.BUBm` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `DeIa.bQ9o` | func | `(i32 i32 i32) -> ()` |
| 75 | `DeIa.xpA7` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `DeIa.VxYL` | func | `() -> (f64)` |
| 77 | `DeIa.Xetf` | func | `() -> (f64)` |
| 78 | `DeIa.GAHU` | func | `(i32 i32) -> ()` |
| 79 | `DeIa.CcUb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `DeIa.ahWs` | func | `(i32 i32 i32) -> ()` |
| 81 | `DeIa.PLFQ` | func | `(i32 i32 i32) -> ()` |
| 82 | `DeIa.spuz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `DeIa.BT7V` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `DeIa.cvaW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `DeIa.u9VR` | func | `(i32 i32) -> ()` |
| 86 | `DeIa.GoBc` | func | `(i32 i32) -> ()` |
| 87 | `DeIa.czSt` | func | `(i32) -> (i32)` |
| 88 | `DeIa.zDDk` | func | `(i32 i32) -> ()` |
| 89 | `DeIa.nnqc` | func | `(i32 i32) -> ()` |
| 90 | `DeIa.jyUY` | func | `(i32 i32 i32) -> ()` |
| 91 | `DeIa.j0Vc` | func | `(i32 i32 i32) -> ()` |
| 92 | `DeIa.UohK` | func | `(i32) -> (i32)` |
| 93 | `DeIa.UtC9` | func | `(i32) -> (i32)` |
| 94 | `DeIa.QW54` | func | `(i32 i32) -> (i32)` |
| 95 | `DeIa.jwu1` | func | `(i32 i32) -> (i32)` |
| 96 | `DeIa.pG0g` | func | `(i32 i32) -> ()` |
| 97 | `DeIa.XtpZ` | func | `(i32 i32) -> ()` |
| 98 | `DeIa.SaVZ` | func | `(i32 i32 i32) -> ()` |
| 99 | `DeIa.bPsx` | func | `(i32 i32 i32) -> ()` |
| 100 | `DeIa.OooJ` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `DeIa.SNti` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `DeIa.cb7y` | func | `(i32 i32 f32) -> ()` |
| 103 | `DeIa.lWMm` | func | `(i32 i32 f32) -> ()` |
| 104 | `DeIa.ngSk` | func | `(i32 i32 i32) -> ()` |
| 105 | `DeIa.GDgN` | func | `(i32 i32 i32) -> ()` |
| 106 | `DeIa.wKxA` | func | `(i32 i32 i32) -> ()` |
| 107 | `DeIa.iog6` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `DeIa.nO2c` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `DeIa.uf9r` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `DeIa.pgw0` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `DeIa.tcHN` | func | `(i32 i32) -> ()` |
| 112 | `DeIa.eGRs` | func | `(i32 i32) -> ()` |
| 113 | `DeIa.ZBZs` | func | `(i32 i32) -> ()` |
| 114 | `DeIa.CriT` | func | `(i32 i32) -> ()` |
| 115 | `DeIa.lyj1` | func | `(i32) -> (i32)` |
| 116 | `DeIa.w37g` | func | `(i32) -> (i32)` |
| 117 | `DeIa.aXCS` | func | `(i32) -> (i32)` |
| 118 | `DeIa.TWHq` | func | `(i32) -> (i32)` |
| 119 | `DeIa.C5uC` | func | `(i32 i32) -> ()` |
| 120 | `DeIa.zf25` | func | `(i32 i32) -> ()` |
| 121 | `DeIa.DJFY` | func | `(i32 i32) -> ()` |
| 122 | `DeIa.LxUH` | func | `(i32 i32) -> ()` |
| 123 | `DeIa.ssPn` | func | `(i32 i32) -> ()` |
| 124 | `DeIa.OlRW` | func | `(i32 i32) -> ()` |
| 125 | `DeIa.HH1m` | func | `(i32 i32) -> (i32)` |
| 126 | `DeIa.H7DH` | func | `(i32 i32) -> (i32)` |
| 127 | `DeIa.hzrQ` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `DeIa.HlDL` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `DeIa.BELR` | func | `(i32 i32) -> ()` |
| 130 | `DeIa.qayD` | func | `(i32 i32) -> ()` |
| 131 | `DeIa.C3IE` | func | `(i32) -> (i32)` |
| 132 | `DeIa.aK4r` | func | `(i32 i32) -> ()` |
| 133 | `DeIa.FGRK` | func | `(i32 i32) -> ()` |
| 134 | `DeIa.CIax` | func | `(i32 i32 i32) -> ()` |
| 135 | `DeIa.X7Aq` | func | `(i32 i32 i32) -> ()` |
| 136 | `DeIa.mnaI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `DeIa.EQuS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `DeIa.zz4a` | func | `(i32 i32) -> ()` |
| 139 | `DeIa.hqmC` | func | `(i32 i32 i32) -> ()` |
| 140 | `DeIa.VsJt` | func | `(i32 i32 i32) -> ()` |
| 141 | `DeIa.Qbys` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `DeIa.NSSS` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `DeIa.sxB6` | func | `(i32 i32 i32) -> ()` |
| 144 | `DeIa.J8b8` | func | `(i32 i32 i32) -> ()` |
| 145 | `DeIa.QH0e` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `DeIa.Y6wi` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `DeIa.wjoE` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `DeIa.bf25` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `DeIa.SOeU` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `DeIa.Fcwl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `DeIa.tNlK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `DeIa.RBiH` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `DeIa.pEEH` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `DeIa.F9gp` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `DeIa.DHBi` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `DeIa.wfyN` | func | `(i32) -> (i32)` |
| 157 | `DeIa.WvPJ` | func | `(i32) -> (i32)` |
| 158 | `DeIa.IUjG` | func | `(i32) -> (i32)` |
| 159 | `DeIa.AWNO` | func | `(i32) -> (i32)` |
| 160 | `DeIa.aKqI` | func | `() -> (i32)` |
| 161 | `DeIa.pkpn` | func | `() -> (i32)` |
| 162 | `DeIa.yxMI` | func | `() -> (i32)` |
| 163 | `DeIa.X6Cr` | func | `() -> (i32)` |
| 164 | `DeIa.VrxZ` | func | `(i32 i32) -> (i32)` |
| 165 | `DeIa.Zgws` | func | `(i32) -> ()` |
| 166 | `DeIa.xLBo` | func | `(i32 i32) -> (i32)` |
| 167 | `DeIa.H2b5` | func | `(i32) -> (i32)` |
| 168 | `DeIa.VpTq` | func | `(i32) -> (i32)` |
| 169 | `DeIa.MV6o` | func | `(i32) -> (i32)` |
| 170 | `DeIa.onfy` | func | `(i32) -> ()` |
| 171 | `DeIa.Xmmc` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `DeIa.pdeo` | func | `(i32) -> (i32)` |
| 173 | `DeIa.VbVk` | func | `(i32) -> (i32)` |
| 174 | `DeIa.Zwcw` | func | `(i32 i32) -> (i32)` |
| 175 | `DeIa.WuRu` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `DeIa.Sv03` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `DeIa.Nfhr` | func | `(i32) -> (i32)` |
| 178 | `DeIa.Xi54` | func | `(i32) -> (i32)` |
| 179 | `DeIa.qZee` | func | `(i32) -> (i32)` |
| 180 | `DeIa.gQt0` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `DeIa.KxTT` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `DeIa.FwbV` | func | `(i32 i32) -> ()` |
| 183 | `DeIa.rrBV` | func | `(i32 i32 i32) -> ()` |
| 184 | `DeIa.jdP6` | func | `(i32 i32) -> ()` |
| 185 | `DeIa.awE1` | func | `(i32 i32 i32) -> ()` |
| 186 | `DeIa.He2S` | func | `(i32 i32) -> ()` |
| 187 | `DeIa.oN1T` | func | `(i32 i32) -> ()` |
| 188 | `DeIa.Cl6W` | func | `(i32) -> (i32)` |
| 189 | `DeIa.Js1l` | func | `(i32 i32) -> (i32)` |
| 190 | `DeIa.INcN` | func | `(i32) -> ()` |
| 191 | `DeIa.c9Mm` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `DeIa.j3W9` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `DeIa.JomE` | func | `(i32 i32) -> ()` |
| 194 | `DeIa.oiN8` | func | `(i32 i32) -> ()` |
| 195 | `DeIa.psoD` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `DeIa.rNSE` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `DeIa.HElZ` | func | `(i32 f32) -> ()` |
| 198 | `DeIa.WMuJ` | func | `(i32 f32) -> ()` |
| 199 | `DeIa.Zobj` | func | `(i32 i32) -> ()` |
| 200 | `DeIa.JLwo` | func | `(i32 i32) -> ()` |
| 201 | `DeIa.nwco` | func | `(i32) -> (i32)` |
| 202 | `DeIa.IcFB` | func | `(i32) -> (i32)` |
| 203 | `DeIa.SjTD` | func | `(i32) -> (i32)` |
| 204 | `DeIa.vsZY` | func | `(i32) -> (i32)` |
| 205 | `DeIa.eT98` | func | `(i32 i32 i32) -> ()` |
| 206 | `DeIa.Ts2n` | func | `(i32 i32 i32) -> ()` |
| 207 | `DeIa.i9mg` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `DeIa.IFCN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `DeIa.FHBb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `DeIa.ed9S` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `DeIa.eI2V` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `DeIa.yIXA` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `DeIa.RhoQ` | func | `(i32 i32) -> ()` |
| 214 | `DeIa.NDCE` | func | `(i32 i32) -> ()` |
| 215 | `DeIa.U8ns` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `DeIa.Wwyu` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `DeIa.owFy` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `DeIa.V0Xy` | func | `(i32) -> (i32)` |
| 219 | `DeIa.JxUh` | func | `(i32) -> (i32)` |
| 220 | `DeIa.wOYi` | func | `(i32 i32) -> ()` |
| 221 | `DeIa.rQsQ` | func | `(i32 i32) -> ()` |
| 222 | `DeIa.ccvC` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `DeIa.A1zi` | func | `(i32) -> (i32)` |
| 224 | `DeIa.A7si` | func | `(i32) -> (i32)` |
| 225 | `DeIa.H8rk` | func | `(i32 i32) -> ()` |
| 226 | `DeIa.d3Kh` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `DeIa.Foxd` | func | `(i32 i32) -> ()` |
| 228 | `DeIa.Byxr` | func | `(i32 i32) -> ()` |
| 229 | `DeIa.UzRv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `DeIa.FxyT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `DeIa.TRVw` | func | `(i32 i32 i32) -> ()` |
| 232 | `DeIa.xvdm` | func | `(i32 i32 i32) -> ()` |
| 233 | `DeIa.GFAC` | func | `(i32 i32) -> ()` |
| 234 | `DeIa.q1Ai` | func | `(i32 i32) -> ()` |
| 235 | `DeIa.oPTw` | func | `(i32 i32) -> ()` |
| 236 | `DeIa.CxtU` | func | `(i32 i32) -> ()` |
| 237 | `DeIa.thgA` | func | `(i32 i32) -> ()` |
| 238 | `DeIa.fdNo` | func | `(i32 i32) -> ()` |
| 239 | `DeIa.IOnq` | func | `(i32 f32 f32) -> ()` |
| 240 | `DeIa.Lz16` | func | `(i32 f32 f32) -> ()` |
| 241 | `DeIa.CTtK` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `DeIa.ivCa` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `DeIa.F8un` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `DeIa.OhBn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `DeIa.kbNG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `DeIa.Qfn7` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `DeIa.Ln7T` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `DeIa.ldfN` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `DeIa.NSEH` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `DeIa.T2zr` | func | `(i32) -> ()` |
| 251 | `DeIa.l4sP` | func | `(i32 i32) -> ()` |
| 252 | `DeIa.GsYU` | func | `(i32 i32) -> ()` |
| 253 | `DeIa.aKDe` | func | `(i32 i32) -> ()` |
| 254 | `DeIa.oMbN` | func | `(i32 i32) -> ()` |
| 255 | `DeIa.Fmtv` | func | `(i32 i32) -> ()` |
| 256 | `DeIa.XZSk` | func | `(i32 i32) -> ()` |
| 257 | `DeIa.TvPx` | func | `(i32 i32) -> ()` |
| 258 | `DeIa.zriM` | func | `(i32 i32) -> ()` |
| 259 | `DeIa.Csnt` | func | `(i32) -> (i32)` |
| 260 | `DeIa.QD3g` | func | `(i32) -> (i32)` |
| 261 | `DeIa.NtcL` | func | `(i32) -> (i32)` |
| 262 | `DeIa.KxVR` | func | `(i32) -> (i32)` |
| 263 | `DeIa.Goe7` | func | `(i32) -> ()` |
| 264 | `DeIa.t5p7` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `DeIa.CH6V` | func | `(i32) -> ()` |
| 266 | `DeIa.NLeV` | func | `(i32) -> (i32)` |
| 267 | `DeIa.IMMx` | func | `(i32) -> (i32)` |
| 268 | `DeIa.EQCh` | func | `(i32) -> (i32)` |
| 269 | `DeIa.D7FS` | func | `(i32) -> (i32)` |
| 270 | `DeIa.sjDw` | func | `(i32 i32) -> ()` |
| 271 | `DeIa.SCyj` | func | `(i32) -> ()` |
| 272 | `DeIa.QI7k` | func | `(i32 i32) -> ()` |
| 273 | `DeIa.OiHv` | func | `(i32) -> (i32)` |
| 274 | `DeIa.kEbx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `DeIa.IBo2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `DeIa.Brd1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `DeIa.j2F9` | func | `(i32 i32) -> (i32)` |
| 278 | `DeIa.IUYG` | func | `(i32 i32) -> (i32)` |
| 279 | `DeIa.O2lJ` | func | `(i32 i32) -> (i32)` |
| 280 | `DeIa.PLTk` | func | `(i32 i32) -> (i32)` |
| 281 | `DeIa.IUa5` | func | `(i32 i32) -> (i32)` |

## Exports

159 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `WNYD` | func | 1856 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `ArqS` | func | 2020 | `(i32 i32) -> ()` |
| `RbOR` | func | 1202 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `u1Dl` | func | 601 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NczX` | func | 2235 | `(i32 f64) -> (i32)` |
| `Shpp` | func | 652 | `(i32 i32) -> (i32)` |
| `tC9e` | func | 2964 | `(i32 i32 i32) -> (i32 i32)` |
| `s0lw` | func | 2557 | `() -> (i32)` |
| `XnBl` | func | 1679 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `pLQC` | func | 2441 | `(i32) -> (i32)` |
| `AUUD` | func | 1094 | `(i32 i32) -> ()` |
| `Yqyq` | func | 875 | `(i32 i32) -> (i32)` |
| `NFSE` | func | 747 | `(i32 i32 i32) -> (i32)` |
| `reOj` | func | 2313 | `(i32 i32) -> (i32)` |
| `qXct` | func | 2513 | `(i32 i32) -> ()` |
| `g4Jz` | func | 2045 | `(i32 i32) -> (i32)` |
| `x4Vt` | func | 667 | `(i32 i32) -> (i32)` |
| `jepr` | func | 1791 | `() -> (i32)` |
| `WIy4` | func | 2343 | `(i32 i32) -> (i32)` |
| `u8Mo` | func | 1457 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vfQ0` | func | 2733 | `(i32) -> (i32)` |
| `fSPO` | func | 1796 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `GNLz` | func | 2126 | `(i32 i32) -> (i32)` |
| `z82u` | global | 2 | `` |
| `M9y1` | func | 1093 | `(i32 i32) -> (i32)` |
| `YQ0N` | func | 1831 | `(i32 i32 f64 f64 f64) -> ()` |
| `VnHx` | func | 1370 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `qBtT` | func | 1839 | `(i32 i32) -> ()` |
| `AueP` | func | 1422 | `(i32) -> (i32)` |
| `LhsC` | func | 2754 | `(i32) -> (i32)` |
| `kJu0` | func | 1301 | `(i32) -> ()` |
| `TtKp` | func | 1811 | `(i32 i32 i32 i32) -> (i32)` |
| `aKJD` | func | 1392 | `(i32 i32) -> (i32)` |
| `R8ge` | func | 3025 | `(i32 i32 i32) -> ()` |
| `CXKE` | func | 1304 | `(i32 i32) -> (i32)` |
| `atM9` | func | 1715 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NpXe` | func | 1462 | `(i32) -> (i32)` |
| `yLJc` | func | 2459 | `(i32) -> (i32)` |
| `Zc59` | func | 3054 | `() -> (i32)` |
| `K0m3` | func | 2992 | `() -> (i32 i32)` |
| `z6Iy` | func | 1494 | `(i32 i32) -> (i32)` |
| `hwA6` | func | 2356 | `(i32 i32 i32 i32) -> (i32)` |
| `PsZy` | func | 3088 | `() -> ()` |
| `ZtYV` | func | 1560 | `(i32 i32) -> (i32)` |
| `nUKS` | func | 1864 | `(i32) -> ()` |
| `av8X` | func | 1452 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `whNE` | func | 2312 | `(i32 i32) -> (i32)` |
| `Mqzb` | func | 2914 | `() -> ()` |
| `IIqc` | func | 1243 | `(i32 i32 i32) -> (i32)` |
| `TQ96` | func | 2469 | `(i32 i32) -> (i32)` |
| `ytpn` | func | 2963 | `(i32 i32 i32) -> (i32 i32)` |
| `xwcv` | func | 1577 | `(i32 f64 f64 f64) -> (i32)` |
| `j9Ck` | func | 1922 | `(i32) -> (i32)` |
| `NXcA` | func | 2460 | `(i32 i32) -> ()` |
| `xaMq` | func | 2426 | `(i32) -> (i32)` |
| `wdwo` | func | 1415 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `VxOH` | func | 2978 | `(i32) -> (i32 i32)` |
| `kIeK` | func | 3087 | `(i32) -> ()` |
| `fBnc` | func | 3016 | `(i32 i32 i32 i32) -> ()` |
| `UFAi` | func | 2968 | `(i32 i32) -> (i32 i32)` |
| `A3F3` | func | 1461 | `(i32 i32 i32 i32) -> (i32)` |
| `WZKx` | func | 1865 | `(i32) -> ()` |
| `SOFI` | func | 2179 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `QBvY` | func | 2449 | `(i32) -> (i32)` |
| `K0wk` | func | 726 | `(i32) -> (i32)` |
| `Xc3X` | func | 2763 | `(i32) -> (i32)` |
| `Xg2L` | func | 1267 | `(i32) -> (i32)` |
| `KsYl` | func | 663 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Ch05` | func | 2973 | `(i32 i32) -> (i32 i32)` |
| `k3st` | func | 1248 | `(i32 i32 i32) -> ()` |
| `JIpq` | func | 2774 | `(i32) -> ()` |
| `akz3` | func | 2478 | `(i32) -> (i32)` |
| `zIjZ` | func | 1700 | `(i32) -> (i32)` |
| `buCH` | func | 2447 | `(i32) -> (i32)` |
| `JBoY` | func | 1371 | `(i32 f64 f64) -> (i32)` |
| `BunD` | func | 3081 | `(i32 i32 i32) -> ()` |
| `goWa` | func | 2972 | `(i32 i32) -> (i32 i32)` |
| `k1cP` | func | 1530 | `(i32 i32 i32 i32) -> (i32)` |
| `v2Y2` | func | 2315 | `(i32 i32) -> (i32)` |
| `rhvq` | func | 2314 | `(i32 i32) -> (i32)` |
| `mQ0b` | func | 551 | `(i32 i32 i32) -> (i32)` |
| `gXhJ` | func | 2468 | `(i32) -> (i32)` |
| `SE3v` | func | 2980 | `(i32) -> (i32 i32)` |
| `ovaF` | func | 2381 | `(i32) -> (i32)` |
| `ZtAP` | func | 2443 | `(i32) -> (i32)` |
| `H7j5` | func | 730 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Mh6D` | func | 2994 | `() -> (i32 i32)` |
| `s6Lg` | func | 690 | `(i32 i32) -> (i32)` |
| `hhEc` | func | 902 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jHwx` | func | 1482 | `(i32 i32) -> (i32)` |
| `Qed0` | func | 1984 | `(i32 f64) -> (i32)` |
| `WzKV` | func | 1907 | `(i32) -> (i32)` |
| `w2BN` | func | 2556 | `(i32 i32) -> ()` |
| `kLzC` | func | 2157 | `(i32 i32) -> (i32)` |
| `mjXp` | func | 1849 | `(i32 i32) -> (i32)` |
| `TFei` | func | 1497 | `(i32 f64) -> (f64)` |
| `xKXv` | func | 1572 | `(i32 i32) -> ()` |
| `k1Cm` | func | 2969 | `(i32 i32) -> (i32 i32)` |
| `gM61` | func | 2456 | `(i32 i32) -> ()` |
| `x7sF` | func | 1614 | `(i32 i32 i32 i32) -> (i32)` |
| `ebAV` | func | 1419 | `() -> (i32)` |
| `zE6X` | func | 2445 | `(i32) -> (i32)` |
| `rR4z` | func | 2981 | `(i32) -> (i32 i32)` |
| `Wveg` | func | 2458 | `(i32) -> (i32)` |
| `bjBa` | func | 1469 | `(i32 i32) -> (i32)` |
| `PnJ4` | func | 3134 | `(i32) -> ()` |
| `e6Kw` | func | 892 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `SbTv` | func | 2397 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `LBk8` | func | 2939 | `(i32 i32 i32 i32) -> (i32)` |
| `VV3n` | func | 2004 | `(i32 f64 f64 f64) -> (i32)` |
| `Zuu3` | func | 1320 | `(i32 i32 i32) -> (i32)` |
| `hWOX` | global | 1 | `` |
| `vpoq` | func | 839 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `LukT` | func | 1493 | `(i32 i32) -> (i32)` |
| `lxjS` | func | 2442 | `(i32) -> (i32)` |
| `XakN` | func | 1196 | `(i32 i32 i32 i32) -> (i32)` |
| `Ncl9` | func | 3157 | `() -> (i32)` |
| `ZEC8` | func | 2740 | `(i32) -> (i32)` |
| `K3Ct` | func | 2945 | `(i32 i32) -> ()` |
| `g5Nv` | func | 2796 | `(i32) -> (i32)` |
| `mDsO` | func | 2398 | `(i32) -> (i32)` |
| `VOE0` | func | 2993 | `() -> (i32 i32)` |
| `kxj1` | func | 1957 | `(i32 i32) -> ()` |
| `rK41` | func | 2524 | `() -> (i32)` |
| `RbhT` | func | 2444 | `(i32) -> (i32)` |
| `BXSC` | func | 2265 | `(i32 i32) -> ()` |
| `E6xF` | func | 3158 | `() -> (i32)` |
| `vNwv` | func | 3129 | `() -> (f64)` |
| `qSKc` | func | 722 | `(i32 i32 i32 i32) -> (i32)` |
| `aTxR` | func | 2971 | `(i32 i32) -> (i32 i32)` |
| `mIQ5` | func | 2234 | `(i32 i32) -> ()` |
| `GGxL` | func | 2439 | `(i32) -> (f64)` |
| `k5dc` | func | 1510 | `(i32 i32 i32) -> (i32)` |
| `pb3c` | func | 1225 | `(i32 i32) -> (i32)` |
| `IZs2` | func | 2970 | `(i32 i32) -> (i32 i32)` |
| `VuAN` | func | 1275 | `(i32 i32) -> (i32)` |
| `wJnZ` | func | 1733 | `(i32 i32) -> (i32)` |
| `pDo8` | func | 1924 | `(i32 i32 i32 i32) -> ()` |
| `GCT6` | func | 1722 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Xe9N` | func | 2461 | `(i32) -> (i32)` |
| `PcSE` | func | 2933 | `(i32 i32) -> (i32)` |
| `IBSX` | func | 874 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `pwv8` | func | 2974 | `(i32 i32) -> (i32 i32)` |
| `xrr3` | func | 2982 | `(i32) -> (i32 i32)` |
| `Y5i7` | func | 3026 | `(i32 i32) -> ()` |
| `WlIY` | func | 1573 | `(i32 i32) -> ()` |
| `SX0u` | func | 2477 | `(i32) -> (i32)` |
| `DJUa` | func | 2979 | `(i32) -> (i32 i32)` |
| `tCGf` | func | 2425 | `(i32 i32) -> ()` |
| `zJDi` | func | 2448 | `(i32) -> (i32)` |
| `Sj9J` | func | 2440 | `(i32) -> (i32)` |
| `LUoa` | func | 2470 | `(i32 i32) -> (i32)` |
| `shKz` | func | 2446 | `(i32) -> ()` |
| `Khza` | func | 1195 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `fauY` | func | 2479 | `(i32) -> (i32)` |
| `Pg0g` | func | 1440 | `(i32 i32 i32 i32) -> ()` |
| `EtWG` | func | 3133 | `(i32) -> (i32)` |
| `ihtj` | func | 1155 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 735 · max 735
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2018080, `i32` = i32.const 2018644

## Functions

- 2,886 bodies · 4,019,323 code bytes · avg 1.4 KB
- instruction scan: 2,886 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 106 |
| <= 128 bytes | 252 |
| <= 256 bytes | 367 |
| <= 512 bytes | 672 |
| <= 1024 bytes | 577 |
| <= 2048 bytes | 418 |
| <= 4096 bytes | 181 |
| <= 8192 bytes | 90 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,813 | 91,028 | local.get×26756, i32.const×10177, i32.load×5791, local.set×4887, local.tee×4767 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,624 | 54,591 | local.get×15198, i32.const×6563, i32.add×3205, local.set×3091, i32.load×2948 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 105 | 36,388 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 59 | 29,623 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,547 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,727 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 34 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 70 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 193 | `(i32 i32) -> ()` | 10 | 27,205 | 13,103 | local.get×4614, i32.load×1243, i32.const×1038, end×817, i32.add×750 |
| 215 | `(i32) -> ()` | 19 | 23,276 | 10,918 | local.get×2734, i32.load×1496, i32.const×1188, local.tee×1012, end×856 |
| 719 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 720 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1567 | `(i32 i32) -> (i32)` | 180 | 54,757 | 19,852 | local.get×6590, i32.const×2618, i64.store×1917, i64.const×1082, i64.load×1056 |
| 1974 | `(i32 i32) -> ()` | 111 | 39,586 | 17,528 | local.get×5140, i32.const×1646, local.set×891, local.tee×743, end×677 |
| 2567 | `(i32 i32) -> ()` | 398 | 142,401 | 64,327 | local.get×18492, i32.const×8026, local.set×3850, i32.load×3179, end×2818 |
| 2837 | `(i32 i32 i32 i32) -> ()` | 137 | 31,353 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2856 | `(i32 i32) -> ()` | 143 | 33,655 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
| `local.get` | 537,772 |
| `i32.const` | 224,960 |
| `local.tee` | 99,872 |
| `i32.load` | 93,953 |
| `local.set` | 93,926 |
| `i32.add` | 86,821 |
| `end` | 78,907 |
| `br_if` | 64,302 |
| `i32.store` | 46,339 |
| `block` | 37,147 |
| `i64.const` | 32,437 |
| `i64.store` | 31,579 |
| `if` | 30,108 |
| `call` | 29,070 |
| `i32.sub` | 24,558 |
| `i64.load` | 23,410 |
| `br` | 23,144 |
| `i32.eqz` | 19,492 |
| `select` | 16,925 |
| `i32.shl` | 16,367 |
| `i32.and` | 16,345 |
| `i32.ne` | 15,843 |
| `i32.load8_u` | 14,908 |
| `i32.eq` | 13,928 |
| `i32.store8` | 12,612 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,886/2,886 (degraded: 0)
