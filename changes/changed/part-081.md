# Changed — Bundle Modifications Report (Part 081 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `81 / 86` (**363** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 080](part-080.md) · [Part 082 →](part-082.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/main.css` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/main.css` (1198 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a)

#### 770. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9413-L9419` → after: `L10471-L10472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10471-L10472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10471-L10472) · [Before (L9413-L9419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9413-L9419)

```diff
- .LiveStreamPromotion {
-   align-items: center;
-   background: #22283b;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   bottom: max(var(--notchBottom), 1rem);
-   cursor: pointer;
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable {
+   align-items: flex-start;
```

#### 771. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9421-L9425` → after: `L10474-L10477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10474-L10477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10474-L10477) · [Before (L9421-L9425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9421-L9425)

```diff
-   gap: 1rem;
-   left: max(var(--notchLeft), 1rem);
-   padding: .9rem 1.5rem;
-   position: fixed;
-   z-index: 5
+   flex-grow: 1;
+   font-size: 16px;
+   margin-top: 32px;
+   order: 3
```

#### 772. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9428-L9431` → after: `L10480-L10484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10480-L10484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10480-L10484) · [Before (L9428-L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9428-L9431)

```diff
- @media(hover:hover) {
-   .LiveStreamPromotion:hover {
-     background: #303a59
-   }
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr td:first-of-type,
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr th,
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:first-of-type,
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:nth-of-type(2) {
+   display: none
```

#### 773. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9434-L9435` → after: `L10487-L10488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10487-L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10487-L10488) · [Before (L9434-L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9434-L9435)

```diff
- .LiveStreamPromotion.pad-focused {
-   background: #303a59
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:last-of-type .PerkContainer {
+   height: auto
```

#### 774. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9438-L9441` → after: `L10491-L10492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10491-L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10491-L10492) · [Before (L9438-L9441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9438-L9441)

```diff
- @media(hover:none) {
-   .LiveStreamPromotion:active {
-     background: #303a59
-   }
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdButton {
+   order: 4
```

#### 775. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9444-L9447` → after: `L10495-L10497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10495-L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10495-L10497) · [Before (L9444-L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9444-L9447)

```diff
- .LiveStreamPromotion .LiveStreamPromotionIcon {
-   border-radius: 0;
-   height: 5.25rem;
-   width: 5.25rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdButton .NewButton {
+   font-size: 32px;
+   width: 288px
```

#### 776. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9450-L9452` → after: `L10500-L10502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10500-L10502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10500-L10502) · [Before (L9450-L9452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9450-L9452)

```diff
- .LiveStreamPromotion .LiveStreamPromotionInfo {
-   display: flex;
-   flex-direction: column
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 {
+   height: 50px;
+   width: 320px
```

#### 777. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9455-L9456` → after: `L10505-L10510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10505-L10510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10505-L10510) · [Before (L9455-L9456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9455-L9456)

```diff
- .LiveStreamPromotion .LiveStreamPromotionTitle {
-   font-size: 1.4rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner {
+   align-items: flex-start;
+   column-gap: 8px;
+   flex-direction: row;
+   justify-content: space-around;
+   padding: 7px
```

#### 778. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9459-L9461` → after: `L10513-L10515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10513-L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10513-L10515) · [Before (L9459-L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9459-L9461)

```diff
- .LiveStreamPromotion .LiveStreamPromotionChannel {
-   color: #f2f2f2;
-   font-size: 1.3rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdLogoAndTitle {
+   flex-shrink: 0;
+   font-size: 22px
```

#### 779. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9464-L9466` → after: `L10518-L10520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10518-L10520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10518-L10520) · [Before (L9464-L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9464-L9466)

```diff
- .LiveStreamPromotion .LiveStreamPromotionTime {
-   color: #f2f2f2;
-   font-size: 1.85rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdSubTitle,
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdTable {
+   display: none
```

#### 780. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9469-L9475` → after: `L10523-L10524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10523-L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10523-L10524) · [Before (L9469-L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9469-L9475)

```diff
- .LiveStreamPromotion .LiveStreamPromotionLiveBadge {
-   background: #e34f4f;
-   color: #fff;
-   font-size: 1.5rem;
-   font-weight: 700;
-   margin-left: .35rem;
-   padding: .15rem .6rem
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdButton {
+   align-self: center
```

#### 781. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9478-L9480` → after: `L10527-L10530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10527-L10530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10527-L10530) · [Before (L9478-L9480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9478-L9480)

```diff
- .UnstyledA {
-   color: #fff;
-   text-decoration: none
+ .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdButton .NewButton {
+   font-size: 16px;
+   min-height: 2.1em;
+   min-width: 125px
```

#### 782. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9483-L9486` → after: `L10533-L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10533-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10533-L10552) · [Before (L9483-L9486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9483-L9486)

```diff
- .AdBannerContainer {
-   display: flex;
-   pointer-events: none;
-   position: relative
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
+ }
+ 
+ .AdBannerContainer .AdBanner.CosmeticPackAd {
+   background-color: rgba(57, 73, 128, .4);
+ ... (4 more added lines; see GitHub link above)
```

#### 783. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9489-L9491` → after: `L10555-L10558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10555-L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10555-L10558) · [Before (L9489-L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9489-L9491)

```diff
- .AdBannerContainer.AdBannerContainerHoldsFrame {
-   padding: calc(var(--contrast-border-top)*var(--ad-banner-scale, 0)) calc(var(--contrast-border-right)*var(--ad-banner-scale, 0)) calc(var(--contrast-border-bottom)*var(--ad-banner-scale, 0)) calc(var(--contrast-border-left)*var(--ad-banner-scale, 0))
- }
+ @media(hover:hover) {
+   .AdBannerContainer .AdBanner.CosmeticPackAd:hover {
+     border-color: #b6830e
+   }
```

#### 784. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9493-L9494` → after: `L10560-L10562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10560-L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10560-L10562) · [Before (L9493-L9494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9493-L9494)

```diff
- .AdBannerContainer.AdBannerContainerHoldsFrame .AdBannerSlot>.AdBanner.AdBannerExtraContrast {
-   margin: calc(var(--contrast-border-top)*-1) calc(var(--contrast-border-right)*-1) calc(var(--contrast-border-bottom)*-1) calc(var(--contrast-border-left)*-1) !important
+   .AdBannerContainer .AdBanner.CosmeticPackAd:hover .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
+     transform: rotate(90deg) translateY(-.2em)
+   }
```

#### 785. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9497-L9498` → after: `L10565-L10566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10565-L10566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10565-L10566) · [Before (L9497-L9498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9497-L9498)

```diff
- .AdBannerContainer.AdBannerContainerHoldsFrame .AdBannerSlot>.AdBanner.AdBannerExtraContrast.AdBannerAwaitingAd {
-   margin: 0 !important
+ .AdBannerContainer .AdBanner.CosmeticPackAd.pad-focused {
+   border-color: #b6830e
```

#### 786. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9501-L9506` → after: `L10569-L10570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10569-L10570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10569-L10570) · [Before (L9501-L9506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9501-L9506)

```diff
- .AdBannerContainer .AdBannerExtraContrastAnchorBottom,
- .AdBannerContainer.AdBannerExtraContrastAnchorBottom {
-   --contrast-border-top: 1rem;
-   --contrast-border-right: 1.5rem;
-   --contrast-border-bottom: 0.5rem;
-   --contrast-border-left: 1.5rem
+ .AdBannerContainer .AdBanner.CosmeticPackAd.pad-focused .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
+   transform: rotate(90deg) translateY(-.2em)
```

#### 787. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9509-L9514` → after: `L10573-L10581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10573-L10581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10573-L10581) · [Before (L9509-L9514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9509-L9514)

```diff
- .AdBannerContainer .AdBannerExtraContrastAnchorTop,
- .AdBannerContainer.AdBannerExtraContrastAnchorTop {
-   --contrast-border-top: 0.5rem;
-   --contrast-border-right: 1.5rem;
-   --contrast-border-bottom: 1rem;
-   --contrast-border-left: 1.5rem
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay {
+   background: linear-gradient(-90deg, rgba(34, 40, 59, .9), transparent);
+   bottom: 0;
+   display: flex;
+   justify-content: center;
+   left: 0;
+   position: absolute;
+   right: 0;
+   top: 0
```

#### 788. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9517-L9522` → after: `L10584-L10592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10584-L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10584-L10592) · [Before (L9517-L9522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9517-L9522)

```diff
- .AdBannerContainer .AdBannerExtraContrastAnchorLeft,
- .AdBannerContainer.AdBannerExtraContrastAnchorLeft {
-   --contrast-border-top: 1rem;
-   --contrast-border-right: 1.5rem;
-   --contrast-border-bottom: 1.5rem;
-   --contrast-border-left: 0.5rem
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner {
+   background-color: #ffb914;
+   border-width: 0;
+   bottom: 0;
+   box-shadow: none;
+   left: 0;
+   position: absolute;
+   right: 0;
+   z-index: 3
```

#### 789. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9525-L9530` → after: `L10595-L10599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10595-L10599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10595-L10599) · [Before (L9525-L9530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9525-L9530)

```diff
- .AdBannerContainer .AdBannerExtraContrastAnchorRight,
- .AdBannerContainer.AdBannerExtraContrastAnchorRight {
-   --contrast-border-top: 1rem;
-   --contrast-border-right: 0.5rem;
-   --contrast-border-bottom: 1.5rem;
-   --contrast-border-left: 1.5rem
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
+   font-size: 14px;
+   gap: .4em;
+   padding: 2px 8px;
+   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
```

#### 790. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9533-L9534` → after: `L10602-L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10602-L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10602-L10604) · [Before (L9533-L9534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9533-L9534)

```diff
- .AdBannerContainer .AdBannerSlot {
-   contain: layout
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa,
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa {
+   paint-order: stroke fill
```

#### 791. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9537-L9545` → after: `L10607-L10612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10607-L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10607-L10612) · [Before (L9537-L9545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9537-L9545)

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
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa path:only-of-type,
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 792. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9548-L9553` → after: `L10615-L10617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10615-L10617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10615-L10617) · [Before (L9548-L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9548-L9553)

```diff
- .AdBannerContainer .AdBannerLoader,
- .AdBannerContainer .VisibilityTimer {
-   align-items: center;
-   display: flex;
-   justify-content: center;
-   position: absolute
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon,
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
+   color: #fff
```

#### 793. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9556-L9558` → after: `L10620-L10621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10620-L10621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10620-L10621) · [Before (L9556-L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9556-L9558)

```diff
- .AdBannerContainer .AdBannerLoader {
-   font-size: 2rem;
-   z-index: 3
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerContent {
+   display: none
```

#### 794. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9561-L9564` → after: `L10624-L10631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10624-L10631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10624-L10631) · [Before (L9561-L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9561-L9564)

```diff
- .AdBannerContainer .AdBannerLoader.AdBannerLoaderExtraContrast {
-   background-color: #f2f2f2;
-   outline: 1px solid #000;
-   padding: var(--contrast-border-top) var(--contrast-border-right) var(--contrast-border-bottom) var(--contrast-border-left)
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdCharacters {
+   align-items: center;
+   display: flex;
+   flex-grow: 1;
+   gap: 10px;
+   height: 100%;
+   justify-content: space-around;
+   min-width: 0
```

#### 795. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9567-L9569` → after: `L10634-L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10634-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10634-L10637) · [Before (L9567-L9569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9567-L9569)

```diff
- .AdBannerContainer .BloxdAdContainer {
-   position: absolute;
-   z-index: 1
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdCharacters .CosmeticPackAdCharacterPreview {
+   height: 100%;
+   min-width: 0;
+   object-fit: contain
```

#### 796. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9572-L9580` → after: `L10640-L10648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10640-L10648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10640-L10648) · [Before (L9572-L9580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9572-L9580)

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
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+   align-items: flex-end;
+   display: flex;
+   flex-direction: column;
+   flex-shrink: 0;
+   font-size: 35px;
+   gap: .3em;
+   justify-content: center;
+   padding: 16px;
```

#### 797. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9584-L9589` → after: `L10652-L10657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10652-L10657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10652-L10657) · [Before (L9584-L9589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9584-L9589)

```diff
- .AdBannerContainer .AdBanner.AdBannerExtraContrast {
-   background-color: #fff;
-   border-color: #f2f2f2 !important;
-   border-style: solid !important;
-   border-width: var(--contrast-border-top) var(--contrast-border-right) var(--contrast-border-bottom) var(--contrast-border-left) !important;
-   outline: 1px solid #000;
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
+   align-items: center;
+   color: #ffb914;
+   display: flex;
+   font-weight: 800;
+   gap: .2em;
```

#### 798. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9591-L9598` → after: `L10659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10659) · [Before (L9591-L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9591-L9598)

```diff
-   position: relative
- }
- 
- .AdBannerContainer .AdBanner.AdBannerExtraContrast.AdBannerExtraContrastAnchorTop .AdBannerRemoveAds {
-   border-bottom: 1px solid #000;
-   border-top: none;
-   bottom: auto;
-   top: calc(100% + var(--contrast-border-bottom))
+   width: 100%
```

#### 799. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9601-L9605` → after: `L10662-L10664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10662-L10664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10662-L10664) · [Before (L9601-L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9601-L9605)

```diff
- .AdBannerContainer .AdBanner.AdBannerAwaitingAd {
-   background-color: transparent;
-   border-style: none !important;
-   box-shadow: none;
-   outline: none
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdName {
+   font-size: 1em;
+   overflow: visible
```

#### 800. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9608-L9609` → after: `L10667-L10675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10667-L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10667-L10675) · [Before (L9608-L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9608-L9609)

```diff
- .AdBannerContainer .AdBanner.AdBannerAwaitingAd .AdBannerRemoveAds {
-   visibility: hidden
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

#### 801. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9612-L9613` → after: `L10678-L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10678-L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10678-L10679) · [Before (L9612-L9613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9612-L9613)

```diff
- .AdBannerContainer .AdBanner .AdBannerRemoveAdsHost {
-   display: contents
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdItemCount .CosmeticPackAdItemCountInner {
+   font-size: .4em
```

#### 802. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9616` → after: `L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10682) · [Before (L9616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9616)

```diff
- .AdBannerContainer .AdBanner .AdBannerRemoveAds {
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta {
```

#### 803. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9618-L9623` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10684) · [Before (L9618-L9623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9618-L9623)

```diff
-   background-color: #f2f2f2;
-   border: 1px solid #000;
-   border-bottom: none;
-   bottom: calc(100% + var(--contrast-border-top));
-   color: #333;
-   cursor: pointer;
+   color: #ffb914;
```

#### 804. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9625-L9633` → after: `L10686-L10689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10686-L10689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10686-L10689) · [Before (L9625-L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9625-L9633)

```diff
-   font-size: 1rem;
-   font-weight: 700;
-   gap: .3rem;
-   padding: .15rem .6rem;
-   pointer-events: all;
-   position: absolute;
-   right: calc(1rem - var(--contrast-border-right));
-   white-space: nowrap;
-   z-index: 3
+   font-size: .5em;
+   font-weight: 800;
+   gap: .2em;
+   white-space: nowrap
```

#### 805. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9636-L9637` → after: `L10692-L10700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10692-L10700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10692-L10700) · [Before (L9636-L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9636-L9637)

```diff
- .AdBannerContainer .AdBanner .AdBannerRemoveAds .svg-inline--fa {
-   color: #b6830e
+ .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
+   transform: rotate(90deg);
+   transition: transform .2s
+ }
+ 
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic {
+   border-color: rgba(110, 170, 90, .6);
+   box-shadow: 0 0 19px rgba(110, 170, 90, .3), inset 0 0 8px rgba(110, 170, 90, .1);
+   transition: transform .15s, border-color .15s, box-shadow .3s
```

#### 806. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9641-L9642` → after: `L10704-L10706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10704-L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10704-L10706) · [Before (L9641-L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9641-L9642)

```diff
-   .AdBannerContainer .AdBanner .AdBannerRemoveAds:hover {
-     color: #b6830e
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic:hover {
+     border-color: #6eaa5a;
+     box-shadow: 0 0 32px rgba(110, 170, 90, .5), inset 0 0 8px rgba(110, 170, 90, .15)
```

#### 807. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9646-L9647` → after: `L10710-L10712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10710-L10712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10710-L10712) · [Before (L9646-L9647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9646-L9647)

```diff
- .AdBannerContainer .AdBanner .AdBannerRemoveAds.pad-focused {
-   color: #b6830e
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic.pad-focused {
+   border-color: #6eaa5a;
+   box-shadow: 0 0 32px rgba(110, 170, 90, .5), inset 0 0 8px rgba(110, 170, 90, .15)
```

#### 808. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9650-L9653` → after: `L10715-L10716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10715-L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10715-L10716) · [Before (L9650-L9653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9650-L9653)

```diff
- @media(hover:none) {
-   .AdBannerContainer .AdBanner .AdBannerRemoveAds:active {
-     color: #b6830e
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic .CosmeticPackAdOverlay {
+   z-index: 2
```

#### 809. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9656-L9669` → after: `L10719-L10720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10719-L10720) · [Before (L9656-L9669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9656-L9669)

```diff
- @keyframes premiumBorderCycle {
- 
-   0%,
-   to {
-     border-color: #5f4178
-   }
- 
-   33% {
-     border-color: #325a5f
-   }
- 
-   66% {
-     border-color: #ffb914
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic .CosmeticPackAdOverlay .CosmeticPackAdTitle {
+   color: #8cdc78
```

#### 810. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9672-L9680` → after: `L10723-L10729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10723-L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10723-L10729) · [Before (L9672-L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9672-L9680)

```diff
- @keyframes premiumBorderSecond {
-   0% {
-     opacity: 0
-   }
- 
-   33%,
-   66% {
-     opacity: 1
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary {
+   border-style: solid;
+   border-width: 4px;
+   box-shadow: 0 0 16px rgba(95, 65, 120, .5), 0 0 40px rgba(50, 90, 95, .3), inset 0 0 13px rgba(95, 65, 120, .15);
+   overflow: visible;
+   transition: box-shadow .3s
+ }
```

#### 811. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9682-L9684` → after: `L10731-L10733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10731-L10733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10731-L10733) · [Before (L9682-L9684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9682-L9684)

```diff
-   66.01%,
-   to {
-     opacity: 0
+ @media(hover:hover) {
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary:hover {
+     box-shadow: 0 0 24px rgba(95, 65, 120, .7), 0 0 56px rgba(50, 90, 95, .5), inset 0 0 16px rgba(95, 65, 120, .2)
```

#### 812. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9688` → after: `L10737-L10739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10737-L10739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10737-L10739) · [Before (L9688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9688)

```diff
- @keyframes premiumBorderThird {
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary.pad-focused {
+   box-shadow: 0 0 24px rgba(95, 65, 120, .7), 0 0 56px rgba(50, 90, 95, .5), inset 0 0 16px rgba(95, 65, 120, .2)
+ }
```

#### 813. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9690-L9693` → after: `L10741-L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10741-L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10741-L10746) · [Before (L9690-L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9690-L9693)

```diff
-   0%,
-   33% {
-     opacity: 0
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle {
+   inset: 0;
+   pointer-events: none;
+   position: absolute;
+   z-index: 3
+ }
```

#### 814. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9695-L9697` → after: `L10748-L10753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10748-L10753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10748-L10753) · [Before (L9695-L9697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9695-L9697)

```diff
-   66% {
-     opacity: 1
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div {
+   animation: cosmeticPackAdBorderFirst 4s linear infinite;
+   inset: 0;
+   outline: 4px solid #5f4178;
+   position: absolute
+ }
```

#### 815. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9699-L9701` → after: `L10755-L10757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10755-L10757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10755-L10757) · [Before (L9699-L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9699-L9701)

```diff
-   to {
-     opacity: 0
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div:nth-child(2) {
+   animation-name: premiumBorderSecond;
+   outline-color: #325a5f
```

#### 816. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9704` → after: `L10760-L10763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10760-L10763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10760-L10763) · [Before (L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9704)

```diff
- @keyframes cosmeticPackAdBorderFirst {
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div:nth-child(3) {
+   animation-name: premiumBorderThird;
+   outline-color: #ffb914
+ }
```

#### 817. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9706-L9709` → after: `L10765-L10773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10765-L10773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10765-L10773) · [Before (L9706-L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9706-L9709)

```diff
-   0%,
-   66% {
-     opacity: 1
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary:after {
+   animation: cosmeticPackAdStarTwinkle 3s ease-in-out infinite alternate;
+   background-image: radial-gradient(1px 1px at 20% 30%, hsla(0, 0%, 100%, .8) 0, transparent 100%), radial-gradient(1px 1px at 40% 70%, hsla(0, 0%, 100%, .6) 0, transparent 100%), radial-gradient(1px 1px at 60% 15%, hsla(0, 0%, 100%, .7) 0, transparent 100%), radial-gradient(1px  … [truncated]
+   content: "";
+   inset: 0;
+   pointer-events: none;
+   position: absolute;
+   z-index: 1
+ }
```

#### 818. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9711-L9714` → after: `L10775-L10776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10775-L10776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10775-L10776) · [Before (L9711-L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9711-L9714)

```diff
-   66.01%,
-   to {
-     opacity: 0
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay {
+   z-index: 2
```

#### 819. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9717-L9720` → after: `L10779-L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10779-L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10779-L10781) · [Before (L9717-L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9717-L9720)

```diff
- @keyframes cosmeticPackAdStarTwinkle {
-   0% {
-     opacity: .4
-   }
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
+   -webkit-text-fill-color: transparent
+ }
```

#### 820. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9722-L9723` → after: `L10783-L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10783-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10783-L10788) · [Before (L9722-L9723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9722-L9723)

```diff
-   to {
-     opacity: 1
+ @supports(-webkit-mask-clip:text) and (overflow-x:clip) {
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
+     margin-inline-end: auto;
+     min-width: min-content;
+     overflow-x: clip;
+     position: relative
```

#### 821. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9727-L9729` → after: `L10791-L10794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10791-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10791-L10794) · [Before (L9727-L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9727-L9729)

```diff
- @keyframes cosmeticPackAdNameShimmer {
-   0% {
-     transform: translateX(0)
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdItemCountInner,
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdName {
+     -webkit-mask-clip: text;
+     -webkit-mask-image: linear-gradient(#000, #000)
```

#### 822. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9732-L9733` → after: `L10797-L10807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10797-L10807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10797-L10807) · [Before (L9732-L9733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9732-L9733)

```diff
-   to {
-     transform: translateX(85.71429%)
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdItemCountInner:before,
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdName:before {
+     animation: cosmeticPackAdNameShimmer 3s linear infinite;
+     background: linear-gradient(90deg, #b388ff, #64ffda, #ffb914, #b388ff) 25% 0/42.85714% 100%;
+     bottom: 0;
+     content: "";
+     left: -600%;
+     pointer-events: none;
+     position: absolute;
+     top: 0;
+     width: 700%
```

#### 823. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9737-L9739` → after: `L10811-L10816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10811-L10816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10811-L10816) · [Before (L9737-L9739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9737-L9739)

```diff
- @keyframes cosmeticPackAdNameShimmerPosition {
-   0% {
-     background-position: 100% 0
+ @supports not ((-webkit-mask-clip:text) and (overflow-x:clip)) {
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
+     animation: cosmeticPackAdNameShimmerPosition 3s linear infinite;
+     background: linear-gradient(90deg, #b388ff, #64ffda, #ffb914, #b388ff) 0 0/300% 100%;
+     -webkit-background-clip: text;
+     background-clip: text
```

#### 824. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9742-L9744` → after: `L10820-L10828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10820-L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10820-L10828) · [Before (L9742-L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9742-L9744)

```diff
-   to {
-     background-position: -200% 0
-   }
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

#### 825. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9747-L9749` → after: `L10831-L10835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10831-L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10831-L10835) · [Before (L9747-L9749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9747-L9749)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd {
-   background-color: #303a59;
-   border-color: #ffb914
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticShopBannerSubtitle,
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CountdownTime,
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticShopBannerSubtitle,
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CountdownTime {
+   display: none
```

#### 826. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9752-L9758` → after: `L10838-L10840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10838-L10840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10838-L10840) · [Before (L9752-L9758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9752-L9758)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner {
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   height: 100%;
-   padding: 12px;
-   width: 100%
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 {
+   height: 250px;
+   width: 300px
```

#### 827. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9761-L9765` → after: `L10843-L10844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10843-L10844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10843-L10844) · [Before (L9761-L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9761-L9765)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   align-items: flex-start;
-   color: #ffb914;
-   display: flex;
-   gap: 6px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay {
+   flex-direction: column
```

#### 828. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9768-L9775` → after: `L10847-L10849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10847-L10849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10847-L10849) · [Before (L9768-L9775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9768-L9775)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner .SuperRankAdLogoAndTitle .SuperRankAdTitle {
-   -webkit-background-clip: text;
-   background-clip: text;
-   background-image: linear-gradient(140deg, #ffb914 40%, #fcd373);
-   color: transparent;
-   display: inline-block;
-   font-weight: 700;
-   text-shadow: none
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+   font-size: 29px;
+   padding: 10px 13px
```

#### 829. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9778-L9782` → after: `L10852-L10853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10852-L10853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10852-L10853) · [Before (L9778-L9782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9778-L9782)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd .SuperRankAdInner .SuperRankAdButton .NewButton {
-   align-items: center;
-   box-sizing: border-box;
-   display: flex;
-   justify-content: center
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
+   justify-content: flex-end
```

#### 830. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9785-L9786` → after: `L10856-L10857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10856-L10857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10856-L10857) · [Before (L9785-L9786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9785-L9786)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 {
-   height: 250px;
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 {
+   height: 600px;
```

#### 831. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9790-L9791` → after: `L10861-L10862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10861-L10862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10861-L10862) · [Before (L9790-L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9790-L9791)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner {
-   gap: 6px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay {
+   flex-direction: column
```

#### 832. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9794-L9795` → after: `L10865-L10867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10865-L10867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10865-L10867) · [Before (L9794-L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9794-L9795)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   font-size: 32px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
+   font-size: 16px;
+   padding: 3px 10px
```

#### 833. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9798-L9801` → after: `L10870-L10872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10870-L10872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10870-L10872) · [Before (L9798-L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9798-L9801)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdSubTitle {
-   flex-grow: 1;
-   font-size: 24px;
-   text-align: start
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdCharacters {
+   flex-wrap: wrap;
+   min-height: 0
```

#### 834. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9804-L9805` → after: `L10875-L10877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10875-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10875-L10877) · [Before (L9804-L9805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9804-L9805)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdButton .NewButton {
-   font-size: 24px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdCharacters .CosmeticPackAdCharacterPreview {
+   height: min(200px, 50% - 5px);
+   width: 130px
```

#### 835. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9808-L9809` → after: `L10880-L10882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10880-L10882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10880-L10882) · [Before (L9808-L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9808-L9809)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x250 .SuperRankAdInner .SuperRankAdTable {
-   display: none
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+   font-size: 42px;
+   padding: 22px 19px
```

#### 836. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9812-L9814` → after: `L10885-L10886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10885-L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10885-L10886) · [Before (L9812-L9814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9812-L9814)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 {
-   height: 90px;
-   width: 728px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
+   flex-wrap: wrap
```

#### 837. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9817-L9818` → after: `L10889-L10890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10889-L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10889-L10890) · [Before (L9817-L9818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9817-L9818)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner {
-   flex-wrap: wrap
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdItemCount {
+   white-space: nowrap
```

#### 838. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9821-L9823` → after: `L10893-L10895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10893-L10895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10893-L10895) · [Before (L9821-L9823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9821-L9823)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   font-size: 26px;
-   line-height: 1.15
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 {
+   height: 250px;
+   width: 970px
```

#### 839. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9826-L9828` → after: `L10898-L10900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10898-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10898-L10900) · [Before (L9826-L9828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9826-L9828)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdLogoAndTitle .SuperRankAdTitle {
-   margin-block: -.1em;
-   padding-block: .1em
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
+   font-size: 20px;
+   padding: 4px 12px
```

#### 840. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9831-L9837` → after: `L10903-L10905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10903-L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10903-L10905) · [Before (L9831-L9837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9831-L9837)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdSubTitle {
-   align-items: flex-end;
-   display: flex;
-   flex-grow: 1;
-   font-size: 18px;
-   line-height: 1;
-   max-width: calc(100% - 216px)
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+   font-size: 48px;
+   padding: 24px 32px
```

#### 841. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9840-L9843` → after: `L10908-L10910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10908-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10908-L10910) · [Before (L9840-L9843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9840-L9843)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdButton {
-   display: flex;
-   flex-grow: 1;
-   justify-content: flex-end
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd728x90 {
+   height: 90px;
+   width: 728px
```

#### 842. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9846-L9848` → after: `L10913-L10915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10913-L10915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10913-L10915) · [Before (L9846-L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9846-L9848)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdButton .NewButton {
-   font-size: 24px;
-   width: 220px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd728x90 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
+   font-size: 32px;
+   padding: 0 26px
```

#### 843. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9851-L9862` → after: `L10918-L10920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10918-L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10918-L10920) · [Before (L9851-L9862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9851-L9862)

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
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 {
+   height: 50px;
+   width: 320px
```

#### 844. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9865-L9866` → after: `L10923-L10924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10923-L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10923-L10924) · [Before (L9865-L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9865-L9866)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd728x90 .SuperRankAdInner .SuperRankAdTable {
-   display: none
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay {
+   background: linear-gradient(-90deg, rgba(34, 40, 59, .75), rgba(34, 40, 59, .6))
```

#### 845. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9869-L9871` → after: `L10927-L10929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10927-L10929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10927-L10929) · [Before (L9869-L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9869-L9871)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 {
-   height: 250px;
-   width: 970px
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticPackAdCharacters,
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticShopBanner {
+   display: none
```

#### 846. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9874` → after: `L10932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10932) · [Before (L9874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9874)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner {
+ .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
```

#### 847. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9876-L9877` → after: `L10934-L10940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10934-L10940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10934-L10940) · [Before (L9876-L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9876-L9877)

```diff
-   flex-wrap: wrap;
-   gap: 16px 32px
+   box-sizing: border-box;
+   flex-direction: row;
+   font-size: 22px;
+   gap: 10px;
+   justify-content: space-between;
+   padding: 0 13px;
+   width: 100%
```

#### 848. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9880-L9882` → after: `L10943-L10952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10943-L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10943-L10952) · [Before (L9880-L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9880-L9882)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   font-size: 36px;
-   width: 260px
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

#### 849. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9885-L9889` → after: `L10955-L10965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10955-L10965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10955-L10965) · [Before (L9885-L9889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9885-L9889)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdSubTitle {
-   flex-grow: 1;
-   font-size: 20px;
-   text-align: start;
-   width: 260px
+ .CosmeticShopContainer {
+   align-items: center;
+   color: #fff;
+   display: flex;
+   flex: 1 0 1rem;
+   flex-direction: column;
+   gap: 1rem;
+   height: 100%;
+   justify-content: center;
+   overflow: hidden;
+   width: 100%
```

#### 850. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9892-L9894` → after: `L10968-L10969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10968-L10969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10968-L10969) · [Before (L9892-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9892-L9894)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdButton .NewButton {
-   font-size: 26px;
-   width: 260px
+ .CosmeticPackPrice {
+   font-weight: 800
```

#### 851. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9897` → after: `L10972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10972) · [Before (L9897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9897)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd970x250 .SuperRankAdInner .SuperRankAdTable {
+ .CosmeticShopSuperRankPromo {
```

#### 852. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9900-L9901` → after: `L10979-L10983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10979-L10983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10979-L10983) · [Before (L9900-L9901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9900-L9901)

```diff
-   flex-grow: 1;
-   font-size: 10px
+   flex-shrink: 0;
+   font-size: 1.8rem;
+   gap: .8rem;
+   justify-content: center;
+   padding: .6rem 2rem
```

#### 853. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9904-L9906` → after: `L10986-L10987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10986-L10987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10986-L10987) · [Before (L9904-L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9904-L9906)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 {
-   height: 704px;
-   width: 352px
+ .CosmeticShopSuperRankPromo .CosmeticShopSuperRankPromoIcon {
+   color: #ffb914
```

#### 854. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9909` → after: `L10990-L11008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR10990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L10990-L11008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L10990-L11008) · [Before (L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9909)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner {
+ .CosmeticShopSuperRankPromo .CosmeticShopSuperRankPromoText {
+   -webkit-background-clip: text;
+   background-clip: text;
+   background-image: linear-gradient(140deg, #ffb914 40%, #fcd373);
+   color: transparent;
+   font-weight: 800;
+   text-shadow: none
+ }
+ 
+ .CosmeticShopBanner {
+   background: #3c4b68;
+   border: .3rem solid #0f0f0f;
+   border-image: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d) 1;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   flex-shrink: 0
+ ... (3 more added lines; see GitHub link above)
```

#### 855. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9911-L9912` → after: `L11010-L11015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11010-L11015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11010-L11015) · [Before (L9911-L9912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9911-L9912)

```diff
-   flex-wrap: wrap;
-   gap: 8px
+   color: #fff;
+   display: flex;
+   font-size: 1.8rem;
+   gap: .8rem;
+   justify-content: center;
+   padding: .6rem 2rem
```

#### 856. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9915-L9917` → after: `L11018-L11022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11018-L11022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11018-L11022) · [Before (L9915-L9917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9915-L9917)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   font-size: 40px;
-   width: 288px
+ .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon {
+   background: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d);
+   background-clip: text;
+   -webkit-background-clip: text;
+   color: transparent
```

#### 857. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9920-L9923` → after: `L11025-L11028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11025-L11028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11025-L11028) · [Before (L9920-L9923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9920-L9923)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdSubTitle {
-   font-size: 22px;
-   text-align: start;
-   width: 288px
+ .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerSubtitle,
+ .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerTitle,
+ .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
+   font-weight: 800
```

#### 858. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9926-L9927` → after: `L11031-L11037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11031-L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11031-L11037) · [Before (L9926-L9927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9926-L9927)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable {
-   align-items: flex-start;
+ .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
+   color: #ffb914
+ }
+ 
+ .CosmeticShopBanner .CosmeticShopBannerContent {
+   align-items: center;
+   color: #fff;
```

#### 859. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9929-L9932` → after: `L11039-L11042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11039-L11042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11039-L11042) · [Before (L9929-L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9929-L9932)

```diff
-   flex-grow: 1;
-   font-size: 16px;
-   margin-top: 32px;
-   order: 3
+   font-size: 1.4rem;
+   justify-content: center;
+   padding: .4rem 2rem .6rem;
+   text-align: center
```

#### 860. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9935-L9939` → after: `L11045-L11046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11045-L11046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11045-L11046) · [Before (L9935-L9939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9935-L9939)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr td:first-of-type,
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr th,
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:first-of-type,
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:nth-of-type(2) {
-   display: none
+ .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentText {
+   max-width: 70rem
```

#### 861. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9942-L9943` → after: `L11049-L11053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11049-L11053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11049-L11053) · [Before (L9942-L9943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9942-L9943)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdTable tr:last-of-type .PerkContainer {
-   height: auto
+ .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink {
+   color: #ffb914;
+   font-weight: 800;
+   text-decoration: underline;
+   white-space: nowrap
```

#### 862. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9946-L9947` → after: `L11056-L11059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11056-L11059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11056-L11059) · [Before (L9946-L9947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9946-L9947)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdButton {
-   order: 4
+ @media(hover:hover) {
+   .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink:hover {
+     color: #fcd373
+   }
```

#### 863. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9950-L9952` → after: `L11062-L11063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11062-L11063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11062-L11063) · [Before (L9950-L9952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9950-L9952)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd300x600 .SuperRankAdInner .SuperRankAdButton .NewButton {
-   font-size: 32px;
-   width: 288px
+ .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink.pad-focused {
+   color: #fcd373
```

#### 864. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9955-L9957` → after: `L11066-L11071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11066-L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11066-L11071) · [Before (L9955-L9957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9955-L9957)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 {
-   height: 50px;
-   width: 320px
+ .CosmeticPackOwned {
+   background-color: #ffb914;
+   color: #fff;
+   font-size: 1.2rem;
+   padding: .1rem .5rem .2rem;
+   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
```

#### 865. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9960-L9965` → after: `L11074-L11076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11074-L11076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11074-L11076) · [Before (L9960-L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9960-L9965)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner {
-   align-items: flex-start;
-   column-gap: 8px;
-   flex-direction: row;
-   justify-content: space-around;
-   padding: 7px
+ .CosmeticPackOwned .svg-inline--fa,
+ .CosmeticPackOwned.svg-inline--fa {
+   paint-order: stroke fill
```

#### 866. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9968-L9970` → after: `L11079-L11084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11079-L11084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11079-L11084) · [Before (L9968-L9970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9968-L9970)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdLogoAndTitle {
-   flex-shrink: 0;
-   font-size: 22px
+ .CosmeticPackOwned .svg-inline--fa path:only-of-type,
+ .CosmeticPackOwned.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 867. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9973-L9975` → after: `L11087-L11092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11087-L11092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11087-L11092) · [Before (L9973-L9975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9973-L9975)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdSubTitle,
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdTable {
-   display: none
+ .CosmeticPackItemCount {
+   border: .2rem solid #ffb914;
+   color: #ffb914;
+   font-size: 1.2rem;
+   font-weight: 800;
+   padding: 0 .3rem .2rem
```

#### 868. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9978-L9979` → after: `L11095-L11103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11095-L11103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11095-L11103) · [Before (L9978-L9979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9978-L9979)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdButton {
-   align-self: center
+ .CosmeticShopDetail {
+   background-color: #303a59;
+   display: flex;
+   flex-direction: column;
+   font-size: 1.4rem;
+   height: 100%;
+   overflow: hidden;
+   position: relative;
+   width: 100%
```

#### 869. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9982-L9985` → after: `L11106-L11107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11106-L11107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11106-L11107) · [Before (L9982-L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9982-L9985)

```diff
- .AdBannerContainer .AdBanner.SuperRankAd.SuperRankAd320x50 .SuperRankAdInner .SuperRankAdButton .NewButton {
-   font-size: 16px;
-   min-height: 2.1em;
-   min-width: 125px
+ .CosmeticShopDetail>:not(.PackBackground) {
+   position: relative
```

#### 870. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9988-L9999` → after: `L11110-L11119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11110-L11119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11110-L11119) · [Before (L9988-L9999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L9988-L9999)

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
+ .CosmeticShopDetail .CosmeticShopDetailHeader {
+   align-items: center;
+   -webkit-backdrop-filter: blur(.1rem);
+   backdrop-filter: blur(.1rem);
+   background-color: #394980;
+   display: flex;
+   flex-shrink: 0;
+   gap: 1rem;
+   padding: .6rem 1rem;
+   z-index: 1
```

#### 871. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10002-L10007` → after: `L11122-L11123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11122-L11123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11122-L11123) · [Before (L10002-L10007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10002-L10007)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd {
-   background-color: rgba(57, 73, 128, .4);
-   border-color: #394980;
-   cursor: pointer;
-   overflow: visible;
-   transition: transform .15s, border-color .15s
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide {
+   width: 15rem
```

#### 872. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10010-L10013` → after: `L11126-L11129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11126-L11129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11126-L11129) · [Before (L10010-L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10010-L10013)

```diff
- @media(hover:hover) {
-   .AdBannerContainer .AdBanner.CosmeticPackAd:hover {
-     border-color: #b6830e
-   }
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailBackButton {
+   font-size: 2rem;
+   position: relative
+ }
```

#### 873. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10015-L10016` → after: `L11131-L11135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11131-L11135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11131-L11135) · [Before (L10015-L10016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10015-L10016)

```diff
-   .AdBannerContainer .AdBanner.CosmeticPackAd:hover .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
-     transform: rotate(90deg) translateY(-.2em)
+ @media(pointer:coarse) {
+   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailBackButton:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
```

#### 874. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10020-L10021` → after: `L11139-L11144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11139-L11144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11139-L11144) · [Before (L10020-L10021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10020-L10021)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.pad-focused {
-   border-color: #b6830e
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea {
+   align-items: center;
+   display: flex;
+   flex-grow: 1;
+   gap: 1rem;
+   justify-content: center
```

#### 875. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10024-L10025` → after: `L11147-L11151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11147-L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11147-L11151) · [Before (L10024-L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10024-L10025)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.pad-focused .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
-   transform: rotate(90deg) translateY(-.2em)
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTitle {
+   color: #ffb914;
+   font-size: 3rem;
+   font-weight: 800;
+   text-align: center
```

#### 876. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10028-L10036` → after: `L11154-L11156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11154-L11156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11154-L11156) · [Before (L10028-L10036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10028-L10036)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay {
-   background: linear-gradient(-90deg, rgba(34, 40, 59, .9), transparent);
-   bottom: 0;
-   display: flex;
-   justify-content: center;
-   left: 0;
-   position: absolute;
-   right: 0;
-   top: 0
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTier {
+   font-size: 1.5rem;
+   margin-top: .3rem
```

#### 877. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10039` → after: `L11159-L11163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11159-L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11159-L11163) · [Before (L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10039)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner {
+ .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticPackItemCount {
+   margin-top: .3rem
+ }
+ 
+ .CosmeticShopDetail .CosmeticShopBanner {
```

#### 878. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10044-L10047` → after: `L11167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11167) · [Before (L10044-L10047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10044-L10047)

```diff
-   left: 0;
-   position: absolute;
-   right: 0;
-   z-index: 3
+   position: relative
```

#### 879. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10050-L10053` → after: `L11170-L11172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11170-L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11170-L11172) · [Before (L10050-L10053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10050-L10053)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
-   font-size: 14px;
-   gap: .4em;
-   padding: 2px 8px;
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader {
+   font-size: 1.2rem;
+   padding: .3rem .5rem;
```

#### 880. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10057-L10058` → after: `L11176-L11177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11176-L11177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11176-L11177) · [Before (L10057-L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10057-L10058)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa,
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa {
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa,
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa {
```

#### 881. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10062-L10063` → after: `L11181-L11182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11181-L11182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11181-L11182) · [Before (L10062-L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10062-L10063)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa path:only-of-type,
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa path:only-of-type {
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa path:only-of-type,
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa path:only-of-type {
```

#### 882. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10070-L10071` → after: `L11189-L11190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11189-L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11189-L11190) · [Before (L10070-L10071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10070-L10071)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon,
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon,
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
```

#### 883. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10075` → after: `L11194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11194) · [Before (L10075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10075)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerContent {
+ .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerContent {
```

#### 884. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10079-L10080` → after: `L11198-L11200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11198-L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11198-L11200) · [Before (L10079-L10080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10079-L10080)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdCharacters {
-   align-items: center;
+ .CosmeticShopDetail .CosmeticShopDetailBody {
+   align-items: stretch;
+   box-sizing: border-box;
```

#### 885. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10082-L10086` → after: `L11202-L11205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11202-L11205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11202-L11205) · [Before (L10082-L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10082-L10086)

```diff
-   flex-grow: 1;
-   gap: 10px;
-   height: 100%;
-   justify-content: space-around;
-   min-width: 0
+   flex: 1 0 1rem;
+   min-height: 0;
+   padding: 0 2rem;
+   width: 100%
```

#### 886. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10089-L10092` → after: `L11208-L11214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11208-L11214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11208-L11214) · [Before (L10089-L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10089-L10092)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdCharacters .CosmeticPackAdCharacterPreview {
-   height: 100%;
-   min-width: 0;
-   object-fit: contain
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea {
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   overflow-y: auto;
+   padding: 1rem;
+   width: 46rem
```

#### 887. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10095-L10096` → after: `L11217-L11222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11217-L11222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11217-L11222) · [Before (L10095-L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10095-L10096)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter {
-   align-items: flex-end;
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailTypeSection {
+   width: 100%
+ }
+ 
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacters {
+   align-items: center;
```

#### 888. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10098-L10104` → after: `L11224-L11227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11224-L11227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11224-L11227) · [Before (L10098-L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10098-L10104)

```diff
-   flex-direction: column;
-   flex-shrink: 0;
-   font-size: 35px;
-   gap: .3em;
-   justify-content: center;
-   padding: 16px;
-   z-index: 2
+   flex-wrap: wrap;
+   gap: .8rem;
+   justify-content: space-between;
+   padding: .5rem 0
```

#### 889. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10107` → after: `L11230-L11261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11230-L11261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11230-L11261) · [Before (L10107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10107)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard {
+   border: .2rem solid transparent;
+   cursor: pointer;
+   padding: .5rem;
+   transition: transform .15s, border-color .15s, background-color .15s
+ }
+ 
+ @media(hover:hover) {
+   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard:hover {
+     transform: scale(1.05)
+   }
+ }
+ 
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard.pad-focused {
+   transform: scale(1.05)
+ }
+ ... (16 more added lines; see GitHub link above)
```

#### 890. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10112-L10114` → after: `L11268-L11270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11268-L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11268-L11270) · [Before (L10112-L10114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10112-L10114)

```diff
-   gap: .2em;
-   overflow: visible;
-   width: 100%
+   gap: .5rem;
+   margin-bottom: .3rem;
+   padding: .4rem .2rem .2rem
```

#### 891. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10117-L10119` → after: `L11273-L11275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11273-L11275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11273-L11275) · [Before (L10117-L10119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10117-L10119)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdName {
-   font-size: 1em;
-   overflow: visible
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailTypeLabel .svg-inline--fa {
+   font-size: 1.2rem;
+   opacity: .7
```

#### 892. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10122` → after: `L11278-L11279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11278-L11279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11278-L11279) · [Before (L10122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10122)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdItemCount {
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup {
+   grid-gap: .5rem;
```

#### 893. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10124-L10125` → after: `L11281-L11289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11281-L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11281-L11289) · [Before (L10124-L10125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10124-L10125)

```diff
-   border: 3px solid #ffb914;
-   color: #ffb914;
+   display: grid;
+   gap: .5rem;
+   grid-template-columns: repeat(6, 1fr);
+   padding: .3rem 0;
+   width: 100%
+ }
+ 
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell {
+   align-items: flex-start;
```

#### 894. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10127-L10130` → after: `L11291-L11293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11291-L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11291-L11293) · [Before (L10127-L10130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10127-L10130)

```diff
-   font-weight: 800;
-   justify-content: center;
-   min-height: .6em;
-   padding: 0 4px
+   flex-wrap: wrap;
+   justify-content: flex-start;
+   position: relative
```

#### 895. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10133-L10134` → after: `L11296-L11301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11296-L11301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11296-L11301) · [Before (L10133-L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10133-L10134)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdItemCount .CosmeticPackAdItemCountInner {
-   font-size: .4em
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption {
+   aspect-ratio: 1/1;
+   box-sizing: border-box;
+   cursor: pointer;
+   transition: transform .15s;
+   width: 33%
```

#### 896. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10137` → after: `L11304-L11324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11304-L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11304-L11324) · [Before (L10137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10137)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta {
+ @media(hover:hover) {
+   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption:hover {
+     transform: scale(1.1)
+   }
+ }
+ 
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption.pad-focused {
+   transform: scale(1.1)
+ }
+ 
+ @media(hover:none) {
+   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption:active {
+     transform: scale(1.1)
+   }
+ }
+ 
+ ... (5 more added lines; see GitHub link above)
```

#### 897. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10139` → after: `L11326-L11330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11326-L11330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11326-L11330) · [Before (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10139)

```diff
-   color: #ffb914;
+   -webkit-backdrop-filter: blur(.1rem);
+   backdrop-filter: blur(.1rem);
+   border: .2rem solid transparent;
+   border-radius: 0;
+   cursor: pointer;
```

#### 898. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10141-L10144` → after: `L11332-L11336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11332-L11336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11332-L11336) · [Before (L10141-L10144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10141-L10144)

```diff
-   font-size: .5em;
-   font-weight: 800;
-   gap: .2em;
-   white-space: nowrap
+   height: 7rem;
+   justify-content: center;
+   position: relative;
+   transition: transform .1s, background-color .1s, border-color .1s;
+   width: 7rem
```

#### 899. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10147-L10149` → after: `L11339-L11342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11339-L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11339-L11342) · [Before (L10147-L10149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10147-L10149)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdCta .fa-arrow-up {
-   transform: rotate(90deg);
-   transition: transform .2s
+ @media(hover:hover) {
+   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper:hover {
+     transform: scale(1.05)
+   }
```

#### 900. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10152-L10155` → after: `L11345-L11377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11345-L11377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11345-L11377) · [Before (L10152-L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10152-L10155)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic {
-   border-color: rgba(110, 170, 90, .6);
-   box-shadow: 0 0 19px rgba(110, 170, 90, .3), inset 0 0 8px rgba(110, 170, 90, .1);
-   transition: transform .15s, border-color .15s, box-shadow .3s
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.pad-focused {
+   transform: scale(1.05)
+ }
+ 
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.TryingOnCharCustomPartWrapper {
+   background-color: rgba(255, 185, 20, .15);
+   border-color: #ffb914;
+   border-style: dashed
+ }
+ 
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.CharCustomPartWrapperProfileEffect {
+   box-sizing: border-box;
+   height: 4rem;
+   padding: .3rem;
+   width: 16rem
+ }
+ ... (17 more added lines; see GitHub link above)
```

#### 901. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10158-L10162` → after: `L11380-L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11380-L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11380-L11383) · [Before (L10158-L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10158-L10162)

```diff
- @media(hover:hover) {
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic:hover {
-     border-color: #6eaa5a;
-     box-shadow: 0 0 32px rgba(110, 170, 90, .5), inset 0 0 8px rgba(110, 170, 90, .15)
-   }
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart .EmoteCustomPartLabel {
+   color: #fcd373;
+   font-size: 1rem;
+   text-align: center
```

#### 902. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10165-L10167` → after: `L11386-L11388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11386-L11388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11386-L11388) · [Before (L10165-L10167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10165-L10167)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic.pad-focused {
-   border-color: #6eaa5a;
-   box-shadow: 0 0 32px rgba(110, 170, 90, .5), inset 0 0 8px rgba(110, 170, 90, .15)
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper .CharCustomPart {
+   height: 85%;
+   width: 85%
```

#### 903. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10170-L10171` → after: `L11391-L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11391-L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11391-L11393) · [Before (L10170-L10171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10170-L10171)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic .CosmeticPackAdOverlay {
-   z-index: 2
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper .CharCustomPart.CharCustomProfileEffect {
+   height: 100%;
+   width: 100%
```

#### 904. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10174-L10175` → after: `L11396-L11403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11396-L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11396-L11403) · [Before (L10174-L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10174-L10175)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdEpic .CosmeticPackAdOverlay .CosmeticPackAdTitle {
-   color: #8cdc78
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   flex-grow: 1;
+   height: 100%;
+   min-width: 12rem;
+   position: relative
```

#### 905. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10178-L10183` → after: `L11406-L11407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11406-L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11406-L11407) · [Before (L10178-L10183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10178-L10183)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary {
-   border-style: solid;
-   border-width: 4px;
-   box-shadow: 0 0 16px rgba(95, 65, 120, .5), 0 0 40px rgba(50, 90, 95, .3), inset 0 0 13px rgba(95, 65, 120, .15);
-   overflow: visible;
-   transition: box-shadow .3s
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea:focus {
+   outline: none
```

#### 906. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10186-L10189` → after: `L11410-L11418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11410-L11418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11410-L11418) · [Before (L10186-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10186-L10189)

```diff
- @media(hover:hover) {
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary:hover {
-     box-shadow: 0 0 24px rgba(95, 65, 120, .7), 0 0 56px rgba(50, 90, 95, .5), inset 0 0 16px rgba(95, 65, 120, .2)
-   }
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewLoading {
+   align-items: center;
+   box-sizing: border-box;
+   display: flex;
+   flex-grow: 1;
+   font-size: 4rem;
+   height: 100%;
+   justify-content: center;
+   width: 100%
```

#### 907. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10192-L10193` → after: `L11421-L11427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11421-L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11421-L11427) · [Before (L10192-L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10192-L10193)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary.pad-focused {
-   box-shadow: 0 0 24px rgba(95, 65, 120, .7), 0 0 56px rgba(50, 90, 95, .5), inset 0 0 16px rgba(95, 65, 120, .2)
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CharCustomisationPreview {
+   align-items: center;
+   display: flex;
+   flex-grow: 1;
+   height: 100%;
+   justify-content: center;
+   width: 100%
```

#### 908. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10196-L10200` → after: `L11430-L11433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11430-L11433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11430-L11433) · [Before (L10196-L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10196-L10200)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle {
-   inset: 0;
-   pointer-events: none;
-   position: absolute;
-   z-index: 3
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CharCustomisationPreview .CharCustomisationPreviewCanvas {
+   height: 100%;
+   outline: none;
+   width: 100%
```

#### 909. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10203-L10207` → after: `L11436-L11437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11436-L11437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11436-L11437) · [Before (L10203-L10207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10203-L10207)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div {
-   animation: cosmeticPackAdBorderFirst 4s linear infinite;
-   inset: 0;
-   outline: 4px solid #5f4178;
-   position: absolute
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea.CosmeticShopDetailPreviewAreaStill .CharCustomisationPreview {
+   visibility: hidden
```

#### 910. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10210-L10212` → after: `L11440-L11449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11440-L11449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11440-L11449) · [Before (L10210-L10212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10210-L10212)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div:nth-child(2) {
-   animation-name: premiumBorderSecond;
-   outline-color: #325a5f
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewNo3d {
+   align-content: center;
+   box-sizing: border-box;
+   display: flex;
+   flex-wrap: wrap;
+   gap: 1rem;
+   height: 100%;
+   justify-content: center;
+   padding: 1rem;
+   width: 100%
```

#### 911. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10215-L10217` → after: `L11452-L11455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11452-L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11452-L11455) · [Before (L10215-L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10215-L10217)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdBorderCycle>div:nth-child(3) {
-   animation-name: premiumBorderThird;
-   outline-color: #ffb914
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewNo3d img {
+   height: 8rem;
+   object-fit: contain;
+   width: 8rem
```

#### 912. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10220-L10223` → after: `L11458-L11461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11458-L11461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11458-L11461) · [Before (L10220-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10220-L10223)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary:after {
-   animation: cosmeticPackAdStarTwinkle 3s ease-in-out infinite alternate;
-   background-image: radial-gradient(1px 1px at 20% 30%, hsla(0, 0%, 100%, .8) 0, transparent 100%), radial-gradient(1px 1px at 40% 70%, hsla(0, 0%, 100%, .6) 0, transparent 100%), radial-gradient(1px 1px at 60% 15%, hsla(0, 0%, 100%, .7) 0, transparent 100%), radial-gradient(1px  … [truncated]
-   content: "";
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill {
+   background-position: center 87.2%;
+   background-repeat: no-repeat;
+   background-size: auto 76.5%;
```

#### 913. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10227` → after: `L11465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11465) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10227)

```diff
-   z-index: 1
+   transition: opacity ease-out
```

#### 914. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10230-L10231` → after: `L11468-L11469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11468-L11469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11468-L11469) · [Before (L10230-L10231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10230-L10231)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay {
-   z-index: 2
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill.CosmeticShopDetailPreviewStillCamera {
+   background-size: auto 100%
```

#### 915. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10234-L10235` → after: `L11472-L11473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11472-L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11472-L11473) · [Before (L10234-L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10234-L10235)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
-   -webkit-text-fill-color: transparent
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill.CosmeticShopDetailPreviewStillFading {
+   opacity: 0
```

#### 916. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10238-L10243` → after: `L11476-L11478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11476-L11478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11476-L11478) · [Before (L10238-L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10238-L10243)

```diff
- @supports(-webkit-mask-clip:text) and (overflow-x:clip) {
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
-     margin-inline-end: auto;
-     min-width: min-content;
-     overflow-x: clip;
-     position: relative
+ @media(prefers-reduced-motion:reduce) {
+   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill {
+     transition: none
```

#### 917. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10246-L10250` → after: `L11482-L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11482-L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11482-L11498) · [Before (L10246-L10250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10246-L10250)

```diff
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdItemCountInner,
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdName {
-     -webkit-mask-clip: text;
-     -webkit-mask-image: linear-gradient(#000, #000)
-   }
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue {
+   align-items: center;
+   background-color: rgba(26, 31, 46, .6);
+   border: none;
+   color: #fff;
+   cursor: pointer;
+   display: flex;
+   font: inherit;
+   font-size: 1.4rem;
+   gap: .5rem;
+   inset-block-end: 1rem;
+   inset-inline-end: 1rem;
+   min-height: 44px;
+   padding: .5rem 1.2rem;
+   position: absolute;
+   white-space: nowrap
+ ... (1 more added lines; see GitHub link above)
```

#### 918. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10252-L10263` → after: `L11500-L11502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11500-L11502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11500-L11502) · [Before (L10252-L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10252-L10263)

```diff
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdItemCountInner:before,
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdName:before {
-     animation: cosmeticPackAdNameShimmer 3s linear infinite;
-     background: linear-gradient(90deg, #b388ff, #64ffda, #ffb914, #b388ff) 25% 0/42.85714% 100%;
-     bottom: 0;
-     content: "";
-     left: -600%;
-     pointer-events: none;
-     position: absolute;
-     top: 0;
-     width: 700%
-   }
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue:focus-visible {
+   outline: .2rem solid #fff;
+   outline-offset: .2rem
```

#### 919. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10266-L10272` → after: `L11505-L11506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11505-L11506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11505-L11506) · [Before (L10266-L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10266-L10272)

```diff
- @supports not ((-webkit-mask-clip:text) and (overflow-x:clip)) {
-   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
-     animation: cosmeticPackAdNameShimmerPosition 3s linear infinite;
-     background: linear-gradient(90deg, #b388ff, #64ffda, #ffb914, #b388ff) 0 0/300% 100%;
-     -webkit-background-clip: text;
-     background-clip: text
-   }
+ .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue.CosmeticShopDetailPreview3dCueLoading {
+   cursor: default
```

#### 920. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10275-L10283` → after: `L11509-L11518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11509-L11518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11509-L11518) · [Before (L10275-L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10275-L10283)

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

#### 921. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10286-L10290` → after: `L11521-L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11521-L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11521-L11526) · [Before (L10286-L10290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10286-L10290)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticShopBannerSubtitle,
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CountdownTime,
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticShopBannerSubtitle,
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CountdownTime {
-   display: none
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   font-size: 1.4rem;
+   gap: .4rem
```

#### 922. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10293-L10295` → after: `L11529-L11530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11529-L11530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11529-L11530) · [Before (L10293-L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10293-L10295)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 {
-   height: 250px;
-   width: 300px
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady .StoreCta .NewButton {
+   font-size: 1.8rem
```

#### 923. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10298-L10299` → after: `L11533-L11534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11533-L11534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11533-L11534) · [Before (L10298-L10299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10298-L10299)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay {
-   flex-direction: column
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady .CosmeticShopGiftError {
+   color: #e34f4f
```

#### 924. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10302-L10304` → after: `L11537-L11542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11537-L11542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11537-L11542) · [Before (L10302-L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10302-L10304)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
-   font-size: 29px;
-   padding: 10px 13px
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow {
+   align-items: center;
+   box-sizing: border-box;
+   display: flex;
+   max-width: 100%;
+   padding: 0 1rem
```

#### 925. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10307-L10308` → after: `L11545-L11550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11545-L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11545-L11550) · [Before (L10307-L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10307-L10308)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
-   justify-content: flex-end
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .CosmeticShopGiftRecipientInput {
+   box-sizing: border-box;
+   flex-grow: 1;
+   font-size: inherit;
+   min-width: 0;
+   padding: .4rem 0
```

#### 926. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10311-L10313` → after: `L11553-L11558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11553-L11558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11553-L11558) · [Before (L10311-L10313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10311-L10313)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 {
-   height: 600px;
-   width: 300px
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton {
+   animation: buyButtonPulse 2s ease-in-out infinite;
+   flex-shrink: 0;
+   font-size: 1.6rem;
+   font-weight: 800;
+   margin-left: 1.5rem
```

#### 927. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10316-L10317` → after: `L11561-L11562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11561-L11562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11561-L11562) · [Before (L10316-L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10316-L10317)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay {
-   flex-direction: column
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton:before {
+   animation: none
```

#### 928. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10320-L10322` → after: `L11565-L11566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11565-L11566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11565-L11566) · [Before (L10320-L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10320-L10322)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
-   font-size: 16px;
-   padding: 3px 10px
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton .ButtonBody {
+   padding: .5rem 2rem
```

#### 929. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10325-L10327` → after: `L11569-L11572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11569-L11572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11569-L11572) · [Before (L10325-L10327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10325-L10327)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdCharacters {
-   flex-wrap: wrap;
-   min-height: 0
+ .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton {
+   animation: buyButtonPulse 2s ease-in-out infinite;
+   font-size: 2rem;
+   font-weight: 800
```

#### 930. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10330-L10332` → after: `L11575-L11576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11575-L11576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11575-L11576) · [Before (L10330-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10330-L10332)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdCharacters .CosmeticPackAdCharacterPreview {
-   height: min(200px, 50% - 5px);
-   width: 130px
+ .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton:before {
+   animation: none
```

#### 931. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10335-L10337` → after: `L11579-L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11579-L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11579-L11580) · [Before (L10335-L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10335-L10337)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
-   font-size: 42px;
-   padding: 22px 19px
+ .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton .ButtonBody {
+   padding: .7rem 4rem
```

#### 932. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10340-L10341` → after: `L11583-L11586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11583-L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11583-L11586) · [Before (L10340-L10341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10340-L10341)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle {
-   flex-wrap: wrap
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopPurchaseOutcome {
+   color: #1dd06d;
+   font-size: 1.3rem;
+   margin-top: .5rem
```

#### 933. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10344-L10345` → after: `L11589-L11590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11589-L11590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11589-L11590) · [Before (L10344-L10345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10344-L10345)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd300x600 .CosmeticPackAdOverlay .CosmeticPackAdFooter .CosmeticPackAdTitle .CosmeticPackAdItemCount {
-   white-space: nowrap
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopPurchaseOutcome.CosmeticShopPurchaseOutcomeFailed {
+   color: #ff8a80
```

#### 934. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10348-L10350` → after: `L11593-L11598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11593-L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11593-L11598) · [Before (L10348-L10350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10348-L10350)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 {
-   height: 250px;
-   width: 970px
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle {
+   color: #ffb914;
+   cursor: pointer;
+   font-size: 1.3rem;
+   margin-top: .5rem;
+   transition: opacity .15s
```

#### 935. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10353-L10355` → after: `L11601-L11604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11601-L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11601-L11604) · [Before (L10353-L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10353-L10355)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 .CosmeticPackAdOverlay .CosmeticShopBanner .CosmeticShopBannerHeader {
-   font-size: 20px;
-   padding: 4px 12px
+ @media(hover:hover) {
+   .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle:hover {
+     opacity: .8
+   }
```

#### 936. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10358-L10360` → after: `L11607-L11608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11607-L11608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11607-L11608) · [Before (L10358-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10358-L10360)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd970x250 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
-   font-size: 48px;
-   padding: 24px 32px
+ .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle.pad-focused {
+   opacity: .8
```

#### 937. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10363-L10365` → after: `L11611-L11614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11611-L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11611-L11614) · [Before (L10363-L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10363-L10365)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd728x90 {
-   height: 90px;
-   width: 728px
+ @media(hover:none) {
+   .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle:active {
+     opacity: .8
+   }
```

#### 938. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10368-L10370` → after: `L11617-L11618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11617-L11618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11617-L11618) · [Before (L10368-L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10368-L10370)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd728x90 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
-   font-size: 32px;
-   padding: 0 26px
+ .CosmeticShopDetail .CosmeticShopDetailCtaHighlight .RainbowButton {
+   animation: loginResumeHighlight .8s ease-in-out 3
```

#### 939. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10373-L10375` → after: `L11621-L11622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11621-L11622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11621-L11622) · [Before (L10373-L10375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10373-L10375)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 {
-   height: 50px;
-   width: 320px
+ .CosmeticShopDetail .CosmeticShopDetailCtaHighlight .RainbowButton:before {
+   animation: none
```

#### 940. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10378-L10379` → after: `L11625-L11629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11625-L11629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11625-L11629) · [Before (L10378-L10379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10378-L10379)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay {
-   background: linear-gradient(-90deg, rgba(34, 40, 59, .75), rgba(34, 40, 59, .6))
+ .CosmeticShopDetail .CosmeticShopPurchaseLabel {
+   align-items: center;
+   display: flex;
+   gap: .5rem;
+   justify-content: center
```

#### 941. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10382-L10384` → after: `L11632-L11639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11632-L11639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11632-L11639) · [Before (L10382-L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10382-L10384)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticPackAdCharacters,
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticShopBanner {
-   display: none
+ .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending {
+   background-color: rgba(26, 31, 46, .3);
+   display: inline-block;
+   height: .8em;
+   overflow: hidden;
+   position: relative;
+   vertical-align: middle;
+   width: 2em
```

#### 942. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10387-L10395` → after: `L11642-L11651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11642-L11651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11642-L11651) · [Before (L10387-L10395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10387-L10395)

```diff
- .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAd320x50 .CosmeticPackAdOverlay .CosmeticPackAdFooter {
-   align-items: center;
-   box-sizing: border-box;
-   flex-direction: row;
-   font-size: 22px;
-   gap: 10px;
-   justify-content: space-between;
-   padding: 0 13px;
-   width: 100%
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

#### 943. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10398` → after: `L11654-L11657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11654-L11657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11654-L11657) · [Before (L10398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10398)

```diff
- @keyframes buyButtonPulse {
+ .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending[data-off-screen]:after,
+ html[data-app-covered] .WholeAppWrapper .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending:after {
+   animation-play-state: paused
+ }
```

#### 944. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10400-L10402` → after: `L11659-L11663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11659-L11663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11659-L11663) · [Before (L10400-L10402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10400-L10402)

```diff
-   0%,
-   to {
-     transform: scale(1)
+ @media(prefers-reduced-motion:reduce) {
+   .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending {
+     background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
+     background-repeat: no-repeat;
+     background-size: 300% 100%
```

#### 945. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10405-L10406` → after: `L11666-L11667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11666-L11667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11666-L11667) · [Before (L10405-L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10405-L10406)

```diff
-   50% {
-     transform: scale(1.05)
+   .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending:after {
+     display: none
```

#### 946. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10410` → after: `L11671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11671) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10410)

```diff
- .CosmeticShopContainer {
+ .CosmeticShopDetail .CosmeticShopDetailHeaderCta {
```

#### 947. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10414-L10420` → after: `L11674-L11675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11674-L11675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11674-L11675) · [Before (L10414-L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10414-L10420)

```diff
-   flex: 1 0 1rem;
-   flex-direction: column;
-   gap: 1rem;
-   height: 100%;
-   justify-content: center;
-   overflow: hidden;
-   width: 100%
+   gap: .8rem;
+   justify-content: flex-end
```

#### 948. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10423` → after: `L11678-L11679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11678-L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11678-L11679) · [Before (L10423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10423)

```diff
- .CosmeticPackPrice {
+ .CosmeticShopDetail .CosmeticShopDetailHeaderCta>.RainbowButton {
+   font-size: 1.6rem;
```

#### 949. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10427-L10438` → after: `L11683-L11684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11683-L11684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11683-L11684) · [Before (L10427-L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10427-L10438)

```diff
- .CosmeticShopSuperRankPromo {
-   align-items: center;
-   background: #3c4b68;
-   border: 1px solid #ffb914;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   display: flex;
-   flex-shrink: 0;
-   font-size: 1.8rem;
-   gap: .8rem;
-   justify-content: center;
-   padding: .6rem 2rem
+ .CosmeticShopDetail .CosmeticShopDetailHeaderCta>.RainbowButton .ButtonBody {
+   padding: .4rem 1.2rem
```

#### 950. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10441-L10442` → after: `L11687-L11691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11687-L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11687-L11691) · [Before (L10441-L10442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10441-L10442)

```diff
- .CosmeticShopSuperRankPromo .CosmeticShopSuperRankPromoIcon {
-   color: #ffb914
+ .CosmeticShopDetail .CosmeticShopDetailHeaderCta .CosmeticShopGiftToggle {
+   color: #ffb914;
+   cursor: pointer;
+   font-size: 1.5rem;
+   white-space: nowrap
```

#### 951. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10445-L10452` → after: `L11694-L11697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11694-L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11694-L11697) · [Before (L10445-L10452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10445-L10452)

```diff
- .CosmeticShopSuperRankPromo .CosmeticShopSuperRankPromoText {
-   -webkit-background-clip: text;
-   background-clip: text;
-   background-image: linear-gradient(140deg, #ffb914 40%, #fcd373);
-   color: transparent;
-   font-weight: 800;
-   text-shadow: none
- }
+ @media(max-height:420px) {
+   .CosmeticShopDetail .CosmeticShopDetailHeader {
+     padding: .3rem .8rem
+   }
```

#### 952. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10454-L10460` → after: `L11699-L11715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11699-L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11699-L11715) · [Before (L10454-L10460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10454-L10460)

```diff
- .CosmeticShopBanner {
-   background: #3c4b68;
-   border: .3rem solid #0f0f0f;
-   border-image: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d) 1;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   flex-shrink: 0
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
+   }
+ 
+   .CosmeticShopDetail .CosmeticShopDetailFooter {
+     height: auto;
+     padding: .4rem 0
+ ... (1 more added lines; see GitHub link above)
```

#### 953. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10463-L10470` → after: `L11718-L11782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11718-L11782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11718-L11782) · [Before (L10463-L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10463-L10470)

```diff
- .CosmeticShopBanner .CosmeticShopBannerHeader {
-   align-items: center;
-   color: #fff;
-   display: flex;
-   font-size: 1.8rem;
-   gap: .8rem;
-   justify-content: center;
-   padding: .6rem 2rem
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

#### 954. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10473-L10477` → after: `L11785-L11788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11785-L11788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11785-L11788) · [Before (L10473-L10477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10473-L10477)

```diff
- .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon {
-   background: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d);
-   background-clip: text;
-   -webkit-background-clip: text;
-   color: transparent
+ .MiddleScreenPopupBackground .MiddleScreenPopup.PremiumCurrencyPurchasePopup {
+   box-sizing: border-box;
+   max-height: 100%;
+   overflow-y: auto
```

#### 955. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10480-L10483` → after: `L11791-L11796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11791-L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11791-L11796) · [Before (L10480-L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10480-L10483)

```diff
- .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerSubtitle,
- .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerTitle,
- .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
-   font-weight: 800
+ @media(orientation:portrait)and (max-width:600px) {
+   .MiddleScreenPopupBackground .MiddleScreenPopup.PremiumCurrencyPurchasePopup {
+     box-sizing: border-box;
+     max-width: none;
+     width: calc(100vw - 2rem)
+   }
```

#### 956. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10486-L10487` → after: `L11799-L11804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11799-L11804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11799-L11804) · [Before (L10486-L10487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10486-L10487)

```diff
- .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
-   color: #ffb914
+ .PremiumCurrencyPurchase {
+   display: flex;
+   flex-direction: column;
+   gap: 1rem;
+   max-width: 100%;
+   width: 40rem
```

#### 957. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10490-L10496` → after: `L11807-L11809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11807-L11809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11807-L11809) · [Before (L10490-L10496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10490-L10496)

```diff
- .CosmeticShopBanner .CosmeticShopBannerContent {
-   align-items: center;
-   color: #fff;
-   display: flex;
-   font-size: 1.4rem;
-   justify-content: center;
-   padding: .4rem 2rem .6rem;
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTitle {
+   font-size: 2rem;
+   overflow-wrap: anywhere;
```

#### 958. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10500-L10501` → after: `L11813-L11814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11813-L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11813-L11814) · [Before (L10500-L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10500-L10501)

```diff
- .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentText {
-   max-width: 70rem
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTitle.PremiumCurrencyPurchaseTitleGift {
+   color: #85baff
```

#### 959. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10504-L10508` → after: `L11817-L11823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11817-L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11817-L11823) · [Before (L10504-L10508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10504-L10508)

```diff
- .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink {
-   color: #ffb914;
-   font-weight: 800;
-   text-decoration: underline;
-   white-space: nowrap
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCard {
+   align-items: center;
+   background: #3c4b68;
+   display: flex;
+   gap: 1.2rem;
+   min-height: 6.4rem;
+   padding: .8rem
```

#### 960. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10511-L10514` → after: `L11826-L11835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11826-L11835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11826-L11835) · [Before (L10511-L10514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10511-L10514)

```diff
- @media(hover:hover) {
-   .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink:hover {
-     color: #fcd373
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

#### 961. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10517-L10518` → after: `L11838-L11845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11838-L11845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11838-L11845) · [Before (L10517-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10517-L10518)

```diff
- .CosmeticShopBanner .CosmeticShopBannerContent .CosmeticShopBannerContentLink.pad-focused {
-   color: #fcd373
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon img {
+   -ms-interpolation-mode: nearest-neighbor;
+   height: 92%;
+   image-rendering: optimizeSpeed;
+   image-rendering: -o-crisp-edges;
+   image-rendering: pixelated;
+   image-rendering: optimize-contrast;
+   position: relative
```

#### 962. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10521-L10526` → after: `L11848-L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11848-L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11848-L11850) · [Before (L10521-L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10521-L10526)

```diff
- .CosmeticPackOwned {
-   background-color: #ffb914;
-   color: #fff;
-   font-size: 1.2rem;
-   padding: .1rem .5rem .2rem;
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconSuperRank {
+   align-items: center;
+   background: radial-gradient(circle at 78% 40%, rgba(255, 214, 102, .5), transparent 55%), linear-gradient(135deg, #3d2a00, #6e4800 50%, #745309)
```

#### 963. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10529-L10531` → after: `L11853-L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11853-L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11853-L11854) · [Before (L10529-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10529-L10531)

```diff
- .CosmeticPackOwned .svg-inline--fa,
- .CosmeticPackOwned.svg-inline--fa {
-   paint-order: stroke fill
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconSuperRank img {
+   height: 80%
```

#### 964. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10534-L10539` → after: `L11857-L11859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11857-L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11857-L11859) · [Before (L10534-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10534-L10539)

```diff
- .CosmeticPackOwned .svg-inline--fa path:only-of-type,
- .CosmeticPackOwned.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconGems {
+   align-items: center;
+   background: none
```

#### 965. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10542-L10547` → after: `L11862-L11864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11862-L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11862-L11864) · [Before (L10542-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10542-L10547)

```diff
- .CosmeticPackItemCount {
-   border: .2rem solid #ffb914;
-   color: #ffb914;
-   font-size: 1.2rem;
-   font-weight: 800;
-   padding: 0 .3rem .2rem
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconGems .PremiumCurrencyIcon {
+   height: 5rem;
+   width: 5rem
```

#### 966. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10550-L10551` → after: `L11867-L11869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11867-L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11867-L11869) · [Before (L10550-L10551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10550-L10551)

```diff
- .CosmeticShopDetail {
-   background-color: #303a59;
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCardText {
+   align-items: flex-start;
+   color: #cfcfcf;
```

#### 967. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10555-L10558` → after: `L11874-L11876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11874-L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11874-L11876) · [Before (L10555-L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10555-L10558)

```diff
-   height: 100%;
-   overflow: hidden;
-   position: relative;
-   width: 100%
+   gap: .2rem;
+   min-width: 0;
+   text-align: left
```

#### 968. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10561-L10562` → after: `L11879-L11885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11879-L11885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11879-L11885) · [Before (L10561-L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10561-L10562)

```diff
- .CosmeticShopDetail>:not(.PackBackground) {
-   position: relative
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCardText b {
+   color: #fff;
+   font-size: 1.8rem;
+   max-width: 100%;
+   overflow: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 969. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10565-L10574` → after: `L11888-L11889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11888-L11889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11888-L11889) · [Before (L10565-L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10565-L10574)

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
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchasePerks {
+   justify-content: flex-start
```

#### 970. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10577-L10578` → after: `L11892-L11896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11892-L11896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11892-L11896) · [Before (L10577-L10578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10577-L10578)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide {
-   width: 15rem
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBanner {
+   font-size: 1.5rem;
+   font-weight: 800;
+   padding: .6rem 1rem;
+   text-align: left
```

#### 971. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10581-L10583` → after: `L11899-L11902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11899-L11902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11899-L11902) · [Before (L10581-L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10581-L10583)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailBackButton {
-   font-size: 2rem;
-   position: relative
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBanner.PremiumCurrencyPurchaseBannerWarning {
+   background: rgba(255, 185, 20, .15);
+   border: .1rem solid #ffb914;
+   color: #fcd373
```

#### 972. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10586-L10591` → after: `L11905-L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11905-L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11905-L11907) · [Before (L10586-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10586-L10591)

```diff
- @media(pointer:coarse) {
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailBackButton:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
-   }
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBonus {
+   color: #1dd06d;
+   white-space: nowrap
```

#### 973. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10594-L10598` → after: `L11910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11910) · [Before (L10594-L10598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10594-L10598)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea {
-   align-items: center;
-   display: flex;
-   flex-grow: 1;
-   gap: 1rem;
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUpLoading {
```

#### 974. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10602-L10611` → after: `L11914-L11915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11914-L11915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11914-L11915) · [Before (L10602-L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10602-L10611)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTitle {
-   color: #ffb914;
-   font-size: 3rem;
-   font-weight: 800;
-   text-align: center
- }
- 
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTier {
-   font-size: 1.5rem;
-   margin-top: .3rem
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp {
+   flex-wrap: wrap
```

#### 975. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10614-L10615` → after: `L11918-L11919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11918-L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11918-L11919) · [Before (L10614-L10615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10614-L10615)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticPackItemCount {
-   margin-top: .3rem
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseCardText {
+   flex-basis: auto
```

#### 976. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10618-L10622` → after: `L11922-L11924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11922-L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11922-L11924) · [Before (L10618-L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10618-L10622)

```diff
- .CosmeticShopDetail .CosmeticShopBanner {
-   background-color: #ffb914;
-   border-width: 0;
-   box-shadow: none;
-   position: relative
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseTopUpNeed {
+   min-width: 100%;
+   width: 0
```

#### 977. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10625-L10628` → after: `L11927-L11930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11927-L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11927-L11930) · [Before (L10625-L10628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10625-L10628)

```diff
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader {
-   font-size: 1.2rem;
-   padding: .3rem .5rem;
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseTopUpButton {
+   flex-shrink: 0;
+   font-size: 1.6rem;
+   margin-left: auto
```

#### 978. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10631-L10633` → after: `L11933-L11935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11933-L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11933-L11935) · [Before (L10631-L10633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10631-L10633)

```diff
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa,
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa {
-   paint-order: stroke fill
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseNotice {
+   font-size: 1.4rem;
+   text-align: inherit
```

#### 979. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10636-L10641` → after: `L11938-L11943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11938-L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11938-L11943) · [Before (L10636-L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10636-L10641)

```diff
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .svg-inline--fa path:only-of-type,
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseButtons {
+   display: flex;
+   font-size: 1.8rem;
+   gap: 1rem;
+   justify-content: space-between;
+   margin-top: .4rem
```

#### 980. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10644-L10646` → after: `L11946-L11952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11946-L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11946-L11952) · [Before (L10644-L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10644-L10646)

```diff
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .CosmeticShopBannerIcon,
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerHeader .CountdownTime {
-   color: #fff
+ .PremiumCurrencyPurchase.PremiumCurrencyPurchaseGifting .PremiumCurrencyPurchaseButtons {
+   background: #303a59;
+   bottom: -1.5rem;
+   margin: 0 -1.5rem -1.5rem;
+   padding: 1rem 1.5rem 1.5rem;
+   position: sticky;
+   z-index: 1
```

#### 981. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10649-L10650` → after: `L11955-L11956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11955-L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11955-L11956) · [Before (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10649-L10650)

```diff
- .CosmeticShopDetail .CosmeticShopBanner .CosmeticShopBannerContent {
-   display: none
+ .PremiumCurrencyPurchase.PremiumCurrencyPurchaseGifting .PremiumCurrencyPurchaseButtons>.GoldButton {
+   flex-grow: 1
```

#### 982. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10653-L10661` → after: `L11959-L11962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11959-L11962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11959-L11962) · [Before (L10653-L10661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10653-L10661)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody {
-   align-items: stretch;
-   box-sizing: border-box;
-   display: flex;
-   flex: 1 0 1rem;
-   min-height: 0;
-   padding: 0 2rem;
-   width: 100%
- }
+ @media(orientation:portrait)and (max-width:600px) {
+   .PremiumCurrencyPurchase.PremiumCurrencyPurchaseGifting .PremiumCurrencyPurchaseButtons {
+     flex-wrap: wrap
+   }
```

#### 983. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10663-L10670` → after: `L11964-L11967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11964-L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11964-L11967) · [Before (L10663-L10670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10663-L10670)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea {
-   display: flex;
-   flex-direction: column;
-   gap: .5rem;
-   overflow-y: auto;
-   padding: 1rem;
-   width: 46rem
- }
+   .PremiumCurrencyPurchase.PremiumCurrencyPurchaseGifting .PremiumCurrencyPurchaseButtons>.GoldButton {
+     flex-basis: 100%;
+     order: -1
+   }
```

#### 984. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10672-L10673` → after: `L11969-L11971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11969-L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11969-L11971) · [Before (L10672-L10673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10672-L10673)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailTypeSection {
-   width: 100%
+   .PremiumCurrencyPurchase.PremiumCurrencyPurchaseGifting .PremiumCurrencyPurchaseButtons>:not(.GoldButton) {
+     flex: 1 1
+   }
```

#### 985. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10676` → after: `L11974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11974) · [Before (L10676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10676)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacters {
+ .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBuy {
```

#### 986. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10679-L10682` → after: `L11977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11977) · [Before (L10679-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10679-L10682)

```diff
-   flex-wrap: wrap;
-   gap: .8rem;
-   justify-content: space-between;
-   padding: .5rem 0
+   gap: .6rem
```

#### 987. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10685-L10690` → after: `L11980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11980) · [Before (L10685-L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10685-L10690)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard {
-   border: .2rem solid transparent;
-   cursor: pointer;
-   padding: .5rem;
-   transition: transform .15s, border-color .15s, background-color .15s
- }
+ @keyframes loginResumeHighlight {
```

#### 988. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10692-L10694` → after: `L11982-L11990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11982-L11990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11982-L11990) · [Before (L10692-L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10692-L10694)

```diff
- @media(hover:hover) {
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard:hover {
-     transform: scale(1.05)
+   0%,
+   to {
+     filter: none;
+     transform: scale(1)
+   }
+ 
+   50% {
+     filter: drop-shadow(0 0 .8rem rgba(252, 211, 115, .9));
+     transform: scale(1.08)
```

#### 989. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10698-L10699` → after: `L11994-L11999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11994-L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L11994-L11999) · [Before (L10698-L10699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10698-L10699)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard.pad-focused {
-   transform: scale(1.05)
+ .PremiumCurrencyBundles {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   gap: 1rem;
+   width: 100%
```

#### 990. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10702-L10705` → after: `L12002-L12008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12002-L12008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12002-L12008) · [Before (L10702-L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10702-L10705)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard.CosmeticShopDetailCharacterCardTryingOn {
-   background-color: rgba(255, 185, 20, .15);
-   border-color: #ffb914;
-   border-style: dashed
+ .PremiumCurrencyBundles .PremiumCurrencyBundleGrid {
+   grid-gap: 1rem;
+   container: bundleGrid/inline-size;
+   display: grid;
+   gap: 1rem;
+   grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
+   width: 100%
```

#### 991. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10708-L10713` → after: `L12011-L12012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12011-L12012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12011-L12012) · [Before (L10708-L10713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10708-L10713)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacterCard .CosmeticShopDetailCharacterPreview {
-   background-position: 50%;
-   background-repeat: no-repeat;
-   background-size: contain;
-   height: 12rem;
-   width: 8rem
+ .PremiumCurrencyBundles .PremiumCurrencyBundleGrid.PremiumCurrencyBundleGridTileOnly {
+   grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr))
```

#### 992. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10716-L10725` → after: `L12015-L12018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12015-L12018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12015-L12018) · [Before (L10716-L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10716-L10725)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailTypeLabel {
-   align-items: center;
-   border-bottom: .1rem solid rgba(255, 185, 20, .2);
-   color: #ffb914;
-   display: flex;
-   font-size: 1.4rem;
-   font-weight: 800;
-   gap: .5rem;
-   margin-bottom: .3rem;
-   padding: .4rem .2rem .2rem
+ .PremiumCurrencyBundles .PremiumCurrencyBundleGrid .PremiumCurrencyBundleGridAfterTile {
+   container: dealBannerSlot/inline-size;
+   grid-column: 1/-1;
+   min-width: 0
```

#### 993. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10728-L10730` → after: `L12021-L12024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12021-L12024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12021-L12024) · [Before (L10728-L10730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10728-L10730)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailTypeLabel .svg-inline--fa {
-   font-size: 1.2rem;
-   opacity: .7
+ @container bundleGrid (min-width: 42rem) {
+   .PremiumCurrencyBundles .PremiumCurrencyBundleGrid .PremiumCurrencyBundleGridAfterTile {
+     grid-column: 2/-1
+   }
```

#### 994. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10733-L10740` → after: `L12027-L12029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12027-L12029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12027-L12029) · [Before (L10733-L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10733-L10740)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup {
-   grid-gap: .5rem;
-   align-items: center;
-   display: grid;
-   gap: .5rem;
-   grid-template-columns: repeat(6, 1fr);
-   padding: .3rem 0;
-   width: 100%
+ .PremiumCurrencyBundles .PremiumCurrencyBundleGrid[data-off-screen] .PremiumCurrencyBundle:before,
+ html[data-app-covered] .WholeAppWrapper .PremiumCurrencyBundles .PremiumCurrencyBundleGrid .PremiumCurrencyBundle:before {
+   animation-play-state: paused
```

#### 995. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10743-L10744` → after: `L12032-L12040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12032-L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12032-L12040) · [Before (L10743-L10744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10743-L10744)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell {
-   align-items: flex-start;
+ .PremiumCurrencyBundles .PremiumCurrencyBundle {
+   --pileGlow: rgba(243, 138, 182, .18);
+   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-71 -71 142 142%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28124,131,251%29%27 stop … [truncated]
+   --rayTurn: 60s;
+   align-items: center;
+   background: radial-gradient(circle at 50% 52%, #545efa, #463bd9 45%, #222a9f);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
```

#### 996. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10746-L10747` → after: `L12042-L12046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12042-L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12042-L12046) · [Before (L10746-L10747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10746-L10747)

```diff
-   flex-wrap: wrap;
-   justify-content: flex-start;
+   flex-direction: column;
+   gap: .6rem;
+   isolation: isolate;
+   overflow: hidden;
+   padding: .8rem .6rem .6rem;
```

#### 997. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10751-L10756` → after: `L12050-L12061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12050-L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12050-L12061) · [Before (L10751-L10756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10751-L10756)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption {
-   aspect-ratio: 1/1;
-   box-sizing: border-box;
-   cursor: pointer;
-   transition: transform .15s;
-   width: 33%
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
+   width: 142%;
+   z-index: -1
```

#### 998. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10759-L10761` → after: `L12064-L12066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12064-L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12064-L12066) · [Before (L10759-L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10759-L10761)

```diff
- @media(hover:hover) {
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption:hover {
-     transform: scale(1.1)
+ @media(prefers-reduced-motion:reduce) {
+   .PremiumCurrencyBundles .PremiumCurrencyBundle:before {
+     animation: none
```

#### 999. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10765-L10766` → after: `L12070-L12074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12070-L12074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12070-L12074) · [Before (L10765-L10766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10765-L10766)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption.pad-focused {
-   transform: scale(1.1)
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount {
+   color: #fff;
+   font-size: 1.4rem;
+   font-weight: 900;
+   text-shadow: -1px -1px 0 #1a1f2e, -1px 0 0 #1a1f2e, -1px 1px 0 #1a1f2e, 0 -1px 0 #1a1f2e, 0 0 0 #1a1f2e, 0 1px 0 #1a1f2e, 1px -1px 0 #1a1f2e, 1px 0 0 #1a1f2e, 1px 1px 0 #1a1f2e
```

#### 1000. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10769-L10772` → after: `L12077-L12079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12077-L12079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12077-L12079) · [Before (L10769-L10772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10769-L10772)

```diff
- @media(hover:none) {
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption:active {
-     transform: scale(1.1)
-   }
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount .svg-inline--fa,
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount.svg-inline--fa {
+   paint-order: stroke fill
```

#### 1001. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10775-L10776` → after: `L12082-L12087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12082-L12087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12082-L12087) · [Before (L10775-L10776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10775-L10776)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup .CosmeticColorSwatchCell .CosmeticColorOption.CosmeticColorOptionSelected {
-   border: .25rem solid #ffb914
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount .svg-inline--fa path:only-of-type,
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount.svg-inline--fa path:only-of-type {
+   stroke: #1a1f2e;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 1002. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10779` → after: `L12090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12090) · [Before (L10779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10779)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper {
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundlePile {
```

#### 1003. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10781-L10785` → after: `L12092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12092) · [Before (L10781-L10785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10781-L10785)

```diff
-   -webkit-backdrop-filter: blur(.1rem);
-   backdrop-filter: blur(.1rem);
-   border: .2rem solid transparent;
-   border-radius: 0;
-   cursor: pointer;
+   background: radial-gradient(closest-side, var(--pileGlow), transparent);
```

#### 1004. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10787` → after: `L12094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12094) · [Before (L10787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10787)

```diff
-   height: 7rem;
+   height: 8rem;
```

#### 1005. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10790-L10791` → after: `L12097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12097) · [Before (L10790-L10791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10790-L10791)

```diff
-   transition: transform .1s, background-color .1s, border-color .1s;
-   width: 7rem
+   width: 100%
```

#### 1006. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10794-L10797` → after: `L12100-L12103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12100-L12103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12100-L12103) · [Before (L10794-L10797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10794-L10797)

```diff
- @media(hover:hover) {
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper:hover {
-     transform: scale(1.05)
-   }
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundlePile img {
+   max-height: 100%;
+   max-width: 100%;
+   object-fit: contain
```

#### 1007. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10800-L10801` → after: `L12106-L12113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12106-L12113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12106-L12113) · [Before (L10800-L10801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10800-L10801)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.pad-focused {
-   transform: scale(1.05)
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundlePile .PremiumCurrencyBundleBonus {
+   background-color: #1dd06d;
+   bottom: 0;
+   color: #1a1f2e;
+   font-size: .8rem;
+   font-weight: 800;
+   padding: .1rem .6rem;
+   position: absolute
```

#### 1008. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10804-L10807` → after: `L12116-L12119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12116-L12119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12116-L12119) · [Before (L10804-L10807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10804-L10807)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.TryingOnCharCustomPartWrapper {
-   background-color: rgba(255, 185, 20, .15);
-   border-color: #ffb914;
-   border-style: dashed
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy {
+   align-self: stretch;
+   font-size: 1.1rem;
+   font-weight: 800
```

#### 1009. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10810-L10814` → after: `L12122-L12129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12122-L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12122-L12129) · [Before (L10810-L10814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10810-L10814)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.CharCustomPartWrapperProfileEffect {
-   box-sizing: border-box;
-   height: 4rem;
-   padding: .3rem;
-   width: 16rem
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending {
+   background-color: rgba(26, 31, 46, .3);
+   display: inline-block;
+   height: .8em;
+   overflow: hidden;
+   position: relative;
+   vertical-align: middle;
+   width: 3.5em
```

#### 1010. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10817-L10821` → after: `L12132-L12135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12132-L12135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12132-L12135) · [Before (L10817-L10821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10817-L10821)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   gap: .3rem;
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending:after {
+   animation: loadingShimmer 1.8s ease-in-out infinite;
+   background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
+   content: "";
```

#### 1011. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10823-L10824` → after: `L12137-L12141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12137-L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12137-L12141) · [Before (L10823-L10824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10823-L10824)

```diff
-   justify-content: center;
-   width: 100%
+   left: 0;
+   pointer-events: none;
+   position: absolute;
+   top: 0;
+   width: 300%
```

#### 1012. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10827-L10832` → after: `L12144-L12180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12144-L12180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12144-L12180) · [Before (L10827-L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10827-L10832)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart .EmoteCustomPartIcon {
-   aspect-ratio: 1/1;
-   background-position: 50%;
-   background-repeat: no-repeat;
-   background-size: contain;
-   width: 100%
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending[data-off-screen]:after,
+ html[data-app-covered] .WholeAppWrapper .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending:after {
+   animation-play-state: paused
+ }
+ 
+ @media(prefers-reduced-motion:reduce) {
+   .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending {
+     background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
+     background-repeat: no-repeat;
+     background-size: 300% 100%
+   }
+ 
+   .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundlePricePending:after {
+     display: none
+   }
+ }
+ ... (21 more added lines; see GitHub link above)
```

#### 1013. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10835-L10838` → after: `L12183-L12185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12183-L12185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12183-L12185) · [Before (L10835-L10838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10835-L10838)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.EmoteCustomPartWrapper .EmoteCustomPart .EmoteCustomPartLabel {
-   color: #fcd373;
-   font-size: 1rem;
-   text-align: center
+ .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending[data-off-screen]:after,
+ html[data-app-covered] .WholeAppWrapper .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending:after {
+   animation-play-state: paused
```

#### 1014. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10841-L10847` → after: `L12188-L12193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12188-L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12188-L12193) · [Before (L10841-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10841-L10847)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper .CharCustomPart {
-   background-position: 50%;
-   background-repeat: no-repeat;
-   background-size: contain;
-   height: 85%;
-   width: 85%
- }
+ @media(prefers-reduced-motion:reduce) {
+   .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending {
+     background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
+     background-repeat: no-repeat;
+     background-size: 300% 100%
+   }
```

#### 1015. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10849-L10851` → after: `L12195-L12197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12195-L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12195-L12197) · [Before (L10849-L10851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10849-L10851)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper .CharCustomPart.CharCustomProfileEffect {
-   height: 100%;
-   width: 100%
+   .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleBuy .PremiumCurrencyBundleLabelPending:after {
+     display: none
+   }
```

#### 1016. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10854-L10861` → after: `L12200-L12201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12200-L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12200-L12201) · [Before (L10854-L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10854-L10861)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   flex-grow: 1;
-   height: 100%;
-   min-width: 12rem;
-   position: relative
+ .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleHighlight {
+   animation: loginResumeHighlight .8s ease-in-out 3
```

#### 1017. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10864-L10865` → after: `L12204-L12208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12204-L12208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12204-L12208) · [Before (L10864-L10865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10864-L10865)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea:focus {
-   outline: none
+ .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleTier3,
+ .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleTier4 {
+   --pileGlow: rgba(243, 138, 182, .28);
+   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-71 -71 142 142%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28143,150,252%29%27 stop … [truncated]
+   --rayTurn: 40s
```

#### 1018. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10868-L10876` → after: `L12211-L12214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12211-L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12211-L12214) · [Before (L10868-L10876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10868-L10876)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewLoading {
-   align-items: center;
-   box-sizing: border-box;
-   display: flex;
-   flex-grow: 1;
-   font-size: 4rem;
-   height: 100%;
-   justify-content: center;
-   width: 100%
+ .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleTier5 {
+   --pileGlow: rgba(243, 138, 182, .4);
+   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-71 -71 142 142%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28255,185,20%29%27 stop- … [truncated]
+   --rayTurn: 25s
```

#### 1019. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10879-L10885` → after: `L12217-L12219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12217-L12219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12217-L12219) · [Before (L10879-L10885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10879-L10885)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CharCustomisationPreview {
-   align-items: center;
-   display: flex;
-   flex-grow: 1;
-   height: 100%;
-   justify-content: center;
-   width: 100%
+ .PremiumCurrencyBundles .PremiumCurrencyBundle.PremiumCurrencyBundleBestValue {
+   border-color: #ffb914;
+   box-shadow: 0 0 1rem rgba(255, 185, 20, .45), .2rem .25rem 0 rgba(0, 0, 0, .32)
```

#### 1020. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10888-L10891` → after: `L12222-L12225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12222-L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12222-L12225) · [Before (L10888-L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10888-L10891)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CharCustomisationPreview .CharCustomisationPreviewCanvas {
-   height: 100%;
-   outline: none;
-   width: 100%
+ @keyframes premiumCurrencyBundleRays {
+   to {
+     transform: translate(-50%, -50%) rotate(1turn)
+   }
```

#### 1021. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10894-L10895` → after: `L12228-L12230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12228-L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12228-L12230) · [Before (L10894-L10895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10894-L10895)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea.CosmeticShopDetailPreviewAreaStill .CharCustomisationPreview {
-   visibility: hidden
+ .CheckoutNotice {
+   color: #ff8a80;
+   text-align: center
```

#### 1022. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10898-L10907` → after: `L12233-L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12233-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12233-L12234) · [Before (L10898-L10907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10898-L10907)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewNo3d {
-   align-content: center;
-   box-sizing: border-box;
-   display: flex;
-   flex-wrap: wrap;
-   gap: 1rem;
-   height: 100%;
-   justify-content: center;
-   padding: 1rem;
-   width: 100%
+ .CheckoutNotice.CheckoutNoticeInfo {
+   color: #85baff
```

#### 1023. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10910-L10913` → after: `L12237-L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12237-L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12237-L12238) · [Before (L10910-L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10910-L10913)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewNo3d img {
-   height: 8rem;
-   object-fit: contain;
-   width: 8rem
+ .BundlesLoadFailed {
+   align-items: center
```

#### 1024. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10916-L10923` → after: `L12241-L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12241-L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12241-L12245) · [Before (L10916-L10923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10916-L10923)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill {
-   background-position: center 87.2%;
-   background-repeat: no-repeat;
-   background-size: auto 76.5%;
-   inset: 0;
-   pointer-events: none;
-   position: absolute;
-   transition: opacity ease-out
+ .BundlesLoadFailed,
+ .GiftChoices {
+   display: flex;
+   flex-direction: column;
+   gap: 1rem
```

#### 1025. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10926-L10927` → after: `L12248-L12249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12248-L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12248-L12249) · [Before (L10926-L10927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10926-L10927)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill.CosmeticShopDetailPreviewStillCamera {
-   background-size: auto 100%
+ .GiftChoices {
+   text-align: left
```

#### 1026. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10930-L10931` → after: `L12252-L12256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12252-L12256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12252-L12256) · [Before (L10930-L10931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10930-L10931)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill.CosmeticShopDetailPreviewStillFading {
-   opacity: 0
+ .GiftChoices .GiftChoicesSection {
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   min-width: 0
```

#### 1027. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10934-L10937` → after: `L12259-L12262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12259-L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12259-L12262) · [Before (L10934-L10937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10934-L10937)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreviewStill {
-     transition: none
-   }
+ .GiftChoices .GiftChoicesLabel {
+   color: #fff;
+   font-size: 1.5rem;
+   font-weight: 800
```

#### 1028. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10940-L10945` → after: `L12265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12265) · [Before (L10940-L10945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10940-L10945)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue {
-   align-items: center;
-   background-color: rgba(26, 31, 46, .6);
-   border: none;
-   color: #fff;
-   cursor: pointer;
+ .GiftWrapRow {
```

#### 1029. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10947-L10955` → after: `L12267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12267) · [Before (L10947-L10955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10947-L10955)

```diff
-   font: inherit;
-   font-size: 1.4rem;
-   gap: .5rem;
-   inset-block-end: 1rem;
-   inset-inline-end: 1rem;
-   min-height: 44px;
-   padding: .5rem 1.2rem;
-   position: absolute;
-   white-space: nowrap
+   gap: .6rem
```

#### 1030. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10958-L10960` → after: `L12270-L12273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12270-L12273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12270-L12273) · [Before (L10958-L10960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10958-L10960)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue:focus-visible {
-   outline: .2rem solid #fff;
-   outline-offset: .2rem
+ @media(pointer:coarse)and (orientation:landscape)and (max-width:667px) {
+   .GiftWrapRow {
+     gap: .3rem
+   }
```

#### 1031. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10963-L10964` → after: `L12276-L12279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12276-L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12276-L12279) · [Before (L10963-L10964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10963-L10964)

```diff
- .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue.CosmeticShopDetailPreview3dCueLoading {
-   cursor: default
+ .GiftWrapRow {
+   overflow-x: auto;
+   padding: .3rem .2rem;
+   scrollbar-width: none
```

#### 1032. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10967-L10976` → after: `L12282-L12283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12282-L12283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12282-L12283) · [Before (L10967-L10976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10967-L10976)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter {
-   align-items: center;
-   -webkit-backdrop-filter: blur(.3rem);
-   backdrop-filter: blur(.3rem);
-   background-color: rgba(48, 58, 89, .2);
-   display: flex;
-   flex-direction: column;
-   flex-shrink: 0;
-   justify-content: center;
-   min-height: 9rem
+ .GiftWrapRow::-webkit-scrollbar {
+   display: none
```

#### 1033. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10979` → after: `L12286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12286) · [Before (L10979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10979)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady {
+ .GiftWrapTile {
```

#### 1034. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10983-L10984` → after: `L12294-L12297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12294-L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12294-L12297) · [Before (L10983-L10984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10983-L10984)

```diff
-   font-size: 1.4rem;
-   gap: .4rem
+   flex-shrink: 0;
+   gap: .3rem;
+   padding: 0;
+   width: 5.8rem
```

#### 1035. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10987-L10988` → after: `L12300-L12305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12300-L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12300-L12305) · [Before (L10987-L10988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10987-L10988)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady .StoreCta .NewButton {
-   font-size: 1.8rem
+ @media(pointer:coarse) {
+   .GiftWrapTile {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 1036. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10991-L10992` → after: `L12308-L12316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12308-L12316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12308-L12316) · [Before (L10991-L10992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10991-L10992)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftReady .CosmeticShopGiftError {
-   color: #e34f4f
+ .GiftWrapTile .GiftWrapTileArt {
+   border: .25rem solid transparent;
+   box-sizing: border-box;
+   display: block;
+   font-size: 5.4rem;
+   height: 5.8rem;
+   position: relative;
+   transition: transform .12s ease-out;
+   width: 5.8rem
```

#### 1037. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L10995-L11000` → after: `L12319-L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12319-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12319-L12322) · [Before (L10995-L11000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L10995-L11000)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow {
-   align-items: center;
-   box-sizing: border-box;
-   display: flex;
-   max-width: 100%;
-   padding: 0 1rem
+ @media(hover:hover) {
+   .GiftWrapTile:hover .GiftWrapTileArt {
+     transform: translateY(-.15rem)
+   }
```

#### 1038. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11003-L11008` → after: `L12325-L12326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12325-L12326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12325-L12326) · [Before (L11003-L11008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11003-L11008)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .CosmeticShopGiftRecipientInput {
-   box-sizing: border-box;
-   flex-grow: 1;
-   font-size: inherit;
-   min-width: 0;
-   padding: .4rem 0
+ .GiftWrapTile.pad-focused .GiftWrapTileArt {
+   transform: translateY(-.15rem)
```

#### 1039. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11011-L11016` → after: `L12329-L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12329-L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12329-L12332) · [Before (L11011-L11016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11011-L11016)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton {
-   animation: buyButtonPulse 2s ease-in-out infinite;
-   flex-shrink: 0;
-   font-size: 1.6rem;
-   font-weight: 800;
-   margin-left: 1.5rem
+ @media(hover:none) {
+   .GiftWrapTile:active .GiftWrapTileArt {
+     transform: translateY(-.15rem)
+   }
```

#### 1040. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11019-L11020` → after: `L12335-L12340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12335-L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12335-L12340) · [Before (L11019-L11020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11019-L11020)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton:before {
-   animation: none
+ .GiftWrapTile .GiftWrapTileName {
+   font-size: 1.2rem;
+   max-width: 100%;
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 1041. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11023-L11024` → after: `L12343-L12344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12343-L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12343-L12344) · [Before (L11023-L11024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11023-L11024)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftRow .RainbowButton .ButtonBody {
-   padding: .5rem 2rem
+ .GiftWrapTile.GiftWrapTilePicked {
+   color: #fff
```

#### 1042. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11027-L11030` → after: `L12347-L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12347-L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12347-L12349) · [Before (L11027-L11030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11027-L11030)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton {
-   animation: buyButtonPulse 2s ease-in-out infinite;
-   font-size: 2rem;
-   font-weight: 800
+ .GiftWrapTile.GiftWrapTilePicked .GiftWrapTileArt {
+   animation: GiftWrapPicked .35s cubic-bezier(.34, 1.56, .64, 1);
+   border-color: #ffb914
```

#### 1043. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11033-L11034` → after: `L12352-L12353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12352-L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12352-L12353) · [Before (L11033-L11034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11033-L11034)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton:before {
-   animation: none
+ .GiftWrapTile.GiftWrapTileLocked {
+   cursor: default
```

#### 1044. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11037-L11038` → after: `L12356-L12357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12356-L12357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12356-L12357) · [Before (L11037-L11038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11037-L11038)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter>.RainbowButton .ButtonBody {
-   padding: .7rem 4rem
+ .GiftWrapTile.GiftWrapTileLocked .GiftWrapSwatch {
+   filter: grayscale(.6) brightness(.55)
```

#### 1045. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11041-L11042` → after: `L12360-L12364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12360-L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12360-L12364) · [Before (L11041-L11042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11041-L11042)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopPurchaseOutcome {
-   color: #1dd06d;
+ .GiftWrapTile .GiftWrapTileLock {
+   align-items: center;
+   color: #fff;
+   display: flex;
+   flex-direction: column;
```

#### 1046. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11044` → after: `L12366-L12370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12366-L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12366-L12370) · [Before (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11044)

```diff
-   margin-top: .5rem
+   font-weight: 800;
+   gap: .2rem;
+   inset: 0;
+   justify-content: center;
+   position: absolute
```

#### 1047. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11047-L11048` → after: `L12373-L12374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12373-L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12373-L12374) · [Before (L11047-L11048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11047-L11048)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopPurchaseOutcome.CosmeticShopPurchaseOutcomeFailed {
-   color: #ff8a80
+ .GiftWrapTile .GiftWrapTileLock svg {
+   font-size: 1.8rem
```

#### 1048. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11051-L11056` → after: `L12377-L12390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12377-L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12377-L12390) · [Before (L11051-L11056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11051-L11056)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle {
-   color: #ffb914;
-   cursor: pointer;
-   font-size: 1.3rem;
-   margin-top: .5rem;
-   transition: opacity .15s
+ .GiftWrapTile .GiftWrapTileUntil {
+   text-wrap: balance;
+   background: rgba(26, 31, 46, .85);
+   bottom: 0;
+   color: #fcd373;
+   font-size: 1.2rem;
+   font-weight: 800;
+   left: 0;
+   line-height: 1.15;
+   overflow-wrap: anywhere;
+   padding: .2rem;
+   position: absolute;
+   right: 0;
+   text-align: center
```

#### 1049. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11059-L11061` → after: `L12393-L12395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12393-L12395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12393-L12395) · [Before (L11059-L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11059-L11061)

```diff
- @media(hover:hover) {
-   .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle:hover {
-     opacity: .8
+ @media(orientation:portrait)and (max-width:600px) {
+   .GiftWrapTile {
+     width: 5.6rem
```

#### 1050. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11065-L11067` → after: `L12398-L12402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12398-L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12398-L12402) · [Before (L11065-L11067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11065-L11067)

```diff
- .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle.pad-focused {
-   opacity: .8
- }
+   .GiftWrapTile .GiftWrapTileArt {
+     font-size: 5.2rem;
+     height: 5.6rem;
+     width: 5.6rem
+   }
```

#### 1051. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11069-L11071` → after: `L12404-L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12404-L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12404-L12405) · [Before (L11069-L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11069-L11071)

```diff
- @media(hover:none) {
-   .CosmeticShopDetail .CosmeticShopDetailFooter .CosmeticShopGiftToggle:active {
-     opacity: .8
+   .GiftWrapTile .GiftWrapTileName {
+     display: none
```

#### 1052. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11075-L11077` → after: `L12409-L12412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12409-L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12409-L12412) · [Before (L11075-L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11075-L11077)

```diff
- .CosmeticShopDetail .CosmeticShopDetailCtaHighlight .RainbowButton {
-   animation: loginResumeHighlight .8s ease-in-out 3
- }
+ @keyframes GiftWrapPicked {
+   0% {
+     transform: scale(.85)
+   }
```

#### 1053. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11079-L11080` → after: `L12414-L12416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12414-L12416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12414-L12416) · [Before (L11079-L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11079-L11080)

```diff
- .CosmeticShopDetail .CosmeticShopDetailCtaHighlight .RainbowButton:before {
-   animation: none
+   to {
+     transform: scale(1)
+   }
```

#### 1054. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11083-L11084` → after: `L12419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12419) · [Before (L11083-L11084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11083-L11084)

```diff
- .CosmeticShopDetail .CosmeticShopPurchaseLabel {
-   align-items: center;
+ .GiftMessageChips {
```

#### 1055. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11086-L11087` → after: `L12421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12421) · [Before (L11086-L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11086-L11087)

```diff
-   gap: .5rem;
-   justify-content: center
+   gap: .6rem
```

#### 1056. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11090-L11093` → after: `L12424-L12430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12424-L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12424-L12430) · [Before (L11090-L11093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11090-L11093)

```diff
- .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending {
-   background-color: rgba(26, 31, 46, .3);
-   display: inline-block;
-   height: .8em;
+ .GiftMessageQuickChips {
+   display: flex;
+   flex: 0 1 auto;
+   flex-wrap: wrap;
+   height: 3.6rem;
+   margin-left: -.6rem;
+   min-width: 0;
```

#### 1057. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11095-L11097` → after: `L12432-L12433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12432-L12433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12432-L12433) · [Before (L11095-L11097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11095-L11097)

```diff
-   position: relative;
-   vertical-align: middle;
-   width: 2em
+   overflow: clip;
+   row-gap: 10rem
```

#### 1058. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11100-L11102` → after: `L12436-L12442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12436-L12442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12436-L12442) · [Before (L11100-L11102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11100-L11102)

```diff
- .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending:after {
-   animation: loadingShimmer 1.8s ease-in-out infinite;
-   background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
+ @media(pointer:coarse) {
+   .GiftMessageQuickChips {
+     height: max(3.6rem, 44px)
+   }
+ }
+ 
+ .GiftMessageQuickChips:before {
```

#### 1059. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11104-L11109` → after: `L12444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12444) · [Before (L11104-L11109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11104-L11109)

```diff
-   height: 100%;
-   left: 0;
-   pointer-events: none;
-   position: absolute;
-   top: 0;
-   width: 300%
+   width: 0
```

#### 1060. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11112-L11114` → after: `L12447-L12450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12447-L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12447-L12450) · [Before (L11112-L11114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11112-L11114)

```diff
- .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending[data-off-screen]:after,
- html[data-app-covered] .WholeAppWrapper .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending:after {
-   animation-play-state: paused
+ .GiftMessageQuickChips .GiftMessageChip {
+   flex-shrink: 0;
+   margin-left: .6rem;
+   max-width: none
```

#### 1061. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11117-L11122` → after: `L12453-L12455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12453-L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12453-L12455) · [Before (L11117-L11122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11117-L11122)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending {
-     background-image: linear-gradient(100deg, transparent 35%, hsla(0, 0%, 100%, .07) 50%, transparent 65%);
-     background-repeat: no-repeat;
-     background-size: 300% 100%
-   }
+ .GiftMessageQuickChips .GiftMessageChip:focus-visible {
+   outline-offset: -.4rem
+ }
```

#### 1062. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11124` → after: `L12457-L12458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12457-L12458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12457-L12458) · [Before (L11124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11124)

```diff
-   .CosmeticShopDetail .CosmeticShopPurchaseLabel .CosmeticShopPurchaseLabelPending:after {
+ @media(orientation:portrait)and (max-width:600px) {
+   .GiftMessageQuickChips {
```

#### 1063. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11129` → after: `L12463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12463) · [Before (L11129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11129)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeaderCta {
+ .GiftMessageChip {
```

#### 1064. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11132-L11138` → after: `L12471-L12478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12471-L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12471-L12478) · [Before (L11132-L11138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11132-L11138)

```diff
-   gap: .8rem;
-   justify-content: flex-end
- }
- 
- .CosmeticShopDetail .CosmeticShopDetailHeaderCta>.RainbowButton {
-   font-size: 1.6rem;
-   font-weight: 800
+   flex: 0 1 auto;
+   font-size: 1.5rem;
+   max-width: 100%;
+   min-height: 3.6rem;
+   min-width: 0;
+   padding: .3rem 1.2rem;
+   position: relative;
+   text-align: left
```

#### 1065. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11141-L11142` → after: `L12481-L12486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12481-L12486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12481-L12486) · [Before (L11141-L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11141-L11142)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeaderCta>.RainbowButton .ButtonBody {
-   padding: .4rem 1.2rem
+ @media(pointer:coarse) {
+   .GiftMessageChip {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 1066. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11145-L11148` → after: `L12489-L12492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12489-L12492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12489-L12492) · [Before (L11145-L11148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11145-L11148)

```diff
- .CosmeticShopDetail .CosmeticShopDetailHeaderCta .CosmeticShopGiftToggle {
-   color: #ffb914;
-   cursor: pointer;
-   font-size: 1.5rem;
+ .GiftMessageChip .GiftMessageChipText {
+   min-width: 0;
+   overflow-x: hidden;
+   text-overflow: ellipsis;
```

#### 1067. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11152-L11160` → after: `L12496-L12501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12496-L12501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12496-L12501) · [Before (L11152-L11160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11152-L11160)

```diff
- @media(max-height:420px) {
-   .CosmeticShopDetail .CosmeticShopDetailHeader {
-     padding: .3rem .8rem
-   }
- 
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide {
-     flex-shrink: 0;
-     width: auto
-   }
+ .GiftMessageChip.GiftMessageChipPicked {
+   background: #394980;
+   border-color: #ffb914;
+   flex-shrink: 0;
+   max-width: calc(100% - 10rem)
+ }
```

#### 1068. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11162-L11164` → after: `L12503-L12506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12503-L12506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12503-L12506) · [Before (L11162-L11164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11162-L11164)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailBackButton {
-     font-size: 1.6rem
-   }
+ .GiftMessageChip.GiftMessageChipMore {
+   flex-shrink: 0;
+   padding-right: 2.8rem
+ }
```

#### 1069. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11166-L11168` → after: `L12508-L12516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12508-L12516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12508-L12516) · [Before (L11166-L11168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11166-L11168)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTitle {
-     font-size: 2.2rem
-   }
+ .GiftMessageChip.GiftMessageChipMore:after {
+   border: .45rem solid transparent;
+   border-top-color: #f2f2f2;
+   content: "";
+   position: absolute;
+   right: 1rem;
+   top: 50%;
+   transform: translateY(-25%)
+ }
```

#### 1070. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11170-L11173` → after: `L12518-L12521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12518-L12521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12518-L12521) · [Before (L11170-L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11170-L11173)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailFooter {
-     height: auto;
-     padding: .4rem 0
-   }
+ .GiftMessageChip.GiftMessageChipMore.GiftMessageChipOpen:after {
+   border-bottom-color: #f2f2f2;
+   border-top-color: transparent;
+   transform: translateY(-75%)
```

#### 1071. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11176-L11180` → after: `L12524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12524) · [Before (L11176-L11180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11176-L11180)

```diff
- @media(max-width:700px)and (orientation:portrait) {
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide {
-     flex-shrink: 0;
-     width: auto
-   }
+ @media(orientation:portrait)and (max-width:600px) {
```

#### 1072. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11182` → after: `L12526-L12527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12526-L12527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12526-L12527) · [Before (L11182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11182)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailHeaderSide:empty {
+   .GiftMessageChip.GiftMessageChipMore,
+   .GiftMessageChip.GiftMessageChipQuick {
```

#### 1073. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11186-L11189` → after: `L12531-L12535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12531-L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12531-L12535) · [Before (L11186-L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11186-L11189)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea {
-     flex-wrap: wrap;
-     min-width: 0;
-     row-gap: .2rem
+   .GiftMessageChip.GiftMessageChipPicked {
+     max-width: 100%;
+     min-height: 4.4rem;
+     padding-right: 3rem;
+     width: 100%
```

#### 1074. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11192-L11193` → after: `L12538-L12545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12538-L12545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12538-L12545) · [Before (L11192-L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11192-L11193)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticShopDetailTitle {
-     font-size: min(2.4rem, 7vw)
+   .GiftMessageChip.GiftMessageChipPicked:after {
+     border: .5rem solid transparent;
+     border-top-color: #f2f2f2;
+     content: "";
+     position: absolute;
+     right: 1.2rem;
+     top: 50%;
+     transform: translateY(-25%)
```

#### 1075. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11196-L11197` → after: `L12548-L12551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12548-L12551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12548-L12551) · [Before (L11196-L11197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11196-L11197)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailHeader .CosmeticShopDetailTitleArea .CosmeticPackItemCount {
-     white-space: nowrap
+   .GiftMessageChip.GiftMessageChipPicked.GiftMessageChipOpen:after {
+     border-bottom-color: #f2f2f2;
+     border-top-color: transparent;
+     transform: translateY(-75%)
```

#### 1076. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11200-L11203` → after: `L12555-L12566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12555-L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12555-L12566) · [Before (L11200-L11203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11200-L11203)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody {
-     container-type: size;
-     padding: 0 .5rem
-   }
+ .GiftMessagePanel {
+   animation-duration: .3s;
+   animation-fill-mode: backwards;
+   animation-iteration-count: 1;
+   animation-name: fadeIn;
+   background: #3c4b68;
+   display: flex;
+   flex-direction: column;
+   gap: .6rem;
+   isolation: isolate;
+   padding: .6rem
+ }
```

#### 1077. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11205` → after: `L12568-L12597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12568-L12597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12568-L12597) · [Before (L11205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11205)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea {
+ .GiftMessagePanel .GiftMessageTabs {
+   font-size: 1.5rem
+ }
+ 
+ .GiftMessagePanel .GiftMessageList {
+   display: flex;
+   flex-direction: column;
+   gap: .4rem;
+   max-height: 26rem;
+   overflow-y: auto
+ }
+ 
+ .GiftMessagePanel .GiftMessageOption {
+   align-items: center;
+   background: #394980;
+   border: .2rem solid transparent;
+ ... (14 more added lines; see GitHub link above)
```

#### 1078. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11207-L11210` → after: `L12599-L12600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12599-L12600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12599-L12600) · [Before (L11207-L11210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11207-L11210)

```diff
-     flex-shrink: 0;
-     overflow-x: hidden;
-     padding: 1rem .5rem;
-     width: calc(10.4rem + 1.5vmin)
+     min-height: 44px;
+     min-width: 44px
```

#### 1079. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11213-L11215` → after: `L12604-L12606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12604-L12606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12604-L12606) · [Before (L11213-L11215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11213-L11215)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailCharacters {
-     justify-content: center
-   }
+ .GiftMessagePanel .GiftMessageOption.GiftMessageOptionPicked {
+   border-color: #ffb914
+ }
```

#### 1080. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11217-L11219` → after: `L12608-L12611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12608-L12611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12608-L12611) · [Before (L11217-L11219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11217-L11219)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CosmeticShopDetailGroup {
-     grid-template-columns: minmax(0, 1fr)
-   }
+ .GiftMessagePanel .GiftMessageOption.GiftMessageOptionLocked {
+   color: #a4a4a4;
+   cursor: default
+ }
```

#### 1081. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11221-L11223` → after: `L12613-L12620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12613-L12620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12613-L12620) · [Before (L11221-L11223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11221-L11223)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper {
-     justify-self: center
-   }
+ .GiftMessagePanel .GiftMessageOptionLevel {
+   align-items: center;
+   color: #cfcfcf;
+   display: flex;
+   flex-shrink: 0;
+   font-weight: 800;
+   gap: .4rem
+ }
```

#### 1082. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11225-L11227` → after: `L12622-L12628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12622-L12628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12622-L12628) · [Before (L11225-L11227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11225-L11227)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailCosmeticsArea .CharCustomPartWrapper.CharCustomPartWrapperProfileEffect {
-     width: 100%
-   }
+ .GiftLevelStrip {
+   background: #1a1f2e;
+   display: flex;
+   flex-direction: column;
+   gap: .6rem;
+   padding: 1rem 1.4rem
+ }
```

#### 1083. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11229-L11236` → after: `L12630-L12636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12630-L12636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12630-L12636) · [Before (L11229-L11236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11229-L11236)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea {
-     align-self: flex-start;
-     aspect-ratio: 3/4;
-     height: auto;
-     margin: 0 auto;
-     max-height: 100%;
-     min-height: 0
-   }
+ .GiftLevelStrip .GiftLevelStripTop {
+   align-items: baseline;
+   display: flex;
+   flex-wrap: wrap;
+   gap: .2rem .8rem;
+   justify-content: space-between
+ }
```

#### 1084. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11238-L11240` → after: `L12638-L12658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12638-L12658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12638-L12658) · [Before (L11238-L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11238-L11240)

```diff
-   .CosmeticShopDetail .CosmeticShopDetailBody .CosmeticShopDetailPreviewArea .CosmeticShopDetailPreview3dCue {
-     inset-block: min(100% + 1rem, 100cqb - 1rem - 44px) auto
-   }
+ .GiftLevelStrip .GiftLevelStripLevel {
+   color: #fff;
+   font-size: 1.6rem;
+   font-weight: 800
+ }
+ 
+ .GiftLevelStrip .GiftLevelStripGift {
+   color: #cfcfcf;
+   font-size: 1.4rem;
+   white-space: nowrap
+ }
+ 
+ .GiftLevelStrip .GiftLevelStripGift b {
+   color: #ffb914
+ }
+ 
+ ... (5 more added lines; see GitHub link above)
```

#### 1085. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11243-L11246` → after: `L12661-L12665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12661-L12665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12661-L12665) · [Before (L11243-L11246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11243-L11246)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup.PremiumCurrencyPurchasePopup {
-   box-sizing: border-box;
-   max-height: 100%;
-   overflow-y: auto
+ .GiftLevelStrip .GiftLevelStripAdd,
+ .GiftLevelStrip .GiftLevelStripFill {
+   bottom: 0;
+   position: absolute;
+   top: 0
```

#### 1086. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11249-L11254` → after: `L12668-L12670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12668-L12670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12668-L12670) · [Before (L11249-L11254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11249-L11254)

```diff
- @media(orientation:portrait)and (max-width:600px) {
-   .MiddleScreenPopupBackground .MiddleScreenPopup.PremiumCurrencyPurchasePopup {
-     box-sizing: border-box;
-     max-width: none;
-     width: calc(100vw - 2rem)
-   }
+ .GiftLevelStrip .GiftLevelStripFill {
+   background: #ffb914;
+   left: 0
```

#### 1087. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11257-L11262` → after: `L12673-L12675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12673-L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12673-L12675) · [Before (L11257-L11262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11257-L11262)

```diff
- .PremiumCurrencyPurchase {
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
-   max-width: 100%;
-   width: 40rem
+ .GiftLevelStrip .GiftLevelStripAdd {
+   animation: GiftLevelStripAdd 1.4s ease-in-out infinite;
+   background: #fcd373
```

#### 1088. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11265-L11268` → after: `L12678-L12682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12678-L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12678-L12682) · [Before (L11265-L11268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11265-L11268)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTitle {
-   font-size: 2rem;
-   overflow-wrap: anywhere;
-   text-align: center
+ @media(prefers-reduced-motion:reduce) {
+   .GiftLevelStrip .GiftLevelStripAdd {
+     animation: none;
+     opacity: .7
+   }
```

#### 1089. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11271-L11272` → after: `L12685-L12690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12685-L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12685-L12690) · [Before (L11271-L11272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11271-L11272)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTitle.PremiumCurrencyPurchaseTitleGift {
-   color: #85baff
+ .GiftLevelStrip .GiftLevelStripNote {
+   color: #cfcfcf;
+   font-size: 1.4rem;
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 1090. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11275-L11281` → after: `L12693-L12702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12693-L12702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12693-L12702) · [Before (L11275-L11281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11275-L11281)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCard {
-   align-items: center;
-   background: #3c4b68;
-   display: flex;
-   gap: 1.2rem;
-   min-height: 6.4rem;
-   padding: .8rem
+ @keyframes GiftLevelStripAdd {
+ 
+   0%,
+   to {
+     opacity: .35
+   }
+ 
+   50% {
+     opacity: .85
+   }
```

#### 1091. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11284-L11286` → after: `L12705-L12709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12705-L12709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12705-L12709) · [Before (L11284-L11286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11284-L11286)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon {
-   align-items: flex-end;
-   background: #394980;
+ .SegmentedToggle {
+   background-color: #3c4b68;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
```

#### 1092. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11288-L11293` → after: `L12711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12711) · [Before (L11288-L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11288-L11293)

```diff
-   flex-shrink: 0;
-   height: 6.4rem;
-   justify-content: center;
-   overflow: hidden;
-   position: relative;
-   width: 6.4rem
+   flex-shrink: 0
```

#### 1093. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11296-L11302` → after: `L12714-L12721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12714-L12721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12714-L12721) · [Before (L11296-L11302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11296-L11302)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon img {
-   -ms-interpolation-mode: nearest-neighbor;
-   height: 92%;
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast;
+ .SegmentedToggle .SegmentedToggleOption {
+   background: none;
+   border: none;
+   color: #cfcfcf;
+   cursor: pointer;
+   font: inherit;
+   min-width: 5.5em;
+   padding: .4em 1em;
```

#### 1094. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11306-L11312` → after: `L12725-L12730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12725-L12730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12725-L12730) · [Before (L11306-L11312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11306-L11312)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconSuperRank {
-   align-items: center;
-   background: radial-gradient(circle at 78% 40%, rgba(255, 214, 102, .5), transparent 55%), linear-gradient(135deg, #3d2a00, #6e4800 50%, #745309)
- }
- 
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconSuperRank img {
-   height: 80%
+ @media(pointer:coarse) {
+   .SegmentedToggle .SegmentedToggleOption:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
+   }
```

#### 1095. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11315-L11317` → after: `L12733-L12734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12733-L12734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12733-L12734) · [Before (L11315-L11317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11315-L11317)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconGems {
-   align-items: center;
-   background: none
+ .SegmentedToggle .SegmentedToggleOption:before {
+   inset-inline: 0
```

#### 1096. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11320-L11322` → after: `L12737-L12738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12737-L12738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12737-L12738) · [Before (L11320-L11322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11320-L11322)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseIcon.PremiumCurrencyPurchaseIconGems .PremiumCurrencyIcon {
-   height: 5rem;
-   width: 5rem
+ .SegmentedToggle .SegmentedToggleOption:not(:first-child) {
+   border-left: 1px solid #0f0f0f
```

#### 1097. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11325-L11334` → after: `L12741-L12745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12741-L12745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12741-L12745) · [Before (L11325-L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11325-L11334)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCardText {
-   align-items: flex-start;
-   color: #cfcfcf;
-   display: flex;
-   flex: 1 1;
-   flex-direction: column;
-   font-size: 1.4rem;
-   gap: .2rem;
-   min-width: 0;
-   text-align: left
+ @media(hover:hover) {
+   .SegmentedToggle .SegmentedToggleOption:hover {
+     background-color: #394980;
+     color: #fff
+   }
```

#### 1098. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11337-L11343` → after: `L12748-L12750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12748-L12750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12748-L12750) · [Before (L11337-L11343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11337-L11343)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseCardText b {
-   color: #fff;
-   font-size: 1.8rem;
-   max-width: 100%;
-   overflow: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .SegmentedToggle .SegmentedToggleOption.pad-focused {
+   background-color: #394980;
+   color: #fff
```

#### 1099. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11346-L11347` → after: `L12753-L12757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12753-L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12753-L12757) · [Before (L11346-L11347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11346-L11347)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchasePerks {
-   justify-content: flex-start
+ @media(hover:none) {
+   .SegmentedToggle .SegmentedToggleOption:active {
+     background-color: #394980;
+     color: #fff
+   }
```

#### 1100. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11350-L11354` → after: `L12760-L12762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12760-L12762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12760-L12762) · [Before (L11350-L11354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11350-L11354)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBanner {
-   font-size: 1.5rem;
-   font-weight: 800;
-   padding: .6rem 1rem;
-   text-align: left
+ .SegmentedToggle .SegmentedToggleOption:focus-visible {
+   outline: 2px solid #ffb914;
+   outline-offset: -2px
```

#### 1101. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11357-L11360` → after: `L12765-L12768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12765-L12768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12765-L12768) · [Before (L11357-L11360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11357-L11360)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBanner.PremiumCurrencyPurchaseBannerWarning {
-   background: rgba(255, 185, 20, .15);
-   border: .1rem solid #ffb914;
-   color: #fcd373
+ .SegmentedToggle .SegmentedToggleOption.SegmentedToggleOptionSelected {
+   background-color: #2e80ee;
+   color: #fff;
+   cursor: default
```

#### 1102. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11363-L11365` → after: `L12771-L12775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12771-L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12771-L12775) · [Before (L11363-L11365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11363-L11365)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBonus {
-   color: #1dd06d;
-   white-space: nowrap
+ .GiftWrapLook_classic {
+   --gift-paper: repeating-linear-gradient(45deg, #e63946 0 0.1em, #fff4f0 0.1em 0.2em);
+   --gift-ribbon: #ffd166;
+   --gift-ribbon-solid: #ffd166;
+   --gift-glow: #ffd84a
```

#### 1103. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11368-L11369` → after: `L12778-L12783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12778-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12778-L12783) · [Before (L11368-L11369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11368-L11369)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUpLoading {
-   justify-content: center
+ .GiftWrapLook_blocks {
+   --gift-paper: radial-gradient(#6d4426 18%, transparent 20%) 0 0 /0.2em 0.2em, linear-gradient(#6abe30 0 24%, #8a5a33 24%);
+   --gift-lid-paper: radial-gradient(#4f9a20 20%, transparent 22%) 0 0 /0.18em 0.18em, #6abe30;
+   --gift-ribbon: #7ff3f0;
+   --gift-ribbon-solid: #7ff3f0;
+   --gift-glow: #b6f27a
```

#### 1104. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11372-L11373` → after: `L12786-L12790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12786-L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12786-L12790) · [Before (L11372-L11373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11372-L11373)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp {
-   flex-wrap: wrap
+ .GiftWrapLook_gems {
+   --gift-paper: linear-gradient(45deg, #7b3fb5 25%, transparent 25% 75%, #7b3fb5 75%) 0 0 /0.25em 0.25em, linear-gradient(-45deg, #7b3fb5 25%, transparent 25% 75%, #7b3fb5 75%) 0 0 /0.25em 0.25em, #4a1f73;
+   --gift-ribbon: #ff7ad9;
+   --gift-ribbon-solid: #ff7ad9;
+   --gift-glow: #c9a8ff
```

#### 1105. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11376-L11377` → after: `L12793-L12797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12793-L12797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12793-L12797) · [Before (L11376-L11377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11376-L11377)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseCardText {
-   flex-basis: auto
+ .GiftWrapLook_stars {
+   --gift-paper: radial-gradient(circle at 20% 30%, #fff 0.015em, transparent 0.025em) 0 0 /0.33em 0.33em, radial-gradient(circle at 70% 70%, #fff6b0 0.02em, transparent 0.03em) 0 0 /0.45em 0.45em, linear-gradient(#141a45, #2b2f7a);
+   --gift-ribbon: #d9e2ff;
+   --gift-ribbon-solid: #d9e2ff;
+   --gift-glow: #ffe9a8
```

#### 1106. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11380-L11382` → after: `L12800-L12804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12800-L12804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12800-L12804) · [Before (L11380-L11382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11380-L11382)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseTopUpNeed {
-   min-width: 100%;
-   width: 0
+ .GiftWrapLook_legend {
+   --gift-paper: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M0 12 12 0l12 12-12 12Z' fill='none' stroke='%23fff4c8' stroke-opacity='.7' stroke-width='.8'/%3E%3Cpath d='m7.2 15.2.7-5.6 2.2 2.5L12 8.6l1.9 3.5 2.2- … [truncated]
+   --gift-ribbon: linear-gradient(90deg, #f7c843 0 12%, #5b21b6 12% 30%, #7c3aed 50%, #5b21b6 70% 88%, #f7c843 88%);
+   --gift-ribbon-solid: #6d28d9;
+   --gift-glow: #fff1a8
```

#### 1107. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11385-L11388` → after: `L12807-L12811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12807-L12811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12807-L12811) · [Before (L11385-L11388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11385-L11388)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseTopUp .PremiumCurrencyPurchaseTopUpButton {
-   flex-shrink: 0;
-   font-size: 1.6rem;
-   margin-left: auto
+ .GiftWrapLook_sweater {
+   --gift-paper: repeating-linear-gradient(90deg, transparent 0 0.06em, rgba(0, 0, 0, .08) 0.06em 0.07em), linear-gradient(#c1121f 0 30%, #fff 30% 36%, #2d6a4f 36% 64%, #fff 64% 70%, #c1121f 70%);
+   --gift-ribbon: #f8f9fa;
+   --gift-ribbon-solid: #f8f9fa;
+   --gift-glow: #dff3ff
```

#### 1108. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11391-L11393` → after: `L12814-L12818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12814-L12818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12814-L12818) · [Before (L11391-L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11391-L11393)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseNotice {
-   font-size: 1.4rem;
-   text-align: inherit
+ .GiftWrapLook_festive {
+   --gift-paper: radial-gradient(circle, #2fa155 20%, transparent 22%) 0 0 /0.2em 0.2em, #1f7a3a;
+   --gift-ribbon: #e63946;
+   --gift-ribbon-solid: #e63946;
+   --gift-glow: #fff1b0
```

#### 1109. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11396-L11401` → after: `L12821-L12827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12821-L12827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12821-L12827) · [Before (L11396-L11401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11396-L11401)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseButtons {
-   display: flex;
-   font-size: 1.8rem;
-   gap: 1rem;
-   justify-content: space-between;
-   margin-top: .4rem
+ .GiftWrapSheen {
+   animation: GiftWrapSheen 3.2s ease-in-out infinite;
+   background: linear-gradient(105deg, transparent 35%, hsla(0, 0%, 100%, .75) 48%, hsla(0, 0%, 100%, .15) 56%, transparent 64%) no-repeat;
+   background-size: 250% 100%;
+   inset: 0;
+   pointer-events: none;
+   position: absolute
```

#### 1110. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11404-L11407` → after: `L12830-L12834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12830-L12834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12830-L12834) · [Before (L11404-L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11404-L11407)

```diff
- .PremiumCurrencyPurchase .PremiumCurrencyPurchaseBuy {
-   align-items: center;
-   display: flex;
-   gap: .6rem
+ @media(prefers-reduced-motion:reduce) {
+   .GiftWrapSheen {
+     animation: none;
+     opacity: 0
+   }
```

#### 1111. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11410` → after: `L12837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12837) · [Before (L11410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11410)

```diff
- @keyframes loginResumeHighlight {
+ @keyframes GiftWrapSheen {
```

#### 1112. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11413-L11415` → after: `L12840-L12841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12840-L12841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12840-L12841) · [Before (L11413-L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11413-L11415)

```diff
-   to {
-     filter: none;
-     transform: scale(1)
+   55% {
+     background-position: 130% 0
```

#### 1113. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11418-L11420` → after: `L12844-L12845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12844-L12845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12844-L12845) · [Before (L11418-L11420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11418-L11420)

```diff
-   50% {
-     filter: drop-shadow(0 0 .8rem rgba(252, 211, 115, .9));
-     transform: scale(1.08)
+   to {
+     background-position: -30% 0
```

#### 1114. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11424-L11437` → after: `L12849-L12854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12849-L12854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12849-L12854) · [Before (L11424-L11437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11424-L11437)

```diff
- .PremiumCurrencyBundles {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
-   width: 100%
- }
- 
- .PremiumCurrencyBundles .PremiumCurrencyBundleGrid {
-   grid-gap: 1rem;
-   container: bundleGrid/inline-size;
-   display: grid;
-   gap: 1rem;
-   grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
+ .GiftWrapSwatch {
+   background: var(--gift-paper);
+   display: block;
+   height: 100%;
+   overflow: hidden;
+   position: relative;
```

#### 1115. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11441-L11442` → after: `L12858-L12866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12858-L12866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12858-L12866) · [Before (L11441-L11442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11441-L11442)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundleGrid.PremiumCurrencyBundleGridTileOnly {
-   grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr))
+ .GiftWrapSwatch:after {
+   background: var(--gift-ribbon);
+   bottom: 0;
+   content: "";
+   left: 50%;
+   position: absolute;
+   top: 0;
+   transform: translateX(-50%);
+   width: .16em
```

#### 1116. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11445-L11448` → after: `L12869-L12873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12869-L12873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12869-L12873) · [Before (L11445-L11448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11445-L11448)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundleGrid .PremiumCurrencyBundleGridAfterTile {
-   container: dealBannerSlot/inline-size;
-   grid-column: 1/-1;
-   min-width: 0
+ .MiddleScreenPopupBackground .MiddleScreenPopup.GiftLevelUpPopup {
+   box-sizing: border-box;
+   max-height: 100%;
+   overflow-x: hidden;
+   overflow-y: auto
```

#### 1117. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11451-L11453` → after: `L12876-L12880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12876-L12880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12876-L12880) · [Before (L11451-L11453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11451-L11453)

```diff
- @container bundleGrid (min-width: 42rem) {
-   .PremiumCurrencyBundles .PremiumCurrencyBundleGrid .PremiumCurrencyBundleGridAfterTile {
-     grid-column: 2/-1
+ @media(orientation:portrait)and (max-width:600px) {
+   .MiddleScreenPopupBackground .MiddleScreenPopup.GiftLevelUpPopup {
+     box-sizing: border-box;
+     max-width: none;
+     width: calc(100vw - 2rem)
```

#### 1118. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11457-L11465` → after: `L12884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12884) · [Before (L11457-L11465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11457-L11465)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundleGrid[data-off-screen] .PremiumCurrencyBundle:before,
- html[data-app-covered] .WholeAppWrapper .PremiumCurrencyBundles .PremiumCurrencyBundleGrid .PremiumCurrencyBundle:before {
-   animation-play-state: paused
- }
- 
- .PremiumCurrencyBundles .PremiumCurrencyBundle {
-   --pileGlow: rgba(243, 138, 182, .18);
-   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-71 -71 142 142%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28124,131,251%29%27 stop … [truncated]
-   --rayTurn: 60s;
+ .GiftLevelUp {
```

#### 1119. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11473` → after: `L12888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12888) · [Before (L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11473)

```diff
-   gap: .6rem;
+   gap: 1rem;
```

#### 1120. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11475-L11477` → after: `L12890-L12893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12890-L12893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12890-L12893) · [Before (L11475-L11477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11475-L11477)

```diff
-   overflow: hidden;
-   padding: .8rem .6rem .6rem;
-   position: relative
+   max-width: 100%;
+   padding: .6rem 0 .2rem;
+   position: relative;
+   width: 36rem
```

#### 1121. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11480-L11484` → after: `L12896-L12906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12896-L12906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12896-L12906) · [Before (L11480-L11484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11480-L11484)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle:before {
-   animation: premiumCurrencyBundleRays var(--rayTurn) linear infinite;
-   aspect-ratio: 1;
-   background: var(--rays) center/100% 100%;
-   content: "";
+ .GiftLevelUp .GiftLevelUpTitle {
+   animation: GiftLevelUpTitle .45s cubic-bezier(.34, 1.56, .64, 1);
+   color: #fcd373;
+   font-size: 2.6rem;
+   font-weight: 900
+ }
+ 
+ .GiftLevelUp .GiftLevelUpRays {
+   animation: GiftLevelUpRays 9s linear infinite;
+   background: repeating-conic-gradient(rgba(255, 185, 20, .22) 0 10deg, transparent 10deg 30deg);
+   height: 26rem;
```

#### 1122. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11486` → after: `L12908-L12911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12908-L12911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12908-L12911) · [Before (L11486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11486)

```diff
-   pointer-events: none;
+   margin-left: -13rem;
+   -webkit-mask-image: radial-gradient(closest-side, #000 30%, transparent);
+   mask-image: radial-gradient(closest-side, #000 30%, transparent);
+   opacity: .5;
```

#### 1123. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11488-L11490` → after: `L12913-L12915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12913-L12915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12913-L12915) · [Before (L11488-L11490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11488-L11490)

```diff
-   top: 52%;
-   transform: translate(-50%, -50%);
-   width: 142%;
+   top: 1rem;
+   transition: opacity .4s;
+   width: 26rem;
```

#### 1124. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11495` → after: `L12920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12920) · [Before (L11495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11495)

```diff
-   .PremiumCurrencyBundles .PremiumCurrencyBundle:before {
+   .GiftLevelUp .GiftLevelUpRays {
```

#### 1125. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11500-L11504` → after: `L12925-L12926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12925-L12926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12925-L12926) · [Before (L11500-L11504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11500-L11504)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount {
-   color: #fff;
-   font-size: 1.4rem;
-   font-weight: 900;
-   text-shadow: -1px -1px 0 #1a1f2e, -1px 0 0 #1a1f2e, -1px 1px 0 #1a1f2e, 0 -1px 0 #1a1f2e, 0 0 0 #1a1f2e, 0 1px 0 #1a1f2e, 1px -1px 0 #1a1f2e, 1px 0 0 #1a1f2e, 1px 1px 0 #1a1f2e
+ .GiftLevelUp.GiftLevelUpRevealed .GiftLevelUpRays {
+   opacity: 1
```

#### 1126. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11507-L11509` → after: `L12929-L12930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12929-L12930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12929-L12930) · [Before (L11507-L11509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11507-L11509)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount .svg-inline--fa,
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount.svg-inline--fa {
-   paint-order: stroke fill
+ .GiftLevelUp.GiftLevelUpMax .GiftLevelUpRays {
+   background: repeating-conic-gradient(rgba(243, 138, 182, .2) 0 8deg, rgba(255, 185, 20, .25) 8deg 16deg, transparent 16deg 30deg)
```

#### 1127. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11512-L11517` → after: `L12933-L12938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12933-L12938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12933-L12938) · [Before (L11512-L11517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11512-L11517)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount .svg-inline--fa path:only-of-type,
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundleAmount.svg-inline--fa path:only-of-type {
-   stroke: #1a1f2e;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .GiftLevelUp .GiftLevelUpTitleHolder {
+   align-items: center;
+   display: flex;
+   justify-content: center;
+   min-height: 4.4rem;
+   position: relative
```

#### 1128. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11520` → after: `L12941-L12949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12941-L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12941-L12949) · [Before (L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11520)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundlePile {
+ .GiftLevelUp .GiftLevelUpTitle.GiftLevelUpTitleTick {
+   animation: GiftLevelUpTick .22s cubic-bezier(.34, 1.56, .64, 1)
+ }
+ 
+ .GiftLevelUp.GiftLevelUpRevealed .GiftLevelUpTitle {
+   animation: GiftLevelUpLand .45s cubic-bezier(.34, 1.56, .64, 1)
+ }
+ 
+ .GiftLevelUp .GiftLevelUpHero {
```

#### 1129. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11524` → after: `L12952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12952) · [Before (L11524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11524)

```diff
-   height: 8rem;
+   height: 9rem;
```

#### 1130. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11526-L11527` → after: `L12954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12954) · [Before (L11526-L11527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11526-L11527)

```diff
-   position: relative;
-   width: 100%
+   position: relative
```

#### 1131. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11530-L11533` → after: `L12957-L12961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12957-L12961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12957-L12961) · [Before (L11530-L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11530-L11533)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundlePile img {
-   max-height: 100%;
-   max-width: 100%;
-   object-fit: contain
+ .GiftLevelUp .GiftLevelUpHeroArt {
+   animation: GiftLevelUpLand .5s cubic-bezier(.34, 1.56, .64, 1);
+   display: block;
+   font-size: 6.4rem;
+   line-height: 1
```

#### 1132. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11536-L11543` → after: `L12964-L12969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12964-L12969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L12964-L12969) · [Before (L11536-L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L11536-L11543)

```diff
- .PremiumCurrencyBundles .PremiumCurrencyBundle .PremiumCurrencyBundlePile .PremiumCurrencyBundleBonus {
-   background-color: #1dd06d;
-   bottom: 0;
-   color: #1a1f2e;
-   font-size: .8rem;
-   font-weight: 800;
-   padding: .1rem .6rem;
-   position: absolute
+ .GiftLevelUp .GiftLevelUpHeroArt.GiftLevelUpHeroWrap {
+   border: .3rem solid #ffb914;
+   box-sizing: border-box;
+   font-size: 7.8rem;
+   height: 8.4rem;
+   width: 8.4rem
```
