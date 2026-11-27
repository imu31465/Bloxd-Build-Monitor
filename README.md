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
| bloxd.io | 2026-11-27T18:52:36+09:00 | u88b9b.1969c480 | `bundles/bloxd.io/main.js` · 3.19 MB · `291cf72eda78…` |
| preprod.bloxd.io | 2026-11-27T18:53:22+09:00 | gw4e3a.937868ec | `bundles/preprod.bloxd.io/main.js` · 3.25 MB · `1f5157b63c4b…` |
| staging.bloxd.io | 2026-11-27T18:53:23+09:00 | u88b9b.1969c480 | `bundles/staging.bloxd.io/main.js` · 3.19 MB · `291cf72eda78…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/u88b9b.main.1969c480.js
  - file: `bundles/bloxd.io/main.js` · 3,345,459 bytes (3.19 MB)
  - sha256: `291cf72eda78a2ca1d0299d238787189d88202990232b3f299ddb510023c4580`
  - archived build files: 756 (53.56 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.45 MB total) — [wasm/bloxd.io/](wasm/bloxd.io/index.md)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/gw4e3a.main.937868ec.js
  - file: `bundles/preprod.bloxd.io/main.js` · 3,411,463 bytes (3.25 MB)
  - sha256: `1f5157b63c4b37e0a779540df5521849bc41f050db6f7b64643a8a9d4e9f5c82`
  - archived build files: 756 (53.56 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.45 MB total) — [wasm/preprod.bloxd.io/](wasm/preprod.bloxd.io/index.md)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/u88b9b.main.1969c480.js
  - file: `bundles/staging.bloxd.io/main.js` · 3,345,459 bytes (3.19 MB)
  - sha256: `291cf72eda78a2ca1d0299d238787189d88202990232b3f299ddb510023c4580`
  - archived build files: 756 (53.56 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.45 MB total) — [wasm/staging.bloxd.io/](wasm/staging.bloxd.io/index.md)
