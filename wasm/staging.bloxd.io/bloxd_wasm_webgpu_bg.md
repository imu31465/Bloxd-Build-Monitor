# WASM module: `bloxd_wasm_webgpu_bg`

> environment **staging.bloxd.io** · build `bqoxjr.2558012f` · analyzed 2026-11-21T12:37:19+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgpu_bg.5b4b5f10cf8f9c7f6b4e.wasm
> 5,006,327 bytes (4.8 MB) · sha256 `5a2823876f9d5f86…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,878 / 390 |
| Exports / imports | 157 / 390 |
| Code bytes (function bodies) | 3,973,532 (3.8 MB) |
| Total local variables | 30,200 |
| Instructions (scanable bodies) | 1,860,665 |
| Data segments / bytes | 3,386 / 988,050 |
| Element segments / entries | 1 / 820 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `c81ddc18fc64f5e6.12057` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,472 | 172 |
| 2 | import | 4,682 | 390 |
| 3 | function | 2,924 | 2878 |
| 4 | table | 7 | 1 |
| 5 | memory | 5 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,647 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 3,978,786 | 2878 |
| 11 | data | 1,015,448 | 3386 |
| 0 | custom:name | 30 | — |

## Types

172 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

390 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `nzxF.kMSg` | func | `(i32) -> (i32)` |
| 1 | `nzxF.G6Aw` | func | `(i32) -> (f64)` |
| 2 | `nzxF.Ylco` | func | `() -> (i32)` |
| 3 | `nzxF.ewfS` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `nzxF.azZJ` | func | `(i32) -> ()` |
| 5 | `nzxF.bGDJ` | func | `(i32 i32) -> (i32)` |
| 6 | `nzxF.iFK8` | func | `(i32) -> (i32)` |
| 7 | `nzxF.X2X8` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `nzxF.uEsF` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `nzxF.Pczr` | func | `(i32) -> (i32)` |
| 10 | `nzxF.r8Dl` | func | `(i32 i32) -> ()` |
| 11 | `nzxF.gwwR` | func | `(i32 i32) -> ()` |
| 12 | `nzxF.RAuT` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `nzxF.Ciou` | func | `(i32 i32) -> (i32)` |
| 14 | `nzxF.swCC` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `nzxF.cjiF` | func | `(i32) -> (i32)` |
| 16 | `nzxF.ChaY` | func | `(i32 i32) -> (i32)` |
| 17 | `nzxF.iGsK` | func | `(i32 i32) -> (i32)` |
| 18 | `nzxF.ap3Z` | func | `(i32 i32) -> ()` |
| 19 | `nzxF.Ubmc` | func | `(i32) -> (i32)` |
| 20 | `nzxF.BvxB` | func | `(i32) -> (i32)` |
| 21 | `nzxF.XvRn` | func | `(i32 i32 i32) -> ()` |
| 22 | `nzxF.jIGS` | func | `(i32) -> ()` |
| 23 | `nzxF.S3P1` | func | `(i32 i32 i32) -> (i32)` |
| 24 | `nzxF.zK9q` | func | `(i32) -> (i32)` |
| 25 | `nzxF.Iwam` | func | `(i32 i32) -> ()` |
| 26 | `nzxF.WjW8` | func | `(i32 i32) -> (i32)` |
| 27 | `nzxF.WwaY` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `nzxF.gxce` | func | `(i32) -> (i32)` |
| 29 | `nzxF.U7cm` | func | `(i32) -> (i32)` |
| 30 | `nzxF.kQT6` | func | `(i32) -> (i32)` |
| 31 | `nzxF.RRFK` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `nzxF.hcNt` | func | `(i32) -> (i32)` |
| 33 | `nzxF.SDgU` | func | `(i32) -> (i32)` |
| 34 | `nzxF.imQ4` | func | `(i32) -> (i32)` |
| 35 | `nzxF.QCoi` | func | `(i32) -> (i32)` |
| 36 | `nzxF.IyAl` | func | `(i32) -> (i32)` |
| 37 | `nzxF.tKQK` | func | `(i32) -> (i32)` |
| 38 | `nzxF.rXmR` | func | `(i32) -> ()` |
| 39 | `nzxF.eARl` | func | `(i32 i32) -> (i32)` |
| 40 | `nzxF.sI4Y` | func | `(i32) -> (i32)` |
| 41 | `nzxF.dyZi` | func | `(i32 i32) -> ()` |
| 42 | `nzxF.sRdc` | func | `() -> (i32)` |
| 43 | `nzxF.NYZr` | func | `(i32 i32) -> (i32)` |
| 44 | `nzxF.o3VS` | func | `(i32 i32) -> (i32)` |
| 45 | `nzxF.XRtx` | func | `(i32) -> (i32)` |
| 46 | `nzxF.mhjA` | func | `(i32) -> (i32)` |
| 47 | `nzxF.xlS7` | func | `(i32) -> (i32)` |
| 48 | `nzxF.atoA` | func | `(i32 i32) -> ()` |
| 49 | `nzxF.Gwy5` | func | `(i32) -> (i32)` |
| 50 | `nzxF.zg2n` | func | `(i32) -> ()` |
| 51 | `nzxF.BRyy` | func | `(i32 i32) -> (i32)` |
| 52 | `nzxF.Wd6p` | func | `(i32 i32 i32) -> (i32)` |
| 53 | `nzxF.ehg4` | func | `(i32 i32 i32) -> ()` |
| 54 | `nzxF.z8Bd` | func | `(i32 i32) -> ()` |
| 55 | `nzxF.n4gk` | func | `(i32) -> (i32)` |
| 56 | `nzxF.SfB0` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 57 | `nzxF.qWnK` | func | `(i32) -> ()` |
| 58 | `nzxF.zdeE` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 59 | `nzxF.kj0R` | func | `(i32) -> ()` |
| 60 | `nzxF.PFqU` | func | `(i32 i32 i32) -> ()` |
| 61 | `nzxF.jtDZ` | func | `(i32 i32) -> ()` |
| 62 | `nzxF.QAzy` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 63 | `nzxF.shWc` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 64 | `nzxF.I80I` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 65 | `nzxF.eRIa` | func | `(i32 i32 f64) -> ()` |
| 66 | `nzxF.KjS5` | func | `(i32) -> (i32)` |
| 67 | `nzxF.YiYC` | func | `(i32 i32) -> ()` |
| 68 | `nzxF.Hznl` | func | `(i32 i32 i32) -> ()` |
| 69 | `nzxF.Ey1k` | func | `(i32 i32 i32 i32) -> ()` |
| 70 | `nzxF.ODh9` | func | `(i32 i32 i32) -> ()` |
| 71 | `nzxF.OvYT` | func | `(i32) -> ()` |
| 72 | `nzxF.zETI` | func | `(i32 i32) -> ()` |
| 73 | `nzxF.Rk9H` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 74 | `nzxF.exEX` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 75 | `nzxF.zLrY` | func | `(i32 i32 i32) -> ()` |
| 76 | `nzxF.hs8E` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 77 | `nzxF.xaIb` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 78 | `nzxF.UK0N` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 79 | `nzxF.XvCP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `nzxF.vGTa` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 81 | `nzxF.InL1` | func | `(i32 i32 i32) -> ()` |
| 82 | `nzxF.QYM3` | func | `(i32 i32) -> (i32)` |
| 83 | `nzxF.Zxd3` | func | `(i32) -> (i32)` |
| 84 | `nzxF.Drym` | func | `(i32 i32) -> (i32)` |
| 85 | `nzxF.xSV0` | func | `(i32) -> (i32)` |
| 86 | `nzxF.aL87` | func | `(i32) -> (i32)` |
| 87 | `nzxF.S8qX` | func | `(i32) -> (i32)` |
| 88 | `nzxF.UbiV` | func | `(i32 i32) -> (i32)` |
| 89 | `nzxF.wRXH` | func | `(i32) -> ()` |
| 90 | `nzxF.YXt1` | func | `(i32) -> (i32)` |
| 91 | `nzxF.fOZh` | func | `(i32 i32) -> (i32)` |
| 92 | `nzxF.FsEl` | func | `(i32 i32 i32) -> (i32)` |
| 93 | `nzxF.jk5k` | func | `(i32 i32 i32) -> ()` |
| 94 | `nzxF.VHGb` | func | `(i32 i32 i32 i32) -> (i32)` |
| 95 | `nzxF.q6WI` | func | `() -> (f64)` |
| 96 | `nzxF.u30z` | func | `() -> (f64)` |
| 97 | `nzxF.Cx3A` | func | `(i32 i32) -> ()` |
| 98 | `nzxF.UWpU` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 99 | `nzxF.SgF8` | func | `(i32) -> (i32)` |
| 100 | `nzxF.iqfC` | func | `(i32) -> (i32)` |
| 101 | `nzxF.GKbn` | func | `() -> (i32)` |
| 102 | `nzxF.oSG2` | func | `() -> (i32)` |
| 103 | `nzxF.eYYO` | func | `() -> (i32)` |
| 104 | `nzxF.Xbpn` | func | `() -> (i32)` |
| 105 | `nzxF.sBXw` | func | `(i32 i32) -> (i32)` |
| 106 | `nzxF.EidW` | func | `(i32) -> ()` |
| 107 | `nzxF.Mutf` | func | `(i32) -> (i32)` |
| 108 | `nzxF.kfKF` | func | `(i32) -> ()` |
| 109 | `nzxF.SnRX` | func | `(i32 i32) -> ()` |
| 110 | `nzxF.J9Z5` | func | `(i32 i32) -> ()` |
| 111 | `nzxF.YoPo` | func | `(i32 i32) -> ()` |
| 112 | `nzxF.FBVe` | func | `(i32 f32) -> ()` |
| 113 | `nzxF.zEHP` | func | `(i32 f32) -> ()` |
| 114 | `nzxF.nMBG` | func | `(i32 i32) -> ()` |
| 115 | `nzxF.Lvmm` | func | `(i32 i32) -> ()` |
| 116 | `nzxF.t94X` | func | `(i32 i32) -> ()` |
| 117 | `nzxF.mFW5` | func | `(i32 i32) -> ()` |
| 118 | `nzxF.QT3n` | func | `(i32 i32 i32) -> ()` |
| 119 | `nzxF.jL1j` | func | `(i32 i32) -> (i32)` |
| 120 | `nzxF.EefA` | func | `(i32 i32) -> ()` |
| 121 | `nzxF.oeNf` | func | `(i32 i32) -> ()` |
| 122 | `nzxF.fVdO` | func | `(i32 i32) -> ()` |
| 123 | `nzxF.gvnQ` | func | `(i32 i32) -> ()` |
| 124 | `nzxF.b2oT` | func | `(i32 i32) -> ()` |
| 125 | `nzxF.yzgN` | func | `(i32 i32) -> ()` |
| 126 | `nzxF.UyZj` | func | `(i32 i32) -> ()` |
| 127 | `nzxF.JvK4` | func | `(i32 i32) -> ()` |
| 128 | `nzxF.fVg1` | func | `(i32 i32) -> ()` |
| 129 | `nzxF.Ublo` | func | `(i32) -> (i32)` |
| 130 | `nzxF.hGym` | func | `(i32 i32 i32) -> ()` |
| 131 | `nzxF.F8So` | func | `(i32 i32) -> ()` |
| 132 | `nzxF.aWhZ` | func | `(i32 i32) -> ()` |
| 133 | `nzxF.S8IB` | func | `(i32 i32) -> ()` |
| 134 | `nzxF.roiP` | func | `(i32 i32) -> ()` |
| 135 | `nzxF.NJle` | func | `(i32 f64) -> ()` |
| 136 | `nzxF.wXg7` | func | `(i32 f64) -> ()` |
| 137 | `nzxF.OTve` | func | `(i32 i32) -> ()` |
| 138 | `nzxF.ag3H` | func | `(i32 i32 i32) -> ()` |
| 139 | `nzxF.J8Wa` | func | `(i32 i32) -> ()` |
| 140 | `nzxF.XhFG` | func | `(i32 i32) -> (i32)` |
| 141 | `nzxF.BpkM` | func | `(i32 i32 i32) -> ()` |
| 142 | `nzxF.LCPq` | func | `(i32 i32 i32) -> ()` |
| 143 | `nzxF.kH5z` | func | `(i32 i32) -> (i32)` |
| 144 | `nzxF.FmCf` | func | `(i32 i32) -> (i32)` |
| 145 | `nzxF.guBA` | func | `(i32 i32 i32) -> ()` |
| 146 | `nzxF.aCyT` | func | `(i32 i32 i32) -> ()` |
| 147 | `nzxF.Kh37` | func | `(i32 i32) -> (i32)` |
| 148 | `nzxF.uN7Z` | func | `(i32 i32) -> ()` |
| 149 | `nzxF.ALXA` | func | `(i32 i32) -> ()` |
| 150 | `nzxF.J0gp` | func | `(i32 i32) -> ()` |
| 151 | `nzxF.EyMB` | func | `(i32 i32) -> ()` |
| 152 | `nzxF.sxVC` | func | `(i32 i32) -> ()` |
| 153 | `nzxF.bQia` | func | `(i32 i32) -> ()` |
| 154 | `nzxF.I2sT` | func | `(i32 i32) -> ()` |
| 155 | `nzxF.nKTy` | func | `(i32 f64) -> ()` |
| 156 | `nzxF.KtDn` | func | `(i32 i32) -> ()` |
| 157 | `nzxF.Foyc` | func | `(i32 i32) -> ()` |
| 158 | `nzxF.v5kA` | func | `(i32 i32) -> ()` |
| 159 | `nzxF.HoI6` | func | `(i32 i32) -> ()` |
| 160 | `nzxF.vd6q` | func | `(i32 i32) -> ()` |
| 161 | `nzxF.aCOr` | func | `(i32 i32) -> ()` |
| 162 | `nzxF.P1dm` | func | `(i32 i32) -> ()` |
| 163 | `nzxF.j38B` | func | `(i32 i32) -> ()` |
| 164 | `nzxF.TJGq` | func | `(i32 i32) -> ()` |
| 165 | `nzxF.XvAz` | func | `(i32 i32 i32) -> ()` |
| 166 | `nzxF.n1vd` | func | `(i32 i32 i32) -> ()` |
| 167 | `nzxF.u99g` | func | `(i32 i32) -> (i32)` |
| 168 | `nzxF.AKFL` | func | `(i32 i32) -> ()` |
| 169 | `nzxF.C2lD` | func | `(i32 i32) -> ()` |
| 170 | `nzxF.bn1K` | func | `(i32 f64) -> ()` |
| 171 | `nzxF.Leho` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 172 | `nzxF.Vs1J` | func | `(i32 f64) -> ()` |
| 173 | `nzxF.KeJX` | func | `(i32 f64) -> ()` |
| 174 | `nzxF.Svj0` | func | `(i32 f64) -> ()` |
| 175 | `nzxF.ABjt` | func | `(i32 f64) -> ()` |
| 176 | `nzxF.Yvnu` | func | `(i32 i32) -> ()` |
| 177 | `nzxF.SiPu` | func | `(i32 i32) -> ()` |
| 178 | `nzxF.MKWx` | func | `(i32 i32) -> ()` |
| 179 | `nzxF.qulF` | func | `(i32 i32) -> ()` |
| 180 | `nzxF.XZBl` | func | `(i32 i32) -> ()` |
| 181 | `nzxF.rvhI` | func | `(i32 i32 i32) -> ()` |
| 182 | `nzxF.J2eC` | func | `(i32 i32) -> ()` |
| 183 | `nzxF.QPby` | func | `(i32 f32) -> ()` |
| 184 | `nzxF.BBe6` | func | `(i32 i32) -> ()` |
| 185 | `nzxF.HYv3` | func | `(i32 i32) -> ()` |
| 186 | `nzxF.SCU9` | func | `(i32 i32) -> ()` |
| 187 | `nzxF.Kb43` | func | `(i32 i32) -> ()` |
| 188 | `nzxF.myDw` | func | `(i32 i32) -> ()` |
| 189 | `nzxF.tnZh` | func | `(i32 i32) -> ()` |
| 190 | `nzxF.jL7k` | func | `(i32 i32) -> ()` |
| 191 | `nzxF.f9JA` | func | `(i32 i32) -> ()` |
| 192 | `nzxF.YoX5` | func | `(i32 i32) -> ()` |
| 193 | `nzxF.SMsZ` | func | `(i32 i32) -> ()` |
| 194 | `nzxF.SF2J` | func | `(i32 i32) -> ()` |
| 195 | `nzxF.xb6P` | func | `(i32 i32) -> ()` |
| 196 | `nzxF.vmWR` | func | `(i32 i32) -> (i32)` |
| 197 | `nzxF.oV5n` | func | `(i32 i32 i32 i32) -> ()` |
| 198 | `nzxF.hleW` | func | `(i32 i32) -> ()` |
| 199 | `nzxF.FDYM` | func | `(i32 i32 i32) -> ()` |
| 200 | `nzxF.gmxp` | func | `(i32 i32) -> (i32)` |
| 201 | `nzxF.aCtc` | func | `(i32) -> (i32)` |
| 202 | `nzxF.nXNs` | func | `(i32) -> (i32)` |
| 203 | `nzxF.ebav` | func | `(i32 i32) -> (i32)` |
| 204 | `nzxF.is5Z` | func | `(i32 i32) -> ()` |
| 205 | `nzxF.htaZ` | func | `(i32 i32) -> ()` |
| 206 | `nzxF.ZYss` | func | `(i32 i32) -> ()` |
| 207 | `nzxF.s9y0` | func | `(i32 i32) -> ()` |
| 208 | `nzxF.VQym` | func | `(i32 i32) -> ()` |
| 209 | `nzxF.envP` | func | `(i32 i32) -> ()` |
| 210 | `nzxF.QzeV` | func | `(i32 i32) -> ()` |
| 211 | `nzxF.T8Rm` | func | `(i32 i32) -> ()` |
| 212 | `nzxF.JzNR` | func | `(i32 i32 i32) -> ()` |
| 213 | `nzxF.yWv5` | func | `(i32 i32) -> ()` |
| 214 | `nzxF.e0gI` | func | `(i32 i32 i32 i32) -> ()` |
| 215 | `nzxF.Nrtd` | func | `(i32 i32) -> ()` |
| 216 | `nzxF.HqeE` | func | `(i32) -> ()` |
| 217 | `nzxF.U7Dj` | func | `(i32 i32) -> ()` |
| 218 | `nzxF.UwMZ` | func | `(i32) -> (i32)` |
| 219 | `nzxF.oOIF` | func | `(i32 i32 i32) -> ()` |
| 220 | `nzxF.D1ww` | func | `(i32 i32) -> ()` |
| 221 | `nzxF.yF9f` | func | `(i32 i32) -> ()` |
| 222 | `nzxF.JKhx` | func | `(i32 i32) -> ()` |
| 223 | `nzxF.QMoD` | func | `(i32 i32) -> ()` |
| 224 | `nzxF.reHe` | func | `(i32 i32) -> (i32)` |
| 225 | `nzxF.i5Bw` | func | `(i32 i32) -> ()` |
| 226 | `nzxF.VNM5` | func | `(i32 i32) -> ()` |
| 227 | `nzxF.HxbW` | func | `(i32 i32) -> ()` |
| 228 | `nzxF.mcqc` | func | `(i32 i32) -> ()` |
| 229 | `nzxF.R5DZ` | func | `(i32 i32) -> ()` |
| 230 | `nzxF.wZa0` | func | `(i32 i32) -> ()` |
| 231 | `nzxF.OyOB` | func | `(i32 i32) -> ()` |
| 232 | `nzxF.VspK` | func | `(i32 i32 f64 f64) -> (i32)` |
| 233 | `nzxF.bsNM` | func | `(i32) -> (i32)` |
| 234 | `nzxF.xdDF` | func | `(i32) -> ()` |
| 235 | `nzxF.bYfT` | func | `(i32 f64) -> ()` |
| 236 | `nzxF.Ky8p` | func | `(i32 i32) -> ()` |
| 237 | `nzxF.q0op` | func | `(i32 i32) -> ()` |
| 238 | `nzxF.gTQQ` | func | `(i32 i32 i32) -> ()` |
| 239 | `nzxF.whAm` | func | `(i32 i32) -> (i32)` |
| 240 | `nzxF.NIdM` | func | `(i32 i32) -> ()` |
| 241 | `nzxF.aUiy` | func | `(i32 i32) -> ()` |
| 242 | `nzxF.BBDA` | func | `(i32 i32 i32) -> ()` |
| 243 | `nzxF.azbw` | func | `(i32 i32) -> (i32)` |
| 244 | `nzxF.kQKI` | func | `(i32 i32) -> ()` |
| 245 | `nzxF.BZOF` | func | `(i32 i32 i32) -> ()` |
| 246 | `nzxF.pwJS` | func | `(i32 i32) -> ()` |
| 247 | `nzxF.Fjjc` | func | `(i32 f64) -> ()` |
| 248 | `nzxF.C4sP` | func | `(i32 i32) -> ()` |
| 249 | `nzxF.Y6gA` | func | `(i32 f64) -> ()` |
| 250 | `nzxF.hhlu` | func | `(i32 i32 i32) -> ()` |
| 251 | `nzxF.wC0r` | func | `(i32 i32) -> ()` |
| 252 | `nzxF.s6RP` | func | `(i32 i32 i32) -> ()` |
| 253 | `nzxF.FTz5` | func | `(i32 i32) -> ()` |
| 254 | `nzxF.wF5b` | func | `(i32 i32) -> ()` |
| 255 | `nzxF.DYsH` | func | `(i32 i32) -> ()` |
| 256 | `nzxF.L3q6` | func | `(i32 i32 i32) -> ()` |
| 257 | `nzxF.U99G` | func | `(i32 i32) -> ()` |
| 258 | `nzxF.MJWd` | func | `(i32 i32) -> ()` |
| 259 | `nzxF.b3Rz` | func | `(i32 i32) -> ()` |
| 260 | `nzxF.yZqs` | func | `(i32 i32) -> ()` |
| 261 | `nzxF.Y9GP` | func | `(i32 f32) -> ()` |
| 262 | `nzxF.tDkp` | func | `(i32 f32) -> ()` |
| 263 | `nzxF.HuH0` | func | `(i32 i32) -> ()` |
| 264 | `nzxF.uswB` | func | `(i32 i32) -> ()` |
| 265 | `nzxF.iLpj` | func | `(i32 i32) -> ()` |
| 266 | `nzxF.vCwh` | func | `(i32 i32) -> ()` |
| 267 | `nzxF.plor` | func | `(i32 i32) -> ()` |
| 268 | `nzxF.do1y` | func | `(i32 i32) -> ()` |
| 269 | `nzxF.HpI9` | func | `(i32 i32) -> ()` |
| 270 | `nzxF.Tahs` | func | `(i32 i32) -> ()` |
| 271 | `nzxF.CARt` | func | `(i32 i32) -> ()` |
| 272 | `nzxF.VkNJ` | func | `(i32 i32) -> ()` |
| 273 | `nzxF.nSAK` | func | `(i32 i32) -> ()` |
| 274 | `nzxF.ywFu` | func | `(i32 i32) -> ()` |
| 275 | `nzxF.mBIG` | func | `(i32 i32) -> ()` |
| 276 | `nzxF.Hlyh` | func | `(i32 i32) -> ()` |
| 277 | `nzxF.DYdb` | func | `(i32 i32) -> ()` |
| 278 | `nzxF.ttMf` | func | `(i32 i32) -> ()` |
| 279 | `nzxF.nRJG` | func | `(i32 i32) -> ()` |
| 280 | `nzxF.jldj` | func | `(i32 i32) -> ()` |
| 281 | `nzxF.TrNE` | func | `(i32 i32 i32) -> ()` |
| 282 | `nzxF.dR8g` | func | `(i32 i32 i32) -> ()` |
| 283 | `nzxF.nQBv` | func | `(i32 i32) -> ()` |
| 284 | `nzxF.urQU` | func | `(i32 i32) -> ()` |
| 285 | `nzxF.FnMb` | func | `(i32 i32) -> ()` |
| 286 | `nzxF.QPCM` | func | `(i32 i32) -> ()` |
| 287 | `nzxF.W2ej` | func | `(i32 i32) -> ()` |
| 288 | `nzxF.mxfA` | func | `(i32 i32) -> ()` |
| 289 | `nzxF.MaF7` | func | `(i32 i32) -> ()` |
| 290 | `nzxF.x2KZ` | func | `(i32 i32) -> ()` |
| 291 | `nzxF.JLvz` | func | `(i32 i32) -> ()` |
| 292 | `nzxF.uxLn` | func | `(i32 i32) -> ()` |
| 293 | `nzxF.RDfz` | func | `(i32 i32) -> ()` |
| 294 | `nzxF.aHct` | func | `(i32 i32) -> (i32)` |
| 295 | `nzxF.QIy6` | func | `(i32 i32) -> ()` |
| 296 | `nzxF.CUvH` | func | `(i32 i32 i32) -> ()` |
| 297 | `nzxF.CUrC` | func | `(i32 i32) -> ()` |
| 298 | `nzxF.hAko` | func | `(i32 i32) -> ()` |
| 299 | `nzxF.PTzG` | func | `(i32 i32) -> ()` |
| 300 | `nzxF.jW1H` | func | `(i32 i32 i32) -> ()` |
| 301 | `nzxF.k4Lr` | func | `(i32 i32) -> (i32)` |
| 302 | `nzxF.p8No` | func | `(i32 i32 i32) -> ()` |
| 303 | `nzxF.uDOS` | func | `(i32 i32 i32) -> ()` |
| 304 | `nzxF.k5hR` | func | `(i32 i32) -> ()` |
| 305 | `nzxF.eqzO` | func | `(i32 i32) -> ()` |
| 306 | `nzxF.zAim` | func | `(i32 i32) -> ()` |
| 307 | `nzxF.MVc9` | func | `(i32 i32) -> ()` |
| 308 | `nzxF.UnlK` | func | `(i32 i32) -> (i32)` |
| 309 | `nzxF.Fivg` | func | `(i32) -> (i32)` |
| 310 | `nzxF.hO0r` | func | `(i32) -> (i32)` |
| 311 | `nzxF.hQJi` | func | `(i32) -> (i32)` |
| 312 | `nzxF.OP1F` | func | `(i32) -> (i32)` |
| 313 | `nzxF.aoQY` | func | `(i32) -> (i32)` |
| 314 | `nzxF.Dhad` | func | `(i32) -> (i32)` |
| 315 | `nzxF.BUQI` | func | `(i32) -> (i32)` |
| 316 | `nzxF.CwtY` | func | `(i32) -> (i32)` |
| 317 | `nzxF.UbLZ` | func | `(i32) -> (i32)` |
| 318 | `nzxF.p4yq` | func | `(i32) -> (i32)` |
| 319 | `nzxF.QRdY` | func | `(i32) -> (i32)` |
| 320 | `nzxF.Q8Zk` | func | `(i32) -> (i32)` |
| 321 | `nzxF.cDuy` | func | `(i32) -> (i32)` |
| 322 | `nzxF.oL5p` | func | `(i32) -> (i32)` |
| 323 | `nzxF.elnx` | func | `(i32) -> (f64)` |
| 324 | `nzxF.eiXA` | func | `(i32) -> (f64)` |
| 325 | `nzxF.SXRd` | func | `(i32) -> (i32)` |
| 326 | `nzxF.LVRF` | func | `(i32) -> (f64)` |
| 327 | `nzxF.pwBa` | func | `(i32) -> (i32)` |
| 328 | `nzxF.xGDu` | func | `(i32) -> (i32)` |
| 329 | `nzxF.YBwN` | func | `(i32) -> (i32)` |
| 330 | `nzxF.e5Ve` | func | `(i32) -> (i32)` |
| 331 | `nzxF.SBUS` | func | `(i32) -> (i32)` |
| 332 | `nzxF.WGkN` | func | `(i32) -> (i32)` |
| 333 | `nzxF.agCG` | func | `(i32) -> (i32)` |
| 334 | `nzxF.a534` | func | `(i32) -> (i32)` |
| 335 | `nzxF.PsN9` | func | `(i32) -> (i32)` |
| 336 | `nzxF.qeXk` | func | `(i32) -> (i32)` |
| 337 | `nzxF.UDRX` | func | `(i32) -> (i32)` |
| 338 | `nzxF.CVmy` | func | `(i32) -> (i32)` |
| 339 | `nzxF.Y7Mt` | func | `(i32) -> (i32)` |
| 340 | `nzxF.uZGu` | func | `(i32 i32 i32) -> (i32)` |
| 341 | `nzxF.erR9` | func | `() -> (i32)` |
| 342 | `nzxF.i61F` | func | `(i32 i32) -> ()` |
| 343 | `nzxF.CrOx` | func | `(i32 i32 i32) -> ()` |
| 344 | `nzxF.LekP` | func | `(i32 i32 i32) -> ()` |
| 345 | `nzxF.PcDA` | func | `(i32 i32) -> (i32)` |
| 346 | `nzxF.CtIz` | func | `(i32) -> (i32)` |
| 347 | `nzxF.Z0Gn` | func | `(i32 i32 i32) -> (i32)` |
| 348 | `nzxF.sOvJ` | func | `(i32) -> ()` |
| 349 | `nzxF.PmeV` | func | `(i32) -> (i32)` |
| 350 | `nzxF.CZAS` | func | `(i32 i32) -> ()` |
| 351 | `nzxF.V9bE` | func | `(i32) -> (i32)` |
| 352 | `nzxF.f2Jn` | func | `(i32) -> (i32)` |
| 353 | `nzxF.c33X` | func | `(i32) -> (i32)` |
| 354 | `nzxF.JSqq` | func | `(i32) -> (i32)` |
| 355 | `nzxF.qn0I` | func | `(i32) -> (i32)` |
| 356 | `nzxF.fdJF` | func | `(i32 i32) -> ()` |
| 357 | `nzxF.RAIk` | func | `(i32 i32) -> ()` |
| 358 | `nzxF.JzjH` | func | `(i32 i32) -> ()` |
| 359 | `nzxF.eKY4` | func | `(i32 i32) -> ()` |
| 360 | `nzxF.Ji08` | func | `(i32 i32) -> ()` |
| 361 | `nzxF.dkr2` | func | `(i32 i32) -> ()` |
| 362 | `nzxF.uzvP` | func | `(i32 i32) -> ()` |
| 363 | `nzxF.MZBz` | func | `(i32 i32 i32) -> ()` |
| 364 | `nzxF.dE1t` | func | `(i32 i32) -> ()` |
| 365 | `nzxF.lv2U` | func | `(i32 i32) -> (i32)` |
| 366 | `nzxF.KeDp` | func | `(i32) -> (i32)` |
| 367 | `nzxF.pKvb` | func | `(i32) -> (i32)` |
| 368 | `nzxF.o29q` | func | `(i32 i32) -> ()` |
| 369 | `nzxF.F71a` | func | `(i32) -> (i32)` |
| 370 | `nzxF.no3O` | func | `(i32 f64 f64) -> (i32)` |
| 371 | `nzxF.IeE4` | func | `(i32 i32 i32) -> (i32)` |
| 372 | `nzxF.UHun` | func | `(i32 i32) -> ()` |
| 373 | `nzxF.Cpem` | func | `(i32 i32) -> (i32)` |
| 374 | `nzxF.DTnU` | func | `(i32) -> (i32)` |
| 375 | `nzxF.KTV7` | func | `(i32) -> (i32)` |
| 376 | `nzxF.toyk` | func | `(i32) -> (i32)` |
| 377 | `nzxF.s0S6` | func | `(i32) -> (i32)` |
| 378 | `nzxF.yBfS` | func | `(i32) -> (i32)` |
| 379 | `nzxF.Me06` | func | `(i32) -> (i32)` |
| 380 | `nzxF.uPno` | func | `(i32 i32) -> ()` |
| 381 | `nzxF.IKuU` | func | `(i32 i32) -> (i32)` |
| 382 | `nzxF.GuUv` | func | `(i32 i32) -> (i32)` |
| 383 | `nzxF.wlT3` | func | `(i32 i32) -> (i32)` |
| 384 | `nzxF.TawX` | func | `(i32 i32) -> (i32)` |
| 385 | `nzxF.sqOF` | func | `(i32 i32) -> (i32)` |
| 386 | `nzxF.dFNS` | func | `(i32 i32) -> (i32)` |
| 387 | `nzxF.lSJU` | func | `(f64) -> (i32)` |
| 388 | `nzxF.LZwr` | func | `(i32 i32) -> (i32)` |
| 389 | `nzxF.IbYJ` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `zcMs` | func | 2552 | `(i32) -> (i32)` |
| `qzVy` | func | 1498 | `(i32 i32 i32) -> ()` |
| `tM4H` | func | 2375 | `(i32 i32) -> (i32)` |
| `jODD` | func | 2630 | `(i32 i32) -> ()` |
| `jFRN` | func | 3023 | `(i32 i32 i32 i32) -> (i32)` |
| `Ubyn` | func | 1562 | `(i32 i32) -> (i32)` |
| `YnVs` | global | 1 | `` |
| `yhGf` | func | 3057 | `(i32 i32) -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `x1i8` | func | 2584 | `(i32 i32) -> ()` |
| `cCBm` | func | 2551 | `(i32) -> (i32)` |
| `SgLV` | func | 1914 | `(i32 i32 f64 f64 f64) -> ()` |
| `xS1c` | func | 763 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `iUKL` | func | 1648 | `(i32 i32) -> ()` |
| `ZdlN` | func | 2491 | `(i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)` |
| `x4Fw` | func | 2515 | `(i32) -> (i32)` |
| `Vl5f` | func | 2074 | `(i32 f64 f64 f64) -> (i32)` |
| `AWfi` | func | 2995 | `() -> ()` |
| `gnw6` | func | 1942 | `(i32) -> ()` |
| `bvLl` | func | 1280 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `caZs` | func | 2811 | `(i32) -> (i32)` |
| `lNdY` | func | 1943 | `(i32) -> ()` |
| `iYO8` | func | 2495 | `(i32) -> (i32)` |
| `eBkh` | func | 3071 | `(i32) -> (i32 i32)` |
| `FqM7` | func | 2374 | `(i32 i32) -> (i32)` |
| `IniX` | func | 2803 | `(i32) -> (i32)` |
| `rr6a` | func | 2423 | `(i32 i32 i32 i32) -> (i32)` |
| `PlP9` | func | 1755 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `SIkr` | func | 1521 | `(i32 i32 i32 i32) -> ()` |
| `C1lx` | global | 2 | `` |
| `Kk0s` | func | 3059 | `(i32 i32) -> (i32 i32)` |
| `w5EP` | func | 1068 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `JtcH` | func | 2373 | `(i32 i32) -> (i32)` |
| `aYWA` | func | 654 | `(i32 i32 i32) -> (i32)` |
| `qsG4` | func | 3047 | `(i32 i32 i32) -> (i32 i32)` |
| `lGcT` | func | 1537 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `ih5D` | func | 2189 | `(i32 i32) -> (i32)` |
| `uSA2` | func | 3146 | `() -> (i32)` |
| `bQSA` | func | 2532 | `(i32) -> (i32)` |
| `X3Zm` | func | 985 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `G5SS` | func | 3255 | `() -> (i32)` |
| `rSsf` | func | 1493 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `X8gw` | func | 3056 | `(i32 i32) -> (i32 i32)` |
| `PnOl` | func | 1637 | `(i32 i32) -> (i32)` |
| `IA8s` | func | 2541 | `(i32) -> (i32)` |
| `dKDt` | func | 1541 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `H3Ld` | func | 814 | `(i32 i32 i32 i32) -> (i32)` |
| `cXLH` | func | 2190 | `(i32 i32) -> (i32)` |
| `ylpK` | func | 1647 | `(i32 i32) -> ()` |
| `fnav` | func | 2420 | `(i32 f64) -> (i32)` |
| `DkKJ` | func | 2873 | `(i32) -> (i32)` |
| `NiV7` | func | 1357 | `(i32 i32) -> (i32)` |
| `HnjH` | func | 3109 | `(i32 i32 i32 i32) -> ()` |
| `wllo` | func | 1588 | `(i32 i32 i32) -> (i32)` |
| `Mwuc` | func | 1187 | `(i32 i32) -> (i32)` |
| `zRYn` | func | 1818 | `(i32) -> (i32)` |
| `AsbK` | func | 1775 | `(i32) -> (i32)` |
| `g2RW` | func | 2519 | `(i32) -> (i32)` |
| `SNco` | func | 3084 | `() -> (i32 i32)` |
| `wX0S` | func | 3069 | `(i32) -> (i32 i32)` |
| `OSVN` | func | 2838 | `(i32) -> (i32)` |
| `UIP6` | func | 1281 | `(i32 i32 i32 i32) -> (i32)` |
| `oPx2` | func | 2000 | `(i32) -> (i32)` |
| `CpAe` | func | 2323 | `(i32 i32) -> ()` |
| `UUrq` | func | 1499 | `() -> (i32)` |
| `dYyg` | func | 2376 | `(i32 i32) -> (i32)` |
| `uTl6` | func | 2512 | `(i32) -> (i32)` |
| `x4XK` | func | 1287 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `UmOc` | func | 2467 | `(i32) -> (i32)` |
| `KPBo` | func | 3055 | `(i32 i32) -> (i32 i32)` |
| `pyPy` | func | 1575 | `(i32 f64) -> (f64)` |
| `aCVI` | func | 884 | `(i32 i32) -> (i32)` |
| `XCB0` | func | 1688 | `(i32 i32 i32 i32) -> (i32)` |
| `KJpc` | func | 1868 | `() -> (i32)` |
| `IMwA` | func | 2535 | `(i32) -> (i32)` |
| `RqrC` | func | 835 | `(i32 i32 i32) -> (i32)` |
| `ESl4` | func | 2169 | `(i32 i32) -> ()` |
| `l6XA` | func | 1652 | `(i32 f64 f64 f64) -> (i32)` |
| `cavq` | func | 2059 | `(i32 f64) -> (i32)` |
| `pbF4` | func | 2631 | `() -> (i32)` |
| `l2qh` | func | 1243 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `g8UK` | func | 3060 | `(i32 i32) -> (i32 i32)` |
| `aDQf` | func | 1918 | `(i32 i32) -> ()` |
| `ZKzD` | func | 2534 | `(i32 i32) -> ()` |
| `FTGc` | func | 3058 | `(i32 i32) -> (i32 i32)` |
| `Bhot` | func | 2995 | `() -> ()` |
| `Ubgb` | func | 2542 | `(i32 i32) -> (i32)` |
| `phyZ` | func | 1572 | `(i32 i32) -> (i32)` |
| `DCyN` | func | 3182 | `(i32) -> ()` |
| `ZvsS` | func | 2510 | `(i32) -> (i32)` |
| `glKx` | func | 1465 | `(i32 i32) -> (i32)` |
| `copq` | func | 3030 | `(i32 i32) -> ()` |
| `lCaJ` | func | 817 | `(i32) -> (i32)` |
| `Xc0k` | func | 2514 | `(i32) -> (i32)` |
| `l7wg` | func | 3046 | `(i32 i32 i32) -> (i32 i32)` |
| `xOdX` | func | 2002 | `(i32 i32 i32 i32) -> ()` |
| `yq3m` | func | 1903 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `XyMW` | func | 2533 | `(i32) -> (i32)` |
| `Ar7E` | func | 3175 | `(i32 i32 i32) -> ()` |
| `u3Gz` | func | 1545 | `(i32 i32 i32 i32) -> (i32)` |
| `csgg` | func | 2828 | `(i32) -> (i32)` |
| `k51q` | func | 3231 | `(i32) -> ()` |
| `LaX7` | func | 2494 | `(i32 i32) -> ()` |
| `O8rw` | func | 1891 | `(i32 i32 i32 i32) -> (i32)` |
| `jmgb` | func | 3070 | `(i32) -> (i32 i32)` |
| `XVP1` | func | 3230 | `(i32) -> (i32)` |
| `AtR9` | func | 3047 | `(i32 i32 i32) -> (i32 i32)` |
| `QN6b` | func | 959 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `RNaA` | func | 2543 | `(i32 i32) -> (i32)` |
| `Xv05` | func | 751 | `(i32 i32) -> (i32)` |
| `sqKK` | func | 1608 | `(i32 i32 i32 i32) -> (i32)` |
| `RYdt` | func | 2036 | `(i32 i32) -> ()` |
| `rDqj` | func | 1928 | `(i32 i32) -> (i32)` |
| `mfff` | func | 1350 | `(i32) -> (i32)` |
| `K1nw` | func | 2450 | `(i32) -> (i32)` |
| `Whih` | func | 2850 | `(i32) -> ()` |
| `mAGk` | func | 821 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `l309` | func | 2229 | `(i32 i32) -> (i32)` |
| `wky2` | func | 3016 | `(i32 i32) -> (i32)` |
| `XhtG` | func | 3116 | `(i32 i32 i32) -> (i32)` |
| `Rz6o` | func | 3047 | `(i32 i32 i32) -> (i32 i32)` |
| `t4wH` | func | 1798 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `wOAN` | func | 788 | `(i32 i32) -> (i32)` |
| `FaqX` | func | 3254 | `() -> (i32)` |
| `Efs7` | func | 2250 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `PBNy` | func | 1573 | `(i32 i32) -> (i32)` |
| `trsR` | func | 3118 | `(i32 i32 i32) -> ()` |
| `i8Qw` | func | 3085 | `() -> (i32 i32)` |
| `JJ9r` | func | 3047 | `(i32 i32 i32) -> (i32 i32)` |
| `S10G` | func | 2517 | `(i32) -> (i32)` |
| `eJy4` | func | 3226 | `() -> (f64)` |
| `qu5X` | func | 2509 | `(i32) -> (f64)` |
| `ePeC` | func | 2298 | `(i32 i32) -> ()` |
| `Iq7c` | func | 2516 | `(i32) -> ()` |
| `Z1i1` | func | 2409 | `(i32 i32) -> (i32)` |
| `CwzV` | func | 1577 | `(i32) -> (i32)` |
| `F9LS` | func | 1935 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `UKqB` | func | 1307 | `(i32 i32) -> (i32)` |
| `z8cu` | func | 2550 | `(i32) -> (i32)` |
| `zKVC` | func | 1397 | `(i32 i32 i32) -> (i32)` |
| `EWp9` | func | 1792 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `DlXr` | func | 2518 | `(i32) -> (i32)` |
| `F8Mh` | func | 2558 | `() -> (i32)` |
| `FIPW` | func | 1551 | `(i32 i32) -> (i32)` |
| `YWJ9` | func | 974 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `dJ8k` | func | 3054 | `(i32 i32) -> (i32 i32)` |
| `em4k` | func | 1326 | `(i32 i32 i32) -> (i32)` |
| `LtRI` | func | 2527 | `(i32 i32) -> ()` |
| `dHyz` | func | 2513 | `(i32) -> (i32)` |
| `RsXO` | func | 3072 | `(i32) -> (i32 i32)` |
| `L0cw` | func | 2511 | `(i32) -> (i32)` |
| `tfcY` | func | 1445 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Hum6` | func | 1388 | `(i32) -> ()` |
| `PFTE` | func | 1186 | `(i32 i32) -> ()` |
| `jIA8` | func | 1446 | `(i32 f64 f64) -> (i32)` |
| `it0r` | func | 1185 | `(i32 i32) -> (i32)` |
| `Z3eO` | func | 1811 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 34 pages · max 14,648 · shared=False
- table 0: funcref · min 821 · max 821
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2194816, `i32` = i32.const 2195284

## Functions

- 2,878 bodies · 3,973,532 code bytes · avg 1.3 KB
- instruction scan: 2,878 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 164 |
| <= 64 bytes | 116 |
| <= 128 bytes | 262 |
| <= 256 bytes | 378 |
| <= 512 bytes | 651 |
| <= 1024 bytes | 568 |
| <= 2048 bytes | 406 |
| <= 4096 bytes | 181 |
| <= 8192 bytes | 91 |
| <= 16384 bytes | 26 |
| > 16384 bytes | 35 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 149 | 123,210 | 59,158 | local.get×16779, i32.const×7042, local.set×3395, i32.add×3382, i32.load×3155 |
| 1 | `(i32 i32 i32 i32) -> ()` | 212 | 192,937 | 87,545 | local.get×25658, i32.const×9834, i32.load×5578, local.set×4652, local.tee×4609 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 131 | 55,245 | 25,152 | local.get×7463, i32.const×3315, local.set×1377, i32.add×1265, i32.load×1139 |
| 3 | `(i32 i32) -> ()` | 123 | 48,629 | 22,511 | local.get×6329, i32.const×2250, local.set×1325, local.tee×1179, i32.load×1035 |
| 4 | `(i32 i32 i32) -> ()` | 61 | 31,664 | 14,227 | local.get×4105, i32.const×1929, i32.load×868, i32.add×678, local.set×620 |
| 5 | `(i32 i32) -> ()` | 59 | 29,626 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,104 | 12,597 | local.get×3709, i32.const×1386, local.set×779, i32.load×721, local.tee×701 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 134 | 32,140 | 15,936 | local.get×4504, i32.const×2183, local.set×1128, i32.add×1053, local.tee×790 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,484 | 10,525 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 9 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 20,628 | 9,288 | local.get×2540, i32.const×1209, local.set×548, local.tee×388, end×388 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 13 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 18 | `(i32 i32) -> ()` | 95 | 28,847 | 13,556 | local.get×4112, i32.const×1781, i32.add×687, i32.load×632, local.set×632 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 98 | 20,878 | 7,965 | local.get×2956, i32.const×931, i64.store×841, i32.store×643, i64.const×516 |
| 21 | `(i32 i32) -> ()` | 82 | 29,008 | 13,035 | local.get×4617, i32.const×1454, i32.store×702, i32.add×688, local.tee×644 |
| 22 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,285 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 21,783 | 10,071 | local.get×3118, i32.const×1237, local.tee×621, i32.add×432, i32.load×331 |
| 40 | `(i32 i32 i32 i32 i32) -> ()` | 80 | 25,623 | 11,957 | local.get×3434, i32.const×1743, i32.add×697, local.set×634, end×538 |
| 57 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 192 | `(i32 i32) -> ()` | 10 | 26,844 | 12,930 | local.get×4543, i32.load×1219, i32.const×1046, end×803, i32.add×744 |
| 217 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 700 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 981 | `(i32 i32) -> ()` | 138 | 42,558 | 20,102 | local.get×5237, i32.const×2322, local.tee×1192, i32.add×1062, local.set×1007 |
| 1538 | `(i32 i32) -> (i32)` | 179 | 54,392 | 19,724 | local.get×6550, i32.const×2610, i64.store×1877, i64.const×1058, i64.load×1038 |
| 1925 | `(i32 i32) -> ()` | 110 | 38,693 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2544 | `(i32 i32) -> ()` | 397 | 139,324 | 62,996 | local.get×18108, i32.const×7882, local.set×3752, i32.load×3121, end×2777 |
| 2827 | `(i32 i32 i32 i32) -> ()` | 137 | 30,199 | 13,753 | local.get×4098, i32.const×1461, local.tee×695, local.set×679, i32.load×613 |
| 2845 | `(i32 i32) -> ()` | 135 | 32,980 | 14,764 | local.get×4135, i32.const×1957, local.set×762, local.tee×727, i32.add×680 |

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
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
r8unormr8snormr8uintr8sintr16unormr16snormr16uintr16sintr16floatrg8unormrg8snormrg8uintrg8sintr32uintr32sintr32floatrg16unormrg16snormrg16uintrg16sintrg16floatrgba8unormrgba8unorm-srgbrgba8snormrgba8u
fs_mesh_0040d000053_l7fs_mesh_0040d040073_l3fs_mesh_0040d040073_l7fs_mesh_0040d090053_l1fs_mesh_0040d0b0073_l1fs_mesh_0042d040072_l3fs_mesh_0044b0b0073fs_mesh_0044d000053_l3fs_mesh_0044d000053_l7fs_me
schema023canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshow
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
maxTextureDimension1DmaxTextureDimension2DmaxTextureDimension3DmaxTextureArrayLayersmaxBindGroupsmaxBindGroupsPlusVertexBuffersmaxBindingsPerBindGroupmaxDynamicUniformBuffersPerPipelineLayoutmaxDynami
R8UnormR8SnormR8UintR8SintR16UintR16SintR16UnormR16SnormR16FloatRg8UnormRg8SnormRg8UintRg8SintR32UintR32SintR32FloatRg16UintRg16SintRg16UnormRg16SnormRg16FloatRgba8UnormRgba8UnormSrgbRgba8SnormRgba8Ui
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
flag testalpha * baseColor.abaseColor.abloxdSpGlintTier(v.vEnchantRgbAndRotY.rgb)enchantmentColour(v.vEnchantRgbAndRotY, v.vPositionAndAnimTick, baseColor.rgb)bloxdSpEnchantSpeedbloxdSpLocalvec4f(v.vO
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 531,872 |
| `i32.const` | 223,584 |
| `local.tee` | 97,744 |
| `local.set` | 92,871 |
| `i32.load` | 91,944 |
| `i32.add` | 85,661 |
| `end` | 77,892 |
| `br_if` | 62,748 |
| `i32.store` | 46,190 |
| `block` | 36,663 |
| `i64.store` | 32,225 |
| `i64.const` | 31,439 |
| `if` | 29,791 |
| `call` | 29,452 |
| `i64.load` | 23,935 |
| `i32.sub` | 23,703 |
| `br` | 22,857 |
| `i32.eqz` | 18,605 |
| `select` | 16,337 |
| `i32.shl` | 16,061 |
| `i32.and` | 15,972 |
| `i32.ne` | 15,436 |
| `i32.load8_u` | 14,783 |
| `i32.eq` | 13,524 |
| `i32.store8` | 12,887 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 2,878/2,878 (degraded: 0)
