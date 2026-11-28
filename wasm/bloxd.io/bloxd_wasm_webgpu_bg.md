# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `yteou.5361c997` · analyzed 2026-11-28T13:51:29+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.836931ec8b09451512f0.wasm
> 5,239,836 bytes (5.0 MB) · sha256 `d81a74bd0196aa71…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,238,928 → 5,239,836 bytes (+908)
- data bytes 1,049,293 → 1,050,193
- name-section module id `b183dba018677cd4.12491` → `558e65b2dcfd33be.12491` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/170 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 3,025 / 394 |
| Exports / imports | 170 / 395 |
| Code bytes (function bodies) | 4,142,840 (4.0 MB) |
| Total local variables | 31,921 |
| Instructions (scanable bodies) | 1,938,528 |
| Data segments / bytes | 3,553 / 1,050,193 |
| Element segments / entries | 1 / 844 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `558e65b2dcfd33be.12491` |
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
| 11 | data | 1,078,937 | 3553 |
| 0 | custom:name | 30 | — |

## Types

180 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

395 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `mYgV.CUf7` | memory | `[128..14648]` |
| 0 | `mYgV.aGAe` | func | `(i32) -> (i32)` |
| 1 | `mYgV.wsLH` | func | `(i32) -> (f64)` |
| 2 | `mYgV.FBOg` | func | `() -> (i32)` |
| 3 | `mYgV.jl4h` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `mYgV.tnDt` | func | `(i32) -> ()` |
| 5 | `mYgV.uTmc` | func | `(i32 i32) -> (i32)` |
| 6 | `mYgV.eLmv` | func | `(i32) -> (i32)` |
| 7 | `mYgV.Heyd` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `mYgV.Ipht` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `mYgV.hDXe` | func | `(i32) -> (i32)` |
| 10 | `mYgV.Vc0d` | func | `(i32 i32) -> ()` |
| 11 | `mYgV.qKpC` | func | `(i32 i32) -> ()` |
| 12 | `mYgV.Urii` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `mYgV.QBhv` | func | `(i32 i32) -> (i32)` |
| 14 | `mYgV.uabT` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `mYgV.ZbHg` | func | `(i32) -> (i32)` |
| 16 | `mYgV.NcWh` | func | `(i32 i32) -> (i32)` |
| 17 | `mYgV.JNQO` | func | `(i32 i32) -> (i32)` |
| 18 | `mYgV.min3` | func | `(i32 i32) -> ()` |
| 19 | `mYgV.ceNL` | func | `(i32) -> (i32)` |
| 20 | `mYgV.xfC3` | func | `(i32) -> (i32)` |
| 21 | `mYgV.syxd` | func | `(i32 i32 i32) -> ()` |
| 22 | `mYgV.kkEb` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `mYgV.cyzv` | func | `(i32) -> (i32)` |
| 24 | `mYgV.hlzP` | func | `(i32) -> (i32)` |
| 25 | `mYgV.kgaB` | func | `(i32 i32) -> ()` |
| 26 | `mYgV.PBsn` | func | `(i32 i32) -> (i32)` |
| 27 | `mYgV.WTa2` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `mYgV.aZdx` | func | `(i32) -> (i32)` |
| 29 | `mYgV.dQIB` | func | `(i32) -> (i32)` |
| 30 | `mYgV.B58h` | func | `(i32) -> (i32)` |
| 31 | `mYgV.XzoB` | func | `(i32) -> (i32)` |
| 32 | `mYgV.hjhf` | func | `(i32) -> (i32)` |
| 33 | `mYgV.xHpQ` | func | `(i32 i32 i32) -> ()` |
| 34 | `mYgV.ekSj` | func | `(i32 i32) -> (i32)` |
| 35 | `mYgV.g335` | func | `(i32) -> (i32)` |
| 36 | `mYgV.ROAT` | func | `(i32) -> ()` |
| 37 | `mYgV.TSGi` | func | `(i32) -> (i32)` |
| 38 | `mYgV.iqSH` | func | `(i32) -> (i32)` |
| 39 | `mYgV.N0uq` | func | `(i32) -> ()` |
| 40 | `mYgV.FImw` | func | `(i32 i32) -> (i32)` |
| 41 | `mYgV.ADps` | func | `(i32) -> ()` |
| 42 | `mYgV.JK6e` | func | `(i32 i32) -> ()` |
| 43 | `mYgV.hD3V` | func | `(i32 i32 i32) -> (i32)` |
| 44 | `mYgV.dxKi` | func | `(i32) -> ()` |
| 45 | `mYgV.cKdT` | func | `(i32) -> ()` |
| 46 | `mYgV.sw1F` | func | `() -> (i32)` |
| 47 | `mYgV.TrUD` | func | `(i32 i32) -> (i32)` |
| 48 | `mYgV.SsCW` | func | `(i32 i32) -> (i32)` |
| 49 | `mYgV.ze5S` | func | `(i32) -> (i32)` |
| 50 | `mYgV.FfrR` | func | `(i32) -> (i32)` |
| 51 | `mYgV.Z2BS` | func | `(i32) -> (i32)` |
| 52 | `mYgV.HPgg` | func | `(i32 i32) -> ()` |
| 53 | `mYgV.Jyrw` | func | `(i32) -> (i32)` |
| 54 | `mYgV.Q15z` | func | `(i32) -> ()` |
| 55 | `mYgV.kjce` | func | `(i32 i32) -> (i32)` |
| 56 | `mYgV.UwJE` | func | `(i32 i32 i32) -> (i32)` |
| 57 | `mYgV.gIfq` | func | `(i32) -> (i32)` |
| 58 | `mYgV.v7Qq` | func | `(i32 i32 i32) -> ()` |
| 59 | `mYgV.kWCS` | func | `(i32 i32) -> ()` |
| 60 | `mYgV.v0L7` | func | `(i32) -> (i32)` |
| 61 | `mYgV.BABe` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 62 | `mYgV.oTz0` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 63 | `mYgV.ak5D` | func | `(i32) -> ()` |
| 64 | `mYgV.h8Io` | func | `(i32 i32 i32) -> ()` |
| 65 | `mYgV.n8o7` | func | `(i32 i32) -> ()` |
| 66 | `mYgV.DoRE` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 67 | `mYgV.QSO5` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `mYgV.cHaF` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 69 | `mYgV.hTrl` | func | `(i32 i32 f64) -> ()` |
| 70 | `mYgV.Lu1I` | func | `(i32) -> (i32)` |
| 71 | `mYgV.Y0rG` | func | `(i32 i32) -> ()` |
| 72 | `mYgV.rii5` | func | `(i32 i32 i32) -> ()` |
| 73 | `mYgV.Gasm` | func | `(i32 i32 i32 i32) -> ()` |
| 74 | `mYgV.c73t` | func | `(i32) -> ()` |
| 75 | `mYgV.eVqk` | func | `(i32 i32 i32) -> ()` |
| 76 | `mYgV.GBUR` | func | `(i32 i32) -> ()` |
| 77 | `mYgV.Nfu6` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 78 | `mYgV.VCua` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 79 | `mYgV.zMvB` | func | `(i32 i32 i32) -> ()` |
| 80 | `mYgV.U58p` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 81 | `mYgV.xcmV` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 82 | `mYgV.ADQJ` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 83 | `mYgV.axpW` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 84 | `mYgV.MHdZ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `mYgV.IG07` | func | `(i32 i32 i32) -> ()` |
| 86 | `mYgV.Xepk` | func | `(i32 i32) -> (i32)` |
| 87 | `mYgV.dZRY` | func | `(i32) -> (i32)` |
| 88 | `mYgV.CaDd` | func | `(i32) -> (i32)` |
| 89 | `mYgV.dfAM` | func | `(i32) -> (i32)` |
| 90 | `mYgV.LxzO` | func | `(i32 i32) -> (i32)` |
| 91 | `mYgV.ARlc` | func | `(i32) -> ()` |
| 92 | `mYgV.f0Wq` | func | `(i32) -> (i32)` |
| 93 | `mYgV.VpU8` | func | `(i32 i32) -> (i32)` |
| 94 | `mYgV.izQ3` | func | `(i32 i32 i32) -> (i32)` |
| 95 | `mYgV.Q40W` | func | `(i32 i32 i32) -> ()` |
| 96 | `mYgV.yZHY` | func | `(i32 i32 i32 i32) -> (i32)` |
| 97 | `mYgV.dUhk` | func | `() -> (f64)` |
| 98 | `mYgV.gxuZ` | func | `() -> (f64)` |
| 99 | `mYgV.qXaR` | func | `(i32 i32) -> ()` |
| 100 | `mYgV.fP6D` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 101 | `mYgV.CCqD` | func | `(i32) -> (i32)` |
| 102 | `mYgV.lLU0` | func | `(i32) -> (i32)` |
| 103 | `mYgV.EGR2` | func | `(i32) -> (i32)` |
| 104 | `mYgV.hpD5` | func | `() -> (i32)` |
| 105 | `mYgV.MhhV` | func | `() -> (i32)` |
| 106 | `mYgV.pvGD` | func | `() -> (i32)` |
| 107 | `mYgV.MtIp` | func | `() -> (i32)` |
| 108 | `mYgV.ovPB` | func | `(i32 i32) -> (i32)` |
| 109 | `mYgV.NbfX` | func | `(i32) -> ()` |
| 110 | `mYgV.s7IO` | func | `(i32 i32) -> (i32)` |
| 111 | `mYgV.bxu3` | func | `(i32) -> (i32)` |
| 112 | `mYgV.vUf8` | func | `() -> (f64)` |
| 113 | `mYgV.GRPc` | func | `(i32) -> (i32)` |
| 114 | `mYgV.OQcz` | func | `(i32 i32) -> ()` |
| 115 | `mYgV.VCvF` | func | `(i32 i32) -> ()` |
| 116 | `mYgV.runu` | func | `(i32 i32) -> ()` |
| 117 | `mYgV.Ks75` | func | `(i32 f32) -> ()` |
| 118 | `mYgV.eXk6` | func | `(i32 f32) -> ()` |
| 119 | `mYgV.EhKR` | func | `(i32 i32) -> ()` |
| 120 | `mYgV.SIOo` | func | `(i32 i32) -> ()` |
| 121 | `mYgV.NAyt` | func | `(i32 i32) -> ()` |
| 122 | `mYgV.STv1` | func | `(i32 i32) -> ()` |
| 123 | `mYgV.gxuw` | func | `(i32 i32 i32) -> ()` |
| 124 | `mYgV.ndy4` | func | `(i32 i32) -> (i32)` |
| 125 | `mYgV.bRzs` | func | `(i32 i32) -> ()` |
| 126 | `mYgV.eyRR` | func | `(i32 i32) -> ()` |
| 127 | `mYgV.rhI9` | func | `(i32 i32) -> ()` |
| 128 | `mYgV.M0yZ` | func | `(i32 i32) -> ()` |
| 129 | `mYgV.R67z` | func | `(i32 f64) -> ()` |
| 130 | `mYgV.o4DC` | func | `(i32 f64) -> ()` |
| 131 | `mYgV.HKSh` | func | `(i32 i32) -> ()` |
| 132 | `mYgV.PnaQ` | func | `(i32 i32 i32) -> ()` |
| 133 | `mYgV.fE3v` | func | `(i32 i32) -> ()` |
| 134 | `mYgV.LQxl` | func | `(i32 i32) -> (i32)` |
| 135 | `mYgV.NkBN` | func | `(i32 i32 i32) -> ()` |
| 136 | `mYgV.sy7T` | func | `(i32 i32 i32) -> ()` |
| 137 | `mYgV.Ta07` | func | `(i32 i32) -> (i32)` |
| 138 | `mYgV.eqSF` | func | `(i32 i32) -> (i32)` |
| 139 | `mYgV.EWwP` | func | `(i32 i32 i32) -> ()` |
| 140 | `mYgV.ZsQ6` | func | `(i32 i32 i32) -> ()` |
| 141 | `mYgV.CPHI` | func | `(i32 i32) -> (i32)` |
| 142 | `mYgV.z01D` | func | `(i32 i32) -> ()` |
| 143 | `mYgV.gxID` | func | `(i32 i32) -> ()` |
| 144 | `mYgV.P9Xh` | func | `(i32 i32) -> ()` |
| 145 | `mYgV.wYFQ` | func | `(i32 i32) -> ()` |
| 146 | `mYgV.ynaC` | func | `(i32 i32) -> ()` |
| 147 | `mYgV.FONP` | func | `(i32 i32) -> ()` |
| 148 | `mYgV.s94l` | func | `(i32 i32) -> ()` |
| 149 | `mYgV.WymD` | func | `(i32 f64) -> ()` |
| 150 | `mYgV.Ks3Q` | func | `(i32 i32) -> ()` |
| 151 | `mYgV.m0hz` | func | `(i32 i32) -> ()` |
| 152 | `mYgV.D3XD` | func | `(i32 i32) -> ()` |
| 153 | `mYgV.G7N8` | func | `(i32 i32) -> ()` |
| 154 | `mYgV.NlTC` | func | `(i32 i32) -> ()` |
| 155 | `mYgV.cWt6` | func | `(i32 i32) -> ()` |
| 156 | `mYgV.XXkW` | func | `(i32 i32) -> ()` |
| 157 | `mYgV.Ile3` | func | `(i32 i32) -> ()` |
| 158 | `mYgV.Tult` | func | `(i32 i32) -> ()` |
| 159 | `mYgV.c0JI` | func | `(i32 i32 i32) -> ()` |
| 160 | `mYgV.v06X` | func | `(i32 i32 i32) -> ()` |
| 161 | `mYgV.JF4H` | func | `(i32 i32) -> (i32)` |
| 162 | `mYgV.VGdq` | func | `(i32 i32) -> (i32)` |
| 163 | `mYgV.vPoC` | func | `(i32 i32) -> ()` |
| 164 | `mYgV.OZfE` | func | `(i32 i32) -> ()` |
| 165 | `mYgV.jGbl` | func | `(i32 f64) -> ()` |
| 166 | `mYgV.PFYz` | func | `(i32 i32) -> ()` |
| 167 | `mYgV.Ldon` | func | `(i32 i32) -> ()` |
| 168 | `mYgV.gAah` | func | `(i32 i32) -> ()` |
| 169 | `mYgV.tQQ7` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 170 | `mYgV.sxGq` | func | `(i32 f64) -> ()` |
| 171 | `mYgV.OsCA` | func | `(i32 f64) -> ()` |
| 172 | `mYgV.uedx` | func | `(i32 f64) -> ()` |
| 173 | `mYgV.MEZ6` | func | `(i32 f64) -> ()` |
| 174 | `mYgV.p9kw` | func | `(i32 i32) -> ()` |
| 175 | `mYgV.vkKj` | func | `(i32 i32) -> ()` |
| 176 | `mYgV.WZyC` | func | `(i32 i32) -> ()` |
| 177 | `mYgV.dwuE` | func | `(i32 i32) -> ()` |
| 178 | `mYgV.lNGB` | func | `(i32 i32) -> ()` |
| 179 | `mYgV.eckz` | func | `(i32 i32 i32) -> ()` |
| 180 | `mYgV.zfQx` | func | `(i32 i32) -> ()` |
| 181 | `mYgV.zOzb` | func | `(i32 f32) -> ()` |
| 182 | `mYgV.nIk4` | func | `(i32 i32) -> ()` |
| 183 | `mYgV.mEaO` | func | `(i32 i32) -> ()` |
| 184 | `mYgV.lzr2` | func | `(i32 i32) -> ()` |
| 185 | `mYgV.js2K` | func | `(i32 i32) -> ()` |
| 186 | `mYgV.gAYi` | func | `(i32 i32) -> ()` |
| 187 | `mYgV.EOhZ` | func | `(i32 i32) -> ()` |
| 188 | `mYgV.IdRm` | func | `(i32 i32) -> ()` |
| 189 | `mYgV.IQjr` | func | `(i32 i32) -> ()` |
| 190 | `mYgV.Nx71` | func | `(i32 i32) -> ()` |
| 191 | `mYgV.Xpu4` | func | `(i32 i32) -> ()` |
| 192 | `mYgV.QEiv` | func | `(i32 i32) -> ()` |
| 193 | `mYgV.rgmY` | func | `(i32 i32) -> ()` |
| 194 | `mYgV.FOnx` | func | `(i32 i32) -> (i32)` |
| 195 | `mYgV.h7cU` | func | `(i32 i32 i32 i32) -> ()` |
| 196 | `mYgV.Ib4S` | func | `(i32 i32) -> ()` |
| 197 | `mYgV.WzeM` | func | `(i32 i32 i32) -> ()` |
| 198 | `mYgV.iB51` | func | `(i32 i32) -> (i32)` |
| 199 | `mYgV.bNpg` | func | `(i32) -> (i32)` |
| 200 | `mYgV.uhNb` | func | `(i32 i32) -> ()` |
| 201 | `mYgV.OD11` | func | `(i32 i32) -> ()` |
| 202 | `mYgV.vr7G` | func | `(i32 i32) -> ()` |
| 203 | `mYgV.bUF5` | func | `(i32 i32) -> ()` |
| 204 | `mYgV.uZno` | func | `(i32 i32) -> ()` |
| 205 | `mYgV.iQyS` | func | `(i32 i32) -> ()` |
| 206 | `mYgV.K2wM` | func | `(i32 i32) -> ()` |
| 207 | `mYgV.D0Ko` | func | `(i32 i32) -> ()` |
| 208 | `mYgV.I2xR` | func | `(i32) -> (i32)` |
| 209 | `mYgV.uU5g` | func | `(i32 i32 i32) -> ()` |
| 210 | `mYgV.pFB0` | func | `(i32 i32) -> ()` |
| 211 | `mYgV.FLc3` | func | `(i32 i32 i32 i32) -> ()` |
| 212 | `mYgV.okWy` | func | `(i32 i32) -> ()` |
| 213 | `mYgV.rKrA` | func | `(i32) -> ()` |
| 214 | `mYgV.izRT` | func | `(i32 i32) -> ()` |
| 215 | `mYgV.UxLG` | func | `(i32) -> (i32)` |
| 216 | `mYgV.X1H8` | func | `(i32 i32 i32) -> ()` |
| 217 | `mYgV.swSz` | func | `(i32 i32) -> ()` |
| 218 | `mYgV.YKHQ` | func | `(i32 i32) -> ()` |
| 219 | `mYgV.kGpJ` | func | `(i32 i32) -> ()` |
| 220 | `mYgV.rdSf` | func | `(i32 i32) -> ()` |
| 221 | `mYgV.Rqfr` | func | `(i32 i32) -> (i32)` |
| 222 | `mYgV.aDqs` | func | `(i32 i32) -> ()` |
| 223 | `mYgV.ZJQl` | func | `(i32 i32) -> ()` |
| 224 | `mYgV.aOJR` | func | `(i32 i32) -> ()` |
| 225 | `mYgV.sRwg` | func | `(i32 i32) -> ()` |
| 226 | `mYgV.Va6w` | func | `(i32 i32) -> ()` |
| 227 | `mYgV.lpxi` | func | `(i32 i32) -> ()` |
| 228 | `mYgV.gH16` | func | `(i32 i32) -> ()` |
| 229 | `mYgV.iYmT` | func | `(i32 i32 f64 f64) -> (i32)` |
| 230 | `mYgV.s1hT` | func | `(i32) -> (i32)` |
| 231 | `mYgV.Isxh` | func | `(i32) -> ()` |
| 232 | `mYgV.hcXR` | func | `(i32 f64) -> ()` |
| 233 | `mYgV.FbIR` | func | `(i32 i32) -> ()` |
| 234 | `mYgV.tLFA` | func | `(i32 i32) -> ()` |
| 235 | `mYgV.kn4q` | func | `(i32 i32 i32) -> ()` |
| 236 | `mYgV.q4XA` | func | `(i32 i32) -> (i32)` |
| 237 | `mYgV.M13r` | func | `(i32 i32) -> ()` |
| 238 | `mYgV.RPTA` | func | `(i32 i32) -> ()` |
| 239 | `mYgV.fMWJ` | func | `(i32 i32) -> ()` |
| 240 | `mYgV.Ju5L` | func | `(i32 i32 i32) -> ()` |
| 241 | `mYgV.K822` | func | `(i32 i32) -> ()` |
| 242 | `mYgV.FJvd` | func | `(i32 i32) -> ()` |
| 243 | `mYgV.BSfl` | func | `(i32 i32) -> ()` |
| 244 | `mYgV.QwiY` | func | `(i32 i32 i32) -> ()` |
| 245 | `mYgV.zxX1` | func | `(i32 i32) -> ()` |
| 246 | `mYgV.GJ6O` | func | `(i32 i32) -> ()` |
| 247 | `mYgV.Fh39` | func | `(i32 i32 i32) -> ()` |
| 248 | `mYgV.fcjI` | func | `(i32 i32) -> (i32)` |
| 249 | `mYgV.A9Db` | func | `(i32 i32) -> ()` |
| 250 | `mYgV.yUeq` | func | `(i32 i32 i32) -> ()` |
| 251 | `mYgV.yqv9` | func | `(i32 i32) -> ()` |
| 252 | `mYgV.vpmC` | func | `(i32 f64) -> ()` |
| 253 | `mYgV.cHbB` | func | `(i32 i32) -> ()` |
| 254 | `mYgV.LFrX` | func | `(i32 f64) -> ()` |
| 255 | `mYgV.Ow2U` | func | `(i32 i32 i32) -> ()` |
| 256 | `mYgV.L6dF` | func | `(i32 i32) -> ()` |
| 257 | `mYgV.T2YF` | func | `(i32 i32 i32) -> ()` |
| 258 | `mYgV.S234` | func | `(i32 i32) -> ()` |
| 259 | `mYgV.shYp` | func | `(i32 i32) -> ()` |
| 260 | `mYgV.sIdx` | func | `(i32 i32) -> ()` |
| 261 | `mYgV.P1xF` | func | `(i32 i32 i32) -> ()` |
| 262 | `mYgV.b7qa` | func | `(i32 i32) -> ()` |
| 263 | `mYgV.KetR` | func | `(i32 i32) -> ()` |
| 264 | `mYgV.HMsF` | func | `(i32 i32) -> ()` |
| 265 | `mYgV.h3Ke` | func | `(i32 i32) -> ()` |
| 266 | `mYgV.fpRM` | func | `(i32 f32) -> ()` |
| 267 | `mYgV.SoU2` | func | `(i32 f32) -> ()` |
| 268 | `mYgV.Ea3P` | func | `(i32 i32) -> ()` |
| 269 | `mYgV.ta3C` | func | `(i32 i32) -> ()` |
| 270 | `mYgV.UAK0` | func | `(i32 i32) -> ()` |
| 271 | `mYgV.JDgx` | func | `(i32 i32) -> ()` |
| 272 | `mYgV.Nbk7` | func | `(i32 i32) -> ()` |
| 273 | `mYgV.QsxK` | func | `(i32 i32) -> ()` |
| 274 | `mYgV.kgsF` | func | `(i32 i32) -> ()` |
| 275 | `mYgV.lX8M` | func | `(i32 i32) -> ()` |
| 276 | `mYgV.JkC4` | func | `(i32 i32) -> ()` |
| 277 | `mYgV.zCYM` | func | `(i32 i32) -> ()` |
| 278 | `mYgV.bdVt` | func | `(i32 i32) -> ()` |
| 279 | `mYgV.yrIq` | func | `(i32 i32) -> ()` |
| 280 | `mYgV.wn8G` | func | `(i32 i32) -> ()` |
| 281 | `mYgV.AN2W` | func | `(i32 i32) -> ()` |
| 282 | `mYgV.x6oB` | func | `(i32 i32) -> ()` |
| 283 | `mYgV.rBVA` | func | `(i32 i32) -> ()` |
| 284 | `mYgV.R9Yu` | func | `(i32 i32) -> ()` |
| 285 | `mYgV.hcPX` | func | `(i32 i32) -> ()` |
| 286 | `mYgV.DUY1` | func | `(i32 i32 i32) -> ()` |
| 287 | `mYgV.kTpB` | func | `(i32 i32 i32) -> ()` |
| 288 | `mYgV.YomD` | func | `(i32 i32) -> ()` |
| 289 | `mYgV.w0Lj` | func | `(i32 i32) -> ()` |
| 290 | `mYgV.lBfe` | func | `(i32 i32) -> ()` |
| 291 | `mYgV.sfCQ` | func | `(i32 i32) -> ()` |
| 292 | `mYgV.i4y9` | func | `(i32 i32) -> ()` |
| 293 | `mYgV.k72x` | func | `(i32 i32) -> ()` |
| 294 | `mYgV.PBvE` | func | `(i32 i32) -> ()` |
| 295 | `mYgV.Gtxi` | func | `(i32 i32) -> ()` |
| 296 | `mYgV.vCEz` | func | `(i32 i32) -> ()` |
| 297 | `mYgV.FSyO` | func | `(i32 i32) -> ()` |
| 298 | `mYgV.Tb0R` | func | `(i32 i32) -> ()` |
| 299 | `mYgV.H6gm` | func | `(i32 i32) -> (i32)` |
| 300 | `mYgV.zbbv` | func | `(i32 i32) -> ()` |
| 301 | `mYgV.MdlR` | func | `(i32 i32 i32) -> ()` |
| 302 | `mYgV.rcUI` | func | `(i32 i32) -> ()` |
| 303 | `mYgV.C50L` | func | `(i32 i32) -> ()` |
| 304 | `mYgV.sviM` | func | `(i32 i32) -> ()` |
| 305 | `mYgV.YDty` | func | `(i32 i32 i32) -> ()` |
| 306 | `mYgV.OBHJ` | func | `(i32 i32) -> (i32)` |
| 307 | `mYgV.hjne` | func | `(i32 i32 i32) -> ()` |
| 308 | `mYgV.nhgS` | func | `(i32 i32 i32) -> ()` |
| 309 | `mYgV.vr2V` | func | `(i32 i32) -> ()` |
| 310 | `mYgV.eMQp` | func | `(i32 i32) -> ()` |
| 311 | `mYgV.VBur` | func | `(i32 i32) -> ()` |
| 312 | `mYgV.jW9j` | func | `(i32 i32) -> ()` |
| 313 | `mYgV.AjQl` | func | `(i32 i32) -> (i32)` |
| 314 | `mYgV.rRIC` | func | `(i32) -> (i32)` |
| 315 | `mYgV.StAJ` | func | `(i32) -> (i32)` |
| 316 | `mYgV.nwdW` | func | `(i32) -> (i32)` |
| 317 | `mYgV.kMe7` | func | `(i32) -> (i32)` |
| 318 | `mYgV.daaq` | func | `(i32) -> (i32)` |
| 319 | `mYgV.OIO2` | func | `(i32) -> (i32)` |
| 320 | `mYgV.PkSj` | func | `(i32) -> (i32)` |
| 321 | `mYgV.fPV5` | func | `(i32) -> (i32)` |
| 322 | `mYgV.VhNW` | func | `(i32) -> (i32)` |
| 323 | `mYgV.XZnS` | func | `(i32) -> (i32)` |
| 324 | `mYgV.wdLs` | func | `(i32) -> (i32)` |
| 325 | `mYgV.kxC2` | func | `(i32) -> (i32)` |
| 326 | `mYgV.UWuF` | func | `(i32) -> (i32)` |
| 327 | `mYgV.tZCL` | func | `(i32) -> (i32)` |
| 328 | `mYgV.Cw1n` | func | `(i32) -> (f64)` |
| 329 | `mYgV.Vi80` | func | `(i32) -> (f64)` |
| 330 | `mYgV.R5xT` | func | `(i32) -> (i32)` |
| 331 | `mYgV.ioJc` | func | `(i32) -> (f64)` |
| 332 | `mYgV.ZwX6` | func | `(i32) -> (i32)` |
| 333 | `mYgV.xvcX` | func | `(i32) -> (i32)` |
| 334 | `mYgV.roXD` | func | `(i32) -> (i32)` |
| 335 | `mYgV.lJs2` | func | `(i32) -> (i32)` |
| 336 | `mYgV.htYg` | func | `(i32) -> (i32)` |
| 337 | `mYgV.NtIk` | func | `(i32) -> (i32)` |
| 338 | `mYgV.OV0V` | func | `(i32) -> (i32)` |
| 339 | `mYgV.aR48` | func | `(i32) -> (i32)` |
| 340 | `mYgV.dzo5` | func | `(i32) -> (i32)` |
| 341 | `mYgV.CXdR` | func | `(i32) -> (i32)` |
| 342 | `mYgV.XPwG` | func | `(i32) -> (i32)` |
| 343 | `mYgV.FOgg` | func | `(i32) -> (i32)` |
| 344 | `mYgV.PGfz` | func | `(i32) -> (i32)` |
| 345 | `mYgV.ryo0` | func | `(i32 i32 i32) -> (i32)` |
| 346 | `mYgV.kLVT` | func | `() -> (i32)` |
| 347 | `mYgV.I5cz` | func | `(i32 i32) -> ()` |
| 348 | `mYgV.gxiR` | func | `(i32 i32 i32) -> ()` |
| 349 | `mYgV.ieKb` | func | `(i32 i32 i32) -> ()` |
| 350 | `mYgV.GNVU` | func | `(i32 i32) -> (i32)` |
| 351 | `mYgV.tRpx` | func | `(i32) -> (i32)` |
| 352 | `mYgV.E6JO` | func | `(i32 i32 i32) -> (i32)` |
| 353 | `mYgV.YVH2` | func | `(i32) -> ()` |
| 354 | `mYgV.pXP4` | func | `(i32) -> (i32)` |
| 355 | `mYgV.dRJb` | func | `(i32 i32) -> ()` |
| 356 | `mYgV.vFKL` | func | `(i32) -> (i32)` |
| 357 | `mYgV.wzve` | func | `(i32) -> (i32)` |
| 358 | `mYgV.ilI1` | func | `(i32) -> (i32)` |
| 359 | `mYgV.iRj2` | func | `(i32) -> (i32)` |
| 360 | `mYgV.KNeg` | func | `(i32) -> (i32)` |
| 361 | `mYgV.Kmcy` | func | `(i32 i32) -> ()` |
| 362 | `mYgV.ka0Z` | func | `(i32 i32) -> ()` |
| 363 | `mYgV.pTxG` | func | `(i32 i32) -> ()` |
| 364 | `mYgV.S7fO` | func | `(i32 i32) -> ()` |
| 365 | `mYgV.U6XJ` | func | `(i32 i32) -> ()` |
| 366 | `mYgV.hsgq` | func | `(i32 i32) -> ()` |
| 367 | `mYgV.llGt` | func | `(i32 i32) -> ()` |
| 368 | `mYgV.JsVK` | func | `(i32 i32 i32) -> ()` |
| 369 | `mYgV.oAc8` | func | `(i32 i32) -> ()` |
| 370 | `mYgV.wGVN` | func | `(i32 i32) -> (i32)` |
| 371 | `mYgV.f7pE` | func | `(i32) -> (i32)` |
| 372 | `mYgV.si1s` | func | `(i32) -> (i32)` |
| 373 | `mYgV.Rf7w` | func | `(i32 i32) -> ()` |
| 374 | `mYgV.HCCO` | func | `(i32) -> (i32)` |
| 375 | `mYgV.M84x` | func | `(i32 f64 f64) -> (i32)` |
| 376 | `mYgV.kKSt` | func | `(i32 i32 i32) -> (i32)` |
| 377 | `mYgV.pUII` | func | `(i32 i32) -> ()` |
| 378 | `mYgV.w571` | func | `(i32) -> (i32)` |
| 379 | `mYgV.Zl5E` | func | `(i32) -> (i32)` |
| 380 | `mYgV.CEwR` | func | `(i32) -> (i32)` |
| 381 | `mYgV.vgDA` | func | `(i32) -> (i32)` |
| 382 | `mYgV.zYQE` | func | `(i32) -> (i32)` |
| 383 | `mYgV.jTg8` | func | `(i32) -> (i32)` |
| 384 | `mYgV.GM7d` | func | `(i32 i32) -> ()` |
| 385 | `mYgV.beRD` | func | `(i32 i32) -> (i32)` |
| 386 | `mYgV.UZY0` | func | `(i32 i32) -> (i32)` |
| 387 | `mYgV.HfIF` | func | `(i32 i32) -> (i32)` |
| 388 | `mYgV.MAYm` | func | `(i32 i32) -> (i32)` |
| 389 | `mYgV.VTsI` | func | `(i32 i32) -> (i32)` |
| 390 | `mYgV.lwJe` | func | `(i32 i32) -> (i32)` |
| 391 | `mYgV.eiUC` | func | `(f64) -> (i32)` |
| 392 | `mYgV.BpIN` | func | `(i32 i32) -> (i32)` |
| 393 | `mYgV.xV2l` | func | `(i32 i32) -> (i32)` |

## Exports

170 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `El12` | func | 3382 | `(i32) -> ()` |
| `VVtH` | func | 2099 | `(i32 i32 i32 i32) -> ()` |
| `GkTp` | func | 2160 | `(i32 f64) -> (i32)` |
| `rrY4` | func | 3202 | `(i32 i32) -> (i32 i32)` |
| `EJzK` | func | 3377 | `() -> (f64)` |
| `yGKY` | func | 1559 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `UXsD` | func | 2647 | `(i32 i32) -> ()` |
| `CZ1N` | func | 2487 | `(i32 i32) -> (i32)` |
| `TdvO` | func | 3212 | `(i32) -> (i32 i32)` |
| `JkX7` | func | 3213 | `(i32) -> (i32 i32)` |
| `Kugk` | func | 768 | `(i32 i32) -> (i32)` |
| `JN2i` | func | 2485 | `(i32 i32) -> (i32)` |
| `JGpJ` | func | 2988 | `(i32) -> ()` |
| `gLZw` | func | 988 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `pxLu` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `sq0T` | func | 2097 | `(i32) -> (i32)` |
| `VIX1` | global | 2 | `` |
| `ogJ7` | global | 1 | `` |
| `yWQq` | func | 3254 | `(i32 i32 i32 i32) -> ()` |
| `q5RV` | func | 1569 | `(i32) -> (i32)` |
| `EW9J` | func | 2670 | `(i32) -> (i32)` |
| `JECI` | func | 1566 | `() -> (i32)` |
| `P753` | func | 3263 | `(i32 i32 i32) -> (i32)` |
| `fyXx` | func | 1716 | `(i32 i32) -> (i32)` |
| `ECFy` | func | 1329 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `cpU0` | func | 1769 | `(i32 i32 i32 i32) -> (i32)` |
| `vGOO` | func | 1506 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `qrVl` | func | 1507 | `(i32 f64 f64) -> (i32)` |
| `PE2v` | func | 842 | `(i32 i32 i32 i32) -> (i32)` |
| `ytef` | func | 1795 | `(i32) -> ()` |
| `PMsA` | func | 671 | `(i32 i32 i32) -> (i32)` |
| `WB8f` | func | 2754 | `(i32 i32) -> ()` |
| `gwTg` | func | 1636 | `(i32 i32) -> (i32)` |
| `Lt7S` | func | 713 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Teao` | func | 785 | `(i32 i32) -> (i32)` |
| `OyAn` | func | 1336 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `nQPp` | func | 1652 | `(i32 i32) -> (i32)` |
| `VfP3` | func | 2671 | `(i32) -> (i32)` |
| `Riif` | func | 3416 | `(i32) -> ()` |
| `NG5q` | func | 1384 | `(i32 i32 i32) -> ()` |
| `iy7V` | func | 3215 | `(i32) -> (i32 i32)` |
| `HftT` | func | 2007 | `(i32 i32) -> ()` |
| `Jk06` | func | 3203 | `(i32 i32) -> (i32 i32)` |
| `zWxp` | func | 1978 | `(i32 i32 i32 i32) -> (i32)` |
| `N2Ee` | func | 2755 | `() -> (i32)` |
| `memory` | memory | 0 | `` |
| `Oqta` | func | 1022 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `okUj` | func | 1833 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `vNdJ` | func | 2583 | `(i32) -> (i32)` |
| `XeDe` | func | 951 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `illY` | func | 2637 | `(i32) -> (i32)` |
| `P1Cv` | func | 2522 | `(i32 i32) -> (i32)` |
| `HVwm` | func | 2735 | `(i32) -> ()` |
| `nOf9` | func | 862 | `(i32 i32 i32) -> (i32)` |
| `Oopz` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `MjtI` | func | 2404 | `(i32 i32) -> ()` |
| `TKnY` | func | 1615 | `(i32) -> (i32)` |
| `xSEu` | func | 1623 | `(i32 i32) -> (i32)` |
| `Dh0N` | func | 3204 | `(i32 i32) -> (i32 i32)` |
| `Qlcp` | func | 3331 | `(i32) -> ()` |
| `btL6` | func | 3199 | `(i32 i32) -> (i32 i32)` |
| `oP0Q` | func | 2565 | `(i32) -> (i32)` |
| `XL8Q` | func | 2631 | `(i32) -> (i32)` |
| `t6oK` | func | 2488 | `(i32 i32) -> (i32)` |
| `VOHp` | func | 2660 | `(i32) -> (i32)` |
| `qQTZ` | func | 3190 | `(i32 i32 i32) -> (i32 i32)` |
| `kH0r` | func | 1532 | `(i32 i32) -> (i32)` |
| `I7rQ` | func | 2218 | `(i32 i32) -> (i32)` |
| `Qwbx` | func | 2662 | `(i32 i32) -> (i32)` |
| `Y3fu` | func | 1614 | `(i32 i32 i32 i32) -> (i32)` |
| `YStP` | func | 2331 | `(i32 i32) -> (i32)` |
| `Kw2E` | func | 1413 | `(i32 i32) -> (i32)` |
| `cjGX` | func | 2033 | `(i32) -> ()` |
| `gBkz` | func | 1288 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `gGqf` | func | 2194 | `(i32 i32) -> ()` |
| `lAVF` | func | 1685 | `(i32 i32 i32 i32) -> (i32)` |
| `Sfhd` | func | 845 | `(i32) -> (i32)` |
| `SHm6` | func | 3160 | `(i32 i32) -> (i32)` |
| `cS44` | func | 2538 | `(i32 i32 i32 i32) -> (i32)` |
| `o9gT` | func | 2634 | `(i32) -> (i32)` |
| `gvFa` | func | 2353 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Sxg7` | func | 2700 | `(i32 i32) -> ()` |
| `G4iB` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `kw7g` | func | 2632 | `(i32) -> (i32)` |
| `l2Ca` | func | 1731 | `(i32 f64 f64 f64) -> (i32)` |
| `DsCz` | func | 2822 | `(i32 i32) -> ()` |
| `JGf4` | func | 3140 | `() -> ()` |
| `Hi78` | func | 1330 | `(i32 i32 i32 i32) -> (i32)` |
| `GgGv` | func | 1893 | `(i32 i32) -> (i32)` |
| `P395` | func | 3216 | `(i32) -> (i32 i32)` |
| `QdVt` | func | 1608 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `YACo` | func | 2651 | `(i32) -> (i32)` |
| `M4Wl` | func | 2720 | `() -> (i32)` |
| `LEG6` | func | 3211 | `(i32) -> (i32 i32)` |
| `zTFB` | func | 1230 | `(i32 i32) -> ()` |
| `DULw` | func | 1455 | `(i32 i32 i32) -> (i32)` |
| `WvK0` | func | 3333 | `() -> ()` |
| `v5Ky` | func | 3167 | `(i32 i32 i32 i32) -> (i32)` |
| `egR3` | func | 1856 | `(i32) -> (i32)` |
| `GAMU` | func | 989 | `(i32 i32) -> (i32)` |
| `tbsn` | func | 2652 | `(i32) -> (i32)` |
| `LXmh` | func | 2133 | `(i32 i32) -> ()` |
| `CRtt` | func | 2633 | `(i32) -> (i32)` |
| `zWc6` | func | 3228 | `() -> (i32 i32)` |
| `QUY8` | func | 2654 | `(i32) -> (i32)` |
| `ArJ9` | func | 2614 | `(i32 i32) -> ()` |
| `XqGC` | func | 2635 | `(i32) -> ()` |
| `dVo3` | func | 1727 | `(i32 i32) -> ()` |
| `KNLg` | func | 3405 | `() -> (i32)` |
| `O4eO` | func | 2630 | `(i32) -> (i32)` |
| `pzFS` | func | 2836 | `(i32 i32) -> ()` |
| `zhuz` | func | 2486 | `(i32 i32) -> (i32)` |
| `HkO8` | func | 3214 | `(i32) -> (i32 i32)` |
| `yH5I` | func | 1508 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Lg6M` | func | 2018 | `(i32 i32) -> (i32)` |
| `Pwf7` | func | 2177 | `(i32 f64 f64 f64) -> (i32)` |
| `rB89` | func | 1655 | `(i32 f64) -> (f64)` |
| `WLxJ` | func | 2405 | `(i32 f64) -> (i32)` |
| `jhbV` | func | 2432 | `(i32 i32) -> ()` |
| `bgqf` | func | 1880 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `A4Dj` | func | 3012 | `(i32) -> (i32)` |
| `qbOi` | func | 2661 | `(i32 i32) -> (i32)` |
| `Z2Ji` | func | 1962 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `aNeE` | func | 2669 | `(i32) -> (i32)` |
| `HQFK` | func | 2628 | `(i32) -> (f64)` |
| `UuuV` | func | 3198 | `(i32 i32) -> (i32 i32)` |
| `dLjt` | func | 2942 | `(i32) -> (i32)` |
| `T6H8` | func | 3401 | `(f64) -> (f64)` |
| `wCvz` | func | 1010 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `Ltqs` | func | 3200 | `(i32 i32) -> (i32 i32)` |
| `dUAE` | func | 1438 | `(i32) -> ()` |
| `jOsV` | func | 3292 | `() -> (i32)` |
| `NJuk` | func | 1653 | `(i32 i32) -> (i32)` |
| `abAS` | func | 3229 | `() -> (i32 i32)` |
| `r9k5` | func | 2950 | `(i32) -> (i32)` |
| `fiEb` | func | 779 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `KzjM` | func | 1405 | `(i32) -> (i32)` |
| `MTkA` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `cUNU` | func | 1379 | `(i32 i32 i32) -> (i32)` |
| `x8nX` | func | 1589 | `(i32 i32 i32 i32) -> ()` |
| `khag` | func | 2966 | `(i32) -> (i32)` |
| `j0zM` | func | 848 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `MKqO` | func | 3265 | `(i32 i32 i32) -> ()` |
| `CID9` | func | 1945 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `lVny` | func | 3173 | `(i32 i32) -> ()` |
| `iwoA` | func | 2629 | `(i32) -> (i32)` |
| `F0hY` | func | 1442 | `(i32 i32) -> (i32)` |
| `ETy4` | func | 2615 | `(i32) -> (i32)` |
| `ckGx` | func | 3201 | `(i32 i32) -> (i32 i32)` |
| `kEWP` | func | 1955 | `() -> (i32)` |
| `Vlyr` | func | 1874 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `pAKw` | func | 2001 | `(i32 i32 f64 f64 f64) -> ()` |
| `eU5M` | func | 3406 | `() -> (i32)` |
| `jNdk` | func | 3322 | `(i32 i32 i32) -> ()` |
| `HXJy` | func | 1360 | `(i32 i32) -> (i32)` |
| `CxEI` | func | 2292 | `(i32 i32) -> (i32)` |
| `zeMo` | func | 2653 | `(i32 i32) -> ()` |
| `REr4` | func | 2079 | `(i32) -> (i32)` |
| `RIU4` | func | 2533 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `JZ9Q` | func | 2636 | `(i32) -> (i32)` |
| `AF2O` | func | 2025 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `mqSy` | func | 809 | `(i32 i32) -> (i32)` |
| `foRf` | func | 3381 | `(i32) -> (i32)` |
| `dJ9H` | func | 1229 | `(i32 i32) -> (i32)` |
| `eqNs` | func | 1665 | `(i32 i32 i32) -> (i32)` |
| `lVZb` | func | 2977 | `(i32) -> (i32)` |
| `b4a0` | func | 2465 | `(i32 i32 i32 i32) -> ()` |
| `CRgE` | func | 3230 | `() -> (i32 i32)` |
| `ydjc` | func | 2719 | `(i32) -> ()` |
| `L7GC` | func | 2638 | `(i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 845 · max 845
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2258832, `i32` = i32.const 2259396

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
