# Bloxd Build Monitor

Latest Bloxd build per environment, detected by the external Cloudflare Worker in `cloudflare/` (one poll per minute). GitHub Actions is dispatched only when a bundle changes; its built-in schedule is a six-hour fallback.
Every bundle is beautified and archived under stable logical paths: main.js, main.css, chunks/js/<chunk-id-or-name>.js, and matching CSS paths. Original CDN file names, URLs, and hashes are retained in .monitor-state.json.
This keeps each Webpack chunk on the same Git path across builds, so GitHub shows a normal file modification instead of delete/add. Every build update is a new commit; previous build snapshots remain accessible in Git history and are never squashed or force-pushed.
`CHANGES.md` uses green/red diff highlighting and links to a per-build readable report.
Per-build reports under `diffs/` are paginated to stay below GitHub file-size limits. Every changed file and independent diff hunk remains separately collapsible; JavaScript comparison masks only two-character identifiers.

| Environment | Checked at (JST) | Build | Main bundle |
|---|---|---|---|
| bloxd.io | 2026-11-20T00:40:20+09:00 | qsji88.c369d390 | `bundles/bloxd.io/main.js` · 2.76 MB · `a4caf460658f…` |
| preprod.bloxd.io | 2026-11-20T00:40:20+09:00 | ad2avs.90d9e4dd | `bundles/preprod.bloxd.io/main.js` · 2.84 MB · `6fe78b383b9d…` |
| staging.bloxd.io | 2026-11-20T00:40:49+09:00 | qsji88.c369d390 | `bundles/staging.bloxd.io/main.js` · 2.76 MB · `a4caf460658f…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/qsji88.main.c369d390.js
  - file: `bundles/bloxd.io/main.js` · 2,889,415 bytes (2.76 MB)
  - sha256: `a4caf460658ff5640f00b5d2de4bb4556874916e1661f34991f3ada5d07c4007`
  - archived build files: 432 (44.80 MB total, full manifest in `.monitor-state.json`)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/ad2avs.main.90d9e4dd.js
  - file: `bundles/preprod.bloxd.io/main.js` · 2,973,373 bytes (2.84 MB)
  - sha256: `6fe78b383b9d8ee75192c60945c9cb4297282afb2c99e74a543bda43cd8351dc`
  - archived build files: 433 (44.95 MB total, full manifest in `.monitor-state.json`)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/qsji88.main.c369d390.js
  - file: `bundles/staging.bloxd.io/main.js` · 2,889,415 bytes (2.76 MB)
  - sha256: `a4caf460658ff5640f00b5d2de4bb4556874916e1661f34991f3ada5d07c4007`
  - archived build files: 432 (44.80 MB total, full manifest in `.monitor-state.json`)
