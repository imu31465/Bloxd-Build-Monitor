# WASM module: `bloxd_wasm_webgl1_bg`

> environment **staging.bloxd.io** · build `yteou.5361c997` · analyzed 2026-11-28T13:51:33+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl1_bg.efd8005e468bc13f6a1a.wasm
> 4,934,921 bytes (4.7 MB) · sha256 `53a0d02bf121cebe…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,934,167 → 4,934,921 bytes (+754)
- data bytes 811,034 → 811,788
- name-section module id `b7522103cc7ee93e.10828` → `cac18d66d963deee.10828` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/167 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,930 / 284 |
| Exports / imports | 167 / 285 |
| Code bytes (function bodies) | 4,076,337 (3.9 MB) |
| Total local variables | 31,448 |
| Instructions (scanable bodies) | 1,912,836 |
| Data segments / bytes | 3,779 / 811,788 |
| Element segments / entries | 1 / 739 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `cac18d66d963deee.10828` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,528 | 180 |
| 2 | import | 3,426 | 285 |
| 3 | function | 2,984 | 2930 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,337 | 167 |
| 9 | element | 1,485 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,081,725 | 2930 |
| 11 | data | 842,332 | 3779 |
| 0 | custom:name | 30 | — |

## Types

180 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

285 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `FOgC.RH6S` | memory | `[128..14648]` |
| 0 | `FOgC.oMnl` | func | `(i32) -> (f64)` |
| 1 | `FOgC.VmPj` | func | `() -> (i32)` |
| 2 | `FOgC.pjOR` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `FOgC.vSNS` | func | `(i32) -> ()` |
| 4 | `FOgC.Ydz0` | func | `(i32 i32) -> (i32)` |
| 5 | `FOgC.LTS5` | func | `(i32) -> (i32)` |
| 6 | `FOgC.ynrQ` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `FOgC.oiFd` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `FOgC.y9vN` | func | `(i32) -> (i32)` |
| 9 | `FOgC.Mtrr` | func | `(i32 i32) -> ()` |
| 10 | `FOgC.QxlY` | func | `(i32 i32) -> ()` |
| 11 | `FOgC.fUTy` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `FOgC.sJUm` | func | `(i32 i32) -> (i32)` |
| 13 | `FOgC.T4f0` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `FOgC.J58I` | func | `(i32) -> (i32)` |
| 15 | `FOgC.b7jX` | func | `(i32 i32) -> (i32)` |
| 16 | `FOgC.Y3gj` | func | `(i32 i32) -> (i32)` |
| 17 | `FOgC.hbzC` | func | `(i32 i32) -> ()` |
| 18 | `FOgC.t3iV` | func | `(i32) -> (i32)` |
| 19 | `FOgC.s5kX` | func | `(i32) -> (i32)` |
| 20 | `FOgC.WH48` | func | `(i32) -> (i32)` |
| 21 | `FOgC.uyJM` | func | `(i32) -> ()` |
| 22 | `FOgC.COrw` | func | `(i32 i32) -> ()` |
| 23 | `FOgC.pj3O` | func | `(i32 i32) -> ()` |
| 24 | `FOgC.kSzP` | func | `(i32) -> (i32)` |
| 25 | `FOgC.FgeH` | func | `(i32 i32) -> ()` |
| 26 | `FOgC.ee18` | func | `(i32 i32) -> (i32)` |
| 27 | `FOgC.NMUm` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `FOgC.Gsqf` | func | `(i32 i32) -> (i32)` |
| 29 | `FOgC.vgrH` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `FOgC.evlY` | func | `(i32) -> (i32)` |
| 31 | `FOgC.UYSA` | func | `() -> (f64)` |
| 32 | `FOgC.VGHa` | func | `(i32 i32) -> ()` |
| 33 | `FOgC.tdq1` | func | `(i32) -> (i32)` |
| 34 | `FOgC.eQ0v` | func | `(i32) -> (i32)` |
| 35 | `FOgC.xLyn` | func | `(i32) -> ()` |
| 36 | `FOgC.TWm2` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `FOgC.x1Q5` | func | `(i32) -> (i32)` |
| 38 | `FOgC.GqQW` | func | `(i32) -> (i32)` |
| 39 | `FOgC.mklR` | func | `(i32) -> (i32)` |
| 40 | `FOgC.VQsS` | func | `(i32 i32) -> (i32)` |
| 41 | `FOgC.LAin` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `FOgC.HwrW` | func | `(i32) -> (i32)` |
| 43 | `FOgC.KXPo` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `FOgC.r4Tm` | func | `(i32) -> (i32)` |
| 45 | `FOgC.EC61` | func | `(i32 i32 i32 i32) -> ()` |
| 46 | `FOgC.R33b` | func | `(i32 i32 i32) -> (i32)` |
| 47 | `FOgC.FRSX` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 48 | `FOgC.xRFd` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 49 | `FOgC.pTJ4` | func | `(i32 i32 i32) -> ()` |
| 50 | `FOgC.Ry3I` | func | `(i32 i32 i32) -> ()` |
| 51 | `FOgC.L949` | func | `(i32 i32 i32) -> ()` |
| 52 | `FOgC.ddGO` | func | `(i32 i32) -> ()` |
| 53 | `FOgC.GHJb` | func | `(i32 i32) -> ()` |
| 54 | `FOgC.N6KI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `FOgC.dXVP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `FOgC.lEbg` | func | `(i32 f32 f32) -> ()` |
| 57 | `FOgC.FXn9` | func | `(i32 f32 f32) -> ()` |
| 58 | `FOgC.H3Jf` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `FOgC.Gv89` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `FOgC.a83M` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `FOgC.xyGk` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `FOgC.nt4L` | func | `(i32 i32 i32) -> ()` |
| 63 | `FOgC.vzBV` | func | `(i32 i32 i32) -> ()` |
| 64 | `FOgC.SGS1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `FOgC.rgnW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `FOgC.RrMn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `FOgC.vId2` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `FOgC.BDGX` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `FOgC.Galk` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `FOgC.C2yk` | func | `(i32) -> (i32)` |
| 71 | `FOgC.QWkL` | func | `(i32) -> ()` |
| 72 | `FOgC.aS9c` | func | `(i32) -> (i32)` |
| 73 | `FOgC.GOWW` | func | `(i32 i32) -> (i32)` |
| 74 | `FOgC.kHUe` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `FOgC.wLoW` | func | `(i32 i32 i32) -> ()` |
| 76 | `FOgC.jizA` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `FOgC.Lzjf` | func | `() -> (f64)` |
| 78 | `FOgC.Wh69` | func | `() -> (f64)` |
| 79 | `FOgC.vIV2` | func | `(i32 i32) -> ()` |
| 80 | `FOgC.USnG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `FOgC.LEDu` | func | `(i32 i32 i32) -> ()` |
| 82 | `FOgC.cJIN` | func | `(i32 i32 i32) -> ()` |
| 83 | `FOgC.mg5j` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `FOgC.LxAn` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `FOgC.jxBl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `FOgC.KDxi` | func | `(i32 i32) -> ()` |
| 87 | `FOgC.W45Y` | func | `(i32 i32) -> ()` |
| 88 | `FOgC.UQ54` | func | `(i32) -> (i32)` |
| 89 | `FOgC.kuvk` | func | `(i32 i32) -> ()` |
| 90 | `FOgC.O9Ba` | func | `(i32 i32) -> ()` |
| 91 | `FOgC.Bidd` | func | `(i32 i32 i32) -> ()` |
| 92 | `FOgC.f5Fi` | func | `(i32 i32 i32) -> ()` |
| 93 | `FOgC.BKx2` | func | `(i32) -> (i32)` |
| 94 | `FOgC.UNUN` | func | `(i32) -> (i32)` |
| 95 | `FOgC.GZyG` | func | `(i32 i32) -> (i32)` |
| 96 | `FOgC.xOVE` | func | `(i32 i32) -> (i32)` |
| 97 | `FOgC.BfmQ` | func | `(i32 i32) -> ()` |
| 98 | `FOgC.qclP` | func | `(i32 i32) -> ()` |
| 99 | `FOgC.hLRy` | func | `(i32 i32 i32) -> ()` |
| 100 | `FOgC.GV7g` | func | `(i32 i32 i32) -> ()` |
| 101 | `FOgC.J068` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `FOgC.rFm5` | func | `(i32 i32 i32 i32) -> ()` |
| 103 | `FOgC.Cp8S` | func | `(i32 i32 f32) -> ()` |
| 104 | `FOgC.hum0` | func | `(i32 i32 f32) -> ()` |
| 105 | `FOgC.Flv2` | func | `(i32 i32 i32) -> ()` |
| 106 | `FOgC.SM1U` | func | `(i32 i32 i32) -> ()` |
| 107 | `FOgC.eb1o` | func | `(i32 i32 i32) -> ()` |
| 108 | `FOgC.KIAv` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `FOgC.xFQK` | func | `(i32 i32 f32 f32) -> ()` |
| 110 | `FOgC.kp1B` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `FOgC.Zukj` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 112 | `FOgC.JCp6` | func | `(i32 i32) -> ()` |
| 113 | `FOgC.RCoM` | func | `(i32 i32) -> ()` |
| 114 | `FOgC.gvph` | func | `(i32 i32) -> ()` |
| 115 | `FOgC.BZX7` | func | `(i32 i32) -> ()` |
| 116 | `FOgC.uPD7` | func | `(i32) -> (i32)` |
| 117 | `FOgC.IsaK` | func | `(i32) -> (i32)` |
| 118 | `FOgC.Bwvk` | func | `(i32) -> (i32)` |
| 119 | `FOgC.qfZe` | func | `(i32) -> (i32)` |
| 120 | `FOgC.TOEq` | func | `(i32 i32) -> ()` |
| 121 | `FOgC.cGfH` | func | `(i32 i32) -> ()` |
| 122 | `FOgC.wiIa` | func | `(i32 i32) -> ()` |
| 123 | `FOgC.EOuf` | func | `(i32 i32) -> ()` |
| 124 | `FOgC.wNqC` | func | `(i32 i32) -> ()` |
| 125 | `FOgC.j14l` | func | `(i32 i32) -> ()` |
| 126 | `FOgC.b3ok` | func | `(i32 i32) -> (i32)` |
| 127 | `FOgC.vCA2` | func | `(i32 i32) -> (i32)` |
| 128 | `FOgC.UXIV` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `FOgC.TVOT` | func | `(i32 i32 i32 i32) -> ()` |
| 130 | `FOgC.oq9S` | func | `(i32 i32) -> ()` |
| 131 | `FOgC.UNp8` | func | `(i32 i32) -> ()` |
| 132 | `FOgC.GQAa` | func | `(i32) -> (i32)` |
| 133 | `FOgC.h6Ql` | func | `(i32 i32) -> ()` |
| 134 | `FOgC.Ckm2` | func | `(i32 i32) -> ()` |
| 135 | `FOgC.EZDC` | func | `(i32 i32 i32) -> ()` |
| 136 | `FOgC.TQ5d` | func | `(i32 i32 i32) -> ()` |
| 137 | `FOgC.oyUb` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `FOgC.NcoL` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 139 | `FOgC.TPUi` | func | `(i32 i32) -> ()` |
| 140 | `FOgC.JsHE` | func | `(i32 i32 i32) -> ()` |
| 141 | `FOgC.rwc1` | func | `(i32 i32 i32) -> ()` |
| 142 | `FOgC.bRsQ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `FOgC.zxwP` | func | `(i32 i32 i32 i32) -> (i32)` |
| 144 | `FOgC.GNcS` | func | `(i32 i32 i32) -> ()` |
| 145 | `FOgC.ilOO` | func | `(i32 i32 i32) -> ()` |
| 146 | `FOgC.P2Bw` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `FOgC.L2cQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 148 | `FOgC.L1MF` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `FOgC.FFj5` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `FOgC.N2iY` | func | `(i32 i32 i32) -> (i32)` |
| 151 | `FOgC.lg6u` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `FOgC.uP6i` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 153 | `FOgC.ktbe` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `FOgC.Tsbn` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `FOgC.Em2V` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `FOgC.aBiP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 157 | `FOgC.msS2` | func | `(i32) -> (i32)` |
| 158 | `FOgC.SZbt` | func | `(i32) -> (i32)` |
| 159 | `FOgC.cr3l` | func | `(i32) -> (i32)` |
| 160 | `FOgC.d0hF` | func | `(i32) -> (i32)` |
| 161 | `FOgC.i78P` | func | `() -> (i32)` |
| 162 | `FOgC.QQzs` | func | `() -> (i32)` |
| 163 | `FOgC.qNF6` | func | `() -> (i32)` |
| 164 | `FOgC.PhMd` | func | `() -> (i32)` |
| 165 | `FOgC.h8e2` | func | `(i32 i32) -> (i32)` |
| 166 | `FOgC.iCv0` | func | `(i32) -> ()` |
| 167 | `FOgC.f0vT` | func | `(i32 i32) -> (i32)` |
| 168 | `FOgC.TzLG` | func | `(i32) -> (i32)` |
| 169 | `FOgC.mtZe` | func | `(i32) -> (i32)` |
| 170 | `FOgC.zSF7` | func | `(i32) -> (i32)` |
| 171 | `FOgC.omAF` | func | `(i32) -> ()` |
| 172 | `FOgC.HeXJ` | func | `(i32 i32 i32) -> (i32)` |
| 173 | `FOgC.eIbg` | func | `(i32) -> (i32)` |
| 174 | `FOgC.P9rc` | func | `(i32) -> (i32)` |
| 175 | `FOgC.KF3a` | func | `(i32 i32) -> (i32)` |
| 176 | `FOgC.x2ig` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `FOgC.hTl1` | func | `(i32 i32 i32) -> (i32)` |
| 178 | `FOgC.pOmc` | func | `(i32) -> (i32)` |
| 179 | `FOgC.TjqJ` | func | `(i32) -> (i32)` |
| 180 | `FOgC.v51r` | func | `(i32) -> (i32)` |
| 181 | `FOgC.ofPC` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `FOgC.NBSA` | func | `(i32 i32 i32 i32) -> ()` |
| 183 | `FOgC.IvK8` | func | `(i32 i32) -> ()` |
| 184 | `FOgC.wxuL` | func | `(i32 i32 i32) -> ()` |
| 185 | `FOgC.n30b` | func | `(i32 i32) -> ()` |
| 186 | `FOgC.KCod` | func | `(i32 i32 i32) -> ()` |
| 187 | `FOgC.NT1x` | func | `(i32 i32) -> ()` |
| 188 | `FOgC.LChN` | func | `(i32 i32) -> ()` |
| 189 | `FOgC.UYlP` | func | `(i32) -> (i32)` |
| 190 | `FOgC.iZWg` | func | `(i32 i32) -> (i32)` |
| 191 | `FOgC.e13z` | func | `(i32) -> ()` |
| 192 | `FOgC.z5PI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `FOgC.BUqZ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 194 | `FOgC.Etfn` | func | `(i32 i32) -> ()` |
| 195 | `FOgC.KlT0` | func | `(i32 i32) -> ()` |
| 196 | `FOgC.wcbZ` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `FOgC.IYYA` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 198 | `FOgC.xTUY` | func | `(i32 f32) -> ()` |
| 199 | `FOgC.EjPd` | func | `(i32 f32) -> ()` |
| 200 | `FOgC.c4b1` | func | `(i32 i32) -> ()` |
| 201 | `FOgC.l7L1` | func | `(i32 i32) -> ()` |
| 202 | `FOgC.GyIp` | func | `(i32) -> (i32)` |
| 203 | `FOgC.WSL9` | func | `(i32) -> (i32)` |
| 204 | `FOgC.OHY4` | func | `(i32) -> (i32)` |
| 205 | `FOgC.MWYI` | func | `(i32) -> (i32)` |
| 206 | `FOgC.opCG` | func | `(i32 i32 i32) -> ()` |
| 207 | `FOgC.fD4x` | func | `(i32 i32 i32) -> ()` |
| 208 | `FOgC.h59k` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `FOgC.fjMS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 210 | `FOgC.w3Hm` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `FOgC.Bjjs` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 212 | `FOgC.ZRcl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `FOgC.aIEK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 214 | `FOgC.qKGd` | func | `(i32 i32) -> ()` |
| 215 | `FOgC.nCcX` | func | `(i32 i32) -> ()` |
| 216 | `FOgC.ptTu` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 217 | `FOgC.UZbT` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `FOgC.inSK` | func | `(i32 i32 i32 f32) -> ()` |
| 219 | `FOgC.TE0z` | func | `(i32) -> (i32)` |
| 220 | `FOgC.kSTI` | func | `(i32) -> (i32)` |
| 221 | `FOgC.aAGq` | func | `(i32 i32) -> ()` |
| 222 | `FOgC.MHpp` | func | `(i32 i32) -> ()` |
| 223 | `FOgC.csyz` | func | `(i32 i32 i32) -> (i32)` |
| 224 | `FOgC.K85P` | func | `(i32) -> (i32)` |
| 225 | `FOgC.sxU9` | func | `(i32) -> (i32)` |
| 226 | `FOgC.kNwQ` | func | `(i32 i32) -> ()` |
| 227 | `FOgC.Hzxb` | func | `(i32 i32 i32) -> (i32)` |
| 228 | `FOgC.NFD1` | func | `(i32 i32) -> ()` |
| 229 | `FOgC.sY6z` | func | `(i32 i32) -> ()` |
| 230 | `FOgC.nf5I` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `FOgC.GvEs` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 232 | `FOgC.kg1N` | func | `(i32 i32 i32) -> ()` |
| 233 | `FOgC.NUX9` | func | `(i32 i32 i32) -> ()` |
| 234 | `FOgC.oGqh` | func | `(i32 i32) -> ()` |
| 235 | `FOgC.BPFS` | func | `(i32 i32) -> ()` |
| 236 | `FOgC.q88r` | func | `(i32 i32) -> ()` |
| 237 | `FOgC.Oruh` | func | `(i32 i32) -> ()` |
| 238 | `FOgC.O31b` | func | `(i32 i32) -> ()` |
| 239 | `FOgC.Qsts` | func | `(i32 i32) -> ()` |
| 240 | `FOgC.MdTn` | func | `(i32 f32 f32) -> ()` |
| 241 | `FOgC.BUr6` | func | `(i32 f32 f32) -> ()` |
| 242 | `FOgC.LOO4` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `FOgC.v3Mt` | func | `(i32 i32 i32 i32) -> ()` |
| 244 | `FOgC.kNNI` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `FOgC.fft0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `FOgC.BZQW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 247 | `FOgC.EpZ4` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `FOgC.SdeO` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 249 | `FOgC.AiT7` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `FOgC.dZWE` | func | `(i32 i32 i32 i32) -> ()` |
| 251 | `FOgC.DPtJ` | func | `(i32) -> ()` |
| 252 | `FOgC.ZY0g` | func | `(i32 i32) -> ()` |
| 253 | `FOgC.s1lo` | func | `(i32 i32) -> ()` |
| 254 | `FOgC.oKjC` | func | `(i32 i32) -> ()` |
| 255 | `FOgC.sOhI` | func | `(i32 i32) -> ()` |
| 256 | `FOgC.gcac` | func | `(i32 i32) -> ()` |
| 257 | `FOgC.lAls` | func | `(i32 i32) -> ()` |
| 258 | `FOgC.pG8V` | func | `(i32 i32) -> ()` |
| 259 | `FOgC.ro4F` | func | `(i32 i32) -> ()` |
| 260 | `FOgC.JbOU` | func | `(i32) -> (i32)` |
| 261 | `FOgC.a0SA` | func | `(i32) -> (i32)` |
| 262 | `FOgC.M8Bw` | func | `(i32) -> (i32)` |
| 263 | `FOgC.h9sy` | func | `(i32) -> (i32)` |
| 264 | `FOgC.W1Ai` | func | `(i32) -> ()` |
| 265 | `FOgC.LlOt` | func | `(i32 i32 i32 i32) -> ()` |
| 266 | `FOgC.z7m8` | func | `(i32) -> ()` |
| 267 | `FOgC.mBOH` | func | `(i32) -> (i32)` |
| 268 | `FOgC.dDKZ` | func | `(i32) -> (i32)` |
| 269 | `FOgC.YlK4` | func | `(i32) -> (i32)` |
| 270 | `FOgC.VxfB` | func | `(i32) -> (i32)` |
| 271 | `FOgC.jnFb` | func | `(i32 i32) -> ()` |
| 272 | `FOgC.ufcW` | func | `(i32) -> ()` |
| 273 | `FOgC.zhlJ` | func | `(i32 i32) -> ()` |
| 274 | `FOgC.KCmu` | func | `(i32) -> (i32)` |
| 275 | `FOgC.c2KU` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `FOgC.IIGR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `FOgC.Gp8s` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `FOgC.howK` | func | `(i32 i32) -> (i32)` |
| 279 | `FOgC.ouCT` | func | `(i32 i32) -> (i32)` |
| 280 | `FOgC.dyyt` | func | `(i32 i32) -> (i32)` |
| 281 | `FOgC.R6xL` | func | `(f64) -> (i32)` |
| 282 | `FOgC.GQyj` | func | `(i32 i32) -> (i32)` |
| 283 | `FOgC.usku` | func | `(i32 i32) -> (i32)` |

## Exports

167 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `Qwk6` | func | 2562 | `(i32) -> ()` |
| `TbK9` | func | 3140 | `(i32) -> ()` |
| `xJTJ` | func | 1491 | `(i32 i32 i32 i32) -> (i32)` |
| `l4VT` | func | 2194 | `(i32 i32) -> (i32)` |
| `yIKw` | func | 1890 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `Flr6` | func | 1331 | `(i32 i32) -> (i32)` |
| `NvIT` | func | 1486 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vkEj` | func | 1601 | `(i32 i32) -> ()` |
| `xWom` | func | 2217 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `e5qm` | func | 1116 | `(i32 i32) -> ()` |
| `hC3b` | func | 1443 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `QuyO` | func | 1558 | `(i32 i32 i32 i32) -> (i32)` |
| `PXpg` | func | 2486 | `(i32) -> (i32)` |
| `RSCZ` | func | 661 | `(i32 i32) -> (i32)` |
| `SwEL` | func | 757 | `(i32 i32 i32) -> (i32)` |
| `XtbV` | func | 676 | `(i32 i32) -> (i32)` |
| `SeOd` | func | 3040 | `() -> (i32 i32)` |
| `GDUn` | func | 1823 | `() -> (i32)` |
| `Iyyu` | func | 3011 | `(i32 i32 i32) -> (i32 i32)` |
| `k0Np` | func | 2487 | `(i32) -> (i32)` |
| `fhX7` | func | 2778 | `(i32) -> (i32)` |
| `Ohvr` | func | 1942 | `(i32) -> (i32)` |
| `kBI5` | func | 1347 | `(i32 i32 i32) -> (i32)` |
| `sJso` | func | 1828 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `fTR7` | func | 3041 | `() -> (i32 i32)` |
| `ePk9` | func | 1511 | `(i32 i32) -> (i32)` |
| `BQIP` | func | 2499 | `(i32 i32) -> ()` |
| `Fute` | func | 2436 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `qOvw` | func | 1419 | `(i32 i32) -> (i32)` |
| `h8sd` | func | 1448 | `() -> (i32)` |
| `gdCo` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `VvIB` | func | 3030 | `(i32) -> (i32 i32)` |
| `RK4l` | func | 2352 | `(i32 i32) -> (i32)` |
| `EyRT` | func | 2992 | `(i32 i32) -> ()` |
| `HAVp` | func | 1864 | `(i32 i32 f64 f64 f64) -> ()` |
| `w6fL` | func | 1398 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `wg29` | func | 2482 | `(i32) -> (i32)` |
| `vM7v` | func | 2479 | `(i32) -> (i32)` |
| `JKUH` | func | 3204 | `() -> (i32)` |
| `Uc3q` | func | 3016 | `(i32 i32) -> (i32 i32)` |
| `U4kF` | func | 3063 | `(i32 i32 i32 i32) -> ()` |
| `qRwe` | func | 1225 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `xgpm` | func | 3176 | `() -> (f64)` |
| `Un6D` | func | 2809 | `(i32) -> (i32)` |
| `V11u` | func | 3028 | `(i32) -> (i32 i32)` |
| `EbNJ` | func | 3180 | `(i32) -> (i32)` |
| `h8o1` | func | 2500 | `(i32) -> (i32)` |
| `dROp` | func | 1303 | `(i32 i32) -> (i32)` |
| `WfH5` | func | 1451 | `(i32) -> (i32)` |
| `tjvK` | func | 1219 | `(i32 i32 i32 i32) -> (i32)` |
| `oPKw` | func | 1815 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `C1eV` | func | 2481 | `(i32) -> (i32)` |
| `wAlT` | func | 3027 | `(i32) -> (i32 i32)` |
| `d1K2` | func | 3020 | `(i32 i32) -> (i32 i32)` |
| `jHsY` | func | 2678 | `(i32 i32) -> ()` |
| `We9Z` | func | 1957 | `(i32) -> (i32)` |
| `cPNl` | func | 2498 | `(i32) -> (i32)` |
| `viyH` | func | 2580 | `(i32) -> ()` |
| `zFkh` | func | 3181 | `(i32) -> ()` |
| `blki` | func | 886 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `XAja` | func | 2508 | `(i32 i32) -> (i32)` |
| `mSOe` | global | 1 | `` |
| `Tgai` | func | 919 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WRT0` | func | 2437 | `(i32) -> (i32)` |
| `loNM` | func | 1993 | `(i32 i32) -> ()` |
| `sVnH` | func | 2039 | `(i32 f64 f64 f64) -> (i32)` |
| `IfhM` | func | 693 | `(f64) -> (f64)` |
| `W8zf` | func | 2550 | `(i32 i32) -> ()` |
| `tg8O` | func | 1883 | `(i32 i32) -> (i32)` |
| `eQMV` | func | 3010 | `(i32 i32 i32) -> (i32 i32)` |
| `ntzs` | func | 1843 | `(i32 i32 i32 i32) -> (i32)` |
| `vzkI` | func | 672 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `dnQw` | func | 2517 | `(i32) -> (i32)` |
| `jwSw` | func | 1590 | `(i32 i32) -> (i32)` |
| `WTwf` | func | 2563 | `() -> (i32)` |
| `HD3w` | func | 1115 | `(i32 i32) -> (i32)` |
| `G1i5` | func | 2485 | `(i32) -> ()` |
| `rtRa` | func | 2395 | `(i32 i32 i32 i32) -> (i32)` |
| `kB93` | func | 3029 | `(i32) -> (i32 i32)` |
| `Jpej` | func | 3021 | `(i32 i32) -> (i32 i32)` |
| `ueav` | func | 2353 | `(i32 i32) -> (i32)` |
| `jSeI` | func | 1269 | `(i32 i32 i32) -> (i32)` |
| `sLFX` | func | 1396 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `AvWp` | func | 1293 | `(i32) -> (i32)` |
| `oHkY` | func | 1328 | `(i32) -> ()` |
| `a6K2` | func | 2330 | `(i32 i32 i32 i32) -> ()` |
| `QaTL` | func | 3127 | `(i32 i32 i32) -> ()` |
| `Yz0c` | func | 2478 | `(i32) -> (f64)` |
| `eWE6` | func | 1642 | `(i32 i32 i32 i32) -> (i32)` |
| `hly1` | func | 2354 | `(i32 i32) -> (i32)` |
| `f0tI` | func | 2480 | `(i32) -> (i32)` |
| `TE7E` | func | 2483 | `(i32) -> (i32)` |
| `Ikhk` | func | 2488 | `(i32) -> (i32)` |
| `s7SF` | func | 2785 | `(i32) -> (i32)` |
| `Z0rg` | func | 2351 | `(i32 i32) -> (i32)` |
| `rb1W` | func | 2055 | `(i32 i32) -> ()` |
| `VFPY` | func | 1522 | `(i32 i32) -> (i32)` |
| `HG7r` | func | 1709 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `dLYb` | func | 1898 | `(i32) -> ()` |
| `Qfat` | func | 2516 | `(i32) -> (i32)` |
| `GPyE` | func | 1605 | `(i32 f64 f64 f64) -> (i32)` |
| `Us1J` | func | 1274 | `(i32 i32 i32) -> ()` |
| `ufx3` | func | 2665 | `(i32 i32) -> ()` |
| `mNio` | func | 2497 | `(i32) -> (i32)` |
| `It4u` | func | 1730 | `(i32) -> (i32)` |
| `mSMK` | func | 1959 | `(i32 i32 i32 i32) -> ()` |
| `M0AK` | func | 2819 | `(i32) -> ()` |
| `uK55` | func | 1764 | `(i32 i32) -> (i32)` |
| `SSii` | func | 2019 | `(i32 f64) -> (i32)` |
| `B0Vf` | func | 1537 | `(i32 i32 i32) -> (i32)` |
| `v3qZ` | func | 3019 | `(i32 i32) -> (i32 i32)` |
| `RnaG` | func | 2841 | `(i32) -> (i32)` |
| `fVos` | func | 2272 | `(i32 i32) -> ()` |
| `XTPE` | func | 2598 | `() -> (i32)` |
| `Zb6Y` | func | 1523 | `(i32 i32) -> (i32)` |
| `DM0u` | func | 2162 | `(i32 i32) -> (i32)` |
| `vnjx` | func | 2986 | `(i32 i32 i32 i32) -> (i32)` |
| `l59e` | func | 2484 | `(i32) -> (i32)` |
| `iQJ2` | func | 610 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HjTM` | func | 3072 | `(i32 i32) -> ()` |
| `YVXD` | func | 2597 | `(i32 i32) -> ()` |
| `dZAZ` | func | 2799 | `(i32) -> (i32)` |
| `V71G` | func | 2495 | `(i32 i32) -> ()` |
| `hmNX` | func | 3026 | `(i32) -> (i32 i32)` |
| `bYKy` | func | 1753 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WX8N` | func | 3018 | `(i32 i32) -> (i32 i32)` |
| `fFCp` | func | 3071 | `(i32 i32 i32) -> ()` |
| `qMBj` | func | 2507 | `(i32) -> (i32)` |
| `siT7` | func | 887 | `(i32 i32) -> (i32)` |
| `EbWt` | func | 2303 | `(i32 i32) -> ()` |
| `G8eD` | func | 1397 | `(i32 f64 f64) -> (i32)` |
| `LC5o` | func | 3100 | `() -> (i32)` |
| `SbEK` | func | 2509 | `(i32 i32) -> (i32)` |
| `qzN1` | func | 850 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `xW3S` | func | 3134 | `() -> ()` |
| `oe0W` | func | 3025 | `(i32) -> (i32 i32)` |
| `OgHf` | func | 1499 | `(i32 i32) -> (i32)` |
| `RX3D` | func | 2961 | `() -> ()` |
| `ZGQw` | func | 1526 | `(i32 f64) -> (f64)` |
| `LEPw` | func | 1746 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ztny` | func | 2420 | `(i32) -> (i32)` |
| `vKJh` | func | 3203 | `() -> (i32)` |
| `HNqm` | func | 2382 | `(i32 i32) -> (i32)` |
| `TcZK` | func | 2466 | `(i32) -> (i32)` |
| `Mjzk` | func | 1672 | `(i32) -> ()` |
| `memory` | memory | 0 | `` |
| `jQbC` | func | 1872 | `(i32 i32) -> ()` |
| `bykc` | global | 2 | `` |
| `xSmA` | func | 2080 | `(i32 i32) -> (i32)` |
| `h7Bi` | func | 735 | `(i32) -> (i32)` |
| `EjqV` | func | 907 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `Zxu4` | func | 2518 | `(i32) -> (i32)` |
| `w5TM` | func | 732 | `(i32 i32 i32 i32) -> (i32)` |
| `prqz` | func | 1250 | `(i32 i32) -> (i32)` |
| `GlY8` | func | 2980 | `(i32 i32) -> (i32)` |
| `KwIp` | func | 3133 | `(i32) -> ()` |
| `Ygsr` | func | 1469 | `(i32 i32 i32 i32) -> ()` |
| `QHua` | func | 2273 | `(i32 f64) -> (i32)` |
| `FYZg` | func | 2465 | `(i32 i32) -> ()` |
| `zIRI` | func | 3015 | `(i32 i32) -> (i32 i32)` |
| `gIgW` | func | 561 | `(i32 i32 i32) -> (i32)` |
| `R7QP` | func | 3017 | `(i32 i32) -> (i32 i32)` |
| `ZMzk` | func | 738 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `IgkH` | func | 1218 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `yyno` | func | 3042 | `() -> (i32 i32)` |
| `RXyp` | func | 700 | `(i32 i32) -> (i32)` |
| `MTfB` | func | 1492 | `(i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 740 · max 740
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2025136, `i32` = i32.const 2025716

## Functions

- 2,930 bodies · 4,076,337 code bytes · avg 1.4 KB
- instruction scan: 2,930 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 103 |
| <= 128 bytes | 255 |
| <= 256 bytes | 374 |
| <= 512 bytes | 683 |
| <= 1024 bytes | 590 |
| <= 2048 bytes | 426 |
| <= 4096 bytes | 184 |
| <= 8192 bytes | 93 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 195,073 | 88,356 | local.get×25977, i32.const×9822, i32.load×5552, local.set×4795, local.tee×4567 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 107,789 | 52,285 | local.get×14621, i32.const×6216, i32.add×3024, local.set×2957, i32.load×2872 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,699 | 21,474 | local.get×6240, i32.const×2842, local.set×1235, i32.add×1137, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 105 | 36,606 | 16,581 | local.get×4597, i32.const×1665, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,787 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,490 | 12,813 | local.get×3796, i32.const×1624, local.set×985, i32.add×684, i32.load×669 |
| 9 | `(i32 i32 i32) -> (i32)` | 74 | 22,653 | 10,819 | local.get×2894, i32.const×1298, i32.load×755, local.set×500, i32.add×479 |
| 10 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 18 | `(i32 i32 i32 i32 i32 i32) -> ()` | 153 | 17,217 | 8,058 | local.get×2506, i32.const×894, local.set×541, i32.load×399, i32.add×366 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,312 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 28 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,817 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 34 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 71 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 200 | `(i32 i32) -> ()` | 10 | 30,134 | 14,535 | local.get×5127, i32.load×1394, i32.const×1130, end×911, i32.add×829 |
| 220 | `(i32) -> ()` | 19 | 23,308 | 10,931 | local.get×2739, i32.load×1499, i32.const×1189, local.tee×1013, end×857 |
| 735 | `(i32 i32) -> ()` | 139 | 42,975 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 736 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1599 | `(i32 i32) -> (i32)` | 182 | 55,130 | 19,838 | local.get×6600, i32.const×2596, i64.store×1935, i64.const×1087, i64.load×1068 |
| 2010 | `(i32 i32) -> ()` | 111 | 39,746 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2612 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2882 | `(i32 i32 i32 i32) -> ()` | 137 | 31,374 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2901 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                 skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13
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
| `local.get` | 545,914 |
| `i32.const` | 227,790 |
| `local.tee` | 101,473 |
| `i32.load` | 95,347 |
| `local.set` | 95,239 |
| `i32.add` | 88,016 |
| `end` | 80,077 |
| `br_if` | 65,184 |
| `i32.store` | 47,003 |
| `block` | 37,619 |
| `i64.const` | 32,893 |
| `i64.store` | 32,114 |
| `if` | 30,606 |
| `call` | 29,554 |
| `i32.sub` | 24,904 |
| `i64.load` | 23,787 |
| `br` | 23,446 |
| `i32.eqz` | 19,773 |
| `select` | 17,421 |
| `i32.shl` | 16,613 |
| `i32.and` | 16,505 |
| `i32.ne` | 16,083 |
| `i32.load8_u` | 15,107 |
| `i32.eq` | 14,068 |
| `i32.store8` | 12,722 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,930/2,930 (degraded: 0)
