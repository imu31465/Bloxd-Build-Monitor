# WebAssembly module analysis

Every `.wasm` binary referenced by the tracked Bloxd bundles is downloaded and analyzed on each build update.
- `wasm/<environment>/<module>.md` — readable analysis report (sections, imports/exports, function statistics, strings)
- `wasm/<environment>/<module>.facts.json` — machine-readable facts and per-build history for diffing
- `wasm/<environment>/index.md` — module table for the environment

The parser (`scripts/wasm_inspect.py`) is a clean-room implementation of the public W3C WebAssembly binary format specification; it validates against V8's WebAssembly engine on the real modules.

> Bloxd wasm export/import identifiers are randomly re-assigned by their build obfuscator on every build; compare signatures, counts and sizes rather than names. The name-section module id rotates its hex prefix per build, but its numeric suffix (e.g. `.10797`) stays stable across builds and marks the module version.

| Environment | Build | Modules | Total size | Changed this build | Index |
|---|---|---:|---:|---|---|
| bloxd.io | `tz47m9.2cb7e113` | 12 | 17.16 MB | `bloxd_wasm_anim_bg`, `bloxd_wasm_bg`, `bloxd_wasm_models_bg`, `bloxd_wasm_recorder_bg`, `bloxd_wasm_replay_bg`, `bloxd_wasm_shader_pack_bg`, `bloxd_wasm_textures_bg`, `bloxd_wasm_webgl1_bg`, `bloxd_wasm_webgl_bg`, `bloxd_wasm_webgpu_bg`, `bloxd_wasm_workers_bg` | [bloxd.io/index.md](bloxd.io/index.md) |
| preprod.bloxd.io | `sn3sfj.2522680a` | 12 | 17.20 MB | `bloxd_wasm_anim_bg`, `bloxd_wasm_bg`, `bloxd_wasm_models_bg`, `bloxd_wasm_recorder_bg`, `bloxd_wasm_replay_bg`, `bloxd_wasm_shader_pack_bg`, `bloxd_wasm_textures_bg`, `bloxd_wasm_webgl1_bg`, `bloxd_wasm_webgl_bg`, `bloxd_wasm_webgpu_bg`, `bloxd_wasm_workers_bg` | [preprod.bloxd.io/index.md](preprod.bloxd.io/index.md) |
| staging.bloxd.io | `tz47m9.2cb7e113` | 12 | 17.16 MB | `bloxd_wasm_anim_bg`, `bloxd_wasm_bg`, `bloxd_wasm_models_bg`, `bloxd_wasm_recorder_bg`, `bloxd_wasm_replay_bg`, `bloxd_wasm_shader_pack_bg`, `bloxd_wasm_textures_bg`, `bloxd_wasm_webgl1_bg`, `bloxd_wasm_webgl_bg`, `bloxd_wasm_webgpu_bg`, `bloxd_wasm_workers_bg` | [staging.bloxd.io/index.md](staging.bloxd.io/index.md) |
