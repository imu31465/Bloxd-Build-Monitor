# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `igzsf.a0b73a5f` · analyzed 2026-11-25T08:36:21+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.002886639467f9da31cf.wasm
> 5,136,982 bytes (4.9 MB) · sha256 `38c1dcbfb4bbcbb4…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,136,471 → 5,136,982 bytes (+511)
- code bytes 4,050,074 → 4,050,463
- data bytes 1,040,012 → 1,040,142
- name-section module id `1147de1a5ce9d3b9.12285` → `09ad1eaa8ce165c2.12285` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,950 / 393 |
| Exports / imports | 160 / 394 |
| Code bytes (function bodies) | 4,050,463 (3.9 MB) |
| Total local variables | 30,817 |
| Instructions (scanable bodies) | 1,895,604 |
| Data segments / bytes | 3,545 / 1,040,142 |
| Element segments / entries | 1 / 838 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `09ad1eaa8ce165c2.12285` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,518 | 177 |
| 2 | import | 4,734 | 394 |
| 3 | function | 3,001 | 2950 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,683 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,055,842 | 2950 |
| 11 | data | 1,068,819 | 3545 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `o52h.tglx` | memory | `[128..14648]` |
| 0 | `o52h.EY1N` | func | `(i32) -> (i32)` |
| 1 | `o52h.NTFL` | func | `(i32) -> (f64)` |
| 2 | `o52h.tRtZ` | func | `() -> (i32)` |
| 3 | `o52h.PDRG` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `o52h.B0hW` | func | `(i32) -> ()` |
| 5 | `o52h.sE1r` | func | `(i32 i32) -> (i32)` |
| 6 | `o52h.XIPS` | func | `(i32) -> (i32)` |
| 7 | `o52h.BTFP` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `o52h.Bfwu` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `o52h.TU85` | func | `(i32) -> (i32)` |
| 10 | `o52h.xPUC` | func | `(i32 i32) -> ()` |
| 11 | `o52h.KmQu` | func | `(i32 i32) -> ()` |
| 12 | `o52h.c26A` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `o52h.Q0Kx` | func | `(i32 i32) -> (i32)` |
| 14 | `o52h.ma0F` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `o52h.EPsi` | func | `(i32) -> (i32)` |
| 16 | `o52h.JyYT` | func | `(i32 i32) -> (i32)` |
| 17 | `o52h.pPn8` | func | `(i32 i32) -> (i32)` |
| 18 | `o52h.yo8R` | func | `(i32 i32) -> ()` |
| 19 | `o52h.V2l4` | func | `(i32) -> (i32)` |
| 20 | `o52h.jUAr` | func | `(i32) -> (i32)` |
| 21 | `o52h.T6ed` | func | `(i32 i32 i32) -> ()` |
| 22 | `o52h.rdpk` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `o52h.oZwV` | func | `(i32) -> (i32)` |
| 24 | `o52h.oQ6O` | func | `(i32) -> (i32)` |
| 25 | `o52h.eGCX` | func | `(i32 i32) -> ()` |
| 26 | `o52h.oj0m` | func | `(i32 i32) -> (i32)` |
| 27 | `o52h.xrCu` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `o52h.f9Mg` | func | `(i32) -> (i32)` |
| 29 | `o52h.JaXS` | func | `(i32) -> (i32)` |
| 30 | `o52h.y5XL` | func | `(i32) -> (i32)` |
| 31 | `o52h.R604` | func | `(i32) -> (i32)` |
| 32 | `o52h.xd5K` | func | `(i32) -> (i32)` |
| 33 | `o52h.BzNY` | func | `(i32 i32 i32) -> ()` |
| 34 | `o52h.U5nM` | func | `(i32 i32) -> (i32)` |
| 35 | `o52h.rLQw` | func | `(i32) -> (i32)` |
| 36 | `o52h.Mm4k` | func | `(i32) -> ()` |
| 37 | `o52h.IIF9` | func | `(i32) -> (i32)` |
| 38 | `o52h.NRdV` | func | `(i32) -> (i32)` |
| 39 | `o52h.R6be` | func | `(i32) -> ()` |
| 40 | `o52h.olWJ` | func | `(i32 i32) -> (i32)` |
| 41 | `o52h.DRzO` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `o52h.ZknV` | func | `(i32) -> ()` |
| 43 | `o52h.w1vd` | func | `(i32 i32) -> ()` |
| 44 | `o52h.q70u` | func | `() -> (i32)` |
| 45 | `o52h.Wf7r` | func | `(i32 i32) -> (i32)` |
| 46 | `o52h.CWef` | func | `(i32 i32) -> (i32)` |
| 47 | `o52h.uRsj` | func | `(i32) -> (i32)` |
| 48 | `o52h.RnoP` | func | `(i32) -> (i32)` |
| 49 | `o52h.NSpA` | func | `(i32) -> (i32)` |
| 50 | `o52h.ZqR6` | func | `(i32 i32) -> ()` |
| 51 | `o52h.LHYo` | func | `(i32) -> (i32)` |
| 52 | `o52h.OTKa` | func | `(i32) -> ()` |
| 53 | `o52h.EfPO` | func | `(i32 i32) -> (i32)` |
| 54 | `o52h.Zh83` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `o52h.kXnm` | func | `(i32) -> (i32)` |
| 56 | `o52h.kdQf` | func | `(i32 i32 i32) -> ()` |
| 57 | `o52h.twds` | func | `(i32 i32) -> ()` |
| 58 | `o52h.Negu` | func | `(i32) -> (i32)` |
| 59 | `o52h.G4Eq` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `o52h.by76` | func | `(i32) -> ()` |
| 61 | `o52h.uYr9` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `o52h.HhHp` | func | `(i32) -> ()` |
| 63 | `o52h.CaQL` | func | `(i32 i32 i32) -> ()` |
| 64 | `o52h.qJ0M` | func | `(i32 i32) -> ()` |
| 65 | `o52h.SbSO` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `o52h.icc4` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `o52h.uYFH` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `o52h.wjdX` | func | `(i32 i32 f64) -> ()` |
| 69 | `o52h.nnhk` | func | `(i32) -> (i32)` |
| 70 | `o52h.NmpS` | func | `(i32 i32) -> ()` |
| 71 | `o52h.PQe5` | func | `(i32 i32 i32) -> ()` |
| 72 | `o52h.qA2e` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `o52h.O3SB` | func | `(i32 i32 i32) -> ()` |
| 74 | `o52h.keyx` | func | `(i32) -> ()` |
| 75 | `o52h.hcdL` | func | `(i32 i32) -> ()` |
| 76 | `o52h.ADOn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `o52h.F3Y9` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `o52h.TPSs` | func | `(i32 i32 i32) -> ()` |
| 79 | `o52h.Z8uz` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `o52h.QBtK` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `o52h.suuF` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `o52h.O45f` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `o52h.MEay` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `o52h.lpKJ` | func | `(i32 i32 i32) -> ()` |
| 85 | `o52h.BwEm` | func | `(i32 i32) -> (i32)` |
| 86 | `o52h.utc5` | func | `(i32) -> (i32)` |
| 87 | `o52h.SB6q` | func | `(i32) -> (i32)` |
| 88 | `o52h.Vsdy` | func | `(i32) -> (i32)` |
| 89 | `o52h.aB2A` | func | `(i32 i32) -> (i32)` |
| 90 | `o52h.n3uh` | func | `(i32) -> ()` |
| 91 | `o52h.Zjeo` | func | `(i32) -> (i32)` |
| 92 | `o52h.eDKx` | func | `(i32 i32) -> (i32)` |
| 93 | `o52h.KSaJ` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `o52h.Lgf9` | func | `(i32 i32 i32) -> ()` |
| 95 | `o52h.zhoz` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `o52h.xtZM` | func | `() -> (f64)` |
| 97 | `o52h.EOwO` | func | `() -> (f64)` |
| 98 | `o52h.YdV5` | func | `(i32 i32) -> ()` |
| 99 | `o52h.Row9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `o52h.DZ9C` | func | `(i32) -> (i32)` |
| 101 | `o52h.XiOd` | func | `(i32) -> (i32)` |
| 102 | `o52h.GsyC` | func | `(i32) -> (i32)` |
| 103 | `o52h.KM2s` | func | `() -> (i32)` |
| 104 | `o52h.szTG` | func | `() -> (i32)` |
| 105 | `o52h.wSww` | func | `() -> (i32)` |
| 106 | `o52h.NKts` | func | `() -> (i32)` |
| 107 | `o52h.vn47` | func | `(i32 i32) -> (i32)` |
| 108 | `o52h.e66b` | func | `(i32) -> ()` |
| 109 | `o52h.M0Qc` | func | `(i32 i32) -> (i32)` |
| 110 | `o52h.WflS` | func | `(i32) -> (i32)` |
| 111 | `o52h.iIKg` | func | `() -> (f64)` |
| 112 | `o52h.FUgY` | func | `(i32) -> (i32)` |
| 113 | `o52h.srwR` | func | `(i32 i32) -> ()` |
| 114 | `o52h.NbBz` | func | `(i32 i32) -> ()` |
| 115 | `o52h.zqw3` | func | `(i32 i32) -> ()` |
| 116 | `o52h.YEQi` | func | `(i32 f32) -> ()` |
| 117 | `o52h.p8On` | func | `(i32 f32) -> ()` |
| 118 | `o52h.RXTc` | func | `(i32 i32) -> ()` |
| 119 | `o52h.h4sY` | func | `(i32 i32) -> ()` |
| 120 | `o52h.ky3v` | func | `(i32 i32) -> ()` |
| 121 | `o52h.Vf06` | func | `(i32 i32) -> ()` |
| 122 | `o52h.QNzd` | func | `(i32 i32 i32) -> ()` |
| 123 | `o52h.Z0HA` | func | `(i32 i32) -> (i32)` |
| 124 | `o52h.NYSE` | func | `(i32 i32) -> ()` |
| 125 | `o52h.Jkwq` | func | `(i32 i32) -> ()` |
| 126 | `o52h.UqHc` | func | `(i32 i32) -> ()` |
| 127 | `o52h.yjoy` | func | `(i32 i32) -> ()` |
| 128 | `o52h.zm9H` | func | `(i32 f64) -> ()` |
| 129 | `o52h.Zwhg` | func | `(i32 f64) -> ()` |
| 130 | `o52h.zfnB` | func | `(i32 i32) -> ()` |
| 131 | `o52h.CWt8` | func | `(i32 i32 i32) -> ()` |
| 132 | `o52h.w2if` | func | `(i32 i32) -> ()` |
| 133 | `o52h.mhIG` | func | `(i32 i32) -> (i32)` |
| 134 | `o52h.pWTs` | func | `(i32 i32 i32) -> ()` |
| 135 | `o52h.behI` | func | `(i32 i32 i32) -> ()` |
| 136 | `o52h.X51Z` | func | `(i32 i32) -> (i32)` |
| 137 | `o52h.Gt4q` | func | `(i32 i32) -> (i32)` |
| 138 | `o52h.TFYO` | func | `(i32 i32 i32) -> ()` |
| 139 | `o52h.FCeH` | func | `(i32 i32 i32) -> ()` |
| 140 | `o52h.CF2j` | func | `(i32 i32) -> (i32)` |
| 141 | `o52h.M014` | func | `(i32 i32) -> ()` |
| 142 | `o52h.dS8B` | func | `(i32 i32) -> ()` |
| 143 | `o52h.ERxM` | func | `(i32 i32) -> ()` |
| 144 | `o52h.srk0` | func | `(i32 i32) -> ()` |
| 145 | `o52h.LtnP` | func | `(i32 i32) -> ()` |
| 146 | `o52h.vnHm` | func | `(i32 i32) -> ()` |
| 147 | `o52h.ybMJ` | func | `(i32 i32) -> ()` |
| 148 | `o52h.BfAm` | func | `(i32 f64) -> ()` |
| 149 | `o52h.Fu7H` | func | `(i32 i32) -> ()` |
| 150 | `o52h.DkGP` | func | `(i32 i32) -> ()` |
| 151 | `o52h.EpWr` | func | `(i32 i32) -> ()` |
| 152 | `o52h.e5K8` | func | `(i32 i32) -> ()` |
| 153 | `o52h.CAKo` | func | `(i32 i32) -> ()` |
| 154 | `o52h.p5wh` | func | `(i32 i32) -> ()` |
| 155 | `o52h.O4pE` | func | `(i32 i32) -> ()` |
| 156 | `o52h.C4UZ` | func | `(i32 i32) -> ()` |
| 157 | `o52h.hBby` | func | `(i32 i32) -> ()` |
| 158 | `o52h.qMhD` | func | `(i32 i32 i32) -> ()` |
| 159 | `o52h.O1fr` | func | `(i32 i32 i32) -> ()` |
| 160 | `o52h.ADE9` | func | `(i32 i32) -> (i32)` |
| 161 | `o52h.cYo7` | func | `(i32 i32) -> (i32)` |
| 162 | `o52h.Nod9` | func | `(i32 i32) -> ()` |
| 163 | `o52h.ZIAu` | func | `(i32 i32) -> ()` |
| 164 | `o52h.PvdC` | func | `(i32 f64) -> ()` |
| 165 | `o52h.mCgA` | func | `(i32 i32) -> ()` |
| 166 | `o52h.usf9` | func | `(i32 i32) -> ()` |
| 167 | `o52h.l33B` | func | `(i32 i32) -> ()` |
| 168 | `o52h.lpWW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `o52h.h2YW` | func | `(i32 f64) -> ()` |
| 170 | `o52h.DUw9` | func | `(i32 f64) -> ()` |
| 171 | `o52h.XwDa` | func | `(i32 f64) -> ()` |
| 172 | `o52h.GZnl` | func | `(i32 f64) -> ()` |
| 173 | `o52h.TyGA` | func | `(i32 i32) -> ()` |
| 174 | `o52h.D3BI` | func | `(i32 i32) -> ()` |
| 175 | `o52h.rT8Y` | func | `(i32 i32) -> ()` |
| 176 | `o52h.L4Au` | func | `(i32 i32) -> ()` |
| 177 | `o52h.rzRN` | func | `(i32 i32) -> ()` |
| 178 | `o52h.NvHr` | func | `(i32 i32 i32) -> ()` |
| 179 | `o52h.j22n` | func | `(i32 i32) -> ()` |
| 180 | `o52h.whNS` | func | `(i32 f32) -> ()` |
| 181 | `o52h.jYHT` | func | `(i32 i32) -> ()` |
| 182 | `o52h.YjmO` | func | `(i32 i32) -> ()` |
| 183 | `o52h.jooi` | func | `(i32 i32) -> ()` |
| 184 | `o52h.vGIy` | func | `(i32 i32) -> ()` |
| 185 | `o52h.ehUb` | func | `(i32 i32) -> ()` |
| 186 | `o52h.TeZX` | func | `(i32 i32) -> ()` |
| 187 | `o52h.XZ4f` | func | `(i32 i32) -> ()` |
| 188 | `o52h.ji21` | func | `(i32 i32) -> ()` |
| 189 | `o52h.ZYak` | func | `(i32 i32) -> ()` |
| 190 | `o52h.MX7A` | func | `(i32 i32) -> ()` |
| 191 | `o52h.cusj` | func | `(i32 i32) -> ()` |
| 192 | `o52h.ZUCG` | func | `(i32 i32) -> ()` |
| 193 | `o52h.BwkH` | func | `(i32 i32) -> (i32)` |
| 194 | `o52h.VUF2` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `o52h.Jigg` | func | `(i32 i32) -> ()` |
| 196 | `o52h.rZXc` | func | `(i32 i32 i32) -> ()` |
| 197 | `o52h.m82b` | func | `(i32 i32) -> (i32)` |
| 198 | `o52h.Ww1C` | func | `(i32) -> (i32)` |
| 199 | `o52h.wrP8` | func | `(i32 i32) -> ()` |
| 200 | `o52h.bndg` | func | `(i32 i32) -> ()` |
| 201 | `o52h.xIAh` | func | `(i32 i32) -> ()` |
| 202 | `o52h.S02J` | func | `(i32 i32) -> ()` |
| 203 | `o52h.iw2m` | func | `(i32 i32) -> ()` |
| 204 | `o52h.MUq4` | func | `(i32 i32) -> ()` |
| 205 | `o52h.Pphi` | func | `(i32 i32) -> ()` |
| 206 | `o52h.pJOW` | func | `(i32 i32) -> ()` |
| 207 | `o52h.yyNj` | func | `(i32) -> (i32)` |
| 208 | `o52h.X3Mg` | func | `(i32 i32 i32) -> ()` |
| 209 | `o52h.QWKk` | func | `(i32 i32) -> ()` |
| 210 | `o52h.KLvt` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `o52h.YAxW` | func | `(i32 i32) -> ()` |
| 212 | `o52h.OohO` | func | `(i32) -> ()` |
| 213 | `o52h.UhDa` | func | `(i32 i32) -> ()` |
| 214 | `o52h.vF8Q` | func | `(i32) -> (i32)` |
| 215 | `o52h.Em7q` | func | `(i32 i32 i32) -> ()` |
| 216 | `o52h.hFmu` | func | `(i32 i32) -> ()` |
| 217 | `o52h.KSkS` | func | `(i32 i32) -> ()` |
| 218 | `o52h.pyxb` | func | `(i32 i32) -> ()` |
| 219 | `o52h.AW8q` | func | `(i32 i32) -> ()` |
| 220 | `o52h.EG9o` | func | `(i32 i32) -> (i32)` |
| 221 | `o52h.VfSu` | func | `(i32 i32) -> ()` |
| 222 | `o52h.ek6G` | func | `(i32 i32) -> ()` |
| 223 | `o52h.qGSs` | func | `(i32 i32) -> ()` |
| 224 | `o52h.IBZg` | func | `(i32 i32) -> ()` |
| 225 | `o52h.HtQF` | func | `(i32 i32) -> ()` |
| 226 | `o52h.rc3s` | func | `(i32 i32) -> ()` |
| 227 | `o52h.Of4f` | func | `(i32 i32) -> ()` |
| 228 | `o52h.DoqB` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `o52h.tlX5` | func | `(i32) -> (i32)` |
| 230 | `o52h.jULw` | func | `(i32) -> ()` |
| 231 | `o52h.kaXN` | func | `(i32 f64) -> ()` |
| 232 | `o52h.bwyP` | func | `(i32 i32) -> ()` |
| 233 | `o52h.GB0T` | func | `(i32 i32) -> ()` |
| 234 | `o52h.g5xu` | func | `(i32 i32 i32) -> ()` |
| 235 | `o52h.SZBb` | func | `(i32 i32) -> (i32)` |
| 236 | `o52h.ox7d` | func | `(i32 i32) -> ()` |
| 237 | `o52h.UMoj` | func | `(i32 i32) -> ()` |
| 238 | `o52h.UaeO` | func | `(i32 i32) -> ()` |
| 239 | `o52h.KDMt` | func | `(i32 i32 i32) -> ()` |
| 240 | `o52h.KVqg` | func | `(i32 i32) -> ()` |
| 241 | `o52h.tMIA` | func | `(i32 i32) -> ()` |
| 242 | `o52h.oa3o` | func | `(i32 i32) -> ()` |
| 243 | `o52h.YZqi` | func | `(i32 i32 i32) -> ()` |
| 244 | `o52h.jguK` | func | `(i32 i32) -> ()` |
| 245 | `o52h.xtna` | func | `(i32 i32) -> ()` |
| 246 | `o52h.cA2U` | func | `(i32 i32 i32) -> ()` |
| 247 | `o52h.xTI6` | func | `(i32 i32) -> (i32)` |
| 248 | `o52h.M9B2` | func | `(i32 i32) -> ()` |
| 249 | `o52h.yymP` | func | `(i32 i32 i32) -> ()` |
| 250 | `o52h.eCG9` | func | `(i32 i32) -> ()` |
| 251 | `o52h.nIs4` | func | `(i32 f64) -> ()` |
| 252 | `o52h.Lue8` | func | `(i32 i32) -> ()` |
| 253 | `o52h.toRS` | func | `(i32 f64) -> ()` |
| 254 | `o52h.IzIf` | func | `(i32 i32 i32) -> ()` |
| 255 | `o52h.zgfn` | func | `(i32 i32) -> ()` |
| 256 | `o52h.AHg1` | func | `(i32 i32 i32) -> ()` |
| 257 | `o52h.sBtc` | func | `(i32 i32) -> ()` |
| 258 | `o52h.KFRD` | func | `(i32 i32) -> ()` |
| 259 | `o52h.Xs7J` | func | `(i32 i32) -> ()` |
| 260 | `o52h.fENA` | func | `(i32 i32 i32) -> ()` |
| 261 | `o52h.E0FB` | func | `(i32 i32) -> ()` |
| 262 | `o52h.T21O` | func | `(i32 i32) -> ()` |
| 263 | `o52h.ZPeE` | func | `(i32 i32) -> ()` |
| 264 | `o52h.W9d8` | func | `(i32 i32) -> ()` |
| 265 | `o52h.icXV` | func | `(i32 f32) -> ()` |
| 266 | `o52h.G4fw` | func | `(i32 f32) -> ()` |
| 267 | `o52h.en1Q` | func | `(i32 i32) -> ()` |
| 268 | `o52h.L8G7` | func | `(i32 i32) -> ()` |
| 269 | `o52h.lyXZ` | func | `(i32 i32) -> ()` |
| 270 | `o52h.fG59` | func | `(i32 i32) -> ()` |
| 271 | `o52h.VFYG` | func | `(i32 i32) -> ()` |
| 272 | `o52h.WGVG` | func | `(i32 i32) -> ()` |
| 273 | `o52h.nNFp` | func | `(i32 i32) -> ()` |
| 274 | `o52h.VMtN` | func | `(i32 i32) -> ()` |
| 275 | `o52h.dCaA` | func | `(i32 i32) -> ()` |
| 276 | `o52h.m7po` | func | `(i32 i32) -> ()` |
| 277 | `o52h.ajih` | func | `(i32 i32) -> ()` |
| 278 | `o52h.cA6e` | func | `(i32 i32) -> ()` |
| 279 | `o52h.zsQF` | func | `(i32 i32) -> ()` |
| 280 | `o52h.iKk6` | func | `(i32 i32) -> ()` |
| 281 | `o52h.sMFU` | func | `(i32 i32) -> ()` |
| 282 | `o52h.H4uC` | func | `(i32 i32) -> ()` |
| 283 | `o52h.fsbq` | func | `(i32 i32) -> ()` |
| 284 | `o52h.zRAX` | func | `(i32 i32) -> ()` |
| 285 | `o52h.iTV2` | func | `(i32 i32 i32) -> ()` |
| 286 | `o52h.g2P6` | func | `(i32 i32 i32) -> ()` |
| 287 | `o52h.CC6M` | func | `(i32 i32) -> ()` |
| 288 | `o52h.GPL0` | func | `(i32 i32) -> ()` |
| 289 | `o52h.TUYJ` | func | `(i32 i32) -> ()` |
| 290 | `o52h.aYRa` | func | `(i32 i32) -> ()` |
| 291 | `o52h.JDSv` | func | `(i32 i32) -> ()` |
| 292 | `o52h.Hqjd` | func | `(i32 i32) -> ()` |
| 293 | `o52h.Bfqm` | func | `(i32 i32) -> ()` |
| 294 | `o52h.GL2x` | func | `(i32 i32) -> ()` |
| 295 | `o52h.vLxr` | func | `(i32 i32) -> ()` |
| 296 | `o52h.Npib` | func | `(i32 i32) -> ()` |
| 297 | `o52h.wNZp` | func | `(i32 i32) -> ()` |
| 298 | `o52h.NrAQ` | func | `(i32 i32) -> (i32)` |
| 299 | `o52h.Kqes` | func | `(i32 i32) -> ()` |
| 300 | `o52h.IRGP` | func | `(i32 i32 i32) -> ()` |
| 301 | `o52h.rhH9` | func | `(i32 i32) -> ()` |
| 302 | `o52h.ahgF` | func | `(i32 i32) -> ()` |
| 303 | `o52h.hE6s` | func | `(i32 i32) -> ()` |
| 304 | `o52h.K6pT` | func | `(i32 i32 i32) -> ()` |
| 305 | `o52h.zYRJ` | func | `(i32 i32) -> (i32)` |
| 306 | `o52h.i0CD` | func | `(i32 i32 i32) -> ()` |
| 307 | `o52h.LB0Y` | func | `(i32 i32 i32) -> ()` |
| 308 | `o52h.FYjs` | func | `(i32 i32) -> ()` |
| 309 | `o52h.LCrS` | func | `(i32 i32) -> ()` |
| 310 | `o52h.Zgaw` | func | `(i32 i32) -> ()` |
| 311 | `o52h.vfno` | func | `(i32 i32) -> ()` |
| 312 | `o52h.D7Ar` | func | `(i32 i32) -> (i32)` |
| 313 | `o52h.kDDw` | func | `(i32) -> (i32)` |
| 314 | `o52h.Wuvc` | func | `(i32) -> (i32)` |
| 315 | `o52h.XTkd` | func | `(i32) -> (i32)` |
| 316 | `o52h.ZnLz` | func | `(i32) -> (i32)` |
| 317 | `o52h.hFha` | func | `(i32) -> (i32)` |
| 318 | `o52h.kNBS` | func | `(i32) -> (i32)` |
| 319 | `o52h.J54d` | func | `(i32) -> (i32)` |
| 320 | `o52h.V1KY` | func | `(i32) -> (i32)` |
| 321 | `o52h.IB6V` | func | `(i32) -> (i32)` |
| 322 | `o52h.sStb` | func | `(i32) -> (i32)` |
| 323 | `o52h.oVPk` | func | `(i32) -> (i32)` |
| 324 | `o52h.gECP` | func | `(i32) -> (i32)` |
| 325 | `o52h.ruLL` | func | `(i32) -> (i32)` |
| 326 | `o52h.NE5y` | func | `(i32) -> (i32)` |
| 327 | `o52h.xNNY` | func | `(i32) -> (f64)` |
| 328 | `o52h.HBqE` | func | `(i32) -> (f64)` |
| 329 | `o52h.nSo9` | func | `(i32) -> (i32)` |
| 330 | `o52h.k5O6` | func | `(i32) -> (f64)` |
| 331 | `o52h.o8ko` | func | `(i32) -> (i32)` |
| 332 | `o52h.biC3` | func | `(i32) -> (i32)` |
| 333 | `o52h.WbGE` | func | `(i32) -> (i32)` |
| 334 | `o52h.VOOB` | func | `(i32) -> (i32)` |
| 335 | `o52h.zXgc` | func | `(i32) -> (i32)` |
| 336 | `o52h.DU4G` | func | `(i32) -> (i32)` |
| 337 | `o52h.J2Sm` | func | `(i32) -> (i32)` |
| 338 | `o52h.tQ8J` | func | `(i32) -> (i32)` |
| 339 | `o52h.jD59` | func | `(i32) -> (i32)` |
| 340 | `o52h.gKcy` | func | `(i32) -> (i32)` |
| 341 | `o52h.R0ba` | func | `(i32) -> (i32)` |
| 342 | `o52h.F9iM` | func | `(i32) -> (i32)` |
| 343 | `o52h.XWYX` | func | `(i32) -> (i32)` |
| 344 | `o52h.dG7F` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `o52h.XLOd` | func | `() -> (i32)` |
| 346 | `o52h.lm5S` | func | `(i32 i32) -> ()` |
| 347 | `o52h.LZ0y` | func | `(i32 i32 i32) -> ()` |
| 348 | `o52h.Xl6W` | func | `(i32 i32 i32) -> ()` |
| 349 | `o52h.QUMa` | func | `(i32 i32) -> (i32)` |
| 350 | `o52h.NNMx` | func | `(i32) -> (i32)` |
| 351 | `o52h.hNPt` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `o52h.wbFd` | func | `(i32) -> ()` |
| 353 | `o52h.fXz4` | func | `(i32) -> (i32)` |
| 354 | `o52h.PvyH` | func | `(i32 i32) -> ()` |
| 355 | `o52h.IJ8v` | func | `(i32) -> (i32)` |
| 356 | `o52h.dgZJ` | func | `(i32) -> (i32)` |
| 357 | `o52h.Jkgl` | func | `(i32) -> (i32)` |
| 358 | `o52h.rOJ6` | func | `(i32) -> (i32)` |
| 359 | `o52h.IL1l` | func | `(i32) -> (i32)` |
| 360 | `o52h.dgkr` | func | `(i32 i32) -> ()` |
| 361 | `o52h.Ypbp` | func | `(i32 i32) -> ()` |
| 362 | `o52h.iyGT` | func | `(i32 i32) -> ()` |
| 363 | `o52h.FIHO` | func | `(i32 i32) -> ()` |
| 364 | `o52h.ctBQ` | func | `(i32 i32) -> ()` |
| 365 | `o52h.q2BC` | func | `(i32 i32) -> ()` |
| 366 | `o52h.Xgyl` | func | `(i32 i32) -> ()` |
| 367 | `o52h.Fl9f` | func | `(i32 i32 i32) -> ()` |
| 368 | `o52h.XWnv` | func | `(i32 i32) -> ()` |
| 369 | `o52h.dfIw` | func | `(i32 i32) -> (i32)` |
| 370 | `o52h.dSUG` | func | `(i32) -> (i32)` |
| 371 | `o52h.f6ch` | func | `(i32) -> (i32)` |
| 372 | `o52h.nQ1c` | func | `(i32 i32) -> ()` |
| 373 | `o52h.kmLZ` | func | `(i32) -> (i32)` |
| 374 | `o52h.ZxIw` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `o52h.cQEf` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `o52h.dLL1` | func | `(i32 i32) -> ()` |
| 377 | `o52h.SukL` | func | `(i32) -> (i32)` |
| 378 | `o52h.mRZ0` | func | `(i32) -> (i32)` |
| 379 | `o52h.fApZ` | func | `(i32) -> (i32)` |
| 380 | `o52h.aqRP` | func | `(i32) -> (i32)` |
| 381 | `o52h.dQpW` | func | `(i32) -> (i32)` |
| 382 | `o52h.NK6H` | func | `(i32) -> (i32)` |
| 383 | `o52h.pMOn` | func | `(i32 i32) -> ()` |
| 384 | `o52h.nzk5` | func | `(i32 i32) -> (i32)` |
| 385 | `o52h.jUeX` | func | `(i32 i32) -> (i32)` |
| 386 | `o52h.ER7x` | func | `(i32 i32) -> (i32)` |
| 387 | `o52h.L6Zx` | func | `(i32 i32) -> (i32)` |
| 388 | `o52h.mtYU` | func | `(i32 i32) -> (i32)` |
| 389 | `o52h.jkHq` | func | `(i32 i32) -> (i32)` |
| 390 | `o52h.wGWd` | func | `(f64) -> (i32)` |
| 391 | `o52h.nqsJ` | func | `(i32 i32) -> (i32)` |
| 392 | `o52h.R5zS` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `ESjt` | func | 2027 | `(i32) -> (i32)` |
| `BACV` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `fvsr` | func | 3306 | `(i32) -> ()` |
| `TrHD` | func | 2592 | `(i32) -> (i32)` |
| `Ke3c` | func | 1571 | `(i32) -> (i32)` |
| `q22u` | func | 1257 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `AmMW` | func | 2593 | `(i32 i32) -> (i32)` |
| `ZvBf` | func | 2369 | `(i32 i32) -> ()` |
| `FBgU` | func | 2584 | `(i32) -> (i32)` |
| `MSq6` | func | 2422 | `(i32 i32) -> (i32)` |
| `jvrs` | func | 1685 | `(i32 f64 f64 f64) -> (i32)` |
| `hDAg` | func | 2046 | `(i32 i32 i32 i32) -> ()` |
| `memory` | memory | 0 | `` |
| `qcW9` | func | 2936 | `(i32) -> (i32)` |
| `oCdA` | func | 2498 | `(i32) -> (i32)` |
| `Nkr2` | func | 1467 | `(i32 f64 f64) -> (i32)` |
| `DV1V` | func | 1546 | `(i32 i32 i32 i32) -> ()` |
| `TdRx` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `CDpo` | func | 1377 | `(i32 i32) -> (i32)` |
| `wgKi` | func | 3124 | `(i32 i32) -> (i32 i32)` |
| `oCP2` | func | 2231 | `(i32 i32) -> (i32)` |
| `ZxKr` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `nse8` | func | 3126 | `(i32 i32) -> (i32 i32)` |
| `R6p2` | func | 2343 | `(i32 f64) -> (i32)` |
| `odbX` | func | 1847 | `(i32 i32) -> (i32)` |
| `cSOO` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `YSwI` | func | 1592 | `(i32 i32) -> (i32)` |
| `W1xX` | func | 2515 | `(i32) -> (i32)` |
| `wpT0` | func | 1417 | `(i32 i32 i32) -> (i32)` |
| `lFwr` | func | 3125 | `(i32 i32) -> (i32 i32)` |
| `kUD9` | func | 1570 | `(i32 i32 i32 i32) -> (i32)` |
| `HK4h` | func | 1906 | `() -> (i32)` |
| `DWaE` | func | 1371 | `(i32) -> (i32)` |
| `FnCx` | func | 2564 | `(i32) -> (i32)` |
| `wNrw` | func | 798 | `(i32 i32) -> (i32)` |
| `eBiH` | func | 2424 | `(i32 i32) -> (i32)` |
| `jRqZ` | func | 2594 | `(i32 i32) -> (i32)` |
| `IJRY` | func | 1983 | `(i32) -> ()` |
| `xa18` | func | 2423 | `(i32 i32) -> (i32)` |
| `j7XU` | func | 3090 | `(i32 i32 i32 i32) -> (i32)` |
| `mQ8r` | func | 3064 | `() -> ()` |
| `HsIG` | func | 2157 | `(i32 i32) -> (i32)` |
| `jMKD` | func | 1834 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `YHpX` | func | 2901 | `(i32) -> (i32)` |
| `ukfn` | func | 1828 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZKUb` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `O1f4` | func | 2119 | `(i32 f64 f64 f64) -> (i32)` |
| `jx9E` | func | 3134 | `(i32) -> (i32 i32)` |
| `DGjD` | func | 1403 | `(i32) -> ()` |
| `Ayus` | func | 2466 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `Hrm1` | func | 2579 | `(i32 i32) -> ()` |
| `TRsw` | func | 2342 | `(i32 i32) -> ()` |
| `yaDZ` | func | 2601 | `(i32) -> (i32)` |
| `pU3N` | func | 1913 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `MabU` | func | 3122 | `(i32 i32) -> (i32 i32)` |
| `lUUy` | func | 2565 | `(i32) -> (i32)` |
| `mohp` | func | 3301 | `() -> (f64)` |
| `zM8i` | func | 1670 | `(i32 i32) -> (i32)` |
| `Vdik` | func | 3123 | `(i32 i32) -> (i32 i32)` |
| `XSvx` | func | 1608 | `(i32 f64) -> (f64)` |
| `QVGm` | func | 1606 | `(i32 i32) -> (i32)` |
| `Oxtd` | func | 1640 | `(i32 i32 i32 i32) -> (i32)` |
| `GMFk` | func | 1810 | `(i32) -> (i32)` |
| `mfUI` | func | 830 | `(i32) -> (i32)` |
| `i3v3` | func | 3084 | `(i32 i32) -> (i32)` |
| `qBaW` | func | 3127 | `(i32 i32) -> (i32 i32)` |
| `bEJR` | func | 3136 | `(i32) -> (i32 i32)` |
| `r6NX` | func | 2865 | `(i32) -> (i32)` |
| `ezGt` | func | 1578 | `(i32 i32) -> (i32)` |
| `dgNi` | func | 2421 | `(i32 i32) -> (i32)` |
| `e9QP` | func | 1519 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `EQC1` | func | 1200 | `(i32 i32) -> (i32)` |
| `Hoii` | func | 1982 | `(i32) -> ()` |
| `w75x` | func | 3138 | `(i32) -> (i32 i32)` |
| `QnCB` | func | 1788 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `pMIu` | func | 2570 | `(i32) -> (i32)` |
| `e3DE` | func | 1466 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `lcBG` | func | 3177 | `(i32 i32 i32 i32) -> ()` |
| `kCqc` | func | 2634 | `(i32 i32) -> ()` |
| `GJsf` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `P0Nm` | func | 3096 | `(i32 i32) -> ()` |
| `vi4K` | func | 3255 | `(i32) -> ()` |
| `deyi` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `uOtl` | func | 2586 | `(i32) -> (i32)` |
| `um6n` | func | 2568 | `(i32) -> (i32)` |
| `I8Kt` | func | 3121 | `(i32 i32) -> (i32 i32)` |
| `mgNa` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `cTH8` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `HNp2` | func | 1560 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `iE7n` | func | 1619 | `(i32 i32 i32) -> (i32)` |
| `v9Py` | func | 2563 | `(i32) -> (i32)` |
| `rMpn` | func | 969 | `(i32 i32) -> (i32)` |
| `w4A6` | func | 1957 | `(i32 i32) -> ()` |
| `FHy2` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `IpLU` | func | 2566 | `(i32) -> (i32)` |
| `dnvp` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `VCEC` | func | 2562 | `(i32) -> (i32)` |
| `noYR` | func | 2585 | `(i32 i32) -> ()` |
| `rPAK` | func | 2873 | `(i32) -> (i32)` |
| `iVf9` | func | 3151 | `() -> (i32 i32)` |
| `sEbD` | func | 1605 | `(i32 i32) -> (i32)` |
| `otVx` | func | 1681 | `(i32 i32) -> ()` |
| `niWO` | func | 1951 | `(i32 i32 f64 f64 f64) -> ()` |
| `bX7Q` | func | 3257 | `() -> ()` |
| `mHts` | func | 2684 | `(i32 i32) -> ()` |
| `rSt7` | func | 1345 | `(i32 i32 i32) -> (i32)` |
| `f7Cd` | func | 759 | `(i32 i32) -> (i32)` |
| `fkRh` | func | 2603 | `(i32) -> (i32)` |
| `luDr` | func | 2913 | `(i32) -> ()` |
| `Vi44` | func | 1492 | `(i32 i32) -> (i32)` |
| `v00U` | func | 1305 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `PSyW` | func | 897 | `(i32 i32) -> (i32)` |
| `OV0d` | global | 1 | `` |
| `n38W` | func | 2270 | `(i32 i32) -> (i32)` |
| `ZBV5` | func | 1524 | `() -> (i32)` |
| `kUSR` | func | 1327 | `(i32 i32) -> (i32)` |
| `ygJU` | func | 1723 | `(i32 i32 i32 i32) -> (i32)` |
| `Xrp0` | func | 1349 | `(i32 i32 i32) -> ()` |
| `nBCQ` | func | 2544 | `(i32 i32) -> ()` |
| `l4ca` | func | 3188 | `(i32 i32 i32) -> ()` |
| `lTjB` | func | 3186 | `(i32 i32 i32) -> (i32)` |
| `ptRX` | func | 3305 | `(i32) -> (i32)` |
| `PBRY` | func | 2456 | `(i32 i32) -> (i32)` |
| `fXSE` | func | 2290 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `j7Bg` | func | 2560 | `(i32) -> (f64)` |
| `hVfj` | func | 3329 | `() -> (i32)` |
| `WPdY` | func | 3330 | `() -> (i32)` |
| `ZKcp` | func | 770 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `dTWj` | func | 2561 | `(i32) -> (i32)` |
| `NYpg` | func | 1929 | `(i32 i32 i32 i32) -> (i32)` |
| `LPBa` | func | 2651 | `() -> (i32)` |
| `Uy0W` | func | 3150 | `() -> (i32 i32)` |
| `xSOc` | func | 3246 | `(i32 i32 i32) -> ()` |
| `QIxE` | func | 2044 | `(i32) -> (i32)` |
| `mgxt` | func | 3135 | `(i32) -> (i32 i32)` |
| `xROK` | func | 2569 | `(i32) -> (i32)` |
| `G21j` | func | 1975 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `OSL9` | global | 2 | `` |
| `btQY` | func | 1297 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `Ow81` | func | 1527 | `(i32) -> (i32)` |
| `KEqt` | func | 2079 | `(i32 i32) -> ()` |
| `YbRw` | func | 1968 | `(i32 i32) -> (i32)` |
| `vnj6` | func | 2890 | `(i32) -> (i32)` |
| `ToCR` | func | 1201 | `(i32 i32) -> ()` |
| `Jtsl` | func | 2104 | `(i32 f64) -> (i32)` |
| `t0UV` | func | 3152 | `() -> (i32 i32)` |
| `k8Kk` | func | 3216 | `() -> (i32)` |
| `VkNL` | func | 2583 | `(i32) -> (i32)` |
| `Rc3J` | func | 1680 | `(i32 i32) -> ()` |
| `en4i` | func | 2567 | `(i32) -> ()` |
| `oM19` | func | 2602 | `(i32) -> (i32)` |
| `fhwC` | func | 2135 | `(i32 i32) -> ()` |
| `qC14` | func | 3137 | `(i32) -> (i32 i32)` |
| `vdqK` | func | 2545 | `(i32) -> (i32)` |
| `tWmG` | func | 660 | `(i32 i32 i32) -> (i32)` |
| `po3G` | func | 2471 | `(i32 i32 i32 i32) -> (i32)` |
| `fkzQ` | func | 1298 | `(i32 i32 i32 i32) -> (i32)` |
| `ghZb` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `dAl6` | func | 1565 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `mzbe` | func | 2685 | `() -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 839 · max 839
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2248648, `i32` = i32.const 2249220

## Functions

- 2,950 bodies · 4,050,463 code bytes · avg 1.3 KB
- instruction scan: 2,950 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 114 |
| <= 128 bytes | 276 |
| <= 256 bytes | 386 |
| <= 512 bytes | 668 |
| <= 1024 bytes | 587 |
| <= 2048 bytes | 415 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 92 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 35 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 149 | 122,454 | 58,848 | local.get×16652, i32.const×7053, i32.add×3403, local.set×3378, i32.load×3112 |
| 1 | `(i32 i32 i32 i32) -> ()` | 217 | 194,676 | 88,355 | local.get×25898, i32.const×9909, i32.load×5640, local.set×4735, local.tee×4638 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,181 | 25,576 | local.get×7556, i32.const×3392, local.set×1404, i32.add×1302, i32.load×1164 |
| 3 | `(i32 i32) -> ()` | 125 | 48,670 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,468 | 14,007 | local.get×4107, i32.const×1881, i32.load×884, i32.add×645, local.set×620 |
| 5 | `(i32 i32) -> ()` | 59 | 29,627 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 177 | 20,026 | 9,398 | local.get×2934, i32.const×1038, local.set×621, i32.add×458, i32.load×421 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 17 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 94 | 21,138 | 8,084 | local.get×3019, i32.const×947, i64.store×844, i32.store×655, i64.const×513 |
| 21 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 43 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,436 | 12,890 | local.get×3670, i32.const×1868, i32.add×766, local.set×697, end×577 |
| 61 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 192 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 220 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 706 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 707 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1012 | `(i32 i32) -> (i32)` | 40 | 19,895 | 7,747 | local.get×2497, i32.const×848, i64.store×583, i32.load×391, local.set×357 |
| 1575 | `(i32 i32) -> (i32)` | 180 | 54,758 | 19,856 | local.get×6592, i32.const×2623, i64.store×1913, i64.const×1078, i64.load×1056 |
| 1968 | `(i32 i32) -> ()` | 110 | 40,258 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2608 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2898 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2917 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 541,653 |
| `i32.const` | 227,845 |
| `local.tee` | 99,619 |
| `local.set` | 94,549 |
| `i32.load` | 93,438 |
| `i32.add` | 87,158 |
| `end` | 79,379 |
| `br_if` | 63,871 |
| `i32.store` | 46,985 |
| `block` | 37,345 |
| `i64.store` | 32,822 |
| `i64.const` | 32,171 |
| `if` | 30,362 |
| `call` | 30,171 |
| `i64.load` | 24,365 |
| `i32.sub` | 24,159 |
| `br` | 23,246 |
| `i32.eqz` | 19,074 |
| `select` | 16,757 |
| `i32.and` | 16,352 |
| `i32.shl` | 16,236 |
| `i32.ne` | 15,678 |
| `i32.load8_u` | 15,275 |
| `i32.eq` | 13,739 |
| `i32.store8` | 13,434 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,950/2,950 (degraded: 0)
