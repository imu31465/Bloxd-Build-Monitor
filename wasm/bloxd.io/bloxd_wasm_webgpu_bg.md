# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `wp3j0a.a13381cf` · analyzed 2026-11-25T16:44:13+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.638e64452004834eddd7.wasm
> 5,136,886 bytes (4.9 MB) · sha256 `67fd54aabb1d4d69…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,137,010 → 5,136,886 bytes (-124)
- code bytes 4,050,463 → 4,050,339
- name-section module id `050642c9951f3c7e.12285` → `bf1747fcbae11c56.12285` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,950 / 393 |
| Exports / imports | 160 / 394 |
| Code bytes (function bodies) | 4,050,339 (3.9 MB) |
| Total local variables | 30,815 |
| Instructions (scanable bodies) | 1,895,564 |
| Data segments / bytes | 3,545 / 1,040,170 |
| Element segments / entries | 1 / 838 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `bf1747fcbae11c56.12285` |
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
| 10 | code | 4,055,718 | 2950 |
| 11 | data | 1,068,847 | 3545 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `MX7T.J0BI` | memory | `[128..14648]` |
| 0 | `MX7T.MAAH` | func | `(i32) -> (i32)` |
| 1 | `MX7T.HDcN` | func | `(i32) -> (f64)` |
| 2 | `MX7T.GqUe` | func | `() -> (i32)` |
| 3 | `MX7T.W1oF` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `MX7T.NVYk` | func | `(i32) -> ()` |
| 5 | `MX7T.T4un` | func | `(i32 i32) -> (i32)` |
| 6 | `MX7T.vRYC` | func | `(i32) -> (i32)` |
| 7 | `MX7T.aarN` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `MX7T.jGB8` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `MX7T.Z9Az` | func | `(i32) -> (i32)` |
| 10 | `MX7T.S6gf` | func | `(i32 i32) -> ()` |
| 11 | `MX7T.TNfl` | func | `(i32 i32) -> ()` |
| 12 | `MX7T.bdg1` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `MX7T.npdD` | func | `(i32 i32) -> (i32)` |
| 14 | `MX7T.YAOe` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `MX7T.ePnf` | func | `(i32) -> (i32)` |
| 16 | `MX7T.xUOw` | func | `(i32 i32) -> (i32)` |
| 17 | `MX7T.lOZT` | func | `(i32 i32) -> (i32)` |
| 18 | `MX7T.PNMZ` | func | `(i32 i32) -> ()` |
| 19 | `MX7T.ybo6` | func | `(i32) -> (i32)` |
| 20 | `MX7T.HICu` | func | `(i32) -> (i32)` |
| 21 | `MX7T.X6QN` | func | `(i32 i32 i32) -> ()` |
| 22 | `MX7T.majP` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `MX7T.YObu` | func | `(i32) -> (i32)` |
| 24 | `MX7T.o6Bc` | func | `(i32) -> (i32)` |
| 25 | `MX7T.aCrh` | func | `(i32 i32) -> ()` |
| 26 | `MX7T.NhIP` | func | `(i32 i32) -> (i32)` |
| 27 | `MX7T.hgkw` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `MX7T.llQc` | func | `(i32) -> (i32)` |
| 29 | `MX7T.id3W` | func | `(i32) -> (i32)` |
| 30 | `MX7T.MCWu` | func | `(i32) -> (i32)` |
| 31 | `MX7T.Abta` | func | `(i32) -> (i32)` |
| 32 | `MX7T.cNSQ` | func | `(i32) -> (i32)` |
| 33 | `MX7T.knb8` | func | `(i32 i32 i32) -> ()` |
| 34 | `MX7T.QImB` | func | `(i32 i32) -> (i32)` |
| 35 | `MX7T.Gut2` | func | `(i32) -> (i32)` |
| 36 | `MX7T.dxJF` | func | `(i32) -> ()` |
| 37 | `MX7T.aSXi` | func | `(i32) -> (i32)` |
| 38 | `MX7T.eu0P` | func | `(i32) -> (i32)` |
| 39 | `MX7T.iaHQ` | func | `(i32) -> ()` |
| 40 | `MX7T.i2YX` | func | `(i32 i32) -> (i32)` |
| 41 | `MX7T.KuDj` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `MX7T.saFw` | func | `(i32) -> ()` |
| 43 | `MX7T.mper` | func | `(i32 i32) -> ()` |
| 44 | `MX7T.gYd9` | func | `() -> (i32)` |
| 45 | `MX7T.zycM` | func | `(i32 i32) -> (i32)` |
| 46 | `MX7T.VZ7y` | func | `(i32 i32) -> (i32)` |
| 47 | `MX7T.TJ5A` | func | `(i32) -> (i32)` |
| 48 | `MX7T.koc2` | func | `(i32) -> (i32)` |
| 49 | `MX7T.KIwR` | func | `(i32) -> (i32)` |
| 50 | `MX7T.UWlz` | func | `(i32 i32) -> ()` |
| 51 | `MX7T.fVMm` | func | `(i32) -> (i32)` |
| 52 | `MX7T.v1zn` | func | `(i32) -> ()` |
| 53 | `MX7T.JPt7` | func | `(i32 i32) -> (i32)` |
| 54 | `MX7T.u7lA` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `MX7T.DFsP` | func | `(i32) -> (i32)` |
| 56 | `MX7T.jPta` | func | `(i32 i32 i32) -> ()` |
| 57 | `MX7T.J9Fg` | func | `(i32 i32) -> ()` |
| 58 | `MX7T.jDh5` | func | `(i32) -> (i32)` |
| 59 | `MX7T.GpKc` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `MX7T.wDct` | func | `(i32) -> ()` |
| 61 | `MX7T.QJo8` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `MX7T.uvL9` | func | `(i32) -> ()` |
| 63 | `MX7T.jijX` | func | `(i32 i32 i32) -> ()` |
| 64 | `MX7T.WjkG` | func | `(i32 i32) -> ()` |
| 65 | `MX7T.Qfao` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `MX7T.hFgl` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `MX7T.qjwf` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `MX7T.UOqS` | func | `(i32 i32 f64) -> ()` |
| 69 | `MX7T.KVyX` | func | `(i32) -> (i32)` |
| 70 | `MX7T.CEuC` | func | `(i32 i32) -> ()` |
| 71 | `MX7T.Qzgo` | func | `(i32 i32 i32) -> ()` |
| 72 | `MX7T.z9Jy` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `MX7T.NNOd` | func | `(i32 i32 i32) -> ()` |
| 74 | `MX7T.AItQ` | func | `(i32) -> ()` |
| 75 | `MX7T.YKPB` | func | `(i32 i32) -> ()` |
| 76 | `MX7T.tQpB` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `MX7T.W7aE` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `MX7T.sWDA` | func | `(i32 i32 i32) -> ()` |
| 79 | `MX7T.dm1J` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `MX7T.A7BZ` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `MX7T.uuM7` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `MX7T.kyQ2` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `MX7T.gx0d` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `MX7T.bYxO` | func | `(i32 i32 i32) -> ()` |
| 85 | `MX7T.wizz` | func | `(i32 i32) -> (i32)` |
| 86 | `MX7T.IXuc` | func | `(i32) -> (i32)` |
| 87 | `MX7T.WcU6` | func | `(i32) -> (i32)` |
| 88 | `MX7T.Dffl` | func | `(i32) -> (i32)` |
| 89 | `MX7T.kmBA` | func | `(i32 i32) -> (i32)` |
| 90 | `MX7T.fk4j` | func | `(i32) -> ()` |
| 91 | `MX7T.XGvs` | func | `(i32) -> (i32)` |
| 92 | `MX7T.DmmT` | func | `(i32 i32) -> (i32)` |
| 93 | `MX7T.NhiD` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `MX7T.FQ4T` | func | `(i32 i32 i32) -> ()` |
| 95 | `MX7T.ezjf` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `MX7T.fA2K` | func | `() -> (f64)` |
| 97 | `MX7T.FTMD` | func | `() -> (f64)` |
| 98 | `MX7T.Wgp5` | func | `(i32 i32) -> ()` |
| 99 | `MX7T.ZmvR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `MX7T.zg8A` | func | `(i32) -> (i32)` |
| 101 | `MX7T.rsa3` | func | `(i32) -> (i32)` |
| 102 | `MX7T.xRWq` | func | `(i32) -> (i32)` |
| 103 | `MX7T.jSlW` | func | `() -> (i32)` |
| 104 | `MX7T.b9ic` | func | `() -> (i32)` |
| 105 | `MX7T.kFg5` | func | `() -> (i32)` |
| 106 | `MX7T.Ka9L` | func | `() -> (i32)` |
| 107 | `MX7T.FMh4` | func | `(i32 i32) -> (i32)` |
| 108 | `MX7T.oAsy` | func | `(i32) -> ()` |
| 109 | `MX7T.BVpI` | func | `(i32 i32) -> (i32)` |
| 110 | `MX7T.jxSI` | func | `(i32) -> (i32)` |
| 111 | `MX7T.TgEW` | func | `() -> (f64)` |
| 112 | `MX7T.a3Km` | func | `(i32) -> (i32)` |
| 113 | `MX7T.EmO9` | func | `(i32 i32) -> ()` |
| 114 | `MX7T.IlhJ` | func | `(i32 i32) -> ()` |
| 115 | `MX7T.eOUj` | func | `(i32 i32) -> ()` |
| 116 | `MX7T.aRQo` | func | `(i32 f32) -> ()` |
| 117 | `MX7T.kUYh` | func | `(i32 f32) -> ()` |
| 118 | `MX7T.PIyF` | func | `(i32 i32) -> ()` |
| 119 | `MX7T.bsHm` | func | `(i32 i32) -> ()` |
| 120 | `MX7T.Oijj` | func | `(i32 i32) -> ()` |
| 121 | `MX7T.hXiU` | func | `(i32 i32) -> ()` |
| 122 | `MX7T.FqvB` | func | `(i32 i32 i32) -> ()` |
| 123 | `MX7T.U36N` | func | `(i32 i32) -> (i32)` |
| 124 | `MX7T.LFx8` | func | `(i32 i32) -> ()` |
| 125 | `MX7T.sK0h` | func | `(i32 i32) -> ()` |
| 126 | `MX7T.I0kU` | func | `(i32 i32) -> ()` |
| 127 | `MX7T.hoaF` | func | `(i32 i32) -> ()` |
| 128 | `MX7T.n5pq` | func | `(i32 f64) -> ()` |
| 129 | `MX7T.XXMP` | func | `(i32 f64) -> ()` |
| 130 | `MX7T.Puf3` | func | `(i32 i32) -> ()` |
| 131 | `MX7T.oVuu` | func | `(i32 i32 i32) -> ()` |
| 132 | `MX7T.FBfB` | func | `(i32 i32) -> ()` |
| 133 | `MX7T.Z8Z8` | func | `(i32 i32) -> (i32)` |
| 134 | `MX7T.rfoM` | func | `(i32 i32 i32) -> ()` |
| 135 | `MX7T.rRrc` | func | `(i32 i32 i32) -> ()` |
| 136 | `MX7T.fhIL` | func | `(i32 i32) -> (i32)` |
| 137 | `MX7T.ZZTq` | func | `(i32 i32) -> (i32)` |
| 138 | `MX7T.hzA0` | func | `(i32 i32 i32) -> ()` |
| 139 | `MX7T.Hzxx` | func | `(i32 i32 i32) -> ()` |
| 140 | `MX7T.d0sE` | func | `(i32 i32) -> (i32)` |
| 141 | `MX7T.vwRp` | func | `(i32 i32) -> ()` |
| 142 | `MX7T.Ojng` | func | `(i32 i32) -> ()` |
| 143 | `MX7T.joaE` | func | `(i32 i32) -> ()` |
| 144 | `MX7T.z3mV` | func | `(i32 i32) -> ()` |
| 145 | `MX7T.bezh` | func | `(i32 i32) -> ()` |
| 146 | `MX7T.Ukw9` | func | `(i32 i32) -> ()` |
| 147 | `MX7T.J1zT` | func | `(i32 i32) -> ()` |
| 148 | `MX7T.plHY` | func | `(i32 f64) -> ()` |
| 149 | `MX7T.dRDN` | func | `(i32 i32) -> ()` |
| 150 | `MX7T.xhR5` | func | `(i32 i32) -> ()` |
| 151 | `MX7T.Xi16` | func | `(i32 i32) -> ()` |
| 152 | `MX7T.NCcS` | func | `(i32 i32) -> ()` |
| 153 | `MX7T.tKcF` | func | `(i32 i32) -> ()` |
| 154 | `MX7T.tU4W` | func | `(i32 i32) -> ()` |
| 155 | `MX7T.FV3d` | func | `(i32 i32) -> ()` |
| 156 | `MX7T.laPk` | func | `(i32 i32) -> ()` |
| 157 | `MX7T.iyv5` | func | `(i32 i32) -> ()` |
| 158 | `MX7T.C0wq` | func | `(i32 i32 i32) -> ()` |
| 159 | `MX7T.UBH8` | func | `(i32 i32 i32) -> ()` |
| 160 | `MX7T.sQoo` | func | `(i32 i32) -> (i32)` |
| 161 | `MX7T.FZEz` | func | `(i32 i32) -> (i32)` |
| 162 | `MX7T.ixYY` | func | `(i32 i32) -> ()` |
| 163 | `MX7T.wIVz` | func | `(i32 i32) -> ()` |
| 164 | `MX7T.VMdb` | func | `(i32 f64) -> ()` |
| 165 | `MX7T.cRZh` | func | `(i32 i32) -> ()` |
| 166 | `MX7T.Lg70` | func | `(i32 i32) -> ()` |
| 167 | `MX7T.YroH` | func | `(i32 i32) -> ()` |
| 168 | `MX7T.QzZ6` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `MX7T.EPKq` | func | `(i32 f64) -> ()` |
| 170 | `MX7T.mxX7` | func | `(i32 f64) -> ()` |
| 171 | `MX7T.NL8G` | func | `(i32 f64) -> ()` |
| 172 | `MX7T.eo17` | func | `(i32 f64) -> ()` |
| 173 | `MX7T.AS76` | func | `(i32 i32) -> ()` |
| 174 | `MX7T.aekt` | func | `(i32 i32) -> ()` |
| 175 | `MX7T.ZGN0` | func | `(i32 i32) -> ()` |
| 176 | `MX7T.hwxC` | func | `(i32 i32) -> ()` |
| 177 | `MX7T.dBX9` | func | `(i32 i32) -> ()` |
| 178 | `MX7T.weSM` | func | `(i32 i32 i32) -> ()` |
| 179 | `MX7T.mK1S` | func | `(i32 i32) -> ()` |
| 180 | `MX7T.RlGc` | func | `(i32 f32) -> ()` |
| 181 | `MX7T.rR5u` | func | `(i32 i32) -> ()` |
| 182 | `MX7T.BUQr` | func | `(i32 i32) -> ()` |
| 183 | `MX7T.Rx0e` | func | `(i32 i32) -> ()` |
| 184 | `MX7T.ddJO` | func | `(i32 i32) -> ()` |
| 185 | `MX7T.lH3S` | func | `(i32 i32) -> ()` |
| 186 | `MX7T.Ccqb` | func | `(i32 i32) -> ()` |
| 187 | `MX7T.qgmC` | func | `(i32 i32) -> ()` |
| 188 | `MX7T.ThHt` | func | `(i32 i32) -> ()` |
| 189 | `MX7T.ch7C` | func | `(i32 i32) -> ()` |
| 190 | `MX7T.SRlw` | func | `(i32 i32) -> ()` |
| 191 | `MX7T.U7CL` | func | `(i32 i32) -> ()` |
| 192 | `MX7T.ndeh` | func | `(i32 i32) -> ()` |
| 193 | `MX7T.SDKC` | func | `(i32 i32) -> (i32)` |
| 194 | `MX7T.KjNq` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `MX7T.W02j` | func | `(i32 i32) -> ()` |
| 196 | `MX7T.WalH` | func | `(i32 i32 i32) -> ()` |
| 197 | `MX7T.dxPB` | func | `(i32 i32) -> (i32)` |
| 198 | `MX7T.nHAg` | func | `(i32) -> (i32)` |
| 199 | `MX7T.qofp` | func | `(i32 i32) -> ()` |
| 200 | `MX7T.RqKc` | func | `(i32 i32) -> ()` |
| 201 | `MX7T.I649` | func | `(i32 i32) -> ()` |
| 202 | `MX7T.I2pi` | func | `(i32 i32) -> ()` |
| 203 | `MX7T.xd3i` | func | `(i32 i32) -> ()` |
| 204 | `MX7T.kU3q` | func | `(i32 i32) -> ()` |
| 205 | `MX7T.fnzQ` | func | `(i32 i32) -> ()` |
| 206 | `MX7T.RnOr` | func | `(i32 i32) -> ()` |
| 207 | `MX7T.mncf` | func | `(i32) -> (i32)` |
| 208 | `MX7T.YhvD` | func | `(i32 i32 i32) -> ()` |
| 209 | `MX7T.tmlW` | func | `(i32 i32) -> ()` |
| 210 | `MX7T.YlTX` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `MX7T.OudJ` | func | `(i32 i32) -> ()` |
| 212 | `MX7T.wUJ4` | func | `(i32) -> ()` |
| 213 | `MX7T.gffV` | func | `(i32 i32) -> ()` |
| 214 | `MX7T.lT2r` | func | `(i32) -> (i32)` |
| 215 | `MX7T.aCEA` | func | `(i32 i32 i32) -> ()` |
| 216 | `MX7T.tJQ4` | func | `(i32 i32) -> ()` |
| 217 | `MX7T.R5jJ` | func | `(i32 i32) -> ()` |
| 218 | `MX7T.YBjF` | func | `(i32 i32) -> ()` |
| 219 | `MX7T.NfQT` | func | `(i32 i32) -> ()` |
| 220 | `MX7T.Xc2W` | func | `(i32 i32) -> (i32)` |
| 221 | `MX7T.rSeM` | func | `(i32 i32) -> ()` |
| 222 | `MX7T.cc2B` | func | `(i32 i32) -> ()` |
| 223 | `MX7T.lyNd` | func | `(i32 i32) -> ()` |
| 224 | `MX7T.TsnT` | func | `(i32 i32) -> ()` |
| 225 | `MX7T.r98h` | func | `(i32 i32) -> ()` |
| 226 | `MX7T.jE5m` | func | `(i32 i32) -> ()` |
| 227 | `MX7T.TJTm` | func | `(i32 i32) -> ()` |
| 228 | `MX7T.jTeb` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `MX7T.kPE1` | func | `(i32) -> (i32)` |
| 230 | `MX7T.r8xk` | func | `(i32) -> ()` |
| 231 | `MX7T.Bsfm` | func | `(i32 f64) -> ()` |
| 232 | `MX7T.y0rq` | func | `(i32 i32) -> ()` |
| 233 | `MX7T.TmWR` | func | `(i32 i32) -> ()` |
| 234 | `MX7T.LBeC` | func | `(i32 i32 i32) -> ()` |
| 235 | `MX7T.D7V8` | func | `(i32 i32) -> (i32)` |
| 236 | `MX7T.b0hy` | func | `(i32 i32) -> ()` |
| 237 | `MX7T.ueYE` | func | `(i32 i32) -> ()` |
| 238 | `MX7T.FPua` | func | `(i32 i32) -> ()` |
| 239 | `MX7T.ikr8` | func | `(i32 i32 i32) -> ()` |
| 240 | `MX7T.inxW` | func | `(i32 i32) -> ()` |
| 241 | `MX7T.jWyp` | func | `(i32 i32) -> ()` |
| 242 | `MX7T.Kmnr` | func | `(i32 i32) -> ()` |
| 243 | `MX7T.o3TH` | func | `(i32 i32 i32) -> ()` |
| 244 | `MX7T.cPjs` | func | `(i32 i32) -> ()` |
| 245 | `MX7T.N2wY` | func | `(i32 i32) -> ()` |
| 246 | `MX7T.MhxI` | func | `(i32 i32 i32) -> ()` |
| 247 | `MX7T.gffn` | func | `(i32 i32) -> (i32)` |
| 248 | `MX7T.Jyac` | func | `(i32 i32) -> ()` |
| 249 | `MX7T.tdum` | func | `(i32 i32 i32) -> ()` |
| 250 | `MX7T.kbvz` | func | `(i32 i32) -> ()` |
| 251 | `MX7T.gVlh` | func | `(i32 f64) -> ()` |
| 252 | `MX7T.zgw9` | func | `(i32 i32) -> ()` |
| 253 | `MX7T.ZX08` | func | `(i32 f64) -> ()` |
| 254 | `MX7T.clKG` | func | `(i32 i32 i32) -> ()` |
| 255 | `MX7T.DQxG` | func | `(i32 i32) -> ()` |
| 256 | `MX7T.bnBV` | func | `(i32 i32 i32) -> ()` |
| 257 | `MX7T.E3DG` | func | `(i32 i32) -> ()` |
| 258 | `MX7T.VKZE` | func | `(i32 i32) -> ()` |
| 259 | `MX7T.lvnq` | func | `(i32 i32) -> ()` |
| 260 | `MX7T.Lj3V` | func | `(i32 i32 i32) -> ()` |
| 261 | `MX7T.kOfZ` | func | `(i32 i32) -> ()` |
| 262 | `MX7T.iifN` | func | `(i32 i32) -> ()` |
| 263 | `MX7T.KvMn` | func | `(i32 i32) -> ()` |
| 264 | `MX7T.hn8X` | func | `(i32 i32) -> ()` |
| 265 | `MX7T.Ucx8` | func | `(i32 f32) -> ()` |
| 266 | `MX7T.PHta` | func | `(i32 f32) -> ()` |
| 267 | `MX7T.Guli` | func | `(i32 i32) -> ()` |
| 268 | `MX7T.HwTZ` | func | `(i32 i32) -> ()` |
| 269 | `MX7T.UL30` | func | `(i32 i32) -> ()` |
| 270 | `MX7T.VG2V` | func | `(i32 i32) -> ()` |
| 271 | `MX7T.xUQj` | func | `(i32 i32) -> ()` |
| 272 | `MX7T.K8cN` | func | `(i32 i32) -> ()` |
| 273 | `MX7T.BtAc` | func | `(i32 i32) -> ()` |
| 274 | `MX7T.AFCQ` | func | `(i32 i32) -> ()` |
| 275 | `MX7T.RPRI` | func | `(i32 i32) -> ()` |
| 276 | `MX7T.ct97` | func | `(i32 i32) -> ()` |
| 277 | `MX7T.MCuX` | func | `(i32 i32) -> ()` |
| 278 | `MX7T.kKXq` | func | `(i32 i32) -> ()` |
| 279 | `MX7T.uRSc` | func | `(i32 i32) -> ()` |
| 280 | `MX7T.RH2C` | func | `(i32 i32) -> ()` |
| 281 | `MX7T.uG9K` | func | `(i32 i32) -> ()` |
| 282 | `MX7T.c6LJ` | func | `(i32 i32) -> ()` |
| 283 | `MX7T.Qdnr` | func | `(i32 i32) -> ()` |
| 284 | `MX7T.UckO` | func | `(i32 i32) -> ()` |
| 285 | `MX7T.KI99` | func | `(i32 i32 i32) -> ()` |
| 286 | `MX7T.V8Nx` | func | `(i32 i32 i32) -> ()` |
| 287 | `MX7T.IHDa` | func | `(i32 i32) -> ()` |
| 288 | `MX7T.o3Ud` | func | `(i32 i32) -> ()` |
| 289 | `MX7T.lt8F` | func | `(i32 i32) -> ()` |
| 290 | `MX7T.MEZu` | func | `(i32 i32) -> ()` |
| 291 | `MX7T.h8Ej` | func | `(i32 i32) -> ()` |
| 292 | `MX7T.BMKn` | func | `(i32 i32) -> ()` |
| 293 | `MX7T.ffOl` | func | `(i32 i32) -> ()` |
| 294 | `MX7T.lsFy` | func | `(i32 i32) -> ()` |
| 295 | `MX7T.IjaU` | func | `(i32 i32) -> ()` |
| 296 | `MX7T.isQe` | func | `(i32 i32) -> ()` |
| 297 | `MX7T.L3Qj` | func | `(i32 i32) -> ()` |
| 298 | `MX7T.kvmR` | func | `(i32 i32) -> (i32)` |
| 299 | `MX7T.Bh7q` | func | `(i32 i32) -> ()` |
| 300 | `MX7T.QbQ3` | func | `(i32 i32 i32) -> ()` |
| 301 | `MX7T.tHOs` | func | `(i32 i32) -> ()` |
| 302 | `MX7T.eFkt` | func | `(i32 i32) -> ()` |
| 303 | `MX7T.xh9C` | func | `(i32 i32) -> ()` |
| 304 | `MX7T.FovQ` | func | `(i32 i32 i32) -> ()` |
| 305 | `MX7T.inlP` | func | `(i32 i32) -> (i32)` |
| 306 | `MX7T.iyeH` | func | `(i32 i32 i32) -> ()` |
| 307 | `MX7T.m9Sc` | func | `(i32 i32 i32) -> ()` |
| 308 | `MX7T.UkcD` | func | `(i32 i32) -> ()` |
| 309 | `MX7T.infL` | func | `(i32 i32) -> ()` |
| 310 | `MX7T.jyLV` | func | `(i32 i32) -> ()` |
| 311 | `MX7T.ySoF` | func | `(i32 i32) -> ()` |
| 312 | `MX7T.zDv6` | func | `(i32 i32) -> (i32)` |
| 313 | `MX7T.mjhS` | func | `(i32) -> (i32)` |
| 314 | `MX7T.YBdl` | func | `(i32) -> (i32)` |
| 315 | `MX7T.SW8m` | func | `(i32) -> (i32)` |
| 316 | `MX7T.d3CU` | func | `(i32) -> (i32)` |
| 317 | `MX7T.rsmR` | func | `(i32) -> (i32)` |
| 318 | `MX7T.XXEJ` | func | `(i32) -> (i32)` |
| 319 | `MX7T.LUUo` | func | `(i32) -> (i32)` |
| 320 | `MX7T.bfS2` | func | `(i32) -> (i32)` |
| 321 | `MX7T.H2SN` | func | `(i32) -> (i32)` |
| 322 | `MX7T.AZ7j` | func | `(i32) -> (i32)` |
| 323 | `MX7T.MXkJ` | func | `(i32) -> (i32)` |
| 324 | `MX7T.nwMe` | func | `(i32) -> (i32)` |
| 325 | `MX7T.z8jE` | func | `(i32) -> (i32)` |
| 326 | `MX7T.b1a7` | func | `(i32) -> (i32)` |
| 327 | `MX7T.q1ut` | func | `(i32) -> (f64)` |
| 328 | `MX7T.BwJw` | func | `(i32) -> (f64)` |
| 329 | `MX7T.dXev` | func | `(i32) -> (i32)` |
| 330 | `MX7T.T768` | func | `(i32) -> (f64)` |
| 331 | `MX7T.y8yg` | func | `(i32) -> (i32)` |
| 332 | `MX7T.Ig1d` | func | `(i32) -> (i32)` |
| 333 | `MX7T.d1Ro` | func | `(i32) -> (i32)` |
| 334 | `MX7T.ZuS8` | func | `(i32) -> (i32)` |
| 335 | `MX7T.hU1z` | func | `(i32) -> (i32)` |
| 336 | `MX7T.CTe6` | func | `(i32) -> (i32)` |
| 337 | `MX7T.vBWj` | func | `(i32) -> (i32)` |
| 338 | `MX7T.MUns` | func | `(i32) -> (i32)` |
| 339 | `MX7T.pM7i` | func | `(i32) -> (i32)` |
| 340 | `MX7T.xSUL` | func | `(i32) -> (i32)` |
| 341 | `MX7T.HUfk` | func | `(i32) -> (i32)` |
| 342 | `MX7T.vyfo` | func | `(i32) -> (i32)` |
| 343 | `MX7T.eO7x` | func | `(i32) -> (i32)` |
| 344 | `MX7T.PcLq` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `MX7T.qfdL` | func | `() -> (i32)` |
| 346 | `MX7T.NZsO` | func | `(i32 i32) -> ()` |
| 347 | `MX7T.FzQc` | func | `(i32 i32 i32) -> ()` |
| 348 | `MX7T.X93L` | func | `(i32 i32 i32) -> ()` |
| 349 | `MX7T.IrHL` | func | `(i32 i32) -> (i32)` |
| 350 | `MX7T.fChl` | func | `(i32) -> (i32)` |
| 351 | `MX7T.QSXi` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `MX7T.bUfF` | func | `(i32) -> ()` |
| 353 | `MX7T.ksjX` | func | `(i32) -> (i32)` |
| 354 | `MX7T.EMRC` | func | `(i32 i32) -> ()` |
| 355 | `MX7T.eF8Q` | func | `(i32) -> (i32)` |
| 356 | `MX7T.KplK` | func | `(i32) -> (i32)` |
| 357 | `MX7T.xpQ5` | func | `(i32) -> (i32)` |
| 358 | `MX7T.pizt` | func | `(i32) -> (i32)` |
| 359 | `MX7T.NKZk` | func | `(i32) -> (i32)` |
| 360 | `MX7T.cWE3` | func | `(i32 i32) -> ()` |
| 361 | `MX7T.Cf19` | func | `(i32 i32) -> ()` |
| 362 | `MX7T.tlmx` | func | `(i32 i32) -> ()` |
| 363 | `MX7T.TxVD` | func | `(i32 i32) -> ()` |
| 364 | `MX7T.G00y` | func | `(i32 i32) -> ()` |
| 365 | `MX7T.YeyA` | func | `(i32 i32) -> ()` |
| 366 | `MX7T.qkQT` | func | `(i32 i32) -> ()` |
| 367 | `MX7T.eiVK` | func | `(i32 i32 i32) -> ()` |
| 368 | `MX7T.t9LC` | func | `(i32 i32) -> ()` |
| 369 | `MX7T.BFfF` | func | `(i32 i32) -> (i32)` |
| 370 | `MX7T.gbkk` | func | `(i32) -> (i32)` |
| 371 | `MX7T.ngAZ` | func | `(i32) -> (i32)` |
| 372 | `MX7T.TBL3` | func | `(i32 i32) -> ()` |
| 373 | `MX7T.IOoQ` | func | `(i32) -> (i32)` |
| 374 | `MX7T.AAzP` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `MX7T.dD9T` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `MX7T.fTuQ` | func | `(i32 i32) -> ()` |
| 377 | `MX7T.z5yK` | func | `(i32) -> (i32)` |
| 378 | `MX7T.Amlh` | func | `(i32) -> (i32)` |
| 379 | `MX7T.g4qR` | func | `(i32) -> (i32)` |
| 380 | `MX7T.d1ez` | func | `(i32) -> (i32)` |
| 381 | `MX7T.xYyF` | func | `(i32) -> (i32)` |
| 382 | `MX7T.Vq8R` | func | `(i32) -> (i32)` |
| 383 | `MX7T.hgcW` | func | `(i32 i32) -> ()` |
| 384 | `MX7T.c5T0` | func | `(i32 i32) -> (i32)` |
| 385 | `MX7T.reo4` | func | `(i32 i32) -> (i32)` |
| 386 | `MX7T.EIHy` | func | `(i32 i32) -> (i32)` |
| 387 | `MX7T.Grq2` | func | `(i32 i32) -> (i32)` |
| 388 | `MX7T.y6v3` | func | `(i32 i32) -> (i32)` |
| 389 | `MX7T.xUR0` | func | `(i32 i32) -> (i32)` |
| 390 | `MX7T.JAgh` | func | `(f64) -> (i32)` |
| 391 | `MX7T.kzDU` | func | `(i32 i32) -> (i32)` |
| 392 | `MX7T.nPQ3` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `eQoK` | func | 1519 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `zSyh` | func | 3301 | `() -> (f64)` |
| `o0RP` | func | 1592 | `(i32 i32) -> (i32)` |
| `cZfc` | func | 3255 | `(i32) -> ()` |
| `g6Iq` | func | 1982 | `(i32) -> ()` |
| `Xv4c` | func | 1345 | `(i32 i32 i32) -> (i32)` |
| `r44Y` | func | 2634 | `(i32 i32) -> ()` |
| `PCq0` | func | 1466 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `oLNV` | func | 3135 | `(i32) -> (i32 i32)` |
| `sD3m` | func | 1417 | `(i32 i32 i32) -> (i32)` |
| `NbfL` | func | 2684 | `(i32 i32) -> ()` |
| `zmHL` | func | 3136 | `(i32) -> (i32 i32)` |
| `rF5U` | func | 3084 | `(i32 i32) -> (i32)` |
| `xoti` | func | 2420 | `(i32 i32) -> (i32)` |
| `uwfO` | func | 1200 | `(i32 i32) -> (i32)` |
| `WJ0m` | func | 1377 | `(i32 i32) -> (i32)` |
| `NBID` | func | 3121 | `(i32 i32) -> (i32 i32)` |
| `c1vg` | func | 1492 | `(i32 i32) -> (i32)` |
| `nj6b` | func | 2592 | `(i32) -> (i32)` |
| `fe0v` | func | 2423 | `(i32 i32) -> (i32)` |
| `nmlq` | func | 897 | `(i32 i32) -> (i32)` |
| `LoNJ` | func | 1834 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `T4or` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `uoZn` | func | 759 | `(i32 i32) -> (i32)` |
| `uiQB` | func | 2601 | `(i32) -> (i32)` |
| `hWQE` | func | 1560 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Jb0j` | func | 3152 | `() -> (i32 i32)` |
| `eQiP` | func | 2544 | `(i32 i32) -> ()` |
| `hcYH` | func | 3134 | `(i32) -> (i32 i32)` |
| `EK51` | func | 1983 | `(i32) -> ()` |
| `mh4U` | func | 3177 | `(i32 i32 i32 i32) -> ()` |
| `z30T` | func | 2583 | `(i32) -> (i32)` |
| `A1vc` | func | 1788 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `e4EP` | func | 2593 | `(i32 i32) -> (i32)` |
| `keWK` | func | 2567 | `(i32) -> ()` |
| `KqLi` | func | 1201 | `(i32 i32) -> ()` |
| `JdAU` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `lViy` | func | 2157 | `(i32 i32) -> (i32)` |
| `iqwp` | func | 2584 | `(i32) -> (i32)` |
| `G7W1` | func | 2270 | `(i32 i32) -> (i32)` |
| `LukL` | func | 2685 | `() -> (i32)` |
| `M5rv` | func | 2342 | `(i32 f64) -> (i32)` |
| `IXif` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `y08J` | func | 3150 | `() -> (i32 i32)` |
| `Soux` | func | 1951 | `(i32 i32 f64 f64 f64) -> ()` |
| `fztU` | func | 1681 | `(i32 i32) -> ()` |
| `yOK8` | func | 2560 | `(i32) -> (f64)` |
| `bqhd` | func | 2231 | `(i32 i32) -> (i32)` |
| `IyiR` | func | 2562 | `(i32) -> (i32)` |
| `MQq1` | func | 2368 | `(i32 i32) -> ()` |
| `xyh3` | func | 1906 | `() -> (i32)` |
| `gVlk` | func | 2422 | `(i32 i32) -> (i32)` |
| `AiPp` | func | 3151 | `() -> (i32 i32)` |
| `prIY` | func | 2466 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `xriF` | func | 3306 | `(i32) -> ()` |
| `WssA` | func | 2579 | `(i32 i32) -> ()` |
| `Eia7` | func | 2044 | `(i32) -> (i32)` |
| `LoPB` | func | 2079 | `(i32 i32) -> ()` |
| `NlgO` | func | 3138 | `(i32) -> (i32 i32)` |
| `JKB0` | func | 1578 | `(i32 i32) -> (i32)` |
| `M09M` | func | 1565 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `drGf` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `h0f3` | func | 1546 | `(i32 i32 i32 i32) -> ()` |
| `l0Te` | func | 3216 | `() -> (i32)` |
| `zbdl` | func | 830 | `(i32) -> (i32)` |
| `F9Mv` | func | 2421 | `(i32 i32) -> (i32)` |
| `igMb` | func | 2135 | `(i32 i32) -> ()` |
| `RA2X` | func | 1297 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `memory` | memory | 0 | `` |
| `etSv` | func | 2564 | `(i32) -> (i32)` |
| `Pb4g` | func | 3186 | `(i32 i32 i32) -> (i32)` |
| `MZdp` | func | 2545 | `(i32) -> (i32)` |
| `YhBD` | func | 3124 | `(i32 i32) -> (i32 i32)` |
| `nL9q` | func | 3125 | `(i32 i32) -> (i32 i32)` |
| `vzFu` | func | 2341 | `(i32 i32) -> ()` |
| `O6Jg` | func | 3090 | `(i32 i32 i32 i32) -> (i32)` |
| `k6wm` | func | 1913 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `brET` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `gOVD` | func | 1305 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `ARPe` | func | 2104 | `(i32 f64) -> (i32)` |
| `ADpZ` | func | 660 | `(i32 i32 i32) -> (i32)` |
| `anH4` | func | 1670 | `(i32 i32) -> (i32)` |
| `buU1` | func | 1571 | `(i32) -> (i32)` |
| `F9SD` | func | 2873 | `(i32) -> (i32)` |
| `wcQw` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `C0nh` | func | 2561 | `(i32) -> (i32)` |
| `M7nR` | global | 2 | `` |
| `RfZ5` | func | 2602 | `(i32) -> (i32)` |
| `PJoL` | func | 1403 | `(i32) -> ()` |
| `AY3H` | func | 969 | `(i32 i32) -> (i32)` |
| `sQSX` | func | 2901 | `(i32) -> (i32)` |
| `GsYB` | func | 1968 | `(i32 i32) -> (i32)` |
| `MM0n` | func | 3127 | `(i32 i32) -> (i32 i32)` |
| `IcdW` | func | 3122 | `(i32 i32) -> (i32 i32)` |
| `joah` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `TPjM` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `Am5V` | func | 2594 | `(i32 i32) -> (i32)` |
| `gEpK` | func | 3096 | `(i32 i32) -> ()` |
| `IVJN` | func | 2936 | `(i32) -> (i32)` |
| `mChB` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `Hkgc` | func | 3330 | `() -> (i32)` |
| `pjlO` | func | 1298 | `(i32 i32 i32 i32) -> (i32)` |
| `fWrp` | func | 1810 | `(i32) -> (i32)` |
| `fBzt` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `cjxG` | func | 1605 | `(i32 i32) -> (i32)` |
| `Bw1M` | func | 1606 | `(i32 i32) -> (i32)` |
| `CcB4` | func | 2890 | `(i32) -> (i32)` |
| `TiW6` | func | 2569 | `(i32) -> (i32)` |
| `x02E` | func | 3123 | `(i32 i32) -> (i32 i32)` |
| `U2Be` | func | 2603 | `(i32) -> (i32)` |
| `OnHL` | func | 1349 | `(i32 i32 i32) -> ()` |
| `ENvf` | func | 1680 | `(i32 i32) -> ()` |
| `sL4J` | func | 1828 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `cW1y` | func | 2568 | `(i32) -> (i32)` |
| `KnkA` | global | 1 | `` |
| `vQcc` | func | 2456 | `(i32 i32) -> (i32)` |
| `SQJv` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `nEZf` | func | 1685 | `(i32 f64 f64 f64) -> (i32)` |
| `RVaG` | func | 770 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `LcNj` | func | 2913 | `(i32) -> ()` |
| `pylb` | func | 1847 | `(i32 i32) -> (i32)` |
| `o8z4` | func | 2565 | `(i32) -> (i32)` |
| `w3TQ` | func | 1975 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `e32J` | func | 1723 | `(i32 i32 i32 i32) -> (i32)` |
| `Lg9v` | func | 3137 | `(i32) -> (i32 i32)` |
| `ViGJ` | func | 3126 | `(i32 i32) -> (i32 i32)` |
| `fCJh` | func | 1957 | `(i32 i32) -> ()` |
| `FELL` | func | 1524 | `() -> (i32)` |
| `ReZL` | func | 1527 | `(i32) -> (i32)` |
| `D9fs` | func | 1570 | `(i32 i32 i32 i32) -> (i32)` |
| `DRaF` | func | 2586 | `(i32) -> (i32)` |
| `PJ1d` | func | 2027 | `(i32) -> (i32)` |
| `aj9e` | func | 2119 | `(i32 f64 f64 f64) -> (i32)` |
| `DL2t` | func | 2566 | `(i32) -> (i32)` |
| `vnRN` | func | 2651 | `() -> (i32)` |
| `gVcg` | func | 3064 | `() -> ()` |
| `R6Nk` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `Yp8c` | func | 2585 | `(i32 i32) -> ()` |
| `igN2` | func | 2563 | `(i32) -> (i32)` |
| `vCJ9` | func | 1257 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ChyZ` | func | 798 | `(i32 i32) -> (i32)` |
| `BcTC` | func | 1371 | `(i32) -> (i32)` |
| `wFb2` | func | 2046 | `(i32 i32 i32 i32) -> ()` |
| `rYgM` | func | 3305 | `(i32) -> (i32)` |
| `nNuf` | func | 3246 | `(i32 i32 i32) -> ()` |
| `Wvdf` | func | 1608 | `(i32 f64) -> (f64)` |
| `Ow88` | func | 2290 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ndyF` | func | 2515 | `(i32) -> (i32)` |
| `yJ8M` | func | 2498 | `(i32) -> (i32)` |
| `gX3P` | func | 3257 | `() -> ()` |
| `JJXd` | func | 1327 | `(i32 i32) -> (i32)` |
| `fYfN` | func | 1640 | `(i32 i32 i32 i32) -> (i32)` |
| `iwox` | func | 2570 | `(i32) -> (i32)` |
| `UUHZ` | func | 3188 | `(i32 i32 i32) -> ()` |
| `XKtv` | func | 2865 | `(i32) -> (i32)` |
| `hp0w` | func | 3329 | `() -> (i32)` |
| `PAvv` | func | 1929 | `(i32 i32 i32 i32) -> (i32)` |
| `wnuN` | func | 1467 | `(i32 f64 f64) -> (i32)` |
| `sPf4` | func | 1619 | `(i32 i32 i32) -> (i32)` |
| `ygDy` | func | 2471 | `(i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 839 · max 839
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2248680, `i32` = i32.const 2249252

## Functions

- 2,950 bodies · 4,050,339 code bytes · avg 1.3 KB
- instruction scan: 2,950 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 114 |
| <= 128 bytes | 276 |
| <= 256 bytes | 387 |
| <= 512 bytes | 667 |
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
| 1967 | `(i32 i32) -> ()` | 110 | 40,258 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
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
| `local.get` | 541,641 |
| `i32.const` | 227,845 |
| `local.tee` | 99,615 |
| `local.set` | 94,549 |
| `i32.load` | 93,436 |
| `i32.add` | 87,158 |
| `end` | 79,379 |
| `br_if` | 63,867 |
| `i32.store` | 46,985 |
| `block` | 37,343 |
| `i64.store` | 32,822 |
| `i64.const` | 32,171 |
| `if` | 30,364 |
| `call` | 30,171 |
| `i64.load` | 24,365 |
| `i32.sub` | 24,159 |
| `br` | 23,246 |
| `i32.eqz` | 19,074 |
| `select` | 16,753 |
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
