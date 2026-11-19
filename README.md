# Bloxd Build Monitor

Latest Bloxd build per environment, detected by the external Cloudflare Worker in `cloudflare/` (one poll per minute). GitHub Actions is dispatched only when a bundle changes; its built-in schedule is a six-hour fallback.
Every bundle is beautified and archived under stable logical paths: main.js, main.css, chunks/js/<chunk-id-or-name>.js, and matching CSS paths. Original CDN file names, URLs, and hashes are retained in .monitor-state.json.
This keeps each Webpack chunk on the same Git path across builds, so GitHub shows a normal file modification instead of delete/add. Every build update is a new commit; previous build snapshots remain accessible in Git history and are never squashed or force-pushed.
`CHANGES.md` uses green/red diff highlighting and links to a per-build readable report.
Per-build reports under `diffs/` are paginated to stay below GitHub file-size limits. Every changed file and independent diff hunk remains separately collapsible; JavaScript comparison masks only two-character identifiers.

| Environment | Checked at (JST) | Build | Main bundle |
|---|---|---|---|
| bloxd.io | 2026-11-19T19:08:13+09:00 | zyyatq.17720d1c | `bundles/bloxd.io/main.js` · 2.71 MB · `17aaf634e194…` |
| preprod.bloxd.io | 2026-11-19T19:08:51+09:00 | 7jvyee.81bfc694 | `bundles/preprod.bloxd.io/main.js` · 3.56 MB · `8454b8fd7bf1…` |
| staging.bloxd.io | 2026-11-19T19:08:51+09:00 | zyyatq.17720d1c | `bundles/staging.bloxd.io/main.js` · 2.71 MB · `17aaf634e194…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/zyyatq.main.17720d1c.js
  - file: `bundles/bloxd.io/main.js` · 2,843,254 bytes (2.71 MB)
  - sha256: `17aaf634e19494af45d348c2869751f7c4a855fa1d94172391c9b0daf9aa4333`
  - archived build files: 432 (44.69 MB total, full manifest in `.monitor-state.json`)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/7jvyee.main.81bfc694.js
  - file: `bundles/preprod.bloxd.io/main.js` · 3,734,144 bytes (3.56 MB)
  - sha256: `8454b8fd7bf1c5d8bf55505cb9db4faeccd778b6e14749a8df085562e6ac56e7`
  - archived build files: 418 (45.12 MB total, full manifest in `.monitor-state.json`)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/zyyatq.main.17720d1c.js
  - file: `bundles/staging.bloxd.io/main.js` · 2,843,254 bytes (2.71 MB)
  - sha256: `17aaf634e19494af45d348c2869751f7c4a855fa1d94172391c9b0daf9aa4333`
  - archived build files: 432 (44.69 MB total, full manifest in `.monitor-state.json`)
