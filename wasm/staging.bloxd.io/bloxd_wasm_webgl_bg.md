# WASM module: `bloxd_wasm_webgl_bg`

> environment **staging.bloxd.io** · build `yma3ej.f92ebd70` · analyzed 2026-11-25T04:31:15+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl_bg.cef1a8dbb9b17e0d9ef3.wasm
> 5,516,677 bytes (5.3 MB) · sha256 `cec6d5fa8c55e39d…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `e9038797635468d5.10913` → `99ade58b933f96cf.10913` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,914 / 299 |
| Exports / imports | 157 / 300 |
| Code bytes (function bodies) | 4,043,172 (3.9 MB) |
| Total local variables | 30,791 |
| Instructions (scanable bodies) | 1,895,853 |
| Data segments / bytes | 4,033 / 1,424,644 |
| Element segments / entries | 1 / 752 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `99ade58b933f96cf.10913` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,506 | 177 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,965 | 2914 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,511 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,048,514 | 2914 |
| 11 | data | 1,457,214 | 4033 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `d59n.aKtC` | memory | `[128..14648]` |
| 0 | `d59n.b1yR` | func | `(i32) -> (f64)` |
| 1 | `d59n.ojbA` | func | `() -> (i32)` |
| 2 | `d59n.Y05K` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `d59n.Zz5h` | func | `(i32) -> ()` |
| 4 | `d59n.N0Jq` | func | `(i32 i32) -> (i32)` |
| 5 | `d59n.aOqB` | func | `(i32) -> (i32)` |
| 6 | `d59n.LFVV` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `d59n.YIxt` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `d59n.rg5c` | func | `(i32) -> (i32)` |
| 9 | `d59n.mhYY` | func | `(i32 i32) -> ()` |
| 10 | `d59n.FhqM` | func | `(i32 i32) -> ()` |
| 11 | `d59n.trsy` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `d59n.YGFW` | func | `(i32 i32) -> (i32)` |
| 13 | `d59n.j61L` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `d59n.UwfO` | func | `(i32) -> (i32)` |
| 15 | `d59n.VXjN` | func | `(i32 i32) -> (i32)` |
| 16 | `d59n.VJur` | func | `(i32 i32) -> (i32)` |
| 17 | `d59n.OgFd` | func | `(i32 i32) -> ()` |
| 18 | `d59n.Mt6y` | func | `(i32) -> (i32)` |
| 19 | `d59n.VCqB` | func | `(i32) -> (i32)` |
| 20 | `d59n.cLYd` | func | `(i32) -> (i32)` |
| 21 | `d59n.zZX5` | func | `(i32) -> ()` |
| 22 | `d59n.U6JQ` | func | `(i32 i32) -> ()` |
| 23 | `d59n.nHsr` | func | `(i32 i32) -> ()` |
| 24 | `d59n.E6EP` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `d59n.dP0g` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `d59n.uCPt` | func | `(i32) -> (i32)` |
| 27 | `d59n.XQ55` | func | `(i32 i32) -> ()` |
| 28 | `d59n.MVn3` | func | `(i32 i32) -> (i32)` |
| 29 | `d59n.qHgk` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `d59n.P8cW` | func | `(i32 i32) -> (i32)` |
| 31 | `d59n.LbCp` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `d59n.ngYa` | func | `(i32) -> (i32)` |
| 33 | `d59n.xqwy` | func | `(i32 i32) -> ()` |
| 34 | `d59n.poIi` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `d59n.vd3c` | func | `(i32) -> (i32)` |
| 36 | `d59n.F35a` | func | `(i32) -> (i32)` |
| 37 | `d59n.XD32` | func | `(i32) -> (i32)` |
| 38 | `d59n.YE3n` | func | `(i32 i32) -> (i32)` |
| 39 | `d59n.uXT1` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `d59n.OmWn` | func | `(i32) -> (i32)` |
| 41 | `d59n.F6OI` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `d59n.K47w` | func | `() -> (f64)` |
| 43 | `d59n.d8ZU` | func | `(i32) -> (i32)` |
| 44 | `d59n.Lnzv` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `d59n.ktZl` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `d59n.j5Ej` | func | `(i32 i32 i32) -> ()` |
| 47 | `d59n.rZiO` | func | `(i32 i32 i32) -> ()` |
| 48 | `d59n.WR6N` | func | `(i32 i32 i32) -> ()` |
| 49 | `d59n.ev08` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `d59n.jBTr` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `d59n.b6vE` | func | `(i32 i32) -> ()` |
| 52 | `d59n.n9rj` | func | `(i32 i32) -> ()` |
| 53 | `d59n.oGCT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `d59n.vSkI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `d59n.IJ0f` | func | `(i32 f32 f32) -> ()` |
| 56 | `d59n.Iy6c` | func | `(i32 f32 f32) -> ()` |
| 57 | `d59n.UW3O` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `d59n.pn8B` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `d59n.LLpn` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `d59n.wv7v` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `d59n.xMA2` | func | `(i32 i32 i32) -> ()` |
| 62 | `d59n.MFjX` | func | `(i32 i32 i32) -> ()` |
| 63 | `d59n.AVQ9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `d59n.uk7f` | func | `(i32 i32 i32) -> ()` |
| 65 | `d59n.XrAz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `d59n.yd1R` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `d59n.wNwi` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `d59n.WA5D` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `d59n.Hej1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `d59n.rcQW` | func | `(i32) -> (i32)` |
| 71 | `d59n.bzgs` | func | `(i32) -> ()` |
| 72 | `d59n.Cj0J` | func | `(i32) -> (i32)` |
| 73 | `d59n.RwrO` | func | `(i32 i32) -> (i32)` |
| 74 | `d59n.OHXQ` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `d59n.B46K` | func | `(i32 i32 i32) -> ()` |
| 76 | `d59n.kX8u` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `d59n.eGbU` | func | `() -> (f64)` |
| 78 | `d59n.vRym` | func | `() -> (f64)` |
| 79 | `d59n.XJkg` | func | `(i32 i32) -> ()` |
| 80 | `d59n.i2mg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `d59n.INgE` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `d59n.orOw` | func | `(i32 i32 i32) -> ()` |
| 83 | `d59n.sVr0` | func | `(i32 i32 i32) -> ()` |
| 84 | `d59n.aCN0` | func | `(i32 i32) -> ()` |
| 85 | `d59n.yFZS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `d59n.evk1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `d59n.I7Q6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `d59n.Lr9f` | func | `(i32 i32) -> ()` |
| 89 | `d59n.dNDO` | func | `(i32 i32) -> ()` |
| 90 | `d59n.knWN` | func | `(i32) -> (i32)` |
| 91 | `d59n.hMqA` | func | `(i32 i32 i32) -> ()` |
| 92 | `d59n.SHiK` | func | `(i32 i32 i32) -> ()` |
| 93 | `d59n.oMk4` | func | `(i32) -> (i32)` |
| 94 | `d59n.dHGc` | func | `(i32) -> (i32)` |
| 95 | `d59n.ndYs` | func | `(i32 i32) -> ()` |
| 96 | `d59n.Qwlm` | func | `(i32 i32) -> ()` |
| 97 | `d59n.zj33` | func | `(i32 i32) -> ()` |
| 98 | `d59n.DvXW` | func | `(i32 i32) -> ()` |
| 99 | `d59n.M34Q` | func | `(i32 i32 i32) -> ()` |
| 100 | `d59n.nStr` | func | `(i32 i32 i32) -> ()` |
| 101 | `d59n.k9yH` | func | `(i32 i32 f32) -> ()` |
| 102 | `d59n.pSbV` | func | `(i32 i32 f32) -> ()` |
| 103 | `d59n.A4gL` | func | `(i32 i32 i32) -> ()` |
| 104 | `d59n.i3ng` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `d59n.nRZb` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `d59n.Anzx` | func | `(i32 i32) -> ()` |
| 107 | `d59n.XzuP` | func | `(i32 i32) -> ()` |
| 108 | `d59n.Sz1s` | func | `(i32 i32) -> ()` |
| 109 | `d59n.v8u9` | func | `(i32 i32) -> ()` |
| 110 | `d59n.L3qp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `d59n.Gy82` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `d59n.ZadG` | func | `(i32 i32 i32) -> ()` |
| 113 | `d59n.RTkP` | func | `(i32 i32 i32) -> ()` |
| 114 | `d59n.QFsH` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `d59n.QbnM` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `d59n.y8ME` | func | `(i32 i32) -> ()` |
| 117 | `d59n.GgfY` | func | `(i32 i32) -> ()` |
| 118 | `d59n.zenE` | func | `(i32 i32) -> (i32)` |
| 119 | `d59n.BVaV` | func | `(i32 i32) -> (i32)` |
| 120 | `d59n.gc33` | func | `(i32 i32) -> ()` |
| 121 | `d59n.zwdW` | func | `(i32 i32) -> ()` |
| 122 | `d59n.dM52` | func | `(i32) -> (i32)` |
| 123 | `d59n.Vp3U` | func | `(i32 i32) -> ()` |
| 124 | `d59n.NoP9` | func | `(i32 i32) -> ()` |
| 125 | `d59n.qboC` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `d59n.slMO` | func | `(i32 i32 i32) -> ()` |
| 127 | `d59n.p8tV` | func | `(i32 i32 i32) -> ()` |
| 128 | `d59n.xyHx` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `d59n.gzBH` | func | `(i32 i32) -> ()` |
| 130 | `d59n.Ulyd` | func | `(i32 i32 i32) -> ()` |
| 131 | `d59n.LPDC` | func | `(i32 i32 i32) -> ()` |
| 132 | `d59n.EZXu` | func | `(i32 i32 i32) -> ()` |
| 133 | `d59n.Yv3i` | func | `(i32 i32 i32) -> ()` |
| 134 | `d59n.Xacm` | func | `(i32) -> ()` |
| 135 | `d59n.cVkJ` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `d59n.bGjt` | func | `(i32 i32 i32) -> ()` |
| 137 | `d59n.buEm` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `d59n.AYec` | func | `(i32 i32) -> ()` |
| 139 | `d59n.FL6C` | func | `(i32) -> (i32)` |
| 140 | `d59n.aCcx` | func | `(i32 i32) -> ()` |
| 141 | `d59n.FVf4` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `d59n.BerH` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `d59n.tUCP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `d59n.RnlN` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `d59n.NUB3` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `d59n.I7XP` | func | `(i32 i32) -> ()` |
| 147 | `d59n.uxTw` | func | `(i32 i32) -> ()` |
| 148 | `d59n.TneZ` | func | `(i32 i32) -> ()` |
| 149 | `d59n.fdzm` | func | `(i32 i32) -> ()` |
| 150 | `d59n.mJF1` | func | `(i32) -> (i32)` |
| 151 | `d59n.JGXk` | func | `(i32) -> (i32)` |
| 152 | `d59n.Q787` | func | `(i32) -> (i32)` |
| 153 | `d59n.FzVI` | func | `(i32) -> (i32)` |
| 154 | `d59n.qNt2` | func | `(i32) -> (i32)` |
| 155 | `d59n.s8wl` | func | `(i32) -> (i32)` |
| 156 | `d59n.N2J1` | func | `() -> (i32)` |
| 157 | `d59n.JBUS` | func | `() -> (i32)` |
| 158 | `d59n.qA8O` | func | `() -> (i32)` |
| 159 | `d59n.DDf9` | func | `() -> (i32)` |
| 160 | `d59n.Jf80` | func | `(i32 i32) -> (i32)` |
| 161 | `d59n.axFT` | func | `(i32) -> ()` |
| 162 | `d59n.rOwd` | func | `(i32 i32) -> (i32)` |
| 163 | `d59n.YiRB` | func | `(i32) -> (i32)` |
| 164 | `d59n.tnS1` | func | `(i32) -> (i32)` |
| 165 | `d59n.aoU0` | func | `(i32) -> (i32)` |
| 166 | `d59n.GULm` | func | `(i32) -> ()` |
| 167 | `d59n.lo5i` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `d59n.gK3j` | func | `(i32) -> (i32)` |
| 169 | `d59n.P4zm` | func | `(i32) -> (i32)` |
| 170 | `d59n.o0ib` | func | `(i32 i32) -> (i32)` |
| 171 | `d59n.D89v` | func | `(i32) -> ()` |
| 172 | `d59n.rA52` | func | `() -> (i32)` |
| 173 | `d59n.lrMO` | func | `(i32 i32) -> (i32)` |
| 174 | `d59n.H0Z4` | func | `(i32 i32) -> ()` |
| 175 | `d59n.bDIQ` | func | `(i32 i32) -> ()` |
| 176 | `d59n.J6XJ` | func | `(i32) -> (i32)` |
| 177 | `d59n.tVJi` | func | `(i32 i32) -> (i32)` |
| 178 | `d59n.droC` | func | `(i32) -> ()` |
| 179 | `d59n.uzD8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `d59n.PRXD` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `d59n.jwBr` | func | `(i32 i32) -> ()` |
| 182 | `d59n.ZO0o` | func | `(i32 i32) -> ()` |
| 183 | `d59n.tdzD` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `d59n.XnYJ` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `d59n.ExZh` | func | `(i32 f32) -> ()` |
| 186 | `d59n.hg28` | func | `(i32 f32) -> ()` |
| 187 | `d59n.oMcU` | func | `(i32 i32) -> ()` |
| 188 | `d59n.YwZD` | func | `(i32 i32) -> ()` |
| 189 | `d59n.xpED` | func | `(i32) -> (i32)` |
| 190 | `d59n.FmI3` | func | `(i32) -> (i32)` |
| 191 | `d59n.lqQs` | func | `(i32) -> (i32)` |
| 192 | `d59n.dRFq` | func | `(i32) -> (i32)` |
| 193 | `d59n.L6tu` | func | `(i32 i32 i32) -> ()` |
| 194 | `d59n.QGNz` | func | `(i32 i32 i32) -> ()` |
| 195 | `d59n.Azbu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `d59n.YsNo` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `d59n.fMzo` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `d59n.u1hu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `d59n.a9Fq` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `d59n.uJLR` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `d59n.VH0Q` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `d59n.kS4T` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `d59n.Z4Cq` | func | `(i32) -> (i32)` |
| 204 | `d59n.j56K` | func | `(i32) -> (i32)` |
| 205 | `d59n.pEWu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `d59n.vYUe` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `d59n.LwoN` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `d59n.SY07` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `d59n.m5n3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `d59n.fCpd` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `d59n.wdGW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `d59n.aSu2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `d59n.zKwc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `d59n.KS8L` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `d59n.OdFT` | func | `(i32 i32 i32) -> ()` |
| 216 | `d59n.P7ld` | func | `(i32 i32 i32) -> ()` |
| 217 | `d59n.ytdm` | func | `(i32 i32) -> ()` |
| 218 | `d59n.wz04` | func | `(i32 i32) -> ()` |
| 219 | `d59n.uvtW` | func | `(i32 i32) -> ()` |
| 220 | `d59n.HA1z` | func | `(i32 i32) -> ()` |
| 221 | `d59n.irue` | func | `(i32 i32) -> ()` |
| 222 | `d59n.saLh` | func | `(i32 i32) -> ()` |
| 223 | `d59n.nzf2` | func | `(i32 f32 f32) -> ()` |
| 224 | `d59n.P3Xy` | func | `(i32 f32 f32) -> ()` |
| 225 | `d59n.UVUK` | func | `(i32 i32) -> ()` |
| 226 | `d59n.mkFW` | func | `(i32 i32) -> ()` |
| 227 | `d59n.UG30` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `d59n.xQDo` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `d59n.D1xE` | func | `(i32 i32 i32) -> ()` |
| 230 | `d59n.FoUY` | func | `(i32) -> (i32)` |
| 231 | `d59n.oA2f` | func | `(i32) -> (i32)` |
| 232 | `d59n.pUD3` | func | `(i32 i32) -> ()` |
| 233 | `d59n.lVYZ` | func | `(i32 i32) -> ()` |
| 234 | `d59n.g36A` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `d59n.fR1w` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `d59n.mqdT` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `d59n.ZZFu` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `d59n.wXP2` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `d59n.teN9` | func | `(i32 i32 i32) -> ()` |
| 240 | `d59n.sChf` | func | `(i32 i32 i32) -> ()` |
| 241 | `d59n.dwYd` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `d59n.DMWu` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `d59n.PtJh` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `d59n.E1AN` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `d59n.EFPI` | func | `(i32) -> (i32)` |
| 246 | `d59n.n2nf` | func | `(i32) -> (i32)` |
| 247 | `d59n.OPaj` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `d59n.Ogrn` | func | `(i32 i32) -> ()` |
| 249 | `d59n.ljGe` | func | `(i32 i32) -> ()` |
| 250 | `d59n.pvOj` | func | `(i32 i32) -> (i32)` |
| 251 | `d59n.uRfo` | func | `(i32 i32) -> (i32)` |
| 252 | `d59n.ZzhF` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `d59n.arhd` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `d59n.fC2Y` | func | `(i32 i32) -> ()` |
| 255 | `d59n.ow1U` | func | `(i32 i32) -> ()` |
| 256 | `d59n.KHnA` | func | `(i32) -> (i32)` |
| 257 | `d59n.mF47` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `d59n.mRdz` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `d59n.hVvE` | func | `(i32) -> ()` |
| 260 | `d59n.WBsF` | func | `(i32 i32) -> ()` |
| 261 | `d59n.Q3mY` | func | `(i32 i32) -> ()` |
| 262 | `d59n.ed3t` | func | `(i32 i32) -> ()` |
| 263 | `d59n.tDVa` | func | `(i32 i32) -> ()` |
| 264 | `d59n.LXHY` | func | `(i32 i32) -> ()` |
| 265 | `d59n.lU5p` | func | `(i32 i32) -> ()` |
| 266 | `d59n.vbmy` | func | `(i32 i32) -> ()` |
| 267 | `d59n.TCBV` | func | `(i32 i32) -> ()` |
| 268 | `d59n.Ssg3` | func | `(i32) -> (i32)` |
| 269 | `d59n.JJhU` | func | `(i32) -> (i32)` |
| 270 | `d59n.J1du` | func | `(i32) -> (i32)` |
| 271 | `d59n.Bqad` | func | `(i32) -> (i32)` |
| 272 | `d59n.eeIS` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `d59n.zIXB` | func | `(i32) -> ()` |
| 274 | `d59n.nONi` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `d59n.UQqL` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `d59n.te0M` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `d59n.l3Kt` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `d59n.Gu9L` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `d59n.Gkab` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `d59n.O4mz` | func | `(i32) -> (i32)` |
| 281 | `d59n.Xjah` | func | `(i32) -> (i32)` |
| 282 | `d59n.n7ib` | func | `(i32) -> (i32)` |
| 283 | `d59n.w3br` | func | `(i32) -> (i32)` |
| 284 | `d59n.LjwT` | func | `(i32 i32) -> ()` |
| 285 | `d59n.ZKEk` | func | `(i32) -> ()` |
| 286 | `d59n.DECf` | func | `(i32 i32) -> ()` |
| 287 | `d59n.OAnt` | func | `(i32) -> (i32)` |
| 288 | `d59n.CmWj` | func | `(i32 i32) -> (i32)` |
| 289 | `d59n.gaFD` | func | `(i32 i32) -> (i32)` |
| 290 | `d59n.rB2u` | func | `(i32 i32) -> (i32)` |
| 291 | `d59n.FODH` | func | `(f64) -> (i32)` |
| 292 | `d59n.bOt5` | func | `(i32 i32) -> (i32)` |
| 293 | `d59n.MPVk` | func | `(i32 i32) -> (i32)` |
| 294 | `d59n.Pld6` | func | `(i32 i32) -> (i32)` |
| 295 | `d59n.wR6i` | func | `(i32 i32) -> (i32)` |
| 296 | `d59n.kF9s` | func | `(i32 i32) -> (i32)` |
| 297 | `d59n.aSPZ` | func | `(i32 i32) -> (i32)` |
| 298 | `d59n.b3Rg` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `DN1x` | func | 1953 | `(i32 i32 i32 i32) -> ()` |
| `ySqK` | func | 2796 | `(i32) -> (i32)` |
| `dVpe` | func | 1439 | `() -> (i32)` |
| `Nnzq` | func | 1589 | `(i32 i32) -> ()` |
| `ReK2` | func | 2455 | `(i32) -> (i32)` |
| `PzXk` | func | 2474 | `(i32) -> (i32)` |
| `iYeM` | func | 1435 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `ISXt` | func | 1515 | `(i32 i32) -> (i32)` |
| `M7S5` | func | 2500 | `(i32 i32) -> (i32)` |
| `Ke2v` | func | 1474 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `QTTM` | func | 1221 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `HLkW` | func | 3010 | `(i32 i32) -> (i32 i32)` |
| `L6WC` | func | 3133 | `() -> ()` |
| `bj2T` | func | 2380 | `(i32 i32 i32 i32) -> (i32)` |
| `Q2C3` | func | 1857 | `(i32 i32 f64 f64 f64) -> ()` |
| `gIF9` | func | 2476 | `(i32) -> (i32)` |
| `h63U` | func | 1336 | `(i32 i32 i32) -> (i32)` |
| `gwLV` | func | 2473 | `(i32) -> (i32)` |
| `JgsK` | func | 3132 | `(i32) -> ()` |
| `dYb3` | func | 3021 | `(i32) -> (i32 i32)` |
| `MBTL` | func | 2807 | `(i32) -> ()` |
| `gn0i` | func | 2764 | `(i32) -> (i32)` |
| `jwvX` | func | 1723 | `(i32) -> (i32)` |
| `uGh2` | func | 2489 | `(i32) -> (i32)` |
| `WDFV` | func | 2409 | `(i32) -> (i32)` |
| `kfEi` | func | 2469 | `(i32) -> (i32)` |
| `Fl16` | func | 678 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `K7We` | func | 2478 | `(i32) -> (i32)` |
| `vc9K` | func | 1632 | `(i32 i32 i32 i32) -> (i32)` |
| `zBqs` | func | 1270 | `(i32 i32 i32) -> ()` |
| `EVNa` | func | 2454 | `(i32 i32) -> ()` |
| `DMAr` | func | 2490 | `(i32 i32) -> ()` |
| `VZm6` | func | 1934 | `(i32) -> (i32)` |
| `KyPV` | func | 1882 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `AXYE` | func | 1410 | `(i32 i32) -> (i32)` |
| `VPmi` | global | 1 | `` |
| `jagn` | func | 2546 | `(i32 i32) -> ()` |
| `X0xq` | func | 3099 | `() -> (i32)` |
| `cJMZ` | func | 3070 | `(i32 i32 i32) -> ()` |
| `ssYA` | func | 810 | `(i32 i32) -> (i32)` |
| `T9Gp` | func | 2982 | `(i32 i32) -> ()` |
| `LkIx` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `hMDR` | func | 2558 | `() -> (i32)` |
| `RFBT` | func | 2509 | `(i32) -> (i32)` |
| `nGz3` | func | 2335 | `(i32 i32) -> (i32)` |
| `WBfR` | func | 567 | `(i32 i32 i32) -> (i32)` |
| `XbWY` | func | 1483 | `(i32 i32 i32 i32) -> (i32)` |
| `eCYX` | func | 2425 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `QrSk` | global | 2 | `` |
| `hBeX` | func | 2508 | `(i32) -> (i32)` |
| `K15b` | func | 2488 | `(i32) -> (i32)` |
| `KOrp` | func | 3061 | `(i32 i32 i32 i32) -> ()` |
| `aO9J` | func | 3071 | `(i32 i32) -> ()` |
| `MI4Z` | func | 2338 | `(i32 i32) -> (i32)` |
| `Zv2u` | func | 2472 | `(i32) -> (i32)` |
| `WQuZ` | func | 2507 | `(i32) -> (i32)` |
| `aGGs` | func | 1264 | `(i32 i32 i32) -> (i32)` |
| `NseN` | func | 1579 | `(i32 i32) -> (i32)` |
| `S9YY` | func | 1215 | `(i32 i32 i32 i32) -> (i32)` |
| `omoN` | func | 1700 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `xPGO` | func | 3023 | `(i32) -> (i32 i32)` |
| `DxTA` | func | 3126 | `(i32 i32 i32) -> ()` |
| `mRPP` | func | 2468 | `(i32) -> (f64)` |
| `aexX` | func | 2336 | `(i32 i32) -> (i32)` |
| `BKCx` | func | 1484 | `(i32) -> (i32)` |
| `xtBX` | func | 2201 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `sdUT` | func | 1214 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `FjLW` | func | 2046 | `(i32 i32) -> ()` |
| `rCIO` | func | 2829 | `(i32) -> (i32)` |
| `ZN8U` | func | 758 | `(i32 i32 i32) -> (i32)` |
| `Mqpt` | func | 2337 | `(i32 i32) -> (i32)` |
| `huTW` | func | 2181 | `(i32 i32) -> (i32)` |
| `aB6D` | func | 3201 | `() -> (i32)` |
| `KJSE` | func | 1745 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Q0Za` | func | 3036 | `() -> (i32 i32)` |
| `huP0` | func | 668 | `(i32 i32) -> (i32)` |
| `Y3HB` | func | 1816 | `() -> (i32)` |
| `memory` | memory | 0 | `` |
| `LyBe` | func | 3020 | `(i32) -> (i32 i32)` |
| `rCmP` | func | 2771 | `(i32) -> (i32)` |
| `vvXW` | func | 1479 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `m7SD` | func | 1530 | `(i32 i32 i32) -> (i32)` |
| `RAU1` | func | 1514 | `(i32 i32) -> (i32)` |
| `ReSx` | func | 1503 | `(i32 i32) -> (i32)` |
| `MH3A` | func | 1891 | `(i32) -> ()` |
| `M08d` | func | 2426 | `(i32) -> (i32)` |
| `OdMN` | func | 1594 | `(i32 f64 f64 f64) -> (i32)` |
| `eSxo` | func | 2471 | `(i32) -> (i32)` |
| `Io20` | func | 1321 | `(i32) -> ()` |
| `RGDl` | func | 3202 | `() -> (i32)` |
| `D4Og` | func | 1987 | `(i32 i32) -> ()` |
| `BCBx` | func | 1461 | `(i32 i32 i32 i32) -> ()` |
| `ULs6` | func | 911 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `bKpv` | func | 1289 | `(i32) -> (i32)` |
| `EcD2` | func | 3022 | `(i32) -> (i32 i32)` |
| `HpS0` | func | 2498 | `(i32) -> (i32)` |
| `ZdJD` | func | 1822 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `VgFS` | func | 2975 | `(i32 i32 i32 i32) -> (i32)` |
| `ytd1` | func | 3009 | `(i32 i32) -> (i32 i32)` |
| `d1w2` | func | 3173 | `() -> (f64)` |
| `ZVdu` | func | 889 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `qvKZ` | func | 2477 | `(i32) -> (i32)` |
| `lnii` | func | 2486 | `(i32 i32) -> ()` |
| `AwfG` | func | 3037 | `() -> (i32 i32)` |
| `jfiQ` | func | 3007 | `(i32 i32) -> (i32 i32)` |
| `vndt` | func | 1115 | `(i32 i32) -> ()` |
| `atPE` | func | 1551 | `(i32 i32 i32 i32) -> (i32)` |
| `XMDv` | func | 1757 | `(i32 i32) -> (i32)` |
| `oMa6` | func | 2013 | `(i32 f64) -> (i32)` |
| `xmM4` | func | 2029 | `(i32 f64 f64 f64) -> (i32)` |
| `s4Vu` | func | 1590 | `(i32 i32) -> ()` |
| `wrW1` | func | 3012 | `(i32 i32) -> (i32 i32)` |
| `lUA3` | func | 3024 | `(i32) -> (i32 i32)` |
| `rKhn` | func | 1517 | `(i32 f64) -> (f64)` |
| `AYo5` | func | 1389 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `uxk9` | func | 3000 | `(i32 i32 i32) -> (i32 i32)` |
| `vsRd` | func | 1243 | `(i32 i32) -> (i32)` |
| `tLJt` | func | 2785 | `(i32) -> (i32)` |
| `gvkp` | func | 2475 | `(i32) -> ()` |
| `LmmR` | func | 922 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `PiZi` | func | 3001 | `(i32 i32 i32) -> (i32 i32)` |
| `ibc6` | func | 890 | `(i32 i32) -> (i32)` |
| `a7on` | func | 2149 | `(i32 i32) -> (i32)` |
| `cAWb` | func | 2286 | `(i32 i32) -> ()` |
| `il2E` | func | 2368 | `(i32 i32) -> (i32)` |
| `xQT7` | func | 705 | `(i32 i32) -> (i32)` |
| `Gqrc` | func | 2951 | `() -> ()` |
| `eJx1` | func | 2470 | `(i32) -> (i32)` |
| `f34H` | func | 1865 | `(i32 i32) -> ()` |
| `nt7T` | func | 3035 | `() -> (i32 i32)` |
| `z3VZ` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `BpGu` | func | 3178 | `(i32) -> ()` |
| `kWeU` | func | 2499 | `(i32 i32) -> (i32)` |
| `Cvdh` | func | 1875 | `(i32 i32) -> (i32)` |
| `Nb45` | func | 1837 | `(i32 i32 i32 i32) -> (i32)` |
| `yj8l` | func | 2491 | `(i32) -> (i32)` |
| `Yi1s` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HLpV` | func | 1490 | `(i32 i32) -> (i32)` |
| `JCzR` | func | 3008 | `(i32 i32) -> (i32 i32)` |
| `zj3t` | func | 1390 | `(i32 f64 f64) -> (i32)` |
| `Dy7k` | func | 2256 | `(i32 f64) -> (i32)` |
| `qrZP` | func | 1296 | `(i32 i32) -> (i32)` |
| `k3Hf` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Kynv` | func | 2069 | `(i32 i32) -> (i32)` |
| `nnHV` | func | 737 | `(i32) -> (i32)` |
| `Nam9` | func | 1951 | `(i32) -> (i32)` |
| `Np55` | func | 1892 | `(i32) -> ()` |
| `hyp2` | func | 3011 | `(i32 i32) -> (i32 i32)` |
| `kxrt` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `ebc8` | func | 3006 | `(i32 i32) -> (i32 i32)` |
| `zHmT` | func | 3177 | `(i32) -> (i32)` |
| `dRuG` | func | 2970 | `(i32 i32) -> (i32)` |
| `RR3M` | func | 1114 | `(i32 i32) -> (i32)` |
| `xplN` | func | 2591 | `(i32 i32) -> ()` |
| `Zvr3` | func | 1442 | `(i32) -> (i32)` |
| `YwTx` | func | 2592 | `() -> (i32)` |
| `Cnix` | func | 2255 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 753 · max 753
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2639720, `i32` = i32.const 2640292

## Functions

- 2,914 bodies · 4,043,172 code bytes · avg 1.4 KB
- instruction scan: 2,914 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 113 |
| <= 128 bytes | 258 |
| <= 256 bytes | 377 |
| <= 512 bytes | 673 |
| <= 1024 bytes | 573 |
| <= 2048 bytes | 428 |
| <= 4096 bytes | 180 |
| <= 8192 bytes | 91 |
| <= 16384 bytes | 31 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 217 | 194,730 | 88,375 | local.get×25902, i32.const×9917, i32.load×5640, local.set×4735, local.tee×4639 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 112,325 | 54,451 | local.get×15156, i32.const×6534, i32.add×3194, local.set×3087, i32.load×2951 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,544 | 21,400 | local.get×6231, i32.const×2827, local.set×1224, i32.add×1128, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 125 | 48,862 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 64 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 196 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 225 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 721 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 769 | `(i32 i32) -> ()` | 138 | 42,799 | 20,185 | local.get×5260, i32.const×2330, local.tee×1194, i32.add×1063, local.set×1003 |
| 1576 | `(i32 i32) -> (i32)` | 180 | 54,760 | 19,855 | local.get×6591, i32.const×2625, i64.store×1913, i64.const×1077, i64.load×1056 |
| 1976 | `(i32 i32) -> ()` | 110 | 40,261 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2587 | `(i32 i32) -> ()` | 397 | 142,149 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2865 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2883 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
atlasSamplerfs_atlas1CANVAS_ALPHA_ONELIGHTINGfs_atlas1_restfs_atlasnfs_atlasn_restfs_nonefs_none_restfs_singlefs_single_restvs_packedSINGLE_ANIMATEDSINGLE_TEXTUREvs_packed_animvs_unpackedvs_unpacked_l
                                                                                                skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13_
456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
ue:keydownkeyupmousedownmouseuptouchstarttouchendMouse1Mouse2Mouse3Alt+Left ClickF2F4F5F8F9Digit0Digit1Digit2Digit3Digit4Digit5Digit6Digit7Digit8Digit9KeyQKeyWKeyEKeyRKeyTKeyYKeyUKeyIKeyOKeyPKeyAKeySK
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
schema23canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshowP
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
a draw with a base vertex: WebGL2 has none, so it is skippedan indexed draw without an index buffer is skippeda draw's pipeline has no GL program: it is skippeda draw's program failed to link: it is s
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
R8UnormR32FloatRgba8UnormBgra8UnormDepth24PlusDepth24PlusStencil8Rgba16UintRgba32UintRgba32FloatRg32FloatUV2VERTEXCOLORVERTEXALPHAOPACITYRGBEMISSIVELITE_REFLECTION_LUMINANCEREFLECTIONMAP_OPPOSITEZROUG
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123
called `Result::unwrap()` on an `Err` valueANGLE_instanced_arraysEXT_blend_minmaxEXT_color_buffer_floatEXT_color_buffer_half_floatEXT_float_blendEXT_frag_depthEXT_shader_texture_lodEXT_sRGBEXT_texture
Player_Atlasbee_set_3_attachable_bluebee_set_3_attachable_greenbee_set_3_attachable_redmedieval_set_1_attachable_bluemedieval_set_1_attachable_greenmedieval_set_1_attachable_purplemedieval_set_1_attac
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 540,299 |
| `i32.const` | 226,342 |
| `local.tee` | 100,473 |
| `i32.load` | 94,772 |
| `local.set` | 94,115 |
| `i32.add` | 87,371 |
| `end` | 79,376 |
| `br_if` | 64,480 |
| `i32.store` | 46,860 |
| `block` | 37,302 |
| `i64.const` | 32,705 |
| `i64.store` | 31,828 |
| `if` | 30,350 |
| `call` | 29,521 |
| `i32.sub` | 24,726 |
| `i64.load` | 23,695 |
| `br` | 23,159 |
| `i32.eqz` | 19,593 |
| `select` | 16,929 |
| `i32.shl` | 16,490 |
| `i32.and` | 16,366 |
| `i32.ne` | 15,888 |
| `i32.load8_u` | 15,017 |
| `i32.eq` | 13,904 |
| `i32.store8` | 12,635 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,914/2,914 (degraded: 0)
