# Changed — Bundle Modifications Report (Part 001 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `1 / 104` (**438** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [Part 002 →](part-002.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/css/215.css` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/css/215.css` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e27308261a8e6b8cb358ecd2123f41110ba189343c3819f59251540734600c58)

#### 1. `bundles/bloxd.io/chunks/css/215.css` (Changed code · before: `L122-L128` → after: `L100-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e27308261a8e6b8cb358ecd2123f41110ba189343c3819f59251540734600c58R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e27308261a8e6b8cb358ecd2123f41110ba189343c3819f59251540734600c58) · [After (L100-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/215.css#L100-L125) · [Before (L122-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/215.css#L122-L128)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer {
-   align-items: stretch;
-   display: flex;
-   flex-direction: column
- }
- 
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload {
+ .CustomGamePlaceContainer {
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   padding-bottom: 1rem;
+   width: 100%;
+   z-index: 1
+ }
+ 
+ .CustomGamePlaceContainer .BackgroundImage {
+   -ms-interpolation-mode: nearest-neighbor;
+   background-position: 50%;
+   background-repeat: repeat;
+   background-size: 128rem;
+   filter: brightness(.32);
+   image-rendering: optimizeSpeed;
+ ... (10 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/215.css` (Changed code · before: `L130` → after: `L127-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e27308261a8e6b8cb358ecd2123f41110ba189343c3819f59251540734600c58R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e27308261a8e6b8cb358ecd2123f41110ba189343c3819f59251540734600c58) · [After (L127-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/215.css#L127-L157) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/215.css#L130)

```diff
-   border: 3px solid #303a59;
+   display: flex;
+   padding: .6rem .75rem
+ }
+ 
+ .CustomGamePlaceContainer .CustomGamePlaceHeaderContainer .BackButton {
+   font-size: 1.5rem;
+   padding-left: .3rem;
+   position: relative
+ }
+ 
+ @media(pointer:coarse) {
+   .CustomGamePlaceContainer .CustomGamePlaceHeaderContainer .BackButton:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
+   }
+ ... (15 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/css/215.css` (Changed code · before: `L132-L138` → after: `L159-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e27308261a8e6b8cb358ecd2123f41110ba189343c3819f59251540734600c58R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e27308261a8e6b8cb358ecd2123f41110ba189343c3819f59251540734600c58) · [After (L159-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/215.css#L159-L203) · [Before (L132-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/215.css#L132-L138)

```diff
-   border-bottom-left-radius: 0;
-   border-bottom-right-radius: 0;
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
-   height: 10rem;
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   min-width: 0;
+   outline: 1px solid color-mix(in srgb, var(--custom-game-place-tint) 85%, transparent);
+   padding: .5rem
+ }
+ 
+ .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelHeading {
+   font-size: inherit;
+   margin: 0
+ }
+ 
+ .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelTitle {
+   cursor: pointer;
+   gap: .25rem;
+ ... (29 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/css/215.css` (Changed code · before: `L140-L199` → after: `L205-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e27308261a8e6b8cb358ecd2123f41110ba189343c3819f59251540734600c58R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e27308261a8e6b8cb358ecd2123f41110ba189343c3819f59251540734600c58) · [After (L205-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/215.css#L205-L249) · [Before (L140-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/215.css#L140-L199)

```diff
-   padding: 2rem 1rem
- }
- 
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadIcon {
-   font-size: 3rem;
-   opacity: .4;
-   text-shadow: 0 0 0 #000;
-   transition: color .2s, opacity .3s
- }
- 
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadIcon.Active {
-   color: #4f94f1;
-   opacity: 1
- }
- 
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadIcon.Active.TooBig {
- ... (44 more removed lines; see GitHub link above)
+   line-height: 1.2;
+   min-height: 2rem;
+   text-align: center
+ }
+ 
+ .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelGames {
+   grid-gap: var(--custom-game-place-inner-gap);
+   align-content: start;
+   display: grid;
+   gap: var(--custom-game-place-inner-gap)
+ }
+ 
+ .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelGames .GameCardContainer,
+ .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelGames .GameThumbnailPlaceholderContainer {
+   padding: 0
+ }
+ ... (29 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/css/215.css` (Changed code · before: `L203-L314` → after: `L253-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e27308261a8e6b8cb358ecd2123f41110ba189343c3819f59251540734600c58R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e27308261a8e6b8cb358ecd2123f41110ba189343c3819f59251540734600c58) · [After (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/215.css#L253-L255) · [Before (L203-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/215.css#L203-L314)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .OtherOptions .NewButton {
-   align-items: center;
-   display: flex;
-   flex-grow: 1;
-   font-size: 1.5rem;
-   justify-content: center
- }
- 
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .OtherOptions .NewButton .ButtonBody {
-   padding: .8rem
- }
- 
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow {
-   width: 100%
- }
- 
- ... (96 more removed lines; see GitHub link above)
+ .CustomGamePlaceContainer .CustomGamePlaceMosaic.CustomGamePlaceMosaicPortrait .CustomGamePlacePanel {
+   align-self: stretch
+ }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/216.css` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/css/216.css` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9e601368d76d7757f6cb1f4d87a7e4c026a88c4ea40d367cda5e4c7b574739f2)

#### 1. `bundles/bloxd.io/chunks/css/216.css` (Changed code · before: `L100-L133` → after: `L661-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9e601368d76d7757f6cb1f4d87a7e4c026a88c4ea40d367cda5e4c7b574739f2R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9e601368d76d7757f6cb1f4d87a7e4c026a88c4ea40d367cda5e4c7b574739f2) · [After (L661-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/216.css#L661-L679) · [Before (L100-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/216.css#L100-L133)

```diff
- .CustomGamePlaceContainer {
-   display: flex;
-   flex-direction: column;
-   gap: .5rem;
-   padding-bottom: 1rem;
-   width: 100%;
-   z-index: 1
- }
- 
- .CustomGamePlaceContainer .BackgroundImage {
-   -ms-interpolation-mode: nearest-neighbor;
-   background-position: 50%;
-   background-repeat: repeat;
-   background-size: 128rem;
-   filter: brightness(.32);
-   image-rendering: optimizeSpeed;
- ... (18 more removed lines; see GitHub link above)
+ .SavedOutfits .SavedOutfitCard {
+   font-size: 1rem;
+   font-weight: 800;
+   justify-content: center;
+   min-height: 10rem;
+   overflow: hidden
+ }
+ 
+ .SavedOutfits .SavedOutfitCard.SavedOutfitCardEmpty {
+   color: #cfcfcf
+ }
+ 
+ .SavedOutfits .SavedOutfitCard .SavedOutfitCardPicture {
+   font-size: 4rem;
+   isolation: isolate;
+   padding-bottom: .34em
+ ... (3 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/216.css` (Changed code · before: `L138-L255` → after: `L684-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9e601368d76d7757f6cb1f4d87a7e4c026a88c4ea40d367cda5e4c7b574739f2R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9e601368d76d7757f6cb1f4d87a7e4c026a88c4ea40d367cda5e4c7b574739f2) · [After (L684-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/216.css#L684-L704) · [Before (L138-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/216.css#L138-L255)

```diff
-   .CustomGamePlaceContainer .CustomGamePlaceHeaderContainer .BackButton:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
-   }
- }
- 
- .CustomGamePlaceContainer .CustomGamePlaceMosaic {
-   --custom-game-place-inner-gap: 0.5rem;
-   --custom-game-place-panel-gap: 1rem;
-   display: flex;
-   flex-direction: column;
-   gap: var(--custom-game-place-panel-gap);
-   margin-inline: auto;
-   width: 100%
- }
- ... (102 more removed lines; see GitHub link above)
+   .SavedOutfits .SavedOutfitCard .SecondaryButton {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
+ }
+ 
+ @media(orientation:portrait)and (max-width:1200px) {
+   .SavedOutfits .SavedOutfitCard.SavedOutfitCardEmpty {
+     min-height: 0;
+     padding: .5rem
+   }
+ }
+ 
+ @media(orientation:portrait)and (max-width:1200px)and (pointer:coarse) {
+   .SavedOutfits .SavedOutfitCard.SavedOutfitCardEmpty {
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/246.css` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/css/246.css` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdb)

#### 1. `bundles/bloxd.io/chunks/css/246.css` (Changed code · before: `L1-L17` → after: `L1-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdbR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdb) · [After (L1-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/246.css#L1-L109) · [Before (L1-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/246.css#L1-L17)

```diff
- .StudioHeatmap3D .StudioHeatmapMapCanvas {
-   cursor: pointer;
-   outline: none
- }
- 
- .StudioHeatmap3D .StudioHeatmapMapCanvas:focus-visible {
-   outline: 2px solid #10243a;
-   outline-offset: -2px
- }
- 
- .StudioHeatmap3D .StudioHeatmap3DCoordinates {
-   font-feature-settings: "tnum";
-   background-color: rgba(0, 0, 0, .6);
-   font-size: .75rem;
-   font-variant-numeric: tabular-nums;
-   left: .5rem;
- ... (1 more removed lines; see GitHub link above)
+ @keyframes rainbowShimmer {
+   0% {
+     transform: translateX(0)
+   }
+ 
+   to {
+     transform: translateX(88.88889%)
+   }
+ }
+ 
+ @keyframes rainbowShimmerPosition {
+   to {
+     background-position: -200% 0
+   }
+ }
+ 
+ ... (93 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/246.css` (Changed code · before: `L20-L25` → after: `L155-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdbR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdb) · [After (L155-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/246.css#L155-L183) · [Before (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/246.css#L20-L25)

```diff
-   top: .5rem;
-   white-space: nowrap
- }
- 
- .StudioHeatmap3D .StudioHeatmap3DGizmo {
-   background-color: rgba(0, 0, 0, .35);
+   top: 0;
+   width: 100%
+ }
+ 
+ .GunCrosshairOverlayWrapper .GunCrosshairOverlayLine1,
+ .GunCrosshairOverlayWrapper .GunCrosshairOverlayLine2 {
+   position: absolute
+ }
+ 
+ .GunCrosshairOverlayWrapper .GunCrosshairOverlayLine1 {
+   border-top: 1px dashed #000;
+   height: 1px;
+   left: 0;
+   top: 50%;
+   translate: 0 -25%;
+   width: 100%
+ ... (13 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/css/246.css` (Changed code · before: `L27` → after: `L185-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdbR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdb) · [After (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/246.css#L185-L187) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/246.css#L27)

```diff
-   cursor: grab;
+   box-sizing: border-box;
+   height: 5px;
+   left: 50%;
```

#### 4. `bundles/bloxd.io/chunks/css/246.css` (Changed code · before: `L29-L40` → after: `L189-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdbR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdb) · [After (L189-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/246.css#L189-L199) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/246.css#L29-L40)

```diff
-   right: .5rem;
-   top: .5rem;
-   touch-action: none
- }
- 
- .StudioHeatmap3D .StudioHeatmap3DGizmo .StudioHeatmap3DGizmoEnd {
-   cursor: pointer
- }
- 
- .StudioHeatmap3D .StudioHeatmap3DCrosshair {
-   height: 14px;
-   left: 50%;
+   top: 50%;
+   translate: -50% -50%;
+   width: 5px
+ }
+ 
+ .Crosshair.CrosshairInPreview {
+   position: absolute
+ }
+ 
+ .CrosshairShapes {
+   inset: 0;
```

#### 5. `bundles/bloxd.io/chunks/css/246.css` (Changed code · before: `L43-L52` → after: `L207-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdbR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdb) · [After (L207-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/246.css#L207-L213) · [Before (L43-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/246.css#L43-L52)

```diff
-   top: 50%;
-   transform: translate(-50%, -50%);
-   width: 14px
- }
- 
- .StudioHeatmap3D .StudioHeatmap3DCrosshair:after,
- .StudioHeatmap3D .StudioHeatmap3DCrosshair:before {
-   background-color: #fff;
-   box-shadow: 0 0 1px rgba(0, 0, 0, .8);
-   content: "";
+   z-index: auto
+ }
+ 
+ .CrosshairShapes .CrosshairPart,
+ .CrosshairShapes .CrosshairRing,
+ .CrosshairShapes .CrosshairShapesOrigin,
+ .CrosshairShapes .CrosshairShapesPress {
```

#### 6. `bundles/bloxd.io/chunks/css/246.css` (Changed code · before: `L56-L57` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdbR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdb) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/246.css#L217) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/246.css#L56-L57)

```diff
- .StudioHeatmap3D .StudioHeatmap3DCrosshair:before {
-   height: 2px;
+ .CrosshairShapes .CrosshairShapesPress {
```

#### 7. `bundles/bloxd.io/chunks/css/246.css` (Changed code · before: `L59-L78` → after: `L219-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdbR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4e7381724fe01ae2d26ec9dcd26028b072465c3d7ee670009f22bf4ed038acdb) · [After (L219-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/246.css#L219-L230) · [Before (L59-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/246.css#L59-L78)

```diff
-   top: 6px;
-   width: 14px
- }
- 
- .StudioHeatmap3D .StudioHeatmap3DCrosshair:after {
-   height: 14px;
-   left: 6px;
-   top: 0;
-   width: 2px
- }
- 
- .StudioHeatmap3D .StudioHeatmap3DUnavailable {
-   align-items: center;
-   display: flex;
-   font-size: .85rem;
-   inset: 0;
- ... (4 more removed lines; see GitHub link above)
+   top: 0
+ }
+ 
+ .CrosshairShapes.CrosshairSpreads [data-arm] {
+   transition: left .2s ease-out, top .2s ease-out
+ }
+ 
+ .CrosshairShapes .CrosshairRing {
+   border-radius: 50%;
+   border-style: solid;
+   box-sizing: border-box
+ }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/354.css` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/css/354.css` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8f7ae0db0f47ac1cce285f8b4f15854b8cab3030385d1d2926e39e02f886860)

#### 1. `bundles/bloxd.io/chunks/css/354.css` (Changed code · before: `L1-L3` → after: `L1-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8f7ae0db0f47ac1cce285f8b4f15854b8cab3030385d1d2926e39e02f886860R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d8f7ae0db0f47ac1cce285f8b4f15854b8cab3030385d1d2926e39e02f886860) · [After (L1-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/354.css#L1-L7) · [Before (L1-L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/354.css#L1-L3)

```diff
- .WorldCodeAiDeepSeekPolicyLink {
-   text-decoration: underline;
-   white-space: nowrap
+ .WorldCodeAiOutOfUsage {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   gap: 1.5rem;
+   max-width: 30rem;
+   padding: 3rem 1rem .5rem
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/394.css` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/css/394.css` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-728dcd18849f1b34fb8ee51de1d1b56b18a80a5599f9028c35205ca73579d552)

#### 1. `bundles/bloxd.io/chunks/css/394.css` (Changed code · before: `L1-L8` → after: `L1-L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-728dcd18849f1b34fb8ee51de1d1b56b18a80a5599f9028c35205ca73579d552R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-728dcd18849f1b34fb8ee51de1d1b56b18a80a5599f9028c35205ca73579d552) · [After (L1-L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/394.css#L1-L4) · [Before (L1-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/394.css#L1-L8)

```diff
- @keyframes rainbowShimmer {
-   0% {
-     transform: translateX(0)
-   }
- 
-   to {
-     transform: translateX(88.88889%)
-   }
+ .CustomTexturePackDownloaderLogoLoaderContainer {
+   align-items: center;
+   display: flex;
+   justify-content: center
```

#### 2. `bundles/bloxd.io/chunks/css/394.css` (Changed code · before: `L11-L14` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-728dcd18849f1b34fb8ee51de1d1b56b18a80a5599f9028c35205ca73579d552R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-728dcd18849f1b34fb8ee51de1d1b56b18a80a5599f9028c35205ca73579d552) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/394.css#L7-L8) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/394.css#L11-L14)

```diff
- @keyframes rainbowShimmerPosition {
-   to {
-     background-position: -200% 0
-   }
+ .CustomTexturePackDownloaderLogoLoaderContainer .LogoLoader {
+   font-size: 10rem
```

#### 3. `bundles/bloxd.io/chunks/css/394.css` (Changed code · before: `L17-L24` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-728dcd18849f1b34fb8ee51de1d1b56b18a80a5599f9028c35205ca73579d552R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-728dcd18849f1b34fb8ee51de1d1b56b18a80a5599f9028c35205ca73579d552) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/394.css#L11-L13) · [Before (L17-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/394.css#L17-L24)

```diff
- @keyframes fadeIn {
-   0% {
-     opacity: 0
-   }
- 
-   to {
-     opacity: 1
-   }
+ .CustomTexturePackDownloaderSubtitleText .CustomTexturePackDownloaderWarningText {
+   color: #fcd373;
+   padding-top: 1rem
```

#### 4. `bundles/bloxd.io/chunks/css/394.css` (Changed code · before: `L27-L41` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-728dcd18849f1b34fb8ee51de1d1b56b18a80a5599f9028c35205ca73579d552R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-728dcd18849f1b34fb8ee51de1d1b56b18a80a5599f9028c35205ca73579d552) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/394.css#L16-L18) · [Before (L27-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/394.css#L27-L41)

```diff
- @keyframes fadeInScaleUp {
-   0% {
-     opacity: 0;
-     transform: scale(.6)
-   }
- 
-   50% {
-     opacity: 1;
-     transform: scale(1.1)
-   }
- 
-   to {
-     opacity: 1;
-     transform: scale(1)
-   }
+ .CustomTexturePackDownloaderSubtitleText .CustomTexturePackDownloaderSecondaryText {
+   color: #a4a4a4;
+   padding-top: 1rem
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/85.css` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/css/85.css` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2902662627fedfbdd8eb2c8baf7f42836371097a18e73b2b8a23be5ec76b6607)

#### 1. `bundles/bloxd.io/chunks/css/85.css` (Changed code · before: `L7155` → after: `L7156-L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2902662627fedfbdd8eb2c8baf7f42836371097a18e73b2b8a23be5ec76b6607R7156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2902662627fedfbdd8eb2c8baf7f42836371097a18e73b2b8a23be5ec76b6607) · [After (L7156-L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/85.css#L7156-L7158) · [Before (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/85.css#L7155)

```diff
- .GameBackgroundScreen.RespawnBackgroundScreen .RespawnContainer .RespawnTop .RespawnMainContent .RespawnMainContentInner .RespawnPageOtherGames .RespawnPageOtherGamesTitle {
+ .GameBackgroundScreen.RespawnBackgroundScreen .RespawnContainer .RespawnTop .RespawnMainContent .RespawnMainContentInner .RespawnNotificationOptIn .RespawnPanelSectionTitle,
+ .GameBackgroundScreen.RespawnBackgroundScreen .RespawnContainer .RespawnTop .RespawnMainContent .RespawnMainContentInner .RespawnPageOtherGames .RespawnPanelSectionTitle {
+   align-items: center;
```

#### 2. `bundles/bloxd.io/chunks/css/85.css` (Changed code · before: `L8392-L8394` → after: `L8415-L8417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2902662627fedfbdd8eb2c8baf7f42836371097a18e73b2b8a23be5ec76b6607R8415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2902662627fedfbdd8eb2c8baf7f42836371097a18e73b2b8a23be5ec76b6607) · [After (L8415-L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/css/85.css#L8415-L8417) · [Before (L8392-L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/css/85.css#L8392-L8394)

```diff
- .CraftItemFlyAnimation .TwoDImageIcon:not(.BlockModelIcon),
- .DraggedInvenItem .TwoDImageIcon:not(.BlockModelIcon),
- .InvenItem .TwoDImageIcon:not(.BlockModelIcon) {
+ .CraftItemFlyAnimation .TwoDImageIcon,
+ .DraggedInvenItem .TwoDImageIcon,
+ .InvenItem .TwoDImageIcon {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/100.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/100.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13)

#### 1. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/100.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/100.js#L4)

```diff
-   4825: (kk, ek, ik) => {
+   4823: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L8-L22` → after: `L8-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/100.js#L8-L22) · [Before (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/100.js#L8-L22)

```diff
-     var Dk = ik(1496),
-       fk = ik(60),
-       Sk = ik(1172),
-       bk = ik(1095),
-       rk = ik(1085),
-       Pk = ik(2050),
-       mk = ik(1479),
-       Mk = ik(1327),
-       Kk = ik(1081),
-       xk = ik(22),
-       nk = ik(1410),
-       Uk = ik(1033),
-       Hk = ik(2522),
-       wk = ik(1512),
-       lk = ik(1066);
+     var QC = ZC(1463),
+       wC = ZC(48),
+       bC = ZC(1143),
+       nC = ZC(1076),
+       fC = ZC(1072),
+       oC = ZC(1979),
+       qC = ZC(1453),
+       FC = ZC(1295),
+       WC = ZC(1068),
+       NC = ZC(20),
+       MC = ZC(1388),
+       gC = ZC(1013),
+       SC = ZC(2548),
+       pC = ZC(1477),
+       PC = ZC(1056);
```

#### 3. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/100.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/100.js#L45)

```diff
-       } = (0, Sk.D)(), ek = (0, mk.useNavigatePreserveSearch)(), ik = (0, Dk.p)(), {
+       } = (0, bC.y)(), zC = (0, qC.useNavigatePreserveSearch)(), ZC = (0, QC.v)(), {
```

#### 4. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/100.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/100.js#L47)

```diff
-       } = (0, bk.d)(), Lk = (0, Pk.e)(), Ck = (0, rk.k)(), Ak = (jk = ik.pathname).startsWith(wk.p) ? null : jk.startsWith(yk.docs) ? "docs" : jk.startsWith(yk.leaderboard) ? "leaderboard" : "myGames";
+       } = (0, nC.e)(), xC = (0, oC.b)(), JC = (0, fC.k)(), IC = (iC = ZC.pathname).startsWith(pC.q) ? null : iC.startsWith(RC.docs) ? "docs" : iC.startsWith(RC.leaderboard) ? "leaderboard" : "myGames";
```

#### 5. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/100.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/100.js#L50)

```diff
-         if (!kk.startsWith(wk.p)) return {
+         if (!CC.startsWith(pC.q)) return {
```

#### 6. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/100.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/100.js#L71)

```diff
-           children: (0, lk.jsx)(Hk.d, {})
+           children: (0, PC.jsx)(SC.b, {})
```

#### 7. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/100.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/100.js#L76)

```diff
-             children: [(0, lk.jsx)(Kk.e, {
+             children: [(0, PC.jsx)(WC.c, {
```

#### 8. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/100.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/100.js#L81)

```diff
-               children: [(0, lk.jsx)(nk.e, {
+               children: [(0, PC.jsx)(MC.c, {
```

#### 9. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/100.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/100.js#L89)

```diff
-                 children: pk.map((ik => (0, lk.jsxs)(nk.X, {
+                 children: GC.map((ZC => (0, PC.jsxs)(MC.O, {
```

#### 10. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/100.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/100.js#L95)

```diff
-                   children: [(0, lk.jsx)(Uk.d, {
+                   children: [(0, PC.jsx)(gC.c, {
```

#### 11. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/100.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/100.js#L108)

```diff
-               children: (0, lk.jsx)(Dk.f, {})
+               children: (0, PC.jsx)(QC.i, {})
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/101.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/101.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8)

#### 1. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L4)

```diff
-   4840: (kk, ek, ik) => {
+   4847: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L6)

```diff
-       e: () => xk
+       d: () => NC
```

#### 3. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L8)

```diff
-     var Dk = ik(1021),
+     var QC = ZC(1002),
```

#### 4. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L10-L13` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L10-L14) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L10-L13)

```diff
-       Sk = ik(1033),
-       bk = ik(1327),
-       rk = ik(3456),
-       Pk = ik(131),
+       bC = ZC(1013),
+       nC = ZC(1295),
+       fC = ZC(3464),
+       oC = ZC(113),
+       qC = ZC(3498),
```

#### 5. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L15-L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L15-L16)

```diff
-       Mk = ik(3475),
-       Kk = ik(1066);
+       WC = ZC(1056);
```

#### 6. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L22)

```diff
-       const ik = (0, Pk.m)() ? "large" : "small",
+       const ZC = (0, oC.o)() ? "large" : "small",
```

#### 7. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L24)

```diff
-         xk = (0, rk.d)(Dk),
+         NC = (0, fC.e)(QC),
```

#### 8. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L40)

```diff
-           children: (0, Kk.jsx)(Sk.d, {
+           children: (0, WC.jsx)(bC.c, {
```

#### 9. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L47)

```diff
-   4828: (kk, ek, ik) => {
+   4830: (CC, zC, ZC) => {
```

#### 10. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L51-L53` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L51-L53) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L51-L53)

```diff
-     ik(4835);
-     var Dk = ik(60),
-       fk = ik(1021),
+     ZC(4838);
+     var QC = ZC(48),
+       wC = ZC(1002),
```

#### 11. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L55-L62` → after: `L55-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L55-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L55-L60) · [Before (L55-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L55-L62)

```diff
-       bk = ik(302),
-       rk = ik(1005),
-       Pk = ik(1207),
-       mk = ik(1172),
-       Mk = ik(1095),
-       Kk = ik(1459),
-       xk = ik(4840),
-       nk = ik(1410),
+       nC = ZC(310),
+       fC = ZC(979),
+       oC = ZC(1169),
+       qC = ZC(1143),
+       FC = ZC(1076),
+       WC = ZC(1439),
```

#### 12. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L64-L72` → after: `L62-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L62-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L62-L72) · [Before (L64-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L64-L72)

```diff
-       Hk = ik(1327),
-       wk = ik(1479),
-       lk = ik(4568),
-       pk = ik(1033),
-       yk = ik(987),
-       Yk = ik(2499),
-       Lk = ik(4852),
-       Ck = ik(1512),
-       Ak = ik(1066);
+       MC = ZC(1388),
+       gC = ZC(4854),
+       SC = ZC(1295),
+       pC = ZC(1453),
+       PC = ZC(4571),
+       GC = ZC(1013),
+       RC = ZC(964),
+       AC = ZC(2465),
+       xC = ZC(4863),
+       JC = ZC(1477),
+       IC = ZC(1056);
```

#### 13. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L77)

```diff
-       } = (0, mk.D)(), ek = (0, wk.useNavigatePreserveSearch)(), ik = (0, Yk.m)(), fk = (0, Dk.useMemo)((() => [...yk.e].sort(((ek, Dk) => {
+       } = (0, qC.y)(), zC = (0, pC.useNavigatePreserveSearch)(), ZC = (0, AC.r)(), wC = (0, QC.useMemo)((() => [...RC.e].sort(((zC, QC) => {
```

#### 14. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L79-L80` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L79-L80) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L79-L80)

```diff
-         const bk = (null !== (fk = (0, Yk.b)(Dk, ik)) && void 0 !== fk ? fk : 0) - (null !== (Sk = (0, Yk.b)(ek, ik)) && void 0 !== Sk ? Sk : 0);
-         return 0 !== bk ? bk : (0, Ck.j)(ek, kk).localeCompare((0, Ck.j)(Dk, kk))
+         const nC = (null !== (wC = (0, AC.b)(QC, ZC)) && void 0 !== wC ? wC : 0) - (null !== (bC = (0, AC.b)(zC, ZC)) && void 0 !== bC ? bC : 0);
+         return 0 !== nC ? nC : (0, JC.n)(zC, CC).localeCompare((0, JC.n)(QC, CC))
```

#### 15. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L89)

```diff
-         }), (0, Ak.jsx)(Uk.c, {
+         }), (0, IC.jsx)(gC.b, {
```

#### 16. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L104` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L104) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L104)

```diff
-                 ek((0, Ck.m)((0, rk.h)(Dk, !0)))
+                 zC((0, JC.o)((0, fC.f)(QC, !0)))
```

#### 17. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L107)

```diff
-                 children: (0, Ak.jsx)(Lk.h, {
+                 children: (0, IC.jsx)(xC.g, {
```

#### 18. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L111)

```diff
-                   name: (0, Ck.j)(Dk, kk)
+                   name: (0, JC.n)(QC, CC)
```

#### 19. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L114)

```diff
-                 children: (0, Pk.Q)(null !== (fk = (0, Yk.b)(Dk, ik)) && void 0 !== fk ? fk : 0)
+                 children: (0, oC.Z)(null !== (wC = (0, AC.b)(QC, ZC)) && void 0 !== wC ? wC : 0)
```

#### 20. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L125)

```diff
-       } = (0, mk.D)(), ek = (0, wk.useNavigatePreserveSearch)(), {
+       } = (0, qC.y)(), zC = (0, pC.useNavigatePreserveSearch)(), {
```

#### 21. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L128)

```diff
-       } = (0, Mk.d)(), {
+       } = (0, FC.e)(), {
```

#### 22. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L131)

```diff
-       } = (0, lk.d)(), [sk, dk] = (0, Dk.useState)(null), [Vk, Fk] = (0, Dk.useState)(null), [uk, qk] = (0, Dk.useState)(!1);
+       } = (0, PC.e)(), [vC, eC] = (0, QC.useState)(null), [hC, KC] = (0, QC.useState)(null), [YC, dC] = (0, QC.useState)(!1);
```

#### 23. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L133)

```diff
-         fk || (qk(!1), Kk.b.getPublishedGamePreviews(ik, {
+         wC || (dC(!1), WC.d.getPublishedGamePreviews(ZC, {
```

#### 24. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L146)

```diff
-             results: (0, bk.bb)(kk.results)
+             results: (0, nC.$)(CC.results)
```

#### 25. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L150)

```diff
-         })), Kk.b.getOwnedUnpublishedGames(ik).then((kk => {
+         })), WC.d.getOwnedUnpublishedGames(ZC).then((CC => {
```

#### 26. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L167)

```diff
-           }), (0, Ak.jsxs)(nk.r, {
+           }), (0, IC.jsxs)(MC.o, {
```

#### 27. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L170)

```diff
-             children: [(0, Ak.jsx)(pk.d, {
+             children: [(0, IC.jsx)(GC.c, {
```

#### 28. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L183)

```diff
-         }), !zk && !uk && !Qk && (0, Ak.jsx)(Uk.c, {
+         }), !HC && !YC && !EC && (0, IC.jsx)(gC.b, {
```

#### 29. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L203)

```diff
-               kk = ik.schematicId, ek((0, Ck.m)((0, rk.d)(kk)))
+               CC = ZC.schematicId, zC((0, JC.o)((0, fC.d)(CC)))
```

#### 30. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L206-L207` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L206-L207) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L206-L207)

```diff
-               children: (0, Ak.jsx)(Lk.h, {
-                 thumbnail: (0, Ak.jsx)(xk.e, {
+               children: (0, IC.jsx)(xC.g, {
+                 thumbnail: (0, IC.jsx)(NC.d, {
```

#### 31. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L220)

```diff
-               children: (0, Pk.Q)(ik.ccu)
+               children: (0, oC.Z)(ZC.ccu)
```

#### 32. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L222)

```diff
-               children: (0, Pk.Q)(ik.favourites)
+               children: (0, oC.Z)(ZC.favourites)
```

#### 33. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L229)

```diff
-   4852: (kk, ek, ik) => {
+   4863: (CC, zC, ZC) => {
```

#### 34. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L232)

```diff
-       h: () => Sk
+       g: () => bC
```

#### 35. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L234-L235` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L234-L235) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L234-L235)

```diff
-     var Dk = ik(1512),
-       fk = ik(1066);
+     var QC = ZC(1477),
+       wC = ZC(1056);
```

#### 36. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L260)

```diff
-         src: (0, Dk.i)(ek),
+         src: (0, QC.j)(zC),
```

#### 37. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L265)

```diff
-   4847: (kk, ek, ik) => {
+   4854: (CC, zC, ZC) => {
```

#### 38. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L267` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L267) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L267)

```diff
-       c: () => rk
+       b: () => fC
```

#### 39. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L269-L270` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L269-L270) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L269-L270)

```diff
-     var Dk = ik(60),
-       fk = ik(1021),
+     var QC = ZC(48),
+       wC = ZC(1002),
```

#### 40. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L272)

```diff
-       bk = ik(1066);
+       nC = ZC(1056);
```

#### 41. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/101.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/101.js#L298)

```diff
-   4835: () => {}
+   4838: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/102.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/102.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4)

#### 1. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L4)

```diff
-   4840: (kk, ek, ik) => {
+   4847: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L6)

```diff
-       e: () => xk
+       d: () => NC
```

#### 3. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L8)

```diff
-     var Dk = ik(1021),
+     var QC = ZC(1002),
```

#### 4. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L10-L13` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L10-L14) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L10-L13)

```diff
-       Sk = ik(1033),
-       bk = ik(1327),
-       rk = ik(3456),
-       Pk = ik(131),
+       bC = ZC(1013),
+       nC = ZC(1295),
+       fC = ZC(3464),
+       oC = ZC(113),
+       qC = ZC(3498),
```

#### 5. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L15-L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L15-L16)

```diff
-       Mk = ik(3475),
-       Kk = ik(1066);
+       WC = ZC(1056);
```

#### 6. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L22)

```diff
-       const ik = (0, Pk.m)() ? "large" : "small",
+       const ZC = (0, oC.o)() ? "large" : "small",
```

#### 7. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L24)

```diff
-         xk = (0, rk.d)(Dk),
+         NC = (0, fC.e)(QC),
```

#### 8. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L40)

```diff
-           children: (0, Kk.jsx)(Sk.d, {
+           children: (0, WC.jsx)(bC.c, {
```

#### 9. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L47)

```diff
-   6361: (kk, ek, ik) => {
+   6520: (CC, zC, ZC) => {
```

#### 10. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L51-L53` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L51-L53) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L51-L53)

```diff
-     ik(4835);
-     var Dk = ik(60),
-       fk = ik(1021),
+     ZC(4838);
+     var QC = ZC(48),
+       wC = ZC(1002),
```

#### 11. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L55-L66` → after: `L55-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L55-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L55-L62) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L55-L66)

```diff
-       bk = ik(302),
-       rk = ik(1005),
-       Pk = ik(1207),
-       mk = ik(987),
-       Mk = ik(1172),
-       Kk = ik(1459),
-       xk = ik(3501),
-       nk = ik(1095),
-       Uk = ik(4840),
-       Hk = ik(2540),
-       wk = ik(1410),
-       lk = ik(4508),
+       nC = ZC(310),
+       fC = ZC(979),
+       oC = ZC(1169),
+       qC = ZC(964),
+       FC = ZC(1143),
+       WC = ZC(1439),
+       NC = ZC(3507),
+       MC = ZC(1076),
```

#### 12. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L68-L75` → after: `L64-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L64-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L64-L75) · [Before (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L68-L75)

```diff
-       yk = ik(1327),
-       Yk = ik(1479),
-       Lk = ik(4505),
-       Ck = ik(2499),
-       Ak = ik(4852),
-       jk = ik(6270),
-       sk = ik(1512),
-       dk = ik(1066);
+       SC = ZC(2575),
+       pC = ZC(1388),
+       PC = ZC(4503),
+       GC = ZC(4854),
+       RC = ZC(1295),
+       AC = ZC(1453),
+       xC = ZC(4496),
+       JC = ZC(2465),
+       IC = ZC(4863),
+       iC = ZC(6419),
+       vC = ZC(1477),
+       eC = ZC(1056);
```

#### 13. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L101)

```diff
-       const ik = jk.c[ek];
+       const ZC = iC.e[zC];
```

#### 14. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L105)

```diff
-           [`StudioLeaderboardTopPosition${ek}`]: void 0 !== ik
+           [`StudioLeaderboardTopPosition${zC}`]: void 0 !== ZC
```

#### 15. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L123)

```diff
-       } = null === ek ? Qk : (0, xk.k)(ek);
+       } = null === zC ? EC : (0, NC.j)(zC);
```

#### 16. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L141)

```diff
-         children: void 0 !== (null === ek || void 0 === ek ? void 0 : ek.engagementScore) ? (0, Pk.Q)(Math.round(ek.engagementScore)) : "-"
+         children: void 0 !== (null === zC || void 0 === zC ? void 0 : zC.engagementScore) ? (0, oC.Z)(Math.round(zC.engagementScore)) : "-"
```

#### 17. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L149)

```diff
-       } = (0, Mk.D)(), fk = (0, Yk.useNavigatePreserveSearch)(), {
+       } = (0, FC.y)(), wC = (0, AC.useNavigatePreserveSearch)(), {
```

#### 18. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L152)

```diff
-       } = (0, nk.d)(), Qk = (0, Ck.m)(), [ak, Wk] = (0, Lk.o)(), tk = (Xk = ak.get(uk), Vk.some((kk => kk.scope === Xk)) ? Xk : Ik);
+       } = (0, MC.e)(), EC = (0, JC.r)(), [uC, rC] = (0, xC.n)(), sC = (TC = uC.get(YC), hC.some((CC => CC.scope === TC)) ? TC : mC);
```

#### 19. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L155` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L155) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L155)

```diff
-           return bk.T.includes(kk) ? kk : null
+           return nC.U.includes(CC) ? CC : null
```

#### 20. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L157)

```diff
-         ck = (0, Lk.g)(ak.get(Lk.e)),
+         tC = (0, xC.f)(uC.get(xC.b)),
```

#### 21. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L163)

```diff
-           (0, Lk.k)(ek, uk, kk.scope === Ik ? null : kk.scope), (0, Lk.k)(ek, qk, kk.category), (0, Lk.n)(ek, kk.page)
+           (0, xC.i)(zC, YC, CC.scope === mC ? null : CC.scope), (0, xC.i)(zC, dC, CC.category), (0, xC.l)(zC, CC.page)
```

#### 22. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L172)

```diff
-         return Zk(null), gk(!1), Kk.b.getPublishedGamePreviews(Sk, {
+         return jC(null), LC(!1), WC.d.getPublishedGamePreviews(bC, {
```

#### 23. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L194)

```diff
-       const ke = null !== (kk = null === Tk || void 0 === Tk ? void 0 : Tk.results) && void 0 !== kk ? kk : null,
+       const VC = null !== (CC = null === DC || void 0 === DC ? void 0 : DC.results) && void 0 !== CC ? CC : null,
```

#### 24. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L196)

```diff
-           const [fk, Sk] = (0, Dk.useState)({}), bk = ik ? (null !== kk && void 0 !== kk ? kk : []).flatMap((kk => "firstPartyGame" === kk.type ? [(0, rk.h)(kk.gameNameWithVariation, !0)] : [])).join(",") : "", Pk = (0, Dk.useMemo)((() => "" === bk ? [] : bk.split(",")), [bk]);
+           const [wC, bC] = (0, QC.useState)({}), nC = ZC ? (null !== CC && void 0 !== CC ? CC : []).flatMap((CC => "firstPartyGame" === CC.type ? [(0, fC.f)(CC.gameNameWithVariation, !0)] : [])).join(",") : "", oC = (0, QC.useMemo)((() => "" === nC ? [] : nC.split(",")), [nC]);
```

#### 25. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L200)

```diff
-             return Kk.b.getGamesByAnalyticsIds(ek, Pk).then((ek => {
+             return WC.d.getGamesByAnalyticsIds(zC, oC).then((zC => {
```

#### 26. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L218)

```diff
-                 thumbnail: (0, dk.jsx)(Uk.e, {
+                 thumbnail: (0, eC.jsx)(gC.d, {
```

#### 27. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L226-L227` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L226-L227) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L226-L227)

```diff
-                 discoverability: (0, xk.n)(ek) ? ek : null,
-                 url: (0, sk.m)((0, rk.d)(ek.schematicId))
+                 discoverability: (0, NC.m)(zC) ? zC : null,
+                 url: (0, vC.o)((0, fC.d)(zC.schematicId))
```

#### 28. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L231)

```diff
-               Mk = (0, rk.h)(mk, !0);
+               FC = (0, fC.f)(qC, !0);
```

#### 29. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L238)

```diff
-               name: (0, sk.j)(mk, fk),
+               name: (0, vC.n)(qC, wC),
```

#### 30. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L240)

```diff
-               category: (0, sk.d)(mk),
+               category: (0, vC.e)(qC),
```

#### 31. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L243-L244` → after: `L243-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L243-L244) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L243-L244)

```diff
-               discoverability: null !== (bk = ik[Mk]) && void 0 !== bk ? bk : null,
-               url: (0, sk.m)(Mk)
+               discoverability: null !== (nC = ZC[FC]) && void 0 !== nC ? nC : null,
+               url: (0, vC.o)(FC)
```

#### 32. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L250)

```diff
-         Se = null !== (ek = null === Tk || void 0 === Tk ? void 0 : Tk.totalPages) && void 0 !== ek ? ek : 1;
+         wz = null !== (zC = null === DC || void 0 === DC ? void 0 : DC.totalPages) && void 0 !== zC ? zC : 1;
```

#### 33. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L272)

```diff
-           children: Vk.map((kk => (0, dk.jsx)(wk.X, {
+           children: hC.map((CC => (0, eC.jsx)(pC.O, {
```

#### 34. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L285)

```diff
-           children: [(0, dk.jsx)(wk.X, {
+           children: [(0, eC.jsx)(pC.O, {
```

#### 35. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L295)

```diff
-           }), bk.T.map((kk => (0, dk.jsx)(wk.X, {
+           }), nC.U.map((CC => (0, eC.jsx)(pC.O, {
```

#### 36. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L304)

```diff
-             children: (0, bk.gb)(kk)
+             children: (0, nC.eb)(CC)
```

#### 37. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L317)

```diff
-           children: (0, dk.jsx)(pk.c, {
+           children: (0, eC.jsx)(GC.b, {
```

#### 38. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L359` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L359) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L359)

```diff
-                 children: (0, dk.jsx)(Ak.h, {
+                 children: (0, eC.jsx)(IC.g, {
```

#### 39. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L365)

```diff
-                 children: [null === kk.owner && "-", null !== kk.owner && (0, dk.jsx)(Hk.d, {
+                 children: [null === CC.owner && "-", null !== CC.owner && (0, eC.jsx)(SC.f, {
```

#### 40. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L371)

```diff
-                 children: (0, bk.gb)(kk.category)
+                 children: (0, nC.eb)(CC.category)
```

#### 41. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L377)

```diff
-                 children: null !== kk.ccu ? (0, Pk.Q)(kk.ccu) : "-"
+                 children: null !== CC.ccu ? (0, oC.Z)(CC.ccu) : "-"
```

#### 42. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L379)

```diff
-                 children: null !== kk.favourites ? (0, Pk.Q)(kk.favourites) : "-"
+                 children: null !== CC.favourites ? (0, oC.Z)(CC.favourites) : "-"
```

#### 43. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L398)

```diff
-   4852: (kk, ek, ik) => {
+   4863: (CC, zC, ZC) => {
```

#### 44. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L401)

```diff
-       h: () => Sk
+       g: () => bC
```

#### 45. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L403-L404` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L403-L404) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L403-L404)

```diff
-     var Dk = ik(1512),
-       fk = ik(1066);
+     var QC = ZC(1477),
+       wC = ZC(1056);
```

#### 46. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L429` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L429) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L429)

```diff
-         src: (0, Dk.i)(ek),
+         src: (0, QC.j)(zC),
```

#### 47. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L434)

```diff
-   6270: (kk, ek, ik) => {
+   6419: (CC, zC, ZC) => {
```

#### 48. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L436` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L436) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L436)

```diff
-       c: () => Dk
+       e: () => QC
```

#### 49. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L439-L444` → after: `L439-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L439-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L439-L444) · [Before (L439-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L439-L444)

```diff
-       1: ik(6273),
-       2: ik(6282),
-       3: ik(6286)
-     }
-   },
-   4847: (kk, ek, ik) => {
+       1: ZC(6422),
+       2: ZC(6430),
+       3: ZC(6437)
+     }
+   },
+   4854: (CC, zC, ZC) => {
```

#### 50. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L446)

```diff
-       c: () => rk
+       b: () => fC
```

#### 51. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L448-L449` → after: `L448-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L448-L449) · [Before (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L448-L449)

```diff
-     var Dk = ik(60),
-       fk = ik(1021),
+     var QC = ZC(48),
+       wC = ZC(1002),
```

#### 52. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L451)

```diff
-       bk = ik(1066);
+       nC = ZC(1056);
```

#### 53. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L477-L478` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L477-L478) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L477-L478)

```diff
-   4835: () => {},
-   6273: kk => {
+   4838: () => {},
+   6422: CC => {
```

#### 54. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L481)

```diff
-   6282: kk => {
+   6430: CC => {
```

#### 55. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/102.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/102.js#L484)

```diff
-   6286: kk => {
+   6437: CC => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (92 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 1. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L4)

```diff
-   4840: (kk, ek, ik) => {
+   4847: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L6)

```diff
-       e: () => xk
+       d: () => NC
```

#### 3. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L8)

```diff
-     var Dk = ik(1021),
+     var QC = ZC(1002),
```

#### 4. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L10-L13` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L10-L14) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L10-L13)

```diff
-       Sk = ik(1033),
-       bk = ik(1327),
-       rk = ik(3456),
-       Pk = ik(131),
+       bC = ZC(1013),
+       nC = ZC(1295),
+       fC = ZC(3464),
+       oC = ZC(113),
+       qC = ZC(3498),
```

#### 5. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15-L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L15-L16)

```diff
-       Mk = ik(3475),
-       Kk = ik(1066);
+       WC = ZC(1056);
```

#### 6. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L22)

```diff
-       const ik = (0, Pk.m)() ? "large" : "small",
+       const ZC = (0, oC.o)() ? "large" : "small",
```

#### 7. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L24)

```diff
-         xk = (0, rk.d)(Dk),
+         NC = (0, fC.e)(QC),
```

#### 8. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L40)

```diff
-           children: (0, Kk.jsx)(Sk.d, {
+           children: (0, WC.jsx)(bC.c, {
```

#### 9. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L47)

```diff
-   4955: (kk, ek, ik) => {
+   4985: (CC, zC, ZC) => {
```

#### 10. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L51-L52` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L51-L52) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L51-L52)

```diff
-     var Dk = ik(60),
-       fk = ik(1021),
+     var QC = ZC(48),
+       wC = ZC(1002),
```

#### 11. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L54-L63` → after: `L54-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L54-L63) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L54-L63)

```diff
-       bk = ik(4888),
-       rk = ik(1327),
-       Pk = ik(1172),
-       mk = ik(3128),
-       Mk = ik(3271),
-       Kk = ik(1033),
-       xk = ik(3131),
-       nk = ik(4959),
-       Uk = ik(4970),
-       Hk = ik(1066);
+       nC = ZC(4895),
+       fC = ZC(1295),
+       oC = ZC(1143),
+       qC = ZC(3140),
+       FC = ZC(3288),
+       WC = ZC(1013),
+       NC = ZC(3142),
+       MC = ZC(4992),
+       gC = ZC(5008),
+       SC = ZC(1056);
```

#### 12. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L75)

```diff
-       } = (0, Pk.D)(), [Yk, Lk] = (0, Dk.useState)(!1), [Ck, Ak] = (0, Dk.useState)(null), [jk, sk] = (0, Dk.useState)(null), dk = (0, Dk.useRef)(null);
+       } = (0, oC.y)(), [AC, xC] = (0, QC.useState)(!1), [JC, IC] = (0, QC.useState)(null), [iC, vC] = (0, QC.useState)(null), eC = (0, QC.useRef)(null);
```

#### 13. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L79-L80` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L79-L80) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L79-L80)

```diff
-           const ek = await (0, mk.o)(kk);
-           if ("customGame" === pk && (0, Mk.n)(ek)) return void Ak(yk(Mk.e));
+           const zC = await (0, qC.q)(CC);
+           if ("customGame" === GC && (0, FC.h)(zC)) return void IC(RC(FC.d));
```

#### 14. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L91)

```diff
-               Dk && Promise.all([ik.e(205), ik.e(204)]).then((() => ik(33831))).then((ik => {
+               QC && Promise.all([ZC.e(203), ZC.e(202)]).then((() => ZC(34221))).then((ZC => {
```

#### 15. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L106-L108` → after: `L106-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L106-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L106-L108) · [Before (L106-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L106-L108)

```diff
-           if (ek instanceof xk.c) {
-             const kk = "customTexturePack:invalidPack" !== ek.translationKey || (0, Uk.e)() ? ek.translationKey : "customTexturePack:invalidPackZip";
-             Ak((0, nk.j)(yk, kk, ek.params))
+           if (zC instanceof NC.d) {
+             const CC = "customTexturePack:invalidPack" !== zC.translationKey || (0, gC.f)() ? zC.translationKey : "customTexturePack:invalidPackZip";
+             IC((0, MC.h)(RC, CC, zC.params))
```

#### 16. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L119)

```diff
-       } = (0, bk.e)({
+       } = (0, nC.d)({
```

#### 17. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L159)

```diff
-               children: (0, Hk.jsx)(Kk.d, {
+               children: (0, SC.jsx)(WC.c, {
```

#### 18. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L169)

```diff
-               children: (0, Hk.jsx)(Kk.d, {
+               children: (0, SC.jsx)(WC.c, {
```

#### 19. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L174)

```diff
-               children: yk((0, Uk.e)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
+               children: RC((0, gC.f)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
```

#### 20. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L176)

```diff
-           }), !Yk && (0, Hk.jsx)(Uk.d, {
+           }), !AC && (0, SC.jsx)(gC.b, {
```

#### 21. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L187)

```diff
-   4970: (kk, ek, ik) => {
+   5008: (CC, zC, ZC) => {
```

#### 22. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L189-L190` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L189-L190) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L189-L190)

```diff
-       d: () => mk,
-       e: () => Pk
+       b: () => FC,
+       f: () => qC
```

#### 23. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L192-L196` → after: `L192-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L192-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L192-L197) · [Before (L192-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L192-L196)

```diff
-     var Dk = ik(60),
-       fk = ik(1410),
-       Sk = ik(1172),
-       bk = ik(99),
-       rk = ik(1066);
+     var QC = ZC(48),
+       wC = ZC(1388),
+       bC = ZC(1143),
+       nC = ZC(77),
+       fC = ZC(3123),
+       oC = ZC(1056);
```

#### 24. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L210` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L211) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L210)

```diff
-       } = (0, Sk.D)(), Mk = (0, Dk.useRef)(null);
+       } = (0, bC.y)(), WC = (0, QC.useRef)(null);
```

#### 25. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L223` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L224) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L223)

```diff
-         }), Pk() && (0, rk.jsx)(fk.f, {
+         }), qC() && (0, oC.jsx)(wC.g, {
```

#### 26. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L227` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L228) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L227)

```diff
-         }), (0, rk.jsx)(fk.f, {
+         }), (0, oC.jsx)(wC.g, {
```

#### 27. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L230` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L231) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L230)

```diff
-             Mk.current.click()
+             (0, fC.c)(WC.current)
```

#### 28. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L237` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L238) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L237)

```diff
-   4926: (kk, ek, ik) => {
+   4942: (CC, zC, ZC) => {
```

#### 29. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L240-L242` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L242-L243) · [Before (L240-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L240-L242)

```diff
-       i: () => yk,
-       m: () => Hk,
-       q: () => pk
+       f: () => SC,
+       h: () => GC
```

#### 30. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L244-L249` → after: `L245-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L245-L250) · [Before (L244-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L244-L249)

```diff
-     var Dk = ik(60),
-       fk = ik(4935),
-       Sk = ik(4319),
-       bk = ik(1345),
-       rk = ik(4946),
-       Pk = ik(1021),
+     var QC = ZC(48),
+       wC = ZC(4947),
+       bC = ZC(4300),
+       nC = ZC(1321),
+       fC = ZC(4971),
+       oC = ZC(1002),
```

#### 31. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L251-L254` → after: `L252-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L252-L255) · [Before (L251-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L251-L254)

```diff
-       Mk = ik(1333),
-       Kk = ik(1688),
-       xk = ik(4951),
-       nk = ik(1066);
+       FC = ZC(1307),
+       WC = ZC(1645),
+       NC = ZC(4979),
+       MC = ZC(1056);
```

#### 32. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L280` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L281) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L280)

```diff
-             children: (0, nk.jsx)(Sk.d, {
+             children: (0, MC.jsx)(bC.e, {
```

#### 33. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L290` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L291) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L290)

```diff
-               children: (0, nk.jsx)(bk.e, {
+               children: (0, MC.jsx)(nC.b, {
```

#### 34. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L337` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L338) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L337)

```diff
-           children: [`${ek}: ${Kk?Kk(Yk):Yk}`, Mk && (0, nk.jsx)(bk.e, {
+           children: [`${zC}: ${WC?WC(AC):AC}`, FC && (0, MC.jsx)(nC.b, {
```

#### 35. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L392` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L393) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L392)

```diff
-         const Dk = null !== (kk = null === (ek = Ak.current) || void 0 === ek ? void 0 : ek.querySelector(".rangeslider")) && void 0 !== kk ? kk : null;
+         const QC = null !== (CC = null === (zC = IC.current) || void 0 === zC ? void 0 : zC.querySelector(".rangeslider")) && void 0 !== CC ? CC : null;
```

#### 36. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L398` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L399) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L398)

```diff
-       const sk = (null !== (ek = String(rk).split(".")[1]) && void 0 !== ek ? ek : "").length,
+       const vC = (null !== (zC = String(fC).split(".")[1]) && void 0 !== zC ? zC : "").length,
```

#### 37. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L416` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L417) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L416)

```diff
-       return (0, xk.f)(jk, {
+       return (0, NC.g)(iC, {
```

#### 38. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L419` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L420) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L419)

```diff
-           const ek = null !== Lk && void 0 !== Lk ? Lk : Math.max(rk, Math.round((bk - Sk) / 20 / rk) * rk),
+           const zC = null !== xC && void 0 !== xC ? xC : Math.max(fC, Math.round((nC - bC) / 20 / fC) * fC),
```

#### 39. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L425` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L426) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L425)

```diff
-           const ek = dk(Sk + (Mk ? 1 - kk : kk) * (bk - Sk));
+           const zC = eC(bC + (FC ? 1 - CC : CC) * (nC - bC));
```

#### 40. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L436` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L437) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L436)

```diff
-         children: (0, nk.jsx)(fk.e, {
+         children: (0, MC.jsx)(wC.b, {
```

#### 41. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L481` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L482) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L481)

```diff
-           children: [ek, Sk && (0, nk.jsx)(bk.e, {
+           children: [zC, bC && (0, MC.jsx)(nC.b, {
```

#### 42. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L494` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L495) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L494)

```diff
-   4924: (kk, ek, ik) => {
+   4933: (CC, zC, ZC) => {
```

#### 43. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L496-L497` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L497-L498) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L496-L497)

```diff
-       b: () => wk,
-       c: () => lk
+       e: () => pC,
+       f: () => PC
```

#### 44. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L499-L502` → after: `L500-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L500-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L500-L503) · [Before (L499-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L499-L502)

```diff
-     var Dk = ik(3128),
-       fk = ik(2107),
-       Sk = ik(60),
-       bk = ik(1021),
+     var QC = ZC(3140),
+       wC = ZC(2063),
+       bC = ZC(48),
+       nC = ZC(1002),
```

#### 45. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L504-L511` → after: `L505-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L505-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L505-L512) · [Before (L504-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L504-L511)

```diff
-       Pk = ik(1327),
-       mk = ik(3121),
-       Mk = ik(1333),
-       Kk = ik(4926),
-       xk = ik(4955),
-       nk = ik(610),
-       Uk = ik(4974),
-       Hk = ik(1066);
+       oC = ZC(1295),
+       qC = ZC(3137),
+       FC = ZC(1307),
+       WC = ZC(4942),
+       NC = ZC(4985),
+       MC = ZC(615),
+       gC = ZC(5013),
+       SC = ZC(1056);
```

#### 46. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L521-L524` → after: `L522-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L522-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L522-L525) · [Before (L521-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L521-L524)

```diff
-         mk.e.setFromJson(kk, "player");
-         const Dk = mk.e.saveTexturePack();
-         if (nk.s) {
-           const kk = mk.e.toJson();
+         qC.c.setFromJson(CC, "player");
+         const QC = qC.c.saveTexturePack();
+         if (MC.z) {
+           const CC = qC.c.toJson();
```

#### 47. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L526` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L527) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L526)

```diff
-             ek && (0, Uk.e)(kk)
+             zC && (0, gC.c)(CC)
```

#### 48. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L528` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L529) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L528)

```diff
-         } else rk.current ||= ek, Pk.current !== mk.e.getId() || mk.e.getId() === fk.u.CUSTOM && rk.current ? ik((() => Kk.q)) : ik(null);
+         } else fC.current ||= zC, oC.current !== qC.c.getId() || qC.c.getId() === wC.q.CUSTOM && fC.current ? ZC((() => WC.h)) : ZC(null);
```

#### 49. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L532-L533` → after: `L533-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L533-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L533-L534) · [Before (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L532-L533)

```diff
-         if (mk.e.getId() !== kk.metaData.id) {
-           if (mk.e.getId() === fk.u.CUSTOM && mk.e.getFromFolderName()) {
+         if (qC.c.getId() !== CC.metaData.id) {
+           if (qC.c.getId() === wC.q.CUSTOM && qC.c.getFromFolderName()) {
```

#### 50. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L548` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L549) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L548)

```diff
-         Pk.current = mk.e.getId()
+         oC.current = qC.c.getId()
```

#### 51. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L550-L551` → after: `L551-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L551-L552) · [Before (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L550-L551)

```diff
-       const yk = Dk.c,
-         Yk = [yk, ...Object.values(fk.u).filter((kk => kk !== yk))];
+       const RC = QC.d,
+         AC = [RC, ...Object.values(wC.q).filter((CC => CC !== RC))];
```

#### 52. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L559` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L560) · [Before (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L559)

```diff
-               isSelected: kk === mk.e.getId(),
+               isSelected: CC === qC.c.getId(),
```

#### 53. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L562-L563` → after: `L563-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L563-L564) · [Before (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L562-L563)

```diff
-           }), mk.e.getId() === fk.u.CUSTOM && (0, Hk.jsx)(xk.c, {
-             folderName: null !== (ek = mk.e.getFromFolderName()) && void 0 !== ek ? ek : null,
+           }), qC.c.getId() === wC.q.CUSTOM && (0, SC.jsx)(NC.c, {
+             folderName: null !== (zC = qC.c.getFromFolderName()) && void 0 !== zC ? zC : null,
```

#### 54. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L582` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L583) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L582)

```diff
-         (0, Dk.l)(ek).then((kk => {
+         (0, QC.n)(zC).then((CC => {
```

#### 55. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L584` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L585) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L584)

```diff
-           kk && (yk.current = kk, Kk(!1), nk(yk.current.metaData.name), wk(yk.current.metaData.author), pk(null !== (ek = yk.current.metaData.previewImage) && void 0 !== ek ? ek : ""))
+           CC && (RC.current = CC, WC(!1), MC(RC.current.metaData.name), pC(RC.current.metaData.author), GC(null !== (zC = RC.current.metaData.previewImage) && void 0 !== zC ? zC : ""))
```

#### 56. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L586` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L587) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L586)

```diff
-           console.warn(`Failed to fetch texture pack ${ek}`, kk)
+           console.warn(`Failed to fetch texture pack ${zC}`, CC)
```

#### 57. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L593` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L594) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L593)

```diff
-           Custom: ek === fk.u.CUSTOM,
+           Custom: zC === wC.q.CUSTOM,
```

#### 58. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L602` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L603) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L602)

```diff
-             backgroundImage: lk ? `url(${lk})` : void 0
+             backgroundImage: PC ? `url(${PC})` : void 0
```

#### 59. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L617` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L618) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L617)

```diff
-   4959: (kk, ek, ik) => {
+   4992: (CC, zC, ZC) => {
```

#### 60. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L619` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L620) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L619)

```diff
-       c: () => rk,
+       d: () => fC,
```

#### 61. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L621` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L622) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L621)

```diff
-       j: () => Sk
+       h: () => bC
```

#### 62. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L623` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L624) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L623)

```diff
-     var Dk = ik(4961);
+     var QC = ZC(4998);
```

#### 63. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L629` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L630) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L629)

```diff
-       for (const fk in ik) Dk[fk] = `\0${fk}\0`;
+       for (const wC in ZC) QC[wC] = `\0${wC}\0`;
```

#### 64. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L634` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L635) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L634)

```diff
-       return null === kk.file ? null : kk.line > 0 ? `${kk.file}:${kk.line}` : kk.file
+       return null === CC.file ? null : CC.line > 0 ? `${CC.file}:${CC.line}` : CC.file
```

#### 65. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L647` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L648) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L647)

```diff
-     const mk = fk.map((kk => new Set(Dk.e.map(kk)).size));
+     const qC = wC.map((CC => new Set(QC.f.map(CC)).size));
```

#### 66. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L668` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L669) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L668)

```diff
-         ik.set(kk, [...null !== (Dk = ik.get(kk)) && void 0 !== Dk ? Dk : [], fk])
+         ZC.set(CC, [...null !== (QC = ZC.get(CC)) && void 0 !== QC ? QC : [], wC])
```

#### 67. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L673` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L674) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L673)

```diff
-   4946: (kk, ek, ik) => {
+   4971: (CC, zC, ZC) => {
```

#### 68. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L677` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L678) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L677)

```diff
-     var Dk = ik(1021),
+     var QC = ZC(1002),
```

#### 69. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L679` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L680) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L679)

```diff
-       Sk = ik(1066);
+       bC = ZC(1056);
```

#### 70. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L723` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L724) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L723)

```diff
-   4951: (kk, ek, ik) => {
+   4979: (CC, zC, ZC) => {
```

#### 71. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L726` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L727) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L726)

```diff
-       f: () => bk
+       g: () => nC
```

#### 72. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L728` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L729) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L728)

```diff
-     var Dk = ik(60);
+     var QC = ZC(48);
```

#### 73. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L733` → after: `L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L734) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L733)

```diff
-         return ik && null !== (ek = fk.get(ik)) && void 0 !== ek ? ek : null
+         return ZC && null !== (zC = wC.get(ZC)) && void 0 !== zC ? zC : null
```

#### 74. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L754` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L755) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L754)

```diff
-   4961: (kk, ek, ik) => {
+   4998: (CC, zC, ZC) => {
```

#### 75. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L756-L758` → after: `L757-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L757-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L757-L759) · [Before (L756-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L756-L758)

```diff
-       c: () => Dk.g,
-       e: () => fk,
-       g: () => Dk.l
+       b: () => QC.j,
+       f: () => wC,
+       i: () => QC.q
```

#### 76. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L760` → after: `L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L761) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L760)

```diff
-     var Dk = ik(4965);
+     var QC = ZC(5002);
```

#### 77. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L766` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L767) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L766)

```diff
-   4977: (kk, ek, ik) => {
+   5021: (CC, zC, ZC) => {
```

#### 78. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L780` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L781) · [Before (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L780)

```diff
-       e: () => Dk
+       b: () => QC
```

#### 79. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L783` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L784) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L783)

```diff
-   4974: (kk, ek, ik) => {
+   5013: (CC, zC, ZC) => {
```

#### 80. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L785-L786` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L786-L787) · [Before (L785-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L785-L786)

```diff
-       e: () => bk,
-       i: () => rk
+       c: () => nC,
+       d: () => fC
```

#### 81. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L788-L789` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L789-L790) · [Before (L788-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L788-L789)

```diff
-     var Dk = ik(2107),
-       fk = ik(4977);
+     var QC = ZC(2063),
+       wC = ZC(5021);
```

#### 82. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L794` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L795) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L794)

```diff
-         pack: kk.metaData.id === Dk.d ? null : kk
+         pack: CC.metaData.id === QC.c ? null : CC
```

#### 83. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L799` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L800) · [Before (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L799)

```diff
-       return !(null === Sk || !(0, fk.e)(Sk.pack, kk)) && (Sk = null, !0)
+       return !(null === bC || !(0, wC.b)(bC.pack, CC)) && (bC = null, !0)
```

#### 84. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L802` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L803) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L802)

```diff
-   4965: (kk, ek, ik) => {
+   5002: (CC, zC, ZC) => {
```

#### 85. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L807-L810` → after: `L807-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L807-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L807-L810) · [Before (L807-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L807-L810)

```diff
-       h: () => Hk,
-       i: () => Kk,
-       l: () => fk,
-       p: () => Sk,
+       j: () => QC,
+       k: () => SC,
+       m: () => WC,
+       q: () => wC,
```

#### 86. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L812-L813` → after: `L812-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L812-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L812-L814) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L812-L813)

```diff
-       t: () => Mk,
-       u: () => xk
+       s: () => qC,
+       w: () => FC,
+       y: () => NC
```

#### 87. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L832` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L833) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L832)

```diff
-         if ("string" !== typeof Dk) return `${ik} isn't text.`;
+         if ("string" !== typeof QC) return `${ZC} isn't text.`;
```

#### 88. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L841` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L842) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L841)

```diff
-           if (kk.length > rk) return `The pack has more than ${rk} .wgsl files.`;
+           if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
```

#### 89. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L849` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L850) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L849)

```diff
-             if (ek.has(ik)) return `The pack has two files at ${ik}.`;
+             if (zC.has(ZC)) return `The pack has two files at ${ZC}.`;
```

#### 90. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L852` → after: `L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L853) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L852)

```diff
-           return xk(kk) > bk ? `The pack's .wgsl files are over ${bk/1024} KB in total.` : null
+           return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
```

#### 91. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L877-L880` → after: `L878-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L878-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L878-L881) · [Before (L877-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L877-L880)

```diff
-       if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
-       if (kk.length > Pk) return `A file path is over ${Pk} characters.`;
-       if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
-       return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
+       if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
+       if (CC.length > oC) return `A file path is over ${oC} characters.`;
+       if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
+       return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
```

#### 92. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L913` → after: `L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/103.js#L914) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/103.js#L913)

```diff
-           return (ek[ik]?.numAnimStates ?? 0) > 1 && !rk.has(Dk) ? Dk : kk
+           return (zC[ZC]?.numAnimStates ?? 0) > 1 && !fC.has(QC) ? QC : CC
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/104.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/104.js` (2768 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9)

#### 1. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L4)

```diff
-   6357: (kk, ek, ik) => {
+   6513: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L8-L16` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L8-L16) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L8-L16)

```diff
-     var Dk = ik(60),
-       fk = ik(1410),
-       Sk = ik(1459),
-       bk = ik(3447),
-       rk = ik(1095),
-       Pk = ik(1327),
-       mk = ik(1345),
-       Mk = ik(1033),
-       Kk = ik(1021),
+     var QC = ZC(48),
+       wC = ZC(1388),
+       bC = ZC(1439),
+       nC = ZC(3452),
+       fC = ZC(1076),
+       oC = ZC(1295),
+       qC = ZC(1321),
+       FC = ZC(1013),
+       WC = ZC(1002),
```

#### 3. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L18` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L18-L19) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L18)

```diff
-       nk = ik(1066);
+       MC = ZC(6505),
+       gC = ZC(1056);
```

#### 4. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L34) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29)

```diff
-           children: [(0, nk.jsx)(Mk.d, {
+           children: [(0, gC.jsx)(FC.c, {
```

#### 5. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L32` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L37) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L32)

```diff
-             children: ek.summary
+             children: QC(zC.status)
```

#### 6. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L36-L47` → after: `L41-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L41-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L41-L58) · [Before (L36-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L36-L47)

```diff
-           children: ek.rows.map((kk => (0, nk.jsxs)("div", {
-             className: xk()("GameApprovalInfoRow", kk.passed ? "Passed" : "Failed"),
-             children: [(0, nk.jsx)(Mk.d, {
-               name: kk.passed ? "check" : "xmark"
-             }), (0, nk.jsxs)("div", {
-               className: "GameApprovalInfoRowText",
-               children: [(0, nk.jsx)("div", {
-                 className: "GameApprovalInfoRowLabel",
-                 children: kk.label
-               }), (0, nk.jsx)("div", {
-                 className: "GameApprovalInfoRowValue",
-                 children: kk.valueText
+           children: zC.rows.map((CC => {
+             const {
+               label: zC,
+               value: ZC
+             } = wC(CC);
+             return (0, gC.jsxs)("div", {
+               className: NC()("GameApprovalInfoRow", CC.passed ? "Passed" : "Failed"),
+               children: [(0, gC.jsx)(FC.c, {
+                 name: CC.passed ? "check" : "xmark"
+               }), (0, gC.jsxs)("div", {
+                 className: "GameApprovalInfoRowText",
+                 children: [(0, gC.jsx)("div", {
+                   className: "GameApprovalInfoRowLabel",
+                   children: zC
+                 }), null !== ZC && (0, gC.jsx)("div", {
+                   className: "GameApprovalInfoRowValue",
+ ... (2 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L49-L50` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L60-L61) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L49-L50)

```diff
-             })]
-           }, kk.label)))
+             }, CC.kind)
+           }))
```

#### 8. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L54-L55` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L65-L66) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L54-L55)

```diff
-     var Hk = ik(1172),
-       wk = ik(1333);
+     var pC = ZC(1143),
+       PC = ZC(1307);
```

#### 9. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L76` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L87) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L76)

```diff
-       } = (0, Hk.D)(), {
+       } = (0, pC.y)(), {
```

#### 10. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L78-L79` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L89-L90) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L78-L79)

```diff
-       } = (0, rk.d)(), lk = (0, bk.e)(), [pk, yk] = (0, Dk.useState)(null), [Yk, Lk] = (0, Dk.useState)(null), [Ck, Ak] = (0, Dk.useState)(!1), jk = (0, Dk.useCallback)((() => {
-         Lk(null), Sk.b.getGameApprovalInfo(wk, ek).then((kk => {
+       } = (0, fC.e)(), PC = (0, nC.e)(), [GC, RC] = (0, QC.useState)(null), [AC, xC] = (0, QC.useState)(null), [JC, IC] = (0, QC.useState)(!1), iC = (0, QC.useCallback)((() => {
+         xC(null), bC.d.getGameApprovalInfo(MC, zC).then((CC => {
```

#### 11. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L89` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L100) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L89)

```diff
-         Ck || (Ak(!0), Sk.b.setGameApproval(wk, ek, kk).then((() => {
+         JC || (IC(!0), bC.d.setGameApproval(MC, zC, CC).then((() => {
```

#### 12. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L113` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L124) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L113)

```diff
-             children: [!0 !== pk.manualOverride && (0, nk.jsx)(mk.i, {
+             children: [!0 !== GC.manualOverride && (0, gC.jsx)(qC.d, {
```

#### 13. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L115` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L126) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L115)

```diff
-                 children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
+                 children: NC("studio:approvalApproveTooltip")
```

#### 14. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L117` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L128) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L117)

```diff
-               children: (0, nk.jsxs)(fk.r, {
+               children: (0, gC.jsxs)(wC.o, {
```

#### 15. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L123` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L134) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L123)

```diff
-                 children: [(0, nk.jsx)(Mk.d, {
+                 children: [(0, gC.jsx)(FC.c, {
```

#### 16. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L125` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L136) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L125)

```diff
-                 }), " Manually Approve"]
+                 }), " ", NC("studio:approvalApprove")]
```

#### 17. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L127` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L138) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L127)

```diff
-             }), !1 !== pk.manualOverride && (0, nk.jsx)(mk.i, {
+             }), !1 !== GC.manualOverride && (0, gC.jsx)(qC.d, {
```

#### 18. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L129` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L140) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L129)

```diff
-                 children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
+                 children: NC("studio:approvalDenyTooltip")
```

#### 19. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L131` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L142) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L131)

```diff
-               children: (0, nk.jsxs)(fk.R, {
+               children: (0, gC.jsxs)(wC.I, {
```

#### 20. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L137` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L148) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L137)

```diff
-                 children: [(0, nk.jsx)(Mk.d, {
+                 children: [(0, gC.jsx)(FC.c, {
```

#### 21. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L139` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L150) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L139)

```diff
-                 }), " Manually Deny"]
+                 }), " ", NC("studio:approvalDeny")]
```

#### 22. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L141` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L152) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L141)

```diff
-             }), null !== pk.manualOverride && (0, nk.jsx)(mk.i, {
+             }), null !== GC.manualOverride && (0, gC.jsx)(qC.d, {
```

#### 23. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L143` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L154) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L143)

```diff
-                 children: "Remove the manual override and revert the game to the auto-approval criteria."
+                 children: NC("studio:approvalClearOverrideTooltip")
```

#### 24. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L145` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L156) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L145)

```diff
-               children: (0, nk.jsxs)(fk.f, {
+               children: (0, gC.jsxs)(wC.g, {
```

#### 25. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L151` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L162) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L151)

```diff
-                 children: [(0, nk.jsx)(Mk.d, {
+                 children: [(0, gC.jsx)(FC.c, {
```

#### 26. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L153` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L164) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L153)

```diff
-                 }), " Clear Override"]
+                 }), " ", NC("studio:approvalClearOverride")]
```

#### 27. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L161` → after: `L172-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L172-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L172-L254) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L161)

```diff
-   4858: (kk, ek, ik) => {
+   6505: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => fC,
+       g: () => nC
+     });
+     var QC = ZC(326),
+       wC = ZC(1143);
+     const bC = {
+       manuallyApproved: "studio:approvalStatusManuallyApproved",
+       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
+       manuallyDenied: "studio:approvalStatusManuallyDenied",
+       autoApproved: "studio:approvalStatusAutoApproved",
+       notApproved: "studio:approvalStatusNotApproved",
+       notIndexed: "studio:approvalStatusNotIndexed"
+     };
+ 
+ ... (67 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L165-L167` → after: `L258-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L258-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L258-L260) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L165-L167)

```diff
-     var Dk = ik(60),
-       fk = ik(1496),
-       Sk = ik(1021),
+     var QC = ZC(48),
+       wC = ZC(1463),
+       bC = ZC(1002),
```

#### 29. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L169-L187` → after: `L262-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L262-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L262-L265) · [Before (L169-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L169-L187)

```diff
-       rk = ik(1005),
-       Pk = ik(1207),
-       mk = ik(996),
-       Mk = ik(314),
-       Kk = ik(1519),
-       xk = ik(987),
-       nk = ik(1172),
-       Uk = ik(1095),
-       Hk = ik(302),
-       wk = ik(1459),
-       lk = ik(22),
-       pk = ik(1893),
-       yk = ik(1410),
-       Yk = ik(1033),
-       Lk = ik(1327),
-       Ck = ik(4840),
- ... (3 more removed lines; see GitHub link above)
+       fC = ZC(979),
+       oC = ZC(1169),
+       qC = ZC(970),
+       FC = ZC(326),
```

#### 30. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L189-L190` → after: `L267-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L267-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L267-L283) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L189-L190)

```diff
-       Vk = ik(4505),
-       Fk = ik(2499);
+       NC = ZC(964),
+       MC = ZC(1143),
+       gC = ZC(1076),
+       SC = ZC(310),
+       pC = ZC(1439),
+       PC = ZC(20),
+       GC = ZC(1840),
+       RC = ZC(1388),
+       AC = ZC(1013),
+       xC = ZC(1295),
+       JC = ZC(4847),
+       IC = ZC(4873),
+       iC = ZC(4893),
+       vC = ZC(5024),
+       eC = ZC(1453),
+       hC = ZC(4496),
+ ... (1 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L223-L225` → after: `L316-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L316-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L316-L318) · [Before (L223-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L223-L225)

```diff
-     var Qk = ik(3501),
-       vk = ik(1177),
-       Ek = ik(1104);
+     var EC = ZC(3507),
+       lC = ZC(1149),
+       XC = ZC(1078);
```

#### 32. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L239` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L332) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L239)

```diff
-         return await (0, Ek.postJsonWithMetricsCookiesAndJsonResponse)(`${vk.clientSideServerUrls.indexUrl}${kk}`, ik, Dk, ek.getMetricsCookies())
+         return await (0, XC.postJsonWithMetricsCookiesAndJsonResponse)(`${lC.clientSideServerUrls.indexUrl}${CC}`, ZC, QC, zC.getMetricsCookies())
```

#### 33. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L380-L394` → after: `L473-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L473-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L473-L487) · [Before (L380-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L380-L394)

```diff
-     var Xk = ik(1345),
-       Bk = ik(4982),
-       ck = ik(5337),
-       Tk = ik(6256),
-       Zk = ik(6239),
-       Ok = ik(6253),
-       gk = ik(5818),
-       Gk = ik(6224),
-       Nk = ik(6232),
-       Rk = ik(6170),
-       Jk = ik(3098),
-       ke = ik(6262),
-       ee = ik(6120),
-       ie = ik(6127),
-       De = ik(1648);
+     var TC = ZC(1321),
+       aC = ZC(5033),
+       tC = ZC(5450),
+       DC = ZC(6411),
+       jC = ZC(6396),
+       yC = ZC(6409),
+       LC = ZC(5980),
+       UC = ZC(6390),
+       BC = ZC(6394),
+       OC = ZC(6334),
+       kC = ZC(3113),
+       VC = ZC(6415),
+       Cz = ZC(6283),
+       zz = ZC(6285),
+       Zz = ZC(1593);
```

#### 34. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L413-L414` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L506-L507) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L413-L414)

```diff
-       const ek = be.test(kk) ? `'${kk}` : kk;
-       return /[",\r\n]/.test(ek) ? `"${ek.replace(/"/g,'""')}"` : ek
+       const zC = bz.test(CC) ? `'${CC}` : CC;
+       return /[",\r\n]/.test(zC) ? `"${zC.replace(/"/g,'""')}"` : zC
```

#### 35. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L426-L427` → after: `L519-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L519-L520) · [Before (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L426-L427)

```diff
-     var Ke = ik(1688),
-       xe = ik(1066);
+     var Fz = ZC(1645),
+       Wz = ZC(1056);
```

#### 36. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L438` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L531) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L438)

```diff
-       return (0, xe.jsx)(Xk.i, {
+       return (0, Wz.jsx)(TC.d, {
```

#### 37. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L442` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L535) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L442)

```diff
-         children: (0, xe.jsxs)(yk.X, {
+         children: (0, Wz.jsxs)(RC.O, {
```

#### 38. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L447` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L540) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L447)

```diff
-           children: [(0, xe.jsx)(Yk.d, {
+           children: [(0, Wz.jsx)(AC.c, {
```

#### 39. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L466` → after: `L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L559) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L466)

```diff
-       } = (0, nk.D)();
+       } = (0, MC.y)();
```

#### 40. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L474` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L567) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L474)

```diff
-           (0, Ke.downloadBlob)(new Blob([`${Ue}${kk}`], {
+           (0, Fz.downloadBlob)(new Blob([`${Mz}${CC}`], {
```

#### 41. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L478` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L571) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L478)

```diff
-             return `${""===ek?"export":ek}.csv`
+             return `${""===zC?"export":zC}.csv`
```

#### 42. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L510` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L603) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L510)

```diff
-         ik = Date.parse(`${kk.endDay}T00:00:00Z`);
+         ZC = Date.parse(`${CC.endDay}T00:00:00Z`);
```

#### 43. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L549` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L642) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L549)

```diff
-         const bk = Math.max(null !== (ik = ek.value) && void 0 !== ik ? ik : 0, null !== (Dk = ek.comparisonValue) && void 0 !== Dk ? Dk : 0, null !== (fk = null === (Sk = ek.comparisonBand) || void 0 === Sk ? void 0 : Sk[1]) && void 0 !== fk ? fk : 0);
+         const nC = Math.max(null !== (ZC = zC.value) && void 0 !== ZC ? ZC : 0, null !== (QC = zC.comparisonValue) && void 0 !== QC ? QC : 0, null !== (wC = null === (bC = zC.comparisonBand) || void 0 === bC ? void 0 : bC[1]) && void 0 !== wC ? wC : 0);
```

#### 44. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L555` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L648) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L555)

```diff
-           bk = ik ? kk : Math.round(kk);
+           nC = ZC ? CC : Math.round(CC);
```

#### 45. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L574` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L667) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L574)

```diff
-         Dk = ek ? ik : Math.max(1, ik);
+         QC = zC ? ZC : Math.max(1, ZC);
```

#### 46. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L619` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L712) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L619)

```diff
-       return null !== (ik = null === (Dk = kk[ek]) || void 0 === Dk ? void 0 : Dk.percent) && void 0 !== ik ? ik : null
+       return null !== (ZC = null === (QC = CC[zC]) || void 0 === QC ? void 0 : QC.percent) && void 0 !== ZC ? ZC : null
```

#### 47. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L632` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L725) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L632)

```diff
-       return `${Math.round(kk)}%`
+       return `${Math.round(CC)}%`
```

#### 48. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L636` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L729) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L636)

```diff
-       return `${kk.toFixed(1)}%`
+       return `${CC.toFixed(1)}%`
```

#### 49. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L640` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L733) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L640)

```diff
-       return kk >= ek ? `${kk}m+` : `${kk}m`
+       return CC >= zC ? `${CC}m+` : `${CC}m`
```

#### 50. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L669` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L762) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L669)

```diff
-       if (ek < 60) return `${ek}s`;
+       if (zC < 60) return `${zC}s`;
```

#### 51. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L671-L672` → after: `L764-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L764-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L764-L765) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L671-L672)

```diff
-       if (ik < 60) return `${ik}m ${ek%60}s`;
-       return `${Math.floor(ik/60)}h ${ik%60}m`
+       if (ZC < 60) return `${ZC}m ${zC%60}s`;
+       return `${Math.floor(ZC/60)}h ${ZC%60}m`
```

#### 52. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L677` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L770) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L677)

```diff
-       return "1d" === ek ? le(kk, !0) : `${le(kk)}, ${pe(kk)}`
+       return "1d" === zC ? pz(CC, !0) : `${pz(CC)}, ${Pz(CC)}`
```

#### 53. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L689` → after: `L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L782) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L689)

```diff
-       } = (0, nk.D)(), bk = kk => null === kk || void 0 === kk ? fk : Dk(kk), rk = ek.comparisonBand;
+       } = (0, MC.y)(), nC = CC => null === CC || void 0 === CC ? wC : QC(CC), fC = zC.comparisonBand;
```

#### 54. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L711` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L804) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L711)

```diff
-       return ik ? [`${ek}: ${kk("studio:comparisonPercentile20")}`, `${ek}: ${kk("studio:comparisonPercentile50")}`, `${ek}: ${kk("studio:comparisonPercentile80")}`] : [ek]
+       return ZC ? [`${zC}: ${CC("studio:comparisonPercentile20")}`, `${zC}: ${CC("studio:comparisonPercentile50")}`, `${zC}: ${CC("studio:comparisonPercentile80")}`] : [zC]
```

#### 55. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L716` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L809) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L716)

```diff
-       return ek ? [null !== (ik = null === (Dk = kk.comparisonBand) || void 0 === Dk ? void 0 : Dk[0]) && void 0 !== ik ? ik : null, null !== (fk = kk.comparisonValue) && void 0 !== fk ? fk : null, null !== (Sk = null === (bk = kk.comparisonBand) || void 0 === bk ? void 0 : bk[1] … [truncated]
+       return zC ? [null !== (ZC = null === (QC = CC.comparisonBand) || void 0 === QC ? void 0 : QC[0]) && void 0 !== ZC ? ZC : null, null !== (wC = CC.comparisonValue) && void 0 !== wC ? wC : null, null !== (bC = null === (nC = CC.comparisonBand) || void 0 === nC ? void 0 : nC[1] … [truncated]
```

#### 56. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L740` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L833) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L740)

```diff
-           children: null === Mk.value ? bk : Sk(Mk.value)
+           children: null === FC.value ? nC : bC(FC.value)
```

#### 57. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L751-L752` → after: `L844-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L844-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L844-L845) · [Before (L751-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L751-L752)

```diff
-             }), kk.label, ": ", null === Dk || void 0 === Dk ? bk : Sk(Dk)]
-           }, `StudioStatsChartTooltipLine-${ek}`)
+             }), CC.label, ": ", null === QC || void 0 === QC ? nC : bC(QC)]
+           }, `StudioStatsChartTooltipLine-${zC}`)
```

#### 58. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L806` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L899) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L806)

```diff
-         oV: Sk
+         lY: bC
```

#### 59. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L810` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L903) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L810)

```diff
-       } = (0, nk.D)();
+       } = (0, MC.y)();
```

#### 60. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L821` → after: `L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L914) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L821)

```diff
-           ...(0, yk.db)(),
+           ...(0, RC.U)(),
```

#### 61. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L826` → after: `L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L919) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L826)

```diff
-           children: (0, xe.jsx)(Yk.d, {
+           children: (0, Wz.jsx)(AC.c, {
```

#### 62. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L843` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L936) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L843)

```diff
-       } = (0, nk.D)();
+       } = (0, MC.y)();
```

#### 63. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L854-L855` → after: `L947-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L947-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L947-L948) · [Before (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L854-L855)

```diff
-           oV: kk.oV
-         }, `StudioChartLegendLine-${ek}`))), void 0 !== Dk && fk && (0, xe.jsxs)(xe.Fragment, {
+           lY: CC.lY
+         }, `StudioChartLegendLine-${zC}`))), void 0 !== QC && wC && (0, Wz.jsxs)(Wz.Fragment, {
```

#### 64. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L896` → after: `L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L989) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L896)

```diff
-       } = (0, nk.D)(), lk = void 0 !== Mk || void 0 !== Kk;
+       } = (0, MC.y)(), PC = void 0 !== FC || void 0 !== WC;
```

#### 65. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L905` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L998) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L905)

```diff
-             children: [ek, (0, xe.jsx)(Xk.e, {
+             children: [zC, (0, Wz.jsx)(TC.b, {
```

#### 66. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L960` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1053) · [Before (L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L960)

```diff
-       } = (0, nk.D)(), pk = null !== Hk && void 0 !== Hk ? Hk : [], yk = Sk.filter((kk => null !== kk.value)).length, Yk = pk.some((kk => kk.values.some((kk => null !== kk)))), Lk = void 0 !== Kk && Sk.some((kk => null !== kk.comparisonValue && void 0 !== kk.comparisonValue)), Ck … [truncated]
+       } = (0, MC.y)(), GC = null !== SC && void 0 !== SC ? SC : [], RC = bC.filter((CC => null !== CC.value)).length, AC = GC.some((CC => CC.values.some((CC => null !== CC)))), xC = void 0 !== WC && bC.some((CC => null !== CC.comparisonValue && void 0 !== CC.comparisonValue)), JC … [truncated]
```

#### 67. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L964` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1057) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L964)

```diff
-             dateMs: null !== (ik = null === (Dk = Sk[ek]) || void 0 === Dk ? void 0 : Dk.dateMs) && void 0 !== ik ? ik : 0,
+             dateMs: null !== (ZC = null === (QC = bC[zC]) || void 0 === QC ? void 0 : QC.dateMs) && void 0 !== ZC ? ZC : 0,
```

#### 68. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L975` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1068) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L975)

```diff
-           return null !== (ik = kk.values[ek]) && void 0 !== ik ? ik : null
+           return null !== (ZC = CC.values[zC]) && void 0 !== ZC ? ZC : null
```

#### 69. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L979` → after: `L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1072) · [Before (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L979)

```diff
-         const fk = (null !== kk && void 0 !== kk ? kk : []).map((kk => ii(kk, ek, ik, Dk))).filter((kk => null !== kk)),
+         const wC = (null !== CC && void 0 !== CC ? CC : []).map((CC => zZ(CC, zC, ZC, QC))).filter((CC => null !== CC)),
```

#### 70. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L982` → after: `L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1075) · [Before (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L982)

```diff
-           const ek = `${kk.dateMs}-${kk.label}`;
+           const zC = `${CC.dateMs}-${CC.label}`;
```

#### 71. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L988` → after: `L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1081) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L988)

```diff
-         seriesLabel: yk > 0 ? xk : void 0,
+         seriesLabel: RC > 0 ? NC : void 0,
```

#### 72. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L990` → after: `L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1083) · [Before (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L990)

```diff
-         comparisonLabel: Lk ? Kk : void 0,
+         comparisonLabel: xC ? WC : void 0,
```

#### 73. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1004` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1097) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1004)

```diff
-             [lk("Date"), ...yk > 0 ? [null !== xk && void 0 !== xk ? xk : ek] : [], ...pk.map((kk => kk.label)), ...kk], ...Sk.map(((kk, ek) => [Pe(kk.dateMs, bk), ...yk > 0 ? [kk.value] : [], ...pk.map((kk => {
+             [PC("Date"), ...RC > 0 ? [null !== NC && void 0 !== NC ? NC : zC] : [], ...GC.map((CC => CC.label)), ...CC], ...bC.map(((CC, zC) => [fz(CC.dateMs, nC), ...RC > 0 ? [CC.value] : [], ...GC.map((CC => {
```

#### 74. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1006` → after: `L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1099) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1006)

```diff
-               return null !== (ik = kk.values[ek]) && void 0 !== ik ? ik : null
+               return null !== (ZC = CC.values[zC]) && void 0 !== ZC ? ZC : null
```

#### 75. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1021` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1114) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1021)

```diff
-         children: (0, xe.jsx)(Bk.c, {
+         children: (0, Wz.jsx)(aC.d, {
```

#### 76. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1024` → after: `L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1117) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1024)

```diff
-           children: (0, xe.jsxs)(ck.b, {
+           children: (0, Wz.jsxs)(tC.d, {
```

#### 77. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1046` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1139) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1046)

```diff
-               Px: {
+               ZN: {
```

#### 78. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1050` → after: `L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1143) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1050)

```diff
-             }), (0, xe.jsx)(Ok.d, {
+             }), (0, Wz.jsx)(yC.b, {
```

#### 79. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1052` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1145) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1052)

```diff
-               Px: {
+               ZN: {
```

#### 80. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1058` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1151) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1058)

```diff
-             }), (0, xe.jsx)(gk.b, {
+             }), (0, Wz.jsx)(LC.e, {
```

#### 81. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1063` → after: `L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1156) · [Before (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1063)

```diff
-                 comparisonLabel: Lk ? Kk : void 0,
+                 comparisonLabel: xC ? WC : void 0,
```

#### 82. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1081` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1174) · [Before (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1081)

```diff
-             }), (0, xe.jsx)(Nk.d, {
+             }), (0, Wz.jsx)(BC.c, {
```

#### 83. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1098` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1191) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1098)

```diff
-                 }, `StudioStatsChartDot-${Dk}`) : (0, xe.jsx)("g", {}, `StudioStatsChartDot-${Dk}`)
+                 }, `StudioStatsChartDot-${QC}`) : (0, Wz.jsx)("g", {}, `StudioStatsChartDot-${QC}`)
```

#### 84. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1105` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1198) · [Before (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1105)

```diff
-             }), pk.map(((kk, ek) => (0, xe.jsx)(Nk.d, {
+             }), GC.map(((CC, zC) => (0, Wz.jsx)(BC.c, {
```

#### 85. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1109` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1202) · [Before (L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1109)

```diff
-                 return null !== (ik = null === (Dk = kk.lineValues) || void 0 === Dk ? void 0 : Dk[ek]) && void 0 !== ik ? ik : null
+                 return null !== (ZC = null === (QC = CC.lineValues) || void 0 === QC ? void 0 : QC[zC]) && void 0 !== ZC ? ZC : null
```

#### 86. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1127` → after: `L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1220) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1127)

```diff
-                 }, `StudioStatsChartLineDot-${ek}-${bk}`) : (0, xe.jsx)("g", {}, `StudioStatsChartLineDot-${ek}-${bk}`)
+                 }, `StudioStatsChartLineDot-${zC}-${nC}`) : (0, Wz.jsx)("g", {}, `StudioStatsChartLineDot-${zC}-${nC}`)
```

#### 87. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1134` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1227) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1134)

```diff
-             }, `StudioStatsChartLine-${ek}`))), Lk && (0, xe.jsx)(Nk.d, {
+             }, `StudioStatsChartLine-${zC}`))), xC && (0, Wz.jsx)(BC.c, {
```

#### 88. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1157` → after: `L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1250) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1157)

```diff
-             }, `${kk.dateMs}-${kk.label}`)))]
+             }, `${CC.dateMs}-${CC.label}`)))]
```

#### 89. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1187` → after: `L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1280) · [Before (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1187)

```diff
-       return kk.map((kk => null === fk ? kk.length * Mi * .65 : (fk.font = `${ik.fontStyle} ${ik.fontWeight} ${Mi}px ${ik.fontFamily}`, fk.measureText(kk).width + Dk * kk.length)))
+       return CC.map((CC => null === wC ? CC.length * qZ * .65 : (wC.font = `${ZC.fontStyle} ${ZC.fontWeight} ${qZ}px ${ZC.fontFamily}`, wC.measureText(CC).width + QC * CC.length)))
```

#### 90. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1203` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1296) · [Before (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1203)

```diff
-             Li([`${kk.slice(0,Sk)}\u2026`], ik)[0] <= ek ? Dk = Sk : fk = Sk
+             RZ([`${CC.slice(0,bC)}\u2026`], ZC)[0] <= zC ? QC = bC : wC = bC
```

#### 91. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1205` → after: `L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1298) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1205)

```diff
-           return `${kk.slice(0,Dk)}\u2026`
+           return `${CC.slice(0,QC)}\u2026`
```

#### 92. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1226-L1227` → after: `L1319-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1319-L1320) · [Before (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1226-L1227)

```diff
-       const Mk = null !== (ek = rk.texts[Sk]) && void 0 !== ek ? ek : "",
-         Kk = null !== (ik = Pk[Sk]) && void 0 !== ik ? ik : "",
+       const FC = null !== (zC = fC.texts[bC]) && void 0 !== zC ? zC : "",
+         WC = null !== (ZC = oC[bC]) && void 0 !== ZC ? ZC : "",
```

#### 93. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1233` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1326) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1233)

```diff
-         transform: `translate(${Dk},${fk})`,
+         transform: `translate(${QC},${wC})`,
```

#### 94. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1271` → after: `L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1364) · [Before (L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1271)

```diff
-           null !== kk && Uk((ek => null !== ek && ek.width === kk.clientWidth && ek.height === kk.clientHeight ? ek : {
+           null !== CC && gC((zC => null !== zC && zC.width === CC.clientWidth && zC.height === CC.clientHeight ? zC : {
```

#### 95. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1286` → after: `L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1379) · [Before (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1286)

```diff
-         pk = Math.max(null !== (ek = null === nk || void 0 === nk ? void 0 : nk.width) && void 0 !== ek ? ek : 0, lk),
+         GC = Math.max(null !== (zC = null === MC || void 0 === MC ? void 0 : MC.width) && void 0 !== zC ? zC : 0, PC),
```

#### 96. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1289` → after: `L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1382) · [Before (L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1289)

```diff
-         Lk = (null !== (ik = null === Yk || void 0 === Yk ? void 0 : Yk.xAxisHeight) && void 0 !== ik ? ik : ni) - ni,
+         xC = (null !== (ZC = null === AC || void 0 === AC ? void 0 : AC.xAxisHeight) && void 0 !== ZC ? ZC : NZ) - NZ,
```

#### 97. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1303` → after: `L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1396) · [Before (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1303)

```diff
-           height: `calc(var(--studio-chart-height, 14rem) + ${Lk}px)`,
+           height: `calc(var(--studio-chart-height, 14rem) + ${xC}px)`,
```

#### 98. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1306` → after: `L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1399) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1306)

```diff
-         children: null !== Yk && null !== nk && (0, xe.jsxs)(ke.c, {
+         children: null !== AC && null !== MC && (0, Wz.jsxs)(VC.e, {
```

#### 99. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1322` → after: `L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1415) · [Before (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1322)

```diff
-             Px: kk => (0, xe.jsx)(Ai, {
+             ZN: CC => (0, Wz.jsx)(xZ, {
```

#### 100. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1328` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1421) · [Before (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1328)

```diff
-           }), (0, xe.jsx)(Ok.d, {
+           }), (0, Wz.jsx)(yC.b, {
```

#### 101. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1330` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1423) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1330)

```diff
-             Px: {
+             ZN: {
```

#### 102. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1339` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1432) · [Before (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1339)

```diff
-           }), (0, xe.jsx)(gk.b, {
+           }), (0, Wz.jsx)(LC.e, {
```

#### 103. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1345` → after: `L1438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1438) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1345)

```diff
-           }), (0, xe.jsx)(ee.d, {
+           }), (0, Wz.jsx)(Cz.e, {
```

#### 104. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1350` → after: `L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1443) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1350)

```diff
-             children: fk.map(((kk, ek) => (0, xe.jsx)(ie.e, {
+             children: wC.map(((CC, zC) => (0, Wz.jsx)(zz.c, {
```

#### 105. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1417` → after: `L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1510) · [Before (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1417)

```diff
-       } = (0, nk.D)(), [lk, pk] = (0, Dk.useState)(""), yk = (0, Dk.useMemo)((() => bk.map((kk => function(kk, ek) {
+       } = (0, MC.y)(), [PC, GC] = (0, QC.useState)(""), RC = (0, QC.useMemo)((() => nC.map((CC => function(CC, zC) {
```

#### 106. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1427-L1428` → after: `L1520-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1520-L1521) · [Before (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1427-L1428)

```diff
-           return null !== (ik = null !== Dk && void 0 !== Dk ? Dk : kk[0]) && void 0 !== ik ? ik : null
-         }(kk, null !== (ik = Kk[ek]) && void 0 !== ik ? ik : null)
+           return null !== (ZC = null !== QC && void 0 !== QC ? QC : CC[0]) && void 0 !== ZC ? ZC : null
+         }(CC, null !== (ZC = WC[zC]) && void 0 !== ZC ? ZC : null)
```

#### 107. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1435` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1528) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1435)

```diff
-             if (mi(ik)) return void console.warn(`StudioStatsBarChart got ${ek.length} filters for data nested less deeply`);
+             if (oZ(ZC)) return void console.warn(`StudioStatsBarChart got ${zC.length} filters for data nested less deeply`);
```

#### 108. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1440` → after: `L1533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1533) · [Before (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1440)

```diff
-             console.warn(`StudioStatsBarChart got ${ek.length} filters for data nested more deeply`)
+             console.warn(`StudioStatsBarChart got ${zC.length} filters for data nested more deeply`)
```

#### 109. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1445` → after: `L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1538) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1445)

```diff
-           kk.labels.length !== kk.values.length && console.warn(`StudioStatsBarChart got ${kk.labels.length} labels for ${kk.values.length} values, drawing the shorter`);
+           CC.labels.length !== CC.values.length && console.warn(`StudioStatsBarChart got ${CC.labels.length} labels for ${CC.values.length} values, drawing the shorter`);
```

#### 110. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1448` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1541) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1448)

```diff
-             label: "" === ik ? ek : ik,
+             label: "" === ZC ? zC : ZC,
```

#### 111. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1455` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1548) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1455)

```diff
-           return "" === ik ? kk : kk.filter((kk => kk.label.toLowerCase().includes(ik)))
+           return "" === ZC ? CC : CC.filter((CC => CC.label.toLowerCase().includes(ZC)))
```

#### 112. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1463` → after: `L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1556) · [Before (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1463)

```diff
-           } = (0, nk.D)(), [fk, Sk] = (0, Dk.useState)({
+           } = (0, MC.y)(), [wC, bC] = (0, QC.useState)({
```

#### 113. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1524` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1617) · [Before (L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1524)

```diff
-           children: [(0, xe.jsx)(De.b, {
+           children: [(0, Wz.jsx)(Zz.c, {
```

#### 114. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1530` → after: `L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1623) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1530)

```diff
-           }(kk) ? (0, xe.jsx)(Jk.e, {
+           }(CC) ? (0, Wz.jsx)(kC.b, {
```

#### 115. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1542` → after: `L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1635) · [Before (L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1542)

```diff
-             return null !== (ek = null === kk || void 0 === kk ? void 0 : kk.label) && void 0 !== ek ? ek : ""
+             return null !== (zC = null === CC || void 0 === CC ? void 0 : CC.label) && void 0 !== zC ? zC : ""
```

#### 116. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1576` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1669) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1576)

```diff
-       const ik = kk.filter((kk => Math.round(kk.position) === ek)).map((kk => Number.isInteger(kk.position) ? kk.key : `${kk.key} (${kk.position})`));
+       const ZC = CC.filter((CC => Math.round(CC.position) === zC)).map((CC => Number.isInteger(CC.position) ? CC.key : `${CC.key} (${CC.position})`));
```

#### 117. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1598` → after: `L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1691) · [Before (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1598)

```diff
-       } = (0, nk.D)();
+       } = (0, MC.y)();
```

#### 118. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1621` → after: `L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1714) · [Before (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1621)

```diff
-           }, `StudioDropoffChartTooltipLine-${ek}`)
+           }, `StudioDropoffChartTooltipLine-${zC}`)
```

#### 119. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1630-L1631` → after: `L1723-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1723-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1723-L1724) · [Before (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1630-L1631)

```diff
-             sessions: (0, Pk.Q)(mk.sessions),
-             totalSessions: (0, Pk.Q)(fk)
+             sessions: (0, oC.Z)(qC.sessions),
+             totalSessions: (0, oC.Z)(wC)
```

#### 120. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1656` → after: `L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1749) · [Before (L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1656)

```diff
-       } = (0, nk.D)(), [yk, Yk] = (0, Dk.useState)([]), Lk = (0, Dk.useMemo)((() => Uk.map((kk => function(kk, ek) {
+       } = (0, MC.y)(), [RC, AC] = (0, QC.useState)([]), xC = (0, QC.useMemo)((() => gC.map((CC => function(CC, zC) {
```

#### 121. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1666-L1667` → after: `L1759-L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1759-L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1759-L1760) · [Before (L1666-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1666-L1667)

```diff
-           return null !== (ik = null !== Dk && void 0 !== Dk ? Dk : kk[0]) && void 0 !== ik ? ik : null
-         }(kk, null !== (ik = yk[ek]) && void 0 !== ik ? ik : null)
+           return null !== (ZC = null !== QC && void 0 !== QC ? QC : CC[0]) && void 0 !== ZC ? ZC : null
+         }(CC, null !== (ZC = RC[zC]) && void 0 !== ZC ? ZC : null)
```

#### 122. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1674` → after: `L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1767) · [Before (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1674)

```diff
-           if (Array.isArray(ik)) return console.warn(`StudioDropoffChart got ${ek.length} filters for vertical labels nested less deeply`), [];
+           if (Array.isArray(ZC)) return console.warn(`StudioDropoffChart got ${zC.length} filters for vertical labels nested less deeply`), [];
```

#### 123. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1677` → after: `L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1770) · [Before (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1677)

```diff
-         return void 0 === ik ? [] : Array.isArray(ik) ? ik : (console.warn(`StudioDropoffChart got ${ek.length} filters for vertical labels nested more deeply`), [])
+         return void 0 === ZC ? [] : Array.isArray(ZC) ? ZC : (console.warn(`StudioDropoffChart got ${zC.length} filters for vertical labels nested more deeply`), [])
```

#### 124. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1681` → after: `L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1774) · [Before (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1681)

```diff
-         children: Lk.map(((kk, ek) => 0 === kk.length ? null : (0, xe.jsx)(Jk.e, {
+         children: xC.map(((CC, zC) => 0 === CC.length ? null : (0, Wz.jsx)(kC.b, {
```

#### 125. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1692` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1785) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1692)

```diff
-       let dk = null !== mk && void 0 !== mk ? mk : sk;
+       let eC = null !== qC && void 0 !== qC ? qC : vC;
```

#### 126. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1699-L1700` → after: `L1792-L1793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1792-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1792-L1793) · [Before (L1699-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1699-L1700)

```diff
-           return Math.max(kk, null !== (ik = null === (Dk = ek.curve) || void 0 === Dk ? void 0 : Dk.maxBucketMinute) && void 0 !== ik ? ik : 0)
-         }), null !== (ek = null === Pk || void 0 === Pk ? void 0 : Pk.maxBucketMinute) && void 0 !== ek ? ek : 0),
+           return Math.max(CC, null !== (ZC = null === (QC = zC.curve) || void 0 === QC ? void 0 : QC.maxBucketMinute) && void 0 !== ZC ? ZC : 0)
+         }), null !== (zC = null === oC || void 0 === oC ? void 0 : oC.maxBucketMinute) && void 0 !== zC ? zC : 0),
```

#### 127. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1718-L1720` → after: `L1811-L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1811-L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1811-L1813) · [Before (L1718-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1718-L1720)

```diff
-               percent: null !== (ik = null === Pk || void 0 === Pk ? void 0 : Pk.percent) && void 0 !== ik ? ik : null,
-               sessions: null !== (Dk = null === Pk || void 0 === Pk ? void 0 : Pk.sessions) && void 0 !== Dk ? Dk : null,
-               comparisonValue: null !== (rk = null === mk || void 0 === mk ? void 0 : mk.p50) && void 0 !== rk ? rk : null,
+               percent: null !== (ZC = null === oC || void 0 === oC ? void 0 : oC.percent) && void 0 !== ZC ? ZC : null,
+               sessions: null !== (QC = null === oC || void 0 === oC ? void 0 : oC.sessions) && void 0 !== QC ? QC : null,
+               comparisonValue: null !== (fC = null === qC || void 0 === qC ? void 0 : qC.p50) && void 0 !== fC ? fC : null,
```

#### 128. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1724` → after: `L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1817) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1724)

```diff
-                 return null !== (ik = null === (Dk = kk.get(ek)) || void 0 === Dk ? void 0 : Dk.percent) && void 0 !== ik ? ik : null
+                 return null !== (ZC = null === (QC = CC.get(zC)) || void 0 === QC ? void 0 : QC.percent) && void 0 !== ZC ? ZC : null
```

#### 129. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1728` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1821) · [Before (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1728)

```diff
-         }(Pk, null !== Mk && void 0 !== Mk ? Mk : null, wk, Fk),
+         }(oC, null !== FC && void 0 !== FC ? FC : null, pC, KC),
```

#### 130. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1733` → after: `L1826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1826) · [Before (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1733)

```diff
-         seriesLabel: null !== Pk ? xk : void 0,
+         seriesLabel: null !== oC ? NC : void 0,
```

#### 131. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1735` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1828) · [Before (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1735)

```diff
-         comparisonLabel: qk ? Kk : void 0,
+         comparisonLabel: dC ? WC : void 0,
```

#### 132. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1748` → after: `L1841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1841) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1748)

```diff
-             [pk("Minute"), ...null !== Pk ? [null !== xk && void 0 !== xk ? xk : fk, pk("Sessions")] : [], ...Qk.map((kk => kk.label)), ...qk ? Re(pk, Kk, Ik) : [], ...jk.length > 0 ? [pk("Labels")] : []], ...uk.map((kk => [kk.minute, ...null !== Pk ? [kk.percent, kk.sessions] :  … [truncated]
+             [GC("Minute"), ...null !== oC ? [null !== NC && void 0 !== NC ? NC : wC, GC("Sessions")] : [], ...EC.map((CC => CC.label)), ...dC ? Oz(GC, WC, mC) : [], ...iC.length > 0 ? [GC("Labels")] : []], ...YC.map((CC => [CC.minute, ...null !== oC ? [CC.percent, CC.sessions] :  … [truncated]
```

#### 133. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1750` → after: `L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1843) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1750)

```diff
-               return null !== ek.curve ? [null !== (Dk = kk.lineValues[ik]) && void 0 !== Dk ? Dk : null] : []
+               return null !== zC.curve ? [null !== (QC = CC.lineValues[ZC]) && void 0 !== QC ? QC : null] : []
```

#### 134. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1764` → after: `L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1857) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1764)

```diff
-         children: (0, xe.jsx)(Bk.c, {
+         children: (0, Wz.jsx)(aC.d, {
```

#### 135. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1767` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1860) · [Before (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1767)

```diff
-           children: (0, xe.jsxs)(ck.b, {
+           children: (0, Wz.jsxs)(tC.d, {
```

#### 136. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1772` → after: `L1865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1865) · [Before (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1772)

```diff
-               bottom: jk.length > 0 ? Ii : 0,
+               bottom: iC.length > 0 ? YZ : 0,
```

#### 137. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1786` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1879) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1786)

```diff
-               Px: {
+               ZN: {
```

#### 138. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1790` → after: `L1883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1883) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1790)

```diff
-             }), (0, xe.jsx)(Ok.d, {
+             }), (0, Wz.jsx)(yC.b, {
```

#### 139. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1793` → after: `L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1886) · [Before (L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1793)

```diff
-               Px: {
+               ZN: {
```

#### 140. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1799` → after: `L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1892) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1799)

```diff
-             }), (0, xe.jsx)(gk.b, {
+             }), (0, Wz.jsx)(LC.e, {
```

#### 141. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1802-L1803` → after: `L1895-L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1895-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1895-L1896) · [Before (L1802-L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1802-L1803)

```diff
-                 totalSessions: null !== (ik = null === Pk || void 0 === Pk ? void 0 : Pk.totalSessions) && void 0 !== ik ? ik : 0,
-                 comparisonLabel: qk ? Kk : void 0,
+                 totalSessions: null !== (ZC = null === oC || void 0 === oC ? void 0 : oC.totalSessions) && void 0 !== ZC ? ZC : 0,
+                 comparisonLabel: dC ? WC : void 0,
```

#### 142. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1820` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1913) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1820)

```diff
-             }), null !== Pk && (0, xe.jsx)(Nk.d, {
+             }), null !== oC && (0, Wz.jsx)(BC.c, {
```

#### 143. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1831` → after: `L1924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1924) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1831)

```diff
-             }), wk.map(((kk, ek) => (0, xe.jsx)(Nk.d, {
+             }), pC.map(((CC, zC) => (0, Wz.jsx)(BC.c, {
```

#### 144. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1835` → after: `L1928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1928) · [Before (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1835)

```diff
-                 return null !== (ik = kk.lineValues[ek]) && void 0 !== ik ? ik : null
+                 return null !== (ZC = CC.lineValues[zC]) && void 0 !== ZC ? ZC : null
```

#### 145. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1847` → after: `L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1940) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1847)

```diff
-             }, `StudioDropoffChartLine-${ek}`))), qk && (0, xe.jsx)(Nk.d, {
+             }, `StudioDropoffChartLine-${zC}`))), dC && (0, Wz.jsx)(BC.c, {
```

#### 146. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1873` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L1966) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1873)

```diff
-             }, `${ek}-${kk.key}`)))]
+             }, `${zC}-${CC.key}`)))]
```

#### 147. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1929` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2022) · [Before (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1929)

```diff
-         ik = Date.parse(`${kk.endDay}T00:00:00Z`),
+         ZC = Date.parse(`${CC.endDay}T00:00:00Z`),
```

#### 148. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1984` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2077) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1984)

```diff
-           comparisonValue: null !== (ek = null === Dk || void 0 === Dk ? void 0 : Dk.p50) && void 0 !== ek ? ek : null,
+           comparisonValue: null !== (zC = null === QC || void 0 === QC ? void 0 : QC.p50) && void 0 !== zC ? zC : null,
```

#### 149. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1999` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2092) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L1999)

```diff
-       return null !== (ik = kk.survivalPercents[ek]) && void 0 !== ik ? ik : ti
+       return null !== (ZC = CC.survivalPercents[zC]) && void 0 !== ZC ? ZC : cZ
```

#### 150. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2006` → after: `L2099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2099) · [Before (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2006)

```diff
-           bk = null !== (Dk = null === (fk = kk.survivalPercents[ik + 1]) || void 0 === fk ? void 0 : fk.p50) && void 0 !== Dk ? Dk : 0;
+           nC = null !== (QC = null === (wC = CC.survivalPercents[ZC + 1]) || void 0 === wC ? void 0 : wC.p50) && void 0 !== QC ? QC : 0;
```

#### 151. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2028` → after: `L2121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2121) · [Before (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2028)

```diff
-     var eD = ik(6270);
+     var kZ = ZC(6419);
```

#### 152. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2193` → after: `L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2286) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2193)

```diff
-       return null !== (ek = DD.find((ek => ek.key === kk))) && void 0 !== ek ? ek : null
+       return null !== (zC = CQ.find((zC => zC.key === CC))) && void 0 !== zC ? zC : null
```

#### 153. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2198` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2291) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2198)

```diff
-       return null !== (ek = bD.get(SD(kk))) && void 0 !== ek ? ek : null
+       return null !== (zC = QQ.get(ZQ(CC))) && void 0 !== zC ? zC : null
```

#### 154. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2239` → after: `L2332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2332) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2239)

```diff
-       } = (0, nk.D)();
+       } = (0, MC.y)();
```

#### 155. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2252` → after: `L2345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2345) · [Before (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2252)

```diff
-         children: [(0, xe.jsx)(Yk.d, {
+         children: [(0, Wz.jsx)(AC.c, {
```

#### 156. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2273` → after: `L2366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2366) · [Before (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2273)

```diff
-       } = (0, nk.D)();
+       } = (0, MC.y)();
```

#### 157. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2302` → after: `L2395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2395) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2302)

```diff
-         children: [(0, xe.jsx)(Yk.d, {
+         children: [(0, Wz.jsx)(AC.c, {
```

#### 158. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2336` → after: `L2429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2429) · [Before (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2336)

```diff
-           }), void 0 === ik && (0, xe.jsx)(Yk.d, {
+           }), void 0 === ZC && (0, Wz.jsx)(AC.c, {
```

#### 159. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2343` → after: `L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2436) · [Before (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2343)

```diff
-               children: [fk, (0, xe.jsx)(Xk.e, {
+               children: [wC, (0, Wz.jsx)(TC.b, {
```

#### 160. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2367` → after: `L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2460) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2367)

```diff
-       } = (0, nk.D)(), {
+       } = (0, MC.y)(), {
```

#### 161. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2370` → after: `L2463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2463) · [Before (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2370)

```diff
-       } = (0, Uk.d)(), [dk, Vk] = (0, Dk.useState)({
+       } = (0, gC.e)(), [eC, hC] = (0, QC.useState)({
```

#### 162. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2415` → after: `L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2508) · [Before (L2415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2415)

```diff
-           } = (0, Uk.d)(), [Sk, bk] = (0, Dk.useState)("loading"), [rk, Pk] = (0, Dk.useState)(null), mk = kD(kk);
+           } = (0, gC.e)(), [bC, nC] = (0, QC.useState)("loading"), [fC, oC] = (0, QC.useState)(null), qC = OZ(CC);
```

#### 163. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2451` → after: `L2544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2544) · [Before (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2451)

```diff
-         Ok = null !== (ek = null === Xk || void 0 === Xk ? void 0 : Xk.sessionDurationHistogram) && void 0 !== ek ? ek : null,
+         yC = null !== (zC = null === TC || void 0 === TC ? void 0 : TC.sessionDurationHistogram) && void 0 !== zC ? zC : null,
```

#### 164. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2467` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2560) · [Before (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2467)

```diff
-         Se = null !== (ik = null === Xk || void 0 === Xk ? void 0 : Xk.rankingWindow.days) && void 0 !== ik ? ik : wD,
+         wz = null !== (ZC = null === TC || void 0 === TC ? void 0 : TC.rankingWindow.days) && void 0 !== ZC ? ZC : MQ,
```

#### 165. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2472` → after: `L2565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2565) · [Before (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2472)

```diff
-           days: null !== (fk = null === Ok || void 0 === Ok ? void 0 : Ok.days) && void 0 !== fk ? fk : Se
+           days: null !== (wC = null === yC || void 0 === yC ? void 0 : yC.days) && void 0 !== wC ? wC : wz
```

#### 166. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2474-L2476` → after: `L2567-L2569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2567-L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2567-L2569) · [Before (L2474-L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2474-L2476)

```diff
-         Pe = null !== (Sk = null === Xk || void 0 === Xk ? void 0 : Xk.sessionsPerPlayerWindowDays) && void 0 !== Sk ? Sk : wD,
-         me = null !== (bk = null === Gk || void 0 === Gk ? void 0 : Gk.percentStayedSessions) && void 0 !== bk ? bk : null,
-         Me = null !== (rk = null === Gk || void 0 === Gk ? void 0 : Gk.percentLongSessions) && void 0 !== rk ? rk : null,
+         fz = null !== (bC = null === TC || void 0 === TC ? void 0 : TC.sessionsPerPlayerWindowDays) && void 0 !== bC ? bC : MQ,
+         oz = null !== (nC = null === UC || void 0 === UC ? void 0 : UC.percentStayedSessions) && void 0 !== nC ? nC : null,
+         qz = null !== (fC = null === UC || void 0 === UC ? void 0 : UC.percentLongSessions) && void 0 !== fC ? fC : null,
```

#### 167. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2480` → after: `L2573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2573) · [Before (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2480)

```diff
-             sessions: (0, Pk.Q)(gk.totalSessions)
+             sessions: (0, oC.Z)(LC.totalSessions)
```

#### 168. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2486` → after: `L2579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2579) · [Before (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2486)

```diff
-             value: Ze(null !== (ek = null === Rk || void 0 === Rk ? void 0 : Rk[kk]) && void 0 !== ek ? ek : null, null !== (ik = null === Jk || void 0 === Jk ? void 0 : Jk[kk]) && void 0 !== ik ? ik : null),
+             value: jz(null !== (zC = null === OC || void 0 === OC ? void 0 : OC[CC]) && void 0 !== zC ? zC : null, null !== (ZC = null === kC || void 0 === kC ? void 0 : kC[CC]) && void 0 !== ZC ? ZC : null),
```

#### 169. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2507` → after: `L2600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2600) · [Before (L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2507)

```diff
-           return le(null !== (ik = null === Rk || void 0 === Rk ? void 0 : Rk[kk]) && void 0 !== ik ? ik : null, null !== (Dk = null === ck || void 0 === ck ? void 0 : ck.ranking[kk]) && void 0 !== Dk ? Dk : null, ek)
+           return pz(null !== (ZC = null === OC || void 0 === OC ? void 0 : OC[CC]) && void 0 !== ZC ? ZC : null, null !== (QC = null === tC || void 0 === tC ? void 0 : tC.ranking[CC]) && void 0 !== QC ? QC : null, zC)
```

#### 170. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2530` → after: `L2623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2623) · [Before (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2530)

```diff
-                 headerActions: uk.map((kk => (0, xe.jsx)(yk.X, {
+                 headerActions: YC.map((CC => (0, Wz.jsx)(RC.O, {
```

#### 171. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2557` → after: `L2650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2650) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2557)

```diff
-                     return "bloxd" === kk ? ek("studio:rankCategoryAllGames") : "playerSchematic" === kk ? ek("studio:rankCategoryCustomGames") : (0, Hk.gb)(kk)
+                     return "bloxd" === CC ? zC("studio:rankCategoryAllGames") : "playerSchematic" === CC ? zC("studio:rankCategoryCustomGames") : (0, SC.eb)(CC)
```

#### 172. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2559` → after: `L2652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2652) · [Before (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2559)

```diff
-                   fk = null === ik ? void 0 : eD.c[ik];
+                   wC = null === ZC ? void 0 : kZ.e[ZC];
```

#### 173. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2563` → after: `L2656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2656) · [Before (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2563)

```diff
-                   className: void 0 !== fk ? `StudioMetricCardTopRank StudioMetricCardTopRank${ik}` : void 0,
+                   className: void 0 !== wC ? `StudioMetricCardTopRank StudioMetricCardTopRank${ZC}` : void 0,
```

#### 174. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2565` → after: `L2658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2658) · [Before (L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2565)

```diff
-                   value: null !== ik ? `#${(0,Pk.Q)(ik)}` : Ak("studio:unranked"),
+                   value: null !== ZC ? `#${(0,oC.Z)(ZC)}` : IC("studio:unranked"),
```

#### 175. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2583` → after: `L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2676) · [Before (L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2583)

```diff
-                 value: Rk && null !== Rk.avgDailyPlays ? (0, Pk.Q)(Math.round(Rk.avgDailyPlays)) : "-",
+                 value: OC && null !== OC.avgDailyPlays ? (0, oC.Z)(Math.round(OC.avgDailyPlays)) : "-",
```

#### 176. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2588` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2681) · [Before (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2588)

```diff
-                 comparison: pe("avgDailyPlays", (kk => (0, Pk.Q)(Math.round(kk)))),
+                 comparison: Pz("avgDailyPlays", (CC => (0, oC.Z)(Math.round(CC)))),
```

#### 177. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2603` → after: `L2696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2696) · [Before (L2603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2603)

```diff
-                 value: Rk && null !== Rk.sessionsPerPlayer ? (0, Qk.g)(Rk.sessionsPerPlayer) : "-",
+                 value: OC && null !== OC.sessionsPerPlayer ? (0, EC.i)(OC.sessionsPerPlayer) : "-",
```

#### 178. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2608` → after: `L2701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2701) · [Before (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2608)

```diff
-                 comparison: pe("sessionsPerPlayer", Qk.g),
+                 comparison: Pz("sessionsPerPlayer", EC.i),
```

#### 179. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2617` → after: `L2710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2710) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2617)

```diff
-               children: xD.map((kk => (0, xe.jsx)(yk.X, {
+               children: qQ.map((CC => (0, Wz.jsx)(RC.O, {
```

#### 180. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2628` → after: `L2721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2721) · [Before (L2628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2628)

```diff
-               children: [(0, xe.jsx)(Yk.d, {
+               children: [(0, Wz.jsx)(AC.c, {
```

#### 181. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2632` → after: `L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2725) · [Before (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2632)

```diff
-               }), (0, xe.jsx)(yk.f, {
+               }), (0, Wz.jsx)(RC.g, {
```

#### 182. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2648` → after: `L2741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2741) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2648)

```diff
-                 formatValue: Pk.Q,
+                 formatValue: oC.Z,
```

#### 183. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2674` → after: `L2767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2767) · [Before (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2674)

```diff
-                 formatValue: Qk.g,
+                 formatValue: EC.i,
```

#### 184. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2703` → after: `L2796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2796) · [Before (L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2703)

```diff
-                 comparison: le(me, null !== (mk = null === Nk || void 0 === Nk ? void 0 : Nk.percentStayedSessions) && void 0 !== mk ? mk : null, Xe),
+                 comparison: pz(oz, null !== (qC = null === BC || void 0 === BC ? void 0 : BC.percentStayedSessions) && void 0 !== qC ? qC : null, sz),
```

#### 185. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2708` → after: `L2801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2801) · [Before (L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2708)

```diff
-                 value: null === Gk ? "-" : ce(Gk.medianMinute, null !== (Mk = null === gk || void 0 === gk ? void 0 : gk.maxBucketMinute) && void 0 !== Mk ? Mk : 0),
+                 value: null === UC ? "-" : az(UC.medianMinute, null !== (FC = null === LC || void 0 === LC ? void 0 : LC.maxBucketMinute) && void 0 !== FC ? FC : 0),
```

#### 186. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2712` → after: `L2805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2805) · [Before (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2712)

```diff
-                 comparison: le(null !== (Kk = null === Gk || void 0 === Gk ? void 0 : Gk.medianMinute) && void 0 !== Kk ? Kk : null, Wi(null !== (xk = null === Nk || void 0 === Nk ? void 0 : Nk.medianMinute) && void 0 !== xk ? xk : null), (kk => {
+                 comparison: pz(null !== (WC = null === UC || void 0 === UC ? void 0 : UC.medianMinute) && void 0 !== WC ? WC : null, XZ(null !== (NC = null === BC || void 0 === BC ? void 0 : BC.medianMinute) && void 0 !== NC ? NC : null), (CC => {
```

#### 187. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2714` → after: `L2807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2807) · [Before (L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2714)

```diff
-                   return ce(kk, null !== (ek = null === ck || void 0 === ck || null === (ik = ck.dropoffCurve) || void 0 === ik ? void 0 : ik.maxBucketMinute) && void 0 !== ek ? ek : 0)
+                   return az(CC, null !== (zC = null === tC || void 0 === tC || null === (ZC = tC.dropoffCurve) || void 0 === ZC ? void 0 : ZC.maxBucketMinute) && void 0 !== zC ? zC : 0)
```

#### 188. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2727` → after: `L2820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2820) · [Before (L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2727)

```diff
-                 comparison: le(Me, null !== (wk = null === Nk || void 0 === Nk ? void 0 : Nk.percentLongSessions) && void 0 !== wk ? wk : null, Xe),
+                 comparison: pz(qz, null !== (pC = null === BC || void 0 === BC ? void 0 : BC.percentLongSessions) && void 0 !== pC ? pC : null, sz),
```

#### 189. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2742` → after: `L2835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2835) · [Before (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2742)

```diff
-                 comparisonCurve: null !== (lk = null === ck || void 0 === ck ? void 0 : ck.dropoffCurve) && void 0 !== lk ? lk : null,
+                 comparisonCurve: null !== (PC = null === tC || void 0 === tC ? void 0 : tC.dropoffCurve) && void 0 !== PC ? PC : null,
```

#### 190. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2861` → after: `L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2954) · [Before (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2861)

```diff
-       return "reached" === kk || "reached" === ek ? "reached" : null !== kk && void 0 !== kk ? kk : ek
+       return "reached" === CC || "reached" === zC ? "reached" : null !== CC && void 0 !== CC ? CC : zC
```

#### 191. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2870` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2963) · [Before (L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2870)

```diff
-       } = (0, nk.D)(), {
+       } = (0, MC.y)(), {
```

#### 192. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2873-L2874` → after: `L2966-L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2966-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2966-L2967) · [Before (L2873-L2874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2873-L2874)

```diff
-       } = (0, Uk.d)(), Sk = function(kk) {
-         return null !== (0, rk.k)(kk)
+       } = (0, gC.e)(), bC = function(CC) {
+         return null !== (0, fC.i)(CC)
```

#### 193. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2886` → after: `L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L2979) · [Before (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2886)

```diff
-             ek.set(fk, (null !== (Dk = ek.get(fk)) && void 0 !== Dk ? Dk : 0) + 1), ik = ID(ik, qD(Sk, dD.maxEventValuesPerType))
+             zC.set(wC, (null !== (QC = zC.get(wC)) && void 0 !== QC ? QC : 0) + 1), ZC = KQ(ZC, hQ(bC, IQ.maxEventValuesPerType))
```

#### 194. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2916` → after: `L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3009) · [Before (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2916)

```diff
-             children: [(0, xe.jsx)(Yk.d, {
+             children: [(0, Wz.jsx)(AC.c, {
```

#### 195. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2918` → after: `L3011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3011) · [Before (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2918)

```diff
-             }), ik(`studioAnalyticsLimits:${ek}${fk?"Reached":"Near"}`)]
+             }), ZC(`studioAnalyticsLimits:${zC}${wC?"Reached":"Near"}`)]
```

#### 196. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2939` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3032) · [Before (L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2939)

```diff
-         ik.set(kk.toKey, (null !== (ek = ik.get(kk.toKey)) && void 0 !== ek ? ek : 0) + 1), null === (fk = Dk.get(kk.fromKey)) || void 0 === fk || fk.push(kk.toKey)
+         ZC.set(CC.toKey, (null !== (zC = ZC.get(CC.toKey)) && void 0 !== zC ? zC : 0) + 1), null === (wC = QC.get(CC.fromKey)) || void 0 === wC || wC.push(CC.toKey)
```

#### 197. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2951` → after: `L3044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3044) · [Before (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2951)

```diff
-       return Sk.length === ik.size ? Sk : null
+       return bC.length === ZC.size ? bC : null
```

#### 198. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2963-L2967` → after: `L3056-L3061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3056-L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3056-L3061) · [Before (L2963-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2963-L2967)

```diff
-     var XD = ik(1333),
-       BD = ik(4319),
-       cD = ik(1400),
-       TD = ik(6295),
-       oD = ik(6298);
+     var uQ = ZC(1307),
+       rQ = ZC(4300),
+       sQ = ZC(1375),
+       TQ = ZC(3123),
+       aQ = ZC(6445),
+       tQ = ZC(6453);
```

#### 199. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2986` → after: `L3080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3080) · [Before (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2986)

```diff
-       return "" === kk.event_value ? kk.event_type : `${kk.event_type}: ${kk.event_value}`
+       return "" === CC.event_value ? CC.event_type : `${CC.event_type}: ${CC.event_value}`
```

#### 200. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L2991` → after: `L3085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3085) · [Before (L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L2991)

```diff
-       return null !== (ek = kk.alias) && void 0 !== ek ? ek : GD(kk)
+       return null !== (zC = CC.alias) && void 0 !== zC ? zC : LQ(CC)
```

#### 201. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3042` → after: `L3136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3136) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3042)

```diff
-             const kk = "" === fk ? Sk : `${fk} ${Sk}`;
+             const CC = "" === wC ? bC : `${wC} ${bC}`;
```

#### 202. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3075` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3169) · [Before (L3075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3075)

```diff
-       return ` C ${fk} ${ek} ${fk} ${Dk} ${ik} ${Dk}`
+       return ` C ${wC} ${zC} ${wC} ${QC} ${ZC} ${QC}`
```

#### 203. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3083` → after: `L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3177) · [Before (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3083)

```diff
-       return `${ek},${ik} ${Dk},${ik-fk} ${Dk},${ik+fk}`
+       return `${zC},${ZC} ${QC},${ZC-wC} ${QC},${ZC+wC}`
```

#### 204. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3091` → after: `L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3185) · [Before (L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3091)

```diff
-           return (ik, Dk, fk) => null === kk ? ik.length * Dk * .65 : (kk.font = `${fk} ${Dk}px ${ek}`, kk.measureText(ik).width)
+           return (ZC, QC, wC) => null === CC ? ZC.length * QC * .65 : (CC.font = `${wC} ${QC}px ${zC}`, CC.measureText(ZC).width)
```

#### 205. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3096` → after: `L3190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3190) · [Before (L3096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3096)

```diff
-         fk.has(ek) && console.warn(`StudioEventGraph got two nodes for ${ek}; drawing the last`), fk.set(ek, kk)
+         wC.has(zC) && console.warn(`StudioEventGraph got two nodes for ${zC}; drawing the last`), wC.set(zC, CC)
```

#### 206. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3102` → after: `L3196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3196) · [Before (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3102)

```diff
-         fk.has(ek) && fk.has(ik) ? ek === ik ? console.warn(`StudioEventGraph got an edge from ${ek} to itself, which it cannot draw`) : Sk.push({
+         wC.has(zC) && wC.has(ZC) ? zC === ZC ? console.warn(`StudioEventGraph got an edge from ${zC} to itself, which it cannot draw`) : bC.push({
```

#### 207. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3106` → after: `L3200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3200) · [Before (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3106)

```diff
-         }) : console.warn(`StudioEventGraph got an edge from ${ek} to ${ik} with no node at one end`)
+         }) : console.warn(`StudioEventGraph got an edge from ${zC} to ${ZC} with no node at one end`)
```

#### 208. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3113` → after: `L3207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3207) · [Before (L3113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3113)

```diff
-           return Math.max(kk, null !== (ik = Dk.value) && void 0 !== ik ? ik : 0)
+           return Math.max(CC, null !== (ZC = QC.value) && void 0 !== ZC ? ZC : 0)
```

#### 209. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3119` → after: `L3213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3213) · [Before (L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3119)

```diff
-           return ik = ek.value, Dk = bk, null === ik || Dk <= 0 ? Kf : Math.max(Kf, xf * Math.max(0, ik) / Dk);
+           return ZC = zC.value, QC = nC, null === ZC || QC <= 0 ? ow : Math.max(ow, qw * Math.max(0, ZC) / QC);
```

#### 210. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3216` → after: `L3310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3310) · [Before (L3216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3216)

```diff
-         kk.centreX = null !== (ek = Dk.x) && void 0 !== ek ? ek : 0, kk.centreY = null !== (ik = Dk.y) && void 0 !== ik ? ik : 0, wk.set(kk.key, kk)
+         CC.centreX = null !== (zC = QC.x) && void 0 !== zC ? zC : 0, CC.centreY = null !== (ZC = QC.y) && void 0 !== ZC ? ZC : 0, pC.set(CC.key, CC)
```

#### 211. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3232` → after: `L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3326) · [Before (L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3232)

```diff
-           return (null !== (ek = kk.points) && void 0 !== ek ? ek : []).slice(1, -1)
+           return (null !== (zC = CC.points) && void 0 !== zC ? zC : []).slice(1, -1)
```

#### 212. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3239` → after: `L3333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3333) · [Before (L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3239)

```diff
-           Yk.set(Dk, Math.max(null !== (ik = Yk.get(Dk)) && void 0 !== ik ? ik : 0, ek))
+           AC.set(QC, Math.max(null !== (ZC = AC.get(QC)) && void 0 !== ZC ? ZC : 0, zC))
```

#### 213. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3243` → after: `L3337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3337) · [Before (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3243)

```diff
-           return null !== (ek = Yk.get(Lk(kk))) && void 0 !== ek ? ek : 0
+           return null !== (zC = AC.get(xC(CC))) && void 0 !== zC ? zC : 0
```

#### 214. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3249` → after: `L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3343) · [Before (L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3249)

```diff
-         Ck(null !== (ik = kk.x) && void 0 !== ik ? ik : 0, (null !== (Dk = kk.width) && void 0 !== Dk ? Dk : 0) / 2), yk[ek].forEach((kk => {
+         JC(null !== (ZC = CC.x) && void 0 !== ZC ? ZC : 0, (null !== (QC = CC.width) && void 0 !== QC ? QC : 0) / 2), RC[zC].forEach((CC => {
```

#### 215. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3265` → after: `L3359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3359) · [Before (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3265)

```diff
-           return null !== (ek = null === (ik = yk[kk][0]) || void 0 === ik ? void 0 : ik.y) && void 0 !== ek ? ek : lk(Sk[kk].toKey).centreY
+           return null !== (zC = null === (ZC = RC[CC][0]) || void 0 === ZC ? void 0 : ZC.y) && void 0 !== zC ? zC : PC(bC[CC].toKey).centreY
```

#### 216. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3269` → after: `L3363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3363) · [Before (L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3269)

```diff
-           return null !== (ek = null === (ik = Dk[Dk.length - 1]) || void 0 === ik ? void 0 : ik.y) && void 0 !== ek ? ek : lk(Sk[kk].fromKey).centreY
+           return null !== (zC = null === (ZC = QC[QC.length - 1]) || void 0 === ZC ? void 0 : ZC.y) && void 0 !== zC ? zC : PC(bC[CC].fromKey).centreY
```

#### 217. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3310-L3313` → after: `L3404-L3407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3404-L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3404-L3407) · [Before (L3310-L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3310-L3313)

```diff
-             labelCentreX: null !== (ik = xk.x) && void 0 !== ik ? ik : 0,
-             labelCentreY: null !== (Dk = xk.y) && void 0 !== Dk ? Dk : 0,
-             labelWidth: null !== (fk = xk.width) && void 0 !== fk ? fk : 0,
-             labelHeight: null !== (Sk = xk.height) && void 0 !== Sk ? Sk : 0
+             labelCentreX: null !== (ZC = NC.x) && void 0 !== ZC ? ZC : 0,
+             labelCentreY: null !== (QC = NC.y) && void 0 !== QC ? QC : 0,
+             labelWidth: null !== (wC = NC.width) && void 0 !== wC ? wC : 0,
+             labelHeight: null !== (bC = NC.height) && void 0 !== bC ? bC : 0
```

#### 218. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L3321-L3322` → after: `L3415-L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R3415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L3415-L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L3415-L3416) · [Before (L3321-L3322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L3321-L3322)

```diff
-         width: null !== (ek = Fk.width) && void 0 !== ek ? ek : 0,
-         height: null !== (ik = Fk.height) && void 0 !== ik ? ik : 0
+         width: null !== (zC = KC.width) && void 0 !== zC ? zC : 0,
+         height: null !== (ZC = KC.height) && void 0 !== ZC ? ZC : 0
```
