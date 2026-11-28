# WASM module: `bloxd_wasm_webgpu_bg`

> environment **staging.bloxd.io** · build `welxxc.ffac0572` · analyzed 2026-11-28T21:24:47+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgpu_bg.9a8ef6870febc14139c3.wasm
> 5,238,928 bytes (5.0 MB) · sha256 `d8909c14a3b53631…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,239,836 → 5,238,928 bytes (-908)
- data bytes 1,050,193 → 1,049,293
- name-section module id `558e65b2dcfd33be.12491` → `22a4833504a3b62b.12491` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/170 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 3,025 / 394 |
| Exports / imports | 170 / 395 |
| Code bytes (function bodies) | 4,142,840 (4.0 MB) |
| Total local variables | 31,921 |
| Instructions (scanable bodies) | 1,938,528 |
| Data segments / bytes | 3,552 / 1,049,293 |
| Element segments / entries | 1 / 844 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `22a4833504a3b62b.12491` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,542 | 180 |
| 2 | import | 4,746 | 395 |
| 3 | function | 3,079 | 3025 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,361 | 170 |
| 9 | element | 1,695 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,148,372 | 3025 |
| 11 | data | 1,078,029 | 3552 |
| 0 | custom:name | 30 | — |

## Types

180 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

395 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `X0FN.YAUu` | memory | `[128..14648]` |
| 0 | `X0FN.DngN` | func | `(i32) -> (i32)` |
| 1 | `X0FN.FhlR` | func | `(i32) -> (f64)` |
| 2 | `X0FN.QSO8` | func | `() -> (i32)` |
| 3 | `X0FN.Fvi5` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `X0FN.CBVn` | func | `(i32) -> ()` |
| 5 | `X0FN.CnCv` | func | `(i32 i32) -> (i32)` |
| 6 | `X0FN.pxen` | func | `(i32) -> (i32)` |
| 7 | `X0FN.P1ND` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `X0FN.jQVG` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `X0FN.JjvS` | func | `(i32) -> (i32)` |
| 10 | `X0FN.njST` | func | `(i32 i32) -> ()` |
| 11 | `X0FN.eBxz` | func | `(i32 i32) -> ()` |
| 12 | `X0FN.pAJI` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `X0FN.yqJo` | func | `(i32 i32) -> (i32)` |
| 14 | `X0FN.KDAw` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `X0FN.lESR` | func | `(i32) -> (i32)` |
| 16 | `X0FN.aY7l` | func | `(i32 i32) -> (i32)` |
| 17 | `X0FN.RJiv` | func | `(i32 i32) -> (i32)` |
| 18 | `X0FN.bdlr` | func | `(i32 i32) -> ()` |
| 19 | `X0FN.X8vZ` | func | `(i32) -> (i32)` |
| 20 | `X0FN.sjHg` | func | `(i32) -> (i32)` |
| 21 | `X0FN.bGka` | func | `(i32 i32 i32) -> ()` |
| 22 | `X0FN.LWmU` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `X0FN.jle2` | func | `(i32) -> (i32)` |
| 24 | `X0FN.uQow` | func | `(i32) -> (i32)` |
| 25 | `X0FN.iM1x` | func | `(i32 i32) -> ()` |
| 26 | `X0FN.QzhR` | func | `(i32 i32) -> (i32)` |
| 27 | `X0FN.dT0o` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `X0FN.cRnJ` | func | `(i32) -> (i32)` |
| 29 | `X0FN.WB5o` | func | `(i32) -> (i32)` |
| 30 | `X0FN.mamp` | func | `(i32) -> (i32)` |
| 31 | `X0FN.Ypee` | func | `(i32) -> (i32)` |
| 32 | `X0FN.iBCU` | func | `(i32) -> (i32)` |
| 33 | `X0FN.UZTA` | func | `(i32 i32 i32) -> ()` |
| 34 | `X0FN.KICb` | func | `(i32 i32) -> (i32)` |
| 35 | `X0FN.PpGw` | func | `(i32) -> (i32)` |
| 36 | `X0FN.iIUa` | func | `(i32) -> ()` |
| 37 | `X0FN.cCFx` | func | `(i32) -> (i32)` |
| 38 | `X0FN.tSMv` | func | `(i32) -> (i32)` |
| 39 | `X0FN.FCtS` | func | `(i32) -> ()` |
| 40 | `X0FN.Ikif` | func | `(i32 i32) -> (i32)` |
| 41 | `X0FN.TDmJ` | func | `(i32) -> ()` |
| 42 | `X0FN.MLDF` | func | `(i32 i32) -> ()` |
| 43 | `X0FN.QlMw` | func | `(i32 i32 i32) -> (i32)` |
| 44 | `X0FN.KVFV` | func | `(i32) -> ()` |
| 45 | `X0FN.yAY3` | func | `(i32) -> ()` |
| 46 | `X0FN.ZHTR` | func | `() -> (i32)` |
| 47 | `X0FN.K8me` | func | `(i32 i32) -> (i32)` |
| 48 | `X0FN.VarT` | func | `(i32 i32) -> (i32)` |
| 49 | `X0FN.r70c` | func | `(i32) -> (i32)` |
| 50 | `X0FN.Kmz6` | func | `(i32) -> (i32)` |
| 51 | `X0FN.vod8` | func | `(i32) -> (i32)` |
| 52 | `X0FN.bVng` | func | `(i32 i32) -> ()` |
| 53 | `X0FN.J5pv` | func | `(i32) -> (i32)` |
| 54 | `X0FN.RZUD` | func | `(i32) -> ()` |
| 55 | `X0FN.nQig` | func | `(i32 i32) -> (i32)` |
| 56 | `X0FN.CzAO` | func | `(i32 i32 i32) -> (i32)` |
| 57 | `X0FN.xeO5` | func | `(i32) -> (i32)` |
| 58 | `X0FN.oDvh` | func | `(i32 i32 i32) -> ()` |
| 59 | `X0FN.qQM1` | func | `(i32 i32) -> ()` |
| 60 | `X0FN.y1uF` | func | `(i32) -> (i32)` |
| 61 | `X0FN.DnjJ` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 62 | `X0FN.WS94` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 63 | `X0FN.ql3I` | func | `(i32) -> ()` |
| 64 | `X0FN.k54B` | func | `(i32 i32 i32) -> ()` |
| 65 | `X0FN.cbpi` | func | `(i32 i32) -> ()` |
| 66 | `X0FN.wE6b` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 67 | `X0FN.hgjc` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `X0FN.pCoP` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 69 | `X0FN.X0VS` | func | `(i32 i32 f64) -> ()` |
| 70 | `X0FN.If3E` | func | `(i32) -> (i32)` |
| 71 | `X0FN.dVVW` | func | `(i32 i32) -> ()` |
| 72 | `X0FN.Sm9i` | func | `(i32 i32 i32) -> ()` |
| 73 | `X0FN.kqel` | func | `(i32 i32 i32 i32) -> ()` |
| 74 | `X0FN.bzz6` | func | `(i32) -> ()` |
| 75 | `X0FN.EUfE` | func | `(i32 i32 i32) -> ()` |
| 76 | `X0FN.lCkR` | func | `(i32 i32) -> ()` |
| 77 | `X0FN.Nt6b` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 78 | `X0FN.g17x` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 79 | `X0FN.Ebyb` | func | `(i32 i32 i32) -> ()` |
| 80 | `X0FN.amDG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 81 | `X0FN.SPn7` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 82 | `X0FN.p4FY` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 83 | `X0FN.SkdH` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 84 | `X0FN.uAk1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `X0FN.gtiM` | func | `(i32 i32 i32) -> ()` |
| 86 | `X0FN.jgRD` | func | `(i32 i32) -> (i32)` |
| 87 | `X0FN.oeRh` | func | `(i32) -> (i32)` |
| 88 | `X0FN.JmVR` | func | `(i32) -> (i32)` |
| 89 | `X0FN.vcn0` | func | `(i32) -> (i32)` |
| 90 | `X0FN.EHFc` | func | `(i32 i32) -> (i32)` |
| 91 | `X0FN.kP4I` | func | `(i32) -> ()` |
| 92 | `X0FN.s6lZ` | func | `(i32) -> (i32)` |
| 93 | `X0FN.YOWw` | func | `(i32 i32) -> (i32)` |
| 94 | `X0FN.DKac` | func | `(i32 i32 i32) -> (i32)` |
| 95 | `X0FN.ya9T` | func | `(i32 i32 i32) -> ()` |
| 96 | `X0FN.qmI5` | func | `(i32 i32 i32 i32) -> (i32)` |
| 97 | `X0FN.rrZ2` | func | `() -> (f64)` |
| 98 | `X0FN.LxbS` | func | `() -> (f64)` |
| 99 | `X0FN.DnaQ` | func | `(i32 i32) -> ()` |
| 100 | `X0FN.eHpQ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 101 | `X0FN.Ojk6` | func | `(i32) -> (i32)` |
| 102 | `X0FN.vAUx` | func | `(i32) -> (i32)` |
| 103 | `X0FN.tjXe` | func | `(i32) -> (i32)` |
| 104 | `X0FN.mGgU` | func | `() -> (i32)` |
| 105 | `X0FN.hlYo` | func | `() -> (i32)` |
| 106 | `X0FN.XSD1` | func | `() -> (i32)` |
| 107 | `X0FN.MMM8` | func | `() -> (i32)` |
| 108 | `X0FN.TmH5` | func | `(i32 i32) -> (i32)` |
| 109 | `X0FN.oXuN` | func | `(i32) -> ()` |
| 110 | `X0FN.aFU0` | func | `(i32 i32) -> (i32)` |
| 111 | `X0FN.ybw4` | func | `(i32) -> (i32)` |
| 112 | `X0FN.UZIm` | func | `() -> (f64)` |
| 113 | `X0FN.G9zQ` | func | `(i32) -> (i32)` |
| 114 | `X0FN.BU5b` | func | `(i32 i32) -> ()` |
| 115 | `X0FN.x8c1` | func | `(i32 i32) -> ()` |
| 116 | `X0FN.RdOL` | func | `(i32 i32) -> ()` |
| 117 | `X0FN.l3qw` | func | `(i32 f32) -> ()` |
| 118 | `X0FN.yh76` | func | `(i32 f32) -> ()` |
| 119 | `X0FN.KjYH` | func | `(i32 i32) -> ()` |
| 120 | `X0FN.qPPe` | func | `(i32 i32) -> ()` |
| 121 | `X0FN.AgCt` | func | `(i32 i32) -> ()` |
| 122 | `X0FN.P1BN` | func | `(i32 i32) -> ()` |
| 123 | `X0FN.dTvR` | func | `(i32 i32 i32) -> ()` |
| 124 | `X0FN.m8qd` | func | `(i32 i32) -> (i32)` |
| 125 | `X0FN.db0J` | func | `(i32 i32) -> ()` |
| 126 | `X0FN.wzPp` | func | `(i32 i32) -> ()` |
| 127 | `X0FN.AzyW` | func | `(i32 i32) -> ()` |
| 128 | `X0FN.jxA8` | func | `(i32 i32) -> ()` |
| 129 | `X0FN.GObr` | func | `(i32 f64) -> ()` |
| 130 | `X0FN.QXQI` | func | `(i32 f64) -> ()` |
| 131 | `X0FN.zF5C` | func | `(i32 i32) -> ()` |
| 132 | `X0FN.ehYe` | func | `(i32 i32 i32) -> ()` |
| 133 | `X0FN.RhxZ` | func | `(i32 i32) -> ()` |
| 134 | `X0FN.BqbK` | func | `(i32 i32) -> (i32)` |
| 135 | `X0FN.d500` | func | `(i32 i32 i32) -> ()` |
| 136 | `X0FN.JR1M` | func | `(i32 i32 i32) -> ()` |
| 137 | `X0FN.PWRv` | func | `(i32 i32) -> (i32)` |
| 138 | `X0FN.r2iB` | func | `(i32 i32) -> (i32)` |
| 139 | `X0FN.LWGc` | func | `(i32 i32 i32) -> ()` |
| 140 | `X0FN.Jgro` | func | `(i32 i32 i32) -> ()` |
| 141 | `X0FN.I19d` | func | `(i32 i32) -> (i32)` |
| 142 | `X0FN.xPaz` | func | `(i32 i32) -> ()` |
| 143 | `X0FN.brm4` | func | `(i32 i32) -> ()` |
| 144 | `X0FN.Lc1v` | func | `(i32 i32) -> ()` |
| 145 | `X0FN.c4nS` | func | `(i32 i32) -> ()` |
| 146 | `X0FN.ZTTB` | func | `(i32 i32) -> ()` |
| 147 | `X0FN.EOsx` | func | `(i32 i32) -> ()` |
| 148 | `X0FN.Gyf9` | func | `(i32 i32) -> ()` |
| 149 | `X0FN.sQPQ` | func | `(i32 f64) -> ()` |
| 150 | `X0FN.iYMc` | func | `(i32 i32) -> ()` |
| 151 | `X0FN.TozA` | func | `(i32 i32) -> ()` |
| 152 | `X0FN.AJzs` | func | `(i32 i32) -> ()` |
| 153 | `X0FN.l4ik` | func | `(i32 i32) -> ()` |
| 154 | `X0FN.ZuXq` | func | `(i32 i32) -> ()` |
| 155 | `X0FN.oa1b` | func | `(i32 i32) -> ()` |
| 156 | `X0FN.uTJq` | func | `(i32 i32) -> ()` |
| 157 | `X0FN.vz96` | func | `(i32 i32) -> ()` |
| 158 | `X0FN.ttVA` | func | `(i32 i32) -> ()` |
| 159 | `X0FN.rVjl` | func | `(i32 i32 i32) -> ()` |
| 160 | `X0FN.MGHA` | func | `(i32 i32 i32) -> ()` |
| 161 | `X0FN.uuxK` | func | `(i32 i32) -> (i32)` |
| 162 | `X0FN.iaRk` | func | `(i32 i32) -> (i32)` |
| 163 | `X0FN.HcoB` | func | `(i32 i32) -> ()` |
| 164 | `X0FN.nkYV` | func | `(i32 i32) -> ()` |
| 165 | `X0FN.dO6p` | func | `(i32 f64) -> ()` |
| 166 | `X0FN.zDYx` | func | `(i32 i32) -> ()` |
| 167 | `X0FN.WF5F` | func | `(i32 i32) -> ()` |
| 168 | `X0FN.lEJe` | func | `(i32 i32) -> ()` |
| 169 | `X0FN.Ic1f` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 170 | `X0FN.kC8q` | func | `(i32 f64) -> ()` |
| 171 | `X0FN.PyTx` | func | `(i32 f64) -> ()` |
| 172 | `X0FN.Xm4M` | func | `(i32 f64) -> ()` |
| 173 | `X0FN.Go0x` | func | `(i32 f64) -> ()` |
| 174 | `X0FN.rDqH` | func | `(i32 i32) -> ()` |
| 175 | `X0FN.YnIe` | func | `(i32 i32) -> ()` |
| 176 | `X0FN.A2cz` | func | `(i32 i32) -> ()` |
| 177 | `X0FN.AOso` | func | `(i32 i32) -> ()` |
| 178 | `X0FN.gfiS` | func | `(i32 i32) -> ()` |
| 179 | `X0FN.ynOV` | func | `(i32 i32 i32) -> ()` |
| 180 | `X0FN.RW9W` | func | `(i32 i32) -> ()` |
| 181 | `X0FN.bYeQ` | func | `(i32 f32) -> ()` |
| 182 | `X0FN.e1pp` | func | `(i32 i32) -> ()` |
| 183 | `X0FN.uNnS` | func | `(i32 i32) -> ()` |
| 184 | `X0FN.LAai` | func | `(i32 i32) -> ()` |
| 185 | `X0FN.WaQ3` | func | `(i32 i32) -> ()` |
| 186 | `X0FN.hqVa` | func | `(i32 i32) -> ()` |
| 187 | `X0FN.TvzV` | func | `(i32 i32) -> ()` |
| 188 | `X0FN.tCvB` | func | `(i32 i32) -> ()` |
| 189 | `X0FN.oqfS` | func | `(i32 i32) -> ()` |
| 190 | `X0FN.Q0Gv` | func | `(i32 i32) -> ()` |
| 191 | `X0FN.bhc2` | func | `(i32 i32) -> ()` |
| 192 | `X0FN.JxIa` | func | `(i32 i32) -> ()` |
| 193 | `X0FN.bnM0` | func | `(i32 i32) -> ()` |
| 194 | `X0FN.aq3D` | func | `(i32 i32) -> (i32)` |
| 195 | `X0FN.HFDR` | func | `(i32 i32 i32 i32) -> ()` |
| 196 | `X0FN.TO4V` | func | `(i32 i32) -> ()` |
| 197 | `X0FN.Thet` | func | `(i32 i32 i32) -> ()` |
| 198 | `X0FN.TCBq` | func | `(i32 i32) -> (i32)` |
| 199 | `X0FN.U80T` | func | `(i32) -> (i32)` |
| 200 | `X0FN.CUmz` | func | `(i32 i32) -> ()` |
| 201 | `X0FN.gAkX` | func | `(i32 i32) -> ()` |
| 202 | `X0FN.MjCk` | func | `(i32 i32) -> ()` |
| 203 | `X0FN.wbSi` | func | `(i32 i32) -> ()` |
| 204 | `X0FN.ixHK` | func | `(i32 i32) -> ()` |
| 205 | `X0FN.tLLu` | func | `(i32 i32) -> ()` |
| 206 | `X0FN.OJAN` | func | `(i32 i32) -> ()` |
| 207 | `X0FN.zQme` | func | `(i32 i32) -> ()` |
| 208 | `X0FN.DGLy` | func | `(i32) -> (i32)` |
| 209 | `X0FN.Avdd` | func | `(i32 i32 i32) -> ()` |
| 210 | `X0FN.adj0` | func | `(i32 i32) -> ()` |
| 211 | `X0FN.d7to` | func | `(i32 i32 i32 i32) -> ()` |
| 212 | `X0FN.coKL` | func | `(i32 i32) -> ()` |
| 213 | `X0FN.Wqt9` | func | `(i32) -> ()` |
| 214 | `X0FN.Sb65` | func | `(i32 i32) -> ()` |
| 215 | `X0FN.pkwn` | func | `(i32) -> (i32)` |
| 216 | `X0FN.OJ79` | func | `(i32 i32 i32) -> ()` |
| 217 | `X0FN.Kl35` | func | `(i32 i32) -> ()` |
| 218 | `X0FN.WAlY` | func | `(i32 i32) -> ()` |
| 219 | `X0FN.Zxoc` | func | `(i32 i32) -> ()` |
| 220 | `X0FN.eZwK` | func | `(i32 i32) -> ()` |
| 221 | `X0FN.mv0H` | func | `(i32 i32) -> (i32)` |
| 222 | `X0FN.zKoB` | func | `(i32 i32) -> ()` |
| 223 | `X0FN.otYN` | func | `(i32 i32) -> ()` |
| 224 | `X0FN.guWW` | func | `(i32 i32) -> ()` |
| 225 | `X0FN.KWkW` | func | `(i32 i32) -> ()` |
| 226 | `X0FN.ZcGt` | func | `(i32 i32) -> ()` |
| 227 | `X0FN.As37` | func | `(i32 i32) -> ()` |
| 228 | `X0FN.WUzZ` | func | `(i32 i32) -> ()` |
| 229 | `X0FN.ENW7` | func | `(i32 i32 f64 f64) -> (i32)` |
| 230 | `X0FN.tqOX` | func | `(i32) -> (i32)` |
| 231 | `X0FN.LKc9` | func | `(i32) -> ()` |
| 232 | `X0FN.qpLe` | func | `(i32 f64) -> ()` |
| 233 | `X0FN.A9aX` | func | `(i32 i32) -> ()` |
| 234 | `X0FN.omQ9` | func | `(i32 i32) -> ()` |
| 235 | `X0FN.Hgyt` | func | `(i32 i32 i32) -> ()` |
| 236 | `X0FN.BMo9` | func | `(i32 i32) -> (i32)` |
| 237 | `X0FN.Ymv1` | func | `(i32 i32) -> ()` |
| 238 | `X0FN.y71L` | func | `(i32 i32) -> ()` |
| 239 | `X0FN.XrJf` | func | `(i32 i32) -> ()` |
| 240 | `X0FN.syRL` | func | `(i32 i32 i32) -> ()` |
| 241 | `X0FN.CrLU` | func | `(i32 i32) -> ()` |
| 242 | `X0FN.Hinc` | func | `(i32 i32) -> ()` |
| 243 | `X0FN.R6qt` | func | `(i32 i32) -> ()` |
| 244 | `X0FN.eNQ0` | func | `(i32 i32 i32) -> ()` |
| 245 | `X0FN.BCu6` | func | `(i32 i32) -> ()` |
| 246 | `X0FN.yBAF` | func | `(i32 i32) -> ()` |
| 247 | `X0FN.x59d` | func | `(i32 i32 i32) -> ()` |
| 248 | `X0FN.Fote` | func | `(i32 i32) -> (i32)` |
| 249 | `X0FN.ry71` | func | `(i32 i32) -> ()` |
| 250 | `X0FN.rCjH` | func | `(i32 i32 i32) -> ()` |
| 251 | `X0FN.hGMX` | func | `(i32 i32) -> ()` |
| 252 | `X0FN.CzQE` | func | `(i32 f64) -> ()` |
| 253 | `X0FN.ZRQw` | func | `(i32 i32) -> ()` |
| 254 | `X0FN.DEd4` | func | `(i32 f64) -> ()` |
| 255 | `X0FN.nnSW` | func | `(i32 i32 i32) -> ()` |
| 256 | `X0FN.xuIL` | func | `(i32 i32) -> ()` |
| 257 | `X0FN.Uiu5` | func | `(i32 i32 i32) -> ()` |
| 258 | `X0FN.yXdA` | func | `(i32 i32) -> ()` |
| 259 | `X0FN.ObgI` | func | `(i32 i32) -> ()` |
| 260 | `X0FN.heKR` | func | `(i32 i32) -> ()` |
| 261 | `X0FN.aA06` | func | `(i32 i32 i32) -> ()` |
| 262 | `X0FN.UI41` | func | `(i32 i32) -> ()` |
| 263 | `X0FN.rjtm` | func | `(i32 i32) -> ()` |
| 264 | `X0FN.CweX` | func | `(i32 i32) -> ()` |
| 265 | `X0FN.p1K0` | func | `(i32 i32) -> ()` |
| 266 | `X0FN.Q6je` | func | `(i32 f32) -> ()` |
| 267 | `X0FN.dV21` | func | `(i32 f32) -> ()` |
| 268 | `X0FN.eFQj` | func | `(i32 i32) -> ()` |
| 269 | `X0FN.NAsp` | func | `(i32 i32) -> ()` |
| 270 | `X0FN.ucgd` | func | `(i32 i32) -> ()` |
| 271 | `X0FN.Bbnn` | func | `(i32 i32) -> ()` |
| 272 | `X0FN.NRhN` | func | `(i32 i32) -> ()` |
| 273 | `X0FN.ZTu6` | func | `(i32 i32) -> ()` |
| 274 | `X0FN.e0kH` | func | `(i32 i32) -> ()` |
| 275 | `X0FN.Vfec` | func | `(i32 i32) -> ()` |
| 276 | `X0FN.WiyQ` | func | `(i32 i32) -> ()` |
| 277 | `X0FN.l512` | func | `(i32 i32) -> ()` |
| 278 | `X0FN.TbcI` | func | `(i32 i32) -> ()` |
| 279 | `X0FN.oZOt` | func | `(i32 i32) -> ()` |
| 280 | `X0FN.uyS6` | func | `(i32 i32) -> ()` |
| 281 | `X0FN.HNy1` | func | `(i32 i32) -> ()` |
| 282 | `X0FN.gBxT` | func | `(i32 i32) -> ()` |
| 283 | `X0FN.cSq6` | func | `(i32 i32) -> ()` |
| 284 | `X0FN.Do77` | func | `(i32 i32) -> ()` |
| 285 | `X0FN.Vo0c` | func | `(i32 i32) -> ()` |
| 286 | `X0FN.Q1Kf` | func | `(i32 i32 i32) -> ()` |
| 287 | `X0FN.z2U4` | func | `(i32 i32 i32) -> ()` |
| 288 | `X0FN.JKDh` | func | `(i32 i32) -> ()` |
| 289 | `X0FN.Aw42` | func | `(i32 i32) -> ()` |
| 290 | `X0FN.LA9m` | func | `(i32 i32) -> ()` |
| 291 | `X0FN.Ve3B` | func | `(i32 i32) -> ()` |
| 292 | `X0FN.JSTB` | func | `(i32 i32) -> ()` |
| 293 | `X0FN.tLTF` | func | `(i32 i32) -> ()` |
| 294 | `X0FN.COva` | func | `(i32 i32) -> ()` |
| 295 | `X0FN.brZ7` | func | `(i32 i32) -> ()` |
| 296 | `X0FN.X0Hn` | func | `(i32 i32) -> ()` |
| 297 | `X0FN.DlJT` | func | `(i32 i32) -> ()` |
| 298 | `X0FN.pEHE` | func | `(i32 i32) -> ()` |
| 299 | `X0FN.VHIT` | func | `(i32 i32) -> (i32)` |
| 300 | `X0FN.OsOG` | func | `(i32 i32) -> ()` |
| 301 | `X0FN.tfrJ` | func | `(i32 i32 i32) -> ()` |
| 302 | `X0FN.o5TU` | func | `(i32 i32) -> ()` |
| 303 | `X0FN.Or0V` | func | `(i32 i32) -> ()` |
| 304 | `X0FN.iJVG` | func | `(i32 i32) -> ()` |
| 305 | `X0FN.Qv9d` | func | `(i32 i32 i32) -> ()` |
| 306 | `X0FN.SuWw` | func | `(i32 i32) -> (i32)` |
| 307 | `X0FN.QLmI` | func | `(i32 i32 i32) -> ()` |
| 308 | `X0FN.qRII` | func | `(i32 i32 i32) -> ()` |
| 309 | `X0FN.alvn` | func | `(i32 i32) -> ()` |
| 310 | `X0FN.GeFu` | func | `(i32 i32) -> ()` |
| 311 | `X0FN.uxyk` | func | `(i32 i32) -> ()` |
| 312 | `X0FN.Ws9b` | func | `(i32 i32) -> ()` |
| 313 | `X0FN.sUux` | func | `(i32 i32) -> (i32)` |
| 314 | `X0FN.Zb5B` | func | `(i32) -> (i32)` |
| 315 | `X0FN.iiuN` | func | `(i32) -> (i32)` |
| 316 | `X0FN.vAaT` | func | `(i32) -> (i32)` |
| 317 | `X0FN.JnW8` | func | `(i32) -> (i32)` |
| 318 | `X0FN.mk7X` | func | `(i32) -> (i32)` |
| 319 | `X0FN.uiS8` | func | `(i32) -> (i32)` |
| 320 | `X0FN.xsAo` | func | `(i32) -> (i32)` |
| 321 | `X0FN.h4ld` | func | `(i32) -> (i32)` |
| 322 | `X0FN.fN3x` | func | `(i32) -> (i32)` |
| 323 | `X0FN.yMH4` | func | `(i32) -> (i32)` |
| 324 | `X0FN.XQRE` | func | `(i32) -> (i32)` |
| 325 | `X0FN.UheS` | func | `(i32) -> (i32)` |
| 326 | `X0FN.i8mr` | func | `(i32) -> (i32)` |
| 327 | `X0FN.fks1` | func | `(i32) -> (i32)` |
| 328 | `X0FN.ZtHA` | func | `(i32) -> (f64)` |
| 329 | `X0FN.F6HT` | func | `(i32) -> (f64)` |
| 330 | `X0FN.P94p` | func | `(i32) -> (i32)` |
| 331 | `X0FN.KY91` | func | `(i32) -> (f64)` |
| 332 | `X0FN.pIFq` | func | `(i32) -> (i32)` |
| 333 | `X0FN.imEb` | func | `(i32) -> (i32)` |
| 334 | `X0FN.k6HM` | func | `(i32) -> (i32)` |
| 335 | `X0FN.rCSg` | func | `(i32) -> (i32)` |
| 336 | `X0FN.o42e` | func | `(i32) -> (i32)` |
| 337 | `X0FN.T6FS` | func | `(i32) -> (i32)` |
| 338 | `X0FN.Zp7o` | func | `(i32) -> (i32)` |
| 339 | `X0FN.O5Pf` | func | `(i32) -> (i32)` |
| 340 | `X0FN.sZuj` | func | `(i32) -> (i32)` |
| 341 | `X0FN.Ahr7` | func | `(i32) -> (i32)` |
| 342 | `X0FN.gfnM` | func | `(i32) -> (i32)` |
| 343 | `X0FN.UcVw` | func | `(i32) -> (i32)` |
| 344 | `X0FN.eS0O` | func | `(i32) -> (i32)` |
| 345 | `X0FN.ABh5` | func | `(i32 i32 i32) -> (i32)` |
| 346 | `X0FN.kUPE` | func | `() -> (i32)` |
| 347 | `X0FN.apS9` | func | `(i32 i32) -> ()` |
| 348 | `X0FN.toFg` | func | `(i32 i32 i32) -> ()` |
| 349 | `X0FN.MIZa` | func | `(i32 i32 i32) -> ()` |
| 350 | `X0FN.tiSs` | func | `(i32 i32) -> (i32)` |
| 351 | `X0FN.HGc9` | func | `(i32) -> (i32)` |
| 352 | `X0FN.xKnn` | func | `(i32 i32 i32) -> (i32)` |
| 353 | `X0FN.XTUW` | func | `(i32) -> ()` |
| 354 | `X0FN.s5X7` | func | `(i32) -> (i32)` |
| 355 | `X0FN.dSkq` | func | `(i32 i32) -> ()` |
| 356 | `X0FN.zqCS` | func | `(i32) -> (i32)` |
| 357 | `X0FN.VeRF` | func | `(i32) -> (i32)` |
| 358 | `X0FN.tsIr` | func | `(i32) -> (i32)` |
| 359 | `X0FN.Tl5m` | func | `(i32) -> (i32)` |
| 360 | `X0FN.SHqR` | func | `(i32) -> (i32)` |
| 361 | `X0FN.PNjM` | func | `(i32 i32) -> ()` |
| 362 | `X0FN.SIrF` | func | `(i32 i32) -> ()` |
| 363 | `X0FN.b0Ic` | func | `(i32 i32) -> ()` |
| 364 | `X0FN.WibS` | func | `(i32 i32) -> ()` |
| 365 | `X0FN.iDud` | func | `(i32 i32) -> ()` |
| 366 | `X0FN.Q3Xi` | func | `(i32 i32) -> ()` |
| 367 | `X0FN.EN1h` | func | `(i32 i32) -> ()` |
| 368 | `X0FN.k1Ni` | func | `(i32 i32 i32) -> ()` |
| 369 | `X0FN.zZlG` | func | `(i32 i32) -> ()` |
| 370 | `X0FN.Bo1Q` | func | `(i32 i32) -> (i32)` |
| 371 | `X0FN.rSOs` | func | `(i32) -> (i32)` |
| 372 | `X0FN.xGY0` | func | `(i32) -> (i32)` |
| 373 | `X0FN.fsXw` | func | `(i32 i32) -> ()` |
| 374 | `X0FN.h7dP` | func | `(i32) -> (i32)` |
| 375 | `X0FN.uFmE` | func | `(i32 f64 f64) -> (i32)` |
| 376 | `X0FN.QMeb` | func | `(i32 i32 i32) -> (i32)` |
| 377 | `X0FN.S9Tk` | func | `(i32 i32) -> ()` |
| 378 | `X0FN.QEjz` | func | `(i32) -> (i32)` |
| 379 | `X0FN.yjWb` | func | `(i32) -> (i32)` |
| 380 | `X0FN.xrE5` | func | `(i32) -> (i32)` |
| 381 | `X0FN.iQQO` | func | `(i32) -> (i32)` |
| 382 | `X0FN.IhDw` | func | `(i32) -> (i32)` |
| 383 | `X0FN.VSxn` | func | `(i32) -> (i32)` |
| 384 | `X0FN.qn16` | func | `(i32 i32) -> ()` |
| 385 | `X0FN.pkgg` | func | `(i32 i32) -> (i32)` |
| 386 | `X0FN.xDdv` | func | `(i32 i32) -> (i32)` |
| 387 | `X0FN.Qlar` | func | `(i32 i32) -> (i32)` |
| 388 | `X0FN.yD9J` | func | `(i32 i32) -> (i32)` |
| 389 | `X0FN.KnOs` | func | `(i32 i32) -> (i32)` |
| 390 | `X0FN.e0X4` | func | `(i32 i32) -> (i32)` |
| 391 | `X0FN.Mn1h` | func | `(f64) -> (i32)` |
| 392 | `X0FN.bnDQ` | func | `(i32 i32) -> (i32)` |
| 393 | `X0FN.i2nt` | func | `(i32 i32) -> (i32)` |

## Exports

170 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `M8B8` | func | 3213 | `(i32) -> (i32 i32)` |
| `N9zR` | func | 1384 | `(i32 i32 i32) -> ()` |
| `kTjt` | func | 2292 | `(i32 i32) -> (i32)` |
| `RQwh` | func | 2133 | `(i32 i32) -> ()` |
| `szZw` | func | 809 | `(i32 i32) -> (i32)` |
| `bH3L` | func | 1379 | `(i32 i32 i32) -> (i32)` |
| `y6Pr` | func | 2977 | `(i32) -> (i32)` |
| `V9mD` | func | 2636 | `(i32) -> (i32)` |
| `Ug45` | func | 1559 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `UirJ` | func | 2638 | `(i32) -> (i32)` |
| `vSe1` | func | 2033 | `(i32) -> ()` |
| `IK4K` | func | 3322 | `(i32 i32 i32) -> ()` |
| `tH7F` | func | 3160 | `(i32 i32) -> (i32)` |
| `wyk7` | func | 3333 | `() -> ()` |
| `r5jt` | func | 2533 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `OSYm` | func | 2634 | `(i32) -> (i32)` |
| `qPGV` | func | 842 | `(i32 i32 i32 i32) -> (i32)` |
| `pRgT` | func | 3199 | `(i32 i32) -> (i32 i32)` |
| `RqCG` | func | 3401 | `(f64) -> (f64)` |
| `drEZ` | func | 1405 | `(i32) -> (i32)` |
| `R3qt` | func | 2097 | `(i32) -> (i32)` |
| `kKsQ` | func | 1569 | `(i32) -> (i32)` |
| `dnQk` | func | 1955 | `() -> (i32)` |
| `TOjc` | func | 3331 | `(i32) -> ()` |
| `fVBr` | func | 2700 | `(i32 i32) -> ()` |
| `ZA4s` | func | 2404 | `(i32 i32) -> ()` |
| `WWCM` | func | 2615 | `(i32) -> (i32)` |
| `hbza` | func | 2160 | `(i32 f64) -> (i32)` |
| `TZVv` | func | 3263 | `(i32 i32 i32) -> (i32)` |
| `xx03` | func | 2836 | `(i32 i32) -> ()` |
| `iWA0` | func | 2670 | `(i32) -> (i32)` |
| `rdPU` | func | 2079 | `(i32) -> (i32)` |
| `AB3w` | func | 3265 | `(i32 i32 i32) -> ()` |
| `gQvA` | func | 1010 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `neTG` | func | 3211 | `(i32) -> (i32 i32)` |
| `hCXZ` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `r8P9` | func | 2660 | `(i32) -> (i32)` |
| `gI6G` | func | 2488 | `(i32 i32) -> (i32)` |
| `gqxG` | func | 1652 | `(i32 i32) -> (i32)` |
| `lHz7` | func | 1962 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `odFo` | func | 2950 | `(i32) -> (i32)` |
| `Dsx6` | func | 2565 | `(i32) -> (i32)` |
| `Kl0k` | func | 848 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Gv5V` | func | 2653 | `(i32 i32) -> ()` |
| `EKjo` | func | 2001 | `(i32 i32 f64 f64 f64) -> ()` |
| `Dfar` | func | 2487 | `(i32 i32) -> (i32)` |
| `Zy6m` | func | 3214 | `(i32) -> (i32 i32)` |
| `jTQF` | func | 3382 | `(i32) -> ()` |
| `TUls` | func | 1608 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `QJhy` | func | 2194 | `(i32 i32) -> ()` |
| `B3Vm` | func | 1615 | `(i32) -> (i32)` |
| `scDp` | func | 2432 | `(i32 i32) -> ()` |
| `KwtZ` | func | 3203 | `(i32 i32) -> (i32 i32)` |
| `xSsu` | func | 988 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `uvcz` | func | 3216 | `(i32) -> (i32 i32)` |
| `NmLG` | func | 3204 | `(i32 i32) -> (i32 i32)` |
| `zdaE` | func | 1874 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `BF6C` | func | 2177 | `(i32 f64 f64 f64) -> (i32)` |
| `w5XJ` | func | 2218 | `(i32 i32) -> (i32)` |
| `wKgI` | func | 2637 | `(i32) -> (i32)` |
| `Z4vr` | func | 1229 | `(i32 i32) -> (i32)` |
| `AGgK` | func | 1022 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `c8Xf` | func | 3190 | `(i32 i32 i32) -> (i32 i32)` |
| `NzLY` | func | 862 | `(i32 i32 i32) -> (i32)` |
| `nzw2` | func | 3200 | `(i32 i32) -> (i32 i32)` |
| `zmau` | func | 1945 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `av9q` | func | 1506 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `NteP` | func | 2018 | `(i32 i32) -> (i32)` |
| `uqus` | func | 1727 | `(i32 i32) -> ()` |
| `GKAK` | func | 2629 | `(i32) -> (i32)` |
| `n8t8` | func | 2331 | `(i32 i32) -> (i32)` |
| `Eofn` | func | 1685 | `(i32 i32 i32 i32) -> (i32)` |
| `cIgA` | func | 713 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `DSwk` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `UoRB` | func | 2988 | `(i32) -> ()` |
| `WXwX` | global | 1 | `` |
| `L5Zz` | func | 3254 | `(i32 i32 i32 i32) -> ()` |
| `JmpE` | func | 1653 | `(i32 i32) -> (i32)` |
| `KCfP` | func | 3167 | `(i32 i32 i32 i32) -> (i32)` |
| `CuQY` | func | 2583 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `Yg7x` | func | 3202 | `(i32 i32) -> (i32 i32)` |
| `NaTb` | func | 1288 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `D6yj` | func | 1769 | `(i32 i32 i32 i32) -> (i32)` |
| `RAbC` | func | 671 | `(i32 i32 i32) -> (i32)` |
| `R3Su` | func | 2662 | `(i32 i32) -> (i32)` |
| `aCJo` | func | 768 | `(i32 i32) -> (i32)` |
| `OyMT` | func | 1438 | `(i32) -> ()` |
| `o2Vz` | func | 2485 | `(i32 i32) -> (i32)` |
| `bW3O` | func | 2754 | `(i32 i32) -> ()` |
| `prbo` | func | 1455 | `(i32 i32 i32) -> (i32)` |
| `MprW` | func | 2633 | `(i32) -> (i32)` |
| `rrwp` | func | 2669 | `(i32) -> (i32)` |
| `XCVw` | func | 1508 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `auwk` | func | 2405 | `(i32 f64) -> (i32)` |
| `imPy` | func | 2651 | `(i32) -> (i32)` |
| `L7Ip` | func | 1655 | `(i32 f64) -> (f64)` |
| `THz6` | func | 2099 | `(i32 i32 i32 i32) -> ()` |
| `zxm3` | func | 1978 | `(i32 i32 i32 i32) -> (i32)` |
| `VuTB` | func | 2025 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `iRzI` | func | 1230 | `(i32 i32) -> ()` |
| `LuMy` | func | 3201 | `(i32 i32) -> (i32 i32)` |
| `xaKp` | func | 2720 | `() -> (i32)` |
| `RwJK` | func | 3230 | `() -> (i32 i32)` |
| `zDDx` | func | 1413 | `(i32 i32) -> (i32)` |
| `wzcV` | func | 3140 | `() -> ()` |
| `EJX3` | func | 2735 | `(i32) -> ()` |
| `r7O2` | func | 1507 | `(i32 f64 f64) -> (i32)` |
| `fbgQ` | func | 3198 | `(i32 i32) -> (i32 i32)` |
| `q0uz` | func | 3228 | `() -> (i32 i32)` |
| `mzj0` | func | 2671 | `(i32) -> (i32)` |
| `qFwi` | func | 2630 | `(i32) -> (i32)` |
| `n0Kl` | func | 2007 | `(i32 i32) -> ()` |
| `lEY4` | func | 2538 | `(i32 i32 i32 i32) -> (i32)` |
| `x0As` | func | 1636 | `(i32 i32) -> (i32)` |
| `Qrtc` | func | 1893 | `(i32 i32) -> (i32)` |
| `O3Ch` | func | 2614 | `(i32 i32) -> ()` |
| `oiFe` | func | 1623 | `(i32 i32) -> (i32)` |
| `pAUm` | func | 989 | `(i32 i32) -> (i32)` |
| `wlS6` | func | 3212 | `(i32) -> (i32 i32)` |
| `kM6t` | func | 1795 | `(i32) -> ()` |
| `sosk` | func | 1566 | `() -> (i32)` |
| `itod` | func | 1442 | `(i32 i32) -> (i32)` |
| `FAmK` | func | 3377 | `() -> (f64)` |
| `UUCh` | func | 1731 | `(i32 f64 f64 f64) -> (i32)` |
| `pJIB` | func | 2654 | `(i32) -> (i32)` |
| `J8ON` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `k1Jk` | func | 2661 | `(i32 i32) -> (i32)` |
| `OUhg` | func | 2942 | `(i32) -> (i32)` |
| `tqBg` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `kCcu` | func | 3229 | `() -> (i32 i32)` |
| `Hyo3` | func | 3416 | `(i32) -> ()` |
| `lUjE` | func | 2652 | `(i32) -> (i32)` |
| `InoG` | func | 2486 | `(i32 i32) -> (i32)` |
| `Vayv` | func | 3012 | `(i32) -> (i32)` |
| `DfDf` | func | 3406 | `() -> (i32)` |
| `Ffy4` | func | 3381 | `(i32) -> (i32)` |
| `Cz2b` | func | 785 | `(i32 i32) -> (i32)` |
| `DVCQ` | func | 2635 | `(i32) -> ()` |
| `sR2Q` | func | 2647 | `(i32 i32) -> ()` |
| `EoRV` | func | 3405 | `() -> (i32)` |
| `V0IP` | func | 1532 | `(i32 i32) -> (i32)` |
| `HczD` | func | 845 | `(i32) -> (i32)` |
| `aVmn` | func | 2822 | `(i32 i32) -> ()` |
| `q26r` | func | 2522 | `(i32 i32) -> (i32)` |
| `hV60` | func | 3173 | `(i32 i32) -> ()` |
| `uxcQ` | func | 2631 | `(i32) -> (i32)` |
| `OsZg` | global | 2 | `` |
| `jmYV` | func | 1880 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `CUjN` | func | 1665 | `(i32 i32 i32) -> (i32)` |
| `dj6B` | func | 1833 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `yrMC` | func | 779 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `cz5e` | func | 1716 | `(i32 i32) -> (i32)` |
| `ToZj` | func | 1614 | `(i32 i32 i32 i32) -> (i32)` |
| `XHFn` | func | 1856 | `(i32) -> (i32)` |
| `mOqz` | func | 3215 | `(i32) -> (i32 i32)` |
| `krTL` | func | 1329 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `OTRN` | func | 2628 | `(i32) -> (f64)` |
| `a0Er` | func | 2966 | `(i32) -> (i32)` |
| `dEm2` | func | 2632 | `(i32) -> (i32)` |
| `y8Oy` | func | 2353 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `PoKN` | func | 2465 | `(i32 i32 i32 i32) -> ()` |
| `T26I` | func | 1360 | `(i32 i32) -> (i32)` |
| `VGgb` | func | 1330 | `(i32 i32 i32 i32) -> (i32)` |
| `o3qC` | func | 1336 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `N1Ow` | func | 951 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `z8Js` | func | 2719 | `(i32) -> ()` |
| `bUNE` | func | 1589 | `(i32 i32 i32 i32) -> ()` |
| `VOkR` | func | 3292 | `() -> (i32)` |
| `XDSu` | func | 2755 | `() -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 845 · max 845
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2257920, `i32` = i32.const 2258484

## Functions

- 3,025 bodies · 4,142,840 code bytes · avg 1.3 KB
- instruction scan: 3,025 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 170 |
| <= 64 bytes | 113 |
| <= 128 bytes | 277 |
| <= 256 bytes | 399 |
| <= 512 bytes | 687 |
| <= 1024 bytes | 606 |
| <= 2048 bytes | 429 |
| <= 4096 bytes | 184 |
| <= 8192 bytes | 97 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 36 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 150 | 117,778 | 56,609 | local.get×16100, i32.const×6734, i32.add×3268, local.set×3248, i32.load×3016 |
| 1 | `(i32 i32 i32 i32) -> ()` | 218 | 195,037 | 88,336 | local.get×25973, i32.const×9814, i32.load×5552, local.set×4795, local.tee×4566 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,258 | 25,605 | local.get×7564, i32.const×3391, local.set×1401, i32.add×1293, i32.load×1168 |
| 3 | `(i32 i32) -> ()` | 105 | 36,615 | 16,581 | local.get×4597, i32.const×1665, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,792 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32 i32) -> ()` | 66 | 30,661 | 13,617 | local.get×3991, i32.const×1839, i32.load×847, i32.add×623, local.tee×591 |
| 6 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32 i32) -> ()` | 170 | 23,746 | 11,210 | local.get×3269, i32.const×1369, local.set×657, br_if×494, i32.load×485 |
| 9 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,393 | 12,764 | local.get×3784, i32.const×1615, local.set×985, i32.add×682, i32.load×663 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 18 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 106 | 20,589 | 7,881 | local.get×2959, i32.const×902, i64.store×835, i32.store×633, i64.const×483 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,318 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 26 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,818 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 43 | `(i32 i32 i32 i32 i32) -> ()` | 82 | 27,582 | 12,950 | local.get×3686, i32.const×1878, i32.add×765, local.set×717, end×580 |
| 66 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 200 | `(i32 i32) -> ()` | 10 | 30,134 | 14,535 | local.get×5127, i32.load×1394, i32.const×1130, end×911, i32.add×829 |
| 220 | `(i32) -> ()` | 19 | 23,308 | 10,931 | local.get×2739, i32.load×1499, i32.const×1189, local.tee×1013, end×857 |
| 730 | `(i32 i32) -> ()` | 139 | 42,975 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 731 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1046 | `(i32 i32) -> (i32)` | 40 | 20,198 | 7,815 | local.get×2521, i32.const×859, i64.store×586, i32.load×393, local.set×358 |
| 1624 | `(i32 i32) -> (i32)` | 182 | 55,135 | 19,838 | local.get×6600, i32.const×2596, i64.store×1935, i64.const×1087, i64.load×1068 |
| 2030 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2682 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2973 | `(i32 i32 i32 i32) -> ()` | 137 | 31,379 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2992 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
ue:keydownkeyupmousedownmouseuptouchstarttouchendMouse1Mouse2Mouse3Alt+Left ClickF2F4F5F8F9Digit0Digit1Digit2Digit3Digit4Digit5Digit6Digit7Digit8Digit9KeyQKeyWKeyEKeyRKeyTKeyYKeyUKeyIKeyOKeyPKeyAKeySK
fs_mesh_0040d000053_l7fs_mesh_0040d040073_l3fs_mesh_0040d040073_l7fs_mesh_0040d0b0053_l1fs_mesh_0040d0b0073_l1fs_mesh_0042d040072_l3fs_mesh_0044b0b0073fs_mesh_0044d000053_l3fs_mesh_0044d000053_l7fs_me
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
r8unormr8snormr8uintr8sintr16unormr16snormr16uintr16sintr16floatrg8unormrg8snormrg8uintrg8sintr32uintr32sintr32floatrg16unormrg16snormrg16uintrg16sintrg16floatrgba8unormrgba8unorm-srgbrgba8snormrgba8u
schema023canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshow
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
maxTextureDimension1DmaxTextureDimension2DmaxTextureDimension3DmaxTextureArrayLayersmaxBindGroupsmaxBindGroupsPlusVertexBuffersmaxBindingsPerBindGroupmaxDynamicUniformBuffersPerPipelineLayoutmaxDynami
flag testalpha * baseColor.abaseColor.adiffuseBase.remissiveColormix(diffuseBase.r, 0.0, texels.stripGlow)mix(emissiveColor, vec3f(1.0), texels.stripGlow)bloxdSpGlintTier(v.vEnchantHsvAndTick.xyz)ench
R8UnormR8SnormR8UintR8SintR16UintR16SintR16UnormR16SnormR16FloatRg8UnormRg8SnormRg8UintRg8SintR32UintR32SintR32FloatRg16UintRg16SintRg16UnormRg16SnormRg16FloatRgba8UnormRgba8UnormSrgbRgba8SnormRgba8Ui
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 554,136 |
| `i32.const` | 232,929 |
| `local.tee` | 101,816 |
| `local.set` | 96,628 |
| `i32.load` | 95,577 |
| `i32.add` | 89,145 |
| `end` | 81,079 |
| `br_if` | 65,304 |
| `i32.store` | 47,910 |
| `block` | 38,038 |
| `i64.store` | 33,701 |
| `i64.const` | 32,914 |
| `if` | 31,075 |
| `call` | 30,902 |
| `i64.load` | 24,933 |
| `i32.sub` | 24,708 |
| `br` | 23,650 |
| `i32.eqz` | 19,516 |
| `select` | 17,179 |
| `i32.and` | 16,537 |
| `i32.shl` | 16,500 |
| `i32.ne` | 16,149 |
| `i32.load8_u` | 15,732 |
| `i32.eq` | 14,050 |
| `i32.store8` | 13,661 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 3,025/3,025 (degraded: 0)
