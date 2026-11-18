# Bloxd Build Monitor

Latest Bloxd build per environment, detected by the external Cloudflare Worker in `cloudflare/` (one poll per minute). GitHub Actions is dispatched only when a bundle changes; its built-in schedule is a six-hour fallback.
Every bundle is beautified and archived under stable logical paths: main.js, main.css, chunks/js/<chunk-id-or-name>.js, and matching CSS paths. Original CDN file names, URLs, and hashes are retained in .monitor-state.json.
This keeps each Webpack chunk on the same Git path across builds, so GitHub shows a normal file modification instead of delete/add. The last 5 build snapshots are kept for diff browsing; older snapshots are squashed into a rolling baseline.
`CHANGES.md` summarizes each build change without minification noise.

| Environment | Checked at (JST) | Build | Main bundle |
|---|---|---|---|
| bloxd.io | 2026-11-18T10:47:30+09:00 | symm5.2e035caa | `bundles/bloxd.io/main.js` · 2.59 MB · `38045d20ffe0…` |
| preprod.bloxd.io | 2026-11-18T10:47:58+09:00 | 7jvyee.81bfc694 | `bundles/preprod.bloxd.io/main.js` · 3.56 MB · `8454b8fd7bf1…` |
| staging.bloxd.io | 2026-11-18T10:47:58+09:00 | symm5.2e035caa | `bundles/staging.bloxd.io/main.js` · 2.59 MB · `38045d20ffe0…` |

## Main bundle details

- **bloxd.io** — source: https://bloxd.io/static/js/symm5.main.2e035caa.js
  - file: `bundles/bloxd.io/main.js` · 2,714,263 bytes (2.59 MB)
  - sha256: `38045d20ffe0309e7a230368a9707daf46437221845838603893a755d3097ecd`
  - archived build files: 420 (44.11 MB total, full manifest in `.monitor-state.json`)
- **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/7jvyee.main.81bfc694.js
  - file: `bundles/preprod.bloxd.io/main.js` · 3,734,144 bytes (3.56 MB)
  - sha256: `8454b8fd7bf1c5d8bf55505cb9db4faeccd778b6e14749a8df085562e6ac56e7`
  - archived build files: 418 (45.12 MB total, full manifest in `.monitor-state.json`)
- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/symm5.main.2e035caa.js
  - file: `bundles/staging.bloxd.io/main.js` · 2,714,263 bytes (2.59 MB)
  - sha256: `38045d20ffe0309e7a230368a9707daf46437221845838603893a755d3097ecd`
  - archived build files: 420 (44.11 MB total, full manifest in `.monitor-state.json`)
