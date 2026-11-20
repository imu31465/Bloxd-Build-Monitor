# Changed — Bundle Modifications Report (Part 001 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `1 / 115` (**440** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [Part 002 →](part-002.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/css/119.css` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/css/119.css` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-19f53b500e298af15ed040a99f98caf4474204a16bac48b0ca45f8cdc815574b)

#### 1. `bundles/bloxd.io/chunks/css/119.css` (Changed code · before: `L1` → after: `L1-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-19f53b500e298af15ed040a99f98caf4474204a16bac48b0ca45f8cdc815574bR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-19f53b500e298af15ed040a99f98caf4474204a16bac48b0ca45f8cdc815574b) · [After (L1-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/css/119.css#L1-L100) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/css/119.css#L1)

```diff
- .AuthCallback {
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
+ ... (84 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/119.css` (Changed code · before: `L11-L12` → after: `L115-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-19f53b500e298af15ed040a99f98caf4474204a16bac48b0ca45f8cdc815574bR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-19f53b500e298af15ed040a99f98caf4474204a16bac48b0ca45f8cdc815574b) · [After (L115-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/css/119.css#L115-L117) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/css/119.css#L11-L12)

```diff
- .AuthCallback .LogoLoader {
-   font-size: 14rem
+ .PurchaseWelcome .PurchaseWelcomeTitle {
+   font-size: 5rem;
+   z-index: 2
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/120.css` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/css/120.css` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-460b5727567cd840eff441148c06c7648735535b6ee16e86baa70c38295ee282)

#### 1. `bundles/bloxd.io/chunks/css/120.css` (Changed code · before: `L1-L212` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-460b5727567cd840eff441148c06c7648735535b6ee16e86baa70c38295ee282R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-460b5727567cd840eff441148c06c7648735535b6ee16e86baa70c38295ee282) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/css/120.css#L1) · [Before (L1-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/css/120.css#L1-L212)

```diff
- .ShaderPackBrowse {
-   display: flex;
-   flex-direction: column;
-   font-weight: 700;
-   gap: .5rem;
-   padding-bottom: 1rem;
-   width: 100%
- }
- 
- .ShaderPackBrowse .BackButton {
-   font-size: 2rem;
-   padding-left: .3rem
- }
- 
- .ShaderPackBrowse .ShaderPackBrowseHeader {
-   background-color: rgba(57, 73, 128, .4);
- ... (196 more removed lines; see GitHub link above)
+ .AuthCallback {
```

#### 2. `bundles/bloxd.io/chunks/css/120.css` (Changed code · before: `L216-L218` → after: `L5-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-460b5727567cd840eff441148c06c7648735535b6ee16e86baa70c38295ee282R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-460b5727567cd840eff441148c06c7648735535b6ee16e86baa70c38295ee282) · [After (L5-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/css/120.css#L5-L8) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/css/120.css#L216-L218)

```diff
-   margin-top: .5rem;
-   transition: opacity .15s;
-   width: 100%
+   height: 100vh;
+   height: 100dvh;
+   justify-content: center;
+   width: 100vw
```

#### 3. `bundles/bloxd.io/chunks/css/120.css` (Changed code · before: `L221-L229` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-460b5727567cd840eff441148c06c7648735535b6ee16e86baa70c38295ee282R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-460b5727567cd840eff441148c06c7648735535b6ee16e86baa70c38295ee282) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/css/120.css#L11-L12) · [Before (L221-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/css/120.css#L221-L229)

```diff
- .ShaderPackBrowse .ShaderPackBrowseResults .ShaderPackBrowseMessage {
-   align-items: center;
-   color: #a4a4a4;
-   display: flex;
-   flex-direction: column;
-   font-size: 1.2rem;
-   gap: 1rem;
-   padding-top: 4rem;
-   text-align: center
+ .AuthCallback .LogoLoader {
+   font-size: 14rem
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/211.css` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/css/211.css` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-33e8005d68798e6182b839f1cc5c355cf982d8793869f5347f00c9f42239f041)

#### 1. `bundles/bloxd.io/chunks/css/211.css` (Changed code · before: `L100` → after: `L122-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-33e8005d68798e6182b839f1cc5c355cf982d8793869f5347f00c9f42239f041R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-33e8005d68798e6182b839f1cc5c355cf982d8793869f5347f00c9f42239f041) · [After (L122-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/css/211.css#L122-L134) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/css/211.css#L100)

```diff
- .CustomGamePlaceContainer {
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer {
+   align-items: stretch;
+   display: flex;
+   flex-direction: column
+ }
+ 
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload {
+   align-items: center;
+   border: 3px solid #303a59;
+   border-radius: 0;
+   border-bottom-left-radius: 0;
+   border-bottom-right-radius: 0;
+   box-sizing: border-box;
```

#### 2. `bundles/bloxd.io/chunks/css/211.css` (Changed code · before: `L103-L131` → after: `L137-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-33e8005d68798e6182b839f1cc5c355cf982d8793869f5347f00c9f42239f041R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-33e8005d68798e6182b839f1cc5c355cf982d8793869f5347f00c9f42239f041) · [After (L137-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/css/211.css#L137-L206) · [Before (L103-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/css/211.css#L103-L131)

```diff
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
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast;
- ... (13 more removed lines; see GitHub link above)
+   gap: 1rem;
+   height: 10rem;
+   justify-content: center;
+   padding: 2rem 1rem
+ }
+ 
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadIcon {
+   font-size: 3rem;
+   opacity: .4;
+   text-shadow: 0 0 0 #000;
+   transition: color .2s, opacity .3s
+ }
+ 
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicUploadContainer .SchematicUpload .SchematicUploadIcon.Active {
+   color: #4f94f1;
+   opacity: 1
+ ... (54 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/css/211.css` (Changed code · before: `L133-L163` → after: `L208-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-33e8005d68798e6182b839f1cc5c355cf982d8793869f5347f00c9f42239f041R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-33e8005d68798e6182b839f1cc5c355cf982d8793869f5347f00c9f42239f041) · [After (L208-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/css/211.css#L208-L277) · [Before (L133-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/css/211.css#L133-L163)

```diff
-   padding-left: .3rem;
-   position: relative
- }
- 
- @media(pointer:coarse) {
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
- ... (15 more removed lines; see GitHub link above)
+   justify-content: center
+ }
+ 
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .OtherOptions .NewButton .ButtonBody {
+   padding: .8rem
+ }
+ 
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow {
+   width: 100%
+ }
+ 
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicName {
+   box-shadow: none;
+   box-sizing: border-box;
+   font-size: 1.5rem;
+   height: 3rem;
+ ... (54 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/css/211.css` (Changed code · before: `L167-L255` → after: `L281-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-33e8005d68798e6182b839f1cc5c355cf982d8793869f5347f00c9f42239f041R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-33e8005d68798e6182b839f1cc5c355cf982d8793869f5347f00c9f42239f041) · [After (L281-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/css/211.css#L281-L314) · [Before (L167-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/css/211.css#L167-L255)

```diff
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelHeading {
-   font-size: inherit;
-   margin: 0
- }
- 
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelTitle {
-   cursor: pointer;
-   gap: .25rem;
-   transition: gap .2s
- }
- 
- .CustomGamePlaceContainer .CustomGamePlaceMosaic .CustomGamePlacePanel .CustomGamePlacePanelTitle .svg-inline--fa {
-   color: #ffb914;
-   flex-shrink: 0;
-   transform: rotate(90deg)
- }
- ... (73 more removed lines; see GitHub link above)
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
+ }
+ 
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SaveSchematicWindow .SaveSchematicButtons {
+   align-items: center;
+ ... (18 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/100.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/100.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13)

#### 1. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L4)

```diff
-   4861: (TT, kT, cT) => {
+   4739: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L6)

```diff
-       e: () => CT
+       d: () => Wq
```

#### 3. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L8)

```diff
-     var lT = cT(1046),
+     var Yq = gq(1018),
```

#### 4. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L10-L16` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L10-L16) · [Before (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L10-L16)

```diff
-       KT = cT(1061),
-       OT = cT(1348),
-       yT = cT(3449),
-       fT = cT(159),
-       xT = cT(3491),
-       IT = cT(3482),
-       AT = cT(1099);
+       Oq = gq(1025),
+       mq = gq(1326),
+       xq = gq(3383),
+       Aq = gq(136),
+       cq = gq(3428),
+       uq = gq(3416),
+       Bq = gq(1070);
```

#### 5. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L22-L24` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L22-L24) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L22-L24)

```diff
-       const cT = (0, fT.m)() ? "large" : "small",
-         lT = (0, xT.i)(kT, cT),
-         CT = (0, yT.f)(lT),
+       const gq = (0, Aq.i)() ? "large" : "small",
+         Yq = (0, cq.e)(Eq, gq),
+         Wq = (0, xq.e)(Yq),
```

#### 6. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L28)

```diff
-         children: [CT.isLoading && !jT && (0, AT.jsx)(OT.d, {
+         children: [Wq.isLoading && !Nq && (0, Bq.jsx)(mq.e, {
```

#### 7. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L31)

```diff
-           className: MT()("SchematicImage", IT.g, {
+           className: lq()("SchematicImage", uq.i, {
```

#### 8. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L34)

```diff
-           style: (0, IT.f)(CT),
+           style: (0, uq.e)(Wq),
```

#### 9. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L40)

```diff
-           children: (0, AT.jsx)(KT.e, {
+           children: (0, Bq.jsx)(Oq.d, {
```

#### 10. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L47)

```diff
-   4848: (TT, kT, cT) => {
+   4727: (qq, Eq, gq) => {
```

#### 11. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L51-L53` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L51-L53) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L51-L53)

```diff
-     cT(4855);
-     var lT = cT(71),
-       MT = cT(1046),
+     gq(4735);
+     var Yq = gq(57),
+       lq = gq(1018),
```

#### 12. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L55-L72` → after: `L55-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L55-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L55-L72) · [Before (L55-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L55-L72)

```diff
-       OT = cT(328),
-       yT = cT(1026),
-       fT = cT(1226),
-       xT = cT(1195),
-       IT = cT(1130),
-       AT = cT(1518),
-       CT = cT(4861),
-       jT = cT(1470),
-       vT = cT(4864),
-       tT = cT(1348),
-       hT = cT(1530),
-       NT = cT(4618),
-       QT = cT(1061),
-       ST = cT(1009),
-       DT = cT(2563),
-       aT = cT(4867),
- ... (2 more removed lines; see GitHub link above)
+       mq = gq(296),
+       xq = gq(997),
+       Aq = gq(1214),
+       cq = gq(1183),
+       uq = gq(1101),
+       Bq = gq(1477),
+       Wq = gq(4739),
+       Nq = gq(1422),
+       aq = gq(4748),
+       Vq = gq(1326),
+       dq = gq(1498),
+       jq = gq(4459),
+       Hq = gq(1025),
+       oq = gq(985),
+       Pq = gq(2470),
+       Qq = gq(4753),
+ ... (2 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L77)

```diff
-       } = (0, xT.B)(), kT = (0, hT.useNavigatePreserveSearch)(), cT = (0, DT.o)(), MT = (0, lT.useMemo)((() => [...ST.b].sort(((kT, lT) => {
+       } = (0, cq.v)(), Eq = (0, dq.useNavigatePreserveSearch)(), gq = (0, Pq.j)(), lq = (0, Yq.useMemo)((() => [...oq.d].sort(((Eq, Yq) => {
```

#### 14. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L79-L80` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L79-L80) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L79-L80)

```diff
-         const OT = (null !== (MT = (0, DT.e)(lT, cT)) && void 0 !== MT ? MT : 0) - (null !== (KT = (0, DT.e)(kT, cT)) && void 0 !== KT ? KT : 0);
-         return 0 !== OT ? OT : (0, FT.m)(kT, TT).localeCompare((0, FT.m)(lT, TT))
+         const mq = (null !== (lq = (0, Pq.c)(Yq, gq)) && void 0 !== lq ? lq : 0) - (null !== (Oq = (0, Pq.c)(Eq, gq)) && void 0 !== Oq ? Oq : 0);
+         return 0 !== mq ? mq : (0, yq.j)(Eq, qq).localeCompare((0, yq.j)(Yq, qq))
```

#### 15. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L89)

```diff
-         }), (0, rT.jsx)(vT.d, {
+         }), (0, tq.jsx)(aq.c, {
```

#### 16. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L104` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L104) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L104)

```diff
-                 kT((0, FT.o)((0, yT.h)(lT, !0)))
+                 Eq((0, yq.n)((0, xq.d)(Yq, !0)))
```

#### 17. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L107-L108)

```diff
-                 children: (0, rT.jsx)(aT.e, {
-                   thumbnail: (0, rT.jsx)(aT.b, {
+                 children: (0, tq.jsx)(Qq.d, {
+                   thumbnail: (0, tq.jsx)(Qq.c, {
```

#### 18. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L111)

```diff
-                   name: (0, FT.m)(lT, TT)
+                   name: (0, yq.j)(Yq, qq)
```

#### 19. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L114)

```diff
-                 children: (0, fT.P)(null !== (MT = (0, DT.e)(lT, cT)) && void 0 !== MT ? MT : 0)
+                 children: (0, Aq.S)(null !== (lq = (0, Pq.c)(Yq, gq)) && void 0 !== lq ? lq : 0)
```

#### 20. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L125)

```diff
-       } = (0, xT.B)(), kT = (0, hT.useNavigatePreserveSearch)(), {
+       } = (0, cq.v)(), Eq = (0, dq.useNavigatePreserveSearch)(), {
```

#### 21. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L128)

```diff
-       } = (0, IT.b)(), {
+       } = (0, uq.c)(), {
```

#### 22. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L133)

```diff
-         MT || (oT(!1), AT.d.getPublishedGamePreviews(cT, {
+         lq || (Zq(!1), Bq.e.getPublishedGamePreviews(gq, {
```

#### 23. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L146)

```diff
-             results: (0, OT.R)(TT.results)
+             results: (0, mq.ab)(qq.results)
```

#### 24. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L150)

```diff
-         })), AT.d.getOwnedUnpublishedGames(cT).then((TT => {
+         })), Bq.e.getOwnedUnpublishedGames(gq).then((qq => {
```

#### 25. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L167)

```diff
-           }), (0, rT.jsxs)(jT.m, {
+           }), (0, tq.jsxs)(Nq.p, {
```

#### 26. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L170)

```diff
-             children: [(0, rT.jsx)(QT.e, {
+             children: [(0, tq.jsx)(Hq.d, {
```

#### 27. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L176)

```diff
-           children: (0, rT.jsx)(tT.d, {})
+           children: (0, tq.jsx)(Vq.e, {})
```

#### 28. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L183)

```diff
-         }), !eT && !JT && !GT && (0, rT.jsx)(vT.d, {
+         }), !Mq && !iq && !Tq && (0, tq.jsx)(aq.c, {
```

#### 29. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L203)

```diff
-               TT = cT.schematicId, kT((0, FT.o)((0, yT.e)(TT)))
+               qq = gq.schematicId, Eq((0, yq.n)((0, xq.b)(qq)))
```

#### 30. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L206-L207` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L206-L207) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L206-L207)

```diff
-               children: (0, rT.jsx)(aT.e, {
-                 thumbnail: (0, rT.jsx)(CT.e, {
+               children: (0, tq.jsx)(Qq.d, {
+                 thumbnail: (0, tq.jsx)(Wq.d, {
```

#### 31. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L220)

```diff
-               children: (0, fT.P)(cT.ccu)
+               children: (0, Aq.S)(gq.ccu)
```

#### 32. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L222)

```diff
-               children: (0, fT.P)(cT.favourites)
+               children: (0, Aq.S)(gq.favourites)
```

#### 33. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L229)

```diff
-   4867: (TT, kT, cT) => {
+   4753: (qq, Eq, gq) => {
```

#### 34. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L231-L232` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L231-L232) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L231-L232)

```diff
-       b: () => OT,
-       e: () => KT
+       c: () => mq,
+       d: () => Oq
```

#### 35. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L234-L235` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L234-L235) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L234-L235)

```diff
-     var lT = cT(1554),
-       MT = cT(1099);
+     var Yq = gq(1529),
+       lq = gq(1070);
```

#### 36. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L260)

```diff
-         src: (0, lT.k)(kT),
+         src: (0, Yq.g)(Eq),
```

#### 37. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L265)

```diff
-   4864: (TT, kT, cT) => {
+   4748: (qq, Eq, gq) => {
```

#### 38. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L267` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L267) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L267)

```diff
-       d: () => yT
+       c: () => xq
```

#### 39. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L269-L270` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L269-L270) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L269-L270)

```diff
-     var lT = cT(71),
-       MT = cT(1046),
+     var Yq = gq(57),
+       lq = gq(1018),
```

#### 40. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L272)

```diff
-       OT = cT(1099);
+       mq = gq(1070);
```

#### 41. `bundles/bloxd.io/chunks/js/100.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b32bcd4ebbcfa8cee5cd66c58273fbe9c13a7c720560ff697f05db476037ba13) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/100.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/100.js#L298)

```diff
-   4855: () => {}
+   4735: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/101.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/101.js` (57 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8)

#### 1. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L4)

```diff
-   4861: (TT, kT, cT) => {
+   4739: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L6)

```diff
-       e: () => CT
+       d: () => Wq
```

#### 3. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L8)

```diff
-     var lT = cT(1046),
+     var Yq = gq(1018),
```

#### 4. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L10-L16` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L10-L16) · [Before (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L10-L16)

```diff
-       KT = cT(1061),
-       OT = cT(1348),
-       yT = cT(3449),
-       fT = cT(159),
-       xT = cT(3491),
-       IT = cT(3482),
-       AT = cT(1099);
+       Oq = gq(1025),
+       mq = gq(1326),
+       xq = gq(3383),
+       Aq = gq(136),
+       cq = gq(3428),
+       uq = gq(3416),
+       Bq = gq(1070);
```

#### 5. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L22-L24` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L22-L24) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L22-L24)

```diff
-       const cT = (0, fT.m)() ? "large" : "small",
-         lT = (0, xT.i)(kT, cT),
-         CT = (0, yT.f)(lT),
+       const gq = (0, Aq.i)() ? "large" : "small",
+         Yq = (0, cq.e)(Eq, gq),
+         Wq = (0, xq.e)(Yq),
```

#### 6. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L28)

```diff
-         children: [CT.isLoading && !jT && (0, AT.jsx)(OT.d, {
+         children: [Wq.isLoading && !Nq && (0, Bq.jsx)(mq.e, {
```

#### 7. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L31)

```diff
-           className: MT()("SchematicImage", IT.g, {
+           className: lq()("SchematicImage", uq.i, {
```

#### 8. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L34)

```diff
-           style: (0, IT.f)(CT),
+           style: (0, uq.e)(Wq),
```

#### 9. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L40)

```diff
-           children: (0, AT.jsx)(KT.e, {
+           children: (0, Bq.jsx)(Oq.d, {
```

#### 10. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L47)

```diff
-   6524: (TT, kT, cT) => {
+   6381: (qq, Eq, gq) => {
```

#### 11. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L51-L53` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L51-L53) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L51-L53)

```diff
-     cT(4855);
-     var lT = cT(71),
-       MT = cT(1046),
+     gq(4735);
+     var Yq = gq(57),
+       lq = gq(1018),
```

#### 12. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L55-L75` → after: `L55-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L55-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L55-L75) · [Before (L55-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L55-L75)

```diff
-       OT = cT(328),
-       yT = cT(1026),
-       fT = cT(1226),
-       xT = cT(1009),
-       IT = cT(1195),
-       AT = cT(1518),
-       CT = cT(3507),
-       jT = cT(1130),
-       vT = cT(4861),
-       tT = cT(2600),
-       hT = cT(1470),
-       NT = cT(4545),
-       QT = cT(4864),
-       ST = cT(1348),
-       DT = cT(1530),
-       aT = cT(4543),
- ... (5 more removed lines; see GitHub link above)
+       mq = gq(296),
+       xq = gq(997),
+       Aq = gq(1214),
+       cq = gq(985),
+       uq = gq(1183),
+       Bq = gq(1477),
+       Wq = gq(3438),
+       Nq = gq(1101),
+       aq = gq(4739),
+       Vq = gq(2517),
+       dq = gq(1422),
+       jq = gq(4393),
+       Hq = gq(4748),
+       oq = gq(1326),
+       Pq = gq(1498),
+       Qq = gq(4387),
+ ... (5 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L105)

```diff
-           [`StudioLeaderboardTopPosition${kT}`]: void 0 !== cT
+           [`StudioLeaderboardTopPosition${Eq}`]: void 0 !== gq
```

#### 14. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L123)

```diff
-       } = null === kT ? GT : (0, CT.g)(kT);
+       } = null === Eq ? Tq : (0, Wq.j)(Eq);
```

#### 15. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L126-L128` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L126) · [Before (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L126-L128)

```diff
-           children: null !== cT ? (0, CT.b)(cT) : "-"
-         }), (0, mT.jsx)("td", {
-           children: null !== MT ? (0, CT.c)(MT) : "-"
+           children: null !== gq ? (0, Wq.e)(gq) : "-"
```

#### 16. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L141)

```diff
-         children: void 0 !== (null === kT || void 0 === kT ? void 0 : kT.engagementScore) ? (0, fT.P)(Math.round(kT.engagementScore)) : "-"
+         children: void 0 !== (null === Eq || void 0 === Eq ? void 0 : Eq.engagementScore) ? (0, Aq.S)(Math.round(Eq.engagementScore)) : "-"
```

#### 17. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L149)

```diff
-       } = (0, IT.B)(), MT = (0, DT.useNavigatePreserveSearch)(), {
+       } = (0, uq.v)(), lq = (0, Pq.useNavigatePreserveSearch)(), {
```

#### 18. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L152)

```diff
-       } = (0, jT.b)(), GT = (0, FT.o)(), [uT, XT] = (0, aT.o)(), dT = (LT = uT.get(JT), bT.some((TT => TT.scope === LT)) ? LT : HT);
+       } = (0, Nq.c)(), Tq = (0, yq.j)(), [Gq, Lq] = (0, Qq.k)(), Jq = (kq = Gq.get(iq), nq.some((qq => qq.scope === kq)) ? kq : fq);
```

#### 19. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L155` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L155) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L155)

```diff
-           return OT.O.includes(TT) ? TT : null
+           return mq.T.includes(qq) ? qq : null
```

#### 20. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L157)

```diff
-         gT = (0, aT.f)(uT.get(aT.d)),
+         Uq = (0, Qq.e)(Gq.get(Qq.d)),
```

#### 21. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L163)

```diff
-           (0, aT.g)(kT, JT, TT.scope === HT ? null : TT.scope), (0, aT.g)(kT, oT, TT.category), (0, aT.k)(kT, TT.page)
+           (0, Qq.f)(Eq, iq, qq.scope === fq ? null : qq.scope), (0, Qq.f)(Eq, Zq, qq.category), (0, Qq.g)(Eq, qq.page)
```

#### 22. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L172)

```diff
-         return YT(null), WT(!1), AT.d.getPublishedGamePreviews(KT, {
+         return sq(null), wq(!1), Bq.e.getPublishedGamePreviews(Oq, {
```

#### 23. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L184)

```diff
-           firstPartyGameNames: iT ? xT.b : void 0,
+           firstPartyGameNames: Iq ? cq.d : void 0,
```

#### 24. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L194)

```diff
-       const sT = null !== (TT = null === UT || void 0 === UT ? void 0 : UT.results) && void 0 !== TT ? TT : null,
+       const Dq = null !== (qq = null === Fq || void 0 === Fq ? void 0 : Fq.results) && void 0 !== qq ? qq : null,
```

#### 25. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L196)

```diff
-           const [MT, KT] = (0, lT.useState)({}), OT = cT ? (null !== TT && void 0 !== TT ? TT : []).flatMap((TT => "firstPartyGame" === TT.type ? [(0, yT.h)(TT.gameNameWithVariation, !0)] : [])).join(",") : "", fT = (0, lT.useMemo)((() => "" === OT ? [] : OT.split(",")), [OT]);
+           const [lq, Oq] = (0, Yq.useState)({}), mq = gq ? (null !== qq && void 0 !== qq ? qq : []).flatMap((qq => "firstPartyGame" === qq.type ? [(0, xq.d)(qq.gameNameWithVariation, !0)] : [])).join(",") : "", Aq = (0, Yq.useMemo)((() => "" === mq ? [] : mq.split(",")), [mq]);
```

#### 26. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L200)

```diff
-             return AT.d.getGamesByAnalyticsIds(kT, fT).then((kT => {
+             return Bq.e.getGamesByAnalyticsIds(Eq, Aq).then((Eq => {
```

#### 27. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L218)

```diff
-                 thumbnail: (0, mT.jsx)(vT.e, {
+                 thumbnail: (0, hq.jsx)(aq.d, {
```

#### 28. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L226-L227` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L226-L227) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L226-L227)

```diff
-                 discoverability: (0, CT.k)(kT) ? kT : null,
-                 url: (0, wT.o)((0, yT.e)(kT.schematicId))
+                 discoverability: (0, Wq.k)(Eq) ? Eq : null,
+                 url: (0, vq.n)((0, xq.b)(Eq.schematicId))
```

#### 29. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L231)

```diff
-               IT = (0, yT.h)(xT, !0);
+               uq = (0, xq.d)(cq, !0);
```

#### 30. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L235)

```diff
-               thumbnail: (0, mT.jsx)(rT.b, {
+               thumbnail: (0, hq.jsx)(tq.c, {
```

#### 31. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L238)

```diff
-               name: (0, wT.m)(xT, MT),
+               name: (0, vq.j)(cq, lq),
```

#### 32. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L240-L241` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L240-L241) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L240-L241)

```diff
-               category: (0, wT.c)(xT),
-               ccu: (0, FT.e)(xT, kT),
+               category: (0, vq.b)(cq),
+               ccu: (0, yq.c)(cq, Eq),
```

#### 33. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L243-L244` → after: `L243-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L243-L244) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L243-L244)

```diff
-               discoverability: null !== (OT = cT[IT]) && void 0 !== OT ? OT : null,
-               url: (0, wT.o)(IT)
+               discoverability: null !== (mq = gq[uq]) && void 0 !== mq ? mq : null,
+               url: (0, vq.n)(uq)
```

#### 34. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L250)

```diff
-         Mk = null !== (kT = null === UT || void 0 === UT ? void 0 : UT.totalPages) && void 0 !== kT ? kT : 1;
+         lE = null !== (Eq = null === Fq || void 0 === Fq ? void 0 : Fq.totalPages) && void 0 !== Eq ? Eq : 1;
```

#### 35. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L272)

```diff
-           children: bT.map((TT => (0, mT.jsx)(hT.P, {
+           children: nq.map((qq => (0, hq.jsx)(dq.Q, {
```

#### 36. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L285)

```diff
-           children: [(0, mT.jsx)(hT.P, {
+           children: [(0, hq.jsx)(dq.Q, {
```

#### 37. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L295)

```diff
-           }), OT.O.map((TT => (0, mT.jsx)(hT.P, {
+           }), mq.T.map((qq => (0, hq.jsx)(dq.Q, {
```

#### 38. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L304)

```diff
-             children: (0, OT.W)(TT)
+             children: (0, mq.eb)(qq)
```

#### 39. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L308)

```diff
-           children: (0, mT.jsx)(ST.d, {})
+           children: (0, hq.jsx)(oq.e, {})
```

#### 40. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L317)

```diff
-           children: (0, mT.jsx)(QT.d, {
+           children: (0, hq.jsx)(Hq.c, {
```

#### 41. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L359` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L359) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L359)

```diff
-                 children: (0, mT.jsx)(rT.e, {
+                 children: (0, hq.jsx)(tq.d, {
```

#### 42. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L371)

```diff
-                 children: (0, OT.W)(TT.category)
+                 children: (0, mq.eb)(qq.category)
```

#### 43. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L377)

```diff
-                 children: null !== TT.ccu ? (0, fT.P)(TT.ccu) : "-"
+                 children: null !== qq.ccu ? (0, Aq.S)(qq.ccu) : "-"
```

#### 44. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L379)

```diff
-                 children: null !== TT.favourites ? (0, fT.P)(TT.favourites) : "-"
+                 children: null !== qq.favourites ? (0, Aq.S)(qq.favourites) : "-"
```

#### 45. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L383` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L383) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L383)

```diff
-         }), !BT && (0, mT.jsx)(NT.b, {
+         }), !Xq && (0, hq.jsx)(jq.d, {
```

#### 46. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L398)

```diff
-   4867: (TT, kT, cT) => {
+   4753: (qq, Eq, gq) => {
```

#### 47. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L400-L401` → after: `L400-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L400-L401) · [Before (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L400-L401)

```diff
-       b: () => OT,
-       e: () => KT
+       c: () => mq,
+       d: () => Oq
```

#### 48. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L403-L404` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L403-L404) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L403-L404)

```diff
-     var lT = cT(1554),
-       MT = cT(1099);
+     var Yq = gq(1529),
+       lq = gq(1070);
```

#### 49. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L429` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L429) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L429)

```diff
-         src: (0, lT.k)(kT),
+         src: (0, Yq.g)(Eq),
```

#### 50. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L434)

```diff
-   6404: (TT, kT, cT) => {
+   6291: (qq, Eq, gq) => {
```

#### 51. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L439-L444` → after: `L439-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L439-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L439-L444) · [Before (L439-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L439-L444)

```diff
-       1: cT(6410),
-       2: cT(6419),
-       3: cT(6428)
-     }
-   },
-   4864: (TT, kT, cT) => {
+       1: gq(6295),
+       2: gq(6297),
+       3: gq(6299)
+     }
+   },
+   4748: (qq, Eq, gq) => {
```

#### 52. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L446)

```diff
-       d: () => yT
+       c: () => xq
```

#### 53. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L448-L449` → after: `L448-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L448-L449) · [Before (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L448-L449)

```diff
-     var lT = cT(71),
-       MT = cT(1046),
+     var Yq = gq(57),
+       lq = gq(1018),
```

#### 54. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L451)

```diff
-       OT = cT(1099);
+       mq = gq(1070);
```

#### 55. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L477-L478` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L477-L478) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L477-L478)

```diff
-   4855: () => {},
-   6410: TT => {
+   4735: () => {},
+   6295: qq => {
```

#### 56. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L481)

```diff
-   6419: TT => {
+   6297: qq => {
```

#### 57. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/101.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/101.js#L484)

```diff
-   6428: TT => {
+   6299: qq => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/102.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/102.js` (62 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4)

#### 1. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L4-L6)

```diff
-   4861: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => CT
+   4739: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => Wq
```

#### 2. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L8)

```diff
-     var lT = cT(1046),
+     var Yq = gq(1018),
```

#### 3. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L10-L16` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L10-L16) · [Before (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L10-L16)

```diff
-       KT = cT(1061),
-       OT = cT(1348),
-       yT = cT(3449),
-       fT = cT(159),
-       xT = cT(3491),
-       IT = cT(3482),
-       AT = cT(1099);
+       Oq = gq(1025),
+       mq = gq(1326),
+       xq = gq(3383),
+       Aq = gq(136),
+       cq = gq(3428),
+       uq = gq(3416),
+       Bq = gq(1070);
```

#### 4. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L22-L24` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L22-L24) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L22-L24)

```diff
-       const cT = (0, fT.m)() ? "large" : "small",
-         lT = (0, xT.i)(kT, cT),
-         CT = (0, yT.f)(lT),
+       const gq = (0, Aq.i)() ? "large" : "small",
+         Yq = (0, cq.e)(Eq, gq),
+         Wq = (0, xq.e)(Yq),
```

#### 5. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L28)

```diff
-         children: [CT.isLoading && !jT && (0, AT.jsx)(OT.d, {
+         children: [Wq.isLoading && !Nq && (0, Bq.jsx)(mq.e, {
```

#### 6. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L31)

```diff
-           className: MT()("SchematicImage", IT.g, {
+           className: lq()("SchematicImage", uq.i, {
```

#### 7. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L34)

```diff
-           style: (0, IT.f)(CT),
+           style: (0, uq.e)(Wq),
```

#### 8. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L40)

```diff
-           children: (0, AT.jsx)(KT.e, {
+           children: (0, Bq.jsx)(Oq.d, {
```

#### 9. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L47)

```diff
-   4979: (TT, kT, cT) => {
+   4875: (qq, Eq, gq) => {
```

#### 10. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L51-L52` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L51-L52) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L51-L52)

```diff
-     var lT = cT(71),
-       MT = cT(1046),
+     var Yq = gq(57),
+       lq = gq(1018),
```

#### 11. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L54-L60` → after: `L54-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L54-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L54-L60) · [Before (L54-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L54-L60)

```diff
-       OT = cT(4909),
-       yT = cT(1348),
-       fT = cT(1195),
-       xT = cT(3089),
-       IT = cT(3226),
-       AT = cT(1061),
-       CT = cT(1099);
+       mq = gq(4792),
+       xq = gq(1326),
+       Aq = gq(1183),
+       cq = gq(3059),
+       uq = gq(3174),
+       Bq = gq(1025),
+       Wq = gq(1070);
```

#### 12. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L72)

```diff
-       } = (0, fT.B)(), [NT, QT] = (0, lT.useState)(!1), [ST, DT] = (0, lT.useState)(null), [aT, FT] = (0, lT.useState)(null), rT = (0, lT.useRef)(null);
+       } = (0, Aq.v)(), [jq, Hq] = (0, Yq.useState)(!1), [oq, Pq] = (0, Yq.useState)(null), [Qq, yq] = (0, Yq.useState)(null), tq = (0, Yq.useRef)(null);
```

#### 13. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L77)

```diff
-       } = (0, OT.c)({
+       } = (0, mq.e)({
```

#### 14. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L81-L82)

```diff
-             const kT = await (0, xT.q)(TT);
-             if ("customGame" === tT && (0, IT.i)(kT)) return void DT(hT(IT.b));
+             const Eq = await (0, cq.o)(qq);
+             if ("customGame" === Vq && (0, uq.k)(Eq)) return void Pq(dq(uq.b));
```

#### 15. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L85)

```diff
-               if (TT > vT) return void DT(`File size is too large. Max size is ${vT}MB. Current size is ${TT}MB.`)
+               if (qq > aq) return void Pq(`File size is too large. Max size is ${aq}MB. Current size is ${qq}MB.`)
```

#### 16. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L90)

```diff
-                 lT && Promise.all([cT.e(195), cT.e(194)]).then((() => cT(9423))).then((cT => {
+                 Yq && Promise.all([gq.e(196), gq.e(195)]).then((() => gq(9348))).then((gq => {
```

#### 17. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L142)

```diff
-             children: (0, CT.jsx)(yT.d, {})
+             children: (0, Wq.jsx)(xq.e, {})
```

#### 18. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L146)

```diff
-               children: (0, CT.jsx)(AT.e, {
+               children: (0, Wq.jsx)(Bq.d, {
```

#### 19. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L156)

```diff
-               children: (0, CT.jsx)(AT.e, {
+               children: (0, Wq.jsx)(Bq.d, {
```

#### 20. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L168-L170` → after: `L168-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L168-L171) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L168-L170)

```diff
-   4945: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => vT,
+   4828: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => aq,
+       f: () => oq,
```

#### 21. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L172-L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L173) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L172-L173)

```diff
-       l: () => tT,
-       m: () => QT
+       l: () => Hq
```

#### 22. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L175-L180` → after: `L175-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L175-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L175-L180) · [Before (L175-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L175-L180)

```diff
-     var lT = cT(71),
-       MT = cT(4948),
-       KT = cT(4355),
-       OT = cT(1379),
-       yT = cT(4968),
-       fT = cT(1046),
+     var Yq = gq(57),
+       lq = gq(4837),
+       Oq = gq(4195),
+       mq = gq(1341),
+       xq = gq(4858),
+       Aq = gq(1018),
```

#### 23. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L182-L185` → after: `L182-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L182-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L182-L185) · [Before (L182-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L182-L185)

```diff
-       IT = cT(1363),
-       AT = cT(1741),
-       CT = cT(4975),
-       jT = cT(1099);
+       uq = gq(1336),
+       Bq = gq(1710),
+       Wq = gq(4866),
+       Nq = gq(1070);
```

#### 24. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L211)

```diff
-             children: (0, jT.jsx)(KT.d, {
+             children: (0, Nq.jsx)(Oq.b, {
```

#### 25. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L221)

```diff
-               children: (0, jT.jsx)(OT.b, {
+               children: (0, Nq.jsx)(mq.c, {
```

#### 26. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L268)

```diff
-           children: [`${kT}: ${AT?AT(DT):DT}`, IT && (0, jT.jsx)(OT.b, {
+           children: [`${Eq}: ${Bq?Bq(Pq):Pq}`, uq && (0, Nq.jsx)(mq.c, {
```

#### 27. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L323)

```diff
-         const lT = null !== (TT = null === (kT = rT.current) || void 0 === kT ? void 0 : kT.querySelector(".rangeslider")) && void 0 !== TT ? TT : null;
+         const Yq = null !== (qq = null === (Eq = tq.current) || void 0 === Eq ? void 0 : Eq.querySelector(".rangeslider")) && void 0 !== qq ? qq : null;
```

#### 28. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L329)

```diff
-       const wT = (null !== (kT = String(yT).split(".")[1]) && void 0 !== kT ? kT : "").length,
+       const vq = (null !== (Eq = String(xq).split(".")[1]) && void 0 !== Eq ? Eq : "").length,
```

#### 29. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L347)

```diff
-       return (0, CT.d)(PT, {
+       return (0, Wq.i)(rq, {
```

#### 30. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L350)

```diff
-           const kT = null !== aT && void 0 !== aT ? aT : Math.max(yT, Math.round((OT - KT) / 20 / yT) * yT),
+           const Eq = null !== Qq && void 0 !== Qq ? Qq : Math.max(xq, Math.round((mq - Oq) / 20 / xq) * xq),
```

#### 31. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L356)

```diff
-           const kT = mT(KT + (IT ? 1 - TT : TT) * (OT - KT));
+           const Eq = hq(Oq + (uq ? 1 - qq : qq) * (mq - Oq));
```

#### 32. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L367)

```diff
-         children: (0, jT.jsx)(MT.b, {
+         children: (0, Nq.jsx)(lq.d, {
```

#### 33. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L414)

```diff
-           children: [kT, KT && (0, jT.jsx)(OT.b, {
+           children: [Eq, Oq && (0, Nq.jsx)(mq.c, {
```

#### 34. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L418)

```diff
-         }), (0, jT.jsx)(yT.d, {
+         }), (0, Nq.jsx)(xq.c, {
```

#### 35. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L427-L430` → after: `L427-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L427-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L427-L430) · [Before (L427-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L427-L430)

```diff
-   4943: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => NT,
-       f: () => QT
+   4826: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => jq,
+       d: () => Hq
```

#### 36. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L432-L435` → after: `L432-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L432-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L432-L435) · [Before (L432-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L432-L435)

```diff
-     var lT = cT(3089),
-       MT = cT(3092),
-       KT = cT(71),
-       OT = cT(1046),
+     var Yq = gq(3059),
+       lq = gq(3067),
+       Oq = gq(57),
+       mq = gq(1018),
```

#### 37. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L437-L444` → after: `L437-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L437-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L437-L444) · [Before (L437-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L437-L444)

```diff
-       fT = cT(1348),
-       xT = cT(3081),
-       IT = cT(1363),
-       AT = cT(4945),
-       CT = cT(4979),
-       jT = cT(636),
-       vT = cT(4988),
-       tT = cT(1099);
+       Aq = gq(1326),
+       cq = gq(3056),
+       uq = gq(1336),
+       Bq = gq(4828),
+       Wq = gq(4875),
+       Nq = gq(611),
+       aq = gq(4883),
+       Vq = gq(1070);
```

#### 38. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L447` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L447) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L447)

```diff
-       (0, AT.m)("texturePackPickReload")
+       (0, Bq.l)("texturePackPickReload")
```

#### 39. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L458-L461` → after: `L458-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L458-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L458-L461) · [Before (L458-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L458-L461)

```diff
-         xT.e.setFromJson(TT, "player");
-         const lT = xT.e.saveTexturePack();
-         if (jT.x) {
-           const TT = xT.e.toJson();
+         cq.c.setFromJson(qq, "player");
+         const Yq = cq.c.saveTexturePack();
+         if (Nq.v) {
+           const qq = cq.c.toJson();
```

#### 40. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L465)

```diff
-         } else yT.current ||= kT, fT.current !== xT.e.getId() || xT.e.getId() === MT.r.CUSTOM && yT.current ? cT((() => AT.m)) : cT(null);
+         } else xq.current ||= Eq, Aq.current !== cq.c.getId() || cq.c.getId() === lq.n.CUSTOM && xq.current ? gq((() => Bq.l)) : gq(null);
```

#### 41. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L469-L470` → after: `L469-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L469-L470) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L469-L470)

```diff
-         if (xT.e.getId() !== TT.metaData.id) {
-           if (xT.e.getId() === MT.r.CUSTOM && xT.e.getFromFolderName()) {
+         if (cq.c.getId() !== qq.metaData.id) {
+           if (cq.c.getId() === lq.n.CUSTOM && cq.c.getFromFolderName()) {
```

#### 42. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L485` → after: `L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L485) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L485)

```diff
-         fT.current = xT.e.getId()
+         Aq.current = cq.c.getId()
```

#### 43. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L488` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L488) · [Before (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L488)

```diff
-         aT = [DT, ...Object.values(MT.r).filter((TT => TT !== DT))];
+         Qq = [Pq, ...Object.values(lq.n).filter((qq => qq !== Pq))];
```

#### 44. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L496)

```diff
-               isSelected: TT === xT.e.getId(),
+               isSelected: qq === cq.c.getId(),
```

#### 45. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L499-L500` → after: `L499-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L499-L500) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L499-L500)

```diff
-           }), xT.e.getId() === MT.r.CUSTOM && (0, tT.jsx)(CT.e, {
-             folderName: null !== (kT = xT.e.getFromFolderName()) && void 0 !== kT ? kT : null,
+           }), cq.c.getId() === lq.n.CUSTOM && (0, Vq.jsx)(Wq.e, {
+             folderName: null !== (Eq = cq.c.getFromFolderName()) && void 0 !== Eq ? Eq : null,
```

#### 46. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L521)

```diff
-           TT && (ST.current = TT, AT(!1), jT(ST.current.metaData.name), hT(ST.current.metaData.author), QT(null !== (kT = ST.current.metaData.previewImage) && void 0 !== kT ? kT : ""))
+           qq && (oq.current = qq, Bq(!1), Nq(oq.current.metaData.name), dq(oq.current.metaData.author), Hq(null !== (Eq = oq.current.metaData.previewImage) && void 0 !== Eq ? Eq : ""))
```

#### 47. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L523` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L523) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L523)

```diff
-           console.warn(`Failed to fetch texture pack ${kT}`, TT)
+           console.warn(`Failed to fetch texture pack ${Eq}`, qq)
```

#### 48. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L530` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L530) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L530)

```diff
-           Custom: kT === MT.r.CUSTOM,
+           Custom: Eq === lq.n.CUSTOM,
```

#### 49. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L539)

```diff
-             backgroundImage: NT ? `url(${NT})` : void 0
+             backgroundImage: jq ? `url(${jq})` : void 0
```

#### 50. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L543` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L543) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L543)

```diff
-           children: (0, tT.jsx)(fT.d, {})
+           children: (0, Vq.jsx)(Aq.e, {})
```

#### 51. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L554-L556` → after: `L554-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L554-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L554-L556) · [Before (L554-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L554-L556)

```diff
-   4968: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => OT
+   4858: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
```

#### 52. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L558)

```diff
-     var lT = cT(1046),
+     var Yq = gq(1018),
```

#### 53. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L560)

```diff
-       KT = cT(1099);
+       Oq = gq(1070);
```

#### 54. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L604-L607` → after: `L604-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L604-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L604-L607) · [Before (L604-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L604-L607)

```diff
-   4975: (TT, kT, cT) => {
-     cT.d(kT, {
-       c: () => KT,
-       d: () => OT
+   4866: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => Oq,
+       i: () => mq
```

#### 55. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L609)

```diff
-     var lT = cT(71);
+     var Yq = gq(57);
```

#### 56. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L614` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L614) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L614)

```diff
-         return cT && null !== (kT = MT.get(cT)) && void 0 !== kT ? kT : null
+         return gq && null !== (Eq = lq.get(gq)) && void 0 !== Eq ? Eq : null
```

#### 57. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L635-L637` → after: `L635-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L635-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L635-L637) · [Before (L635-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L635-L637)

```diff
-   4988: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => yT,
+   4883: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => xq,
```

#### 58. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L640-L641` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L640-L641) · [Before (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L640-L641)

```diff
-     var lT = cT(3092),
-       MT = cT(4991);
+     var Yq = gq(3067),
+       lq = gq(4890);
```

#### 59. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L646)

```diff
-         pack: TT.metaData.id === lT.d ? null : TT,
+         pack: qq.metaData.id === Yq.c ? null : qq,
```

#### 60. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L653)

```diff
-       null !== cT && (0, MT.d)(cT.pack, TT) && (KT = null, kT && cT.prompt())
+       null !== gq && (0, lq.c)(gq.pack, qq) && (Oq = null, Eq && gq.prompt())
```

#### 61. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L656` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L656) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L656)

```diff
-   4991: (TT, kT, cT) => {
+   4890: (qq, Eq, gq) => {
```

#### 62. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/102.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/102.js#L670)

```diff
-       d: () => lT
+       c: () => Yq
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (2760 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 1. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4)

```diff
-   6516: (TT, kT, cT) => {
+   6373: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8-L16` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8-L16) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8-L16)

```diff
-     var lT = cT(71),
-       MT = cT(1470),
-       KT = cT(1518),
-       OT = cT(3436),
-       yT = cT(1130),
-       fT = cT(1348),
-       xT = cT(1379),
-       IT = cT(1061),
-       AT = cT(1046),
+     var Yq = gq(57),
+       lq = gq(1422),
+       Oq = gq(1477),
+       mq = gq(3369),
+       xq = gq(1101),
+       Aq = gq(1326),
+       cq = gq(1341),
+       uq = gq(1025),
+       Bq = gq(1018),
```

#### 3. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L18)

```diff
-       jT = cT(1099);
+       Nq = gq(1070);
```

#### 4. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L29)

```diff
-           children: [(0, jT.jsx)(IT.e, {
+           children: [(0, Nq.jsx)(uq.d, {
```

#### 5. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L38)

```diff
-             children: [(0, jT.jsx)(IT.e, {
+             children: [(0, Nq.jsx)(uq.d, {
```

#### 6. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L54-L55` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L54-L55) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L54-L55)

```diff
-     var tT = cT(1195),
-       hT = cT(1363);
+     var Vq = gq(1183),
+       dq = gq(1336);
```

#### 7. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L76)

```diff
-       } = (0, tT.B)(), {
+       } = (0, Vq.v)(), {
```

#### 8. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L78-L79` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L78-L79) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L78-L79)

```diff
-       } = (0, yT.b)(), NT = (0, OT.b)(), [QT, ST] = (0, lT.useState)(null), [DT, aT] = (0, lT.useState)(null), [FT, rT] = (0, lT.useState)(!1), PT = (0, lT.useCallback)((() => {
-         aT(null), KT.d.getGameApprovalInfo(hT, kT).then((TT => {
+       } = (0, xq.c)(), jq = (0, mq.c)(), [Hq, oq] = (0, Yq.useState)(null), [Pq, Qq] = (0, Yq.useState)(null), [yq, tq] = (0, Yq.useState)(!1), rq = (0, Yq.useCallback)((() => {
+         Qq(null), Oq.e.getGameApprovalInfo(dq, Eq).then((qq => {
```

#### 9. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L89)

```diff
-         FT || (rT(!0), KT.d.setGameApproval(hT, kT, TT).then((() => {
+         yq || (tq(!0), Oq.e.setGameApproval(dq, Eq, qq).then((() => {
```

#### 10. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L104` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L104) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L104)

```diff
-           children: (0, jT.jsx)(fT.d, {})
+           children: (0, Nq.jsx)(Aq.e, {})
```

#### 11. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L113)

```diff
-             children: [!0 !== QT.manualOverride && (0, jT.jsx)(xT.c, {
+             children: [!0 !== Hq.manualOverride && (0, Nq.jsx)(cq.e, {
```

#### 12. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L117)

```diff
-               children: (0, jT.jsxs)(MT.m, {
+               children: (0, Nq.jsxs)(lq.p, {
```

#### 13. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L123)

```diff
-                 children: [(0, jT.jsx)(IT.e, {
+                 children: [(0, Nq.jsx)(uq.d, {
```

#### 14. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L127)

```diff
-             }), !1 !== QT.manualOverride && (0, jT.jsx)(xT.c, {
+             }), !1 !== Hq.manualOverride && (0, Nq.jsx)(cq.e, {
```

#### 15. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L131)

```diff
-               children: (0, jT.jsxs)(MT.I, {
+               children: (0, Nq.jsxs)(lq.K, {
```

#### 16. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L137)

```diff
-                 children: [(0, jT.jsx)(IT.e, {
+                 children: [(0, Nq.jsx)(uq.d, {
```

#### 17. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L141)

```diff
-             }), null !== QT.manualOverride && (0, jT.jsx)(xT.c, {
+             }), null !== Hq.manualOverride && (0, Nq.jsx)(cq.e, {
```

#### 18. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L145)

```diff
-               children: (0, jT.jsxs)(MT.e, {
+               children: (0, Nq.jsxs)(lq.g, {
```

#### 19. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L151)

```diff
-                 children: [(0, jT.jsx)(IT.e, {
+                 children: [(0, Nq.jsx)(uq.d, {
```

#### 20. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L161)

```diff
-   4876: (TT, kT, cT) => {
+   4761: (qq, Eq, gq) => {
```

#### 21. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L165-L170` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L165-L166) · [Before (L165-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L165-L170)

```diff
-     var lT = cT(71),
-       MT = cT(1535),
-       KT = cT(1046),
-       OT = cT.n(KT),
-       yT = cT(1026),
-       fT = cT(1226),
+     var Yq = gq(57),
+       lq = gq(1512),
```

#### 22. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L172-L190` → after: `L168-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L168-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L168-L190) · [Before (L172-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L172-L190)

```diff
-       IT = cT(339),
-       AT = cT(1559),
-       CT = cT(1009),
-       jT = cT(1195),
-       vT = cT(1130),
-       tT = cT(328),
-       hT = cT(1518),
-       NT = cT(31),
-       QT = cT(1953),
-       ST = cT(1470),
-       DT = cT(1061),
-       aT = cT(1348),
-       FT = cT(4861),
-       rT = cT(4880),
-       PT = cT(4905),
-       wT = cT(4993),
- ... (3 more removed lines; see GitHub link above)
+       mq = gq.n(Oq),
+       xq = gq(997),
+       Aq = gq(1214),
+       cq = gq(987),
+       uq = gq(307),
+       Bq = gq(1532),
+       Wq = gq(985),
+       Nq = gq(1183),
+       aq = gq(1101),
+       Vq = gq(296),
+       dq = gq(1477),
+       jq = gq(24),
+       Hq = gq(1904),
+       oq = gq(1422),
+       Pq = gq(1025),
+       Qq = gq(1326),
+ ... (7 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L223-L225` → after: `L223-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L223-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L223-L225) · [Before (L223-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L223-L225)

```diff
-     var GT = cT(3507),
-       VT = cT(1202),
-       ET = cT(1136);
+     var Tq = gq(3438),
+       zq = gq(1195),
+       Sq = gq(1109);
```

#### 24. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L239` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L239) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L239)

```diff
-         return await (0, ET.postJsonWithMetricsCookiesAndJsonResponse)(`${VT.clientSideServerUrls.indexUrl}${TT}`, cT, lT, kT.getMetricsCookies())
+         return await (0, Sq.postJsonWithMetricsCookiesAndJsonResponse)(`${zq.clientSideServerUrls.indexUrl}${qq}`, gq, Yq, Eq.getMetricsCookies())
```

#### 25. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L380-L394` → after: `L380-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L380-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L380-L394) · [Before (L380-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L380-L394)

```diff
-     var LT = cT(1379),
-       RT = cT(5001),
-       gT = cT(5419),
-       UT = cT(6390),
-       YT = cT(6372),
-       BT = cT(6388),
-       WT = cT(5921),
-       nT = cT(6358),
-       pT = cT(6367),
-       iT = cT(6314),
-       qT = cT(3059),
-       sT = cT(6399),
-       Tk = cT(6257),
-       kk = cT(6264),
-       ck = cT(1692);
+     var kq = gq(1341),
+       Rq = gq(4902),
+       Uq = gq(5329),
+       Fq = gq(6285),
+       sq = gq(6269),
+       Xq = gq(6283),
+       wq = gq(5847),
+       Kq = gq(6258),
+       Cq = gq(6265),
+       Iq = gq(6207),
+       eq = gq(3040),
+       Dq = gq(6288),
+       qE = gq(6161),
+       EE = gq(6170),
+       gE = gq(1659);
```

#### 26. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L413-L414` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L413-L414) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L413-L414)

```diff
-       const kT = Kk.test(TT) ? `'${TT}` : TT;
-       return /[",\r\n]/.test(kT) ? `"${kT.replace(/"/g,'""')}"` : kT
+       const Eq = OE.test(qq) ? `'${qq}` : qq;
+       return /[",\r\n]/.test(Eq) ? `"${Eq.replace(/"/g,'""')}"` : Eq
```

#### 27. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L426-L427` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L426-L427) · [Before (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L426-L427)

```diff
-     var Ik = cT(1741),
-       Ak = cT(1099);
+     var uE = gq(1710),
+       BE = gq(1070);
```

#### 28. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L438)

```diff
-       return (0, Ak.jsx)(LT.c, {
+       return (0, BE.jsx)(kq.e, {
```

#### 29. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L442)

```diff
-         children: (0, Ak.jsxs)(ST.P, {
+         children: (0, BE.jsxs)(oq.Q, {
```

#### 30. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L447` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L447) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L447)

```diff
-           children: [(0, Ak.jsx)(DT.e, {
+           children: [(0, BE.jsx)(Pq.d, {
```

#### 31. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L466)

```diff
-       } = (0, jT.B)();
+       } = (0, Nq.v)();
```

#### 32. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L474` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L474) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L474)

```diff
-           (0, Ik.downloadBlob)(new Blob([`${jk}${TT}`], {
+           (0, uE.downloadBlob)(new Blob([`${NE}${qq}`], {
```

#### 33. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L478)

```diff
-             return `${""===kT?"export":kT}.csv`
+             return `${""===Eq?"export":Eq}.csv`
```

#### 34. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L510` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L510) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L510)

```diff
-         cT = Date.parse(`${TT.endDay}T00:00:00Z`);
+         gq = Date.parse(`${qq.endDay}T00:00:00Z`);
```

#### 35. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L549)

```diff
-         const OT = Math.max(null !== (cT = kT.value) && void 0 !== cT ? cT : 0, null !== (lT = kT.comparisonValue) && void 0 !== lT ? lT : 0, null !== (MT = null === (KT = kT.comparisonBand) || void 0 === KT ? void 0 : KT[1]) && void 0 !== MT ? MT : 0);
+         const mq = Math.max(null !== (gq = Eq.value) && void 0 !== gq ? gq : 0, null !== (Yq = Eq.comparisonValue) && void 0 !== Yq ? Yq : 0, null !== (lq = null === (Oq = Eq.comparisonBand) || void 0 === Oq ? void 0 : Oq[1]) && void 0 !== lq ? lq : 0);
```

#### 36. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L555` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L555) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L555)

```diff
-           OT = cT ? TT : Math.round(TT);
+           mq = gq ? qq : Math.round(qq);
```

#### 37. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L574` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L574) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L574)

```diff
-         lT = kT ? cT : Math.max(1, cT);
+         Yq = Eq ? gq : Math.max(1, gq);
```

#### 38. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L619)

```diff
-       return null !== (cT = null === (lT = TT[kT]) || void 0 === lT ? void 0 : lT.percent) && void 0 !== cT ? cT : null
+       return null !== (gq = null === (Yq = qq[Eq]) || void 0 === Yq ? void 0 : Yq.percent) && void 0 !== gq ? gq : null
```

#### 39. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L632` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L632) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L632)

```diff
-       return `${Math.round(TT)}%`
+       return `${Math.round(qq)}%`
```

#### 40. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L636` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L636) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L636)

```diff
-       return `${TT.toFixed(1)}%`
+       return `${qq.toFixed(1)}%`
```

#### 41. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L640)

```diff
-       return TT >= kT ? `${TT}m+` : `${TT}m`
+       return qq >= Eq ? `${qq}m+` : `${qq}m`
```

#### 42. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L669` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L669) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L669)

```diff
-       if (kT < 60) return `${kT}s`;
+       if (Eq < 60) return `${Eq}s`;
```

#### 43. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L671-L672` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L671-L672) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L671-L672)

```diff
-       if (cT < 60) return `${cT}m ${kT%60}s`;
-       return `${Math.floor(cT/60)}h ${cT%60}m`
+       if (gq < 60) return `${gq}m ${Eq%60}s`;
+       return `${Math.floor(gq/60)}h ${gq%60}m`
```

#### 44. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L677)

```diff
-       return "1d" === kT ? hk(TT, !0) : `${hk(TT)}, ${Nk(TT)}`
+       return "1d" === Eq ? dE(qq, !0) : `${dE(qq)}, ${jE(qq)}`
```

#### 45. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L689)

```diff
-       } = (0, jT.B)(), OT = TT => null === TT || void 0 === TT ? MT : lT(TT), yT = kT.comparisonBand;
+       } = (0, Nq.v)(), mq = qq => null === qq || void 0 === qq ? lq : Yq(qq), xq = Eq.comparisonBand;
```

#### 46. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L711` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L711) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L711)

```diff
-       return cT ? [`${kT}: ${TT("studio:comparisonPercentile20")}`, `${kT}: ${TT("studio:comparisonPercentile50")}`, `${kT}: ${TT("studio:comparisonPercentile80")}`] : [kT]
+       return gq ? [`${Eq}: ${qq("studio:comparisonPercentile20")}`, `${Eq}: ${qq("studio:comparisonPercentile50")}`, `${Eq}: ${qq("studio:comparisonPercentile80")}`] : [Eq]
```

#### 47. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L716)

```diff
-       return kT ? [null !== (cT = null === (lT = TT.comparisonBand) || void 0 === lT ? void 0 : lT[0]) && void 0 !== cT ? cT : null, null !== (MT = TT.comparisonValue) && void 0 !== MT ? MT : null, null !== (KT = null === (OT = TT.comparisonBand) || void 0 === OT ? void 0 : OT[1] … [truncated]
+       return Eq ? [null !== (gq = null === (Yq = qq.comparisonBand) || void 0 === Yq ? void 0 : Yq[0]) && void 0 !== gq ? gq : null, null !== (lq = qq.comparisonValue) && void 0 !== lq ? lq : null, null !== (Oq = null === (mq = qq.comparisonBand) || void 0 === mq ? void 0 : mq[1] … [truncated]
```

#### 48. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L740)

```diff
-           children: null === IT.value ? OT : KT(IT.value)
+           children: null === uq.value ? mq : Oq(uq.value)
```

#### 49. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L751-L752` → after: `L751-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L751-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L751-L752) · [Before (L751-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L751-L752)

```diff
-             }), TT.label, ": ", null === lT || void 0 === lT ? OT : KT(lT)]
-           }, `StudioStatsChartTooltipLine-${kT}`)
+             }), qq.label, ": ", null === Yq || void 0 === Yq ? mq : Oq(Yq)]
+           }, `StudioStatsChartTooltipLine-${Eq}`)
```

#### 50. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L806)

```diff
-         Om: KT
+         OJ: Oq
```

#### 51. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L810` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L810) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L810)

```diff
-       } = (0, jT.B)();
+       } = (0, Nq.v)();
```

#### 52. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L821)

```diff
-           ...(0, ST.X)(),
+           ...(0, oq.V)(),
```

#### 53. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L826)

```diff
-           children: (0, Ak.jsx)(DT.e, {
+           children: (0, BE.jsx)(Pq.d, {
```

#### 54. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L843` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L843) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L843)

```diff
-       } = (0, jT.B)();
+       } = (0, Nq.v)();
```

#### 55. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L854-L855` → after: `L854-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L854-L855) · [Before (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L854-L855)

```diff
-           Om: TT.Om
-         }, `StudioChartLegendLine-${kT}`))), void 0 !== lT && MT && (0, Ak.jsxs)(Ak.Fragment, {
+           OJ: qq.OJ
+         }, `StudioChartLegendLine-${Eq}`))), void 0 !== Yq && lq && (0, BE.jsxs)(BE.Fragment, {
```

#### 56. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L896)

```diff
-       } = (0, jT.B)(), NT = void 0 !== IT || void 0 !== AT;
+       } = (0, Nq.v)(), jq = void 0 !== uq || void 0 !== Bq;
```

#### 57. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L905` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L905) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L905)

```diff
-             children: [kT, (0, Ak.jsx)(LT.b, {
+             children: [Eq, (0, BE.jsx)(kq.c, {
```

#### 58. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L918)

```diff
-           children: (0, Ak.jsx)(aT.d, {})
+           children: (0, BE.jsx)(Qq.e, {})
```

#### 59. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L960` → after: `L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L960) · [Before (L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L960)

```diff
-       } = (0, jT.B)(), QT = null !== tT && void 0 !== tT ? tT : [], ST = KT.filter((TT => null !== TT.value)).length, DT = QT.some((TT => TT.values.some((TT => null !== TT)))), aT = void 0 !== AT && KT.some((TT => null !== TT.comparisonValue && void 0 !== TT.comparisonValue)), FT … [truncated]
+       } = (0, Nq.v)(), Hq = null !== Vq && void 0 !== Vq ? Vq : [], oq = Oq.filter((qq => null !== qq.value)).length, Pq = Hq.some((qq => qq.values.some((qq => null !== qq)))), Qq = void 0 !== Bq && Oq.some((qq => null !== qq.comparisonValue && void 0 !== qq.comparisonValue)), yq … [truncated]
```

#### 60. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L964` → after: `L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L964) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L964)

```diff
-             dateMs: null !== (cT = null === (lT = KT[kT]) || void 0 === lT ? void 0 : lT.dateMs) && void 0 !== cT ? cT : 0,
+             dateMs: null !== (gq = null === (Yq = Oq[Eq]) || void 0 === Yq ? void 0 : Yq.dateMs) && void 0 !== gq ? gq : 0,
```

#### 61. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L975)

```diff
-           return null !== (cT = TT.values[kT]) && void 0 !== cT ? cT : null
+           return null !== (gq = qq.values[Eq]) && void 0 !== gq ? gq : null
```

#### 62. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L979` → after: `L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L979) · [Before (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L979)

```diff
-         const MT = (null !== TT && void 0 !== TT ? TT : []).map((TT => cc(TT, kT, cT, lT))).filter((TT => null !== TT)),
+         const lq = (null !== qq && void 0 !== qq ? qq : []).map((qq => Eg(qq, Eq, gq, Yq))).filter((qq => null !== qq)),
```

#### 63. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L982` → after: `L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L982) · [Before (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L982)

```diff
-           const kT = `${TT.dateMs}-${TT.label}`;
+           const Eq = `${qq.dateMs}-${qq.label}`;
```

#### 64. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L988` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L988) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L988)

```diff
-         seriesLabel: ST > 0 ? CT : void 0,
+         seriesLabel: oq > 0 ? Wq : void 0,
```

#### 65. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L990` → after: `L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L990) · [Before (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L990)

```diff
-         comparisonLabel: aT ? AT : void 0,
+         comparisonLabel: Qq ? Bq : void 0,
```

#### 66. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1004` → after: `L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1004) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1004)

```diff
-             [NT("Date"), ...ST > 0 ? [null !== CT && void 0 !== CT ? CT : kT] : [], ...QT.map((TT => TT.label)), ...TT], ...KT.map(((TT, kT) => [yk(TT.dateMs, OT), ...ST > 0 ? [TT.value] : [], ...QT.map((TT => {
+             [jq("Date"), ...oq > 0 ? [null !== Wq && void 0 !== Wq ? Wq : Eq] : [], ...Hq.map((qq => qq.label)), ...qq], ...Oq.map(((qq, Eq) => [xE(qq.dateMs, mq), ...oq > 0 ? [qq.value] : [], ...Hq.map((qq => {
```

#### 67. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1006)

```diff
-               return null !== (cT = TT.values[kT]) && void 0 !== cT ? cT : null
+               return null !== (gq = qq.values[Eq]) && void 0 !== gq ? gq : null
```

#### 68. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1021)

```diff
-         children: (0, Ak.jsx)(RT.b, {
+         children: (0, BE.jsx)(Rq.d, {
```

#### 69. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1024)

```diff
-           children: (0, Ak.jsxs)(gT.d, {
+           children: (0, BE.jsxs)(Uq.e, {
```

#### 70. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1032` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1032) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1032)

```diff
-             children: [(0, Ak.jsx)(UT.b, {
+             children: [(0, BE.jsx)(Fq.c, {
```

#### 71. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1037` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1037) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1037)

```diff
-             }), (0, Ak.jsx)(YT.c, {
+             }), (0, BE.jsx)(sq.b, {
```

#### 72. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1046` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1046) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1046)

```diff
-               UA: {
+               SB: {
```

#### 73. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1052` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1052) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1052)

```diff
-               UA: {
+               SB: {
```

#### 74. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1058)

```diff
-             }), (0, Ak.jsx)(WT.b, {
+             }), (0, BE.jsx)(wq.e, {
```

#### 75. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1063` → after: `L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1063) · [Before (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1063)

```diff
-                 comparisonLabel: aT ? AT : void 0,
+                 comparisonLabel: Qq ? Bq : void 0,
```

#### 76. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1071` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1071) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1071)

```diff
-             }), FT && (0, Ak.jsx)(nT.b, {
+             }), yq && (0, BE.jsx)(Kq.d, {
```

#### 77. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1081` → after: `L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1081) · [Before (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1081)

```diff
-             }), (0, Ak.jsx)(pT.d, {
+             }), (0, BE.jsx)(Cq.b, {
```

#### 78. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1098)

```diff
-                 }, `StudioStatsChartDot-${lT}`) : (0, Ak.jsx)("g", {}, `StudioStatsChartDot-${lT}`)
+                 }, `StudioStatsChartDot-${Yq}`) : (0, BE.jsx)("g", {}, `StudioStatsChartDot-${Yq}`)
```

#### 79. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1105` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1105) · [Before (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1105)

```diff
-             }), QT.map(((TT, kT) => (0, Ak.jsx)(pT.d, {
+             }), Hq.map(((qq, Eq) => (0, BE.jsx)(Cq.b, {
```

#### 80. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1109` → after: `L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1109) · [Before (L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1109)

```diff
-                 return null !== (cT = null === (lT = TT.lineValues) || void 0 === lT ? void 0 : lT[kT]) && void 0 !== cT ? cT : null
+                 return null !== (gq = null === (Yq = qq.lineValues) || void 0 === Yq ? void 0 : Yq[Eq]) && void 0 !== gq ? gq : null
```

#### 81. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1127)

```diff
-                 }, `StudioStatsChartLineDot-${kT}-${OT}`) : (0, Ak.jsx)("g", {}, `StudioStatsChartLineDot-${kT}-${OT}`)
+                 }, `StudioStatsChartLineDot-${Eq}-${mq}`) : (0, BE.jsx)("g", {}, `StudioStatsChartLineDot-${Eq}-${mq}`)
```

#### 82. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1134` → after: `L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1134) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1134)

```diff
-             }, `StudioStatsChartLine-${kT}`))), aT && (0, Ak.jsx)(pT.d, {
+             }, `StudioStatsChartLine-${Eq}`))), Qq && (0, BE.jsx)(Cq.b, {
```

#### 83. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1147` → after: `L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1147) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1147)

```diff
-             }), zT.map((TT => (0, Ak.jsx)(iT.b, {
+             }), bq.map((qq => (0, BE.jsx)(Iq.c, {
```

#### 84. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1157)

```diff
-             }, `${TT.dateMs}-${TT.label}`)))]
+             }, `${qq.dateMs}-${qq.label}`)))]
```

#### 85. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1187` → after: `L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1187) · [Before (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1187)

```diff
-       return TT.map((TT => null === MT ? TT.length * Ic * .65 : (MT.font = `${cT.fontStyle} ${cT.fontWeight} ${Ic}px ${cT.fontFamily}`, MT.measureText(TT).width + lT * TT.length)))
+       return qq.map((qq => null === lq ? qq.length * cg * .65 : (lq.font = `${gq.fontStyle} ${gq.fontWeight} ${cg}px ${gq.fontFamily}`, lq.measureText(qq).width + Yq * qq.length)))
```

#### 86. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1203` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1203) · [Before (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1203)

```diff
-             Dc([`${TT.slice(0,KT)}\u2026`], cT)[0] <= kT ? lT = KT : MT = KT
+             og([`${qq.slice(0,Oq)}\u2026`], gq)[0] <= Eq ? Yq = Oq : lq = Oq
```

#### 87. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1205)

```diff
-           return `${TT.slice(0,lT)}\u2026`
+           return `${qq.slice(0,Yq)}\u2026`
```

#### 88. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1226-L1227` → after: `L1226-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1226-L1227) · [Before (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1226-L1227)

```diff
-       const IT = null !== (kT = yT.texts[KT]) && void 0 !== kT ? kT : "",
-         AT = null !== (cT = fT[KT]) && void 0 !== cT ? cT : "",
+       const uq = null !== (Eq = xq.texts[Oq]) && void 0 !== Eq ? Eq : "",
+         Bq = null !== (gq = Aq[Oq]) && void 0 !== gq ? gq : "",
```

#### 89. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1233` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1233) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1233)

```diff
-         transform: `translate(${lT},${MT})`,
+         transform: `translate(${Yq},${lq})`,
```

#### 90. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1271` → after: `L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1271) · [Before (L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1271)

```diff
-           null !== TT && vT((kT => null !== kT && kT.width === TT.clientWidth && kT.height === TT.clientHeight ? kT : {
+           null !== qq && aq((Eq => null !== Eq && Eq.width === qq.clientWidth && Eq.height === qq.clientHeight ? Eq : {
```

#### 91. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1286` → after: `L1286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1286) · [Before (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1286)

```diff
-         QT = Math.max(null !== (kT = null === jT || void 0 === jT ? void 0 : jT.width) && void 0 !== kT ? kT : 0, NT),
+         Hq = Math.max(null !== (Eq = null === Nq || void 0 === Nq ? void 0 : Nq.width) && void 0 !== Eq ? Eq : 0, jq),
```

#### 92. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1289` → after: `L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1289) · [Before (L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1289)

```diff
-         aT = (null !== (cT = null === DT || void 0 === DT ? void 0 : DT.xAxisHeight) && void 0 !== cT ? cT : jc) - jc,
+         Qq = (null !== (gq = null === Pq || void 0 === Pq ? void 0 : Pq.xAxisHeight) && void 0 !== gq ? gq : Wg) - Wg,
```

#### 93. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1303` → after: `L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1303) · [Before (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1303)

```diff
-           height: `calc(var(--studio-chart-height, 14rem) + ${aT}px)`,
+           height: `calc(var(--studio-chart-height, 14rem) + ${Qq}px)`,
```

#### 94. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1306)

```diff
-         children: null !== DT && null !== jT && (0, Ak.jsxs)(sT.b, {
+         children: null !== Pq && null !== Nq && (0, BE.jsxs)(Dq.d, {
```

#### 95. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1312` → after: `L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1312) · [Before (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1312)

```diff
-           children: [(0, Ak.jsx)(UT.b, {
+           children: [(0, BE.jsx)(Fq.c, {
```

#### 96. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1317)

```diff
-           }), (0, Ak.jsx)(YT.c, {
+           }), (0, BE.jsx)(sq.b, {
```

#### 97. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1322` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1322) · [Before (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1322)

```diff
-             UA: TT => (0, Ak.jsx)(Fc, {
+             SB: qq => (0, BE.jsx)(Qg, {
```

#### 98. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1330` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1330) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1330)

```diff
-             UA: {
+             SB: {
```

#### 99. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1339` → after: `L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1339) · [Before (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1339)

```diff
-           }), (0, Ak.jsx)(WT.b, {
+           }), (0, BE.jsx)(wq.e, {
```

#### 100. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1345` → after: `L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1345) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1345)

```diff
-           }), (0, Ak.jsx)(Tk.d, {
+           }), (0, BE.jsx)(qE.b, {
```

#### 101. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1350)

```diff
-             children: MT.map(((TT, kT) => (0, Ak.jsx)(kk.d, {
+             children: lq.map(((qq, Eq) => (0, BE.jsx)(EE.c, {
```

#### 102. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1417` → after: `L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1417) · [Before (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1417)

```diff
-       } = (0, jT.B)(), [NT, QT] = (0, lT.useState)(""), ST = (0, lT.useMemo)((() => OT.map((TT => function(TT, kT) {
+       } = (0, Nq.v)(), [jq, Hq] = (0, Yq.useState)(""), oq = (0, Yq.useMemo)((() => mq.map((qq => function(qq, Eq) {
```

#### 103. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1427-L1428` → after: `L1427-L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1427-L1428) · [Before (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1427-L1428)

```diff
-           return null !== (cT = null !== lT && void 0 !== lT ? lT : TT[0]) && void 0 !== cT ? cT : null
-         }(TT, null !== (cT = AT[kT]) && void 0 !== cT ? cT : null)
+           return null !== (gq = null !== Yq && void 0 !== Yq ? Yq : qq[0]) && void 0 !== gq ? gq : null
+         }(qq, null !== (gq = Bq[Eq]) && void 0 !== gq ? gq : null)
```

#### 104. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1435` → after: `L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1435) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1435)

```diff
-             if (xc(cT)) return void console.warn(`StudioStatsBarChart got ${kT.length} filters for data nested less deeply`);
+             if (Ag(gq)) return void console.warn(`StudioStatsBarChart got ${Eq.length} filters for data nested less deeply`);
```

#### 105. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1440` → after: `L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1440) · [Before (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1440)

```diff
-             console.warn(`StudioStatsBarChart got ${kT.length} filters for data nested more deeply`)
+             console.warn(`StudioStatsBarChart got ${Eq.length} filters for data nested more deeply`)
```

#### 106. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1445)

```diff
-           TT.labels.length !== TT.values.length && console.warn(`StudioStatsBarChart got ${TT.labels.length} labels for ${TT.values.length} values, drawing the shorter`);
+           qq.labels.length !== qq.values.length && console.warn(`StudioStatsBarChart got ${qq.labels.length} labels for ${qq.values.length} values, drawing the shorter`);
```

#### 107. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1448` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1448) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1448)

```diff
-             label: "" === cT ? kT : cT,
+             label: "" === gq ? Eq : gq,
```

#### 108. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1455` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1455) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1455)

```diff
-           return "" === cT ? TT : TT.filter((TT => TT.label.toLowerCase().includes(cT)))
+           return "" === gq ? qq : qq.filter((qq => qq.label.toLowerCase().includes(gq)))
```

#### 109. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1463` → after: `L1463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1463) · [Before (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1463)

```diff
-           } = (0, jT.B)(), [MT, KT] = (0, lT.useState)({
+           } = (0, Nq.v)(), [lq, Oq] = (0, Yq.useState)({
```

#### 110. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1542` → after: `L1542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1542) · [Before (L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1542)

```diff
-             return null !== (kT = null === TT || void 0 === TT ? void 0 : TT.label) && void 0 !== kT ? kT : ""
+             return null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.label) && void 0 !== Eq ? Eq : ""
```

#### 111. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1576)

```diff
-       const cT = TT.filter((TT => Math.round(TT.position) === kT)).map((TT => Number.isInteger(TT.position) ? TT.key : `${TT.key} (${TT.position})`));
+       const gq = qq.filter((qq => Math.round(qq.position) === Eq)).map((qq => Number.isInteger(qq.position) ? qq.key : `${qq.key} (${qq.position})`));
```

#### 112. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1598` → after: `L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1598) · [Before (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1598)

```diff
-       } = (0, jT.B)();
+       } = (0, Nq.v)();
```

#### 113. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1621` → after: `L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1621) · [Before (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1621)

```diff
-           }, `StudioDropoffChartTooltipLine-${kT}`)
+           }, `StudioDropoffChartTooltipLine-${Eq}`)
```

#### 114. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1630-L1631` → after: `L1630-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1630-L1631) · [Before (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1630-L1631)

```diff
-             sessions: (0, fT.P)(xT.sessions),
-             totalSessions: (0, fT.P)(MT)
+             sessions: (0, Aq.S)(cq.sessions),
+             totalSessions: (0, Aq.S)(lq)
```

#### 115. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1656` → after: `L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1656) · [Before (L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1656)

```diff
-       } = (0, jT.B)(), [ST, DT] = (0, lT.useState)([]), aT = (0, lT.useMemo)((() => vT.map((TT => function(TT, kT) {
+       } = (0, Nq.v)(), [oq, Pq] = (0, Yq.useState)([]), Qq = (0, Yq.useMemo)((() => aq.map((qq => function(qq, Eq) {
```

#### 116. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1666-L1667` → after: `L1666-L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1666-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1666-L1667) · [Before (L1666-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1666-L1667)

```diff
-           return null !== (cT = null !== lT && void 0 !== lT ? lT : TT[0]) && void 0 !== cT ? cT : null
-         }(TT, null !== (cT = ST[kT]) && void 0 !== cT ? cT : null)
+           return null !== (gq = null !== Yq && void 0 !== Yq ? Yq : qq[0]) && void 0 !== gq ? gq : null
+         }(qq, null !== (gq = oq[Eq]) && void 0 !== gq ? gq : null)
```

#### 117. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1674` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1674) · [Before (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1674)

```diff
-           if (Array.isArray(cT)) return console.warn(`StudioDropoffChart got ${kT.length} filters for vertical labels nested less deeply`), [];
+           if (Array.isArray(gq)) return console.warn(`StudioDropoffChart got ${Eq.length} filters for vertical labels nested less deeply`), [];
```

#### 118. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1677` → after: `L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1677) · [Before (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1677)

```diff
-         return void 0 === cT ? [] : Array.isArray(cT) ? cT : (console.warn(`StudioDropoffChart got ${kT.length} filters for vertical labels nested more deeply`), [])
+         return void 0 === gq ? [] : Array.isArray(gq) ? gq : (console.warn(`StudioDropoffChart got ${Eq.length} filters for vertical labels nested more deeply`), [])
```

#### 119. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1692` → after: `L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1692) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1692)

```diff
-       let mT = null !== xT && void 0 !== xT ? xT : wT;
+       let hq = null !== cq && void 0 !== cq ? cq : vq;
```

#### 120. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1699-L1700` → after: `L1699-L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1699-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1699-L1700) · [Before (L1699-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1699-L1700)

```diff
-           return Math.max(TT, null !== (cT = null === (lT = kT.curve) || void 0 === lT ? void 0 : lT.maxBucketMinute) && void 0 !== cT ? cT : 0)
-         }), null !== (kT = null === fT || void 0 === fT ? void 0 : fT.maxBucketMinute) && void 0 !== kT ? kT : 0),
+           return Math.max(qq, null !== (gq = null === (Yq = Eq.curve) || void 0 === Yq ? void 0 : Yq.maxBucketMinute) && void 0 !== gq ? gq : 0)
+         }), null !== (Eq = null === Aq || void 0 === Aq ? void 0 : Aq.maxBucketMinute) && void 0 !== Eq ? Eq : 0),
```

#### 121. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1718-L1720` → after: `L1718-L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1718-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1718-L1720) · [Before (L1718-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1718-L1720)

```diff
-               percent: null !== (cT = null === fT || void 0 === fT ? void 0 : fT.percent) && void 0 !== cT ? cT : null,
-               sessions: null !== (lT = null === fT || void 0 === fT ? void 0 : fT.sessions) && void 0 !== lT ? lT : null,
-               comparisonValue: null !== (yT = null === xT || void 0 === xT ? void 0 : xT.p50) && void 0 !== yT ? yT : null,
+               percent: null !== (gq = null === Aq || void 0 === Aq ? void 0 : Aq.percent) && void 0 !== gq ? gq : null,
+               sessions: null !== (Yq = null === Aq || void 0 === Aq ? void 0 : Aq.sessions) && void 0 !== Yq ? Yq : null,
+               comparisonValue: null !== (xq = null === cq || void 0 === cq ? void 0 : cq.p50) && void 0 !== xq ? xq : null,
```

#### 122. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1724` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1724) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1724)

```diff
-                 return null !== (cT = null === (lT = TT.get(kT)) || void 0 === lT ? void 0 : lT.percent) && void 0 !== cT ? cT : null
+                 return null !== (gq = null === (Yq = qq.get(Eq)) || void 0 === Yq ? void 0 : Yq.percent) && void 0 !== gq ? gq : null
```

#### 123. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1728` → after: `L1728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1728) · [Before (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1728)

```diff
-         }(fT, null !== IT && void 0 !== IT ? IT : null, hT, zT),
+         }(Aq, null !== uq && void 0 !== uq ? uq : null, dq, bq),
```

#### 124. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1733` → after: `L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1733) · [Before (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1733)

```diff
-         seriesLabel: null !== fT ? CT : void 0,
+         seriesLabel: null !== Aq ? Wq : void 0,
```

#### 125. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1735` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1735) · [Before (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1735)

```diff
-         comparisonLabel: oT ? AT : void 0,
+         comparisonLabel: Zq ? Bq : void 0,
```

#### 126. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1748` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1748) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1748)

```diff
-             [QT("Minute"), ...null !== fT ? [null !== CT && void 0 !== CT ? CT : MT, QT("Sessions")] : [], ...GT.map((TT => TT.label)), ...oT ? qk(QT, AT, HT) : [], ...PT.length > 0 ? [QT("Labels")] : []], ...JT.map((TT => [TT.minute, ...null !== fT ? [TT.percent, TT.sessions] :  … [truncated]
+             [Hq("Minute"), ...null !== Aq ? [null !== Wq && void 0 !== Wq ? Wq : lq, Hq("Sessions")] : [], ...Tq.map((qq => qq.label)), ...Zq ? IE(Hq, Bq, fq) : [], ...rq.length > 0 ? [Hq("Labels")] : []], ...iq.map((qq => [qq.minute, ...null !== Aq ? [qq.percent, qq.sessions] :  … [truncated]
```

#### 127. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1750)

```diff
-               return null !== kT.curve ? [null !== (lT = TT.lineValues[cT]) && void 0 !== lT ? lT : null] : []
+               return null !== Eq.curve ? [null !== (Yq = qq.lineValues[gq]) && void 0 !== Yq ? Yq : null] : []
```

#### 128. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1764)

```diff
-         children: (0, Ak.jsx)(RT.b, {
+         children: (0, BE.jsx)(Rq.d, {
```

#### 129. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1767` → after: `L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1767) · [Before (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1767)

```diff
-           children: (0, Ak.jsxs)(gT.d, {
+           children: (0, BE.jsxs)(Uq.e, {
```

#### 130. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1772` → after: `L1772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1772) · [Before (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1772)

```diff
-               bottom: PT.length > 0 ? oc : 0,
+               bottom: rq.length > 0 ? ig : 0,
```

#### 131. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1775` → after: `L1775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1775) · [Before (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1775)

```diff
-             children: [(0, Ak.jsx)(UT.b, {
+             children: [(0, BE.jsx)(Fq.c, {
```

#### 132. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1780)

```diff
-             }), (0, Ak.jsx)(YT.c, {
+             }), (0, BE.jsx)(sq.b, {
```

#### 133. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1786)

```diff
-               UA: {
+               SB: {
```

#### 134. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1793` → after: `L1793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1793) · [Before (L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1793)

```diff
-               UA: {
+               SB: {
```

#### 135. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1799)

```diff
-             }), (0, Ak.jsx)(WT.b, {
+             }), (0, BE.jsx)(wq.e, {
```

#### 136. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1802-L1803` → after: `L1802-L1803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1802-L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1802-L1803) · [Before (L1802-L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1802-L1803)

```diff
-                 totalSessions: null !== (cT = null === fT || void 0 === fT ? void 0 : fT.totalSessions) && void 0 !== cT ? cT : 0,
-                 comparisonLabel: oT ? AT : void 0,
+                 totalSessions: null !== (gq = null === Aq || void 0 === Aq ? void 0 : Aq.totalSessions) && void 0 !== gq ? gq : 0,
+                 comparisonLabel: Zq ? Bq : void 0,
```

#### 137. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1810)

```diff
-             }), HT && (0, Ak.jsx)(nT.b, {
+             }), fq && (0, BE.jsx)(Kq.d, {
```

#### 138. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1820` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1820) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1820)

```diff
-             }), null !== fT && (0, Ak.jsx)(pT.d, {
+             }), null !== Aq && (0, BE.jsx)(Cq.b, {
```

#### 139. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1831` → after: `L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1831) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1831)

```diff
-             }), hT.map(((TT, kT) => (0, Ak.jsx)(pT.d, {
+             }), dq.map(((qq, Eq) => (0, BE.jsx)(Cq.b, {
```

#### 140. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1835` → after: `L1835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1835) · [Before (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1835)

```diff
-                 return null !== (cT = TT.lineValues[kT]) && void 0 !== cT ? cT : null
+                 return null !== (gq = qq.lineValues[Eq]) && void 0 !== gq ? gq : null
```

#### 141. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1847)

```diff
-             }, `StudioDropoffChartLine-${kT}`))), oT && (0, Ak.jsx)(pT.d, {
+             }, `StudioDropoffChartLine-${Eq}`))), Zq && (0, BE.jsx)(Cq.b, {
```

#### 142. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1860` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1860) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1860)

```diff
-             }), PT.map(((TT, kT) => (0, Ak.jsx)(iT.b, {
+             }), rq.map(((qq, Eq) => (0, BE.jsx)(Iq.c, {
```

#### 143. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1873)

```diff
-             }, `${kT}-${TT.key}`)))]
+             }, `${Eq}-${qq.key}`)))]
```

#### 144. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1929` → after: `L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1929) · [Before (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1929)

```diff
-         cT = Date.parse(`${TT.endDay}T00:00:00Z`),
+         gq = Date.parse(`${qq.endDay}T00:00:00Z`),
```

#### 145. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1984` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1984) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1984)

```diff
-           comparisonValue: null !== (kT = null === lT || void 0 === lT ? void 0 : lT.p50) && void 0 !== kT ? kT : null,
+           comparisonValue: null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq.p50) && void 0 !== Eq ? Eq : null,
```

#### 146. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1999` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L1999) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L1999)

```diff
-       return null !== (cT = TT.survivalPercents[kT]) && void 0 !== cT ? cT : uc
+       return null !== (gq = qq.survivalPercents[Eq]) && void 0 !== gq ? gq : pg
```

#### 147. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2006` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2006) · [Before (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2006)

```diff
-           OT = null !== (lT = null === (MT = TT.survivalPercents[cT + 1]) || void 0 === MT ? void 0 : MT.p50) && void 0 !== lT ? lT : 0;
+           mq = null !== (Yq = null === (lq = qq.survivalPercents[gq + 1]) || void 0 === lq ? void 0 : lq.p50) && void 0 !== Yq ? Yq : 0;
```

#### 148. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2028` → after: `L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2028) · [Before (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2028)

```diff
-     var sc = cT(6404);
+     var eg = gq(6291);
```

#### 149. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2193` → after: `L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2193) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2193)

```diff
-       return null !== (kT = kl.find((kT => kT.key === TT))) && void 0 !== kT ? kT : null
+       return null !== (Eq = qY.find((Eq => Eq.key === qq))) && void 0 !== Eq ? Eq : null
```

#### 150. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2198)

```diff
-       return null !== (kT = Ml.get(ll(TT))) && void 0 !== kT ? kT : null
+       return null !== (Eq = YY.get(gY(qq))) && void 0 !== Eq ? Eq : null
```

#### 151. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2239` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2239) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2239)

```diff
-       } = (0, jT.B)();
+       } = (0, Nq.v)();
```

#### 152. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2252` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2252) · [Before (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2252)

```diff
-         children: [(0, Ak.jsx)(DT.e, {
+         children: [(0, BE.jsx)(Pq.d, {
```

#### 153. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2273` → after: `L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2273) · [Before (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2273)

```diff
-       } = (0, jT.B)();
+       } = (0, Nq.v)();
```

#### 154. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2302)

```diff
-         children: [(0, Ak.jsx)(DT.e, {
+         children: [(0, BE.jsx)(Pq.d, {
```

#### 155. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2336` → after: `L2336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2336) · [Before (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2336)

```diff
-           }), void 0 === cT && (0, Ak.jsx)(DT.e, {
+           }), void 0 === gq && (0, BE.jsx)(Pq.d, {
```

#### 156. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2343` → after: `L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2343) · [Before (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2343)

```diff
-               children: [MT, (0, Ak.jsx)(LT.b, {
+               children: [lq, (0, BE.jsx)(kq.c, {
```

#### 157. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2367)

```diff
-       } = (0, jT.B)(), {
+       } = (0, Nq.v)(), {
```

#### 158. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2370` → after: `L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2370) · [Before (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2370)

```diff
-       } = (0, vT.b)(), [mT, bT] = (0, lT.useState)({
+       } = (0, aq.c)(), [hq, nq] = (0, Yq.useState)({
```

#### 159. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2415` → after: `L2415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2415) · [Before (L2415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2415)

```diff
-           } = (0, vT.b)(), [KT, OT] = (0, lT.useState)("loading"), [yT, fT] = (0, lT.useState)(null), xT = qc(TT);
+           } = (0, aq.c)(), [Oq, mq] = (0, Yq.useState)("loading"), [xq, Aq] = (0, Yq.useState)(null), cq = Ig(qq);
```

#### 160. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2451` → after: `L2451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2451) · [Before (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2451)

```diff
-         BT = null !== (kT = null === LT || void 0 === LT ? void 0 : LT.sessionDurationHistogram) && void 0 !== kT ? kT : null,
+         Xq = null !== (Eq = null === kq || void 0 === kq ? void 0 : kq.sessionDurationHistogram) && void 0 !== Eq ? Eq : null,
```

#### 161. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2467` → after: `L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2467) · [Before (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2467)

```diff
-         Mk = null !== (cT = null === LT || void 0 === LT ? void 0 : LT.rankingWindow.days) && void 0 !== cT ? cT : vl,
+         lE = null !== (gq = null === kq || void 0 === kq ? void 0 : kq.rankingWindow.days) && void 0 !== gq ? gq : NY,
```

#### 162. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2472` → after: `L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2472) · [Before (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2472)

```diff
-           days: null !== (MT = null === BT || void 0 === BT ? void 0 : BT.days) && void 0 !== MT ? MT : Mk
+           days: null !== (lq = null === Xq || void 0 === Xq ? void 0 : Xq.days) && void 0 !== lq ? lq : lE
```

#### 163. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2474-L2476` → after: `L2474-L2476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2474-L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2474-L2476) · [Before (L2474-L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2474-L2476)

```diff
-         yk = null !== (KT = null === LT || void 0 === LT ? void 0 : LT.sessionsPerPlayerWindowDays) && void 0 !== KT ? KT : vl,
-         fk = null !== (OT = null === nT || void 0 === nT ? void 0 : nT.percentStayedSessions) && void 0 !== OT ? OT : null,
-         xk = null !== (yT = null === nT || void 0 === nT ? void 0 : nT.percentLongSessions) && void 0 !== yT ? yT : null,
+         xE = null !== (Oq = null === kq || void 0 === kq ? void 0 : kq.sessionsPerPlayerWindowDays) && void 0 !== Oq ? Oq : NY,
+         AE = null !== (mq = null === Kq || void 0 === Kq ? void 0 : Kq.percentStayedSessions) && void 0 !== mq ? mq : null,
+         cE = null !== (xq = null === Kq || void 0 === Kq ? void 0 : Kq.percentLongSessions) && void 0 !== xq ? xq : null,
```

#### 164. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2480` → after: `L2480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2480) · [Before (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2480)

```diff
-             sessions: (0, fT.P)(WT.totalSessions)
+             sessions: (0, Aq.S)(wq.totalSessions)
```

#### 165. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2486` → after: `L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2486) · [Before (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2486)

```diff
-             value: Bk(null !== (kT = null === iT || void 0 === iT ? void 0 : iT[TT]) && void 0 !== kT ? kT : null, null !== (cT = null === qT || void 0 === qT ? void 0 : qT[TT]) && void 0 !== cT ? cT : null),
+             value: sE(null !== (Eq = null === Iq || void 0 === Iq ? void 0 : Iq[qq]) && void 0 !== Eq ? Eq : null, null !== (gq = null === eq || void 0 === eq ? void 0 : eq[qq]) && void 0 !== gq ? gq : null),
```

#### 166. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2507` → after: `L2507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2507) · [Before (L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2507)

```diff
-           return hk(null !== (cT = null === iT || void 0 === iT ? void 0 : iT[TT]) && void 0 !== cT ? cT : null, null !== (lT = null === gT || void 0 === gT ? void 0 : gT.ranking[TT]) && void 0 !== lT ? lT : null, kT)
+           return dE(null !== (gq = null === Iq || void 0 === Iq ? void 0 : Iq[qq]) && void 0 !== gq ? gq : null, null !== (Yq = null === Uq || void 0 === Uq ? void 0 : Uq.ranking[qq]) && void 0 !== Yq ? Yq : null, Eq)
```

#### 167. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2530` → after: `L2530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2530) · [Before (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2530)

```diff
-                 headerActions: JT.map((TT => (0, Ak.jsx)(ST.P, {
+                 headerActions: iq.map((qq => (0, BE.jsx)(oq.Q, {
```

#### 168. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2557` → after: `L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2557) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2557)

```diff
-                     return "bloxd" === TT ? kT("studio:rankCategoryAllGames") : "playerSchematic" === TT ? kT("studio:rankCategoryCustomGames") : (0, tT.W)(TT)
+                     return "bloxd" === qq ? Eq("studio:rankCategoryAllGames") : "playerSchematic" === qq ? Eq("studio:rankCategoryCustomGames") : (0, Vq.eb)(qq)
```

#### 169. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2563` → after: `L2563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2563) · [Before (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2563)

```diff
-                   className: void 0 !== MT ? `StudioMetricCardTopRank StudioMetricCardTopRank${cT}` : void 0,
+                   className: void 0 !== lq ? `StudioMetricCardTopRank StudioMetricCardTopRank${gq}` : void 0,
```

#### 170. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2565` → after: `L2565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2565) · [Before (L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2565)

```diff
-                   value: null !== cT ? `#${(0,fT.P)(cT)}` : rT("studio:unranked"),
+                   value: null !== gq ? `#${(0,Aq.S)(gq)}` : tq("studio:unranked"),
```

#### 171. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2583` → after: `L2583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2583) · [Before (L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2583)

```diff
-                 value: iT && null !== iT.avgDailyPlays ? (0, fT.P)(Math.round(iT.avgDailyPlays)) : "-",
+                 value: Iq && null !== Iq.avgDailyPlays ? (0, Aq.S)(Math.round(Iq.avgDailyPlays)) : "-",
```

#### 172. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2588` → after: `L2588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2588) · [Before (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2588)

```diff
-                 comparison: Nk("avgDailyPlays", (TT => (0, fT.P)(Math.round(TT)))),
+                 comparison: jE("avgDailyPlays", (qq => (0, Aq.S)(Math.round(qq)))),
```

#### 173. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2603` → after: `L2603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2603) · [Before (L2603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2603)

```diff
-                 value: iT && null !== iT.sessionsPerPlayer ? (0, GT.f)(iT.sessionsPerPlayer) : "-",
+                 value: Iq && null !== Iq.sessionsPerPlayer ? (0, Tq.i)(Iq.sessionsPerPlayer) : "-",
```

#### 174. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2608` → after: `L2608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2608) · [Before (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2608)

```diff
-                 comparison: Nk("sessionsPerPlayer", GT.f),
+                 comparison: jE("sessionsPerPlayer", Tq.i),
```

#### 175. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2617` → after: `L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2617) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2617)

```diff
-               children: Il.map((TT => (0, Ak.jsx)(ST.P, {
+               children: cY.map((qq => (0, BE.jsx)(oq.Q, {
```

#### 176. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2628` → after: `L2628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2628) · [Before (L2628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2628)

```diff
-               children: [(0, Ak.jsx)(DT.e, {
+               children: [(0, BE.jsx)(Pq.d, {
```

#### 177. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2632` → after: `L2632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2632) · [Before (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2632)

```diff
-               }), (0, Ak.jsx)(ST.e, {
+               }), (0, BE.jsx)(oq.g, {
```

#### 178. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2648` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2648) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2648)

```diff
-                 formatValue: fT.P,
+                 formatValue: Aq.S,
```

#### 179. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2674` → after: `L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2674) · [Before (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2674)

```diff
-                 formatValue: GT.f,
+                 formatValue: Tq.i,
```

#### 180. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2703` → after: `L2703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2703) · [Before (L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2703)

```diff
-                 comparison: hk(fk, null !== (xT = null === pT || void 0 === pT ? void 0 : pT.percentStayedSessions) && void 0 !== xT ? xT : null, Lk),
+                 comparison: dE(AE, null !== (cq = null === Cq || void 0 === Cq ? void 0 : Cq.percentStayedSessions) && void 0 !== cq ? cq : null, JE),
```

#### 181. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2708` → after: `L2708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2708) · [Before (L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2708)

```diff
-                 value: null === nT ? "-" : gk(nT.medianMinute, null !== (IT = null === WT || void 0 === WT ? void 0 : WT.maxBucketMinute) && void 0 !== IT ? IT : 0),
+                 value: null === Kq ? "-" : RE(Kq.medianMinute, null !== (uq = null === wq || void 0 === wq ? void 0 : wq.maxBucketMinute) && void 0 !== uq ? uq : 0),
```

#### 182. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2712` → after: `L2712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2712) · [Before (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2712)

```diff
-                 comparison: hk(null !== (AT = null === nT || void 0 === nT ? void 0 : nT.medianMinute) && void 0 !== AT ? AT : null, Zc(null !== (CT = null === pT || void 0 === pT ? void 0 : pT.medianMinute) && void 0 !== CT ? CT : null), (TT => {
+                 comparison: dE(null !== (Bq = null === Kq || void 0 === Kq ? void 0 : Kq.medianMinute) && void 0 !== Bq ? Bq : null, Sg(null !== (Wq = null === Cq || void 0 === Cq ? void 0 : Cq.medianMinute) && void 0 !== Wq ? Wq : null), (qq => {
```

#### 183. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2714` → after: `L2714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2714) · [Before (L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2714)

```diff
-                   return gk(TT, null !== (kT = null === gT || void 0 === gT || null === (cT = gT.dropoffCurve) || void 0 === cT ? void 0 : cT.maxBucketMinute) && void 0 !== kT ? kT : 0)
+                   return RE(qq, null !== (Eq = null === Uq || void 0 === Uq || null === (gq = Uq.dropoffCurve) || void 0 === gq ? void 0 : gq.maxBucketMinute) && void 0 !== Eq ? Eq : 0)
```

#### 184. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2727` → after: `L2727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2727) · [Before (L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2727)

```diff
-                 comparison: hk(xk, null !== (hT = null === pT || void 0 === pT ? void 0 : pT.percentLongSessions) && void 0 !== hT ? hT : null, Lk),
+                 comparison: dE(cE, null !== (dq = null === Cq || void 0 === Cq ? void 0 : Cq.percentLongSessions) && void 0 !== dq ? dq : null, JE),
```

#### 185. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2742` → after: `L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2742) · [Before (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2742)

```diff
-                 comparisonCurve: null !== (NT = null === gT || void 0 === gT ? void 0 : gT.dropoffCurve) && void 0 !== NT ? NT : null,
+                 comparisonCurve: null !== (jq = null === Uq || void 0 === Uq ? void 0 : Uq.dropoffCurve) && void 0 !== jq ? jq : null,
```

#### 186. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2861` → after: `L2861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2861) · [Before (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2861)

```diff
-       return "reached" === TT || "reached" === kT ? "reached" : null !== TT && void 0 !== TT ? TT : kT
+       return "reached" === qq || "reached" === Eq ? "reached" : null !== qq && void 0 !== qq ? qq : Eq
```

#### 187. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2870` → after: `L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2870) · [Before (L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2870)

```diff
-       } = (0, jT.B)(), {
+       } = (0, Nq.v)(), {
```

#### 188. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2873-L2874` → after: `L2873-L2874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2873-L2874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2873-L2874) · [Before (L2873-L2874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2873-L2874)

```diff
-       } = (0, vT.b)(), KT = function(TT) {
-         return null !== (0, yT.k)(TT)
+       } = (0, aq.c)(), Oq = function(qq) {
+         return null !== (0, xq.e)(qq)
```

#### 189. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2886` → after: `L2886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2886) · [Before (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2886)

```diff
-             kT.set(MT, (null !== (lT = kT.get(MT)) && void 0 !== lT ? lT : 0) + 1), cT = Jl(cT, zl(KT, Pl.maxEventValuesPerType))
+             Eq.set(lq, (null !== (Yq = Eq.get(lq)) && void 0 !== Yq ? Yq : 0) + 1), gq = bY(gq, nY(Oq, tY.maxEventValuesPerType))
```

#### 190. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2916` → after: `L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2916) · [Before (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2916)

```diff
-             children: [(0, Ak.jsx)(DT.e, {
+             children: [(0, BE.jsx)(Pq.d, {
```

#### 191. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2918` → after: `L2918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2918) · [Before (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2918)

```diff
-             }), cT(`studioAnalyticsLimits:${kT}${MT?"Reached":"Near"}`)]
+             }), gq(`studioAnalyticsLimits:${Eq}${lq?"Reached":"Near"}`)]
```

#### 192. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2939` → after: `L2939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2939) · [Before (L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2939)

```diff
-         cT.set(TT.toKey, (null !== (kT = cT.get(TT.toKey)) && void 0 !== kT ? kT : 0) + 1), null === (MT = lT.get(TT.fromKey)) || void 0 === MT || MT.push(TT.toKey)
+         gq.set(qq.toKey, (null !== (Eq = gq.get(qq.toKey)) && void 0 !== Eq ? Eq : 0) + 1), null === (lq = Yq.get(qq.fromKey)) || void 0 === lq || lq.push(qq.toKey)
```

#### 193. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2951` → after: `L2951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2951) · [Before (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2951)

```diff
-       return KT.length === cT.size ? KT : null
+       return Oq.length === gq.size ? Oq : null
```

#### 194. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2963-L2967` → after: `L2963-L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2963-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2963-L2967) · [Before (L2963-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2963-L2967)

```diff
-     var Xl = cT(1363),
-       dl = cT(4355),
-       Ll = cT(1452),
-       Rl = cT(6434),
-       gl = cT(6440);
+     var GY = gq(1336),
+       LY = gq(4195),
+       JY = gq(1405),
+       kY = gq(6302),
+       RY = gq(6310);
```

#### 195. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2986` → after: `L2986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2986) · [Before (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2986)

```diff
-       return "" === TT.event_value ? TT.event_type : `${TT.event_type}: ${TT.event_value}`
+       return "" === qq.event_value ? qq.event_type : `${qq.event_type}: ${qq.event_value}`
```

#### 196. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2991` → after: `L2991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L2991) · [Before (L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L2991)

```diff
-       return null !== (kT = TT.alias) && void 0 !== kT ? kT : Wl(TT)
+       return null !== (Eq = qq.alias) && void 0 !== Eq ? Eq : XY(qq)
```

#### 197. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3042` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3042) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3042)

```diff
-             const TT = "" === MT ? KT : `${MT} ${KT}`;
+             const qq = "" === lq ? Oq : `${lq} ${Oq}`;
```

#### 198. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3048` → after: `L3048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3048) · [Before (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3048)

```diff
-             let OT = (0, gl.e)(KT);
+             let mq = (0, RY.b)(Oq);
```

#### 199. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3075` → after: `L3075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3075) · [Before (L3075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3075)

```diff
-       return ` C ${MT} ${kT} ${MT} ${lT} ${cT} ${lT}`
+       return ` C ${lq} ${Eq} ${lq} ${Yq} ${gq} ${Yq}`
```

#### 200. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3083` → after: `L3083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3083) · [Before (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3083)

```diff
-       return `${kT},${cT} ${lT},${cT-MT} ${lT},${cT+MT}`
+       return `${Eq},${gq} ${Yq},${gq-lq} ${Yq},${gq+lq}`
```

#### 201. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3091` → after: `L3091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3091) · [Before (L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3091)

```diff
-           return (cT, lT, MT) => null === TT ? cT.length * lT * .65 : (TT.font = `${MT} ${lT}px ${kT}`, TT.measureText(cT).width)
+           return (gq, Yq, lq) => null === qq ? gq.length * Yq * .65 : (qq.font = `${lq} ${Yq}px ${Eq}`, qq.measureText(gq).width)
```

#### 202. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3096` → after: `L3096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3096) · [Before (L3096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3096)

```diff
-         MT.has(kT) && console.warn(`StudioEventGraph got two nodes for ${kT}; drawing the last`), MT.set(kT, TT)
+         lq.has(Eq) && console.warn(`StudioEventGraph got two nodes for ${Eq}; drawing the last`), lq.set(Eq, qq)
```

#### 203. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3102` → after: `L3102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3102) · [Before (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3102)

```diff
-         MT.has(kT) && MT.has(cT) ? kT === cT ? console.warn(`StudioEventGraph got an edge from ${kT} to itself, which it cannot draw`) : KT.push({
+         lq.has(Eq) && lq.has(gq) ? Eq === gq ? console.warn(`StudioEventGraph got an edge from ${Eq} to itself, which it cannot draw`) : Oq.push({
```

#### 204. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3106` → after: `L3106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3106) · [Before (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3106)

```diff
-         }) : console.warn(`StudioEventGraph got an edge from ${kT} to ${cT} with no node at one end`)
+         }) : console.warn(`StudioEventGraph got an edge from ${Eq} to ${gq} with no node at one end`)
```

#### 205. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3113` → after: `L3113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3113) · [Before (L3113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3113)

```diff
-           return Math.max(TT, null !== (cT = lT.value) && void 0 !== cT ? cT : 0)
+           return Math.max(qq, null !== (gq = Yq.value) && void 0 !== gq ? gq : 0)
```

#### 206. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3119` → after: `L3119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3119) · [Before (L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3119)

```diff
-           return cT = kT.value, lT = OT, null === cT || lT <= 0 ? fM : Math.max(fM, xM * Math.max(0, cT) / lT);
+           return gq = Eq.value, Yq = mq, null === gq || Yq <= 0 ? xl : Math.max(xl, Al * Math.max(0, gq) / Yq);
```

#### 207. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3216` → after: `L3216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3216) · [Before (L3216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3216)

```diff
-         TT.centreX = null !== (kT = lT.x) && void 0 !== kT ? kT : 0, TT.centreY = null !== (cT = lT.y) && void 0 !== cT ? cT : 0, hT.set(TT.key, TT)
+         qq.centreX = null !== (Eq = Yq.x) && void 0 !== Eq ? Eq : 0, qq.centreY = null !== (gq = Yq.y) && void 0 !== gq ? gq : 0, dq.set(qq.key, qq)
```

#### 208. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3232` → after: `L3232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3232) · [Before (L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3232)

```diff
-           return (null !== (kT = TT.points) && void 0 !== kT ? kT : []).slice(1, -1)
+           return (null !== (Eq = qq.points) && void 0 !== Eq ? Eq : []).slice(1, -1)
```

#### 209. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3239` → after: `L3239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3239) · [Before (L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3239)

```diff
-           DT.set(lT, Math.max(null !== (cT = DT.get(lT)) && void 0 !== cT ? cT : 0, kT))
+           Pq.set(Yq, Math.max(null !== (gq = Pq.get(Yq)) && void 0 !== gq ? gq : 0, Eq))
```

#### 210. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3243` → after: `L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3243) · [Before (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3243)

```diff
-           return null !== (kT = DT.get(aT(TT))) && void 0 !== kT ? kT : 0
+           return null !== (Eq = Pq.get(Qq(qq))) && void 0 !== Eq ? Eq : 0
```

#### 211. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3249` → after: `L3249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3249) · [Before (L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3249)

```diff
-         FT(null !== (cT = TT.x) && void 0 !== cT ? cT : 0, (null !== (lT = TT.width) && void 0 !== lT ? lT : 0) / 2), ST[kT].forEach((TT => {
+         yq(null !== (gq = qq.x) && void 0 !== gq ? gq : 0, (null !== (Yq = qq.width) && void 0 !== Yq ? Yq : 0) / 2), oq[Eq].forEach((qq => {
```

#### 212. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3265` → after: `L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3265) · [Before (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3265)

```diff
-           return null !== (kT = null === (cT = ST[TT][0]) || void 0 === cT ? void 0 : cT.y) && void 0 !== kT ? kT : NT(KT[TT].toKey).centreY
+           return null !== (Eq = null === (gq = oq[qq][0]) || void 0 === gq ? void 0 : gq.y) && void 0 !== Eq ? Eq : jq(Oq[qq].toKey).centreY
```

#### 213. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3269` → after: `L3269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3269) · [Before (L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3269)

```diff
-           return null !== (kT = null === (cT = lT[lT.length - 1]) || void 0 === cT ? void 0 : cT.y) && void 0 !== kT ? kT : NT(KT[TT].fromKey).centreY
+           return null !== (Eq = null === (gq = Yq[Yq.length - 1]) || void 0 === gq ? void 0 : gq.y) && void 0 !== Eq ? Eq : jq(Oq[qq].fromKey).centreY
```

#### 214. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3310-L3313` → after: `L3310-L3313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3310-L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3310-L3313) · [Before (L3310-L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3310-L3313)

```diff
-             labelCentreX: null !== (cT = CT.x) && void 0 !== cT ? cT : 0,
-             labelCentreY: null !== (lT = CT.y) && void 0 !== lT ? lT : 0,
-             labelWidth: null !== (MT = CT.width) && void 0 !== MT ? MT : 0,
-             labelHeight: null !== (KT = CT.height) && void 0 !== KT ? KT : 0
+             labelCentreX: null !== (gq = Wq.x) && void 0 !== gq ? gq : 0,
+             labelCentreY: null !== (Yq = Wq.y) && void 0 !== Yq ? Yq : 0,
+             labelWidth: null !== (lq = Wq.width) && void 0 !== lq ? lq : 0,
+             labelHeight: null !== (Oq = Wq.height) && void 0 !== Oq ? Oq : 0
```

#### 215. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3321-L3322` → after: `L3321-L3322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3321-L3322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3321-L3322) · [Before (L3321-L3322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3321-L3322)

```diff
-         width: null !== (kT = zT.width) && void 0 !== kT ? kT : 0,
-         height: null !== (cT = zT.height) && void 0 !== cT ? cT : 0
+         width: null !== (Eq = bq.width) && void 0 !== Eq ? Eq : 0,
+         height: null !== (gq = bq.height) && void 0 !== gq ? gq : 0
```

#### 216. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3351` → after: `L3351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3351) · [Before (L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3351)

```diff
-         transform: `translate(${cT.x} ${cT.y}) scale(${cT.scale})`,
+         transform: `translate(${gq.x} ${gq.y}) scale(${gq.scale})`,
```

#### 217. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3358` → after: `L3358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3358) · [Before (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3358)

```diff
-                 kT += void 0 === MT ? `M ${cT.x1} ${cT.y}` : DM(MT.x2, MT.y, cT.x1, cT.y), kT += ` H ${cT.x2}`
+                 Eq += void 0 === lq ? `M ${gq.x1} ${gq.y}` : ol(lq.x2, lq.y, gq.x1, gq.y), Eq += ` H ${gq.x2}`
```

#### 218. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3389` → after: `L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3389) · [Before (L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3389)

```diff
-           }, `StudioEventGraphEdge-${TT.fromKey}-${TT.toKey}`)
+           }, `StudioEventGraphEdge-${qq.fromKey}-${qq.toKey}`)
```

#### 219. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3420` → after: `L3420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3420) · [Before (L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3420)

```diff
-         }, `StudioEventGraphEdgeLabel-${TT.fromKey}-${TT.toKey}`))), null !== KT && (0, Ak.jsx)("path", {
+         }, `StudioEventGraphEdgeLabel-${qq.fromKey}-${qq.toKey}`))), null !== Oq && (0, BE.jsx)("path", {
```

#### 220. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3470-L3471` → after: `L3470-L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3470-L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3470-L3471) · [Before (L3470-L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3470-L3471)

```diff
-       } = (0, jT.B)();
-       return (0, Ll.f)() ? (0, Ak.jsx)(Ck, {
+       } = (0, Nq.v)();
+       return (0, JY.d)() ? (0, BE.jsx)(WE, {
```

#### 221. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3485` → after: `L3485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3485) · [Before (L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3485)

```diff
-           const MT = null !== (lT = TT.nodesByKey.get(kT.key)) && void 0 !== lT ? lT : kT;
+           const lq = null !== (Yq = qq.nodesByKey.get(Eq.key)) && void 0 !== Yq ? Yq : Eq;
```

#### 222. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3498` → after: `L3498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3498) · [Before (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3498)

```diff
-           const yT = null !== (OT = KT.get(MT(lT))) && void 0 !== OT ? OT : function(TT, kT, cT) {
+           const xq = null !== (mq = Oq.get(lq(Yq))) && void 0 !== mq ? mq : function(qq, Eq, gq) {
```

#### 223. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3502-L3503` → after: `L3502-L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3502-L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3502-L3503) · [Before (L3502-L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3502-L3503)

```diff
-                 yT = null !== (lT = cT.nodesByKey.get(TT.fromKey)) && void 0 !== lT ? lT : KT,
-                 fT = null !== (MT = cT.nodesByKey.get(TT.toKey)) && void 0 !== MT ? MT : OT,
+                 xq = null !== (Yq = gq.nodesByKey.get(qq.fromKey)) && void 0 !== Yq ? Yq : Oq,
+                 Aq = null !== (lq = gq.nodesByKey.get(qq.toKey)) && void 0 !== lq ? lq : mq,
```

#### 224. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3637` → after: `L3637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3637) · [Before (L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3637)

```diff
-         CT = null !== cT && void 0 !== cT ? cT : AT,
+         Wq = null !== gq && void 0 !== gq ? gq : Bq,
```

#### 225. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3639` → after: `L3639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3639) · [Before (L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3639)

```diff
-         vT = (tT = yT) < .5 ? 4 * tT * tT * tT : 1 - (-2 * tT + 2) ** 3 / 2;
+         aq = (Vq = xq) < .5 ? 4 * Vq * Vq * Vq : 1 - (-2 * Vq + 2) ** 3 / 2;
```

#### 226. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3641` → after: `L3641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3641) · [Before (L3641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3641)

```diff
-       const hT = (0, lT.useMemo)((() => null === TT || null === KT ? TT : bM(KT.from, TT, vT)), [TT, KT, vT]),
+       const dq = (0, Yq.useMemo)((() => null === qq || null === Oq ? qq : hl(Oq.from, qq, aq)), [qq, Oq, aq]),
```

#### 227. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3725` → after: `L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3725) · [Before (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3725)

```diff
-           return null !== (lT = TT.nodes.find((TT => Math.abs(kT - TT.centreX) <= TT.width / 2 && Math.abs(cT - TT.centreY) <= TT.height / 2))) && void 0 !== lT ? lT : null
+           return null !== (Yq = qq.nodes.find((qq => Math.abs(Eq - qq.centreX) <= qq.width / 2 && Math.abs(gq - qq.centreY) <= qq.height / 2))) && void 0 !== Yq ? Yq : null
```

#### 228. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3727` → after: `L3727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3727) · [Before (L3727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3727)

```diff
-         GT = null !== eT && eT.key !== (null === DT || void 0 === DT ? void 0 : DT.fromKey) ? eT : null,
+         Tq = null !== Mq && Mq.key !== (null === Pq || void 0 === Pq ? void 0 : Pq.fromKey) ? Mq : null,
```

#### 229. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3739` → after: `L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3739) · [Before (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3739)

```diff
-         ET = `M ${TT} ${kT}${DM(TT,kT,VT&&null!==GT?GT.centreX-GT.width/2:DT.toX,VT&&null!==GT?GT.centreY:DT.toY)}`
+         Sq = `M ${qq} ${Eq}${ol(qq,Eq,zq&&null!==Tq?Tq.centreX-Tq.width/2:Pq.toX,zq&&null!==Tq?Tq.centreY:Pq.toY)}`
```

#### 230. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3750` → after: `L3750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3750) · [Before (L3750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3750)

```diff
-             return null !== (cT = null === MT || void 0 === MT ? void 0 : MT.toKey) && void 0 !== cT ? cT : null
+             return null !== (gq = null === lq || void 0 === lq ? void 0 : lq.toKey) && void 0 !== gq ? gq : null
```

#### 231. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3761` → after: `L3761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3761) · [Before (L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3761)

```diff
-         edgeDraftFromKey: null !== (kT = null === DT || void 0 === DT ? void 0 : DT.fromKey) && void 0 !== kT ? kT : null,
+         edgeDraftFromKey: null !== (Eq = null === Pq || void 0 === Pq ? void 0 : Pq.fromKey) && void 0 !== Eq ? Eq : null,
```

#### 232. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3783` → after: `L3783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3783) · [Before (L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3783)

```diff
-             const xT = null !== (kT = null === (lT = OT.closest("[data-node-key]")) || void 0 === lT ? void 0 : lT.getAttribute("data-node-key")) && void 0 !== kT ? kT : null;
+             const cq = null !== (Eq = null === (Yq = mq.closest("[data-node-key]")) || void 0 === Yq ? void 0 : Yq.getAttribute("data-node-key")) && void 0 !== Eq ? Eq : null;
```

#### 233. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3797` → after: `L3797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3797) · [Before (L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3797)

```diff
-             const IT = null !== (MT = null === (KT = OT.closest("[data-edge-index]")) || void 0 === KT ? void 0 : KT.getAttribute("data-edge-index")) && void 0 !== MT ? MT : null,
+             const uq = null !== (lq = null === (Oq = mq.closest("[data-edge-index]")) || void 0 === Oq ? void 0 : Oq.getAttribute("data-edge-index")) && void 0 !== lq ? lq : null,
```

#### 234. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3873` → after: `L3873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3873) · [Before (L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3873)

```diff
-       } = (0, jT.B)(), aT = (0, lT.useMemo)((() => null === KT || 0 === KT.nodes.length ? null : FM(KT)), [KT]), [FT, rT] = (0, lT.useState)(null), [PT, wT] = (0, lT.useState)(null), [mT, bT] = (0, lT.useState)({
+       } = (0, Nq.v)(), Qq = (0, Yq.useMemo)((() => null === Oq || 0 === Oq.nodes.length ? null : Ql(Oq)), [Oq]), [yq, tq] = (0, Yq.useState)(null), [rq, vq] = (0, Yq.useState)(null), [hq, nq] = (0, Yq.useState)({
```

#### 235. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3876` → after: `L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3876) · [Before (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3876)

```diff
-       }), [zT, JT] = (0, lT.useState)(!1), [oT, HT] = (0, lT.useState)(null), eT = (0, lT.useRef)(null), GT = (0, Ll.p)(), VT = GM(aT, mT), {
+       }), [bq, iq] = (0, Yq.useState)(!1), [Zq, fq] = (0, Yq.useState)(null), Mq = (0, Yq.useRef)(null), Tq = (0, JY.u)(), zq = Ml(Qq, hq), {
```

#### 236. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3978` → after: `L3978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3978) · [Before (L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3978)

```diff
-       const nT = zT ? tT : void 0;
+       const Kq = bq ? Vq : void 0;
```

#### 237. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L3983` → after: `L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR3983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L3983) · [Before (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L3983)

```diff
-           children: [(0, Ak.jsx)(DT.e, {
+           children: [(0, BE.jsx)(Pq.d, {
```

#### 238. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4004` → after: `L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4004) · [Before (L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4004)

```diff
-             children: zT ? vT : CT
+             children: bq ? aq : Wq
```

#### 239. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4138` → after: `L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4138) · [Before (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4138)

```diff
-       const kT = ("" === TT.event_value ? TT.event_type : `${TT.event_type}_${TT.event_value}`).toLowerCase().replace(/[\s-]+/g, "_"),
+       const Eq = ("" === qq.event_value ? qq.event_type : `${qq.event_type}_${qq.event_value}`).toLowerCase().replace(/[\s-]+/g, "_"),
```

#### 240. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4161` → after: `L4161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4161) · [Before (L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4161)

```diff
-       return Math.max(0, null !== (lT = null === (MT = TT[kT]) || void 0 === MT ? void 0 : MT[cT]) && void 0 !== lT ? lT : 0)
+       return Math.max(0, null !== (Yq = null === (lq = qq[Eq]) || void 0 === lq ? void 0 : lq[gq]) && void 0 !== Yq ? Yq : 0)
```

#### 241. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4231` → after: `L4231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4231) · [Before (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4231)

```diff
-           for (const OT of null !== (MT = Zl(TT, kT)) && void 0 !== MT ? MT : []) {
+           for (const mq of null !== (lq = SY(qq, Eq)) && void 0 !== lq ? lq : []) {
```

#### 242. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4233` → after: `L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4233) · [Before (L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4233)

```diff
-             const TT = (null !== (KT = cT.get(OT)) && void 0 !== KT ? KT : []).map((TT => lT.get(TT))).sort();
+             const qq = (null !== (Oq = gq.get(mq)) && void 0 !== Oq ? Oq : []).map((qq => Yq.get(qq))).sort();
```

#### 243. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4250` → after: `L4250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4250) · [Before (L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4250)

```diff
-         resultKeys: KT.map((TT => `${yT}|${OT.get(TT)}`))
+         resultKeys: Oq.map((qq => `${xq}|${mq.get(qq)}`))
```

#### 244. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4273` → after: `L4273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4273) · [Before (L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4273)

```diff
-       return Array.from(kT.keys()).every((TT => cT.has(TT))) ? kT : new Map(Array.from(kT).filter((TT => {
+       return Array.from(Eq.keys()).every((qq => gq.has(qq))) ? Eq : new Map(Array.from(Eq).filter((qq => {
```

#### 245. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4299` → after: `L4299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4299) · [Before (L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4299)

```diff
-         return kT.size > 1 ? `${TT.game_category_id} / ${cT}` : cT
+         return Eq.size > 1 ? `${qq.game_category_id} / ${gq}` : gq
```

#### 246. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4313` → after: `L4313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4313) · [Before (L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4313)

```diff
-           edgeCounts: null !== (kT = null === (lT = cT(TT.to)) || void 0 === lT ? void 0 : lT.incomingEdges.get(El(TT.from))) && void 0 !== kT ? kT : null
+           edgeCounts: null !== (Eq = null === (Yq = gq(qq.to)) || void 0 === Yq ? void 0 : Yq.incomingEdges.get(zY(qq.from))) && void 0 !== Eq ? Eq : null
```

#### 247. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4380` → after: `L4380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4380) · [Before (L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4380)

```diff
-       } = "object" === typeof lT && null !== lT ? lT : {};
+       } = "object" === typeof Yq && null !== Yq ? Yq : {};
```

#### 248. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4403` → after: `L4403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4403) · [Before (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4403)

```diff
-         } = "object" === typeof IT && null !== IT ? IT : {}, MT = OK(TT), KT = OK(lT);
+         } = "object" === typeof uq && null !== uq ? uq : {}, lq = OO(qq), Oq = OO(Yq);
```

#### 249. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4437` → after: `L4437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4437) · [Before (L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4437)

```diff
-       const cT = (TT, kT) => null !== kT && Object.hasOwn(TT, kT) ? kT : Object.keys(TT).sort()[0];
+       const gq = (qq, Eq) => null !== Eq && Object.hasOwn(qq, Eq) ? Eq : Object.keys(qq).sort()[0];
```

#### 250. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4454` → after: `L4454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4454) · [Before (L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4454)

```diff
-         label: "" === TT ? kT : TT
+         label: "" === qq ? Eq : qq
```

#### 251. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4461` → after: `L4461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4461) · [Before (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4461)

```diff
-       return void 0 !== KT ? KT : cT && null !== kT ? {
+       return void 0 !== Oq ? Oq : gq && null !== Eq ? {
```

#### 252. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4463-L4464` → after: `L4463-L4464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4463-L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4463-L4464) · [Before (L4463-L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4463-L4464)

```diff
-         label: "" === kT ? lT : kT
-       } : null !== (MT = TT[0]) && void 0 !== MT ? MT : null
+         label: "" === Eq ? Yq : Eq
+       } : null !== (lq = qq[0]) && void 0 !== lq ? lq : null
```

#### 253. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4476` → after: `L4476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4476) · [Before (L4476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4476)

```diff
-         uF: IT,
+         Fy: uq,
```

#### 254. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4483` → after: `L4483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4483) · [Before (L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4483)

```diff
-       } = (0, jT.B)(), hT = tT("general:default");
+       } = (0, Nq.v)(), dq = Vq("general:default");
```

#### 255. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4496` → after: `L4496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4496) · [Before (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4496)

```diff
-         FT = null === aT ? null : null !== (kT = null === MT || void 0 === MT ? void 0 : MT[aT.value]) && void 0 !== kT ? kT : null,
+         yq = null === Qq ? null : null !== (Eq = null === lq || void 0 === lq ? void 0 : lq[Qq.value]) && void 0 !== Eq ? Eq : null,
```

#### 256. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4499` → after: `L4499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4499) · [Before (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4499)

```diff
-         wT = null === PT ? null : null !== (cT = null === FT || void 0 === FT ? void 0 : FT[PT.value]) && void 0 !== cT ? cT : null,
+         vq = null === rq ? null : null !== (gq = null === yq || void 0 === yq ? void 0 : yq[rq.value]) && void 0 !== gq ? gq : null,
```

#### 257. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4515` → after: `L4515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4515) · [Before (L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4515)

```diff
-       const HT = TT => (0, Ak.jsx)(LT.c, {
+       const fq = qq => (0, BE.jsx)(kq.e, {
```

#### 258. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4562` → after: `L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4562) · [Before (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4562)

```diff
-         }), void 0 !== IT && (0, Ak.jsx)(ST.P, {
+         }), void 0 !== uq && (0, BE.jsx)(oq.Q, {
```

#### 259. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4568` → after: `L4568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4568) · [Before (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4568)

```diff
-         }), void 0 !== CT && (0, Ak.jsx)(ST.P, {
+         }), void 0 !== Wq && (0, BE.jsx)(oq.Q, {
```

#### 260. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4611` → after: `L4611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4611) · [Before (L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4611)

```diff
-       } = (0, jT.B)(), {
+       } = (0, Nq.v)(), {
```

#### 261. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4613` → after: `L4613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4613) · [Before (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4613)

```diff
-       } = (0, vT.b)(), QT = function(TT) {
+       } = (0, aq.c)(), Hq = function(qq) {
```

#### 262. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4622` → after: `L4622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4622) · [Before (L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4622)

```diff
-         } = (0, vT.b)(), yT = (0, lT.useMemo)((() => WM(kT, cT, MT)), [kT, cT, MT]), [fT, xT] = (0, lT.useState)(new Map), [IT, AT] = (0, lT.useState)(null), CT = (0, lT.useRef)(new Set), [jT, tT] = (0, lT.useState)(0), hT = (0, lT.useRef)(yT), NT = (0, lT.useRef)(null);
+         } = (0, aq.c)(), xq = (0, Yq.useMemo)((() => Xl(Eq, gq, lq)), [Eq, gq, lq]), [Aq, cq] = (0, Yq.useState)(new Map), [uq, Bq] = (0, Yq.useState)(null), Wq = (0, Yq.useRef)(new Set), [Nq, Vq] = (0, Yq.useState)(0), dq = (0, Yq.useRef)(xq), jq = (0, Yq.useRef)(null);
```

#### 263. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4642` → after: `L4642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4642) · [Before (L4642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4642)

```diff
-               NT.current = TT.countsVersion, xT((TT => pM(hT.current, new Map([...cT ? TT : [], ...kT]))))
+               jq.current = qq.countsVersion, cq((qq => Kl(dq.current, new Map([...gq ? qq : [], ...Eq]))))
```

#### 264. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4708` → after: `L4708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4708) · [Before (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4708)

```diff
-           uF: TT => {
+           Fy: qq => {
```

#### 265. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4729` → after: `L4729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4729) · [Before (L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4729)

```diff
-             }), (0, Ak.jsx)(ST.P, {
+             }), (0, BE.jsx)(oq.Q, {
```

#### 266. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4780` → after: `L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4780) · [Before (L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4780)

```diff
-             }), (0, Ak.jsx)(ST.P, {
+             }), (0, BE.jsx)(oq.Q, {
```

#### 267. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4801` → after: `L4801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4801) · [Before (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4801)

```diff
-             }), (0, Ak.jsx)(ST.P, {
+             }), (0, BE.jsx)(oq.Q, {
```

#### 268. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4822` → after: `L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4822) · [Before (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4822)

```diff
-             const MT = hT(kT >= tK ? lT : cT, {
+             const lq = dq(Eq >= aO ? Yq : gq, {
```

#### 269. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4825` → after: `L4825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4825) · [Before (L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4825)

```diff
-             return kT < hK ? MT : `${MT} ${hT("studioEventFlow:uncertain",{error:NK(kT)})}`
+             return Eq < VO ? lq : `${lq} ${dq("studioEventFlow:uncertain",{error:dO(Eq)})}`
```

#### 270. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4830-L4831` → after: `L4830-L4831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4830-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4830-L4831) · [Before (L4830-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4830-L4831)

```diff
-               const kT = ((TT, kT) => `${kT>=tK?"~":""}${(0,fT.P)(TT)}`)(TT.playerCount, TT.relativeError);
-               return null === TT.medianFirstPlaytimeMs ? kT : `${kT} \xb7 ${Wk(TT.medianFirstPlaytimeMs)}`
+               const Eq = ((qq, Eq) => `${Eq>=aO?"~":""}${(0,Aq.S)(qq)}`)(qq.playerCount, qq.relativeError);
+               return null === qq.medianFirstPlaytimeMs ? Eq : `${Eq} \xb7 ${XE(qq.medianFirstPlaytimeMs)}`
```

#### 271. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4836` → after: `L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4836) · [Before (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4836)

```diff
-               return null === kT.medianFirstPlaytimeMs ? lT : `${lT} ${hT("studioEventFlow:nodeTime",{time:Wk(kT.medianFirstPlaytimeMs)})}`
+               return null === Eq.medianFirstPlaytimeMs ? Yq : `${Yq} ${dq("studioEventFlow:nodeTime",{time:XE(Eq.medianFirstPlaytimeMs)})}`
```
