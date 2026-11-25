# Changed — Bundle Modifications Report (Part 052 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `52 / 56` (**375** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 051](part-051.md) · [Part 053 →](part-053.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/main.css` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/main.css` (1692 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a)

#### 1114. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12838-L12848` → after: `L14142-L14144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14142-L14144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14142-L14144) · [Before (L12838-L12848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12838-L12848)

```diff
-   flex-direction: column;
-   font-family: Consolas, Courier New, monospace;
-   gap: .15rem;
-   left: 0;
-   line-height: 1.2;
-   max-width: 100%;
-   padding: .2rem .35rem .3rem;
-   pointer-events: none;
-   position: absolute;
-   top: 0;
-   z-index: 4
+   gap: .75rem;
+   justify-content: space-between;
+   padding: .15rem .25rem .1rem
```

#### 1115. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12851-L12854` → after: `L14147-L14148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14147-L14148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14147-L14148) · [Before (L12851-L12854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12851-L12854)

```diff
- .GameThumbnailDiscoverability .GameThumbnailDiscoverabilityHeadline {
-   align-items: baseline;
-   display: flex;
-   gap: .25rem
+ .DebugOverlay .DebugOverlaySection .DebugOverlayEntry:nth-child(2n) {
+   background: hsla(0, 0%, 51%, .2)
```

#### 1116. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12857-L12859` → after: `L14151-L14153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14151-L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14151-L14153) · [Before (L12857-L12859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12857-L12859)

```diff
- .GameThumbnailDiscoverability .GameThumbnailDiscoverabilityHeadline .GameThumbnailDiscoverabilityHeadlineLabel {
-   color: #a4a4a4;
-   font-size: .6rem
+ .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayLabel {
+   color: #cfcfcf;
+   white-space: nowrap
```

#### 1117. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12862-L12865` → after: `L14156-L14159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14156-L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14156-L14159) · [Before (L12862-L12865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12862-L12865)

```diff
- .GameThumbnailDiscoverability .GameThumbnailDiscoverabilityHeadline .GameThumbnailDiscoverabilityHeadlineValue {
-   color: #ffb914;
-   font-size: 1.1rem;
-   font-weight: 700
+ .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayValue {
+   color: #f2f2f2;
+   text-align: right;
+   word-break: break-all
```

#### 1118. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12868-L12871` → after: `L14162-L14166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14162-L14166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14162-L14166) · [Before (L12868-L12871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12868-L12871)

```diff
- .GameThumbnailDiscoverability .GameThumbnailDiscoverabilityChips {
-   display: flex;
-   flex-wrap: wrap;
-   gap: .15rem
+ .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle {
+   cursor: pointer;
+   min-width: 2.5rem;
+   padding: 0 .35rem;
+   pointer-events: auto
```

#### 1119. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12874-L12878` → after: `L14169-L14174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14169-L14174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14169-L14174) · [Before (L12874-L12878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12874-L12878)

```diff
- .GameThumbnailDiscoverability .GameThumbnailDiscoverabilityChips .GameThumbnailDiscoverabilityChip {
-   background: hsla(0, 0%, 51%, .45);
-   color: #f2f2f2;
-   font-size: .65rem;
-   padding: 0 .2rem
+ @media(pointer:coarse) {
+   .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 1120. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12881-L12885` → after: `L14177-L14181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14177-L14181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14177-L14181) · [Before (L12881-L12885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12881-L12885)

```diff
- .ProfileCardHost {
-   inset: 0;
-   pointer-events: none;
-   position: fixed;
-   z-index: 17
+ .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle {
+   background: hsla(0, 0%, 51%, .35);
+   border: .1rem solid hsla(0, 0%, 51%, .5);
+   color: #a4a4a4;
+   font: inherit
```

#### 1121. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12888-L12892` → after: `L14184-L14187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14184-L14187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14184-L14187) · [Before (L12888-L12892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12888-L12892)

```diff
- .ProfileCardHost .ProfileCardScrim {
-   background-color: rgba(26, 31, 46, .6);
-   inset: 0;
-   pointer-events: auto;
-   position: absolute
+ .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle.DebugOverlayToggleOn {
+   background: #36e785;
+   border-color: #36e785;
+   color: #1a1f2e
```

#### 1122. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12895-L12907` → after: `L14190-L14193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14190-L14193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14190-L14193) · [Before (L12895-L12907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12895-L12907)

```diff
- .ProfileCardHost .ProfileCard {
-   background-color: #394980;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   cursor: default;
-   display: flex;
-   max-height: calc(100vh - 16px);
-   max-width: calc(100vw - 16px);
-   outline: none;
-   pointer-events: auto;
-   position: absolute;
-   width: 37rem
+ @media(hover:hover) {
+   .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle:hover {
+     border-color: #ffb914
+   }
```

#### 1123. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12910-L12913` → after: `L14196-L14197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14196-L14197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14196-L14197) · [Before (L12910-L12913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12910-L12913)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardNotch {
-   border: .65rem solid transparent;
-   position: absolute;
-   z-index: 1
+ .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle.pad-focused {
+   border-color: #ffb914
```

#### 1124. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12916-L12920` → after: `L14200-L14203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14200-L14203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14200-L14203) · [Before (L12916-L12920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12916-L12920)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardNotch.Notch-right {
-   border-right-color: #394980;
-   filter: drop-shadow(-1px 0 0 #0f0f0f);
-   left: -1.3rem;
-   transform: translateY(-50%)
+ @media(hover:none) {
+   .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle:active {
+     border-color: #ffb914
+   }
```

#### 1125. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12923-L12927` → after: `L14206-L14209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14206-L14209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14206-L14209) · [Before (L12923-L12927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12923-L12927)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardNotch.Notch-left {
-   border-left-color: #303a59;
-   filter: drop-shadow(1px 0 0 #0f0f0f);
-   right: -1.3rem;
-   transform: translateY(-50%)
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable {
+   border-collapse: collapse;
+   white-space: nowrap;
+   width: 100%
```

#### 1126. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12930-L12934` → after: `L14212-L14216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14212-L14216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14212-L14216) · [Before (L12930-L12934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12930-L12934)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardNotch.Notch-below {
-   border-bottom-color: #394980;
-   filter: drop-shadow(0 -1px 0 #0f0f0f);
-   top: -1.3rem;
-   transform: translateX(-50%)
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable th {
+   border-bottom: .1rem solid hsla(0, 0%, 51%, .2);
+   color: #cfcfcf;
+   font-weight: 600;
+   text-align: left
```

#### 1127. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12937-L12938` → after: `L14219-L14220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14219-L14220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14219-L14220) · [Before (L12937-L12938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12937-L12938)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardNotch.Notch-below.NotchOverModel {
-   border-bottom-color: #303a59
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable td {
+   color: #f2f2f2
```

#### 1128. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12941-L12945` → after: `L14223-L14224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14223-L14224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14223-L14224) · [Before (L12941-L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12941-L12945)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardNotch.Notch-above {
-   border-top-color: #394980;
-   bottom: -1.3rem;
-   filter: drop-shadow(0 1px 0 #0f0f0f);
-   transform: translateX(-50%)
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable td.DebugOverlayTone-good {
+   color: #36e785
```

#### 1129. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12948-L12949` → after: `L14227-L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14227-L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14227-L14228) · [Before (L12948-L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12948-L12949)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardNotch.Notch-above.NotchOverModel {
-   border-top-color: #303a59
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable td.DebugOverlayTone-bad {
+   color: #fc6464
```

#### 1130. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12952-L12957` → after: `L14231-L14232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14231-L14232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14231-L14232) · [Before (L12952-L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12952-L12957)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardGrabber {
-   cursor: grab;
-   display: flex;
-   justify-content: center;
-   padding: .5rem 0;
-   touch-action: none
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable td.DebugOverlayTone-notice {
+   color: #4f94f1
```

#### 1131. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12960-L12963` → after: `L14235-L14236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14235-L14236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14235-L14236) · [Before (L12960-L12963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12960-L12963)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardGrabber .ProfileCardGrabberBar {
-   background-color: hsla(0, 0%, 100%, .35);
-   height: .3rem;
-   width: 3rem
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable td.DebugOverlayTone-warn {
+   color: #ffb914
```

#### 1132. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12966-L12974` → after: `L14239-L14241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14239-L14241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14239-L14241) · [Before (L12966-L12974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12966-L12974)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardConfirmOverlay {
-   align-items: center;
-   background-color: rgba(26, 31, 46, .6);
-   display: flex;
-   inset: 0;
-   justify-content: center;
-   padding: 1rem;
-   position: absolute;
-   z-index: 2
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable td,
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable th {
+   padding: .15rem .35rem .1rem .25rem
```

#### 1133. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12977-L12980` → after: `L14244-L14255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14244-L14255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14244-L14255) · [Before (L12977-L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12977-L12980)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardConfirmOverlay .ProfileCardConfirm {
-   background-color: #394980;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable td:not(:first-child),
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable th:not(:first-child) {
+   border-left: .1rem solid hsla(0, 0%, 51%, .15);
+   text-align: right
+ }
+ 
+ .DebugOverlay .DebugOverlaySection .DebugOverlayTable tbody tr:nth-child(2n) {
+   background: hsla(0, 0%, 51%, .2)
+ }
+ 
+ .NotificationToasts {
+   align-items: flex-end;
```

#### 1134. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12983-L12985` → after: `L14258-L14260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14258-L14260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14258-L14260) · [Before (L12983-L12985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12983-L12985)

```diff
-   gap: .7rem;
-   max-width: 20rem;
-   padding: 1rem
+   gap: .5rem;
+   pointer-events: none;
+   transition: opacity .2s
```

#### 1135. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12988-L12990` → after: `L14263-L14264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14263-L14264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14263-L14264) · [Before (L12988-L12990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12988-L12990)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardConfirmOverlay .ProfileCardConfirm .ProfileCardConfirmText {
-   font-size: .95rem;
-   text-align: center
+ .NotificationToasts:empty {
+   display: none
```

#### 1136. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12993-L12995` → after: `L14267-L14271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14267-L14271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14267-L14271) · [Before (L12993-L12995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12993-L12995)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardConfirmOverlay .ProfileCardConfirm .ProfileCardConfirmButtons {
-   display: flex;
-   gap: .5rem
+ .NotificationToasts.NotificationToasts-page {
+   position: fixed;
+   right: calc(1rem + var(--notchRight));
+   top: calc(7rem + var(--notchTop));
+   z-index: 16
```

#### 1137. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12998-L12999` → after: `L14274-L14275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14274-L14275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14274-L14275) · [Before (L12998-L12999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L12998-L12999)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardConfirmOverlay .ProfileCardConfirm .ProfileCardConfirmButtons>* {
-   flex: 1 1
+ .NotificationToasts.NotificationToasts-page.NotificationToastsCornerClear {
+   top: calc(1rem + var(--notchTop))
```

#### 1138. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13002-L13008` → after: `L14278-L14280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14278-L14280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14278-L14280) · [Before (L13002-L13008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13002-L13008)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardModelPanel {
-   background-color: #303a59;
-   flex-shrink: 0;
-   min-height: 18rem;
-   overflow: hidden;
-   position: relative;
-   width: 13rem
+ .NotificationToasts.NotificationToasts-inGame {
+   margin-top: .6rem;
+   z-index: 1
```

#### 1139. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13011-L13014` → after: `L14283-L14285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14283-L14285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14283-L14285) · [Before (L13011-L13014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13011-L13014)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardModelPanel .ProfileCardEffect,
- .ProfileCardHost .ProfileCard .ProfileCardModelPanel .ProfileCardModel {
-   inset: 0;
-   position: absolute
+ .NotificationToasts.NotificationToasts-inGame:not(:has(>.NotificationToastContainer:not(.NotificationToastContainer-exit))) {
+   margin-top: 0;
+   transition: opacity .2s, margin-top .25s cubic-bezier(.2, .8, .2, 1) .1s
```

#### 1140. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13017-L13023` → after: `L14288-L14295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14288-L14295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14288-L14295) · [Before (L13017-L13023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13017-L13023)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardModelPanel .ProfileCardModel .ProfileCardModelFallback,
- .ProfileCardHost .ProfileCard .ProfileCardModelPanel .ProfileCardModel .ProfileCardModelLoading {
-   align-items: center;
-   display: flex;
-   inset: 0;
-   justify-content: center;
-   position: absolute
+ .NotificationToasts.NotificationToasts-inGame .NotificationToast {
+   max-width: calc(100vw - 8rem - var(--notchLeft) - var(--notchRight))
+ }
+ 
+ .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons {
+   align-items: stretch;
+   align-self: stretch;
+   gap: 8px
```

#### 1141. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13026-L13028` → after: `L14298-L14302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14298-L14302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14298-L14302) · [Before (L13026-L13028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13026-L13028)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardModelPanel .ProfileCardModel .ProfileCardModelFallback .ProfilePicture {
-   height: 7rem;
-   width: 7rem
+ .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastButton,
+ .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastClose {
+   justify-content: center;
+   min-width: 44px;
+   position: relative
```

#### 1142. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13031-L13032` → after: `L14305-L14312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14305-L14312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14305-L14312) · [Before (L13031-L13032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13031-L13032)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardModelPanel .ProfileCardModel.OutfitLoading .CharCustomisationPreview {
-   visibility: hidden
+ @media(pointer:coarse) {
+ 
+   .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastButton:before,
+   .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastClose:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
+   }
```

#### 1143. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13035-L13037` → after: `L14315-L14316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14315-L14316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14315-L14316) · [Before (L13035-L13037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13035-L13037)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardModelPanel .ProfileCardModel .CharCustomisationPreview {
-   height: 100%;
-   width: 100%
+ .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastButton {
+   overflow: visible
```

#### 1144. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13040-L13043` → after: `L14319-L14320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14319-L14320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14319-L14320) · [Before (L13040-L13043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13040-L13043)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardModelPanel .ProfileCardModel .CharCustomisationPreview .CharCustomisationPreviewCanvas {
-   height: 100%;
-   outline: none;
-   width: 100%
+ .NotificationToasts .NotificationToastContainer {
+   position: relative
```

#### 1145. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13046-L13053` → after: `L14323-L14326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14323-L14326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14323-L14326) · [Before (L13046-L13053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13046-L13053)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo {
-   display: flex;
-   flex: 1 1;
-   flex-direction: column;
-   min-width: 0;
-   overflow-y: auto;
-   scrollbar-color: #3c4b68 #394980;
-   scrollbar-width: thin
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit {
+   opacity: 1;
+   pointer-events: none;
+   transform: translateX(0)
```

#### 1146. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13056-L13057` → after: `L14329-L14333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14329-L14333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14329-L14333) · [Before (L13056-L13057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13056-L13057)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo::-webkit-scrollbar {
-   width: 6px
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit-active {
+   opacity: 0;
+   pointer-events: none;
+   transform: translateX(1.5rem);
+   transition: opacity .2s ease-in, transform .2s ease-in
```

#### 1147. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13060-L13061` → after: `L14336-L14338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14336-L14338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14336-L14338) · [Before (L13060-L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13060-L13061)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo::-webkit-scrollbar-track {
-   background-color: #394980
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit {
+   height: var(--TopRightStackExitHeight);
+   min-height: 0
```

#### 1148. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13064-L13066` → after: `L14341-L14344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14341-L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14341-L14344) · [Before (L13064-L13066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13064-L13066)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo::-webkit-scrollbar-thumb {
-   background-color: #3c4b68;
-   border-radius: 0
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit-active {
+   height: 0;
+   margin-top: -.5rem;
+   transition: opacity .2s ease-in, transform .2s ease-in, height .25s cubic-bezier(.2, .8, .2, 1) .1s, margin-top .25s cubic-bezier(.2, .8, .2, 1) .1s, margin-bottom .25s cubic-bezier(.2, .8, .2, 1) .1s
```

#### 1149. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13069-L13075` → after: `L14347-L14349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14347-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14347-L14349) · [Before (L13069-L13075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13069-L13075)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead {
-   background: linear-gradient(180deg, rgba(0, 0, 0, .18), transparent);
-   display: flex;
-   flex-direction: column;
-   gap: .35rem;
-   padding: .9rem .9rem .5rem;
-   position: relative
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit-active:first-child {
+   margin-bottom: -.5rem;
+   margin-top: 0
```

#### 1150. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13078-L13082` → after: `L14352-L14353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14352-L14353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14352-L14353) · [Before (L13078-L13082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13078-L13082)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead .ProfileCardName {
-   font-size: 1.35rem;
-   overflow-x: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit .NotificationToast {
+   pointer-events: none
```

#### 1151. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13085` → after: `L14356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14356) · [Before (L13085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13085)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead .ProfileCardStatusRow {
+ .NotificationToasts .NotificationToast {
```

#### 1152. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13088-L13089` → after: `L14368-L14373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14368-L14373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14368-L14373) · [Before (L13088-L13089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13088-L13089)

```diff
-   flex-wrap: wrap;
-   gap: .5rem
+   gap: .8rem;
+   max-width: calc(100vw - 2rem);
+   min-width: min(300px, 100vw - 8rem - var(--notchLeft) - var(--notchRight));
+   padding: .6rem .6rem .6rem .9rem;
+   pointer-events: auto;
+   width: 30rem
```

#### 1153. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13092-L13098` → after: `L14376-L14379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14376-L14379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14376-L14379) · [Before (L13092-L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13092-L13098)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead .ProfileCardStatusRow .ProfileCardStatus {
-   align-items: center;
-   color: #a4a4a4;
-   display: flex;
-   font-size: .85rem;
-   gap: .4em;
-   min-width: 0
+ .NotificationToasts .NotificationToast.NotificationToastMessage {
+   min-width: 0;
+   padding: .7rem 1.1rem;
+   width: auto
```

#### 1154. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13101-L13106` → after: `L14382-L14385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14382-L14385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14382-L14385) · [Before (L13101-L13106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13101-L13106)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead .ProfileCardStatusRow .ProfileCardStatus .ProfileCardStatusDot {
-   background-color: #838383;
-   border: .15rem solid rgba(0, 0, 0, .4);
-   flex-shrink: 0;
-   height: .65rem;
-   width: .65rem
+ .NotificationToasts .NotificationToast .NotificationToastIcon {
+   color: #ffb914;
+   flex: 0 0 auto;
+   font-size: max(1.6rem, 15px)
```

#### 1155. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13109-L13110` → after: `L14388-L14401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14388-L14401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14388-L14401) · [Before (L13109-L13110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13109-L13110)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead .ProfileCardStatusRow .ProfileCardStatus.IsHomeScreen {
-   color: #4f94f1
+ .NotificationToasts .NotificationToast .NotificationToastText {
+   -webkit-line-clamp: 3;
+   -webkit-box-orient: vertical;
+   display: -webkit-box;
+   flex: 1 1 auto;
+   font-size: max(1.1rem, 13px);
+   font-weight: 700;
+   min-width: 0;
+   overflow-wrap: anywhere;
+   overflow-x: hidden;
+   overflow-y: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap;
+   white-space: normal
```

#### 1156. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13113-L13114` → after: `L14404-L14406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14404-L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14404-L14406) · [Before (L13113-L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13113-L13114)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead .ProfileCardStatusRow .ProfileCardStatus.IsHomeScreen .ProfileCardStatusDot {
-   background-color: #4f94f1
+ .NotificationToasts .NotificationToast.NotificationToastNamed .NotificationToastText {
+   display: block;
+   overflow-wrap: normal
```

#### 1157. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13117-L13119` → after: `L14409-L14413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14409-L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14409-L14413) · [Before (L13117-L13119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13117-L13119)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead .ProfileCardStatusRow .ProfileCardStatus.IsInMatch .ProfileCardStatusDot,
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead .ProfileCardStatusRow .ProfileCardStatus.IsPlaying .ProfileCardStatusDot {
-   background-color: #1dd06d
+ .NotificationToasts .NotificationToast.NotificationToastNamed .NotificationToastText .NotificationToastName {
+   font-weight: 900;
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 1158. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13122-L13123` → after: `L14416-L14426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14416-L14426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14416-L14426) · [Before (L13122-L13123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13122-L13123)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead .ProfileCardStatusRow .ProfileCardStatus.IsPlaying {
-   color: #1dd06d
+ .NotificationToasts .NotificationToast.NotificationToastNamed .NotificationToastText .NotificationToastStatus {
+   -webkit-line-clamp: 2;
+   -webkit-box-orient: vertical;
+   color: #cfcfcf;
+   display: -webkit-box;
+   overflow-wrap: break-word;
+   overflow-x: hidden;
+   overflow-y: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap;
+   white-space: normal
```

#### 1159. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13126` → after: `L14429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14429) · [Before (L13126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13126)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead .ProfileCardStatusRow .ProfileCardChip {
+ .NotificationToasts .NotificationToast .NotificationToastButtons {
```

#### 1160. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13128-L13133` → after: `L14431-L14433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14431-L14433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14431-L14433) · [Before (L13128-L13133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13128-L13133)

```diff
-   background-color: rgba(0, 0, 0, .35);
-   border: 1px solid hsla(0, 0%, 100%, .15);
-   display: inline-flex;
-   font-size: .72rem;
-   gap: .3em;
-   padding: .15em .45em
+   display: flex;
+   flex: 0 0 auto;
+   gap: .3rem
```

#### 1161. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13136-L13137` → after: `L14436-L14438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14436-L14438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14436-L14438) · [Before (L13136-L13137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13136-L13137)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardHead .ProfileCardStatusRow .ProfileCardChip.PartyChip {
-   color: #fcd373
+ .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastButton {
+   box-shadow: none;
+   font-size: 1rem
```

#### 1162. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13140` → after: `L14441-L14442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14441-L14442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14441-L14442) · [Before (L13140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13140)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardStats {
+ .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastButton .ButtonBody {
+   align-items: center;
```

#### 1163. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13142-L13144` → after: `L14444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14444) · [Before (L13142-L13144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13142-L13144)

```diff
-   flex-wrap: wrap;
-   gap: .4rem;
-   padding: 0 .9rem
+   gap: .6rem
```

#### 1164. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13147` → after: `L14447-L14451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14447-L14451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14447-L14451) · [Before (L13147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13147)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardStats .ProfileCardStat {
+ .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastButton.NotificationToastAnswer {
+   font-size: 1.1rem
+ }
+ 
+ .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose {
```

#### 1165. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13149` → after: `L14453-L14456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14453-L14456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14453-L14456) · [Before (L13149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13149)

```diff
-   background-color: rgba(0, 0, 0, .15);
+   background: none;
+   border: none;
+   color: #cfcfcf;
+   cursor: pointer;
```

#### 1166. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13151` → after: `L14458-L14459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14458-L14459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14458-L14459) · [Before (L13151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13151)

```diff
-   flex: 1 1;
+   font-family: inherit;
+   font-size: 1.2rem;
```

#### 1167. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13153-L13159` → after: `L14461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14461) · [Before (L13153-L13159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13153-L13159)

```diff
-   min-width: 0;
-   padding: .3rem .5rem
- }
- 
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardStats .ProfileCardStat .ProfileCardStatIcon {
-   color: #a4a4a4;
-   flex-shrink: 0
+   padding: .4rem .5rem
```

#### 1168. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13162-L13163` → after: `L14464-L14467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14464-L14467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14464-L14467) · [Before (L13162-L13163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13162-L13163)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardStats .ProfileCardStat .ProfileCardStatText {
-   min-width: 0
+ @media(hover:hover) {
+   .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose:hover {
+     color: #ff8a80
+   }
```

#### 1169. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13166-L13169` → after: `L14470-L14471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14470-L14471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14470-L14471) · [Before (L13166-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13166-L13169)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardStats .ProfileCardStat .ProfileCardStatText .ProfileCardStatLabel {
-   color: #a4a4a4;
-   font-size: .62rem;
-   text-transform: uppercase
+ .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose.pad-focused {
+   color: #ff8a80
```

#### 1170. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13172-L13176` → after: `L14474-L14477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14474-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14474-L14477) · [Before (L13172-L13176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13172-L13176)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardStats .ProfileCardStat .ProfileCardStatText .ProfileCardStatValue {
-   font-size: .85rem;
-   overflow-x: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ @media(hover:none) {
+   .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose:active {
+     color: #ff8a80
+   }
```

#### 1171. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13179-L13185` → after: `L14480-L14481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14480-L14481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14480-L14481) · [Before (L13179-L13185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13179-L13185)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardStats .ProfileCardShimmer {
-   animation: ProfileCardShimmer 1.2s linear infinite;
-   background: linear-gradient(90deg, hsla(0, 0%, 100%, .08), hsla(0, 0%, 100%, .18), hsla(0, 0%, 100%, .08));
-   background-size: 200% 100%;
-   height: .8rem;
-   margin-top: .15rem;
-   width: 3.5rem
+ .NotificationToasts .NotificationToast .NotificationToastButtons .KeyboardButtonRepresentation {
+   font-size: .8rem
```

#### 1172. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13188` → after: `L14484-L14485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14484-L14485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14484-L14485) · [Before (L13188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13188)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardActions {
+ .UiRequests {
+   align-items: flex-end;
```

#### 1173. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13192` → after: `L14489-L14490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14489-L14490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14489-L14490) · [Before (L13192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13192)

```diff
-   padding: .9rem .9rem .6rem
+   pointer-events: auto;
+   z-index: 1
```

#### 1174. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13195-L13199` → after: `L14493-L14496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14493-L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14493-L14496) · [Before (L13195-L13199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13195-L13199)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardActions .ProfileCardPrimaryActions {
-   display: flex;
-   flex-direction: column;
-   gap: .5rem
- }
+ @media(orientation:portrait)and (max-width:600px) {
+   .UiRequests {
+     max-width: calc(65vw - 1rem)
+   }
```

#### 1175. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13201-L13203` → after: `L14498-L14500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14498-L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14498-L14500) · [Before (L13201-L13203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13201-L13203)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardActions .ProfileCardPrimaryActions .ProfileCardJoin {
-   display: flex
- }
+   .UiRequests .UiRequestText {
+     overflow-wrap: anywhere
+   }
```

#### 1176. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13205-L13206` → after: `L14502-L14504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14502-L14504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14502-L14504) · [Before (L13205-L13206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13205-L13206)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardActions .ProfileCardPrimaryActions .ProfileCardJoin>* {
-   flex: 1 1
+   .UiRequests .UiRequestText .TextFromServerEntityName {
+     white-space: normal
+   }
```

#### 1177. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13209-L13214` → after: `L14507-L14510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14507-L14510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14507-L14510) · [Before (L13209-L13214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13209-L13214)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardActions .ProfileCardPrimaryActions .JoinFriendButton,
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardActions .ProfileCardPrimaryActions .ProfileCardPrimaryButton {
-   box-shadow: none;
-   font-size: 1.05rem;
-   min-height: 2.6rem;
-   white-space: nowrap
+ .UiRequests .UiRequestContainer.UiRequestContainer-exit {
+   opacity: 1;
+   pointer-events: none;
+   transform: translateX(0)
```

#### 1178. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13217-L13221` → after: `L14513-L14517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14513-L14517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14513-L14517) · [Before (L13217-L13221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13217-L13221)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardActions .ProfileCardPrimaryActions .ProfileCardGiftButton {
-   --buttonNormalColour: #f38ab6;
-   --buttonHoverColour: #c16088;
-   --buttonTopColour: #f38ab6;
-   --buttonBottomColour: #b64e6a
+ .UiRequests .UiRequestContainer.UiRequestContainer-exit-active {
+   opacity: 0;
+   pointer-events: none;
+   transform: translateX(1.5rem);
+   transition: opacity .2s ease-in, transform .2s ease-in
```

#### 1179. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13224-L13227` → after: `L14520-L14522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14520-L14522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14520-L14522) · [Before (L13224-L13227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13224-L13227)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardActions .ProfileCardSecondaryRow {
-   display: flex;
-   flex-wrap: wrap;
-   gap: .4rem
+ .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer {
+   animation: shake 3s infinite;
+   animation-delay: 6s
```

#### 1180. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13230-L13232` → after: `L14525-L14529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14525-L14529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14525-L14529) · [Before (L13230-L13232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13230-L13232)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardActions .ProfileCardSecondaryRow>* {
-   flex: 1 1;
-   white-space: nowrap
+ .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer .UiRequest .UiRequestInner {
+   animation: shine 4s linear infinite;
+   background: linear-gradient(110deg, #303a59, #303a59 2rem, #394980 0, #394980 4rem, #303a59 0, #303a59);
+   background-position: -4rem 0;
+   background-size: calc(200% + 4rem) 100%
```

#### 1181. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13235-L13241` → after: `L14532-L14535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14532-L14535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14532-L14535) · [Before (L13235-L13241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13235-L13241)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardActions .ProfileCardModeration {
-   border-top: 1px solid hsla(0, 0%, 95%, .1);
-   display: flex;
-   flex-wrap: wrap;
-   gap: .4rem;
-   padding-top: .5rem
- }
+ @keyframes shine {
+   0% {
+     background-position: -4rem 0
+   }
```

#### 1182. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13243-L13246` → after: `L14537-L14539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14537-L14539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14537-L14539) · [Before (L13243-L13246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13243-L13246)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardActions .ProfileCardModeration>* {
-   flex: 1 1;
-   white-space: nowrap
- }
+   12.5% {
+     background-position: -100% 0
+   }
```

#### 1183. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13248-L13251` → after: `L14541-L14543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14541-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14541-L14543) · [Before (L13248-L13251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13248-L13251)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardGames {
-   background-color: rgba(0, 0, 0, .15);
-   margin: .4rem .9rem 0;
-   padding: .3rem .5rem .5rem
+   to {
+     background-position: -100% 0
+   }
```

#### 1184. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13254-L13258` → after: `L14546-L14547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14546-L14547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14546-L14547) · [Before (L13254-L13258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13254-L13258)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardGames .ProfileCardGamesTitle {
-   color: #a4a4a4;
-   font-size: .62rem;
-   margin-bottom: .3rem;
-   text-transform: uppercase
+ .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer .UiRequest .UiRequestInner {
+   border-color: #ffb914
```

#### 1185. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13261-L13266` → after: `L14550-L14555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14550-L14555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14550-L14555) · [Before (L13261-L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13261-L13266)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardGames .ProfileCardGamesGrid {
-   grid-gap: .4rem;
-   display: grid;
-   font-size: .75rem;
-   gap: .4rem;
-   grid-template-columns: repeat(2, 1fr)
+ .UiRequests .UiRequestContainer .UiRequest {
+   animation-duration: .25s;
+   animation-fill-mode: backwards;
+   animation-iteration-count: 1;
+   animation-name: topRightStackIn;
+   animation-timing-function: cubic-bezier(.2, .8, .2, 1)
```

#### 1186. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13269` → after: `L14558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14558) · [Before (L13269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13269)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardFooter {
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner {
```

#### 1187. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13272-L13276` → after: `L14565-L14569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14565-L14569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14565-L14569) · [Before (L13272-L13276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13272-L13276)

```diff
-   flex-wrap: wrap;
-   gap: .3rem .8rem;
-   justify-content: space-between;
-   margin-top: auto;
-   padding: .4rem .9rem .6rem
+   gap: .5rem;
+   justify-content: flex-start;
+   overflow: hidden;
+   padding: .5rem 1rem .5rem .5rem;
+   position: relative
```

#### 1188. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13279` → after: `L14572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14572) · [Before (L13279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13279)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardFooter .ProfileCardTextAction {
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay {
```

#### 1189. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13281-L13301` → after: `L14574-L14583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14574-L14583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14574-L14583) · [Before (L13281-L13301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13281-L13301)

```diff
-   color: #a4a4a4;
-   cursor: pointer;
-   display: inline-flex;
-   font-size: .75rem;
-   gap: .3em;
-   text-decoration: none
- }
- 
- @media(pointer:coarse) {
-   .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardFooter .ProfileCardTextAction {
-     box-sizing: border-box;
-     font-size: inherit;
-     min-height: 44px;
-     min-width: 44px
-   }
- }
- ... (5 more removed lines; see GitHub link above)
+   display: flex;
+   gap: 1rem;
+   height: 100%;
+   justify-content: center;
+   left: 0;
+   pointer-events: none;
+   position: absolute;
+   top: 0;
+   width: 100%;
+   z-index: 2
```

#### 1190. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13304-L13305` → after: `L14586-L14587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14586-L14587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14586-L14587) · [Before (L13304-L13305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13304-L13305)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardFooter .ProfileCardRemoveFriend.pad-focused {
-   color: #ff8a80
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlayDefault {
+   background-color: transparent
```

#### 1191. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13308-L13311` → after: `L14590-L14592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14590-L14592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14590-L14592) · [Before (L13308-L13311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13308-L13311)

```diff
- @media(hover:none) {
-   .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardFooter .ProfileCardRemoveFriend:active {
-     color: #ff8a80
-   }
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlayLoading {
+   background-color: rgba(48, 58, 89, .9);
+   font-size: 2rem
```

#### 1192. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13314-L13315` → after: `L14595-L14596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14595-L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14595-L14596) · [Before (L13314-L13315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13314-L13315)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardFooter .ProfileCardViewProfile {
-   margin-left: auto
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess {
+   background-color: rgba(48, 58, 89, .9)
```

#### 1193. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13318-L13321` → after: `L14599-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14599-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14599-L14601) · [Before (L13318-L13321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13318-L13321)

```diff
- @media(hover:hover) {
-   .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardFooter .ProfileCardViewProfile:hover {
-     color: #f2f2f2
-   }
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess .UiRequestSuccessOverlayIcon {
+   font-size: 2rem;
+   position: relative
```

#### 1194. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13324-L13325` → after: `L14604-L14606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14604-L14606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14604-L14606) · [Before (L13324-L13325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13324-L13325)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardFooter .ProfileCardViewProfile.pad-focused {
-   color: #f2f2f2
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess .UiRequestSuccessOverlayText {
+   font-size: 1.3rem;
+   font-weight: 700
```

#### 1195. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13328-L13331` → after: `L14609-L14615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14609-L14615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14609-L14615) · [Before (L13328-L13331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13328-L13331)

```diff
- @media(hover:none) {
-   .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardFooter .ProfileCardViewProfile:active {
-     color: #f2f2f2
-   }
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestLeft {
+   align-items: center;
+   display: flex;
+   font-size: 3rem;
+   height: 5rem;
+   justify-content: center;
+   width: 5rem
```

#### 1196. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13334-L13337` → after: `L14618-L14620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14618-L14620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14618-L14620) · [Before (L13334-L13337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13334-L13337)

```diff
- .ProfileCardHost.Sheet .ProfileCard {
-   animation: ProfileCardSheetIn .15s ease-out;
-   border-bottom: none;
-   bottom: 0;
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight {
+   align-items: stretch;
+   display: flex;
```

#### 1197. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13339-L13346` → after: `L14622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14622) · [Before (L13339-L13346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13339-L13346)

```diff
-   height: 40rem;
-   left: 0;
-   max-height: 90vh;
-   max-width: none;
-   padding-bottom: env(safe-area-inset-bottom);
-   right: 0;
-   transition: transform .15s;
-   width: auto
+   gap: .5rem
```

#### 1198. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13349-L13351` → after: `L14625-L14629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14625-L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14625-L14629) · [Before (L13349-L13351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13349-L13351)

```diff
- .ProfileCardHost.Sheet .ProfileCard .ProfileCardGrabber {
-   background-color: #303a59;
-   order: -2
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestText {
+   font-size: 1.3rem;
+   font-weight: 700;
+   margin-right: auto;
+   padding: .25rem 1.25rem .25rem .4rem
```

#### 1199. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13354-L13358` → after: `L14632-L14636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14632-L14636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14632-L14636) · [Before (L13354-L13358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13354-L13358)

```diff
- .ProfileCardHost.Sheet .ProfileCard .ProfileCardModelPanel {
-   height: 12rem;
-   min-height: 0;
-   order: -1;
-   width: 100%
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList {
+   align-items: center;
+   display: flex;
+   gap: .5rem;
+   justify-content: center
```

#### 1200. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13361-L13364` → after: `L14639-L14644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14639-L14644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14639-L14644) · [Before (L13361-L13364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13361-L13364)

```diff
- @media(max-height:500px) {
-   .ProfileCardHost .ProfileCard .ProfileCardModelPanel {
-     min-height: 0
-   }
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton {
+   box-shadow: none;
+   flex-grow: 1;
+   font-size: 1rem;
+   font-weight: 700
+ }
```

#### 1201. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13366-L13368` → after: `L14646-L14650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14646-L14650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14646-L14650) · [Before (L13366-L13368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13366-L13368)

```diff
-   .ProfileCardHost .ProfileCard .ProfileCardInfo .ProfileCardGames {
-     display: none
-   }
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton .ButtonBody {
+   align-items: center;
+   display: flex;
+   gap: 1rem;
+   justify-content: center
```

#### 1202. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13371-L13374` → after: `L14653-L14654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14653-L14654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14653-L14654) · [Before (L13371-L13374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13371-L13374)

```diff
- @keyframes ProfileCardShimmer {
-   to {
-     background-position: -200% 0
-   }
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton .KeyboardButtonRepresentation {
+   font-size: .8rem
```

#### 1203. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13377` → after: `L14657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14657) · [Before (L13377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13377)

```diff
- @keyframes ProfileCardSheetIn {
+ @keyframes chestShake {
```

#### 1204. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13379` → after: `L14659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14659) · [Before (L13379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13379)

```diff
-     transform: translateY(100%)
+     transform: translateX(-50%) rotate(6deg)
```

#### 1205. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13383-L13400` → after: `L14662-L14664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14662-L14664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14662-L14664) · [Before (L13383-L13400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13383-L13400)

```diff
- .PlayerExclusionButton {
-   align-items: center;
-   background: none;
-   border: none;
-   box-sizing: content-box;
-   color: inherit;
-   cursor: pointer;
-   display: inline-flex;
-   font: inherit;
-   gap: .3em;
-   letter-spacing: inherit;
-   line-height: inherit;
-   margin: 0;
-   padding: 0;
-   text-align: inherit;
-   text-shadow: inherit;
- ... (2 more removed lines; see GitHub link above)
+   25% {
+     transform: translateX(-50%) rotate(-4deg)
+   }
```

#### 1206. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13402-L13404` → after: `L14666-L14667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14666-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14666-L14667) · [Before (L13402-L13404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13402-L13404)

```diff
- @media(hover:hover) {
-   .PlayerExclusionButton.PlayerExclusionButton-block:hover {
-     color: #ff8a80
+   50% {
+     transform: translateX(-50%) rotate(6deg)
```

#### 1207. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13408-L13409` → after: `L14670-L14676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14670-L14676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14670-L14676) · [Before (L13408-L13409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13408-L13409)

```diff
- .PlayerExclusionButton.PlayerExclusionButton-block.pad-focused {
-   color: #ff8a80
+   75% {
+     transform: translateX(-50%) rotate(-4deg)
+   }
+ 
+   to {
+     transform: translateX(-50%) rotate(0)
+   }
```

#### 1208. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13412-L13414` → after: `L14679-L14687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14679-L14687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14679-L14687) · [Before (L13412-L13414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13412-L13414)

```diff
- @media(hover:none) {
-   .PlayerExclusionButton.PlayerExclusionButton-block:active {
-     color: #ff8a80
+ @keyframes pop {
+   0% {
+     bottom: 0;
+     opacity: 0
+   }
+ 
+   to {
+     bottom: 1.5rem;
+     opacity: 0
```

#### 1209. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13418-L13419` → after: `L14691-L14699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14691-L14699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14691-L14699) · [Before (L13418-L13419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13418-L13419)

```diff
- .DebugOverlay {
-   background: rgba(26, 31, 46, .9);
+ .ChestContainer {
+   height: 5.5rem;
+   position: relative;
+   width: 5rem
+ }
+ 
+ .ChestContainer .ChestImage {
+   -ms-interpolation-mode: nearest-neighbor;
+   animation: chestShake .4s 3;
```

#### 1210. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13421-L13435` → after: `L14701-L14710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14701-L14710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14701-L14710) · [Before (L13421-L13435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13421-L13435)

```diff
-   color: #cfcfcf;
-   font-family: Consolas, Courier New, monospace;
-   font-size: .75rem;
-   left: 0;
-   line-height: 1.5;
-   max-height: 90vh;
-   max-width: 34rem;
-   min-width: 15rem;
-   overflow-y: auto;
-   padding: .5rem;
-   pointer-events: none;
-   position: fixed;
-   width: -moz-fit-content;
-   width: fit-content;
-   z-index: 99999999999
+   image-rendering: optimizeSpeed;
+   image-rendering: -o-crisp-edges;
+   image-rendering: pixelated;
+   image-rendering: optimize-contrast;
+   left: 50%;
+   position: absolute;
+   transform: translateX(-50%);
+   transform-origin: center center;
+   transition: width .2s;
+   width: 4rem
```

#### 1211. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13438-L13444` → after: `L14713-L14714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14713-L14714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14713-L14714) · [Before (L13438-L13444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13438-L13444)

```diff
- .DebugOverlay .DebugOverlayHeader {
-   border-bottom: .1rem solid hsla(0, 0%, 51%, .2);
-   color: #ffb914;
-   font-size: .75rem;
-   font-weight: 700;
-   margin-bottom: .4rem;
-   padding-bottom: .25rem
+ .ChestContainer .ChestImage.ChestImageSmall {
+   width: 2.5rem
```

#### 1212. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13447-L13448` → after: `L14717-L14729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14717-L14729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14717-L14729) · [Before (L13447-L13448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13447-L13448)

```diff
- .DebugOverlay .DebugOverlaySection {
-   margin-bottom: .4rem
+ .ChestContainer .ChestShine {
+   animation-delay: .2s;
+   animation-duration: .2s;
+   animation-fill-mode: backwards;
+   animation-iteration-count: 1;
+   animation-name: fadeInScaleUp;
+   bottom: 1rem;
+   clip-path: polygon(0 0, 100% 0, 70% 100%, 30% 100%);
+   height: 2.5rem;
+   isolation: isolate;
+   left: calc(50% - 1.9rem);
+   position: absolute;
+   width: 3.8rem
```

#### 1213. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13451-L13452` → after: `L14732-L14738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14732-L14738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14732-L14738) · [Before (L13451-L13452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13451-L13452)

```diff
- .DebugOverlay .DebugOverlaySection:last-child {
-   margin-bottom: 0
+ .ChestContainer .ChestShine .ChestShineBackground {
+   background: linear-gradient(0, rgba(255, 185, 20, .8), rgba(255, 185, 20, 0));
+   bottom: 0;
+   height: 100%;
+   left: 0;
+   position: absolute;
+   width: 100%
```

#### 1214. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13455` → after: `L14741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14741) · [Before (L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13455)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlaySectionTitle {
+ .ChestContainer .RewardItemsContainer {
```

#### 1215. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13460-L13465` → after: `L14744-L14750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14744-L14750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14744-L14750) · [Before (L13460-L13465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13460-L13465)

```diff
-   font-weight: 700;
-   gap: .3rem;
-   margin-bottom: .125rem;
-   pointer-events: auto;
-   -webkit-user-select: none;
-   user-select: none
+   gap: .4rem;
+   height: 3rem;
+   justify-content: center;
+   left: 0;
+   position: absolute;
+   top: 0;
+   width: 100%
```

#### 1216. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13468-L13471` → after: `L14753-L14758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14753-L14758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14753-L14758) · [Before (L13468-L13471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13468-L13471)

```diff
- @media(hover:hover) {
-   .DebugOverlay .DebugOverlaySection .DebugOverlaySectionTitle:hover {
-     color: #ffb914
-   }
+ .ChestContainer .RewardItemsContainer .RewardItem {
+   font-size: 1.5rem;
+   height: 100%;
+   position: relative;
+   transform-origin: center bottom;
+   width: 0
```

#### 1217. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13474-L13475` → after: `L14761-L14763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14761-L14763) · [Before (L13474-L13475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13474-L13475)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlaySectionTitle.pad-focused {
-   color: #ffb914
+ .ChestContainer .RewardItemsContainer .RewardItem.RewardItemShow .TextFromServer {
+   bottom: .25rem;
+   opacity: 1
```

#### 1218. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13478-L13481` → after: `L14766-L14772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14766-L14772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14766-L14772) · [Before (L13478-L13481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13478-L13481)

```diff
- @media(hover:none) {
-   .DebugOverlay .DebugOverlaySection .DebugOverlaySectionTitle:active {
-     color: #ffb914
-   }
+ .ChestContainer .RewardItemsContainer .RewardItem .TextFromServer {
+   bottom: -1rem;
+   opacity: 0;
+   position: absolute;
+   transform: translateX(-50%);
+   transition: opacity .4s, bottom .4s;
+   transition-delay: .2s
```

#### 1219. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13484-L13486` → after: `L14775-L14786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14775-L14786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14775-L14786) · [Before (L13484-L13486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13484-L13486)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlaySectionTitle .DebugOverlaySectionArrow {
-   color: #a4a4a4;
-   font-size: .55rem
+ .SeasonPassRewardTile {
+   align-items: center;
+   background-color: #3c4b68;
+   border: 1px solid #0f0f0f;
+   box-sizing: border-box;
+   color: #fff;
+   display: flex;
+   flex-direction: column;
+   font: inherit;
+   justify-content: center;
+   margin: 0;
+   position: relative
```

#### 1220. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13489-L13493` → after: `L14789-L14790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14789-L14790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14789-L14790) · [Before (L13489-L13493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13489-L13493)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayEntry {
-   display: flex;
-   gap: .75rem;
-   justify-content: space-between;
-   padding: .15rem .25rem .1rem
+ .SeasonPassRewardTile.SeasonPassRewardTile-super {
+   background-color: #604c20
```

#### 1221. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13496-L13497` → after: `L14793-L14796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14793-L14796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14793-L14796) · [Before (L13496-L13497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13496-L13497)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayEntry:nth-child(2n) {
-   background: hsla(0, 0%, 51%, .2)
+ .SeasonPassRewardTile.SeasonPassRewardTile-small {
+   gap: 0;
+   height: 2.5rem;
+   width: 2.75rem
```

#### 1222. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13500-L13502` → after: `L14799-L14800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14799-L14800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14799-L14800) · [Before (L13500-L13502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13500-L13502)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayLabel {
-   color: #cfcfcf;
-   white-space: nowrap
+ .SeasonPassRewardTile.SeasonPassRewardTile-small .SeasonPassRewardIcon {
+   font-size: 1.1rem
```

#### 1223. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13505-L13508` → after: `L14803-L14805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14803-L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14803-L14805) · [Before (L13505-L13508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13505-L13508)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayValue {
-   color: #f2f2f2;
-   text-align: right;
-   word-break: break-all
+ .SeasonPassRewardTile.SeasonPassRewardTile-small .SeasonPassRewardTileStateMark,
+ .SeasonPassRewardTile.SeasonPassRewardTile-small .SeasonPassRewardTileSuperMark {
+   font-size: .55rem
```

#### 1224. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13511-L13515` → after: `L14808-L14811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14808-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14808-L14811) · [Before (L13511-L13515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13511-L13515)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle {
-   cursor: pointer;
-   min-width: 2.5rem;
-   padding: 0 .35rem;
-   pointer-events: auto
+ .SeasonPassRewardTile.SeasonPassRewardTile-large {
+   gap: .5rem;
+   min-width: 0;
+   padding: .6rem
```

#### 1225. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13518-L13523` → after: `L14814-L14815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14814-L14815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14814-L14815) · [Before (L13518-L13523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13518-L13523)

```diff
- @media(pointer:coarse) {
-   .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle {
-     box-sizing: border-box;
-     min-height: 44px;
-     min-width: 44px
-   }
+ .SeasonPassRewardTile.SeasonPassRewardTile-large .SeasonPassRewardIcon {
+   font-size: 3.75rem
```

#### 1226. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13526-L13530` → after: `L14818-L14829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14818-L14829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14818-L14829) · [Before (L13526-L13530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13526-L13530)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle {
-   background: hsla(0, 0%, 51%, .35);
-   border: .1rem solid hsla(0, 0%, 51%, .5);
-   color: #a4a4a4;
-   font: inherit
+ .SeasonPassRewardTile.SeasonPassRewardTile-large .SeasonPassRewardTileName {
+   -webkit-line-clamp: 2;
+   -webkit-box-orient: vertical;
+   display: -webkit-box;
+   font-size: .9rem;
+   max-width: 100%;
+   overflow-x: hidden;
+   overflow-y: hidden;
+   text-align: center;
+   text-overflow: ellipsis;
+   white-space: nowrap;
+   white-space: normal
```

#### 1227. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13533-L13536` → after: `L14832-L14848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14832-L14848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14832-L14848) · [Before (L13533-L13536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13533-L13536)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle.DebugOverlayToggleOn {
-   background: #36e785;
-   border-color: #36e785;
-   color: #1a1f2e
+ .SeasonPassRewardTile.SeasonPassRewardTile-large .SeasonPassRewardTilePreview {
+   background: none;
+   border: none;
+   box-sizing: content-box;
+   color: inherit;
+   cursor: pointer;
+   font: inherit;
+   inset: 0;
+   letter-spacing: inherit;
+   line-height: inherit;
+   margin: 0;
+   padding: 0;
+   position: absolute;
+   text-align: inherit;
+   text-shadow: inherit;
+   text-transform: inherit;
+ ... (1 more added lines; see GitHub link above)
```

#### 1228. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13540-L13541` → after: `L14852-L14853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14852-L14853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14852-L14853) · [Before (L13540-L13541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13540-L13541)

```diff
-   .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle:hover {
-     border-color: #ffb914
+   .SeasonPassRewardTile.SeasonPassRewardTile-large .SeasonPassRewardTilePreview:hover {
+     background-color: rgba(57, 73, 128, .4)
```

#### 1229. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13545-L13546` → after: `L14857-L14858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14857-L14858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14857-L14858) · [Before (L13545-L13546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13545-L13546)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle.pad-focused {
-   border-color: #ffb914
+ .SeasonPassRewardTile.SeasonPassRewardTile-large .SeasonPassRewardTilePreview.pad-focused {
+   background-color: rgba(57, 73, 128, .4)
```

#### 1230. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13550-L13551` → after: `L14862-L14863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14862-L14863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14862-L14863) · [Before (L13550-L13551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13550-L13551)

```diff
-   .DebugOverlay .DebugOverlaySection .DebugOverlayEntry .DebugOverlayToggle:active {
-     border-color: #ffb914
+   .SeasonPassRewardTile.SeasonPassRewardTile-large .SeasonPassRewardTilePreview:active {
+     background-color: rgba(57, 73, 128, .4)
```

#### 1231. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13555-L13558` → after: `L14867-L14876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14867-L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14867-L14876) · [Before (L13555-L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13555-L13558)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable {
-   border-collapse: collapse;
-   white-space: nowrap;
-   width: 100%
+ .SeasonPassRewardTile.SeasonPassRewardTile-large .SeasonPassRewardTileClaim {
+   bottom: -1rem;
+   font-size: .95rem;
+   left: 0;
+   margin: 0 auto;
+   padding: .35rem 1.1rem;
+   position: absolute;
+   right: 0;
+   width: max-content;
+   z-index: 1
```

#### 1232. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13561-L13565` → after: `L14879-L14882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14879-L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14879-L14882) · [Before (L13561-L13565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13561-L13565)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable th {
-   border-bottom: .1rem solid hsla(0, 0%, 51%, .2);
-   color: #cfcfcf;
-   font-weight: 600;
-   text-align: left
+ .SeasonPassRewardTile.SeasonPassRewardTile-large .SeasonPassRewardTileSuperMark {
+   font-size: .9rem;
+   right: .4rem;
+   top: .3rem
```

#### 1233. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13568-L13569` → after: `L14885-L14898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14885-L14898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14885-L14898) · [Before (L13568-L13569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13568-L13569)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable td {
-   color: #f2f2f2
+ .SeasonPassRewardTile.SeasonPassRewardTile-large .SeasonPassRewardTileStateMark {
+   align-items: center;
+   background-color: #1dd06d;
+   border: 1px solid #0f0f0f;
+   color: #fff;
+   display: flex;
+   font-size: 1rem;
+   height: 1.85rem;
+   justify-content: center;
+   left: auto;
+   right: -.6rem;
+   top: -.6rem;
+   width: 1.85rem;
+   z-index: 1
```

#### 1234. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13572-L13573` → after: `L14901-L14902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14901-L14902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14901-L14902) · [Before (L13572-L13573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13572-L13573)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable td.DebugOverlayTone-good {
-   color: #36e785
+ .SeasonPassRewardTile.SeasonPassRewardTile-large.SeasonPassRewardTile-claimed>:not(.SeasonPassRewardTileStateMark) {
+   opacity: .55
```

#### 1235. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13576-L13577` → after: `L14905-L14912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14905-L14912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14905-L14912) · [Before (L13576-L13577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13576-L13577)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable td.DebugOverlayTone-bad {
-   color: #fc6464
+ .SeasonPassRewardTile.SeasonPassRewardTile-large .SeasonPassRewardTilePadlock {
+   background-color: #1a1f2e;
+   color: #ffb914;
+   font-size: .95rem;
+   height: 1.85rem;
+   right: -.6rem;
+   top: -.75rem;
+   width: 1.85rem
```

#### 1236. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13580-L13581` → after: `L14915-L14916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14915-L14916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14915-L14916) · [Before (L13580-L13581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13580-L13581)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable td.DebugOverlayTone-notice {
-   color: #4f94f1
+ .SeasonPassRewardTile.SeasonPassRewardTile-large.SeasonPassRewardTile-claimable {
+   background-color: #394980
```

#### 1237. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13584-L13585` → after: `L14919-L14922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14919-L14922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14919-L14922) · [Before (L13584-L13585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13584-L13585)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable td.DebugOverlayTone-warn {
-   color: #ffb914
+ .SeasonPassRewardTile.SeasonPassRewardTile-large.SeasonPassRewardTile-needsSuper {
+   border: 1px solid #0f0f0f;
+   outline: 3px solid #ffb914;
+   outline-offset: 1px
```

#### 1238. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13588-L13590` → after: `L14925-L14928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14925-L14928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14925-L14928) · [Before (L13588-L13590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13588-L13590)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable td,
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable th {
-   padding: .15rem .35rem .1rem .25rem
+ .SeasonPassRewardTile .SeasonPassRewardIcon {
+   align-items: center;
+   display: flex;
+   justify-content: center
```

#### 1239. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13593-L13596` → after: `L14931-L14932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14931-L14932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14931-L14932) · [Before (L13593-L13596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13593-L13596)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable td:not(:first-child),
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable th:not(:first-child) {
-   border-left: .1rem solid hsla(0, 0%, 51%, .15);
-   text-align: right
+ .SeasonPassRewardTile .SeasonPassRewardIcon.SeasonPassRewardIcon-xpBoost {
+   color: #85baff
```

#### 1240. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13599-L13600` → after: `L14935-L14936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14935-L14936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14935-L14936) · [Before (L13599-L13600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13599-L13600)

```diff
- .DebugOverlay .DebugOverlaySection .DebugOverlayTable tbody tr:nth-child(2n) {
-   background: hsla(0, 0%, 51%, .2)
+ .SeasonPassRewardTile .SeasonPassRewardIcon.SeasonPassRewardIcon-cosmetic {
+   color: #fcd373
```

#### 1241. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13603-L13609` → after: `L14939-L14942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14939-L14942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14939-L14942) · [Before (L13603-L13609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13603-L13609)

```diff
- .NotificationToasts {
-   align-items: flex-end;
-   display: flex;
-   flex-direction: column;
-   gap: .5rem;
-   pointer-events: none;
-   transition: opacity .2s
+ .SeasonPassRewardTile .SeasonPassRewardIcon .SeasonPassRewardIconPreview {
+   height: 1.8em;
+   object-fit: contain;
+   width: 1.8em
```

#### 1242. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13612-L13613` → after: `L14945-L14950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14945-L14950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14945-L14950) · [Before (L13612-L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13612-L13613)

```diff
- .NotificationToasts:empty {
-   display: none
+ .SeasonPassRewardTile .SeasonPassRewardTileSuperMark {
+   color: #ffb914;
+   font-size: .65rem;
+   position: absolute;
+   right: .2rem;
+   top: .15rem
```

#### 1243. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13616-L13620` → after: `L14953-L14958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14953-L14958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14953-L14958) · [Before (L13616-L13620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13616-L13620)

```diff
- .NotificationToasts.NotificationToasts-page {
-   position: fixed;
-   right: calc(1rem + var(--notchRight));
-   top: calc(7rem + var(--notchTop));
-   z-index: 16
+ .SeasonPassRewardTile .SeasonPassRewardTileStateMark {
+   color: #cfcfcf;
+   font-size: .65rem;
+   left: .2rem;
+   position: absolute;
+   top: .15rem
```

#### 1244. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13623-L13624` → after: `L14961-L14963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14961-L14963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14961-L14963) · [Before (L13623-L13624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13623-L13624)

```diff
- .NotificationToasts.NotificationToasts-page.NotificationToastsCornerClear {
-   top: calc(1rem + var(--notchTop))
+ .SeasonPassRewardTile.SeasonPassRewardTile-claimed .SeasonPassRewardIcon,
+ .SeasonPassRewardTile.SeasonPassRewardTile-empty .SeasonPassRewardIcon {
+   filter: grayscale(.6) brightness(.6)
```

#### 1245. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13627-L13628` → after: `L14966-L14978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14966-L14978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14966-L14978) · [Before (L13627-L13628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13627-L13628)

```diff
- .NotificationToasts.NotificationToasts-inGame {
-   margin-top: .6rem;
+ .SeasonPassRewardTile .SeasonPassRewardTilePadlock {
+   align-items: center;
+   background-color: #ffb914;
+   border: 1px solid #0f0f0f;
+   color: #1a1f2e;
+   display: flex;
+   font-size: .7rem;
+   height: 1.4rem;
+   justify-content: center;
+   position: absolute;
+   right: -.5rem;
+   top: -.5rem;
+   width: 1.4rem;
```

#### 1246. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13632-L13634` → after: `L14982-L14987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14982-L14987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14982-L14987) · [Before (L13632-L13634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13632-L13634)

```diff
- .NotificationToasts.NotificationToasts-inGame:not(:has(>.NotificationToastContainer:not(.NotificationToastContainer-exit))) {
-   margin-top: 0;
-   transition: opacity .2s, margin-top .25s cubic-bezier(.2, .8, .2, 1) .1s
+ .SeasonPassRewardTile.SeasonPassRewardTile-small .SeasonPassRewardTilePadlock {
+   font-size: .55rem;
+   height: 1.1rem;
+   right: -.4rem;
+   top: -.4rem;
+   width: 1.1rem
```

#### 1247. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13637-L13638` → after: `L14990-L14991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14990-L14991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14990-L14991) · [Before (L13637-L13638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13637-L13638)

```diff
- .NotificationToasts.NotificationToasts-inGame .NotificationToast {
-   max-width: calc(100vw - 8rem - var(--notchLeft) - var(--notchRight))
+ .SeasonPassRewardTile.SeasonPassRewardTile-needsSuper {
+   border: 2px solid #fcd373
```

#### 1248. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13641-L13644` → after: `L14994-L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14994-L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14994-L14996) · [Before (L13641-L13644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13641-L13644)

```diff
- .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons {
-   align-items: stretch;
-   align-self: stretch;
-   gap: 8px
+ .SeasonPassRewardTile.SeasonPassRewardTile-claimable {
+   outline: 3px solid #ffb914;
+   outline-offset: 1px
```

#### 1249. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13647-L13651` → after: `L14999-L15000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR14999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L14999-L15000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L14999-L15000) · [Before (L13647-L13651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13647-L13651)

```diff
- .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastButton,
- .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastClose {
-   justify-content: center;
-   min-width: 44px;
-   position: relative
+ .SeasonPassRewardTile.SeasonPassRewardTile-pressable {
+   cursor: pointer
```

#### 1250. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13654-L13660` → after: `L15003-L15005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15003-L15005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15003-L15005) · [Before (L13654-L13660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13654-L13660)

```diff
- @media(pointer:coarse) {
- 
-   .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastButton:before,
-   .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastClose:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
+ @media(hover:hover) {
+   .SeasonPassRewardTile.SeasonPassRewardTile-pressable:hover {
+     background-color: #394980
```

#### 1251. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13664-L13665` → after: `L15009-L15010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15009-L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15009-L15010) · [Before (L13664-L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13664-L13665)

```diff
- .NotificationToasts.NotificationToastsTouch .NotificationToast .NotificationToastButtons .NotificationToastButton {
-   overflow: visible
+ .SeasonPassRewardTile.SeasonPassRewardTile-pressable.pad-focused {
+   background-color: #394980
```

#### 1252. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13668-L13669` → after: `L15013-L15016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15013-L15016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15013-L15016) · [Before (L13668-L13669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13668-L13669)

```diff
- .NotificationToasts .NotificationToastContainer {
-   position: relative
+ @media(hover:none) {
+   .SeasonPassRewardTile.SeasonPassRewardTile-pressable:active {
+     background-color: #394980
+   }
```

#### 1253. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13672-L13675` → after: `L15019-L15020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15019-L15020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15019-L15020) · [Before (L13672-L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13672-L13675)

```diff
- .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit {
-   opacity: 1;
-   pointer-events: none;
-   transform: translateX(0)
+ .SeasonPassRewardTile.SeasonPassRewardTile-pressable:disabled {
+   cursor: default
```

#### 1254. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13678-L13682` → after: `L15023-L15027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15023-L15027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15023-L15027) · [Before (L13678-L13682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13678-L13682)

```diff
- .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit-active {
-   opacity: 0;
-   pointer-events: none;
-   transform: translateX(1.5rem);
-   transition: opacity .2s ease-in, transform .2s ease-in
+ .SeasonPassRewardIcon .SeasonPassRewardIconEffect {
+   border-radius: 0;
+   display: block;
+   overflow: hidden;
+   position: relative
```

#### 1255. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13685-L13687` → after: `L15030-L15031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15030-L15031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15030-L15031) · [Before (L13685-L13687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13685-L13687)

```diff
- .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit {
-   height: var(--TopRightStackExitHeight);
-   min-height: 0
+ .SeasonPassRewardIcon .SeasonPassRewardIconEffect .PackBackground {
+   font-size: .25em
```

#### 1256. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13690-L13693` → after: `L15034-L15038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15034-L15038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15034-L15038) · [Before (L13690-L13693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13690-L13693)

```diff
- .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit-active {
-   height: 0;
-   margin-top: -.5rem;
-   transition: opacity .2s ease-in, transform .2s ease-in, height .25s cubic-bezier(.2, .8, .2, 1) .1s, margin-top .25s cubic-bezier(.2, .8, .2, 1) .1s, margin-bottom .25s cubic-bezier(.2, .8, .2, 1) .1s
+ .PromptGenericPopup.BrowserTipPopup {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   max-width: min(90vw, 48rem)
```

#### 1257. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13696-L13698` → after: `L15041-L15044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15041-L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15041-L15044) · [Before (L13696-L13698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13696-L13698)

```diff
- .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit-active:first-child {
-   margin-bottom: -.5rem;
-   margin-top: 0
+ .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupIcon {
+   color: #ffb914;
+   font-size: 4rem;
+   padding-bottom: 1rem
```

#### 1258. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13701-L13702` → after: `L15047-L15052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15047-L15052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15047-L15052) · [Before (L13701-L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13701-L13702)

```diff
- .NotificationToasts .NotificationToastContainer.NotificationToastContainer-exit .NotificationToast {
-   pointer-events: none
+ .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupLink {
+   align-items: stretch;
+   display: flex;
+   gap: .6rem;
+   margin-top: .5rem;
+   width: 100%
```

#### 1259. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13705` → after: `L15055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15055) · [Before (L13705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13705)

```diff
- .NotificationToasts .NotificationToast {
+ .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupLink .BrowserTipPopupUrl {
```

#### 1260. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13707-L13715` → after: `L15057-L15058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15057-L15058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15057-L15058) · [Before (L13707-L13715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13707-L13715)

```diff
-   animation-duration: .25s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: topRightStackIn;
-   animation-timing-function: cubic-bezier(.2, .8, .2, 1);
-   background-color: #303a59;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   background-color: rgba(0, 0, 0, .35);
+   border: 1px solid #3c4b68;
```

#### 1261. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13717-L13725` → after: `L15060-L15061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15060-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15060-L15061) · [Before (L13717-L13725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13717-L13725)

```diff
-   gap: .8rem;
-   max-width: calc(100vw - 2rem);
-   min-width: min(300px, 100vw - 8rem - var(--notchLeft) - var(--notchRight));
-   padding: .6rem .6rem .6rem .9rem;
-   pointer-events: auto;
-   width: 30rem
- }
- 
- .NotificationToasts .NotificationToast.NotificationToastMessage {
+   flex: 1 1;
+   font-size: 1.2rem;
```

#### 1262. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13727-L13728` → after: `L15063-L15067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15063-L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15063-L15067) · [Before (L13727-L13728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13727-L13728)

```diff
-   padding: .7rem 1.1rem;
-   width: auto
+   overflow-wrap: anywhere;
+   padding: .5rem .8rem;
+   text-align: left;
+   -webkit-user-select: text;
+   user-select: text
```

#### 1263. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13731-L13734` → after: `L15070-L15073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15070-L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15070-L15073) · [Before (L13731-L13734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13731-L13734)

```diff
- .NotificationToasts .NotificationToast .NotificationToastIcon {
-   color: #ffb914;
-   flex: 0 0 auto;
-   font-size: max(1.6rem, 15px)
+ .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupLink .BrowserTipPopupCopyButton {
+   flex-shrink: 0;
+   font-size: 1.4rem;
+   white-space: nowrap
```

#### 1264. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13737-L13750` → after: `L15076-L15078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15076-L15078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15076-L15078) · [Before (L13737-L13750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13737-L13750)

```diff
- .NotificationToasts .NotificationToast .NotificationToastText {
-   -webkit-line-clamp: 3;
-   -webkit-box-orient: vertical;
-   display: -webkit-box;
-   flex: 1 1 auto;
-   font-size: max(1.1rem, 13px);
-   font-weight: 700;
-   min-width: 0;
-   overflow-wrap: anywhere;
-   overflow-x: hidden;
-   overflow-y: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap;
-   white-space: normal
+ .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupStatus {
+   font-size: 1.2rem;
+   padding-top: .6rem
```

#### 1265. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13753-L13755` → after: `L15081-L15087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15081-L15087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15081-L15087) · [Before (L13753-L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13753-L13755)

```diff
- .NotificationToasts .NotificationToast.NotificationToastNamed .NotificationToastText {
-   display: block;
-   overflow-wrap: normal
+ .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupNeverShow {
+   align-items: center;
+   cursor: pointer;
+   display: flex;
+   font-size: 1.1rem;
+   gap: .5rem;
+   padding-top: 1.2rem
```

#### 1266. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13758-L13761` → after: `L15090-L15096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15090-L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15090-L15096) · [Before (L13758-L13761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13758-L13761)

```diff
- .NotificationToasts .NotificationToast.NotificationToastNamed .NotificationToastText .NotificationToastName {
-   font-weight: 900;
-   overflow-x: hidden;
-   text-overflow: ellipsis;
+ .rc-checkbox {
+   --checkbox-colour: #2e80ee;
+   cursor: pointer;
+   display: inline-block;
+   line-height: 1;
+   outline: none;
+   position: relative;
```

#### 1267. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13765-L13775` → after: `L15100-L15101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15100-L15101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15100-L15101) · [Before (L13765-L13775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13765-L13775)

```diff
- .NotificationToasts .NotificationToast.NotificationToastNamed .NotificationToastText .NotificationToastStatus {
-   -webkit-line-clamp: 2;
-   -webkit-box-orient: vertical;
-   color: #cfcfcf;
-   display: -webkit-box;
-   overflow-wrap: break-word;
-   overflow-x: hidden;
-   overflow-y: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap;
-   white-space: normal
+ .rc-checkbox:hover .rc-checkbox-inner {
+   border-color: #4f94f1
```

#### 1268. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13778-L13782` → after: `L15104-L15133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15104-L15133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15104-L15133) · [Before (L13778-L13782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13778-L13782)

```diff
- .NotificationToasts .NotificationToast .NotificationToastButtons {
-   align-items: center;
-   display: flex;
-   flex: 0 0 auto;
-   gap: .3rem
+ .rc-checkbox-input:focus-visible+.rc-checkbox-inner {
+   outline: 2px solid #ffb914;
+   outline-offset: 2px
+ }
+ 
+ .rc-checkbox-inner {
+   background-color: #1a1f2e;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   display: inline-block;
+   height: 14px;
+   left: 0;
+   position: relative;
+   top: 0;
+   width: 14px
+ }
+ ... (14 more added lines; see GitHub link above)
```

#### 1269. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13785-L13787` → after: `L15136-L15144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15136-L15144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15136-L15144) · [Before (L13785-L13787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13785-L13787)

```diff
- .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastButton {
-   box-shadow: none;
-   font-size: 1rem
+ .rc-checkbox-input {
+   bottom: 0;
+   cursor: pointer;
+   left: 0;
+   opacity: 0;
+   position: absolute;
+   right: 0;
+   top: 0;
+   z-index: 9999
```

#### 1270. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13790-L13793` → after: `L15147-L15148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15147-L15148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15147-L15148) · [Before (L13790-L13793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13790-L13793)

```diff
- .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastButton .ButtonBody {
-   align-items: center;
-   display: flex;
-   gap: .6rem
+ .rc-checkbox-checked:hover .rc-checkbox-inner {
+   border-color: var(--checkbox-colour)
```

#### 1271. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13796-L13797` → after: `L15151-L15153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15151-L15153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15151-L15153) · [Before (L13796-L13797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13796-L13797)

```diff
- .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastButton.NotificationToastAnswer {
-   font-size: 1.1rem
+ .rc-checkbox-checked .rc-checkbox-inner {
+   background-color: var(--checkbox-colour);
+   border-color: var(--checkbox-colour)
```

#### 1272. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13800-L13810` → after: `L15156-L15158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15156-L15158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15156-L15158) · [Before (L13800-L13810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13800-L13810)

```diff
- .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose {
-   align-items: center;
-   background: none;
-   border: none;
-   color: #cfcfcf;
-   cursor: pointer;
-   display: flex;
-   font-family: inherit;
-   font-size: 1.2rem;
-   gap: .4rem;
-   padding: .4rem .5rem
+ .rc-checkbox-checked .rc-checkbox-inner:after {
+   border-color: #fff;
+   opacity: 1
```

#### 1273. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13813-L13815` → after: `L15161-L15163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15161-L15163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15161-L15163) · [Before (L13813-L13815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13813-L13815)

```diff
- @media(hover:hover) {
-   .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose:hover {
-     color: #ff8a80
+ @media print {
+   .rc-checkbox-checked .rc-checkbox-inner {
+     box-shadow: inset 0 0 0 16px var(--checkbox-colour)
```

#### 1274. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13819-L13826` → after: `L15167-L15168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15167-L15168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15167-L15168) · [Before (L13819-L13826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13819-L13826)

```diff
- .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose.pad-focused {
-   color: #ff8a80
- }
- 
- @media(hover:none) {
-   .NotificationToasts .NotificationToast .NotificationToastButtons .NotificationToastClose:active {
-     color: #ff8a80
-   }
+ .rc-checkbox-disabled.rc-checkbox-checked:hover .rc-checkbox-inner {
+   border-color: #cfcfcf
```

#### 1275. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13829-L13830` → after: `L15171-L15173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15171-L15173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15171-L15173) · [Before (L13829-L13830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13829-L13830)

```diff
- .NotificationToasts .NotificationToast .NotificationToastButtons .KeyboardButtonRepresentation {
-   font-size: .8rem
+ .rc-checkbox-disabled.rc-checkbox-checked .rc-checkbox-inner {
+   background-color: #f2f2f2;
+   border-color: #cfcfcf
```

#### 1276. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13833-L13839` → after: `L15176-L15177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15176-L15177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15176-L15177) · [Before (L13833-L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13833-L13839)

```diff
- .UiRequests {
-   align-items: flex-end;
-   display: flex;
-   flex-direction: column;
-   gap: .5rem;
-   pointer-events: auto;
-   z-index: 1
+ .rc-checkbox-disabled.rc-checkbox-checked .rc-checkbox-inner:after {
+   border-color: #cfcfcf
```

#### 1277. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13842-L13852` → after: `L15180-L15182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15180-L15182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15180-L15182) · [Before (L13842-L13852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13842-L13852)

```diff
- @media(orientation:portrait)and (max-width:600px) {
-   .UiRequests {
-     max-width: calc(65vw - 1rem)
-   }
- 
-   .UiRequests .UiRequestText {
-     overflow-wrap: anywhere
-   }
- 
-   .UiRequests .UiRequestText .TextFromServerEntityName {
-     white-space: normal
+ @media print {
+   .rc-checkbox-disabled.rc-checkbox-checked .rc-checkbox-inner {
+     box-shadow: inset 0 0 0 16px #f2f2f2
```

#### 1278. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13856-L13866` → after: `L15186-L15187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15186-L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15186-L15187) · [Before (L13856-L13866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13856-L13866)

```diff
- .UiRequests .UiRequestContainer.UiRequestContainer-exit {
-   opacity: 1;
-   pointer-events: none;
-   transform: translateX(0)
- }
- 
- .UiRequests .UiRequestContainer.UiRequestContainer-exit-active {
-   opacity: 0;
-   pointer-events: none;
-   transform: translateX(1.5rem);
-   transition: opacity .2s ease-in, transform .2s ease-in
+ .rc-checkbox-disabled:hover .rc-checkbox-inner {
+   border-color: #cfcfcf
```

#### 1279. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13869-L13871` → after: `L15190-L15192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15190-L15192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15190-L15192) · [Before (L13869-L13871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13869-L13871)

```diff
- .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer {
-   animation: shake 3s infinite;
-   animation-delay: 6s
+ .rc-checkbox-disabled .rc-checkbox-inner {
+   background-color: #f2f2f2;
+   border-color: #cfcfcf
```

#### 1280. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13874-L13878` → after: `L15195-L15196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15195-L15196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15195-L15196) · [Before (L13874-L13878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13874-L13878)

```diff
- .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer .UiRequest .UiRequestInner {
-   animation: shine 4s linear infinite;
-   background: linear-gradient(110deg, #303a59, #303a59 2rem, #394980 0, #394980 4rem, #303a59 0, #303a59);
-   background-position: -4rem 0;
-   background-size: calc(200% + 4rem) 100%
+ .rc-checkbox-disabled .rc-checkbox-inner-input {
+   cursor: default
```

#### 1281. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13881` → after: `L15199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15199) · [Before (L13881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13881)

```diff
- @keyframes shine {
+ @keyframes amCheckboxIn {
```

#### 1282. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13883-L13887` → after: `L15201-L15203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15201-L15203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15201-L15203) · [Before (L13883-L13887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13883-L13887)

```diff
-     background-position: -4rem 0
-   }
- 
-   12.5% {
-     background-position: -100% 0
+     opacity: 0;
+     transform: scale(0) rotate(45deg);
+     transform-origin: 50% 50%
```

#### 1283. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13891` → after: `L15207-L15209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15207-L15209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15207-L15209) · [Before (L13891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13891)

```diff
-     background-position: -100% 0
+     opacity: 1;
+     transform: scale(1) rotate(45deg);
+     transform-origin: 50% 50%
```

#### 1284. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13895-L13897` → after: `L15213-L15216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15213-L15216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15213-L15216) · [Before (L13895-L13897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13895-L13897)

```diff
- .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer .UiRequest .UiRequestInner {
-   border-color: #ffb914
- }
+ @keyframes amCheckboxOut {
+   0% {
+     opacity: 1
+   }
```

#### 1285. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13899-L13904` → after: `L15218-L15220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15218-L15220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15218-L15220) · [Before (L13899-L13904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13899-L13904)

```diff
- .UiRequests .UiRequestContainer .UiRequest {
-   animation-duration: .25s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: topRightStackIn;
-   animation-timing-function: cubic-bezier(.2, .8, .2, 1)
+   to {
+     opacity: 0
+   }
```

#### 1286. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13907` → after: `L15223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15223) · [Before (L13907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13907)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner {
+ .RouterError {
```

#### 1287. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13909-L13912` → after: `L15225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15225) · [Before (L13909-L13912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13909-L13912)

```diff
-   background-color: #303a59;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   box-sizing: border-box;
```

#### 1288. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13914-L13918` → after: `L15227-L15236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15227-L15236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15227-L15236) · [Before (L13914-L13918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13914-L13918)

```diff
-   gap: .5rem;
-   justify-content: flex-start;
-   overflow: hidden;
-   padding: .5rem 1rem .5rem .5rem;
-   position: relative
+   flex-direction: column;
+   gap: 1rem;
+   height: 100vh;
+   height: 100dvh;
+   justify-content: center;
+   overflow: auto;
+   padding: 2rem 0;
+   position: relative;
+   width: 100vw;
+   z-index: 23
```

#### 1289. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13921` → after: `L15239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15239) · [Before (L13921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13921)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay {
+ .RouterError .RouterErrorIcons {
```

#### 1290. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13924-L13932` → after: `L15242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15242) · [Before (L13924-L13932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13924-L13932)

```diff
-   gap: 1rem;
-   height: 100%;
-   justify-content: center;
-   left: 0;
-   pointer-events: none;
-   position: absolute;
-   top: 0;
-   width: 100%;
-   z-index: 2
+   gap: .5rem
```

#### 1291. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13935-L13936` → after: `L15245-L15247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15245-L15247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15245-L15247) · [Before (L13935-L13936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13935-L13936)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlayDefault {
-   background-color: transparent
+ .RouterError .RouterErrorIcons .svg-inline--fa {
+   color: #a4a4a4;
+   font-size: 4rem
```

#### 1292. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13939-L13940` → after: `L15250-L15271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15250-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15250-L15271) · [Before (L13939-L13940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13939-L13940)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlayLoading {
-   background-color: rgba(48, 58, 89, .9);
+ .RouterError .RouterErrorIcons .svg-inline--fa:nth-of-type(2) {
+   font-size: 6rem
+ }
+ 
+ .RouterError h1 {
+   color: #cfcfcf;
+   font-size: 3rem;
+   margin: 0
+ }
+ 
+ .RouterError h2 {
+   color: #cfcfcf;
+   font-size: 1.5rem;
+   margin: 0
+ }
+ 
+ ... (6 more added lines; see GitHub link above)
```

#### 1293. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13944-L13945` → after: `L15275-L15281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15275-L15281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15275-L15281) · [Before (L13944-L13945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13944-L13945)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess {
-   background-color: rgba(48, 58, 89, .9)
+ .CopyErrorBox {
+   align-items: stretch;
+   border-radius: 0;
+   display: flex;
+   flex-direction: column;
+   justify-content: center;
+   white-space: pre
```

#### 1294. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13948-L13950` → after: `L15284-L15298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15284-L15298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15284-L15298) · [Before (L13948-L13950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13948-L13950)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess .UiRequestSuccessOverlayIcon {
-   font-size: 2rem;
-   position: relative
+ .CopyErrorBox .CopyErrorBoxBody {
+   background-color: rgba(49, 12, 0, .3);
+   box-sizing: border-box;
+   color: #ff8a80;
+   display: inline-block;
+   font-size: 1em;
+   font-weight: 700;
+   margin: 0;
+   max-height: 8em;
+   overflow-x: hidden;
+   overflow-y: auto;
+   padding: .75em 1em;
+   text-align: left;
+   width: 100%;
+   word-break: break-all
```

#### 1295. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13953-L13955` → after: `L15301-L15323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15301-L15323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15301-L15323) · [Before (L13953-L13955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13953-L13955)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess .UiRequestSuccessOverlayText {
-   font-size: 1.3rem;
-   font-weight: 700
+ .CopyErrorBox .CopyErrorBoxButton {
+   font-size: 1.5em
+ }
+ 
+ .CenteredDiv {
+   align-items: flex-end;
+   animation-duration: .3s;
+   animation-duration: .2s;
+   animation-fill-mode: backwards;
+   animation-iteration-count: 1;
+   animation-name: fadeIn;
+   display: flex;
+   flex-direction: column;
+   flex-grow: 1;
+   flex-wrap: nowrap;
+   font-weight: 700;
+ ... (7 more added lines; see GitHub link above)
```

#### 1296. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13958-L13959` → after: `L15326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15326) · [Before (L13958-L13959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13958-L13959)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestLeft {
-   align-items: center;
+ .CenteredDiv .GameListDiscordAction {
```

#### 1297. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13961-L13962` → after: `L15328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15328) · [Before (L13961-L13962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13961-L13962)

```diff
-   font-size: 3rem;
-   height: 5rem;
+   font-size: 1.4rem;
```

#### 1298. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13964-L13971` → after: `L15330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15330) · [Before (L13964-L13971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13964-L13971)

```diff
-   width: 5rem
- }
- 
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight {
-   align-items: stretch;
-   display: flex;
-   flex-direction: column;
-   gap: .5rem
+   width: 100%
```

#### 1299. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13974-L13978` → after: `L15333-L15337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15333-L15337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15333-L15337) · [Before (L13974-L13978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13974-L13978)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestText {
-   font-size: 1.3rem;
-   font-weight: 700;
-   margin-right: auto;
-   padding: .25rem 1.25rem .25rem .4rem
+ .CenteredDiv .PlayButtonLoadingText {
+   font-size: 1.8rem;
+   margin-bottom: 3.5rem;
+   margin-top: 2.3rem;
+   position: absolute
```

#### 1300. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13981-L13982` → after: `L15340-L15341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15340-L15341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15340-L15341) · [Before (L13981-L13982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13981-L13982)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList {
-   align-items: center;
+ .CenteredDiv .CenteredDivMiddle {
+   align-items: flex-start;
```

#### 1301. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13984-L13989` → after: `L15343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15343) · [Before (L13984-L13989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13984-L13989)

```diff
-   gap: .5rem;
-   justify-content: center
- }
- 
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton {
-   box-shadow: none;
+   flex-direction: column;
```

#### 1302. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13991-L13992` → after: `L15345-L15349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15345-L15349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15345-L15349) · [Before (L13991-L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13991-L13992)

```diff
-   font-size: 1rem;
-   font-weight: 700
+   justify-content: flex-start;
+   padding-bottom: 2rem;
+   position: relative;
+   width: 100%;
+   z-index: 2
```

#### 1303. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13995` → after: `L15352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15352) · [Before (L13995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13995)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton .ButtonBody {
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer {
```

#### 1304. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L13998-L13999` → after: `L15355-L15362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15355-L15362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15355-L15362) · [Before (L13998-L13999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L13998-L13999)

```diff
-   gap: 1rem;
-   justify-content: center
+   flex-direction: column;
+   gap: 1.5rem;
+   height: 100%;
+   justify-content: flex-start;
+   padding-top: 8rem;
+   position: absolute;
+   width: 100%;
+   z-index: 3
```

#### 1305. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14002-L14003` → after: `L15365-L15368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15365-L15368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15365-L15368) · [Before (L14002-L14003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14002-L14003)

```diff
- .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton .KeyboardButtonRepresentation {
-   font-size: .8rem
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown {
+   height: 4rem;
+   position: relative;
+   width: 100%
```

#### 1306. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14006` → after: `L15371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15371) · [Before (L14006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14006)

```diff
- @keyframes chestShake {
+ @keyframes crownPulse {
```

#### 1307. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14008-L14012` → after: `L15373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15373) · [Before (L14008-L14012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14008-L14012)

```diff
-     transform: translateX(-50%) rotate(6deg)
-   }
- 
-   25% {
-     transform: translateX(-50%) rotate(-4deg)
+     transform: translateY(0) translateX(-50%)
```

#### 1308. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14016-L14031` → after: `L15377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15377) · [Before (L14016-L14031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14016-L14031)

```diff
-     transform: translateX(-50%) rotate(6deg)
-   }
- 
-   75% {
-     transform: translateX(-50%) rotate(-4deg)
-   }
- 
-   to {
-     transform: translateX(-50%) rotate(0)
-   }
- }
- 
- @keyframes pop {
-   0% {
-     bottom: 0;
-     opacity: 0
+     transform: translateY(-10%) translateX(-50%)
```

#### 1309. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14035-L14036` → after: `L15381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15381) · [Before (L14035-L14036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14035-L14036)

```diff
-     bottom: 1.5rem;
-     opacity: 0
+     transform: translateY(0) translateX(-50%)
```

#### 1310. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14040-L14048` → after: `L15385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15385) · [Before (L14040-L14048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14040-L14048)

```diff
- .ChestContainer {
-   height: 5.5rem;
-   position: relative;
-   width: 5rem
- }
- 
- .ChestContainer .ChestImage {
-   -ms-interpolation-mode: nearest-neighbor;
-   animation: chestShake .4s 3;
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .WaitingForPartyLeaderCrownInner {
```

#### 1311. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14050-L14053` → after: `L15387-L15388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15387-L15388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15387-L15388) · [Before (L14050-L14053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14050-L14053)

```diff
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast;
+   display: flex;
+   justify-content: center;
```

#### 1312. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14056-L14059` → after: `L15391-L15393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15391-L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15391-L15393) · [Before (L14056-L14059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14056-L14059)

```diff
-   transform: translateX(-50%);
-   transform-origin: center center;
-   transition: width .2s;
-   width: 4rem
+   transform: translateY(0) translateX(-50%);
+   transition: transform .2s;
+   z-index: 2
```

#### 1313. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14062-L14063` → after: `L15396-L15399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15396-L15399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15396-L15399) · [Before (L14062-L14063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14062-L14063)

```diff
- .ChestContainer .ChestImage.ChestImageSmall {
-   width: 2.5rem
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .WaitingForPartyLeaderCrownInner.CrownAnimate {
+   animation-duration: 2s;
+   animation-iteration-count: infinite;
+   animation-name: crownPulse
```

#### 1314. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14066-L14078` → after: `L15402-L15404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15402-L15404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15402-L15404) · [Before (L14066-L14078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14066-L14078)

```diff
- .ChestContainer .ChestShine {
-   animation-delay: .2s;
-   animation-duration: .2s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: fadeInScaleUp;
-   bottom: 1rem;
-   clip-path: polygon(0 0, 100% 0, 70% 100%, 30% 100%);
-   height: 2.5rem;
-   isolation: isolate;
-   left: calc(50% - 1.9rem);
-   position: absolute;
-   width: 3.8rem
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .WaitingForPartyLeaderCrownInner .svg-inline--fa {
+   font-size: 4rem;
+   transition: transform .1s
```

#### 1315. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14081-L14087` → after: `L15407-L15408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15407-L15408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15407-L15408) · [Before (L14081-L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14081-L14087)

```diff
- .ChestContainer .ChestShine .ChestShineBackground {
-   background: linear-gradient(0, rgba(255, 185, 20, .8), rgba(255, 185, 20, 0));
-   bottom: 0;
-   height: 100%;
-   left: 0;
-   position: absolute;
-   width: 100%
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .WaitingForPartyLeaderCrownInner.CrownEasterEggGold .svg-inline--fa {
+   color: #ffb914
```

#### 1316. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14090-L14091` → after: `L15411-L15416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15411-L15416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15411-L15416) · [Before (L14090-L14091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14090-L14091)

```diff
- .ChestContainer .RewardItemsContainer {
-   align-items: center;
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .WaitingForPartyLeaderCrownInner.CrownEasterEggPurple .svg-inline--fa {
+   color: #9b39d5
+ }
+ 
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .EasterEggCrown {
+   bottom: 0;
```

#### 1317. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14096` → after: `L15419-L15421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15419-L15421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15419-L15421) · [Before (L14096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14096)

```diff
-   left: 0;
+   left: 50%;
+   pointer-events: none;
+   position: relative;
```

#### 1318. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14098-L14099` → after: `L15423-L15425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15423-L15425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15423-L15425) · [Before (L14098-L14099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14098-L14099)

```diff
-   top: 0;
-   width: 100%
+   transform: translateY(0) translateX(-50%);
+   transition: transform .2s;
+   z-index: 3
```

#### 1319. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14102-L14107` → after: `L15428-L15431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15428-L15431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15428-L15431) · [Before (L14102-L14107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14102-L14107)

```diff
- .ChestContainer .RewardItemsContainer .RewardItem {
-   font-size: 1.5rem;
-   height: 100%;
-   position: relative;
-   transform-origin: center bottom;
-   width: 0
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .EasterEggCrown .svg-inline--fa {
+   color: #9b39d5;
+   font-size: 4rem;
+   transition: transform .1s
```

#### 1320. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14110-L14112` → after: `L15434-L15435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15434-L15435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15434-L15435) · [Before (L14110-L14112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14110-L14112)

```diff
- .ChestContainer .RewardItemsContainer .RewardItem.RewardItemShow .TextFromServer {
-   bottom: .25rem;
-   opacity: 1
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .EasterEggCrown.CrownEasterEggGold .svg-inline--fa {
+   color: #ffb914
```

#### 1321. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14115-L14121` → after: `L15438-L15439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15438-L15439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15438-L15439) · [Before (L14115-L14121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14115-L14121)

```diff
- .ChestContainer .RewardItemsContainer .RewardItem .TextFromServer {
-   bottom: -1rem;
-   opacity: 0;
-   position: absolute;
-   transform: translateX(-50%);
-   transition: opacity .4s, bottom .4s;
-   transition-delay: .2s
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .EasterEggCrown.CrownEasterEggPurple .svg-inline--fa {
+   color: #9b39d5
```

#### 1322. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14124-L14128` → after: `L15442-L15448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15442-L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15442-L15448) · [Before (L14124-L14128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14124-L14128)

```diff
- .PromptGenericPopup.BrowserTipPopup {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   max-width: min(90vw, 48rem)
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderText {
+   -webkit-backdrop-filter: blur(.5rem);
+   backdrop-filter: blur(.5rem);
+   background-color: rgba(155, 57, 213, .45);
+   border-radius: 0;
+   font-size: 2rem;
+   padding: 1rem 3rem
```

#### 1323. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14131-L14134` → after: `L15451-L15454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15451-L15454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15451-L15454) · [Before (L14131-L14134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14131-L14134)

```diff
- .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupIcon {
-   color: #ffb914;
-   font-size: 4rem;
-   padding-bottom: 1rem
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderActions {
+   display: flex;
+   font-size: 1.4rem;
+   gap: 1rem
```

#### 1324. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14137-L14138` → after: `L15457-L15458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15457-L15458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15457-L15458) · [Before (L14137-L14138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14137-L14138)

```diff
- .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupLink {
-   align-items: stretch;
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderActions .RedButton {
+   align-items: center;
```

#### 1325. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14140-L14142` → after: `L15460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15460) · [Before (L14140-L14142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14140-L14142)

```diff
-   gap: .6rem;
-   margin-top: .5rem;
-   width: 100%
+   justify-content: center
```

#### 1326. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14145` → after: `L15463-L15467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15463-L15467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15463-L15467) · [Before (L14145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14145)

```diff
- .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupLink .BrowserTipPopupUrl {
+ .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderActions .RedButton .ButtonBody {
+   padding: 0 1rem
+ }
+ 
+ .CenteredDiv .CenteredDivMiddle .GameList {
```

#### 1327. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14150-L14157` → after: `L15470-L15473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15470-L15473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15470-L15473) · [Before (L14150-L14157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14150-L14157)

```diff
-   flex: 1 1;
-   font-size: 1.2rem;
-   min-width: 0;
-   overflow-wrap: anywhere;
-   padding: .5rem .8rem;
-   text-align: left;
-   -webkit-user-select: text;
-   user-select: text
+   flex-wrap: wrap;
+   justify-content: center;
+   width: 100%;
+   z-index: 2
```

#### 1328. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14160-L14163` → after: `L15476-L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15476-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15476-L15477) · [Before (L14160-L14163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14160-L14163)

```diff
- .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupLink .BrowserTipPopupCopyButton {
-   flex-shrink: 0;
-   font-size: 1.4rem;
-   white-space: nowrap
+ .CenteredDiv .CenteredDivMiddle .RecentlyPlayedGameList {
+   margin-bottom: .5rem
```

#### 1329. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14166-L14168` → after: `L15480-L15493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15480-L15493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15480-L15493) · [Before (L14166-L14168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14166-L14168)

```diff
- .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupStatus {
-   font-size: 1.2rem;
-   padding-top: .6rem
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel,
+ .CenteredDiv .CenteredDivMiddle .RecentlyPlayedGameList {
+   margin-right: calc(var(--home-inner-padding-right, 0px)*-1);
+   width: calc(100% + var(--home-inner-padding-right, 0px))
+ }
+ 
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel {
+   --carousel-page-peek: 0.5rem
+ }
+ 
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .CarouselTrack {
+   align-items: flex-start;
+   margin-block: -.5rem;
+   padding-block: .5rem
```

#### 1330. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14171-L14173` → after: `L15496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15496) · [Before (L14171-L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14171-L14173)

```diff
- .PromptGenericPopup.BrowserTipPopup .BrowserTipPopupNeverShow {
-   align-items: center;
-   cursor: pointer;
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage {
```

#### 1331. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14175-L14177` → after: `L15498-L15500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15498-L15500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15498-L15500) · [Before (L14175-L14177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14175-L14177)

```diff
-   font-size: 1.1rem;
-   gap: .5rem;
-   padding-top: 1.2rem
+   flex-direction: column;
+   justify-content: flex-start;
+   width: calc(100% - var(--carousel-page-peek))
```

#### 1332. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14180-L14187` → after: `L15503-L15504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15503-L15504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15503-L15504) · [Before (L14180-L14187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14180-L14187)

```diff
- .rc-checkbox {
-   --checkbox-colour: #2e80ee;
-   cursor: pointer;
-   display: inline-block;
-   line-height: 1;
-   outline: none;
-   position: relative;
-   white-space: nowrap
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .GameListRow {
+   justify-content: flex-start
```

#### 1333. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14190-L14191` → after: `L15507-L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15507-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15507-L15523) · [Before (L14190-L14191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14190-L14191)

```diff
- .rc-checkbox:hover .rc-checkbox-inner {
-   border-color: #4f94f1
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead10>:nth-child(-n+10),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead11>:nth-child(-n+11),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead12>:nth-child(-n+12),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead13>:nth-child(-n+13),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead14>:nth-child(-n+14),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead15>:nth-child(-n+15),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead16>:nth-child(-n+16),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead1>:nth-child(-n+1),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead2>:nth-child(-n+2),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead3>:nth-child(-n+3),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead4>:nth-child(-n+4),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead5>:nth-child(-n+5),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead6>:nth-child(-n+6),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead7>:nth-child(-n+7),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead8>:nth-child(-n+8),
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead9>:nth-child(-n+9) {
+ ... (1 more added lines; see GitHub link above)
```

#### 1334. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14194-L14196` → after: `L15526-L15529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15526-L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15526-L15529) · [Before (L14194-L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14194-L14196)

```diff
- .rc-checkbox-input:focus-visible+.rc-checkbox-inner {
-   outline: 2px solid #ffb914;
-   outline-offset: 2px
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage.GameListCarouselPagePortrait {
+   align-items: flex-start;
+   flex-direction: row;
+   flex-wrap: wrap
```

#### 1335. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14199-L14208` → after: `L15532-L15533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15532-L15533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15532-L15533) · [Before (L14199-L14208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14199-L14208)

```diff
- .rc-checkbox-inner {
-   background-color: #1a1f2e;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   display: inline-block;
-   height: 14px;
-   left: 0;
-   position: relative;
-   top: 0;
-   width: 14px
+ .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage.GameListCarouselPagePortrait .GameListRow {
+   display: contents
```

#### 1336. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14211-L14223` → after: `L15536-L15541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15536-L15541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15536-L15541) · [Before (L14211-L14223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14211-L14223)

```diff
- .rc-checkbox-inner:after {
-   border: 2px solid #fff;
-   border-left: 0;
-   border-top: 0;
-   content: " ";
-   display: table;
-   height: 8px;
-   left: 4px;
-   opacity: 0;
-   position: absolute;
-   top: 1px;
-   transform: rotate(45deg);
-   width: 5px
+ .CenteredDiv .CenteredDivMiddle .TopCustomGameList {
+   align-items: flex-start;
+   display: flex;
+   flex-direction: column;
+   margin-bottom: .4rem;
+   width: 100%
```

#### 1337. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14226-L14234` → after: `L15544-L15545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15544-L15545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15544-L15545) · [Before (L14226-L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14226-L14234)

```diff
- .rc-checkbox-input {
-   bottom: 0;
-   cursor: pointer;
-   left: 0;
-   opacity: 0;
-   position: absolute;
-   right: 0;
-   top: 0;
-   z-index: 9999
+ .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListHeading {
+   margin: 0
```

#### 1338. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14237-L14238` → after: `L15548-L15556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15548-L15556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15548-L15556) · [Before (L14237-L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14237-L14238)

```diff
- .rc-checkbox-checked:hover .rc-checkbox-inner {
-   border-color: var(--checkbox-colour)
+ .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle {
+   align-items: center;
+   cursor: pointer;
+   display: flex;
+   font-size: 1.2rem;
+   font-weight: 800;
+   gap: .25rem;
+   margin: 0;
+   padding-left: .5rem
```

#### 1339. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14241-L14243` → after: `L15559-L15560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15559-L15560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15559-L15560) · [Before (L14241-L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14241-L14243)

```diff
- .rc-checkbox-checked .rc-checkbox-inner {
-   background-color: var(--checkbox-colour);
-   border-color: var(--checkbox-colour)
+ .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle.TopCustomGameListTitleStatic {
+   cursor: default
```

#### 1340. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14246-L14248` → after: `L15563-L15566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15563-L15566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15563-L15566) · [Before (L14246-L14248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14246-L14248)

```diff
- .rc-checkbox-checked .rc-checkbox-inner:after {
-   border-color: #fff;
-   opacity: 1
+ .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle .svg-inline--fa {
+   color: #ffb914;
+   transform: rotate(90deg);
+   transition: translate .2s
```

#### 1341. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14251-L14253` → after: `L15569-L15571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15569-L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15569-L15571) · [Before (L14251-L14253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14251-L14253)

```diff
- @media print {
-   .rc-checkbox-checked .rc-checkbox-inner {
-     box-shadow: inset 0 0 0 16px var(--checkbox-colour)
+ @media(hover:hover) {
+   .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle:hover .svg-inline--fa {
+     translate: .25rem 0
```

#### 1342. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14257-L14258` → after: `L15575-L15576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15575-L15576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15575-L15576) · [Before (L14257-L14258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14257-L14258)

```diff
- .rc-checkbox-disabled.rc-checkbox-checked:hover .rc-checkbox-inner {
-   border-color: #cfcfcf
+ .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle.pad-focused .svg-inline--fa {
+   translate: .25rem 0
```

#### 1343. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14261-L14263` → after: `L15579-L15581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15579-L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15579-L15581) · [Before (L14261-L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14261-L14263)

```diff
- .rc-checkbox-disabled.rc-checkbox-checked .rc-checkbox-inner {
-   background-color: #f2f2f2;
-   border-color: #cfcfcf
+ .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle[data-pressing] {
+   color: #ffb914;
+   transition: none
```

#### 1344. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14266-L14267` → after: `L15584-L15590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15584-L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15584-L15590) · [Before (L14266-L14267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14266-L14267)

```diff
- .rc-checkbox-disabled.rc-checkbox-checked .rc-checkbox-inner:after {
-   border-color: #cfcfcf
+ .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListInner {
+   align-items: stretch;
+   display: flex;
+   flex-wrap: wrap;
+   justify-content: flex-start;
+   position: relative;
+   width: 100%
```

#### 1345. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14270-L14273` → after: `L15593-L15595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15593-L15595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15593-L15595) · [Before (L14270-L14273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14270-L14273)

```diff
- @media print {
-   .rc-checkbox-disabled.rc-checkbox-checked .rc-checkbox-inner {
-     box-shadow: inset 0 0 0 16px #f2f2f2
-   }
+ .Carousel {
+   position: relative;
+   width: 100%
```

#### 1346. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14276-L14277` → after: `L15598-L15608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15598-L15608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15598-L15608) · [Before (L14276-L14277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14276-L14277)

```diff
- .rc-checkbox-disabled:hover .rc-checkbox-inner {
-   border-color: #cfcfcf
+ .Carousel .CarouselTrack {
+   -webkit-overflow-scrolling: touch;
+   align-items: stretch;
+   box-sizing: border-box;
+   display: flex;
+   flex-wrap: nowrap;
+   overflow-x: auto;
+   overflow-y: hidden;
+   scroll-behavior: smooth;
+   scrollbar-width: none;
+   width: 100%
```

#### 1347. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14280-L14282` → after: `L15611-L15613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15611-L15613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15611-L15613) · [Before (L14280-L14282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14280-L14282)

```diff
- .rc-checkbox-disabled .rc-checkbox-inner {
-   background-color: #f2f2f2;
-   border-color: #cfcfcf
+ .Carousel .CarouselTrack.CarouselTrackFadeLeft {
+   mask-image: linear-gradient(90deg, transparent 0, #000 3rem, #000 100%, transparent);
+   -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 3rem, #000 100%, transparent)
```

#### 1348. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14285-L14286` → after: `L15616-L15617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15616-L15617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15616-L15617) · [Before (L14285-L14286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14285-L14286)

```diff
- .rc-checkbox-disabled .rc-checkbox-inner-input {
-   cursor: default
+ .Carousel .CarouselTrack::-webkit-scrollbar {
+   display: none
```

#### 1349. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14289-L14294` → after: `L15620-L15622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15620-L15622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15620-L15622) · [Before (L14289-L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14289-L14294)

```diff
- @keyframes amCheckboxIn {
-   0% {
-     opacity: 0;
-     transform: scale(0) rotate(45deg);
-     transform-origin: 50% 50%
-   }
+ .Carousel .CarouselTrack>* {
+   flex-shrink: 0
+ }
```

#### 1350. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14296-L14300` → after: `L15624-L15645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15624-L15645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15624-L15645) · [Before (L14296-L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14296-L14300)

```diff
-   to {
-     opacity: 1;
-     transform: scale(1) rotate(45deg);
-     transform-origin: 50% 50%
-   }
+ .Carousel .CarouselArrow {
+   align-items: center;
+   background-color: #ffb914;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   color: #fff;
+   cursor: pointer;
+   display: flex;
+   font-size: 1.8rem;
+   gap: .8rem;
+   height: 4rem;
+   justify-content: center;
+   min-width: 4rem;
+   opacity: .7;
+   padding: 0 1rem;
+ ... (6 more added lines; see GitHub link above)
```

#### 1351. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14303-L14306` → after: `L15648-L15651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15648-L15651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15648-L15651) · [Before (L14303-L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14303-L14306)

```diff
- @keyframes amCheckboxOut {
-   0% {
-     opacity: 1
-   }
+ .Carousel .CarouselArrow .svg-inline--fa,
+ .Carousel .CarouselArrow.svg-inline--fa {
+   paint-order: stroke fill
+ }
```

#### 1352. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14308-L14309` → after: `L15653-L15664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15653-L15664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15653-L15664) · [Before (L14308-L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14308-L14309)

```diff
-   to {
-     opacity: 0
+ .Carousel .CarouselArrow .svg-inline--fa path:only-of-type,
+ .Carousel .CarouselArrow.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
+ }
+ 
+ @media(hover:hover) {
+   .Carousel .CarouselArrow:hover {
+     opacity: 1;
+     transform: translateY(-50%) scale(1.04)
```

#### 1353. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14313-L14326` → after: `L15668-L15670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15668-L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15668-L15670) · [Before (L14313-L14326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14313-L14326)

```diff
- .RouterError {
-   align-items: center;
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
-   height: 100vh;
-   height: 100dvh;
-   justify-content: center;
-   overflow: auto;
-   padding: 2rem 0;
-   position: relative;
-   width: 100vw;
-   z-index: 23
+ .Carousel .CarouselArrow.pad-focused {
+   opacity: 1;
+   transform: translateY(-50%) scale(1.04)
```

#### 1354. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14329-L14332` → after: `L15673-L15677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15673-L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15673-L15677) · [Before (L14329-L14332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14329-L14332)

```diff
- .RouterError .RouterErrorIcons {
-   align-items: center;
-   display: flex;
-   gap: .5rem
+ @media(hover:none) {
+   .Carousel .CarouselArrow:active {
+     opacity: 1;
+     transform: translateY(-50%) scale(1.04)
+   }
```

#### 1355. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14335-L14337` → after: `L15680-L15681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15680-L15681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15680-L15681) · [Before (L14335-L14337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14335-L14337)

```diff
- .RouterError .RouterErrorIcons .svg-inline--fa {
-   color: #a4a4a4;
-   font-size: 4rem
+ .Carousel .CarouselArrow.CarouselArrowLeft {
+   left: 1rem
```

#### 1356. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14340-L14341` → after: `L15684-L15685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15684-L15685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15684-L15685) · [Before (L14340-L14341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14340-L14341)

```diff
- .RouterError .RouterErrorIcons .svg-inline--fa:nth-of-type(2) {
-   font-size: 6rem
+ .Carousel .CarouselArrow.CarouselArrowLeft .fa-arrow-up {
+   transform: rotate(-90deg)
```

#### 1357. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14344-L14347` → after: `L15688-L15689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15688-L15689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15688-L15689) · [Before (L14344-L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14344-L14347)

```diff
- .RouterError h1 {
-   color: #cfcfcf;
-   font-size: 3rem;
-   margin: 0
+ .Carousel .CarouselArrow.CarouselArrowRight {
+   right: 1rem
```

#### 1358. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14350-L14353` → after: `L15692-L15693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15692-L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15692-L15693) · [Before (L14350-L14353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14350-L14353)

```diff
- .RouterError h2 {
-   color: #cfcfcf;
-   font-size: 1.5rem;
-   margin: 0
+ .Carousel .CarouselArrow.CarouselArrowRight .fa-arrow-up {
+   transform: rotate(90deg)
```

#### 1359. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14356-L14358` → after: `L15696-L15697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15696-L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15696-L15697) · [Before (L14356-L14358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14356-L14358)

```diff
- .RouterError .CopyErrorBox {
-   font-size: 1rem;
-   margin: 1rem 0 2rem
+ .BloxdUpdateSubTitleText {
+   text-align: left
```

#### 1360. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14361-L14362` → after: `L15700-L15701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15700-L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15700-L15701) · [Before (L14361-L14362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14361-L14362)

```diff
- .RouterError .GoToHomePageButton {
-   font-size: 2rem
+ .BloxdUpdateBulletPoints {
+   padding-left: 2rem
```

#### 1361. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14365-L14367` → after: `L15704-L15706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15704-L15706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15704-L15706) · [Before (L14365-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14365-L14367)

```diff
- .CopyErrorBox {
-   align-items: stretch;
-   border-radius: 0;
+ .BloxdUpdateCheckboxContainer {
+   align-content: center;
+   color: #fff;
```

#### 1362. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14369-L14371` → after: `L15708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15708) · [Before (L14369-L14371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14369-L14371)

```diff
-   flex-direction: column;
-   justify-content: center;
-   white-space: pre
+   justify-content: center
```

#### 1363. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14374-L14388` → after: `L15711-L15712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15711-L15712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15711-L15712) · [Before (L14374-L14388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14374-L14388)

```diff
- .CopyErrorBox .CopyErrorBoxBody {
-   background-color: rgba(49, 12, 0, .3);
-   box-sizing: border-box;
-   color: #ff8a80;
-   display: inline-block;
-   font-size: 1em;
-   font-weight: 700;
-   margin: 0;
-   max-height: 8em;
-   overflow-x: hidden;
-   overflow-y: auto;
-   padding: .75em 1em;
-   text-align: left;
-   width: 100%;
-   word-break: break-all
+ .BloxdUpdateCheckboxInputAndText {
+   display: flex
```

#### 1364. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14391-L14392` → after: `L15715-L15716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15715-L15716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15715-L15716) · [Before (L14391-L14392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14391-L14392)

```diff
- .CopyErrorBox .CopyErrorBoxButton {
-   font-size: 1.5em
+ .BloxdUpdateCheckboxText {
+   margin-left: 1vw
```

#### 1365. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14395-L14413` → after: `L15719-L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15719-L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15719-L15723) · [Before (L14395-L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14395-L14413)

```diff
- .CenteredDiv {
-   align-items: flex-end;
-   animation-duration: .3s;
-   animation-duration: .2s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: fadeIn;
-   display: flex;
-   flex-direction: column;
-   flex-grow: 1;
-   flex-wrap: nowrap;
-   font-weight: 700;
-   gap: .6rem;
-   isolation: isolate;
-   min-height: 0;
-   min-width: 0;
- ... (3 more removed lines; see GitHub link above)
+ .BloxdUpdatePopupOuterWrapper {
+   background-color: #303a59;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32)
```

#### 1366. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14416` → after: `L15726-L15731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15726-L15731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15726-L15731) · [Before (L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14416)

```diff
- .CenteredDiv .GameListDiscordAction {
+ .BloxdUpdatePopupWrapper {
+   padding: 2.2rem 1.3rem
+ }
+ 
+ .BloxdUpdatePopupHeader {
+   align-items: center;
```

#### 1367. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14418` → after: `L15733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15733) · [Before (L14418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14418)

```diff
-   font-size: 1.4rem;
+   font-size: 2rem;
```

#### 1368. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14420` → after: `L15735-L15737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15735-L15737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15735-L15737) · [Before (L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14420)

```diff
-   width: 100%
+   margin: auto;
+   padding-bottom: .5rem;
+   position: relative
```

#### 1369. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14423-L14427` → after: `L15740-L15741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15740-L15741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15740-L15741) · [Before (L14423-L14427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14423-L14427)

```diff
- .CenteredDiv .PlayButtonLoadingText {
-   font-size: 1.8rem;
-   margin-bottom: 3.5rem;
-   margin-top: 2.3rem;
-   position: absolute
+ .BloxdUpdatePopupTitle {
+   margin: auto
```

#### 1370. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14430-L14431` → after: `L15744-L15751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15744-L15751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15744-L15751) · [Before (L14430-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14430-L14431)

```diff
- .CenteredDiv .CenteredDivMiddle {
-   align-items: flex-start;
+ .BloxdUpdatePopupSubTitle {
+   font-size: 1.25rem;
+   margin: auto;
+   padding-bottom: .75rem
+ }
+ 
+ .BloxdUpdatePopupBody {
+   align-content: center;
```

#### 1371. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14433-L14439` → after: `L15753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15753) · [Before (L14433-L14439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14433-L14439)

```diff
-   flex-direction: column;
-   flex-grow: 1;
-   justify-content: flex-start;
-   padding-bottom: 2rem;
-   position: relative;
-   width: 100%;
-   z-index: 2
+   justify-content: center
```

#### 1372. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14442` → after: `L15756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15756) · [Before (L14442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14442)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer {
+ .BloxdUpdatePopupBodyButton {
```

#### 1373. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14446-L14458` → after: `L15760-L15763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15760-L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15760-L15763) · [Before (L14446-L14458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14446-L14458)

```diff
-   gap: 1.5rem;
-   height: 100%;
-   justify-content: flex-start;
-   padding-top: 8rem;
-   position: absolute;
-   width: 100%;
-   z-index: 3
- }
- 
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown {
-   height: 4rem;
-   position: relative;
-   width: 100%
+   font-size: 1.5rem;
+   justify-content: center;
+   margin: 1rem 1rem 0;
+   width: 10rem
```

#### 1374. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14461-L14472` → after: `L15766-L15767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15766-L15767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15766-L15767) · [Before (L14461-L14472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14461-L14472)

```diff
- @keyframes crownPulse {
-   0% {
-     transform: translateY(0) translateX(-50%)
-   }
- 
-   50% {
-     transform: translateY(-10%) translateX(-50%)
-   }
- 
-   to {
-     transform: translateY(0) translateX(-50%)
-   }
+ .BloxdUpdatePopupBodyButton .ButtonBody {
+   padding: .9rem 3rem
```

#### 1375. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14475-L14476` → after: `L15770-L15771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15770-L15771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15770-L15771) · [Before (L14475-L14476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14475-L14476)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .WaitingForPartyLeaderCrownInner {
-   bottom: 0;
+ .GameBackgroundScreen {
+   align-items: center;
```

#### 1376. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14479-L14489` → after: `L15776-L15781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15776-L15781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15776-L15781) · [Before (L14479-L14489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14479-L14489)

```diff
-   left: 50%;
-   position: absolute;
-   transform: translateY(0) translateX(-50%);
-   transition: transform .2s;
-   z-index: 2
- }
- 
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .WaitingForPartyLeaderCrownInner.CrownAnimate {
-   animation-duration: 2s;
-   animation-iteration-count: infinite;
-   animation-name: crownPulse
+   left: 0;
+   pointer-events: auto;
+   position: fixed;
+   top: 0;
+   width: 100vw;
+   z-index: 5
```

#### 1377. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14492-L14494` → after: `L15784-L15785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15784-L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15784-L15785) · [Before (L14492-L14494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14492-L14494)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .WaitingForPartyLeaderCrownInner .svg-inline--fa {
-   font-size: 4rem;
-   transition: transform .1s
+ .GameBackgroundScreen.IgnoringPresses>* {
+   pointer-events: none
```

#### 1378. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14497-L14498` → after: `L15788-L15793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15788-L15793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15788-L15793) · [Before (L14497-L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14497-L14498)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .WaitingForPartyLeaderCrownInner.CrownEasterEggGold .svg-inline--fa {
-   color: #ffb914
+ .CategoryGameListContainer {
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   padding-bottom: 1rem;
+   width: 100%
```

#### 1379. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14501-L14502` → after: `L15796-L15798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15796-L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15796-L15798) · [Before (L14501-L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14501-L14502)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .WaitingForPartyLeaderCrownInner.CrownEasterEggPurple .svg-inline--fa {
-   color: #9b39d5
+ .CategoryGameListContainer .BackButton {
+   font-size: 2rem;
+   padding-left: .3rem
```

#### 1380. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14505-L14506` → after: `L15801-L15804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15801-L15804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15801-L15804) · [Before (L14505-L14506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14505-L14506)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .EasterEggCrown {
-   bottom: 0;
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader {
+   align-items: center;
+   background-color: rgba(57, 73, 128, .4);
+   border-radius: 0;
```

#### 1381. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14508-L14521` → after: `L15806-L15809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15806-L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15806-L15809) · [Before (L14508-L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14508-L14521)

```diff
-   justify-content: center;
-   left: 50%;
-   pointer-events: none;
-   position: relative;
-   position: absolute;
-   transform: translateY(0) translateX(-50%);
-   transition: transform .2s;
-   z-index: 3
- }
- 
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .EasterEggCrown .svg-inline--fa {
-   color: #9b39d5;
-   font-size: 4rem;
-   transition: transform .1s
+   flex-wrap: wrap;
+   font-size: 1.2rem;
+   gap: .5rem;
+   padding: .5rem .75rem
```

#### 1382. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14524-L14525` → after: `L15812-L15815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15812-L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15812-L15815) · [Before (L14524-L14525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14524-L14525)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .EasterEggCrown.CrownEasterEggGold .svg-inline--fa {
-   color: #ffb914
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListHeaderGameCategoryGroup {
+   font-size: 2rem;
+   margin: 0;
+   text-align: center
```

#### 1383. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14528-L14529` → after: `L15818-L15821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15818-L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15818-L15821) · [Before (L14528-L14529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14528-L14529)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderCrown .EasterEggCrown.CrownEasterEggPurple .svg-inline--fa {
-   color: #9b39d5
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch {
+   align-items: stretch;
+   display: flex;
+   height: 2.6rem
```

#### 1384. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14532-L14538` → after: `L15824-L15825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15824-L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15824-L15825) · [Before (L14532-L14538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14532-L14538)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderText {
-   -webkit-backdrop-filter: blur(.5rem);
-   backdrop-filter: blur(.5rem);
-   background-color: rgba(155, 57, 213, .45);
-   border-radius: 0;
-   font-size: 2rem;
-   padding: 1rem 3rem
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch:has(.CategoryGameListTextInput:focus) .CategoryGameListSearchIcon {
+   border-color: #ffb914
```

#### 1385. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14541` → after: `L15828-L15835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15828-L15835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15828-L15835) · [Before (L14541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14541)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderActions {
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch .CategoryGameListSearchIcon {
+   align-items: center;
+   background-color: #303a59;
+   border: 1px solid #0f0f0f;
+   border-bottom-left-radius: 0;
+   border-right: none;
+   border-top-left-radius: 0;
+   color: #cfcfcf;
```

#### 1386. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14544` → after: `L15838-L15839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15838-L15839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15838-L15839) · [Before (L14544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14544)

```diff
-   gap: 1rem
+   justify-content: center;
+   padding: 0 .2rem 0 .6rem
```

#### 1387. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14547-L14550` → after: `L15842-L15849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15842-L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15842-L15849) · [Before (L14547-L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14547-L14550)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderActions .RedButton {
-   align-items: center;
-   display: flex;
-   justify-content: center
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch .CategoryGameListTextInput {
+   border-left: none;
+   border-radius: 0;
+   border-right-color: transparent;
+   box-shadow: none;
+   font-size: 1.2rem;
+   padding: 0 .3rem;
+   text-align: left
```

#### 1388. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14553-L14554` → after: `L15852-L15853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15852-L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15852-L15853) · [Before (L14553-L14554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14553-L14554)

```diff
- .CenteredDiv .CenteredDivMiddle .WaitingForPartyLeaderContainer .WaitingForPartyLeaderActions .RedButton .ButtonBody {
-   padding: 0 1rem
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch .CategoryGameListTextInput:focus {
+   border-right-color: #ffb914
```

#### 1389. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14557` → after: `L15856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15856) · [Before (L14557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14557)

```diff
- .CenteredDiv .CenteredDivMiddle .GameList {
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch .NewButton {
```

#### 1390. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14560-L14573` → after: `L15862-L15863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15862-L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15862-L15863) · [Before (L14560-L14573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14560-L14573)

```diff
-   flex-wrap: wrap;
-   justify-content: center;
-   width: 100%;
-   z-index: 2
- }
- 
- .CenteredDiv .CenteredDivMiddle .RecentlyPlayedGameList {
-   margin-bottom: .5rem
- }
- 
- .CenteredDiv .CenteredDivMiddle .GameListCarousel,
- .CenteredDiv .CenteredDivMiddle .RecentlyPlayedGameList {
-   margin-right: calc(var(--home-inner-padding-right, 0px)*-1);
-   width: calc(100% + var(--home-inner-padding-right, 0px))
+   font-size: 1.2rem;
+   justify-content: center
```

#### 1391. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14576-L14577` → after: `L15866-L15867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15866-L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15866-L15867) · [Before (L14576-L14577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14576-L14577)

```diff
- .CenteredDiv .CenteredDivMiddle .GameListCarousel {
-   --carousel-page-peek: 0.5rem
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch .NewButton .ButtonBody {
+   padding: 0 .4rem
```

#### 1392. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14580-L14583` → after: `L15870-L15874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15870-L15874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15870-L15874) · [Before (L14580-L14583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14580-L14583)

```diff
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .CarouselTrack {
-   align-items: flex-start;
-   margin-block: -.5rem;
-   padding-block: .5rem
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListHeaderDivider {
+   background-color: #a4a4a4;
+   height: 2rem;
+   margin: 0 .5rem;
+   width: .2rem
```

#### 1393. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14586-L14590` → after: `L15877-L15880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15877-L15880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15877-L15880) · [Before (L14586-L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14586-L14590)

```diff
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage {
-   display: flex;
-   flex-direction: column;
-   justify-content: flex-start;
-   width: calc(100% - var(--carousel-page-peek))
+ @media(orientation:portrait)and (max-width:600px) {
+   .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListHeaderDivider {
+     display: none
+   }
```

#### 1394. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14593-L14594` → after: `L15883-L15884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15883-L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15883-L15884) · [Before (L14593-L14594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14593-L14594)

```diff
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .GameListRow {
-   justify-content: flex-start
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSpace {
+   flex-grow: 1
```

#### 1395. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14597-L14613` → after: `L15887-L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15887-L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15887-L15888) · [Before (L14597-L14613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14597-L14613)

```diff
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead10>:nth-child(-n+10),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead11>:nth-child(-n+11),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead12>:nth-child(-n+12),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead13>:nth-child(-n+13),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead14>:nth-child(-n+14),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead15>:nth-child(-n+15),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead16>:nth-child(-n+16),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead1>:nth-child(-n+1),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead2>:nth-child(-n+2),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead3>:nth-child(-n+3),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead4>:nth-child(-n+4),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead5>:nth-child(-n+5),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead6>:nth-child(-n+6),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead7>:nth-child(-n+7),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead8>:nth-child(-n+8),
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage .HomeLineLead9>:nth-child(-n+9) {
- ... (1 more removed lines; see GitHub link above)
+ .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListStudioButton {
+   position: relative
```

#### 1396. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14616-L14619` → after: `L15891-L15893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15891-L15893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15891-L15893) · [Before (L14616-L14619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14616-L14619)

```diff
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage.GameListCarouselPagePortrait {
-   align-items: flex-start;
-   flex-direction: row;
-   flex-wrap: wrap
+ .CategoryGameListContainer .CategoryGameListHeaderContainer.CategoryGameListHeaderContainerWithPagination .CategoryGameListHeader {
+   border-bottom-left-radius: 0;
+   border-bottom-right-radius: 0
```

#### 1397. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14622-L14623` → after: `L15896-L15898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15896-L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15896-L15898) · [Before (L14622-L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14622-L14623)

```diff
- .CenteredDiv .CenteredDivMiddle .GameListCarousel .GameListCarouselPage.GameListCarouselPagePortrait .GameListRow {
-   display: contents
+ .CategoryGameListContainer .CategoryGameListHeaderContainer.CategoryGameListHeaderContainerWithPagination .Pagination {
+   border-top-left-radius: 0;
+   border-top-right-radius: 0
```

#### 1398. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14626-L14627` → after: `L15901-L15902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15901-L15902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15901-L15902) · [Before (L14626-L14627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14626-L14627)

```diff
- .CenteredDiv .CenteredDivMiddle .TopCustomGameList {
-   align-items: flex-start;
+ .CategoryGameListContainer .CategoryGameList {
+   align-items: center;
```

#### 1399. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14630` → after: `L15905-L15907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15905-L15907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15905-L15907) · [Before (L14630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14630)

```diff
-   margin-bottom: .4rem;
+   justify-content: center;
+   margin-top: 1rem;
+   transition: opacity .15s;
```

#### 1400. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14634-L14635` → after: `L15911-L15913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15911-L15913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15911-L15913) · [Before (L14634-L14635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14634-L14635)

```diff
- .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListHeading {
-   margin: 0
+ .CategoryGameListContainer .CategoryGameList .CategoryGameListLoader {
+   font-size: 3rem;
+   padding-top: 4rem
```

#### 1401. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14638-L14641` → after: `L15916-L15917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15916-L15917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15916-L15917) · [Before (L14638-L14641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14638-L14641)

```diff
- .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle {
-   align-items: center;
-   cursor: pointer;
-   display: flex;
+ .CategoryGameListContainer .CategoryGameList .CategoryGameListNoResults {
+   color: #a4a4a4;
```

#### 1402. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14644-L14646` → after: `L15925-L15927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15925-L15927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15925-L15927) · [Before (L14644-L14646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14644-L14646)

```diff
-   gap: .25rem;
-   margin: 0;
-   padding-left: .5rem
+   max-width: 90rem;
+   text-align: left;
+   width: 100%
```

#### 1403. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14649-L14650` → after: `L15930-L15934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15930-L15934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15930-L15934) · [Before (L14649-L14650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14649-L14650)

```diff
- .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle.TopCustomGameListTitleStatic {
-   cursor: default
+ .CategoryGameListContainer .CategoryGameList .CategoryGameListSubtitle .CategoryGameListSubtitleInner {
+   font-size: inherit;
+   font-weight: inherit;
+   margin: 0;
+   padding: 2rem .5rem .5rem
```

#### 1404. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14653-L14656` → after: `L15937-L15938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15937-L15938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15937-L15938) · [Before (L14653-L14656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14653-L14656)

```diff
- .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle .svg-inline--fa {
-   color: #ffb914;
-   transform: rotate(90deg);
-   transition: translate .2s
+ .CategoryGameListContainer .CategoryGameList .CategoryGameListSubtitle:first-child .CategoryGameListSubtitleInner {
+   padding-top: 0
```

#### 1405. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14659-L14662` → after: `L15941-L15945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15941-L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15941-L15945) · [Before (L14659-L14662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14659-L14662)

```diff
- @media(hover:hover) {
-   .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle:hover .svg-inline--fa {
-     translate: .25rem 0
-   }
+ .CategoryGameListContainer .CategoryGameList .CategoryGameListInner {
+   display: grid;
+   grid-template-columns: repeat(auto-fill, minmax(min(16rem, 100%), 1fr));
+   max-width: 90rem;
+   width: 100%
```

#### 1406. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14665-L14666` → after: `L15948-L15950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15948-L15950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15948-L15950) · [Before (L14665-L14666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14665-L14666)

```diff
- .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle.pad-focused .svg-inline--fa {
-   translate: .25rem 0
+ .CategoryGameListContainer .CategoryGameList.CategoryGameListLoading {
+   opacity: .6;
+   pointer-events: none
```

#### 1407. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14669-L14671` → after: `L15953-L15954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15953-L15954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15953-L15954) · [Before (L14669-L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14669-L14671)

```diff
- .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListTitle[data-pressing] {
-   color: #ffb914;
-   transition: none
+ .CategoryGameListContainer .CategoryGameListBottomPagination {
+   margin-top: 1rem
```

#### 1408. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14674-L14675` → after: `L15957-L15960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15957-L15960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15957-L15960) · [Before (L14674-L14675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14674-L14675)

```diff
- .CenteredDiv .CenteredDivMiddle .TopCustomGameList .TopCustomGameListInner {
-   align-items: stretch;
+ .Pagination {
+   align-items: center;
+   background-color: rgba(57, 73, 128, .4);
+   border-radius: 0;
```

#### 1409. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14678-L14679` → after: `L15963-L15966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15963-L15966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15963-L15966) · [Before (L14678-L14679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14678-L14679)

```diff
-   justify-content: flex-start;
-   position: relative;
+   font-size: 1.2rem;
+   gap: .5rem;
+   justify-content: center;
+   padding: .5rem 0;
```

#### 1410. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14683-L14685` → after: `L15970-L15974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15970-L15974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15970-L15974) · [Before (L14683-L14685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14683-L14685)

```diff
- .Carousel {
-   position: relative;
-   width: 100%
+ .Pagination .PaginationEllipsis {
+   color: #cfcfcf;
+   font-size: 1.2rem;
+   line-height: 1.2rem;
+   padding: .3rem .6rem
```

#### 1411. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14688-L14691` → after: `L15977-L15978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15977-L15978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15977-L15978) · [Before (L14688-L14691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14688-L14691)

```diff
- .Carousel .CarouselTrack {
-   -webkit-overflow-scrolling: touch;
-   align-items: stretch;
-   box-sizing: border-box;
+ .RecentlyPlayedGameList {
+   align-items: center;
```

#### 1412. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14693-L14697` → after: `L15980-L15981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15980-L15981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15980-L15981) · [Before (L14693-L14697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14693-L14697)

```diff
-   flex-wrap: nowrap;
-   overflow-x: auto;
-   overflow-y: hidden;
-   scroll-behavior: smooth;
-   scrollbar-width: none;
+   gap: .5rem;
+   min-width: 0;
```

#### 1413. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14701-L14714` → after: `L15985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15985) · [Before (L14701-L14714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14701-L14714)

```diff
- .Carousel .CarouselTrack.CarouselTrackFadeLeft {
-   mask-image: linear-gradient(90deg, transparent 0, #000 3rem, #000 100%, transparent);
-   -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 3rem, #000 100%, transparent)
- }
- 
- .Carousel .CarouselTrack::-webkit-scrollbar {
-   display: none
- }
- 
- .Carousel .CarouselTrack>* {
-   flex-shrink: 0
- }
- 
- .Carousel .CarouselArrow {
+ .RecentlyPlayedGameList .RecentlyPlayedGameTitle {
```

#### 1414. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14716-L14717` → after: `L15987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15987) · [Before (L14716-L14717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14716-L14717)

```diff
-   background-color: #ffb914;
-   border: 1px solid #0f0f0f;
+   background-color: rgba(57, 73, 128, .45);
```

#### 1415. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14719-L14721` → after: `L15989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15989) · [Before (L14719-L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14719-L14721)

```diff
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   color: #fff;
-   cursor: pointer;
+   color: #f2f2f2;
```

#### 1416. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14723-L14725` → after: `L15991-L15993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15991-L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15991-L15993) · [Before (L14723-L14725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14723-L14725)

```diff
-   font-size: 1.8rem;
-   gap: .8rem;
-   height: 4rem;
+   flex-shrink: 0;
+   font-size: 1rem;
+   height: 2.5rem;
```

#### 1417. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14727-L14735` → after: `L15995-L15996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15995-L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15995-L15996) · [Before (L14727-L14735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14727-L14735)

```diff
-   min-width: 4rem;
-   opacity: .7;
-   padding: 0 1rem;
-   position: absolute;
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59;
-   top: 50%;
-   transform: translateY(-50%);
-   transition: opacity .2s, transform .2s;
-   z-index: 2
+   margin: 0;
+   width: 2.5rem
```

#### 1418. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14738-L14740` → after: `L15999-L16009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR15999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L15999-L16009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L15999-L16009) · [Before (L14738-L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14738-L14740)

```diff
- .Carousel .CarouselArrow .svg-inline--fa,
- .Carousel .CarouselArrow.svg-inline--fa {
-   paint-order: stroke fill
+ .RecentlyPlayedGameList .RecentlyPlayedGameScroll {
+   -ms-overflow-style: none;
+   align-items: center;
+   display: flex;
+   flex: 1 1;
+   gap: .5rem;
+   margin: -2rem 0 -2rem -2rem;
+   min-width: 0;
+   overflow-x: auto;
+   padding: 2rem;
+   scrollbar-width: none
```

#### 1419. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14743-L14748` → after: `L16012-L16039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16012-L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16012-L16039) · [Before (L14743-L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14743-L14748)

```diff
- .Carousel .CarouselArrow .svg-inline--fa path:only-of-type,
- .Carousel .CarouselArrow.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .RecentlyPlayedGameList .RecentlyPlayedGameScroll.RecentlyPlayedGameScrollFadeRight {
+   mask-image: linear-gradient(90deg, transparent 0, #000 0, #000 calc(100% - 3rem), transparent);
+   -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 0, #000 calc(100% - 3rem), transparent)
+ }
+ 
+ .RecentlyPlayedGameList .RecentlyPlayedGameScroll::-webkit-scrollbar {
+   display: none
+ }
+ 
+ .RecentlyPlayedGameList .RecentlyPlayedGame {
+   align-items: center;
+   background-color: #394980;
+   background-position: 50%;
+   background-repeat: no-repeat;
+   background-size: cover;
+   border: 2px solid #394980;
+ ... (12 more added lines; see GitHub link above)
```

#### 1420. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14752-L14754` → after: `L16043-L16044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16043-L16044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16043-L16044) · [Before (L14752-L14754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14752-L14754)

```diff
-   .Carousel .CarouselArrow:hover {
-     opacity: 1;
-     transform: translateY(-50%) scale(1.04)
+   .RecentlyPlayedGameList .RecentlyPlayedGame:hover {
+     transform: scale(1.05)
```

#### 1421. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14758-L14760` → after: `L16048-L16049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16048-L16049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16048-L16049) · [Before (L14758-L14760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14758-L14760)

```diff
- .Carousel .CarouselArrow.pad-focused {
-   opacity: 1;
-   transform: translateY(-50%) scale(1.04)
+ .RecentlyPlayedGameList .RecentlyPlayedGame.pad-focused {
+   transform: scale(1.05)
```

#### 1422. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14764-L14766` → after: `L16053-L16054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16053-L16054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16053-L16054) · [Before (L14764-L14766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14764-L14766)

```diff
-   .Carousel .CarouselArrow:active {
-     opacity: 1;
-     transform: translateY(-50%) scale(1.04)
+   .RecentlyPlayedGameList .RecentlyPlayedGame:active {
+     transform: scale(1.05)
```

#### 1423. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14770-L14783` → after: `L16058-L16061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16058-L16061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16058-L16061) · [Before (L14770-L14783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14770-L14783)

```diff
- .Carousel .CarouselArrow.CarouselArrowLeft {
-   left: 1rem
- }
- 
- .Carousel .CarouselArrow.CarouselArrowLeft .fa-arrow-up {
-   transform: rotate(-90deg)
- }
- 
- .Carousel .CarouselArrow.CarouselArrowRight {
-   right: 1rem
- }
- 
- .Carousel .CarouselArrow.CarouselArrowRight .fa-arrow-up {
-   transform: rotate(90deg)
+ .RecentlyPlayedGameList .RecentlyPlayedGame[data-pressing] {
+   border-color: #ffb914;
+   filter: brightness(.8);
+   transition: none
```

#### 1424. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14786-L14787` → after: `L16064-L16078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16064-L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16064-L16078) · [Before (L14786-L14787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14786-L14787)

```diff
- .BloxdUpdateSubTitleText {
-   text-align: left
+ .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName {
+   background-color: rgba(0, 0, 0, .4);
+   box-sizing: border-box;
+   height: 100%;
+   left: 0;
+   line-height: 2.2rem;
+   min-width: 0;
+   overflow-x: hidden;
+   padding: 0 .5rem;
+   position: absolute;
+   text-align: center;
+   text-overflow: ellipsis;
+   top: 0;
+   white-space: nowrap;
+   width: 100%
```

#### 1425. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14790-L14791` → after: `L16081-L16082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16081-L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16081-L16082) · [Before (L14790-L14791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14790-L14791)

```diff
- .BloxdUpdateBulletPoints {
-   padding-left: 2rem
+ .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName .RecentlyPlayedGameVariationTitle {
+   color: #cfcfcf
```

#### 1426. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14794-L14796` → after: `L16085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16085) · [Before (L14794-L14796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14794-L14796)

```diff
- .BloxdUpdateCheckboxContainer {
-   align-content: center;
-   color: #fff;
+ .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow {
```

#### 1427. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14798-L14802` → after: `L16087-L16089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16087-L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16087-L16089) · [Before (L14798-L14802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14798-L14802)

```diff
-   justify-content: center
- }
- 
- .BloxdUpdateCheckboxInputAndText {
-   display: flex
+   flex-direction: column;
+   justify-content: center;
+   line-height: 1.1
```

#### 1428. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14805-L14806` → after: `L16092-L16096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16092-L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16092-L16096) · [Before (L14805-L14806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14805-L14806)

```diff
- .BloxdUpdateCheckboxText {
-   margin-left: 1vw
+ .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow .RecentlyPlayedGameEyebrow,
+ .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow .RecentlyPlayedGameNameText {
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 1429. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14809-L14813` → after: `L16099-L16104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16099-L16104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16099-L16104) · [Before (L14809-L14813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14809-L14813)

```diff
- .BloxdUpdatePopupOuterWrapper {
-   background-color: #303a59;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32)
+ .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow .RecentlyPlayedGameEyebrow {
+   color: #a8e08a;
+   font-size: .55rem;
+   font-weight: 800;
+   letter-spacing: .08em;
+   text-transform: uppercase
```

#### 1430. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14816-L14817` → after: `L16107-L16109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16107-L16109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16107-L16109) · [Before (L14816-L14817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14816-L14817)

```diff
- .BloxdUpdatePopupWrapper {
-   padding: 2.2rem 1.3rem
+ .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow .RecentlyPlayedGameEyebrow:lang(ar),
+ .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow .RecentlyPlayedGameEyebrow:lang(hi) {
+   letter-spacing: normal
```

#### 1431. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14820-L14821` → after: `L16112-L16113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16112-L16113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16112-L16113) · [Before (L14820-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14820-L14821)

```diff
- .BloxdUpdatePopupHeader {
-   align-items: center;
+ .MyWorldsSection {
+   box-sizing: border-box;
```

#### 1432. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14823-L14827` → after: `L16115-L16124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16115-L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16115-L16124) · [Before (L14823-L14827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14823-L14827)

```diff
-   font-size: 2rem;
-   justify-content: center;
-   margin: auto;
-   padding-bottom: .5rem;
-   position: relative
+   flex-direction: column;
+   font-size: 1.2rem;
+   height: min(50rem, 90vh);
+   justify-content: flex-start;
+   overflow-x: hidden;
+   overflow-y: scroll;
+   padding: 0 1rem;
+   position: relative;
+   width: 100%;
+   width: min(80rem, 80vw)
```

#### 1433. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14830-L14831` → after: `L16127-L16129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16127-L16129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16127-L16129) · [Before (L14830-L14831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14830-L14831)

```diff
- .BloxdUpdatePopupTitle {
-   margin: auto
+ .MyWorldsSection.MyWorldsSectionPad .CustomLobby.CreateCustomLobby:not(.pad-focused),
+ .MyWorldsSection.MyWorldsSectionPad .CustomLobby.MyWorld:not(.pad-focused) {
+   border-color: #0f0f0f
```

#### 1434. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14834-L14837` → after: `L16132-L16133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16132-L16133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16132-L16133) · [Before (L14834-L14837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14834-L14837)

```diff
- .BloxdUpdatePopupSubTitle {
-   font-size: 1.25rem;
-   margin: auto;
-   padding-bottom: .75rem
+ .MyWorldsSection .MyWorldsTitle {
+   font-size: 3rem
```

#### 1435. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14840-L14843` → after: `L16136-L16137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16136-L16137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16136-L16137) · [Before (L14840-L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14840-L14843)

```diff
- .BloxdUpdatePopupBody {
-   align-content: center;
-   display: flex;
-   justify-content: center
+ .MyWorldsSection .MyWorldsDescription {
+   font-size: 1.75rem
```

#### 1436. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14846` → after: `L16140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16140) · [Before (L14846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14846)

```diff
- .BloxdUpdatePopupBodyButton {
+ .MyWorldsSection .MyWorldsLoader {
```

#### 1437. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14850-L14864` → after: `L16146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16146) · [Before (L14850-L14864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14850-L14864)

```diff
-   font-size: 1.5rem;
-   justify-content: center;
-   margin: 1rem 1rem 0;
-   width: 10rem
- }
- 
- .BloxdUpdatePopupBodyButton .ButtonBody {
-   padding: .9rem 3rem
- }
- 
- .GameBackgroundScreen {
-   align-items: center;
-   display: flex;
-   height: 100vh;
-   height: 100dvh;
+   gap: 1rem;
```

#### 1438. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14866-L14871` → after: `L16148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16148) · [Before (L14866-L14871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14866-L14871)

```diff
-   left: 0;
-   pointer-events: auto;
-   position: fixed;
-   top: 0;
-   width: 100vw;
-   z-index: 5
+   text-align: center
```

#### 1439. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14874-L14875` → after: `L16151-L16152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16151-L16152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16151-L16152) · [Before (L14874-L14875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14874-L14875)

```diff
- .GameBackgroundScreen.IgnoringPresses>* {
-   pointer-events: none
+ .MyWorldsSection .MyWorldsLoader .LogoLoader {
+   font-size: 4rem
```

#### 1440. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14878` → after: `L16155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16155) · [Before (L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14878)

```diff
- .CategoryGameListContainer {
+ .MyWorldsSection .MyWorldsBlock {
```

#### 1441. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14881-L14882` → after: `L16158-L16159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16158-L16159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16158-L16159) · [Before (L14881-L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14881-L14882)

```diff
-   gap: .5rem;
-   padding-bottom: 1rem;
+   gap: 1rem;
+   margin-top: 1rem;
```

#### 1442. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14886-L14888` → after: `L16163-L16164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16163-L16164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16163-L16164) · [Before (L14886-L14888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14886-L14888)

```diff
- .CategoryGameListContainer .BackButton {
-   font-size: 2rem;
-   padding-left: .3rem
+ .MyWorldsSection .MyWorldsBlock.OwnedWorldsBlock {
+   margin-top: 3.5rem
```

#### 1443. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14891-L14899` → after: `L16167-L16169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16167-L16169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16167-L16169) · [Before (L14891-L14899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14891-L14899)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader {
-   align-items: center;
-   background-color: rgba(57, 73, 128, .4);
-   border-radius: 0;
-   display: flex;
-   flex-wrap: wrap;
-   font-size: 1.2rem;
-   gap: .5rem;
-   padding: .5rem .75rem
+ .MyWorldsSection .MyWorldsRecentClip {
+   margin: -.5rem;
+   padding: .5rem
```

#### 1444. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14902-L14905` → after: `L16172-L16176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16172-L16176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16172-L16176) · [Before (L14902-L14905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14902-L14905)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListHeaderGameCategoryGroup {
-   font-size: 2rem;
-   margin: 0;
-   text-align: center
+ .MyWorldsSection .MyWorldsRecentClip.MyWorldsRecentClipCollapsed {
+   -webkit-mask-image: linear-gradient(180deg, #000 calc(100% - 2.5rem), transparent);
+   mask-image: linear-gradient(180deg, #000 calc(100% - 2.5rem), transparent);
+   max-height: 7rem;
+   overflow: hidden
```

#### 1445. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14908-L14911` → after: `L16179-L16191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16179-L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16179-L16191) · [Before (L14908-L14911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14908-L14911)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch {
-   align-items: stretch;
-   display: flex;
-   height: 2.6rem
+ .MyWorldsSection .MyWorldsSeeMore {
+   background: none;
+   border: none;
+   box-sizing: content-box;
+   color: inherit;
+   font: inherit;
+   letter-spacing: inherit;
+   line-height: inherit;
+   margin: 0;
+   padding: 0;
+   text-align: inherit;
+   text-shadow: inherit;
+   text-transform: inherit
```

#### 1446. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14914-L14915` → after: `L16194-L16199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16194-L16199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16194-L16199) · [Before (L14914-L14915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14914-L14915)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch:has(.CategoryGameListTextInput:focus) .CategoryGameListSearchIcon {
-   border-color: #ffb914
+ @media(pointer:coarse) {
+   .MyWorldsSection .MyWorldsSeeMore {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 1447. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14918` → after: `L16202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16202) · [Before (L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14918)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch .CategoryGameListSearchIcon {
+ .MyWorldsSection .MyWorldsSeeMore {
```

#### 1448. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14927` → after: `L16205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16205) · [Before (L14927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14927)

```diff
-   font-size: 1.4rem;
+   gap: .5rem;
```

#### 1449. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14929` → after: `L16207-L16209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16207-L16209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16207-L16209) · [Before (L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14929)

```diff
-   padding: 0 .2rem 0 .6rem
+   margin: -.75rem 0 -2rem;
+   padding: .75rem 1rem;
+   position: relative
```

#### 1450. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14932-L14939` → after: `L16212-L16220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16212-L16220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16212-L16220) · [Before (L14932-L14939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14932-L14939)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch .CategoryGameListTextInput {
-   border-left: none;
-   border-radius: 0;
-   border-right-color: transparent;
-   box-shadow: none;
-   font-size: 1.2rem;
-   padding: 0 .3rem;
-   text-align: left
+ .MyWorldsSection .MyWorldsSeeMore.MyWorldsSeeMoreOverFade {
+   margin-top: -2rem;
+   padding-top: 2rem
+ }
+ 
+ .MyWorldsSection .MyWorldsSeeMore {
+   font-size: 1rem;
+   font-weight: 700;
+   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
```

#### 1451. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14942-L14943` → after: `L16223-L16225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16223-L16225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16223-L16225) · [Before (L14942-L14943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14942-L14943)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch .CategoryGameListTextInput:focus {
-   border-right-color: #ffb914
+ .MyWorldsSection .MyWorldsSeeMore .svg-inline--fa,
+ .MyWorldsSection .MyWorldsSeeMore.svg-inline--fa {
+   paint-order: stroke fill
```

#### 1452. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14946-L14953` → after: `L16228-L16233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16228-L16233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16228-L16233) · [Before (L14946-L14953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14946-L14953)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch .NewButton {
-   align-items: center;
-   border-bottom-left-radius: 0;
-   border-top-left-radius: 0;
-   box-shadow: none;
-   display: flex;
-   font-size: 1.2rem;
-   justify-content: center
+ .MyWorldsSection .MyWorldsSeeMore .svg-inline--fa path:only-of-type,
+ .MyWorldsSection .MyWorldsSeeMore.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 1453. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14956-L14957` → after: `L16236-L16239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16236-L16239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16236-L16239) · [Before (L14956-L14957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14956-L14957)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSearch .NewButton .ButtonBody {
-   padding: 0 .4rem
+ .MyWorldsSection .MyWorldsSeeMore {
+   color: #ffb914;
+   cursor: pointer;
+   transition: opacity .2s
```

#### 1454. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14960-L14964` → after: `L16242-L16245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16242-L16245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16242-L16245) · [Before (L14960-L14964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14960-L14964)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListHeaderDivider {
-   background-color: #a4a4a4;
-   height: 2rem;
-   margin: 0 .5rem;
-   width: .2rem
+ @media(hover:hover) {
+   .MyWorldsSection .MyWorldsSeeMore:hover {
+     opacity: .85
+   }
```

#### 1455. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14967-L14969` → after: `L16248-L16254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16248-L16254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16248-L16254) · [Before (L14967-L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14967-L14969)

```diff
- @media(orientation:portrait)and (max-width:600px) {
-   .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListHeaderDivider {
-     display: none
+ .MyWorldsSection .MyWorldsSeeMore.pad-focused {
+   opacity: .85
+ }
+ 
+ @media(hover:none) {
+   .MyWorldsSection .MyWorldsSeeMore:active {
+     opacity: .85
```

#### 1456. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14973-L14974` → after: `L16258-L16260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16258-L16260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16258-L16260) · [Before (L14973-L14974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14973-L14974)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListSpace {
-   flex-grow: 1
+ .MyWorldsSection .MyWorldsSeeMore[data-pressing] {
+   opacity: .85;
+   transition: none
```

#### 1457. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14977-L14978` → after: `L16263-L16273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16263-L16273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16263-L16273) · [Before (L14977-L14978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14977-L14978)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer .CategoryGameListHeader .CategoryGameListStudioButton {
-   position: relative
+ .MyWorldsSection .MyWorldsSectionTitle {
+   --fa-primary-color: #463bd9;
+   --fa-secondary-color: #ffb914;
+   align-items: center;
+   color: #cfcfcf;
+   display: flex;
+   font-size: 1.5rem;
+   gap: .5rem;
+   line-height: 1em;
+   margin: 0;
+   text-align: left
```

#### 1458. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14981-L14983` → after: `L16276-L16278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16276-L16278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16276-L16278) · [Before (L14981-L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14981-L14983)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer.CategoryGameListHeaderContainerWithPagination .CategoryGameListHeader {
-   border-bottom-left-radius: 0;
-   border-bottom-right-radius: 0
+ .MyWorldsSection .MyWorldsSectionTitle .MyWorldsSectionTitleText {
+   padding: .2rem .4rem;
+   position: relative
```

#### 1459. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14986-L14988` → after: `L16281-L16290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16281-L16290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16281-L16290) · [Before (L14986-L14988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14986-L14988)

```diff
- .CategoryGameListContainer .CategoryGameListHeaderContainer.CategoryGameListHeaderContainerWithPagination .Pagination {
-   border-top-left-radius: 0;
-   border-top-right-radius: 0
+ .MyWorldsSection .MyWorldsSectionTitle .MyWorldsSectionTitleText .MyWorldsSectionTitleTextBackground {
+   background-image: linear-gradient(20deg, #463bd9 20%, #ffb914);
+   border-radius: 0;
+   height: 100%;
+   left: 0;
+   opacity: .8;
+   position: absolute;
+   top: 0;
+   width: 100%;
+   z-index: -1
```

#### 1460. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14991` → after: `L16293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16293) · [Before (L14991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14991)

```diff
- .CategoryGameListContainer .CategoryGameList {
+ .MyWorldsSection .MyWorldsList {
```

#### 1461. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L14995-L14997` → after: `L16297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16297) · [Before (L14995-L14997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L14995-L14997)

```diff
-   justify-content: center;
-   margin-top: 1rem;
-   transition: opacity .15s;
+   gap: .75rem;
```

#### 1462. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15001-L15003` → after: `L16301-L16302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16301-L16302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16301-L16302) · [Before (L15001-L15003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15001-L15003)

```diff
- .CategoryGameListContainer .CategoryGameList .CategoryGameListLoader {
-   font-size: 3rem;
-   padding-top: 4rem
+ .MyWorldsSection .MyWorldsListScroll {
+   width: 100%
```

#### 1463. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15006-L15009` → after: `L16305-L16313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16305-L16313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16305-L16313) · [Before (L15006-L15009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15006-L15009)

```diff
- .CategoryGameListContainer .CategoryGameList .CategoryGameListNoResults {
-   color: #a4a4a4;
-   font-size: 1.2rem;
-   padding-top: 4rem
+ .MyWorldsSection .MyWorldsListInner {
+   align-items: center;
+   box-sizing: border-box;
+   display: flex;
+   flex-wrap: wrap;
+   gap: 1rem;
+   justify-content: flex-start;
+   overflow: visible;
+   width: 100%
```

#### 1464. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15012-L15017` → after: `L16316-L16317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16316-L16317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16316-L16317) · [Before (L15012-L15017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15012-L15017)

```diff
- .CategoryGameListContainer .CategoryGameList .CategoryGameListSubtitle {
-   font-size: 1.5rem;
-   font-weight: 800;
-   max-width: 90rem;
-   text-align: left;
-   width: 100%
+ .MyWorldsSection .MyWorldsListInner.TopSection {
+   justify-content: center
```

#### 1465. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15020-L15024` → after: `L16320-L16327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16320-L16327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16320-L16327) · [Before (L15020-L15024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15020-L15024)

```diff
- .CategoryGameListContainer .CategoryGameList .CategoryGameListSubtitle .CategoryGameListSubtitleInner {
-   font-size: inherit;
-   font-weight: inherit;
-   margin: 0;
-   padding: 2rem .5rem .5rem
+ .MyWorldsSection .MyWorldsListInner .OwnedWorldsLazy {
+   align-items: center;
+   display: flex;
+   flex: 1 1 25rem;
+   flex-wrap: wrap;
+   gap: 1rem;
+   justify-content: flex-start;
+   min-width: 0
```

#### 1466. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15027-L15028` → after: `L16330-L16333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16330-L16333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16330-L16333) · [Before (L15027-L15028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15027-L15028)

```diff
- .CategoryGameListContainer .CategoryGameList .CategoryGameListSubtitle:first-child .CategoryGameListSubtitleInner {
-   padding-top: 0
+ .MyWorldsSection .MyWorldsListInner .OwnedWorldsLazy .LazyLoadedItemWrapper {
+   flex-basis: 25rem;
+   flex-grow: 0;
+   height: 5rem
```

#### 1467. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15031-L15034` → after: `L16336-L16340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16336-L16340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16336-L16340) · [Before (L15031-L15034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15031-L15034)

```diff
- .CategoryGameListContainer .CategoryGameList .CategoryGameListInner {
-   display: grid;
-   grid-template-columns: repeat(auto-fill, minmax(min(16rem, 100%), 1fr));
-   max-width: 90rem;
+ .MyWorldsSection .MyWorldsListInner .OwnedWorldsLazy .LazyLoadedItemWrapper .CustomLobby {
+   flex-grow: 0;
+   height: 100%;
+   opacity: 1;
+   transform: scale(1);
```

#### 1468. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15038-L15040` → after: `L16344-L16350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16344-L16350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16344-L16350) · [Before (L15038-L15040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15038-L15040)

```diff
- .CategoryGameListContainer .CategoryGameList.CategoryGameListLoading {
-   opacity: .6;
-   pointer-events: none
+ .MyWorldsSection .CreateCustomLobby,
+ .MyWorldsSection .MyWorldButton {
+   aspect-ratio: unset;
+   flex-basis: 25rem;
+   flex-grow: 0;
+   height: 5rem;
+   padding: 0
```

#### 1469. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15043-L15044` → after: `L16353-L16354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16353-L16354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16353-L16354) · [Before (L15043-L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15043-L15044)

```diff
- .CategoryGameListContainer .CategoryGameListBottomPagination {
-   margin-top: 1rem
+ .MyWorldsSection .CreateCustomLobby {
+   border: 1px solid #ffb914
```

#### 1470. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15047-L15057` → after: `L16357-L16358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16357-L16358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16357-L16358) · [Before (L15047-L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15047-L15057)

```diff
- .Pagination {
-   align-items: center;
-   background-color: rgba(57, 73, 128, .4);
-   border-radius: 0;
-   display: flex;
-   flex-wrap: wrap;
-   font-size: 1.2rem;
-   gap: .5rem;
-   justify-content: center;
-   padding: .5rem 0;
-   width: 100%
+ .MyWorldsSection .CustomLobby.MyWorld {
+   border: 3px solid #ffb914
```

#### 1471. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15060-L15064` → after: `L16361-L16364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16361-L16364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16361-L16364) · [Before (L15060-L15064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15060-L15064)

```diff
- .Pagination .PaginationEllipsis {
-   color: #cfcfcf;
-   font-size: 1.2rem;
-   line-height: 1.2rem;
-   padding: .3rem .6rem
+ .MyWorldsSection .CustomLobby.MyWorld .CustomLobbyBackground {
+   background-position: 50%;
+   background-repeat: no-repeat;
+   background-size: cover
```

#### 1472. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15067-L15072` → after: `L16367-L16368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16367-L16368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16367-L16368) · [Before (L15067-L15072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15067-L15072)

```diff
- .RecentlyPlayedGameList {
-   align-items: center;
-   display: flex;
-   gap: .5rem;
-   min-width: 0;
-   width: 100%
+ .MyWorldsSection .CustomLobby.MyWorld .CustomLobbyBackgroundEmojis {
+   display: none
```

#### 1473. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15075-L15086` → after: `L16371-L16372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16371-L16372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16371-L16372) · [Before (L15075-L15086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15075-L15086)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGameTitle {
-   align-items: center;
-   background-color: rgba(57, 73, 128, .45);
-   border-radius: 0;
-   color: #f2f2f2;
-   display: flex;
-   flex-shrink: 0;
-   font-size: 1rem;
-   height: 2.5rem;
-   justify-content: center;
-   margin: 0;
-   width: 2.5rem
+ .MyWorldsSection .CustomLobby {
+   height: 5rem
```

#### 1474. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15089-L15099` → after: `L16375-L16376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16375-L16376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16375-L16376) · [Before (L15089-L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15089-L15099)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGameScroll {
-   -ms-overflow-style: none;
-   align-items: center;
-   display: flex;
-   flex: 1 1;
-   gap: .5rem;
-   margin: -2rem 0 -2rem -2rem;
-   min-width: 0;
-   overflow-x: auto;
-   padding: 2rem;
-   scrollbar-width: none
+ .MyWorldsSection .CustomLobby .CustomLobbyBody {
+   padding-top: 0
```

#### 1475. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15102-L15104` → after: `L16379-L16380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16379-L16380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16379-L16380) · [Before (L15102-L15104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15102-L15104)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGameScroll.RecentlyPlayedGameScrollFadeRight {
-   mask-image: linear-gradient(90deg, transparent 0, #000 0, #000 calc(100% - 3rem), transparent);
-   -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 0, #000 calc(100% - 3rem), transparent)
+ .MyWorldsSection .CustomLobby .CustomLobbyBody .CustomLobbyHeader .CustomLobbyTitle {
+   font-size: 1.75rem
```

#### 1476. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15107-L15108` → after: `L16383-L16389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16383-L16389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16383-L16389) · [Before (L15107-L15108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15107-L15108)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGameScroll::-webkit-scrollbar {
-   display: none
+ .CustomLobbyLoader {
+   align-items: flex-start;
+   align-self: stretch;
+   display: flex;
+   font-size: 2.5rem;
+   justify-content: flex-start;
+   padding: 0 1rem
```

#### 1477. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15111-L15120` → after: `L16392-L16397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16392-L16397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16392-L16397) · [Before (L15111-L15120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15111-L15120)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGame {
-   align-items: center;
-   background-color: #394980;
-   background-position: 50%;
-   background-repeat: no-repeat;
-   background-size: cover;
-   border: 2px solid #394980;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   box-sizing: border-box;
+ .CustomLobby {
+   animation-delay: .5s;
+   background: none;
+   border: none;
+   box-sizing: content-box;
+   color: inherit;
```

#### 1478. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15122-L15126` → after: `L16399-L16405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16399-L16405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16399-L16405) · [Before (L15122-L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15122-L15126)

```diff
-   display: flex;
-   flex: 0 0 12rem;
-   font-size: 1rem;
-   height: 2.5rem;
-   justify-content: center;
+   flex-grow: 1;
+   font: inherit;
+   height: 10rem;
+   letter-spacing: inherit;
+   line-height: inherit;
+   margin: 0;
+   min-width: 18rem;
```

#### 1479. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15129` → after: `L16409-L16412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16409-L16412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16409-L16412) · [Before (L15129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15129)

```diff
-   transition: transform .2s
+   text-align: inherit;
+   text-shadow: inherit;
+   text-transform: inherit;
+   transition: scale .2s
```

#### 1480. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15132-L15135` → after: `L16415-L16416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16415-L16416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16415-L16416) · [Before (L15132-L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15132-L15135)

```diff
- @media(hover:hover) {
-   .RecentlyPlayedGameList .RecentlyPlayedGame:hover {
-     transform: scale(1.05)
-   }
+ .CustomLobby:first-child {
+   animation-delay: .05s
```

#### 1481. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15138-L15139` → after: `L16419-L16420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16419-L16420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16419-L16420) · [Before (L15138-L15139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15138-L15139)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGame.pad-focused {
-   transform: scale(1.05)
+ .CustomLobby:nth-child(2) {
+   animation-delay: .1s
```

#### 1482. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15142-L15145` → after: `L16423-L16424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16423-L16424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16423-L16424) · [Before (L15142-L15145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15142-L15145)

```diff
- @media(hover:none) {
-   .RecentlyPlayedGameList .RecentlyPlayedGame:active {
-     transform: scale(1.05)
-   }
+ .CustomLobby:nth-child(3) {
+   animation-delay: .15s
```

#### 1483. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15148-L15151` → after: `L16427-L16428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16427-L16428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16427-L16428) · [Before (L15148-L15151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15148-L15151)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGame[data-pressing] {
-   border-color: #ffb914;
-   filter: brightness(.8);
-   transition: none
+ .CustomLobby:nth-child(4) {
+   animation-delay: .2s
```

#### 1484. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15154-L15168` → after: `L16431-L16432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16431-L16432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16431-L16432) · [Before (L15154-L15168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15154-L15168)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName {
-   background-color: rgba(0, 0, 0, .4);
-   box-sizing: border-box;
-   height: 100%;
-   left: 0;
-   line-height: 2.2rem;
-   min-width: 0;
-   overflow-x: hidden;
-   padding: 0 .5rem;
-   position: absolute;
-   text-align: center;
-   text-overflow: ellipsis;
-   top: 0;
-   white-space: nowrap;
-   width: 100%
+ .CustomLobby:nth-child(5) {
+   animation-delay: .25s
```

#### 1485. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15171-L15172` → after: `L16435-L16436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16435-L16436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16435-L16436) · [Before (L15171-L15172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15171-L15172)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName .RecentlyPlayedGameVariationTitle {
-   color: #cfcfcf
+ .CustomLobby:nth-child(6) {
+   animation-delay: .3s
```

#### 1486. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15175-L15179` → after: `L16439-L16440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16439-L16440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16439-L16440) · [Before (L15175-L15179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15175-L15179)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow {
-   display: flex;
-   flex-direction: column;
-   justify-content: center;
-   line-height: 1.1
+ .CustomLobby:nth-child(7) {
+   animation-delay: .35s
```

#### 1487. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15182-L15186` → after: `L16443-L16444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16443-L16444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16443-L16444) · [Before (L15182-L15186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15182-L15186)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow .RecentlyPlayedGameEyebrow,
- .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow .RecentlyPlayedGameNameText {
-   overflow-x: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .CustomLobby:nth-child(8) {
+   animation-delay: .4s
```

#### 1488. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15189-L15194` → after: `L16447-L16448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16447-L16448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16447-L16448) · [Before (L15189-L15194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15189-L15194)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow .RecentlyPlayedGameEyebrow {
-   color: #a8e08a;
-   font-size: .55rem;
-   font-weight: 800;
-   letter-spacing: .08em;
-   text-transform: uppercase
+ .CustomLobby:nth-child(9) {
+   animation-delay: .45s
```
