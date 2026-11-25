# WASM module: `bloxd_wasm_models_bg`

> environment **bloxd.io** · build `dz8ef.98c5e741` · analyzed 2026-11-25T13:06:22+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_models_bg.6a584871f5a35c4c72aa.wasm
> 311,531 bytes (304.2 KB) · sha256 `42b4348bfb4c39f2…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `6155f32f807a46de.1165` → `95466399ac408db1.1165` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/23 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 220 / 27 |
| Exports / imports | 23 / 27 |
| Code bytes (function bodies) | 249,657 (243.8 KB) |
| Total local variables | 1,679 |
| Instructions (scanable bodies) | 117,665 |
| Data segments / bytes | 195 / 58,739 |
| Element segments / entries | 1 / 69 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `95466399ac408db1.1165` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 231 | 32 |
| 2 | import | 325 | 27 |
| 3 | function | 222 | 220 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 181 | 23 |
| 9 | element | 136 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 250,005 | 220 |
| 11 | data | 60,326 | 195 |
| 0 | custom:name | 29 | — |

## Types

32 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1

## Imports

27 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `yzaK.IyZE` | func | `(i32) -> ()` |
| 1 | `yzaK.U332` | func | `(i32) -> ()` |
| 2 | `yzaK.sJl3` | func | `(i32 i32) -> ()` |
| 3 | `yzaK.dxmY` | func | `(i32 i32) -> (i32)` |
| 4 | `yzaK.ot8l` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 5 | `yzaK.f7ZR` | func | `(i32) -> (i32)` |
| 6 | `yzaK.HA4b` | func | `(i32 i32) -> (i32)` |
| 7 | `yzaK.Apvj` | func | `(i32 i32) -> ()` |
| 8 | `yzaK.lnd2` | func | `(i32) -> (i32)` |
| 9 | `yzaK.DY0E` | func | `(i32) -> (i32)` |
| 10 | `yzaK.aYEX` | func | `(i32) -> (i32)` |
| 11 | `yzaK.GT4v` | func | `(i32) -> (i32)` |
| 12 | `yzaK.yuhT` | func | `(i32) -> (i32)` |
| 13 | `yzaK.sn64` | func | `(i32) -> ()` |
| 14 | `yzaK.IuxR` | func | `(i32) -> (i32)` |
| 15 | `yzaK.ciWH` | func | `(i32 i32 i32) -> ()` |
| 16 | `yzaK.yUGV` | func | `(i32 i32) -> (i32)` |
| 17 | `yzaK.zY6K` | func | `(i32) -> (i32)` |
| 18 | `yzaK.YFl3` | func | `(i32) -> (i32)` |
| 19 | `yzaK.TSMS` | func | `(i32) -> (i32)` |
| 20 | `yzaK.MZtk` | func | `(i32) -> (i32)` |
| 21 | `yzaK.t2dS` | func | `(i32) -> (i32)` |
| 22 | `yzaK.vByo` | func | `(i32) -> (i32)` |
| 23 | `yzaK.dGCH` | func | `(i32) -> (i32)` |
| 24 | `yzaK.Rqhh` | func | `(i32) -> (i32)` |
| 25 | `yzaK.DTT1` | func | `(i32 i32) -> ()` |
| 26 | `yzaK.EX59` | func | `(i32 i32) -> (i32)` |

## Exports

23 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `k4Mu` | func | 128 | `(i32 i32) -> ()` |
| `tT67` | func | 177 | `(i32) -> ()` |
| `mytQ` | func | 226 | `(i32 i32 i32) -> ()` |
| `Vrsc` | func | 202 | `(i32 i32 i32 i32) -> (i32)` |
| `lyNf` | func | 206 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `s5Rx` | func | 245 | `() -> (i32)` |
| `evsn` | global | 1 | `` |
| `egc6` | func | 97 | `() -> (i32)` |
| `p2Au` | func | 208 | `(i32 i32 i32) -> (i32 i32)` |
| `aP3T` | func | 200 | `() -> ()` |
| `zIO2` | func | 220 | `() -> (i32)` |
| `UXz4` | global | 2 | `` |
| `ofrU` | func | 83 | `() -> (i32)` |
| `oHVq` | func | 210 | `() -> (i32 i32)` |
| `Z5ua` | func | 62 | `() -> (i32)` |
| `ovnV` | func | 173 | `(i32) -> (i32)` |
| `R9vl` | func | 138 | `() -> (i32)` |
| `GfvV` | func | 201 | `(i32 i32) -> (i32)` |
| `ApOt` | func | 200 | `() -> ()` |
| `memory` | memory | 0 | `` |
| `TDog` | func | 242 | `(i32) -> (i32)` |
| `dkrd` | func | 243 | `(i32) -> ()` |
| `JQLT` | func | 230 | `(i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 17 pages · max ∞ · shared=False
- table 0: funcref · min 70 · max 70
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1113176, `i32` = i32.const 1113392

## Functions

- 220 bodies · 249,657 code bytes · avg 1.1 KB
- instruction scan: 220 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 44 |
| <= 64 bytes | 8 |
| <= 128 bytes | 45 |
| <= 256 bytes | 33 |
| <= 512 bytes | 26 |
| <= 1024 bytes | 27 |
| <= 2048 bytes | 18 |
| <= 4096 bytes | 11 |
| <= 8192 bytes | 6 |
| <= 16384 bytes | 1 |
| > 16384 bytes | 1 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 78 | 10,097 | 5,033 | local.get×1420, i32.const×605, local.set×348, local.tee×314, i32.load×297 |
| 1 | `(i32 i32) -> ()` | 33 | 7,753 | 4,082 | local.get×1044, i32.const×407, local.set×303, i64.const×219, end×203 |
| 2 | `(i32 i32 i32) -> ()` | 20 | 6,274 | 3,081 | local.get×935, i32.const×508, i32.load×276, i32.add×225, local.set×196 |
| 3 | `(i32 i32 i32 i32) -> ()` | 69 | 6,977 | 3,208 | local.get×996, i32.const×310, i32.load×175, local.tee×174, local.set×166 |
| 4 | `(i32 i32 i32 i32) -> ()` | 63 | 6,028 | 3,095 | local.get×872, i32.const×392, local.set×265, i32.add×175, local.tee×165 |
| 5 | `(i32 f64) -> ()` | 37 | 6,275 | 2,908 | local.get×655, i32.const×373, local.set×241, i32.add×178, local.tee×151 |
| 6 | `(i32) -> (i32)` | 9 | 4,899 | 2,140 | local.get×498, i32.const×447, i32.store×201, local.tee×154, i32.load×103 |
| 7 | `(i32 i32 i32 i32) -> ()` | 10 | 3,837 | 2,049 | local.get×559, i32.const×241, local.set×149, local.tee×136, end×133 |
| 8 | `(i32 i32 i32) -> ()` | 26 | 3,561 | 1,846 | local.get×491, i32.const×276, local.set×156, i32.add×151, i32.load×109 |
| 9 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 15 | 3,591 | 1,685 | local.get×475, i32.const×254, local.set×105, i32.load×99, end×85 |
| 10 | `(i32 i32 i32) -> ()` | 53 | 3,891 | 1,642 | local.get×490, i32.const×173, local.set×128, i64.store×90, i64.load×69 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 15 | 2,801 | 1,501 | local.get×464, i32.const×169, local.tee×135, i32.add×116, i32.load×111 |
| 12 | `(i32 i32 i32 i32 i32 i32) -> ()` | 15 | 2,678 | 1,453 | local.get×461, i32.const×171, i32.add×115, local.tee×114, local.set×81 |
| 13 | `(i32 i32) -> ()` | 31 | 3,028 | 1,428 | local.get×423, i32.const×190, local.set×88, i32.add×78, i32.load×75 |
| 14 | `(i32 i32 i32) -> ()` | 45 | 2,993 | 1,402 | local.get×448, i32.const×156, local.tee×105, i32.add×60, local.set×59 |
| 15 | `(i32 i32 i32) -> ()` | 16 | 2,939 | 1,478 | local.get×429, i32.const×127, local.set×95, end×80, local.tee×70 |
| 16 | `(i32 i32 i32 i32) -> ()` | 11 | 3,492 | 1,302 | local.get×588, i64.store×217, i64.load×188, i32.const×66, i32.load×44 |
| 17 | `(i32 i32 i32) -> ()` | 21 | 2,049 | 1,080 | local.get×285, i32.const×153, local.set×100, end×71, local.tee×54 |
| 18 | `(i32 i32 i32) -> (i32)` | 14 | 1,936 | 989 | local.get×265, i32.const×135, br_if×75, local.set×72, i32.load×70 |
| 19 | `(i32 i32) -> ()` | 27 | 1,964 | 958 | local.get×296, i32.const×127, local.set×82, i32.add×48, end×42 |
| 20 | `(i32 i32 i32) -> ()` | 21 | 1,778 | 910 | local.get×248, i32.const×90, local.set×86, end×57, local.tee×50 |
| 21 | `(i32 i32) -> ()` | 12 | 1,774 | 878 | local.get×277, i32.const×125, i32.load×85, local.set×69, local.tee×47 |
| 22 | `(i32 i32 i32 i32 i32) -> ()` | 21 | 1,341 | 743 | local.get×203, i32.const×104, local.tee×51, local.set×48, i32.add×43 |
| 23 | `(i32 i32 i32 i32 i32) -> ()` | 21 | 1,317 | 734 | local.get×205, i32.const×102, local.set×50, local.tee×48, i32.add×44 |
| 25 | `(i32 i32) -> ()` | 8 | 1,345 | 657 | local.get×224, i32.const×97, local.set×65, i32.load×62, i32.add×44 |
| 26 | `(i32 i32) -> ()` | 11 | 1,326 | 656 | local.get×193, i32.const×50, local.set×47, i32.load×34, local.tee×32 |
| 27 | `(i32 i32) -> ()` | 12 | 1,379 | 643 | local.get×159, i32.const×93, end×49, local.set×37, block×32 |
| 28 | `(i32 i32 i32) -> ()` | 13 | 1,348 | 626 | local.get×167, i32.const×73, end×46, br_if×44, local.tee×41 |
| 35 | `() -> (i32)` | 14 | 1,236 | 620 | local.get×173, i32.const×99, i32.add×39, local.set×36, local.tee×29 |
| 179 | `(i32 i32 i32 i32) -> (i32 i32)` | 145 | 100,393 | 44,764 | local.get×13638, i32.const×5407, local.set×2657, i32.add×2127, i32.load×1891 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
`````````^^^^^^^^^]]]]]]]]]\\\\\\\\\[[[[[[[[[ZZZZZZZZZYYYYYYYYYXXXXXXXXXRRRRRRRRRWWWWWWWWW_________QQQQQQQQQVVVVVVVVVUUUUUUUUUTTTTTTTTTSSSSSSSSS<<<<<<<<<=========>>>>>>>>>?????????@@@@@@@@@AAAAAAAAABB
?bloxdProcessedassetextensionsUsedextensionsRequiredbuffersbufferViewsaccessorsscenescenesnodesmeshesmaterialstexturessamplersimagesanimationsskinsindextexCoordextensionsnameprimitivesweightsextraschi
OPAQUEMASKBLENDbufferbyteOffsetbyteLengthbyteStridebufferViewoffsetversionminVersionurimimeTypemagFilterminFilterwrapSwrapTsamplersourcecomponentTypenormalizedcounttypeminmaxsparseJPEGWebPKTX2non-PNG2
==000102030405060708091011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768697071727374757677787980818283848586878889909192939495969798
attempted to take ownership of Rust value while it was borrowedresumesteerdepenetrationRisechunkHashmeshLightchunkIngestblockEditsmovementTicknetReadnetSendcoreFramereplaySteplightCompute
POSITIONNORMALTEXCOORD_0TEXCOORD_1COLOR_0KHR_texture_transformKHR_materials_unlitbaseColorFactormetallicFactorroughnessFactorbaseColorTextureKHR_draco_mesh_compressionNorthEastSouthWest
9I?KSCA;=U23456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dmnopqrstuvwxyz{|}~
 !"";<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[<<==>>??@@AABBCCDDEEFFGGHHIIJJKK\\]]^^__``aabbccddeeffgghhiijjkk#$lmm@%AB&nopq'()**C+rr,,stD-E./0123uvwxyz{45|}~
!"!#$#%&%'('))**++,,--..//0011223344556677889:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYYZ[\]]^^__``aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz{{||}}~~
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
null pointer passed to rustrecursive use of an object detected which would lead to unsafe aliasing in rust
0x0123456789ABCDEFRefCell already mutably borrowedRefCell already borrowedHash table capacity overflow
attempt to divide by zerouser-provided comparison function does not correctly implement a total order
 !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWWXYZ[\]^_`abcdeeffgghhijklmnopqrstuvwxyz{|}~
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/sort/shared/smallsort.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/sort/stable/quicksort.rs
 !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/sys/sync/rwlock/no_threads.rs
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 34,169 |
| `i32.const` | 14,866 |
| `local.set` | 7,015 |
| `local.tee` | 5,839 |
| `i32.add` | 5,686 |
| `i32.load` | 5,147 |
| `end` | 5,061 |
| `br_if` | 3,446 |
| `i32.store` | 3,269 |
| `i64.store` | 2,556 |
| `i64.load` | 2,186 |
| `block` | 2,097 |
| `call` | 2,072 |
| `if` | 2,019 |
| `i32.sub` | 1,653 |
| `br` | 1,482 |
| `i32.eqz` | 1,160 |
| `i64.const` | 1,061 |
| `i32.shl` | 987 |
| `i32.and` | 825 |
| `select` | 824 |
| `i32.load8_u` | 792 |
| `i32.eq` | 773 |
| `i32.ne` | 748 |
| `loop` | 725 |

## Custom sections

- `name` · 24 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 220/220 (degraded: 0)
