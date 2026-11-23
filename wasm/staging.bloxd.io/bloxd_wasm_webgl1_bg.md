# WASM module: `bloxd_wasm_webgl1_bg`

> environment **staging.bloxd.io** · build `31kiid.1299b0d6` · analyzed 2026-11-24T07:07:09+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl1_bg.3d2f29ea7faca9e07390.wasm
> 4,836,347 bytes (4.6 MB) · sha256 `8032d9766cccf3c8…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `344dde80afe35fb2.10574` → `fdc04fd07aac45e9.10574` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/156 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,859 / 282 |
| Exports / imports | 156 / 283 |
| Code bytes (function bodies) | 3,987,961 (3.8 MB) |
| Total local variables | 30,405 |
| Instructions (scanable bodies) | 1,871,333 |
| Data segments / bytes | 3,771 / 802,052 |
| Element segments / entries | 1 / 732 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `fdc04fd07aac45e9.10574` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,478 | 173 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,906 | 2859 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,249 | 156 |
| 9 | element | 1,471 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 3,993,208 | 2859 |
| 11 | data | 832,529 | 3771 |
| 0 | custom:name | 30 | — |

## Types

173 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `f65K.DDbG` | memory | `[128..14648]` |
| 0 | `f65K.ZWDs` | func | `(i32) -> (f64)` |
| 1 | `f65K.HMiG` | func | `() -> (i32)` |
| 2 | `f65K.aJCq` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `f65K.zTRM` | func | `(i32) -> ()` |
| 4 | `f65K.AARm` | func | `(i32 i32) -> (i32)` |
| 5 | `f65K.yrHy` | func | `(i32) -> (i32)` |
| 6 | `f65K.gN9l` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `f65K.SRfi` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `f65K.hwR5` | func | `(i32) -> (i32)` |
| 9 | `f65K.uzMe` | func | `(i32 i32) -> ()` |
| 10 | `f65K.RHSp` | func | `(i32 i32) -> ()` |
| 11 | `f65K.ttlp` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `f65K.G1x3` | func | `(i32 i32) -> (i32)` |
| 13 | `f65K.YwIl` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `f65K.PKZm` | func | `(i32) -> (i32)` |
| 15 | `f65K.UQaI` | func | `(i32 i32) -> (i32)` |
| 16 | `f65K.rZmi` | func | `(i32 i32) -> (i32)` |
| 17 | `f65K.naOG` | func | `(i32 i32) -> ()` |
| 18 | `f65K.sa35` | func | `(i32) -> (i32)` |
| 19 | `f65K.dJON` | func | `(i32) -> (i32)` |
| 20 | `f65K.uyij` | func | `(i32) -> (i32)` |
| 21 | `f65K.EQV5` | func | `(i32) -> ()` |
| 22 | `f65K.eisr` | func | `(i32 i32) -> ()` |
| 23 | `f65K.vHDw` | func | `(i32 i32) -> ()` |
| 24 | `f65K.Rjwh` | func | `(i32) -> (i32)` |
| 25 | `f65K.NEPO` | func | `(i32 i32) -> ()` |
| 26 | `f65K.TMyr` | func | `(i32 i32) -> (i32)` |
| 27 | `f65K.CvMi` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `f65K.TJey` | func | `(i32 i32) -> (i32)` |
| 29 | `f65K.nQWV` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `f65K.iVAE` | func | `(i32) -> (i32)` |
| 31 | `f65K.Fbuh` | func | `(i32 i32) -> ()` |
| 32 | `f65K.fmPO` | func | `(i32) -> (i32)` |
| 33 | `f65K.wv0W` | func | `(i32) -> (i32)` |
| 34 | `f65K.enLj` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `f65K.jmdS` | func | `(i32) -> (i32)` |
| 36 | `f65K.Hddt` | func | `(i32) -> (i32)` |
| 37 | `f65K.mYuO` | func | `(i32) -> (i32)` |
| 38 | `f65K.HUMA` | func | `(i32 i32) -> (i32)` |
| 39 | `f65K.AWY2` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `f65K.bhOW` | func | `(i32) -> (i32)` |
| 41 | `f65K.xTQV` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `f65K.NaQZ` | func | `() -> (f64)` |
| 43 | `f65K.EAl6` | func | `(i32) -> (i32)` |
| 44 | `f65K.zAGA` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `f65K.PVzN` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `f65K.wd9c` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `f65K.Icuh` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `f65K.SAUZ` | func | `(i32 i32 i32) -> ()` |
| 49 | `f65K.d5X0` | func | `(i32 i32 i32) -> ()` |
| 50 | `f65K.bzNI` | func | `(i32 i32 i32) -> ()` |
| 51 | `f65K.VZ1g` | func | `(i32 i32) -> ()` |
| 52 | `f65K.kIJs` | func | `(i32 i32) -> ()` |
| 53 | `f65K.mdxN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `f65K.l4lI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `f65K.Bx97` | func | `(i32 f32 f32) -> ()` |
| 56 | `f65K.Ikte` | func | `(i32 f32 f32) -> ()` |
| 57 | `f65K.UM9G` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `f65K.hHmo` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `f65K.D4Hl` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `f65K.DRUx` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `f65K.xOTS` | func | `(i32 i32 i32) -> ()` |
| 62 | `f65K.EJL5` | func | `(i32 i32 i32) -> ()` |
| 63 | `f65K.au4T` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `f65K.NLsN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `f65K.TlhT` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `f65K.gnno` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `f65K.GvcM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `f65K.OKSy` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `f65K.htYN` | func | `(i32) -> (i32)` |
| 70 | `f65K.C0f9` | func | `(i32) -> ()` |
| 71 | `f65K.yQpd` | func | `(i32) -> (i32)` |
| 72 | `f65K.CnT2` | func | `(i32 i32) -> (i32)` |
| 73 | `f65K.hdrI` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `f65K.JfUc` | func | `(i32 i32 i32) -> ()` |
| 75 | `f65K.qkow` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `f65K.dYdT` | func | `() -> (f64)` |
| 77 | `f65K.TMT5` | func | `() -> (f64)` |
| 78 | `f65K.abNS` | func | `(i32 i32) -> ()` |
| 79 | `f65K.PJSR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `f65K.gbhN` | func | `(i32 i32 i32) -> ()` |
| 81 | `f65K.DdK8` | func | `(i32 i32 i32) -> ()` |
| 82 | `f65K.yQSg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `f65K.ZAom` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `f65K.HG5y` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `f65K.TAkc` | func | `(i32 i32) -> ()` |
| 86 | `f65K.D0St` | func | `(i32 i32) -> ()` |
| 87 | `f65K.zH82` | func | `(i32) -> (i32)` |
| 88 | `f65K.BweN` | func | `(i32 i32) -> ()` |
| 89 | `f65K.OFMf` | func | `(i32 i32) -> ()` |
| 90 | `f65K.ymtE` | func | `(i32 i32 i32) -> ()` |
| 91 | `f65K.FUdw` | func | `(i32 i32 i32) -> ()` |
| 92 | `f65K.r7UP` | func | `(i32) -> (i32)` |
| 93 | `f65K.koHa` | func | `(i32) -> (i32)` |
| 94 | `f65K.T6j6` | func | `(i32 i32) -> (i32)` |
| 95 | `f65K.ZYP9` | func | `(i32 i32) -> (i32)` |
| 96 | `f65K.XRGw` | func | `(i32 i32) -> ()` |
| 97 | `f65K.D58P` | func | `(i32 i32) -> ()` |
| 98 | `f65K.ullt` | func | `(i32 i32 i32) -> ()` |
| 99 | `f65K.Zbo4` | func | `(i32 i32 i32) -> ()` |
| 100 | `f65K.g1gX` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `f65K.A7Py` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `f65K.st6d` | func | `(i32 i32 f32) -> ()` |
| 103 | `f65K.r7oU` | func | `(i32 i32 f32) -> ()` |
| 104 | `f65K.hQJg` | func | `(i32 i32 i32) -> ()` |
| 105 | `f65K.KGaP` | func | `(i32 i32 i32) -> ()` |
| 106 | `f65K.msR8` | func | `(i32 i32 i32) -> ()` |
| 107 | `f65K.SBxJ` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `f65K.hT0V` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `f65K.Vor0` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `f65K.wCv7` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `f65K.xctW` | func | `(i32 i32) -> ()` |
| 112 | `f65K.k0PX` | func | `(i32 i32) -> ()` |
| 113 | `f65K.Parl` | func | `(i32 i32) -> ()` |
| 114 | `f65K.XSwR` | func | `(i32 i32) -> ()` |
| 115 | `f65K.TVgr` | func | `(i32) -> (i32)` |
| 116 | `f65K.OtWZ` | func | `(i32) -> (i32)` |
| 117 | `f65K.irDF` | func | `(i32) -> (i32)` |
| 118 | `f65K.kwpW` | func | `(i32) -> (i32)` |
| 119 | `f65K.nRJ5` | func | `(i32 i32) -> ()` |
| 120 | `f65K.Dwpr` | func | `(i32 i32) -> ()` |
| 121 | `f65K.N7kL` | func | `(i32 i32) -> ()` |
| 122 | `f65K.N6EH` | func | `(i32 i32) -> ()` |
| 123 | `f65K.xu0K` | func | `(i32 i32) -> ()` |
| 124 | `f65K.njyr` | func | `(i32 i32) -> ()` |
| 125 | `f65K.bAp2` | func | `(i32 i32) -> (i32)` |
| 126 | `f65K.FUbi` | func | `(i32 i32) -> (i32)` |
| 127 | `f65K.J32Y` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `f65K.a2eU` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `f65K.MDxG` | func | `(i32 i32) -> ()` |
| 130 | `f65K.l3hm` | func | `(i32 i32) -> ()` |
| 131 | `f65K.wKSs` | func | `(i32) -> (i32)` |
| 132 | `f65K.iggm` | func | `(i32 i32) -> ()` |
| 133 | `f65K.VsT0` | func | `(i32 i32) -> ()` |
| 134 | `f65K.J8FH` | func | `(i32 i32 i32) -> ()` |
| 135 | `f65K.bow6` | func | `(i32 i32 i32) -> ()` |
| 136 | `f65K.L9rY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `f65K.hslM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `f65K.twUl` | func | `(i32 i32) -> ()` |
| 139 | `f65K.kZLb` | func | `(i32 i32 i32) -> ()` |
| 140 | `f65K.yAaU` | func | `(i32 i32 i32) -> ()` |
| 141 | `f65K.AhY9` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `f65K.yG0l` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `f65K.U1Rv` | func | `(i32 i32 i32) -> ()` |
| 144 | `f65K.r4ky` | func | `(i32 i32 i32) -> ()` |
| 145 | `f65K.CYNi` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `f65K.eXOE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `f65K.Sb3b` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `f65K.Nqkm` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `f65K.IYyC` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `f65K.Ezda` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `f65K.yS4e` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `f65K.FWw2` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `f65K.fjt9` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `f65K.S4fE` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `f65K.ZCdV` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `f65K.M4pB` | func | `(i32) -> (i32)` |
| 157 | `f65K.HTYu` | func | `(i32) -> (i32)` |
| 158 | `f65K.DW26` | func | `(i32) -> (i32)` |
| 159 | `f65K.IKzy` | func | `(i32) -> (i32)` |
| 160 | `f65K.lwsF` | func | `() -> (i32)` |
| 161 | `f65K.BMQ0` | func | `() -> (i32)` |
| 162 | `f65K.zFLX` | func | `() -> (i32)` |
| 163 | `f65K.u90m` | func | `() -> (i32)` |
| 164 | `f65K.T1UW` | func | `(i32 i32) -> (i32)` |
| 165 | `f65K.g33h` | func | `(i32) -> ()` |
| 166 | `f65K.rnQY` | func | `(i32 i32) -> (i32)` |
| 167 | `f65K.jUZh` | func | `(i32) -> (i32)` |
| 168 | `f65K.qcpB` | func | `(i32) -> (i32)` |
| 169 | `f65K.Bc28` | func | `(i32) -> (i32)` |
| 170 | `f65K.sq6a` | func | `(i32) -> ()` |
| 171 | `f65K.ZmBp` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `f65K.SflK` | func | `(i32) -> (i32)` |
| 173 | `f65K.bJAb` | func | `(i32) -> (i32)` |
| 174 | `f65K.hEfS` | func | `(i32 i32) -> (i32)` |
| 175 | `f65K.ZANP` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `f65K.eEYs` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `f65K.zNph` | func | `(i32) -> (i32)` |
| 178 | `f65K.Jbuy` | func | `(i32) -> (i32)` |
| 179 | `f65K.ZotL` | func | `(i32) -> (i32)` |
| 180 | `f65K.UxVm` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `f65K.sp3u` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `f65K.v3df` | func | `(i32 i32) -> ()` |
| 183 | `f65K.ubmX` | func | `(i32 i32 i32) -> ()` |
| 184 | `f65K.xvvr` | func | `(i32 i32) -> ()` |
| 185 | `f65K.g7ev` | func | `(i32 i32 i32) -> ()` |
| 186 | `f65K.EaIv` | func | `(i32 i32) -> ()` |
| 187 | `f65K.JVPt` | func | `(i32 i32) -> ()` |
| 188 | `f65K.yq0q` | func | `(i32) -> (i32)` |
| 189 | `f65K.bK13` | func | `(i32 i32) -> (i32)` |
| 190 | `f65K.Fjxc` | func | `(i32) -> ()` |
| 191 | `f65K.bs51` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `f65K.Lxvv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `f65K.FyuT` | func | `(i32 i32) -> ()` |
| 194 | `f65K.bEB3` | func | `(i32 i32) -> ()` |
| 195 | `f65K.sY83` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `f65K.PPBy` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `f65K.SJ7K` | func | `(i32 f32) -> ()` |
| 198 | `f65K.p06V` | func | `(i32 f32) -> ()` |
| 199 | `f65K.Huu9` | func | `(i32 i32) -> ()` |
| 200 | `f65K.eh6I` | func | `(i32 i32) -> ()` |
| 201 | `f65K.dgtZ` | func | `(i32) -> (i32)` |
| 202 | `f65K.mc0u` | func | `(i32) -> (i32)` |
| 203 | `f65K.tfvY` | func | `(i32) -> (i32)` |
| 204 | `f65K.rAdV` | func | `(i32) -> (i32)` |
| 205 | `f65K.dVE3` | func | `(i32 i32 i32) -> ()` |
| 206 | `f65K.jxVs` | func | `(i32 i32 i32) -> ()` |
| 207 | `f65K.CXk0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `f65K.FY2E` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `f65K.dd4N` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `f65K.NhA1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `f65K.FZ3r` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `f65K.ZgX1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `f65K.maZh` | func | `(i32 i32) -> ()` |
| 214 | `f65K.vFwa` | func | `(i32 i32) -> ()` |
| 215 | `f65K.AHZX` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `f65K.onli` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `f65K.EH29` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `f65K.Ex6a` | func | `(i32) -> (i32)` |
| 219 | `f65K.DY8X` | func | `(i32) -> (i32)` |
| 220 | `f65K.eERl` | func | `(i32 i32) -> ()` |
| 221 | `f65K.faCt` | func | `(i32 i32) -> ()` |
| 222 | `f65K.oA3j` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `f65K.Rqvd` | func | `(i32) -> (i32)` |
| 224 | `f65K.ymiR` | func | `(i32) -> (i32)` |
| 225 | `f65K.IsQ3` | func | `(i32 i32) -> ()` |
| 226 | `f65K.yF0j` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `f65K.gqzY` | func | `(i32 i32) -> ()` |
| 228 | `f65K.YElJ` | func | `(i32 i32) -> ()` |
| 229 | `f65K.LTAr` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `f65K.sQXN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `f65K.E7jU` | func | `(i32 i32 i32) -> ()` |
| 232 | `f65K.yXAz` | func | `(i32 i32 i32) -> ()` |
| 233 | `f65K.Nt40` | func | `(i32 i32) -> ()` |
| 234 | `f65K.PlhX` | func | `(i32 i32) -> ()` |
| 235 | `f65K.sfi6` | func | `(i32 i32) -> ()` |
| 236 | `f65K.SyFB` | func | `(i32 i32) -> ()` |
| 237 | `f65K.E3gl` | func | `(i32 i32) -> ()` |
| 238 | `f65K.kx8I` | func | `(i32 i32) -> ()` |
| 239 | `f65K.YDbT` | func | `(i32 f32 f32) -> ()` |
| 240 | `f65K.r1Aw` | func | `(i32 f32 f32) -> ()` |
| 241 | `f65K.b6ax` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `f65K.OmMt` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `f65K.SGMx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `f65K.ZBSc` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `f65K.CzxI` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `f65K.KUZT` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `f65K.Yffh` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `f65K.Blym` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `f65K.fwiy` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `f65K.zjfM` | func | `(i32) -> ()` |
| 251 | `f65K.pkMM` | func | `(i32 i32) -> ()` |
| 252 | `f65K.cc4z` | func | `(i32 i32) -> ()` |
| 253 | `f65K.vFAX` | func | `(i32 i32) -> ()` |
| 254 | `f65K.Mfh3` | func | `(i32 i32) -> ()` |
| 255 | `f65K.esnI` | func | `(i32 i32) -> ()` |
| 256 | `f65K.TYMs` | func | `(i32 i32) -> ()` |
| 257 | `f65K.yeKk` | func | `(i32 i32) -> ()` |
| 258 | `f65K.AaB1` | func | `(i32 i32) -> ()` |
| 259 | `f65K.gn5c` | func | `(i32) -> (i32)` |
| 260 | `f65K.hwFF` | func | `(i32) -> (i32)` |
| 261 | `f65K.HHWM` | func | `(i32) -> (i32)` |
| 262 | `f65K.rpgB` | func | `(i32) -> (i32)` |
| 263 | `f65K.pOBL` | func | `(i32) -> ()` |
| 264 | `f65K.Boid` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `f65K.GA2b` | func | `(i32) -> ()` |
| 266 | `f65K.nipV` | func | `(i32) -> (i32)` |
| 267 | `f65K.pFVG` | func | `(i32) -> (i32)` |
| 268 | `f65K.TIUp` | func | `(i32) -> (i32)` |
| 269 | `f65K.EnSO` | func | `(i32) -> (i32)` |
| 270 | `f65K.muUj` | func | `(i32 i32) -> ()` |
| 271 | `f65K.S1Ga` | func | `(i32) -> ()` |
| 272 | `f65K.QzRL` | func | `(i32 i32) -> ()` |
| 273 | `f65K.lOHi` | func | `(i32) -> (i32)` |
| 274 | `f65K.LG5V` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `f65K.VR0o` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `f65K.g22l` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `f65K.szvB` | func | `(i32 i32) -> (i32)` |
| 278 | `f65K.qmyG` | func | `(i32 i32) -> (i32)` |
| 279 | `f65K.IhT9` | func | `(i32 i32) -> (i32)` |
| 280 | `f65K.gcUg` | func | `(i32 i32) -> (i32)` |
| 281 | `f65K.iu3g` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `R7KD` | func | 1851 | `(i32) -> ()` |
| `a6ZX` | func | 2212 | `(i32 i32) -> ()` |
| `cQ9q` | func | 1187 | `(i32 i32 i32 i32) -> (i32)` |
| `c8XH` | func | 2491 | `(i32 i32) -> ()` |
| `BphD` | func | 1547 | `(i32 i32) -> (i32)` |
| `kHeJ` | func | 1601 | `(i32 i32 i32 i32) -> (i32)` |
| `gW3u` | func | 2423 | `(i32) -> ()` |
| `tfcH` | func | 2944 | `(i32 i32) -> (i32 i32)` |
| `uvFn` | func | 1310 | `(i32 i32 i32) -> (i32)` |
| `zOv8` | func | 687 | `(i32 i32) -> (i32)` |
| `D1r9` | func | 3061 | `(i32) -> ()` |
| `C7QY` | func | 1470 | `(i32 i32) -> (i32)` |
| `avls` | func | 597 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WzYi` | func | 2420 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `mFEP` | func | 1441 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `OUKr` | func | 1850 | `(i32) -> ()` |
| `u7SB` | func | 1086 | `(i32 i32) -> ()` |
| `RRQ7` | func | 792 | `(i32 i32) -> (i32)` |
| `IBfY` | func | 3000 | `(i32 i32) -> ()` |
| `IemV` | func | 1835 | `(i32 i32) -> (i32)` |
| `u1Oz` | func | 1485 | `(i32 f64) -> (f64)` |
| `GcCo` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `aKw3` | func | 3103 | `() -> (f64)` |
| `Y9wJ` | func | 2738 | `(i32) -> (i32)` |
| `PpHk` | func | 1719 | `(i32 i32) -> (i32)` |
| `HbQi` | func | 2290 | `(i32 i32) -> (i32)` |
| `UUpo` | func | 2945 | `(i32 i32) -> (i32 i32)` |
| `EQdX` | func | 2942 | `(i32 i32) -> (i32 i32)` |
| `Ptez` | func | 2425 | `(i32) -> (i32)` |
| `Rg80` | func | 2292 | `(i32 i32) -> (i32)` |
| `chSb` | func | 1216 | `(i32 i32) -> (i32)` |
| `uX2d` | func | 1259 | `(i32) -> (i32)` |
| `jyTG` | func | 1380 | `(i32 i32) -> (i32)` |
| `gqZy` | func | 2435 | `(i32) -> (i32)` |
| `yYH0` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `V2Iz` | func | 2438 | `(i32) -> (i32)` |
| `eyUZ` | func | 2889 | `() -> ()` |
| `kD7g` | func | 2426 | `(i32) -> (i32)` |
| `CJ3q` | func | 2943 | `(i32 i32) -> (i32 i32)` |
| `qABL` | func | 661 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Uifu` | func | 2433 | `(i32 i32) -> ()` |
| `IcdU` | func | 1986 | `(i32 f64 f64 f64) -> (i32)` |
| `Dx5U` | func | 1708 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `L0We` | func | 2322 | `(i32 i32) -> (i32)` |
| `SYsN` | func | 2417 | `(i32) -> (i32)` |
| `tiq2` | func | 548 | `(i32 i32 i32) -> (i32)` |
| `EhY4` | func | 2421 | `(i32) -> (i32)` |
| `lbm6` | func | 1085 | `(i32 i32) -> (i32)` |
| `p1Nj` | func | 2213 | `(i32 f64) -> (i32)` |
| `bZJ8` | func | 719 | `(i32) -> (i32)` |
| `ZuOh` | func | 3055 | `(i32 i32 i32) -> ()` |
| `ZkgX` | func | 1267 | `(i32 i32) -> (i32)` |
| `zPvr` | func | 2954 | `(i32) -> (i32 i32)` |
| `haZc` | func | 1942 | `(i32 i32) -> ()` |
| `n2t5` | func | 1450 | `(i32) -> (i32)` |
| `o8ls` | func | 1778 | `() -> (i32)` |
| `dlHL` | func | 2422 | `(i32) -> (i32)` |
| `p0dY` | func | 1909 | `(i32 i32 i32 i32) -> ()` |
| `jHo1` | func | 897 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NauS` | func | 1818 | `(i32 i32 f64 f64 f64) -> ()` |
| `RNHh` | func | 2454 | `(i32) -> (i32)` |
| `joUy` | func | 2503 | `() -> (i32)` |
| `Tev1` | func | 2456 | `(i32) -> (i32)` |
| `ZBHy` | func | 2716 | `(i32) -> (i32)` |
| `ACmP` | func | 2362 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `M3MI` | func | 1146 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `hZd4` | func | 1449 | `(i32 i32 i32 i32) -> (i32)` |
| `yxgJ` | func | 2359 | `(i32) -> (i32)` |
| `nD80` | func | 2908 | `(i32 i32) -> (i32)` |
| `oPqG` | func | 649 | `(i32 i32) -> (i32)` |
| `L07n` | func | 1907 | `(i32) -> (i32)` |
| `LYMh` | func | 2729 | `(i32) -> (i32)` |
| `UJYO` | func | 1481 | `(i32 i32) -> (i32)` |
| `L9UF` | func | 2402 | `(i32 i32) -> ()` |
| `t1Ue` | func | 1798 | `(i32 i32 i32 i32) -> (i32)` |
| `KOF7` | func | 1563 | `(i32 f64 f64 f64) -> (i32)` |
| `N0Nb` | func | 2990 | `(i32 i32 i32 i32) -> ()` |
| `UFNe` | func | 2956 | `(i32) -> (i32 i32)` |
| `FAzp` | func | 2913 | `(i32 i32 i32 i32) -> (i32)` |
| `BJTr` | func | 1558 | `(i32 i32) -> ()` |
| `va64` | func | 2335 | `(i32 i32 i32 i32) -> (i32)` |
| `m51k` | func | 2771 | `(i32) -> (i32)` |
| `VISl` | func | 2919 | `(i32 i32) -> ()` |
| `gxJh` | func | 2003 | `(i32 i32) -> ()` |
| `E9bR` | func | 2291 | `(i32 i32) -> (i32)` |
| `gT5x` | func | 2445 | `(i32) -> (i32)` |
| `iYpV` | func | 887 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `FVok` | func | 2437 | `(i32 i32) -> ()` |
| `QIbM` | func | 3062 | `() -> ()` |
| `u2PO` | func | 1517 | `(i32 i32 i32 i32) -> (i32)` |
| `I7SX` | func | 1406 | `() -> (i32)` |
| `vjPp` | func | 2419 | `(i32) -> (i32)` |
| `xk2X` | func | 1665 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `hGIV` | func | 1497 | `(i32 i32 i32) -> (i32)` |
| `ucW1` | func | 2968 | `() -> (i32 i32)` |
| `zAY5` | func | 2937 | `(i32 i32 i32) -> (i32 i32)` |
| `E9xt` | func | 2535 | `(i32 i32) -> ()` |
| `OYom` | func | 2026 | `(i32 i32) -> (i32)` |
| `KSpC` | func | 2749 | `(i32) -> ()` |
| `YITt` | func | 1686 | `(i32) -> (i32)` |
| `EKdY` | func | 2947 | `(i32 i32) -> (i32 i32)` |
| `FVOS` | func | 1359 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `zhRm` | func | 1427 | `(i32 i32 i32 i32) -> ()` |
| `agYq` | func | 1446 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `iPBt` | func | 1968 | `(i32 f64) -> (i32)` |
| `npAQ` | func | 3028 | `() -> (i32)` |
| `KpZt` | func | 1825 | `(i32 i32) -> ()` |
| `Z85q` | func | 2447 | `(i32 i32) -> (i32)` |
| `t5UC` | func | 1456 | `(i32 i32) -> (i32)` |
| `bDzD` | func | 3108 | `(i32) -> ()` |
| `EDEU` | func | 1842 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `Hhqf` | func | 3130 | `() -> (i32)` |
| `kYKo` | func | 1294 | `(i32) -> ()` |
| `TfdV` | func | 3131 | `() -> (i32)` |
| `nPVj` | func | 2108 | `(i32 i32) -> (i32)` |
| `XLq1` | func | 1531 | `(i32) -> (i32)` |
| `AD7k` | func | 1402 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `hT5k` | func | 2436 | `(i32) -> (i32)` |
| `Uh1h` | func | 2946 | `(i32 i32) -> (i32 i32)` |
| `F4Wl` | func | 2403 | `(i32) -> (i32)` |
| `U7Mr` | global | 2 | `` |
| `OyEm` | func | 2424 | `(i32) -> (i32)` |
| `GPvB` | func | 2953 | `(i32) -> (i32 i32)` |
| `wHNB` | func | 2243 | `(i32 i32) -> ()` |
| `aH9w` | func | 1240 | `(i32 i32 i32) -> ()` |
| `kbfV` | func | 2967 | `() -> (i32 i32)` |
| `zeJi` | func | 2376 | `(i32) -> (i32)` |
| `Mixf` | func | 1482 | `(i32 i32) -> (i32)` |
| `WSO5` | func | 2455 | `(i32) -> (i32)` |
| `mz0a` | func | 2709 | `(i32) -> (i32)` |
| `Eb2g` | func | 1360 | `(i32 f64 f64) -> (i32)` |
| `sJCA` | func | 2999 | `(i32 i32 i32) -> ()` |
| `oZ0J` | func | 2416 | `(i32) -> (f64)` |
| `DrhB` | func | 869 | `(i32 i32) -> (i32)` |
| `sCHF` | func | 2139 | `(i32 i32) -> (i32)` |
| `gCyy` | func | 1559 | `(i32 i32) -> ()` |
| `OYbj` | func | 1892 | `(i32) -> (i32)` |
| `aKmn` | func | 1234 | `(i32 i32 i32) -> (i32)` |
| `BBDi` | func | 2536 | `() -> (i32)` |
| `Opra` | func | 868 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `sLTX` | func | 1701 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `keUm` | func | 2293 | `(i32 i32) -> (i32)` |
| `jM3r` | global | 1 | `` |
| `mlyq` | func | 2446 | `(i32 i32) -> (i32)` |
| `hmHa` | func | 2938 | `(i32 i32 i32) -> (i32 i32)` |
| `pmnD` | func | 724 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Vj7O` | func | 2948 | `(i32 i32) -> (i32 i32)` |
| `Mfyf` | func | 2952 | `(i32) -> (i32 i32)` |
| `oIJr` | func | 2418 | `(i32) -> (i32)` |
| `Bkaa` | func | 3107 | `(i32) -> (i32)` |
| `crLR` | func | 1193 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `VoVp` | func | 1783 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `LNoh` | func | 1186 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `KFum` | func | 2955 | `(i32) -> (i32 i32)` |
| `cnFA` | func | 2160 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 733 · max 733
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2015248, `i32` = i32.const 2015812

## Functions

- 2,859 bodies · 3,987,961 code bytes · avg 1.4 KB
- instruction scan: 2,859 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 104 |
| <= 128 bytes | 251 |
| <= 256 bytes | 365 |
| <= 512 bytes | 663 |
| <= 1024 bytes | 571 |
| <= 2048 bytes | 414 |
| <= 4096 bytes | 182 |
| <= 8192 bytes | 88 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 213 | 194,883 | 88,446 | local.get×25924, i32.const×9923, i32.load×5634, local.set×4736, local.tee×4648 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,484 | 54,537 | local.get×15175, i32.const×6560, i32.add×3203, local.set×3090, i32.load×2945 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 125 | 48,853 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,650 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,545 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 126 | 19,829 | 8,878 | local.get×2493, i32.const×1113, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,713 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 61 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 191 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 222 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 713 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 998 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1553 | `(i32 i32) -> (i32)` | 180 | 54,455 | 19,757 | local.get×6549, i32.const×2619, i64.store×1893, i64.const×1069, i64.load×1044 |
| 1952 | `(i32 i32) -> ()` | 110 | 38,693 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2542 | `(i32 i32) -> ()` | 397 | 142,149 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2811 | `(i32 i32 i32 i32) -> ()` | 137 | 30,438 | 13,878 | local.get×4157, i32.const×1460, local.tee×728, local.set×674, i32.load×609 |
| 2830 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 533,425 |
| `i32.const` | 223,596 |
| `local.tee` | 99,195 |
| `local.set` | 93,243 |
| `i32.load` | 93,207 |
| `i32.add` | 86,342 |
| `end` | 78,345 |
| `br_if` | 63,691 |
| `i32.store` | 46,089 |
| `block` | 36,897 |
| `i64.const` | 32,177 |
| `i64.store` | 31,285 |
| `if` | 29,859 |
| `call` | 28,802 |
| `i32.sub` | 24,376 |
| `i64.load` | 23,192 |
| `br` | 22,986 |
| `i32.eqz` | 19,297 |
| `select` | 16,818 |
| `i32.shl` | 16,316 |
| `i32.and` | 16,220 |
| `i32.ne` | 15,726 |
| `i32.load8_u` | 14,746 |
| `i32.eq` | 13,782 |
| `i32.store8` | 12,527 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,859/2,859 (degraded: 0)
