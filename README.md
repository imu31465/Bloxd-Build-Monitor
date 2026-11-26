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
| bloxd.io | 2026-11-27T00:53:38+09:00 | pxmq3aq.c63b303d | `bundles/bloxd.io/main.js` · 3.15 MB · `ced38618233b…` |
| preprod.bloxd.io | 2026-11-27T00:53:39+09:00 | cwj32u.ae3e40c2 | `bundles/preprod.bloxd.io/main.js` · 3.20 MB · `17b3eed3afbf…` |
| staging.bloxd.io | 2026-11-27T00:54:30+09:00 | pxmq3aq.c63b303d | `bundles/staging.bloxd.io/main.js` · 3.15 MB · `ced38618233b…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/pxmq3aq.main.c63b303d.js
  - file: `bundles/bloxd.io/main.js` · 3,306,732 bytes (3.15 MB)
  - sha256: `ced38618233b4c0e18d8a9fca49ec2a40abbd81c126be8b9087777b7e8963d69`
  - archived build files: 757 (53.18 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.26 MB total) — [wasm/bloxd.io/](wasm/bloxd.io/index.md)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/cwj32u.main.ae3e40c2.js
  - file: `bundles/preprod.bloxd.io/main.js` · 3,359,953 bytes (3.20 MB)
  - sha256: `17b3eed3afbf6c9b20f151ee74134339b7fb0574b74f49a20a4859e07b333394`
  - archived build files: 756 (53.57 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.45 MB total) — [wasm/preprod.bloxd.io/](wasm/preprod.bloxd.io/index.md)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/pxmq3aq.main.c63b303d.js
  - file: `bundles/staging.bloxd.io/main.js` · 3,306,732 bytes (3.15 MB)
  - sha256: `ced38618233b4c0e18d8a9fca49ec2a40abbd81c126be8b9087777b7e8963d69`
  - archived build files: 757 (53.18 MB total, full manifest in `.monitor-state.json`)
  - wasm modules: 12 (17.26 MB total) — [wasm/staging.bloxd.io/](wasm/staging.bloxd.io/index.md)
