# WASM module: `bloxd_wasm_anim_bg`

> environment **staging.bloxd.io** · build `mpd96o.85ad4551` · analyzed 2026-11-24T14:21:15+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_anim_bg.c22fda982f3d0ea7fdf0.wasm
> 415,630 bytes (405.9 KB) · sha256 `44db7f8e6b21308f…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `8fdf85e724e458b4.821` → `fb3dc214f331513f.821` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/10 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 258 / 5 |
| Exports / imports | 10 / 5 |
| Code bytes (function bodies) | 256,664 (250.6 KB) |
| Total local variables | 1,816 |
| Instructions (scanable bodies) | 122,044 |
| Data segments / bytes | 23 / 157,486 |
| Element segments / entries | 1 / 60 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `fb3dc214f331513f.821` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 235 | 31 |
| 2 | import | 61 | 5 |
| 3 | function | 260 | 258 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 80 | 10 |
| 9 | element | 119 | 1 |
| 12 | datacount | 1 | — |
| 10 | code | 257,092 | 258 |
| 11 | data | 157,683 | 23 |
| 0 | custom:name | 28 | — |

## Types

31 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i64)` ×1

## Imports

5 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `w3FG.eUtd` | func | `(i32 i32) -> ()` |
| 1 | `w3FG.nEhu` | func | `(i32) -> ()` |
| 2 | `w3FG.vFqX` | func | `(i32 i32) -> ()` |
| 3 | `w3FG.skOo` | func | `(i32 i32) -> (i32)` |
| 4 | `w3FG.q9qt` | func | `(i32 i32) -> ()` |

## Exports

10 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `memory` | memory | 0 | `` |
| `LsxH` | func | 213 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32 i32)` |
| `GYkl` | func | 223 | `(i32 i32 i32 i32) -> (i32)` |
| `j8ue` | global | 1 | `` |
| `Vv2C` | func | 237 | `(i32 i32 i32) -> ()` |
| `sxKc` | func | 228 | `(i32 i32 i32) -> (i32 i32)` |
| `o3qu` | func | 222 | `(i32 i32) -> (i32)` |
| `GJzE` | func | 261 | `() -> ()` |
| `O94G` | func | 261 | `() -> ()` |
| `zyYY` | global | 2 | `` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 19 pages · max ∞ · shared=False
- table 0: funcref · min 61 · max 61
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1206528, `i32` = i32.const 1207012

## Functions

- 258 bodies · 256,664 code bytes · avg 994 B
- instruction scan: 258 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 30 |
| <= 64 bytes | 13 |
| <= 128 bytes | 50 |
| <= 256 bytes | 33 |
| <= 512 bytes | 52 |
| <= 1024 bytes | 41 |
| <= 2048 bytes | 15 |
| <= 4096 bytes | 6 |
| <= 8192 bytes | 14 |
| <= 16384 bytes | 1 |
| > 16384 bytes | 3 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 36 | 8,935 | 4,289 | local.get×1135, i32.const×620, local.set×249, i32.add×206, end×206 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 20 | 7,808 | 3,763 | local.get×947, i32.const×654, i32.add×188, local.tee×178, end×175 |
| 2 | `(i32 i32) -> ()` | 37 | 6,738 | 3,380 | local.get×785, i32.const×503, local.set×244, local.tee×199, i32.add×174 |
| 3 | `(i32 i32) -> ()` | 35 | 7,128 | 3,390 | local.get×935, i32.const×438, local.set×278, end×183, i32.add×162 |
| 4 | `(i32 f64) -> ()` | 26 | 6,441 | 3,313 | local.get×845, i32.const×544, i32.add×200, local.tee×194, local.set×179 |
| 5 | `(i32 i32) -> ()` | 18 | 6,116 | 3,066 | local.get×975, i32.const×345, i32.load×229, i32.add×227, end×192 |
| 6 | `(i32 i32 i32) -> ()` | 26 | 5,447 | 2,902 | local.get×589, i32.const×473, i32.add×220, br_if×191, end×167 |
| 7 | `(i32 i32 i32 i32) -> ()` | 14 | 5,262 | 2,620 | local.get×835, i32.const×291, i32.load×224, i32.add×183, end×158 |
| 8 | `(i32 i32) -> ()` | 17 | 4,732 | 2,177 | local.get×616, i32.const×284, i32.add×110, i32.store×104, end×103 |
| 9 | `(i32) -> (i32)` | 10 | 4,929 | 2,157 | local.get×505, i32.const×449, i32.store×204, local.tee×154, i32.load×105 |
| 10 | `(i32 i32) -> ()` | 16 | 3,503 | 1,854 | local.get×510, i32.const×263, end×116, i32.add×105, local.set×98 |
| 11 | `(i32 i32) -> ()` | 15 | 6,637 | 2,893 | local.get×686, i32.const×470, end×137, i32.load×133, i32.add×131 |
| 12 | `(i32 i32 i32 i32 i32 i32) -> ()` | 42 | 20,444 | 9,271 | local.get×2592, i32.const×1350, i32.load×560, i32.add×511, local.set×419 |
| 13 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 32 | 5,220 | 2,405 | local.get×711, i32.const×325, i32.load×155, local.set×128, i32.add×124 |
| 14 | `(i32 i32 i32 i32 i32) -> ()` | 107 | 18,911 | 8,628 | local.get×2465, i32.const×1136, local.set×524, i32.load×484, i32.add×442 |
| 15 | `(i32) -> ()` | 30 | 2,681 | 1,420 | local.get×363, i32.const×197, local.set×105, i32.add×85, end×81 |
| 16 | `(i32 f64 f64 f64) -> (f64)` | 14 | 8,174 | 3,190 | local.get×719, f64.const×366, f64.mul×278, f64.add×207, end×177 |
| 17 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 8 | 2,426 | 1,054 | local.get×304, i32.const×159, i64.store×71, i64.load×65, i32.add×50 |
| 18 | `(i32 i32 i32) -> ()` | 15 | 2,024 | 968 | local.get×246, i32.const×191, local.set×79, end×58, block×38 |
| 19 | `(i32 i32) -> ()` | 6 | 1,619 | 779 | local.get×234, i32.load×93, local.tee×76, i32.const×68, end×37 |
| 20 | `(i32 i32) -> (i32)` | 31 | 2,620 | 1,326 | local.get×303, i32.const×214, local.set×91, i32.add×80, local.tee×70 |
| 21 | `(i32 i32 i32) -> ()` | 21 | 1,888 | 853 | local.get×291, i32.const×81, i64.store×61, i64.load×60, local.set×46 |
| 22 | `(i32 i32 i32 i32 i32) -> ()` | 14 | 1,664 | 770 | local.get×239, i32.const×92, local.set×54, end×41, i32.store×38 |
| 24 | `(i32 f64) -> ()` | 40 | 5,406 | 2,461 | local.get×614, i32.const×285, local.set×154, local.tee×135, i32.add×117 |
| 26 | `(i32 i32) -> ()` | 10 | 1,556 | 721 | local.get×203, i32.const×107, end×42, i32.add×38, local.set×37 |
| 27 | `(i32 i32 i32) -> ()` | 25 | 4,745 | 2,501 | local.get×608, i32.const×300, local.set×211, end×150, i32.add×117 |
| 29 | `(i32 i32 i32 i32 i32) -> ()` | 20 | 1,780 | 799 | local.get×232, i32.const×95, i32.load×48, end×41, i64.store×38 |
| 46 | `(i32 i32 i32) -> ()` | 15 | 3,543 | 1,400 | local.get×353, f64.const×108, i32.const×100, end×99, block×80 |
| 153 | `(i32 i32) -> (i32)` | 10 | 2,178 | 1,050 | local.get×218, i32.const×211, local.tee×72, i32.add×49, br_if×43 |
| 208 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32 i32)` | 83 | 25,181 | 12,118 | local.get×3468, i32.const×1556, i32.add×788, local.set×784, i32.load×647 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
 !"#$%&'()*+,-./01234567the '%' operator is not supported; use math.modstrings are not supportedstatement blocks are not supportedassignment is not supportedthe arrow operator '->' is not supportedthe
'continue' is not supported'break' is not supported'for_each' is not supported'loop' is not supported'return' statements are not supported'this' is not supportedin_sineout_sinein_out_sinein_quadout_qu
multiple statements are not supportedput a ?: inside the true branch of another ?: in parenthesesarrays are not supportedmaterial references are not supportedtexture references are not supportedgeomet
target must be the name of a mob or vehicleBad Unicode escapeJSON nested too deeplyExpected ',' or ']' after array elementUnexpected end of JSON inputtruefalsenullUnexpected tokenNo number after minus
called `Option::unwrap()` on a `None` value0001020304050607080910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273747576777
not an animation file: name it <name>.animation.json or <name>.binding.jsonhas no target: set "target" to the mob or vehicle it animatesE!
"spin": { "from": "groundSpeed", "gate": "occupied", "scale": 0.2, "min": 0, "max": 2, "rise": 2.5, "fall": 1.2 },
{ "name": "bit", "clip": "drill_spin", "rate": "spin", "bones": ["Drill", "Drill2", "Drill3", "Drill4"] },
groundSpeedforwardSpeedintentSpeedverticalSpeedturnRateoccupiedonGroundinFluidcrouchingaiminghitAngle
Expected ',' or '}' after property valueExpected ':' after property nameExpected property name
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/sys/sync/rwlock/no_threads.rs
override_previous_animation must be true or false"bones" is not an objectis not an object
W: the game plays this action, so its clip must end (not loop or hold on its last frame)
a formatting trait implementation returned an error when the underlying stream did not
"armsFree": { "from": "aiming", "scale": -1, "offset": 1, "rise": 15, "fall": 0 }
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/memchr.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/raw_vec/mod.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/index.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/str/pattern.rs
Unterminated stringBad escaped characterBad control character in string literal
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 32,736 |
| `i32.const` | 16,427 |
| `i32.add` | 6,305 |
| `end` | 6,244 |
| `local.set` | 6,234 |
| `local.tee` | 5,930 |
| `i32.load` | 5,512 |
| `br_if` | 3,662 |
| `i32.store` | 3,332 |
| `block` | 2,692 |
| `call` | 2,463 |
| `if` | 2,444 |
| `br` | 2,077 |
| `i32.sub` | 2,013 |
| `i64.const` | 1,831 |
| `i64.store` | 1,601 |
| `i32.eqz` | 1,310 |
| `i64.load` | 1,303 |
| `i32.and` | 1,091 |
| `i32.eq` | 886 |
| `i32.shl` | 876 |
| `f64.const` | 855 |
| `loop` | 850 |
| `i32.ne` | 697 |
| `i32.load8_u` | 692 |

## Custom sections

- `name` · 23 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 258/258 (degraded: 0)
