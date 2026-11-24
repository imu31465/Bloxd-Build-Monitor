# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `7zvlu.7df130a9` · analyzed 2026-11-25T05:21:35+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.2736cd4b8c19e3c3cb9f.wasm
> 5,136,608 bytes (4.9 MB) · sha256 `1d41e428ff1a8bf8…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `e0186f53df5959d3.12282` → `42a5b6e4963e54f8.12282` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,949 / 393 |
| Exports / imports | 160 / 394 |
| Code bytes (function bodies) | 4,050,219 (3.9 MB) |
| Total local variables | 30,809 |
| Instructions (scanable bodies) | 1,894,907 |
| Data segments / bytes | 3,546 / 1,040,009 |
| Element segments / entries | 1 / 837 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `42a5b6e4963e54f8.12282` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,518 | 177 |
| 2 | import | 4,734 | 394 |
| 3 | function | 3,000 | 2949 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,681 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,055,596 | 2949 |
| 11 | data | 1,068,694 | 3546 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `rG7t.GVJ2` | memory | `[128..14648]` |
| 0 | `rG7t.iO4W` | func | `(i32) -> (i32)` |
| 1 | `rG7t.o75o` | func | `(i32) -> (f64)` |
| 2 | `rG7t.SiKN` | func | `() -> (i32)` |
| 3 | `rG7t.RoJA` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `rG7t.mdYO` | func | `(i32) -> ()` |
| 5 | `rG7t.fhhC` | func | `(i32 i32) -> (i32)` |
| 6 | `rG7t.uBpy` | func | `(i32) -> (i32)` |
| 7 | `rG7t.kmET` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `rG7t.DQYw` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `rG7t.ZwiL` | func | `(i32) -> (i32)` |
| 10 | `rG7t.xpO4` | func | `(i32 i32) -> ()` |
| 11 | `rG7t.cs33` | func | `(i32 i32) -> ()` |
| 12 | `rG7t.wITF` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `rG7t.PsFM` | func | `(i32 i32) -> (i32)` |
| 14 | `rG7t.P6ho` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `rG7t.BTtm` | func | `(i32) -> (i32)` |
| 16 | `rG7t.YCMe` | func | `(i32 i32) -> (i32)` |
| 17 | `rG7t.lKBP` | func | `(i32 i32) -> (i32)` |
| 18 | `rG7t.vaJZ` | func | `(i32 i32) -> ()` |
| 19 | `rG7t.qg8M` | func | `(i32) -> (i32)` |
| 20 | `rG7t.xy8e` | func | `(i32) -> (i32)` |
| 21 | `rG7t.odgW` | func | `(i32 i32 i32) -> ()` |
| 22 | `rG7t.jjSK` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `rG7t.V1VX` | func | `(i32) -> (i32)` |
| 24 | `rG7t.naeU` | func | `(i32) -> (i32)` |
| 25 | `rG7t.w2KL` | func | `(i32 i32) -> ()` |
| 26 | `rG7t.BATb` | func | `(i32 i32) -> (i32)` |
| 27 | `rG7t.XUiY` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `rG7t.ZjKM` | func | `(i32) -> (i32)` |
| 29 | `rG7t.iuOg` | func | `(i32) -> (i32)` |
| 30 | `rG7t.X3ss` | func | `(i32) -> (i32)` |
| 31 | `rG7t.eTuj` | func | `(i32) -> (i32)` |
| 32 | `rG7t.HyKj` | func | `(i32) -> (i32)` |
| 33 | `rG7t.KIkg` | func | `(i32 i32 i32) -> ()` |
| 34 | `rG7t.G5RE` | func | `(i32 i32) -> (i32)` |
| 35 | `rG7t.oRBD` | func | `(i32) -> (i32)` |
| 36 | `rG7t.TezI` | func | `(i32) -> ()` |
| 37 | `rG7t.fJj2` | func | `(i32) -> (i32)` |
| 38 | `rG7t.e8Qm` | func | `(i32) -> (i32)` |
| 39 | `rG7t.E1Ig` | func | `(i32) -> ()` |
| 40 | `rG7t.jKLv` | func | `(i32 i32) -> (i32)` |
| 41 | `rG7t.cdlG` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `rG7t.Q8Dt` | func | `(i32) -> ()` |
| 43 | `rG7t.h1S0` | func | `(i32 i32) -> ()` |
| 44 | `rG7t.LZgO` | func | `() -> (i32)` |
| 45 | `rG7t.QH4e` | func | `(i32 i32) -> (i32)` |
| 46 | `rG7t.BELX` | func | `(i32 i32) -> (i32)` |
| 47 | `rG7t.zY7L` | func | `(i32) -> (i32)` |
| 48 | `rG7t.Oybe` | func | `(i32) -> (i32)` |
| 49 | `rG7t.ZMGL` | func | `(i32) -> (i32)` |
| 50 | `rG7t.SSL0` | func | `(i32 i32) -> ()` |
| 51 | `rG7t.iAsj` | func | `(i32) -> (i32)` |
| 52 | `rG7t.ZaYy` | func | `(i32) -> ()` |
| 53 | `rG7t.ZpHX` | func | `(i32 i32) -> (i32)` |
| 54 | `rG7t.lXzU` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `rG7t.fmds` | func | `(i32) -> (i32)` |
| 56 | `rG7t.xVTa` | func | `(i32 i32 i32) -> ()` |
| 57 | `rG7t.J5c1` | func | `(i32 i32) -> ()` |
| 58 | `rG7t.QTDE` | func | `(i32) -> (i32)` |
| 59 | `rG7t.lHg4` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `rG7t.lOnf` | func | `(i32) -> ()` |
| 61 | `rG7t.YvHK` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `rG7t.x2DT` | func | `(i32) -> ()` |
| 63 | `rG7t.CNFn` | func | `(i32 i32 i32) -> ()` |
| 64 | `rG7t.h7X1` | func | `(i32 i32) -> ()` |
| 65 | `rG7t.tSCF` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `rG7t.GC2y` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `rG7t.vAkD` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `rG7t.yl9i` | func | `(i32 i32 f64) -> ()` |
| 69 | `rG7t.rgbI` | func | `(i32) -> (i32)` |
| 70 | `rG7t.pmev` | func | `(i32 i32) -> ()` |
| 71 | `rG7t.WRwA` | func | `(i32 i32 i32) -> ()` |
| 72 | `rG7t.qZQt` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `rG7t.POCW` | func | `(i32 i32 i32) -> ()` |
| 74 | `rG7t.Qvbz` | func | `(i32) -> ()` |
| 75 | `rG7t.gX3P` | func | `(i32 i32) -> ()` |
| 76 | `rG7t.BgqQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `rG7t.bZXs` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `rG7t.fkZe` | func | `(i32 i32 i32) -> ()` |
| 79 | `rG7t.PsJw` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `rG7t.uttq` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `rG7t.wxXG` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `rG7t.jKyt` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `rG7t.Ufjp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `rG7t.TQJK` | func | `(i32 i32 i32) -> ()` |
| 85 | `rG7t.P0G4` | func | `(i32 i32) -> (i32)` |
| 86 | `rG7t.jsCr` | func | `(i32) -> (i32)` |
| 87 | `rG7t.HI3J` | func | `(i32) -> (i32)` |
| 88 | `rG7t.Q7DE` | func | `(i32) -> (i32)` |
| 89 | `rG7t.pEVr` | func | `(i32 i32) -> (i32)` |
| 90 | `rG7t.Mjfk` | func | `(i32) -> ()` |
| 91 | `rG7t.o7U2` | func | `(i32) -> (i32)` |
| 92 | `rG7t.tjzy` | func | `(i32 i32) -> (i32)` |
| 93 | `rG7t.kSBI` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `rG7t.T17h` | func | `(i32 i32 i32) -> ()` |
| 95 | `rG7t.TlIB` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `rG7t.PQ3I` | func | `() -> (f64)` |
| 97 | `rG7t.uIBE` | func | `() -> (f64)` |
| 98 | `rG7t.ve4p` | func | `(i32 i32) -> ()` |
| 99 | `rG7t.xh8Q` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `rG7t.EHYv` | func | `(i32) -> (i32)` |
| 101 | `rG7t.rsJc` | func | `(i32) -> (i32)` |
| 102 | `rG7t.cWo6` | func | `(i32) -> (i32)` |
| 103 | `rG7t.Unmo` | func | `() -> (i32)` |
| 104 | `rG7t.sy4K` | func | `() -> (i32)` |
| 105 | `rG7t.QbJ0` | func | `() -> (i32)` |
| 106 | `rG7t.NgnX` | func | `() -> (i32)` |
| 107 | `rG7t.wgh2` | func | `(i32 i32) -> (i32)` |
| 108 | `rG7t.w8cA` | func | `(i32) -> ()` |
| 109 | `rG7t.yRLj` | func | `(i32 i32) -> (i32)` |
| 110 | `rG7t.IPDw` | func | `(i32) -> (i32)` |
| 111 | `rG7t.mmfV` | func | `() -> (f64)` |
| 112 | `rG7t.pbX8` | func | `(i32) -> (i32)` |
| 113 | `rG7t.cteg` | func | `(i32 i32) -> ()` |
| 114 | `rG7t.uArp` | func | `(i32 i32) -> ()` |
| 115 | `rG7t.NaWI` | func | `(i32 i32) -> ()` |
| 116 | `rG7t.lnS5` | func | `(i32 f32) -> ()` |
| 117 | `rG7t.WeQu` | func | `(i32 f32) -> ()` |
| 118 | `rG7t.eHip` | func | `(i32 i32) -> ()` |
| 119 | `rG7t.Bh1X` | func | `(i32 i32) -> ()` |
| 120 | `rG7t.jw1h` | func | `(i32 i32) -> ()` |
| 121 | `rG7t.QNoV` | func | `(i32 i32) -> ()` |
| 122 | `rG7t.lywe` | func | `(i32 i32 i32) -> ()` |
| 123 | `rG7t.cqh7` | func | `(i32 i32) -> (i32)` |
| 124 | `rG7t.Fjs3` | func | `(i32 i32) -> ()` |
| 125 | `rG7t.YCzO` | func | `(i32 i32) -> ()` |
| 126 | `rG7t.zONc` | func | `(i32 i32) -> ()` |
| 127 | `rG7t.yl49` | func | `(i32 i32) -> ()` |
| 128 | `rG7t.lA1D` | func | `(i32 f64) -> ()` |
| 129 | `rG7t.ZcH5` | func | `(i32 f64) -> ()` |
| 130 | `rG7t.pJrw` | func | `(i32 i32) -> ()` |
| 131 | `rG7t.II6x` | func | `(i32 i32 i32) -> ()` |
| 132 | `rG7t.l1Hn` | func | `(i32 i32) -> ()` |
| 133 | `rG7t.nj8f` | func | `(i32 i32) -> (i32)` |
| 134 | `rG7t.oB6Y` | func | `(i32 i32 i32) -> ()` |
| 135 | `rG7t.r2V0` | func | `(i32 i32 i32) -> ()` |
| 136 | `rG7t.JULR` | func | `(i32 i32) -> (i32)` |
| 137 | `rG7t.EvsJ` | func | `(i32 i32) -> (i32)` |
| 138 | `rG7t.xMVG` | func | `(i32 i32 i32) -> ()` |
| 139 | `rG7t.NTQv` | func | `(i32 i32 i32) -> ()` |
| 140 | `rG7t.UG8L` | func | `(i32 i32) -> (i32)` |
| 141 | `rG7t.Nxj1` | func | `(i32 i32) -> ()` |
| 142 | `rG7t.PrgT` | func | `(i32 i32) -> ()` |
| 143 | `rG7t.zUvA` | func | `(i32 i32) -> ()` |
| 144 | `rG7t.u36K` | func | `(i32 i32) -> ()` |
| 145 | `rG7t.eKFR` | func | `(i32 i32) -> ()` |
| 146 | `rG7t.yv5G` | func | `(i32 i32) -> ()` |
| 147 | `rG7t.QFKu` | func | `(i32 i32) -> ()` |
| 148 | `rG7t.Yj79` | func | `(i32 f64) -> ()` |
| 149 | `rG7t.z1hT` | func | `(i32 i32) -> ()` |
| 150 | `rG7t.u9FX` | func | `(i32 i32) -> ()` |
| 151 | `rG7t.MVnp` | func | `(i32 i32) -> ()` |
| 152 | `rG7t.ZJ2k` | func | `(i32 i32) -> ()` |
| 153 | `rG7t.eB54` | func | `(i32 i32) -> ()` |
| 154 | `rG7t.Xxam` | func | `(i32 i32) -> ()` |
| 155 | `rG7t.oLgN` | func | `(i32 i32) -> ()` |
| 156 | `rG7t.Ykx7` | func | `(i32 i32) -> ()` |
| 157 | `rG7t.Jhvt` | func | `(i32 i32) -> ()` |
| 158 | `rG7t.X9ji` | func | `(i32 i32 i32) -> ()` |
| 159 | `rG7t.UCZS` | func | `(i32 i32 i32) -> ()` |
| 160 | `rG7t.vqyv` | func | `(i32 i32) -> (i32)` |
| 161 | `rG7t.XXKq` | func | `(i32 i32) -> (i32)` |
| 162 | `rG7t.mJOx` | func | `(i32 i32) -> ()` |
| 163 | `rG7t.pCGg` | func | `(i32 i32) -> ()` |
| 164 | `rG7t.Uhbs` | func | `(i32 f64) -> ()` |
| 165 | `rG7t.dDgp` | func | `(i32 i32) -> ()` |
| 166 | `rG7t.CYbx` | func | `(i32 i32) -> ()` |
| 167 | `rG7t.Tkm4` | func | `(i32 i32) -> ()` |
| 168 | `rG7t.EmGp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `rG7t.NoJW` | func | `(i32 f64) -> ()` |
| 170 | `rG7t.ID3B` | func | `(i32 f64) -> ()` |
| 171 | `rG7t.WHy1` | func | `(i32 f64) -> ()` |
| 172 | `rG7t.sH2T` | func | `(i32 f64) -> ()` |
| 173 | `rG7t.tP61` | func | `(i32 i32) -> ()` |
| 174 | `rG7t.OkfO` | func | `(i32 i32) -> ()` |
| 175 | `rG7t.mxp7` | func | `(i32 i32) -> ()` |
| 176 | `rG7t.YjoH` | func | `(i32 i32) -> ()` |
| 177 | `rG7t.ieH6` | func | `(i32 i32) -> ()` |
| 178 | `rG7t.K62g` | func | `(i32 i32 i32) -> ()` |
| 179 | `rG7t.Iu4L` | func | `(i32 i32) -> ()` |
| 180 | `rG7t.Z7u1` | func | `(i32 f32) -> ()` |
| 181 | `rG7t.M4GG` | func | `(i32 i32) -> ()` |
| 182 | `rG7t.NRfK` | func | `(i32 i32) -> ()` |
| 183 | `rG7t.dA2t` | func | `(i32 i32) -> ()` |
| 184 | `rG7t.WB8k` | func | `(i32 i32) -> ()` |
| 185 | `rG7t.q9z0` | func | `(i32 i32) -> ()` |
| 186 | `rG7t.Oc4Y` | func | `(i32 i32) -> ()` |
| 187 | `rG7t.PFMz` | func | `(i32 i32) -> ()` |
| 188 | `rG7t.fKGF` | func | `(i32 i32) -> ()` |
| 189 | `rG7t.zAKO` | func | `(i32 i32) -> ()` |
| 190 | `rG7t.ZqN5` | func | `(i32 i32) -> ()` |
| 191 | `rG7t.d4SR` | func | `(i32 i32) -> ()` |
| 192 | `rG7t.EEgQ` | func | `(i32 i32) -> ()` |
| 193 | `rG7t.N7hO` | func | `(i32 i32) -> (i32)` |
| 194 | `rG7t.UvQx` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `rG7t.h6P3` | func | `(i32 i32) -> ()` |
| 196 | `rG7t.PKYp` | func | `(i32 i32 i32) -> ()` |
| 197 | `rG7t.KOnf` | func | `(i32 i32) -> (i32)` |
| 198 | `rG7t.eYiO` | func | `(i32) -> (i32)` |
| 199 | `rG7t.cgE6` | func | `(i32 i32) -> ()` |
| 200 | `rG7t.hM9b` | func | `(i32 i32) -> ()` |
| 201 | `rG7t.MRlq` | func | `(i32 i32) -> ()` |
| 202 | `rG7t.vPFE` | func | `(i32 i32) -> ()` |
| 203 | `rG7t.qEoo` | func | `(i32 i32) -> ()` |
| 204 | `rG7t.fJVr` | func | `(i32 i32) -> ()` |
| 205 | `rG7t.K4co` | func | `(i32 i32) -> ()` |
| 206 | `rG7t.cB9l` | func | `(i32 i32) -> ()` |
| 207 | `rG7t.ZiRO` | func | `(i32) -> (i32)` |
| 208 | `rG7t.Xffv` | func | `(i32 i32 i32) -> ()` |
| 209 | `rG7t.WDgT` | func | `(i32 i32) -> ()` |
| 210 | `rG7t.mn4v` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `rG7t.Khk8` | func | `(i32 i32) -> ()` |
| 212 | `rG7t.h85E` | func | `(i32) -> ()` |
| 213 | `rG7t.vOlP` | func | `(i32 i32) -> ()` |
| 214 | `rG7t.rnA9` | func | `(i32) -> (i32)` |
| 215 | `rG7t.aLmY` | func | `(i32 i32 i32) -> ()` |
| 216 | `rG7t.AkQw` | func | `(i32 i32) -> ()` |
| 217 | `rG7t.HjBF` | func | `(i32 i32) -> ()` |
| 218 | `rG7t.iPZI` | func | `(i32 i32) -> ()` |
| 219 | `rG7t.gK4a` | func | `(i32 i32) -> ()` |
| 220 | `rG7t.PWrp` | func | `(i32 i32) -> (i32)` |
| 221 | `rG7t.ognr` | func | `(i32 i32) -> ()` |
| 222 | `rG7t.yHDx` | func | `(i32 i32) -> ()` |
| 223 | `rG7t.dyAM` | func | `(i32 i32) -> ()` |
| 224 | `rG7t.GLG5` | func | `(i32 i32) -> ()` |
| 225 | `rG7t.AK2S` | func | `(i32 i32) -> ()` |
| 226 | `rG7t.fkl0` | func | `(i32 i32) -> ()` |
| 227 | `rG7t.o8qt` | func | `(i32 i32) -> ()` |
| 228 | `rG7t.PN6t` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `rG7t.hKpi` | func | `(i32) -> (i32)` |
| 230 | `rG7t.oniR` | func | `(i32) -> ()` |
| 231 | `rG7t.epNp` | func | `(i32 f64) -> ()` |
| 232 | `rG7t.y4rc` | func | `(i32 i32) -> ()` |
| 233 | `rG7t.lhul` | func | `(i32 i32) -> ()` |
| 234 | `rG7t.qDD6` | func | `(i32 i32 i32) -> ()` |
| 235 | `rG7t.Bm9W` | func | `(i32 i32) -> (i32)` |
| 236 | `rG7t.PjwH` | func | `(i32 i32) -> ()` |
| 237 | `rG7t.obyu` | func | `(i32 i32) -> ()` |
| 238 | `rG7t.lo2T` | func | `(i32 i32) -> ()` |
| 239 | `rG7t.MMre` | func | `(i32 i32 i32) -> ()` |
| 240 | `rG7t.a6hU` | func | `(i32 i32) -> ()` |
| 241 | `rG7t.ecDM` | func | `(i32 i32) -> ()` |
| 242 | `rG7t.cEKd` | func | `(i32 i32) -> ()` |
| 243 | `rG7t.hCOo` | func | `(i32 i32 i32) -> ()` |
| 244 | `rG7t.rlSm` | func | `(i32 i32) -> ()` |
| 245 | `rG7t.SDNC` | func | `(i32 i32) -> ()` |
| 246 | `rG7t.b2VV` | func | `(i32 i32 i32) -> ()` |
| 247 | `rG7t.qqbN` | func | `(i32 i32) -> (i32)` |
| 248 | `rG7t.VtOA` | func | `(i32 i32) -> ()` |
| 249 | `rG7t.SAOM` | func | `(i32 i32 i32) -> ()` |
| 250 | `rG7t.ZNXk` | func | `(i32 i32) -> ()` |
| 251 | `rG7t.mlUw` | func | `(i32 f64) -> ()` |
| 252 | `rG7t.D0MX` | func | `(i32 i32) -> ()` |
| 253 | `rG7t.uNwQ` | func | `(i32 f64) -> ()` |
| 254 | `rG7t.VCri` | func | `(i32 i32 i32) -> ()` |
| 255 | `rG7t.C4zB` | func | `(i32 i32) -> ()` |
| 256 | `rG7t.A7Cf` | func | `(i32 i32 i32) -> ()` |
| 257 | `rG7t.rcWl` | func | `(i32 i32) -> ()` |
| 258 | `rG7t.nYvP` | func | `(i32 i32) -> ()` |
| 259 | `rG7t.w5Dv` | func | `(i32 i32) -> ()` |
| 260 | `rG7t.Qpqg` | func | `(i32 i32 i32) -> ()` |
| 261 | `rG7t.j4hE` | func | `(i32 i32) -> ()` |
| 262 | `rG7t.qolz` | func | `(i32 i32) -> ()` |
| 263 | `rG7t.gSj7` | func | `(i32 i32) -> ()` |
| 264 | `rG7t.mlep` | func | `(i32 i32) -> ()` |
| 265 | `rG7t.jg1K` | func | `(i32 f32) -> ()` |
| 266 | `rG7t.p2oj` | func | `(i32 f32) -> ()` |
| 267 | `rG7t.Y7tg` | func | `(i32 i32) -> ()` |
| 268 | `rG7t.Lj6N` | func | `(i32 i32) -> ()` |
| 269 | `rG7t.YCeN` | func | `(i32 i32) -> ()` |
| 270 | `rG7t.ZkYj` | func | `(i32 i32) -> ()` |
| 271 | `rG7t.amEN` | func | `(i32 i32) -> ()` |
| 272 | `rG7t.WHsf` | func | `(i32 i32) -> ()` |
| 273 | `rG7t.dWEI` | func | `(i32 i32) -> ()` |
| 274 | `rG7t.MGiV` | func | `(i32 i32) -> ()` |
| 275 | `rG7t.D3jc` | func | `(i32 i32) -> ()` |
| 276 | `rG7t.eDD3` | func | `(i32 i32) -> ()` |
| 277 | `rG7t.hYlT` | func | `(i32 i32) -> ()` |
| 278 | `rG7t.PIqb` | func | `(i32 i32) -> ()` |
| 279 | `rG7t.Ibov` | func | `(i32 i32) -> ()` |
| 280 | `rG7t.N30w` | func | `(i32 i32) -> ()` |
| 281 | `rG7t.tuLP` | func | `(i32 i32) -> ()` |
| 282 | `rG7t.FfOy` | func | `(i32 i32) -> ()` |
| 283 | `rG7t.Ypue` | func | `(i32 i32) -> ()` |
| 284 | `rG7t.wsd9` | func | `(i32 i32) -> ()` |
| 285 | `rG7t.L9rl` | func | `(i32 i32 i32) -> ()` |
| 286 | `rG7t.Mgrp` | func | `(i32 i32 i32) -> ()` |
| 287 | `rG7t.jwCZ` | func | `(i32 i32) -> ()` |
| 288 | `rG7t.v0IB` | func | `(i32 i32) -> ()` |
| 289 | `rG7t.PBvZ` | func | `(i32 i32) -> ()` |
| 290 | `rG7t.MtkK` | func | `(i32 i32) -> ()` |
| 291 | `rG7t.eAfb` | func | `(i32 i32) -> ()` |
| 292 | `rG7t.pn3X` | func | `(i32 i32) -> ()` |
| 293 | `rG7t.yIsa` | func | `(i32 i32) -> ()` |
| 294 | `rG7t.xc7M` | func | `(i32 i32) -> ()` |
| 295 | `rG7t.FLrv` | func | `(i32 i32) -> ()` |
| 296 | `rG7t.Agf0` | func | `(i32 i32) -> ()` |
| 297 | `rG7t.fygz` | func | `(i32 i32) -> ()` |
| 298 | `rG7t.wRBc` | func | `(i32 i32) -> (i32)` |
| 299 | `rG7t.PWA5` | func | `(i32 i32) -> ()` |
| 300 | `rG7t.hP0b` | func | `(i32 i32 i32) -> ()` |
| 301 | `rG7t.opbR` | func | `(i32 i32) -> ()` |
| 302 | `rG7t.dRNr` | func | `(i32 i32) -> ()` |
| 303 | `rG7t.sPHC` | func | `(i32 i32) -> ()` |
| 304 | `rG7t.Ppwc` | func | `(i32 i32 i32) -> ()` |
| 305 | `rG7t.T19Y` | func | `(i32 i32) -> (i32)` |
| 306 | `rG7t.bHb3` | func | `(i32 i32 i32) -> ()` |
| 307 | `rG7t.ntwX` | func | `(i32 i32 i32) -> ()` |
| 308 | `rG7t.sr6I` | func | `(i32 i32) -> ()` |
| 309 | `rG7t.NGuN` | func | `(i32 i32) -> ()` |
| 310 | `rG7t.toRQ` | func | `(i32 i32) -> ()` |
| 311 | `rG7t.nNlB` | func | `(i32 i32) -> ()` |
| 312 | `rG7t.ta9N` | func | `(i32 i32) -> (i32)` |
| 313 | `rG7t.WX6B` | func | `(i32) -> (i32)` |
| 314 | `rG7t.q91G` | func | `(i32) -> (i32)` |
| 315 | `rG7t.fFCw` | func | `(i32) -> (i32)` |
| 316 | `rG7t.BWEJ` | func | `(i32) -> (i32)` |
| 317 | `rG7t.QqSX` | func | `(i32) -> (i32)` |
| 318 | `rG7t.KMl5` | func | `(i32) -> (i32)` |
| 319 | `rG7t.UsqP` | func | `(i32) -> (i32)` |
| 320 | `rG7t.iEvU` | func | `(i32) -> (i32)` |
| 321 | `rG7t.IJMw` | func | `(i32) -> (i32)` |
| 322 | `rG7t.GqBy` | func | `(i32) -> (i32)` |
| 323 | `rG7t.XSDM` | func | `(i32) -> (i32)` |
| 324 | `rG7t.HyeK` | func | `(i32) -> (i32)` |
| 325 | `rG7t.Xftn` | func | `(i32) -> (i32)` |
| 326 | `rG7t.m1i4` | func | `(i32) -> (i32)` |
| 327 | `rG7t.tsPR` | func | `(i32) -> (f64)` |
| 328 | `rG7t.f6YA` | func | `(i32) -> (f64)` |
| 329 | `rG7t.K5OF` | func | `(i32) -> (i32)` |
| 330 | `rG7t.GYPm` | func | `(i32) -> (f64)` |
| 331 | `rG7t.RGC6` | func | `(i32) -> (i32)` |
| 332 | `rG7t.MFwh` | func | `(i32) -> (i32)` |
| 333 | `rG7t.ulR8` | func | `(i32) -> (i32)` |
| 334 | `rG7t.ZVtI` | func | `(i32) -> (i32)` |
| 335 | `rG7t.evU8` | func | `(i32) -> (i32)` |
| 336 | `rG7t.NTUh` | func | `(i32) -> (i32)` |
| 337 | `rG7t.YlwX` | func | `(i32) -> (i32)` |
| 338 | `rG7t.DrzA` | func | `(i32) -> (i32)` |
| 339 | `rG7t.aNbp` | func | `(i32) -> (i32)` |
| 340 | `rG7t.rUjr` | func | `(i32) -> (i32)` |
| 341 | `rG7t.CNbc` | func | `(i32) -> (i32)` |
| 342 | `rG7t.WPRe` | func | `(i32) -> (i32)` |
| 343 | `rG7t.b9BX` | func | `(i32) -> (i32)` |
| 344 | `rG7t.tQNA` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `rG7t.azUi` | func | `() -> (i32)` |
| 346 | `rG7t.gxOs` | func | `(i32 i32) -> ()` |
| 347 | `rG7t.QMDU` | func | `(i32 i32 i32) -> ()` |
| 348 | `rG7t.std9` | func | `(i32 i32 i32) -> ()` |
| 349 | `rG7t.iLsh` | func | `(i32 i32) -> (i32)` |
| 350 | `rG7t.O0mm` | func | `(i32) -> (i32)` |
| 351 | `rG7t.T1kH` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `rG7t.Bp7v` | func | `(i32) -> ()` |
| 353 | `rG7t.uqUN` | func | `(i32) -> (i32)` |
| 354 | `rG7t.brk2` | func | `(i32 i32) -> ()` |
| 355 | `rG7t.UC4J` | func | `(i32) -> (i32)` |
| 356 | `rG7t.iTIB` | func | `(i32) -> (i32)` |
| 357 | `rG7t.HTj5` | func | `(i32) -> (i32)` |
| 358 | `rG7t.RQc5` | func | `(i32) -> (i32)` |
| 359 | `rG7t.oxOQ` | func | `(i32) -> (i32)` |
| 360 | `rG7t.Yccw` | func | `(i32 i32) -> ()` |
| 361 | `rG7t.Sv0z` | func | `(i32 i32) -> ()` |
| 362 | `rG7t.fc79` | func | `(i32 i32) -> ()` |
| 363 | `rG7t.lMKa` | func | `(i32 i32) -> ()` |
| 364 | `rG7t.MjgQ` | func | `(i32 i32) -> ()` |
| 365 | `rG7t.zZD9` | func | `(i32 i32) -> ()` |
| 366 | `rG7t.s9g1` | func | `(i32 i32) -> ()` |
| 367 | `rG7t.RXqK` | func | `(i32 i32 i32) -> ()` |
| 368 | `rG7t.FgUI` | func | `(i32 i32) -> ()` |
| 369 | `rG7t.DSaV` | func | `(i32 i32) -> (i32)` |
| 370 | `rG7t.CMwa` | func | `(i32) -> (i32)` |
| 371 | `rG7t.TCKL` | func | `(i32) -> (i32)` |
| 372 | `rG7t.o5fl` | func | `(i32 i32) -> ()` |
| 373 | `rG7t.Z6Qz` | func | `(i32) -> (i32)` |
| 374 | `rG7t.aXN8` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `rG7t.Jygc` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `rG7t.SLBe` | func | `(i32 i32) -> ()` |
| 377 | `rG7t.ASj6` | func | `(i32) -> (i32)` |
| 378 | `rG7t.Y3qw` | func | `(i32) -> (i32)` |
| 379 | `rG7t.tb7T` | func | `(i32) -> (i32)` |
| 380 | `rG7t.byYN` | func | `(i32) -> (i32)` |
| 381 | `rG7t.wTfd` | func | `(i32) -> (i32)` |
| 382 | `rG7t.bQPJ` | func | `(i32) -> (i32)` |
| 383 | `rG7t.tddl` | func | `(i32 i32) -> ()` |
| 384 | `rG7t.JAOr` | func | `(i32 i32) -> (i32)` |
| 385 | `rG7t.OW9O` | func | `(i32 i32) -> (i32)` |
| 386 | `rG7t.B2Dv` | func | `(i32 i32) -> (i32)` |
| 387 | `rG7t.jRMF` | func | `(i32 i32) -> (i32)` |
| 388 | `rG7t.VUBf` | func | `(i32 i32) -> (i32)` |
| 389 | `rG7t.vrtb` | func | `(i32 i32) -> (i32)` |
| 390 | `rG7t.bKTg` | func | `(f64) -> (i32)` |
| 391 | `rG7t.SWU5` | func | `(i32 i32) -> (i32)` |
| 392 | `rG7t.XwvV` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `jRCo` | func | 3185 | `(i32 i32 i32) -> (i32)` |
| `sgZW` | func | 659 | `(i32 i32 i32) -> (i32)` |
| `UJJl` | func | 3245 | `(i32 i32 i32) -> ()` |
| `QyOA` | func | 2592 | `(i32) -> (i32)` |
| `IvXG` | func | 2900 | `(i32) -> (i32)` |
| `Xbxb` | func | 2423 | `(i32 i32) -> (i32)` |
| `zAXK` | func | 2561 | `(i32) -> (i32)` |
| `ehsd` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `PJor` | func | 1609 | `(i32 f64) -> (f64)` |
| `oECG` | func | 1593 | `(i32 i32) -> (i32)` |
| `xj91` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `VYMD` | func | 2290 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `TQhq` | func | 1681 | `(i32 i32) -> ()` |
| `MmZd` | func | 2343 | `(i32 f64) -> (i32)` |
| `g5B5` | func | 2565 | `(i32) -> (i32)` |
| `syi6` | func | 2157 | `(i32 i32) -> (i32)` |
| `NCM3` | func | 3134 | `(i32) -> (i32 i32)` |
| `XQ11` | func | 3304 | `(i32) -> (i32)` |
| `GPpZ` | func | 2570 | `(i32) -> (i32)` |
| `zk51` | func | 2593 | `(i32 i32) -> (i32)` |
| `vtXh` | func | 830 | `(i32) -> (i32)` |
| `aIhB` | func | 2104 | `(i32 f64) -> (i32)` |
| `Dm6G` | func | 1957 | `(i32 i32) -> ()` |
| `N3fq` | func | 1466 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `aOUg` | func | 3135 | `(i32) -> (i32 i32)` |
| `whtI` | func | 2560 | `(i32) -> (f64)` |
| `zBR0` | func | 1349 | `(i32 i32 i32) -> ()` |
| `lgen` | func | 3149 | `() -> (i32 i32)` |
| `x6Se` | func | 2471 | `(i32 i32 i32 i32) -> (i32)` |
| `vLwP` | func | 2270 | `(i32 i32) -> (i32)` |
| `xqmK` | func | 3120 | `(i32 i32) -> (i32 i32)` |
| `chlR` | func | 3300 | `() -> (f64)` |
| `ibRB` | func | 1848 | `(i32 i32) -> (i32)` |
| `YHuJ` | func | 1579 | `(i32 i32) -> (i32)` |
| `un5l` | func | 1298 | `(i32 i32 i32 i32) -> (i32)` |
| `Ll8M` | func | 3328 | `() -> (i32)` |
| `JXVk` | func | 2545 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `HLfA` | func | 3122 | `(i32 i32) -> (i32 i32)` |
| `gBqH` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `NWJI` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `XhnY` | func | 1724 | `(i32 i32 i32 i32) -> (i32)` |
| `D5hX` | func | 3150 | `() -> (i32 i32)` |
| `CQ7F` | func | 1403 | `(i32) -> ()` |
| `FX4B` | func | 2119 | `(i32 f64 f64 f64) -> (i32)` |
| `fh0E` | func | 2566 | `(i32) -> (i32)` |
| `aZ7a` | func | 1492 | `(i32 i32) -> (i32)` |
| `c9Uy` | func | 2585 | `(i32 i32) -> ()` |
| `DNA1` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Obl0` | func | 1829 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `xTbn` | func | 2601 | `(i32) -> (i32)` |
| `QlJx` | func | 2421 | `(i32 i32) -> (i32)` |
| `Luk9` | func | 2569 | `(i32) -> (i32)` |
| `jjIM` | func | 2864 | `(i32) -> (i32)` |
| `qESR` | func | 1547 | `(i32 i32 i32 i32) -> ()` |
| `HbTV` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `m9T4` | func | 2564 | `(i32) -> (i32)` |
| `Me81` | func | 3112 | `(i32 i32 i32) -> (i32 i32)` |
| `EOFA` | func | 969 | `(i32 i32) -> (i32)` |
| `C1RM` | func | 1682 | `(i32 i32) -> ()` |
| `qz3f` | func | 2594 | `(i32 i32) -> (i32)` |
| `CcoC` | func | 2586 | `(i32) -> (i32)` |
| `OKre` | func | 2562 | `(i32) -> (i32)` |
| `fU01` | func | 1371 | `(i32) -> (i32)` |
| `psnH` | func | 1525 | `() -> (i32)` |
| `KUgm` | func | 1975 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `StLj` | func | 1913 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `apu0` | func | 1201 | `(i32 i32) -> ()` |
| `e7w4` | func | 2466 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `i08t` | func | 2369 | `(i32 i32) -> ()` |
| `ym1i` | func | 2544 | `(i32 i32) -> ()` |
| `Ix4P` | func | 2633 | `(i32 i32) -> ()` |
| `OSPP` | func | 1520 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `sp5o` | func | 2079 | `(i32 i32) -> ()` |
| `gF6L` | func | 1968 | `(i32 i32) -> (i32)` |
| `BFnp` | func | 2684 | `() -> (i32)` |
| `ygH1` | func | 1528 | `(i32) -> (i32)` |
| `v4oR` | func | 1686 | `(i32 f64 f64 f64) -> (i32)` |
| `gUEu` | func | 3136 | `(i32) -> (i32 i32)` |
| `C37D` | func | 3095 | `(i32 i32) -> ()` |
| `rkLo` | func | 1571 | `(i32 i32 i32 i32) -> (i32)` |
| `GmlW` | func | 1417 | `(i32 i32 i32) -> (i32)` |
| `ikDw` | func | 1561 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `ryvX` | func | 2683 | `(i32 i32) -> ()` |
| `zIFC` | func | 3305 | `(i32) -> ()` |
| `Oavc` | func | 2424 | `(i32 i32) -> (i32)` |
| `zbid` | func | 3063 | `() -> ()` |
| `Yz1x` | func | 1566 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `UbdV` | func | 3215 | `() -> (i32)` |
| `RXuh` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `RsA9` | func | 2342 | `(i32 i32) -> ()` |
| `Khqh` | func | 1951 | `(i32 i32 f64 f64 f64) -> ()` |
| `LkHi` | func | 1467 | `(i32 f64 f64) -> (i32)` |
| `icu0` | func | 897 | `(i32 i32) -> (i32)` |
| `GU0T` | func | 3151 | `() -> (i32 i32)` |
| `Eo0M` | func | 3125 | `(i32 i32) -> (i32 i32)` |
| `akLf` | func | 1835 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `QsOh` | func | 1929 | `(i32 i32 i32 i32) -> (i32)` |
| `xzHe` | func | 3121 | `(i32 i32) -> (i32 i32)` |
| `nUAH` | func | 2650 | `() -> (i32)` |
| `iUGX` | func | 2568 | `(i32) -> (i32)` |
| `mmcx` | func | 1200 | `(i32 i32) -> (i32)` |
| `ribw` | func | 3256 | `() -> ()` |
| `ldTk` | func | 2912 | `(i32) -> ()` |
| `VRIk` | func | 2027 | `(i32) -> (i32)` |
| `Dkc8` | func | 2422 | `(i32 i32) -> (i32)` |
| `Ym6Q` | func | 2044 | `(i32) -> (i32)` |
| `hXGd` | func | 759 | `(i32 i32) -> (i32)` |
| `DQfb` | func | 3133 | `(i32) -> (i32 i32)` |
| `jUNB` | func | 1641 | `(i32 i32 i32 i32) -> (i32)` |
| `gHYU` | func | 1983 | `(i32) -> ()` |
| `LMBg` | func | 1620 | `(i32 i32 i32) -> (i32)` |
| `fKrh` | func | 1789 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `cDXU` | func | 2567 | `(i32) -> ()` |
| `bhfD` | func | 1377 | `(i32 i32) -> (i32)` |
| `xjdA` | func | 2579 | `(i32 i32) -> ()` |
| `KVky` | func | 1982 | `(i32) -> ()` |
| `jYCA` | func | 2456 | `(i32 i32) -> (i32)` |
| `tEhw` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `EfMk` | func | 1345 | `(i32 i32 i32) -> (i32)` |
| `U8d3` | func | 2583 | `(i32) -> (i32)` |
| `umsf` | func | 2515 | `(i32) -> (i32)` |
| `MDBG` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `Bvwc` | func | 2872 | `(i32) -> (i32)` |
| `CECx` | func | 3176 | `(i32 i32 i32 i32) -> ()` |
| `bPTr` | func | 3089 | `(i32 i32 i32 i32) -> (i32)` |
| `uT4w` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `v33g` | func | 1305 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `ZQLr` | func | 1327 | `(i32 i32) -> (i32)` |
| `vWwc` | func | 3126 | `(i32 i32) -> (i32 i32)` |
| `ynAs` | func | 3254 | `(i32) -> ()` |
| `biHy` | func | 1906 | `() -> (i32)` |
| `p051` | func | 2563 | `(i32) -> (i32)` |
| `tPsY` | func | 3123 | `(i32 i32) -> (i32 i32)` |
| `nrbo` | func | 1257 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ElA7` | func | 2602 | `(i32) -> (i32)` |
| `YOtT` | func | 1572 | `(i32) -> (i32)` |
| `GqYj` | func | 770 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZYD3` | func | 2889 | `(i32) -> (i32)` |
| `oiIt` | func | 3329 | `() -> (i32)` |
| `weGY` | func | 2046 | `(i32 i32 i32 i32) -> ()` |
| `o0KW` | func | 1297 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `EOjE` | func | 1671 | `(i32 i32) -> (i32)` |
| `NBOG` | global | 1 | `` |
| `yoDm` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `lPiW` | func | 2498 | `(i32) -> (i32)` |
| `oiQB` | func | 3083 | `(i32 i32) -> (i32)` |
| `CJfM` | func | 798 | `(i32 i32) -> (i32)` |
| `pB5J` | func | 1607 | `(i32 i32) -> (i32)` |
| `JqJL` | global | 2 | `` |
| `EiS9` | func | 2584 | `(i32) -> (i32)` |
| `oR0O` | func | 3124 | `(i32 i32) -> (i32 i32)` |
| `SIra` | func | 3137 | `(i32) -> (i32 i32)` |
| `U0oV` | func | 1606 | `(i32 i32) -> (i32)` |
| `dMiu` | func | 3187 | `(i32 i32 i32) -> ()` |
| `dwpG` | func | 2935 | `(i32) -> (i32)` |
| `YRVY` | func | 2231 | `(i32 i32) -> (i32)` |
| `qMMD` | func | 1811 | `(i32) -> (i32)` |
| `HC36` | func | 2603 | `(i32) -> (i32)` |
| `zWbc` | func | 2135 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 838 · max 838
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2248512, `i32` = i32.const 2249076

## Functions

- 2,949 bodies · 4,050,219 code bytes · avg 1.3 KB
- instruction scan: 2,949 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 113 |
| <= 128 bytes | 277 |
| <= 256 bytes | 385 |
| <= 512 bytes | 667 |
| <= 1024 bytes | 588 |
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
| 3 | `(i32 i32) -> ()` | 125 | 48,862 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,468 | 14,007 | local.get×4107, i32.const×1881, i32.load×884, i32.add×645, local.set×620 |
| 5 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 177 | 20,026 | 9,398 | local.get×2934, i32.const×1038, local.set×621, i32.add×458, i32.load×421 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 17 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 94 | 21,138 | 8,084 | local.get×3019, i32.const×947, i64.store×844, i32.store×655, i64.const×513 |
| 21 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 22 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 43 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,436 | 12,890 | local.get×3670, i32.const×1868, i32.add×766, local.set×697, end×577 |
| 61 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 192 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 220 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 706 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 753 | `(i32 i32) -> ()` | 138 | 42,799 | 20,185 | local.get×5260, i32.const×2330, local.tee×1194, i32.add×1063, local.set×1003 |
| 1012 | `(i32 i32) -> (i32)` | 40 | 19,870 | 7,741 | local.get×2495, i32.const×847, i64.store×582, i32.load×391, local.set×357 |
| 1575 | `(i32 i32) -> (i32)` | 180 | 54,766 | 19,855 | local.get×6591, i32.const×2625, i64.store×1913, i64.const×1077, i64.load×1056 |
| 1968 | `(i32 i32) -> ()` | 110 | 40,261 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2607 | `(i32 i32) -> ()` | 397 | 142,149 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2897 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2916 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 541,468 |
| `i32.const` | 227,780 |
| `local.tee` | 99,575 |
| `local.set` | 94,529 |
| `i32.load` | 93,426 |
| `i32.add` | 87,141 |
| `end` | 79,346 |
| `br_if` | 63,839 |
| `i32.store` | 46,968 |
| `block` | 37,322 |
| `i64.store` | 32,810 |
| `i64.const` | 32,148 |
| `if` | 30,354 |
| `call` | 30,169 |
| `i64.load` | 24,354 |
| `i32.sub` | 24,156 |
| `br` | 23,236 |
| `i32.eqz` | 19,058 |
| `select` | 16,741 |
| `i32.and` | 16,345 |
| `i32.shl` | 16,236 |
| `i32.ne` | 15,678 |
| `i32.load8_u` | 15,262 |
| `i32.eq` | 13,736 |
| `i32.store8` | 13,423 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,949/2,949 (degraded: 0)
