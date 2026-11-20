# Bloxd Build Monitor

Latest Bloxd build per environment, detected by the external Cloudflare Worker in `cloudflare/` (one poll per minute). GitHub Actions is dispatched only when a bundle changes; its built-in schedule is a six-hour fallback.
Every bundle is beautified and archived under stable logical paths: main.js, main.css, chunks/js/<chunk-id-or-name>.js, and matching CSS paths. Original CDN file names, URLs, and hashes are retained in .monitor-state.json.
This keeps each Webpack chunk on the same Git path across builds, so GitHub shows a normal file modification instead of delete/add. Every build update is a new commit; previous build snapshots remain accessible in Git history and are never squashed or force-pushed.
`CHANGES.md` uses green/red diff highlighting and links to a per-build readable report.
Per-build reports under `diffs/` are paginated to stay below GitHub file-size limits. Every changed file and independent diff hunk remains separately collapsible; JavaScript comparison masks only two-character identifiers.

| Environment | Checked at (JST) | Build | Main bundle |
|---|---|---|---|
| bloxd.io | 2026-11-20T19:41:28+09:00 | teusab.46cefca6 | `bundles/bloxd.io/main.js` · 2.78 MB · `6c673f903c3c…` |
| preprod.bloxd.io | 2026-11-20T19:41:55+09:00 | ad2avs.90d9e4dd | `bundles/preprod.bloxd.io/main.js` · 2.84 MB · `6fe78b383b9d…` |
| staging.bloxd.io | 2026-11-20T19:41:55+09:00 | teusab.46cefca6 | `bundles/staging.bloxd.io/main.js` · 2.78 MB · `6c673f903c3c…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/teusab.main.46cefca6.js
  - file: `bundles/bloxd.io/main.js` · 2,916,042 bytes (2.78 MB)
  - sha256: `6c673f903c3ccf6f0abf822759a85abab7391fc993e6d78c44ff9c564f24a2c2`
  - archived build files: 433 (44.96 MB total, full manifest in `.monitor-state.json`)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/ad2avs.main.90d9e4dd.js
  - file: `bundles/preprod.bloxd.io/main.js` · 2,973,373 bytes (2.84 MB)
  - sha256: `6fe78b383b9d8ee75192c60945c9cb4297282afb2c99e74a543bda43cd8351dc`
  - archived build files: 433 (44.95 MB total, full manifest in `.monitor-state.json`)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/teusab.main.46cefca6.js
  - file: `bundles/staging.bloxd.io/main.js` · 2,916,042 bytes (2.78 MB)
  - sha256: `6c673f903c3ccf6f0abf822759a85abab7391fc993e6d78c44ff9c564f24a2c2`
  - archived build files: 433 (44.96 MB total, full manifest in `.monitor-state.json`)
