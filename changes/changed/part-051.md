# Changed — Bundle Modifications Report (Part 051 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `51 / 56` (**380** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 050](part-050.md) · [Part 052 →](part-052.md)

## `bloxd.io` · `bundles/bloxd.io/main.css` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/main.css` (2564 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1)

#### 1308. `bundles/bloxd.io/main.css` (Changed code · before: `L8384-L8387` → after: `L9602-L9605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9602-L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9602-L9605) · [Before (L8384-L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8384-L8387)

```diff
- .SocialSectionTitle .SocialSectionTitleMeta .svg-inline--fa {
-   font-size: .8em;
-   margin-left: .2rem;
-   transform: rotate(90deg)
+ .AdBannerContainer .AdBannerLoader.AdBannerLoaderExtraContrast {
+   background-color: #f2f2f2;
+   outline: 1px solid #000;
+   padding: var(--contrast-border-top) var(--contrast-border-right) var(--contrast-border-bottom) var(--contrast-border-left)
```

#### 1309. `bundles/bloxd.io/main.css` (Changed code · before: `L8390-L8392` → after: `L9608-L9633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9608-L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9608-L9633) · [Before (L8390-L8392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8390-L8392)

```diff
- .SocialSectionTitle .SocialSectionTitleMeta .SocialSectionTitleLimit {
-   color: #fcd373;
-   margin-left: .4rem
+ .AdBannerContainer .BloxdAdContainer {
+   position: absolute;
+   z-index: 1
+ }
+ 
+ .AdBannerContainer .AdBanner {
+   background-color: rgba(0, 0, 0, .13);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   box-sizing: content-box;
+   display: block;
+   overflow: hidden;
+   pointer-events: all;
+   z-index: 2
+ }
+ ... (10 more added lines; see GitHub link above)
```

#### 1310. `bundles/bloxd.io/main.css` (Changed code · before: `L8395-L8400` → after: `L9636-L9638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9636-L9638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9636-L9638) · [Before (L8395-L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8395-L8400)

```diff
- .CopyFriendLink {
-   align-items: stretch;
-   display: flex;
-   flex-direction: column;
-   gap: .5rem;
-   min-width: 0
+ .AdBannerContainer .AdBanner.NitroBanner:empty *,
+ .AdBannerContainer .AdBanner.NitroBannerUnfilled * {
+   pointer-events: none !important
```

#### 1311. `bundles/bloxd.io/main.css` (Changed code · before: `L8403-L8410` → after: `L9641-L9648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9641-L9648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9641-L9648) · [Before (L8403-L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8403-L8410)

```diff
- .CopyFriendLink .CopyFriendLinkButton {
-   color: #fff;
-   font-size: 1rem;
-   min-width: 0;
-   overflow-x: hidden;
-   padding: .4rem 1rem;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .AdBannerContainer .AdBanner.AdBannerExtraContrast {
+   background-color: #fff;
+   border-color: #f2f2f2 !important;
+   border-style: solid !important;
+   border-width: var(--contrast-border-top) var(--contrast-border-right) var(--contrast-border-bottom) var(--contrast-border-left) !important;
+   outline: 1px solid #000;
+   overflow: visible;
+   position: relative
```

#### 1312. `bundles/bloxd.io/main.css` (Changed code · before: `L8413-L8417` → after: `L9651-L9655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9651-L9655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9651-L9655) · [Before (L8413-L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8413-L8417)

```diff
- .CopyFriendLink .CopyFriendLinkFallback {
-   display: flex;
-   flex-direction: column;
-   gap: .3rem;
-   text-align: left
+ .AdBannerContainer .AdBanner.AdBannerExtraContrast.AdBannerExtraContrastAnchorTop .AdBannerRemoveAds {
+   border-bottom: 1px solid #000;
+   border-top: none;
+   bottom: auto;
+   top: calc(100% + var(--contrast-border-bottom))
```

#### 1313. `bundles/bloxd.io/main.css` (Changed code · before: `L8420-L8422` → after: `L9658-L9662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9658-L9662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9658-L9662) · [Before (L8420-L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8420-L8422)

```diff
- .CopyFriendLink .CopyFriendLinkFallback .CopyFriendLinkFallbackText {
-   color: #cfcfcf;
-   font-size: .9rem
+ .AdBannerContainer .AdBanner.AdBannerAwaitingAd:not(.NitroBanner) {
+   background-color: transparent;
+   border-style: none !important;
+   box-shadow: none;
+   outline: none
```

#### 1314. `bundles/bloxd.io/main.css` (Changed code · before: `L8425-L8435` → after: `L9665-L9666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9665-L9666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9665-L9666) · [Before (L8425-L8435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8425-L8435)

```diff
- .CopyFriendLink .CopyFriendLinkFallback .CopyFriendLinkField {
-   background-color: #22283b;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-sizing: border-box;
-   color: #fff;
-   font-size: .9rem;
-   padding: .3rem .5rem;
-   -webkit-user-select: all;
-   user-select: all;
-   width: 100%
+ .AdBannerContainer .AdBanner.AdBannerAwaitingAd:not(.NitroBanner) .AdBannerRemoveAds {
+   visibility: hidden
```

#### 1315. `bundles/bloxd.io/main.css` (Changed code · before: `L8438-L8442` → after: `L9669-L9670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9669-L9670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9669-L9670) · [Before (L8438-L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8438-L8442)

```diff
- .PromptGenericPopup.FriendLinkPopup {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   max-width: min(90vw, 36rem)
+ .AdBannerContainer .AdBanner .AdBannerRemoveAdsHost {
+   display: contents
```

#### 1316. `bundles/bloxd.io/main.css` (Changed code · before: `L8445` → after: `L9673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9673) · [Before (L8445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8445)

```diff
- .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer {
+ .AdBannerContainer .AdBanner .AdBannerRemoveAds {
```

#### 1317. `bundles/bloxd.io/main.css` (Changed code · before: `L8448-L8451` → after: `L9682-L9690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9682-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9682-L9690) · [Before (L8448-L8451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8448-L8451)

```diff
-   justify-content: center;
-   margin-bottom: 1rem;
-   max-width: 100%;
-   min-height: 5rem
+   font-size: 1rem;
+   font-weight: 700;
+   gap: .3rem;
+   padding: .15rem .6rem;
+   pointer-events: all;
+   position: absolute;
+   right: calc(1rem - var(--contrast-border-right));
+   white-space: nowrap;
+   z-index: 3
```

#### 1318. `bundles/bloxd.io/main.css` (Changed code · before: `L8454-L8458` → after: `L9693-L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9693-L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9693-L9694) · [Before (L8454-L8458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8454-L8458)

```diff
- .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview {
-   cursor: default;
-   font-size: 2rem;
-   max-width: 100%;
-   padding: .4em .5em .2em
+ .AdBannerContainer .AdBanner .AdBannerRemoveAds .svg-inline--fa {
+   color: #b6830e
```

#### 1319. `bundles/bloxd.io/main.css` (Changed code · before: `L8462-L8463` → after: `L9698-L9699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9698-L9699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9698-L9699) · [Before (L8462-L8463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8462-L8463)

```diff
-   .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview:hover {
-     background-color: transparent
+   .AdBannerContainer .AdBanner .AdBannerRemoveAds:hover {
+     color: #b6830e
```

#### 1320. `bundles/bloxd.io/main.css` (Changed code · before: `L8467-L8468` → after: `L9703-L9704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9703-L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9703-L9704) · [Before (L8467-L8468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8467-L8468)

```diff
- .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview.pad-focused {
-   background-color: transparent
+ .AdBannerContainer .AdBanner .AdBannerRemoveAds.pad-focused {
+   color: #b6830e
```

#### 1321. `bundles/bloxd.io/main.css` (Changed code · before: `L8472-L8473` → after: `L9708-L9709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9708-L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9708-L9709) · [Before (L8472-L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8472-L8473)

```diff
-   .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreview:active {
-     background-color: transparent
+   .AdBannerContainer .AdBanner .AdBannerRemoveAds:active {
+     color: #b6830e
```

#### 1322. `bundles/bloxd.io/main.css` (Changed code · before: `L8477-L8479` → after: `L9713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9713) · [Before (L8477-L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8477-L8479)

```diff
- .PromptGenericPopup.FriendLinkPopup .FriendLinkPopupPlayer .ProfilePreviewStatusDot {
-   display: none
- }
+ @keyframes premiumBorderCycle {
```

#### 1323. `bundles/bloxd.io/main.css` (Changed code · before: `L8481-L8485` → after: `L9715-L9718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9715-L9718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9715-L9718) · [Before (L8481-L8485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8481-L8485)

```diff
- .StoreWallet {
-   align-items: center;
-   display: flex;
-   gap: .6rem
- }
+   0%,
+   to {
+     border-color: #5f4178
+   }
```

#### 1324. `bundles/bloxd.io/main.css` (Changed code · before: `L8487-L8489` → after: `L9720-L9722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9720-L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9720-L9722) · [Before (L8487-L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8487-L8489)

```diff
- .StoreWallet .PremiumCurrencyAmountBalance {
-   font-size: 1.6rem
- }
+   33% {
+     border-color: #325a5f
+   }
```

#### 1325. `bundles/bloxd.io/main.css` (Changed code · before: `L8491-L8497` → after: `L9724-L9726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9724-L9726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9724-L9726) · [Before (L8491-L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8491-L8497)

```diff
- .StoreWallet .StoreWalletPlusContainer {
-   align-items: center;
-   background-color: #c16088;
-   display: flex;
-   height: 1.6rem;
-   justify-content: center;
-   width: 1.6rem
+   66% {
+     border-color: #ffb914
+   }
```

#### 1326. `bundles/bloxd.io/main.css` (Changed code · before: `L8500-L8503` → after: `L9729-L9732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9729-L9732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9729-L9732) · [Before (L8500-L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8500-L8503)

```diff
- .StoreWallet .StoreWalletPlusContainer .StoreWalletPlus {
-   color: #fff;
-   font-size: 1.2rem
- }
+ @keyframes premiumBorderSecond {
+   0% {
+     opacity: 0
+   }
```

#### 1327. `bundles/bloxd.io/main.css` (Changed code · before: `L8505-L8507` → after: `L9734-L9737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9734-L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9734-L9737) · [Before (L8505-L8507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8505-L8507)

```diff
- .BlueButton.JoinDiscordWorldButton {
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
- }
+   33%,
+   66% {
+     opacity: 1
+   }
```

#### 1328. `bundles/bloxd.io/main.css` (Changed code · before: `L8509-L8511` → after: `L9739-L9742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9739-L9742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9739-L9742) · [Before (L8509-L8511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8509-L8511)

```diff
- .BlueButton.JoinDiscordWorldButton .svg-inline--fa,
- .BlueButton.JoinDiscordWorldButton.svg-inline--fa {
-   paint-order: stroke fill
+   66.01%,
+   to {
+     opacity: 0
+   }
```

#### 1329. `bundles/bloxd.io/main.css` (Changed code · before: `L8514-L8519` → after: `L9745-L9758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9745-L9758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9745-L9758) · [Before (L8514-L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8514-L8519)

```diff
- .BlueButton.JoinDiscordWorldButton .svg-inline--fa path:only-of-type,
- .BlueButton.JoinDiscordWorldButton.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ @keyframes premiumBorderThird {
+ 
+   0%,
+   33% {
+     opacity: 0
+   }
+ 
+   66% {
+     opacity: 1
+   }
+ 
+   to {
+     opacity: 0
+   }
```

#### 1330. `bundles/bloxd.io/main.css` (Changed code · before: `L8522-L8526` → after: `L9761-L9771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9761-L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9761-L9771) · [Before (L8522-L8526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8522-L8526)

```diff
- .BlueButton.JoinDiscordWorldButton {
-   --buttonNormalColour: #5865f2;
-   --buttonHoverColour: #707bf4;
-   --buttonTopColour: #707bf4;
-   --buttonBottomColour: #404ff0
+ @keyframes cosmeticPackAdBorderFirst {
+ 
+   0%,
+   66% {
+     opacity: 1
+   }
+ 
+   66.01%,
+   to {
+     opacity: 0
+   }
```

#### 1331. `bundles/bloxd.io/main.css` (Changed code · before: `L8529-L8536` → after: `L9774-L9781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9774-L9781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9774-L9781) · [Before (L8529-L8536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8529-L8536)

```diff
- .BlueButton.JoinDiscordWorldButton .ButtonBody {
-   align-items: baseline;
-   display: flex;
-   justify-content: center;
-   overflow-x: hidden;
-   padding: 0 .5rem;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ @keyframes cosmeticPackAdStarTwinkle {
+   0% {
+     opacity: .4
+   }
+ 
+   to {
+     opacity: 1
+   }
```

#### 1332. `bundles/bloxd.io/main.css` (Changed code · before: `L8539-L8543` → after: `L9784-L9791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9784-L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9784-L9791) · [Before (L8539-L8543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8539-L8543)

```diff
- .BlueButton.JoinDiscordWorldButton.DisabledNewButton {
-   --buttonNormalColour: #a4a4a4;
-   --buttonHoverColour: #a4a4a4;
-   --buttonTopColour: #cfcfcf;
-   --buttonBottomColour: #838383
+ @keyframes cosmeticPackAdNameShimmer {
+   0% {
+     transform: translateX(0)
+   }
+ 
+   to {
+     transform: translateX(85.71429%)
+   }
```

#### 1333. `bundles/bloxd.io/main.css` (Changed code · before: `L8546-L8549` → after: `L9794-L9801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9794-L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9794-L9801) · [Before (L8546-L8549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8546-L8549)

```diff
- .BlueButton.JoinDiscordWorldButton .DiscordGuildContainer {
-   align-items: center;
-   display: flex;
-   opacity: .6
+ @keyframes cosmeticPackAdNameShimmerPosition {
+   0% {
+     background-position: 100% 0
+   }
+ 
+   to {
+     background-position: -200% 0
+   }
```

#### 1334. `bundles/bloxd.io/main.css` (Changed code · before: `L8552-L8556` → after: `L9804-L9806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9804-L9806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9804-L9806) · [Before (L8552-L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8552-L8556)

```diff
- .BlueButton.JoinDiscordWorldButton .DiscordGuildContainer .DiscordGuild {
-   max-width: 10rem;
-   overflow-x: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .AdBannerContainer .AdBanner.SuperRankAd {
+   background-color: #303a59;
+   border-color: #ffb914
```

#### 1335. `bundles/bloxd.io/main.css` (Changed code · before: `L8559-L8561` → after: `L9809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9809) · [Before (L8559-L8561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8559-L8561)

```diff
- .LeftGamePromptCard {
-   background-color: rgba(255, 185, 20, .1);
-   border-left: .2rem solid #ffb914;
+ .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner {
```

#### 1336. `bundles/bloxd.io/main.css` (Changed code · before: `L8565` → after: `L9813-L9815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9813-L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9813-L9815) · [Before (L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8565)

```diff
-   gap: .5rem
+   height: 100%;
+   padding: 12px;
+   width: 100%
```

#### 1337. `bundles/bloxd.io/main.css` (Changed code · before: `L8568-L8573` → after: `L9818-L9822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9818-L9822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9818-L9822) · [Before (L8568-L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8568-L8573)

```diff
- .LeftGamePromptCard .LeftGamePromptCardHeader {
-   align-items: center;
-   display: flex;
-   gap: .5rem;
-   justify-content: space-between;
-   padding: 0 .5rem
+ .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner .SuperRankAdLogoAndTitle {
+   align-items: flex-start;
+   color: #ffb914;
+   display: flex;
+   gap: 6px
```

#### 1338. `bundles/bloxd.io/main.css` (Changed code · before: `L8576-L8578` → after: `L9825-L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9825-L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9825-L9830) · [Before (L8576-L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8576-L8578)

```diff
- .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardTitle {
-   color: #fcd373;
-   font-size: 1.1rem;
+ .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner .SuperRankAdLogoAndTitle .SuperRankAdTitle {
+   -webkit-background-clip: text;
+   background-clip: text;
+   background-image: linear-gradient(140deg, #ffb914 40%, #fcd373);
+   color: transparent;
+   display: inline-block;
```

#### 1339. `bundles/bloxd.io/main.css` (Changed code · before: `L8580` → after: `L9832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9832) · [Before (L8580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8580)

```diff
-   min-width: 0
+   text-shadow: none
```

#### 1340. `bundles/bloxd.io/main.css` (Changed code · before: `L8583` → after: `L9835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9835) · [Before (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8583)

```diff
- .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss {
+ .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner .SuperRankAdButton .NewButton {
```

#### 1341. `bundles/bloxd.io/main.css` (Changed code · before: `L8585` → after: `L9837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9837) · [Before (L8585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8585)

```diff
-   cursor: pointer;
+   box-sizing: border-box;
```

#### 1342. `bundles/bloxd.io/main.css` (Changed code · before: `L8587-L8592` → after: `L9839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9839) · [Before (L8587-L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8587-L8592)

```diff
-   flex-shrink: 0;
-   font-size: 1.1rem;
-   height: 1.6rem;
-   justify-content: center;
-   opacity: .6;
-   width: 1.6rem
+   justify-content: center
```

#### 1343. `bundles/bloxd.io/main.css` (Changed code · before: `L8595-L8598` → after: `L9842-L9844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9842-L9844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9842-L9844) · [Before (L8595-L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8595-L8598)

```diff
- @media(hover:hover) {
-   .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss:hover {
-     opacity: 1
-   }
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 {
+   height: 250px;
+   width: 300px
```

#### 1344. `bundles/bloxd.io/main.css` (Changed code · before: `L8601-L8602` → after: `L9847-L9848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9847-L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9847-L9848) · [Before (L8601-L8602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8601-L8602)

```diff
- .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss.pad-focused {
-   opacity: 1
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner {
+   gap: 6px
```

#### 1345. `bundles/bloxd.io/main.css` (Changed code · before: `L8605-L8608` → after: `L9851-L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9851-L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9851-L9852) · [Before (L8605-L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8605-L8608)

```diff
- @media(hover:none) {
-   .LeftGamePromptCard .LeftGamePromptCardHeader .LeftGamePromptCardDismiss:active {
-     opacity: 1
-   }
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdLogoAndTitle {
+   font-size: 32px
```

#### 1346. `bundles/bloxd.io/main.css` (Changed code · before: `L8611-L8613` → after: `L9855-L9858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9855-L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9855-L9858) · [Before (L8611-L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8611-L8613)

```diff
- .LeftGamePromptCard .PlayerRows {
-   box-sizing: border-box;
-   padding: 0 .5rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdSubTitle {
+   flex-grow: 1;
+   font-size: 24px;
+   text-align: start
```

#### 1347. `bundles/bloxd.io/main.css` (Changed code · before: `L8616-L8617` → after: `L9861-L9862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9861-L9862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9861-L9862) · [Before (L8616-L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8616-L8617)

```diff
- .LeftGamePromptCard .PlayerRows .ProfilePreview {
-   background-color: rgba(57, 73, 128, .35)
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdButton .NewButton {
+   font-size: 24px
```

#### 1348. `bundles/bloxd.io/main.css` (Changed code · before: `L8620-L8625` → after: `L9865-L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9865-L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9865-L9866) · [Before (L8620-L8625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8620-L8625)

```diff
- .LeftGamePromptCard.LeftGamePromptCardInFlow {
-   background-color: #22283b;
-   border-radius: 0;
-   margin-bottom: 1rem;
-   padding: .6rem 0;
-   width: 100%
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdTable {
+   display: none
```

#### 1349. `bundles/bloxd.io/main.css` (Changed code · before: `L8628-L8630` → after: `L9869-L9871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9869-L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9869-L9871) · [Before (L8628-L8630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8628-L8630)

```diff
- .LeftGamePromptCard.LeftGamePromptCardInFlow .PlayerRows {
-   display: grid;
-   grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr))
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 {
+   height: 90px;
+   width: 728px
```

#### 1350. `bundles/bloxd.io/main.css` (Changed code · before: `L8633-L8645` → after: `L9874-L9875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9874-L9875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9874-L9875) · [Before (L8633-L8645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8633-L8645)

```diff
- .LiveStreamPromotion {
-   align-items: center;
-   background: #22283b;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   bottom: max(var(--notchBottom), 1rem);
-   cursor: pointer;
-   display: flex;
-   gap: 1rem;
-   left: max(var(--notchLeft), 1rem);
-   padding: .9rem 1.5rem;
-   position: fixed;
-   z-index: 5
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner {
+   flex-wrap: wrap
```

#### 1351. `bundles/bloxd.io/main.css` (Changed code · before: `L8648-L8651` → after: `L9878-L9880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9878-L9880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9878-L9880) · [Before (L8648-L8651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8648-L8651)

```diff
- @media(hover:hover) {
-   .LiveStreamPromotion:hover {
-     background: #303a59
-   }
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdLogoAndTitle {
+   font-size: 26px;
+   line-height: 1.15
```

#### 1352. `bundles/bloxd.io/main.css` (Changed code · before: `L8654-L8655` → after: `L9883-L9885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9883-L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9883-L9885) · [Before (L8654-L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8654-L8655)

```diff
- .LiveStreamPromotion.pad-focused {
-   background: #303a59
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdLogoAndTitle .SuperRankAdTitle {
+   margin-block: -.1em;
+   padding-block: .1em
```

#### 1353. `bundles/bloxd.io/main.css` (Changed code · before: `L8658-L8661` → after: `L9888-L9894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9888-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9888-L9894) · [Before (L8658-L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8658-L8661)

```diff
- @media(hover:none) {
-   .LiveStreamPromotion:active {
-     background: #303a59
-   }
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdSubTitle {
+   align-items: flex-end;
+   display: flex;
+   flex-grow: 1;
+   font-size: 18px;
+   line-height: 1;
+   max-width: calc(100% - 216px)
```

#### 1354. `bundles/bloxd.io/main.css` (Changed code · before: `L8664-L8667` → after: `L9897-L9900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9897-L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9897-L9900) · [Before (L8664-L8667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8664-L8667)

```diff
- .LiveStreamPromotion .LiveStreamPromotionIcon {
-   border-radius: 0;
-   height: 5.25rem;
-   width: 5.25rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdButton {
+   display: flex;
+   flex-grow: 1;
+   justify-content: flex-end
```

#### 1355. `bundles/bloxd.io/main.css` (Changed code · before: `L8670-L8672` → after: `L9903-L9905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9903-L9905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9903-L9905) · [Before (L8670-L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8670-L8672)

```diff
- .LiveStreamPromotion .LiveStreamPromotionInfo {
-   display: flex;
-   flex-direction: column
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdButton .NewButton {
+   font-size: 24px;
+   width: 220px
```

#### 1356. `bundles/bloxd.io/main.css` (Changed code · before: `L8675-L8676` → after: `L9908-L9919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9908-L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9908-L9919) · [Before (L8675-L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8675-L8676)

```diff
- .LiveStreamPromotion .LiveStreamPromotionTitle {
-   font-size: 1.4rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdButton .NewButton .ButtonBody {
+   -webkit-line-clamp: 2;
+   -webkit-box-orient: vertical;
+   text-wrap: balance;
+   display: -webkit-box;
+   line-height: 1.3;
+   overflow-x: hidden;
+   overflow-y: hidden;
+   padding: 0 .4em;
+   text-overflow: ellipsis;
+   white-space: nowrap;
+   white-space: normal
```

#### 1357. `bundles/bloxd.io/main.css` (Changed code · before: `L8679-L8681` → after: `L9922-L9923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9922-L9923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9922-L9923) · [Before (L8679-L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8679-L8681)

```diff
- .LiveStreamPromotion .LiveStreamPromotionChannel {
-   color: #f2f2f2;
-   font-size: 1.3rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdTable {
+   display: none
```

#### 1358. `bundles/bloxd.io/main.css` (Changed code · before: `L8684-L8686` → after: `L9926-L9928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9926-L9928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9926-L9928) · [Before (L8684-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8684-L8686)

```diff
- .LiveStreamPromotion .LiveStreamPromotionTime {
-   color: #f2f2f2;
-   font-size: 1.85rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 {
+   height: 250px;
+   width: 970px
```

#### 1359. `bundles/bloxd.io/main.css` (Changed code · before: `L8689-L8695` → after: `L9931-L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9931-L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9931-L9934) · [Before (L8689-L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8689-L8695)

```diff
- .LiveStreamPromotion .LiveStreamPromotionLiveBadge {
-   background: #e34f4f;
-   color: #fff;
-   font-size: 1.5rem;
-   font-weight: 700;
-   margin-left: .35rem;
-   padding: .15rem .6rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner {
+   align-items: center;
+   flex-wrap: wrap;
+   gap: 16px 32px
```

#### 1360. `bundles/bloxd.io/main.css` (Changed code · before: `L8698-L8700` → after: `L9937-L9939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9937-L9939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9937-L9939) · [Before (L8698-L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8698-L8700)

```diff
- .UnstyledA {
-   color: #fff;
-   text-decoration: none
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdLogoAndTitle {
+   font-size: 36px;
+   width: 260px
```

#### 1361. `bundles/bloxd.io/main.css` (Changed code · before: `L8703-L8706` → after: `L9942-L9946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9942-L9946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9942-L9946) · [Before (L8703-L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8703-L8706)

```diff
- .AdBannerContainer {
-   display: flex;
-   pointer-events: none;
-   position: relative
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdSubTitle {
+   flex-grow: 1;
+   font-size: 20px;
+   text-align: start;
+   width: 260px
```

#### 1362. `bundles/bloxd.io/main.css` (Changed code · before: `L8709-L8710` → after: `L9949-L9951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9949-L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9949-L9951) · [Before (L8709-L8710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8709-L8710)

```diff
- .AdBannerContainer.AdBannerContainerHoldsFrame {
-   padding: calc(var(--contrast-border-top)*var(--ad-banner-scale, 0)) calc(var(--contrast-border-right)*var(--ad-banner-scale, 0)) calc(var(--contrast-border-bottom)*var(--ad-banner-scale, 0)) calc(var(--contrast-border-left)*var(--ad-banner-scale, 0))
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdButton .NewButton {
+   font-size: 26px;
+   width: 260px
```

#### 1363. `bundles/bloxd.io/main.css` (Changed code · before: `L8713-L8714` → after: `L9954-L9958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9954-L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9954-L9958) · [Before (L8713-L8714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8713-L8714)

```diff
- .AdBannerContainer.AdBannerContainerHoldsFrame .AdBannerSlot>.AdBanner.AdBannerExtraContrast {
-   margin: calc(var(--contrast-border-top)*-1) calc(var(--contrast-border-right)*-1) calc(var(--contrast-border-bottom)*-1) calc(var(--contrast-border-left)*-1) !important
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdTable {
+   align-items: center;
+   display: flex;
+   flex-grow: 1;
+   font-size: 10px
```

#### 1364. `bundles/bloxd.io/main.css` (Changed code · before: `L8717-L8718` → after: `L9961-L9963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9961-L9963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9961-L9963) · [Before (L8717-L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8717-L8718)

```diff
- .AdBannerContainer.AdBannerContainerHoldsFrame .AdBannerSlot>.AdBanner.AdBannerExtraContrast.AdBannerAwaitingAd:not(.NitroBanner) {
-   margin: 0 !important
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 {
+   height: 704px;
+   width: 352px
```

#### 1365. `bundles/bloxd.io/main.css` (Changed code · before: `L8721-L8726` → after: `L9966-L9969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9966-L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9966-L9969) · [Before (L8721-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8721-L8726)

```diff
- .AdBannerContainer .AdBannerExtraContrastAnchorBottom,
- .AdBannerContainer.AdBannerExtraContrastAnchorBottom {
-   --contrast-border-top: 1rem;
-   --contrast-border-right: 1.5rem;
-   --contrast-border-bottom: 0.5rem;
-   --contrast-border-left: 1.5rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner {
+   align-items: center;
+   flex-wrap: wrap;
+   gap: 8px
```

#### 1366. `bundles/bloxd.io/main.css` (Changed code · before: `L8729-L8734` → after: `L9972-L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9972-L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9972-L9974) · [Before (L8729-L8734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8729-L8734)

```diff
- .AdBannerContainer .AdBannerExtraContrastAnchorTop,
- .AdBannerContainer.AdBannerExtraContrastAnchorTop {
-   --contrast-border-top: 0.5rem;
-   --contrast-border-right: 1.5rem;
-   --contrast-border-bottom: 1rem;
-   --contrast-border-left: 1.5rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdLogoAndTitle {
+   font-size: 40px;
+   width: 288px
```

#### 1367. `bundles/bloxd.io/main.css` (Changed code · before: `L8737-L8742` → after: `L9977-L9980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9977-L9980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9977-L9980) · [Before (L8737-L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8737-L8742)

```diff
- .AdBannerContainer .AdBannerExtraContrastAnchorLeft,
- .AdBannerContainer.AdBannerExtraContrastAnchorLeft {
-   --contrast-border-top: 1rem;
-   --contrast-border-right: 1.5rem;
-   --contrast-border-bottom: 1.5rem;
-   --contrast-border-left: 0.5rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdSubTitle {
+   font-size: 22px;
+   text-align: start;
+   width: 288px
```

#### 1368. `bundles/bloxd.io/main.css` (Changed code · before: `L8745-L8750` → after: `L9983-L9989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9983-L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9983-L9989) · [Before (L8745-L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8745-L8750)

```diff
- .AdBannerContainer .AdBannerExtraContrastAnchorRight,
- .AdBannerContainer.AdBannerExtraContrastAnchorRight {
-   --contrast-border-top: 1rem;
-   --contrast-border-right: 0.5rem;
-   --contrast-border-bottom: 1.5rem;
-   --contrast-border-left: 1.5rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable {
+   align-items: flex-start;
+   display: flex;
+   flex-grow: 1;
+   font-size: 16px;
+   margin-top: 32px;
+   order: 3
```

#### 1369. `bundles/bloxd.io/main.css` (Changed code · before: `L8753-L8754` → after: `L9992-L9996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9992-L9996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9992-L9996) · [Before (L8753-L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8753-L8754)

```diff
- .AdBannerContainer .AdBannerSlot {
-   contain: layout
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr td:first-of-type,
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr th,
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:first-of-type,
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:nth-of-type(2) {
+   display: none
```

#### 1370. `bundles/bloxd.io/main.css` (Changed code · before: `L8757-L8765` → after: `L9999-L10000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9999-L10000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L9999-L10000) · [Before (L8757-L8765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8757-L8765)

```diff
- .AdBannerContainer .VisibilityTimer {
-   background-color: #000;
-   border: 1px solid red;
-   color: red;
-   font-weight: 700;
-   height: 2rem;
-   opacity: .6;
-   width: 4rem;
-   z-index: 4
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:last-of-type .PerkContainer {
+   height: auto
```

#### 1371. `bundles/bloxd.io/main.css` (Changed code · before: `L8768-L8773` → after: `L10003-L10009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10003-L10009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10003-L10009) · [Before (L8768-L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8768-L8773)

```diff
- .AdBannerContainer .AdBannerLoader,
- .AdBannerContainer .VisibilityTimer {
-   align-items: center;
-   display: flex;
-   justify-content: center;
-   position: absolute
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdButton {
+   order: 4
+ }
+ 
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdButton .NewButton {
+   font-size: 32px;
+   width: 288px
```

#### 1372. `bundles/bloxd.io/main.css` (Changed code · before: `L8776-L8778` → after: `L10012-L10014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10012-L10014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10012-L10014) · [Before (L8776-L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8776-L8778)

```diff
- .AdBannerContainer .AdBannerLoader {
-   font-size: 2rem;
-   z-index: 3
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 {
+   height: 50px;
+   width: 320px
```

#### 1373. `bundles/bloxd.io/main.css` (Changed code · before: `L8781-L8784` → after: `L10017-L10022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10017-L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10017-L10022) · [Before (L8781-L8784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8781-L8784)

```diff
- .AdBannerContainer .AdBannerLoader.AdBannerLoaderExtraContrast {
-   background-color: #f2f2f2;
-   outline: 1px solid #000;
-   padding: var(--contrast-border-top) var(--contrast-border-right) var(--contrast-border-bottom) var(--contrast-border-left)
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner {
+   align-items: flex-start;
+   column-gap: 8px;
+   flex-direction: row;
+   justify-content: space-around;
+   padding: 7px
```

#### 1374. `bundles/bloxd.io/main.css` (Changed code · before: `L8787-L8789` → after: `L10025-L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10025-L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10025-L10027) · [Before (L8787-L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8787-L8789)

```diff
- .AdBannerContainer .BloxdAdContainer {
-   position: absolute;
-   z-index: 1
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdLogoAndTitle {
+   flex-shrink: 0;
+   font-size: 22px
```

#### 1375. `bundles/bloxd.io/main.css` (Changed code · before: `L8792-L8801` → after: `L10030-L10032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10030-L10032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10030-L10032) · [Before (L8792-L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8792-L8801)

```diff
- .AdBannerContainer .AdBanner {
-   background-color: rgba(0, 0, 0, .13);
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   box-sizing: content-box;
-   display: block;
-   overflow: hidden;
-   pointer-events: all;
-   z-index: 2
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdSubTitle,
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdTable {
+   display: none
```

#### 1376. `bundles/bloxd.io/main.css` (Changed code · before: `L8804-L8806` → after: `L10035-L10036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10035-L10036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10035-L10036) · [Before (L8804-L8806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8804-L8806)

```diff
- .AdBannerContainer .AdBanner.NitroBanner:empty {
-   min-height: var(--nitro-slot-height);
-   min-width: var(--nitro-slot-width)
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdButton {
+   align-self: center
```

#### 1377. `bundles/bloxd.io/main.css` (Changed code · before: `L8809-L8812` → after: `L10039-L10042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10039-L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10039-L10042) · [Before (L8809-L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8809-L8812)

```diff
- .AdBannerContainer .AdBanner.NitroBanner:empty,
- .AdBannerContainer .AdBanner.NitroBannerUnfilled {
-   opacity: 0;
-   pointer-events: none
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdButton .NewButton {
+   font-size: 16px;
+   min-height: 2.1em;
+   min-width: 125px
```

#### 1378. `bundles/bloxd.io/main.css` (Changed code · before: `L8815-L8817` → after: `L10045-L10056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10045-L10056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10045-L10056) · [Before (L8815-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8815-L8817)

```diff
- .AdBannerContainer .AdBanner.NitroBanner:empty *,
- .AdBannerContainer .AdBanner.NitroBannerUnfilled * {
-   pointer-events: none !important
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdButton .NewButton .ButtonBody {
+   -webkit-line-clamp: 2;
+   -webkit-box-orient: vertical;
+   text-wrap: balance;
+   display: -webkit-box;
+   line-height: 1.2;
+   overflow-x: hidden;
+   overflow-y: hidden;
+   padding: 0 .3em;
+   text-overflow: ellipsis;
+   white-space: nowrap;
+   white-space: normal
```

#### 1379. `bundles/bloxd.io/main.css` (Changed code · before: `L8820-L8825` → after: `L10059-L10062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10059-L10062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10059-L10062) · [Before (L8820-L8825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8820-L8825)

```diff
- .AdBannerContainer .AdBanner.AdBannerExtraContrast {
-   background-color: #fff;
-   border-color: #f2f2f2 !important;
-   border-style: solid !important;
-   border-width: var(--contrast-border-top) var(--contrast-border-right) var(--contrast-border-bottom) var(--contrast-border-left) !important;
-   outline: 1px solid #000;
+ .AdBannerContainer .AdBanner.CosmeticPackAd {
+   background-color: rgba(57, 73, 128, .4);
+   border-color: #394980;
+   cursor: pointer;
```

#### 1380. `bundles/bloxd.io/main.css` (Changed code · before: `L8827` → after: `L10064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10064) · [Before (L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8827)

```diff
-   position: relative
+   transition: transform .15s, border-color .15s
```

#### 1381. `bundles/bloxd.io/main.css` (Changed code · before: `L8830-L8835` → after: `L10067-L10070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10067-L10070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10067-L10070) · [Before (L8830-L8835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8830-L8835)

```diff
- .AdBannerContainer .AdBanner.AdBannerExtraContrast.AdBannerExtraContrastAnchorTop .AdBannerRemoveAds {
-   border-bottom: 1px solid #000;
-   border-top: none;
-   bottom: auto;
-   top: calc(100% + var(--contrast-border-bottom))
- }
+ @media(hover:hover) {
+   .AdBannerContainer .AdBanner.CosmeticPackAd:hover {
+     border-color: #b6830e
+   }
```

#### 1382. `bundles/bloxd.io/main.css` (Changed code · before: `L8837-L8841` → after: `L10072-L10074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10072-L10074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10072-L10074) · [Before (L8837-L8841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8837-L8841)

```diff
- .AdBannerContainer .AdBanner.AdBannerAwaitingAd:not(.NitroBanner) {
-   background-color: transparent;
-   border-style: none !important;
-   box-shadow: none;
-   outline: none
+   .AdBannerContainer .AdBanner.CosmeticPackAd:hover .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
+     transform: rotate(90deg) translateY(-.2em)
+   }
```

#### 1383. `bundles/bloxd.io/main.css` (Changed code · before: `L8844-L8845` → after: `L10077-L10078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10077-L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10077-L10078) · [Before (L8844-L8845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8844-L8845)

```diff
- .AdBannerContainer .AdBanner.AdBannerAwaitingAd:not(.NitroBanner) .AdBannerRemoveAds {
-   visibility: hidden
+ .AdBannerContainer .AdBanner.CosmeticPackAd.pad-focused {
+   border-color: #b6830e
```

#### 1384. `bundles/bloxd.io/main.css` (Changed code · before: `L8848-L8849` → after: `L10081-L10082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10081-L10082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10081-L10082) · [Before (L8848-L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8848-L8849)

```diff
- .AdBannerContainer .AdBanner .AdBannerRemoveAdsHost {
-   display: contents
+ .AdBannerContainer .AdBanner.CosmeticPackAd.pad-focused .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
+   transform: rotate(90deg) translateY(-.2em)
```

#### 1385. `bundles/bloxd.io/main.css` (Changed code · before: `L8852-L8859` → after: `L10085-L10087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10085-L10087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10085-L10087) · [Before (L8852-L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8852-L8859)

```diff
- .AdBannerContainer .AdBanner .AdBannerRemoveAds {
-   align-items: center;
-   background-color: #f2f2f2;
-   border: 1px solid #000;
-   border-bottom: none;
-   bottom: calc(100% + var(--contrast-border-top));
-   color: #333;
-   cursor: pointer;
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay {
+   background: linear-gradient(-90deg, rgba(34, 40, 59, .9), transparent);
+   bottom: 0;
```

#### 1386. `bundles/bloxd.io/main.css` (Changed code · before: `L8861-L8865` → after: `L10089-L10090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10089-L10090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10089-L10090) · [Before (L8861-L8865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8861-L8865)

```diff
-   font-size: 1rem;
-   font-weight: 700;
-   gap: .3rem;
-   padding: .15rem .6rem;
-   pointer-events: all;
+   justify-content: center;
+   left: 0;
```

#### 1387. `bundles/bloxd.io/main.css` (Changed code · before: `L8867-L8868` → after: `L10092-L10103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10092-L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10092-L10103) · [Before (L8867-L8868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8867-L8868)

```diff
-   right: calc(1rem - var(--contrast-border-right));
-   white-space: nowrap;
+   right: 0;
+   top: 0
+ }
+ 
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner {
+   background-color: #ffb914;
+   border-width: 0;
+   bottom: 0;
+   box-shadow: none;
+   left: 0;
+   position: absolute;
+   right: 0;
```

#### 1388. `bundles/bloxd.io/main.css` (Changed code · before: `L8872-L8873` → after: `L10107-L10111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10107-L10111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10107-L10111) · [Before (L8872-L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8872-L8873)

```diff
- .AdBannerContainer .AdBanner .AdBannerRemoveAds .svg-inline--fa {
-   color: #b6830e
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
+   font-size: 14px;
+   gap: .4em;
+   padding: 2px 8px;
+   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
```

#### 1389. `bundles/bloxd.io/main.css` (Changed code · before: `L8876-L8879` → after: `L10114-L10116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10114-L10116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10114-L10116) · [Before (L8876-L8879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8876-L8879)

```diff
- @media(hover:hover) {
-   .AdBannerContainer .AdBanner .AdBannerRemoveAds:hover {
-     color: #b6830e
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa,
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa {
+   paint-order: stroke fill
```

#### 1390. `bundles/bloxd.io/main.css` (Changed code · before: `L8882-L8883` → after: `L10119-L10124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10119-L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10119-L10124) · [Before (L8882-L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8882-L8883)

```diff
- .AdBannerContainer .AdBanner .AdBannerRemoveAds.pad-focused {
-   color: #b6830e
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa path:only-of-type,
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 1391. `bundles/bloxd.io/main.css` (Changed code · before: `L8886-L8889` → after: `L10127-L10129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10127-L10129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10127-L10129) · [Before (L8886-L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8886-L8889)

```diff
- @media(hover:none) {
-   .AdBannerContainer .AdBanner .AdBannerRemoveAds:active {
-     color: #b6830e
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon,
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
+   color: #fff
```

#### 1392. `bundles/bloxd.io/main.css` (Changed code · before: `L8892` → after: `L10132-L10134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10132-L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10132-L10134) · [Before (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8892)

```diff
- @keyframes premiumBorderCycle {
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerContent {
+   display: none
+ }
```

#### 1393. `bundles/bloxd.io/main.css` (Changed code · before: `L8894-L8897` → after: `L10136-L10144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10136-L10144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10136-L10144) · [Before (L8894-L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8894-L8897)

```diff
-   0%,
-   to {
-     border-color: #5f4178
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdCharacters {
+   align-items: center;
+   display: flex;
+   flex-grow: 1;
+   gap: 10px;
+   height: 100%;
+   justify-content: space-around;
+   min-width: 0
+ }
```

#### 1394. `bundles/bloxd.io/main.css` (Changed code · before: `L8899-L8901` → after: `L10146-L10150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10146-L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10146-L10150) · [Before (L8899-L8901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8899-L8901)

```diff
-   33% {
-     border-color: #325a5f
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdCharacters .CosmeticPackAdCharacterPreview {
+   height: 100%;
+   min-width: 0;
+   object-fit: contain
+ }
```

#### 1395. `bundles/bloxd.io/main.css` (Changed code · before: `L8903-L8905` → after: `L10152-L10161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10152-L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10152-L10161) · [Before (L8903-L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8903-L8905)

```diff
-   66% {
-     border-color: #ffb914
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+   align-items: flex-end;
+   display: flex;
+   flex-direction: column;
+   flex-shrink: 0;
+   font-size: 35px;
+   gap: .3em;
+   justify-content: center;
+   padding: 16px;
+   z-index: 2
```

#### 1396. `bundles/bloxd.io/main.css` (Changed code · before: `L8908-L8911` → after: `L10164-L10172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10164-L10172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10164-L10172) · [Before (L8908-L8911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8908-L8911)

```diff
- @keyframes premiumBorderSecond {
-   0% {
-     opacity: 0
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
+   align-items: center;
+   color: #ffb914;
+   display: flex;
+   font-weight: 800;
+   gap: .2em;
+   overflow: visible;
+   width: 100%
+ }
```

#### 1397. `bundles/bloxd.io/main.css` (Changed code · before: `L8913-L8916` → after: `L10174-L10177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10174-L10177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10174-L10177) · [Before (L8913-L8916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8913-L8916)

```diff
-   33%,
-   66% {
-     opacity: 1
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdName {
+   font-size: 1em;
+   overflow: visible
+ }
```

#### 1398. `bundles/bloxd.io/main.css` (Changed code · before: `L8918-L8921` → after: `L10179-L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10179-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10179-L10187) · [Before (L8918-L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8918-L8921)

```diff
-   66.01%,
-   to {
-     opacity: 0
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdItemCount {
+   align-items: center;
+   border: 3px solid #ffb914;
+   color: #ffb914;
+   display: flex;
+   font-weight: 800;
+   justify-content: center;
+   min-height: .6em;
+   padding: 0 4px
```

#### 1399. `bundles/bloxd.io/main.css` (Changed code · before: `L8924` → after: `L10190-L10192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10190-L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10190-L10192) · [Before (L8924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8924)

```diff
- @keyframes premiumBorderThird {
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdItemCount .CosmeticPackAdItemCountInner {
+   font-size: .4em
+ }
```

#### 1400. `bundles/bloxd.io/main.css` (Changed code · before: `L8926-L8929` → after: `L10194-L10207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10194-L10207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10194-L10207) · [Before (L8926-L8929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8926-L8929)

```diff
-   0%,
-   33% {
-     opacity: 0
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta {
+   align-items: center;
+   color: #ffb914;
+   display: flex;
+   font-size: .5em;
+   font-weight: 800;
+   gap: .2em;
+   white-space: nowrap
+ }
+ 
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
+   transform: rotate(90deg);
+   transition: transform .2s
+ }
```

#### 1401. `bundles/bloxd.io/main.css` (Changed code · before: `L8931-L8933` → after: `L10209-L10213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10209-L10213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10209-L10213) · [Before (L8931-L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8931-L8933)

```diff
-   66% {
-     opacity: 1
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic {
+   border-color: rgba(110, 170, 90, .6);
+   box-shadow: 0 0 19px rgba(110, 170, 90, .3), inset 0 0 8px rgba(110, 170, 90, .1);
+   transition: transform .15s, border-color .15s, box-shadow .3s
+ }
```

#### 1402. `bundles/bloxd.io/main.css` (Changed code · before: `L8935-L8936` → after: `L10215-L10218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10215-L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10215-L10218) · [Before (L8935-L8936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8935-L8936)

```diff
-   to {
-     opacity: 0
+ @media(hover:hover) {
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic:hover {
+     border-color: #6eaa5a;
+     box-shadow: 0 0 32px rgba(110, 170, 90, .5), inset 0 0 8px rgba(110, 170, 90, .15)
```

#### 1403. `bundles/bloxd.io/main.css` (Changed code · before: `L8940` → after: `L10222-L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10222-L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10222-L10225) · [Before (L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8940)

```diff
- @keyframes cosmeticPackAdBorderFirst {
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic.pad-focused {
+   border-color: #6eaa5a;
+   box-shadow: 0 0 32px rgba(110, 170, 90, .5), inset 0 0 8px rgba(110, 170, 90, .15)
+ }
```

#### 1404. `bundles/bloxd.io/main.css` (Changed code · before: `L8942-L8945` → after: `L10227-L10229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10227-L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10227-L10229) · [Before (L8942-L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8942-L8945)

```diff
-   0%,
-   66% {
-     opacity: 1
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic .CosmeticPackAdOverlay {
+   z-index: 2
+ }
```

#### 1405. `bundles/bloxd.io/main.css` (Changed code · before: `L8947-L8950` → after: `L10231-L10232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10231-L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10231-L10232) · [Before (L8947-L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8947-L8950)

```diff
-   66.01%,
-   to {
-     opacity: 0
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic .CosmeticPackAdOverlay .CosmeticPackAdTitle {
+   color: #8cdc78
```

#### 1406. `bundles/bloxd.io/main.css` (Changed code · before: `L8953-L8956` → after: `L10235-L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10235-L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10235-L10241) · [Before (L8953-L8956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8953-L8956)

```diff
- @keyframes cosmeticPackAdStarTwinkle {
-   0% {
-     opacity: .4
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary {
+   border-style: solid;
+   border-width: 4px;
+   box-shadow: 0 0 16px rgba(95, 65, 120, .5), 0 0 40px rgba(50, 90, 95, .3), inset 0 0 13px rgba(95, 65, 120, .15);
+   overflow: visible;
+   transition: box-shadow .3s
+ }
```

#### 1407. `bundles/bloxd.io/main.css` (Changed code · before: `L8958-L8959` → after: `L10243-L10245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10243-L10245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10243-L10245) · [Before (L8958-L8959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8958-L8959)

```diff
-   to {
-     opacity: 1
+ @media(hover:hover) {
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary:hover {
+     box-shadow: 0 0 24px rgba(95, 65, 120, .7), 0 0 56px rgba(50, 90, 95, .5), inset 0 0 16px rgba(95, 65, 120, .2)
```

#### 1408. `bundles/bloxd.io/main.css` (Changed code · before: `L8963-L8966` → after: `L10249-L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10249-L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10249-L10251) · [Before (L8963-L8966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8963-L8966)

```diff
- @keyframes cosmeticPackAdNameShimmer {
-   0% {
-     transform: translateX(0)
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary.pad-focused {
+   box-shadow: 0 0 24px rgba(95, 65, 120, .7), 0 0 56px rgba(50, 90, 95, .5), inset 0 0 16px rgba(95, 65, 120, .2)
+ }
```

#### 1409. `bundles/bloxd.io/main.css` (Changed code · before: `L8968-L8970` → after: `L10253-L10257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10253-L10257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10253-L10257) · [Before (L8968-L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8968-L8970)

```diff
-   to {
-     transform: translateX(85.71429%)
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle {
+   inset: 0;
+   pointer-events: none;
+   position: absolute;
+   z-index: 3
```

#### 1410. `bundles/bloxd.io/main.css` (Changed code · before: `L8973-L8976` → after: `L10260-L10265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10260-L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10260-L10265) · [Before (L8973-L8976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8973-L8976)

```diff
- @keyframes cosmeticPackAdNameShimmerPosition {
-   0% {
-     background-position: 100% 0
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div {
+   animation: cosmeticPackAdBorderFirst 4s linear infinite;
+   inset: 0;
+   outline: 4px solid #5f4178;
+   position: absolute
+ }
```

#### 1411. `bundles/bloxd.io/main.css` (Changed code · before: `L8978-L8980` → after: `L10267-L10269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10267-L10269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10267-L10269) · [Before (L8978-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8978-L8980)

```diff
-   to {
-     background-position: -200% 0
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div:nth-child(2) {
+   animation-name: premiumBorderSecond;
+   outline-color: #325a5f
```

#### 1412. `bundles/bloxd.io/main.css` (Changed code · before: `L8983-L8985` → after: `L10272-L10274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10272-L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10272-L10274) · [Before (L8983-L8985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8983-L8985)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd {
-   background-color: #303a59;
-   border-color: #ffb914
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div:nth-child(3) {
+   animation-name: premiumBorderThird;
+   outline-color: #ffb914
```

#### 1413. `bundles/bloxd.io/main.css` (Changed code · before: `L8988-L8994` → after: `L10277-L10284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10277-L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10277-L10284) · [Before (L8988-L8994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8988-L8994)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner {
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   height: 100%;
-   padding: 12px;
-   width: 100%
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary:after {
+   animation: cosmeticPackAdStarTwinkle 3s ease-in-out infinite alternate;
+   background-image: radial-gradient(1px 1px at 20% 30%, hsla(0, 0%, 100%, .8) 0, transparent 100%), radial-gradient(1px 1px at 40% 70%, hsla(0, 0%, 100%, .6) 0, transparent 100%), radial-gradient(1px 1px at 60% 15%, hsla(0, 0%, 100%, .7) 0, transparent 100%), radial-gradient(1px  … [truncated]
+   content: "";
+   inset: 0;
+   pointer-events: none;
+   position: absolute;
+   z-index: 1
```

#### 1414. `bundles/bloxd.io/main.css` (Changed code · before: `L8997-L9001` → after: `L10287-L10288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10287-L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10287-L10288) · [Before (L8997-L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L8997-L9001)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   align-items: flex-start;
-   color: #ffb914;
-   display: flex;
-   gap: 6px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay {
+   z-index: 2
```

#### 1415. `bundles/bloxd.io/main.css` (Changed code · before: `L9004-L9011` → after: `L10291-L10292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10291-L10292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10291-L10292) · [Before (L9004-L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9004-L9011)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner .SuperRankAdLogoAndTitle .SuperRankAdTitle {
-   -webkit-background-clip: text;
-   background-clip: text;
-   background-image: linear-gradient(140deg, #ffb914 40%, #fcd373);
-   color: transparent;
-   display: inline-block;
-   font-weight: 700;
-   text-shadow: none
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
+   -webkit-text-fill-color: transparent
```

#### 1416. `bundles/bloxd.io/main.css` (Changed code · before: `L9014-L9018` → after: `L10295-L10320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10295-L10320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10295-L10320) · [Before (L9014-L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9014-L9018)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner .SuperRankAdButton .NewButton {
-   align-items: center;
-   box-sizing: border-box;
-   display: flex;
-   justify-content: center
+ @supports(-webkit-mask-clip:text) and (overflow-x:clip) {
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
+     margin-inline-end: auto;
+     min-width: min-content;
+     overflow-x: clip;
+     position: relative
+   }
+ 
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdItemCountInner,
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdName {
+     -webkit-mask-clip: text;
+     -webkit-mask-image: linear-gradient(#000, #000)
+   }
+ 
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdItemCountInner:before,
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdName:before {
+ ... (10 more added lines; see GitHub link above)
```

#### 1417. `bundles/bloxd.io/main.css` (Changed code · before: `L9021-L9023` → after: `L10323-L10329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10323-L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10323-L10329) · [Before (L9021-L9023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9021-L9023)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 {
-   height: 250px;
-   width: 300px
+ @supports not ((-webkit-mask-clip:text) and (overflow-x:clip)) {
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
+     animation: cosmeticPackAdNameShimmerPosition 3s linear infinite;
+     background: linear-gradient(90deg, #b388ff, #64ffda, #ffb914, #b388ff) 0 0/300% 100%;
+     -webkit-background-clip: text;
+     background-clip: text
+   }
```

#### 1418. `bundles/bloxd.io/main.css` (Changed code · before: `L9026-L9027` → after: `L10332-L10340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10332-L10340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10332-L10340) · [Before (L9026-L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9026-L9027)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner {
-   gap: 6px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary[data-off-screen] *,
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary[data-off-screen] :after,
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary[data-off-screen] :before,
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary[data-off-screen]:after,
+ html[data-app-covered] .WholeAppWrapper .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary *,
+ html[data-app-covered] .WholeAppWrapper .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary :after,
+ html[data-app-covered] .WholeAppWrapper .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary :before,
+ html[data-app-covered] .WholeAppWrapper .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary:after {
+   animation-play-state: paused !important
```

#### 1419. `bundles/bloxd.io/main.css` (Changed code · before: `L9030-L9031` → after: `L10343-L10347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10343-L10347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10343-L10347) · [Before (L9030-L9031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9030-L9031)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   font-size: 32px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticShopBannerSubtitle,
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CountdownTime,
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticShopBannerSubtitle,
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CountdownTime {
+   display: none
```

#### 1420. `bundles/bloxd.io/main.css` (Changed code · before: `L9034-L9037` → after: `L10350-L10352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10350-L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10350-L10352) · [Before (L9034-L9037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9034-L9037)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdSubTitle {
-   flex-grow: 1;
-   font-size: 24px;
-   text-align: start
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 {
+   height: 250px;
+   width: 300px
```

#### 1421. `bundles/bloxd.io/main.css` (Changed code · before: `L9040-L9041` → after: `L10355-L10356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10355-L10356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10355-L10356) · [Before (L9040-L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9040-L9041)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdButton .NewButton {
-   font-size: 24px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay {
+   flex-direction: column
```

#### 1422. `bundles/bloxd.io/main.css` (Changed code · before: `L9044-L9045` → after: `L10359-L10361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10359-L10361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10359-L10361) · [Before (L9044-L9045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9044-L9045)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdTable {
-   display: none
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+   font-size: 29px;
+   padding: 10px 13px
```

#### 1423. `bundles/bloxd.io/main.css` (Changed code · before: `L9048-L9050` → after: `L10364-L10365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10364-L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10364-L10365) · [Before (L9048-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9048-L9050)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 {
-   height: 90px;
-   width: 728px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
+   justify-content: flex-end
```

#### 1424. `bundles/bloxd.io/main.css` (Changed code · before: `L9053-L9054` → after: `L10368-L10370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10368-L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10368-L10370) · [Before (L9053-L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9053-L9054)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner {
-   flex-wrap: wrap
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 {
+   height: 600px;
+   width: 300px
```

#### 1425. `bundles/bloxd.io/main.css` (Changed code · before: `L9057-L9059` → after: `L10373-L10374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10373-L10374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10373-L10374) · [Before (L9057-L9059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9057-L9059)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   font-size: 26px;
-   line-height: 1.15
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay {
+   flex-direction: column
```

#### 1426. `bundles/bloxd.io/main.css` (Changed code · before: `L9062-L9064` → after: `L10377-L10379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10377-L10379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10377-L10379) · [Before (L9062-L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9062-L9064)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdLogoAndTitle .SuperRankAdTitle {
-   margin-block: -.1em;
-   padding-block: .1em
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
+   font-size: 16px;
+   padding: 3px 10px
```

#### 1427. `bundles/bloxd.io/main.css` (Changed code · before: `L9067-L9073` → after: `L10382-L10384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10382-L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10382-L10384) · [Before (L9067-L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9067-L9073)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdSubTitle {
-   align-items: flex-end;
-   display: flex;
-   flex-grow: 1;
-   font-size: 18px;
-   line-height: 1;
-   max-width: calc(100% - 216px)
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdCharacters {
+   flex-wrap: wrap;
+   min-height: 0
```

#### 1428. `bundles/bloxd.io/main.css` (Changed code · before: `L9076-L9079` → after: `L10387-L10389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10387-L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10387-L10389) · [Before (L9076-L9079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9076-L9079)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdButton {
-   display: flex;
-   flex-grow: 1;
-   justify-content: flex-end
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdCharacters .CosmeticPackAdCharacterPreview {
+   height: min(200px, 50% - 5px);
+   width: 130px
```

#### 1429. `bundles/bloxd.io/main.css` (Changed code · before: `L9082-L9084` → after: `L10392-L10394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10392-L10394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10392-L10394) · [Before (L9082-L9084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9082-L9084)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdButton .NewButton {
-   font-size: 24px;
-   width: 220px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+   font-size: 42px;
+   padding: 22px 19px
```

#### 1430. `bundles/bloxd.io/main.css` (Changed code · before: `L9087-L9098` → after: `L10397-L10398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10397-L10398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10397-L10398) · [Before (L9087-L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9087-L9098)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdButton .NewButton .ButtonBody {
-   -webkit-line-clamp: 2;
-   -webkit-box-orient: vertical;
-   text-wrap: balance;
-   display: -webkit-box;
-   line-height: 1.3;
-   overflow-x: hidden;
-   overflow-y: hidden;
-   padding: 0 .4em;
-   text-overflow: ellipsis;
-   white-space: nowrap;
-   white-space: normal
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
+   flex-wrap: wrap
```

#### 1431. `bundles/bloxd.io/main.css` (Changed code · before: `L9101-L9102` → after: `L10401-L10402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10401-L10402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10401-L10402) · [Before (L9101-L9102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9101-L9102)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdTable {
-   display: none
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdItemCount {
+   white-space: nowrap
```

#### 1432. `bundles/bloxd.io/main.css` (Changed code · before: `L9105` → after: `L10405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10405) · [Before (L9105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9105)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 {
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 {
```

#### 1433. `bundles/bloxd.io/main.css` (Changed code · before: `L9110-L9113` → after: `L10410-L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10410-L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10410-L10412) · [Before (L9110-L9113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9110-L9113)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner {
-   align-items: center;
-   flex-wrap: wrap;
-   gap: 16px 32px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
+   font-size: 20px;
+   padding: 4px 12px
```

#### 1434. `bundles/bloxd.io/main.css` (Changed code · before: `L9116-L9118` → after: `L10415-L10417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10415-L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10415-L10417) · [Before (L9116-L9118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9116-L9118)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   font-size: 36px;
-   width: 260px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+   font-size: 48px;
+   padding: 24px 32px
```

#### 1435. `bundles/bloxd.io/main.css` (Changed code · before: `L9121-L9125` → after: `L10420-L10422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10420-L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10420-L10422) · [Before (L9121-L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9121-L9125)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdSubTitle {
-   flex-grow: 1;
-   font-size: 20px;
-   text-align: start;
-   width: 260px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd728x90 {
+   height: 90px;
+   width: 728px
```

#### 1436. `bundles/bloxd.io/main.css` (Changed code · before: `L9128-L9130` → after: `L10425-L10427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10425-L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10425-L10427) · [Before (L9128-L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9128-L9130)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdButton .NewButton {
-   font-size: 26px;
-   width: 260px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd728x90 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+   font-size: 32px;
+   padding: 0 26px
```

#### 1437. `bundles/bloxd.io/main.css` (Changed code · before: `L9133-L9137` → after: `L10430-L10432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10430-L10432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10430-L10432) · [Before (L9133-L9137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9133-L9137)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdTable {
-   align-items: center;
-   display: flex;
-   flex-grow: 1;
-   font-size: 10px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 {
+   height: 50px;
+   width: 320px
```

#### 1438. `bundles/bloxd.io/main.css` (Changed code · before: `L9140-L9142` → after: `L10435-L10436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10435-L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10435-L10436) · [Before (L9140-L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9140-L9142)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 {
-   height: 704px;
-   width: 352px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay {
+   background: linear-gradient(-90deg, rgba(34, 40, 59, .75), rgba(34, 40, 59, .6))
```

#### 1439. `bundles/bloxd.io/main.css` (Changed code · before: `L9145-L9148` → after: `L10439-L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10439-L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10439-L10441) · [Before (L9145-L9148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9145-L9148)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner {
-   align-items: center;
-   flex-wrap: wrap;
-   gap: 8px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticPackAdCharacters,
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticShopBanner {
+   display: none
```

#### 1440. `bundles/bloxd.io/main.css` (Changed code · before: `L9151-L9153` → after: `L10444-L10452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10444-L10452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10444-L10452) · [Before (L9151-L9153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9151-L9153)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   font-size: 40px;
-   width: 288px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+   align-items: center;
+   box-sizing: border-box;
+   flex-direction: row;
+   font-size: 22px;
+   gap: 10px;
+   justify-content: space-between;
+   padding: 0 13px;
+   width: 100%
```

#### 1441. `bundles/bloxd.io/main.css` (Changed code · before: `L9156-L9159` → after: `L10455-L10464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10455-L10464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10455-L10464) · [Before (L9156-L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9156-L9159)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdSubTitle {
-   font-size: 22px;
-   text-align: start;
-   width: 288px
+ @keyframes buyButtonPulse {
+ 
+   0%,
+   to {
+     transform: scale(1)
+   }
+ 
+   50% {
+     transform: scale(1.05)
+   }
```

#### 1442. `bundles/bloxd.io/main.css` (Changed code · before: `L9162-L9163` → after: `L10467-L10469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10467-L10469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10467-L10469) · [Before (L9162-L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9162-L9163)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable {
-   align-items: flex-start;
+ .CosmeticShopContainer {
+   align-items: center;
+   color: #fff;
```

#### 1443. `bundles/bloxd.io/main.css` (Changed code · before: `L9165-L9168` → after: `L10471-L10477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10471-L10477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10471-L10477) · [Before (L9165-L9168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9165-L9168)

```diff
-   flex-grow: 1;
-   font-size: 16px;
-   margin-top: 32px;
-   order: 3
+   flex: 1 0 1rem;
+   flex-direction: column;
+   gap: 1rem;
+   height: 100%;
+   justify-content: center;
+   overflow: hidden;
+   width: 100%
```

#### 1444. `bundles/bloxd.io/main.css` (Changed code · before: `L9171-L9175` → after: `L10480-L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10480-L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10480-L10481) · [Before (L9171-L9175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9171-L9175)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr td:first-of-type,
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr th,
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:first-of-type,
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:nth-of-type(2) {
-   display: none
+ .CosmeticPackPrice {
+   font-weight: 800
```

#### 1445. `bundles/bloxd.io/main.css` (Changed code · before: `L9178-L9179` → after: `L10484-L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10484-L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10484-L10495) · [Before (L9178-L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9178-L9179)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:last-of-type .PerkContainer {
-   height: auto
+ .CosmeticShopSuperRankPromo {
+   align-items: center;
+   background: #3c4b68;
+   border: 1px solid #ffb914;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   display: flex;
+   flex-shrink: 0;
+   font-size: 1.8rem;
+   gap: .8rem;
+   justify-content: center;
+   padding: .6rem 2rem
```

#### 1446. `bundles/bloxd.io/main.css` (Changed code · before: `L9182-L9183` → after: `L10498-L10499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10498-L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10498-L10499) · [Before (L9182-L9183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9182-L9183)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdButton {
-   order: 4
+ .CosmeticShopSuperRankPromo .CosmeticShopSuperRankPromoIcon {
+   color: #ffb914
```

#### 1447. `bundles/bloxd.io/main.css` (Changed code · before: `L9186-L9188` → after: `L10502-L10508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10502-L10508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10502-L10508) · [Before (L9186-L9188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9186-L9188)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdButton .NewButton {
-   font-size: 32px;
-   width: 288px
+ .CosmeticShopSuperRankPromo .CosmeticShopSuperRankPromoText {
+   -webkit-background-clip: text;
+   background-clip: text;
+   background-image: linear-gradient(140deg, #ffb914 40%, #fcd373);
+   color: transparent;
+   font-weight: 800;
+   text-shadow: none
```

#### 1448. `bundles/bloxd.io/main.css` (Changed code · before: `L9191-L9193` → after: `L10511-L10517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10511-L10517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10511-L10517) · [Before (L9191-L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9191-L9193)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 {
-   height: 50px;
-   width: 320px
+ .CosmeticShopBanner {
+   background: #3c4b68;
+   border: .3rem solid #0f0f0f;
+   border-image: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d) 1;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   flex-shrink: 0
```

#### 1449. `bundles/bloxd.io/main.css` (Changed code · before: `L9196-L9201` → after: `L10520-L10527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10520-L10527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10520-L10527) · [Before (L9196-L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9196-L9201)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner {
-   align-items: flex-start;
-   column-gap: 8px;
-   flex-direction: row;
-   justify-content: space-around;
-   padding: 7px
+ .CosmeticShopBanner .CosmeticShopBannerHeader {
+   align-items: center;
+   color: #fff;
+   display: flex;
+   font-size: 1.8rem;
+   gap: .8rem;
+   justify-content: center;
+   padding: .6rem 2rem
```

#### 1450. `bundles/bloxd.io/main.css` (Changed code · before: `L9204-L9206` → after: `L10530-L10534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10530-L10534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10530-L10534) · [Before (L9204-L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9204-L9206)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   flex-shrink: 0;
-   font-size: 22px
+ .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon {
+   background: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d);
+   background-clip: text;
+   -webkit-background-clip: text;
+   color: transparent
```

#### 1451. `bundles/bloxd.io/main.css` (Changed code · before: `L9209-L9211` → after: `L10537-L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10537-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10537-L10540) · [Before (L9209-L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9209-L9211)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdSubTitle,
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdTable {
-   display: none
+ .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerSubtitle,
+ .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerTitle,
+ .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
+   font-weight: 800
```

#### 1452. `bundles/bloxd.io/main.css` (Changed code · before: `L9214-L9215` → after: `L10543-L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10543-L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10543-L10544) · [Before (L9214-L9215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9214-L9215)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdButton {
-   align-self: center
+ .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
+   color: #ffb914
```

#### 1453. `bundles/bloxd.io/main.css` (Changed code · before: `L9218-L9221` → after: `L10547-L10554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10547-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10547-L10554) · [Before (L9218-L9221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9218-L9221)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdButton .NewButton {
-   font-size: 16px;
-   min-height: 2.1em;
-   min-width: 125px
+ .CosmeticShopBanner .CosmeticShopBannerContent {
+   align-items: center;
+   color: #fff;
+   display: flex;
+   font-size: 1.4rem;
+   justify-content: center;
+   padding: .4rem 2rem .6rem;
+   text-align: center
```

#### 1454. `bundles/bloxd.io/main.css` (Changed code · before: `L9224-L9235` → after: `L10557-L10558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10557-L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10557-L10558) · [Before (L9224-L9235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9224-L9235)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdButton .NewButton .ButtonBody {
-   -webkit-line-clamp: 2;
-   -webkit-box-orient: vertical;
-   text-wrap: balance;
-   display: -webkit-box;
-   line-height: 1.2;
-   overflow-x: hidden;
-   overflow-y: hidden;
-   padding: 0 .3em;
-   text-overflow: ellipsis;
-   white-space: nowrap;
-   white-space: normal
+ .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentText {
+   max-width: 70rem
```

#### 1455. `bundles/bloxd.io/main.css` (Changed code · before: `L9238-L9243` → after: `L10561-L10565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10561-L10565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10561-L10565) · [Before (L9238-L9243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9238-L9243)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd {
-   background-color: rgba(57, 73, 128, .4);
-   border-color: #394980;
-   cursor: pointer;
-   overflow: visible;
-   transition: transform .15s, border-color .15s
+ .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink {
+   color: #ffb914;
+   font-weight: 800;
+   text-decoration: underline;
+   white-space: nowrap
```

#### 1456. `bundles/bloxd.io/main.css` (Changed code · before: `L9247-L9252` → after: `L10569-L10570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10569-L10570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10569-L10570) · [Before (L9247-L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9247-L9252)

```diff
-   .AdBannerContainer .AdBanner.CosmeticPackAd:hover {
-     border-color: #b6830e
-   }
- 
-   .AdBannerContainer .AdBanner.CosmeticPackAd:hover .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
-     transform: rotate(90deg) translateY(-.2em)
+   .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink:hover {
+     color: #fcd373
```

#### 1457. `bundles/bloxd.io/main.css` (Changed code · before: `L9256-L9272` → after: `L10574-L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10574-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10574-L10575) · [Before (L9256-L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9256-L9272)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.pad-focused {
-   border-color: #b6830e
- }
- 
- .AdBannerContainer .AdBanner.CosmeticPackAd.pad-focused .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
-   transform: rotate(90deg) translateY(-.2em)
- }
- 
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay {
-   background: linear-gradient(-90deg, rgba(34, 40, 59, .9), transparent);
-   bottom: 0;
-   display: flex;
-   justify-content: center;
-   left: 0;
-   position: absolute;
-   right: 0;
- ... (1 more removed lines; see GitHub link above)
+ .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink.pad-focused {
+   color: #fcd373
```

#### 1458. `bundles/bloxd.io/main.css` (Changed code · before: `L9275` → after: `L10578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10578) · [Before (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9275)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner {
+ .CosmeticPackOwned {
```

#### 1459. `bundles/bloxd.io/main.css` (Changed code · before: `L9277-L9289` → after: `L10580-L10582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10580-L10582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10580-L10582) · [Before (L9277-L9289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9277-L9289)

```diff
-   border-width: 0;
-   bottom: 0;
-   box-shadow: none;
-   left: 0;
-   position: absolute;
-   right: 0;
-   z-index: 3
- }
- 
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
-   font-size: 14px;
-   gap: .4em;
-   padding: 2px 8px;
+   color: #fff;
+   font-size: 1.2rem;
+   padding: .1rem .5rem .2rem;
```

#### 1460. `bundles/bloxd.io/main.css` (Changed code · before: `L9293-L9294` → after: `L10586-L10587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10586-L10587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10586-L10587) · [Before (L9293-L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9293-L9294)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa,
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa {
+ .CosmeticPackOwned .svg-inline--fa,
+ .CosmeticPackOwned.svg-inline--fa {
```

#### 1461. `bundles/bloxd.io/main.css` (Changed code · before: `L9298-L9299` → after: `L10591-L10592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10591-L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10591-L10592) · [Before (L9298-L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9298-L9299)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa path:only-of-type,
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa path:only-of-type {
+ .CosmeticPackOwned .svg-inline--fa path:only-of-type,
+ .CosmeticPackOwned.svg-inline--fa path:only-of-type {
```

#### 1462. `bundles/bloxd.io/main.css` (Changed code · before: `L9306-L9312` → after: `L10599-L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10599-L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10599-L10604) · [Before (L9306-L9312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9306-L9312)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon,
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
-   color: #fff
- }
- 
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerContent {
-   display: none
+ .CosmeticPackItemCount {
+   border: .2rem solid #ffb914;
+   color: #ffb914;
+   font-size: 1.2rem;
+   font-weight: 800;
+   padding: 0 .3rem .2rem
```

#### 1463. `bundles/bloxd.io/main.css` (Changed code · before: `L9315-L9316` → after: `L10607-L10608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10607-L10608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10607-L10608) · [Before (L9315-L9316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9315-L9316)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdCharacters {
-   align-items: center;
+ .CosmeticShopDetail {
+   background-color: #303a59;
```

#### 1464. `bundles/bloxd.io/main.css` (Changed code · before: `L9318-L9325` → after: `L10610-L10611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10610-L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10610-L10611) · [Before (L9318-L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9318-L9325)

```diff
-   flex-grow: 1;
-   gap: 10px;
-   height: 100%;
-   justify-content: space-around;
-   min-width: 0
- }
- 
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdCharacters .CosmeticPackAdCharacterPreview {
+   flex-direction: column;
+   font-size: 1.4rem;
```

#### 1465. `bundles/bloxd.io/main.css` (Changed code · before: `L9327-L9328` → after: `L10613-L10615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10613-L10615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10613-L10615) · [Before (L9327-L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9327-L9328)

```diff
-   min-width: 0;
-   object-fit: contain
+   overflow: hidden;
+   position: relative;
+   width: 100%
```

#### 1466. `bundles/bloxd.io/main.css` (Changed code · before: `L9331-L9340` → after: `L10618-L10619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10618-L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10618-L10619) · [Before (L9331-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9331-L9340)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter {
-   align-items: flex-end;
-   display: flex;
-   flex-direction: column;
-   flex-shrink: 0;
-   font-size: 35px;
-   gap: .3em;
-   justify-content: center;
-   padding: 16px;
-   z-index: 2
+ .CosmeticShopDetail>:not(.PackBackground) {
+   position: relative
```

#### 1467. `bundles/bloxd.io/main.css` (Changed code · before: `L9343` → after: `L10622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10622) · [Before (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9343)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
+ .CosmeticShopDetail .CosmeticShopDetailHeader {
```

#### 1468. `bundles/bloxd.io/main.css` (Changed code · before: `L9345` → after: `L10624-L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10624-L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10624-L10626) · [Before (L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9345)

```diff
-   color: #ffb914;
+   -webkit-backdrop-filter: blur(.1rem);
+   backdrop-filter: blur(.1rem);
+   background-color: #394980;
```

#### 1469. `bundles/bloxd.io/main.css` (Changed code · before: `L9347-L9350` → after: `L10628-L10631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10628-L10631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10628-L10631) · [Before (L9347-L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9347-L9350)

```diff
-   font-weight: 800;
-   gap: .2em;
-   overflow: visible;
-   width: 100%
+   flex-shrink: 0;
+   gap: 1rem;
+   padding: .6rem 1rem;
+   z-index: 1
```

#### 1470. `bundles/bloxd.io/main.css` (Changed code · before: `L9353-L9355` → after: `L10634-L10635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10634-L10635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10634-L10635) · [Before (L9353-L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9353-L9355)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdName {
-   font-size: 1em;
-   overflow: visible
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide {
+   width: 15rem
```

#### 1471. `bundles/bloxd.io/main.css` (Changed code · before: `L9358-L9366` → after: `L10638-L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10638-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10638-L10640) · [Before (L9358-L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9358-L9366)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdItemCount {
-   align-items: center;
-   border: 3px solid #ffb914;
-   color: #ffb914;
-   display: flex;
-   font-weight: 800;
-   justify-content: center;
-   min-height: .6em;
-   padding: 0 4px
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailBackButton {
+   font-size: 2rem;
+   position: relative
```

#### 1472. `bundles/bloxd.io/main.css` (Changed code · before: `L9369-L9370` → after: `L10643-L10648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10643-L10648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10643-L10648) · [Before (L9369-L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9369-L9370)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdItemCount .CosmeticPackAdItemCountInner {
-   font-size: .4em
+ @media(pointer:coarse) {
+   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailBackButton:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
+   }
```

#### 1473. `bundles/bloxd.io/main.css` (Changed code · before: `L9373` → after: `L10651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10651) · [Before (L9373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9373)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta {
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea {
```

#### 1474. `bundles/bloxd.io/main.css` (Changed code · before: `L9377-L9398` → after: `L10654-L10656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10654-L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10654-L10656) · [Before (L9377-L9398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9377-L9398)

```diff
-   font-size: .5em;
-   font-weight: 800;
-   gap: .2em;
-   white-space: nowrap
- }
- 
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
-   transform: rotate(90deg);
-   transition: transform .2s
- }
- 
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic {
-   border-color: rgba(110, 170, 90, .6);
-   box-shadow: 0 0 19px rgba(110, 170, 90, .3), inset 0 0 8px rgba(110, 170, 90, .1);
-   transition: transform .15s, border-color .15s, box-shadow .3s
- }
- ... (6 more removed lines; see GitHub link above)
+   flex-grow: 1;
+   gap: 1rem;
+   justify-content: center
```

#### 1475. `bundles/bloxd.io/main.css` (Changed code · before: `L9401-L9403` → after: `L10659-L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10659-L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10659-L10663) · [Before (L9401-L9403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9401-L9403)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic.pad-focused {
-   border-color: #6eaa5a;
-   box-shadow: 0 0 32px rgba(110, 170, 90, .5), inset 0 0 8px rgba(110, 170, 90, .15)
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTitle {
+   color: #ffb914;
+   font-size: 3rem;
+   font-weight: 800;
+   text-align: center
```

#### 1476. `bundles/bloxd.io/main.css` (Changed code · before: `L9406-L9407` → after: `L10666-L10668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10666-L10668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10666-L10668) · [Before (L9406-L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9406-L9407)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic .CosmeticPackAdOverlay {
-   z-index: 2
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTier {
+   font-size: 1.5rem;
+   margin-top: .3rem
```

#### 1477. `bundles/bloxd.io/main.css` (Changed code · before: `L9410-L9411` → after: `L10671-L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10671-L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10671-L10672) · [Before (L9410-L9411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9410-L9411)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic .CosmeticPackAdOverlay .CosmeticPackAdTitle {
-   color: #8cdc78
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticPackItemCount {
+   margin-top: .3rem
```

#### 1478. `bundles/bloxd.io/main.css` (Changed code · before: `L9414-L9419` → after: `L10675-L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10675-L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10675-L10679) · [Before (L9414-L9419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9414-L9419)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary {
-   border-style: solid;
-   border-width: 4px;
-   box-shadow: 0 0 16px rgba(95, 65, 120, .5), 0 0 40px rgba(50, 90, 95, .3), inset 0 0 13px rgba(95, 65, 120, .15);
-   overflow: visible;
-   transition: box-shadow .3s
+ .CosmeticShopDetail .CosmeticShopBanner {
+   background-color: #ffb914;
+   border-width: 0;
+   box-shadow: none;
+   position: relative
```

#### 1479. `bundles/bloxd.io/main.css` (Changed code · before: `L9422-L9425` → after: `L10682-L10685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10682-L10685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10682-L10685) · [Before (L9422-L9425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9422-L9425)

```diff
- @media(hover:hover) {
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary:hover {
-     box-shadow: 0 0 24px rgba(95, 65, 120, .7), 0 0 56px rgba(50, 90, 95, .5), inset 0 0 16px rgba(95, 65, 120, .2)
-   }
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader {
+   font-size: 1.2rem;
+   padding: .3rem .5rem;
+   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
```

#### 1480. `bundles/bloxd.io/main.css` (Changed code · before: `L9428-L9429` → after: `L10688-L10690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10688-L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10688-L10690) · [Before (L9428-L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9428-L9429)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary.pad-focused {
-   box-shadow: 0 0 24px rgba(95, 65, 120, .7), 0 0 56px rgba(50, 90, 95, .5), inset 0 0 16px rgba(95, 65, 120, .2)
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa,
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa {
+   paint-order: stroke fill
```

#### 1481. `bundles/bloxd.io/main.css` (Changed code · before: `L9432-L9436` → after: `L10693-L10698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10693-L10698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10693-L10698) · [Before (L9432-L9436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9432-L9436)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle {
-   inset: 0;
-   pointer-events: none;
-   position: absolute;
-   z-index: 3
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa path:only-of-type,
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 1482. `bundles/bloxd.io/main.css` (Changed code · before: `L9439-L9443` → after: `L10701-L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10701-L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10701-L10703) · [Before (L9439-L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9439-L9443)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div {
-   animation: cosmeticPackAdBorderFirst 4s linear infinite;
-   inset: 0;
-   outline: 4px solid #5f4178;
-   position: absolute
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon,
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
+   color: #fff
```

#### 1483. `bundles/bloxd.io/main.css` (Changed code · before: `L9446-L9448` → after: `L10706-L10707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10706-L10707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10706-L10707) · [Before (L9446-L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9446-L9448)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div:nth-child(2) {
-   animation-name: premiumBorderSecond;
-   outline-color: #325a5f
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerContent {
+   display: none
```

#### 1484. `bundles/bloxd.io/main.css` (Changed code · before: `L9451-L9453` → after: `L10710-L10717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10710-L10717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10710-L10717) · [Before (L9451-L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9451-L9453)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div:nth-child(3) {
-   animation-name: premiumBorderThird;
-   outline-color: #ffb914
+ .CosmeticShopDetail .CosmeticShopDetailBody {
+   align-items: stretch;
+   box-sizing: border-box;
+   display: flex;
+   flex: 1 0 1rem;
+   min-height: 0;
+   padding: 0 2rem;
+   width: 100%
```

#### 1485. `bundles/bloxd.io/main.css` (Changed code · before: `L9456-L9463` → after: `L10720-L10726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10720-L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10720-L10726) · [Before (L9456-L9463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9456-L9463)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary:after {
-   animation: cosmeticPackAdStarTwinkle 3s ease-in-out infinite alternate;
-   background-image: radial-gradient(1px 1px at 20% 30%, hsla(0, 0%, 100%, .8) 0, transparent 100%), radial-gradient(1px 1px at 40% 70%, hsla(0, 0%, 100%, .6) 0, transparent 100%), radial-gradient(1px 1px at 60% 15%, hsla(0, 0%, 100%, .7) 0, transparent 100%), radial-gradient(1px  … [truncated]
-   content: "";
-   inset: 0;
-   pointer-events: none;
-   position: absolute;
-   z-index: 1
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea {
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   overflow-y: auto;
+   padding: 1rem;
+   width: 46rem
```

#### 1486. `bundles/bloxd.io/main.css` (Changed code · before: `L9466-L9467` → after: `L10729-L10730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10729-L10730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10729-L10730) · [Before (L9466-L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9466-L9467)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay {
-   z-index: 2
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailTypeSection {
+   width: 100%
```

#### 1487. `bundles/bloxd.io/main.css` (Changed code · before: `L9470-L9471` → after: `L10733-L10739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10733-L10739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10733-L10739) · [Before (L9470-L9471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9470-L9471)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
-   -webkit-text-fill-color: transparent
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacters {
+   align-items: center;
+   display: flex;
+   flex-wrap: wrap;
+   gap: .8rem;
+   justify-content: space-between;
+   padding: .5rem 0
```

#### 1488. `bundles/bloxd.io/main.css` (Changed code · before: `L9474-L9499` → after: `L10742-L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10742-L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10742-L10746) · [Before (L9474-L9499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9474-L9499)

```diff
- @supports(-webkit-mask-clip:text) and (overflow-x:clip) {
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
-     margin-inline-end: auto;
-     min-width: min-content;
-     overflow-x: clip;
-     position: relative
-   }
- 
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdItemCountInner,
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdName {
-     -webkit-mask-clip: text;
-     -webkit-mask-image: linear-gradient(#000, #000)
-   }
- 
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdItemCountInner:before,
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdName:before {
- ... (10 more removed lines; see GitHub link above)
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard {
+   border: .2rem solid transparent;
+   cursor: pointer;
+   padding: .5rem;
+   transition: transform .15s, border-color .15s, background-color .15s
```

#### 1489. `bundles/bloxd.io/main.css` (Changed code · before: `L9502-L9507` → after: `L10749-L10751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10749-L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10749-L10751) · [Before (L9502-L9507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9502-L9507)

```diff
- @supports not ((-webkit-mask-clip:text) and (overflow-x:clip)) {
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
-     animation: cosmeticPackAdNameShimmerPosition 3s linear infinite;
-     background: linear-gradient(90deg, #b388ff, #64ffda, #ffb914, #b388ff) 0 0/300% 100%;
-     -webkit-background-clip: text;
-     background-clip: text
+ @media(hover:hover) {
+   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard:hover {
+     transform: scale(1.05)
```

#### 1490. `bundles/bloxd.io/main.css` (Changed code · before: `L9511-L9519` → after: `L10755-L10756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10755-L10756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10755-L10756) · [Before (L9511-L9519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9511-L9519)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary[data-off-screen] *,
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary[data-off-screen] :after,
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary[data-off-screen] :before,
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary[data-off-screen]:after,
- html[data-app-covered] .WholeAppWrapper .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary *,
- html[data-app-covered] .WholeAppWrapper .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary :after,
- html[data-app-covered] .WholeAppWrapper .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary :before,
- html[data-app-covered] .WholeAppWrapper .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary:after {
-   animation-play-state: paused !important
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard.pad-focused {
+   transform: scale(1.05)
```

#### 1491. `bundles/bloxd.io/main.css` (Changed code · before: `L9522-L9526` → after: `L10759-L10762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10759-L10762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10759-L10762) · [Before (L9522-L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9522-L9526)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticShopBannerSubtitle,
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CountdownTime,
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticShopBannerSubtitle,
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CountdownTime {
-   display: none
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard.CosmeticShopDetailCharacterCardTryingOn {
+   background-color: rgba(255, 185, 20, .15);
+   border-color: #ffb914;
+   border-style: dashed
```

#### 1492. `bundles/bloxd.io/main.css` (Changed code · before: `L9529-L9531` → after: `L10765-L10770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10765-L10770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10765-L10770) · [Before (L9529-L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9529-L9531)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 {
-   height: 250px;
-   width: 300px
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard .CosmeticShopDetailCharacterPreview {
+   background-position: 50%;
+   background-repeat: no-repeat;
+   background-size: contain;
+   height: 12rem;
+   width: 8rem
```

#### 1493. `bundles/bloxd.io/main.css` (Changed code · before: `L9534-L9535` → after: `L10773-L10782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10773-L10782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10773-L10782) · [Before (L9534-L9535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9534-L9535)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay {
-   flex-direction: column
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailTypeLabel {
+   align-items: center;
+   border-bottom: .1rem solid rgba(255, 185, 20, .2);
+   color: #ffb914;
+   display: flex;
+   font-size: 1.4rem;
+   font-weight: 800;
+   gap: .5rem;
+   margin-bottom: .3rem;
+   padding: .4rem .2rem .2rem
```

#### 1494. `bundles/bloxd.io/main.css` (Changed code · before: `L9538-L9540` → after: `L10785-L10787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10785-L10787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10785-L10787) · [Before (L9538-L9540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9538-L9540)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
-   font-size: 29px;
-   padding: 10px 13px
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailTypeLabel .svg-inline--fa {
+   font-size: 1.2rem;
+   opacity: .7
```

#### 1495. `bundles/bloxd.io/main.css` (Changed code · before: `L9543-L9544` → after: `L10790-L10797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10790-L10797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10790-L10797) · [Before (L9543-L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9543-L9544)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
-   justify-content: flex-end
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup {
+   grid-gap: .5rem;
+   align-items: center;
+   display: grid;
+   gap: .5rem;
+   grid-template-columns: repeat(6, 1fr);
+   padding: .3rem 0;
+   width: 100%
```

#### 1496. `bundles/bloxd.io/main.css` (Changed code · before: `L9547-L9549` → after: `L10800-L10805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10800-L10805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10800-L10805) · [Before (L9547-L9549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9547-L9549)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 {
-   height: 600px;
-   width: 300px
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell {
+   align-items: flex-start;
+   display: flex;
+   flex-wrap: wrap;
+   justify-content: flex-start;
+   position: relative
```

#### 1497. `bundles/bloxd.io/main.css` (Changed code · before: `L9552-L9553` → after: `L10808-L10813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10808-L10813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10808-L10813) · [Before (L9552-L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9552-L9553)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay {
-   flex-direction: column
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption {
+   aspect-ratio: 1/1;
+   box-sizing: border-box;
+   cursor: pointer;
+   transition: transform .15s;
+   width: 33%
```

#### 1498. `bundles/bloxd.io/main.css` (Changed code · before: `L9556-L9558` → after: `L10816-L10819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10816-L10819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10816-L10819) · [Before (L9556-L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9556-L9558)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
-   font-size: 16px;
-   padding: 3px 10px
+ @media(hover:hover) {
+   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption:hover {
+     transform: scale(1.1)
+   }
```

#### 1499. `bundles/bloxd.io/main.css` (Changed code · before: `L9561-L9563` → after: `L10822-L10823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10822-L10823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10822-L10823) · [Before (L9561-L9563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9561-L9563)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdCharacters {
-   flex-wrap: wrap;
-   min-height: 0
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption.pad-focused {
+   transform: scale(1.1)
```

#### 1500. `bundles/bloxd.io/main.css` (Changed code · before: `L9566-L9568` → after: `L10826-L10829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10826-L10829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10826-L10829) · [Before (L9566-L9568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9566-L9568)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdCharacters .CosmeticPackAdCharacterPreview {
-   height: min(200px, 50% - 5px);
-   width: 130px
+ @media(hover:none) {
+   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption:active {
+     transform: scale(1.1)
+   }
```

#### 1501. `bundles/bloxd.io/main.css` (Changed code · before: `L9571-L9573` → after: `L10832-L10833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10832-L10833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10832-L10833) · [Before (L9571-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9571-L9573)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
-   font-size: 42px;
-   padding: 22px 19px
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption.CosmeticColorOptionSelected {
+   border: .25rem solid #ffb914
```

#### 1502. `bundles/bloxd.io/main.css` (Changed code · before: `L9576-L9577` → after: `L10836-L10848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10836-L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10836-L10848) · [Before (L9576-L9577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9576-L9577)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
-   flex-wrap: wrap
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper {
+   align-items: center;
+   -webkit-backdrop-filter: blur(.1rem);
+   backdrop-filter: blur(.1rem);
+   border: .2rem solid transparent;
+   border-radius: 0;
+   cursor: pointer;
+   display: flex;
+   height: 7rem;
+   justify-content: center;
+   position: relative;
+   transition: transform .1s, background-color .1s, border-color .1s;
+   width: 7rem
```

#### 1503. `bundles/bloxd.io/main.css` (Changed code · before: `L9580-L9581` → after: `L10851-L10854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10851-L10854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10851-L10854) · [Before (L9580-L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9580-L9581)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdItemCount {
-   white-space: nowrap
+ @media(hover:hover) {
+   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper:hover {
+     transform: scale(1.05)
+   }
```

#### 1504. `bundles/bloxd.io/main.css` (Changed code · before: `L9584-L9586` → after: `L10857-L10858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10857-L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10857-L10858) · [Before (L9584-L9586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9584-L9586)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 {
-   height: 250px;
-   width: 970px
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.pad-focused {
+   transform: scale(1.05)
```

#### 1505. `bundles/bloxd.io/main.css` (Changed code · before: `L9589-L9591` → after: `L10861-L10864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10861-L10864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10861-L10864) · [Before (L9589-L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9589-L9591)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
-   font-size: 20px;
-   padding: 4px 12px
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.TryingOnCharCustomPartWrapper {
+   background-color: rgba(255, 185, 20, .15);
+   border-color: #ffb914;
+   border-style: dashed
```

#### 1506. `bundles/bloxd.io/main.css` (Changed code · before: `L9594-L9596` → after: `L10867-L10871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10867-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10867-L10871) · [Before (L9594-L9596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9594-L9596)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
-   font-size: 48px;
-   padding: 24px 32px
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.CharCustomPartWrapperProfileEffect {
+   box-sizing: border-box;
+   height: 4rem;
+   padding: .3rem;
+   width: 16rem
```

#### 1507. `bundles/bloxd.io/main.css` (Changed code · before: `L9599-L9601` → after: `L10874-L10881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10874-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10874-L10881) · [Before (L9599-L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9599-L9601)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd728x90 {
-   height: 90px;
-   width: 728px
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   gap: .3rem;
+   height: 100%;
+   justify-content: center;
+   width: 100%
```

#### 1508. `bundles/bloxd.io/main.css` (Changed code · before: `L9604-L9606` → after: `L10884-L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10884-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10884-L10889) · [Before (L9604-L9606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9604-L9606)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd728x90 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
-   font-size: 32px;
-   padding: 0 26px
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart .EmoteCustomPartIcon {
+   aspect-ratio: 1/1;
+   background-position: 50%;
+   background-repeat: no-repeat;
+   background-size: contain;
+   width: 100%
```

#### 1509. `bundles/bloxd.io/main.css` (Changed code · before: `L9609-L9611` → after: `L10892-L10895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10892-L10895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10892-L10895) · [Before (L9609-L9611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9609-L9611)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 {
-   height: 50px;
-   width: 320px
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart .EmoteCustomPartLabel {
+   color: #fcd373;
+   font-size: 1rem;
+   text-align: center
```

#### 1510. `bundles/bloxd.io/main.css` (Changed code · before: `L9614-L9615` → after: `L10898-L10903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10898-L10903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10898-L10903) · [Before (L9614-L9615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9614-L9615)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay {
-   background: linear-gradient(-90deg, rgba(34, 40, 59, .75), rgba(34, 40, 59, .6))
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper .CharCustomPart {
+   background-position: 50%;
+   background-repeat: no-repeat;
+   background-size: contain;
+   height: 85%;
+   width: 85%
```

#### 1511. `bundles/bloxd.io/main.css` (Changed code · before: `L9618-L9620` → after: `L10906-L10908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10906-L10908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10906-L10908) · [Before (L9618-L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9618-L9620)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticPackAdCharacters,
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticShopBanner {
-   display: none
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper .CharCustomPart.CharCustomProfileEffect {
+   height: 100%;
+   width: 100%
```

#### 1512. `bundles/bloxd.io/main.css` (Changed code · before: `L9623` → after: `L10911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10911) · [Before (L9623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9623)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea {
```

#### 1513. `bundles/bloxd.io/main.css` (Changed code · before: `L9625-L9631` → after: `L10913-L10918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10913-L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10913-L10918) · [Before (L9625-L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9625-L9631)

```diff
-   box-sizing: border-box;
-   flex-direction: row;
-   font-size: 22px;
-   gap: 10px;
-   justify-content: space-between;
-   padding: 0 13px;
-   width: 100%
+   display: flex;
+   flex-direction: column;
+   flex-grow: 1;
+   height: 100%;
+   min-width: 12rem;
+   position: relative
```

#### 1514. `bundles/bloxd.io/main.css` (Changed code · before: `L9634-L9643` → after: `L10921-L10922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10921-L10922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10921-L10922) · [Before (L9634-L9643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9634-L9643)

```diff
- @keyframes buyButtonPulse {
- 
-   0%,
-   to {
-     transform: scale(1)
-   }
- 
-   50% {
-     transform: scale(1.05)
-   }
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea:focus {
+   outline: none
```

#### 1515. `bundles/bloxd.io/main.css` (Changed code · before: `L9646` → after: `L10925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10925) · [Before (L9646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9646)

```diff
- .CosmeticShopContainer {
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewLoading {
```

#### 1516. `bundles/bloxd.io/main.css` (Changed code · before: `L9648` → after: `L10927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10927) · [Before (L9648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9648)

```diff
-   color: #fff;
+   box-sizing: border-box;
```

#### 1517. `bundles/bloxd.io/main.css` (Changed code · before: `L9650-L9652` → after: `L10929-L10930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10929-L10930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10929-L10930) · [Before (L9650-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9650-L9652)

```diff
-   flex: 1 0 1rem;
-   flex-direction: column;
-   gap: 1rem;
+   flex-grow: 1;
+   font-size: 4rem;
```

#### 1518. `bundles/bloxd.io/main.css` (Changed code · before: `L9659-L9663` → after: `L10936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10936) · [Before (L9659-L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9659-L9663)

```diff
- .CosmeticPackPrice {
-   font-weight: 800
- }
- 
- .CosmeticShopSuperRankPromo {
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CharCustomisationPreview {
```

#### 1519. `bundles/bloxd.io/main.css` (Changed code · before: `L9670-L9672` → after: `L10939-L10940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10939-L10940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10939-L10940) · [Before (L9670-L9672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9670-L9672)

```diff
-   flex-shrink: 0;
-   font-size: 1.8rem;
-   gap: .8rem;
+   flex-grow: 1;
+   height: 100%;
```

#### 1520. `bundles/bloxd.io/main.css` (Changed code · before: `L9674` → after: `L10942-L10962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10942-L10962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10942-L10962) · [Before (L9674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9674)

```diff
-   padding: .6rem 2rem
+   width: 100%
+ }
+ 
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CharCustomisationPreview .CharCustomisationPreviewCanvas {
+   height: 100%;
+   outline: none;
+   width: 100%
+ }
+ 
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea.CosmeticShopDetailPreviewAreaStill .CharCustomisationPreview {
+   visibility: hidden
+ }
+ 
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill {
+   background-position: center 87.2%;
+   background-repeat: no-repeat;
+ ... (5 more added lines; see GitHub link above)
```

#### 1521. `bundles/bloxd.io/main.css` (Changed code · before: `L9677-L9678` → after: `L10965-L10966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10965-L10966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10965-L10966) · [Before (L9677-L9678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9677-L9678)

```diff
- .CosmeticShopSuperRankPromo .CosmeticShopSuperRankPromoIcon {
-   color: #ffb914
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill.CosmeticShopDetailPreviewStillCamera {
+   background-size: auto 100%
```

#### 1522. `bundles/bloxd.io/main.css` (Changed code · before: `L9681-L9687` → after: `L10969-L10970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10969-L10970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10969-L10970) · [Before (L9681-L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9681-L9687)

```diff
- .CosmeticShopSuperRankPromo .CosmeticShopSuperRankPromoText {
-   -webkit-background-clip: text;
-   background-clip: text;
-   background-image: linear-gradient(140deg, #ffb914 40%, #fcd373);
-   color: transparent;
-   font-weight: 800;
-   text-shadow: none
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill.CosmeticShopDetailPreviewStillFading {
+   opacity: 0
```

#### 1523. `bundles/bloxd.io/main.css` (Changed code · before: `L9690-L9696` → after: `L10973-L10976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10973-L10976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10973-L10976) · [Before (L9690-L9696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9690-L9696)

```diff
- .CosmeticShopBanner {
-   background: #3c4b68;
-   border: .3rem solid #0f0f0f;
-   border-image: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d) 1;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   flex-shrink: 0
+ @media(prefers-reduced-motion:reduce) {
+   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill {
+     transition: none
+   }
```

#### 1524. `bundles/bloxd.io/main.css` (Changed code · before: `L9699` → after: `L10979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10979) · [Before (L9699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9699)

```diff
- .CosmeticShopBanner .CosmeticShopBannerHeader {
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue {
```

#### 1525. `bundles/bloxd.io/main.css` (Changed code · before: `L9703-L9706` → after: `L10986-L10994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10986-L10994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10986-L10994) · [Before (L9703-L9706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9703-L9706)

```diff
-   font-size: 1.8rem;
-   gap: .8rem;
-   justify-content: center;
-   padding: .6rem 2rem
+   font: inherit;
+   font-size: 1.4rem;
+   gap: .5rem;
+   inset-block-end: 1rem;
+   inset-inline-end: 1rem;
+   min-height: 44px;
+   padding: .5rem 1.2rem;
+   position: absolute;
+   white-space: nowrap
```

#### 1526. `bundles/bloxd.io/main.css` (Changed code · before: `L9709-L9713` → after: `L10997-L10999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10997-L10999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L10997-L10999) · [Before (L9709-L9713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9709-L9713)

```diff
- .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon {
-   background: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d);
-   background-clip: text;
-   -webkit-background-clip: text;
-   color: transparent
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue:focus-visible {
+   outline: .2rem solid #fff;
+   outline-offset: .2rem
```

#### 1527. `bundles/bloxd.io/main.css` (Changed code · before: `L9716-L9719` → after: `L11002-L11003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11002-L11003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11002-L11003) · [Before (L9716-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9716-L9719)

```diff
- .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerSubtitle,
- .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerTitle,
- .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
-   font-weight: 800
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue.CosmeticShopDetailPreview3dCueLoading {
+   cursor: default
```

#### 1528. `bundles/bloxd.io/main.css` (Changed code · before: `L9722-L9723` → after: `L11006-L11015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11006-L11015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11006-L11015) · [Before (L9722-L9723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9722-L9723)

```diff
- .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
-   color: #ffb914
+ .CosmeticShopDetail .CosmeticShopDetailFooter {
+   align-items: center;
+   -webkit-backdrop-filter: blur(.3rem);
+   backdrop-filter: blur(.3rem);
+   background-color: rgba(48, 58, 89, .2);
+   display: flex;
+   flex-direction: column;
+   flex-shrink: 0;
+   justify-content: center;
+   min-height: 9rem
```

#### 1529. `bundles/bloxd.io/main.css` (Changed code · before: `L9726` → after: `L11018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11018) · [Before (L9726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9726)

```diff
- .CosmeticShopBanner .CosmeticShopBannerContent {
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady {
```

#### 1530. `bundles/bloxd.io/main.css` (Changed code · before: `L9731-L9733` → after: `L11023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11023) · [Before (L9731-L9733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9731-L9733)

```diff
-   justify-content: center;
-   padding: .4rem 2rem .6rem;
-   text-align: center
+   gap: .4rem
```

#### 1531. `bundles/bloxd.io/main.css` (Changed code · before: `L9736-L9737` → after: `L11026-L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11026-L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11026-L11027) · [Before (L9736-L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9736-L9737)

```diff
- .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentText {
-   max-width: 70rem
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady .StoreCta .NewButton {
+   font-size: 1.8rem
```

#### 1532. `bundles/bloxd.io/main.css` (Changed code · before: `L9740-L9744` → after: `L11030-L11031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11030-L11031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11030-L11031) · [Before (L9740-L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9740-L9744)

```diff
- .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink {
-   color: #ffb914;
-   font-weight: 800;
-   text-decoration: underline;
-   white-space: nowrap
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady .CosmeticShopGiftError {
+   color: #e34f4f
```

#### 1533. `bundles/bloxd.io/main.css` (Changed code · before: `L9747-L9750` → after: `L11034-L11039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11034-L11039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11034-L11039) · [Before (L9747-L9750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9747-L9750)

```diff
- @media(hover:hover) {
-   .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink:hover {
-     color: #fcd373
-   }
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow {
+   align-items: center;
+   box-sizing: border-box;
+   display: flex;
+   max-width: 100%;
+   padding: 0 1rem
```

#### 1534. `bundles/bloxd.io/main.css` (Changed code · before: `L9753-L9754` → after: `L11042-L11047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11042-L11047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11042-L11047) · [Before (L9753-L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9753-L9754)

```diff
- .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink.pad-focused {
-   color: #fcd373
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .CosmeticShopGiftRecipientInput {
+   box-sizing: border-box;
+   flex-grow: 1;
+   font-size: inherit;
+   min-width: 0;
+   padding: .4rem 0
```

#### 1535. `bundles/bloxd.io/main.css` (Changed code · before: `L9757-L9762` → after: `L11050-L11055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11050-L11055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11050-L11055) · [Before (L9757-L9762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9757-L9762)

```diff
- .CosmeticPackOwned {
-   background-color: #ffb914;
-   color: #fff;
-   font-size: 1.2rem;
-   padding: .1rem .5rem .2rem;
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton {
+   animation: buyButtonPulse 2s ease-in-out infinite;
+   flex-shrink: 0;
+   font-size: 1.6rem;
+   font-weight: 800;
+   margin-left: 1.5rem
```

#### 1536. `bundles/bloxd.io/main.css` (Changed code · before: `L9765-L9767` → after: `L11058-L11059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11058-L11059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11058-L11059) · [Before (L9765-L9767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9765-L9767)

```diff
- .CosmeticPackOwned .svg-inline--fa,
- .CosmeticPackOwned.svg-inline--fa {
-   paint-order: stroke fill
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton:before {
+   animation: none
```

#### 1537. `bundles/bloxd.io/main.css` (Changed code · before: `L9770-L9775` → after: `L11062-L11063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11062-L11063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11062-L11063) · [Before (L9770-L9775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9770-L9775)

```diff
- .CosmeticPackOwned .svg-inline--fa path:only-of-type,
- .CosmeticPackOwned.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton .ButtonBody {
+   padding: .5rem 2rem
```

#### 1538. `bundles/bloxd.io/main.css` (Changed code · before: `L9778-L9783` → after: `L11066-L11069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11066-L11069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11066-L11069) · [Before (L9778-L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9778-L9783)

```diff
- .CosmeticPackItemCount {
-   border: .2rem solid #ffb914;
-   color: #ffb914;
-   font-size: 1.2rem;
-   font-weight: 800;
-   padding: 0 .3rem .2rem
+ .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton {
+   animation: buyButtonPulse 2s ease-in-out infinite;
+   font-size: 2rem;
+   font-weight: 800
```

#### 1539. `bundles/bloxd.io/main.css` (Changed code · before: `L9786-L9794` → after: `L11072-L11073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11072-L11073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11072-L11073) · [Before (L9786-L9794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9786-L9794)

```diff
- .CosmeticShopDetail {
-   background-color: #303a59;
-   display: flex;
-   flex-direction: column;
-   font-size: 1.4rem;
-   height: 100%;
-   overflow: hidden;
-   position: relative;
-   width: 100%
+ .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton:before {
+   animation: none
```

#### 1540. `bundles/bloxd.io/main.css` (Changed code · before: `L9797-L9798` → after: `L11076-L11077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11076-L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11076-L11077) · [Before (L9797-L9798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9797-L9798)

```diff
- .CosmeticShopDetail>:not(.PackBackground) {
-   position: relative
+ .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton .ButtonBody {
+   padding: .7rem 4rem
```

#### 1541. `bundles/bloxd.io/main.css` (Changed code · before: `L9801-L9810` → after: `L11080-L11083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11080-L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11080-L11083) · [Before (L9801-L9810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9801-L9810)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeader {
-   align-items: center;
-   -webkit-backdrop-filter: blur(.1rem);
-   backdrop-filter: blur(.1rem);
-   background-color: #394980;
-   display: flex;
-   flex-shrink: 0;
-   gap: 1rem;
-   padding: .6rem 1rem;
-   z-index: 1
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopPurchaseOutcome {
+   color: #1dd06d;
+   font-size: 1.3rem;
+   margin-top: .5rem
```

#### 1542. `bundles/bloxd.io/main.css` (Changed code · before: `L9813-L9814` → after: `L11086-L11087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11086-L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11086-L11087) · [Before (L9813-L9814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9813-L9814)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide {
-   width: 15rem
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopPurchaseOutcome.CosmeticShopPurchaseOutcomeFailed {
+   color: #ff8a80
```

#### 1543. `bundles/bloxd.io/main.css` (Changed code · before: `L9817-L9819` → after: `L11090-L11095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11090-L11095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11090-L11095) · [Before (L9817-L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9817-L9819)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailBackButton {
-   font-size: 2rem;
-   position: relative
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle {
+   color: #ffb914;
+   cursor: pointer;
+   font-size: 1.3rem;
+   margin-top: .5rem;
+   transition: opacity .15s
```

#### 1544. `bundles/bloxd.io/main.css` (Changed code · before: `L9822-L9826` → after: `L11098-L11100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11098-L11100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11098-L11100) · [Before (L9822-L9826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9822-L9826)

```diff
- @media(pointer:coarse) {
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailBackButton:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
+ @media(hover:hover) {
+   .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle:hover {
+     opacity: .8
```

#### 1545. `bundles/bloxd.io/main.css` (Changed code · before: `L9830-L9842` → after: `L11104-L11105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11104-L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11104-L11105) · [Before (L9830-L9842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9830-L9842)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea {
-   align-items: center;
-   display: flex;
-   flex-grow: 1;
-   gap: 1rem;
-   justify-content: center
- }
- 
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTitle {
-   color: #ffb914;
-   font-size: 3rem;
-   font-weight: 800;
-   text-align: center
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle.pad-focused {
+   opacity: .8
```

#### 1546. `bundles/bloxd.io/main.css` (Changed code · before: `L9845-L9847` → after: `L11108-L11111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11108-L11111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11108-L11111) · [Before (L9845-L9847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9845-L9847)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTier {
-   font-size: 1.5rem;
-   margin-top: .3rem
+ @media(hover:none) {
+   .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle:active {
+     opacity: .8
+   }
```

#### 1547. `bundles/bloxd.io/main.css` (Changed code · before: `L9850-L9851` → after: `L11114-L11115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11114-L11115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11114-L11115) · [Before (L9850-L9851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9850-L9851)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticPackItemCount {
-   margin-top: .3rem
+ .CosmeticShopDetail .CosmeticShopDetailCtaHighlight .RainbowButton {
+   animation: loginResumeHighlight .8s ease-in-out 3
```

#### 1548. `bundles/bloxd.io/main.css` (Changed code · before: `L9854-L9858` → after: `L11118-L11119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11118-L11119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11118-L11119) · [Before (L9854-L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9854-L9858)

```diff
- .CosmeticShopDetail .CosmeticShopBanner {
-   background-color: #ffb914;
-   border-width: 0;
-   box-shadow: none;
-   position: relative
+ .CosmeticShopDetail .CosmeticShopDetailCtaHighlight .RainbowButton:before {
+   animation: none
```

#### 1549. `bundles/bloxd.io/main.css` (Changed code · before: `L9861-L9864` → after: `L11122-L11126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11122-L11126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11122-L11126) · [Before (L9861-L9864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9861-L9864)

```diff
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader {
-   font-size: 1.2rem;
-   padding: .3rem .5rem;
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
+ .CosmeticShopDetail .CosmeticShopPurchaseLabel {
+   align-items: center;
+   display: flex;
+   gap: .5rem;
+   justify-content: center
```

#### 1550. `bundles/bloxd.io/main.css` (Changed code · before: `L9867-L9869` → after: `L11129-L11136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11129-L11136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11129-L11136) · [Before (L9867-L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9867-L9869)

```diff
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa,
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa {
-   paint-order: stroke fill
+ .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending {
+   background-color: rgba(26, 31, 46, .3);
+   display: inline-block;
+   height: .8em;
+   overflow: hidden;
+   position: relative;
+   vertical-align: middle;
+   width: 2em
```

#### 1551. `bundles/bloxd.io/main.css` (Changed code · before: `L9872-L9877` → after: `L11139-L11148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11139-L11148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11139-L11148) · [Before (L9872-L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9872-L9877)

```diff
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa path:only-of-type,
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending:after {
+   animation: loadingShimmer 1.8s ease-in-out infinite;
+   background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
+   content: "";
+   height: 100%;
+   left: 0;
+   pointer-events: none;
+   position: absolute;
+   top: 0;
+   width: 300%
```

#### 1552. `bundles/bloxd.io/main.css` (Changed code · before: `L9880-L9882` → after: `L11151-L11153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11151-L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11151-L11153) · [Before (L9880-L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9880-L9882)

```diff
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon,
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
-   color: #fff
+ .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending[data-off-screen]:after,
+ html[data-app-covered] .WholeAppWrapper .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending:after {
+   animation-play-state: paused
```

#### 1553. `bundles/bloxd.io/main.css` (Changed code · before: `L9885-L9887` → after: `L11156-L11161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11156-L11161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11156-L11161) · [Before (L9885-L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9885-L9887)

```diff
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerContent {
-   display: none
- }
+ @media(prefers-reduced-motion:reduce) {
+   .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending {
+     background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
+     background-repeat: no-repeat;
+     background-size: 300% 100%
+   }
```

#### 1554. `bundles/bloxd.io/main.css` (Changed code · before: `L9889-L9896` → after: `L11163-L11165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11163-L11165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11163-L11165) · [Before (L9889-L9896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9889-L9896)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody {
-   align-items: stretch;
-   box-sizing: border-box;
-   display: flex;
-   flex: 1 0 1rem;
-   min-height: 0;
-   padding: 0 2rem;
-   width: 100%
+   .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending:after {
+     display: none
+   }
```

#### 1555. `bundles/bloxd.io/main.css` (Changed code · before: `L9899` → after: `L11168-L11169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11168-L11169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11168-L11169) · [Before (L9899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9899)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea {
+ .CosmeticShopDetail .CosmeticShopDetailHeaderCta {
+   align-items: center;
```

#### 1556. `bundles/bloxd.io/main.css` (Changed code · before: `L9901-L9905` → after: `L11171-L11172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11171-L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11171-L11172) · [Before (L9901-L9905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9901-L9905)

```diff
-   flex-direction: column;
-   gap: .5rem;
-   overflow-y: auto;
-   padding: 1rem;
-   width: 46rem
+   gap: .8rem;
+   justify-content: flex-end
```

#### 1557. `bundles/bloxd.io/main.css` (Changed code · before: `L9908-L9909` → after: `L11175-L11177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11175-L11177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11175-L11177) · [Before (L9908-L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9908-L9909)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailTypeSection {
-   width: 100%
+ .CosmeticShopDetail .CosmeticShopDetailHeaderCta>.RainbowButton {
+   font-size: 1.6rem;
+   font-weight: 800
```

#### 1558. `bundles/bloxd.io/main.css` (Changed code · before: `L9912-L9918` → after: `L11180-L11181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11180-L11181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11180-L11181) · [Before (L9912-L9918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9912-L9918)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacters {
-   align-items: center;
-   display: flex;
-   flex-wrap: wrap;
-   gap: .8rem;
-   justify-content: space-between;
-   padding: .5rem 0
+ .CosmeticShopDetail .CosmeticShopDetailHeaderCta>.RainbowButton .ButtonBody {
+   padding: .4rem 1.2rem
```

#### 1559. `bundles/bloxd.io/main.css` (Changed code · before: `L9921-L9922` → after: `L11184-L11185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11184-L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11184-L11185) · [Before (L9921-L9922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9921-L9922)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard {
-   border: .2rem solid transparent;
+ .CosmeticShopDetail .CosmeticShopDetailHeaderCta .CosmeticShopGiftToggle {
+   color: #ffb914;
```

#### 1560. `bundles/bloxd.io/main.css` (Changed code · before: `L9924-L9925` → after: `L11187-L11188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11187-L11188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11187-L11188) · [Before (L9924-L9925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9924-L9925)

```diff
-   padding: .5rem;
-   transition: transform .15s, border-color .15s, background-color .15s
+   font-size: 1.5rem;
+   white-space: nowrap
```

#### 1561. `bundles/bloxd.io/main.css` (Changed code · before: `L9928-L9930` → after: `L11191-L11211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11191-L11211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11191-L11211) · [Before (L9928-L9930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9928-L9930)

```diff
- @media(hover:hover) {
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard:hover {
-     transform: scale(1.05)
+ @media(max-height:420px) {
+   .CosmeticShopDetail .CosmeticShopDetailHeader {
+     padding: .3rem .8rem
+   }
+ 
+   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide {
+     flex-shrink: 0;
+     width: auto
+   }
+ 
+   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailBackButton {
+     font-size: 1.6rem
+   }
+ 
+   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTitle {
+     font-size: 2.2rem
+ ... (5 more added lines; see GitHub link above)
```

#### 1562. `bundles/bloxd.io/main.css` (Changed code · before: `L9934-L9935` → after: `L11215-L11279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11215-L11279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11215-L11279) · [Before (L9934-L9935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9934-L9935)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard.pad-focused {
-   transform: scale(1.05)
+ @media(max-width:700px)and (orientation:portrait) {
+   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide {
+     flex-shrink: 0;
+     width: auto
+   }
+ 
+   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide:empty {
+     display: none
+   }
+ 
+   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea {
+     flex-wrap: wrap;
+     min-width: 0;
+     row-gap: .2rem
+   }
+ 
+ ... (49 more added lines; see GitHub link above)
```

#### 1563. `bundles/bloxd.io/main.css` (Changed code · before: `L9938-L9941` → after: `L11282-L11285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11282-L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11282-L11285) · [Before (L9938-L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9938-L9941)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard.CosmeticShopDetailCharacterCardTryingOn {
-   background-color: rgba(255, 185, 20, .15);
-   border-color: #ffb914;
-   border-style: dashed
+ .MiddleScreenPopupBackground .MiddleScreenPopup.PremiumCurrencyPurchasePopup {
+   box-sizing: border-box;
+   max-height: 100%;
+   overflow-y: auto
```

#### 1564. `bundles/bloxd.io/main.css` (Changed code · before: `L9944-L9949` → after: `L11288-L11293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11288-L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11288-L11293) · [Before (L9944-L9949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9944-L9949)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard .CosmeticShopDetailCharacterPreview {
-   background-position: 50%;
-   background-repeat: no-repeat;
-   background-size: contain;
-   height: 12rem;
-   width: 8rem
+ @media(orientation:portrait)and (max-width:600px) {
+   .MiddleScreenPopupBackground .MiddleScreenPopup.PremiumCurrencyPurchasePopup {
+     box-sizing: border-box;
+     max-width: none;
+     width: calc(100vw - 2rem)
+   }
```

#### 1565. `bundles/bloxd.io/main.css` (Changed code · before: `L9952-L9955` → after: `L11296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11296) · [Before (L9952-L9955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9952-L9955)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailTypeLabel {
-   align-items: center;
-   border-bottom: .1rem solid rgba(255, 185, 20, .2);
-   color: #ffb914;
+ .PremiumCurrencyPurchase {
```

#### 1566. `bundles/bloxd.io/main.css` (Changed code · before: `L9957-L9961` → after: `L11298-L11301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11298-L11301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11298-L11301) · [Before (L9957-L9961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9957-L9961)

```diff
-   font-size: 1.4rem;
-   font-weight: 800;
-   gap: .5rem;
-   margin-bottom: .3rem;
-   padding: .4rem .2rem .2rem
+   flex-direction: column;
+   gap: 1rem;
+   max-width: 100%;
+   width: 40rem
```

#### 1567. `bundles/bloxd.io/main.css` (Changed code · before: `L9964-L9966` → after: `L11304-L11307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11304-L11307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11304-L11307) · [Before (L9964-L9966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9964-L9966)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailTypeLabel .svg-inline--fa {
-   font-size: 1.2rem;
-   opacity: .7
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTitle {
+   font-size: 2rem;
+   overflow-wrap: anywhere;
+   text-align: center
```

#### 1568. `bundles/bloxd.io/main.css` (Changed code · before: `L9969-L9976` → after: `L11310-L11311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11310-L11311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11310-L11311) · [Before (L9969-L9976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9969-L9976)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup {
-   grid-gap: .5rem;
-   align-items: center;
-   display: grid;
-   gap: .5rem;
-   grid-template-columns: repeat(6, 1fr);
-   padding: .3rem 0;
-   width: 100%
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTitle.PremiumCurrencyPurchaseTitleGift {
+   color: #85baff
```

#### 1569. `bundles/bloxd.io/main.css` (Changed code · before: `L9979-L9980` → after: `L11314-L11316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11314-L11316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11314-L11316) · [Before (L9979-L9980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9979-L9980)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell {
-   align-items: flex-start;
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCard {
+   align-items: center;
+   background: #3c4b68;
```

#### 1570. `bundles/bloxd.io/main.css` (Changed code · before: `L9982-L9992` → after: `L11318-L11320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11318-L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11318-L11320) · [Before (L9982-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9982-L9992)

```diff
-   flex-wrap: wrap;
-   justify-content: flex-start;
-   position: relative
- }
- 
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption {
-   aspect-ratio: 1/1;
-   box-sizing: border-box;
-   cursor: pointer;
-   transition: transform .15s;
-   width: 33%
+   gap: 1.2rem;
+   min-height: 6.4rem;
+   padding: .8rem
```

#### 1571. `bundles/bloxd.io/main.css` (Changed code · before: `L9995-L9998` → after: `L11323-L11332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11323-L11332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11323-L11332) · [Before (L9995-L9998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L9995-L9998)

```diff
- @media(hover:hover) {
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption:hover {
-     transform: scale(1.1)
-   }
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon {
+   align-items: flex-end;
+   background: #394980;
+   display: flex;
+   flex-shrink: 0;
+   height: 6.4rem;
+   justify-content: center;
+   overflow: hidden;
+   position: relative;
+   width: 6.4rem
```

#### 1572. `bundles/bloxd.io/main.css` (Changed code · before: `L10001-L10002` → after: `L11335-L11342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11335-L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11335-L11342) · [Before (L10001-L10002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10001-L10002)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption.pad-focused {
-   transform: scale(1.1)
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon img {
+   -ms-interpolation-mode: nearest-neighbor;
+   height: 92%;
+   image-rendering: optimizeSpeed;
+   image-rendering: -o-crisp-edges;
+   image-rendering: pixelated;
+   image-rendering: optimize-contrast;
+   position: relative
```

#### 1573. `bundles/bloxd.io/main.css` (Changed code · before: `L10005-L10008` → after: `L11345-L11347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11345-L11347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11345-L11347) · [Before (L10005-L10008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10005-L10008)

```diff
- @media(hover:none) {
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption:active {
-     transform: scale(1.1)
-   }
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconSuperRank {
+   align-items: center;
+   background: radial-gradient(circle at 78% 40%, rgba(255, 214, 102, .5), transparent 55%), linear-gradient(135deg, #3d2a00, #6e4800 50%, #745309)
```

#### 1574. `bundles/bloxd.io/main.css` (Changed code · before: `L10011-L10012` → after: `L11350-L11351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11350-L11351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11350-L11351) · [Before (L10011-L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10011-L10012)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption.CosmeticColorOptionSelected {
-   border: .25rem solid #ffb914
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconSuperRank img {
+   height: 80%
```

#### 1575. `bundles/bloxd.io/main.css` (Changed code · before: `L10015` → after: `L11354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11354) · [Before (L10015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10015)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper {
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconGems {
```

#### 1576. `bundles/bloxd.io/main.css` (Changed code · before: `L10017-L10027` → after: `L11356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11356) · [Before (L10017-L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10017-L10027)

```diff
-   -webkit-backdrop-filter: blur(.1rem);
-   backdrop-filter: blur(.1rem);
-   border: .2rem solid transparent;
-   border-radius: 0;
-   cursor: pointer;
-   display: flex;
-   height: 7rem;
-   justify-content: center;
-   position: relative;
-   transition: transform .1s, background-color .1s, border-color .1s;
-   width: 7rem
+   background: none
```

#### 1577. `bundles/bloxd.io/main.css` (Changed code · before: `L10030-L10033` → after: `L11359-L11361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11359-L11361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11359-L11361) · [Before (L10030-L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10030-L10033)

```diff
- @media(hover:hover) {
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper:hover {
-     transform: scale(1.05)
-   }
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconGems .PremiumCurrencyIcon {
+   height: 5rem;
+   width: 5rem
```

#### 1578. `bundles/bloxd.io/main.css` (Changed code · before: `L10036-L10037` → after: `L11364-L11373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11364-L11373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11364-L11373) · [Before (L10036-L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10036-L10037)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.pad-focused {
-   transform: scale(1.05)
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCardText {
+   align-items: flex-start;
+   color: #cfcfcf;
+   display: flex;
+   flex: 1 1;
+   flex-direction: column;
+   font-size: 1.4rem;
+   gap: .2rem;
+   min-width: 0;
+   text-align: left
```

#### 1579. `bundles/bloxd.io/main.css` (Changed code · before: `L10040-L10043` → after: `L11376-L11382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11376-L11382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11376-L11382) · [Before (L10040-L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10040-L10043)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.TryingOnCharCustomPartWrapper {
-   background-color: rgba(255, 185, 20, .15);
-   border-color: #ffb914;
-   border-style: dashed
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCardText b {
+   color: #fff;
+   font-size: 1.8rem;
+   max-width: 100%;
+   overflow: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 1580. `bundles/bloxd.io/main.css` (Changed code · before: `L10046-L10050` → after: `L11385-L11386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11385-L11386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11385-L11386) · [Before (L10046-L10050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10046-L10050)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.CharCustomPartWrapperProfileEffect {
-   box-sizing: border-box;
-   height: 4rem;
-   padding: .3rem;
-   width: 16rem
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchasePerks {
+   justify-content: flex-start
```

#### 1581. `bundles/bloxd.io/main.css` (Changed code · before: `L10053-L10060` → after: `L11389-L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11389-L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11389-L11393) · [Before (L10053-L10060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10053-L10060)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   gap: .3rem;
-   height: 100%;
-   justify-content: center;
-   width: 100%
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBanner {
+   font-size: 1.5rem;
+   font-weight: 800;
+   padding: .6rem 1rem;
+   text-align: left
```

#### 1582. `bundles/bloxd.io/main.css` (Changed code · before: `L10063-L10068` → after: `L11396-L11399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11396-L11399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11396-L11399) · [Before (L10063-L10068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10063-L10068)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart .EmoteCustomPartIcon {
-   aspect-ratio: 1/1;
-   background-position: 50%;
-   background-repeat: no-repeat;
-   background-size: contain;
-   width: 100%
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBanner.PremiumCurrencyPurchaseBannerWarning {
+   background: rgba(255, 185, 20, .15);
+   border: .1rem solid #ffb914;
+   color: #fcd373
```

#### 1583. `bundles/bloxd.io/main.css` (Changed code · before: `L10071-L10074` → after: `L11402-L11404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11402-L11404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11402-L11404) · [Before (L10071-L10074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10071-L10074)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart .EmoteCustomPartLabel {
-   color: #fcd373;
-   font-size: 1rem;
-   text-align: center
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBonus {
+   color: #1dd06d;
+   white-space: nowrap
```

#### 1584. `bundles/bloxd.io/main.css` (Changed code · before: `L10077-L10082` → after: `L11407-L11408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11407-L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11407-L11408) · [Before (L10077-L10082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10077-L10082)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper .CharCustomPart {
-   background-position: 50%;
-   background-repeat: no-repeat;
-   background-size: contain;
-   height: 85%;
-   width: 85%
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUpLoading {
+   justify-content: center
```

#### 1585. `bundles/bloxd.io/main.css` (Changed code · before: `L10085-L10089` → after: `L11411-L11412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11411-L11412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11411-L11412) · [Before (L10085-L10089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10085-L10089)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper .CharCustomPart.CharCustomProfileEffect {
-   align-items: center;
-   display: flex;
-   height: 100%;
-   width: 100%
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp {
+   flex-wrap: wrap
```

#### 1586. `bundles/bloxd.io/main.css` (Changed code · before: `L10092-L10094` → after: `L11415-L11416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11415-L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11415-L11416) · [Before (L10092-L10094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10092-L10094)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper .CharCustomPart.CharCustomProfileEffect .ProfilePreview {
-   height: 100%;
-   width: 100%
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseCardText {
+   flex-basis: auto
```

#### 1587. `bundles/bloxd.io/main.css` (Changed code · before: `L10097-L10098` → after: `L11419-L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11419-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11419-L11421) · [Before (L10097-L10098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10097-L10098)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper .CharCustomPart.CharCustomProfileEffect .ProfilePreview .ProfilePreviewBackground {
-   opacity: 1
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseTopUpNeed {
+   min-width: 100%;
+   width: 0
```

#### 1588. `bundles/bloxd.io/main.css` (Changed code · before: `L10101-L10108` → after: `L11424-L11427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11424-L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11424-L11427) · [Before (L10101-L10108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10101-L10108)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   flex-grow: 1;
-   height: 100%;
-   min-width: 12rem;
-   position: relative
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseTopUpButton {
+   flex-shrink: 0;
+   font-size: 1.6rem;
+   margin-left: auto
```

#### 1589. `bundles/bloxd.io/main.css` (Changed code · before: `L10111-L10112` → after: `L11430-L11432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11430-L11432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11430-L11432) · [Before (L10111-L10112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10111-L10112)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea:focus {
-   outline: none
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseNotice {
+   font-size: 1.4rem;
+   text-align: inherit
```

#### 1590. `bundles/bloxd.io/main.css` (Changed code · before: `L10115-L10117` → after: `L11435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11435) · [Before (L10115-L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10115-L10117)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewLoading {
-   align-items: center;
-   box-sizing: border-box;
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseButtons {
```

#### 1591. `bundles/bloxd.io/main.css` (Changed code · before: `L10119-L10123` → after: `L11437-L11440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11437-L11440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11437-L11440) · [Before (L10119-L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10119-L10123)

```diff
-   flex-grow: 1;
-   font-size: 4rem;
-   height: 100%;
-   justify-content: center;
-   width: 100%
+   font-size: 1.8rem;
+   gap: 1rem;
+   justify-content: space-between;
+   margin-top: .4rem
```

#### 1592. `bundles/bloxd.io/main.css` (Changed code · before: `L10126` → after: `L11443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11443) · [Before (L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10126)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CharCustomisationPreview {
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBuy {
```

#### 1593. `bundles/bloxd.io/main.css` (Changed code · before: `L10129-L10132` → after: `L11446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11446) · [Before (L10129-L10132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10129-L10132)

```diff
-   flex-grow: 1;
-   height: 100%;
-   justify-content: center;
-   width: 100%
+   gap: .6rem
```

#### 1594. `bundles/bloxd.io/main.css` (Changed code · before: `L10135-L10139` → after: `L11449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11449) · [Before (L10135-L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10135-L10139)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CharCustomisationPreview .CharCustomisationPreviewCanvas {
-   height: 100%;
-   outline: none;
-   width: 100%
- }
+ @keyframes loginResumeHighlight {
```

#### 1595. `bundles/bloxd.io/main.css` (Changed code · before: `L10141-L10143` → after: `L11451-L11455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11451-L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11451-L11455) · [Before (L10141-L10143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10141-L10143)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea.CosmeticShopDetailPreviewAreaStill .CharCustomisationPreview {
-   visibility: hidden
- }
+   0%,
+   to {
+     filter: none;
+     transform: scale(1)
+   }
```

#### 1596. `bundles/bloxd.io/main.css` (Changed code · before: `L10145-L10152` → after: `L11457-L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11457-L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11457-L11460) · [Before (L10145-L10152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10145-L10152)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill {
-   background-position: center 87.2%;
-   background-repeat: no-repeat;
-   background-size: auto 76.5%;
-   inset: 0;
-   pointer-events: none;
-   position: absolute;
-   transition: opacity ease-out
+   50% {
+     filter: drop-shadow(0 0 .8rem rgba(252, 211, 115, .9));
+     transform: scale(1.08)
+   }
```

#### 1597. `bundles/bloxd.io/main.css` (Changed code · before: `L10155-L10156` → after: `L11463-L11468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11463-L11468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11463-L11468) · [Before (L10155-L10156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10155-L10156)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill.CosmeticShopDetailPreviewStillCamera {
-   background-size: auto 100%
+ .PremiumCurrencyBundles {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   gap: 1rem;
+   width: 100%
```

#### 1598. `bundles/bloxd.io/main.css` (Changed code · before: `L10159-L10160` → after: `L11471-L11477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11471-L11477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11471-L11477) · [Before (L10159-L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10159-L10160)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill.CosmeticShopDetailPreviewStillFading {
-   opacity: 0
+ .PremiumCurrencyBundles .PremiumCurrencyBundleGrid {
+   grid-gap: 1rem;
+   container: bundleGrid/inline-size;
+   display: grid;
+   gap: 1rem;
+   grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
+   width: 100%
```

#### 1599. `bundles/bloxd.io/main.css` (Changed code · before: `L10163-L10166` → after: `L11480-L11481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11480-L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11480-L11481) · [Before (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10163-L10166)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill {
-     transition: none
-   }
+ .PremiumCurrencyBundles .PremiumCurrencyBundleGrid.PremiumCurrencyBundleGridTileOnly {
+   grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr))
```

#### 1600. `bundles/bloxd.io/main.css` (Changed code · before: `L10169-L10184` → after: `L11484-L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11484-L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11484-L11487) · [Before (L10169-L10184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10169-L10184)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue {
-   align-items: center;
-   background-color: rgba(26, 31, 46, .6);
-   border: none;
-   color: #fff;
-   cursor: pointer;
-   display: flex;
-   font: inherit;
-   font-size: 1.4rem;
-   gap: .5rem;
-   inset-block-end: 1rem;
-   inset-inline-end: 1rem;
-   min-height: 44px;
-   padding: .5rem 1.2rem;
-   position: absolute;
-   white-space: nowrap
+ .PremiumCurrencyBundles .PremiumCurrencyBundleGrid .PremiumCurrencyBundleGridAfterTile {
+   container: dealBannerSlot/inline-size;
+   grid-column: 1/-1;
+   min-width: 0
```

#### 1601. `bundles/bloxd.io/main.css` (Changed code · before: `L10187-L10189` → after: `L11490-L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11490-L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11490-L11493) · [Before (L10187-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10187-L10189)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue:focus-visible {
-   outline: .2rem solid #fff;
-   outline-offset: .2rem
+ @container bundleGrid (min-width: 42rem) {
+   .PremiumCurrencyBundles .PremiumCurrencyBundleGrid .PremiumCurrencyBundleGridAfterTile {
+     grid-column: 2/-1
+   }
```

#### 1602. `bundles/bloxd.io/main.css` (Changed code · before: `L10192-L10193` → after: `L11496-L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11496-L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11496-L11498) · [Before (L10192-L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10192-L10193)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue.CosmeticShopDetailPreview3dCueLoading {
-   cursor: default
+ .PremiumCurrencyBundles .PremiumCurrencyBundleGrid[data-off-screen] .PremiumCurrencyBundle:before,
+ html[data-app-covered] .WholeAppWrapper .PremiumCurrencyBundles .PremiumCurrencyBundleGrid .PremiumCurrencyBundle:before {
+   animation-play-state: paused
```

#### 1603. `bundles/bloxd.io/main.css` (Changed code · before: `L10196` → after: `L11501-L11504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11501-L11504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11501-L11504) · [Before (L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10196)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter {
+ .PremiumCurrencyBundles .PremiumCurrencyBundle {
+   --pileGlow: rgba(243, 138, 182, .18);
+   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-100 -100 200 200%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28124,131,251%29%27 st … [truncated]
+   --rayTurn: 60s;
```

#### 1604. `bundles/bloxd.io/main.css` (Changed code · before: `L10198-L10200` → after: `L11506-L11509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11506-L11509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11506-L11509) · [Before (L10198-L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10198-L10200)

```diff
-   -webkit-backdrop-filter: blur(.3rem);
-   backdrop-filter: blur(.3rem);
-   background-color: rgba(48, 58, 89, .2);
+   background: radial-gradient(circle at 50% 52%, #545efa, #463bd9 45%, #222a9f);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
```

#### 1605. `bundles/bloxd.io/main.css` (Changed code · before: `L10203-L10205` → after: `L11512-L11516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11512-L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11512-L11516) · [Before (L10203-L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10203-L10205)

```diff
-   flex-shrink: 0;
-   justify-content: center;
-   min-height: 9rem
+   gap: .6rem;
+   isolation: isolate;
+   overflow: hidden;
+   padding: .8rem .6rem .6rem;
+   position: relative
```

#### 1606. `bundles/bloxd.io/main.css` (Changed code · before: `L10208-L10211` → after: `L11519-L11540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11519-L11540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11519-L11540) · [Before (L10208-L10211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10208-L10211)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
+ .PremiumCurrencyBundles .PremiumCurrencyBundle:before {
+   animation: premiumCurrencyBundleRays var(--rayTurn) linear infinite;
+   aspect-ratio: 1;
+   background: var(--rays) center/100% 100%;
+   content: "";
+   left: 50%;
+   pointer-events: none;
+   position: absolute;
+   top: 52%;
+   transform: translate(-50%, -50%);
+   width: 200%;
+   z-index: -1
+ }
+ 
+ @media(prefers-reduced-motion:reduce) {
+   .PremiumCurrencyBundles .PremiumCurrencyBundle:before {
+ ... (6 more added lines; see GitHub link above)
```

#### 1607. `bundles/bloxd.io/main.css` (Changed code · before: `L10213` → after: `L11542-L11543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11542-L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11542-L11543) · [Before (L10213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10213)

```diff
-   gap: .4rem
+   font-weight: 900;
+   text-shadow: -1px -1px 0 #1a1f2e, -1px 0 0 #1a1f2e, -1px 1px 0 #1a1f2e, 0 -1px 0 #1a1f2e, 0 0 0 #1a1f2e, 0 1px 0 #1a1f2e, 1px -1px 0 #1a1f2e, 1px 0 0 #1a1f2e, 1px 1px 0 #1a1f2e
```

#### 1608. `bundles/bloxd.io/main.css` (Changed code · before: `L10216-L10217` → after: `L11546-L11548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11546-L11548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11546-L11548) · [Before (L10216-L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10216-L10217)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady .StoreCta .NewButton {
-   font-size: 1.8rem
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount .svg-inline--fa,
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount.svg-inline--fa {
+   paint-order: stroke fill
```

#### 1609. `bundles/bloxd.io/main.css` (Changed code · before: `L10220-L10221` → after: `L11551-L11556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11551-L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11551-L11556) · [Before (L10220-L10221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10220-L10221)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady .CosmeticShopGiftError {
-   color: #e34f4f
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount .svg-inline--fa path:only-of-type,
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount.svg-inline--fa path:only-of-type {
+   stroke: #1a1f2e;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 1610. `bundles/bloxd.io/main.css` (Changed code · before: `L10224` → after: `L11559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11559) · [Before (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10224)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow {
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundlePile {
```

#### 1611. `bundles/bloxd.io/main.css` (Changed code · before: `L10226` → after: `L11561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11561) · [Before (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10226)

```diff
-   box-sizing: border-box;
+   background: radial-gradient(closest-side, var(--pileGlow), transparent);
```

#### 1612. `bundles/bloxd.io/main.css` (Changed code · before: `L10228-L10229` → after: `L11563-L11566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11563-L11566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11563-L11566) · [Before (L10228-L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10228-L10229)

```diff
-   max-width: 100%;
-   padding: 0 1rem
+   height: 8rem;
+   justify-content: center;
+   position: relative;
+   width: 100%
```

#### 1613. `bundles/bloxd.io/main.css` (Changed code · before: `L10232-L10237` → after: `L11569-L11572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11569-L11572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11569-L11572) · [Before (L10232-L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10232-L10237)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .CosmeticShopGiftRecipientInput {
-   box-sizing: border-box;
-   flex-grow: 1;
-   font-size: inherit;
-   min-width: 0;
-   padding: .4rem 0
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundlePile img {
+   max-height: 100%;
+   max-width: 100%;
+   object-fit: contain
```

#### 1614. `bundles/bloxd.io/main.css` (Changed code · before: `L10240-L10243` → after: `L11575-L11579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11575-L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11575-L11579) · [Before (L10240-L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10240-L10243)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton {
-   animation: buyButtonPulse 2s ease-in-out infinite;
-   flex-shrink: 0;
-   font-size: 1.6rem;
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundlePile .PremiumCurrencyBundleBonus {
+   background-color: #1dd06d;
+   bottom: 0;
+   color: #1a1f2e;
+   font-size: .8rem;
```

#### 1615. `bundles/bloxd.io/main.css` (Changed code · before: `L10245-L10253` → after: `L11581-L11582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11581-L11582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11581-L11582) · [Before (L10245-L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10245-L10253)

```diff
-   margin-left: 1.5rem
- }
- 
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton:before {
-   animation: none
- }
- 
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton .ButtonBody {
-   padding: .5rem 2rem
+   padding: .1rem .6rem;
+   position: absolute
```

#### 1616. `bundles/bloxd.io/main.css` (Changed code · before: `L10256-L10258` → after: `L11585-L11587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11585-L11587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11585-L11587) · [Before (L10256-L10258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10256-L10258)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton {
-   animation: buyButtonPulse 2s ease-in-out infinite;
-   font-size: 2rem;
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy {
+   align-self: stretch;
+   font-size: 1.1rem;
```

#### 1617. `bundles/bloxd.io/main.css` (Changed code · before: `L10262-L10273` → after: `L11591-L11598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11591-L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11591-L11598) · [Before (L10262-L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10262-L10273)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton:before {
-   animation: none
- }
- 
- .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton .ButtonBody {
-   padding: .7rem 4rem
- }
- 
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopPurchaseOutcome {
-   color: #1dd06d;
-   font-size: 1.3rem;
-   margin-top: .5rem
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending {
+   background-color: rgba(26, 31, 46, .3);
+   display: inline-block;
+   height: .8em;
+   overflow: hidden;
+   position: relative;
+   vertical-align: middle;
+   width: 3.5em
```

#### 1618. `bundles/bloxd.io/main.css` (Changed code · before: `L10276-L10277` → after: `L11601-L11610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11601-L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11601-L11610) · [Before (L10276-L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10276-L10277)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopPurchaseOutcome.CosmeticShopPurchaseOutcomeFailed {
-   color: #ff8a80
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending:after {
+   animation: loadingShimmer 1.8s ease-in-out infinite;
+   background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
+   content: "";
+   height: 100%;
+   left: 0;
+   pointer-events: none;
+   position: absolute;
+   top: 0;
+   width: 300%
```

#### 1619. `bundles/bloxd.io/main.css` (Changed code · before: `L10280-L10285` → after: `L11613-L11615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11613-L11615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11613-L11615) · [Before (L10280-L10285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10280-L10285)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle {
-   color: #ffb914;
-   cursor: pointer;
-   font-size: 1.3rem;
-   margin-top: .5rem;
-   transition: opacity .15s
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending[data-off-screen]:after,
+ html[data-app-covered] .WholeAppWrapper .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending:after {
+   animation-play-state: paused
```

#### 1620. `bundles/bloxd.io/main.css` (Changed code · before: `L10288-L10290` → after: `L11618-L11622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11618-L11622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11618-L11622) · [Before (L10288-L10290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10288-L10290)

```diff
- @media(hover:hover) {
-   .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle:hover {
-     opacity: .8
+ @media(prefers-reduced-motion:reduce) {
+   .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending {
+     background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
+     background-repeat: no-repeat;
+     background-size: 300% 100%
```

#### 1621. `bundles/bloxd.io/main.css` (Changed code · before: `L10298-L10300` → after: `L11625-L11626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11625-L11626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11625-L11626) · [Before (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10298-L10300)

```diff
- @media(hover:none) {
-   .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle:active {
-     opacity: .8
+   .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending:after {
+     display: none
```

#### 1622. `bundles/bloxd.io/main.css` (Changed code · before: `L10304-L10319` → after: `L11630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11630) · [Before (L10304-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10304-L10319)

```diff
- .CosmeticShopDetail .CosmeticShopDetailCtaHighlight .RainbowButton {
-   animation: loginResumeHighlight .8s ease-in-out 3
- }
- 
- .CosmeticShopDetail .CosmeticShopDetailCtaHighlight .RainbowButton:before {
-   animation: none
- }
- 
- .CosmeticShopDetail .CosmeticShopPurchaseLabel {
-   align-items: center;
-   display: flex;
-   gap: .5rem;
-   justify-content: center
- }
- 
- .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending {
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending {
```

#### 1623. `bundles/bloxd.io/main.css` (Changed code · before: `L10329` → after: `L11640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11640) · [Before (L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10329)

```diff
- .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending:after {
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending:after {
```

#### 1624. `bundles/bloxd.io/main.css` (Changed code · before: `L10341-L10342` → after: `L11652-L11653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11652-L11653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11652-L11653) · [Before (L10341-L10342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10341-L10342)

```diff
- .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending[data-off-screen]:after,
- html[data-app-covered] .WholeAppWrapper .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending:after {
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending[data-off-screen]:after,
+ html[data-app-covered] .WholeAppWrapper .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending:after {
```

#### 1625. `bundles/bloxd.io/main.css` (Changed code · before: `L10347` → after: `L11658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11658) · [Before (L10347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10347)

```diff
-   .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending {
+   .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending {
```

#### 1626. `bundles/bloxd.io/main.css` (Changed code · before: `L10353` → after: `L11664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11664) · [Before (L10353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10353)

```diff
-   .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending:after {
+   .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending:after {
```

#### 1627. `bundles/bloxd.io/main.css` (Changed code · before: `L10358` → after: `L11669-L11706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11669-L11706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11669-L11706) · [Before (L10358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10358)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeaderCta {
+ .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleHighlight {
+   animation: loginResumeHighlight .8s ease-in-out 3
+ }
+ 
+ .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleTier3,
+ .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleTier4 {
+   --pileGlow: rgba(243, 138, 182, .28);
+   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-100 -100 200 200%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28143,150,252%29%27 st … [truncated]
+   --rayTurn: 40s
+ }
+ 
+ .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleTier5 {
+   --pileGlow: rgba(243, 138, 182, .4);
+   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-100 -100 200 200%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28255,185,20%29%27 sto … [truncated]
+   --rayTurn: 25s
+ }
+ ... (22 more added lines; see GitHub link above)
```

#### 1628. `bundles/bloxd.io/main.css` (Changed code · before: `L10361-L10362` → after: `L11709-L11710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11709-L11710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11709-L11710) · [Before (L10361-L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10361-L10362)

```diff
-   gap: .8rem;
-   justify-content: flex-end
+   flex-direction: column;
+   gap: 1rem
```

#### 1629. `bundles/bloxd.io/main.css` (Changed code · before: `L10365-L10367` → after: `L11713-L11717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11713-L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11713-L11717) · [Before (L10365-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10365-L10367)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeaderCta>.RainbowButton {
-   font-size: 1.6rem;
-   font-weight: 800
+ .PackPerkChips {
+   display: flex;
+   flex-wrap: wrap;
+   gap: .5rem;
+   justify-content: center
```

#### 1630. `bundles/bloxd.io/main.css` (Changed code · before: `L10370-L10371` → after: `L11720-L11730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11720-L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11720-L11730) · [Before (L10370-L10371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10370-L10371)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeaderCta>.RainbowButton .ButtonBody {
-   padding: .4rem 1.2rem
+ .PackPerkChips .PackPerkChip {
+   align-items: center;
+   background-color: #394980;
+   border: .2rem solid #0f0f0f;
+   color: #f2f2f2;
+   display: inline-flex;
+   font-size: 1.3rem;
+   font-weight: 800;
+   gap: .4rem;
+   padding: .3rem .7rem;
+   white-space: nowrap
```

#### 1631. `bundles/bloxd.io/main.css` (Changed code · before: `L10374-L10378` → after: `L11733-L11734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11733-L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11733-L11734) · [Before (L10374-L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10374-L10378)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeaderCta .CosmeticShopGiftToggle {
-   color: #ffb914;
-   cursor: pointer;
-   font-size: 1.5rem;
-   white-space: nowrap
+ .PackPerkChips .PackPerkChipTop {
+   color: #fff
```

#### 1632. `bundles/bloxd.io/main.css` (Changed code · before: `L10381-L10384` → after: `L11737-L11740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11737-L11740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11737-L11740) · [Before (L10381-L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10381-L10384)

```diff
- @media(max-height:420px) {
-   .CosmeticShopDetail .CosmeticShopDetailHeader {
-     padding: .3rem .8rem
-   }
+ .PackPerkChips.PackPerkChips-rare .PackPerkChipTop {
+   background-color: rgba(133, 186, 255, .15);
+   border-color: #85baff
+ }
```

#### 1633. `bundles/bloxd.io/main.css` (Changed code · before: `L10386-L10388` → after: `L11742-L11767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11742-L11767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11742-L11767) · [Before (L10386-L10388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10386-L10388)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide {
-     flex-shrink: 0;
-     width: auto
+ .PackPerkChips.PackPerkChips-epic .PackPerkChipTop {
+   background-color: rgba(212, 156, 249, .15);
+   border-color: #d49cf9
+ }
+ 
+ .PackPerkChips.PackPerkChips-legendary .PackPerkChipTop {
+   background-color: hsla(42, 96%, 72%, .15);
+   border-color: #fcd373
+ }
+ 
+ .PackPerkChips.PackPerkChips-mythic .PackPerkChipTop {
+   background-color: rgba(243, 138, 182, .15);
+   border-color: #f38ab6
+ }
+ 
+ .PackPerkChips.CosmeticShopDetailPerks {
+ ... (10 more added lines; see GitHub link above)
```

#### 1634. `bundles/bloxd.io/main.css` (Changed code · before: `L10391-L10392` → after: `L11770-L11772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11770-L11772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11770-L11772) · [Before (L10391-L10392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10391-L10392)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailBackButton {
-     font-size: 1.6rem
+   .PackPerkChips.CosmeticShopDetailPerks .PackPerkChip {
+     font-size: 1.1rem;
+     padding: .1rem .5rem
```

#### 1635. `bundles/bloxd.io/main.css` (Changed code · before: `L10395-L10397` → after: `L11796-L11799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11796-L11799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11796-L11799) · [Before (L10395-L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10395-L10397)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTitle {
-     font-size: 2.2rem
-   }
+ .PackAnimatedBadge .svg-inline--fa,
+ .PackAnimatedBadge.svg-inline--fa {
+   paint-order: stroke fill
+ }
```

#### 1636. `bundles/bloxd.io/main.css` (Changed code · before: `L10399-L10402` → after: `L11801-L11806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11801-L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11801-L11806) · [Before (L10399-L10402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10399-L10402)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailFooter {
-     height: auto;
-     padding: .4rem 0
-   }
+ .PackAnimatedBadge .svg-inline--fa path:only-of-type,
+ .PackAnimatedBadge.svg-inline--fa path:only-of-type {
+   stroke: #0f0f0f;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 1637. `bundles/bloxd.io/main.css` (Changed code · before: `L10405-L10409` → after: `L11809-L11811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11809-L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11809-L11811) · [Before (L10405-L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10405-L10409)

```diff
- @media(max-width:700px)and (orientation:portrait) {
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide {
-     flex-shrink: 0;
-     width: auto
-   }
+ .PackAnimatedBadge.PackAnimatedBadgeBesideRibbon {
+   right: 4.8rem
+ }
```

#### 1638. `bundles/bloxd.io/main.css` (Changed code · before: `L10411-L10413` → after: `L11813-L11820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11813-L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11813-L11820) · [Before (L10411-L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10411-L10413)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide:empty {
-     display: none
-   }
+ .PackAnimatedBadge.PackAnimatedBadgeIcon {
+   box-sizing: border-box;
+   font-size: 1.3rem;
+   height: 2.4rem;
+   justify-content: center;
+   padding: 0;
+   width: 2.4rem
+ }
```

#### 1639. `bundles/bloxd.io/main.css` (Changed code · before: `L10415-L10418` → after: `L11822-L11824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11822-L11824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11822-L11824) · [Before (L10415-L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10415-L10418)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea {
-     flex-wrap: wrap;
-     min-width: 0;
-     row-gap: .2rem
+ @media(hover:hover) {
+   .PackAnimatedBadge.PackAnimatedBadgeIcon {
+     pointer-events: auto
```

#### 1640. `bundles/bloxd.io/main.css` (Changed code · before: `L10421-L10423` → after: `L11828-L11830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11828-L11830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11828-L11830) · [Before (L10421-L10423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10421-L10423)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTitle {
-     font-size: min(2.4rem, 7vw)
-   }
+ .PackAnimatedBadge.PackAnimatedBadgeBelowOwned {
+   top: 3.2rem
+ }
```

#### 1641. `bundles/bloxd.io/main.css` (Changed code · before: `L10425-L10427` → after: `L11832-L11835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11832-L11835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11832-L11835) · [Before (L10425-L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10425-L10427)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticPackItemCount {
-     white-space: nowrap
-   }
+ .CharCustomProfileEffect {
+   align-items: center;
+   display: flex
+ }
```

#### 1642. `bundles/bloxd.io/main.css` (Changed code · before: `L10429-L10432` → after: `L11837-L11840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11837-L11840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11837-L11840) · [Before (L10429-L10432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10429-L10432)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody {
-     container-type: size;
-     padding: 0 .5rem
-   }
+ .CharCustomProfileEffect .ProfilePreview {
+   height: 100%;
+   width: 100%
+ }
```

#### 1643. `bundles/bloxd.io/main.css` (Changed code · before: `L10434-L10440` → after: `L11842-L11844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11842-L11844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11842-L11844) · [Before (L10434-L10440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10434-L10440)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea {
-     box-sizing: border-box;
-     flex-shrink: 0;
-     overflow-x: hidden;
-     padding: 1rem .5rem;
-     width: calc(10.4rem + 1.5vmin)
-   }
+ .CharCustomProfileEffect .ProfilePreview .ProfilePreviewBackground {
+   opacity: 1
+ }
```

#### 1644. `bundles/bloxd.io/main.css` (Changed code · before: `L10442-L10444` → after: `L11846-L11855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11846-L11855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11846-L11855) · [Before (L10442-L10444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10442-L10444)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacters {
-     justify-content: center
-   }
+ .StoreTierLabel {
+   color: #cfcfcf;
+   font-size: 1.1rem;
+   font-weight: 900;
+   letter-spacing: .06em;
+   line-height: 1;
+   text-shadow: -1px -1px 0 #22283b, -1px 0 0 #22283b, -1px 1px 0 #22283b, 0 -1px 0 #22283b, 0 0 0 #22283b, 0 1px 0 #22283b, 1px -1px 0 #22283b, 1px 0 0 #22283b, 1px 1px 0 #22283b;
+   text-transform: uppercase;
+   white-space: nowrap
+ }
```

#### 1645. `bundles/bloxd.io/main.css` (Changed code · before: `L10446-L10448` → after: `L11857-L11860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11857-L11860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11857-L11860) · [Before (L10446-L10448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10446-L10448)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup {
-     grid-template-columns: minmax(0, 1fr)
-   }
+ .StoreTierLabel .svg-inline--fa,
+ .StoreTierLabel.svg-inline--fa {
+   paint-order: stroke fill
+ }
```

#### 1646. `bundles/bloxd.io/main.css` (Changed code · before: `L10450-L10452` → after: `L11862-L11868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11862-L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11862-L11868) · [Before (L10450-L10452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10450-L10452)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper {
-     justify-self: center
-   }
+ .StoreTierLabel .svg-inline--fa path:only-of-type,
+ .StoreTierLabel.svg-inline--fa path:only-of-type {
+   stroke: #22283b;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
+ }
```

#### 1647. `bundles/bloxd.io/main.css` (Changed code · before: `L10454-L10456` → after: `L11870-L11872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11870-L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11870-L11872) · [Before (L10454-L10456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10454-L10456)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.CharCustomPartWrapperProfileEffect {
-     width: 100%
-   }
+ .StoreTierLabel.StoreTierLabelRare {
+   color: #85baff
+ }
```

#### 1648. `bundles/bloxd.io/main.css` (Changed code · before: `L10458-L10465` → after: `L11874-L11876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11874-L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11874-L11876) · [Before (L10458-L10465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10458-L10465)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea {
-     align-self: flex-start;
-     aspect-ratio: 3/4;
-     height: auto;
-     margin: 0 auto;
-     max-height: 100%;
-     min-height: 0
-   }
+ .StoreTierLabel.StoreTierLabelEpic {
+   color: #d49cf9
+ }
```

#### 1649. `bundles/bloxd.io/main.css` (Changed code · before: `L10467-L10469` → after: `L11878-L11879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11878-L11879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11878-L11879) · [Before (L10467-L10469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10467-L10469)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue {
-     inset-block: min(100% + 1rem, 100cqb - 1rem - 44px) auto
-   }
+ .StoreTierLabel.StoreTierLabelLegendary {
+   color: #fcd373
```

#### 1650. `bundles/bloxd.io/main.css` (Changed code · before: `L10472-L10477` → after: `L11882-L11883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11882-L11883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11882-L11883) · [Before (L10472-L10477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10472-L10477)

```diff
- @media(orientation:portrait)and (max-width:600px) {
-   .MiddleScreenPopupBackground .MiddleScreenPopup.PremiumCurrencyPurchasePopup {
-     box-sizing: border-box;
-     max-width: none;
-     width: calc(100vw - 2rem)
-   }
+ .StoreTierLabel.StoreTierLabelMythic {
+   color: #f38ab6
```

#### 1651. `bundles/bloxd.io/main.css` (Changed code · before: `L10480` → after: `L11886-L11887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11886-L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11886-L11887) · [Before (L10480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10480)

```diff
- .PremiumCurrencyPurchase {
+ .CharCustomPart.CharCustomPartWithPlaceholder {
+   align-items: center;
```

#### 1652. `bundles/bloxd.io/main.css` (Changed code · before: `L10482-L10485` → after: `L11889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11889) · [Before (L10482-L10485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10482-L10485)

```diff
-   flex-direction: column;
-   gap: 1rem;
-   max-width: 100%;
-   width: 40rem
+   justify-content: center
```

#### 1653. `bundles/bloxd.io/main.css` (Changed code · before: `L10488-L10490` → after: `L11892-L11895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11892-L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11892-L11895) · [Before (L10488-L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10488-L10490)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTitle {
-   font-size: 2rem;
-   text-align: center
+ .CharCustomPart.CharCustomPartWithPlaceholder .CharCustomPartPlaceholder {
+   color: #cfcfcf;
+   height: 50%;
+   width: 50%
```

#### 1654. `bundles/bloxd.io/main.css` (Changed code · before: `L10493-L10499` → after: `L11898-L11900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11898-L11900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11898-L11900) · [Before (L10493-L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10493-L10499)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCard {
-   align-items: center;
-   background: #3c4b68;
-   display: flex;
-   gap: 1.2rem;
-   min-height: 6.4rem;
-   padding: .8rem
+ .SuperRankPerksTable {
+   border-spacing: 0;
+   width: 100%
```

#### 1655. `bundles/bloxd.io/main.css` (Changed code · before: `L10502` → after: `L11903-L11908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11903-L11908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11903-L11908) · [Before (L10502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10502)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon {
+ .SuperRankPerksTable tr th {
+   min-width: 18em;
+   text-align: left
+ }
+ 
+ .SuperRankPerksTable tr th .TableTitle {
```

#### 1656. `bundles/bloxd.io/main.css` (Changed code · before: `L10506-L10511` → after: `L11911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11911) · [Before (L10506-L10511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10506-L10511)

```diff
-   flex-shrink: 0;
-   height: 6.4rem;
-   justify-content: center;
-   overflow: hidden;
-   position: relative;
-   width: 6.4rem
+   height: 4.5em
```

#### 1657. `bundles/bloxd.io/main.css` (Changed code · before: `L10514-L10521` → after: `L11914-L11921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11914-L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11914-L11921) · [Before (L10514-L10521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10514-L10521)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon img {
-   -ms-interpolation-mode: nearest-neighbor;
-   height: 92%;
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast;
-   position: relative
+ .SuperRankPerksTable tr th .TableTitle .FreeTableTitle {
+   align-items: center;
+   background-color: hsla(0, 0%, 51%, .6);
+   border-radius: 0 0 0 0;
+   display: flex;
+   height: 80%;
+   padding: 0 1em;
+   width: 100%
```

#### 1658. `bundles/bloxd.io/main.css` (Changed code · before: `L10524-L10526` → after: `L11924-L11925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11924-L11925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11924-L11925) · [Before (L10524-L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10524-L10526)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconSuperRank {
-   align-items: center;
-   background: radial-gradient(circle at 78% 40%, rgba(255, 214, 102, .5), transparent 55%), linear-gradient(135deg, #3d2a00, #6e4800 50%, #745309)
+ .SuperRankPerksTable tr th .TableTitle .TableTitleText {
+   font-size: 1.7em
```

#### 1659. `bundles/bloxd.io/main.css` (Changed code · before: `L10529-L10530` → after: `L11928-L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11928-L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11928-L11936) · [Before (L10529-L10530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10529-L10530)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconSuperRank img {
-   height: 80%
+ .SuperRankPerksTable tr th .TableTitle .SuperRankTableTitle {
+   align-items: flex-end;
+   background: linear-gradient(140deg, #ffb914 40%, #fcd373);
+   border-radius: 0 0 0 0;
+   display: flex;
+   font-weight: 800;
+   height: 100%;
+   padding: 0 1em;
+   width: 100%
```

#### 1660. `bundles/bloxd.io/main.css` (Changed code · before: `L10533` → after: `L11939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11939) · [Before (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10533)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconGems {
+ .SuperRankPerksTable tr th .TableTitle .SuperRankTableTitle .SuperRankTableTitleInner {
```

#### 1661. `bundles/bloxd.io/main.css` (Changed code · before: `L10535` → after: `L11941-L11942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11941-L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11941-L11942) · [Before (L10535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10535)

```diff
-   background: none
+   display: flex;
+   height: 80%
```

#### 1662. `bundles/bloxd.io/main.css` (Changed code · before: `L10538-L10540` → after: `L11945-L11946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11945-L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11945-L11946) · [Before (L10538-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10538-L10540)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconGems .PremiumCurrencyIcon {
-   height: 5rem;
-   width: 5rem
+ .SuperRankPerksTable tr th:first-child {
+   width: 40%
```

#### 1663. `bundles/bloxd.io/main.css` (Changed code · before: `L10543` → after: `L11949-L11953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11949-L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11949-L11953) · [Before (L10543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10543)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCardText {
+ .SuperRankPerksTable tr th:nth-child(2) {
+   width: 60%
+ }
+ 
+ .SuperRankPerksTable tr td .PerkContainer {
```

#### 1664. `bundles/bloxd.io/main.css` (Changed code · before: `L10547-L10552` → after: `L11956-L11957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11956-L11957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11956-L11957) · [Before (L10547-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10547-L10552)

```diff
-   flex: 1 1;
-   flex-direction: column;
-   font-size: 1.4rem;
-   gap: .2rem;
-   min-width: 0;
-   text-align: left
+   height: 100%;
+   width: 100%
```

#### 1665. `bundles/bloxd.io/main.css` (Changed code · before: `L10555-L10561` → after: `L11960-L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11960-L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11960-L11964) · [Before (L10555-L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10555-L10561)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCardText b {
-   color: #fff;
-   font-size: 1.8rem;
-   max-width: 100%;
-   overflow: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .SuperRankPerksTable tr td .PerkContainer .Perk {
+   background-color: hsla(0, 0%, 100%, .5);
+   height: 100%;
+   padding: .4em 1em;
+   width: 100%
```

#### 1666. `bundles/bloxd.io/main.css` (Changed code · before: `L10564-L10568` → after: `L11967-L11969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11967-L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11967-L11969) · [Before (L10564-L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10564-L10568)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBanner {
-   font-size: 1.5rem;
-   font-weight: 800;
-   padding: .6rem 1rem;
-   text-align: left
+ .SuperRankPerksTable tr td .PerkContainer .Perk:not(.Enabled) {
+   background-color: hsla(0, 0%, 81%, .4);
+   opacity: .5
```

#### 1667. `bundles/bloxd.io/main.css` (Changed code · before: `L10571-L10574` → after: `L11972-L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11972-L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11972-L11976) · [Before (L10571-L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10571-L10574)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBanner.PremiumCurrencyPurchaseBannerGift {
-   background: rgba(79, 148, 241, .15);
-   border: .1rem solid #4f94f1;
-   color: #85baff
+ .SuperRankPerksTable tr td .PerkContainer .Perk .PerkInner {
+   align-items: center;
+   display: flex;
+   gap: .6em;
+   width: 100%
```

#### 1668. `bundles/bloxd.io/main.css` (Changed code · before: `L10577-L10580` → after: `L11979-L11981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11979-L11981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11979-L11981) · [Before (L10577-L10580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10577-L10580)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBanner.PremiumCurrencyPurchaseBannerWarning {
-   background: rgba(255, 185, 20, .15);
-   border: .1rem solid #ffb914;
-   color: #fcd373
+ .SuperRankPerksTable tr td .PerkContainer .Perk .PerkInner .fa-x {
+   font-size: 1.2em;
+   padding-top: .3em
```

#### 1669. `bundles/bloxd.io/main.css` (Changed code · before: `L10583` → after: `L11984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11984) · [Before (L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10583)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBonus {
+ .SuperRankPerksTable tr td .PerkContainer .Perk .PerkInner .fa-check {
```

#### 1670. `bundles/bloxd.io/main.css` (Changed code · before: `L10585-L10589` → after: `L11986-L11987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11986-L11987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11986-L11987) · [Before (L10585-L10589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10585-L10589)

```diff
-   white-space: nowrap
- }
- 
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUpLoading {
-   justify-content: center
+   font-size: 1.4em;
+   padding-top: .2em
```

#### 1671. `bundles/bloxd.io/main.css` (Changed code · before: `L10592-L10593` → after: `L11990-L11991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11990-L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11990-L11991) · [Before (L10592-L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10592-L10593)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp {
-   flex-wrap: wrap
+ .SuperRankPerksTable tr td .PerkContainer .Perk .PerkInner .PerkText {
+   font-size: 1.4em
```

#### 1672. `bundles/bloxd.io/main.css` (Changed code · before: `L10596-L10597` → after: `L11994-L11995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11994-L11995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11994-L11995) · [Before (L10596-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10596-L10597)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseCardText {
-   flex-basis: auto
+ .SuperRankPerksTable tr td .PerkContainer .Perk .PerkInner .PerkRainbowText {
+   text-shadow: -2px -2px 0 #303a59, -2px -1px 0 #303a59, -2px 0 0 #303a59, -2px 1px 0 #303a59, -2px 2px 0 #303a59, -1px -2px 0 #303a59, -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, -1px 2px 0 #303a59, 0 -2px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a5 … [truncated]
```

#### 1673. `bundles/bloxd.io/main.css` (Changed code · before: `L10600-L10602` → after: `L11998-L12000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R11998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L11998-L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L11998-L12000) · [Before (L10600-L10602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10600-L10602)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseTopUpNeed {
-   min-width: 100%;
-   width: 0
+ .SuperRankPerksTable tr td .PerkContainer .Perk .PerkInner .PerkRainbowText .svg-inline--fa,
+ .SuperRankPerksTable tr td .PerkContainer .Perk .PerkInner .PerkRainbowText.svg-inline--fa {
+   paint-order: stroke fill
```

#### 1674. `bundles/bloxd.io/main.css` (Changed code · before: `L10605-L10608` → after: `L12003-L12008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12003-L12008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12003-L12008) · [Before (L10605-L10608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10605-L10608)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseTopUpButton {
-   flex-shrink: 0;
-   font-size: 1.6rem;
-   margin-left: auto
+ .SuperRankPerksTable tr td .PerkContainer .Perk .PerkInner .PerkRainbowText .svg-inline--fa path:only-of-type,
+ .SuperRankPerksTable tr td .PerkContainer .Perk .PerkInner .PerkRainbowText.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 4px;
+   stroke-linejoin: round
```

#### 1675. `bundles/bloxd.io/main.css` (Changed code · before: `L10611-L10613` → after: `L12011-L12012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12011-L12012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12011-L12012) · [Before (L10611-L10613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10611-L10613)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseNotice {
-   font-size: 1.4rem;
-   text-align: inherit
+ .SuperRankPerksTable tr:last-of-type .PerkContainer {
+   height: 4.5em
```

#### 1676. `bundles/bloxd.io/main.css` (Changed code · before: `L10616-L10621` → after: `L12015-L12016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12015-L12016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12015-L12016) · [Before (L10616-L10621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10616-L10621)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseButtons {
-   display: flex;
-   font-size: 1.8rem;
-   gap: 1rem;
-   justify-content: space-between;
-   margin-top: .4rem
+ .SuperRankPerksTable tr:last-of-type .PerkContainer .Perk {
+   align-items: flex-start
```

#### 1677. `bundles/bloxd.io/main.css` (Changed code · before: `L10624-L10627` → after: `L12019-L12021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12019-L12021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12019-L12021) · [Before (L10624-L10627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10624-L10627)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBuy {
-   align-items: center;
-   display: flex;
-   gap: .6rem
+ .SuperRankPerksTable tr:last-of-type .PerkContainer .Perk.FreePerk {
+   border-radius: 0 0 0 0;
+   height: 75%
```

#### 1678. `bundles/bloxd.io/main.css` (Changed code · before: `L10630` → after: `L12024-L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12024-L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12024-L12027) · [Before (L10630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10630)

```diff
- @keyframes loginResumeHighlight {
+ .SuperRankPerksTable tr:last-of-type .PerkContainer .Perk.SuperRankPerk {
+   border-radius: 0 0 0 0;
+   height: 100%
+ }
```

#### 1679. `bundles/bloxd.io/main.css` (Changed code · before: `L10632-L10636` → after: `L12029-L12031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12029-L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12029-L12031) · [Before (L10632-L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10632-L10636)

```diff
-   0%,
-   to {
-     filter: none;
-     transform: scale(1)
-   }
+ .SdkPrivacyLinks {
+   display: contents
+ }
```

#### 1680. `bundles/bloxd.io/main.css` (Changed code · before: `L10638-L10641` → after: `L12033-L12034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12033-L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12033-L12034) · [Before (L10638-L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10638-L10641)

```diff
-   50% {
-     filter: drop-shadow(0 0 .8rem rgba(252, 211, 115, .9));
-     transform: scale(1.08)
-   }
+ .SdkPrivacyLinks>:empty {
+   display: none
```

#### 1681. `bundles/bloxd.io/main.css` (Changed code · before: `L10644-L10649` → after: `L12037-L12043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12037-L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12037-L12043) · [Before (L10644-L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10644-L10649)

```diff
- .PremiumCurrencyBundles {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
-   width: 100%
+ .SdkPrivacyLinks button {
+   background: none;
+   border: none;
+   color: inherit;
+   cursor: pointer;
+   font: inherit;
+   padding: 0
```

#### 1682. `bundles/bloxd.io/main.css` (Changed code · before: `L10652-L10657` → after: `L12046-L12049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12046-L12049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12046-L12049) · [Before (L10652-L10657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10652-L10657)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundleGrid {
-   grid-gap: 1rem;
-   display: grid;
-   gap: 1rem;
-   grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
-   width: 100%
+ @media(hover:hover) {
+   .SdkPrivacyLinks button:hover {
+     text-decoration: underline
+   }
```

#### 1683. `bundles/bloxd.io/main.css` (Changed code · before: `L10660-L10661` → after: `L12052-L12053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12052-L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12052-L12053) · [Before (L10660-L10661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10660-L10661)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundleGrid.PremiumCurrencyBundleGridTileOnly {
-   grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr))
+ .SdkPrivacyLinks button.pad-focused {
+   text-decoration: underline
```

#### 1684. `bundles/bloxd.io/main.css` (Changed code · before: `L10664-L10666` → after: `L12056-L12059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12056-L12059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12056-L12059) · [Before (L10664-L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10664-L10666)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundleGrid[data-off-screen] .PremiumCurrencyBundle:before,
- html[data-app-covered] .WholeAppWrapper .PremiumCurrencyBundles .PremiumCurrencyBundleGrid .PremiumCurrencyBundle:before {
-   animation-play-state: paused
+ @media(hover:none) {
+   .SdkPrivacyLinks button:active {
+     text-decoration: underline
+   }
```

#### 1685. `bundles/bloxd.io/main.css` (Changed code · before: `L10669-L10677` → after: `L12062-L12063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12062-L12063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12062-L12063) · [Before (L10669-L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10669-L10677)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle {
-   --pileGlow: rgba(243, 138, 182, .18);
-   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-100 -100 200 200%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28124,131,251%29%27 st … [truncated]
-   --rayTurn: 60s;
-   align-items: center;
-   background: radial-gradient(circle at 50% 52%, #545efa, #463bd9 45%, #222a9f);
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+ .SdkPrivacyLinks.PrivacyPolicyLinks {
+   column-gap: 2rem;
```

#### 1686. `bundles/bloxd.io/main.css` (Changed code · before: `L10679-L10684` → after: `L12065-L12066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12065-L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12065-L12066) · [Before (L10679-L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10679-L10684)

```diff
-   flex-direction: column;
-   gap: .6rem;
-   isolation: isolate;
-   overflow: hidden;
-   padding: .8rem .6rem .6rem;
-   position: relative
+   flex-wrap: wrap;
+   justify-content: center
```

#### 1687. `bundles/bloxd.io/main.css` (Changed code · before: `L10687-L10698` → after: `L12069-L12070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12069-L12070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L12069-L12070) · [Before (L10687-L10698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L10687-L10698)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle:before {
-   animation: premiumCurrencyBundleRays var(--rayTurn) linear infinite;
-   aspect-ratio: 1;
-   background: var(--rays) center/100% 100%;
-   content: "";
-   left: 50%;
-   pointer-events: none;
-   position: absolute;
-   top: 52%;
-   transform: translate(-50%, -50%);
-   width: 200%;
-   z-index: -1
+ .SdkPrivacyLinks.PrivacyPolicyLinks>* {
+   margin-bottom: 1rem
```
