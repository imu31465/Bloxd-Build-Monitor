# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `yma3ej.f92ebd70` · analyzed 2026-11-25T04:31:11+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.8b408ec1964914e60d4e.wasm
> 4,851,495 bytes (4.6 MB) · sha256 `74b3f9f1c13416de…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `e432d9585609a142.10601` → `ed549cb5c3a63f60.10601` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,869 / 282 |
| Exports / imports | 157 / 283 |
| Code bytes (function bodies) | 4,001,682 (3.8 MB) |
| Total local variables | 30,513 |
| Instructions (scanable bodies) | 1,877,604 |
| Data segments / bytes | 3,772 / 803,426 |
| Element segments / entries | 1 / 732 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `ed549cb5c3a63f60.10601` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,486 | 174 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,917 | 2869 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,471 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,006,947 | 2869 |
| 11 | data | 833,911 | 3772 |
| 0 | custom:name | 30 | — |

## Types

174 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Wr0t.UyEw` | memory | `[128..14648]` |
| 0 | `Wr0t.K417` | func | `(i32) -> (f64)` |
| 1 | `Wr0t.kUAb` | func | `() -> (i32)` |
| 2 | `Wr0t.vS6A` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `Wr0t.XrNP` | func | `(i32) -> ()` |
| 4 | `Wr0t.LEQI` | func | `(i32 i32) -> (i32)` |
| 5 | `Wr0t.Dhpd` | func | `(i32) -> (i32)` |
| 6 | `Wr0t.nUDc` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `Wr0t.O1T6` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `Wr0t.Tevn` | func | `(i32) -> (i32)` |
| 9 | `Wr0t.BzZ5` | func | `(i32 i32) -> ()` |
| 10 | `Wr0t.WfcC` | func | `(i32 i32) -> ()` |
| 11 | `Wr0t.M2fy` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `Wr0t.Aykh` | func | `(i32 i32) -> (i32)` |
| 13 | `Wr0t.gcGb` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `Wr0t.kT8d` | func | `(i32) -> (i32)` |
| 15 | `Wr0t.fWQq` | func | `(i32 i32) -> (i32)` |
| 16 | `Wr0t.NAvn` | func | `(i32 i32) -> (i32)` |
| 17 | `Wr0t.Nemt` | func | `(i32 i32) -> ()` |
| 18 | `Wr0t.U5s4` | func | `(i32) -> (i32)` |
| 19 | `Wr0t.Sm4M` | func | `(i32) -> (i32)` |
| 20 | `Wr0t.FaaH` | func | `(i32) -> (i32)` |
| 21 | `Wr0t.oR0r` | func | `(i32) -> ()` |
| 22 | `Wr0t.zF8O` | func | `(i32 i32) -> ()` |
| 23 | `Wr0t.v4Dz` | func | `(i32 i32) -> ()` |
| 24 | `Wr0t.DVoT` | func | `(i32) -> (i32)` |
| 25 | `Wr0t.i6Gn` | func | `(i32 i32) -> ()` |
| 26 | `Wr0t.qEOO` | func | `(i32 i32) -> (i32)` |
| 27 | `Wr0t.JVYC` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `Wr0t.JtDb` | func | `(i32 i32) -> (i32)` |
| 29 | `Wr0t.eDiA` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `Wr0t.xixD` | func | `(i32) -> (i32)` |
| 31 | `Wr0t.a4dN` | func | `(i32 i32) -> ()` |
| 32 | `Wr0t.lhgL` | func | `(i32) -> (i32)` |
| 33 | `Wr0t.GZfp` | func | `(i32) -> (i32)` |
| 34 | `Wr0t.v7iC` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `Wr0t.ATf1` | func | `(i32) -> (i32)` |
| 36 | `Wr0t.cCC9` | func | `(i32) -> (i32)` |
| 37 | `Wr0t.wBJG` | func | `(i32) -> (i32)` |
| 38 | `Wr0t.kXPy` | func | `(i32 i32) -> (i32)` |
| 39 | `Wr0t.HN1k` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `Wr0t.SlZE` | func | `(i32) -> (i32)` |
| 41 | `Wr0t.mTI6` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `Wr0t.WuT1` | func | `() -> (f64)` |
| 43 | `Wr0t.HWfi` | func | `(i32) -> (i32)` |
| 44 | `Wr0t.pQLS` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `Wr0t.JU5u` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `Wr0t.qDAA` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `Wr0t.VWb8` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `Wr0t.aObh` | func | `(i32 i32 i32) -> ()` |
| 49 | `Wr0t.Mbcl` | func | `(i32 i32 i32) -> ()` |
| 50 | `Wr0t.w8uq` | func | `(i32 i32 i32) -> ()` |
| 51 | `Wr0t.ibtt` | func | `(i32 i32) -> ()` |
| 52 | `Wr0t.yqYa` | func | `(i32 i32) -> ()` |
| 53 | `Wr0t.K4lt` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `Wr0t.j0eS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `Wr0t.WY9i` | func | `(i32 f32 f32) -> ()` |
| 56 | `Wr0t.vms8` | func | `(i32 f32 f32) -> ()` |
| 57 | `Wr0t.eNkU` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `Wr0t.T0il` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `Wr0t.pafX` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `Wr0t.i9Jk` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `Wr0t.bnD7` | func | `(i32 i32 i32) -> ()` |
| 62 | `Wr0t.jumv` | func | `(i32 i32 i32) -> ()` |
| 63 | `Wr0t.To6P` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `Wr0t.vj49` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `Wr0t.yamr` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `Wr0t.siai` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `Wr0t.tRF2` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `Wr0t.x8PF` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `Wr0t.idZT` | func | `(i32) -> (i32)` |
| 70 | `Wr0t.fDuk` | func | `(i32) -> ()` |
| 71 | `Wr0t.S8pb` | func | `(i32) -> (i32)` |
| 72 | `Wr0t.aG1Y` | func | `(i32 i32) -> (i32)` |
| 73 | `Wr0t.EPMF` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `Wr0t.nWux` | func | `(i32 i32 i32) -> ()` |
| 75 | `Wr0t.fPLR` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `Wr0t.QAk0` | func | `() -> (f64)` |
| 77 | `Wr0t.Ykfv` | func | `() -> (f64)` |
| 78 | `Wr0t.ZbWm` | func | `(i32 i32) -> ()` |
| 79 | `Wr0t.iwCJ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `Wr0t.QkUz` | func | `(i32 i32 i32) -> ()` |
| 81 | `Wr0t.EMh3` | func | `(i32 i32 i32) -> ()` |
| 82 | `Wr0t.QUuB` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `Wr0t.KuYH` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `Wr0t.eYdJ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `Wr0t.pwTl` | func | `(i32 i32) -> ()` |
| 86 | `Wr0t.lxCQ` | func | `(i32 i32) -> ()` |
| 87 | `Wr0t.zCgD` | func | `(i32) -> (i32)` |
| 88 | `Wr0t.p84r` | func | `(i32 i32) -> ()` |
| 89 | `Wr0t.kRaE` | func | `(i32 i32) -> ()` |
| 90 | `Wr0t.BRT8` | func | `(i32 i32 i32) -> ()` |
| 91 | `Wr0t.zmuZ` | func | `(i32 i32 i32) -> ()` |
| 92 | `Wr0t.G0no` | func | `(i32) -> (i32)` |
| 93 | `Wr0t.PDh7` | func | `(i32) -> (i32)` |
| 94 | `Wr0t.Nb2c` | func | `(i32 i32) -> (i32)` |
| 95 | `Wr0t.yhSp` | func | `(i32 i32) -> (i32)` |
| 96 | `Wr0t.e9Lf` | func | `(i32 i32) -> ()` |
| 97 | `Wr0t.VgXa` | func | `(i32 i32) -> ()` |
| 98 | `Wr0t.y7bU` | func | `(i32 i32 i32) -> ()` |
| 99 | `Wr0t.oVrg` | func | `(i32 i32 i32) -> ()` |
| 100 | `Wr0t.qfB8` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `Wr0t.RAyM` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `Wr0t.mImr` | func | `(i32 i32 f32) -> ()` |
| 103 | `Wr0t.P7aV` | func | `(i32 i32 f32) -> ()` |
| 104 | `Wr0t.yBSK` | func | `(i32 i32 i32) -> ()` |
| 105 | `Wr0t.icxt` | func | `(i32 i32 i32) -> ()` |
| 106 | `Wr0t.Nn3Y` | func | `(i32 i32 i32) -> ()` |
| 107 | `Wr0t.dwx5` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `Wr0t.a7df` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `Wr0t.hvpr` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `Wr0t.jEHg` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `Wr0t.GxkV` | func | `(i32 i32) -> ()` |
| 112 | `Wr0t.sbeA` | func | `(i32 i32) -> ()` |
| 113 | `Wr0t.B9J5` | func | `(i32 i32) -> ()` |
| 114 | `Wr0t.qXP6` | func | `(i32 i32) -> ()` |
| 115 | `Wr0t.Pl0m` | func | `(i32) -> (i32)` |
| 116 | `Wr0t.apTx` | func | `(i32) -> (i32)` |
| 117 | `Wr0t.M0iR` | func | `(i32) -> (i32)` |
| 118 | `Wr0t.kmpc` | func | `(i32) -> (i32)` |
| 119 | `Wr0t.LeQn` | func | `(i32 i32) -> ()` |
| 120 | `Wr0t.Jc7t` | func | `(i32 i32) -> ()` |
| 121 | `Wr0t.XID1` | func | `(i32 i32) -> ()` |
| 122 | `Wr0t.ejSx` | func | `(i32 i32) -> ()` |
| 123 | `Wr0t.VAHo` | func | `(i32 i32) -> ()` |
| 124 | `Wr0t.N1Zs` | func | `(i32 i32) -> ()` |
| 125 | `Wr0t.E6yi` | func | `(i32 i32) -> (i32)` |
| 126 | `Wr0t.l8bA` | func | `(i32 i32) -> (i32)` |
| 127 | `Wr0t.Itrk` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `Wr0t.PsVb` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `Wr0t.r4a9` | func | `(i32 i32) -> ()` |
| 130 | `Wr0t.BABP` | func | `(i32 i32) -> ()` |
| 131 | `Wr0t.RhE2` | func | `(i32) -> (i32)` |
| 132 | `Wr0t.HSYj` | func | `(i32 i32) -> ()` |
| 133 | `Wr0t.rguG` | func | `(i32 i32) -> ()` |
| 134 | `Wr0t.xN4a` | func | `(i32 i32 i32) -> ()` |
| 135 | `Wr0t.h9Vn` | func | `(i32 i32 i32) -> ()` |
| 136 | `Wr0t.ikei` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `Wr0t.AH1m` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `Wr0t.CF3m` | func | `(i32 i32) -> ()` |
| 139 | `Wr0t.iqJz` | func | `(i32 i32 i32) -> ()` |
| 140 | `Wr0t.IBTL` | func | `(i32 i32 i32) -> ()` |
| 141 | `Wr0t.n1QI` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `Wr0t.ioy6` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `Wr0t.RsvO` | func | `(i32 i32 i32) -> ()` |
| 144 | `Wr0t.WUg5` | func | `(i32 i32 i32) -> ()` |
| 145 | `Wr0t.DAMi` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `Wr0t.BXX6` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `Wr0t.Oeli` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `Wr0t.xRFB` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `Wr0t.jbNg` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `Wr0t.qrOr` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `Wr0t.nvDz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `Wr0t.OhQK` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `Wr0t.mOr2` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `Wr0t.H9WL` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `Wr0t.Qmgd` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `Wr0t.ROM0` | func | `(i32) -> (i32)` |
| 157 | `Wr0t.cyqM` | func | `(i32) -> (i32)` |
| 158 | `Wr0t.Aj7o` | func | `(i32) -> (i32)` |
| 159 | `Wr0t.MP74` | func | `(i32) -> (i32)` |
| 160 | `Wr0t.L0SK` | func | `() -> (i32)` |
| 161 | `Wr0t.WLGb` | func | `() -> (i32)` |
| 162 | `Wr0t.VyNV` | func | `() -> (i32)` |
| 163 | `Wr0t.TAUQ` | func | `() -> (i32)` |
| 164 | `Wr0t.x7oE` | func | `(i32 i32) -> (i32)` |
| 165 | `Wr0t.VaCC` | func | `(i32) -> ()` |
| 166 | `Wr0t.XUMq` | func | `(i32 i32) -> (i32)` |
| 167 | `Wr0t.HWqM` | func | `(i32) -> (i32)` |
| 168 | `Wr0t.BHUl` | func | `(i32) -> (i32)` |
| 169 | `Wr0t.r4Wx` | func | `(i32) -> (i32)` |
| 170 | `Wr0t.iANv` | func | `(i32) -> ()` |
| 171 | `Wr0t.ScnQ` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `Wr0t.cdUm` | func | `(i32) -> (i32)` |
| 173 | `Wr0t.B1P7` | func | `(i32) -> (i32)` |
| 174 | `Wr0t.aw3q` | func | `(i32 i32) -> (i32)` |
| 175 | `Wr0t.Z2ve` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `Wr0t.QECg` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `Wr0t.JaAj` | func | `(i32) -> (i32)` |
| 178 | `Wr0t.J7N0` | func | `(i32) -> (i32)` |
| 179 | `Wr0t.u2zI` | func | `(i32) -> (i32)` |
| 180 | `Wr0t.rKG2` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `Wr0t.em9R` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `Wr0t.Yk98` | func | `(i32 i32) -> ()` |
| 183 | `Wr0t.Oez7` | func | `(i32 i32 i32) -> ()` |
| 184 | `Wr0t.OCgB` | func | `(i32 i32) -> ()` |
| 185 | `Wr0t.OMkR` | func | `(i32 i32 i32) -> ()` |
| 186 | `Wr0t.rHbf` | func | `(i32 i32) -> ()` |
| 187 | `Wr0t.gmti` | func | `(i32 i32) -> ()` |
| 188 | `Wr0t.MWME` | func | `(i32) -> (i32)` |
| 189 | `Wr0t.vWWR` | func | `(i32 i32) -> (i32)` |
| 190 | `Wr0t.vhsb` | func | `(i32) -> ()` |
| 191 | `Wr0t.Mg8T` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `Wr0t.EJDe` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `Wr0t.rTjH` | func | `(i32 i32) -> ()` |
| 194 | `Wr0t.lT4K` | func | `(i32 i32) -> ()` |
| 195 | `Wr0t.SCme` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `Wr0t.OBi3` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `Wr0t.Y0uQ` | func | `(i32 f32) -> ()` |
| 198 | `Wr0t.i72U` | func | `(i32 f32) -> ()` |
| 199 | `Wr0t.zqpJ` | func | `(i32 i32) -> ()` |
| 200 | `Wr0t.I7h3` | func | `(i32 i32) -> ()` |
| 201 | `Wr0t.hIU1` | func | `(i32) -> (i32)` |
| 202 | `Wr0t.O7d2` | func | `(i32) -> (i32)` |
| 203 | `Wr0t.x0z3` | func | `(i32) -> (i32)` |
| 204 | `Wr0t.SGUQ` | func | `(i32) -> (i32)` |
| 205 | `Wr0t.DmLi` | func | `(i32 i32 i32) -> ()` |
| 206 | `Wr0t.tivs` | func | `(i32 i32 i32) -> ()` |
| 207 | `Wr0t.ZlbE` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `Wr0t.oVCO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `Wr0t.mBsX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `Wr0t.rEj8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `Wr0t.EFD0` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `Wr0t.f3hJ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `Wr0t.ZpxI` | func | `(i32 i32) -> ()` |
| 214 | `Wr0t.FAXa` | func | `(i32 i32) -> ()` |
| 215 | `Wr0t.jf1o` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `Wr0t.INXA` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `Wr0t.ABpS` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `Wr0t.gGXK` | func | `(i32) -> (i32)` |
| 219 | `Wr0t.jmNB` | func | `(i32) -> (i32)` |
| 220 | `Wr0t.RWj1` | func | `(i32 i32) -> ()` |
| 221 | `Wr0t.TatR` | func | `(i32 i32) -> ()` |
| 222 | `Wr0t.nUnb` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `Wr0t.P2j8` | func | `(i32) -> (i32)` |
| 224 | `Wr0t.YDg6` | func | `(i32) -> (i32)` |
| 225 | `Wr0t.zuae` | func | `(i32 i32) -> ()` |
| 226 | `Wr0t.Cbzf` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `Wr0t.p8Sj` | func | `(i32 i32) -> ()` |
| 228 | `Wr0t.Xopw` | func | `(i32 i32) -> ()` |
| 229 | `Wr0t.va7t` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `Wr0t.gQZJ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `Wr0t.zyEL` | func | `(i32 i32 i32) -> ()` |
| 232 | `Wr0t.Fyq0` | func | `(i32 i32 i32) -> ()` |
| 233 | `Wr0t.LXTc` | func | `(i32 i32) -> ()` |
| 234 | `Wr0t.yTVL` | func | `(i32 i32) -> ()` |
| 235 | `Wr0t.qrRt` | func | `(i32 i32) -> ()` |
| 236 | `Wr0t.b4fh` | func | `(i32 i32) -> ()` |
| 237 | `Wr0t.qpfJ` | func | `(i32 i32) -> ()` |
| 238 | `Wr0t.rHzh` | func | `(i32 i32) -> ()` |
| 239 | `Wr0t.qtKr` | func | `(i32 f32 f32) -> ()` |
| 240 | `Wr0t.ZlnL` | func | `(i32 f32 f32) -> ()` |
| 241 | `Wr0t.yATW` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `Wr0t.yuWh` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `Wr0t.KuZl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `Wr0t.bN3N` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `Wr0t.fY3v` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `Wr0t.zFnN` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `Wr0t.Brzv` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `Wr0t.MbeC` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `Wr0t.yEXJ` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `Wr0t.lovV` | func | `(i32) -> ()` |
| 251 | `Wr0t.Fu6u` | func | `(i32 i32) -> ()` |
| 252 | `Wr0t.C8NA` | func | `(i32 i32) -> ()` |
| 253 | `Wr0t.ehwl` | func | `(i32 i32) -> ()` |
| 254 | `Wr0t.joBY` | func | `(i32 i32) -> ()` |
| 255 | `Wr0t.gJPW` | func | `(i32 i32) -> ()` |
| 256 | `Wr0t.DJjh` | func | `(i32 i32) -> ()` |
| 257 | `Wr0t.JseR` | func | `(i32 i32) -> ()` |
| 258 | `Wr0t.E2WT` | func | `(i32 i32) -> ()` |
| 259 | `Wr0t.e7mJ` | func | `(i32) -> (i32)` |
| 260 | `Wr0t.Vtvb` | func | `(i32) -> (i32)` |
| 261 | `Wr0t.VyfN` | func | `(i32) -> (i32)` |
| 262 | `Wr0t.shx4` | func | `(i32) -> (i32)` |
| 263 | `Wr0t.plRG` | func | `(i32) -> ()` |
| 264 | `Wr0t.gfeo` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `Wr0t.b7nW` | func | `(i32) -> ()` |
| 266 | `Wr0t.o4Y7` | func | `(i32) -> (i32)` |
| 267 | `Wr0t.I9LE` | func | `(i32) -> (i32)` |
| 268 | `Wr0t.YgId` | func | `(i32) -> (i32)` |
| 269 | `Wr0t.fA3t` | func | `(i32) -> (i32)` |
| 270 | `Wr0t.Yotw` | func | `(i32 i32) -> ()` |
| 271 | `Wr0t.e4UM` | func | `(i32) -> ()` |
| 272 | `Wr0t.VVbG` | func | `(i32 i32) -> ()` |
| 273 | `Wr0t.t3r7` | func | `(i32) -> (i32)` |
| 274 | `Wr0t.J9aZ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `Wr0t.bVi5` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `Wr0t.oR90` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `Wr0t.uSQa` | func | `(i32 i32) -> (i32)` |
| 278 | `Wr0t.RLiZ` | func | `(i32 i32) -> (i32)` |
| 279 | `Wr0t.quja` | func | `(i32 i32) -> (i32)` |
| 280 | `Wr0t.RkWI` | func | `(i32 i32) -> (i32)` |
| 281 | `Wr0t.HOOt` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `gjnf` | func | 3010 | `(i32 i32) -> ()` |
| `ld7W` | global | 1 | `` |
| `BUPe` | func | 2145 | `(i32 i32) -> (i32)` |
| `dhXJ` | func | 1913 | `(i32) -> (i32)` |
| `kOMy` | func | 1788 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `qinK` | func | 2948 | `(i32 i32 i32) -> (i32 i32)` |
| `fUK4` | func | 1692 | `(i32) -> (i32)` |
| `BBeR` | func | 1502 | `(i32 i32 i32) -> (i32)` |
| `XBs8` | func | 1314 | `(i32 i32 i32) -> (i32)` |
| `PCCd` | func | 869 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `u7Ah` | func | 2302 | `(i32 i32) -> (i32)` |
| `tkuL` | func | 2009 | `(i32 i32) -> ()` |
| `XzNX` | func | 899 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `kaFt` | func | 2958 | `(i32 i32) -> (i32 i32)` |
| `SMqI` | func | 1363 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `jHm2` | func | 1272 | `(i32 i32) -> (i32)` |
| `F6V2` | func | 1848 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `zOKo` | func | 2543 | `(i32 i32) -> ()` |
| `NPtT` | func | 2445 | `(i32) -> (i32)` |
| `Jyah` | func | 1151 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Aggo` | func | 1385 | `(i32 i32) -> (i32)` |
| `h8Gf` | func | 1553 | `(i32 i32) -> (i32)` |
| `zLat` | func | 1090 | `(i32 i32) -> (i32)` |
| `oeRI` | func | 2447 | `(i32 i32) -> ()` |
| `vpPH` | func | 2426 | `(i32) -> (f64)` |
| `KuPC` | func | 1823 | `(i32 i32 f64 f64 f64) -> ()` |
| `WmFa` | func | 3140 | `() -> (i32)` |
| `jwex` | func | 2434 | `(i32) -> (i32)` |
| `QDou` | func | 3117 | `(i32) -> (i32)` |
| `ejAl` | func | 3065 | `(i32 i32 i32) -> ()` |
| `MB3D` | func | 1364 | `(i32 f64 f64) -> (i32)` |
| `nCYW` | func | 1856 | `(i32) -> ()` |
| `YHqB` | func | 2221 | `(i32 f64) -> (i32)` |
| `fR5E` | func | 3113 | `() -> (f64)` |
| `Wlsw` | func | 2962 | `(i32) -> (i32 i32)` |
| `W5Xv` | func | 2166 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `U7jJ` | func | 3000 | `(i32 i32 i32 i32) -> ()` |
| `wUjI` | func | 889 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `Es90` | func | 2976 | `() -> (i32 i32)` |
| `P2Or` | func | 1898 | `(i32) -> (i32)` |
| `zUsY` | func | 2330 | `(i32 i32) -> (i32)` |
| `qUZV` | func | 2977 | `() -> (i32 i32)` |
| `XIIa` | func | 3118 | `(i32) -> ()` |
| `ohN6` | func | 1222 | `(i32 i32) -> (i32)` |
| `tqJt` | func | 598 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `kDXP` | func | 2511 | `() -> (i32)` |
| `nrrf` | func | 1725 | `(i32 i32) -> (i32)` |
| `Rnd0` | func | 2747 | `(i32) -> (i32)` |
| `T1rg` | func | 719 | `(i32) -> (i32)` |
| `mXTG` | func | 1707 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vrkA` | func | 1671 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `YT87` | func | 2953 | `(i32 i32) -> (i32 i32)` |
| `kKWI` | func | 1490 | `(i32 f64) -> (f64)` |
| `WB8P` | func | 2427 | `(i32) -> (i32)` |
| `fUsN` | func | 2954 | `(i32 i32) -> (i32 i32)` |
| `kNbi` | func | 1949 | `(i32 i32) -> ()` |
| `kqDx` | func | 1714 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Qq53` | func | 1298 | `(i32) -> ()` |
| `EMEy` | func | 2963 | `(i32) -> (i32 i32)` |
| `mhaO` | func | 2433 | `(i32) -> ()` |
| `IfV4` | func | 2448 | `(i32) -> (i32)` |
| `l9vN` | func | 1199 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `f1Hg` | func | 1915 | `(i32 i32 i32 i32) -> ()` |
| `L38U` | func | 2717 | `(i32) -> (i32)` |
| `Dq4s` | func | 648 | `(i32 i32) -> (i32)` |
| `vcGd` | func | 1564 | `(i32 i32) -> ()` |
| `c5u1` | func | 1803 | `(i32 i32 i32 i32) -> (i32)` |
| `JfW6` | func | 2724 | `(i32) -> (i32)` |
| `g1aM` | func | 2965 | `(i32) -> (i32 i32)` |
| `bAb8` | func | 2251 | `(i32 i32) -> ()` |
| `nnry` | func | 3072 | `() -> ()` |
| `BAj2` | func | 2955 | `(i32 i32) -> (i32 i32)` |
| `Pb8i` | func | 547 | `(i32 i32 i32) -> (i32)` |
| `aTYq` | func | 1433 | `(i32 i32 i32 i32) -> ()` |
| `YYAe` | func | 2781 | `(i32) -> (i32)` |
| `XUwn` | func | 3038 | `() -> (i32)` |
| `F8dM` | func | 3009 | `(i32 i32 i32) -> ()` |
| `cb1Z` | func | 2456 | `(i32 i32) -> (i32)` |
| `F8DJ` | func | 2758 | `(i32) -> ()` |
| `Qy88` | func | 1450 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `byve` | func | 2500 | `(i32 i32) -> ()` |
| `evGH` | func | 1462 | `(i32 i32) -> (i32)` |
| `BjhD` | func | 1606 | `(i32 i32 i32 i32) -> (i32)` |
| `KUD0` | func | 3141 | `() -> (i32)` |
| `dYhM` | func | 660 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `LFgC` | func | 2220 | `(i32 i32) -> ()` |
| `cF5H` | func | 870 | `(i32 i32) -> (i32)` |
| `ubug` | func | 2978 | `() -> (i32 i32)` |
| `v5gL` | func | 1831 | `(i32 i32) -> ()` |
| `Jsdl` | func | 2929 | `(i32 i32) -> ()` |
| `sLx9` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `DJeO` | func | 1565 | `(i32 i32) -> ()` |
| `NSvz` | func | 2429 | `(i32) -> (i32)` |
| `ib2h` | func | 2436 | `(i32) -> (i32)` |
| `YcNJ` | func | 2412 | `(i32 i32) -> ()` |
| `pblr` | func | 2956 | `(i32 i32) -> (i32 i32)` |
| `f2nA` | func | 3071 | `(i32) -> ()` |
| `Xti1` | func | 2738 | `(i32) -> (i32)` |
| `GYKl` | func | 2455 | `(i32) -> (i32)` |
| `NXyF` | func | 2431 | `(i32) -> (i32)` |
| `BeRw` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `MsAP` | func | 2430 | `(i32) -> (i32)` |
| `IZUn` | func | 1455 | `(i32) -> (i32)` |
| `udIc` | func | 1993 | `(i32 f64 f64 f64) -> (i32)` |
| `RSHI` | func | 1487 | `(i32 i32) -> (i32)` |
| `vbDz` | func | 2899 | `() -> ()` |
| `gnfZ` | func | 2544 | `() -> (i32)` |
| `Jxor` | func | 1569 | `(i32 f64 f64 f64) -> (i32)` |
| `GLWz` | func | 2384 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `JOd6` | func | 793 | `(i32 i32) -> (i32)` |
| `rJBU` | func | 2457 | `(i32 i32) -> (i32)` |
| `W8o5` | func | 2465 | `(i32) -> (i32)` |
| `T4KQ` | func | 2301 | `(i32 i32) -> (i32)` |
| `hzYg` | func | 2966 | `(i32) -> (i32 i32)` |
| `bfJT` | func | 1193 | `(i32 i32 i32 i32) -> (i32)` |
| `lDCL` | func | 2413 | `(i32) -> (i32)` |
| `pCnW` | func | 2464 | `(i32) -> (i32)` |
| `b8iD` | func | 2964 | `(i32) -> (i32 i32)` |
| `HoTs` | func | 2446 | `(i32) -> (i32)` |
| `ldAn` | func | 1857 | `(i32) -> ()` |
| `uxI4` | func | 1412 | `() -> (i32)` |
| `gqrR` | global | 2 | `` |
| `dEo3` | func | 2952 | `(i32 i32) -> (i32 i32)` |
| `gEE7` | func | 2947 | `(i32 i32 i32) -> (i32 i32)` |
| `MdXq` | func | 725 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `YSFa` | func | 686 | `(i32 i32) -> (i32)` |
| `nqbe` | func | 1841 | `(i32 i32) -> (i32)` |
| `IhAf` | func | 2114 | `(i32 i32) -> (i32)` |
| `bZJo` | func | 2428 | `(i32) -> (i32)` |
| `xwml` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `Nr3v` | func | 1475 | `(i32 i32) -> (i32)` |
| `xwSc` | func | 1445 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `DpfL` | func | 2343 | `(i32 i32 i32 i32) -> (i32)` |
| `BqsC` | func | 1240 | `(i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `gusL` | func | 1245 | `(i32 i32 i32) -> ()` |
| `tVqW` | func | 1408 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `f7rD` | func | 2033 | `(i32 i32) -> (i32)` |
| `Dc4j` | func | 1975 | `(i32 f64) -> (i32)` |
| `Mzir` | func | 1486 | `(i32 i32) -> (i32)` |
| `MgOx` | func | 2299 | `(i32 i32) -> (i32)` |
| `j1tQ` | func | 2300 | `(i32 i32) -> (i32)` |
| `G5y8` | func | 2435 | `(i32) -> (i32)` |
| `avQ1` | func | 2957 | `(i32 i32) -> (i32 i32)` |
| `fjym` | func | 1783 | `() -> (i32)` |
| `NuXB` | func | 1264 | `(i32) -> (i32)` |
| `dHpw` | func | 1091 | `(i32 i32) -> ()` |
| `oikp` | func | 1454 | `(i32 i32 i32 i32) -> (i32)` |
| `FAS2` | func | 2923 | `(i32 i32 i32 i32) -> (i32)` |
| `gEk6` | func | 2368 | `(i32) -> (i32)` |
| `I26U` | func | 2432 | `(i32) -> (i32)` |
| `kHpw` | func | 2443 | `(i32 i32) -> ()` |
| `mw4i` | func | 1415 | `(i32) -> (i32)` |
| `vAd3` | func | 2466 | `(i32) -> (i32)` |
| `MKL3` | func | 1192 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `ToBr` | func | 2918 | `(i32 i32) -> (i32)` |
| `RqOd` | func | 2385 | `(i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 733 · max 733
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2016656, `i32` = i32.const 2017220

## Functions

- 2,869 bodies · 4,001,682 code bytes · avg 1.4 KB
- instruction scan: 2,869 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 104 |
| <= 128 bytes | 253 |
| <= 256 bytes | 365 |
| <= 512 bytes | 666 |
| <= 1024 bytes | 572 |
| <= 2048 bytes | 420 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 89 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 217 | 194,712 | 88,375 | local.get×25902, i32.const×9917, i32.load×5640, local.set×4735, local.tee×4639 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,484 | 54,537 | local.get×15175, i32.const×6560, i32.add×3203, local.set×3090, i32.load×2945 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 125 | 48,853 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,650 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,547 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,727 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 62 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 191 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 221 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 716 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 761 | `(i32 i32) -> ()` | 138 | 42,799 | 20,185 | local.get×5260, i32.const×2330, local.tee×1194, i32.add×1063, local.set×1003 |
| 1559 | `(i32 i32) -> (i32)` | 180 | 54,760 | 19,855 | local.get×6591, i32.const×2625, i64.store×1913, i64.const×1077, i64.load×1056 |
| 1960 | `(i32 i32) -> ()` | 110 | 40,258 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2552 | `(i32 i32) -> ()` | 397 | 142,149 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2821 | `(i32 i32 i32 i32) -> ()` | 137 | 31,353 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2840 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 535,195 |
| `i32.const` | 224,262 |
| `local.tee` | 99,499 |
| `i32.load` | 93,526 |
| `local.set` | 93,510 |
| `i32.add` | 86,525 |
| `end` | 78,593 |
| `br_if` | 63,980 |
| `i32.store` | 46,206 |
| `block` | 37,004 |
| `i64.const` | 32,278 |
| `i64.store` | 31,395 |
| `if` | 29,971 |
| `call` | 28,910 |
| `i32.sub` | 24,477 |
| `i64.load` | 23,280 |
| `br` | 23,056 |
| `i32.eqz` | 19,395 |
| `select` | 16,874 |
| `i32.shl` | 16,361 |
| `i32.and` | 16,321 |
| `i32.ne` | 15,778 |
| `i32.load8_u` | 14,835 |
| `i32.eq` | 13,841 |
| `i32.store8` | 12,548 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,869/2,869 (degraded: 0)
