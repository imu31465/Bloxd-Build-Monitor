# CSS 76 — historical build diff

- Base: e7e20713782fba2472c7866f1ac5b84e503e7647
- Build: 9ad456477d01ce4e7883eecb0f575724f962561f
- Hunks: 2

This focused page contains only the requested file. Expand each hunk independently.

<details>
<summary><code>bundles/bloxd.io/chunks/css/76.css</code> · modified · +18 / -20</summary>

<details>
<summary>Hunk 1 · Change · +6 / -7</summary>

```diff
@@ -4733,13 +4733,12 @@
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
 
```

</details>

<details>
<summary>Hunk 2 · Change · +12 / -13</summary>

```diff
@@ -4751,37 +4750,36 @@
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

</details>
