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
| bloxd.io | 2026-11-24T12:42:29+09:00 | 31kiid.1299b0d6 | `bundles/bloxd.io/main.js` · 2.88 MB · `d2eadecd08d5…` |
| preprod.bloxd.io | 2026-11-24T12:43:07+09:00 | w4ddu.56408518 | `bundles/preprod.bloxd.io/main.js` · 2.91 MB · `ba0caba6540c…` |
| staging.bloxd.io | 2026-11-24T12:43:08+09:00 | 31kiid.1299b0d6 | `bundles/staging.bloxd.io/main.js` · 2.88 MB · `d2eadecd08d5…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/31kiid.main.1299b0d6.js
  - file: `bundles/bloxd.io/main.js` · 3,024,848 bytes (2.88 MB)
  - sha256: `d2eadecd08d5badfa95a4f12e06c2bb2b7bd4f71a2e6133ae839d489926757d7`
  - archived build files: 443 (46.15 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.16 MB total) — [wasm/bloxd.io/](wasm/bloxd.io/index.md)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/w4ddu.main.56408518.js
  - file: `bundles/preprod.bloxd.io/main.js` · 3,047,744 bytes (2.91 MB)
  - sha256: `ba0caba6540cf495ad199c16dee47c42223305ca6834175e4cea124376753c37`
  - archived build files: 443 (46.14 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.16 MB total) — [wasm/preprod.bloxd.io/](wasm/preprod.bloxd.io/index.md)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/31kiid.main.1299b0d6.js
  - file: `bundles/staging.bloxd.io/main.js` · 3,024,848 bytes (2.88 MB)
  - sha256: `d2eadecd08d5badfa95a4f12e06c2bb2b7bd4f71a2e6133ae839d489926757d7`
  - archived build files: 443 (46.15 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.16 MB total) — [wasm/staging.bloxd.io/](wasm/staging.bloxd.io/index.md)
