# Changed — Bundle Modifications Report (Part 001 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `1 / 126` (**414** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [Part 002 →](part-002.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/css/101.css` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/css/101.css` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309)

#### 1. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L6239` → after: `L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/101.css#L6224) · [Before (L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/101.css#L6239)

```diff
-   max-height: var(--chat-height);
+   max-height: min(var(--chat-max-height), max(5rem, var(--custom-buttons-top, 100vh) - calc(var(--InGameHeaderRowsHeight, 2.5rem) + .25rem) - var(--chat-space-below)), var(--keyboard-top, 100vh) - calc(var(--InGameHeaderRowsHeight, 2.5rem) + .25rem) - var(--chat-space-below));
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/230.css` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/css/230.css` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1c734d29abbf13d26d1f377bcdd9622d67624d3f2e93f88fff98c24bec32dfb7)

#### 1. `bundles/bloxd.io/chunks/css/230.css` (Changed code · before: `L1-L162` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1c734d29abbf13d26d1f377bcdd9622d67624d3f2e93f88fff98c24bec32dfb7R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1c734d29abbf13d26d1f377bcdd9622d67624d3f2e93f88fff98c24bec32dfb7) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/230.css#L1) · [Before (L1-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/230.css#L1-L162)

```diff
- @keyframes rainbowShimmer {
-   0% {
-     transform: translateX(0)
-   }
- 
-   to {
-     transform: translateX(88.88889%)
-   }
- }
- 
- @keyframes rainbowShimmerPosition {
-   to {
-     background-position: -200% 0
-   }
- }
- 
- ... (146 more removed lines; see GitHub link above)
+ .MobPreview {
```

#### 2. `bundles/bloxd.io/chunks/css/230.css` (Changed code · before: `L166-L183` → after: `L5-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1c734d29abbf13d26d1f377bcdd9622d67624d3f2e93f88fff98c24bec32dfb7R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1c734d29abbf13d26d1f377bcdd9622d67624d3f2e93f88fff98c24bec32dfb7) · [After (L5-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/230.css#L5-L8) · [Before (L166-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/230.css#L166-L183)

```diff
- .NewPlayerDealPacks .NewPlayerDealPack .NewPlayerDealPackArt img {
-   max-height: 100%;
-   max-width: 100%;
-   object-fit: contain
- }
- 
- .NewPlayerDealPacks .NewPlayerDealPack .NewPlayerDealPackArt .NewPlayerDealTag {
-   background-color: #ffb914;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   color: #1a1f2e;
-   font-size: 1rem;
-   font-weight: 900;
-   left: -.6rem;
-   letter-spacing: .02em;
- ... (2 more removed lines; see GitHub link above)
+ .MobPreview .MobPreviewCanvas {
+   height: 100%;
+   inset: 0;
+   outline: none;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/248.css` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/css/248.css` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938)

#### 1. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L1-L8355` → after: `L1-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L1-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L1-L5) · [Before (L1-L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L1-L8355)

```diff
- .SkyblockMapIconSlot {
-   display: contents
- }
- 
- .SkyblockMapIcon {
-   -ms-interpolation-mode: nearest-neighbor;
-   display: block;
-   height: 1.25rem;
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast;
-   pointer-events: none;
-   width: 1.25rem
- }
- 
- ... (8339 more removed lines; see GitHub link above)
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicListWindow {
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   min-height: 0
```

#### 2. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8358-L8359` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L8) · [Before (L8358-L8359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8358-L8359)

```diff
- .SkyblockTideChartGrid {
-   aspect-ratio: 1;
+ .SchematicList {
```

#### 3. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8361-L8377` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L10-L13) · [Before (L8361-L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8361-L8377)

```diff
-   display: grid;
-   grid-template-columns: repeat(5, minmax(0, 1fr));
-   grid-template-rows: repeat(5, minmax(0, 1fr))
- }
- 
- .SkyblockTideChartGrid.Mini {
-   flex: none;
-   gap: 1px;
-   height: 100%
- }
- 
- .SkyblockTideChartGrid.Large {
-   background: rgba(24, 19, 52, .9);
-   border: 2px solid rgba(195, 125, 255, .5);
-   border-radius: 0;
-   gap: .25rem;
- ... (1 more removed lines; see GitHub link above)
+   display: flex;
+   flex-wrap: wrap;
+   justify-content: flex-start;
+   row-gap: .5rem;
```

#### 4. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8381-L8463` → after: `L17-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L17-L20) · [Before (L8381-L8463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8381-L8463)

```diff
- .SkyblockTideChartGrid.Complete .Cell-lit {
-   background: linear-gradient(135deg, #96ffeb, #e4b9ff);
-   box-shadow: inset 0 0 0 1px rgba(236, 232, 255, .6), 0 0 .35rem #3ce1c3, 0 0 .7rem rgba(195, 125, 255, .8)
- }
- 
- .SkyblockTideChartCell {
-   box-sizing: border-box;
-   display: block;
-   position: relative
- }
- 
- .SkyblockTideChartCell.Cell-shore {
-   background: #100d22
- }
- 
- .SkyblockTideChartCell.Cell-water {
- ... (67 more removed lines; see GitHub link above)
+ .SchematicList .NoSchematicsText {
+   color: #cfcfcf;
+   font-size: 1rem;
+   margin: 2rem
```

#### 5. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8565-L8573` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L122-L123) · [Before (L8565-L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8565-L8573)

```diff
- .SkyblockTideChartsChip {
-   align-items: center;
-   background: rgba(42, 31, 92, .92);
-   border: 1px solid rgba(195, 125, 255, .55);
-   border-radius: 0;
-   box-shadow: 0 0 .5rem rgba(195, 125, 255, .4);
-   box-sizing: border-box;
-   color: #ece8ff;
-   cursor: pointer;
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer {
+   align-items: stretch;
```

#### 6. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8575-L8620` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L125) · [Before (L8575-L8620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8575-L8620)

```diff
-   flex: none;
-   gap: .35rem;
-   height: 2.5rem;
-   padding: .15rem .4rem .15rem .15rem;
-   pointer-events: auto;
-   position: relative
- }
- 
- .SkyblockTideChartsChip:before {
-   content: "";
-   inset: max(-6px, min(0px, 100% - 32px)) 0 0 0;
-   position: absolute
- }
- 
- @media(hover:hover) {
-   .SkyblockTideChartsChip:hover {
- ... (30 more removed lines; see GitHub link above)
+   flex-direction: column
```

#### 7. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8623` → after: `L128-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L128-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L128-L134) · [Before (L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8623)

```diff
- .SkyblockTideChartsPanel {
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload {
+   align-items: center;
+   border: 3px solid #303a59;
+   border-radius: 0;
+   border-bottom-left-radius: 0;
+   border-bottom-right-radius: 0;
+   box-sizing: border-box;
```

#### 8. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8642` → after: `L138-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L138-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L138-L140) · [Before (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8642)

```diff
-   padding: .9rem 1.2rem .3rem
+   height: 10rem;
+   justify-content: center;
+   padding: 2rem 1rem
```

#### 9. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8645-L8647` → after: `L143-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L143-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L143-L147) · [Before (L8645-L8647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8645-L8647)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsHeader>div {
-   flex: 1 1;
-   min-width: 0
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadIcon {
+   font-size: 3rem;
+   opacity: .4;
+   text-shadow: 0 0 0 #000;
+   transition: color .2s, opacity .3s
```

#### 10. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8650-L8654` → after: `L150-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L150-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L150-L152) · [Before (L8650-L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8650-L8654)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsHeader h2 {
-   color: #c37dff;
-   font-size: 1.7rem;
-   margin: 0;
-   text-shadow: 0 0 .6rem rgba(195, 125, 255, .7)
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadIcon.Active {
+   color: #4f94f1;
+   opacity: 1
```

#### 11. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8657-L8658` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L155-L156) · [Before (L8657-L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8657-L8658)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsHeader .ExitButton {
-   flex: none
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadIcon.Active.TooBig {
+   color: #ff8a80
```

#### 12. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8661-L8665` → after: `L159-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L159-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L159-L161) · [Before (L8661-L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8661-L8665)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsIntro {
-   color: #cfcfcf;
-   font-size: 1.05rem;
-   font-style: italic;
-   margin: .1rem 0 0
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadIcon.Complete {
+   color: #1dd06d;
+   opacity: 1
```

#### 13. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8668-L8672` → after: `L164-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L164-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L164-L168) · [Before (L8668-L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8668-L8672)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsTabs {
-   display: flex;
-   flex-wrap: wrap;
-   gap: .4rem;
-   padding: .2rem 1.2rem .4rem
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadInstructions {
+   font-size: 1.2rem;
+   opacity: .4;
+   text-shadow: 0 0 0 #000;
+   transition: opacity .2s, color .3s
```

#### 14. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8675-L8683` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L171-L172) · [Before (L8675-L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8675-L8683)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsTab {
-   background: rgba(34, 40, 59, .85);
-   border: 2px solid rgba(195, 125, 255, .4);
-   border-radius: 0;
-   color: #ece8ff;
-   cursor: pointer;
-   font-size: 1rem;
-   min-height: 32px;
-   padding: .25rem .7rem
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadInstructions.Active {
+   opacity: 1
```

#### 15. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8686-L8689` → after: `L175-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L175-L177) · [Before (L8686-L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8686-L8689)

```diff
- @media(hover:hover) {
-   .SkyblockTideChartsPanel .SkyblockTideChartsTab:hover {
-     border-color: #c37dff
-   }
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadInstructions.Complete {
+   color: #1dd06d;
+   opacity: 1
```

#### 16. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8692-L8693` → after: `L180-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L180-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L180-L182) · [Before (L8692-L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8692-L8693)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsTab.pad-focused {
-   border-color: #c37dff
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload.ActiveDrag .SchematicUploadIcon,
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload.ActiveDrag .SchematicUploadInstructions {
+   opacity: 1
```

#### 17. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8696-L8699` → after: `L185-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L185-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L185-L188) · [Before (L8696-L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8696-L8699)

```diff
- @media(hover:none) {
-   .SkyblockTideChartsPanel .SkyblockTideChartsTab:active {
-     border-color: #c37dff
-   }
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUploadButton {
+   border-top-left-radius: 0;
+   border-top-right-radius: 0;
+   box-sizing: border-box
```

#### 18. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8702-L8704` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L191-L192) · [Before (L8702-L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8702-L8704)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsTab.Selected {
-   border-color: #3ce1c3;
-   box-shadow: 0 0 .5rem rgba(60, 225, 195, .6)
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUploadButton .ButtonBody {
+   padding: 1rem
```

#### 19. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8707-L8708` → after: `L195-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L195-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L195-L200) · [Before (L8707-L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8707-L8708)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsTab:focus-visible {
-   outline: 2px solid #ece8ff
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .OtherOptions {
+   align-items: center;
+   display: flex;
+   gap: 1rem;
+   justify-content: space-between;
+   width: 100%
```

#### 20. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8711-L8718` → after: `L203-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L203-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L203-L208) · [Before (L8711-L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8711-L8718)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsBody {
-   grid-gap: 1.2rem;
-   display: grid;
-   gap: 1.2rem;
-   grid-template-columns: minmax(0, 17rem) minmax(0, 1fr);
-   min-height: 0;
-   overflow-y: auto;
-   padding: .4rem 1.2rem 1rem
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .OtherOptions .NewButton {
+   align-items: center;
+   display: flex;
+   flex-grow: 1;
+   font-size: 1.5rem;
+   justify-content: center
```

#### 21. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8721-L8722` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L211-L212) · [Before (L8721-L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8721-L8722)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsMap {
-   width: min(17rem, 52dvh)
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .OtherOptions .NewButton .ButtonBody {
+   padding: .8rem
```

#### 22. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8725-L8729` → after: `L215-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L215-L216) · [Before (L8725-L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8725-L8729)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsInfo {
-   display: flex;
-   flex-direction: column;
-   gap: .45rem;
-   min-width: 0
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow {
+   width: 100%
```

#### 23. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8732-L8733` → after: `L219-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L219-L221) · [Before (L8732-L8733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8732-L8733)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsInfo h3 {
-   color: #ece8ff;
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicName {
+   box-shadow: none;
+   box-sizing: border-box;
```

#### 24. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8735-L8739` → after: `L223-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L223-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L223-L227) · [Before (L8735-L8739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8735-L8739)

```diff
-   margin: 0
- }
- 
- .SkyblockTideChartsPanel .SkyblockTideChartsInfo p {
-   margin: 0
+   height: 3rem;
+   margin-top: .5rem;
+   padding: .5rem;
+   text-align: left;
+   width: 100%
```

#### 25. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8742-L8745` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L230-L231) · [Before (L8742-L8745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8742-L8745)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsLit {
-   color: #3ce1c3;
-   font-size: 1.3rem;
-   text-shadow: 0 0 .4rem rgba(60, 225, 195, .6)
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicName.Error {
+   border: 2px solid #e34f4f
```

#### 26. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8748-L8750` → after: `L234-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L234-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L234-L243) · [Before (L8748-L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8748-L8750)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsPicture {
-   color: #cfcfcf;
-   font-size: 1.15rem
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicDescription {
+   box-shadow: none;
+   box-sizing: border-box;
+   font-size: 1.5rem;
+   height: 7rem;
+   margin-top: .5rem;
+   padding: .5rem;
+   resize: none;
+   text-align: left;
+   width: 100%
```

#### 27. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8753-L8758` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L246-L247) · [Before (L8753-L8758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8753-L8758)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsPicture.Revealed {
-   animation: SkyblockTideChartReveal 1.2s ease-out both;
-   color: #ece8ff;
-   font-size: 1.4rem;
-   font-weight: 700;
-   text-shadow: 0 0 .5rem #3ce1c3, 0 0 1rem #c37dff
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicDescription.Hidden {
+   display: none
```

#### 28. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8761-L8764` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L250-L251) · [Before (L8761-L8764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8761-L8764)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsLegend {
-   color: #cfcfcf;
-   display: flex;
-   flex-wrap: wrap;
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicError {
+   color: #ff8a80;
```

#### 29. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8766-L8769` → after: `L253-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L253-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L253-L256) · [Before (L8766-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8766-L8769)

```diff
-   gap: .3rem .9rem;
-   list-style: none;
-   margin: 0;
-   padding: 0
+   font-weight: 700;
+   height: 1rem;
+   margin-top: .1rem;
+   text-shadow: none
```

#### 30. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8772` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L259) · [Before (L8772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8772)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsLegend li {
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicCheckboxContainer {
```

#### 31. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8775` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L262-L263) · [Before (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8775)

```diff
-   gap: .35rem
+   margin-left: 1px;
+   margin-top: 1.5rem
```

#### 32. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8778-L8780` → after: `L266-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L266-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L266-L269) · [Before (L8778-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8778-L8780)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsLegend .SkyblockTideChartCell {
-   height: 1rem;
-   width: 1rem
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicCheckboxContainer .SchematicPopupSubtitle {
+   font-size: 1.35rem;
+   margin-left: 1rem;
+   margin-top: 0
```

#### 33. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8783-L8791` → after: `L272-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L272-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L272-L278) · [Before (L8783-L8791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8783-L8791)

```diff
- .SkyblockTideChartsPanel .SkyblockTideChartsFooter {
-   border-top: 1px solid rgba(195, 125, 255, .3);
-   color: #ece8ff;
-   display: flex;
-   flex-direction: column;
-   font-size: 1.05rem;
-   gap: .15rem;
-   margin-top: auto;
-   padding-top: .5rem
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicCheckboxContainer.WarningBorder {
+   border: 1px solid #ffb914;
+   border-top-left-radius: 0;
+   border-top-right-radius: 0;
+   margin-left: -5px;
+   margin-right: -5px;
+   padding: .5rem
```

#### 34. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8794-L8803` → after: `L281-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L281-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L281-L292) · [Before (L8794-L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8794-L8803)

```diff
- @keyframes SkyblockTideChartReveal {
-   0% {
-     opacity: 0;
-     transform: scale(.85)
-   }
- 
-   to {
-     opacity: 1;
-     transform: none
-   }
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicLobbyCodeWarning {
+   background-color: #ffb914;
+   border: 1px solid #ffb914;
+   border-bottom-left-radius: 0;
+   border-bottom-right-radius: 0;
+   color: #000;
+   font-size: .75rem;
+   font-weight: 700;
+   margin-left: -5px;
+   margin-right: -5px;
+   padding: .5rem 0 .5rem .5rem;
+   text-shadow: none
```

#### 35. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8806-L8809` → after: `L295-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L295-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L295-L301) · [Before (L8806-L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8806-L8809)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .SkyblockTideChartsPicture.Revealed {
-     animation-duration: 1ms !important
-   }
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicButtons {
+   align-items: center;
+   display: flex;
+   gap: 1rem;
+   justify-content: space-between;
+   margin-top: 3rem;
+   width: 100%
```

#### 36. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8812-L8815` → after: `L304-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L304-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L304-L309) · [Before (L8812-L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8812-L8815)

```diff
- @media(max-width:480px) {
-   .SkyblockTideChartsPanel .SkyblockTideChartsBody {
-     grid-template-columns: minmax(0, 1fr)
-   }
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicButtons .NewButton {
+   align-items: center;
+   display: flex;
+   flex-grow: 1;
+   font-size: 1.5rem;
+   justify-content: center
```

#### 37. `bundles/bloxd.io/chunks/css/248.css` (Changed code · before: `L8818-L8844` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f70f0aeb811c8b3cd34bd5562e8807e92a535976cca6a6bbd94215767aa3938) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/248.css#L312-L313) · [Before (L8818-L8844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/248.css#L8818-L8844)

```diff
- @media(max-height:650px), (max-width:1000px) {
-   .SkyblockTideChartsChip {
-     height: 3.5rem;
-     justify-content: center;
-     margin: -1rem -.25rem 0;
-     padding: .15rem;
-     width: 3rem
-   }
- 
-   .SkyblockTideChartsChip:before {
-     inset: -1.5rem -.375rem 0
-   }
- 
-   .SkyblockTideChartsChip:after {
-     content: "";
-     inset: -1.5rem -.625rem 100%;
- ... (11 more removed lines; see GitHub link above)
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicButtons .NewButton .ButtonBody {
+   padding: .8rem
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/249.css` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/css/249.css` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f)

#### 1. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L100` → after: `L8565-L8573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8565-L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8565-L8573) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L100)

```diff
- .CustomGamePlaceContainer {
+ .SkyblockTideChartsChip {
+   align-items: center;
+   background: rgba(42, 31, 92, .92);
+   border: 1px solid rgba(195, 125, 255, .55);
+   border-radius: 0;
+   box-shadow: 0 0 .5rem rgba(195, 125, 255, .4);
+   box-sizing: border-box;
+   color: #ece8ff;
+   cursor: pointer;
```

#### 2. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L102-L106` → after: `L8575-L8580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8575-L8580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8575-L8580) · [Before (L102-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L102-L106)

```diff
-   flex-direction: column;
-   gap: .5rem;
-   padding-bottom: 1rem;
-   width: 100%;
-   z-index: 1
+   flex: none;
+   gap: .35rem;
+   height: 2.5rem;
+   padding: .15rem .4rem .15rem .15rem;
+   pointer-events: auto;
+   position: relative
```

#### 3. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L109-L122` → after: `L8583-L8586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8583-L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8583-L8586) · [Before (L109-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L109-L122)

```diff
- .CustomGamePlaceContainer .BackgroundImage {
-   -ms-interpolation-mode: nearest-neighbor;
-   background-position: 50%;
-   background-repeat: repeat;
-   background-size: 128rem;
-   filter: brightness(.32);
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast;
-   inset: 0;
-   pointer-events: none;
-   position: absolute;
-   z-index: -1
+ .SkyblockTideChartsChip:before {
+   content: "";
+   inset: max(-6px, min(0px, 100% - 32px)) 0 0 0;
+   position: absolute
```

#### 4. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L125-L128` → after: `L8589-L8593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8589-L8593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8589-L8593) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L125-L128)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceHeaderContainer {
-   align-items: center;
-   display: flex;
-   padding: .6rem .75rem
+ @media(hover:hover) {
+   .SkyblockTideChartsChip:hover {
+     background: rgba(56, 41, 123, .95);
+     border-color: #c37dff
+   }
```

#### 5. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L131-L134` → after: `L8596-L8598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8596-L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8596-L8598) · [Before (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L131-L134)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceHeaderContainer .BackButton {
-   font-size: 1.5rem;
-   padding-left: .3rem;
-   position: relative
+ .SkyblockTideChartsChip.pad-focused {
+   background: rgba(56, 41, 123, .95);
+   border-color: #c37dff
```

#### 6. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L137-L141` → after: `L8601-L8604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8601-L8604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8601-L8604) · [Before (L137-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L137-L141)

```diff
- @media(pointer:coarse) {
-   .CustomGamePlaceContainer .CustomGamePlaceHeaderContainer .BackButton:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
+ @media(hover:none) {
+   .SkyblockTideChartsChip:active {
+     background: rgba(56, 41, 123, .95);
+     border-color: #c37dff
```

#### 7. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L145-L147` → after: `L8608-L8623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8608-L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8608-L8623) · [Before (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L145-L147)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic {
-   --custom-game-place-inner-gap: 0.5rem;
-   --custom-game-place-panel-gap: 1rem;
+ .SkyblockTideChartsChip.Complete,
+ .SkyblockTideChartsChip.Open {
+   border-color: #3ce1c3;
+   box-shadow: 0 0 .8rem rgba(60, 225, 195, .7)
+ }
+ 
+ .SkyblockTideChartsChip:focus-visible {
+   outline: 2px solid #ece8ff
+ }
+ 
+ .SkyblockTideChartsChipCount {
+   font-size: 1rem;
+   white-space: nowrap
+ }
+ 
+ .SkyblockTideChartsPanel {
```

#### 8. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L150-L152` → after: `L8626-L8627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8626-L8627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8626-L8627) · [Before (L150-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L150-L152)

```diff
-   gap: var(--custom-game-place-panel-gap);
-   margin-inline: auto;
-   width: 100%
+   overflow: hidden;
+   position: relative
```

#### 9. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L155-L158` → after: `L8630-L8639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8630-L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8630-L8639) · [Before (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L155-L158)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel {
-   align-self: start;
-   background-color: color-mix(in srgb, var(--custom-game-place-tint) 52%, #22283b);
-   border-radius: 0;
+ .SkyblockTideChartsPanel.SkyblockSkillsPanel {
+   background: linear-gradient(180deg, rgba(42, 31, 92, .98), #1a1f2e);
+   border-color: rgba(195, 125, 255, .6);
+   box-shadow: 0 0 1.5rem rgba(195, 125, 255, .35), .2rem .25rem 0 rgba(0, 0, 0, .32);
+   max-height: 92dvh;
+   width: min(46rem, 94vw)
+ }
+ 
+ .SkyblockTideChartsPanel .SkyblockTideChartsHeader {
+   align-items: flex-start;
```

#### 10. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L160-L164` → after: `L8641-L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8641-L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8641-L8642) · [Before (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L160-L164)

```diff
-   flex-direction: column;
-   gap: .5rem;
-   min-width: 0;
-   outline: 1px solid color-mix(in srgb, var(--custom-game-place-tint) 85%, transparent);
-   padding: .5rem
+   gap: 1rem;
+   padding: .9rem 1.2rem .3rem
```

#### 11. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L167-L169` → after: `L8645-L8647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8645-L8647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8645-L8647) · [Before (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L167-L169)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelHeading {
-   font-size: inherit;
-   margin: 0
+ .SkyblockTideChartsPanel .SkyblockTideChartsHeader>div {
+   flex: 1 1;
+   min-width: 0
```

#### 12. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L172-L175` → after: `L8650-L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8650-L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8650-L8654) · [Before (L172-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L172-L175)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelTitle {
-   cursor: pointer;
-   gap: .25rem;
-   transition: gap .2s
+ .SkyblockTideChartsPanel .SkyblockTideChartsHeader h2 {
+   color: #c37dff;
+   font-size: 1.7rem;
+   margin: 0;
+   text-shadow: 0 0 .6rem rgba(195, 125, 255, .7)
```

#### 13. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L178-L181` → after: `L8657-L8683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8657-L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8657-L8683) · [Before (L178-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L178-L181)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelTitle .svg-inline--fa {
-   color: #ffb914;
-   flex-shrink: 0;
-   transform: rotate(90deg)
+ .SkyblockTideChartsPanel .SkyblockTideChartsHeader .ExitButton {
+   flex: none
+ }
+ 
+ .SkyblockTideChartsPanel .SkyblockTideChartsIntro {
+   color: #cfcfcf;
+   font-size: 1.05rem;
+   font-style: italic;
+   margin: .1rem 0 0
+ }
+ 
+ .SkyblockTideChartsPanel .SkyblockTideChartsTabs {
+   display: flex;
+   flex-wrap: wrap;
+   gap: .4rem;
+   padding: .2rem 1.2rem .4rem
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L185-L186` → after: `L8687-L8688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8687-L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8687-L8688) · [Before (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L185-L186)

```diff
-   .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelTitle:hover {
-     gap: .5rem
+   .SkyblockTideChartsPanel .SkyblockTideChartsTab:hover {
+     border-color: #c37dff
```

#### 15. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L190-L191` → after: `L8692-L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8692-L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8692-L8693) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L190-L191)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelTitle.pad-focused {
-   gap: .5rem
+ .SkyblockTideChartsPanel .SkyblockTideChartsTab.pad-focused {
+   border-color: #c37dff
```

#### 16. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L195-L196` → after: `L8697-L8698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8697-L8698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8697-L8698) · [Before (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L195-L196)

```diff
-   .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelTitle:active {
-     gap: .5rem
+   .SkyblockTideChartsPanel .SkyblockTideChartsTab:active {
+     border-color: #c37dff
```

#### 17. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L200-L207` → after: `L8702-L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8702-L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8702-L8708) · [Before (L200-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L200-L207)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelTitle {
-   align-items: center;
-   display: flex;
-   font-size: 1.1rem;
-   justify-content: center;
-   line-height: 1.2;
-   min-height: 2rem;
-   text-align: center
+ .SkyblockTideChartsPanel .SkyblockTideChartsTab.Selected {
+   border-color: #3ce1c3;
+   box-shadow: 0 0 .5rem rgba(60, 225, 195, .6)
+ }
+ 
+ .SkyblockTideChartsPanel .SkyblockTideChartsTab:focus-visible {
+   outline: 2px solid #ece8ff
```

#### 18. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L210-L212` → after: `L8711-L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8711-L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8711-L8712) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L210-L212)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelGames {
-   grid-gap: var(--custom-game-place-inner-gap);
-   align-content: start;
+ .SkyblockTideChartsPanel .SkyblockTideChartsBody {
+   grid-gap: 1.2rem;
```

#### 19. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L214` → after: `L8714-L8718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8714-L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8714-L8718) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L214)

```diff
-   gap: var(--custom-game-place-inner-gap)
+   gap: 1.2rem;
+   grid-template-columns: minmax(0, 17rem) minmax(0, 1fr);
+   min-height: 0;
+   overflow-y: auto;
+   padding: .4rem 1.2rem 1rem
```

#### 20. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L217-L219` → after: `L8721-L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8721-L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8721-L8722) · [Before (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L217-L219)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelGames .GameCardContainer,
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelGames .GameThumbnailPlaceholderContainer {
-   padding: 0
+ .SkyblockTideChartsPanel .SkyblockTideChartsMap {
+   width: min(17rem, 52dvh)
```

#### 21. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L222-L225` → after: `L8725-L8729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8725-L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8725-L8729) · [Before (L222-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L222-L225)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic.CustomGamePlaceMosaicLandscape {
-   container-type: inline-size;
-   --custom-game-place-tile-width: calc(100cqw/7 - 1rem);
-   width: min(100%, (100dvh - 24.25rem)*2.1 + 7rem)
+ .SkyblockTideChartsPanel .SkyblockTideChartsInfo {
+   display: flex;
+   flex-direction: column;
+   gap: .45rem;
+   min-width: 0
```

#### 22. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L228-L230` → after: `L8732-L8762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8732-L8762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8732-L8762) · [Before (L228-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L228-L230)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic.CustomGamePlaceMosaicLandscape .CustomGamePlaceRow,
- .CustomGamePlaceContainer .CustomGamePlaceMosaic.CustomGamePlaceMosaicLandscape .CustomGamePlaceUpper {
-   align-items: flex-start;
+ .SkyblockTideChartsPanel .SkyblockTideChartsInfo h3 {
+   color: #ece8ff;
+   font-size: 1.5rem;
+   margin: 0
+ }
+ 
+ .SkyblockTideChartsPanel .SkyblockTideChartsInfo p {
+   margin: 0
+ }
+ 
+ .SkyblockTideChartsPanel .SkyblockTideChartsLit {
+   color: #3ce1c3;
+   font-size: 1.3rem;
+   text-shadow: 0 0 .4rem rgba(60, 225, 195, .6)
+ }
+ 
+ ... (15 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L232` → after: `L8764-L8769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8764-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8764-L8769) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L232)

```diff
-   gap: var(--custom-game-place-panel-gap)
+   flex-wrap: wrap;
+   font-size: 1rem;
+   gap: .3rem .9rem;
+   list-style: none;
+   margin: 0;
+   padding: 0
```

#### 24. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L235-L236` → after: `L8772-L8785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8772-L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8772-L8785) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L235-L236)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic.CustomGamePlaceMosaicLandscape .CustomGamePlaceMain {
-   align-items: flex-start;
+ .SkyblockTideChartsPanel .SkyblockTideChartsLegend li {
+   align-items: center;
+   display: flex;
+   gap: .35rem
+ }
+ 
+ .SkyblockTideChartsPanel .SkyblockTideChartsLegend .SkyblockTideChartCell {
+   height: 1rem;
+   width: 1rem
+ }
+ 
+ .SkyblockTideChartsPanel .SkyblockTideChartsFooter {
+   border-top: 1px solid rgba(195, 125, 255, .3);
+   color: #ece8ff;
```

#### 25. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L239` → after: `L8788-L8791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8788-L8791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8788-L8791) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L239)

```diff
-   gap: var(--custom-game-place-panel-gap)
+   font-size: 1.05rem;
+   gap: .15rem;
+   margin-top: auto;
+   padding-top: .5rem
```

#### 26. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L242-L243` → after: `L8794-L8803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8794-L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8794-L8803) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L242-L243)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic.CustomGamePlaceMosaicLandscape .CustomGamePlacePanel {
-   flex-shrink: 0
+ @keyframes SkyblockTideChartReveal {
+   0% {
+     opacity: 0;
+     transform: scale(.85)
+   }
+ 
+   to {
+     opacity: 1;
+     transform: none
+   }
```

#### 27. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L246-L250` → after: `L8806-L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8806-L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8806-L8815) · [Before (L246-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L246-L250)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic.CustomGamePlaceMosaicLandscape .CustomGamePlacePanel .CustomGamePlacePanelTitle {
-   height: 2rem;
-   max-width: 100%;
-   overflow: hidden;
-   width: 100%
+ @media(prefers-reduced-motion:reduce) {
+   .SkyblockTideChartsPicture.Revealed {
+     animation-duration: 1ms !important
+   }
+ }
+ 
+ @media(max-width:480px) {
+   .SkyblockTideChartsPanel .SkyblockTideChartsBody {
+     grid-template-columns: minmax(0, 1fr)
+   }
```

#### 28. `bundles/bloxd.io/chunks/css/249.css` (Changed code · before: `L253-L254` → after: `L8818-L8844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763fR8818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3bfe8ab76469aac0e0ac2a6d3c54ea4ea8f6f8dc68ac6bdcea5b3862c6ac763f) · [After (L8818-L8844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/249.css#L8818-L8844) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/249.css#L253-L254)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic.CustomGamePlaceMosaicPortrait .CustomGamePlacePanel {
-   align-self: stretch
+ @media(max-height:650px), (max-width:1000px) {
+   .SkyblockTideChartsChip {
+     height: 3.5rem;
+     justify-content: center;
+     margin: -1rem -.25rem 0;
+     padding: .15rem;
+     width: 3rem
+   }
+ 
+   .SkyblockTideChartsChip:before {
+     inset: -1.5rem -.375rem 0
+   }
+ 
+   .SkyblockTideChartsChip:after {
+     content: "";
+     inset: -1.5rem -.625rem 100%;
+ ... (11 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/712.css` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/css/712.css` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1edf026b67abd5c0fbe7078dd09a47812ba02e2f90da4a3d18943da4d035d231)

#### 1. `bundles/bloxd.io/chunks/css/712.css` (Changed code · before: `L1-L4` → after: `L1-L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1edf026b67abd5c0fbe7078dd09a47812ba02e2f90da4a3d18943da4d035d231R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1edf026b67abd5c0fbe7078dd09a47812ba02e2f90da4a3d18943da4d035d231) · [After (L1-L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/712.css#L1-L3) · [Before (L1-L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/712.css#L1-L4)

```diff
- .CustomTexturePackDownloaderLogoLoaderContainer {
-   align-items: center;
-   display: flex;
-   justify-content: center
+ .WorldCodeAiExternalLink {
+   text-decoration: underline;
+   white-space: nowrap
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/713.css` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/css/713.css` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0fd71e97eee3ebcb05655a754e725f3a6f6dd77a842aebca2d440bc5015266ac)

#### 1. `bundles/bloxd.io/chunks/css/713.css` (Changed code · before: `L1-L36` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0fd71e97eee3ebcb05655a754e725f3a6f6dd77a842aebca2d440bc5015266acR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0fd71e97eee3ebcb05655a754e725f3a6f6dd77a842aebca2d440bc5015266ac) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/713.css#L1) · [Before (L1-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/713.css#L1-L36)

```diff
- .PlayerProfile {
-   animation-duration: .3s;
-   animation-duration: .2s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: fadeIn;
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
-   isolation: isolate
- }
- 
- .PlayerProfile .PlayerProfileBackgroundContainer {
-   background-color: #22283b;
-   font-size: 2rem;
-   inset: 0;
- ... (20 more removed lines; see GitHub link above)
+ .CustomTexturePackDownloaderLogoLoaderContainer {
```

#### 2. `bundles/bloxd.io/chunks/css/713.css` (Changed code · before: `L91-L94` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0fd71e97eee3ebcb05655a754e725f3a6f6dd77a842aebca2d440bc5015266acR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0fd71e97eee3ebcb05655a754e725f3a6f6dd77a842aebca2d440bc5015266ac) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/713.css#L7-L8) · [Before (L91-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/713.css#L91-L94)

```diff
- .PlayerProfile .PlayerProfileLeft {
-   align-items: center;
-   display: flex;
-   flex-direction: column
+ .CustomTexturePackDownloaderLogoLoaderContainer .LogoLoader {
+   font-size: 10rem
```

#### 3. `bundles/bloxd.io/chunks/css/713.css` (Changed code · before: `L97-L100` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0fd71e97eee3ebcb05655a754e725f3a6f6dd77a842aebca2d440bc5015266acR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0fd71e97eee3ebcb05655a754e725f3a6f6dd77a842aebca2d440bc5015266ac) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/713.css#L11-L13) · [Before (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/713.css#L97-L100)

```diff
- .PlayerProfile .PlayerProfileLeft .PlayerProfileName {
-   font-size: 2rem;
-   text-align: center;
-   word-break: break-word
+ .CustomTexturePackDownloaderSubtitleText .CustomTexturePackDownloaderWarningText {
+   color: #fcd373;
+   padding-top: 1rem
```

#### 4. `bundles/bloxd.io/chunks/css/713.css` (Changed code · before: `L103-L110` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0fd71e97eee3ebcb05655a754e725f3a6f6dd77a842aebca2d440bc5015266acR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0fd71e97eee3ebcb05655a754e725f3a6f6dd77a842aebca2d440bc5015266ac) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/713.css#L16-L18) · [Before (L103-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/713.css#L103-L110)

```diff
- .PlayerProfile .PlayerProfileLeft .PlayerProfileModel {
-   aspect-ratio: 2/3;
-   border-radius: 0;
-   flex-grow: 1;
-   font-size: 3rem;
-   height: 35rem;
-   overflow: hidden;
-   position: relative
+ .CustomTexturePackDownloaderSubtitleText .CustomTexturePackDownloaderSecondaryText {
+   color: #a4a4a4;
+   padding-top: 1rem
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/714.css` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/css/714.css` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d)

#### 1. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L1-L5` → after: `L1-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L1-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L1-L16) · [Before (L1-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L1-L5)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup {
-   display: flex;
-   flex-direction: column;
-   max-height: 90vh;
-   max-height: 90dvh;
+ .PlayerProfile {
+   animation-duration: .3s;
+   animation-duration: .2s;
+   animation-fill-mode: backwards;
+   animation-iteration-count: 1;
+   animation-name: fadeIn;
+   display: flex;
+   flex-direction: column;
+   gap: 1rem;
+   isolation: isolate
+ }
+ 
+ .PlayerProfile .PlayerProfileBackgroundContainer {
+   background-color: #22283b;
+   font-size: 2rem;
+   inset: 0;
```

#### 2. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L201` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L49) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L201)

```diff
-   .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter .CreateCustomLobbyAdvancedToggle .ClickableOtherInput:before {
+   .PlayerProfile .PlayerProfileHeader .BackButton:before {
```

#### 3. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L208-L210` → after: `L56-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L56-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L56-L104) · [Before (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L208-L210)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter .CreateCustomLobbyError {
-   align-items: center;
-   background-color: rgba(204, 20, 20, .1);
+ .PlayerProfile .PlayerProfileHeader .PlayerProfileExclusionActions {
+   color: #a4a4a4;
+   display: flex;
+   font-size: .9rem;
+   gap: 1.2rem;
+   margin-left: auto;
+   padding-right: .5rem
+ }
+ 
+ .PlayerProfile .PlayerProfileCentredMessage {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   font-size: 2rem;
+   gap: .75rem;
+   justify-content: center;
+ ... (33 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L212-L215` → after: `L106-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L106-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L106-L120) · [Before (L212-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L212-L215)

```diff
-   color: #ff8a80;
-   display: flex;
-   flex-basis: 100%;
-   font-size: 1.25rem;
+   flex-grow: 1;
+   font-size: 3rem;
+   height: 35rem;
+   overflow: hidden;
+   position: relative
+ }
+ 
+ .PlayerProfile .PlayerProfileLeft .PlayerProfileModel:empty {
+   display: none
+ }
+ 
+ .PlayerProfile .PlayerProfileLeft .PlayerProfileModel .PlayerProfileModelLoading {
+   align-items: center;
+   display: flex;
+   inset: 0;
```

#### 5. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L217-L246` → after: `L122-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L122-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L122-L129) · [Before (L217-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L217-L246)

```diff
-   min-width: 0;
-   padding: 0 1rem;
-   text-align: left
- }
- 
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter .CreateCustomLobbyButton {
-   align-items: center;
-   display: inline-flex;
-   height: 3rem;
-   justify-content: center
- }
- 
- @media(pointer:coarse) {
-   .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter .CreateCustomLobbyButton:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
- ... (14 more removed lines; see GitHub link above)
+   position: absolute
+ }
+ 
+ .PlayerProfile .PlayerProfileLeft .PlayerProfileModel .CharCustomisationPreview {
+   align-items: center;
+   display: flex;
+   height: 100%;
+   justify-content: center;
```

#### 6. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L250-L262` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L133-L135) · [Before (L250-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L250-L262)

```diff
- .CustomLobbyDescription .TextInput {
-   flex-grow: 1
- }
- 
- .WorldGamemode .Dropdown-placeholder {
-   width: 12rem
- }
- 
- .SchematicListTitle {
-   color: #cfcfcf;
-   font-size: 1rem;
-   padding-top: .5rem;
-   text-align: left;
+ .PlayerProfile .PlayerProfileLeft .PlayerProfileModel .CharCustomisationPreview .CharCustomisationPreviewCanvas {
+   height: 100%;
+   outline: none;
```

#### 7. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L266-L267` → after: `L139-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L139-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L139-L154) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L266-L267)

```diff
- .SchematicListContainer {
-   background-color: #303a59;
+ .PlayerProfile .PlayerProfileRight {
+   display: flex;
+   flex-direction: column;
+   gap: 2rem;
+   min-width: 0
+ }
+ 
+ .PlayerProfile .PlayerProfileRight .PlayerProfileStats {
+   display: flex;
+   gap: 1rem
+ }
+ 
+ .PlayerProfile .PlayerProfileRight .PlayerProfileStats .PlayerProfileStat {
+   align-items: center;
+   background-color: #3c4b68;
+   border: 1px solid #0f0f0f;
```

#### 8. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L269-L297` → after: `L156-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L156-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L156-L226) · [Before (L269-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L269-L297)

```diff
-   padding: .5rem;
-   width: 100%
- }
- 
- .SchematicListContainer.SchematicListContainerDisabled {
-   filter: brightness(.6);
-   pointer-events: none
- }
- 
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicListWindow {
-   display: flex;
-   flex-direction: column;
-   gap: .5rem;
-   min-height: 0
- }
- 
- ... (13 more removed lines; see GitHub link above)
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   display: flex;
+   gap: .75rem;
+   padding: .75rem 1rem;
+   width: -moz-fit-content;
+   width: fit-content
+ }
+ 
+ .PlayerProfile .PlayerProfileRight .PlayerProfileStats .PlayerProfileStat:first-of-type {
+   background-color: #463bd9
+ }
+ 
+ .PlayerProfile .PlayerProfileRight .PlayerProfileStats .PlayerProfileStat:nth-of-type(2) {
+   background-color: #0ec28c
+ }
+ 
+ ... (55 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L399-L402` → after: `L328-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L328-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L328-L339) · [Before (L399-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L399-L402)

```diff
- .BloxdForm.GamemodeForm .SectionBody,
- .BloxdForm.MapTypeForm .SectionBody {
-   grid-gap: .5rem;
-   align-items: stretch;
+ .PlayerProfile.PlayerProfilePortrait .PlayerProfileSocialLinksList {
+   grid-template-columns: 1fr
+ }
+ 
+ .PlayerProfileSocialLinks {
+   display: flex;
+   flex-direction: column;
+   gap: .75rem
+ }
+ 
+ .PlayerProfileSocialLinks .PlayerProfileSocialLinksList {
+   grid-gap: .6rem;
```

#### 10. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L404-L414` → after: `L341-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L341-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L341-L361) · [Before (L404-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L404-L414)

```diff
-   gap: .5rem;
-   grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr))
- }
- 
- .BloxdForm.GamemodeForm .SectionBody .MapType,
- .BloxdForm.GamemodeForm .SectionBody .WorldGamemode,
- .BloxdForm.MapTypeForm .SectionBody .MapType,
- .BloxdForm.MapTypeForm .SectionBody .WorldGamemode {
-   background: none;
-   border: none;
-   box-sizing: content-box;
+   gap: .6rem;
+   grid-template-columns: repeat(auto-fill, minmax(max(min(100%, 18rem), (100% - .6rem)/2), 1fr));
+   max-width: 50rem
+ }
+ 
+ .PlayerProfileSocialLinks .PlayerProfileSocialLink {
+   align-items: center;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   color: #fff;
+   display: flex;
+   gap: .85rem;
+   min-height: 3.9rem;
+   padding: 0 .85rem;
+   text-align: left;
+ ... (5 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L416-L419` → after: `L363-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L363-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L363-L428) · [Before (L416-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L416-L419)

```diff
-   font: inherit;
-   letter-spacing: inherit;
-   line-height: inherit;
-   margin: 0;
+   display: flex;
+   flex: 1 1;
+   gap: .85rem;
+   min-width: 0;
+   padding: .7rem 0;
+   text-decoration: none
+ }
+ 
+ .PlayerProfileSocialLinks .PlayerProfileSocialLink .PlayerProfileSocialLinkIcon {
+   align-items: center;
+   color: #fff;
+   display: flex;
+   flex-shrink: 0;
+   font-size: 1.2rem;
+   height: 2.5rem;
+   justify-content: center;
+ ... (50 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L421-L447` → after: `L430-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L430-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L430-L466) · [Before (L421-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L421-L447)

```diff
-   text-align: inherit;
-   text-shadow: inherit;
-   text-transform: inherit
- }
- 
- @media(pointer:coarse) {
- 
-   .BloxdForm.GamemodeForm .SectionBody .MapType:before,
-   .BloxdForm.GamemodeForm .SectionBody .WorldGamemode:before,
-   .BloxdForm.MapTypeForm .SectionBody .MapType:before,
-   .BloxdForm.MapTypeForm .SectionBody .WorldGamemode:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) max(.5rem/-2, min(0px, (100% - 44px)/2));
-     position: absolute
-   }
- }
- ... (11 more removed lines; see GitHub link above)
+   transition: background .2s;
+   width: 2rem
+ }
+ 
+ @media(hover:hover) {
+   .PlayerProfileSocialLinks .PlayerProfileSocialLink .PlayerProfileSocialLinkEditButton:hover {
+     background: rgba(57, 73, 128, .6)
+   }
+ }
+ 
+ .PlayerProfileSocialLinks .PlayerProfileSocialLink .PlayerProfileSocialLinkEditButton.pad-focused {
+   background: rgba(57, 73, 128, .6)
+ }
+ 
+ @media(hover:none) {
+   .PlayerProfileSocialLinks .PlayerProfileSocialLink .PlayerProfileSocialLinkEditButton:active {
+ ... (21 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/css/714.css` (Changed code · before: `L449-L509` → after: `L468-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594dR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-417ee24ad275c9f1b2abfd94569ba2fdee28849cc0dede7d328930d6aec1594d) · [After (L468-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/714.css#L468-L485) · [Before (L449-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/714.css#L449-L509)

```diff
-   display: flex;
-   height: 3rem;
-   justify-content: center;
-   padding: 1rem;
-   position: relative;
-   transition: border-color .2s
- }
- 
- @media(orientation:portrait)and (max-width:600px) {
- 
-   .BloxdForm.GamemodeForm .SectionBody .MapType,
-   .BloxdForm.GamemodeForm .SectionBody .WorldGamemode,
-   .BloxdForm.MapTypeForm .SectionBody .MapType,
-   .BloxdForm.MapTypeForm .SectionBody .WorldGamemode {
-     font-size: 1.25rem;
-     padding: .5rem
- ... (45 more removed lines; see GitHub link above)
+   opacity: .85
+ }
+ 
+ @media(hover:hover) {
+   .PlayerProfileSocialLinks .PlayerProfileSocialLinkUnlinked:hover {
+     opacity: 1
+   }
+ }
+ 
+ .PlayerProfileSocialLinks .PlayerProfileSocialLinkUnlinked.pad-focused {
+   opacity: 1
+ }
+ 
+ @media(hover:none) {
+   .PlayerProfileSocialLinks .PlayerProfileSocialLinkUnlinked:active {
+     opacity: 1
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/715.css` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/css/715.css` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1)

#### 1. `bundles/bloxd.io/chunks/css/715.css` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/715.css#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/715.css#L1)

```diff
- .ShaderPackPublishForm {
+ .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup {
```

#### 2. `bundles/bloxd.io/chunks/css/715.css` (Changed code · before: `L4-L7` → after: `L4-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1) · [After (L4-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/715.css#L4-L258) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/715.css#L4-L7)

```diff
-   gap: .75rem
- }
- 
- .ShaderPackPublishForm .ShaderPackPublishIntro {
+   max-height: 90vh;
+   max-height: 90dvh;
+   overflow: hidden;
+   position: relative
+ }
+ 
+ @media(orientation:portrait)and (max-width:600px) {
+   .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup {
+     box-sizing: border-box;
+     max-width: none;
+     width: calc(100vw - 2rem)
+   }
+ }
+ 
+ .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby {
+   display: flex;
+ ... (239 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/css/715.css` (Changed code · before: `L9-L19` → after: `L260-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1) · [After (L260-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/715.css#L260-L267) · [Before (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/715.css#L9-L19)

```diff
-   font-size: 1.1rem;
-   margin: 0
- }
- 
- .ShaderPackPublishForm .ShaderPackPublishLink {
-   color: #ffb914;
-   text-decoration: underline
- }
- 
- .ShaderPackPublishForm .ShaderPackPublishSummary {
-   background-color: rgba(57, 73, 128, .4);
+   font-size: 1rem;
+   padding-top: .5rem;
+   text-align: left;
+   width: 100%
+ }
+ 
+ .SchematicListContainer {
+   background-color: #303a59;
```

#### 4. `bundles/bloxd.io/chunks/css/715.css` (Changed code · before: `L24-L88` → after: `L282-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1) · [After (L282-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/715.css#L282-L295) · [Before (L24-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/715.css#L24-L88)

```diff
-   padding: .75rem
- }
- 
- .ShaderPackPublishForm .ShaderPackPublishSummary .ShaderPackPublishPackName {
-   font-size: 1.3rem;
-   font-weight: 700;
-   overflow-wrap: anywhere
- }
- 
- .ShaderPackPublishForm .ShaderPackPublishSummary .ShaderPackPublishPackSize {
-   color: #a4a4a4;
-   font-size: 1rem
- }
- 
- .ShaderPackPublishForm .ShaderPackPublishNote {
-   align-items: center;
- ... (49 more removed lines; see GitHub link above)
+   min-height: 0
+ }
+ 
+ .SchematicList {
+   box-sizing: border-box;
+   display: flex;
+   flex-wrap: wrap;
+   justify-content: flex-start;
+   row-gap: .5rem;
+   width: 100%
+ }
+ 
+ .SchematicList .NoSchematicsText {
+   color: #cfcfcf;
```

#### 5. `bundles/bloxd.io/chunks/css/715.css` (Changed code · before: `L90-L105` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/715.css#L297) · [Before (L90-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/715.css#L90-L105)

```diff
-   gap: .4rem;
-   list-style: none;
-   margin: 0;
-   overflow-wrap: anywhere;
-   padding: 0
- }
- 
- .ShaderPackDiagnostics .ShaderPackDiagnosticLocation {
-   color: #ffb914;
-   font-family: monospace;
-   margin-right: .5rem
- }
- 
- .ShaderPackDiagnostics .ShaderPackDiagnosticVariants {
-   color: #a4a4a4;
-   margin-left: .5rem
+   margin: 2rem
```

#### 6. `bundles/bloxd.io/chunks/css/715.css` (Changed code · before: `L207-L209` → after: `L399-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1) · [After (L399-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/715.css#L399-L446) · [Before (L207-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/715.css#L207-L209)

```diff
- .ShaderPackDropZone {
-   align-items: center;
-   border: 1px solid #ffb914;
+ .BloxdForm.GamemodeForm .SectionBody,
+ .BloxdForm.MapTypeForm .SectionBody {
+   grid-gap: .5rem;
+   align-items: stretch;
+   display: grid;
+   gap: .5rem;
+   grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr))
+ }
+ 
+ .BloxdForm.GamemodeForm .SectionBody .MapType,
+ .BloxdForm.GamemodeForm .SectionBody .WorldGamemode,
+ .BloxdForm.MapTypeForm .SectionBody .MapType,
+ .BloxdForm.MapTypeForm .SectionBody .WorldGamemode {
+   background: none;
+   border: none;
+   box-sizing: content-box;
+ ... (32 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/css/715.css` (Changed code · before: `L211-L214` → after: `L448-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1) · [After (L448-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/715.css#L448-L450) · [Before (L211-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/715.css#L211-L214)

```diff
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
+   cursor: pointer;
+   display: flex;
+   height: 3rem;
```

#### 8. `bundles/bloxd.io/chunks/css/715.css` (Changed code · before: `L216-L247` → after: `L452-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9caa3aa088028ab96175e37c61a9025609abcf049627b39afedd63e0114b77b1) · [After (L452-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/css/715.css#L452-L509) · [Before (L216-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/css/715.css#L216-L247)

```diff
-   min-height: 12rem;
-   padding: 2rem 1rem
- }
- 
- .ShaderPackDropZone .ShaderPackDropZoneIcon {
-   font-size: 3rem;
-   opacity: .4;
-   text-shadow: 0 0 0 #000;
-   transition: opacity .3s
- }
- 
- .ShaderPackDropZone .ShaderPackDropZoneInstructions {
-   color: #cfcfcf;
-   font-size: 1.2rem;
-   text-align: center
- }
- ... (16 more removed lines; see GitHub link above)
+   padding: 1rem;
+   position: relative;
+   transition: border-color .2s
+ }
+ 
+ @media(orientation:portrait)and (max-width:600px) {
+ 
+   .BloxdForm.GamemodeForm .SectionBody .MapType,
+   .BloxdForm.GamemodeForm .SectionBody .WorldGamemode,
+   .BloxdForm.MapTypeForm .SectionBody .MapType,
+   .BloxdForm.MapTypeForm .SectionBody .WorldGamemode {
+     font-size: 1.25rem;
+     padding: .5rem
+   }
+ }
+ 
+ ... (42 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/100.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/100.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13)

#### 1. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/100.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/100.js#L4)

```diff
-   5650: (RR, JR, GR) => {
+   5577: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/101.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/101.js` (2563 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8)

#### 1. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2)

```diff
- export const ids = [101, 220, 255];
+ export const ids = [101, 220, 221, 256];
```

#### 2. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L4)

```diff
-   37722: (RR, JR, GR) => {
+   38086: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L6-L7)

```diff
-       e: () => ER,
-       i: () => jR
+       c: () => Fr,
+       d: () => wr
```

#### 4. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L9-L11)

```diff
-     var yR = GR(66),
-       tR = GR(2134),
-       uR = GR(37728),
+     var Zr = Qr(72),
+       Wr = Qr(2089),
+       ar = Qr(38093),
```

#### 5. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L13-L19` → after: `L13-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L13-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L13-L19) · [Before (L13-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L13-L19)

```diff
-       qR = GR(5347),
-       iR = GR(2105),
-       fR = GR(1581),
-       VR = GR(103),
-       KR = GR(116),
-       wR = GR(377),
-       rR = GR(1163),
+       Ir = Qr(5308),
+       fr = Qr(2057),
+       Er = Qr(1573),
+       pr = Qr(109),
+       xr = Qr(124),
+       mr = Qr(379),
+       Nr = Qr(1155),
```

#### 6. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L21-L38` → after: `L21-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L21-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L21-L38) · [Before (L21-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L21-L38)

```diff
-       aR = GR(25),
-       LR = GR(1468),
-       nR = GR(1800),
-       UR = GR(1943),
-       WR = GR(1874),
-       AR = GR(2206),
-       CR = GR(1547),
-       XR = GR(2286),
-       MR = GR(1532),
-       BR = GR(3887),
-       lR = GR(37736),
-       pR = GR(37766),
-       gR = GR(1614),
-       bR = GR(3468),
-       vR = GR(1270),
-       OR = GR(37773);
- ... (2 more removed lines; see GitHub link above)
+       tr = Qr(26),
+       hr = Qr(1448),
+       zr = Qr(1758),
+       Yr = Qr(1885),
+       nr = Qr(1811),
+       er = Qr(2149),
+       Kr = Qr(1541),
+       yr = Qr(2230),
+       Br = Qr(1518),
+       Tr = Qr(3830),
+       vr = Qr(38098),
+       Or = Qr(38124),
+       Lr = Qr(1597),
+       lr = Qr(3408),
+       Xr = Qr(1251),
+       Pr = Qr(38141);
+ ... (2 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L85)

```diff
-     xR.c.onRelease((() => {
+     Hr.d.onRelease((() => {
```

#### 8. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L88-L90` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L88-L90) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L88-L90)

```diff
-     var oR = GR(10136),
-       cR = GR(10127),
-       PR = GR(1378);
+     var Cr = Qr(9899),
+       Mr = Qr(9895),
+       Gr = Qr(1338);
```

#### 9. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L95)

```diff
-       } = (0, vR.A)(), [JR, GR] = (0, yR.useState)(!1), [tR, uR] = (0, yR.useState)(0), [ZR, qR] = (0, yR.useState)(null), iR = (0, yR.useRef)(null), fR = (0, yR.useRef)(null), VR = (0, oR.t)();
+       } = (0, Xr.E)(), [Sr, Qr] = (0, Zr.useState)(!1), [Wr, ar] = (0, Zr.useState)(0), [jr, Ir] = (0, Zr.useState)(null), fr = (0, Zr.useRef)(null), Er = (0, Zr.useRef)(null), pr = (0, Cr.p)();
```

#### 10. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L143-L144` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L143-L144) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L143-L144)

```diff
-           ...(0, gR.f)((() => {
-             GR(!JR), uR(cR.h.nextClaimMs())
+           ...(0, Lr.g)((() => {
+             Qr(!Sr), ar(Mr.g.nextClaimMs())
```

#### 11. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L146)

```diff
-           children: (0, PR.jsx)(LR.d, {
+           children: (0, Gr.jsx)(hr.c, {
```

#### 12. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L166)

```diff
-             ...(0, gR.f)((() => {
+             ...(0, Lr.g)((() => {
```

#### 13. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L168)

```diff
-               cR.h.claim(performance.now()) ? (GR(!1), null === (JR = (0, WR.e)()) || void 0 === JR || JR.sendLine(RR)) : uR(cR.h.nextClaimMs())
+               Mr.g.claim(performance.now()) ? (Qr(!1), null === (Sr = (0, nr.c)()) || void 0 === Sr || Sr.sendLine(rr)) : ar(Mr.g.nextClaimMs())
```

#### 14. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L171)

```diff
-           }, cR.e[JR])))
+           }, Mr.c[Sr])))
```

#### 15. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L175)

```diff
-     const mR = GR(37782),
+     const Ar = Qr(38143),
```

#### 16. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L186-L187` → after: `L186-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L186-L187) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L186-L187)

```diff
-       const GR = null !== (RR = null === (JR = (0, CR.g)()) || void 0 === JR ? void 0 : JR.getBoundButton("keyboardChannel")) && void 0 !== RR ? RR : null;
-       return GR ? (0, PR.jsx)(AR.e, {
+       const Qr = null !== (rr = null === (Sr = (0, Kr.g)()) || void 0 === Sr ? void 0 : Sr.getBoundButton("keyboardChannel")) && void 0 !== rr ? rr : null;
+       return Qr ? (0, Gr.jsx)(er.b, {
```

#### 17. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L196)

```diff
-       } = (0, vR.A)(), {
+       } = (0, Xr.E)(), {
```

#### 18. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L198)

```diff
-       } = (0, aR.o)(["isTouchScreen"]), GR = (0, MR.s)(), [uR, rR] = (0, yR.useState)(!1), AR = (0, yR.useRef)(uR), CR = (0, yR.useRef)(null), {
+       } = (0, tr.n)(["isTouchScreen"]), Qr = (0, Br.z)(), [ar, Nr] = (0, Zr.useState)(!1), er = (0, Zr.useRef)(ar), Kr = (0, Zr.useRef)(null), {
```

#### 19. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L202)

```diff
-       } = (0, BR.j)(), cR = (0, yR.useRef)(0), jR = (0, yR.useRef)(""), ER = (0, yR.useRef)(null);
+       } = (0, Tr.r)(), Mr = (0, Zr.useRef)(0), wr = (0, Zr.useRef)(""), Fr = (0, Zr.useRef)(null);
```

#### 20. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L217)

```diff
-               tR = yR && (0, OR.e)(GR.changedTouches, yR.id);
+               Wr = Zr && (0, Pr.c)(Qr.changedTouches, Zr.id);
```

#### 21. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L231-L259` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L231) · [Before (L231-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L231-L259)

```diff
-       const [QR, FR] = (0, yR.useState)(!1), [TR, sR] = (0, yR.useState)(!1), hR = (0, yR.useRef)(QR), RJ = (0, yR.useRef)(null), [JJ, GJ] = (0, yR.useState)(!1), yJ = (0, yR.useRef)(JJ), {
-         atNewest: tJ,
-         full: uJ,
-         measure: ZJ
-       } = function(RR) {
-         const [JR, GR] = (0, yR.useState)(!0), [tR, uR] = (0, yR.useState)(!1), ZR = (0, yR.useRef)(0);
-         return (0, yR.useEffect)((() => {
-           const JR = RR.current,
-             yR = () => {
-               GR(Math.abs(JR.scrollTop) < 1)
-             };
-           return JR.addEventListener("scroll", yR, {
-             passive: !0
-           }), () => {
-             JR.removeEventListener("scroll", yR), cancelAnimationFrame(ZR.current)
-           }
- ... (13 more removed lines; see GitHub link above)
+       const [Jr, Dr] = (0, Zr.useState)(!1), [dr, sr] = (0, Zr.useState)(!1), ur = (0, Zr.useRef)(Jr), rS = (0, Zr.useRef)(null), SS = (0, Zr.useRef)(!1), QS = (0, Zr.useRef)(null), ZS = (0, Zr.useRef)(null), WS = (0, Zr.useRef)(null), aS = (0, Zr.useRef)(ES);
```

#### 22. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L261` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L233) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L261)

```diff
-       const KJ = (0, bR.n)();
+       const jS = (0, lr.j)();
```

#### 23. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L281` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L249) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L281)

```diff
-         (0, BR.g)(RR), cR.current = 0, rJ(!1)
+         (0, Tr.o)(rr), Mr.current = 0, fS(!1)
```

#### 24. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L286` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L254) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L286)

```diff
-         const GR = (0, BR.e)(cR.current + RR, JR);
+         const Qr = (0, Tr.k)(Mr.current + rr, Sr);
```

#### 25. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L295-L374` → after: `L263-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L263-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L263-L274) · [Before (L295-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L295-L374)

```diff
-       }(0, qR.d)(!0, uR, "ChatComponent", !0), (0, yR.useEffect)((() => (SR = uR, () => {
-         SR = !1
-       })), [uR]), (0, fR.f)("appManagerUpdated|openEverythingMenuName", (() => {
-         (0, nR.r)() && rR(!1)
-       })), (0, yR.useEffect)((() => {
-         iJ.current.addEventListener("blur", (RR => {
-           if (null === iJ.current) return;
-           Array.from(document.querySelectorAll(":hover")).some((RR => RR.classList.contains("ChatInputChannel") || RR.classList.contains("ChatMsgSelectWrapper"))) || ((0, VR.isMobile)() && AR.current && "" !== iJ.current.value && VJ.current(), rR(!1))
-         }));
-         const RR = RR => {
-           CR.current.contains(RR.target) || (0, WR.k)(RR.target) || rR(!1)
-         };
-         document.addEventListener("touchstart", RR, {
-           capture: !0
-         });
-         const JR = RR => {
- ... (64 more removed lines; see GitHub link above)
+       }
+       return (0, Ir.b)(!0, ar, "ChatComponent", !0), (0, Zr.useEffect)((() => (ir = ar, () => {
+           ir = !1
+         })), [ar]), (0, Er.c)("appManagerUpdated|openEverythingMenuName", (() => {
+           (0, zr.p)() && Nr(!1)
+         })), (0, Zr.useEffect)((() => {
+           ZS.current.addEventListener("blur", (rr => {
+             if (null === ZS.current) return;
+             Array.from(document.querySelectorAll(":hover")).some((rr => rr.classList.contains("ChatInputChannel") || rr.classList.contains("ChatMsgSelectWrapper"))) || ((0, pr.isMobile)() && er.current && "" !== ZS.current.value && aS.current(), Nr(!1))
+           }));
+           const rr = rr => {
+             Kr.current.contains(rr.target) || (0, nr.j)(rr.target) || Nr(!1)
```

#### 26. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L376-L382` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L276) · [Before (L376-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L376-L382)

```diff
-         qJ.current = wR;
-         const eR = new MutationObserver(wR);
-         return eR.observe(iR, {
-           childList: !0,
-           subtree: !0
-         }), () => {
-           document.removeEventListener("keydown", qR, {
+           document.addEventListener("touchstart", rr, {
```

#### 27. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L384` → after: `L278-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L278-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L278-L282) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L384)

```diff
-           }), document.removeEventListener("touchstart", RR, {
+           });
+           const Sr = rr => {
+             (0, Or.m)(rr.target) && (er.current = !1, Nr(!1))
+           };
+           document.addEventListener("mousedown", Sr, {
```

#### 28. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L386` → after: `L284-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L284-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L284-L334) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L386)

```diff
-           }), document.removeEventListener("mousedown", JR, {
+           });
+           const Qr = () => {
+               clearTimeout(rS.current), fS(!0)
+             },
+             Zr = () => {
+               clearTimeout(rS.current), rS.current = setTimeout((() => {
+                 fS(!1), mS()
+               }), 4e3)
+             },
+             ar = () => {
+               document.pointerLockElement ? (Nr(!1), sr(!0), SS.current = !1, fS(!1), mS()) : sr(!1)
+             };
+           Fr.current.addEventListener("pointermove", (rr => {
+             "touch" === rr.pointerType || SS.current || document.pointerLockElement || (SS.current = !0, clearTimeout(rS.current))
+           })), Fr.current.addEventListener("pointerleave", (rr => {
+             "touch" !== rr.pointerType && (SS.current = !1, ur.current && Zr())
+ ... (35 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L388-L426` → after: `L336-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L336-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L336-L357) · [Before (L388-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L388-L426)

```diff
-           }), document.removeEventListener("pointerlockchange", uR), qJ.current = null, eR.disconnect(), KR.disconnect(), clearTimeout(RJ.current)
-         }
-       }), []), (0, WR.s)(iJ, {
-         open: () => {
-           rR(!0)
-         },
-         close: () => {
-           wJ()
-         },
-         submit: () => {
-           "" !== iJ.current.value && aJ(), wJ()
-         },
-         stepHistory: () => {
-           nJ(1, !0)
-         },
-         sendLine: RR => {
- ... (23 more removed lines; see GitHub link above)
+           });
+           const fr = Fr.current;
+           let Er = !1;
+           const xr = new ResizeObserver((() => {
+               Er && (Er = !1, mS())
+             })),
+             mr = () => {
+               Er = !0, xr.unobserve(fr), xr.observe(fr)
+             };
+           QS.current = mr;
+           const Ur = new MutationObserver(mr);
+           return Ur.observe(fr, {
+             childList: !0,
+             subtree: !0
+           }), () => {
+             document.removeEventListener("keydown", Ir, {
+ ... (6 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L428-L438` → after: `L359-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L359-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L359-L399) · [Before (L428-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L428-L438)

```diff
-         }), [RR, JR])
-       }(CR, uR && JR);
-       const WJ = QR || uR || JJ || !tJ;
-       return (0, PR.jsx)(PR.Fragment, {
-         children: (0, PR.jsxs)("div", {
-           ref: CR,
-           className: eR()("Chat", {
-             Chatting: uR
-           }),
-           "data-camera-keeper": uR ? "" : void 0,
-           children: [(0, PR.jsx)("div", {
+         }), []), (0, nr.m)(ZS, {
+           open: () => {
+             Nr(!0)
+           },
+           close: () => {
+             IS()
+           },
+           submit: () => {
+             "" !== ZS.current.value && ES(), IS()
+           },
+           stepHistory: () => {
+             xS(1, !0)
+           },
+           sendLine: rr => {
+             pS(rr), IS()
+           },
+ ... (25 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L440-L444` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L401-L402) · [Before (L440-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L440-L444)

```diff
-             className: eR()("ChatMessages", {
-               HideScrollbar: !QR && !uR,
-               NoScrolling: !(0, VR.isMobile)() && TR,
-               Full: uJ,
-               NewestOnly: !WJ
+             className: Ur()("Chat", {
+               Chatting: ar
```

#### 32. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L446-L461` → after: `L404-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L404-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L404-L413) · [Before (L446-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L446-L461)

```diff
-             children: (0, PR.jsx)(lR.b, {
-               messages: XR,
-               reportedPlayers: DR
-             })
-           }), JR && !uR && (0, PR.jsxs)("div", {
-             className: "ChatIcons",
-             children: [(0, PR.jsx)("button", {
-               type: "button",
-               className: "ChatIconWrapper SmallTextLight",
-               "aria-label": RR("general:chat"),
-               ...(0, gR.f)((() => {
-                 rR(!0), fJ.current.style.display = "flex", (0, VR.isIOS)() && iJ.current.focus()
-               }), "pointerup"),
-               children: (0, PR.jsx)(LR.d, {
-                 name: "comment-dots",
-                 className: "ChatIcon"
+             "data-camera-keeper": ar ? "" : void 0,
+             children: [(0, Gr.jsx)("div", {
+               ref: Fr,
+               className: Ur()("ChatMessages", {
+                 HideScrollbar: !Jr && !ar,
+                 NoScrolling: !(0, pr.isMobile)() && dr
+               }),
+               children: (0, Gr.jsx)(vr.b, {
+                 messages: yr,
+                 reportedPlayers: Rr
```

#### 33. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L463-L480` → after: `L415-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L415-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L415-L423) · [Before (L463-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L463-L480)

```diff
-             }), (0, PR.jsx)(IR, {})]
-           }), (0, PR.jsxs)("div", {
-             ref: fJ,
-             className: "ChatInputWrapper",
-             style: {
-               display: "" + (uR ? "flex" : "none")
-             },
-             children: [oR && (0, PR.jsx)("button", {
-               type: "button",
-               className: "ChatInputChannel",
-               style: {
-                 backgroundColor: oR.elementBgColor
-               },
-               onClick: RR => {
-                 BR.c.selectNextChannel(), iJ.current.focus()
-               },
- ... (2 more removed lines; see GitHub link above)
+             }), Sr && !ar && (0, Gr.jsxs)("div", {
+               className: "ChatIcons",
+               children: [(0, Gr.jsx)("button", {
+                 type: "button",
+                 className: "ChatIconWrapper SmallTextLight",
+                 "aria-label": rr("general:chat"),
+                 ...(0, Lr.g)((() => {
+                   Nr(!0), WS.current.style.display = "flex", (0, pr.isIOS)() && ZS.current.focus()
+                 }), "pointerup"),
```

#### 34. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L482` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L425-L426) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L482)

```diff
-                   text: oR.elementContent
+                   name: "comment-dots",
+                   className: "ChatIcon"
```

#### 35. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L484-L487` → after: `L428-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L428-L429) · [Before (L484-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L484-L487)

```diff
-               })
-             }), oR && GR && (0, PR.jsx)(dR, {}), (0, PR.jsx)("input", {
-               className: "ChatInput",
-               maxLength: wR.Yc,
+               }), (0, Gr.jsx)(kr, {})]
+             }), (0, Gr.jsxs)("div", {
```

#### 36. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L489-L493` → after: `L431-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L431-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L431-L459) · [Before (L489-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L489-L493)

```diff
-               spellCheck: "false",
-               autoComplete: "off",
-               autoCorrect: "off",
-               "aria-label": RR("general:chat"),
-               placeholder: oR ? `${oR.channelName} Chat${"touchOnly"===(0,KR.c)()||GR?"":" [Tab]"}` : ""
+               className: "ChatInputWrapper",
+               style: {
+                 display: "" + (ar ? "flex" : "none")
+               },
+               children: [Cr && (0, Gr.jsx)("button", {
+                 type: "button",
+                 className: "ChatInputChannel",
+                 style: {
+                   backgroundColor: Cr.elementBgColor
+                 },
+                 onClick: rr => {
+                   Tr.e.selectNextChannel(), ZS.current.focus()
+                 },
+                 children: (0, Gr.jsx)("span", {
+                   className: "SmallTextBold",
+                   children: (0, Gr.jsx)(fr.c, {
+ ... (13 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L495` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L461) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L495)

```diff
-           })]
+           })
```

#### 38. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L501` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L466) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L501)

```diff
-   37736: (RR, JR, GR) => {
+   38098: (rr, Sr, Qr) => {
```

#### 39. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L505-L506` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L470-L471) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L505-L506)

```diff
-     var yR = GR(66),
-       tR = GR(1163),
+     var Zr = Qr(72),
+       Wr = Qr(1155),
```

#### 40. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L508-L525` → after: `L473-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L473-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L473-L490) · [Before (L508-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L508-L525)

```diff
-       ZR = GR(3893),
-       qR = GR(32),
-       iR = GR(3370),
-       fR = GR(4939),
-       VR = GR(2228),
-       KR = GR(25),
-       wR = GR(2105),
-       rR = GR(37742),
-       eR = GR(3071),
-       aR = GR(3897),
-       LR = GR(3739),
-       nR = GR(3719),
-       UR = GR(3717),
-       WR = GR(4949),
-       AR = GR(37747),
-       CR = GR(4051),
- ... (2 more removed lines; see GitHub link above)
+       jr = Qr(3839),
+       Ir = Qr(34),
+       fr = Qr(3322),
+       Er = Qr(4846),
+       pr = Qr(2168),
+       xr = Qr(26),
+       mr = Qr(2057),
+       Nr = Qr(38103),
+       Ur = Qr(3045),
+       tr = Qr(3846),
+       hr = Qr(3691),
+       zr = Qr(3666),
+       Yr = Qr(3663),
+       nr = Qr(4867),
+       er = Qr(38111),
+       Kr = Qr(4001),
+ ... (2 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L529` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L494) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L529)

```diff
-         const yR = "string" === typeof(JR = RR[GR]) ? JR : "str" in JR && "string" === typeof JR.str ? JR.str : "";
+         const Zr = "string" === typeof(Sr = rr[Qr]) ? Sr : "str" in Sr && "string" === typeof Sr.str ? Sr.str : "";
```

#### 42. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L555` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L520) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L555)

```diff
-         [pR] = (0, yR.useState)(CR.i),
+         [Or] = (0, Zr.useState)(Kr.m),
```

#### 43. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L560-L561` → after: `L525-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L525-L526) · [Before (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L560-L561)

```diff
-         vR = null !== (JR = null === gR || void 0 === gR ? void 0 : gR.name) && void 0 !== JR ? JR : void 0,
-         OR = (0, VR.d)(vR),
+         Xr = null !== (Sr = null === Lr || void 0 === Lr ? void 0 : Lr.name) && void 0 !== Sr ? Sr : void 0,
+         Pr = (0, pr.c)(Xr),
```

#### 44. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L567` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L532) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L567)

```diff
-         HR = (0, XR.e)("hiddenPlayerNames", (RR => (0, aR.l)(NR, vR, RR))),
+         gr = (0, yr.f)("hiddenPlayerNames", (rr => (0, tr.i)(qr, Xr, rr))),
```

#### 45. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L574-L575` → after: `L539-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L539-L540) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L574-L575)

```diff
-         cR = (0, fR.i)(NR && null !== vR && void 0 !== vR ? vR : null),
-         PR = (0, UR.h)(lR);
+         Mr = (0, Er.k)(qr && null !== Xr && void 0 !== Xr ? Xr : null),
+         Gr = (0, Yr.e)(vr);
```

#### 46. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L577` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L542) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L577)

```diff
-         UR.c.closeIfOwner(lR)
+         Yr.b.closeIfOwner(vr)
```

#### 47. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L585` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L550) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L585)

```diff
-           qR.n.JK("OpenReportMenu", {
+           Ir.i.Jp("OpenReportMenu", {
```

#### 48. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L588` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L553) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L588)

```diff
-             LZ: oR,
+             xj: Cr,
```

#### 49. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L596` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L561) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L596)

```diff
-           qR.n.JK("OpenReportMenu", {
+           Ir.i.Jp("OpenReportMenu", {
```

#### 50. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L599-L600` → after: `L564-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L564-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L564-L565) · [Before (L599-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L599-L600)

```diff
-             LZ: {
-               text: (0, ZR.e)(GR.content),
+             xj: {
+               text: (0, jr.c)(Qr.content),
```

#### 51. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L607` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L572) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L607)

```diff
-       const zR = NR && void 0 !== vR ? (0, WR.c)(cR, vR, oR) : [];
+       const Vr = qr && void 0 !== Xr ? (0, nr.e)(Mr, Xr, Cr) : [];
```

#### 52. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L616` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L581) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L616)

```diff
-           (0, LR.h)(lR, RR, {
+           (0, hr.f)(vr, rr, {
```

#### 53. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L621` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L586) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L621)

```diff
-             moderationActions: (0, AR.b)(vR),
+             moderationActions: (0, er.d)(Xr),
```

#### 54. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L623` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L588) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L623)

```diff
-           }, KR.d.get("isTouchScreen"))
+           }, xr.c.get("isTouchScreen"))
```

#### 55. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L626` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L591) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L626)

```diff
-           (0, nR.d)(RR, (() => (0, aR.h)(bR, vR).playerSocialPreview))
+           (0, zr.c)(rr, (() => (0, tr.h)(lr, Xr).playerSocialPreview))
```

#### 56. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L631` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L596) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L631)

```diff
-         }), (NR || null !== DR) && !PR && (0, MR.jsx)(rR.e, {
+         }), (qr || null !== Rr) && !Gr && (0, Br.jsx)(Nr.d, {
```

#### 57. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L659` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L624) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L659)

```diff
-           friendBadgeFor: OR ? vR : void 0
+           friendBadgeFor: Pr ? Xr : void 0
```

#### 58. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L664` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L629) · [Before (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L664)

```diff
-   38002: (RR, JR, GR) => {
+   38365: (rr, Sr, Qr) => {
```

#### 59. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L666-L667` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L631-L632) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L666-L667)

```diff
-       e: () => KR,
-       h: () => VR
+       c: () => xr,
+       e: () => pr
```

#### 60. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L669-L670` → after: `L634-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L634-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L634-L635) · [Before (L669-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L669-L670)

```diff
-     var yR = GR(66),
-       tR = GR(1163),
+     var Zr = Qr(72),
+       Wr = Qr(1155),
```

#### 61. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L672-L673` → after: `L637-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L637-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L637-L638) · [Before (L672-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L672-L673)

```diff
-       ZR = GR(1590),
-       qR = GR(1378);
+       jr = Qr(1576),
+       Ir = Qr(1338);
```

#### 62. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L701` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L666) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L701)

```diff
-         className: uR()("ResizableSidePanel", JR && `ResizableSidePanel-${JR}`, {
+         className: ar()("ResizableSidePanel", Sr && `ResizableSidePanel-${Sr}`, {
```

#### 63. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L707` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L672) · [Before (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L707)

```diff
-           [UR ? "height" : "width"]: null !== rR && void 0 !== rR ? rR : GR
+           [Yr ? "height" : "width"]: null !== Nr && void 0 !== Nr ? Nr : Qr
```

#### 64. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L744` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L709) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L744)

```diff
-   38020: (RR, JR, GR) => {
+   38381: (rr, Sr, Qr) => {
```

#### 65. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L746-L748` → after: `L711-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L711-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L711-L715) · [Before (L746-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L746-L748)

```diff
-       b: () => WR,
-       f: () => LR,
-       i: () => eR,
+       C: () => Tr,
+       F: () => Wr,
+       G: () => Br,
+       c: () => nr,
+       g: () => hr,
```

#### 66. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L754-L756` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L721) · [Before (L754-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L754-L756)

```diff
-       u: () => CR,
-       w: () => BR,
-       y: () => tR,
+       x: () => yr,
```

#### 67. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L759` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L724) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L759)

```diff
-     var yR = GR(66);
+     var Zr = Qr(72);
```

#### 68. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L814` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L779) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L814)

```diff
-       return (null === (JR = qR) || void 0 === JR ? void 0 : JR.chatKey) === RR ? qR : null
+       return (null === (Sr = Ir) || void 0 === Sr ? void 0 : Sr.chatKey) === rr ? Ir : null
```

#### 69. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L830` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L795) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L830)

```diff
-       return `Fix this in your change: when it ran, the world showed ${1===JR.length?"this error":"these errors"}: ${JR.join(" ")}`
+       return `Fix this in your change: when it ran, the world showed ${1===Sr.length?"this error":"these errors"}: ${Sr.join(" ")}`
```

#### 70. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L834` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L799) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L834)

```diff
-       return `Your change didn't go in, because the code wouldn't run at all: ${RR.join(" ")} Send the whole change again with that fixed.`
+       return `Your change didn't go in, because the code wouldn't run at all: ${rr.join(" ")} Send the whole change again with that fixed.`
```

#### 71. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L838` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L803) · [Before (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L838)

```diff
-       return `Fix this in your change: ${RR.join(" ")}`
+       return `Fix this in your change: ${rr.join(" ")}`
```

#### 72. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L847-L848` → after: `L812-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L812-L813) · [Before (L847-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L847-L848)

```diff
-       const GR = Math.max(1, Math.round(((null !== (JR = RR.endedAt) && void 0 !== JR ? JR : RR.ranAt) - RR.ranAt) / 1e3)),
-         yR = `Your change ran in your world for ${GR} ${1===GR?"second":"seconds"}`;
+       const Qr = Math.max(1, Math.round(((null !== (Sr = rr.endedAt) && void 0 !== Sr ? Sr : rr.ranAt) - rr.ranAt) / 1e3)),
+         Zr = `Your change ran in your world for ${Qr} ${1===Qr?"second":"seconds"}`;
```

#### 73. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L851` → after: `L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L816) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L851)

```diff
-         text: `${yR} without an error.`
+         text: `${Zr} without an error.`
```

#### 74. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L853-L854` → after: `L818-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L818-L819) · [Before (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L853-L854)

```diff
-         title: 1 === RR.errors.length ? "Tested: it showed an error" : `Tested: it showed ${RR.errors.length} errors`,
-         text: `${yR} and showed: ${RR.errors.join(" ")}`
+         title: 1 === rr.errors.length ? "Tested: it showed an error" : `Tested: it showed ${rr.errors.length} errors`,
+         text: `${Zr} and showed: ${rr.errors.join(" ")}`
```

#### 75. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L870` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L835) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L870)

```diff
-   38025: (RR, JR, GR) => {
+   38383: (rr, Sr, Qr) => {
```

#### 76. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L873` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L838) · [Before (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L873)

```diff
-       f: () => yR
+       d: () => Zr
```

#### 77. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L884` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L849) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L884)

```diff
-         label: `Code block at ${JR.join(", ")}`,
+         label: `Code block at ${Sr.join(", ")}`,
```

#### 78. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L891` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L856) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L891)

```diff
-   38016: (RR, JR, GR) => {
+   38374: (rr, Sr, Qr) => {
```

#### 79. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L893-L896` → after: `L858-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L858-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L858-L861) · [Before (L893-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L893-L896)

```diff
-       e: () => yR,
-       i: () => uR,
-       k: () => ZR,
-       n: () => tR
+       d: () => Zr,
+       f: () => ar,
+       j: () => jr,
+       m: () => Wr
```

#### 80. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L909` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L874) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L909)

```diff
-   37992: (RR, JR, GR) => {
+   38356: (rr, Sr, Qr) => {
```

#### 81. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L916-L918` → after: `L881-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L881-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L881-L883) · [Before (L916-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L916-L918)

```diff
-     var yR = GR(66),
-       tR = GR(46),
-       uR = GR(103);
+     var Zr = Qr(72),
+       Wr = Qr(43),
+       ar = Qr(109);
```

#### 82. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L925-L926` → after: `L890-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L890-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L890-L891) · [Before (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L925-L926)

```diff
-             const RR = tR.i.getItem(this.storageKey);
-             this.value = "boolean" === typeof RR ? RR : this.defaultValue
+             const rr = Wr.j.getItem(this.storageKey);
+             this.value = "boolean" === typeof rr ? rr : this.defaultValue
```

#### 83. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L930` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L895) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L930)

```diff
-           this.value = RR, tR.i.setItem(this.storageKey, RR);
+           this.value = rr, Wr.j.setItem(this.storageKey, rr);
```

#### 84. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L952` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L917) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L952)

```diff
-   37970: (RR, JR, GR) => {
+   38332: (rr, Sr, Qr) => {
```

#### 85. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L954` → after: `L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L919) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L954)

```diff
-       e: () => yR
+       c: () => Zr
```

#### 86. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L958` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L923) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L958)

```diff
-   37988: (RR, JR, GR) => {
+   38350: (rr, Sr, Qr) => {
```

#### 87. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L962-L963` → after: `L926-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L926-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L926-L928) · [Before (L962-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L962-L963)

```diff
-       E: () => pR,
-       I: () => wR,
+       F: () => qr,
+       G: () => Tr,
+       K: () => vr,
```

#### 88. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L971-L972` → after: `L933-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L933-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L933-L935) · [Before (L971-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L971-L972)

```diff
-       l: () => gR,
-       o: () => qR,
+       k: () => Lr,
+       n: () => Ir,
+       q: () => pr,
```

#### 89. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L974-L975` → after: `L937-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L937-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L937-L940) · [Before (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L974-L975)

```diff
-       t: () => rR,
-       x: () => LR
+       u: () => hr,
+       w: () => er,
+       x: () => lr,
+       z: () => Or
```

#### 90. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L977-L978` → after: `L942-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L942-L943) · [Before (L977-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L977-L978)

```diff
-     var yR = GR(3458),
-       tR = GR(37984);
+     var Zr = Qr(3396),
+       Wr = Qr(38344);
```

#### 91. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L984` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L949) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L984)

```diff
-       return `${RR}::${JR}`
+       return `${rr}::${Sr}`
```

#### 92. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1002` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L967) · [Before (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1002)

```diff
-           JR(null !== (RR = GR.error) && void 0 !== RR ? RR : new Error("Failed to open directory sync IndexedDB"))
+           Sr(null !== (rr = Qr.error) && void 0 !== rr ? rr : new Error("Failed to open directory sync IndexedDB"))
```

#### 93. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1015` → after: `L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L980) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1015)

```diff
-             tR(null !== (RR = uR.error) && void 0 !== RR ? RR : new Error("Failed to store directory handle"))
+             Wr(null !== (rr = ar.error) && void 0 !== rr ? rr : new Error("Failed to store directory handle"))
```

#### 94. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1029` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L994) · [Before (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1029)

```diff
-             GR(null !== (RR = tR.result) && void 0 !== RR ? RR : null)
+             Qr(null !== (rr = Wr.result) && void 0 !== rr ? rr : null)
```

#### 95. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1032` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L997) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1032)

```diff
-             yR(null !== (RR = tR.error) && void 0 !== RR ? RR : new Error("Failed to load directory handle"))
+             Zr(null !== (rr = Wr.error) && void 0 !== rr ? rr : new Error("Failed to load directory handle"))
```

#### 96. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1048` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1013) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1048)

```diff
-             yR(null !== (RR = tR.error) && void 0 !== RR ? RR : new Error("Failed to clear directory handle"))
+             Zr(null !== (rr = Wr.error) && void 0 !== rr ? rr : new Error("Failed to clear directory handle"))
```

#### 97. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1091` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1056) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1091)

```diff
-           const RR = JR ? `${JR}/${uR}` : uR;
+           const rr = Sr ? `${Sr}/${ar}` : ar;
```

#### 98. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1096-L1097` → after: `L1061-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1061-L1062) · [Before (L1096-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1096-L1097)

```diff
-         const RR = JR ? `${JR}/${uR}` : uR;
-         if (!(0, yR.o)(RR) && !(0, tR.e)(RR)) continue;
+         const rr = Sr ? `${Sr}/${ar}` : ar;
+         if (!(0, Zr.p)(rr) && !(0, Wr.d)(rr)) continue;
```

#### 99. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1099` → after: `L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1064) · [Before (L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1099)

```diff
-         GR[RR] = (0, tR.e)(RR) ? await vR(qR) : await qR.text()
+         Qr[rr] = (0, Wr.d)(rr) ? await Xr(Ir) : await Ir.text()
```

#### 100. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1123` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1088) · [Before (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1123)

```diff
-       if (!CR(JR)) throw new Error(`Refusing to write unsafe path: ${JR}`);
+       if (!Kr(Sr)) throw new Error(`Refusing to write unsafe path: ${Sr}`);
```

#### 101. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1149-L1151` → after: `L1114-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1114-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1114-L1116) · [Before (L1149-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1149-L1151)

```diff
-       if (!(0, yR.o)(JR) && !(0, tR.e)(JR)) throw new Error(`Refusing to write non-allowlisted path: ${JR}`);
-       if ((0, tR.e)(JR)) {
-         if (await OR(RR, JR) === qR) throw new Error(`Move the binary schematic ${JR} outside the linked folder before syncing its placeholder`)
+       if (!(0, Zr.p)(Sr) && !(0, Wr.d)(Sr)) throw new Error(`Refusing to write non-allowlisted path: ${Sr}`);
+       if ((0, Wr.d)(Sr)) {
+         if (await Pr(rr, Sr) === Ir) throw new Error(`Move the binary schematic ${Sr} outside the linked folder before syncing its placeholder`)
```

#### 102. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1156` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1121) · [Before (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1156)

```diff
-       if (!CR(JR)) throw new Error(`Refusing to remove unsafe path: ${JR}`);
+       if (!Kr(Sr)) throw new Error(`Refusing to remove unsafe path: ${Sr}`);
```

#### 103. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1181-L1183` → after: `L1146-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1146-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1146-L1148) · [Before (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1181-L1183)

```diff
-       if ((0, yR.o)(JR) || (0, tR.e)(JR)) {
-         if ((0, tR.e)(JR)) {
-           if (await OR(RR, JR) === qR) throw new Error(`Refusing to remove a binary schematic: ${JR}`)
+       if ((0, Zr.p)(Sr) || (0, Wr.d)(Sr)) {
+         if ((0, Wr.d)(Sr)) {
+           if (await Pr(rr, Sr) === Ir) throw new Error(`Refusing to remove a binary schematic: ${Sr}`)
```

#### 104. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1194` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1159) · [Before (L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1194)

```diff
-       })) ? qR : JR
+       })) ? Ir : Sr
```

#### 105. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1210-L1211` → after: `L1175-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1175-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1175-L1176) · [Before (L1210-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1210-L1211)

```diff
-       for (const yR of Object.keys(GR)) yR in JR || (0, tR.e)(yR) || await bR(RR, yR);
-       for (const [uR, ZR] of Object.entries(JR))((0, yR.o)(uR) || (0, tR.e)(uR)) && await lR(RR, uR, ZR)
+       for (const Zr of Object.keys(Qr)) Zr in Sr || (0, Wr.d)(Zr) || await lr(rr, Zr);
+       for (const [ar, jr] of Object.entries(Sr))((0, Zr.p)(ar) || (0, Wr.d)(ar)) && await vr(rr, ar, jr)
```

#### 106. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1217-L1218` → after: `L1182-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1182-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1182-L1183) · [Before (L1217-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1217-L1218)

```diff
-       const uR = null !== (GR = tR.debounceMs) && void 0 !== GR ? GR : 300,
-         ZR = null !== (yR = tR.pollMs) && void 0 !== yR ? yR : 1e3;
+       const ar = null !== (Qr = Wr.debounceMs) && void 0 !== Qr ? Qr : 300,
+         jr = null !== (Zr = Wr.pollMs) && void 0 !== Zr ? Zr : 1e3;
```

#### 107. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1255` → after: `L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1220) · [Before (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1255)

```diff
-   37676: (RR, JR, GR) => {
+   38054: (rr, Sr, Qr) => {
```

#### 108. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1258-L1259` → after: `L1223-L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1223-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1223-L1224) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1258-L1259)

```diff
-       e: () => BR,
-       g: () => lR,
+       f: () => Tr,
+       h: () => vr,
```

#### 109. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1261` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1226) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1261)

```diff
-       n: () => MR
+       m: () => Br
```

#### 110. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1263-L1264` → after: `L1228-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1228-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1228-L1229) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1263-L1264)

```diff
-     var yR = GR(66),
-       tR = GR(1163),
+     var Zr = Qr(72),
+       Wr = Qr(1155),
```

#### 111. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1266-L1280` → after: `L1231-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1231-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1231-L1245) · [Before (L1266-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1266-L1280)

```diff
-       ZR = GR(4352),
-       qR = GR(359),
-       iR = GR(3465),
-       fR = GR(32),
-       VR = GR(2163),
-       KR = GR(46),
-       wR = GR(2173),
-       rR = GR(25),
-       eR = GR(2186),
-       aR = GR(1532),
-       LR = GR(10178),
-       nR = GR(2211),
-       UR = GR(1270),
-       WR = GR(37685),
-       AR = GR(1378);
+       jr = Qr(4302),
+       Ir = Qr(360),
+       fr = Qr(3404),
+       Er = Qr(34),
+       pr = Qr(2114),
+       xr = Qr(43),
+       mr = Qr(2128),
+       Nr = Qr(26),
+       Ur = Qr(2132),
+       tr = Qr(1518),
+       hr = Qr(9937),
+       zr = Qr(2154),
+       Yr = Qr(1251),
+       nr = Qr(38056),
+       er = Qr(1338);
```

#### 112. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1288` → after: `L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1253) · [Before (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1288)

```diff
-       } = (0, rR.o)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
+       } = (0, Nr.n)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
```

#### 113. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1318` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1283) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1318)

```diff
-       } = (0, rR.o)(["isTouchScreen"]), JR = (0, aR.s)();
+       } = (0, Nr.n)(["isTouchScreen"]), Sr = (0, tr.z)();
```

#### 114. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1320` → after: `L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1285) · [Before (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1320)

```diff
-       const GR = (0, iR.f)("showBasicMovementControls"),
+       const Qr = (0, fr.l)("showBasicMovementControls"),
```

#### 115. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1331` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1296) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1331)

```diff
-       const nR = KR.i.getItem(qR.Eb) > 2,
+       const zr = xr.j.getItem(Ir.Ib) > 2,
```

#### 116. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1335` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1300) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1335)

```diff
-       (0, WR.f)(!nR && !LR && UR, BR), (0, WR.f)(!nR && !LR && CR);
+       (0, nr.h)(!zr && !hr && Yr, Tr), (0, nr.h)(!zr && !hr && Kr);
```

#### 117. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1338` → after: `L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1303) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1338)

```diff
-         vR && !LR && fR.n.JK("controlsTutorialShown", "movement")
+         Xr && !hr && Er.i.Jp("controlsTutorialShown", "movement")
```

#### 118. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1363` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1328) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1363)

```diff
-       const RR = (0, aR.s)();
+       const rr = (0, tr.z)();
```

#### 119. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1397` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1362) · [Before (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1397)

```diff
-       } = (0, UR.A)(), yR = (0, iR.f)("useInventory");
+       } = (0, Yr.E)(), Zr = (0, fr.l)("useInventory");
```

#### 120. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1440` → after: `L1405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1405) · [Before (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1440)

```diff
-       } = (0, rR.o)(["isTouchScreen"]), tR = (0, aR.s)(), uR = (0, nR.c)("OpenShop"), [ZR, qR] = (0, yR.useState)(!1), eR = `SeenShopControls|${(0,wR.e)("connectedGame",(RR=>RR.gameNameWithVariation))}`, UR = () => (!(0, aR.j)() || null !== (0, LR.e)("OpenShop")) && !KR.i.getItem … [truncated]
+       } = (0, Nr.n)(["isTouchScreen"]), Wr = (0, tr.z)(), ar = (0, zr.c)("OpenShop"), [jr, Ir] = (0, Zr.useState)(!1), Ur = `SeenShopControls|${(0,mr.f)("connectedGame",(rr=>rr.gameNameWithVariation))}`, Yr = () => (!(0, tr.j)() || null !== (0, hr.d)("OpenShop")) && !xr.j.getItem … [truncated]
```

#### 121. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1445` → after: `L1410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1410) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1445)

```diff
-         const JR = fR.n.subscribe("showShopTutorial", (() => {
+         const Sr = Er.i.subscribe("showShopTutorial", (() => {
```

#### 122. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1449` → after: `L1414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1414) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1449)

```diff
-           clearTimeout(RR), fR.n.unsubscribe(JR)
+           clearTimeout(rr), Er.i.unsubscribe(Sr)
```

#### 123. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1453` → after: `L1418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1418) · [Before (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1453)

```diff
-       return (0, iR.e)("currencyAmounts", (RR => {
+       return (0, fr.h)("currencyAmounts", (rr => {
```

#### 124. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1456` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1421) · [Before (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1456)

```diff
-           const yR = VR.c.get("shopInfo");
+           const Zr = pr.d.get("shopInfo");
```

#### 125. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1481` → after: `L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1446) · [Before (L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1481)

```diff
-   5712: (RR, JR, GR) => {
+   5642: (rr, Sr, Qr) => {
```

#### 126. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1483` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1448) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1483)

```diff
-       b: () => LR,
+       c: () => hr,
```

#### 127. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1486` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1451) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1486)

```diff
-     var yR = GR(1163),
+     var Zr = Qr(1155),
```

#### 128. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1488-L1494` → after: `L1453-L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1453-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1453-L1459) · [Before (L1488-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1488-L1494)

```diff
-       uR = GR(66),
-       ZR = GR(1270),
-       qR = GR(5719),
-       iR = GR(2105),
-       fR = GR(3465),
-       VR = GR(5728),
-       KR = GR(1378);
+       ar = Qr(72),
+       jr = Qr(1251),
+       Ir = Qr(5649),
+       fr = Qr(2057),
+       Er = Qr(3404),
+       pr = Qr(5658),
+       xr = Qr(1338);
```

#### 129. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1512` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1477) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1512)

```diff
-           "--word-delay": `${JR.delayMs}ms`
+           "--word-delay": `${Sr.delayMs}ms`
```

#### 130. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1514-L1515` → after: `L1479-L1480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1479-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1479-L1480) · [Before (L1514-L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1514-L1515)

```diff
-         children: (0, KR.jsx)(qR.b, {
-           text: "icon" === JR.kind ? `[[${JR.icon}]]` : JR.text
+         children: (0, xr.jsx)(Ir.e, {
+           text: "icon" === Sr.kind ? `[[${Sr.icon}]]` : Sr.text
```

#### 131. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1526` → after: `L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1491) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1526)

```diff
-       } = (0, ZR.A)(), yR = (0, uR.useMemo)((() => (0, VR.e)((0, VR.f)(JR).plan.pieces)), [JR, GR.code]);
+       } = (0, jr.E)(), Zr = (0, ar.useMemo)((() => (0, pr.d)((0, pr.h)(Sr).plan.pieces)), [Sr, Qr.code]);
```

#### 132. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1546` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1511) · [Before (L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1546)

```diff
-       const RR = (0, fR.f)("dialogue");
+       const rr = (0, Er.l)("dialogue");
```

#### 133. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1559` → after: `L1524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1524) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1559)

```diff
-   37838: (RR, JR, GR) => {
+   38197: (rr, Sr, Qr) => {
```

#### 134. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1561-L1562` → after: `L1526-L1527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1526-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1526-L1527) · [Before (L1561-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1561-L1562)

```diff
-       b: () => aR,
-       c: () => LR
+       e: () => tr,
+       f: () => hr
```

#### 135. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1564-L1569` → after: `L1529-L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1529-L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1529-L1534) · [Before (L1564-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1564-L1569)

```diff
-     var yR = GR(66),
-       tR = GR(1581),
-       uR = GR(2173),
-       ZR = GR(37829),
-       qR = GR(679),
-       iR = GR(1163),
+     var Zr = Qr(72),
+       Wr = Qr(1573),
+       ar = Qr(2128),
+       jr = Qr(38193),
+       Ir = Qr(688),
+       fr = Qr(1155),
```

#### 136. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1571` → after: `L1536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1536) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1571)

```diff
-       VR = GR(1378);
+       pr = Qr(1338);
```

#### 137. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1578` → after: `L1543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1543) · [Before (L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1578)

```diff
-         sE: null,
+         Vk: null,
```

#### 138. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1589` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1554) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1589)

```diff
-       clearTimeout(RR.timeout), RR.source = null, RR.direction = null, RR.writtenAngle = null, RR.sE && (RR.sE.style.rotate = "")
+       clearTimeout(rr.timeout), rr.source = null, rr.direction = null, rr.writtenAngle = null, rr.Vk && (rr.Vk.style.rotate = "")
```

#### 139. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1593` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1558) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1593)

```diff
-       return (0, tR.f)("damagedByOtherPlayer", (JR => {
+       return (0, Wr.c)("damagedByOtherPlayer", (Sr => {
```

#### 140. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1595` → after: `L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1560) · [Before (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1595)

```diff
-           gt: GR,
+           BW: Qr,
```

#### 141. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1601` → after: `L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1566) · [Before (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1601)

```diff
-             const GR = null !== (JR = rR(RR)) && void 0 !== JR ? JR : KR.find((RR => null === RR.source));
+             const Qr = null !== (Sr = Nr(rr)) && void 0 !== Sr ? Sr : xr.find((rr => null === rr.source));
```

#### 142. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1606` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1571) · [Before (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1606)

```diff
-               sE: null,
+               Vk: null,
```

#### 143. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1615` → after: `L1580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1580) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1615)

```diff
-       })), (0, uR.c)("kill", (JR => {
+       })), (0, ar.d)("kill", (Sr => {
```

#### 144. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1631` → after: `L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1596) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1631)

```diff
-             RR.sE = JR
+             rr.Vk = Sr
```

#### 145. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1634` → after: `L1599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1599) · [Before (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1634)

```diff
-             DamageIndicatorFullCircle: (0, qR.I)(RR.direction),
+             DamageIndicatorFullCircle: (0, Ir.L)(rr.direction),
```

#### 146. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1643` → after: `L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1608) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1643)

```diff
-         if (null === JR.source || (0, qR.I)(JR.direction)) continue;
+         if (null === Sr.source || (0, Ir.L)(Sr.direction)) continue;
```

#### 147. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1645` → after: `L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1610) · [Before (L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1645)

```diff
-         GR !== JR.writtenAngle && (JR.writtenAngle = GR, JR.sE.style.rotate = `${GR}rad`)
+         Qr !== Sr.writtenAngle && (Sr.writtenAngle = Qr, Sr.Vk.style.rotate = `${Qr}rad`)
```

#### 148. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1649` → after: `L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1614) · [Before (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1649)

```diff
-   10143: (RR, JR, GR) => {
+   9901: (rr, Sr, Qr) => {
```

#### 149. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1651-L1653` → after: `L1616-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1616-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1616-L1618) · [Before (L1651-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1651-L1653)

```diff
-       d: () => xR,
-       g: () => gR,
-       k: () => bR
+       c: () => Hr,
+       f: () => Lr,
+       i: () => lr
```

#### 150. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1655-L1669` → after: `L1620-L1634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1620-L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1620-L1634) · [Before (L1655-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1655-L1669)

```diff
-     var yR = GR(66),
-       tR = GR(5347),
-       uR = GR(1196),
-       ZR = GR(1581),
-       qR = GR(32),
-       iR = GR(4733),
-       fR = GR(3180),
-       VR = GR(1336),
-       KR = GR(3644),
-       wR = GR(2134),
-       rR = GR(2173),
-       eR = GR(1270),
-       aR = GR(25),
-       LR = GR(1800),
-       nR = GR(1163),
+     var Zr = Qr(72),
+       Wr = Qr(5308),
+       ar = Qr(1181),
+       jr = Qr(1573),
+       Ir = Qr(34),
+       fr = Qr(4663),
+       Er = Qr(3148),
+       pr = Qr(1287),
+       xr = Qr(3601),
+       mr = Qr(2089),
+       Nr = Qr(2128),
+       Ur = Qr(1251),
+       tr = Qr(26),
+       hr = Qr(1758),
+       zr = Qr(1155),
```

#### 151. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1671-L1677` → after: `L1636-L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1636-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1636-L1642) · [Before (L1671-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1671-L1677)

```diff
-       WR = GR(10149),
-       AR = GR(10158),
-       CR = GR(10162),
-       XR = GR(10042),
-       MR = GR(10170),
-       BR = GR(4334),
-       lR = (GR(10175), GR(1378));
+       nr = Qr(9904),
+       er = Qr(9909),
+       Kr = Qr(9915),
+       yr = Qr(9813),
+       Br = Qr(9923),
+       Tr = Qr(4293),
+       vr = (Qr(9931), Qr(1338));
```

#### 152. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1689` → after: `L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1654) · [Before (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1689)

```diff
-       return "inGame" === aR.d.get("gameState") && !(0, LR.o)()
+       return "inGame" === tr.c.get("gameState") && !(0, hr.l)()
```

#### 153. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1693` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1658) · [Before (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1693)

```diff
-       return (0, AR.x)(RR, VR.p, AR.g, AR.k, AR.l)
+       return (0, er.q)(rr, pr.q, er.e, er.g, er.h)
```

#### 154. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1698` → after: `L1663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1663) · [Before (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1698)

```diff
-       } = (0, eR.A)(), {
+       } = (0, Ur.E)(), {
```

#### 155. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1700` → after: `L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1665) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1700)

```diff
-       } = (0, uR.d)(), [GR, aR] = (0, yR.useState)(null), [nR, gR] = (0, yR.useState)(null), bR = (0, yR.useRef)(null), xR = (0, yR.useCallback)((RR => {
+       } = (0, ar.c)(), [Qr, tr] = (0, Zr.useState)(null), [zr, Lr] = (0, Zr.useState)(null), lr = (0, Zr.useRef)(null), Hr = (0, Zr.useCallback)((rr => {
```

#### 156. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1707` → after: `L1672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1672) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1707)

```diff
-         for (let yR = 0; yR < VR.p; yR++) {
+         for (let Zr = 0; Zr < pr.q; Zr++) {
```

#### 157. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1709` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1674) · [Before (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1709)

```diff
-           JR.push(null !== (GR = RR[yR]) && void 0 !== GR ? GR : null)
+           Sr.push(null !== (Qr = rr[Zr]) && void 0 !== Qr ? Qr : null)
```

#### 158. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1712-L1714` → after: `L1677-L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1677-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1677-L1679) · [Before (L1712-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1712-L1714)

```diff
-       }((0, KR.h)(JR.getPlayerCosmetics().emote))), [JR, oR]);
-       (0, rR.c)("cosmeticsUpdated", (RR => {
-         RR.some((RR => RR.local && "emote" === RR.ft)) && cR((RR => RR + 1))
+       }((0, xr.i)(Sr.getPlayerCosmetics().emote))), [Sr, Cr]);
+       (0, Nr.d)("cosmeticsUpdated", (rr => {
+         rr.some((rr => rr.local && "emote" === rr.fW)) && Mr((rr => rr + 1))
```

#### 159. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1719` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1684) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1719)

```diff
-           "pad" === RR && (0, CR.g)(), IR.current = JR, HR.current = {
+           "pad" === rr && (0, Kr.c)(), kr.current = Sr, gr.current = {
```

#### 160. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1732` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1697) · [Before (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1732)

```diff
-           const JR = (0, fR.i)(RR),
+           const Sr = (0, Er.h)(rr),
```

#### 161. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1734` → after: `L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1699) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1734)

```diff
-             yR = GR ? 600 : Math.ceil(1e3 * JR.animation.animation_length / fR.b) + 200;
+             Zr = Qr ? 600 : Math.ceil(1e3 * Sr.animation.animation_length / Er.c) + 200;
```

#### 162. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1739` → after: `L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1704) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1739)

```diff
-       (0, ZR.f)("requestToggleEmoteWheel", (() => {
+       (0, jr.c)("requestToggleEmoteWheel", (() => {
```

#### 163. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1741-L1746` → after: `L1706-L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1706-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1706-L1711) · [Before (L1741-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1741-L1746)

```diff
-       })), (0, ZR.f)("requestEmoteWheelHoldOpen", (() => {
-         null === GR && vR() && mR((0, WR.b)() ? "hold" : "click")
-       })), (0, ZR.f)("requestEmoteWheelPadOpen", (RR => {
-         null !== GR || !vR() || (0, XR.e)() || (0, MR.n)() || mR("pad", RR)
-       })), (0, ZR.f)("requestEmoteRepeatLast", (() => {
-         if (null !== GR || !vR() || (0, XR.e)() || (0, MR.n)()) return;
+       })), (0, jr.c)("requestEmoteWheelHoldOpen", (() => {
+         null === Qr && Xr() && Ar((0, nr.c)() ? "hold" : "click")
+       })), (0, jr.c)("requestEmoteWheelPadOpen", (rr => {
+         null !== Qr || !Xr() || (0, yr.d)() || (0, Br.p)() || Ar("pad", rr)
+       })), (0, jr.c)("requestEmoteRepeatLast", (() => {
+         if (null !== Qr || !Xr() || (0, yr.d)() || (0, Br.p)()) return;
```

#### 164. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1755` → after: `L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1720) · [Before (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1755)

```diff
-       (0, ZR.f)("emoteWheelPadAim", (RR => {
+       (0, jr.c)("emoteWheelPadAim", (rr => {
```

#### 165. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1757-L1759` → after: `L1722-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1722-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1722-L1724) · [Before (L1757-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1757-L1759)

```diff
-         const JR = (0, AR.J)(RR, VR.p, bR.current);
-         xR(null !== JR && null !== PR[JR] ? JR : null)
-       })), (0, ZR.f)("requestEmoteWheelPadCommit", (RR => {
+         const Sr = (0, er.E)(rr, pr.q, lr.current);
+         Hr(null !== Sr && null !== Gr[Sr] ? Sr : null)
+       })), (0, jr.c)("requestEmoteWheelPadCommit", (rr => {
```

#### 166. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1761` → after: `L1726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1726) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1761)

```diff
-       })), (0, ZR.f)("appManagerUpdated|activeInputDevice", (RR => {
+       })), (0, jr.c)("appManagerUpdated|activeInputDevice", (rr => {
```

#### 167. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1763-L1765` → after: `L1728-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1728-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1728-L1730) · [Before (L1763-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1763-L1765)

```diff
-       })), (0, yR.useLayoutEffect)((() => (pR = GR, (0, iR.w)("emoteWheel", "pad" === GR), qR.n.JK(iR.q), () => {
-         pR = null, (0, iR.w)("emoteWheel", !1), qR.n.JK(iR.q)
-       })), [GR]), (0, ZR.f)("requestEmoteWheelHoldRelease", (() => {
+       })), (0, Zr.useLayoutEffect)((() => (Or = Qr, (0, fr.s)("emoteWheel", "pad" === Qr), Ir.i.Jp(fr.m), () => {
+         Or = null, (0, fr.s)("emoteWheel", !1), Ir.i.Jp(fr.m)
+       })), [Qr]), (0, jr.c)("requestEmoteWheelHoldRelease", (() => {
```

#### 168. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1767` → after: `L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1732) · [Before (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1767)

```diff
-       })), (0, ZR.f)("requestEmoteWheelClose", (() => {
+       })), (0, jr.c)("requestEmoteWheelClose", (() => {
```

#### 169. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1769` → after: `L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1734) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1769)

```diff
-       })), (0, ZR.f)("appManagerUpdated|gameState", (RR => {
+       })), (0, jr.c)("appManagerUpdated|gameState", (rr => {
```

#### 170. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1773` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1738) · [Before (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1773)

```diff
-         (0, LR.o)() && zR()
+         (0, hr.l)() && Vr()
```

#### 171. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1775` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1740) · [Before (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1775)

```diff
-       if ((0, ZR.f)("appManagerUpdated|openEverythingMenuName", dR), (0, ZR.f)("appManagerUpdated|openInGameMenuName", dR), (0, ZR.f)("pointerLockUpdate", (RR => {
+       if ((0, jr.c)("appManagerUpdated|openEverythingMenuName", cr), (0, jr.c)("appManagerUpdated|openInGameMenuName", cr), (0, jr.c)("pointerLockUpdate", (rr => {
```

#### 172. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1785` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1750) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1785)

```diff
-         }), [GR, zR]), (0, tR.d)(!0, "click" === GR, "EmoteWheelOverlay"), (0, yR.useEffect)((() => {
+         }), [Qr, Vr]), (0, Wr.b)(!0, "click" === Qr, "EmoteWheelOverlay"), (0, Zr.useEffect)((() => {
```

#### 173. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1792-L1793` → after: `L1757-L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1757-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1757-L1758) · [Before (L1792-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1792-L1793)

```diff
-             JR = AR.u * RR,
-             yR = AR.q * RR,
+             Sr = er.p * rr,
+             Zr = er.m * rr,
```

#### 174. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1807` → after: `L1772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1772) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1807)

```diff
-                 const tR = (0, AR.B)(RR, JR, VR.p);
+                 const Wr = (0, er.u)(rr, Sr, pr.q);
```

#### 175. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1817` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1782) · [Before (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1817)

```diff
-         kR = null !== YR ? (0, fR.i)(YR).displayName : RR("emotes:pickEmote");
+         br = null !== or ? (0, Er.h)(or).displayName : rr("emotes:pickEmote");
```

#### 176. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1828-L1829` → after: `L1793-L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1793-L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1793-L1794) · [Before (L1828-L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1828-L1829)

```diff
-             width: 2 * AR.u + "rem",
-             height: 2 * AR.u + "rem"
+             width: 2 * er.p + "rem",
+             height: 2 * er.p + "rem"
```

#### 177. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1833` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1798) · [Before (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1833)

```diff
-             viewBox: `0 0 ${AR.n} ${AR.n}`,
+             viewBox: `0 0 ${er.l} ${er.l}`,
```

#### 178. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1848` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1813) · [Before (L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1848)

```diff
-                 "aria-label": null !== JR ? (0, fR.i)(JR).displayName : RR("emotes:emptySlot")
+                 "aria-label": null !== Sr ? (0, Er.h)(Sr).displayName : rr("emotes:emptySlot")
```

#### 179. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1852-L1854` → after: `L1817-L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1817-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1817-L1819) · [Before (L1852-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1852-L1854)

```diff
-               cx: AR.g,
-               cy: AR.g,
-               r: AR.l
+               cx: er.e,
+               cy: er.e,
+               r: er.h
```

#### 180. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1857-L1859` → after: `L1822-L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1822-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1822-L1824) · [Before (L1857-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1857-L1859)

```diff
-               cx: AR.g,
-               cy: AR.g,
-               r: AR.k
+               cx: er.e,
+               cy: er.e,
+               r: er.g
```

#### 181. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1867-L1869` → after: `L1832-L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1832-L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1832-L1834) · [Before (L1867-L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1867-L1869)

```diff
-               tR = (0, AR.F)(JR, VR.p),
-               uR = AR.e * Math.cos(tR),
-               ZR = AR.e * Math.sin(tR);
+               Wr = (0, er.x)(Sr, pr.q),
+               ar = er.d * Math.cos(Wr),
+               jr = er.d * Math.sin(Wr);
```

#### 182. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1876-L1878` → after: `L1841-L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1841-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1841-L1843) · [Before (L1876-L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1876-L1878)

```diff
-                 left: `calc(50% + ${uR}rem)`,
-                 top: `calc(50% + ${ZR}rem)`,
-                 backgroundImage: GR ? `url(${(0,BR.h)("emote",RR)})` : void 0
+                 left: `calc(50% + ${ar}rem)`,
+                 top: `calc(50% + ${jr}rem)`,
+                 backgroundImage: Qr ? `url(${(0,Tr.d)("emote",rr)})` : void 0
```

#### 183. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1890` → after: `L1855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1855) · [Before (L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1890)

```diff
-   37742: (RR, JR, GR) => {
+   38103: (rr, Sr, Qr) => {
```

#### 184. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1892` → after: `L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1857) · [Before (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1892)

```diff
-       e: () => LR
+       d: () => hr
```

#### 185. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1894-L1897` → after: `L1859-L1862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1859-L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1859-L1862) · [Before (L1894-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1894-L1897)

```diff
-     var yR = GR(66),
-       tR = GR(83),
-       uR = GR(1270),
-       ZR = GR(1163),
+     var Zr = Qr(72),
+       Wr = Qr(92),
+       ar = Qr(1251),
+       jr = Qr(1155),
```

#### 186. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1899-L1905` → after: `L1864-L1870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1864-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1864-L1870) · [Before (L1899-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1899-L1905)

```diff
-       iR = GR(1943),
-       fR = GR(1468),
-       VR = GR(1366),
-       KR = GR(1618),
-       wR = GR(1850),
-       rR = GR(1614),
-       eR = GR(1378);
+       fr = Qr(1885),
+       Er = Qr(1448),
+       pr = Qr(1330),
+       xr = Qr(1605),
+       mr = Qr(1793),
+       Nr = Qr(1597),
+       Ur = Qr(1338);
```

#### 187. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1916` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1881) · [Before (L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1916)

```diff
-       } = (0, uR.A)(), [nR, UR] = (0, yR.useState)(!1), [WR, AR] = (0, yR.useState)({
+       } = (0, ar.E)(), [zr, Yr] = (0, Zr.useState)(!1), [nr, er] = (0, Zr.useState)({
```

#### 188. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1929` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1894) · [Before (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1929)

```diff
-             if (null === RR || !(0, rR.e)(RR, JR)) return;
+             if (null === rr || !(0, Nr.c)(rr, Sr)) return;
```

#### 189. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1946` → after: `L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1911) · [Before (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1946)

```diff
-         if (nR) return (0, wR.c)("pointerdown", (RR => {
+         if (zr) return (0, mr.b)("pointerdown", (rr => {
```

#### 190. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1967` → after: `L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1932) · [Before (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1967)

```diff
-           width: `${aR}rem`,
+           width: `${tr}rem`,
```

#### 191. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1984` → after: `L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1949) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1984)

```diff
-             children: [(0, eR.jsx)(fR.d, {
+             children: [(0, Ur.jsx)(Er.c, {
```

#### 192. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1993` → after: `L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1958) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1993)

```diff
-         return null !== (RR = document.querySelector(".WholeAppWrapperInner")) && void 0 !== RR ? RR : document.body
+         return null !== (rr = document.querySelector(".WholeAppWrapperInner")) && void 0 !== rr ? rr : document.body
```

#### 193. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L1997` → after: `L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1962) · [Before (L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L1997)

```diff
-   37854: (RR, JR, GR) => {
+   38223: (rr, Sr, Qr) => {
```

#### 194. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2001-L2008` → after: `L1966-L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1966-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1966-L1973) · [Before (L2001-L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2001-L2008)

```diff
-     var yR = GR(37796),
-       tR = GR(66),
-       uR = GR(2278),
-       ZR = GR(5338),
-       qR = GR(5343),
-       iR = GR(3465),
-       fR = GR(2134),
-       VR = GR(1378);
+     var Zr = Qr(38154),
+       Wr = Qr(72),
+       ar = Qr(2228),
+       jr = Qr(5297),
+       Ir = Qr(5301),
+       fr = Qr(3404),
+       Er = Qr(2089),
+       pr = Qr(1338);
```

#### 195. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2019` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1984) · [Before (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2019)

```diff
-       const ZR = window.innerWidth * (yR / 100) > tR ? `${tR}px` : `${yR}vw`;
+       const jr = window.innerWidth * (Zr / 100) > Wr ? `${Wr}px` : `${Zr}vw`;
```

#### 196. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2029-L2033` → after: `L1994-L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L1994-L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L1994-L1998) · [Before (L2029-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2029-L2033)

```diff
-     var wR = GR(37857),
-       rR = GR(1590),
-       eR = GR(32),
-       aR = GR(2163),
-       LR = GR(1468);
+     var mr = Qr(38230),
+       Nr = Qr(1576),
+       Ur = Qr(34),
+       tr = Qr(2114),
+       hr = Qr(1448);
```

#### 197. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2076` → after: `L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2041) · [Before (L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2076)

```diff
-             children: `${JR.progress}/${JR.goal}`
+             children: `${Sr.progress}/${Sr.goal}`
```

#### 198. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2078` → after: `L2043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2043) · [Before (L2078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2078)

```diff
-         }) : (0, VR.jsx)(rR.n, {
+         }) : (0, pr.jsx)(Nr.p, {
```

#### 199. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2115` → after: `L2080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2080) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2115)

```diff
-       const KR = (0, iR.f)("currencyAmounts");
+       const xr = (0, fr.l)("currencyAmounts");
```

#### 200. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2123` → after: `L2088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2088) · [Before (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2123)

```diff
-                 ...aR.c.get("currencyAmounts")
+                 ...tr.d.get("currencyAmounts")
```

#### 201. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2129` → after: `L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2094) · [Before (L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2129)

```diff
-               aR.c.apply({
+               tr.d.apply({
```

#### 202. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2138` → after: `L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2103) · [Before (L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2138)

```diff
-           src: `/textures/miscImages/Treasure Chest ${"closed"!==ZR?"open":"closed"}.png`
+           src: `/textures/miscImages/Treasure Chest ${"closed"!==jr?"open":"closed"}.png`
```

#### 203. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2145` → after: `L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2110) · [Before (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2145)

```diff
-               children: [(0, VR.jsx)(LR.d, {
+               children: [(0, pr.jsx)(hr.c, {
```

#### 204. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2172` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2137) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2172)

```diff
-         }).map(((JR, GR) => (0, VR.jsx)(LR.d, {
+         }).map(((Sr, Qr) => (0, pr.jsx)(hr.c, {
```

#### 205. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2183` → after: `L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2148) · [Before (L2183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2183)

```diff
-     eR.n.subscribe("requiredLibrariesLoaded", (() => {
+     Ur.i.subscribe("requiredLibrariesLoaded", (() => {
```

#### 206. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2190-L2196` → after: `L2155-L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2155-L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2155-L2161) · [Before (L2190-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2190-L2196)

```diff
-     var CR = GR(4375),
-       XR = GR(1196),
-       MR = GR(2105),
-       BR = GR(1581),
-       lR = GR(377),
-       pR = GR(2173),
-       gR = GR(1465);
+     var Kr = Qr(4323),
+       yr = Qr(1181),
+       Br = Qr(2057),
+       Tr = Qr(1573),
+       vr = Qr(379),
+       Or = Qr(2128),
+       Lr = Qr(1444);
```

#### 207. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2204` → after: `L2169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2169) · [Before (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2204)

```diff
-       return null === tR ? null : null !== (JR = null === (GR = yR[tR]) || void 0 === GR ? void 0 : GR.name) && void 0 !== JR ? JR : null
+       return null === Wr ? null : null !== (Sr = null === (Qr = Zr[Wr]) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : null
```

#### 208. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2214` → after: `L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2179) · [Before (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2214)

```diff
-       } = (0, XR.d)(), uR = (0, pR.e)("players", bR), [ZR, qR] = (0, tR.useState)(GR.selectedCat || (null === JR || void 0 === JR ? void 0 : JR[0]) || null), [iR, KR] = (0, tR.useState)(GR.selectedTimeframe || "Today"), [wR, rR] = (0, tR.useState)(null);
+       } = (0, yr.c)(), ar = (0, Or.f)("players", lr), [jr, Ir] = (0, Wr.useState)(Qr.selectedCat || (null === Sr || void 0 === Sr ? void 0 : Sr[0]) || null), [fr, xr] = (0, Wr.useState)(Qr.selectedTimeframe || "Today"), [mr, Nr] = (0, Wr.useState)(null);
```

#### 209. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2235` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2200) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2235)

```diff
-       }), [wR, eR]), (0, BR.f)("leaderboardResponse", (RR => {
+       }), [mr, Ur]), (0, Tr.c)("leaderboardResponse", (rr => {
```

#### 210. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2274` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2239) · [Before (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2274)

```diff
-             children: (0, VR.jsx)(CR.e, {
+             children: (0, pr.jsx)(Kr.c, {
```

#### 211. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2289-L2290` → after: `L2254-L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2254-L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2254-L2255) · [Before (L2289-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2289-L2290)

```diff
-             children: (0, VR.jsx)(CR.e, {
-               options: lR.Lc.map((RR => ({
+             children: (0, pr.jsx)(Kr.c, {
+               options: vr.Ic.map((rr => ({
```

#### 212. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2314` → after: `L2279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2279) · [Before (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2314)

```diff
-             children: (0, VR.jsx)(gR.d, {})
+             children: (0, pr.jsx)(Lr.c, {})
```

#### 213. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2338` → after: `L2303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2303) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2338)

```diff
-                     children: `#${RR.place}`
+                     children: `#${rr.place}`
```

#### 214. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2364` → after: `L2329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2329) · [Before (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2364)

```diff
-                 children: `${NR} Place${NR>1?"s":""}`
+                 children: `${qr} Place${qr>1?"s":""}`
```

#### 215. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2380-L2383` → after: `L2345-L2348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2345-L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2345-L2348) · [Before (L2380-L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2380-L2383)

```diff
-     var OR = GR(4352),
-       xR = GR(103),
-       NR = GR(46),
-       DR = GR(4728);
+     var Pr = Qr(4302),
+       Hr = Qr(109),
+       qr = Qr(43),
+       Rr = Qr(4656);
```

#### 216. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2390-L2391` → after: `L2355-L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2355-L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2355-L2356) · [Before (L2390-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2390-L2391)

```diff
-       const yR = (0, iR.f)("_tasks"),
-         uR = (0, iR.f)("_availableLeaderboards"),
+       const Zr = (0, fr.l)("_tasks"),
+         ar = (0, fr.l)("_availableLeaderboards"),
```

#### 217. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2429` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2394) · [Before (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2429)

```diff
-       }), [eR()]), (0, qR.d)(!0, aR && JR), (0, tR.useEffect)((() => {
+       }), [Ur()]), (0, Ir.e)(!0, tr && Sr), (0, Wr.useEffect)((() => {
```

#### 218. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2438` → after: `L2403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2403) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2438)

```diff
-         children: aR ? (0, VR.jsx)(DR.d, {
+         children: tr ? (0, pr.jsx)(Rr.e, {
```

#### 219. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2441` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2406) · [Before (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2441)

```diff
-           children: (0, VR.jsxs)(ZR.e, {
+           children: (0, pr.jsxs)(jr.b, {
```

#### 220. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2496` → after: `L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2461) · [Before (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2496)

```diff
-       const RR = (0, iR.f)("currencyAmounts");
+       const rr = (0, fr.l)("currencyAmounts");
```

#### 221. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2499` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2464) · [Before (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2499)

```diff
-         children: Object.keys(null !== RR && void 0 !== RR ? RR : {}).map((JR => {
+         children: Object.keys(null !== rr && void 0 !== rr ? rr : {}).map((Sr => {
```

#### 222. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2503` → after: `L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2468) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2503)

```diff
-             children: [(0, VR.jsx)(LR.d, {
+             children: [(0, pr.jsx)(hr.c, {
```

#### 223. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2527` → after: `L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2492) · [Before (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2527)

```diff
-         children: [(0, VR.jsx)(LR.d, {
+         children: [(0, pr.jsx)(hr.c, {
```

#### 224. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2532` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2497) · [Before (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2532)

```diff
-             NR.i.setItem("DiscordPressed", !0), fR.gameBridge.send("setServerCookie", {
+             qr.j.setItem("DiscordPressed", !0), Er.gameBridge.send("setServerCookie", {
```

#### 225. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2535` → after: `L2500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2500) · [Before (L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2535)

```diff
-             }), "joinDiscord" in JR && eR.n.JK("clientTaskProgress", {
+             }), "joinDiscord" in Sr && Ur.i.Jp("clientTaskProgress", {
```

#### 226. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2540` → after: `L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2505) · [Before (L2540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2540)

```diff
-         }), (0, VR.jsx)(uR.c, {})]
+         }), (0, pr.jsx)(ar.d, {})]
```

#### 227. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2543-L2565` → after: `L2508-L2530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2508-L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2508-L2530) · [Before (L2543-L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2543-L2565)

```diff
-     var IR = GR(25),
-       mR = GR(1800),
-       zR = GR(37722),
-       SR = GR(35044),
-       jR = GR(5425),
-       dR = GR(163),
-       ER = GR(1304),
-       YR = GR(1501),
-       kR = GR(3763),
-       QR = GR(1270),
-       FR = GR(1803),
-       TR = GR(3416),
-       sR = GR(3370),
-       hR = GR(2068),
-       RJ = GR(2242),
-       JJ = GR(1351),
- ... (7 more removed lines; see GitHub link above)
+     var kr = Qr(26),
+       Ar = Qr(1758),
+       Vr = Qr(38086),
+       ir = Qr(35347),
+       wr = Qr(5384),
+       cr = Qr(161),
+       Fr = Qr(1269),
+       or = Qr(1489),
+       br = Qr(3713),
+       Jr = Qr(1251),
+       Dr = Qr(1761),
+       dr = Qr(3366),
+       sr = Qr(3322),
+       ur = Qr(2015),
+       rS = Qr(2179),
+       SS = Qr(1317),
+ ... (7 more added lines; see GitHub link above)
```

#### 228. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2571` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2536) · [Before (L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2571)

```diff
-         mC: yR
+         zB: Zr
```

#### 229. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2575` → after: `L2540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2540) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2575)

```diff
-       } = (0, QR.A)(), ZR = (0, iJ.n)(iJ.l), [qR, iR] = (0, tR.useState)([]), fR = [], KR = (RR, JR) => {
+       } = (0, Jr.E)(), jr = (0, fS.q)(fS.l), [Ir, fr] = (0, Wr.useState)([]), Er = [], xr = (rr, Sr) => {
```

#### 230. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2577` → after: `L2542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2542) · [Before (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2577)

```diff
-         fR.length < 3 && !(0, tJ.n)(yR, RR.name) && fR.push({
+         Er.length < 3 && !(0, WS.m)(Zr, rr.name) && Er.push({
```

#### 231. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2582` → after: `L2547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2547) · [Before (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2582)

```diff
-       for (const tR of JR) KR((0, qJ.i)(tR.name, tR.cosmetics, tR.ranks), uR("worldSocial:inThisWorld"));
+       for (const Wr of Sr) xr((0, IS.g)(Wr.name, Wr.cosmetics, Wr.ranks), ar("worldSocial:inThisWorld"));
```

#### 232. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2608` → after: `L2573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2573) · [Before (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2608)

```diff
-             actions: (0, VR.jsx)(YR.h, {
+             actions: (0, pr.jsx)(or.f, {
```

#### 233. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2614` → after: `L2579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2579) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2614)

```diff
-               children: (0, VR.jsx)(rR.g, {
+               children: (0, pr.jsx)(Nr.h, {
```

#### 234. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2617` → after: `L2582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2582) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2617)

```diff
-                 ariaLabel: `${uR("recentPlayers:addFriend")} ${GR.name}`,
+                 ariaLabel: `${ar("recentPlayers:addFriend")} ${Qr.name}`,
```

#### 235. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2621` → after: `L2586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2586) · [Before (L2621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2621)

```diff
-                 children: (0, VR.jsx)(LR.d, {
+                 children: (0, pr.jsx)(hr.c, {
```

#### 236. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2626` → after: `L2591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2591) · [Before (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2626)

```diff
-           }, `suggestion:${GR.name}`)
+           }, `suggestion:${Qr.name}`)
```

#### 237. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2630-L2636` → after: `L2595-L2601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2595-L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2595-L2601) · [Before (L2630-L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2630-L2636)

```diff
-     var VJ = GR(37905),
-       KJ = GR(37911),
-       wJ = GR(1317),
-       rJ = GR(1642),
-       eJ = GR(2412),
-       aJ = GR(289),
-       LJ = GR(5416);
+     var pS = Qr(38272),
+       xS = Qr(38275),
+       mS = Qr(1279),
+       NS = Qr(1626),
+       US = Qr(2360),
+       tS = Qr(300),
+       hS = Qr(5371);
```

#### 238. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2644-L2645` → after: `L2609-L2610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2609-L2610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2609-L2610) · [Before (L2644-L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2644-L2645)

```diff
-       const GR = (0, wJ.hb)(RR);
-       return null !== JR && (0, wJ.hb)(JR) === GR || (0, LJ.b)().some((RR => (0, wJ.hb)(RR.name) === GR))
+       const Qr = (0, mS.ub)(rr);
+       return null !== Sr && (0, mS.ub)(Sr) === Qr || (0, hS.c)().some((rr => (0, mS.ub)(rr.name) === Qr))
```

#### 239. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2650` → after: `L2615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2615) · [Before (L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2650)

```diff
-       return `worldSocialSeen:${RR}`
+       return `worldSocialSeen:${rr}`
```

#### 240. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2654` → after: `L2619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2619) · [Before (L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2654)

```diff
-       return !RR || AJ.has(RR) || !0 === NR.i.getItem(CJ(RR))
+       return !rr || eS.has(rr) || !0 === qr.j.getItem(KS(rr))
```

#### 241. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2658` → after: `L2623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2623) · [Before (L2658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2658)

```diff
-       RR && !AJ.has(RR) && (AJ.add(RR), NR.i.setItem(CJ(RR), !0))
+       rr && !eS.has(rr) && (eS.add(rr), qr.j.setItem(KS(rr), !0))
```

#### 242. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2660-L2661` → after: `L2625-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2625-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2625-L2626) · [Before (L2660-L2661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2660-L2661)

```diff
-     var BJ = GR(3473),
-       lJ = GR(3479);
+     var TS = Qr(3416),
+       vS = Qr(3418);
```

#### 243. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2672` → after: `L2637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2637) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2672)

```diff
-       } = (0, pR.i)("connectedGame");
+       } = (0, Or.j)("connectedGame");
```

#### 244. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2678` → after: `L2643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2643) · [Before (L2678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2678)

```diff
-       }), [JR]), (0, VR.jsx)(ZR.e, {
+       }), [Sr]), (0, pr.jsx)(jr.b, {
```

#### 245. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2688` → after: `L2653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2653) · [Before (L2688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2688)

```diff
-           worldCode: null !== qR && void 0 !== qR ? qR : uR,
+           worldCode: null !== Ir && void 0 !== Ir ? Ir : ar,
```

#### 246. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2703` → after: `L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2668) · [Before (L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2703)

```diff
-       } = (0, QR.A)(), qR = (0, tR.useRef)(null), {
+       } = (0, Jr.E)(), Ir = (0, Wr.useRef)(null), {
```

#### 247. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2709` → after: `L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2674) · [Before (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2709)

```diff
-       } = (0, yJ.j)(GR), aR = (0, FR.k)(), nR = (0, pR.i)("players"), UR = (0, pR.i)("hiddenPlayerNames"), [WR, AR] = (0, tR.useState)([]), [CR, MR] = (0, tR.useState)([]), [BR, lR] = (0, tR.useState)(!1), bR = (0, BJ.c)(), vR = (0, tR.useMemo)((() => {
+       } = (0, ZS.i)(Qr), tr = (0, Dr.m)(), zr = (0, Or.j)("players"), Yr = (0, Or.j)("hiddenPlayerNames"), [nr, er] = (0, Wr.useState)([]), [Kr, Br] = (0, Wr.useState)([]), [Tr, vr] = (0, Wr.useState)(!1), lr = (0, TS.c)(), Xr = (0, Wr.useMemo)((() => {
```

#### 248. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2711` → after: `L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2676) · [Before (L2711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2711)

```diff
-         const GR = null === nR.localId ? null : null !== (RR = null === (JR = nR.byId[nR.localId]) || void 0 === JR ? void 0 : JR.name) && void 0 !== RR ? RR : null;
+         const Qr = null === zr.localId ? null : null !== (rr = null === (Sr = zr.byId[zr.localId]) || void 0 === Sr ? void 0 : Sr.name) && void 0 !== rr ? rr : null;
```

#### 249. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2720` → after: `L2685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2685) · [Before (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2720)

```diff
-       }), [nR]), OR = (0, tR.useMemo)((() => (0, tJ.j)(aR.friends, GR, vR.map((RR => RR.name)))), [aR.friends, GR, vR]), NR = xR.featureFlags.canSeeRealPlayerNames ? vR.filter((RR => null === (0, JJ.d)(RR.name, UR))) : [], DR = null !== iR && void 0 !== iR && iR.canManage ? iR :  … [truncated]
+       }), [zr]), Pr = (0, Wr.useMemo)((() => (0, WS.j)(tr.friends, Qr, Xr.map((rr => rr.name)))), [tr.friends, Qr, Xr]), qr = Hr.featureFlags.canSeeRealPlayerNames ? Xr.filter((rr => null === (0, SS.b)(rr.name, Yr))) : [], Rr = null !== fr && void 0 !== fr && fr.canManage ? fr :  … [truncated]
```

#### 250. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2722` → after: `L2687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2687) · [Before (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2722)

```diff
-       } = (0, XR.d)();
+       } = (0, yr.c)();
```

#### 251. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2728` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2693) · [Before (L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2728)

```diff
-       (0, tR.useEffect)((() => PR ? void 0 : hR.j.quietFriendAdded()), [PR]), (0, tR.useEffect)((() => hR.j.quietFriendRequests()), []);
+       (0, Wr.useEffect)((() => Gr ? void 0 : ur.h.quietFriendAdded()), [Gr]), (0, Wr.useEffect)((() => ur.h.quietFriendRequests()), []);
```

#### 252. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2735` → after: `L2700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2700) · [Before (L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2735)

```diff
-         null !== RR && void 0 !== RR && RR.contains(document.activeElement) || !JR && !GR || (0, zR.i)() || null === RR || void 0 === RR || RR.focus({
+         null !== rr && void 0 !== rr && rr.contains(document.activeElement) || !Sr && !Qr || (0, Vr.d)() || null === rr || void 0 === rr || rr.focus({
```

#### 253. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2749` → after: `L2714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2714) · [Before (L2749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2749)

```diff
-         aJ = WR.filter((RR => !(0, tJ.n)(eJ, RR))),
+         tS = nr.filter((rr => !(0, WS.m)(US, rr))),
```

#### 254. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2755` → after: `L2720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2720) · [Before (L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2755)

```diff
-           for (const GR of (0, tJ.r)(RR, jR.x)) {
+           for (const Qr of (0, WS.n)(rr, wr.w)) {
```

#### 255. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2758` → after: `L2723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2723) · [Before (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2758)

```diff
-               }, (RR => (0, tJ.x)(RR, GR, !0)), {
+               }, (rr => (0, WS.s)(rr, Qr, !0)), {
```

#### 256. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2765` → after: `L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2730) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2765)

```diff
-             on: (0, tJ.n)(DR.whitelist, RR),
+             on: (0, WS.m)(Rr.whitelist, rr),
```

#### 257. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2774` → after: `L2739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2739) · [Before (L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2774)

```diff
-               }, (GR => (0, tJ.x)(GR, [RR], JR)))
+               }, (Qr => (0, WS.s)(Qr, [rr], Sr)))
```

#### 258. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2783` → after: `L2748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2748) · [Before (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2783)

```diff
-           return (0, sR.b)(GR, RR, {
+           return (0, sr.e)(Qr, rr, {
```

#### 259. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2785` → after: `L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2750) · [Before (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2785)

```diff
-           }), "failed" !== GR.kind && ("sent" === GR.kind && AR((JR => (0, tJ.n)(JR, RR) ? JR : [...JR, RR])), cR && await AJ([RR]), !0)
+           }), "failed" !== Qr.kind && ("sent" === Qr.kind && er((Sr => (0, WS.m)(Sr, rr) ? Sr : [...Sr, rr])), Mr && await eS([rr]), !0)
```

#### 260. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2809` → after: `L2774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2774) · [Before (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2809)

```diff
-           children: (0, VR.jsx)(gR.d, {})
+           children: (0, pr.jsx)(Lr.c, {})
```

#### 261. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2811` → after: `L2776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2776) · [Before (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2811)

```diff
-           children: [(0, VR.jsx)(uJ.e, {
+           children: [(0, pr.jsx)(aS.b, {
```

#### 262. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2819` → after: `L2784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2784) · [Before (L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2819)

```diff
-           }), HR && null !== oR && (0, VR.jsx)(ZJ.e, {
+           }), gr && null !== Cr && (0, pr.jsx)(jS.c, {
```

#### 263. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2829` → after: `L2794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2794) · [Before (L2829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2829)

```diff
-                   yR = "whitelist" === RR && iR ? (0, tJ.f)(OR, JR, iR.whitelist) : [];
+                   Zr = "whitelist" === rr && fr ? (0, WS.g)(Pr, Sr, fr.whitelist) : [];
```

#### 264. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2842` → after: `L2807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2807) · [Before (L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2842)

```diff
-                 children: [(0, VR.jsx)(LR.d, {
+                 children: [(0, pr.jsx)(hr.c, {
```

#### 265. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2847` → after: `L2812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2812) · [Before (L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2847)

```diff
-                 children: [aR.requests.length, aR.requests.length === ER.n && (0, VR.jsx)("span", {
+                 children: [tr.requests.length, tr.requests.length === Fr.q && (0, pr.jsx)("span", {
```

#### 266. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2867` → after: `L2832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2832) · [Before (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2867)

```diff
-                   children: [(0, VR.jsx)(YR.h, {
+                   children: [(0, pr.jsx)(or.f, {
```

#### 267. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2873` → after: `L2838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2838) · [Before (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2873)

```diff
-                     children: (0, VR.jsx)(rR.g, {
+                     children: (0, pr.jsx)(Nr.h, {
```

#### 268. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2875` → after: `L2840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2840) · [Before (L2875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2875)

```diff
-                       ariaLabel: `${ZR("general:accept")} ${RR.name}`,
+                       ariaLabel: `${jr("general:accept")} ${rr.name}`,
```

#### 269. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2881` → after: `L2846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2846) · [Before (L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2881)

```diff
-                         (0, sR.f)(RR.name, !0, {
+                         (0, sr.i)(rr.name, !0, {
```

#### 270. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2885` → after: `L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2850) · [Before (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2885)

```diff
-                       children: (0, VR.jsx)(LR.d, {
+                       children: (0, pr.jsx)(hr.c, {
```

#### 271. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2889` → after: `L2854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2854) · [Before (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2889)

```diff
-                   }), (0, VR.jsx)(YR.h, {
+                   }), (0, pr.jsx)(or.f, {
```

#### 272. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2895` → after: `L2860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2860) · [Before (L2895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2895)

```diff
-                     children: (0, VR.jsx)(rR.i, {
+                     children: (0, pr.jsx)(Nr.k, {
```

#### 273. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2897` → after: `L2862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2862) · [Before (L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2897)

```diff
-                       ariaLabel: `${ZR("general:decline")} ${RR.name}`,
+                       ariaLabel: `${jr("general:decline")} ${rr.name}`,
```

#### 274. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2903` → after: `L2868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2868) · [Before (L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2903)

```diff
-                         (0, sR.f)(RR.name, !1, {
+                         (0, sr.i)(rr.name, !1, {
```

#### 275. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2907` → after: `L2872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2872) · [Before (L2907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2907)

```diff
-                       children: (0, VR.jsx)(LR.d, {
+                       children: (0, pr.jsx)(hr.c, {
```

#### 276. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2913` → after: `L2878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2878) · [Before (L2913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2913)

```diff
-               }, `incoming:${RR.name}`)))
+               }, `incoming:${rr.name}`)))
```

#### 277. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2919` → after: `L2884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2884) · [Before (L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2919)

```diff
-                 children: [(0, VR.jsx)(LR.d, {
+                 children: [(0, pr.jsx)(hr.c, {
```

#### 278. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2924` → after: `L2889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2889) · [Before (L2924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2924)

```diff
-             }), (0, VR.jsx)(VJ.b, {
+             }), (0, pr.jsx)(pS.d, {
```

#### 279. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2936` → after: `L2901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2901) · [Before (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2936)

```diff
-               children: (0, VR.jsx)(gR.d, {})
+               children: (0, pr.jsx)(Lr.c, {})
```

#### 280. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2942` → after: `L2907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2907) · [Before (L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2942)

```diff
-                   player: (0, qJ.i)(RR, null),
+                   player: (0, IS.g)(rr, null),
```

#### 281. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2944-L2945` → after: `L2909-L2910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2909-L2910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2909-L2910) · [Before (L2944-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2944-L2945)

```diff
-                   gK: CJ(RR)
-                 }, `request:${RR}`))), !PR && OR.map(((RR, JR) => (0, VR.jsx)(qJ.c, {
+                   lx: KS(rr)
+                 }, `request:${rr}`))), !Gr && Pr.map(((rr, Sr) => (0, pr.jsx)(IS.b, {
```

#### 282. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2948-L2949` → after: `L2913-L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2913-L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2913-L2914) · [Before (L2948-L2949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2948-L2949)

```diff
-                   gK: CJ(RR.friend.name),
-                   canInvite: (0, tJ.d)(iR) && "here" !== RR.place,
+                   lx: KS(rr.friend.name),
+                   canInvite: (0, WS.e)(fr) && "here" !== rr.place,
```

#### 283. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2961` → after: `L2926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2926) · [Before (L2961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2961)

```diff
-                       const yR = (0, tJ.t)(iR, RR);
+                       const Zr = (0, WS.r)(fr, rr);
```

#### 284. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2966` → after: `L2931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2931) · [Before (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2966)

```diff
-                       await (0, TR.h)(RR, "game", {
+                       await (0, dr.j)(rr, "game", {
```

#### 285. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2969` → after: `L2934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2934) · [Before (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2969)

```diff
-                       }) ? ((0, KJ.g)(GR, RR), setTimeout(JR, dR.t)) : JR()
+                       }) ? ((0, xS.e)(Qr, rr), setTimeout(Sr, cr.p)) : Sr()
```

#### 286. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2975` → after: `L2940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2940) · [Before (L2975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2975)

```diff
-                   mC: RR => XJ(RR, "suggestion")
+                   zB: rr => yS(rr, "suggestion")
```

#### 287. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2986` → after: `L2951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2951) · [Before (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2986)

```diff
-             (0, lJ.f)({
+             (0, vS.e)({
```

#### 288. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2991` → after: `L2956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2956) · [Before (L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2991)

```diff
-           children: [(0, VR.jsx)(LR.d, {
+           children: [(0, pr.jsx)(hr.c, {
```

#### 289. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L2997-L2998` → after: `L2962-L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2962-L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2962-L2963) · [Before (L2997-L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L2997-L2998)

```diff
-     var bJ = GR(3580),
-       vJ = GR(3468);
+     var lS = Qr(3501),
+       XS = Qr(3408);
```

#### 290. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3006` → after: `L2971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2971) · [Before (L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3006)

```diff
-       const uR = (0, pR.e)("connectedGame", (RR => (0, bJ.c)(RR) ? RR.lobbyName : null));
+       const ar = (0, Or.f)("connectedGame", (rr => (0, lS.b)(rr) ? rr.lobbyName : null));
```

#### 291. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3011` → after: `L2976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2976) · [Before (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3011)

```diff
-         } = (0, IR.o)(["gameEntrySource", "loadingOverlayVisible"]), {
+         } = (0, kr.n)(["gameEntrySource", "loadingOverlayVisible"]), {
```

#### 292. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3013` → after: `L2978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2978) · [Before (L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3013)

```diff
-         } = (0, XR.d)(), uR = (0, pR.i)("localPlayerAlive"), ZR = (0, pR.e)("players", (RR => null !== RR.localId && void 0 !== RR.byId[RR.localId])), qR = (0, vJ.n)(), iR = (0, tR.useRef)(null), fR = (0, tR.useRef)(null), VR = "worldCreation" === JR, KR = yR.whamm, wR = yR.getPe … [truncated]
+         } = (0, yr.c)(), ar = (0, Or.j)("localPlayerAlive"), jr = (0, Or.f)("players", (rr => null !== rr.localId && void 0 !== rr.byId[rr.localId])), Ir = (0, XS.j)(), fr = (0, Wr.useRef)(null), Er = (0, Wr.useRef)(null), pr = "worldCreation" === Sr, xr = Zr.whamm, mr = Zr.getPe … [truncated]
```

#### 293. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3016` → after: `L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2981) · [Before (L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3016)

```diff
-           null !== RR && (null === (JR = fR.current) || void 0 === JR ? void 0 : JR.lobbyName) !== RR && null !== HJ(RR, VR, KR, wR) && (fR.current = (0, yJ.g)(RR))
+           null !== rr && (null === (Sr = Er.current) || void 0 === Sr ? void 0 : Sr.lobbyName) !== rr && null !== gS(rr, pr, xr, mr) && (Er.current = (0, ZS.e)(rr))
```

#### 294. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3022` → after: `L2987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R2987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L2987) · [Before (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3022)

```diff
-             const yR = (null === (JR = fR.current) || void 0 === JR ? void 0 : JR.lobbyName) === RR ? fR.current : (0, yJ.g)(RR);
+             const Zr = (null === (Sr = Er.current) || void 0 === Sr ? void 0 : Sr.lobbyName) === rr ? Er.current : (0, ZS.e)(rr);
```

#### 295. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3040` → after: `L3005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3005) · [Before (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3040)

```diff
-                       const JR = aJ.c.world_social_popup_v1;
+                       const Sr = tS.e.world_social_popup_v1;
```

#### 296. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3043` → after: `L3008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3008) · [Before (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3043)

```diff
-                         value: `${JR}:${(0,eJ.d)()}:${RR}`
+                         value: `${Sr}:${(0,US.c)()}:${rr}`
```

#### 297. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3045` → after: `L3010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3010) · [Before (L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3045)

```diff
-                     }(JR) && ((0, yJ.d)(RR), eR.n.JK("toggleMenu", `inviteLink|${JR}`), "inviteLink" !== IR.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
+                     }(Sr) && ((0, ZS.b)(rr), Ur.i.Jp("toggleMenu", `inviteLink|${Sr}`), "inviteLink" !== kr.c.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
```

#### 298. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3063-L3064` → after: `L3028-L3029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3028-L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3028-L3029) · [Before (L3063-L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3063-L3064)

```diff
-         opener: UJ(yR) ? yR : "icon"
-       }) : (0, VR.jsx)(SR.e, {
+         opener: YS(Zr) ? Zr : "icon"
+       }) : (0, pr.jsx)(ir.c, {
```

#### 299. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3072` → after: `L3037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3037) · [Before (L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3072)

```diff
-       return xJ.has(RR) || !!NR.k.getItem(`worldSocialShown:${RR}`)
+       return HS.has(rr) || !!qr.n.getItem(`worldSocialShown:${rr}`)
```

#### 300. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3076` → after: `L3041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3041) · [Before (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3076)

```diff
-       xJ.add(RR), NR.k.setItem(`worldSocialShown:${RR}`, !0)
+       HS.add(rr), qr.n.setItem(`worldSocialShown:${rr}`, !0)
```

#### 301. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3106` → after: `L3071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3071) · [Before (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3106)

```diff
-       return "inGame" === IR.d.get("gameState") && fR.gameBridge.latest("connectedGame").lobbyName === RR
+       return "inGame" === kr.c.get("gameState") && Er.gameBridge.latest("connectedGame").lobbyName === rr
```

#### 302. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3110` → after: `L3075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3075) · [Before (L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3110)

```diff
-       return (0, zR.i)() || IR.d.get("loadingOverlayVisible") || (0, mR.o)()
+       return (0, Vr.d)() || kr.c.get("loadingOverlayVisible") || (0, Ar.l)()
```

#### 303. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3112-L3115` → after: `L3077-L3080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3077-L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3077-L3080) · [Before (L3112-L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3112-L3115)

```diff
-     var zJ = GR(37329),
-       SJ = GR(4428),
-       jJ = GR(2194),
-       dJ = GR(4422);
+     var VS = Qr(37701),
+       iS = Qr(4362),
+       wS = Qr(2135),
+       cS = Qr(4354);
```

#### 304. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3118` → after: `L3083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3083) · [Before (L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3118)

```diff
-       return dJ.b.overridesTexture(RR) ? dJ.b.getTexture(RR, JR).url : GR
+       return cS.d.overridesTexture(rr) ? cS.d.getTexture(rr, Sr).url : Qr
```

#### 305. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3120` → after: `L3085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3085) · [Before (L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3120)

```diff
-     var YJ = GR(11210);
+     var oS = Qr(10996);
```

#### 306. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3141` → after: `L3106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3106) · [Before (L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3141)

```diff
-             src: EJ("board_full", SJ.k.BLOCK, YJ),
+             src: FS("board_full", iS.e.BLOCK, oS),
```

#### 307. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3149-L3150` → after: `L3114-L3115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3114-L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3114-L3115) · [Before (L3149-L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3149-L3150)

```diff
-               fontSize: `${uR}rem`,
-               lineHeight: `${ZR}rem`
+               fontSize: `${ar}rem`,
+               lineHeight: `${jr}rem`
```

#### 308. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3175` → after: `L3140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3140) · [Before (L3175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3175)

```diff
-               }(RR), /^F\d+$/i.test(RR.code) && null !== (JR = jJ.t.OpenCodeEditor) && void 0 !== JR && JR.includes(RR.code) && GR())
+               }(rr), /^F\d+$/i.test(rr.code) && null !== (Sr = wS.q.OpenCodeEditor) && void 0 !== Sr && Sr.includes(rr.code) && Qr())
```

#### 309. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3187` → after: `L3152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3152) · [Before (L3187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3187)

```diff
-     var TJ = GR(1874);
+     var dS = Qr(1811);
```

#### 310. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3197-L3198` → after: `L3162-L3163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3162-L3163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3162-L3163) · [Before (L3197-L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3197-L3198)

```diff
-         }), WR = (RR, JR) => aR ? (0, zJ.o)(RR, JR, aR.width, aR.height) : (0, zJ.i)(RR, JR), AR = RR => {
-           KR(WR(iR, RR)), eR(RR), NR.i.setItem("lastBoardTextSize", RR)
+         }), nr = (rr, Sr) => tr ? (0, VS.n)(rr, Sr, tr.width, tr.height) : (0, VS.g)(rr, Sr), er = rr => {
+           xr(nr(fr, rr)), Ur(rr), qr.j.setItem("lastBoardTextSize", rr)
```

#### 311. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3203` → after: `L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3168) · [Before (L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3203)

```diff
-             Zi: (0, zJ.r)(nR.text),
+             Sf: (0, VS.s)(zr.text),
```

#### 312. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3207` → after: `L3172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3172) · [Before (L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3207)

```diff
-         (0, pR.c)("boardEditRequested", (RR => {
+         (0, Or.d)("boardEditRequested", (rr => {
```

#### 313. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3217` → after: `L3182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3182) · [Before (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3217)

```diff
-           const VR = null !== (tR = null !== (uR = RR.textSize) && void 0 !== uR ? uR : NR.i.getItem("lastBoardTextSize")) && void 0 !== tR ? tR : 0;
+           const pr = null !== (Wr = null !== (ar = rr.textSize) && void 0 !== ar ? ar : qr.j.getItem("lastBoardTextSize")) && void 0 !== Wr ? Wr : 0;
```

#### 314. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3221` → after: `L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3186) · [Before (L3221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3221)

```diff
-           }), NR.i.setItem("lastBoardTextSize", VR), GR()
+           }), qr.j.setItem("lastBoardTextSize", pr), Qr()
```

#### 315. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3224` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3189) · [Before (L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3224)

```diff
-         kJ(XR, JR), (0, TJ.t)(XR, {
+         bS(yr, Sr), (0, dS.n)(yr, {
```

#### 316. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3229` → after: `L3194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3194) · [Before (L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3229)

```diff
-             const GR = zJ.d[RR];
+             const Qr = VS.c[rr];
```

#### 317. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3234` → after: `L3199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3199) · [Before (L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3234)

```diff
-             } = (0, zJ.t)(JR.width, JR.height, RR);
+             } = (0, VS.u)(Sr.width, Sr.height, rr);
```

#### 318. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3238` → after: `L3203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3203) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3238)

```diff
-         return (0, VR.jsxs)(ZR.e, {
+         return (0, pr.jsxs)(jr.b, {
```

#### 319. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L3260` → after: `L3225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L3225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/101.js#L3225) · [Before (L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/101.js#L3260)

```diff
-             children: [(0, VR.jsx)(rR.g, {
+             children: [(0, pr.jsx)(Nr.h, {
```
