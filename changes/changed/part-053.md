# Changed — Bundle Modifications Report (Part 053 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `53 / 56` (**393** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 052](part-052.md) · [Part 054 →](part-054.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/main.css` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/main.css` (1692 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a)

#### 1489. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15197-L15199` → after: `L16451-L16452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16451-L16452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16451-L16452) · [Before (L15197-L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15197-L15199)

```diff
- .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow .RecentlyPlayedGameEyebrow:lang(ar),
- .RecentlyPlayedGameList .RecentlyPlayedGame .RecentlyPlayedGameName.RecentlyPlayedGameNameWithEyebrow .RecentlyPlayedGameEyebrow:lang(hi) {
-   letter-spacing: normal
+ .CustomLobby:nth-child(10) {
+   animation-delay: .5s
```

#### 1490. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15202-L15214` → after: `L16455-L16458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16455-L16458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16455-L16458) · [Before (L15202-L15214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15202-L15214)

```diff
- .MyWorldsSection {
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   font-size: 1.2rem;
-   height: min(50rem, 90vh);
-   justify-content: flex-start;
-   overflow-x: hidden;
-   overflow-y: scroll;
-   padding: 0 1rem;
-   position: relative;
-   width: 100%;
-   width: min(80rem, 80vw)
+ @media(hover:hover) {
+   .CustomLobby:hover {
+     scale: 1.05
+   }
```

#### 1491. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15217-L15219` → after: `L16461-L16462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16461-L16462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16461-L16462) · [Before (L15217-L15219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15217-L15219)

```diff
- .MyWorldsSection.MyWorldsSectionPad .CustomLobby.CreateCustomLobby:not(.pad-focused),
- .MyWorldsSection.MyWorldsSectionPad .CustomLobby.MyWorld:not(.pad-focused) {
-   border-color: #0f0f0f
+ .CustomLobby.pad-focused {
+   scale: 1.05
```

#### 1492. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15222-L15223` → after: `L16465-L16468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16465-L16468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16465-L16468) · [Before (L15222-L15223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15222-L15223)

```diff
- .MyWorldsSection .MyWorldsTitle {
-   font-size: 3rem
+ .CustomLobby {
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32)
```

#### 1493. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15226-L15227` → after: `L16471-L16473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16471-L16473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16471-L16473) · [Before (L15226-L15227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15226-L15227)

```diff
- .MyWorldsSection .MyWorldsDescription {
-   font-size: 1.75rem
+ .CustomLobby[data-pressing] {
+   scale: none;
+   transition: none
```

#### 1494. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15230-L15238` → after: `L16476-L16477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16476-L16477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16476-L16477) · [Before (L15230-L15238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15230-L15238)

```diff
- .MyWorldsSection .MyWorldsLoader {
-   align-items: center;
-   color: #a4a4a4;
-   display: flex;
-   flex: 1 1;
-   flex-direction: column;
-   gap: 1rem;
-   justify-content: center;
-   text-align: center
+ .CustomLobby[data-pressing] .CustomLobbyBody {
+   box-shadow: inset 0 0 0 3px #ffb914
```

#### 1495. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15241-L15242` → after: `L16480-L16481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16480-L16481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16480-L16481) · [Before (L15241-L15242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15241-L15242)

```diff
- .MyWorldsSection .MyWorldsLoader .LogoLoader {
-   font-size: 4rem
+ .CustomLobby[data-pressing].CreateCustomLobby {
+   box-shadow: inset 0 0 0 3px #ffb914, .2rem .25rem 0 rgba(0, 0, 0, .32)
```

#### 1496. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15245` → after: `L16484-L16486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16484-L16486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16484-L16486) · [Before (L15245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15245)

```diff
- .MyWorldsSection .MyWorldsBlock {
+ .CustomLobby.CreateCustomLobby {
+   align-items: center;
+   background-color: #303a59;
```

#### 1497. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15247-L15250` → after: `L16488-L16492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16488-L16492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16488-L16492) · [Before (L15247-L15250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15247-L15250)

```diff
-   flex-direction: column;
-   gap: 1rem;
-   margin-top: 1rem;
-   width: 100%
+   flex-grow: 0;
+   font-size: 2rem;
+   font-weight: 700;
+   gap: .5rem;
+   justify-content: center
```

#### 1498. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15253-L15254` → after: `L16495-L16498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16495-L16498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16495-L16498) · [Before (L15253-L15254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15253-L15254)

```diff
- .MyWorldsSection .MyWorldsBlock.OwnedWorldsBlock {
-   margin-top: 3.5rem
+ .CustomLobby.CreateCustomLobby .CreateCustomLobbyText {
+   color: #cfcfcf;
+   font-size: 2rem;
+   padding-bottom: .2rem
```

#### 1499. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15257-L15259` → after: `L16501-L16503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16501-L16503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16501-L16503) · [Before (L15257-L15259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15257-L15259)

```diff
- .MyWorldsSection .MyWorldsRecentClip {
-   margin: -.5rem;
-   padding: .5rem
+ .CustomLobby.CreateCustomLobby i {
+   color: #ffb914;
+   font-size: 2.2rem
```

#### 1500. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15262-L15266` → after: `L16506-L16514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16506-L16514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16506-L16514) · [Before (L15262-L15266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15262-L15266)

```diff
- .MyWorldsSection .MyWorldsRecentClip.MyWorldsRecentClipCollapsed {
-   -webkit-mask-image: linear-gradient(180deg, #000 calc(100% - 2.5rem), transparent);
-   mask-image: linear-gradient(180deg, #000 calc(100% - 2.5rem), transparent);
-   max-height: 7rem;
-   overflow: hidden
+ .CustomLobby .CustomLobbyBackground {
+   filter: brightness(.4);
+   height: 100%;
+   left: 0;
+   pointer-events: none;
+   position: absolute;
+   top: 0;
+   width: 100%;
+   z-index: 1
```

#### 1501. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15269-L15281` → after: `L16517-L16529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16517-L16529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16517-L16529) · [Before (L15269-L15281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15269-L15281)

```diff
- .MyWorldsSection .MyWorldsSeeMore {
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
+ .CustomLobby .CustomLobbyBackground .CustomLobbyBackgroundEmojis {
+   column-count: 10;
+   column-gap: 0;
+   font-size: 1.1rem;
+   left: 50%;
+   line-height: 3.74rem;
+   position: absolute;
+   text-align: center;
+   top: 50%;
+   transform: translate(-50%, -11rem) rotate(-10deg);
+   transform-origin: 50% 11rem;
+   white-space: pre;
+   width: 120%
```

#### 1502. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15284-L15289` → after: `L16532-L16542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16532-L16542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16532-L16542) · [Before (L15284-L15289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15284-L15289)

```diff
- @media(pointer:coarse) {
-   .MyWorldsSection .MyWorldsSeeMore {
-     box-sizing: border-box;
-     min-height: 44px;
-     min-width: 44px
-   }
+ .CustomLobby .CustomLobbyBody {
+   align-items: flex-start;
+   box-sizing: border-box;
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   height: 100%;
+   padding: .5rem 1rem;
+   position: relative;
+   width: 100%;
+   z-index: 2
```

#### 1503. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15292` → after: `L16545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16545) · [Before (L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15292)

```diff
- .MyWorldsSection .MyWorldsSeeMore {
+ .CustomLobby .CustomLobbyBody .CustomLobbyHeader {
```

#### 1504. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15297-L15315` → after: `L16549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16549) · [Before (L15297-L15315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15297-L15315)

```diff
-   margin: -.75rem 0 -2rem;
-   padding: .75rem 1rem;
-   position: relative
- }
- 
- .MyWorldsSection .MyWorldsSeeMore.MyWorldsSeeMoreOverFade {
-   margin-top: -2rem;
-   padding-top: 2rem
- }
- 
- .MyWorldsSection .MyWorldsSeeMore {
-   font-size: 1rem;
-   font-weight: 700;
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
- }
- 
- ... (3 more removed lines; see GitHub link above)
+   width: 100%
```

#### 1505. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15318-L15323` → after: `L16552-L16558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16552-L16558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16552-L16558) · [Before (L15318-L15323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15318-L15323)

```diff
- .MyWorldsSection .MyWorldsSeeMore .svg-inline--fa path:only-of-type,
- .MyWorldsSection .MyWorldsSeeMore.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .CustomLobby .CustomLobbyBody .CustomLobbyHeader .CustomLobbyTitle {
+   flex-grow: 1;
+   font-size: 2rem;
+   overflow-x: hidden;
+   text-align: start;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 1506. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15326-L15329` → after: `L16561-L16566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16561-L16566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16561-L16566) · [Before (L15326-L15329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15326-L15329)

```diff
- .MyWorldsSection .MyWorldsSeeMore {
-   color: #ffb914;
-   cursor: pointer;
-   transition: opacity .2s
+ .CustomLobby .CustomLobbyBody .CustomLobbyHeader .CustomLobbyChipList {
+   align-items: stretch;
+   display: flex;
+   flex-direction: row;
+   flex-shrink: 0;
+   gap: .4rem
```

#### 1507. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15332-L15335` → after: `L16569-L16577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16569-L16577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16569-L16577) · [Before (L15332-L15335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15332-L15335)

```diff
- @media(hover:hover) {
-   .MyWorldsSection .MyWorldsSeeMore:hover {
-     opacity: .85
-   }
+ .CustomLobby .CustomLobbyBody .CustomLobbyHeader .CustomLobbyChipList .CustomLobbyChip {
+   background-color: rgba(34, 40, 59, .6);
+   border-radius: 0;
+   color: #cfcfcf;
+   flex-shrink: 0;
+   font-size: 1.2rem;
+   padding: .3rem .4rem;
+   position: relative;
+   transition: color .1s, background-color .1s, transform .1s
```

#### 1508. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15338-L15339` → after: `L16580-L16584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16580-L16584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16580-L16584) · [Before (L15338-L15339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15338-L15339)

```diff
- .MyWorldsSection .MyWorldsSeeMore.pad-focused {
-   opacity: .85
+ .CustomLobby .CustomLobbyBody .CustomLobbyGamemode {
+   color: #ffb914;
+   font-size: 1.2rem;
+   text-align: start;
+   width: 100%
```

#### 1509. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15342-L15345` → after: `L16587-L16598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16587-L16598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16587-L16598) · [Before (L15342-L15345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15342-L15345)

```diff
- @media(hover:none) {
-   .MyWorldsSection .MyWorldsSeeMore:active {
-     opacity: .85
-   }
+ .CustomLobby .CustomLobbyBody .CustomLobbyDescription {
+   -webkit-line-clamp: 3;
+   -webkit-box-orient: vertical;
+   display: -webkit-box;
+   font-size: 1.5rem;
+   overflow-x: hidden;
+   overflow-y: hidden;
+   text-align: start;
+   text-overflow: ellipsis;
+   white-space: nowrap;
+   white-space: normal;
+   width: 100%
```

#### 1510. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15348-L15350` → after: `L16601-L16607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16601-L16607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16601-L16607) · [Before (L15348-L15350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15348-L15350)

```diff
- .MyWorldsSection .MyWorldsSeeMore[data-pressing] {
-   opacity: .85;
-   transition: none
+ .RecentlyPlayedLobbies {
+   align-items: center;
+   display: flex;
+   flex-wrap: wrap;
+   gap: .5rem;
+   justify-content: flex-start;
+   min-height: 2.5rem
```

#### 1511. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15353-L15355` → after: `L16610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16610) · [Before (L15353-L15355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15353-L15355)

```diff
- .MyWorldsSection .MyWorldsSectionTitle {
-   --fa-primary-color: #463bd9;
-   --fa-secondary-color: #ffb914;
+ .RecentlyPlayedLobbies .RecentlyPlayedLobby {
```

#### 1512. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15357` → after: `L16612-L16618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16612-L16618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16612-L16618) · [Before (L15357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15357)

```diff
-   color: #cfcfcf;
+   background: none;
+   background-color: rgba(57, 73, 128, .5);
+   border: none;
+   border-radius: 0;
+   box-sizing: content-box;
+   color: inherit;
+   cursor: pointer;
```

#### 1513. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15360-L15361` → after: `L16622-L16625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16622-L16625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16622-L16625) · [Before (L15360-L15361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15360-L15361)

```diff
-   gap: .5rem;
-   line-height: 1em;
+   height: 2.5rem;
+   justify-content: center;
+   letter-spacing: inherit;
+   line-height: inherit;
```

#### 1514. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15363` → after: `L16627-L16632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16627-L16632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16627-L16632) · [Before (L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15363)

```diff
-   text-align: left
+   min-width: 2rem;
+   padding: 0 .5rem;
+   text-align: inherit;
+   text-shadow: inherit;
+   text-transform: inherit;
+   transition: scale .2s
```

#### 1515. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15366-L15368` → after: `L16635-L16638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16635-L16638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16635-L16638) · [Before (L15366-L15368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15366-L15368)

```diff
- .MyWorldsSection .MyWorldsSectionTitle .MyWorldsSectionTitleText {
-   padding: .2rem .4rem;
-   position: relative
+ @media(hover:hover) {
+   .RecentlyPlayedLobbies .RecentlyPlayedLobby:hover {
+     scale: 1.1
+   }
```

#### 1516. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15371-L15380` → after: `L16641-L16642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16641-L16642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16641-L16642) · [Before (L15371-L15380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15371-L15380)

```diff
- .MyWorldsSection .MyWorldsSectionTitle .MyWorldsSectionTitleText .MyWorldsSectionTitleTextBackground {
-   background-image: linear-gradient(20deg, #463bd9 20%, #ffb914);
-   border-radius: 0;
-   height: 100%;
-   left: 0;
-   opacity: .8;
-   position: absolute;
-   top: 0;
-   width: 100%;
-   z-index: -1
+ .RecentlyPlayedLobbies .RecentlyPlayedLobby.pad-focused {
+   scale: 1.1
```

#### 1517. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15383-L15388` → after: `L16645-L16649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16645-L16649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16645-L16649) · [Before (L15383-L15388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15383-L15388)

```diff
- .MyWorldsSection .MyWorldsList {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   gap: .75rem;
-   width: 100%
+ .RecentlyPlayedLobbies .RecentlyPlayedLobby[data-pressing] {
+   box-shadow: inset 0 0 0 2px #ffb914;
+   color: #ffb914;
+   scale: none;
+   transition: none
```

#### 1518. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15391-L15392` → after: `L16652-L16656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16652-L16656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16652-L16656) · [Before (L15391-L15392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15391-L15392)

```diff
- .MyWorldsSection .MyWorldsListScroll {
-   width: 100%
+ .RecentlyPlayedLobbies .RecentlyPlayedLobbiesDivider {
+   background-color: #838383;
+   height: 2.5rem;
+   margin: 0 .5rem;
+   width: .2rem
```

#### 1519. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15395-L15396` → after: `L16659-L16660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16659-L16660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16659-L16660) · [Before (L15395-L15396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15395-L15396)

```diff
- .MyWorldsSection .MyWorldsListInner {
-   align-items: center;
+ .MyWorldButton {
+   aspect-ratio: 1/1;
```

#### 1520. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15398-L15403` → after: `L16662-L16663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16662-L16663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16662-L16663) · [Before (L15398-L15403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15398-L15403)

```diff
-   display: flex;
-   flex-wrap: wrap;
-   gap: 1rem;
-   justify-content: flex-start;
-   overflow: visible;
-   width: 100%
+   padding: .35rem;
+   width: calc(100%/var(--home-card-columns, var(--homeRowSize)))
```

#### 1521. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15406-L15407` → after: `L16666-L16667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16666-L16667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16666-L16667) · [Before (L15406-L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15406-L15407)

```diff
- .MyWorldsSection .MyWorldsListInner.TopSection {
-   justify-content: center
+ .MyWorldButton.MyWorldButtonPad:not(.pad-focused) .MyWorldButtonInner {
+   border-color: #0f0f0f
```

#### 1522. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15410` → after: `L16670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16670) · [Before (L15410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15410)

```diff
- .MyWorldsSection .MyWorldsListInner .OwnedWorldsLazy {
+ .MyWorldButton .MyWorldButtonInner {
```

#### 1523. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15413-L15417` → after: `L16682-L16689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16682-L16689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16682-L16689) · [Before (L15413-L15417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15413-L15417)

```diff
-   flex: 1 1 25rem;
-   flex-wrap: wrap;
-   gap: 1rem;
-   justify-content: flex-start;
-   min-width: 0
+   flex-direction: column;
+   gap: .4rem;
+   height: 100%;
+   justify-content: center;
+   padding: .5rem;
+   position: relative;
+   transition: transform .2s;
+   width: 100%
```

#### 1524. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15420-L15423` → after: `L16692-L16695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16692-L16695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16692-L16695) · [Before (L15420-L15423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15420-L15423)

```diff
- .MyWorldsSection .MyWorldsListInner .OwnedWorldsLazy .LazyLoadedItemWrapper {
-   flex-basis: 25rem;
-   flex-grow: 0;
-   height: 5rem
+ @media(hover:hover) {
+   .MyWorldButton .MyWorldButtonInner:hover {
+     transform: scale(1.03)
+   }
```

#### 1525. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15426-L15431` → after: `L16698-L16699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16698-L16699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16698-L16699) · [Before (L15426-L15431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15426-L15431)

```diff
- .MyWorldsSection .MyWorldsListInner .OwnedWorldsLazy .LazyLoadedItemWrapper .CustomLobby {
-   flex-grow: 0;
-   height: 100%;
-   opacity: 1;
-   transform: scale(1);
-   width: 100%
+ .MyWorldButton .MyWorldButtonInner.pad-focused {
+   transform: scale(1.03)
```

#### 1526. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15434-L15440` → after: `L16702-L16705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16702-L16705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16702-L16705) · [Before (L15434-L15440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15434-L15440)

```diff
- .MyWorldsSection .CreateCustomLobby,
- .MyWorldsSection .MyWorldButton {
-   aspect-ratio: unset;
-   flex-basis: 25rem;
-   flex-grow: 0;
-   height: 5rem;
-   padding: 0
+ @media(hover:none) {
+   .MyWorldButton .MyWorldButtonInner:active {
+     transform: scale(1.03)
+   }
```

#### 1527. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15443-L15444` → after: `L16708-L16715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16708-L16715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16708-L16715) · [Before (L15443-L15444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15443-L15444)

```diff
- .MyWorldsSection .CreateCustomLobby {
-   border: 1px solid #ffb914
+ .MyWorldButton .MyWorldButtonInner .MyWorldButtonTextWrapper {
+   align-items: flex-start;
+   bottom: 0;
+   display: flex;
+   flex-direction: column;
+   left: 0;
+   position: absolute;
+   width: 100%
```

#### 1528. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15447-L15448` → after: `L16718-L16721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16718-L16721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16718-L16721) · [Before (L15447-L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15447-L15448)

```diff
- .MyWorldsSection .CustomLobby.MyWorld {
-   border: 3px solid #ffb914
+ @media(hover:hover)and (-webkit-max-device-pixel-ratio:1.489795918367347), (hover:hover)and (max-resolution:1.49dppx) {
+   .MyWorldButton .MyWorldButtonInner .MyWorldButtonTextWrapper {
+     transform: translateZ(0)
+   }
```

#### 1529. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15451-L15454` → after: `L16724-L16731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16724-L16731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16724-L16731) · [Before (L15451-L15454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15451-L15454)

```diff
- .MyWorldsSection .CustomLobby.MyWorld .CustomLobbyBackground {
-   background-position: 50%;
-   background-repeat: no-repeat;
-   background-size: cover
+ .MyWorldButton .MyWorldButtonInner .MyWorldButtonEyebrow {
+   color: #a8e08a;
+   font-size: .65rem;
+   font-weight: 800;
+   letter-spacing: .08em;
+   line-height: 1.4;
+   padding: 0 .5rem;
+   text-transform: uppercase
```

#### 1530. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15457-L15458` → after: `L16734-L16736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16734-L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16734-L16736) · [Before (L15457-L15458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15457-L15458)

```diff
- .MyWorldsSection .CustomLobby.MyWorld .CustomLobbyBackgroundEmojis {
-   display: none
+ .MyWorldButton .MyWorldButtonInner .MyWorldButtonEyebrow:lang(ar),
+ .MyWorldButton .MyWorldButtonInner .MyWorldButtonEyebrow:lang(hi) {
+   letter-spacing: normal
```

#### 1531. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15461-L15462` → after: `L16739-L16740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16739-L16740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16739-L16740) · [Before (L15461-L15462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15461-L15462)

```diff
- .MyWorldsSection .CustomLobby {
-   height: 5rem
+ .MyWorldButton .MyWorldButtonInner .MyWorldButtonEyebrow {
+   background-color: rgba(57, 73, 128, .5)
```

#### 1532. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15465-L15466` → after: `L16743-L16749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16743-L16749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16743-L16749) · [Before (L15465-L15466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15465-L15466)

```diff
- .MyWorldsSection .CustomLobby .CustomLobbyBody {
-   padding-top: 0
+ .MyWorldButton .MyWorldButtonInner .MyWorldButtonText {
+   background-color: rgba(57, 73, 128, .5);
+   box-sizing: border-box;
+   font-size: 1rem;
+   max-width: 100%;
+   overflow: hidden;
+   padding: .1rem .5rem
```

#### 1533. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15469-L15470` → after: `L16752-L16755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16752-L16755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16752-L16755) · [Before (L15469-L15470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15469-L15470)

```diff
- .MyWorldsSection .CustomLobby .CustomLobbyBody .CustomLobbyHeader .CustomLobbyTitle {
-   font-size: 1.75rem
+ .CreateCustomGamePopup {
+   overflow-x: hidden;
+   overflow-y: auto;
+   position: relative
```

#### 1534. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15473-L15479` → after: `L16758-L16760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16758-L16760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16758-L16760) · [Before (L15473-L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15473-L15479)

```diff
- .CustomLobbyLoader {
-   align-items: flex-start;
-   align-self: stretch;
-   display: flex;
-   font-size: 2.5rem;
-   justify-content: flex-start;
-   padding: 0 1rem
+ .CreateCustomGameCTADisabled {
+   filter: brightness(50%);
+   pointer-events: none
```

#### 1535. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15482-L15487` → after: `L16763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16763) · [Before (L15482-L15487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15482-L15487)

```diff
- .CustomLobby {
-   animation-delay: .5s;
-   background: none;
-   border: none;
-   box-sizing: content-box;
-   color: inherit;
+ .CreateCustomGameCTA {
```

#### 1536. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15489-L15502` → after: `L16765-L16766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16765-L16766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16765-L16766) · [Before (L15489-L15502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15489-L15502)

```diff
-   flex-grow: 1;
-   font: inherit;
-   height: 10rem;
-   letter-spacing: inherit;
-   line-height: inherit;
-   margin: 0;
-   min-width: 18rem;
-   overflow: hidden;
-   padding: 0;
-   position: relative;
-   text-align: inherit;
-   text-shadow: inherit;
-   text-transform: inherit;
-   transition: scale .2s
+   padding: 3rem .5rem;
+   width: 100%
```

#### 1537. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15505-L15506` → after: `L16769-L16773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16769-L16773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16769-L16773) · [Before (L15505-L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15505-L15506)

```diff
- .CustomLobby:first-child {
-   animation-delay: .05s
+ .CreateCustomGameCTA,
+ .CreateCustomGameCTA .CTAInner {
+   box-sizing: border-box;
+   display: flex;
+   justify-content: center
```

#### 1538. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15509-L15510` → after: `L16776-L16784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16776-L16784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16776-L16784) · [Before (L15509-L15510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15509-L15510)

```diff
- .CustomLobby:nth-child(2) {
-   animation-delay: .1s
+ .CreateCustomGameCTA .CTAInner {
+   align-items: center;
+   background: linear-gradient(135deg, #303a59, #394980);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   gap: 1rem;
+   padding: 1rem 1.5rem;
+   transition: border-color .2s, background-color .2s, transform .2s
```

#### 1539. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15513-L15514` → after: `L16787-L16790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16787-L16790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16787-L16790) · [Before (L15513-L15514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15513-L15514)

```diff
- .CustomLobby:nth-child(3) {
-   animation-delay: .15s
+ @media(hover:hover) {
+   .CreateCustomGameCTA:hover .CTAInner {
+     transform: scale(1.05)
+   }
```

#### 1540. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15517-L15518` → after: `L16793-L16794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16793-L16794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16793-L16794) · [Before (L15517-L15518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15517-L15518)

```diff
- .CustomLobby:nth-child(4) {
-   animation-delay: .2s
+ .CreateCustomGameCTA.pad-focused .CTAInner {
+   transform: scale(1.05)
```

#### 1541. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15521-L15522` → after: `L16797-L16800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16797-L16800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16797-L16800) · [Before (L15521-L15522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15521-L15522)

```diff
- .CustomLobby:nth-child(5) {
-   animation-delay: .25s
+ @media(hover:none) {
+   .CreateCustomGameCTA:active .CTAInner {
+     transform: scale(1.05)
+   }
```

#### 1542. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15525-L15526` → after: `L16803-L16812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16803-L16812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16803-L16812) · [Before (L15525-L15526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15525-L15526)

```diff
- .CustomLobby:nth-child(6) {
-   animation-delay: .3s
+ .CreateCustomGameCTA .CTAIconArea {
+   align-items: center;
+   background-color: rgba(255, 185, 20, .15);
+   color: #ffb914;
+   display: flex;
+   flex-shrink: 0;
+   font-size: 1.4rem;
+   height: 3rem;
+   justify-content: center;
+   width: 3rem
```

#### 1543. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15529-L15530` → after: `L16815-L16820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16815-L16820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16815-L16820) · [Before (L15529-L15530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15529-L15530)

```diff
- .CustomLobby:nth-child(7) {
-   animation-delay: .35s
+ .CreateCustomGameCTA .CTAText {
+   display: flex;
+   flex-direction: column;
+   gap: .15rem;
+   min-width: 0;
+   text-align: left
```

#### 1544. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15533-L15534` → after: `L16823-L16825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16823-L16825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16823-L16825) · [Before (L15533-L15534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15533-L15534)

```diff
- .CustomLobby:nth-child(8) {
-   animation-delay: .4s
+ .CreateCustomGameCTA .CTAText .CTATitle {
+   color: #fff;
+   font-size: 1.2rem
```

#### 1545. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15537-L15538` → after: `L16828-L16833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16828-L16833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16828-L16833) · [Before (L15537-L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15537-L15538)

```diff
- .CustomLobby:nth-child(9) {
-   animation-delay: .45s
+ .CreateCustomGameCTA .CTAText .CTASubtitle {
+   color: #a4a4a4;
+   font-size: .95rem;
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 1546. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15541-L15542` → after: `L16836-L16838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16836-L16838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16836-L16838) · [Before (L15541-L15542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15541-L15542)

```diff
- .CustomLobby:nth-child(10) {
-   animation-delay: .5s
+ .CreateCustomGameCTA .CTAButtonArea {
+   flex-shrink: 0;
+   margin-left: .5rem
```

#### 1547. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15545-L15548` → after: `L16841-L16842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16841-L16842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16841-L16842) · [Before (L15545-L15548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15545-L15548)

```diff
- @media(hover:hover) {
-   .CustomLobby:hover {
-     scale: 1.05
-   }
+ .CreateCustomGameCTA .CTAButtonArea .CTAButton {
+   pointer-events: none
```

#### 1548. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15551-L15552` → after: `L16845-L16847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16845-L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16845-L16847) · [Before (L15551-L15552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15551-L15552)

```diff
- .CustomLobby.pad-focused {
-   scale: 1.05
+ .CreateCustomGameCTA .CTAButtonArea .CTAButton .ButtonBody {
+   font-size: 1.05rem;
+   gap: .5rem
```

#### 1549. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15555-L15558` → after: `L16850-L16855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16850-L16855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16850-L16855) · [Before (L15555-L15558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15555-L15558)

```diff
- .CustomLobby {
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32)
+ .CreateCustomGameStepsPopup {
+   display: flex;
+   flex-direction: column;
+   gap: 2rem;
+   margin: 0 auto;
+   max-width: 50rem
```

#### 1550. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15561-L15563` → after: `L16858-L16864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16858-L16864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16858-L16864) · [Before (L15561-L15563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15561-L15563)

```diff
- .CustomLobby[data-pressing] {
-   scale: none;
-   transition: none
+ .CreateCustomGameStepsPopup .StepsPopupHeader {
+   align-items: center;
+   display: flex;
+   flex-direction: row;
+   gap: .6rem;
+   justify-content: center;
+   text-align: center
```

#### 1551. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15566-L15567` → after: `L16867-L16875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16867-L16875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16867-L16875) · [Before (L15566-L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15566-L15567)

```diff
- .CustomLobby[data-pressing] .CustomLobbyBody {
-   box-shadow: inset 0 0 0 3px #ffb914
+ .CreateCustomGameStepsPopup .StepsPopupHeader .StepsPopupIcon {
+   align-items: center;
+   background-color: rgba(255, 185, 20, .15);
+   color: #ffb914;
+   display: flex;
+   font-size: 1.2rem;
+   height: 2.8rem;
+   justify-content: center;
+   width: 2.8rem
```

#### 1552. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15570-L15571` → after: `L16878-L16881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16878-L16881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16878-L16881) · [Before (L15570-L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15570-L15571)

```diff
- .CustomLobby[data-pressing].CreateCustomLobby {
-   box-shadow: inset 0 0 0 3px #ffb914, .2rem .25rem 0 rgba(0, 0, 0, .32)
+ .CreateCustomGameStepsPopup .StepsPopupHeader .StepsPopupRight .StepsPopupTitle {
+   color: #fff;
+   font-size: 2.2rem;
+   font-weight: 800
```

#### 1553. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15574` → after: `L16884-L16896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16884-L16896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16884-L16896) · [Before (L15574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15574)

```diff
- .CustomLobby.CreateCustomLobby {
+ .CreateCustomGameStepsPopup .StepsPopupHeader .StepsPopupRight .StepsPopupSubtitle {
+   color: #a4a4a4;
+   font-size: 1.15rem;
+   max-width: 30rem
+ }
+ 
+ .CreateCustomGameStepsPopup .StepsContainer {
+   display: flex;
+   flex-direction: column;
+   gap: .8rem
+ }
+ 
+ .CreateCustomGameStepsPopup .StepsContainer .StepCard {
```

#### 1554. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15578-L15582` → after: `L16901-L16902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16901-L16902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16901-L16902) · [Before (L15578-L15582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15578-L15582)

```diff
-   flex-grow: 0;
-   font-size: 2rem;
-   font-weight: 700;
-   gap: .5rem;
-   justify-content: center
+   gap: 1rem;
+   padding: 1.2rem 1.5rem
```

#### 1555. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15585-L15588` → after: `L16905-L16915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16905-L16915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16905-L16915) · [Before (L15585-L15588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15585-L15588)

```diff
- .CustomLobby.CreateCustomLobby .CreateCustomLobbyText {
-   color: #cfcfcf;
-   font-size: 2rem;
-   padding-bottom: .2rem
+ .CreateCustomGameStepsPopup .StepsContainer .StepCard .StepNumber {
+   align-items: center;
+   background-color: rgba(255, 185, 20, .15);
+   color: #ffb914;
+   display: flex;
+   flex-shrink: 0;
+   font-size: 1rem;
+   font-weight: 800;
+   height: 2rem;
+   justify-content: center;
+   width: 2rem
```

#### 1556. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15591` → after: `L16918-L16919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16918-L16919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16918-L16919) · [Before (L15591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15591)

```diff
- .CustomLobby.CreateCustomLobby i {
+ .CreateCustomGameStepsPopup .StepsContainer .StepCard .StepIcon {
+   align-items: center;
```

#### 1557. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15593` → after: `L16921-L16925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16921-L16925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16921-L16925) · [Before (L15593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15593)

```diff
-   font-size: 2.2rem
+   display: flex;
+   flex-shrink: 0;
+   font-size: 1.6rem;
+   justify-content: center;
+   width: 2.5rem
```

#### 1558. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15596-L15604` → after: `L16928-L16933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16928-L16933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16928-L16933) · [Before (L15596-L15604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15596-L15604)

```diff
- .CustomLobby .CustomLobbyBackground {
-   filter: brightness(.4);
-   height: 100%;
-   left: 0;
-   pointer-events: none;
-   position: absolute;
-   top: 0;
-   width: 100%;
-   z-index: 1
+ .CreateCustomGameStepsPopup .StepsContainer .StepCard .StepContent {
+   display: flex;
+   flex-direction: column;
+   gap: .3rem;
+   min-width: 0;
+   text-align: left
```

#### 1559. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15607-L15619` → after: `L16936-L16939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16936-L16939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16936-L16939) · [Before (L15607-L15619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15607-L15619)

```diff
- .CustomLobby .CustomLobbyBackground .CustomLobbyBackgroundEmojis {
-   column-count: 10;
-   column-gap: 0;
-   font-size: 1.1rem;
-   left: 50%;
-   line-height: 3.74rem;
-   position: absolute;
-   text-align: center;
-   top: 50%;
-   transform: translate(-50%, -11rem) rotate(-10deg);
-   transform-origin: 50% 11rem;
-   white-space: pre;
-   width: 120%
+ .CreateCustomGameStepsPopup .StepsContainer .StepCard .StepContent .StepTitle {
+   color: #fff;
+   font-size: 1.3rem;
+   font-weight: 800
```

#### 1560. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15622-L15624` → after: `L16942-L16949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16942-L16949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16942-L16949) · [Before (L15622-L15624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15622-L15624)

```diff
- .CustomLobby .CustomLobbyBody {
-   align-items: flex-start;
-   box-sizing: border-box;
+ .CreateCustomGameStepsPopup .StepsContainer .StepCard .StepContent .StepDescription {
+   color: #cfcfcf;
+   font-size: 1rem;
+   line-height: 1.4
+ }
+ 
+ .CreateCustomGameStepsPopup .StepsPopupFooter {
+   align-items: center;
```

#### 1561. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15626-L15632` → after: `L16951-L16954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16951-L16954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16951-L16954) · [Before (L15626-L15632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15626-L15632)

```diff
-   flex-direction: column;
-   gap: .5rem;
-   height: 100%;
-   padding: .5rem 1rem;
-   position: relative;
-   width: 100%;
-   z-index: 2
+   flex-wrap: wrap;
+   gap: .75rem;
+   justify-content: center;
+   padding-top: .5rem
```

#### 1562. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15635` → after: `L16957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16957) · [Before (L15635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15635)

```diff
- .CustomLobby .CustomLobbyBody .CustomLobbyHeader {
+ .CreateCustomGameStepsPopup .StepsPopupFooter .CreateWorldFromStepsButton .ButtonBody {
```

#### 1563. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15642-L15648` → after: `L16976-L17001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR16976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L16976-L17001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L16976-L17001) · [Before (L15642-L15648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15642-L15648)

```diff
- .CustomLobby .CustomLobbyBody .CustomLobbyHeader .CustomLobbyTitle {
-   flex-grow: 1;
-   font-size: 2rem;
-   overflow-x: hidden;
-   text-align: start;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .YoutubeHomepageSection .YoutubeHomepageSectionTitleBar {
+   align-items: center;
+   display: flex;
+   gap: .5rem;
+   margin-bottom: .5rem;
+   padding-left: .25rem
+ }
+ 
+ .YoutubeHomepageSection .YoutubeHomepageSectionTitleBar .YoutubeHomepageSectionChannelLink {
+   align-items: center;
+   display: flex;
+   gap: .5rem
+ }
+ 
+ .YoutubeHomepageSection .YoutubeHomepageSectionTitleBar .YoutubeHomepageSectionTitle {
+   color: #fff;
+ ... (10 more added lines; see GitHub link above)
```

#### 1564. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15651` → after: `L17004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17004) · [Before (L15651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15651)

```diff
- .CustomLobby .CustomLobbyBody .CustomLobbyHeader .CustomLobbyChipList {
+ .YoutubeHomepageSection .YoutubeHomepageSectionBody {
```

#### 1565. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15655-L15673` → after: `L17008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17008) · [Before (L15655-L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15655-L15673)

```diff
-   flex-shrink: 0;
-   gap: .4rem
- }
- 
- .CustomLobby .CustomLobbyBody .CustomLobbyHeader .CustomLobbyChipList .CustomLobbyChip {
-   background-color: rgba(34, 40, 59, .6);
-   border-radius: 0;
-   color: #cfcfcf;
-   flex-shrink: 0;
-   font-size: 1.2rem;
-   padding: .3rem .4rem;
-   position: relative;
-   transition: color .1s, background-color .1s, transform .1s
- }
- 
- .CustomLobby .CustomLobbyBody .CustomLobbyGamemode {
- ... (3 more removed lines; see GitHub link above)
+   gap: 0;
```

#### 1566. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15677-L15688` → after: `L17012-L17015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17012-L17015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17012-L17015) · [Before (L15677-L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15677-L15688)

```diff
- .CustomLobby .CustomLobbyBody .CustomLobbyDescription {
-   -webkit-line-clamp: 3;
-   -webkit-box-orient: vertical;
-   display: -webkit-box;
-   font-size: 1.5rem;
-   overflow-x: hidden;
-   overflow-y: hidden;
-   text-align: start;
-   text-overflow: ellipsis;
-   white-space: nowrap;
-   white-space: normal;
-   width: 100%
+ .YoutubeHomepageSection .YoutubeLiveColumn,
+ .YoutubeHomepageSection .YoutubeVideosColumn {
+   border-right: 2px solid rgba(0, 0, 0, .35);
+   padding-right: .475rem
```

#### 1567. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15691-L15697` → after: `L17018-L17020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17018-L17020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17018-L17020) · [Before (L15691-L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15691-L15697)

```diff
- .RecentlyPlayedLobbies {
-   align-items: center;
-   display: flex;
-   flex-wrap: wrap;
-   gap: .5rem;
-   justify-content: flex-start;
-   min-height: 2.5rem
+ .YoutubeHomepageSection .YoutubeShortsColumn,
+ .YoutubeHomepageSection .YoutubeVideosColumn {
+   padding-left: .375rem
```

#### 1568. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15700` → after: `L17023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17023) · [Before (L15700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15700)

```diff
- .RecentlyPlayedLobbies .RecentlyPlayedLobby {
+ .YoutubeHomepageSection .YoutubeSubsectionHeader {
```

#### 1569. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15702-L15708` → after: `L17025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17025) · [Before (L15702-L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15702-L15708)

```diff
-   background: none;
-   background-color: rgba(57, 73, 128, .5);
-   border: none;
-   border-radius: 0;
-   box-sizing: content-box;
-   color: inherit;
-   cursor: pointer;
+   box-sizing: border-box;
```

#### 1570. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15710-L15728` → after: `L17027-L17031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17027-L17031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17027-L17031) · [Before (L15710-L15728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15710-L15728)

```diff
-   font: inherit;
-   font-size: 1.5rem;
-   height: 2.5rem;
-   justify-content: center;
-   letter-spacing: inherit;
-   line-height: inherit;
-   margin: 0;
-   min-width: 2rem;
-   padding: 0 .5rem;
-   text-align: inherit;
-   text-shadow: inherit;
-   text-transform: inherit;
-   transition: scale .2s
- }
- 
- @media(hover:hover) {
- ... (3 more removed lines; see GitHub link above)
+   gap: .5rem;
+   justify-content: space-between;
+   margin-bottom: .35rem;
+   padding-left: .25rem;
+   width: 100%
```

#### 1571. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15731-L15732` → after: `L17034-L17036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17034-L17036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17034-L17036) · [Before (L15731-L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15731-L15732)

```diff
- .RecentlyPlayedLobbies .RecentlyPlayedLobby.pad-focused {
-   scale: 1.1
+ .YoutubeHomepageSection .YoutubeSubsectionHeader .YoutubeSubsectionTitle {
+   color: #fff;
+   font-size: 1.2rem
```

#### 1572. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15735-L15736` → after: `L17039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17039) · [Before (L15735-L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15735-L15736)

```diff
- .RecentlyPlayedLobbies .RecentlyPlayedLobby[data-pressing] {
-   box-shadow: inset 0 0 0 2px #ffb914;
+ .YoutubeHomepageSection .YoutubeSubsectionHeader .YoutubeSubsectionSeeMore {
```

#### 1573. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15738-L15739` → after: `L17041-L17042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17041-L17042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17041-L17042) · [Before (L15738-L15739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15738-L15739)

```diff
-   scale: none;
-   transition: none
+   font-size: 1rem;
+   transition: opacity .2s
```

#### 1574. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15742-L15746` → after: `L17045-L17048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17045-L17048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17045-L17048) · [Before (L15742-L15746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15742-L15746)

```diff
- .RecentlyPlayedLobbies .RecentlyPlayedLobbiesDivider {
-   background-color: #838383;
-   height: 2.5rem;
-   margin: 0 .5rem;
-   width: .2rem
+ @media(hover:hover) {
+   .YoutubeHomepageSection .YoutubeSubsectionHeader .YoutubeSubsectionSeeMore:hover {
+     opacity: .85
+   }
```

#### 1575. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15749-L15753` → after: `L17051-L17052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17051-L17052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17051-L17052) · [Before (L15749-L15753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15749-L15753)

```diff
- .MyWorldButton {
-   aspect-ratio: 1/1;
-   box-sizing: border-box;
-   padding: .35rem;
-   width: calc(100%/var(--home-card-columns, var(--homeRowSize)))
+ .YoutubeHomepageSection .YoutubeSubsectionHeader .YoutubeSubsectionSeeMore.pad-focused {
+   opacity: .85
```

#### 1576. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15756-L15757` → after: `L17055-L17058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17055-L17058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17055-L17058) · [Before (L15756-L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15756-L15757)

```diff
- .MyWorldButton.MyWorldButtonPad:not(.pad-focused) .MyWorldButtonInner {
-   border-color: #0f0f0f
+ @media(hover:none) {
+   .YoutubeHomepageSection .YoutubeSubsectionHeader .YoutubeSubsectionSeeMore:active {
+     opacity: .85
+   }
```

#### 1577. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15760-L15766` → after: `L17061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17061) · [Before (L15760-L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15760-L15766)

```diff
- .MyWorldButton .MyWorldButtonInner {
-   align-items: center;
-   background-color: #303a59;
-   background-position: 50%;
-   background-repeat: no-repeat;
-   background-size: cover;
-   border: 2px solid #ffb914;
+ .YoutubeHomepageSection .YoutubeTile {
```

#### 1578. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15773-L15776` → after: `L17065-L17073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17065-L17073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17065-L17073) · [Before (L15773-L15776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15773-L15776)

```diff
-   gap: .4rem;
-   height: 100%;
-   justify-content: center;
-   padding: .5rem;
+   flex-shrink: 0;
+   height: auto;
+   position: relative
+ }
+ 
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileThumbnail {
+   background-color: #394980;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   flex-shrink: 0;
```

#### 1579. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15783` → after: `L17088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17088) · [Before (L15783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15783)

```diff
-   .MyWorldButton .MyWorldButtonInner:hover {
+   .YoutubeHomepageSection .YoutubeTile .YoutubeTileThumbnail:hover {
```

#### 1580. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15788` → after: `L17093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17093) · [Before (L15788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15788)

```diff
- .MyWorldButton .MyWorldButtonInner.pad-focused {
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileThumbnail.pad-focused {
```

#### 1581. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15793` → after: `L17098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17098) · [Before (L15793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15793)

```diff
-   .MyWorldButton .MyWorldButtonInner:active {
+   .YoutubeHomepageSection .YoutubeTile .YoutubeTileThumbnail:active {
```

#### 1582. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15798-L15800` → after: `L17103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17103) · [Before (L15798-L15800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15798-L15800)

```diff
- .MyWorldButton .MyWorldButtonInner .MyWorldButtonTextWrapper {
-   align-items: flex-start;
-   bottom: 0;
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileInfo {
```

#### 1583. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15803-L15805` → after: `L17106-L17108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17106-L17108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17106-L17108) · [Before (L15803-L15805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15803-L15805)

```diff
-   left: 0;
-   position: absolute;
-   width: 100%
+   gap: .15rem;
+   min-width: 0;
+   padding: .35rem .4rem .45rem
```

#### 1584. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15808-L15811` → after: `L17111-L17119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17111-L17119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17111-L17119) · [Before (L15808-L15811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15808-L15811)

```diff
- @media(hover:hover)and (-webkit-max-device-pixel-ratio:1.489795918367347), (hover:hover)and (max-resolution:1.49dppx) {
-   .MyWorldButton .MyWorldButtonInner .MyWorldButtonTextWrapper {
-     transform: translateZ(0)
-   }
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileTitle {
+   -webkit-box-orient: vertical;
+   -webkit-line-clamp: 1;
+   color: #fff;
+   display: -webkit-box;
+   font-size: .85rem;
+   line-height: 1.2;
+   overflow: hidden;
+   text-align: left
```

#### 1585. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15814-L15821` → after: `L17122-L17123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17122-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17122-L17123) · [Before (L15814-L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15814-L15821)

```diff
- .MyWorldButton .MyWorldButtonInner .MyWorldButtonEyebrow {
-   color: #a8e08a;
-   font-size: .65rem;
-   font-weight: 800;
-   letter-spacing: .08em;
-   line-height: 1.4;
-   padding: 0 .5rem;
-   text-transform: uppercase
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMeta {
+   font-size: .75rem
```

#### 1586. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15824-L15826` → after: `L17126-L17127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17126-L17127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17126-L17127) · [Before (L15824-L15826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15824-L15826)

```diff
- .MyWorldButton .MyWorldButtonInner .MyWorldButtonEyebrow:lang(ar),
- .MyWorldButton .MyWorldButtonInner .MyWorldButtonEyebrow:lang(hi) {
-   letter-spacing: normal
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileInfo {
+   padding: .3rem .25rem
```

#### 1587. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15829-L15830` → after: `L17130-L17137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17130-L17137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17130-L17137) · [Before (L15829-L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15829-L15830)

```diff
- .MyWorldButton .MyWorldButtonInner .MyWorldButtonEyebrow {
-   background-color: rgba(57, 73, 128, .5)
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMeta {
+   color: #cfcfcf;
+   display: flex;
+   font-size: .75rem;
+   gap: .1rem;
+   justify-content: space-between;
+   line-height: 1.2;
+   min-width: 0
```

#### 1588. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15833-L15836` → after: `L17140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17140) · [Before (L15833-L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15833-L15836)

```diff
- .MyWorldButton .MyWorldButtonInner .MyWorldButtonText {
-   background-color: rgba(57, 73, 128, .5);
-   box-sizing: border-box;
-   font-size: 1rem;
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMeta .YoutubeTileAuthor {
```

#### 1589. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15838-L15839` → after: `L17142-L17143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17142-L17143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17142-L17143) · [Before (L15838-L15839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15838-L15839)

```diff
-   overflow: hidden;
-   padding: .1rem .5rem
+   overflow-y: hidden;
+   transition: filter .2s
```

#### 1590. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15842` → after: `L17146-L17162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17146-L17162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17146-L17162) · [Before (L15842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15842)

```diff
- .CreateCustomGamePopup {
+ @media(hover:hover) {
+   .YoutubeHomepageSection .YoutubeTile .YoutubeTileMeta .YoutubeTileAuthor:hover {
+     filter: brightness(1.5)
+   }
+ }
+ 
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMeta .YoutubeTileAuthor.pad-focused {
+   filter: brightness(1.5)
+ }
+ 
+ @media(hover:none) {
+   .YoutubeHomepageSection .YoutubeTile .YoutubeTileMeta .YoutubeTileAuthor:active {
+     filter: brightness(1.5)
+   }
+ }
+ 
+ ... (1 more added lines; see GitHub link above)
```

#### 1591. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15844-L15845` → after: `L17164-L17178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17164-L17178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17164-L17178) · [Before (L15844-L15845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15844-L15845)

```diff
-   overflow-y: auto;
-   position: relative
+   text-overflow: ellipsis;
+   white-space: nowrap
+ }
+ 
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMeta {
+   align-items: center;
+   flex-direction: column;
+   gap: .25rem
+ }
+ 
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileAuthorPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileTitlePlaceholder,
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileViewCountPlaceholder {
+   animation: pulseYoutubePlaceholder 1s infinite;
+   background-color: hsla(0, 0%, 100%, .22)
```

#### 1592. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15848-L15851` → after: `L17181-L17184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17181-L17184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17181-L17184) · [Before (L15848-L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15848-L15851)

```diff
- .CreateCustomGameCTADisabled {
-   filter: brightness(50%);
-   pointer-events: none
- }
+ @keyframes pulseYoutubePlaceholder {
+   0% {
+     opacity: .22
+   }
```

#### 1593. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15853-L15857` → after: `L17186-L17188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17186-L17188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17186-L17188) · [Before (L15853-L15857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15853-L15857)

```diff
- .CreateCustomGameCTA {
-   cursor: pointer;
-   padding: 3rem .5rem;
-   width: 100%
- }
+   50% {
+     opacity: .44
+   }
```

#### 1594. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15859-L15863` → after: `L17190-L17192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17190-L17192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17190-L17192) · [Before (L15859-L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15859-L15863)

```diff
- .CreateCustomGameCTA,
- .CreateCustomGameCTA .CTAInner {
-   box-sizing: border-box;
-   display: flex;
-   justify-content: center
+   to {
+     opacity: .22
+   }
```

#### 1595. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15866-L15874` → after: `L17195-L17197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17195-L17197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17195-L17197) · [Before (L15866-L15874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15866-L15874)

```diff
- .CreateCustomGameCTA .CTAInner {
-   align-items: center;
-   background: linear-gradient(135deg, #303a59, #394980);
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   gap: 1rem;
-   padding: 1rem 1.5rem;
-   transition: border-color .2s, background-color .2s, transform .2s
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileTitlePlaceholder,
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileTitleSpacer {
+   height: 1rem
```

#### 1596. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15877-L15880` → after: `L17200-L17205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17200-L17205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17200-L17205) · [Before (L15877-L15880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15877-L15880)

```diff
- @media(hover:hover) {
-   .CreateCustomGameCTA:hover .CTAInner {
-     transform: scale(1.05)
-   }
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaSpacer {
+   display: flex;
+   flex-direction: row;
+   height: .85rem;
+   justify-content: space-between
```

#### 1597. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15883-L15884` → after: `L17208-L17212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17208-L17212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17208-L17212) · [Before (L15883-L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15883-L15884)

```diff
- .CreateCustomGameCTA.pad-focused .CTAInner {
-   transform: scale(1.05)
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaPlaceholder .YoutubeTileAuthorPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaPlaceholder .YoutubeTileAuthorSpacer,
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaSpacer .YoutubeTileAuthorPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaSpacer .YoutubeTileAuthorSpacer {
+   width: 45%
```

#### 1598. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15887-L15890` → after: `L17215-L17219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17215-L17219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17215-L17219) · [Before (L15887-L15890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15887-L15890)

```diff
- @media(hover:none) {
-   .CreateCustomGameCTA:active .CTAInner {
-     transform: scale(1.05)
-   }
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaPlaceholder .YoutubeTileViewCountPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaPlaceholder .YoutubeTileViewCountSpacer,
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaSpacer .YoutubeTileViewCountPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaSpacer .YoutubeTileViewCountSpacer {
+   width: 20%
```

#### 1599. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15893-L15902` → after: `L17222-L17224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17222-L17224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17222-L17224) · [Before (L15893-L15902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15893-L15902)

```diff
- .CreateCustomGameCTA .CTAIconArea {
-   align-items: center;
-   background-color: rgba(255, 185, 20, .15);
-   color: #ffb914;
-   display: flex;
-   flex-shrink: 0;
-   font-size: 1.4rem;
-   height: 3rem;
-   justify-content: center;
-   width: 3rem
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileTitlePlaceholder,
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileTitleSpacer {
+   height: .75rem
```

#### 1600. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15905-L15906` → after: `L17227-L17229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17227-L17229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17227-L17229) · [Before (L15905-L15906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15905-L15906)

```diff
- .CreateCustomGameCTA .CTAText {
-   display: flex;
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaSpacer {
+   align-items: center;
```

#### 1601. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15909-L15910` → after: `L17232-L17233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17232-L17233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17232-L17233) · [Before (L15909-L15910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15909-L15910)

```diff
-   min-width: 0;
-   text-align: left
+   height: 1.25rem;
+   width: 100%
```

#### 1602. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15913-L15915` → after: `L17236-L17241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17236-L17241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17236-L17241) · [Before (L15913-L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15913-L15915)

```diff
- .CreateCustomGameCTA .CTAText .CTATitle {
-   color: #fff;
-   font-size: 1.2rem
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaPlaceholder .YoutubeTileAuthorPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaPlaceholder .YoutubeTileAuthorSpacer,
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaSpacer .YoutubeTileAuthorPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaSpacer .YoutubeTileAuthorSpacer {
+   height: 100%;
+   width: 75%
```

#### 1603. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15918-L15923` → after: `L17244-L17249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17244-L17249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17244-L17249) · [Before (L15918-L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15918-L15923)

```diff
- .CreateCustomGameCTA .CTAText .CTASubtitle {
-   color: #a4a4a4;
-   font-size: .95rem;
-   overflow-x: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaPlaceholder .YoutubeTileViewCountPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaPlaceholder .YoutubeTileViewCountSpacer,
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaSpacer .YoutubeTileViewCountPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaSpacer .YoutubeTileViewCountSpacer {
+   height: 100%;
+   width: 50%
```

#### 1604. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15926-L15928` → after: `L17252-L17256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17252-L17256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17252-L17256) · [Before (L15926-L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15926-L15928)

```diff
- .CreateCustomGameCTA .CTAButtonArea {
-   flex-shrink: 0;
-   margin-left: .5rem
+ .YoutubeHomepageSection .YoutubeTile.YoutubeTileSpacer {
+   background: none;
+   border-radius: 0;
+   box-shadow: none;
+   pointer-events: none
```

#### 1605. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15931-L15932` → after: `L17259-L17261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17259-L17261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17259-L17261) · [Before (L15931-L15932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15931-L15932)

```diff
- .CreateCustomGameCTA .CTAButtonArea .CTAButton {
-   pointer-events: none
+ .YoutubeHomepageSection .YoutubeTile.YoutubeTileSpacer .YoutubeTileThumbnail {
+   background: none;
+   box-shadow: none
```

#### 1606. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15935-L15937` → after: `L17264-L17267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17264-L17267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17264-L17267) · [Before (L15935-L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15935-L15937)

```diff
- .CreateCustomGameCTA .CTAButtonArea .CTAButton .ButtonBody {
-   font-size: 1.05rem;
-   gap: .5rem
+ @media(hover:hover) {
+   .YoutubeHomepageSection .YoutubeTile.YoutubeTileSpacer:hover {
+     transform: none
+   }
```

#### 1607. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15940-L15945` → after: `L17270-L17271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17270-L17271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17270-L17271) · [Before (L15940-L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15940-L15945)

```diff
- .CreateCustomGameStepsPopup {
-   display: flex;
-   flex-direction: column;
-   gap: 2rem;
-   margin: 0 auto;
-   max-width: 50rem
+ .YoutubeHomepageSection .YoutubeTile.YoutubeTileSpacer.pad-focused {
+   transform: none
```

#### 1608. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15948-L15954` → after: `L17274-L17277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17274-L17277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17274-L17277) · [Before (L15948-L15954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15948-L15954)

```diff
- .CreateCustomGameStepsPopup .StepsPopupHeader {
-   align-items: center;
-   display: flex;
-   flex-direction: row;
-   gap: .6rem;
-   justify-content: center;
-   text-align: center
+ @media(hover:none) {
+   .YoutubeHomepageSection .YoutubeTile.YoutubeTileSpacer:active {
+     transform: none
+   }
```

#### 1609. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15957` → after: `L17280-L17287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17280-L17287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17280-L17287) · [Before (L15957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15957)

```diff
- .CreateCustomGameStepsPopup .StepsPopupHeader .StepsPopupIcon {
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileImage {
+   display: block;
+   height: 100%;
+   object-fit: cover;
+   width: 100%
+ }
+ 
+ .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder .YoutubeTileThumbnail {
```

#### 1610. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15959-L15960` → after: `L17289-L17291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17289-L17291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17289-L17291) · [Before (L15959-L15960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15959-L15960)

```diff
-   background-color: rgba(255, 185, 20, .15);
-   color: #ffb914;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
```

#### 1611. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15962-L15965` → after: `L17293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17293) · [Before (L15962-L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15962-L15965)

```diff
-   font-size: 1.2rem;
-   height: 2.8rem;
-   justify-content: center;
-   width: 2.8rem
+   justify-content: center
```

#### 1612. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15968-L15971` → after: `L17296-L17302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17296-L17302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17296-L17302) · [Before (L15968-L15971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15968-L15971)

```diff
- .CreateCustomGameStepsPopup .StepsPopupHeader .StepsPopupRight .StepsPopupTitle {
-   color: #fff;
-   font-size: 2.2rem;
-   font-weight: 800
+ .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder[data-off-screen] .YoutubeTileAuthorPlaceholder,
+ .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder[data-off-screen] .YoutubeTileTitlePlaceholder,
+ .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder[data-off-screen] .YoutubeTileViewCountPlaceholder,
+ html[data-app-covered] .WholeAppWrapper .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder .YoutubeTileAuthorPlaceholder,
+ html[data-app-covered] .WholeAppWrapper .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder .YoutubeTileTitlePlaceholder,
+ html[data-app-covered] .WholeAppWrapper .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder .YoutubeTileViewCountPlaceholder {
+   animation-play-state: paused
```

#### 1613. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15974-L15977` → after: `L17305-L17313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17305-L17313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17305-L17313) · [Before (L15974-L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15974-L15977)

```diff
- .CreateCustomGameStepsPopup .StepsPopupHeader .StepsPopupRight .StepsPopupSubtitle {
-   color: #a4a4a4;
-   font-size: 1.15rem;
-   max-width: 30rem
+ .YoutubeHomepageSection .YoutubeTile .YoutubeTileLiveBadge {
+   background: #f03;
+   color: #fff;
+   font-size: .85rem;
+   font-weight: 800;
+   left: .35rem;
+   padding: .1rem .45rem;
+   position: absolute;
+   top: .35rem
```

#### 1614. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15980` → after: `L17316-L17317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17316-L17317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17316-L17317) · [Before (L15980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15980)

```diff
- .CreateCustomGameStepsPopup .StepsContainer {
+ .YoutubeHomepageSection .YoutubeLiveColumn {
+   align-self: stretch;
```

#### 1615. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15983` → after: `L17321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17321) · [Before (L15983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15983)

```diff
-   gap: .8rem
+   min-width: 0
```

#### 1616. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15986-L15992` → after: `L17324-L17333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17324-L17333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17324-L17333) · [Before (L15986-L15992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15986-L15992)

```diff
- .CreateCustomGameStepsPopup .StepsContainer .StepCard {
-   align-items: center;
-   background-color: #303a59;
-   border-radius: 0;
-   display: flex;
-   gap: 1rem;
-   padding: 1.2rem 1.5rem
+ .YoutubeHomepageSection .YoutubeLiveColumn .YoutubeLiveColumnTiles {
+   grid-gap: .5rem;
+   align-items: start;
+   display: grid;
+   flex: 1 1;
+   gap: .5rem;
+   grid-template-columns: minmax(0, 1fr);
+   grid-template-rows: 1fr 1fr 1fr;
+   min-height: 0;
+   width: 100%
```

#### 1617. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L15995-L16005` → after: `L17336-L17338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17336-L17338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17336-L17338) · [Before (L15995-L16005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L15995-L16005)

```diff
- .CreateCustomGameStepsPopup .StepsContainer .StepCard .StepNumber {
-   align-items: center;
-   background-color: rgba(255, 185, 20, .15);
-   color: #ffb914;
-   display: flex;
-   flex-shrink: 0;
-   font-size: 1rem;
-   font-weight: 800;
-   height: 2rem;
-   justify-content: center;
-   width: 2rem
+ .YoutubeHomepageSection .YoutubeLiveColumn .YoutubeLiveColumnTiles .YoutubeTile {
+   align-self: start;
+   width: 100%
```

#### 1618. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16008-L16010` → after: `L17341-L17342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17341-L17342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17341-L17342) · [Before (L16008-L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16008-L16010)

```diff
- .CreateCustomGameStepsPopup .StepsContainer .StepCard .StepIcon {
-   align-items: center;
-   color: #ffb914;
+ .YoutubeHomepageSection .YoutubeVideosColumn {
+   align-self: stretch;
```

#### 1619. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16012-L16015` → after: `L17344-L17346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17344-L17346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17344-L17346) · [Before (L16012-L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16012-L16015)

```diff
-   flex-shrink: 0;
-   font-size: 1.6rem;
-   justify-content: center;
-   width: 2.5rem
+   flex: calc(var(--youtube-video-slot-count)*1) 1 0;
+   flex-direction: column;
+   min-width: 0
```

#### 1620. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16018` → after: `L17349-L17362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17349-L17362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17349-L17362) · [Before (L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16018)

```diff
- .CreateCustomGameStepsPopup .StepsContainer .StepCard .StepContent {
+ .YoutubeHomepageSection .YoutubeVideosColumn .YoutubeVideosColumnTiles {
+   grid-gap: .5rem;
+   align-items: start;
+   display: grid;
+   flex: 1 1;
+   gap: .5rem;
+   grid-template-columns: repeat(var(--youtube-video-slot-count), minmax(0, 1fr));
+   grid-template-rows: 1fr 1fr 1fr;
+   min-height: 0;
+   width: 100%
+ }
+ 
+ .YoutubeHomepageSection .YoutubeShortsColumn {
+   align-self: stretch;
```

#### 1621. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16020-L16023` → after: `L17364-L17366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17364-L17366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17364-L17366) · [Before (L16020-L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16020-L16023)

```diff
-   flex-direction: column;
-   gap: .3rem;
-   min-width: 0;
-   text-align: left
+   flex: calc(var(--youtube-shorts-slot-count)*0.35) 1 0;
+   flex-direction: column;
+   min-width: 0
```

#### 1622. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16026-L16029` → after: `L17369-L17378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17369-L17378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17369-L17378) · [Before (L16026-L16029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16026-L16029)

```diff
- .CreateCustomGameStepsPopup .StepsContainer .StepCard .StepContent .StepTitle {
-   color: #fff;
-   font-size: 1.3rem;
-   font-weight: 800
+ .YoutubeHomepageSection .YoutubeShortsColumn .YoutubeShortsColumnTiles {
+   grid-gap: .5rem;
+   align-items: start;
+   display: grid;
+   flex: 1 1;
+   gap: .5rem;
+   grid-template-columns: repeat(var(--youtube-shorts-slot-count), minmax(0, 1fr));
+   grid-template-rows: 1fr 1fr;
+   min-height: 0;
+   width: 100%
```

#### 1623. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16032-L16035` → after: `L17381-L17382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17381-L17382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17381-L17382) · [Before (L16032-L16035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16032-L16035)

```diff
- .CreateCustomGameStepsPopup .StepsContainer .StepCard .StepContent .StepDescription {
-   color: #cfcfcf;
-   font-size: 1rem;
-   line-height: 1.4
+ .YoutubeHomepageSection.Portrait .YoutubeHomepageSectionBody {
+   flex-direction: column
```

#### 1624. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16038-L16044` → after: `L17385-L17388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17385-L17388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17385-L17388) · [Before (L16038-L16044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16038-L16044)

```diff
- .CreateCustomGameStepsPopup .StepsPopupFooter {
-   align-items: center;
-   display: flex;
-   flex-wrap: wrap;
-   gap: .75rem;
-   justify-content: center;
-   padding-top: .5rem
+ .YoutubeHomepageSection.Portrait .YoutubeLiveColumn,
+ .YoutubeHomepageSection.Portrait .YoutubeShortsColumn,
+ .YoutubeHomepageSection.Portrait .YoutubeVideosColumn {
+   flex: none
```

#### 1625. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16047-L16054` → after: `L17391-L17394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17391-L17394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17391-L17394) · [Before (L16047-L16054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16047-L16054)

```diff
- .CreateCustomGameStepsPopup .StepsPopupFooter .CreateWorldFromStepsButton .ButtonBody {
-   align-items: center;
-   display: flex;
-   font-size: 1.5rem;
-   gap: .6rem;
-   height: 3.5rem;
-   justify-content: center;
-   padding: 0 2rem
+ @property --ring-progress {
+   syntax: "<number>";
+   inherits: false;
+   initial-value: 0
```

#### 1626. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16057-L16058` → after: `L17397-L17400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17397-L17400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17397-L17400) · [Before (L16057-L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16057-L16058)

```diff
- .YoutubeHomepageSection {
-   background: rgba(255, 0, 51, .4);
+ .SeasonPassStrip {
+   align-items: center;
+   background: none;
+   border: 1px solid #0f0f0f;
```

#### 1627. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16061-L16062` → after: `L17405-L17419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17405-L17419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17405-L17419) · [Before (L16061-L16062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16061-L16062)

```diff
-   margin-top: 3rem;
-   padding: .75rem;
+   color: inherit;
+   cursor: pointer;
+   display: flex;
+   font: inherit;
+   gap: .75rem;
+   isolation: isolate;
+   letter-spacing: inherit;
+   line-height: inherit;
+   margin: 0 0 .75rem;
+   min-height: calc(6.6rem + 2px);
+   padding: .5rem .75rem;
+   position: relative;
+   text-align: inherit;
+   text-shadow: inherit;
+   text-transform: inherit;
```

#### 1628. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16066-L16071` → after: `L17423-L17426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17423-L17426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17423-L17426) · [Before (L16066-L16071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16066-L16071)

```diff
- .YoutubeHomepageSection .YoutubeHomepageSectionTitleBar {
-   align-items: center;
-   display: flex;
-   gap: .5rem;
-   margin-bottom: .5rem;
-   padding-left: .25rem
+ @media(hover:hover) {
+   .SeasonPassStrip:not(.SeasonPassStripLoading):hover {
+     filter: brightness(1.15)
+   }
```

#### 1629. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16074-L16077` → after: `L17429-L17430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17429-L17430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17429-L17430) · [Before (L16074-L16077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16074-L16077)

```diff
- .YoutubeHomepageSection .YoutubeHomepageSectionTitleBar .YoutubeHomepageSectionChannelLink {
-   align-items: center;
-   display: flex;
-   gap: .5rem
+ .SeasonPassStrip:not(.SeasonPassStripLoading).pad-focused {
+   filter: brightness(1.15)
```

#### 1630. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16080-L16082` → after: `L17433-L17436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17433-L17436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17433-L17436) · [Before (L16080-L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16080-L16082)

```diff
- .YoutubeHomepageSection .YoutubeHomepageSectionTitleBar .YoutubeHomepageSectionTitle {
-   color: #fff;
-   font-size: 1.3rem
+ @media(hover:none) {
+   .SeasonPassStrip:not(.SeasonPassStripLoading):active {
+     filter: brightness(1.15)
+   }
```

#### 1631. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16085-L16086` → after: `L17439-L17442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17439-L17442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17439-L17442) · [Before (L16085-L16086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16085-L16086)

```diff
- .YoutubeHomepageSection .YoutubeHomepageSectionTitleBar .YoutubeHomepageSectionSubscribeButton {
-   margin-left: .5rem
+ .SeasonPassStrip:not(.SeasonPassStripLoading)[data-pressing] {
+   border-color: #ffb914;
+   filter: brightness(.8);
+   transition: none
```

#### 1632. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16089-L16091` → after: `L17445-L17447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17445-L17447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17445-L17447) · [Before (L16089-L16091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16089-L16091)

```diff
- .YoutubeHomepageSection .YoutubeHomepageSectionTitleBar .YoutubeHomepageSectionSubscribeButton .svg-inline--fa {
-   color: #fff;
-   font-size: 1.6rem
+ .SeasonPassStrip.SeasonPassStripLoading {
+   background-color: #303a59;
+   cursor: default
```

#### 1633. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16094-L16095` → after: `L17450-L17454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17450-L17454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17450-L17454) · [Before (L16094-L16095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16094-L16095)

```diff
- .YoutubeHomepageSection .YoutubeHomepageSectionBody {
-   align-items: stretch;
+ .SeasonPassStrip .SeasonPassStripSeason {
+   background: conic-gradient(#ffb914 calc(var(--season-progress)*1turn), #1a1f2e 0);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-sizing: border-box;
```

#### 1634. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16097-L16099` → after: `L17456-L17460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17456-L17460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17456-L17460) · [Before (L16097-L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16097-L16099)

```diff
-   flex-direction: row;
-   gap: 0;
-   width: 100%
+   flex: none;
+   height: 4.4rem;
+   padding: 3px;
+   position: relative;
+   width: 7.5rem
```

#### 1635. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16102-L16105` → after: `L17463-L17470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17463-L17470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17463-L17470) · [Before (L16102-L16105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16102-L16105)

```diff
- .YoutubeHomepageSection .YoutubeLiveColumn,
- .YoutubeHomepageSection .YoutubeVideosColumn {
-   border-right: 2px solid rgba(0, 0, 0, .35);
-   padding-right: .475rem
+ .SeasonPassStrip .SeasonPassStripSeason .SeasonPassStripSeasonInner {
+   background-color: #394980;
+   display: flex;
+   flex: 1 1;
+   flex-direction: column;
+   justify-content: center;
+   min-width: 0;
+   padding: 0 .5rem
```

#### 1636. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16108-L16110` → after: `L17473-L17479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17473-L17479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17473-L17479) · [Before (L16108-L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16108-L16110)

```diff
- .YoutubeHomepageSection .YoutubeShortsColumn,
- .YoutubeHomepageSection .YoutubeVideosColumn {
-   padding-left: .375rem
+ .SeasonPassStrip .SeasonPassStripSeason .SeasonPassStripSeasonName {
+   font-size: .95rem;
+   line-height: 1.2;
+   overflow-x: hidden;
+   overflow-y: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 1637. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16113` → after: `L17482-L17492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17482-L17492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17482-L17492) · [Before (L16113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16113)

```diff
- .YoutubeHomepageSection .YoutubeSubsectionHeader {
+ .SeasonPassStrip .SeasonPassStripSeason .SeasonPassStripSeasonTime {
+   color: #cfcfcf;
+   font-size: .75rem;
+   line-height: 1.2;
+   overflow-x: hidden;
+   overflow-y: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
+ }
+ 
+ .SeasonPassStrip .SeasonPassStripSeason .SeasonPassStripBadge {
```

#### 1638. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16117-L16121` → after: `L17499-L17507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17499-L17507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17499-L17507) · [Before (L16117-L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16117-L16121)

```diff
-   gap: .5rem;
-   justify-content: space-between;
-   margin-bottom: .35rem;
-   padding-left: .25rem;
-   width: 100%
+   font-size: .75rem;
+   font-weight: 900;
+   height: 1.3rem;
+   justify-content: center;
+   min-width: 1.3rem;
+   padding: 0 .2rem;
+   position: absolute;
+   right: -.5rem;
+   top: -.5rem
```

#### 1639. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16124-L16126` → after: `L17510-L17517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17510-L17517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17510-L17517) · [Before (L16124-L16126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16124-L16126)

```diff
- .YoutubeHomepageSection .YoutubeSubsectionHeader .YoutubeSubsectionTitle {
-   color: #fff;
-   font-size: 1.2rem
+ .SeasonPassStrip .SeasonPassStripTrack {
+   container: seasonPassTrack/inline-size;
+   align-items: center;
+   display: flex;
+   flex: 1 1;
+   flex-direction: column;
+   gap: .2rem;
+   min-width: 0
```

#### 1640. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16129-L16132` → after: `L17520-L17529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17520-L17529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17520-L17529) · [Before (L16129-L16132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16129-L16132)

```diff
- .YoutubeHomepageSection .YoutubeSubsectionHeader .YoutubeSubsectionSeeMore {
-   color: #ffb914;
-   font-size: 1rem;
-   transition: opacity .2s
+ .SeasonPassStrip .SeasonPassStripRewards {
+   --fits: 3;
+   --shown: min(var(--fits), var(--tier-count));
+   --first: clamp(1, var(--target) - (var(--shown) - 1)/2, var(--tier-count) - var(--shown) + 1);
+   --chip-room: 0rem;
+   --step: calc((100cqw - 6.4rem - var(--chip-room))/(var(--shown) - 1));
+   box-sizing: border-box;
+   padding: 0 1rem;
+   position: relative;
+   width: 100%
```

#### 1641. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16135-L16138` → after: `L17532-L17540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17532-L17540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17532-L17540) · [Before (L16135-L16138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16135-L16138)

```diff
- @media(hover:hover) {
-   .YoutubeHomepageSection .YoutubeSubsectionHeader .YoutubeSubsectionSeeMore:hover {
-     opacity: .85
-   }
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripMore {
+   color: #cfcfcf;
+   font-weight: 900;
+   line-height: 1;
+   position: absolute;
+   text-align: center;
+   top: 50%;
+   transform: translateY(-50%);
+   width: 1rem
```

#### 1642. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16141-L16142` → after: `L17543-L17545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17543-L17545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17543-L17545) · [Before (L16141-L16142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16141-L16142)

```diff
- .YoutubeHomepageSection .YoutubeSubsectionHeader .YoutubeSubsectionSeeMore.pad-focused {
-   opacity: .85
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripMore.SeasonPassStripMoreBefore {
+   left: 0;
+   opacity: clamp(0, var(--first) - 1, 1)
```

#### 1643. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16145-L16148` → after: `L17548-L17550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17548-L17550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17548-L17550) · [Before (L16145-L16148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16145-L16148)

```diff
- @media(hover:none) {
-   .YoutubeHomepageSection .YoutubeSubsectionHeader .YoutubeSubsectionSeeMore:active {
-     opacity: .85
-   }
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripMore.SeasonPassStripMoreAfter {
+   opacity: clamp(0, var(--tier-count) - var(--first) - var(--shown) + 1, 1);
+   right: 0
```

#### 1644. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16151-L16157` → after: `L17553-L17556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17553-L17556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17553-L17556) · [Before (L16151-L16157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16151-L16157)

```diff
- .YoutubeHomepageSection .YoutubeTile {
-   border-radius: 0;
-   display: flex;
-   flex-direction: column;
-   flex-shrink: 0;
-   height: auto;
-   position: relative
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripWindow {
+   display: block;
+   height: 5.6rem;
+   overflow: hidden
```

#### 1645. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16160-L16163` → after: `L17559-L17561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17559-L17561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17559-L17561) · [Before (L16160-L16163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16160-L16163)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileThumbnail {
-   background-color: #394980;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   flex-shrink: 0;
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripRow {
+   display: block;
+   height: 100%;
```

#### 1646. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16165-L16166` → after: `L17563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17563) · [Before (L16165-L16166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16165-L16166)

```diff
-   transition: transform .2s;
-   width: 100%
+   transform: translateX(calc((1 - var(--first))*var(--step)))
```

#### 1647. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16169-L16170` → after: `L17566-L17573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17566-L17573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17566-L17573) · [Before (L16169-L16170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16169-L16170)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileThumbnail.YoutubeVideoTile {
-   aspect-ratio: 16/9
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripLine {
+   background-color: #1a1f2e;
+   height: .3rem;
+   left: calc((var(--tier) - 2)*var(--step) + 2.2rem + var(--past-target)*var(--chip-room));
+   position: absolute;
+   top: 50%;
+   transform: translateY(-50%);
+   width: calc(var(--step) + var(--into-target)*var(--chip-room))
```

#### 1648. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16173-L16174` → after: `L17576-L17577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17576-L17577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17576-L17577) · [Before (L16173-L16174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16173-L16174)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileThumbnail.YoutubeShortTile {
-   aspect-ratio: 9/16
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripLine.SeasonPassStripLineFilled {
+   background-color: #ffb914
```

#### 1649. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16177-L16180` → after: `L17580-L17595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17580-L17595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17580-L17595) · [Before (L16177-L16180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16177-L16180)

```diff
- @media(hover:hover) {
-   .YoutubeHomepageSection .YoutubeTile .YoutubeTileThumbnail:hover {
-     transform: scale(1.03)
-   }
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward {
+   --reward-fill: #3c4b68;
+   align-items: center;
+   background: linear-gradient(var(--reward-fill), var(--reward-fill)), #3c4b68;
+   border: 2px solid #0f0f0f;
+   border-radius: 50%;
+   box-sizing: border-box;
+   display: flex;
+   font-size: 1.5rem;
+   height: 3.4rem;
+   justify-content: center;
+   left: calc((var(--tier) - 1)*var(--step) + 2.2rem + var(--past-target)*var(--chip-room));
+   position: absolute;
+   top: 50%;
+   transform: translate(-50%, -50%);
+   width: 3.4rem
```

#### 1650. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16183-L16184` → after: `L17598-L17599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17598-L17599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17598-L17599) · [Before (L16183-L16184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16183-L16184)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileThumbnail.pad-focused {
-   transform: scale(1.03)
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward.SeasonPassStripRewardSuper {
+   --reward-fill: #604c20
```

#### 1651. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16187-L16190` → after: `L17602-L17603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17602-L17603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17602-L17603) · [Before (L16187-L16190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16187-L16190)

```diff
- @media(hover:none) {
-   .YoutubeHomepageSection .YoutubeTile .YoutubeTileThumbnail:active {
-     transform: scale(1.03)
-   }
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward.SeasonPassStripRewardReached {
+   border-color: #ffb914
```

#### 1652. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16193-L16198` → after: `L17606-L17607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17606-L17607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17606-L17607) · [Before (L16193-L16198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16193-L16198)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileInfo {
-   display: flex;
-   flex-direction: column;
-   gap: .15rem;
-   min-width: 0;
-   padding: .35rem .4rem .45rem
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward.SeasonPassStripReward-claimable {
+   --reward-fill: rgba(255, 185, 20, .15)
```

#### 1653. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16201-L16209` → after: `L17610-L17614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17610-L17614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17610-L17614) · [Before (L16201-L16209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16201-L16209)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileTitle {
-   -webkit-box-orient: vertical;
-   -webkit-line-clamp: 1;
-   color: #fff;
-   display: -webkit-box;
-   font-size: .85rem;
-   line-height: 1.2;
-   overflow: hidden;
-   text-align: left
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward.SeasonPassStripRewardTarget {
+   background-image: conic-gradient(#ffb914 calc(var(--ring-progress)*1turn), #2b3249 0);
+   font-size: 1.7rem;
+   height: 4.4rem;
+   width: 4.4rem
```

#### 1654. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16212-L16213` → after: `L17617-L17622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17617-L17622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17617-L17622) · [Before (L16212-L16213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16212-L16213)

```diff
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMeta {
-   font-size: .75rem
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward.SeasonPassStripRewardTarget:before {
+   background: linear-gradient(var(--reward-fill), var(--reward-fill)), #3c4b68;
+   border-radius: 50%;
+   content: "";
+   inset: .5rem;
+   position: absolute
```

#### 1655. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16215-L16217` → after: `L17624-L17626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17624-L17626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17624-L17626) · [Before (L16215-L16217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16215-L16217)

```diff
- 
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileInfo {
-   padding: .3rem .25rem
+ 
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward.SeasonPassStripRewardTarget .SeasonPassRewardIcon {
+   position: relative
```

#### 1656. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16220-L16227` → after: `L17629-L17630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17629-L17630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17629-L17630) · [Before (L16220-L16227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16220-L16227)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMeta {
-   color: #cfcfcf;
-   display: flex;
-   font-size: .75rem;
-   gap: .1rem;
-   justify-content: space-between;
-   line-height: 1.2;
-   min-width: 0
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward.SeasonPassStripRewardTarget .SeasonPassRewardIcon.SeasonPassRewardIconWithEffect {
+   inset: .5rem
```

#### 1657. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16230-L16233` → after: `L17633-L17634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17633-L17634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17633-L17634) · [Before (L16230-L16233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16230-L16233)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMeta .YoutubeTileAuthor {
-   max-width: 100%;
-   overflow-y: hidden;
-   transition: filter .2s
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward.SeasonPassStripReward-claimed .SeasonPassRewardIcon {
+   filter: brightness(.6)
```

#### 1658. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16236-L16239` → after: `L17637-L17638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17637-L17638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17637-L17638) · [Before (L16236-L16239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16236-L16239)

```diff
- @media(hover:hover) {
-   .YoutubeHomepageSection .YoutubeTile .YoutubeTileMeta .YoutubeTileAuthor:hover {
-     filter: brightness(1.5)
-   }
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward .SeasonPassRewardIcon.SeasonPassRewardIcon-xpBoost {
+   color: #85baff
```

#### 1659. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16242-L16243` → after: `L17641-L17642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17641-L17642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17641-L17642) · [Before (L16242-L16243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16242-L16243)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMeta .YoutubeTileAuthor.pad-focused {
-   filter: brightness(1.5)
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward .SeasonPassRewardIcon.SeasonPassRewardIcon-cosmetic {
+   color: #fcd373
```

#### 1660. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16246-L16249` → after: `L17645-L17648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17645-L17648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17645-L17648) · [Before (L16246-L16249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16246-L16249)

```diff
- @media(hover:none) {
-   .YoutubeHomepageSection .YoutubeTile .YoutubeTileMeta .YoutubeTileAuthor:active {
-     filter: brightness(1.5)
-   }
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward .SeasonPassRewardIcon .SeasonPassRewardIconPreview {
+   height: 1.6em;
+   object-fit: contain;
+   width: 1.6em
```

#### 1661. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16252-L16255` → after: `L17651-L17655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17651-L17655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17651-L17655) · [Before (L16252-L16255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16252-L16255)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMeta .YoutubeTileAuthor {
-   overflow-x: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward .SeasonPassRewardIcon.SeasonPassRewardIconWithEffect {
+   border-radius: 50%;
+   inset: 0;
+   overflow: hidden;
+   position: absolute
```

#### 1662. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16258-L16261` → after: `L17658-L17660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17658-L17660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17658-L17660) · [Before (L16258-L16261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16258-L16261)

```diff
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMeta {
-   align-items: center;
-   flex-direction: column;
-   gap: .25rem
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripReward .SeasonPassRewardIcon.SeasonPassRewardIconWithEffect .SeasonPassRewardIconEffect {
+   height: 100%;
+   width: 100%
```

#### 1663. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16264-L16268` → after: `L17663-L17675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17663-L17675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17663-L17675) · [Before (L16264-L16268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16264-L16268)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileAuthorPlaceholder,
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileTitlePlaceholder,
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileViewCountPlaceholder {
-   animation: pulseYoutubePlaceholder 1s infinite;
-   background-color: hsla(0, 0%, 100%, .22)
+ .SeasonPassStrip .SeasonPassStripRewards .SeasonPassStripXp {
+   background-color: #1a1f2e;
+   border: 1px solid #0f0f0f;
+   color: #ffb914;
+   font-size: .75rem;
+   font-weight: 900;
+   left: calc((var(--tier) - 1)*var(--step) + 2.2rem);
+   line-height: 1.2;
+   padding: .05rem .4rem;
+   position: absolute;
+   top: calc(50% + 2.2rem);
+   transform: translate(-50%, -50%);
+   white-space: nowrap
```

#### 1664. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16271-L16273` → after: `L17678-L17680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17678-L17680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17678-L17680) · [Before (L16271-L16273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16271-L16273)

```diff
- @keyframes pulseYoutubePlaceholder {
-   0% {
-     opacity: .22
+ @container seasonPassTrack (min-width: 19.8rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --chip-room: 5rem
```

#### 1665. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16276-L16277` → after: `L17683-L17686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17683-L17686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17683-L17686) · [Before (L16276-L16277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16276-L16277)

```diff
-   50% {
-     opacity: .44
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp .SeasonPassStripXp {
+     left: calc((var(--tier) - 1)*var(--step) + var(--chip-room) - .3rem);
+     top: 50%;
+     transform: translate(-100%, -50%)
```

#### 1666. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16280-L16281` → after: `L17690-L17692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17690-L17692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17690-L17692) · [Before (L16280-L16281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16280-L16281)

```diff
-   to {
-     opacity: .22
+ @container seasonPassTrack (min-width: 23.2rem) {
+   .SeasonPassStrip .SeasonPassStripRewards:not(.SeasonPassStripRewardsXp) {
+     --fits: 5
```

#### 1667. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16285-L16287` → after: `L17696-L17699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17696-L17699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17696-L17699) · [Before (L16285-L16287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16285-L16287)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileTitlePlaceholder,
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileTitleSpacer {
-   height: 1rem
+ @container seasonPassTrack (min-width: 28.2rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --fits: 5
+   }
```

#### 1668. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16290-L16295` → after: `L17702-L17705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17702-L17705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17702-L17705) · [Before (L16290-L16295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16290-L16295)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaPlaceholder,
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaSpacer {
-   display: flex;
-   flex-direction: row;
-   height: .85rem;
-   justify-content: space-between
+ @container seasonPassTrack (min-width: 31.6rem) {
+   .SeasonPassStrip .SeasonPassStripRewards:not(.SeasonPassStripRewardsXp) {
+     --fits: 7
+   }
```

#### 1669. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16298-L16302` → after: `L17708-L17711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17708-L17711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17708-L17711) · [Before (L16298-L16302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16298-L16302)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaPlaceholder .YoutubeTileAuthorPlaceholder,
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaPlaceholder .YoutubeTileAuthorSpacer,
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaSpacer .YoutubeTileAuthorPlaceholder,
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaSpacer .YoutubeTileAuthorSpacer {
-   width: 45%
+ @container seasonPassTrack (min-width: 36.6rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --fits: 7
+   }
```

#### 1670. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16305-L16309` → after: `L17714-L17717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17714-L17717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17714-L17717) · [Before (L16305-L16309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16305-L16309)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaPlaceholder .YoutubeTileViewCountPlaceholder,
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaPlaceholder .YoutubeTileViewCountSpacer,
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaSpacer .YoutubeTileViewCountPlaceholder,
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileMetaSpacer .YoutubeTileViewCountSpacer {
-   width: 20%
+ @container seasonPassTrack (min-width: 40rem) {
+   .SeasonPassStrip .SeasonPassStripRewards:not(.SeasonPassStripRewardsXp) {
+     --fits: 9
+   }
```

#### 1671. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16312-L16314` → after: `L17720-L17723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17720-L17723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17720-L17723) · [Before (L16312-L16314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16312-L16314)

```diff
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileTitlePlaceholder,
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileTitleSpacer {
-   height: .75rem
+ @container seasonPassTrack (min-width: 45rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --fits: 9
+   }
```

#### 1672. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16317-L16323` → after: `L17726-L17729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17726-L17729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17726-L17729) · [Before (L16317-L16323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16317-L16323)

```diff
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaPlaceholder,
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaSpacer {
-   align-items: center;
-   flex-direction: column;
-   gap: .15rem;
-   height: 1.25rem;
-   width: 100%
+ @container seasonPassTrack (min-width: 48.4rem) {
+   .SeasonPassStrip .SeasonPassStripRewards:not(.SeasonPassStripRewardsXp) {
+     --fits: 11
+   }
```

#### 1673. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16326-L16331` → after: `L17732-L17735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17732-L17735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17732-L17735) · [Before (L16326-L16331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16326-L16331)

```diff
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaPlaceholder .YoutubeTileAuthorPlaceholder,
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaPlaceholder .YoutubeTileAuthorSpacer,
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaSpacer .YoutubeTileAuthorPlaceholder,
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaSpacer .YoutubeTileAuthorSpacer {
-   height: 100%;
-   width: 75%
+ @container seasonPassTrack (min-width: 53.4rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --fits: 11
+   }
```

#### 1674. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16334-L16339` → after: `L17738-L17741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17738-L17741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17738-L17741) · [Before (L16334-L16339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16334-L16339)

```diff
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaPlaceholder .YoutubeTileViewCountPlaceholder,
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaPlaceholder .YoutubeTileViewCountSpacer,
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaSpacer .YoutubeTileViewCountPlaceholder,
- .YoutubeHomepageSection .YoutubeTile.YoutubeShortTile .YoutubeTileMetaSpacer .YoutubeTileViewCountSpacer {
-   height: 100%;
-   width: 50%
+ @container seasonPassTrack (min-width: 56.8rem) {
+   .SeasonPassStrip .SeasonPassStripRewards:not(.SeasonPassStripRewardsXp) {
+     --fits: 13
+   }
```

#### 1675. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16342-L16346` → after: `L17744-L17747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17744-L17747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17744-L17747) · [Before (L16342-L16346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16342-L16346)

```diff
- .YoutubeHomepageSection .YoutubeTile.YoutubeTileSpacer {
-   background: none;
-   border-radius: 0;
-   box-shadow: none;
-   pointer-events: none
+ @container seasonPassTrack (min-width: 61.8rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --fits: 13
+   }
```

#### 1676. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16349-L16351` → after: `L17750-L17753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17750-L17753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17750-L17753) · [Before (L16349-L16351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16349-L16351)

```diff
- .YoutubeHomepageSection .YoutubeTile.YoutubeTileSpacer .YoutubeTileThumbnail {
-   background: none;
-   box-shadow: none
+ @container seasonPassTrack (min-width: 65.2rem) {
+   .SeasonPassStrip .SeasonPassStripRewards:not(.SeasonPassStripRewardsXp) {
+     --fits: 15
+   }
```

#### 1677. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16354-L16356` → after: `L17756-L17758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17756-L17758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17756-L17758) · [Before (L16354-L16356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16354-L16356)

```diff
- @media(hover:hover) {
-   .YoutubeHomepageSection .YoutubeTile.YoutubeTileSpacer:hover {
-     transform: none
+ @container seasonPassTrack (min-width: 70.2rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --fits: 15
```

#### 1678. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16360-L16361` → after: `L17762-L17765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17762-L17765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17762-L17765) · [Before (L16360-L16361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16360-L16361)

```diff
- .YoutubeHomepageSection .YoutubeTile.YoutubeTileSpacer.pad-focused {
-   transform: none
+ @container seasonPassTrack (min-width: 73.6rem) {
+   .SeasonPassStrip .SeasonPassStripRewards:not(.SeasonPassStripRewardsXp) {
+     --fits: 17
+   }
```

#### 1679. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16364-L16366` → after: `L17768-L17770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17768-L17770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17768-L17770) · [Before (L16364-L16366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16364-L16366)

```diff
- @media(hover:none) {
-   .YoutubeHomepageSection .YoutubeTile.YoutubeTileSpacer:active {
-     transform: none
+ @container seasonPassTrack (min-width: 78.6rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --fits: 17
```

#### 1680. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16370-L16374` → after: `L17774-L17777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17774-L17777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17774-L17777) · [Before (L16370-L16374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16370-L16374)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileImage {
-   display: block;
-   height: 100%;
-   object-fit: cover;
-   width: 100%
+ @container seasonPassTrack (min-width: 82rem) {
+   .SeasonPassStrip .SeasonPassStripRewards:not(.SeasonPassStripRewardsXp) {
+     --fits: 19
+   }
```

#### 1681. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16377-L16383` → after: `L17780-L17783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17780-L17783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17780-L17783) · [Before (L16377-L16383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16377-L16383)

```diff
- .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder .YoutubeTileThumbnail {
-   align-items: center;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   display: flex;
-   justify-content: center
+ @container seasonPassTrack (min-width: 87rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --fits: 19
+   }
```

#### 1682. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16386-L16392` → after: `L17786-L17789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17786-L17789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17786-L17789) · [Before (L16386-L16392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16386-L16392)

```diff
- .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder[data-off-screen] .YoutubeTileAuthorPlaceholder,
- .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder[data-off-screen] .YoutubeTileTitlePlaceholder,
- .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder[data-off-screen] .YoutubeTileViewCountPlaceholder,
- html[data-app-covered] .WholeAppWrapper .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder .YoutubeTileAuthorPlaceholder,
- html[data-app-covered] .WholeAppWrapper .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder .YoutubeTileTitlePlaceholder,
- html[data-app-covered] .WholeAppWrapper .YoutubeHomepageSection .YoutubeTile.YoutubeTilePlaceholder .YoutubeTileViewCountPlaceholder {
-   animation-play-state: paused
+ @container seasonPassTrack (min-width: 90.4rem) {
+   .SeasonPassStrip .SeasonPassStripRewards:not(.SeasonPassStripRewardsXp) {
+     --fits: 21
+   }
```

#### 1683. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16395-L16403` → after: `L17792-L17795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17792-L17795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17792-L17795) · [Before (L16395-L16403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16395-L16403)

```diff
- .YoutubeHomepageSection .YoutubeTile .YoutubeTileLiveBadge {
-   background: #f03;
-   color: #fff;
-   font-size: .85rem;
-   font-weight: 800;
-   left: .35rem;
-   padding: .1rem .45rem;
-   position: absolute;
-   top: .35rem
+ @container seasonPassTrack (min-width: 95.4rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --fits: 21
+   }
```

#### 1684. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16406-L16411` → after: `L17798-L17801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17798-L17801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17798-L17801) · [Before (L16406-L16411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16406-L16411)

```diff
- .YoutubeHomepageSection .YoutubeLiveColumn {
-   align-self: stretch;
-   display: flex;
-   flex: 1 1;
-   flex-direction: column;
-   min-width: 0
+ @container seasonPassTrack (min-width: 98.8rem) {
+   .SeasonPassStrip .SeasonPassStripRewards:not(.SeasonPassStripRewardsXp) {
+     --fits: 23
+   }
```

#### 1685. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16414-L16423` → after: `L17804-L17807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17804-L17807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17804-L17807) · [Before (L16414-L16423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16414-L16423)

```diff
- .YoutubeHomepageSection .YoutubeLiveColumn .YoutubeLiveColumnTiles {
-   grid-gap: .5rem;
-   align-items: start;
-   display: grid;
-   flex: 1 1;
-   gap: .5rem;
-   grid-template-columns: minmax(0, 1fr);
-   grid-template-rows: 1fr 1fr 1fr;
-   min-height: 0;
-   width: 100%
+ @container seasonPassTrack (min-width: 103.8rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --fits: 23
+   }
```

#### 1686. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16426-L16428` → after: `L17810-L17813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17810-L17813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17810-L17813) · [Before (L16426-L16428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16426-L16428)

```diff
- .YoutubeHomepageSection .YoutubeLiveColumn .YoutubeLiveColumnTiles .YoutubeTile {
-   align-self: start;
-   width: 100%
+ @container seasonPassTrack (min-width: 107.2rem) {
+   .SeasonPassStrip .SeasonPassStripRewards:not(.SeasonPassStripRewardsXp) {
+     --fits: 25
+   }
```

#### 1687. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16431-L16436` → after: `L17816-L17819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17816-L17819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17816-L17819) · [Before (L16431-L16436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16431-L16436)

```diff
- .YoutubeHomepageSection .YoutubeVideosColumn {
-   align-self: stretch;
-   display: flex;
-   flex: calc(var(--youtube-video-slot-count)*1) 1 0;
-   flex-direction: column;
-   min-width: 0
+ @container seasonPassTrack (min-width: 112.2rem) {
+   .SeasonPassStrip .SeasonPassStripRewards.SeasonPassStripRewardsXp {
+     --fits: 25
+   }
```

#### 1688. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16439-L16448` → after: `L17822-L17830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17822-L17830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17822-L17830) · [Before (L16439-L16448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16439-L16448)

```diff
- .YoutubeHomepageSection .YoutubeVideosColumn .YoutubeVideosColumnTiles {
-   grid-gap: .5rem;
-   align-items: start;
-   display: grid;
-   flex: 1 1;
-   gap: .5rem;
-   grid-template-columns: repeat(var(--youtube-video-slot-count), minmax(0, 1fr));
-   grid-template-rows: 1fr 1fr 1fr;
-   min-height: 0;
-   width: 100%
+ .SeasonPassStrip .SeasonPassStripClaimWindow {
+   color: #fcd373;
+   font-size: .8rem;
+   line-height: 1.2;
+   max-width: 100%;
+   overflow-x: hidden;
+   overflow-y: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 1689. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16451-L16456` → after: `L17833-L17852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17833-L17852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17833-L17852) · [Before (L16451-L16456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16451-L16456)

```diff
- .YoutubeHomepageSection .YoutubeShortsColumn {
-   align-self: stretch;
-   display: flex;
-   flex: calc(var(--youtube-shorts-slot-count)*0.35) 1 0;
-   flex-direction: column;
-   min-width: 0
+ @media(prefers-reduced-motion:no-preference) {
+   .SeasonPassStrip.SeasonPassStripMoving .SeasonPassStripRewards .SeasonPassStripMore {
+     transition: opacity .9s ease-in-out
+   }
+ 
+   .SeasonPassStrip.SeasonPassStripMoving .SeasonPassStripRewards .SeasonPassStripRow {
+     transition: transform .9s ease-in-out
+   }
+ 
+   .SeasonPassStrip.SeasonPassStripMoving .SeasonPassStripRewards .SeasonPassStripLine {
+     transition: left .9s ease-in-out, width .9s ease-in-out, background-color .9s ease-in-out
+   }
+ 
+   .SeasonPassStrip.SeasonPassStripMoving .SeasonPassStripRewards .SeasonPassStripReward {
+     transition: left .9s ease-in-out, width .9s ease-in-out, height .9s ease-in-out, font-size .9s ease-in-out, border-color .9s ease-in-out, --ring-progress .9s ease-in-out
+   }
+ ... (4 more added lines; see GitHub link above)
```

#### 1690. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16459-L16468` → after: `L17855-L17863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17855-L17863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17855-L17863) · [Before (L16459-L16468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16459-L16468)

```diff
- .YoutubeHomepageSection .YoutubeShortsColumn .YoutubeShortsColumnTiles {
-   grid-gap: .5rem;
-   align-items: start;
-   display: grid;
-   flex: 1 1;
-   gap: .5rem;
-   grid-template-columns: repeat(var(--youtube-shorts-slot-count), minmax(0, 1fr));
-   grid-template-rows: 1fr 1fr;
-   min-height: 0;
-   width: 100%
+ @media(max-width:480px) {
+   .SeasonPassStrip {
+     gap: .5rem;
+     padding: .5rem
+   }
+ 
+   .SeasonPassStrip .SeasonPassStripSeason {
+     width: 6.25rem
+   }
```

#### 1691. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16471-L16472` → after: `L17866-L17873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17866-L17873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17866-L17873) · [Before (L16471-L16472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16471-L16472)

```diff
- .YoutubeHomepageSection.Portrait .YoutubeHomepageSectionBody {
-   flex-direction: column
+ .SeasonPassBackdrop {
+   background-color: #22283b;
+   background-position: 50%;
+   background-size: cover;
+   inset: 0;
+   pointer-events: none;
+   position: absolute;
+   z-index: -1
```

#### 1692. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L16475-L16478` → after: `L17876-L17880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR17876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L17876-L17880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.css#L17876-L17880) · [Before (L16475-L16478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.css#L16475-L16478)

```diff
- .YoutubeHomepageSection.Portrait .YoutubeLiveColumn,
- .YoutubeHomepageSection.Portrait .YoutubeShortsColumn,
- .YoutubeHomepageSection.Portrait .YoutubeVideosColumn {
-   flex: none
+ .SeasonPassBackdrop:after {
+   background-color: rgba(26, 31, 46, .6);
+   content: "";
+   inset: 0;
+   position: absolute
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/main.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/main.js` (1182 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78)

#### 1. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1)

```diff
- /*! For license information please see 8104he.main.3820eae0.js.LICENSE.txt */
+ /*! For license information please see fo1voe.main.f743fbcf.js.LICENSE.txt */
```

#### 2. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3)

```diff
-     var QQ = [, , , , , , , , , , , , (QQ, WQ, XQ) => {
+     var MM = [, , , , , , , , , , (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5-L8` → after: `L5-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5-L9) · [Before (L5-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5-L8)

```diff
-             $: () => uQ,
-             D: () => JQ,
-             G: () => AQ,
-             J: () => lQ,
+             B: () => HM,
+             C: () => LM,
+             F: () => WM,
+             H: () => gM,
+             K: () => AM,
```

#### 4. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12-L19` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L12-L17) · [Before (L12-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L12-L19)

```diff
-             T: () => UQ,
-             W: () => RQ,
-             Y: () => gQ,
-             ab: () => pQ,
-             c: () => jQ,
-             db: () => GQ,
-             e: () => yQ,
-             eb: () => PQ,
+             R: () => GM,
+             V: () => sM,
+             Z: () => zM,
+             _: () => ZM,
+             b: () => hM,
+             bb: () => EM,
```

#### 5. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L21` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L19-L20) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L21)

```diff
-             gb: () => iQ,
+             fb: () => UM,
+             g: () => yM,
```

#### 6. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L23-L26` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L22-L26) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L23-L26)

```diff
-             k: () => sQ,
-             kb: () => wQ,
-             o: () => FQ,
-             s: () => DQ,
+             jb: () => QM,
+             mb: () => RM,
+             n: () => PM,
+             nb: () => OM,
+             r: () => nM,
```

#### 7. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L28-L29` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L28-L29) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L28-L29)

```diff
-             x: () => qQ,
-             z: () => IQ
+             v: () => xM,
+             y: () => SM
```

#### 8. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L141)

```diff
-         }, , , , , , , , (QQ, WQ, XQ) => {
+         }, , , (MM, rM, iM) => {
```

#### 9. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L143)

```diff
-             c: () => sQ
+             d: () => PM
```

#### 10. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L145-L146` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L145-L146) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L145-L146)

```diff
-           var wQ = XQ(26),
-             qQ = XQ(764);
+           var OM = iM(19),
+             SM = iM(775);
```

#### 11. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L168)

```diff
-             (wQ.b.set({
+             (OM.d.set({
```

#### 12. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L171)

```diff
-           })), "VConsole" in window && (0, qQ.b)()
+           })), "VConsole" in window && (0, SM.d)()
```

#### 13. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L174-L175` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L174-L175) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L174-L175)

```diff
-             b: () => yW,
-             e: () => pW,
+             d: () => dr,
+             h: () => Er,
```

#### 14. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L177-L178` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L177-L178) · [Before (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L177-L178)

```diff
-             m: () => VW,
-             n: () => GW
+             j: () => yr,
+             m: () => Ur
```

#### 15. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L180-L185` → after: `L180-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L180-L185) · [Before (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L180-L185)

```diff
-           var wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ = XQ(31),
-             fQ = XQ(382),
-             SQ = XQ(402),
-             tQ = XQ(43),
-             oQ = XQ(55),
-             eQ = XQ(40),
+           var OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM, sM, DM, kM, ZM, oM, fM = iM(22),
+             YM = iM(313),
+             NM = iM(332),
+             AM = iM(30),
+             xM = iM(41),
+             vM = iM(25),
```

#### 16. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L187-L200` → after: `L187-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L187-L200) · [Before (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L187-L200)

```diff
-             xQ = XQ(61),
-             YQ = XQ(78),
-             NQ = XQ(105),
-             ZQ = XQ(297),
-             OQ = XQ(360),
-             KQ = XQ(367),
-             mQ = XQ(675),
-             MQ = XQ(134),
-             QW = XQ(689),
-             WW = XQ(691),
-             XW = XQ(333),
-             wW = XQ(731),
-             qW = XQ(739),
-             TW = XQ(747);
+             BM = iM(44),
+             XM = iM(65),
+             IM = iM(83),
+             KM = iM(229),
+             qM = iM(299),
+             TM = iM(308),
+             VM = iM(637),
+             cM = iM(106),
+             Mr = iM(650),
+             rr = iM(656),
+             ir = iM(275),
+             Or = iM(730),
+             Sr = iM(738),
+             jr = iM(746);
```

#### 17. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L204)

```diff
-             return QW.f ? "webgl_holdback" : !0 === tQ.i.getItem(MQ.B) ? "old_intel_driver" : QW.h && !0 === tQ.i.getItem(MQ.A) ? "intel_gen9" : WW.x && (0, QW.e)(tQ.i.getItem(MQ.x)) ? "gpu_class_webgl" : WW.x && !0 === tQ.i.getItem(MQ.G) ? "gpu_wasm_arm" : !WW.x && (0, QW.l)(nav … [truncated]
+             return Mr.i ? "webgl_holdback" : !0 === AM.g.getItem(cM.N) ? "old_intel_driver" : Mr.k && !0 === AM.g.getItem(cM.J) ? "intel_gen9" : rr.H && (0, Mr.e)(AM.g.getItem(cM.H)) ? "gpu_class_webgl" : rr.H && !0 === AM.g.getItem(cM.R) ? "gpu_wasm_arm" : !rr.H && (0, Mr.o)(nav … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L208)

```diff
-             return QW.r && null === sW()
+             return Mr.w && null === Pr()
```

#### 19. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L211-L212)

```diff
-           const gW = QW.r && null === PW;
-           let JW = null === tQ.i.getItem(fQ.mc);
+           const zr = Mr.w && null === Qr;
+           let Lr = null === AM.g.getItem(YM.fc);
```

#### 20. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L225-L226` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L225-L226) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L225-L226)

```diff
-             soundVolume: (0, oQ.c)(),
-             musicVolume: null !== (wQ = tQ.i.getItem("musicVol")) && void 0 !== wQ ? wQ : .5,
+             soundVolume: (0, xM.b)(),
+             musicVolume: null !== (OM = AM.g.getItem("musicVol")) && void 0 !== OM ? OM : .5,
```

#### 21. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L240-L241` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L240-L241) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L240-L241)

```diff
-               const QQ = tQ.i.getItem("showDistantNametags");
-               return "boolean" === typeof QQ ? QQ : null
+               const MM = AM.g.getItem("showDistantNametags");
+               return "boolean" === typeof MM ? MM : null
```

#### 22. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L254-L255` → after: `L255-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L255-L256) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L254-L255)

```diff
-             showDebugOverlay: null !== (qQ = tQ.i.getItem("showDebugOverlay")) && void 0 !== qQ && qQ,
-             enabledDebugFeatures: null !== (TQ = tQ.i.getItem("enabledDebugFeatures")) && void 0 !== TQ ? TQ : {},
+             showDebugOverlay: null !== (SM = AM.g.getItem("showDebugOverlay")) && void 0 !== SM && SM,
+             enabledDebugFeatures: null !== (jM = AM.g.getItem("enabledDebugFeatures")) && void 0 !== jM ? jM : {},
```

#### 23. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L263-L266` → after: `L265-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L265-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L265-L268) · [Before (L263-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L263-L266)

```diff
-               useProfanityFilter: null === (zQ = tQ.i.getItem("UseProfanityFilter")) || void 0 === zQ || zQ,
-               showChat: null === (sQ = tQ.i.getItem("showChat")) || void 0 === sQ || sQ,
-               showNewItemIndicator: null === (FQ = tQ.i.getItem("showNewItemIndicator")) || void 0 === FQ || FQ,
-               showFriendOnlineToasts: null === (PQ = tQ.i.getItem("showFriendOnlineToasts")) || void 0 === PQ || PQ,
+               useProfanityFilter: null === (aM = AM.g.getItem("UseProfanityFilter")) || void 0 === aM || aM,
+               showChat: null === (PM = AM.g.getItem("showChat")) || void 0 === PM || PM,
+               showNewItemIndicator: null === (nM = AM.g.getItem("showNewItemIndicator")) || void 0 === nM || nM,
+               showFriendOnlineToasts: null === (QM = AM.g.getItem("showFriendOnlineToasts")) || void 0 === QM || QM,
```

#### 24. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L269-L270` → after: `L271-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L271-L272) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L269-L270)

```diff
-                 const WQ = tQ.i.getItem("friendRequestNotifications");
-                 return null !== (QQ = wW.b.find((QQ => QQ === WQ))) && void 0 !== QQ ? QQ : "toastAndTray"
+                 const rM = AM.g.getItem("friendRequestNotifications");
+                 return null !== (MM = Or.c.find((MM => MM === rM))) && void 0 !== MM ? MM : "toastAndTray"
```

#### 25. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L272-L290` → after: `L274-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L274-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L274-L292) · [Before (L272-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L272-L290)

```diff
-               touchscreenSensitivity: null !== (gQ = tQ.i.getItem("touchscreenSensitivity")) && void 0 !== gQ ? gQ : 150,
-               mouseSensitivity: null !== (JQ = tQ.i.getItem("mouseSensitivity")) && void 0 !== JQ ? JQ : 15,
-               showCoordinates: null !== (rQ = tQ.i.getItem("showCoordinates")) && void 0 !== rQ && rQ,
-               showChunkCoordinates: null !== (IQ = tQ.i.getItem("showChunkCoordinates")) && void 0 !== IQ && IQ,
-               showFPS: null !== (jQ = tQ.i.getItem("showFPS")) && void 0 !== jQ && jQ,
-               disableBunnyHopping: null !== (BQ = tQ.i.getItem("disableBunnyHopping")) && void 0 !== BQ && BQ,
-               disableTexAtlas: null !== (yQ = tQ.i.getItem("disableTexAtlas")) && void 0 !== yQ && yQ,
-               disableFullscreen: null !== (VQ = tQ.i.getItem("disableFullscreen")) && void 0 !== VQ && VQ,
-               ezBridging: null === (DQ = tQ.i.getItem("ezBridging")) || void 0 === DQ || DQ,
-               ezTowering: null === (pQ = tQ.i.getItem("ezTowering")) || void 0 === pQ || pQ,
-               crouchIsToggle: null !== (GQ = tQ.i.getItem("crouchIsToggle")) && void 0 !== GQ && GQ,
-               vibration: null === (UQ = tQ.i.getItem("vibration")) || void 0 === UQ || UQ,
-               hideUiIsToggle: null !== (bQ = tQ.i.getItem("hideUiIsToggle")) && void 0 !== bQ && bQ,
-               enableLighting: null !== (vQ = tQ.i.getItem("enableLighting")) && void 0 !== vQ && vQ,
-               showFog: null !== (dQ = tQ.i.getItem("showFog")) && void 0 !== dQ && dQ,
-               fogChunkDistance: null !== (HQ = tQ.i.getItem("fogChunkDistance")) && void 0 !== HQ ? HQ : 2,
- ... (3 more removed lines; see GitHub link above)
+               touchscreenSensitivity: null !== (zM = AM.g.getItem("touchscreenSensitivity")) && void 0 !== zM ? zM : 150,
+               mouseSensitivity: null !== (LM = AM.g.getItem("mouseSensitivity")) && void 0 !== LM ? LM : 15,
+               showCoordinates: null !== (mM = AM.g.getItem("showCoordinates")) && void 0 !== mM && mM,
+               showChunkCoordinates: null !== (HM = AM.g.getItem("showChunkCoordinates")) && void 0 !== HM && HM,
+               showFPS: null !== (hM = AM.g.getItem("showFPS")) && void 0 !== hM && hM,
+               disableBunnyHopping: null !== (JM = AM.g.getItem("disableBunnyHopping")) && void 0 !== JM && JM,
+               disableTexAtlas: null !== (dM = AM.g.getItem("disableTexAtlas")) && void 0 !== dM && dM,
+               disableFullscreen: null !== (yM = AM.g.getItem("disableFullscreen")) && void 0 !== yM && yM,
+               ezBridging: null === (lM = AM.g.getItem("ezBridging")) || void 0 === lM || lM,
+               ezTowering: null === (EM = AM.g.getItem("ezTowering")) || void 0 === EM || EM,
+               crouchIsToggle: null !== (UM = AM.g.getItem("crouchIsToggle")) && void 0 !== UM && UM,
+               vibration: null === (GM = AM.g.getItem("vibration")) || void 0 === GM || GM,
+               hideUiIsToggle: null !== (CM = AM.g.getItem("hideUiIsToggle")) && void 0 !== CM && CM,
+               enableLighting: null !== (eM = AM.g.getItem("enableLighting")) && void 0 !== eM && eM,
+               showFog: null !== (bM = AM.g.getItem("showFog")) && void 0 !== bM && bM,
+               fogChunkDistance: null !== (wM = AM.g.getItem("fogChunkDistance")) && void 0 !== wM ? wM : 2,
+ ... (3 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L294-L301` → after: `L296-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L296-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L296-L303) · [Before (L294-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L294-L301)

```diff
-               useWebGpu: null !== (iQ = tQ.i.getItem(fQ.mc)) && void 0 !== iQ ? iQ : gW,
-               pixelScale: null !== (cQ = tQ.i.getItem("pixelScale")) && void 0 !== cQ ? cQ : (0, NQ.getDeviceDefaultPixelScale)(),
-               pixelSmoothing: null === (AQ = tQ.i.getItem("pixelSmoothing")) || void 0 === AQ || AQ,
-               showChunkBorders: null !== (RQ = tQ.i.getItem("showChunkBorders")) && void 0 !== RQ && RQ,
-               showWeaponRaycasts: null !== (EQ = tQ.i.getItem("showWeaponRaycasts")) && void 0 !== EQ && EQ,
-               chunkFadeIn: null === (CQ = tQ.i.getItem("chunkFadeIn")) || void 0 === CQ || CQ,
-               enableClipping: null !== (uQ = tQ.i.getItem("enableClipping")) && void 0 !== uQ && uQ,
-               clipDurationSeconds: null !== (LQ = tQ.i.getItem("clipDurationSeconds")) && void 0 !== LQ ? LQ : qW.g,
+               useWebGpu: null !== (RM = AM.g.getItem(YM.fc)) && void 0 !== RM ? RM : zr,
+               pixelScale: null !== (pM = AM.g.getItem("pixelScale")) && void 0 !== pM ? pM : (0, IM.getDeviceDefaultPixelScale)(),
+               pixelSmoothing: null === (WM = AM.g.getItem("pixelSmoothing")) || void 0 === WM || WM,
+               showChunkBorders: null !== (sM = AM.g.getItem("showChunkBorders")) && void 0 !== sM && sM,
+               showWeaponRaycasts: null !== (DM = AM.g.getItem("showWeaponRaycasts")) && void 0 !== DM && DM,
+               chunkFadeIn: null === (kM = AM.g.getItem("chunkFadeIn")) || void 0 === kM || kM,
+               enableClipping: null !== (ZM = AM.g.getItem("enableClipping")) && void 0 !== ZM && ZM,
+               clipDurationSeconds: null !== (oM = AM.g.getItem("clipDurationSeconds")) && void 0 !== oM ? oM : Sr.f,
```

#### 27. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L309` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L311) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L309)

```diff
-             const XQ = null !== (WQ = tQ.i.getItem(OQ.e)) && void 0 !== WQ ? WQ : (0, ZQ.j)();
+             const iM = null !== (rM = AM.g.getItem(qM.d)) && void 0 !== rM ? rM : (0, KM.i)();
```

#### 28. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L319` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L321) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L319)

```diff
-             return null !== tQ.i.getItem(OQ.e)
+             return null !== AM.g.getItem(qM.d)
```

#### 29. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L325` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L327) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L325)

```diff
-               for (const WQ in QQ) kQ.k.mB(`appManagerUpdated|${WQ}`, QQ[WQ])
+               for (const rM in MM) fM.i.Tz(`appManagerUpdated|${rM}`, MM[rM])
```

#### 30. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L331` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L339-L340) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L331)

```diff
-               const WQ = {};
+               const rM = mr.clientEscMenuOptions.showFPS,
+                 iM = {};
```

#### 31. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L333` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L342) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L333)

```diff
-               for (const TQ in QQ)(0, SQ.Wd)(rW[TQ], QQ[TQ]) || (WQ[TQ] = QQ[TQ], XQ = !0);
+               for (const aM in MM)(0, NM.Td)(mr[aM], MM[aM]) || (iM[aM] = MM[aM], OM = !0);
```

#### 32. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L338` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L347) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L338)

```diff
-               if (WQ.clientEscMenuOptions) {
+               if (iM.clientEscMenuOptions && !this.applyingDefaults) {
```

#### 33. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L340` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L349) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L340)

```diff
-                 tQ.i.setItem("UseProfanityFilter", QQ.useProfanityFilter), tQ.i.setItem("showChat", QQ.showChat), tQ.i.setItem("showNewItemIndicator", QQ.showNewItemIndicator), tQ.i.setItem("showFriendOnlineToasts", QQ.showFriendOnlineToasts), tQ.i.setItem("friendRequestNotificat … [truncated]
+                 AM.g.setItem("UseProfanityFilter", MM.useProfanityFilter), AM.g.setItem("showChat", MM.showChat), AM.g.setItem("showNewItemIndicator", MM.showNewItemIndicator), AM.g.setItem("showFriendOnlineToasts", MM.showFriendOnlineToasts), AM.g.setItem("friendRequestNotificat … [truncated]
```

#### 34. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L342` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L351) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L342)

```diff
-               void 0 !== WQ.soundVolume && tQ.i.setItem("soundVol", WQ.soundVolume), void 0 !== WQ.musicVolume && tQ.i.setItem("musicVol", WQ.musicVolume), void 0 !== WQ.showDistantNametags && tQ.i.setItem("showDistantNametags", WQ.showDistantNametags), void 0 !== WQ.showDebugOve … [truncated]
+               void 0 !== iM.soundVolume && AM.g.setItem("soundVol", iM.soundVolume), void 0 !== iM.musicVolume && AM.g.setItem("musicVol", iM.musicVolume), void 0 !== iM.showDistantNametags && AM.g.setItem("showDistantNametags", iM.showDistantNametags), void 0 !== iM.showDebugOve … [truncated]
```

#### 35. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L353-L354` → after: `L380-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L380-L381) · [Before (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L353-L354)

```diff
-               const WQ = jW() ? null : (0, ZQ.b)(QQ);
-               return null !== WQ && void 0 !== WQ ? WQ : rW.clientEscMenuOptions.antiAliasing
+               const rM = hr() ? null : (0, KM.e)(MM);
+               return null !== rM && void 0 !== rM ? rM : mr.clientEscMenuOptions.antiAliasing
```

#### 36. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L358-L361` → after: `L385-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L385-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L385-L395) · [Before (L358-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L358-L361)

```diff
-               const WQ = jW() ? rW.clientEscMenuOptions.antiAliasing : (0, ZQ.j)();
-               WQ !== rW.clientEscMenuOptions.antiAliasing && this.setEscMenuOptionsUnstored({
-                 antiAliasing: WQ
-               })
+               const rM = hr() ? mr.clientEscMenuOptions.antiAliasing : (0, KM.i)();
+               if (rM !== mr.clientEscMenuOptions.antiAliasing) {
+                 this.applyingDefaults = !0;
+                 try {
+                   this.setEscMenuOptionsUnstored({
+                     antiAliasing: rM
+                   })
+                 } finally {
+                   this.applyingDefaults = !1
+                 }
+               }
```

#### 37. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L375` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L409) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L375)

```diff
-               let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, KQ.n)(),
+               let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TM.l)(),
```

#### 38. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L378-L379` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L412-L413) · [Before (L378-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L378-L379)

```diff
-               const wQ = (0, KQ.v)(QQ, WQ, XQ);
-               return (0, KQ.z)() && !0 === tQ.i.getItem(fQ.mc) && tQ.i.removeItem(fQ.mc), wQ
+               const OM = (0, TM.s)(MM, rM, iM);
+               return (0, TM.y)() && !0 === AM.g.getItem(YM.fc) && AM.g.removeItem(YM.fc), OM
```

#### 39. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L382` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L416) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L382)

```diff
-               (0, mQ.d)(QQ) && (0, KQ.z)() && JW && rW.clientEscMenuOptions.useWebGpu && (PW = sW(), this.setEscMenuOptionsUnstored({
+               (0, VM.d)(MM) && (0, TM.y)() && Lr && mr.clientEscMenuOptions.useWebGpu && (Qr = Pr(), this.setEscMenuOptionsUnstored({
```

#### 40. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L390` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L424) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L390)

```diff
-               return (0, KQ.D)() || !0 === tQ.i.getItem(MQ.B)
+               return (0, TM.D)() || !0 === AM.g.getItem(cM.N)
```

#### 41. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L393` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L427) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L393)

```diff
-               return (0, KQ.z)()
+               return (0, TM.y)()
```

#### 42. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L396` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L430) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L396)

```diff
-               return JW ? PW : null
+               return Lr ? Qr : null
```

#### 43. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L399` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L433) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L399)

```diff
-               !0 === tQ.i.getItem(MQ.B) && (0, NQ.hasUsableWebGpuAdapter)()
+               !0 === AM.g.getItem(cM.N) && (0, IM.hasUsableWebGpuAdapter)()
```

#### 44. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L443` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L477) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L443)

```diff
-         }, , , , , (QQ, WQ, XQ) => {
+         }, , , (MM, rM, iM) => {
```

#### 45. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L445-L449` → after: `L479-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L479-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L479-L483) · [Before (L445-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L445-L449)

```diff
-             d: () => sQ,
-             f: () => TQ,
-             g: () => gQ,
-             k: () => PQ,
-             o: () => JQ
+             b: () => PM,
+             c: () => jM,
+             e: () => zM,
+             i: () => QM,
+             j: () => LM
```

#### 46. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L451` → after: `L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L485) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L451)

```diff
-           var wQ = XQ(40),
+           var OM = iM(25),
```

#### 47. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L461` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L495) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L461)

```diff
-               super(...arguments), this.XV = !1, this.wV = [], this.qV = {}
+               super(...arguments), this.Uy = !1, this.Gy = [], this.Wy = {}
```

#### 48. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L465` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L499) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L465)

```diff
-               this.XV || !XQ ? this.emit(QQ, WQ) : this.wV.push({
+               this.Uy || !iM ? this.emit(MM, rM) : this.Gy.push({
```

#### 49. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L472-L473` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L506-L507) · [Before (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L472-L473)

```diff
-               const wQ = this.zV(QQ, WQ);
-               return this.on(QQ, wQ), this.qV[QQ] = (null !== (XQ = this.qV[QQ]) && void 0 !== XQ ? XQ : 0) + 1, {
+               const OM = this.Ay(MM, rM);
+               return this.on(MM, OM), this.Wy[MM] = (null !== (iM = this.Wy[MM]) && void 0 !== iM ? iM : 0) + 1, {
```

#### 50. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L482` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L516) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L482)

```diff
-               const XQ = this.zV(QQ, WQ);
+               const iM = this.Ay(MM, rM);
```

#### 51. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L491-L492` → after: `L525-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L525-L526) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L491-L492)

```diff
-                 XQ = this.qV[WQ];
-               XQ > 1 ? this.qV[WQ] = XQ - 1 : 1 === XQ && delete this.qV[WQ]
+                 iM = this.Wy[rM];
+               iM > 1 ? this.Wy[rM] = iM - 1 : 1 === iM && delete this.Wy[rM]
```

#### 52. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L499` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L533) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L499)

```diff
-                   console.error(`Error in PubSub listener for event ${QQ}:`, wQ)
+                   console.error(`Error in PubSub listener for event ${MM}:`, OM)
```

#### 53. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L504` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L538) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L504)

```diff
-               this.XV = QQ, QQ && (this.wV.forEach((QQ => {
+               this.Uy = MM, MM && (this.Gy.forEach((MM => {
```

#### 54. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L509-L510` → after: `L543-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L543-L544) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L509-L510)

```diff
-                 this.mB(WQ, XQ)
-               })), this.wV = [])
+                 this.Tz(rM, iM)
+               })), this.Gy = [])
```

#### 55. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L513` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L547) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L513)

```diff
-               this.wV = []
+               this.Gy = []
```

#### 56. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L519` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L553) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L519)

```diff
-             PQ.JV(!0)
+             QM.Fy(!0)
```

#### 57. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L528` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L562) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L528)

```diff
-         }, , , , , , , , , QQ => {
+         }, , , MM => {
```

#### 58. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L535` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L569) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L535)

```diff
-             this.NI = QQ, this.context = WQ, this.once = XQ || !1
+             this.jL = MM, this.context = rM, this.once = iM || !1
```

#### 59. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L541-L542` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L575-L576) · [Before (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L541-L542)

```diff
-               FQ = XQ ? XQ + WQ : WQ;
-             return QQ._events[FQ] ? QQ._events[FQ].NI ? QQ._events[FQ] = [QQ._events[FQ], sQ] : QQ._events[FQ].push(sQ) : (QQ._events[FQ] = sQ, QQ._eventsCount++), QQ
+               nM = iM ? iM + rM : rM;
+             return MM._events[nM] ? MM._events[nM].jL ? MM._events[nM] = [MM._events[nM], PM] : MM._events[nM].push(PM) : (MM._events[nM] = PM, MM._eventsCount++), MM
```

#### 60. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L546` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L580) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L546)

```diff
-             0 === --QQ._eventsCount ? QQ._events = new wQ : delete QQ._events[WQ]
+             0 === --MM._eventsCount ? MM._events = new OM : delete MM._events[rM]
```

#### 61. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L558` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L592) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L558)

```diff
-             var WQ = XQ ? XQ + QQ : QQ,
+             var rM = iM ? iM + MM : MM,
```

#### 62. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L561-L562` → after: `L595-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L595-L596) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L561-L562)

```diff
-             if (wQ.NI) return [wQ.NI];
-             for (var qQ = 0, TQ = wQ.length, zQ = new Array(TQ); qQ < TQ; qQ++) zQ[qQ] = wQ[qQ].NI;
+             if (OM.jL) return [OM.jL];
+             for (var SM = 0, jM = OM.length, aM = new Array(jM); SM < jM; SM++) aM[SM] = OM[SM].jL;
```

#### 63. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L565` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L599) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L565)

```diff
-             var WQ = XQ ? XQ + QQ : QQ,
+             var rM = iM ? iM + MM : MM,
```

#### 64. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L567` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L601) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L567)

```diff
-             return wQ ? wQ.NI ? 1 : wQ.length : 0
+             return OM ? OM.jL ? 1 : OM.length : 0
```

#### 65. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L569` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L603) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L569)

```diff
-             var sQ = XQ ? XQ + QQ : QQ;
+             var PM = iM ? iM + MM : MM;
```

#### 66. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L573-L574` → after: `L607-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L607-L608) · [Before (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L573-L574)

```diff
-             if (gQ.NI) {
-               switch (gQ.once && this.removeListener(QQ, gQ.NI, void 0, !0), JQ) {
+             if (zM.jL) {
+               switch (zM.once && this.removeListener(MM, zM.jL, void 0, !0), LM) {
```

#### 67. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L576` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L610) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L576)

```diff
-                   return gQ.NI.call(gQ.context), !0;
+                   return zM.jL.call(zM.context), !0;
```

#### 68. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L578` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L612) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L578)

```diff
-                   return gQ.NI.call(gQ.context, WQ), !0;
+                   return zM.jL.call(zM.context, rM), !0;
```

#### 69. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L580` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L614) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L580)

```diff
-                   return gQ.NI.call(gQ.context, WQ, wQ), !0;
+                   return zM.jL.call(zM.context, rM, OM), !0;
```

#### 70. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L582` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L616) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L582)

```diff
-                   return gQ.NI.call(gQ.context, WQ, wQ, qQ), !0;
+                   return zM.jL.call(zM.context, rM, OM, SM), !0;
```

#### 71. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L584` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L618) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L584)

```diff
-                   return gQ.NI.call(gQ.context, WQ, wQ, qQ, TQ), !0;
+                   return zM.jL.call(zM.context, rM, OM, SM, jM), !0;
```

#### 72. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L586` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L620) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L586)

```diff
-                   return gQ.NI.call(gQ.context, WQ, wQ, qQ, TQ, zQ), !0
+                   return zM.jL.call(zM.context, rM, OM, SM, jM, aM), !0
```

#### 73. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L589` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L623) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L589)

```diff
-               gQ.NI.apply(gQ.context, FQ)
+               zM.jL.apply(zM.context, nM)
```

#### 74. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L592` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L626) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L592)

```diff
-               for (PQ = 0; PQ < IQ; PQ++) switch (gQ[PQ].once && this.removeListener(QQ, gQ[PQ].NI, void 0, !0), JQ) {
+               for (QM = 0; QM < HM; QM++) switch (zM[QM].once && this.removeListener(MM, zM[QM].jL, void 0, !0), LM) {
```

#### 75. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L594` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L628) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L594)

```diff
-                   gQ[PQ].NI.call(gQ[PQ].context);
+                   zM[QM].jL.call(zM[QM].context);
```

#### 76. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L597` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L631) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L597)

```diff
-                   gQ[PQ].NI.call(gQ[PQ].context, WQ);
+                   zM[QM].jL.call(zM[QM].context, rM);
```

#### 77. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L600` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L634) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L600)

```diff
-                   gQ[PQ].NI.call(gQ[PQ].context, WQ, wQ);
+                   zM[QM].jL.call(zM[QM].context, rM, OM);
```

#### 78. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L603` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L637) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L603)

```diff
-                   gQ[PQ].NI.call(gQ[PQ].context, WQ, wQ, qQ);
+                   zM[QM].jL.call(zM[QM].context, rM, OM, SM);
```

#### 79. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L608` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L642) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L608)

```diff
-                   gQ[PQ].NI.apply(gQ[PQ].context, FQ)
+                   zM[QM].jL.apply(zM[QM].context, nM)
```

#### 80. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L617` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L651) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L617)

```diff
-             var TQ = XQ ? XQ + QQ : QQ;
+             var jM = iM ? iM + MM : MM;
```

#### 81. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L621` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L655) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L621)

```diff
-             if (sQ.NI) sQ.NI !== WQ || qQ && !sQ.once || wQ && sQ.context !== wQ || zQ(this, TQ);
+             if (PM.jL) PM.jL !== rM || SM && !PM.once || OM && PM.context !== OM || aM(this, jM);
```

#### 82. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L623-L624` → after: `L657-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L657-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L657-L658) · [Before (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L623-L624)

```diff
-               for (var FQ = 0, PQ = [], gQ = sQ.length; FQ < gQ; FQ++)(sQ[FQ].NI !== WQ || qQ && !sQ[FQ].once || wQ && sQ[FQ].context !== wQ) && PQ.push(sQ[FQ]);
-               PQ.length ? this._events[TQ] = 1 === PQ.length ? PQ[0] : PQ : zQ(this, TQ)
+               for (var nM = 0, QM = [], zM = PM.length; nM < zM; nM++)(PM[nM].jL !== rM || SM && !PM[nM].once || OM && PM[nM].context !== OM) && QM.push(PM[nM]);
+               QM.length ? this._events[jM] = 1 === QM.length ? QM[0] : QM : aM(this, jM)
```

#### 83. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L627` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L661) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L627)

```diff
-           }, sQ.prototype.yV = function(QQ) {
+           }, PM.prototype.aE = function(MM) {
```

#### 84. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L629` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L663) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L629)

```diff
-             return QQ ? (WQ = XQ ? XQ + QQ : QQ, this._events[WQ] && zQ(this, WQ)) : (this._events = new wQ, this._eventsCount = 0), this
+             return MM ? (rM = iM ? iM + MM : MM, this._events[rM] && aM(this, rM)) : (this._events = new OM, this._eventsCount = 0), this
```

#### 85. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L631` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L665) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L631)

```diff
-         }, , , (QQ, WQ, XQ) => {
+         }, , , , , (MM, rM, iM) => {
```

#### 86. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L633` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L667) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L633)

```diff
-             b: () => JQ,
+             e: () => LM,
```

#### 87. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L635-L638` → after: `L669-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L669-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L669-L672) · [Before (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L635-L638)

```diff
-             i: () => rQ,
-             m: () => IQ,
-             n: () => BQ,
-             r: () => gQ
+             g: () => mM,
+             k: () => HM,
+             l: () => JM,
+             n: () => zM
```

#### 88. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L640` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L674) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L640)

```diff
-           var wQ = XQ(45),
+           var OM = iM(36),
```

#### 89. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L642` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L676) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L642)

```diff
-             TQ = XQ(52),
+             jM = iM(38),
```

#### 90. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L646` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L680) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L646)

```diff
-               return `bloxd-${QQ}`
+               return `bloxd-${MM}`
```

#### 91. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L672` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L706) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L672)

```diff
-                   ...XQ ? PQ : FQ,
+                   ...iM ? QM : nM,
```

#### 92. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L684` → after: `L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L718) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L684)

```diff
-                 return console.error("Caught error", XQ, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (WQ = this._cachedVals[QQ]) && void 0 !== WQ ? WQ : null
+                 return console.error("Caught error", iM, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (rM = this._cachedVals[MM]) && void 0 !== rM ? rM : null
```

#### 93. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L693` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L727) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L693)

```diff
-                 zQ().remove(QQ, WQ ? PQ : FQ)
+                 aM().remove(MM, rM ? QM : nM)
```

#### 94. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L721` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L755) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L721)

```diff
-                 return console.error("Caught error", XQ, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", iM, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 95. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L752` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L786) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L752)

```diff
-                 return console.error("Caught error", XQ, "when attempting to read from sessionStorage."), null !== (WQ = this._cachedVals[QQ]) && void 0 !== WQ ? WQ : null
+                 return console.error("Caught error", iM, "when attempting to read from sessionStorage."), null !== (rM = this._cachedVals[MM]) && void 0 !== rM ? rM : null
```

#### 96. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L779` → after: `L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L813) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L779)

```diff
-                 return null !== (wQ = this._cachedVals[QQ]) && void 0 !== wQ ? wQ : null
+                 return null !== (OM = this._cachedVals[MM]) && void 0 !== OM ? OM : null
```

#### 97. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L801` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L835) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L801)

```diff
-                   for (let wQ, qQ, TQ = 0, zQ = 0; qQ = QQ.charAt(zQ++); ~qQ && (wQ = TQ % 4 ? 64 * wQ + qQ : qQ, TQ++ % 4) ? WQ += String.fromCharCode(255 & wQ >> (-2 * TQ & 6)) : 0) qQ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(qQ);
+                   for (let OM, SM, jM = 0, aM = 0; SM = MM.charAt(aM++); ~SM && (OM = jM % 4 ? 64 * OM + SM : SM, jM++ % 4) ? rM += String.fromCharCode(255 & OM >> (-2 * jM & 6)) : 0) SM = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(SM);
```

#### 98. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L808` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L842) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L808)

```diff
-               return zQ ? qQ = zQ : (qQ = yQ.FZAkcO(qQ), QQ[TQ] = qQ), qQ
+               return aM ? SM = aM : (SM = dM.FZAkcO(SM), MM[jM] = SM), SM
```

#### 99. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L850` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L884) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L850)

```diff
-         }, , (QQ, WQ, XQ) => {
+         }, , , , , , (MM, rM, iM) => {
```

#### 100. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L982` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1016) · [Before (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L982)

```diff
-                 return QQ instanceof this ? QQ : TQ.resolve(new this(qQ), QQ)
+                 return MM instanceof this ? MM : jM.resolve(new this(SM), MM)
```

#### 101. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1031` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1065) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1031)

```diff
-                 return this.state !== FQ ? JQ(XQ, this.state === sQ ? QQ : WQ, this.outcome) : this.queue.push(new gQ(XQ, QQ, WQ)), XQ
+                 return this.state !== nM ? LM(iM, this.state === PM ? MM : rM, this.outcome) : this.queue.push(new zM(iM, MM, rM)), iM
```

#### 102. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1404` → after: `L1438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1438) · [Before (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1404)

```diff
-                       return QQ ? WQ : cQ(WQ)
+                       return MM ? rM : pM(rM)
```

#### 103. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1680` → after: `L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1714) · [Before (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1680)

```diff
-                   QQ instanceof ArrayBuffer ? (wQ = QQ, qQ += XW) : (wQ = QQ.buffer, "[object Int8Array]" === XQ ? qQ += qW : "[object Uint8Array]" === XQ ? qQ += TW : "[object Uint8ClampedArray]" === XQ ? qQ += zW : "[object Int16Array]" === XQ ? qQ += sW : "[object Uint16Array] … [truncated]
+                   MM instanceof ArrayBuffer ? (OM = MM, SM += ir) : (OM = MM.buffer, "[object Int8Array]" === iM ? SM += Sr : "[object Uint8Array]" === iM ? SM += jr : "[object Uint8ClampedArray]" === iM ? SM += ar : "[object Int16Array]" === iM ? SM += Pr : "[object Uint16Array] … [truncated]
```

#### 104. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1704` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1738) · [Before (L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1704)

```diff
-                   case XW:
+                   case ir:
```

#### 105. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1706` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1740) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1706)

```diff
-                   case wW:
+                   case Or:
```

#### 106. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1710` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1744) · [Before (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1710)

```diff
-                   case qW:
+                   case Sr:
```

#### 107. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1712` → after: `L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1746) · [Before (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1712)

```diff
-                   case TW:
+                   case jr:
```

#### 108. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1714` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1748) · [Before (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1714)

```diff
-                   case zW:
+                   case ar:
```

#### 109. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1716` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1750) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1716)

```diff
-                   case sW:
+                   case Pr:
```

#### 110. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1718` → after: `L1752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1752) · [Before (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1718)

```diff
-                   case PW:
+                   case Qr:
```

#### 111. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1720` → after: `L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1754) · [Before (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1720)

```diff
-                   case FW:
+                   case nr:
```

#### 112. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1722` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1756) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1722)

```diff
-                   case gW:
+                   case zr:
```

#### 113. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1724` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1758) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1724)

```diff
-                   case JW:
+                   case Lr:
```

#### 114. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1726` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1760) · [Before (L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1726)

```diff
-                   case rW:
+                   case mr:
```

#### 115. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1764` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1798) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1764)

```diff
-                 return XQ.VV = pW, qQ
+                 return iM.QE = Er, SM
```

#### 116. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1786` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1820) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1786)

```diff
-                         wQ && (wQ = qQ.VV.deserialize(wQ)), WQ(wQ)
+                         OM && (OM = SM.QE.deserialize(OM)), rM(OM)
```

#### 117. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1806` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1840) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1806)

```diff
-                             if (PQ && (PQ = qQ.VV.deserialize(PQ)), void 0 !== (PQ = QQ(PQ, FQ.key, sQ + 1))) return void WQ(PQ)
+                             if (QM && (QM = SM.QE.deserialize(QM)), void 0 !== (QM = MM(QM, nM.key, PM + 1))) return void rM(QM)
```

#### 118. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1826` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L1860) · [Before (L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L1826)

```diff
-                     FQ.VV.serialize(WQ, (function(WQ, PQ) {
+                     nM.QE.serialize(rM, (function(rM, QM) {
```

#### 119. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2037` → after: `L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2071) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2037)

```diff
-                 return XQ.keyPrefix = LW(QQ, WQ._defaultConfig), fW() ? (WQ._dbInfo = XQ, XQ.VV = pW, PQ.resolve()) : PQ.reject()
+                 return iM.keyPrefix = or(MM, rM._defaultConfig), Yr() ? (rM._dbInfo = iM, iM.QE = Er, QM.resolve()) : QM.reject()
```

#### 120. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2057` → after: `L2091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2091) · [Before (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2057)

```diff
-                   return wQ && (wQ = WQ.VV.deserialize(wQ)), wQ
+                   return OM && (OM = rM.QE.deserialize(OM)), OM
```

#### 121. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2069` → after: `L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2103) · [Before (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2069)

```diff
-                         if (PQ && (PQ = WQ.VV.deserialize(PQ)), void 0 !== (PQ = QQ(PQ, FQ.substring(qQ), zQ++))) return PQ
+                         if (QM && (QM = rM.QE.deserialize(QM)), void 0 !== (QM = MM(QM, nM.substring(SM), aM++))) return QM
```

#### 122. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2127` → after: `L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2161) · [Before (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2127)

```diff
-                     zQ.VV.serialize(WQ, (function(WQ, wQ) {
+                     aM.QE.serialize(rM, (function(rM, OM) {
```

#### 123. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2347` → after: `L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2381) · [Before (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2347)

```diff
-         }, , , , , , , (QQ, WQ, XQ) => {
+         }, , (MM, rM, iM) => {
```

#### 124. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2418` → after: `L2452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2452) · [Before (L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2418)

```diff
-             c: () => qQ
+             b: () => SM
```

#### 125. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2420` → after: `L2454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2454) · [Before (L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2420)

```diff
-           var wQ = XQ(43);
+           var OM = iM(30);
```

#### 126. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2424` → after: `L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2458) · [Before (L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2424)

```diff
-             return null !== (QQ = wQ.i.getItem("soundVol")) && void 0 !== QQ ? QQ : .5
+             return null !== (MM = OM.g.getItem("soundVol")) && void 0 !== MM ? MM : .5
```

#### 127. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2426-L2429` → after: `L2460-L2463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2460-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2460-L2463) · [Before (L2426-L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2426-L2429)

```diff
-         }, , , , , , (QQ, WQ, XQ) => {
-           QQ.exports = XQ(66)
-         }, , , , , (QQ, WQ, XQ) => {
-           var wQ = XQ(72),
+         }, , , (MM, rM, iM) => {
+           MM.exports = iM(52)
+         }, , , , , , , , (MM, rM, iM) => {
+           var OM = iM(58),
```

#### 128. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2540-L2541` → after: `L2574-L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2574-L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2574-L2575) · [Before (L2540-L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2540-L2541)

```diff
-                   case qQ:
-                   case TQ:
+                   case SM:
+                   case jM:
```

#### 129. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2562` → after: `L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2596) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2562)

```diff
-                   return null === QQ || "object" !== typeof QQ ? null : "function" === typeof(QQ = rQ && QQ[rQ] || QQ["@@iterator"]) ? QQ : null
+                   return null === MM || "object" !== typeof MM ? null : "function" === typeof(MM = mM && MM[mM] || MM["@@iterator"]) ? MM : null
```

#### 130. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2749` → after: `L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2783) · [Before (L2749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2749)

```diff
-         }, , , , , , (QQ, WQ, XQ) => {
+         }, , , , , , , (MM, rM, iM) => {
```

#### 131. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2756-L2760` → after: `L2790-L2794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2790-L2794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2790-L2794) · [Before (L2756-L2760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2756-L2760)

```diff
-           }(), QQ.exports = XQ(84)
-         }, , , , , , (QQ, WQ, XQ) => {
-           var wQ = XQ(61),
-             qQ = XQ(72),
-             TQ = XQ(90);
+           }(), MM.exports = iM(67)
+         }, , (MM, rM, iM) => {
+           var OM = iM(44),
+             SM = iM(58),
+             jM = iM(69);
```

#### 132. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2847` → after: `L2881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2881) · [Before (L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2847)

```diff
-             }(WQ) && (null === XQ ? QQ.removeAttribute(WQ) : QQ.setAttribute(WQ, "" + XQ)) : qQ.mustUseProperty ? QQ[qQ.propertyName] = null === XQ ? 3 !== qQ.type && "" : XQ : (WQ = qQ.attributeName, wQ = qQ.attributeNamespace, null === XQ ? QQ.removeAttribute(WQ) : (XQ = 3 ===  … [truncated]
+             }(rM) && (null === iM ? MM.removeAttribute(rM) : MM.setAttribute(rM, "" + iM)) : SM.mustUseProperty ? MM[SM.propertyName] = null === iM ? 3 !== SM.type && "" : iM : (rM = SM.attributeName, OM = SM.attributeNamespace, null === iM ? MM.removeAttribute(rM) : (iM = 3 ===  … [truncated]
```

#### 133. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2888` → after: `L2922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L2922) · [Before (L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2888)

```diff
-             return null === QQ || "object" !== typeof QQ ? null : "function" === typeof(QQ = oQ && QQ[oQ] || QQ["@@iterator"]) ? QQ : null
+             return null === MM || "object" !== typeof MM ? null : "function" === typeof(MM = xM && MM[xM] || MM["@@iterator"]) ? MM : null
```

#### 134. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2986` → after: `L3020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3020) · [Before (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2986)

```diff
-               case dQ:
+               case bM:
```

#### 135. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2988` → after: `L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3022) · [Before (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2988)

```diff
-               case vQ:
+               case eM:
```

#### 136. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2990` → after: `L3024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3024) · [Before (L2990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2990)

```diff
-               case aQ:
+               case tM:
```

#### 137. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2992` → after: `L3026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3026) · [Before (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2992)

```diff
-               case HQ:
+               case wM:
```

#### 138. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2994` → after: `L3028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3028) · [Before (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2994)

```diff
-               case cQ:
+               case pM:
```

#### 139. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2996` → after: `L3030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3030) · [Before (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L2996)

```diff
-               case AQ:
+               case WM:
```

#### 140. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3000` → after: `L3034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3034) · [Before (L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3000)

```diff
-               case hQ:
+               case uM:
```

#### 141. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3002` → after: `L3036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3036) · [Before (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3002)

```diff
-               case lQ:
+               case gM:
```

#### 142. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3004` → after: `L3038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3038) · [Before (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3004)

```diff
-               case iQ:
+               case RM:
```

#### 143. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3007` → after: `L3041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3041) · [Before (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3007)

```diff
-               case RQ:
+               case sM:
```

#### 144. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3009` → after: `L3043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3043) · [Before (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3009)

```diff
-               case CQ:
+               case kM:
```

#### 145. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3011` → after: `L3045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3045) · [Before (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3011)

```diff
-               case EQ:
+               case DM:
```

#### 146. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3095` → after: `L3129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3129) · [Before (L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3095)

```diff
-               checked: null != XQ ? XQ : QQ._wrapperState.initialChecked
+               checked: null != iM ? iM : MM._wrapperState.initialChecked
```

#### 147. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3395` → after: `L3429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3429) · [Before (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3395)

```diff
-             QQ: switch (WQ) {
+             MM: switch (rM) {
```

#### 148. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3461` → after: `L3495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3495) · [Before (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3461)

```diff
-             return 3 === WQ.tag ? XQ : null
+             return 3 === rM.tag ? iM : null
```

#### 149. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3533` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3567) · [Before (L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3533)

```diff
-                 return XQ.stateNode.current === XQ ? QQ : WQ
+                 return iM.stateNode.current === iM ? MM : rM
```

#### 150. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3745` → after: `L3779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3779) · [Before (L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3745)

```diff
-             return 0 !== (QQ = -1073741825 & QQ.pendingLanes) ? QQ : 1073741824 & QQ ? 1073741824 : 0
+             return 0 !== (MM = -1073741825 & MM.pendingLanes) ? MM : 1073741824 & MM ? 1073741824 : 0
```

#### 151. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3869` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3903) · [Before (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3869)

```diff
-             return Fw = qQ.slice(QQ, 1 < WQ ? 1 - WQ : void 0)
+             return zO = SM.slice(MM, 1 < rM ? 1 - rM : void 0)
```

#### 152. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3874` → after: `L3908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3908) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3874)

```diff
-             return "charCode" in QQ ? 0 === (QQ = QQ.charCode) && 13 === WQ && (QQ = 13) : QQ = WQ, 10 === QQ && (QQ = 13), 32 <= QQ || 13 === QQ ? QQ : 0
+             return "charCode" in MM ? 0 === (MM = MM.charCode) && 13 === rM && (MM = 13) : MM = rM, 10 === MM && (MM = 13), 32 <= MM || 13 === MM ? MM : 0
```

#### 153. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3888` → after: `L3922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L3922) · [Before (L3888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L3888)

```diff
-               return this.isDefaultPrevented = (null != qQ.defaultPrevented ? qQ.defaultPrevented : !1 === qQ.returnValue) ? Jw : rw, this.isPropagationStopped = rw, this
+               return this.isDefaultPrevented = (null != SM.defaultPrevented ? SM.defaultPrevented : !1 === SM.returnValue) ? HO : hO, this.isPropagationStopped = hO, this
```

#### 154. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4248` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4282) · [Before (L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4248)

```diff
-               QQ: {
+               MM: {
```

#### 155. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4290` → after: `L4324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4324) · [Before (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4290)

```diff
-             var wQ = XQ.window === XQ ? XQ.document : 9 === XQ.nodeType ? XQ : XQ.ownerDocument;
+             var OM = iM.window === iM ? iM.document : 9 === iM.nodeType ? iM : iM.ownerDocument;
```

#### 156. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4328` → after: `L4362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4362) · [Before (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4328)

```diff
-               QQ: {
+               MM: {
```

#### 157. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4394` → after: `L4428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4428) · [Before (L4394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4394)

```diff
-             if (0 === (1 & WQ) && 0 === (2 & WQ) && null !== wQ) QQ: for (;;) {
+             if (0 === (1 & rM) && 0 === (2 & rM) && null !== OM) MM: for (;;) {
```

#### 158. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4428` → after: `L4462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4462) · [Before (L4428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4428)

```diff
-               QQ: {
+               MM: {
```

#### 159. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4478-L4480` → after: `L4512-L4514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4512-L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4512-L4514) · [Before (L4478-L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4478-L4480)

```diff
-                     case RX:
-                     case EX:
-                     case CX:
+                     case ki:
+                     case Zi:
+                     case oi:
```

#### 160. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4483` → after: `L4517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4517) · [Before (L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4483)

```diff
-                     case uX:
+                     case fi:
```

#### 161. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4523-L4524` → after: `L4557-L4558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4557-L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4557-L4558) · [Before (L4523-L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4523-L4524)

```diff
-                 if (FQ = "mouseout" === QQ || "pointerout" === QQ, (!(sQ = "mouseover" === QQ || "pointerover" === QQ) || 0 !== (16 & WQ) || !(PQ = XQ.relatedTarget || XQ.fromElement) || !rT(PQ) && !PQ[gT]) && (FQ || sQ) && (sQ = qQ.window === qQ ? qQ : (sQ = qQ.ownerDocument) ?  … [truncated]
-                   if (gQ = bw, BQ = "onMouseLeave", rQ = "onMouseEnter", jQ = "mouse", "pointerout" !== QQ && "pointerover" !== QQ || (gQ = kw, BQ = "onPointerLeave", rQ = "onPointerEnter", jQ = "pointer"), JQ = null == FQ ? sQ : jT(FQ), IQ = null == PQ ? sQ : jT(PQ), (sQ = new g … [truncated]
+                 if (nM = "mouseout" === MM || "pointerout" === MM, (!(PM = "mouseover" === MM || "pointerover" === MM) || 0 !== (16 & rM) || !(QM = iM.relatedTarget || iM.fromElement) || !Hj(QM) && !QM[Lj]) && (nM || PM) && (PM = SM.window === SM ? SM : (PM = SM.ownerDocument) ?  … [truncated]
+                   if (zM = bO, JM = "onMouseLeave", mM = "onMouseEnter", hM = "mouse", "pointerout" !== MM && "pointerover" !== MM || (zM = YO, JM = "onPointerLeave", mM = "onPointerEnter", hM = "pointer"), LM = null == nM ? PM : Jj(nM), HM = null == QM ? PM : Jj(QM), (PM = new z … [truncated]
```

#### 162. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4570` → after: `L4604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4604) · [Before (L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4570)

```diff
-                 if (nw) QQ: {
+                 if (BO) MM: {
```

#### 163. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4588` → after: `L4622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4622) · [Before (L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4588)

```diff
-                 }), DQ ? pQ.data = DQ : null !== (DQ = mw(XQ)) && (pQ.data = DQ))), (DQ = Yw ? function(QQ, WQ) {
+                 }), lM ? EM.data = lM : null !== (lM = cO(iM)) && (EM.data = lM))), (lM = IO ? function(MM, rM) {
```

#### 164. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4826` → after: `L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4860) · [Before (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4826)

```diff
-             OT = void 0 !== ST ? ST : function() {},
+             Tj = void 0 !== Aj ? Aj : function() {},
```

#### 165. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4831` → after: `L4865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4865) · [Before (L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4831)

```diff
-             Wz = 1e4 > Qz ? tT : function() {
+             ia = 1e4 > ra ? xj : function() {
```

#### 166. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4837` → after: `L4871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4871) · [Before (L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4837)

```diff
-               case eT:
+               case Fj:
```

#### 167. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4839` → after: `L4873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4873) · [Before (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4839)

```diff
-               case nT:
+               case Bj:
```

#### 168. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4841` → after: `L4875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4875) · [Before (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4841)

```diff
-               case xT:
+               case Xj:
```

#### 169. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4843` → after: `L4877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4877) · [Before (L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4843)

```diff
-               case YT:
+               case Ij:
```

#### 170. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4845` → after: `L4879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L4879) · [Before (L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4845)

```diff
-               case NT:
+               case Kj:
```

#### 171. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4998` → after: `L5032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5032) · [Before (L4998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L4998)

```diff
-               null === XQ ? WQ.next = WQ : (WQ.next = XQ.next, XQ.next = WQ), QQ.pending = WQ
+               null === iM ? rM.next = rM : (rM.next = iM.next, iM.next = rM), MM.pending = rM
```

#### 172. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5018` → after: `L5052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5052) · [Before (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5018)

```diff
-                   null === TQ ? qQ = TQ = zQ : TQ = TQ.next = zQ, XQ = XQ.next
+                   null === jM ? SM = jM = aM : jM = jM.next = aM, iM = iM.next
```

#### 173. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5020` → after: `L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5054) · [Before (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5020)

```diff
-                 null === TQ ? qQ = TQ = WQ : TQ = TQ.next = WQ
+                 null === jM ? SM = jM = rM : jM = jM.next = rM
```

#### 174. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5030` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5064) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5030)

```diff
-             null === (QQ = XQ.lastBaseUpdate) ? XQ.firstBaseUpdate = WQ : QQ.next = WQ, XQ.lastBaseUpdate = WQ
+             null === (MM = iM.lastBaseUpdate) ? iM.firstBaseUpdate = rM : MM.next = rM, iM.lastBaseUpdate = rM
```

#### 175. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5043` → after: `L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5077) · [Before (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5043)

```diff
-               PQ.next = null, null === sQ ? zQ = gQ : sQ.next = gQ, sQ = PQ;
+               QM.next = null, null === PM ? aM = zM : PM.next = zM, PM = QM;
```

#### 176. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5047` → after: `L5081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5081) · [Before (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5047)

```diff
-                 rQ !== sQ && (null === rQ ? JQ.firstBaseUpdate = gQ : rQ.next = gQ, JQ.lastBaseUpdate = PQ)
+                 mM !== PM && (null === mM ? LM.firstBaseUpdate = zM : mM.next = zM, LM.lastBaseUpdate = QM)
```

#### 177. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5063` → after: `L5097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5097) · [Before (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5063)

```diff
-                   QQ: {
+                   MM: {
```

#### 178. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5116` → after: `L5150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5150) · [Before (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5116)

```diff
-             XQ = null === (XQ = XQ(wQ, WQ = QQ.memoizedState)) || void 0 === XQ ? WQ : qQ({}, WQ, XQ), QQ.memoizedState = XQ, 0 === QQ.lanes && (QQ.updateQueue.baseState = XQ)
+             iM = null === (iM = iM(OM, rM = MM.memoizedState)) || void 0 === iM ? rM : SM({}, rM, iM), MM.memoizedState = iM, 0 === MM.lanes && (MM.updateQueue.baseState = iM)
```

#### 179. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5153` → after: `L5187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5187) · [Before (L5153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5153)

```diff
-             return "object" === typeof TQ && null !== TQ ? TQ = Dz(TQ) : (qQ = lT(WQ) ? HT : vT.current, TQ = (wQ = null !== (wQ = WQ.contextTypes) && void 0 !== wQ) ? aT(QQ, qQ) : bT), WQ = new WQ(XQ, TQ), QQ.memoizedState = null !== WQ.state && void 0 !== WQ.state ? WQ.state :  … [truncated]
+             return "object" === typeof jM && null !== jM ? jM = Ea(jM) : (SM = uj(rM) ? tj : bj.current, jM = (OM = null !== (OM = rM.contextTypes) && void 0 !== OM) ? gj(MM, SM) : ej), rM = new rM(iM, jM), MM.memoizedState = null !== rM.state && void 0 !== rM.state ? rM.state :  … [truncated]
```

#### 180. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5164` → after: `L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5198) · [Before (L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5164)

```diff
-             "object" === typeof TQ && null !== TQ ? qQ.context = Dz(TQ) : (TQ = lT(WQ) ? HT : vT.current, qQ.context = aT(QQ, TQ)), Hz(QQ, XQ, qQ, wQ), qQ.state = QQ.memoizedState, "function" === typeof(TQ = WQ.getDerivedStateFromProps) && (hz(QQ, WQ, TQ, XQ), qQ.state = QQ.memoi … [truncated]
+             "object" === typeof jM && null !== jM ? SM.context = Ea(jM) : (jM = uj(rM) ? tj : bj.current, SM.context = gj(MM, jM)), ta(MM, iM, SM, OM), SM.state = MM.memoizedState, "function" === typeof(jM = rM.getDerivedStateFromProps) && (Ra(MM, rM, jM, iM), SM.state = MM.memoi … [truncated]
```

#### 181. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5216` → after: `L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5250) · [Before (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5216)

```diff
-               return WQ.index = wQ, QQ ? null !== (wQ = WQ.alternate) ? (wQ = wQ.index) < XQ ? (WQ.flags = 2, XQ) : wQ : (WQ.flags = 2, XQ) : XQ
+               return rM.index = OM, MM ? null !== (OM = rM.alternate) ? (OM = OM.index) < iM ? (rM.flags = 2, iM) : OM : (rM.flags = 2, iM) : iM
```

#### 182. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5243` → after: `L5277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5277) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5243)

```diff
-                   case bQ:
+                   case CM:
```

#### 183. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5245` → after: `L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5279) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5245)

```diff
-                   case vQ:
+                   case eM:
```

#### 184. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5259` → after: `L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5293) · [Before (L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5259)

```diff
-                   case bQ:
+                   case CM:
```

#### 185. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5261` → after: `L5295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5295) · [Before (L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5261)

```diff
-                   case vQ:
+                   case eM:
```

#### 186. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5274-L5277` → after: `L5308-L5311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5308-L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5308-L5311) · [Before (L5274-L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5274-L5277)

```diff
-                   case bQ:
-                     return QQ = QQ.get(null === wQ.key ? XQ : wQ.key) || null, wQ.type === dQ ? JQ(WQ, QQ, wQ.props.children, qQ, wQ.key) : PQ(WQ, QQ, wQ, qQ);
-                   case vQ:
-                     return gQ(WQ, QQ = QQ.get(null === wQ.key ? XQ : wQ.key) || null, wQ, qQ)
+                   case CM:
+                     return MM = MM.get(null === OM.key ? iM : OM.key) || null, OM.type === bM ? LM(rM, MM, OM.props.children, SM, OM.key) : QM(rM, MM, OM, SM);
+                   case eM:
+                     return zM(rM, MM = MM.get(null === OM.key ? iM : OM.key) || null, OM, SM)
```

#### 187. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5293` → after: `L5327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5327) · [Before (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5293)

```diff
-                 QQ && JQ && null === VQ.alternate && WQ(qQ, JQ), zQ = TQ(VQ, zQ, BQ), null === gQ ? PQ = VQ : gQ.sibling = VQ, gQ = VQ, JQ = yQ
+                 MM && LM && null === yM.alternate && rM(SM, LM), aM = jM(yM, aM, JM), null === zM ? QM = yM : zM.sibling = yM, zM = yM, LM = dM
```

#### 188. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5297` → after: `L5331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5331) · [Before (L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5297)

```diff
-                 for (; BQ < sQ.length; BQ++) null !== (JQ = rQ(qQ, sQ[BQ], FQ)) && (zQ = TQ(JQ, zQ, BQ), null === gQ ? PQ = JQ : gQ.sibling = JQ, gQ = JQ);
+                 for (; JM < PM.length; JM++) null !== (LM = mM(SM, PM[JM], nM)) && (aM = jM(LM, aM, JM), null === zM ? QM = LM : zM.sibling = LM, zM = LM);
```

#### 189. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5300` → after: `L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/main.js#L5334) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/main.js#L5300)

```diff
-               for (JQ = wQ(qQ, JQ); BQ < sQ.length; BQ++) null !== (yQ = jQ(JQ, qQ, BQ, sQ[BQ], FQ)) && (QQ && null !== yQ.alternate && JQ.delete(null === yQ.key ? BQ : yQ.key), zQ = TQ(yQ, zQ, BQ), null === gQ ? PQ = yQ : gQ.sibling = yQ, gQ = yQ);
+               for (LM = OM(SM, LM); JM < PM.length; JM++) null !== (dM = hM(LM, SM, JM, PM[JM], nM)) && (MM && null !== dM.alternate && LM.delete(null === dM.key ? JM : dM.key), aM = jM(dM, aM, JM), null === zM ? QM = dM : zM.sibling = dM, zM = dM);
```
