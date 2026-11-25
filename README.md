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
| bloxd.io | 2026-11-25T18:32:45+09:00 | wp3j0a.a13381cf | `bundles/bloxd.io/main.js` · 2.97 MB · `eca344e10741…` |
| preprod.bloxd.io | 2026-11-25T18:32:46+09:00 | 8104he.3820eae0 | `bundles/preprod.bloxd.io/main.js` · 2.97 MB · `30b1c1ff6037…` |
| staging.bloxd.io | 2026-11-25T18:33:17+09:00 | wp3j0a.a13381cf | `bundles/staging.bloxd.io/main.js` · 2.97 MB · `eca344e10741…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/wp3j0a.main.a13381cf.js
  - file: `bundles/bloxd.io/main.js` · 3,110,450 bytes (2.97 MB)
  - sha256: `eca344e10741079d1ee1cd346f5f11854991e8e40624d15d58ab1d8ba82f3e69`
  - archived build files: 447 (46.39 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.20 MB total) — [wasm/bloxd.io/](wasm/bloxd.io/index.md)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/8104he.main.3820eae0.js
  - file: `bundles/preprod.bloxd.io/main.js` · 3,117,391 bytes (2.97 MB)
  - sha256: `30b1c1ff60372d1ff6dd9ae8477a89a8bfe63a330d331312e21d044157c899d8`
  - archived build files: 452 (46.54 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.21 MB total) — [wasm/preprod.bloxd.io/](wasm/preprod.bloxd.io/index.md)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/wp3j0a.main.a13381cf.js
  - file: `bundles/staging.bloxd.io/main.js` · 3,110,450 bytes (2.97 MB)
  - sha256: `eca344e10741079d1ee1cd346f5f11854991e8e40624d15d58ab1d8ba82f3e69`
  - archived build files: 447 (46.39 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.20 MB total) — [wasm/staging.bloxd.io/](wasm/staging.bloxd.io/index.md)
