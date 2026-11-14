# Bloxd Build Monitor

Latest Bloxd build per environment, refreshed every 5 minutes.
Every bundle file of the current build (main + all webpack chunks, JS and CSS) is archived under `bundles/<environment>/` and beautified in place (like browser DevTools pretty-print); file names keep the CDN content hashes, so lineage tracking stays exact.
The last 5 build snapshots are kept as commits so per-file diffs stay browsable; older snapshots are squashed into a rolling baseline.
`CHANGES.md` summarizes each build change without minification noise.

| Environment | Checked at (JST) | Build | Main bundle |
|---|---|---|---|
| bloxd.io | 2026-11-15T01:50:18+09:00 | 8f728.20f3f323 | `bundles/bloxd.io/8f728.main.20f3f323.js` · 3.23 MB · `99b50c4198d3…` |
| preprod.bloxd.io | 2026-11-15T01:50:50+09:00 | 90jf8k.a8dbe431 | `bundles/preprod.bloxd.io/90jf8k.main.a8dbe431.js` · 3.25 MB · `4f16b1ed86af…` |
| staging.bloxd.io | 2026-11-15T01:50:50+09:00 | 8f728.20f3f323 | `bundles/staging.bloxd.io/8f728.main.20f3f323.js` · 3.23 MB · `99b50c4198d3…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/8f728.main.20f3f323.js
  - file: `bundles/bloxd.io/8f728.main.20f3f323.js` · 3,390,776 bytes (3.23 MB)
  - sha256: `99b50c4198d355de5f372b142635e330a41d29493a5328433b932dbc2436b65e`
  - archived build files: 412 (43.98 MB total, full manifest in `.monitor-state.json`)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/90jf8k.main.a8dbe431.js
  - file: `bundles/preprod.bloxd.io/90jf8k.main.a8dbe431.js` · 3,404,348 bytes (3.25 MB)
  - sha256: `4f16b1ed86af465e9a79e70f1381961fa134f3a47dea15327a4c591b745ffb1b`
  - archived build files: 406 (43.88 MB total, full manifest in `.monitor-state.json`)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/8f728.main.20f3f323.js
  - file: `bundles/staging.bloxd.io/8f728.main.20f3f323.js` · 3,390,776 bytes (3.23 MB)
  - sha256: `99b50c4198d355de5f372b142635e330a41d29493a5328433b932dbc2436b65e`
  - archived build files: 412 (43.98 MB total, full manifest in `.monitor-state.json`)
