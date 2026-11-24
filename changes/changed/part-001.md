# Changed — Bundle Modifications Report (Part 001 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `1 / 65` (**381** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [Part 002 →](part-002.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/css/101.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/101.css` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309)

#### 1. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L1` → after: `L1-L5886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L1-L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L1-L5886) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L1)

```diff
- .StudioPage {
+ .EverythingMenuContainer {
+   align-items: center;
+   contain: layout style paint;
+   display: flex;
+   height: 100vh;
+   height: 100dvh;
+   isolation: isolate;
+   justify-content: space-between;
+   position: fixed;
+   width: 100vw;
+   z-index: 16
+ }
+ 
+ .EverythingMenuContainer .EverythingMenu {
+   align-items: flex-start;
+   display: flex;
+ ... (5870 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L4-L7` → after: `L5889-L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R5889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L5889-L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L5889-L6167) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L4-L7)

```diff
-   gap: 1.5rem;
-   margin: 0 auto;
-   max-width: 100rem;
-   padding-bottom: 4rem
+   gap: .6rem;
+   isolation: isolate;
+   overflow: hidden;
+   padding: .8rem .6rem .6rem;
+   position: relative;
+   text-align: center
+ }
+ 
+ .DailyDropTile .DailyDropTileArt,
+ .DailyDropTile .DailyDropTileOpen,
+ .DailyDropTile .DailyDropTileTitle,
+ .DailyDropTile .DailyDropTileWait {
+   position: relative;
+   z-index: 3
+ }
+ 
+ ... (263 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L10-L15` → after: `L6170-L6202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6170-L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6170-L6202) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L10-L15)

```diff
- .StudioPage .StudioPageHeader {
-   align-items: center;
-   display: flex;
-   flex-wrap: wrap;
-   gap: 1rem;
-   justify-content: space-between
+ .DailyDropReveal .DailyDropRevealFigures .DailyDropRevealFigure .DailyDropRevealFigureArt .DailyDropRevealBeforeStill {
+   height: 100%;
+   object-fit: contain;
+   width: 100%
+ }
+ 
+ .DailyDropReveal .DailyDropRevealFigures .DailyDropRevealFigure .DailyDropRevealFigureArt .DailyDropRevealBeforeHead {
+   font-size: calc(min(11rem, 30vw)/2)
+ }
+ 
+ .DailyDropReveal .DailyDropRevealFigures .DailyDropRevealFigure .DailyDropRevealFigureArt .DailyDropRevealLive {
+   inset: 0;
+   position: absolute;
+   visibility: hidden
+ }
+ 
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L18` → after: `L6205-L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6205-L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6205-L6206) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L18)

```diff
- .StudioPage .StudioPageHeader .StudioPageTitle {
+ .DailyDropReveal .DailyDropRevealFigures .DailyDropRevealArrow {
+   color: #ffb914;
```

#### 5. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L20` → after: `L6208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6208) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L20)

```diff
-   margin: 0
+   width: 2.5rem
```

#### 6. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L23` → after: `L6211-L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6211-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6211-L6212) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L23)

```diff
- .StudioPage .StudioPageLoader {
+ .DailyDropReveal .DailyDropRevealCaption {
+   align-items: center;
```

#### 7. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L25-L26` → after: `L6214-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6214-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6214-L6220) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L25-L26)

```diff
-   justify-content: center;
-   padding: 4rem 0
+   flex-direction: column;
+   gap: .3rem;
+   min-height: 4.5rem
+ }
+ 
+ .DailyDropReveal .DailyDropRevealCaption .DailyDropRevealTitle {
+   font-size: 1.6rem
```

#### 8. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L29` → after: `L6223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6223) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L29)

```diff
- .StudioPage .StudioPageMessage {
+ .DailyDropReveal .DailyDropRevealCaption .DailyDropRevealHint {
```

#### 9. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L31-L33` → after: `L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6225) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L31-L33)

```diff
-   font-size: 1.2rem;
-   padding: 4rem 0;
-   text-align: center
+   font-size: 1.1rem
```

#### 10. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L36-L37` → after: `L6228-L6243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6228-L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6228-L6243) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L36-L37)

```diff
- .StudioGameList .StudioPageHeader .GoldButton .ButtonBody {
-   font-size: 1rem
+ .DailyDropReveal .DailyDropRevealTap {
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
+   text-transform: inherit
```

#### 11. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L40-L41` → after: `L6246-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6246-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6246-L6254) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L40-L41)

```diff
- .StudioGameList .StudioGameListStatusChip {
-   background-color: #394980;
+ .DailyDropReveal .DailyDropRevealEquip {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   gap: .6rem;
+   width: 100%
+ }
+ 
+ .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealKind {
```

#### 12. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L43-L46` → after: `L6256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6256) · [Before (L43-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L43-L46)

```diff
-   display: inline-block;
-   font-size: .85em;
-   font-weight: 800;
-   padding: .15rem .6rem
+   font-size: 1.1rem
```

#### 13. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L49-L51` → after: `L6259-L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6259-L6260) · [Before (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L49-L51)

```diff
- .StudioGameList .StudioGameListStatusChip.StudioGameListStatusChipPublished {
-   background-color: rgba(29, 208, 109, .15);
-   color: #1dd06d
+ .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealQuestion {
+   font-size: 1.6rem
```

#### 14. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L54-L61` → after: `L6263-L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6263-L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6263-L6268) · [Before (L54-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L54-L61)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup {
-   display: flex;
-   gap: .5rem;
-   max-height: 75vh;
-   max-width: 55rem;
-   min-width: 40rem;
-   overflow-y: scroll;
-   text-align: left
+ .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealButtons {
+   grid-gap: 1rem;
+   display: grid;
+   gap: 1rem;
+   grid-template-columns: 1fr 1fr;
+   width: min(22rem, 100%)
```

#### 15. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L64-L67` → after: `L6271-L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6271-L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6271-L6272) · [Before (L64-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L64-L67)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupTitle {
-   font-size: 2.5rem;
-   font-weight: 700;
-   margin: 0
+ .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealButtons .DailyDropRevealButton {
+   font-size: 1.4rem
```

#### 16. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L70-L74` → after: `L6275-L6277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6275-L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6275-L6277) · [Before (L70-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L70-L74)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupSubtitle {
-   color: #cfcfcf;
-   font-size: 1rem;
-   font-weight: 700;
-   margin: 1rem 0 0
+ .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealError {
+   color: #ff8a80;
+   font-size: 1.1rem
```

#### 17. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L77-L78` → after: `L6280-L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6280-L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6280-L6298) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L77-L78)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupSubtitle.Hidden {
-   display: none
+ .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealCustomise {
+   background: none;
+   border: none;
+   box-sizing: content-box;
+   color: inherit;
+   color: #85baff;
+   cursor: pointer;
+   font: inherit;
+   font-size: 1.1rem;
+   font-weight: 800;
+   letter-spacing: inherit;
+   line-height: inherit;
+   margin: 0;
+   padding: 0;
+   position: relative;
+   text-align: inherit;
+ ... (3 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L81-L87` → after: `L6301-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6301-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6301-L6306) · [Before (L81-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L81-L87)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupSchematicListContainer {
-   border: 2px solid #303a59;
-   border-radius: 0;
-   box-sizing: border-box;
-   overflow-y: auto;
-   padding: .5rem;
-   width: 100%
+ @media(pointer:coarse) {
+   .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealCustomise:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
+   }
```

#### 19. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L90-L99` → after: `L6309-L6312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6309-L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6309-L6312) · [Before (L90-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L90-L99)

```diff
- .SchematicImageContainer {
-   align-items: center;
-   display: flex;
-   font-size: 2rem;
-   height: 100%;
-   justify-content: center;
-   left: 0;
-   top: 0;
-   width: 100%;
-   z-index: 1
+ @media(hover:hover) {
+   .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealCustomise:hover {
+     color: #fff
+   }
```

#### 20. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L102-L103` → after: `L6315-L6316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6315-L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6315-L6316) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L102-L103)

```diff
- .SchematicImageContainer .LogoLoaderOuter {
-   border-color: #a4a4a4 #f2f2f2 #f2f2f2
+ .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealCustomise.pad-focused {
+   color: #fff
```

#### 21. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L106-L114` → after: `L6319-L6322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6319-L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6319-L6322) · [Before (L106-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L106-L114)

```diff
- .SchematicImageContainer .SchematicImage {
-   background-position: 50%;
-   background-repeat: no-repeat;
-   background-size: cover;
-   height: 100%;
-   left: 0;
-   position: absolute;
-   top: 0;
-   width: 100%
+ @media(hover:none) {
+   .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealCustomise:active {
+     color: #fff
+   }
```

#### 22. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L117-L122` → after: `L6325-L6326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6325-L6326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6325-L6326) · [Before (L117-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L117-L122)

```diff
- .SchematicImageContainer .SchematicImage.SchematicImageFadeIn {
-   animation-duration: .3s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: fadeIn;
-   isolation: isolate
+ .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealCustomise .DailyDropRevealCustomiseArrow {
+   font-size: .9em
```

#### 23. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L125` → after: `L6329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6329) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L125)

```diff
- .SchematicImageContainer .SchematicImageError {
+ .DailyDropReveal .DailyDropRevealEquip .DailyDropRevealProgress {
```

#### 24. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L127` → after: `L6331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6331) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L127)

```diff
-   opacity: .4
+   font-size: 1rem
```

#### 25. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L130-L132` → after: `L6334-L6372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6334-L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6334-L6372) · [Before (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L130-L132)

```diff
- .Table {
-   border-collapse: collapse;
-   width: 100%
+ @media(prefers-reduced-motion:reduce) {
+   .DailyDropReveal .DailyDropRevealStage .DailyDropRevealPiece {
+     animation: dailyDropRevealFadeIn .2s linear
+   }
+ 
+   .DailyDropReveal.DailyDropRevealShrinking .DailyDropRevealStage .DailyDropRevealPiece {
+     animation: dailyDropRevealFadeOut .3s linear forwards
+   }
+ }
+ 
+ @keyframes dailyDropRevealPieceIn {
+   0% {
+     opacity: 0;
+     transform: scale(.4)
+   }
+ 
+ ... (23 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L234-L239` → after: `L6474-L6483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6474-L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6474-L6483) · [Before (L234-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L234-L239)

```diff
- .StudioTable {
-   background-color: #3c4b68;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-sizing: border-box;
-   text-align: left
+ .SocialMenu {
+   color: #fff;
+   display: flex;
+   flex: 1 0 1rem;
+   justify-content: center;
+   min-height: 0;
+   overflow-y: auto;
+   pointer-events: all;
+   width: 100%;
+   z-index: 2
```

#### 27. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L242-L243` → after: `L6486-L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6486-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6486-L6494) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L242-L243)

```diff
- .StudioTable thead {
-   background-color: #394980
+ .SocialMenu .SocialMenuInner {
+   align-items: stretch;
+   box-sizing: border-box;
+   display: flex;
+   flex-direction: column;
+   gap: 1rem;
+   max-width: 50rem;
+   padding: 2rem 2rem calc(2rem + var(--notchBottom)) 2rem;
+   width: 100%
```

#### 28. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L246-L251` → after: `L6497-L6502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6497-L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6497-L6502) · [Before (L246-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L246-L251)

```diff
- .StudioTable thead th {
-   color: #a4a4a4;
-   font-size: .85em;
-   font-weight: 800;
-   padding: .75rem 1rem;
-   text-transform: uppercase
+ .SocialMenu .SocialMenuInner .SocialMenuColumn {
+   align-items: stretch;
+   display: flex;
+   flex-direction: column;
+   gap: 1rem;
+   min-width: 0
```

#### 29. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L254-L256` → after: `L6505-L6513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6505-L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6505-L6513) · [Before (L254-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L254-L256)

```diff
- .StudioTable tbody tr {
-   border-top: 1px solid hsla(0, 0%, 95%, .1);
-   cursor: pointer
+ .SocialMenu .SocialMenuInner .SocialMenuBox {
+   align-items: stretch;
+   background-color: #303a59;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   display: flex;
+   flex-direction: column;
+   gap: .6rem;
+   padding: 1rem
```

#### 30. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L259-L262` → after: `L6516-L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6516-L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6516-L6518) · [Before (L259-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L259-L262)

```diff
- @media(hover:hover) {
-   .StudioTable tbody tr:hover {
-     background-color: #394980
-   }
+ .SocialMenu .SocialMenuInner .SocialMenuBox .SocialMenuEmpty {
+   color: #838383;
+   font-size: 1.2rem
```

#### 31. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L265-L266` → after: `L6521-L6526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6521-L6526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6521-L6526) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L265-L266)

```diff
- .StudioTable tbody tr.pad-focused {
-   background-color: #394980
+ .SocialMenu .SocialMenuInner .SocialMenuBox .SocialMenuLoading {
+   align-items: center;
+   display: flex;
+   font-size: 2rem;
+   justify-content: center;
+   padding: 1rem
```

#### 32. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L269-L272` → after: `L6529-L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6529-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6529-L6531) · [Before (L269-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L269-L272)

```diff
- @media(hover:none) {
-   .StudioTable tbody tr:active {
-     background-color: #394980
-   }
+ .SocialMenu .SocialMenuInner .SocialMenuParty:has(.PartyInformation) {
+   background-color: #3b3a65;
+   border: .2rem solid #9b39d5
```

#### 33. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L275-L276` → after: `L6534-L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6534-L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6534-L6535) · [Before (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L275-L276)

```diff
- .StudioTable tbody tr td {
-   padding: .6rem 1rem
+ .SocialMenu .SocialMenuInner .SocialMenuParty:has(.PartyInformation) .SocialSectionTitle {
+   color: #d49cf9
```

#### 34. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L279` → after: `L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6538) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L279)

```diff
- .StudioTable .StudioTableGameCell {
+ .SocialMenu .SocialMenuInner .SocialMenuInvites .SocialMenuInvite {
```

#### 35. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L282` → after: `L6541-L6542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6541-L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6541-L6542) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L282)

```diff
-   gap: .75rem
+   gap: .8rem;
+   min-width: 0
```

#### 36. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L285-L290` → after: `L6545-L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6545-L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6545-L6566) · [Before (L285-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L285-L290)

```diff
- .StudioTable .StudioTableGameCell .StudioTableThumbnail {
-   aspect-ratio: 3/2;
-   border-radius: 0;
-   flex-shrink: 0;
-   height: 3rem;
-   overflow: hidden;
+ .SocialMenu .SocialMenuInner .SocialMenuInvites .SocialMenuInvite .SocialMenuInviteIcon {
+   flex: 0 0 auto;
+   font-size: 1.6rem
+ }
+ 
+ .SocialMenu .SocialMenuInner .SocialMenuInvites .SocialMenuInvite .SocialMenuInviteText {
+   flex: 1 1 auto;
+   font-size: 1.2rem;
+   min-width: 0;
+   overflow-wrap: anywhere
+ }
+ 
+ .SocialMenu .SocialMenuInner .SocialMenuInvites .SocialMenuInvite .SocialMenuInviteDecline,
+ .SocialMenu .SocialMenuInner .SocialMenuInvites .SocialMenuInvite .SocialMenuInviteJoin {
+   flex: 0 0 auto;
+   font-size: 1.1rem
+ ... (6 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L294` → after: `L6570-L6573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6570-L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6570-L6573) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L294)

```diff
- .StudioTable .StudioTableGameCell .StudioTableThumbnail .StudioTableThumbnailImage {
+ .SocialMenu .SocialMenuInner .SocialMenuAddFriend .AddFriendBody .AddFriendBodyOverlay {
+   align-items: center;
+   background-color: rgba(0, 0, 0, .75);
+   display: flex;
```

#### 38. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L296-L297` → after: `L6575-L6583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6575-L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6575-L6583) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L296-L297)

```diff
-   object-fit: cover;
-   width: 100%
+   justify-content: center;
+   left: 0;
+   opacity: 1;
+   position: absolute;
+   text-align: center;
+   top: 0;
+   transition: opacity .2s;
+   width: 100%;
+   z-index: 3
```

#### 39. `bundles/bloxd.io/chunks/css/101.css` (Changed code · before: `L300-L301` → after: `L6586-L6741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309R6586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb6ee6847e608245d543b7bd2b75c4434ec7ef27e859be2e8edeb4143c480309) · [After (L6586-L6741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/101.css#L6586-L6741) · [Before (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/101.css#L300-L301)

```diff
- .StudioTable .StudioTableGameCell .StudioTableGameName {
-   font-weight: 800
+ .SocialMenu .SocialMenuInner .SocialMenuAddFriend .AddFriendBody .AddFriendBodyOverlay.AddFriendBodyOverlayEnter {
+   opacity: 0;
+   pointer-events: none
+ }
+ 
+ .SocialMenu .SocialMenuInner .SocialMenuAddFriend .AddFriendBody .AddFriendBodyOverlay.AddFriendBodyOverlayLoading {
+   font-size: 2rem
+ }
+ 
+ .SocialMenu .SocialMenuInner .SocialMenuAddFriend .AddFriendBody .AddFriendBodyOverlay.AddFriendBodyOverlaySuccess {
+   color: #1dd06d;
+   font-size: 2rem
+ }
+ 
+ .SocialMenu .SocialMenuInner .SocialMenuAddFriend .AddFriendBody .AddFriendBodyOverlay.AddFriendBodyOverlayBecameFriends,
+ .SocialMenu .SocialMenuInner .SocialMenuAddFriend .AddFriendBody .AddFriendBodyOverlay.AddFriendBodyOverlayError {
+ ... (140 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/102.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/102.css` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc)

#### 1. `bundles/bloxd.io/chunks/css/102.css` (Changed code · before: `L290-L293` → after: `L100-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fcR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc) · [After (L100-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/102.css#L100-L106) · [Before (L290-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/102.css#L290-L293)

```diff
- .StudioTable {
-   background-color: #3c4b68;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
+ .StudioLayout {
+   align-items: stretch;
+   animation-duration: .3s;
+   animation-fill-mode: backwards;
+   animation-iteration-count: 1;
+   animation-name: fadeIn;
+   background: #22283b;
```

#### 2. `bundles/bloxd.io/chunks/css/102.css` (Changed code · before: `L295` → after: `L108-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fcR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc) · [After (L108-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/102.css#L108-L116) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/102.css#L295)

```diff
-   text-align: left
+   display: flex;
+   flex-direction: row;
+   height: 100vh;
+   height: 100dvh;
+   isolation: isolate;
+   position: relative;
+   width: 100vw;
+   width: 100dvw;
+   z-index: 1
```

#### 3. `bundles/bloxd.io/chunks/css/102.css` (Changed code · before: `L298-L299` → after: `L119-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fcR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc) · [After (L119-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/102.css#L119-L125) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/102.css#L298-L299)

```diff
- .StudioTable thead {
-   background-color: #394980
+ .StudioLayout .StudioLayoutRight {
+   background: #2b3249;
+   display: flex;
+   flex: 1 0;
+   flex-direction: column;
+   min-width: 0;
+   padding-left: var(--notchLeft)
```

#### 4. `bundles/bloxd.io/chunks/css/102.css` (Changed code · before: `L302-L336` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fcR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/102.css#L128-L129) · [Before (L302-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/102.css#L302-L336)

```diff
- .StudioTable thead th {
-   color: #a4a4a4;
-   font-size: .85em;
-   font-weight: 800;
-   padding: .75rem 1rem;
-   text-transform: uppercase
- }
- 
- .StudioTable tbody tr {
-   border-top: 1px solid hsla(0, 0%, 95%, .1);
-   cursor: pointer
- }
- 
- @media(hover:hover) {
-   .StudioTable tbody tr:hover {
-     background-color: #394980
- ... (19 more removed lines; see GitHub link above)
+ .StudioLayout .StudioLayoutRight .StudioTop {
+   box-sizing: border-box;
```

#### 5. `bundles/bloxd.io/chunks/css/102.css` (Changed code · before: `L338-L352` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fcR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/102.css#L131-L133) · [Before (L338-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/102.css#L338-L352)

```diff
-   gap: .75rem
- }
- 
- .StudioTable .StudioTableGameCell .StudioTableThumbnail {
-   aspect-ratio: 3/2;
-   border-radius: 0;
-   flex-shrink: 0;
-   height: 3rem;
-   overflow: hidden;
-   position: relative
- }
- 
- .StudioTable .StudioTableGameCell .StudioTableThumbnail .StudioTableThumbnailImage {
-   height: 100%;
-   object-fit: cover;
+   flex-direction: column;
+   gap: 1rem;
+   padding: 1rem;
```

#### 6. `bundles/bloxd.io/chunks/css/102.css` (Changed code · before: `L356-L357` → after: `L137-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fcR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc) · [After (L137-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/102.css#L137-L143) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/102.css#L356-L357)

```diff
- .StudioTable .StudioTableGameCell .StudioTableGameName {
-   font-weight: 800
+ .StudioLayout .StudioLayoutRight .StudioTop .StudioNav {
+   grid-gap: 2rem;
+   align-items: center;
+   display: grid;
+   font-size: 1.6rem;
+   gap: 2rem;
+   grid-template-columns: 1fr auto 1fr
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/104.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/104.css` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802)

#### 1. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L1)

```diff
- .StudioGamePage {
+ .StudioPage {
```

#### 2. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L5-L2254` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L6-L7) · [Before (L5-L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L5-L2254)

```diff
-   max-width: 60rem;
-   padding-bottom: 4rem;
-   position: relative
- }
- 
- @media(min-width:1201px) {
-   .StudioGamePage {
-     max-width: 80rem
-   }
- }
- 
- .StudioGamePage .SchematicPage .SchematicPageBody {
-   padding: 2rem
- }
- 
- .StudioGamePage .StudioGamePageCentredMessage {
- ... (2234 more removed lines; see GitHub link above)
+   max-width: 100rem;
+   padding-bottom: 4rem
```

#### 3. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2257-L2795` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L10) · [Before (L2257-L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2257-L2795)

```diff
- .StudioAiJourneyStepTypical {
-   color: #cfcfcf;
-   font-size: .9rem;
-   line-height: 1.35
- }
- 
- .StudioAiJourneyStepLinks {
-   display: flex;
-   flex-wrap: wrap;
-   font-size: 1rem;
-   gap: .3rem;
-   pointer-events: none;
-   position: relative;
-   z-index: 1
- }
- 
- ... (523 more removed lines; see GitHub link above)
+ .StudioPage .StudioPageHeader {
```

#### 4. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2799-L2800` → after: `L13-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L13-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L13-L15) · [Before (L2799-L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2799-L2800)

```diff
-   gap: .4rem;
-   padding: 0 .3rem
+   flex-wrap: wrap;
+   gap: 1rem;
+   justify-content: space-between
```

#### 5. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2803-L2806` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L18-L20) · [Before (L2803-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2803-L2806)

```diff
- .StudioComparisonPicker .StudioComparisonPickerPanel .StudioComparisonPickerSearch .TextInput {
-   box-shadow: none;
-   flex: 1 1;
-   min-width: 0
+ .StudioPage .StudioPageHeader .StudioPageTitle {
+   font-size: 2rem;
+   margin: 0
```

#### 6. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2809` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L23) · [Before (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2809)

```diff
- .StudioComparisonPicker .StudioComparisonPickerPanel .StudioComparisonPickerResults {
+ .StudioPage .StudioPageLoader {
```

#### 7. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2811-L2813` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L25-L26) · [Before (L2811-L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2811-L2813)

```diff
-   flex-direction: column;
-   max-height: 17rem;
-   overflow-y: auto
+   justify-content: center;
+   padding: 4rem 0
```

#### 8. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2816-L2820` → after: `L29-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L29-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L29-L32) · [Before (L2816-L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2816-L2820)

```diff
- .StudioComparisonPicker .StudioComparisonPickerPanel .StudioComparisonPickerMessage {
-   align-items: center;
-   display: flex;
-   justify-content: center;
-   min-height: 4rem;
+ .StudioPage .StudioPageMessage {
+   color: #cfcfcf;
+   font-size: 1.2rem;
+   padding: 4rem 0;
```

#### 9. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2824-L2826` → after: `L36-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L36-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L36-L38) · [Before (L2824-L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2824-L2826)

```diff
- .StudioComparisonPicker .StudioComparisonPickerOption {
-   align-items: center;
-   cursor: pointer;
+ .StudioLeaderboard .StudioLeaderboardBanner {
+   background-color: rgba(255, 185, 20, .12);
+   border-left: .2rem solid #ffb914;
```

#### 10. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2828-L2829` → after: `L40-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L40-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L40-L43) · [Before (L2828-L2829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2828-L2829)

```diff
-   gap: .5rem;
-   padding: .4rem
+   flex-direction: column;
+   font-size: .9rem;
+   gap: .35rem;
+   padding: .75rem 1rem
```

#### 11. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2832-L2835` → after: `L46-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L46-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L46-L50) · [Before (L2832-L2835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2832-L2835)

```diff
- @media(hover:hover) {
-   .StudioComparisonPicker .StudioComparisonPickerOption:hover {
-     background-color: rgba(57, 73, 128, .6)
-   }
+ .StudioLeaderboard .StudioLeaderboardCategories,
+ .StudioLeaderboard .StudioLeaderboardScopes {
+   display: flex;
+   flex-wrap: wrap;
+   gap: .5rem
```

#### 12. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2838-L2839` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L53-L54) · [Before (L2838-L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2838-L2839)

```diff
- .StudioComparisonPicker .StudioComparisonPickerOption.pad-focused {
-   background-color: rgba(57, 73, 128, .6)
+ .StudioLeaderboard .StudioLeaderboardScopes+.StudioLeaderboardCategories {
+   margin-top: -1rem
```

#### 13. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2842-L2845` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L57-L59) · [Before (L2842-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2842-L2845)

```diff
- @media(hover:none) {
-   .StudioComparisonPicker .StudioComparisonPickerOption:active {
-     background-color: rgba(57, 73, 128, .6)
-   }
+ .StudioLeaderboard .StudioLeaderboardTableScroll {
+   overflow-x: auto;
+   overflow-y: hidden
```

#### 14. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2848-L2850` → after: `L62-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L62-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L62-L65) · [Before (L2848-L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2848-L2850)

```diff
- .StudioComparisonPicker .StudioComparisonPickerOption.StudioComparisonPickerOptionSelected {
-   background-color: #394980;
-   color: #ffb914
+ .StudioLeaderboard .StudioLeaderboardOwner .ProfilePreview {
+   background-color: #303a59;
+   cursor: inherit;
+   font-size: .85rem
```

#### 15. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2853-L2859` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L68-L69) · [Before (L2853-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2853-L2859)

```diff
- .StudioComparisonPicker .StudioComparisonPickerOption .StudioComparisonPickerOptionIcon {
-   align-items: center;
-   color: #ffb914;
-   display: flex;
-   flex-shrink: 0;
-   justify-content: center;
-   width: 2.5rem
+ .StudioLeaderboard .StudioLeaderboardOwner .ProfilePreviewLeft {
+   transform: none
```

#### 16. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2862-L2867` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L72-L73) · [Before (L2862-L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2862-L2867)

```diff
- .StudioComparisonPicker .StudioComparisonPickerOption .StudioComparisonPickerOptionThumbnail {
-   flex-shrink: 0;
-   height: 1.6rem;
-   overflow: hidden;
-   position: relative;
-   width: 2.5rem
+ .StudioLeaderboard .StudioLeaderboardEngagementScore {
+   font-weight: 800
```

#### 17. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2870-L2871` → after: `L76-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L76-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L76-L79) · [Before (L2870-L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2870-L2871)

```diff
- .StudioComparisonPicker .StudioComparisonPickerOption .StudioComparisonPickerOptionThumbnail .SchematicImageContainer {
-   font-size: 1.2rem
+ .StudioLeaderboard .StudioLeaderboardPosition {
+   color: #cfcfcf;
+   font-weight: 800;
+   white-space: nowrap
```

#### 18. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2874-L2877` → after: `L82-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L82-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L82-L91) · [Before (L2874-L2877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2874-L2877)

```diff
- .StudioComparisonPicker .StudioComparisonPickerOption .StudioComparisonPickerOptionThumbnail .StudioTableThumbnailImage {
-   height: 100%;
-   object-fit: cover;
-   width: 100%
+ .StudioLeaderboard .StudioLeaderboardPosition .StudioLeaderboardPositionItem {
+   -ms-interpolation-mode: nearest-neighbor;
+   height: 1.5rem;
+   image-rendering: optimizeSpeed;
+   image-rendering: -o-crisp-edges;
+   image-rendering: pixelated;
+   image-rendering: optimize-contrast;
+   margin-right: .4rem;
+   vertical-align: -.35rem;
+   width: 1.5rem
```

#### 19. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2880-L2885` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L94-L95) · [Before (L2880-L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2880-L2885)

```diff
- .StudioComparisonPicker .StudioComparisonPickerOption .StudioComparisonPickerOptionName {
-   font-size: .9rem;
-   line-height: 1.3;
-   overflow: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .StudioLeaderboard .StudioLeaderboardPosition.StudioLeaderboardTopPosition {
+   color: var(--studioTopRankColour)
```

#### 20. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2888-L2893` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L98-L99) · [Before (L2888-L2893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2888-L2893)

```diff
- .StudioTable {
-   background-color: #3c4b68;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-sizing: border-box;
-   text-align: left
+ .StudioLeaderboard .StudioLeaderboardPosition.StudioLeaderboardTopPosition.StudioLeaderboardTopPosition1 {
+   --studioTopRankColour: #5ce1d8
```

#### 21. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2896-L2897` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L102-L103) · [Before (L2896-L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2896-L2897)

```diff
- .StudioTable thead {
-   background-color: #394980
+ .StudioLeaderboard .StudioLeaderboardPosition.StudioLeaderboardTopPosition.StudioLeaderboardTopPosition2 {
+   --studioTopRankColour: #ffb914
```

#### 22. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2900-L2905` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L106-L107) · [Before (L2900-L2905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2900-L2905)

```diff
- .StudioTable thead th {
-   color: #a4a4a4;
-   font-size: .85em;
-   font-weight: 800;
-   padding: .75rem 1rem;
-   text-transform: uppercase
+ .StudioLeaderboard .StudioLeaderboardPosition.StudioLeaderboardTopPosition.StudioLeaderboardTopPosition3 {
+   --studioTopRankColour: #cfcfcf
```

#### 23. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2908-L2910` → after: `L110-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L110-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L110-L117) · [Before (L2908-L2910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2908-L2910)

```diff
- .StudioTable tbody tr {
-   border-top: 1px solid hsla(0, 0%, 95%, .1);
-   cursor: pointer
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup {
+   display: flex;
+   gap: .5rem;
+   max-height: 75vh;
+   max-width: 55rem;
+   min-width: 40rem;
+   overflow-y: scroll;
+   text-align: left
```

#### 24. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2913-L2916` → after: `L120-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L120-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L120-L123) · [Before (L2913-L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2913-L2916)

```diff
- @media(hover:hover) {
-   .StudioTable tbody tr:hover {
-     background-color: #394980
-   }
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupTitle {
+   font-size: 2.5rem;
+   font-weight: 700;
+   margin: 0
```

#### 25. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2919-L2920` → after: `L126-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L126-L130) · [Before (L2919-L2920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2919-L2920)

```diff
- .StudioTable tbody tr.pad-focused {
-   background-color: #394980
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupSubtitle {
+   color: #cfcfcf;
+   font-size: 1rem;
+   font-weight: 700;
+   margin: 1rem 0 0
```

#### 26. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2923-L2926` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L133-L134) · [Before (L2923-L2926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2923-L2926)

```diff
- @media(hover:none) {
-   .StudioTable tbody tr:active {
-     background-color: #394980
-   }
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupSubtitle.Hidden {
+   display: none
```

#### 27. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2929-L2930` → after: `L137-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L137-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L137-L143) · [Before (L2929-L2930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2929-L2930)

```diff
- .StudioTable tbody tr td {
-   padding: .6rem 1rem
+ .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupSchematicListContainer {
+   border: 2px solid #303a59;
+   border-radius: 0;
+   box-sizing: border-box;
+   overflow-y: auto;
+   padding: .5rem;
+   width: 100%
```

#### 28. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2933` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L146) · [Before (L2933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2933)

```diff
- .StudioTable .StudioTableGameCell {
+ .SchematicImageContainer {
```

#### 29. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2936` → after: `L149-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L149-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L149-L155) · [Before (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2936)

```diff
-   gap: .75rem
+   font-size: 2rem;
+   height: 100%;
+   justify-content: center;
+   left: 0;
+   top: 0;
+   width: 100%;
+   z-index: 1
```

#### 30. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2939-L2945` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L158-L159) · [Before (L2939-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2939-L2945)

```diff
- .StudioTable .StudioTableGameCell .StudioTableThumbnail {
-   aspect-ratio: 3/2;
-   border-radius: 0;
-   flex-shrink: 0;
-   height: 3rem;
-   overflow: hidden;
-   position: relative
+ .SchematicImageContainer .LogoLoaderOuter {
+   border-color: #a4a4a4 #f2f2f2 #f2f2f2
```

#### 31. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2948` → after: `L162-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L162-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L162-L165) · [Before (L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2948)

```diff
- .StudioTable .StudioTableGameCell .StudioTableThumbnail .StudioTableThumbnailImage {
+ .SchematicImageContainer .SchematicImage {
+   background-position: 50%;
+   background-repeat: no-repeat;
+   background-size: cover;
```

#### 32. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2950` → after: `L167-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L167-L169) · [Before (L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2950)

```diff
-   object-fit: cover;
+   left: 0;
+   position: absolute;
+   top: 0;
```

#### 33. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L2954-L2955` → after: `L173-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L173-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L173-L188) · [Before (L2954-L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L2954-L2955)

```diff
- .StudioTable .StudioTableGameCell .StudioTableGameName {
-   font-weight: 800
+ .SchematicImageContainer .SchematicImage.SchematicImageFadeIn {
+   animation-duration: .3s;
+   animation-fill-mode: backwards;
+   animation-iteration-count: 1;
+   animation-name: fadeIn;
+   isolation: isolate
+ }
+ 
+ .SchematicImageContainer .SchematicImageError {
+   color: #cfcfcf;
+   opacity: .4
+ }
+ 
+ .Table {
+   border-collapse: collapse;
+   width: 100%
```

#### 34. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3057-L3059` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L290-L291) · [Before (L3057-L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3057-L3059)

```diff
- .StudioGameBoost {
-   align-items: center;
-   background-color: #303a59;
+ .StudioTable {
+   background-color: #3c4b68;
```

#### 35. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3063-L3097` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L295) · [Before (L3063-L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3063-L3097)

```diff
-   display: flex;
-   flex-wrap: wrap;
-   gap: 1rem;
-   justify-content: space-between;
-   margin-bottom: 1rem;
-   padding: .75rem 1rem
- }
- 
- .StudioGameBoost.StudioGameBoostActive {
-   border-color: #ffb914
- }
- 
- .StudioGameBoost .StudioGameBoostInfo {
-   display: flex;
-   flex: 1 1 auto;
-   flex-direction: column;
- ... (19 more removed lines; see GitHub link above)
+   text-align: left
```

#### 36. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3100-L3106` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L298-L299) · [Before (L3100-L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3100-L3106)

```diff
- .StudioGameBoost .StudioGameBoostStat {
-   align-items: center;
-   background-color: #394980;
-   display: flex;
-   flex-direction: column;
-   gap: .1rem;
-   padding: .35rem .9rem
+ .StudioTable thead {
+   background-color: #394980
```

#### 37. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3109-L3111` → after: `L302-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L302-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L302-L304) · [Before (L3109-L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3109-L3111)

```diff
- .StudioGameBoost .StudioGameBoostStat .StudioGameBoostStatValue {
-   color: #ffb914;
-   font-size: 1.4rem;
+ .StudioTable thead th {
+   color: #a4a4a4;
+   font-size: .85em;
```

#### 38. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3113-L3120` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L306) · [Before (L3113-L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3113-L3120)

```diff
-   line-height: 1;
-   white-space: nowrap
- }
- 
- .StudioGameBoost .StudioGameBoostStat .StudioGameBoostStatLabel {
-   color: #cfcfcf;
-   font-size: .7rem;
-   letter-spacing: .03em;
+   padding: .75rem 1rem;
```

#### 39. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3124-L3137` → after: `L310-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L310-L312) · [Before (L3124-L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3124-L3137)

```diff
- .StudioGameBoost .StudioGameBoostSkeletonBar {
-   animation: StudioGameBoostSkeletonPulse 1.2s ease-in-out infinite;
-   background-color: #cfcfcf;
-   display: inline-block;
-   height: 1em;
-   line-height: 1;
-   width: 2.4rem
- }
- 
- .StudioGameBoostApprovalTooltip {
-   display: flex;
-   flex-direction: column;
-   gap: .25rem;
-   max-width: 20rem
+ .StudioTable tbody tr {
+   border-top: 1px solid hsla(0, 0%, 95%, .1);
+   cursor: pointer
```

#### 40. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3140-L3148` → after: `L315-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L315-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L315-L317) · [Before (L3140-L3148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3140-L3148)

```diff
- @keyframes StudioGameBoostSkeletonPulse {
- 
-   0%,
-   to {
-     opacity: .2
-   }
- 
-   50% {
-     opacity: .45
+ @media(hover:hover) {
+   .StudioTable tbody tr:hover {
+     background-color: #394980
```

#### 41. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3152-L3224` → after: `L321-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L321-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L321-L322) · [Before (L3152-L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3152-L3224)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.ApprovalInfoPopup .ApprovalInfoPopupBody {
-   align-items: stretch;
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
-   max-width: 100%;
-   min-height: 12rem;
-   width: 30rem
- }
- 
- .MiddleScreenPopupBackground .MiddleScreenPopup.ApprovalInfoPopup .ApprovalInfoPopupBody .ApprovalInfoPopupTitle {
-   font-size: 1.75rem;
-   margin: 0;
-   text-align: center
- }
- 
- ... (57 more removed lines; see GitHub link above)
+ .StudioTable tbody tr.pad-focused {
+   background-color: #394980
```

#### 42. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3227-L3228` → after: `L325-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L325-L328) · [Before (L3227-L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3227-L3228)

```diff
- .GameApprovalInfoDetails .GameApprovalInfoSummary.Failed .svg-inline--fa {
-   color: #ff8a80
+ @media(hover:none) {
+   .StudioTable tbody tr:active {
+     background-color: #394980
+   }
```

#### 43. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3231-L3234` → after: `L331-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L331-L332) · [Before (L3231-L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3231-L3234)

```diff
- .GameApprovalInfoDetails .GameApprovalInfoRows {
-   display: flex;
-   flex-direction: column;
-   gap: .4rem
+ .StudioTable tbody tr td {
+   padding: .6rem 1rem
```

#### 44. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3237` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L335) · [Before (L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3237)

```diff
- .GameApprovalInfoDetails .GameApprovalInfoRows .GameApprovalInfoRow {
+ .StudioTable .StudioTableGameCell {
```

#### 45. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3241-L3242` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L338) · [Before (L3241-L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3241-L3242)

```diff
-   gap: .6rem;
-   padding: .4rem .6rem
+   gap: .75rem
```

#### 46. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3245` → after: `L341-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L341-L343) · [Before (L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3245)

```diff
- .GameApprovalInfoDetails .GameApprovalInfoRows .GameApprovalInfoRow .svg-inline--fa {
+ .StudioTable .StudioTableGameCell .StudioTableThumbnail {
+   aspect-ratio: 3/2;
+   border-radius: 0;
```

#### 47. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3247-L3265` → after: `L345-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L345-L347) · [Before (L3247-L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3247-L3265)

```diff
-   font-size: 1.1rem;
-   text-align: center;
-   width: 1.2rem
- }
- 
- .GameApprovalInfoDetails .GameApprovalInfoRows .GameApprovalInfoRow.Passed .svg-inline--fa {
-   color: #1dd06d
- }
- 
- .GameApprovalInfoDetails .GameApprovalInfoRows .GameApprovalInfoRow.Failed .svg-inline--fa {
-   color: #ff8a80
- }
- 
- .GameApprovalInfoDetails .GameApprovalInfoRows .GameApprovalInfoRow .GameApprovalInfoRowText {
-   display: flex;
-   flex-direction: column;
- ... (3 more removed lines; see GitHub link above)
+   height: 3rem;
+   overflow: hidden;
+   position: relative
```

#### 48. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3268-L3270` → after: `L350-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L350-L353) · [Before (L3268-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3268-L3270)

```diff
- .GameApprovalInfoDetails .GameApprovalInfoRows .GameApprovalInfoRow .GameApprovalInfoRowText .GameApprovalInfoRowLabel {
-   font-size: .9rem;
-   font-weight: 700
+ .StudioTable .StudioTableGameCell .StudioTableThumbnail .StudioTableThumbnailImage {
+   height: 100%;
+   object-fit: cover;
+   width: 100%
```

#### 49. `bundles/bloxd.io/chunks/css/104.css` (Changed code · before: `L3273-L3275` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6c16a51cb9fccd38fa2372c75682bc4a3018f7d4edcdf68fb5a2cf5184f81802) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/104.css#L356-L357) · [Before (L3273-L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/104.css#L3273-L3275)

```diff
- .GameApprovalInfoDetails .GameApprovalInfoRows .GameApprovalInfoRow .GameApprovalInfoRowText .GameApprovalInfoRowValue {
-   color: #cfcfcf;
-   font-size: .8rem
+ .StudioTable .StudioTableGameCell .StudioTableGameName {
+   font-weight: 800
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/106.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/106.css` (123 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53)

#### 1. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L1-L11` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L1) · [Before (L1-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L1-L11)

```diff
- .BloxdForm .SectionTitle {
-   color: #cfcfcf;
-   font-size: 1rem;
-   padding-bottom: .5rem;
-   text-align: left
- }
- 
- .BloxdForm .SectionBody {
-   align-items: center;
-   border: 2px solid #303a59;
-   border-radius: 0;
+ .StudioGamePage {
```

#### 2. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L13-L15` → after: `L3-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3-L6) · [Before (L13-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L13-L15)

```diff
-   flex-wrap: wrap;
-   gap: .5rem;
-   padding: .5rem;
+   flex-direction: column;
+   margin: 0 auto;
+   max-width: 60rem;
+   padding-bottom: 4rem;
```

#### 3. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L19-L22` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L10-L17) · [Before (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L19-L22)

```diff
- .BloxdForm .SectionBody.SectionBodyHasWarning {
-   border-bottom-left-radius: 0;
-   border-bottom-right-radius: 0;
-   border-color: #ffb914
+ @media(min-width:1201px) {
+   .StudioGamePage {
+     max-width: 80rem
+   }
+ }
+ 
+ .StudioGamePage .SchematicPage .SchematicPageBody {
+   padding: 2rem
```

#### 4. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L25` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L20) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L25)

```diff
- .BloxdForm .SectionBody .SectionBodyOverlay {
+ .StudioGamePage .StudioGamePageCentredMessage {
```

#### 5. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L31` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L24-L25) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L31)

```diff
-   gap: .5rem;
+   font-size: 2rem;
+   gap: .75rem;
```

#### 6. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L33-L45` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L27) · [Before (L33-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L33-L45)

```diff
-   left: 0;
-   pointer-events: none;
-   position: absolute;
-   right: 0;
-   top: 0;
-   transition: background-color .2s;
-   z-index: 2
- }
- 
- .BloxdForm .SectionBody .SectionBodyOverlay.SectionBodyOverlayLoading,
- .BloxdForm .SectionBody .SectionBodyOverlay.SectionBodyOverlaySuccess {
-   background-color: rgba(0, 0, 0, .75);
-   pointer-events: all
+   min-height: 50vh
```

#### 7. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L48` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L30) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L48)

```diff
- .BloxdForm .SectionBody .SectionBodyOverlay.SectionBodyOverlaySuccess .svg-inline--fa {
+ .StudioGamePage .StudioGamePageCentredMessage.StudioGamePageError .svg-inline--fa {
```

#### 8. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L53-L55` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L35-L36) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L53-L55)

```diff
- .BloxdForm .SectionBody .SectionBodyOverlay.SectionBodyOverlayError {
-   background-color: rgba(0, 0, 0, .75);
-   pointer-events: all
+ .StudioGamePage .StudioGamePageCentredMessage.StudioGamePageError div {
+   font-size: 1.25rem
```

#### 9. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L58-L60` → after: `L39-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L39-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L39-L49) · [Before (L58-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L58-L60)

```diff
- .BloxdForm .SectionBody .SectionBodyOverlay.SectionBodyOverlayError .svg-inline--fa {
-   color: #ff8a80;
-   font-size: 3rem
+ .StudioGamePage .StudioGamePageHeader {
+   align-items: stretch;
+   background-color: #303a59;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-sizing: border-box;
+   display: flex;
+   gap: 1.25rem;
+   margin-bottom: 1.5rem;
+   padding: 1rem;
+   width: 100%
```

#### 10. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L63-L70` → after: `L52-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L52-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L52-L58) · [Before (L63-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L63-L70)

```diff
- .BloxdForm .SectionBodyWarning {
-   background-color: #ffb914;
-   border-bottom-left-radius: 0;
-   border-bottom-right-radius: 0;
-   color: #000;
-   font-size: 1rem;
-   padding: .5rem 0 .5rem .5rem;
-   text-shadow: none
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageThumbnail {
+   aspect-ratio: 3/2;
+   border-radius: 0;
+   flex-shrink: 0;
+   height: 8rem;
+   overflow: hidden;
+   position: relative
```

#### 11. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L73-L74` → after: `L61-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L61-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L61-L76) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L73-L74)

```diff
- .LabeledInput {
-   align-items: stretch;
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageThumbnail .StudioGamePageThumbnailImage {
+   height: 100%;
+   object-fit: cover;
+   width: 100%
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo {
+   display: flex;
+   flex-direction: column;
+   flex-grow: 1;
+   gap: .4rem;
+   min-width: 0
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow {
+   align-items: center;
```

#### 12. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L76-L77` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L78-L79) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L76-L77)

```diff
-   min-height: 3rem;
-   transition: filter .2s
+   gap: .75rem;
+   justify-content: space-between
```

#### 13. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L80-L82` → after: `L82-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L82-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L82-L87) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L80-L82)

```diff
- .LabeledInput.DisabledLabelInput {
-   filter: brightness(.6);
-   pointer-events: none
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageTitleGroup {
+   align-items: center;
+   display: flex;
+   flex-wrap: wrap;
+   gap: .75rem;
+   min-width: 0
```

#### 14. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L85-L87` → after: `L90-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L90-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L90-L93) · [Before (L85-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L85-L87)

```diff
- .LabeledInput .LabeledInputTooltip {
-   font-size: 1.2rem;
-   max-width: 25rem
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageTitle {
+   font-size: 1.75rem;
+   margin: 0;
+   word-break: break-word
```

#### 15. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L90` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L96) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L90)

```diff
- .LabeledInput .Label {
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageLiveCcu {
```

#### 16. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L92-L98` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L98-L99) · [Before (L92-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L92-L98)

```diff
-   background-color: #303a59;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   border-bottom-right-radius: 0;
-   border-right: none;
-   border-top-right-radius: 0;
-   color: #cfcfcf;
+   background-color: #394980;
+   color: #f2f2f2;
```

#### 17. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L100` → after: `L101-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L101-L103) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L100)

```diff
-   font-size: 1.2rem;
+   flex-shrink: 0;
+   font-size: .85rem;
+   font-weight: 800;
```

#### 18. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L102-L103` → after: `L105-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L105-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L105-L129) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L102-L103)

```diff
-   justify-content: center;
-   padding: .2rem .5rem
+   padding: .15rem .6rem
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageLiveCcu .StudioGamePageLiveCcuDot {
+   animation: StudioGamePageLiveCcuPulse 1.6s ease-in-out infinite;
+   background-color: #1dd06d;
+   height: .45rem;
+   width: .45rem
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageLiveCcu.StudioGamePageLiveCcuUnknown {
+   color: #cfcfcf
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageLiveCcu.StudioGamePageLiveCcuUnknown .StudioGamePageLiveCcuDot {
+   animation: none;
+ ... (9 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L106` → after: `L132-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L132-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L132-L150) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L106)

```diff
- .LabeledInput .Label.ClickableLabel {
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageStatusChips .StudioGamePageStatusChip {
+   background-color: #394980;
+   color: #cfcfcf;
+   font-size: .85em;
+   font-weight: 800;
+   padding: .15rem .6rem;
+   text-transform: uppercase
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageStatusChips .StudioGamePageStatusChip.StudioGamePageStatusChipPublished {
+   background-color: rgba(29, 208, 109, .15);
+   color: #1dd06d
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageStatusChips .StudioGamePageApprovalChip {
+   align-items: center;
+ ... (3 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L108` → after: `L152-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L152-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L152-L163) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L108)

```diff
-   position: relative
+   display: flex;
+   font-family: inherit;
+   font-size: .8em;
+   font-weight: 800;
+   gap: .35rem;
+   padding: .15rem .6rem;
+   text-transform: uppercase
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageStatusChips .StudioGamePageApprovalChip.StudioGamePageApprovalChipPassed {
+   background-color: rgba(29, 208, 109, .15);
+   color: #1dd06d
```

#### 21. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L111-L115` → after: `L166-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L166-L168) · [Before (L111-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L111-L115)

```diff
- @media(pointer:coarse) {
-   .LabeledInput .Label.ClickableLabel:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
+ @media(hover:hover) {
+   .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageStatusChips .StudioGamePageApprovalChip:hover {
+     filter: brightness(1.2)
```

#### 22. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L119-L127` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L172-L173) · [Before (L119-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L119-L127)

```diff
- .LabeledInput .TextInput,
- .LabeledInput input[type=number] {
-   background-color: #303a59;
-   border-bottom-left-radius: 0;
-   border-top-left-radius: 0;
-   box-shadow: none;
-   font-size: 1.2rem;
-   padding: .5rem;
-   text-align: left
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageStatusChips .StudioGamePageApprovalChip.pad-focused {
+   filter: brightness(1.2)
```

#### 23. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L130-L131` → after: `L176-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L176-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L176-L179) · [Before (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L130-L131)

```diff
- .LabeledInput input[type=number] {
-   width: 7rem
+ @media(hover:none) {
+   .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageTitleRow .StudioGamePageStatusChips .StudioGamePageApprovalChip:active {
+     filter: brightness(1.2)
+   }
```

#### 24. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L134` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L182) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L134)

```diff
- .LabeledInput .BloxdDropdownControl {
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageHeaderMeta {
```

#### 25. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L141-L144` → after: `L185-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L185-L187) · [Before (L141-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L141-L144)

```diff
-   font-size: 1.2rem;
-   height: 100%;
-   padding: 0 2rem 0 .5rem;
-   text-align: left
+   flex-wrap: wrap;
+   font-size: .9rem;
+   gap: .25rem .6rem
```

#### 26. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L147-L149` → after: `L190-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L190-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L190-L207) · [Before (L147-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L147-L149)

```diff
- .LabeledInput .Dropdown-option {
-   font-size: 1.2rem;
-   text-align: left
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageHeaderMeta>*+:before {
+   content: "•";
+   margin-right: .6rem;
+   opacity: .35
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageHeaderMeta .StudioGamePageCategory {
+   color: #cfcfcf
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageHeaderMeta .StudioGamePageCategory span {
+   color: #fff;
+   font-weight: 800
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageHeaderMeta .StudioGamePagePublishedAt,
+ ... (2 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L152` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L210) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L152)

```diff
- .LabeledInput .OtherInput {
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageHeaderMeta .StudioGamePageFavourites {
```

#### 28. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L161-L162` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L213) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L161-L162)

```diff
-   justify-content: center;
-   padding: 0 1rem
+   font-weight: 800
```

#### 29. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L165` → after: `L216-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L216-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L216-L221) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L165)

```diff
- .SwitchContainer {
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageHeaderMeta .StudioGamePageFavourites .svg-inline--fa {
+   color: #fc6464;
+   margin-right: .35rem
+ }
+ 
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageHeaderActions {
```

#### 30. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L167-L168` → after: `L223-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L223-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L223-L227) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L167-L168)

```diff
-   cursor: pointer;
-   display: inline-flex
+   display: flex;
+   flex-wrap: wrap;
+   gap: .5rem;
+   margin-top: auto;
+   padding-top: .5rem
```

#### 31. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L171-L174` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L230-L231) · [Before (L171-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L171-L174)

```diff
- .SwitchContainer.SwitchContainerDisabled {
-   cursor: default;
-   filter: brightness(.6);
-   pointer-events: none
+ .StudioGamePage .StudioGamePageHeader .StudioGamePageHeaderInfo .StudioGamePageHeaderActions .ButtonBody {
+   padding: .5rem 1rem
```

#### 32. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L177-L179` → after: `L234-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L234-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L234-L238) · [Before (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L177-L179)

```diff
- .SwitchContainer .SwitchCheckbox.rc-checkbox {
-   height: 1.5rem;
-   width: 2.625rem
+ .StudioGamePage .StudioGamePageTabs {
+   display: flex;
+   font-size: 1.6rem;
+   gap: 1rem;
+   padding-left: 1rem
```

#### 33. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L182` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L241) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L182)

```diff
- .SwitchContainer .SwitchCheckbox .rc-checkbox-inner {
+ .StudioGamePage .StudioGamePageContent {
```

#### 34. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L184-L186` → after: `L243-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L243-L245) · [Before (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L184-L186)

```diff
-   border: 1px solid #3c4b68;
-   height: 100%;
-   transition: background-color .15s, border-color .15s;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-sizing: border-box;
```

#### 35. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L190-L191` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L249-L250) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L190-L191)

```diff
- .SwitchContainer .SwitchCheckbox .rc-checkbox-inner:after {
-   content: none
+ .StudioGamePage .StudioGamePageAi {
+   padding: 2rem 2rem 0
```

#### 36. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L194-L202` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L253-L254) · [Before (L194-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L194-L202)

```diff
- .SwitchContainer .SwitchCheckbox .rc-checkbox-inner:before {
-   background-color: #a4a4a4;
-   content: "";
-   height: 1.125rem;
-   left: .1875rem;
-   position: absolute;
-   top: .1875rem;
-   transition: transform .15s, background-color .15s;
-   width: 1.125rem
+ .StudioGamePage .StudioGamePageAiHidden {
+   display: none
```

#### 37. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L205-L207` → after: `L257-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L257-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L257-L266) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L205-L207)

```diff
- .SwitchContainer .SwitchCheckbox .rc-checkbox-input:focus+.rc-checkbox-inner,
- .SwitchContainer .SwitchCheckbox.rc-checkbox:hover .rc-checkbox-inner {
-   border-color: #ffb914
+ @keyframes StudioGamePageLiveCcuPulse {
+ 
+   0%,
+   to {
+     opacity: 1
+   }
+ 
+   50% {
+     opacity: .25
+   }
```

#### 38. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L210-L212` → after: `L269-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L269-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L269-L273) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L210-L212)

```diff
- .SwitchContainer .SwitchCheckbox.rc-checkbox-checked .rc-checkbox-inner {
-   background-color: #ffb914;
-   border-color: #ffb914
+ .StudioOpenedStat {
+   animation: StudioOpenedStatFlash 1.5s ease-out;
+   outline: .2rem solid transparent;
+   outline-offset: .3rem;
+   scroll-margin-top: 1rem
```

#### 39. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L215-L217` → after: `L276-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L276-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L276-L280) · [Before (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L215-L217)

```diff
- .SwitchContainer .SwitchCheckbox.rc-checkbox-checked .rc-checkbox-inner:before {
-   background-color: #22283b;
-   transform: translateX(1.125rem)
+ @media(prefers-reduced-motion:reduce) {
+   .StudioOpenedStat {
+     animation: none;
+     outline-color: #ffb914
+   }
```

#### 40. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L220` → after: `L283-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L283-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L283-L295) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L220)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup {
+ @keyframes StudioOpenedStatFlash {
+ 
+   0%,
+   40% {
+     outline-color: #ffb914
+   }
+ 
+   to {
+     outline-color: transparent
+   }
+ }
+ 
+ .StudioMetricsTab {
```

#### 41. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L223-L226` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L298) · [Before (L223-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L223-L226)

```diff
-   max-height: 90vh;
-   max-height: 90dvh;
-   overflow: hidden;
-   position: relative
+   gap: 0
```

#### 42. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L229-L234` → after: `L301-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L301-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L301-L317) · [Before (L229-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L229-L234)

```diff
- @media(orientation:portrait)and (max-width:600px) {
-   .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup {
-     box-sizing: border-box;
-     max-width: none;
-     width: calc(100vw - 2rem)
-   }
+ .StudioMetricsTab .StudioMetricsSection {
+   display: flex;
+   flex-direction: column;
+   gap: .75rem
+ }
+ 
+ .StudioMetricsTab .StudioMetricsSection .StudioMetricsSectionTitle {
+   color: #f2f2f2;
+   font-size: 1.4rem;
+   font-weight: 800;
+   margin: 0
+ }
+ 
+ .StudioMetricsTab .StudioMetricsSection .StudioMetricsSectionNote {
+   color: #cfcfcf;
+   font-size: .9rem;
+ ... (1 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L237` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L320) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L237)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby {
+ .StudioMetricsTab .StudioMetricsTabBody {
```

#### 44. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L240-L242` → after: `L323-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L323-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L323-L331) · [Before (L240-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L240-L242)

```diff
-   max-width: 75vw;
-   min-height: 0;
-   width: 80rem
+   gap: 2.5rem;
+   padding: 2rem
+ }
+ 
+ .StudioMetricsTab .StudioMetricsGrid {
+   grid-gap: 1rem;
+   display: grid;
+   gap: 1rem;
+   grid-template-columns: repeat(auto-fill, minmax(min(14rem, 100%), 1fr))
```

#### 45. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L245-L248` → after: `L334-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L334-L336) · [Before (L245-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L245-L248)

```diff
- @media(orientation:portrait)and (max-width:600px) {
-   .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby {
-     max-width: none;
-     width: 100%
+ @media(min-width:1201px) {
+   .StudioMetricsTab .StudioMetricsGrid {
+     grid-template-columns: repeat(3, 1fr)
```

#### 46. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L252-L253` → after: `L340-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L340-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L340-L345) · [Before (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L252-L253)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby.CreateCustomLobbySuccess .CreateCustomLobbyBody {
-   overflow: hidden
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard {
+   background-color: #3c4b68;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   display: flex;
+   flex-direction: column
```

#### 47. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L256` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L348) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L256)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbySuccessOverlay {
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard .StudioMetricCardBody {
```

#### 48. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L258-L259` → after: `L350-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L350-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L350-L373) · [Before (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L258-L259)

```diff
-   background-color: #22283b;
-   box-sizing: border-box;
+   display: flex;
+   flex-grow: 1;
+   gap: .75rem;
+   min-width: 0;
+   padding: 1rem
+ }
+ 
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard .StudioMetricCardBody .StudioMetricCardIcon {
+   color: #ffb914;
+   flex-shrink: 0;
+   font-size: 1.5rem
+ }
+ 
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard .StudioMetricCardBody .StudioMetricCardIconImage {
+   -ms-interpolation-mode: nearest-neighbor;
+   height: 2.4rem;
+ ... (8 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L262-L270` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L376) · [Before (L262-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L262-L270)

```diff
-   gap: 4rem;
-   height: 100%;
-   justify-content: center;
-   left: 0;
-   padding: 2rem 0;
-   position: absolute;
-   top: 0;
-   width: 100%;
-   z-index: 10
+   min-width: 0
```

#### 50. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L273` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L379) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L273)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbySuccessOverlay .CreateCustomLobbySuccessTitle {
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard .StudioMetricCardBody .StudioMetricCardText .StudioMetricCardLabel {
```

#### 51. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L275-L277` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L381) · [Before (L275-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L275-L277)

```diff
-   animation-delay: .2s;
-   background-color: rgba(182, 131, 14, .2);
-   color: #ffb914;
+   color: #cfcfcf;
```

#### 52. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L279-L284` → after: `L383-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L383-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L383-L402) · [Before (L279-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L279-L284)

```diff
-   font-size: 12rem;
-   height: 14rem;
-   justify-content: center;
-   position: relative;
-   text-align: left;
-   width: 14rem
+   font-size: .85rem;
+   gap: .35rem
+ }
+ 
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard .StudioMetricCardBody .StudioMetricCardText .StudioMetricCardValue {
+   font-size: 1.3rem;
+   font-weight: 800;
+   line-height: 1.3;
+   min-height: 1.3em;
+   word-break: break-word
+ }
+ 
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard .StudioMetricCardBody .StudioMetricCardText .StudioMetricCardChange {
+   align-items: center;
+   color: #cfcfcf;
+   display: flex;
+ ... (4 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L287-L288` → after: `L405-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L405-L406) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L287-L288)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbySuccessOverlay .CreateCustomLobbySuccessTitle .Confetti {
-   font-size: 6rem
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard .StudioMetricCardBody .StudioMetricCardText .StudioMetricCardChange.StudioMetricCardChangeUp {
+   color: #1dd06d
```

#### 54. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L291-L292` → after: `L409-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L409-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L409-L410) · [Before (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L291-L292)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbySuccessOverlay .CreateCustomLobbySuccessTitle .Confetti .ConfettiParticle {
-   animation-delay: .2s
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard .StudioMetricCardBody .StudioMetricCardText .StudioMetricCardChange.StudioMetricCardChangeDown {
+   color: #ff8a80
```

#### 55. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L295` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L413) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L295)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbySuccessOverlay .CreateCustomLobbySuccessButtons {
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard .StudioMetricCardComparison {
```

#### 56. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L297` → after: `L415-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L415-L416) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L297)

```diff
-   animation-delay: .5s;
+   background-color: hsla(0, 0%, 64%, .15);
+   color: #a4a4a4;
```

#### 57. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L299-L300` → after: `L418-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L418-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L418-L423) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L299-L300)

```diff
-   gap: 1rem;
-   justify-content: center
+   font-size: .75rem;
+   gap: .25rem;
+   justify-content: center;
+   line-height: 1.3;
+   min-height: 1.3em;
+   padding: .4rem 1rem
```

#### 58. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L303-L304` → after: `L426-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L426-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L426-L447) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L303-L304)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbySuccessOverlay .CreateCustomLobbySuccessButtons .NewButton {
-   font-size: 3rem
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard .StudioMetricCardComparison.StudioMetricCardComparisonAhead {
+   color: #1dd06d
+ }
+ 
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard .StudioMetricCardComparison.StudioMetricCardComparisonBehind {
+   color: #ff8a80
+ }
+ 
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard.StudioMetricCardTopRank {
+   border-color: var(--studioTopRankColour)
+ }
+ 
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard.StudioMetricCardTopRank .StudioMetricCardValue {
+   color: var(--studioTopRankColour)
+ }
+ 
+ ... (6 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L307` → after: `L450-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L450-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L450-L462) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L307)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyTitleContainer {
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard.StudioMetricCardTopRank.StudioMetricCardTopRank3 {
+   --studioTopRankColour: #cfcfcf
+ }
+ 
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard.StudioMetricCardPlaceholder .StudioMetricCardIcon {
+   color: #cfcfcf
+ }
+ 
+ .StudioMetricsTab .StudioMetricsGrid .StudioMetricCard.StudioMetricCardPlaceholder .StudioMetricCardValue {
+   opacity: .6
+ }
+ 
+ .StudioMetricsTab .StudioMetricsBanner {
```

#### 60. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L310-L312` → after: `L467-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L467-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L467-L469) · [Before (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L310-L312)

```diff
-   flex: none;
-   margin-right: 5rem;
-   padding-bottom: 1.5rem
+   font-size: .9rem;
+   gap: .75rem;
+   padding: .75rem 1rem
```

#### 61. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L315-L318` → after: `L472-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L472-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L472-L474) · [Before (L315-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L315-L318)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyTitleContainer .CreateCustomLobbyTitle {
-   font-size: 3rem;
-   font-weight: 700;
-   text-align: left
+ .StudioMetricsTab .StudioMetricsBannerWarning {
+   background-color: rgba(255, 185, 20, .12);
+   border-left-color: #ffb914
```

#### 62. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L321-L324` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L477-L478) · [Before (L321-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L321-L324)

```diff
- @media(orientation:portrait)and (max-width:600px) {
-   .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyTitleContainer .CreateCustomLobbyTitle {
-     font-size: 2.5rem
-   }
+ .StudioMetricsTab .StudioMetricsBannerWarning svg {
+   color: #ffb914
```

#### 63. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L327-L334` → after: `L481-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L481-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L481-L483) · [Before (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L327-L334)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyBody {
-   flex: 0 1 auto;
-   min-height: 0;
-   overflow-x: hidden;
-   overflow-y: auto;
-   scroll-padding-block: 1.5rem 2rem;
-   scrollbar-color: #3c4b68 #22283b;
-   scrollbar-width: thin
+ .StudioMetricsTab .StudioMetricsBannerError {
+   background-color: rgba(227, 79, 79, .12);
+   border-left-color: #e34f4f
```

#### 64. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L337-L338` → after: `L486-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L486-L487) · [Before (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L337-L338)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyBody::-webkit-scrollbar {
-   width: 6px
+ .StudioMetricsTab .StudioMetricsBannerError svg {
+   color: #e34f4f
```

#### 65. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L341-L342` → after: `L490-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L490-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L490-L493) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L341-L342)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyBody::-webkit-scrollbar-track {
-   background-color: #22283b
+ .StudioMetricsTab .StudioMetricsRangeTabs {
+   display: flex;
+   flex-wrap: wrap;
+   gap: .5rem
```

#### 66. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L345-L347` → after: `L496-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L496-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L496-L520) · [Before (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L345-L347)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyBody::-webkit-scrollbar-thumb {
-   background-color: #3c4b68;
-   border-radius: 0
+ .StudioMetricsTab .StudioMetricsCharts {
+   grid-gap: 1rem;
+   display: grid;
+   gap: 1rem;
+   grid-template-columns: repeat(auto-fit, minmax(min(24rem, 100%), 1fr))
+ }
+ 
+ .StudioMetricsTab .StudioMetricsChartsError {
+   align-items: center;
+   display: flex;
+   flex-wrap: wrap;
+   gap: .75rem
+ }
+ 
+ .StudioMetricsTab .StudioMetricsChartsError .svg-inline--fa {
+   color: #ffb914;
+ ... (9 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L350-L352` → after: `L523-L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L523-L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L523-L2731) · [Before (L350-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L350-L352)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyBody.CreateCustomLobbyBodyMoreAbove {
-   mask-image: linear-gradient(180deg, transparent 0, #000 1.5rem, #000 100%, transparent);
-   -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 1.5rem, #000 100%, transparent)
+ .StudioStatsBarChartFilters .StudioStatsBarChartNameFilter {
+   min-width: 0;
+   padding: .4em .6em;
+   text-align: left;
+   width: 9rem
+ }
+ 
+ .StudioStatsBarChartFilters .Dropdown-root,
+ .StudioStatsBarChartFilters .StudioEventPickerDropdown {
+   min-width: 0
+ }
+ 
+ .StudioStatsBarChartFilters .BloxdDropdownControl {
+   padding: .4em 2.5em .4em .6em
+ }
+ 
+ ... (2193 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L355-L357` → after: `L2734-L2735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2734-L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2734-L2735) · [Before (L355-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L355-L357)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyBody.CreateCustomLobbyBodyMoreBelow {
-   mask-image: linear-gradient(180deg, transparent 0, #000 0, #000 calc(100% - 2rem), transparent);
-   -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 0, #000 calc(100% - 2rem), transparent)
+ .StudioTextLoading .StudioTextLoadingToggle:hover {
+   color: #f2f2f2
```

#### 69. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L360-L362` → after: `L2738-L2741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2738-L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2738-L2741) · [Before (L360-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L360-L362)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyBody.CreateCustomLobbyBodyMoreAbove.CreateCustomLobbyBodyMoreBelow {
-   mask-image: linear-gradient(180deg, transparent 0, #000 1.5rem, #000 calc(100% - 2rem), transparent);
-   -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 1.5rem, #000 calc(100% - 2rem), transparent)
+ @keyframes StudioTextLoadingSpin {
+   to {
+     transform: rotate(1turn)
+   }
```

#### 70. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L365-L366` → after: `L2744-L2746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2744-L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2744-L2746) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L365-L366)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyBody .CreateCustomLobbyFields {
-   align-items: stretch;
+ .StudioComparisonBar {
+   align-items: center;
+   background-color: hsla(0, 0%, 64%, .15);
```

#### 71. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L368-L373` → after: `L2748-L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2748-L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2748-L2750) · [Before (L368-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L368-L373)

```diff
-   flex-direction: column;
-   gap: 2rem
- }
- 
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .NameInput {
-   max-width: 100%
+   flex-wrap: wrap;
+   gap: .5rem;
+   padding: 1rem
```

#### 72. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L376-L377` → after: `L2753-L2755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2753-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2753-L2755) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L376-L377)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .NameInput .TextInput {
-   min-width: 0
+ .StudioComparisonBar .StudioComparisonBarLabel {
+   color: #cfcfcf;
+   font-size: .8rem
```

#### 73. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L380-L381` → after: `L2758-L2761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2758-L2761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2758-L2761) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L380-L381)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby:not(.AdvancedMode) .NameInput {
-   width: 100%
+ .StudioComparisonBar .StudioComparisonBarUnavailable {
+   color: #cfcfcf;
+   font-size: .8rem;
+   font-style: italic
```

#### 74. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L384-L385` → after: `L2764-L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2764-L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2764-L2765) · [Before (L384-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L384-L385)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby:not(.AdvancedMode) .NameInput .TextInput {
-   flex: 1 1 auto
+ .StudioComparisonPicker {
+   position: relative
```

#### 75. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L388-L390` → after: `L2768-L2776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2768-L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2768-L2776) · [Before (L388-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L388-L390)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby:not(.AdvancedMode) .NameInput .Label,
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby:not(.AdvancedMode) .NameInput .TextInput {
-   font-size: 2rem
+ .StudioComparisonPicker .StudioComparisonPickerAnchor .StudioComparisonPickerValue {
+   display: inline-block;
+   line-height: 1.3;
+   margin-right: .4rem;
+   max-width: 12rem;
+   overflow: hidden;
+   text-overflow: ellipsis;
+   vertical-align: bottom;
+   white-space: nowrap
```

#### 76. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L393-L398` → after: `L2779-L2792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2779-L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2779-L2792) · [Before (L393-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L393-L398)

```diff
- @media(orientation:portrait)and (max-width:600px) {
- 
-   .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby:not(.AdvancedMode) .NameInput .Label,
-   .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby:not(.AdvancedMode) .NameInput .TextInput {
-     font-size: 1.6rem
-   }
+ .StudioComparisonPicker .StudioComparisonPickerPanel {
+   background-color: #3c4b68;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   display: flex;
+   flex-direction: column;
+   gap: .4rem;
+   left: 0;
+   max-width: calc(100vw - 2rem);
+   padding: .5rem;
+   position: absolute;
+   top: calc(100% + .4rem);
+   width: 18rem;
+   z-index: 21
```

#### 77. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L401` → after: `L2795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2795) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L401)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter {
+ .StudioComparisonPicker .StudioComparisonPickerPanel .StudioComparisonPickerSearch {
```

#### 78. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L403` → after: `L2797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2797) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L403)

```diff
-   border-top: 2px solid hsla(0, 0%, 95%, .1);
+   color: #cfcfcf;
```

#### 79. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L405-L411` → after: `L2799-L2800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2799-L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2799-L2800) · [Before (L405-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L405-L411)

```diff
-   flex: none;
-   flex-wrap: wrap;
-   gap: .5rem 1rem;
-   margin-top: 1rem;
-   min-width: 0;
-   padding-top: 1rem;
-   text-align: left
+   gap: .4rem;
+   padding: 0 .3rem
```

#### 80. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L414-L415` → after: `L2803-L2806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2803-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2803-L2806) · [Before (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L414-L415)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter .CreateCustomLobbyAdvancedToggle .ClickableOtherInput {
-   position: relative
+ .StudioComparisonPicker .StudioComparisonPickerPanel .StudioComparisonPickerSearch .TextInput {
+   box-shadow: none;
+   flex: 1 1;
+   min-width: 0
```

#### 81. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L418-L423` → after: `L2809-L2813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2809-L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2809-L2813) · [Before (L418-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L418-L423)

```diff
- @media(pointer:coarse) {
-   .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter .CreateCustomLobbyAdvancedToggle .ClickableOtherInput:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
-   }
+ .StudioComparisonPicker .StudioComparisonPickerPanel .StudioComparisonPickerResults {
+   display: flex;
+   flex-direction: column;
+   max-height: 17rem;
+   overflow-y: auto
```

#### 82. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L426` → after: `L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2816) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L426)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter .CreateCustomLobbyError {
+ .StudioComparisonPicker .StudioComparisonPickerPanel .StudioComparisonPickerMessage {
```

#### 83. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L435-L437` → after: `L2820-L2821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2820-L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2820-L2821) · [Before (L435-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L435-L437)

```diff
-   min-width: 0;
-   padding: 0 1rem;
-   text-align: left
+   min-height: 4rem;
+   text-align: center
```

#### 84. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L440` → after: `L2824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2824) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L440)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter .CreateCustomLobbyButton {
+ .StudioComparisonPicker .StudioComparisonPickerOption {
```

#### 85. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L442-L444` → after: `L2826-L2829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2826-L2829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2826-L2829) · [Before (L442-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L442-L444)

```diff
-   display: inline-flex;
-   height: 3rem;
-   justify-content: center
+   cursor: pointer;
+   display: flex;
+   gap: .5rem;
+   padding: .4rem
```

#### 86. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L447-L451` → after: `L2832-L2834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2832-L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2832-L2834) · [Before (L447-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L447-L451)

```diff
- @media(pointer:coarse) {
-   .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter .CreateCustomLobbyButton:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
+ @media(hover:hover) {
+   .StudioComparisonPicker .StudioComparisonPickerOption:hover {
+     background-color: rgba(57, 73, 128, .6)
```

#### 87. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L454-L455` → after: `L2842-L2844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2842-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2842-L2844) · [Before (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L454-L455)

```diff
-   .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter .CreateCustomLobbyButton {
-     overflow: visible
+ @media(hover:none) {
+   .StudioComparisonPicker .StudioComparisonPickerOption:active {
+     background-color: rgba(57, 73, 128, .6)
```

#### 88. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L459-L461` → after: `L2848-L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2848-L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2848-L2850) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L459-L461)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.CreateCustomLobbyPopup .CreateCustomLobby .CreateCustomLobbyFooter .CreateCustomLobbyButton .ButtonBody {
-   overflow: hidden;
-   padding: 0 1rem
+ .StudioComparisonPicker .StudioComparisonPickerOption.StudioComparisonPickerOptionSelected {
+   background-color: #394980;
+   color: #ffb914
```

#### 89. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L464-L465` → after: `L2853-L2859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2853-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2853-L2859) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L464-L465)

```diff
- .CustomLobbyDescription {
-   width: 100%
+ .StudioComparisonPicker .StudioComparisonPickerOption .StudioComparisonPickerOptionIcon {
+   align-items: center;
+   color: #ffb914;
+   display: flex;
+   flex-shrink: 0;
+   justify-content: center;
+   width: 2.5rem
```

#### 90. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L468-L469` → after: `L2862-L2867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2862-L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2862-L2867) · [Before (L468-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L468-L469)

```diff
- .CustomLobbyDescription .TextInput {
-   flex-grow: 1
+ .StudioComparisonPicker .StudioComparisonPickerOption .StudioComparisonPickerOptionThumbnail {
+   flex-shrink: 0;
+   height: 1.6rem;
+   overflow: hidden;
+   position: relative;
+   width: 2.5rem
```

#### 91. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L472-L473` → after: `L2870-L2871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2870-L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2870-L2871) · [Before (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L472-L473)

```diff
- .WorldGamemode .Dropdown-placeholder {
-   width: 12rem
+ .StudioComparisonPicker .StudioComparisonPickerOption .StudioComparisonPickerOptionThumbnail .SchematicImageContainer {
+   font-size: 1.2rem
```

#### 92. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L476-L480` → after: `L2874-L2876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2874-L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2874-L2876) · [Before (L476-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L476-L480)

```diff
- .SchematicListTitle {
-   color: #cfcfcf;
-   font-size: 1rem;
-   padding-top: .5rem;
-   text-align: left;
+ .StudioComparisonPicker .StudioComparisonPickerOption .StudioComparisonPickerOptionThumbnail .StudioTableThumbnailImage {
+   height: 100%;
+   object-fit: cover;
```

#### 93. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L484-L485` → after: `L2880-L2890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2880-L2890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2880-L2890) · [Before (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L484-L485)

```diff
- .SchematicListContainer {
-   background-color: #303a59;
+ .StudioComparisonPicker .StudioComparisonPickerOption .StudioComparisonPickerOptionName {
+   font-size: .9rem;
+   line-height: 1.3;
+   overflow: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
+ }
+ 
+ .StudioTable {
+   background-color: #3c4b68;
+   border: 1px solid #0f0f0f;
```

#### 94. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L487-L488` → after: `L2892-L2893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2892-L2893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2892-L2893) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L487-L488)

```diff
-   padding: .5rem;
-   width: 100%
+   box-sizing: border-box;
+   text-align: left
```

#### 95. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L491-L493` → after: `L2896-L2897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2896-L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2896-L2897) · [Before (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L491-L493)

```diff
- .SchematicListContainer.SchematicListContainerDisabled {
-   filter: brightness(.6);
-   pointer-events: none
+ .StudioTable thead {
+   background-color: #394980
```

#### 96. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L496-L501` → after: `L2900-L2905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2900-L2905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2900-L2905) · [Before (L496-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L496-L501)

```diff
- .PluginsGrid {
-   grid-gap: .5rem;
-   align-items: stretch;
-   display: grid;
-   gap: .5rem;
-   grid-template-columns: repeat(2, 1fr)
+ .StudioTable thead th {
+   color: #a4a4a4;
+   font-size: .85em;
+   font-weight: 800;
+   padding: .75rem 1rem;
+   text-transform: uppercase
```

#### 97. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L504-L514` → after: `L2908-L2910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2908-L2910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2908-L2910) · [Before (L504-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L504-L514)

```diff
- .PluginCard {
-   align-items: center;
-   background-color: rgba(48, 58, 89, .5);
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   cursor: pointer;
-   display: flex;
-   gap: .75rem;
-   min-width: 0;
-   padding: .6rem .75rem;
-   transition: scale .15s, background-color .15s, border-color .15s
+ .StudioTable tbody tr {
+   border-top: 1px solid hsla(0, 0%, 95%, .1);
+   cursor: pointer
```

#### 98. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L518-L519` → after: `L2914-L2915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2914-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2914-L2915) · [Before (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L518-L519)

```diff
-   .PluginCard:hover {
-     scale: 1.03
+   .StudioTable tbody tr:hover {
+     background-color: #394980
```

#### 99. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L523-L524` → after: `L2919-L2920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2919-L2920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2919-L2920) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L523-L524)

```diff
- .PluginCard.pad-focused {
-   scale: 1.03
+ .StudioTable tbody tr.pad-focused {
+   background-color: #394980
```

#### 100. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L528-L529` → after: `L2924-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2924-L2925) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L528-L529)

```diff
-   .PluginCard:active {
-     scale: 1.03
+   .StudioTable tbody tr:active {
+     background-color: #394980
```

#### 101. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L533-L535` → after: `L2929-L2930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2929-L2930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2929-L2930) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L533-L535)

```diff
- .PluginCard.PluginCardDisabledForm {
-   filter: brightness(.6);
-   pointer-events: none
+ .StudioTable tbody tr td {
+   padding: .6rem 1rem
```

#### 102. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L538` → after: `L2933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2933) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L538)

```diff
- .PluginCard .PluginCardIcon {
+ .StudioTable .StudioTableGameCell {
```

#### 103. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L541-L586` → after: `L2936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2936) · [Before (L541-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L541-L586)

```diff
-   flex-shrink: 0;
-   height: 4rem;
-   justify-content: center;
-   width: 4rem
- }
- 
- .PluginCard .PluginCardIcon img {
-   -ms-interpolation-mode: nearest-neighbor;
-   height: 100%;
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast;
-   object-fit: contain;
-   width: 100%
- }
- ... (30 more removed lines; see GitHub link above)
+   gap: .75rem
```

#### 104. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L589-L590` → after: `L2939-L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2939-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2939-L2941) · [Before (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L589-L590)

```diff
- .PluginCard .PluginCardToggleLabel {
-   color: #cfcfcf;
+ .StudioTable .StudioTableGameCell .StudioTableThumbnail {
+   aspect-ratio: 3/2;
+   border-radius: 0;
```

#### 105. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L592-L593` → after: `L2943-L2945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2943-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2943-L2945) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L592-L593)

```diff
-   font-size: 1rem;
-   font-weight: 700
+   height: 3rem;
+   overflow: hidden;
+   position: relative
```

#### 106. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L596-L598` → after: `L2948-L2951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2948-L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2948-L2951) · [Before (L596-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L596-L598)

```diff
- .PluginCard.PluginCardEnabled {
-   background-color: rgba(255, 185, 20, .2);
-   border-color: #ffb914
+ .StudioTable .StudioTableGameCell .StudioTableThumbnail .StudioTableThumbnailImage {
+   height: 100%;
+   object-fit: cover;
+   width: 100%
```

#### 107. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L601-L602` → after: `L2954-L2955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R2954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L2954-L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L2954-L2955) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L601-L602)

```diff
- .PluginCard.PluginCardEnabled .PluginCardToggleLabel {
-   color: #ffb914
+ .StudioTable .StudioTableGameCell .StudioTableGameName {
+   font-weight: 800
```

#### 108. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L704-L710` → after: `L3057-L3068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3057-L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3057-L3068) · [Before (L704-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L704-L710)

```diff
- .BloxdForm.GamemodeForm .SectionBody,
- .BloxdForm.MapTypeForm .SectionBody {
-   grid-gap: .5rem;
-   align-items: stretch;
-   display: grid;
-   gap: .5rem;
-   grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr))
+ .StudioGameBoost {
+   align-items: center;
+   background-color: #303a59;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-sizing: border-box;
+   display: flex;
+   flex-wrap: wrap;
+   gap: 1rem;
+   justify-content: space-between;
+   margin-bottom: 1rem;
+   padding: .75rem 1rem
```

#### 109. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L713-L728` → after: `L3071-L3137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3071-L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3071-L3137) · [Before (L713-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L713-L728)

```diff
- .BloxdForm.GamemodeForm .SectionBody .MapType,
- .BloxdForm.GamemodeForm .SectionBody .WorldGamemode,
- .BloxdForm.MapTypeForm .SectionBody .MapType,
- .BloxdForm.MapTypeForm .SectionBody .WorldGamemode {
-   background: none;
-   border: none;
-   box-sizing: content-box;
-   color: inherit;
-   font: inherit;
-   letter-spacing: inherit;
-   line-height: inherit;
-   margin: 0;
-   padding: 0;
-   text-align: inherit;
-   text-shadow: inherit;
-   text-transform: inherit
+ .StudioGameBoost.StudioGameBoostActive {
+   border-color: #ffb914
+ }
+ 
+ .StudioGameBoost .StudioGameBoostInfo {
+   display: flex;
+   flex: 1 1 auto;
+   flex-direction: column;
+   gap: .15rem;
+   min-width: 12rem
+ }
+ 
+ .StudioGameBoost .StudioGameBoostInfo .StudioGameBoostTitle {
+   align-items: center;
+   display: flex;
+   font-size: 1.1rem;
+ ... (51 more added lines; see GitHub link above)
```

#### 110. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L731` → after: `L3140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3140) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L731)

```diff
- @media(pointer:coarse) {
+ @keyframes StudioGameBoostSkeletonPulse {
```

#### 111. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L733-L739` → after: `L3142-L3148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3142-L3148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3142-L3148) · [Before (L733-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L733-L739)

```diff
-   .BloxdForm.GamemodeForm .SectionBody .MapType:before,
-   .BloxdForm.GamemodeForm .SectionBody .WorldGamemode:before,
-   .BloxdForm.MapTypeForm .SectionBody .MapType:before,
-   .BloxdForm.MapTypeForm .SectionBody .WorldGamemode:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) max(.5rem/-2, min(0px, (100% - 44px)/2));
-     position: absolute
+   0%,
+   to {
+     opacity: .2
+   }
+ 
+   50% {
+     opacity: .45
```

#### 112. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L743-L746` → after: `L3152-L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3152-L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3152-L3168) · [Before (L743-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L743-L746)

```diff
- .BloxdForm.GamemodeForm .SectionBody .MapType,
- .BloxdForm.GamemodeForm .SectionBody .WorldGamemode,
- .BloxdForm.MapTypeForm .SectionBody .MapType,
- .BloxdForm.MapTypeForm .SectionBody .WorldGamemode {
+ .MiddleScreenPopupBackground .MiddleScreenPopup.ApprovalInfoPopup .ApprovalInfoPopupBody {
+   align-items: stretch;
+   display: flex;
+   flex-direction: column;
+   gap: 1rem;
+   max-width: 100%;
+   min-height: 12rem;
+   width: 30rem
+ }
+ 
+ .MiddleScreenPopupBackground .MiddleScreenPopup.ApprovalInfoPopup .ApprovalInfoPopupBody .ApprovalInfoPopupTitle {
+   font-size: 1.75rem;
+   margin: 0;
+   text-align: center
+ }
+ 
+ ... (1 more added lines; see GitHub link above)
```

#### 113. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L758-L759` → after: `L3179-L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3179-L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3179-L3186) · [Before (L758-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L758-L759)

```diff
-   position: relative;
-   transition: border-color .2s
+   text-align: center
+ }
+ 
+ .MiddleScreenPopupBackground .MiddleScreenPopup.ApprovalInfoPopup .ApprovalInfoPopupBody .ApprovalInfoPopupActions {
+   display: flex;
+   gap: 1rem;
+   justify-content: center;
+   margin-top: .5rem
```

#### 114. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L762` → after: `L3189-L3191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3189-L3191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3189-L3191) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L762)

```diff
- @media(orientation:portrait)and (max-width:600px) {
+ .MiddleScreenPopupBackground .MiddleScreenPopup.ApprovalInfoPopup .ApprovalInfoPopupBody .ApprovalInfoPopupActions .ApprovalInfoPopupActionButton {
+   font-size: 1.1rem
+ }
```

#### 115. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L764-L770` → after: `L3193-L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3193-L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3193-L3197) · [Before (L764-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L764-L770)

```diff
-   .BloxdForm.GamemodeForm .SectionBody .MapType,
-   .BloxdForm.GamemodeForm .SectionBody .WorldGamemode,
-   .BloxdForm.MapTypeForm .SectionBody .MapType,
-   .BloxdForm.MapTypeForm .SectionBody .WorldGamemode {
-     font-size: 1.25rem;
-     padding: .5rem
-   }
+ .GameApprovalInfoDetails {
+   align-items: stretch;
+   display: flex;
+   flex-direction: column;
+   gap: 1rem
```

#### 116. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L773-L777` → after: `L3200-L3207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3200-L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3200-L3207) · [Before (L773-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L773-L777)

```diff
- .BloxdForm.GamemodeForm .SectionBody .MapType.Selected,
- .BloxdForm.GamemodeForm .SectionBody .WorldGamemode.Selected,
- .BloxdForm.MapTypeForm .SectionBody .MapType.Selected,
- .BloxdForm.MapTypeForm .SectionBody .WorldGamemode.Selected {
-   border-color: #ffb914
+ .GameApprovalInfoDetails .GameApprovalInfoSummary {
+   align-items: center;
+   border-radius: 0;
+   display: flex;
+   font-size: 1.1rem;
+   font-weight: 700;
+   gap: .5rem;
+   padding: .5rem .75rem
```

#### 117. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L780-L784` → after: `L3210-L3212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3210-L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3210-L3212) · [Before (L780-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L780-L784)

```diff
- .BloxdForm.GamemodeForm .SectionBody .MapType:disabled,
- .BloxdForm.GamemodeForm .SectionBody .WorldGamemode:disabled,
- .BloxdForm.MapTypeForm .SectionBody .MapType:disabled,
- .BloxdForm.MapTypeForm .SectionBody .WorldGamemode:disabled {
-   cursor: default
+ .GameApprovalInfoDetails .GameApprovalInfoSummary .svg-inline--fa {
+   flex-shrink: 0;
+   font-size: 1.4rem
```

#### 118. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L787-L788` → after: `L3215-L3216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3215-L3216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3215-L3216) · [Before (L787-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L787-L788)

```diff
- .BloxdForm.MapTypeForm .SectionBody {
-   grid-template-columns: repeat(auto-fill, minmax(14.4rem, 1fr))
+ .GameApprovalInfoDetails .GameApprovalInfoSummary.Passed {
+   background-color: rgba(7, 148, 14, .25)
```

#### 119. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L791-L795` → after: `L3219-L3220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3219-L3220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3219-L3220) · [Before (L791-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L791-L795)

```diff
- .BloxdForm.GamemodeForm.BasicOptions .SectionBody,
- .BloxdForm.MapTypeForm.BasicOptions .SectionBody {
-   grid-auto-columns: minmax(0, 1fr);
-   grid-auto-flow: column;
-   grid-template-columns: none
+ .GameApprovalInfoDetails .GameApprovalInfoSummary.Passed .svg-inline--fa {
+   color: #1dd06d
```

#### 120. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L798-L799` → after: `L3223-L3224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3223-L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3223-L3224) · [Before (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L798-L799)

```diff
- .BloxdForm.GamemodeForm.BasicOptions .SectionBody .WorldGamemode {
-   height: 6rem
+ .GameApprovalInfoDetails .GameApprovalInfoSummary.Failed {
+   background-color: rgba(204, 20, 20, .25)
```

#### 121. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L802` → after: `L3227-L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3227-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3227-L3229) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L802)

```diff
- @media(orientation:portrait)and (max-width:600px) {
+ .GameApprovalInfoDetails .GameApprovalInfoSummary.Failed .svg-inline--fa {
+   color: #ff8a80
+ }
```

#### 122. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L804-L809` → after: `L3231-L3235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3231-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3231-L3235) · [Before (L804-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L804-L809)

```diff
-   .BloxdForm.GamemodeForm .SectionBody,
-   .BloxdForm.MapTypeForm .SectionBody,
-   .BloxdForm.MapTypeForm.BasicOptions .SectionBody {
-     grid-auto-flow: row;
-     grid-template-columns: repeat(2, minmax(0, 1fr))
-   }
+ .GameApprovalInfoDetails .GameApprovalInfoRows {
+   display: flex;
+   flex-direction: column;
+   gap: .4rem
+ }
```

#### 123. `bundles/bloxd.io/chunks/css/106.css` (Changed code · before: `L811-L813` → after: `L3237-L3275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53R3237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6f6eeac393701ca65725e91f2776c0670a0ac69127b47af8b01f537c88b17e53) · [After (L3237-L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/106.css#L3237-L3275) · [Before (L811-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/106.css#L811-L813)

```diff
-   .BloxdForm.GamemodeForm.BasicOptions .SectionBody .WorldGamemode {
-     height: 3rem
-   }
+ .GameApprovalInfoDetails .GameApprovalInfoRows .GameApprovalInfoRow {
+   align-items: center;
+   background-color: rgba(0, 0, 0, .25);
+   display: flex;
+   gap: .6rem;
+   padding: .4rem .6rem
+ }
+ 
+ .GameApprovalInfoDetails .GameApprovalInfoRows .GameApprovalInfoRow .svg-inline--fa {
+   flex-shrink: 0;
+   font-size: 1.1rem;
+   text-align: center;
+   width: 1.2rem
+ }
+ 
+ .GameApprovalInfoDetails .GameApprovalInfoRows .GameApprovalInfoRow.Passed .svg-inline--fa {
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/111.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/111.css` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-567b2bc5642b7dad4893d0ea7bb85f5ca93ebde3c0c4fc0cfa1f185ce71005fa)

#### 1. `bundles/bloxd.io/chunks/css/111.css` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-567b2bc5642b7dad4893d0ea7bb85f5ca93ebde3c0c4fc0cfa1f185ce71005faR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-567b2bc5642b7dad4893d0ea7bb85f5ca93ebde3c0c4fc0cfa1f185ce71005fa) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/111.css#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/111.css#L1)

```diff
- .ShaderPackInformation {
+ .ShaderPackPublishPage {
```

#### 2. `bundles/bloxd.io/chunks/css/111.css` (Changed code · before: `L9-L28` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-567b2bc5642b7dad4893d0ea7bb85f5ca93ebde3c0c4fc0cfa1f185ce71005faR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-567b2bc5642b7dad4893d0ea7bb85f5ca93ebde3c0c4fc0cfa1f185ce71005fa) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/111.css#L11) · [Before (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/111.css#L9-L28)

```diff
- .ShaderPackInformation .BackButton {
-   font-size: 2rem;
-   padding-left: .3rem
- }
- 
- .ShaderPackInformation .ShaderPackInformationBody {
-   container: shaderPackBody/inline-size;
-   align-self: center;
-   display: flex;
-   flex-direction: column;
-   gap: .5rem;
-   max-width: max(115.5555555556vh, 50rem);
-   width: 100%
- }
- 
- .ShaderPackInformation .ShaderPackInformationBody>.ShaderPackPreviews {
- ... (4 more removed lines; see GitHub link above)
+ .ShaderPackPublishPage .ShaderPackPublishBack {
```

#### 3. `bundles/bloxd.io/chunks/css/111.css` (Changed code · before: `L30-L377` → after: `L13-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-567b2bc5642b7dad4893d0ea7bb85f5ca93ebde3c0c4fc0cfa1f185ce71005faR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-567b2bc5642b7dad4893d0ea7bb85f5ca93ebde3c0c4fc0cfa1f185ce71005fa) · [After (L13-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/111.css#L13-L19) · [Before (L30-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/111.css#L30-L377)

```diff
-   color: #a4a4a4;
-   display: flex;
-   flex-direction: column;
-   font-size: 1.2rem;
-   gap: 1rem;
-   padding-top: 4rem;
-   text-align: center
- }
- 
- .ShaderPackInformation .ShaderPackInformationMessage .LogoLoaderOuter {
-   font-size: 3rem
- }
- 
- .ShaderPackInformation .ShaderPackInformationHeader {
-   grid-gap: .75rem;
-   align-items: center;
- ... (332 more removed lines; see GitHub link above)
+   display: flex;
+   padding: .6rem .75rem
+ }
+ 
+ .ShaderPackPublishPage .ShaderPackPublishBack .BackButton {
+   font-size: 1.5rem;
+   padding-left: .3rem;
```

#### 4. `bundles/bloxd.io/chunks/css/111.css` (Changed code · before: `L642` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-567b2bc5642b7dad4893d0ea7bb85f5ca93ebde3c0c4fc0cfa1f185ce71005faR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-567b2bc5642b7dad4893d0ea7bb85f5ca93ebde3c0c4fc0cfa1f185ce71005fa) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/111.css#L24) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/111.css#L642)

```diff
-   .SegmentedToggle .SegmentedToggleOption:before {
+   .ShaderPackPublishPage .ShaderPackPublishBack .BackButton:before {
```

#### 5. `bundles/bloxd.io/chunks/css/111.css` (Changed code · before: `L649-L685` → after: `L31-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-567b2bc5642b7dad4893d0ea7bb85f5ca93ebde3c0c4fc0cfa1f185ce71005faR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-567b2bc5642b7dad4893d0ea7bb85f5ca93ebde3c0c4fc0cfa1f185ce71005fa) · [After (L31-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/111.css#L31-L286) · [Before (L649-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/111.css#L649-L685)

```diff
- .SegmentedToggle .SegmentedToggleOption:before {
-   inset-inline: 0
- }
- 
- .SegmentedToggle .SegmentedToggleOption:not(:first-child) {
-   border-left: 1px solid #0f0f0f
- }
- 
- @media(hover:hover) {
-   .SegmentedToggle .SegmentedToggleOption:hover {
-     background-color: #394980;
-     color: #fff
-   }
- }
- 
- .SegmentedToggle .SegmentedToggleOption.pad-focused {
- ... (21 more removed lines; see GitHub link above)
+ .ShaderPackPublishPage .ShaderPackPublishBack {
+   padding-left: 0
+ }
+ 
+ .ShaderPackPublishPage .ShaderPackPublishTitle {
+   font-size: 1.8rem;
+   margin: 0
+ }
+ 
+ .ShaderPackPublishForm {
+   display: flex;
+   flex-direction: column;
+   gap: .75rem
+ }
+ 
+ .ShaderPackPublishForm .ShaderPackPublishIntro {
+ ... (240 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/127.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/127.css` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67)

#### 1. `bundles/bloxd.io/chunks/css/127.css` (Changed code · before: `L514` → after: `L100-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67) · [After (L100-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/127.css#L100-L102) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/127.css#L514)

```diff
- .ShaderPackViewPicker {
+ .PurchaseWelcome {
+   align-items: center;
+   animation-delay: .5s;
```

#### 2. `bundles/bloxd.io/chunks/css/127.css` (Changed code · before: `L516-L518` → after: `L104-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67) · [After (L104-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/127.css#L104-L112) · [Before (L516-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/127.css#L516-L518)

```diff
-   gap: .4rem;
-   min-width: 0;
-   overflow-x: auto
+   flex-direction: column;
+   gap: 1rem;
+   height: 100vh;
+   height: 100dvh;
+   justify-content: center;
+   overflow: hidden;
+   position: relative;
+   width: 100dvw;
+   width: 100vw
```

#### 3. `bundles/bloxd.io/chunks/css/127.css` (Changed code · before: `L521-L532` → after: `L115-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67) · [After (L115-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/127.css#L115-L117) · [Before (L521-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/127.css#L521-L532)

```diff
- .ShaderPackViewPicker .ShaderPackViewOption {
-   aspect-ratio: 16/9;
-   background-color: #394980;
-   border: .15rem solid transparent;
-   border-radius: 0;
-   color: inherit;
-   cursor: pointer;
-   flex-shrink: 0;
-   font: inherit;
-   padding: 0;
-   position: relative;
-   width: 7rem
+ .PurchaseWelcome .PurchaseWelcomeTitle {
+   font-size: 5rem;
+   z-index: 2
```

#### 4. `bundles/bloxd.io/chunks/css/127.css` (Changed code · before: `L535-L539` → after: `L120-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67) · [After (L120-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/127.css#L120-L127) · [Before (L535-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/127.css#L535-L539)

```diff
- .ShaderPackViewPicker .ShaderPackViewOption img {
-   display: block;
-   height: 100%;
-   object-fit: cover;
-   width: 100%
+ .PurchaseWelcome .PurchaseWelcomeText {
+   background-color: rgba(57, 73, 128, .5);
+   border-radius: 0;
+   font-size: 2rem;
+   max-width: 50rem;
+   padding: .5rem 1rem;
+   text-align: center;
+   z-index: 2
```

#### 5. `bundles/bloxd.io/chunks/css/127.css` (Changed code · before: `L542` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/127.css#L130) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/127.css#L542)

```diff
- .ShaderPackViewPicker .ShaderPackViewOption span {
+ .PurchaseWelcome .PurchaseWelcomeWarning {
```

#### 6. `bundles/bloxd.io/chunks/css/127.css` (Changed code · before: `L545-L548` → after: `L135-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67) · [After (L135-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/127.css#L135-L138) · [Before (L545-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/127.css#L545-L548)

```diff
-   font-size: 1rem;
-   inset: 0;
-   justify-content: center;
-   position: absolute
+   gap: 1rem;
+   max-width: 50rem;
+   padding: .5rem 1rem;
+   z-index: 2
```

#### 7. `bundles/bloxd.io/chunks/css/127.css` (Changed code · before: `L551-L552` → after: `L141-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4e9307789e151a1e2d1a552a8409c725be9447639e719aaefaa145cbd8421b67) · [After (L141-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/127.css#L141-L144) · [Before (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/127.css#L551-L552)

```diff
- .ShaderPackViewPicker .ShaderPackViewOption.Selected {
-   border-color: #ffb914
+ .PurchaseWelcome .PurchaseWelcomeContinue {
+   font-size: 2rem;
+   margin-top: 1rem;
+   z-index: 2
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/129.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/129.css` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfe)

#### 1. `bundles/bloxd.io/chunks/css/129.css` (Changed code · before: `L1` → after: `L1-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfeR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfe) · [After (L1-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/129.css#L1-L42) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/129.css#L1)

```diff
- .ShaderPackCategory .ShaderPackIntro {
+ .ShaderPackBrowse {
+   display: flex;
+   flex-direction: column;
+   font-weight: 700;
+   gap: .5rem;
+   padding-bottom: 1rem;
+   width: 100%
+ }
+ 
+ .ShaderPackBrowse .BackButton {
+   font-size: 2rem;
+   padding-left: .3rem
+ }
+ 
+ .ShaderPackBrowse .ShaderPackBrowseHeader {
+   background-color: rgba(57, 73, 128, .4);
+ ... (26 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/129.css` (Changed code · before: `L3-L12` → after: `L44-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfeR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfe) · [After (L44-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/129.css#L44-L286) · [Before (L3-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/129.css#L3-L12)

```diff
-   font-size: 1.1rem;
-   margin-bottom: .5rem
- }
- 
- .ShaderPackCategory .ShaderPackListingLink {
-   color: #ffb914;
-   text-decoration: underline
- }
- 
- .ShaderPackCategory .ShaderPackBrowseLink {
+   cursor: pointer;
+   display: flex;
+   font-weight: inherit;
+   gap: .3em;
+   justify-content: center;
+   line-height: 1em;
+   min-width: 6.6em;
+   padding: .3em .45em .3em .6em;
+   text-shadow: none;
+   transition: border-color .2s, color .2s
+ }
+ 
+ @media(hover:hover) {
+   .ShaderPackBrowse .ShaderPackBrowseHeader .ShaderPackBrowseTabs .ShaderPackBrowseSort .BloxdDropdownControl:hover {
+     border-color: #b6830e
+   }
+ ... (227 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/css/129.css` (Changed code · before: `L14-L22` → after: `L288-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfeR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfe) · [After (L288-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/129.css#L288-L330) · [Before (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/129.css#L14-L22)

```diff
-   margin-bottom: .75rem
- }
- 
- .ShaderPackCategory .ShaderPackBrowseLink .ShaderPackBrowseButton {
-   font-size: 1.6rem
- }
- 
- .ShaderPackCategory .ShaderPackCategoryError {
-   background-color: #e34f4f;
+   height: 100%;
+   text-decoration: none;
+   width: 100%
+ }
+ 
+ .ShaderPackCard .ShaderPackCardLink .ShaderPackCardImage {
+   display: block;
+   height: 100%;
+   object-fit: cover;
+   width: 100%
+ }
+ 
+ .ShaderPackCard .ShaderPackCardLink .ShaderPackCardImage.ShaderPackCardImagePending {
+   align-items: center;
+   color: #838383;
+   display: flex;
+ ... (27 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/css/129.css` (Changed code · before: `L25-L44` → after: `L371-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfeR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfe) · [After (L371-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/129.css#L371-L404) · [Before (L25-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/129.css#L25-L44)

```diff
-   overflow-wrap: anywhere;
-   padding: .4rem .5rem;
-   text-shadow: 0 0 0 #000
- }
- 
- .ShaderPackCategory .ShaderPackSummary {
-   display: flex;
-   flex-direction: column;
-   gap: .75rem
- }
- 
- .ShaderPackCategory .ShaderPackSummary .ShaderPackSummaryHeader {
-   align-items: center;
-   display: flex;
-   gap: 1rem;
-   justify-content: space-between
- ... (4 more removed lines; see GitHub link above)
+   height: 1.7rem
+ }
+ 
+ .ShaderPackCard .ShaderPackCardStats .ShaderPackCardUses {
+   align-items: center;
+   background-color: rgba(34, 40, 59, .4);
+   border-radius: 0;
+   color: #cfcfcf;
+   display: flex;
+   gap: .3rem;
+   padding: 0 .4rem
+ }
+ 
+ .ShaderPackPreviewsNotice {
+   --diagonal: 29.3577535428deg;
+   container-type: size;
+ ... (18 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/css/129.css` (Changed code · before: `L46-L78` → after: `L406-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfeR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfe) · [After (L406-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/129.css#L406-L412) · [Before (L46-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/129.css#L46-L78)

```diff
-   overflow-wrap: anywhere
- }
- 
- .ShaderPackCategory .ShaderPackSummary .ShaderPackAuthor {
-   color: #a4a4a4;
-   font-size: 1rem;
-   overflow-wrap: anywhere
- }
- 
- .ShaderPackCategory .ShaderPackSummary .ShaderPackDescription {
-   font-size: 1rem;
-   margin-top: .3rem;
-   overflow-wrap: anywhere;
-   white-space: pre-wrap
- }
- 
- ... (17 more removed lines; see GitHub link above)
+   opacity: .5;
+   padding: .2em .6em;
+   text-align: center;
+   text-transform: uppercase;
+   transform: rotate(var(--diagonal));
+   white-space: nowrap;
+   width: 150cqw
```

#### 6. `bundles/bloxd.io/chunks/css/129.css` (Changed code · before: `L180-L187` → after: `L514-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfeR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfe) · [After (L514-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/129.css#L514-L546) · [Before (L180-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/129.css#L180-L187)

```diff
- .ShaderPackDropZone {
-   align-items: center;
-   border: 1px solid #ffb914;
-   border-radius: 0;
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
+ .ShaderPackViewPicker {
+   display: flex;
+   gap: .4rem;
+   min-width: 0;
+   overflow-x: auto
+ }
+ 
+ .ShaderPackViewPicker .ShaderPackViewOption {
+   aspect-ratio: 16/9;
+   background-color: #394980;
+   border: .15rem solid transparent;
+   border-radius: 0;
+   color: inherit;
+   cursor: pointer;
+   flex-shrink: 0;
+   font: inherit;
+ ... (17 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/css/129.css` (Changed code · before: `L189-L235` → after: `L548-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfeR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0ea7c5169885fe6e88a2a7d4cf1b3beb083caa2515bf5a71b14b9b43ed03ddfe) · [After (L548-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/129.css#L548-L553) · [Before (L189-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/129.css#L189-L235)

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
- ... (31 more removed lines; see GitHub link above)
+   position: absolute
+ }
+ 
+ .ShaderPackViewPicker .ShaderPackViewOption.Selected {
+   border-color: #ffb914
+ }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/158.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/158.css` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887)

#### 1. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L1-L4` → after: `L1-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L1-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L1-L73) · [Before (L1-L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L1-L4)

```diff
- .SleepingOverlay {
-   align-items: center;
-   background-color: rgba(26, 31, 46, .85);
-   contain: layout style paint;
+ .SegmentedToggle {
+   background-color: #3c4b68;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   display: flex;
+   flex-shrink: 0
+ }
+ 
+ .SegmentedToggle .SegmentedToggleOption {
+   background: none;
+   border: none;
+   color: #cfcfcf;
+   cursor: pointer;
+   font: inherit;
+   min-width: 5.5em;
+ ... (57 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L10-L72` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L259) · [Before (L10-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L10-L72)

```diff
-   left: 0;
-   pointer-events: auto;
-   position: fixed;
-   top: 0;
-   width: 100%;
-   z-index: 12
- }
- 
- .SleepingOverlay.enter {
-   opacity: 0
- }
- 
- .SleepingOverlay.enter-active,
- .SleepingOverlay.exit {
-   opacity: 1
- }
- ... (47 more removed lines; see GitHub link above)
+   min-width: 2rem;
```

#### 3. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L74` → after: `L261-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L261-L263) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L74)

```diff
-   overflow-y: hidden;
+   padding: 0 .5rem;
+   pointer-events: none;
+   position: relative;
```

#### 4. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L77-L82` → after: `L266-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L266-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L266-L365) · [Before (L77-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L77-L82)

```diff
-   white-space: normal
- }
- 
- .SleepingOverlay .SleepingOverlayBody .SleepingOverlayPerkBottom {
-   align-items: center;
-   display: flex;
+   z-index: 2
+ }
+ 
+ .ControlsContainer .ControlRow .ControlRowInner .ControlBindingsContainer .ControlBindingAddInput .InputContainer .InputOverlay .InputOverlayPlaceholder {
+   font-size: 1rem;
+   opacity: .6
+ }
+ 
+ .ControlsContainer .ControlRow .ControlRowInner .ControlBindingsContainer .ControlBindingAddInput .InputContainer input {
+   background-color: #22283b;
+   border: 1px solid transparent;
+   border-radius: 0;
+   box-sizing: border-box;
+   caret-color: transparent;
+   color: transparent;
+   cursor: pointer;
+ ... (84 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L84-L114` → after: `L367-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L367-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L367-L642) · [Before (L84-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L84-L114)

```diff
-   width: 100%
- }
- 
- .SleepingOverlay .SleepingOverlayBody .SleepingOverlayPerkBottom .SleepingOverlayPerkBottomSide {
-   display: flex;
-   flex: 12rem 1 1;
-   gap: .5rem;
-   justify-content: flex-end
- }
- 
- .SleepingOverlay .SleepingOverlayBody .SleepingOverlayPerkBottom .SleepingOverlayPerkBottomSide .SleepingOverlayBedIcon {
-   border-radius: 0;
-   font-size: 2rem
- }
- 
- .SleepingOverlay .SleepingOverlayBody .SleepingOverlayPerkBottom .SleepingOverlayPerkBottomSide .SleepingOverlayBedIcon.SleepingOverlayBedIconActive {
- ... (15 more removed lines; see GitHub link above)
+   max-width: 100%;
+   min-height: 40px;
+   min-width: 40px;
+   padding: 0 8px;
+   text-align: left
+ }
+ 
+ .HudLayoutSettings .HudLayoutPreviewBox .HudLayoutCornerButton,
+ .SettingsMenuRightInner .HudLayoutSettings .HudLayoutPreviewBox .HudLayoutCornerButton {
+   position: absolute;
+   right: .75rem;
+   top: .75rem;
+   z-index: 1
+ }
+ 
+ .HudLayoutSettings .HudLayoutPreviewBox .HudLayoutPreviewRow,
+ ... (260 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L116-L143` → after: `L644-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L644-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L644-L663) · [Before (L116-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L116-L143)

```diff
-   justify-content: center;
-   min-width: 15rem;
-   padding: 1rem
- }
- 
- .DirectionalDamage {
-   left: 50%;
-   pointer-events: none;
-   position: absolute;
-   top: 50%;
-   transform: translateY(-50%) translateX(-50%);
-   z-index: 1
- }
- 
- .DamageIndicator {
-   border: .4rem solid transparent;
- ... (12 more removed lines; see GitHub link above)
+   transition: color .15s
+ }
+ 
+ .FeaturedSettingsEntry.SettingBox .FeaturedSettingsEntryText .FeaturedSettingsEntrySub,
+ .SettingsMenuRightInner .FeaturedSettingsEntry.SettingBox .FeaturedSettingsEntryText .FeaturedSettingsEntrySub {
+   color: #cfcfcf;
+   font-size: .85em
+ }
+ 
+ .FeaturedSettingsEntry.SettingBox .FeaturedSettingsEntryChevron,
+ .SettingsMenuRightInner .FeaturedSettingsEntry.SettingBox .FeaturedSettingsEntryChevron {
+   color: #fcd373;
+   font-size: 1.5rem;
+   transform: rotate(-90deg);
+   transition: transform .2s
+ }
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L245-L250` → after: `L765-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L765-L766) · [Before (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L245-L250)

```diff
- .Crosshair {
-   align-items: center;
-   color: #fff;
-   display: flex;
-   font-size: 1.3rem;
-   font-weight: 900;
+ .HudPreviewBox {
+   display: flex;
```

#### 8. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L253-L255` → after: `L876-L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L876-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L876-L899) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L253-L255)

```diff
-   line-height: 1;
-   margin-top: -2px;
-   pointer-events: none;
+   transform: translateX(-50%)
+ }
+ 
+ .HudPreviewBox .HudPreviewStage .HudPreviewOverlay .HudPreviewRing .HudPreviewRingLabel.Below {
+   left: 50%;
+   top: calc(100% + 2px);
+   transform: translateX(-50%)
+ }
+ 
+ .HudPreviewBox .HudPreviewStage .HudPreviewOverlay .HudPreviewRing .HudPreviewRingLabel.Left {
+   right: calc(100% + 2px);
+   top: 50%;
+   transform: translateY(-50%)
+ }
+ 
+ .HudPreviewBox .HudPreviewStage .HudPreviewOverlay .HudPreviewRing .HudPreviewRingLabel.Right {
+ ... (8 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L257-L281` → after: `L901-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L901-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L901-L915) · [Before (L257-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L257-L281)

```diff
-   text-shadow: -1.2px 0 #000, 0 1.2px #000, 1.2px 0 #000, 0 -1.2px #000;
-   top: 50%;
-   translate: -50% -50%;
-   z-index: 1
- }
- 
- .Crosshair.Touch {
-   font-size: max(1.3rem, 18px)
- }
- 
- .GunCrosshairWrapper {
-   transition: opacity .2s
- }
- 
- .GunCrosshair {
-   background-color: #fff;
- ... (9 more removed lines; see GitHub link above)
+   z-index: 16
+ }
+ 
+ .HudFullScreenEditor .HudPreviewBox.Fill .HudPreviewStage {
+   border: none
+ }
+ 
+ .HudFullScreenEditor .HudFullScreenToolbar {
+   align-items: center;
+   background-color: rgba(38, 52, 93, .85);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   display: flex;
+   font-size: 15px;
+   gap: 6px;
```

#### 10. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L283` → after: `L917-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L917-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L917-L1076) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L283)

```diff
-   pointer-events: none;
+   max-width: calc(100vw - 12px);
+   padding: 5px;
+   position: absolute;
+   top: max(var(--notchTop), 6px);
+   transform: translateX(-50%);
+   z-index: 2
+ }
+ 
+ .HudFullScreenEditor .HudFullScreenToolbar .BlueButton,
+ .HudFullScreenEditor .HudFullScreenToolbar .SecondaryButton {
+   align-items: center;
+   box-sizing: border-box;
+   display: flex;
+   font-size: 15px;
+   height: 40px;
+   justify-content: center;
+ ... (144 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L287-L294` → after: `L1080-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L1080-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L1080-L1087) · [Before (L287-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L287-L294)

```diff
-   transition: filter .3s;
-   width: 104vw;
-   width: 104dvw;
-   z-index: 2
- }
- 
- .GunCrosshairOverlayWrapper .GunCrosshairOverlay {
-   background-color: #000;
+   width: 14px
+ }
+ 
+ html.HudPreviewDoc .HudPreviewItem {
+   align-items: center;
+   color: #cfcfcf;
+   display: flex;
+   font-size: calc(var(--hotbar-slot, 4.75rem)*.4);
```

#### 12. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L296-L300` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L1089) · [Before (L296-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L296-L300)

```diff
-   left: 0;
-   -webkit-mask-image: radial-gradient(circle, transparent 40%, #000 41%);
-   mask-image: radial-gradient(circle, transparent 40%, #000 41%);
-   position: absolute;
-   top: 0;
+   justify-content: center;
```

#### 13. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L304-L314` → after: `L1093-L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L1093-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L1093-L1121) · [Before (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L304-L314)

```diff
- .GunCrosshairOverlayWrapper .GunCrosshairOverlayLine1,
- .GunCrosshairOverlayWrapper .GunCrosshairOverlayLine2 {
-   position: absolute
- }
- 
- .GunCrosshairOverlayWrapper .GunCrosshairOverlayLine1 {
-   border-top: 1px dashed #000;
-   height: 1px;
-   left: 0;
-   top: 50%;
-   translate: 0 -25%;
+ html.HudPreviewDoc .TouchInteractHit.HudPreviewInteract .TouchInteractKey {
+   color: #fff
+ }
+ 
+ html.HudPreviewDoc .HudPreviewJoystickZone {
+   pointer-events: none
+ }
+ 
+ html.HudPreviewDoc .HudPreviewJoystickZone .HudPreviewJoystick {
+   --joystick-radius: max(30px, 50px * var(--preview-joystick-scale, 1));
+   --joystick-x: clamp(var(--joystick-radius), var(--notchLeft) + var(--preview-joystick-shift-left, 0px) + 90px + var(--hud-joystick-dx, 0) * 100vw, 100vw - var(--joystick-radius));
+   --joystick-y: clamp(var(--joystick-radius), 100vh - 100px - var(--preview-joystick-shift-bottom, 0px) + var(--hud-joystick-dy, 0) * 100vh, 100vh - var(--joystick-radius));
+   height: calc(var(--joystick-radius)*2);
+   transform: translate(calc(var(--joystick-x) - var(--joystick-radius)), calc(var(--joystick-y) - var(--joystick-radius)));
+   width: calc(var(--joystick-radius)*2)
+ }
+ ... (13 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/css/158.css` (Changed code · before: `L318-L375` → after: `L1125-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cca9125f71111b6f1ed78241d20bf2c0a71c7a5222612e03dfc092bf71e9d887) · [After (L1125-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/158.css#L1125-L1128) · [Before (L318-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/158.css#L318-L375)

```diff
- .GunCrosshairOverlayWrapper .GunCrosshairOverlayLine2 {
-   border-left: 1px dashed #000;
-   height: 100%;
-   left: 50%;
-   top: 0;
-   translate: -25% 0;
-   width: 1px
- }
- 
- .GunCrosshairOverlayWrapper .GunCrosshairOverlayDot {
-   border: 1px solid rgba(204, 20, 20, .5);
-   border-radius: 50%;
-   box-sizing: border-box;
-   height: 5px;
-   left: 50%;
-   position: absolute;
- ... (42 more removed lines; see GitHub link above)
+ html.HudPreviewDoc .HudPreviewJoystickZone .HudPreviewJoystick .JoystickKnob {
+   height: var(--joystick-radius);
+   width: var(--joystick-radius)
+ }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/200.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/200.css` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-28d3edcdaa86596f491757229e8c092ff6621d58e9bdb3dfcd94e979dac28ca7)

#### 1. `bundles/bloxd.io/chunks/css/200.css` (Changed code · before: `L1-L5` → after: `L1-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-28d3edcdaa86596f491757229e8c092ff6621d58e9bdb3dfcd94e979dac28ca7R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-28d3edcdaa86596f491757229e8c092ff6621d58e9bdb3dfcd94e979dac28ca7) · [After (L1-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/200.css#L1-L6) · [Before (L1-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/200.css#L1-L5)

```diff
- .MobPreview {
-   position: relative
- }
- 
- .MobPreview .MobPreviewCanvas {
+ .SleepingOverlay {
+   align-items: center;
+   background-color: rgba(26, 31, 46, .85);
+   contain: layout style paint;
+   display: flex;
+   flex-direction: column;
```

#### 2. `bundles/bloxd.io/chunks/css/200.css` (Changed code · before: `L8` → after: `L345-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-28d3edcdaa86596f491757229e8c092ff6621d58e9bdb3dfcd94e979dac28ca7R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-28d3edcdaa86596f491757229e8c092ff6621d58e9bdb3dfcd94e979dac28ca7) · [After (L345-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/200.css#L345-L350) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/200.css#L8)

```diff
-   outline: none;
+   pointer-events: none;
+   position: fixed;
+   z-index: 1
+ }
+ 
+ .CrosshairShapes.CrosshairInPreview {
```

#### 3. `bundles/bloxd.io/chunks/css/200.css` (Changed code · before: `L10-L11` → after: `L352-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-28d3edcdaa86596f491757229e8c092ff6621d58e9bdb3dfcd94e979dac28ca7R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-28d3edcdaa86596f491757229e8c092ff6621d58e9bdb3dfcd94e979dac28ca7) · [After (L352-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/200.css#L352-L375) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/200.css#L10-L11)

```diff
-   width: 100%
- }
+   z-index: auto
+ }
+ 
+ .CrosshairShapes .CrosshairPart,
+ .CrosshairShapes .CrosshairRing,
+ .CrosshairShapes .CrosshairShapesOrigin,
+ .CrosshairShapes .CrosshairShapesPress {
+   position: absolute
+ }
+ 
+ .CrosshairShapes .CrosshairShapesPress {
+   left: 0;
+   top: 0
+ }
+ 
+ .CrosshairShapes.CrosshairSpreads [data-arm] {
+ ... (8 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/220.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/220.css` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190)

#### 1. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L1` → after: `L1-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L1-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L1-L18) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L1)

```diff
- .LobbyManage {
+ .CharCustomisationBody {
+   display: flex;
+   flex-direction: column;
+   height: 100%;
+   width: 100%
+ }
+ 
+ .CharCustomisationBody .CharCustomisationBodyHeader {
+   align-items: center;
+   background-color: #303a59;
+   color: #ffb914;
+   display: flex;
+   gap: .5rem;
+   padding: .5rem 1rem
+ }
+ 
+ ... (2 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L3-L4` → after: `L20-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L20-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L20-L30) · [Before (L3-L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L3-L4)

```diff
-   display: flex;
-   flex: 1 0 1rem;
+   margin-left: 1rem
+ }
+ 
+ .CharCustomisationBody .CharCustomisationBodyHeader .GoldButton .ButtonBody {
+   padding: .3rem .5rem
+ }
+ 
+ .CharCustomisationBody .CharCustomisationBodyInner {
+   align-items: flex-start;
+   display: flex;
+   flex-grow: 1;
```

#### 3. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L7-L13` → after: `L85-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L85-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L85-L223) · [Before (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L7-L13)

```diff
-   pointer-events: all;
-   width: 100%;
-   z-index: 2
- }
- 
- .LobbyManage .LobbyManageBody {
-   align-items: center;
+   position: relative;
+   width: 100%
+ }
+ 
+ .CharCustomisationBody .CharCustomisationBodyInner .CharCustomisPartSelectorWrapper .CosmeticPackGroup .CosmeticShopBanner {
+   background-color: #ffb914;
+   border-width: 0;
+   box-shadow: none;
+   position: relative
+ }
+ 
+ .CharCustomisationBody .CharCustomisationBodyInner .CharCustomisPartSelectorWrapper .CosmeticPackGroup .CosmeticShopBanner .CosmeticShopBannerHeader {
+   font-size: 1.2rem;
+   padding: .3rem .5rem;
+   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
+ }
+ ... (123 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L16-L19` → after: `L226-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L226-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L226-L399) · [Before (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L16-L19)

```diff
-   overflow-y: auto
- }
- 
- .LobbyManage .LobbyManageBody .LobbyManageInner {
+   height: 100%;
+   justify-content: center;
+   width: 100%
+ }
+ 
+ .CharCustomisationBody .CharCustomisationBodyInner .CharCustomisPartSelectorWrapper .CosmeticPackGroup .CosmeticPackGroupItems .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   justify-content: center;
+   padding-bottom: .3rem;
+   width: 100%
+ }
+ 
+ .CharCustomisationBody .CharCustomisationBodyInner .CharCustomisPartSelectorWrapper .CosmeticPackGroup .CosmeticPackGroupItems .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart .EmoteCustomPartIcon {
+   aspect-ratio: 1/1;
+ ... (158 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L21-L39` → after: `L401-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L401-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L401-L411) · [Before (L21-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L21-L39)

```diff
-   max-width: 56rem;
-   padding: 2rem 2rem calc(2rem + var(--notchBottom)) 2rem;
-   width: 100%
- }
- 
- @media(max-width:700px), (orientation:portrait) {
-   .LobbyManage .LobbyManageBody .LobbyManageInner {
-     padding: 1rem
-   }
- }
- 
- @media(max-height:500px) {
-   .LobbyManage .LobbyManageBody .LobbyManageInner {
-     max-width: 70rem
-   }
- }
- ... (3 more removed lines; see GitHub link above)
+   display: grid;
+   gap: .5rem;
+   grid-template-columns: repeat(4, 1fr);
+   padding: .5rem;
+   width: 100%
+ }
+ 
+ .CharCustomisationBody .CharCustomisationBodyInner .CharacterPresetsGrid .CharacterPresetCard {
+   align-items: center;
+   border: .2rem solid transparent;
+   cursor: pointer;
```

#### 6. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L42-L78` → after: `L414-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L414-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L414-L478) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L42-L78)

```diff
-   gap: 1rem
- }
- 
- .LobbyManage .LobbyManageLoading {
-   display: flex;
-   font-size: 2rem;
-   justify-content: center;
-   padding: 1rem
- }
- 
- .LobbyManage .LobbyManageStatusRefused {
-   color: #ff8a80
- }
- 
- .LobbyManage .LobbyManageBox {
-   align-items: stretch;
- ... (21 more removed lines; see GitHub link above)
+   gap: .5rem;
+   position: relative;
+   transition: transform .15s, border-color .15s, background-color .15s
+ }
+ 
+ @media(hover:hover) {
+   .CharCustomisationBody .CharCustomisationBodyInner .CharacterPresetsGrid .CharacterPresetCard:hover {
+     transform: scale(1.05)
+   }
+ }
+ 
+ .CharCustomisationBody .CharCustomisationBodyInner .CharacterPresetsGrid .CharacterPresetCard.pad-focused {
+   transform: scale(1.05)
+ }
+ 
+ .CharCustomisationBody .CharCustomisationBodyInner .CharacterPresetsGrid .CharacterPresetCard.CharacterPresetCardActive {
+ ... (49 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L82-L89` → after: `L482-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L482-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L482-L515) · [Before (L82-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L82-L89)

```diff
-   font-size: 1.1rem;
-   gap: .35em;
-   min-height: 2.2em;
-   padding: 0 .6em
- }
- 
- @media(pointer:coarse) {
-   .LobbyManage .LobbyManageBox .LobbyManageBoxHeading .LobbyManageTitleAction {
+   flex-grow: 1;
+   height: 100%;
+   justify-content: center;
+   width: 12rem
+ }
+ 
+ .CharCustomisationBody .CharCustomisationBodyInner .CharCustomisationPreview .CharCustomisationPreviewCanvas {
+   height: 100%;
+   outline: none;
+   width: 100%
+ }
+ 
+ @media(orientation:portrait)and (max-width:1200px) {
+   .CharCustomisationBody .CharCustomisationBodyInner .CharCustomisPartSelectorWrapper {
+     flex-shrink: 0;
+     overflow-x: hidden;
+ ... (18 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L96-L751` → after: `L522-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L522-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L522-L558) · [Before (L96-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L96-L751)

```diff
- .LobbyManage .LobbyManageBox .LobbyManageConfirm {
-   align-items: center;
-   display: flex;
-   flex-wrap: wrap;
-   font-size: 1.1rem;
-   gap: .5rem;
-   justify-content: space-between
- }
- 
- .LobbyManage .LobbyManageBox .LobbyManageConfirm .LobbyManageConfirmText {
-   flex: 1 1 12rem
- }
- 
- .LobbyManage .LobbyManageBox .LobbyManageBoxStatus,
- .LobbyManage .LobbyManageBox .LobbyManageModeText {
-   font-size: 1.2rem
- ... (640 more removed lines; see GitHub link above)
+ @media(orientation:portrait)and (max-width:1200px) {
+   .CharCustomisationBody .CharCustomisationBodyInner .CharCustomisPartSelectorWrapper .CosmeticPackGroup .CosmeticPackGroupLabel .NewButton .ButtonBody {
+     white-space: normal
+   }
+ 
+   .CharCustomisationBody .CharCustomisationBodyInner .CharCustomisPartSelectorWrapper .CosmeticPackGroup .CosmeticPackGroupItems {
+     grid-template-columns: minmax(0, 1fr)
+   }
+ 
+   .CharCustomisationBody .CharCustomisationBodyInner .CharCustomisPartSelectorWrapper .CosmeticPackGroup .CosmeticPackGroupItems .CosmeticColorSwatchCell .CosmeticColorOption {
+     width: 50%
+   }
+ 
+   .CharCustomisationBody .CharCustomisationBodyInner .CharCustomisPartSelectorWrapper .CosmeticPackGroup .CosmeticPackGroupItems .CharCustomPartWrapper {
+     justify-self: center
+   }
+ ... (21 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L854-L857` → after: `L661-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L661-L662) · [Before (L854-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L854-L857)

```diff
- .PlayerNameField {
-   align-items: center;
-   display: flex;
-   font-size: 1.2rem;
+ .SavedOutfits .SavedOutfitSlot {
+   display: grid;
```

#### 10. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L861-L868` → after: `L666-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L666-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L666-L674) · [Before (L861-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L861-L868)

```diff
- .PlayerNameField .AddFriendBodyOverlay {
-   align-items: center;
-   background-color: rgba(0, 0, 0, .75);
-   display: flex;
-   height: 100%;
-   justify-content: center;
-   left: 0;
-   opacity: 1;
+ .SavedOutfits.CosmeticPackGroup .CharacterPresetsGrid.SavedOutfitsGrid {
+   padding-top: 1.75rem
+ }
+ 
+ .SavedOutfits .SavedOutfitDeleteButton {
+   bottom: calc(100% - .5rem);
+   font-size: .7rem;
+   overflow: visible;
+   padding: .35rem;
```

#### 11. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L870-L921` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L676) · [Before (L870-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L870-L921)

```diff
-   text-align: center;
-   top: 0;
-   transition: opacity .2s;
-   width: 100%;
-   z-index: 3
- }
- 
- .PlayerNameField .AddFriendBodyOverlay.AddFriendBodyOverlayEnter {
-   opacity: 0;
-   pointer-events: none
- }
- 
- .PlayerNameField .AddFriendBodyOverlay.AddFriendBodyOverlayLoading {
-   font-size: 2rem
- }
- 
- ... (36 more removed lines; see GitHub link above)
+   right: .4rem
```

#### 12. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L925` → after: `L680-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L680-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L680-L744) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L925)

```diff
-   .PlayerNameField .PlayerSearch .PlayerSearchInput {
+   .SavedOutfits .SavedOutfitDeleteButton:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) max(1.2rem/-2, min(0px, (100% - 44px)/2));
+     position: absolute
+   }
+ }
+ 
+ @media(orientation:portrait)and (max-width:1200px) {
+   .SavedOutfits.CosmeticPackGroup .CharacterPresetsGrid.SavedOutfitsGrid {
+     padding-top: .5rem
+   }
+ 
+   .SavedOutfits .SavedOutfitSlot.SavedOutfitSlotFilled {
+     padding-right: 2rem
+   }
+ 
+ ... (49 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/css/220.css` (Changed code · before: `L932-L945` → after: `L751-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fecb4725d86cc8e0201a814b33888b464bd1fa0e00c4fc4511d6950c81f6c190) · [After (L751-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/220.css#L751-L759) · [Before (L932-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/220.css#L932-L945)

```diff
- .PlayerNameField .PlayerSearch .PlayerSearchInputButton {
-   align-items: center;
-   border-bottom-left-radius: 0;
-   border-top-left-radius: 0;
-   box-shadow: none;
-   display: flex;
-   flex: 0 1 auto;
-   height: 2.4rem;
-   justify-content: center;
-   min-width: 0
- }
- 
- @media(pointer:coarse) {
-   .PlayerNameField .PlayerSearch .PlayerSearchInputButton {
+ @media(orientation:portrait)and (max-width:1200px) {
+   .SavedOutfits .SavedOutfitCard.SavedOutfitCardEmpty {
+     min-height: 0;
+     padding: .5rem
+   }
+ }
+ 
+ @media(orientation:portrait)and (max-width:1200px)and (pointer:coarse) {
+   .SavedOutfits .SavedOutfitCard.SavedOutfitCardEmpty {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/250.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/250.css` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418)

#### 1. `bundles/bloxd.io/chunks/css/250.css` (Changed code · before: `L1-L17` → after: `L1-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418) · [After (L1-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/250.css#L1-L109) · [Before (L1-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/250.css#L1-L17)

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

#### 2. `bundles/bloxd.io/chunks/css/250.css` (Changed code · before: `L20-L25` → after: `L155-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418) · [After (L155-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/250.css#L155-L183) · [Before (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/250.css#L20-L25)

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

#### 3. `bundles/bloxd.io/chunks/css/250.css` (Changed code · before: `L27` → after: `L185-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418) · [After (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/250.css#L185-L187) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/250.css#L27)

```diff
-   cursor: grab;
+   box-sizing: border-box;
+   height: 5px;
+   left: 50%;
```

#### 4. `bundles/bloxd.io/chunks/css/250.css` (Changed code · before: `L29-L40` → after: `L189-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418) · [After (L189-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/250.css#L189-L199) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/250.css#L29-L40)

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

#### 5. `bundles/bloxd.io/chunks/css/250.css` (Changed code · before: `L43-L52` → after: `L207-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418) · [After (L207-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/250.css#L207-L213) · [Before (L43-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/250.css#L43-L52)

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

#### 6. `bundles/bloxd.io/chunks/css/250.css` (Changed code · before: `L56-L57` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/250.css#L217) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/250.css#L56-L57)

```diff
- .StudioHeatmap3D .StudioHeatmap3DCrosshair:before {
-   height: 2px;
+ .CrosshairShapes .CrosshairShapesPress {
```

#### 7. `bundles/bloxd.io/chunks/css/250.css` (Changed code · before: `L59-L78` → after: `L219-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-97f90ce1ff065d3b25bd9999fd0e77376bf0e3d5148504ac6b138a78fd250418) · [After (L219-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/250.css#L219-L230) · [Before (L59-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/250.css#L59-L78)

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

## `bloxd.io` · `bundles/bloxd.io/chunks/css/92.css` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/css/92.css` (583 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600)

#### 1. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L1-L6` → after: `L1-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L1-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L1-L5) · [Before (L1-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L1-L6)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionsSection {
-   display: flex;
-   flex-direction: column;
-   gap: .5rem;
-   margin: 0 0 2rem;
-   width: 100%
+ .StudioAiAnswerText {
+   font-size: 1.1rem;
+   line-height: 1.5;
+   user-select: text;
+   -webkit-user-select: text
```

#### 2. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L9-L11` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L8-L10) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L9-L11)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionsSectionLabel {
-   font-size: 1.35rem;
-   text-align: center
+ .StudioAiAnswerText h3,
+ .StudioAiAnswerText h4 {
+   margin: 1rem 0 .25rem
```

#### 3. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L14-L17` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L13-L14) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L14-L17)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCards {
-   align-items: stretch;
-   display: flex;
-   gap: .5rem
+ .StudioAiAnswerText h3 {
+   font-size: 1.4rem
```

#### 4. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L20-L25` → after: `L17-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L17-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L17-L18) · [Before (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L20-L25)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionColumn {
-   display: flex;
-   flex: 1 1;
-   flex-direction: column;
-   gap: .4rem;
-   min-width: 0
+ .StudioAiAnswerText h4 {
+   font-size: 1.2rem
```

#### 5. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L28-L38` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L21-L24) · [Before (L28-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L28-L38)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard {
-   align-items: center;
-   background-color: rgba(48, 58, 89, .5);
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   cursor: pointer;
-   display: flex;
-   flex: 1 1 auto;
-   gap: .75rem;
-   padding: .6rem .75rem;
-   transition: scale .15s, background-color .15s, border-color .15s
+ .StudioAiAnswerText ol,
+ .StudioAiAnswerText p,
+ .StudioAiAnswerText ul {
+   margin: .4rem 0
```

#### 6. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L41-L44` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L27-L29) · [Before (L41-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L41-L44)

```diff
- @media(hover:hover) {
-   .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard:hover {
-     scale: 1.03
-   }
+ .StudioAiAnswerText ol,
+ .StudioAiAnswerText ul {
+   padding-left: 1.5rem
```

#### 7. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L47-L48` → after: `L32-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L32-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L32-L35) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L47-L48)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.pad-focused {
-   scale: 1.03
+ .StudioAiAnswerText code {
+   background-color: #303a59;
+   overflow-wrap: anywhere;
+   padding: 0 .2rem
```

#### 8. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L51-L54` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L38-L39) · [Before (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L51-L54)

```diff
- @media(hover:none) {
-   .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard:active {
-     scale: 1.03
-   }
+ .StudioAiAnswerText table {
+   border-collapse: collapse
```

#### 9. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L57-L59` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L42-L45) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L57-L59)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.Selected {
-   background-color: rgba(255, 185, 20, .15);
-   border-color: #ffb914
+ .StudioAiAnswerText table td,
+ .StudioAiAnswerText table th {
+   border: 1px solid #303a59;
+   padding: .2rem .5rem
```

#### 10. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L62-L64` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L48-L50) · [Before (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L62-L64)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.Disabled {
-   cursor: default;
-   filter: brightness(.6)
+ .StudioAiAnswerSummary p {
+   font-weight: 700;
+   margin-top: 0
```

#### 11. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L67-L70` → after: `L53-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L53-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L53-L57) · [Before (L67-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L67-L70)

```diff
- @media(hover:hover) {
-   .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.Disabled:hover {
-     scale: 1
-   }
+ .StudioAiAnswerText p.StudioAiKidGoingWell {
+   align-items: baseline;
+   display: flex;
+   gap: .5rem;
+   margin: .4rem 0 .6rem
```

#### 12. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L73-L74` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L60-L62) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L73-L74)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.Disabled.pad-focused {
-   scale: 1
+ .StudioAiAnswerText p.StudioAiKidGoingWell svg {
+   color: #1dd06d;
+   flex-shrink: 0
```

#### 13. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L77-L80` → after: `L65-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L65-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L65-L68) · [Before (L77-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L77-L80)

```diff
- @media(hover:none) {
-   .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.Disabled:active {
-     scale: 1
-   }
+ .StudioAiAnswerSection h3 {
+   align-items: center;
+   display: flex;
+   gap: .5rem
```

#### 14. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L83-L89` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L71-L72) · [Before (L83-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L83-L89)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCardBody {
-   display: flex;
-   flex: 1 1 auto;
-   flex-direction: column;
-   gap: .15rem;
-   min-width: 0;
-   text-align: center
+ .StudioAiAnswerSection-goingWell h3 svg {
+   color: #1dd06d
```

#### 15. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L92-L99` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L75-L76) · [Before (L92-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L92-L99)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCardLabel {
-   color: #f2f2f2;
-   font-size: 1.2rem;
-   font-weight: 700;
-   overflow-x: hidden;
-   text-align: center;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .StudioAiAnswerSection-fixFirst h3 svg {
+   color: #fcd373
```

#### 16. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L102-L105` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L79-L80) · [Before (L102-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L102-L105)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCardDescription {
-   color: #cfcfcf;
-   font-size: .75rem;
-   white-space: normal
+ .StudioAiAnswerSection-tryNext h3 svg {
+   color: #85baff
```

#### 17. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L108-L117` → after: `L83-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L83-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L83-L87) · [Before (L108-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L108-L117)

```diff
- .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionError {
-   background-color: #ffb914;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   color: #22283b;
-   font-size: .85rem;
-   line-height: 1.3;
-   padding: .4rem .55rem;
-   text-align: center;
-   white-space: normal
+ .StudioAiNextChange {
+   background-color: rgba(57, 73, 128, .4);
+   border: 2px solid rgba(255, 185, 20, .35);
+   margin: .5rem 0 .75rem;
+   padding: .6rem .9rem
```

#### 18. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L120-L123` → after: `L90-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L90-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L90-L95) · [Before (L120-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L120-L123)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox {
-   --tooltipBackground: #22283b;
-   padding: 0;
-   white-space: normal
+ .StudioAiNextChange h4 {
+   align-items: center;
+   display: flex;
+   font-size: 1.15rem;
+   gap: .5rem;
+   margin: 0 0 .35rem
```

#### 19. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L126-L128` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L98-L99) · [Before (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L126-L128)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox[data-popper-placement*=bottom] .tooltip-arrow:after,
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox[data-popper-placement*=bottom] .tooltip-arrow:before {
-   border-bottom-color: #ffb914
+ .StudioAiNextChange h4 svg {
+   color: #ffb914
```

#### 20. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L131-L139` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L102-L103) · [Before (L131-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L131-L139)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltip {
-   border-top: .2em solid #ffb914;
-   display: flex;
-   flex-direction: column;
-   font-size: max(1.1rem, 13px, min(.9166666667vw, 1.6296296296vh));
-   line-height: 1.4;
-   max-width: 19em;
-   min-width: 11em;
-   text-align: left
+ .StudioAiNextChange>:last-child {
+   margin-bottom: 0
```

#### 21. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L142-L146` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L106-L107) · [Before (L142-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L142-L146)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeader {
-   align-items: center;
-   display: flex;
-   gap: .6em;
-   padding: .55em .75em
+ .StudioAiNextChange strong {
+   color: #fff
```

#### 22. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L149-L159` → after: `L110-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L110-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L110-L121) · [Before (L149-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L149-L159)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipIcon {
-   align-items: center;
-   background: #1a1f2e;
-   border: 1px solid #0f0f0f;
-   box-sizing: border-box;
-   display: flex;
-   flex-shrink: 0;
-   height: 2.4em;
-   justify-content: center;
-   padding: .25em;
-   width: 2.4em
+ .StudioAiNextChangeProgress {
+   border: 1px solid hsla(0, 0%, 95%, .1);
+   color: #cfcfcf;
+   font-size: .9rem;
+   font-weight: 700;
+   margin-left: auto;
+   padding: 0 .6rem
+ }
+ 
+ .StudioAiNextChangeProgress.StudioAiNextChangeProgressDone {
+   border-color: #1dd06d;
+   color: #1dd06d
```

#### 23. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L162-L165` → after: `L124-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L124-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L124-L126) · [Before (L162-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L162-L165)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipName {
-   font-size: 1.1em;
-   font-weight: 900;
-   line-height: 1.2
+ .StudioAiAnswerText ol.StudioAiNextChangeSteps {
+   list-style: none;
+   padding-left: 0
```

#### 24. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L168-L173` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L129-L130) · [Before (L168-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L168-L173)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipLabel {
-   color: #cfcfcf;
-   font-size: .75em;
-   font-weight: 900;
-   letter-spacing: .1em;
-   text-transform: uppercase
+ .StudioAiNextChangeStep {
+   margin: .3rem 0
```

#### 25. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L176` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L133-L135) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L176)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipBody {
+ .StudioAiNextChangeStep>label {
+   align-items: flex-start;
+   cursor: pointer;
```

#### 26. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L178-L180` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L137) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L178-L180)

```diff
-   flex-direction: column;
-   gap: .45em;
-   padding: 0 .75em .6em
+   gap: .6rem
```

#### 27. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L183-L184` → after: `L140-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L140-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L140-L146) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L183-L184)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipDescription {
-   color: #f2f2f2
+ .StudioAiNextChangeStep input {
+   accent-color: #1dd06d;
+   cursor: pointer;
+   flex-shrink: 0;
+   height: 1.15rem;
+   margin: .2rem 0 0;
+   width: 1.15rem
```

#### 28. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L187-L192` → after: `L149-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L149-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L149-L151) · [Before (L187-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L187-L192)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipSource {
-   align-items: baseline;
-   column-gap: .45em;
-   display: flex;
-   flex-wrap: wrap;
-   font-weight: 800
+ .StudioAiNextChangeStep.StudioAiNextChangeStepDone>label>span {
+   color: #a4a4a4;
+   text-decoration: line-through
```

#### 29. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L195-L196` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L154) · [Before (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L195-L196)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld {
-   grid-gap: .35em 1.2em;
+ .StudioAiAnswerText p.StudioAiNextChangeTarget {
```

#### 30. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L199-L202` → after: `L157-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L157-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L157-L160) · [Before (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L199-L202)

```diff
-   display: grid;
-   gap: .35em 1.2em;
-   grid-template-columns: 1fr auto;
-   padding: .5em .75em .65em
+   display: flex;
+   gap: .6rem;
+   margin-top: .5rem;
+   padding-top: .45rem
```

#### 31. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L205-L207` → after: `L163-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L163-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L163-L165) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L205-L207)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld .BoardChipTooltipCount {
-   color: #cfcfcf;
-   font-weight: 900
+ .StudioAiAnswerText p.StudioAiNextChangeTarget svg {
+   color: #1dd06d;
+   flex-shrink: 0
```

#### 32. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L210-L211` → after: `L168-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L168-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L168-L172) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L210-L211)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld .BoardChipTooltipHeldAmount {
-   color: #1dd06d
+ .StudioAiAnswerText p.StudioAiNextChangeThen {
+   align-items: baseline;
+   display: flex;
+   gap: .6rem;
+   margin-top: .5rem
```

#### 33. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L214-L217` → after: `L175-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L175-L177) · [Before (L214-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L214-L217)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld .BoardChipTooltipMeter {
-   background: #1a1f2e;
-   grid-column: 1/-1;
-   height: .3em
+ .StudioAiAnswerText p.StudioAiNextChangeThen svg {
+   color: #85baff;
+   flex-shrink: 0
```

#### 34. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L220-L223` → after: `L180-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L180-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L180-L182) · [Before (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L220-L223)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld .BoardChipTooltipMeter span {
-   background: #1dd06d;
-   display: block;
-   height: 100%
+ .StudioAiNextChange .StudioAiNextChangeCode {
+   background-color: #303a59;
+   margin: .5rem 0
```

#### 35. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L226-L227` → after: `L185-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L185-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L185-L189) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L226-L227)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld.Short .BoardChipTooltipHeldAmount {
-   color: #ff8a80
+ .StudioAiNextChange .StudioAiNextChangeCode .StudioAiTrackLineHeader>span {
+   align-items: center;
+   color: #cfcfcf;
+   display: inline-flex;
+   gap: .4rem
```

#### 36. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L230-L231` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L192-L193) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L230-L231)

```diff
- .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld.Short .BoardChipTooltipMeter span {
-   background: #e34f4f
+ .StudioAiNextChange .StudioAiNextChangeCode pre {
+   font-size: 1.05em
```

#### 37. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L234-L237` → after: `L196-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L196-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L196-L200) · [Before (L234-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L234-L237)

```diff
- .GameBackgroundScreen.ContainmentBoardOverlay {
-   background: #303a59;
-   pointer-events: auto;
-   z-index: 9
+ .StudioAiAnswerText p.StudioAiNextChangeCodeCheck,
+ .StudioAiAnswerText p.StudioAiNextChangeWhere {
+   font-size: .95em;
+   margin: .4rem 0 0;
+   overflow-wrap: anywhere
```

#### 38. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L240-L255` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L203-L204) · [Before (L240-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L240-L255)

```diff
- .ContainmentBoardPanel {
-   --tile-min-width: 9em;
-   --tile-icon: 3.4em;
-   --detail-icon: 4em;
-   background: #303a59;
-   box-sizing: border-box;
-   color: #fff;
-   display: flex;
-   flex-direction: column;
-   font-size: max(1.35rem, 14px, min(1.125vw, 2vh));
-   height: 100%;
-   padding: var(--notchTop) var(--notchRight) var(--notchBottom) var(--notchLeft);
-   position: relative;
-   text-align: left;
-   white-space: normal;
-   width: 100%
+ .StudioAiAnswerText p.StudioAiNextChangeCodeCheck {
+   color: #fcd373
```

#### 39. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L258-L261` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L207-L208) · [Before (L258-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L258-L261)

```diff
- .ContainmentBoardPanel h2,
- .ContainmentBoardPanel h3,
- .ContainmentBoardPanel p {
-   margin: 0
+ .StudioAiAnswerText p.StudioAiNextChangeCodeCheck.StudioAiNextChangeCodeAdd {
+   color: inherit
```

#### 40. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L264-L269` → after: `L211-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L211-L213) · [Before (L264-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L264-L269)

```diff
- .ContainmentBoardPanel .BoardDecor {
-   inset: 0;
-   overflow: hidden;
-   pointer-events: none;
-   position: absolute;
-   z-index: 2
+ .StudioAiNextChangeCode p.StudioAiNextChangeWhere {
+   border-top: 1px dashed hsla(0, 0%, 95%, .1);
+   padding-top: .35rem
```

#### 41. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L272-L282` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L216-L218) · [Before (L272-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L272-L282)

```diff
- .ContainmentBoardPanel .BoardHeader {
-   align-items: center;
-   background: #394980;
-   border-bottom: 1px solid #0f0f0f;
-   box-sizing: border-box;
-   display: flex;
-   gap: .8em;
-   justify-content: flex-end;
-   min-height: calc(var(--InGameHeaderRowsHeight, 2.5rem) + .25rem);
-   padding: .5em .6em .5em 1em;
-   position: relative
+ .StudioAiNextChangeTitle {
+   color: #fff;
+   font-weight: 700
```

#### 42. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L285-L286` → after: `L221-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L221-L224) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L285-L286)

```diff
- .ContainmentBoardPanel .BoardHeader .ExitButton {
-   font-size: 1.4em
+ .StudioAiNextChangeBasis {
+   color: #cfcfcf;
+   font-size: .9rem;
+   white-space: normal
```

#### 43. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L289-L293` → after: `L227-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L227-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L227-L230) · [Before (L289-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L289-L293)

```diff
- .ContainmentBoardPanel .BoardWallet {
-   display: flex;
-   flex-wrap: wrap;
-   gap: .4em;
-   justify-content: flex-end
+ .StudioAiCheckPlan {
+   border: 1px dashed hsla(0, 0%, 95%, .1);
+   margin-top: .5rem;
+   padding: .45rem .75rem
```

#### 44. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L296-L304` → after: `L233-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L233-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L233-L235) · [Before (L296-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L296-L304)

```diff
- .ContainmentBoardPanel .BoardChip {
-   align-items: center;
-   background: #1a1f2e;
-   border: 1px solid #0f0f0f;
-   cursor: help;
-   display: inline-flex;
-   font-weight: 700;
-   gap: .3em;
-   padding: .15em .5em .15em .2em
+ .StudioAiCheckPlan p {
+   margin: .2rem 0 0;
+   overflow-wrap: anywhere
```

#### 45. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L307` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L238) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L307)

```diff
- .ContainmentBoardPanel .BoardChip .BoardChipIcon {
+ .StudioAiCheckPlan p.StudioAiCheckPlanTitle {
```

#### 46. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L310-L313` → after: `L241-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L241-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L241-L243) · [Before (L310-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L310-L313)

```diff
-   flex-shrink: 0;
-   height: 1.4em;
-   justify-content: center;
-   width: 1.4em
+   font-weight: 700;
+   gap: .5rem;
+   margin: 0
```

#### 47. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L316-L318` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L246-L247) · [Before (L316-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L316-L318)

```diff
- .ContainmentBoardPanel .BoardChip.Short {
-   border-color: #fc6464;
-   color: #ff8a80
+ .StudioAiCheckPlan p.StudioAiCheckPlanTitle svg {
+   color: #1dd06d
```

#### 48. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L321-L325` → after: `L250-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L250-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L250-L252) · [Before (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L321-L325)

```diff
- .ContainmentBoardPanel .BoardBody {
-   display: grid;
-   flex: 1 1;
-   grid-template-columns: 1fr 21em;
-   min-height: 0
+ .StudioAiCheckPlan p.StudioAiCheckPlanOneLine {
+   align-items: baseline;
+   font-weight: inherit
```

#### 49. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L328-L335` → after: `L255-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L255-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L255-L268) · [Before (L328-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L328-L335)

```diff
- .ContainmentBoardPanel .BoardTiles {
-   grid-gap: .5em;
-   display: grid;
-   gap: .5em;
-   grid-auto-rows: min-content;
-   grid-template-columns: repeat(auto-fill, minmax(var(--tile-min-width), 1fr));
-   overflow-y: auto;
-   padding: .5em
+ .StudioAiCheckPlan p.StudioAiCheckPlanOneLine svg {
+   flex-shrink: 0
+ }
+ 
+ .StudioAiCheckPlan p.StudioAiCheckPlanUndo {
+   color: #cfcfcf;
+   font-size: .95em
+ }
+ 
+ .StudioAiAnswerText .StudioAiDataFacts {
+   background-color: rgba(57, 73, 128, .4);
+   border-left: .3rem solid #85baff;
+   margin: .6rem 0;
+   padding: .45rem .75rem
```

#### 50. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L338` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L271) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L338)

```diff
- .ContainmentBoardPanel .BoardTiles .BoardTile {
+ .StudioAiAnswerText .StudioAiDataFacts p.StudioAiDataFactsTitle {
```

#### 51. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L346-L350` → after: `L274-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L274-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L274-L276) · [Before (L346-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L346-L350)

```diff
-   flex-direction: column;
-   font: inherit;
-   gap: .4em;
-   padding: 1.35em .5em .8em;
-   position: relative
+   font-weight: 700;
+   gap: .5rem;
+   margin: 0
```

#### 52. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L353-L356` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L279-L280) · [Before (L353-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L353-L356)

```diff
- @media(hover:hover) {
-   .ContainmentBoardPanel .BoardTiles .BoardTile:hover {
-     background: #394980
-   }
+ .StudioAiAnswerText .StudioAiDataFacts p.StudioAiDataFactsTitle svg {
+   color: #85baff
```

#### 53. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L359-L360` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L283-L284) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L359-L360)

```diff
- .ContainmentBoardPanel .BoardTiles .BoardTile.pad-focused {
-   background: #394980
+ .StudioAiAnswerText .StudioAiDataFacts ul {
+   margin: .2rem 0 0
```

#### 54. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L363-L366` → after: `L287-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L287-L288) · [Before (L363-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L363-L366)

```diff
- @media(hover:none) {
-   .ContainmentBoardPanel .BoardTiles .BoardTile:active {
-     background: #394980
-   }
+ .StudioAiAnswerText .StudioAiDataFacts li {
+   overflow-wrap: anywhere
```

#### 55. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L369-L371` → after: `L291-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L291-L293) · [Before (L369-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L369-L371)

```diff
- .ContainmentBoardPanel .BoardTiles .BoardTile.Selected {
-   outline: 3px solid #ffb914;
-   outline-offset: -1px
+ .StudioAiAnswerText .StudioAiDataFacts li.StudioAiHardestSteps ol {
+   margin: .1rem 0 0;
+   padding-left: 1.4rem
```

#### 56. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L374-L375` → after: `L296-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L296-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L296-L299) · [Before (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L374-L375)

```diff
- .ContainmentBoardPanel .BoardTiles .BoardTile.Locked .BoardTileIcon {
-   filter: grayscale(1) brightness(.35)
+ .StudioAiAnswerText .StudioAiDataFacts.StudioAiAlsoInData {
+   background-color: transparent;
+   border-left-color: hsla(0, 0%, 95%, .1);
+   margin-top: -.3rem
```

#### 57. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L378-L379` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L302-L303) · [Before (L378-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L378-L379)

```diff
- .ContainmentBoardPanel .BoardTiles .BoardTile.Locked .BoardTileName {
-   color: #f2f2f2
+ .StudioAiAnswerText .StudioAiDataFacts.StudioAiAlsoInData p.StudioAiDataFactsTitle svg {
+   color: #cfcfcf
```

#### 58. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L382-L386` → after: `L306-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L306-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L306-L308) · [Before (L382-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L382-L386)

```diff
- .ContainmentBoardPanel .BoardTiles .BoardTile .BoardBadge {
-   left: -1px;
-   position: absolute;
-   top: -1px;
-   z-index: 1
+ .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents {
+   background-color: transparent;
+   border-left-color: hsla(0, 0%, 95%, .1)
```

#### 59. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L389` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L311) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L389)

```diff
- .ContainmentBoardPanel .BoardTiles .BoardTileIcon {
+ .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents>summary.StudioAiDataFactsTitle {
```

#### 60. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L392-L403` → after: `L315-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L315-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L315-L317) · [Before (L392-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L392-L403)

```diff
-   flex-shrink: 0;
-   height: var(--tile-icon);
-   justify-content: center;
-   width: var(--tile-icon)
- }
- 
- .ContainmentBoardPanel .BoardTiles .BoardTileName {
-   font-size: .9em;
-   font-weight: 900;
-   line-height: 1.15;
-   overflow-wrap: anywhere;
-   text-align: center
+   font-weight: 700;
+   gap: .5rem;
+   list-style: none
```

#### 61. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L406-L413` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L320-L321) · [Before (L406-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L406-L413)

```diff
- .ContainmentBoardPanel .BoardMugshot {
-   background: #f2f2f2;
-   border: 1px solid #0f0f0f;
-   box-sizing: border-box;
-   display: block;
-   height: 100%;
-   padding: .12em;
-   width: 100%
+ .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents>summary.StudioAiDataFactsTitle::-webkit-details-marker {
+   display: none
```

#### 62. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L416-L419` → after: `L324-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L324-L325) · [Before (L416-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L416-L419)

```diff
- .ContainmentBoardPanel .BoardMugshot img {
-   display: block;
-   height: 100%;
-   width: 100%
+ .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents>summary.StudioAiDataFactsTitle svg {
+   color: #cfcfcf
```

#### 63. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L422-L423` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L328-L329) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L422-L423)

```diff
- .ContainmentBoardPanel .BoardMugshot.Uncaught img {
-   animation: BoardMugshotGlitch 3.7s steps(1) infinite
+ .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents>summary.StudioAiDataFactsTitle svg.StudioAiYourEventsCaret {
+   transition: transform .15s
```

#### 64. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L426-L429` → after: `L332-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L332-L334) · [Before (L426-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L426-L429)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .ContainmentBoardPanel .BoardMugshot.Uncaught img {
-     animation: none
-   }
+ .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents p.StudioAiYourEventsHint {
+   color: #cfcfcf;
+   margin: .2rem 0 0
```

#### 65. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L432-L434` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L337-L338) · [Before (L432-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L432-L434)

```diff
- .ContainmentBoardPanel .BoardMugshot[data-off-screen] img,
- html[data-app-covered] .WholeAppWrapper .ContainmentBoardPanel .BoardMugshot img {
-   animation-play-state: paused
+ .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents[open]>summary svg.StudioAiYourEventsCaret {
+   transform: rotate(90deg)
```

#### 66. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L437-L445` → after: `L341-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L341-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L341-L345) · [Before (L437-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L437-L445)

```diff
- .ContainmentBoardPanel .BoardBadge {
-   background: #ffb914;
-   border: 1px solid #0f0f0f;
-   color: #0f0f0f;
-   font-size: .7em;
-   font-weight: 700;
-   letter-spacing: .06em;
-   padding: 0 .35em;
-   text-transform: uppercase
+ .StudioAiAnswerText .StudioAiMeasureFirst {
+   background-color: rgba(57, 73, 128, .4);
+   border-left: .3rem solid #fcd373;
+   margin: .6rem 0;
+   padding: .45rem .75rem
```

#### 67. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L448-L450` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L348-L349) · [Before (L448-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L448-L450)

```diff
- .ContainmentBoardPanel .BoardBadge.Muted {
-   background: #1a1f2e;
-   color: #cfcfcf
+ .StudioAiAnswerText .StudioAiMeasureFirst p {
+   margin: .2rem 0 0
```

#### 68. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L453-L455` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L352-L353) · [Before (L453-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L453-L455)

```diff
- .ContainmentBoardPanel .BoardDetail {
-   background: #2b3249;
-   border-left: 1px solid #0f0f0f;
+ .StudioAiAnswerText .StudioAiMeasureFirst p.StudioAiMeasureFirstTitle {
+   align-items: baseline;
```

#### 69. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L457-L460` → after: `L355-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L355-L356) · [Before (L457-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L457-L460)

```diff
-   flex-direction: column;
-   gap: .7em;
-   overflow-y: auto;
-   padding: .8em
+   gap: .5rem;
+   margin: 0
```

#### 70. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L463-L466` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L359-L360) · [Before (L463-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L463-L466)

```diff
- .ContainmentBoardPanel .BoardDetailHeader {
-   align-items: center;
-   display: flex;
-   gap: .7em
+ .StudioAiAnswerText .StudioAiMeasureFirst p.StudioAiMeasureFirstTitle svg {
+   color: #fcd373
```

#### 71. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L469-L472` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L363-L364) · [Before (L469-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L469-L472)

```diff
- .ContainmentBoardPanel .BoardDetailHeader h3 {
-   font-size: 1.25em;
-   line-height: 1.15;
-   overflow-wrap: anywhere
+ .StudioAiAnswerText .StudioAiMeasureFirst p.StudioAiMeasureFirstHint {
+   color: #cfcfcf
```

#### 72. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L475` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L367) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L475)

```diff
- .ContainmentBoardPanel .BoardDetailIcon {
+ .StudioAiAnswerText .StudioAiMeasureFirst>details>summary {
```

#### 73. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L477` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L369) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L477)

```diff
-   background: #1a1f2e;
+   cursor: pointer;
```

#### 74. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L479-L482` → after: `L371-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L371-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L371-L374) · [Before (L479-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L479-L482)

```diff
-   flex-shrink: 0;
-   height: var(--detail-icon);
-   justify-content: center;
-   width: var(--detail-icon)
+   font-weight: 700;
+   gap: .5rem;
+   list-style: none;
+   margin-top: .3rem
```

#### 75. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L485-L490` → after: `L377-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L377-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L377-L378) · [Before (L485-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L485-L490)

```diff
- .ContainmentBoardPanel .BoardDetailHeading {
-   align-items: flex-start;
-   display: flex;
-   flex-direction: column;
-   gap: .25em;
-   min-width: 0
+ .StudioAiAnswerText .StudioAiMeasureFirst>details>summary::-webkit-details-marker {
+   display: none
```

#### 76. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L493-L494` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L381) · [Before (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L493-L494)

```diff
- .ContainmentBoardPanel .BoardDetailStatus {
-   align-items: center;
+ .StudioAiAnswerText .StudioAiMeasureFirst>details>summary svg.StudioAiMeasureFirstCaret {
```

#### 77. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L496-L497` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L383) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L496-L497)

```diff
-   display: flex;
-   gap: .4em
+   transition: transform .15s
```

#### 78. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L500-L503` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L386-L387) · [Before (L500-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L500-L503)

```diff
- .ContainmentBoardPanel .BoardDescription {
-   color: #f2f2f2;
-   font-size: .9em;
-   line-height: 1.35
+ .StudioAiAnswerText .StudioAiMeasureFirst>details[open]>summary svg.StudioAiMeasureFirstCaret {
+   transform: rotate(90deg)
```

#### 79. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L506-L516` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L390-L391) · [Before (L506-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L506-L516)

```diff
- .ContainmentBoardPanel .BoardActions {
-   background: inherit;
-   bottom: -.8em;
-   display: flex;
-   flex-direction: column;
-   gap: .5em;
-   margin-bottom: -.8em;
-   margin-top: auto;
-   padding: .5em 0 .8em;
-   position: sticky;
-   z-index: 1
+ .StudioAiAnswerText .StudioAiMeasureFirst ul {
+   margin: .2rem 0 0
```

#### 80. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L519-L521` → after: `L394-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L394-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L394-L395) · [Before (L519-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L519-L521)

```diff
- .ContainmentBoardPanel .BoardActions .NewButton,
- .ContainmentBoardPanel .BoardActions .SecondaryButton {
-   min-height: 2.6em
+ .StudioAiAnswerText .StudioAiMeasureFirst.StudioAiMeasureFirstInvite {
+   border-left-color: #85baff
```

#### 81. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L524-L526` → after: `L398-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L398-L399) · [Before (L524-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L524-L526)

```diff
- .ContainmentBoardPanel .BoardHint {
-   color: #cfcfcf;
-   text-align: center
+ .StudioAiAnswerText .StudioAiMeasureFirst.StudioAiMeasureFirstInvite p.StudioAiMeasureFirstTitle svg {
+   color: #85baff
```

#### 82. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L529-L533` → after: `L402-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L402-L403) · [Before (L529-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L529-L533)

```diff
- .ContainmentBoardPanel .BoardStatus {
-   align-items: center;
-   background: #394980;
-   border-top: 1px solid #0f0f0f;
-   color: #1dd06d;
+ .StudioAiAnswerText p.StudioAiEffectSize {
+   align-items: baseline;
```

#### 83. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L535-L538` → after: `L405-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L405-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L405-L407) · [Before (L535-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L535-L538)

```diff
-   font-weight: 700;
-   gap: .6em;
-   min-height: 2em;
-   padding: .4em 1em
+   gap: .6rem;
+   margin-top: .35rem;
+   overflow-wrap: anywhere
```

#### 84. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L541-L543` → after: `L410-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L410-L412) · [Before (L541-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L541-L543)

```diff
- .ContainmentBoardPanel .BoardStatus.Refused {
-   background: #cc1414;
-   color: #fff
+ .StudioAiAnswerText p.StudioAiEffectSize svg {
+   color: #1dd06d;
+   flex-shrink: 0
```

#### 85. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L546-L575` → after: `L415-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L415-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L415-L418) · [Before (L546-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L546-L575)

```diff
- @keyframes BoardMugshotGlitch {
-   0% {
-     filter: none;
-     transform: none
-   }
- 
-   88% {
-     filter: contrast(1.8);
-     transform: translateX(.05em)
-   }
- 
-   90% {
-     filter: brightness(1.4);
-     transform: translateX(-.08em) skewX(6deg)
-   }
- 
- ... (14 more removed lines; see GitHub link above)
+ .StudioAiGuessMark {
+   color: #cfcfcf;
+   font-size: .85em;
+   font-style: italic
```

#### 86. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L578-L581` → after: `L421-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L421-L423) · [Before (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L578-L581)

```diff
- @media(max-width:900px)and (orientation:landscape) {
-   .ContainmentBoardPanel .BoardBody {
-     grid-template-columns: 1fr 17em
-   }
+ .StudioAiGuessMark svg {
+   color: #fcd373;
+   margin-right: .3em
```

#### 87. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L584-L605` → after: `L426-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L426-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L426-L430) · [Before (L584-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L584-L605)

```diff
- @media(max-height:560px) {
-   .ContainmentBoardPanel .BoardTiles .BoardTile {
-     gap: .3em;
-     padding: 1.15em .35em .5em
-   }
- 
-   .ContainmentBoardPanel .BoardTiles .BoardTileIcon {
-     --tile-icon: 2.6em
-   }
- 
-   .ContainmentBoardPanel .BoardDetailIcon {
-     --detail-icon: 2.8em
-   }
- 
-   .ContainmentBoardPanel .BoardDetailHeader h3 {
-     font-size: 1.1em
- ... (6 more removed lines; see GitHub link above)
+ .StudioAiBranchNote {
+   color: #cfcfcf;
+   display: block;
+   font-size: .9em;
+   margin-top: .2rem
```

#### 88. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L608-L611` → after: `L433-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L433-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L433-L435) · [Before (L608-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L608-L611)

```diff
- @media(max-width:900px)and (orientation:portrait) {
-   .ContainmentBoardPanel .BoardHeader {
-     padding-top: calc(var(--InGameHeaderRowsHeight, 2.5rem) + .25rem)
-   }
+ .StudioAiBranchNote svg {
+   margin-right: .35em
+ }
```

#### 89. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L613-L616` → after: `L437-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L437-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L437-L443) · [Before (L613-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L613-L616)

```diff
-   .ContainmentBoardPanel .BoardWallet {
-     flex: 1 1;
-     justify-content: flex-start
-   }
+ .StudioAiConstantCheck {
+   color: #cfcfcf;
+   cursor: help;
+   display: block;
+   font-size: .9em;
+   margin-top: .2rem
+ }
```

#### 90. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L618-L621` → after: `L445-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L445-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L445-L447) · [Before (L618-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L618-L621)

```diff
-   .ContainmentBoardPanel .BoardBody {
-     display: flex;
-     flex-direction: column
-   }
+ .StudioAiConstantCheck svg {
+   margin-right: .35em
+ }
```

#### 91. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L623-L627` → after: `L449-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L449-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L449-L451) · [Before (L623-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L623-L627)

```diff
-   .ContainmentBoardPanel .BoardTiles {
-     --tile-min-width: 6.5em;
-     flex: 1 1;
-     min-height: 0
-   }
+ .StudioAiConstantCheckDirection svg {
+   color: #fcd373
+ }
```

#### 92. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L629-L631` → after: `L453-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L453-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L453-L461) · [Before (L629-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L629-L631)

```diff
-   .ContainmentBoardPanel .BoardTiles .BoardTileName {
-     font-size: .82em
-   }
+ .StudioAiNextChangePeek {
+   align-items: center;
+   background-color: rgba(57, 73, 128, .4);
+   border: 2px solid rgba(255, 185, 20, .35);
+   display: none;
+   gap: .5rem;
+   margin: .6rem 0 0;
+   padding: .35rem .9rem
+ }
```

#### 93. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L633-L639` → after: `L463-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L463-L465) · [Before (L633-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L633-L639)

```diff
-   .ContainmentBoardPanel .BoardDetail {
-     border-left: none;
-     border-top: 1px solid #0f0f0f;
-     flex: 0 1 auto;
-     max-height: 45%;
-     min-height: 0
-   }
+ .StudioAiNextChangePeek svg {
+   color: #ffb914;
+   flex-shrink: 0
```

#### 94. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L642-L644` → after: `L468-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L468-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L468-L469) · [Before (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L642-L644)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel {
-   background: #3f1f0e;
-   font-weight: 800
+ .StudioAiNextChangePeek strong {
+   flex-shrink: 0
```

#### 95. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L647-L649` → after: `L472-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L472-L476) · [Before (L647-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L647-L649)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel .BoardHeader {
-   background: #50250e;
-   padding-bottom: .8em
+ .StudioAiNextChangePeekText {
+   min-width: 0;
+   overflow: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 96. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L652-L659` → after: `L479-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L479-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L479-L486) · [Before (L652-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L652-L659)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel .BoardHeader:after {
-   background: #ffb914;
-   bottom: 0;
-   content: "";
-   height: .3em;
-   left: 0;
-   position: absolute;
-   right: 0
+ .StudioAiAnswerText .StudioAiJourneyStrip {
+   grid-gap: .75rem;
+   display: grid;
+   gap: .75rem;
+   grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
+   list-style: none;
+   margin: .75rem 0 .5rem;
+   padding: 0
```

#### 97. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L662-L664` → after: `L489-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L489-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L489-L492) · [Before (L662-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L662-L664)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel .CodexProgress {
-   background: #20150f;
-   border: 1px solid #0f0f0f;
+ .StudioAiJourneyStep {
+   background-color: rgba(57, 73, 128, .4);
+   border: 1px solid hsla(0, 0%, 95%, .1);
+   border-left: .3rem solid #a4a4a4;
```

#### 98. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L667-L669` → after: `L495-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L495-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L495-L497) · [Before (L667-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L667-L669)

```diff
-   font-weight: 900;
-   gap: .25em;
-   padding: .25em .6em .35em
+   gap: .4rem;
+   padding: .5rem .75rem;
+   position: relative
```

#### 99. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L672-L674` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L500-L501) · [Before (L672-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L672-L674)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel .CodexProgress .CodexProgressMeter {
-   background: #50250e;
-   height: .3em
+ .StudioAiJourneyStep:has(>button.StudioAiJourneyStepOpen:hover) {
+   background-color: rgba(57, 73, 128, .6)
```

#### 100. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L677-L680` → after: `L504-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L504-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L504-L509) · [Before (L677-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L677-L680)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel .CodexProgress .CodexProgressMeter span {
-   background: #ffb914;
-   display: block;
-   height: 100%
+ .StudioAiJourneyStep:has(>button.StudioAiJourneyStepOpen:focus-visible) {
+   outline: 2px solid #85baff
+ }
+ 
+ .StudioAiJourneyStep-good {
+   border-left-color: #1dd06d
```

#### 101. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L683-L684` → after: `L512-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L512-L513) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L683-L684)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel .BoardBody {
-   grid-template-columns: 1fr 22em
+ .StudioAiJourneyStep-okay {
+   border-left-color: #85baff
```

#### 102. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L687-L689` → after: `L516-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L516-L517) · [Before (L687-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L687-L689)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel .BoardTiles {
-   gap: 1.4em .7em;
-   padding: 1.4em .7em .7em
+ .StudioAiJourneyStep-weak {
+   border-left-color: #fcd373
```

#### 103. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L692-L697` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L520) · [Before (L692-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L692-L697)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel .BoardTiles .BoardTile.CodexFolder {
-   --photo: 5.6em;
-   --photo-top: 1.35em;
-   --folder-front: #f7e3b3;
-   --folder-back: #dbc99f;
-   --folder-crease: #c4b48f;
+ .StudioAiJourneyStepOpen {
```

#### 104. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L700-L703` → after: `L523-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L523-L529) · [Before (L700-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L700-L703)

```diff
-   color: #14171f;
-   isolation: isolate;
-   overflow: visible;
-   padding-top: var(--photo-top)
+   color: inherit;
+   display: flex;
+   flex-direction: column;
+   font: inherit;
+   gap: .15rem;
+   padding: 0;
+   text-align: left
```

#### 105. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L706-L708` → after: `L532-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L532-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L532-L540) · [Before (L706-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L706-L708)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel .BoardTiles .BoardTile.CodexFolder:after,
- .ContainmentBoardPanel.ContainmentCodexPanel .BoardTiles .BoardTile.CodexFolder:before {
-   box-sizing: border-box;
+ button.StudioAiJourneyStepOpen {
+   cursor: pointer
+ }
+ 
+ button.StudioAiJourneyStepOpen:focus-visible {
+   outline: none
+ }
+ 
+ button.StudioAiJourneyStepOpen:after {
```

#### 106. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L710-L711` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L542-L543) · [Before (L710-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L710-L711)

```diff
-   position: absolute;
-   z-index: -1
+   inset: 0;
+   position: absolute
```

#### 107. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L714-L715` → after: `L546-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L546-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L546-L552) · [Before (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L714-L715)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel .BoardTiles .BoardTile.CodexFolder:before {
-   background: linear-gradient(var(--folder-crease), var(--folder-crease)) left 0 top 1.2em/calc(100% - .4em) 1px no-repeat, linear-gradient(var(--folder-crease), var(--folder-crease)) right .4em top 1.2em/1px 100% no-repeat, linear-gradient(var(--folder-front), var(--folder-front … [truncated]
+ .StudioAiJourneyStepTitle {
+   align-items: center;
+   display: flex;
+   font-size: 1.1rem;
+   font-weight: 700;
+   gap: .5rem;
+   justify-content: space-between
```

#### 108. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L718-L719` → after: `L555-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L555-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/css/92.css#L555-L557) · [Before (L718-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/css/92.css#L718-L719)

```diff
- .ContainmentBoardPanel.ContainmentCodexPanel .BoardTiles .BoardTile.CodexFolder:after {
-   background: #3f1f0e
+ .StudioAiJourneyStepReason {
+   font-size: 1rem;
+   line-height: 1.35
```
