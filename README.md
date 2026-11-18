# Bloxd Build Monitor

Latest Bloxd build per environment, detected by the external Cloudflare Worker in `cloudflare/` (one poll per minute). GitHub Actions is dispatched only when a bundle changes; its built-in schedule is a six-hour fallback.
Every bundle is beautified and archived under stable logical paths: main.js, main.css, chunks/js/<chunk-id-or-name>.js, and matching CSS paths. Original CDN file names, URLs, and hashes are retained in .monitor-state.json.
This keeps each Webpack chunk on the same Git path across builds, so GitHub shows a normal file modification instead of delete/add. The last 5 build snapshots are kept for diff browsing; older snapshots are squashed into a rolling baseline.
`CHANGES.md` summarizes each build change without minification noise.

| Environment | Checked at (JST) | Build | Main bundle |
|---|---|---|---|
| bloxd.io | 2026-11-18T15:07:09+09:00 | l9xvfg.c0ace454 | `bundles/bloxd.io/main.js` · 2.60 MB · `3f5cac8f743b…` |
| preprod.bloxd.io | 2026-11-18T15:07:55+09:00 | 7jvyee.81bfc694 | `bundles/preprod.bloxd.io/main.js` · 3.56 MB · `8454b8fd7bf1…` |
| staging.bloxd.io | 2026-11-18T15:07:55+09:00 | l9xvfg.c0ace454 | `bundles/staging.bloxd.io/main.js` · 2.60 MB · `3f5cac8f743b…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/l9xvfg.main.c0ace454.js
  - file: `bundles/bloxd.io/main.js` · 2,724,925 bytes (2.60 MB)
  - sha256: `3f5cac8f743ba7e752cd932fdbb9fc1e045b27c5debfc335a576a4c0e06769e6`
  - archived build files: 420 (44.13 MB total, full manifest in `.monitor-state.json`)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/7jvyee.main.81bfc694.js
  - file: `bundles/preprod.bloxd.io/main.js` · 3,734,144 bytes (3.56 MB)
  - sha256: `8454b8fd7bf1c5d8bf55505cb9db4faeccd778b6e14749a8df085562e6ac56e7`
  - archived build files: 418 (45.12 MB total, full manifest in `.monitor-state.json`)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/l9xvfg.main.c0ace454.js
  - file: `bundles/staging.bloxd.io/main.js` · 2,724,925 bytes (2.60 MB)
  - sha256: `3f5cac8f743ba7e752cd932fdbb9fc1e045b27c5debfc335a576a4c0e06769e6`
  - archived build files: 420 (44.13 MB total, full manifest in `.monitor-state.json`)
