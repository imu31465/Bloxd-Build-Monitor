# Changed — Bundle Modifications Report (Part 001 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `1 / 56` (**388** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [Part 002 →](part-002.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/css/102.css` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/css/102.css` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc)

#### 1. `bundles/bloxd.io/chunks/css/102.css` (Changed code · before: `L100-L106` → after: `L100-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fcR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc) · [After (L100-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/102.css#L100-L130) · [Before (L100-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/102.css#L100-L106)

```diff
- .StudioLayout {
-   align-items: stretch;
-   animation-duration: .3s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: fadeIn;
-   background: #22283b;
+ .SleepingOverlay {
+   align-items: center;
+   background-color: rgba(26, 31, 46, .85);
+   contain: layout style paint;
+   display: flex;
+   flex-direction: column;
+   height: 100%;
+   isolation: isolate;
+   justify-content: center;
+   left: 0;
+   pointer-events: auto;
+   position: fixed;
+   top: 0;
+   width: 100%;
+   z-index: 12
+ }
+ ... (15 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/102.css` (Changed code · before: `L124-L129` → after: `L133-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fcR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc) · [After (L133-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/102.css#L133-L147) · [Before (L124-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/102.css#L124-L129)

```diff
-   min-width: 0;
-   padding-left: var(--notchLeft)
- }
- 
- .StudioLayout .StudioLayoutRight .StudioTop {
-   box-sizing: border-box;
+   padding: 0 1rem
+ }
+ 
+ .SleepingOverlay .SleepingOverlayBody,
+ .SleepingOverlay .SleepingOverlayBody .SleepingOverlayPerkList {
+   align-items: center;
+   display: flex;
+   gap: 1.5rem;
+   justify-content: center;
+   min-width: auto;
+   width: 100%
+ }
+ 
+ .SleepingOverlay .SleepingOverlayBody .SleepingOverlayPerkList .ButtonBody {
+   align-items: center;
```

#### 3. `bundles/bloxd.io/chunks/css/102.css` (Changed code · before: `L132-L133` → after: `L150-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fcR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc) · [After (L150-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/102.css#L150-L182) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/102.css#L132-L133)

```diff
-   gap: 1rem;
-   padding: 1rem;
+   font-weight: 800;
+   gap: 0;
+   justify-content: center;
+   padding: .5rem 1rem
+ }
+ 
+ .SleepingOverlay .SleepingOverlayBody .SleepingOverlayPerkList .ButtonBody .SleepingOverlayPerkTitle {
+   align-items: center;
+   display: flex;
+   font-size: 2rem;
+   font-weight: 800;
+   justify-content: center;
+   min-width: auto
+ }
+ 
+ .SleepingOverlay .SleepingOverlayBody .SleepingOverlayPerkList .ButtonBody .SleepingOverlayPerkDescription {
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/css/102.css` (Changed code · before: `L137-L188` → after: `L186-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fcR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2530bb4f61e7c452d9fe4cda3030407368ece962838b362d863bc43fb42340fc) · [After (L186-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/102.css#L186-L218) · [Before (L137-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/102.css#L137-L188)

```diff
- .StudioLayout .StudioLayoutRight .StudioTop .StudioNav {
-   grid-gap: 2rem;
-   align-items: center;
-   display: grid;
-   font-size: 1.6rem;
-   gap: 2rem;
-   grid-template-columns: 1fr auto 1fr
- }
- 
- .StudioLayout .StudioLayoutRight .StudioTop .StudioNav .BackButton {
-   justify-self: start;
-   white-space: nowrap
- }
- 
- .StudioLayout .StudioLayoutRight .StudioTop .StudioNav .StudioNavTabs {
-   display: flex;
- ... (36 more removed lines; see GitHub link above)
+ .SleepingOverlay .SleepingOverlayBody .SleepingOverlayPerkBottom .SleepingOverlayPerkBottomSide {
+   display: flex;
+   flex: 12rem 1 1;
+   gap: .5rem;
+   justify-content: flex-end
+ }
+ 
+ .SleepingOverlay .SleepingOverlayBody .SleepingOverlayPerkBottom .SleepingOverlayPerkBottomSide .SleepingOverlayBedIcon {
+   border-radius: 0;
+   font-size: 2rem
+ }
+ 
+ .SleepingOverlay .SleepingOverlayBody .SleepingOverlayPerkBottom .SleepingOverlayPerkBottomSide .SleepingOverlayBedIcon.SleepingOverlayBedIconActive {
+   border: 2px solid #ffb914
+ }
+ 
+ ... (17 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/107.css` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/css/107.css` (281 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770)

#### 1. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1-L2` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L1) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1-L2)

```diff
- .SchematicPage {
-   box-sizing: border-box;
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionsSection {
```

#### 2. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4-L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L5)

```diff
-   position: relative;
+   gap: .5rem;
+   margin: 0 0 2rem;
```

#### 3. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L9-L10` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L9-L11) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L9-L10)

```diff
- .SchematicPage>* {
-   flex-shrink: 0
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionsSectionLabel {
+   font-size: 1.35rem;
+   text-align: center
```

#### 4. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L13-L16` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L14-L17) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L13-L16)

```diff
- .SchematicPage.SchematicPagePopupVariant {
-   height: 70rem;
-   overflow-x: hidden;
-   overflow-y: auto
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCards {
+   align-items: stretch;
+   display: flex;
+   gap: .5rem
```

#### 5. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L19-L21` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L20) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L19-L21)

```diff
- .SchematicPage .SchematicPageBody {
-   align-items: flex-start;
-   box-sizing: border-box;
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionColumn {
```

#### 6. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L24-L26` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L24-L25) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L24-L26)

```diff
-   gap: 1rem;
-   padding-bottom: 1rem;
-   width: 100%
+   gap: .4rem;
+   min-width: 0
```

#### 7. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L29-L30` → after: `L28-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L28-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L28-L38) · [Before (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L29-L30)

```diff
- .SchematicPage .SchematicPageBody>* {
-   flex-shrink: 0
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard {
+   align-items: center;
+   background-color: rgba(48, 58, 89, .5);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   cursor: pointer;
+   display: flex;
+   flex: 1 1 auto;
+   gap: .75rem;
+   padding: .6rem .75rem;
+   transition: scale .15s, background-color .15s, border-color .15s
```

#### 8. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L33-L34` → after: `L41-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L41-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L41-L44) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L33-L34)

```diff
- .SchematicPage .BackButton {
-   font-size: 1.5rem
+ @media(hover:hover) {
+   .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard:hover {
+     scale: 1.03
+   }
```

#### 9. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L37-L38` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L47-L48) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L37-L38)

```diff
- .SchematicPage .ButtonBody .fa-info-circle {
-   color: #cfcfcf
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.pad-focused {
+   scale: 1.03
```

#### 10. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L41-L44` → after: `L51-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L51-L54) · [Before (L41-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L41-L44)

```diff
- .SchematicPage .SchematicPageName {
-   font-size: 1.4rem;
-   font-weight: 700;
-   width: 22rem
+ @media(hover:none) {
+   .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard:active {
+     scale: 1.03
+   }
```

#### 11. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L47-L52` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L57-L59) · [Before (L47-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L47-L52)

```diff
- .SchematicPage .SchematicPageDescription,
- .SchematicPage .SchematicPageName {
-   box-shadow: none;
-   box-sizing: border-box;
-   padding: .25rem .75rem;
-   text-align: start
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.Selected {
+   background-color: rgba(255, 185, 20, .15);
+   border-color: #ffb914
```

#### 12. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L55-L64` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L62-L64) · [Before (L55-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L55-L64)

```diff
- .SchematicPage .SchematicPageDescription {
-   color: #cfcfcf;
-   font-size: 1.2rem;
-   font-weight: 600;
-   height: 4rem;
-   max-height: 4rem;
-   max-width: 100%;
-   min-height: 4rem;
-   min-width: 100%;
-   width: 100%
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.Disabled {
+   cursor: default;
+   filter: brightness(.6)
```

#### 13. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L67-L78` → after: `L67-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L67-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L67-L70) · [Before (L67-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L67-L78)

```diff
- .SchematicPage .SchematicPageFooter {
-   align-items: center;
-   background-color: #303a59;
-   bottom: 0;
-   box-sizing: border-box;
-   display: flex;
-   font-size: 1.2rem;
-   gap: .75rem;
-   justify-content: flex-end;
-   padding: 1rem;
-   position: sticky;
-   width: 100%
+ @media(hover:hover) {
+   .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.Disabled:hover {
+     scale: 1
+   }
```

#### 14. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L81-L87` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L73-L74) · [Before (L81-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L81-L87)

```diff
- .SchematicPage .SchematicPageFooterStatus {
-   align-items: center;
-   color: #ffb914;
-   display: flex;
-   font-weight: 700;
-   gap: .4rem;
-   margin-right: auto
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.Disabled.pad-focused {
+   scale: 1
```

#### 15. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L90-L94` → after: `L77-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L77-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L77-L80) · [Before (L90-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L90-L94)

```diff
- .SchematicPage .SchematicPageFooterStatusDot {
-   background-color: #ffb914;
-   flex-shrink: 0;
-   height: .45rem;
-   width: .45rem
+ @media(hover:none) {
+   .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCard.Disabled:active {
+     scale: 1
+   }
```

#### 16. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L97` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L83) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L97)

```diff
- .SchematicPage .GameCategoryPicker {
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCardBody {
```

#### 17. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L99-L100` → after: `L85-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L85-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L85-L89) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L99-L100)

```diff
-   flex-direction: row;
-   gap: 1rem
+   flex: 1 1 auto;
+   flex-direction: column;
+   gap: .15rem;
+   min-width: 0;
+   text-align: center
```

#### 18. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L103-L104` → after: `L92-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L92-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L92-L99) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L103-L104)

```diff
- .SchematicPage .GameCategoryPicker .GameCategoryGroup .Dropdown-placeholder {
-   width: 10rem
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCardLabel {
+   color: #f2f2f2;
+   font-size: 1.2rem;
+   font-weight: 700;
+   overflow-x: hidden;
+   text-align: center;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 19. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L107-L108` → after: `L102-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L102-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L102-L105) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L107-L108)

```diff
- .SchematicPage .SaveChangesButton {
-   display: inline-block
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionCardDescription {
+   color: #cfcfcf;
+   font-size: .75rem;
+   white-space: normal
```

#### 20. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L111-L112` → after: `L108-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L108-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L108-L117) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L111-L112)

```diff
- .SchematicPage .SaveChangesButton .SaveChangesButtonBodyHidden {
-   visibility: hidden
+ .ReplayVideoExportOptionsPopup .ReplayVideoExportOptionError {
+   background-color: #ffb914;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   color: #22283b;
+   font-size: .85rem;
+   line-height: 1.3;
+   padding: .4rem .55rem;
+   text-align: center;
+   white-space: normal
```

#### 21. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L115-L119` → after: `L120-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L120-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L120-L123) · [Before (L115-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L115-L119)

```diff
- .SchematicPage .SaveChangesButton .LogoLoader {
-   left: 50%;
-   position: absolute;
-   top: 50%;
-   transform: translate(-50%, -50%)
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox {
+   --tooltipBackground: #22283b;
+   padding: 0;
+   white-space: normal
```

#### 22. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L122-L126` → after: `L126-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L126-L128) · [Before (L122-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L122-L126)

```diff
- .BloxdForm .SectionTitle {
-   color: #cfcfcf;
-   font-size: 1rem;
-   padding-bottom: .5rem;
-   text-align: left
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox[data-popper-placement*=bottom] .tooltip-arrow:after,
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox[data-popper-placement*=bottom] .tooltip-arrow:before {
+   border-bottom-color: #ffb914
```

#### 23. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L129-L132` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L131-L132) · [Before (L129-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L129-L132)

```diff
- .BloxdForm .SectionBody {
-   align-items: center;
-   border: 2px solid #303a59;
-   border-radius: 0;
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltip {
+   border-top: .2em solid #ffb914;
```

#### 24. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L134-L137` → after: `L134-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L134-L139) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L134-L137)

```diff
-   flex-wrap: wrap;
-   gap: .5rem;
-   padding: .5rem;
-   position: relative
+   flex-direction: column;
+   font-size: max(1.1rem, 13px, min(.9166666667vw, 1.6296296296vh));
+   line-height: 1.4;
+   max-width: 19em;
+   min-width: 11em;
+   text-align: left
```

#### 25. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L140-L143` → after: `L142-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L142-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L142-L146) · [Before (L140-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L140-L143)

```diff
- .BloxdForm .SectionBody.SectionBodyHasWarning {
-   border-bottom-left-radius: 0;
-   border-bottom-right-radius: 0;
-   border-color: #ffb914
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeader {
+   align-items: center;
+   display: flex;
+   gap: .6em;
+   padding: .55em .75em
```

#### 26. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L146` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L149) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L146)

```diff
- .BloxdForm .SectionBody .SectionBodyOverlay {
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipIcon {
```

#### 27. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L148-L149` → after: `L151-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L151-L153) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L148-L149)

```diff
-   background-color: transparent;
-   bottom: 0;
+   background: #1a1f2e;
+   border: 1px solid #0f0f0f;
+   box-sizing: border-box;
```

#### 28. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L151-L152` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L155-L156) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L151-L152)

```diff
-   flex-direction: column;
-   gap: .5rem;
+   flex-shrink: 0;
+   height: 2.4em;
```

#### 29. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L154-L160` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L158-L159) · [Before (L154-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L154-L160)

```diff
-   left: 0;
-   pointer-events: none;
-   position: absolute;
-   right: 0;
-   top: 0;
-   transition: background-color .2s;
-   z-index: 2
+   padding: .25em;
+   width: 2.4em
```

#### 30. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L163-L166` → after: `L162-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L162-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L162-L165) · [Before (L163-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L163-L166)

```diff
- .BloxdForm .SectionBody .SectionBodyOverlay.SectionBodyOverlayLoading,
- .BloxdForm .SectionBody .SectionBodyOverlay.SectionBodyOverlaySuccess {
-   background-color: rgba(0, 0, 0, .75);
-   pointer-events: all
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipName {
+   font-size: 1.1em;
+   font-weight: 900;
+   line-height: 1.2
```

#### 31. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L169-L176` → after: `L168-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L168-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L168-L173) · [Before (L169-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L169-L176)

```diff
- .BloxdForm .SectionBody .SectionBodyOverlay.SectionBodyOverlaySuccess .svg-inline--fa {
-   color: #ffb914;
-   font-size: 3rem
- }
- 
- .BloxdForm .SectionBody .SectionBodyOverlay.SectionBodyOverlayError {
-   background-color: rgba(0, 0, 0, .75);
-   pointer-events: all
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipLabel {
+   color: #cfcfcf;
+   font-size: .75em;
+   font-weight: 900;
+   letter-spacing: .1em;
+   text-transform: uppercase
```

#### 32. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L179-L181` → after: `L176-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L176-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L176-L180) · [Before (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L179-L181)

```diff
- .BloxdForm .SectionBody .SectionBodyOverlay.SectionBodyOverlayError .svg-inline--fa {
-   color: #ff8a80;
-   font-size: 3rem
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipBody {
+   display: flex;
+   flex-direction: column;
+   gap: .45em;
+   padding: 0 .75em .6em
```

#### 33. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L184-L191` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L183-L184) · [Before (L184-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L184-L191)

```diff
- .BloxdForm .SectionBodyWarning {
-   background-color: #ffb914;
-   border-bottom-left-radius: 0;
-   border-bottom-right-radius: 0;
-   color: #000;
-   font-size: 1rem;
-   padding: .5rem 0 .5rem .5rem;
-   text-shadow: none
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipDescription {
+   color: #f2f2f2
```

#### 34. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L194-L195` → after: `L187-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L187-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L187-L189) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L194-L195)

```diff
- .LabeledInput {
-   align-items: stretch;
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipSource {
+   align-items: baseline;
+   column-gap: .45em;
```

#### 35. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L197-L203` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L191-L192) · [Before (L197-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L197-L203)

```diff
-   min-height: 3rem;
-   transition: filter .2s
- }
- 
- .LabeledInput.DisabledLabelInput {
-   filter: brightness(.6);
-   pointer-events: none
+   flex-wrap: wrap;
+   font-weight: 800
```

#### 36. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L206-L208` → after: `L195-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L195-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L195-L202) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L206-L208)

```diff
- .LabeledInput .LabeledInputTooltip {
-   font-size: 1.2rem;
-   max-width: 25rem
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld {
+   grid-gap: .35em 1.2em;
+   align-items: baseline;
+   border-top: 1px solid hsla(0, 0%, 95%, .1);
+   display: grid;
+   gap: .35em 1.2em;
+   grid-template-columns: 1fr auto;
+   padding: .5em .75em .65em
```

#### 37. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L211-L218` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L205) · [Before (L211-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L211-L218)

```diff
- .LabeledInput .Label {
-   align-items: center;
-   background-color: #303a59;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   border-bottom-right-radius: 0;
-   border-right: none;
-   border-top-right-radius: 0;
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld .BoardChipTooltipCount {
```

#### 38. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L220-L224` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L207) · [Before (L220-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L220-L224)

```diff
-   display: flex;
-   font-size: 1.2rem;
-   gap: .4rem;
-   justify-content: center;
-   padding: .2rem .5rem
+   font-weight: 900
```

#### 39. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L227-L229` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L210-L211) · [Before (L227-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L227-L229)

```diff
- .LabeledInput .Label.ClickableLabel {
-   cursor: pointer;
-   position: relative
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld .BoardChipTooltipHeldAmount {
+   color: #1dd06d
```

#### 40. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L232-L237` → after: `L214-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L214-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L214-L217) · [Before (L232-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L232-L237)

```diff
- @media(pointer:coarse) {
-   .LabeledInput .Label.ClickableLabel:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
-   }
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld .BoardChipTooltipMeter {
+   background: #1a1f2e;
+   grid-column: 1/-1;
+   height: .3em
```

#### 41. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L240-L248` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L220-L223) · [Before (L240-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L240-L248)

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
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld .BoardChipTooltipMeter span {
+   background: #1dd06d;
+   display: block;
+   height: 100%
```

#### 42. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L251-L252` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L226-L227) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L251-L252)

```diff
- .LabeledInput input[type=number] {
-   width: 7rem
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld.Short .BoardChipTooltipHeldAmount {
+   color: #ff8a80
```

#### 43. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L255-L265` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L230-L231) · [Before (L255-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L255-L265)

```diff
- .LabeledInput .BloxdDropdownControl {
-   align-items: center;
-   background-color: #303a59;
-   border-bottom-left-radius: 0;
-   border-top-left-radius: 0;
-   box-shadow: none;
-   display: flex;
-   font-size: 1.2rem;
-   height: 100%;
-   padding: 0 2rem 0 .5rem;
-   text-align: left
+ .WholeAppWrapper .WholeAppWrapperInner .tooltip-container.BoardChipTooltipBox .BoardChipTooltipHeld.Short .BoardChipTooltipMeter span {
+   background: #e34f4f
```

#### 44. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L268-L270` → after: `L234-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L234-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L234-L237) · [Before (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L268-L270)

```diff
- .LabeledInput .Dropdown-option {
-   font-size: 1.2rem;
-   text-align: left
+ .GameBackgroundScreen.ContainmentBoardOverlay {
+   background: #303a59;
+   pointer-events: auto;
+   z-index: 9
```

#### 45. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L273-L280` → after: `L240-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L240-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L240-L246) · [Before (L273-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L273-L280)

```diff
- .LabeledInput .OtherInput {
-   align-items: center;
-   background-color: #303a59;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   border-bottom-left-radius: 0;
-   border-top-left-radius: 0;
-   cursor: pointer;
+ .ContainmentBoardPanel {
+   --tile-min-width: 9em;
+   --tile-icon: 3.4em;
+   --detail-icon: 4em;
+   background: #303a59;
+   box-sizing: border-box;
+   color: #fff;
```

#### 46. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L282-L283` → after: `L248-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L248-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L248-L255) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L282-L283)

```diff
-   justify-content: center;
-   padding: 0 1rem
+   flex-direction: column;
+   font-size: max(1.35rem, 14px, min(1.125vw, 2vh));
+   height: 100%;
+   padding: var(--notchTop) var(--notchRight) var(--notchBottom) var(--notchLeft);
+   position: relative;
+   text-align: left;
+   white-space: normal;
+   width: 100%
```

#### 47. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L286-L289` → after: `L258-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L258-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L258-L261) · [Before (L286-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L286-L289)

```diff
- .SwitchContainer {
-   align-items: center;
-   cursor: pointer;
-   display: inline-flex
+ .ContainmentBoardPanel h2,
+ .ContainmentBoardPanel h3,
+ .ContainmentBoardPanel p {
+   margin: 0
```

#### 48. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L292-L295` → after: `L264-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L264-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L264-L269) · [Before (L292-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L292-L295)

```diff
- .SwitchContainer.SwitchContainerDisabled {
-   cursor: default;
-   filter: brightness(.6);
-   pointer-events: none
+ .ContainmentBoardPanel .BoardDecor {
+   inset: 0;
+   overflow: hidden;
+   pointer-events: none;
+   position: absolute;
+   z-index: 2
```

#### 49. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L298-L300` → after: `L272-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L272-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L272-L282) · [Before (L298-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L298-L300)

```diff
- .SwitchContainer .SwitchCheckbox.rc-checkbox {
-   height: 1.5rem;
-   width: 2.625rem
+ .ContainmentBoardPanel .BoardHeader {
+   align-items: center;
+   background: #394980;
+   border-bottom: 1px solid #0f0f0f;
+   box-sizing: border-box;
+   display: flex;
+   gap: .8em;
+   justify-content: flex-end;
+   min-height: calc(var(--InGameHeaderRowsHeight, 2.5rem) + .25rem);
+   padding: .5em .6em .5em 1em;
+   position: relative
```

#### 50. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L303-L308` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L285-L286) · [Before (L303-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L303-L308)

```diff
- .SwitchContainer .SwitchCheckbox .rc-checkbox-inner {
-   background-color: #303a59;
-   border: 1px solid #3c4b68;
-   height: 100%;
-   transition: background-color .15s, border-color .15s;
-   width: 100%
+ .ContainmentBoardPanel .BoardHeader .ExitButton {
+   font-size: 1.4em
```

#### 51. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L311-L312` → after: `L289-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L289-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L289-L293) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L311-L312)

```diff
- .SwitchContainer .SwitchCheckbox .rc-checkbox-inner:after {
-   content: none
+ .ContainmentBoardPanel .BoardWallet {
+   display: flex;
+   flex-wrap: wrap;
+   gap: .4em;
+   justify-content: flex-end
```

#### 52. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L315-L323` → after: `L296-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L296-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L296-L304) · [Before (L315-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L315-L323)

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
+ .ContainmentBoardPanel .BoardChip {
+   align-items: center;
+   background: #1a1f2e;
+   border: 1px solid #0f0f0f;
+   cursor: help;
+   display: inline-flex;
+   font-weight: 700;
+   gap: .3em;
+   padding: .15em .5em .15em .2em
```

#### 53. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L326-L328` → after: `L307-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L307-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L307-L313) · [Before (L326-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L326-L328)

```diff
- .SwitchContainer .SwitchCheckbox .rc-checkbox-input:focus+.rc-checkbox-inner,
- .SwitchContainer .SwitchCheckbox.rc-checkbox:hover .rc-checkbox-inner {
-   border-color: #ffb914
+ .ContainmentBoardPanel .BoardChip .BoardChipIcon {
+   align-items: center;
+   display: flex;
+   flex-shrink: 0;
+   height: 1.4em;
+   justify-content: center;
+   width: 1.4em
```

#### 54. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L331-L333` → after: `L316-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L316-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L316-L318) · [Before (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L331-L333)

```diff
- .SwitchContainer .SwitchCheckbox.rc-checkbox-checked .rc-checkbox-inner {
-   background-color: #ffb914;
-   border-color: #ffb914
+ .ContainmentBoardPanel .BoardChip.Short {
+   border-color: #fc6464;
+   color: #ff8a80
```

#### 55. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L336-L338` → after: `L321-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L321-L325) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L336-L338)

```diff
- .SwitchContainer .SwitchCheckbox.rc-checkbox-checked .rc-checkbox-inner:before {
-   background-color: #22283b;
-   transform: translateX(1.125rem)
+ .ContainmentBoardPanel .BoardBody {
+   display: grid;
+   flex: 1 1;
+   grid-template-columns: 1fr 21em;
+   min-height: 0
```

#### 56. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L341-L343` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L328-L329) · [Before (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L341-L343)

```diff
- .PluginsGrid {
-   grid-gap: .5rem;
-   align-items: stretch;
+ .ContainmentBoardPanel .BoardTiles {
+   grid-gap: .5em;
```

#### 57. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L345-L346` → after: `L331-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L331-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L331-L335) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L345-L346)

```diff
-   gap: .5rem;
-   grid-template-columns: repeat(2, 1fr)
+   gap: .5em;
+   grid-auto-rows: min-content;
+   grid-template-columns: repeat(auto-fill, minmax(var(--tile-min-width), 1fr));
+   overflow-y: auto;
+   padding: .5em
```

#### 58. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L349` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L338) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L349)

```diff
- .PluginCard {
+ .ContainmentBoardPanel .BoardTiles .BoardTile {
```

#### 59. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L351` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L340) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L351)

```diff
-   background-color: rgba(48, 58, 89, .5);
+   background: #3c4b68;
```

#### 60. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L353` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L342-L343) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L353)

```diff
-   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   color: inherit;
```

#### 61. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L356-L359` → after: `L346-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L346-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L346-L350) · [Before (L356-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L356-L359)

```diff
-   gap: .75rem;
-   min-width: 0;
-   padding: .6rem .75rem;
-   transition: scale .15s, background-color .15s, border-color .15s
+   flex-direction: column;
+   font: inherit;
+   gap: .4em;
+   padding: 1.35em .5em .8em;
+   position: relative
```

#### 62. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L363-L364` → after: `L354-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L354-L355) · [Before (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L363-L364)

```diff
-   .PluginCard:hover {
-     scale: 1.03
+   .ContainmentBoardPanel .BoardTiles .BoardTile:hover {
+     background: #394980
```

#### 63. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L368-L369` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L359-L360) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L368-L369)

```diff
- .PluginCard.pad-focused {
-   scale: 1.03
+ .ContainmentBoardPanel .BoardTiles .BoardTile.pad-focused {
+   background: #394980
```

#### 64. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L373-L374` → after: `L364-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L364-L365) · [Before (L373-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L373-L374)

```diff
-   .PluginCard:active {
-     scale: 1.03
+   .ContainmentBoardPanel .BoardTiles .BoardTile:active {
+     background: #394980
```

#### 65. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L378-L380` → after: `L369-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L369-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L369-L386) · [Before (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L378-L380)

```diff
- .PluginCard.PluginCardDisabledForm {
-   filter: brightness(.6);
-   pointer-events: none
+ .ContainmentBoardPanel .BoardTiles .BoardTile.Selected {
+   outline: 3px solid #ffb914;
+   outline-offset: -1px
+ }
+ 
+ .ContainmentBoardPanel .BoardTiles .BoardTile.Locked .BoardTileIcon {
+   filter: grayscale(1) brightness(.35)
+ }
+ 
+ .ContainmentBoardPanel .BoardTiles .BoardTile.Locked .BoardTileName {
+   color: #f2f2f2
+ }
+ 
+ .ContainmentBoardPanel .BoardTiles .BoardTile .BoardBadge {
+   left: -1px;
+   position: absolute;
+ ... (2 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L383` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L389) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L383)

```diff
- .PluginCard .PluginCardIcon {
+ .ContainmentBoardPanel .BoardTiles .BoardTileIcon {
```

#### 67. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L387` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L393) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L387)

```diff
-   height: 4rem;
+   height: var(--tile-icon);
```

#### 68. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L389` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L395) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L389)

```diff
-   width: 4rem
+   width: var(--tile-icon)
```

#### 69. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L392-L393` → after: `L398-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L398-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L398-L410) · [Before (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L392-L393)

```diff
- .PluginCard .PluginCardIcon img {
-   -ms-interpolation-mode: nearest-neighbor;
+ .ContainmentBoardPanel .BoardTiles .BoardTileName {
+   font-size: .9em;
+   font-weight: 900;
+   line-height: 1.15;
+   overflow-wrap: anywhere;
+   text-align: center
+ }
+ 
+ .ContainmentBoardPanel .BoardMugshot {
+   background: #f2f2f2;
+   border: 1px solid #0f0f0f;
+   box-sizing: border-box;
+   display: block;
```

#### 70. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L395-L399` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L412) · [Before (L395-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L395-L399)

```diff
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast;
-   object-fit: contain;
+   padding: .12em;
```

#### 71. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L403-L409` → after: `L416-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L416-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L416-L419) · [Before (L403-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L403-L409)

```diff
- .PluginCard .PluginCardBody {
-   display: flex;
-   flex: 1 1 auto;
-   flex-direction: column;
-   gap: .15rem;
-   min-width: 0;
-   text-align: left
+ .ContainmentBoardPanel .BoardMugshot img {
+   display: block;
+   height: 100%;
+   width: 100%
```

#### 72. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L412-L414` → after: `L422-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L422-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L422-L441) · [Before (L412-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L412-L414)

```diff
- .PluginCard .PluginCardTitle {
-   color: #f2f2f2;
-   font-size: 1.2rem;
+ .ContainmentBoardPanel .BoardMugshot.Uncaught img {
+   animation: BoardMugshotGlitch 3.7s steps(1) infinite
+ }
+ 
+ @media(prefers-reduced-motion:reduce) {
+   .ContainmentBoardPanel .BoardMugshot.Uncaught img {
+     animation: none
+   }
+ }
+ 
+ .ContainmentBoardPanel .BoardMugshot[data-off-screen] img,
+ html[data-app-covered] .WholeAppWrapper .ContainmentBoardPanel .BoardMugshot img {
+   animation-play-state: paused
+ }
+ 
+ .ContainmentBoardPanel .BoardBadge {
+ ... (4 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L416-L418` → after: `L443-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L443-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L443-L490) · [Before (L416-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L416-L418)

```diff
-   overflow-x: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+   letter-spacing: .06em;
+   padding: 0 .35em;
+   text-transform: uppercase
+ }
+ 
+ .ContainmentBoardPanel .BoardBadge.Muted {
+   background: #1a1f2e;
+   color: #cfcfcf
+ }
+ 
+ .ContainmentBoardPanel .BoardDetail {
+   background: #2b3249;
+   border-left: 1px solid #0f0f0f;
+   display: flex;
+   flex-direction: column;
+   gap: .7em;
+ ... (32 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L421-L423` → after: `L493-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L493-L494) · [Before (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L421-L423)

```diff
- .PluginCard .PluginCardDescription {
-   -webkit-line-clamp: 2;
-   -webkit-box-orient: vertical;
+ .ContainmentBoardPanel .BoardDetailStatus {
+   align-items: center;
```

#### 75. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L425-L431` → after: `L496-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L496-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L496-L521) · [Before (L425-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L425-L431)

```diff
-   display: -webkit-box;
-   font-size: .75rem;
-   overflow-x: hidden;
-   overflow-y: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap;
-   white-space: normal
+   display: flex;
+   gap: .4em
+ }
+ 
+ .ContainmentBoardPanel .BoardDescription {
+   color: #f2f2f2;
+   font-size: .9em;
+   line-height: 1.35
+ }
+ 
+ .ContainmentBoardPanel .BoardActions {
+   background: inherit;
+   bottom: -.8em;
+   display: flex;
+   flex-direction: column;
+   gap: .5em;
+ ... (10 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L434` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L524) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L434)

```diff
- .PluginCard .PluginCardToggleLabel {
+ .ContainmentBoardPanel .BoardHint {
```

#### 77. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L437-L438` → after: `L833-L4154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L833-L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L833-L4154) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L437-L438)

```diff
-   font-size: 1rem;
-   font-weight: 700
+   height: var(--photo);
+   justify-content: center;
+   width: var(--photo)
+ }
+ 
+ .ContainmentBoardPanel.ContainmentCodexPanel .BoardTiles .BoardTile.CodexFolder:not(.Unknown) {
+   align-items: flex-start
+ }
+ 
+ .ContainmentBoardPanel.ContainmentCodexPanel .BoardTiles .BoardTile.CodexFolder:not(.Unknown) .BoardTileIcon {
+   height: calc(var(--photo) + .55em);
+   margin-left: .2em
+ }
+ 
+ .ContainmentBoardPanel.ContainmentCodexPanel .BoardTiles .BoardTile.CodexFolder:not(.Unknown) .BoardTileName {
+   text-align: left
+ ... (3306 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L441-L443` → after: `L4157-L4160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4157-L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4157-L4160) · [Before (L441-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L441-L443)

```diff
- .PluginCard.PluginCardEnabled {
-   background-color: rgba(255, 185, 20, .2);
-   border-color: #ffb914
+ .PlotsJournal.Spread .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide.Recto:after,
+ .PlotsJournal.Spread .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide.Right:after {
+   background: linear-gradient(90deg, rgba(62, 46, 36, .18), transparent);
+   left: 0
```

#### 79. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L446-L447` → after: `L4163-L4169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4163-L4169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4163-L4169) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L446-L447)

```diff
- .PluginCard.PluginCardEnabled .PluginCardToggleLabel {
-   color: #ffb914
+ .PlotsJournal .PlotsJournalGuideSkip {
+   align-self: start;
+   color: #85634d;
+   grid-area: pages;
+   justify-self: end;
+   margin: .9rem 1.1rem 0 0;
+   z-index: 2
```

#### 80. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L450-L459` → after: `L4172-L4175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4172-L4175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4172-L4175) · [Before (L450-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L450-L459)

```diff
- .SchematicPage .ManageWarningBanner {
-   background-color: rgba(255, 185, 20, .15);
-   border: 1px solid #ffb914;
-   border-radius: 0;
-   box-sizing: border-box;
-   color: #fcd373;
-   font-size: .95rem;
-   font-weight: 600;
-   padding: .6rem .9rem;
-   width: 100%
+ @media(hover:hover) {
+   .PlotsJournal .PlotsJournalGuideSkip:hover {
+     color: #3e2e24
+   }
```

#### 81. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L462-L469` → after: `L4178-L4179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4178-L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4178-L4179) · [Before (L462-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L462-L469)

```diff
- .SchematicPage .ManageSettingsGrid {
-   grid-gap: 1rem;
-   align-items: start;
-   box-sizing: border-box;
-   display: grid;
-   gap: 1rem;
-   grid-template-columns: repeat(2, 1fr);
-   width: 100%
+ .PlotsJournal .PlotsJournalGuideSkip.pad-focused {
+   color: #3e2e24
```

#### 82. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L472-L474` → after: `L4182-L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4182-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4182-L4184) · [Before (L472-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L472-L474)

```diff
- @media(max-width:60rem) {
-   .SchematicPage .ManageSettingsGrid {
-     grid-template-columns: 1fr
+ @media(hover:none) {
+   .PlotsJournal .PlotsJournalGuideSkip:active {
+     color: #3e2e24
```

#### 83. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L478-L479` → after: `L4188-L4200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4188-L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4188-L4200) · [Before (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L478-L479)

```diff
- .SchematicPage .ManageCard {
-   background-color: #3c4b68;
+ .PlotsJournal .ExitButton.PlotsJournalClose {
+   font-size: max(2rem, 20px);
+   grid-area: close;
+   justify-self: end
+ }
+ 
+ .PlotsJournal .ExitButton.PlotsJournalClose .NewButton {
+   min-height: 44px;
+   min-width: 44px
+ }
+ 
+ .PlotsJournal .PlotsJournalBookPages {
+   background: #6b4a2e;
```

#### 84. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L484-L485` → after: `L4204-L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4204-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4204-L4207) · [Before (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L484-L485)

```diff
-   overflow: hidden;
-   width: 100%
+   grid-area: pages;
+   min-height: 0;
+   padding: .6rem;
+   touch-action: none
```

#### 85. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L488-L489` → after: `L4210-L4213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4210-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4210-L4213) · [Before (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L488-L489)

```diff
- .SchematicPage .ManageCard:has(.GameCategoryPicker) {
-   overflow: visible
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet {
+   height: 100%;
+   perspective: 2400px;
+   position: relative
```

#### 86. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L492-L493` → after: `L4216-L4224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4216-L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4216-L4224) · [Before (L492-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L492-L493)

```diff
- .SchematicPage .ManageCard.ManageCardDisabled .ManageCardBody {
-   filter: brightness(.6)
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalLeaf {
+   bottom: 0;
+   left: 0;
+   position: absolute;
+   right: 0;
+   top: 0;
+   transform-origin: left center;
+   transform-style: preserve-3d;
+   will-change: transform
```

#### 87. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L496-L498` → after: `L4227-L4248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4227-L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4227-L4248) · [Before (L496-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L496-L498)

```diff
- .SchematicPage .ManageCardHead {
-   align-items: center;
-   border-bottom: 1px solid #22283b;
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalLeaf.Back {
+   transform: rotateY(-90deg)
+ }
+ 
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalLeaf.Turning {
+   z-index: 1
+ }
+ 
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalLeaf>.PlotsJournalSide {
+   backface-visibility: hidden
+ }
+ 
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalLeaf>.PlotsJournalSide.Recto {
+   transform: translateZ(1px)
+ }
+ 
+ ... (6 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L500-L501` → after: `L4250-L4254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4250-L4254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4250-L4254) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L500-L501)

```diff
-   gap: .65rem;
-   padding: .85rem 1rem .7rem
+   isolation: isolate;
+   left: 0;
+   position: absolute;
+   right: 0;
+   top: 0
```

#### 89. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L504` → after: `L4257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4257) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L504)

```diff
- .SchematicPage .ManageCardIcon {
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage {
```

#### 90. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L506-L508` → after: `L4259-L4261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4259-L4261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4259-L4261) · [Before (L506-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L506-L508)

```diff
-   background-color: #3c4b68;
-   border-radius: 0;
-   color: #ffb914;
+   background: #f2e7d0;
+   box-sizing: border-box;
+   color: #3e2e24;
```

#### 91. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L510-L512` → after: `L4263-L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4263-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4263-L4269) · [Before (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L510-L512)

```diff
-   flex-shrink: 0;
-   font-size: 1.6rem;
-   justify-content: center
+   flex: 1 1;
+   flex-direction: column;
+   gap: .3rem;
+   min-width: 0;
+   padding: 1rem 1.2rem;
+   position: relative;
+   text-align: center
```

#### 92. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L515-L518` → after: `L4272-L4274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4272-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4272-L4274) · [Before (L515-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L515-L518)

```diff
- .SchematicPage .ManageCardTitle {
-   color: #f2f2f2;
-   font-size: 1.1rem;
-   font-weight: 800;
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage .PlotsJournalPageName {
+   font-size: max(2.2rem, 16px);
+   font-weight: 900;
```

#### 93. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L522-L523` → after: `L4278-L4289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4278-L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4278-L4289) · [Before (L522-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L522-L523)

```diff
- .SchematicPage .ManageCardBody {
-   background-color: #3c4b68;
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage .PlotsJournalPageMeta {
+   color: #85634d;
+   font-size: max(1.2rem, 11px);
+   font-weight: 700
+ }
+ 
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage>* {
+   flex-shrink: 0
+ }
+ 
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage .PlotsJournalSketch {
+   align-items: center;
```

#### 94. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L525-L528` → after: `L4291-L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4291-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4291-L4295) · [Before (L525-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L525-L528)

```diff
-   flex-direction: column;
-   gap: 1rem;
-   padding: 1rem;
-   position: relative
+   flex: 1 1;
+   justify-content: center;
+   min-height: 0;
+   position: relative;
+   width: 100%
```

#### 95. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L531-L533` → after: `L4298-L4327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4298-L4327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4298-L4327) · [Before (L531-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L531-L533)

```diff
- .SchematicPage .ManageCardDisabledOverlay {
-   cursor: not-allowed;
-   inset: 0;
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage .PlotsJournalSketch img {
+   height: 100%;
+   object-fit: contain;
+   position: absolute;
+   -webkit-user-select: none;
+   user-select: none;
+   visibility: hidden;
+   width: 100%
+ }
+ 
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage .PlotsJournalSketch img.Shown {
+   visibility: visible
+ }
+ 
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage .PlotsJournalSketch .PlotsJournalStamp {
+   border: .3rem solid #cc1414;
+ ... (14 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L537-L538` → after: `L4331-L4332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4331-L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4331-L4332) · [Before (L537-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L537-L538)

```diff
- .SchematicPage .ManageStackedField+.ManageStackedField {
-   padding-top: 0
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage.Locked .PlotsJournalSketch img {
+   opacity: .35
```

#### 97. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L541-L545` → after: `L4335-L4341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4335-L4341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4335-L4341) · [Before (L541-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L541-L545)

```diff
- .SchematicPage .ManageStackedFieldCaption {
-   color: #a4a4a4;
-   font-size: .78rem;
-   line-height: 1.3;
-   margin-top: .35rem
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage .PlotsJournalNote {
+   color: #6d2e91;
+   font-size: max(1.2rem, 11px);
+   font-style: italic;
+   font-weight: 700;
+   margin: 0;
+   transform: rotate(-1.5deg)
```

#### 98. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L548-L549` → after: `L4344-L4350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4344-L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4344-L4350) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L548-L549)

```diff
- .SchematicPage .ManageStackedFieldLabel {
-   margin-bottom: .35rem
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage .PlotsJournalPageAction {
+   align-items: center;
+   display: flex;
+   flex-wrap: wrap;
+   gap: .3rem .8rem;
+   justify-content: center;
+   min-height: 44px
```

#### 99. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L552-L558` → after: `L4353-L4356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4353-L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4353-L4356) · [Before (L552-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L552-L558)

```diff
- .SchematicPage .ManageCard .BloxdForm .SectionTitle,
- .SchematicPage .ManageStackedFieldLabel {
-   color: #a4a4a4;
-   font-size: .78rem;
-   font-weight: 800;
-   letter-spacing: .03em;
-   text-transform: uppercase
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage .PlotsJournalPageAction>.NewButton {
+   color: #fff;
+   font-size: max(1.4rem, 13px);
+   min-width: 8em
```

#### 100. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L561-L562` → after: `L4359-L4362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4359-L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4359-L4362) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L561-L562)

```diff
- .SchematicPage .ManageCard .BloxdForm .SectionTitle {
-   padding-bottom: .4rem
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage .PlotsJournalPageAction .PlotsJournalHint {
+   font-size: max(1.3rem, 12px);
+   font-weight: 700;
+   margin: 0
```

#### 101. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L565-L569` → after: `L4365-L4366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4365-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4365-L4366) · [Before (L565-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L565-L569)

```diff
- .SchematicPage .ManageCard .BloxdForm .SectionBody {
-   background: none;
-   border: none;
-   box-shadow: none;
-   padding: 0
+ .PlotsJournal .PlotsJournalBookPages .PlotsJournalSheet .PlotsJournalSide .PlotsJournalPage .PlotsJournalPageAction .PlotsJournalHint.Building {
+   color: #07940e
```

#### 102. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L572-L579` → after: `L4369-L4370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4369-L4370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4369-L4370) · [Before (L572-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L572-L579)

```diff
- .SchematicPage .ManageField {
-   grid-gap: .4rem 1rem;
-   align-items: center;
-   border-bottom: 1px solid rgba(57, 73, 128, .4);
-   display: grid;
-   gap: .4rem 1rem;
-   grid-template-columns: 1fr auto;
-   transition: filter .15s
+ .PlotsJournal .PlotsJournalArrow {
+   font-size: max(3rem, 24px)
```

#### 103. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L582-L583` → after: `L4373-L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4373-L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4373-L4375) · [Before (L582-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L582-L583)

```diff
- .SchematicPage .ManageField:last-child {
-   border-bottom: none
+ .PlotsJournal .PlotsJournalArrow .NewButton {
+   min-height: 44px;
+   min-width: 70.4px
```

#### 104. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L586-L588` → after: `L4378-L4379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4378-L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4378-L4379) · [Before (L586-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L586-L588)

```diff
- .SchematicPage .ManageField.ManageFieldDisabled {
-   filter: brightness(.6);
-   pointer-events: none
+ .PlotsJournal .PlotsJournalArrow.Back {
+   grid-area: back
```

#### 105. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L591-L592` → after: `L4382-L4383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4382-L4383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4382-L4383) · [Before (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L591-L592)

```diff
- .SchematicPage .ManageFieldText {
-   min-width: 0
+ .PlotsJournal .PlotsJournalArrow.Back svg {
+   transform: rotate(-90deg)
```

#### 106. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L595-L598` → after: `L4386-L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4386-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4386-L4387) · [Before (L595-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L595-L598)

```diff
- .SchematicPage .ManageFieldLabel {
-   color: #f2f2f2;
-   font-size: .95rem;
-   font-weight: 600
+ .PlotsJournal .PlotsJournalArrow.Forward {
+   grid-area: forward
```

#### 107. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L601-L605` → after: `L4390-L4391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4390-L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4390-L4391) · [Before (L601-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L601-L605)

```diff
- .SchematicPage .ManageFieldCaption {
-   color: #a4a4a4;
-   font-size: .78rem;
-   line-height: 1.3;
-   margin-top: .15rem
+ .PlotsJournal .PlotsJournalArrow.Forward svg {
+   transform: rotate(90deg)
```

#### 108. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L608-L609` → after: `L4394-L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4394-L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4394-L4400) · [Before (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L608-L609)

```diff
- .SchematicPage .ManageFieldControl {
-   align-items: center;
+ .PlotsPlacementCard {
+   background: rgba(38, 52, 93, .85);
+   border: 1px solid #0f0f0f;
+   border-left: .35rem solid #ffb914;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   box-sizing: border-box;
+   color: #fff;
```

#### 109. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L611-L612` → after: `L4402-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4402-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4402-L4407) · [Before (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L611-L612)

```diff
-   flex-shrink: 0;
-   justify-self: end
+   flex-direction: column;
+   gap: .5rem;
+   padding: .7rem 1rem;
+   pointer-events: auto;
+   text-align: left;
+   width: min(36rem, 70vw)
```

#### 110. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L615-L616` → after: `L4410-L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4410-L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4410-L4412) · [Before (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L615-L616)

```diff
- .SchematicPage .ManageDropdown.Dropdown-root {
-   min-width: 11rem
+ .PlotsPlacementCard .PlotsPlacementCardTitle {
+   color: #fcd373;
+   font-size: 1.4rem
```

#### 111. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L619-L620` → after: `L4415-L4423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4415-L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4415-L4423) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L619-L620)

```diff
- .SchematicPage .ManageNumberField {
-   align-items: center;
+ .PlotsPlacementCard .PlotsPlacementCardHint {
+   font-size: 1.15rem
+ }
+ 
+ .PlotsPlacementCard .PlotsPlacementCardHint.Nudge {
+   animation: PlotsPlacementCardNudge .4s ease-out
+ }
+ 
+ .PlotsPlacementCard .PlotsPlacementCardButtons {
```

#### 112. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L622` → after: `L4425-L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4425-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4425-L4426) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L622)

```diff
-   gap: .4rem
+   flex-wrap: wrap;
+   gap: .5rem
```

#### 113. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L625-L636` → after: `L4429-L4431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4429-L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4429-L4431) · [Before (L625-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L625-L636)

```diff
- .SchematicPage .ManageNumberField input[type=number] {
-   font-feature-settings: "tnum";
-   background-color: #303a59;
-   border: 1px solid #3c4b68;
-   border-radius: 0;
-   box-sizing: border-box;
-   color: #f2f2f2;
-   font-size: 1rem;
-   font-variant-numeric: tabular-nums;
-   padding: .4rem .5rem;
-   text-align: right;
-   width: 6rem
+ .PlotsPlacementCard .PlotsPlacementCardButtons>* {
+   flex: 1 0 auto;
+   font-size: 1.2rem
```

#### 114. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L639-L641` → after: `L4434-L4437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4434-L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4434-L4437) · [Before (L639-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L639-L641)

```diff
- .SchematicPage .ManageNumberField input[type=number]:focus {
-   border-color: #ffb914;
-   outline: none
+ .PlotsPlacementCard .PlotsPlacementCardButtons .PlotsPlacementKey {
+   display: inline-flex;
+   font-size: .8em;
+   margin: 0 .4em 0 0
```

#### 115. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L644-L647` → after: `L4440-L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4440-L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4440-L4441) · [Before (L644-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L644-L647)

```diff
- .SchematicPage .ManageFieldUnit {
-   color: #a4a4a4;
-   font-size: .78rem;
-   white-space: nowrap
+ .PlotsPlacementCard .PlotsPlacementCardButtons .PlotsPlacementBuild {
+   display: flex
```

#### 116. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L650-L657` → after: `L4444-L4445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4444-L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4444-L4445) · [Before (L650-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L650-L657)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup {
-   display: flex;
-   gap: .5rem;
-   max-height: 75vh;
-   max-width: 55rem;
-   min-width: 40rem;
-   overflow-y: scroll;
-   text-align: left
+ .PlotsPlacementCard .PlotsPlacementCardButtons .PlotsPlacementBuild>.NewButton {
+   flex: 1 0 auto
```

#### 117. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L660-L663` → after: `L4448-L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4448-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4448-L4449) · [Before (L660-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L660-L663)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupTitle {
-   font-size: 2.5rem;
-   font-weight: 700;
-   margin: 0
+ .PlotsPlacementCard .PlotsPlacementCardButtons .PlotsPlacementBuild.Pulse {
+   animation: PlotsPlacementBuildPulse 1s ease-in-out infinite alternate
```

#### 118. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L666-L670` → after: `L4452-L4455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4452-L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4452-L4455) · [Before (L666-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L666-L670)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupSubtitle {
-   color: #cfcfcf;
-   font-size: 1rem;
-   font-weight: 700;
-   margin: 1rem 0 0
+ @keyframes PlotsPlacementBuildPulse {
+   to {
+     transform: scale(1.08)
+   }
```

#### 119. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L673-L674` → after: `L4458-L4461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4458-L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4458-L4461) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L673-L674)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupSubtitle.Hidden {
-   display: none
+ @media(prefers-reduced-motion:reduce) {
+   .PlotsPlacementCard .PlotsPlacementCardButtons .PlotsPlacementBuild.Pulse {
+     animation: none
+   }
```

#### 120. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L677-L679` → after: `L4464-L4524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4464-L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4464-L4524) · [Before (L677-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L677-L679)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicPopup .SchematicPopupSchematicListContainer {
-   border: 2px solid #303a59;
-   border-radius: 0;
+ @keyframes PlotsPlacementCardNudge {
+ 
+   20%,
+   60% {
+     transform: translateX(-.4rem)
+   }
+ 
+   40%,
+   80% {
+     transform: translateX(.4rem)
+   }
+ }
+ 
+ @media(max-height:420px), (max-width:650px) {
+   .PlotsPlacementCard {
+     gap: 4px;
+ ... (45 more added lines; see GitHub link above)
```

#### 121. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L681-L683` → after: `L4526-L4530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4526-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4526-L4530) · [Before (L681-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L681-L683)

```diff
-   overflow-y: auto;
-   padding: .5rem;
-   width: 100%
+   color: #fff;
+   display: flex;
+   gap: 1rem;
+   max-width: min(40rem, 46vw);
+   padding: .4rem 1.6rem .4rem .4rem
```

#### 122. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L686` → after: `L4533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4533) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L686)

```diff
- .SchematicImageContainer {
+ .PlotsPlotBannerContainer .PlotsPlotBanner .PlotsPlotBannerSeal {
```

#### 123. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L689-L690` → after: `L4541-L4543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4541-L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4541-L4543) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L689-L690)

```diff
-   font-size: 2rem;
-   height: 100%;
+   flex-shrink: 0;
+   font-size: 1.3rem;
+   height: var(--plots-plot-seal-size);
```

#### 124. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L692-L695` → after: `L4545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4545) · [Before (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L692-L695)

```diff
-   left: 0;
-   top: 0;
-   width: 100%;
-   z-index: 1
+   width: var(--plots-plot-seal-size)
```

#### 125. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L698-L699` → after: `L4548-L4549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4548-L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4548-L4549) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L698-L699)

```diff
- .SchematicImageContainer .LogoLoaderOuter {
-   border-color: #a4a4a4 #f2f2f2 #f2f2f2
+ .PlotsPlotBannerContainer .PlotsPlotBanner .PlotsPlotBannerSeal.Face {
+   overflow: hidden
```

#### 126. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L702-L710` → after: `L4552-L4554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4552-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4552-L4554) · [Before (L702-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L702-L710)

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
+ .PlotsPlotBannerContainer .PlotsPlotBanner .PlotsPlotBannerSeal.Face .ProfilePicture {
+   font-size: calc((var(--plots-plot-seal-size) - .4rem)*.5);
+   transform: translateY(-.4em)
```

#### 127. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L713-L718` → after: `L4557-L4561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4557-L4561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4557-L4561) · [Before (L713-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L713-L718)

```diff
- .SchematicImageContainer .SchematicImage.SchematicImageFadeIn {
-   animation-duration: .3s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: fadeIn;
-   isolation: isolate
+ .PlotsPlotBannerContainer .PlotsPlotBanner .PlotsPlotBannerText {
+   display: flex;
+   flex-direction: column;
+   gap: .15rem;
+   min-width: 0
```

#### 128. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L721-L723` → after: `L4564-L4569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4564-L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4564-L4569) · [Before (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L721-L723)

```diff
- .SchematicImageContainer .SchematicImageError {
-   color: #cfcfcf;
-   opacity: .4
+ .PlotsPlotBannerContainer .PlotsPlotBanner .PlotsPlotBannerText .PlotsPlotBannerTitle {
+   font-size: var(--plots-plot-title-size);
+   line-height: 1.2;
+   overflow: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 129. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L726` → after: `L4572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4572) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L726)

```diff
- .PublishButtonContainer {
+ .PlotsPlotBannerContainer .PlotsPlotBanner .PlotsPlotBannerText .PlotsPlotBannerCoords {
```

#### 130. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L729-L731` → after: `L4576-L4578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4576-L4578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4576-L4578) · [Before (L729-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L729-L731)

```diff
-   flex-wrap: wrap;
-   gap: .5rem;
-   justify-content: flex-start
+   font-size: var(--plots-plot-coords-size);
+   gap: .6rem;
+   line-height: 1.2
```

#### 131. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L734-L735` → after: `L4581-L4582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4581-L4582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4581-L4582) · [Before (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L734-L735)

```diff
- .PublishButtonContainer .ButtonBody {
-   padding: .5rem 1rem
+ .PlotsPlotBannerContainer .PlotsPlotBanner .PlotsPlotBannerText .PlotsPlotBannerCoords .PlotsPlotBannerBadge {
+   color: var(--plots-plot-accent)
```

#### 132. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L738-L739` → after: `L4585-L4590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4585-L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4585-L4590) · [Before (L738-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L738-L739)

```diff
- .PublishButtonContainer .ButtonBody .fa-info-circle {
-   color: #cfcfcf
+ .PlotsPlotBannerContainer .PlotsPlotBanner.Own {
+   --plots-plot-accent: #ffb914
+ }
+ 
+ .PlotsPlotBannerContainer .PlotsPlotBanner.Own .PlotsPlotBannerText .PlotsPlotBannerTitle {
+   color: #fcd373
```

#### 133. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L742-L743` → after: `L4593-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4593-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4593-L4594) · [Before (L742-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L742-L743)

```diff
- .PublishButtonContainer .SecondaryButton {
-   font-size: 1rem
+ .PlotsPlotBannerContainer .PlotsPlotBanner.Shared {
+   --plots-plot-accent: #1dd06d
```

#### 134. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L746-L747` → after: `L4597-L4607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4597-L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4597-L4607) · [Before (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L746-L747)

```diff
- .PublishButtonContainer .LogoLoader {
-   font-size: 1.8rem
+ @media(max-height:420px), (max-width:650px) {
+   .PlotsPlotBannerContainer .PlotsPlotBanner {
+     --plots-plot-title-size: max(1.6rem, 13px);
+     --plots-plot-coords-size: max(1.1rem, 9px);
+     gap: 8px;
+     padding: 3px 12px 3px 3px
+   }
+ 
+   .PlotsPlotBannerContainer .PlotsPlotBanner .PlotsPlotBannerSeal {
+     font-size: max(1.3rem, 11px)
+   }
```

#### 135. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L750-L757` → after: `L4610-L4615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4610-L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4610-L4615) · [Before (L750-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L750-L757)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailPolicyError,
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadError {
-   background-color: #e34f4f;
-   border: 1px solid #e34f4f;
-   color: #fff;
-   font-size: 1rem;
-   padding: .1rem .6rem .4rem;
-   text-shadow: 0 0 0 #000
+ @media(prefers-reduced-motion:reduce) {
+ 
+   .PlotsPlotBannerContainer .PlotsPlotBanner,
+   .PlotsPlotBannerContainer .PlotsPlotBanner .PlotsPlotBannerSeal {
+     animation: none
+   }
```

#### 136. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L760-L761` → after: `L4618-L4630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4618-L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4618-L4630) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L760-L761)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup {
-   width: 56rem
+ @keyframes PlotsPlotBannerIn {
+   0% {
+     opacity: 0;
+     transform: translateY(-1.5rem)
+   }
+ 
+   60% {
+     opacity: 1
+   }
+ 
+   to {
+     transform: none
+   }
```

#### 137. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L764-L765` → after: `L4633-L4640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4633-L4640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4633-L4640) · [Before (L764-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L764-L765)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderInner {
-   position: relative
+ @keyframes PlotsPlotBannerSeal {
+   0% {
+     transform: scale(0) rotate(-90deg)
+   }
+ 
+   to {
+     transform: none
+   }
```

#### 138. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L768-L769` → after: `L4643-L4653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4643-L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4643-L4653) · [Before (L768-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L768-L769)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderInner .SchematicPopupTitle {
-   margin: .15rem 0 .85rem
+ .SecretSantaMinimap {
+   aspect-ratio: 1;
+   background: #cfcfcf;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   box-sizing: border-box;
+   flex-shrink: 0;
+   pointer-events: none;
+   position: relative;
+   width: var(--ss-map-size)
```

#### 139. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L772-L773` → after: `L4656-L4663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4656-L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4656-L4663) · [Before (L772-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L772-L773)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderInner.ThumbnailUploaderSuccess {
-   overflow: hidden
+ .SecretSantaMinimap .SecretSantaMinimapGrid {
+   grid-gap: .15rem;
+   display: grid;
+   gap: .15rem;
+   grid-template-columns: repeat(3, 1fr);
+   grid-template-rows: repeat(3, 1fr);
+   inset: 0;
+   position: absolute
```

#### 140. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L776` → after: `L4666-L4667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4666-L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4666-L4667) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L776)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderInner .ThumbnailUploadSuccessOverlay {
+ .SecretSantaMinimap .SecretSantaDistrict {
+   --district-colour: #a4a4a4;
```

#### 141. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L778` → after: `L4669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4669) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L778)

```diff
-   background-color: #303a59;
+   background: color-mix(in srgb, var(--district-colour) 32%, #22283b);
```

#### 142. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L781-L782` → after: `L4672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4672) · [Before (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L781-L782)

```diff
-   gap: 2rem;
-   height: 100%;
+   gap: .1rem;
```

#### 143. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L784-L788` → after: `L4674-L4675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4674-L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4674-L4675) · [Before (L784-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L784-L788)

```diff
-   left: 0;
-   position: absolute;
-   top: 0;
-   width: 100%;
-   z-index: 10
+   overflow: hidden;
+   transition: background-color .3s, filter .3s
```

#### 144. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L791-L801` → after: `L4678-L4679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4678-L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4678-L4679) · [Before (L791-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L791-L801)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderInner .ThumbnailUploadSuccessOverlay .ThumbnailUploadSuccessIcon {
-   align-items: center;
-   animation-delay: .2s;
-   background-color: rgba(182, 131, 14, .2);
-   color: #ffb914;
-   display: flex;
-   font-size: 8rem;
-   height: 10rem;
-   justify-content: center;
-   position: relative;
-   width: 10rem
+ .SecretSantaMinimap .SecretSantaDistrict.District-gingerbreadLane {
+   --district-colour: #e8862f
```

#### 145. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L804-L805` → after: `L4682-L4683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4682-L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4682-L4683) · [Before (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L804-L805)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderInner .ThumbnailUploadSuccessOverlay .ThumbnailUploadSuccessIcon .Confetti {
-   font-size: 4rem
+ .SecretSantaMinimap .SecretSantaDistrict.District-toyRow {
+   --district-colour: #3a7bd5
```

#### 146. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L808-L809` → after: `L4686-L4687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4686-L4687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4686-L4687) · [Before (L808-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L808-L809)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderInner .ThumbnailUploadSuccessOverlay .ThumbnailUploadSuccessIcon .Confetti .ConfettiParticle {
-   animation-delay: .2s
+ .SecretSantaMinimap .SecretSantaDistrict.District-iceRink {
+   --district-colour: #8ed8f8
```

#### 147. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L812-L815` → after: `L4690-L4691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4690-L4691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4690-L4691) · [Before (L812-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L812-L815)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderInner .ThumbnailUploadSuccessOverlay .ThumbnailUploadSuccessText {
-   animation-delay: .3s;
-   font-size: 1.8rem;
-   font-weight: 800
+ .SecretSantaMinimap .SecretSantaDistrict.District-carousel {
+   --district-colour: #9c5bd1
```

#### 148. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L818-L830` → after: `L4694-L4695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4694-L4695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4694-L4695) · [Before (L818-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L818-L830)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadCheckbox {
-   align-items: flex-start;
-   align-self: center;
-   border: 2px solid transparent;
-   border-radius: 0;
-   cursor: pointer;
-   display: flex;
-   font-size: 1.2rem;
-   gap: .5rem;
-   padding: .5rem;
-   text-align: start;
-   -webkit-user-select: none;
-   user-select: none
+ .SecretSantaMinimap .SecretSantaDistrict.District-greatTree {
+   --district-colour: #2fa35a
```

#### 149. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L833-L835` → after: `L4698-L4699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4698-L4699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4698-L4699) · [Before (L833-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L833-L835)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadCheckbox input[type=checkbox] {
-   flex-shrink: 0;
-   margin: .4rem 0 0
+ .SecretSantaMinimap .SecretSantaDistrict.District-cocoaCorner {
+   --district-colour: #a8693f
```

#### 150. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L838-L841` → after: `L4702-L4703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4702-L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4702-L4703) · [Before (L838-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L838-L841)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadCheckbox.Policy {
-   font-weight: 700;
-   margin-bottom: .5rem;
-   margin-top: 1.5rem
+ .SecretSantaMinimap .SecretSantaDistrict.District-lanternWalk {
+   --district-colour: #e0414f
```

#### 151. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L844-L847` → after: `L4706-L4707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4706-L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4706-L4707) · [Before (L844-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L844-L847)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadCheckbox.ValidationError {
-   border-bottom-left-radius: 0;
-   border-bottom-right-radius: 0;
-   border-color: #e34f4f
+ .SecretSantaMinimap .SecretSantaDistrict.District-marketGate {
+   --district-colour: #e8c547
```

#### 152. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L850-L852` → after: `L4710-L4711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4710-L4711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4710-L4711) · [Before (L850-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L850-L852)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailPolicyError {
-   border-radius: 0 0 0 0;
-   margin-top: -.75rem
+ .SecretSantaMinimap .SecretSantaDistrict.District-santasGrotto {
+   --district-colour: #eef1f6
```

#### 153. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L855-L863` → after: `L4714-L4716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4714-L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4714-L4716) · [Before (L855-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L855-L863)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .CannotUploadThumbnailItem {
-   align-items: center;
-   border-radius: 0;
-   color: #ff8a80;
-   display: flex;
-   font-size: 1.3rem;
-   gap: 1rem;
-   padding: 1rem 2rem;
-   text-align: start
+ .SecretSantaMinimap .SecretSantaDistrict .SecretSantaDistrictIcon {
+   font-size: calc(var(--ss-map-size)*.11);
+   line-height: 1
```

#### 154. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L866-L868` → after: `L4719-L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4719-L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4719-L4722) · [Before (L866-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L866-L868)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .CannotUploadThumbnailItem .svg-inline--fa {
-   flex-shrink: 0;
-   font-size: 2rem
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaMinimap .SecretSantaDistrict .SecretSantaDistrictIcon {
+     font-size: calc(var(--ss-map-size)*.15)
+   }
```

#### 155. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L871-L873` → after: `L4725-L4728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4725-L4728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4725-L4728) · [Before (L871-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L871-L873)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderBody {
-   display: flex;
-   gap: 1.5rem
+ @media(orientation:portrait)and (max-width:600px) {
+   .SecretSantaMinimap .SecretSantaDistrict .SecretSantaDistrictIcon {
+     font-size: calc(var(--ss-map-size)*.15)
+   }
```

#### 156. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L876-L877` → after: `L4731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4731) · [Before (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L876-L877)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderBody .ThumbnailUploaderLeft {
-   border-radius: 0;
+ .SecretSantaMinimap .SecretSantaDistrict .SecretSantaDistrictLabel {
```

#### 157. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L879-L881` → after: `L4733-L4741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4733-L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4733-L4741) · [Before (L879-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L879-L881)

```diff
-   flex: 1 1;
-   min-width: 0;
-   padding: 1rem
+   color: #fff;
+   font-size: max(var(--ss-map-size)*.042, 9px);
+   font-weight: 800;
+   line-height: 1.05;
+   overflow-wrap: break-word;
+   padding: 0 calc(var(--ss-map-size)*.03);
+   text-align: center;
+   text-shadow: -1px -1px 0 #0f0f0f, -1px 0 0 #0f0f0f, -1px 1px 0 #0f0f0f, 0 -1px 0 #0f0f0f, 0 0 0 #0f0f0f, 0 1px 0 #0f0f0f, 1px -1px 0 #0f0f0f, 1px 0 0 #0f0f0f, 1px 1px 0 #0f0f0f;
+   width: 100%
```

#### 158. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L884-L887` → after: `L4744-L4746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4744-L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4744-L4746) · [Before (L884-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L884-L887)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderBody .ThumbnailUploaderLeft .SchematicPopupSubtitle {
-   font-size: 1.3rem;
-   font-weight: 800;
-   margin: 0 0 .75rem
+ .SecretSantaMinimap .SecretSantaDistrict .SecretSantaDistrictLabel .svg-inline--fa,
+ .SecretSantaMinimap .SecretSantaDistrict .SecretSantaDistrictLabel.svg-inline--fa {
+   paint-order: stroke fill
```

#### 159. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L890-L896` → after: `L4749-L4754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4749-L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4749-L4754) · [Before (L890-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L890-L896)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderBody .ThumbnailUploadPolicy {
-   background-color: rgba(57, 73, 128, .35);
-   border-radius: 0;
-   box-sizing: border-box;
-   flex: 0 0 auto;
-   padding: 1rem 1.2rem;
-   width: 24rem
+ .SecretSantaMinimap .SecretSantaDistrict .SecretSantaDistrictLabel .svg-inline--fa path:only-of-type,
+ .SecretSantaMinimap .SecretSantaDistrict .SecretSantaDistrictLabel.svg-inline--fa path:only-of-type {
+   stroke: #0f0f0f;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 160. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L899-L902` → after: `L4757-L4760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4757-L4760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4757-L4760) · [Before (L899-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L899-L902)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderBody .ThumbnailUploadPolicy .ThumbnailUploadPolicyTitle {
-   font-size: 1.3rem;
-   font-weight: 800;
-   margin: 0 0 .75rem
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaMinimap .SecretSantaDistrict .SecretSantaDistrictLabel {
+     display: none
+   }
```

#### 161. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L905-L911` → after: `L4763-L4766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4763-L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4763-L4766) · [Before (L905-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L905-L911)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderBody .ThumbnailUploadPolicy .ThumbnailUploadPolicyList {
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
-   list-style: none;
-   margin: 0;
-   padding-left: .5rem
+ @media(orientation:portrait)and (max-width:600px) {
+   .SecretSantaMinimap .SecretSantaDistrict .SecretSantaDistrictLabel {
+     display: none
+   }
```

#### 162. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L914-L920` → after: `L4769-L4774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4769-L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4769-L4774) · [Before (L914-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L914-L920)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderBody .ThumbnailUploadPolicy .ThumbnailUploadPolicyList .ThumbnailUploadPolicyItem {
-   align-items: flex-start;
-   display: flex;
-   font-size: 1.1rem;
-   gap: .6rem;
-   line-height: 1.4;
-   text-align: left
+ .SecretSantaMinimap .SecretSantaDistrict.Target {
+   animation: secretSantaTargetGlow 1.6s ease-in-out infinite alternate;
+   background: color-mix(in srgb, var(--district-colour) 62%, #22283b);
+   box-shadow: inset 0 0 0 .15rem #ffb914, 0 0 .6rem .05rem #ffb914;
+   position: relative;
+   z-index: 1
```

#### 163. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L923-L926` → after: `L4777-L4778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4777-L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4777-L4778) · [Before (L923-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L923-L926)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderBody .ThumbnailUploadPolicy .ThumbnailUploadPolicyList .ThumbnailUploadPolicyItem .svg-inline--fa {
-   flex-shrink: 0;
-   font-size: 1.1rem;
-   margin-top: .15rem
+ .SecretSantaMinimap .SecretSantaDistrict.Target .SecretSantaDistrictIcon {
+   font-size: calc(var(--ss-map-size)*.13)
```

#### 164. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L929-L930` → after: `L4781-L4784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4781-L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4781-L4784) · [Before (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L929-L930)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderBody .ThumbnailUploadPolicy .ThumbnailUploadPolicyList .ThumbnailUploadPolicyItem.Allowed .svg-inline--fa {
-   color: #1dd06d
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaMinimap .SecretSantaDistrict.Target .SecretSantaDistrictIcon {
+     font-size: calc(var(--ss-map-size)*.19)
+   }
```

#### 165. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L933-L934` → after: `L4787-L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4787-L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4787-L4790) · [Before (L933-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L933-L934)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploaderBody .ThumbnailUploadPolicy .ThumbnailUploadPolicyList .ThumbnailUploadPolicyItem.NotAllowed .svg-inline--fa {
-   color: #ff8a80
+ @media(orientation:portrait)and (max-width:600px) {
+   .SecretSantaMinimap .SecretSantaDistrict.Target .SecretSantaDistrictIcon {
+     font-size: calc(var(--ss-map-size)*.19)
+   }
```

#### 166. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L937-L941` → after: `L4793-L4794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4793-L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4793-L4794) · [Before (L937-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L937-L941)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer {
-   align-items: stretch;
-   display: flex;
-   flex-direction: column;
-   gap: .5rem
+ .SecretSantaMinimap.State-hunting .SecretSantaDistrict:not(.Target) {
+   filter: saturate(.55) brightness(.8)
```

#### 167. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L944-L954` → after: `L4797-L4798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4797-L4798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4797-L4798) · [Before (L944-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L944-L954)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadDropzone {
-   align-items: center;
-   border: 3px solid #303a59;
-   border-radius: 0;
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
-   height: 16rem;
-   justify-content: center;
-   padding: 2rem 1rem
+ .SecretSantaMinimap[data-in-district] .SecretSantaDistrict.Target {
+   box-shadow: inset 0 0 0 .15rem #fff, 0 0 .8rem .15rem #fcd373
```

#### 168. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L957-L960` → after: `L4801-L4808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4801-L4808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4801-L4808) · [Before (L957-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L957-L960)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadDropzone.ValidationError {
-   border-bottom-left-radius: 0;
-   border-bottom-right-radius: 0;
-   border-color: #e34f4f
+ .SecretSantaMinimap .SecretSantaDistrictPulse {
+   animation: secretSantaDistrictPulse .9s ease-out forwards;
+   border: .2rem solid #fcd373;
+   box-sizing: border-box;
+   height: 33.3333333333%;
+   position: absolute;
+   width: 33.3333333333%;
+   z-index: 2
```

#### 169. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L963-L967` → after: `L4811-L4815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4811-L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4811-L4815) · [Before (L963-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L963-L967)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadDropzone .ThumbnailUploadIcon {
-   font-size: 3rem;
-   opacity: .4;
-   text-shadow: 0 0 0 #000;
-   transition: color .2s, opacity .3s
+ .SecretSantaMinimap .SecretSantaCircleClip {
+   inset: 0;
+   overflow: hidden;
+   position: absolute;
+   z-index: 3
```

#### 170. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L970-L973` → after: `L4818-L4820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4818-L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4818-L4820) · [Before (L970-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L970-L973)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadDropzone .ThumbnailUploadPreview {
-   max-height: 8rem;
-   max-width: 100%;
-   object-fit: contain
+ .SecretSantaMinimap .SecretSantaCircle {
+   position: absolute;
+   transform: translate(-50%, -50%)
```

#### 171. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L976-L981` → after: `L4823-L4827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4823-L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4823-L4827) · [Before (L976-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L976-L981)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadDropzone .ThumbnailUploadInstructions {
-   font-size: 1.2rem;
-   opacity: .4;
-   padding: .1rem;
-   text-shadow: 0 0 0 #000;
-   transition: opacity .2s, color .3s
+ .SecretSantaMinimap .SecretSantaCircle svg {
+   display: block;
+   height: 100%;
+   overflow: visible;
+   width: 100%
```

#### 172. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L984-L985` → after: `L4830-L4834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4830-L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4830-L4834) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L984-L985)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadDropzone .ThumbnailUploadInstructions.Active {
-   opacity: 1
+ .SecretSantaMinimap .SecretSantaCircle path {
+   fill: none;
+   stroke-dasharray: .3rem .2rem;
+   stroke-linecap: round;
+   vector-effect: non-scaling-stroke
```

#### 173. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L988-L990` → after: `L4837-L4840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4837-L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4837-L4840) · [Before (L988-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L988-L990)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadDropzone .ThumbnailUploadInstructions.Preview {
-   font-size: 1rem;
-   opacity: .5
+ .SecretSantaMinimap .SecretSantaCircle .SecretSantaCircleShadow {
+   fill: rgba(255, 185, 20, .15);
+   stroke: rgba(26, 31, 46, .6);
+   stroke-width: .22rem
```

#### 174. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L993-L995` → after: `L4843-L4845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4843-L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4843-L4845) · [Before (L993-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L993-L995)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadDropzone.ActiveDrag .ThumbnailUploadIcon,
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadDropzone.ActiveDrag .ThumbnailUploadInstructions {
-   opacity: 1
+ .SecretSantaMinimap .SecretSantaCircle .SecretSantaCircleDashes {
+   stroke: #fcd373;
+   stroke-width: .12rem
```

#### 175. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L998-L1001` → after: `L4848-L4850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4848-L4850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4848-L4850) · [Before (L998-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L998-L1001)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailAspectPreviews {
-   display: flex;
-   gap: 1rem;
-   justify-content: center
+ .SecretSantaMinimap[data-in-circle] .SecretSantaCircle .SecretSantaCircleDashes {
+   stroke: #fff;
+   stroke-dasharray: none
```

#### 176. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1004-L1008` → after: `L4853-L4857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4853-L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4853-L4857) · [Before (L1004-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1004-L1008)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailAspectPreviews .ThumbnailAspectPreview {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   gap: .35rem
+ .SecretSantaMinimap .SecretSantaMinimapArrowClip {
+   inset: 0;
+   overflow: hidden;
+   position: absolute;
+   z-index: 4
```

#### 177. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1011-L1014` → after: `L4860-L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4860-L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4860-L4866) · [Before (L1011-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1011-L1014)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailAspectPreviews .ThumbnailAspectPreview .ThumbnailAspectLabel {
-   font-size: 1rem;
-   font-weight: 800;
-   opacity: .5
+ .SecretSantaMinimap .SecretSantaMinimapArrow {
+   height: calc(var(--ss-map-size)*.15);
+   left: 50%;
+   position: absolute;
+   top: 50%;
+   transform: translate(-50%, -50%);
+   width: calc(var(--ss-map-size)*.15)
```

#### 178. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1017-L1020` → after: `L4869-L4874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4869-L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4869-L4874) · [Before (L1017-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1017-L1020)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailAspectPreviews .ThumbnailAspectPreview .ThumbnailAspectFrame {
-   border: 0 solid transparent;
-   height: 8rem;
-   overflow: hidden
+ .SecretSantaMinimap .SecretSantaMinimapArrow svg {
+   display: block;
+   filter: drop-shadow(0 0 1px #0f0f0f);
+   height: 100%;
+   overflow: visible;
+   width: 100%
```

#### 179. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1023-L1024` → after: `L4877-L4882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4877-L4882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4877-L4882) · [Before (L1023-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1023-L1024)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailAspectPreviews .ThumbnailAspectPreview .ThumbnailAspectFrame.Square {
-   aspect-ratio: 1/1
+ .SecretSantaMinimap .SecretSantaMinimapArrow .SecretSantaMinimapArrowBody {
+   fill: #e73131;
+   stroke: #fff;
+   stroke-width: 2.4;
+   stroke-linejoin: round;
+   paint-order: stroke
```

#### 180. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1027-L1028` → after: `L4885-L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4885-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4885-L4886) · [Before (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1027-L1028)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailAspectPreviews .ThumbnailAspectPreview .ThumbnailAspectFrame.Wide {
-   aspect-ratio: 16/9
+ .SecretSantaMinimap .SecretSantaMinimapArrow .SecretSantaMinimapArrowDot {
+   fill: #fff
```

#### 181. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1031-L1032` → after: `L4889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4889) · [Before (L1031-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1031-L1032)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailAspectPreviews .ThumbnailAspectPreview .ThumbnailAspectFrame img {
-   display: block;
+ .SecretSantaMinimap .SecretSantaCountdown {
```

#### 182. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1034-L1035` → after: `L4891-L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4891-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4891-L4894) · [Before (L1034-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1034-L1035)

```diff
-   object-fit: cover;
-   width: 100%
+   inset: 0;
+   position: absolute;
+   width: 100%;
+   z-index: 5
```

#### 183. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1038-L1046` → after: `L4897-L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4897-L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4897-L4900) · [Before (L1038-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1038-L1046)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadNameInput {
-   border: 2px solid transparent;
-   box-sizing: border-box;
-   font-size: 1.5rem;
-   font-weight: 700;
-   margin-top: 1rem;
-   padding: .25rem .75rem;
-   text-align: center;
-   width: 100%
+ .SecretSantaMinimap .SecretSantaCountdown path {
+   fill: none;
+   stroke: #ffb914;
+   stroke-width: 5
```

#### 184. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1049-L1052` → after: `L4903-L4921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4903-L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4903-L4921) · [Before (L1049-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1049-L1052)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadNameInput.ValidationError {
-   border-bottom-left-radius: 0;
-   border-bottom-right-radius: 0;
-   border-color: #e34f4f
+ .SecretSantaMinimap .SecretSantaLost {
+   align-items: center;
+   animation-duration: .3s;
+   animation-fill-mode: backwards;
+   animation-iteration-count: 1;
+   animation-name: fadeIn;
+   background: rgba(26, 31, 46, .85);
+   color: #fff;
+   display: flex;
+   flex-direction: column;
+   font-size: max(.8rem, 10px);
+   gap: .2rem;
+   inset: 0;
+   isolation: isolate;
+   justify-content: center;
+   padding: .3rem;
+ ... (3 more added lines; see GitHub link above)
```

#### 185. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1055-L1058` → after: `L4924-L4927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4924-L4927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4924-L4927) · [Before (L1055-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1055-L1058)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadWarning {
-   color: #ffb914;
-   font-size: 1.15rem;
-   padding: .4rem .6rem
+ .SecretSantaMinimap .SecretSantaLost .SecretSantaLostIcon {
+   animation: secretSantaLostDrift 3s ease-in-out infinite alternate;
+   font-size: calc(var(--ss-map-size)*.2);
+   line-height: 1
```

#### 186. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1061-L1064` → after: `L4930-L4933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4930-L4933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4930-L4933) · [Before (L1061-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1061-L1064)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ValidationError+.ThumbnailUploadError {
-   border-radius: 0 0 0 0;
-   margin-top: -.5rem
- }
+ @keyframes secretSantaTargetGlow {
+   0% {
+     filter: brightness(1)
+   }
```

#### 187. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1066-L1068` → after: `L4935-L4937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4935-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4935-L4937) · [Before (L1066-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1066-L1068)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadButton {
-   box-sizing: border-box;
-   margin-top: auto
+   to {
+     filter: brightness(1.25)
+   }
```

#### 188. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1071-L1072` → after: `L4940-L4949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4940-L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4940-L4949) · [Before (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1071-L1072)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.SchematicThumbnailPopup .ThumbnailUploadContainer .ThumbnailUploadButton .ButtonBody {
-   padding: 1rem
+ @keyframes secretSantaDistrictPulse {
+   0% {
+     opacity: 1;
+     transform: scale(1)
+   }
+ 
+   to {
+     opacity: 0;
+     transform: scale(1.45)
+   }
```

#### 189. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1075-L1076` → after: `L4952-L4959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4952-L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4952-L4959) · [Before (L1075-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1075-L1076)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailActionMsg {
-   margin-left: .5rem
+ @keyframes secretSantaLostDrift {
+   0% {
+     transform: translateY(-.1rem) rotate(-15deg)
+   }
+ 
+   to {
+     transform: translateY(.1rem) rotate(15deg)
+   }
```

#### 190. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1079-L1080` → after: `L4962-L4963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4962-L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4962-L4963) · [Before (L1079-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1079-L1080)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailActionMsg--success {
-   color: #1dd06d
+ body.SecretSantaHudShown .InGameUi:not([data-replay-ui-active]) .RightInfoDivContainer {
+   display: none
```

#### 191. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1083-L1084` → after: `L4966-L4967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4966-L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4966-L4967) · [Before (L1083-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1083-L1084)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailActionMsg--error {
-   color: #ff8a80
+ body.SecretSantaMatchOrFinish .InGameUi .BottomScreenStatBarWrapper:has(.HealthBar) {
+   display: none
```

#### 192. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1087-L1088` → after: `L4970-L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4970-L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4970-L4973) · [Before (L1087-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1087-L1088)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailActionMsg--info {
-   color: #fcd373
+ body.SecretSantaHudShown .InGameUi:not([data-replay-ui-active]) .HotBarRow .HotBar,
+ body.SecretSantaMatchOrFinish .LobbyLeaderboard .PlayerPfpAndName .ProfilePicture,
+ body.SecretSantaMatchOrFinish .ProfileCardModelPanel {
+   display: none
```

#### 193. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1091-L1095` → after: `L4976-L4977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4976-L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4976-L4977) · [Before (L1091-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1091-L1095)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid {
-   display: flex;
-   flex-wrap: wrap;
-   gap: .5rem;
-   padding-bottom: .5rem
+ body.SecretSantaMatchOrFinish .MiddleTextBottom .MiddleText:not(.NoBackground) {
+   background-color: rgba(38, 52, 93, .85)
```

#### 194. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1098-L1111` → after: `L4980-L4984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4980-L4984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4980-L4984) · [Before (L1098-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1098-L1111)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem {
-   align-items: center;
-   background-color: #394980;
-   border: none;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   cursor: pointer;
-   display: flex;
-   height: 5rem;
-   justify-content: center;
-   overflow: hidden;
-   position: relative;
-   width: 8rem;
-   z-index: 0
+ @media(orientation:landscape)and (max-height:500px) {
+   body.SecretSantaMatchOrFinish .MiddleTextBottom .MiddleTextUpper {
+     margin-bottom: 0;
+     padding-block: .6rem
+   }
```

#### 195. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1114-L1118` → after: `L4987-L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4987-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4987-L4990) · [Before (L1114-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1114-L1118)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem .SchematicImageContainer,
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem img {
-   height: 100%;
-   object-fit: cover;
-   width: 100%
+ body.SecretSantaMatchOrFinish .FlyingMiddleText {
+   font-size: 1.75rem;
+   text-shadow: -2px -2px 0 #0f0f0f, -2px -1px 0 #0f0f0f, -2px 0 0 #0f0f0f, -2px 1px 0 #0f0f0f, -2px 2px 0 #0f0f0f, -1px -2px 0 #0f0f0f, -1px -1px 0 #0f0f0f, -1px 0 0 #0f0f0f, -1px 1px 0 #0f0f0f, -1px 2px 0 #0f0f0f, 0 -2px 0 #0f0f0f, 0 -1px 0 #0f0f0f, 0 0 0 #0f0f0f, 0 1px 0 #0f0f0 … [truncated]
+   top: calc(50% - max(3.4rem, 40px)/2 - 1.4em)
```

#### 196. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1121-L1129` → after: `L4993-L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4993-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4993-L4995) · [Before (L1121-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1121-L1129)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem:after {
-   border: 2px solid transparent;
-   border-radius: inherit;
-   content: "";
-   inset: 0;
-   pointer-events: none;
-   position: absolute;
-   transition: border-color .15s;
-   z-index: 3
+ body.SecretSantaMatchOrFinish .FlyingMiddleText .svg-inline--fa,
+ body.SecretSantaMatchOrFinish .FlyingMiddleText.svg-inline--fa {
+   paint-order: stroke fill
```

#### 197. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1132-L1135` → after: `L4998-L5003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R4998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L4998-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L4998-L5003) · [Before (L1132-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1132-L1135)

```diff
- @media(hover:hover) {
-   .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem:hover:after {
-     border-color: #303a59
-   }
+ body.SecretSantaMatchOrFinish .FlyingMiddleText .svg-inline--fa path:only-of-type,
+ body.SecretSantaMatchOrFinish .FlyingMiddleText.svg-inline--fa path:only-of-type {
+   stroke: #0f0f0f;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 4px;
+   stroke-linejoin: round
```

#### 198. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1138-L1139` → after: `L5006-L5009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5006-L5009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5006-L5009) · [Before (L1138-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1138-L1139)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem.pad-focused:after {
-   border-color: #303a59
+ body.SecretSantaHudShown .ControlsTutorialDiv {
+   bottom: 6.5rem;
+   transform: translateX(-50%) scale(.8);
+   transform-origin: 50% 100%
```

#### 199. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1142-L1144` → after: `L5012-L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5012-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5012-L5015) · [Before (L1142-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1142-L1144)

```diff
- @media(hover:none) {
-   .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem:active:after {
-     border-color: #303a59
+ @media(orientation:landscape)and (max-height:500px)and (pointer:coarse) {
+   html:not(.HudMove-interact) body.SecretSantaMatchOrFinish .TouchInteractHit {
+     bottom: auto;
+     top: calc(50% + 40px)
```

#### 200. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1148-L1149` → after: `L5019-L5023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5019-L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5019-L5023) · [Before (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1148-L1149)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem.ThumbnailGridItemSelected:after {
-   border-color: #ffb914
+ .InGameUi[data-replay-ui-active] .SecretSantaMapPanel,
+ .InGameUi[data-replay-ui-active] .SecretSantaRing,
+ .InGameUi[data-replay-ui-active] .SecretSantaTarget,
+ .InGameUi[data-replay-ui-active] .SecretSantaTop {
+   display: none
```

#### 201. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1152-L1154` → after: `L5026-L5036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5026-L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5026-L5036) · [Before (L1152-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1152-L1154)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem.ThumbnailGridItemPending {
-   cursor: not-allowed;
-   opacity: .5
+ .SecretSantaTop {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   font-size: max(1rem, 12px);
+   left: 0;
+   pointer-events: none;
+   position: fixed;
+   right: 0;
+   top: calc(var(--hud-safe-top, var(--notchTop)) + .25rem);
+   z-index: 14
```

#### 202. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1157-L1169` → after: `L5039-L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5039-L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5039-L5042) · [Before (L1157-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1157-L1169)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem .ThumbnailGridItemLabel {
-   background-color: rgba(57, 73, 128, .5);
-   bottom: 0;
-   font-size: .7rem;
-   left: 0;
-   max-width: 100%;
-   overflow-x: hidden;
-   padding: .1rem .5rem;
-   position: absolute;
-   text-align: start;
-   text-overflow: ellipsis;
-   white-space: nowrap;
-   z-index: 2
+ @media(orientation:portrait)and (max-width:600px) {
+   .InGameUi:has(.Chat.Chatting) .SecretSantaTop {
+     visibility: hidden
+   }
```

#### 203. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1172` → after: `L5045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5045) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1172)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem .ThumbnailUnapprovedIcon {
+ .SecretSantaTopBar {
```

#### 204. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1175-L1176` → after: `L5054-L5061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5054-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5054-L5061) · [Before (L1175-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1175-L1176)

```diff
-   font-size: 2rem;
-   justify-content: center
+   font-weight: 600;
+   gap: .9rem;
+   line-height: 1.2;
+   padding: .3rem .9rem;
+   pointer-events: none;
+   position: relative;
+   white-space: nowrap;
+   z-index: 1
```

#### 205. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1179-L1180` → after: `L5064-L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5064-L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5064-L5068) · [Before (L1179-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1179-L1180)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem .ThumbnailDefaultLabel {
-   font-weight: 800
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaTopBar {
+     gap: .6rem;
+     padding: .2rem .6rem
+   }
```

#### 206. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1183-L1184` → after: `L5071-L5075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5071-L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5071-L5075) · [Before (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1183-L1184)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem .ThumbnailPendingLabel {
-   color: #ffb914
+ @media(orientation:portrait)and (max-width:600px) {
+   .SecretSantaTopBar {
+     gap: .6rem;
+     padding: .2rem .6rem
+   }
```

#### 207. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1187-L1192` → after: `L5078-L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5078-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5078-L5086) · [Before (L1187-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1187-L1192)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailGridItem .ThumbnailDeleteButton {
-   font-size: .7rem;
-   position: absolute;
-   right: .2rem;
-   top: .2rem;
-   z-index: 4
+ .SecretSantaClock {
+   font-feature-settings: "tnum";
+   align-items: center;
+   display: inline-flex;
+   font-size: 1.9em;
+   font-variant-numeric: tabular-nums;
+   font-weight: 800;
+   gap: .25rem;
+   line-height: 1
```

#### 208. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1195-L1204` → after: `L5089-L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5089-L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5089-L5090) · [Before (L1195-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1195-L1204)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailUploadTile {
-   background-color: transparent;
-   border: 2px dashed #a4a4a4;
-   box-shadow: none;
-   box-sizing: border-box;
-   color: #a4a4a4;
-   flex-direction: column;
-   font-size: 1.3rem;
-   gap: .3rem;
-   transition: border-color .15s, color .15s
+ .SecretSantaClock>span {
+   font-size: .6em
```

#### 209. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1207-L1208` → after: `L5093-L5094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5093-L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5093-L5094) · [Before (L1207-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1207-L1208)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailUploadTile:after {
-   content: none
+ .SecretSantaClock.Urgent {
+   color: #ff8a80
```

#### 210. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1211-L1214` → after: `L5097-L5099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5097-L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5097-L5099) · [Before (L1211-L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1211-L1214)

```diff
- @media(hover:hover) {
-   .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailUploadTile:hover {
-     border-color: #ffb914;
-     color: #ffb914
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaClock {
+     font-size: 1.6em
```

#### 211. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1218-L1220` → after: `L5103-L5106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5103-L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5103-L5106) · [Before (L1218-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1218-L1220)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailUploadTile.pad-focused {
-   border-color: #ffb914;
-   color: #ffb914
+ @media(orientation:portrait)and (max-width:600px) {
+   .SecretSantaClock {
+     font-size: 1.6em
+   }
```

#### 212. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1223-L1227` → after: `L5109-L5114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5109-L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5109-L5114) · [Before (L1223-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1223-L1227)

```diff
- @media(hover:none) {
-   .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailUploadTile:active {
-     border-color: #ffb914;
-     color: #ffb914
-   }
+ .SecretSantaScore {
+   align-items: baseline;
+   border-left: 1px solid hsla(0, 0%, 95%, .1);
+   display: inline-flex;
+   gap: .4rem;
+   padding-left: .9rem
```

#### 213. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1230-L1234` → after: `L5117-L5120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5117-L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5117-L5120) · [Before (L1230-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1230-L1234)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailUploadTile .ThumbnailGridItemLabel {
-   background-color: transparent;
-   font-size: .75rem;
-   padding: 0;
-   position: static
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaScore {
+     padding-left: .6rem
+   }
```

#### 214. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1237-L1239` → after: `L5123-L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5123-L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5123-L5126) · [Before (L1237-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1237-L1239)

```diff
- .SchematicPage .ThumbnailSection .ThumbnailGrid .ThumbnailUploadTile.ThumbnailUploadTileDisabled {
-   cursor: not-allowed;
-   opacity: .5
+ @media(orientation:portrait)and (max-width:600px) {
+   .SecretSantaScore {
+     padding-left: .6rem
+   }
```

#### 215. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1242-L1250` → after: `L5129-L5137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5129-L5137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5129-L5137) · [Before (L1242-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1242-L1250)

```diff
- .ThumbnailRejectionNotice {
-   align-items: center;
-   background-color: #303a59;
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
-   padding: 1.5rem;
-   width: 100%
+ .SecretSantaPoints {
+   font-feature-settings: "tnum";
+   animation: secretSantaPop .35s ease-out;
+   color: #ffb914;
+   display: inline-block;
+   font-size: 1.5em;
+   font-variant-numeric: tabular-nums;
+   font-weight: 800;
+   line-height: 1
```

#### 216. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1253-L1256` → after: `L5140-L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5140-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5140-L5143) · [Before (L1253-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1253-L1256)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeTitle {
-   color: #ff8a80;
-   font-size: 1.75rem;
-   font-weight: 700
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaPoints {
+     font-size: 1.3em
+   }
```

#### 217. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1259-L1260` → after: `L5146-L5149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5146-L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5146-L5149) · [Before (L1259-L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1259-L1260)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeTitle .svg-inline--fa {
-   margin-right: .5rem
+ @media(orientation:portrait)and (max-width:600px) {
+   .SecretSantaPoints {
+     font-size: 1.3em
+   }
```

#### 218. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1263` → after: `L5152-L5153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5152-L5153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5152-L5153) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1263)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeSubtitle {
+ .SecretSantaRank {
+   font-feature-settings: "tnum";
```

#### 219. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1265-L1275` → after: `L5155-L5156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5155-L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5155-L5156) · [Before (L1265-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1265-L1275)

```diff
-   font-size: 1rem;
-   text-align: center
- }
- 
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeList {
-   display: flex;
-   flex-direction: column;
-   gap: .75rem;
-   max-height: 20rem;
-   overflow-y: auto;
-   width: 100%
+   font-variant-numeric: tabular-nums;
+   font-weight: 700
```

#### 220. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1278-L1279` → after: `L5159-L5162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5159-L5162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5159-L5162) · [Before (L1278-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1278-L1279)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeList .ThumbnailRejectionNoticeGroup {
-   background-color: rgba(227, 79, 79, .1);
+ .SecretSantaYouTab {
+   align-items: stretch;
+   animation: secretSantaPop .35s ease-out;
+   background: rgba(38, 52, 93, .85);
```

#### 221. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1286-L1293` → after: `L5172-L5176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5172-L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5172-L5176) · [Before (L1286-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1286-L1293)

```diff
-   gap: .4rem;
-   padding: .75rem
- }
- 
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeList .ThumbnailRejectionNoticeGroup .ThumbnailRejectionNoticeItems {
-   display: flex;
-   flex-wrap: wrap;
-   gap: .4rem
+   font-weight: 600;
+   line-height: 1.2;
+   overflow: hidden;
+   pointer-events: none;
+   text-align: center
```

#### 222. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1296-L1299` → after: `L5179-L5182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5179-L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5179-L5182) · [Before (L1296-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1296-L1299)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeList .ThumbnailRejectionNoticeGroup .ThumbnailRejectionNoticeGroupReason {
-   color: #ff8a80;
-   font-size: 1.25rem;
-   font-weight: 700
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaYouTab {
+     font-size: .9em
+   }
```

#### 223. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1302-L1308` → after: `L5185-L5188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5185-L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5185-L5188) · [Before (L1302-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1302-L1308)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeList .ThumbnailRejectionNoticeGroup .ThumbnailRejectionNoticeGroupTips {
-   display: flex;
-   flex-direction: column;
-   gap: .2rem;
-   list-style: none;
-   margin: 0;
-   padding: 0 0 .25rem
+ @media(orientation:portrait)and (max-width:600px) {
+   .SecretSantaYouTab {
+     font-size: .9em
+   }
```

#### 224. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1311-L1315` → after: `L5191-L5192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5191-L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5191-L5192) · [Before (L1311-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1311-L1315)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeList .ThumbnailRejectionNoticeGroup .ThumbnailRejectionNoticeGroupTips li {
-   color: #ffb914;
-   font-size: 1rem;
-   padding-left: .75rem;
-   text-align: start
+ .SecretSantaYouTab>* {
+   padding: .15rem .8rem
```

#### 225. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1318-L1320` → after: `L5195-L5201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5195-L5201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5195-L5201) · [Before (L1318-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1318-L1320)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeList .ThumbnailRejectionNoticeGroup .ThumbnailRejectionNoticeGroupTips li:before {
-   content: "•";
-   margin-right: .4rem
+ .SecretSantaYouTab .SecretSantaHunters {
+   background: #e34f4f;
+   color: #fff;
+   font-size: 1.15em;
+   font-weight: 800;
+   padding-block: .2rem;
+   text-shadow: -1px -1px 0 #0f0f0f, -1px 0 0 #0f0f0f, -1px 1px 0 #0f0f0f, 0 -1px 0 #0f0f0f, 0 0 0 #0f0f0f, 0 1px 0 #0f0f0f, 1px -1px 0 #0f0f0f, 1px 0 0 #0f0f0f, 1px 1px 0 #0f0f0f
```

#### 226. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1323-L1331` → after: `L5204-L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5204-L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5204-L5206) · [Before (L1323-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1323-L1331)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeList .ThumbnailRejectionNoticeGroup .ThumbnailRejectionNoticeItem {
-   align-items: center;
-   background-color: rgba(57, 73, 128, .3);
-   border: 1px solid rgba(227, 79, 79, .3);
-   border-radius: 0;
-   display: flex;
-   gap: .75rem;
-   justify-content: center;
-   padding: .4rem .5rem
+ .SecretSantaYouTab .SecretSantaHunters .svg-inline--fa,
+ .SecretSantaYouTab .SecretSantaHunters.svg-inline--fa {
+   paint-order: stroke fill
```

#### 227. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1334-L1337` → after: `L5209-L5214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5209-L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5209-L5214) · [Before (L1334-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1334-L1337)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeList .ThumbnailRejectionNoticeGroup .ThumbnailRejectionNoticeItem .ThumbnailRejectionNoticeItemIcon {
-   color: #cfcfcf;
-   flex-shrink: 0;
-   font-size: 1.2rem
+ .SecretSantaYouTab .SecretSantaHunters .svg-inline--fa path:only-of-type,
+ .SecretSantaYouTab .SecretSantaHunters.svg-inline--fa path:only-of-type {
+   stroke: #0f0f0f;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 228. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1340-L1342` → after: `L5217-L5219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5217-L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5217-L5219) · [Before (L1340-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1340-L1342)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeList .ThumbnailRejectionNoticeGroup .ThumbnailRejectionNoticeItem .ThumbnailRejectionNoticeItemDetails {
-   min-width: 0;
-   text-align: center
+ .SecretSantaYouTab .SecretSantaSpotted {
+   color: #ff8a80;
+   font-weight: 800
```

#### 229. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1345` → after: `L5222-L5232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5222-L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5222-L5232) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1345)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeList .ThumbnailRejectionNoticeGroup .ThumbnailRejectionNoticeItem .ThumbnailRejectionNoticeItemDetails .ThumbnailRejectionNoticeItemName {
+ .SecretSantaTarget {
+   text-wrap: balance;
+   animation: secretSantaPop .35s ease-out;
+   background: rgba(38, 52, 93, .85);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   box-sizing: border-box;
+   color: #fff;
+   font-size: max(1.5rem, 15px);
+   font-weight: 600;
```

#### 230. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1347-L1359` → after: `L5234-L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5234-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5234-L5240) · [Before (L1347-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1347-L1359)

```diff
-   overflow-x: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
- }
- 
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeCheckbox {
-   align-items: center;
-   cursor: pointer;
-   display: flex;
-   font-size: 1rem;
-   gap: .5rem;
-   -webkit-user-select: none;
-   user-select: none
+   line-height: 1.2;
+   margin-bottom: 1rem;
+   max-width: min(56rem, 92vw);
+   padding: .45rem 1.1rem;
+   pointer-events: none;
+   text-align: center;
+   white-space: normal
```

#### 231. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1362-L1364` → after: `L5243-L5246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5243-L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5243-L5246) · [Before (L1362-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1362-L1364)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeError {
-   color: #ff8a80;
-   font-size: .9rem
+ .SecretSantaTarget.State-lost,
+ .SecretSantaTarget.State-none {
+   color: #cfcfcf;
+   font-size: max(1.15rem, 13px)
```

#### 232. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1367-L1368` → after: `L5249-L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5249-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5249-L5254) · [Before (L1367-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1367-L1368)

```diff
- .ThumbnailRejectionNotice .ThumbnailRejectionNoticeAcceptButton {
-   min-width: 10rem
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaTarget {
+     margin-bottom: .5rem;
+     max-width: 58vw;
+     padding: .3rem .8rem
+   }
```

#### 233. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1371-L1376` → after: `L5257-L5261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5257-L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5257-L5261) · [Before (L1371-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1371-L1376)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.ThumbnailDeleteConfirmPopup .ThumbnailDeleteConfirm {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   gap: .75rem;
-   padding: .5rem
+ @media(orientation:portrait)and (max-width:600px) {
+   .SecretSantaTarget {
+     font-size: max(1.2rem, 14px);
+     margin-bottom: .5rem
+   }
```

#### 234. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1379-L1381` → after: `L5264-L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5264-L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5264-L5266) · [Before (L1379-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1379-L1381)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.ThumbnailDeleteConfirmPopup .ThumbnailDeleteConfirm .ThumbnailDeleteConfirmTitle {
-   font-size: 1.5rem;
-   font-weight: 700
+ .SecretSantaTarget .SecretSantaDistrictName,
+ .SecretSantaTarget .SecretSantaScarf {
+   font-size: 1.12em
```

#### 235. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1384-L1390` → after: `L5269-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5269-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5269-L5273) · [Before (L1384-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1384-L1390)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.ThumbnailDeleteConfirmPopup .ThumbnailDeleteConfirm .ThumbnailDeleteConfirmImageContainer {
-   border: 2px solid #e34f4f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   overflow: hidden;
-   position: relative;
-   width: 16rem
+ .SecretSantaTarget .SecretSantaDistrictName {
+   --district-colour: #a4a4a4;
+   color: color-mix(in srgb, var(--district-colour) 45%, #fff);
+   font-weight: 800;
+   white-space: nowrap
```

#### 236. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1393-L1396` → after: `L5276-L5277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5276-L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5276-L5277) · [Before (L1393-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1393-L1396)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.ThumbnailDeleteConfirmPopup .ThumbnailDeleteConfirm .ThumbnailDeleteConfirmImageContainer .ThumbnailDeleteConfirmImage {
-   display: block;
-   object-fit: cover;
-   width: 100%
+ .SecretSantaTarget .SecretSantaDistrictName.District-gingerbreadLane {
+   --district-colour: #e8862f
```

#### 237. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1399-L1411` → after: `L5280-L5281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5280-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5280-L5281) · [Before (L1399-L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1399-L1411)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.ThumbnailDeleteConfirmPopup .ThumbnailDeleteConfirm .ThumbnailDeleteConfirmImageContainer .ThumbnailGridItemLabel {
-   background-color: rgba(57, 73, 128, .5);
-   bottom: 0;
-   font-size: 2rem;
-   left: 0;
-   max-width: 100%;
-   overflow-x: hidden;
-   padding: .1rem .5rem;
-   position: absolute;
-   text-align: start;
-   text-overflow: ellipsis;
-   white-space: nowrap;
-   z-index: 2
+ .SecretSantaTarget .SecretSantaDistrictName.District-toyRow {
+   --district-colour: #3a7bd5
```

#### 238. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1414-L1417` → after: `L5284-L5285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5284-L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5284-L5285) · [Before (L1414-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1414-L1417)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.ThumbnailDeleteConfirmPopup .ThumbnailDeleteConfirm .ThumbnailDeleteConfirmSubtitle {
-   color: #cfcfcf;
-   font-size: 1rem;
-   text-align: center
+ .SecretSantaTarget .SecretSantaDistrictName.District-iceRink {
+   --district-colour: #8ed8f8
```

#### 239. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1420-L1422` → after: `L5288-L5289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5288-L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5288-L5289) · [Before (L1420-L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1420-L1422)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.ThumbnailDeleteConfirmPopup .ThumbnailDeleteConfirm .ThumbnailDeleteConfirmButtons {
-   display: flex;
-   gap: .75rem
+ .SecretSantaTarget .SecretSantaDistrictName.District-carousel {
+   --district-colour: #9c5bd1
```

#### 240. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1425-L1429` → after: `L5292-L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5292-L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5292-L5293) · [Before (L1425-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1425-L1429)

```diff
- .SchematicPage .TexturePackSection .TexturePackList {
-   grid-gap: .6rem;
-   display: grid;
-   gap: .6rem;
-   grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr))
+ .SecretSantaTarget .SecretSantaDistrictName.District-greatTree {
+   --district-colour: #2fa35a
```

#### 241. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1432-L1434` → after: `L5296-L5297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5296-L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5296-L5297) · [Before (L1432-L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1432-L1434)

```diff
- .SchematicPage .TexturePackSection .TexturePackList .TexturePack {
-   height: auto;
-   width: auto
+ .SecretSantaTarget .SecretSantaDistrictName.District-cocoaCorner {
+   --district-colour: #a8693f
```

#### 242. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1437-L1438` → after: `L5300-L5301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5300-L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5300-L5301) · [Before (L1437-L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1437-L1438)

```diff
- .SchematicPage .TexturePackSection .TexturePackList .TexturePack .TexturePackName {
-   font-size: .95rem
+ .SecretSantaTarget .SecretSantaDistrictName.District-lanternWalk {
+   --district-colour: #e0414f
```

#### 243. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1441-L1442` → after: `L5304-L5305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5304-L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5304-L5305) · [Before (L1441-L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1441-L1442)

```diff
- .SchematicPage .TexturePackSection .TexturePackList .TexturePack .TexturePackAuthor {
-   display: none
+ .SecretSantaTarget .SecretSantaDistrictName.District-marketGate {
+   --district-colour: #e8c547
```

#### 244. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1445-L1449` → after: `L5308-L5309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5308-L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5308-L5309) · [Before (L1445-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1445-L1449)

```diff
- .TexturePackList {
-   grid-gap: 10px;
-   display: grid;
-   gap: 10px;
-   grid-template-columns: repeat(3, 1fr)
+ .SecretSantaTarget .SecretSantaDistrictName.District-santasGrotto {
+   --district-colour: #eef1f6
```

#### 245. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1452-L1461` → after: `L5312-L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5312-L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5312-L5316) · [Before (L1452-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1452-L1461)

```diff
- .TexturePackList .TexturePack {
-   aspect-ratio: 3/2;
-   border: 2px solid transparent;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   box-sizing: border-box;
-   cursor: pointer;
-   overflow: hidden;
-   position: relative;
-   transition: border .2s
+ .SecretSantaScarf {
+   --scarf-colour: #838383;
+   color: color-mix(in srgb, var(--scarf-colour) 55%, #fff);
+   font-weight: 800;
+   white-space: nowrap
```

#### 246. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1464-L1467` → after: `L5319-L5320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5319-L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5319-L5320) · [Before (L1464-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1464-L1467)

```diff
- @media(hover:hover) {
-   .TexturePackList .TexturePack:hover {
-     border: 2px solid rgba(255, 185, 20, .5)
-   }
+ .SecretSantaScarf.Scarf-red {
+   --scarf-colour: #e34f4f
```

#### 247. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1470-L1471` → after: `L5323-L5324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5323-L5324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5323-L5324) · [Before (L1470-L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1470-L1471)

```diff
- .TexturePackList .TexturePack.pad-focused {
-   border: 2px solid rgba(255, 185, 20, .5)
+ .SecretSantaScarf.Scarf-green {
+   --scarf-colour: #07940e
```

#### 248. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1474-L1477` → after: `L5327-L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5327-L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5327-L5328) · [Before (L1474-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1474-L1477)

```diff
- @media(hover:none) {
-   .TexturePackList .TexturePack:active {
-     border: 2px solid rgba(255, 185, 20, .5)
-   }
+ .SecretSantaScarf.Scarf-blue {
+   --scarf-colour: #2e80ee
```

#### 249. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1480-L1481` → after: `L5331-L5332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5331-L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5331-L5332) · [Before (L1480-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1480-L1481)

```diff
- .TexturePackList .TexturePack.Selected {
-   border: 2px solid #ffb914
+ .SecretSantaScarf.Scarf-gold {
+   --scarf-colour: #ffb914
```

#### 250. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1484-L1485` → after: `L5335-L5336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5335-L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5335-L5336) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1484-L1485)

```diff
- .TexturePackList .TexturePack.Disabled {
-   filter: grayscale(1)
+ .SecretSantaScarf.Scarf-white {
+   --scarf-colour: #f2f2f2
```

#### 251. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1488-L1495` → after: `L5339-L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5339-L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5339-L5347) · [Before (L1488-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1488-L1495)

```diff
- .TexturePackList .TexturePack .TexturePackBg {
-   background-position: 50%;
-   background-size: cover;
-   height: 100%;
-   left: 0;
-   position: absolute;
-   top: 0;
-   width: 100%
+ .SecretSantaScarf .SecretSantaScarfSwatch {
+   background: var(--scarf-colour);
+   border: 1px solid #0f0f0f;
+   box-sizing: border-box;
+   display: inline-block;
+   height: .85em;
+   margin: 0 .25em 0 .1em;
+   vertical-align: -.08em;
+   width: .85em
```

#### 252. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1498` → after: `L5350-L5352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5350-L5352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5350-L5352) · [Before (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1498)

```diff
- .TexturePackList .TexturePack .TexturePackName {
+ .SecretSantaMapPanel {
+   --ss-map-max: clamp(220px, 23rem, 400px);
+   container-type: size;
```

#### 253. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1500` → after: `L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5354) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1500)

```diff
-   background-color: rgba(0, 0, 0, .4);
+   bottom: max(var(--hud-safe-bottom, var(--notchBottom)) + 4.5rem, var(--ss-map-bottom, 0px));
```

#### 254. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1502-L1511` → after: `L5356-L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5356-L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5356-L5362) · [Before (L1502-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1502-L1511)

```diff
-   font-size: 1.4rem;
-   font-weight: 700;
-   height: 100%;
-   justify-content: center;
-   left: 0;
-   position: absolute;
-   text-align: center;
-   top: 0;
-   white-space: pre-line;
-   width: 100%
+   justify-content: flex-end;
+   pointer-events: none;
+   position: fixed;
+   right: calc(var(--hud-safe-right, var(--notchRight)) + .5rem);
+   top: max(var(--hud-safe-top, var(--notchTop)) + 4.5rem, var(--ss-map-top, 0px));
+   width: var(--ss-map-max);
+   z-index: 0
```

#### 255. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1514-L1519` → after: `L5365-L5370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5365-L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5365-L5370) · [Before (L1514-L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1514-L1519)

```diff
- .TexturePackList .TexturePack .TexturePackAuthor {
-   bottom: .2rem;
-   font-size: 1rem;
-   opacity: .6;
-   position: absolute;
-   right: .5rem
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaMapPanel {
+     --ss-map-max: min(46vh, 180px);
+     bottom: max(var(--hud-safe-bottom, var(--notchBottom)) + .5rem, var(--ss-map-bottom, 0px));
+     top: max(var(--hud-safe-top, var(--notchTop)) + 3.5rem, var(--ss-map-top, 0px))
+   }
```

#### 256. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1522-L1528` → after: `L5373-L5376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5373-L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5373-L5376) · [Before (L1522-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1522-L1528)

```diff
- .SegmentedToggle {
-   background-color: #3c4b68;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   display: flex;
-   flex-shrink: 0
+ @media(orientation:portrait)and (max-width:600px) {
+   .SecretSantaMapPanel {
+     --ss-map-max: min(38vw, 150px)
+   }
```

#### 257. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1531-L1539` → after: `L5379-L5380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5379-L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5379-L5380) · [Before (L1531-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1531-L1539)

```diff
- .SegmentedToggle .SegmentedToggleOption {
-   background: none;
-   border: none;
-   color: #cfcfcf;
-   cursor: pointer;
-   font: inherit;
-   min-width: 5.5em;
-   padding: .4em 1em;
-   position: relative
+ .SecretSantaMapPanel .SecretSantaMinimap {
+   --ss-map-size: max(min(100cqw, 100cqh), 80px)
```

#### 258. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1542-L1546` → after: `L5383-L5385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5383-L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5383-L5385) · [Before (L1542-L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1542-L1546)

```diff
- @media(pointer:coarse) {
-   .SegmentedToggle .SegmentedToggleOption:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
+ @supports not (width:1cqw) {
+   .SecretSantaMapPanel .SecretSantaMinimap {
+     --ss-map-size: var(--ss-map-max)
```

#### 259. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1550-L1555` → after: `L5389-L5396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5389-L5396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5389-L5396) · [Before (L1550-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1550-L1555)

```diff
- .SegmentedToggle .SegmentedToggleOption:before {
-   inset-inline: 0
- }
- 
- .SegmentedToggle .SegmentedToggleOption:not(:first-child) {
-   border-left: 1px solid #0f0f0f
+ .SecretSantaFlash {
+   background: #eef4ff;
+   inset: 0;
+   opacity: 0;
+   pointer-events: none;
+   position: fixed;
+   visibility: visible;
+   z-index: -1
```

#### 260. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1558-L1562` → after: `L5399-L5408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5399-L5408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5399-L5408) · [Before (L1558-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1558-L1562)

```diff
- @media(hover:hover) {
-   .SegmentedToggle .SegmentedToggleOption:hover {
-     background-color: #394980;
-     color: #fff
-   }
+ .SecretSantaRing {
+   display: none;
+   height: max(3.4rem, 40px);
+   left: 50%;
+   pointer-events: none;
+   position: fixed;
+   top: 50%;
+   translate: -50% -50%;
+   width: max(3.4rem, 40px);
+   z-index: 1
```

#### 261. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1565-L1567` → after: `L5411-L5416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5411-L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5411-L5416) · [Before (L1565-L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1565-L1567)

```diff
- .SegmentedToggle .SegmentedToggleOption.pad-focused {
-   background-color: #394980;
-   color: #fff
+ .SecretSantaRing svg {
+   display: block;
+   height: 100%;
+   overflow: visible;
+   rotate: -90deg;
+   width: 100%
```

#### 262. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1570-L1574` → after: `L5419-L5421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5419-L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5419-L5421) · [Before (L1570-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1570-L1574)

```diff
- @media(hover:none) {
-   .SegmentedToggle .SegmentedToggleOption:active {
-     background-color: #394980;
-     color: #fff
-   }
+ .SecretSantaRing circle {
+   fill: none;
+   stroke-width: 3.5
```

#### 263. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1577-L1579` → after: `L5424-L5425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5424-L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5424-L5425) · [Before (L1577-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1577-L1579)

```diff
- .SegmentedToggle .SegmentedToggleOption:focus-visible {
-   outline: 2px solid #ffb914;
-   outline-offset: -2px
+ .SecretSantaRing .SecretSantaRingTrack {
+   stroke: rgba(26, 31, 46, .6)
```

#### 264. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1582-L1585` → after: `L5428-L5430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5428-L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5428-L5430) · [Before (L1582-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1582-L1585)

```diff
- .SegmentedToggle .SegmentedToggleOption.SegmentedToggleOptionSelected {
-   background-color: #2e80ee;
-   color: #fff;
-   cursor: default
+ .SecretSantaRing .SecretSantaRingFill {
+   stroke: #ffb914;
+   stroke-linecap: round
```

#### 265. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1588-L1595` → after: `L5433-L5435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5433-L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5433-L5435) · [Before (L1588-L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1588-L1595)

```diff
- .CustomTexturePackContainer {
-   border: 1px solid #ffb914;
-   border-radius: 0;
-   box-sizing: border-box;
-   flex-shrink: 0;
-   margin-top: 2rem;
-   overflow: hidden;
-   width: 100%
+ .SecretSantaRing.Naughty,
+ .SecretSantaRing.Wrapping {
+   display: block
```

#### 266. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1598-L1603` → after: `L5438-L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5438-L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5438-L5439) · [Before (L1598-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1598-L1603)

```diff
- .CustomTexturePackContainer .CustomTextureWarning {
-   background-color: #ffb914;
-   color: #000;
-   font-size: 1rem;
-   padding: .4rem .5rem;
-   text-shadow: 0 0 0 #000
+ .SecretSantaRing.Naughty .SecretSantaRingFill {
+   stroke: #e34f4f
```

#### 267. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1606-L1611` → after: `L5442-L5443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5442-L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5442-L5443) · [Before (L1606-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1606-L1611)

```diff
- .CustomTexturePackContainer .CustomTextureError {
-   background-color: #e34f4f;
-   color: #fff;
-   font-size: 1rem;
-   padding: .4rem .5rem;
-   text-shadow: 0 0 0 #000
+ .SecretSantaRing.Cancelled .SecretSantaRingFill {
+   stroke: #cfcfcf
```

#### 268. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1614` → after: `L5446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5446) · [Before (L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1614)

```diff
- .CustomTexturePackContainer .CustomTextureFolderUpload {
+ .SecretSantaRing .SecretSantaNaughty {
```

#### 269. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1618-L1621` → after: `L5455-L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5455-L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5455-L5462) · [Before (L1618-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1618-L1621)

```diff
-   gap: 1rem;
-   justify-content: center;
-   min-height: 8rem;
-   padding: 2rem 1rem
+   font-size: max(1rem, 12px);
+   left: 50%;
+   line-height: 1.25;
+   padding: .25rem .6rem;
+   position: absolute;
+   top: calc(100% + .4rem);
+   translate: -50% 0;
+   white-space: nowrap
```

#### 270. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1624-L1628` → after: `L5465-L5471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5465-L5471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5465-L5471) · [Before (L1624-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1624-L1628)

```diff
- .CustomTexturePackContainer .CustomTextureFolderUpload .CustomTextureFolderUploadIcon {
-   font-size: 3rem;
-   opacity: .4;
-   text-shadow: 0 0 0 #000;
-   transition: opacity .3s
+ @media(orientation:landscape)and (max-height:500px)and (pointer:coarse) {
+   html:not(.HudMove-interact) body.SecretSantaMatchOrFinish .SecretSantaRing .SecretSantaNaughty {
+     left: auto;
+     right: calc(100% + .4rem);
+     top: calc(50% + .4rem);
+     translate: none
+   }
```

#### 271. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1631-L1633` → after: `L5474-L5476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5474-L5476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5474-L5476) · [Before (L1631-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1631-L1633)

```diff
- .CustomTexturePackContainer .CustomTextureFolderUpload .CustomTextureFolderUploadIcon.Active {
-   color: #4f94f1;
-   opacity: 1
+ .SecretSantaRing .SecretSantaNaughtyTitle {
+   color: #ff8a80;
+   font-size: 1.15em
```

#### 272. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1636-L1639` → after: `L5479-L5490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5479-L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5479-L5490) · [Before (L1636-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1636-L1639)

```diff
- .CustomTexturePackContainer .CustomTextureFolderUpload .CustomTextureFolderUploadInstructions {
-   color: #cfcfcf;
-   font-size: 1.2rem;
-   text-align: center
+ @keyframes secretSantaPop {
+   0% {
+     transform: scale(1)
+   }
+ 
+   40% {
+     transform: scale(1.25)
+   }
+ 
+   to {
+     transform: scale(1)
+   }
```

#### 273. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1642-L1643` → after: `L5493-L5497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5493-L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5493-L5497) · [Before (L1642-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1642-L1643)

```diff
- .CustomTexturePackContainer .CustomTextureFolderUpload .CustomTextureFolderUploadInstructions.Active {
-   color: #fff
+ body.SecretSantaMode:not(.SecretSantaHudShown) .InGameUi .RightInfoDivContainer .RightInfoDiv {
+   background: rgba(38, 52, 93, .85);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32)
```

#### 274. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1646-L1647` → after: `L5500-L5503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5500-L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5500-L5503) · [Before (L1646-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1646-L1647)

```diff
- .CustomTexturePackContainer .CustomTextureFolderUpload.ActiveDrag .CustomTextureFolderUploadIcon {
-   opacity: 1
+ body.SecretSantaMode:not(.SecretSantaHudShown) .InGameUi .RightInfoDivContainer .RightInfoDiv .RightInfoDivInner {
+   font-size: max(1.15rem, 13px);
+   line-height: 1.35;
+   padding: .6rem .9rem
```

#### 275. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1650-L1651` → after: `L5506-L5511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5506-L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5506-L5511) · [Before (L1650-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1650-L1651)

```diff
- .CustomTexturePackContainer .CustomTextureFolderUpload.ActiveDrag .CustomTextureFolderUploadInstructions {
-   color: #fff
+ @media(orientation:landscape)and (max-height:500px) {
+   body.SecretSantaMode:not(.SecretSantaHudShown) .InGameUi .RightInfoDivContainer .RightInfoDiv .RightInfoDivInner {
+     font-size: max(.95rem, 11px);
+     line-height: 1.25;
+     padding: .4rem .6rem
+   }
```

#### 276. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1654-L1656` → after: `L5514-L5529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5514-L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5514-L5529) · [Before (L1654-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1654-L1656)

```diff
- .CustomTexturePackContainer .CustomTextureFolderUpload.Disabled {
-   opacity: .5;
-   pointer-events: none
+ @media(orientation:portrait)and (max-width:600px) {
+   body.SecretSantaMode:not(.SecretSantaHudShown) .InGameUi .RightInfoDivContainer .RightInfoDiv .RightInfoDivInner {
+     font-size: max(.95rem, 11px);
+     line-height: 1.25;
+     padding: .4rem .6rem
+   }
+ 
+   body.SecretSantaMode:not(.SecretSantaHudShown) .InGameUi .RightInfoDivContainer .RightInfoDiv {
+     background: #22283b;
+     margin: 0;
+     max-height: none;
+     max-width: calc(100vw - var(--notchRight) - 66px);
+     position: fixed;
+     right: calc(var(--notchRight) + 58px);
+     top: calc(var(--notchTop) + 40px)
+   }
```

#### 277. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1659-L1663` → after: `L5532-L5552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5532-L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5532-L5552) · [Before (L1659-L1663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1659-L1663)

```diff
- .PackPickButtons {
-   display: flex;
-   flex-wrap: wrap;
-   gap: .75rem;
-   justify-content: center
+ @media(orientation:portrait)and (max-width:600px) {
+   body.SecretSantaMode:not(.SecretSantaHudShown) .InGameUi:has(.Chat.Chatting) .RightInfoDivContainer .RightInfoDiv {
+     visibility: hidden
+   }
+ }
+ 
+ body.SecretSantaMode .InGameUi.HiddenByCamera .TouchComponentsButtons,
+ body.SecretSantaMode .InGameUi.HiddenByCamera .TouchInteractHit,
+ body.SecretSantaMode .InGameUi.HiddenByCamera .TouchMovementWrapper,
+ body.SecretSantaMode .InGameUi[data-camera-fade] .TouchComponentsButtons,
+ body.SecretSantaMode .InGameUi[data-camera-fade] .TouchInteractHit,
+ body.SecretSantaMode .InGameUi[data-camera-fade] .TouchMovementWrapper,
+ body.SecretSantaPodium .InGameUi .Chat:not(.Chatting) .ChatMessages,
+ body.SecretSantaPodium .InGameUi .EffectInfosWrapper,
+ body.SecretSantaPodium .InGameUi .HotBarRow,
+ body.SecretSantaPodium .InGameUi .RespawnBackgroundScreen,
+ ... (5 more added lines; see GitHub link above)
```

#### 278. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1765` → after: `L5654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5654) · [Before (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1765)

```diff
- .LabeledInput.GameCategory .GameCategoryOptions {
+ .SecretSantaSnowTitle {
```

#### 279. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1767` → after: `L5656-L5666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5656-L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5656-L5666) · [Before (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1767)

```diff
-   background-color: #303a59;
+   display: none;
+   inset: 0;
+   justify-content: center;
+   opacity: 0;
+   padding-bottom: 8vh;
+   pointer-events: none;
+   position: fixed
+ }
+ 
+ .SecretSantaSnowTitle .SecretSantaSnowTitleCard {
+   background: rgba(38, 52, 93, .85);
```

#### 280. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1770-L1776` → after: `L5669-L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5669-L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5669-L5720) · [Before (L1770-L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1770-L1776)

```diff
-   border-bottom-left-radius: 0;
-   border-top-left-radius: 0;
-   display: flex;
-   flex-wrap: wrap;
-   gap: .4rem;
-   max-width: 32rem;
-   padding: .4rem
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   box-sizing: border-box;
+   color: #fff;
+   max-width: 92vw;
+   padding: 1rem 1.8rem 1.1rem;
+   text-align: center
+ }
+ 
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaSnowTitle .SecretSantaSnowTitleCard {
+     padding: .6rem 1.2rem .7rem
+   }
+ }
+ 
+ .SecretSantaSnowTitle .SecretSantaSnowTitleName {
+   color: #ffb914;
+ ... (36 more added lines; see GitHub link above)
```

#### 281. `bundles/bloxd.io/chunks/css/107.css` (Changed code · before: `L1779-L1780` → after: `L5723-L5727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770R5723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-63c97ae3d3a96342f8c4187c6e7542882ed69a1141dcaf5a9b40d2f214c60770) · [After (L5723-L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/107.css#L5723-L5727) · [Before (L1779-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/107.css#L1779-L1780)

```diff
- .LabeledInput.GameCategory .GameCategoryOptions .SecondaryButton {
-   font-size: 1.1rem
+ @media(orientation:landscape)and (max-height:500px) {
+   .SecretSantaSnowTitle .SecretSantaSnowTitleLine {
+     font-size: max(1.15rem, 14px);
+     margin-top: .3rem
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/123.css` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/css/123.css` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3c921d80324a0c3441e0e154ea2d7ff9724dd34f66d49f849eae3d26233a74f0)

#### 1. `bundles/bloxd.io/chunks/css/123.css` (Changed code · before: `L1-L22` → after: `L1-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3c921d80324a0c3441e0e154ea2d7ff9724dd34f66d49f849eae3d26233a74f0R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3c921d80324a0c3441e0e154ea2d7ff9724dd34f66d49f849eae3d26233a74f0) · [After (L1-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/123.css#L1-L277) · [Before (L1-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/123.css#L1-L22)

```diff
- .GameInformation {
-   display: flex;
-   flex-direction: column;
-   flex-grow: 1;
-   isolation: isolate;
-   z-index: 1
- }
- 
- .GameInformation.GameInformationFadeIn {
-   animation-duration: .3s;
-   animation-duration: .2s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: fadeIn;
-   isolation: isolate
- }
- ... (6 more removed lines; see GitHub link above)
+ .ShaderPackPublishPage {
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   margin: 0 auto;
+   max-width: 50rem;
+   padding-bottom: 1rem;
+   width: 100%
+ }
+ 
+ .ShaderPackPublishPage .ShaderPackPublishBack {
+   align-items: center;
+   display: flex;
+   padding: .6rem .75rem
+ }
+ 
+ ... (261 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/123.css` (Changed code · before: `L26-L423` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3c921d80324a0c3441e0e154ea2d7ff9724dd34f66d49f849eae3d26233a74f0R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3c921d80324a0c3441e0e154ea2d7ff9724dd34f66d49f849eae3d26233a74f0) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/123.css#L281) · [Before (L26-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/123.css#L26-L423)

```diff
- .GameInformation .GameInformationInner {
-   align-items: flex-start;
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   flex-grow: 1;
-   left: 0;
-   top: 0;
-   width: 100%
- }
- 
- .GameInformation .GameInformationInner:has(>.GameInformationBottom) .GameInformationTop .GameInformationTopLeft .GameInformationTopLeftBody:after {
-   min-height: 0
- }
- 
- .GameInformation .GameInformationInner .LobbyCollection {
- ... (382 more removed lines; see GitHub link above)
+ .PackPickButtons {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/css/92.css` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/css/92.css` (574 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600)

#### 1. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L1-L3` → after: `L1-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L1-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L1-L86) · [Before (L1-L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L1-L3)

```diff
- .StudioAiAnswerText {
-   font-size: 1.1rem;
-   line-height: 1.5;
+ .DocsSite[data-theme=dark] {
+   --docs-bg: #141414;
+   --docs-surface: #1b1b1b;
+   --docs-raised: #222;
+   --docs-border: hsla(0, 0%, 100%, .08);
+   --docs-border-strong: hsla(0, 0%, 100%, .15);
+   --docs-text: #ececec;
+   --docs-text-muted: #a3a3a3;
+   --docs-text-faint: #6f6f6f;
+   --docs-accent: #ffb914;
+   --docs-accent-hover: #fcd373;
+   --docs-accent-bevel-top: #fcd373;
+   --docs-accent-bevel-bottom: #b6830e;
+   --docs-accent-text: #ffb914;
+   --docs-accent-soft: rgba(255, 185, 20, .1);
+   --docs-on-accent: #141414;
+ ... (70 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L8-L18` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L91-L92) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L8-L18)

```diff
- .StudioAiAnswerText h3,
- .StudioAiAnswerText h4 {
-   margin: 1rem 0 .25rem
- }
- 
- .StudioAiAnswerText h3 {
-   font-size: 1.4rem
- }
- 
- .StudioAiAnswerText h4 {
-   font-size: 1.2rem
+ .DocsSite.Embedded {
+   height: 100%
```

#### 3. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L21-L24` → after: `L95-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L95-L98) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L21-L24)

```diff
- .StudioAiAnswerText ol,
- .StudioAiAnswerText p,
- .StudioAiAnswerText ul {
-   margin: .4rem 0
+ .DocsSite *,
+ .DocsSite :after,
+ .DocsSite :before {
+   box-sizing: border-box
```

#### 4. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L27-L29` → after: `L101-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L101-L103) · [Before (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L27-L29)

```diff
- .StudioAiAnswerText ol,
- .StudioAiAnswerText ul {
-   padding-left: 1.5rem
+ .DocsSite a {
+   color: var(--docs-link);
+   text-decoration: none
```

#### 5. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L32-L35` → after: `L106-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L106-L109) · [Before (L32-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L32-L35)

```diff
- .StudioAiAnswerText code {
-   background-color: #303a59;
-   overflow-wrap: anywhere;
-   padding: 0 .2rem
+ @media(hover:hover) {
+   .DocsSite a:hover {
+     text-decoration: underline
+   }
```

#### 6. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L38-L39` → after: `L112-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L112-L113) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L38-L39)

```diff
- .StudioAiAnswerText table {
-   border-collapse: collapse
+ .DocsSite a.pad-focused {
+   text-decoration: underline
```

#### 7. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L42-L45` → after: `L116-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L116-L119) · [Before (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L42-L45)

```diff
- .StudioAiAnswerText table td,
- .StudioAiAnswerText table th {
-   border: 1px solid #303a59;
-   padding: .2rem .5rem
+ .DocsSite button {
+   color: inherit;
+   cursor: pointer;
+   font: inherit
```

#### 8. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L48-L50` → after: `L122-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L122-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L122-L124) · [Before (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L48-L50)

```diff
- .StudioAiAnswerSummary p {
-   font-weight: 700;
-   margin-top: 0
+ .DocsSite :focus-visible {
+   outline: 2px solid var(--docs-accent);
+   outline-offset: 2px
```

#### 9. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L53-L57` → after: `L127-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L127-L128) · [Before (L53-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L53-L57)

```diff
- .StudioAiAnswerText p.StudioAiKidGoingWell {
-   align-items: baseline;
-   display: flex;
-   gap: .5rem;
-   margin: .4rem 0 .6rem
+ .DocsSite input:not([type=range], [type=color]):focus-visible {
+   outline: none
```

#### 10. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L60-L62` → after: `L131-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L131-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L131-L138) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L60-L62)

```diff
- .StudioAiAnswerText p.StudioAiKidGoingWell svg {
-   color: #1dd06d;
-   flex-shrink: 0
+ .DocsSite kbd {
+   background: var(--docs-surface);
+   border: 1px solid var(--docs-border-strong);
+   color: var(--docs-text-muted);
+   font-family: var(--docs-font);
+   font-size: calc(var(--docs-unit)*.72);
+   font-weight: 600;
+   padding: calc(var(--docs-unit)*.1) calc(var(--docs-unit)*.4)
```

#### 11. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L65` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L141) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L65)

```diff
- .StudioAiAnswerSection h3 {
+ .DocsIconButton {
```

#### 12. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L67-L72` → after: `L143-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L143-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L143-L149) · [Before (L67-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L67-L72)

```diff
-   display: flex;
-   gap: .5rem
- }
- 
- .StudioAiAnswerSection-goingWell h3 svg {
-   color: #1dd06d
+   background: transparent;
+   border: 1px solid transparent;
+   color: var(--docs-text-muted);
+   display: inline-flex;
+   height: calc(var(--docs-unit)*2.25);
+   justify-content: center;
+   width: calc(var(--docs-unit)*2.25)
```

#### 13. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L75-L76` → after: `L152-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L152-L156) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L75-L76)

```diff
- .StudioAiAnswerSection-fixFirst h3 svg {
-   color: #fcd373
+ @media(hover:hover) {
+   .DocsIconButton:hover {
+     background: var(--docs-surface);
+     color: var(--docs-text)
+   }
```

#### 14. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L79-L80` → after: `L159-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L159-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L159-L161) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L79-L80)

```diff
- .StudioAiAnswerSection-tryNext h3 svg {
-   color: #85baff
+ .DocsIconButton.pad-focused {
+   background: var(--docs-surface);
+   color: var(--docs-text)
```

#### 15. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L83-L87` → after: `L164-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L164-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L164-L168) · [Before (L83-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L83-L87)

```diff
- .StudioAiNextChange {
-   background-color: rgba(57, 73, 128, .4);
-   border: 2px solid rgba(255, 185, 20, .35);
-   margin: .5rem 0 .75rem;
-   padding: .6rem .9rem
+ @media(hover:none) {
+   .DocsIconButton:active {
+     background: var(--docs-surface);
+     color: var(--docs-text)
+   }
```

#### 16. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L90` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L171) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L90)

```diff
- .StudioAiNextChange h4 {
+ .DocsTopBar {
```

#### 17. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L93-L99` → after: `L176-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L176-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L176-L181) · [Before (L93-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L93-L99)

```diff
-   font-size: 1.15rem;
-   gap: .5rem;
-   margin: 0 0 .35rem
- }
- 
- .StudioAiNextChange h4 svg {
-   color: #ffb914
+   gap: calc(var(--docs-unit)*1);
+   height: calc(var(--docs-unit)*3.75);
+   padding: 0 calc(var(--docs-unit)*1.25);
+   position: sticky;
+   top: 0;
+   z-index: 4
```

#### 18. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L102-L103` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L184-L185) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L102-L103)

```diff
- .StudioAiNextChange>:last-child {
-   margin-bottom: 0
+ .DocsTopBar .DocsMenuButton {
+   display: none
```

#### 19. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L106-L107` → after: `L188-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L188-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L188-L193) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L106-L107)

```diff
- .StudioAiNextChange strong {
-   color: #fff
+ .DocsTopBar .DocsBrand {
+   align-items: center;
+   color: var(--docs-text);
+   display: flex;
+   flex-shrink: 0;
+   gap: calc(var(--docs-unit)*.6)
```

#### 20. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L110-L116` → after: `L196-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L196-L199) · [Before (L110-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L110-L116)

```diff
- .StudioAiNextChangeProgress {
-   border: 1px solid hsla(0, 0%, 95%, .1);
-   color: #cfcfcf;
-   font-size: .9rem;
-   font-weight: 700;
-   margin-left: auto;
-   padding: 0 .6rem
+ @media(hover:hover) {
+   .DocsTopBar .DocsBrand:hover {
+     text-decoration: none
+   }
```

#### 21. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L119-L121` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L202-L203) · [Before (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L119-L121)

```diff
- .StudioAiNextChangeProgress.StudioAiNextChangeProgressDone {
-   border-color: #1dd06d;
-   color: #1dd06d
+ .DocsTopBar .DocsBrand.pad-focused {
+   text-decoration: none
```

#### 22. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L124-L126` → after: `L206-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L206-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L206-L209) · [Before (L124-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L124-L126)

```diff
- .StudioAiAnswerText ol.StudioAiNextChangeSteps {
-   list-style: none;
-   padding-left: 0
+ .DocsTopBar .DocsBrand .DocsBrandName {
+   font-size: calc(var(--docs-unit)*1.1);
+   font-weight: 800;
+   letter-spacing: -.01em
```

#### 23. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L129-L130` → after: `L212-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L212-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L212-L217) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L129-L130)

```diff
- .StudioAiNextChangeStep {
-   margin: .3rem 0
+ .DocsTopBar .DocsBrand .DocsBrandTag {
+   background: var(--docs-accent-soft);
+   color: var(--docs-accent-text);
+   font-size: calc(var(--docs-unit)*.75);
+   font-weight: 700;
+   padding: calc(var(--docs-unit)*.15) calc(var(--docs-unit)*.5)
```

#### 24. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L133-L135` → after: `L220-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L220-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L220-L224) · [Before (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L133-L135)

```diff
- .StudioAiNextChangeStep>label {
-   align-items: flex-start;
-   cursor: pointer;
+ .DocsTopBar .DocsSearchTrigger {
+   align-items: center;
+   background: var(--docs-surface);
+   border: 1px solid var(--docs-border-strong);
+   color: var(--docs-text-faint);
```

#### 25. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L137` → after: `L226-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L226-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L226-L232) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L137)

```diff
-   gap: .6rem
+   flex: 0 1 calc(var(--docs-unit)*22);
+   font-size: calc(var(--docs-unit)*.9);
+   gap: calc(var(--docs-unit)*.6);
+   height: calc(var(--docs-unit)*2.35);
+   margin-left: auto;
+   padding: 0 calc(var(--docs-unit)*.6) 0 calc(var(--docs-unit)*.8);
+   text-align: left
```

#### 26. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L140-L146` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L235-L236) · [Before (L140-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L140-L146)

```diff
- .StudioAiNextChangeStep input {
-   accent-color: #1dd06d;
-   cursor: pointer;
-   flex-shrink: 0;
-   height: 1.15rem;
-   margin: .2rem 0 0;
-   width: 1.15rem
+ .DocsTopBar .DocsSearchTrigger .DocsSearchTriggerLabel {
+   flex: 1 1
```

#### 27. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L149-L151` → after: `L239-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L239-L243) · [Before (L149-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L149-L151)

```diff
- .StudioAiNextChangeStep.StudioAiNextChangeStepDone>label>span {
-   color: #a4a4a4;
-   text-decoration: line-through
+ @media(hover:hover) {
+   .DocsTopBar .DocsSearchTrigger:hover {
+     border-color: var(--docs-accent);
+     color: var(--docs-text-muted)
+   }
```

#### 28. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L154-L160` → after: `L246-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L246-L248) · [Before (L154-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L154-L160)

```diff
- .StudioAiAnswerText p.StudioAiNextChangeTarget {
-   align-items: baseline;
-   border-top: 1px solid hsla(0, 0%, 95%, .1);
-   display: flex;
-   gap: .6rem;
-   margin-top: .5rem;
-   padding-top: .45rem
+ .DocsTopBar .DocsSearchTrigger.pad-focused {
+   border-color: var(--docs-accent);
+   color: var(--docs-text-muted)
```

#### 29. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L163-L165` → after: `L251-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L251-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L251-L255) · [Before (L163-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L163-L165)

```diff
- .StudioAiAnswerText p.StudioAiNextChangeTarget svg {
-   color: #1dd06d;
-   flex-shrink: 0
+ @media(hover:none) {
+   .DocsTopBar .DocsSearchTrigger:active {
+     border-color: var(--docs-accent);
+     color: var(--docs-text-muted)
+   }
```

#### 30. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L168-L169` → after: `L258-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L258-L259) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L168-L169)

```diff
- .StudioAiAnswerText p.StudioAiNextChangeThen {
-   align-items: baseline;
+ .DocsTopBar .DocsTopBarLinks {
+   align-items: center;
```

#### 31. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L171-L177` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L261) · [Before (L171-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L171-L177)

```diff
-   gap: .6rem;
-   margin-top: .5rem
- }
- 
- .StudioAiAnswerText p.StudioAiNextChangeThen svg {
-   color: #85baff;
-   flex-shrink: 0
+   gap: calc(var(--docs-unit)*.25)
```

#### 32. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L180-L185` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L264) · [Before (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L180-L185)

```diff
- .StudioAiNextChange .StudioAiNextChangeCode {
-   background-color: #303a59;
-   margin: .5rem 0
- }
- 
- .StudioAiNextChange .StudioAiNextChangeCode .StudioAiTrackLineHeader>span {
+ .DocsTopBar .DocsTopBarLink {
```

#### 33. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L187` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L266) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L187)

```diff
-   color: #cfcfcf;
+   color: var(--docs-text-muted);
```

#### 34. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L189-L200` → after: `L268-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L268-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L268-L271) · [Before (L189-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L189-L200)

```diff
-   gap: .4rem
- }
- 
- .StudioAiNextChange .StudioAiNextChangeCode pre {
-   font-size: 1.05em
- }
- 
- .StudioAiAnswerText p.StudioAiNextChangeCodeCheck,
- .StudioAiAnswerText p.StudioAiNextChangeWhere {
-   font-size: .95em;
-   margin: .4rem 0 0;
-   overflow-wrap: anywhere
+   font-size: calc(var(--docs-unit)*.9);
+   font-weight: 600;
+   gap: calc(var(--docs-unit)*.45);
+   padding: calc(var(--docs-unit)*.45) calc(var(--docs-unit)*.7)
```

#### 35. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L203-L204` → after: `L274-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L274-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L274-L279) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L203-L204)

```diff
- .StudioAiAnswerText p.StudioAiNextChangeCodeCheck {
-   color: #fcd373
+ @media(hover:hover) {
+   .DocsTopBar .DocsTopBarLink:hover {
+     background: var(--docs-surface);
+     color: var(--docs-text);
+     text-decoration: none
+   }
```

#### 36. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L207-L208` → after: `L282-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L282-L285) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L207-L208)

```diff
- .StudioAiAnswerText p.StudioAiNextChangeCodeCheck.StudioAiNextChangeCodeAdd {
-   color: inherit
+ .DocsTopBar .DocsTopBarLink.pad-focused {
+   background: var(--docs-surface);
+   color: var(--docs-text);
+   text-decoration: none
```

#### 37. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L211-L213` → after: `L288-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L288-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L288-L293) · [Before (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L211-L213)

```diff
- .StudioAiNextChangeCode p.StudioAiNextChangeWhere {
-   border-top: 1px dashed hsla(0, 0%, 95%, .1);
-   padding-top: .35rem
+ @media(hover:none) {
+   .DocsTopBar .DocsTopBarLink:active {
+     background: var(--docs-surface);
+     color: var(--docs-text);
+     text-decoration: none
+   }
```

#### 38. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L216-L218` → after: `L296-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L296-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L296-L304) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L216-L218)

```diff
- .StudioAiNextChangeTitle {
-   color: #fff;
-   font-weight: 700
+ .DocsTopBar .DocsTopBarLink.DocsPlayLink {
+   background: var(--docs-accent);
+   border: 1px solid var(--docs-button-border);
+   border-radius: 0;
+   box-shadow: inset 0 .21em 0 var(--docs-accent-bevel-top), inset 0 -.21em 0 var(--docs-accent-bevel-bottom), var(--docs-shadow);
+   color: var(--docs-on-accent);
+   font-weight: 700;
+   margin-left: calc(var(--docs-unit)*.5);
+   padding: calc(var(--docs-unit)*.5) calc(var(--docs-unit)*.9)
```

#### 39. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L221-L224` → after: `L307-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L307-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L307-L312) · [Before (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L221-L224)

```diff
- .StudioAiNextChangeBasis {
-   color: #cfcfcf;
-   font-size: .9rem;
-   white-space: normal
+ @media(hover:hover) {
+   .DocsTopBar .DocsTopBarLink.DocsPlayLink:hover {
+     background: var(--docs-accent-hover);
+     color: var(--docs-on-accent);
+     text-decoration: none
+   }
```

#### 40. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L227-L230` → after: `L315-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L315-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L315-L318) · [Before (L227-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L227-L230)

```diff
- .StudioAiCheckPlan {
-   border: 1px dashed hsla(0, 0%, 95%, .1);
-   margin-top: .5rem;
-   padding: .45rem .75rem
+ .DocsTopBar .DocsTopBarLink.DocsPlayLink.pad-focused {
+   background: var(--docs-accent-hover);
+   color: var(--docs-on-accent);
+   text-decoration: none
```

#### 41. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L233-L235` → after: `L321-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L321-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L321-L326) · [Before (L233-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L233-L235)

```diff
- .StudioAiCheckPlan p {
-   margin: .2rem 0 0;
-   overflow-wrap: anywhere
+ @media(hover:none) {
+   .DocsTopBar .DocsTopBarLink.DocsPlayLink:active {
+     background: var(--docs-accent-hover);
+     color: var(--docs-on-accent);
+     text-decoration: none
+   }
```

#### 42. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L238-L243` → after: `L329-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L329-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L329-L336) · [Before (L238-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L238-L243)

```diff
- .StudioAiCheckPlan p.StudioAiCheckPlanTitle {
-   align-items: center;
-   display: flex;
-   font-weight: 700;
-   gap: .5rem;
-   margin: 0
+ .DocsSiteBody {
+   grid-gap: calc(var(--docs-unit)*2.5);
+   display: grid;
+   gap: calc(var(--docs-unit)*2.5);
+   grid-template-columns: calc(var(--docs-unit)*16) minmax(0, 1fr) calc(var(--docs-unit)*15);
+   margin: 0 auto;
+   max-width: calc(var(--docs-unit)*90);
+   padding: 0 calc(var(--docs-unit)*1.5)
```

#### 43. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L246-L247` → after: `L339-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L339-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L339-L347) · [Before (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L246-L247)

```diff
- .StudioAiCheckPlan p.StudioAiCheckPlanTitle svg {
-   color: #1dd06d
+ .DocsSidebar,
+ .DocsToc {
+   align-self: flex-start;
+   max-height: calc(100dvh - var(--docs-unit)*3.75);
+   overflow-y: auto;
+   padding: calc(var(--docs-unit)*1.75) 0 calc(var(--docs-unit)*2);
+   position: sticky;
+   scrollbar-width: thin;
+   top: calc(var(--docs-unit)*3.75)
```

#### 44. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L250-L252` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L350-L351) · [Before (L250-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L250-L252)

```diff
- .StudioAiCheckPlan p.StudioAiCheckPlanOneLine {
-   align-items: baseline;
-   font-weight: inherit
+ .DocsSite.Embedded {
+   container-type: size
```

#### 45. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L255-L256` → after: `L354-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L354-L356) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L255-L256)

```diff
- .StudioAiCheckPlan p.StudioAiCheckPlanOneLine svg {
-   flex-shrink: 0
+ .DocsSite.Embedded .DocsSidebar,
+ .DocsSite.Embedded .DocsToc {
+   max-height: calc(100cqh - var(--docs-unit)*3.75)
```

#### 46. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L259-L261` → after: `L359-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L359-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L359-L362) · [Before (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L259-L261)

```diff
- .StudioAiCheckPlan p.StudioAiCheckPlanUndo {
-   color: #cfcfcf;
-   font-size: .95em
+ .DocsNav {
+   display: flex;
+   flex-direction: column;
+   gap: calc(var(--docs-unit)*1.5)
```

#### 47. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L264-L268` → after: `L365-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L365-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L365-L371) · [Before (L264-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L264-L268)

```diff
- .StudioAiAnswerText .StudioAiDataFacts {
-   background-color: rgba(57, 73, 128, .4);
-   border-left: .3rem solid #85baff;
-   margin: .6rem 0;
-   padding: .45rem .75rem
+ .DocsNav .DocsNavGroupTitle {
+   color: var(--docs-text-faint);
+   font-size: calc(var(--docs-unit)*.72);
+   font-weight: 700;
+   letter-spacing: .08em;
+   padding: 0 calc(var(--docs-unit)*.75) calc(var(--docs-unit)*.4);
+   text-transform: uppercase
```

#### 48. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L271` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L374) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L271)

```diff
- .StudioAiAnswerText .StudioAiDataFacts p.StudioAiDataFactsTitle {
+ .DocsNav .DocsNavLink {
```

#### 49. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L274-L276` → after: `L378-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L378-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L378-L381) · [Before (L274-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L274-L276)

```diff
-   font-weight: 700;
-   gap: .5rem;
-   margin: 0
+   font-size: calc(var(--docs-unit)*.92);
+   font-weight: 500;
+   gap: calc(var(--docs-unit)*.7);
+   padding: calc(var(--docs-unit)*.42) calc(var(--docs-unit)*.75)
```

#### 50. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L279-L280` → after: `L384-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L384-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L384-L386) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L279-L280)

```diff
- .StudioAiAnswerText .StudioAiDataFacts p.StudioAiDataFactsTitle svg {
-   color: #85baff
+ .DocsNav .DocsNavLink svg {
+   color: var(--docs-text-faint);
+   width: calc(var(--docs-unit)*1)
```

#### 51. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L283-L284` → after: `L389-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L389-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L389-L392) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L283-L284)

```diff
- .StudioAiAnswerText .StudioAiDataFacts ul {
-   margin: .2rem 0 0
+ .DocsNav .DocsNavLink .DocsPixelIcon {
+   height: calc(var(--docs-unit)*1.25);
+   opacity: .6;
+   width: calc(var(--docs-unit)*1.25)
```

#### 52. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L287-L289` → after: `L395-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L395-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L395-L400) · [Before (L287-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L287-L289)

```diff
- .StudioAiAnswerText .StudioAiDataFacts li {
-   overflow-wrap: anywhere
- }
+ @media(hover:hover) {
+   .DocsNav .DocsNavLink:hover {
+     background: var(--docs-surface);
+     color: var(--docs-text);
+     text-decoration: none
+   }
```

#### 53. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L291-L293` → after: `L402-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L402-L404) · [Before (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L291-L293)

```diff
- .StudioAiAnswerText .StudioAiDataFacts li.StudioAiHardestSteps ol {
-   margin: .1rem 0 0;
-   padding-left: 1.4rem
+   .DocsNav .DocsNavLink:hover .DocsPixelIcon {
+     opacity: 1
+   }
```

#### 54. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L296-L299` → after: `L407-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L407-L410) · [Before (L296-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L296-L299)

```diff
- .StudioAiAnswerText .StudioAiDataFacts.StudioAiAlsoInData {
-   background-color: transparent;
-   border-left-color: hsla(0, 0%, 95%, .1);
-   margin-top: -.3rem
+ .DocsNav .DocsNavLink.pad-focused {
+   background: var(--docs-surface);
+   color: var(--docs-text);
+   text-decoration: none
```

#### 55. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L302-L303` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L413-L414) · [Before (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L302-L303)

```diff
- .StudioAiAnswerText .StudioAiDataFacts.StudioAiAlsoInData p.StudioAiDataFactsTitle svg {
-   color: #cfcfcf
+ .DocsNav .DocsNavLink.pad-focused .DocsPixelIcon {
+   opacity: 1
```

#### 56. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L306-L309` → after: `L417-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L417-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L417-L422) · [Before (L306-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L306-L309)

```diff
- .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents {
-   background-color: transparent;
-   border-left-color: hsla(0, 0%, 95%, .1)
- }
+ @media(hover:none) {
+   .DocsNav .DocsNavLink:active {
+     background: var(--docs-surface);
+     color: var(--docs-text);
+     text-decoration: none
+   }
```

#### 57. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L311-L317` → after: `L424-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L424-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L424-L426) · [Before (L311-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L311-L317)

```diff
- .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents>summary.StudioAiDataFactsTitle {
-   align-items: center;
-   cursor: pointer;
-   display: flex;
-   font-weight: 700;
-   gap: .5rem;
-   list-style: none
+   .DocsNav .DocsNavLink:active .DocsPixelIcon {
+     opacity: 1
+   }
```

#### 58. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L320-L321` → after: `L429-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L429-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L429-L433) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L320-L321)

```diff
- .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents>summary.StudioAiDataFactsTitle::-webkit-details-marker {
-   display: none
+ .DocsNav .DocsNavLink.Active {
+   background: var(--docs-accent-soft);
+   box-shadow: inset 3px 0 0 var(--docs-accent);
+   color: var(--docs-text);
+   font-weight: 650
```

#### 59. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L324-L325` → after: `L436-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L436-L437) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L324-L325)

```diff
- .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents>summary.StudioAiDataFactsTitle svg {
-   color: #cfcfcf
+ .DocsNav .DocsNavLink.Active svg {
+   color: var(--docs-accent)
```

#### 60. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L328-L329` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L440-L441) · [Before (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L328-L329)

```diff
- .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents>summary.StudioAiDataFactsTitle svg.StudioAiYourEventsCaret {
-   transition: transform .15s
+ .DocsNav .DocsNavLink.Active .DocsPixelIcon {
+   opacity: 1
```

#### 61. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L332-L334` → after: `L444-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L444-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L444-L452) · [Before (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L332-L334)

```diff
- .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents p.StudioAiYourEventsHint {
-   color: #cfcfcf;
-   margin: .2rem 0 0
+ .DocsPixelIcon {
+   -webkit-user-drag: none;
+   flex-shrink: 0;
+   height: 1.25em;
+   image-rendering: pixelated;
+   -webkit-user-select: none;
+   user-select: none;
+   vertical-align: -.25em;
+   width: 1.25em
```

#### 62. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L337-L338` → after: `L455-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L455-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L455-L458) · [Before (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L337-L338)

```diff
- .StudioAiAnswerText .StudioAiDataFacts.StudioAiYourEvents[open]>summary svg.StudioAiYourEventsCaret {
-   transform: rotate(90deg)
+ .DocsPixelIcon.Tinted {
+   display: inline-block;
+   isolation: isolate;
+   position: relative
```

#### 63. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L341-L345` → after: `L461-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L461-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L461-L466) · [Before (L341-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L341-L345)

```diff
- .StudioAiAnswerText .StudioAiMeasureFirst {
-   background-color: rgba(57, 73, 128, .4);
-   border-left: .3rem solid #fcd373;
-   margin: .6rem 0;
-   padding: .45rem .75rem
+ .DocsPixelIcon.Tinted img {
+   display: block;
+   height: 100%;
+   image-rendering: pixelated;
+   mix-blend-mode: multiply;
+   width: 100%
```

#### 64. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L348-L349` → after: `L469-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L469-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L469-L474) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L348-L349)

```diff
- .StudioAiAnswerText .StudioAiMeasureFirst p {
-   margin: .2rem 0 0
+ .DocsPixelIconTint {
+   background: currentColor;
+   inset: 0;
+   mask-size: 100% 100%;
+   -webkit-mask-size: 100% 100%;
+   position: absolute
```

#### 65. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L352-L356` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L477-L478) · [Before (L352-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L352-L356)

```diff
- .StudioAiAnswerText .StudioAiMeasureFirst p.StudioAiMeasureFirstTitle {
-   align-items: baseline;
-   display: flex;
-   gap: .5rem;
-   margin: 0
+ .DocsNavScrim {
+   display: none
```

#### 66. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L359-L360` → after: `L481-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L481-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L481-L484) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L359-L360)

```diff
- .StudioAiAnswerText .StudioAiMeasureFirst p.StudioAiMeasureFirstTitle svg {
-   color: #fcd373
+ .DocsMain {
+   max-width: calc(var(--docs-unit)*52);
+   min-width: 0;
+   padding: calc(var(--docs-unit)*2.5) 0 calc(var(--docs-unit)*4)
```

#### 67. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L363-L364` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L487-L488) · [Before (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L363-L364)

```diff
- .StudioAiAnswerText .StudioAiMeasureFirst p.StudioAiMeasureFirstHint {
-   color: #cfcfcf
+ .DocsToc {
+   font-size: calc(var(--docs-unit)*.84)
```

#### 68. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L367-L374` → after: `L491-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L491-L492) · [Before (L367-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L367-L374)

```diff
- .StudioAiAnswerText .StudioAiMeasureFirst>details>summary {
-   align-items: center;
-   cursor: pointer;
-   display: flex;
-   font-weight: 700;
-   gap: .5rem;
-   list-style: none;
-   margin-top: .3rem
+ .DocsToc.Timeline {
+   scrollbar-width: none
```

#### 69. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L377` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L495) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L377)

```diff
- .StudioAiAnswerText .StudioAiMeasureFirst>details>summary::-webkit-details-marker {
+ .DocsToc.Timeline::-webkit-scrollbar {
```

#### 70. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L381-L387` → after: `L499-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L499-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L499-L505) · [Before (L381-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L381-L387)

```diff
- .StudioAiAnswerText .StudioAiMeasureFirst>details>summary svg.StudioAiMeasureFirstCaret {
-   color: #cfcfcf;
-   transition: transform .15s
- }
- 
- .StudioAiAnswerText .StudioAiMeasureFirst>details[open]>summary svg.StudioAiMeasureFirstCaret {
-   transform: rotate(90deg)
+ .DocsToc .DocsTocTitle {
+   color: var(--docs-text-faint);
+   font-size: calc(var(--docs-unit)*.72);
+   font-weight: 700;
+   letter-spacing: .08em;
+   margin-bottom: calc(var(--docs-unit)*.6);
+   text-transform: uppercase
```

#### 71. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L390-L391` → after: `L508-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L508-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L508-L512) · [Before (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L390-L391)

```diff
- .StudioAiAnswerText .StudioAiMeasureFirst ul {
-   margin: .2rem 0 0
+ .DocsToc ul {
+   border-left: 1px solid var(--docs-border);
+   list-style: none;
+   margin: 0;
+   padding: 0
```

#### 72. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L394-L395` → after: `L515-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L515-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L515-L523) · [Before (L394-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L394-L395)

```diff
- .StudioAiAnswerText .StudioAiMeasureFirst.StudioAiMeasureFirstInvite {
-   border-left-color: #85baff
+ .DocsToc a {
+   border-left: 2px solid transparent;
+   color: var(--docs-text-muted);
+   display: block;
+   margin-left: -1px;
+   overflow: hidden;
+   padding: calc(var(--docs-unit)*.22) 0 calc(var(--docs-unit)*.22) calc(var(--docs-unit)*.9);
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 73. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L398-L399` → after: `L526-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L526-L528) · [Before (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L398-L399)

```diff
- .StudioAiAnswerText .StudioAiMeasureFirst.StudioAiMeasureFirstInvite p.StudioAiMeasureFirstTitle svg {
-   color: #85baff
+ .DocsToc a.Level3 {
+   font-size: calc(var(--docs-unit)*.8);
+   padding-left: calc(var(--docs-unit)*1.7)
```

#### 74. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L402-L407` → after: `L531-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L531-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L531-L535) · [Before (L402-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L402-L407)

```diff
- .StudioAiAnswerText p.StudioAiEffectSize {
-   align-items: baseline;
-   display: flex;
-   gap: .6rem;
-   margin-top: .35rem;
-   overflow-wrap: anywhere
+ @media(hover:hover) {
+   .DocsToc a:hover {
+     color: var(--docs-text);
+     text-decoration: none
+   }
```

#### 75. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L410-L412` → after: `L538-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L538-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L538-L540) · [Before (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L410-L412)

```diff
- .StudioAiAnswerText p.StudioAiEffectSize svg {
-   color: #1dd06d;
-   flex-shrink: 0
+ .DocsToc a.pad-focused {
+   color: var(--docs-text);
+   text-decoration: none
```

#### 76. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L415-L418` → after: `L543-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L543-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L543-L547) · [Before (L415-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L415-L418)

```diff
- .StudioAiGuessMark {
-   color: #cfcfcf;
-   font-size: .85em;
-   font-style: italic
+ @media(hover:none) {
+   .DocsToc a:active {
+     color: var(--docs-text);
+     text-decoration: none
+   }
```

#### 77. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L421-L423` → after: `L550-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L550-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L550-L553) · [Before (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L421-L423)

```diff
- .StudioAiGuessMark svg {
-   color: #fcd373;
-   margin-right: .3em
+ .DocsToc a.Active {
+   border-left-color: var(--docs-accent);
+   color: var(--docs-accent-text);
+   font-weight: 600
```

#### 78. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L426-L430` → after: `L556-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L556-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L556-L559) · [Before (L426-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L426-L430)

```diff
- .StudioAiBranchNote {
-   color: #cfcfcf;
-   display: block;
-   font-size: .9em;
-   margin-top: .2rem
+ .DocsTimeline {
+   list-style: none;
+   margin: 0;
+   padding: 0
```

#### 79. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L433-L434` → after: `L562-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L562-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L562-L565) · [Before (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L433-L434)

```diff
- .StudioAiBranchNote svg {
-   margin-right: .35em
+ .DocsTimeline ol {
+   list-style: none;
+   margin: 0 0 0 calc(var(--docs-unit)*.3);
+   padding: 0
```

#### 80. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L437-L439` → after: `L568-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L568-L569) · [Before (L437-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L437-L439)

```diff
- .StudioAiConstantCheck {
-   color: #cfcfcf;
-   cursor: help;
+ .DocsTimeline .DocsTimelineMonthName {
+   color: var(--docs-text-faint);
```

#### 81. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L441-L442` → after: `L571-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L571-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L571-L574) · [Before (L441-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L441-L442)

```diff
-   font-size: .9em;
-   margin-top: .2rem
+   font-size: calc(var(--docs-unit)*.72);
+   font-weight: 700;
+   letter-spacing: .04em;
+   padding: calc(var(--docs-unit)*.5) 0 calc(var(--docs-unit)*.35)
```

#### 82. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L445-L446` → after: `L577-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L577-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L577-L579) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L445-L446)

```diff
- .StudioAiConstantCheck svg {
-   margin-right: .35em
+ .DocsTimeline .DocsTimelineNotch {
+   border-left: 2px solid var(--docs-border);
+   position: relative
```

#### 83. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L449-L450` → after: `L582-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L582-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L582-L593) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L449-L450)

```diff
- .StudioAiConstantCheckDirection svg {
-   color: #fcd373
+ .DocsTimeline .DocsTimelineNotch:before {
+   background: var(--docs-bg);
+   border: 2px solid var(--docs-border);
+   box-sizing: border-box;
+   content: "";
+   height: calc(var(--docs-unit)*.6);
+   left: calc(var(--docs-unit)*-.3 - 1px);
+   pointer-events: none;
+   position: absolute;
+   top: 50%;
+   transform: translateY(-50%);
+   width: calc(var(--docs-unit)*.6)
```

#### 84. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L453-L460` → after: `L596-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L596-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L596-L601) · [Before (L453-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L453-L460)

```diff
- .StudioAiNextChangePeek {
-   align-items: center;
-   background-color: rgba(57, 73, 128, .4);
-   border: 2px solid rgba(255, 185, 20, .35);
-   display: none;
-   gap: .5rem;
-   margin: .6rem 0 0;
-   padding: .35rem .9rem
+ .DocsTimeline .DocsTimelineNotch a {
+   font-feature-settings: "tnum";
+   border-left: none;
+   font-variant-numeric: tabular-nums;
+   margin-left: 0;
+   padding: calc(var(--docs-unit)*.3) 0 calc(var(--docs-unit)*.3) calc(var(--docs-unit)*1)
```

#### 85. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L463-L465` → after: `L604-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L604-L605) · [Before (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L463-L465)

```diff
- .StudioAiNextChangePeek svg {
-   color: #ffb914;
-   flex-shrink: 0
+ .DocsTimeline .DocsTimelineNotch.Passed {
+   border-left-color: var(--docs-accent)
```

#### 86. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L468-L469` → after: `L608-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L608-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L608-L611) · [Before (L468-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L468-L469)

```diff
- .StudioAiNextChangePeek strong {
-   flex-shrink: 0
+ .DocsTimeline .DocsTimelineNotch.Active:before,
+ .DocsTimeline .DocsTimelineNotch.Passed:before {
+   background: var(--docs-accent);
+   border-color: var(--docs-accent)
```

#### 87. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L472-L476` → after: `L614-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L614-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L614-L618) · [Before (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L472-L476)

```diff
- .StudioAiNextChangePeekText {
-   min-width: 0;
-   overflow: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .DocsTimeline .DocsTimelineNotch.Active:before {
+   box-shadow: 0 0 0 3px var(--docs-accent-soft);
+   height: calc(var(--docs-unit)*.8);
+   left: calc(var(--docs-unit)*-.4 - 1px);
+   width: calc(var(--docs-unit)*.8)
```

#### 88. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L479-L480` → after: `L621-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L621-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L621-L623) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L479-L480)

```diff
- .StudioAiAnswerText .StudioAiJourneyStrip {
-   grid-gap: .75rem;
+ .DocsPager {
+   grid-gap: calc(var(--docs-unit)*1);
+   border-top: 1px solid var(--docs-border);
```

#### 89. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L482-L486` → after: `L625-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L625-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L625-L628) · [Before (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L482-L486)

```diff
-   gap: .75rem;
-   grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
-   list-style: none;
-   margin: .75rem 0 .5rem;
-   padding: 0
+   gap: calc(var(--docs-unit)*1);
+   grid-template-columns: 1fr 1fr;
+   margin-top: calc(var(--docs-unit)*4);
+   padding-top: calc(var(--docs-unit)*2)
```

#### 90. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L489-L492` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L631-L632) · [Before (L489-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L489-L492)

```diff
- .StudioAiJourneyStep {
-   background-color: rgba(57, 73, 128, .4);
-   border: 1px solid hsla(0, 0%, 95%, .1);
-   border-left: .3rem solid #a4a4a4;
+ .DocsPager .DocsPagerLink {
+   border: 1px solid var(--docs-border);
```

#### 91. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L495-L497` → after: `L635-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L635-L636) · [Before (L495-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L495-L497)

```diff
-   gap: .4rem;
-   padding: .5rem .75rem;
-   position: relative
+   gap: calc(var(--docs-unit)*.2);
+   padding: calc(var(--docs-unit)*1) calc(var(--docs-unit)*1.25)
```

#### 92. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L500-L501` → after: `L639-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L639-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L639-L641) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L500-L501)

```diff
- .StudioAiJourneyStep:has(>button.StudioAiJourneyStepOpen:hover) {
-   background-color: rgba(57, 73, 128, .6)
+ .DocsPager .DocsPagerLink.Next {
+   grid-column: 2;
+   text-align: right
```

#### 93. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L504-L505` → after: `L644-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L644-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L644-L648) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L504-L505)

```diff
- .StudioAiJourneyStep:has(>button.StudioAiJourneyStepOpen:focus-visible) {
-   outline: 2px solid #85baff
+ @media(hover:hover) {
+   .DocsPager .DocsPagerLink:hover {
+     border-color: var(--docs-accent);
+     text-decoration: none
+   }
```

#### 94. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L508-L509` → after: `L651-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L651-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L651-L653) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L508-L509)

```diff
- .StudioAiJourneyStep-good {
-   border-left-color: #1dd06d
+ .DocsPager .DocsPagerLink.pad-focused {
+   border-color: var(--docs-accent);
+   text-decoration: none
```

#### 95. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L512-L513` → after: `L656-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L656-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L656-L660) · [Before (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L512-L513)

```diff
- .StudioAiJourneyStep-okay {
-   border-left-color: #85baff
+ @media(hover:none) {
+   .DocsPager .DocsPagerLink:active {
+     border-color: var(--docs-accent);
+     text-decoration: none
+   }
```

#### 96. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L516-L517` → after: `L663-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L663-L665) · [Before (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L516-L517)

```diff
- .StudioAiJourneyStep-weak {
-   border-left-color: #fcd373
+ .DocsPager .DocsPagerLabel {
+   color: var(--docs-text-faint);
+   font-size: calc(var(--docs-unit)*.78)
```

#### 97. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L520-L529` → after: `L668-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L668-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L668-L670) · [Before (L520-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L520-L529)

```diff
- .StudioAiJourneyStepOpen {
-   background: none;
-   border: none;
-   color: inherit;
-   display: flex;
-   flex-direction: column;
-   font: inherit;
-   gap: .15rem;
-   padding: 0;
-   text-align: left
+ .DocsPager .DocsPagerTitle {
+   color: var(--docs-text);
+   font-weight: 650
```

#### 98. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L532-L533` → after: `L673-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L673-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L673-L680) · [Before (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L532-L533)

```diff
- button.StudioAiJourneyStepOpen {
-   cursor: pointer
+ @media(max-width:1240px) {
+   .DocsSiteBody {
+     grid-template-columns: calc(var(--docs-unit)*16) minmax(0, 1fr)
+   }
+ 
+   .DocsToc {
+     display: none
+   }
```

#### 99. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L536-L537` → after: `L683-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L683-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L683-L804) · [Before (L536-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L536-L537)

```diff
- button.StudioAiJourneyStepOpen:focus-visible {
-   outline: none
+ @media(max-width:900px) {
+   .DocsTopBar {
+     gap: calc(var(--docs-unit)*.5);
+     padding: 0 calc(var(--docs-unit)*.75)
+   }
+ 
+   .DocsTopBar .DocsMenuButton {
+     display: inline-flex
+   }
+ 
+   .DocsTopBar .DocsBrandTag,
+   .DocsTopBar .DocsSearchTrigger kbd,
+   .DocsTopBar .DocsSearchTriggerLabel,
+   .DocsTopBar .DocsTopBarLink span {
+     display: none
+   }
+ ... (106 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L540-L543` → after: `L807-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L807-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L807-L810) · [Before (L540-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L540-L543)

```diff
- button.StudioAiJourneyStepOpen:after {
-   content: "";
-   inset: 0;
-   position: absolute
+ @media(max-width:600px) {
+   .DocsSite {
+     --docs-unit: 15px
+   }
```

#### 101. `bundles/bloxd.io/chunks/css/92.css` (Changed code · before: `L546-L552` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a06d8f37c1de0b3956f7701f32fe80dee4eb59bc33158ee0202a539e3f306600) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/css/92.css#L813-L814) · [Before (L546-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/css/92.css#L546-L552)

```diff
- .StudioAiJourneyStepTitle {
-   align-items: center;
-   display: flex;
-   font-size: 1.1rem;
-   font-weight: 700;
-   gap: .5rem;
-   justify-content: space-between
+ .DocsPageHeader {
+   margin-bottom: calc(var(--docs-unit)*2)
```
