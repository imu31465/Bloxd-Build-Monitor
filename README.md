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
| bloxd.io | 2026-11-28T08:14:40+09:00 | fl4vv.bd3c59ce | `bundles/bloxd.io/main.js` · 3.34 MB · `f89968a6eea8…` |
| preprod.bloxd.io | 2026-11-28T08:15:41+09:00 | 1yqdn.8419f1e1 | `bundles/preprod.bloxd.io/main.js` · 3.32 MB · `9efe4370c7a5…` |
| staging.bloxd.io | 2026-11-28T08:15:41+09:00 | fl4vv.bd3c59ce | `bundles/staging.bloxd.io/main.js` · 3.34 MB · `f89968a6eea8…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/fl4vv.main.bd3c59ce.js
  - file: `bundles/bloxd.io/main.js` · 3,506,284 bytes (3.34 MB)
  - sha256: `f89968a6eea88cedbcf6bf5036062c00314d7bdd43df216ae615f2b0505271ac`
  - archived build files: 770 (54.23 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.68 MB total) — [wasm/bloxd.io/](wasm/bloxd.io/index.md)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/1yqdn.main.8419f1e1.js
  - file: `bundles/preprod.bloxd.io/main.js` · 3,482,060 bytes (3.32 MB)
  - sha256: `9efe4370c7a52060d4b264a058b1d5ced2a3605f9124d3eed9af623bffbb8c51`
  - archived build files: 769 (54.23 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.68 MB total) — [wasm/preprod.bloxd.io/](wasm/preprod.bloxd.io/index.md)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/fl4vv.main.bd3c59ce.js
  - file: `bundles/staging.bloxd.io/main.js` · 3,506,284 bytes (3.34 MB)
  - sha256: `f89968a6eea88cedbcf6bf5036062c00314d7bdd43df216ae615f2b0505271ac`
  - archived build files: 770 (54.23 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.68 MB total) — [wasm/staging.bloxd.io/](wasm/staging.bloxd.io/index.md)
