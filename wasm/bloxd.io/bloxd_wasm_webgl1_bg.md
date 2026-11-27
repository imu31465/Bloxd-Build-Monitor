# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `fl4vv.bd3c59ce` · analyzed 2026-11-28T08:15:42+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.dba81620e123863cfe5d.wasm
> 4,934,167 bytes (4.7 MB) · sha256 `6b69ab072c5f9793…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `1462576c9f593b17.10828` → `b7522103cc7ee93e.10828` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/167 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,930 / 284 |
| Exports / imports | 167 / 285 |
| Code bytes (function bodies) | 4,076,337 (3.9 MB) |
| Total local variables | 31,448 |
| Instructions (scanable bodies) | 1,912,836 |
| Data segments / bytes | 3,779 / 811,034 |
| Element segments / entries | 1 / 739 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `b7522103cc7ee93e.10828` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,528 | 180 |
| 2 | import | 3,426 | 285 |
| 3 | function | 2,984 | 2930 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,337 | 167 |
| 9 | element | 1,485 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,081,725 | 2930 |
| 11 | data | 841,578 | 3779 |
| 0 | custom:name | 30 | — |

## Types

180 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

285 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `D6Uv.Hvjv` | memory | `[128..14648]` |
| 0 | `D6Uv.G0Ud` | func | `(i32) -> (f64)` |
| 1 | `D6Uv.n2tz` | func | `() -> (i32)` |
| 2 | `D6Uv.t766` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `D6Uv.HXY2` | func | `(i32) -> ()` |
| 4 | `D6Uv.F6B2` | func | `(i32 i32) -> (i32)` |
| 5 | `D6Uv.u0w9` | func | `(i32) -> (i32)` |
| 6 | `D6Uv.XhAQ` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `D6Uv.AR88` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `D6Uv.QwUm` | func | `(i32) -> (i32)` |
| 9 | `D6Uv.ueab` | func | `(i32 i32) -> ()` |
| 10 | `D6Uv.gtKu` | func | `(i32 i32) -> ()` |
| 11 | `D6Uv.QfeM` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `D6Uv.K1IO` | func | `(i32 i32) -> (i32)` |
| 13 | `D6Uv.Zhi6` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `D6Uv.ngTC` | func | `(i32) -> (i32)` |
| 15 | `D6Uv.gODv` | func | `(i32 i32) -> (i32)` |
| 16 | `D6Uv.tIco` | func | `(i32 i32) -> (i32)` |
| 17 | `D6Uv.F4Al` | func | `(i32 i32) -> ()` |
| 18 | `D6Uv.i1ls` | func | `(i32) -> (i32)` |
| 19 | `D6Uv.F0So` | func | `(i32) -> (i32)` |
| 20 | `D6Uv.uM3B` | func | `(i32) -> (i32)` |
| 21 | `D6Uv.UD25` | func | `(i32) -> ()` |
| 22 | `D6Uv.kPLT` | func | `(i32 i32) -> ()` |
| 23 | `D6Uv.cDwq` | func | `(i32 i32) -> ()` |
| 24 | `D6Uv.Fvka` | func | `(i32) -> (i32)` |
| 25 | `D6Uv.TkIJ` | func | `(i32 i32) -> ()` |
| 26 | `D6Uv.tue8` | func | `(i32 i32) -> (i32)` |
| 27 | `D6Uv.zAMj` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `D6Uv.y8DD` | func | `(i32 i32) -> (i32)` |
| 29 | `D6Uv.qsuO` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `D6Uv.rewC` | func | `(i32) -> (i32)` |
| 31 | `D6Uv.SstL` | func | `() -> (f64)` |
| 32 | `D6Uv.V00v` | func | `(i32 i32) -> ()` |
| 33 | `D6Uv.m5JP` | func | `(i32) -> (i32)` |
| 34 | `D6Uv.Q8km` | func | `(i32) -> (i32)` |
| 35 | `D6Uv.RZrV` | func | `(i32) -> ()` |
| 36 | `D6Uv.daYH` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `D6Uv.FSL8` | func | `(i32) -> (i32)` |
| 38 | `D6Uv.SuPa` | func | `(i32) -> (i32)` |
| 39 | `D6Uv.ASTw` | func | `(i32) -> (i32)` |
| 40 | `D6Uv.qfFI` | func | `(i32 i32) -> (i32)` |
| 41 | `D6Uv.M57P` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `D6Uv.byXj` | func | `(i32) -> (i32)` |
| 43 | `D6Uv.ySIb` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `D6Uv.M8Df` | func | `(i32) -> (i32)` |
| 45 | `D6Uv.IKTG` | func | `(i32 i32 i32 i32) -> ()` |
| 46 | `D6Uv.XKIK` | func | `(i32 i32 i32) -> (i32)` |
| 47 | `D6Uv.hFun` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 48 | `D6Uv.q1qE` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 49 | `D6Uv.vDoh` | func | `(i32 i32 i32) -> ()` |
| 50 | `D6Uv.Emri` | func | `(i32 i32 i32) -> ()` |
| 51 | `D6Uv.uBY5` | func | `(i32 i32 i32) -> ()` |
| 52 | `D6Uv.fB5y` | func | `(i32 i32) -> ()` |
| 53 | `D6Uv.nzJf` | func | `(i32 i32) -> ()` |
| 54 | `D6Uv.npF8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `D6Uv.pUuD` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `D6Uv.wn9z` | func | `(i32 f32 f32) -> ()` |
| 57 | `D6Uv.gAPw` | func | `(i32 f32 f32) -> ()` |
| 58 | `D6Uv.TtZW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `D6Uv.fSXW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `D6Uv.M1j6` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `D6Uv.Wmm9` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `D6Uv.ChXL` | func | `(i32 i32 i32) -> ()` |
| 63 | `D6Uv.tpEG` | func | `(i32 i32 i32) -> ()` |
| 64 | `D6Uv.JhCc` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `D6Uv.vVEQ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `D6Uv.G4dE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `D6Uv.QHEJ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `D6Uv.prxw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `D6Uv.qrIl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `D6Uv.cgJ6` | func | `(i32) -> (i32)` |
| 71 | `D6Uv.mYZc` | func | `(i32) -> ()` |
| 72 | `D6Uv.M39P` | func | `(i32) -> (i32)` |
| 73 | `D6Uv.POcQ` | func | `(i32 i32) -> (i32)` |
| 74 | `D6Uv.NEcA` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `D6Uv.JZv6` | func | `(i32 i32 i32) -> ()` |
| 76 | `D6Uv.Qo6p` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `D6Uv.bWDa` | func | `() -> (f64)` |
| 78 | `D6Uv.IEP5` | func | `() -> (f64)` |
| 79 | `D6Uv.pJxt` | func | `(i32 i32) -> ()` |
| 80 | `D6Uv.O9lv` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `D6Uv.M0wu` | func | `(i32 i32 i32) -> ()` |
| 82 | `D6Uv.JOqf` | func | `(i32 i32 i32) -> ()` |
| 83 | `D6Uv.gw0r` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `D6Uv.y0Ke` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `D6Uv.YdtO` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `D6Uv.qs4E` | func | `(i32 i32) -> ()` |
| 87 | `D6Uv.Ph5Q` | func | `(i32 i32) -> ()` |
| 88 | `D6Uv.abB8` | func | `(i32) -> (i32)` |
| 89 | `D6Uv.pF7n` | func | `(i32 i32) -> ()` |
| 90 | `D6Uv.FdTu` | func | `(i32 i32) -> ()` |
| 91 | `D6Uv.NeXu` | func | `(i32 i32 i32) -> ()` |
| 92 | `D6Uv.KFvp` | func | `(i32 i32 i32) -> ()` |
| 93 | `D6Uv.xgiQ` | func | `(i32) -> (i32)` |
| 94 | `D6Uv.Yj0M` | func | `(i32) -> (i32)` |
| 95 | `D6Uv.upAH` | func | `(i32 i32) -> (i32)` |
| 96 | `D6Uv.WbX2` | func | `(i32 i32) -> (i32)` |
| 97 | `D6Uv.VI79` | func | `(i32 i32) -> ()` |
| 98 | `D6Uv.pvc1` | func | `(i32 i32) -> ()` |
| 99 | `D6Uv.TMSn` | func | `(i32 i32 i32) -> ()` |
| 100 | `D6Uv.MnWK` | func | `(i32 i32 i32) -> ()` |
| 101 | `D6Uv.untP` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `D6Uv.e0Eh` | func | `(i32 i32 i32 i32) -> ()` |
| 103 | `D6Uv.W3jh` | func | `(i32 i32 f32) -> ()` |
| 104 | `D6Uv.AcKm` | func | `(i32 i32 f32) -> ()` |
| 105 | `D6Uv.l4ub` | func | `(i32 i32 i32) -> ()` |
| 106 | `D6Uv.S98A` | func | `(i32 i32 i32) -> ()` |
| 107 | `D6Uv.vSll` | func | `(i32 i32 i32) -> ()` |
| 108 | `D6Uv.cP6p` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `D6Uv.L4ic` | func | `(i32 i32 f32 f32) -> ()` |
| 110 | `D6Uv.oLSG` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `D6Uv.IxiV` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 112 | `D6Uv.u3tB` | func | `(i32 i32) -> ()` |
| 113 | `D6Uv.s4hv` | func | `(i32 i32) -> ()` |
| 114 | `D6Uv.yGpp` | func | `(i32 i32) -> ()` |
| 115 | `D6Uv.g1qW` | func | `(i32 i32) -> ()` |
| 116 | `D6Uv.yT6k` | func | `(i32) -> (i32)` |
| 117 | `D6Uv.UdIj` | func | `(i32) -> (i32)` |
| 118 | `D6Uv.IH07` | func | `(i32) -> (i32)` |
| 119 | `D6Uv.m4PW` | func | `(i32) -> (i32)` |
| 120 | `D6Uv.jtk6` | func | `(i32 i32) -> ()` |
| 121 | `D6Uv.GdkX` | func | `(i32 i32) -> ()` |
| 122 | `D6Uv.dVlZ` | func | `(i32 i32) -> ()` |
| 123 | `D6Uv.dTnm` | func | `(i32 i32) -> ()` |
| 124 | `D6Uv.pijk` | func | `(i32 i32) -> ()` |
| 125 | `D6Uv.WuWa` | func | `(i32 i32) -> ()` |
| 126 | `D6Uv.oUME` | func | `(i32 i32) -> (i32)` |
| 127 | `D6Uv.Kr5O` | func | `(i32 i32) -> (i32)` |
| 128 | `D6Uv.Ripe` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `D6Uv.G5Ht` | func | `(i32 i32 i32 i32) -> ()` |
| 130 | `D6Uv.kuES` | func | `(i32 i32) -> ()` |
| 131 | `D6Uv.AJtd` | func | `(i32 i32) -> ()` |
| 132 | `D6Uv.FSDz` | func | `(i32) -> (i32)` |
| 133 | `D6Uv.cN3a` | func | `(i32 i32) -> ()` |
| 134 | `D6Uv.MQAC` | func | `(i32 i32) -> ()` |
| 135 | `D6Uv.kRSP` | func | `(i32 i32 i32) -> ()` |
| 136 | `D6Uv.yCZ8` | func | `(i32 i32 i32) -> ()` |
| 137 | `D6Uv.fDUu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `D6Uv.ln6E` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 139 | `D6Uv.GSc2` | func | `(i32 i32) -> ()` |
| 140 | `D6Uv.fqlQ` | func | `(i32 i32 i32) -> ()` |
| 141 | `D6Uv.lw3X` | func | `(i32 i32 i32) -> ()` |
| 142 | `D6Uv.r22N` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `D6Uv.rZFm` | func | `(i32 i32 i32 i32) -> (i32)` |
| 144 | `D6Uv.uXUv` | func | `(i32 i32 i32) -> ()` |
| 145 | `D6Uv.bsD7` | func | `(i32 i32 i32) -> ()` |
| 146 | `D6Uv.zSVp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `D6Uv.kMmp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 148 | `D6Uv.laMz` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `D6Uv.guaf` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `D6Uv.GbFC` | func | `(i32 i32 i32) -> (i32)` |
| 151 | `D6Uv.I8e2` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `D6Uv.IfCt` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 153 | `D6Uv.we90` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `D6Uv.VCa0` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `D6Uv.OOor` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `D6Uv.jk0h` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 157 | `D6Uv.PTfg` | func | `(i32) -> (i32)` |
| 158 | `D6Uv.XWgX` | func | `(i32) -> (i32)` |
| 159 | `D6Uv.R3LO` | func | `(i32) -> (i32)` |
| 160 | `D6Uv.jjv5` | func | `(i32) -> (i32)` |
| 161 | `D6Uv.kg9l` | func | `() -> (i32)` |
| 162 | `D6Uv.TYkd` | func | `() -> (i32)` |
| 163 | `D6Uv.ojLD` | func | `() -> (i32)` |
| 164 | `D6Uv.AEEG` | func | `() -> (i32)` |
| 165 | `D6Uv.ZlHF` | func | `(i32 i32) -> (i32)` |
| 166 | `D6Uv.Z0L8` | func | `(i32) -> ()` |
| 167 | `D6Uv.eJ8E` | func | `(i32 i32) -> (i32)` |
| 168 | `D6Uv.wXqd` | func | `(i32) -> (i32)` |
| 169 | `D6Uv.Sbtc` | func | `(i32) -> (i32)` |
| 170 | `D6Uv.kofO` | func | `(i32) -> (i32)` |
| 171 | `D6Uv.MlfX` | func | `(i32) -> ()` |
| 172 | `D6Uv.SX5q` | func | `(i32 i32 i32) -> (i32)` |
| 173 | `D6Uv.XBbD` | func | `(i32) -> (i32)` |
| 174 | `D6Uv.xfB6` | func | `(i32) -> (i32)` |
| 175 | `D6Uv.ME03` | func | `(i32 i32) -> (i32)` |
| 176 | `D6Uv.rpw3` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `D6Uv.AAtf` | func | `(i32 i32 i32) -> (i32)` |
| 178 | `D6Uv.WpdI` | func | `(i32) -> (i32)` |
| 179 | `D6Uv.O7LQ` | func | `(i32) -> (i32)` |
| 180 | `D6Uv.KbBb` | func | `(i32) -> (i32)` |
| 181 | `D6Uv.BuAd` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `D6Uv.EqmZ` | func | `(i32 i32 i32 i32) -> ()` |
| 183 | `D6Uv.lB3r` | func | `(i32 i32) -> ()` |
| 184 | `D6Uv.hBFo` | func | `(i32 i32 i32) -> ()` |
| 185 | `D6Uv.m6rF` | func | `(i32 i32) -> ()` |
| 186 | `D6Uv.BWVH` | func | `(i32 i32 i32) -> ()` |
| 187 | `D6Uv.o8zY` | func | `(i32 i32) -> ()` |
| 188 | `D6Uv.uV9E` | func | `(i32 i32) -> ()` |
| 189 | `D6Uv.FpTb` | func | `(i32) -> (i32)` |
| 190 | `D6Uv.ojWK` | func | `(i32 i32) -> (i32)` |
| 191 | `D6Uv.We99` | func | `(i32) -> ()` |
| 192 | `D6Uv.SwI4` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `D6Uv.Kp8V` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 194 | `D6Uv.dnHA` | func | `(i32 i32) -> ()` |
| 195 | `D6Uv.pQoQ` | func | `(i32 i32) -> ()` |
| 196 | `D6Uv.oBZ5` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `D6Uv.Ywsh` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 198 | `D6Uv.eQgF` | func | `(i32 f32) -> ()` |
| 199 | `D6Uv.yyeR` | func | `(i32 f32) -> ()` |
| 200 | `D6Uv.tJ6y` | func | `(i32 i32) -> ()` |
| 201 | `D6Uv.sOjs` | func | `(i32 i32) -> ()` |
| 202 | `D6Uv.XdM3` | func | `(i32) -> (i32)` |
| 203 | `D6Uv.IWXz` | func | `(i32) -> (i32)` |
| 204 | `D6Uv.HxYJ` | func | `(i32) -> (i32)` |
| 205 | `D6Uv.BkXo` | func | `(i32) -> (i32)` |
| 206 | `D6Uv.iLud` | func | `(i32 i32 i32) -> ()` |
| 207 | `D6Uv.VDhz` | func | `(i32 i32 i32) -> ()` |
| 208 | `D6Uv.mjrA` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `D6Uv.O7AJ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 210 | `D6Uv.sLOq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `D6Uv.Bmkf` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 212 | `D6Uv.kcsu` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `D6Uv.Qem3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 214 | `D6Uv.oWOG` | func | `(i32 i32) -> ()` |
| 215 | `D6Uv.GRj4` | func | `(i32 i32) -> ()` |
| 216 | `D6Uv.sgS0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 217 | `D6Uv.lfxS` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `D6Uv.CP2k` | func | `(i32 i32 i32 f32) -> ()` |
| 219 | `D6Uv.sQ7y` | func | `(i32) -> (i32)` |
| 220 | `D6Uv.REG3` | func | `(i32) -> (i32)` |
| 221 | `D6Uv.fSpN` | func | `(i32 i32) -> ()` |
| 222 | `D6Uv.wN0o` | func | `(i32 i32) -> ()` |
| 223 | `D6Uv.u6Be` | func | `(i32 i32 i32) -> (i32)` |
| 224 | `D6Uv.Uhte` | func | `(i32) -> (i32)` |
| 225 | `D6Uv.PJBF` | func | `(i32) -> (i32)` |
| 226 | `D6Uv.tejz` | func | `(i32 i32) -> ()` |
| 227 | `D6Uv.d2Hj` | func | `(i32 i32 i32) -> (i32)` |
| 228 | `D6Uv.oxbR` | func | `(i32 i32) -> ()` |
| 229 | `D6Uv.KFjd` | func | `(i32 i32) -> ()` |
| 230 | `D6Uv.Grro` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `D6Uv.EFdM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 232 | `D6Uv.LrOL` | func | `(i32 i32 i32) -> ()` |
| 233 | `D6Uv.KS7p` | func | `(i32 i32 i32) -> ()` |
| 234 | `D6Uv.xhbk` | func | `(i32 i32) -> ()` |
| 235 | `D6Uv.fxem` | func | `(i32 i32) -> ()` |
| 236 | `D6Uv.SQum` | func | `(i32 i32) -> ()` |
| 237 | `D6Uv.mtGt` | func | `(i32 i32) -> ()` |
| 238 | `D6Uv.RvFR` | func | `(i32 i32) -> ()` |
| 239 | `D6Uv.sYv7` | func | `(i32 i32) -> ()` |
| 240 | `D6Uv.xAgh` | func | `(i32 f32 f32) -> ()` |
| 241 | `D6Uv.Fkyq` | func | `(i32 f32 f32) -> ()` |
| 242 | `D6Uv.JNCn` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `D6Uv.guDp` | func | `(i32 i32 i32 i32) -> ()` |
| 244 | `D6Uv.tGTN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `D6Uv.CwvO` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `D6Uv.pOwW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 247 | `D6Uv.IWQ4` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `D6Uv.k1yZ` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 249 | `D6Uv.tAPi` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `D6Uv.tuou` | func | `(i32 i32 i32 i32) -> ()` |
| 251 | `D6Uv.W4oe` | func | `(i32) -> ()` |
| 252 | `D6Uv.ff9j` | func | `(i32 i32) -> ()` |
| 253 | `D6Uv.tOsY` | func | `(i32 i32) -> ()` |
| 254 | `D6Uv.gG4a` | func | `(i32 i32) -> ()` |
| 255 | `D6Uv.Yyb1` | func | `(i32 i32) -> ()` |
| 256 | `D6Uv.aeka` | func | `(i32 i32) -> ()` |
| 257 | `D6Uv.lixy` | func | `(i32 i32) -> ()` |
| 258 | `D6Uv.uEub` | func | `(i32 i32) -> ()` |
| 259 | `D6Uv.aMPa` | func | `(i32 i32) -> ()` |
| 260 | `D6Uv.AOpt` | func | `(i32) -> (i32)` |
| 261 | `D6Uv.xbnK` | func | `(i32) -> (i32)` |
| 262 | `D6Uv.MLaL` | func | `(i32) -> (i32)` |
| 263 | `D6Uv.OC0r` | func | `(i32) -> (i32)` |
| 264 | `D6Uv.awHo` | func | `(i32) -> ()` |
| 265 | `D6Uv.t21R` | func | `(i32 i32 i32 i32) -> ()` |
| 266 | `D6Uv.vcLz` | func | `(i32) -> ()` |
| 267 | `D6Uv.SUrQ` | func | `(i32) -> (i32)` |
| 268 | `D6Uv.LOM5` | func | `(i32) -> (i32)` |
| 269 | `D6Uv.Bmhv` | func | `(i32) -> (i32)` |
| 270 | `D6Uv.DYhR` | func | `(i32) -> (i32)` |
| 271 | `D6Uv.v8Rp` | func | `(i32 i32) -> ()` |
| 272 | `D6Uv.aLgE` | func | `(i32) -> ()` |
| 273 | `D6Uv.WKp4` | func | `(i32 i32) -> ()` |
| 274 | `D6Uv.D21H` | func | `(i32) -> (i32)` |
| 275 | `D6Uv.QtWO` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `D6Uv.Cd7r` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `D6Uv.N5pr` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `D6Uv.aU9c` | func | `(i32 i32) -> (i32)` |
| 279 | `D6Uv.jI6y` | func | `(i32 i32) -> (i32)` |
| 280 | `D6Uv.XcQr` | func | `(i32 i32) -> (i32)` |
| 281 | `D6Uv.B2as` | func | `(f64) -> (i32)` |
| 282 | `D6Uv.ybMa` | func | `(i32 i32) -> (i32)` |
| 283 | `D6Uv.lbsO` | func | `(i32 i32) -> (i32)` |

## Exports

167 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `B8so` | func | 2961 | `() -> ()` |
| `JXf5` | func | 1491 | `(i32 i32 i32 i32) -> (i32)` |
| `R9ms` | func | 2162 | `(i32 i32) -> (i32)` |
| `UQpy` | func | 2482 | `(i32) -> (i32)` |
| `dWAN` | func | 907 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `Kh7C` | func | 1293 | `(i32) -> (i32)` |
| `FcTE` | func | 1843 | `(i32 i32 i32 i32) -> (i32)` |
| `d9IQ` | func | 2484 | `(i32) -> (i32)` |
| `YDLG` | func | 1823 | `() -> (i32)` |
| `xFQc` | func | 2436 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Esr9` | func | 2499 | `(i32 i32) -> ()` |
| `QA8u` | func | 3071 | `(i32 i32 i32) -> ()` |
| `ENI2` | func | 1864 | `(i32 i32 f64 f64 f64) -> ()` |
| `gzgo` | func | 3181 | `(i32) -> ()` |
| `tdLm` | func | 3133 | `(i32) -> ()` |
| `tSOZ` | func | 2518 | `(i32) -> (i32)` |
| `Ycty` | func | 3019 | `(i32 i32) -> (i32 i32)` |
| `kqhJ` | func | 1558 | `(i32 i32 i32 i32) -> (i32)` |
| `XoLx` | func | 1605 | `(i32 f64 f64 f64) -> (i32)` |
| `YRWW` | func | 610 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HMfS` | func | 1601 | `(i32 i32) -> ()` |
| `TI5s` | func | 2217 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `eccD` | func | 2597 | `(i32 i32) -> ()` |
| `w76B` | func | 1116 | `(i32 i32) -> ()` |
| `X2G9` | func | 757 | `(i32 i32 i32) -> (i32)` |
| `UUKs` | func | 3180 | `(i32) -> (i32)` |
| `ouQ5` | func | 2778 | `(i32) -> (i32)` |
| `ufFH` | func | 2479 | `(i32) -> (i32)` |
| `gCUP` | func | 3134 | `() -> ()` |
| `hMW6` | func | 2352 | `(i32 i32) -> (i32)` |
| `tr3F` | func | 1269 | `(i32 i32 i32) -> (i32)` |
| `nwEl` | func | 1303 | `(i32 i32) -> (i32)` |
| `yGx5` | func | 2500 | `(i32) -> (i32)` |
| `xX8y` | func | 1328 | `(i32) -> ()` |
| `eNdX` | func | 1890 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `lDHA` | func | 1590 | `(i32 i32) -> (i32)` |
| `NLQh` | func | 2481 | `(i32) -> (i32)` |
| `h49Y` | func | 1537 | `(i32 i32 i32) -> (i32)` |
| `JleJ` | func | 2351 | `(i32 i32) -> (i32)` |
| `rrPk` | func | 1443 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `JF2h` | func | 3063 | `(i32 i32 i32 i32) -> ()` |
| `hqzc` | func | 2420 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `sWch` | func | 3027 | `(i32) -> (i32 i32)` |
| `Ao5D` | func | 3140 | `(i32) -> ()` |
| `ZkD5` | func | 1642 | `(i32 i32 i32 i32) -> (i32)` |
| `FiFV` | func | 2508 | `(i32 i32) -> (i32)` |
| `guz0` | func | 3030 | `(i32) -> (i32 i32)` |
| `btk6` | func | 561 | `(i32 i32 i32) -> (i32)` |
| `ZgrQ` | func | 3017 | `(i32 i32) -> (i32 i32)` |
| `nrOi` | func | 3127 | `(i32 i32 i32) -> ()` |
| `NMqk` | func | 2598 | `() -> (i32)` |
| `IMht` | func | 2809 | `(i32) -> (i32)` |
| `HWVn` | func | 1448 | `() -> (i32)` |
| `kkPm` | func | 1396 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `TxyS` | func | 2485 | `(i32) -> ()` |
| `JR7b` | func | 2055 | `(i32 i32) -> ()` |
| `DVQC` | func | 886 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `VwLD` | func | 1331 | `(i32 i32) -> (i32)` |
| `c3cn` | func | 2437 | `(i32) -> (i32)` |
| `zrF8` | func | 1219 | `(i32 i32 i32 i32) -> (i32)` |
| `yvYm` | func | 1872 | `(i32 i32) -> ()` |
| `Uqdc` | func | 735 | `(i32) -> (i32)` |
| `fCe6` | func | 732 | `(i32 i32 i32 i32) -> (i32)` |
| `cbim` | func | 1815 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `klbJ` | func | 2354 | `(i32 i32) -> (i32)` |
| `ND5v` | func | 2194 | `(i32 i32) -> (i32)` |
| `aT9n` | func | 1250 | `(i32 i32) -> (i32)` |
| `RE8K` | func | 2272 | `(i32 i32) -> ()` |
| `ceVa` | func | 850 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `zthS` | func | 3020 | `(i32 i32) -> (i32 i32)` |
| `VCBI` | func | 3204 | `() -> (i32)` |
| `EYKA` | global | 2 | `` |
| `FSRG` | global | 1 | `` |
| `ChHk` | func | 2039 | `(i32 f64 f64 f64) -> (i32)` |
| `wYg0` | func | 2488 | `(i32) -> (i32)` |
| `qlVH` | func | 3040 | `() -> (i32 i32)` |
| `Cnon` | func | 2483 | `(i32) -> (i32)` |
| `S5fs` | func | 1398 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `PqaG` | func | 2819 | `(i32) -> ()` |
| `VRpy` | func | 1419 | `(i32 i32) -> (i32)` |
| `gqMp` | func | 1942 | `(i32) -> (i32)` |
| `hCLo` | func | 1883 | `(i32 i32) -> (i32)` |
| `pVHn` | func | 1709 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `xSWq` | func | 1523 | `(i32 i32) -> (i32)` |
| `V6wU` | func | 2486 | `(i32) -> (i32)` |
| `fqOr` | func | 1526 | `(i32 f64) -> (f64)` |
| `to1D` | func | 2507 | `(i32) -> (i32)` |
| `fg8F` | func | 2980 | `(i32 i32) -> (i32)` |
| `NVbx` | func | 2841 | `(i32) -> (i32)` |
| `OVeD` | func | 3041 | `() -> (i32 i32)` |
| `ClAL` | func | 3176 | `() -> (f64)` |
| `SL0D` | func | 1730 | `(i32) -> (i32)` |
| `jtAD` | func | 3026 | `(i32) -> (i32 i32)` |
| `YSWH` | func | 3016 | `(i32 i32) -> (i32 i32)` |
| `BtOC` | func | 2495 | `(i32 i32) -> ()` |
| `DfkM` | func | 700 | `(i32 i32) -> (i32)` |
| `u8v5` | func | 1115 | `(i32 i32) -> (i32)` |
| `El2M` | func | 1746 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jY0h` | func | 672 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `rsgP` | func | 1347 | `(i32 i32 i32) -> (i32)` |
| `hDk5` | func | 2785 | `(i32) -> (i32)` |
| `waNm` | func | 1218 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `JtNi` | func | 2550 | `(i32 i32) -> ()` |
| `rXDr` | func | 2563 | `() -> (i32)` |
| `iFKY` | func | 2498 | `(i32) -> (i32)` |
| `ZFPb` | func | 1486 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `rBTa` | func | 1492 | `(i32) -> (i32)` |
| `F5Dn` | func | 2665 | `(i32 i32) -> ()` |
| `nYp0` | func | 2080 | `(i32 i32) -> (i32)` |
| `UyMv` | func | 1959 | `(i32 i32 i32 i32) -> ()` |
| `Fgbn` | func | 2562 | `(i32) -> ()` |
| `DFgs` | func | 3203 | `() -> (i32)` |
| `JeU6` | func | 676 | `(i32 i32) -> (i32)` |
| `OmHC` | func | 2273 | `(i32 f64) -> (i32)` |
| `MIs6` | func | 2395 | `(i32 i32 i32 i32) -> (i32)` |
| `rEli` | func | 2019 | `(i32 f64) -> (i32)` |
| `bJ0I` | func | 2992 | `(i32 i32) -> ()` |
| `BJet` | func | 919 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HUzv` | func | 2580 | `(i32) -> ()` |
| `RLvY` | func | 1764 | `(i32 i32) -> (i32)` |
| `T5uM` | func | 1753 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `s19s` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `r2QW` | func | 2478 | `(i32) -> (f64)` |
| `KnO0` | func | 2799 | `(i32) -> (i32)` |
| `rWfg` | func | 3029 | `(i32) -> (i32 i32)` |
| `BdjM` | func | 3025 | `(i32) -> (i32 i32)` |
| `D6Rf` | func | 3011 | `(i32 i32 i32) -> (i32 i32)` |
| `cGrU` | func | 2465 | `(i32 i32) -> ()` |
| `YSrZ` | func | 3100 | `() -> (i32)` |
| `z5P3` | func | 3015 | `(i32 i32) -> (i32 i32)` |
| `XOp7` | func | 1511 | `(i32 i32) -> (i32)` |
| `g2pf` | func | 3072 | `(i32 i32) -> ()` |
| `i614` | func | 2330 | `(i32 i32 i32 i32) -> ()` |
| `KwjP` | func | 1898 | `(i32) -> ()` |
| `qfHr` | func | 1499 | `(i32 i32) -> (i32)` |
| `On1K` | func | 2353 | `(i32 i32) -> (i32)` |
| `Oe4f` | func | 1274 | `(i32 i32 i32) -> ()` |
| `kLYx` | func | 2303 | `(i32 i32) -> ()` |
| `kCoU` | func | 2678 | `(i32 i32) -> ()` |
| `gj16` | func | 693 | `(f64) -> (f64)` |
| `PyH0` | func | 2517 | `(i32) -> (i32)` |
| `N1dx` | func | 3018 | `(i32 i32) -> (i32 i32)` |
| `AgE3` | func | 2509 | `(i32 i32) -> (i32)` |
| `llQ7` | func | 3021 | `(i32 i32) -> (i32 i32)` |
| `Hlxg` | func | 2986 | `(i32 i32 i32 i32) -> (i32)` |
| `KHiI` | func | 3042 | `() -> (i32 i32)` |
| `n9Yp` | func | 2382 | `(i32 i32) -> (i32)` |
| `IoZw` | func | 1469 | `(i32 i32 i32 i32) -> ()` |
| `EOEk` | func | 1451 | `(i32) -> (i32)` |
| `RZJy` | func | 1993 | `(i32 i32) -> ()` |
| `ztqS` | func | 3010 | `(i32 i32 i32) -> (i32 i32)` |
| `d6Ec` | func | 3028 | `(i32) -> (i32 i32)` |
| `vVwa` | func | 887 | `(i32 i32) -> (i32)` |
| `PU1z` | func | 1225 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Oo89` | func | 2466 | `(i32) -> (i32)` |
| `gJG0` | func | 661 | `(i32 i32) -> (i32)` |
| `id9I` | func | 2516 | `(i32) -> (i32)` |
| `efM2` | func | 2497 | `(i32) -> (i32)` |
| `HyQs` | func | 1828 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `Pkkl` | func | 2480 | `(i32) -> (i32)` |
| `BCrG` | func | 1522 | `(i32 i32) -> (i32)` |
| `af7E` | func | 2487 | `(i32) -> (i32)` |
| `mQri` | func | 738 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `TWtP` | func | 1397 | `(i32 f64 f64) -> (i32)` |
| `ehSO` | func | 1957 | `(i32) -> (i32)` |
| `Koix` | func | 1672 | `(i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 740 · max 740
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2024384, `i32` = i32.const 2024964

## Functions

- 2,930 bodies · 4,076,337 code bytes · avg 1.4 KB
- instruction scan: 2,930 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 103 |
| <= 128 bytes | 255 |
| <= 256 bytes | 374 |
| <= 512 bytes | 683 |
| <= 1024 bytes | 590 |
| <= 2048 bytes | 426 |
| <= 4096 bytes | 184 |
| <= 8192 bytes | 93 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 195,073 | 88,356 | local.get×25977, i32.const×9822, i32.load×5552, local.set×4795, local.tee×4567 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 107,789 | 52,285 | local.get×14621, i32.const×6216, i32.add×3024, local.set×2957, i32.load×2872 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,699 | 21,474 | local.get×6240, i32.const×2842, local.set×1235, i32.add×1137, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 105 | 36,606 | 16,581 | local.get×4597, i32.const×1665, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,787 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,490 | 12,813 | local.get×3796, i32.const×1624, local.set×985, i32.add×684, i32.load×669 |
| 9 | `(i32 i32 i32) -> (i32)` | 74 | 22,653 | 10,819 | local.get×2894, i32.const×1298, i32.load×755, local.set×500, i32.add×479 |
| 10 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 18 | `(i32 i32 i32 i32 i32 i32) -> ()` | 153 | 17,217 | 8,058 | local.get×2506, i32.const×894, local.set×541, i32.load×399, i32.add×366 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,312 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 28 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,817 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 34 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 71 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 200 | `(i32 i32) -> ()` | 10 | 30,134 | 14,535 | local.get×5127, i32.load×1394, i32.const×1130, end×911, i32.add×829 |
| 220 | `(i32) -> ()` | 19 | 23,308 | 10,931 | local.get×2739, i32.load×1499, i32.const×1189, local.tee×1013, end×857 |
| 735 | `(i32 i32) -> ()` | 139 | 42,975 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 736 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1599 | `(i32 i32) -> (i32)` | 182 | 55,130 | 19,838 | local.get×6600, i32.const×2596, i64.store×1935, i64.const×1087, i64.load×1068 |
| 2010 | `(i32 i32) -> ()` | 111 | 39,746 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2612 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2882 | `(i32 i32 i32 i32) -> ()` | 137 | 31,374 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2901 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
| `local.get` | 545,914 |
| `i32.const` | 227,790 |
| `local.tee` | 101,473 |
| `i32.load` | 95,347 |
| `local.set` | 95,239 |
| `i32.add` | 88,016 |
| `end` | 80,077 |
| `br_if` | 65,184 |
| `i32.store` | 47,003 |
| `block` | 37,619 |
| `i64.const` | 32,893 |
| `i64.store` | 32,114 |
| `if` | 30,606 |
| `call` | 29,554 |
| `i32.sub` | 24,904 |
| `i64.load` | 23,787 |
| `br` | 23,446 |
| `i32.eqz` | 19,773 |
| `select` | 17,421 |
| `i32.shl` | 16,613 |
| `i32.and` | 16,505 |
| `i32.ne` | 16,083 |
| `i32.load8_u` | 15,107 |
| `i32.eq` | 14,068 |
| `i32.store8` | 12,722 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,930/2,930 (degraded: 0)
