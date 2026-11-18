# Readable build diff — 2026-11-18T15:07 JST (9ad456477d01ce4e7883eecb0f575724f962561f)

This report extracts the human-readable portions of the linked commit. Each file is independently collapsible.

- Changed files in commit: 300
- Readable files included: 3
- Generated JavaScript bundle diffs skipped: 296
- Machine-state manifest skipped: 1

JavaScript bundles remain archived in the repository, but their generated identifier/token churn is omitted from this readable report. The full manifest remains available in .monitor-state.json.

GitHub diff highlighting colors additions green and deletions red.

<details>
<summary><code>CHANGES.md</code> · modified · +27 / -31</summary>

```diff
@@ -1,37 +1,33 @@
-Bloxd build update — 2026-11-18T10:47 JST (bloxd.io=symm5.2e035caa, staging.bloxd.io=symm5.2e035caa)
+Bloxd build update — 2026-11-18T15:07 JST (bloxd.io=l9xvfg.c0ace454, staging.bloxd.io=l9xvfg.c0ace454)
 
 Bundle files use stable Webpack paths; original CDN names and hashes remain in .monitor-state.json.
 
-## bloxd.io — 7jvyee.81bfc694 → symm5.2e035caa
-- Files: 418 → 420 (changed 386, added 25, removed 23, unchanged 9)
-- Size: 45.12 MB → 44.11 MB (-1.00 MB)
+## bloxd.io — symm5.2e035caa → l9xvfg.c0ace454
+- Files: 420 → 420 (changed 376, added 0, removed 0, unchanged 44)
+- Size: 44.11 MB → 44.13 MB (+12.59 KB)
 - Largest changes:
-  - chunks/js/279.js +5.41 MB (6b6a4e50 → 3d4c8e34)
-  - chunks/js/277.js -5.12 MB (81dfa648 → 9ab9cac7)
-  - chunks/js/90.js +4.49 MB (3c7d1132 → 8d1bba6b)
-  - chunks/js/86.js -3.85 MB (c67999d1 → 887e5dfa)
-  - chunks/js/185.js +2.49 MB (f368af61 → f6ecc178)
-  - chunks/js/182.js -2.48 MB (bf70a48c → 9a1f1294)
-  - chunks/js/102.js -2.08 MB (f19986e2 → 30248255)
-  - chunks/js/68.js +1.96 MB (ad38b0a2 → 6c242e5b)
-  - chunks/js/189.js -1.33 MB (23086c80 → bc394340)
-  - chunks/js/190.js +1.31 MB (11eceb5a → a407e482)
-- Added: chunks/css/101.css, chunks/css/108.css, chunks/css/113.css, chunks/css/115.css, chunks/css/117.css, chunks/css/196.css, chunks/css/204.css, chunks/css/224.css (+17 more)
-- Removed: chunks/css/107.css, chunks/css/110.css, chunks/css/114.css, chunks/css/116.css, chunks/css/194.css, chunks/css/202.css, chunks/css/222.css, chunks/css/229.css (+15 more)
+  - chunks/js/68.js +40.43 KB (6c242e5b → 0d769821)
+  - chunks/js/76.js -31.96 KB (8640ed3f → b3aca10f)
+  - chunks/js/84.js -14.48 KB (eae443d4 → e69a8d1f)
+  - main.js +10.41 KB (2e035caa → c0ace454)
+  - chunks/js/wasmPlay.js +4.91 KB (3b9bd479 → 2b98b5dd)
+  - chunks/js/207.js +2.54 KB (40caa0a0 → 69b11ce9)
+  - chunks/css/76.css +1010 B (b8533d42 → cafeedaf)
+  - chunks/js/223.js -671 B (1a7c563a → 18df1fc3)
+  - chunks/js/81.js -241 B (0c15d62c → 2c301b4f)
+  - chunks/js/meshWorkerLoader.js +214 B (ca9c239b → 3ae04659)
 
-## staging.bloxd.io — 7jvyee.81bfc694 → symm5.2e035caa
-- Files: 418 → 420 (changed 386, added 25, removed 23, unchanged 9)
-- Size: 45.12 MB → 44.11 MB (-1.00 MB)
+## staging.bloxd.io — symm5.2e035caa → l9xvfg.c0ace454
+- Files: 420 → 420 (changed 376, added 0, removed 0, unchanged 44)
+- Size: 44.11 MB → 44.13 MB (+12.59 KB)
 - Largest changes:
-  - chunks/js/279.js +5.41 MB (6b6a4e50 → 3d4c8e34)
-  - chunks/js/277.js -5.12 MB (81dfa648 → 9ab9cac7)
-  - chunks/js/90.js +4.49 MB (3c7d1132 → 8d1bba6b)
-  - chunks/js/86.js -3.85 MB (c67999d1 → 887e5dfa)
-  - chunks/js/185.js +2.49 MB (f368af61 → f6ecc178)
-  - chunks/js/182.js -2.48 MB (bf70a48c → 9a1f1294)
-  - chunks/js/102.js -2.08 MB (f19986e2 → 30248255)
-  - chunks/js/68.js +1.96 MB (ad38b0a2 → 6c242e5b)
-  - chunks/js/189.js -1.33 MB (23086c80 → bc394340)
-  - chunks/js/190.js +1.31 MB (11eceb5a → a407e482)
-- Added: chunks/css/101.css, chunks/css/108.css, chunks/css/113.css, chunks/css/115.css, chunks/css/117.css, chunks/css/196.css, chunks/css/204.css, chunks/css/224.css (+17 more)
-- Removed: chunks/css/107.css, chunks/css/110.css, chunks/css/114.css, chunks/css/116.css, chunks/css/194.css, chunks/css/202.css, chunks/css/222.css, chunks/css/229.css (+15 more)
+  - chunks/js/68.js +40.43 KB (6c242e5b → 0d769821)
+  - chunks/js/76.js -31.96 KB (8640ed3f → b3aca10f)
+  - chunks/js/84.js -14.48 KB (eae443d4 → e69a8d1f)
+  - main.js +10.41 KB (2e035caa → c0ace454)
+  - chunks/js/wasmPlay.js +4.91 KB (3b9bd479 → 2b98b5dd)
+  - chunks/js/207.js +2.54 KB (40caa0a0 → 69b11ce9)
+  - chunks/css/76.css +1010 B (b8533d42 → cafeedaf)
+  - chunks/js/223.js -671 B (1a7c563a → 18df1fc3)
+  - chunks/js/81.js -241 B (0c15d62c → 2c301b4f)
+  - chunks/js/meshWorkerLoader.js +214 B (ca9c239b → 3ae04659)
```
</details>

<details>
<summary><code>README.md</code> · modified · +11 / -11</summary>

```diff
@@ -7,21 +7,21 @@ This keeps each Webpack chunk on the same Git path across builds, so GitHub show
 
 | Environment | Checked at (JST) | Build | Main bundle |
 |---|---|---|---|
-| bloxd.io | 2026-11-18T10:47:30+09:00 | symm5.2e035caa | `bundles/bloxd.io/main.js` · 2.59 MB · `38045d20ffe0…` |
-| preprod.bloxd.io | 2026-11-18T10:47:58+09:00 | 7jvyee.81bfc694 | `bundles/preprod.bloxd.io/main.js` · 3.56 MB · `8454b8fd7bf1…` |
-| staging.bloxd.io | 2026-11-18T10:47:58+09:00 | symm5.2e035caa | `bundles/staging.bloxd.io/main.js` · 2.59 MB · `38045d20ffe0…` |
+| bloxd.io | 2026-11-18T15:07:09+09:00 | l9xvfg.c0ace454 | `bundles/bloxd.io/main.js` · 2.60 MB · `3f5cac8f743b…` |
+| preprod.bloxd.io | 2026-11-18T15:07:55+09:00 | 7jvyee.81bfc694 | `bundles/preprod.bloxd.io/main.js` · 3.56 MB · `8454b8fd7bf1…` |
+| staging.bloxd.io | 2026-11-18T15:07:55+09:00 | l9xvfg.c0ace454 | `bundles/staging.bloxd.io/main.js` · 2.60 MB · `3f5cac8f743b…` |
 
 ## Main bundle details
 
-- **bloxd.io** — source: https://bloxd.io/static/js/symm5.main.2e035caa.js
-  - file: `bundles/bloxd.io/main.js` · 2,714,263 bytes (2.59 MB)
-  - sha256: `38045d20ffe0309e7a230368a9707daf46437221845838603893a755d3097ecd`
-  - archived build files: 420 (44.11 MB total, full manifest in `.monitor-state.json`)
+- **bloxd.io** — source: https://bloxd.io/static/js/l9xvfg.main.c0ace454.js
+  - file: `bundles/bloxd.io/main.js` · 2,724,925 bytes (2.60 MB)
+  - sha256: `3f5cac8f743ba7e752cd932fdbb9fc1e045b27c5debfc335a576a4c0e06769e6`
+  - archived build files: 420 (44.13 MB total, full manifest in `.monitor-state.json`)
 - **preprod.bloxd.io** — source: https://preprod.bloxd.io/static/js/7jvyee.main.81bfc694.js
   - file: `bundles/preprod.bloxd.io/main.js` · 3,734,144 bytes (3.56 MB)
   - sha256: `8454b8fd7bf1c5d8bf55505cb9db4faeccd778b6e14749a8df085562e6ac56e7`
   - archived build files: 418 (45.12 MB total, full manifest in `.monitor-state.json`)
-- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/symm5.main.2e035caa.js
-  - file: `bundles/staging.bloxd.io/main.js` · 2,714,263 bytes (2.59 MB)
-  - sha256: `38045d20ffe0309e7a230368a9707daf46437221845838603893a755d3097ecd`
-  - archived build files: 420 (44.11 MB total, full manifest in `.monitor-state.json`)
+- **staging.bloxd.io** — source: https://staging.bloxd.io/static/js/l9xvfg.main.c0ace454.js
+  - file: `bundles/staging.bloxd.io/main.js` · 2,724,925 bytes (2.60 MB)
+  - sha256: `3f5cac8f743ba7e752cd932fdbb9fc1e045b27c5debfc335a576a4c0e06769e6`
+  - archived build files: 420 (44.13 MB total, full manifest in `.monitor-state.json`)
```
</details>

<details>
<summary><code>bundles/bloxd.io/chunks/css/76.css</code> · modified · +18 / -20</summary>

```diff
@@ -4733,13 +4733,12 @@ html:not(.TouchHotbarHasShop) .HotBarContainer.Touch .HotBarArrow.Previous {
   visibility: hidden
 }
 
-.InGameUi.HiddenByCamera :has([data-camera-keeper])>:not([data-camera-keeper], :has, .CameraFadeHost),
-.InGameUi.HiddenByCamera>:not([data-camera-keeper], :has, .CameraFadeHost) {
-  visibility: hidden
-}
-
-.InGameUi.HiddenByCamera :has([data-camera-keeper])>:not([data-camera-keeper], :has, .CameraFadeHost) *,
-.InGameUi.HiddenByCamera>:not([data-camera-keeper], :has, .CameraFadeHost) * {
+.InGameUi.HiddenByCamera [data-camera-keeper-host]>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost),
+.InGameUi.HiddenByCamera [data-camera-keeper-host]>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost) *,
+.InGameUi.HiddenByCamera [data-holds-camera-keeper]>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost),
+.InGameUi.HiddenByCamera [data-holds-camera-keeper]>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost) *,
+.InGameUi.HiddenByCamera>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost),
+.InGameUi.HiddenByCamera>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost) * {
   visibility: hidden
 }
 
@@ -4751,37 +4750,36 @@ html:not(.TouchHotbarHasShop) .HotBarContainer.Touch .HotBarArrow.Previous {
   z-index: 15
 }
 
-.InGameUi:has(>.CameraFadeHost[data-camera-fade]) {
+.InGameUi[data-camera-fade][data-camera-fade] {
   z-index: 4
 }
 
-.InGameUi:has(>.CameraFadeHost[data-camera-fade]) .TopLeftElements {
+.InGameUi[data-camera-fade][data-camera-fade] .TopLeftElements {
   z-index: auto
 }
 
-.InGameUi:has(>.CameraFadeHost[data-camera-fade]) [data-camera-keeper-host],
-.InGameUi:has(>.CameraFadeHost[data-camera-fade]) [data-camera-keeper] {
+.InGameUi[data-camera-fade][data-camera-fade] [data-camera-keeper-host],
+.InGameUi[data-camera-fade][data-camera-fade] [data-camera-keeper] {
   z-index: 16
 }
 
-.InGameUi:has(>.CameraFadeHost[data-camera-fade]) .QTE {
+.InGameUi[data-camera-fade][data-camera-fade] .QTE {
   position: relative
 }
 
-.InGameUi:has(>.CameraFadeHost[data-camera-fade]) [data-camera-keeper-host] :has([data-camera-keeper])>:not([data-camera-keeper], :has, .CameraFadeHost),
-.InGameUi:has(>.CameraFadeHost[data-camera-fade]) [data-camera-keeper-host]>:not([data-camera-keeper], :has, .CameraFadeHost) {
+.InGameUi[data-camera-fade][data-camera-fade] [data-camera-keeper-host] [data-camera-keeper-host]>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost),
+.InGameUi[data-camera-fade][data-camera-fade] [data-camera-keeper-host] [data-holds-camera-keeper]>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost),
+.InGameUi[data-camera-fade][data-camera-fade] [data-camera-keeper-host]>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost) {
   opacity: calc(1 - var(--camera-fade-alpha, 0))
 }
 
-.InGameUi:has(>.CameraFadeHost[data-camera-fade]) .TopRightElementsLeft>.NotificationToasts {
+.InGameUi[data-camera-fade][data-camera-fade] .TopRightElementsLeft>.NotificationToasts {
   transition: none
 }
 
-.InGameUi:has(>.CameraFadeHost[data-camera-fade=covered]) [data-camera-keeper-host] :has([data-camera-keeper])>:not([data-camera-keeper], :has, .CameraFadeHost),
-.InGameUi:has(>.CameraFadeHost[data-camera-fade=covered]) [data-camera-keeper-host]>:not([data-camera-keeper], :has, .CameraFadeHost) {
-  visibility: hidden
-}
-
+.InGameUi[data-camera-fade=covered][data-camera-fade] [data-camera-keeper-host] [data-camera-keeper-host]>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost),
+.InGameUi[data-camera-fade=covered][data-camera-fade] [data-camera-keeper-host] [data-holds-camera-keeper]>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost),
+.InGameUi[data-camera-fade=covered][data-camera-fade] [data-camera-keeper-host]>:not([data-camera-keeper], [data-holds-camera-keeper], [data-camera-keeper-host], .CameraFadeHost),
 .InGameUi[data-replay-ui-active][data-replay-hide-aura-bar] .AuraBarWrapper,
 .InGameUi[data-replay-ui-active][data-replay-hide-crosshair] .Crosshair,
 .InGameUi[data-replay-ui-active][data-replay-hide-crosshair] .GunCrosshairOverlayWrapper,
```
</details>
