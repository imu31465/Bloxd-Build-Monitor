# Bloxd Build Monitor

Latest Bloxd build per environment, detected by the external Cloudflare Worker in `cloudflare/` (one poll per minute). GitHub Actions is dispatched only when a bundle changes; its built-in schedule is a six-hour fallback.
Every bundle is beautified and archived under stable logical paths: main.js, main.css, chunks/js/<chunk-id-or-name>.js, and matching CSS paths. Original CDN file names, URLs, and hashes are retained in .monitor-state.json.
This keeps each Webpack chunk on the same Git path across builds, so GitHub shows a normal file modification instead of delete/add. Every build update is a new commit; previous build snapshots remain accessible in Git history and are never squashed or force-pushed.
`CHANGES.md` summarizes the latest update and links to fixed diff reports (`changes/added.md`, `changes/removed.md`, `changes/changed.md`) and the cumulative build log (`HISTORY.md`).
Each report is updated in place on every build and links directly to GitHub file diffs, hunk anchors, and before/after source lines; JavaScript comparison masks only two-character identifiers.

## Reports & History

- [`CHANGES.md`](CHANGES.md) — Latest build update summary
- [`changes/added.md`](changes/added.md) — Newly added bundle files and code insertions
- [`changes/removed.md`](changes/removed.md) — Removed bundle files and code deletions
- [`changes/changed.md`](changes/changed.md) — Fine-grained code modifications with before/after diffs and GitHub links
- [`HISTORY.md`](HISTORY.md) — Cumulative history of all detected builds across environments

| Environment | Checked at (JST) | Build | Main bundle |
|---|---|---|---|
| bloxd.io | 2026-11-20T21:26:30+09:00 | 7rj44.0704ff61 | `bundles/bloxd.io/main.js` · 2.75 MB · `748da3ec2446…` |
| preprod.bloxd.io | 2026-11-20T21:27:08+09:00 | ad2avs.90d9e4dd | `bundles/preprod.bloxd.io/main.js` · 2.84 MB · `6fe78b383b9d…` |
| staging.bloxd.io | 2026-11-20T21:27:08+09:00 | 7rj44.0704ff61 | `bundles/staging.bloxd.io/main.js` · 2.75 MB · `748da3ec2446…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/7rj44.main.0704ff61.js
  - file: `bundles/bloxd.io/main.js` · 2,880,275 bytes (2.75 MB)
  - sha256: `748da3ec24465095bd15a8e84a3f703d438230333ca4dad22e3044d7c912b879`
  - archived build files: 433 (44.99 MB total, full manifest in `.monitor-state.json`)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/ad2avs.main.90d9e4dd.js
  - file: `bundles/preprod.bloxd.io/main.js` · 2,973,373 bytes (2.84 MB)
  - sha256: `6fe78b383b9d8ee75192c60945c9cb4297282afb2c99e74a543bda43cd8351dc`
  - archived build files: 433 (44.95 MB total, full manifest in `.monitor-state.json`)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/7rj44.main.0704ff61.js
  - file: `bundles/staging.bloxd.io/main.js` · 2,880,275 bytes (2.75 MB)
  - sha256: `748da3ec24465095bd15a8e84a3f703d438230333ca4dad22e3044d7c912b879`
  - archived build files: 433 (44.99 MB total, full manifest in `.monitor-state.json`)
