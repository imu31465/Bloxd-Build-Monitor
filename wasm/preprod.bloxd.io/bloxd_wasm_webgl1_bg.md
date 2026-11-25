# WASM module: `bloxd_wasm_webgl1_bg`

> environment **preprod.bloxd.io** · build `8104he.3820eae0` · analyzed 2026-11-25T18:33:17+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgl1_bg.0af09c3f731b49829d5f.wasm
> 4,855,035 bytes (4.6 MB) · sha256 `1a777fd3f8c3daff…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,851,495 → 4,855,035 bytes (+3,540)
- defined functions 2,869 → 2,871
- code bytes 4,001,682 → 4,005,177
- data bytes 803,426 → 803,461
- name-section module id `e432d9585609a142.10601` → `dbfc0d8323a68bfc.10616`
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,871 / 282 |
| Exports / imports | 157 / 283 |
| Code bytes (function bodies) | 4,005,177 (3.8 MB) |
| Total local variables | 30,568 |
| Instructions (scanable bodies) | 1,879,735 |
| Data segments / bytes | 3,771 / 803,461 |
| Element segments / entries | 1 / 734 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `dbfc0d8323a68bfc.10616` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,494 | 175 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,920 | 2871 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,475 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,010,445 | 2871 |
| 11 | data | 833,938 | 3771 |
| 0 | custom:name | 30 | — |

## Types

175 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `k7QE.ZAiv` | memory | `[128..14648]` |
| 0 | `k7QE.HHUz` | func | `(i32) -> (f64)` |
| 1 | `k7QE.Zgj8` | func | `() -> (i32)` |
| 2 | `k7QE.fIzZ` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `k7QE.Pgxm` | func | `(i32) -> ()` |
| 4 | `k7QE.Q2PY` | func | `(i32 i32) -> (i32)` |
| 5 | `k7QE.kvaw` | func | `(i32) -> (i32)` |
| 6 | `k7QE.AExe` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `k7QE.Cq1P` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `k7QE.jC77` | func | `(i32) -> (i32)` |
| 9 | `k7QE.X9Hx` | func | `(i32 i32) -> ()` |
| 10 | `k7QE.pnxK` | func | `(i32 i32) -> ()` |
| 11 | `k7QE.kyLz` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `k7QE.y24J` | func | `(i32 i32) -> (i32)` |
| 13 | `k7QE.uOzT` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `k7QE.HjtV` | func | `(i32) -> (i32)` |
| 15 | `k7QE.tkre` | func | `(i32 i32) -> (i32)` |
| 16 | `k7QE.sx13` | func | `(i32 i32) -> (i32)` |
| 17 | `k7QE.Hccn` | func | `(i32 i32) -> ()` |
| 18 | `k7QE.IyVl` | func | `(i32) -> (i32)` |
| 19 | `k7QE.zBqs` | func | `(i32) -> (i32)` |
| 20 | `k7QE.tOak` | func | `(i32) -> (i32)` |
| 21 | `k7QE.ZaI8` | func | `(i32) -> ()` |
| 22 | `k7QE.l7c3` | func | `(i32 i32) -> ()` |
| 23 | `k7QE.wqRt` | func | `(i32 i32) -> ()` |
| 24 | `k7QE.UXzZ` | func | `(i32) -> (i32)` |
| 25 | `k7QE.yLCy` | func | `(i32 i32) -> ()` |
| 26 | `k7QE.jEwN` | func | `(i32 i32) -> (i32)` |
| 27 | `k7QE.NiN7` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `k7QE.cPED` | func | `(i32 i32) -> (i32)` |
| 29 | `k7QE.BM9Q` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `k7QE.shHl` | func | `(i32) -> (i32)` |
| 31 | `k7QE.aIc9` | func | `() -> (f64)` |
| 32 | `k7QE.nmhC` | func | `(i32 i32) -> ()` |
| 33 | `k7QE.jkEO` | func | `(i32) -> (i32)` |
| 34 | `k7QE.sxHP` | func | `(i32) -> (i32)` |
| 35 | `k7QE.Qav6` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `k7QE.BU4J` | func | `(i32) -> (i32)` |
| 37 | `k7QE.GJk7` | func | `(i32) -> (i32)` |
| 38 | `k7QE.UP3K` | func | `(i32) -> (i32)` |
| 39 | `k7QE.WUAo` | func | `(i32 i32) -> (i32)` |
| 40 | `k7QE.dUl1` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `k7QE.Xocx` | func | `(i32) -> (i32)` |
| 42 | `k7QE.VdZN` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `k7QE.iG7Z` | func | `(i32) -> (i32)` |
| 44 | `k7QE.Pw6z` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `k7QE.oqYh` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `k7QE.rH8I` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `k7QE.jHxA` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `k7QE.zwoj` | func | `(i32 i32 i32) -> ()` |
| 49 | `k7QE.PmiH` | func | `(i32 i32 i32) -> ()` |
| 50 | `k7QE.qvbT` | func | `(i32 i32 i32) -> ()` |
| 51 | `k7QE.sTqF` | func | `(i32 i32) -> ()` |
| 52 | `k7QE.A9c4` | func | `(i32 i32) -> ()` |
| 53 | `k7QE.gX40` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `k7QE.ftVZ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `k7QE.y892` | func | `(i32 f32 f32) -> ()` |
| 56 | `k7QE.JLUj` | func | `(i32 f32 f32) -> ()` |
| 57 | `k7QE.ad5p` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `k7QE.VKms` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `k7QE.uhNH` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `k7QE.PUHX` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `k7QE.Dqc3` | func | `(i32 i32 i32) -> ()` |
| 62 | `k7QE.xPZC` | func | `(i32 i32 i32) -> ()` |
| 63 | `k7QE.wvIG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `k7QE.iIkZ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `k7QE.IFqS` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `k7QE.WFy7` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `k7QE.GfHc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `k7QE.RNRP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `k7QE.gYhd` | func | `(i32) -> (i32)` |
| 70 | `k7QE.h1yc` | func | `(i32) -> ()` |
| 71 | `k7QE.dob5` | func | `(i32) -> (i32)` |
| 72 | `k7QE.eQjc` | func | `(i32 i32) -> (i32)` |
| 73 | `k7QE.CjTz` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `k7QE.YsyH` | func | `(i32 i32 i32) -> ()` |
| 75 | `k7QE.VwJo` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `k7QE.BiOq` | func | `() -> (f64)` |
| 77 | `k7QE.Pedu` | func | `() -> (f64)` |
| 78 | `k7QE.gGLF` | func | `(i32 i32) -> ()` |
| 79 | `k7QE.OgZz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `k7QE.ssuQ` | func | `(i32 i32 i32) -> ()` |
| 81 | `k7QE.gE46` | func | `(i32 i32 i32) -> ()` |
| 82 | `k7QE.lgSX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `k7QE.q7jH` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `k7QE.UguK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `k7QE.suzv` | func | `(i32 i32) -> ()` |
| 86 | `k7QE.ksLW` | func | `(i32 i32) -> ()` |
| 87 | `k7QE.LEPR` | func | `(i32) -> (i32)` |
| 88 | `k7QE.PG6f` | func | `(i32 i32) -> ()` |
| 89 | `k7QE.dfM3` | func | `(i32 i32) -> ()` |
| 90 | `k7QE.MyqP` | func | `(i32 i32 i32) -> ()` |
| 91 | `k7QE.UFeO` | func | `(i32 i32 i32) -> ()` |
| 92 | `k7QE.CuR3` | func | `(i32) -> (i32)` |
| 93 | `k7QE.thme` | func | `(i32) -> (i32)` |
| 94 | `k7QE.Icz9` | func | `(i32 i32) -> (i32)` |
| 95 | `k7QE.Eywq` | func | `(i32 i32) -> (i32)` |
| 96 | `k7QE.GtVH` | func | `(i32 i32) -> ()` |
| 97 | `k7QE.VPXV` | func | `(i32 i32) -> ()` |
| 98 | `k7QE.m56a` | func | `(i32 i32 i32) -> ()` |
| 99 | `k7QE.fg02` | func | `(i32 i32 i32) -> ()` |
| 100 | `k7QE.DvQE` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `k7QE.fXGy` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `k7QE.wNtJ` | func | `(i32 i32 f32) -> ()` |
| 103 | `k7QE.wsrp` | func | `(i32 i32 f32) -> ()` |
| 104 | `k7QE.WvSz` | func | `(i32 i32 i32) -> ()` |
| 105 | `k7QE.eTN9` | func | `(i32 i32 i32) -> ()` |
| 106 | `k7QE.QWUp` | func | `(i32 i32 i32) -> ()` |
| 107 | `k7QE.YlEx` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `k7QE.WGmV` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `k7QE.qepp` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `k7QE.xCEm` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `k7QE.LCVV` | func | `(i32 i32) -> ()` |
| 112 | `k7QE.zV0J` | func | `(i32 i32) -> ()` |
| 113 | `k7QE.OYwY` | func | `(i32 i32) -> ()` |
| 114 | `k7QE.mpbq` | func | `(i32 i32) -> ()` |
| 115 | `k7QE.BZGu` | func | `(i32) -> (i32)` |
| 116 | `k7QE.bMRt` | func | `(i32) -> (i32)` |
| 117 | `k7QE.KdGR` | func | `(i32) -> (i32)` |
| 118 | `k7QE.IduE` | func | `(i32) -> (i32)` |
| 119 | `k7QE.BU5k` | func | `(i32 i32) -> ()` |
| 120 | `k7QE.GxPQ` | func | `(i32 i32) -> ()` |
| 121 | `k7QE.o0Z5` | func | `(i32 i32) -> ()` |
| 122 | `k7QE.D0gE` | func | `(i32 i32) -> ()` |
| 123 | `k7QE.VvuD` | func | `(i32 i32) -> ()` |
| 124 | `k7QE.sjj9` | func | `(i32 i32) -> ()` |
| 125 | `k7QE.WdWm` | func | `(i32 i32) -> (i32)` |
| 126 | `k7QE.rPmM` | func | `(i32 i32) -> (i32)` |
| 127 | `k7QE.poDs` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `k7QE.F74l` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `k7QE.IZha` | func | `(i32 i32) -> ()` |
| 130 | `k7QE.B2bK` | func | `(i32 i32) -> ()` |
| 131 | `k7QE.Ipxb` | func | `(i32) -> (i32)` |
| 132 | `k7QE.bayg` | func | `(i32 i32) -> ()` |
| 133 | `k7QE.ZD4y` | func | `(i32 i32) -> ()` |
| 134 | `k7QE.oTtS` | func | `(i32 i32 i32) -> ()` |
| 135 | `k7QE.MAxT` | func | `(i32 i32 i32) -> ()` |
| 136 | `k7QE.rsL4` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `k7QE.I7Dr` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `k7QE.qEc3` | func | `(i32 i32) -> ()` |
| 139 | `k7QE.YOup` | func | `(i32 i32 i32) -> ()` |
| 140 | `k7QE.CqIy` | func | `(i32 i32 i32) -> ()` |
| 141 | `k7QE.j0EA` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `k7QE.eFZu` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `k7QE.KeM3` | func | `(i32 i32 i32) -> ()` |
| 144 | `k7QE.MU2i` | func | `(i32 i32 i32) -> ()` |
| 145 | `k7QE.tyep` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `k7QE.ccyU` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `k7QE.OTSJ` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `k7QE.Oomt` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `k7QE.QLgn` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `k7QE.FSyB` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `k7QE.u2xF` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `k7QE.kdWX` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `k7QE.yFWs` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `k7QE.opFs` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `k7QE.PIvv` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `k7QE.Waea` | func | `(i32) -> (i32)` |
| 157 | `k7QE.HSrD` | func | `(i32) -> (i32)` |
| 158 | `k7QE.NtSQ` | func | `(i32) -> (i32)` |
| 159 | `k7QE.WuDZ` | func | `(i32) -> (i32)` |
| 160 | `k7QE.c9rA` | func | `() -> (i32)` |
| 161 | `k7QE.Gl7o` | func | `() -> (i32)` |
| 162 | `k7QE.P2g2` | func | `() -> (i32)` |
| 163 | `k7QE.PB8n` | func | `() -> (i32)` |
| 164 | `k7QE.jQcZ` | func | `(i32 i32) -> (i32)` |
| 165 | `k7QE.qzS9` | func | `(i32) -> ()` |
| 166 | `k7QE.VeGO` | func | `(i32 i32) -> (i32)` |
| 167 | `k7QE.WPdm` | func | `(i32) -> (i32)` |
| 168 | `k7QE.ZYSy` | func | `(i32) -> (i32)` |
| 169 | `k7QE.jWvz` | func | `(i32) -> (i32)` |
| 170 | `k7QE.IWjo` | func | `(i32) -> ()` |
| 171 | `k7QE.a2YS` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `k7QE.Ct6T` | func | `(i32) -> (i32)` |
| 173 | `k7QE.jgev` | func | `(i32) -> (i32)` |
| 174 | `k7QE.rOjO` | func | `(i32 i32) -> (i32)` |
| 175 | `k7QE.NG5C` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `k7QE.LVh7` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `k7QE.QgfE` | func | `(i32) -> (i32)` |
| 178 | `k7QE.YoHz` | func | `(i32) -> (i32)` |
| 179 | `k7QE.jiKp` | func | `(i32) -> (i32)` |
| 180 | `k7QE.htsX` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `k7QE.tiP6` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `k7QE.wj7o` | func | `(i32 i32) -> ()` |
| 183 | `k7QE.PPyb` | func | `(i32 i32 i32) -> ()` |
| 184 | `k7QE.we52` | func | `(i32 i32) -> ()` |
| 185 | `k7QE.c47m` | func | `(i32 i32 i32) -> ()` |
| 186 | `k7QE.X1SB` | func | `(i32 i32) -> ()` |
| 187 | `k7QE.ch9z` | func | `(i32 i32) -> ()` |
| 188 | `k7QE.arKw` | func | `(i32) -> (i32)` |
| 189 | `k7QE.vXs7` | func | `(i32 i32) -> (i32)` |
| 190 | `k7QE.VdQd` | func | `(i32) -> ()` |
| 191 | `k7QE.PCQl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `k7QE.VtPc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `k7QE.oHDE` | func | `(i32 i32) -> ()` |
| 194 | `k7QE.GnNB` | func | `(i32 i32) -> ()` |
| 195 | `k7QE.fc1g` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `k7QE.W9uj` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `k7QE.k8h7` | func | `(i32 f32) -> ()` |
| 198 | `k7QE.TVb3` | func | `(i32 f32) -> ()` |
| 199 | `k7QE.keLl` | func | `(i32 i32) -> ()` |
| 200 | `k7QE.TC8M` | func | `(i32 i32) -> ()` |
| 201 | `k7QE.aaxP` | func | `(i32) -> (i32)` |
| 202 | `k7QE.xriG` | func | `(i32) -> (i32)` |
| 203 | `k7QE.N6D6` | func | `(i32) -> (i32)` |
| 204 | `k7QE.mBYF` | func | `(i32) -> (i32)` |
| 205 | `k7QE.XzW0` | func | `(i32 i32 i32) -> ()` |
| 206 | `k7QE.Lp29` | func | `(i32 i32 i32) -> ()` |
| 207 | `k7QE.D6Zc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `k7QE.jcyF` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `k7QE.zdqT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `k7QE.SXle` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `k7QE.QEQp` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `k7QE.Mnsc` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `k7QE.BZjd` | func | `(i32 i32) -> ()` |
| 214 | `k7QE.QbCU` | func | `(i32 i32) -> ()` |
| 215 | `k7QE.yP5r` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `k7QE.bmF4` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `k7QE.rslT` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `k7QE.eUnt` | func | `(i32) -> (i32)` |
| 219 | `k7QE.AXhB` | func | `(i32) -> (i32)` |
| 220 | `k7QE.WwXc` | func | `(i32 i32) -> ()` |
| 221 | `k7QE.lgNw` | func | `(i32 i32) -> ()` |
| 222 | `k7QE.H2qe` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `k7QE.QjXU` | func | `(i32) -> (i32)` |
| 224 | `k7QE.cNzr` | func | `(i32) -> (i32)` |
| 225 | `k7QE.kv2Y` | func | `(i32 i32) -> ()` |
| 226 | `k7QE.UlYO` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `k7QE.x7z5` | func | `(i32 i32) -> ()` |
| 228 | `k7QE.D4Ht` | func | `(i32 i32) -> ()` |
| 229 | `k7QE.ahbf` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `k7QE.DuY7` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `k7QE.a3UR` | func | `(i32 i32 i32) -> ()` |
| 232 | `k7QE.f4Ea` | func | `(i32 i32 i32) -> ()` |
| 233 | `k7QE.F2GF` | func | `(i32 i32) -> ()` |
| 234 | `k7QE.O7JO` | func | `(i32 i32) -> ()` |
| 235 | `k7QE.Vv7I` | func | `(i32 i32) -> ()` |
| 236 | `k7QE.mGmO` | func | `(i32 i32) -> ()` |
| 237 | `k7QE.KKVG` | func | `(i32 i32) -> ()` |
| 238 | `k7QE.yIHP` | func | `(i32 i32) -> ()` |
| 239 | `k7QE.mJbq` | func | `(i32 f32 f32) -> ()` |
| 240 | `k7QE.Nlle` | func | `(i32 f32 f32) -> ()` |
| 241 | `k7QE.SGQQ` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `k7QE.QjXk` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `k7QE.vxFN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `k7QE.KYvk` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `k7QE.eTYi` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `k7QE.QfzI` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `k7QE.CGlg` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `k7QE.gGU7` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `k7QE.C88q` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `k7QE.XEAi` | func | `(i32) -> ()` |
| 251 | `k7QE.yWTb` | func | `(i32 i32) -> ()` |
| 252 | `k7QE.sxkR` | func | `(i32 i32) -> ()` |
| 253 | `k7QE.AcW8` | func | `(i32 i32) -> ()` |
| 254 | `k7QE.ReHa` | func | `(i32 i32) -> ()` |
| 255 | `k7QE.oLSm` | func | `(i32 i32) -> ()` |
| 256 | `k7QE.KTWi` | func | `(i32 i32) -> ()` |
| 257 | `k7QE.teWy` | func | `(i32 i32) -> ()` |
| 258 | `k7QE.Tzn4` | func | `(i32 i32) -> ()` |
| 259 | `k7QE.sIJm` | func | `(i32) -> (i32)` |
| 260 | `k7QE.FEfp` | func | `(i32) -> (i32)` |
| 261 | `k7QE.rcy4` | func | `(i32) -> (i32)` |
| 262 | `k7QE.uTRL` | func | `(i32) -> (i32)` |
| 263 | `k7QE.udPU` | func | `(i32) -> ()` |
| 264 | `k7QE.RkR1` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `k7QE.c4U2` | func | `(i32) -> ()` |
| 266 | `k7QE.iPea` | func | `(i32) -> (i32)` |
| 267 | `k7QE.ywAd` | func | `(i32) -> (i32)` |
| 268 | `k7QE.bnKs` | func | `(i32) -> (i32)` |
| 269 | `k7QE.GHmV` | func | `(i32) -> (i32)` |
| 270 | `k7QE.XVFo` | func | `(i32 i32) -> ()` |
| 271 | `k7QE.OsTN` | func | `(i32) -> ()` |
| 272 | `k7QE.fiN7` | func | `(i32 i32) -> ()` |
| 273 | `k7QE.hSoy` | func | `(i32) -> (i32)` |
| 274 | `k7QE.msJO` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `k7QE.ujeR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `k7QE.p76X` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `k7QE.zEMh` | func | `(i32 i32) -> (i32)` |
| 278 | `k7QE.QQDe` | func | `(i32 i32) -> (i32)` |
| 279 | `k7QE.XjOe` | func | `(i32 i32) -> (i32)` |
| 280 | `k7QE.d7TR` | func | `(i32 i32) -> (i32)` |
| 281 | `k7QE.QPhm` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `memory` | memory | 0 | `` |
| `gZ3h` | func | 2457 | `(i32 i32) -> (i32)` |
| `x2T2` | func | 1446 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `GYrK` | func | 2959 | `(i32 i32) -> (i32 i32)` |
| `fzKV` | func | 2386 | `(i32) -> (i32)` |
| `Aan4` | func | 2413 | `(i32 i32) -> ()` |
| `zRu0` | func | 1804 | `(i32 i32 i32 i32) -> (i32)` |
| `QvVl` | func | 2782 | `(i32) -> (i32)` |
| `cBHd` | func | 2953 | `(i32 i32) -> (i32 i32)` |
| `CdOp` | func | 2444 | `(i32 i32) -> ()` |
| `xHoI` | func | 2432 | `(i32) -> (i32)` |
| `YVpv` | func | 2467 | `(i32) -> (i32)` |
| `pXQV` | func | 2465 | `(i32) -> (i32)` |
| `gBXS` | func | 649 | `(i32 i32) -> (i32)` |
| `oyXj` | func | 1315 | `(i32 i32 i32) -> (i32)` |
| `R9vg` | func | 548 | `(i32 i32 i32) -> (i32)` |
| `SD9F` | func | 3066 | `(i32 i32 i32) -> ()` |
| `JewS` | func | 2924 | `(i32 i32 i32 i32) -> (i32)` |
| `SR8O` | func | 1899 | `(i32) -> (i32)` |
| `WDvv` | func | 2433 | `(i32) -> (i32)` |
| `hnW9` | func | 3010 | `(i32 i32 i32) -> ()` |
| `KWMm` | func | 2979 | `() -> (i32 i32)` |
| `AZ4O` | func | 2437 | `(i32) -> (i32)` |
| `q3BS` | func | 1264 | `(i32) -> (i32)` |
| `c9j2` | func | 1784 | `() -> (i32)` |
| `el3b` | func | 1222 | `(i32 i32) -> (i32)` |
| `ru5x` | func | 2965 | `(i32) -> (i32 i32)` |
| `ygao` | func | 728 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Last` | func | 2512 | `() -> (i32)` |
| `oHzk` | func | 3001 | `(i32 i32 i32 i32) -> ()` |
| `OovB` | func | 724 | `(i32) -> (i32)` |
| `qGkA` | func | 2954 | `(i32 i32) -> (i32 i32)` |
| `Ocn9` | func | 1386 | `(i32 i32) -> (i32)` |
| `blgB` | func | 1365 | `(i32 f64 f64) -> (i32)` |
| `wbOo` | func | 2967 | `(i32) -> (i32 i32)` |
| `GWiK` | func | 2435 | `(i32) -> (i32)` |
| `GHpP` | func | 2545 | `() -> (i32)` |
| `g2nZ` | func | 2458 | `(i32 i32) -> (i32)` |
| `jnIE` | func | 2900 | `() -> ()` |
| `toCj` | global | 2 | `` |
| `kWiw` | func | 1199 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Xsz9` | func | 889 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `LpcH` | func | 899 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `QGbO` | func | 2222 | `(i32 f64) -> (i32)` |
| `qXAS` | func | 2331 | `(i32 i32) -> (i32)` |
| `ZIey` | func | 2446 | `(i32) -> (i32)` |
| `Xz2e` | func | 688 | `(i32 i32) -> (i32)` |
| `cbcs` | func | 1240 | `(i32 i32 i32) -> (i32)` |
| `SCHM` | func | 2010 | `(i32 i32) -> ()` |
| `sd9O` | func | 2544 | `(i32 i32) -> ()` |
| `ehFW` | func | 2302 | `(i32 i32) -> (i32)` |
| `tIIH` | func | 1554 | `(i32 i32) -> (i32)` |
| `Xipv` | func | 2978 | `() -> (i32 i32)` |
| `y9I5` | func | 3039 | `() -> (i32)` |
| `kA5k` | func | 1566 | `(i32 i32) -> ()` |
| `KrBa` | func | 2966 | `(i32) -> (i32 i32)` |
| `b2sz` | func | 2430 | `(i32) -> (i32)` |
| `it50` | func | 2436 | `(i32) -> (i32)` |
| `cLJq` | func | 1491 | `(i32 f64) -> (f64)` |
| `Kn2G` | func | 1463 | `(i32 i32) -> (i32)` |
| `sRdH` | func | 2116 | `(i32 i32) -> (i32)` |
| `iDZy` | func | 1693 | `(i32) -> (i32)` |
| `JqUw` | func | 2429 | `(i32) -> (i32)` |
| `HOfB` | func | 2434 | `(i32) -> ()` |
| `Azyv` | func | 2456 | `(i32) -> (i32)` |
| `vpc8` | func | 2448 | `(i32 i32) -> ()` |
| `rbIN` | func | 1672 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `CMko` | func | 2919 | `(i32 i32) -> (i32)` |
| `skuo` | func | 1434 | `(i32 i32 i32 i32) -> ()` |
| `NgWy` | func | 2501 | `(i32 i32) -> ()` |
| `Z7MU` | global | 1 | `` |
| `Hp9t` | func | 2949 | `(i32 i32 i32) -> (i32 i32)` |
| `C5ri` | func | 1824 | `(i32 i32 f64 f64 f64) -> ()` |
| `iQJm` | func | 2977 | `() -> (i32 i32)` |
| `DqCJ` | func | 1451 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `rB1d` | func | 2301 | `(i32 i32) -> (i32)` |
| `Esvf` | func | 3119 | `(i32) -> ()` |
| `V5VN` | func | 1858 | `(i32) -> ()` |
| `NTSt` | func | 3142 | `() -> (i32)` |
| `tHVy` | func | 1455 | `(i32 i32 i32 i32) -> (i32)` |
| `rSEu` | func | 1456 | `(i32) -> (i32)` |
| `YjNA` | func | 2957 | `(i32 i32) -> (i32 i32)` |
| `vItx` | func | 3011 | `(i32 i32) -> ()` |
| `dRIh` | func | 1487 | `(i32 i32) -> (i32)` |
| `uhEX` | func | 1789 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `q7iw` | func | 2718 | `(i32) -> (i32)` |
| `ChvU` | func | 2740 | `(i32) -> (i32)` |
| `goul` | func | 1413 | `() -> (i32)` |
| `Egyh` | func | 1503 | `(i32 i32 i32) -> (i32)` |
| `oS5u` | func | 2726 | `(i32) -> (i32)` |
| `VNHp` | func | 1192 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `ecuY` | func | 1976 | `(i32 f64) -> (i32)` |
| `Nvhl` | func | 2466 | `(i32) -> (i32)` |
| `aSoE` | func | 1842 | `(i32 i32) -> (i32)` |
| `zwJ0` | func | 3114 | `() -> (f64)` |
| `GH0J` | func | 2168 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `LS2S` | func | 1409 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `hswC` | func | 3072 | `(i32) -> ()` |
| `knuO` | func | 2431 | `(i32) -> (i32)` |
| `exmh` | func | 872 | `(i32 i32) -> (i32)` |
| `z5pe` | func | 2414 | `(i32) -> (i32)` |
| `RYAx` | func | 2303 | `(i32 i32) -> (i32)` |
| `rQaQ` | func | 2252 | `(i32 i32) -> ()` |
| `OjlU` | func | 871 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `DnNS` | func | 3073 | `() -> ()` |
| `cJm0` | func | 3118 | `(i32) -> (i32)` |
| `rsTC` | func | 2449 | `(i32) -> (i32)` |
| `fRRr` | func | 2300 | `(i32 i32) -> (i32)` |
| `bruR` | func | 2385 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `O43R` | func | 1916 | `(i32 i32 i32 i32) -> ()` |
| `scgj` | func | 2147 | `(i32 i32) -> (i32)` |
| `Q5Cq` | func | 1272 | `(i32 i32) -> (i32)` |
| `gxZC` | func | 1849 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `PZeB` | func | 2963 | `(i32) -> (i32 i32)` |
| `Cn9g` | func | 2956 | `(i32 i32) -> (i32 i32)` |
| `E1cK` | func | 665 | `(i32 i32) -> (i32)` |
| `aPhv` | func | 1708 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `MMmZ` | func | 1151 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `dSgy` | func | 1726 | `(i32 i32) -> (i32)` |
| `XjIc` | func | 1950 | `(i32 i32) -> ()` |
| `aPc3` | func | 1607 | `(i32 i32 i32 i32) -> (i32)` |
| `VOAR` | func | 2428 | `(i32) -> (i32)` |
| `K3xV` | func | 1857 | `(i32) -> ()` |
| `pMtn` | func | 1364 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `upRd` | func | 1914 | `(i32) -> (i32)` |
| `gfnC` | func | 1570 | `(i32 f64 f64 f64) -> (i32)` |
| `n823` | func | 1245 | `(i32 i32 i32) -> ()` |
| `iVPZ` | func | 2964 | `(i32) -> (i32 i32)` |
| `o5qQ` | func | 1565 | `(i32 i32) -> ()` |
| `Q4Mf` | func | 1193 | `(i32 i32 i32 i32) -> (i32)` |
| `RjKZ` | func | 2955 | `(i32 i32) -> (i32 i32)` |
| `X6qi` | func | 2760 | `(i32) -> ()` |
| `PSBb` | func | 2930 | `(i32 i32) -> ()` |
| `vAym` | func | 599 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `N1Y7` | func | 2344 | `(i32 i32 i32 i32) -> (i32)` |
| `iWN9` | func | 2447 | `(i32) -> (i32)` |
| `ysjd` | func | 1089 | `(i32 i32) -> (i32)` |
| `HL60` | func | 3143 | `() -> (i32)` |
| `uI0C` | func | 1416 | `(i32) -> (i32)` |
| `jsSX` | func | 1476 | `(i32 i32) -> (i32)` |
| `y2AP` | func | 2948 | `(i32 i32 i32) -> (i32 i32)` |
| `zQlJ` | func | 745 | `(i32 i32 i32) -> (i32)` |
| `mZhF` | func | 2427 | `(i32) -> (f64)` |
| `X1Cg` | func | 1090 | `(i32 i32) -> ()` |
| `u1Vb` | func | 2034 | `(i32 i32) -> (i32)` |
| `SIUu` | func | 720 | `(i32 i32 i32 i32) -> (i32)` |
| `goMw` | func | 1488 | `(i32 i32) -> (i32)` |
| `a1YF` | func | 2221 | `(i32 i32) -> ()` |
| `pidi` | func | 2369 | `(i32) -> (i32)` |
| `m3I2` | func | 1715 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `QFfK` | func | 1298 | `(i32) -> ()` |
| `i3GG` | func | 1994 | `(i32 f64 f64 f64) -> (i32)` |
| `C2FM` | func | 2958 | `(i32 i32) -> (i32 i32)` |
| `LM4c` | func | 2749 | `(i32) -> (i32)` |
| `OKAG` | func | 1832 | `(i32 i32) -> ()` |
| `X1HG` | func | 661 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `uk1M` | func | 1524 | `(i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 735 · max 735
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2016672, `i32` = i32.const 2017236

## Functions

- 2,871 bodies · 4,005,177 code bytes · avg 1.4 KB
- instruction scan: 2,871 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 105 |
| <= 128 bytes | 252 |
| <= 256 bytes | 365 |
| <= 512 bytes | 666 |
| <= 1024 bytes | 574 |
| <= 2048 bytes | 418 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 90 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 217 | 194,712 | 88,375 | local.get×25902, i32.const×9917, i32.load×5640, local.set×4735, local.tee×4639 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,484 | 54,537 | local.get×15175, i32.const×6560, i32.add×3203, local.set×3090, i32.load×2945 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 125 | 48,661 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,622 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,547 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,727 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 63 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 191 | `(i32 i32) -> ()` | 10 | 26,749 | 12,881 | local.get×4533, i32.load×1219, i32.const×1026, end×802, i32.add×738 |
| 221 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 715 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 716 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1560 | `(i32 i32) -> (i32)` | 180 | 54,766 | 19,852 | local.get×6590, i32.const×2618, i64.store×1917, i64.const×1082, i64.load×1056 |
| 1961 | `(i32 i32) -> ()` | 111 | 39,586 | 17,528 | local.get×5140, i32.const×1646, local.set×891, local.tee×743, end×677 |
| 2553 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2822 | `(i32 i32 i32 i32) -> ()` | 137 | 31,353 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2841 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 535,795 |
| `i32.const` | 224,405 |
| `local.tee` | 99,618 |
| `i32.load` | 93,620 |
| `local.set` | 93,611 |
| `i32.add` | 86,578 |
| `end` | 78,693 |
| `br_if` | 64,072 |
| `i32.store` | 46,238 |
| `block` | 37,060 |
| `i64.const` | 32,341 |
| `i64.store` | 31,434 |
| `if` | 30,009 |
| `call` | 28,936 |
| `i32.sub` | 24,484 |
| `i64.load` | 23,308 |
| `br` | 23,099 |
| `i32.eqz` | 19,428 |
| `select` | 16,913 |
| `i32.shl` | 16,372 |
| `i32.and` | 16,326 |
| `i32.ne` | 15,797 |
| `i32.load8_u` | 14,852 |
| `i32.eq` | 13,857 |
| `i32.store8` | 12,567 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,871/2,871 (degraded: 0)
