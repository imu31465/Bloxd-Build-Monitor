# Bloxd Build Monitor

Latest Bloxd build per environment, detected by the external Cloudflare Worker in `cloudflare/` (one poll per minute). The Worker compares each live main-bundle URL with the corresponding archived URL in `.monitor-state.json` and dispatches GitHub Actions when it detects a difference; recent workflow activity suppresses duplicate dispatches. The workflow also has a six-hour fallback schedule. Worker notification rules and alert routing are documented in [`cloudflare/README.md`](cloudflare/README.md).
Every bundle is beautified and archived under stable logical paths: main.js, main.css, chunks/js/<chunk-id-or-name>.js, and matching CSS paths. Original CDN file names, URLs, and hashes are retained in .monitor-state.json.
This keeps each Webpack chunk on the same Git path across builds, so GitHub shows a normal file modification instead of delete/add. Each successfully archived build update is a new commit; previous build snapshots remain accessible in Git history and are never squashed or force-pushed.
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
| bloxd.io | 2026-11-21T00:51:31+09:00 | bbb6l5.0244a119 | `bundles/bloxd.io/main.js` · 2.81 MB · `2bcea8aa5ef1…` |
| preprod.bloxd.io | 2026-11-21T00:51:32+09:00 | bbb6l5.0244a119 | `bundles/preprod.bloxd.io/main.js` · 2.81 MB · `2bcea8aa5ef1…` |
| staging.bloxd.io | 2026-11-21T00:51:32+09:00 | bbb6l5.0244a119 | `bundles/staging.bloxd.io/main.js` · 2.81 MB · `2bcea8aa5ef1…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/bbb6l5.main.0244a119.js
  - file: `bundles/bloxd.io/main.js` · 2,941,950 bytes (2.81 MB)
  - sha256: `2bcea8aa5ef1004dc1ba864857b4160ef0c66841673a7c10f7e58402158abdaa`
  - archived build files: 435 (45.13 MB total, full manifest in `.monitor-state.json`)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/bbb6l5.main.0244a119.js
  - file: `bundles/preprod.bloxd.io/main.js` · 2,941,950 bytes (2.81 MB)
  - sha256: `2bcea8aa5ef1004dc1ba864857b4160ef0c66841673a7c10f7e58402158abdaa`
  - archived build files: 435 (45.13 MB total, full manifest in `.monitor-state.json`)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/bbb6l5.main.0244a119.js
  - file: `bundles/staging.bloxd.io/main.js` · 2,941,950 bytes (2.81 MB)
  - sha256: `2bcea8aa5ef1004dc1ba864857b4160ef0c66841673a7c10f7e58402158abdaa`
  - archived build files: 435 (45.13 MB total, full manifest in `.monitor-state.json`)
