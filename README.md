# Bloxd Build Monitor

Latest Bloxd build per environment, detected by the external Cloudflare Worker in `cloudflare/` (one poll per minute). GitHub Actions is dispatched only when a bundle changes; its built-in schedule is a six-hour fallback.
Every bundle is beautified and archived under stable logical paths: main.js, main.css, chunks/js/<chunk-id-or-name>.js, and matching CSS paths. Original CDN file names, URLs, and hashes are retained in .monitor-state.json.
This keeps each Webpack chunk on the same Git path across builds, so GitHub shows a normal file modification instead of delete/add. Every build update is a new commit; previous build snapshots remain accessible in Git history and are never squashed or force-pushed.
`CHANGES.md` summarizes the latest update and links to fixed diff reports (`changes/added.md`, `changes/removed.md`, `changes/changed.md` + `changes/changed/part-NNN.md`) and the cumulative build log (`HISTORY.md`).
Each report is updated in place on every build and links directly to immutable GitHub file diffs, hunk anchors, and before/after source lines; JavaScript comparison masks only two-character identifiers.

## Reports & History

- [`CHANGES.md`](CHANGES.md) — Latest build update summary
- [`changes/added.md`](changes/added.md) — Newly added bundle files and code insertions
- [`changes/removed.md`](changes/removed.md) — Removed bundle files and code deletions
- [`changes/changed.md`](changes/changed.md) — Paginated index of all fine-grained code modifications (`changes/changed/part-NNN.md`)
- [`HISTORY.md`](HISTORY.md) — Cumulative history of all detected builds across environments
- [`wasm/`](wasm/README.md) — Per-build WebAssembly analysis of every `.wasm` module referenced by the bundle (sections, imports/exports, function statistics)

| Environment | Checked at (JST) | Build | Main bundle |
|---|---|---|---|
| bloxd.io | 2026-11-25T01:01:42+09:00 | tz47m9.2cb7e113 | `bundles/bloxd.io/main.js` · 2.85 MB · `4746e0b99198…` |
| preprod.bloxd.io | 2026-11-25T01:01:43+09:00 | sn3sfj.2522680a | `bundles/preprod.bloxd.io/main.js` · 2.95 MB · `5f62790babde…` |
| staging.bloxd.io | 2026-11-25T01:02:22+09:00 | tz47m9.2cb7e113 | `bundles/staging.bloxd.io/main.js` · 2.85 MB · `4746e0b99198…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/tz47m9.main.2cb7e113.js
  - file: `bundles/bloxd.io/main.js` · 2,990,750 bytes (2.85 MB)
  - sha256: `4746e0b99198313277421abb78f9c093ac17b893b441bd495df8e4f6c0fe78f0`
  - archived build files: 443 (45.99 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.16 MB total) — [wasm/bloxd.io/](wasm/bloxd.io/index.md)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/sn3sfj.main.2522680a.js
  - file: `bundles/preprod.bloxd.io/main.js` · 3,088,391 bytes (2.95 MB)
  - sha256: `5f62790babde3555e3a720ff7472132142df950e391b839b6a130501f328e74e`
  - archived build files: 447 (46.44 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.20 MB total) — [wasm/preprod.bloxd.io/](wasm/preprod.bloxd.io/index.md)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/tz47m9.main.2cb7e113.js
  - file: `bundles/staging.bloxd.io/main.js` · 2,990,750 bytes (2.85 MB)
  - sha256: `4746e0b99198313277421abb78f9c093ac17b893b441bd495df8e4f6c0fe78f0`
  - archived build files: 443 (45.99 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.16 MB total) — [wasm/staging.bloxd.io/](wasm/staging.bloxd.io/index.md)
