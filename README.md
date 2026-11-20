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

| Environment | Checked at (JST) | Build | Main bundle |
|---|---|---|---|
| bloxd.io | 2026-11-20T23:37:32+09:00 | bcgkc.38229551 | `bundles/bloxd.io/main.js` · 3.24 MB · `b209cbb9b6ba…` |
| preprod.bloxd.io | 2026-11-20T23:38:12+09:00 | ad2avs.90d9e4dd | `bundles/preprod.bloxd.io/main.js` · 2.84 MB · `6fe78b383b9d…` |
| staging.bloxd.io | 2026-11-20T23:38:12+09:00 | bcgkc.38229551 | `bundles/staging.bloxd.io/main.js` · 3.24 MB · `b209cbb9b6ba…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/bcgkc.main.38229551.js
  - file: `bundles/bloxd.io/main.js` · 3,397,950 bytes (3.24 MB)
  - sha256: `b209cbb9b6bad2d6f4e56f912788dc126948346c7f8d7c13bab01b7f8f51c3d3`
  - archived build files: 435 (45.66 MB total, full manifest in `.monitor-state.json`)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/ad2avs.main.90d9e4dd.js
  - file: `bundles/preprod.bloxd.io/main.js` · 2,973,373 bytes (2.84 MB)
  - sha256: `6fe78b383b9d8ee75192c60945c9cb4297282afb2c99e74a543bda43cd8351dc`
  - archived build files: 433 (44.95 MB total, full manifest in `.monitor-state.json`)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/bcgkc.main.38229551.js
  - file: `bundles/staging.bloxd.io/main.js` · 3,397,950 bytes (3.24 MB)
  - sha256: `b209cbb9b6bad2d6f4e56f912788dc126948346c7f8d7c13bab01b7f8f51c3d3`
  - archived build files: 435 (45.66 MB total, full manifest in `.monitor-state.json`)
