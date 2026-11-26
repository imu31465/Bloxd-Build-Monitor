# WASM module: `bloxd_wasm_webgl_bg`

> environment **staging.bloxd.io** · build `pxmq3aq.c63b303d` · analyzed 2026-11-26T17:59:16+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl_bg.1868afb18e04fe543309.wasm
> 5,537,354 bytes (5.3 MB) · sha256 `8949c301acb6ad07…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `eb1ac7ff50f61929.10978` → `76bc5b7649065d24.10978` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/159 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,934 / 299 |
| Exports / imports | 159 / 300 |
| Code bytes (function bodies) | 4,062,185 (3.9 MB) |
| Total local variables | 31,150 |
| Instructions (scanable bodies) | 1,904,772 |
| Data segments / bytes | 4,035 / 1,426,189 |
| Element segments / entries | 1 / 754 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `76bc5b7649065d24.10978` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,528 | 180 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,988 | 2934 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,273 | 159 |
| 9 | element | 1,515 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,067,563 | 2934 |
| 11 | data | 1,458,777 | 4035 |
| 0 | custom:name | 30 | — |

## Types

180 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `up8Y.Esz6` | memory | `[128..14648]` |
| 0 | `up8Y.r6Lc` | func | `(i32) -> (f64)` |
| 1 | `up8Y.dbGp` | func | `() -> (i32)` |
| 2 | `up8Y.TpRX` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `up8Y.jc7S` | func | `(i32) -> ()` |
| 4 | `up8Y.okub` | func | `(i32 i32) -> (i32)` |
| 5 | `up8Y.LU6K` | func | `(i32) -> (i32)` |
| 6 | `up8Y.HMAf` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `up8Y.iiPi` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `up8Y.fTb4` | func | `(i32) -> (i32)` |
| 9 | `up8Y.rTA7` | func | `(i32 i32) -> ()` |
| 10 | `up8Y.AJd0` | func | `(i32 i32) -> ()` |
| 11 | `up8Y.UtmE` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `up8Y.FR7X` | func | `(i32 i32) -> (i32)` |
| 13 | `up8Y.P5Us` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `up8Y.CYoU` | func | `(i32) -> (i32)` |
| 15 | `up8Y.NsTJ` | func | `(i32 i32) -> (i32)` |
| 16 | `up8Y.tixG` | func | `(i32 i32) -> (i32)` |
| 17 | `up8Y.n3C8` | func | `(i32 i32) -> ()` |
| 18 | `up8Y.MxUF` | func | `(i32) -> (i32)` |
| 19 | `up8Y.sehu` | func | `(i32) -> (i32)` |
| 20 | `up8Y.fJSA` | func | `(i32) -> (i32)` |
| 21 | `up8Y.juFR` | func | `(i32) -> ()` |
| 22 | `up8Y.eazT` | func | `(i32 i32) -> ()` |
| 23 | `up8Y.uv4e` | func | `(i32 i32) -> ()` |
| 24 | `up8Y.gKHB` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `up8Y.ZkaS` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `up8Y.jW8h` | func | `(i32) -> (i32)` |
| 27 | `up8Y.bYBO` | func | `(i32 i32) -> ()` |
| 28 | `up8Y.hp70` | func | `(i32 i32) -> (i32)` |
| 29 | `up8Y.o715` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `up8Y.ccT9` | func | `(i32 i32) -> (i32)` |
| 31 | `up8Y.baXJ` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `up8Y.QqQH` | func | `(i32) -> (i32)` |
| 33 | `up8Y.quj6` | func | `() -> (f64)` |
| 34 | `up8Y.Varl` | func | `(i32 i32) -> ()` |
| 35 | `up8Y.wzaH` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `up8Y.k4k0` | func | `(i32) -> (i32)` |
| 37 | `up8Y.P28R` | func | `(i32) -> (i32)` |
| 38 | `up8Y.MMIz` | func | `(i32) -> (i32)` |
| 39 | `up8Y.QRDK` | func | `(i32 i32) -> (i32)` |
| 40 | `up8Y.C6RH` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `up8Y.Mhck` | func | `(i32) -> (i32)` |
| 42 | `up8Y.SwmO` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `up8Y.L7Kj` | func | `(i32) -> (i32)` |
| 44 | `up8Y.dgq2` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `up8Y.aePL` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `up8Y.UYKX` | func | `(i32 i32 i32) -> ()` |
| 47 | `up8Y.ntJi` | func | `(i32 i32 i32) -> ()` |
| 48 | `up8Y.TTSA` | func | `(i32 i32 i32) -> ()` |
| 49 | `up8Y.isMO` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `up8Y.HLz3` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `up8Y.GA5a` | func | `(i32 i32) -> ()` |
| 52 | `up8Y.heyY` | func | `(i32 i32) -> ()` |
| 53 | `up8Y.CV3L` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `up8Y.hfOb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `up8Y.PpHM` | func | `(i32 f32 f32) -> ()` |
| 56 | `up8Y.BuUx` | func | `(i32 f32 f32) -> ()` |
| 57 | `up8Y.U9Tu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `up8Y.AVkv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `up8Y.Se6P` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `up8Y.WbQ3` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `up8Y.zMOs` | func | `(i32 i32 i32) -> ()` |
| 62 | `up8Y.yxT2` | func | `(i32 i32 i32) -> ()` |
| 63 | `up8Y.jZKT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `up8Y.D2rb` | func | `(i32 i32 i32) -> ()` |
| 65 | `up8Y.mQGN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `up8Y.RaR0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `up8Y.ioUu` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `up8Y.th2F` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `up8Y.TGBa` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `up8Y.OuNY` | func | `(i32) -> (i32)` |
| 71 | `up8Y.N0el` | func | `(i32) -> ()` |
| 72 | `up8Y.j465` | func | `(i32) -> (i32)` |
| 73 | `up8Y.UKUl` | func | `(i32 i32) -> (i32)` |
| 74 | `up8Y.eas7` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `up8Y.HA33` | func | `(i32 i32 i32) -> ()` |
| 76 | `up8Y.vyMK` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `up8Y.YRmd` | func | `() -> (f64)` |
| 78 | `up8Y.OKne` | func | `() -> (f64)` |
| 79 | `up8Y.pzaR` | func | `(i32 i32) -> ()` |
| 80 | `up8Y.Ha4k` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `up8Y.X4Oa` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `up8Y.NO5J` | func | `(i32 i32 i32) -> ()` |
| 83 | `up8Y.Qfsk` | func | `(i32 i32 i32) -> ()` |
| 84 | `up8Y.h3Vv` | func | `(i32 i32) -> ()` |
| 85 | `up8Y.zCil` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `up8Y.N7vL` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `up8Y.gSZg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `up8Y.Jfje` | func | `(i32 i32) -> ()` |
| 89 | `up8Y.tF1w` | func | `(i32 i32) -> ()` |
| 90 | `up8Y.xDzE` | func | `(i32) -> (i32)` |
| 91 | `up8Y.LbB7` | func | `(i32 i32 i32) -> ()` |
| 92 | `up8Y.NAof` | func | `(i32 i32 i32) -> ()` |
| 93 | `up8Y.xM6u` | func | `(i32) -> (i32)` |
| 94 | `up8Y.ESVh` | func | `(i32) -> (i32)` |
| 95 | `up8Y.VXZK` | func | `(i32 i32) -> ()` |
| 96 | `up8Y.rbM6` | func | `(i32 i32) -> ()` |
| 97 | `up8Y.HfMp` | func | `(i32 i32) -> ()` |
| 98 | `up8Y.F18s` | func | `(i32 i32) -> ()` |
| 99 | `up8Y.YgIE` | func | `(i32 i32 i32) -> ()` |
| 100 | `up8Y.qPEj` | func | `(i32 i32 i32) -> ()` |
| 101 | `up8Y.M1xg` | func | `(i32 i32 f32) -> ()` |
| 102 | `up8Y.uUMp` | func | `(i32 i32 f32) -> ()` |
| 103 | `up8Y.wsSu` | func | `(i32 i32 i32) -> ()` |
| 104 | `up8Y.O6ns` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `up8Y.BURZ` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `up8Y.D8k9` | func | `(i32 i32) -> ()` |
| 107 | `up8Y.EdaA` | func | `(i32 i32) -> ()` |
| 108 | `up8Y.Z4Xb` | func | `(i32 i32) -> ()` |
| 109 | `up8Y.wKkk` | func | `(i32 i32) -> ()` |
| 110 | `up8Y.XxFR` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `up8Y.NOCt` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `up8Y.ZYGq` | func | `(i32 i32 i32) -> ()` |
| 113 | `up8Y.lhEt` | func | `(i32 i32 i32) -> ()` |
| 114 | `up8Y.GUY7` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `up8Y.hlTM` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `up8Y.LMAT` | func | `(i32 i32) -> ()` |
| 117 | `up8Y.ORx8` | func | `(i32 i32) -> ()` |
| 118 | `up8Y.KuUC` | func | `(i32 i32) -> (i32)` |
| 119 | `up8Y.o7S4` | func | `(i32 i32) -> (i32)` |
| 120 | `up8Y.zYPl` | func | `(i32 i32) -> ()` |
| 121 | `up8Y.e5qt` | func | `(i32 i32) -> ()` |
| 122 | `up8Y.yqmd` | func | `(i32) -> (i32)` |
| 123 | `up8Y.ojgw` | func | `(i32 i32) -> ()` |
| 124 | `up8Y.zVJl` | func | `(i32 i32) -> ()` |
| 125 | `up8Y.V6jg` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `up8Y.C5cH` | func | `(i32 i32 i32) -> ()` |
| 127 | `up8Y.L7lq` | func | `(i32 i32 i32) -> ()` |
| 128 | `up8Y.xl2L` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `up8Y.GKny` | func | `(i32 i32) -> ()` |
| 130 | `up8Y.L4WI` | func | `(i32 i32 i32 i32) -> (i32)` |
| 131 | `up8Y.FQtc` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `up8Y.z6A4` | func | `(i32 i32 i32) -> ()` |
| 133 | `up8Y.fncV` | func | `(i32 i32 i32) -> ()` |
| 134 | `up8Y.mgXl` | func | `(i32) -> ()` |
| 135 | `up8Y.BA4n` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `up8Y.G5Lq` | func | `(i32 i32 i32) -> ()` |
| 137 | `up8Y.hQoK` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `up8Y.QVIw` | func | `(i32 i32 i32) -> (i32)` |
| 139 | `up8Y.RyB1` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `up8Y.oX7Q` | func | `(i32 i32) -> ()` |
| 141 | `up8Y.VOAk` | func | `(i32) -> (i32)` |
| 142 | `up8Y.j7WD` | func | `(i32 i32) -> ()` |
| 143 | `up8Y.mCQu` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `up8Y.sfds` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `up8Y.Ed1I` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `up8Y.pUnB` | func | `(i32 i32) -> ()` |
| 147 | `up8Y.jBHJ` | func | `(i32 i32) -> ()` |
| 148 | `up8Y.b2Lh` | func | `(i32 i32) -> ()` |
| 149 | `up8Y.xi0o` | func | `(i32 i32) -> ()` |
| 150 | `up8Y.P32Q` | func | `(i32) -> (i32)` |
| 151 | `up8Y.Ngb6` | func | `(i32) -> (i32)` |
| 152 | `up8Y.cde6` | func | `(i32) -> (i32)` |
| 153 | `up8Y.DL0i` | func | `(i32) -> (i32)` |
| 154 | `up8Y.kF0D` | func | `(i32) -> (i32)` |
| 155 | `up8Y.Jq4L` | func | `(i32) -> (i32)` |
| 156 | `up8Y.jRpQ` | func | `() -> (i32)` |
| 157 | `up8Y.fn7E` | func | `() -> (i32)` |
| 158 | `up8Y.OQer` | func | `() -> (i32)` |
| 159 | `up8Y.bfxe` | func | `() -> (i32)` |
| 160 | `up8Y.behL` | func | `(i32 i32) -> (i32)` |
| 161 | `up8Y.QtRl` | func | `(i32) -> ()` |
| 162 | `up8Y.eNH0` | func | `(i32 i32) -> (i32)` |
| 163 | `up8Y.W7qT` | func | `(i32) -> (i32)` |
| 164 | `up8Y.dneo` | func | `(i32) -> (i32)` |
| 165 | `up8Y.QYYI` | func | `(i32) -> (i32)` |
| 166 | `up8Y.VNO4` | func | `(i32) -> ()` |
| 167 | `up8Y.SmCL` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `up8Y.oCQt` | func | `(i32) -> (i32)` |
| 169 | `up8Y.w4ZD` | func | `(i32) -> (i32)` |
| 170 | `up8Y.sLT7` | func | `(i32 i32) -> (i32)` |
| 171 | `up8Y.py2K` | func | `(i32) -> ()` |
| 172 | `up8Y.Zymm` | func | `() -> (i32)` |
| 173 | `up8Y.vPzH` | func | `(i32 i32) -> (i32)` |
| 174 | `up8Y.UAWR` | func | `(i32 i32) -> ()` |
| 175 | `up8Y.U0iE` | func | `(i32 i32) -> ()` |
| 176 | `up8Y.gsnJ` | func | `(i32) -> (i32)` |
| 177 | `up8Y.OAHr` | func | `(i32 i32) -> (i32)` |
| 178 | `up8Y.TEum` | func | `(i32) -> ()` |
| 179 | `up8Y.puMe` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `up8Y.N4im` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `up8Y.C4Uq` | func | `(i32 i32) -> ()` |
| 182 | `up8Y.so8w` | func | `(i32 i32) -> ()` |
| 183 | `up8Y.qNnN` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `up8Y.zROL` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `up8Y.N8xS` | func | `(i32 f32) -> ()` |
| 186 | `up8Y.OvES` | func | `(i32 f32) -> ()` |
| 187 | `up8Y.iXmQ` | func | `(i32 i32) -> ()` |
| 188 | `up8Y.GeFF` | func | `(i32 i32) -> ()` |
| 189 | `up8Y.T9UM` | func | `(i32) -> (i32)` |
| 190 | `up8Y.Ofuh` | func | `(i32) -> (i32)` |
| 191 | `up8Y.pa41` | func | `(i32) -> (i32)` |
| 192 | `up8Y.NEz3` | func | `(i32) -> (i32)` |
| 193 | `up8Y.U4gd` | func | `(i32 i32 i32) -> ()` |
| 194 | `up8Y.TgcP` | func | `(i32 i32 i32) -> ()` |
| 195 | `up8Y.gsso` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `up8Y.qMEb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `up8Y.xl78` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `up8Y.WINJ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `up8Y.HDAT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `up8Y.ayCE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `up8Y.rsFe` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `up8Y.oeMV` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `up8Y.C8Bb` | func | `(i32) -> (i32)` |
| 204 | `up8Y.SUWi` | func | `(i32) -> (i32)` |
| 205 | `up8Y.x6pc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `up8Y.z2vm` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `up8Y.oAtj` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `up8Y.ohgo` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `up8Y.iVDu` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `up8Y.WYWF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `up8Y.PTHl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `up8Y.n5BN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `up8Y.mvW3` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `up8Y.kRz0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `up8Y.dOnS` | func | `(i32 i32 i32) -> ()` |
| 216 | `up8Y.Z1LR` | func | `(i32 i32 i32) -> ()` |
| 217 | `up8Y.uVhu` | func | `(i32 i32) -> ()` |
| 218 | `up8Y.zGhV` | func | `(i32 i32) -> ()` |
| 219 | `up8Y.sEbc` | func | `(i32 i32) -> ()` |
| 220 | `up8Y.Qte2` | func | `(i32 i32) -> ()` |
| 221 | `up8Y.Yubt` | func | `(i32 i32) -> ()` |
| 222 | `up8Y.xCm5` | func | `(i32 i32) -> ()` |
| 223 | `up8Y.MeOn` | func | `(i32 f32 f32) -> ()` |
| 224 | `up8Y.Ok8H` | func | `(i32 f32 f32) -> ()` |
| 225 | `up8Y.mhVg` | func | `(i32 i32) -> ()` |
| 226 | `up8Y.a6Y5` | func | `(i32 i32) -> ()` |
| 227 | `up8Y.iqjN` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `up8Y.YCi9` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `up8Y.KVt9` | func | `(i32 i32 i32) -> ()` |
| 230 | `up8Y.LlRA` | func | `(i32) -> (i32)` |
| 231 | `up8Y.X7vg` | func | `(i32) -> (i32)` |
| 232 | `up8Y.nPw8` | func | `(i32 i32) -> ()` |
| 233 | `up8Y.qlj7` | func | `(i32 i32) -> ()` |
| 234 | `up8Y.zCtW` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `up8Y.pAuv` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `up8Y.Ne8C` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `up8Y.Cebw` | func | `(i32 i32 i32) -> ()` |
| 238 | `up8Y.bv08` | func | `(i32 i32 i32) -> ()` |
| 239 | `up8Y.Br3f` | func | `(i32 i32 i32) -> ()` |
| 240 | `up8Y.b1zd` | func | `(i32 i32 i32) -> ()` |
| 241 | `up8Y.rERD` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `up8Y.PMyK` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `up8Y.iBwi` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `up8Y.HzGE` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `up8Y.R9ou` | func | `(i32) -> (i32)` |
| 246 | `up8Y.e0Tf` | func | `(i32) -> (i32)` |
| 247 | `up8Y.PdKY` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `up8Y.Ipbj` | func | `(i32 i32) -> ()` |
| 249 | `up8Y.l30f` | func | `(i32 i32) -> ()` |
| 250 | `up8Y.cA6U` | func | `(i32 i32) -> (i32)` |
| 251 | `up8Y.nwjn` | func | `(i32 i32) -> (i32)` |
| 252 | `up8Y.vdMJ` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `up8Y.GXCJ` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `up8Y.ELLI` | func | `(i32 i32) -> ()` |
| 255 | `up8Y.M3Q6` | func | `(i32 i32) -> ()` |
| 256 | `up8Y.TPBj` | func | `(i32) -> (i32)` |
| 257 | `up8Y.RnON` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `up8Y.t6mb` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `up8Y.qnJ7` | func | `(i32) -> ()` |
| 260 | `up8Y.v3rU` | func | `(i32 i32) -> ()` |
| 261 | `up8Y.Rnj1` | func | `(i32 i32) -> ()` |
| 262 | `up8Y.Ac2d` | func | `(i32 i32) -> ()` |
| 263 | `up8Y.Xkzd` | func | `(i32 i32) -> ()` |
| 264 | `up8Y.nwPO` | func | `(i32 i32) -> ()` |
| 265 | `up8Y.TBaO` | func | `(i32 i32) -> ()` |
| 266 | `up8Y.QPGJ` | func | `(i32 i32) -> ()` |
| 267 | `up8Y.fi10` | func | `(i32 i32) -> ()` |
| 268 | `up8Y.tdso` | func | `(i32) -> (i32)` |
| 269 | `up8Y.TkBG` | func | `(i32) -> (i32)` |
| 270 | `up8Y.oahz` | func | `(i32) -> (i32)` |
| 271 | `up8Y.kUcl` | func | `(i32) -> (i32)` |
| 272 | `up8Y.fvog` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `up8Y.mcGs` | func | `(i32) -> ()` |
| 274 | `up8Y.K6M6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `up8Y.UtnH` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `up8Y.rcIP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `up8Y.vCtp` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `up8Y.h8zH` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `up8Y.nsZ0` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `up8Y.oaRr` | func | `(i32) -> (i32)` |
| 281 | `up8Y.B3W6` | func | `(i32) -> (i32)` |
| 282 | `up8Y.uPTK` | func | `(i32) -> (i32)` |
| 283 | `up8Y.wHS7` | func | `(i32) -> (i32)` |
| 284 | `up8Y.Y4F0` | func | `(i32 i32) -> ()` |
| 285 | `up8Y.rXmi` | func | `(i32) -> ()` |
| 286 | `up8Y.wYRi` | func | `(i32 i32) -> ()` |
| 287 | `up8Y.M6Hg` | func | `(i32) -> (i32)` |
| 288 | `up8Y.ss57` | func | `(i32 i32) -> (i32)` |
| 289 | `up8Y.ZePI` | func | `(i32 i32) -> (i32)` |
| 290 | `up8Y.sy9A` | func | `(i32 i32) -> (i32)` |
| 291 | `up8Y.sFf7` | func | `(f64) -> (i32)` |
| 292 | `up8Y.QBtw` | func | `(i32 i32) -> (i32)` |
| 293 | `up8Y.AYDP` | func | `(i32 i32) -> (i32)` |
| 294 | `up8Y.mE0t` | func | `(i32 i32) -> (i32)` |
| 295 | `up8Y.SuLD` | func | `(i32 i32) -> (i32)` |
| 296 | `up8Y.LOXW` | func | `(i32 i32) -> (i32)` |
| 297 | `up8Y.oINa` | func | `(i32 i32) -> (i32)` |
| 298 | `up8Y.Q8nW` | func | `(i32 i32) -> (i32)` |

## Exports

159 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `troQ` | func | 2395 | `(i32 i32 i32 i32) -> (i32)` |
| `W2HM` | func | 2500 | `(i32 i32) -> ()` |
| `I437` | func | 621 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `GmNz` | func | 926 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Nxtc` | func | 3031 | `(i32 i32) -> (i32 i32)` |
| `qrm4` | global | 2 | `` |
| `QCSS` | global | 1 | `` |
| `dbM7` | func | 1118 | `(i32 i32) -> ()` |
| `uJQl` | func | 1396 | `(i32 f64 f64) -> (i32)` |
| `DaMb` | func | 1246 | `(i32 i32) -> (i32)` |
| `gitU` | func | 764 | `(i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `q2yr` | func | 3054 | `() -> (i32 i32)` |
| `szNU` | func | 3040 | `(i32) -> (i32 i32)` |
| `Ebuu` | func | 2040 | `(i32 f64 f64 f64) -> (i32)` |
| `ZWkE` | func | 2482 | `(i32) -> (f64)` |
| `VksL` | func | 1521 | `(i32 i32) -> (i32)` |
| `XQfZ` | func | 2572 | `() -> (i32)` |
| `kvbh` | func | 3041 | `(i32) -> (i32 i32)` |
| `WEFD` | func | 1509 | `(i32 i32) -> (i32)` |
| `ddZF` | func | 2969 | `() -> ()` |
| `SN41` | func | 2022 | `(i32 f64) -> (i32)` |
| `fPhF` | func | 1299 | `(i32 i32) -> (i32)` |
| `M2zR` | func | 1639 | `(i32 i32 i32 i32) -> (i32)` |
| `L3mV` | func | 2504 | `(i32 i32) -> ()` |
| `Gejn` | func | 1218 | `(i32 i32 i32 i32) -> (i32)` |
| `L1zv` | func | 1874 | `(i32 i32) -> ()` |
| `lRc0` | func | 2350 | `(i32 i32) -> (i32)` |
| `vCHW` | func | 2299 | `(i32 i32) -> ()` |
| `q7iq` | func | 2994 | `(i32 i32 i32 i32) -> (i32)` |
| `y3i5` | func | 1747 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `z3yP` | func | 3019 | `(i32 i32 i32) -> (i32 i32)` |
| `fj0I` | func | 2514 | `(i32 i32) -> (i32)` |
| `Cs09` | func | 746 | `(i32) -> (i32)` |
| `LNm5` | func | 3029 | `(i32 i32) -> (i32 i32)` |
| `wS6S` | func | 1117 | `(i32 i32) -> (i32)` |
| `xVyi` | func | 1489 | `(i32 i32 i32 i32) -> (i32)` |
| `LFKr` | func | 3030 | `(i32 i32) -> (i32 i32)` |
| `RdQw` | func | 2814 | `(i32) -> (i32)` |
| `A9I1` | func | 3056 | `() -> (i32 i32)` |
| `VET6` | func | 1765 | `(i32 i32) -> (i32)` |
| `pvuf` | func | 2605 | `(i32 i32) -> ()` |
| `dydf` | func | 1467 | `(i32 i32 i32 i32) -> ()` |
| `HEKm` | func | 3192 | `() -> (f64)` |
| `DFhp` | func | 1523 | `(i32 f64) -> (f64)` |
| `xIts` | func | 3027 | `(i32 i32) -> (i32 i32)` |
| `MNAD` | func | 749 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `GZvK` | func | 2489 | `(i32) -> ()` |
| `X3ji` | func | 672 | `(i32 i32) -> (i32)` |
| `SQbi` | func | 2080 | `(i32 i32) -> (i32)` |
| `PzlE` | func | 1899 | `(i32) -> ()` |
| `l3xZ` | func | 2491 | `(i32) -> (i32)` |
| `NLEl` | func | 3025 | `(i32 i32) -> (i32 i32)` |
| `OMb3` | func | 3042 | `(i32) -> (i32 i32)` |
| `upIa` | func | 1441 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `cnlA` | func | 3020 | `(i32 i32 i32) -> (i32 i32)` |
| `lEMx` | func | 914 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `TXm1` | func | 2782 | `(i32) -> (i32)` |
| `uvdG` | func | 3026 | `(i32 i32) -> (i32 i32)` |
| `qN36` | func | 2522 | `(i32) -> (i32)` |
| `IKr6` | func | 1846 | `(i32 i32 i32 i32) -> (i32)` |
| `ZJ3X` | func | 2789 | `(i32) -> (i32)` |
| `INFf` | func | 3151 | `(i32) -> ()` |
| `wHls` | func | 1884 | `(i32 i32) -> (i32)` |
| `RsyY` | func | 2352 | `(i32 i32) -> (i32)` |
| `aD6y` | func | 1445 | `() -> (i32)` |
| `QkbA` | func | 2490 | `(i32) -> (i32)` |
| `ZPjX` | func | 2351 | `(i32 i32) -> (i32)` |
| `hBJe` | func | 2383 | `(i32 i32) -> (i32)` |
| `S53X` | func | 2269 | `(i32 f64) -> (i32)` |
| `vfO2` | func | 2056 | `(i32 i32) -> ()` |
| `WfQR` | func | 3152 | `() -> ()` |
| `rjir` | func | 741 | `(i32 i32 i32 i32) -> (i32)` |
| `U9e2` | func | 3080 | `(i32 i32 i32 i32) -> ()` |
| `oeNq` | func | 2503 | `(i32) -> (i32)` |
| `rpR7` | func | 2423 | `(i32) -> (i32)` |
| `C8mx` | func | 3039 | `(i32) -> (i32 i32)` |
| `sNa2` | func | 1831 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `QZGF` | func | 2468 | `(i32 i32) -> ()` |
| `pMbZ` | func | 2521 | `(i32) -> (i32)` |
| `t0F7` | func | 1866 | `(i32 i32 f64 f64 f64) -> ()` |
| `T4hE` | func | 1557 | `(i32 i32 i32 i32) -> (i32)` |
| `w82W` | func | 3055 | `() -> (i32 i32)` |
| `QBxc` | func | 1490 | `(i32) -> (i32)` |
| `PemP` | func | 3090 | `(i32 i32) -> ()` |
| `zank` | func | 3197 | `(i32) -> ()` |
| `Q1nr` | func | 3043 | `(i32) -> (i32 i32)` |
| `X54C` | func | 1601 | `(i32 f64 f64 f64) -> (i32)` |
| `qhix` | func | 895 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `t4IE` | func | 3028 | `(i32 i32) -> (i32 i32)` |
| `wxgN` | func | 1480 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `BQer` | func | 1960 | `(i32) -> (i32)` |
| `QJhY` | func | 1585 | `(i32 i32) -> (i32)` |
| `HWLl` | func | 3222 | `() -> (i32)` |
| `CF4o` | func | 1753 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Xp2n` | func | 3118 | `() -> (i32)` |
| `QUiu` | func | 1597 | `(i32 i32) -> ()` |
| `CSl5` | func | 1891 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `tCfv` | func | 681 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `AVds` | func | 1342 | `(i32 i32 i32) -> (i32)` |
| `au7j` | func | 2488 | `(i32) -> (i32)` |
| `rFMS` | func | 2484 | `(i32) -> (i32)` |
| `cs2l` | func | 1178 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `iyaC` | func | 3089 | `(i32 i32 i32) -> ()` |
| `QJb2` | func | 3145 | `(i32 i32 i32) -> ()` |
| `MIlJ` | func | 1395 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `jXFG` | func | 2523 | `(i32) -> (i32)` |
| `qeUD` | func | 1327 | `(i32 i32) -> (i32)` |
| `GCyX` | func | 2268 | `(i32 i32) -> ()` |
| `EbDp` | func | 1708 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `HyNU` | func | 2487 | `(i32) -> (i32)` |
| `F1ph` | func | 2485 | `(i32) -> (i32)` |
| `qAFH` | func | 896 | `(i32 i32) -> (i32)` |
| `M1zt` | func | 2469 | `(i32) -> (i32)` |
| `Pwyg` | func | 2513 | `(i32 i32) -> (i32)` |
| `yhTJ` | func | 2159 | `(i32 i32) -> (i32)` |
| `fybJ` | func | 1217 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `ArPX` | func | 3221 | `() -> (i32)` |
| `FByp` | func | 3196 | `(i32) -> (i32)` |
| `pI80` | func | 571 | `(i32 i32 i32) -> (i32)` |
| `EeQM` | func | 2825 | `(i32) -> ()` |
| `yCWM` | func | 2486 | `(i32) -> (i32)` |
| `iZz4` | func | 1943 | `(i32) -> (i32)` |
| `DG5X` | func | 1962 | `(i32 i32 i32 i32) -> ()` |
| `vvuj` | func | 1596 | `(i32 i32) -> ()` |
| `kXVY` | func | 2349 | `(i32 i32) -> (i32)` |
| `LBWi` | func | 1731 | `(i32) -> (i32)` |
| `Bovv` | func | 1485 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `OKWx` | func | 1267 | `(i32 i32 i32) -> (i32)` |
| `fo5g` | func | 2803 | `(i32) -> (i32)` |
| `MdL8` | func | 1448 | `(i32) -> (i32)` |
| `PU0e` | func | 2483 | `(i32) -> (i32)` |
| `H9RD` | func | 1537 | `(i32 i32 i32) -> (i32)` |
| `w55t` | func | 1995 | `(i32 i32) -> ()` |
| `or4q` | func | 1292 | `(i32) -> (i32)` |
| `S1DM` | func | 1825 | `() -> (i32)` |
| `RvTf` | func | 710 | `(i32 i32) -> (i32)` |
| `JF85` | func | 2560 | `(i32 i32) -> ()` |
| `npeW` | func | 1224 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `qBoW` | func | 2505 | `(i32) -> (i32)` |
| `lKlM` | func | 2213 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `iOWx` | func | 2502 | `(i32) -> (i32)` |
| `GDuv` | func | 2492 | `(i32) -> (i32)` |
| `oat9` | func | 2988 | `(i32 i32) -> (i32)` |
| `XWSZ` | func | 1273 | `(i32 i32 i32) -> ()` |
| `ekM4` | func | 1416 | `(i32 i32) -> (i32)` |
| `K3Ej` | func | 2192 | `(i32 i32) -> (i32)` |
| `SDiy` | func | 3001 | `(i32 i32) -> ()` |
| `ehRy` | func | 2512 | `(i32) -> (i32)` |
| `uzVs` | func | 2606 | `() -> (i32)` |
| `cNaj` | func | 858 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `L8Qf` | func | 1900 | `(i32) -> ()` |
| `RZwv` | func | 1520 | `(i32 i32) -> (i32)` |
| `hmXO` | func | 1496 | `(i32 i32) -> (i32)` |
| `iTmW` | func | 1324 | `(i32) -> ()` |
| `CFCE` | func | 2439 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `hF8n` | func | 2847 | `(i32) -> (i32)` |
| `ptOr` | func | 2440 | `(i32) -> (i32)` |
| `Sl90` | func | 686 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 755 · max 755
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2641352, `i32` = i32.const 2641924

## Functions

- 2,934 bodies · 4,062,185 code bytes · avg 1.4 KB
- instruction scan: 2,934 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 116 |
| <= 128 bytes | 258 |
| <= 256 bytes | 380 |
| <= 512 bytes | 679 |
| <= 1024 bytes | 578 |
| <= 2048 bytes | 426 |
| <= 4096 bytes | 182 |
| <= 8192 bytes | 92 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,831 | 91,028 | local.get×26756, i32.const×10177, i32.load×5791, local.set×4887, local.tee×4767 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 148 | 112,505 | 54,503 | local.get×15178, i32.const×6537, i32.add×3196, local.set×3087, i32.load×2954 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,544 | 21,400 | local.get×6231, i32.const×2827, local.set×1224, i32.add×1128, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 105 | 36,397 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 59 | 29,628 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 25 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 35 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 70 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 198 | `(i32 i32) -> ()` | 10 | 27,205 | 13,103 | local.get×4614, i32.load×1243, i32.const×1038, end×817, i32.add×750 |
| 220 | `(i32) -> ()` | 19 | 23,276 | 10,918 | local.get×2734, i32.load×1496, i32.const×1188, local.tee×1012, end×856 |
| 725 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 726 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1585 | `(i32 i32) -> (i32)` | 180 | 54,757 | 19,852 | local.get×6590, i32.const×2618, i64.store×1917, i64.const×1082, i64.load×1056 |
| 1989 | `(i32 i32) -> ()` | 111 | 39,589 | 17,528 | local.get×5140, i32.const×1646, local.set×891, local.tee×743, end×677 |
| 2605 | `(i32 i32) -> ()` | 398 | 142,401 | 64,327 | local.get×18492, i32.const×8026, local.set×3850, i32.load×3179, end×2818 |
| 2884 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2902 | `(i32 i32) -> ()` | 143 | 33,655 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
| `local.get` | 543,030 |
| `i32.const` | 227,067 |
| `local.tee` | 100,874 |
| `i32.load` | 95,214 |
| `local.set` | 94,564 |
| `i32.add` | 87,677 |
| `end` | 79,713 |
| `br_if` | 64,845 |
| `i32.store` | 47,004 |
| `block` | 37,469 |
| `i64.const` | 32,855 |
| `i64.store` | 32,019 |
| `if` | 30,481 |
| `call` | 29,686 |
| `i32.sub` | 24,819 |
| `i64.load` | 23,853 |
| `br` | 23,254 |
| `i32.eqz` | 19,715 |
| `select` | 16,994 |
| `i32.shl` | 16,495 |
| `i32.and` | 16,393 |
| `i32.ne` | 15,962 |
| `i32.load8_u` | 15,101 |
| `i32.eq` | 13,989 |
| `i32.store8` | 12,697 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,934/2,934 (degraded: 0)
